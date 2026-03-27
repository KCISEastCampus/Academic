/**
 * Theme Toggle JavaScript for Wikipedia-Style Design
 *
 * Handles theme switching between light and dark modes.
 * Persists user preference in localStorage.
 * Respects prefers-color-scheme when no saved preference exists.
 *
 * Validates: Requirements 2.3, 2.4, 2.5, 2.6
 */

(function () {
  "use strict";

  const html_element = document.documentElement;
  const theme_button = document.getElementById("theme_button");
  const theme_icon = theme_button?.querySelector(".theme-icon");
  const theme_label = theme_button?.querySelector(".theme-label");
  const isFloatingToggle = theme_button?.dataset.themeToggleMode !== "inline";

  /**
   * Get the preferred theme based on saved preference or system preference
   *
   * Priority:
   * 1. User's saved preference in localStorage
   * 2. System preference (prefers-color-scheme media query)
   * 3. Default to 'dark' if neither available
   *
   * Validates: Requirement 2.6
   */
  function getPreferredTheme() {
    try {
      const stored = localStorage.getItem("site-theme");
      if (stored) {
        return stored;
      }
      // Respect prefers-color-scheme when no saved preference exists
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    } catch (error) {
      // localStorage not available (e.g., private browsing)
      // Fall back to system preference
      console.warn("localStorage unavailable, using system preference:", error);
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
  }

  /**
   * Apply theme to the document
   *
   * Updates the data-bs-theme attribute on <html> element,
   * which triggers CSS variable updates via theme-specific selectors.
   * Persists the preference to localStorage.
   *
   * Validates: Requirements 2.3, 2.4
   *
   * @param {string} theme - 'light' or 'dark'
   */
  function applyTheme(theme) {
    try {
      // Update data-bs-theme attribute - this triggers CSS variable updates
      // via html[data-bs-theme="light"] selector in themes/light.css
      html_element.setAttribute("data-bs-theme", theme);

      // Persist theme preference in localStorage
      localStorage.setItem("site-theme", theme);

      // Update button UI to reflect current theme
      updateThemeButtonStatus();
    } catch (error) {
      // Silent failure - don't break user experience
      console.warn("Failed to apply theme:", error);
    }
  }

  /**
   * Check if current theme is dark
   *
   * @returns {boolean} true if dark theme is active
   */
  function isDarkTheme() {
    return html_element.getAttribute("data-bs-theme") === "dark";
  }

  /**
   * Update theme button icon and label to reflect current theme
   *
   * Shows sun icon when in dark mode (clicking will switch to light)
   * Shows moon icon when in light mode (clicking will switch to dark)
   */
  function updateThemeButtonStatus() {
    if (!theme_button || !theme_icon || !theme_label) return;

    if (isDarkTheme()) {
      // In dark mode, show sun icon (switch to light)
      theme_icon.classList.remove("bi-moon");
      theme_icon.classList.add("bi-sun");
      theme_label.textContent = "Light";
      theme_button.setAttribute("aria-label", "Switch to light theme");
    } else {
      // In light mode, show moon icon (switch to dark)
      theme_icon.classList.remove("bi-sun");
      theme_icon.classList.add("bi-moon");
      theme_label.textContent = "Dark";
      theme_button.setAttribute("aria-label", "Switch to dark theme");
    }
  }

  /**
   * Toggle between light and dark themes
   */
  function toggleTheme() {
    const newTheme = isDarkTheme() ? "light" : "dark";
    applyTheme(newTheme);
  }

  /**
   * Adjust button position based on page type
   *
   * Index pages have GitHub corner button, so theme button needs different positioning
   */
  function adjustButtonPosition() {
    if (!theme_button || !isFloatingToggle) return;

    const isIndexPage = document.querySelector(".github-corner") !== null;

    if (isIndexPage) {
      const isMobile = window.innerWidth <= 768;
      theme_button.style.top = isMobile ? "85px" : "90px";
      theme_button.style.right = "20px";
      theme_button.style.zIndex = "9998";
    }
  }

  /**
   * Listen for system theme preference changes
   *
   * If user hasn't set a preference, automatically switch when system preference changes
   */
  function watchSystemThemeChanges() {
    try {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      mediaQuery.addEventListener("change", (e) => {
        // Only auto-switch if user hasn't set a preference
        const hasUserPreference = localStorage.getItem("site-theme") !== null;
        if (!hasUserPreference) {
          const newTheme = e.matches ? "dark" : "light";
          applyTheme(newTheme);
        }
      });
    } catch (error) {
      // matchMedia not supported or addEventListener not available
      console.warn("Cannot watch system theme changes:", error);
    }
  }

  // ============================================================================
  // INITIALIZATION
  // ============================================================================

  // Apply saved or preferred theme on page load
  // Note: Initial theme is also applied in <head> to avoid flash (see head.html)
  // This ensures the theme is applied even if that script fails
  applyTheme(getPreferredTheme());

  // Adjust button position based on page type
  adjustButtonPosition();

  // Watch for system theme preference changes
  watchSystemThemeChanges();

  // Add click event listener to theme toggle button
  if (theme_button) {
    theme_button.addEventListener("click", toggleTheme);
  }

  // Re-adjust button position on window resize
  if (isFloatingToggle) {
    window.addEventListener("resize", adjustButtonPosition);
  }
})();
