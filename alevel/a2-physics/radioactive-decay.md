---
title: Radioactive Decay
layout: subjects
mathjax: true
grade: a2
subject: a2-physics
permalink: /alevel/a2-physics/radioactive-decay/
toc_headings: h2, h3, h4
study_page: true
---

[A2 Physics](/alevel/a2-physics/) · PH03 · 3.9.2 Exponential changes in radioactivity

**How can unpredictable individual decays produce a predictable half-life?** Connect the nuclear model to activity, then test it using counting records rather than a ready-made smooth curve.

- **Learning:** start with [random decay](#random-decay) and the [constant-probability model](#model-constant-probability), then connect the equations to [graphs](#decay-graphs) and [measurements](#counting-and-background).
- **Data analysis:** try the [raw-record investigation](#data-decay-records) before opening its hints or analysis.
- **Revision:** attempt [practice](#practice) with the solutions closed; explain your choices in English.

**Before you start:** recall AS decay types, half-life and background radiation from [AS Physics](/alevel/as-physics/). Review [capacitor discharge](/alevel/a2-physics/capacitor-charge-and-discharge/) for exponential graphs. Use natural logarithms and consistent time units.

Worked examples, checkpoints and the counting investigation are self-written; all supplied counting records are **constructed teaching data**, not measurements from a completed experiment. Questions 3–4 are adapted from OxfordAQA PH03 papers: wording and tasks have been changed, and no official marks are assigned. Sources are identified at the end.

**Core route:** complete the model, worked examples 1–2, both graph tasks and the core counting investigation. Sections marked **Further understanding** or **Challenge** can be read afterwards; decay curves and natural-log graphs remain core content.

## Random Decay {#random-decay}

**Try first:** a sample has a half-life of 60 s. A student says that every nucleus will decay exactly 60 s after it is formed. Is that what half-life means? Explain what it says about a large sample.

<details markdown="1">
<summary>Check your reasoning</summary>

Half-life describes a population: after 60 s, approximately half the nuclei in a large sample remain undecayed. It does not give an individual nucleus a scheduled decay time. Some decay earlier and others survive through several half-lives.

</details>

For a given unstable nucleus, we cannot predict its decay time. For identical nuclei of one isotope, under the model used here, the probability of decay in a short interval is constant: a surviving nucleus does not become more likely to decay simply because it is older.

**Random** means that the individual decay time is unpredictable. **Spontaneous** means that decay occurs without an external trigger; ordinary changes in temperature, pressure or chemical state do not control the decay constant in this school-level model. Moving a detector can change its count rate without changing the source's activity.

The **decay constant** measures this probability per unit time. Over a sufficiently short interval, the decay probability is approximately $\lambda\Delta t$; this approximation requires $\lambda\Delta t\ll1$.

<details markdown="1">
<summary>Further understanding: probability over a finite interval</summary>

Over a finite interval the probability is $1-e^{-\lambda\Delta t}$, which never exceeds one. Do not extend the short-interval approximation to arbitrarily long times. The core requirement here is to explain constant decay probability and use the exponential model below.

</details>

With many nuclei, the number decaying in equal short intervals is approximately proportional to the number still undecayed. Individual results fluctuate, but a large population has a reproducible statistical trend. “Random” does not mean that every nucleus must decay after one half-life, or that equal numbers decay in equal intervals.

### Checkpoint: random does not mean lawless {#checkpoint-random-decay}

*Self-written.*

Two samples contain the same isotope. Sample P has twice as many undecayed nuclei as sample Q. Compare their expected activities. Does a nucleus that has survived for a long time have a greater probability of decaying in the next second?

<details markdown="1">
<summary>Explanation</summary>

P has twice the expected activity because there are twice as many nuclei available to decay. The next-second decay probability is the same for an old surviving nucleus as for any other identical nucleus under unchanged conditions. A smaller sample may show larger fractional fluctuations; this does not change its isotope's decay constant.

</details>

### Model: the same probability, fewer nuclei {#model-constant-probability}

*Self-written; a constructed probability model, not an experiment with a source.*

Represent 1000 undecayed nuclei by counters. In each 20 s model interval, independently assign each remaining counter a random integer from 1 to 5, with all five outcomes equally likely. Remove a counter if its number is 5; never return removed counters. The probability of removal is 0.20 in every interval.

| Interval number | Time / s | Expected number remaining | Expected number removed in this interval |
| --- | --- | --- | --- |
| 0 | 0 | 1000 | — |
| 1 | 20 | ? | ? |
| 2 | 40 | ? | ? |
| 3 | 60 | ? | ? |

1. Complete the expected-value table. Does the same number, or the same fraction of the surviving population, disappear each interval?
2. One illustrative run leaves 792, 642 and 504 counters after the three intervals. These counts are constructed examples of possible outcomes. Do they contradict constant removal probability? Explain.
3. A student removes exactly 200 counters every interval until none remain. Explain why this models a different rule. Predict what happens to the expected number removed in the first interval if the starting population is doubled.

<details markdown="1">
<summary>Hint: apply the rule to the survivors</summary>

Each row starts from the population remaining in the previous row. Multiply that population by 0.80 to find the expected survivors; the difference is the expected removal.

</details>

<details markdown="1">
<summary>Model feedback</summary>

| Interval number | Time / s | Expected number remaining | Expected number removed in this interval |
| --- | --- | --- | --- |
| 0 | 0 | 1000 | — |
| 1 | 20 | 800 | 200 |
| 2 | 40 | 640 | 160 |
| 3 | 60 | 512 | 128 |

The expected surviving fraction is 0.80 each interval, so the expected population follows a geometric decrease. Actual removals fluctuate; the illustrative counts need not equal the expectations, and these three results alone cannot establish that the probability is constant.

Removing 200 every interval gives a straight-line decrease: the fraction removed from the survivors grows. The probability model instead gives fewer expected removals as fewer counters remain. Doubling the starting population doubles the first expected removal to 400 without changing the probability for any one counter. No removed counter returns, matching the absence of replenishment in the nuclear model.

</details>

## Exponential Model {#exponential-model}

Let $N$ be the number of **undecayed nuclei of the isotope being followed**, not the total number of atoms including daughter products. Take $t=0$ when this number is $N_0$. For a single isotope with constant $\lambda$, the smooth macroscopic model is:

$$\frac{\mathrm dN}{\mathrm dt}=-\lambda N.$$

The negative sign describes a decrease. This differential equation describes the expected population trend; an individual measured decay record is discrete and fluctuates.

Constant decay probability gives a constant surviving fraction over equal intervals, as in the counter model. The continuous population model is:

$$\boxed{N=N_0e^{-\lambda t}}.$$

The **activity** is the positive decay rate:

$$\boxed{A=-\frac{\mathrm dN}{\mathrm dt}=\lambda N=A_0e^{-\lambda t}}.$$

One becquerel means one decay per second. If activity is in Bq, use $\lambda$ in $\mathrm{s^{-1}}$. You may use hours consistently in an exponent, but not combine a decay constant in $\mathrm{h^{-1}}$ with activity in Bq to obtain a number of nuclei.

**Conditions:** follow one isotope with no replenishment; use a constant decay constant. A mixture of isotopes or an appreciably radioactive daughter can make the **total** measured activity differ from a single exponential. The parent isotope can still obey its own decay law.

<details markdown="1">
<summary>Further understanding: integration and the area under an activity graph</summary>

Separating variables and integrating from $N_0$ to $N$ gives:

$$\int_{N_0}^{N}\frac{\mathrm dN'}{N'}=-\lambda\int_0^t\mathrm dt'.$$

$$\ln\left(\frac{N}{N_0}\right)=-\lambda t.$$

Exponentiating gives the population equation above. This derivation supports understanding; first learn to interpret and use the model.

The area under a parent-activity–time graph represents the number of parent nuclei that decay during that interval:

$$\int_0^t A\,\mathrm dt=N_0-N(t).$$

It is not the number remaining. The magnitude of the gradient of an $N$–$t$ graph gives activity; the gradient of an $A$–$t$ graph has different units and is not activity.

</details>

## Half-life {#half-life}

The half-life is the time for the expected number of undecayed nuclei, or activity of that isotope, to halve:

$$\boxed{T_{1/2}=\frac{\ln2}{\lambda}}.$$

$$\boxed{\frac{N}{N_0}=\frac{A}{A_0}=2^{-t/T_{1/2}}}.$$

Each additional half-life halves the **remaining** amount: one half, one quarter, one eighth. This is not a fixed number disappearing per interval. The exponential also handles a non-integer number of half-lives.

<details markdown="1">
<summary>Further understanding: where the half-life equation comes from</summary>

Set $N/N_0=1/2$ in the exponential equation and take natural logarithms:

$$\ln\left(\frac12\right)=-\lambda T_{1/2}.$$

Since the logarithm is negative, rearranging gives a positive half-life. The core skill is to use the relationship and rearrange exponential equations with logarithms; this proof need not precede your first calculation.

</details>

### Example 1: a non-integer number of half-lives {#example-1-half-life}

A single-isotope source has initial activity $1600\,\mathrm{Bq}$ and half-life $12.0\,\mathrm{min}$. Find its activity after $30.0\,\mathrm{min}$.

The elapsed time is 2.5 half-lives, so neither two nor three successive halvings is sufficient:

$$A=1600\times2^{-30.0/12.0}=\boxed{283\,\mathrm{Bq}}.$$

**Check:** the result lies between 400 Bq after two half-lives and 200 Bq after three. The exponent is dimensionless because both times use minutes.

## From Mass to Activity {#mass-to-activity}

If the sample contains mass $m$ of the isotope and its molar mass is $M$, then:

$$n=\frac{m}{M},\qquad \boxed{N=\frac{m}{M}N_A}.$$

Use matching mass units in $m$ and $M$. The mass must be the mass of the isotope being followed, not a carrier liquid, container or whole detector. Here use $N_A=6.02\times10^{23}\,\mathrm{mol^{-1}}$.

### Example 2: choose the quantity before the equation {#example-2-mass}

A sample contains $1.20\times10^{-13}\,\mathrm{kg}$ of a single radioactive isotope with molar mass $0.0600\,\mathrm{kg\,mol^{-1}}$ and half-life $8.00\,\mathrm h$. Find its initial number of nuclei and activity.

First convert the isotope mass to a number of nuclei:

$$N_0=\frac{1.20\times10^{-13}}{0.0600}(6.02\times10^{23})=\boxed{1.20\times10^{12}}.$$

Activity in Bq requires seconds:

$$\lambda=\frac{\ln2}{8.00\times3600}=2.4068\times10^{-5}\,\mathrm{s^{-1}}.$$

$$A_0=\lambda N_0=\boxed{2.90\times10^7\,\mathrm{Bq}}.$$

Use the unrounded number of nuclei in the final multiplication. A large activity does not imply a large mass: activity also depends on the half-life. Do not use the mass itself as $N$.

## Counting and Background {#counting-and-background}

**Try first:** a detector records 600 counts in 60 s with a source present. A separate background run gives 120 counts in 240 s. Can you subtract 120 directly from 600 to find the source contribution? Explain before calculating.

<details markdown="1">
<summary>Check your reasoning</summary>

The runs have different durations. Compare **rates**: the total rate is 10 counts per second and the background rate is 0.50 counts per second. The estimated source contribution is 9.5 counts per second. This is a detected count rate, not automatically the source activity.

</details>

A detector records only some emissions. Let $C_{\text{total}}$ be the counts during a source run of duration $\Delta t$, and $C_b$ the counts during a background run of duration $\Delta t_b$:

$$r_b=\frac{C_b}{\Delta t_b},\qquad r=\frac{C_{\text{total}}}{\Delta t}-r_b.$$

Here $r$ estimates the detected source count rate after background subtraction. With fixed source–detector geometry, absorption, detector response and emission yield, the corrected count rate is proportional to activity. That is sufficient to track its fractional change and determine a half-life.

<details markdown="1">
<summary>Further understanding: converting count rate to absolute activity</summary>

If the effective detection fraction is known and fixed, use:

$$r=\varepsilon A.$$

The effective detection fraction $\varepsilon$ includes those fixed factors. A corrected count rate can therefore track the **fractional change** of activity without telling us the absolute activity. To find $A$ itself, we need $\varepsilon$ or an equivalent calibration.

</details>

<img src="/assets/img/physics-decay-measurement.svg" alt="Measurement model: undecayed nuclei give activity through A equals lambda N. Only a fixed fraction of emissions contributes to detected source count rate. Background is added to this rate; counts are accumulated over the recording interval. Divide counts by duration before subtracting background rate." width="400" height="500" data-lazy-ignore="true">

**Keep fixed:** the isotope and sample position, source–detector distance, absorbers, detector settings and relevant background conditions. Moving the source changes detection geometry; it does not demonstrate a change in the isotope's decay constant. Very high count rates can also invalidate a detector's simple proportional-response assumption.

These are principles for interpreting data. Any physical source handling must follow the school's approved apparatus and teacher-supervised radiation procedures; this webpage and its constructed records do not constitute a completed practical.

### Example 3: background runs need not have the same duration {#example-3-background}

*Further application: use a supplied calibration to estimate absolute activity.*

A detector records 720 counts in 60 s with a source present and 300 background counts in 300 s. The effective detection fraction is 0.20. Estimate the source activity, assuming it changes negligibly during each run.

$$r_b=\frac{300}{300}=1.0\,\mathrm{s^{-1}}.$$

$$r=\frac{720}{60}-1.0=11\,\mathrm{s^{-1}}.$$

$$A=\frac{r}{0.20}=\boxed{55\,\mathrm{Bq}}.$$

The background correction in the 60 s source run is an **expected** 60 counts, not the separate run's 300 counts. Individual background counts fluctuate; subtraction estimates the source contribution rather than identifying which particular counts were background.

## Decay Curves and Log Graphs {#decay-graphs}

For a single isotope, $N$ and $A$ fall towards zero with negative gradients that become less negative. To estimate half-life on a decay curve, choose a level and half that level and read the time separation; repeat at another usable part of the curve. With uncorrected count rate, halve the **height above background**, not the total height above zero.

For a positive corrected count rate with fixed detection conditions, choose a fixed reference rate $r_{\text{ref}}$, for example $1\,\mathrm{s^{-1}}$:

$$y=\ln\left(\frac{r}{r_{\text{ref}}}\right)=\ln\left(\frac{r_0}{r_{\text{ref}}}\right)-\lambda t.$$

The logarithm acts on a dimensionless ratio. A graph of $y$ against $t$ has:

$$m=-\lambda,\qquad \boxed{T_{1/2}=-\frac{\ln2}{m}}.$$

Use two widely separated points on a justified best-fit line, not two adjacent noisy readings. Changing the fixed reference rate shifts the intercept without changing the gradient. The intercept need not be zero.

<details markdown="1">
<summary>Further understanding: a different logarithm base</summary>

If base-10 logarithms are used instead:

$$m_{10}=-\frac{\lambda}{\ln10}.$$

Do not substitute a base-10 gradient into the natural-log formula unchanged. A zero or negative corrected rate has no real logarithm; investigate its uncertainty and background estimate rather than inventing a small positive value.

</details>

### Reading the graphs: a worked demonstration {#graph-walkthrough}

*Self-written ideal model; these curves are constructed, not measured.*

The two panels below describe the same single-isotope source. Its initial activity is $A_0=800\,\mathrm{Bq}$. The lower panel uses the dimensionless ratio $A/A_0$.

<img src="/assets/img/physics-decay-graphs.svg" alt="Worked demonstration of one ideal source: activity falls from 800 to 400 to 200 Bq at 0, 40 and 80 s. Equal half-height intervals are marked on the upper curve. Below, natural log of activity divided by initial activity is a straight line; a triangle spans 0 to 80 s and 0 to minus 1.386." width="460" height="720" data-lazy-ignore="true">

On the upper curve, 800 to 400 Bq takes 40 s; 400 to 200 Bq takes another 40 s. Equal time intervals halve the remaining activity even though the absolute decreases differ.

On the lower line, choose well-separated points and keep the gradient's sign:

$$m=\frac{-1.386-0}{80-0}\approx-0.0173\,\mathrm{s^{-1}}.$$

$$T_{1/2}=-\frac{\ln2}{m}\approx\boxed{40\,\mathrm s}.$$

The two methods agree. The gradient unit is inverse seconds because the logarithm is dimensionless; it is not Bq per second. The zero intercept here follows from choosing $A_0$ as the reference, not from a rule that all log graphs pass through the origin.

### Checkpoint: read an unfamiliar pair of graphs {#checkpoint-decay-graphs}

*Self-written; constructed teaching curves.*

The upper graph shows total detector count rate, including constant background of 4.0 counts per second. The lower graph shows the natural logarithm of the background-corrected source rate divided by a reference rate of 1 count per second. Detection conditions are fixed.

<img src="/assets/img/physics-decay-graph-practice.svg" alt="Two graphs for an independent reading task. The upper panel plots total count rate against time with a horizontal background line at 4 counts per second. The lower panel plots natural log of corrected rate divided by reference rate against time. Both panels have labelled axes and grids; no half-life or gradient is supplied." width="460" height="720" data-lazy-ignore="true">

1. Estimate the half-life from the upper curve. State the two total-rate levels you used and explain the background correction.
2. Choose two widely separated points on the lower line. Estimate its gradient with a unit, then calculate a half-life and compare the two estimates.
3. A student halves the initial total rate without accounting for background. Predict whether the resulting half-life is too short or too long, and explain.

<details markdown="1">
<summary>Hint: halve the source contribution</summary>

Subtract the horizontal background level before deciding what half the source contribution means. On the lower graph, the vertical change is dimensionless and the horizontal change is a time.

</details>

<details markdown="1">
<summary>Graph feedback</summary>

The initial total rate is 28 counts per second, so the source contribution is 24. Half that contribution is 12, giving a total rate of 16 counts per second. The curve reaches this near 50 s. A further fall from 16 to 10 counts per second takes another 50 s: the source contribution halves from 12 to 6.

For example, the lower line passes near $(0,3.18)$ and $(100,1.79)$:

$$m\approx\frac{1.79-3.18}{100-0}=-0.0139\,\mathrm{s^{-1}}.$$

$$T_{1/2}\approx\frac{\ln2}{0.0139}\approx\boxed{50\,\mathrm s}.$$

Allow for graph-reading precision; the agreement matters more than the last digit. Halving 28 to 14 counts per second waits until the source contribution is 10 rather than 12, so it takes too long. The lower line's nonzero intercept is consistent with the chosen reference rate.

</details>

### Why background changes the apparent half-life {#background-bias}

The uncorrected rate is the source contribution **plus** background. As the source weakens, background becomes a larger fraction of the total. A log plot of the uncorrected rate bends and flattens, so a single-exponential fit typically gives a decay constant that is too small and a half-life that is too long.

Repeating and extending counts can reduce random sampling variation, but cannot remove a persistent background bias or changing geometry. Low corrected rates have especially large fractional uncertainty because they are differences of fluctuating counts. Excluding a point requires a measurement-based reason, not merely that it spoils a straight line.

## Data Investigation: Build the Decay Graph {#data-decay-records}

*Self-written; constructed teaching data, not measurements from a completed experiment.*

A detector stays in the same position relative to a single-isotope source. Each source run lasts 10 s. Under the same background conditions, a separate 600 s run without the source gives 120 counts. Use the midpoint of each recording interval for the time coordinate.

| Recording interval / s | Midpoint / s | Total counts |
| --- | --- | --- |
| 0–10 | 5 | 102 |
| 30–40 | 35 | 73 |
| 60–70 | 65 | 52 |
| 90–100 | 95 | 37 |
| 120–130 | 125 | 27 |
| 150–160 | 155 | 20 |

**Core task:**

1. Calculate the background rate and each corrected source count rate. State the unit and explain why a count rate is not automatically an activity in Bq.
2. Plot a decay curve and choose a transformed graph to test the single-exponential model. Show your line, gradient and half-life estimate; give the gradient's unit.
3. In English, explain how random individual decays can produce an approximately stable half-life for a large sample. Identify one change to the measurement conditions that could spoil the model test without changing the isotope's decay constant.

<details markdown="1">
<summary>Hint 1: identify what was measured</summary>

Divide each count by its own duration first. The separate background run is much longer than a source run. You need one background **rate**, not a subtraction of 120 from every row.

</details>

<details markdown="1">
<summary>Hint 2: choose axes and a check</summary>

Subtract background before taking logarithms. Use a dimensionless rate ratio, plot it against the midpoint time and relate the gradient to the decay constant. Check whether the untransformed rates roughly halve in equal time intervals.

</details>

<details markdown="1">
<summary>Analysis and feedback</summary>

$$r_b=\frac{120}{600}=0.200\,\mathrm{s^{-1}}.$$

The corrected rates are 10.0, 7.1, 5.0, 3.5, 2.5 and 1.8 counts per second. With fixed effective detection fraction, they are proportional to activity; without its value they do not determine the absolute activity.

A natural-log least-squares fit to these constructed readings gives:

$$m\approx-0.01149\,\mathrm{s^{-1}},\qquad T_{1/2}\approx60.3\,\mathrm s.$$

A sensible hand-drawn fit gives approximately 60 s. The rate falls from 10.0 to 5.0 between 5 s and 65 s, then to 2.5 by 125 s, providing a useful check. Software-fit digits are not required precision for a hand-drawn graph.

An acceptable English mechanism is: “Each surviving nucleus has the same constant probability of decay per unit time. With many nuclei, fluctuations are small relative to the number present, so the population follows an approximately reproducible exponential decrease.” Moving the source or changing absorption can change detected rates without changing the half-life.

**Diagnose the error:** a negative half-life usually means the sign of the fitted gradient was mishandled. A longer value when background is ignored has a physical cause. Treating all counts as source decays confuses the measurement with the nuclear process.

</details>

### Challenge: background and recording intervals {#challenge-decay-records}

*Self-written; further task using the same constructed records after the core task.*

1. Fit the uncorrected rates instead. Compare the half-life with your corrected result and explain why the later points are more affected by background and relative fluctuations.
2. Explain why interval midpoints are used. Does a rate averaged over 10 s equal the instantaneous rate at that midpoint? What must be reconsidered if the recording durations differ?

<details markdown="1">
<summary>Challenge feedback</summary>

Fitting the uncorrected rates gives about 63.5 s, longer than the corrected 60.3 s. Background makes later total rates too high relative to the source alone. Long background runs improve the estimate but do not remove fluctuations; low corrected rates are differences of fluctuating counts and have larger fractional uncertainty.

Each reading samples an interval. Its midpoint is a representative time, not a claim that every count occurred there. An interval-averaged exponential is not exactly its midpoint instantaneous value. With constant decay constant, fixed detection conditions and equal recording durations, their ratio is the same for every row, so the exponential gradient is preserved. Unequal durations require renewed attention to averaging, not merely relabelling time coordinates. You are not required here to derive that averaging factor.

</details>

### Retry with Different Recording Conditions {#retry-counting}

*Self-written; constructed teaching data. Further application after the core task: check a weak source contribution before taking logarithms.*

A new background run gives 150 counts in 300 s. A source run now lasts 20 s and gives 46 counts. Find the corrected count rate. A later 20 s source run gives 8 counts: can its corrected rate be used on a real logarithmic graph? Explain what should be investigated instead.

<details markdown="1">
<summary>Retry feedback</summary>

$$r_b=\frac{150}{300}=0.50\,\mathrm{s^{-1}}.$$

$$r=\frac{46}{20}-0.50=\boxed{1.8\,\mathrm{s^{-1}}}.$$

For the later run:

$$r=\frac{8}{20}-0.50=-0.10\,\mathrm{s^{-1}}.$$

This negative estimate is not negative physical activity. The source contribution is too weak to distinguish reliably from fluctuations and background with this record. Its real logarithm is undefined. Check background stability and uncertainties, and collect more suitable data under unchanged conditions; do not silently replace it by a positive number or claim that the source has stopped decaying.

</details>

## Practice {#practice}

Keep hints and solutions closed until you have attempted each question. Questions 1, 2 and 5 are self-written. Questions 3–4 are adapted as identified below; the answers and feedback are authored for this lesson, not an official mark scheme. First attempt Questions 1–4; the calibration part of Question 1 and the base-10 graph in Question 5 are further applications.

### Question 1: measurement or nuclear change? {#question-1}

A source run gives 94 counts in 20 s. Background gives 210 counts in 300 s, and the activity changes negligibly during the run. Find the corrected source count rate. The source is then moved farther from the detector and the corrected rate halves. Has one half-life necessarily elapsed? Explain. Further application: the effective detection fraction for the original position is 0.25; estimate the original activity.

<details markdown="1">
<summary>Hint</summary>

Separate count rates, detection fraction and activity. Decide whether the measurement conditions were unchanged.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$r=\frac{94}{20}-\frac{210}{300}=\boxed{4.0\,\mathrm{s^{-1}}}.$$

No. Moving the source changes the detected fraction. A halved corrected rate only tracks halved activity if the relevant detection conditions stay fixed.

For the further application:

$$A=\frac{94/20-210/300}{0.25}=\boxed{16\,\mathrm{Bq}}.$$

Check: the detected source contribution is 4.0 counts per second, smaller than the activity because only one quarter is detected.

</details>

### Question 2: choose a method {#question-2}

A single-isotope source initially has activity $4.8\,\mathrm{kBq}$ and half-life $6.0\,\mathrm h$. How long does it take for its activity to fall to $0.70\,\mathrm{kBq}$? Explain why rounding the time to a whole number of half-lives is unsuitable.

<details markdown="1">
<summary>Hint</summary>

Find the remaining fraction before taking a logarithm. Both activities use the same unit.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$t=\frac{6.0}{\ln2}\ln\left(\frac{4.8}{0.70}\right)\approx\boxed{17\,\mathrm h}.$$

The unrounded time is about 16.7 h. Check: after 12 h the activity is 1.2 kBq, and after 18 h it is 0.60 kBq. The threshold lies between these values, so neither two nor three whole half-lives gives the specified activity.

</details>

### Question 3: activity is a rate {#question-3}

*Adapted from OxfordAQA 9630 PH03, January 2020, Q26; QP p.36 and MS p.9 read. The original multiple-choice format is removed and a further task is added.*

A gallium-67 sample has initial activity $37\,\mathrm{MBq}$ and half-life $78\,\mathrm h$. Determine its initial number of undecayed gallium-67 nuclei. Then find the activity after $117\,\mathrm h$, assuming no replenishment, and state the value and sign of $\mathrm dN/\mathrm dt$ then. Explain why dividing activity by elapsed time does not give the number of nuclei remaining.

<details markdown="1">
<summary>Hint</summary>

Use seconds when connecting Bq to the decay constant. Use a dimensionless fraction of half-lives for the later activity.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\lambda=\frac{\ln2}{78\times3600}\approx2.47\times10^{-6}\,\mathrm{s^{-1}}.$$

$$N_0=\frac{37\times10^6}{\lambda}\approx\boxed{1.5\times10^{13}}.$$

$$A=37\times2^{-117/78}\approx\boxed{13\,\mathrm{MBq}}.$$

$$\frac{\mathrm dN}{\mathrm dt}=-A\approx-1.3\times10^7\,\mathrm{s^{-1}}.$$

The later time is 1.5 half-lives; the result lies between half and one quarter of the initial activity. Dividing a decay rate by time has units of inverse time squared, not a number of nuclei. Use the isotope's decay constant to connect activity to its undecayed population.

</details>

### Question 4: what mass has changed? {#question-4}

*Adapted from OxfordAQA 9630 PH03, June 2024, Q7; QP p.23 and MS p.19 read. The detector-lifetime statement is omitted; the tasks below use the given activity endpoints without specifying an elapsed time.*

The activity of americium-241 in a source decreases from $39\,\mathrm{kBq}$ to $32\,\mathrm{kBq}$. Its half-life is $432\,\mathrm y$ and its molar mass is $0.241\,\mathrm{kg\,mol^{-1}}$. Use a year of 365 days and $N_A=6.02\times10^{23}\,\mathrm{mol^{-1}}$. Calculate the decrease in mass of **undecayed Am-241**. Explain why this is not the same as the decrease in total mass of a detector containing it. Suggest why a radioactive daughter might contribute little activity even though it is not stable.

<details markdown="1">
<summary>Hint</summary>

The same parent decay constant applies at both endpoints. Convert the change in activity to a change in the number of parent nuclei, then to their isotope mass. Distinguish “long half-life” from “stable”.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\lambda=\frac{\ln2}{432\times365\times24\times3600}\approx5.09\times10^{-11}\,\mathrm{s^{-1}}.$$

Let both differences denote positive decreases:

$$\Delta N=\frac{(39-32)\times10^3}{\lambda}\approx1.38\times10^{14}.$$

$$\Delta m=\frac{\Delta N}{6.02\times10^{23}}(0.241)\approx\boxed{5.5\times10^{-11}\,\mathrm{kg}}.$$

This is the mass of parent isotope transformed, not the total mass of material that leaves the detector. Daughter nuclei and other decay products must be considered in the whole-system mass account. It is not a binding-energy or mass-defect calculation.

A daughter with a much longer half-life has a much smaller decay constant and can contribute little activity for the number present. “Radioactive” does not imply high activity, and “more stable” does not mean perfectly stable. This is one possible explanation, not a claim about every radioactive daughter.

</details>

### Question 5: inspect the representation {#question-5}

*Further application: distinguish logarithm bases.*

A graph of $\log_{10}(r/r_{\text{ref}})$ against time in seconds has gradient $-0.0040\,\mathrm{s^{-1}}$ under fixed detection conditions. Estimate the half-life. A student instead uses the negative of this gradient as the decay constant. Identify the error and state one test of the single-exponential interpretation beyond obtaining a fitted line.

<details markdown="1">
<summary>Hint</summary>

Check the logarithm's base. A fitted line alone cannot establish that the detector geometry and background treatment were suitable.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\lambda=0.0040\ln10\approx0.00921\,\mathrm{s^{-1}}.$$

$$T_{1/2}=\frac{\ln2}{0.0040\ln10}\approx\boxed{75\,\mathrm s}.$$

The student's rule applies to a natural-log graph, not a base-10 graph. Check residuals or successive half-height intervals, check background independently and verify fixed geometry. Agreement supports the model over the tested conditions; it does not prove that every possible alternative has been excluded.

</details>

## Quick Reference {#quick-reference}

| Quantity or task | Relation and condition |
| --- | --- |
| Parent nuclei remaining | $N=N_0e^{-\lambda t}$; one isotope, constant decay constant, no replenishment |
| Positive activity | $A=\lambda N$; Bq requires a decay constant in $\mathrm{s^{-1}}$ |
| Half-life | $T_{1/2}=\ln2/\lambda$; halving of the remaining parent population |
| Isotope mass to nuclear population | $N=(m/M)N_A$; consistent mass units |
| Corrected detected count rate | $r=C_{\text{total}}/\Delta t-r_b$; subtract rates |
| Absolute activity from a count rate | $A=r/\varepsilon$; effective detection fraction known and fixed |
| Natural-log rate graph | Gradient $m=-\lambda$; positive corrected rates and fixed detection conditions |

Before moving on, check that you can distinguish nuclei, activity, counts and count rate; explain randomness and constant decay probability; choose consistent units; estimate a half-life from both graph types; and diagnose background or geometry bias. Reattempt a data-processing task with changed recording durations after a break, using an English explanation as well as a number.

[Previous lesson: Capacitor Charge and Discharge](/alevel/a2-physics/capacitor-charge-and-discharge/) · [PH03 course index](/alevel/a2-physics/) · [Next topic: Magnetic Fields reference notes](/alevel/a2-physics/quick-reference/#5--magnetic-fields-310)

<details markdown="1">
<summary>Sources and scope</summary>

OxfordAQA International AS and A-level Physics **9630**, PH03 Unit 3, specification **3.9.2**. On 21 October 2026 the [qualification page](https://www.oxfordaqa.com/qualification/international-as-and-a-level-physics-9630/) linked to the [Version 4.4 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf), printed p.25 / PDF p.24. The [Version 5.1 official file](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-physics-specification.pdf), printed p.26 / PDF p.25, has the same relevant requirements. The inconsistent version labels are not evidence of a confirmed specification change.

Question 3 is adapted from PH03 January 2020 Q26 (QP p.36, MS Version 1.0 Final p.9); Question 4 from PH03 June 2024 Q7 (QP p.23, MS Version 1.0 Final p.19). The question-paper and mark-scheme copies supplied for this project were read together and selected answers independently recomputed. The original Q7's stated lifetime and rounded activity endpoints are not an exact exponential match when all central values are treated as exact; this adaptation omits the lifetime and uses the given endpoints explicitly. It is not an unmodified official question.

Supplementary textbook reference: Jim Breithaupt, *International A Level Physics*, Oxford University Press, first published 2016, ISBN 978-0-19-837603-3, section 19.5, printed pp.350–352 / PDF pp.366–368 in the supplied copy. Those pages and their figures were read; they support the explanations but do not replace the specification or mark schemes. The lesson's probability-model table and both graph pairs are self-written teaching material.

Background correction and controlled geometry connect AS radiation knowledge to PH03 exponential analysis. Fixed-interval averaging, detector calibration and the base-10 conversion support interpretation; they do not introduce another numbered required practical. Mean lifetime is not treated here as a separately specified requirement. PH04 binding energy, fission and fusion are outside this lesson. Constructed data, web preparation and a successful page build do not establish completion of a physical practical or verified student learning.

</details>
