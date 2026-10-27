---
title: Quantitative Chemistry Review
layout: subjects
mathjax: true
grade: as
subject: as-chemistry
permalink: /alevel/as-chemistry/quantitative-review/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">Choose what the evidence lets you calculate</h2>

Use this review after the three quantitative lessons, then return after studying another topic. On the first attempt, keep hints and answers closed and explain why your chosen relationships apply. These are self-written tasks with constructed data, not official examination questions or real experiments. There is no prescribed time limit or official mark allocation.

You need [amount and equations](/alevel/as-chemistry/amount-and-equations/), [formulae and gases](/alevel/as-chemistry/formulae-and-gases/), and [solutions and titration](/alevel/as-chemistry/solutions-and-titration/). The task titles do not name the method. Write your working and identify the sample or entity at each step; an unsupported number is not sufficient evidence of understanding.

<h2 id="mixed-tasks">Work from the measurements</h2>

<div class="lesson-check" markdown="1">
<h3 id="unknown-check">A solid sample</h3>
<!-- task:unknown-check -->
A 1.20 g solid contains MgCO3 and an inert impurity that neither reacts nor releases gas under the conditions used. Excess HCl converts all MgCO3 to MgCl2, CO2 and H2O. Pure dry CO2 is collected without loss: 249 cm3 at 100 kPa and 300 K. Use R = 8.31 J mol−1 K−1, Mg = 24.3, C = 12.0 and O = 16.0. Write the balanced reaction, estimate the mass percentage of MgCO3 in the solid and state whether a similar result from three repeats proves the method is accurate. If some CO2 escaped but the calculation assumed no loss, predict the change in inferred purity.
<!-- /task:unknown-check -->
<details markdown="1"><summary>Hint</summary>
The sample mass includes something that does not produce the measured gas. Determine the amount of gas first and use atom conservation.
</details>
<details markdown="1"><summary>Solution and check</summary>
$\ce{MgCO3(s) + 2HCl(aq) -> MgCl2(aq) + CO2(g) + H2O(l)}$. Convert to $p=100000$ Pa and $V=249\times10^{-6}$ $\mathrm{m^3}$. Gas amount is $pV/(RT)=0.00998797\ldots$ mol, equal to the carbonate amount because the ratio is 1:1. Carbonate mass is $0.00998797\ldots\times84.3=0.841986\ldots$ g. Purity is $0.841986\ldots/1.20\times100=\mathbf{70.2\%}$. This is below 100%, consistent with an inert impurity under the model. Agreement of repeats supports repeatability, not absence of a common bias. A gas leak reduces collected volume, inferred carbonate amount and inferred purity: it biases purity **low**. If you divided the gas mass by total sample mass, return to [reaction ratios](/alevel/as-chemistry/amount-and-equations/#reaction-ratios); if you used 249 directly as m³, revisit [gas units](/alevel/as-chemistry/formulae-and-gases/#gas-model).
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="evidence-check">A proposed conclusion</h3>
<!-- task:evidence-check -->
A pure molecular compound contains 40.0% C, 6.67% H and the remainder O by mass. An independent measurement gives Mr = 180. Use C = 12.0, H = 1.0 and O = 16.0. Determine the empirical and molecular formulae. A report concludes “it must be glucose, because the formula matches”. Evaluate this conclusion. Which part of your own answer would remain justified if the Mr measurement were withdrawn?
<!-- /task:evidence-check -->
<details markdown="1"><summary>Hint</summary>
Ask separately what determines an atom ratio, a molecular size and a particular arrangement of bonds.
</details>
<details markdown="1"><summary>Solution and check</summary>
Oxygen is 53.33% by difference. Atom amounts on a 100 g basis are about 3.333, 6.67 and 3.333 mol; the simplest ratio is 1:2:1, **$\ce{CH2O}$**, relative unit mass 30.0. $180/30.0=6$ gives **$\ce{C6H12O6}$**. This supports a molecular formula, not a unique identity: other compounds can have the same molecular formula. Without the molecular-mass result, only the empirical formula and its composition ratio remain established; the multiplier is unknown. If you identified a structure from percentages alone, revisit [what formula evidence means](/alevel/as-chemistry/formulae-and-gases/#composition-model).
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="record-check">Two laboratory records</h3>
<!-- task:record-check -->
A 25.00 cm3 aliquot of a sodium carbonate solution is fully neutralised by 0.1000 mol dm−3 HCl with a suitable indicator. Each carbonate consumes two HCl. Constructed accurate burette readings (initial, final), in cm3, are run 1 (0.10, 25.30), run 2 (0.50, 25.75), run 3 (1.00, 26.15). The stated concordance range is 0.10 cm3. Select a mean titre and calculate carbonate concentration. Each individual burette reading has stated uncertainty ±0.05 cm3: estimate the percentage reading contribution to the titre using summed absolute bounds. A second record gives very concordant titres but consistently overshoots the true endpoint. Explain the direction of its carbonate-concentration bias and why the first uncertainty estimate does not cover that fault.
<!-- /task:record-check -->
<details markdown="1"><summary>Hint</summary>
Keep a difference of two readings, an average of titres and a stoichiometric amount calculation as separate steps. Here the unknown is in the flask.
</details>
<details markdown="1"><summary>Solution and check</summary>
Titres are **25.20, 25.25, 25.15 cm³**; the span is 0.10, so all meet the given criterion. Mean is **25.20 cm³**. Acid amount is $0.1000\times0.02520=0.002520$ mol; carbonate amount is half, 0.001260 mol. Concentration is $0.001260/0.02500=\mathbf{0.05040\,mol\,dm^{-3}}$. A titre uses two readings, giving a summed bound ±0.10 cm³ and contribution $0.10/25.20\times100=\mathbf{0.40\%}$. This covers the stated reading uncertainty, not a deliberately displaced endpoint or all uncertainty sources. Overshoot increases titre; at the nominal known acid concentration it increases inferred acid moles and hence inferred carbonate concentration: **too high**. Repetition can preserve this bias. If you memorised “overshoot gives low”, compare the different unknown in [the acid-in-burette example](/alevel/as-chemistry/solutions-and-titration/#uncertainty-and-bias).
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="route-check">Compare two routes</h3>
<!-- task:route-check -->
Hydrogen is the only desired product in two proposed idealised routes: A, CH4 + H2O → CO + 3H2; B, CH4 + 2H2O → CO2 + 4H2. Use C = 12.0, H = 1.0 and O = 16.0. Check both equations, compare their atom economies for hydrogen, and find the maximum H2 mass for route B starting with 16.0 g CH4 and excess steam. If 6.00 g H2 is recovered, determine its percentage yield. Can atom economy and yield alone justify recommending route B to a community? State a specific further question about hazards, waste or energy that affects that judgement.
<!-- /task:route-check -->
<details markdown="1"><summary>Hint</summary>
Include the coefficients when allocating reactant mass. A route comparison is conditional on which products are considered useful.
</details>
<details markdown="1"><summary>Solution and check</summary>
Both conserve C, H and O. For A, stoichiometric reactant mass is $16.0+18.0=34.0$ and desired product mass is $3(2.0)=6.0$, so atom economy is **17.6%**. For B it is $4(2.0)/(16.0+2(18.0))\times100=\mathbf{15.4\%}$. More hydrogen per methane molecule does not guarantee higher hydrogen atom economy because extra water also enters the denominator. In B, 1.00 mol methane gives at most 4.00 mol hydrogen, **8.00 g**; recovered yield is **75.0%**. Route B's greater H2 per CH4 does not by itself settle safety or environmental impact. Ask, for example, how much process heat is needed and how that heat is supplied, or how the carbon-containing by-products are handled. The task defines CO as undesired; selling or reusing it would change the desired-product accounting. If you left out a coefficient, revisit [the percentage definitions](/alevel/as-chemistry/amount-and-equations/#two-percentages).
</details>
</div>

<h2 id="recovery">Find the failed decision and retry</h2>

Use your own working to choose a repair. For entity or limiting-reactant errors, return to [amount and equations](/alevel/as-chemistry/amount-and-equations/#retry-amount). For an empirical/molecular confusion, try [the formula retry](/alevel/as-chemistry/formulae-and-gases/#retry-formula). For preparation or endpoint bias, use [the titration retries](/alevel/as-chemistry/solutions-and-titration/#retry-preparation). For percentage denominators, use [the process retry](/alevel/as-chemistry/amount-and-equations/#retry-process). Close the worked answer before retrying; copying a correction is not independent evidence.

<div class="lesson-check" markdown="1">
<h3 id="later-check">Return after another topic</h3>
<!-- task:later-check -->
A 1.06 g sample contains Na2CO3 and inert material. It is quantitatively dissolved and made up to 250.0 cm3. A 25.00 cm3 aliquot consumes a mean 18.00 cm3 of 0.1000 mol dm−3 HCl at complete neutralisation. Use M(Na2CO3) = 106.0 g mol−1 and the 1:2 carbonate:HCl ratio. Determine the mass percentage of carbonate in the original sample. If the same aliquot had been diluted with extra water in its conical flask, would the result change? If the original 250.0 cm3 flask had instead been overfilled, with its actual volume ignored in the calculation, predict the direction of the reported purity bias. Explain in English without a provided sentence structure.
<!-- /task:later-check -->
<details markdown="1"><summary>Hint</summary>
Distinguish the small measured aliquot, the whole prepared solution and the original solid. Only one contains the entire original carbonate amount.
</details>
<details markdown="1"><summary>Solution and check</summary>
Acid amount is 0.001800 mol, so the aliquot contains 0.0009000 mol carbonate. The whole solution has ten aliquots' worth: 0.009000 mol, **0.9540 g** carbonate. Purity is $0.9540/1.06\times100=\mathbf{90.0\%}$. Water added after a correct aliquot leaves its carbonate moles and titre unchanged, so it leaves purity unchanged in this model. Overfilling the original flask dilutes every 25.00 cm³ aliquot: the titre decreases. Multiplying that smaller inferred aliquot amount by the assumed factor ten underestimates the original carbonate, so reported purity is **too low**. The extra original volume was not merely water added to a completed aliquot. If you lost the factor of ten, redraw the sample boundaries before using a formula.
</details>
</div>

Record the first result, any hint used, the decision you repaired and the later attempt. A correct first attempt supports your current performance on that task; it does not prove permanent mastery. [Return to the course](/alevel/as-chemistry/).

<h2 id="sources">Scope and source identity</h2>

This reviews OxfordAQA 9620 AS 3.1.2 and RP1, using the [current specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf). All tasks and numerical data are self-written, not copies of examination papers; no official marks are assigned. The route comparison is a simplified calculation with specified desired product, not a measured industrial or environmental assessment. The wider AS chemistry course and other required practicals remain outside this first learning sequence.
