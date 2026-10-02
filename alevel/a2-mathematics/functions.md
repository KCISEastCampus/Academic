---
title: Functions, Composite Functions and Inverse Functions
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
permalink: /alevel/a2-mathematics/functions/
toc_headings: h2
study_page: true
---

[Pure Mathematics](/alevel/a2-mathematics/) · P2.1 Algebra and Functions

Learn to find a domain and range, form a composite function and find an inverse function. Check the allowed inputs at every step.

Textbook: Chapter 1, Sections 1.1–1.3 (pp. 2–8). The examples and practice questions below are self-written teaching exercises.

- **Learning:** start with [domain and range](#domain-and-range), then follow the worked examples.
- **Homework help:** go to [composite functions](#composite-functions) or [inverse functions](#inverse-functions).
- **Revision:** try the [practice questions](#practice) before opening the solutions. Use the [quick reference](#quick-reference) to check a method.

**Before you start:** you should know how to substitute values, solve simple equations, complete the square and sketch basic graphs.

## Domain and Range

A **function** gives exactly one output for each input in its domain. For example, $f(x)=x^2$ is a function: $f(-2)=4$ is one answer. The expression $\pm\sqrt{x}$ gives two answers when $x>0$, so it does not define a function of $x$.

- The **domain** is the set of allowed input values.
- The **range** is the set of output values for that domain.

You can write a function as $f(x)=x^2$ or $f:x\mapsto x^2$. State its domain too. Changing the domain may change the range.

### Find the allowed inputs first

| What to check | Condition | Example |
|---|---|---|
| A denominator | It must not be zero | $\displaystyle\frac{1}{x-2}$ requires $x\ne2$ |
| A square root | The expression inside must be non-negative | $\sqrt{x-3}$ requires $x\geq3$ |
| A logarithm | The expression inside must be positive | $\ln(x+1)$ requires $x>-1$ |
| A stated domain | Use the restriction in the question | $x^2$ with $x\geq2$ has range $f(x)\geq4$ |

If a question asks for the largest possible real domain, use every real input for which the expression is defined. If it gives a smaller domain, use that domain.

### Example 1 — A turning point can lie inside the domain

**Question:** The function $f$ is defined by $f(x)=(x-1)^2+2$ for $-1\leq x\leq3$. Find its range.

**Method:** Check the turning point as well as the ends of the interval.

The graph is a parabola with minimum point $(1,2)$. Since $x=1$ is in the domain, the minimum output is $2$.

At the two ends,

$$f(-1)=6,\qquad f(3)=6.$$

The graph is continuous and reaches every value between its minimum and maximum. Therefore,

$$\boxed{2\leq f(x)\leq6}.$$

**Check:** $f(0)=3$ lies in the range. The value $7$ cannot occur because $(x-1)^2\leq4$ on this domain.

**Common mistake:** using only the outputs at the ends. Both are $6$, but the range is not just $\lbrace6\rbrace$.

### One-to-one and many-to-one

A **one-to-one function** gives different outputs for different inputs. A **many-to-one function** can give the same output for two or more different inputs.

In Example 1, $f(-1)=f(3)=6$, so $f$ is many-to-one. If its domain is restricted to $1\leq x\leq3$, the output increases as $x$ increases, so the function is one-to-one.

On a graph, a horizontal line meets a one-to-one function at most once. This will help you decide whether an inverse function exists.

### Example 2 — A piecewise function and a finite domain

A **piecewise function** uses different formulae for different parts of its domain. Choose the correct part before substituting.

**Question:** For real $x$, let

$$p(x)=\begin{cases}x^2,&x\leq0,\\2x+1,&x>0.\end{cases}$$

Find $p(-2)$, $p(0)$ and $p(2)$, and state the range. Then find the range when the domain is restricted to $\lbrace-2,0,2\rbrace$.

The first part gives $p(-2)=4$ and $p(0)=0$. The second gives $p(2)=5$.

For all real inputs, the first part gives every output at least zero; the second gives outputs greater than $1$. The full range is therefore $\boxed{p(x)\geq0}$.

For the finite domain, only three inputs are allowed, so the range is $\boxed{\lbrace0,4,5\rbrace}$. Its graph consists of three separate points, not a continuous curve.

**Sketch check:** for the full real domain, draw $y=x^2$ only for $x\leq0$, with a filled point at $(0,0)$. Draw $y=2x+1$ only for $x>0$, with an open point at $(0,1)$. There is still only one output at $x=0$.

## Composite Functions

A **composite function** is a function of a function. The notation $fg(x)$ means $f(g(x))$: apply $g$ first, then $f$.

$$x\xrightarrow{g}g(x)\xrightarrow{f}f(g(x)).$$

**Check two things:** the input $x$ must be in the domain of $g$, and the output $g(x)$ must be in the domain of $f$.

### Example 3 — Order changes the formula and the domain {#example-2--order-changes-the-formula-and-the-domain}

**Question:** Let $f(x)=2x-3$ for $x\in\mathbb R$, and $g(x)=\sqrt{x}$ for $x\geq0$. Find $fg(x)$ and $gf(x)$, with their domains and ranges.

**Find $fg(x)$.** Apply $g$ first:

$$fg(x)=f(\sqrt{x})=\boxed{2\sqrt{x}-3}.$$

The input must satisfy $x\geq0$. The output of $g$ is allowed by $f$, since $f$ accepts all real numbers. The minimum output is $-3$, at $x=0$.

**Domain:** $x\geq0$. **Range:** $fg(x)\geq-3$.

**Find $gf(x)$.** Apply $f$ first:

$$gf(x)=g(2x-3)=\boxed{\sqrt{2x-3}}.$$

The output $2x-3$ must be in the domain of $g$, so

$$2x-3\geq0\quad\Rightarrow\quad x\geq\frac32.$$

**Domain:** $x\geq\frac32$. **Range:** $gf(x)\geq0$.

**Check the order:** $fg(4)=1$, but $gf(4)=\sqrt5$. In general, $fg$ and $gf$ are different functions.

**Common mistake:** treating $fg(x)$ as the product $f(x)g(x)$. Here, that product would be $(2x-3)\sqrt{x}$, which is a different expression.

### Spot the error — Which order needs the restriction?

Let $f(x)=\sqrt{x}$ for $x\geq0$ and $g(x)=x-2$ for $x\in\mathbb R$. A student writes:

$$gf(x)=\sqrt{x}-2,\qquad x\geq2.$$

<details markdown="1">
<summary>Show the correction</summary>

The formula is correct, but the domain is $x\geq0$. The function $g$ accepts negative inputs and can give negative outputs. There is no need for $\sqrt{x}-2$ to be non-negative.

The other order is $fg(x)=\sqrt{x-2}$, which does require $x\geq2$.

</details>

## Inverse Functions

An **inverse function** undoes a function. It maps the range of $f$ back to the domain of $f$, and is written $f^{-1}$.

**The notation $f^{-1}(x)$ does not mean $\frac{1}{f(x)}$.**

A function has an inverse only if it is one-to-one on its stated domain. If two inputs give the same output, reversing the mapping would give two answers for one input.

### Find an inverse

1. Check whether the function is one-to-one. Use the stated domain.
2. Write $y=f(x)$.
3. Interchange $x$ and $y$.
4. Rearrange to make $y$ the subject. Use the domain to choose a sign if needed.
5. State the domain and range of $f^{-1}$.

The domain and range swap:

| Original function | Inverse function |
|---|---|
| Domain of $f$ | Range of $f^{-1}$ |
| Range of $f$ | Domain of $f^{-1}$ |

### Example 4 — Restrict the domain before choosing a square root {#example-3--restrict-the-domain-before-choosing-a-square-root}

**Question:** Let $f(x)=(x-1)^2+2$ for $x\geq1$. Find $f^{-1}$, including its domain and range.

**Check:** This is the increasing part of the parabola, so $f$ is one-to-one. Its range is $f(x)\geq2$.

Write $y=(x-1)^2+2$, then interchange $x$ and $y$:

$$x=(y-1)^2+2\quad\Rightarrow\quad y-1=\pm\sqrt{x-2}.$$

The inverse must give values in the original domain, so $y\geq1$. Choose the positive square root:

$$\boxed{f^{-1}(x)=1+\sqrt{x-2}}.$$

**Domain of $f^{-1}$:** $x\geq2$. **Range of $f^{-1}$:** $f^{-1}(x)\geq1$.

**Check both directions:**

$$f(f^{-1}(x))=(\sqrt{x-2})^2+2=x,\qquad x\geq2.$$

$$f^{-1}(f(x))=1+\sqrt{(x-1)^2}=1+\lvert x-1\rvert=x,\qquad x\geq1.$$

The last step uses $x\geq1$. In general, $\sqrt{a^2}=\lvert a\rvert$, not always $a$.

**Common mistake:** giving both square roots as the inverse. The inverse is a function, so each allowed input must give one output.

### What happens to the graph?

Reflect the graph of $y=f(x)$ in the line $y=x$ to obtain the graph of $y=f^{-1}(x)$. A point $(a,b)$ becomes $(b,a)$.

For Example 4, $(1,2)$ and $(2,3)$ on $f$ become $(2,1)$ and $(3,2)$ on $f^{-1}$.

![Graphs of y equals x squared for non-negative x and its inverse y equals the square root of x, reflected in y equals x. The points (2,4) and (4,2) swap.](/assets/img/functions-inverse.svg)

The diagram uses the simpler pair $f(x)=x^2$ for $x\geq0$ and $f^{-1}(x)=\sqrt{x}$. The same reflection rule applies to Example 4.

### Example 5 — An excluded input becomes an excluded output {#example-4--an-excluded-input-becomes-an-excluded-output}

**Question:** Let $h(x)=3+\frac{1}{x-2}$ for $x\ne2$. Find $h^{-1}$, including its domain and range.

The fraction can never be zero, so $h(x)\ne3$. Each output other than $3$ comes from exactly one input, so $h$ is one-to-one.

Interchange $x$ and $y$ in $y=3+\frac{1}{x-2}$:

$$x=3+\frac{1}{y-2}\quad\Rightarrow\quad x-3=\frac{1}{y-2}\quad\Rightarrow\quad y=2+\frac{1}{x-3}.$$

$$\boxed{h^{-1}(x)=2+\frac{1}{x-3}}.$$

**Domain of $h^{-1}$:** $x\ne3$. **Range of $h^{-1}$:** $h^{-1}(x)\ne2$.

**Check:** $h(4)=\frac72$, and $h^{-1}(\frac72)=4$. Also,

$$h(h^{-1}(x))=3+\frac{1}{\frac{1}{x-3}}=x,\qquad x\ne3.$$

## Practice

**Independent practice · 20–25 minutes**

Try each question on paper before opening a hint or solution. Give the domain and range when asked, and explain any restriction. These are self-written exercises, with no official marks. The time is only a guide.

### Q1 — Domain and range of a square root

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

### Q2 — A restricted domain does not always give an inverse

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

### Q3 — Keep the stated domains when forming composites

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

### Q4 — Find the inverse of a rational function

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

### Q5 — Choose the negative square root

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

### Q6 — Select the correct part of a function

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

## Quick Reference

| Task | Method | Check |
|---|---|---|
| Find a domain | Use the stated domain and check denominators, roots and logarithms | Is every input allowed? |
| Find a range | Use the graph or rewrite the function; check turning points and ends | Does every claimed output occur? |
| Find $fg(x)$ | Substitute $g(x)$ into $f$ | $x$ is allowed by $g$, and $g(x)$ is allowed by $f$ |
| Find an inverse | Check one-to-one, interchange $x$ and $y$, then rearrange | Swap the domain and range; choose the correct sign |
| Check an inverse | Simplify $f(f^{-1}(x))$ and $f^{-1}(f(x))$ | Each equals $x$ on its own allowed domain |
| Sketch an inverse | Reflect in $y=x$ | $(a,b)$ becomes $(b,a)$ |

**After practice:** note whether the error was in the formula, the order, the domain, the range or the square-root sign. Review that worked example, then try the question again without the solution.

**You should be able to:** state a domain and range, form both orders of a composite function, explain whether an inverse exists and find it with the correct restrictions.

Return to the [Pure topic index](/alevel/a2-mathematics/) or use the [Functions formula reference](/alevel/a2-mathematics/quick-reference/#functions).

**Learning path:** [Topic index](/alevel/a2-mathematics/) · [Next: Modulus Functions and Transformations](/alevel/a2-mathematics/modulus-and-transformations/).
