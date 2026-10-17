---
title: Electrode potentials and cells
layout: subjects
mathjax: true
lang: en
grade: a2
subject: a2-chemistry
permalink: /alevel/a2-chemistry/electrode-potentials/
toc_headings: h2, h3, h4
study_page: true
---

[CH03 course](/alevel/a2-chemistry/) · 3.1.9 · Textbook Chapter 20, printed pp. 308–321

## Introduction {#introduction}

- **Learning:** start with [Method](#method), then complete the numbered worked examples.
- **Homework help:** use [Method](#method) to decide which electrode is reduced and what to calculate first.
- **Revision:** attempt [Practice](#practice) before opening solutions, then use the [Quick reference](#quick-reference).

**Before you start:** identify oxidation/reduction, balance half-equations and calculate ion concentrations after dilution. Use the [AS prerequisite check](/alevel/a2-chemistry/#prerequisites) if needed. Every overall equation must conserve atoms and charge.

Use electrode potentials to compare the tendency of two couples to accept electrons. Review oxidation numbers and half-equation balancing before studying standard electrodes, reaction prediction and cell applications.

**Think first:** the potential for $\ce{Zn^{2+} + 2e^- -> Zn}$ is very negative. Does this make Zn²⁺ a strong oxidising agent? Decide which species accepts electrons and which releases them.

## Method {#method}

| Task | First step | Study and reattempt |
| --- | --- | --- |
| Set up a standard half-cell | List temperature, gas pressure and actual ion concentrations | [E1](#standard-electrodes) → [Q1](#q1), [Q2](#q2) |
| Write notation or predict an EMF | Put the chosen reduction on the right; subtract the left reduction potential | [Example 1](#example-1) → [Q5](#q5) |
| Predict whether reduction continues | Test each possible reduction separately against the same reducing agent | [Example 2](#example-2) → [Q3](#q3) |
| Write a recharge equation | Combine discharge half-equations before reversing | [Example 3](#example-3) → [Q4](#q4) |
| Explain a fuel cell or RP6 result | Identify electron/ion paths and check whether conditions are standard | [E3](#cells-and-practical) → [Q6](#q6) |

<span id="e1标准电极测量与电池表示"></span>

## E1: Standard electrodes, measurements and cell notation {#standard-electrodes}

A **standard electrode potential, $E^\circ$,** is measured relative to the standard hydrogen electrode under standard conditions. The standard hydrogen electrode (SHE) is assigned 0 V. Aqueous species have concentrations of 1.00 mol dm⁻³; gas pressure is 100 kPa and temperature is usually 298 K.

The SHE uses a platinum electrode/platinum-black surface, with H₂ gas contacting a solution containing H⁺:

$$\ce{2H+(aq) + 2e^- <=> H2(g)}.$$

A metal/metal-ion electrode uses the metal immersed in a solution containing its ions. If both redox species are in solution, use an inert conducting electrode such as Pt. A **salt bridge** allows ions to move, maintaining charge balance and completing the internal circuit. Electrons travel through the external wire, not through the salt bridge.

### Example 1 — cell notation and EMF (self-written) {#example-1}

**Question:** Use the standard reduction potentials Zn²⁺/Zn = −0.76 V and Cu²⁺/Cu = +0.34 V to write a spontaneous cell notation, balanced overall reaction and standard EMF.

**Method:** reduce the more positive couple on the right and oxidise the metal of the more negative couple on the left. The notation is:

$$\mathrm{Zn(s)\vert Zn^{2+}(aq)\Vert Cu^{2+}(aq)\vert Cu(s)}.$$

A single line denotes a phase boundary and a double line the salt bridge. Species in the same solution phase are separated by a comma. For this notation, $E_{cell}^\circ=E_{right}^\circ-E_{left}^\circ$. If the right electrode is the SHE and the left is Zn²⁺/Zn, the reading is $0-(-0.76)=+0.76$ V; reversing the connections reverses the sign.

1. Oxidation at the left electrode: $\ce{Zn -> Zn^{2+} + 2e^-}$.
2. Reduction at the right electrode: $\ce{Cu^{2+} + 2e^- -> Cu}$.
3. Cancel electrons and subtract the tabulated reduction potentials:

$$\ce{Zn + Cu^{2+} -> Zn^{2+} + Cu}$$

$$E_{cell}^\circ=0.34-(-0.76)=+1.10\,\mathrm V.$$

**Answer and independent check:** one Zn and one Cu appear on each side; both sides have charge +2, and two electrons cancel. The positive EMF agrees with the chosen spontaneous direction. Electrons flow from Zn to Cu in the external wire; ions carry charge in the salt bridge. Swapping the leads changes the measured sign, not the spontaneous chemical direction. Reattempt [Q5](#q5).

<span id="真题标准氢电极的条件"></span>

### Q1 — Past paper: standard hydrogen electrode conditions {#q1}

**OxfordAQA CH03 · June 2024 · 04.1 · 2 marks**

> State three conditions needed for the standard hydrogen electrode.

<details markdown="1">
<summary>Hint</summary>

Standard conditions are more than “room temperature”. Give a value and unit for temperature, gas pressure and solution concentration.

</details>

<details markdown="1">
<summary>Mark scheme and self-check</summary>

MS p. 17.

298 K (25 °C); H₂ pressure 100 kPa; H⁺ concentration 1.00 mol dm⁻³ (this mark scheme specifies HCl solution). Three correct conditions earn 2 marks; two earn 1 mark. Do not replace 100 kPa with 1 atm.

</details>

<span id="真题配溶液时真正要标准的是离子浓度"></span>

### Q2 — Past paper: standardise the actual ion concentrations {#q2}

**OxfordAQA CH03 · January 2025 · 06.4 · 2 marks**

**Course note:** In the original paper, solution E is the acidified $\ce{Cr2O7^{2-}}$/$\ce{Cr^{3+}}$ half-cell solution.

> A student suggested that solution E should be prepared by mixing equal volumes of 1.00 mol dm⁻³ aqueous acidified potassium dichromate(VI) solution and 1.00 mol dm⁻³ aqueous chromium(III) sulfate solution.
>
> Describe how the mixture should be changed to allow the standard electrode potential for the Cr₂O₇²⁻(aq) / Cr³⁺(aq) electrode to be measured.
>
> Justify your answer.

<details markdown="1">
<summary>Hint</summary>

1 mol of $\ce{Cr2(SO4)3}$ supplies 2 mol of Cr³⁺; 1 mol of $\ce{K2Cr2O7}$ supplies 1 mol of Cr₂O₇²⁻. Calculate each ion concentration after mixing.

</details>

<details markdown="1">
<summary>Mark scheme and self-check</summary>

MS p. 22.

Use **2.00 mol dm⁻³ K₂Cr₂O₇**, still mixed with an equal volume of **1.00 mol dm⁻³ Cr₂(SO₄)₃** (1 mark). After mixing, both redox species have concentrations of **1.00 mol dm⁻³** (1 mark). The acidified conditions must also be satisfied; checking the salt labels alone is insufficient.

**Marking model and preparation limit:** the concentration above preserves the January 2025 MS p.22 dilution calculation; it is not a validated room-temperature preparation. [Thermo Fisher reagent information](https://www.fishersci.fi/shop/products/potassium-dichromate-99-5-analysis-thermo-scientific/p-43068) lists molar mass 294.19 g mol⁻¹ and water solubility 125 g L⁻¹ at 20 °C. A 2.00 mol dm⁻³ solution would require 588 g per litre of final solution, so its preparation at room temperature must not be assumed feasible from the dilution algebra. An actual plan needs separate checks of temperature, medium, solubility basis and safety; heating a stock or handling Cr(VI) is not a student instruction here.

**Reattempt:** derive the result from $n=cV$ and the final total volume instead of memorising it.

</details>

<span id="e2从电势预测氧化还原方向"></span>

## E2: Predicting redox direction from potentials {#redox-direction}

Potential tables usually list **reduction** half-equations. A more positive $E^\circ$ generally means the oxidised species on the left accepts electrons more readily and is a stronger oxidising agent. The reduced species on the right of a more negative couple generally acts as a stronger reducing agent.

Work in this order: **choose reduction → reverse the other equation for oxidation → balance electrons → add → calculate the potential**.

$$E_{cell}^\circ=E_{reduction}^\circ-E_{oxidation\,couple}^\circ.$$

The subtracted value is still the couple’s tabulated **reduction potential**. Multiply half-equations to balance electrons, but **never multiply potentials**. A positive cell potential indicates a thermodynamic driving force under standard conditions. Rate and non-standard concentrations can affect the actual reaction, so it need not produce an immediate visible change.

### Example 2 — balance electrons, not potentials (self-written) {#example-2}

**Question:** Can Zn reduce Ag⁺ under standard conditions? Use Ag⁺/Ag = +0.80 V and Zn²⁺/Zn = −0.76 V. Write the overall equation and standard EMF.

**Method:** keep the silver reduction as tabulated and reverse the zinc half-equation for oxidation.

1. Silver accepts one electron per ion; zinc releases two electrons per atom.
2. Multiply the silver half-equation by 2, then cancel two electrons.
3. Subtract the zinc **reduction potential** once:

$$\ce{Zn + 2Ag+ -> Zn^{2+} + 2Ag}$$

$$E_{cell}^\circ=0.80-(-0.76)=+1.56\,\mathrm V.$$

**Answer and independent check:** reduction is thermodynamically feasible under standard conditions. Both sides contain one Zn and two Ag and have charge +2. The silver coefficient of 2 does not double +0.80 V: potential is energy per unit charge, not total transferred energy. Apply the same method to each possible step in [Q3](#q3).

<span id="真题为什么还原会停在-fe"></span>

### Q3 — Past paper: why does reduction stop at Fe²⁺? {#q3}

**OxfordAQA CH03 · June 2026 · 06.1 · 2 marks**

**Course note:** The relevant entries from Table 5 are:

| Electrode half-equation | $E^\circ\,/\,\mathrm V$ |
| --- | --- |
| $\ce{Fe^{2+}(aq) + 2e^- -> Fe(s)}$ | −0.44 |
| $\ce{Cu^{2+}(aq) + 2e^- -> Cu(s)}$ | +0.34 |
| $\ce{Fe^{3+}(aq) + e^- -> Fe^{2+}(aq)}$ | +0.77 |

> Use the data in Table 5 to explain why Cu reduces Fe³⁺ in aqueous solution to Fe²⁺ but does not reduce the Fe²⁺ any further.

<details markdown="1">
<summary>Hint</summary>

Pair each reduction with oxidation of Cu to Cu²⁺. Test Fe³⁺ reduction first, then Fe²⁺ reduction, calculating $E_{cell}^\circ$ separately.

</details>

<details markdown="1">
<summary>Mark scheme and self-check</summary>

MS p. 19.

The first step has $E_{cell}^\circ=0.77-0.34=+0.43$ V and can reduce Fe³⁺ to Fe²⁺. The second has $E_{cell}^\circ=-0.44-0.34=-0.78$ V, so there is no positive standard-cell driving force. Each conclusion earns 1 mark.

The overall first-step reaction is $\ce{Cu + 2Fe^{3+} -> Cu^{2+} + 2Fe^{2+}}$. The Fe³⁺ coefficient is 2, but +0.77 V is not multiplied by 2.

</details>

<span id="e3电池充电与-rp6"></span>

## E3: Cells and recharging {#cells-and-practical}

A **primary cell** usually has reactions that are difficult to reverse. A **secondary cell** uses an external power supply to drive the reverse of its discharge reaction. To find a charging equation, first combine the discharge half-equations, then reverse the overall equation.

A **hydrogen fuel cell** receives a continuous supply of fuel and oxidant. In an acidic system:

$$\ce{2H2 -> 4H+ + 4e^-}$$

$$\ce{O2 + 4H+ + 4e^- -> 2H2O}.$$

The overall reaction is $\ce{2H2 + O2 -> 2H2O}$. No CO₂ is produced by this reaction during use, but evaluation must consider hydrogen production, storage, transport, equipment costs and safety. Do not claim “no environmental impact”. Alkaline half-equations use OH⁻ instead, with the same overall reaction.

The specification requires the **alkaline hydrogen–oxygen fuel-cell half-equations**:

$$\ce{2H2 + 4OH^- -> 4H2O + 4e^-}$$

$$\ce{O2 + 2H2O + 4e^- -> 4OH^-}.$$

Add the equations, cancel electrons and OH⁻, then cancel water appearing on both sides to obtain the same overall reaction. Oxidation occurs at the H₂ electrode and reduction at the O₂ electrode. Electrons flow externally from the fuel side to the oxygen side.

**Qualitative changes in conditions:** for $\ce{Cu^{2+} + 2e^- <=> Cu}$, increasing Cu²⁺ concentration favours reduction and makes the electrode potential more positive; lowering it has the opposite effect. Explain using the half-equation and equilibrium. A non-standard reading is not automatically $E^\circ$; this course does not require quantitative Nernst-equation calculations.

### Example 3 — reverse a discharge reaction (self-written) {#example-3}

**Question:** A model rechargeable cell has discharge half-equations $\ce{A -> A^{2+} + 2e^-}$ and $\ce{B^{2+} + 2e^- -> B}$. Write the overall charging equation. A and B denote hypothetical electrode materials, not a claimed practical battery.

**Method:** add discharge first, then reverse the **whole** equation.

1. Cancel two electrons: $\ce{A + B^{2+} -> A^{2+} + B}$.
2. Reverse the net reaction for charging: $\boxed{\ce{A^{2+} + B -> A + B^{2+}}}$.
3. An external power supply drives this reverse direction.

**Independent check:** each side has one A, one B and charge +2. No free electrons remain in the overall equation. Reversing only one half-equation would put electrons on the same side and prevent cancellation. Now attempt [Q4](#q4).

<span id="真题充电方向与电解液选择"></span>

### Q4 — Past paper: charging direction and electrolyte choice {#q4}

**OxfordAQA CH03 · June 2024 · 04.5–04.6 · 1 + 1 marks**

The half-equations at each of the electrodes in one type of lithium cell are:

| Electrode | Half-equation | $E^\circ\,/\,\mathrm V$ |
| --- | --- | --- |
| Positive | $\ce{Li+ + MnO2 + e^- -> LiMnO2}$ | −0.15 |
| Negative | $\ce{Li+ + e^- -> Li}$ | −3.05 |
{: .wide-table}

> **04.5** Deduce the overall equation for the reaction when this cell is being recharged.
>
> **04.6** Suggest why there must be no water in this cell.

<details markdown="1">
<summary>Hint</summary>

During discharge Li is oxidised and the positive-electrode half-equation runs as tabulated. Would water react with lithium metal?

</details>

<details markdown="1">
<summary>Mark scheme and self-check</summary>

MS p. 18.

04.5: $\ce{LiMnO2 -> Li + MnO2}$ (1 mark). 04.6: lithium metal reacts with water (1 mark), consuming electrode material; “water conducts electricity” is insufficient.

</details>

## RP6: measuring and evaluating EMF {#rp6-measurement}

**RP6 measurement:** prepare two half-cells and connect them with a suitable salt bridge. Measure the open-circuit EMF with a high-resistance voltmeter. Record temperature, concentrations and gas pressures. High resistance minimises current and changes in composition. Check connection polarity against the expected sign, repeat readings and avoid electrode contamination or mixing the solutions.

### Salt-bridge compatibility {#salt-bridge}

**The salt bridge must be compatible with both half-cells.** It must not cause precipitation, acid–base or redox reactions with the electrode species. For example, Cl⁻ may be oxidised by a strong oxidising agent; OH⁻ consumes H⁺ and may precipitate metal aqua ions. Do not choose NaCl without considering the system.

### Independent RP6 task: analyse the original readings {#rp6-data}

**Self-written task; all readings below are constructed for analysis, not measurements made by students.** Use the Zn/Cu half-cell potentials in Example 1. The positive voltmeter lead is connected to Cu. Before using the records, predict the standard EMF and electron-flow direction, choose between KNO₃ and NaOH for a salt bridge, and justify your choice for these two metal-ion solutions.

All sets use clean electrodes, fresh solutions, a high-resistance voltmeter and 298 K. Concentrations below are in mol dm⁻³. Sets A and B use meter M, checked against a voltage reference. Set C uses meter N; apart from the meter, its stated conditions match A. The 0.001 V display step is a resolution, not an established total uncertainty.

Concentrations and meter selection:

- **A:** Zn²⁺ = 1.00; Cu²⁺ = 1.00; meter M.
- **B:** Zn²⁺ = 1.00; Cu²⁺ = 0.0100; meter M.
- **C:** Zn²⁺ = 1.00; Cu²⁺ = 1.00; meter N.

| Set | Reading 1 / V | Reading 2 / V | Reading 3 / V |
| --- | --- | --- | --- |
| A | 1.096 | 1.098 | 1.097 |
| B | 1.038 | 1.040 | 1.039 |
| C | 1.076 | 1.078 | 1.077 |

An independent check applies a 1.100 V reference to meter N using the same range and polarity. N displays 1.080 V. Assume an additive offset over the narrow voltage range used here; this assumption would need checking for other ranges.

1. Calculate the mean and full range of each set. Compare repeatability before judging agreement with the standard prediction.
2. Use A versus B to judge the effect of concentration. Explain why the B readings must not be labelled standard EMF, or dismissed as a faulty meter merely because they differ from the standard value. No Nernst-equation calculation is required.
3. Use the independent reference check to estimate and correct the offset in C. Does taking many more readings remove this offset? State one further comparison needed before attributing every remaining difference from the standard prediction to measurement error.
4. Propose one change addressing each identified cause, with a reason. For a real experiment, include suitable eye protection, teacher-approved metal-salt handling and waste collection; this data task does not establish completion of practical work.

<details markdown="1">
<summary>Hint</summary>

Predict from the two reduction potentials, then keep three comparisons separate: repeated readings within a set, concentration changed with the meter held constant, and meter changed with concentration held constant. A reference voltage checks the meter independently of the electrochemical model.

</details>

<details markdown="1">
<summary>Feedback and reattempt</summary>

The standard prediction is +1.10 V, with electrons passing from Zn to Cu in the external circuit. For these solutions KNO₃ avoids the hydroxide precipitation expected if NaOH contacts the metal ions; compatibility is a chemical choice, not simply whether the bridge conducts.

| Set | Mean / V | Full range / V |
| --- | --- | --- |
| A | 1.097 | 0.002 |
| B | 1.039 | 0.002 |
| C | 1.077 | 0.002 |

All three sets have the same small observed range; this supports similar repeatability for these readings, not equal accuracy. Lowering Cu²⁺ concentration lowers the Cu reduction potential and hence the cell EMF: B is a deliberate non-standard condition. Keep the concentration change, since the purpose is to test its effect; restore both concentrations only when making a standard-condition comparison.

Meter N has an estimated **−0.020 V offset** near this range. Adding 0.020 V to C gives a corrected mean of **1.097 V**, consistent with A. Repetition alone does not remove the offset; use a calibrated meter or a justified correction with its uncertainty. A still differs from the tabulated prediction by 0.003 V: inspect temperature, actual ion activities/concentrations, junction effects and the uncertainty/rounding of the prediction before assigning a single cause. A small full range alone supplies no total uncertainty budget.

**Reattempt:** if the reference had read 1.120 V instead, state the direction of the correction before calculating it. If a proposed improvement is simply “take more readings”, say which random variation it estimates and which systematic cause it leaves unchanged.

</details>

## Practice {#practice}

Work with hints and solutions closed. Local Q numbers locate the task; the original year, question number and marks remain alongside each genuine question.

| Question | What to practise |
| --- | --- |
| [Q1](#q1) | SHE conditions, with values and units |
| [Q2](#q2) | Ionic concentration after mixing |
| [Q3](#q3) | Test each reduction without multiplying potentials |
| [Q4](#q4) | Charging direction and water compatibility |
| [Q5](#q5) | Reversed leads and a non-standard concentration; self-written |
| [Q6](#q6) | Alkaline fuel-cell paths and practical limitations; self-written |
| [RP6 data](#rp6-data) | Means, repeatability, concentration control and meter offset; self-written |

### Q5 — sign and concentration checks (self-written) {#q5}

**Question:** In the Zn/Cu cell of Example 1, a student exchanges the voltmeter leads. State the new reading and whether the spontaneous reaction changes. With the original leads restored, Cu²⁺ concentration is then reduced below 1.00 mol dm⁻³ while the other half-cell remains standard. Predict the qualitative change in EMF and explain whether the reading is still a standard EMF.

<details markdown="1">
<summary>Hint</summary>

Separate a change of measuring polarity from a change of chemical conditions. Consider which direction lower Cu²⁺ concentration favours in its reduction half-equation.

</details>

<details markdown="1">
<summary>Solution and self-check</summary>

Self-written practice; no official marks.

Swapped leads give −1.10 V; the spontaneous reaction and electron-flow direction are unchanged. Restoring the original leads restores the positive-reading convention. Lower Cu²⁺ concentration makes the Cu electrode potential less positive, so the cell EMF decreases. The new reading is not a standard EMF because the Cu²⁺ concentration is not standard. No numerical non-standard EMF is determined here.

**Check:** use [Example 1](#example-1) to distinguish the notation convention from lead polarity. If you reversed the chemistry merely because the leads moved, redraw the external wire and mark electron flow before reattempting.

</details>

### Q6 — fuel-cell explanation and measurement (self-written) {#q6}

**Question:** Use the alkaline hydrogen–oxygen half-equations in E3 to obtain the overall reaction. State what carries charge through the external circuit and through the electrolyte. Explain why a high-resistance voltmeter is used in RP6 and why “no CO₂ during operation” does not establish zero environmental impact.

<details markdown="1">
<summary>Hint</summary>

Cancel electrons, OH⁻ and water appearing on both sides. Keep chemical operation, measurement and fuel production as separate parts of the explanation.

</details>

<details markdown="1">
<summary>Solution and self-check</summary>

Self-written practice; no official marks.

The net reaction is 2H₂ + O₂ → 2H₂O. Electrons travel through the external circuit; ions carry charge through the electrolyte. High voltmeter resistance minimises current and composition change, giving an EMF close to open-circuit conditions. Hydrogen production may use fossil fuels or electricity with associated emissions; storage and transport also have impacts.

**Check:** four H atoms and two O atoms occur on both sides of the net reaction, which is electrically neutral. If you placed electrons in the salt bridge, return to [E1](#standard-electrodes) and draw separate electron and ion arrows, then reattempt.

</details>

## Quick reference and error repair {#quick-reference}

| Check | Exam trap |
| --- | --- |
| SHE: 298 K, 100 kPa H₂, 1.00 mol dm⁻³ H⁺ | “Room temperature” or a salt concentration alone is insufficient |
| Reduction potentials: more positive means stronger electron acceptance | Calling the reduced metal a strong oxidising agent |
| $E_{cell}^\circ=E_{right}^\circ-E_{left}^\circ$; both are reduction potentials | Subtracting an already sign-reversed oxidation potential |
| Multiply equations to cancel electrons; never multiply potentials | Confusing energy with energy per unit charge |
| Positive standard EMF indicates thermodynamic feasibility | Claiming immediate reaction regardless of kinetics or conditions |
| Charge and atoms must balance; electrons cancel in the net equation | Reversing only one half-reaction for charging |
| Electrons outside; ions inside | Saying electrons pass through the salt bridge |
| Salt bridge must not react with either half-cell | Selecting NaCl for every cell |

| Your error | Repair route | Reattempt |
| --- | --- | --- |
| Correct salt label, wrong ion concentration | [E1 and mixing](#q2); count ions per formula unit | [Q2](#q2), calculate each final concentration |
| EMF sign or electron direction is wrong | [Example 1](#example-1) | [Q5](#q5) |
| A potential was doubled | [Example 2](#example-2) | [Q3](#q3), balance charge separately |
| Charging leaves electrons in the total equation | [Example 3](#example-3) | [Q4](#q4) |
| Salt bridge carries electrons, or fuel cell has “no impact” | [E3 and RP6](#cells-and-practical) | [Q6](#q6) |

Name the cause of your error in one sentence, then reattempt with the solution closed.

<span id="闭卷检查与下一步"></span>

## Completion and next step {#completion}

Draw the SHE and label its three conditions. Explain ion transport through the salt bridge, combine two half-equations into an overall reaction and EMF, and explain why multiplying an equation does not multiply its potential.

**Completion standard:** label standard conditions, balance reactions, predict direction and EMF, explain why potentials are not multiplied, distinguish electron and ion paths, and derive charging from discharge. Analyse RP6 raw readings, separate a controlled chemical change from an instrument offset, and justify a matching improvement. Reattempt corrected questions with solutions closed.

Previous: [thermodynamics](/alevel/a2-chemistry/thermodynamics/) · [Back to course](/alevel/a2-chemistry/) · Next: [acids, bases and buffers](/alevel/a2-chemistry/acids-bases-and-buffers/).
