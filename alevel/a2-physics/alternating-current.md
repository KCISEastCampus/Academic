---
title: Alternating Current
layout: subjects
mathjax: true
grade: a2
subject: a2-physics
permalink: /alevel/a2-physics/alternating-current/
toc_headings: h2, h3, h4
study_page: true
---

[A2 Physics](/alevel/a2-physics/) · PH03 · 3.10.5

How can a voltage with zero mean still heat a resistor? Connect a calibrated waveform to time, rms values and transferred energy.

**Before starting:** recall the [rotating-coil generator](/alevel/a2-physics/electromagnetic-induction/#rotating-coil), period, sine curves and electrical power. Try the [independent scope task](#data-scope-records) before opening its analysis.

## Describe one complete cycle {#sinusoidal-values}

Alternating current repeatedly reverses direction. Here we study zero-mean sinusoidal signals:

$$v=V_0\sin(\omega t+\phi),\quad i=I_0\sin(\omega t+\phi),\quad T=\frac1f,\quad\omega=2\pi f.$$

The current expression has the same phase as voltage only for the pure resistive load assumed below. $V_0$ is the peak **magnitude**; $V_{\mathrm{pp}}=2V_0$ is the distance from negative to positive peak. The time between adjacent opposite peaks is half a period; use two successive equal-phase points for a full period. A negative voltage describes polarity, not negative voltage magnitude.

## Rms: match the heating effect {#rms-and-power}

The rms current is the steady direct current giving the same average heating power in the **same resistance** over the same time. Since instantaneous power in a resistor is $p=i^2R$, squaring removes the sign. For one whole cycle of a sine wave the mean of sine squared is one half:

$$I_{\mathrm{rms}}=\frac{I_0}{\sqrt2},\qquad V_{\mathrm{rms}}=\frac{V_0}{\sqrt2}.$$

For constant resistance:

$$\overline P=I_{\mathrm{rms}}^2R=\frac{V_{\mathrm{rms}}^2}{R}=V_{\mathrm{rms}}I_{\mathrm{rms}}=\frac{V_0I_0}{2}.$$

The signed average of the sine voltage is zero, but the mean of its square is positive. Do not replace rms by the mean voltage or use peak values in the rms power product. Dividing a peak by $\sqrt2$ is a **sinusoidal** result, not a rule for every waveform or load.

### Example 1: compare AC and DC heating {#example-1}

A sinusoidal supply has peak voltage $12\,\mathrm V$ and is connected across a constant $24\,\Omega$ resistor. Find rms voltage, average power and energy transferred in $60\,\mathrm s$. Compare with a steady $12\,\mathrm V$ supply across the same resistor.

$$V_{\mathrm{rms}}=\frac{12}{\sqrt2}\approx8.5\,\mathrm V,\quad\overline P=\frac{12^2}{2(24)}=3.0\,\mathrm W,\quad E=\overline Pt=180\,\mathrm J.$$

The 12 V DC supply gives $6.0\,\mathrm W$, twice the heating power. The AC peak only reaches 12 V briefly; a DC value of about 8.5 V would match its heating. Resistance has been treated as temperature-independent.

For a **stated** sinusoidal mains value of $230\,\mathrm{V\ rms}$, the peak is about $325\,\mathrm V$ and peak-to-peak about $651\,\mathrm V$. These are model calculations from the supplied value, not a claim that all countries use the same supply. Do not connect classroom oscilloscope inputs directly to mains.

## Read an oscilloscope as an instrument {#oscilloscope-controls}

First establish a zero reference using the instrument’s ground/zero-reference setting, then return to the appropriate input mode. **DC coupling** displays the signal including its DC level; a steady DC input gives a horizontal trace displaced from zero. **AC coupling** removes a DC component, so it cannot establish an unknown absolute DC level. Here all AC reading tasks are zero-mean sine waves.

- Vertical sensitivity (often labelled Y-gain or volts/division) converts vertical divisions into volts. Include any stated probe factor once; use the effective sensitivity if it already includes that factor.
- Time base converts horizontal divisions into time. Count several complete periods when possible and divide by their number to reduce the relative effect of reading an endpoint.
- Trigger level/slope stabilises the trace; it does not change the source frequency. A calibrated control is needed for numerical readings.

$$V_0=n_yS_y,\qquad V_{\mathrm{pp}}=n_{\mathrm{pp}}S_y,\qquad T=\frac{n_xS_t}{k},\qquad f=\frac1T.$$

Here $k$ is the number of complete cycles spanning $n_x$ horizontal divisions. Zero-line-to-peak divisions are not peak-to-peak divisions.

### Example 2: divide before inverting {#example-2}

Two complete cycles span 8.0 horizontal divisions at $0.50\,\mathrm{ms/div}$. The trace spans 6.0 vertical divisions peak-to-peak at an effective $2.0\,\mathrm{V/div}$. Find frequency, peak and rms voltage.

$$T=\frac{8.0(0.50\times10^{-3})}{2}=2.0\times10^{-3}\,\mathrm s,\qquad f=500\,\mathrm{Hz}.$$

$$V_{\mathrm{pp}}=12\,\mathrm V,\quad V_0=6.0\,\mathrm V,\quad V_{\mathrm{rms}}\approx4.2\,\mathrm V.$$

Using the 4 ms span as one period would halve the inferred frequency; treating 12 V as a peak would double the inferred rms value.

## Independent reading: the calibrated trace {#data-scope-records}

*Self-written; constructed oscilloscope trace, not an actual instrument capture.*

The bold horizontal centre line is zero volts. Each major square is one division. Effective vertical sensitivity is $2.0\,\mathrm{V/div}$ and time base is $0.50\,\mathrm{ms/div}$; no extra probe factor is needed. Read peak voltage, peak-to-peak voltage, period and frequency, then calculate rms voltage. Estimate the effect on frequency if the two-cycle span has reading uncertainty ±0.2 division. Explain why the trace alone does not give source resistance.

<img src="/assets/img/physics-ac-scope-task.svg" alt="Task oscilloscope grid: a zero-centred sine wave has amplitude 2.5 divisions and two complete cycles over 8 horizontal divisions. The bold centre line is the zero reference; only the measured waveform is shown." width="520" height="430" data-lazy-ignore="true">

<details markdown="1">
<summary>Hint</summary>

Measure vertical displacement from zero to a peak. For frequency use the full two-cycle span, divide by two, then invert. Keep milliseconds separate from seconds.

</details>

<details markdown="1">
<summary>Analysis and retry</summary>

$$V_0=5.0\,\mathrm V,\quad V_{\mathrm{pp}}=10\,\mathrm V,\quad T=2.0\,\mathrm{ms},\quad f=500\,\mathrm{Hz},\quad V_{\mathrm{rms}}\approx3.5\,\mathrm V.$$

The stated span range gives $T=1.95$ to $2.05\,\mathrm{ms}$ and frequencies about 488 to 513 Hz, roughly ±2.5%. The reciprocal bounds are slightly asymmetric. Source resistance requires additional information, such as a controlled load test; amplitude alone is insufficient. **Retry:** change only the time base to 1.0 ms/div: period spans 2.0 divisions but physical frequency stays 500 Hz. Change only effective sensitivity to 1.0 V/div: peak height becomes 5.0 divisions and may be clipped by a small display.

</details>

## Practice {#practice}

### Question 1: recover scope controls {#question-1}

*Adapted from OxfordAQA 9630 PH03 June 2024 Q6.4–6.5; QP pp.20–22 and MS pp.17–18 read. Graph dimensions are stated explicitly; the sketch is not copied.*

A zero-centred sine trace from a rotating coil has one period spanning 5.0 cm and zero-to-peak height 3.6 cm on the calibrated grid. The frequency is $50\,\mathrm{Hz}$ and rms emf is $1.27\,\mathrm V$. Determine the time base in ms/cm and vertical sensitivity in V/cm, quoting the controls to one significant figure. At 25 Hz the same coil rotates in the same field with unchanged scope controls: sketch the change in period and amplitude.

<details markdown="1">
<summary>Hint</summary>

The generator peak emf is proportional to rotation frequency; do not change only the horizontal width.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

$$T=20\,\mathrm{ms},\quad\varepsilon_0=1.27\sqrt2\approx1.80\,\mathrm V.$$

Time base is $4\,\mathrm{ms/cm}$; vertical sensitivity is $0.5\,\mathrm{V/cm}$. At 25 Hz, peak height halves to 1.8 cm and period doubles to 10 cm. The screen may not show a whole new period. Any starting phase is acceptable unless specified. **Retry:** if turns double while frequency stays 50 Hz, amplitude doubles and period is unchanged.

</details>

### Question 2: connect coil angle to phase {#question-2}

*Adapted from OxfordAQA 9630 PH03 June 2024 Q6.3; QP pp.19–20 and MS p.17 read. Initial orientation is restated to make phase unambiguous.*

A generator starts with its positive normal along the field at $t=0$ and has $\varepsilon=\varepsilon_0\sin\omega t$. At what fraction of a period does its normal first make $51^\circ$ with the field? Where is that point horizontally on a trace with 5.0 divisions per period? Is the emf then at its maximum?

<details markdown="1">
<summary>Hint</summary>

Use the stated starting orientation and a full rotation of 360 degrees per period.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

$$\frac{t}{T}=\frac{51}{360}\approx0.142,\qquad x=5.0\frac{51}{360}\approx0.71\ \mathrm{div}.$$

The emf is positive and about $0.777\varepsilon_0$, not maximal. **Retry:** the first emf maximum occurs at 90 degrees, while linkage is zero.

</details>

### Question 3: read an unknown DC level {#question-3}

*Self-written.*

With DC coupling, a steady trace is 1.5 divisions above the established zero line. The effective sensitivity is $4.0\,\mathrm{V/div}$. Find the voltage. A student selects AC coupling, sees a centred line and reports zero DC voltage. Explain the error.

<details markdown="1">
<summary>Hint</summary>

A horizontal trace need not be zero; the reference and coupling mode matter.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

The DC level is $+6.0\,\mathrm V$. AC coupling removes the DC component; a centred trace in that mode cannot establish that the original DC level was zero. **Retry:** swap the probe polarity in DC mode: the signed displacement reverses.

</details>

### Question 4: diagnose a heating calculation {#question-4}

*Self-written.*

A sinusoidal current has peak $0.80\,\mathrm A$ through a constant $50\,\Omega$ resistor. A student writes “average current is zero, so average power is zero”. Correct the reasoning, calculate average power, and compare with steady current 0.80 A.

<details markdown="1">
<summary>Hint</summary>

Average the squared current for power, not the signed current.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

$$I_{\mathrm{rms}}=\frac{0.80}{\sqrt2}\approx0.57\,\mathrm A,\qquad\overline P=\frac{(0.80)^2(50)}{2}=16\,\mathrm W.$$

The steady 0.80 A gives 32 W. Both halves of the AC cycle heat the resistor; reversing current does not reverse resistive energy transfer. **Retry:** reversing every terminal label changes signed current but not heating.

</details>

### Question 5: separate source and display changes {#question-5}

*Self-written.*

A sine wave appears twice as wide between matching peaks after a control is changed. Give two different possible causes, one involving the source and one involving the oscilloscope. State the extra information needed to distinguish them. Would the height necessarily change in each case?

<details markdown="1">
<summary>Hint</summary>

Use divisions per period = period divided by time per division.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

Halving source frequency doubles its period at fixed time base. Alternatively, halving time per division doubles displayed width at unchanged frequency. Check the time-base setting or independently measure frequency. A source change need not change amplitude, though a rotating-coil generator with other factors fixed halves amplitude when frequency halves. Changing time base alone does not change height. **Retry:** state why a screen-width change is not by itself evidence of changing energy per second.

</details>

## Quick reference {#quick-reference}

| Quantity | Zero-mean sinusoidal signal |
| --- | --- |
| Peak-to-peak | $V_{\mathrm{pp}}=2V_0$ |
| Rms | $V_{\mathrm{rms}}=V_0/\sqrt2$; $I_{\mathrm{rms}}=I_0/\sqrt2$ |
| Period and frequency | $T=1/f$ |
| Constant resistive load | $\overline P=V_{\mathrm{rms}}^2/R$ |
| Uniform generator rotation, other factors fixed | $\varepsilon_0\propto f$ |

[Previous: Electromagnetic Induction](/alevel/a2-physics/electromagnetic-induction/) · [Course index](/alevel/a2-physics/) · [Next: Transformers and Power Transmission](/alevel/a2-physics/transformers-and-power-transmission/)

## Sources and scope {#sources}

OxfordAQA 9630 PH03, [specification body v4.4](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf) Section 3.10.5, printed p.26/PDF p.25, checked 21 October 2026. Questions 1–2 adapt June 2024 [QP](https://drive.google.com/file/d/1ah7yyGqFtyHdZ4Dxd4JchZM361qUj8gc/view) Q6.3–6.5, pp.19–22, paired with [MS](https://drive.google.com/file/d/1-18EOqSkT4F1sHO9LaevtZaWXNn4aDSM/view) pp.17–18. Its original phase/scope figures were inspected; the task here restates dimensions and starting orientation. The scope drawing, other tasks and numerical examples are self-written. Textbook support: Jim Breithaupt Section 21.4, printed p.381. Only sinusoidal rms and resistive power models are required here; there is no added impedance or power-factor calculation topic.
