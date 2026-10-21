---
title: Thermal Physics
layout: subjects
mathjax: true
grade: a2
subject: a2-physics
permalink: /alevel/a2-physics/thermal-physics/
toc_headings: h2, h3, h4
study_page: true
---

[A2 Physics](/alevel/a2-physics/) · PH04 · Chapter 1 · 3.11 Thermal Physics

Explain changes in internal energy, calculate energy transfers by heating and conduction, and connect gas laws with molecular motion.

- **Learn:** start with [choosing a model](#method), then study [internal energy](#internal-energy), [specific heat and latent heat](#specific-heat-and-latent-heat), [conduction](#conduction), [gas laws](#ideal-gases) and [kinetic theory](#kinetic-theory).
- **Homework help:** compare the worked examples for [energy signs](#example-first-law), [flow and heat loss](#example-continuous-flow), [conduction](#example-conduction), [gas laws](#example-gas-law) or [piston work](#example-gas-work). State the system and fixed quantities first.
- **Revise:** attempt the [practice](#practice) with hints and solutions closed; use [common errors](#common-errors) to find what to revisit.

**Before you start:** review energy conservation, power and SI units in [AS Physics](/alevel/as-physics/). Use kelvin for temperature ratios and absolute pressure. Convert mass, volume and time to SI units, and retain extra figures during calculations.

This chapter covers Sections 3.11.1–3.11.4 and required practicals 8 and 9. Adapted and self-written example and practice sources are identified at the end; no official mark allocations are assigned.

**Analyse records:** [RP8 heating](#data-specific-heat) · [RP9 Boyle](#data-boyle) · [RP9 Charles](#data-charles). These activities use constructed data and do not replace carrying out the practicals.

**Work in four stages:** [1. Energy, calorimetry and RP8](#internal-energy) → [2. Steady flow and conduction](#continuous-flow) → [3. Gas state, work and RP9](#ideal-gases) → [4. Molecular explanation](#kinetic-theory). After each stage, try its linked examples and records before the mixed [practice](#practice). Continuous-flow calorimetry remains part of the core route.

## Choose a model before calculating {#method}

**Learning targets:** choose an energy balance from the physical process, state its conditions, calculate with consistent units, and check the result against the process or measurements.

**Try first:** for each situation, name the changing quantity and choose a model without calculating.

1. Ice melts while its temperature stays constant.
2. Liquid enters and leaves a heater steadily.
3. A sealed rigid gas container cools.

<details markdown="1">
<summary>Check the model choices</summary>

1. The state changes: use latent heat, not temperature rise. Constant temperature does not imply constant internal energy.
2. Mass passes through each second: balance powers using mass flow rate, not the entire tank mass.
3. Amount and volume are fixed: pressure changes with absolute temperature. Do not assume constant pressure merely because the container is sealed.

</details>

| Clue in the question | First decision | Model and condition |
| --- | --- | --- |
| Heating and work both occur | Draw the system boundary and assign signs | First law; work on the system is positive |
| Temperature changes or material melts/boils | Split the process into stages | Specific heat for each temperature change; latent heat for each state change |
| A steady stream is heated | Use mass passing per second | Power balance; include heat loss unless negligible |
| Energy crosses a wall | Identify slab geometry and face temperatures | Conduction at steady state; use a supplied overall U-value where appropriate |
| A gas changes state | List which of amount, pressure, volume and temperature are fixed | Ideal-gas equation or a ratio derived with those fixed quantities |
| A piston moves | Find the volume change and direction | Constant-pressure work; then convert work by to work on the gas |
| Molecular motion is given | Distinguish one particle from the whole sample | Molecular pressure or mean translational energy |

Use each worked example as **model → calculation → check**. Cover its solution first and write the equation and condition yourself; then compare your first step, not just your final number.

## Internal Energy, Heating and Work {#internal-energy}

<span id="energy-stored-and-transferred"></span>

**Internal energy** is the total microscopic energy associated with the particles' random motion and their interactions: random kinetic energy plus potential energy. It excludes the body's bulk motion and its gravitational potential energy as a whole. **Temperature** describes thermal state; for an ideal gas it measures average molecular translational kinetic energy. It does not measure total internal energy: a larger sample at the same temperature can have more internal energy.

**Heat** is energy transferred because of a temperature difference, from hotter to colder. A body stores internal energy; it does not “contain heat”. Work is another way of transferring energy, for example compressing a gas or supplying electrical energy to a heater.

The first law is conservation of energy for a system:

$$\Delta U=Q+W$$

Here $Q>0$ means heating **into** the system and $W>0$ means work done **on** the system. Cooling gives negative $Q$; work done by the system gives negative $W$. State your system boundary. If the system includes both an electrical heater and a block, electrical input is work; if it is only the block, energy from the heater enters by heating. Do not count the same input twice.

### Example 1: first-law signs {#example-first-law}

*Adapted from PH04 January 2024 Q1.2.*

A gas expands, doing 350 J of work on its surroundings while receiving 20 J by heating. Find the change in internal energy.

**1. Model and signs.** The gas is the system. Work is done **by** it, so $W=-350\,\mathrm J$ while $Q=+20\,\mathrm J$.

**2. Calculate.** Include both transfers once in the first law.

$$\Delta U=Q+W=20-350=\boxed{-330\,\mathrm J}.$$

**3. Check:** Its internal energy decreases by 330 J, even though it receives energy by heating. The 350 J output is supplied by 20 J of heating and 330 J from the internal energy store.

## Temperature change and change of state {#specific-heat-and-latent-heat}

**Specific heat capacity** $c$ is the energy needed per kilogram per kelvin temperature rise, without a change of state. For constant $c$, with no additional work to include in the energy balance:

$$Q=mc\Delta\theta$$

Its unit is $\mathrm{J\,kg^{-1}\,K^{-1}}$. A temperature difference of $1\,^{\circ}\mathrm C$ equals a difference of $1\,\mathrm K$. During heating, $\Delta\theta>0$; during cooling it is negative.

**Specific latent heat** $l$ is energy per kilogram for a change of state at constant temperature. Melting or boiling absorbs energy; freezing or condensation releases it. The energy magnitude is:

$$Q=ml$$

The unit of $l$ is $\mathrm{J\,kg^{-1}}$. During a pure substance's equilibrium change of state at fixed pressure, temperature and average random kinetic energy stay constant; the particles' potential energy changes. A flat section of a heating curve does **not** mean no energy is being supplied. Heating across several stages requires separate temperature-change and state-change terms, not one temperature-rise calculation.

<img src="/assets/img/physics-thermal-heating.svg" alt="Schematic heating curve: ice warms, melts on a zero-degree Celsius plateau, then water warms. Energy continues to enter on the plateau, increasing particle potential energy. Fixed pressure; not to scale." width="560" height="330" loading="lazy">

**Read the graph:** temperature rises on the sloping sections; energy continues to enter during the melting plateau. The horizontal axis is energy supplied, so its gradient is not a temperature–time rate.

### Checkpoint: ice and water {#checkpoint-state-change}

Ice melts at constant temperature. Does its internal energy remain constant? Explain in terms of particles.

<details markdown="1">
<summary>Check your explanation</summary>

No. Energy absorbed increases the particles' potential energy as the structure changes. Their average random kinetic energy stays constant because the temperature stays constant. Internal energy therefore increases.

</details>

## Required Practical 8: electrical specific heat capacity {#required-practical-8}

**Draw before reading the method — self-written task:** Draw a labelled arrangement for measuring the specific heat capacity of a metal block electrically. Place the ammeter, voltmeter, heater, temperature sensor and insulation. State which measured quantities give electrical energy and which give the block's temperature rise. Identify one energy transfer that the simplest calculation neglects.

<details markdown="1">
<summary>Check your apparatus</summary>

The ammeter is in series; the voltmeter is across the heater. Show close thermal contact between block, heater and sensor, with insulation around the block. Electrical power and elapsed time give input energy; two temperature readings give the rise. Heat reaching the surroundings or apparatus must be considered.

</details>

Measure the mass $m$ of a metal block. Insert an electrical heater and thermometer into close-fitting holes; improve thermal contact with a suitable small amount of contact material and insulate the block. Connect an ammeter in series and a voltmeter **across the heater**. Measure $V$, $I$, elapsed time $t$ and temperature rise $\Delta\theta$. For approximately constant electrical power, negligible losses and negligible apparatus heat capacity:

$$E=VIt,\qquad c\approx\frac{VIt}{m\Delta\theta}$$

Record temperature at regular times and plot temperature against time. Over an approximately linear interval with gradient $s=\Delta\theta/\Delta t$, estimate $c\approx VI/(ms)$. Use a fitted line over several readings rather than a single tiny rise. Check whether $V$ and $I$ remain constant. Record resolution and repeat trials; the fractional uncertainty of a temperature difference depends on **both** endpoint readings.

Energy also warms the heater and thermometer and may escape to the surroundings. If all electrical input is attributed to the block, the calculated $c$ is generally **too high**. Insulation reduces heat loss; good contact and allowing for thermal lag reduce misleading early readings. Repetition alone does not remove these systematic effects. Compare trials over a similar temperature range because heat loss depends on temperature difference from the room.

Use a suitable low-voltage supply, avoid touching hot parts, and switch off before removing the heater. Do not energise an immersion or cartridge heater outside its intended material. A teacher must check the apparatus before practical work.

### Checkpoint: uncertainty and heat loss {#checkpoint-practical}

A thermometer gives readings of 20.0 and 22.0 degrees Celsius, each with an uncertainty of ±0.1 K. Estimate the percentage uncertainty in the temperature rise using addition of absolute uncertainties. Would a larger temperature rise remove heat-loss bias?

<details markdown="1">
<summary>Check the diagnosis</summary>

The rise is $\Delta\theta=2.0\,\mathrm K$. Adding absolute uncertainties gives $\delta(\Delta\theta)=0.2\,\mathrm K$, hence $0.2/2.0\times100\%=10\%$. If the other measurements were exact, this would be the approximate percentage uncertainty contribution to the calculated specific heat capacity.

A larger rise reduces this percentage contribution for the same reading uncertainty. It does not remove heat loss: greater temperature difference from the room may increase the loss. Distinguish measurement uncertainty from systematic energy loss; do not claim that one improvement fixes both.

</details>

### Example 2: using a heating graph {#example-specific-heat}

*Self-written.*

A 0.50 kg block is heated at 12 V and 2.0 A. Its temperature rises steadily at $0.053\,\mathrm{K\,s^{-1}}$. Estimate its specific heat capacity, ignoring losses and apparatus heat capacity.

**1. Model.** The graph gives a temperature-rise rate, not a temperature difference. With negligible losses, electrical power equals the rate of increase of the block's energy: $VI=mcs$.

**2. Calculate.** Rearrange for specific heat capacity.

$$c=\frac{VI}{ms}=\frac{12\times2.0}{0.50\times0.053}.$$

$$\boxed{c=9.1\times10^2\,\mathrm{J\,kg^{-1}\,K^{-1}}}.$$

**3. Check:** Substituting the unrounded value gives back the measured power of $24\,\mathrm W$. This is an estimate under the stated assumptions, not a correction for heat loss. For fixed power and mass, a greater heating gradient means smaller specific heat capacity.

### Data investigation: a heating record {#data-specific-heat}

*Self-written; constructed teaching data, not a completed RP8 experiment.*

A 0.500 kg block starts at room temperature. The heater voltage is 12.0 V and current 2.00 A throughout. Temperature readings have uncertainty ±0.1 K. Treat the mass, power and times as exact for this analysis; their uncertainties would also matter in an actual experiment.

| Time / s | Thermometer reading / °C |
| --- | --- |
| 0 | 20.0 |
| 30 | 20.9 |
| 60 | 22.3 |
| 90 | 23.7 |
| 120 | 25.1 |
| 150 | 26.4 |
| 180 | 27.6 |
| 240 | 29.9 |
| 300 | 31.9 |
| 360 | 33.7 |

1. Plot temperature against time. Choose an interval you can reasonably approximate by a straight line, justify it, and estimate an **apparent** specific heat capacity using the fitted gradient. Show your construction; do not simply join every point.
2. Compare your gradient with a fit over 180–360 s. Can one constant straight line describe the whole record within the reading uncertainty? Explain the early and late behaviour without claiming the material's true specific heat capacity has been measured exactly.
3. Propose one change addressing early readings and one addressing late readings. Explain why a larger number of repeats alone is insufficient. Which further measurements would help separate energy absorbed by the apparatus from energy lost to the room?

<details markdown="1">
<summary>Hint</summary>

Check the changes over successive intervals. The thermometer need not respond instantly, and heat loss can grow as the temperature difference from the room grows. Use $c_{\mathrm{app}}=VI/(ms)$ only with its stated approximation; choosing an interval does not remove all losses.

</details>

<details markdown="1">
<summary>Analysis and retry</summary>

A possible compromise interval is 60–150 s, after the strongest initial lag and before the late curvature is pronounced. It is an approximation, not a uniquely correct selection. Fitting its four readings gives:

$$s\approx0.0457\,\mathrm{K\,s^{-1}}.$$

$$\begin{aligned}
c_{\mathrm{app}}&\approx\frac{24.0}{0.500\times0.0457}\\
&\approx1.05\times10^3\,\mathrm{J\,kg^{-1}\,K^{-1}}.
\end{aligned}$$

The 180–360 s fit gives:

$$s\approx0.0338\,\mathrm{K\,s^{-1}}.$$

$$c_{\mathrm{app}}\approx1.42\times10^3\,\mathrm{J\,kg^{-1}\,K^{-1}}.$$

The gradient first grows as the thermometer responds, then falls. The late change is greater than the ±0.1 K reading uncertainty could explain with one straight line. Increased losses leave less than 24 W warming the block; attributing all input to it gives too large an apparent specific heat capacity. The data do not isolate the block's heat capacity from the heater's, nor uniquely identify every cause of curvature.

Improve thermometer contact and allow for its response; improve insulation to reduce late heat loss. Repeats can reveal scatter but do not correct these biases. Cooling-rate records at comparable temperatures can inform heat-loss estimates, while independently determining the apparatus heat capacity can inform an apparatus correction. State the assumptions of either correction.

**Retry:** for the same block and temperature range, would using a smaller power necessarily improve the estimate? No: longer heating and a larger fractional heat-loss contribution can worsen the bias even if the temperature is easier to follow.

</details>

## Measuring latent heat and correcting background melting {#latent-heat-measurement}

The melting experiment measures a change of state, not the temperature rise measured in RP8. Separate energy supplied by the heater from energy entering from the surroundings.

### Example 3: background melting {#example-latent-heat}

*Adapted from PH04 January 2024 Q3.1.*

Without an electrical heater, 16.0 g of ice melts in 10.0 min. With a 32 W heater operating, 41.6 g melts in 5.0 min. Assume the background melting rate is unchanged. Determine the specific latent heat of fusion.

**1. Model and correct the measurement.** The ice is already melting, so use latent heat. Put both masses on the **same time interval**. In 5.0 min, the surroundings alone would melt $8.0\,\mathrm g$. The heater's additional melted mass is $41.6-8.0=33.6\,\mathrm g=0.0336\,\mathrm{kg}$.

**2. Calculate.** Only this additional mass is attributed to electrical energy.

$$l=\frac{Pt}{\Delta m}=\frac{32\times300}{0.0336}.$$

$$\boxed{l=2.86\times10^5\,\mathrm{J\,kg^{-1}}}.$$

**3. Check:** Without the background subtraction, using all the melted mass would make $l$ **too low**. This differs from the block experiment's heat-loss error. The subtraction assumes ice is already at its melting point, collection is reliable, and the surroundings supply the same power in both runs.

## Continuous flow {#continuous-flow}

A steady stream passes through an electrical heater. Let $\dot m=\Delta m/\Delta t$ be mass flow rate. If inlet and outlet temperatures are steady, the energy stored in the apparatus is not changing. Neglecting other energy changes, electrical power balances heating of the stream and heat lost:

$$P=\dot m c(\theta_{\mathrm{out}}-\theta_{\mathrm{in}})+P_{\mathrm{loss}}$$

Do not use total tank mass when the problem gives mass passing per second. If heat loss is negligible, $c=P/(\dot m\Delta\theta)$. With two steady runs at the **same inlet and outlet temperatures**, approximately equal heat losses can be eliminated:

$$P_2-P_1=(\dot m_2-\dot m_1)c\Delta\theta$$

Changing the temperature range may change heat loss and invalidate this cancellation.

### Example 4: eliminate steady heat loss {#example-continuous-flow}

*Self-written.*

A liquid flows through an electrical heater. In two steady runs, the inlet and outlet temperatures remain at 20.0 and 35.0 degrees Celsius. Power is 80.0 W at a mass flow rate of $1.00\times10^{-3}\,\mathrm{kg\,s^{-1}}$, and 140 W at $2.00\times10^{-3}\,\mathrm{kg\,s^{-1}}$. Assume equal heat-loss powers. Determine the specific heat capacity and heat-loss power.

**1. Model.** Write a power balance for each run. The same inlet and outlet temperatures support the equal-loss assumption; equal temperature rises alone would not guarantee equal losses to the room.

$$80.0=(1.00\times10^{-3})c(15.0)+P_{\mathrm{loss}}$$

$$140=(2.00\times10^{-3})c(15.0)+P_{\mathrm{loss}}$$

**2. Eliminate and calculate.** Subtract the first balance from the second, then substitute back into either run.

$$\begin{aligned}
c&=\frac{140-80.0}{(2.00-1.00)\times10^{-3}\times15.0}\\
&=\boxed{4.00\times10^3\,\mathrm{J\,kg^{-1}\,K^{-1}}}.
\end{aligned}$$

$$P_{\mathrm{loss}}=80.0-(1.00\times10^{-3})(4000)(15.0)=\boxed{20.0\,\mathrm W}.$$

**3. Check.** In the second run the liquid absorbs $120\,\mathrm W$ and the surroundings receive $20.0\,\mathrm W$, accounting for the full $140\,\mathrm W$. Try [Question 3](#question-3) without copying these numbers.

## Conduction and U-values {#conduction}

Conduction transfers energy through particle interactions, without bulk movement of the material. Vibrations transfer energy in a solid; mobile electrons also transfer energy in a metal. At steady state, the temperature at each position stays constant even though energy continues to flow.

For a uniform plane slab of thickness $L$, cross-sectional area $A$ and face temperature difference $\Delta\theta$, the rate of energy transfer **magnitude** is:

$$P=\frac{Q}{t}=\frac{kA\Delta\theta}{L}=U_{\mathrm{value}}A\Delta\theta$$

$$U_{\mathrm{value}}=\frac{k}{L}$$

Thermal conductivity $k$ has unit $\mathrm{W\,m^{-1}\,K^{-1}}$. The U-value has unit $\mathrm{W\,m^{-2}\,K^{-1}}$. A lower U-value means less energy transfer per second for the same area and temperature difference. In this chapter, use parallel plane faces; $U=k/L$ applies to a **single uniform slab**, not automatically to a composite wall or a curved vessel. Use a supplied overall U-value when one is given.

Distinguish the U-value from internal energy $U$. Also distinguish conductivity $k$ from the Boltzmann constant $k_{\mathrm B}$ used below. Power is in watts; energy lost over a time interval is $E=Pt$ if power is constant. Convert millimetres to metres before using the slab equation.

### Example 5: conduction through a vessel base {#example-conduction}

*Adapted from PH04 January 2024 Q3.2.*

Model a flat base as a uniform slab with $k=0.12\,\mathrm{W\,m^{-1}\,K^{-1}}$, area $1.75\times10^{-2}\,\mathrm{m^2}$, thickness 1.7 mm and face temperature difference 5.5 K. Calculate conduction power and the ratio of a 32 W heater power to this power.

**1. Model and units.** Use steady conduction through one uniform slab; the supplied temperature difference is between its faces.

$$L=1.7\times10^{-3}\,\mathrm m.$$

**2. Calculate power and compare.**

$$P=\frac{kA\Delta\theta}{L}=\frac{0.12\times1.75\times10^{-2}\times5.5}{1.7\times10^{-3}}.$$

$$\boxed{P=6.8\,\mathrm W},\qquad \boxed{\frac{32}{P}=4.7}.$$

**3. Check:** Use the unrounded power in the ratio. From Example 3, the ratio of heater-induced melting to background melting is $33.6/8.0=4.2$. The difference suggests the base-only model does not account for all background transfer; other paths, such as the sides and exposed surface, may contribute. A model discrepancy is a reason to examine assumptions, not to force the measurements to agree.

## Empirical Gas Laws and Absolute Temperature {#ideal-gases}

<span id="gas-laws"></span>

Gas laws are **empirical** relationships established by measurement. Each requires a fixed amount of gas and specified conditions. Absolute temperature is $T/\mathrm K=\theta/^{\circ}\mathrm C+273.15$. For gas-law ratios, use kelvin, not Celsius. Absolute zero is $0\,\mathrm K=-273.15\,^{\circ}\mathrm C$, the zero-temperature limit of the ideal-gas model; real gases usually condense before the extrapolated zero-volume point.

| Fixed condition | Relationship | Useful graph |
| --- | --- | --- |
| Temperature, fixed amount (Boyle) | $pV=\text{constant}$ | $p$ against $1/V$: straight line through origin |
| Pressure, fixed amount (Charles) | $V/T=\text{constant}$ | $V$ against $T$ in K: straight line through origin |
| Volume, fixed amount | $p/T=\text{constant}$ | $p$ against $T$ in K: straight line through origin |

Pressure means **absolute pressure**, measured from vacuum. If a gauge measures pressure above the atmosphere, add atmospheric pressure. Keep the amount of gas fixed: these ratio laws do not apply to an open leaking container.

## Moles, molecules and the gas equation {#gas-equation}

$$pV=nRT=Nk_{\mathrm B}T,\qquad N=nN_{\mathrm A},\qquad R=N_{\mathrm A}k_{\mathrm B}$$

Use $p$ in Pa, $V$ in $\mathrm{m^3}$, $T$ in K and $n$ in mol. The molecule count $N$ is a number, not a mass. With molar mass $M$ in $\mathrm{kg\,mol^{-1}}$, sample mass $m_{\mathrm{gas}}$ and single-molecule mass $m_0$:

$$n=\frac{m_{\mathrm{gas}}}{M},\qquad m_0=\frac{M}{N_{\mathrm A}},\qquad m_{\mathrm{gas}}=Nm_0$$

Useful constants are $R=8.31\,\mathrm{J\,mol^{-1}\,K^{-1}}$, $k_{\mathrm B}=1.38\times10^{-23}\,\mathrm{J\,K^{-1}}$ and $N_{\mathrm A}=6.02\times10^{23}\,\mathrm{mol^{-1}}$; use the values supplied in an examination. Remember $1\,\mathrm{cm^3}=10^{-6}\,\mathrm{m^3}$ and $1\,\mathrm{kPa}=10^3\,\mathrm{Pa}$.

### Example 6: pressure after cooling {#example-gas-law}

*Self-written.*

A sealed rigid container holds gas at 120 kPa and $27\,^{\circ}\mathrm C$. Find its pressure at $7\,^{\circ}\mathrm C$, assuming ideal-gas behaviour.

**1. Model and fixed quantities.** Sealed fixes the amount; rigid fixes volume. In the ideal-gas equation, $nR/V$ is therefore constant, giving $p/T=\text{constant}$.

**2. Convert temperature and calculate.** Use $T_1=300.15\,\mathrm K$ and $T_2=280.15\,\mathrm K$:

$$p_2=p_1\frac{T_2}{T_1}=120\times\frac{280.15}{300.15}=\boxed{112\,\mathrm{kPa}}.$$

**3. Check:** Cooling at fixed amount and volume must lower pressure, consistent with 112 kPa being below 120 kPa. Using $7/27$ would be invalid: Celsius temperatures do not give the correct ratio.

## Work done by an expanding gas {#gas-work}

For a piston of area $A$ moving a distance $\Delta x$, $\Delta V=A\Delta x$. Against constant external pressure $p_{\mathrm{ext}}$, force is $p_{\mathrm{ext}}A$, so:

$$W_{\mathrm{by}}=p_{\mathrm{ext}}\Delta V,\qquad W_{\mathrm{on}}=-p_{\mathrm{ext}}\Delta V$$

An expansion has positive $\Delta V$: the gas does positive work **by** it, and work **on** it is negative. Use $W_{\mathrm{on}}$ in $\Delta U=Q+W$. For a slow, mechanically balanced process, gas pressure is approximately the external pressure; the area under a $p$–$V$ curve gives work by the gas. A single rectangle $p\Delta V$ is valid only when that pressure is constant.

<img src="/assets/img/physics-thermal-pv.svg" alt="Constant-pressure expansion at 100 kPa from 0.002 to 0.005 cubic metres. The shaded area is 300 J of work by the gas, so work on it is minus 300 J." width="560" height="330" loading="lazy">

**Read the graph:** expansion follows the arrow to the right. The area gives the magnitude of work by the gas; convert to the sign of work on it before using the first law. These values are used in [Question 6](#question-6).

### Example 7: compression and energy conservation {#example-gas-work}

*Self-written.*

A gas is compressed slowly under a constant external pressure of 150 kPa, from $4.0\times10^{-3}\,\mathrm{m^3}$ to $2.0\times10^{-3}\,\mathrm{m^3}$. During compression it releases 750 J by heating. Calculate the work done on the gas and its change in internal energy.

**1. Model and signs.** The gas is the system. Compression gives negative volume change and positive work on the gas; energy leaving by heating gives $Q=-750\,\mathrm J$.

$$\Delta V=V_{\mathrm f}-V_{\mathrm i}=-2.0\times10^{-3}\,\mathrm{m^3}.$$

**2. Calculate work, then use the first law.**

$$W_{\mathrm{on}}=-p_{\mathrm{ext}}\Delta V.$$

$$W_{\mathrm{on}}=-(150\times10^3)(-2.0\times10^{-3})=\boxed{+300\,\mathrm J}.$$

$$\Delta U=Q+W=-750+300=\boxed{-450\,\mathrm J}.$$

**3. Check.** The 750 J transferred out is supplied by 300 J of work input and a 450 J decrease in internal energy. Compression does not always raise temperature: energy can leave during the process. Compare with expansion in [Question 6](#question-6), where the work sign reverses.

## Required Practical 9: Boyle and Charles {#required-practical-9}

**Draw before reading the method — self-written task:** Sketch separate arrangements for testing Boyle's law and Charles's law with a fixed gas sample. Mark the sample boundary, measured quantities and the quantity held constant in each. Show where connecting-tube volume must be included and where a boundary must move. Explain why sealing the sample does not always mean fixing its volume.

<details markdown="1">
<summary>Check your apparatus</summary>

For Boyle, show a sealed gas volume connected to an absolute-pressure sensor and a slow adjustable boundary; count the tube volume and wait at each setting for thermal equilibration. For Charles, show a freely moving marker or piston and a stirred temperature bath; the fixed sample can expand at approximately constant external pressure. Sealed fixes the amount of gas, not necessarily its volume.

</details>

**Boyle's law:** trap a fixed gas sample in a suitable syringe or pressure–volume apparatus. Measure several volumes and corresponding **absolute** pressures at constant temperature. Change volume slowly, allow temperature to settle after each change, and check for leaks. Plot $p$ against $1/V$; an approximately straight line through the origin supports constant $pV$. Include any known connecting-tube volume. Rapid compression heats the gas, so an immediate reading need not represent an isothermal result.

**Charles's law:** trap a fixed gas sample with a freely moving boundary, for example an air column bounded by a liquid marker, so pressure stays approximately atmospheric. Use a stirred water bath to vary temperature. Wait for thermal equilibrium before measuring the gas temperature and volume; for a uniform capillary, column length is proportional to volume. Check that the marker moves freely and that the gas remains sealed. Plot $V$ against $T$ in K, or extrapolate a $V$–Celsius graph to estimate absolute zero. This extrapolation tests a model; it is not an instruction to cool the apparatus to absolute zero.

Use pressure-rated equipment within its range; secure fittings and protect against hot water and breakable glass. Do not use mercury in a student-built apparatus. Explain each control: fixed sample prevents changes in amount, waiting controls temperature, and a moving boundary maintains pressure in Charles's experiment.

### Data investigation: Boyle's law {#data-boyle}

*Self-written; constructed teaching data, not a completed RP9 experiment.*

A sealed gas sample settles at 296 K after each slow volume change. The pressure sensor reads **absolute** pressure with uncertainty ±0.5 kPa. Syringe volumes have uncertainty ±0.2 cm³; the connecting tube adds a fixed 2.0 cm³. Treat that tube volume and the temperature as exact for this task.

| Syringe volume / cm³ | Settled absolute pressure / kPa |
| --- | --- |
| 40.0 | 100.0 |
| 35.0 | 113.5 |
| 30.0 | 131.3 |
| 25.0 | 155.6 |
| 20.0 | 190.9 |
| 15.0 | 247.1 |

1. Decide which volume belongs in Boyle's law. Plot pressure against the reciprocal of that volume, fit a line without forcing it through zero, and estimate the amount of gas. Check the intercept and the products against the stated uncertainties.
2. Compare with a plot using only the syringe volume. Why would its systematic curvature not by itself show that Boyle's law fails?
3. On a separate rapid compression to 20.0 cm³, the immediate pressure is 205.0 kPa before settling to 190.9 kPa. Explain the direction of the change. State what you would measure or control before including the immediate reading in the fit.

<details markdown="1">
<summary>Hint</summary>

Use total trapped volume, absolute pressure and a fixed amount. Keep graph units visible: $1\,\mathrm{kPa\,cm^3}=10^{-3}\,\mathrm{Pa\,m^3}$. The immediate and settled readings need not have the same gas temperature.

</details>

<details markdown="1">
<summary>Analysis and retry</summary>

Add the tube volume first: $V=V_{\mathrm{syringe}}+2.0\,\mathrm{cm^3}$. The products are about $4.20\times10^3\,\mathrm{kPa\,cm^3}$, with rounding scatter much smaller than the stated measurement uncertainty. Fitting corrected inverse volume gives a slope of about $4.20\times10^3\,\mathrm{kPa\,cm^3}$ and an intercept consistent with zero. In SI units:

$$pV\approx4.20\,\mathrm{Pa\,m^3}.$$

$$\begin{aligned}
n&\approx\frac{4.20}{8.31\times296}\\
&=1.71\times10^{-3}\,\mathrm{mol}.
\end{aligned}$$

The uncorrected plot curves because the horizontal variable excludes some gas; its products are not constant. That is an apparatus-model error, not a clean test of the gas law. The corrected record supports the model within these uncertainties; it does not prove exact behaviour outside this range.

Rapid compression does work on the gas before sufficient energy escapes, raising temperature and pressure. At unchanged final volume, cooling toward 296 K lowers pressure. Wait for thermal equilibrium, monitor temperature and check for leaks before treating the reading as isothermal.

**Retry:** if the sensor instead read gauge pressure, would adding 2.0 cm³ fix everything? No: atmospheric pressure must also be added to obtain absolute pressure.

</details>

### Data investigation: Charles's law {#data-charles}

*Self-written; constructed teaching data, not a completed RP9 experiment.*

A fixed air sample is trapped in a uniform capillary by a movable liquid marker. While the marker moves freely, pressure remains approximately atmospheric. The table gives equilibrated bath temperatures (uncertainty ±0.2 K) and air-column lengths (uncertainty ±0.2 mm). The marker is seen to stick during the final 80.0 °C reading.

| Temperature / °C | Air-column length / mm |
| --- | --- |
| 10.0 | 56.6 |
| 20.0 | 58.7 |
| 30.0 | 60.6 |
| 40.0 | 62.7 |
| 50.0 | 64.6 |
| 60.0 | 66.7 |
| 70.0 | 68.6 |
| 80.0 | 68.7 |

1. Plot length against Celsius temperature. Decide which points can test a constant-pressure model, giving an experimental reason. Fit the usable readings and estimate the zero-length Celsius temperature.
2. Re-express the relationship using kelvin. Explain why zero length is an extrapolation, and why the 80.0 °C result cannot immediately be used to reject Charles's law.
3. Specify how to repeat that reading so it becomes a valid model test, rather than merely deleting an inconvenient point.

<details markdown="1">
<summary>Hint</summary>

Uniform cross-section makes length proportional to volume. A stuck marker can prevent the gas expanding and maintaining the stated pressure. Use the observation, not closeness to your expected line, to decide whether the model's conditions hold.

</details>

<details markdown="1">
<summary>Analysis and retry</summary>

Use 10–70 °C for a model test while investigating and repeating the independently observed sticking event. A fit gives:

$$\frac{l}{\mathrm{mm}}\approx0.200\frac{\theta}{^{\circ}\mathrm C}+54.64.$$

$$\theta_0\approx-273\,^{\circ}\mathrm C.$$

$$\frac{l}{\mathrm{mm}}\approx0.200\frac{T}{\mathrm K}+0.01.$$

The small kelvin intercept is consistent with zero within the reading uncertainties. The result supports proportionality of volume to absolute temperature over the measured range. It does not establish that the real sample remains a gas down to the extrapolated zero-volume temperature.

With a stuck marker the fixed-pressure condition can fail, so the final reading is not an independent test under the stated model conditions. Restore free motion without losing the sealed sample, check the pressure condition, allow temperature to equilibrate and repeat the reading. Record the fault and repeat result rather than silently replacing it.

**Retry:** a thermometer that reads 2 K too high leaves a straight line but shifts its Celsius intercept to a less negative temperature by 2 K. Repetition does not remove this calibration bias.

</details>

## Molecular Kinetic Theory {#kinetic-theory}

### Model assumptions and Brownian-motion evidence {#kinetic-model-and-evidence}

<span id="molecular-model"></span>

**Brownian motion** is the irregular, random motion of visible suspended particles, such as smoke particles in air. Invisible gas molecules strike them unevenly from different directions. The observed moving specks are **not the gas molecules themselves**. This provides evidence for microscopic particles in constant random motion.

The simple ideal-gas model assumes many identical particles moving randomly, negligible particle volume compared with the container, no intermolecular forces except during collisions, negligible collision duration, and elastic collisions with each other and the walls. Random directions imply equal mean-square velocity components along three perpendicular axes. Real gases approximate this model best when dilute and far from condensation.

### Pressure from momentum transfer {#pressure-and-momentum}

**1. One collision.** Take a molecule of mass $m_0$ with nonzero velocity component $c_x$ in a cube of side $L$. An elastic collision reverses its normal momentum. The magnitude transferred to the wall is $\Delta p_{\mathrm{wall}}=2m_0\lvert c_x\rvert$.

**2. Momentum per second.** In the simplified wall-collision calculation, the interval between successive hits on the same wall is $\Delta t=2L/\lvert c_x\rvert$. Force is the rate of momentum transfer:

$$F_1=\frac{\Delta p_{\mathrm{wall}}}{\Delta t}=\frac{m_0c_x^2}{L}.$$

**3. Whole sample and three dimensions.** Sum the contributions, then divide by wall area $L^2$. Random directions give $\langle c_x^2\rangle=\langle c^2\rangle/3$; using $V=L^3$ gives:

$$pV=Nm_0\langle c_x^2\rangle=\frac13Nm_0\langle c^2\rangle=\frac13Nm_0c_{\mathrm{rms}}^2$$

Here $c_{\mathrm{rms}}=\sqrt{\langle c^2\rangle}$ is **root mean square speed**, not average speed and not mean velocity. The average velocity of a gas at rest can be zero while rms speed is positive. Alternatively, using density $\rho=m_{\mathrm{gas}}/V$ gives $p=\rho c_{\mathrm{rms}}^2/3$. Do not substitute total sample mass for $m_0$ and multiply by $N$ again.

At constant temperature, reducing volume makes molecules hit the walls more frequently; average speed and momentum change per collision remain unchanged. The rate of momentum transfer per unit wall area increases, so pressure rises. At fixed volume, raising temperature increases molecular speeds, giving both more frequent collisions and a greater average momentum transfer per collision.

At constant pressure, heating makes molecules move faster. If the boundary can move freely, expansion reduces the number of molecules per unit volume, offsetting the pressure effect of greater speed. For a fixed amount, this corresponds to volume increasing with absolute temperature in Charles's law. Explain both the speed change and the number-density change.

### Temperature and molecular energy {#molecular-energy}

Combining the molecular pressure equation with $pV=Nk_{\mathrm B}T$ gives:

$$\frac12m_0c_{\mathrm{rms}}^2=\frac32k_{\mathrm B}T=\frac{3RT}{2N_{\mathrm A}}$$

$$c_{\mathrm{rms}}=\sqrt{\frac{3k_{\mathrm B}T}{m_0}}=\sqrt{\frac{3RT}{M}}$$

This is **average translational kinetic energy per molecule**. At equal temperature, different ideal gases have equal average translational kinetic energy; lighter molecules have greater rms speed. Doubling absolute temperature doubles average translational energy and multiplies rms speed by $\sqrt2$.

For a **monatomic ideal gas with only translational energy**, $U=\tfrac32Nk_{\mathrm B}T=\tfrac32nRT$. Do not apply this total-internal-energy expression to every gas: molecular rotation and vibration can add energy in more complex gases. The gas laws come from experiment; kinetic theory supplies a microscopic explanation and testable predictions.

#### Example 8: using total gas mass {#example-molecular-speed}

*Adapted from PH04 January 2024 Q2.*

A spherical container holds $6.3\times10^{-4}\,\mathrm{kg}$ of gas at 102 kPa. The mean square molecular speed is $2.53\times10^5\,\mathrm{m^2\,s^{-2}}$ and there are $1.3\times10^{22}$ molecules. Determine the volume, radius and mean translational kinetic energy per molecule.

**1. Model.** Since $Nm_0$ is the total gas mass, use the molecular pressure equation without multiplying by molecule count again.

**2. Find volume, then radius.**

$$\begin{aligned}
V&=\frac{m_{\mathrm{gas}}c_{\mathrm{rms}}^2}{3p}\\
&=\frac{6.3\times10^{-4}\times2.53\times10^5}{3\times102\times10^3}.
\end{aligned}$$

$$\boxed{V=5.21\times10^{-4}\,\mathrm{m^3}}.$$

$$r=\left(\frac{3V}{4\pi}\right)^{1/3}=\boxed{5.0\times10^{-2}\,\mathrm m}.$$

**3. Return to one molecule for its energy.**

$$m_0=\frac{6.3\times10^{-4}}{1.3\times10^{22}}=4.85\times10^{-26}\,\mathrm{kg}.$$

$$\overline{E}_{\mathrm{k}}=\tfrac12m_0c_{\mathrm{rms}}^2=\boxed{6.1\times10^{-21}\,\mathrm J}.$$

**4. Check:** The supplied quantity is already **mean square speed**, so do not square it again. Radius is measured in metres, not cubic metres. For a separate energy check, $N\overline{E}_{\mathrm{k}}=\tfrac32pV$ must hold using unrounded values.

## Practice {#practice}

Questions 1–9 are **self-written**. Question 10 adapts the experimental evaluation in PH04 January 2024 Q3.4. No official mark allocations are assigned. Write an equation with conditions, substitute SI values, then interpret the answer.

**Choose your practice:** first learn each topic with its example, then use these three passes. Keep hints and solutions closed until you have recorded a first attempt.

| Pass | Questions | What to show |
| --- | --- | --- |
| Establish the model | [1](#question-1), [2](#question-2), [5](#question-5), [8](#question-8) | Boundary or fixed quantities, equation, SI conversion and units |
| Combine steps | [3](#question-3), [4](#question-4), [6](#question-6) | Eliminate losses, turn power into energy, or combine work with the first law |
| Explain and evaluate | [7](#question-7), [9](#question-9), [10](#question-10) | A causal chain connecting the model, observation and improvement |

### Question 1: signs and a system boundary {#question-1}

A gas releases 60 J by heating while 200 J of work is done on it. Calculate its change in internal energy. A student counts the same electrical heater input as both heat and work: explain the error.

<details markdown="1">
<summary>Hint</summary>

Energy leaving by heating is negative; compression work is positive. Draw a boundary around the chosen system.

</details>

<details markdown="1">
<summary>Solution</summary>

$$\Delta U=-60+200=+140\,\mathrm J$$

The internal energy increases. A single energy transfer crosses the boundary once. Classify it according to the chosen boundary rather than adding it twice.

</details>

### Question 2: a two-stage heating process {#question-2}

Calculate the energy needed to turn 0.020 kg of ice at $0\,^{\circ}\mathrm C$ into water at $20\,^{\circ}\mathrm C$. Use $l=3.34\times10^5\,\mathrm{J\,kg^{-1}}$ and $c_{\mathrm{water}}=4200\,\mathrm{J\,kg^{-1}\,K^{-1}}$. Neglect losses.

<details markdown="1">
<summary>Hint</summary>

First melt the ice at fixed temperature; then heat the liquid water.

</details>

<details markdown="1">
<summary>Solution</summary>

$$E=ml+mc\Delta\theta.$$

$$E=0.020\times3.34\times10^5+0.020\times4200\times20.$$

$$E=8360\,\mathrm J\approx\boxed{8.4\,\mathrm{kJ}}.$$

There is no temperature-rise term for the ice because it starts at its melting point.

</details>

### Question 3: flow and heat loss {#question-3}

A liquid's steady temperature rise is 10.0 K. Heater power is 50 W at a mass flow rate of $1.00\times10^{-3}\,\mathrm{kg\,s^{-1}}$, and 90 W at $2.00\times10^{-3}\,\mathrm{kg\,s^{-1}}$. Both runs have the same inlet and outlet temperatures. Find the specific heat capacity and heat-loss power.

<details markdown="1">
<summary>Hint</summary>

Subtract the two power balances to cancel approximately equal heat losses.

</details>

<details markdown="1">
<summary>Solution</summary>

$$c=\frac{90-50}{(2.00-1.00)\times10^{-3}\times10.0}=4000\,\mathrm{J\,kg^{-1}\,K^{-1}}$$

$$P_{\mathrm{loss}}=50-1.00\times10^{-3}\times4000\times10.0=10\,\mathrm W$$

Equal temperature conditions support the equal-loss assumption. Simply using all 50 W to heat the stream would overestimate $c$.

</details>

### Question 4: U-value and energy {#question-4}

A uniform slab has conductivity $0.040\,\mathrm{W\,m^{-1}\,K^{-1}}$, thickness 0.080 m and area $12\,\mathrm{m^2}$. Its faces remain at temperatures differing by 20 K. Find the U-value, power loss and energy lost in 2.0 h.

<details markdown="1">
<summary>Hint</summary>

Calculate conductivity divided by thickness, then power, then multiply by time in seconds.

</details>

<details markdown="1">
<summary>Solution</summary>

$$U_{\mathrm{value}}=\frac{k}{L}=\frac{0.040}{0.080}=\boxed{0.50\,\mathrm{W\,m^{-2}\,K^{-1}}}.$$

$$P=U_{\mathrm{value}}A\Delta\theta=0.50\times12\times20=\boxed{120\,\mathrm W}.$$

$$E=120\times(2.0\times3600)=8.64\times10^5\,\mathrm J\approx8.6\times10^5\,\mathrm J$$

This assumes steady conduction through the slab with no extra paths included.

</details>

### Question 5: amount of gas {#question-5}

A sample occupies $250\,\mathrm{cm^3}$ at absolute pressure 100 kPa and temperature 300 K. Find the amount in moles, the number of molecules and the sample mass if its molar mass is $0.028\,\mathrm{kg\,mol^{-1}}$.

<details markdown="1">
<summary>Hint</summary>

Convert volume and pressure first. Find moles before finding molecule count or mass.

</details>

<details markdown="1">
<summary>Solution</summary>

$$n=\frac{100\times10^3\times250\times10^{-6}}{8.31\times300}=1.00\times10^{-2}\,\mathrm{mol}$$

$$N=nN_{\mathrm A}=\boxed{6.04\times10^{21}}.$$

$$m_{\mathrm{gas}}=nM=\boxed{2.81\times10^{-4}\,\mathrm{kg}}.$$

Retain unrounded moles in the following calculations. The mass is about 0.281 g, not 0.281 kg.

</details>

### Question 6: expansion and the first law {#question-6}

*Further application: guided use of the earlier p–V figure; its work values are already shown.*

A gas expands from $2.0\times10^{-3}\,\mathrm{m^3}$ to $5.0\times10^{-3}\,\mathrm{m^3}$ against a constant external pressure of 100 kPa. It receives 750 J by heating. Find the work done by the gas, work done on the gas and change in internal energy.

<details markdown="1">
<summary>Hint</summary>

Expansion work by the gas is positive, but work on the gas is negative.

</details>

<details markdown="1">
<summary>Solution</summary>

$$W_{\mathrm{by}}=p_{\mathrm{ext}}\Delta V=10^5\times3.0\times10^{-3}=\boxed{300\,\mathrm J}.$$

$$\boxed{W_{\mathrm{on}}=-300\,\mathrm J}.$$

$$\Delta U=750-300=+450\,\mathrm J$$

Using positive 300 J in the first law would use the wrong work convention.

</details>

### Question 7: practical diagnosis {#question-7}

In a Boyle's-law experiment, a student compresses a sealed sample rapidly and reads the pressure immediately. Explain why the reading may be above the constant-temperature prediction and how to improve the method. In a Charles's-law experiment, which boundary condition must change?

<details markdown="1">
<summary>Hint</summary>

Think about work on the gas, temperature equilibration and whether the gas can change volume freely.

</details>

<details markdown="1">
<summary>Solution</summary>

Rapid compression does work on the gas, raising its internal energy and temperature when little energy has yet escaped. At that volume, higher temperature gives higher pressure. Compress slowly and wait for thermal equilibrium at each reading. For Charles's law, allow a boundary to move while keeping pressure constant; do not lock both pressure and volume.

</details>

### Question 8: rms speed and temperature {#question-8}

Find the rms speed of an ideal gas with molar mass $0.028\,\mathrm{kg\,mol^{-1}}$ at 300 K. Predict the speed at 600 K. Compare its mean translational kinetic energy with that of helium at 300 K.

<details markdown="1">
<summary>Hint</summary>

Use molar mass with the molar gas constant, or single-molecule mass with the Boltzmann constant. Do not mix them.

</details>

<details markdown="1">
<summary>Solution</summary>

$$c_{\mathrm{rms}}=\sqrt{\frac{3\times8.31\times300}{0.028}}=5.17\times10^2\,\mathrm{m\,s^{-1}}$$

$$c_{\mathrm{rms},600}=\sqrt2\,c_{\mathrm{rms},300}=7.31\times10^2\,\mathrm{m\,s^{-1}}$$

Both gases at 300 K have the same mean translational kinetic energy, $\tfrac32k_{\mathrm B}T=6.21\times10^{-21}\,\mathrm J$ per molecule. Helium's lighter particles move faster.

</details>

### Question 9: Brownian motion and pressure {#question-9}

A microscope shows bright smoke particles moving irregularly in air. State what is being observed and what causes the motion. Explain, using momentum transfer, why an ideal gas exerts greater pressure when compressed at constant temperature.

Now heat two separate fixed samples of the same ideal gas, initially at the same temperature and pressure. One is in a sealed rigid container; the other is beneath a frictionless piston moving slowly against constant external pressure. Neglect changes in gravitational potential energy of the gas itself. Draw each boundary and particle model before and after heating. Predict the changes in pressure, volume, number density and rms molecular speed. Explain how wall collisions account for each pressure result, and correct the claim: “Constant pressure means constant molecular speed.”

<details markdown="1">
<summary>Hint</summary>

Separate the visible suspended particles from the invisible molecules that strike them. Identify what the container fixes before using the gas model. Pressure is momentum transfer per second per unit area; both number density and the molecular speed distribution matter.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

The visible objects are smoke particles. Uneven impacts from randomly moving air molecules cause their irregular motion. In isothermal compression, average molecular kinetic energy and rms speed stay constant. Number density rises, increasing the rate of momentum transfer per unit wall area and therefore pressure.

**Rigid container:** draw the same volume and number of particles, but longer representative velocity arrows after heating. Temperature and rms speed rise; number density is unchanged. Molecules transfer more momentum per collision on average and strike a given wall area more frequently, so pressure rises.

**Constant-pressure piston:** draw a larger volume with the same particle count and longer representative velocity arrows. Temperature and rms speed rise, but number density falls as the piston moves out. In $p=\tfrac13\rho c_{\mathrm{rms}}^2$, the reduction in mass density offsets the increase in mean-square speed. Their combined effect leaves momentum transfer per second per unit area, and hence pressure, unchanged once mechanical balance is restored. Do not infer the pressure from collision count alone.

The piston can move without gas leaking out. Constant pressure does not mean constant speed: the gas expands while becoming hotter. Draw arrows as representative random molecular velocities, not as an organised outward bulk flow.

**Retry:** double the absolute temperature. In the rigid container pressure doubles; under constant pressure volume doubles and number density halves. Both rms speeds increase by $\sqrt2$.

</details>

### Question 10: improve an ice experiment {#question-10}

*Adapted question.* A student estimates latent heat by collecting melted ice while an electrical heater operates. The student writes: “Repeat it and use a more powerful heater.” Explain how a suitable increase in heater power could reduce a particular error, and why repetition alone cannot correct an unaccounted background heat input. State one assumption needed when subtracting an unheated background run.

<details markdown="1">
<summary>Hint</summary>

Link each change to an energy transfer or measurement limitation. Distinguish random variation from a systematic bias.

</details>

<details markdown="1">
<summary>Solution</summary>

Within the apparatus rating, greater heater power makes background heat a smaller fraction of the total melting power. Repeating may reduce random uncertainty but does not remove the systematic error from treating all melted mass as heater-induced. Background subtraction requires the background melting rate to remain approximately unchanged, with comparable surroundings and collection conditions. Explain the causal link; simply naming an improvement is insufficient.

</details>

## Common Errors {#common-errors}

If a hint was needed, record the question and the step that stopped you: model choice, units/signs, calculation or explanation. Revisit the linked section, close the solution and retry that question from a blank page. Retry it again after two days and one week; an independent first step is the check of improvement.

| If you did this | Why it fails | Revisit |
| --- | --- | --- |
| Used positive work on the gas during expansion | Work by and work on the system have opposite signs | [First law](#internal-energy), [gas work](#gas-work) |
| Ignored energy on a heating-curve plateau | A state change can increase internal energy at constant temperature | [Specific heat and latent heat](#specific-heat-and-latent-heat) |
| Used the whole tank mass in a steady-flow power balance | The balance concerns energy carried through each second | [Continuous flow example](#example-continuous-flow), then [Question 3](#question-3) |
| Used Celsius in a gas-law temperature ratio | Gas laws require absolute temperature and the stated fixed amount | [Gas laws](#ideal-gases) |
| Multiplied total gas mass by molecule count again | Single-molecule mass and total sample mass are different quantities | [Pressure and momentum](#pressure-and-momentum) |
| Wrote only “repeat” to remove heat loss | Repetition does not remove systematic bias; identify and address the transfer | [Practical 8](#required-practical-8), [background melting](#example-latent-heat) |

## Quick Reference {#quick-reference}

| Use | Equation and condition |
| --- | --- |
| First law | $\Delta U=Q+W$; $W$ is work **on** the system |
| Temperature change | $Q=mc\Delta\theta$; no state change, constant $c$ |
| State change | $Q=ml$; magnitude at the transition temperature |
| Steady flow | $P=\dot m c\Delta\theta+P_{\mathrm{loss}}$ |
| Uniform plane slab | $P=kA\Delta\theta/L$; $U_{\mathrm{value}}=k/L$ |
| Ideal gas | $pV=nRT=Nk_{\mathrm B}T$; absolute $p$, kelvin $T$ |
| Constant external pressure | $W_{\mathrm{on}}=-p_{\mathrm{ext}}\Delta V$ |
| Molecular pressure | $pV=\tfrac13Nm_0c_{\mathrm{rms}}^2$; $m_0$ is one molecule's mass |
| Mean translational energy | $$\overline{E}_{\mathrm{k}}=\tfrac32k_{\mathrm B}T$$ |
| Rms speed | $c_{\mathrm{rms}}=\sqrt{3RT/M}$; $M$ in $\mathrm{kg\,mol^{-1}}$ |

Before moving on, explain a heating-curve plateau, give the sign of expansion work in the first law, distinguish the two practicals' controls, and explain gas pressure without saying molecules “want to spread out”.

[Course index](/alevel/a2-physics/) · [PH03 quick reference](/alevel/a2-physics/quick-reference/) · [Next: Nuclear Radius](/alevel/a2-physics/nuclear-radius/)

<details markdown="1">
<summary>Sources and exam wording</summary>

Scope: [OxfordAQA Physics specification, version 5.1](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-physics-specification.pdf), Sections 3.11.1–3.11.4, printed pages 28–29; required practicals 8 and 9. Practical guidance also draws on the [Physics practical handbook](https://www.oxfordaqa.com/oaqaresources/science/teaching/a-level-practical-handbook-physics.pdf), 2018 edition, printed pages 75–77 for RP8. Scope follows the specification rather than any textbook chapter numbering.

The RP8 and RP9 raw-record investigations are additional self-written activities using constructed data. They assess fitting choices, model conditions and bias; they do not report actual practical completion.

Examples 1, 3, 5 and 8 and practice 10 are **adaptations**, not verbatim reproductions, of PH04 January 2024 Q1.2, Q3.1, Q3.2–3.3, Q2 and Q3.4 respectively. Numerical results and the relevant reasoning were checked against the final official mark scheme and independently recalculated. Sources in the teacher's collection: [question paper](https://drive.google.com/file/d/1hByI4GGJhjdx9xOLQ-IGzT3-xCQsW_mV/view) and [mark scheme](https://drive.google.com/file/d/1zmUrY-MlADO-jrtdY2kvRNR_b9RZfEyh/view); access may require permission. Examples 2, 4, 6 and 7, the checkpoints and practice 1–9 are self-written. Answers are teaching explanations, without invented official mark allocations.

</details>
