---
title: Energetics and Calorimetry
layout: subjects
mathjax: true
grade: as
subject: as-chemistry
permalink: /alevel/as-chemistry/energetics-and-calorimetry/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">What can a temperature change tell us about a reaction?</h2>

A thermometer records the temperature of material around it. It does not read “kilojoules per mole”. To reach that result, identify the reacting system, follow the energy transfer and count how much of the stated reaction actually occurred. You will also decide whether experimental evidence supports the model.

Start with [moles, equations and limiting reactants](/alevel/as-chemistry/amount-and-equations/) and [concentration and measurement](/alevel/as-chemistry/solutions-and-titration/). This lesson covers OxfordAQA 9620 AS 3.1.4.1–2 and preparation for RP2, measuring an enthalpy change. Hess's law and mean bond enthalpies are a separate next topic. **Every task and numerical dataset here is self-written / constructed, not a past-paper question or an actual experimental record.** Write your independent explanations in English. Paper analysis does not complete the practical.

<h2 id="system-and-sign">Follow energy across a stated boundary</h2>

The **system** is the chemical change being studied; its **surroundings** include the bulk liquid that warms or cools, the cup, the thermometer and the wider room. In the simple reaction-calorimetry model, we separate the reaction's chemical enthalpy change from the surrounding material's temperature change, even though the reaction happens within that liquid. They are different parts of the energy account, not two spatially separate beakers.

An **exothermic** reaction transfers heat from system to surroundings. At the same stated temperature, the products have lower enthalpy than the reactants, so $\Delta H=H_{\mathrm{products}}-H_{\mathrm{reactants}}<0$. An **endothermic** change absorbs heat into the system and has $\Delta H>0$. If the liquid is the main thermal reservoir, it warms in the first case and cools in the second. External heating or a different initial temperature can obscure that observation; “temperature increased” alone is not always proof about a reaction.

![Two energy accounts: exothermic transfer out of the reaction with lower product enthalpy, and endothermic transfer into the reaction with higher product enthalpy. Arrows and signs are labelled.](/assets/img/chemistry-as-energy-flow.svg)

Heat is **energy transferred because of a temperature difference**; it is not a substance stored in a hot object. Temperature is not total energy: warming twice the mass through the same interval needs twice the energy for the same material. Enthalpy change is the heat exchanged by the reacting system at constant pressure, provided other work, such as electrical work, is absent. A normal open-cup experiment approximates constant atmospheric pressure. Reversing the same change between the same states reverses the sign of $\Delta H$.

<div class="lesson-check" markdown="1">
<h3 id="energy-check">Interpret an observation</h3>
<!-- task:energy-check -->
A rapid reaction in an insulated cup raises the surrounding solution from 20.0 to 25.0 °C without external heating. Identify the system and thermal surroundings, draw the direction of heat transfer, and sketch labelled reactant and product enthalpy levels with a ΔH arrow. Explain the sign of the reaction enthalpy, and the sign for the exact reverse change between the same states. The cup is open to the atmosphere. Explain under what pressure and work conditions the appropriately corrected reaction heat can be identified with an enthalpy change, and why the open cup helps meet these conditions.
<!-- /task:energy-check -->
<details markdown="1"><summary>Hint</summary>
Distinguish the chemical change from the material whose temperature is measured. Compare final and initial chemical enthalpy. Consider the pressure and any energy input or work other than ordinary expansion work.
</details>
<details markdown="1"><summary>Solution and check</summary>
The reaction is the system; liquid, cup and thermometer are thermal surroundings. Heat moves out of the reaction into them. Draw reactants above products and a downward $\Delta H$ arrow: the reaction is exothermic with negative $\Delta H$. The exact reverse has a positive change of the same magnitude. The corrected reaction heat corresponds to $\Delta H$ at **constant pressure with no work other than ordinary pressure–volume work**. The open cup allows pressure to remain approximately atmospheric; exclude electrical input and account for the cup and external heat exchange before assigning the reaction heat. Insulation alone does not establish these conditions. If you inferred either the sign or $q=\Delta H$ from the thermometer alone, revisit [the energy account](#system-and-sign), then do [the changed-apparatus retry](#retry-energy).
</details>
</div>

<h2 id="standard-enthalpies">Specify one mole, the states and the conditions</h2>

A **standard enthalpy change**, $\Delta H^\circ$, refers to substances in their standard states at **100 kPa and a stated temperature**, commonly 298 K. State the temperature; “standard” does not mean that temperature can never vary. An element's reference state is its most stable form at the stated conditions: for example graphite rather than diamond at 298 K. For solutions use the stated standard solution convention, commonly concentration 1 $\mathrm{mol\,dm^{-3}}$ at this level. A rising-temperature cup experiment is an estimate over a temperature interval; do not automatically attach a standard symbol to its result.

The **standard enthalpy of formation**, $\Delta_fH^\circ$, is the enthalpy change when **one mole of a substance forms from its constituent elements in their standard states**, all under standard conditions. The **standard enthalpy of combustion**, $\Delta_cH^\circ$, is the change when **one mole of a substance burns completely in oxygen**, with all reactants and products in their standard states under standard conditions. “One mole” refers to the substance formed or burned respectively, not to oxygen or the total number of product molecules.

For liquid ethanol at 298 K, the defining equations are:

$$\ce{2C(s,graphite) + 3H2(g) + 1/2O2(g) -> C2H5OH(l)}\qquad(\text{formation})$$

$$\ce{C2H5OH(l) + 3O2(g) -> 2CO2(g) + 3H2O(l)}\qquad(\text{combustion})$$

Fractional coefficients are appropriate when they keep the named substance at one mole. Replacing $\ce{H2O(l)}$ with $\ce{H2O(g)}$ changes the process: energy is needed to vaporise liquid water, so combustion producing vapour is less exothermic. Elements in their reference states have zero standard formation enthalpy **by convention**; this does not mean their absolute enthalpy or every combustion enthalpy is zero.

<div class="lesson-check" markdown="1">
<h3 id="definitions-check">Check a thermochemical label</h3>
<!-- task:definitions-check -->
At 298 K and 100 kPa, write the equation defining the standard enthalpy of formation of CO2(g) and the equation defining the standard enthalpy of combustion of CH4(g). Include states and explain which substance the one-mole definition refers to. A report replaces liquid water with water vapour in the methane products but retains the same enthalpy value. Explain why this is invalid and how the combustion enthalpy changes.
<!-- /task:definitions-check -->
<details markdown="1"><summary>Hint</summary>
Formation starts from elements in reference states. Combustion starts from one mole of the fuel and gives complete oxidation products.
</details>
<details markdown="1"><summary>Solution and check</summary>
$\ce{C(s,graphite) + O2(g) -> CO2(g)}$ forms one mole of carbon dioxide. $\ce{CH4(g) + 2O2(g) -> CO2(g) + 2H2O(l)}$ burns one mole of methane completely. Include the stated temperature and pressure in both definitions. Vapour products have higher enthalpy than liquid-water products, so the changed reaction has a less negative enthalpy; its value cannot be left unchanged. If you started formation with CO or omitted a state, revisit [the definitions](#standard-enthalpies), then [retry with different substances](#retry-definitions).
</details>
</div>

<h2 id="calorimetry-model">Turn a temperature difference into a reaction quantity</h2>

For material of mass $m$, approximately constant specific heat capacity $c$, no change of phase and a nearly uniform temperature:

$$q_{\mathrm{solution}}=mc\Delta T,\qquad \Delta T=T_{\mathrm{after}}-T_{\mathrm{before}}$$

With $m$ in g and $c$ in $\mathrm{J\,g^{-1}\,K^{-1}}$, the result is J. A 6.8 °C **difference** equals 6.8 K; do not add 273 to a temperature difference. Here $c$ means specific heat capacity, not concentration. The mass must belong to the material described by that $c$: in a dilute aqueous mixture we may approximate the **whole solution** as water-like. Use the total solution mass, not just one reagent's mass. A problem explicitly using a water-only model is a different approximation. For a dissolving solid, including its mass is appropriate when $c$ describes the resulting whole solution; justify any water-only simplification rather than switching silently.

If the cup's heat capacity and exchange with the room are negligible:

$$q_{\mathrm{reaction}}\approx-q_{\mathrm{solution}}$$

The opposite signs express conservation of energy. If a known calorimeter heat capacity $C_{\mathrm{cal}}$ in $\mathrm{J\,K^{-1}}$ matters, its heat change is $C_{\mathrm{cal}}\Delta T$ and belongs in the thermal account as well. A cooling correction alone does not determine this missing heat capacity.

Finally identify the **amount that actually reacts** from the balanced equation. For a reaction written with coefficients $a,b$, the number of moles of reaction as written is the smaller of $n(A)/a$ and $n(B)/b$. Divide the reaction heat in kJ by that amount. Always state the basis: per mole of fuel burned, water formed, salt dissolved or reaction **as written**. Doubling every coefficient doubles the enthalpy per mole of reaction as written, but does not change the heat released by the same actual sample.

<div class="worked-example" markdown="1">
<h3 id="worked-neutralisation">Worked example: decide the mass and the mole basis</h3>
Constructed example: mix 50.0 cm³ of 1.00 $\mathrm{mol\,dm^{-3}}$ HCl with 50.0 cm³ of 1.00 $\mathrm{mol\,dm^{-3}}$ NaOH, both initially 20.0 °C. A corrected rise is 6.8 K. Assume complete reaction, negligible heat of dilution, density 1.00 $\mathrm{g\,cm^{-3}}$, additive volumes, solution $c=4.18\,\mathrm{J\,g^{-1}\,K^{-1}}$, negligible cup heat capacity and corrected external heat exchange.

$$\ce{HCl(aq) + NaOH(aq) -> NaCl(aq) + H2O(l)}$$

The reacting ratio is 1:1. Each reagent supplies $1.00\times0.0500=0.0500$ mol, so 0.0500 mol water forms. Both solutions warm, giving total mass $(50.0+50.0)\times1.00=100.0$ g.

$$q_{\mathrm{solution}}=100.0\times4.18\times6.8=2842.4\ \mathrm{J}=2.8424\ \mathrm{kJ}$$

The solution gains energy, so the reaction loses it. For one mole of water formed, which is also one mole of this equation's reaction:

$$\Delta H\approx\frac{-2.8424}{0.0500}=-56.848\ \mathrm{kJ\,mol^{-1}}\approx-57\ \mathrm{kJ\,mol^{-1}}$$

The final value uses two significant figures, limited by the given temperature rise. Retain unrounded values during working. Check: units are energy per mole, the sign matches warming and doubling both volumes at unchanged concentrations would double both heat and reacted amount, leaving the molar result unchanged. This is an experimental-model estimate, not a certified standard enthalpy.
</div>

<div class="lesson-check" markdown="1">
<h3 id="amount-check">Report what the mixture tells you</h3>
<!-- task:amount-check -->
Mix 30.0 cm3 of 1.00 mol dm−3 HCl with 20.0 cm3 of 1.00 mol dm−3 NaOH at the same initial temperature. The corrected rise is 5.4 K. Assume complete 1:1 reaction to NaCl(aq) and H2O(l), negligible dilution heat, additive volumes, density 1.00 g cm−3, whole-solution c = 4.18 J g−1 K−1, negligible cup heat capacity and corrected external heat exchange. Determine the reaction enthalpy per mole of water formed. Explain why using either 20.0 g or 0.0300 mol would be wrong.
<!-- /task:amount-check -->
<details markdown="1"><summary>Hint</summary>
The thermal mass and the amount of reaction answer different questions. Find the limiting reactant before dividing by moles.
</details>
<details markdown="1"><summary>Solution and check</summary>
The thermal mass is 50.0 g; NaOH limits the reaction to 0.0200 mol water. $q_{\mathrm{solution}}=50.0\times4.18\times5.4=1128.6$ J. The reaction enthalpy is $-1.1286/0.0200=-56.43\approx\mathbf{-56\,kJ\,mol^{-1}}$ per mole water. Using 20.0 g omits warm acid solution; 0.0300 mol counts unreacted excess acid. If either error occurred, return to [the two quantities](#calorimetry-model), then [predict a temperature instead](#retry-amount).
</details>
</div>

<h2 id="temperature-time">Use a time record, not just the highest reading</h2>

A reaction takes time to mix, and the probe takes time to respond. Meanwhile a hot mixture transfers heat to the cooler room. The highest recorded temperature may therefore be below the temperature a rapid reaction would have produced without external exchange. Collect temperatures at regular intervals before and after a known mixing time. Check the reagents start at the same temperature; otherwise part of the change is simply thermal mixing.

<div class="worked-example" markdown="1">
<h3 id="worked-correction">Worked example: estimate the change at mixing</h3>
These are **constructed raw readings** for the 100.0 g neutralisation example. Mix at 120 s. The missing reading records the mixing interval, not zero temperature.

| Time / s | Temperature / °C | Observation |
| --- | --- | --- |
| 0 | 20.0 | Before mixing |
| 30 | 20.0 | Before mixing |
| 60 | 20.0 | Before mixing |
| 90 | 20.0 | Before mixing |
| 120 | — | Mix and stir |
| 150 | 26.7 | Well mixed; reaction complete |
| 180 | 26.6 | Cooling |
| 210 | 26.5 | Cooling |
| 240 | 26.4 | Cooling |
| 270 | 26.3 | Cooling |
| 300 | 26.2 | Cooling |

Plot temperature against time. Fit the pre-mixing baseline separately from the post-reaction cooling data; do not draw a single line through the jump. This deliberately simple dataset has a local cooling slope $(26.2-26.7)/(300-150)=-0.00333\,\mathrm{K\,s^{-1}}$. Extend that line back to 120 s: the interval back is 30 s, giving $26.7+0.00333\times30=26.8$ °C. The baseline at that same instant is 20.0 °C, giving **6.8 K**, as used above.

![Constructed demonstration graph: before-mixing readings at 20.0 °C, post-reaction readings declining from 26.7 to 26.2 °C, and a dashed extrapolation to 26.8 °C at the 120 s mixing time. Corrected rise is 6.8 K.](/assets/img/chemistry-as-energy-extrapolation.svg)

Using the observed 6.7 K alone gives $-56.012\,\mathrm{kJ\,mol^{-1}}$ before rounding, less negative than the corrected $-56.848$. Keep intermediate values to see the correction even when the rounded results look similar. Real readings scatter; choose a defensible fit rather than forcing every point onto a straight line.
</div>

Extrapolation approximates what a **fast** change would have done at the mixing time. Use the interval after reaction and probe equilibration but before late curvature dominates. A long reaction, changing room temperature, evaporation or a curved long-time cooling record can invalidate a simple straight-line correction. An endothermic mixture below room temperature instead gains heat from the room and **warms back**; extrapolate its post-reaction warming segment back in the same way. If the baseline drifts, extrapolate it too and take the separation at one common time.

<div class="lesson-check" markdown="1">
<h3 id="data-check">Choose which readings support an estimate</h3>
<!-- task:data-check -->
Constructed data: time/s = 0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300; temperature/°C = 21.0, 21.0, 21.0, 21.0, missing, 26.0, 27.6, 27.5, 27.4, 27.3, 27.2. Mix at 120 s; at 150 s the probe is still responding. The rapid reaction is complete and the mixture uniform by 180 s. Plot the raw readings, choose and justify a fitting interval, and estimate the corrected temperature change. Explain what goes wrong if the 150 s point is forced into the same straight cooling line, and give one reason the correction might still be unreliable in a real experiment.
<!-- /task:data-check -->
<details markdown="1"><summary>Hint</summary>
Do not treat a probe still approaching the liquid temperature as a cooling measurement. Compare both fitted temperatures at the mixing time.
</details>
<details markdown="1"><summary>Solution and check</summary>
Keep every raw reading visible, but fit the baseline at 21.0 °C and the **180–300 s** post-reaction cooling segment. Its slope is $-0.1/30=-0.00333\,\mathrm{K\,s^{-1}}$. Extrapolating 60 s back from 180 s gives $27.6+0.2=27.8$ °C; corrected rise is **6.8 K**. Mark dashed extensions to 120 s on your plot. Including 26.0 °C at 150 s confuses probe response with cooling and biases the fit. A slow continuing reaction or curved cooling would undermine the extrapolation assumption. If you used the maximum alone or joined through the jump, revisit [the time model](#temperature-time), then [analyse warming data](#retry-data).
</details>
</div>

<h2 id="uncertainty">A temperature difference uses two readings</h2>

Suppose each reading has a stated uncertainty of ±0.1 °C. For a simple worst-case estimate, one reading can be too high while the other is too low, so the difference has uncertainty **±0.2 K**. For a 6.8 K rise:

$$\text{percentage uncertainty in }\Delta T=\frac{0.2}{6.8}\times100\%=2.94\%\approx2.9\%$$

This is a **reading-only estimate**, not a confidence interval or complete uncertainty in $\Delta H$. Extrapolation adds uncertainty from point scatter, fit and choice of interval; masses, concentrations, thermal properties and heat exchange also matter. Instrument resolution is not automatically the stated uncertainty. A common fixed calibration offset cancels in a difference if unchanged between readings, whereas resolution and response errors need not. Repeated runs can reveal spread; averaging does not remove systematic heat loss.

<div class="lesson-check" markdown="1">
<h3 id="uncertainty-check">Compare two measurements fairly</h3>
<!-- task:uncertainty-check -->
Two experiments use the same thermometer, with stated independent reading uncertainties ±0.1 °C per reading. Their directly measured temperature changes are 2.0 K and 8.0 K. Use a worst-case addition estimate to find the absolute and percentage uncertainty in each difference. A student claims the second enthalpy result is therefore certainly accurate to 2.5%. Evaluate the claim, including what changes if temperatures come from fitted extrapolations.
<!-- /task:uncertainty-check -->
<details markdown="1"><summary>Hint</summary>
Count the readings before calculating percentages. A small relative reading uncertainty does not quantify every model error.
</details>
<details markdown="1"><summary>Solution and check</summary>
Both differences have a reading uncertainty of **±0.2 K**. Percentages are **10%** and **2.5%** respectively. The second has a smaller relative reading contribution; heat loss, cup heat capacity, incomplete reaction or uncertain moles can still bias its enthalpy. Extrapolated temperatures need additional fit/interval uncertainty, so 2.5% is not the whole result's guaranteed accuracy. If you divided ±0.1 by the rise or equated precision with accuracy, revisit [two readings](#uncertainty), then [retry with a fixed offset](#retry-uncertainty).
</details>
</div>

<h2 id="planning-and-evaluation">Choose a method for the question</h2>

Before collecting data, write the reaction, expected energy-transfer direction and amount basis. Choose measured quantities that can determine both heat and reacted moles. For fast solution reactions, a supported polystyrene cup and lid reduce exchange; stirring helps the probe represent the bulk liquid. Measure both reagents' initial temperatures, the actual masses or volumes and concentrations, and a timed record. Position the probe in the liquid without resting it on the cup; a lid must accommodate probe and stirrer without sealing a gas-producing reaction.

For an exothermic mixture hotter than the room, uncorrected heat loss reduces $\Delta T$: inferred $q$ is too small and the calculated reaction enthalpy is **less negative**, closer to zero. Neglecting cup absorption has the same direction in that model. For an endothermic mixture below room temperature, heat entering from the room reduces the magnitude of cooling, so the inferred positive enthalpy is **too small**. Always identify which object is warmer before naming the direction. A lid/insulation reduces exchange, a time record can estimate a correction, and calorimeter calibration addresses cup absorption; these solve different problems.

Burning fuel under a water container uses the same energy account but a different apparatus. Water mass is the thermal mass; the **mass of fuel actually burned divided by its molar mass** gives the mole basis. Escaping hot gases, incomplete combustion and fuel evaporation are additional limitations. An enclosed, suitable calorimeter improves heat capture; avoid blocking oxygen supply. A fair comparison fixes the relevant thermal mass and geometry and reports energy per stated amount, not the biggest raw temperature rise.

For any real practical, use a teacher-approved method and risk assessment, wear eye protection, stabilise the cup/container, handle dilute acid/alkali splashes as instructed, and use suitable disposal. Flammable-fuel work requires controlled ignition, no refilling near flames, suitable ventilation and burn precautions. Copper-salt work needs designated waste collection. These paper tasks do not authorise unsupervised procedures or certify safe practical competence.

<div class="lesson-check" markdown="1">
<h3 id="plan-check">Design evidence for a comparison</h3>
<!-- task:plan-check -->
You must compare the molar heat changes of two rapid, complete reactions between dilute aqueous solutions. Available equipment includes glass beakers, supported polystyrene cups with lids, measuring cylinders, a balance, a stopwatch, a stirrer and a temperature probe. Choose a setup and state what you will measure to determine heat and reacted moles. Explain how you will establish a common initial temperature, record a usable time series and compare results fairly. One reaction warms the liquid above room temperature; predict the effect of uncorrected heat loss on its reported ΔH and propose a targeted improvement. Include a relevant risk control and explain what repeats can and cannot establish.
<!-- /task:plan-check -->
<details markdown="1"><summary>Hint</summary>
Build a plan around mass, temperature history and reaction amount. Every proposed control or improvement should have a reason.
</details>
<details markdown="1"><summary>Solution and check</summary>
Choose supported insulated cups with lids and a stirred, immersed probe. Measure reagent volumes/concentrations (or weighed amounts), establish stoichiometry and the limiting amount, and determine total solution mass. Let both reagents equilibrate in the same room and **verify their temperatures**. Record regular pre-mixing readings, the mixing time and post-reaction readings long enough to fit a short cooling section. Use the same thermal assumptions, apparatus, probe position and initial conditions, then compare **kJ per mole of a stated reaction basis**. Heat loss makes the warming reaction's result less negative; insulation/lid reduces loss and justified extrapolation estimates a correction. Eye protection and controlled dilute-acid/alkali handling address splashes. Repeats show spread/repeatability, not freedom from systematic bias. If your plan only says “take the highest temperature and repeat”, revisit [method decisions](#planning-and-evaluation), then [change to fuel calorimetry](#retry-plan).
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="transfer-check">Make and defend a report</h3>
<!-- task:transfer-check -->
A constructed dissolution experiment adds 5.00 g KCl(s), M = 74.6 g mol−1, to 100.0 g water. All the solid dissolves rapidly. The corrected solution temperature changes from 22.0 to 19.4 °C. Treat the whole 105.0 g solution as having c = 4.18 J g−1 K−1; ignore cup heat capacity and assume external exchange has been corrected. Write KCl(s) → K+(aq) + Cl−(aq), calculate and interpret the molar enthalpy change, and sketch its enthalpy levels. If an uncorrected run instead reaches only 19.8 °C, explain the energy transfer that could cause this and the direction of the enthalpy error. Does this observation establish a standard enthalpy of formation? Justify your answer and propose one additional measurement or check for a stronger experimental report.
<!-- /task:transfer-check -->
<details markdown="1"><summary>Hint</summary>
Choose the model and amount basis yourself before comparing the two observations. Identify what type of change the equation describes.
</details>
<details markdown="1"><summary>Solution and check</summary>
$\ce{KCl(s) -> K+(aq) + Cl-(aq)}$ dissolves one formula unit into one ion of each kind; atoms and total charge balance. $\Delta T=-2.6$ K; $q_{\mathrm{solution}}=105.0\times4.18\times(-2.6)=-1141.14$ J. The change absorbs $+1.14114$ kJ for $5.00/74.6=0.067024\ldots$ mol salt: $\Delta H=+17.0258\ldots\approx\mathbf{+17\,kJ\,mol^{-1}}$ per mole KCl dissolved. Draw products above reactants with an upward arrow. Room-to-solution heat transfer reduces cooling to 2.2 K; the uncorrected result is about +14.4 $\mathrm{kJ\,mol^{-1}}$ before final rounding, **too small**. This is dissolution, not formation from elements; neither the standard temperature nor all standard-state conditions have been established. Check complete dissolution, initial solid temperature or probe response, measure a fuller time series, or calibrate cup heat capacity, explaining the limitation addressed. Diagnose your error against [sign](#system-and-sign), [mass and amount](#calorimetry-model), or [conditions](#standard-enthalpies), then use the matching retry below. Revisit this task without help before the next topic.
</details>
</div>

<h2 id="retry">Change the conditions and try again</h2>

Close your first solution. Choose the retry for the error you made; show fresh reasoning before opening its separate answer. These are new constructed tasks, not corrections to copy.

<div class="lesson-check" markdown="1">
<h3 id="retry-energy">A different observation</h3>
<!-- task:retry-energy -->
A rapid dissolution in an insulated cup open to the atmosphere lowers the liquid temperature without external heating or cooling. Identify the energy-transfer direction and sketch the reaction enthalpy levels. Explain why the sign of the liquid's heat change differs from the sign of the dissolution enthalpy, and predict the sign for the reverse change between the same states. Another report records the same temperature change in a rigid sealed vessel with an unmeasured electrical input and labels the inferred heat ΔH. Evaluate that label: state which pressure, work and energy-account conditions need to be established before the reaction heat can be identified with an enthalpy change.
<!-- /task:retry-energy -->
<details markdown="1"><summary>Hint</summary>
Track which part loses thermal energy when the liquid cools. The same temperature change need not imply the same reaction heat or establish the required pressure and work conditions.
</details>
<details markdown="1"><summary>Retry solution</summary>
Heat passes from liquid surroundings into the dissolving system. The liquid has negative $q$, but dissolution has positive $\Delta H$; products are higher than reactants and the arrow points upward. The exact reverse has negative $\Delta H$. In the open-cup case, approximately constant atmospheric pressure, no other work and a corrected thermal account support identifying the reaction heat with $\Delta H$. A rigid sealed vessel does not by itself establish constant pressure; electrical input also contributes energy that has not been separated from the reaction. The second report's label is therefore unjustified from the given evidence. If you assumed that insulation or a matching temperature difference guarantees $q=\Delta H$, state the missing pressure/work conditions and remove unrelated energy inputs before trying again.
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-definitions">Change the substance</h3>
<!-- task:retry-definitions -->
At 298 K and 100 kPa, write the defining formation equation for H2O(l) and complete-combustion equation for C2H5OH(l). Explain why H2O(g) is not interchangeable with H2O(l). A student calls C(diamond) + O2(g) → CO2(g) the defining standard formation equation for CO2 at these conditions. Correct the reference state and explain the error.
<!-- /task:retry-definitions -->
<details markdown="1"><summary>Hint</summary>
Check the one-mole target, complete oxidation products and the element's most stable reference form.
</details>
<details markdown="1"><summary>Retry solution</summary>
$\ce{H2(g) + 1/2O2(g) -> H2O(l)}$ forms one mole water; $\ce{C2H5OH(l) + 3O2(g) -> 2CO2(g) + 3H2O(l)}$ burns one mole ethanol. Vapour and liquid differ in enthalpy. Use graphite, not diamond, in the defining carbon reference state at 298 K. Diamond oxidation is a valid reaction but has a different enthalpy from the defining standard formation process.
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-amount">Predict before measuring</h3>
<!-- task:retry-amount -->
Take the enthalpy of HCl(aq) + NaOH(aq) → NaCl(aq) + H2O(l) as −57.0 kJ per mole of reaction as written. Mix 25.0 cm3 of 1.00 mol dm−3 HCl with 50.0 cm3 of 1.00 mol dm−3 NaOH at the same initial temperature. Assume complete reaction, negligible dilution heat, additive volumes, density 1.00 g cm−3, whole-solution c = 4.18 J g−1 K−1, negligible cup heat capacity and no external heat exchange. Predict the temperature rise. If every equation coefficient is doubled, what enthalpy belongs to one mole of that doubled reaction, and does the actual mixture's predicted rise change?
<!-- /task:retry-amount -->
<details markdown="1"><summary>Hint</summary>
Determine heat from the reacted amount, then ask how much material that heat warms. Distinguish sample heat from the equation's normalisation.
</details>
<details markdown="1"><summary>Retry solution</summary>
HCl limits water formation to 0.0250 mol. The reaction releases $57.0\times0.0250=1.425$ kJ. All 75.0 g solution warms, so $\Delta T=1425/(75.0\times4.18)=\mathbf{4.55\,K}$. The doubled equation has **−114 kJ per mole of reaction as written**; this sample performs 0.0125 mol of that reaction, so its heat and rise stay unchanged. If your rise doubled, you changed the chemical sample when only the notation changed.
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-data">A new time record</h3>
<!-- task:retry-data -->
Constructed data: a baseline is constant at 22.0 °C before mixing at 120 s. After a rapid complete dissolution and probe equilibration, readings at 180, 210, 240, 270 and 300 s are 19.2, 19.3, 19.4, 19.5 and 19.6 °C. Plot and extrapolate a suitable segment to estimate the temperature change at mixing. Identify the direction of heat transfer between room and liquid. Would the same straight-line treatment be defensible if dissolution continued for 180 s after mixing? Explain.
<!-- /task:retry-data -->
<details markdown="1"><summary>Hint</summary>
Use the sign of the post-reaction slope when extending backwards. Separate ongoing reaction from environmental exchange.
</details>
<details markdown="1"><summary>Retry solution</summary>
The warming slope is +0.00333 $\mathrm{K\,s^{-1}}$. Going back 60 s from 180 to 120 s gives $19.2-0.2=19.0$ °C; corrected $\Delta T=\mathbf{-3.0\,K}$. Heat enters the cold liquid from the warmer room, so the measured later minimum underestimates the magnitude of cooling. Continuing dissolution would overlap the supposed recovery segment, so its slope would combine reaction and exchange; this simple fit would not justify the same correction.
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-uncertainty">Change the size and the error</h3>
<!-- task:retry-uncertainty -->
Readings have stated uncertainties ±0.1 °C each. A directly observed cooling magnitude is 1.6 K. Find its worst-case reading uncertainty in kelvin and as a percentage. The thermometer also has an unchanged +0.3 °C calibration offset on both readings. Explain the offset's effect on their difference and why this does not eliminate the stated reading uncertainty or establish an unbiased enthalpy result.
<!-- /task:retry-uncertainty -->
<details markdown="1"><summary>Hint</summary>
Write (Tfinal + offset) − (Tinitial + offset), then consider the other error sources separately.
</details>
<details markdown="1"><summary>Retry solution</summary>
Worst-case uncertainty is **±0.2 K**, or **12.5%**. The unchanged +0.3 °C offset cancels exactly in the difference. It does not make separately varying reading errors, probe lag, extrapolation uncertainty or systematic environmental exchange disappear. If you used ±0.6 K for this fixed offset, distinguish correlated calibration error from separately varying reading errors.
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-plan">Use another apparatus</h3>
<!-- task:retry-plan -->
A burner loses 0.460 g of ethanol, M = 46.0 g mol−1, while heating 200.0 g water by 10.0 K. Use water c = 4.18 J g−1 K−1 to calculate the heat gained by the water and divide its negative by the apparent fuel amount inferred from mass loss. Report this as an apparent molar combustion estimate from the apparatus. Explain why these measurements alone do not establish complete combustion, absence of evaporation, complete heat capture or negligible container heat capacity, and cannot certify the true complete-combustion enthalpy. Then evaluate two observations separately: soot forms, and fuel evaporates without burning during weighing. Predict how each affects the apparent value relative to complete combustion with perfect heat collection, propose a targeted improvement or check for each, and include one fuel-handling risk control.
<!-- /task:retry-plan -->
<details markdown="1"><summary>Hint</summary>
Separate measured water heating and burner mass loss from assumptions about what burned and where the heat went. One fault changes the chemical process; the other makes mass loss exceed the mass burned.
</details>
<details markdown="1"><summary>Retry solution</summary>
Water gains $200.0\times4.18\times10.0=8360$ J. Apparent fuel amount is $0.460/46.0=0.0100$ mol, giving **−836 $\mathrm{kJ\,mol^{-1}}$ as an apparatus-based apparent estimate**. Water heating and burner mass loss do not show that all fuel burned completely, none evaporated, all heat entered the water or the container absorbed negligible heat. This number is **not certified as ethanol's true complete-combustion enthalpy**. Soot indicates incomplete combustion: less heat is released than for complete oxidation, so the result is less negative. Use a suitable oxygen-supplied combustion apparatus/method and check for soot rather than merely repeating. Evaporation inflates the denominator without supplying heat, also making the inferred value less negative; cap and weigh promptly away from flames and investigate non-burning mass loss. Escaping hot gases, external heat loss and container absorption are further reasons the water need not capture the combustion heat. Never refill a hot or lit burner; use teacher-approved flame handling. “More repeats” alone cannot validate these assumptions or correct either observed fault.
</details>
</div>

Return to [the report task](#transfer-check) later with all help closed, then continue to Hess's law and bond enthalpies when that learning page is available. [AS chemistry entrance](/alevel/as-chemistry/).

<h2 id="sources">Scope and reading</h2>

[OxfordAQA 9620 specification, Version 5.3](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf), p.17, 3.1.4.1–2 and RP2. [Official Practical Handbook](https://www.oxfordaqa.com/oaqaresources/science/teaching/a-level-practical-handbook-chemistry-4.2.pdf), 2018, pp.53–57: one possible copper-sulfate dissolution/Hess implementation, rather than a requirement to use this lesson's reagents. Textbook consulted: Lister and Renshaw, OUP 2016, pp.81–90 and Practical 2 pp.522–523. This page uses its own explanations, original diagrams, constructed readings and self-written checks; it reproduces no textbook scans. Practical completion, standard-state certification and learning effectiveness have not been established by these paper tasks.
