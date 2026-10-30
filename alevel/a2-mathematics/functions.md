---
title: Functions, Composite Functions and Inverse Functions
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
permalink: /alevel/a2-mathematics/functions/
toc_headings: h2, h3
reading_layout: true
study_page: true
---

[Pure Mathematics](/alevel/a2-mathematics/) · P2.1 Algebra and Functions
{: .lesson-meta}

What numbers can you put into a rule, and what numbers can come out? Start with these questions, then put two rules together and find when a rule can be undone.

Textbook: Chapter 1, Sections 1.1–1.3 (pp. 2–8). The examples and practice questions below are self-written teaching exercises.

- **Learning:** start with [domain and range](#domain-and-range), then follow the worked examples.
- **Homework help:** go to [composite functions](#composite-functions) or [inverse functions](#inverse-functions).
- **Revision:** try the [practice questions](#practice) before opening the solutions. Use the [quick reference](#quick-reference) to check a method.
{: .lesson-routes}

<div class="lesson-notes" markdown="1">

**Before you start:** substitute values and solve linear equations. For a quadratic range, complete the square and check its turning point and interval endpoints (recover [AS Algebra L02](/alevel/as-mathematics/algebra/#l02)). Start by fixing the allowed inputs, then find the outputs; composites and inverses will use those restrictions. If revising, go to [independent practice](#practice), then choose a new task from [repair and retry](#repair-and-retry). In a later lesson, use [the review task](#later-review) to check what you retain.

</div>

## Domain and Range

Think of a rule that takes a number in and gives a number back. It is a **function** if every allowed input gives exactly one output. For example, $f(x)=x^2$ tells us to square the input: $f(-2)=4$ is one answer. The expression $\pm\sqrt{x}$ gives two answers when $x>0$, so it does not define a function of $x$.

- Collect all the numbers you are allowed to put in: this is the **domain**.
- Collect all the numbers you actually get out from those inputs: this is the **range**. It includes every possible output, not just a few that you have tried.

You can write this rule as $f(x)=x^2$ or $f:x\mapsto x^2$. Both mean “square the input”; the arrow shows input becoming output. State the allowed inputs too. If you allow fewer inputs, some outputs may no longer be possible.

### Find the allowed inputs first

| What to check | Condition | Example |
|---|---|---|
| A denominator | It must not be zero | $\displaystyle\frac{1}{x-2}$ requires $x\ne2$ |
| A square root | The expression inside must be non-negative | $\sqrt{x-3}$ requires $x\geq3$ |
| A logarithm | The expression inside must be positive | $\ln(x+1)$ requires $x>-1$ |
| A stated domain | Use the restriction in the question | $x^2$ with $x\geq2$ has range $f(x)\geq4$ |

If a question asks for the largest possible real domain, use every real input for which the expression is defined. If it gives a smaller domain, use that domain.

<section class="worked-example" markdown="1">

### Example 1 — A turning point can lie inside the domain

**Question:** The function $f$ is defined by $f(x)=(x-1)^2+2$ for $-1\leq x\leq3$. Find its range.

**Method:** We need the smallest and largest outputs, and must explain what happens between them. A square is smallest when the expression being squared is zero, so check that input before checking the two ends of the allowed interval.

The squared term cannot be negative. The graph is a parabola with minimum point $(1,2)$: here the square is zero. Since $x=1$ is an allowed input, the minimum output is $2$.

The inputs furthest horizontally from the lowest point are the two ends. They give the largest square on this interval:

$$f(-1)=6,\qquad f(3)=6.$$

The curve has no gaps as the input runs through the interval, so it reaches every height between this minimum and maximum. Therefore,

$$\boxed{2\leq f(x)\leq6}.$$

**Check:** $f(0)=3$ lies in the range. The value $7$ cannot occur because $(x-1)^2\leq4$ on this domain.

**Common mistake:** using only the outputs at the ends. Both are $6$, but the range is not just $\lbrace6\rbrace$.

</section>

### One-to-one and many-to-one

Could you recover the input if you were told only the output? You can if different inputs always give different outputs: this is a **one-to-one function**. If two or more different inputs can give the same output, the function is **many-to-one**; the output alone does not tell you which input was used.

In Example 1, $f(-1)=f(3)=6$, so $f$ is many-to-one. If its domain is restricted to $1\leq x\leq3$, the output increases as $x$ increases, so the function is one-to-one.

On a graph, a horizontal line meets a one-to-one function at most once. This will help you decide whether an inverse function exists.

<section class="worked-example" markdown="1">

### Example 2 — A piecewise function and a finite domain

A rule can tell you to do different calculations for different inputs. This is a **piecewise function**. First read which condition your input satisfies; then use the formula next to that condition. At a boundary, check which condition includes equality.

**Question:** For real $x$, let

$$p(x)=\begin{cases}x^2,&x\leq0,\\2x+1,&x>0.\end{cases}$$

Find $p(-2)$, $p(0)$ and $p(2)$, and state the range. Then find the range when the domain is restricted to $\lbrace-2,0,2\rbrace$.

The first part gives $p(-2)=4$ and $p(0)=0$. The second gives $p(2)=5$.

For all real inputs, the first part gives every output at least zero; the second gives outputs greater than $1$. The full range is therefore $\boxed{p(x)\geq0}$.

For the finite domain, only three inputs are allowed, so the range is $\boxed{\lbrace0,4,5\rbrace}$. Its graph consists of three separate points, not a continuous curve.

**Sketch check:** for the full real domain, draw $y=x^2$ only for $x\leq0$, with a filled point at $(0,0)$. Draw $y=2x+1$ only for $x>0$, with an open point at $(0,1)$. There is still only one output at $x=0$.

</section>

## Composite Functions

A **composite function** uses the output of one rule as the input to another. The notation $fg(x)$ means $f(g(x))$: apply $g$ first, then feed its answer into $f$.

$$x\xrightarrow{g}g(x)\xrightarrow{f}f(g(x)).$$

**Check both stages:** start with the input $x$: can the first rule, $g$, accept it? Next take its output $g(x)$: can the second rule, $f$, accept that number? Both answers must be yes. Checking only whether the final formula can be calculated may miss a restriction from one of the original rules.

<section class="worked-example" markdown="1">

### Example 3 — Order changes the formula and the domain {#example-2--order-changes-the-formula-and-the-domain}

**Question:** Let $f(x)=2x-3$ for $x\in\mathbb R$, and $g(x)=\sqrt{x}$ for $x\geq0$. Find $fg(x)$ and $gf(x)$, with their domains and ranges.

**Find $fg(x)$.** Apply $g$ first. Its answer becomes the input to the next rule: double that answer, then subtract three.

$$fg(x)=f(\sqrt{x})=\boxed{2\sqrt{x}-3}.$$

The input must satisfy $x\geq0$. The output of $g$ is allowed by $f$, since $f$ accepts all real numbers. The minimum output is $-3$, at $x=0$.

**Domain:** $x\geq0$. **Range:** $fg(x)\geq-3$.

**Find $gf(x)$.** Now apply $f$ first. Feed its whole answer into the square-root rule, so the whole expression goes under the square root:

$$gf(x)=g(2x-3)=\boxed{\sqrt{2x-3}}.$$

The number $2x-3$ now goes under a square root. It must be non-negative for $g$ to accept it, so

$$2x-3\geq0\quad\Rightarrow\quad x\geq\frac32.$$

**Domain:** $x\geq\frac32$. **Range:** $gf(x)\geq0$.

**Check the order:** $fg(4)=1$, but $gf(4)=\sqrt5$. In general, $fg$ and $gf$ are different functions.

**Common mistake:** treating $fg(x)$ as the product $f(x)g(x)$. Here, that product would be $(2x-3)\sqrt{x}$, which is a different expression.

</section>

<section class="lesson-check" markdown="1">

### Check your reasoning {#spot-the-error--which-order-needs-the-restriction}

Let $f(x)=\sqrt{x}$ for $x\geq0$ and $g(x)=x-2$ for $x\in\mathbb R$. A student writes:

$$gf(x)=\sqrt{x}-2,\qquad x\geq2.$$

Is the statement correct? Explain and give the correct domain.

<details markdown="1">
<summary>Hint</summary>

Follow $x\to f(x)\to g(f(x))$ and check each input; do not impose an extra condition on the final output.

</details>

<details markdown="1">
<summary>Show the correction</summary>

The formula is correct, but the domain is $x\geq0$. The function $g$ accepts negative inputs and can give negative outputs. There is no need for $\sqrt{x}-2$ to be non-negative.

The other order is $fg(x)=\sqrt{x-2}$, which does require $x\geq2$.

</details>

</section>

## Inverse Functions

An **inverse function** takes an output of the original rule and returns the input that produced it. It sends the range of $f$ back to the domain of $f$, and is written $f^{-1}$.

**The notation $f^{-1}(x)$ does not mean $\frac{1}{f(x)}$.**

A function has an inverse only if it is one-to-one on its stated domain. If two inputs give the same output, reversing the mapping would give two answers for one input.

### Find an inverse

1. Check whether the function is one-to-one. Use the stated domain.
2. Write $y=f(x)$.
3. Interchange $x$ and $y$: the old output is now the input, and the old input is what you want back.
4. Rearrange to leave $y$ alone. If taking a square root gives a choice of signs, keep the one that returns an allowed original input.
5. State the domain and range of $f^{-1}$.

The domain and range swap:

| Original function | Inverse function |
|---|---|
| Domain of $f$ | Range of $f^{-1}$ |
| Range of $f$ | Domain of $f^{-1}$ |

<section class="worked-example" markdown="1">

### Example 4 — Restrict the domain before choosing a square root {#example-3--restrict-the-domain-before-choosing-a-square-root}

**Question:** Let $f(x)=(x-1)^2+2$ for $x\geq1$. Find $f^{-1}$, including its domain and range.

**Check:** This is the increasing part of the parabola, so $f$ is one-to-one. Its range is $f(x)\geq2$.

Write $y=(x-1)^2+2$. To undo this rule, we need to recover the number that went in. Interchange $x$ and $y$, subtract two, then take square roots:

$$x=(y-1)^2+2\quad\Rightarrow\quad y-1=\pm\sqrt{x-2}.$$

The inverse must return an allowed original input, so $y\geq1$. Subtracting one leaves a non-negative number. Choose the positive square root; the negative choice would also return numbers below the allowed starting point:

$$\boxed{f^{-1}(x)=1+\sqrt{x-2}}.$$

**Domain of $f^{-1}$:** $x\geq2$. **Range of $f^{-1}$:** $f^{-1}(x)\geq1$.

**Check both directions:**

$$f(f^{-1}(x))=(\sqrt{x-2})^2+2=x,\qquad x\geq2.$$

$$f^{-1}(f(x))=1+\sqrt{(x-1)^2}=1+\lvert x-1\rvert=x,\qquad x\geq1.$$

The last step uses $x\geq1$. In general, $\sqrt{a^2}=\lvert a\rvert$, not always $a$.

**Common mistake:** giving both square roots as the inverse. The inverse is a function, so each allowed input must give one output.

</section>

### What happens to the graph?

Reflect the graph of $y=f(x)$ in the line $y=x$ to obtain the graph of $y=f^{-1}(x)$. A point $(a,b)$ becomes $(b,a)$.

For Example 4, $(1,2)$ and $(2,3)$ on $f$ become $(2,1)$ and $(3,2)$ on $f^{-1}$.

![Graphs of y equals x squared for non-negative x and its inverse y equals the square root of x, reflected in y equals x. The points (2,4) and (4,2) swap.](/assets/img/functions-inverse.svg)

The diagram uses the simpler pair $f(x)=x^2$ for $x\geq0$ and $f^{-1}(x)=\sqrt{x}$. The same reflection rule applies to Example 4.

<section class="worked-example" markdown="1">

### Example 5 — An excluded input becomes an excluded output {#example-4--an-excluded-input-becomes-an-excluded-output}

**Question:** Let $h(x)=3+\frac{1}{x-2}$ for $x\ne2$. Find $h^{-1}$, including its domain and range.

The fraction has numerator one, so it can never be zero: $h(x)\ne3$. To see whether every output other than $3$ comes from just one input, rearrange the equation backwards. The calculation below gives one allowed original input for each such output, so $h$ is one-to-one.

Interchange $x$ and $y$ in $y=3+\frac{1}{x-2}$:

$$x=3+\frac{1}{y-2}\quad\Rightarrow\quad x-3=\frac{1}{y-2}\quad\Rightarrow\quad y=2+\frac{1}{x-3}.$$

$$\boxed{h^{-1}(x)=2+\frac{1}{x-3}}.$$

**Domain of $h^{-1}$:** $x\ne3$. **Range of $h^{-1}$:** $h^{-1}(x)\ne2$.

**Check:** $h(4)=\frac72$, and $h^{-1}(\frac72)=4$. Also,

$$h(h^{-1}(x))=3+\frac{1}{\frac{1}{x-3}}=x,\qquad x\ne3.$$

</section>

## Practice

**Independent practice · 20–25 minutes**

Try each question on paper before opening a hint or solution. Give the domain and range when asked, and explain any restriction. These are self-written exercises, with no official marks. The time is only a guide.

<section class="lesson-check" markdown="1">

### Question 1 {#q1--domain-and-range-of-a-square-root}

Find the largest possible real domain and the range of $f(x)=\sqrt{5-x}$.

<details markdown="1">
<summary>Hint</summary>

The expression inside the square root must be non-negative. What happens to the output as $x$ becomes more negative?

</details>

<details markdown="1">
<summary>Solution and check</summary>

$5-x\geq0$ gives **domain** $x\leq5$. The output is non-negative and has no upper bound, so the **range** is $f(x)\geq0$.

For any output $y\geq0$, the input $x=5-y^2$ is allowed and gives $f(x)=y$. This checks that every non-negative output occurs.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 2 {#q2--a-restricted-domain-does-not-always-give-an-inverse}

Let $f(x)=x^2$ for $-2\leq x\leq1$. Find its range. Does it have an inverse function on this domain? Explain your answer.

<details markdown="1">
<summary>Hint</summary>

Check $x=0$ as well as the ends. Compare $f(-1)$ and $f(1)$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The minimum output is $0$, at $x=0$, and the maximum is $4$, at $x=-2$. The **range** is $0\leq f(x)\leq4$.

There is **no inverse function** on the stated domain: $f(-1)=f(1)=1$, so $f$ is many-to-one. Restricting the domain to $-2\leq x\leq0$ would give a one-to-one function, but it would be a new restriction.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 3 {#q3--keep-the-stated-domains-when-forming-composites}

Let $f(x)=3x+1$ for $x\in\mathbb R$ and $g(x)=x^2$ for $x\geq0$. Find $fg(x)$ and $gf(x)$, with their domains and ranges.

<details markdown="1">
<summary>Hint</summary>

For $gf$, the output of $f$ must be an allowed input of $g$. The expression $x^2$ is defined for negative $x$, but the stated function $g$ only accepts $x\geq0$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$fg(x)=3x^2+1,\qquad x\geq0,\qquad fg(x)\geq1.$$

$$gf(x)=(3x+1)^2,\qquad x\geq-\frac13,\qquad gf(x)\geq0.$$

For $gf$, solve $3x+1\geq0$ to find the domain. Do not extend it just because the final squared expression is defined for all real $x$.

As a check on the order, $fg(1)=4$ and $gf(1)=16$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 4 {#q4--find-the-inverse-of-a-rational-function}

Let $f(x)=\frac{2x+1}{x-3}$ for $x\ne3$. Find $f^{-1}$, and state its domain and range.

<details markdown="1">
<summary>Hint</summary>

You can write $f(x)=2+\frac{7}{x-3}$. Which output is excluded? After interchanging $x$ and $y$, multiply by $y-3$ and collect the terms in $y$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The range of $f$ is all real values except $2$. Each allowed output gives one input, so the inverse exists.

$$x=\frac{2y+1}{y-3}\quad\Rightarrow\quad xy-3x=2y+1\quad\Rightarrow\quad y(x-2)=3x+1.$$

$$\boxed{f^{-1}(x)=\frac{3x+1}{x-2}}.$$

**Domain:** $x\ne2$. **Range:** $f^{-1}(x)\ne3$.

Check a pair: $f(4)=9$ and $f^{-1}(9)=4$. To check the formula fully, substitute it into $f$:

$$f(f^{-1}(x))=\frac{\frac{2(3x+1)}{x-2}+1}{\frac{3x+1}{x-2}-3}=\frac{\frac{7x}{x-2}}{\frac{7}{x-2}}=x,\qquad x\ne2.$$

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 5 {#q5--choose-the-negative-square-root}

Let $f(x)=(x+2)^2-1$ for $x\leq-2$. Find $f^{-1}$, including its domain and range. Check $f^{-1}(f(x))$ on the original domain.

<details markdown="1">
<summary>Hint</summary>

The inverse output must be at most $-2$. After interchanging $x$ and $y$, choose the square root that satisfies $y+2\leq0$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$f$ is one-to-one on $x\leq-2$ and has range $f(x)\geq-1$.

$$x=(y+2)^2-1\quad\Rightarrow\quad y+2=-\sqrt{x+1}.$$

$$\boxed{f^{-1}(x)=-2-\sqrt{x+1}}.$$

**Domain:** $x\geq-1$. **Range:** $f^{-1}(x)\leq-2$.

$$f^{-1}(f(x))=-2-\sqrt{(x+2)^2}=-2-\lvert x+2\rvert.$$

Since $x\leq-2$, $\lvert x+2\rvert=-(x+2)$, so this equals $x$.

Check a pair: $f(-4)=3$ and $f^{-1}(3)=-4$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 6 {#q6--select-the-correct-part-of-a-function}

Let $h(x)=x+2$ for $x<1$ and $h(x)=x^2$ for $x\geq1$. Find $h(-2)$ and $h(1)$, and state the range for all real inputs. Then state the range for the domain $\lbrace-2,0,1,2\rbrace$.

<details markdown="1">
<summary>Hint</summary>

The boundary $x=1$ belongs to the second part. Find the range of each part before combining them.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$h(-2)=0$ and $h(1)=1$. The first part gives outputs below $3$; the second gives outputs at least $1$. Together they cover every real output, so the full range is $\boxed{\mathbb R}$.

For the finite domain, the outputs are $0,2,1,4$, so the range is $\boxed{\lbrace0,1,2,4\rbrace}$. Do not include values between these outputs: there are only four allowed inputs.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 7 {#check-inverse-graph}

<!-- task:check-inverse-graph -->
Let $u(x)=(x+1)^2-2$ for $x\leq-1$. Sketch $y=u(x)$ and $y=u^{-1}(x)$ on the same axes. Label the endpoint of each curve, the point on $u$ with input $-3$ and its corresponding point on $u^{-1}$. Explain how the domains appear in your sketches.
<!-- /task:check-inverse-graph -->

<details markdown="1">
<summary>Hint</summary>

Check that the restricted function is one-to-one. Swap each point’s coordinates, including the endpoint.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The original graph is the part of the parabola to the left of its lowest point, with included endpoint $(-1,-2)$. Since $u(-3)=2$, it contains $(-3,2)$. Reflection in $y=x$ gives the inverse endpoint $(-2,-1)$ and point $(2,-3)$.

$$u^{-1}(x)=-1-\sqrt{x+2},\qquad x\geq-2,\qquad u^{-1}(x)\leq-1.$$

Draw the curves with these filled endpoints: the original only uses $x\leq-1$, and the inverse only uses $x\geq-2$. Saying “reflection” alone does not show the restrictions on the sketches. If you drew the part to the right of the lowest point, return to [the restricted-domain demonstration](#example-3--restrict-the-domain-before-choosing-a-square-root).

</details>

</section>

## Repair and try again {#repair-and-retry}

Close the old solution. Use the error you made to choose a short review, then attempt a new task. Record any hint you use.

| Error | Recovery action | New attempt |
| --- | --- | --- |
| Only checked endpoints, or chose the wrong square-root sign for the inverse | Return to [the range example](#example-1--a-turning-point-can-lie-inside-the-domain); find the lowest point and check whether two allowed inputs give the same output | [R1](#retry-range) |
| Final formula hid a composite restriction | Review [composition](#composite-functions) and list the two input checks | [R2](#retry-composite) |
| Wrong piecewise boundary or finite range | Review [the piecewise demonstration](#example-2--a-piecewise-function-and-a-finite-domain); list the allowed inputs | [R3](#retry-piecewise) |

<section class="lesson-check" markdown="1">

### R1 {#retry-range}

<span id="retry-inverse"></span>

<!-- task:retry-range -->
Let $v(x)=(x+1)^2-2$ for $-3\leq x\leq0$. Find its range and decide whether it has an inverse. Now restrict its domain to $-3\leq x\leq-1$. Find the inverse, including its domain and range.
<!-- /task:retry-range -->

<details markdown="1">
<summary>Hint</summary>

Check the minimum and endpoints, then keep the inverse outputs in the newly restricted original domain.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$-2\leq v(x)\leq2,\qquad v(-2)=v(0)=-1.$$

On the first domain the repeated output prevents an inverse. On the restricted domain the function is strictly decreasing, with the same range $[-2,2]$, giving

$$v^{-1}(x)=-1-\sqrt{x+2},\qquad -2\leq x\leq2,\qquad -3\leq v^{-1}(x)\leq-1.$$

Check the swapped endpoints: $v(-3)=2$ and $v(-1)=-2$. The negative square root keeps the inverse output in $[-3,-1]$.

</details>

</section>

<section class="lesson-check" markdown="1">

### R2 {#retry-composite}

<!-- task:retry-composite -->
Let $f(x)=\sqrt{x}$ for $x\geq0$ and $g(x)=x^2$ for $x\geq2$. Find $fg$ and $gf$, including domains and ranges. Are they the same function?
<!-- /task:retry-composite -->

<details markdown="1">
<summary>Hint</summary>

Even if the expressions simplify alike, check what the first rule accepts, then whether its answer is allowed by the second rule.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$fg(x)=\sqrt{x^2}=x,\qquad x\geq2,\qquad fg(x)\geq2.$$

$$gf(x)=(\sqrt{x})^2=x,\qquad x\geq4,\qquad gf(x)\geq4.$$

For $gf$, require $\sqrt{x}\geq2$, so $x\geq4$. For $fg$, $g$ already requires $x\geq2$. They have the same formula but different domains, so they are different functions.

</details>

</section>

<section class="lesson-check" markdown="1">

### R3 {#retry-piecewise}

<!-- task:retry-piecewise -->
For real $x$, let

$$w(x)=\begin{cases}x+1,&x<0,\\(x-1)^2,&x\geq0.\end{cases}$$

Find $w(0)$ and the range. Then find the range on the finite domain $\lbrace-1,0,2\rbrace$.
<!-- /task:retry-piecewise -->

<details markdown="1">
<summary>Hint</summary>

Which condition includes $0$? Find the outputs from each part, then put those sets together, listing a repeated output only once.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$w(0)=1$. The first part gives $(-\infty,1)$; the second reaches $0$ at $x=1$ and covers $[0,\infty)$. Together, these outputs give $\mathbb R$. The finite domain gives outputs $0,1,1$, so its range is $\lbrace0,1\rbrace$; do not repeat $1$.

</details>

</section>

## Return later {#review}

After studying another topic, attempt this without rereading the examples. Record the first attempt, help, error and later result; an immediate correction is not yet retention evidence.

<section class="lesson-check" markdown="1">

### Review task {#later-review}

<!-- task:later-review -->
Let $f(x)=(x-2)^2+1$ for $x\leq2$ and $g(x)=x+1$ for all real $x$. Define $h=fg$. Find the domain and range of $h$, find $h^{-1}$ and sketch both graphs with endpoints and one other corresponding pair of points.
<!-- /task:later-review -->

<details markdown="1">
<summary>Hint</summary>

Start with the inputs permitted by the composite. How do points on the inverse correspond to the original graph?

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$h(x)=(x-1)^2+1,\qquad x\leq1,\qquad h(x)\geq1.$$

$$h^{-1}(x)=1-\sqrt{x-1},\qquad x\geq1,\qquad h^{-1}(x)\leq1.$$

The original is the part to the left of the lowest point, ending at $(1,1)$ and passing through $(0,2)$. The inverse ends at $(1,1)$ and passes through $(2,0)$. Draw decreasing curves reflected in $y=x$. Giving $x\leq2$ for $h$ ignores that the input to $f$ is $g(x)=x+1$; choosing the positive root puts inverse outputs outside the original domain. Review R2 or R1 if needed, close the solution, then recheck.

</details>

</section>

## Quick Reference

| Task | Method | Check |
|---|---|---|
| Find a domain | Use the stated domain and check denominators, roots and logarithms | Is every input allowed? |
| Find a range | Use the graph or rewrite the function; check turning points and ends | Does every claimed output occur? |
| Find $fg(x)$ | Substitute $g(x)$ into $f$ | $x$ is allowed by $g$, and $g(x)$ is allowed by $f$ |
| Find an inverse | Check one-to-one, interchange $x$ and $y$, then rearrange | Swap the domain and range; choose the correct sign |
| Check an inverse | Simplify $f(f^{-1}(x))$ and $f^{-1}(f(x))$ | Each equals $x$ on its own allowed domain |
| Sketch an inverse | Reflect in $y=x$ | $(a,b)$ becomes $(b,a)$ |

**After practice:** note whether the error was in the formula, the order, the domain, the range or the square-root sign. Use [repair and retry](#repair-and-retry) for a new question on that error, then [return later](#later-review).

**You should be able to:** state a domain and range, form both orders of a composite function, explain whether an inverse exists and find it with the correct restrictions.

Return to the [Pure topic index](/alevel/a2-mathematics/) or use the [Functions formula reference](/alevel/a2-mathematics/quick-reference/#functions).

<details markdown="1">
<summary>Scope and sources</summary>

[OxfordAQA 9660 specification v5.2, P2.1](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf).

Official questions and paired marking material consulted (mirrors of the published papers): January 2025 Q6(a)–(b), QP p12 / MS p11. [January 2025 QP](https://aqamat.alevelclouds.com/25_01_QP_P2.pdf) · [MS](https://aqamat.alevelclouds.com/25_01_MS_P2.pdf).

The classroom examples, practice, retries and review are self-written teaching material, with no official marks.

</details>

**Learning path:** [Topic index](/alevel/a2-mathematics/) · [Next: Modulus Functions and Transformations](/alevel/a2-mathematics/modulus-and-transformations/).

{% include exam_topic_practice.html %}
