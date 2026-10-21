---
title: Measurements and Uncertainties
layout: subjects
mathjax: true
grade: as
subject: as-physics
permalink: /alevel/as-physics/measurements-and-uncertainties/
toc_headings: h2, h3
study_page: true
---

<h2 id="start-here">Can a consistent reading still be wrong?</h2>

**A measurement is more than a number. What evidence justifies its correction, uncertainty and reported precision?** Work from raw readings to a result that can be checked.

- **Learn:** start with [units](#units-and-estimates), then [measurement quality](#measurement-quality).
- **Apply:** connect [zero correction](#zero-correction), [combined uncertainties](#combining-uncertainties) and [error bars](#graph-records).
- **Check independently:** choose a method in [practice](#independent-practice), then [diagnose and retry](#diagnose-and-retry).

**Before you start:** use ratios, percentages, powers, means and straight-line gradients. A stated uncertainty is a bound or estimate under a specified model; it is not automatically a known error or a statistical confidence interval.

All tasks and records are self-written or constructed for teaching. Reading and analysing them does not certify completion of a physical practical.

<h3 id="first-judgement">Try first: consistency versus accuracy</h3>

*Self-written task.*

<!-- task:first-judgement -->
A micrometer gives repeated readings of 30.42 mm, 30.43 mm and 30.42 mm for one object. With the jaws fully closed it reads +0.20 mm. A student says: “The readings agree closely, so 30.42 mm must be accurate.”

Is the reasoning sufficient? Identify one check that the repeated readings alone cannot replace. You do not need an uncertainty formula yet.
<!-- /task:first-judgement -->

<details markdown="1">
<summary>Hint</summary>

Separate the spread of readings from the instrument’s zero indication.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Close agreement supports precision and repeatability under these conditions, not accuracy. The positive closed-jaw indication suggests a zero offset that needs checking and correction. Repeating the same biased procedure does not remove it. A reference standard or zero check is independent evidence; the true value is not established just by a narrow spread.

</details>

<h2 id="units-and-estimates">Units and order of magnitude come first</h2>

Use the SI base units relevant here: mass kg, length m, time s, electric current A, temperature K and amount of substance mol. Derived units include force N, energy J, power W and charge C.

| Prefix | T | G | M | k | c | m | $\mu$ | n | p | f |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Multiplier | $10^{12}$ | $10^9$ | $10^6$ | $10^3$ | $10^{-2}$ | $10^{-3}$ | $10^{-6}$ | $10^{-9}$ | $10^{-12}$ | $10^{-15}$ |

The prefix applies to the unit before a power is taken:

$$1\,\mathrm{mm^2}=(10^{-3}\,\mathrm{m})^2=10^{-6}\,\mathrm{m^2}$$

$$1\,\mathrm{kWh}=1000\,\mathrm{W}\times3600\,\mathrm{s}=3.6\times10^6\,\mathrm{J}$$

Estimate before using many digits. A 0.5 kg water sample occupying 500 cm³ has a density of order $10^3\,\mathrm{kg\,m^{-3}}$. If a unit conversion gives a result millions of times larger, check the cubed length conversion. An order-of-magnitude estimate is not a precision measurement.

<h2 id="measurement-quality">What does each measurement claim mean?</h2>

| Term | What to check |
| --- | --- |
| Accuracy | Closeness to a reference or true value; a narrow spread alone is insufficient. |
| Precision | How tightly values cluster. |
| Repeatability | Agreement when the same method, observer and equipment are used under the same conditions. |
| Reproducibility | Agreement after relevant conditions, observers or equipment change. |
| Resolution | The smallest change an instrument can distinguish. |

**Random effects** produce unpredictable fluctuations. Repeats and a suitable mean can reduce their influence on a result, but do not guarantee its accuracy. **Systematic effects** produce a persistent bias, such as a zero offset or a scale-factor error. Check calibration or change the method rather than only increasing repeats.

Keep resolution separate from the final uncertainty. Half a scale division may be a reasonable reading estimate for a clear analogue scale; digital specifications, reaction time, alignment and calibration may require a different bound. State the assumption, rather than assigning the same uncertainty to every instrument.

A repeat-data estimate such as half the observed range describes that small set's spread. It does not prove there is no larger fluctuation, and must not hide a separate calibration contribution.

<h2 id="zero-correction">Correct a zero offset and retain its uncertainty</h2>

A positive zero indication means the instrument reads too high. Subtract the measured zero indication, rather than changing an uncertainty sign.

**Worked example — constructed reading.** A micrometer indication is $2.38\pm0.01\,\mathrm{mm}$ and an independently measured zero indication is $+0.04\pm0.01\,\mathrm{mm}$. Treat the quoted uncertainties as conservative bounds.

$$d=2.38-0.04=2.34\,\mathrm{mm}$$

$$\Delta d=0.01+0.01=0.02\,\mathrm{mm}$$

Report $d=(2.34\pm0.02)\,\mathrm{mm}$. The uncertainty is positive; it does not become smaller just because the zero correction was subtracted.

$$\text{fractional uncertainty}=\frac{0.02}{2.34}=0.00855,\qquad \text{percentage uncertainty}=0.855\%$$

These are three ways of describing the same result, not three independent uncertainty sources. State what the bound includes. More repeated object readings do not average away a shared zero-calibration uncertainty.

<h2 id="combining-uncertainties">Choose the rule from the measurement model</h2>

For small uncertainties, the following first-order rules give conservative estimates when the uncertain inputs are allowed to vary independently. $\Delta a$ denotes a non-negative absolute uncertainty. These are not rules for combining statistical standard deviations.

| Model | Conservative first-order rule |
| --- | --- |
| $y=a+b$ or $y=a-b$ | $\Delta y=\Delta a+\Delta b$ |
| $y=ab$ or $y=a/b$ | $\Delta y/\lvert y\rvert\approx\Delta a/\lvert a\rvert+\Delta b/\lvert b\rvert$ |
| $y=x^n$ | $\Delta y/\lvert y\rvert\approx\lvert n\rvert\Delta x/\lvert x\rvert$ |

Fractional rules require non-zero denominators and a defined power. A known constant such as $\pi$ adds no measurement uncertainty. Very large fractional uncertainty, or a difference close to zero, needs extra care with the actual bounds; a first-order percentage should not be treated as exact.

**Worked choice: cylinder volume.** A cylinder has $r=(1.50\pm0.02)\,\mathrm{mm}$ and $L=(40.0\pm0.5)\,\mathrm{mm}$. The model is a uniform circular cylinder:

$$V=\pi r^2L=\pi(1.50)^2(40.0)=282.74\,\mathrm{mm^3}$$

$$\frac{\Delta V}{V}\times100\%\approx2\left(\frac{0.02}{1.50}\right)100\%+\left(\frac{0.5}{40.0}\right)100\%=3.92\%$$

$$\Delta V\approx11.1\,\mathrm{mm^3},\qquad V=(283\pm11)\,\mathrm{mm^3}$$

The squared radius doubles its fractional contribution; adding absolute millimetre uncertainties directly to a volume would be dimensionally wrong. Retain working digits and round the final central value to a decimal place consistent with its stated uncertainty. Here two significant digits in the uncertainty make the comparison visible.

<h3 id="difference-and-correlation">Two readings, one shared zero</h3>

*Self-written task.*

<!-- task:difference-and-correlation -->
Two positions on one scale are $x_1=(12.4\pm0.1)\,\mathrm{cm}$ and $x_2=(18.6\pm0.1)\,\mathrm{cm}$. The quoted bounds describe independent reading effects.

1. Find the length between positions and its conservative uncertainty.
2. Both indications also contain the same fixed +0.3 cm zero offset, not included in the reading bounds. Does it change this length?
3. Would a scale-factor error necessarily cancel in the same way? Explain.
<!-- /task:difference-and-correlation -->

<details markdown="1">
<summary>Hint</summary>

Write the difference explicitly, including the common offset in both readings. Distinguish a fixed added offset from a multiplicative error.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The independent reading effects add:

$$L=18.6-12.4=6.2\,\mathrm{cm},\qquad \Delta L=0.1+0.1=0.2\,\mathrm{cm}.$$

The fractional uncertainty is $0.2/6.2=0.0323$, or about $3.2\%$.

For a shared offset $z$,

$$L=(x_2-z)-(x_1-z)=x_2-x_1.$$

It cancels exactly if it is unchanged between the two readings. Do not add two copies of the same shared offset as though independent. A scale factor multiplies the difference and generally remains. Cancellation requires a common additive effect, not merely the label “systematic”.

</details>

<h2 id="graph-records">Use all the error bars to constrain a line</h2>

A force sensor is calibrated against applied force. The constructed records below give sensor output $U$, with a quoted bound of $\pm0.20\,\mathrm{V}$ at every point. Treat force uncertainty as negligible for this task.

<!-- task:calibration-record -->

| Force $F$ / N | 0 | 1 | 2 | 3 | 4 |
| --- | --- | --- | --- | --- | --- |
| Output $U$ / V | 0.50 | 1.50 | 2.50 | 3.50 | 4.50 |

<!-- /task:calibration-record -->

<img src="/assets/img/physics-as-error-bars.svg" alt="Constructed calibration points: forces 0, 1, 2, 3 and 4 newtons correspond to outputs 0.50, 1.50, 2.50, 3.50 and 4.50 volts. Every vertical error bar extends 0.20 volts above and below its point. No fitted line is shown." width="760" height="430">

Use $U=mF+b$. The gradient has units $\mathrm{V\,N^{-1}}$ and the intercept has units V. Do not force the graph through the origin without physical justification.

**Worked line check.** The candidate $U=0.95F+0.60$, with U in volts and F in newtons, predicts 0.60, 1.55, 2.50, 3.45 and 4.40 V. Each prediction lies within its point's vertical interval, so this is an acceptable line under the stated bound model. It need not pass through each central dot.

To estimate an uncertainty, compare the best-fit gradient with the steepest and shallowest acceptable straight lines. A line must meet every relevant error interval; endpoint choices alone need not satisfy middle points. Intercept bounds must also be checked against the whole record. Without drawn error bars, a justified estimate from scatter or measurement information is still needed; it is not permission to choose arbitrary extremes.

<h3 id="gradient-and-intercept">Find bounds, not just a best fit</h3>

*Self-written task.*

<!-- task:gradient-and-intercept -->
For the force-sensor records:

1. Draw the best straight line and determine its gradient and intercept.
2. Find the steepest and shallowest lines compatible with all five vertical intervals. Check every point.
3. Determine the largest and smallest possible intercepts. Report conservative symmetric uncertainties about the central fit.
4. What additional evidence is needed before calling the non-zero intercept an instrument fault?
<!-- /task:gradient-and-intercept -->

<details markdown="1">
<summary>Hint</summary>

The first and last intervals limit the possible rise over 4 N. Check intermediate predictions. At zero force the intercept must lie inside the first interval.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The central line has $m=1.00\,\mathrm{V\,N^{-1}}$ and $b=0.50\,\mathrm{V}$.

$$m_{\max}=\frac{4.70-0.30}{4}=1.10\,\mathrm{V\,N^{-1}},\qquad m_{\min}=\frac{4.30-0.70}{4}=0.90\,\mathrm{V\,N^{-1}}$$

The steep line predicts 0.30, 1.40, 2.50, 3.60 and 4.70 V; the shallow line predicts 0.70, 1.60, 2.50, 3.40 and 4.30 V. All five intervals are satisfied in each case.

$$\Delta m=0.10\,\mathrm{V\,N^{-1}},\qquad b_{\min}=0.30\,\mathrm{V},\qquad b_{\max}=0.70\,\mathrm{V}$$

Report $m=(1.00\pm0.10)\,\mathrm{V\,N^{-1}}$ and $b=(0.50\pm0.20)\,\mathrm{V}$. These marginal ranges do not imply every combination of m and b is allowed.

The record establishes a non-zero baseline under the model. Check the sensor's specified zero-load output, tare, loading arrangement and calibration before diagnosing a fault. A non-zero intercept is not automatically an error.

</details>

<h2 id="independent-practice">Choose a method and justify the result</h2>

Keep the solutions closed. State the model, convert units before calculation and identify what each quoted uncertainty includes.

<h3 id="practice-density">An unfamiliar combination</h3>

*Self-written task.*

<!-- task:practice-density -->
A uniform circular wire has mass $m=(8.50\pm0.05)\,\mathrm{g}$, radius $r=(0.60\pm0.01)\,\mathrm{mm}$ and length $L=(1.00\pm0.01)\,\mathrm{m}$. Treat the bounds as independent and use a first-order conservative estimate.

Determine its density in SI units and a suitable absolute uncertainty. Which measurement should be improved first if the sole aim is to reduce the calculated fractional uncertainty, with the other bounds unchanged? Explain your choice.
<!-- /task:practice-density -->

<details markdown="1">
<summary>Hint</summary>

Build the volume from the radius and length, then divide mass by volume. Compare the fractional contributions, including powers.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Using $m=0.00850\,\mathrm{kg}$ and $r=0.00060\,\mathrm{m}$,

$$\rho=\frac{m}{\pi r^2L}=7.52\times10^3\,\mathrm{kg\,m^{-3}}$$

$$\frac{\Delta\rho}{\rho}\times100\%\approx\left(\frac{0.05}{8.50}+2\frac{0.01}{0.60}+\frac{0.01}{1.00}\right)100\%=4.92\%$$

$$\Delta\rho\approx0.37\times10^3\,\mathrm{kg\,m^{-3}},\qquad \rho=(7.5\pm0.4)\times10^3\,\mathrm{kg\,m^{-3}}$$

Radius contributes about 3.33%, compared with 0.588% from mass and 1.00% from length, so it is the largest target under the stated aim. Check the zero and diameter/radius distinction before buying a higher-resolution instrument: resolution alone does not guarantee the bound improves.

</details>

<h3 id="practice-timing">Choose a timing procedure</h3>

*Self-written task.*

<!-- task:practice-timing -->
An oscillator has a period close to 2.0 s. A manual stopwatch measurement has a quoted total timing uncertainty of ±0.2 s, already including starting and stopping effects.

Compare timing one complete oscillation with timing 20 complete oscillations and dividing by 20. Estimate the period uncertainty in each case. State one condition that must hold for the longer method, and one error that repeating the timing would not automatically remove.
<!-- /task:practice-timing -->

<details markdown="1">
<summary>Hint</summary>

The count 20 is treated as exact. Divide both total duration and its absolute uncertainty by 20; do not add another pair of reaction-time bounds.

</details>

<details markdown="1">
<summary>Solution and check</summary>

For one oscillation the estimated fractional uncertainty is $0.2/2.0=10\%$. For 20 oscillations the duration is about 40 s:

$$T=\frac{40}{20}=2.0\,\mathrm{s},\qquad \Delta T=\frac{0.2}{20}=0.01\,\mathrm{s},\qquad \frac{\Delta T}{T}=0.5\%$$

The period must remain sufficiently stable and complete oscillations must be counted correctly. A systematic stopwatch scale error, or a consistently biased start/end convention, is not guaranteed to disappear on repetition. This comparison uses the given total bound, not a universal manual-timing uncertainty.

</details>

<h3 id="practice-estimate">Estimate without false precision</h3>

*Self-written task.*

<!-- task:practice-estimate -->
Estimate the mass of air in a classroom of dimensions 8 m by 6 m by 3 m. Use an air density of order 1 kg m⁻³. Give the nearest order of magnitude and explain why reporting many significant figures would not be justified.
<!-- /task:practice-estimate -->

<details markdown="1">
<summary>Hint</summary>

Estimate volume, then use the stated density. The density itself is deliberately approximate.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The volume is about $8\times6\times3=144\,\mathrm{m^3}$. The mass is roughly $1\times144\approx10^2\,\mathrm{kg}$ to the nearest order of magnitude. Dimensions and density are estimates, so extra calculator digits do not establish greater accuracy.

</details>

<h2 id="diagnose-and-retry">Repair the model, not just the arithmetic</h2>

| Your conclusion | What to revisit |
| --- | --- |
| Repeating removes every error | Separate [spread from calibration](#measurement-quality). |
| Subtraction means subtracting uncertainty | Check [independent bounds and shared effects](#difference-and-correlation). |
| Radius contributes only once to volume | Rebuild the [measurement equation](#combining-uncertainties). |
| A line through two extreme endpoints is always valid | Check [every error interval](#graph-records). |
| A non-zero intercept proves a fault | Compare the [physical zero-load model](#gradient-and-intercept). |

<h3 id="retry-shared-offset">Retry in another measurement context</h3>

*Self-written task.*

<!-- task:retry-shared-offset -->
The same thermometer indicates 15.0°C before heating and 25.0°C after heating. It has an unchanged +0.5°C zero offset. A student subtracts the offset from the temperature rise as well.

Correct the student's calculation. Would a multiplicative calibration error also cancel? Give an English explanation.
<!-- /task:retry-shared-offset -->

<details markdown="1">
<summary>Hint</summary>

Apply the zero correction to each reading before taking their difference.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The corrected temperatures are 14.5°C and 24.5°C:

$$\Delta\theta=(25.0-0.5)-(15.0-0.5)=10.0\,^\circ\mathrm{C}.$$

“The same additive offset cancels in a difference, but a multiplicative calibration factor scales the difference and does not generally cancel.” Other reading uncertainties still need their own treatment; the calculation only addresses the shared offset.

</details>

<h2 id="sources-and-next">Scope and next step</h2>

Scope: OxfordAQA International AS Physics 9630, PH01, Sections 3.1.1–3.1.3. This sample develops selected measurement skills; the short error-bar record does not replace practice with experimental scatter or certify all practical skills.

See the [official specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf). Tasks, values and feedback are self-written, with no official marks. Trigonometric/logarithmic uncertainty combinations and statistical confidence intervals are not introduced as requirements.

[Next: Vectors and Moments](/alevel/as-physics/vectors-and-moments/) · [Back to AS Physics](/alevel/as-physics/) · [Existing mechanics notes](/alevel/as-physics/#2--mechanics-321--328) · [Apply measurement judgement in A2 capacitor records](/alevel/a2-physics/capacitor-charge-and-discharge/#data-rc-records).

