---
title: Formulae and Gas Evidence
layout: subjects
mathjax: true
grade: as
subject: as-chemistry
permalink: /alevel/as-chemistry/formulae-and-gases/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">What can a mass measurement tell us about a formula?</h2>

A formula claims a ratio of atoms; a balance measures a ratio of masses. Those ratios are usually different because atoms of different elements have different masses. To infer a formula, first convert each element's mass into an amount of its atoms. A gas measurement can provide a second, independent constraint on molecular mass.

You need [molar mass and particle ratios](/alevel/as-chemistry/amount-and-equations/#mole-bridge). By the end, you should distinguish an empirical formula from a molecular formula, infer each from suitable data and judge what a gas calculation assumes. All examples and data here are constructed for learning, not measurements of real samples.

<h2 id="composition-model">Mass ratio is not atom ratio</h2>

The **empirical formula** gives the simplest whole-number ratio of atoms of each element. The **molecular formula** gives the actual number of each type of atom in one molecule. $\ce{CH2}$ is the empirical formula of both $\ce{C2H4}$ and $\ce{C3H6}$; it does not tell us which molecule is present. Ionic solids can have empirical/formula-unit ratios without having a molecular formula.

If a molecular compound contains only C, H and O, the mass percentages add to 100%. You may imagine a 100 g sample: the percentages then have the same numerical values as masses in grams. This is a convenient choice of scale, not evidence that the real sample weighed 100 g. Divide by the atomic molar masses, then divide all atom amounts by the smallest. If the result is near 1:1.5, multiply **every** entry by 2 to obtain 2:3. Rounding 1.5 straight to 2 changes the composition.

Measured data have limited precision: a ratio near a small integer can be consistent with it. If the data are far from a plausible simple ratio, inspect measurement errors or the assumption about which elements are present; do not force any number into the nearest integer.

<div class="worked-example" markdown="1">
**Worked example — self-written composition data.**
<!-- task:worked-formula -->
A pure molecular compound contains 40.0% carbon, 6.67% hydrogen and 53.3% oxygen by mass. Its relative molecular mass is 60.0. Use C = 12.0, H = 1.0 and O = 16.0. Determine its empirical and molecular formulae. Does this identify its structure?
<!-- /task:worked-formula -->

Choose a 100 g basis and count atoms through their molar masses:

| Element | Chosen mass / g | Amount of atoms / mol | Divide by 3.33125 |
| --- | --- | --- | --- |
| C | 40.0 | 40.0/12.0 = 3.3333… | 1.0006… |
| H | 6.67 | 6.67/1.0 = 6.67 | 2.0023… |
| O | 53.3 | 53.3/16.0 = 3.33125 | 1 |

Within rounding, the atom ratio is 1:2:1, so the empirical formula is $\ce{CH2O}$. Its relative formula mass is $12.0+2(1.0)+16.0=30.0$. The molecule is twice as heavy as this unit:

$$k=\frac{M_r\text{ of molecule}}{\text{relative mass of empirical unit}}=\frac{60.0}{30.0}=2$$

Multiply every empirical subscript by $k$: the molecular formula is **$\ce{C2H4O2}$**. Check mass fractions: $24/60=40.0\%$ carbon, $4/60=6.67\%$ hydrogen and $32/60=53.3\%$ oxygen. Formula evidence does not show connectivity; more than one structure can have this formula. A value of $k$ far from a positive integer would challenge the data or model.
</div>

<div class="lesson-check" markdown="1">
<h3 id="composition-check">Assess a proposed formula</h3>
<!-- task:composition-check -->
A compound contains only C, H and O. It contains 54.5% C and 9.1% H by mass and has Mr = 88.0. Use C = 12.0, H = 1.0 and O = 16.0. A student proposes C2H4O as its molecular formula. Determine the empirical formula, test the proposal against both pieces of evidence, and give the molecular formula consistent with the data.
<!-- /task:composition-check -->
<details markdown="1"><summary>Hint</summary>
Find the missing percentage, then distinguish a composition ratio from the size of a molecule.
</details>
<details markdown="1"><summary>Solution and check</summary>
Oxygen is 36.4%. On a 100 g basis the atom amounts are 4.5417, 9.1 and 2.275 mol, giving approximately **2:4:1**. $\ce{C2H4O}$ is the empirical formula, with relative mass 44.0. It fits the percentages but not the stated molecular mass. $k=88.0/44.0=2$, so the molecular formula is **$\ce{C4H8O2}$**. If you stopped at the ratio, revisit [the molecular multiplier](#composition-model), then do [the formula retry](#retry-formula).
</details>
</div>

<h2 id="gas-model">A gas volume is conditional evidence</h2>

A gas sample can occupy different volumes when its temperature or pressure changes. There is no universally fixed volume per mole. For an ideal-gas approximation:

$$pV=nRT$$

With $R=8.31\,\mathrm{J\,mol^{-1}\,K^{-1}}$, use **absolute pressure in Pa**, volume in $\mathrm{m^3}$ and absolute temperature in K. Use $T/\mathrm K=\theta/{}^\circ\mathrm C+273.15$, or the approximation supplied by a question. $1\,\mathrm{kPa}=1000\,\mathrm{Pa}$, $1\,\mathrm{dm^3}=10^{-3}\,\mathrm{m^3}$ and $1\,\mathrm{cm^3}=10^{-6}\,\mathrm{m^3}$. Note that a dm³-to-m³ conversion differs from a cm³-to-m³ conversion.

The model treats particle volumes and attractions as negligible for its equation of state. It is often a useful approximation at relatively low pressures and sufficiently far from condensation; it is less reliable near liquefaction or at high density. That is a model limitation, distinct from reading a scale incorrectly.

Rearrange only after deciding what the gas represents:

$$n=\frac{pV}{RT},\qquad M=\frac{mRT}{pV}$$

The second expression follows by substituting $n=m/M$, not by a new independent law. If $m$ is in grams, $M$ comes out in $\mathrm{g\,mol^{-1}}$. Check that all weighed sample became the collected gas, that it is pure and that $p$, $V$ and $T$ describe the same collected sample. A mass lost from an apparatus is not automatically the mass of gas successfully collected. If the gas was collected over water, the measured pressure includes water vapour; use the gas's own pressure when a correction is provided or required.

<div class="worked-example" markdown="1">
**Worked example — self-written dry-gas data.**
<!-- task:worked-gas -->
A pure gas has mass 0.440 g and volume 249 cm3 at 100 kPa and 300 K. Treat it as ideal and dry. Use R = 8.31 J mol−1 K−1. Estimate its molar mass and assess whether the data are consistent with CO2 (M = 44.0 g mol−1).
<!-- /task:worked-gas -->

The data specify one sample. Convert $p=100000$ Pa and $V=249\times10^{-6}$ $\mathrm{m^3}$; temperature is already in kelvin. Calculate amount before converting mass:

$$n=\frac{100000(249\times10^{-6})}{8.31(300)}=0.00998797\ldots\,\mathrm{mol}$$

$$M=\frac{0.440}{0.00998797\ldots}=44.1\,\mathrm{g\,mol^{-1}}$$

At the stated precision, this is close to 44.0 and **consistent with** carbon dioxide. Molar mass alone does not identify a gas: other species or mixtures may give a similar apparent value. Calculate backwards for a check: a 0.440 g CO2 sample would be 0.0100 mol and occupy 249.3 cm³ at these conditions, close to the given volume.
</div>

<div class="lesson-check" markdown="1">
<h3 id="gas-check">Combine two kinds of evidence</h3>
<!-- task:gas-check -->
A pure molecular gas has empirical formula CH2 and mass 0.420 g. It occupies 249 cm3 at 100 kPa and 300 K. Treat it as ideal and dry. Use R = 8.31 J mol−1 K−1, C = 12.0 and H = 1.0. Infer its molecular formula. Does doubling this sample's volume at the same pressure and temperature necessarily make each molecule twice as heavy? Explain what must change if the sample remains the same pure substance.
<!-- /task:gas-check -->
<details markdown="1"><summary>Hint</summary>
First infer mass per mole from the gas evidence. A change in sample size is different from a change in molecular size.
</details>
<details markdown="1"><summary>Solution and check</summary>
$n=0.00998797\ldots$ mol and $M=0.420/n=42.1$ $\mathrm{g\,mol^{-1}}$. The empirical unit has relative mass 14.0, so $k\approx3$ and the molecular formula is **$\ce{C3H6}$**. This does not identify a particular structure. At fixed $p$ and $T$, $V\propto n$: doubling volume requires doubling the amount and mass, to about 0.840 g for the same substance; each molecule is unchanged. Keeping the mass fixed while doubling volume at the same $p,T$ would conflict with this model. If you doubled a subscript just because the sample is larger, revisit [formula size](#composition-model) and try [the gas retry](#retry-gas).
</details>
</div>

<h2 id="retry-formula">Rebuild a ratio after feedback</h2>

Close the earlier answers. Both retries and their data are self-written.

<div class="lesson-check" markdown="1">
<!-- task:retry-formula -->
A molecular compound contains 28.0 g of nitrogen and 48.0 g of oxygen in a sample. Its Mr is 76.0. Use N = 14.0 and O = 16.0. Determine the empirical formula and the molecular formula. A student rounds the ratio 1:1.5 to 1:2. Explain precisely why this fails, and check your own formula using the original mass ratio.
<!-- /task:retry-formula -->
<details markdown="1"><summary>Hint</summary>
Convert both masses to amounts of atoms. Whole-number subscripts must preserve the ratio, not round each entry separately.
</details>
<details markdown="1"><summary>Solution and check</summary>
There are 2.00 mol N atoms and 3.00 mol O atoms, giving **$\ce{N2O3}$**, relative unit mass 76.0. $k=76.0/76.0=1$, so the molecular formula is also **$\ce{N2O3}$**. The ratio 1:1.5 must be multiplied throughout by 2. Rounding to 1:2 would predict a mass ratio 14:32, unlike 28:48. Our empirical formula predicts 28:48 exactly.
</details>
</div>

<h2 id="retry-gas">Check the units and the collection model</h2>

<div class="lesson-check" markdown="1">
<!-- task:retry-gas -->
A 0.580 g sample becomes a pure dry gas occupying 250 cm3 at 100 kPa and 300 K. Assume ideal behaviour and no loss. Use R = 8.31 J mol−1 K−1. Estimate its molar mass. If the true volume is instead 500 cm3 at the same pressure, temperature and mass, estimate the molar mass implied by those revised data. Separately, if some gas escaped before collection but the full 0.580 g were still used in the calculation, would the estimated molar mass be too high or too low?
<!-- /task:retry-gas -->
<details markdown="1"><summary>Hint</summary>
Use $M=mRT/(pV)$ and trace one change at a time. Keep a data revision separate from an experimental loss.
</details>
<details markdown="1"><summary>Solution and check</summary>
For 250 cm³, $n=0.0100281\ldots$ mol and **$M=57.8$ $\mathrm{g\,mol^{-1}}$**. The revised 500 cm³ data imply **28.9 $\mathrm{g\,mol^{-1}}$**. These are two alternative interpretations, not a doubling of the amount of the same fixed-mass substance at unchanged $p,T$. In the loss case the collected volume and inferred $n$ are too small for the mass used, so $m/n$ is too high. Repeated readings do not correct a consistently leaking apparatus. If the direction was wrong, identify numerator and denominator explicitly before retrying.
</details>
</div>

Next follow a dissolved sample through [solution preparation and titration](/alevel/as-chemistry/solutions-and-titration/). Later use the [mixed review](/alevel/as-chemistry/quantitative-review/) to decide which evidence supports a formula or a purity claim. [Back to the course](/alevel/as-chemistry/).

<h2 id="sources">Scope and reading</h2>

OxfordAQA 9620 AS 3.1.2.3–4; [current specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf), pp. 13–14. Textbook: Lister and Renshaw, *International A Level Chemistry* (OUP, 2016), §§2.3–2.4, pp. 36–43. Tasks, datasets and checking criteria are self-written. A calculation from idealized data is not a real gas identification or apparatus trial.
