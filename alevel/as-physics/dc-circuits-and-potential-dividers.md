---
title: "DC Circuits and Potential Dividers"
layout: subjects
mathjax: true
grade: as
subject: as-physics
permalink: /alevel/as-physics/dc-circuits-and-potential-dividers/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">Which quantities are shared?</h2>

In a series path every component passes the same steady current. Parallel branches share the same pair of endpoints and hence the same pd. These facts follow from conservation of charge and energy, not from resistor appearance. You will reduce a network, check its conservation laws and design a sensor output. Prerequisite: [electrical definitions and meter placement](/alevel/as-physics/charge-current-and-potential/).

<h2 id="circuits">Build a circuit equation from the connections</h2>

At a junction, total current in equals total current out in a steady circuit. Around a complete loop, the signed energy changes per coulomb sum to zero: include source gains and component drops. Series resistances add because their pd drops add at the same current. Parallel conductances add because branch currents add at a common pd:

$$R_s=R_1+R_2+\cdots,\qquad \frac1{R_p}=\frac1{R_1}+\frac1{R_2}+\cdots$$

Electrical energy $W=VQ$ and $I=Q/t$ give $P=VI$ and $E=VIt$ for steady values. With $R=V/I$, $P=I^2R=V^2/R$ at that operating point. These equal expressions do not make a lamp’s resistance temperature-independent.

<h2 id="divider">A divider is a series circuit with an output tap</h2>

For an unloaded divider with output across $R_2$:

$$V_{\mathrm{out}}=V_{\mathrm{in}}\frac{R_2}{R_1+R_2}$$

Both resistors share current, so the larger one has the larger pd. “Unloaded” means negligible output current. A load in parallel with $R_2$ changes the lower equivalent resistance: first calculate that parallel combination, then use the divider. Do not use the original ratio after changing the circuit.

![Divider schematic: R1 is above the output junction and R2 below it; the output is measured between the junction and the zero-volt lower terminal. An optional load connects between those same points.](/assets/img/physics-as-divider.svg){: width="480" height="330" }

<div class="worked-example" markdown="1">
**Worked example — self-written.**
<!-- task:divider-worked -->
A 9.0 V ideal supply feeds a 3.0 kΩ upper resistor and 6.0 kΩ lower resistor in series. Output is across the lower resistor. Find the unloaded output. Then connect a 6.0 kΩ load across that output and calculate the new output and the currents through the upper resistor and load.
<!-- /task:divider-worked -->

Unloaded output is $9(6)/(3+6)=6.0$ V. With the load, lower equivalent resistance is $6\parallel6=3$ kΩ, so output is 4.5 V. Upper current is $(9-4.5)/3000=1.5$ mA; load current is $4.5/6000=0.75$ mA. The other 0.75 mA passes through the lower divider resistor. The junction check prevents calling source current “load current”.
</div>

<h2 id="network-check">An unfamiliar combination</h2>

<div class="lesson-check" markdown="1">
<!-- task:circuit-network -->
A 12 V ideal source supplies a 4.0 Ω resistor in series with a parallel pair of 6.0 Ω and 3.0 Ω. Find source current, each branch current and total power. Verify both a junction relation and an energy-per-charge loop relation.
<!-- /task:circuit-network -->
<details markdown="1"><summary>Hint</summary>
Reduce the parallel pair before the series sum. Recover branch values using its shared pd.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Parallel resistance 2.0 Ω, total 6.0 Ω, source current 2.0 A. The parallel pd is 4.0 V, giving 2/3 A and 4/3 A; these sum to 2.0 A. The series resistor has 8.0 V drop, so each loop has 8.0 + 4.0 = 12 V. Source power is 24 W, equal to 16 W in the series resistor and 8 W in the parallel pair. If currents were divided equally, revisit which quantity parallel branches share.
</details>
</div>

<h2 id="sensor-check">Choose a useful output direction</h2>

<div class="lesson-check" markdown="1">
<!-- task:circuit-sensor -->
A 6.0 V unloaded divider has a 2.0 kΩ fixed upper resistor and an NTC lower resistor. Its NTC resistance falls from 4.0 kΩ to 1.0 kΩ on heating. Find both output voltages across the NTC and explain how to reverse the temperature trend at the chosen output. Replace the NTC by a lower LDR whose resistance decreases in brighter light: predict the output change. Describe how a variable resistor or three-terminal sliding contact can provide adjustable output.
<!-- /task:circuit-sensor -->
<details markdown="1"><summary>Hint</summary>
Name the two points across which output is taken before predicting a trend.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Across the NTC, output changes from $6(4)/6=4.0$ V to $6(1)/3=2.0$ V. Taking output across the upper fixed resistor reverses that trend: 2.0 to 4.0 V. A lower LDR becoming less resistive in brighter light lowers the stated output. A variable resistor changes the ratio; a sliding contact on a track across the supply taps an adjustable fraction. Using a potentiometer for null measurement is outside this scope. If the trend was reversed, redraw the endpoints and retry with the loaded LDR below.
</details>
</div>

<h2 id="cells-check">The connections matter for cells too</h2>

Aligned cells in series add emf; reversed polarity subtracts it. Identical ideal cells in parallel have the same emf as one cell, sharing the load current. Real internal resistances and cell matching matter: “identical” is a model condition, not advice to parallel arbitrary batteries.

<div class="lesson-check" markdown="1">
<!-- task:circuit-cells -->
Three identical ideal 1.5 V cells are connected in the same polarity, first in series and then in parallel, across 9.0 Ω. Find load voltage and current in each case and current from each parallel cell. Explain why paralleling identical cells does not triple voltage, and state which idealisation must be reconsidered for high currents.
Assume equal parallel-cell current sharing, as the limiting model of matched cells with equal small internal resistances.
<!-- /task:circuit-cells -->
<details markdown="1"><summary>Hint</summary>
Parallel cells connect the same two potentials; series cells successively add energy per coulomb.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Series: 4.5 V and 0.50 A. Parallel: 1.5 V and 1/6 A in the load; each cell supplies 1/18 A. Parallel connection shares current without adding successive potential gains. At high current, internal resistance, ratings and heating must be included; the [next lesson](/alevel/as-physics/emf-and-internal-resistance/) develops that model.
</details>
</div>

Ideal voltage sources determine the parallel terminal voltage but not individual source currents. The cell-sharing calculation additionally assumes equal sharing, as the limit of matched equal small internal resistances.

<h2 id="retry">A loaded sensor in a new circuit</h2>

<div class="lesson-check" markdown="1">
<!-- task:circuit-retry -->
An 8.0 V ideal supply feeds equal 4.0 kΩ divider resistors. An 8.0 kΩ load is placed across the lower resistor. Find the loaded output and branch currents. Then replace the lower divider resistor by an LDR, keeping the load: predict the direction of output change when illumination increases. Explain why a source-current measurement is not the load-current measurement.
<!-- /task:circuit-retry -->
<details markdown="1"><summary>Hint</summary>
Reduce the lower resistor and load together; retain the two output branches.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Lower equivalent resistance is $4\parallel8=8/3$ kΩ, giving $V_{\mathrm{out}}=8(8/3)/(4+8/3)=3.20$ V. Upper/source current is 1.20 mA; lower-resistor current is 0.800 mA and load current is 0.400 mA. Their sum checks the junction. Brighter light lowers the LDR resistance and its parallel equivalent, lowering output. Later use [Unit 2 review](/alevel/as-physics/unit-2-review/) to choose between circuit and wave models without headings telling you which.
</details>
</div>


<h2 id="sources-and-next">Scope and next step</h2>

OxfordAQA 9630 §3.4.4–3.4.5. Tasks are self-written; numerical/schematic records are constructed. Checking criteria are not official marks. [Official specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf).

[Previous](/alevel/as-physics/resistance-and-resistivity/) · [Next](/alevel/as-physics/emf-and-internal-resistance/) · [Course](/alevel/as-physics/)

{% include exam_topic_practice.html %}
