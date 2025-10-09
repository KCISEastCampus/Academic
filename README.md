# Academic Website for KCISEC A-level

[![Contributors](https://img.shields.io/github/contributors/KCISEastCampus/Academic)](https://github.com/KCISEastCampus/Academic/graphs/contributors)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A responsive educational website built for KangChiao International School East Campus (KCISEC) students to access course materials, revision resources, and exam information for IGCSE and A-Level subjects.

## 🚀 Features

- **Multi-subject Resource Hub**: Access study materials for Mathematics, Physics, Chemistry, Economics, and more
- **Curriculum Division**: Clear separation between IGCSE (blue) and A-Level (green) content
- **Responsive Design**: Optimized for all devices from desktop to mobile
- **Exam Information**: Up-to-date timetables and revision tips for upcoming exams
- **Jekyll-powered**: Built using Jekyll and other function to static site generator for easy content management

## 📚 Subject Coverage

The website currently includes resources for the following subjects:

### IGCSE Subjects
- Mathematics
- Physics
- Chemistry
- Economics (Coming Soon)
- English as a Second Language (Coming Soon)
- Biology (Coming Soon)
- Computer Science

### A-Level Subjects
- AS Mathematics

## 🖥️ Technologies Used

- HTML5/CSS3
- Jekyll
- Bootstrap
- JavaScript
- MathJax for mathematical expressions

## 📂 Project Structure

```
├── _config.yml              # Jekyll configuration
├── _data                    # Data files (NEW: data-driven content)
│   ├── subjects.yml         # Subject definitions
│   ├── exam_links.yml       # Exam link definitions
│   └── department_exams.yml # Department exam schedule
├── _includes                # Reusable HTML components
│   ├── banner.html
│   ├── breadcrumb.html
│   ├── card.html            # NEW: Reusable card component
│   ├── exam_link.html       # NEW: Exam link component
│   ├── footer.html
│   ├── head.html
│   ├── site_header.html     # NEW: Site header component
│   ├── subject_button.html  # NEW: Subject button component
│   └── theme_button.html
├── _layouts                 # Page templates
│   ├── index.html
│   └── subjects.html
├── assets                   # Static assets
│   ├── css
│   │   ├── _variables.css   # NEW: CSS variables and design tokens
│   │   ├── _utilities.css   # NEW: Utility classes
│   │   ├── style.css        # Main styles
│   │   └── subject.css      # Subject page styles
│   ├── js
│   └── pdf
├── alevel                   # A-Level subjects
├── igcse                    # IGCSE subjects
│   ├── mathematics
│   ├── physics
│   ├── chemistry
│   └── biology
├── FRONTEND_STRUCTURE.md    # NEW: Frontend development guide
├── OPTIMIZATION_RESULTS.md  # NEW: Optimization summary
└── index.markdown           # Homepage
```

## 📖 Documentation

- **[FRONTEND_STRUCTURE.md](FRONTEND_STRUCTURE.md)** - Guide for maintaining and extending the frontend
- **[OPTIMIZATION_RESULTS.md](OPTIMIZATION_RESULTS.md)** - Summary of recent optimizations

### Recent Improvements

The site has been optimized for better maintainability:
- ✅ Data-driven content (subjects and exams defined in YAML)
- ✅ Reusable components for consistent styling
- ✅ Organized CSS with variables and utilities
- ✅ Comprehensive documentation for developers

See [OPTIMIZATION_RESULTS.md](OPTIMIZATION_RESULTS.md) for details.

## 🚀 Deployment

The site is live at [academic.kcisec.site](https://academic.kcisec.site).

## 🔧 Local Development

1. Install [Ruby](https://www.ruby-lang.org/en/downloads/) and [Jekyll](https://jekyllrb.com/docs/installation/)
2. Clone this repository
3. Run `bundle install`
4. Start the development server with `bundle exec jekyll serve`
5. Access the site locally at `http://localhost:4000`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📧 Contact

For questions or feedback about this project, please contact:
- Email: [IGCSE@kcisec.site](mailto:IGCSE@kcisec.site) or [A-Level@kcisec.site](mailto:A-Level@kcisec.site)

## 🙏 Acknowledgements

- Content contributors from KCISEC
- [OxfordAQA](https://www.oxfordaqa.com/) for curriculum specifications
- Star Education organization

---

© 2024 EricStoneChina & KCISEC
