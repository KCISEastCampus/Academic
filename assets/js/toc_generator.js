function generateTOC() {
  const contentContainer = document.getElementById("content-container");
  const tocContent = document.querySelector(".toc-content");

  if (!contentContainer || !tocContent) return;

  const headings = Array.from(contentContainer.querySelectorAll("h1, h2, h3, h4"));
  if (headings.length === 0) {
    tocContent.innerHTML = "";
    return;
  }

  const tree = buildTOCTree(headings);
  tocContent.innerHTML = renderTOCTree(tree);

  const tocLinks = Array.from(tocContent.querySelectorAll("a[data-toc-link]"));
  let isProgrammaticScroll = false;
  let currentActiveId = null;
  let lastSyncAt = 0;

  tocContent.addEventListener("click", (event) => {
    const collapseBtn = event.target.closest(".toc-collapse");
    if (collapseBtn) {
      event.preventDefault();
      toggleBranch(collapseBtn.closest("li.toc-item"));
      return;
    }

    const link = event.target.closest("a[data-toc-link]");
    if (!link) return;

    event.preventDefault();
    const targetId = link.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    isProgrammaticScroll = true;
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${targetId}`);
    setActiveLink(link, false);

    setTimeout(() => {
      isProgrammaticScroll = false;
    }, 700);

    if (window.innerWidth <= 1024) {
      toggleTOC(false);
    }
  });

  window.addEventListener("scroll", () => {
    if (isProgrammaticScroll) return;

    const now = Date.now();
    if (now - lastSyncAt < 80) return;
    lastSyncAt = now;

    const activeHeading = findActiveHeading(headings);
    if (!activeHeading) return;

    const activeLink = tocContent.querySelector(`a[data-toc-link][href="#${activeHeading.id}"]`);
    if (activeLink) {
      setActiveLink(activeLink, true);
    }
  }, { passive: true });

  setActiveFromHashOrTop(headings, tocContent);
  const initialActiveLink = tocContent.querySelector("a[data-toc-link].active");
  if (initialActiveLink) {
    currentActiveId = initialActiveLink.getAttribute("href").slice(1);
  }

  setTimeout(() => {
    initTOCToggle();
    initTOCSearch();
    initReadingProgress();
  }, 80);

  function setActiveLink(link, autoScrollInToc) {
    const nextActiveId = link.getAttribute("href").slice(1);
    if (nextActiveId === currentActiveId) {
      return;
    }

    currentActiveId = nextActiveId;
    tocLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
    expandAncestors(link.closest("li.toc-item"));

    if (autoScrollInToc && window.innerWidth > 1024) {
      syncLinkVisibility(link);
    }
  }

  function syncLinkVisibility(link) {
    const containerRect = tocContent.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    const topPadding = 18;
    const bottomPadding = 22;

    const isAbove = linkRect.top < containerRect.top + topPadding;
    const isBelow = linkRect.bottom > containerRect.bottom - bottomPadding;

    if (!isAbove && !isBelow) {
      return;
    }

    const delta = linkRect.top - containerRect.top - containerRect.height * 0.35;
    tocContent.scrollTo({
      top: tocContent.scrollTop + delta,
      behavior: "auto"
    });
  }
}

function buildTOCTree(headings) {
  const roots = [];
  const stack = [];

  headings.forEach((heading, index) => {
    const id = heading.id || `toc-heading-${index}`;
    heading.id = id;

    const level = Number(heading.tagName.substring(1));
    const node = {
      id,
      text: heading.textContent.trim(),
      level,
      children: []
    };

    while (stack.length && level <= stack[stack.length - 1].level) {
      stack.pop();
    }

    if (stack.length === 0) {
      roots.push(node);
    } else {
      stack[stack.length - 1].children.push(node);
    }

    stack.push(node);
  });

  return roots;
}

function renderTOCTree(nodes) {
  const renderNodes = (list) => {
    let html = '<ul class="toc-tree">';
    list.forEach((node) => {
      const levelClass = `toc-h${node.level}`;
      const hasChildren = node.children.length > 0;
      const itemClass = hasChildren ? "toc-item has-children expanded" : "toc-item";

      html += `<li class="${itemClass} ${levelClass} toc-level-${node.level}">`;
      html += '<div class="toc-row">';

      if (hasChildren) {
        html += `<button class="toc-collapse" type="button" aria-label="Collapse section" aria-expanded="true"></button>`;
      } else {
        html += '<span class="toc-spacer" aria-hidden="true"></span>';
      }

      html += `<a data-toc-link href="#${node.id}">${escapeHtml(node.text)}</a>`;
      html += "</div>";

      if (hasChildren) {
        html += `<div class="toc-children">${renderNodes(node.children)}</div>`;
      }

      html += "</li>";
    });
    html += "</ul>";
    return html;
  };

  return renderNodes(nodes);
}

function findActiveHeading(headings) {
  const offset = 140;
  const scrollTop = window.scrollY + offset;
  let current = headings[0];

  for (let i = 0; i < headings.length; i += 1) {
    if (headings[i].offsetTop <= scrollTop) {
      current = headings[i];
    } else {
      break;
    }
  }

  return current;
}

function setActiveFromHashOrTop(headings, tocContent) {
  const hash = window.location.hash ? window.location.hash.slice(1) : "";
  const targetId = hash && document.getElementById(hash) ? hash : findActiveHeading(headings).id;
  const activeLink = tocContent.querySelector(`a[data-toc-link][href="#${targetId}"]`);

  if (!activeLink) return;
  activeLink.classList.add("active");
  expandAncestors(activeLink.closest("li.toc-item"));
}

function expandAncestors(item) {
  let current = item;
  while (current) {
    if (current.classList.contains("collapsed")) {
      current.classList.remove("collapsed");
      current.classList.add("expanded");
      const button = current.querySelector(":scope > .toc-row > .toc-collapse");
      if (button) button.setAttribute("aria-expanded", "true");
    }
    current = current.parentElement ? current.parentElement.closest("li.toc-item") : null;
  }
}

function toggleBranch(item) {
  if (!item || !item.classList.contains("has-children")) return;
  const isCollapsed = item.classList.toggle("collapsed");
  item.classList.toggle("expanded", !isCollapsed);

  const button = item.querySelector(":scope > .toc-row > .toc-collapse");
  if (button) {
    button.setAttribute("aria-expanded", String(!isCollapsed));
  }
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function initTOCToggle() {
  const tocToggle = document.getElementById("tocToggle");
  const toc = document.getElementById("toc");

  if (!tocToggle || !toc) return;

  tocToggle.replaceWith(tocToggle.cloneNode(true));
  const newTocToggle = document.getElementById("tocToggle");
  newTocToggle.setAttribute("aria-expanded", "false");
  newTocToggle.setAttribute("aria-controls", "toc");

  newTocToggle.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleTOC(!toc.classList.contains("show"));
  });

  document.addEventListener("click", (event) => {
    if (
      window.innerWidth <= 1024 &&
      toc.classList.contains("show") &&
      !toc.contains(event.target) &&
      !newTocToggle.contains(event.target)
    ) {
      toggleTOC(false);
    }
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

  if (show) {
    toc.classList.add("show");
    tocToggle.classList.add("active");
    tocToggle.innerHTML = '<i class="bi bi-x" aria-hidden="true"></i>';
    tocToggle.setAttribute("aria-expanded", "true");
    if (window.innerWidth <= 1024) {
      document.body.style.overflow = "hidden";
    }
  } else {
    toc.classList.remove("show");
    tocToggle.classList.remove("active");
    tocToggle.innerHTML = '<i class="bi bi-list" aria-hidden="true"></i>';
    tocToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
}

function initTOCSearch() {
  const searchInput = document.getElementById("tocSearch");
  const searchClear = document.getElementById("tocSearchClear");
  const tocLinks = Array.from(document.querySelectorAll(".toc-content a[data-toc-link]"));

  if (!searchInput || !searchClear) return;

  searchInput.addEventListener("input", function onInput() {
    const searchTerm = this.value.toLowerCase().trim();
    searchClear.style.display = searchTerm ? "flex" : "none";

    let visibleCount = 0;
    const matchedItems = [];

    tocLinks.forEach((link) => {
      const href = link.getAttribute("href");
      const targetId = href ? href.slice(1) : "";
      const targetElement = targetId ? document.getElementById(targetId) : null;
      const originalText = targetElement ? targetElement.textContent.trim() : link.textContent.trim();
      link.textContent = originalText;

      const item = link.closest(".toc-item");
      const matches = originalText.toLowerCase().includes(searchTerm);

      if (matches || !searchTerm) {
        item.style.display = "";
        visibleCount += 1;
        if (matches && searchTerm) {
          matchedItems.push(item);
        }
        if (searchTerm) {
          const pattern = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
          link.innerHTML = originalText.replace(pattern, '<span class="toc-match">$1</span>');
        }
      } else {
        item.style.display = "none";
      }
    });

    if (searchTerm) {
      matchedItems.forEach((item) => {
        expandAncestors(item);
      });
    }

    const noResultsMsg = document.getElementById("tocNoResults");
    if (visibleCount === 0 && searchTerm) {
      if (!noResultsMsg) {
        const msg = document.createElement("div");
        msg.id = "tocNoResults";
        msg.className = "toc-no-results";
        msg.innerHTML = '<i class="bi bi-search"></i> No matches found';
        document.querySelector(".toc-content").appendChild(msg);
      }
    } else if (noResultsMsg) {
      noResultsMsg.remove();
    }
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

function initReadingProgress() {
  const progressBar = document.getElementById("readingProgress");
  const progressText = document.getElementById("progressText");
  const contentContainer = document.getElementById("content-container");

  if (!progressBar || !progressText || !contentContainer) return;

  function updateProgress() {
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const contentTop = contentContainer.offsetTop;
    const contentHeight = contentContainer.offsetHeight;
    const contentBottom = contentTop + contentHeight;

    let progress = 0;
    if (scrollTop < contentTop) {
      progress = 0;
    } else if (scrollTop + windowHeight > contentBottom) {
      progress = 100;
    } else {
      const scrolled = scrollTop - contentTop;
      const scrollable = Math.max(1, contentHeight - windowHeight);
      progress = (scrolled / scrollable) * 100;
    }

    progress = Math.max(0, Math.min(100, progress));
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${Math.round(progress)}%`;
  }

  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      window.requestAnimationFrame(() => {
        updateProgress();
        ticking = false;
      });
      ticking = true;
    },
    { passive: true }
  );

  updateProgress();
}

