---
title: Capacitance
layout: subjects
mathjax: true
grade: a2
subject: a2-physics
permalink: /alevel/a2-physics/capacitance/
toc_headings: h2
study_page: true
---

[A2 Physics](/alevel/a2-physics/) · PH03 · 3.8.4 Capacitors

Explain how a capacitor stores charge and energy, calculate capacitance, and predict changes when its geometry or dielectric changes.

- **Learning:** start with [charge and capacitance](#charge-and-capacitance), then connect [graphs](#graphs-and-constant-current) to [stored energy](#energy-stored).
- **Homework help:** identify what is fixed before choosing an equation. A connected ideal supply fixes potential difference; an isolated capacitor retains its free charge.
- **Revision:** try [practice](#practice) with the hints and solutions closed.

**Before you start:** review [Electric Fields](/alevel/a2-physics/electric-fields/). Use $\varepsilon_0=8.85\times10^{-12}\,\mathrm{F\,m^{-1}}$ and $e=1.60\times10^{-19}\,\mathrm C$ unless stated otherwise. Convert $\mathrm{mF}$, $\mathrm{\mu F}$, $\mathrm{nF}$ and $\mathrm{pF}$ to farads, and lengths and areas to SI units. Keep extra digits until the final answer.

Worked examples and Questions 1–5 are self-written. Questions 6–8 are adapted from OxfordAQA PH03 papers. Their wording is simplified and no official marks are assigned. Diagrams are not to scale. Charging and discharging through a fixed resistor, including required practical 6, are covered in the next lesson.

## Charge and Capacitance

**Think first:** a capacitor's plates carry $+Q$ and $-Q$. Does “charge stored” mean $2Q$, zero, or $Q$?

<details markdown="1">
<summary>Check your explanation</summary>

The charge stored is $Q$: the magnitude of charge on either plate. The two plates together have zero net charge in this ideal model, but they have separated charge and store energy.

</details>

A **capacitor** consists of two conductors insulated from each other. When connected to a supply, one plate gains electrons and becomes negative; the other loses an equal number of electrons and becomes positive. Electrons move through the external circuit, not across the insulating gap in the ideal capacitor.

**Capacitance** is the charge stored per unit potential difference across the capacitor:

$$\boxed{C=\frac{Q}{V}}.$$

Here $Q$ is the magnitude of charge on either plate and $V$ is the potential difference magnitude. The unit is the **farad**, with $1\,\mathrm F=1\,\mathrm{C\,V^{-1}}$. A capacitor of capacitance $1\,\mathrm F$ stores $1\,\mathrm C$ on each plate at $1\,\mathrm V$.

For fixed geometry and a linear dielectric, $C$ is constant: increasing $V$ increases $Q$ in the same proportion. A larger capacitance means more charge at the **same** potential difference. It does not mean that increasing the applied voltage makes this capacitor's capacitance larger.

$$Q=CV,\qquad V=\frac{Q}{C}.$$

### Example 1: charge and electrons

A $220\,\mathrm{\mu F}$ capacitor is charged to $9.0\,\mathrm V$. Find its stored charge and the number of excess electrons on its negative plate.

$$C=220\times10^{-6}\,\mathrm F.$$

$$Q=CV=1.98\times10^{-3}\,\mathrm C.$$

$$\boxed{Q=2.0\,\mathrm{mC}}.$$

The plates carry approximately $+2.0\,\mathrm{mC}$ and $-2.0\,\mathrm{mC}$. The excess-electron count is:

$$N=\frac{Q}{e}\approx\boxed{1.2\times10^{16}}.$$

**Check:** the positive plate has lost the same number of electrons. Do not add the magnitudes of both plate charges when using $Q=CV$.

## Graphs and Constant Current

For constant capacitance, $Q=CV$ gives a straight line through the origin:

- On a graph with **$Q$ vertical and $V$ horizontal**, gradient $=C$.
- On a graph with **$V$ vertical and $Q$ horizontal**, gradient $=1/C$.

Read the axes and their units before calculating. A gradient in $\mathrm{\mu C\,V^{-1}}$ gives capacitance in $\mathrm{\mu F}$, not farads.

If a constant current $I$ flows for time $\Delta t$, the extra charge is $\Delta Q=I\Delta t$. With fixed $C$:

$$I=C\frac{\Delta V}{\Delta t}.$$

$$\boxed{C=\frac{I}{\text{gradient of a }V\text{–}t\text{ graph}}}.$$

Thus a constant charging current gives a linear rise in potential difference. $Q=It$ applies to the total stored charge only when the capacitor starts uncharged and the charging current is constant.

To measure capacitance this way, measure current in series and potential difference with a high-resistance voltmeter in parallel with the capacitor. Keep current constant using a suitable current source or by adjusting a variable resistor. Record $V$ at several times, plot $V$ against $t$, fit a straight line and use its gradient. A fixed resistor connected to a constant-voltage supply does **not** keep the charging current constant; that case is studied next.

### Example 2: charging from a non-zero voltage

A capacitor charges at a constant current of $20\,\mathrm{\mu A}$. The gradient of its $V$–$t$ graph is $0.050\,\mathrm{V\,s^{-1}}$. Find its capacitance and the time needed to increase its potential difference from $2.0\,\mathrm V$ to $8.0\,\mathrm V$.

$$C=\frac{20\times10^{-6}}{0.050}=\boxed{400\,\mathrm{\mu F}}.$$

Use the change in voltage, not the final voltage:

$$\Delta t=\frac{8.0-2.0}{0.050}=\boxed{120\,\mathrm s}.$$

$$\Delta Q=I\Delta t=\boxed{2.4\,\mathrm{mC}}.$$

**Check:** the final charge is $C(8.0)=3.2\,\mathrm{mC}$. It includes the initial $0.80\,\mathrm{mC}$ as well as the extra charge delivered during these $120\,\mathrm s$.

## Parallel-Plate Capacitors

For broad parallel plates with a uniform gap, neglecting edge effects:

$$\boxed{C=\frac{\varepsilon_0\varepsilon_r A}{d}}.$$

Here $A$ is the **overlapping area of one plate**, $d$ is the separation, and $\varepsilon_r$ is the **relative permittivity**, also called the **dielectric constant**. The dielectric must completely fill the gap for this form of the equation. For vacuum, $\varepsilon_r=1$; air can usually be treated as having relative permittivity approximately 1.

Larger area gives larger capacitance. Larger separation gives smaller capacitance. With the same geometry, a dielectric of larger relative permittivity gives larger capacitance. Increasing $V$ does not appear in this geometry equation.

For the empty gap, $E_{\text{field}}=V/d$ and $Q/A=\varepsilon_0E_{\text{field}}$, giving $Q/V=\varepsilon_0A/d$. A fully filling linear dielectric multiplies this capacitance by $\varepsilon_r$.

**Common mistakes:** using the sum of both plate areas, converting $\mathrm{cm^2}$ as if it were $\mathrm{cm}$, or putting a partially filled gap into this simple formula without accounting for its geometry.

### Example 3: plate geometry

A parallel-plate capacitor has overlapping area $0.012\,\mathrm{m^2}$ and separation $0.50\,\mathrm{mm}$. A dielectric of relative permittivity 3.0 fills the gap. Find its capacitance and charge at $12\,\mathrm V$.

$$d=5.0\times10^{-4}\,\mathrm m.$$

$$C=\frac{(8.85\times10^{-12})(3.0)(0.012)}{5.0\times10^{-4}}.$$

$$\boxed{C=6.4\times10^{-10}\,\mathrm F=640\,\mathrm{pF}}.$$

Using the unrounded capacitance:

$$Q=CV\approx\boxed{7.6\,\mathrm{nC}}.$$

The field strength is $V/d=2.4\times10^4\,\mathrm{V\,m^{-1}}$. If area doubles and separation halves, with the same dielectric, capacitance becomes four times as large.

## Energy Stored

Charging separates positive and negative charge. Work is done against the growing potential difference, and energy is stored in the electric field. A small additional charge $\Delta q$ requires work approximately $V\Delta q$, using the potential difference at that stage.

The total stored energy is the **area under a graph with $V$ vertical and $Q$ horizontal**. For constant $C$, this graph is a straight line through the origin, so its triangular area gives:

$$\boxed{E_{\text{stored}}=\frac12QV}.$$

Substituting $Q=CV$ gives two other useful forms:

$$\boxed{E_{\text{stored}}=\frac12CV^2}.$$

$$\boxed{E_{\text{stored}}=\frac{Q^2}{2C}}.$$

Stored energy is measured in joules. We add the subscript “stored” to distinguish this energy from electric field strength. For constant capacitance, doubling voltage doubles charge and makes stored energy four times larger.

<img src="/assets/img/physics-capacitance-graphs.svg" alt="A charge against voltage graph has gradient C. A voltage against charge graph has gradient one over C, and its triangular shaded area is the energy stored in the capacitor." width="400" height="600" data-lazy-ignore="true">

Swapping the axes also gives a triangle with numerical area $QV/2$ for a constant-capacitance capacitor. However, the work derivation adds $V\Delta Q$, and the graph gradient changes when the axes are swapped. Do not use the same gradient rule for both graphs.

If a capacitor discharges from $V_1$ to a non-zero $V_2$, the energy released is:

$$\boxed{\Delta E_{\text{released}}=\frac12C(V_1^2-V_2^2)}.$$

This is not $\tfrac12C(V_1-V_2)^2$. Energy remaining at the final voltage must be subtracted from the initial energy. Useful energy delivered to a device can be less than the released energy if there are losses elsewhere.

### Example 4: energy remaining after a pulse

A $470\,\mathrm{\mu F}$ capacitor falls from $12\,\mathrm V$ to $5.0\,\mathrm V$ while powering a pulse. Find its initial stored energy, remaining energy and released energy.

$$E_1=\frac12(470\times10^{-6})(12)^2\approx0.034\,\mathrm J.$$

$$E_2=\frac12(470\times10^{-6})(5.0)^2\approx0.0059\,\mathrm J.$$

Subtract the unrounded values:

$$\boxed{\Delta E_{\text{released}}=0.028\,\mathrm J}.$$

**Check:** the capacitor has not fully discharged. The released energy must be smaller than the initial stored energy.

When an initially uncharged capacitor is charged through a resistor from an ideal constant-voltage supply of voltage $V_s$, the supply transfers energy $QV_s=CV_s^2$ by the time charging is complete. Only $CV_s^2/2$ is stored; the other half is dissipated in the resistance. This result applies to that charging arrangement, not every possible charging method.

## Dielectrics and Polar Molecules

A **dielectric** is an electrical insulator. It increases capacitance without providing a conducting path across the gap.

A **polar molecule** has separated centres of positive and negative charge. Without an applied field, the molecular directions are generally random. In a field, the molecules tend to **rotate** so that their positive ends point along the field and their negative ends point against it. Thermal motion prevents perfect alignment in ordinary conditions.

The dielectric becomes **polarised**. Bound negative charge appears on the surface facing the positive plate; bound positive charge appears on the surface facing the negative plate. This creates an opposing field inside the dielectric. The material remains electrically neutral overall: polarisation is not free charge flowing across the insulator. Non-polar molecules can also be polarised by a small shift between their positive and negative charge distributions.

For the same plate geometry, with the gap completely filled:

$$\boxed{\varepsilon_r=\frac{C}{C_0}}.$$

$C_0$ is the empty-gap capacitance. Relative permittivity has no unit. At the **same** potential difference, $\varepsilon_r=Q/Q_0$ too; this charge-ratio statement does not describe an isolated capacitor, whose free plate charge remains fixed.

<img src="/assets/img/physics-capacitance-dielectric.svg" alt="Polar molecules turn so their negative ends face the positive upper plate and positive ends face the negative lower plate. The dielectric field opposes the plate field. With a connected supply voltage stays fixed; after isolation free plate charge stays fixed." width="400" height="620" data-lazy-ignore="true">

## Connected or Isolated?

Before calculating a change, state the electrical connection and identify the fixed quantity. Assume an ideal supply, negligible leakage, a linear dielectric, full insertion, and unchanged plate area and separation.

### Still connected to a constant-voltage supply

The supply holds $V$ fixed. Inserting a dielectric multiplies $C$ by $\varepsilon_r$. More free charge flows through the external circuit onto the plates, so $Q=CV$ increases by the same factor. Stored energy $CV^2/2$ also increases by that factor.

The resultant field in the uniform gap stays $V/d$, so it stays the same. The increased free plate charge offsets the opposing field caused by polarisation. Do not say “the dielectric reduces the field” without checking the connection condition.

### Disconnected and isolated

There is no path for free charge to enter or leave either plate, so $Q$ stays fixed. Inserting a dielectric still multiplies $C$ by $\varepsilon_r$, but $V=Q/C$ falls by that factor. The resultant field $V/d$ and stored energy $Q^2/(2C)$ also fall by that factor.

Charge conservation does not require the stored energy to stay constant. The capacitor can pull the dielectric into the gap; the decrease in stored energy can become mechanical work, or other transfers depending on how insertion is controlled. With a connected supply, energy transferred by the supply must also be included.

| After full insertion | Connected supply | Isolated capacitor |
|---|---|---|
| Fixed quantity | $V$ | $Q$ |
| Capacitance | $\varepsilon_r C_0$ | $\varepsilon_r C_0$ |
| Free plate charge | $\varepsilon_r Q_0$ | $Q_0$ |
| Potential difference | $V_0$ | $V_0/\varepsilon_r$ |
| Field-strength magnitude | $E_0$ | $E_0/\varepsilon_r$ |
| Stored energy | $\varepsilon_r E_{\text{stored},0}$ | $E_{\text{stored},0}/\varepsilon_r$ |

Here the subscript 0 labels the original empty-gap values for each case. The table is for unchanged geometry; if $d$ changes, re-evaluate $E_{\text{field}}=V/d$ rather than copying the field row.

### Example 5: the same dielectric, two different connections

A capacitor has empty-gap capacitance $22\,\mathrm{\mu F}$ and is initially charged to $12\,\mathrm V$. A dielectric of relative permittivity 4.0 completely fills the gap without changing the plate separation. Find its capacitance, charge, voltage and energy after insertion in the two connection cases.

Initially:

$$Q_0=C_0V_0=264\,\mathrm{\mu C}.$$

$$E_{\text{stored},0}=\frac12C_0V_0^2=1.584\,\mathrm{mJ}.$$

In both cases, $C=4C_0=88\,\mathrm{\mu F}$.

**Connected:** $V=12\,\mathrm V$, so $Q=1056\,\mathrm{\mu C}\approx1.1\,\mathrm{mC}$. Energy increases to $6.336\,\mathrm{mJ}\approx\boxed{6.3\,\mathrm{mJ}}$. The supply delivers the extra charge, and field strength stays the same.

**Isolated:** $Q=264\,\mathrm{\mu C}$, so $V=Q/C=\boxed{3.0\,\mathrm V}$. Energy decreases to $0.396\,\mathrm{mJ}\approx\boxed{0.40\,\mathrm{mJ}}$. Field strength is one quarter of its initial value.

**Check:** increased capacitance does not always mean increased stored energy. The connection condition determines which energy formula is easiest to use.

## Practice

Start each change question by writing “fixed $V$” or “fixed $Q$”, with the reason. Show equations and units.

### Question 1: capacitance and net charge

A capacitor stores $60\,\mathrm{\mu C}$ at $12\,\mathrm V$. Find its capacitance, the charge on each plate and the net charge of the two plates together. What charge is stored at $18\,\mathrm V$ if its geometry and dielectric remain unchanged?

<details markdown="1">
<summary>Hint</summary>

The quoted stored charge is the magnitude on one plate, not their sum.

</details>

<details markdown="1">
<summary>Solution</summary>

$$C=\frac{60\times10^{-6}}{12}=\boxed{5.0\,\mathrm{\mu F}}.$$

The plates carry $+60\,\mathrm{\mu C}$ and $-60\,\mathrm{\mu C}$, with zero net charge together. At $18\,\mathrm V$, $Q=CV=\boxed{90\,\mathrm{\mu C}}$. The capacitance stays $5.0\,\mathrm{\mu F}$.

</details>

### Question 2: changing plate separation

An air-gap capacitor remains connected to an ideal constant-voltage supply. Its plate separation is doubled while overlapping area stays fixed. State how capacitance, charge, field strength and stored energy change. Repeat for a capacitor disconnected and isolated before the separation changes.

<details markdown="1">
<summary>Hint</summary>

In both cases $C\propto1/d$. The connection decides whether $V$ or $Q$ is fixed.

</details>

<details markdown="1">
<summary>Solution</summary>

**Connected:** fixed $V$. Capacitance halves, charge halves, field strength $V/d$ halves, and stored energy $CV^2/2$ halves.

**Isolated:** fixed $Q$. Capacitance halves, voltage doubles, and stored energy $Q^2/(2C)$ doubles. Field strength stays the same because both $V$ and $d$ double. Separating the attracting plates requires mechanical work; for the isolated ideal system it increases the stored energy.

</details>

### Question 3: graph axes and units

A straight $Q$–$V$ graph passes through the origin and the point $(8.0\,\mathrm V,24\,\mathrm{\mu C})$. Find the capacitance and stored energy there. What is the gradient of the corresponding $V$–$Q$ graph when $Q$ is measured in coulombs?

<details markdown="1">
<summary>Hint</summary>

The first graph has charge vertically. Swapping the axes inverts the gradient.

</details>

<details markdown="1">
<summary>Solution</summary>

$$C=\frac{24\times10^{-6}}{8.0}=\boxed{3.0\,\mathrm{\mu F}}.$$

$$E_{\text{stored}}=\frac12QV=\boxed{96\,\mathrm{\mu J}}.$$

The $V$–$Q$ gradient is $1/C=\boxed{3.3\times10^5\,\mathrm{V\,C^{-1}}}$. Giving $0.33$ without accounting for the microcoulomb axis scale gives the wrong SI value.

</details>

### Question 4: energy delivered to a device

A $1000\,\mathrm{\mu F}$ capacitor falls from $10\,\mathrm V$ to $6.0\,\mathrm V$. What energy is released? If 75% reaches a device as useful energy, find that useful energy. Explain why the capacitor's initial energy is not the released energy.

<details markdown="1">
<summary>Hint</summary>

Subtract final stored energy from initial stored energy before applying efficiency.

</details>

<details markdown="1">
<summary>Solution</summary>

$$\Delta E_{\text{released}}=\frac12(0.0010)(10^2-6.0^2).$$

$$\boxed{\Delta E_{\text{released}}=0.032\,\mathrm J}.$$

Useful energy is $0.75(0.032)=\boxed{0.024\,\mathrm J}$. Initial energy is $0.050\,\mathrm J$, but $0.018\,\mathrm J$ remains at $6.0\,\mathrm V$.

</details>

### Question 5: explaining dielectric action

A dielectric of relative permittivity 2.5 fully fills an air-gap capacitor without changing its geometry. Describe how polar molecules respond to the field. How could you determine the relative permittivity using a capacitance meter? At fixed voltage, what happens to free plate charge and resultant field strength?

<details markdown="1">
<summary>Hint</summary>

Distinguish bound charge in the dielectric from free charge supplied to the metal plates.

</details>

<details markdown="1">
<summary>Solution</summary>

Polar molecules tend to rotate with positive ends along the field and negative ends against it. This gives bound negative charge facing the positive plate and bound positive charge facing the negative plate. The polarisation field opposes the field from free plate charge.

Measure $C_0$ with the gap empty and $C$ with the dielectric fully inserted, maintaining the same overlapping area and separation. Then $\varepsilon_r=C/C_0$. Use spacers to maintain the same separation if removing the sheet would otherwise let the plates move.

At fixed voltage, capacitance and free plate charge increase by a factor of 2.5. The supply provides the extra free charge. The resultant field stays $V/d$, so it stays unchanged. The dielectric is still an insulator.

</details>

### Question 6: a constant charging current

**Adapted from OxfordAQA PH03, January 2020, Question 23.**

A $180\,\mathrm{mF}$ capacitor is charged by a constant current for $36\,\mathrm s$. Its potential difference rises from $3.0\,\mathrm V$ to $9.0\,\mathrm V$. Find the current.

<details markdown="1">
<summary>Hint</summary>

Convert millifarads to farads. Use the change in stored charge during the stated time.

</details>

<details markdown="1">
<summary>Solution</summary>

$$\Delta Q=C\Delta V.$$

$$(0.180)(9.0-3.0)=1.08\,\mathrm C.$$

$$I=\frac{\Delta Q}{36}=\boxed{0.030\,\mathrm A=30\,\mathrm{mA}}.$$

The final charge includes charge already stored at $3.0\,\mathrm V$. Do not use $C(9.0)/36$ as the charging current.

</details>

### Question 7: dielectric insertion after isolation

**Adapted from OxfordAQA PH03, January 2020, Question 22.** A relative permittivity is supplied here to extend the original comparison.

A parallel-plate capacitor is charged and then isolated. A dielectric of relative permittivity 3.0 fully fills the gap, with no change in geometry or loss of free plate charge. Give the new capacitance, potential difference and stored energy in terms of their initial values. Explain what stays fixed.

<details markdown="1">
<summary>Hint</summary>

Isolation fixes charge, not voltage. Choose the energy formula with fixed charge.

</details>

<details markdown="1">
<summary>Solution</summary>

Free plate charge stays $Q_0$ because there is no conducting path to a supply. Capacitance becomes $3C_0$. Then:

$$\boxed{V=\frac{V_0}{3}}.$$

$$\boxed{E_{\text{stored}}=\frac{E_{\text{stored},0}}{3}}.$$

Both voltage and stored energy decrease, agreeing with the original paper's comparison. Increased capacitance alone is not enough to conclude that stored energy increases.

</details>

### Question 8: field strength after inserting a dielectric

**Adapted from OxfordAQA PH03, June 2024, Question 17.**

An air-gap capacitor initially stores charge $Q_0$ and has field strength $E_0$. The supply is disconnected, then a dielectric completely fills the gap without changing plate separation. State how free plate charge and resultant field strength change. How would the answer differ if the original constant-voltage supply stayed connected?

<details markdown="1">
<summary>Hint</summary>

Use $V=Q/C$ and $E_{\text{field}}=V/d$. The plate separation stays fixed.

</details>

<details markdown="1">
<summary>Solution</summary>

**Disconnected:** free plate charge remains $Q_0$. Capacitance increases, so voltage decreases. Resultant field strength falls to $E_0/\varepsilon_r$, below $E_0$, agreeing with the official answer.

**Connected:** voltage stays fixed. Free plate charge increases to $\varepsilon_rQ_0$, and resultant field strength stays $E_0$. The supply supplies additional charge to maintain its voltage.

</details>

## Quick Reference

| Use | Equation and condition |
|---|---|
| Capacitance | $C=Q/V$; $Q$ is the magnitude on one plate |
| Parallel plates | $C=\varepsilon_0\varepsilon_rA/d$; uniform, fully filled gap |
| Relative permittivity | $\varepsilon_r=C/C_0$; same geometry |
| Constant current | $\Delta Q=I\Delta t$ |
| Capacitance from constant-current graph | $C=I/(\Delta V/\Delta t)$ |
| Stored energy | $E_{\text{stored}}=QV/2=CV^2/2=Q^2/(2C)$ |
| Released energy | $C(V_1^2-V_2^2)/2$; fixed $C$ |
| Connected ideal supply | $V$ fixed; free charge can change |
| Isolated capacitor | Free $Q$ fixed; voltage can change |

Before moving on, check that you can identify the charge on one plate, interpret both graph gradients, derive stored energy from a graph, explain polar molecule rotation, and choose the correct fixed quantity before predicting a change.

[Previous lesson: Electric Fields](/alevel/a2-physics/electric-fields/) · [PH03 course index](/alevel/a2-physics/) · [Next lesson: Capacitor Charge and Discharge](/alevel/a2-physics/capacitor-charge-and-discharge/)

<details markdown="1">
<summary>Sources and exam wording</summary>

This lesson follows Section 3.8.4 of the [OxfordAQA Physics specification](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-physics-specification.pdf): capacitance, parallel-plate geometry, relative permittivity, dielectric action and stored energy. Fixed-resistor charging and discharging, including required practical 6, belong to the next lesson under Section 3.9.1.

Textbook support: Jim Breithaupt, *Oxford International AQA Examinations: International A Level Physics*, Sections 19.1–19.3, printed pp. 339–345. The teacher's AS handouts inform short explanations, graph reading and staged exercises. Symbols follow the textbook, with a stored-energy subscript where needed to distinguish energy from field strength.

Questions 6–8 are adapted from OxfordAQA PH03 January 2020 Questions 23 and 22, and June 2024 Question 17. Official mark schemes were consulted before drafting. Answers, energy changes and connection conditions were checked independently rather than copied from textbook answer lists.

</details>
