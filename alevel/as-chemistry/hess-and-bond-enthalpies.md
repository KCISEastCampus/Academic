---
title: Hess's Law and Bond Enthalpies
layout: subjects
mathjax: true
grade: as
subject: as-chemistry
permalink: /alevel/as-chemistry/hess-and-bond-enthalpies/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">How can two measurable routes reveal one unknown change?</h2>

A direct measurement may be impractical, but the same reactants can reach the same products through another route. The challenge is to preserve **exactly the same amounts, states and conditions**, then follow each arrow honestly.

You need [energy accounts and standard enthalpy definitions](/alevel/as-chemistry/energetics-and-calorimetry/), [reaction ratios](/alevel/as-chemistry/amount-and-equations/) and [bond representations](/alevel/as-chemistry/bonding-and-shape/). This lesson covers AS 3.1.4.3–4, including a connection to RP2. All tasks and datasets are **self-written / constructed**; supplied rounded enthalpy values are exercise data, not new measurements or official marking points. Attempt the English tasks before opening help.

<h2 id="route-model">Match the start and finish before adding arrows</h2>

**Hess's law:** the enthalpy change for a reaction is independent of the route, provided the initial and final states are the same. Enthalpy is a state quantity: a detour cannot create extra energy. The intermediate steps need not be the actual mechanism or even convenient laboratory reactions.

Write the target equation first, including states. Reverse a supplied equation when you need to travel against its arrow: its enthalpy changes sign. Multiply the **entire equation and its enthalpy** by the same factor. Add equations and cancel identical species on opposite sides. Only if the resulting equation is your target does the enthalpy sum answer your question. Cancellation cannot remove a liquid against a gas of the same formula, or a solution at a different composition.

<h2 id="formation-route">Use a common set of elements</h2>

Formation data describe arrows **from elements to compounds**. To convert reactants to products through those elements, first undo the reactants' formation, then form the products. Including balanced coefficients $\nu$ gives:

$$\Delta_rH^\circ=\sum_{\mathrm{products}}\nu\Delta_fH^\circ-\sum_{\mathrm{reactants}}\nu\Delta_fH^\circ$$

This is a route statement, not an instruction to subtract every data table in the same direction. Reference-state elements have zero standard formation enthalpy by convention. It is their **formation enthalpy** that is zero, not their absolute energy.

<div class="worked-example" markdown="1">
<h3 id="worked-formation">Worked example: reconstruct a formation route</h3>
Constructed exercise data at 298 K and 100 kPa: $\Delta_fH^\circ[\ce{CO(g)}]=-110.5$ and $\Delta_fH^\circ[\ce{CO2(g)}]=-393.5$ $\mathrm{kJ\,mol^{-1}}$. Find $\Delta H$ for $\ce{CO(g) + 1/2O2(g) -> CO2(g)}$.

Reverse $\ce{C(s,graphite) + 1/2O2(g) -> CO(g)}$, giving +110.5 kJ per mole of that reversed reaction. Then add $\ce{C(s,graphite) + O2(g) -> CO2(g)}$, with −393.5 kJ. Cancel graphite and half a mole of oxygen from the summed equation. The target remains, and $\Delta H=+110.5-393.5=\mathbf{-283.0\,kJ\,mol^{-1}}$ per mole CO oxidised. Doubling the target to use integer coefficients would require −566.0 kJ per mole of the doubled reaction. Check the final equation, not just the minus sign.
</div>

<div class="lesson-check" markdown="1">
<h3 id="route-check">Choose directions and coefficients</h3>
<!-- task:route-check -->
Constructed exercise data at 298 K and 100 kPa: formation enthalpies are CO(g) −110.5, CO2(g) −393.5 and H2O(g) −241.8 kJ mol−1; H2(g) and O2(g) are reference-state elements. Draw a formation cycle and calculate ΔH for CO(g) + H2O(g) → CO2(g) + H2(g), showing which equations you reverse. Explain why using H2O(l) data instead would not describe this target.
<!-- /task:route-check -->
<details markdown="1"><summary>Hint</summary>
Write the formation arrow for each compound. Cancel the common elements after reversing the reactant arrows.
</details>
<details markdown="1"><summary>Solution and check</summary>
Reverse formation of CO and gaseous water, giving +110.5 and +241.8; form CO2, giving −393.5. The hydrogen reference-state contribution is zero. The common-element cycle gives $\Delta H=-393.5-(-110.5-241.8)=\mathbf{-41.2\,kJ\,mol^{-1}}$. Cancelling the component equations leaves the stated steam reaction. Liquid-water data would include a different initial enthalpy and need a separate vaporisation step. If your sign or state cancellation failed, revisit [the route model](#route-model), then [reverse and double a target](#retry-route).
</details>
</div>

<h2 id="combustion-route">Reach common combustion products</h2>

Combustion arrows run **from each combustible substance to complete oxidation products**. For a target conversion, burn the reactant side directly, or first perform the target and then burn the product side. Both routes must consume the same total oxygen and reach the same amounts and states of $\ce{CO2}$ and $\ce{H2O}$:

$$\Delta_rH^\circ+\sum_{\mathrm{products}}\nu\Delta_cH^\circ=\sum_{\mathrm{reactants}}\nu\Delta_cH^\circ$$

Therefore combustion sums give **reactants minus products**. The arrows explain why this differs from formation sums. Include a reactant such as H2 if it also burns; do not silently omit its water.

![Schematic comparison of a formation cycle from common elements and a combustion cycle to common complete-oxidation products. The target arrow connects the same reactant and product states in each cycle.](/assets/img/chemistry-as-energy-hess-routes.svg)

<div class="lesson-check" markdown="1">
<h3 id="combustion-check">Construct a second route</h3>
<!-- task:combustion-check -->
Constructed rounded combustion data at 298 K and 100 kPa, all producing CO2(g) and H2O(l): C2H4(g) −1411, H2(g) −286 and C2H6(g) −1560 kJ mol−1. Draw a combustion cycle for C2H4(g) + H2(g) → C2H6(g), include sufficient O2 on each route, and calculate the target enthalpy. A student reports −1411 − (−1560) = +149. Diagnose the missing chemical step.
<!-- /task:combustion-check -->
<details markdown="1"><summary>Hint</summary>
Both sides must reach 2CO2 and 3H2O; count the water contributed by H2.
</details>
<details markdown="1"><summary>Solution and check</summary>
Both sides burn with $\ce{7/2O2(g)}$ to $\ce{2CO2(g) + 3H2O(l)}$. The direct reactant route is $-1411-286=-1697$. The other route is $\Delta H-1560$. Equating gives $\mathbf{-137\,kJ\,mol^{-1}}$ per mole ethene hydrogenated. The +149 result omitted H2 combustion and therefore did not reach the same final water amount. If you used the formation subtraction rule without arrows, revisit [common products](#combustion-route), then [find an unknown from combustion data](#retry-combustion).
</details>
</div>

<h2 id="dissolution-cycle">Connect two measured dissolutions</h2>

The official RP2 example uses anhydrous and hydrated copper sulfate dissolving to a common solution. Let A be dissolution of $\ce{CuSO4(s)}$ with enough water and B dissolution of $\ce{CuSO4.5H2O(s)}$ with **five fewer moles of added water per mole of salt**. If they reach the same final solution composition at the same temperature and pressure, A equals hydration followed by B:

$$\ce{CuSO4(s) + 5H2O(l) -> CuSO4.5H2O(s)}$$
$$\Delta H_{\mathrm{hydration}}=\Delta H_A-\Delta H_B$$

First convert each measured heat to **per mole of its salt**; the two salts have different molar masses. Water in the crystals enters the solution, so final water content matters. Dilution changes can contribute heat: “both solutions are blue” does not prove the endpoints are identical. This is a state-matching application, not an A2 lattice-energy cycle.

<div class="lesson-check" markdown="1">
<h3 id="dissolution-check">Decide whether subtraction is justified</h3>
<!-- task:dissolution-check -->
Constructed molar dissolution estimates with matched final solution composition, temperature and pressure are ΔHA = −66.0 kJ mol−1 for CuSO4(s) and ΔHB = +11.0 kJ mol−1 for CuSO4·5H2O(s). Write the hydration equation, draw the two routes to the common solution and find its enthalpy per mole of hydrate formed. Explain why subtracting two raw measured heats from unequal salt amounts would not suffice.
<!-- /task:dissolution-check -->
<details markdown="1"><summary>Hint</summary>
Write A = hydration + B before rearranging; distinguish total heat from a molar enthalpy.
</details>
<details markdown="1"><summary>Solution and check</summary>
The balanced hydration equation is $\ce{CuSO4(s) + 5H2O(l) -> CuSO4.5H2O(s)}$. Draw both solid starting states leading to the same solution, with hydration linking them. $\Delta H_{\mathrm{hydration}}=-66.0-(+11.0)=\mathbf{-77.0\,kJ\,mol^{-1}}$. Unequal sample heats correspond to unequal reaction amounts; divide each by its own moles before combining. If you added B rather than reversing it, reconstruct the arrows and try [a changed endpoint](#retry-dissolution).
</details>
</div>

<h2 id="bond-model">Use gas-phase bonds as an approximate route</h2>

A **mean bond enthalpy** is the average enthalpy required to break **one mole of a specified type of covalent bond in gaseous molecules**, averaged over different molecular environments. Breaking bonds requires energy; forming the corresponding bonds releases energy. Imagine separating gaseous reactants into gaseous atoms, then assembling gaseous products:

$$\Delta H\approx\sum E(\text{bonds broken})-\sum E(\text{bonds formed})$$

Count bonds from displayed structures, multiplying by molecular coefficients. A double bond uses its supplied double-bond value, not two single-bond values. Unchanged bonds may cancel if treated with the same mean values. These averages depend on bonding environment, so they are approximate for a particular molecule. Hess's law itself is not approximate: the limitation lies in the input averages and any missing changes of state. A liquid reactant would need vaporising before the all-gas route.

<div class="worked-example" markdown="1">
<h3 id="worked-bonds">Worked example: count the bonds that change</h3>
Constructed rounded mean values: H–H 436, Cl–Cl 243, H–Cl 432 $\mathrm{kJ\,mol^{-1}}$. For $\ce{H2(g) + Cl2(g) -> 2HCl(g)}$, break one H–H and one Cl–Cl: $436+243=679$. Form **two** H–Cl bonds: $2\times432=864$. Thus $\Delta H\approx679-864=\mathbf{-185\,kJ\,mol^{-1}}$ per mole of this reaction. The negative sign means bond formation releases more energy than bond breaking absorbs; it does not mean breaking a bond releases energy. This atom route is not a proposed reaction mechanism.
</div>

<div class="lesson-check" markdown="1">
<h3 id="bond-check">Build a bond account</h3>
<!-- task:bond-check -->
Constructed mean bond data in kJ mol−1: C=C 612, C–C 347, C–H 413, H–H 436. Draw displayed structures and estimate ΔH for C2H4(g) + H2(g) → C2H6(g). State the definition of mean bond enthalpy, explain the signs in your calculation, and give two reasons a value using measured formation enthalpies for specified substances might differ.
<!-- /task:bond-check -->
<details markdown="1"><summary>Hint</summary>
Count all bonds on each side, or cancel unchanged C–H bonds and identify the remaining changes.
</details>
<details markdown="1"><summary>Solution and check</summary>
Ethene has four C–H and one C=C; H2 adds one H–H. Ethane has six C–H and one C–C. Hence $\Delta H\approx612+436-(347+2\times413)=\mathbf{-125\,kJ\,mol^{-1}}$. Broken bonds contribute positive energy; formed bonds subtract the released energy. Define the average energy per mole of that covalent-bond type broken in gaseous molecules across environments. Differences can arise because averages are not the exact values for these molecules, or because a comparison involves different physical states. They are not evidence that Hess's law fails. If you counted C=C as two C–C bonds or reversed the subtraction, revisit [the bond route](#bond-model), then [infer an unknown bond value](#retry-bonds).
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="report-check">Select and defend a calculation</h3>
<!-- task:report-check -->
Constructed standard formation data at 298 K and 100 kPa: CO(g) −110.5, H2O(g) −241.8, H2O(l) −285.8 and CO2(g) −393.5 kJ mol−1. H2(g) is a reference-state element. A report gives −41.2 kJ mol−1 for CO(g) + H2O(l) → CO2(g) + H2(g), saying that a mean-bond calculation proves the value exact. Evaluate the numerical result and the claimed proof, calculate the enthalpy for the stated target, and draw a route that connects it to the steam reaction.
<!-- /task:report-check -->
<details markdown="1"><summary>Hint</summary>
Identify the state in the target before choosing data. A mean-value method cannot certify a molecule-specific exact result.
</details>
<details markdown="1"><summary>Solution and check</summary>
The liquid-water target gives $-393.5-(-110.5-285.8)=\mathbf{+2.8\,kJ\,mol^{-1}}$. Vaporising water first requires $-241.8-(-285.8)=+44.0$; adding the steam reaction −41.2 yields +2.8. The report used gaseous-water data for a liquid-water target. Mean bond values give an estimate, not an exact proof. The supplied rounded data also limit numerical precision. Use [the state-matching retry](#retry-route) if your route lost the +44.0 step; return later without help before studying [kinetics](/alevel/as-chemistry/kinetics/).
</details>
</div>

<h2 id="retry">Repair the specific error in a new task</h2>

Close the first answer. Each retry changes a direction, endpoint or question, rather than only replacing numbers.

<div class="lesson-check" markdown="1">
<h3 id="retry-route">Reverse and rescale</h3>
<!-- task:retry-route -->
Using the formation data in report-check, calculate ΔH for 2CO2(g) + 2H2(g) → 2CO(g) + 2H2O(l). Show the equation operations and explain why simply doubling the steam result with an unchanged sign would fail.
<!-- /task:retry-route -->
<details markdown="1"><summary>Hint</summary>
Start from the liquid-water forward target, not the steam target.
</details>
<details markdown="1"><summary>Retry solution</summary>
The liquid-water forward reaction is +2.8. Reverse it to −2.8, then double the full equation and enthalpy: $\mathbf{-5.6\,kJ\,mol^{-1}}$ per mole of the written doubled reaction. Doubling −41.2 preserves both the wrong direction and wrong water state.
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-combustion">Find a different unknown</h3>
<!-- task:retry-combustion -->
Constructed combustion data at 298 K and 100 kPa: C(s,graphite) −393.5, H2(g) −285.8 and CH3OH(l) −726.5 kJ mol−1, all with CO2(g) and H2O(l) as applicable products. Find the standard formation enthalpy of CH3OH(l), writing a balanced defining equation and a cycle with matching oxygen and products.
<!-- /task:retry-combustion -->
<details markdown="1"><summary>Hint</summary>
The direct element combustion route must equal formation followed by methanol combustion.
</details>
<details markdown="1"><summary>Retry solution</summary>
The defining target is $\ce{C(s,graphite) + 2H2(g) + 1/2O2(g) -> CH3OH(l)}$. Add $\ce{3/2O2(g)}$ on both top sides of the cycle to reach $\ce{CO2(g) + 2H2O(l)}$. Direct combustion gives $-393.5-2(285.8)=-965.1$. Thus $\Delta_fH^\circ-726.5=-965.1$, giving $\mathbf{-238.6\,kJ\,mol^{-1}}$.
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-dissolution">Check a changed endpoint</h3>
<!-- task:retry-dissolution -->
An author subtracts two molar copper-sulfate dissolution results to find hydration enthalpy. One experiment ends with twice as much water per mole of dissolved CuSO4 as the other, although both are blue and at the same temperature. Explain why colour and molar normalisation are insufficient, and propose what must be matched or additionally measured before a Hess calculation is justified.
<!-- /task:retry-dissolution -->
<details markdown="1"><summary>Hint</summary>
Normalising moles does not automatically normalise the final solvent content.
</details>
<details markdown="1"><summary>Retry solution</summary>
The endpoints are solutions of different composition. Their enthalpy difference can include dilution, so subtraction alone does not isolate solid hydration. Match total water per mole of salt, including crystal water, as well as temperature and pressure, or measure/include a separate dilution step connecting the endpoints. Colour is not a measure of thermodynamic state.
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-bonds">Infer a missing bond and inspect the phase</h3>
<!-- task:retry-bonds -->
Constructed gas-phase exercise: H2(g) + Br2(g) → 2HBr(g) has ΔH = −103 kJ mol−1. Use H–H = 436 and Br–Br = 193 kJ mol−1 to infer H–Br within the bond-account model. Then explain why applying the same calculation unchanged to liquid Br2(l) as reactant is unjustified, and state the extra type of enthalpy change needed.
<!-- /task:retry-bonds -->
<details markdown="1"><summary>Hint</summary>
Let the unknown be the energy for one mole of H–Br bonds. Two such bonds form.
</details>
<details markdown="1"><summary>Retry solution</summary>
$-103=436+193-2E$, so $2E=732$ and $E=\mathbf{366\,kJ\,mol^{-1}}$ within this model. Liquid bromine first needs vaporising; starting from liquid therefore adds its positive vaporisation enthalpy to the gas-phase reaction value. It becomes less exothermic. Do not claim an experimentally exact bond value beyond the model and rounded data.
</details>
</div>

<h2 id="sources">Scope and next use</h2>

OxfordAQA 9620 [specification 5.3](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf), p.17, 3.1.4.3–4; [Practical Handbook](https://www.oxfordaqa.com/oaqaresources/science/teaching/a-level-practical-handbook-chemistry-4.2.pdf), 2018, pp.53–57. Lister and Renshaw (2016), consulted pp.91–96, 98–101 and Practical 2 pp.522–523. Tasks and diagram are original; data are supplied exercise values, not certified experimental measurements. Return to [calorimetry](/alevel/as-chemistry/energetics-and-calorimetry/) for thermal-model errors; continue to [kinetics](/alevel/as-chemistry/kinetics/) to distinguish energy change from reaction speed.
