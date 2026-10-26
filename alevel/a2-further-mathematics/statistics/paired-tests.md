---
title: "Paired tests: one difference from each pair"
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: en
permalink: /alevel/a2-further-mathematics/statistics/paired-tests/
reading_layout: true
study_page: true
toc_headings: h2
---

## Keep the connection between two readings {#meaning}

If the same object is measured twice, its readings form a pair. We want to know whether there is a mean change within objects, rather than compare two unrelated groups. First turn each pair into one signed difference. All examples and tasks below are self-written, with constructed teaching data.

You need [sample variance](/alevel/a2-mathematics/statistics/estimation/#estimates) and [a mean test with unknown variance](/alevel/a2-mathematics/statistics/mean-tests/#unknown-normal). If the groups contain unrelated independently sampled objects, return to [independent mean comparisons](/alevel/a2-further-mathematics/statistics/comparing-means/#conditions).

Choose the direction before calculating. For example,

$$
D_i=\text{after}_i-\text{before}_i.
$$

A positive difference now means an increase. Reversing the definition reverses the mean difference, the null comparison value and the alternative direction. If you change all three consistently, your conclusion about the original measurements will stay the same.

Pairing must come from the design: the same person twice, the same reference load on two instruments, or meaningfully matched objects. Two equal-length lists are not automatically paired. Sorting unrelated results and matching their ranks does not create a random sample of genuine pairs.

## Check the differences, then use one mean test {#conditions}

For a small paired t test, assume the differences are independent random observations from a normal population with unknown positive variance. Independence is needed **between pairs**; the two readings within one pair can be related. Normality concerns the population of differences, rather than each original column separately. A few observed values cannot prove their population is normal; a pronounced outlier is a reason to check the model and the data.

Let the number of pairs be $n\ge2$. Calculate the mean and unbiased variance of their differences, then estimate the standard error of that mean:

$$
\bar d=\frac{\sum d_i}{n},\qquad
s_d^2=\frac{\sum d_i^2-(\sum d_i)^2/n}{n-1},\qquad
SE=\frac{s_d}{\sqrt n}.
$$

For a null mean difference of $\delta_0$, use

$$
H_0:\mu_D=\delta_0,\qquad
T=\frac{\bar D-\delta_0}{S_D/\sqrt n}\sim t_{n-1}\quad\text{under }H_0.
$$

There are $n$ independent differences, so the degrees of freedom are $n-1$, not $2n-2$. The t reference allows for estimating the unknown spread. The claim determines the tail: a positive difference uses an upper tail, a negative difference uses a lower tail, and a departure in either direction uses two tails. If $s_d=0$, the displayed t ratio is undefined; do not divide by zero and report an ordinary finite statistic.

Why not just combine the spread of the two columns? Within-pair association matters:

$$
\operatorname{Var}(Y-X)=\operatorname{Var}(Y)+\operatorname{Var}(X)-2\operatorname{Cov}(X,Y).
$$

Computing the variance of the actual differences retains this connection without estimating covariance separately. If the last term is unfamiliar, revisit [covariance and its conditions](/alevel/as-further-mathematics/linear-combinations/#covariance).

A significant result can support a population mean change or measurement bias. It does not by itself explain the cause. Time trends, practice, order effects or other simultaneous changes may explain a before–after difference. A causal claim needs support from the study design. Likewise, a non-significant result does not prove the mean difference is exactly the null value.

## Follow one complete comparison {#example}

<section class="worked-example" markdown="1">

### Output before and after a change

**Question:** Six randomly selected independent units are measured before and after a process change. Their before outputs are $20,25,22,30,28,24$ units and their corresponding after outputs are $22,24,26,33,28,28$ units. Assume the population of after-minus-before differences is normal with unknown variance. Test whether mean output has increased at 5%, using $t_{5,0.95}=2.015048$. Explain whether the result establishes that the process change caused the increase.

The same six units appear twice, so first define a difference for each unit. The normality assumption applies to these differences, and the independent sampling units supply independent pairs.

$$
D=\text{after}-\text{before},\qquad
H_0:\mu_D=0,\quad H_1:\mu_D>0.
$$

$$
d_i:2,-1,4,3,0,4;\qquad
\sum d_i=12,\quad \sum d_i^2=46.
$$

The negative second difference is retained: some units may decrease even when the claim concerns a positive population mean change.

$$
\bar d=\frac{12}{6}=2,\qquad
s_d^2=\frac{46-12^2/6}{5}=\frac{22}{5}=4.4.
$$

The estimated standard error is in output units; the t statistic is dimensionless.

$$
SE=\sqrt{\frac{4.4}{6}}=\sqrt{\frac{11}{15}}=0.856349,\qquad
t=\frac{2-0}{\sqrt{11/15}}=2.335497,\quad df=6-1=5.
$$

The claim uses the upper tail. The statistic exceeds the upper 5% cutoff, so reject the null hypothesis. There is sufficient evidence at 5% of a positive population mean change in output. This does not by itself show that the process adjustment caused the increase; other changes have not been isolated.

Check: there are six independent differences, not twelve independent readings. If we use before-minus-after instead, the sign and tail both reverse:

$$
\bar d'=-2,\quad t'=-2.335497,\quad H_1:\mu_{D'}<0,
\qquad -2.335497<-2.015048.
$$

The same evidence still supports an increase in output. We have described the same change in the opposite direction.

</section>

## Close the demonstration and choose {#practice}

Keep the hints and solutions closed until you have tried each question. If you use help, record the step it helped you complete.

<section class="lesson-check" markdown="1">

### A stated calibration offset {#task-a}

**Question:** Instruments A and B measure each of eight randomly selected independent reference items. The A-minus-B differences are $1,2,0,3,2,4,1,3$ mm. Assume a normal population of differences with unknown variance. At 5%, test whether the population mean difference differs from the stated calibration offset of 1 mm, using $t_{7,0.975}=2.364624$. Explain how the hypotheses and statistic change if differences are defined as B minus A.

<details markdown="1"><summary>Hint</summary>

The null mean difference is 1 mm, rather than zero. Reverse the null value as well as the observed differences when changing direction.

</details>

<details markdown="1"><summary>Solution</summary>

Each reference item provides one difference, so this is a paired design. Let the difference be measured in mm:

$$
D=A-B,\qquad H_0:\mu_D=1,\quad H_1:\mu_D\ne1.
$$

$$
\sum d_i=16,\quad\sum d_i^2=44,\quad\bar d=2,
\qquad s_d^2=\frac{44-16^2/8}{7}=\frac{12}{7}.
$$

$$
SE=\sqrt{\frac{12/7}{8}}=\sqrt{\frac{3}{14}}=0.462910,\qquad
t=\frac{2-1}{\sqrt{3/14}}=2.160247,\quad df=7.
$$

The normal population of independent differences justifies the t reference. The claim is two-sided, so compare the absolute statistic with the supplied cutoff:

$$
\lvert t\rvert=2.160247<2.364624.
$$

Do not reject. At 5%, there is insufficient evidence that the population mean A-minus-B difference differs from 1 mm. This does not prove it is exactly 1 mm.

For the reversed definition, variance and standard error stay the same, while the mean, null value and statistic change sign:

$$
D'=B-A=-D,\quad\bar d'=-2,\quad s_{d'}^2=\frac{12}{7},
$$
$$
H_0:\mu_{D'}=-1,\quad H_1:\mu_{D'}\ne-1,\qquad
t'=\frac{-2-(-1)}{\sqrt{3/14}}=-2.160247.
$$

The absolute statistic and two-sided conclusion are unchanged.

</details>

</section>

<section class="lesson-check" markdown="1">

### Does the design support the model? {#task-b}

**Question:** Decide whether each proposal justifies a small paired t test, identifying any missing or violated condition: (i) independent random patients measured twice, with a normal population of differences and positive unknown variance assumed; (ii) unrelated independent groups of six patients, paired after sampling by sorting their results; (iii) six repeated before-and-after readings on one patient, treated as six independent patients; (iv) six independent natural pairs with differences $1,1,1,1,1,20$, justified only by saying that the original columns look normal. No numerical test is required.

<details markdown="1"><summary>Hint</summary>

For each proposal, identify the independently sampled unit, the origin of its pair, and the population to which normality must apply.

</details>

<details markdown="1"><summary>Solution</summary>

1. The stated conditions support paired t: patients are independent units, pairing is natural, and normality is assumed for the differences.
2. Sorting unrelated observations does not provide genuine pre-defined pairs or a random sample of their differences. Consider an independent-samples method only if its own assumptions hold.
3. Repeated readings from one patient need not be independent. Six readings do not establish six independently sampled patients; the dependence needs a suitable design or model.
4. Normality is required for the differences. The outlier calls for checking the records and model; the original columns' appearance does not justify difference normality. These six values cannot prove their population distribution. The stated justification is insufficient.

</details>

</section>

## Repair the unit of information {#retry}

If you used twelve readings and ten degrees of freedom in the worked example, return to [one difference per pair](#conditions). The six differences require five degrees of freedom and the standard deviation of the differences. Pooling the original columns loses the paired structure. If you made a causal claim, reread the limit of the before–after design. Then close the example and try this fresh problem.

<section class="lesson-check" markdown="1">

### A new comparison {#retry-a}

**Question:** Five independently selected workers perform the same task before and after a schedule change. Before times are $30,31,29,33,32$ seconds and corresponding after times are $30,30,27,30,28$ seconds. Assume the population of before-minus-after differences is normal with unknown variance. Test whether mean completion time has decreased at 5%, using $t_{4,0.95}=2.131847$. Give a conclusion that avoids an unsupported causal claim.

<details markdown="1"><summary>Hint</summary>

With the difference defined as before minus after, a reduction gives a positive difference. Count workers, then estimate the variability of their differences.

</details>

<details markdown="1"><summary>Solution</summary>

The five workers provide independent pairs, with normal differences assumed. Positive difference means a reduction in time:

$$
D=\text{before}-\text{after},\qquad H_0:\mu_D=0,\quad H_1:\mu_D>0.
$$

$$
d_i:0,1,2,3,4,\qquad \sum d_i=10,\quad\sum d_i^2=30,
$$
$$
\bar d=2,\qquad s_d^2=\frac{30-10^2/5}{4}=2.5,
\qquad SE=\sqrt{\frac{2.5}{5}}=\sqrt{0.5}.
$$

$$
t=\frac{2-0}{\sqrt{0.5}}=2.828427,\quad df=5-1=4,
\qquad 2.828427>2.131847.
$$

Reject in the upper tail. At 5%, there is sufficient evidence of a decrease in population mean completion time from before to after. The data alone do not establish that the schedule change caused it. The standard error is in seconds; it is based on five differences, not ten independent readings.

</details>

</section>

## Return after another topic {#later-review}

Try this without the earlier solutions. Identify the sampling design before choosing a statistic.

<section class="lesson-check" markdown="1">

### Two readings of a load {#later-a}

**Question:** Each of eight independently sampled reference loads is weighed by both an old and a new instrument. Old-minus-new differences are $-2,0,1,3,-1,2,0,1$ g. Assume a normal population of differences with positive unknown variance. At 10%, test whether the new instrument reads lower on average, using $t_{7,0.90}=1.414924$. Explain why equal sample sizes alone would not have identified the appropriate design.

<details markdown="1"><summary>Hint</summary>

The same load has two readings. Decide which sign of its difference supports the claim.

</details>

<details markdown="1"><summary>Solution</summary>

Pairing comes from the same load being weighed twice. A positive old-minus-new difference supports the claim:

$$
D=\text{old}-\text{new},\qquad H_0:\mu_D=0,\quad H_1:\mu_D>0.
$$

$$
n=8,\quad \sum d_i=4,\quad\sum d_i^2=20,\quad\bar d=0.5,
\qquad s_d^2=\frac{20-4^2/8}{7}=\frac{18}{7}.
$$

$$
SE=\sqrt{\frac{18/7}{8}}=\sqrt{\frac{9}{28}}=0.566947,\qquad
t=\frac{0.5-0}{\sqrt{9/28}}=0.881917,\quad df=7.
$$

The independent normal differences justify t with seven degrees of freedom. The statistic does not cross the upper 10% cutoff:

$$
0.881917<1.414924.
$$

Do not reject. At 10%, there is insufficient evidence that the new instrument has a lower population mean reading. Equal sample counts also occur in independent designs; pairing is identified by the relationship between measurements.

</details>

</section>

## Decide your next step {#next-step}

If the main difficulty was choosing the sampling design, compare [independent mean conditions](/alevel/a2-further-mathematics/statistics/comparing-means/#conditions) with [the paired conditions above](#conditions), then return to the design question. If the difficulty was the denominator or degrees of freedom, revisit [the single-mean t model](/alevel/a2-mathematics/statistics/mean-tests/#unknown-normal) before the fresh attempt. Keep a note of your first answer, any help, the correction and your later attempt; reading a solution is not yet evidence that you can choose the method independently.
