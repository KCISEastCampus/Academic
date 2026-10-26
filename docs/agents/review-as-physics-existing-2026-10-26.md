# Independent review of the six existing AS Physics lesson pairs

Date: 2026-10-26. Reviewer: independent Codex review for the full AS Physics upgrade. Review standard: [AGENTS.md](../../AGENTS.md) and [course-content-standard.md, section 7](course-content-standard.md#7-制作与验收流程), with its sections 1–6 used to judge learning evidence.

## Decision and checked boundary

**Do not yet certify these six pairs as complete coverage of 3.1.1–3.1.3 and 3.2.1–3.2.6 under the course standard.** There are identifiable teaching/task gaps in measurement and graphical motion, and missing independent qualitative friction/lift tasks. No core numerical or scientific error was found in the checked calculations. Newton’s laws and momentum retain a sound content model, targeted retries and a real, locatable delayed-review task design.

This review read both languages in full for:

- [Measurements and Uncertainties](../../alevel/as-physics/measurements-and-uncertainties.md) and its [Chinese page](../../zh/alevel/as-physics/measurements-and-uncertainties.md).
- [Vectors and Moments](../../alevel/as-physics/vectors-and-moments.md) and its [Chinese page](../../zh/alevel/as-physics/vectors-and-moments.md).
- [Straight-line Motion](../../alevel/as-physics/straight-line-motion.md) and its [Chinese page](../../zh/alevel/as-physics/straight-line-motion.md).
- [Projectile Motion](../../alevel/as-physics/projectile-motion.md) and its [Chinese page](../../zh/alevel/as-physics/projectile-motion.md).
- [Newton’s Laws](../../alevel/as-physics/newtons-laws.md) and its [Chinese page](../../zh/alevel/as-physics/newtons-laws.md).
- [Momentum and Impulse](../../alevel/as-physics/momentum-and-impulse.md) and its [Chinese page](../../zh/alevel/as-physics/momentum-and-impulse.md).

The review also inspected the nine referenced SVGs, relevant shared-layout/CSS source, existing generated HTML checks, and the previous dynamics implementation record. Course pages and shared assets were read only. The parent is authoring remaining AS units and navigation; those new units are **outside this review**, and planned tasks are not counted as completed evidence here.

This is an independent content/design review with numerical reconstruction and some automated HTML checks. It is not a student trial, practical performance assessment, fresh browser reading review, or certification of the full AS course.

## Official scope identity

On 2026-10-26, the [current 9630 qualification page](https://www.oxfordaqa.com/qualification/international-as-and-a-level-physics-9630/) linked a [specification whose body says Version 4.4](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf). Relevant printed pages: 11–13.

A second [official PDF whose body says Version 5.1](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-physics-specification.pdf) remains accessible; relevant printed pages: 12–14. I compared the requested subject-content entries in both bodies: they agree for this review. Upload-path dates are not version evidence, and this review does not announce a qualification migration.

The following is a coverage audit of those shared entries, not an audit of every AS topic. In particular, work/energy, materials, particles, electricity and waves require the parent’s separate final checks. Dimensional analysis, candela recall, trigonometric/logarithmic uncertainty propagation, and quantitative drag laws are not extra requirements imposed by this review.

## Coverage: explanation and independent evidence are different

Locations below are stable source IDs in both languages. A task counts as independent only when attempted with its hint and solution closed.

| Entry | Explanation actually present | Student output actually present | Remaining issue |
| --- | --- | --- | --- |
| 3.1.1 | measurements: units-and-estimates gives the six specified base units, all ten specified prefixes, squared-unit conversion and J/kWh conversion. | practice-density uses g/kg and mm/m; later lessons use ms/s and derived force/momentum units. | No J/eV teaching or task in these six pages. Derived units are mostly named rather than connected to defining quantities. There is no independent energy-unit conversion. Allocate these explicitly to an actual energy/particle task or add the small repair below. |
| 3.1.2 | measurement-quality, zero-correction, combining-uncertainties and graph-records distinguish terms, calibration, bounds, combinations and significant figures. | first-judgement, difference-and-correlation, gradient-and-intercept, practice-density, practice-timing and retry-shared-offset provide relevant output. Momentum adds evidence-check and retry-evidence. | The only fitted-line exercise already has error bars and exactly collinear centres. No worked/independent example handles an unbarred scattered graph; students also never construct error bars from their own processed record. See R1 and R3. |
| 3.1.3 | units-and-estimates explains scale checks; practice-estimate connects volume and air density. | Classroom mass is approximately 144 kg, reported to order 100 kg with a precision explanation. | Derived estimation has evidence. Choosing plausible starting estimates without all dimensions supplied is weakly sampled; a short later estimation prompt would strengthen this, rather than treating the one supplied-data task as broad estimation proficiency. |
| 3.2.1 | vectors: components and point-equilibrium explain scalars/vectors, components, vector addition, two/three-force balance and constant-velocity equilibrium. | exam-components, complete-equilibrium and practice-cords require components, direction, a closing vector triangle and a changed angle reference. Newton steady-check revisits constant velocity. | Substantial coverage. Explicitly identify weight as a vector force, distinct from scalar mass. No separate scale-drawing calculation is necessary when calculation already supplies the required vector-addition route. |
| 3.2.2 | moments, couples and centre-of-mass explain perpendicular distance, a couple, moment balance and uniform-body weight placement. | practice-beam genuinely tests weight position, reactions, loss of contact and a limiting load position. practice-couple diagnoses turning senses; retry-moment varies the line of action. | Couple arithmetic exactly repeats the preceding worked 12 N/0.30 m example; the oblique-force moment is only worked, then reused in the retry. Add one fresh oblique/couple comparison, and a recovery task for failed vector resolution/contact checks. See R4. |
| 3.2.3, including RP1 | graphs-and-signs and constant-acceleration connect averages, tangents, areas and equations; vertical-motion distinguishes a turning point and contact; freefall-practical gives a valid graph method. | graph-transfer, suvat-choice, vertical-return, exam-average, freefall-analysis, practice-sensor and retry-turning test staged motion, reversals, averages and timing-bias direction. | No numerical tangent reading from a curved displacement/velocity graph, no curved velocity-area estimate, and no student bounce-graph task. RP1 supplies processed means and a pre-fitted ideal line, without raw repeated times or uncertainty processing. See R2–R3. |
| 3.2.4 | projectile-model and representations connect components, one clock and the target event; resistive-forces correctly covers friction, lift, drag, terminal speed and vehicle limits. | horizontal-transfer, component-graphs, exam-target, practice-ledge and retry-two-angles vary representation and landing conditions. force-model-check tests drag, terminal motion and streamlining. | Friction direction and lift direction/model failure have explanations but no corresponding independent output or retry. The force-model task largely asks students to repeat adjacent explanations. See R5. |
| 3.2.5 | force-model, three-laws, lift-example and connected-system correctly distinguish object boundaries, motion/acceleration and internal/external forces for constant mass. | steady-check, force-transfer, interaction-check and connected-check cover all three laws; retry-forces and retry-connected target earlier mistakes. | No remaining core scope/task blocker found for this entry. Keep its later-review link and the repaired retry coverage. No need to replace these tasks merely to standardise appearance. |
| 3.2.6 | system, collision-types, impulse, bounce-example and evidence distinguish signed momentum, external impulse, kinetic energy, variable forces, contact force and resultant. | collision-check includes both elastic and inelastic outcomes; separation-check tests release; graph-check includes negative force and ms; evidence-check/retry-evidence test competing explanations; retry-momentum and later-review supply recovery/recall. | No remaining core scope/task blocker found for this entry. The local kinetic-energy definition is a sufficient bridge for collision classification; the full energy lesson can reinforce it without pretending energy is unavailable. |

The existing standard allows goals to be supported across pages. Thus J/eV or delayed measurement tasks may live in later units, but the final coverage record must point to their real anchors and checked tasks. A future page title or a row in an implementation plan is insufficient.

## Required small repairs before a full-completion claim

### R1 — Measurement graph uncertainty without drawn bars is not taught through a task

Location: measurements EN lines 154–207, especially 172; ZH lines 156–209. The sentence about graphs without bars states a requirement but gives neither a reconstructed example nor an independent attempt. The perfectly straight calibration record does not make students decide how observed scatter relates to an uncertainty estimate.

Small repair: add one short supported example using scattered constructed records and explain the adopted bound/scatter criterion. Then pose a changed record with no error bars drawn and require a best line, justified acceptable alternatives, and both slope/intercept uncertainty. Retain the distinction between an assumed bound and a statistical interval.

Suggested independent English task:

> Constructed records give F/N = 0, 1, 2, 3, 4 and U/V = 0.55, 1.45, 2.60, 3.40, 4.55. No error bars have been drawn. Each output has a stated independent bound of ±0.20 V; force uncertainty is negligible. Plot the points and their error bars, choose a central straight-line fit, and find the extreme gradients and intercepts compatible with every interval. Explain why connecting two extreme endpoints is insufficient without checking the middle records. A second graph has only scatter and no stated bounds: what assumption or additional evidence would you need before claiming numerical uncertainty limits?

Reviewer check: for the stated-bound part, m_min = 0.900 V/N, m_max = 1.08333… V/N; b_min = 0.350 V and b_max = 0.750 V. Feasible extreme lines are U = 0.9F + 0.75 and U = (13/12)F + 0.35. Both satisfy all five intervals and also attain the intercept extrema. The maximum-slope line is limited by the F = 0 and F = 3 N intervals; the F = 4 N endpoint does not set that maximum. These are marginal bounds, not an independent rectangle of allowed m/b pairs. A chosen central fit need not have symmetric excursions; use the larger excursion if reporting a conservative symmetric uncertainty.

This one task handles an initially unbarred graph and error-bar construction. It does not by itself replace the supported scatter-only example. For genuinely scatter-only data, do not silently invent exact measurement bounds or assert a unique official numerical answer.

### R2 — Graphical instantaneous/non-uniform motion lacks student evidence

Location: straight-line-motion EN lines 47–63 and 139–147; ZH lines 49–65 and 141–149. All current numerical velocity graphs are piecewise straight, and none asks for a numerical displacement-graph tangent. The written bounce warning is sound but untested.

Small repair: add a short graph-reading task and a finite-contact bounce task, keeping supplied graphs/data separate from answers.

Suggested English prompts:

> A curved displacement–time graph contains (0 s, 0 m), (1 s, 1 m), (2 s, 4 m) and (3 s, 9 m). The drawn tangent at 2 s passes through (1 s, 0 m) and (3 s, 8 m). Find the average velocity over 0–3 s and the instantaneous velocity at 2 s. Explain why the two measurements use different lines. In a separate velocity–time record the velocities at t = 0, 1, 2, 3 s are 0, 1, 4, 9 m/s and the joins are curved. Estimate its displacement using 1 s trapezia, and explain the limitation of the estimate.

Reviewer check: average velocity 3.0 m/s; tangent velocity 4.0 m/s; trapezium estimate 9.5 m for the separate velocity record. Those samples alone do not determine the exact area. No calculus is needed.

> A ball reaches a floor at −4.0 m/s and leaves at +3.0 m/s after 0.020 s of contact. Upwards is positive. After contact take g = 10 m/s² and neglect air resistance. Sketch a velocity–time graph covering contact and the next 0.30 s. Find the average acceleration during contact, distinguish it from the subsequent acceleration, and show when the next highest point occurs.

Reviewer check: contact average +350 m/s²; post-contact −10 m/s²; highest point 0.30 s after separation. Contact acceleration need not be constant, so its graph segment should be identified as schematic unless further data are supplied.

### R3 — RP1 needs a small raw-data and uncertainty layer

Location: straight-line-motion EN lines 213–261; ZH lines 215–263. The method, reference-point geometry, timing-delay bias and safety reasoning are valid. The present student only reads already processed means and an already fitted ideal line. This is preparation/data interpretation, not evidence of the whole experimental learning cycle.

Small repair: supply a few raw repeats, require processing and graph/model choices before showing a fit, and connect errors to a new retry.

Suggested constructed raw records:

| Fall distance / m, each ±0.001 m | Repeated times / s |
| --- | --- |
| 0.196 | 0.198, 0.200, 0.202 |
| 0.441 | 0.298, 0.300, 0.302 |
| 0.784 | 0.398, 0.400, 0.402 |

Ask students to choose/justify a timing-spread estimate, state omitted calibration contributions, calculate mean times and squared-time uncertainties, plot their own graph, estimate g with uncertainty and compare a free intercept against a forced-origin fit. Add a retry with a different suspected bias, such as an overestimated fall distance, asking for direction and an independent check.

Reviewer check: mean times 0.200, 0.300, 0.400 s reproduce g approximately 9.8 m/s². If the task explicitly adopts half-range ±0.002 s as the timing contribution, the first squared-time uncertainty is approximately ±0.0008 s². For that single first-height calculation, Δg/g ≈ 0.001/0.196 + 2(0.002/0.200), giving Δg ≈ 0.246 m/s². This is not the uncertainty of the eventual whole-graph fit and not a universal uncertainty rule for real apparatus. The records remain constructed.

### R4 — Improve independent moment transfer and targeted recovery

Location: vectors EN lines 151–167, 273–299 and 303–333; ZH lines 153–169, 275–301 and 305–335.

The beam task is a strong piece of model checking. Keep it. The couple task still asks useful turning-sense diagnosis, but the numerical answer 3.6 N m is already displayed for exactly those forces and separation. It is weak evidence of fresh quantitative transfer. The only designated retry addresses moment arms, not wrong vector quadrants, cord components or loss of contact.

Suggested short independent comparison:

> A force of 18 N acts at the end of a 0.50 m rod at 30° to the rod. Separately, two equal opposite parallel forces of 15 N act on a plate along lines 0.30 m apart. Compare their moment magnitudes. Which arrangement has zero resultant force? Explain why equal moments do not establish the same translational effect.

Reviewer check: each moment magnitude is 4.5 N m; the couple has zero resultant. A single applied force is not itself a zero-resultant force system; support forces would need specifying before analysing the whole rod.

For recovery, a three-part new check can ask for a vector in a different quadrant, one cord angle measured from the other axis, and whether a calculated negative ordinary-support reaction is permissible. Include numerical values and checkable answers in the implemented retry, rather than just saying “review vectors” or “check contact”.

### R5 — Elicit friction and lift reasoning, then retry it

Location: projectile EN lines 211–243 and 283–315; ZH lines 213–245 and 285–317. The existing explanations are scientifically careful: drag uses relative velocity, lift need not be vertical, and driving friction may point forwards. However, force-model-check tests neither friction nor lift, and retry-two-angles returns only to no-drag kinematics.

Suggested English task:

> A car moves right at steady speed on a level road in still air. Its powered wheels drive it forwards. Show the directions of the road’s friction force on those driven wheels and of air drag on the car; name the interaction partner for each. A wing moves down and right through still air. Sketch a possible lift direction perpendicular to the relative flow with an upward component. Explain which assumptions of the weight-only projectile model would fail if this lift were appreciable.

Reviewer check: driving road friction is forwards, drag backwards; the road and air are the respective interacting bodies. For a descending rightward velocity, the specified lift is up and right, not necessarily vertical. Appreciable lift changes the resultant and hence the acceleration components; neither a_x = 0 nor a_y = −g is generally retained.

Retry by changing to braking while still moving right and to a level-flight wing, requiring new force arrows and a reason. Do not introduce a friction coefficient, static/dynamic syllabus requirement or lift formula merely to fill the gap.

### R6 — Make the remaining units/estimation evidence explicit

Location: measurements units-and-estimates and practice-estimate; vectors components.

Small teaching additions:

- “Weight is a gravitational force and is a vector; mass is a scalar.”
- “A derived unit follows the defining relation for the quantity: for example 1 N = 1 kg m s⁻². The later energy lesson connects J and W to their defining quantities.”
- Where eV is introduced: “An electronvolt is a unit of energy: 1 eV = 1.602 × 10⁻¹⁹ J.” Put its physical meaning with the energy/particle explanation.

Suggested short independent units task, either here or in the actual later lesson:

> Convert 2.5 keV to joules, 0.20 kWh to joules, and 3.0 mm² to m². For each conversion explain where a power or prefix acts. Use 1 eV = 1.602 × 10⁻¹⁹ J.

Reviewer check: 4.005 × 10⁻¹⁶ J (4.0 × 10⁻¹⁶ J to two significant figures), 7.2 × 10⁵ J and 3.0 × 10⁻⁶ m². Extend prefix use with a suitably varied later task; do not require a separate exercise for every table cell.

For estimation, reuse the classroom question later with dimensions chosen and justified by the learner, then require a nearest-order derived mass. Judge plausibility, stated assumptions and consistent powers, not agreement with a single invented room size.

## Prerequisites, recovery and delayed review

### What can be retained

The main route has a defensible dependency order: measurement judgement → force components/moments → signed motion → projectile components → Newtonian object/system models → momentum/impulse. New concepts usually receive direct explanation before independent work. The opening diagnostic questions mostly use the declared/linked IG knowledge rather than demand discovery of a new equation.

Newton and momentum have usable recovery: a wrong resultant returns to the force diagram; wrong internal/external forces lead to a different connected system; wrong uncertainty conclusions lead to a non-overlapping record with competing bias hypotheses. Preserve these repairs from the previous review.

Momentum later-review is a genuine designed delayed task: it explicitly says next study session, mixes force, stopping motion and impulse without naming a method, requires an English explanation and third-law partner, and links mistakes back to retries. Its answers are independently checked below. This is evidence that a delayed task exists, not that a learner has completed or retained it.

### Small prerequisite fixes

- Measurements “Before you start” lists ratios, powers, means and gradients but not density/volume. Before practice-density, define density as mass per volume and recall the circular-cylinder volume model, or link a real prerequisite. Do not first reveal the meaning of density only inside its hint/answer.
- Projectile-target calculations require a general quadratic solution; straight-line vertical-return happens to factorise. Declare/recover rearranging and solving a quadratic, with a specific existing maths link or a small optional algebra reminder. Do not silently add calculus as a prerequisite: the English component-graphs hint already offers applying the velocity equations as an alternative to differentiating.
- Momentum already supplies the kinetic-energy formula and scalar/sign explanation before asking for elastic classification. Keep that local bridge; a full energy lesson need not precede every momentum task.

### Missing retrieval and recovery

The first four pages have immediate help and some retries, but not a matched new retry for every major difficulty. Examples: measurement gradient/intercept uncertainty and power propagation; vector quadrant/contact constraints; RP1 bias/uncertainty; friction/lift. A single generic retry at a page’s end does not demonstrate recovery for all its targets.

The current delayed task retrieves straight-line motion, Newton and momentum; it does not test measurement graph bounds, moments or changed-height projectile motion. Put these into the parent’s actual unit review and link back from the relevant earlier pages. A small mixed set is sufficient; no account, timer or new interface is needed. Suggested unlabelled later prompts:

1. A new calibration record requiring a justified uncertainty decision and an error check.
2. A supported beam with an off-centre load and a contact constraint.
3. A launch from a raised platform with a different landing plane and a force-model question.

Give the implemented prompts new data/conditions, closed hints/answers, and specific recovery links. Reusing the same solved figures immediately after reading them is not delayed transfer. Do not count the parent’s planned unit-review page as evidence until its actual tasks are inspected.

## Independent numerical and physical reconstruction

At least one representative problem from every page was solved independently. The calculations most vulnerable to sign, unit, rounding, interval or physical-model mistakes were also reconstructed. The following records the actual checks; it is not a learning-outcome measurement.

| Page | Representative reconstruction | Additional checked calculations/conditions |
| --- | --- | --- |
| Measurements | Wire density: 0.00850/[π(0.00060)²(1.00)] = 7515.65 kg/m³. Fractional uncertainty = 0.0492157, giving 369.89 kg/m³; (7.5 ± 0.4) × 10³ kg/m³ is suitable. Radius contributes 3.33%. | Zero correction 2.34 ± 0.02 mm, 0.855%; cylinder 282.743 mm³ with 3.9167% and 11.074 mm³; position difference 6.2 ± 0.2 cm with shared offset cancelling; calibration slopes 0.90–1.10 V/N and intercepts 0.30–0.70 V, every interval checked; period bounds 0.2 s versus 0.01 s; classroom approximately 144 kg/order 100 kg; temperature rise 10.0°C. |
| Vectors/moments | Beam: R_B = [60(2.0)+120(2.5)]/3 = 140 N and R_A = 40 N. At x = 3.8 m, R_B = 192 N and R_A = −12 N, so the stated contact model fails. The limit R_A = 0 gives x = 3.5 m. | 10 N at 30° gives 8.66/5.00 N; 15 m/s at 38° gives 11.820/9.2349 m/s and complementary 52°; 40 N joint gives 80/69.3 N; 6/8 N equilibrant is 10 N, 53.1° south of west; oblique moment 4.0 N m; couple 3.6 N m clockwise; symmetric support (360+4.8×9.81)/2 = 203.544 N; 60 N/40° cords give 78.324/50.346 N; retry moments 8.0, 4.0, 0 N m. |
| Straight-line motion | Staged trolley: velocities 8 and −2 m/s; reversal at 6 s. Signed areas 10 + 16 − 1 give +25 m displacement; magnitudes give 27 m distance. | Constant-acceleration example v = +8 m/s, t = 2 s; train 25 s and 460 m; vertical return h = 11.025 m, crossings 1/2 s, velocities ±4.9 m/s, total return distance 22.05 m; adapted graph area 0.027 m and average 2.25 m/s, accelerations +750/0/−1500 m/s²; RP1 slope 4.90 m/s², g = 9.80 m/s²; delayed timer gives 12.0988 m/s² and an upward bias; sensor task u = +3 and a = +2; retry turns at 3 s with −5 m displacement, 13 m distance and final speed 4 m/s. |
| Projectiles | Football using unrounded components: u_x = 11.820161, u_y = 9.234922 m/s. Maximum rise 4.346778 m; apex time 0.941378 s. At y = 2.56 m, roots 0.337825/1.544932 s have vertical velocities ±5.92086 m/s. Descending target distance 18.2613 m. | The printed 4.3467… truncation is consistent. Rounded-scheme 9.2 m/s explains approximately 4.31 m/0.937 s; no erroneous “correction” is needed. Horizontal launches give 1.00 s/6.0 m and 2.00 s/8.00 m/s/−19.62 m/s. Constructed x/y records match x = 8t, y = 6t−5t². Raised-ledge landing: t = 1.766190 s, x = 14.1295 m, v_y = −11.6619 m/s; reject the negative root. The 30°/60° launches both range 34.641 m, with times 2/3.464 s and heights 5/15 m. |
| Newton | Connected task: P−1 = 5(0.80), hence P = 5 N; T−1 = 3(0.80), hence T = 3.4 N. A alone checks 5−3.4 = 2(0.80). Retry with the other trolley pulled gives a = 2 m/s² left and T = 3 N. | Lift example acceleration +2 m/s² upwards and N = 720 N; measured 400 N for 50 kg gives −2 m/s² and upward motion slowing; steady trolley drive 6 N then acceleration −3 m/s²; mutual pushes give −3/+2 m/s² on different students; descending package N = 34 N then 40 N at constant velocity. Contact and force-receiver interpretations are consistent. |
| Momentum | Sign-changing graph: J = ½(0.040)(12) − ½(0.040)(6) = +0.12 N s. Initial momentum −0.040 becomes +0.080 kg m/s, so v = +0.80 m/s; average resultant +1.5 N. | Sticking v = +0.60 m/s; kinetic energy 2.10 → 0.18 J, loss 1.92 J. Non-sticking outcome v_B = +1.2 m/s and final energy 0.76 J; proposed elastic velocities conserve both 1.0 kg m/s and 1.0 J. Spring release v = +1.0 m/s and energy increase 0.90 J. Bounce average resultant 40 N, floor 42 N; impulses +1.68−0.08 = 1.60 N s. Evidence intervals overlap on [−0.87,−0.86]; retry intervals do not overlap; discrepancy and positive-baseline signs agree. Retry trolley v = −1 m/s, endpoint kinetic energies both 0.10 J; separate floor force 11 N. Delayed stop: 3 s/4.5 m, both Δp = −6 kg m/s, bumper average −60 N. |

Scientific checks also covered the conditions behind the numbers: no force of motion, no disappearance of gravity at an apex, a support cannot pull down, a couple is not a third-law pair, drag uses relative velocity, component motions share time, conservation needs a boundary/direction/external-impulse condition, and equal endpoint kinetic energies for one trolley alone do not identify an isolated elastic two-body collision.

No core error was found in these checked statements. The important remaining problems are evidence gaps and stale continuation text, not a reason to discard valid physics.

## Bilingual and format findings

### Bilingual equivalence

All six pairs have identical marked English task bodies, supplied task records, mathematical-expression sequences and h2/h3 IDs under a separate comparison. Manual reading found the same physical objects, directions, data, conditions, requested outputs and numerical conclusions. Chinese explanations retain the English questions rather than replacing their scientific requirements. No material bilingual scientific mismatch was found.

The repeated English instruction to explain in English is also present in the Chinese tasks. These tasks provide a route to English output; their presence does not establish that students can yet produce it independently.

Accessibility/localisation repair: the Chinese straight-line page retains full English alt text for the kinematics and freefall figures (lines 185, 239), and the Chinese projectile page does so for the path and component-solution figures (119, 143). Translate the explanatory alt text into Chinese while retaining symbols, units and necessary English terms. Keep the full accessible data; do not shorten it to conceal answers. Solution-figure descriptions correctly remain within the closed answer, and the passenger diagram belongs to a worked example, so its displayed values are appropriate.

### Format risks, distinguished from confirmed breakage

The first four pairs have study_page but do not enable reading_layout; Newton/momentum do. The shared subjects layout loads reading.css only when reading_layout is enabled. In the older pages, worked examples generally begin with a bold label but lack a complete worked-example boundary, and task/feedback regions have less explicit grouping than the later two lessons.

This is a source-confirmed presentation difference and a continuous-reading risk under standard section 6, **not proof that the old pages overflow or fail keyboard use**. Prefer wrapping whole existing examples/tasks with the shared components and evaluating the current reading layout, rather than changing global CSS or forcing every page into identical headings.

Particularly inspect the measurement rule table/long percentage expressions, the full beam solution, the RP1 record and graph, and the football root calculation after opening feedback at phone width. Preserve h2/h3 IDs and native details controls. The existing separate closed hints and solutions are a positive feature.

Existing HTML checks found no initially open answers, unprocessed display-math delimiters or duplicate content anchors for the checked lessons. That static result does not establish actual MathJax rendering, screen-reader usability, keyboard behaviour, or comfortable stable-load reading on desktop/mobile.

## Continuation text to carry forward into the full upgrade

The parent should repair these exact bilingual tails alongside navigation; changing the index alone does not fix their claims:

| Source location | Current stale statement | Small replacement direction |
| --- | --- | --- |
| straight-line-motion EN 333 / ZH 335 | Subsequent dynamics still needs learning pages. | “Continue with projectile motion, then Newton’s laws and momentum.” / “接着学习抛体运动，再进入牛顿定律与动量。” |
| projectile-motion EN 323 / ZH 325 | Energy, materials and later topics still need subsequent learning pages. | State the next actual lesson, followed by a link to the current course route. Remove the development-status claim once those pages are available. |
| momentum-and-impulse EN 227 / ZH 229 | Links only to existing energy reference notes and says energy/materials/later learning pages are missing. | When the parent’s energy lesson exists, link it as the next lesson: “Next, use work and energy to account for the changes identified here.” / “下一步用功与能量解释这里的能量变化。” |
| measurements EN 341 / ZH 343; momentum old energy reference anchor | Links to old index reference anchors. | Preserve old anchors for compatibility, while adding the real learning/review route. In particular, retain access to useful reference notes without presenting them as the whole course. |

These replacements are conditional on the parent’s actual delivered pages. At the reviewed snapshot the six-page completion disclaimer describes this subset truthfully; it must not survive unchanged as a claim that energy is unavailable in the final full-course route. Conversely, six good pages alone never certify the full AS course.

## Checks performed and remaining acceptance work

Performed during this review:

- Full source reading of 12 lesson files; independent representative solutions and the suspicious sign/unit/rounding/model calculations recorded above.
- Official 9630 qualification/specification identity and requested-scope comparison, including the Version 4.4/5.1 body distinction.
- Separate exact bilingual task/math/anchor comparison across all six pairs; source/asset inspection for feedback visibility and figure descriptions.
- Existing read-only check scripts: scripts/test-physics-as-dynamics.js passed; scripts/test-physics-learning-pilots.js passed. The latter also touches existing IG pilots and legacy anchors; its pass is not an independent audit of those additional courses.
- Checks against the existing _site output: relevant answers start closed, display equations are processed as HTML rather than raw display delimiters, expected reading-layout differences remain, and checked source modification times predate generated files. This is reuse of existing output, not a new build or proof of exact final-output identity.

Not performed: fresh Jekyll build, new desktop/mobile browser review, new keyboard/screen-reader/deep-theme review, physical phone or apparatus operation, re-reading the June 2024 paper/mark scheme or specimen originals, student first attempts, retries or delayed testing. The course pages’ prior claims that those marking materials were consulted were inspected, not independently renewed by this review. Numerical/English-pair checks here do not certify word-for-word fidelity to an original official question.

Acceptance order for the parent:

1. Repair R1–R3 and R5, and map J/eV/derived-unit evidence to real inspected tasks before claiming complete requested-scope learning coverage.
2. Add the small R4/R6 transfer and prerequisite fixes; provide recovery and delayed tasks for the untested earlier goals.
3. Replace stale continuation statements in both languages after the new destinations exist.
4. Recheck changed questions, feedback, bilingual alignment, official mapping, build and actual reading on the final parent version. Keep content status, technical status and student-trial status separate.

**Student testing: none conducted or inferred.** Correct reviewer solutions and passing scripts cannot be reported as evidence that students have learned or retained the material.

## Snapshot fingerprints

SHA-256 of the read-only lesson sources at review time. The report is pinned to these file contents rather than a claim that the parent’s working tree is clean. Later edits invalidate only the affected evidence and need rechecking.

| Lesson | English SHA-256 | Chinese SHA-256 |
| --- | --- | --- |
| measurements-and-uncertainties | 1025286D57224552812A41D17D7824EAFCC5AE323F35219F19D33C09E6A48E05 | 169E8D3F043ADC5BE64DD94DD60861B0F046F8A366ED1D99DB8AAC1039F7EF91 |
| vectors-and-moments | 9FF138727BA54DFF0A9A9B1A719A87A66573085FB1187441CCE10AB71FB58309 | 512DE0E1879A075BFA61FA9FED267B621DCA6B3F40FFB90EA1FB90AD0C0EF0A4 |
| straight-line-motion | F404DC4E70282090AB05B849E83F62E21D09C0A35D0EBA4A27BD77A118DDA854 | 211044EB8E599A9E9D517EBFBADD9C5557A8024E27EA941DD2EBA2937C36AB09 |
| projectile-motion | C17A1296E1720BCD215F433A493780F11290336E3B47DD5B538D0078BB4F9257 | 23FABD00490D0615031C851E7DAC48317829D7BE59EC7F6F6C8AD997E4A61B5D |
| newtons-laws | 0B1E6AA1DF7688E9040BFEF3A194D8A84247E49753384AC327600E574ED1C837 | 43A3A6E65B3060737CB5E3265D08DB1F91311D31604ED540F495E05409BBCA27 |
| momentum-and-impulse | 1475D06E273763C101BE6FE8A5531B7822C2FE8CA4DC0BCFC76F1D4CB5AA8247 | 7CC882D9D819AA31ED4BBD911304B92169641D3A2544BF4BD6515B3C1A0E874B |
