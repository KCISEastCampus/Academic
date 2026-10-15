---
title: Data skills — measurements, variation and inference
layout: subjects
mathjax: true
grade: a2
subject: a2-biology
study_page: true
toc_headings: 'h2, h3'
lang: en
permalink: /alevel/a2-biology/data-skills/
---

[A2 Biology](/alevel/a2-biology/) · [Paper 5: Practical and synoptic skills](/alevel/a2-biology/paper-5/) · <a href="/zh/alevel/a2-biology/data-skills/" hreflang="zh-CN">中文</a>

A number is useful only when you know what was measured, which units it has, and what inference the sampling permits. Learn to use [scale bars](#scale), calculate [rates](#rates) and [percentages](#percentages), interpret [SD, SE and confidence intervals](#variation), and choose [Spearman](#spearman) or [chi-squared](#chi-squared) for a stated question.

Before starting, review ratios, mean and square roots, [microscopy](/alevel/a2-biology/prerequisites/#microscopy) and [experimental units](/alevel/a2-biology/experimental-design/#design). This page teaches new statistical ideas directly before asking you to use them.

Every numerical dataset and exercise below is **Self-written / 自拟题**, using constructed data rather than measurements from a real study. Solutions are teaching feedback, not official mark schemes. The content supports practical preparation and data analysis.

## Scale bars survive resizing {#scale}

Magnification is image length divided by actual length, with both lengths in the same unit. If you enlarge an image on a screen, its displayed magnification changes. A printed claim such as “×400” cannot be transferred to an arbitrarily resized web image. A scale bar embedded in the same image enlarges with the object, so their **ratio** remains valid, provided both are scaled together without distortion.

$$L_{\mathrm{actual}}=\frac{L_{\mathrm{object,image}}}{L_{\mathrm{bar,image}}}\times L_{\mathrm{bar,actual}}.$$

![Original teaching schematic: a cell outline has a length bracket from A to B. A separate horizontal scale bar represents 20 micrometres. The object and bar belong to the same image and scale together.](/assets/images/a2-biology/bl05-scale-bar.svg)

*Schematic cell outline, not a micrograph or a claim about a particular cell type. The A–B bracket identifies the measured axis. This is a worked illustration, not the independent question below.*

**Self-written / 自拟题 · Worked example.** In the drawing coordinates, A–B spans 300 units and the bar spans 100 units. The actual length is 300/100 × 20 = 60 µm. At another zoom level, 180 pixels and 60 pixels still give 60 µm. Pixels cancel; a screen ruler is unnecessary. Never compare object length from one zoom level with bar length from another.

For an optical microscope, calibrate the eyepiece graticule against a stage micrometer at the objective used. If 10 eyepiece divisions correspond to 25 µm, one division represents 2.5 µm; an object spanning 16 divisions is 40 µm. Recalibrate when changing the objective. A drawing can have an accurate scale while still lacking resolution to distinguish two adjacent structures. Increasing displayed size does not recover missing detail.

<!-- task:scale-transfer -->
**Self-written / 自拟题 · Independent scale task**

In a single resized image, a structure spans 165 pixels and a scale bar labelled 40 µm spans 55 pixels. Calculate the actual length in µm and mm. A student doubles the displayed image width and claims that the actual structure is now twice as long. Explain the error.
<!-- /task:scale-transfer -->

<details markdown="1">
<summary>Hint — divide before converting units</summary>

Use lengths measured at the same zoom. There are 1000 µm in 1 mm.

</details>

<details markdown="1">
<summary>Solution — scale task</summary>

The ratio is 165/55 = 3, so the actual length is 120 µm = 0.120 mm. Doubling the display doubles both image lengths, leaving their ratio and the actual structure unchanged. Only the displayed magnification changes.

</details>

## Rates: name the numerator and denominator {#rates}

A rate is a change divided by elapsed time. “Respiration rate” needs an operational definition, such as oxygen volume consumed per gram per hour. A mass-specific rate allows comparison of sample sizes but does not guarantee equal age, species or metabolic state. First check what the apparatus measures: a gas-volume change without CO₂ absorption is not automatically oxygen uptake. See [respiration](/alevel/a2-biology/respiration/) and [RP8](/alevel/a2-biology/experimental-design/#rp8).

For a circular capillary with internal radius $r$ and fluid displacement $l$:

$$\Delta V=\pi r^2l,\qquad R=\frac{\Delta V}{m\Delta t}.$$

The radius and displacement must share length units. A length in mm produces volume in mm³. There are 1000 mm³ in 1 cm³; cubed units do not use the same conversion factor as length.

**Self-written / 自拟题 · Worked example.** A CO₂-absorbing, equilibrated, leak-free respirometer shows 24 mm displacement in 5 min, with internal radius 0.25 mm and 0.40 g of seeds; control drift is negligible.

$$\Delta V=\pi(0.25)^2(24)=4.7124\ \mathrm{mm^3}.$$

$$R=\frac{4.7124}{0.40\times5}\times60=141.37\ \mathrm{mm^3\,g^{-1}\,h^{-1}}=0.14137\ \mathrm{cm^3\,g^{-1}\,h^{-1}}.$$

The factor 60 converts a per-minute rate to a per-hour rate. Keep extra digits during calculation; an appropriately rounded result here is 0.14 cm³ g⁻¹ h⁻¹, given the input precision. Do not use the diameter in place of the radius.

For a time series, inspect the graph before choosing an interval. A straight fitted region gives an approximately constant rate; a tangent gives an instantaneous rate on a curve. An endpoint-to-endpoint gradient is an average over that interval. Plot the independent variable on the horizontal axis with units, and do not assume a straight line must pass through zero. For categorical treatments, unconnected summaries may be more meaningful than a continuous curve. On logarithmic axes, equal spacing means equal ratios, and zero needs a separate control display.

<!-- task:rate-transfer -->
**Self-written / 自拟题 · Independent rate task**

A valid oxygen-uptake measurement uses a capillary of internal diameter 0.80 mm. The fluid moves 10 mm in 4.0 min for 0.25 g of seeds; control drift is negligible. Calculate the rate in cm³ g⁻¹ h⁻¹. Separately, an enzyme produces 0, 0.7, 1.4, 2.0 and 2.5 cm³ of oxygen at 0, 2, 4, 6 and 8 min. Compare the average rate over 0–8 min with the rate over the early linear region. State which better estimates the initial rate.
<!-- /task:rate-transfer -->

<details markdown="1">
<summary>Hint — keep the two measurements separate</summary>

Halve the capillary diameter, convert volume and time, then divide by mass. For the enzyme, compare the first two equal increments with later increments.

</details>

<details markdown="1">
<summary>Solution — rate task</summary>

$$R=\frac{\pi(0.40)^2\times10}{4.0\times0.25}\times\frac{60}{1000}=0.30159\ \mathrm{cm^3\,g^{-1}\,h^{-1}}.$$

Report about 0.30 cm³ g⁻¹ h⁻¹. The enzyme's average rate is 2.5/8 = 0.3125 cm³ min⁻¹; the 0–4 min slope is 1.4/4 = 0.35 cm³ min⁻¹. The early linear slope is the better estimate of initial rate from these readings. The exact instantaneous rate at zero is not known from a sparse time series.

</details>

## Percentages, proportions and graphs {#percentages}

Choose the baseline from the question before calculating. Percentage change uses the starting value; a proportion uses a specified total; an efficiency compares a useful output with a relevant input measured on the same basis.

$$\text{percentage change}=\frac{\text{final}-\text{initial}}{\text{initial}}\times100\%.$$

**Self-written / 自拟题 · Worked example.** A dry mass increase from 0.80 g to 1.00 g is 25%, not 20%: the baseline is 0.80 g. Survival rising from 40% to 50% is a rise of 10 **percentage points**, or 25% relative to the original survival proportion. An energy transfer of 200 kJ from an input of 800 kJ is 25% only when both values use compatible area/time and system boundaries; see [energy production](/alevel/a2-biology/energy-production/).

Check physical bounds: with positive starting mass and non-negative final mass, percentage mass change cannot be below −100%. A ratio of mass gained to starting mass is dimensionless; adding “per day” changes the definition and needs a time denominator. Do not silently repair implausible data by guessing a missing scaling factor.

<!-- task:percent-transfer -->
**Self-written / 自拟题 · Independent percentage task**

In a constructed experiment, survival is 30 out of 50 seedlings in treatment A and 36 out of 50 in treatment B. Calculate the difference in percentage points and the relative percentage increase in survival from A to B. A separate tissue sample changes from 1.60 g to 1.44 g. Calculate its percentage mass change and identify the denominator in each calculation.
<!-- /task:percent-transfer -->

<details markdown="1">
<summary>Hint — “relative to A” fixes the baseline</summary>

Calculate both survival proportions before comparing them; use initial tissue mass for the mass change.

</details>

<details markdown="1">
<summary>Solution — percentage task</summary>

Survival is 60% and 72%, using each treatment's 50 seedlings as its denominator. The difference is 12 percentage points. The relative increase is 12/60 × 100 = 20%, using A's survival percentage as the baseline; equivalently 6/30 × 100. Tissue change is −0.16/1.60 × 100 = −10%, using the initial mass, not the final mass.

</details>

## SD, SE and 95% confidence intervals {#variation}

The **population** is the set you want to describe; the **sample** is the set you measured. Define the units first: seedlings, independent pots or repeated readings give different information. The mean describes the centre but can conceal spread or outliers; the median is less affected by extreme values, and the range uses only the two extremes.

**Standard deviation (SD)** describes spread among observations. **Standard error of the mean (SE)** estimates how much the sample mean would vary between repeated independent samples from the population. SE is not the spread of individual seedlings. For independent observations under a common sampling model, using sample SD $s$:

$$\bar{x}=\frac{\sum x_i}{n},\qquad s=\sqrt{\frac{\sum(x_i-\bar{x})^2}{n-1}},\qquad SE=\frac{s}{\sqrt{n}}.$$

These three quantities have the same unit as the observations. The $n-1$ in sample variance allows for estimating the mean from the same sample. With similar SD, quadrupling independent sample size halves SE; it does not halve biological variation or correct a biased sampling method.

A **95% confidence interval (CI)** estimates uncertainty in a population mean. Under its sampling assumptions, about 95% of intervals constructed by the same method from repeated samples would contain the population mean. It does not mean 95% of individual observations lie inside, or that the null hypothesis has a 95% probability of being true.

For independent observations from an approximately normal population with unknown SD, a mean CI uses a Student's $t$ multiplier. Use the factor or method supplied by the question; deriving a $t$ test is not an additional course requirement here.

$$\text{95\% CI}=\bar{x}\pm t_{0.975,n-1}\,SE.$$

The familiar mean ± approximately 2SE is a large-sample approximation (normal multiplier 1.96). It is not exact for every sample size or distribution. Very small samples with strong skew or outliers need more care than mechanically applying either rule.

**Self-written / 自拟题 · Worked example.** Constructed growth increments for four independent seedlings are 2, 4, 4 and 6 mm. Assume a normal population is reasonable for this teaching example. The mean is 4 mm, and the squared deviations sum to 8 mm².

$$s=\sqrt{8/3}=1.633\ \mathrm{mm},\qquad SE=1.633/\sqrt4=0.8165\ \mathrm{mm}.$$

Using the supplied factor 3.182 for three degrees of freedom gives:

$$\text{95\% CI}=4\pm3.182(0.8165)\approx[1.40,6.60]\ \mathrm{mm}.$$

The wide CI reflects imprecise estimation of the mean from four independent observations. Calculating SE from 40 repeated ruler readings on these same four seedlings would not create 40 independent biological observations.

**Read error-bar captions before interpreting overlap.** SD bars describe spread; SE bars describe mean precision; CI bars depend on confidence level and method. Neither overlap nor non-overlap is a universal significance test. A comparison should account for sample size, independence, pairing and the relevant statistical model; a CI for a difference is not the same as comparing two separate mean CIs.

<!-- task:variation-transfer -->
**Self-written / 自拟题 · Independent uncertainty task**

A random sample of 25 independent seedlings has mean height 12.0 cm and sample SD 5.0 cm. Assuming the stated sampling model is appropriate, calculate SE and a 95% CI using the supplied multiplier 2.064. Explain what the CI estimates. A second group measures 25 leaves from one plant and uses n = 25 to claim equally precise evidence about variation among plants. Evaluate that claim.
<!-- /task:variation-transfer -->

<details markdown="1">
<summary>Hint — count independent units for the stated population</summary>

SE uses the square root of sample size, not sample size itself. Leaves from one plant do not sample 25 plants.

</details>

<details markdown="1">
<summary>Solution — uncertainty task</summary>

SE = 5.0/5 = 1.0 cm; the interval is 12.0 ± 2.064 cm, approximately 9.94–14.06 cm. It estimates the population mean height under the sampling assumptions, not the range containing 95% of seedlings. The second group has only one plant for an among-plant inference; leaf subsamples do not supply 25 independent plants. More plants and an analysis respecting the sampling hierarchy are needed.

</details>

## Spearman rank: association, including tied values {#spearman}

Use Spearman's rank correlation for paired observations when asking about a **monotonic association**: as one variable increases, the other tends to increase or tends to decrease, not necessarily along a straight line. Each row needs an appropriate independent observational unit. Inspect a scatterplot first: a U-shaped relationship may be strong while its Spearman coefficient is near zero. Correlation alone does not establish a causal mechanism.

Rank each variable separately in the same direction, for example smallest = 1. With **no ties**, the shortcut below applies; $d_i$ is the difference between the two ranks in row $i$ and $n$ is the number of pairs.

$$r_s=1-\frac{6\sum d_i^2}{n(n^2-1)}\quad\text{(no ties)}.$$

**Self-written / 自拟题 · Worked example, constructed data.** Six independently sampled plots provide nitrate concentration and seedling biomass; suppose the sampling makes the pairs independent.

| Plot | Nitrate / mg kg⁻¹ | Biomass / g | Nitrate rank | Biomass rank | Squared rank difference |
| --- | --- | --- | --- | --- | --- |
| A | 10 | 3 | 1 | 1 | 0 |
| B | 20 | 5 | 2 | 2 | 0 |
| C | 30 | 8 | 3 | 3 | 0 |
| D | 40 | 12 | 4 | 5 | 1 |
| E | 50 | 10 | 5 | 4 | 1 |
| F | 60 | 15 | 6 | 6 | 0 |

$$r_s=1-\frac{6(2)}{6(36-1)}=0.942857.$$

This is a strong positive rank association. To make a significance decision, state the null hypothesis of no association, the alternative (either direction here) and a preselected significance level such as 0.05. Use a suitable critical value/table for this sample size and test direction, or a valid exact/permutation method. In this no-tie example, under independent, exchangeable pairings there are 720 rank permutations; 12 have an absolute coefficient at least this large. The exact two-sided p is 12/720 ≈ 0.0167, so reject that null at 5%. Soil moisture or another variable could still explain the association; nitrate causation is not proved.

**Ties change the calculation.** Equal observations receive the mean of the ranks they occupy. For values 1, 2, 2, 4, the ranks are 1, 2.5, 2.5, 4. Do not break ties arbitrarily and do not insert these ranks into the no-ties shortcut as though it remained exact. The general Spearman coefficient is the Pearson correlation **of the ranks**, with average ranks for ties. This is a way to compute Spearman, not an extra requirement to study a separate Pearson testing course.

$$r_s=\frac{\sum(R_i-\bar R)(S_i-\bar S)}{\sqrt{\sum(R_i-\bar R)^2\sum(S_i-\bar S)^2}}.$$

**Self-written / 自拟题 · Tied-rank demonstration.** Pair x = 1, 2, 2, 4 with y = 1, 2, 3, 4. Both mean ranks are 2.5; the rank cross-product sum is 4.5, and the two squared-deviation sums are 4.5 and 5. Thus:

$$r_s=\frac{4.5}{\sqrt{4.5\times5}}=0.948683.$$

For significance with ties, use an explicitly suitable method, such as permutation of the observed pairs under the null, preserving the tied values. A no-ties critical table is not automatically valid. If either variable is constant, all its ranks are equal and the coefficient is undefined. A reported software p-value also needs its method checked, especially for small samples.

<!-- task:spearman-transfer -->
**Self-written / 自拟题 · Independent association task**

Four independent sample pairs have x values 2, 2, 5, 8 and y values 1, 3, 4, 7 in the same row order. Assign ranks to both variables. State how to calculate a valid Spearman coefficient and why the no-ties shortcut is inappropriate. A suitable test on a separate, larger dataset reports p = 0.03 for a preselected two-sided test. State the decision at 5% and explain why this does not prove causation.
<!-- /task:spearman-transfer -->

<details markdown="1">
<summary>Hint — tied observations occupy two rank positions</summary>

Average the first and second ranks for x. The p-value is conditional on a null model, not a causal probability.

</details>

<details markdown="1">
<summary>Solution — association task</summary>

The x ranks are 1.5, 1.5, 3, 4; y ranks are 1, 2, 3, 4. Correlate these rank arrays using the general formula, giving approximately 0.9487. The no-ties simplification assumes complete, untied ranks, which x lacks. For the separate dataset, 0.03 < 0.05 gives rejection of the stated no-association null, provided the test assumptions hold. Confounding, reverse direction or other explanations remain possible; statistical association is not experimental evidence of the proposed cause.

</details>

## Chi-squared: fit to a model and independence {#chi-squared}

A chi-squared test compares **observed counts** $O$ with **expected counts** $E$ under a null model. Do not substitute percentages, heights or group means for the original counts. Categories must be mutually exclusive and each independent observation counted once. Expected counts must be sufficiently large for the chi-squared approximation; for the small teaching tables here require each expected count to be at least 5. If this fails, seek an appropriate exact method or more data; do not merge biologically different categories after seeing results just to secure a preferred conclusion.

$$\chi^2=\sum\frac{(O-E)^2}{E}.$$

### Goodness of fit to a genetic ratio {#goodness-of-fit}

Specify a genetic model **before** inspecting deviations. For a 1:2:1 model, expected counts are total count multiplied by 1/4, 1/2 and 1/4. The null says the population proportions follow that model; the alternative says they differ. See [inheritance](/alevel/a2-biology/inheritance/) for deriving the ratio from gametes.

**Self-written / 自拟题 · Worked fit, constructed counts.** In a sample of 60 independently classified offspring, observed phenotypes are 18, 26 and 16. Expected counts are 15, 30 and 15.

$$\chi^2=\frac{(18-15)^2}{15}+\frac{(26-30)^2}{30}+\frac{(16-15)^2}{15}=1.20.$$

For $k$ categories with fixed probabilities and no parameters fitted from these observations, $df=k-1$, so df = 2. One count is constrained by the known total, which explains subtracting one. Fitting model parameters from the same data can reduce df further; do not apply the simple rule blindly. At 5%, the supplied df = 2 critical value is 5.991. Since 1.20 < 5.991, **do not reject** the ratio model (p ≈ 0.549). The deviation is not sufficiently unusual under this model to reject it at 5%. This does not prove the model, exclude alternative ratios or establish that all departures are “caused by chance”.

### Independence between two categorical variables {#independence}

This is a different question: are two categorical variables associated? For example, is symptom presence associated with treatment group? Under the independence null, expected counts come from the row and column totals, not a Mendelian ratio.

$$E_{ij}=\frac{(\text{row total})_i(\text{column total})_j}{\text{grand total}},\qquad df=(r-1)(c-1).$$

**Self-written / 自拟题 · Worked independence, constructed counts.** Eighty independent seedlings each receive one randomly assigned treatment. Classify each once after a fixed period. Counts are shown below; expected values are in parentheses.

| Treatment | Symptom present | Symptom absent | Total |
| --- | --- | --- | --- |
| A | 30 (25) | 10 (15) | 40 |
| B | 20 (25) | 20 (15) | 40 |
| Total | 50 | 30 | 80 |

$$\chi^2=\frac{25}{25}+\frac{25}{15}+\frac{25}{25}+\frac{25}{15}=5.3333,\qquad df=(2-1)(2-1)=1.$$

Using the ordinary Pearson chi-squared statistic without a continuity correction, the supplied 5% critical value for df = 1 is 3.841; reject independence (p ≈ 0.0209). Symptoms occur in 75% of A and 50% of B, so report this effect size as well as the test. Random allocation and controlled conditions can strengthen a causal inference; the chi-squared calculation itself does not check whether allocation, blinding or independence were actually achieved. If all A seedlings shared one treatment tray, the 40 seedlings would not automatically be 40 independent treatment units.

### Independent task: choose and test the model {#chi-model-task}

<!-- task:chi-transfer -->
**Self-written / 自拟题 · Independent model task**

A pre-specified genetic model predicts phenotype proportions 1:2:1. A valid independent sample gives counts 36, 44 and 20. Calculate expected counts, chi-squared and degrees of freedom. Use the supplied 5% critical value 5.991. State a conclusion in context without claiming that a rejected model proves a particular alternative mechanism. Explain why a test of association between treatment group and survival would require a different way of calculating expected counts.
<!-- /task:chi-transfer -->

<details markdown="1">
<summary>Hint — check the total and null model first</summary>

There are 100 observations. The three fixed probabilities determine three expected counts; an independence table instead uses its margins.

</details>

<details markdown="1">
<summary>Solution — model task</summary>

$$E=(25,50,25),\qquad\chi^2=\frac{121}{25}+\frac{36}{50}+\frac{25}{25}=6.56,\qquad df=2.$$

All expected counts exceed 5. Since 6.56 > 5.991, reject the 1:2:1 ratio model at 5% (p ≈ 0.0376). The counts provide evidence of departure from that model under the stated sampling assumptions; they do not identify whether viability, scoring, linkage or another mechanism explains it. A treatment–survival independence test uses each row total × column total / grand total and df based on rows and columns, not a supplied genetic ratio.

</details>

## What p says — and how to choose an analysis {#inference}

A p-value is the probability, **assuming the null model and its assumptions**, of a test statistic as extreme as or more extreme than the observed one. “Extreme” is defined by the test and its preselected alternative. It is not the probability that the null is true, that a result is “just chance”, or that another study will replicate it. A significance level of 0.05 is a decision threshold controlling the long-run false-rejection rate under the null, not a guarantee that each conclusion is 95% correct.

Report the observed effect, variation, sample units, statistical decision and biological limitation together. A tiny effect can be statistically significant with a large sample. Failure to reject can reflect limited power or noisy measurement; it does not establish equality.

| Your question | Suitable starting point | Check before interpreting |
| --- | --- | --- |
| How variable are independent observations? | SD and an informative graph | Distribution, outliers, units |
| How precisely is a population mean estimated? | SE and a stated CI method | Independent sample size, sampling and distribution assumptions |
| Do paired measurements show monotonic association? | Spearman ranks | Pair independence, scatterplot, ties, test direction |
| Do counts fit a specified genetic ratio? | Chi-squared goodness of fit | Predefined probabilities, expected counts and df |
| Are two categorical variables associated? | Chi-squared independence | Marginal totals, independent units, expected counts and df |

<!-- task:inference-retry -->
**Self-written / 自拟题 · Diagnostic retry**

A report says, “The two mean ± SD bars overlap, so the means are equal. Our p-value of 0.08 proves that the null hypothesis has an 8% probability of being true.” Identify both errors and write a corrected interpretation at a preselected 5% significance level, assuming the reported test was appropriate. State one additional piece of information needed to judge the biological importance of the comparison.
<!-- /task:inference-retry -->

<details markdown="1">
<summary>Hint — spread, precision and a conditional probability differ</summary>

SD bars summarise observations. Neither a visual overlap rule nor a p-value assigns a probability to the null hypothesis itself.

</details>

<details markdown="1">
<summary>Solution — diagnostic retry</summary>

Overlapping SD bars do not establish equal population means. With p = 0.08 > 0.05, do not reject the stated null at 5%; the evidence is insufficient for rejection under the chosen test, not proof of equality. Under the null and test assumptions, the probability of a statistic at least as extreme as observed is 0.08. Report the estimated mean difference and its units, preferably its uncertainty, plus relevant biological context to judge importance. Sample size and whether observations are paired also help assess the strength of evidence.

</details>

## Sources and scope {#sources}

Course scope follows OxfordAQA 9610 v5.1 §7 and §3.3.6.2: [official qualification page](https://www.oxfordaqa.com/qualification/international-as-and-a-level-biology-9610/) and [specification](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-biology-specification.pdf). The numerical examples are newly constructed, not adapted examination data. The independence table extends the same count-testing idea; it does not imply that every table format is a guaranteed future BL05 question.

Statistical safeguards were checked with [NIST: confidence limits for the mean](https://www.itl.nist.gov/div898/handbook/eda/section3/eda352.htm), [NIST: chi-square goodness of fit](https://www.itl.nist.gov/div898/handbook/eda/section3/eda35f.htm) and [SciPy: Spearman correlation and small-sample inference](https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.spearmanr.html). These support interpretation, not extra qualification requirements. All calculations and feedback are author-written; no official marks are assigned.

Use [experimental design](/alevel/a2-biology/experimental-design/) to check the sampling behind a calculation, and [synoptic writing](/alevel/a2-biology/synoptic-writing/) to express what the evidence supports.
