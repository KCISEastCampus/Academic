---
title: Reaction Rates and Collision Theory
layout: subjects
mathjax: true
grade: as
subject: as-chemistry
permalink: /alevel/as-chemistry/kinetics/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">Why can a favourable energy change still be slow?</h2>

A fuel can remain unchanged for a long time before ignition, while a different reaction proceeds rapidly at room temperature. Enthalpy change tells you the difference between start and finish; **rate** asks how quickly particles find a successful route.

You need [moles and concentration](/alevel/as-chemistry/solutions-and-titration/), basic graph gradients, and [enthalpy signs](/alevel/as-chemistry/energetics-and-calorimetry/). This lesson covers AS 3.1.6.1–5: collision theory, Maxwell–Boltzmann distributions, temperature, concentration, gas pressure and catalysts. All tasks, numerical datasets and illustrative curves are **self-written / constructed**, not measurements or official questions. No rate orders or Arrhenius calculations are assumed.

<h2 id="reading-rate">Read speed separately from final amount</h2>

Rate describes the change in a reactant or product concentration per unit time, commonly $\mathrm{mol\,dm^{-3}\,s^{-1}}$. For a disappearing reactant, its concentration gradient is negative; report its **rate of disappearance** as a positive magnitude. Product formation has a positive gradient. If monitoring a gas at constant collection temperature and pressure, volume per time is a practical proxy for formation rate, with units such as $\mathrm{cm^3\,s^{-1}}$; it is not automatically a concentration rate.

An average rate comes from a **chord between two times**. The instantaneous rate is the tangent gradient at one time. A curve can flatten because a reactant is being consumed, even though the temperature is unchanged. A plateau tells you the final collected amount under the measurement conditions, not the initial rate. Compare initial slopes, rather than the time at which a student happened to stop measuring.

<div class="worked-example" markdown="1">
<h3 id="worked-rate">Worked example: identify what a gradient measures</h3>
Constructed record: a reactant concentration falls from 0.100 to 0.060 $\mathrm{mol\,dm^{-3}}$ between 0 and 20.0 s. Its average disappearance rate is $(0.100-0.060)/20.0=\mathbf{0.00200\,mol\,dm^{-3}\,s^{-1}}$. This interval does not determine its exact initial rate: that needs a tangent to sufficiently detailed early-time data. A gas volume rising from 0 to 30.0 cm³ over the same time instead gives an average **volume-production rate** of 1.50 $\mathrm{cm^3\,s^{-1}}$. The units identify the observable.
</div>

<div class="lesson-check" markdown="1">
<h3 id="rate-check">Interpret two time records</h3>
<!-- task:rate-check -->
Constructed complete gas-production experiments A and B start with identical reactant amounts. Gas is collected without leakage at the same temperature and pressure. At times 0, 20, 40, 60, 120 s, volumes in cm3 are A: 0, 20, 34, 44, 60; B: 0, 34, 48, 55, 60. Both have finished by 120 s. Plot both records, compare their average volume-production rates over 0–20 s and 20–40 s, and distinguish evidence about speed from evidence about total amount. Explain why neither first chord is necessarily the exact initial rate.
<!-- /task:rate-check -->
<details markdown="1"><summary>Hint</summary>
A chord concerns an interval; a plateau concerns amount. State the quantity and units before calculating.
</details>
<details markdown="1"><summary>Solution and check</summary>
A gives 1.00 then 0.70 $\mathrm{cm^3\,s^{-1}}$; B gives 1.70 then 0.70. B has faster early production, but the identical 60 cm³ plateaux at common collection conditions indicate equal final gas amounts. Draw smooth increasing curves through the records, flattening at 60. A 20 s chord averages a changing slope, so it need not equal a tangent at zero. A faster early run does not necessarily produce more gas. If you confused gradient and height, revisit [reading speed](#reading-rate), then [change collection conditions](#retry-rate).
</details>
</div>

<h2 id="collision-model">A collision needs energy and a suitable encounter</h2>

Particles must collide for a reaction between them to occur. **Activation energy**, $E_a$, is the minimum energy required for a reaction to occur; in the collision model, the colliding particles need at least this energy. An appropriate orientation also matters: the reacting parts must meet in a way that can form the new arrangement. Most encounters fail because of insufficient energy and/or unsuitable orientation.

On a reaction profile, measure forward $E_a$ **up from the reactant level to the pathway's barrier**, not from the products and not between reactants and products. $\Delta H$ measures the difference of the endpoint levels. A large negative $\Delta H$ can coexist with a high barrier and slow reaction. Breaking bonds absorbs energy; the net exothermic result includes the energy released by forming new bonds.

<div class="lesson-check" markdown="1">
<h3 id="collision-check">Explain why collisions fail</h3>
<!-- task:collision-check -->
A constructed reaction profile has reactants at 0, products at −60 and a transition barrier at +90 kJ mol−1 on the same enthalpy scale. Identify the forward activation energy and reaction enthalpy. Define activation energy and explain why a sample can react slowly despite its negative ΔH, including why not every sufficiently energetic encounter necessarily reacts.
<!-- /task:collision-check -->
<details markdown="1"><summary>Hint</summary>
Compare the barrier with the reactants separately from comparing the two endpoints.
</details>
<details markdown="1"><summary>Solution and check</summary>
Forward $E_a=\mathbf{90\,kJ\,mol^{-1}}$ and $\Delta H=\mathbf{-60\,kJ\,mol^{-1}}$. Activation energy is the minimum energy required for reaction; few collisions may reach the barrier at this temperature, and even energetic encounters can have unsuitable orientations. Negative $\Delta H$ is not a measure of barrier height or speed. If you used 150 as the forward barrier, you measured from the products; return to [the profile](#collision-model), then [evaluate a slow exothermic reaction](#retry-collision).
</details>
</div>

<h2 id="distribution">Represent a spread of molecular energies</h2>

A gas sample at one temperature does not give every molecule the same energy. The **Maxwell–Boltzmann energy distribution** starts at the origin, rises to a most-probable energy, then falls with a long high-energy tail approaching, rather than meeting, the axis at a finite energy. The mean energy is not the position of the peak.

Here the vertical axis is **probability density per unit energy**, so area in an energy interval is the fraction of molecules there and the entire area is 1. It is not the probability of one exact energy. In a diagram using molecular number density instead, total area would be the number of molecules. State the convention: do not change total particle number merely because a peak is higher.

![Illustrative Maxwell–Boltzmann energy distributions at two temperatures and the same normalised area, followed by a same-temperature distribution with lower and higher activation thresholds. Lines are labelled and use distinct dash patterns.](/assets/img/chemistry-as-kinetics-distribution.svg)

<h2 id="temperature">Heating changes the distribution, not the barrier</h2>

At a higher temperature, the curve is broader, its peak is lower and further right, and more area lies beyond the **same** $E_a$. More molecules therefore have enough energy for successful encounters. A modest temperature increase can make this tail fraction much larger, giving a large increase in rate. Faster motion also increases collision frequency, but “all molecules now have the activation energy” is false.

Keep sample size and graph convention fixed when comparing curves. The lower peak is balanced by area spread across a wider energy range. Heating alone does not lower $E_a$ for a fixed pathway; that would be a change of route, not a change of energy distribution.

<div class="lesson-check" markdown="1">
<h3 id="temperature-check">Draw and justify the temperature comparison</h3>
<!-- task:temperature-check -->
For a fixed number of gas molecules, sketch Maxwell–Boltzmann energy distributions at T1 and a slightly higher T2 on common axes with probability density per unit energy vertically. Label both curves, one unchanged Ea and the regions representing molecules energetic enough to react. Explain the area and peak changes and why the rate can increase markedly without Ea falling.
<!-- /task:temperature-check -->
<details markdown="1"><summary>Hint</summary>
Use areas for fractions, not the height of the curve at the threshold.
</details>
<details markdown="1"><summary>Solution and check</summary>
Label molecular energy horizontally and probability density vertically. Both curves start at zero and have unit area; T2 is broader with a lower peak further right. Keep $E_a$ at the same energy and shade each right-hand tail: T2's tail is larger. More sufficiently energetic collisions per time, together with a modest increase in collision frequency, explain faster reaction. Neither the total molecular count nor the pathway barrier falls. If you moved $E_a$ or changed total area, revisit [the distribution](#distribution), then [cool a sample](#retry-temperature).
</details>
</div>

<h2 id="concentration-pressure">Increase encounters without heating particles</h2>

Increasing a solution reactant's concentration puts more of its particles into each unit volume, so encounters with the other reactant become more frequent, all else equal. At the same temperature it does **not** raise the fraction above $E_a$. The rate response is qualitative here; doubling concentration does not universally prove an exactly doubled rate.

For gases, isothermal compression of the same reacting sample reduces its volume, increases reactant number densities and increases collision frequency. Its normalised energy distribution and $E_a$ remain unchanged. Raising **total** pressure by adding an inert gas at fixed volume and temperature leaves reactant concentrations unchanged; it is not the same intervention as compressing the reacting gases.

Changing concentration can also change the **amount available** if volume is fixed. Doubling peroxide concentration at fixed solution volume supplies twice as many moles and may give twice as much final oxygen after complete decomposition. By contrast, acid already in excess reacting with a fixed limiting carbonate sample may change speed without changing final CO2. State which reactant limits the amount before predicting a plateau.

<div class="lesson-check" markdown="1">
<h3 id="conditions-check">Predict two different experiments</h3>
<!-- task:conditions-check -->
Compare these constructed experiments at unchanged temperature. I: a fixed 0.0100 mol CaCO3 sample reacts completely with acid; both the original and more concentrated acid are in excess at the same volume. II: a fixed volume of H2O2 solution is completely decomposed, and its concentration is doubled; no other reactant limits it. Predict changes in early rate and final gas amount, explaining the collision and amount arguments separately. Also explain what is and is not changed when a reacting gas mixture is compressed to half its volume at constant temperature.
<!-- /task:conditions-check -->
<details markdown="1"><summary>Hint</summary>
Keep a separate account of particles per unit volume and total reacting moles.
</details>
<details markdown="1"><summary>Solution and check</summary>
I: more frequent acid/carbonate encounters generally give a faster early reaction, but fixed limiting CaCO3 yields the same 0.0100 mol CO2. II: higher peroxide concentration generally speeds the early reaction and doubles its available moles, so complete decomposition gives twice the oxygen amount ($\ce{2H2O2 -> 2H2O + O2}$). Compare gas volumes only at the same collection conditions. Compression doubles gas reactant number densities, increasing encounter frequency; it does not increase the fixed-temperature energetic fraction or lower $E_a$. No exact rate multiplier follows without more evidence. If you predicted every faster curve has the same or a larger plateau, return to [the amount distinction](#concentration-pressure), then [test an inert-gas claim](#retry-conditions).
</details>
</div>

<h2 id="catalysts">Change the pathway while keeping the energy distribution</h2>

A **catalyst** increases reaction rate without an overall change in its chemical composition or amount. It can take part in intermediate steps but is regenerated overall. It provides an alternative reaction route with a lower activation energy.

At fixed temperature the Maxwell–Boltzmann distribution is unchanged. Instead mark a lower threshold $E_{a,\mathrm{cat}}$ to the left of the original $E_a$. The additional area between the thresholds represents molecules energetic enough for the alternative route but not the original one. The same reactant and product states retain the same $\Delta H$; a catalyst does not supply the reaction energy or raise the sample temperature by definition.

For a reversible reaction a catalyst speeds the approach to equilibrium without changing the equilibrium composition at fixed temperature. This does not say it cannot increase the amount collected by an **early fixed time**: more reaction may have occurred by then, even though the eventual equilibrium or complete-conversion amount is unchanged.

<div class="lesson-check" markdown="1">
<h3 id="catalyst-check">Show what a catalyst changes</h3>
<!-- task:catalyst-check -->
At a fixed temperature, a constructed reaction has an uncatalysed Ea of 80 kJ mol−1, a catalysed Ea of 45 kJ mol−1 and ΔH = −30 kJ mol−1. Sketch one Maxwell–Boltzmann distribution with both thresholds and identify the additional energetic fraction. Sketch both reaction profiles on common reactant/product levels, and explain the catalyst definition, whether it can participate in steps, and whether it changes ΔH or final equilibrium composition.
<!-- /task:catalyst-check -->
<details markdown="1"><summary>Hint</summary>
Use one energy distribution but two pathways; the endpoints are shared.
</details>
<details markdown="1"><summary>Solution and check</summary>
The MB curve is unchanged; put 45 to the left of 80 and mark the area between the thresholds as newly energetically eligible. Reaction profiles start on the same reactant level and end 30 kJ mol−1 lower; their barriers are 80 and 45 above reactants. The catalyst provides a lower-barrier alternative, may participate but is regenerated with no overall composition/amount change, and changes neither $\Delta H$ nor fixed-temperature equilibrium position. If you lowered product enthalpy or redrew a hotter MB curve, revisit [catalysis](#catalysts), then [compare early and late yields](#retry-catalyst).
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="report-check">Choose evidence for an explanation</h3>
<!-- task:report-check -->
A student says a catalyst makes more product because it makes molecules hotter, while increasing gas pressure always raises the energetic fraction. Design a controlled comparison that distinguishes faster approach from a different final amount, identify the graphs you would request, and correct both microscopic explanations. Include how temperature, starting amounts, gas collection conditions and leakage would be controlled, and one relevant practical risk control.
<!-- /task:report-check -->
<details markdown="1"><summary>Hint</summary>
An early endpoint cannot establish a final plateau. Ask what each intervention actually changes.
</details>
<details markdown="1"><summary>Solution and check</summary>
Use identical reactant amounts/concentrations and apparatus, control and measure temperature, and vary only catalyst presence; collect time–gas-volume or concentration records until a stable, chemically justified endpoint, checking for leaks and common collection temperature/pressure. Compare slopes and final amounts separately; for a reversible system compare equilibrium at the same conditions. Catalyst changes the pathway barrier, not molecular heating; isothermal compression changes number density, not the energetic fraction. Request labelled MB/profile sketches as well as measured time records. Use eye protection and an approved vented gas setup; never seal a gas-generating reaction without suitable equipment. Repeats estimate spread, not proof of no leakage. Return later to this explanation without help, then study [equilibrium](/alevel/as-chemistry/equilibrium/).
</details>
</div>

<h2 id="retry">Try a changed condition</h2>

Close previous help and select the retry that addresses your error. Sketch or explain before opening its answer.

<div class="lesson-check" markdown="1">
<h3 id="retry-rate">Change the collection temperature</h3>
<!-- task:retry-rate -->
Two complete reactions produce equal moles of gas, but one sample is collected at a higher temperature at the same pressure. A student takes its larger final gas volume as proof that the reaction formed more product and had a higher initial rate. Evaluate both claims and state how to make the comparison valid.
<!-- /task:retry-rate -->
<details markdown="1"><summary>Hint</summary>
Volume depends on collection conditions; rate needs a time-dependent gradient.
</details>
<details markdown="1"><summary>Retry solution</summary>
Equal gas moles occupy a larger volume at higher collection temperature, so the volume difference does not establish more product. A final volume alone also cannot establish initial rate. Collect at common temperature/pressure or use $n=pV/(RT)$ to compare moles, then compare early-time molar-production gradients at controlled reaction conditions.
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-collision">Evaluate a stored fuel</h3>
<!-- task:retry-collision -->
A fuel oxidation is strongly exothermic but slow at room temperature. Explain why this does not contradict collision theory, define the activation-energy condition, and explain why breaking a fuel bond is not itself the source of released heat.
<!-- /task:retry-collision -->
<details markdown="1"><summary>Hint</summary>
Endpoint energy difference and the barrier concern different parts of the profile.
</details>
<details markdown="1"><summary>Retry solution</summary>
A high activation barrier means few room-temperature encounters meet the minimum energy condition; orientation can also limit success. A negative endpoint difference does not remove that barrier. Breaking bonds requires energy; forming product bonds releases enough energy to outweigh the breaking cost in a net exothermic reaction.
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-temperature">Sketch cooling instead</h3>
<!-- task:retry-temperature -->
A fixed gas sample cools from T2 to T1 without changing the reaction pathway. Draw both energy distributions with probability density vertically, compare total area and high-energy fraction, and evaluate the statement “a taller peak means more molecules and a lower Ea”.
<!-- /task:retry-temperature -->
<details markdown="1"><summary>Hint</summary>
Keep the normalisation and threshold fixed; follow the tail rather than only the peak.
</details>
<details markdown="1"><summary>Retry solution</summary>
The cooler curve is narrower, with a higher peak further left; both areas remain 1. The unchanged $E_a$ cuts off a smaller energetic fraction on the cooler curve, so reaction generally slows. Peak height reflects density in an energy interval, not total molecule count, and does not locate the pathway barrier.
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-conditions">Raise total pressure in two ways</h3>
<!-- task:retry-conditions -->
At fixed temperature compare I: compress the same reacting gas mixture to half its volume; II: add inert gas at unchanged volume. Predict the immediate change in reactant concentrations, collision frequency between reacting particles and the normalised energy distribution. Is a pressure reading alone enough to predict the rate change?
<!-- /task:retry-conditions -->
<details markdown="1"><summary>Hint</summary>
Track reacting particles per volume, not all particles collectively.
</details>
<details markdown="1"><summary>Retry solution</summary>
I doubles each reactant concentration and increases reacting-particle encounter frequency; II leaves those concentrations and their pairwise encounter frequency unchanged in the idealised model. Neither changes the fixed-temperature normalised energy distribution or $E_a$. Total pressure alone does not identify which intervention occurred, so it cannot justify a universal rate prediction.
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-catalyst">Compare an early yield with a final yield</h3>
<!-- task:retry-catalyst -->
Two closed reversible reactions start with the same amounts at the same temperature. The catalysed sample contains more product after 30 s, but both eventually reach the same composition. Explain these observations using rate and equilibrium, draw one MB curve with two Ea thresholds, and explain why neither observation requires a change in ΔH.
<!-- /task:retry-catalyst -->
<details markdown="1"><summary>Hint</summary>
More product by one early time can mean a faster approach to the same endpoint.
</details>
<details markdown="1"><summary>Retry solution</summary>
The catalyst makes the alternative route accessible at lower $E_a$, so equilibrium is approached faster and the 30 s sample can contain more product. Both directions are catalysed; the fixed-temperature equilibrium composition is unchanged. Draw one curve and a lower catalytic threshold with a larger right-tail area; keep the enthalpy endpoints and $\Delta H$ unchanged.
</details>
</div>

<h2 id="sources">Scope and next use</h2>

OxfordAQA 9620 [specification 5.3](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf), pp.18–19, 3.1.6.1–5. Lister and Renshaw (2016), pp.105–113. Textbook examples supplement the current AS scope; old margin numbering does not set this lesson's specification mapping. Data/diagrams here are constructed and no official marks are assigned. Experimental comparisons are preparation, not evidence of completed RP8 (an A2 practical). Continue to [equilibrium](/alevel/as-chemistry/equilibrium/) and return to the report task later with help closed.
