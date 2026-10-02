# A2 Mechanics content review

Reviewed on 2 October 2026, on branch mechanics.

## Sources and scope

- Supplied textbook: *AQA A2 Maths: Pure and Mechanics*, Chapters 10–15, printed pp. 148–253. Key definitions, notation, modelling assumptions and methods were checked against the relevant textbook pages.
- [OxfordAQA Mathematics specification, version 5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf), Section 3.5, printed pp. 28–30.
- All nine lessons, the topic index and Quick Reference; 67 numbered worked examples and 71 numbered practice questions. The four retained reference questions were also checked.
- Website explanations use Simple English and textbook mathematical terms. New examples and practice questions are identified as self-written and have no official marks.

## Coverage

| Lesson | Textbook section | Syllabus | Checked content |
|---|---|---|---|
| Mathematical Modelling | 10.1 | M2.1 | Assumptions, separate force diagrams, strings, pulleys, lift and vehicle models |
| Vectors and Kinematics | 10.2 | M2.2 | Two- and three-dimensional motion, component calculus, initial conditions, paths, speed and distance |
| Forces, Equilibrium and Friction | 11.1–11.3 | M2.3 | Resultants, force balance, reactions, limiting equilibrium and both possible slipping directions |
| Moments and Rigid Objects in Equilibrium | 11.4 | M2.3 | Perpendicular distance, beams, tipping, ladders, hinges and smooth pegs |
| Centres of Mass | 12.1–12.4 | M2.3 | Particles, uniform and composite bodies, removed material, suspension and support reactions |
| Newton's Laws of Motion | 13.1–13.2 | M2.4 | Separate body equations, planes, friction reversal, connected particles and variable forces |
| Projectiles | 13.3 | M2.5 | Component equations, time, greatest height, range, trajectories, targets and valid flight intervals |
| Work and Energy | 14.1–14.3 | M2.6 | Signed work, power, vehicle motion, kinetic and potential energy, resistance and smooth-wire constraints |
| Uniform Circular Motion | 15.1–15.3 | M2.7 | Angular speed, radial acceleration, force resolution, friction/contact limits, conical pendulums and orbits |

No missing core M2.1–M2.7 topic was identified. Projectile results are derived from component equations. Numerical checks supplement the manual review; they do not replace checking the model and its conditions.

## Content repairs

- Restored 11 missing arrowheads in three force diagrams: angled pull, inclined-plane friction and two-string equilibrium. Separate forces now have separate SVG paths.
- Corrected the reference statement about gravity: acceleration is g downwards only when weight is the only force. A body near the Earth's surface may have other forces.
- Made moment formulae explicitly describe magnitudes and perpendicular distances. Added the relevant conditions to the work, power and circular-motion summaries.
- Replaced unnecessary terminology with textbook wording, including greatest height, potential energy (PE), centre of mass and reaction. Standardised SI unit notation.
- Clarified that a body's weight acts through its centre of mass in a uniform gravitational field.
- Matched the textbook's rounding guidance: three significant figures for numerical results and one decimal place for angles, unless the question says otherwise. Corrected the hinge-force angle to 9.4 degrees.
- Clarified the energy threshold in Work and Energy Q8. At the limiting initial speed, the bead approaches the highest point with speed tending to zero; a greater speed is needed to pass over it.
- Added the missing rough-prism statics solution and independent force/moment checks. Simplified the retained cliff-projectile and suspended-lamina solutions. All four reference questions now have a hint and a solution.
- Increased label sizes in the kinematics-path diagram and replaced the old conical-pendulum reference image with the existing lesson diagram.

## Index and navigation

- Replaced repeated lesson tables and multiple links per lesson with three learning groups and one short description per lesson. The approved Pure index supplied the layout reference.
- Kept Quick Reference accessible near the top. Moved textbook and syllabus mapping into a native disclosure, closed by default.
- Preserved previous lesson and syllabus bookmark IDs. Added fixed-header scroll spacing for bookmark spans, using the existing heading offset.
- Checked the index-to-lesson route, hint/solution disclosures, the syllabus mapping disclosure, the mobile contents menu and reference-fragment navigation.
- Confirmed the old statics bookmark appears below the fixed header at 320 pixels: target top approximately 80 pixels, header bottom approximately 49 pixels.

## Verification

- Jekyll build succeeded. All eight Mechanics check scripts passed, including independent force balances, moments about different points, calculus, geometry, energy and valid boundary cases.
- Formula-preservation checks now ignore Windows/Unix line-ending differences, avoiding false failures after a Windows checkout or edit.
- Internal links, local images, unique IDs, old bookmarks, English content and lesson breadcrumbs were checked across all eleven Mechanics pages.
- All nine lessons were opened at 320 and 1366 pixel widths. All 142 lesson hint/solution disclosures were opened at 320 pixels, along with all eight reference disclosures. The index was also checked at 390 pixels.
- No MathJax errors, page-width overflow or uncontained inline formula overflow were found in the narrow-screen checks. Wide tables and display formulae keep local horizontal scrolling.
- All 27 lesson SVG diagrams were inspected. The repaired force diagrams and enlarged kinematics diagram were visually checked after editing. Reference images loaded successfully.
- The local network preview returned HTTP 200 with the updated index.

The retained reference questions' original paper provenance has not been confirmed; the page states this. This review checks the local site, not a deployment or a classroom usability study.
