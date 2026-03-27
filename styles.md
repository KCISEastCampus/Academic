# Wikipedia-Style Design System

## Overview
This document defines the complete visual design system based on Wikipedia's interface, including light and dark mode color schemes, typography, layout patterns, and component specifications.

---

## Color Palette

### Light Mode (Default)
```css
/* Primary Background Colors */
--background-primary: #ffffff;
--background-secondary: #f8f9fa;
--background-tertiary: #eaecf0;
--background-interactive: #f8f9fa;

/* Border Colors */
--border-base: #a2a9b1;
--border-subtle: #c8ccd1;
--border-muted: #eaecf0;

/* Text Colors */
--color-base: #202122;
--color-base-fixed: #202122;
--color-subtle: #54595d;
--color-placeholder: #72777d;
--color-disabled: #a2a9b1;

/* Link Colors */
--color-progressive: #0645ad;
--color-progressive-hover: #0b0080;
--color-progressive-active: #0645ad;
--color-visited: #0b0080;

/* Interactive Colors */
--color-destructive: #d73333;
--color-warning: #edab00;
--color-success: #14866d;
--color-notice: #202122;

/* Component-Specific Colors */
--background-color-interactive-subtle: #f8f9fa;
--background-color-progressive-subtle: #eaf3ff;
--background-color-destructive-subtle: #fee7e6;

/* Navigation & Header */
--background-header: #ffffff;
--background-nav: #f8f9fa;
--background-sidebar: #f8f9fa;

/* Tables & Infoboxes */
--background-infobox-header: #c3d6ef;
--background-infobox-subheader: #dcdcdc;
--background-table-header: #aacccc;
--background-table-odd: #f7f7f7;
--background-table-even: transparent;

/* Navbox Colors */
--background-navbox: #fdfdfd;
--background-navbox-title: #ccf;
--background-navbox-group: #ddf;
--background-navbox-subgroup: #e6e6ff;
--background-navbox-odd: #f7f7f7;
--background-navbox-even: transparent;
```

### Dark Mode
```css
/* Primary Background Colors */
--background-primary: #1f1f23;
--background-secondary: #27272b;
--background-tertiary: #2e2e32;
--background-interactive: #27272b;

/* Border Colors */
--border-base: #515455;
--border-subtle: #3f4041;
--border-muted: #2e2e32;

/* Text Colors */
--color-base: #f8f9fa;
--color-base-fixed: #d1cbc2;
--color-subtle: #c8c8c8;
--color-placeholder: #a2a9b1;
--color-disabled: #72777d;

/* Link Colors */
--color-progressive: #6b9ff5;
--color-progressive-hover: #8fb3ff;
--color-progressive-active: #6b9ff5;
--color-visited: #b19aff;

/* Interactive Colors */
--color-destructive: #ff6e6e;
--color-warning: #ffcc33;
--color-success: #3eaf7c;
--color-notice: #f8f9fa;

/* Component-Specific Colors */
--background-color-interactive-subtle: #2e2e32;
--background-color-progressive-subtle: #1a3a5a;
--background-color-destructive-subtle: #4a2020;

/* Navigation & Header */
--background-header: #1f1f23;
--background-nav: #27272b;
--background-sidebar: #27272b;

/* Tables & Infoboxes */
--background-infobox-header: #373a3a;
--background-infobox-subheader: #363838;
--background-table-header: #3f5856;
--background-table-odd: #2b2d2e;
--background-table-even: transparent;

/* Navbox Colors */
--background-navbox: #27272b;
--background-navbox-title: #373a3a;
--background-navbox-group: #363838;
--background-navbox-subgroup: #2b2d2e;
--background-navbox-odd: #2b2d2e;
--background-navbox-even: transparent;
```

---

## Typography

### Font Families
```css
/* Primary Font Stack */
--font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
                     'Helvetica Neue', Arial, sans-serif;

/* Monospace Font Stack */
--font-family-monospace: 'Courier New', Courier, monospace;

/* Serif Font Stack (for special content) */
--font-family-serif: Georgia, 'Times New Roman', Times, serif;
```

### Font Sizes
```css
--font-size-xx-small: 11px;
--font-size-x-small: 12px;
--font-size-small: 13px;
--font-size-medium: 14px;    /* Base size */
--font-size-large: 16px;
--font-size-x-large: 18px;
--font-size-xx-large: 21px;
--font-size-xxx-large: 24px;
```

### Font Weights
```css
--font-weight-normal: 400;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### Line Heights
```css
--line-height-tight: 1.25;
--line-height-base: 1.5;
--line-height-relaxed: 1.6;
--line-height-loose: 1.8;
```

### Heading Styles
```css
/* H1 - Page Title */
h1.firstHeading {
  font-size: 28px;
  font-weight: 400;
  line-height: 1.3;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid var(--border-subtle);
  font-family: 'Linux Libertine', Georgia, Times, serif;
}

/* H2 - Major Sections */
h2 {
  font-size: 21px;
  font-weight: 400;
  line-height: 1.3;
  margin-top: 1em;
  margin-bottom: 0.25em;
  border-bottom: 1px solid var(--border-subtle);
  font-family: 'Linux Libertine', Georgia, Times, serif;
}

/* H3 - Subsections */
h3 {
  font-size: 17px;
  font-weight: 600;
  line-height: 1.3;
  margin-top: 0.5em;
  margin-bottom: 0.25em;
}

/* H4-H6 - Minor Headings */
h4, h5, h6 {
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  margin-top: 0.5em;
  margin-bottom: 0.25em;
}
```

---

## Layout Structure

### Page Container
```css
.mw-page-container {
  max-width: 100%;
  margin: 0 auto;
  background: var(--background-primary);
}
```

### Main Content Area
```css
.mw-content-container {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
}

.mw-body {
  flex: 1;
  padding: 1em 2em;
  max-width: 960px;
  margin: 0 auto;
}

/* Content Width Modes */
.vector-feature-limited-width-enabled .mw-body {
  max-width: 960px;
}

.vector-feature-limited-width-disabled .mw-body {
  max-width: 100%;
}
```

### Sidebar Navigation
```css
.vector-column-start {
  width: 220px;
  flex-shrink: 0;
  padding: 12px;
  background: var(--background-sidebar);
}

.vector-main-menu {
  position: sticky;
  top: 0;
}
```

### Table of Contents
```css
.vector-toc {
  width: 280px;
  position: sticky;
  top: 0;
  max-height: 100vh;
  overflow-y: auto;
  padding: 12px;
  background: var(--background-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: 2px;
}

.vector-toc-contents {
  list-style: none;
  padding: 0;
  margin: 0;
}

.vector-toc-list-item {
  padding: 4px 0;
}

.vector-toc-link {
  color: var(--color-progressive);
  text-decoration: none;
  display: block;
  padding: 4px 8px;
  border-radius: 2px;
}

.vector-toc-link:hover {
  background: var(--background-color-interactive-subtle);
  text-decoration: none;
}

.vector-toc-level-1 {
  font-weight: 600;
}

.vector-toc-level-2 {
  padding-left: 16px;
}

.vector-toc-level-3 {
  padding-left: 32px;
  font-size: 13px;
}
```

---

## Component Specifications

### Infobox
```css
.infobox {
  width: 25.5em;
  border: 1px solid var(--border-base);
  border-spacing: 2px;
  background: var(--background-secondary);
  float: right;
  clear: right;
  margin: 0 0 1em 1em;
  font-size: 88%;
  line-height: 1.5em;
}

.infobox-above {
  background: var(--background-infobox-header);
  color: inherit;
  text-align: center;
  vertical-align: middle;
  font-size: 110%;
  font-weight: 600;
  padding: 0.25em 1em;
}

.infobox-subheader {
  background: var(--background-infobox-subheader);
  color: inherit;
  text-align: center;
  vertical-align: middle;
  padding: 0.25em 1em;
  font-style: italic;
}

.infobox-image {
  text-align: center;
  border-bottom: 1px solid var(--border-subtle);
  line-height: 1.5em;
  padding: 0.5em;
}

.infobox-label {
  padding-right: 1em;
  font-weight: 600;
  vertical-align: top;
}

.infobox-data {
  vertical-align: top;
}

.infobox-header {
  background: var(--background-infobox-header);
  color: inherit;
  text-align: center;
  vertical-align: middle;
  font-size: 110%;
  font-weight: 600;
}
```

### Navigation Boxes (Navbox)
```css
.navbox {
  border: 1px solid var(--border-base);
  width: 100%;
  clear: both;
  font-size: 88%;
  text-align: center;
  padding: 1px;
  margin: 1em auto 0;
  background: var(--background-navbox);
}

.navbox-title {
  background: var(--background-navbox-title);
  color: inherit;
  padding: 0.25em 1em;
  line-height: 1.5em;
  text-align: center;
  font-size: 114%;
  margin: 0 4em;
}

.navbox-group {
  white-space: nowrap;
  text-align: right;
  background: var(--background-navbox-group);
  color: inherit;
  padding: 0.25em 1em;
  line-height: 1.5em;
  font-weight: 600;
}

.navbox-list {
  line-height: 1.5em;
  border-color: var(--background-navbox);
  text-align: left;
  padding: 0.25em 1em;
}

.navbox-odd {
  background: var(--background-navbox-odd);
}

.navbox-even {
  background: var(--background-navbox-even);
}

.navbox-subgroup {
  width: 100%;
  background: var(--background-navbox-subgroup);
}

/* Collapsible Navbox */
.navbox.mw-collapsible {
  position: relative;
}

.mw-collapsible-toggle {
  float: left;
  font-size: 88%;
  font-weight: normal;
}
```

### Tables
```css
.wikitable {
  background: var(--background-secondary);
  color: inherit;
  border: 1px solid var(--border-base);
  border-collapse: collapse;
  margin: 1em 0;
  width: 100%;
}

.wikitable th {
  background: var(--background-table-header);
  color: inherit;
  text-align: center;
  font-weight: 600;
  padding: 0.25em 1em;
  border: 1px solid var(--border-base);
}

.wikitable td {
  padding: 0.25em 1em;
  border: 1px solid var(--border-base);
}

.wikitable tr:nth-child(odd) {
  background: var(--background-table-odd);
}

.wikitable tr:nth-child(even) {
  background: var(--background-table-even);
}
```

### Buttons
```css
.cdx-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  border: 1px solid var(--border-base);
  border-radius: 2px;
  background: var(--background-interactive);
  color: var(--color-base);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: background 100ms, color 100ms, border-color 100ms;
}

.cdx-button:hover {
  background: var(--background-color-interactive-subtle);
  border-color: var(--border-subtle);
}

.cdx-button--weight-quiet {
  background: transparent;
  border-color: transparent;
}

.cdx-button--action-progressive {
  color: var(--color-progressive);
}

.cdx-button--action-destructive {
  color: var(--color-destructive);
}

.cdx-button--icon-only {
  padding: 6px;
  min-width: 32px;
}
```

### Links
```css
a {
  color: var(--color-progressive);
  text-decoration: none;
}

a:visited {
  color: var(--color-visited);
}

a:hover {
  text-decoration: underline;
}

a:active {
  color: var(--color-progressive-active);
}

/* New/Red Links (non-existent pages) */
a.new {
  color: var(--color-destructive);
}

/* External Links */
a.external {
  background-image: url('data:image/svg+xml,...');
  background-repeat: no-repeat;
  background-position: center right;
  padding-right: 13px;
}
```

### Images & Figures
```css
.mw-file-description {
  display: inline-block;
}

.mw-file-element {
  max-width: 100%;
  height: auto;
}

figure {
  margin: 0;
  display: inline-block;
}

figcaption {
  font-size: 13px;
  line-height: 1.4;
  padding: 4px 0;
  color: var(--color-subtle);
}

/* Thumbnail Images */
.mw-default-size {
  max-width: 250px;
}

.mw-halign-left {
  float: left;
  margin: 0.5em 1.4em 0.5em 0;
}

.mw-halign-right {
  float: right;
  margin: 0.5em 0 0.5em 1.4em;
}

.mw-halign-center {
  display: block;
  margin: 0.5em auto;
}
```

### Lists
```css
/* Unordered Lists */
ul {
  list-style-type: disc;
  margin: 0.3em 0 0 1.6em;
  padding: 0;
}

ul ul {
  list-style-type: circle;
  margin: 0 0 0 1.6em;
}

ul ul ul {
  list-style-type: square;
}

/* Ordered Lists */
ol {
  list-style-type: decimal;
  margin: 0.3em 0 0 3.2em;
  padding: 0;
}

/* Horizontal Lists */
.hlist ul,
.hlist ol {
  display: inline;
  list-style: none;
  margin: 0;
  padding: 0;
}

.hlist li {
  display: inline;
  margin: 0;
}

.hlist li::after {
  content: " · ";
  font-weight: bold;
}

.hlist li:last-child::after {
  content: none;
}

/* Plain Lists */
.plainlist ul,
.plainlist ol {
  list-style: none;
  margin: 0;
  padding: 0;
}
```

### References & Citations
```css
.reference {
  font-size: 11px;
  vertical-align: super;
  line-height: 1;
}

.cite-bracket {
  font-weight: normal;
}

.citation {
  font-style: inherit;
  word-wrap: break-word;
}

.reflist {
  font-size: 90%;
  margin-bottom: 0.5em;
}

.reflist-columns-2 {
  column-width: 30em;
}

.reflist-columns-3 {
  column-width: 25em;
}
```

### Hatnotes & Notices
```css
.hatnote {
  font-style: italic;
  padding-left: 1.6em;
  margin-bottom: 0.5em;
}

.hatnote i {
  font-style: normal;
}

/* Message Boxes */
.mw-message-box {
  border: 1px solid var(--border-base);
  background: var(--background-secondary);
  padding: 0.5em 1em;
  margin: 1em 0;
  border-radius: 2px;
}

.mw-message-box-warning {
  border-color: var(--color-warning);
  background: var(--background-color-destructive-subtle);
}

.mw-message-box-error {
  border-color: var(--color-destructive);
  background: var(--background-color-destructive-subtle);
}
```

---

## Header & Navigation

### Site Header
```css
.mw-header {
  background: var(--background-header);
  border-bottom: 1px solid var(--border-subtle);
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.vector-header-start {
  display: flex;
  align-items: center;
  gap: 16px;
}

.vector-header-end {
  display: flex;
  align-items: center;
  gap: 8px;
}
```

### Page Tabs
```css
.vector-menu-tabs {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid var(--border-subtle);
}

.vector-tab-noicon {
  margin: 0;
}

.vector-tab-noicon a {
  display: block;
  padding: 8px 16px;
  color: var(--color-progressive);
  text-decoration: none;
  border: 1px solid transparent;
  border-bottom: none;
  margin-bottom: -1px;
}

.vector-tab-noicon.selected a {
  background: var(--background-primary);
  border-color: var(--border-subtle);
  border-bottom-color: var(--background-primary);
  color: var(--color-base);
}

.vector-tab-noicon a:hover {
  background: var(--background-color-interactive-subtle);
}
```

### Dropdown Menus
```css
.vector-dropdown {
  position: relative;
  display: inline-block;
}

.vector-dropdown-checkbox {
  display: none;
}

.vector-dropdown-label {
  cursor: pointer;
  padding: 6px 12px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.vector-dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--background-primary);
  border: 1px solid var(--border-base);
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  min-width: 200px;
  z-index: 100;
}

.vector-dropdown-checkbox:checked ~ .vector-dropdown-content {
  display: block;
}

.vector-menu-content-list {
  list-style: none;
  margin: 0;
  padding: 4px 0;
}

.vector-menu-content-list li {
  margin: 0;
}

.vector-menu-content-list a {
  display: block;
  padding: 8px 16px;
  color: var(--color-base);
  text-decoration: none;
}

.vector-menu-content-list a:hover {
  background: var(--background-color-interactive-subtle);
}
```

---

## Responsive Breakpoints

```css
/* Mobile: < 640px */
@media (max-width: 639px) {
  .mw-body {
    padding: 1em;
  }
  
  .vector-column-start,
  .vector-column-end {
    display: none;
  }
  
  .infobox {
    width: 100%;
    float: none;
    margin: 0 0 1em 0;
  }
}

/* Tablet: 640px - 1000px */
@media (min-width: 640px) and (max-width: 999px) {
  .vector-column-start {
    width: 180px;
  }
  
  .vector-toc {
    width: 220px;
  }
}

/* Desktop: >= 1000px */
@media (min-width: 1000px) {
  .mw-page-container {
    display: flex;
  }
}

/* Wide Desktop: >= 1440px */
@media (min-width: 1440px) {
  .mw-content-container {
    max-width: 1440px;
  }
}
```

---

## Spacing System

```css
--space-0: 0;
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
```

---

## Border Radius

```css
--border-radius-none: 0;
--border-radius-small: 2px;
--border-radius-medium: 4px;
--border-radius-large: 8px;
--border-radius-circle: 50%;
```

---

## Shadows

```css
--box-shadow-small: 0 1px 2px rgba(0, 0, 0, 0.1);
--box-shadow-medium: 0 2px 8px rgba(0, 0, 0, 0.15);
--box-shadow-large: 0 4px 16px rgba(0, 0, 0, 0.2);

/* Dark Mode Shadows */
@media (prefers-color-scheme: dark) {
  --box-shadow-small: 0 1px 2px rgba(0, 0, 0, 0.3);
  --box-shadow-medium: 0 2px 8px rgba(0, 0, 0, 0.4);
  --box-shadow-large: 0 4px 16px rgba(0, 0, 0, 0.5);
}
```

---

## Transitions

```css
--transition-fast: 100ms;
--transition-medium: 200ms;
--transition-slow: 300ms;

--transition-ease: cubic-bezier(0.4, 0, 0.2, 1);
--transition-ease-in: cubic-bezier(0.4, 0, 1, 1);
--transition-ease-out: cubic-bezier(0, 0, 0.2, 1);
```

---

## Z-Index Scale

```css
--z-index-base: 0;
--z-index-dropdown: 100;
--z-index-sticky: 200;
--z-index-overlay: 300;
--z-index-modal: 400;
--z-index-toast: 500;
```

---

## Print Styles

```css
@media print {
  /* Hide navigation elements */
  .vector-column-start,
  .vector-column-end,
  .mw-header,
  .mw-footer,
  .vector-page-toolbar,
  .mw-editsection,
  .navbox,
  .noprint {
    display: none !important;
  }
  
  /* Optimize content for print */
  .mw-body {
    max-width: 100%;
    padding: 0;
  }
  
  /* Expand collapsed sections */
  .mw-collapsible {
    display: block !important;
  }
  
  /* Adjust colors for print */
  body {
    background: white;
    color: black;
  }
  
  a {
    color: black;
    text-decoration: underline;
  }
  
  /* Show URLs for external links */
  a.external::after {
    content: " (" attr(href) ")";
    font-size: 90%;
  }
}
```

---

## Accessibility

### Focus Styles
```css
*:focus {
  outline: 2px solid var(--color-progressive);
  outline-offset: 2px;
}

*:focus:not(:focus-visible) {
  outline: none;
}

*:focus-visible {
  outline: 2px solid var(--color-progressive);
  outline-offset: 2px;
}
```

### Screen Reader Only
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Implementation Notes

### Dark Mode Toggle
Implement dark mode using:
1. CSS custom properties (CSS variables)
2. `prefers-color-scheme` media query for automatic detection
3. Manual toggle stored in localStorage
4. Class-based switching on root element

### Performance Considerations
- Use `will-change` sparingly for animated elements
- Implement lazy loading for images below the fold
- Use `content-visibility: auto` for long content sections
- Minimize repaints with CSS containment

### Browser Support
- Target modern browsers (last 2 versions)
- Provide fallbacks for CSS Grid and Flexbox
- Use autoprefixer for vendor prefixes
- Test on Chrome, Firefox, Safari, Edge

### Component Library
Consider using or building components for:
- Collapsible sections
- Tabs and accordions
- Modal dialogs
- Toast notifications
- Tooltips
- Dropdown menus
- Search autocomplete
- Image galleries

---

## File Structure Recommendation

```
styles/
├── base/
│   ├── reset.css
│   ├── typography.css
│   └── variables.css
├── components/
│   ├── buttons.css
│   ├── infobox.css
│   ├── navbox.css
│   ├── tables.css
│   ├── links.css
│   └── forms.css
├── layout/
│   ├── header.css
│   ├── sidebar.css
│   ├── content.css
│   └── footer.css
├── themes/
│   ├── light.css
│   └── dark.css
└── utilities/
    ├── spacing.css
    ├── display.css
    └── accessibility.css
```

---

## End of Style Guide

This comprehensive style guide should be used as the single source of truth for all visual design decisions in the project. When implementing components, always reference this document to ensure consistency with Wikipedia's design language.
