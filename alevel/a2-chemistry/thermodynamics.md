---
title: Thermodynamics
layout: subjects
mathjax: true
lang: en
grade: a2
subject: a2-chemistry
permalink: /alevel/a2-chemistry/thermodynamics/
toc_headings: h2, h3, h4
study_page: true
---

[CH03 course](/alevel/a2-chemistry/) · 3.1.8 · Textbook Chapter 17, printed pp. 264–283

## Introduction {#introduction}

- **Learning:** choose a task in [Method](#method), then work through the numbered examples.
- **Homework help:** use [Method](#method) to find the first step and the matching past-paper question.
- **Revision:** attempt [Practice](#practice) with solutions closed, then use the [Quick reference](#quick-reference).

**Before you start:** balance equations, identify physical states, calculate moles and use Hess’s law. If these are uncertain, return to the [AS prerequisite check](/alevel/a2-chemistry/#prerequisites) before attempting a cycle.

Turn enthalpy definitions into calculable paths, then use entropy and Gibbs free energy to decide thermodynamic feasibility. Draw cycles independently, handle signs and coefficients, and explain differences between experimental values and the ideal model.

**Think first:** why do separating a solid salt into gaseous ions and putting gaseous ions into water usually have opposite enthalpy signs? Give a one-sentence explanation before reading the definitions.

## Method {#method}

| Task | First step | Study and reattempt |
| --- | --- | --- |
| Define an enthalpy change | Write 1 mol, starting state and final state | [Definitions](#definitions) → [Q1](#q1) |
| Find an unknown cycle value | Fix the endpoints and label arrow directions | [Example 2](#example-2) → [Q2](#q2) |
| Calculate solution enthalpy | Dissociate the lattice, then hydrate every ion | [Solution](#solution) → [Q3](#q3) |
| Explain a lattice trend | Compare charge and ionic radius before attraction | [Ionic model](#solution) → [Q4](#q4) |
| Compare a cycle value with an ionic model | Match substance, phase and enthalpy direction; inspect the uncertainty | [Model comparison](#ionic-model-comparison) → [Q9](#q9) |
| Calculate reaction entropy | Apply stoichiometric coefficients to absolute entropies | [Entropy table](#absolute-entropy) → [Q8](#q8) |
| Use temperature data | Calculate heat, moles, then reaction sign and units | [Q5](#q5) |
| Decide feasibility or sketch a graph | Convert entropy to the same energy unit as enthalpy | [Example 4](#example-4) → [Q7](#q7) |

<span id="t1先把定义写成方程式"></span>

## T1: Write definitions as equations {#definitions}

A **standard enthalpy change** is measured under standard conditions with substances in their standard states. Standard pressure is 100 kPa; specify the temperature, usually 298 K. The **one mole** in each definition must refer to the specified substance or change.

| Enthalpy change | Meaning and example | What to check |
| --- | --- | --- |
| Formation, $\Delta_fH^\circ$ | Form 1 mol of a compound from elements in their standard states: $\ce{Ca(s) + 1/2O2(g) -> CaO(s)}$ | Exactly 1 mol of product |
| Atomisation, $\Delta_{at}H^\circ$ | Form 1 mol of gaseous atoms: $\ce{1/2O2(g) -> O(g)}$ | Use $1/2$ for a diatomic element |
| First ionisation enthalpy | Remove electrons from 1 mol of gaseous atoms: $\ce{Ca(g) -> Ca+(g) + e^-}$ | Both atoms and ions are gaseous; endothermic |
| Second ionisation enthalpy | $\ce{Ca+(g) -> Ca^{2+}(g) + e^-}$ | The starting species is already a positive ion |
| First electron affinity | $\ce{O(g) + e^- -> O^-(g)}$ | Electron on the left; the first electron affinity of O is exothermic |
| Second electron affinity | $\ce{O^-(g) + e^- -> O^{2-}(g)}$ | Adding an electron to a negative ion requires energy to overcome repulsion |
| Bond dissociation enthalpy | Break 1 mol of specified gaseous covalent bonds: $\ce{Cl2(g) -> 2Cl(g)}$ | Breaking bonds is endothermic; mean bond enthalpy averages different molecular environments |
| Lattice dissociation | Separate 1 mol of a solid ionic lattice into gaseous ions: $\ce{CaO(s) -> Ca^{2+}(g) + O^{2-}(g)}$ | Endothermic; do not confuse its direction with lattice formation |
| Hydration, $\Delta_{hyd}H^\circ$ | Form hydrated ions from 1 mol of gaseous ions: $\ce{Ca^{2+}(g) -> Ca^{2+}(aq)}$ | Ion–water attractions form; exothermic |
{: .wide-table}

**Writing a definition:** state “one mole of what”, then the initial and final states. Check with an equation. “Energy needed to separate ions” alone omits the amount and states and will usually lose credit.

**Bond enthalpy and atomisation:** breaking 1 mol of Cl–Cl bonds in Cl₂ gives 2 mol of Cl(g), so $\Delta_{at}H^\circ(\mathrm{Cl})=\tfrac12D(\mathrm{Cl-Cl})$. If a cycle gives a bond enthalpy, first check how many moles of gaseous atoms it produces.

### Example 1 — one mole and physical states (self-written) {#example-1}

**Question:** Write the equation defining the standard enthalpy of hydration of sodium ions. Explain why dissolving sodium chloride is a different enthalpy change.

**Method:** identify the specified one mole, then write its initial and final states.

1. The specified amount is 1 mol of sodium **ions**, not sodium chloride.
2. Hydration starts with gaseous ions and ends with aqueous ions:

$$\ce{Na+(g) -> Na+(aq)}.$$

**Answer and independent check:** this hydrates one mole of gaseous sodium ions under standard conditions. One Na and charge +1 occur on each side; no solid salt appears. Dissolving NaCl starts with a solid and includes lattice dissociation, so it is solution enthalpy rather than hydration. Write the comparable lattice definition in [Q1](#q1).

<span id="真题晶格解离焓的定义"></span>

### Q1 — Past paper: defining lattice dissociation enthalpy {#q1}

**OxfordAQA CH03 · June 2024 · 01.1 · 2 marks**

> Define enthalpy of lattice dissociation.

<details markdown="1">
<summary>Hint</summary>

Start with a solid ionic compound and finish with gaseous ions. Check “one mole”.

</details>

<details markdown="1">
<summary>Mark scheme and self-check</summary>

MS p. 12.

One valid definition is: **The enthalpy change when one mole of a solid ionic compound is separated into its gaseous ions.**

The two marking points are 1 mol of a solid ionic compound and separation into gaseous ions. Reattempt with the specific equation $\ce{CaBr2(s) -> Ca^{2+}(g) + 2Br^-(g)}$ and check the coefficient of Br⁻.

</details>

<span id="t2bornhaber-循环"></span>

## T2: Born–Haber cycles {#born-haber}

By Hess’s law, two paths with the same start and end have the same total enthalpy change. For CaO, the direct path forms CaO from its elements. The indirect path makes gaseous atoms, then gaseous ions, and finally the lattice.

$$\begin{aligned}\Delta_fH^\circ&=\Delta_{at}H^\circ(\mathrm{Ca})+\Delta_{at}H^\circ(\mathrm O)\\&\quad+IE_1+IE_2+EA_1+EA_2\\&\quad-\Delta_{latt,diss}H^\circ.\end{aligned}$$

If the table gives **lattice formation**, add its negative value directly for the final step. If it gives **lattice dissociation**, reverse that step and subtract its value. Do not take every absolute value and then guess the signs.

### Example 2 — coefficient and direction checks (self-written) {#example-2}

**Question:** Set up a Born–Haber relationship for $\ce{MgCl2}$ using lattice **dissociation** enthalpy. Explain the chlorine coefficients. No numerical values are supplied.

**Method:** compare the direct formation path with the path through gaseous atoms and ions.

1. Form one Mg(g) and two Cl(g). Use two chlorine atomisation terms, or one Cl–Cl bond dissociation term.
2. Remove two electrons from magnesium in two successive steps. Each chlorine atom accepts one electron.
3. Reverse lattice dissociation to form the solid:

$$\begin{aligned}\Delta_fH^\circ&=\Delta_{at}H^\circ(\mathrm{Mg})+2\Delta_{at}H^\circ(\mathrm{Cl})\\&\quad+IE_1+IE_2+2EA_1\\&\quad-\Delta_{latt,diss}H^\circ.\end{aligned}$$

**Answer and independent check:** the chlorine atomisation and electron-affinity terms each occur twice. Count one Mg and two Cl on every level; the two electrons removed from Mg equal the two accepted by chlorine. The last step is exothermic lattice formation, hence the minus sign. Now attempt [Q2](#q2) without this model.

<span id="真题从原循环确定物种和焓变"></span>

### Q2 — Past paper: species and enthalpies in the original cycle {#q2}

**OxfordAQA CH03 · January 2025 · 01.1–01.3 · 1 + 2 + 2 marks**

Figure 1 shows the Born–Haber cycle for calcium oxide.

![Original Figure 1: calcium oxide Born–Haber cycle with species X and Y, steps A and B, and enthalpy values.](/assets/img/a2-chemistry/ch03-2025-jan-q01-born-haber.png)

<details markdown="1">
<summary>Figure 1: equivalent text description</summary>

This transcribes the labels, arrows and given values; **X, Y, A, B and the formation enthalpy remain unknown**. All enthalpy values below are in kJ mol⁻¹.

1. The starting level is $\ce{Ca(s) + 1/2O2(g)}$. An arrow points upwards, +193, to $\ce{Ca(g) + 1/2O2(g)}$.
2. From that level an arrow points upwards, +248, to $\ce{Ca(g) + O(g)}$.
3. An upward arrow, +590, reaches $\ce{Ca+(g) + e^- + O(g)}$.
4. Another upward arrow, +1150, reaches **X + 2e⁻ + O(g)**.
5. **Step A** points downwards from that level, −142, to **Ca²⁺(g) + O⁻(g) + Y**.
6. From this level an upward arrow, +844, reaches $\ce{Ca^{2+}(g) + O^{2-}(g)}$.
7. $\ce{CaO(s)}$ is below the starting level. The unknown standard formation arrow points downwards from the starting level to CaO(s).
8. **Step B** points upwards from CaO(s) to $\ce{Ca^{2+}(g) + O^{2-}(g)}$ and is labelled +3513.

</details>

> **01.1** Identify species X and species Y. Include state symbols where appropriate.
>
> **01.2** Give the names of the enthalpy changes represented by Step A and Step B.
>
> **01.3** Use Figure 1 to calculate the standard enthalpy of formation of calcium oxide.

<details markdown="1">
<summary>Hint</summary>

Check the charge on Ca and O and the number of electrons at each level, then follow the path from the elements to the top. Step B points from solid to gaseous ions.

</details>

<details markdown="1">
<summary>Mark scheme and self-check</summary>

MS p. 12.

- 01.1: X = Ca²⁺(g), Y = e⁻; both correct earn 1 mark.
- 01.2: A is the **first electron affinity of oxygen**; B is the **lattice dissociation enthalpy of calcium oxide**, 1 mark each.
- 01.3: the indirect path sums to $193+248+590+1150-142+844-3513$, giving **$-630\,\mathrm{kJ\,mol^{-1}}$**. The correct relationship and correct result each earn 1 mark.

**Correct and reattempt:** reverse the lattice arrow and replace the data with lattice formation enthalpy. Set up the calculation again: the final answer must stay the same.

</details>

<span id="t3溶解水合与理想离子模型"></span>

## T3: Solution, hydration and the ideal ionic model {#solution}

**Enthalpy of solution** starts with a solid salt and ends with hydrated ions. Separating the lattice requires energy and hydration releases energy; their sum may be endothermic or exothermic:

$$\Delta_{sol}H^\circ=\Delta_{latt,diss}H^\circ+\sum\Delta_{hyd}H^\circ.$$

For $\ce{MgCl2}$, both Cl⁻ ions are hydrated, so multiply chloride hydration enthalpy by 2.

**Definition check:** $\ce{NaCl(s) -> Na+(aq) + Cl^-(aq)}$ is **solution**, whereas hydration starts with **gaseous ions**. Classify the process from its endpoints, rather than from the diagram title alone.

The **perfect ionic model** treats ions as spherical charges with entirely ionic bonding. Higher charges and smaller ions give stronger attraction and usually larger lattice dissociation enthalpies. A small cation with high charge density may also polarise an anion, introducing covalent character. The experimental Born–Haber value can then differ from the ideal-model value.

### Comparing a cycle value with an ionic model {#ionic-model-comparison}

The cycle value inferred from experimental thermochemical data and the perfect-ionic-model prediction answer different questions. Compare the **same salt, physical states and direction** before interpreting their difference.

**Worked comparison:** the MgCl₂ lattice dissociation value in January 2025 02.3 is +2493 kJ mol⁻¹; the perfect-model value in June 2026 Table 2 is +2326 kJ mol⁻¹. These are examination reference values, not a new matched experimental study.

$$2493-2326=167\,\mathrm{kJ\,mol^{-1}}.$$

The cycle value is larger: the real solid is more strongly stabilised than the purely ionic calculation predicts. Polarisation and covalent character are a chemical explanation for the model's limitation. Do not claim that 167 kJ mol⁻¹ is a directly measured “covalent bond energy”, or that any tiny difference proves covalency. Check uncertainty and the assumptions behind both values. Now try [Q9](#q9), where the evidence differs between two salts.

### Example 3 — hydrate every ion (self-written) {#example-3}

**Question:** Use these illustrative model values, all in kJ mol⁻¹: lattice dissociation of MgCl₂ = +2500; hydration of Mg²⁺ = −1900; hydration of Cl⁻ = −350. Calculate the enthalpy of solution. These are self-written practice data, not measured values or official examination data.

**Method:** follow solid salt → gaseous ions → hydrated ions.

1. Balance the dissolution equation: $\ce{MgCl2(s) -> Mg^{2+}(aq) + 2Cl^-(aq)}$.
2. Add lattice dissociation once, magnesium hydration once and chloride hydration twice:

$$\begin{aligned}\Delta_{sol}H&=2500-1900+2(-350)\\&=\boxed{-100\,\mathrm{kJ\,mol^{-1}}}.\end{aligned}$$

**Answer:** −100 kJ mol⁻¹, so dissolution is exothermic in this model.

**Independent check:** one Mg and two Cl are conserved and aqueous-ion charges sum to zero. Hydration releases 2600 kJ per mole of salt, exceeding the 2500 kJ lattice cost by 100 kJ. The answer is per mole of MgCl₂, not per mole of chloride. Omitting the second chloride would incorrectly give +250 kJ mol⁻¹. Now calculate [Q3](#q3) with the genuine paper data.

<span id="真题两个氯离子的水合"></span>

### Q3 — Past paper: hydrating two chloride ions {#q3}

**OxfordAQA CH03 · January 2025 · 02.3 · 2 marks**

| Enthalpy change | $\Delta H\,/\,\mathrm{kJ\,mol^{-1}}$ |
| --- | --- |
| Enthalpy of hydration of magnesium ions | −1920 |
| Enthalpy of hydration of chloride ions | −364 |
| Lattice dissociation enthalpy of magnesium chloride | +2493 |

> Use the data in Table 1 to calculate the enthalpy of solution, in kJ mol⁻¹, of magnesium chloride.

<details markdown="1">
<summary>Hint</summary>

$\ce{MgCl2(s) -> Mg^{2+}(aq) + 2Cl^-(aq)}$. Which term must be multiplied by 2?

</details>

<details markdown="1">
<summary>Mark scheme and self-check</summary>

MS p. 13.

$$\begin{aligned}\Delta_{sol}H&=2493-1920-2(364)\\&=\boxed{-155\,\mathrm{kJ\,mol^{-1}}}.\end{aligned}$$

The correct cycle earns 1 mark and the correct result 1 mark. An endothermic lattice-dissociation step does not make the entire solution process endothermic.

</details>

<span id="真题用离子大小解释晶格焓"></span>

### Q4 — Past paper: ionic size and lattice enthalpy {#q4}

**OxfordAQA CH03 · June 2026 · 02.4 · 2 marks**

Theoretical lattice dissociation enthalpies: MgCl₂ = 2326 kJ mol⁻¹; CaCl₂ = 2223 kJ mol⁻¹.

> Explain why the value for the enthalpy of lattice dissociation of magnesium chloride is greater than the value for the enthalpy of lattice dissociation of calcium chloride.

<details markdown="1">
<summary>Hint</summary>

Both cations have charge +2. Compare their radii and relate this to attraction to Cl⁻.

</details>

<details markdown="1">
<summary>Mark scheme and self-check</summary>

MS p. 13.

Mg²⁺ is smaller than Ca²⁺ (or has higher charge density), so its electrostatic attraction to Cl⁻ is stronger and more energy is needed to separate the lattice. Each part of this causal explanation earns 1 mark. Referring only to a smaller Mg “atom” is insufficient.

</details>

<span id="真题量热法与实验评价"></span>

### Q5 — Past paper: calorimetry and evaluation {#q5}

**OxfordAQA CH03 · June 2024 · 01.4–01.5 · 3 + 1 marks**

> **01.4** A student does an experiment to determine the enthalpy of solution for calcium bromide.
>
> 1.25 g of solid calcium bromide is added from a weighing boat to 25.0 cm³ distilled water in a plastic (polystyrene) cup and the mixture is stirred gently.
>
> When the calcium bromide dissolves, the temperature of the mixture rises from 19.6 °C to 24.9 °C.
>
> Calculate the enthalpy of solution, in kJ mol⁻¹, for calcium bromide.
>
> Assume that the specific heat capacity of the solution is 4.18 J K⁻¹ g⁻¹. Assume that the density of the solution is 1.00 g cm⁻³.
>
> **01.5** Another student repeats the experiment. After the calcium bromide is added into the plastic cup, the student washes the weighing boat with a small volume of distilled water. The student adds the washings to the plastic cup to ensure that all the calcium bromide is transferred.
>
> Explain why adding the washings causes inaccurate results.

Use $M_r(\mathrm{CaBr_2})=199.9$, from the relative atomic masses supplied with the paper.

<details markdown="1">
<summary>Hint</summary>

Use $m=25.0\,\mathrm g$ as required by this question’s marking model. Calculate $q=mc\Delta T$, then the moles of salt. For the explanation, check whether the added water agrees with the mass used in the calculation.

</details>

<details markdown="1">
<summary>Mark scheme and self-check</summary>

MS p. 13.

The three steps in 01.4 are $q=25.0\times4.18\times5.3=553.85\,\mathrm J$; $n=1.25/199.9=6.253\times10^{-3}\,\mathrm{mol}$; $\Delta H=-q/(1000n)=\boxed{-88.6\,\mathrm{kJ\,mol^{-1}}}$. A temperature rise means the reaction is exothermic, so retain the negative sign.

01.5: the washings change the liquid mass/volume in the cup, so $m$ calculated from 25.0 cm³ is no longer accurate. Identify the affected measurement rather than simply saying “extra water causes error”.

</details>

<span id="t4熵gibbs-自由能与温度"></span>

## T4: Entropy, Gibbs free energy and temperature {#entropy}

### Entropy and entropy-change calculations {#entropy-calculations}

**Entropy, $S$,** reflects how energy and particles can be distributed. Although examinations often use “disorder”, connect the explanation to the actual change: gases have more accessible arrangements and motion than liquids or solids; increasing gas moles in comparable systems usually increases $\Delta S$.

$$\begin{aligned}\Delta S^\circ&=\sum S^\circ(\text{products})\\&\quad-\sum S^\circ(\text{reactants}).\end{aligned}$$

Apply stoichiometric coefficients first.

#### Worked example: coefficients in an absolute-entropy table {#absolute-entropy}

**Self-written task using reference data.** Calculate the entropy change at 298.15 K for:

$$\ce{N2(g) + 3H2(g) -> 2NH3(g)}.$$

| Substance | Standard molar entropy / J K⁻¹ mol⁻¹ |
| --- | --- |
| N₂(g) | 191.61 |
| H₂(g) | 130.68 |
| NH₃(g) | 192.77 |

Rounded 1-bar reference values from NIST Chemistry WebBook: [N₂](https://webbook.nist.gov/cgi/cbook.cgi?ID=C7727379&Mask=1), [H₂](https://webbook.nist.gov/cgi/cbook.cgi?ID=C1333740&Mask=1), [NH₃](https://webbook.nist.gov/cgi/cbook.cgi?ID=C7664417&Mask=1); consulted 15 October 2026. These are not classroom measurements.

**Method:** multiply each molar entropy by its reaction coefficient, then subtract the reactant total from the product total.

$$\begin{aligned}\Delta S^\circ&=2(192.77)-[191.61+3(130.68)]\\&=-198.11\,\mathrm{J\,K^{-1}\,mol^{-1}}.\end{aligned}$$

**Check:** the reaction as written consumes 4 mol of gas and produces 2 mol, consistent with a negative entropy change. Standard-state elements have **non-zero absolute entropies**: the zero convention for standard formation enthalpy does not apply to S°. Reversing the equation reverses ΔS; halving all coefficients halves ΔS. Attempt [Q8](#q8) without this calculation, where the gas-mole count stays unchanged.

### Gibbs free energy, temperature and phase changes {#gibbs-temperature}

$$\Delta G^\circ=\Delta H^\circ-T\Delta S^\circ.$$

$\Delta S$ is often given in J K⁻¹ mol⁻¹ and $\Delta H$ in kJ mol⁻¹. Use consistent energy units and temperature in K.

| $\Delta H$ | $\Delta S$ | Condition for $\Delta G<0$, assuming both are temperature-independent |
| --- | --- | --- |
| Negative | Positive | All positive temperatures |
| Positive | Negative | No positive temperature |
| Negative | Negative | Sufficiently low temperature |
| Positive | Positive | Sufficiently high temperature |

At the threshold $\Delta G=0$, so $T=\Delta H/\Delta S$. A straight-line $\Delta G$–$T$ graph has intercept $\Delta H$ and gradient **$-\Delta S$**. A phase change such as melting or boiling changes entropy and can change the gradient.

**Feasible does not mean fast:** $\Delta G<0$ is a thermodynamic condition. A reaction may remain slow because of a high activation energy. A catalyst changes the pathway and rate, not $\Delta G$ or the equilibrium constant.

#### Example 4 — feasibility and a Gibbs graph (self-written) {#example-4}

**Question:** A reaction has $\Delta H^\circ=+40.0\,\mathrm{kJ\,mol^{-1}}$ and $\Delta S^\circ=+100\,\mathrm{J\,K^{-1}\,mol^{-1}}$. Assuming both are constant, find the threshold temperature, calculate Gibbs free energy at 300 K and 500 K, and describe its graph against temperature.

**Method:** use kJ throughout, then set Gibbs free energy to zero at the threshold.

1. Convert the entropy: $\Delta S^\circ=+0.100\,\mathrm{kJ\,K^{-1}\,mol^{-1}}$.
2. Write the straight-line relationship:

   $$\Delta G^\circ=40.0-0.100T\quad(\mathrm{kJ\,mol^{-1}}).$$

3. Find the intercept and threshold:

   $$T_{\mathrm{threshold}}=\frac{40.0}{0.100}=400\,\mathrm K.$$

**Answer:** at 300 K, Gibbs free energy is +10.0 kJ mol⁻¹; at 500 K it is −10.0 kJ mol⁻¹. The line intercepts the vertical axis at +40.0 kJ mol⁻¹, has gradient −0.100 kJ K⁻¹ mol⁻¹ and crosses zero at 400 K. The forward reaction is thermodynamically feasible above 400 K; at 400 K it is at the threshold, not a claim of fast reaction.

**Independent check:** increasing temperature by 200 K changes Gibbs free energy by −20.0 kJ mol⁻¹, consistent with the negative gradient. A positive entropy change must make the line slope downwards. Reattempt with [Q7](#q7), where both signs are reversed.

<span id="真题熔点处的熵变"></span>

#### Q6 — Past paper: entropy at the melting point {#q6}

**OxfordAQA CH03 · June 2026 · 04.2 · 2 marks**

| Property of iron | Value |
| --- | --- |
| Melting point / K | 1810 |
| Enthalpy change for melting / kJ mol⁻¹ | 15.4 |

> The melting point of iron is the minimum temperature at which the melting of iron becomes feasible.
>
> Use the data in Table 4 to calculate the entropy change, in J K⁻¹ mol⁻¹, for the melting of iron.

<details markdown="1">
<summary>Hint</summary>

Set $\Delta G=0$ and rearrange for $\Delta S$. The requested unit is J, so convert 15.4 kJ to J first.

</details>

<details markdown="1">
<summary>Mark scheme and self-check</summary>

MS p. 16.

$$\Delta S=\frac{\Delta H}{T}=\frac{15.4\times1000}{1810}=\boxed{8.51\,\mathrm{J\,K^{-1}\,mol^{-1}}}.$$

The relationship/substitution earns 1 mark and the answer 1 mark. Reattempt and explain why entropy increases on melting.

</details>

## Practice {#practice}

Attempt the inline questions with all hints and solutions closed. Record the local question number as well as the original paper reference.

| Question | What to practise |
| --- | --- |
| [Q1](#q1) | One mole and state symbols in a definition |
| [Q2](#q2) | Species, arrow directions and Born–Haber calculation |
| [Q3](#q3) | Hydration coefficients and solution enthalpy |
| [Q4](#q4) | Ionic radius → attraction → lattice enthalpy |
| [Q5](#q5) | Calorimetry, sign, units and experimental evaluation |
| [Q6](#q6) | Entropy at a melting threshold |
| [Q7](#q7) | Low-temperature feasibility and a Gibbs graph; self-written |
| [Q8](#q8) | Absolute entropies, coefficients and limits of the gas-mole rule; self-written |
| [Q9](#q9) | Model comparison, uncertainty intervals and enthalpy direction; self-written |

### Q7 — temperature range and graph (self-written) {#q7}

**Question:** A reaction has $\Delta H^\circ=-60.0\,\mathrm{kJ\,mol^{-1}}$ and $\Delta S^\circ=-150\,\mathrm{J\,K^{-1}\,mol^{-1}}$. Assume both are temperature-independent. Calculate Gibbs free energy at 300 K and 500 K. Sketch its graph against temperature, label its gradient and threshold, and state the feasible temperature range. Would a catalyst move the threshold?

<details markdown="1">
<summary>Hint</summary>

Convert entropy to kJ, retaining its negative sign. Subtracting a negative entropy term gives a positive gradient. Compare with [Example 4](#example-4).

</details>

<details markdown="1">
<summary>Solution and self-check</summary>

Self-written practice; no official marks.

$$\Delta G^\circ=-60.0+0.150T\quad(\mathrm{kJ\,mol^{-1}}).$$

At 300 K: −15.0 kJ mol⁻¹; at 500 K: +15.0 kJ mol⁻¹. The graph has vertical intercept −60.0 kJ mol⁻¹ and gradient +0.150 kJ K⁻¹ mol⁻¹. Its threshold is 400 K. The forward reaction is feasible below 400 K (at positive temperatures); 400 K is the boundary. A catalyst does not change the line or threshold.

**Check:** the 200 K increase raises Gibbs free energy by 30.0 kJ mol⁻¹, matching the gradient. If you predicted high-temperature feasibility, return to [Entropy and Gibbs](#entropy), then sketch the graph again without the solution.

</details>

### Q8 — an unfamiliar entropy comparison (self-written) {#q8}

At 298.15 K consider $\ce{H2(g) + Cl2(g) -> 2HCl(g)}$. Use standard molar entropies H₂(g) = 130.68, Cl₂(g) = 223.08 and HCl(g) = 186.90, all in J K⁻¹ mol⁻¹. The rounded reference data come from NIST: H₂ above, [Cl₂](https://webbook.nist.gov/cgi/cbook.cgi?ID=C7782505&Mask=1) and [HCl](https://webbook.nist.gov/cgi/cbook.cgi?ID=C7647010&Mask=1), consulted 15 October 2026.

Calculate ΔS for the reaction as written and for forming **one mole** of HCl(g). Assess the statement “equal gas moles on both sides means zero entropy change”.

<details markdown="1">
<summary>Hint</summary>

Count each species using its coefficient; decide whether the second requested equation is the original equation or half of it.

</details>

<details markdown="1">
<summary>Answer and self-check</summary>

$$\begin{aligned}\Delta S^\circ&=2(186.90)-[130.68+223.08]\\&=+20.04\,\mathrm{J\,K^{-1}\,mol^{-1}}.\end{aligned}$$

For one mole of HCl, halve the equation and the value: +10.02 J K⁻¹ mol⁻¹. Equal gas amounts do not force ΔS to zero because the molar entropies of different gases differ. The gas-mole rule is a useful trend, not a substitute for the table. Reattempt for the reverse equation and explain its sign.

</details>

### Q9 — what does a model difference establish? (self-written) {#q9}

The table contains **constructed data for two hypothetical salts**, not measured literature values. All entries are lattice **dissociation** enthalpies in kJ mol⁻¹. For this task take the model values as fixed and the quoted experimental uncertainty as an interval.

| Salt | Perfect ionic model | Cycle value inferred from experimental data |
| --- | --- | --- |
| P | +1800 | +1803 ± 10 |
| Q | +1600 | +1740 ± 10 |

Which result gives clearer evidence of departure from the ideal ionic model? Explain a possible chemical cause and one conclusion these numbers cannot establish. A student reverses the direction of the cycle value for Q to −1740 but still compares it with +1600; correct the comparison.

<details markdown="1">
<summary>Hint</summary>

Compare each difference with the stated interval and make both enthalpy directions match.

</details>

<details markdown="1">
<summary>Answer and self-check</summary>

P differs by 3 kJ mol⁻¹ and its interval includes 1800; this evidence does not resolve a departure. Q differs by 140 kJ mol⁻¹, with its interval well above 1600, so it provides clearer evidence within the stated assumptions. Polarisation/covalent character may account for additional stabilisation; these data alone do not measure the fraction of covalent bonding or prove that other model assumptions are exact. For formation, compare −1740 with **−1600**; for dissociation compare +1740 with +1600. Both conventions imply extra stabilisation of the real solid, not opposite chemistry.

</details>

## Quick reference and error repair {#quick-reference}

| Check | Use it to prevent |
| --- | --- |
| Definition: 1 mol + initial state + final state | Confusing solid-salt solution with gaseous-ion hydration |
| Cycle: same endpoints; reverse arrow → reverse sign | Treating lattice formation and dissociation as the same direction |
| Count every ion before substituting | Missing the second halide hydration/electron-affinity term |
| Heat absorbed by solution has the opposite sign to reaction heat | A positive reaction enthalpy for a temperature rise |
| Entropy: product total − reactant total; apply coefficients | Subtracting the two sides in the wrong order |
| Gibbs graph: intercept is enthalpy; gradient is negative entropy | Confusing a positive entropy change with a positive gradient |
| $\Delta G^\circ=\Delta H^\circ-T\Delta S^\circ$; use consistent J or kJ and K | A threshold wrong by a factor of 1000 |

| Your error | Repair route | Reattempt |
| --- | --- | --- |
| Definition lacks states or one mole | [Definitions](#definitions) | [Q1](#q1) |
| Cycle sign or chlorine coefficient is wrong | [Example 2](#example-2) | [Q2](#q2), then [Q3](#q3) |
| Size explanation stops at “smaller” | [Ionic model](#solution) | [Q4](#q4), including attraction and energy |
| Temperature rise gives a positive enthalpy | [Q5 solution](#q5); check heat recipient and molar units | [Q5](#q5), solutions closed |
| Gibbs gradient or temperature range is reversed | [Example 4](#example-4) | [Q7](#q7), with a fresh sketch |

After a repair, write one sentence naming the cause of the error and reattempt without copying the answer.

<span id="闭卷检查与下一步"></span>

## Completion and next step {#completion}

Close the solutions. Draw a solution cycle for CaBr₂, explain why Br⁻ hydration appears twice, state the gradient of a $\Delta G$–$T$ graph, and distinguish thermodynamic feasibility from a fast reaction.

**Completion standard:** independently draw cycles, compare experimental and ideal-model values, calculate reaction entropy from a molar-entropy table with coefficients, explain signs, calculate Gibbs free energy, decide temperature ranges and check units. Reattempt corrected questions with solutions closed.

[Back to course](/alevel/a2-chemistry/) · Next: [electrode potentials and cells](/alevel/a2-chemistry/electrode-potentials/).
