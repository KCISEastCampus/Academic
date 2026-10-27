---
title: Epoxyethane — Ring Opening and Process Evidence
layout: subjects
mathjax: true
grade: as
subject: as-chemistry
permalink: /alevel/as-chemistry/epoxyethane/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">Why does a small ring open so readily?</h2>

Epoxyethane, C₂H₄O, contains two CH₂ groups and one O in a three-membered ring. It is an industrial intermediate: changing a strained cyclic ether into open-chain products provides useful functional groups. Here you will explain manufacture, reconstruct water/alcohol ring-opening mechanisms and evaluate a process claim. You need [bonding](/alevel/as-chemistry/bonding-and-shape/) and [electron-pair arrows](/alevel/as-chemistry/halogenoalkanes/#electron-pair-bridge). All tasks and diagrams are self-written; the process comparisons are constructed, not plant measurements.

<h2 id="production">Choose partial oxidation rather than combustion</h2>

Industrial manufacture passes ethene and oxygen over a **silver catalyst at elevated temperature**, with controlled feed, heat removal and suitable pressure. The desired partial oxidation is:

$$\ce{2C2H4 + O2 -> 2C2H4O}$$

O₂ is the oxidant; silver directs an effective catalytic pathway and is regenerated. The competing complete oxidation, $\ce{C2H4 + 3O2 -> 2CO2 + 2H2O}$, consumes feed without making epoxyethane. A catalyst/conditions that favour the desired route improve selectivity; simply increasing temperature or oxygen does not guarantee more desired product. Do not confuse percentage conversion, selectivity, yield and atom economy. The desired equation has 100% theoretical atom economy because all its reactant atoms enter the one product; real losses/byproducts can still reduce yield.

The feed and product can form flammable/explosive mixtures; the reactions release heat, and epoxyethane is toxic and carcinogenic. Industrial controls include suitable closed equipment, controlled gas composition, heat removal and leak/exposure prevention. These are process considerations, not instructions for making it in a school laboratory. Exact plant temperatures and current production tonnages are not additional memorisation targets here.

<div class="lesson-check" markdown="1">
<h3 id="process-check">Assess a production proposal</h3>
<!-- task:process-check -->
Write the partial-oxidation and complete-combustion equations for ethene. Identify the oxidant and desired catalyst. A constructed proposal says “the target reaction has 100% atom economy, so the factory must have 100% yield and no waste; raising temperature alone guarantees improvement”. Evaluate all three claims and name two different controls, each linked to a specific process risk. Do not invent plant operating numbers.
<!-- /task:process-check -->
<details markdown="1"><summary>Hint</summary>
Compare the balanced target equation with the reactions and losses that can actually occur.
</details>
<details markdown="1"><summary>Solution and check</summary>
Partial:2C₂H₄+O₂→2C₂H₄O; complete:C₂H₄+3O₂→2CO₂+2H₂O. Oxidant O₂, silver catalyst. Atom economy describes only the ideal desired equation; combustion, incomplete conversion and handling losses reduce yield and generate waste. Temperature changes competing rates, so no unconditional improvement follows. Controlled gas composition addresses flammable mixtures; heat removal addresses exothermic runaway; closed containment/leak detection addresses toxic exposure. If you equated yield with atom economy, recover [their different denominators](/alevel/as-chemistry/amount-and-equations/#two-percentages), then retry the changed process claim below.
</details>
</div>

<h2 id="ring-strain">Relieve strain while conserving the atoms</h2>

The three ring atoms force bond angles near 60°, far from a relaxed tetrahedral carbon environment. This angle strain and the polar C–O bonds make the ring susceptible to opening. The ring does not contain a C=C bond: do not apply an alkene addition picture by inventing a π bond. Opening breaks **one ring C–O bond**, retains the C–C bond and forms a new bond to an attacking nucleophile. The carbons still have four bonds in the final product.

Acid catalysis first protonates the ring O: its lone pair forms O–H, giving three bonds and a positive charge at O. This makes an attached carbon more susceptible to nucleophilic attack. In this acidic model, **neutral water or ROH** supplies the attacking pair; do not protonate the ring and then use unexplained abundant OH− as the reacting species. An alternative basic mechanism would use a different consistent set of steps and conditions; it is not mixed into this pathway.

<h2 id="water-opening">Follow three steps for water</h2>

The overall hydrolysis is $\ce{C2H4O + H2O -> HOCH2CH2OH}$, producing **ethane-1,2-diol**. Write the ring explicitly when drawing the mechanism; C₂H₄O alone does not display its connectivity.

1. Ring O lone pair→H⁺ gives the protonated ring, O⁺ with three bonds.
2. Water O lone pair→a ring carbon; simultaneously that carbon–ring-O bond pair→ring O. The old ring O becomes neutral –OH; the incoming water O now has three bonds and carries +1. The open intermediate is HOCH₂CH₂OH₂⁺ (either orientation is equivalent for this symmetric ring).
3. A second water O lone pair→an H on the new oxonium O; that O–H bond pair→the same oxonium O. This gives the neutral diol and H₃O⁺, regenerating the acid catalyst (often abbreviated H⁺ in the overall scheme).

<div class="worked-example" markdown="1">
**Worked electron account, self-written.** Step 2 starts with +1 on the protonated ring and neutral attacking water; the open intermediate remains +1. Step 3 combines that ion with neutral water to give neutral diol and H₃O⁺, still +1 overall. Catalyst cancellation leaves one water added overall; the second water only transfers the proton. No free one-carbon fragment is produced.

<div role="region" aria-label="Water ring-opening mechanism" tabindex="0" style="overflow-x:auto" markdown="1">

![Original three-stage acid-catalysed opening: ring O pair to H plus, water O pair to ring carbon while C–O pair returns to old O, then water removes an oxonium proton with O–H pair returning to O; ethane-1,2-diol and hydronium result.](/assets/img/chemistry-as-epoxy-water.svg){: width="700" height="980" style="min-width:650px" }

</div>
</div>

<h2 id="alcohol-opening">Change the nucleophile, retain the ring carbons</h2>

Replace attacking H₂O by **ROH**. The same protonation and ring-bond breaking occur; the attacking alcohol O becomes three-bond oxonium –O⁺(H)R, then loses its proton to regenerate acid. The product is **HOCH₂CH₂OR**, a hydroxy ether, not HOCH₂CH₂CH₂R. Oxygen interrupts the carbon connectivity. For methanol:

$$\ce{C2H4O + CH3OH -> HOCH2CH2OCH3}$$

In a complete drawing, start the attack arrow at the alcohol O lone pair, put + on that O after attachment, and show the deprotonation pair returning to it. Proton transfer can use an available water/alcohol molecule as base; write the resulting conjugate acid so charge is conserved. The original ring O supplies one product OH and the reagent O supplies the ether linkage.

<div class="lesson-check" markdown="1">
<h3 id="opening-check">Draw a changed donor</h3>
<!-- task:opening-check -->
Epoxyethane reacts with ethanol under acid catalysis. Draw the cyclic starting structure, the product with every O connectivity shown and the complete mechanism. Include protonation, attacking lone pair, breaking ring bond, intermediate charges and deprotonation/catalyst regeneration. Write the net equation and explain why the product does not have a continuous four-carbon chain. Then explain what changes if water is the nucleophile instead. Explain why the three-membered ring is reactive, comparing its bond angles with a relaxed tetrahedral carbon environment and identifying the role of C–O polarity.
<!-- /task:opening-check -->
<details markdown="1"><summary>Hint</summary>
Label the old ring oxygen Oa and the reagent oxygen Ob on your own sketch, and keep those identities through the changes.
</details>
<details markdown="1"><summary>Solution and check</summary>
The ring angles near 60° deviate from a relaxed tetrahedral environment near 109.5°; opening relieves angle strain, while polar C–O makes carbon susceptible to nucleophilic attack. Product HOCH₂CH₂OCH₂CH₃; C₂H₄O+C₂H₅OH→C₄H₁₀O₂. Ring O pair→H⁺; ethanol O pair→ring C while C–O ring pair→old O; HOCH₂CH₂O⁺(H)CH₂CH₃ intermediate. A base pair→that O-bound H and its O–H pair→O, giving neutral ether and regenerating acid. The ring supplies a C₂ unit and ethanol a separate C₂ unit, connected through O. Water instead gives HOCH₂CH₂OH through HOCH₂CH₂OH₂⁺. If you extended C–C instead of adding C–O, revisit [oxygen tracking](#alcohol-opening), then do the new donor retry.
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="repair-check">Audit an electron drawing</h3>
<!-- task:repair-check -->
An acid-catalysed drawing protonates the ring O but labels it neutral; its next arrow starts at the attacking water H and points to carbon; the final product retains an O with three bonds but no charge, with no proton-transfer step. Identify and repair each defect. Explain why merely replacing water with OH− in this acidic drawing does not supply a coherent corrected pathway.
<!-- /task:repair-check -->
<details markdown="1"><summary>Hint</summary>
Check atom valence, electron-pair source and the stated medium separately.
</details>
<details markdown="1"><summary>Solution and check</summary>
Protonated ring O has three bonds and +1; attack starts at the neutral water O lone pair, not H. C–O bond pair must go to old ring O. Incoming O after attachment has three bonds/+1; explicitly remove an O-bound proton with a base pair while O–H pair returns to O. Neutral diol then has two bonds at each O, and acid is regenerated. OH− is not the abundant nucleophile in the stated acidic model; a basic path would attack an unprotonated ring then protonate the alkoxide, a different coherent set of conditions. If you fixed charges but left arrows at H, return to [pair origins](/alevel/as-chemistry/halogenoalkanes/#electron-pair-bridge), then redraw independently.
</details>
</div>

<h2 id="uses">Useful products still require a qualified judgment</h2>

Ethane-1,2-diol is used in antifreeze mixtures and as a chemical feedstock; it is toxic and must not be treated as safe because it has OH groups. Further ring additions can build ether-linked chains. Products combining a hydrophobic alkyl part and hydrophilic polyether/OH part act as **surfactants**: the two regions interact differently with oil and water. The product structure, not the slogan “all ethers dissolve everything”, explains the use.

Economic benefits include useful downstream materials and efficient ideal atom use; evaluation must also consider energy, competing combustion, emissions, toxic exposure and end-of-life waste. Neither a useful product nor a nonpetroleum carbon source proves zero environmental cost. This page gives mechanism/product reasoning, not measured lifecycle totals.

<div class="lesson-check" markdown="1">
<h3 id="use-check">Link a structure to a decision</h3>
<!-- task:use-check -->
A proposed surfactant has a long alkyl group connected to an oxygen-rich chain ending in OH. Explain the roles of its two regions. Compare this benefit with two distinct production/use limitations of the epoxyethane route. Explain why 100% target atom economy is insufficient to choose the environmentally preferable process.
<!-- /task:use-check -->
<details markdown="1"><summary>Hint</summary>
Separate molecular function from the complete manufacturing and disposal account.
</details>
<details markdown="1"><summary>Solution and check</summary>
The nonpolar alkyl region interacts with oily material, while the oxygen-rich/OH region interacts with water, helping interfaces/mixing. Benefits do not remove toxic/carcinogenic epoxyethane exposure, flammable/exothermic manufacture, energy use, byproducts or disposal effects. Atom economy omits conversion, energy and toxicity; compare data for the actual processes and boundaries. If your evaluation listed only generic costs, return to [the specified process](#production), then address the retry claim.
</details>
</div>

<h2 id="retry">Change the product or process claim</h2>

<div class="lesson-check" markdown="1">
<h3 id="retry-opening">A different alcohol</h3>
<!-- task:retry-opening -->
Draw acid-catalysed opening of epoxyethane with propan-1-ol, including all intermediates and proton-transfer arrows. Give the structural product and molecular formula. Compare with water opening in atom count, and explain why no CO2 is required as a byproduct. Does changing from water to propan-1-ol remove the ring strain of the starting epoxyethane? Explain why opening remains favoured by strain relief.
<!-- /task:retry-opening -->
<details markdown="1"><summary>Hint</summary>
Keep both reagent oxygen atoms and the original C–C bond; only a ring C–O connection opens.
</details>
<details markdown="1"><summary>Solution and check</summary>
HOCH₂CH₂OCH₂CH₂CH₃, C₅H₁₂O₂; C₂H₄O+C₃H₈O→C₅H₁₂O₂. Protonate ring O, propanol O pair attacks ring C as C–O breaks to old O, give the new three-bond O its + charge, then deprotonate/regenerate acid. Water gives C₂H₆O₂ instead. Changing the donor does not change the starting three-membered ring strain; opening can still relieve it. All atoms enter the addition product, so CO₂ is not a required stoichiometric byproduct (competing industrial combustion is separate). Close this key and redraw if charge/oxygen continuity failed.
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-process">A changed claim</h3>
<!-- task:retry-process -->
A process converts more ethene after a temperature change, but a larger fraction forms CO2. What further quantities are needed to judge epoxyethane yield and environmental performance? Explain one useful application of the water-opening product and why it does not justify uncontrolled disposal. Return to this question after another topic with help closed.
<!-- /task:retry-process -->
<details markdown="1"><summary>Hint</summary>
Do not replace desired-product amount with total reactant consumed.
</details>
<details markdown="1"><summary>Solution and check</summary>
Need actual epoxyethane amount per feed, selectivity/recovery, energy/heat-removal requirements and stated emission/waste boundaries; greater conversion alone need not mean greater desired yield. Ethane-1,2-diol serves antifreeze/feedstock roles but is toxic, so controlled handling/disposal remain necessary. Link any conclusion to data rather than declaring one process universally best. If confused, recover [conversion versus atom economy](#production), then write a fresh qualified conclusion.
</details>
</div>

<h2 id="sources">Scope and sources</h2>

[OxfordAQA 9620 specification 5.3](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf),3.3.4.4. User textbook Lister/Renshaw 2016 printed 234–235 was read; its mixed protonated-ring/OH− scheme is not reproduced: this lesson consistently uses acid catalysis, neutral water/alcohol attack and acid regeneration. The comparison with a basic pathway is a condition check, not a required extra industrial mechanism. Continue to [alcohols](/alevel/as-chemistry/alcohols/) and the [mixed review](/alevel/as-chemistry/as-review/). Practical and student performance remain untested.
