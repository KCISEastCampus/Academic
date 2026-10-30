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

## Topic question finder integration

Physics, Mathematics and Further Mathematics have 128 reviewed mappings across 127 existing lessons and their Chinese versions. `_data/exam_topics.json` is an exact copy of the exam library's canonical `academic-topics.json`. Keep existing IDs stable. Every mapping has one `unit`, a primary `chapter`, and optionally `chapters` containing all matching codes from that same unit. The component encodes those codes as a comma-separated `chapters` filter, lists all mappings for the current lesson in one block, and hides when no complete mapping exists. Results are whole questions that may span chapters; filter links preserve the existing paper draft. The two original pilot course entrance links remain.

The [mapping evidence](docs/agents/exam-topics-mapping-2026-10-31.md) records scope, real dist IDs and skipped pages. Offline checks use only Node and the checked-out source:

```powershell
node scripts/test-exam-topic-integration.js --source-only
# Also compare canonical bytes and validate every ID against the actual exam dist:
node scripts/test-exam-topic-integration.js --source-only --canonical="C:/path/to/exam-root/academic-topics.json" --exam-root="C:/path/to/exam-root"
```

For full verification, run `bundle exec jekyll build --trace`, then `node scripts/test-exam-topic-integration.js` (the optional canonical/exam-root arguments also work here). This checks generated lesson URLs, placement after all feedback, language, whole-question scope, draft preservation, multi-chapter entries and real Ruby Liquid fixtures for missing/partial mappings. CI runs both source and built checks; the approved canonical bytes are pinned with SHA-256. The JSON file uses LF to preserve byte equality across checkouts.

Preview with `bundle exec jekyll serve --host 127.0.0.1 --port 4000`. Check desktop/mobile and light/dark at the original two pilots and their `/zh/` counterparts, plus a multi-chapter page such as `/alevel/as-further-mathematics/complex-numbers-and-roots/` and an FPSM1 page such as `/alevel/as-further-mathematics/bayes/`. If the clone's `.bundle/config` points to an empty `vendor/bundle` but matching gems are installed globally, set `$env:BUNDLE_IGNORE_CONFIG='true'` in that PowerShell session first. The local installed Ruby is `D:/Ruby34-x64/bin`; no dependency copy or configuration edit is required.

The expansion branch starts at `73bb9a1`. This adds navigation only; lesson text, prompts, anchors, sources, reading layout and closed feedback are retained. Night-time source checks do not claim a fresh Jekyll build or browser verification: those are deferred when the installed runtime needs elevation, and the old `_site` is not acceptance evidence. Student learning outcomes and the external composer's draft persistence require separate evidence.

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
