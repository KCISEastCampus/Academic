---
title: "Linear combinations and covariance"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/linear-combinations/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/) · S5 · FS1.5

All demonstrations, scaffolded attempts, independent tasks and retries here are **self-written**, with no official marks. Write your method and reasons before opening hints and solutions separately.

## Why signed coefficients lead to squared terms {#model}

You will derive a combination variance, retain the sign of covariance terms, recover unknown coefficients or moments, and distinguish independence from zero correlation. Assume finite second moments throughout. Expectation is linear whether or not X and Y are independent.

$$
\begin{aligned}
&E(aX+bY+c)=aE(X)+bE(Y)+c,\\
&X_c=X-E(X),\\
&Y_c=Y-E(Y),\\
&E(X_c)=E(Y_c)=0.
\end{aligned}
$$

Subtract the combination mean first: the constant c cancels. Expand the squared deviation, and only then take expectations. This explains both the squared coefficients and the signed cross term.

$$
\begin{aligned}
&(aX_c+bY_c)^2\\
&\quad=a^2X_c^2+b^2Y_c^2+2abX_cY_c,\\
&\operatorname{Var}(aX+bY+c)\\
&\quad=a^2\operatorname{Var}(X)+b^2\operatorname{Var}(Y)\\
&\qquad+2ab\operatorname{Cov}(X,Y).
\end{aligned}
$$

A negative coefficient does not give a negative individual variance term: it is squared there. It does change the sign of the cross term. A constant shifts the mean but leaves every centred deviation unchanged.

## Covariance, correlation and their conditions {#covariance}

Expanding the product of centred variables gives the covariance formula. Covariance measures the signed average product of deviations; it can be positive, zero or negative.

$$
\begin{aligned}
&\operatorname{Cov}(X,Y)=E(X_cY_c)\\
&\quad=E(XY)-E(X)E(Y),\\
&V_X=\operatorname{Var}(X),\\
&V_Y=\operatorname{Var}(Y),\\
&C=\operatorname{Cov}(X,Y),\\
&\rho=\frac{C}{\sqrt{V_XV_Y}}\quad(V_X>0,\ V_Y>0).
\end{aligned}
$$

Correlation requires both variances to be positive. To see its bound, standardise the deviations. Nonnegative expectations of both a sum-square and a difference-square give both inequalities:

$$
\begin{aligned}
&E\left[\left(\frac{X_c}{\sqrt{V_X}}
+\frac{Y_c}{\sqrt{V_Y}}\right)^2\right]=2+2\rho\ge0,\\
&E\left[\left(\frac{X_c}{\sqrt{V_X}}
-\frac{Y_c}{\sqrt{V_Y}}\right)^2\right]=2-2\rho\ge0,\\
&-1\le\rho\le1,\\
&C^2\le V_XV_Y.
\end{aligned}
$$

Independence factors the joint expectation, so it implies zero covariance. Zero covariance does not generally imply independence: a symmetric variable can be uncorrelated with its square even though the square is determined by it. You will verify this with a joint-event check. If X is constant, its covariance with Y is zero, but correlation is undefined because the denominator vanishes.

For several independent variables, every covariance term vanishes; sum the variances with squared coefficients. Pairwise zero covariances are enough for that variance calculation, but do not by themselves establish independence. If centred moments are unfamiliar, revisit the [discrete-uniform derivation](/alevel/as-further-mathematics/discrete-uniform/#demonstration).

## Demonstration: compute from a dependent joint table {#demonstration}

<section class="worked-example" markdown="1">

This is a constructed joint distribution, not measured data. Rows give X and columns give Y. First obtain marginal probabilities; each variable is zero or one with probability one half.

| $P(X=x,Y=y)$ | $y=0$ | $y=1$ |
| --- | --- | --- |
| $x=0$ | 0.4 | 0.1 |
| $x=1$ | 0.1 | 0.4 |

$$
\begin{aligned}
&E(X)=E(Y)=0.5,\\
&E(X^2)=E(Y^2)=0.5,\\
&V_X=V_Y=0.5-0.5^2=0.25,\\
&E(XY)=1(1)(0.4)=0.4,\\
&C=0.4-0.5(0.5)=0.15,\\
&\rho=\frac{0.15}{0.25}=0.6.
\end{aligned}
$$

Only the (1,1) cell contributes to the product XY. Positive covariance reflects the larger diagonal probabilities. Use signed coefficients before substituting numbers.

$$
\begin{aligned}
&\operatorname{Var}(X-Y)\\
&\quad=0.25+0.25-2(0.15)=0.2,\\
&E(2X-Y+3)=2(0.5)-0.5+3=3.5,\\
&\operatorname{Var}(2X-Y+3)\\
&\quad=4(0.25)+0.25-4(0.15)\\
&\quad=1+0.25-0.6=0.65.
\end{aligned}
$$

Independent check: X−Y takes −1,0,1 with probabilities 0.1,0.8,0.1, giving variance 0.2 directly. The four values of 2X−Y+3 are 3,2,5,4 at the four table cells; their weighted squared deviations from 3.5 give 0.65. Treating X,Y as independent would incorrectly give difference variance 0.5.

</section>

## Inverse problems must pass a consistency check {#bounds}

<section class="worked-example" markdown="1">

**Demonstration (self-written):** X,Y have variances 1 and 4, and Var(X−Y)=3. Recover their covariance and check its admissibility.

Recover C from the difference, then check its range before using it in a new combination.

$$
\begin{aligned}
&3=1+4-2C,\\
&C=1,\\
&\rho=\frac1{\sqrt{1(4)}}=\frac12.
\end{aligned}
$$

For these same individual variances, a difference variance of 10 would demand C=−2.5 and correlation −1.25, which is impossible. Nonnegative variance alone is not enough. In general:

$$
\begin{aligned}
&(\sqrt{V_X}-\sqrt{V_Y})^2\\
&\quad\le\operatorname{Var}(X-Y)\\
&\quad\le(\sqrt{V_X}+\sqrt{V_Y})^2.
\end{aligned}
$$

The bounds follow by substituting the largest and smallest admissible C. To recover an unknown coefficient, keep the coefficient signed, solve the resulting quadratic and apply any stated sign restriction. Check the chosen root in the original variance, then calculate its mean separately.

</section>

## Separate copying, combining and solving backwards {#practice}

<section class="lesson-check" id="scaffold" markdown="1">

**Scaffold (self-written):** If $\operatorname{Var}(U)=v$ and $U_1,U_2$ are independent copies of U, compare $\operatorname{Var}(2U)$ with $\operatorname{Var}(U_1+U_2)$.

<details markdown="1"><summary>Hint</summary>

The two copies are independent; U+U repeats one outcome.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&\operatorname{Var}(2U)=4v,\\
&\operatorname{Var}(U_1+U_2)=2v.
\end{aligned}
$$

In U+U the covariance is v. It is zero for independent copies.

</details>

</section>

<section class="lesson-check" id="practice-1" markdown="1">

**Independent task (self-written):** Discrete X,Y have means 2, −1, variances 4, 9 and $\operatorname{Var}(X-Y)=7$. Find their covariance, correlation, and the mean and variance of $Z=3X-2Y+5$. Could the difference variance instead be 30 with the same individual variances? Also find $\operatorname{Var}(2U-V+W)$ for independent U,V,W with variances 1,4,9.

<details markdown="1"><summary>Hint</summary>

Recover covariance from the difference first. Test the alternative against the correlation bound.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&7=4+9-2C,\\
&C=3,\\
&\rho=\frac3{\sqrt{4(9)}}=\frac12,\\
&E(Z)=3(2)-2(-1)+5=13,\\
&\operatorname{Var}(Z)\\
&\quad=9(4)+4(9)-12(3)=36,\\
&30=13-2C\ \Rightarrow\ C=-8.5,\\
&\rho=-8.5/6<-1\quad\text{(impossible)},\\
&\operatorname{Var}(2U-V+W)\\
&\quad=4(1)+4+9=17.
\end{aligned}
$$

Here the admissible difference variances range from 1 to 25, so 30 fails independently of the combination Z.

</details>

</section>

<section class="lesson-check" id="practice-2" markdown="1">

**Independent task 2 (self-written):** X,Y have means 2,−1, variances 4,9 and covariance 3. For L=aX+Y+1, a is negative and Var(L)=13. Recover a, its mean and its second raw moment. Verify the signed covariance contribution and explain whether independence is required.

<details markdown="1"><summary>Hint</summary>

Form a quadratic in a before choosing its negative root.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&13=4a^2+9+6a,\\
&4a^2+6a-4=0,\\
&(2a-1)(2a+4)=0,\\
&a=\frac12\text{ or }-2,\\
&a<0\Rightarrow a=-2,\\
&E(L)=-2(2)-1+1=-4,\\
&\operatorname{Var}(L)=16+9-12=13,\\
&E(L^2)=13+(-4)^2=29.
\end{aligned}
$$

The cross term is 2aC=6a, so it is −12 at the chosen root. Independence is not required; the nonzero covariance is explicitly retained. The given correlation is 1/2 and is admissible.

</details>

</section>

<section class="lesson-check" id="practice-3" markdown="1">

**Independent task 3 (self-written):** X is equally likely to be −2,−1,1,2 and Y=X². Compute the covariance and correlation, checking that correlation exists. Decide whether X,Y are independent by comparing a joint probability with the product of its marginals. Explain what this says about zero correlation.

<details markdown="1"><summary>Hint</summary>

Odd products cancel by symmetry; independence needs a joint-event test.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&E(X)=0,\\
&E(Y)=\frac{1+1+4+4}4=\frac52,\\
&E(XY)=\frac{-8-1+1+8}4=0,\\
&C=0,\\
&V_X=\frac52,\\
&E(Y^2)=\frac{1+1+16+16}4=\frac{17}2,\\
&V_Y=\frac{17}2-\frac{25}4=\frac94,\\
&\rho=0,\\
&P(X=2,Y=4)=\frac14,\\
&P(X=2)P(Y=4)\\
&\quad=\frac14\frac12=\frac18.
\end{aligned}
$$

Both variances are positive, so zero correlation is defined. The displayed joint probability differs from the product; the variables are dependent despite being uncorrelated.

</details>

</section>

## Choose a retry for the missing condition {#retry}

For a missing sign, write the cross term symbolically before retry 2. For a correlation denominator error, do retry 1. For a feasibility error, revisit the bounds argument, then independently complete the [feasibility retry](#retry-feasibility), including an attainable boundary example. For an independence claim based only on covariance, do retry 3 with an explicit joint event.

<section class="lesson-check" id="retry-1" markdown="1">

**Retry (self-written):** With variances 4 and 9 but covariance −2, find $\operatorname{Var}(X+Y)$ and correlation. Can correlation be computed if X is constant?

<details markdown="1"><summary>Hint</summary>

Check that both variances are positive before dividing.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&\operatorname{Var}(X+Y)=4+9+2(-2)=9,\\
&\rho=\frac{-2}{\sqrt{4(9)}}=-\frac13.
\end{aligned}
$$

If X is constant its variance is zero; correlation is undefined, even though covariance is zero.

</details>

</section>

<section class="lesson-check" id="retry-feasibility" markdown="1">

**Feasibility retry (self-written):** X,Y have variances 4 and 9. Could their covariance be 6? Could it be 7? Justify each conclusion. For any admissible value among these two, construct a discrete joint distribution with two equally likely outcomes that realises it.

<details markdown="1"><summary>Hint</summary>

A value on the correlation boundary can be admissible. A value beyond it cannot be repaired by changing means.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&\sqrt{V_XV_Y}=\sqrt{4(9)}=6,\\
&C=6:\quad \rho=1,\\
&C=7:\quad \rho=\frac76>1,\\
&P(X=2,Y=3)=\frac12,\\
&P(X=-2,Y=-3)=\frac12,\\
&E(X)=E(Y)=0,\\
&V_X=4,\qquad V_Y=9,\\
&E(XY)=6,\qquad C=6.
\end{aligned}
$$

Covariance 6 is attainable by the two displayed outcomes; covariance 7 is impossible because its correlation exceeds one. This checks attainability at the boundary as well as rejecting the invalid report.

</details>

</section>

<section class="lesson-check" id="retry-2" markdown="1">

**Retry 2 (self-written):** X,Y have means 2,−1, variances 4,9 and covariance −2. T=2X+bY−2 has negative b and variance 33. Recover b, the mean and second raw moment of T. Explain the sign of its covariance contribution.

<details markdown="1"><summary>Hint</summary>

The cross term is 2(2)b(−2), not a squared covariance.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&33=16+9b^2-8b,\\
&9b^2-8b-17=0,\\
&(b+1)(9b-17)=0,\\
&b=-1\text{ or }\frac{17}9,\\
&b<0\Rightarrow b=-1,\\
&E(T)=2(2)+(-1)(-1)-2=3,\\
&\operatorname{Var}(T)=16+9+8=33,\\
&E(T^2)=33+3^2=42.
\end{aligned}
$$

Both b and the covariance are negative, giving a positive cross contribution of 8. The correlation −1/3 is admissible.

</details>

</section>

<section class="lesson-check" id="retry-3" markdown="1">

**Retry 3 (self-written):** U is uniform on −2,−1,0,1,2 and V=U². Determine whether correlation exists, calculate it and test independence using the event U=0,V=0.

<details markdown="1"><summary>Hint</summary>

Compute both positive variances before interpreting zero covariance.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&E(U)=0,\\
&E(V)=2,\\
&E(UV)=0,\\
&V_U=2,\\
&E(V^2)=\frac{34}5,\\
&V_V=\frac{34}5-4=\frac{14}5,\\
&C=0,\\
&\rho=0,\\
&P(U=0,V=0)=\frac15,\\
&P(U=0)P(V=0)=\frac1{25}.
\end{aligned}
$$

Correlation is defined and zero, but the unequal joint and product probabilities prove dependence.

</details>

</section>

## Return after the next chapter {#later-review}

<section class="lesson-check" id="later-task" markdown="1">

**Later review (self-written):** X,Y have means 1,2. Their sum has variance 25 and their difference variance 9. The variance of Y is twice that of X plus 2. Recover both variances, covariance and correlation, and check consistency. Find E(XY), and the mean, variance and second raw moment of R=2X−3Y+1. Do not assume independence.

<details markdown="1"><summary>Hint</summary>

Add and subtract the sum/difference variance equations before using the relation between individual variances.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&25=V_X+V_Y+2C,\\
&9=V_X+V_Y-2C,\\
&V_X+V_Y=17,\\
&C=4,\\
&V_Y=2V_X+2\ \Rightarrow\ V_X=5,\ V_Y=12,\\
&\rho=\frac4{\sqrt{60}}=\frac2{\sqrt{15}},\\
&E(XY)=4+1(2)=6,\\
&E(R)=2(1)-3(2)+1=-3,\\
&\operatorname{Var}(R)=4(5)+9(12)-12(4)\\
&\quad=80,\\
&E(R^2)=80+9=89.
\end{aligned}
$$

Both variances are positive and C²=16≤60, so the moment data pass the covariance bound. Nonzero covariance rules out independence.

</details>

</section>

## Decide your next step {#next-step}

Continue to relative motion after you can recover a negative coefficient, test a proposed covariance and explain why zero correlation is insufficient for independence. If signed substitution fails, redo the centred-square expansion and retry 2. If correlation fails, check variances before retry 1. After the next chapter, attempt the later review without notes; also return to the [PGF mixed review](/alevel/as-further-mathematics/generating-functions/#later-review) to connect independent-sum variances with PGF derivatives.

## Sources and scope {#sources}

Scope follows 9665 v5.2. The paired questions and mark schemes below informed the required evidence; these exercises do not reproduce their questions or award official marks.

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FS1.5.
- FM02 June 2024 Q8(b)(ii); QP p.17, MS p.15. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

[Previous](/alevel/as-further-mathematics/generating-functions/) · [Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/relative-motion/)

{% include exam_topic_practice.html %}
