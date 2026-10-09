---
title: Second-order Differential Equations
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
permalink: /alevel/a2-further-mathematics/second-order-differential-equations/
toc_headings: h2
study_page: true
---

[Further Pure Mathematics](/alevel/a2-further-mathematics/) · FP2.11 Second-order differential equations

Solve second-order linear differential equations with constant coefficients. Build the complementary function from an auxiliary equation, find a particular integral by substitution, then apply the conditions to the complete solution.

- **Learning:** start with [the auxiliary equation](#auxiliary-equation), then learn [CF plus PI](#cf-and-pi) and [choosing a trial](#pi-trials).
- **Homework help:** compare [distinct roots](#example-1-distinct-roots), [repeated roots](#example-2-repeated-roots), [complex roots](#example-3-complex-roots), [trigonometric forcing](#example-5-trigonometric-pi) and [resonance](#example-6-repeated-resonance).
- **Revision:** attempt the [practice questions](#practice) with solutions closed, then check the [quick reference](#quick-reference) and [common pitfalls](#common-pitfalls).

Textbook: Chapter 25.2, printed pp. 308–317, with review on printed p. 319, in *International A Level Further Mathematics*.

**Before you start:** revise the product rule, complex roots of quadratics and [FP2.10 first-order differential equations](/alevel/a2-further-mathematics/first-order-differential-equations/).

## The Equation and Its Conditions {#equation-and-conditions}

The equations in this lesson have the form

$$\boxed{ay^{\prime\prime}+by^{\prime}+cy=f(x),\qquad a\ne0,}$$

where $a,b,c$ are integer constants and $y^{\prime}=\frac{\mathrm dy}{\mathrm dx}$, $y^{\prime\prime}=\frac{\mathrm d^2y}{\mathrm dx^2}$. The highest derivative is second order. The equation is linear: $y$, $y^{\prime}$ and $y^{\prime\prime}$ occur to the first power, without products of them.

The equation is **homogeneous** when $f(x)=0$ and **nonhomogeneous** otherwise. The allowed forcing functions here are exponentials, sine or cosine, polynomials of degree at most 4, and linear combinations of these.

A **general solution** contains two arbitrary constants. **Initial conditions**, such as $y(0)=1$ and $y^{\prime}(0)=2$, specify values at one point. **Boundary conditions**, such as $y(0)=1$ and $y(1)=3$, specify values at different points. A condition on behaviour as $x\to\infty$ can also determine a constant. Apply every condition to the total solution, including its PI.

Two suitable independent conditions can determine the constants. Boundary conditions are not automatically sufficient: for example, $y^{\prime\prime}+y=0$ with $y(0)=y(\pi)=0$ leaves $y=B\sin x$. Always solve the equations for the constants rather than assuming uniqueness.

## The Auxiliary Equation and Complementary Function {#auxiliary-equation}

For the homogeneous equation $ay^{\prime\prime}+by^{\prime}+cy=0$, try $y=e^{mx}$. Substitution gives

$$e^{mx}(am^2+bm+c)=0.$$

Since $e^{mx}\ne0$, the **auxiliary equation** is

$$\boxed{am^2+bm+c=0.}$$

Its roots determine the **complementary function (CF)**, the general solution of the homogeneous equation.

| Auxiliary roots | Complementary function |
|---|---|
| Distinct real roots $m_1,m_2$ | $y_c=Ae^{m_1x}+Be^{m_2x}$ |
| Repeated real root $m$ | $y_c=(A+Bx)e^{mx}$ |
| Complex roots $\alpha\pm i\beta$, $\beta>0$ | $y_c=e^{\alpha x}(A\cos\beta x+B\sin\beta x)$ |

In the repeated-root case, writing two copies of $e^{mx}$ gives only one independent function. The second function is $xe^{mx}$. For complex roots, the real sine–cosine form supplies two real independent functions. A zero root is allowed: $e^{0x}=1$; a repeated zero root gives $A+Bx$.

### Example 1: distinct real roots {#example-1-distinct-roots}

> **Original example.** Solve $2y^{\prime\prime}-2y^{\prime}-4y=0$, given $y(0)=3$ and $y^{\prime}(0)=0$.

<details markdown="1">
<summary>Hint</summary>

Factor $2m^2-2m-4$. Differentiate the general solution before applying the second condition.

</details>

<details markdown="1">
<summary>Solution</summary>

The auxiliary equation is $2(m-2)(m+1)=0$, with roots $2,-1$. Therefore

$$y=Ae^{2x}+Be^{-x},\qquad y^{\prime}=2Ae^{2x}-Be^{-x}.$$

At $x=0$, $A+B=3$ and $2A-B=0$. Hence $A=1$, $B=2$:

$$\boxed{y=e^{2x}+2e^{-x}}.$$

Each exponential satisfies the homogeneous equation. The displayed solution has $y(0)=3$ and $y^{\prime}(0)=2-2=0$.

</details>

### Example 2: a repeated real root {#example-2-repeated-roots}

> **Original example.** Solve $y^{\prime\prime}+4y^{\prime}+4y=0$, given $y(0)=1$ and $y^{\prime}(0)=0$.

<details markdown="1">
<summary>Hint</summary>

The auxiliary equation has a repeated root. Use $(A+Bx)e^{-2x}$ and the product rule.

</details>

<details markdown="1">
<summary>Solution</summary>

Since $(m+2)^2=0$, the general solution is $y=(A+Bx)e^{-2x}$. Then

$$y^{\prime}=[B-2(A+Bx)]e^{-2x}.$$

The conditions give $A=1$ and $B-2A=0$, so $B=2$:

$$\boxed{y=(1+2x)e^{-2x}}.$$

Here $y^{\prime}=-4xe^{-2x}$ and $y^{\prime\prime}=(-4+8x)e^{-2x}$. Thus $y^{\prime\prime}+4y^{\prime}+4y=0$, and both initial conditions hold.

</details>

### Example 3: complex roots {#example-3-complex-roots}

> **Original example.** Solve $y^{\prime\prime}+2y^{\prime}+5y=0$, given $y(0)=2$ and $y^{\prime}(0)=0$.

<details markdown="1">
<summary>Hint</summary>

Complete the square in $m^2+2m+5$. The exponential factor and trigonometric frequency come from different parts of the roots.

</details>

<details markdown="1">
<summary>Solution</summary>

The auxiliary equation is $(m+1)^2+4=0$, giving $m=-1\pm2i$. Hence

$$y=e^{-x}(A\cos2x+B\sin2x).$$

Differentiating,

$$y^{\prime}=e^{-x}[(-A+2B)\cos2x+(-B-2A)\sin2x].$$

The conditions give $A=2$ and $-A+2B=0$, so $B=1$:

$$\boxed{y=e^{-x}(2\cos2x+\sin2x)}.$$

To check the equation, write $y=e^{-x}v$. Then $y^{\prime\prime}+2y^{\prime}+5y=e^{-x}(v^{\prime\prime}+4v)=0$ for $v=2\cos2x+\sin2x$. The values at zero also agree.

</details>

## Complementary Function Plus Particular Integral {#cf-and-pi}

A **particular integral (PI)** is one function $y_p$ satisfying the complete equation:

$$ay_p^{\prime\prime}+by_p^{\prime}+cy_p=f(x).$$

By linearity, adding the CF gives the general solution:

$$\boxed{y=y_c+y_p.}$$

The CF contributes zero to the left side and the PI contributes $f(x)$. Conversely, the difference between any two solutions satisfies the homogeneous equation, so the CF accounts for the whole solution family.

**A PI and a particular solution are different ideas.** A PI is chosen to build the general solution. A particular solution satisfying the given conditions usually includes CF terms with determined constants. Put the two arbitrary constants in the CF; do not introduce further arbitrary constants into the PI.

## Choosing and Checking a PI Trial {#pi-trials}

Use **undetermined coefficients**: choose a suitable trial, differentiate it, substitute it into the original equation, and compare coefficients.

| Forcing function | First trial before checking overlap with the CF |
|---|---|
| $Ke^{kx}$ | $Ce^{kx}$ |
| $K\cos\omega x$ or $K\sin\omega x$, $\omega\ne0$ | $C\cos\omega x+D\sin\omega x$ |
| Polynomial of degree $n\le4$ | $C_nx^n+\cdots+C_1x+C_0$ |
| A linear combination | Add the corresponding trials and determine their coefficients |

Use both sine and cosine in a trigonometric trial, even if only one appears on the right: the $by^{\prime}$ term can mix them. Include every lower power in a polynomial trial because differentiation creates lower powers.

### Resonance: when a trial duplicates the CF {#resonance}

If a trial is already a homogeneous solution, substitution produces zero. This overlap is called **resonance**. Multiply the entire overlapping trial by the smallest power of $x$ that removes the overlap:

- For $e^{kx}$, use $xCe^{kx}$ when $k$ is a simple auxiliary root, or $x^2Ce^{kx}$ when it is a repeated root.
- For pure sine–cosine forcing, if the auxiliary roots are $\pm i\omega$, use $x(C\cos\omega x+D\sin\omega x)$.
- For polynomial forcing, take the multiplicity of $m=0$ in the auxiliary equation to be $s$, and multiply the polynomial trial by $x^s$. Here $s$ is 0, 1 or 2; use 0 when zero is not an auxiliary root.

For example, if $c=0$ but $b\ne0$, a constant forcing needs a linear PI. If $b=c=0$, the equation is $ay^{\prime\prime}=f(x)$ and direct integration twice is simplest. A forcing polynomial of degree 4 can then have a PI of degree 6: the degree restriction concerns $f(x)$, not the answer.

### Example 4: an exponential PI {#example-4-exponential-pi}

> **Original example.** Find the general solution of $y^{\prime\prime}-y=6e^{2x}$.

<details markdown="1">
<summary>Hint</summary>

The auxiliary roots are $1,-1$. The forcing exponential is not in the CF, so try $Ce^{2x}$.

</details>

<details markdown="1">
<summary>Solution</summary>

The CF is $y_c=Ae^x+Be^{-x}$. For $y_p=Ce^{2x}$, substitution gives

$$y_p^{\prime\prime}-y_p=(4C-C)e^{2x}=6e^{2x},$$

so $C=2$. Therefore

$$\boxed{y=Ae^x+Be^{-x}+2e^{2x}}.$$

The CF contributes zero and $2e^{2x}$ contributes $6e^{2x}$ to $y^{\prime\prime}-y$.

</details>

### Example 5: a trigonometric PI {#example-5-trigonometric-pi}

> **Original example.** Find the general solution of $y^{\prime\prime}+y^{\prime}+2y=3\cos x$.

<details markdown="1">
<summary>Hint</summary>

Try $C\cos x+D\sin x$. A cosine-only trial cannot cancel the sine term created by $y^{\prime}$.

</details>

<details markdown="1">
<summary>Solution</summary>

The auxiliary roots are $(-1\pm i\sqrt7)/2$, giving

$$y_c=e^{-x/2}\left(A\cos\frac{\sqrt7x}{2}+B\sin\frac{\sqrt7x}{2}\right).$$

For $y_p=C\cos x+D\sin x$,

$$y_p^{\prime}=-C\sin x+D\cos x,\qquad y_p^{\prime\prime}=-C\cos x-D\sin x.$$

Substitution gives

$$y_p^{\prime\prime}+y_p^{\prime}+2y_p=(C+D)\cos x+(D-C)\sin x.$$

Thus $C+D=3$ and $D-C=0$, so $C=D=3/2$. The general solution is

$$\boxed{y=e^{-x/2}\left(A\cos\frac{\sqrt7x}{2}+B\sin\frac{\sqrt7x}{2}\right)+\frac32(\cos x+\sin x)}.$$

The matched coefficients confirm that the PI contributes exactly $3\cos x$.

</details>

### Example 6: resonance at a repeated root {#example-6-repeated-resonance}

> **Original example.** Find the general solution of $y^{\prime\prime}-4y^{\prime}+4y=8e^{2x}$. Explain why neither $Ce^{2x}$ nor $Cxe^{2x}$ is a suitable PI.

<details markdown="1">
<summary>Hint</summary>

The root 2 is repeated. Both proposed trials belong to the CF. Try $Cx^2e^{2x}$.

</details>

<details markdown="1">
<summary>Solution</summary>

The auxiliary equation is $(m-2)^2=0$, so $y_c=(A+Bx)e^{2x}$. Both proposed trials contribute zero to the differential equation.

For $y_p=Cx^2e^{2x}$,

$$\begin{aligned}
y_p^{\prime}&=C(2x+2x^2)e^{2x},\\
y_p^{\prime\prime}&=C(2+8x+4x^2)e^{2x},\\
y_p^{\prime\prime}-4y_p^{\prime}+4y_p&=2Ce^{2x}.
\end{aligned}$$

Hence $C=4$ and

$$\boxed{y=(A+Bx+4x^2)e^{2x}}.$$

The extra factor is $x^2$, because both $e^{2x}$ and $xe^{2x}$ already occur in the CF.

</details>

### Example 7: mixed forcing and an asymptotic condition {#example-7-mixed-forcing}

> **Adapted example.** For $x\ge0$, solve $y^{\prime\prime}+y^{\prime}-2y=4x-6e^{-2x}$, given $y(0)=2$ and $y^{\prime}\to-2$ as $x\to\infty$.

This changes the equation and conditions from OxfordAQA Specimen 2018 FM03, Question 7. It retains the method of a polynomial PI plus a resonant exponential PI, followed by conditions on the complete solution. It is not the official question.

<details markdown="1">
<summary>Hint</summary>

The roots are $1,-2$. Try $y_p=Cx+D+Exe^{-2x}$. Examine $e^{-2x}$ and $xe^{-2x}$ separately when applying the limit.

</details>

<details markdown="1">
<summary>Solution</summary>

The auxiliary equation $(m+2)(m-1)=0$ gives $y_c=Ae^{-2x}+Be^x$. The exponential forcing overlaps with a simple CF root, so use

$$y_p=Cx+D+Exe^{-2x}.$$

Its derivatives are

$$y_p^{\prime}=C+E(1-2x)e^{-2x},\qquad y_p^{\prime\prime}=E(4x-4)e^{-2x}.$$

Substitution gives

$$y_p^{\prime\prime}+y_p^{\prime}-2y_p=-2Cx+(C-2D)-3Ee^{-2x}.$$

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

## Practice Questions {#practice}

All seven questions below are original practice questions. Identify the CF and PI where appropriate. State the general solution before applying conditions, and check the equation and every condition.

### Question 1: distinct real roots {#practice-1}

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

### Question 2: repeated real root {#practice-2}

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

### Question 3: pure oscillation {#practice-3}

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

### Question 4: a fourth-degree polynomial {#practice-4}

> Find the general solution of $y^{\prime\prime}+y=x^4$.

<details markdown="1">
<summary>Hint</summary>

Try $Cx^4+Dx^3+Ex^2+Fx+G$. Include the missing lower powers before matching coefficients.

</details>

<details markdown="1">
<summary>Solution</summary>

The CF is $A\cos x+B\sin x$. For the proposed polynomial,

$$y_p^{\prime\prime}+y_p=Cx^4+Dx^3+(E+12C)x^2+(F+6D)x+(G+2E).$$

Matching coefficients gives $C=1$, $D=0$, $E=-12$, $F=0$, $G=24$. Hence

$$\boxed{y=A\cos x+B\sin x+x^4-12x^2+24}.$$

Check: the polynomial has $y_p^{\prime\prime}=12x^2-24$, so $y_p^{\prime\prime}+y_p=x^4$.

</details>

### Question 5: simple exponential resonance {#practice-5}

> Find the general solution of $y^{\prime\prime}-3y^{\prime}+2y=5e^x$.

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

### Question 6: trigonometric resonance {#practice-6}

> Solve $y^{\prime\prime}+4y=8\sin2x$, given $y(0)=0$ and $y^{\prime}(0)=0$.

<details markdown="1">
<summary>Hint</summary>

The ordinary sine–cosine trial is in the CF. Multiply it by $x$ and use the product rule.

</details>

<details markdown="1">
<summary>Solution</summary>

The CF is $A\cos2x+B\sin2x$. Try $y_p=x(C\cos2x+D\sin2x)$. Differentiation gives

$$y_p^{\prime\prime}+4y_p=-4C\sin2x+4D\cos2x.$$

Thus $C=-2$, $D=0$, and the general solution is $y=A\cos2x+B\sin2x-2x\cos2x$.

At zero, $A=0$. Its derivative is

$$y^{\prime}=-2A\sin2x+2B\cos2x-2\cos2x+4x\sin2x,$$

so $2B-2=0$, giving $B=1$:

$$\boxed{y=\sin2x-2x\cos2x}.$$

The PI contributes $8\sin2x$ and the CF contributes zero; both initial conditions hold. Applying $y^{\prime}(0)=0$ to the CF alone would give the wrong constant.

</details>

### Question 7: a repeated zero root and boundary values {#practice-7}

> On $0\le x\le1$, solve $y^{\prime\prime}=6x+4$, given $y(0)=1$ and $y(1)=4$. Identify a CF and a PI.

<details markdown="1">
<summary>Hint</summary>

The auxiliary equation is $m^2=0$. Integrate twice; do not use only a degree-1 polynomial PI.

</details>

<details markdown="1">
<summary>Solution</summary>

The repeated zero root gives $y_c=A+Bx$. Integration twice gives a PI $y_p=x^3+2x^2$, so

$$y=x^3+2x^2+A+Bx.$$

The boundary values give $A=1$ and $1+2+1+B=4$, hence $B=0$:

$$\boxed{y=x^3+2x^2+1},\qquad 0\le x\le1.$$

Check: $y^{\prime\prime}=6x+4$, $y(0)=1$ and $y(1)=4$. The forcing is degree 1, but the PI is degree 3 because the zero root is repeated.

</details>

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

**Learning path:** [Previous lesson: first-order differential equations](/alevel/a2-further-mathematics/first-order-differential-equations/) · FP2.12 Vectors and three-dimensional coordinate geometry (in preparation) · [Further Pure Mathematics](/alevel/a2-further-mathematics/).

## Sources {#sources}

The scope follows [OxfordAQA's International A-level Further Mathematics specification, FP2.11, printed p. 20](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf). Example 7 adapts the approach in [Specimen 2018 FM03, Question 7](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-specimen-paper-2019-v3.pdf), checked against the [official mark scheme, Question 7](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-mark-scheme-2016-v1.pdf): substitute a PI, match coefficients, add the CF, then apply the conditions and justify the decaying product limit. The equation and numbers are changed; no official mark allocation is implied. All other worked examples and practice questions are original.
