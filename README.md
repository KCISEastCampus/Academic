# Academic Website for KCISEC

[![Contributors](https://img.shields.io/github/contributors/KCISEastCampus/Academic)](https://github.com/KCISEastCampus/Academic/graphs/contributors)

A responsive educational website for KangChiao International School East Campus (KCISEC), providing IGCSE and A-Level students with course resources, exam links, revision materials, and university admissions test notes.

## 🚀 Features

- Multi-subject resource hub for IGCSE and A-Level
- Data-driven content using YAML (`_data/`)
- Reusable Jekyll includes and layouts for maintainable pages
- Responsive UI with shared CSS variables and utility styles
- Math expression support via MathJax
- ESAT/TMUA notes with detailed and concise views, searchable contents, figures, and interactive worked problems

## 📚 Subject Coverage

### IGCSE
- Biology
- Chemistry
- Mathematics
- Physics

### A-Level
- A2 Mathematics
- AS Mathematics
- AS Further Mathematics
- A2 Physics
- AS Physics
- AS Chemistry
- AS Economics
- AS Biology

### University Admissions Tests
- ESAT Mathematics 1 and Physics
- TMUA / ESAT Mathematics 2
- [ESAT & TMUA notes](admissions/tmua-esat/index.html): Chinese revision notes based on the UAT-UK June 2026 guides

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
├─ admissions/             # ESAT/TMUA admissions test notes
├─ scripts/                # content import and regression checks
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

### Verification

Node.js is required for the regression checks:

```bash
bundle exec jekyll build --trace
node scripts/test-tmua-presentation.js
node scripts/test-tmua-math.js
node scripts/test-toc-refresh.js
node scripts/test-reading-progress.js
git diff --check
```

### ESAT/TMUA Notes Maintenance

- The page uses the shared `subjects` layout, with page-specific styles in `assets/css/tmua-notes.css`.
- Existing formulas remain MathML. The shared MathJax engine enables MathML input for this page; `assets/js/tmua-math.js` renders nearby formulas in batches and handles dynamic problem panels.
- Figures live in `assets/img/tmua-esat/`, with size metadata in `_data/tmua_figure_sizes.json` to reserve image space before loading.
- `scripts/import-tmua-notes.js` imports the contributor's source HTML and checks notes, problems, and credit for changes. Review proposed mathematical content edits separately from presentation changes.

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
