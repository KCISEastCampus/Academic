---
title: Capacitor Charge and Discharge
layout: subjects
mathjax: true
grade: a2
subject: a2-physics
permalink: /alevel/a2-physics/capacitor-charge-and-discharge/
toc_headings: h2
study_page: true
---

[A2 Physics](/alevel/a2-physics/) · PH03 · 3.9.1 Capacitor charge and discharge

Explain why current changes during charging and discharging, calculate times, and use graphs to find capacitance in Required Practical 6.

- **Learning:** start with the [circuit](#the-circuit), then compare [discharging](#discharging) and [charging](#charging).
- **Homework help:** decide whether the capacitor is charging or discharging and identify the initial and final voltages before substituting.
- **Revision:** try [practice](#practice), then check your [practical method](#required-practical-6).

**Before you start:** review [Capacitance](/alevel/a2-physics/capacitance/), especially $Q=CV$ and $E_{\text{stored}}=CV^2/2$. Convert resistance and capacitance to SI units. Use natural logarithms, $\ln$, and keep extra digits until the final answer.

Worked examples and Questions 1–5 are self-written. Questions 6–8 are adapted from OxfordAQA PH03 papers, with simplified wording and supplied readings so that the original diagrams are not needed. No official marks are assigned. All diagrams are original and not to scale.

## The Circuit

**Think first:** an uncharged capacitor is connected to a constant-voltage supply through a fixed resistor. Is the charging current constant because the supply voltage is constant?

<details markdown="1">
<summary>Check your explanation</summary>

No. The supply voltage is shared between the resistor and the capacitor. As the capacitor voltage rises, the resistor voltage falls. With fixed resistance, $I=V_R/R$ therefore decreases. This is different from the constant-current charging method in the previous lesson.

</details>

We assume constant capacitance $C$, fixed resistance $R$, an ideal supply, negligible capacitor leakage and negligible resistance elsewhere. A real meter can add a discharge path; that effect is considered in the practical section.

Let $V_s$ be the **supply voltage** and $V_C$ the **voltage across the capacitor**. These are different during charging.

Use a changeover switch to connect the same resistor–capacitor branch either to the positive supply terminal or to the common return:

- **Charge:** the supply, resistor and capacitor form a series circuit.
- **Discharge:** the supply is disconnected from the branch, and the resistor and capacitor form a closed loop.
- An ammeter goes in series in the branch. A high-resistance voltmeter or voltage sensor goes in parallel with the capacitor.

<img src="/assets/img/physics-rc-circuit.svg" alt="A changeover switch connects the series resistor, ammeter and capacitor branch either to the positive supply terminal for charging or to the return for discharging. A voltmeter is connected across the capacitor." width="400" height="420" data-lazy-ignore="true">

The capacitor has the same plate polarity immediately after the switch moves to discharge. The **conventional current reverses direction** through the resistor: the charged capacitor now drives the current.

In this lesson $I$ denotes current **magnitude**, which is positive in either mode. If one signed direction is used for both modes, the discharge current has the opposite sign to the charging current. State the convention when sketching a current graph.

## Discharging

Initially, the capacitor has voltage $V_0$ and charge $Q_0=CV_0$. During discharge the resistor is across the capacitor, so:

$$I=\frac{V_C}{R}=\frac{Q}{RC}.$$

As charge leaves a plate, $Q$ decreases. Therefore $V_C=Q/C$ and the current also decrease. Less charge leaves per second as discharge continues.

$$\frac{\mathrm dQ}{\mathrm dt}=-I=-\frac{Q}{RC}.$$

The rate of decrease is proportional to the amount remaining. The resulting decrease is **exponential**, not linear:

$$\boxed{Q=Q_0e^{-t/RC}}.$$

$$\boxed{V_C=V_0e^{-t/RC}}.$$

$$\boxed{I=I_0e^{-t/RC}},\qquad I_0=\frac{V_0}{R}.$$

Here $e\approx2.718$ is the base of natural logarithms, not the elementary charge. The three quantities have the same fractional decrease because $C$ and $R$ are constant. Equal time intervals give the same **fractional** decrease, not the same decrease in volts or coulombs.

### Example 1: voltage, charge and current

A $100\,\mathrm{\mu F}$ capacitor starts at $8.0\,\mathrm V$ and discharges through $100\,\mathrm{k\Omega}$. Find its voltage, charge and current after $15\,\mathrm s$.

$$RC=(100\times10^3)(100\times10^{-6}).$$

$$RC=10\,\mathrm s.$$

$$V_C=8.0e^{-15/10}=\boxed{1.8\,\mathrm V}.$$

Using the unrounded voltage:

$$Q=CV_C=\boxed{180\,\mathrm{\mu C}}.$$

$$I=\frac{V_C}{R}=\boxed{18\,\mathrm{\mu A}}.$$

**Check:** all three are $e^{-1.5}\approx0.223$ of their initial values. Using $I=Q/t$ here would give an average based on the wrong charge, not the instantaneous current.

## Charging

For charging from an initially uncharged capacitor, Kirchhoff's voltage law gives:

$$V_s=IR+V_C.$$

$$I=\frac{V_s-V_C}{R}.$$

Initially $V_C=0$, so the full supply voltage is across the resistor and $I_0=V_s/R$. As $V_C$ rises, $V_s-V_C$ falls, so current falls. The capacitor voltage approaches the supply voltage.

$$\boxed{V_C=V_s(1-e^{-t/RC})}.$$

$$\boxed{Q=CV_s(1-e^{-t/RC})}.$$

$$\boxed{I=\frac{V_s}{R}e^{-t/RC}}.$$

These expressions assume the capacitor is **initially uncharged**. $CV_s$ is its final charge, not its charge at every instant. The charging voltage is an exponential **rise towards a limit**, not a growing exponential $V_se^{t/RC}$.

For a capacitor starting at $V_i$ with the same polarity, the more general expression is:

$$V_C=V_s+(V_i-V_s)e^{-t/RC}.$$

Use this only when an initial voltage is given. For the usual uncharged case, set $V_i=0$.

### Example 2: supply voltage is shared

An uncharged $220\,\mathrm{\mu F}$ capacitor charges from $6.0\,\mathrm V$ through $47\,\mathrm{k\Omega}$. Find the capacitor voltage, resistor voltage and current after one time constant.

$$RC=(47\times10^3)(220\times10^{-6}).$$

$$RC=10.34\,\mathrm s.$$

At $t=RC$, $e^{-t/RC}=e^{-1}$:

$$V_C=6.0(1-e^{-1})=\boxed{3.8\,\mathrm V}.$$

$$V_R=V_s-V_C=\boxed{2.2\,\mathrm V}.$$

$$I=\frac{V_R}{R}=\boxed{47\,\mathrm{\mu A}}.$$

**Check:** use unrounded values to confirm $V_C+V_R=6.0\,\mathrm V$. The capacitor has reached about 63% of its final voltage, while current has fallen to about 37% of its initial value.

## Time Constant and Time to Halve

The **time constant** is:

$$\boxed{\tau=RC}.$$

Its unit is the second: $\Omega\,\mathrm F=(\mathrm{V/A})(\mathrm{C/V})=\mathrm{C/A}=\mathrm s$.

- During discharge, $Q$, $V_C$ and $I$ fall to $e^{-1}\approx0.368$ of their initial values after one time constant.
- During charging from zero, $Q$ and $V_C$ rise to $1-e^{-1}\approx0.632$ of their final values. Current falls to $0.368I_0$.
- Increasing $R$ or $C$ makes the approach to the final state slower. Doubling either doubles $\tau$.

The time constant is **not** the time to halve. For discharge:

$$\frac12=e^{-T_{1/2}/RC}.$$

$$\boxed{T_{1/2}=RC\ln2\approx0.693RC}.$$

After each additional $T_{1/2}$, the remaining charge, voltage and current halve again. During charging, it is the **shortfall** $V_s-V_C$ that halves in this time. The time to reach half the final voltage from zero is also $RC\ln2$.

At $5RC$, the discharge voltage fraction is $e^{-5}\approx0.00674$, or 0.674%. Charging from zero reaches about 99.3% of its final voltage. This is a useful estimate of “effectively complete”; the ideal exponential never reaches its limit at a finite time.

### Example 3: reaching a specified voltage

For $R=100\,\mathrm{k\Omega}$ and $C=100\,\mathrm{\mu F}$, $RC=10\,\mathrm s$.

**Discharge from $8.0\,\mathrm V$ to $2.0\,\mathrm V$:**

$$\frac{2.0}{8.0}=e^{-t/10}.$$

$$t=10\ln\left(\frac{8.0}{2.0}\right)=\boxed{14\,\mathrm s}.$$

**Charge from zero to $6.0\,\mathrm V$ with an $8.0\,\mathrm V$ supply:**

$$\frac{6.0}{8.0}=1-e^{-t/10}.$$

The remaining fraction is $1-6.0/8.0=0.25$, so the time is again $10\ln4\approx\boxed{14\,\mathrm s}$.

**Check:** both processes reduce the relevant remaining fraction to one quarter. Do not substitute $V_C/V_s$ directly into a discharge equation for a charging question.

## Reading Graphs

### Shapes and end points

For discharge, $Q$, $V_C$ and current magnitude decrease steeply at first, then approach zero. The **gradient is negative but becomes less negative**. A curve that becomes more steeply negative, ends abruptly, or crosses the time axis does not describe this ideal discharge.

For charging from zero, $Q$ and $V_C$ rise steeply at first and flatten towards their final values. Current magnitude falls from $V_s/R$ towards zero.

<img src="/assets/img/physics-rc-graphs.svg" alt="Normalised charge and voltage rise towards one during charging and fall towards zero during discharge. At one time constant the fractions are 0.632 and 0.368. Current magnitude falls along the same exponential curve in both modes when R, C and the starting or supply voltage match." width="400" height="650" data-lazy-ignore="true">

For the same $R$, $C$ and $V_s$, the current-magnitude graph for charging from zero is the same as for discharging from $V_0=V_s$. With one signed current convention, the discharge graph is reflected below the time axis.

### Gradients

- The gradient of a **charging $Q$–$t$ graph** is the charging current, $I=\mathrm dQ/\mathrm dt$.
- The gradient of a **discharging $Q$–$t$ graph** is $-I$ when $I$ is the outgoing current magnitude.
- For a $V_C$–$t$ graph, multiply the gradient magnitude by $C$ to obtain current magnitude.

A tangent to a discharge curve at $t=0$ meets the time axis at $t=RC$. A tangent to a charging voltage curve at $t=0$ meets the final-voltage level at $t=RC$. Draw a tangent, not a chord between two distant points. The 37% discharge method or a log-linear fit can be easier to use accurately.

### Areas

The area under a **current-magnitude–time graph** is charge transferred:

$$\Delta Q_{\text{moved}}=\int I\,\mathrm dt.$$

For discharge from $t=0$ to $t=T$, the area is the charge **lost**, $Q_0-Q(T)$. Therefore:

$$Q(T)=Q_0-\Delta Q_{\text{moved}}.$$

The area from $T$ to infinity is the charge still available to leave, $Q(T)$. During charging, the area from zero to $T$ is the charge gained; it equals stored charge only if the capacitor started uncharged. Area under a voltage–time graph is not charge.

### Example 4: charge lost and charge remaining

A $100\,\mathrm{\mu F}$ capacitor discharges from $8.0\,\mathrm V$ through $100\,\mathrm{k\Omega}$. Find the charge represented by the area under its current graph from zero to $10\,\mathrm s$, and the charge remaining then.

$$Q_0=CV_0=800\,\mathrm{\mu C}.$$

$$Q(10)=800e^{-1}\approx\boxed{290\,\mathrm{\mu C}}.$$

The area represents charge lost:

$$Q_0-Q(10)\approx\boxed{510\,\mathrm{\mu C}}.$$

**Check:** the unrounded lost and remaining charges add to $800\,\mathrm{\mu C}$. A shaded area from zero to $10\,\mathrm s$ does not directly give the charge remaining.

## Energy During Discharge

Stored energy depends on voltage **squared**. Combining $V_C=V_0e^{-t/RC}$ with $E_{\text{stored}}=CV_C^2/2$ gives:

$$\boxed{E_{\text{stored}}=E_0e^{-2t/RC}}.$$

Its time to halve is $RC\ln2/2$, half the time for voltage to halve. If voltage falls to half its original value, only one quarter of the original stored energy remains. In the ideal discharge through a resistor, the energy lost by the capacitor is dissipated in the resistor.

### Example 5: voltage fraction is not energy fraction

In Example 1, the initial energy is:

$$E_0=\frac12(100\times10^{-6})(8.0)^2.$$

$$E_0=3.2\,\mathrm{mJ}.$$

After $15\,\mathrm s$, $t/RC=1.5$, so:

$$E_{\text{stored}}=3.2e^{-3}=\boxed{0.16\,\mathrm{mJ}}.$$

$$E_{\text{lost}}\approx\boxed{3.0\,\mathrm{mJ}}.$$

**Check:** $e^{-3}\approx0.0498$ of the energy remains, even though $e^{-1.5}\approx0.223$ of the voltage remains. Use unrounded values before subtracting energies.

## Required Practical 6

Investigate capacitor charging and discharging and use **log-linear plotting** to determine the time constant $RC$.

### Collecting useful readings

1. Build the changeover circuit above. Use a suitable low-voltage supply and stay below the capacitor's voltage rating. Observe polarity if using an electrolytic capacitor. Switch off before changing the circuit; discharge through a resistor before handling it.
2. Measure $R$. Choose $R$ and $C$ so that the voltage changes slowly enough to record many readings over several time constants. A voltage sensor with a data logger helps when changes are fast.
3. Connect a high-input-resistance voltmeter or sensor across the capacitor. Charge until its voltage is effectively steady; record this as $V_0$.
4. Switch to discharge and start recording at $t=0$. Record voltage at regular intervals. Keep $R$ and $C$ unchanged during each run.
5. Repeat after recharging to the same initial voltage. Plot the measurements and investigate whether repeated runs agree. For charging runs, start from a discharged capacitor and record $V_s$ separately.

The meter must not provide a significant extra discharge path. If the meter resistance $R_V$ is comparable with $R$, the discharge resistance becomes:

$$R_{\text{eff}}=\left(\frac1R+\frac1{R_V}\right)^{-1}.$$

This makes the discharge faster. Use an instrument with $R_V$ much greater than $R$, or include its resistance in the model. Do not claim that a high-resistance meter draws exactly zero current.

### Log-linear analysis

For discharge, take natural logarithms:

$$y=\ln\left(\frac{V_C}{1\,\mathrm V}\right).$$

$$y_0=\ln\left(\frac{V_0}{1\,\mathrm V}\right).$$

$$y=y_0-\frac{t}{RC}.$$

Using the numerical voltage in volts makes the logarithm dimensionless. A plot of $\ln(V_C/1\,\mathrm V)$ against $t$ should be a straight line with:

$$\boxed{m=-\frac1{RC}},\qquad \boxed{RC=-\frac1m}.$$

$$\boxed{C=-\frac1{Rm}}.$$

The gradient has units $\mathrm{s^{-1}}$. Fit a line through the usable data and take two well-separated points on the **best-fit line**, rather than using two nearby measurements. The line need not pass through the origin; its intercept is the logarithm of the initial numerical voltage.

For charging, the quantity that decreases exponentially is the **shortfall**:

$$V_s-V_C=V_se^{-t/RC}.$$

Plot $\ln[(V_s-V_C)/1\,\mathrm V]$ against $t$, not $\ln(V_C/1\,\mathrm V)$. Its gradient is also $-1/RC$. Do not take the logarithm of zero or a negative shortfall.

<img src="/assets/img/physics-rc-log.svg" alt="Discharge voltage falls exponentially from eight volts with a ten second time constant. Its natural logarithm plotted against time is a straight line of gradient minus 0.100 per second, giving a ten second time constant." width="400" height="600" data-lazy-ignore="true">

Very small discharge voltages and very small charging shortfalls have large fractional uncertainty. For discharge, approximately $\Delta(\ln V)\approx\Delta V/V$. Exclude readings below useful instrument resolution with a stated reason, rather than removing inconvenient points. A switch or timing delay shifts the log-line intercept but does not change its gradient if the subsequent discharge still follows the model.

For charging, uncertainty in $V_s$ also affects the shortfall, especially near the final voltage. A curved log plot can indicate changing resistance, leakage, instrument loading or an unsuitable model. Check the circuit and readings before forcing a straight line.

If you use $\log_{10}$ instead of $\ln$, the gradient is $-1/(RC\ln10)$. The natural-log formula cannot be used unchanged.

### Example 6: a fitted line and uncertainty

A discharge experiment uses $R=100\,\mathrm{k\Omega}$. The best-fit natural-log line has gradient $-0.100\,\mathrm{s^{-1}}$. Acceptable steepest and shallowest lines give $-0.105$ and $-0.095\,\mathrm{s^{-1}}$. The resistance uncertainty is 2%.

$$RC=-\frac1{-0.100}=\boxed{10.0\,\mathrm s}.$$

$$C=\frac{10.0}{100\times10^3}=\boxed{100\,\mathrm{\mu F}}.$$

Use half the range of acceptable gradients as an uncertainty estimate:

$$\Delta m=\frac{0.105-0.095}{2}=0.005\,\mathrm{s^{-1}}.$$

The gradient uncertainty is 5%. Since $C=1/(R|m|)$, adding percentage uncertainties gives approximately $2\%+5\%=7\%$, or $C=(100\pm7)\,\mathrm{\mu F}$. This is an approximate uncertainty bound, not a claim that independent random errors must always be added this way.

**Check:** the gradient is negative, while time constant and capacitance are positive. Steepest and shallowest lines should be justified using error bars or an appropriate spread of data.

## Practice

Write the correct charging or discharging equation first. For graph questions, identify both axes and explain what a gradient or area represents.

### Question 1: one time constant

An uncharged $470\,\mathrm{\mu F}$ capacitor charges from a $12\,\mathrm V$ supply through $10\,\mathrm{k\Omega}$. Find the time constant, initial current, and capacitor voltage and current at one time constant. Explain why current decreases.

<details markdown="1">
<summary>Hint</summary>

At $t=RC$, use $e^{-1}$ for the current fraction and $1-e^{-1}$ for the capacitor voltage fraction.

</details>

<details markdown="1">
<summary>Solution</summary>

$$RC=(10\times10^3)(470\times10^{-6}).$$

$$\boxed{RC=4.7\,\mathrm s}.$$

$$I_0=\frac{12}{10\times10^3}=\boxed{1.2\,\mathrm{mA}}.$$

$$V_C=12(1-e^{-1})=\boxed{7.6\,\mathrm V}.$$

$$I=1.2e^{-1}=\boxed{0.44\,\mathrm{mA}}.$$

As capacitor voltage rises, voltage across the fixed resistor decreases, so current decreases. The supply voltage stays fixed, but the resistor voltage does not.

</details>

### Question 2: voltage halves twice

A $68\,\mathrm{\mu F}$ capacitor discharges from $9.0\,\mathrm V$ through $20\,\mathrm{k\Omega}$. Find its time to halve, the time to reach $2.25\,\mathrm V$, and the fraction of initial energy remaining at that voltage.

<details markdown="1">
<summary>Hint</summary>

$2.25\,\mathrm V$ is one quarter of $9.0\,\mathrm V$. Energy depends on voltage squared.

</details>

<details markdown="1">
<summary>Solution</summary>

$$RC=(20\times10^3)(68\times10^{-6}).$$

$$RC=1.36\,\mathrm s.$$

$$T_{1/2}=1.36\ln2=\boxed{0.94\,\mathrm s}.$$

$$t=1.36\ln4=\boxed{1.9\,\mathrm s}.$$

The energy fraction is $(2.25/9.0)^2=\boxed{1/16}$, or 6.25%. Charge and voltage have halved twice; energy has fallen by a factor of 16.

</details>

### Question 3: a gradient and an area

At one instant on a discharge voltage graph, the tangent gradient is $-0.30\,\mathrm{V\,s^{-1}}$. Capacitance is $200\,\mathrm{\mu F}$. Find the current magnitude. During the first $5.0\,\mathrm s$, the area under the current-magnitude graph is $0.40\,\mathrm{mC}$. If initial charge is $1.0\,\mathrm{mC}$, find the charge remaining.

<details markdown="1">
<summary>Hint</summary>

Use $I=C|\mathrm dV_C/\mathrm dt|$. The area is charge transferred during the interval.

</details>

<details markdown="1">
<summary>Solution</summary>

$$I=(200\times10^{-6})(0.30)=\boxed{60\,\mathrm{\mu A}}.$$

The capacitor is losing charge, so its charge gradient is negative. The current magnitude is positive. Charge remaining is $1.0-0.40=\boxed{0.60\,\mathrm{mC}}$.

</details>

### Question 4: charging to 90%

An uncharged $1000\,\mathrm{\mu F}$ capacitor charges through $2.2\,\mathrm{k\Omega}$ from $5.0\,\mathrm V$. Find the time to reach 90% of its final voltage and the current then. Can you use $Q=It$ with the instantaneous current to find its total charge?

<details markdown="1">
<summary>Hint</summary>

The shortfall fraction is 0.10, not 0.90. The current is changing.

</details>

<details markdown="1">
<summary>Solution</summary>

$$RC=2.2\,\mathrm s,\qquad e^{-t/RC}=0.10.$$

$$t=2.2\ln10=\boxed{5.1\,\mathrm s}.$$

$$I=\frac{5.0-4.5}{2200}=\boxed{0.23\,\mathrm{mA}}.$$

No. $Q=It$ with one instantaneous current assumes that current stayed constant. Here use $Q=CV_C=\boxed{4.5\,\mathrm{mC}}$ or the area under the changing current graph.

</details>

### Question 5: the voltmeter changes the circuit

A capacitor discharges through $1.0\,\mathrm{M\Omega}$. A voltmeter of input resistance $10\,\mathrm{M\Omega}$ is across it. Find the effective discharge resistance. If the measured time constant is divided by $1.0\,\mathrm{M\Omega}$ to estimate capacitance, is that estimate too high or too low? Explain how to reduce the effect.

<details markdown="1">
<summary>Hint</summary>

The voltmeter is an additional resistor in parallel. Use $RC=R_{\text{eff}}C$ for this discharge.

</details>

<details markdown="1">
<summary>Solution</summary>

$$R_{\text{eff}}=\frac{(1.0)(10)}{1.0+10}\,\mathrm{M\Omega}.$$

$$\boxed{R_{\text{eff}}\approx0.91\,\mathrm{M\Omega}}.$$

The measured time constant is about $0.909$ of the value without loading. Dividing it by $1.0\,\mathrm{M\Omega}$ therefore gives about $0.909C$, an underestimate of roughly 9.1%. Use a meter with much greater input resistance, or account for $R_{\text{eff}}$ when calculating $C$.

</details>

### Question 6: a log plot and parallel resistors

**Adapted from OxfordAQA PH03, January 2020, Question 2.** The numerical readings below describe an idealised straight-line plot; they replace the original plotted readings.

A capacitor initially at $5.0\,\mathrm V$ discharges through parallel resistors $R_1$ and $R_2$. A plot of $\ln(Q/1\,\mathrm C)$ against time has intercept $-7.40$ and gradient $-0.0127\,\mathrm{s^{-1}}$. $R_1=3.2\,\mathrm{M\Omega}$. Determine initial charge, capacitance, time constant and $R_2$. How does removing $R_2$ change the initial discharge rate after recharging to the same voltage?

<details markdown="1">
<summary>Hint</summary>

Take the exponential of the intercept. The log gradient is $-1/(R_{\text{eff}}C)$, where the two resistors are in parallel.

</details>

<details markdown="1">
<summary>Solution</summary>

$$Q_0=e^{-7.40}\,\mathrm C.$$

$$\boxed{Q_0=6.1\times10^{-4}\,\mathrm C}.$$

$$C=\frac{Q_0}{5.0}\approx\boxed{120\,\mathrm{\mu F}}.$$

$$RC=-\frac1{-0.0127}=\boxed{79\,\mathrm s}.$$

Use the unrounded values to find $R_{\text{eff}}=RC/C\approx0.644\,\mathrm{M\Omega}$. Then:

$$\frac1{R_2}=\frac1{R_{\text{eff}}}-\frac1{R_1}.$$

$$\boxed{R_2\approx0.81\,\mathrm{M\Omega}}.$$

Removing $R_2$ raises the resistance from $R_{\text{eff}}$ to $R_1$. Capacitance stays fixed, so the time constant increases. At the same initial voltage, $I_0=V_0/R$ is smaller, so the initial rate of charge loss is smaller. Explain this using resistance and current, not just “it discharges more slowly”.

The original graph gives a range of acceptable readings; the official $R_2$ value is approximately $0.84\,\mathrm{M\Omega}$. Our supplied readings give the independently calculated value above.

</details>

### Question 7: current readings and charge lost

**Adapted from OxfordAQA PH03, June 2024, Question 5.1–5.3.** Explicit readings replace the original graph.

A charged capacitor discharges through $220\,\mathrm{k\Omega}$. Initial current magnitude is $28.5\,\mathrm{\mu A}$ and its time to halve is $1.83\,\mathrm s$. Find the initial capacitor voltage, time constant and capacitance. Explain how the area under the current graph from zero to $6.0\,\mathrm s$ can be used to find charge remaining, and calculate that remaining charge.

<details markdown="1">
<summary>Hint</summary>

Use $V_0=I_0R$, $RC=T_{1/2}/\ln2$ and $Q(t)=Q_0e^{-t/RC}$. The stated area gives charge moved.

</details>

<details markdown="1">
<summary>Solution</summary>

$$V_0=(28.5\times10^{-6})(220\times10^3).$$

$$\boxed{V_0=6.3\,\mathrm V}.$$

$$RC=\frac{1.83}{\ln2}\approx2.64\,\mathrm s.$$

$$C=\frac{RC}{220\times10^3}\approx\boxed{12\,\mathrm{\mu F}}.$$

Using unrounded values, $Q_0=CV_0\approx75.2\,\mathrm{\mu C}$. The area from zero to $6.0\,\mathrm s$ is charge moved, which must be subtracted from $Q_0$. Equivalently:

$$Q(6.0)=Q_0e^{-6.0/RC}.$$

$$\boxed{Q(6.0)\approx7.8\,\mathrm{\mu C}}.$$

About $67\,\mathrm{\mu C}$ has moved in this interval. The initial voltage and capacitance agree with the official graph-based answers within their allowed reading ranges.

</details>

### Question 8: a circuit and two current curves

**Adapted from OxfordAQA PH03, June 2024, Question 5.4–5.5.**

Describe how to connect the ammeter, resistor, capacitor and changeover switch to measure current during both charge and discharge. For the same $R$, $C$ and supply voltage, compare the charging current-magnitude curve from an uncharged capacitor with the discharge curve from a capacitor fully charged to the supply voltage.

<details markdown="1">
<summary>Hint</summary>

The ammeter must stay in the resistor–capacitor branch in both switch positions. Compare initial current and time constant.

</details>

<details markdown="1">
<summary>Solution</summary>

Put the resistor, ammeter and capacitor in series, with the branch connected to the moving contact of the changeover switch. One fixed contact connects to the positive supply terminal; the other connects to the return. The other end of the capacitor connects to the return, completing the discharge loop without the supply. See the circuit at the start of this lesson.

Both current magnitudes start at $V_s/R$ and decrease as $e^{-t/RC}$. Therefore the curves coincide. Their negative gradients become less negative, and they approach zero without ending abruptly on the time axis. Current direction reverses on discharge; a signed current graph would show opposite signs.

</details>

## Quick Reference

| Quantity | Equation or interpretation |
|---|---|
| Time constant | $\tau=RC$ |
| Discharge voltage | $V_C=V_0e^{-t/RC}$ |
| Discharge charge | $Q=Q_0e^{-t/RC}$ |
| Discharge current magnitude | $I=(V_0/R)e^{-t/RC}$ |
| Charge from zero | $V_C=V_s(1-e^{-t/RC})$; $Q=CV_C$ |
| Charging current | $I=(V_s/R)e^{-t/RC}$ |
| Time to halve charge or voltage | $T_{1/2}=RC\ln2$ |
| Discharge to fraction $f$ | $t=-RC\ln f$ |
| Charge from zero to fraction $f$ | $t=-RC\ln(1-f)$ |
| Log-linear gradient | $m=-1/(RC)$ using natural logs |
| Area under current magnitude | Charge moved during the interval |
| Discharge energy | $E_{\text{stored}}=E_0e^{-2t/RC}$ |

Before moving on, check that you can explain why current falls, sketch all three quantities, distinguish time constant from time to halve, interpret gradients and areas, and describe how to determine $RC$ using log-linear plotting.

[Previous lesson: Capacitance](/alevel/a2-physics/capacitance/) · [PH03 course index](/alevel/a2-physics/) · [Radioactivity reference notes](/alevel/a2-physics/quick-reference/#44-exponential-decay-in-radioactivity)

<details markdown="1">
<summary>Sources and exam wording</summary>

This lesson follows Section 3.9.1 and Required Practical 6 of the [OxfordAQA Physics specification](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-physics-specification.pdf). Textbook support: Jim Breithaupt, *Oxford International AQA Examinations: International A Level Physics*, Section 19.4, printed pp. 346–349. The teacher's AS handouts inform short explanations, circuit reasoning and staged practical analysis.

Questions 6–8 are adapted from OxfordAQA PH03 January 2020 Question 2 and June 2024 Question 5. Official mark schemes were consulted before drafting. Numerical readings are supplied explicitly; adapted answers were independently checked rather than copied from textbook answers. Later PH03 radioactivity and magnetic-field lessons are not part of this page.

</details>
