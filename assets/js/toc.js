/**
 * Table of Contents Generator
 * Wikipedia-style TOC with smooth scrolling, active section highlighting, and reading progress
 *
 * Validates Requirements: 7.1, 7.4, 7.5
 */

/**
 * Main function to generate the table of contents
 * Generates TOC from h2, h3, h4 headings only (not h1)
 */
function generateTOC() {
  try {
    const contentContainer = document.getElementById("content-container");
    const toc = document.getElementById("toc");
    const tocContent = document.querySelector(".toc-content");

    // Graceful error handling: hide TOC if required elements are missing
    if (!contentContainer || !toc || !tocContent) {
      console.warn("TOC generation skipped: required elements not found");
      if (toc) toc.hidden = true;
      return;
    }

    // Generate TOC from h2, h3, h4 headings only (Requirement 7.1)
    const headings = Array.from(
      contentContainer.querySelectorAll("h2, h3, h4"),
    );

    // Hide TOC if no headings found (graceful error handling)
    if (!headings.length) {
      toc.hidden = true;
      console.info("TOC hidden: no h2, h3, or h4 headings found");
      return;
    }

    // Build hierarchical tree structure
    const tree = buildHeadingTree(headings);

    // Render TOC
    tocContent.innerHTML = "";
    tocContent.appendChild(renderTOC(tree));

    // Initialize interactive features
    initTOCInteractions(headings);
    initTOCToggle();
    initTOCSearch();
    initReadingProgress();
    setupTOCFooterObserver();

    console.info(`TOC generated successfully with ${headings.length} headings`);
  } catch (error) {
    // Graceful error handling: hide TOC on any error
    console.error("TOC generation failed:", error);
    const toc = document.getElementById("toc");
    if (toc) {
      toc.hidden = true;
      toc.style.display = "none";
    }
  }
}

/**
 * Build hierarchical tree structure from flat heading list
 * @param {HTMLElement[]} headings - Array of heading elements
 * @returns {Object[]} Tree structure with nested children
 */
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

/**
 * Assign hierarchical numbering to headings
 * @param {Object[]} nodes - Tree nodes
 * @param {string} parentNumber - Parent's number prefix
 */
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

/**
 * Render TOC tree as HTML list structure
 * @param {Object[]} tree - Hierarchical tree structure
 * @returns {HTMLElement} Rendered TOC list
 */
function renderTOC(tree) {
  const list = document.createElement("ul");
  list.className = "vector-toc-contents";
  list.id = "mw-panel-toc-list";

  // Add "(Top)" link for scrolling to page top
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

  // Render all heading nodes
  tree.forEach((node) => {
    list.appendChild(createTOCItem(node));
  });

  return list;
}

/**
 * Create a single TOC item with proper Wikipedia-style classes
 * @param {Object} node - Tree node representing a heading
 * @returns {HTMLElement} TOC list item
 */
function createTOCItem(node) {
  const item = document.createElement("li");

  // Map heading levels to TOC levels (h2=level-1, h3=level-2, h4=level-3)
  const tocLevel = node.level - 1;

  item.className = [
    "vector-toc-list-item",
    `vector-toc-level-${Math.min(tocLevel, 3)}`,
    "vector-toc-list-item-expanded",
  ].join(" ");
  item.dataset.targetId = node.id;

  if (node.children.length) {
    item.classList.add("has-children", "is-expanded");
  }

  const textClass =
    tocLevel === 1
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

  // Add collapse/expand toggle for items with children
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

/**
 * Initialize TOC interactions: smooth scrolling, active highlighting, collapse/expand
 * Implements Requirements 7.4 (smooth scrolling) and 7.5 (active section highlighting)
 * @param {HTMLElement[]} headings - Array of heading elements
 */
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

  // Collapse/expand button handlers
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

  // TOC link click handlers - implement smooth scrolling (Requirement 7.4)
  tocLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");

      // Handle scroll to top
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

      // Handle scroll to heading (Requirement 7.4: smooth scrolling)
      const targetId = href ? href.slice(1) : "";
      const targetElement = targetId ? document.getElementById(targetId) : null;
      if (!targetElement) return;

      event.preventDefault();
      isProgrammaticScroll = true;
      setActiveLink(targetId, tocLinks);

      // Smooth scroll to target section
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

  // Expand/collapse all button
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

  // Intersection Observer for active section highlighting (Requirement 7.5)
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

  /**
   * Set active link highlighting (Requirement 7.5)
   * @param {string} targetId - ID of the active heading
   * @param {HTMLElement[]} links - Array of TOC links
   */
  function setActiveLink(targetId, links) {
    links.forEach((link) => {
      const href = link.getAttribute("href");
      const isTop = targetId === "__top__" && href === "#top-of-page";
      const isHeading = href === `#${targetId}`;
      const isActive = isTop || isHeading;
      const item = link.closest(".vector-toc-list-item");

      // Apply active classes for highlighting
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

  /**
   * Expand all ancestor branches of an item
   * @param {HTMLElement} item - TOC list item
   */
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

  /**
   * Sync expand/collapse all button text
   */
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

/**
 * Set expanded/collapsed state for a TOC item
 * @param {HTMLElement} item - TOC list item
 * @param {boolean} expanded - Whether to expand or collapse
 */
function setItemExpanded(item, expanded) {
  const button = item?.querySelector(":scope > .toc-collapse-toggle");
  const childList = item?.querySelector(":scope > .toc-children");
  if (!item || !button || !childList) return;

  item.classList.toggle("is-expanded", expanded);
  item.classList.toggle("vector-toc-list-item-expanded", expanded);
  button.setAttribute("aria-expanded", String(expanded));
  childList.hidden = !expanded;
}

/**
 * Initialize TOC toggle button for mobile
 */
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

/**
 * Toggle TOC visibility (mobile)
 * @param {boolean} show - Whether to show or hide TOC
 */
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

/**
 * Setup observer to detect when footer is visible
 */
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

/**
 * Initialize TOC search functionality
 */
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

/**
 * Show/hide "no results" message
 * @param {boolean} show - Whether to show message
 * @param {HTMLElement} container - Container element
 */
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

/**
 * Initialize and update reading progress bar (Requirement 7.5)
 */
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

  // Use requestAnimationFrame for smooth updates
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

/**
 * Create URL-friendly slug from heading text
 * @param {string} text - Heading text
 * @param {number} index - Heading index (fallback)
 * @returns {string} Slugified text
 */
function slugifyHeading(text, index) {
  const slug = text
    .toLowerCase()
    .trim()
    .replace(/[^\w\u4e00-\u9fff\s-]/g, "")
    .replace(/\s+/g, "-");

  return slug || `toc-heading-${index}`;
}

/**
 * Escape special regex characters
 * @param {string} text - Text to escape
 * @returns {string} Escaped text
 */
function escapeForRegex(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Check if user prefers reduced motion
 * @returns {boolean} True if reduced motion is preferred
 */
function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
