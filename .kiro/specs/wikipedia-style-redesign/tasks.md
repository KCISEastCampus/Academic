# Implementation Plan: Wikipedia-Style Redesign

## Overview

This implementation plan transforms the Jekyll-based academic site from Bootstrap styling to Wikipedia's design system. The approach follows a modular CSS architecture with base styles, layout components, UI components, theme system, and utilities. Implementation proceeds incrementally, building the foundation first, then layout structure, then individual components, and finally responsive and accessibility features.

## Tasks

- [x] 1. Set up CSS architecture and base styles
  - [x] 1.1 Create CSS directory structure (base/, components/, layout/, themes/, utilities/)
    - Create directories: assets/css/base/, assets/css/components/, assets/css/layout/, assets/css/themes/, assets/css/utilities/
    - _Requirements: 1.1_

  - [x] 1.2 Create CSS variables file with all design tokens
    - Create assets/css/base/variables.css with color, typography, spacing, shadow, transition, and z-index variables
    - Define both light and dark mode color palettes using CSS custom properties
    - _Requirements: 1.2, 1.3, 1.4_

  - [x] 1.3 Create CSS reset and base typography
    - Create assets/css/base/reset.css with minimal browser normalization
    - Create assets/css/base/typography.css with font stacks, sizes, weights, line heights, and heading styles
    - _Requirements: 1.5, 3.1, 3.2, 3.3, 3.4, 3.5_

  - [ ]* 1.4 Write property test for typography system
    - **Property 3: Typography Inheritance**
    - **Validates: Requirements 3.1, 3.4**

  - [ ]* 1.5 Write property test for heading hierarchy
    - **Property 4: Heading Hierarchy Styling**
    - **Validates: Requirements 3.2, 3.4**

- [x] 2. Checkpoint - Verify base styles
  - Ensure all tests pass, ask the user if questions arise.

- [x] 3. Implement theme system
  - [x] 3.1 Create light and dark theme CSS files
    - Create assets/css/themes/light.css with light mode color overrides
    - Create assets/css/themes/dark.css with dark mode base colors
    - _Requirements: 2.1, 2.2_

  - [x] 3.2 Update theme toggle JavaScript for Wikipedia color system
    - Modify assets/js/theme_toggle.js to work with new CSS variables
    - Ensure theme preference persists in localStorage
    - Apply saved theme before first paint
    - Respect prefers-color-scheme when no saved preference exists
    - _Requirements: 2.3, 2.4, 2.5, 2.6_

  - [ ]* 3.3 Write property test for theme color consistency
    - **Property 1: Theme Color Consistency**
    - **Validates: Requirements 2.1, 2.2**

  - [ ]* 3.4 Write property test for theme toggle persistence
    - **Property 2: Theme Toggle Persistence**
    - **Validates: Requirements 2.4**

  - [ ]* 3.5 Write unit tests for theme system edge cases
    - Test localStorage unavailable (private browsing)
    - Test prefers-color-scheme fallback
    - Test theme toggle updates all color variables
    - _Requirements: 2.3, 2.5, 2.6_

- [x] 4. Checkpoint - Verify theme system
  - Ensure all tests pass, ask the user if questions arise.

- [x] 5. Implement page layout structure
  - [x] 5.1 Create header layout CSS
    - Create assets/css/layout/header.css with Wikipedia-style header structure
    - Style site header, logo, title, search box, and navigation tabs
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6_

  - [x] 5.2 Create sidebar layout CSS
    - Create assets/css/layout/sidebar.css with left sidebar styling
    - Implement sticky positioning, navigation link styles, and hierarchical structure
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

  - [x] 5.3 Create main content area CSS
    - Create assets/css/layout/content.css with three-column layout
    - Set sidebar width (220px), TOC width (280px), content max-width (960px)
    - Implement responsive breakpoints for mobile, tablet, desktop
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.6, 4.7, 16.1, 16.2, 16.3, 16.4, 16.5, 16.6, 16.7_

  - [x] 5.4 Create table of contents CSS
    - Create assets/css/layout/toc.css with Wikipedia-style TOC styling
    - Implement sticky positioning, hierarchical indentation, hover states
    - Add reading progress bar styling
    - _Requirements: 7.2, 7.3, 7.6, 7.7_

  - [x] 5.5 Create footer layout CSS
    - Create assets/css/layout/footer.css with Wikipedia-style footer
    - _Requirements: 23.1, 23.2, 23.3, 23.4_

  - [ ]* 5.6 Write property test for layout column structure
    - **Property 5: Layout Column Structure**
    - **Validates: Requirements 4.1**

  - [ ]* 5.7 Write property test for sticky positioning
    - **Property 6: Sticky Positioning**
    - **Validates: Requirements 4.5, 6.5**

  - [ ]* 5.8 Write unit tests for responsive layout
    - Test mobile viewport: sidebar and TOC hidden
    - Test mobile viewport: infoboxes full-width
    - Test tablet viewport: adjusted widths
    - Test desktop viewport: three-column layout
    - Test wide desktop: max container width
    - _Requirements: 4.6, 4.7, 16.1, 16.2, 16.3, 16.4, 16.5, 16.6, 16.7_

- [x] 6. Checkpoint - Verify layout structure
  - Ensure all tests pass, ask the user if questions arise.

- [x] 7. Implement table of contents JavaScript
  - [x] 7.1 Update TOC generation script
    - Modify assets/js/toc.js to generate TOC from h2, h3, h4 headings
    - Implement smooth scrolling to sections
    - Add active section highlighting during scroll
    - Update reading progress bar
    - Handle TOC generation errors gracefully
    - _Requirements: 7.1, 7.4, 7.5_

  - [ ]* 7.2 Write property test for TOC generation completeness
    - **Property 7: TOC Generation Completeness**
    - **Validates: Requirements 7.1**

  - [ ]* 7.3 Write property test for TOC indentation hierarchy
    - **Property 8: TOC Indentation Hierarchy**
    - **Validates: Requirements 7.3**

  - [ ]* 7.4 Write property test for TOC scroll navigation
    - **Property 9: TOC Scroll Navigation**
    - **Validates: Requirements 7.4**

  - [ ]* 7.5 Write unit tests for TOC edge cases
    - Test page with no headings: TOC hidden
    - Test TOC generation failure: TOC hidden
    - Test TOC sticky positioning
    - Test reading progress bar display
    - _Requirements: 7.2, 7.6, 7.7_

- [x] 8. Checkpoint - Verify TOC functionality
  - Ensure all tests pass, ask the user if questions arise.

- [x] 9. Implement component library - Infobox
  - [x] 9.1 Create infobox component CSS
    - Create assets/css/components/infobox.css with Wikipedia-style infobox structure
    - Style headers, subheaders, labels, data rows
    - Implement float right with 25.5em width
    - Add responsive behavior (full-width on mobile)
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6_

  - [ ]* 9.2 Write property test for component color theming
    - **Property 10: Component Color Theming**
    - **Validates: Requirements 8.2, 8.3, 9.2, 9.3, 10.2**

  - [ ]* 9.3 Write unit tests for infobox
    - Test infobox structure
    - Test infobox headers with correct background colors
    - Test infobox float right with margins
    - Test mobile viewport: infobox full-width
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6_

- [x] 10. Implement component library - Navbox
  - [x] 10.1 Create navbox component CSS
    - Create assets/css/components/navbox.css with Wikipedia-style navbox structure
    - Style titles, groups, lists with correct background colors
    - Implement alternating row colors (odd/even)
    - Add collapsible functionality styling
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6_

  - [ ]* 10.2 Write property test for table row alternation
    - **Property 11: Table Row Alternation**
    - **Validates: Requirements 9.4, 10.3**

  - [ ]* 10.3 Write unit tests for navbox
    - Test navbox structure
    - Test navbox titles and groups with correct colors
    - Test alternating row colors
    - Test collapsible functionality
    - Test full-width display
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6_

- [x] 11. Implement component library - Tables
  - [x] 11.1 Create tables component CSS
    - Create assets/css/components/tables.css with wikitable styling
    - Style table headers with correct background color
    - Implement alternating row colors (odd/even)
    - Add responsive horizontal scrolling on small screens
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5_

  - [ ]* 11.2 Write unit tests for tables
    - Test wikitable styling
    - Test table headers with correct background
    - Test alternating row colors
    - Test borders on cells
    - Test horizontal scrolling on small screens
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5_

- [x] 12. Implement component library - Buttons and Links
  - [x] 12.1 Create buttons component CSS
    - Create assets/css/components/buttons.css with Wikipedia button styling (cdx-button)
    - Implement button variants (progressive, destructive, quiet, icon-only)
    - _Requirements: 11.4, 11.5_

  - [x] 12.2 Create links component CSS
    - Create assets/css/components/links.css with Wikipedia link styling
    - Style standard links (progressive blue), visited links (purple), hover states
    - Add external link icon styling
    - _Requirements: 11.1, 11.2, 11.3, 11.6_

  - [ ]* 12.3 Write property test for link color states
    - **Property 12: Link Color States**
    - **Validates: Requirements 11.1, 11.2, 11.3**

  - [ ]* 12.4 Write property test for external link icon presence
    - **Property 13: External Link Icon Presence**
    - **Validates: Requirements 11.6**

  - [ ]* 12.5 Write unit tests for buttons and links
    - Test button styling with variants
    - Test link colors (standard, visited, hover)
    - Test external link icon display
    - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5, 11.6_

- [x] 13. Implement component library - Lists
  - [x] 13.1 Create lists component CSS
    - Create assets/css/components/lists.css with Wikipedia list styling
    - Implement unordered list markers (disc, circle, square) by nesting level
    - Style ordered lists with decimal numbering
    - Add horizontal list (hlist) and plain list (plainlist) classes
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5_

  - [ ]* 13.2 Write property test for list marker hierarchy
    - **Property 14: List Marker Hierarchy**
    - **Validates: Requirements 12.1**

  - [ ]* 13.3 Write unit tests for lists
    - Test unordered list markers by level
    - Test ordered list numbering
    - Test horizontal list with bullet separators
    - Test plain list with no markers
    - Test margins and indentation
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5_

- [x] 14. Implement component library - References, Messages, and Hatnotes
  - [x] 14.1 Create references component CSS
    - Create assets/css/components/references.css with Wikipedia citation styling
    - Style reference numbers as superscript
    - Implement reflist with multi-column layout options
    - _Requirements: 13.1, 13.2, 13.3, 13.4_

  - [x] 14.2 Create messages component CSS
    - Create assets/css/components/messages.css with message box styling
    - Implement warning, error, and notice variants
    - Add hatnote styling
    - _Requirements: 14.1, 14.2, 14.3, 14.4, 15.1, 15.2, 15.3_

  - [ ]* 14.3 Write unit tests for references and messages
    - Test reference superscript styling
    - Test citation formatting
    - Test reflist multi-column layout
    - Test message box variants
    - Test hatnote styling and positioning
    - _Requirements: 13.1, 13.2, 13.3, 13.4, 14.1, 14.2, 14.3, 14.4, 15.1, 15.2, 15.3_

- [x] 15. Checkpoint - Verify component library
  - Ensure all tests pass, ask the user if questions arise.

- [x] 16. Implement images, code blocks, and math styling
  - [x] 16.1 Create images component CSS
    - Create assets/css/components/images.css with Wikipedia image styling
    - Implement responsive images (max-width: 100%, height: auto)
    - Add thumbnail styling (mw-default-size) and alignment classes
    - Style figcaptions
    - _Requirements: 19.1, 19.2, 19.3, 19.4, 19.5_

  - [x] 16.2 Create code blocks component CSS
    - Create assets/css/components/code.css with code block styling
    - Use monospace font, subtle background, left border accent
    - Style inline code with background and padding
    - Implement horizontal scrolling for overflow
    - _Requirements: 20.1, 20.2, 20.3, 20.4, 20.5, 20.6_

  - [x] 16.3 Create math component CSS
    - Create assets/css/components/math.css with MathJax styling
    - Ensure inline math aligns with text
    - Center display math with margins
    - Apply theme-aware colors
    - Add horizontal scrolling on small screens
    - _Requirements: 21.1, 21.2, 21.3, 21.4, 21.5_

  - [ ]* 16.4 Write property test for image responsiveness
    - **Property 18: Image Responsiveness**
    - **Validates: Requirements 19.1**

  - [ ]* 16.5 Write property test for code block styling
    - **Property 19: Code Block Styling**
    - **Validates: Requirements 20.1, 20.2, 20.3**

  - [ ]* 16.6 Write property test for code block overflow handling
    - **Property 20: Code Block Overflow Handling**
    - **Validates: Requirements 20.6**

  - [ ]* 16.7 Write property test for MathJax theme awareness
    - **Property 21: MathJax Theme Awareness**
    - **Validates: Requirements 21.4**

  - [ ]* 16.8 Write unit tests for images, code, and math
    - Test image max-width and height auto
    - Test thumbnail styling and alignment
    - Test figcaption styling
    - Test code block monospace font and background
    - Test inline code styling
    - Test code block horizontal scrolling
    - Test MathJax inline alignment
    - Test MathJax display centering
    - Test MathJax theme colors
    - Test display math horizontal scrolling
    - _Requirements: 19.1, 19.2, 19.3, 19.4, 19.5, 20.1, 20.2, 20.3, 20.4, 20.5, 20.6, 21.1, 21.2, 21.3, 21.4, 21.5_

- [ ]* 16.9 Write property test for legacy content compatibility
    - **Property 25: Legacy Content Compatibility**
    - **Validates: Requirements 25.1, 25.2**

  - [ ]* 16.10 Write property test for MathJax rendering preservation
    - **Property 26: MathJax Rendering Preservation**
    - **Validates: Requirements 25.5**

- [x] 17. Implement search functionality styling
  - [x] 17.1 Update search JavaScript and CSS
    - Update assets/js/search.js to handle errors gracefully
    - Style search input with Wikipedia styling
    - Style search results dropdown with Wikipedia result items
    - Implement keyboard navigation for results
    - Highlight search terms in results
    - _Requirements: 22.1, 22.2, 22.3, 22.4, 22.5_

  - [ ]* 17.2 Write property test for search result keyboard navigation
    - **Property 22: Search Result Keyboard Navigation**
    - **Validates: Requirements 22.5**

  - [ ]* 17.3 Write unit tests for search
    - Test search input styling
    - Test search results dropdown styling
    - Test search input focus styling
    - Test search term highlighting
    - Test search index load failure: search box disabled
    - _Requirements: 22.1, 22.2, 22.3, 22.4_

- [x] 18. Implement accessibility features
  - [x] 18.1 Create accessibility utilities CSS
    - Create assets/css/utilities/accessibility.css with focus styles, sr-only class, skip links
    - Implement 2px solid outline with 2px offset for focus
    - Add screen-reader-only text class
    - Style skip-to-content links
    - Respect prefers-reduced-motion media query
    - _Requirements: 17.1, 17.2, 17.3, 17.6, 24.5_

  - [ ]* 18.2 Write property test for focus outline visibility
    - **Property 15: Focus Outline Visibility**
    - **Validates: Requirements 17.1**

  - [ ]* 18.3 Write property test for keyboard accessibility
    - **Property 16: Keyboard Accessibility**
    - **Validates: Requirements 17.4**

  - [ ]* 18.4 Write property test for color contrast compliance
    - **Property 17: Color Contrast Compliance**
    - **Validates: Requirements 17.5**

  - [ ]* 18.5 Write unit tests for accessibility
    - Test focus styles with 2px outline and offset
    - Test sr-only class hides visually but accessible to screen readers
    - Test prefers-reduced-motion disables animations
    - Test all interactive elements keyboard accessible
    - Test skip-to-content links exist
    - _Requirements: 17.1, 17.2, 17.3, 17.4, 17.6_

- [x] 19. Implement animations and transitions
  - [x] 19.1 Add transition styles to interactive elements
    - Apply transition durations (fast: 100ms, medium: 200ms, slow: 300ms)
    - Use easing functions from Design_System
    - Add hover transitions to buttons, links, navigation items
    - Implement smooth scrolling for anchor links
    - _Requirements: 24.1, 24.2, 24.3, 24.4_

  - [ ]* 19.2 Write property test for transition duration consistency
    - **Property 23: Transition Duration Consistency**
    - **Validates: Requirements 24.1**

  - [ ]* 19.3 Write property test for smooth scroll behavior
    - **Property 24: Smooth Scroll Behavior**
    - **Validates: Requirements 24.4**

  - [ ]* 19.4 Write unit tests for animations
    - Test transition durations match Design_System
    - Test easing functions
    - Test hover transitions on interactive elements
    - Test smooth scrolling to anchor links
    - Test prefers-reduced-motion disables animations
    - _Requirements: 24.1, 24.2, 24.3, 24.4, 24.5_

- [x] 20. Implement print styles
  - [x] 20.1 Create print utilities CSS
    - Create assets/css/utilities/print.css with print-specific styles
    - Hide navigation elements (sidebar, header, footer, TOC)
    - Hide interactive elements (buttons, theme toggle)
    - Expand collapsed sections
    - Use white background and black text
    - Display URLs for external links
    - Remove shadows and decorative elements
    - _Requirements: 18.1, 18.2, 18.3, 18.4, 18.5, 18.6_

  - [ ]* 20.2 Write unit tests for print styles
    - Test navigation hidden in print media
    - Test interactive elements hidden in print media
    - Test collapsed sections expanded in print media
    - Test white background and black text in print media
    - Test URLs shown for external links in print media
    - Test shadows removed in print media
    - _Requirements: 18.1, 18.2, 18.3, 18.4, 18.5, 18.6_

- [x] 21. Implement utility classes
  - [x] 21.1 Create spacing utilities CSS
    - Create assets/css/utilities/spacing.css with margin, padding, and gap utilities
    - _Requirements: 1.4_

  - [x] 21.2 Create display utilities CSS
    - Create assets/css/utilities/display.css with display, visibility, and responsive display classes
    - _Requirements: 1.4_

- [x] 22. Update Jekyll templates and includes
  - [x] 22.1 Update head.html to include new CSS modules
    - Modify _includes/head.html to reference all new CSS files in correct order
    - Ensure CSS loads before page render to prevent flash of unstyled content
    - _Requirements: 25.2_

  - [~] 22.2 Update site_header.html for Wikipedia-style header
    - Modify _includes/site_header.html to use Wikipedia header structure and classes
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6_

  - [~] 22.3 Update footer.html for Wikipedia-style footer
    - Modify _includes/footer.html to use Wikipedia footer structure and classes
    - _Requirements: 23.1, 23.2, 23.3, 23.4_

  - [~] 22.4 Update layout files with Wikipedia wrapper classes
    - Modify _layouts/default.html and other layouts to add Wikipedia-style wrapper classes
    - Ensure three-column layout structure (sidebar, content, TOC)
    - _Requirements: 4.1, 25.2_

  - [ ]* 22.5 Write unit tests for template integration
    - Test head.html includes all CSS files
    - Test header contains logo and title
    - Test search input has Wikipedia styling
    - Test sidebar has correct structure
    - Test footer has Wikipedia styling
    - Test h1.firstHeading has correct styling
    - _Requirements: 3.5, 5.5, 5.6, 6.1, 23.1_

- [x] 23. Final integration and testing
  - [x] 23.1 Remove Bootstrap-specific styling
    - Remove or comment out Bootstrap CSS references
    - Remove Bootstrap-specific classes from templates (if any)
    - _Requirements: 1.5_

  - [x] 23.2 Verify existing functionality preserved
    - Test theme toggle works with new CSS
    - Test TOC generation works
    - Test search functionality works
    - Test MathJax renders correctly
    - Test image lazy loading works
    - _Requirements: 25.2, 25.3, 25.5_

  - [ ]* 23.3 Run visual regression tests
    - Capture baseline images from Wikipedia
    - Test homepage in light and dark modes
    - Test subject pages with infobox in both modes
    - Test pages with navbox in both modes
    - Test pages with tables in both modes
    - Test mobile, tablet, desktop, wide desktop viewports

  - [ ]* 23.4 Run accessibility audit
    - Run axe-core automated tests
    - Test keyboard navigation
    - Test screen reader compatibility
    - Verify color contrast ratios
    - Verify focus indicators

  - [ ]* 23.5 Run performance audit
    - Measure First Contentful Paint (< 1.5s)
    - Measure Largest Contentful Paint (< 2.5s)
    - Measure Cumulative Layout Shift (< 0.1)
    - Measure Time to Interactive (< 3.5s)

  - [ ]* 23.6 Run cross-browser compatibility tests
    - Test on Chrome (last 2 versions)
    - Test on Firefox (last 2 versions)
    - Test on Safari (last 2 versions)
    - Test on Edge (last 2 versions)

- [x] 24. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation at key milestones
- Property tests validate universal correctness properties across all inputs
- Unit tests validate specific examples, edge cases, and error conditions
- Visual regression, accessibility, performance, and cross-browser tests ensure production readiness
- Implementation follows a bottom-up approach: foundation → layout → components → features → polish
