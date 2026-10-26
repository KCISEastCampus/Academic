---
title: Cells Under Load — emf, Internal Resistance and RP3
layout: subjects
mathjax: true
grade: as
subject: as-physics
permalink: /alevel/as-physics/emf-and-internal-resistance/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">Why does the voltage fall when current rises?</h2>

A cell transfers energy to charge carriers, but some is transferred to internal energy inside the cell before energy reaches the external load. The terminal voltage can therefore differ from the cell’s emf. You will predict this difference, choose an RP3 circuit, and use data to test the constant-internal-resistance model.

Use [charge and potential difference](/alevel/as-physics/charge-current-and-potential/), [series circuits](/alevel/as-physics/dc-circuits-and-potential-dividers/) and [graph uncertainty](/alevel/as-physics/measurements-and-uncertainties/#gradient-and-intercept) if needed. All numerical records are constructed. This page prepares experimental decisions and analysis; it does not certify apparatus work.

<h2 id="energy-model">Follow one coulomb through the whole circuit</h2>

Emf $\varepsilon$ is the energy supplied by a source per unit charge; it is measured in volts, not newtons. Terminal pd $V$ is the energy per unit charge transferred in the external circuit. Model the discharging cell as an ideal emf in series with an internal resistance $r$. In steady current, the same charge passes through $r$ and the external load $R$:

$$\varepsilon=V+Ir,\qquad V=\varepsilon-Ir$$

$$I=\frac{\varepsilon}{R+r}$$

The $Ir$ term is energy transferred internally per coulomb, not missing charge. With an ideal voltmeter and no external load, $I=0$ and $V=\varepsilon$. As load resistance decreases, current rises and terminal voltage falls. The model assumes approximately constant $\varepsilon$ and $r$ over the current, temperature and time range studied; real cells can depart from it. Charging is outside this discharging equation’s sign convention.

<div class="worked-example" markdown="1">
**Worked example — self-written.**
<!-- task:emf-worked -->
A discharging cell has emf 1.50 V and internal resistance 0.30 Ω. It supplies a 2.70 Ω resistor. Find the current, terminal pd and internal power transfer. Check the power balance.
<!-- /task:emf-worked -->

Choose the complete loop to find current: $I=1.50/(2.70+0.30)=0.50\,\mathrm{A}$. The terminal pd is $V=1.50-0.50(0.30)=1.35\,\mathrm{V}$. Internal power is $I^2r=0.075\,\mathrm{W}$; external power is $IV=0.675\,\mathrm{W}$. Source power $I\varepsilon=0.750\,\mathrm{W}$ equals their sum. A terminal reading below emf is compatible with energy conservation.
</div>

<h2 id="rp3-method">Choose what to vary and what to measure</h2>

RP3 investigates terminal pd against current. Use a series ammeter and adjustable external load, with a voltmeter across the cell’s actual terminals. Unless a question states otherwise, the ammeter has zero resistance and voltmeter infinite resistance. In real work check their ranges, resolution and loading.

![RP3 schematic: ideal emf and internal resistance form the model cell; ammeter and adjustable load are in the outer loop, voltmeter connects across both cell terminals.](/assets/img/physics-as-emf-circuit.svg){: width="560" height="340" }

Before collecting data, choose a safe current range using a suitable current-limiting load, its power rating and the cell rating. Start with maximum external resistance. Never test by directly shorting a cell. Use low voltage, secure leads, keep the cell and resistor cool, and open the switch between readings. Choose several well-spaced load settings, recording paired current and terminal pd. Repeat settings in reverse order: a systematic drift can expose heating or cell depletion rather than random scatter. Check the sensor zero and voltage calibration independently. Conventional discharge current runs externally from P through the load to Q; the diagram shows the switch closed for a reading.

A $V$-against-$I$ graph is useful because the model predicts a straight line: intercept $\varepsilon$ in V, gradient $-r$ in V/A or Ω. Extrapolating to $I=0$ estimates emf; forcing the line through the origin would erase the quantity being measured. Curvature or a time-order trend is evidence to reconsider constant $r$, instrument loading or cell stability.

<h2 id="independent-practice">Make predictions and evaluate evidence</h2>

<h3 id="apparatus-check">Choose a measurement arrangement</h3>
<div class="lesson-check" markdown="1">
<!-- task:emf-apparatus -->
You have a cell, adjustable resistor, switch, ammeter and voltmeter. Sketch an RP3 circuit without consulting the example diagram. Choose the initial resistor setting, state where each meter connects and which paired quantities you will record. Explain why one loaded I,V pair, without a separate emf measurement, cannot determine both emf and internal resistance, and how resistor power rating constrains your choices.
<!-- /task:emf-apparatus -->
<details markdown="1"><summary>Hint</summary>
One instrument must sample loop current and the other must compare the two cell terminals.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Put the ammeter, switch and adjustable load in series with the cell, and the voltmeter across the cell’s two terminals. Begin at maximum load resistance, then collect several paired I and V values within current and power ratings. One pair gives one equation V = ε − Ir for two unknowns. A range of readings identifies gradient and intercept; check load dissipation using I²R or IV. If one point seemed sufficient, include the fixed-load proposal in the retry below.
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="circuit-check">A different load</h3>
<!-- task:emf-load -->
The same 1.50 V, 0.30 Ω model cell is connected first to 2.70 Ω and then to 1.20 Ω. Find the second current and terminal pd. Compare the external powers and explain why “lower load resistance always means greater useful power” cannot hold for every positive load resistance.
<!-- /task:emf-load -->
<details markdown="1"><summary>Hint</summary>
Keep the internal resistance in the loop. Consider the limiting external voltage as load resistance approaches zero.
</details>
<details markdown="1"><summary>Solution and repair</summary>
The second current is 1.0 A, terminal pd 1.20 V and external power 1.20 W, larger than 0.675 W initially. But for $R$ approaching zero, the model gives $I\to\varepsilon/r$ while $V=IR\to0$ and useful load power tends to zero. The observed increase cannot be extended to all loads. This is a model limit, not a short-circuit experiment. If you omitted internal resistance, return to [the energy model](#energy-model), then retry below.
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="data-check">What line can these readings support?</h3>
<!-- task:emf-data -->
Constructed paired readings are: I/A = 0.10, 0.20, 0.30, 0.40, 0.50; V/V = 1.47, 1.44, 1.40, 1.38, 1.35. Each voltage has an absolute uncertainty bound ±0.01 V; current uncertainty is negligible for this exercise. Plot the data with error bars, estimate emf and internal resistance, and check whether V = 1.50 − 0.30 I is compatible with every interval. Find the steepest and shallowest compatible gradients and explain why a line through just the middle readings is insufficient.
<!-- /task:emf-data -->
<details markdown="1"><summary>Hint</summary>
The endpoint intervals constrain the largest and smallest falls; check every intermediate interval too.
</details>
<details markdown="1"><summary>Solution and repair</summary>
A reasonable line gives emf about 1.50 V and $r\approx0.30\,\Omega$ (least-squares intercept is 1.498 V). The candidate predicts 1.47, 1.44, 1.41, 1.38, 1.35 V, all within bounds. Steepest and shallowest gradients are −0.35 and −0.25 V/A: lines $V=1.515-0.35I$ and $V=1.485-0.25I$ touch endpoint limits and remain inside all other intervals. Thus $r$ is bounded by 0.25–0.35 Ω under these assumptions. The gradient is negative; the resistance is positive. A two-point choice must still be tested against all observations. If you treated scatter as proof of changing resistance, revisit [the method](#rp3-method) and try the fresh data below.
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="design-check">Separate two explanations</h3>
<!-- task:emf-design -->
Later high-current readings lie below the earlier best-fit line. A student concludes that internal resistance increases with current. Give another explanation involving time or measurement, and design an additional comparison to distinguish it. Explain in English why repeating only high-current readings does not settle the issue.
<!-- /task:emf-design -->
<details markdown="1"><summary>Hint</summary>
Current and time may have changed together. A model parameter is not the only possible cause of a low reading.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Cell emf may have fallen with depletion, or the cell may have heated; voltage calibration could also drift. Revisit a low-current setting after the high-current readings, allow cooling, and compare ascending and descending sequences, with independent zero/calibration checks. “Current and elapsed time changed together. Repeating the same late setting cannot separate their effects.” A changed intercept points towards changed emf; a changed gradient suggests changed effective resistance, but both require evidence rather than a single outlier.
</details>
</div>

<h2 id="retry">Close the answers and test a fresh record</h2>

<div class="lesson-check" markdown="1">
<!-- task:emf-retry -->
A second cell gives constructed readings (I/A, V/V): (0.20, 1.16), (0.60, 1.08), (1.00, 1.00), with voltage bounds ±0.01 V. Infer a line, emf and internal resistance. Predict terminal pd at 0.80 A and the load resistance required. A later repeat of the 0.20 A setting gives 1.10 V with the same bound. Decide whether this is compatible with the first reading and say what must be investigated before combining all readings in one fit. For the first three readings only, find the extreme compatible gradients. A student proposes using only one fixed load with the voltmeter in series: correct the circuit and measurement plan, including a comparison that distinguishes elapsed-time drift from a current-dependent change.
<!-- /task:emf-retry -->
<details markdown="1"><summary>Hint</summary>
Use the whole decline to infer the gradient; treat the repeated setting as a separate stability check.
</details>
<details markdown="1"><summary>Solution and check</summary>
$V=1.20-0.20I$, so emf is 1.20 V and internal resistance 0.20 Ω. At 0.80 A, $V=1.04\,\mathrm{V}$ and $R=V/I=1.30\,\Omega$. Repeat intervals [1.15,1.17] and [1.09,1.11] V do not overlap. Investigate time dependence, heating, cell condition and calibration before assuming one stable cell model. More points cannot repair an invalid constant-parameter assumption. Extreme lines are $V=1.215-0.225I$ and $V=1.185-0.175I$, compatible with every original interval, so gradients range from −0.225 to −0.175 V/A. Put the voltmeter across the cell, ammeter and adjustable load in series, and use several loads. Repeat an early low-current setting after high-current work and compare reversed setting order to separate time drift from a current effect, checking calibration independently.
</details>
</div>

<h2 id="sources-and-next">Scope and later retrieval</h2>

OxfordAQA 9630 §3.4.6 and RP3; see the [official specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf). Self-written tasks, constructed data and schematic; checking criteria are not official marks. Later, start [Unit 2 review](/alevel/as-physics/unit-2-review/) with these answers closed.

[Previous: DC Circuits and Potential Dividers](/alevel/as-physics/dc-circuits-and-potential-dividers/) · [Next: Oscillations and Resonance](/alevel/as-physics/oscillations-and-resonance/) · [Course](/alevel/as-physics/)
