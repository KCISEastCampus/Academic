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
- AS Further Mathematics
- A2 Physics
- AS Physics
- AS Chemistry
- A2 Chemistry (CH03)
- AS Economics
- AS Biology

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

## Topic question finder pilot

The English and Chinese Polar Coordinates (FP2.3) and Moments (U1:3.2.2) lessons link to the question finder after practice. Their course entrances use the same component. `_data/exam_topics.json` is an exact copy of the approved `academic-topics.json`; keep its topic, course, unit and chapter IDs unchanged. The component hides when no complete mapping exists. Results include whole questions that can span chapters. Entry URLs set filters and lesson language without resetting the paper draft.

From the current `main` snapshot, run `bundle exec jekyll build`, then `node scripts/test-exam-topic-integration.js`. Pass the canonical JSON path as an optional final argument to also compare the files byte for byte; CI pins the approved source SHA-256. Preview with `bundle exec jekyll serve --host 127.0.0.1 --port 4000` and open `/alevel/a2-further-mathematics/polar-coordinates/` or `/alevel/as-physics/vectors-and-moments/#moments`, plus their `/zh/` counterparts. If this clone's `.bundle/config` points to an empty `vendor/bundle` but matching gems are already installed globally, set `$env:BUNDLE_IGNORE_CONFIG='true'` for that PowerShell session first.

This pilot adds navigation only; lesson text, prompts, anchors, sources, reading layout and closed feedback are retained. Local build and browser checks do not establish student learning outcomes or verify the external composer's draft persistence end to end.

## Chemistry course content

CH03 English pages live in `alevel/a2-chemistry/`; Chinese pages live in `zh/alevel/a2-chemistry/` and use `translation_of` to pair their original URLs. Keep heading IDs, original English exam prompts, marks and formulas aligned across each pair. Label self-written tasks separately.

Store shared exam figures in `assets/img/a2-chemistry/` as `ch03-YYYY-session-qNN-description.png`, for example `ch03-2025-jan-q01-born-haber.png`. Use one asset for both languages and keep mark-scheme answer figures inside closed solutions.

After `bundle exec jekyll build`, run `node scripts/test-chemistry-ch03.js` to check both language routes, learning links, exam calculations and equation balance.

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
