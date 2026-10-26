---
title: "Charge, Current and Potential Difference"
layout: subjects
mathjax: true
grade: as
subject: as-physics
permalink: /alevel/as-physics/charge-current-and-potential/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">Charge circulates; energy is transferred</h2>

A lamp transfers supply energy without consuming the charge passing through it. Conventional current follows positive-charge flow; mobile electrons in metal drift oppositely. You will distinguish flow rate from energy per charge and select meter connections. Prerequisites are [energy](/alevel/as-physics/work-energy-power/) and ratios.

<h2 id="definitions">Three ratios answer different questions</h2>

$$I=\frac{\Delta Q}{\Delta t},\qquad V=\frac{W}{Q},\qquad R=\frac{V}{I}$$

$1\,\mathrm{A}=1\,\mathrm{C\,s^{-1}}$, $1\,\mathrm{V}=1\,\mathrm{J\,C^{-1}}$, $1\,\Omega=1\,\mathrm{V\,A^{-1}}$. Resistance is an operating-point ratio, not a claim that voltage is proportional to current. For non-steady current, charge is the current–time area; one instantaneous reading times the entire duration needs a constant-current assumption.

<div class="worked-example" markdown="1">
**Worked example — self-written.**
<!-- task:charge-worked -->
A component carries a steady 0.20 A for 30 s at 6.0 V. Find the charge, transferred energy and resistance. Explain why these results do not establish temperature-independent resistance.
<!-- /task:charge-worked -->

Since current and pd are steady, $Q=It=6.0\,\mathrm{C}$, $W=VQ=36\,\mathrm{J}$ and $R=30\,\Omega$. Charge flow rate is unchanged through a steady series component while energy per charge changes. A different temperature may give a different resistance.
</div>

<h2 id="measurement">Put the meter on the right boundary</h2>

An ammeter measures charge flow through itself: put it in series with the target branch. An ideal ammeter has zero resistance. A voltmeter compares two endpoints: connect it across the component. An ideal voltmeter has infinite resistance and draws no current. Real instruments can load the circuit. Use low voltage and protective series resistance; an ammeter across a source can produce a damaging short circuit.

<h2 id="charge-check">Reconstruct the quantities</h2>

<div class="lesson-check" markdown="1">
<!-- task:charge-check -->
A component transfers 48 J while 8.0 C passes in 4.0 s. Find pd, current and resistance if both current and pd are steady. Explain in English whether charge is used up. Draw where an ammeter and voltmeter should connect.
<!-- /task:charge-check -->
<details markdown="1"><summary>Hint</summary>
Recover energy per coulomb and coulombs per second separately.
</details>
<details markdown="1"><summary>Solution and repair</summary>
$V=6.0\,\mathrm{V}$, $I=2.0\,\mathrm{A}$, $R=3.0\,\Omega$. “Charge is conserved; the component transfers energy, not charge into heat.” Ammeter in the branch, voltmeter across the endpoints. If energy and charge were confused, revisit the definitions and retry below.
</details>
</div>

<h2 id="measurement-check">Correct the proposed measurement</h2>

<div class="lesson-check" markdown="1">
<!-- task:meter-check -->
An ideal ammeter is connected directly across a 6.0 V ideal source, while an ideal voltmeter is placed in series with a resistor. Explain why neither arrangement measures the intended quantity. Sketch corrected connections and state how real meter resistances can change the circuit.
<!-- /task:meter-check -->
<details markdown="1"><summary>Hint</summary>
Predict each meter’s effect using its ideal resistance before drawing the correction.
</details>
<details markdown="1"><summary>Solution and repair</summary>
The ideal ammeter offers a zero-resistance path across an ideal source: this model has no finite steady-current solution. Real current is limited by nonideal source, leads and meter and may damage them. The series ideal voltmeter opens the path, giving zero current. Correctly use a series ammeter and parallel voltmeter. Real voltmeter current adds a branch; real ammeter resistance adds series pd. Do not try the incorrect connection.
</details>
</div>

<h2 id="retry">A new operating point and a real instrument</h2>

<div class="lesson-check" markdown="1">
<!-- task:charge-retry -->
In a new steady circuit 12 C passes through a component in 6.0 s, transferring 36 J there. Find current, pd and resistance. A real voltmeter is placed across it and draws a small current: distinguish component current from source current and identify the omitted ideal-meter assumption.
<!-- /task:charge-retry -->
<details markdown="1"><summary>Hint</summary>
After finding the ratios, use conservation at the branch point.
</details>
<details markdown="1"><summary>Solution and repair</summary>
$I=2.0\,\mathrm{A}$, $V=3.0\,\mathrm{V}$, $R=1.5\,\Omega$. Source current equals component current plus voltmeter current. The ideal-voltmeter model omitted the latter. Sketch its extra branch as a check. Later use [Unit 2 review](/alevel/as-physics/unit-2-review/) without these definitions visible.
</details>
</div>


<h2 id="sources-and-next">Scope and next step</h2>

OxfordAQA 9630 §3.4.1. Tasks are self-written; numerical/schematic records are constructed. Checking criteria are not official marks. [Official specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf).

[Previous](/alevel/as-physics/unit-1-review/) · [Next](/alevel/as-physics/resistance-and-resistivity/) · [Course](/alevel/as-physics/)
