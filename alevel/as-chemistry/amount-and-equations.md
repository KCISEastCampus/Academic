---
title: Amount of Substance and Reaction Equations
layout: subjects
mathjax: true
grade: as
subject: as-chemistry
permalink: /alevel/as-chemistry/amount-and-equations/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">How can a balance count particles?</h2>

A balance measures grams, but a reaction combines atoms and molecules in particular number ratios. **Amount of substance**, measured in moles, connects those two descriptions. Equal masses need not contain equal numbers of particles.

This lesson takes you from identifying the particles to predicting a product mass, checking which reactant runs out and interpreting two different percentages. You need chemical formulae, multiplication, ratios and the idea that atoms are conserved. Start with the familiar task below; new mole relationships are explained afterwards.

<div class="lesson-check" markdown="1">
**Before the mole — self-written task.**

<!-- task:count-start -->
Four hydrogen molecules react with three oxygen molecules. Water is the only product. Each water molecule contains two hydrogen atoms and one oxygen atom. How many water molecules can form, and what remains? Account for every atom.
<!-- /task:count-start -->

<details markdown="1"><summary>Hint</summary>
Count hydrogen atoms first, then count the oxygen atoms those water molecules require.
</details>
<details markdown="1"><summary>Solution and check</summary>
Four water molecules form. They use all eight hydrogen atoms and four of the six oxygen atoms. One oxygen molecule remains. The final mixture still contains eight hydrogen atoms and six oxygen atoms. If you made seven water molecules by adding the starting molecule counts, redraw each molecule as its individual atoms before regrouping them.
</details>
</div>

<h2 id="mole-bridge">Name the entity before using a mole</h2>

One mole contains approximately $6.02\times10^{23}$ specified entities. The **Avogadro constant** is $N_A\approx6.02\times10^{23}\,\mathrm{mol^{-1}}$. Entities can be atoms, molecules, ions or formula units; say which. A dozen counts twelve objects without saying how heavy they are; a mole also counts, on a much larger scale. The analogy does not give a mole a fixed mass.

For $n$ moles of those entities, their number $N$ is:

$$N=nN_A$$

For example, 0.200 mol of carbon dioxide molecules contains 0.200 mol of carbon atoms and 0.400 mol of oxygen atoms. The subscript 2 counts oxygen atoms **within** each molecule; it is not a coefficient for the whole sample.

**Relative atomic mass, $A_r$,** compares the weighted mean mass of an atom of an element with one twelfth of the mass of a carbon-12 atom. **Relative molecular mass, $M_r$,** makes the same comparison for a molecule; add its atoms' $A_r$ values. For an ionic solid, use **relative formula mass** because its formula gives an ion ratio in an extended lattice, not a discrete molecule. These relative masses have no unit.

**Molar mass, $M$,** is mass per mole. At the precision used here, its numerical value in $\mathrm{g\,mol^{-1}}$ is the corresponding relative mass. With H = 1.0, C = 12.0, O = 16.0 and Ca = 40.0, carbon dioxide has $M_r=44.0$ and $M=44.0\,\mathrm{g\,mol^{-1}}$. Calcium hydroxide, $\mathrm{Ca(OH)_2}$, has relative formula mass $40.0+2(16.0+1.0)=74.0$.

The mass–amount bridge is:

$$n=\frac{m}{M}$$

Use grams with $\mathrm{g\,mol^{-1}}$, or kilograms with $\mathrm{kg\,mol^{-1}}$; mixing them creates a factor-of-1000 error. The units $\mathrm{g}/(\mathrm{g\,mol^{-1}})$ reduce to mol. In 4.40 g of carbon dioxide, $n=4.40/44.0=0.100\,\mathrm{mol}$, hence $N=6.02\times10^{22}$ molecules. There are twice as many oxygen atoms, not twice as many carbon dioxide molecules.

<div class="lesson-check" markdown="1">
<h3 id="particle-check">Two samples</h3>
<!-- task:particle-check -->
Sample A is 8.80 g of CO2. Sample B is 8.00 g of O2. Use C = 12.0, O = 16.0 and NA = 6.02 × 10^23 mol−1. Which has more molecules? Which has more oxygen atoms? Calculate the number of oxygen atoms in each and explain why comparing masses alone is insufficient.
<!-- /task:particle-check -->
<details markdown="1"><summary>Hint</summary>
Write the molecular formula and molar mass beside each sample. Then count the oxygen atoms per molecule.
</details>
<details markdown="1"><summary>Solution and check</summary>
A has $8.80/44.0=0.200$ mol of molecules; B has $8.00/32.0=0.250$ mol. B has more molecules even though its mass is smaller. A contains 0.400 mol of oxygen atoms, or $2.41\times10^{23}$ atoms; B contains 0.500 mol, or $3.01\times10^{23}$ atoms. Each sample has two oxygen atoms per molecule, but different numbers of molecules. If your comparison used grams, revisit [the mass–amount bridge](#mole-bridge), then do [the retry](#retry-amount).
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="entity-check">Specify the entity and relative mass</h3>
<!-- task:entity-check -->
Define relative atomic mass using carbon-12 as the reference and state whether it has a unit. Solid MgCl2 has an extended ionic lattice. Use Mg = 24.3, Cl = 35.5 and NA = 6.02 × 10^23 mol−1. Calculate its relative formula mass, the mass of 0.100 mol of formula units, and the numbers of magnesium ions and chloride ions in that sample. Explain why “0.100 mol of MgCl2 molecules” is unsuitable.
<!-- /task:entity-check -->

Close the answer and retry: 0.0500 mol of solid CaCl2 formula units, Ca = 40.0 and Cl = 35.5. Find relative formula mass, sample mass and the number of chloride ions; explain which quantities have units.

<details markdown="1"><summary>Hint</summary>
Separate the ion ratio per formula unit, relative mass and mass per mole.
</details>
<details markdown="1"><summary>Solution and check</summary>
Relative atomic mass is the weighted mean mass of an atom of an element divided by one twelfth of the mass of a carbon-12 atom; it has no unit. MgCl2 has relative formula mass 24.3 + 2(35.5) = 95.3, with no unit; its molar mass is 95.3 g mol−1 and sample mass is 9.53 g. Magnesium ions: 0.100 mol, or 6.02 × 10^22 ions. Chloride ions: 0.200 mol, or 1.20 × 10^23 ions. The lattice has no discrete MgCl2 molecules.
</details>
<details markdown="1"><summary>Retry solution and check</summary>
Retry: CaCl2 relative formula mass 111.0 (no unit), mass 5.55 g; chloride ions 0.100 mol, or 6.02 × 10^22 ions. If you missed a subscript multiplier or gave a relative mass the unit g, revisit [entities and mass](#mole-bridge), close the answer and retry.
</details>
</div>

<h2 id="reaction-ratios">A balanced equation is a particle recipe</h2>

For water formation, begin with the correct formulae $\ce{H2 + O2 -> H2O}$. One oxygen molecule supplies two oxygen atoms, so place 2 before water. Those two water molecules contain four hydrogen atoms, so place 2 before hydrogen. Check four H atoms and two O atoms on each side. The smallest whole-number coefficients are therefore 2:1:2:

$$\ce{2H2(g) + O2(g) -> 2H2O(l)}$$

The same ratio applies to two molecules and one molecule, or to two moles and one mole: multiplying every count by $N_A$ preserves the ratio. The coefficients are **amount ratios, not mass ratios**. Using H = 1.0 and O = 16.0, 4.0 g of hydrogen reacts with 32.0 g of oxygen to give 36.0 g of water. Reactant and product masses agree.

Balance by changing coefficients in front of correct formulae, never by changing subscripts: turning $\ce{H2O}$ into $\ce{H2O2}$ changes the substance. State symbols describe solid (s), liquid (l), gas (g) and dissolved in water (aq). In ionic equations check charge as well as atoms: $\ce{H+(aq) + OH-(aq) -> H2O(l)}$ has total charge zero on each side.

For a general reaction, coefficients $a$ and $b$ connect **amounts that actually react**:

$$\frac{n(A)\text{ reacted}}{a}=\frac{n(B)\text{ reacted}}{b}$$

If two starting amounts are given, they need not be in this ratio. Compare the starting amount of each reactant divided by its coefficient. The smallest value limits how far the reaction can go. The other reactant is in **excess**; excess does not mean none of it reacts.

<div class="lesson-check" markdown="1">
<h3 id="equation-check">Build the equation</h3>
<!-- task:equation-check -->
Aluminium reacts with aqueous hydrochloric acid to form aqueous aluminium chloride and hydrogen gas. The correct formulae are Al, HCl, AlCl3 and H2. Write the balanced equation using the smallest whole-number coefficients and state symbols. Check the atoms of each element. Explain why changing AlCl3 to AlCl2 would not be a valid balancing step.
<!-- /task:equation-check -->
<details markdown="1"><summary>Hint</summary>
Choose a common total for chlorine atoms from the chloride and for hydrogen atoms from the gas. Keep the given formulae unchanged.
</details>
<details markdown="1"><summary>Solution and check</summary>
$\ce{2Al(s) + 6HCl(aq) -> 2AlCl3(aq) + 3H2(g)}$. Each side has 2 Al, 6 Cl and 6 H atoms. Changing a subscript would change the specified product instead of balancing the numbers of its formula units. If your coefficients do not conserve an element, make a separate atom-count column for each side and retry this equation with the solution closed.
</details>
</div>

<h2 id="batch-example">Predict a product and check the leftovers</h2>

<div class="worked-example" markdown="1">
**Worked example — self-written theoretical batch.**

<!-- task:worked-batch -->
5.40 g of aluminium reacts with 6.40 g of oxygen. Assume Al2O3 is the only product and reaction proceeds until one reactant is exhausted. Use Al = 27.0 and O = 16.0. Calculate the maximum product mass and the mass of each reactant remaining.
<!-- /task:worked-batch -->

Start with the chemical model, not a mass ratio:

$$\ce{4Al(s) + 3O2(g) -> 2Al2O3(s)}$$

Both starting amounts are 0.200 mol: $5.40/27.0$ for Al and $6.40/32.0$ for $\ce{O2}$. Equal mole amounts do not mean a perfect mixture because the recipe requires four aluminium atoms for every three oxygen molecules.

$$\frac{0.200}{4}=0.0500,\qquad \frac{0.200}{3}=0.0667$$

Aluminium gives the smaller extent and is limiting. Each 4 mol of Al produces 2 mol of oxide, so $n(\ce{Al2O3})=0.200\times2/4=0.100\,\mathrm{mol}$. Its molar mass is $2(27.0)+3(16.0)=102.0\,\mathrm{g\,mol^{-1}}$; the theoretical mass is **10.2 g**.

Oxygen used is $0.200\times3/4=0.150$ mol. Oxygen left is $0.200-0.150=0.0500$ mol, or **1.60 g**. No aluminium remains in this model. Check the closed-system mass balance: $5.40+6.40=10.2+1.60=11.8$ g. A product heavier than the starting aluminium is possible because oxygen enters the product.

This predicts a theoretical maximum under the stated assumptions. An oxide layer, incomplete reaction or loss during collection can reduce the actual recovered product; calculation alone does not establish that a real experiment reached completion.
</div>

<div class="lesson-check" markdown="1">
<h3 id="batch-check">A different mixture</h3>
<!-- task:batch-check -->
For 4Al + 3O2 → 2Al2O3, use Al = 27.0 and O = 16.0. A batch starts with 10.8 g of Al and 6.40 g of O2. Assume the same single-product and complete-reaction model. Identify the limiting reactant, calculate the maximum product mass and the mass left over, and test “doubling the aluminium must double the product”.
<!-- /task:batch-check -->
<details markdown="1"><summary>Hint</summary>
The changed starting mixture may change which reactant runs out. Compare amounts per coefficient again.
</details>
<details markdown="1"><summary>Solution and check</summary>
Starting amounts are 0.400 mol Al and 0.200 mol $\ce{O2}$. The extent limits are 0.100 and 0.0667 mol, so oxygen now limits. Product amount is $0.200\times2/3=0.13333\ldots$ mol and mass is **13.6 g**. Aluminium used is $0.200\times4/3=0.26667\ldots$ mol, leaving $0.13333\ldots$ mol or **3.60 g**. Check $10.8+6.40=13.6+3.60$. Doubling one reactant does not double the product once the other limits it. If you kept aluminium as limiting just because it was limiting in the example, return to [the coefficient comparison](#reaction-ratios).
</details>
</div>

<h2 id="two-percentages">Yield and atom economy answer different questions</h2>

**Percentage yield** compares the dry, pure product actually obtained with the theoretical maximum from the limiting reactant. **Atom economy** asks what fraction of the stoichiometric reactant mass enters the desired product. Use the balanced equation's coefficients for atom economy, not the excess amounts loaded into a particular batch.

$$\text{percentage yield}=\frac{\text{actual product mass}}{\text{theoretical product mass}}\times100\%$$

$$\text{atom economy}=\frac{\nu_{\text{desired}}M_{\text{desired}}}{\sum\nu_{\text{reactants}}M_{\text{reactants}}}\times100\%$$

Here $\nu$ is the coefficient in the balanced equation; include all reactants in the denominator. Atom conservation lets you equivalently use the total stoichiometric mass of all products there.

For $\ce{CaCO3(s) -> CaO(s) + CO2(g)}$, use Ca = 40.0, C = 12.0, O = 16.0. If CaO is desired, 100.0 g of carbonate can produce 56.0 g of CaO. Its atom economy is 56.0%. If only 50.4 g of dry pure CaO is obtained, the yield is $50.4/56.0\times100=90.0\%$. Lost product lowers yield without changing the equation's atom economy. A reported yield above 100% suggests a problem such as a wet or impure product, not creation of extra atoms. Neither percentage alone measures energy use or environmental safety.

For otherwise comparable routes to the same product, higher atom economy can mean less stoichiometric by-product waste and less purchased reactant mass per mass of desired product. That can reduce disposal burdens, costs and opportunities for exposure to waste. These are potential advantages, conditional on the substances and real process: a toxic reagent or a large heating demand can outweigh them.

<div class="lesson-check" markdown="1">
<h3 id="process-check">Assess the report</h3>
<!-- task:process-check -->
8.43 g of pure MgCO3 is heated; MgO is the desired product and CO2 is the only other product. The reported recovered solid has mass 4.23 g. Use Mg = 24.3, C = 12.0 and O = 16.0. Calculate the theoretical MgO mass, the reported percentage yield if all recovered solid is assumed to be MgO, and the atom economy. Evaluate the claim “the process has improved atom economy because its yield exceeds 100%”. Give one possible reason the recovered mass is too large.
<!-- /task:process-check -->
<details markdown="1"><summary>Hint</summary>
Separate a calculation made under a purity assumption from evidence that the assumption is true.
</details>
<details markdown="1"><summary>Solution and check</summary>
$\ce{MgCO3(s) -> MgO(s) + CO2(g)}$ gives a 1:1 ratio. Molar masses are 84.3 and 40.3 $\mathrm{g\,mol^{-1}}$. Theoretical MgO is $8.43/84.3\times40.3=4.03$ g. Reported yield is $4.23/4.03\times100=105\%$ to three significant figures, which challenges the assumption that the solid is solely dry MgO. Atom economy is $40.3/84.3\times100=\mathbf{47.8\%}$. Unreacted carbonate or uptake of water after cooling could make the recovered solid too heavy. Repeating the same faulty procedure need not remove the bias. If you used 4.23 g in atom economy, return to [the two definitions](#two-percentages), then try [the process retry](#retry-process).
</details>
</div>

<h2 id="retry-amount">Repair a mistake, then try again</h2>

Close the earlier solutions before answering. This self-written retry changes the substances and asks for what remains, not just a product.

<div class="lesson-check" markdown="1">
<!-- task:retry-amount -->
2H2 + O2 → 2H2O. A mixture contains 6.00 g of H2 and 32.0 g of O2. Use H = 1.0, O = 16.0 and NA = 6.02 × 10^23 mol−1. Find the maximum water mass, the mass of gas remaining after water condenses, and the number of molecules in that remaining gas. Ignore water vapour in the remaining gas. Explain your choices in English without a sentence template.
<!-- /task:retry-amount -->
<details markdown="1"><summary>Hint</summary>
Use the limiting reactant to find how much of the other reactant reacts. Specify the gas that remains.
</details>
<details markdown="1"><summary>Solution and check</summary>
Starting amounts are $6.00/2.0=3.00$ mol $\ce{H2}$ and $32.0/32.0=1.00$ mol $\ce{O2}$. Oxygen limits: $1.00/1<3.00/2$. It uses 2.00 mol hydrogen to make 2.00 mol water, **36.0 g**. Remaining hydrogen is 1.00 mol, **2.00 g**, containing $6.02\times10^{23}$ molecules. Initial mass $6.00+32.0=38.0$ g equals $36.0+2.00$ g. An acceptable explanation identifies oxygen as limiting from the 2:1 ratio and distinguishes water molecules from the hydrogen left over.
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-process">Check a new process</h3>
<!-- task:retry-process -->
The reaction C2H5OH → C2H4 + H2O has ethene, C2H4, as the desired product. 46.0 g of pure ethanol gives 22.4 g of dry pure ethene. Use C = 12.0, H = 1.0 and O = 16.0. Calculate percentage yield and atom economy. A better collection method recovers another 2.80 g of ethene from the same batch. Which percentage changes, and what is its new value? Explain one waste-related advantage and one limitation of judging a process by atom economy alone.
<!-- /task:retry-process -->
<details markdown="1"><summary>Hint</summary>
Start from the balanced equation. A collection change leaves its stoichiometric recipe unchanged.
</details>
<details markdown="1"><summary>Solution and check</summary>
The 1.00 mol ethanol batch can make 1.00 mol ethene, **28.0 g**. Yield is **80.0%**; atom economy is $28.0/46.0\times100=60.9\%$. Collecting 25.2 g raises yield to **90.0%**; atom economy stays 60.9%. A higher atom economy can reduce stoichiometric by-product waste and raw-material cost per mass of desired product. It does not establish low energy use, low toxicity or a high actual yield. Your explanation should identify the different denominator in each percentage.
</details>
</div>

Record whether you needed a hint and which decision failed. Next use mass and gas measurements to infer [formulae and gas amounts](/alevel/as-chemistry/formulae-and-gases/). Revisit these choices later in the [mixed quantitative review](/alevel/as-chemistry/quantitative-review/), where the method is not named in advance.

<h2 id="sources">Scope and reading</h2>

OxfordAQA 9620 AS, specification 3.1.2; [official specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf). Textbook support: Lister and Renshaw, *International A Level Chemistry* (OUP, 2016), Chapter 2, sections 2.1, 2.5–2.6, pp. 31–33 and 44–50. All tasks, data and checking criteria here are self-written, not official examination questions or mark allocations. [Return to the course](/alevel/as-chemistry/).
