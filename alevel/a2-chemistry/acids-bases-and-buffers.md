---
title: Acids, bases and buffers
layout: subjects
mathjax: true
lang: en
grade: a2
subject: a2-chemistry
permalink: /alevel/a2-chemistry/acids-bases-and-buffers/
toc_headings: h2
study_page: true
---

[CH03 course](/alevel/a2-chemistry/) · 3.1.10 · Textbook Chapter 21, printed pp. 322–343

## Introduction and prerequisites {#introduction}

- **Learning:** start with the [method](#method), then work through the examples.
- **Homework help:** identify the system in the [method table](#method), then find its exam question.
- **Revision:** attempt [practice](#practice) first, then use the [quick reference](#quick-reference).

**Before you start:** convert cm³ to dm³, calculate moles from concentration and volume, balance neutralisation equations and reverse logarithms to find concentrations. If needed, try the [course prerequisite check](/alevel/a2-chemistry/#prerequisites).

Distinguish acid strength from concentration, use $K_w$ and $K_a$ for equilibrium, then connect stoichiometry with equilibrium. Ask throughout: **am I working with the original solution, amounts after neutralisation, or equilibrium concentrations?**

**Try first:** if pure water has a pH other than 7 after a temperature change, must it be acidic? Write the condition for neutrality.

## Method {#method}

List the species actually present in the solution. Whenever acid or alkali has been added, check reaction stoichiometry first.

| Task | First step | What follows |
| --- | --- | --- |
| Strong acid/alkali or dilution | Find ion concentration from the formula and final volume | Use pH or the ionic product of water; see [Example 1](#example-1), [Q1](#q1) |
| Weak acid alone | Write the equilibrium and initial concentration | Estimate dissociation and check the approximation; see [Example 2](#example-2), [Q5](#q5) |
| Titration graph | Locate the equivalence volume first | Find acid moles; read pKa at half equivalence; see [Q3](#q3) |
| Weak acid plus a limited amount of strong alkali | Construct a mole table after neutralisation | Use the buffer ratio only if both components remain; see [Example 3](#example-3), [Q4](#q4) |
| Indicator or experimental procedure | Inspect the pH jump near equivalence | The transition range must lie in the steep region; see [Q7](#q7) |

<span id="a1ph强酸强碱与水的离子积"></span>

## A1: pH, strong acids and alkalis, and the ionic product of water {#ph-and-kw}

A Brønsted–Lowry acid donates a proton; a base accepts one. A conjugate pair differs by one H⁺. **Strength** describes ionisation; **concentration** describes amount per unit volume. Do not confuse them.

$$\mathrm{pH}=-\log_{10}[\mathrm H^+]$$

$$[\mathrm H^+]=10^{-\mathrm{pH}}$$

$$K_w=[\mathrm H^+][\mathrm{OH}^-]$$

Use concentrations in mol dm⁻³. For a strong monoprotic acid at usual exam concentrations, $[\mathrm H^+]\approx c$. NaOH supplies one OH⁻ per formula unit; Ba(OH)₂ supplies two. Find ion concentration from the formula before calculating pH. Very dilute solutions require water's own ionisation; $[\mathrm H^+]=c$ is not unconditional.

$$\mathrm{pH}+\mathrm{pOH}=\mathrm{p}K_w.$$

The right-hand side is 14.00 only when $K_w=1.00\times10^{-14}$. **Neutrality always means $[\mathrm H^+]=[\mathrm{OH}^-]$**; neutral pH is $\tfrac12\mathrm{p}K_w$. Water ionisation is endothermic, so raising the temperature increases $K_w$.

### Example 1: Diluting a strong acid (self-written) {#example-1}

**Question:** At 298 K, dilute 10.0 cm³ of 0.100 mol dm⁻³ HCl to 50.0 cm³. Find the pH.

**Method:** There is no neutralisation. H⁺ moles stay constant; use the final volume.

1. Convert to dm³: H⁺ moles = 0.100 × 0.0100 = 0.00100.
2. $[\mathrm H^+]=(0.100\times0.0100)/0.0500=0.0200$.
3. pH = −log₁₀(0.0200) = **1.70**.

**Independent check:** Fivefold dilution raises pH from 1.00 by log₁₀5 ≈ 0.70. Acid moles remain 0.0200 × 0.0500 = 0.00100.

<span id="真题中性水不一定是-ph-7"></span>

### Q1 Exam question: Neutral water need not have pH 7 {#q1}

**OxfordAQA CH03 · June 2026 · 11.2–11.4 · 1 + 2 + 3 marks**

> **11.2** At 5 °C, the pH of pure water is not 7.00. State why the water is neutral, even though the pH is not 7.00.
>
> **11.3** At 5 °C, $K_w=1.86\times10^{-15}\,\mathrm{mol^2\,dm^{-6}}$. Calculate the pH of water at 5 °C. Give your answer to 2 decimal places.
>
> **11.4** Calculate the pH of a 0.100 mol dm⁻³ solution of Ba(OH)₂ at 5 °C. Give your answer to 2 decimal places. At 5 °C, $K_w=1.86\times10^{-15}\,\mathrm{mol^2\,dm^{-6}}$.

<details markdown="1">
<summary>Hint</summary>

For pure water use $[\mathrm H^+]=\sqrt{K_w}$. For Ba(OH)₂ first find $[\mathrm{OH}^-]=2c$, then use $K_w$ to find H⁺.

</details>

<details markdown="1">
<summary>Solution and self-check</summary>

MS pp. 31–32.

- 11.2: $[\mathrm H^+]=[\mathrm{OH}^-]$, 1 mark.
- 11.3: $[\mathrm H^+]=\sqrt{1.86\times10^{-15}}=4.31\times10^{-8}$, pH = **7.37**. Concentration and pH each earn 1 mark.
- 11.4: $[\mathrm{OH}^-]=0.200$; $[\mathrm H^+]=1.86\times10^{-15}/0.200=9.30\times10^{-15}$; pH = **14.03**. Each step earns 1 mark.

Do not treat 14 as an absolute upper limit for pH, or define acidity as pH below 7 without considering temperature.

</details>

<span id="a2弱酸ka-与近似条件"></span>

## A2: Weak acids, Ka and approximation conditions {#weak-acids}

For a monoprotic weak acid $\ce{HA <=> H+ + A^-}$:

$$K_a=\frac{[\mathrm H^+][\mathrm A^-]}{[\mathrm{HA}]},\qquad\mathrm pK_a=-\log_{10}K_a.$$

At constant temperature, changing the initial concentration does not change $K_a$, but changes equilibrium concentrations and the dissociation fraction. A larger $K_a$ and smaller p$K_a$ indicate a stronger acid.

For a solution containing only this acid, let its initial concentration be $c$ and the amount dissociated per unit volume be $x$, neglecting water ionisation:

$$K_a=\frac{x^2}{c-x}.$$

Only if **$x\ll c$** can we use $c-x\approx c$, giving $[\mathrm H^+]\approx\sqrt{K_ac}$. Estimate $x$, then check that $x/c$ is sufficiently small; otherwise solve the quadratic. Do not directly apply the weak-acid-only formula when salts, added alkali or other H⁺ sources are present.

### Example 2: A weak acid and its approximation (self-written) {#example-2}

**Question:** A monoprotic weak acid has $c=0.100$ and $K_a=1.00\times10^{-5}$ (concentration units: mol dm⁻³). Find its pH and check the approximation.

**Method:** Only the weak acid is present. Estimate dissociation before deciding whether the decrease in acid concentration is negligible.

1. Using the equilibrium above, $x\approx1.00\times10^{-3}$.
2. About 1% of the initial acid dissociates, so the small-dissociation approximation is reasonable.
3. pH ≈ **3.00**.

**Independent check:** Retaining the decrease in the denominator and solving the quadratic gives H⁺ concentration about 9.95 × 10⁻⁴ mol dm⁻³ and pH about 3.002. This agrees with the approximation to two decimal places.

<span id="真题从-pka-得到-ka"></span>

### Q2 Exam question: Finding Ka from pKa {#q2}

**OxfordAQA CH03 · June 2026 · 10.1–10.2 · 1 + 1 marks**

Butanoic acid is a weak acid.

$$\ce{CH3CH2CH2COOH(aq) <=> CH3CH2CH2COO^-(aq) + H+(aq)}.$$

At 298 K, the pKa for butanoic acid = 4.82.

> **10.1** Give the expression for the acid dissociation constant, Ka, for butanoic acid.
>
> **10.2** Calculate the value of Ka, in mol dm⁻³, for butanoic acid at 298 K.

<details markdown="1">
<summary>Hint</summary>

The exponent is $-\mathrm pK_a$. The denominator of the expression is the equilibrium concentration of undissociated acid.

</details>

<details markdown="1">
<summary>Solution and self-check</summary>

MS pp. 28.

$$K_a=\frac{[\ce{CH3CH2CH2COO^-}][\mathrm H^+]}{[\ce{CH3CH2CH2COOH}]}.$$

$$K_a=10^{-4.82}=\boxed{1.51\times10^{-5}\,\mathrm{mol\,dm^{-3}}}.$$

The expression and numerical value each earn 1 mark. Do not substitute initial moles for equilibrium concentrations.

</details>

<details markdown="1">
<summary>Extension: Why does January 2025 10.1 need an approximation warning?</summary>

This hydrated Fe³⁺ question gives $\mathrm pK_a=2.22$, 1.35 g FeCl₃ and 750 cm³. The original mark scheme (MS p. 30) uses $\sqrt{K_ac}$ and obtains **pH = 2.09**.

However, $K_a=6.03\times10^{-3}$ and $c=(1.35/162.3)/0.750=0.0111$. The approximation predicts about **74%** dissociation, which is not small. Using **the same single-step dissociation model** but retaining $c-x$ and solving the quadratic gives pH ≈ **2.24**.

Distinguish **the original marking method** from **the approximation's validity conditions**. The value 2.24 belongs to this single-step model, not a complete prediction of real multistep Fe³⁺ hydrolysis. This is not an example for unconditional use of the square-root formula.

</details>

<span id="a3滴定曲线指示剂与-rp7"></span>

## A3: Titration curves, indicators and RP7 {#titration}

When acid is in the conical flask and alkali is added, begin with the initial pH, then identify neutralisation and excess-alkali regions. The **equivalence point** is stoichiometric neutralisation; the **end point** is the indicator's visible change. They should be close, but are not the same definition.

| Acid/alkali combination | Near equivalence | Indicator choice |
| --- | --- | --- |
| Strong acid/strong alkali | Equivalence about pH 7 at 298 K; wide pH jump | Usually either methyl orange or phenolphthalein |
| Weak acid/strong alkali | Conjugate base gives pH > 7 at equivalence; buffer region beforehand | Usually phenolphthalein |
| Strong acid/weak alkali | Conjugate acid gives pH < 7 at equivalence | Usually methyl orange |
| Weak acid/weak alkali | Small jump; a clear visual end point may be absent | Usually a pH measurement method |

Choose an indicator whose transition range lies in the steep pH jump, rather than using one indicator for every titration. For a monoprotic weak acid/strong alkali at half equivalence, $[\mathrm{HA}]=[\mathrm A^-]$, so **pH = pKa**.

**RP7:** Calibrate the pH meter, pipette the acid accurately, stir and wait for stable readings. Make smaller additions near expected equivalence and larger ones elsewhere. Plot pH against added volume; a few widely spaced points cannot locate equivalence reliably. Rinse the probe, avoid contamination and interpret data at the stated temperature.

<span id="真题从原滴定图求浓度和-ka"></span>

### Q3 Exam question: Concentration and Ka from the original titration graph {#q3}

**OxfordAQA CH03 · June 2024 · 05.5–05.6 · 3 + 3 marks**

A student adds 0.100 mol dm⁻³ aqueous sodium hydroxide from a burette to 25.0 cm³ of an aqueous solution of the weak acid HX. Figure 4 shows how the pH changes during part of this titration at 298 K.

![Original Figure 4: weak acid HX titrated with sodium hydroxide; pH against volume of NaOH in cubic centimetres.](/assets/img/a2-chemistry/ch03-2024-jun-q05-titration.png)

> **05.5** Use Figure 4 to determine the concentration, in mol dm⁻³, of the weak acid, HX.
>
> **05.6** Use Figure 4 to determine the pH of the mixture at half equivalence (half neutralisation). Use this pH to determine the value of the acid dissociation constant, Ka, at 298 K for the weak acid HX. Give the units for Ka.

<details markdown="1">
<summary>Hint</summary>

HX is monoprotic, so at equivalence $n(\mathrm{HX})=n(\mathrm{NaOH})$. Half equivalence means half the equivalence volume, not half the pH.

</details>

<details markdown="1">
<summary>Solution and self-check</summary>

MS pp. 20.

05.5: Equivalence volume is about 27.0 cm³; acid moles are $0.100\times0.0270=0.00270$; original concentration is $0.00270/0.0250=\boxed{0.108\,\mathrm{mol\,dm^{-3}}}$. Each step earns 1 mark.

05.6: At 13.5 cm³ the pH is about **5.3**, so $K_a=10^{-5.3}=\boxed{5.01\times10^{-6}\,\mathrm{mol\,dm^{-3}}}$. Reading the graph, Ka and units each earn 1 mark. The original MS accepts a reasonable reading range; do not invent extra precision.

</details>

<span id="a4缓冲溶液先中和再平衡"></span>

## A4: Buffers — neutralisation before equilibrium {#buffers}

An **acidic buffer** contains a weak acid HA and a substantial amount of its conjugate base A⁻. A little added H⁺ reacts by $\ce{A^- + H+ -> HA}$; a little added OH⁻ reacts by $\ce{HA + OH^- -> A^- + H2O}$. H⁺ concentration and pH change only slightly, **not by zero**. Buffer capacity is limited; exhausting a component prevents the same buffering action.

An **alkaline buffer** can contain NH₃ and an NH₄⁺ salt: NH₃ consumes added H⁺ and NH₄⁺ consumes added OH⁻. Understand both principles; quantitative work here focuses on acidic buffers.

$$[\mathrm H^+]\approx K_a\frac{[\mathrm{HA}]}{[\mathrm A^-]},\qquad\mathrm{pH}=\mathrm pK_a+\log_{10}\frac{[\mathrm A^-]}{[\mathrm{HA}]}.$$

Within one final volume, the concentration ratio equals the mole ratio. For a buffer formed by partial neutralisation, first calculate HA consumed, A⁻ formed and any OH⁻ remaining in a mole table. The two-component buffer formula does not apply to a fully neutralised salt solution or a solution containing excess strong alkali.

### Example 3: Neutralise before calculating buffer pH (self-written) {#example-3}

**Question:** At 298 K, mix 20.0 cm³ of 0.100 mol dm⁻³ monoprotic weak acid (Ka = 1.00 × 10⁻⁵ mol dm⁻³) with 10.0 cm³ of 0.100 mol dm⁻³ NaOH. Find the pH.

**Method:** Calculate HA and A⁻ after neutralisation and check that no strong alkali remains.

1. Initially there are 0.00200 mol acid and 0.00100 mol OH⁻. They react in a 1:1 ratio.
2. Finally HA and A⁻ are each 0.00100 mol, with no OH⁻ remaining. Both occupy 0.0300 dm³, so their concentration ratio equals their mole ratio.
3. H⁺ concentration is approximately Ka × 1 = 1.00 × 10⁻⁵ mol dm⁻³; **pH = 5.00**.

**Independent check:** Equal HA and A⁻ amounts give pH = pKa. The total acid species remain 0.00100 + 0.00100 = 0.00200 mol. The H⁺ concentration comes from equilibrium, not leftover strong acid.

<span id="真题部分中和形成缓冲"></span>

### Q4 Exam question: A buffer formed by partial neutralisation {#q4}

**OxfordAQA CH03 · June 2026 · 10.3 · 6 marks**

> A different acid, propanoic acid, CH₃CH₂COOH is reacted with NaOH.
>
> 14.0 cm³ of 0.200 mol dm⁻³ aqueous propanoic acid are reacted with 25.0 cm³ of 0.100 mol dm⁻³ aqueous NaOH.
>
> At 298 K, the Ka of propanoic acid = $1.35\times10^{-5}\,\mathrm{mol\,dm^{-3}}$.
>
> Calculate the pH of the final mixture. Give your answer to 2 decimal places.

<details markdown="1">
<summary>Hint</summary>

Write initial, reacting and final amounts. Do both weak acid and conjugate base remain? Do not insert the two original solution concentrations directly.

</details>

<details markdown="1">
<summary>Solution and self-check</summary>

MS pp. 29.

| Species | Initial mol | Final mol |
| --- | --- | --- |
| CH₃CH₂COOH | $0.0140\times0.200=0.00280$ | $0.00280-0.00250=0.000300$ |
| OH⁻ | $0.0250\times0.100=0.00250$ | 0 |
| CH₃CH₂COO⁻ | 0 | 0.00250 |

$$[\mathrm H^+]=1.35\times10^{-5}\frac{0.000300}{0.00250}=1.62\times10^{-6},\qquad \boxed{\mathrm{pH}=5.79}.$$

The six marking steps are acid moles, alkali moles, acid remaining, the correct equilibrium relationship, H⁺ concentration and pH. The starting acid is propanoic acid, so use the propanoic acid/propanoate pair throughout.

**Reattempt:** change the NaOH volume to 28.0 cm³. Neutralisation is now complete; the buffer ratio used in this question no longer applies.

</details>

## Practice {#practice}

Keep hints and answers closed initially. Use this index to select a task and state your first step.

| Practice | Skill to check |
| --- | --- |
| [Q1: Cold pure water and strong alkali](#q1) | Neutrality, ion stoichiometry and temperature-dependent Kw |
| [Q2: pKa and Ka](#q2) | Equilibrium expression and inverse logarithm |
| [Q3: Titration graph](#q3) | Equivalence volume, original acid concentration and half equivalence |
| [Q4: Buffer by partial neutralisation](#q4) | Post-reaction mole table and buffer ratio |
| [Q5: Weak-acid approximation (self-written)](#q5) | Independent check of the dissociation fraction |
| [Q6: Alkali added to a buffer (self-written)](#q6) | Updated moles and the direction of the pH change |
| [Q7: Indicator and RP7 (self-written)](#q7) | Choosing from a curve and adjusting reading intervals |

### Q5 Weak-acid approximation (self-written) {#q5}

A monoprotic weak acid has initial concentration 0.0100 mol dm⁻³ and Ka = 1.00 × 10⁻⁵ mol dm⁻³. Calculate an approximate pH, check the dissociation fraction and verify using the quadratic equation.

<details markdown="1">
<summary>Hint</summary>

Use the equilibrium in [Example 2](#example-2). Estimate first, then check.

</details>

<details markdown="1">
<summary>Solution and self-check</summary>

Self-written task; no official marks. Approximate H⁺ concentration is 3.16 × 10⁻⁴ mol dm⁻³ and pH ≈ **3.50**; about 3.16% dissociates. The full quadratic gives 3.11 × 10⁻⁴ mol dm⁻³ and pH ≈ **3.51**. The small-dissociation approximation is reasonably good here, but differs by about 0.01 in pH to two decimal places. Do not claim exactness without checking.

</details>

### Q6 Adding a little strong alkali to a buffer (self-written) {#q6}

Add 0.000200 mol NaOH to the final buffer in [Example 3](#example-3), at the same temperature. Ignore the volume change. Predict the direction of the pH change, then calculate it.

<details markdown="1">
<summary>Hint</summary>

OH⁻ consumes HA and produces the same amount of A⁻. Construct a new mole table before using the buffer ratio.

</details>

<details markdown="1">
<summary>Solution and self-check</summary>

Self-written task; no official marks. HA is 0.000800 mol and A⁻ is 0.00120 mol; pH = 5.00 + log₁₀(1.50) = **5.18**. The pH rises slightly and both components remain. Their total amount is still 0.00200 mol.

</details>

### Q7 Indicator and titration readings (self-written) {#q7}

The steep region near equivalence in a weak-acid/strong-alkali titration spans pH 8–10. Given transition ranges of 3.1–4.4 for methyl orange and 8.2–10.0 for phenolphthalein, select an indicator and explain why. Explain why adding 5 cm³ of alkali at every step near the expected equivalence point is unsuitable.

<details markdown="1">
<summary>Hint</summary>

Locate the transition ranges within the pH jump. Consider what a large volume interval could miss.

</details>

<details markdown="1">
<summary>Solution and self-check</summary>

Self-written task; no official marks. Choose phenolphthalein: its transition range lies in the steep region, so a small addition of alkali produces a clear colour change. A 5 cm³ interval could span the whole pH jump and make equivalence difficult to locate. Use smaller additions nearby, stir and wait for stable readings.

</details>

## Quick reference and error diagnosis {#quick-reference}

| System or definition | Reference | Exam trap |
| --- | --- | --- |
| Neutrality | Equal H⁺ and OH⁻ concentrations | pH = 7 requires the appropriate temperature-dependent Kw |
| Strong/weak versus concentrated/dilute | Extent of ionisation versus amount per unit volume | A strong acid can be dilute; a weak acid can be concentrated |
| pH and Kw | Find ion concentration before applying A1 | Ba(OH)₂ supplies twice its preparation concentration of OH⁻ |
| Weak acid alone | Use A2's Ka equilibrium; square-root approximation for small dissociation | Check the fraction of the initial acid that dissociates |
| Half equivalence | pH = pKa | Halve the volume, not the pH |
| Buffer | Neutralise first, then use A4's concentration or mole ratio | Both components must remain; pH is not perfectly constant |

**Independent checks:** conserve amounts in every mole table and reject negative amounts. Use mol dm⁻³ for concentrations. Predict the direction of a pH change before calculating it. Check weak-acid approximations and avoid precision unsupported by a graph.

| Wrong answer or difficulty | Return to | Close the answer and reattempt |
| --- | --- | --- |
| Writing pH 7 for neutral water at 5 °C | [A1](#ph-and-kw), [Q1](#q1) | State the neutrality condition, then recalculate 11.3 |
| Ka greater than 1 from pKa = 4.82 | [A2](#weak-acids), [Q2](#q2) | Check the exponent's sign and retry 10.2 |
| Using the pure weak-acid formula after adding alkali | [Example 3](#example-3), [Q4](#q4) | Reconstruct the final mole table and retry 10.3 |
| Buffer pH falling after adding alkali | [Q6](#q6), [A4](#buffers) | Predict the HA/A⁻ change before recalculating |
| Taking half equivalence to mean half the pH | [A3](#titration), [Q3](#q3) | Read the pH again at 13.5 cm³ |

<span id="闭卷检查与下一步"></span>

## Completion and next steps {#completion}

Without looking at the formulas, state the first step for a weak acid alone, a strong alkali, half equivalence and a buffer. Explain the two approximations: small weak-acid dissociation and negligible depletion of buffer components.

**Ready to move on:** without the solutions, choose a calculation method, construct a correct neutralisation mole table, check a weak-acid approximation and justify an indicator from a curve. For any missing skill, use the diagnosis table and reattempt its task.

[Previous: Electrode potentials](/alevel/a2-chemistry/electrode-potentials/) · [Next: Period 3](/alevel/a2-chemistry/period-3/) · [Back to the CH03 course](/alevel/a2-chemistry/)
