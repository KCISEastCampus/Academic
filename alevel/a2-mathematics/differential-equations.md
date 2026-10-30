---
title: Differential Equations
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
permalink: /alevel/a2-mathematics/differential-equations/
toc_headings: h2, h3
reading_layout: true
study_page: true
---

[Pure Mathematics](/alevel/a2-mathematics/) · P2.8 Differential Equations

<div class="lesson-lead" markdown="1">

Knowing how quickly water depth changes does not yet tell us its depth at a later time. A differential equation gives the rule for the rate. We solve it to find the quantity itself as a function, then use known values to choose the function that fits.

</div>

- **Learning:** start with [finding a function from its rate](#separable-variables), then use [given conditions](#using-a-given-condition) and form [models](#forming-a-model).
- **Homework help:** check which variable changes, what the rate is proportional to, and whether the quantity increases or decreases.
- **Revision:** try [practice](#practice) before opening the hints and solutions.

<div class="lesson-notes" markdown="1">

Textbook: Chapter 7, Sections 7.1–7.2 (printed pp. 104–112). We use $C$ for the constant of integration, also called an **arbitrary constant**. After rearranging, we may use $A$ for a new arbitrary constant.

**Start here:** separate the two variables into two integrals, then use a condition to select a solution; model-building starts from the meaning of the rate. Recover [power integrals](/alevel/a2-mathematics/integration/#power-integrals), [exponential and logarithmic integrals](/alevel/a2-mathematics/integration/#exponential-logarithmic-integrals) and [checking by the chain rule](/alevel/a2-mathematics/differentiation/#composite-functions) if needed. Example 3 also needs [partial-fraction decomposition](/alevel/a2-mathematics/partial-fractions/#method). For revision start at [practice](#practice); return to [later review](#later-review) after numerical methods, recording any help used.

All examples, data scenarios and tasks are self-written, not official questions or measured data; no official marks are assigned. Hints and solutions open separately.

</div>

## Find a Function from Its Rate {#separable-variables}

The value of $y$ tells us how much there is; $\frac{dy}{dx}$ tells us how quickly it changes as $x$ changes. An equation linking these is a **differential equation**. Here it contains a first derivative but no second or higher derivative, so it is called **first order**.

Start with the equation in Example 1: the rate is $2xy$. The right side is a part involving $x$ multiplied by $y$. Dividing by $y$ lets us collect the two variables separately before integrating. This is called **separation of variables**. We can divide only when $y\ne0$, so we must also check whether $y=0$ is a solution of the original equation.

Now find both integrals. **One constant of integration is enough:** if each side has a constant, subtract one from the other and call the result $C$.

1. Check whether the variables can be separated.
2. Before dividing by a function of $y$, check whether making that function zero gives a constant solution.
3. Separate and integrate, adding $+C$ on one side.
4. Use any given condition to find the constant.
5. Check the result in the original differential equation and check the condition.

Before we know a value on the curve, the constant can take different values and give different solutions. Together these form the **general solution**. A known point lets us find the constant and select a **particular solution**. When the information gives a starting value, often at time $t=0$, it is called an **initial condition**.

<section class="worked-example" markdown="1">

### Example 1 — A general solution with a logarithm {#example-1--a-general-solution-with-a-logarithm}

**Question:** Solve $\displaystyle\frac{dy}{dx}=2xy$.

The right side multiplies a part involving $x$ by $y$. To collect the $y$ part on the left, divide by $y$. This excludes zero, which we must check separately. For $y\ne0$:

$$\frac1y\frac{dy}{dx}=2x.$$

Why can we integrate the left side with respect to $y$? Recall substitution: the factor $\frac{dy}{dx}$ accounts for how $y$ changes with $x$. Equivalently, the chain rule tells us that the left side is the derivative of $\ln\lvert y\rvert$ with respect to $x$. Integrating both sides can therefore be written as

$$\int\frac1y\,dy=\int2x\,dx.$$

$$\ln\lvert y\rvert=x^2+C.$$

The left integral is a logarithm and the right is a power integral. To recover $y$, take $e$ to the power of each side: $\lvert y\rvert=e^Ce^{x^2}$. The sum in the exponent becomes a product. The constant $e^C$ is positive; allow either sign for $y$ and combine its sign and size into a new constant $A$:

$$\boxed{y=Ae^{x^2}}.$$

For the solutions found by division, $A\ne0$. Check $y=0$ separately in the original equation: it is also a solution. The displayed family therefore includes all these solutions when $A$ may be any real constant, including zero.

**Check:** $\frac{dy}{dx}=2xAe^{x^2}=2xy$.

**Common mistake:** writing $y=e^{x^2}+C$. A constant added inside a logarithm becomes a multiplicative constant after exponentiating.

</section>

### The same method in general {#separation-why-it-works}

Now connect the example to other equations. If the right side is a product $f(x)g(y)$, the first factor depends only on $x$ and the second only on $y$:

$$\frac{dy}{dx}=f(x)g(y).$$

Where $g(y)\ne0$, divide by it and separate the integrals:

$$\int\frac{1}{g(y)}\,dy=\int f(x)\,dx.$$

This uses the same reverse chain rule as Example 1. Call an antiderivative of $1/g(y)$ by the name $G(y)$, so $G^{\prime}(y)=1/g(y)$. Since $y$ changes with $x$, the chain rule gives

$$\frac{d}{dx}G(y(x))=\frac1{g(y)}\frac{dy}{dx}=f(x).$$

Integrating with respect to $x$ gives the separated integrals and one constant. In Example 1, $g(y)=y$ and $G(y)=\ln\lvert y\rvert$. Before dividing, always check values that make $g(y)$ zero in the original equation: they may give constant solutions that the division would lose.

## Using a Given Condition {#using-a-given-condition}

A known point gives both an $x$ value and a $y$ value. Substitute both into the integrated equation to find $C$. If solving for $y$ gives a positive and a negative choice, use the given $y$ value to choose. Also check where the original equation allows the solution: a denominator cannot be zero and a real logarithm needs a positive input.

<section class="worked-example" markdown="1">

### Example 2 — Choose the correct square root {#example-2--choose-the-correct-square-root}

**Question:** Solve $\displaystyle\frac{dy}{dx}=\frac{x}{y}$, given $y=2$ when $x=0$.

Here $y$ is in the denominator, so it cannot be zero. Multiply by $y$ to collect the $y$ part in the left integral and leave the $x$ part on the right:

$$\int y\,dy=\int x\,dx,$$

$$\frac{y^2}{2}=\frac{x^2}{2}+C.$$

Use both coordinates of $(0,2)$: the left side is $2$ and the $x$ term is zero, so $2=C$. Hence $y^2=x^2+4$. At the starting point $y$ is positive, so choose the positive square root. A solution cannot switch to the negative root without passing through zero, which the original equation forbids for $y$:

$$\boxed{y=\sqrt{x^2+4}}.$$

**Check:** $\frac{dy}{dx}=\frac{x}{\sqrt{x^2+4}}=\frac{x}{y}$, and $y(0)=2$. This solution never reaches zero and is defined for all real $x$.

**Common mistake:** keeping both signs. Substitute the starting value into each choice: only the positive one gives the required value.

</section>

<section class="worked-example" markdown="1">

### Example 3 — Check constant solutions before dividing {#example-3--check-constant-solutions-before-dividing}

**Question:** Solve $\displaystyle\frac{dy}{dx}=y(y-2)$, given $y=1$ when $x=0$.

Before dividing by $y(y-2)$, ask which values would make this divisor zero. If $y$ stays at zero or at two, its derivative is zero and the right side is also zero. Both are solutions of the differential equation, but neither passes through the given point.

For the required non-constant solution,

$$\int\frac{1}{y(y-2)}\,dy=\int1\,dx.$$

The denominator is a product, so the integral is not yet a single logarithm. Split it into two simpler fractions that we can integrate:

$$\frac{1}{y(y-2)}=-\frac{1}{2y}+\frac{1}{2(y-2)}.$$

$$-\frac12\ln\lvert y\rvert+\frac12\ln\lvert y-2\rvert=x+C.$$

At $(0,1)$, both logarithms are zero, so $C=0$. Therefore

$$\ln\left\lvert\frac{y-2}{y}\right\rvert=2x.$$

Taking the exponential gives the size of the ratio, but not its sign. At the starting point the ratio is negative. It keeps this sign on the interval containing that point: it cannot cross zero or become undefined while the separated equation applies. Thus take

$$\frac{y-2}{y}=-e^{2x},\qquad \boxed{y=\frac{2}{1+e^{2x}}}.$$

**Check:** If $E=e^{2x}$, the derivative is $-\frac{4E}{(1+E)^2}$. Also,

$$y(y-2)=\frac{2}{1+E}\left(\frac{2}{1+E}-2\right)=-\frac{4E}{(1+E)^2}.$$

The condition gives $y(0)=1$. For every real $x$, $0<y<2$, so neither divided factor is zero.

**Common mistake:** treating $e^{2x}$ as the ratio without checking its sign. Taking $e$ to the power of each side gives the absolute value of the ratio.

</section>

## Forming a Model {#forming-a-model}

First ask: what quantity changes, what does it change with, and does it increase or decrease? The changing quantity is the **dependent variable**; the variable used to track the change is the **independent variable**.

“Rate proportional to a quantity” means dividing the rate by that quantity gives a fixed number. That number is the **constant of proportion**. The constant that appears later when integrating has a different job: it lets the solution fit a known value.

In the table below, $Q>0$ and $k>0$. The sign is written explicitly.

| Description | Differential equation |
|---|---|
| $Q$ increases at a rate proportional to $Q$ | $\displaystyle\frac{dQ}{dt}=kQ$ |
| $Q$ decreases at a rate proportional to $Q$ | $\displaystyle\frac{dQ}{dt}=-kQ$ |
| $Q$ increases at a rate inversely proportional to $Q$ | $\displaystyle\frac{dQ}{dt}=\frac{k}{Q}$ |
| $Q$ decreases at a rate proportional to $Q^2$ | $\displaystyle\frac{dQ}{dt}=-kQ^2$ |

The variable used to track change need not be time. For example, a length $l$ changing with temperature $\theta$ uses $\frac{dl}{d\theta}$.

Sometimes the rate depends on how far a quantity is from a fixed level, rather than on the quantity itself. A level at which the rate is zero is an **equilibrium**. If the rate is proportional to $Q-Q_e$, set $U=Q-Q_e$ with constant $Q_e$, so $dU/dt=dQ/dt$; we can separate and integrate using $U$. Choose the sign by asking whether $Q$ moves towards or away from the fixed level.

**Use the information in order.** A rate measured at a known value can determine $k$ directly. A starting value determines an integration constant. A later value may then determine $k$.

<section class="worked-example" markdown="1">

### Example 4 — Inverse proportion {#example-4--inverse-proportion}

**Question:** The depth $h$ metres of water increases at a rate inversely proportional to $h$. At time $t=0$, $h=1$. After $3$ minutes, $h=2$. Form and solve a differential equation for $h$.

“Inversely proportional to the depth” puts $h$ in the denominator: a greater depth means a smaller rate. The depth increases, so the rate is positive and we use $k>0$. Multiply by $h$ to separate the variables, then integrate:

$$\frac{dh}{dt}=\frac{k}{h},\qquad \int h\,dh=\int k\,dt.$$

$$\frac{h^2}{2}=kt+C.$$

The starting depth fixes the integration constant: at $t=0$, $h=1$, so $C=\frac12$. The later depth then fixes the rate constant: at $t=3$, $h=2$ gives $2=3k+\frac12$, so $k=\frac12$.

$$\boxed{h=\sqrt{t+1}\text{ metres},\quad t\ge0}.$$

**Check:** $\frac{dh}{dt}=\frac{1}{2\sqrt{t+1}}=\frac{k}{h}$, $h(0)=1$ and $h(3)=2$. Choose the positive square root because depth is positive.

The depth increases, but its rate of increase becomes smaller as $h$ grows. Do not assume an increasing quantity has a constant rate.

Here $k$ has units $\mathrm{m^2\,min^{-1}}$. The mathematical future interval is $t\ge0$; physical predictions additionally require positive depth, the same filling rule and no overflow. No rim height is given, so the model cannot be asserted to describe a real tank indefinitely.

</section>

<section class="worked-example" markdown="1">

### Determine the constant from one rate {#example-rate}

**Question:** A controlled drain removes water from a tank with no inflow. The rate of decrease of the positive volume $V$ litres is proportional to $V^2$. When $V=3$, the outflow is $3$ litres per minute. Initially $V=6$. Form and solve a model for $t\ge0$, where $t$ is in minutes. Explain whether the model reaches zero in finite time.

“Decrease” determines the minus sign. The outflow is positive $3$, but the volume derivative is $-3$:

$$\frac{dV}{dt}=-kV^2,\qquad k>0,\qquad -3=-k(3)^2\ \Longrightarrow\ k=\frac13.$$

The constant has units $\mathrm{L^{-1}\,min^{-1}}$. The initial volume is not a rate, so $V(0)=6$ cannot be used as $k$. First integrate:

$$\int V^{-2}\,dV=\int-\frac13\,dt,\qquad -\frac1V=-\frac t3+C.$$

The initial condition gives $C=-1/6$, hence

$$\frac1V=\frac t3+\frac16,\qquad V=\frac6{2t+1}\ \mathrm{litres},\quad t\ge0.$$

Differentiation gives $V^{\prime}=-12/(2t+1)^2=-V^2/3$. When $V=3$, $t=1/2$ and the rate is indeed $-3$; also $V(0)=6$. For $t\ge0$, $0<V\le6$ and the volume decreases, so quantity and direction are feasible; the model applies only while the controlled draining rule holds. It approaches zero without reaching it in finite time. The equilibrium $V=0$ also satisfies the original model but not the given initial condition.

</section>

## Natural Growth and Decay {#natural-growth-and-decay}

For a positive quantity with starting value $Q_0$, proportional growth gives

$$\frac{dQ}{dt}=kQ\quad\Longrightarrow\quad Q=Q_0e^{kt},\quad k>0.$$

Proportional decay gives

$$\frac{dQ}{dt}=-kQ\quad\Longrightarrow\quad Q=Q_0e^{-kt},\quad k>0.$$

These formulas follow the same steps as Example 1: separate the variables and integrate $\frac1Q$ to get $\ln Q$. Here $Q$ is positive, so the logarithm needs no absolute value signs. The starting value fixes the multiplier; the sign in the exponent determines growth or decay.

<section class="worked-example" markdown="1">

### Example 5 — Find the growth constant from a later value {#example-5--find-the-growth-constant-from-a-later-value}

**Question:** A culture initially contains $400$ cells. Its rate of increase is proportional to the number $N$ present. The number doubles in $3$ hours. Find $N$ at time $t$ hours, and find when it first reaches $1200$.

The rate depends on how many cells are present now, so use $N$ on the right. Growth gives a positive rate: $\frac{dN}{dt}=kN$, with $k>0$. Divide by $N$ to separate the variables, then integrate:

$$\int\frac1N\,dN=\int k\,dt,\qquad \ln N=kt+C.$$

Use $N(0)=400$: $C=\ln400$. Thus $N=400e^{kt}$.

Since $N(3)=800$, $e^{3k}=2$, so $k=\frac{\ln2}{3}$ per hour.

$$\boxed{N=400e^{(\ln2)t/3}}.$$

At $N=1200$, $e^{kt}=3$, giving

$$\boxed{t=\frac{3\ln3}{\ln2}\approx4.75\text{ hours}}.$$

**Check:** The number is $800$ after $3$ hours and $1600$ after $6$ hours. Reaching $1200$ between these times makes sense.

This model assumes the same proportional growth rule continues. It does not account for a shortage of nutrients or space; $t\ge0$ and $k$ has units $\mathrm{h^{-1}}$. The continuous model approximates a large cell population rather than describing individual discrete divisions.

</section>

<section class="worked-example" markdown="1">

### Example 6 — Half-life and mass remaining {#example-6--half-life-and-mass-remaining}

**Question:** A sample has mass $80$ g initially and decays at a rate proportional to its remaining mass $m$. Its half-life is $6$ hours. Find $m$ at time $t$ hours and the mass remaining after $18$ hours.

The rate depends on the mass still present, rather than the mass already lost. Since that mass decreases, the derivative is negative: $\frac{dm}{dt}=-km$, where $k>0$. Divide by $m$ to separate the variables, then integrate:

$$\int\frac1m\,dm=\int-k\,dt,\qquad \ln m=-kt+C.$$

Initially, $C=\ln80$, so $m=80e^{-kt}$. The half-life means $m(6)=40$:

$$e^{-6k}=\frac12,\qquad k=\frac{\ln2}{6}.$$

$$\boxed{m=80e^{-(\ln2)t/6}\text{ g}}.$$

After $18$ hours, three half-lives have passed:

$$m(18)=80\left(\frac12\right)^3=\boxed{10\text{ g}}.$$

**Check:** $\frac{dm}{dt}=-km<0$ for $m>0$. The mass halves over each $6$-hour interval. Here $t\ge0$, $m>0$ and $k$ has units $\mathrm{h^{-1}}$; the model assumes the same decay rule continues.

For exponential decay $Q=Q_0e^{-kt}$ with $k>0$, the **half-life** is

$$\boxed{T=\frac{\ln2}{k}}.$$

**Common mistake:** confusing the mass remaining with the mass lost. Here the mass lost after $18$ hours is $80-10=70$ g.

</section>

## Practice {#practice}

**Independent practice · 25–35 minutes**

Show the separated integrals, keep an arbitrary constant until you use the condition, and check your final answer in the original equation. For models, state the meaning of each variable and use consistent units.

<section class="lesson-check" markdown="1">

### Question 1 {#q1--general-and-particular-solutions}

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

</section>

<section class="lesson-check" markdown="1">

### Question 2 {#q2--choose-the-branch}

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

</section>

<section class="lesson-check" markdown="1">

### Question 3 {#q3--form-equations-from-words}

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

</section>

<section class="lesson-check" markdown="1">

### Question 4 {#q4--a-rate-determines-the-model-constant}

The positive height $h$ metres of a pile increases at a rate inversely proportional to $h^3$. When $h=2$, the rate is $\frac14$ metres per minute. Initially $h=1$. Find $h$ at time $t$ minutes and when it reaches $3$ metres. State the units of the model constant and explain one limitation on extrapolating the model.

<details markdown="1">
<summary>Hint</summary>

First use $\frac14=\frac{k}{2^3}$ to find $k$. Then integrate $h^3$ and use the starting height.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The model is $\frac{dh}{dt}=\frac{k}{h^3}$, and the given rate gives $k=2$.

$$\int h^3\,dh=\int2\,dt,\qquad \frac{h^4}{4}=2t+C.$$

At $t=0$, $C=\frac14$. Hence

$$\boxed{h=(8t+1)^{1/4}\text{ metres},\quad t\ge0}.$$

At $h=3$, $81=8t+1$, so $\boxed{t=10\text{ minutes}}$.

Differentiation gives $2(8t+1)^{-3/4}=\frac{2}{h^3}$. The solution also gives $h(0)=1$ and the stated rate when $h=2$.

The units of $k$ are $\mathrm{m^4\,min^{-1}}$. For $t\ge0$, height is positive and increasing while the rate decreases; extrapolation also requires the supply and pile geometry to preserve the assumed proportional law.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 5 {#q5--percentage-growth}

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

</section>

<section class="lesson-check" markdown="1">

### Question 6 {#q6--decay-half-life-and-the-amount-lost}

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

</section>

## Repair and retry {#repair-and-retry}

Revisit the reasoning for your error, close the old solution and answer the new question here. Keep separate notes on the first attempt, hints used and retry result.

**If division lost an unchanging solution, or you kept both signs after using a known value:** revisit [separation](#separable-variables) and [choosing a sign](#using-a-given-condition). An equation obtained by squaring may allow zero even when the original denominator forbids it. Always return to the original equation.

<section class="lesson-check" markdown="1">

### Select a solution again {#retry-solution}

<!-- task:retry-solution -->

**(a)** Solve $dy/dx=-x/y$ with $y(0)=-3$. State the largest interval containing $0$ on which your solution satisfies the original equation.

**(b)** Find the solution of $dy/dx=x(y-1)$ satisfying $y(0)=1$. Explain any division you choose to use.

<!-- /task:retry-solution -->

<details markdown="1">
<summary>Hint</summary>

Check which values the original equation allows, then select a sign after integrating. In (b), test the constant function suggested by the condition before dividing by $y-1$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

**(a)** Separation gives $\int y\,dy=\int-x\,dx$, hence $y^2=9-x^2$. The negative initial value selects

$$y=-\sqrt{9-x^2},\qquad -3<x<3.$$

Here $y^{\prime}=x/\sqrt{9-x^2}=-x/y$, and $y(0)=-3$. At $x=\pm3$, $y=0$ makes the original equation undefined, so exclude both endpoints; beyond them the root is not real.

**(b)** The constant $y=1$ has derivative zero, makes the right side zero and satisfies the initial condition. For $y\ne1$, separation gives $y=1+Ae^{x^2/2}$ with $A\ne0$, none of which satisfies this condition. Allowing $A=0$ extends the family after checking the constant solution separately; it does not make division by zero valid.

</details>

</section>

**If you confused a rate with an initial value, the model constant with an integration constant, or missed the decay sign:** revisit the [rate-based demonstration](#example-rate). The exponential model $Q^{\prime}=-kQ$ has a constant half-life; do not assume that result for a different rate law.

<section class="lesson-check" markdown="1">

### Read new conditions {#retry-model}

<!-- task:retry-model -->

A positive mass $m$ grams decreases at a rate proportional to $m^2$. Initially $m=18$. When $m=6$, its rate of change is $-2$ grams per hour. Form and solve the model for $t\ge0$, state the units of its constant and determine the times when $m=9$ and $m=4.5$. Does it have a constant half-life?

<!-- /task:retry-model -->

<details markdown="1">
<summary>Hint</summary>

Use the rate at its specified mass to find the proportionality constant. Apply the initial value to the integration constant, then compare successive halving intervals.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The model is $m^{\prime}=-km^2$, $k>0$. From $-2=-36k$, obtain $k=1/18$, with units $\mathrm{g^{-1}\,h^{-1}}$. Separating and integrating gives

$$-\frac1m=-\frac t{18}+C,\qquad C=-\frac1{18},\qquad m=\frac{18}{t+1}\ \mathrm{g},\quad t\ge0.$$

When $m=9$, $t=1$; when $m=4.5$, $t=3$. Successive halving intervals are $1$ hour and $2$ hours, so there is no constant half-life. Differentiation gives $m^{\prime}=-18/(t+1)^2=-m^2/18$; at $m=6$, $t=2$ and the rate is $-2$. Mass remains positive and tends to zero; model validity is limited to the period in which the stated rate law holds.

</details>

</section>

## Later review {#later-review-section}

After numerical methods, attempt this away from the solutions; use your checks to decide whether to revisit the solution or model retry.

<section class="lesson-check" markdown="1">

### Form and assess a model {#later-review}

<!-- task:later-review -->

An object cools in a room held at $20^\circ\mathrm C$. While its temperature $T$ exceeds room temperature, its rate of decrease is proportional to the temperature excess above the room. Initially $T=80$; after $2$ minutes $T=50$. Find $T$ at time $t\ge0$, determine when $T=35$, and assess a prediction that it reaches $10^\circ\mathrm C$. State one physical assumption.

<!-- /task:later-review -->

<details markdown="1">
<summary>Hint</summary>

Identify the quantity proportional to the rate and its sign. Setting $U=T-20$ lets you use the two temperature conditions. Check whether the requested temperatures lie in the solution’s range.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The excess above room temperature determines the cooling rate. The minus sign makes temperature decrease while this excess is positive: $T^{\prime}=-k(T-20)$, $k>0$. Write the excess as $U=T-20>0$; separation gives $\ln U=-kt+C$. The initial value gives $U=60e^{-kt}$; $T(2)=50$ gives $30=60e^{-2k}$, hence $k=\ln2/2$ in $\mathrm{min^{-1}}$.

$$T=20+60e^{-(\ln2)t/2}.$$

At $T=35$, the exponential factor is $1/4$, so $t=4$ minutes. For all $t\ge0$, $20<T\le80$ and temperature decreases, making $T=10$ impossible; the solution approaches $20$ without crossing it. Check $T^{\prime}=-k(T-20)$, $T(0)=80$ and $T(2)=50$. Physical assumptions include constant room temperature, approximately uniform temperature within the object and the same heat-transfer rule across the temperatures considered. If you used $-kT$, revisit [forming a model](#forming-a-model); for constant or interval errors use the [solution retry](#retry-solution) or [model retry](#retry-model).

</details>

</section>

## Quick Reference {#quick-reference}

| Step | What to do | Check |
|---|---|---|
| Separate variables | $\displaystyle\int\frac{1}{g(y)}\,dy=\int f(x)\,dx$ | Check constant solutions before dividing by $g(y)$ |
| Integrate | Add $+C$ on one side | Keep logarithm absolute values unless positivity is known |
| Apply a condition | Substitute the given values | Choose the positive or negative answer that fits the known value |
| Form a model | Translate the rate and the proportionality | Use the correct independent variable and sign |
| Find constants | Distinguish the model constant $k$ from an arbitrary constant | Use all the given information and consistent units |
| Growth or decay | $Q_0e^{kt}$ or $Q_0e^{-kt}$, with $k>0$ | Keep exact logarithms until the final calculation |
| Half-life | $\displaystyle T=\frac{\ln2}{k}$ for decay written as $Q_0e^{-kt}$ | Distinguish the amount remaining from the amount lost |
{: .wide-table}

**If your answer looks wrong:** differentiate it and substitute into the original equation. Then check the given condition, any excluded values, and the expected direction of change.

**You should be able to:** separate variables, find a particular solution, check constant solutions, form a model and explain its result in context.

**Learning path:** [Previous: Integration — Trigonometric Integrals and Applications](/alevel/a2-mathematics/integration-applications/) · [Next: Numerical Methods](/alevel/a2-mathematics/numerical-methods/).


**Next step:** when you can form an equation from words, solve using conditions and check the range independently, continue to [numerical methods](/alevel/a2-mathematics/numerical-methods/), comparing analytical results with approximations supported by accuracy evidence. Then return to [this review](#later-review). Scope: [9660 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf), P2.8 (and P2.5 growth/decay); January 2025 MA03 [QP](https://aqamat.alevelclouds.com/25_01_QP_P2.pdf) Q12(b) and the matching [MS](https://aqamat.alevelclouds.com/25_01_MS_P2.pdf) were read for separation, both integrals, conditions and isolating the variable. All scenarios and tasks here are self-written.

{% include exam_topic_practice.html %}
