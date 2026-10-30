---
title: Nuclear Radius
layout: subjects
mathjax: true
grade: a2
subject: a2-physics
permalink: /alevel/a2-physics/nuclear-radius/
toc_headings: h2, h3, h4
study_page: true
---

[A2 Physics](/alevel/a2-physics/) · PH04 · 3.12.1

How can scattering reveal a nucleus that we cannot see directly? Separate a turning distance from a measured size, then connect radius data to a model of nuclear matter.

**Before starting:** recall [Coulomb potential energy](/alevel/a2-physics/electric-fields/), energy conservation, nuclide notation and AS diffraction/de Broglie wavelength. You will compare models, select graph axes and explain what the evidence cannot establish.

## Checkpoint: what does a turning point mean? {#checkpoint-turning-point}

A positively charged particle passes a heavy positive nucleus and bends away. At its closest point, must its total speed be zero? Use its direction of motion to explain your prediction.

<details markdown="1">
<summary>Check the model</summary>

No. On an off-centre path the radial velocity is momentarily zero, but there can still be tangential motion. Only the head-on turning model below makes the particle momentarily stationary. Revisit this distinction in Question 2.

</details>

## Closest approach: state the collision model {#closest-approach}

A nucleus has charge $+Ze$ and an alpha particle charge $+2e$. Treat the heavy target as fixed, the initial separation as very large and the interaction as electrostatic outside the nucleus. Take potential energy as zero at infinity:

$$K_\infty=K(r)+\frac{k(2e)(Ze)}{r},\qquad k=\frac{1}{4\pi\varepsilon_0}.$$

<img src="/assets/img/physics-nuclear-approach.svg" alt="Explanation diagram, not to scale: a head-on alpha path turns back before a heavy fixed nucleus; an off-centre path curves past it. The marked distance is centre-to-centre separation, not a radius measurement." width="520" height="340" data-lazy-ignore="true">

For **head-on** approach, $K(r_{\min})=0$, so:

$$r_{\min}=\frac{k(2e)(Ze)}{K_\infty}.$$

At fixed target charge, doubling initial kinetic energy halves this turning distance. If scattering is still described by the external Coulomb field, the turning distance sets an **upper bound** on nuclear size: the alpha particle has not reached a surface. It is not a direct radius measurement. This simple bound neglects alpha size, target recoil and nuclear forces. Nuclear radii are typically a few femtometres; 1 fm is one million-billionth of a metre.

$$1\,\mathrm{fm}=10^{-15}\,\mathrm m.$$

### Example 1: calculate and limit the conclusion {#example-1}

*Self-written.*

An alpha particle approaches a fixed gold nucleus head-on from far away with kinetic energy $5.0\,\mathrm{MeV}$. Use $Z=79$, $e=1.60\times10^{-19}\,\mathrm C$, $k=8.99\times10^9\,\mathrm{N\,m^2\,C^{-2}}$ and $1\,\mathrm{MeV}=1.60\times10^{-13}\,\mathrm J$. Estimate the closest separation. Would it prove that the gold nucleus has that radius?

$$K_\infty=8.0\times10^{-13}\,\mathrm J,\qquad r_{\min}=\frac{(8.99\times10^9)(2)(79)(1.60\times10^{-19})^2}{8.0\times10^{-13}}\approx4.5\times10^{-14}\,\mathrm m=45\,\mathrm{fm}.$$

The energy account is appropriate because this is head-on with a fixed heavy target. The separation is much larger than a typical nuclear radius. It is an upper-bound estimate within the stated model, not evidence that a gold radius is 45 fm. A departing alpha particle regains kinetic energy as electrostatic potential energy decreases.

## Electron diffraction: a pattern is size evidence {#electron-diffraction}

Electrons have de Broglie wavelength $\lambda=h/p$. Use a narrow momentum range, a thin target and a detector scanned through scattering angle. Nuclear-scale structure requires wavelength comparable with nuclear dimensions. High-energy electrons are attracted by the positive nucleus, unlike alpha particles. The angular intensity contains a strong forward peak, a minimum and weaker side structure.

<img src="/assets/img/physics-nuclear-diffraction.svg" alt="Teaching schematic of electron intensity against scattering angle: strongest at zero angle, then a nonzero minimum and a weaker side maximum. This is an explanatory pattern, not a measured dataset or a universal zero-intensity rule." width="520" height="340" data-lazy-ignore="true">

This is a qualitative teaching sketch, informed by June 2024 Q15 (key B), not a copied graph or real readings. Do not insist that a measured minimum must reach zero. For a fixed wavelength, a larger nuclear size generally places the corresponding minimum at a smaller angle in the same scattering model. A spread of wavelengths can blur the feature. Quantitative size extraction needs a specified model and angle convention.

Nuclear-scale electrons are usually too energetic for the non-relativistic momentum formula. Use supplied momentum or wavelength; do not calculate their momentum by substituting into the low-speed kinetic-energy formula. No relativity derivation or memorised diffraction-size coefficient is required here.

### Example 2: use a supplied size model {#example-2}

*Self-written. The relation below is supplied for this task, not asserted as a universal nuclear-scattering law.*

Electrons have momentum $3.0\times10^{-19}\,\mathrm{kg\,m\,s^{-1}}$. The first minimum is at $20^\circ$. For this task use $R\sin\theta_{\min}=0.61\lambda$, where the angle is measured from the incoming beam, and $h=6.63\times10^{-34}\,\mathrm{J\,s}$. Find the wavelength and radius estimate.

$$\lambda=\frac{6.63\times10^{-34}}{3.0\times10^{-19}}=2.21\times10^{-15}\,\mathrm m,\qquad R=\frac{0.61(2.21\times10^{-15})}{\sin20^\circ}\approx3.9\,\mathrm{fm}.$$

The result is a model-dependent size estimate. It is not the alpha turning-distance upper bound. Keep radius distinct from diameter; the coefficient and angle must belong to the same model. No electron speed has been inferred using a low-speed approximation.

## Radius data and average nuclear density {#radius-and-density}

An empirical relationship is $R=R_0A^{1/3}$, with $A$ the nucleon number and $R_0$ a fitted length scale. The value used must come from the question or dataset; do not silently replace it with a favourite constant. For a spherical nucleus with mass approximately $A m_u$:

$$V=\frac43\pi R^3=\frac43\pi R_0^3A,\qquad \rho=\frac{A m_u}{(4/3)\pi R_0^3A}=\frac{3m_u}{4\pi R_0^3}.$$

The nucleon number cancels: the model predicts approximately the same **average** density across nuclei. This does not prove that density is uniform at every point inside an individual nucleus. Radius grows with the cube root of nucleon number; volume and mass grow approximately in proportion to it.

### Example 3: transfer a radius scale {#example-3}

*Adapted from OxfordAQA 9630 PH04 January 2024 Q7.2; QP p.17 and MS p.18 read. Ratio reasoning is made explicit; no official marks assigned.*

A helium-4 nucleus has radius $1.68\times10^{-15}\,\mathrm m$. Assuming the same fitted radius law, estimate the radius of gold-197 in fm.

$$\frac{R_{\mathrm{Au}}}{R_{\mathrm{He}}}=\left(\frac{197}{4}\right)^{1/3},\qquad R_{\mathrm{Au}}=1.68\left(\frac{197}{4}\right)^{1/3}\,\mathrm{fm}\approx6.16\,\mathrm{fm}.$$

The shared length scale cancels in the ratio. Using nucleon-number ratio directly as the radius ratio would overestimate size. The supplied helium reference implies a different fitted scale from some illustrative datasets; retain the reference stated in this question.

## Data investigation: choose the graph {#data-radius-records}

*Self-written; constructed radius records for teaching, not experimental measurements. Treat each radius uncertainty as ±0.05 fm for this task only.*

Choose graph axes that can test $R\propto A^{1/3}$ and estimate the length scale. Use a free intercept first, inspect residuals, and assess whether an intercept of zero is consistent with the stated uncertainty. Calculate the predicted average density using $m_u=1.66\times10^{-27}\,\mathrm{kg}$. Would this establish uniform density inside every nucleus?

| Nucleon number A | Radius / fm |
| --- | --- |
| 8 | 2.42 |
| 27 | 3.58 |
| 64 | 4.83 |
| 125 | 5.98 |
| 216 | 7.22 |

<details markdown="1">
<summary>Hint</summary>

Try a power transformation of nucleon number. Convert the fitted length from femtometres to metres before cubing it.

</details>

<details markdown="1">
<summary>Analysis and retry</summary>

Plot $R/\mathrm{fm}$ against $A^{1/3}$. A least-squares line has gradient 1.20 and intercept 0.006, so the length scale is about 1.20 fm; radius residuals are within 0.05 fm. The small intercept is consistent with zero at this illustrative precision. The predicted density is about $2.3\times10^{17}\,\mathrm{kg\,m^{-3}}$. This supports an approximate average-density model, not point-by-point internal uniformity. **Retry:** add a fixed +0.20 fm zero error to every radius: a free-intercept slope stays the same while the intercept shifts; forcing the fit through zero biases the length scale high and the inferred density low.

</details>

## Practice {#practice}

### Question 1: justify the density model {#question-1}

*Adapted from OxfordAQA 9630 PH04 January 2024 Q7.1; QP p.17 and MS p.18 read. Scaling extension is self-written.*

Assume $R=R_0A^{1/3}$, a spherical nucleus and mass $A m_u$. Show that average density is independent of A. Then predict the radius and volume factors when nucleon number increases eightfold.

<details markdown="1">
<summary>Hint</summary>

Write mass and volume separately before dividing.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

$$\rho=\frac{A m_u}{(4/3)\pi(R_0A^{1/3})^3}=\frac{3m_u}{4\pi R_0^3}.$$

No nucleon number remains. Eightfold nucleon number gives twice the radius and eight times the volume. **Retry:** radius is three times larger: nucleon number is 27 times larger within this model.

</details>

### Question 2: do not stop the off-centre particle {#question-2}

*Adapted from OxfordAQA 9630 PH04 January 2024 Q10; QP p.20 original path viewed and MS p.19 key C read. Open calculation restates the geometry; the head-on comparison is self-written.*

An alpha particle starts far from a fixed nucleus of charge $+82e$ with kinetic energy $2.1\times10^{-12}\,\mathrm J$. Its off-centre path has closest separation $4.5\times10^{-14}\,\mathrm m$. Use the constants in Example 1. Find its kinetic energy there and explain why setting it to zero would fail.

<details markdown="1">
<summary>Hint</summary>

Conserve total kinetic plus electrostatic potential energy; the path is not head-on.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

$$K_{\min}=2.1\times10^{-12}-\frac{(8.99\times10^9)(2)(82)(1.60\times10^{-19})^2}{4.5\times10^{-14}}\approx1.3\times10^{-12}\,\mathrm J.$$

Tangential motion remains at closest approach. A zero radial velocity is not zero total speed. **Retry:** for a head-on path with the same initial energy, closest separation is about 18 fm, smaller than the off-centre value.

</details>

### Question 3: infer the nucleon number {#question-3}

*Self-written.*

A nucleus with $A=64$ and a second nucleus follow the same radius law. The second radius is 1.50 times the first. Infer its nucleon number and compare the two average densities.

<details markdown="1">
<summary>Hint</summary>

Cube the radius ratio before applying it to nucleon number.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

$$A_2=64(1.50)^3=216.$$

The average densities are equal within the model. **Retry:** doubling radius requires eight times the mass, not twice the mass.

</details>

### Question 4: change the probe, then the target {#question-4}

*Self-written transfer task; qualitative pattern informed by OxfordAQA 9630 PH04 June 2024 Q15, QP p.25 original graphs viewed and MS p.21 key B read.*

Sketch how the angular intensity pattern changes when the electron momentum range is broadened. Then use the supplied size relation in Example 2 to predict the change of the first-minimum angle if momentum doubles for the same target. Does the angle halve exactly?

<details markdown="1">
<summary>Hint</summary>

Separate a blurred feature from a shifted feature. Keep target radius fixed in the second comparison.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

A range of wavelengths blurs minima and side structure. Doubling momentum halves wavelength, so $\sin\theta_{\min}$ halves in the supplied model. From an initial $20^\circ$, the new angle is about $9.8^\circ$; it need not halve exactly unless a small-angle approximation applies. **Retry:** at fixed wavelength a larger target shifts the corresponding minimum towards the forward direction.

</details>

### Question 5: decide what a radius offset changes {#question-5}

*Self-written.*

A radius instrument adds the same positive offset to all records. A student forces a radius-versus-cube-root graph through the origin and reports a higher scale constant and a lower density. Explain the direction of both biases and propose a diagnostic comparison.

<details markdown="1">
<summary>Hint</summary>

A free-intercept line distinguishes an offset from a proportional change.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

An offset raises every vertical coordinate. A forced-origin fit absorbs it into a larger gradient. Since $\rho\propto R_0^{-3}$, the inferred density is too small. Compare free- and forced-intercept fits and residuals; a positive intercept suggests an offset but is not unique proof of its cause. **Retry:** a pure multiplicative calibration error changes the gradient even with a free intercept.

</details>

### Question 6: choose a size and a density {#question-6}

*Self-written.*

For a model nucleus with $A=216$, use $R_0=1.20\,\mathrm{fm}$ and $m_u=1.66\times10^{-27}\,\mathrm{kg}$. Estimate radius and average density. A Coulomb experiment turns an alpha particle at 30 fm. Which length represents the radius model and which is a turning-distance bound?

<details markdown="1">
<summary>Hint</summary>

Compute spherical volume in cubic metres. Decide what each experiment measures.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

$$R=1.20(216)^{1/3}=7.20\,\mathrm{fm},\qquad \rho=\frac{216(1.66\times10^{-27})}{(4/3)\pi(7.20\times10^{-15})^3}\approx2.3\times10^{17}\,\mathrm{kg\,m^{-3}}.$$

The 7.20 fm value is the stated empirical radius model; 30 fm is the external turning separation, not another measured radius. **Retry:** why would inserting 30 fm as radius underestimate density?

</details>

## Quick reference {#quick-reference}

| Decision | Model and limit |
| --- | --- |
| Head-on, fixed heavy target | $K_\infty=k(2e)(Ze)/r_{\min}$; upper-bound estimate |
| Off-centre | Retain kinetic energy at closest approach |
| Electron size evidence | $\lambda=h/p$; use a specified scattering model |
| Spherical average-density model | $R=R_0A^{1/3}$; $m\approx A m_u$ |

[Previous: Thermal Physics](/alevel/a2-physics/thermal-physics/) · [Course index](/alevel/a2-physics/) · [Next: Mass and Binding Energy](/alevel/a2-physics/mass-and-binding-energy/)

## Sources and scope {#sources}

OxfordAQA 9630 PH04, [specification body v4.4](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf) Section 3.12.1, printed p.28/PDF p.27, checked 21 October 2026. January 2024 QP pp.17/20 and paired MS pp.18–19 support Example 3 and Questions 1–2. June 2024 QP p.25 and MS p.21 support the diffraction-pattern discussion; the original figures were viewed. Jim Breithaupt Section 24.1, printed pp.420–421/PDF pp.436–437, supports teaching organisation. Other examples, records, tasks and SVGs are self-written; the size relation in Example 2 is supplied for that task. This sample covers nuclear radius; later PH04 topics remain in the course index.

{% include exam_topic_practice.html %}
