function generateTOC() {
  const contentContainer = document.getElementById("content-container");
  const toc = document.getElementById("toc");
  const tocContent = document.querySelector(".toc-content");

  if (!contentContainer || !toc || !tocContent) return;

  const headings = Array.from(
    contentContainer.querySelectorAll("h1, h2, h3, h4"),
  );
  if (!headings.length) {
    toc.hidden = true;
    return;
  }

  const tree = buildHeadingTree(headings);
  tocContent.innerHTML = "";
  tocContent.appendChild(renderTOC(tree));

  initTOCInteractions(headings);
  initTOCToggle();
  initTOCSearch();
  initReadingProgress();
  setupTOCFooterObserver();
}

function buildHeadingTree(headings) {
  const root = [];
  const stack = [];

  headings.forEach((heading, index) => {
    const level = Number(heading.tagName.substring(1));
    const id = heading.id || slugifyHeading(heading.textContent, index);
    heading.id = id;

    const node = {
      id,
      level,
      text: heading.textContent.trim(),
      number: "",
      children: [],
    };

    while (stack.length && stack[stack.length - 1].level >= level) {
      stack.pop();
    }

    if (stack.length) {
      stack[stack.length - 1].children.push(node);
    } else {
      root.push(node);
    }

    stack.push(node);
  });

  assignHeadingNumbers(root);
  return root;
}

function assignHeadingNumbers(nodes, parentNumber = "") {
  nodes.forEach((node, index) => {
    node.number = parentNumber
      ? `${parentNumber}.${index + 1}`
      : `${index + 1}`;
    if (node.children.length) {
      assignHeadingNumbers(node.children, node.number);
    }
  });
}

function renderTOC(tree) {
  const list = document.createElement("ul");
  list.className = "vector-toc-contents";
  list.id = "mw-panel-toc-list";

  const topItem = document.createElement("li");
  topItem.className =
    "vector-toc-list-item vector-toc-level-1 vector-toc-list-item-active";
  topItem.dataset.targetId = "__top__";
  topItem.innerHTML = `
    <a href="#top-of-page" class="vector-toc-link toc-link">
      <span class="vector-toc-text">
        <span class="vector-toc-heading">(Top)</span>
      </span>
    </a>
  `;
  list.appendChild(topItem);

  tree.forEach((node) => {
    list.appendChild(createTOCItem(node));
  });

  return list;
}

function createTOCItem(node) {
  const item = document.createElement("li");
  item.className = [
    "vector-toc-list-item",
    `vector-toc-level-${Math.min(node.level, 4)}`,
    "vector-toc-list-item-expanded",
  ].join(" ");
  item.dataset.targetId = node.id;

  if (node.children.length) {
    item.classList.add("has-children", "is-expanded");
  }

  const textClass =
    node.level === 1
      ? "vector-toc-text"
      : "vector-toc-text vector-toc-text-subtle";
  item.innerHTML = `
    <a class="vector-toc-link toc-link" href="#${node.id}">
      <span class="${textClass}">
        <span class="vector-toc-numb">${node.number}</span>
        <span class="vector-toc-heading">${node.text}</span>
      </span>
    </a>
  `;

  if (node.children.length) {
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "vector-toc-toggle toc-collapse-toggle";
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", `Toggle ${node.text} subsection`);
    toggle.innerHTML = `
      <span class="vector-icon" aria-hidden="true">
        <i class="bi bi-chevron-down"></i>
      </span>
      <span class="vector-toc-toggle-text visually-hidden">Toggle ${node.text} subsection</span>
    `;
    item.appendChild(toggle);

    const childList = document.createElement("ul");
    childList.className = "vector-toc-list toc-children";
    childList.id = `toc-${node.id}-sublist`;
    node.children.forEach((child) =>
      childList.appendChild(createTOCItem(child)),
    );
    item.appendChild(childList);

    toggle.setAttribute("aria-controls", childList.id);
  }

  return item;
}

function initTOCInteractions(headings) {
  const toc = document.getElementById("toc");
  const tocLinks = Array.from(document.querySelectorAll(".toc-link"));
  const collapseButtons = Array.from(
    document.querySelectorAll(".toc-collapse-toggle"),
  );
  const expandAllButton = document.getElementById("tocExpandAll");
  let isProgrammaticScroll = false;
  let activeId = "__top__";
  let manualExpandMode = false;

  collapseButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const item = button.closest(".vector-toc-list-item");
      const shouldExpand = !item.classList.contains("is-expanded");
      manualExpandMode = true;
      setItemExpanded(item, shouldExpand);
      syncExpandAllButton();
    });
  });

  tocLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (href === "#top-of-page") {
        event.preventDefault();
        isProgrammaticScroll = true;
        window.scrollTo({
          top: 0,
          behavior: prefersReducedMotion() ? "auto" : "smooth",
        });
        setActiveLink("__top__", tocLinks);
        window.setTimeout(
          () => {
            isProgrammaticScroll = false;
          },
          prefersReducedMotion() ? 0 : 700,
        );
        if (window.innerWidth <= 1024) toggleTOC(false);
        return;
      }

      const targetId = href ? href.slice(1) : "";
      const targetElement = targetId ? document.getElementById(targetId) : null;
      if (!targetElement) return;

      event.preventDefault();
      isProgrammaticScroll = true;
      setActiveLink(targetId, tocLinks);
      expandAncestorBranches(link.closest(".vector-toc-list-item"));

      targetElement.scrollIntoView({
        behavior: prefersReducedMotion() ? "auto" : "smooth",
        block: "start",
      });

      window.setTimeout(
        () => {
          isProgrammaticScroll = false;
        },
        prefersReducedMotion() ? 0 : 700,
      );

      if (window.innerWidth <= 1024) {
        toggleTOC(false);
      }
    });
  });

  if (expandAllButton) {
    expandAllButton.addEventListener("click", () => {
      const expandableItems = Array.from(
        document.querySelectorAll(".vector-toc-list-item.has-children"),
      );
      const shouldExpandAll = expandableItems.some(
        (item) => !item.classList.contains("is-expanded"),
      );
      manualExpandMode = shouldExpandAll;
      expandableItems.forEach((item) => setItemExpanded(item, shouldExpandAll));
      if (!manualExpandMode) {
        syncAutoBranchState();
      }
      syncExpandAllButton();
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      if (isProgrammaticScroll) return;

      const visibleEntries = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (!visibleEntries.length) {
        const shouldTopBeActive = window.scrollY < 180;
        if (shouldTopBeActive && activeId !== "__top__") {
          activeId = "__top__";
          setActiveLink(activeId, tocLinks);
        }
        return;
      }

      const nextActive = visibleEntries[0].target.id;
      if (!nextActive || nextActive === activeId) return;

      activeId = nextActive;
      setActiveLink(nextActive, tocLinks);
    },
    {
      rootMargin: "-12% 0px -72% 0px",
      threshold: [0, 0.2, 0.6, 1],
    },
  );

  headings.forEach((heading) => observer.observe(heading));
  collapseAllBranches();
  setActiveLink(activeId, tocLinks);
  syncExpandAllButton();

  function setActiveLink(targetId, links) {
    links.forEach((link) => {
      const href = link.getAttribute("href");
      const isTop = targetId === "__top__" && href === "#top-of-page";
      const isHeading = href === `#${targetId}`;
      const isActive = isTop || isHeading;
      const item = link.closest(".vector-toc-list-item");
      link.classList.toggle("active", isActive);
      item?.classList.toggle("vector-toc-list-item-active", isActive);
      item?.classList.toggle(
        "vector-toc-level-1-active",
        isActive && item.classList.contains("vector-toc-level-1"),
      );

      if (isActive && !manualExpandMode) {
        syncActiveBranch(item, targetId);
      }

      if (isActive && targetId !== "__top__") {
        link.scrollIntoView({
          behavior: prefersReducedMotion() ? "auto" : "smooth",
          block: "nearest",
        });
      }
    });
  }

  function syncActiveBranch(item, targetId) {
    const activeBranch = new Set();

    if (targetId !== "__top__") {
      let current = item;
      while (current) {
        if (current.classList.contains("has-children")) {
          activeBranch.add(current);
        }
        current =
          current.parentElement?.closest(".vector-toc-list-item") || null;
      }
    }

    document
      .querySelectorAll(".vector-toc-list-item.has-children")
      .forEach((branchItem) => {
        setItemExpanded(branchItem, activeBranch.has(branchItem));
      });

    syncExpandAllButton();
  }

  function collapseAllBranches() {
    document
      .querySelectorAll(".vector-toc-list-item.has-children")
      .forEach((item) => setItemExpanded(item, false));
    syncExpandAllButton();
  }

  function syncAutoBranchState() {
    if (manualExpandMode) return;

    if (activeId === "__top__") {
      collapseAllBranches();
      return;
    }

    const activeLink = tocLinks.find(
      (link) => link.getAttribute("href") === `#${activeId}`,
    );
    const activeItem = activeLink?.closest(".vector-toc-list-item") || null;
    syncActiveBranch(activeItem, activeId);
  }

  function syncExpandAllButton() {
    if (!expandAllButton) return;
    const collapsedItems = document.querySelectorAll(
      ".vector-toc-list-item.has-children:not(.is-expanded)",
    );
    const shouldShowExpand = collapsedItems.length > 0;
    expandAllButton.textContent = shouldShowExpand ? "Expand" : "Collapse";
    expandAllButton.setAttribute(
      "aria-label",
      shouldShowExpand ? "Expand all sections" : "Collapse all sections",
    );
  }
}

function setItemExpanded(item, expanded) {
  const button = item?.querySelector(":scope > .toc-collapse-toggle");
  const childList = item?.querySelector(":scope > .toc-children");
  if (!item || !button || !childList) return;

  item.classList.toggle("is-expanded", expanded);
  item.classList.toggle("vector-toc-list-item-expanded", expanded);
  button.setAttribute("aria-expanded", String(expanded));
  childList.hidden = !expanded;
}

function initTOCToggle() {
  const tocToggle = document.getElementById("tocToggle");
  const toc = document.getElementById("toc");

  if (!tocToggle || !toc) return;

  tocToggle.replaceWith(tocToggle.cloneNode(true));
  const newToggle = document.getElementById("tocToggle");
  newToggle.setAttribute("aria-expanded", "false");
  newToggle.setAttribute("aria-controls", "toc");

  newToggle.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleTOC(!toc.classList.contains("show"));
  });

  document.addEventListener("click", (event) => {
    if (window.innerWidth > 1024) return;
    if (!toc.classList.contains("show")) return;
    if (toc.contains(event.target) || newToggle.contains(event.target)) return;
    toggleTOC(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toc.classList.contains("show")) {
      toggleTOC(false);
    }
  });
}

function toggleTOC(show) {
  const toc = document.getElementById("toc");
  const tocToggle = document.getElementById("tocToggle");

  if (!toc || !tocToggle) return;

  toc.classList.toggle("show", show);
  tocToggle.classList.toggle("active", show);
  tocToggle.innerHTML = show
    ? '<i class="bi bi-x-lg" aria-hidden="true"></i>'
    : '<i class="bi bi-list" aria-hidden="true"></i>';
  tocToggle.setAttribute("aria-expanded", String(show));
  document.body.style.overflow =
    show && window.innerWidth <= 1024 ? "hidden" : "";

  if (show && window.innerWidth <= 1024) {
    const firstLink = toc.querySelector(".toc-link");
    if (firstLink) {
      window.setTimeout(() => firstLink.focus(), 120);
    }
  }

  if (!show && document.activeElement && toc.contains(document.activeElement)) {
    tocToggle.focus();
  }
}

function setupTOCFooterObserver() {
  const toc = document.getElementById("toc");
  const footer = document.querySelector("footer");

  if (
    !toc ||
    !footer ||
    !("IntersectionObserver" in window) ||
    window.innerWidth <= 1024
  )
    return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        toc.classList.toggle("toc-footer-visible", entry.isIntersecting);
      });
    },
    {
      root: null,
      threshold: 0,
    },
  );

  observer.observe(footer);
}

function initTOCSearch() {
  const searchInput = document.getElementById("tocSearch");
  const searchClear = document.getElementById("tocSearchClear");
  const tocContent = document.querySelector(".toc-content");
  if (!searchInput || !searchClear || !tocContent) return;

  const items = Array.from(document.querySelectorAll(".vector-toc-list-item"));

  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    searchClear.style.display = searchTerm ? "flex" : "none";

    let visibleCount = 0;

    items.forEach((item) => {
      const link = item.querySelector(":scope > .toc-link");
      if (!link) return;

      const headingSpan = link.querySelector(".vector-toc-heading");
      const topText = link.querySelector(".vector-toc-text");
      const originalText =
        headingSpan?.dataset.originalText ||
        headingSpan?.textContent.trim() ||
        topText?.textContent.trim() ||
        "";

      if (headingSpan) {
        headingSpan.dataset.originalText = originalText;
        headingSpan.textContent = originalText;
      } else if (topText) {
        topText.textContent = originalText;
      }

      const matched = originalText.toLowerCase().includes(searchTerm);
      item.dataset.matched = matched ? "true" : "false";
      item.dataset.childMatch = "false";

      if (!searchTerm) {
        item.hidden = false;
        return;
      }

      if (matched && headingSpan) {
        const regex = new RegExp(`(${escapeForRegex(searchTerm)})`, "gi");
        headingSpan.innerHTML = originalText.replace(
          regex,
          '<span class="toc-match">$1</span>',
        );
      }
    });

    if (searchTerm) {
      for (let index = items.length - 1; index >= 0; index -= 1) {
        const item = items[index];
        const hasChildMatch = Array.from(
          item.querySelectorAll(":scope > .toc-children .vector-toc-list-item"),
        ).some(
          (child) =>
            child.dataset.matched === "true" ||
            child.dataset.childMatch === "true",
        );

        item.dataset.childMatch = hasChildMatch ? "true" : "false";
        const shouldShow = item.dataset.matched === "true" || hasChildMatch;
        item.hidden = !shouldShow;

        if (shouldShow) {
          visibleCount += 1;
        }

        if (hasChildMatch) {
          setItemExpanded(item, true);
        }
      }
    } else {
      visibleCount = items.length;
    }

    syncNoResults(visibleCount === 0, tocContent);
  });

  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    searchInput.dispatchEvent(new Event("input"));
    searchInput.focus();
  });

  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      searchInput.value = "";
      searchInput.dispatchEvent(new Event("input"));
      searchInput.blur();
    }
  });
}

function syncNoResults(show, container) {
  const existing = document.getElementById("tocNoResults");
  if (show && !existing) {
    const message = document.createElement("div");
    message.id = "tocNoResults";
    message.className = "toc-no-results";
    message.innerHTML =
      '<i class="bi bi-search" aria-hidden="true"></i>No matches found';
    container.appendChild(message);
  }

  if (!show && existing) {
    existing.remove();
  }
}

function initReadingProgress() {
  const progressBar = document.getElementById("readingProgress");
  const progressText = document.getElementById("progressText");
  const contentContainer = document.getElementById("content-container");

  if (!progressBar || !progressText || !contentContainer) return;

  const updateProgress = () => {
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const contentTop = contentContainer.offsetTop;
    const contentHeight = contentContainer.offsetHeight;
    const contentBottom = contentTop + contentHeight;

    let progress = 0;

    if (scrollTop < contentTop) {
      progress = 0;
    } else if (scrollTop + windowHeight >= contentBottom) {
      progress = 100;
    } else {
      const contentScrolled = scrollTop - contentTop;
      const contentScrollable = Math.max(contentHeight - windowHeight, 1);
      progress = (contentScrolled / contentScrollable) * 100;
    }

    progress = Math.max(0, Math.min(100, progress));
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${Math.round(progress)}%`;
  };

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking) return;
    window.requestAnimationFrame(() => {
      updateProgress();
      ticking = false;
    });
    ticking = true;
  });

  window.addEventListener("resize", updateProgress);
  updateProgress();
}

function slugifyHeading(text, index) {
  const slug = text
    .toLowerCase()
    .trim()
    .replace(/[^\w\u4e00-\u9fff\s-]/g, "")
    .replace(/\s+/g, "-");

  return slug || `toc-heading-${index}`;
}

function escapeForRegex(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
