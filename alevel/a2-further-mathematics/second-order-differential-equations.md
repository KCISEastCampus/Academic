---
title: Second-order Differential Equations
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
permalink: /alevel/a2-further-mathematics/second-order-differential-equations/
toc_headings: "#equation-and-conditions, #auxiliary-equation, #cf-and-pi, #pi-trials, #practice, #diagnose-and-retry, #quick-reference, #common-pitfalls, #sources"
study_page: true
reading_layout: true
---

[Further Pure Mathematics](/alevel/a2-further-mathematics/) · FP2.11

A first-order equation relates a function to its rate of change. This chapter adds how that rate itself changes: the second derivative. We still want a function that makes the two sides of the equation equal.

Start with [what the equation says](#equation-and-conditions), follow a complete solution in [Example 1](#example-1-distinct-roots), then compare the other root types. When the right side is nonzero, learn to [build the answer in two parts](#cf-and-pi). For revision, go straight to [practice](#practice).

For help choosing a PI, start at the [PI table and short attempts](#pi-trials).

**Before you start:** differentiate exponentials and trigonometric functions, and use the [product rule](/alevel/a2-mathematics/differentiation/#products-and-quotients). If a quadratic has a negative discriminant, revisit the completing-the-square example in [complex quadratic roots](/alevel/as-further-mathematics/complex-numbers-and-roots/#conjugate). The second half builds on [first-order CF and PI](/alevel/a2-further-mathematics/first-order-differential-equations/#cf-and-pi); the direct-integration example also uses [power integrals](/alevel/a2-mathematics/integration/#power-integrals).

## The Equation and Its Conditions {#equation-and-conditions}

Call the unknown function $y$. Its first derivative $y^{\prime}$ is its rate of change. Differentiating that rate gives $y^{\prime\prime}$, so the second derivative tells us how the rate itself changes.

In this lesson, fixed coefficients multiply those three quantities:

$$\boxed{ay^{\prime\prime}+by^{\prime}+cy=f(x),\qquad a\ne0,}$$

where $a,b,c$ are integer constants and $y^{\prime}=\frac{\mathrm dy}{\mathrm dx}$, $y^{\prime\prime}=\frac{\mathrm d^2y}{\mathrm dx^2}$. The highest derivative is second order. The equation is linear: $y$, $y^{\prime}$ and $y^{\prime\prime}$ occur to the first power, without products of them.

If $f(x)=0$, the right side is zero and the equation is called **homogeneous**. Otherwise it is **nonhomogeneous**. In this chapter the right side can be an exponential, sine or cosine, a polynomial of degree at most 4, or a sum of constant multiples of these (a linear combination).

A **general solution** contains two arbitrary constants. Given conditions help us find their values. **Initial conditions**, such as $y(0)=1$ and $y^{\prime}(0)=2$, tell us the function's value and slope at one point. **Boundary conditions**, such as $y(0)=1$ and $y(1)=3$, give values at different points.

A condition can also tell us what happens as $x\to\infty$. Apply every condition to the whole answer; later examples show why leaving out a part gives the wrong constants.

Conditions must give enough independent information to determine the constants. Write and solve the equations for those constants to check this.

<details markdown="1">
<summary>Do two conditions always give one solution?</summary>

No: they must give enough independent information. For example, $y^{\prime\prime}+y=0$ with $y(0)=y(\pi)=0$ leaves $y=B\sin x$. Every value of the constant meets both boundary conditions. Solve the equations for the constants; counting the conditions is not enough.

</details>

## The Auxiliary Equation and Complementary Function {#auxiliary-equation}

First take a zero right side. Why try an exponential? Differentiating it keeps the same exponential and only changes its coefficient. Try $y=e^{mx}$, where $m$ is a constant we have yet to find:

$$\begin{aligned}y&=e^{mx},\\y^{\prime}&=me^{mx},\\y^{\prime\prime}&=m^2e^{mx}.\end{aligned}$$

Substitute these three lines into $ay^{\prime\prime}+by^{\prime}+cy=0$. Every term has the same exponential factor, giving

$$e^{mx}(am^2+bm+c)=0.$$

Since $e^{mx}\ne0$, the **auxiliary equation** is

$$\boxed{am^2+bm+c=0.}$$

We have turned “find a function” into “solve a quadratic for the constant in its exponent”. Follow one example first.

<section class="worked-example" markdown="1">

### Example 1: distinct real roots {#example-1-distinct-roots}

> **Original example.** Solve $2y^{\prime\prime}-2y^{\prime}-4y=0$, given $y(0)=3$ and $y^{\prime}(0)=0$.

This is a self-written demonstration. The right side is zero: use the auxiliary equation to find the exponentials, then use both conditions to determine their constants.

Use the original three coefficients to write $2m^2-2m-4=0$, or $2(m-2)(m+1)=0$, with roots $2,-1$. Each exponential solves the equation. Because the equation is linear, adding constant multiples of them also gives a solution:

$$y=Ae^{2x}+Be^{-x},\qquad y^{\prime}=2Ae^{2x}-Be^{-x}.$$

At $x=0$, $A+B=3$ and $2A-B=0$. Hence $A=1$, $B=2$:

$$\boxed{y=e^{2x}+2e^{-x}}.$$

Each exponential satisfies the homogeneous equation. The displayed solution has $y(0)=3$ and $y^{\prime}(0)=2-2=0$.

</section>

### Compare the three root types {#root-types}

The auxiliary equation's roots determine the **complementary function (CF)**: the general solution when the right side is zero. The first row summarises the example just completed. The next two examples show what changes in the other rows.

| Auxiliary roots | Complementary function |
|---|---|
| Distinct real roots $m_1,m_2$ | $y_c=Ae^{m_1x}+Be^{m_2x}$ |
| Repeated real root $m$ | $y_c=(A+Bx)e^{mx}$ |
| Complex roots $\alpha\pm i\beta$, $\beta>0$ | $y_c=e^{\alpha x}(A\cos\beta x+B\sin\beta x)$ |

In the repeated-root case, writing two copies of $e^{mx}$ gives only one independent function. The second function is $xe^{mx}$. For complex roots, the real sine–cosine form supplies two real independent functions. A zero root is allowed: $e^{0x}=1$; a repeated zero root gives $A+Bx$.

<section class="worked-example" markdown="1">

### Example 2: a repeated real root {#example-2-repeated-roots}

> **Original example.** Solve $y^{\prime\prime}+4y^{\prime}+4y=0$, given $y(0)=1$ and $y^{\prime}(0)=0$.

This is a self-written demonstration. A repeated root cannot give two copies of the same function: $Ae^{mx}+Be^{mx}=(A+B)e^{mx}$ still has only one adjustable coefficient. The second function needs an extra factor of the independent variable.

Since $(m+2)^2=0$, the general solution is $y=(A+Bx)e^{-2x}$. Use the product rule: differentiate each factor in turn while leaving the other unchanged:

$$y^{\prime}=[B-2(A+Bx)]e^{-2x}.$$

The conditions give $A=1$ and $B-2A=0$, so $B=2$:

$$\boxed{y=(1+2x)e^{-2x}}.$$

Here $y^{\prime}=-4xe^{-2x}$ and $y^{\prime\prime}=(-4+8x)e^{-2x}$. Thus $y^{\prime\prime}+4y^{\prime}+4y=0$, and both initial conditions hold.

</section>

<section class="worked-example" markdown="1">

### Example 3: complex roots {#example-3-complex-roots}

> **Original example.** Solve $y^{\prime\prime}+2y^{\prime}+5y=0$, given $y(0)=2$ and $y^{\prime}(0)=0$.

This is a self-written demonstration. Complex roots still give a real-valued answer. The real part sets the exponential factor; the size of the imaginary part sets how quickly the sine and cosine vary.

The auxiliary equation is $(m+1)^2+4=0$, giving $m=-1\pm2i$. Hence

$$y=e^{-x}(A\cos2x+B\sin2x).$$

Differentiating,

$$\begin{aligned}y^{\prime}&=e^{-x}\bigl[(-A+2B)\cos2x\\&\qquad+(-B-2A)\sin2x\bigr].\end{aligned}$$

The conditions give $A=2$ and $-A+2B=0$, so $B=1$:

$$\boxed{y=e^{-x}(2\cos2x+\sin2x)}.$$

To check the equation, write $y=e^{-x}v$. Then $y^{\prime\prime}+2y^{\prime}+5y=e^{-x}(v^{\prime\prime}+4v)=0$ for $v=2\cos2x+\sin2x$. The values at zero also agree.

</section>

## Complementary Function Plus Particular Integral {#cf-and-pi}

When the right side is nonzero, the CF alone is not enough: it gives zero on the left. Find one more function that gives the required right side when substituted. This is a **particular integral (PI)**, written $y_p$:

$$ay_p^{\prime\prime}+by_p^{\prime}+cy_p=f(x).$$

Add the two parts. Linearity means that their contributions to the left side add too: zero plus the required right side is still the required right side. The general solution is

$$\boxed{y=y_c+y_p.}$$

The CF contributes zero to the left side and the PI contributes $f(x)$. Conversely, the difference between any two solutions satisfies the homogeneous equation, so the CF accounts for the whole solution family.

**A PI and a particular solution are different ideas.** A PI is chosen to build the general solution. A particular solution satisfying the given conditions usually includes CF terms with determined constants. Put the two arbitrary constants in the CF; do not introduce further arbitrary constants into the PI.

## Choosing and Checking a PI Trial {#pi-trials}

The aim is simple: **find a function that gives the right side when put into the left side.** Start with a form from the table, check the CF, then calculate its coefficients. Finding these unknown coefficients is called **undetermined coefficients**.

If you are new to this, follow the examples and short attempts below. If you only need a reminder, use the [table](#pi-table) and the [overlap check](#resonance). The short attempts are self-written, with no official marks; leave their hints and solutions closed until you have tried.

### A table to start from {#pi-table}

Here $p,q,r,K,k$ are given constants. $C,D,E,C_0,\ldots,C_n$ are coefficients to find; they are not extra arbitrary constants in the final answer.

| Right side $f(x)$ | Starting form for $y_p$ |
| --- | --- |
| A constant $p$ | $C$ |
| $p+qx$ | $C+Dx$ |
| $p+qx+rx^2$ | $C+Dx+Ex^2$ |
| A polynomial of degree $n=3$ or $4$ | $C_0+C_1x+\cdots+C_nx^n$ |
| $Ke^{kx}$ | $Ce^{kx}$ |
| $p\cos\omega x+q\sin\omega x$, $\omega\ne0$ | $C\cos\omega x+D\sin\omega x$ |
| A sum of these types | Add their forms, then check each part |

Missing terms on the right still need a place in the trial: for $4x^2$, begin with $C+Dx+Ex^2$; for $\sin2x$, begin with $C\cos2x+D\sin2x$. Substitution will decide which coefficients are zero.

**The table is only the first step.** If a form overlaps with the CF, adjust it before solving for its coefficients. The [overlap check](#resonance) explains when to multiply by $x$ or $x^2$. We first practise cases that do not need that adjustment.

<section class="worked-example" markdown="1">

### Example 4: an exponential PI {#example-4-exponential-pi}

> **Original example.** Find the general solution of $y^{\prime\prime}-y=6e^{2x}$.

This is a self-written demonstration. Take the CF below as given for now and focus on finding the PI. Differentiating an exponential keeps the same exponential, so the table suggests the same rate with an unknown coefficient.

The CF is $y_c=Ae^x+Be^{-x}$. For $y_p=Ce^{2x}$, substitution gives

$$\begin{aligned}
y_p&=Ce^{2x},\qquad y_p^{\prime}=2Ce^{2x},\qquad y_p^{\prime\prime}=4Ce^{2x},\\
y_p^{\prime\prime}-y_p&=(4C-C)e^{2x}=6e^{2x}.
\end{aligned}$$

so $C=2$. Therefore

$$\boxed{y=Ae^x+Be^{-x}+2e^{2x}}.$$

The CF contributes zero and $2e^{2x}$ contributes $6e^{2x}$ to $y^{\prime\prime}-y$.

</section>

<section class="lesson-check" markdown="1">

### Try it {#pi-try-exponential}

> **Self-written task.** For $y^{\prime\prime}-y=5e^{3x}$, the CF is $Ae^x+Be^{-x}$. Find a PI and verify it by substitution.

<details markdown="1">
<summary>Hint</summary>

Use the exponential rate on the right. Check it against the given CF before differentiating.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Try $y_p=Ce^{3x}$: the CF does not contain this exponential. Then $y_p^{\prime}=3Ce^{3x}$ and $y_p^{\prime\prime}=9Ce^{3x}$. The left side is $8Ce^{3x}=5e^{3x}$, so $C=5/8$ and $y_p=5e^{3x}/8$. Substitution gives the required right side. No conditions or extra arbitrary constants are needed for this PI.

</details>

</section>

<section class="worked-example" markdown="1">

### A polynomial PI {#polynomial-demonstration}

> **Self-written example.** Find the general solution of $y^{\prime\prime}+y=x^2+1$.

This is a self-written demonstration with no official marks. Start with a full quadratic. Keep every lower power: differentiating the quadratic twice produces a constant, which affects the constant comparison. Zero is not an auxiliary root here, so the trial needs no extra factor of the independent variable.

$$\begin{aligned}
m^2+1&=0\quad\Longrightarrow\quad y_c=A\cos x+B\sin x,\\
y_p&=Cx^2+Dx+E,\quad y_p^{\prime}=2Cx+D,\quad y_p^{\prime\prime}=2C,\\
y_p^{\prime\prime}+y_p&=Cx^2+Dx+(E+2C)=x^2+0x+1,\\
C&=1,\quad D=0,\quad E+2=1\quad\Longrightarrow\quad E=-1,\\
y&=\boxed{A\cos x+B\sin x+x^2-1}.
\end{aligned}$$

Check: the PI contributes $2+(x^2-1)=x^2+1$; the CF contributes zero. In practice Q4 the degree changes, so determine all coefficients afresh.

</section>

<section class="lesson-check" markdown="1">

### Check a proposed answer {#pi-try-polynomial}

> **Self-written task.** For $y^{\prime\prime}+3y^{\prime}+2y=x$, the CF is $Ae^{-x}+Be^{-2x}$. A learner tries $y_p=Cx$. Can this work for all $x$? Find a PI.

<details markdown="1">
<summary>Hint</summary>

Write the whole result after substitution, including its constant term.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The trial gives $3C+2Cx$. Matching the linear term requires $2C=1$, while the constant term requires $3C=0$: impossible. Use $y_p=Cx+D$ instead. Its first and second derivatives are $C$ and $0$, so the left side is $2Cx+(3C+2D)=x+0$. Hence $C=1/2$, $D=-3/4$ and $y_p=x/2-3/4$. Check: $0+3/2+x-3/2=x$. The missing constant was needed to cancel the constant created by differentiation.

</details>

</section>

<section class="worked-example" markdown="1">

### Example 5: a trigonometric PI {#example-5-trigonometric-pi}

> **Original example.** Find the general solution of $y^{\prime\prime}+y^{\prime}+2y=3\cos x$.

This is a self-written demonstration. The right side contains only cosine, but differentiating once introduces sine. Keep both terms in the PI trial and let substitution determine their coefficients.

The CF is given here, so you can focus on the PI:

$$y_c=e^{-x/2}\left(A\cos\frac{\sqrt7x}{2}+B\sin\frac{\sqrt7x}{2}\right).$$

For $y_p=C\cos x+D\sin x$,

$$\begin{aligned}y_p^{\prime}&=-C\sin x+D\cos x,\\y_p^{\prime\prime}&=-C\cos x-D\sin x.\end{aligned}$$

Substitution gives

$$\begin{aligned}y_p^{\prime\prime}+y_p^{\prime}+2y_p&=(C+D)\cos x\\&\quad+(D-C)\sin x.\end{aligned}$$

Thus $C+D=3$ and $D-C=0$, so $C=D=3/2$. The general solution is

$$\boxed{\begin{aligned}y={}&e^{-x/2}\left(A\cos\frac{\sqrt7x}{2}+B\sin\frac{\sqrt7x}{2}\right)\\&+\frac32(\cos x+\sin x).\end{aligned}}$$

The matched coefficients confirm that the PI contributes exactly $3\cos x$.

</section>

<section class="lesson-check" markdown="1">

### Check another proposal {#pi-try-trig}

> **Self-written task.** For $y^{\prime\prime}+y^{\prime}+y=\sin x$, you are told that the CF has no pure sine–cosine terms. A learner tries $y_p=C\sin x$. Test this proposal, then find a PI.

<details markdown="1">
<summary>Hint</summary>

Differentiate twice and add all three terms. If the required sine term is missing, keep both trigonometric terms in a new trial.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The proposal gives $-C\sin x+C\cos x+C\sin x=C\cos x$, which cannot equal $\sin x$ for all $x$. For $y_p=C\cos x+D\sin x$, the left side is $D\cos x-C\sin x$. Thus $D=0$, $C=-1$, and $y_p=-\cos x$. Check: $y_p^{\prime}=\sin x$, $y_p^{\prime\prime}=\cos x$, so $\cos x+\sin x-\cos x=\sin x$. One coefficient can end up zero; do not assume that before substitution.

</details>

</section>

### Check whether the CF removes your trial {#resonance}

The right side helps you choose a function family. The left side decides whether that trial works. If a trial belongs to the CF, it produces zero on the left, whatever its coefficient is. Changing the coefficient cannot fix this: the form must change.

This overlap is often called **resonance**. Here we use the word for the algebraic overlap; no physical model is needed. First see what cancels, then summarise the rule.

<section class="worked-example" markdown="1">

### Resonance at a simple root {#simple-resonance-demonstration}

> **Self-written example.** Find the general solution of $y^{\prime\prime}-y=4e^x$.

**Complete demonstration (self-written, no official marks).** The roots are $1,-1$. The ordinary trial $Ce^x$ contributes $Ce^x-Ce^x=0$, so it cannot produce the nonzero forcing. Test the next trial instead of guessing its coefficient.

$$\begin{aligned}
y_p&=Cxe^x,\\
y_p^{\prime}&=C(1+x)e^x,\qquad y_p^{\prime\prime}=C(2+x)e^x,\\
y_p^{\prime\prime}-y_p&=C[(2+x)-x]e^x=2Ce^x=4e^x,\\
C&=2,\qquad y=\boxed{Ae^x+Be^{-x}+2xe^x}.
\end{aligned}$$

The PI contributes exactly $4e^x$. One factor of $x$ suffices here because 1 is simple; compare the repeated-root example next.

</section>

<section class="lesson-check" markdown="1">

### Two equations {#pi-compare}

> **Self-written task.** Choose a PI trial for each equation, then find a PI: (i) $y^{\prime\prime}-y=4e^x$, with CF $Ae^x+Be^{-x}$; (ii) $y^{\prime\prime}+y=4e^x$, with CF $A\cos x+B\sin x$. Explain why the same right side does not lead to the same trial.

<details markdown="1">
<summary>Hint</summary>

Compare the exponential with each CF. Write the left-side result for your trial.

</details>

<details markdown="1">
<summary>Solution and check</summary>

(i) $Ce^x$ gives zero. For $Cxe^x$, the left side is $2Ce^x$, so a PI is $2xe^x$. (ii) $Ce^x$ is not in the CF; the left side is $2Ce^x$, so a PI is $2e^x$. The right side sets the starting function family, but the CF check depends on the left side.

</details>

</section>

### How much extra $x$ is needed? {#pi-overlap-check}

Use the auxiliary equation you found for the CF. In a second-order equation, the following checks are enough:

| Part of the right side | Check and adjust the table's starting form |
| --- | --- |
| $Ke^{kx}$ | If $k$ is not a root, keep $Ce^{kx}$. For a simple root use $Cxe^{kx}$; for a repeated root use $Cx^2e^{kx}$ |
| A polynomial | Check the root $0$: no zero root means no extra factor; a simple zero root means multiply the whole polynomial trial by $x$; a repeated zero root means multiply it by $x^2$ |
| Sine/cosine with frequency $\omega\ne0$ | If the CF contains that same sine–cosine pair without an exponential factor, multiply the whole pair by $x$; otherwise keep the starting pair |
| A sum | Check each part separately; an adjustment to one part need not apply to the others |

For a polynomial, even overlap of only its constant term matters. Do not compare just the entire written expression with the CF. The zero-root example below shows why the **whole polynomial** must be adjusted.

A degree-4 right side can therefore need a degree-6 PI when zero is a repeated root. The degree limit applies to $f(x)$, not to the PI.

<section class="worked-example" markdown="1">

### Example 6: resonance at a repeated root {#example-6-repeated-resonance}

> **Original example.** Find the general solution of $y^{\prime\prime}-4y^{\prime}+4y=8e^{2x}$. Explain why neither $Ce^{2x}$ nor $Cxe^{2x}$ is a suitable PI.

This is a self-written demonstration. The auxiliary equation is $(m-2)^2=0$, giving $y_c=(A+Bx)e^{2x}$. Follow each trial from its derivatives to its contribution.

**First trial:** $v=Ce^{2x}$.

$$v^{\prime}=2Ce^{2x},\qquad v^{\prime\prime}=4Ce^{2x}.$$

$$v^{\prime\prime}-4v^{\prime}+4v=(4-8+4)Ce^{2x}=0.$$

That cannot produce $8e^{2x}$.

**Next trial:** $w=Cxe^{2x}$. Use the product rule:

$$\begin{aligned}
w^{\prime}&=C(1+2x)e^{2x},\\
w^{\prime\prime}&=C(4+4x)e^{2x}.
\end{aligned}$$

The coefficient after substitution is

$$\begin{aligned}
w^{\prime\prime}-4w^{\prime}+4w
&=C[(4+4x)-4(1+2x)+4x]e^{2x}\\
&=0.
\end{aligned}$$

This also cancels. Both trials already belong to the CF, so one extra $x$ was not enough.

**Try one more factor:** $y_p=Cx^2e^{2x}$.

$$\begin{aligned}
y_p^{\prime}&=C(2x+2x^2)e^{2x},\\
y_p^{\prime\prime}&=C(2+8x+4x^2)e^{2x}.
\end{aligned}$$

Keep the exponential outside while collecting the coefficient:

$$\begin{aligned}
y_p^{\prime\prime}-4y_p^{\prime}+4y_p
&=C[(2+8x+4x^2)\\
&\quad-4(2x+2x^2)+4x^2]e^{2x}\\
&=2Ce^{2x}.
\end{aligned}$$

Now it can match the right side: $2C=8$, so $C=4$. The general solution is

$$\boxed{y=(A+Bx+4x^2)e^{2x}}.$$

The repeated root required $x^2$. The substitution, not the appearance of the trial, confirms that it works.

</section>

<section class="worked-example" markdown="1">

### When zero is a simple root {#zero-root-simple}

> **Self-written example.** Find a PI of $y^{\prime\prime}+y^{\prime}=2x$.

The CF is given as $A+Be^{-x}$: zero is a simple auxiliary root. The table starts with $Cx+D$. Its derivatives are $C$ and $0$, so the left side is just $C$. It cannot equal $2x$ for all $x$.

Multiply the **whole** linear trial by $x$:

$$\begin{aligned}
y_p&=x(Cx+D)=Cx^2+Dx,\\
y_p^{\prime}&=2Cx+D,\qquad y_p^{\prime\prime}=2C,\\
y_p^{\prime\prime}+y_p^{\prime}&=2Cx+(2C+D).
\end{aligned}$$

Match with $2x+0$: $2C=2$ and $2C+D=0$. Thus $C=1$, $D=-2$, and $y_p=x^2-2x$. Check: $2+(2x-2)=2x$. Only the constant in the starting trial overlapped with the CF, but the whole trial needed adjusting.

</section>

<section class="lesson-check" markdown="1">

### Your choice {#pi-try-zero}

> **Self-written task.** Find a PI of $y^{\prime\prime}+2y^{\prime}=6x+4$. State and justify your trial before determining its coefficients.

<details markdown="1">
<summary>Hint</summary>

Check the auxiliary equation. What happens if you substitute a linear trial from the table?

</details>

<details markdown="1">
<summary>Solution and check</summary>

The auxiliary equation is $m(m+2)=0$, so $y_c=A+Be^{-2x}$. Zero is simple; start from the table's linear form and multiply the whole form by $x$:

$$\begin{aligned}
y_p&=x(Cx+D)=Cx^2+Dx,\\
y_p^{\prime}&=2Cx+D,\qquad y_p^{\prime\prime}=2C,\\
y_p^{\prime\prime}+2y_p^{\prime}&=4Cx+(2C+2D)=6x+4.
\end{aligned}$$

Hence $C=3/2$, $D=1/2$, and $y_p=3x^2/2+x/2$. Check: $3+2(3x+1/2)=6x+4$. If you chose a linear trial, revisit [the simple-zero-root example](#zero-root-simple); if the form was right, check the constant coefficient separately.

</details>

</section>

<section class="worked-example" markdown="1">

### When zero is a repeated root {#zero-root-demonstration}

> **Self-written example.** Find the general solution of $y^{\prime\prime}=2x$.

This is a self-written demonstration with no official marks. Only the second derivative appears, so integrate twice: first recover the first derivative, then the function. Each integration introduces one constant. The auxiliary polynomial is $m^2$, whose CF is $A+Bx$.

$$\begin{aligned}
y^{\prime}&=\int2x\,\mathrm dx=2\frac{x^2}{2}+B=x^2+B,\\
y&=\int(x^2+B)\,\mathrm dx=\frac{x^3}{3}+Bx+A.
\end{aligned}$$

The PI $x^3/3$ has second derivative $2x$. Its degree is 3 although the forcing has degree 1; multiplying a linear trial by $x^2$ removes the repeated-zero-root overlap. In Q7 also use the boundary values.

</section>

<section class="worked-example" markdown="1">

### Resonance with sine and cosine {#trig-resonance-demonstration}

> **Self-written example.** Find the general solution of $y^{\prime\prime}+y=2\cos x$.

**Complete demonstration (self-written, no official marks).** The auxiliary roots are $\pm i$, so the ordinary sine–cosine trial is already in the CF and contributes zero. Multiply the whole trial by $x$; keep both coefficients until substitution decides them.

$$\begin{aligned}
y_p&=x(C\cos x+D\sin x),\\
y_p^{\prime}&=C\cos x+D\sin x+x(-C\sin x+D\cos x),\\
y_p^{\prime\prime}&=-2C\sin x+2D\cos x-x(C\cos x+D\sin x),\\
y_p^{\prime\prime}+y_p&=-2C\sin x+2D\cos x=0\sin x+2\cos x,\\
C&=0,\quad D=1,\qquad y=\boxed{A\cos x+B\sin x+x\sin x}.
\end{aligned}$$

The PI contributes $2\cos x$ after cancellation of the terms containing $x$. In Q6 the frequency and forcing change and conditions must be applied to the total solution.

</section>

### Put the parts together {#pi-combine}

First complete [Q5](#practice-5) with its help closed. It gives only the equation: choose the CF and PI yourself, with no conditions to handle. Then return here. For a mixed right side, choose and check each part separately, then add their PI contributions. Find the full general solution before applying conditions. The next task adds the mixed right side and conditions.

<section class="lesson-check" markdown="1">

### Example 7: mixed forcing and an asymptotic condition {#example-7-mixed-forcing}

Keep the help closed and try this yourself. It brings together methods already shown. After finding the general solution, use both conditions, including what happens to the derivative as the variable grows without bound.

> **Adapted example.** For $x\ge0$, solve $y^{\prime\prime}+y^{\prime}-2y=4x-6e^{-2x}$, given $y(0)=2$ and $y^{\prime}\to-2$ as $x\to\infty$.

Adapted from OxfordAQA Specimen 2018 FM03, Question 7, with a changed equation and conditions. This is not the official question.

<details markdown="1">
<summary>Hint</summary>

The roots are $1,-2$. Try $y_p=Cx+D+Exe^{-2x}$. Examine $e^{-2x}$ and $xe^{-2x}$ separately when applying the limit.

</details>

<details markdown="1">
<summary>Solution</summary>

The auxiliary equation $(m+2)(m-1)=0$ gives $y_c=Ae^{-2x}+Be^x$. The exponential forcing overlaps with a simple CF root, so use

$$y_p=Cx+D+Exe^{-2x}.$$

Its derivatives are

$$\begin{aligned}y_p^{\prime}&=C+E(1-2x)e^{-2x},\\y_p^{\prime\prime}&=E(4x-4)e^{-2x}.\end{aligned}$$

Substitution gives

$$\begin{aligned}
y_p^{\prime\prime}+y_p^{\prime}-2y_p
&=C-2(Cx+D)+E[(4x-4)+(1-2x)-2x]e^{-2x}\\
&=-2Cx+(C-2D)-3Ee^{-2x}.
\end{aligned}$$

Matching coefficients with $4x-6e^{-2x}$ gives

$$-2C=4,\qquad C-2D=0,\qquad -3E=-6.$$

Thus $C=-2$, $D=-1$ and $E=2$. Write the general solution before imposing conditions:

$$y=Ae^{-2x}+Be^x-2x-1+2xe^{-2x}.$$

Then

$$y^{\prime}=-2Ae^{-2x}+Be^x-2+2e^{-2x}-4xe^{-2x}.$$

As $x\to\infty$, $e^{-2x}\to0$. Separately, $xe^{-2x}=x/e^{2x}\to0$, since exponential growth dominates linear growth. Hence the derivative can tend to $-2$ only if $B=0$; any nonzero $Be^x$ diverges.

Now $y(0)=A-1=2$, so $A=3$:

$$\boxed{y=(3+2x)e^{-2x}-2x-1},\qquad x\ge0.$$

Check: its exponential part contributes $-6e^{-2x}$ to the equation and its polynomial part contributes $4x$. Its value at zero is 2, and its derivative tends to $-2$.

</details>

</section>

## Practice Questions {#practice}

All seven questions below are original practice questions. Identify the CF and PI where appropriate. State the general solution before applying conditions, and check the equation and every condition. After learning each type, use Q5, Q2, Q6, Q1, Q7, Q3, Q4 for mixed revision. Before opening a hint, explain how the auxiliary roots determine the CF and why your PI trial is independent of it.

<section class="lesson-check" markdown="1">

### Question 1 {#practice-1}

> Solve $y^{\prime\prime}-5y^{\prime}+6y=0$, given $y(0)=1$ and $y^{\prime}(0)=0$.

<details markdown="1">
<summary>Hint</summary>

Factor $(m-2)(m-3)$, then solve two simultaneous equations for the constants.

</details>

<details markdown="1">
<summary>Solution</summary>

The roots are 2 and 3, so $y=Ae^{2x}+Be^{3x}$. The conditions give $A+B=1$ and $2A+3B=0$. Therefore $A=3$, $B=-2$:

$$\boxed{y=3e^{2x}-2e^{3x}}.$$

Both terms solve the equation because their exponents are auxiliary roots. Also $y(0)=1$ and $y^{\prime}(0)=6-6=0$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 2 {#practice-2}

> Solve $y^{\prime\prime}-2y^{\prime}+y=0$, given $y(0)=0$ and $y^{\prime}(0)=2$.

<details markdown="1">
<summary>Hint</summary>

Use $(A+Bx)e^x$, not two copies of $e^x$.

</details>

<details markdown="1">
<summary>Solution</summary>

The auxiliary equation is $(m-1)^2=0$, so $y=(A+Bx)e^x$ and $y^{\prime}=(A+B+Bx)e^x$. Thus $A=0$ and $B=2$:

$$\boxed{y=2xe^x}.$$

Here $y^{\prime}=2(1+x)e^x$ and $y^{\prime\prime}=2(2+x)e^x$, giving $y^{\prime\prime}-2y^{\prime}+y=0$. The two initial values agree.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 3 {#practice-3}

> Solve $y^{\prime\prime}+9y=0$, given $y(0)=1$ and $y^{\prime}(0)=6$.

<details markdown="1">
<summary>Hint</summary>

The roots are $\pm3i$, with zero real part.

</details>

<details markdown="1">
<summary>Solution</summary>

The general solution is $y=A\cos3x+B\sin3x$. Since $y^{\prime}=-3A\sin3x+3B\cos3x$, the conditions give $A=1$, $B=2$:

$$\boxed{y=\cos3x+2\sin3x}.$$

Differentiating twice gives $y^{\prime\prime}=-9y$; at zero, $y=1$ and $y^{\prime}=6$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 4 {#practice-4}

> Find the general solution of $y^{\prime\prime}+y=x^4$.

<details markdown="1">
<summary>Hint</summary>

Try $Cx^4+Dx^3+Ex^2+Fx+G$. Include the missing lower powers before matching coefficients.

</details>

<details markdown="1">
<summary>Solution</summary>

The CF is $A\cos x+B\sin x$. For the proposed polynomial,

$$\begin{aligned}
y_p&=Cx^4+Dx^3+Ex^2+Fx+G,\\
y_p^{\prime}&=4Cx^3+3Dx^2+2Ex+F,\\
y_p^{\prime\prime}&=12Cx^2+6Dx+2E,\\
y_p^{\prime\prime}+y_p&=Cx^4+Dx^3+(E+12C)x^2\\
&\quad+(F+6D)x+(G+2E).
\end{aligned}$$

Matching coefficients gives $C=1$, $D=0$, $E=-12$, $F=0$, $G=24$. Hence

$$\boxed{y=A\cos x+B\sin x+x^4-12x^2+24}.$$

Check: the polynomial has $y_p^{\prime\prime}=12x^2-24$, so $y_p^{\prime\prime}+y_p=x^4$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 5 {#practice-5}

> Find the general solution of $y^{\prime\prime}-3y^{\prime}+2y=5e^x$.

After your attempt and check, continue with [the combined task](#example-7-mixed-forcing).

<details markdown="1">
<summary>Hint</summary>

The root 1 is simple. Try $Cxe^x$.

</details>

<details markdown="1">
<summary>Solution</summary>

The roots are 1 and 2, giving $y_c=Ae^x+Be^{2x}$. For $y_p=Cxe^x$,

$$y_p^{\prime}=C(1+x)e^x,\qquad y_p^{\prime\prime}=C(2+x)e^x.$$

Thus $y_p^{\prime\prime}-3y_p^{\prime}+2y_p=-Ce^x$, so $C=-5$:

$$\boxed{y=Ae^x+Be^{2x}-5xe^x}.$$

The substitution above checks the PI; the auxiliary equation checks the CF.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 6 {#practice-6}

> Solve $y^{\prime\prime}+4y=8\sin2x$, given $y(0)=0$ and $y^{\prime}(0)=0$.

<details markdown="1">
<summary>Hint</summary>

The ordinary sine–cosine trial is in the CF. Multiply it by $x$ and use the product rule.

</details>

<details markdown="1">
<summary>Solution</summary>

The CF is $A\cos2x+B\sin2x$. Try $y_p=x(C\cos2x+D\sin2x)$. Differentiation gives

$$\begin{aligned}
y_p^{\prime}&=C\cos2x+D\sin2x+x(-2C\sin2x+2D\cos2x),\\
y_p^{\prime\prime}&=-4C\sin2x+4D\cos2x-4x(C\cos2x+D\sin2x),\\
y_p^{\prime\prime}+4y_p&=-4C\sin2x+4D\cos2x\\
&=8\sin2x+0\cos2x.
\end{aligned}$$

Thus $C=-2$, $D=0$, and the general solution is $y=A\cos2x+B\sin2x-2x\cos2x$.

At zero, $A=0$. Its derivative is

$$\begin{aligned}y^{\prime}&=-2A\sin2x+2B\cos2x\\&\quad-2\cos2x+4x\sin2x,\end{aligned}$$

so $2B-2=0$, giving $B=1$:

$$\boxed{y=\sin2x-2x\cos2x}.$$

The PI contributes $8\sin2x$ and the CF contributes zero; both initial conditions hold. Applying $y^{\prime}(0)=0$ to the CF alone would give the wrong constant.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 7 {#practice-7}

> On $0\le x\le1$, solve $y^{\prime\prime}=6x+4$, given $y(0)=1$ and $y(1)=4$. Identify a CF and a PI.

<details markdown="1">
<summary>Hint</summary>

The auxiliary equation is $m^2=0$. Integrate twice; do not use only a degree-1 polynomial PI.

</details>

<details markdown="1">
<summary>Solution</summary>

Write the two integrations separately, introducing one constant each time:

$$\begin{aligned}
y^{\prime}&=\int(6x+4)\,\mathrm dx
=6\frac{x^2}{2}+4x+B=3x^2+4x+B,\\
y&=\int(3x^2+4x+B)\,\mathrm dx\\
&=3\frac{x^3}{3}+4\frac{x^2}{2}+Bx+A=x^3+2x^2+Bx+A.
\end{aligned}$$

The repeated zero root gives $y_c=A+Bx$. Integration twice gives a PI $y_p=x^3+2x^2$, so

$$y=x^3+2x^2+A+Bx.$$

The boundary values give $A=1$ and $1+2+1+B=4$, hence $B=0$:

$$\boxed{y=x^3+2x^2+1},\qquad 0\le x\le1.$$

Check: $y^{\prime\prime}=6x+4$, $y(0)=1$ and $y(1)=4$. The forcing is degree 1, but the PI is degree 3 because the zero root is repeated.

</details>

</section>

## Diagnose and Retry {#diagnose-and-retry}

These tasks are self-written and have no official marks. Explain the error before opening feedback; then close every solution and attempt the new task independently. If you need a hint, return later for another independent attempt.

<section class="lesson-check" markdown="1">

**Diagnose:** For $y^{\prime\prime}-4y^{\prime}+4y=8e^{2x}$, a learner tries $y_p=Cxe^{2x}$. Test the trial before trying to determine $C$.

<details markdown="1">
<summary>Feedback</summary>

Substitution gives zero for every $C$, since this trial is in the CF. Use $Cx^2e^{2x}$ instead; it contributes $2Ce^{2x}$, so $C=4$. One extra factor of $x$ was insufficient for the repeated root.

</details>

</section>

<section class="lesson-check" markdown="1">

### A new attempt {#pi-target-retry}

> **Self-written task.** For $y^{\prime\prime}-2y^{\prime}+y=7e^x$, the CF is $(A+Bx)e^x$. Find a PI. Explain why the simpler exponential trials cannot work, and verify your answer. You do not need to find arbitrary constants.

<details markdown="1">
<summary>Hint</summary>

Check both $Ce^x$ and $Cxe^x$. If a trial belongs to the CF, no choice of its coefficient will produce the nonzero right side.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Both $Ce^x$ and $Cxe^x$ belong to the CF and give zero. Try $y_p=Cx^2e^x$.

$$\begin{aligned}
y_p^{\prime}&=C(2x+x^2)e^x,\\
y_p^{\prime\prime}&=C(2+4x+x^2)e^x,\\
y_p^{\prime\prime}-2y_p^{\prime}+y_p
&=C[(2+4x+x^2)\\
&\quad-2(2x+x^2)+x^2]e^x\\
&=2Ce^x=7e^x.
\end{aligned}$$

Thus $C=7/2$ and $y_p=7x^2e^x/2$. The displayed substitution verifies the PI; the CF is not needed to determine more constants here. If the form was wrong, revisit [the overlap check](#pi-overlap-check); if the derivative was wrong, revisit [Example 6](#example-6-repeated-resonance).

</details>

</section>

The task below is a later combined check: it also asks you to reconstruct the equation and use conditions. Do it after the PI-only retry.

<section class="lesson-check" markdown="1">

**Independent retry:** A homogeneous constant-coefficient equation has general solution $y=(A+Bx)e^{-x}$ and leading coefficient 1. Recover its differential equation. Then solve the equation with the same left side and right side $6e^{-x}$, given $y(0)=1$ and $y^{\prime}(0)=0$.

<details markdown="1">
<summary>Hint</summary>

Recover the auxiliary polynomial from the whole solution family, then compare the forcing with that family.

</details>

<details markdown="1">
<summary>Retry solution and check</summary>

The auxiliary polynomial is $(m+1)^2$, so the homogeneous equation is $y^{\prime\prime}+2y^{\prime}+y=0$. The forcing overlaps a repeated root. Test the new trial before applying conditions to the total solution:

$$\begin{aligned}
y_p&=Cx^2e^{-x},\\
y_p^{\prime}&=C(2x-x^2)e^{-x},\\
y_p^{\prime\prime}&=C(2-4x+x^2)e^{-x},\\
y_p^{\prime\prime}+2y_p^{\prime}+y_p
&=C[(2-4x+x^2)+2(2x-x^2)+x^2]e^{-x}\\
&=2Ce^{-x}=6e^{-x}\quad\Longrightarrow\quad C=3,\\
y&=(A+Bx+3x^2)e^{-x},\\
y^{\prime}&=[B+6x-(A+Bx+3x^2)]e^{-x},\\
y(0)&=A=1,\qquad y^{\prime}(0)=B-A=0,\\
y&=\boxed{(1+x+3x^2)e^{-x}}.
\end{aligned}$$

Substitution gives $6e^{-x}$ on the left, and the two initial conditions have been checked separately above.

</details>

</section>

**Next after practice:** close this chapter and attempt the course [mixed review](/alevel/a2-further-mathematics/#mixed-review). After subsequent learning, attempt the [later retrieval tasks](/alevel/a2-further-mathematics/#later-review). Record whether the first attempt was independent, any hint used, the error and the retry result. If a method or condition was wrong, use this chapter’s after-practice route to repair that skill, then retry with solutions closed.

## Quick Reference {#quick-reference}

| Step | What to write | What to check |
|---|---|---|
| CF | Solve $am^2+bm+c=0$ | Keep the original coefficients, including $a$ |
| Distinct roots | $Ae^{m_1x}+Be^{m_2x}$ | Two independent exponentials |
| Repeated root | $(A+Bx)e^{mx}$ | Include the factor $x$ in the second term |
| Complex roots | $e^{\alpha x}(A\cos\beta x+B\sin\beta x)$ | Real part controls the exponential; imaginary part controls frequency |
| PI | Choose a trial, differentiate, substitute and match coefficients | Include both trig terms and all lower polynomial powers |
| Resonance | Multiply the overlapping trial by $x$ or $x^2$ | Use the root multiplicity, then substitute to verify |
| General solution | $y=y_c+y_p$ | Exactly two arbitrary constants |
| Conditions | Use the total $y$ and total $y^{\prime}$ | Check limits term by term |
| Final check | Calculate $ay^{\prime\prime}+by^{\prime}+cy$ | Recover $f(x)$ and check every condition |
{: .wide-table}

## Common Pitfalls {#common-pitfalls}

- Using two copies of the same exponential for a repeated root.
- Swapping the real and imaginary parts of complex roots in the CF.
- Choosing a PI already contained in the CF, or multiplying by $x$ only once for a repeated exponential root.
- Using a sine-only or cosine-only trial without checking the derivative terms.
- Omitting lower polynomial powers before comparing coefficients.
- Assuming the PI has the same polynomial degree as the forcing when $c=0$.
- Applying conditions to the CF before adding the PI, or forgetting the PI when calculating $y^{\prime}$.
- Claiming $xe^{-kx}\to0$ solely because $e^{-kx}\to0$; justify the product limit for $k>0$.

**After practice:** redo any question for which you opened a hint. Show the auxiliary equation, CF, PI trial and substitution, then write the general solution before applying conditions.

**Learning path:** [Previous lesson: first-order differential equations](/alevel/a2-further-mathematics/first-order-differential-equations/) · [Next lesson: vector products and coplanarity](/alevel/a2-further-mathematics/vector-products-and-coplanarity/) · [Further Pure Mathematics](/alevel/a2-further-mathematics/).

## Sources {#sources}

Textbook: *International A Level Further Mathematics*, Chapter 25.2, printed pp.308–317; review on p.319.

Scope check on 2026-10-23: the current 9665 qualification page led to specification v5.2; the relevant FP2 section was checked without migrating to 9765. For the papers and schemes below, only the identified questions and matching marking sections were reread as PDF text; visual verification of the original PDF pages was not completed. Official identities and marks are retained; adaptations and self-written tasks are labelled separately.

The scope follows [OxfordAQA's International A-level Further Mathematics specification, FP2.11, printed p. 20](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf). Example 7 adapts the approach in Specimen 2018 FM03, Question 7, checked against the official mark scheme, Question 7: substitute a PI, match coefficients, add the CF, then apply the conditions and justify the decaying product limit. The equation and numbers are changed; no official mark allocation is implied. All other worked examples and practice questions are original.

[OxfordAQA Specimen 2018, Q7, QP PDF p. 12](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-specimen-paper-2019-v3.pdf#page=12); [MS Q7, PDF p. 10](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-mark-scheme-2016-v1.pdf#page=10). Question and matching mark scheme reread on 2026-10-23 (PDF text). Only the identified method is adapted; the adapted question and additional self-written tasks are not official questions.

PI learning update, 2026-10-28: the starting-form table was reorganised from a teacher-provided image (book/version unspecified), with CF-overlap conditions and FP2.11 polynomial scope added. Relevant paired QP/MS pages were reread and viewed: Specimen 2018 Q7 (QP pp.12–13, MS p.10), June 2024 Q8 (QP/MS p.12), January 2025 Q12 (QP p.24, MS p.19). These inform the practice priorities; no complete frequency study is claimed. The new short tasks are self-written and carry no official marks.
