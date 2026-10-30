---
title: "Oscillations and Resonance"
layout: subjects
mathjax: true
grade: as
subject: as-physics
permalink: /alevel/as-physics/oscillations-and-resonance/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

A pendulum can have a predictable period while its speed changes continuously. Separate the repeat time, the energy exchanges and the source of a forced motion.

<h2 id="before-you-start">Before you start</h2>

Use [energy](/alevel/as-physics/work-energy-power/), [Hooke's law](/alevel/as-physics/materials-and-young-modulus/) and [graph uncertainty](/alevel/as-physics/measurements-and-uncertainties/). You will predict periods, draw energy changes, design both RP4 investigations and distinguish resonance from merely being driven.

<h2 id="period-models">Two period models</h2>

Displacement is measured from equilibrium. Amplitude A is its greatest magnitude; period T is one full repeat, and frequency f = 1/T. Count a cycle from a landmark **with the same direction of motion**, not every crossing.

For a mass m on a spring of stiffness k, assuming Hooke's law over the motion, negligible spring mass and small losses:

$$T=2\pi\sqrt{\frac{m}{k}}.$$

For a simple pendulum of length L from pivot to bob's centre of mass, with a light inextensible string and small angle (in radians):

$$T=2\pi\sqrt{\frac{L}{g}}.$$

m is the total attached oscillating mass, including its hanger. The pendulum's mass cancels from the ideal model. These are supplied AS models; the acceleration–displacement equation and full SHM phase equations belong to A2.

<h2 id="energy-changes">Track energy about equilibrium</h2>

For a horizontal ideal spring, elastic energy is ½kx² and total oscillation energy is ½kA². For a vertical spring, combine gravitational and elastic potential energy: their change relative to equilibrium is also ½kx². It is **not** the spring's absolute elastic energy alone. Kinetic energy is greatest at equilibrium and zero at each end. The restoring resultant is greatest in magnitude at an end; at equilibrium it is zero while the mass is moving fastest.

![One cycle starting at the positive end: displacement reaches zero at T/4 and 3T/4, the negative end at T/2; potential and kinetic energies exchange twice per displacement cycle.](/assets/images/physics-as-oscillation-energy.svg){: width="800" height="380" }

For the pendulum, gravitational potential energy rises as the bob rises. With negligible losses, it exchanges with kinetic energy. Energy curves repeat twice during one displacement cycle. The diagram uses a small-oscillation idealisation; it is not a measured record.

<div class="worked-example" markdown="1">
**Worked example — self-written.**
<!-- task:spring-worked -->
A 0.50 kg mass oscillates vertically on a spring of stiffness 50 N/m. Its amplitude is 0.040 m about equilibrium. Calculate its period and maximum kinetic energy. Explain why zero velocity at an end does not mean zero resultant force.
<!-- /task:spring-worked -->

The period is $2\pi\sqrt{0.50/50}=0.628$ s. The oscillation energy and maximum kinetic energy are $½(50)(0.040)^2=0.040$ J. At an end the mass is instantaneously at rest but the spring/gravity resultant points back towards equilibrium. Zero instantaneous velocity does not imply zero acceleration.
</div>

<div class="lesson-check" markdown="1">
<!-- task:period-check -->
A pendulum has length 0.80 m. Take g = 9.8 m/s². Predict its period, then predict the period if its length is multiplied by four. Explain why changing the bob mass is not a suitable way to change the ideal small-angle period. Sketch how kinetic and potential energy vary during one cycle starting at an end.
<!-- /task:period-check -->
<details markdown="1"><summary>Hint</summary>
Use the square-root dependence. Start the energy sketch with the bob high and stationary.
</details>
<details markdown="1"><summary>Solution and repair</summary>
T = 1.80 s; four times the length gives twice the period, 3.59 s. The ideal model has no bob-mass dependence. At 0, T/2 and T the bob is at an end: potential energy is maximum and kinetic zero. At T/4 and 3T/4 it crosses equilibrium: kinetic maximum and potential minimum. Both are non-negative with the chosen zero; their sum is constant.
</details>
</div>

<h3 id="energy-displacement-check">Plot energy against displacement</h3>

<div class="lesson-check" markdown="1">
<!-- task:energy-displacement -->
A horizontal ideal spring has k = 40 N/m and amplitude A = 0.050 m. Sketch potential energy, kinetic energy and total oscillation energy against displacement x from −A to +A. Label their values at x = 0 and ±A, then calculate both energies at x = +0.025 m. How does this graph differ from energy against time?
<!-- /task:energy-displacement -->
<details markdown="1"><summary>Hint</summary>
Use U = ½kx² and K = E_total − U; the horizontal axis has changed.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Total energy = 0.050 J, a horizontal line. U is an upward parabola, zero at the centre and 0.050 J at the ends; K is an inverted parabola, 0.050 J at the centre and zero at the ends. At x = 0.025 m, U = 0.0125 J and K = 0.0375 J. Unlike energy versus time, these are parabolas; the x axis does not imply motion always goes left to right.
</details>
</div>

<h2 id="practical-check">RP4: test both models</h2>

For the spring, $T^2=(4\pi^2/k)m$, so a T²-versus-m gradient has unit s²/kg and gives k = 4π²/gradient. For a pendulum, $T^2=(4\pi^2/g)L$, giving g = 4π²/gradient. Decide which quantity you vary; drawing a straight line alone does not identify the physical model.

Time many complete cycles, repeat and divide by the cycle count. Use a fixed fiducial mark, release without pushing and keep amplitude small/consistent. For the pendulum measure pivot to bob centre, avoiding parallax; for the spring avoid sideways motion and changing the elastic regime. Secure stands, keep masses over a tray/clear area and keep faces clear of moving bobs. Actual practical work requires local supervision and equipment checks.

A line should be fitted to the full processed record. Show uncertainties and compare plausible slopes; do not turn a single endpoint calculation into a precision claim. Repeat spread estimates random variation; an unchanged reaction-time bias or length offset can remain.

<div class="lesson-check" markdown="1">
<!-- task:practical-data -->
For a spring, the constructed raw times for **20 complete oscillations** are:

| Mass / kg | Time 1 / s | Time 2 / s | Time 3 / s |
| --- | --- | --- | --- |
| 0.10 | 8.8 | 8.9 | 9.0 |
| 0.20 | 12.5 | 12.6 | 12.7 |
| 0.30 | 15.3 | 15.4 | 15.5 |
| 0.40 | 17.7 | 17.8 | 17.9 |

Choose a graph to estimate spring stiffness. Process the first and last rows, use their line as an estimate, and explain what an intercept might reveal. Use half the repeat range as the timing uncertainty estimate. Find the first row's uncertainty in T².

For a pendulum, constructed lengths 0.25, 0.49, 0.81 m give mean times for 20 cycles of 20.0, 28.0, 36.0 s. Choose and use a different graph to estimate g. Design **both** methods: define length/mass, timing landmarks, controls and risk reduction. Explain why one repeated bob is not 20 independent apparatus setups.
<!-- /task:practical-data -->
<details markdown="1"><summary>Hint</summary>
Square the period, not the time for 20 cycles. For a squared quantity, use about twice its fractional uncertainty.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Spring means are 8.9, 12.6, 15.4, 17.8 s; T = 0.445, 0.630, 0.770, 0.890 s. The endpoint T² values are 0.1980 and 0.7921 s². Their slope is 1.9803 s²/kg, giving k ≈ 19.9 N/m and an almost zero intercept. The first timing estimate is ±0.1 s, hence ΔT = 0.005 s and Δ(T²) ≈ 2(0.445)(0.005) = 0.00445 s². This is an uncertainty on one plotted ordinate, not the fitted k.

Pendulum T = 1.0, 1.4, 1.8 s; T² = 1.00, 1.96, 3.24 s². Plot T² vertically against L: gradient 4.0 s²/m gives g ≈ 9.87 m/s². A nonzero intercept can indicate an offset or an omitted effective mass/length; it does not prove the cause. Compare models and remeasure. Twenty cycles improve timing resolution; they share one apparatus and its systematic errors.
</details>
</div>

<h2 id="damping-and-resonance">Free, forced and resonant motion</h2>

A free oscillator moves after an initial disturbance at its natural frequency. Damping transfers its mechanical energy to surroundings; amplitude decreases. In forced motion a periodic driver supplies energy and fixes the steady response frequency. Near the natural frequency the transfer per cycle can sustain a large amplitude: resonance.

Greater damping generally lowers and broadens the displacement-amplitude response peak, reducing sharp frequency selection. The peak is near the natural frequency for light damping; do not claim it is exactly equal for every damping level. Examples include tuning a vibration system and limiting unwanted machine/bridge motion.

<div class="lesson-check" markdown="1">
<!-- task:resonance-check -->
At the same driving amplitude a lightly damped oscillator has its largest displacement near 2.0 Hz. With extra damping the peak becomes lower and broader. Explain energy transfer, the frequency choice for a large response, and why a bridge should avoid sustained driving near its natural frequency. Does a large driving force alone establish resonance?
<!-- /task:resonance-check -->
<details markdown="1"><summary>Hint</summary>
Compare driver frequency with the system's natural frequency and energy supplied with losses.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Drive near 2.0 Hz for the large lightly damped response. The driver transfers energy repeatedly in a favourable phase; at steady amplitude the mean input balances dissipation. More damping increases losses and reduces the peak. Avoid persistent excitation near the bridge's natural modes. A large force at a very different frequency is forced motion but is not evidence of resonance.
</details>
</div>

<h2 id="retry">Repair, then change the evidence</h2>

<div class="lesson-check" markdown="1">
<!-- task:oscillation-retry -->
Retry without the previous solution. A spring gives T² = 0.80m + 0.020, with T in s and m in kg. Estimate k and explain why forcing the line through zero changes the model. A pendulum gives T² = 4.1L + 0.03, with L in m. Estimate g and name a length error that could give a positive intercept. If a spring's amplitude halves with negligible change of period, what fraction of its original oscillation energy remains?
<!-- /task:oscillation-retry -->
<details markdown="1"><summary>Hint</summary>
Read gradients separately from intercepts. Oscillation energy scales with A².
</details>
<details markdown="1"><summary>Solution and repair</summary>
k = 4π²/0.80 = 49.3 N/m; a zero-constrained line discards the measured offset and changes the estimated slope. Investigate spring effective mass rather than assuming the offset is noise. g = 4π²/4.1 = 9.63 m/s². If every recorded L is shorter than pivot-to-centre length by a fixed amount, T² has a positive intercept. Halving amplitude leaves one quarter of the energy. If period still confuses you, return to period-models; if intercepts confuse you, reprocess practical-data.
</details>
</div>


<h3 id="resonance-retry">Retry the resonance explanation</h3>

<div class="lesson-check" markdown="1">
<!-- task:resonance-retry -->
Retry: a machine has a natural frequency near 5 Hz. It is driven at 12 Hz by a large force; a second trial drives at 5 Hz with the same force amplitude. Predict which is more likely to produce a resonance peak for light damping. Explain how added damping changes the peak and how a steady forced amplitude can persist although energy is continually dissipated.
<!-- /task:resonance-retry -->
<details markdown="1"><summary>Hint</summary>
Compare frequencies and average input/loss, not just force size.
</details>
<details markdown="1"><summary>Solution and repair</summary>
The 5 Hz trial is near resonance; a large 12 Hz driving force alone is not resonance evidence. Added damping lowers/broadens the displacement peak. At steady amplitude the driver replaces the mean energy dissipated each cycle. A free damped oscillator has no continuing driver and its energy falls.
</details>
</div>

<h2 id="sources-and-next">Scope and next step</h2>

OxfordAQA 9630 3.5.1–3.5.2 / RP4. Tasks are self-written; numerical/schematic records are constructed. Checking criteria are not official marks. [Official specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf).

[Previous](/alevel/as-physics/emf-and-internal-resistance/) · [Next](/alevel/as-physics/progressive-and-stationary-waves/) · [Course](/alevel/as-physics/)

{% include exam_topic_practice.html %}
