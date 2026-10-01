# A2 Pure content review

Reviewed on 1 October 2026, on branch codex/math-content-opt.

## Sources and scope

- Supplied textbook: *AQA A2 Mathematics: Pure and Mechanics*, Chapters 1–9, printed pp. 2–147.
- [OxfordAQA Mathematics specification, version 5.2](https://www.oxfordaqa.com/wp-content/uploads/2023/10/oxfordaqa-a-level-mathematics-specification.pdf), Unit P2, printed pp. 19–24.
- All 15 lessons, the topic index and Quick Reference. AS Pure knowledge is a prerequisite; Mechanics and Statistics were outside this review.
- Website content uses English, with simpler explanations and textbook mathematical terminology. Integration constants use +C. Examples and exercises are identified as self-written, without official marks.

## Coverage

| Source topic | Lesson coverage |
|---|---|
| Chapter 1 / P2.1 | Functions, composite and inverse functions; piecewise and finite domains; modulus graphs and transformations; equations and inequalities with modulus on both sides; algebraic fractions, division, factor and remainder theorems for linear divisors; partial fractions |
| Chapter 2 / P2.2 | Binomial series, validity, approximations, products and rational functions |
| Sections 5.6–5.7 / P2.3 and P2.6 | Cartesian/parametric conversion, restricted curves, sketches, direction, gradients, tangents, normals and stationary points |
| Chapter 3 / P2.4 | Inverse and reciprocal trigonometric functions, domains, graphs, identities, compound/double angle formulae, sine/cosine forms and equations |
| Chapter 4 / P2.5 | Exponential/logarithmic functions, inverse graphs, laws, equations and growth/decay models |
| Chapter 5 / P2.6 | Standard derivatives, product/quotient/chain rules, implicit differentiation, inverse derivatives, stationary points, tangents and normals at specific and general points |
| Chapter 6 / P2.7 | Standard integrals, inspection, substitution, parts, logarithms and partial fractions; trigonometric integrals, definite integrals, areas and volumes about either axis |
| Chapter 7 / P2.8 | Formation and solution of separable equations, given conditions, constant solutions, practical growth/decay models and half-life |
| Chapter 8 / P2.9 | Continuous sign-change intervals, iteration, convergence, staircase/cobweb diagrams, rounding verification, mid-ordinate and Simpson rules |
| Chapter 9 / P2.10 | Two/three-dimensional vectors, magnitudes, operations, position vectors, joining points, line equations, intersections/parallel/skew lines, scalar products, angles, perpendicular feet and distances |
| P2 mathematical arguments | Separate Mathematical Proof supplement: mathematical language, necessary/sufficient conditions, direct proof, contradiction and counter-examples |

The textbook and specification have different coverage. Proof methods were retained and expanded because the specification requires them, despite their absence from the textbook's chapter list. Plane equations were removed from Quick Reference. Parametric stationary points now use gradient sign changes: the specification excludes second derivatives of implicit/parametric curves.

## Repairs

- Added piecewise functions and finite domains, linear-divisor factor theorem examples, two-modulus inequalities and Cartesian-to-parametric conversion.
- Added standard integrals, integration of ln x by parts, x ln x practice, and general implicit tangents/normals.
- Added the Mathematical Proof lesson and staircase/cobweb explanations, illustration and practice.
- Updated the index, learning path and Quick Reference to match the full lessons. Preserved existing section anchors where headings changed.
- Corrected incomplete domain restrictions, growth/decay sign conventions and Quick Reference's duplicate title.
- Fixed a vector-distance expression that Markdown parsed as a table; converted the modulus definition to display mathematics so its two cases remain distinct.
- Replaced escaped punctuation with explicit TeX set-brace commands so Markdown preserves finite domains and ranges.
- Split long inline verification equations into display blocks with suitable line breaks.
- Fixed initial fragment navigation after MathJax changes page height. Targets are aligned after typesetting and font loading, using the existing fixed-header margin.

## Verification

- Jekyll build succeeded; Markdown lint and git diff whitespace checks passed.
- All repository test scripts passed, including timetable/theme regressions.
- New consistency checks cover early algebra, domain restrictions, modulus inequalities, 12 antiderivatives, proof cases, iteration values, general tangents/normals, English content, lesson navigation and rendered matrix/cases row separators.
- Existing chapter checks cover the remaining derivative, integral, vector, series, equation, numerical-method and model results. Every worked solution and practice answer was also read during the review; numerical checks supplement that reasoning.
- Built internal links and anchors were checked across all 17 Pure pages.
- All 17 pages were opened at 320, 390 and 1366 pixel widths. Every hint/answer disclosure was opened. Changed pages were rechecked after repairs.
- Final narrow-screen/desktop results: no MathJax errors, broken lesson images, malformed tables, page-width overflow or uncontained inline formula overflow. Wide tables and display formulas retain local horizontal scrolling.
- Mobile breadcrumbs retain the intermediate Pure index node. Topic-index fragment navigation and TOC links were checked against the fixed navigation bar. A regression check covers font timing and encoded/malformed/missing fragment IDs.

Inventory: **15 lessons, 97 numbered worked examples and 90 numbered practice questions**, plus the index and Quick Reference. Extra unnumbered checks and follow-up questions are not included in those counts.

This review validates the current local preview. It does not constitute a deployment, official exam endorsement or a classroom usability study.
