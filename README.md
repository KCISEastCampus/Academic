# Academic Website for KCISEC

[![Contributors](https://img.shields.io/github/contributors/KCISEastCampus/Academic)](https://github.com/KCISEastCampus/Academic/graphs/contributors)

A responsive educational website for KangChiao International School East Campus (KCISEC), providing IGCSE and A-Level students with course resources, exam links, and revision materials.

## 🚀 Features

- Multi-subject resource hub for IGCSE and A-Level
- Data-driven content using YAML (`_data/`)
- Reusable Jekyll includes and layouts for maintainable pages
- Responsive UI with shared CSS variables and utility styles
- Math expression support via MathJax

## 📚 Subject Coverage

### IGCSE
- Biology
- Chemistry
- Mathematics
- Physics

### A-Level
- A2 Mathematics
- AS Mathematics
- AS Physics
- AS Further Mathematics
- Chemistry

## 🛠️ Tech Stack

- Jekyll (Ruby)
- HTML / CSS / JavaScript
- YAML data files
- MathJax

## 📂 Project Structure

```text
.
├─ _config.yml
├─ _data/                  # subjects, exam links, contributors, student council data
├─ _includes/              # reusable HTML components
├─ _layouts/               # page layouts
├─ assets/                 # css, js, images, pdf, fonts
├─ docs/                   # project documentation
├─ igcse/                  # IGCSE subject pages
├─ alevel/                 # A-Level subject pages
├─ student-council/        # student council pages/news
├─ tests/                  # local test/demo pages
└─ index.markdown          # homepage entry
```

## 📖 Documentation

- [COMBINED_DOCUMENTATION.md](docs/COMBINED_DOCUMENTATION.md)
- [FRONTEND_STRUCTURE.md](docs/FRONTEND_STRUCTURE.md)
- [MATH_FORMULA_GUIDELINES.md](docs/MATH_FORMULA_GUIDELINES.md)
- [OPTIMIZATION_RESULTS.md](docs/OPTIMIZATION_RESULTS.md)
- [UX_OPTIMIZATION_RECOMMENDATIONS.md](docs/UX_OPTIMIZATION_RECOMMENDATIONS.md)

## 🌐 Deployment

- Production site: [https://academic.kcisec.site](https://academic.kcisec.site)

## 🔧 Local Development

### Prerequisites
- Ruby (recommended RubyInstaller on Windows)
- Bundler

### Run locally
1. Clone this repository.
2. Install dependencies:
	```bash
	bundle install
	```
3. Start Jekyll:
	```bash
	bundle exec jekyll serve
	```
4. Open `http://localhost:4000`.

## 🤝 Contributing

Contributions are welcome via pull requests.

1. Fork the repository
2. Create a branch (`git checkout -b feature/your-feature`)
3. Commit changes (`git commit -m "Describe your change"`)
4. Push branch and open a PR

## 📧 Contact

- [IGCSE@kcisec.site](mailto:IGCSE@kcisec.site)
- [A-Level@kcisec.site](mailto:A-Level@kcisec.site)

## 🙏 Acknowledgements

- KCISEC student and teacher contributors
- [OxfordAQA](https://www.oxfordaqa.com/) curriculum resources

---

© 2026 KCISEC Contributors
