---
title: "Moment generating functions: find the mean and spread"
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
lang: en
permalink: /alevel/a2-further-mathematics/statistics/moment-generating-functions/
reading_layout: true
study_page: true
toc_headings: "#meaning, #moments, #example, #transform, #sums, #practice, #retry, #later-review, #next-step"
---

[A2 Further Statistics](/alevel/a2-further-mathematics/statistics/)
{:.lesson-meta}

A probability table tells us which values can occur and how likely each is. We can calculate its mean directly. Why put that table into a function as well? Because one function can help us find several averages and handle new variables made from the old one.

We will build that function rather than memorise it. You need [probability-weighted averages](/alevel/as-further-mathematics/discrete-uniform/#demonstration) and the chain rule for exponentials. For example, differentiating $e^{3t}$ with respect to $t$ gives $3e^{3t}$. All examples and tasks below are self-written; no official marks are assigned.

## Replace each value by an exponential {#meaning}

Suppose a self-written game pays $X=0$ or $X=2$, each with probability $1/2$. Its mean is $0\times1/2+2\times1/2=1$.

Now keep the same probabilities, but replace each value $x$ by $e^{tx}$. Here $t$ is a number we can choose as the **input of a function**. It is not time and is not the random outcome.

| Value $x$ | Probability | Contribution to the new average |
| --- | --- | --- |
| $0$ | $1/2$ | $e^{0t}/2=1/2$ |
| $2$ | $1/2$ | $e^{2t}/2$ |

Adding the last column gives the **moment generating function**, or **MGF**:

$$
M_X(t)=E(e^{tX})=\frac12+\frac12e^{2t}.
$$

The letter $M$ names the function; the subscript tells us which random variable it belongs to. For any finite distribution, the same recipe is

$$
M_X(t)=\sum_x e^{tx}P(X=x).
$$

At $t=0$, every exponential is $1$, so $M_X(0)$ adds up all the probabilities. It must equal $1$. This is a useful check, but passing it alone does not prove that an arbitrary function is an MGF.

Our finite example is defined for every real $t$. Infinite distributions and continuous distributions need more care: an MGF must be finite throughout some open interval containing zero for the moment rules used here. For a continuous density $f_X$, the definition uses an integral over its support:

$$
M_X(t)=\int_{\text{support}}e^{tx}f_X(x)\,dx.
$$

We will derive continuous examples in a later lesson. Do not assume that every distribution has an MGF near zero.

## Why the derivatives give averages {#moments}

In each term, $x$ is a possible outcome and stays fixed while we differentiate with respect to **$t$**. The chain rule brings down one factor of $x$:

$$
\begin{aligned}
M_X'(t)&=\sum_x x e^{tx}P(X=x),\\
M_X'(0)&=\sum_x xP(X=x)=E(X).
\end{aligned}
$$

Differentiate once more. Now each value is multiplied by itself:

$$
\begin{aligned}
M_X''(t)&=\sum_x x^2 e^{tx}P(X=x),\\
M_X''(0)&=E(X^2),\\
\operatorname{Var}(X)&=M_X''(0)-[M_X'(0)]^2.
\end{aligned}
$$

$E(X)$ and $E(X^2)$ are the first and second **moments**: probability-weighted averages of $X$ and $X^2$. The second moment is not the variance; we still subtract the square of the mean.

For a finite table these differentiations follow term by term. The corresponding rules for infinite sums and integrals require the existence condition described above.

If you have studied [PGFs](/alevel/as-further-mathematics/generating-functions/#moments), keep the difference clear. A PGF averages $t^X$ and is differentiated at $1$; its second derivative gives $E[X(X-1)]$. An MGF averages $e^{tX}$ and is differentiated at $0$; its second derivative already gives $E(X^2)$. Do not add a PGF correction term to it.

## A complete calculation and a second way to check {#example}

<section class="worked-example" markdown="1">

### Find the mean and variance

**Question:** A random variable $X$ takes values $0$ and $2$, each with probability $1/2$. Find its MGF and use it to find its mean and variance. Check directly from the probabilities.

The table above gives the MGF. Differentiate the whole expression before setting $t=0$:

$$
\begin{aligned}
M_X(t)&=\frac12+\frac12e^{2t},\\
M_X'(t)&=e^{2t},&
M_X'(0)&=1,\\
M_X''(t)&=2e^{2t},&
M_X''(0)&=2.
\end{aligned}
$$

Therefore $E(X)=1$, $E(X^2)=2$ and $\operatorname{Var}(X)=2-1^2=1$.

For an independent calculation of the same quantities:

$$
\begin{aligned}
E(X)&=0\times\frac12+2\times\frac12=1,\\
E(X^2)&=0^2\times\frac12+2^2\times\frac12=2,\\
\operatorname{Var}(X)&=E(X^2)-[E(X)]^2=1.
\end{aligned}
$$

The methods agree. Setting $t=0$ before differentiating would leave only the constant $1$, losing the information we need.

</section>

## Change the variable, change the function {#transform}

Suppose a new score is $Y=a+bX$. The constant $a$ shifts every score; $b$ rescales it and may be negative. Put the new score into the definition:

$$
\begin{aligned}
M_Y(t)&=E(e^{t(a+bX)})\\
&=e^{at}E(e^{(bt)X})\\
&=e^{at}M_X(bt).
\end{aligned}
$$

The shift gives the outside factor $e^{at}$. The scale changes the **input** of $M_X$ from $t$ to $bt$. Multiplying the original function by $b$ does something different.

For the game above, let $Y=1-X$. The rule gives

$$
M_Y(t)=e^tM_X(-t)=\frac12e^t+\frac12e^{-t}.
$$

This makes sense: the new scores are $1$ and $-1$, with the same probabilities. Its mean is $0$ and variance $1$, also agreeing with $E(Y)=1-E(X)$ and $\operatorname{Var}(Y)=(-1)^2\operatorname{Var}(X)$.

If the original MGF only exists on a restricted range, the new expression needs $bt$ to be in that range. A negative $b$ reverses inequalities when solving for $t$.

## Add independent copies, or repeat the same variable? {#sums}

Let $X_1$ and $X_2$ be **independent** copies of $X$. Independence means their joint probabilities factor. For finite distributions this gives

$$
\begin{aligned}
M_{X_1+X_2}(t)
&=\sum_{x_1,x_2} e^{t(x_1+x_2)}
 P(X_1=x_1)P(X_2=x_2)\\
&=\left(\sum_{x_1}e^{tx_1}P(X_1=x_1)\right)
 \left(\sum_{x_2}e^{tx_2}P(X_2=x_2)\right)\\
&=M_{X_1}(t)M_{X_2}(t).
\end{aligned}
$$

Use a range where both MGFs exist. For our game, independent scores give

$$
M_{X_1+X_2}(t)
=\left(\frac12+\frac12e^{2t}\right)^2
=\frac14+\frac12e^{2t}+\frac14e^{4t}.
$$

There can be a total of $2$: one score is zero and the other is two.

Repeating the **same** score is different. For $X+X=2X$, the total is only $0$ or $4$:

$$
M_{2X}(t)=M_X(2t)=\frac12+\frac12e^{4t}.
$$

Writing two symbols is not enough to justify independence. The repeated score and the independently repeated game have different distributions. Revisit [linear combinations](/alevel/as-further-mathematics/linear-combinations/#model) if the distinction between a scale factor and an independent sum is unclear.

## Try without looking at the examples {#practice}

Keep the solutions closed first. If you use a hint, note that help when checking your work.

<section class="lesson-check" markdown="1">

### Task A {#task-a}

**Question:** $W$ takes values $-1,0,2$ with probabilities $1/4,1/2,1/4$. Find its MGF, mean, second moment and variance. Check using the probability table.

<details markdown="1"><summary>Hint</summary>

Write one probability-weighted exponential for each possible value. Differentiate before substituting zero.

</details>

<details markdown="1"><summary>Solution</summary>

$$
\begin{aligned}
M_W(t)&=\frac14e^{-t}+\frac12+\frac14e^{2t},\\
M_W'(t)&=-\frac14e^{-t}+\frac12e^{2t},\\
M_W''(t)&=\frac14e^{-t}+e^{2t}.
\end{aligned}
$$

Thus $M_W(0)=1$, $E(W)=1/4$ and $E(W^2)=5/4$.

$$
\operatorname{Var}(W)=\frac54-\left(\frac14\right)^2=\frac{19}{16}.
$$

Directly, the first moment is $(-1)/4+0+2/4=1/4$ and the second is $1/4+0+4/4=5/4$. A negative possible value is allowed: its probability remains positive. If your second moment is $19/16$, you have already subtracted the mean squared and found the variance instead.

</details>

</section>

<section class="lesson-check" markdown="1">

### Task B {#task-b}

**Question:** For $W$ in Task A, let $Y=3-2W$. Starting from the definition, justify the MGF transformation you use. Find $M_Y(t)$ and the mean and variance of $Y$. Check the possible values and probabilities directly.

<details markdown="1"><summary>Hint</summary>

Use the definition with $3-2W$ in place of $W$. Check where the factor $-2$ acts.

</details>

<details markdown="1"><summary>Solution</summary>

$$
\begin{aligned}
M_Y(t)&=E(e^{t(3-2W)})\\
&=e^{3t}E(e^{(-2t)W})\\
&=e^{3t}M_W(-2t)\\
&=\frac14e^{5t}+\frac12e^{3t}+\frac14e^{-t}.
\end{aligned}
$$

The possible values are $5,3,-1$, with probabilities $1/4,1/2,1/4$. Their mean is $5/2$, their second moment is $11$, and their variance is $11-25/4=19/4$.

Check by the linear rules: $E(Y)=3-2(1/4)=5/2$ and $\operatorname{Var}(Y)=(-2)^2(19/16)=19/4$. The negative sign does not make variance negative. If you multiplied $M_W(t)$ by $-2$, revisit [the definition of a transformed variable](#transform).

</details>

</section>

<section class="lesson-check" markdown="1">

### Task C {#task-c}

**Question:** $W_1$ and $W_2$ are independent copies of $W$ in Task A. Let $S=W_1+W_2$ and $T=2W_1$. Find their MGFs, means and variances. Do $S$ and $T$ have the same distribution? Explain.

<details markdown="1"><summary>Hint</summary>

Identify which construction repeats a trial and which repeats its already-obtained score. A single different variance is enough to disprove equality of distributions.

</details>

<details markdown="1"><summary>Solution</summary>

$$
\begin{aligned}
M_S(t)&=\left(\frac14e^{-t}+\frac12+\frac14e^{2t}\right)^2,\\
M_T(t)&=\frac14e^{-2t}+\frac12+\frac14e^{4t}.
\end{aligned}
$$

Both means are $1/2$. Independence gives $\operatorname{Var}(S)=2(19/16)=19/8$. Scaling gives $\operatorname{Var}(T)=4(19/16)=19/4$. The distributions differ; the equal means do not settle the question. For another check, $S$ can be $-1$ but $T$ cannot.

</details>

</section>

## Repair one difficulty, then use new data {#retry}

If you lost a value or probability, return to [the weighting table](#meaning). If you used the wrong derivative point or confused the second moment and variance, return to [the derivative explanation](#moments), then do Retry A. For a wrong input under scaling, return to [transformations](#transform), then Retry B. For an unjustified product, return to [independence](#sums), then Retry C. Close the earlier answer before retrying.

<section class="lesson-check" markdown="1">

### Retry A {#retry-a}

**Question:** $M_R(t)=(2e^{-2t}+e^t)/3$. Recover the possible values and their probabilities. Find the mean and variance of $R$ in two ways.

<details markdown="1"><summary>Hint</summary>

Compare each term with $p e^{tx}$. The coefficient is the probability, not the outcome.

</details>

<details markdown="1"><summary>Solution</summary>

$R=-2,1$ with probabilities $2/3,1/3$.

$$
M_R'(t)=\frac{-4e^{-2t}+e^t}{3},\qquad
M_R''(t)=\frac{8e^{-2t}+e^t}{3}.
$$

So $E(R)=-1$, $E(R^2)=3$ and $\operatorname{Var}(R)=3-(-1)^2=2$. Directly, $(-2)(2/3)+1/3=-1$ and $4(2/3)+1/3=3$, giving the same variance.

</details>

</section>

<section class="lesson-check" markdown="1">

### Retry B {#retry-b}

**Question:** Using $R$ in Retry A, define $V=2-R$. Find its MGF and check its mean and variance from its possible values.

<details markdown="1"><summary>Hint</summary>

Substitute the whole expression $2-R$ into $e^{tV}$ before taking its expectation.

</details>

<details markdown="1"><summary>Solution</summary>

$$
M_V(t)=e^{2t}M_R(-t)=\frac23e^{4t}+\frac13e^t.
$$

$V=4,1$ with probabilities $2/3,1/3$. Thus $E(V)=3$, $E(V^2)=11$ and $\operatorname{Var}(V)=2$. The shift changes the mean; multiplication by $-1$ leaves the variance unchanged.

</details>

</section>

<section class="lesson-check" markdown="1">

### Retry C {#retry-c}

**Question:** $B_1$ and $B_2$ are independent copies of a variable taking $0$ with probability $2/3$ and $1$ with probability $1/3$. Compare the MGFs and variances of $B_1+B_2$ and $2B_1$.

<details markdown="1"><summary>Hint</summary>

First find the one-trial MGF and variance; then decide which operation describes each construction.

</details>

<details markdown="1"><summary>Solution</summary>

The one-trial MGF is $M_B(t)=2/3+e^t/3$ and its variance is $1/3-(1/3)^2=2/9$.

$$
M_{B_1+B_2}(t)=\left(\frac23+\frac13e^t\right)^2,\qquad
M_{2B_1}(t)=\frac23+\frac13e^{2t}.
$$

The variances are $4/9$ and $8/9$, respectively. The first construction can give $1$; the second cannot.

</details>

</section>

## Return later with a fresh construction {#later-review}

On another study visit, close the examples and attempt this without being told which property to use.

<section class="lesson-check" markdown="1">

### Mixed return task

**Question:** A random variable $A$ has $M_A(t)=(e^t+e^{3t})/2$. An independent copy is $A'$. Set $P=A-A'$ and $Q=A-2$. Find their MGFs, means and variances. Explain why equal means do not make these distributions equal.

<details markdown="1"><summary>Hint</summary>

Recover the original distribution. Then identify what information the words “independent copy” supply.

</details>

<details markdown="1"><summary>Solution</summary>

$A=1,3$, equally likely, so $E(A)=2$ and $\operatorname{Var}(A)=1$.

$$
\begin{aligned}
M_P(t)&=M_A(t)M_A(-t)
=\frac14e^{-2t}+\frac12+\frac14e^{2t},\\
M_Q(t)&=e^{-2t}M_A(t)
=\frac12e^{-t}+\frac12e^t.
\end{aligned}
$$

Both means are zero. The variances are $2$ for $P$ and $1$ for $Q$. Their possible values also differ: $P=-2,0,2$ whereas $Q=-1,1$. For a sign or input error return to [transformations](#transform); for a product without a reason return to [independence](#sums), then redo the corresponding new retry.

</details>

</section>

## What comes next? {#next-step}

Return to the [FM04 route](/alevel/a2-further-mathematics/statistics/). The next planned step is deriving continuous MGFs and the Poisson, exponential and normal cases, with their existence ranges. Those lessons are not yet available. You can prepare by revisiting [improper integrals](/alevel/as-further-mathematics/improper-integrals/#model); this is prerequisite recovery, not a substitute for the future MGF lesson.

<details markdown="1"><summary>Sources and scope</summary>

OxfordAQA 9665 v5.2, FS2.1: this sample covers finite-distribution foundations, moments, affine transformations and finite independent sums. It introduces the continuous definition but does not cover all standard-distribution derivations or the full FM04 course.

Teaching preparation used *International A Level Further Mathematics with Statistics* (Oxford, 2017), Chapter 29, printed pp.370–374; and the paired January 2025 FM04 Q8 and mark scheme pp.17–18. June 2025 Q2/MS pp.5–6 informed the later integration route. All lesson questions and solutions are self-written, with no official marks. See the [current qualification](https://www.oxfordaqa.com/qualification/international-as-and-a-level-further-mathematics-9665/) and [specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf).

</details>
