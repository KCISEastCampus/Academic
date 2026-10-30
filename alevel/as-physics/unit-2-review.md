---
title: "Unit 2: Mixed Review"
layout: subjects
mathjax: true
grade: as
subject: as-physics
permalink: /alevel/as-physics/unit-2-review/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

Attempt this **after a break**, without the lesson pages or a named-method list. PH02 can also call on measurement, force, energy and momentum from Unit 1. These are self-written questions; explain the model, not just the arithmetic.

<h2 id="mixed-tasks">Connect the evidence</h2>

<div class="lesson-check" markdown="1">
<!-- task:unit2-1 -->
A cell has emf 6.0 V and internal resistance 1.0 Ω. It supplies a 2.0 Ω resistor in series with two parallel 6.0 Ω resistors. Find current, terminal voltage and power dissipated inside the cell. Explain in English why terminal voltage differs from emf while supplying current.
<!-- /task:unit2-1 -->
<details markdown="1"><summary>Hint</summary>
Find external equivalent resistance before adding the internal resistance.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Parallel pair = 3.0 Ω, external resistance = 5.0 Ω, total = 6.0 Ω: I = 1.0 A. Terminal V = 6.0−1.0(1.0) = 5.0 V, internal power I²r = 1.0 W. Example: 'The source supplies 6 J per coulomb, while 1 J per coulomb is transferred internally, leaving 5 J per coulomb for the external circuit.'

Repair: [specific lesson](/alevel/as-physics/emf-and-internal-resistance/#retry). Retry with its changed data before returning here.
</details>
</div>

<div class="lesson-check" markdown="1">
<!-- task:unit2-2 -->
A 10 V supply feeds a 3.0 kΩ upper resistor and a 2.0 kΩ lower resistor. A 2.0 kΩ voltmeter is placed across the lower resistor. Predict the reading and compare it with the unloaded value. Replace the lower resistor by an NTC of the same initial resistance: predict the direction of change on warming, keeping the meter connected.
<!-- /task:unit2-2 -->
<details markdown="1"><summary>Hint</summary>
The finite-resistance meter is a parallel load on the lower arm.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Loaded lower resistance = 2.0 || 2.0 = 1.0 kΩ; reading = 10(1)/(3+1) = 2.5 V. Unloaded = 10(2)/(3+2) = 4.0 V. Warming lowers NTC resistance, so the parallel lower resistance and its output voltage fall. An ideal infinite-resistance voltmeter would behave differently.

Repair: [specific lesson](/alevel/as-physics/dc-circuits-and-potential-dividers/#retry). Retry with its changed data before returning here.
</details>
</div>

<div class="lesson-check" markdown="1">
<!-- task:unit2-3 -->
Constructed terminal measurements are (I / A, V / V): (0.20, 1.42), (0.50, 1.30), (0.80, 1.18). Choose a graph, estimate cell parameters and predict the terminal voltage at 1.0 A. A later repeat at 0.20 A gives 1.34 V. Explain why a single fixed-parameter model now needs checking, and design a comparison that can distinguish current dependence from time/temperature drift.
<!-- /task:unit2-3 -->
<details markdown="1"><summary>Hint</summary>
Interpret V–I slope/intercept, then separate chronological change from current choice.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Plot V against I: gradient −0.40 Ω and intercept 1.50 V, hence r = 0.40 Ω, emf 1.50 V. At 1.0 A predict 1.10 V only if parameters stay fixed. The changed low-current reading contradicts that line for the later state. Interleave repeated low-current reference readings, vary current order, switch off between readings and monitor temperature/time; repeat at similar thermal state. A single later reading does not uniquely identify the cause.

Repair: [specific lesson](/alevel/as-physics/emf-and-internal-resistance/#data-check). Retry with its changed data before returning here.
</details>
</div>

<div class="lesson-check" markdown="1">
<!-- task:unit2-4 -->
A 0.20 kg load on a spring has period 0.50 s. Predict the period at 0.45 kg in the same model. A pendulum has period 1.6 s at length 0.64 m. Choose a length giving 2.0 s. For both experiments explain one controlled quantity and one bias that repeating timing alone cannot remove. Compare energy loss in a free damped oscillator with energy input in a sustained forced oscillator.
<!-- /task:unit2-4 -->
<details markdown="1"><summary>Hint</summary>
Use ratios of square roots and distinguish length definition from timing spread.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Spring T = 0.50√(0.45/0.20) = 0.75 s. Pendulum L = 0.64(2.0/1.6)² = 1.00 m. Keep small amplitude and apparatus geometry consistent; fixed length offset or omitted hanger/effective spring mass survives repeated timing. Free damping transfers mechanical energy out and reduces amplitude. A steady forced response requires average driver input to balance losses; driving near natural frequency can give resonance.

Repair: [specific lesson](/alevel/as-physics/oscillations-and-resonance/#retry). Retry with its changed data before returning here.
</details>
</div>

<div class="lesson-check" markdown="1">
<!-- task:unit2-5 -->
A string fixed at both ends has length 0.90 m. It displays three loops at 120 Hz. Find wavelength and speed. In another apparatus a grating of spacing 1.5 μm gives a second-order maximum at 45°. Find the light wavelength and the largest allowed order. Explain why the number of string loops and the grating order are different physical labels.
<!-- /task:unit2-5 -->
<details markdown="1"><summary>Hint</summary>
Count fitted half-wavelengths for the string and path-difference orders for the grating.
</details>
<details markdown="1"><summary>Solution and repair</summary>
String λ = 2(0.90)/3 = 0.60 m; v = 120(0.60) = 72 m/s. Grating λ = (1.5 × 10⁻⁶)sin 45°/2 = 5.30 × 10⁻⁷ m = 530 nm. d/λ = 2.828, so maximum order 2. String n counts fitted half-wavelengths between fixed nodes; grating n counts whole-wavelength path difference between adjacent slits.

</details>

Repair separately: [string](/alevel/as-physics/progressive-and-stationary-waves/#retry) · [grating](/alevel/as-physics/interference-and-diffraction/#retry)
</div>

<div class="lesson-check" markdown="1">
<!-- task:unit2-6 -->
A double-slit pattern has a 24.0 mm distance spanning 8 bright-fringe intervals, slit separation 0.20 mm and screen distance 1.0 m. Estimate wavelength. Explain what further measurements you need to put an uncertainty on it. Separately, an optical fibre has core index 1.50 and cladding index 1.47: test guidance for a core ray at 82° to the boundary normal. Explain why a narrower source spectrum can reduce one kind of pulse broadening but does not eliminate different path lengths.
<!-- /task:unit2-6 -->
<details markdown="1"><summary>Hint</summary>
Count fringe intervals; for guiding test high-to-low index and incidence against critical angle.
</details>
<details markdown="1"><summary>Solution and repair</summary>
w = 24.0/8 = 3.0 mm; λ = wa/D = 6.0 × 10⁻⁷ m = 600 nm. Need estimates for endpoint positions/span, a and D, with repeats/alignment information; no unique numerical uncertainty follows from the bare numbers. Critical angle arcsin(1.47/1.50) = 78.5°, so 82° supports total internal reflection. Narrower spectrum reduces material dispersion, but does not remove modal/path transit-time differences.

</details>

Repair separately: [double slit](/alevel/as-physics/interference-and-diffraction/#double-slit) · [fibre](/alevel/as-physics/refraction-and-optical-fibres/#retry)
</div>

<div class="lesson-check" markdown="1">
<!-- task:unit2-7 -->
Photons of energy 4.0 eV fall on a surface with work function 2.5 eV. Predict stopping potential and the effect of doubling intensity at the same photon energy. A 30 kV X-ray tube is then compared with a 60 kV tube using the same target: compare maximum photon energies and explain why the target's characteristic line energies need not double. Finally, explain what electron diffraction adds to evidence about matter.
<!-- /task:unit2-7 -->
<details markdown="1"><summary>Hint</summary>
Compare energy per photon/electron separately from photon/electron number.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Maximum electron kinetic energy is 1.5 eV, so stopping potential is 1.5 V. More intensity raises photon arrival rate/current under comparable collection but not stopping potential. X-ray maximum energies are 30 and 60 keV. Characteristic line gaps are fixed by the same target's atomic structure, provided both voltages can excite the relevant transitions. Electron diffraction supports matter-wave behaviour while localised impacts remain.

Repair separately: [photoelectric/levels](/alevel/as-physics/photons-and-wave-particle-duality/#retry) · [X-ray / diffraction](/alevel/as-physics/photons-and-wave-particle-duality/#xray-duality-retry)
</details>
</div>

<div class="lesson-check" markdown="1">
<!-- task:unit2-8 -->
Choose one of RP3, RP4 or RP5. Write an English explanation connecting the raw record, the plotted variables, the fitted parameter and an uncertainty/bias limitation. Then name the second apparatus required in RP4 and in RP5. Explain why a successful web data exercise does not demonstrate that a student can align, operate or safely handle the real apparatus.
<!-- /task:unit2-8 -->
<details markdown="1"><summary>Hint</summary>
Choose one practical and name its actual raw measurements before graph variables.
</details>
<details markdown="1"><summary>Solution and repair</summary>
One example: 'For RP3, each simultaneous terminal voltage and current reading defines a point on a V–I graph. Its intercept estimates emf and the negative gradient estimates internal resistance. A later reference reading can reveal drift; a narrow scatter does not rule out a shared calibration bias.' RP4 requires both mass–spring and simple pendulum; RP5 both double slit and grating. Data processing does not assess physical alignment, handling, risk controls or successful independent operation.

</details>

Repair for your chosen experiment: [RP3](/alevel/as-physics/emf-and-internal-resistance/#retry) · [RP4](/alevel/as-physics/oscillations-and-resonance/#practical-check) · [RP5](/alevel/as-physics/interference-and-diffraction/#practical-check)
</div>

<h2 id="next-study-session">Plan the next attempt from evidence</h2>

Mark separately: model choice, transformations/graphs, numerical checks, experimental inference and English explanation. For a mistake, name the missing link and complete the linked retry with help closed. Later mix one Unit 1 problem with one Unit 2 problem. This is a route to self-checking; student retention and practical competence require observed work.


<h2 id="sources-and-next">Scope and next step</h2>

OxfordAQA 9630 PH02 / 3.4–3.5, with 3.1–3.3 applications. Tasks are self-written; numerical/schematic records are constructed. Checking criteria are not official marks. [Official specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf).

[Previous](/alevel/as-physics/photons-and-wave-particle-duality/) · [Next](/alevel/as-physics/measurements-and-uncertainties/) · [Course](/alevel/as-physics/)

{% include exam_topic_practice.html %}
