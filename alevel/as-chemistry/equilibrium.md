---
title: Equilibrium and Kc
layout: subjects
mathjax: true
grade: as
subject: as-chemistry
permalink: /alevel/as-chemistry/equilibrium/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">How can reactions continue while a mixture stops changing?</h2>

A constant colour or concentration does not necessarily mean all reaction has stopped. In a reversible reaction, two opposing changes can continue at equal rates. This lesson connects that particle account to predictions, equilibrium calculations and industrial decisions.

You need [moles and balanced ratios](/alevel/as-chemistry/amount-and-equations/), [concentration](/alevel/as-chemistry/solutions-and-titration/), [rate and catalysts](/alevel/as-chemistry/kinetics/) and [enthalpy signs](/alevel/as-chemistry/energetics-and-calorimetry/). AS 3.1.7.1–2 includes **homogeneous $K_c$**; it is not postponed to A2. Here all species in each calculation are in the same phase. All tasks, data and diagrams are **self-written / constructed**. Stated equilibrium constants and rounded energy values are exercise inputs, not new measurements.

<h2 id="dynamic-model">Equal rates do not mean equal concentrations</h2>

The reversible arrow $\rightleftharpoons$ says the reverse change is possible. In a closed system at fixed conditions, starting mainly with reactants usually gives an initially large forward rate and a small reverse rate. Products accumulate, allowing the reverse process to become significant. At **dynamic equilibrium**, forward and reverse reaction rates are equal and nonzero, and the concentrations remain constant because there is no net change.

The equilibrium concentrations need not be equal. A mixture may contain much more product than reactant while equal amounts of reaction occur in each direction per unit time. The system must retain the relevant reacting substances; a sealed vessel is often needed for gases. “Closed” does not mean thermally isolated: temperature can be controlled through heat transfer without allowing matter to escape.

![Constructed schematic: a forward rate decreases and a reverse rate increases to the same positive level. Both continue at equilibrium; time and rate axes and line identities are labelled.](/assets/img/chemistry-as-equilibrium-rates.svg)

A flat concentration record alone is not proof of equilibrium: the reaction might have become extremely slow or a reactant exhausted. Interpret it with evidence that the reaction is reversible, conditions are steady and both processes continue.

<div class="lesson-check" markdown="1">
<h3 id="dynamic-check">Interpret a stable mixture</h3>
<!-- task:dynamic-check -->
A closed reversible gas system H2(g) + I2(g) ⇌ 2HI(g) is kept at constant temperature and volume. Its concentrations remain at [H2] = 0.20, [I2] = 0.10 and [HI] = 0.60 mol dm−3. A separate tracer observation shows conversion in both directions at equal reaction rates. Explain why the state is dynamic equilibrium, sketch the forward/reverse rate behaviour if initially only H2 and I2 were present, and correct the claims “the concentrations must be equal” and “a flat concentration trace alone proves equilibrium”.
<!-- /task:dynamic-check -->
<details markdown="1"><summary>Hint</summary>
Use the tracer evidence as well as the flat trace. Distinguish zero net change from zero microscopic change.
</details>
<details markdown="1"><summary>Solution and check</summary>
Both directions continue at equal nonzero rates, explaining constant but unequal concentrations. Sketch forward rate initially positive and reverse initially zero, then approaching the same positive level. The concentration values are allowed to differ: rate equality is the condition. A flat trace alone could instead indicate a stalled reaction, so it is the added reversibility/dynamic evidence under controlled closed conditions that supports the conclusion. If you drew both rates ending at zero, revisit [dynamic equilibrium](#dynamic-model), then [check equal concentrations](#retry-dynamic).
</details>
</div>

<h2 id="disturbances">Separate an imposed change from the response</h2>

**Le Chatelier's principle:** when conditions of a system at equilibrium change, the equilibrium position shifts in the direction that tends to oppose the change. It predicts a direction, not the exact new amounts or a complete cancellation of the disturbance. State the reaction and fixed conditions before applying it.

- Adding a reactant at fixed temperature and volume raises its concentration immediately; net forward change then consumes some of it. Its final concentration need not return to the old value. Removing a product tends to favour further product formation.
- Compressing a gas mixture at constant temperature raises all gas concentrations immediately. The subsequent shift favours the side with **fewer total gas moles per written reaction**. Equal gas totals mean no composition shift from this uniform compression in the idealised model. Pressure is relevant here because the reacting-gas concentrations change, not simply because a pressure gauge reads higher.
- Increasing temperature favours the **endothermic** direction; decreasing it favours the exothermic direction. Find the forward sign of $\Delta H$ first.
- A catalyst speeds both directions and the approach to equilibrium, without changing its position at fixed temperature.

For example, $\ce{N2(g) + 3H2(g) <=> 2NH3(g)}$ is exothermic forwards. Isothermal compression favours ammonia because four gas moles become two. Heating favours the reverse, endothermic direction. These are equilibrium-yield predictions; heating can nevertheless make the forward reaction faster.

<div class="lesson-check" markdown="1">
<h3 id="conditions-check">Evaluate four interventions</h3>
<!-- task:conditions-check -->
For N2(g) + 3H2(g) ⇌ 2NH3(g), take the forward ΔH as −92 kJ per mole of reaction as written. Starting from equilibrium, predict and justify the direction of net change after each separate intervention: increase temperature; compress at unchanged temperature; add H2 at fixed temperature and volume; add an active catalyst at unchanged temperature. Distinguish the immediate imposed concentration change from the subsequent reaction response where appropriate, and distinguish equilibrium yield from speed.
<!-- /task:conditions-check -->
<details markdown="1"><summary>Hint</summary>
Count gas coefficients and identify which direction absorbs heat; a catalyst is not a temperature change.
</details>
<details markdown="1"><summary>Solution and check</summary>
Heating shifts left towards heat absorption, reducing equilibrium ammonia yield even though reaction rates generally increase. Isothermal compression initially raises every gas concentration, then shifts right to fewer gas moles. Adding H2 immediately increases its concentration, then net forward change consumes some and forms ammonia; this need not restore the original H2 concentration. Catalyst alone gives no shift but faster return after a disturbance. If you treated every faster process as a higher equilibrium yield, revisit [the interventions](#disturbances), then [change gas stoichiometry](#retry-conditions).
</details>
</div>

<h2 id="kc-model">Write a ratio of equilibrium concentrations</h2>

For a homogeneous reaction $\ce{aA + bB <=> cC + dD}$ at a stated temperature:

$$K_c=\frac{[\mathrm C]^c[\mathrm D]^d}{[\mathrm A]^a[\mathrm B]^b}$$

Square brackets mean **equilibrium concentration in $\mathrm{mol\,dm^{-3}}$**. Coefficients become powers, not factors in front of concentrations. The same temperature and written equation give the same $K_c$ for equilibrium mixtures, even with different starting amounts.

In this course's concentration convention, derive units by substituting concentration units into the expression. For $\ce{N2O4(g) <=> 2NO2(g)}$, $K_c=[\ce{NO2}]^2/[\ce{N2O4}]$ has units $\mathrm{mol\,dm^{-3}}$. For $\ce{H2(g) + I2(g) <=> 2HI(g)}$, concentration units cancel. Reversing a reaction inverts its expression and value; changing the written stoichiometry changes the corresponding constant. Compare like equations at like temperatures.

Use each gas concentration $n/V$; do not put bare moles into the ratio unless you have explicitly shown the volume factors cancel. All calculations here are homogeneous gas systems; no rule for omitting a heterogeneous solid is needed.

<div class="worked-example" markdown="1">
<h3 id="worked-kc">Worked example: amount is not concentration</h3>
Constructed equilibrium mixture at a fixed temperature, all gaseous: 0.160 mol N2O4 and 0.0800 mol NO2 in 2.00 dm³. For $\ce{N2O4(g) <=> 2NO2(g)}$, concentrations are $0.160/2.00=0.0800$ and $0.0800/2.00=0.0400$ $\mathrm{mol\,dm^{-3}}$.

$$K_c=\frac{(0.0400)^2}{0.0800}=\mathbf{0.0200\,mol\,dm^{-3}}$$

Bare moles would give 0.0400, with the volume factor missing. This ratio is an equilibrium constant because the data describe equilibrium at one temperature, not because any concentration ratio is always constant.
</div>

<div class="lesson-check" markdown="1">
<h3 id="kc-check">Build an expression from a different equation</h3>
<!-- task:kc-check -->
A constructed equilibrium mixture for 2SO2(g) + O2(g) ⇌ 2SO3(g) contains 0.400 mol SO2, 0.200 mol O2 and 0.800 mol SO3 in 2.00 dm3 at a fixed temperature. Write Kc, calculate its value with units, and diagnose a report that puts the mole amounts directly into the expression and obtains 20.0. State what composition data must refer to for the value to be an equilibrium constant.
<!-- /task:kc-check -->
<details markdown="1"><summary>Hint</summary>
Show the powers and each n/V before cancelling units.
</details>
<details markdown="1"><summary>Solution and check</summary>
$K_c=[\ce{SO3}]^2/([\ce{SO2}]^2[\ce{O2}])$. The concentrations are 0.200, 0.100 and 0.400 for SO2, O2 and SO3. Hence $K_c=0.400^2/(0.200^2\times0.100)=\mathbf{40.0\,dm^3\,mol^{-1}}$. Net concentration power is −1, so a volume factor survives; bare moles give the wrong 20.0. Data must describe an equilibrium mixture at the stated temperature. If you lost the power or volume, revisit [the expression](#kc-model), then [reverse an unequal-mole reaction](#retry-kc).
</details>
</div>

<h2 id="amount-table">Calculate the equilibrium amounts before dividing by volume</h2>

When only initial amounts are given, the balanced equation links changes. For $\ce{H2 + I2 <=> 2HI}$, let $x$ mol H2 react forwards: I2 also falls by $x$, but HI rises by $2x$. Set out initial, change and equilibrium amounts before using $K_c$. Any solution must leave every amount nonnegative. A mathematically valid root outside that physical interval is not a possible mixture.

<div class="worked-example" markdown="1">
<h3 id="worked-composition">Worked example: solve for the extent</h3>
Constructed gas exercise at fixed temperature: begin with 1.00 mol H2, 1.00 mol I2 and no HI in a 2.00 dm³ vessel; $K_c=16.0$. Amounts at equilibrium are $(1-x),(1-x),2x$ mol, with $0\le x\le1$. Thus:

$$16.0=\frac{(2x/2.00)^2}{[(1-x)/2.00]^2}=\frac{4x^2}{(1-x)^2}$$

Volume cancels here because the concentration powers balance. The denominator cannot be zero for this finite constant, and both numerator/denominator ratios are nonnegative, so take the positive square root:

$$4=\frac{2x}{1-x},\qquad4(1-x)=2x,\qquad x=\frac23$$

Amounts are $\mathbf{1/3,\ 1/3,\ 4/3\ mol}$ H2, I2 and HI; concentrations are $\mathbf{1/6,\ 1/6,\ 2/3\ mol\,dm^{-3}}$. Substitution gives $(2/3)^2/(1/6)^2=16$, and hydrogen/iodine atom amounts are conserved. The two-mole coefficient is essential.
</div>

<div class="lesson-check" markdown="1">
<h3 id="composition-check">Start with product already present</h3>
<!-- task:composition-check -->
Constructed gas exercise at a fixed temperature: a 1.00 dm3 vessel initially contains 0.500 mol H2, 0.500 mol I2 and 0.500 mol HI. For H2(g) + I2(g) ⇌ 2HI(g), Kc = 4.00. Set up an amount table, find the equilibrium amounts and concentrations, and state the physical interval for a forward-change variable x. Explain why writing the final HI amount as 2x would be wrong and verify your result in Kc.
<!-- /task:composition-check -->
<details markdown="1"><summary>Hint</summary>
Retain the initial product, and allow the sign of net change to be decided by the data.
</details>
<details markdown="1"><summary>Solution and check</summary>
With $x$ mol forward change, amounts are $0.500-x,\ 0.500-x,\ 0.500+2x$. Nonnegativity gives $-0.250\le x\le0.500$, excluding endpoints that make the finite equilibrium expression impossible. Since the concentrations are numerically the amounts in 1.00 dm³:
$$4=\frac{(0.500+2x)^2}{(0.500-x)^2},\quad2=\frac{0.500+2x}{0.500-x}$$
$$1.000-2x=0.500+2x,\quad x=0.125.$$
Equilibrium H2 and I2 are **0.375 mol each**, HI **0.750 mol**, with the same numerical concentrations in $\mathrm{mol\,dm^{-3}}$. Check $0.750^2/0.375^2=4$. Writing $2x$ would discard the initial HI. If the amount table failed, revisit [the extent](#amount-table), then [solve a dissociation](#retry-composition).
</details>
</div>

<h2 id="kc-and-conditions">Composition can change while the constant does not</h2>

For a fixed written reaction, **temperature changes $K_c$**. If the forward reaction is endothermic, heating favours products and raises $K_c$; if exothermic, heating lowers it. Concentration changes, isothermal compression and catalysts do not change $K_c$ at that temperature.

Immediately after adding or compressing, inserting the new concentrations into the same expression may give a ratio different from $K_c$. That instant is not a new equilibrium. Net reaction proceeds until the equilibrium ratio is restored. This separates “the mixture changed” from “the equilibrium constant changed”. A catalyst changes how quickly the ratio is restored, not which ratio is required.

<h2 id="industry">Choose a compromise rather than maximising one number</h2>

For an exothermic synthesis such as ammonia formation, lower temperature favours equilibrium conversion but can make production too slow. Higher pressure favours the fewer-gas-mole product side and often accelerates encounters, but compression consumes energy and requires costlier, pressure-resistant equipment. A catalyst can make a lower-temperature operating choice practical without moving the equilibrium at that temperature.

A process decision therefore considers **useful product per time, equilibrium conversion, separation/recycling, energy and equipment limits**. Cooling and separating product between reactor passes can help recovery and reuse unreacted feed; it is not a catalyst changing $K_c$. Qualitative chemistry alone cannot certify one exact economically optimal operating temperature or pressure. Compare measured rates/yields and costs within a safe design envelope.

<div class="lesson-check" markdown="1">
<h3 id="industrial-check">Defend a production choice</h3>
<!-- task:industrial-check -->
A proposed ammonia process uses the reversible exothermic reaction N2(g) + 3H2(g) ⇌ 2NH3(g). The plant must achieve a useful production rate and has a fixed maximum permitted pressure; increasing compression has rising energy/equipment costs. An engineer proposes the lowest possible temperature and unlimited pressure to maximise output, while another claims that a catalyst increases Kc. Evaluate both proposals and outline a defensible compromise, including what additional evidence is needed to choose actual settings and how product separation/recycling can help.
<!-- /task:industrial-check -->
<details markdown="1"><summary>Hint</summary>
Equilibrium conversion and useful product per time are not identical; distinguish temperature, pressure and catalyst effects.
</details>
<details markdown="1"><summary>Solution and check</summary>
Low temperature favours the exothermic equilibrium but may give inadequate rate, while unlimited pressure violates the design limit and ignores escalating costs. Choose a temperature balancing rate and conversion, and pressure within the approved envelope balancing conversion/throughput benefits against cost; use an active catalyst to improve rate, not $K_c$. Measure or obtain rate, equilibrium-yield, energy, separation/recycle and equipment-cost data before claiming actual optimum settings. Separate ammonia and recycle unreacted gases so low single-pass conversion does not mean all feed is discarded. Heating lowers this reaction's $K_c$; catalyst and isothermal pressure change do not change it. If your answer only said “high pressure and low temperature”, return to [the trade-offs](#industry), then [change the reaction sign](#retry-industry).
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="report-check">Check a compressed equilibrium report</h3>
<!-- task:report-check -->
Constructed closed gas equilibrium at a fixed temperature: N2O4(g) ⇌ 2NO2(g), initially [N2O4] = 0.100 and [NO2] = 0.200 mol dm−3. The volume is suddenly halved and temperature restored before appreciable reaction. Calculate the original Kc and the immediate concentration ratio after compression, then predict the net reaction direction and whether Kc changes. A report says “a shift to the left proves the final NO2 concentration is below its original 0.200”. Evaluate that claim by distinguishing amount, concentration and the immediate compressed state; show how to check it quantitatively.
<!-- /task:report-check -->
<details markdown="1"><summary>Hint</summary>
Compare the ratio with the unchanged equilibrium requirement. Compression itself changes concentration before reaction changes moles.
</details>
<details markdown="1"><summary>Solution and check</summary>
Original $K_c=0.200^2/0.100=\mathbf{0.400\,mol\,dm^{-3}}$. Immediately the concentrations are 0.200 N2O4 and 0.400 NO2, so the ratio is $0.400^2/0.200=\mathbf{0.800\,mol\,dm^{-3}}$. Net dimerisation consumes NO2 and shifts left until the ratio returns to 0.400; $K_c$ itself is unchanged.

The left shift reduces NO2 relative to its **immediate compressed value**, not necessarily relative to its pre-compression concentration. To check, let $y$ be the concentration of N2O4 formed after compression, at fixed final volume. New concentrations are $0.200+y$ and $0.400-2y$, with $0\le y\le0.200$:
$$\frac{(0.400-2y)^2}{0.200+y}=0.400,\qquad4y^2-2.00y+0.0800=0.$$
The roots are about 0.0438 and 0.456; reject 0.456 because NO2 would be negative. The final NO2 concentration is about **0.312 $\mathrm{mol\,dm^{-3}}$**, above 0.200 but below 0.400. The report confuses a reaction's direction with the total effect of the imposed volume change. Retry [an altered gas balance](#retry-conditions) if you compared the wrong states; revisit this report later with all help closed.
</details>
</div>

<h2 id="retry">Change the condition and try again</h2>

Choose a retry that matches the error, close the earlier solution and produce new reasoning before opening its answer.

<div class="lesson-check" markdown="1">
<h3 id="retry-dynamic">Equal concentrations, unequal rates</h3>
<!-- task:retry-dynamic -->
A closed reversible system has equal reactant and product concentrations at one instant, but measured forward and reverse reaction rates are 0.030 and 0.010 mol dm−3 s−1 respectively. Is it at equilibrium? Explain the net change, state what must hold at dynamic equilibrium and identify why concentration equality is not the deciding evidence.
<!-- /task:retry-dynamic -->
<details markdown="1"><summary>Hint</summary>
Compare the two rates; equal quantities do not require equal turnover.
</details>
<details markdown="1"><summary>Retry solution</summary>
It is not at equilibrium: net forward change remains, with a rate difference of 0.020 $\mathrm{mol\,dm^{-3}\,s^{-1}}$ on the stated reaction-rate basis. Dynamic equilibrium requires equal nonzero forward/reverse rates under steady closed conditions, giving constant concentrations; the concentrations themselves need not be equal.
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-conditions">Change the gas-mole balance and the heat direction</h3>
<!-- task:retry-conditions -->
For a hypothetical homogeneous gas reaction A(g) + B(g) ⇌ 2C(g), use a stated positive forward ΔH. Predict the equilibrium response and Kc change when I: the mixture is compressed isothermally; II: temperature is increased; III: an inert gas is added at fixed volume and temperature; IV: a catalyst is added at fixed temperature. Explain why a higher total pressure in III is not the same intervention as I.
<!-- /task:retry-conditions -->
<details markdown="1"><summary>Hint</summary>
Separate gas coefficient totals, reaction heat sign and the concentrations that actually change.
</details>
<details markdown="1"><summary>Retry solution</summary>
I: two gas moles on each side, so no equilibrium composition shift in the idealised uniform compression; $K_c$ unchanged. II: forward endothermic direction is favoured and $K_c$ increases. III: reacting-gas concentrations remain unchanged at fixed volume/temperature, so no shift or $K_c$ change; I instead raises all their concentrations. IV: faster equilibration, unchanged equilibrium position and $K_c$.
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-kc">Reverse the concentration expression</h3>
<!-- task:retry-kc -->
A constructed equilibrium for N2O4(g) ⇌ 2NO2(g) has 0.200 mol N2O4 and 0.100 mol NO2 in 2.00 dm3 at fixed temperature. Calculate Kc for the forward equation and for 2NO2(g) ⇌ N2O4(g), giving units. Explain whether the volume cancels and why the two numerical constants differ without any change of mixture.
<!-- /task:retry-kc -->
<details markdown="1"><summary>Hint</summary>
Form both expressions using the same concentrations; reversing inverts the ratio.
</details>
<details markdown="1"><summary>Retry solution</summary>
Concentrations are 0.100 and 0.0500 $\mathrm{mol\,dm^{-3}}$. Forward $K_c=0.0500^2/0.100=\mathbf{0.0250\,mol\,dm^{-3}}$; reverse is its reciprocal, $\mathbf{40.0\,dm^3\,mol^{-1}}$. The concentration powers do not balance, so volume does not cancel. Constants correspond to written reactions, not to a number attached to a mixture independently of the equation.
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-composition">Solve a dissociation and reject a root</h3>
<!-- task:retry-composition -->
Constructed fixed-temperature exercise: initially 0.150 mol N2O4 and no NO2 occupy 1.00 dm3. For N2O4(g) ⇌ 2NO2(g), Kc = 0.0500 mol dm−3. Find the equilibrium amounts using x mol dissociated, show the quadratic equation and reject any physically impossible root. Verify the remaining root in Kc.
<!-- /task:retry-composition -->
<details markdown="1"><summary>Hint</summary>
One mole dissociated forms two moles NO2, and x cannot be negative in this starting mixture.
</details>
<details markdown="1"><summary>Retry solution</summary>
Amounts are $0.150-x$ and $2x$ mol, with $0\le x\le0.150$. In 1.00 dm³:
$$0.0500=\frac{4x^2}{0.150-x},\qquad4x^2+0.0500x-0.00750=0.$$
$$x=\frac{-0.0500\pm\sqrt{0.0500^2+4(4)(0.00750)}}{8}=\frac{-0.0500\pm0.350}{8}.$$
Roots are **0.0375** and **−0.0500** mol. Reject the negative root, which would require negative NO2. Equilibrium N2O4 is **0.1125 mol**, NO2 **0.0750 mol**. Check $0.0750^2/0.1125=0.0500$.
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-industry">Change the heat sign and the constraint</h3>
<!-- task:retry-industry -->
A proposed homogeneous gas synthesis is A(g) + B(g) ⇌ C(g), with a constructed positive forward ΔH. A pressure limit is already reached, and higher temperature increases both equilibrium conversion and reaction speed but incurs extra energy cost and material limits. Explain why the exothermic-process advice “use lower temperature for yield” cannot be copied, predict temperature and catalyst effects on Kc, and describe the evidence needed for an operating decision.
<!-- /task:retry-industry -->
<details markdown="1"><summary>Hint</summary>
Re-read the sign instead of memorising one industrial recipe.
</details>
<details markdown="1"><summary>Retry solution</summary>
For this endothermic forward reaction, heating favours C and increases $K_c$; lower temperature does not improve equilibrium yield. Catalyst improves speed without changing $K_c$. Pressure cannot be raised beyond the design limit, even though fewer gas moles favour product under compression. Select temperature using measured rate/yield, energy cost and material limits; qualitative trends alone do not identify an exact optimum.
</details>
</div>

<h2 id="sources">Scope and later retrieval</h2>

OxfordAQA 9620 [specification 5.3](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf), pp.19–20, 3.1.7.1–2. Lister and Renshaw (2016), consulted pp.115–120 and 122–128. The source's older marginal numbering does not change the current AS boundary. This page teaches homogeneous concentration Kc, not A2 Kp, acid dissociation or entropy. No invented official marks or actual-plant optima are assigned. Revisit report-check after another topic with help closed; compare your first explanation, error and retry. [AS chemistry entrance](/alevel/as-chemistry/).
