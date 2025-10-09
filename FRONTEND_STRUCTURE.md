# Frontend Structure Documentation

## Overview
This document explains the optimized frontend structure for easier maintenance and scalability.

## Data-Driven Content

### Adding/Modifying Subjects
Edit `_data/subjects.yml`:
```yaml
alevel:
  - id: new-subject
    name: Subject Name
    icon: "📗"
    path: /alevel/subject-path/
    color: success  # Bootstrap color: success, primary, secondary, etc.
```

### Adding/Modifying Exam Links
Edit `_data/exam_links.yml`:
```yaml
- id: unique-id
  title: Link Title
  icon: "📅"
  path: /path/to/file.pdf
  type: external  # Use 'external' for PDFs or external links
```

### Managing Department Exams
Edit `_data/department_exams.yml`:
```yaml
- id: exam-id
  title: "Exam Title"
  date: 2025-11-12
  duration: "2 hours"
```

## Reusable Components

### Card Component
Located in `_includes/card.html`. Use for consistent card styling:
```liquid
{% raw %}
{% include card.html 
   title="Card Title" 
   subtitle="Optional subtitle"
   content="Content here" 
   classes="shadow-sm" %}
{% endraw %}
```

### Subject Button Component
Located in `_includes/subject_button.html`. Automatically styled based on subject data:
```liquid
{% raw %}
{% include subject_button.html subject=subject %}
{% endraw %}
```

### Exam Link Component
Located in `_includes/exam_link.html`. Handles external/internal links:
```liquid
{% raw %}
{% include exam_link.html exam=exam %}
{% endraw %}
```

## CSS Organization

### Variables (`assets/css/variables.css`)
Central location for:
- Theme colors (dark/light mode)
- Spacing scale
- Border radius
- Container max-width

### Utilities (`assets/css/utilities.css`)
Common utility classes:
- `.flex-center`, `.flex-between` - Flexbox layouts
- `.gap-xs`, `.gap-sm`, `.gap-md`, etc. - Consistent spacing
- `.rounded` - Border radius
- `.surface-bg` - Surface background color

### Main Styles (`assets/css/style.css`)
Imports variables and utilities, then defines component-specific styles.

## Benefits

1. **Easy Updates**: Change subjects/exams by editing YAML files instead of HTML
2. **Consistency**: Reusable components ensure uniform styling
3. **Maintainability**: CSS variables make theme changes simple
4. **Scalability**: Adding new content is straightforward and follows patterns
5. **Reduced Duplication**: Components eliminate repeated HTML/CSS

## Future Enhancements

Consider:
- SCSS for nested styles and mixins
- Atomic CSS framework (e.g., Tailwind) for utility-first approach
- Additional data-driven sections (resources, announcements, etc.)
- Component library expansion (alerts, badges, modals)

## Quick Reference

### Common Tasks

**Add a new subject:**
1. Edit `_data/subjects.yml`
2. Add entry under `alevel:` or `igcse:`
3. Page will automatically update

**Update exam link:**
1. Edit `_data/exam_links.yml`
2. Change existing entry or add new one
3. Links update automatically

**Change theme colors:**
1. Edit `assets/css/variables.css`
2. Modify color values in `:root` or theme-specific sections
3. Changes apply site-wide

**Add utility class:**
1. Edit `assets/css/utilities.css`
2. Add new class using CSS variables
3. Use class anywhere in templates

### Example: Adding a New Subject

```yaml
# In _data/subjects.yml
alevel:
  - id: computer-science
    name: AS Computer Science
    icon: "💻"
    path: /alevel/computer-science/
    color: success
```

That's it! The homepage will automatically show the new subject button.

### Example: Using the Card Component

```liquid
{% raw %}
{% capture card_content %}
  <p>This is custom content inside the card.</p>
  <a href="/link" class="btn btn-primary">Learn More</a>
{% endcapture %}

{% include card.html 
   title="My Card Title" 
   subtitle="Optional description"
   content=card_content
   classes="shadow-sm mb-3" %}
{% endraw %}
```
