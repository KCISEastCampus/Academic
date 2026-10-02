---
title: Differential Equations
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
permalink: /alevel/a2-mathematics/differential-equations/
toc_headings: h2
study_page: true
---

[Pure Mathematics](/alevel/a2-mathematics/) · P2.8 Differential Equations

A differential equation relates a quantity to its rate of change. Solving it gives a relationship without a derivative.

- **Learning:** start with [separable variables](#separable-variables), then use [given conditions](#using-a-given-condition) and form [models](#forming-a-model).
- **Homework help:** check which variable changes, what the rate is proportional to, and whether the quantity increases or decreases.
- **Revision:** try [practice](#practice) before opening the hints and solutions.

Textbook: Chapter 7, Sections 7.1–7.2 (printed pp. 104–112). We use $C$ for the constant of integration, also called an **arbitrary constant**. After rearranging, we may use $A$ for a new arbitrary constant.

**Before you start:** you should know [integration methods](/alevel/a2-mathematics/integration/), logarithms and exponentials. Example 3 also uses [partial fractions](/alevel/a2-mathematics/partial-fractions/).

All worked examples and practice questions on this page are self-written, not official past-paper questions. The practice time is a guide; no official marks are assigned.

## Separable Variables

A **first order differential equation** contains a first derivative, such as $\frac{dy}{dx}$, but no higher derivatives. The equations in this lesson have **separable variables**: they can be written in the form

$$\frac{dy}{dx}=f(x)g(y).$$

Collect the $y$ terms with the integral in $y$ and the $x$ terms with the integral in $x$. Where $g(y)\ne0$, write

$$\int\frac{1}{g(y)}\,dy=\int f(x)\,dx.$$

This is the integral form used in the textbook. Then integrate both sides. **One constant of integration is enough:** constants on both sides can be combined into one $C$.

1. Check whether the variables can be separated.
2. Before dividing by a function of $y$, check whether making that function zero gives a constant solution.
3. Separate and integrate, adding $+C$ on one side.
4. Use any given condition to find the constant.
5. Check the result in the original differential equation and check the condition.

**General solution:** a family of solutions containing an arbitrary constant. **Particular solution:** a solution found using extra information, such as a point on the curve. An **initial condition** gives a starting value, often at time $t=0$.

### Example 1 — A general solution with a logarithm

**Question:** Solve $\displaystyle\frac{dy}{dx}=2xy$.

For $y\ne0$, separate and integrate:

$$\int\frac1y\,dy=\int2x\,dx.$$

$$\ln\lvert y\rvert=x^2+C.$$

Taking $e$ to the power of each side gives $\lvert y\rvert=e^Ce^{x^2}$. Allowing either sign, write

$$\boxed{y=Ae^{x^2}}.$$

For the solutions found by division, $A\ne0$. Check $y=0$ separately in the original equation: it is also a solution. The displayed family therefore includes all these solutions when $A$ may be any real constant, including zero.

**Check:** $\frac{dy}{dx}=2xAe^{x^2}=2xy$.

**Common mistake:** writing $y=e^{x^2}+C$. A constant added inside a logarithm becomes a multiplicative constant after exponentiating.

## Using a Given Condition

Substitute both coordinates into the integrated result to find $C$. If rearranging gives two branches, use the condition to select the correct one. Work on an interval where the original equation is defined.

### Example 2 — Choose the correct square root

**Question:** Solve $\displaystyle\frac{dy}{dx}=\frac{x}{y}$, given $y=2$ when $x=0$.

The original equation requires $y\ne0$. Separating gives

$$\int y\,dy=\int x\,dx,$$

$$\frac{y^2}{2}=\frac{x^2}{2}+C.$$

Use $(0,2)$: $2=C$. Hence $y^2=x^2+4$. The starting value is positive, so choose the positive branch:

$$\boxed{y=\sqrt{x^2+4}}.$$

**Check:** $\frac{dy}{dx}=\frac{x}{\sqrt{x^2+4}}=\frac{x}{y}$, and $y(0)=2$. This solution never reaches zero and is defined for all real $x$.

**Common mistake:** giving both signs after the condition has selected one branch.

### Example 3 — Check constant solutions before dividing

**Question:** Solve $\displaystyle\frac{dy}{dx}=y(y-2)$, given $y=1$ when $x=0$.

First check $y=0$ and $y=2$. Both give $\frac{dy}{dx}=0$ and satisfy the differential equation, but neither satisfies the given condition.

For the required non-constant solution,

$$\int\frac{1}{y(y-2)}\,dy=\int1\,dx.$$

Use partial fractions:

$$\frac{1}{y(y-2)}=-\frac{1}{2y}+\frac{1}{2(y-2)}.$$

$$-\frac12\ln\lvert y\rvert+\frac12\ln\lvert y-2\rvert=x+C.$$

At $(0,1)$, both logarithms are zero, so $C=0$. Therefore

$$\ln\left\lvert\frac{y-2}{y}\right\rvert=2x.$$

The ratio is negative at the starting point. On the solution interval, take

$$\frac{y-2}{y}=-e^{2x},\qquad \boxed{y=\frac{2}{1+e^{2x}}}.$$

**Check:** If $E=e^{2x}$, the derivative is $-\frac{4E}{(1+E)^2}$. Also,

$$y(y-2)=\frac{2}{1+E}\left(\frac{2}{1+E}-2\right)=-\frac{4E}{(1+E)^2}.$$

The condition gives $y(0)=1$. For every real $x$, $0<y<2$, so neither divided factor is zero.

**Common mistake:** treating $e^{2x}$ as the ratio without checking its sign. Taking $e$ to the power of each side gives the absolute value of the ratio.

## Forming a Model

Identify the dependent quantity, the variable it changes with, and the sign of the rate. A **constant of proportion** belongs to the model; an **arbitrary constant** appears when you integrate. They have different roles.

In the table below, $Q>0$ and $k>0$. The sign is written explicitly.

| Description | Differential equation |
|---|---|
| $Q$ increases at a rate proportional to $Q$ | $\displaystyle\frac{dQ}{dt}=kQ$ |
| $Q$ decreases at a rate proportional to $Q$ | $\displaystyle\frac{dQ}{dt}=-kQ$ |
| $Q$ increases at a rate inversely proportional to $Q$ | $\displaystyle\frac{dQ}{dt}=\frac{k}{Q}$ |
| $Q$ decreases at a rate proportional to $Q^2$ | $\displaystyle\frac{dQ}{dt}=-kQ^2$ |

The independent variable need not be time. For example, a length $l$ changing with temperature $\theta$ uses $\frac{dl}{d\theta}$.

**Use the information in order.** A rate measured at a known value can determine $k$ directly. A starting value determines an integration constant. A later value may then determine $k$.

### Example 4 — Inverse proportion

**Question:** The depth $h$ metres of water increases at a rate inversely proportional to $h$. At time $t=0$, $h=1$. After $3$ minutes, $h=2$. Form and solve a differential equation for $h$.

Since the depth increases, use $k>0$:

$$\frac{dh}{dt}=\frac{k}{h},\qquad \int h\,dh=\int k\,dt.$$

$$\frac{h^2}{2}=kt+C.$$

Initially, $C=\frac12$. At $t=3$, $h=2$ gives $2=3k+\frac12$, so $k=\frac12$.

$$\boxed{h=\sqrt{t+1}\text{ metres},\quad t\ge0}.$$

**Check:** $\frac{dh}{dt}=\frac{1}{2\sqrt{t+1}}=\frac{k}{h}$, $h(0)=1$ and $h(3)=2$. The positive branch fits the physical depth.

The depth increases, but its rate of increase becomes smaller as $h$ grows. Do not assume an increasing quantity has a constant rate.

## Natural Growth and Decay

For a positive quantity with starting value $Q_0$, proportional growth gives

$$\frac{dQ}{dt}=kQ\quad\Longrightarrow\quad Q=Q_0e^{kt},\quad k>0.$$

Proportional decay gives

$$\frac{dQ}{dt}=-kQ\quad\Longrightarrow\quad Q=Q_0e^{-kt},\quad k>0.$$

To obtain either result, separate the variables and integrate $\frac1Q$ to get $\ln Q$. Here $Q$ is positive, so the logarithm needs no absolute value signs.

### Example 5 — Find the growth constant from a later value

**Question:** A culture initially contains $400$ cells. Its rate of increase is proportional to the number $N$ present. The number doubles in $3$ hours. Find $N$ at time $t$ hours, and find when it first reaches $1200$.

The model is $\frac{dN}{dt}=kN$, with $k>0$. Separating and integrating gives

$$\int\frac1N\,dN=\int k\,dt,\qquad \ln N=kt+C.$$

Use $N(0)=400$: $C=\ln400$. Thus $N=400e^{kt}$.

Since $N(3)=800$, $e^{3k}=2$, so $k=\frac{\ln2}{3}$ per hour.

$$\boxed{N=400e^{(\ln2)t/3}}.$$

At $N=1200$, $e^{kt}=3$, giving

$$\boxed{t=\frac{3\ln3}{\ln2}\approx4.75\text{ hours}}.$$

**Check:** The number is $800$ after $3$ hours and $1600$ after $6$ hours. Reaching $1200$ between these times makes sense.

This model assumes the same proportional growth rule continues. It does not account for a shortage of nutrients or space.

### Example 6 — Half-life and mass remaining

**Question:** A sample has mass $80$ g initially and decays at a rate proportional to its remaining mass $m$. Its half-life is $6$ hours. Find $m$ at time $t$ hours and the mass remaining after $18$ hours.

The model is $\frac{dm}{dt}=-km$, where $k>0$. Separate and integrate:

$$\int\frac1m\,dm=\int-k\,dt,\qquad \ln m=-kt+C.$$

Initially, $C=\ln80$, so $m=80e^{-kt}$. The half-life means $m(6)=40$:

$$e^{-6k}=\frac12,\qquad k=\frac{\ln2}{6}.$$

$$\boxed{m=80e^{-(\ln2)t/6}\text{ g}}.$$

After $18$ hours, three half-lives have passed:

$$m(18)=80\left(\frac12\right)^3=\boxed{10\text{ g}}.$$

**Check:** $\frac{dm}{dt}=-km<0$ for $m>0$. The mass halves over each $6$-hour interval.

For exponential decay $Q=Q_0e^{-kt}$ with $k>0$, the **half-life** is

$$\boxed{T=\frac{\ln2}{k}}.$$

**Common mistake:** confusing the mass remaining with the mass lost. Here the mass lost after $18$ hours is $80-10=70$ g.

## Practice

**Independent practice · 25–35 minutes**

Show the separated integrals, keep an arbitrary constant until you use the condition, and check your final answer in the original equation. For models, state the meaning of each variable and use consistent units.

### Q1 — General and particular solutions

Solve $\displaystyle\frac{dy}{dx}=3x^2(y+2)$, then find the solution satisfying $y=1$ when $x=0$. Check any constant solution lost by division.

<details markdown="1">
<summary>Hint</summary>

Integrate $\frac{1}{y+2}$ with respect to $y$. Check $y=-2$ before dividing.

</details>

<details markdown="1">
<summary>Solution and check</summary>

For $y\ne-2$,

$$\int\frac1{y+2}\,dy=\int3x^2\,dx,$$

$$\ln\lvert y+2\rvert=x^3+C.$$

Thus $y=Ae^{x^3}-2$ for nonzero $A$. The constant solution $y=-2$ satisfies the original equation and is included by allowing $A=0$.

The condition gives $A=3$:

$$\boxed{y=3e^{x^3}-2}.$$

Its derivative is $9x^2e^{x^3}=3x^2(y+2)$, and $y(0)=1$.

</details>

### Q2 — Choose the branch

Solve $\displaystyle\frac{dy}{dx}=\frac{\sin x}{y}$, given $y=-2$ when $x=0$.

<details markdown="1">
<summary>Hint</summary>

Integrate $y$ on the left. The negative starting value selects the negative square root.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\int y\,dy=\int\sin x\,dx,\qquad \frac{y^2}{2}=-\cos x+C.$$

The condition gives $2=-1+C$, so $C=3$ and

$$\boxed{y=-\sqrt{6-2\cos x}}.$$

The expression inside the square root is at least $4$, so $y$ never reaches zero. Differentiation gives $-\frac{\sin x}{\sqrt{6-2\cos x}}=\frac{\sin x}{y}$, and $y(0)=-2$.

</details>

### Q3 — Form equations from words

Form, but do not solve, a differential equation for each statement. Use a positive constant $k$ and assume the quantities are positive.

**(a)** The mass $m$ decreases at a rate proportional to $m^2$, with respect to time $t$.

**(b)** The height $h$ increases at a rate inversely proportional to $h^3$, with respect to time $t$.

**(c)** The length $l$ increases at a rate proportional to $l$, with respect to temperature $\theta$.

<details markdown="1">
<summary>Hint</summary>

Write the derivative for the stated independent variable. Inverse proportion puts the quantity in the denominator; a decrease needs a minus sign.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\text{(a)}\quad\frac{dm}{dt}=-km^2.$$

$$\text{(b)}\quad\frac{dh}{dt}=\frac{k}{h^3}.$$

$$\text{(c)}\quad\frac{dl}{d\theta}=kl.$$

The signs match the changes. Each part uses its own constant of proportion; the same letter does not mean the constants have the same value or units.

</details>

### Q4 — A rate determines the model constant

The positive height $h$ metres of a pile increases at a rate inversely proportional to $h^3$. When $h=2$, the rate is $\frac14$ metres per minute. Initially $h=1$. Find $h$ at time $t$ minutes and when it reaches $3$ metres.

<details markdown="1">
<summary>Hint</summary>

First use $\frac14=\frac{k}{2^3}$ to find $k$. Then integrate $h^3$ and use the starting height.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The model is $\frac{dh}{dt}=\frac{k}{h^3}$, and the measured rate gives $k=2$.

$$\int h^3\,dh=\int2\,dt,\qquad \frac{h^4}{4}=2t+C.$$

At $t=0$, $C=\frac14$. Hence

$$\boxed{h=(8t+1)^{1/4}\text{ metres},\quad t\ge0}.$$

At $h=3$, $81=8t+1$, so $\boxed{t=10\text{ minutes}}$.

Differentiation gives $2(8t+1)^{-3/4}=\frac{2}{h^3}$. The solution also gives $h(0)=1$ and the stated rate when $h=2$.

</details>

### Q5 — Percentage growth

A culture grows at a rate proportional to the number $N$ present. Initially $N=500$. After $4$ hours, the number has increased by $20\%$. Find $N$ at time $t$ hours and the doubling time.

<details markdown="1">
<summary>Hint</summary>

A $20\%$ increase means $N(4)=600$, not $100$. Use this value after applying the initial condition.

</details>

<details markdown="1">
<summary>Solution and check</summary>

From $\frac{dN}{dt}=kN$ and $N(0)=500$, separation gives $N=500e^{kt}$. Now $600=500e^{4k}$, so $k=\frac{\ln1.2}{4}$.

$$\boxed{N=500e^{(\ln1.2)t/4}}.$$

Doubling means $e^{kt}=2$:

$$\boxed{t=\frac{4\ln2}{\ln1.2}\approx15.2\text{ hours}}.$$

Substitution gives $N(4)=600$. Since a $20\%$ increase takes $4$ hours, the doubling time should be longer than $4$ hours.

</details>

### Q6 — Decay, half-life and the amount lost

A substance decays at a rate proportional to its remaining mass. Initially the mass is $60$ g. After $5$ hours, $45$ g remains. Find **(a)** a model for the remaining mass, **(b)** its half-life and **(c)** the mass lost after $10$ hours.

<details markdown="1">
<summary>Hint</summary>

Use $m=60e^{-kt}$ with $k>0$. After $5$ hours, the fraction remaining is $\frac34$. For (c), subtract the remaining mass from $60$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

**(a)** From $45=60e^{-5k}$,

$$k=\frac{\ln(4/3)}5,\qquad \boxed{m=60e^{-[\ln(4/3)]t/5}\text{ g}}.$$

**(b)** The half-life is

$$\boxed{T=\frac{5\ln2}{\ln(4/3)}\approx12.0\text{ hours}}.$$

**(c)** Two $5$-hour intervals leave $60(\frac34)^2=33.75$ g. The mass lost is

$$\boxed{60-33.75=26.25\text{ g}}.$$

The model gives $m(0)=60$ and $m(5)=45$. Since more than half remains after $5$ hours, the half-life must be longer than $5$ hours.

</details>

## Quick Reference

| Step | What to do | Check |
|---|---|---|
| Separate variables | $\displaystyle\int\frac{1}{g(y)}\,dy=\int f(x)\,dx$ | Check constant solutions before dividing by $g(y)$ |
| Integrate | Add $+C$ on one side | Keep logarithm absolute values unless positivity is known |
| Apply a condition | Substitute the given values | Choose the branch that satisfies the condition |
| Form a model | Translate the rate and the proportionality | Use the correct independent variable and sign |
| Find constants | Distinguish the model constant $k$ from an arbitrary constant | Use all the given information and consistent units |
| Growth or decay | $Q_0e^{kt}$ or $Q_0e^{-kt}$, with $k>0$ | Keep exact logarithms until the final calculation |
| Half-life | $\displaystyle T=\frac{\ln2}{k}$ for decay written as $Q_0e^{-kt}$ | Distinguish the amount remaining from the amount lost |

**If your answer looks wrong:** differentiate it and substitute into the original equation. Then check the given condition, any excluded values, and the expected direction of change.

**You should be able to:** separate variables, find a particular solution, check constant solutions, form a model and explain its result in context.

**Learning path:** [Previous: Integration — Trigonometric Integrals and Applications](/alevel/a2-mathematics/integration-applications/) · [Next: Numerical Methods](/alevel/a2-mathematics/numerical-methods/).
