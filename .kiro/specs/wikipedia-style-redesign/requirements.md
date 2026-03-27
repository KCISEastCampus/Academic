# Requirements Document

## Introduction

This document defines the requirements for redesigning the Jekyll-based academic site to match Wikipedia's visual interface and user experience. The redesign will transform the current Bootstrap-based styling into a comprehensive Wikipedia-style design system, including layout structure, color schemes, typography, components, and responsive behavior as specified in the styles.md design system document.

## Glossary

- **Site**: The Jekyll-based static academic website
- **Design_System**: The Wikipedia-style design specifications documented in styles.md
- **Theme_Switcher**: The mechanism for toggling between light and dark color modes
- **Layout_Engine**: The CSS and HTML structure that controls page layout and component positioning
- **Component_Library**: The set of reusable UI elements (infobox, navbox, tables, buttons, etc.)
- **Responsive_System**: The breakpoint-based layout adaptation for different screen sizes
- **Style_Assets**: CSS files, variables, and related styling resources

## Requirements

### Requirement 1: CSS Architecture Transformation

**User Story:** As a developer, I want the site to use a modular CSS architecture matching Wikipedia's design system, so that styles are maintainable and consistent.

#### Acceptance Criteria

1. THE Site SHALL organize CSS files into base/, components/, layout/, themes/, and utilities/ directories
2. THE Site SHALL define all color variables for light and dark modes using CSS custom properties
3. THE Site SHALL define typography variables (font families, sizes, weights, line heights) using CSS custom properties
4. THE Site SHALL define spacing, border-radius, shadow, transition, and z-index variables using CSS custom properties
5. THE Site SHALL remove Bootstrap-specific styling and replace with Wikipedia-style equivalents

### Requirement 2: Color Theme System

**User Story:** As a user, I want to switch between light and dark modes that match Wikipedia's color schemes, so that I can read comfortably in different lighting conditions.

#### Acceptance Criteria

1. THE Theme_Switcher SHALL apply light mode colors as defined in the Design_System light mode palette
2. THE Theme_Switcher SHALL apply dark mode colors as defined in the Design_System dark mode palette
3. WHEN a user toggles the theme, THE Theme_Switcher SHALL update all color variables instantly
4. THE Theme_Switcher SHALL persist the user's theme preference in localStorage
5. WHEN the page loads, THE Theme_Switcher SHALL apply the saved theme preference before first paint
6. WHERE no saved preference exists, THE Theme_Switcher SHALL respect the prefers-color-scheme media query

### Requirement 3: Typography System

**User Story:** As a user, I want text to be rendered with Wikipedia's typography system, so that content is readable and visually consistent with Wikipedia.

#### Acceptance Criteria

1. THE Site SHALL use the font family stack defined in the Design_System for body text
2. THE Site SHALL apply heading styles (h1-h6) matching the Design_System specifications
3. THE Site SHALL use serif fonts for h1 and h2 headings as specified in the Design_System
4. THE Site SHALL apply font sizes, weights, and line heights as defined in the Design_System
5. THE Site SHALL render the page title (h1.firstHeading) with Wikipedia's distinctive styling

### Requirement 4: Page Layout Structure

**User Story:** As a user, I want the site to have Wikipedia's three-column layout with sidebar, content, and table of contents, so that navigation is familiar and efficient.

#### Acceptance Criteria

1. THE Layout_Engine SHALL create a three-column layout with left sidebar, main content, and right table of contents
2. THE Layout_Engine SHALL set the sidebar width to 220px as specified in the Design_System
3. THE Layout_Engine SHALL set the table of contents width to 280px as specified in the Design_System
4. THE Layout_Engine SHALL limit main content width to 960px when limited-width mode is enabled
5. THE Layout_Engine SHALL make the sidebar and table of contents sticky during scrolling
6. WHEN viewport width is below 640px, THE Layout_Engine SHALL hide the sidebar and table of contents
7. WHEN viewport width is between 640px and 999px, THE Layout_Engine SHALL adjust sidebar and TOC widths as specified in the Design_System

### Requirement 5: Header and Navigation

**User Story:** As a user, I want a Wikipedia-style header with navigation tabs and dropdown menus, so that I can navigate the site intuitively.

#### Acceptance Criteria

1. THE Site SHALL render a header with Wikipedia-style layout and styling
2. THE Site SHALL display page tabs with Wikipedia-style tab styling
3. WHEN a tab is selected, THE Site SHALL highlight it with Wikipedia's selected tab styling
4. THE Site SHALL implement dropdown menus with Wikipedia-style positioning and appearance
5. THE Site SHALL display the site logo and title in the header
6. THE Site SHALL include a search input with Wikipedia-style search box styling

### Requirement 6: Sidebar Navigation

**User Story:** As a user, I want a left sidebar with navigation links styled like Wikipedia, so that I can access different sections of the site.

#### Acceptance Criteria

1. THE Site SHALL render a left sidebar with Wikipedia-style background and borders
2. THE Site SHALL display navigation links with Wikipedia-style link colors and hover states
3. THE Site SHALL organize navigation items in a hierarchical list structure
4. WHEN a navigation link is hovered, THE Site SHALL apply Wikipedia's hover background color
5. THE Site SHALL make the sidebar sticky with top: 0 positioning

### Requirement 7: Table of Contents

**User Story:** As a user, I want an automatically generated table of contents styled like Wikipedia, so that I can quickly navigate to different sections of a page.

#### Acceptance Criteria

1. THE Site SHALL generate a table of contents from page headings (h2, h3, h4)
2. THE Site SHALL style the table of contents with Wikipedia's TOC styling
3. THE Site SHALL indent TOC items based on heading level (level-1, level-2, level-3)
4. WHEN a TOC link is clicked, THE Site SHALL scroll to the corresponding heading
5. THE Site SHALL highlight the current section in the TOC during scrolling
6. THE Site SHALL make the table of contents sticky with max-height: 100vh and overflow-y: auto
7. THE Site SHALL display a reading progress bar in the TOC header

### Requirement 8: Component Library - Infobox

**User Story:** As a content author, I want to create infoboxes that look like Wikipedia infoboxes, so that I can display structured information attractively.

#### Acceptance Criteria

1. THE Component_Library SHALL provide an infobox component with Wikipedia-style structure
2. THE Component_Library SHALL style infobox headers with the background color defined in the Design_System
3. THE Component_Library SHALL style infobox subheaders with the background color defined in the Design_System
4. THE Component_Library SHALL float infoboxes to the right with appropriate margins
5. THE Component_Library SHALL set infobox width to 25.5em as specified in the Design_System
6. WHEN viewport width is below 640px, THE Component_Library SHALL make infoboxes full-width and remove float

### Requirement 9: Component Library - Navbox

**User Story:** As a content author, I want to create navigation boxes that look like Wikipedia navboxes, so that I can provide contextual navigation at the bottom of pages.

#### Acceptance Criteria

1. THE Component_Library SHALL provide a navbox component with Wikipedia-style structure
2. THE Component_Library SHALL style navbox titles with the background color defined in the Design_System
3. THE Component_Library SHALL style navbox groups with the background color defined in the Design_System
4. THE Component_Library SHALL alternate row colors (odd/even) as specified in the Design_System
5. THE Component_Library SHALL make navboxes collapsible with a toggle button
6. THE Component_Library SHALL display navboxes at full width (100%)

### Requirement 10: Component Library - Tables

**User Story:** As a content author, I want tables styled like Wikipedia tables, so that tabular data is presented clearly and consistently.

#### Acceptance Criteria

1. THE Component_Library SHALL style tables with the wikitable class using Wikipedia's table styling
2. THE Component_Library SHALL style table headers with the background color defined in the Design_System
3. THE Component_Library SHALL alternate row colors (odd/even) as specified in the Design_System
4. THE Component_Library SHALL apply Wikipedia-style borders to table cells
5. THE Component_Library SHALL make tables responsive with horizontal scrolling on small screens

### Requirement 11: Component Library - Buttons and Links

**User Story:** As a user, I want buttons and links styled like Wikipedia, so that interactive elements are familiar and accessible.

#### Acceptance Criteria

1. THE Component_Library SHALL style links with Wikipedia's progressive blue color
2. THE Component_Library SHALL style visited links with Wikipedia's visited purple color
3. WHEN a link is hovered, THE Component_Library SHALL apply Wikipedia's hover color
4. THE Component_Library SHALL style buttons with Wikipedia's button styling (cdx-button class)
5. THE Component_Library SHALL provide button variants (progressive, destructive, quiet)
6. THE Component_Library SHALL display external links with an external link icon

### Requirement 12: Component Library - Lists

**User Story:** As a content author, I want lists styled like Wikipedia lists, so that content structure is clear and consistent.

#### Acceptance Criteria

1. THE Component_Library SHALL style unordered lists with disc, circle, and square markers by nesting level
2. THE Component_Library SHALL style ordered lists with decimal numbering
3. THE Component_Library SHALL provide horizontal list styling (hlist class) with bullet separators
4. THE Component_Library SHALL provide plain list styling (plainlist class) with no markers
5. THE Component_Library SHALL apply appropriate margins and indentation as specified in the Design_System

### Requirement 13: Component Library - References and Citations

**User Story:** As a content author, I want reference numbers and citation formatting like Wikipedia, so that sources are properly attributed.

#### Acceptance Criteria

1. THE Component_Library SHALL style reference numbers as superscript with small font size
2. THE Component_Library SHALL style citations with Wikipedia's citation formatting
3. THE Component_Library SHALL provide reflist styling with multi-column layout options
4. THE Component_Library SHALL style reference brackets consistently

### Requirement 14: Component Library - Message Boxes

**User Story:** As a content author, I want message boxes styled like Wikipedia, so that I can display notices, warnings, and errors clearly.

#### Acceptance Criteria

1. THE Component_Library SHALL provide message box styling (mw-message-box class)
2. THE Component_Library SHALL provide warning message box styling with appropriate colors
3. THE Component_Library SHALL provide error message box styling with appropriate colors
4. THE Component_Library SHALL apply borders, backgrounds, and padding as specified in the Design_System

### Requirement 15: Component Library - Hatnotes

**User Story:** As a content author, I want hatnote styling like Wikipedia, so that I can provide contextual links at the top of pages.

#### Acceptance Criteria

1. THE Component_Library SHALL style hatnotes with italic text and left padding
2. THE Component_Library SHALL apply Wikipedia's hatnote color and spacing
3. THE Component_Library SHALL position hatnotes at the top of content sections

### Requirement 16: Responsive Design

**User Story:** As a user, I want the site to adapt to different screen sizes following Wikipedia's responsive breakpoints, so that I can use the site on any device.

#### Acceptance Criteria

1. WHEN viewport width is below 640px, THE Responsive_System SHALL hide sidebar and table of contents
2. WHEN viewport width is below 640px, THE Responsive_System SHALL make infoboxes full-width
3. WHEN viewport width is below 640px, THE Responsive_System SHALL reduce body padding to 1em
4. WHEN viewport width is between 640px and 999px, THE Responsive_System SHALL adjust sidebar width to 180px
5. WHEN viewport width is between 640px and 999px, THE Responsive_System SHALL adjust TOC width to 220px
6. WHEN viewport width is 1000px or greater, THE Responsive_System SHALL display full three-column layout
7. WHEN viewport width is 1440px or greater, THE Responsive_System SHALL set max content container width to 1440px

### Requirement 17: Accessibility Features

**User Story:** As a user with accessibility needs, I want the site to follow Wikipedia's accessibility standards, so that I can navigate and read content effectively.

#### Acceptance Criteria

1. THE Site SHALL apply focus styles with 2px solid outline and 2px offset
2. THE Site SHALL provide screen-reader-only text using the sr-only class
3. THE Site SHALL respect prefers-reduced-motion media query by disabling animations
4. THE Site SHALL ensure all interactive elements are keyboard accessible
5. THE Site SHALL maintain sufficient color contrast ratios in both light and dark modes
6. THE Site SHALL provide skip-to-content links for keyboard navigation

### Requirement 18: Print Styles

**User Story:** As a user, I want to print pages with Wikipedia-style print formatting, so that printed content is clean and readable.

#### Acceptance Criteria

1. WHEN printing, THE Site SHALL hide navigation elements (sidebar, header, footer, TOC)
2. WHEN printing, THE Site SHALL hide interactive elements (buttons, theme toggle)
3. WHEN printing, THE Site SHALL expand collapsed sections
4. WHEN printing, THE Site SHALL use white background and black text
5. WHEN printing, THE Site SHALL display URLs for external links
6. WHEN printing, THE Site SHALL remove shadows and decorative elements

### Requirement 19: Image and Figure Styling

**User Story:** As a user, I want images and figures styled like Wikipedia, so that visual content is presented consistently.

#### Acceptance Criteria

1. THE Site SHALL style images with max-width: 100% and height: auto
2. THE Site SHALL provide thumbnail styling (mw-default-size class) with max-width: 250px
3. THE Site SHALL provide alignment classes (mw-halign-left, mw-halign-right, mw-halign-center)
4. THE Site SHALL style figcaptions with small font size and subtle color
5. THE Site SHALL apply appropriate margins to floated images

### Requirement 20: Code Block Styling

**User Story:** As a user, I want code blocks styled distinctly but harmoniously with Wikipedia's design, so that code examples are readable.

#### Acceptance Criteria

1. THE Site SHALL style code blocks with monospace font family
2. THE Site SHALL apply subtle background color to code blocks
3. THE Site SHALL apply left border accent to code blocks
4. THE Site SHALL style inline code with background color and padding
5. THE Site SHALL provide syntax highlighting that works in both light and dark modes
6. THE Site SHALL make code blocks horizontally scrollable when content overflows

### Requirement 21: MathJax Integration

**User Story:** As a user, I want mathematical formulas to render clearly with Wikipedia-style math formatting, so that equations are readable and professional.

#### Acceptance Criteria

1. THE Site SHALL style MathJax containers to match Wikipedia's math styling
2. THE Site SHALL ensure inline math aligns properly with surrounding text
3. THE Site SHALL center display math with appropriate margins
4. THE Site SHALL apply theme-aware colors to math content
5. THE Site SHALL make display math horizontally scrollable on small screens

### Requirement 22: Search Functionality

**User Story:** As a user, I want a search box styled like Wikipedia's search, so that I can find content quickly.

#### Acceptance Criteria

1. THE Site SHALL style the search input with Wikipedia's search box styling
2. THE Site SHALL display search results in a dropdown with Wikipedia-style result items
3. WHEN search input is focused, THE Site SHALL apply focus styling with border and shadow
4. THE Site SHALL highlight search terms in results
5. THE Site SHALL make search results keyboard navigable

### Requirement 23: Footer Styling

**User Story:** As a user, I want a footer styled like Wikipedia, so that site information and links are presented consistently.

#### Acceptance Criteria

1. THE Site SHALL style the footer with Wikipedia's footer background and borders
2. THE Site SHALL display footer links with appropriate spacing and colors
3. THE Site SHALL apply Wikipedia's footer typography
4. THE Site SHALL make the footer responsive on small screens

### Requirement 24: Animation and Transitions

**User Story:** As a user, I want subtle animations and transitions like Wikipedia, so that interactions feel smooth and polished.

#### Acceptance Criteria

1. THE Site SHALL apply transition durations as defined in the Design_System (fast: 100ms, medium: 200ms, slow: 300ms)
2. THE Site SHALL use easing functions as defined in the Design_System
3. THE Site SHALL apply hover transitions to interactive elements
4. THE Site SHALL apply smooth scrolling to anchor links
5. WHEN prefers-reduced-motion is enabled, THE Site SHALL disable all animations and transitions

### Requirement 25: Legacy Content Migration

**User Story:** As a developer, I want existing content to automatically adopt Wikipedia styling, so that no manual content updates are required.

#### Acceptance Criteria

1. WHEN the new styles are applied, THE Site SHALL automatically style existing HTML elements
2. THE Site SHALL maintain compatibility with existing Jekyll layouts and includes
3. THE Site SHALL preserve existing functionality (theme toggle, TOC generation, search)
4. THE Site SHALL maintain existing responsive behavior while adopting Wikipedia breakpoints
5. THE Site SHALL ensure MathJax content continues to render correctly with new styles

