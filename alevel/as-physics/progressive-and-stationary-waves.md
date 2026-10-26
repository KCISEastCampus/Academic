---
title: "Progressive and Stationary Waves"
layout: subjects
mathjax: true
grade: as
subject: as-physics
permalink: /alevel/as-physics/progressive-and-stationary-waves/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

A ripple travels across a pond; a floating marker mainly moves up and down. A wave transfers energy while local particles oscillate. We must distinguish the motion of the pattern from the motion of the medium.

<h2 id="before-you-start">Before you start</h2>

Use [oscillation period/frequency](/alevel/as-physics/oscillations-and-resonance/), graph axes and ratios. You will read space/time wave records, add displacements, predict harmonics and interpret sound/microwave evidence.

<h2 id="progressive-waves">Read the axes before using a wave equation</h2>

A progressive wave carries a disturbance and energy between places without an overall transport of the medium. Amplitude is the maximum displacement; wavelength λ is the spatial distance for one complete phase repeat. A displacement–distance graph is a snapshot; a displacement–time graph follows one position. The first gives λ; the second gives T. One snapshot does not supply a travel speed.

$$v=f\lambda,\qquad f=\frac1T.$$

Phase describes the stage of an oscillation. Along a uniform sinusoidal travelling wave, separation Δx corresponds to phase difference $2\pi\Delta x/\lambda$ radians, or $360^\circ\Delta x/\lambda$, modulo a complete cycle. In phase means same displacement **and motion stage**, not simply equal height in a snapshot.

In a transverse wave, displacement is perpendicular to propagation (string waves and electromagnetic waves). In a longitudinal wave, displacement is parallel to propagation (sound in air): compressions and rarefactions travel while particles oscillate about their positions. Density/pressure maxima are not upward particle displacement.

<div class="worked-example" markdown="1">
**Worked example — self-written.**
<!-- task:wave-worked -->
A progressive wave has wavelength 0.80 m and frequency 5.0 Hz. Two points 0.20 m apart lie along its direction of travel. Find wave speed and their phase difference. Does a displacement–distance snapshot alone give frequency? Explain.
<!-- /task:wave-worked -->

v = 5.0 × 0.80 = 4.0 m/s. Separation is λ/4, so phase difference is π/2 rad or 90°. The snapshot can supply a spatial scale but needs time information or independently known speed to give frequency.
</div>

All electromagnetic waves have the same speed in vacuum, c ≈ 3.00 × 10⁸ m/s. Their electric and magnetic fields oscillate; material-particle motion is not required, and they can propagate without a material medium.

<div class="lesson-check" markdown="1">
<!-- task:electromagnetic-check -->
A radio wave has frequency 1.0 × 10⁸ Hz and vacuum wavelength 3.0 m. A visible-light wave has frequency 6.0 × 10¹⁴ Hz and vacuum wavelength 5.0 × 10⁻⁷ m. Compare their speeds. Explain what oscillates in these waves and why a material medium is not required.
<!-- /task:electromagnetic-check -->
<details markdown="1"><summary>Hint</summary>
Calculate fλ for each; different wavelengths need not mean different speeds.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Both speeds are 3.0 × 10⁸ m/s. Electric and magnetic fields oscillate; vacuum propagation requires no oscillating medium particles. The material-medium account for strings/sound does not apply to every wave.
</details>
</div>

<h2 id="ultrasound">Use a travelling signal</h2>

Ultrasound is sound above the human audible range, conventionally above about 20 kHz. Reflections from tissue boundaries can locate structures: a pulse travels to a boundary and back. A suitable couplant reduces reflection at the skin/air boundary. Echo strength depends on the boundary and attenuation; it is not a direct photograph or an automatic diagnosis.

<div class="lesson-check" markdown="1">
<!-- task:wave-check -->
An ultrasound echo returns 160 μs after transmission. Sound speed in tissue is 1540 m/s. Estimate the reflector depth and explain the factor of two. Give one limitation when interpreting a real medical echo.
<!-- /task:wave-check -->
<details markdown="1"><summary>Hint</summary>
Convert microseconds to seconds; the recorded travel distance includes outward and return paths.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Depth = vt/2 = 1540(160 × 10⁻⁶)/2 = 0.1232 m ≈ 12.3 cm. Assumptions include the stated average speed along the path and identifying the correct echo. Different tissue speeds, attenuation or multiple reflections limit the inference; this is a model calculation, not medical interpretation.
</details>
</div>

<h2 id="superposition">Add displacement at each place and time</h2>

The principle of superposition says the resultant displacement is the algebraic sum of individual displacements where waves overlap, within the linear model. The waves can pass through one another; a momentary cancellation does not destroy their ability to carry energy.

Two equal-frequency, equal-amplitude waves travelling in opposite directions can produce a stationary wave. Fixed nodes have zero displacement at all times; adjacent nodes are λ/2 apart. Antinodes midway between them have maximum amplitude. Points inside one loop oscillate in phase; neighbouring loops oscillate in antiphase. This ideal pattern has no net energy transfer along the string, unlike a single progressive wave. Real losses require energy input to sustain it.

<div class="lesson-check" markdown="1">
<!-- task:superposition-check -->
At equally spaced positions x = 0, 1, 2, 3, 4 cm, two waves have instantaneous displacements (in mm):
A: 0, +2, 0, −2, 0; B: 0, −1, 0, +1, 0.
Plot A, B and their sum on the same scale. At a later instant both displacements are reversed. Give the new sum. Does a point where the sum is zero in just one snapshot have to be a permanent node? Explain how two identical opposite-travelling waves form a stationary pattern.
<!-- /task:superposition-check -->
<details markdown="1"><summary>Hint</summary>
Add signed displacements row by row; test what 'at all times' means.
</details>
<details markdown="1"><summary>Solution and repair</summary>
The sum is 0, +1, 0, −1, 0 mm; later it is 0, −1, 0, +1, 0 mm. Plot all three records, retaining signs. A zero in one snapshot is insufficient to identify a node; all positions can pass through zero together in a stationary wave. The two opposite waves continually superpose, with permanent cancellation at nodes and maximum reinforcement at antinodes.
</details>
</div>

<h3 id="stationary-formation">Reconstruct a stationary wave from moving components</h3>

![Component traces at three times: solid right-moving, dashed left-moving; they coincide at t=0, oppose at t=1 s, and coincide with reversed sign at t=2 s. Resultants are not supplied.](/assets/images/physics-as-stationary-components.svg){: width="780" height="560" }

<div class="lesson-check" markdown="1">
<!-- task:stationary-formation-task -->
The diagram gives two sinusoidal component waves of amplitude 1.0 mm and wavelength 4.0 cm, travelling in opposite directions at 1.0 cm/s. Trace and add them at t = 0, 1.0 and 2.0 s. Mark the persistent nodes of the resultant, distinguishing them from temporary zeros. From the spatial record find wavelength; from the right-moving wave's displacement at x = 1 cm (+1, 0, −1, 0, +1 mm at t = 0, 1, 2, 3, 4 s), find period and check wave speed. Explain why a table of isolated zeros alone would not prove a permanent node.
<!-- /task:stationary-formation-task -->
<details markdown="1"><summary>Hint</summary>
Add at each position; passing through zero is not the same as remaining at zero.
</details>
<details markdown="1"><summary>Solution and repair</summary>
At t=0 the sum is 0, +2, 0, −2, 0 mm; at t=1 s it is zero everywhere; at t=2 s it is 0, −2, 0, +2, 0 mm. Persistent nodes lie at x=0, 2, 4 cm; x=1, 3 cm are antinodes. λ=4.0 cm, T=4.0 s, v=1.0 cm/s. Three snapshots alone cannot prove zero displacement at all times: the stated equal-amplitude, equal-frequency, opposite continuous sinusoidal-wave model supplies that inference. If every t=1 s zero was called a node, revisit the all-times criterion.
</details>
</div>

<h2 id="string-harmonics">A fixed string selects patterns</h2>

At fixed ends displacement is zero. The nth harmonic fits n half-wavelengths into L:

$$L=\frac{n\lambda_n}{2},\qquad v=\sqrt{\frac{F}{\mu}},\qquad f_n=\frac{n}{2L}\sqrt{\frac{F}{\mu}}.$$

Here F is tension, μ is mass per unit length in kg/m; n = 1, 2, 3, … . The first harmonic has one loop. These equations assume a uniform flexible string and effectively fixed ends.

To test the model, use a vibrator, string, pulley and hanging load. Measure the vibrating length between nodes and μ from a known string length/mass; use F ≈ mg only when the pulley is low-friction and the load is steady. Vary L, F or μ **one at a time**, keeping harmonic order n fixed while adjusting to a clear pattern. Record frequency and loop count. Compare f with 1/L, √F or 1/√μ as appropriate; if n changes, compare f/n instead. Count loops before assigning n. Secure the pulley/load and limit amplitude so the load stays supported.

<div class="lesson-check" markdown="1">
<!-- task:string-check -->
A string fixed at both ends has length 0.60 m, tension 24 N and mass per unit length 0.0060 kg/m. Find its wave speed and first three harmonic frequencies. Sketch the second harmonic, marking nodes and antinodes. Predict what happens to the first harmonic if tension is multiplied by four, then if the same string length is doubled at unchanged tension.
<!-- /task:string-check -->
<details markdown="1"><summary>Hint</summary>
Find v before frequencies. Sketch two loops between the fixed ends.
</details>
<details markdown="1"><summary>Solution and repair</summary>
v = √(24/0.0060) = 63.2 m/s. f₁ = 52.7 Hz, f₂ = 105 Hz, f₃ = 158 Hz. For the second harmonic nodes are at 0, 0.30, 0.60 m; antinodes at 0.15, 0.45 m and neighbouring loops move oppositely. Four times F doubles f₁; doubling L halves it, all other model quantities fixed.
</details>
</div>

<h2 id="polarisation-check">Other media and polarisation</h2>

Sound can form stationary waves by reflection in an air column: pressure nodes and displacement nodes are different. A microphone detects pressure changes; a displacement node is a pressure antinode in the ideal model. Microwaves can form stationary patterns between a transmitter and reflector; move a receiver along the beam to sample the pattern.

Polarisation restricts transverse oscillations to a particular direction. A Polaroid transmission axis selects one electric-field direction; crossed ideal polarisers strongly suppress transmission. Rotating a receiving aerial relative to the electric field changes the signal. Ordinary longitudinal sound has no transverse vibration direction to select. No Malus-law calculation is required here.

<div class="lesson-check" markdown="1">
<!-- task:polarisation-task -->
A microwave receiver gives alternating maxima and minima as it moves towards a metal reflector. Adjacent minima are 1.5 cm apart. Find wavelength and explain the incident/reflected-wave model. In a separate test an aerial is rotated about the beam direction and the signal drops. What property is supported? Explain why an ideal longitudinal sound wave cannot be polarised in this way.
<!-- /task:polarisation-task -->
<details markdown="1"><summary>Hint</summary>
A node separation is half a wavelength; distinguish field direction from beam direction.
</details>
<details markdown="1"><summary>Solution and repair</summary>
λ = 3.0 cm. Incident and reflected microwaves superpose to form a stationary pattern with adjacent nodes λ/2 apart. Orientation-dependent reception supports transverse polarisation of the electric field. Sound particle motion is along propagation, so rotation about that direction cannot select different transverse vibration directions.
</details>
</div>

<h2 id="retry">Change pattern and representation</h2>

<div class="lesson-check" markdown="1">
<!-- task:wave-retry -->
Retry: a 1.20 m string displays three loops at 90 Hz. Find wavelength, wave speed and first harmonic frequency. At unchanged tension and length, mass per unit length is multiplied by four. Predict the new frequency for the same pattern. Two snapshots of a right-moving pulse are 0.030 s apart; a crest moves 0.12 m. Find its speed and explain why no particle need travel the 0.12 m with that crest.
<!-- /task:wave-retry -->
<details markdown="1"><summary>Hint</summary>
Three loops means three half-wavelengths. Use the ratio before recalculating.
</details>
<details markdown="1"><summary>Solution and repair</summary>
λ = 2L/3 = 0.80 m; v = 90(0.80) = 72 m/s; f₁ = 90/3 = 30 Hz. Multiplying μ by four halves v and the same-pattern frequency, to 45 Hz. The pulse speed is 0.12/0.030 = 4.0 m/s. The crest labels a moving phase/disturbance; medium particles oscillate locally. Wrong loop counts: revisit string-harmonics; wrong particle motion: revisit progressive-waves.
</details>
</div>


<h3 id="phase-sound-check">Connect phase and sound measurements</h3>

<div class="lesson-check" markdown="1">
<!-- task:phase-sound-check -->
A travelling sinusoidal wave has wavelength 1.20 m. Points P and Q are 0.90 m apart along propagation. Find their phase difference in degrees and radians. A microphone then scans a stationary sound field and finds adjacent pressure-amplitude minima 0.17 m apart. Find sound wavelength and explain whether these pressure minima are particle-displacement nodes or antinodes. Retry with adjacent pressure minima 0.25 m apart and a wave-point separation λ/2.
<!-- /task:phase-sound-check -->
<details markdown="1"><summary>Hint</summary>
Use the spatial fraction of a cycle; a microphone responds to pressure.
</details>
<details markdown="1"><summary>Solution and repair</summary>
P–Q phase difference = 270° = 3π/2 rad, equivalent to −90° modulo 360° (reversing the ordered phase difference instead changes its sign). Adjacent pressure nodes are λ/2 apart, so sound λ = 0.34 m; they are displacement antinodes in the ideal longitudinal stationary model. Retry λ = 0.50 m and phase difference 180° = π rad. Equal pressure and displacement nodes should not be drawn at the same position.
</details>
</div>

<h2 id="sources-and-next">Scope and next step</h2>

OxfordAQA 9630 3.5.3–3.5.5. Tasks are self-written; numerical/schematic records are constructed. Checking criteria are not official marks. [Official specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf).

[Previous](/alevel/as-physics/oscillations-and-resonance/) · [Next](/alevel/as-physics/interference-and-diffraction/) · [Course](/alevel/as-physics/)
