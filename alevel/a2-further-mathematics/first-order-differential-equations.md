---
title: First-order Differential Equations
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
permalink: /alevel/a2-further-mathematics/first-order-differential-equations/
toc_headings: h2
study_page: true
---

[Further Pure Mathematics](/alevel/a2-further-mathematics/) · FP2.10 First-order differential equations

Learn to solve first-order linear differential equations by an integrating factor and by a complementary function plus a particular integral. Use an initial or boundary condition to choose one solution from the general family.

- **Learning:** start with [standard form](#standard-form), follow the [integrating factor](#integrating-factor), then compare [complementary functions and particular integrals](#cf-and-pi).
- **Homework help:** use [normalising the equation](#example-1-normalise-and-solve), [variable coefficients](#example-2-variable-coefficient), [trigonometric coefficients](#example-3-trigonometric-coefficient) or [a repeated exponential](#example-6-repeated-exponential).
- **Revision:** attempt the [practice questions](#practice) with solutions closed, then check the [quick reference](#quick-reference) and [common pitfalls](#common-pitfalls).

Textbook: Chapter 25.1 and 25.3, printed pp. 306–307 and 318–319, in *International A Level Further Mathematics*.

**Before you start:** revise the product rule, exponential and logarithmic integration, and [P2.8 differential equations](/alevel/a2-mathematics/differential-equations/). That lesson covers separable equations; this lesson extends your methods to linear equations whose terms may not separate.

## Standard Form and Solution Families {#standard-form}

A **first-order** equation has unknown function $y$ and highest derivative $y'=\frac{\mathrm dy}{\mathrm dx}$. It is **linear** when $y$ and $y'$ appear to the first power, without products such as $yy'$ or nonlinear terms such as $y^2$ or $\sin y$.

The standard linear form is

$$\boxed{y'+P(x)y=Q(x).}$$

The coefficients $P$ and $Q$ can depend on $x$. Before choosing an integrating factor, divide the whole equation by the coefficient of $y'$. For

$$a(x)y'+b(x)y=c(x),$$

the standard form has $P=b/a$ and $Q=c/a$, on an interval where $a(x)\ne0$.

A **general solution** contains one arbitrary constant. An **initial condition**, such as $y(0)=2$, fixes the value at a starting point. A **boundary condition**, such as $y(2)=5$, fixes the value at a stated boundary. Either can determine the constant and hence a **particular solution** of a first-order equation.

Work on a connected interval on which the standard-form coefficients are continuous. If a coefficient is undefined at $x=0$, solve separately on $x>0$ or $x<0$; do not use one integration constant to join solutions across the singular point. A formula that happens to have a value at that point does not make the original equation defined there.

## The Integrating Factor {#integrating-factor}

### Why the method works {#derive-integrating-factor}

Multiply the standard form by a function $\mu(x)$:

$$\mu y'+\mu P y=\mu Q.$$

The product rule gives $(\mu y)'=\mu y'+\mu' y$. The left side becomes this derivative if $\mu'=P\mu$. Solving that relation gives an **integrating factor**

$$\boxed{\mu=e^{\int P(x)\,\mathrm dx}.}$$

We omit the arbitrary constant in the integral: multiplying an integrating factor by a nonzero constant gives the same method. On the chosen interval, $\mu$ is nonzero, so division by $\mu$ is valid.

We can now integrate:

$$\begin{aligned}
(\mu y)'&=\mu Q,\\
\mu y&=\int\mu Q\,\mathrm dx+C,\\
y&=\boxed{\frac1\mu\left(\int\mu Q\,\mathrm dx+C\right)}.
\end{aligned}$$

### A reliable procedure {#integrating-factor-procedure}

1. Write $y'+Py=Q$, dividing every term if necessary.
2. Calculate $\mu=e^{\int P\,\mathrm dx}$.
3. Multiply every term by $\mu$ and write the left side as $(\mu y)'$.
4. Integrate, include $C$, and divide by $\mu$.
5. Apply the stated condition and check the answer in the original equation.

For $P=1/x$, $\int P\,\mathrm dx=\ln|x|$, so the formula gives $\mu=|x|$. On either interval $x>0$ or $x<0$, we may use $\mu=x$, because the two choices differ by a nonzero constant factor on that interval. The point $x=0$ remains excluded.

### Example 1: normalise and solve {#example-1-normalise-and-solve}

> **Original example.** Solve $2y'+4y=6$, given $y(0)=1$.

<details markdown="1">
<summary>Hint</summary>

Divide by 2 before calculating the integrating factor. The coefficient $P$ is 2.

</details>

<details markdown="1">
<summary>Solution</summary>

The standard form is $y'+2y=3$, so $\mu=e^{2x}$. Hence

$$\begin{aligned}
(e^{2x}y)'&=3e^{2x},\\
e^{2x}y&=\frac32e^{2x}+C,\\
y&=\frac32+Ce^{-2x}.
\end{aligned}$$

At $x=0$, $1=\frac32+C$, so $C=-\frac12$:

$$\boxed{y=\frac32-\frac12e^{-2x}},\qquad x\in\mathbb R.$$

Check: $y'=e^{-2x}$, so $2y'+4y=2e^{-2x}+6-2e^{-2x}=6$, and $y(0)=1$.

</details>

### Example 2: variable coefficient {#example-2-variable-coefficient}

> **Original example.** For $x>0$, solve $y'+\frac{2}{x}y=x$, given $y(1)=2$.

<details markdown="1">
<summary>Hint</summary>

Use $\int 2/x\,\mathrm dx=2\ln x$. The integrating factor is $x^2$.

</details>

<details markdown="1">
<summary>Solution</summary>

Since $x>0$,

$$\mu=e^{2\ln x}=x^2.$$

Therefore

$$\begin{aligned}
(x^2y)'&=x^3,\\
x^2y&=\frac{x^4}{4}+C,\\
y&=\frac{x^2}{4}+\frac{C}{x^2}.
\end{aligned}$$

The initial condition gives $2=\frac14+C$, so

$$\boxed{y=\frac{x^2}{4}+\frac{7}{4x^2}},\qquad x>0.$$

Differentiating the general solution gives $y'=x/2-2C/x^3$. Adding $(2/x)y=x/2+2C/x^3$ recovers $x$.

</details>

### Example 3: trigonometric coefficient {#example-3-trigonometric-coefficient}

> **Adapted example.** On $0<x<\frac\pi2$, solve $y'+\frac{\sec^2x}{\tan x}y=2\tan x$, given $y(\frac\pi4)=1$.

This changes the right side and condition from OxfordAQA Specimen 2018 FM03, Question 5. It follows the same integrating-factor method; it is not the official question.

<details markdown="1">
<summary>Hint</summary>

The numerator $\sec^2x$ is the derivative of $\tan x$. Then use $\tan^2x=\sec^2x-1$.

</details>

<details markdown="1">
<summary>Solution</summary>

On the stated interval, $\tan x>0$, so

$$\int\frac{\sec^2x}{\tan x}\,\mathrm dx=\ln(\tan x),\qquad \mu=\tan x.$$

Multiplying the equation by $\tan x$ gives

$$\begin{aligned}
(y\tan x)'&=2\tan^2x,\\
y\tan x&=2\int(\sec^2x-1)\,\mathrm dx,\\
y\tan x&=2\tan x-2x+C.
\end{aligned}$$

At $x=\pi/4$, $1=2-\pi/2+C$, so $C=\pi/2-1$. Thus

$$\boxed{y=\frac{2\tan x-2x+\pi/2-1}{\tan x}},\qquad 0<x<\frac\pi2.$$

To check the differential equation, differentiate $y\tan x$: its derivative is $2\sec^2x-2=2\tan^2x$. Dividing the product-rule expansion by $\tan x$ recovers the required equation. Both endpoints are excluded from the original coefficients.

</details>

## Complementary Functions and Particular Integrals {#cf-and-pi}

### Split the solution into two parts {#general-cf-pi}

For $y'+Py=Q$, the associated **homogeneous equation** is $y'+Py=0$. Its general solution is the **complementary function (CF)**:

$$\boxed{y_c=Ce^{-\int P\,\mathrm dx}=\frac C\mu.}$$

This formula also includes the zero solution when $C=0$. Deriving it from the integrating factor avoids dividing by $y$ and accidentally losing that solution.

A **particular integral (PI)** is any one function $y_p$ satisfying the complete equation $y_p'+Py_p=Q$. Adding the two gives

$$\boxed{y=y_c+y_p.}$$

Indeed, $(y_c+y_p)'+P(y_c+y_p)=0+Q$. This is the general solution because the difference between any two solutions satisfies the homogeneous equation.

An integrating factor supplies a PI even when guessing is inconvenient:

$$y_p=\frac1\mu\int\mu Q\,\mathrm dx,$$

where we choose one antiderivative without an arbitrary constant. The constant belongs in the CF.

**Keep the terms distinct:** a PI is one solution used to build the general family. A particular solution satisfying a condition usually includes a nonzero CF term as well.

### Simple trials for a constant coefficient {#simple-pi-trials}

For $y'+ay=Q(x)$ with constant $a$, substitution can find a PI quickly.

| Right side | Useful first trial | Check before using it |
|---|---|---|
| A constant, with $a\ne0$ | $y_p=A$ | Substitute to find $A$ |
| A polynomial of degree $n$, with $a\ne0$ | A polynomial of degree $n$ | Include all lower powers and compare coefficients |
| $be^{kx}$, with $k\ne-a$ | $y_p=Ae^{kx}$ | $(k+a)A=b$ |
| $be^{-ax}$ | $y_p=Axe^{-ax}$ | $Ae^{-ax}$ duplicates the CF and gives zero |

When $a=0$, the equation is simply $y'=Q$ and direct integration works. For variable $P(x)$, these trials are not a general recipe; use the integrating factor if a suitable PI is not apparent.

### Example 4: polynomial particular integral {#example-4-polynomial-pi}

> **Original example.** Find the general solution of $y'+2y=4x+3$. Hence find the solution satisfying the boundary condition $y(1)=2$.

<details markdown="1">
<summary>Hint</summary>

The CF is $Ce^{-2x}$. Try $y_p=Ax+B$, including the constant term.

</details>

<details markdown="1">
<summary>Solution</summary>

The homogeneous equation gives $y_c=Ce^{-2x}$. For $y_p=Ax+B$, substitution gives

$$A+2(Ax+B)=4x+3.$$

Comparing coefficients: $2A=4$ and $A+2B=3$, so $A=2$ and $B=1/2$. Therefore

$$\boxed{y=Ce^{-2x}+2x+\frac12}.$$

The boundary condition gives $2=Ce^{-2}+5/2$, hence $C=-e^2/2$:

$$\boxed{y=2x+\frac12-\frac12e^{2-2x}},\qquad x\in\mathbb R.$$

Check: the CF contributes zero to $y'+2y$, while the PI contributes $2+4x+1=4x+3$. At $x=1$, the displayed solution is $2$.

</details>

### Example 5: exponential particular integral {#example-5-exponential-pi}

> **Original example.** Solve $y'-3y=2e^x$, given $y(0)=4$, using a CF and a PI.

<details markdown="1">
<summary>Hint</summary>

The CF is $Ce^{3x}$. Try $y_p=Ae^x$.

</details>

<details markdown="1">
<summary>Solution</summary>

The homogeneous equation gives $y_c=Ce^{3x}$. Substituting $y_p=Ae^x$ gives

$$Ae^x-3Ae^x=2e^x,$$

so $A=-1$. Thus $y=Ce^{3x}-e^x$. Applying $y(0)=4$ gives $C=5$:

$$\boxed{y=5e^{3x}-e^x},\qquad x\in\mathbb R.$$

Check: $y'-3y=(15e^{3x}-e^x)-(15e^{3x}-3e^x)=2e^x$, and $y(0)=4$.

</details>

### Example 6: repeated exponential {#example-6-repeated-exponential}

> **Original example.** Find the general solution of $y'+2y=3e^{-2x}$. Explain why the trial $y_p=Ae^{-2x}$ fails.

<details markdown="1">
<summary>Hint</summary>

The proposed trial is part of the CF. Multiply it by $x$, or use the integrating factor $e^{2x}$.

</details>

<details markdown="1">
<summary>Solution</summary>

The CF is $Ce^{-2x}$. The trial $Ae^{-2x}$ gives $y_p'+2y_p=0$ for every $A$, so it cannot produce the nonzero right side.

Try $y_p=Axe^{-2x}$. By the product rule,

$$y_p'=Ae^{-2x}-2Axe^{-2x},\qquad y_p'+2y_p=Ae^{-2x}.$$

Hence $A=3$ and

$$\boxed{y=(C+3x)e^{-2x}},\qquad x\in\mathbb R.$$

The integrating factor reaches the same answer directly: $(e^{2x}y)'=3$, so $e^{2x}y=3x+C$. The extra factor $x$ repairs the repeated exponential trial in this first-order constant-coefficient case.

</details>

## Practice Questions {#practice}

All six questions below are original practice questions. State the general solution before applying any condition, and check your final answer by differentiation.

### Question 1: standard form {#practice-1}

> Solve $3y'+6y=12$, given $y(0)=5$.

<details markdown="1">
<summary>Hint</summary>

Divide by 3. Use $\mu=e^{2x}$.

</details>

<details markdown="1">
<summary>Solution</summary>

The standard form is $y'+2y=4$. Then $(e^{2x}y)'=4e^{2x}$, giving $y=2+Ce^{-2x}$. At $x=0$, $C=3$:

$$\boxed{y=2+3e^{-2x}},\qquad x\in\mathbb R.$$

Here $y'=-6e^{-2x}$; substitution gives $3y'+6y=12$, and $y(0)=5$.

</details>

### Question 2: logarithmic integrating factor {#practice-2}

> For $x>0$, solve $y'+\frac1x y=2$, given $y(2)=5$.

<details markdown="1">
<summary>Hint</summary>

Use $\mu=x$, and recognise $(xy)'$.

</details>

<details markdown="1">
<summary>Solution</summary>

Since $(xy)'=2x$, integration gives $xy=x^2+C$, so $y=x+C/x$. The condition gives $5=2+C/2$, hence

$$\boxed{y=x+\frac6x},\qquad x>0.$$

Check: $y'+y/x=1-6/x^2+1+6/x^2=2$. The original coefficient excludes $x=0$.

</details>

### Question 3: nonconstant coefficient {#practice-3}

> Solve $y'+2xy=2x$, given $y(0)=3$.

<details markdown="1">
<summary>Hint</summary>

Use $\mu=e^{x^2}$; its derivative is $2xe^{x^2}$.

</details>

<details markdown="1">
<summary>Solution</summary>

Multiplication gives $(e^{x^2}y)'=2xe^{x^2}$. Hence $e^{x^2}y=e^{x^2}+C$ and $y=1+Ce^{-x^2}$. The condition gives $C=2$:

$$\boxed{y=1+2e^{-x^2}},\qquad x\in\mathbb R.$$

Check: $y'=-4xe^{-x^2}$ cancels the exponential term in $2xy$, leaving $2x$.

</details>

### Question 4: polynomial PI and boundary condition {#practice-4}

> Using a CF and a PI, solve $y'+y=x^2$, given the boundary condition $y(1)=0$.

<details markdown="1">
<summary>Hint</summary>

Try $y_p=Ax^2+Bx+D$. Include the linear and constant terms.

</details>

<details markdown="1">
<summary>Solution</summary>

The CF is $Ce^{-x}$. The trial gives

$$y_p'+y_p=Ax^2+(2A+B)x+(B+D).$$

Therefore $A=1$, $B=-2$ and $D=2$. The general solution is $y=Ce^{-x}+x^2-2x+2$. At $x=1$, $0=Ce^{-1}+1$, so $C=-e$:

$$\boxed{y=x^2-2x+2-e^{1-x}},\qquad x\in\mathbb R.$$

The polynomial contributes $x^2$ to $y'+y$, the exponential contributes zero, and $y(1)=0$.

</details>

### Question 5: repeated exponential PI {#practice-5}

> Find the general solution of $y'-y=4e^x$, then use $y(0)=2$.

<details markdown="1">
<summary>Hint</summary>

The CF is $Ce^x$, so try $y_p=Axe^x$.

</details>

<details markdown="1">
<summary>Solution</summary>

For $y_p=Axe^x$, $y_p'-y_p=Ae^x$, giving $A=4$. Hence $y=(C+4x)e^x$. The initial condition gives $C=2$:

$$\boxed{y=(2+4x)e^x},\qquad x\in\mathbb R.$$

Differentiating gives $y'=(6+4x)e^x$, so $y'-y=4e^x$ and $y(0)=2$.

</details>

### Question 6: negative interval {#practice-6}

> On $x<0$, solve $y'-\frac1x y=x$, given $y(-1)=2$. Explain why the solution interval cannot include $x=0$.

<details markdown="1">
<summary>Hint</summary>

The integrating-factor formula gives $1/|x|$. On $x<0$, you may instead use the constant multiple $\mu=1/x$.

</details>

<details markdown="1">
<summary>Solution</summary>

Since $\int-1/x\,\mathrm dx=-\ln|x|$, use $\mu=1/x$ on the stated interval. Multiplication gives

$$\frac{y'}x-\frac y{x^2}=1,\qquad \left(\frac yx\right)'=1.$$

Thus $y/x=x+C$ and $y=x^2+Cx$. The condition gives $2=1-C$, so

$$\boxed{y=x^2-x},\qquad x<0.$$

Check: $y'-y/x=(2x-1)-(x-1)=x$. Although the formula is a polynomial, the original equation is undefined at $x=0$, so this solution of the original equation is stated on $x<0$.

</details>

## Quick Reference {#quick-reference}

| Step or method | Result | What to check |
|---|---|---|
| Standard form | $y'+P(x)y=Q(x)$ | Divide every term by the coefficient of $y'$ |
| Integrating factor | $\mu=e^{\int P\,\mathrm dx}$ | Use the standard-form $P$; no arbitrary constant needed in $\mu$ |
| Product derivative | $(\mu y)'=\mu Q$ | Multiply the right side too |
| General solution | $y=\mu^{-1}(\int\mu Q\,\mathrm dx+C)$ | Divide every term by $\mu$ |
| Complementary function | $y_c=C/\mu$ | Solves $y_c'+Py_c=0$ |
| Particular integral | Any one $y_p$ satisfying $y_p'+Py_p=Q$ | Do not add a second arbitrary constant |
| CF + PI | $y=y_c+y_p$ | Apply the condition after adding the two parts |
| Exponential trial | For $y'+ay=be^{kx}$, $y_p=\frac b{k+a}e^{kx}$ if $k+a\ne0$ | If $k=-a$, use $y_p=bxe^{-ax}$ |
| Conditions and interval | Substitute the given $(x,y)$ to find $C$ | Keep singular points excluded |

## Common Pitfalls {#common-pitfalls}

- Using the coefficient of $y$ before making the coefficient of $y'$ equal to 1.
- Multiplying only the left side by the integrating factor.
- Writing $(\mu y)'$ without checking that $\mu'=P\mu$.
- Forgetting $C$, or dividing only one term by $\mu$ at the end.
- Treating a PI as the final solution satisfying the condition.
- Trying an exponential PI that is already in the CF; multiply the trial by $x$ in the repeated case above.
- Dropping the absolute value in $\ln|x|$ without specifying a sign interval, or allowing a solution interval to cross a singular point.

**After practice:** redo any question for which you needed a hint. Show the standard form, integrating factor and product derivative, or explicitly identify the CF and PI. Finish by checking both the equation and its condition.

**Learning path:** [Previous lesson: hyperbolic functions](/alevel/a2-further-mathematics/hyperbolic-functions/) · [Next lesson: second-order differential equations](/alevel/a2-further-mathematics/second-order-differential-equations/) · [Further Pure Mathematics](/alevel/a2-further-mathematics/).

## Sources {#sources}

The scope follows OxfordAQA's [International A-level Further Mathematics specification, FP2.10, printed p. 19](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf): first-order linear equations, integrating factors, CF plus PI, and general and particular solutions. Example 3 adapts the method from [OxfordAQA Specimen 2018 FM03, Question 5](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-specimen-paper-2019-v3.pdf), checked against its [official mark scheme, Question 5](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-mark-scheme-2016-v1.pdf). The worked method makes the standard form, integrating factor, product derivative, integration and condition explicit. The adapted example changes the equation and condition; no official mark allocation is implied.
