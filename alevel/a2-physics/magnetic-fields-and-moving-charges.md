---
title: Magnetic Fields and Moving Charges
layout: subjects
mathjax: true
grade: a2
subject: a2-physics
permalink: /alevel/a2-physics/magnetic-fields-and-moving-charges/
toc_headings: h2, h3, h4
study_page: true
---

[A2 Physics](/alevel/a2-physics/) · PH03 · 3.10.1–3.10.2

Why can a magnetic field bend a particle path without increasing its kinetic energy? Connect force direction, circular motion and devices before choosing equations.

- **Learn:** [current and force](#current-and-field) → [moving charges](#moving-charges) → [circular paths](#circular-paths) → [selection](#velocity-selector) and [cyclotrons](#cyclotron).
- **Analyse data:** choose a graph for the [balance records](#data-magnetic-balance).
- **Revise:** attempt [practice](#practice) with hints and solutions closed.

**Before starting:** recall [radial force](/alevel/a2-physics/circular-motion/) and [electric force and work](/alevel/a2-physics/electric-fields/). Use $e=1.60\times10^{-19}\,\mathrm C$, $m_e=9.11\times10^{-31}\,\mathrm{kg}$, $m_p=1.67\times10^{-27}\,\mathrm{kg}$ and $g=9.81\,\mathrm{m\,s^{-2}}$. Here $q$ is signed charge; $\lvert q\rvert$ is its magnitude. Use SI units before substituting.

Worked examples, original diagrams and the balance records are self-written. Adapted questions identify their paper and paired mark scheme in [Sources](#sources). No official marks are assigned. Diagrams are schematic; the calculations assume uniform fields, perpendicular entry, negligible collisions and other forces, and non-relativistic motion unless stated otherwise.

## Current, field and the tesla {#current-and-field}

**Think first:** a straight wire carries current to the right in a field into the page. What changes if the current reverses? Identify the wire as the object being pushed; its support or the magnet is a different object.

A cross represents a field **into** the page, like the tail of an arrow. A dot represents a field **out of** the page, like its tip. Both symbols describe a direction perpendicular to the drawing.

For a straight wire perpendicular to a uniform field, the force magnitude is:

$$\boxed{F=BIL}.$$

$L$ is the length **inside** the field, $I$ is conventional current, and $B$ is magnetic flux density. The tesla is defined by:

$$1\,\mathrm T=1\,\mathrm{N\,A^{-1}\,m^{-1}}.$$

A perpendicular 1 m length carrying 1 A experiences 1 N when the flux density is 1 T. The perpendicular condition is part of the definition, not an optional extra.

Use **Fleming’s left-hand rule**: first finger along the field, second finger along conventional current, thumb along the force. In the starting arrangement the force is upwards. Reverse just the current or just the field and the force reverses; reverse both and its original direction returns. Parallel current and field give no magnetic force. The simple product above is for the perpendicular case.

<img src="/assets/img/physics-magnetic-wire.svg" alt="Worked model: current rightwards, field into the page, upward force on the independently supported wire and downward reaction on the magnet on a balance." width="520" height="440" data-lazy-ignore="true">

### Example 1: effective length and reaction {#example-1}

A wire has $0.060\,\mathrm m$ inside a $0.12\,\mathrm T$ field perpendicular to its $2.5\,\mathrm A$ current. The wire is fixed independently of the magnet. Find the magnetic force and the change in a tared balance reading beneath the magnet if the wire force is upwards.

Only the in-field length contributes to this model:

$$F=(0.12)(2.5)(0.060)=\boxed{0.018\,\mathrm N}.$$

The magnet receives the equal downward reaction. Its balance reading increases:

$$\Delta m_{\mathrm{display}}=\frac{0.018}{9.81}\approx1.8\times10^{-3}\,\mathrm{kg}\approx\boxed{+1.8\,\mathrm g}.$$

This is a change in indicated mass, not a change in the magnet's actual mass. The force pair acts on different objects; it does not cancel in the wire's own force diagram.

## Moving charges: direction and energy {#moving-charges}

For a particle moving perpendicular to the field:

$$\boxed{F=B\lvert q\rvert v}.$$

For a positive charge, use its velocity as the conventional-current direction. For a negative charge, reverse that current direction before applying the left-hand rule. A rightward electron in an into-page field is therefore pushed downwards. A stationary charge, an ideal neutral particle, or motion parallel to the field has no magnetic force in this model.

The magnetic force is perpendicular to instantaneous velocity. It does no work on the free particle, so a static magnetic field alone preserves its kinetic energy and speed. Velocity can still change because its **direction** changes. This statement concerns the particle’s magnetic force: a motor wire connected to a supply can receive energy electrically.

<details markdown="1">
<summary>Check your explanation</summary>

“No work means no acceleration” is false. A perpendicular force changes direction and therefore velocity, even at constant speed. Do not add a separate centripetal force to the magnetic force.

</details>

## Circular paths and electric acceleration {#circular-paths}

With uniform $B$, perpendicular entry and negligible other forces, the magnetic force supplies the inward resultant:

$$B\lvert q\rvert v=\frac{mv^2}{r}\quad\Rightarrow\quad\boxed{r=\frac{mv}{B\lvert q\rvert}}.$$

The direction fixes which side the centre is on; this magnitude equation does not fix the turning sense. Larger momentum at fixed field and charge gives a larger radius. The orbit period is:

$$T=\frac{2\pi r}{v}=\boxed{\frac{2\pi m}{B\lvert q\rvert}}.$$

At fixed mass, charge and field, the ideal period is independent of speed. Increasing speed increases the circumference in the same proportion.

### Example 2: electron orbit {#example-2}

An electron enters a $0.50\,\mathrm{mT}$ field at $2.0\times10^6\,\mathrm{m\,s^{-1}}$, perpendicular to the field. Calculate its radius and period. Explain whether it slows down in the ideal field.

Convert millitesla first, and use the charge magnitude for radius:

$$r=\frac{(9.11\times10^{-31})(2.0\times10^6)}{(0.50\times10^{-3})(1.60\times10^{-19})}\approx\boxed{0.023\,\mathrm m}.$$

$$T=\frac{2\pi m_e}{Be}\approx\boxed{7.2\times10^{-8}\,\mathrm s}.$$

The speed stays constant. The radius is positive; negative electron charge changes the turning sense. Collisions or an additional electric field would require a different model.

An electric field can establish the entrance speed. For acceleration from rest through a potential drop of magnitude $U$, with the polarity chosen to accelerate the charge and negligible losses:

$$\frac12mv^2=\lvert q\rvert U.$$

Combining with the magnetic orbit gives:

$$\boxed{\frac{m}{\lvert q\rvert}=\frac{B^2r^2}{2U}}.$$

These two stages use different principles: electric work supplies kinetic energy, then magnetic force bends the path. A voltage is not a speed. If initial kinetic energy is appreciable, include it in the energy balance.

## Velocity selection and mass separation {#velocity-selector}

Consider rightward positive ions between a positive upper plate and a negative lower plate. The electric force is downwards; with magnetic field $B_s$ into the page, the magnetic force is upwards. The undeviated beam satisfies:

$$\lvert q\rvert E=\lvert q\rvert vB_s\quad\Rightarrow\quad\boxed{v=\frac{E}{B_s}}.$$

Charge cancels for nonzero charge because both forces are proportional to the same charge. Cancellation also requires opposite directions; merely equating magnitudes is insufficient. With the shown field directions, a faster positive ion initially deflects up and a slower one down. For a negative ion both forces reverse, but the selected speed is unchanged.

<img src="/assets/img/physics-magnetic-selector.svg" alt="Worked schematic: a rightward positive-ion beam between positive upper and negative lower plates, with field into the page; a separate magnetic-only analyser returns semicircular paths to a detector on the entry line." width="520" height="740" data-lazy-ignore="true">

The selected ions can enter a different magnetic field $B_a$ with no electric field. For a semicircle returning to the entrance line, the measured return distance is the **diameter** $2r$. At the same speed and charge, radius is proportional to mass; two isotopes have detector separation:

$$\Delta s=2\Delta r=\frac{2v\Delta m}{B_a\lvert q\rvert}.$$

Do not replace $B_a$ by $B_s$ unless the question says they are equal. Ions accelerated through the same voltage are generally not at the same speed if their mass-to-charge ratios differ.

### Example 3: select a speed {#example-3}

A selector has $E=1.2\times10^4\,\mathrm{V\,m^{-1}}$ and $B_s=0.080\,\mathrm T$, arranged with opposite electric and magnetic forces. Find the selected speed. Does doubling the ion charge double that speed?

$$v=\frac{1.2\times10^4}{0.080}=\boxed{1.5\times10^5\,\mathrm{m\,s^{-1}}}.$$

Doubling charge doubles both forces at a given speed, so it does not change the speed for cancellation. This does not imply equal radii in the later analyser.

## Cyclotron: bending and gaining energy {#cyclotron}

Two hollow D-shaped electrodes sit in a vacuum with magnetic field perpendicular to their plane. Inside each dee the electric field is approximately zero: magnetic force gives a semicircle at constant speed. Across the gap, the electric field does positive work on the particle. The speed and radius increase after an accelerating gap crossing. A track inside one dee is an arc of fixed radius, not a continuously expanding spiral.

<img src="/assets/img/physics-cyclotron-model.svg" alt="Worked cyclotron schematic with two dees, an into-page magnetic field, two fixed-radius semicircular arcs and accelerating gap crossings. Dimensions are schematic." width="520" height="500" data-lazy-ignore="true">

The half-orbit time and driving frequency follow from circular motion:

$$t_{\mathrm{half}}=\frac{\pi r}{v}=\frac{\pi m}{B\lvert q\rvert},\qquad f=\frac{B\lvert q\rvert}{2\pi m}.$$

The gap voltage reverses every half orbit, so the particle is accelerated on its next crossing in the opposite direction. For fixed mass, charge and field, the half-orbit time does not grow with radius; this is what permits a constant driving frequency in the non-relativistic model. An accelerating crossing through gap voltage magnitude $U_g$ adds:

$$\Delta E_k=\lvert q\rvert U_g.$$

For maximum usable radius $R$:

$$v_{\max}=\frac{B\lvert q\rvert R}{m},\qquad E_{k,\max}=\frac{B^2q^2R^2}{2m}.$$

Check that predicted speeds remain well below the speed of light. Relativistic synchronisation corrections and detailed engineering are outside this lesson.

## Data investigation: the balance and the wire {#data-magnetic-balance}

*Self-written; constructed teaching records, not a completed practical.*

A magnet rests on a balance. A straight horizontal wire is fixed to a separate support; $L=0.040\,\mathrm m$ lies in the uniform field, directed into the page. Positive current is **to the left**. The balance is tared with zero current. Each mass-change reading has uncertainty ±0.01 g; take current and length uncertainties as negligible for this task.

| Current / A | Change in balance reading / g |
| --- | --- |
| 0 | 0.00 |
| 1 | -0.33 |
| 2 | -0.65 |
| 3 | -0.98 |
| 4 | -1.31 |
| 5 | -1.63 |

1. Draw separate force diagrams for wire and magnet. Explain the reading sign without saying that the magnet loses mass.
2. Choose and plot quantities that allow you to estimate $B$ from all the records. State the meaning and units of the gradient. Inspect the intercept and scatter before deciding whether to force a line through the origin.
3. A student uses the full wire length, $0.050\,\mathrm m$, instead of the in-field length. Predict the bias in the estimate. Suggest a check that repeating readings alone cannot replace.

<details markdown="1">
<summary>Hint</summary>

Convert grams to kilograms before relating a display change to force. The two objects experience equal opposite magnetic forces. At zero current an ideal tared setup gives zero change, but inspect the measured intercept and uncertainty.

</details>

<details markdown="1">
<summary>Analysis and retry</summary>

With current left and field into the page, force on the wire is down. The magnet receives an upward reaction; the balance needs less upward supporting force. Thus its tared mass indication is negative. For signed mass change:

$$\Delta m_{\mathrm{display}}g=-BIL.$$

A straight-line fit of displayed grams against amperes gives gradient $s\approx-0.3263\,\mathrm{g\,A^{-1}}$ and intercept about $-0.0010\,\mathrm g$. Convert the gradient:

$$B=-\frac{(s\times10^{-3})g}{L}\approx\boxed{0.080\,\mathrm T}.$$

All residuals are below 0.004 g, compatible with the stated reading uncertainty. The near-zero intercept is consistent with a tare; it does not prove that all systematic errors are absent. Justify any gradient range using uncertainty bars rather than quoting more digits from the fit.

Using 0.050 m in the denominator gives an estimate 0.040/0.050 = 0.80 of the appropriate value: 20% too low. Check the actual field region and wire alignment; repeats do not fix a wrong effective length. Keep supply heating limited, switch off between readings and use teacher-checked low-voltage apparatus before any real practical.

**Retry:** reverse the current convention to rightwards while retaining positive displayed mass upwards on the vertical graph axis. The force directions and mass-change slope reverse; the inferred magnitude of $B$ stays the same.

</details>

## Practice {#practice}

Identify the field region, fixed quantities and force direction before calculating. For an explanation, connect a force or energy transfer to the observed change.

### Question 1: draw forces and paths {#question-1}

*Self-written.*

Particles A, B and C enter the field shown with the same rightward velocity. A is positive, B negative and C neutral; A and B have equal masses and equal charge magnitudes. Copy the diagram, add the initial magnetic forces and sketch the subsequent paths. State what changes if the field is reversed.

<img src="/assets/img/physics-magnetic-track-task.svg" alt="Particles A positive, B negative and C neutral enter a uniform field out of the page with equal rightward velocity. Force arrows and later paths have not been drawn." width="520" height="410" data-lazy-ignore="true">

<details markdown="1">
<summary>Hint</summary>

The dots mean out of the page. Apply the positive-charge direction first, then reverse for negative charge.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

A initially curves down, B up, with equal radii in this model. C continues straight. The forces are normal to the tracks and directed towards their respective centres. Reversing the field swaps A and B turning directions while leaving the radius magnitudes and C path unchanged. **Retry:** stop A before it enters the field; there is no magnetic force at rest.

</details>

### Question 2: lifting a wire {#question-2}

*Adapted from OxfordAQA 9630 PH03 January 2020 Q27; QP p.37 and MS p.9 read. Numerical values and an open derivation replace the original options.*

A uniform wire of density $8.9\times10^3\,\mathrm{kg\,m^{-3}}$ and cross-sectional area $1.0\times10^{-6}\,\mathrm{m^2}$ rests on supports, lying horizontally left-to-right in the plane of the page. Its whole length is in a uniform $0.20\,\mathrm T$ field directed into the page. Choose the current direction so magnetic force is upwards. Derive the current needed for lift-off, calculate it and explain why the length cancels.

<details markdown="1">
<summary>Hint</summary>

At lift-off the support reaction is zero. Express wire mass using density, area and length.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

The conventional current must flow to the right. At lift-off the support reaction reaches zero:

$$BIL=\rho ALg\quad\Rightarrow\quad I=\frac{\rho Ag}{B}\approx\boxed{0.44\,\mathrm A}.$$

Both magnetic force and weight are proportional to the same full length. If only part of the wire is in the field, that cancellation no longer applies. **Retry:** doubling cross-sectional area at unchanged density and field doubles the necessary current.

</details>

### Question 3: infer a particle property {#question-3}

*Self-written.*

Positive ions start with negligible kinetic energy and are accelerated through $1000\,\mathrm V$. They then enter a separate uniform $0.20\,\mathrm T$ magnetic field at right angles, following a radius of $0.112\,\mathrm m$. Determine their mass-to-charge ratio. Can this determine mass alone? If each ion carries charge $+2e$, find its mass.

<details markdown="1">
<summary>Hint</summary>

Use electric work to establish the speed relation, and magnetic force for the later path. Eliminate speed rather than treating voltage as velocity.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

$$\frac{m}{\lvert q\rvert}=\frac{(0.20)^2(0.112)^2}{2(1000)}\approx\boxed{2.5\times10^{-7}\,\mathrm{kg\,C^{-1}}}.$$

Mass alone requires the charge. With $q=+2e$:

$$m=(2.5088\times10^{-7})(3.20\times10^{-19})\approx\boxed{8.0\times10^{-26}\,\mathrm{kg}}.$$

**Retry:** with the same accelerating voltage, double the analyser field. The entrance speed is unchanged and radius halves; substituting the new field and radius recovers the same ratio.

</details>

### Question 4: compare alpha and beta tracks {#question-4}

*Adapted from OxfordAQA 9630 PH03 January 2020 Q28; QP p.38 and MS p.9 read. Open explanation and mass data replace the original diagram choices.*

An alpha particle and a beta-minus electron enter the same uniform field with the same non-relativistic velocity perpendicular to the field. Compare their turning directions and radius magnitudes. Use alpha mass $6.64\times10^{-27}\,\mathrm{kg}$ and charge $+2e$. Would “the alpha path has greater curvature because its charge is larger” be valid?

<details markdown="1">
<summary>Hint</summary>

At fixed speed and field compare mass divided by charge magnitude. Curvature means inverse radius.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

They turn in opposite directions because their charges have opposite signs.

$$\frac{r_\alpha}{r_\beta}=\frac{m_\alpha/(2e)}{m_e/e}=\frac{6.64\times10^{-27}}{2(9.11\times10^{-31})}\approx\boxed{3.6\times10^3}.$$

The alpha path is much less curved. Its larger mass dominates the charge comparison; charge alone does not settle it. This agrees with option B of the original MCQ. **Retry:** compare at equal momentum instead: the alpha radius is half the electron radius, because momentum is now the fixed quantity.

</details>

### Question 5: two magnetic regions {#question-5}

*Adapted from OxfordAQA 9630 PH03 Specimen 2019/V2.0 Q4.2–4.5; QP pp.10–11 and MS pp.8–9 read. The geometry is restated explicitly and the task is regrouped.*

A selector has $E=2.0\times10^4\,\mathrm{V\,m^{-1}}$ and $B_s=0.14\,\mathrm T$, with opposite electric and magnetic forces. Singly charged nickel ions pass into a magnetic-only analyser. Each makes a semicircle back to the entrance line. A nickel-58 ion returns $0.28\,\mathrm m$ from entry P. Take each nucleon mass as $1.7\times10^{-27}\,\mathrm{kg}$ and each ion charge as $+e$.

Determine the selected speed and explain its independence of ion charge. Find the analyser flux density and the detector separation for nickel-58 and nickel-60. State why the 0.28 m distance cannot be used directly as a radius.

<details markdown="1">
<summary>Hint</summary>

First balance the selector forces; then use the analyser radius and the same selected speed for both isotopes. Keep intermediate values unrounded.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

$$v=\frac{E}{B_s}=\frac{2.0\times10^4}{0.14}\approx\boxed{1.4\times10^5\,\mathrm{m\,s^{-1}}}.$$

Both force magnitudes contain the same nonzero charge, which cancels. In the analyser the return distance is a diameter, so $r_{58}=0.14\,\mathrm m$ and $m_{58}=58(1.7\times10^{-27})\,\mathrm{kg}$.

$$B_a=\frac{m_{58}v}{er_{58}}\approx\boxed{0.63\,\mathrm T}.$$

Using unrounded values and the common speed:

$$r_{60}=\frac{60}{58}r_{58},\qquad \Delta s=2(r_{60}-r_{58})\approx\boxed{9.7\times10^{-3}\,\mathrm m}.$$

These values agree with the paired MS ranges. Using 0.28 m as radius halves the inferred field. **Retry:** keep the selected speed but double the analyser field; both radii and their detector separation halve.

</details>

### Question 6: cyclotron timing and energy {#question-6}

*Adapted from OxfordAQA 9630 PH03 January 2020 Q30; QP p.40 and MS p.9 read. Numerical timing and energy tasks are self-written additions.*

A proton cyclotron has uniform field $0.50\,\mathrm T$ and maximum usable radius $0.20\,\mathrm m$. Explain why a proton has acceleration but constant speed inside a dee, and why the gap voltage must reverse. Calculate the driving frequency. Starting with negligible kinetic energy, it makes 40 accelerating gap crossings, each through $1.0\,\mathrm{kV}$. Find its kinetic energy and radius after those crossings, and check whether it fits.

<details markdown="1">
<summary>Hint</summary>

Distinguish force perpendicular to velocity from electric work in the gap. The drive completes one full cycle per full orbit, not per semicircle.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

Inside a dee the force changes velocity direction without doing work. The gap voltage must reverse after each half orbit so the next crossing again increases energy; this is consistent with option A in the original Q30.

$$f=\frac{Be}{2\pi m_p}\approx\boxed{7.6\,\mathrm{MHz}}.$$

$$E_k=40e(1000)=\boxed{6.4\times10^{-15}\,\mathrm J}=40\,\mathrm{keV}.$$

$$v=\sqrt{\frac{2E_k}{m_p}}\approx2.8\times10^6\,\mathrm{m\,s^{-1}},\qquad r=\frac{m_pv}{Be}\approx\boxed{0.058\,\mathrm m}.$$

This is below 0.20 m and speed is well below the speed of light. **Retry:** double gap voltage while keeping 40 crossings and field fixed. Energy doubles; speed and radius multiply by $\sqrt2$, but the ideal driving frequency stays the same.

</details>

### Question 7: choose the fixed quantity {#question-7}

*Self-written.*

Two positive ions have the same charge; ion B has twice the mass of ion A. Each starts from rest and is accelerated through the same potential difference. They then enter the same magnetic-only analyser at right angles. Predict the ratios of their speeds, radii and orbital periods. Would both also pass unchanged through a selector set to transmit ion A at its original speed? Justify each comparison.

<details markdown="1">
<summary>Hint</summary>

Same voltage fixes energy per charge. It does not fix speed or momentum.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

$$\frac{v_B}{v_A}=\frac1{\sqrt2},\qquad \frac{r_B}{r_A}=\sqrt2,\qquad \frac{T_B}{T_A}=2.$$

Equal charge and voltage give equal kinetic energies. The heavier ion moves more slowly but has greater momentum and radius. The ideal period depends on mass divided by charge, not speed. A selector tuned to A's speed deflects B because B's magnetic and electric forces do not cancel. **Retry:** at equal speed instead, the radius ratio would be 2 and both could pass the same selector; state which preparation has changed.

</details>

## Quick reference {#quick-reference}

| Model | Relation and condition |
| --- | --- |
| Wire perpendicular to field | $F=BIL$; use in-field length |
| Particle perpendicular to field | $F=B\lvert q\rvert v$; direction depends on signed charge |
| Magnetic-only circle | $r=mv/(B\lvert q\rvert)$ |
| Full orbit period | $T=2\pi m/(B\lvert q\rvert)$ |
| Acceleration from rest | $E_k=\lvert q\rvert U$ |
| Opposing crossed-field forces | $v=E/B_s$ for nonzero charge |
| Cyclotron driving frequency | $f=B\lvert q\rvert/(2\pi m)$; non-relativistic |
| One accelerating gap crossing | $\Delta E_k=\lvert q\rvert U_g$ |

Before moving on, explain one complete chain without looking at the formula table: field and motion directions → actual force → path or work → prediction when one condition changes.

[Previous lesson: Radioactive Decay](/alevel/a2-physics/radioactive-decay/) · [PH03 course index](/alevel/a2-physics/) · [Next lesson: Electromagnetic Induction](/alevel/a2-physics/electromagnetic-induction/)

## Sources and scope {#sources}

Scope: OxfordAQA International A-level Physics 9630 PH03, Sections 3.10.1–3.10.2. The [current qualification page](https://www.oxfordaqa.com/qualification/international-as-and-a-level-physics-9630/) links to the [specification with body version 4.4](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf), checked on 21 October 2026, printed p.25/PDF p.24. The cyclotron is an explicit application; the selector and isotope analyser are supported by the specimen paper. Magnetic flux, induction, AC and transformer operation belong to later lessons.

Questions 2, 4 and 6 use January 2020 PH03 Q27, Q28 and Q30 respectively: QP pp.37–38/40 and MS p.9. The original MCQ keys are B, B and A. New numerical/derivation extensions are self-written and carry no invented official marks.

Question 5 adapts OxfordAQA 9630 PH03 Specimen 2019/V2.0 Q4.2–4.5: QP pp.10–11 and paired MS pp.8–9. The text and geometry are regrouped explicitly here; the drawing is original and schematic. The filenames do not override the documents' Specimen 2019/V2.0 identity.

Textbook support: Jim Breithaupt, *Oxford International AQA Examinations: International A Level Physics*, Chapter 20, Sections 20.1–20.3, printed pp.357–366. The balance activity is original constructed data, informed by the wire/magnet reaction context of June 2024 PH03 Q16 (QP p.31/MS p.21); it changes the specified current and reading direction. It is not RP7, which concerns transformer efficiency, and does not certify practical completion. All numerical answers, directions and energy balances were checked independently.

{% include exam_topic_practice.html %}
