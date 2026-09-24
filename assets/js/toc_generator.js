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

  // Cache links to avoid O(N) DOM querying on scroll events
  const tocLinkMap = new Map();
  tocLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href) {
      tocLinkMap.set(href.slice(1), link);
    }
  });

  let isProgrammaticScroll = false;
  let currentActiveId = null;
  let lastSyncAt = 0;
  // Cache DOM layout properties to prevent Layout Thrashing during scroll events
  let cachedHeadingOffsets = [];

  function updateHeadingOffsets() {
    cachedHeadingOffsets = Array.from(headings).map((heading) => ({
      id: heading.id,
      offsetTop: heading.offsetTop,
    }));
  }

  updateHeadingOffsets();

  window.addEventListener("resize", () => {
    requestAnimationFrame(updateHeadingOffsets);
  }, { passive: true });

  if ('ResizeObserver' in window && contentContainer) {
    const observer = new ResizeObserver(() => {
      requestAnimationFrame(updateHeadingOffsets);
    });
    observer.observe(contentContainer);
  }

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

    const activeHeading = findActiveHeading(cachedHeadingOffsets);
    if (!activeHeading) return;

    const activeLink = tocLinkMap.get(activeHeading.id);
    if (activeLink) {
      setActiveLink(activeLink, true);
    }
  }, { passive: true });

  currentActiveId = setActiveFromHashOrTop(cachedHeadingOffsets, tocLinkMap);

  setTimeout(() => {
    initTOCToggle();
    initTOCSearch(tocLinks);
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
  if (headings.length === 0) return null;
  if (headings[0].offsetTop > scrollTop) return headings[0];

  let low = 0;
  let high = headings.length - 1;
  let activeIndex = 0;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (headings[mid].offsetTop <= scrollTop) {
      activeIndex = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return headings[activeIndex];
}

function setActiveFromHashOrTop(headings, tocLinkMap) {
  const hash = window.location.hash ? window.location.hash.slice(1) : "";
  const activeHeading = findActiveHeading(headings);
  const targetId = hash && document.getElementById(hash) ? hash : (activeHeading ? activeHeading.id : "");
  const activeLink = tocLinkMap.get(targetId);

  if (!activeLink) return null;
  activeLink.classList.add("active");
  expandAncestors(activeLink.closest("li.toc-item"));
  return targetId;
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

function initTOCSearch(tocLinks) {
  const searchInput = document.getElementById("tocSearch");
  const searchClear = document.getElementById("tocSearchClear");
  const tocContent = document.querySelector(".toc-content");

  if (!searchInput || !searchClear) return;

  // Pre-compute and cache search data to avoid O(N) DOM queries on every keystroke
  const cachedLinks = tocLinks.map((link) => {
    const href = link.getAttribute("href");
    const targetId = href ? href.slice(1) : "";
    const targetElement = targetId ? document.getElementById(targetId) : null;
    const originalText = targetElement ? targetElement.textContent.trim() : link.textContent.trim();
    return {
      link: link,
      item: link.closest(".toc-item"),
      originalText: originalText,
      lowerText: originalText.toLowerCase()
    };
  });

  searchInput.addEventListener("input", function onInput() {
    const searchTerm = this.value.toLowerCase().trim();
    searchClear.style.display = searchTerm ? "flex" : "none";

    let visibleCount = 0;
    const matchedItems = [];

    // Pre-compile the regex once per keystroke, rather than inside the O(N) loop
    let searchPattern = null;
    if (searchTerm) {
      searchPattern = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    }

    cachedLinks.forEach((cacheItem) => {
      const { link, item, originalText, lowerText } = cacheItem;
      link.textContent = originalText;

      const matches = lowerText.includes(searchTerm);

      if (matches || !searchTerm) {
        if (item) item.style.display = "";
        visibleCount += 1;
        if (matches && searchTerm && item) {
          matchedItems.push(item);
        }
        if (searchTerm && searchPattern) {
          link.innerHTML = originalText.replace(searchPattern, '<span class="toc-match">$1</span>');
        }
      } else {
        if (item) item.style.display = "none";
      }
    });

    if (searchTerm) {
      matchedItems.forEach((item) => {
        expandAncestors(item);
      });
    }

    const noResultsMsg = document.getElementById("tocNoResults");
    if (visibleCount === 0 && searchTerm) {
      if (!noResultsMsg && tocContent) {
        const msg = document.createElement("div");
        msg.id = "tocNoResults";
        msg.className = "toc-no-results";
        msg.innerHTML = '<i class="bi bi-search"></i> No matches found';
        tocContent.appendChild(msg);
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

  // Ctrl+K / Cmd+K to quickly focus TOC search (and open drawer if on mobile)
  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      // Check if not inside an input/textarea already
      const activeEl = document.activeElement;
      if (activeEl && (activeEl.tagName === "INPUT" || activeEl.tagName === "TEXTAREA") && activeEl !== searchInput) {
        return;
      }
      event.preventDefault();
      if (window.innerWidth <= 1024) {
        toggleTOC(true);
      }
      searchInput.focus();
      searchInput.select();
    }
  });
}

function initReadingProgress() {
  const progressBar = document.getElementById("readingProgress");
  const progressText = document.getElementById("progressText");
  const contentContainer = document.getElementById("content-container");

  if (!progressBar || !progressText || !contentContainer) return;

  // Cache layout reads to avoid forced synchronous layout recalculation on scroll
  let cachedWindowHeight = 0;
  let cachedContentTop = 0;
  let cachedContentHeight = 0;

  function updateProgressLayoutCache() {
    cachedWindowHeight = window.innerHeight;
    cachedContentTop = contentContainer.offsetTop;
    cachedContentHeight = contentContainer.offsetHeight;
  }

  updateProgressLayoutCache();

  window.addEventListener("resize", () => {
    requestAnimationFrame(updateProgressLayoutCache);
  }, { passive: true });

  if ('ResizeObserver' in window) {
    const observer = new ResizeObserver(() => {
      requestAnimationFrame(updateProgressLayoutCache);
    });
    observer.observe(contentContainer);
  }

  function updateProgress() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const contentBottom = cachedContentTop + cachedContentHeight;

    let progress = 0;
    if (scrollTop < cachedContentTop) {
      progress = 0;
    } else if (scrollTop + cachedWindowHeight > contentBottom) {
      progress = 100;
    } else {
      const scrolled = scrollTop - cachedContentTop;
      const scrollable = Math.max(1, cachedContentHeight - cachedWindowHeight);
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

