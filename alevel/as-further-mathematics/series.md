---
title: "Finite sums and infinite-series limits"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/series/
toc_headings: "#start, #model, #lower-limits, #demonstration, #infinite-sums, #practice, #retry, #later-review, #next-step, #sources"
study_page: true
reading_layout: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/)

How do you choose between standard sums and differences, and how can a finite partial sum justify an infinite sum? First inspect the term being added; then keep track of where the sum starts and ends.

Work through [standard sums](#model) and [cancellation](#demonstration), then cover the examples and attempt the [independent check](#practice). You should be able to select a method, handle a changed lower limit and explain whether an infinite series has a finite sum.

## Before you start {#start}

You need Σ notation, bracket expansion, simple fractions and quadratic factorisation. If factorisation is unfamiliar, revisit [AS quadratics](/alevel/as-mathematics/algebra/#l02) before the independent check. Throughout this page, $n$ is a positive integer unless a more restrictive condition is stated. Induction is not a prerequisite for this lesson.

<section class="lesson-check" markdown="1">

### Prerequisite check

**Entry check (self-written):** Write $\sum_{r=2}^4(2r-1)$ without sigma notation and evaluate it. State how many terms it contains. Expand $(2r-1)(2r+1)$.

<details markdown="1"><summary>Hint</summary>

Substitute every integer from the lower limit to the upper limit, including both ends. In the product, multiply all four pairs of terms.

</details>

<details markdown="1"><summary>Check and repair the prerequisites</summary>

The index $r$ takes the values $2,3,4$, so the sum is $3+5+7=15$, with $4-2+1=3$ terms. Sigma means add the indicated terms; it does not mean substitute only the upper limit. For integer limits $1\le m\le n$, there are $n-m+1$ terms.

$$\begin{aligned}
(2r-1)(2r+1)&=4r^2+2r-2r-1\\
&=4r^2-1.
\end{aligned}$$

If sigma notation caused trouble, write a row for each allowed value of $r$ before adding. If the constant became $+1$, check $(-1)(+1)$; if a linear term remained, check the two cross-products. Cover this check and redo the same two steps before continuing.

</details>

</section>

## 1. Choose and use standard sums {#model}

A polynomial term can be expanded into powers of $r$. Linearity lets us add their sums separately and take constant factors outside. For positive integer $n$, the standard results are

$$\sum_{r=1}^n r=\frac{n(n+1)}2.$$

$$\sum_{r=1}^n r^2=\frac{n(n+1)(2n+1)}6.$$

$$\sum_{r=1}^n r^3=\frac{n^2(n+1)^2}4.$$

Use the formula matching the power **after expansion**. The sum of squares is not the square of the sum; the cube-sum formula happens to equal the square of the linear sum.

The constant term also has to be summed. From $r=1$ to $n$ there are $n$ copies of $1$, so

$$\sum_{r=1}^n1=n,\qquad \sum_{r=1}^n c=cn$$

for a constant $c$ independent of $r$. Thus a constant $-1$ in every term contributes $-n$, not $-1$.

<section class="worked-example" markdown="1">

### Expand before choosing a formula

**Demonstration (self-written):** Find a simplified expression for $\sum_{r=1}^n(2r-1)(2r+1)$.

The product expands to $4r^2-1$, so use the square-sum formula. Sum both parts:

$$\begin{aligned}
&\sum_{r=1}^n(2r-1)(2r+1)\\
&=4\sum_{r=1}^n r^2-\sum_{r=1}^n1\\
&=\frac{2n(n+1)(2n+1)}3-n.
\end{aligned}$$

To combine the terms, use denominator three and take out the common factor $n$. Then expand only the remaining brackets:

$$\begin{aligned}
&\frac{2n(n+1)(2n+1)}3-n\\
&=\frac{n[2(n+1)(2n+1)-3]}3\\
&=\frac{n[2(2n^2+3n+1)-3]}3\\
&=\frac{n(4n^2+6n-1)}3.
\end{aligned}$$

For $n=1$, the original sum is $1\times3=3$, and the formula gives $3$. For $n=2$, it gives $18=3+15$. These are arithmetic checks; the algebra establishes the result for every positive integer $n$.

</section>

### Change the lower limit {#lower-limits}

Let $F(n)$ denote the sum of a given term from $1$ to $n$, and set $F(0)=0$. To keep terms from $m$ onwards, remove only those before $m$:

$$\sum_{r=m}^n f(r)=F(n)-F(m-1),\qquad 1\le m\le n.$$

Subtracting $F(m)$ would remove the first required term as well. A sum starting at $3$ needs the $r=1$ and $r=2$ terms removed, not the $r=3$ term.

<section class="lesson-check" markdown="1">

#### Pause and complete the steps

**Scaffold (self-written):** Use the standard sums to evaluate $\sum_{r=3}^n(3r^2+2r)$ for integer $n\ge3$; first find the sum from 1 to n.

<details markdown="1"><summary>Hint</summary>

Separate the square and linear terms. After finding $F(n)$, calculate $F(2)$ or add the first two terms directly.

</details>

<details markdown="1"><summary>Worked check</summary>

$$\begin{aligned}
&F(n)\\
&=3\frac{n(n+1)(2n+1)}6+2\frac{n(n+1)}2\\
&=\frac{n(n+1)[(2n+1)+2]}2\\
&=\frac{n(n+1)(2n+3)}2.
\end{aligned}$$

The unwanted terms are $5$ and $16$, so $F(2)=21$. Hence

$$\sum_{r=3}^n(3r^2+2r)=\frac{n(n+1)(2n+3)}2-21.$$

At $n=3$, this is $54-21=33$, the single required term. If you subtracted $54$, revisit [which terms the lower limit removes](#lower-limits).

</details>

</section>

## 2. Keep the uncancelled boundaries {#demonstration}

Sometimes the term is already a difference $f(r)-f(r+k)$, or a fraction can be written that way. The method of differences adds a finite list and cancels equal positive and negative terms. The shift $k$ determines which boundary terms can remain; it does not guarantee that the infinite series converges.

<section class="worked-example" markdown="1">

### A fraction with a shift of two

**Demonstration (self-written):** Find $S_n=\sum_{r=1}^n1/[r(r+2)]$.

The two denominator factors differ by two. Subtracting their reciprocals gives

$$\frac1r-\frac1{r+2}=\frac{(r+2)-r}{r(r+2)}=\frac2{r(r+2)},$$

so each original term is half this difference. All denominators are nonzero because $r\ge1$.

For a concrete finite list, take $n=4$:

$$\begin{aligned}
2S_4={}&\left(1-\frac13\right)+\left(\frac12-\frac14\right)\\
&+\left(\frac13-\frac15\right)+\left(\frac14-\frac16\right)\\
={}&1+\frac12-\frac15-\frac16.
\end{aligned}$$

Here $1/3$ and $1/4$ each occur with both signs. In the general list, for $n\ge3$,

$$\begin{aligned}
2S_n={}&\left(1+\frac12+\frac13+\cdots+\frac1n\right)\\
&-\left(\frac13+\cdots+\frac1n+\frac1{n+1}+\frac1{n+2}\right).
\end{aligned}$$

The common band runs from $1/3$ to $1/n$ (just $1/3$ when $n=3$). The first two positive terms have no negative partners; the last two negative terms have no positive partners. Therefore

$$S_n=\frac12\left(1+\frac12-\frac1{n+1}-\frac1{n+2}\right).$$

Do not invent a cancellation band when there are too few terms. At $n=2$ the two pairs have no common term, and give the same formula. When $n=1$, smaller than the shift, check the single original term directly: $S_1=1/3$. The proposed formula gives

$$\frac12\left(1+\frac12-\frac12-\frac13\right)=\frac13,$$

so it holds for every positive integer $n$.

</section>

### An infinite sum is a limit {#infinite-sums}

For terms $a_r$ starting at a fixed $m$, the finite partial sum is $S_n=\sum_{r=m}^n a_r$. The series has a finite sum $L$ precisely when these partial sums tend to a finite limit:

$$\sum_{r=m}^\infty a_r=L\quad\text{means}\quad\lim_{n\to\infty}S_n=L.$$

For the demonstrated fraction, both remaining boundary fractions tend to zero:

$$\frac1{n+1}\longrightarrow0,\qquad\frac1{n+2}\longrightarrow0.$$

Consequently

$$\sum_{r=1}^\infty\frac1{r(r+2)}
=\lim_{n\to\infty}S_n=\frac34.$$

We cancelled finite terms first, then took a limit; we did not “cancel terms at infinity”. By contrast,

$$\begin{aligned}
\sum_{r=1}^n(2r-1)&=2\frac{n(n+1)}2-n\\
&=n^2\longrightarrow\infty,
\end{aligned}$$

so that infinite series diverges. A few numerical partial sums suggest a trend but cannot establish a limit. A term tending to zero alone is also insufficient: the partial sums themselves must have a finite limit.

## Work independently {#practice}

Keep the examples out of view and explain why your chosen method fits each expression. All exercises here are **self-written**, with no official marks. Hints and solutions open separately; if you use a hint, record that attempt as completed with help.

<section class="lesson-check" markdown="1">

#### Question 1 {#practice-1}

**Independent task (self-written):** Find $T_n=\sum_{r=1}^n r^2(r+1)$ in factorised form for positive integer $n$. Hence find $\sum_{r=3}^n r^2(r+1)$ for integer $n\ge3$. Check the latter result at the smallest allowed value of $n$.

<details markdown="1"><summary>Hint</summary>

Inspect the expanded term. In the second part, use your result for $T_n$ and identify exactly which earlier terms must be removed.

</details>

<details markdown="1"><summary>Solution and check</summary>

Expanding gives $r^3+r^2$, so both standard sums are needed:

$$\begin{aligned}
T_n&=\sum_{r=1}^n r^3+\sum_{r=1}^n r^2\\
&=\frac{n^2(n+1)^2}4+\frac{n(n+1)(2n+1)}6\\
&=\frac{n(n+1)[3n(n+1)+2(2n+1)]}{12}\\
&=\frac{n(n+1)(3n^2+7n+2)}{12}\\
&=\frac{n(n+1)(3n+1)(n+2)}{12}.
\end{aligned}$$

The common denominator is twelve; the common factor is $n(n+1)$. For the final factorisation, split the middle term and group a common bracket:

$$\begin{aligned}
&3n^2+7n+2\\
&=3n^2+6n+n+2\\
&=3n(n+2)+(n+2)\\
&=(3n+1)(n+2).
\end{aligned}$$

Expand the two factors to check. If this step was difficult, revisit [AS quadratics](/alevel/as-mathematics/algebra/#l02), then refactor this expression without looking at the steps.

“Hence” calls for this previous result: $T_2=2+12=14$, so

$$\begin{aligned}
&\sum_{r=3}^n r^2(r+1)\\
&=T_n-T_2\\
&=\frac{n(n+1)(3n+1)(n+2)}{12}-14.
\end{aligned}$$

At $n=3$, this is $50-14=36=3^2(3+1)$. If one standard sum is missing, revisit [expansion and linearity](#model). If your subtraction removes $36$ as well, revisit [lower limits](#lower-limits), then try [retry 1](#retry-1).

</details>

</section>

<section class="lesson-check" markdown="1">

#### Question 2 {#practice-2}

**Independent task (self-written):** For integer $n\ge3$, find a closed form for $\sum_{r=3}^n1/[r(r+1)]$ and its infinite sum. A student claims that $\sum_{r=1}^\infty 1/[r(r+1)]+\sum_{r=1}^\infty1$ is finite “because most terms cancel”. Assess the claim.

<details markdown="1"><summary>Hint</summary>

Seek a difference for the fraction; write the first and last terms. For the claim, inspect finite partial sums before taking a limit.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\frac1{r(r+1)}=\frac1r-\frac1{r+1}.$$

For $n\ge4$, the first pair is $1/3-1/4$ and the last is $1/n-1/(n+1)$. Group the two lists:

$$\begin{aligned}
&\sum_{r=3}^n\frac1{r(r+1)}\\
&=\left(\frac13+\frac14+\cdots+\frac1n\right)\\
&\quad-\left(\frac14+\cdots+\frac1n+\frac1{n+1}\right)\\
&=\frac13-\frac1{n+1}.
\end{aligned}$$

At $n=3$ there is just one pair, giving $1/12=1/3-1/4$ as required. The remaining fraction tends to zero, so the infinite sum from $r=3$ is $1/3$.

The claim instead starts at $r=1$. Its combined finite partial sum is

$$\left(1-\frac1{n+1}\right)+n\longrightarrow\infty.$$

It therefore diverges: cancellation in one part cannot remove the added $n$. If your answer used $1/3$ for this claim, recheck its lower limit. For a missing boundary, return to [the finite list](#demonstration), then try [retry 2](#retry-2). For a limit without justification, revisit [partial sums](#infinite-sums), then try [retry 3](#retry-3).

</details>

</section>

## Diagnose and retry {#retry}

Choose the retry matching your difficulty. Missing powers or incorrect subtraction: revisit [standard sums](#model) and [lower limits](#lower-limits), then retry 1. Missing boundary terms: revisit [finite cancellation](#demonstration), then retry 2. Assuming cancellation guarantees convergence: revisit [the partial-sum limit](#infinite-sums), then retry 3. Close the old solution before making a fresh attempt.

<section class="lesson-check" markdown="1">

#### Retry 1 {#retry-1}

**Retry (self-written):** For integer $n\ge4$, find a simplified expression for $\sum_{r=4}^n r^2(2r-1)$. Explain your method and check the result when $n=4$.

<details markdown="1"><summary>Hint</summary>

Expand the term, find its sum from $1$ to $n$, and decide whether the unwanted prefix ends at $3$ or $4$.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
&G(n)\\
&=2\sum_{r=1}^n r^3-\sum_{r=1}^n r^2\\
&=\frac{n^2(n+1)^2}2-\frac{n(n+1)(2n+1)}6\\
&=\frac{n(n+1)[3n(n+1)-(2n+1)]}6\\
&=\frac{n(n+1)(3n^2+n-1)}6.
\end{aligned}$$

Remove $G(3)=1+12+45=58$, giving

$$\begin{aligned}
&\sum_{r=4}^n r^2(2r-1)\\
&=\frac{n(n+1)(3n^2+n-1)}6-58.
\end{aligned}$$

At $n=4$, $170-58=112=4^2(2\times4-1)$. An incorrect coefficient of a power calls for [expansion and formula selection](#model); an empty sum at $n=4$ means you removed the required first term, so return to [lower limits](#lower-limits).

</details>

</section>

<section class="lesson-check" markdown="1">

#### Retry 2 {#retry-2}

**Retry (self-written):** For integer $n\ge2$, find $R_n=\sum_{r=2}^n1/[r(r+2)]$ and its infinite sum. Show the uncancelled boundary terms and check $n=2$ directly.

<details markdown="1"><summary>Hint</summary>

Use the difference identity from the demonstration, but start your actual list at $r=2$. A one-term sum cannot contain an interior cancellation band.

</details>

<details markdown="1"><summary>Solution and check</summary>

For $n\ge4$, group the positive and negative terms:

$$\begin{aligned}
&2R_n\\
&=\left(\frac12+\frac13+\frac14+\cdots+\frac1n\right)\\
&-\left(\frac14+\cdots+\frac1n+\frac1{n+1}+\frac1{n+2}\right).
\end{aligned}$$

Thus

$$R_n=\frac12\left(\frac12+\frac13-\frac1{n+1}-\frac1{n+2}\right).$$

At $n=3$, the two pairs are $(1/2-1/4)$ and $(1/3-1/5)$, with no cancellation. They give the same formula. At $n=2$, the original sum is $1/(2\times4)=1/8$; the formula gives $\tfrac12(1/2+1/3-1/3-1/4)=1/8$ too.

The last two fractions tend to zero, so the infinite sum is $\tfrac12(1/2+1/3)=5/12$. If you obtained $3/4$, you kept the boundary for a sum starting at $1$; compare your first pair with [the demonstration](#demonstration).

</details>

</section>

<section class="lesson-check" markdown="1">

#### Retry 3 {#retry-3}

**Retry (self-written):** Evaluate $\sum_{r=1}^n[r^3-(r-1)^3]$ and decide whether its infinite series converges.

<details markdown="1"><summary>Hint</summary>

Write the first two differences and the last one. After cancellation, take the limit of what remains.

</details>

<details markdown="1"><summary>Solution and check</summary>

For $n\ge2$, the first difference is $1^3-0^3$ and the last is $n^3-(n-1)^3$. Grouping the finite sums gives

$$\begin{aligned}
&\sum_{r=1}^n[r^3-(r-1)^3]\\
&=(1^3+\cdots+n^3)\\
&\quad-[0^3+1^3+\cdots+(n-1)^3]\\
&=n^3-0^3=n^3.
\end{aligned}$$

At $n=1$, the single difference also gives $1$. Since $n^3\to\infty$, the infinite series diverges despite cancellation. If you wrote zero, you removed the unmatched final $n^3$; if you wrote “convergent”, return to [the finite-limit requirement](#infinite-sums).

</details>

</section>

## Review after the next lesson {#later-review}

After studying the next lesson, return without rereading these examples. Select your method from each expression, and record any help you use.

<section class="lesson-check" markdown="1">

#### Mixed review

**Later review (self-written):** For integer $n\ge2$, find closed forms for $A_n=\sum_{r=2}^n(r^3-r^2)$ and $B_n=\sum_{r=2}^n[1/(r+1)-1/(r+2)]$. Explain your choice of method for each. Decide whether each corresponding infinite series has a finite sum, and justify your conclusions.

<details markdown="1"><summary>Hint</summary>

Compare the structure of the terms rather than their lower limits. Once you have exact finite sums, inspect their behaviour as $n$ increases.

</details>

<details markdown="1"><summary>Solution and check</summary>

For $A_n$, use the cube and square sums; the removed $r=1$ term is zero:

$$\begin{aligned}
A_n&=\frac{n^2(n+1)^2}4-\frac{n(n+1)(2n+1)}6\\
&=\frac{n(n+1)[3n(n+1)-2(2n+1)]}{12}\\
&=\frac{n(n+1)(3n^2-n-2)}{12}\\
&=\frac{n(n+1)(3n+2)(n-1)}{12}.
\end{aligned}$$

Its leading term is $n^4/4$, so $A_n\to\infty$ and the series diverges. For $B_n$, add the differences. For $n\ge3$, the first pair is $1/3-1/4$ and the last is $1/(n+1)-1/(n+2)$:

$$\begin{aligned}
B_n&=\left(\frac13+\cdots+\frac1{n+1}\right)\\
&\quad-\left(\frac14+\cdots+\frac1{n+2}\right)\\
&=\frac13-\frac1{n+2}.
\end{aligned}$$

The final fraction tends to zero, so this series converges to $1/3$. At $n=2$, check $A_2=4$ and $B_2=1/12$ directly; both formulas agree. For a missing power, return to [standard sums](#model); for a wrong endpoint, to [finite cancellation](#demonstration); for an unjustified convergence claim, to [partial sums](#infinite-sums).

</details>

</section>

## Where to go next {#next-step}

If you can select and explain your method, preserve the correct boundaries and pass the matching retry without help, continue to [rates and approximations](/alevel/as-further-mathematics/rates-and-approximations/). Keep this page's [mixed review](#later-review) for after that lesson. If you have not yet done the previous page's [complex-number review](/alevel/as-further-mathematics/complex-numbers-and-roots/#later-review), complete it now with its examples closed.

## Sources and scope {#sources}

All demonstrations and exercises on this page are **self-written**, without official marks. FP1.5 covers applications of square and cube sums, the method of differences and infinite sums when the partial-sum limit exists.

<details markdown="1"><summary>Official references and specimen identity</summary>

Scope follows 9665 v5.2. The paired questions and mark schemes below informed the required evidence; these exercises do not reproduce their questions or award official marks.

FM01 specimen identity: the QP body says **Specimen 2018 Morning**; its filename contains 2019/v3 and footer versions vary. The officially paired MS is a specimen with copyright 2017, not a live-exam Final MS.

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FP1.5.
- FM01 specimen Q1, Q6; QP pp.2,9, MS pp.4,7. [FM01 specimen QP](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-specimen-paper-2019-v3-1.pdf) · [Specimen MS](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-mark-scheme-2017-v2-1.pdf).

</details>

[Previous](/alevel/as-further-mathematics/complex-numbers-and-roots/) · [Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/rates-and-approximations/)

{% include exam_topic_practice.html %}
