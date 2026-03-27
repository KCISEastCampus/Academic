# Design Document: Wikipedia-Style Redesign

## Overview

This design document outlines the technical approach for transforming the Jekyll-based academic site from its current Bootstrap-based styling to a comprehensive Wikipedia-style design system. The redesign will implement Wikipedia's visual interface, including its distinctive three-column layout, color schemes (light and dark modes), typography system, and component library.

### Goals

- Replace Bootstrap-specific styling with Wikipedia's design language
- Implement a modular CSS architecture for maintainability
- Create a comprehensive component library matching Wikipedia's UI elements
- Ensure responsive behavior across all device sizes
- Maintain accessibility standards (WCAG 2.1 AA)
- Preserve existing Jekyll functionality while enhancing visual consistency

### Non-Goals

- Rewriting Jekyll templates from scratch (we'll adapt existing templates)
- Implementing Wikipedia's backend functionality (MediaWiki features)
- Creating a full Wikipedia clone (only adopting the visual design system)
- Modifying content structure or markdown files

### Success Criteria

- All pages render with Wikipedia-style visual appearance
- Theme switching works seamlessly between light and dark modes
- Responsive layout adapts correctly at all breakpoints
- Existing functionality (search, TOC generation, MathJax) continues to work
- CSS is organized in a maintainable modular structure
- Accessibility standards are met or exceeded

## Architecture

### High-Level Architecture

The redesign follows a layered CSS architecture approach:

```
┌─────────────────────────────────────────┐
│         Jekyll Templates Layer          │
│  (Minimal changes to existing layouts)  │
└─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────┐
│          CSS Architecture Layer         │
│  ┌───────────────────────────────────┐  │
│  │  Base: Variables, Reset, Typography│  │
│  └───────────────────────────────────┘  │
│  ┌───────────────────────────────────┐  │
│  │  Layout: Header, Sidebar, Content │  │
│  └───────────────────────────────────┘  │
│  ┌───────────────────────────────────┐  │
│  │  Components: Infobox, Navbox, etc │  │
│  └───────────────────────────────────┘  │
│  ┌───────────────────────────────────┐  │
│  │  Themes: Light Mode, Dark Mode    │  │
│  └───────────────────────────────────┘  │
│  ┌───────────────────────────────────┐  │
│  │  Utilities: Spacing, Display, A11y│  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────┐
│      JavaScript Enhancement Layer       │
│  (Theme toggle, TOC, Search, etc.)      │
└─────────────────────────────────────────┘
```


### Design Principles

1. **Progressive Enhancement**: Start with semantic HTML, enhance with CSS, add JavaScript for interactivity
2. **Mobile-First Responsive**: Design for mobile first, then enhance for larger screens
3. **Theme-Aware**: All components must work in both light and dark modes
4. **Accessibility-First**: WCAG 2.1 AA compliance is mandatory, not optional
5. **Performance-Conscious**: Minimize CSS size, use efficient selectors, leverage browser caching
6. **Maintainability**: Clear naming conventions, modular structure, comprehensive documentation

### Technology Stack

- **CSS**: Custom properties (CSS variables) for theming, modern CSS features (Grid, Flexbox)
- **Jekyll**: Existing static site generator (no changes to build process)
- **JavaScript**: Vanilla JS for theme toggle, TOC generation, search (no new dependencies)
- **Fonts**: System font stack (no web fonts to improve performance)
- **Icons**: Bootstrap Icons (already in use, will be retained)

## Components and Interfaces

### CSS Module Structure

The CSS will be organized into the following modules:

#### Base Module (`assets/css/base/`)

**variables.css**
- Defines all CSS custom properties for colors, typography, spacing, shadows, transitions
- Separate variable sets for light and dark themes
- Uses `:root` for default (dark) theme and `html[data-bs-theme="light"]` for light theme overrides

**reset.css**
- Minimal CSS reset to normalize browser defaults
- Preserves useful browser defaults while ensuring consistency
- Sets box-sizing: border-box globally

**typography.css**
- Font family stacks (system fonts)
- Base font sizes and line heights
- Heading styles (h1-h6) with Wikipedia-specific styling
- Text utility classes

#### Layout Module (`assets/css/layout/`)

**header.css**
- Site header structure and styling
- Logo and title positioning
- Search box integration
- Navigation tabs

**sidebar.css**
- Left sidebar (navigation) styling
- Sticky positioning
- Responsive behavior
- Navigation link styles

**content.css**
- Main content area styling
- Three-column layout (sidebar, content, TOC)
- Content width constraints
- Responsive breakpoints

**footer.css**
- Footer structure and styling
- Link arrangements
- Responsive layout

**toc.css**
- Table of contents styling
- Sticky positioning
- Hierarchical indentation
- Active section highlighting
- Reading progress bar

#### Components Module (`assets/css/components/`)

**infobox.css**
- Infobox structure and styling
- Header, subheader, and data row styles
- Float and positioning
- Responsive behavior (full-width on mobile)

**navbox.css**
- Navigation box structure
- Title, group, and list styling
- Collapsible functionality
- Alternating row colors

**tables.css**
- Wikitable styling
- Header and cell styles
- Alternating row colors
- Responsive horizontal scrolling

**buttons.css**
- Button base styles (cdx-button)
- Button variants (progressive, destructive, quiet)
- Icon-only buttons
- Focus and hover states

**links.css**
- Link color styles (progressive, visited)
- Hover and active states
- External link icons
- New/red links (non-existent pages)

**lists.css**
- Unordered list markers (disc, circle, square)
- Ordered list numbering
- Horizontal lists (hlist)
- Plain lists (plainlist)

**forms.css**
- Input field styling
- Search box specific styles
- Focus states
- Form validation styles

**messages.css**
- Message box base styles
- Warning, error, and notice variants
- Hatnote styling
- Dismissible messages

**references.css**
- Reference number styling (superscript)
- Citation formatting
- Reference list (reflist) with multi-column support
- Bracket styling

**code.css**
- Code block styling
- Inline code styling
- Syntax highlighting theme integration
- Horizontal scrolling for overflow

**math.css**
- MathJax container styling
- Inline math alignment
- Display math centering
- Theme-aware colors
- Responsive behavior

#### Themes Module (`assets/css/themes/`)

**light.css**
- Light mode color overrides
- Adjusts all color variables for light theme
- Ensures sufficient contrast

**dark.css**
- Dark mode color definitions (default)
- Base color palette
- Component-specific color adjustments

#### Utilities Module (`assets/css/utilities/`)

**spacing.css**
- Margin and padding utilities
- Gap utilities for flexbox/grid

**display.css**
- Display utilities (flex, grid, block, inline)
- Visibility utilities
- Responsive display classes

**accessibility.css**
- Screen reader only class (sr-only)
- Focus visible styles
- Skip links
- Reduced motion support

**print.css**
- Print-specific styles
- Hide navigation and interactive elements
- Optimize for printing
- Show URLs for external links

### JavaScript Interfaces

The design maintains compatibility with existing JavaScript functionality:

**Theme Toggle** (`assets/js/theme_toggle.js`)
- Reads/writes theme preference to localStorage
- Updates `data-bs-theme` attribute on `<html>` element
- Triggers CSS variable updates via theme classes

**Table of Contents** (`assets/js/toc.js`)
- Generates TOC from page headings (h2, h3, h4)
- Handles smooth scrolling to sections
- Highlights active section during scroll
- Updates reading progress bar

**Search** (`assets/js/search.js`)
- Existing search functionality
- Will be restyled with Wikipedia-style dropdown
- Maintains keyboard navigation

**Image Lazy Loading** (`assets/js/image_lazy_load.js`)
- Existing functionality preserved
- No changes required

### Jekyll Template Integration

The design will integrate with existing Jekyll templates through minimal modifications:

**Layout Files** (`_layouts/`)
- Add Wikipedia-style wrapper classes to existing layouts
- Include new CSS files in `<head>`
- Maintain existing template structure

**Include Files** (`_includes/`)
- Update `head.html` to reference new CSS modules
- Modify `site_header.html` for Wikipedia-style header
- Adapt `footer.html` for Wikipedia-style footer
- Keep existing includes for TOC, theme button, etc.

**No Changes Required**
- Content files (markdown)
- Data files (`_data/`)
- Configuration (`_config.yml`)
- JavaScript functionality (except styling)


## Data Models

### CSS Custom Properties Schema

The design uses CSS custom properties (variables) for theming. Here's the data model:

#### Color Variables

```typescript
interface ColorPalette {
  // Primary backgrounds
  '--background-primary': string;      // Main page background
  '--background-secondary': string;    // Cards, surfaces
  '--background-tertiary': string;     // Subtle backgrounds
  '--background-interactive': string;  // Interactive elements
  
  // Borders
  '--border-base': string;            // Standard borders
  '--border-subtle': string;          // Subtle borders
  '--border-muted': string;           // Very subtle borders
  
  // Text colors
  '--color-base': string;             // Primary text
  '--color-base-fixed': string;       // Fixed contrast text
  '--color-subtle': string;           // Secondary text
  '--color-placeholder': string;      // Placeholder text
  '--color-disabled': string;         // Disabled text
  
  // Link colors
  '--color-progressive': string;      // Standard links
  '--color-progressive-hover': string; // Link hover
  '--color-progressive-active': string; // Link active
  '--color-visited': string;          // Visited links
  
  // Interactive colors
  '--color-destructive': string;      // Destructive actions
  '--color-warning': string;          // Warnings
  '--color-success': string;          // Success states
  '--color-notice': string;           // Notices
  
  // Component-specific
  '--background-color-interactive-subtle': string;
  '--background-color-progressive-subtle': string;
  '--background-color-destructive-subtle': string;
  
  // Navigation & Header
  '--background-header': string;
  '--background-nav': string;
  '--background-sidebar': string;
  
  // Tables & Infoboxes
  '--background-infobox-header': string;
  '--background-infobox-subheader': string;
  '--background-table-header': string;
  '--background-table-odd': string;
  '--background-table-even': string;
  
  // Navbox
  '--background-navbox': string;
  '--background-navbox-title': string;
  '--background-navbox-group': string;
  '--background-navbox-subgroup': string;
  '--background-navbox-odd': string;
  '--background-navbox-even': string;
}
```

#### Typography Variables

```typescript
interface TypographySystem {
  // Font families
  '--font-family-base': string;       // System font stack
  '--font-family-monospace': string;  // Monospace stack
  '--font-family-serif': string;      // Serif stack for headings
  
  // Font sizes
  '--font-size-xx-small': string;     // 11px
  '--font-size-x-small': string;      // 12px
  '--font-size-small': string;        // 13px
  '--font-size-medium': string;       // 14px (base)
  '--font-size-large': string;        // 16px
  '--font-size-x-large': string;      // 18px
  '--font-size-xx-large': string;     // 21px
  '--font-size-xxx-large': string;    // 24px
  
  // Font weights
  '--font-weight-normal': number;     // 400
  '--font-weight-semibold': number;   // 600
  '--font-weight-bold': number;       // 700
  
  // Line heights
  '--line-height-tight': number;      // 1.25
  '--line-height-base': number;       // 1.5
  '--line-height-relaxed': number;    // 1.6
  '--line-height-loose': number;      // 1.8
}
```

#### Spacing Variables

```typescript
interface SpacingSystem {
  '--space-0': string;   // 0
  '--space-1': string;   // 4px
  '--space-2': string;   // 8px
  '--space-3': string;   // 12px
  '--space-4': string;   // 16px
  '--space-5': string;   // 20px
  '--space-6': string;   // 24px
  '--space-8': string;   // 32px
  '--space-10': string;  // 40px
  '--space-12': string;  // 48px
  '--space-16': string;  // 64px
}
```

#### Layout Variables

```typescript
interface LayoutSystem {
  // Border radius
  '--border-radius-none': string;    // 0
  '--border-radius-small': string;   // 2px
  '--border-radius-medium': string;  // 4px
  '--border-radius-large': string;   // 8px
  '--border-radius-circle': string;  // 50%
  
  // Shadows
  '--box-shadow-small': string;
  '--box-shadow-medium': string;
  '--box-shadow-large': string;
  
  // Transitions
  '--transition-fast': string;       // 100ms
  '--transition-medium': string;     // 200ms
  '--transition-slow': string;       // 300ms
  '--transition-ease': string;       // cubic-bezier
  '--transition-ease-in': string;
  '--transition-ease-out': string;
  
  // Z-index
  '--z-index-base': number;          // 0
  '--z-index-dropdown': number;      // 100
  '--z-index-sticky': number;        // 200
  '--z-index-overlay': number;       // 300
  '--z-index-modal': number;         // 400
  '--z-index-toast': number;         // 500
}
```

### Component Data Models

#### Infobox Structure

```html
<table class="infobox">
  <tbody>
    <tr>
      <th colspan="2" class="infobox-above">Title</th>
    </tr>
    <tr>
      <th colspan="2" class="infobox-subheader">Subtitle</th>
    </tr>
    <tr>
      <td colspan="2" class="infobox-image">
        <img src="..." alt="...">
        <div>Caption</div>
      </td>
    </tr>
    <tr>
      <th class="infobox-label">Label</th>
      <td class="infobox-data">Data</td>
    </tr>
    <tr>
      <th colspan="2" class="infobox-header">Section Header</th>
    </tr>
  </tbody>
</table>
```

#### Navbox Structure

```html
<table class="navbox">
  <tbody>
    <tr>
      <th colspan="2" class="navbox-title">Navigation Title</th>
    </tr>
    <tr>
      <th class="navbox-group">Group Name</th>
      <td class="navbox-list navbox-odd">
        <ul>
          <li><a href="...">Link 1</a></li>
          <li><a href="...">Link 2</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th class="navbox-group">Group Name</th>
      <td class="navbox-list navbox-even">
        <ul>
          <li><a href="...">Link 1</a></li>
          <li><a href="...">Link 2</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
```

#### Table of Contents Structure

```html
<nav class="vector-toc" aria-label="Contents">
  <div class="vector-toc-header">
    <h2>Contents</h2>
    <div class="reading-progress-bar"></div>
  </div>
  <ul class="vector-toc-contents">
    <li class="vector-toc-list-item vector-toc-level-1">
      <a href="#section-1" class="vector-toc-link">Section 1</a>
    </li>
    <li class="vector-toc-list-item vector-toc-level-2">
      <a href="#section-1-1" class="vector-toc-link">Section 1.1</a>
    </li>
    <li class="vector-toc-list-item vector-toc-level-1">
      <a href="#section-2" class="vector-toc-link">Section 2</a>
    </li>
  </ul>
</nav>
```

### Theme State Model

```typescript
interface ThemeState {
  currentTheme: 'light' | 'dark';
  userPreference: 'light' | 'dark' | null;  // null = use system preference
  systemPreference: 'light' | 'dark';       // from prefers-color-scheme
}

// Theme is determined by:
// 1. User preference (if set in localStorage)
// 2. System preference (if no user preference)
// 3. Default to dark (if neither available)
```

### Responsive Breakpoints Model

```typescript
interface ResponsiveBreakpoints {
  mobile: {
    maxWidth: '639px';
    columns: 1;  // Single column (content only)
    sidebarVisible: false;
    tocVisible: false;
    infoboxWidth: '100%';
    bodyPadding: '1em';
  };
  
  tablet: {
    minWidth: '640px';
    maxWidth: '999px';
    columns: 2;  // Sidebar + content (TOC hidden or collapsed)
    sidebarWidth: '180px';
    tocWidth: '220px';
  };
  
  desktop: {
    minWidth: '1000px';
    maxWidth: '1439px';
    columns: 3;  // Sidebar + content + TOC
    sidebarWidth: '220px';
    tocWidth: '280px';
    contentMaxWidth: '960px';
  };
  
  wideDesktop: {
    minWidth: '1440px';
    columns: 3;
    containerMaxWidth: '1440px';
  };
}
```


## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

After analyzing the acceptance criteria, I've identified the following testable properties. Note that many requirements relate to CSS implementation details or visual design that are better verified through visual regression testing or manual review rather than property-based testing.

### Property 1: Theme Color Consistency

*For any* themed element in the DOM, when the theme is set to light mode, all color-related CSS custom properties should match the Design_System light mode palette, and when set to dark mode, should match the dark mode palette.

**Validates: Requirements 2.1, 2.2**

### Property 2: Theme Toggle Persistence

*For any* theme selection (light or dark), after setting the theme and reloading the page, the theme retrieved from localStorage should equal the theme that was set.

**Validates: Requirements 2.4**

### Property 3: Typography Inheritance

*For any* text element on the page, the computed font-family should include the system font stack defined in the Design_System, unless explicitly overridden for specific components (like code blocks or headings).

**Validates: Requirements 3.1, 3.4**

### Property 4: Heading Hierarchy Styling

*For any* heading element (h1-h6), the computed font-size, font-weight, and line-height should match the Design_System specifications for that heading level.

**Validates: Requirements 3.2, 3.4**

### Property 5: Layout Column Structure

*For any* page with the Wikipedia layout at desktop viewport width (≥1000px), the DOM should contain three distinct layout columns: left sidebar, main content, and right table of contents, in that order.

**Validates: Requirements 4.1**

### Property 6: Sticky Positioning

*For any* sidebar or table of contents element, the computed CSS position property should be 'sticky' with top value of 0.

**Validates: Requirements 4.5, 6.5**

### Property 7: TOC Generation Completeness

*For any* page with heading elements (h2, h3, h4), the generated table of contents should contain an entry for each heading, preserving the document order.

**Validates: Requirements 7.1**

### Property 8: TOC Indentation Hierarchy

*For any* TOC item, the indentation level (via padding-left or CSS class) should correspond to its heading level (h2 = level-1, h3 = level-2, h4 = level-3).

**Validates: Requirements 7.3**

### Property 9: TOC Scroll Navigation

*For any* TOC link, clicking it should scroll the viewport to the corresponding heading element on the page.

**Validates: Requirements 7.4**

### Property 10: Component Color Theming

*For any* component with theme-specific background colors (infobox headers, navbox titles, table headers), the computed background-color should match the Design_System specification for the current theme.

**Validates: Requirements 8.2, 8.3, 9.2, 9.3, 10.2**

### Property 11: Table Row Alternation

*For any* table with the wikitable class, odd-numbered rows should have the background color specified in Design_System for odd rows, and even-numbered rows should have the background color for even rows.

**Validates: Requirements 9.4, 10.3**

### Property 12: Link Color States

*For any* link element, the computed color should be the progressive blue when unvisited, visited purple when visited, and hover color when hovered, as defined in the Design_System.

**Validates: Requirements 11.1, 11.2, 11.3**

### Property 13: External Link Icon Presence

*For any* link with class 'external' or href starting with 'http' (external domain), the element should have a background-image or pseudo-element displaying an external link icon.

**Validates: Requirements 11.6**

### Property 14: List Marker Hierarchy

*For any* nested unordered list, the list-style-type should be 'disc' at level 1, 'circle' at level 2, and 'square' at level 3.

**Validates: Requirements 12.1**

### Property 15: Focus Outline Visibility

*For any* focusable element, when focused via keyboard, the computed outline should be 2px solid with 2px offset, using the progressive color.

**Validates: Requirements 17.1**

### Property 16: Keyboard Accessibility

*For any* interactive element (links, buttons, form inputs), the element should be reachable via keyboard navigation (Tab key) and activatable via keyboard (Enter/Space).

**Validates: Requirements 17.4**

### Property 17: Color Contrast Compliance

*For any* text element, the contrast ratio between the text color and its background color should meet WCAG 2.1 AA standards (4.5:1 for normal text, 3:1 for large text) in both light and dark modes.

**Validates: Requirements 17.5**

### Property 18: Image Responsiveness

*For any* image element, the computed max-width should be 100% and height should be auto, ensuring images scale responsively.

**Validates: Requirements 19.1**

### Property 19: Code Block Styling

*For any* code block element (pre, code), the computed font-family should be monospace, and the element should have a subtle background color and left border accent.

**Validates: Requirements 20.1, 20.2, 20.3**

### Property 20: Code Block Overflow Handling

*For any* code block with content wider than its container, the element should have overflow-x set to auto or scroll, enabling horizontal scrolling.

**Validates: Requirements 20.6**

### Property 21: MathJax Theme Awareness

*For any* MathJax container, the computed color should match the theme-appropriate text color (light text in dark mode, dark text in light mode).

**Validates: Requirements 21.4**

### Property 22: Search Result Keyboard Navigation

*For any* search result item in the dropdown, the element should be navigable via keyboard (arrow keys) and selectable via Enter key.

**Validates: Requirements 22.5**

### Property 23: Transition Duration Consistency

*For any* element with CSS transitions, the transition-duration should be one of the Design_System defined values (100ms, 200ms, or 300ms).

**Validates: Requirements 24.1**

### Property 24: Smooth Scroll Behavior

*For any* anchor link pointing to an on-page element, clicking the link should trigger smooth scrolling to the target element.

**Validates: Requirements 24.4**

### Property 25: Legacy Content Compatibility

*For any* existing HTML element in the content, applying the new CSS should automatically style the element according to Wikipedia design system without requiring HTML modifications.

**Validates: Requirements 25.1, 25.2**

### Property 26: MathJax Rendering Preservation

*For any* page containing MathJax content, after applying the new styles, the MathJax should render correctly with proper alignment and readability.

**Validates: Requirements 25.5**

### Property Reflection

After reviewing all identified properties, I've consolidated redundant properties:

- **Properties 1 and 10** both test theme-aware colors. Property 10 is more specific to components, while Property 1 is general. Both provide unique value, so both are retained.
- **Properties 3 and 4** both test typography, but Property 3 tests font-family inheritance while Property 4 tests heading-specific sizing. Both are retained as they test different aspects.
- **Properties 8 and 7** both relate to TOC, but test different aspects (indentation vs. completeness). Both are retained.
- **Properties 19 and 20** both test code blocks, but test different aspects (styling vs. overflow). Both are retained.

All other properties test unique aspects of the system and provide distinct validation value.


## Error Handling

### CSS Fallbacks

The design includes comprehensive fallback strategies for CSS:

#### Font Stack Fallbacks

```css
--font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
                     'Helvetica Neue', Arial, sans-serif;
```

If the preferred system font is unavailable, the browser will cascade through the stack until it finds an available font. The final fallback is the generic `sans-serif` family.

#### Color Fallbacks

All CSS custom properties have default values defined in `:root`. If a theme-specific override fails to load, the default values ensure the site remains usable:

```css
:root {
  --color-base: #f8f9fa;  /* Default (dark mode) */
}

html[data-bs-theme="light"] {
  --color-base: #202122;  /* Light mode override */
}
```

If the light theme class fails to apply, the site defaults to dark mode colors.

#### Layout Fallbacks

The three-column layout uses CSS Grid with fallbacks:

```css
.mw-content-container {
  display: flex;  /* Fallback for older browsers */
  display: grid;  /* Modern browsers */
  grid-template-columns: 220px 1fr 280px;
}
```

Browsers that don't support Grid will use Flexbox. Browsers that don't support Flexbox will use block layout (single column).

### JavaScript Error Handling

#### Theme Toggle Errors

```javascript
try {
  const theme = localStorage.getItem('site-theme');
  if (theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }
} catch (e) {
  // localStorage might be unavailable (private browsing, etc.)
  // Silently fail and use default theme
  console.warn('Theme preference could not be loaded:', e);
}
```

If localStorage is unavailable (e.g., in private browsing mode), the site falls back to the system preference or default theme.

#### TOC Generation Errors

```javascript
try {
  const headings = document.querySelectorAll('h2, h3, h4');
  if (headings.length === 0) {
    // No headings found, hide TOC
    document.querySelector('.vector-toc').style.display = 'none';
    return;
  }
  // Generate TOC...
} catch (e) {
  console.error('TOC generation failed:', e);
  // Hide TOC on error
  document.querySelector('.vector-toc').style.display = 'none';
}
```

If TOC generation fails, the TOC is hidden rather than showing broken content.

#### Search Errors

```javascript
fetch('/assets/search.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Search index not available');
    }
    return response.json();
  })
  .catch(error => {
    console.error('Search initialization failed:', error);
    // Show error message in search box
    searchInput.placeholder = 'Search unavailable';
    searchInput.disabled = true;
  });
```

If the search index fails to load, the search box is disabled with an appropriate message.

### Responsive Layout Errors

#### Viewport Detection Errors

If JavaScript fails to detect viewport size, CSS media queries provide the fallback:

```css
/* Default: mobile layout */
.vector-column-start,
.vector-column-end {
  display: none;
}

/* Desktop: show all columns */
@media (min-width: 1000px) {
  .vector-column-start,
  .vector-column-end {
    display: block;
  }
}
```

The layout adapts based on CSS media queries, independent of JavaScript.

### Content Rendering Errors

#### MathJax Errors

```javascript
if (window.mermaid && window.mermaid.initialize) {
  try {
    window.mermaid.initialize({ startOnLoad: false, theme: 'dark' });
    window.mermaid.init(undefined, document.querySelectorAll('.language-mermaid'));
  } catch (e) {
    // Silently fail if mermaid initialization fails
    console.warn('Mermaid initialization failed:', e);
  }
}
```

If MathJax or Mermaid fails to load or initialize, the site continues to function with the raw content visible.

#### Image Loading Errors

```html
<img src="image.jpg" 
     alt="Descriptive text" 
     onerror="this.style.display='none'">
```

If an image fails to load, it's hidden to avoid showing broken image icons. The alt text remains accessible to screen readers.

### Graceful Degradation Strategy

The design follows a progressive enhancement approach, ensuring core functionality works even when advanced features fail:

1. **HTML Only**: Content is readable and navigable
2. **HTML + CSS**: Visual styling and layout work
3. **HTML + CSS + JS**: Interactive features (theme toggle, TOC, search) work

Each layer enhances the experience but isn't required for basic functionality.

### Browser Compatibility Errors

#### Unsupported CSS Features

```css
/* Modern browsers */
.element {
  display: grid;
  gap: 1rem;
}

/* Fallback for older browsers */
@supports not (display: grid) {
  .element {
    display: flex;
    flex-wrap: wrap;
  }
  .element > * {
    margin: 0.5rem;
  }
}
```

Feature queries (`@supports`) provide fallbacks for browsers that don't support modern CSS features.

#### Unsupported JavaScript Features

```javascript
// Use optional chaining with fallback
const theme = document.documentElement?.getAttribute?.('data-bs-theme') || 'dark';

// Use nullish coalescing with fallback
const userTheme = localStorage.getItem('site-theme') ?? 'dark';
```

Modern JavaScript features are used with fallbacks for older browsers.

### Error Reporting

For development and debugging, errors are logged to the console:

```javascript
if (process.env.NODE_ENV === 'development') {
  console.error('Detailed error information:', error);
} else {
  console.warn('An error occurred. Please refresh the page.');
}
```

In production, errors are logged minimally to avoid exposing implementation details.


## Testing Strategy

### Dual Testing Approach

This project will use both unit testing and property-based testing to ensure comprehensive coverage:

- **Unit tests**: Verify specific examples, edge cases, and error conditions
- **Property tests**: Verify universal properties across all inputs

Both approaches are complementary and necessary. Unit tests catch concrete bugs in specific scenarios, while property tests verify general correctness across a wide range of inputs.

### Unit Testing

Unit tests will focus on:

#### Specific Examples
- h1.firstHeading has correct Wikipedia styling (Requirement 3.5)
- Header contains logo and title (Requirement 5.5)
- Search input has Wikipedia-style styling (Requirement 5.6)
- Sidebar has correct background and borders (Requirement 6.1)
- Navigation items are in hierarchical list structure (Requirement 6.3)
- TOC has Wikipedia styling (Requirement 7.2)
- TOC is sticky with max-height and overflow (Requirement 7.6)
- TOC displays reading progress bar (Requirement 7.7)
- Infobox has Wikipedia-style structure (Requirement 8.1)
- Navbox has Wikipedia-style structure (Requirement 9.1)
- Footer has Wikipedia styling (Requirement 23.1)
- Skip-to-content links exist (Requirement 17.6)

#### Edge Cases
- Mobile viewport (<640px): sidebar and TOC hidden (Requirements 4.6, 16.1)
- Mobile viewport: infoboxes full-width (Requirements 8.6, 16.2)
- Mobile viewport: body padding reduced (Requirement 16.3)
- Tablet viewport (640-999px): adjusted sidebar/TOC widths (Requirements 4.7, 16.4, 16.5)
- Desktop viewport (≥1000px): three-column layout (Requirement 16.6)
- Wide desktop (≥1440px): max container width (Requirement 16.7)
- Small screens: tables horizontally scrollable (Requirement 10.5)
- Small screens: display math horizontally scrollable (Requirement 21.5)
- Print media: navigation hidden (Requirement 18.1)
- Print media: interactive elements hidden (Requirement 18.2)
- Print media: collapsed sections expanded (Requirement 18.3)
- Print media: white background, black text (Requirement 18.4)
- Print media: URLs shown for external links (Requirement 18.5)
- Print media: shadows removed (Requirement 18.6)
- prefers-reduced-motion: animations disabled (Requirements 17.3, 24.5)
- Footer responsive on small screens (Requirement 23.4)

#### Integration Points
- Theme toggle updates all color variables (Requirement 2.3)
- Page load applies saved theme preference (Requirement 2.5)
- No saved preference: respects prefers-color-scheme (Requirement 2.6)
- Search input focus applies correct styling (Requirement 22.3)
- Hatnotes positioned at top of sections (Requirement 15.3)

#### Error Conditions
- localStorage unavailable: theme defaults to system preference
- Search index fails to load: search box disabled
- TOC generation fails: TOC hidden
- Image fails to load: image hidden
- MathJax fails to load: raw content visible

### Property-Based Testing

Property-based testing will verify universal properties using a JavaScript property testing library (fast-check for JavaScript/TypeScript).

#### Configuration
- **Minimum iterations**: 100 per property test (due to randomization)
- **Library**: fast-check (https://github.com/dubzzz/fast-check)
- **Test tagging**: Each test must reference its design document property

#### Property Test Implementation

Each correctness property will be implemented as a property-based test:

**Example: Property 1 - Theme Color Consistency**

```javascript
// Feature: wikipedia-style-redesign, Property 1: Theme Color Consistency
test('themed elements match Design_System colors', () => {
  fc.assert(
    fc.property(
      fc.constantFrom('light', 'dark'),
      fc.array(fc.constantFrom('.card', '.infobox', '.navbox', 'table.wikitable')),
      (theme, selectors) => {
        // Set theme
        document.documentElement.setAttribute('data-bs-theme', theme);
        
        // For each selector, verify colors match Design_System
        selectors.forEach(selector => {
          const elements = document.querySelectorAll(selector);
          elements.forEach(el => {
            const computedColor = getComputedStyle(el).backgroundColor;
            const expectedColor = getDesignSystemColor(selector, theme);
            expect(computedColor).toBe(expectedColor);
          });
        });
      }
    ),
    { numRuns: 100 }
  );
});
```

**Example: Property 7 - TOC Generation Completeness**

```javascript
// Feature: wikipedia-style-redesign, Property 7: TOC Generation Completeness
test('TOC contains entry for each heading', () => {
  fc.assert(
    fc.property(
      fc.array(fc.record({
        level: fc.constantFrom(2, 3, 4),
        text: fc.string({ minLength: 1, maxLength: 50 }),
        id: fc.string({ minLength: 1, maxLength: 20 })
      })),
      (headings) => {
        // Create page with headings
        const content = document.createElement('div');
        headings.forEach(h => {
          const heading = document.createElement(`h${h.level}`);
          heading.textContent = h.text;
          heading.id = h.id;
          content.appendChild(heading);
        });
        document.body.appendChild(content);
        
        // Generate TOC
        generateTOC();
        
        // Verify TOC has entry for each heading
        const tocLinks = document.querySelectorAll('.vector-toc-link');
        expect(tocLinks.length).toBe(headings.length);
        
        headings.forEach((h, i) => {
          expect(tocLinks[i].getAttribute('href')).toBe(`#${h.id}`);
          expect(tocLinks[i].textContent).toBe(h.text);
        });
        
        // Cleanup
        document.body.removeChild(content);
      }
    ),
    { numRuns: 100 }
  );
});
```

**Example: Property 17 - Color Contrast Compliance**

```javascript
// Feature: wikipedia-style-redesign, Property 17: Color Contrast Compliance
test('text elements meet WCAG contrast ratios', () => {
  fc.assert(
    fc.property(
      fc.constantFrom('light', 'dark'),
      fc.array(fc.constantFrom('p', 'h1', 'h2', 'h3', 'a', 'button', 'li')),
      (theme, selectors) => {
        // Set theme
        document.documentElement.setAttribute('data-bs-theme', theme);
        
        // For each selector, verify contrast ratio
        selectors.forEach(selector => {
          const elements = document.querySelectorAll(selector);
          elements.forEach(el => {
            const textColor = getComputedStyle(el).color;
            const bgColor = getBackgroundColor(el);
            const contrastRatio = calculateContrastRatio(textColor, bgColor);
            
            const fontSize = parseFloat(getComputedStyle(el).fontSize);
            const fontWeight = getComputedStyle(el).fontWeight;
            const isLargeText = fontSize >= 18 || (fontSize >= 14 && fontWeight >= 700);
            
            const minRatio = isLargeText ? 3 : 4.5;
            expect(contrastRatio).toBeGreaterThanOrEqual(minRatio);
          });
        });
      }
    ),
    { numRuns: 100 }
  );
});
```

#### Property Test Tags

Each property test must include a comment tag referencing the design document:

```javascript
// Feature: wikipedia-style-redesign, Property {number}: {property_text}
```

This ensures traceability between design properties and test implementation.

### Visual Regression Testing

In addition to unit and property tests, visual regression testing will verify that the redesign matches Wikipedia's visual appearance:

#### Tools
- **Percy** or **Chromatic**: Automated visual regression testing
- **Backstop.js**: Open-source alternative for visual regression

#### Test Scenarios
- Homepage in light mode
- Homepage in dark mode
- Subject page with infobox in light mode
- Subject page with infobox in dark mode
- Page with navbox in light mode
- Page with navbox in dark mode
- Page with tables in light mode
- Page with tables in dark mode
- Mobile viewport (375px width)
- Tablet viewport (768px width)
- Desktop viewport (1200px width)
- Wide desktop viewport (1600px width)

#### Baseline Images
Baseline images will be captured from Wikipedia pages and used as reference for comparison.

### Accessibility Testing

#### Automated Tools
- **axe-core**: Automated accessibility testing
- **pa11y**: Command-line accessibility testing
- **Lighthouse**: Chrome DevTools accessibility audit

#### Manual Testing
- **Keyboard navigation**: Verify all interactive elements are keyboard accessible
- **Screen reader testing**: Test with NVDA (Windows) and VoiceOver (macOS)
- **Color contrast**: Verify contrast ratios meet WCAG 2.1 AA standards
- **Focus indicators**: Verify focus indicators are visible and clear

### Performance Testing

#### Metrics
- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Time to Interactive (TTI)**: < 3.5s

#### Tools
- **Lighthouse**: Chrome DevTools performance audit
- **WebPageTest**: Detailed performance analysis
- **Chrome DevTools**: Network and performance profiling

### Browser Compatibility Testing

#### Target Browsers
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

#### Testing Tools
- **BrowserStack**: Cross-browser testing
- **Sauce Labs**: Automated cross-browser testing
- **Manual testing**: Test on actual devices

### Test Execution Strategy

#### Development
- Run unit tests on every code change (watch mode)
- Run property tests before committing
- Run visual regression tests on pull requests

#### CI/CD Pipeline
1. Run unit tests
2. Run property tests
3. Run accessibility tests
4. Run visual regression tests
5. Run performance tests
6. Deploy to staging if all tests pass

#### Test Coverage Goals
- **Unit test coverage**: > 80% of JavaScript code
- **Property test coverage**: All 26 correctness properties implemented
- **Visual regression coverage**: All major page types and themes
- **Accessibility coverage**: All pages pass axe-core audit

