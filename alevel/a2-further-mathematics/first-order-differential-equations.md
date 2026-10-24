---
title: First-order Differential Equations
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
permalink: /alevel/a2-further-mathematics/first-order-differential-equations/
toc_headings: "#standard-form, #integrating-factor, #cf-and-pi, #practice, #diagnose-and-retry, #later-review, #quick-reference, #common-pitfalls, #sources"
study_page: true
reading_layout: true
---

[Further Pure Mathematics](/alevel/a2-further-mathematics/) · FP2.10

This time the answer is a function. The equation tells us how the function's value and its derivative must be related. We want to find that function, then use the given condition to find its constant.

Start with [what the equation says](#standard-form), follow [Example 1](#example-1-normalise-and-solve), then try [Example 2](#example-2-variable-coefficient) yourself. If you have studied the method before, go straight to [practice](#practice).

**Before you start:** use the [product rule](/alevel/a2-mathematics/differentiation/#products-and-quotients) to differentiate two functions multiplied together, and review [exponential and logarithmic integrals](/alevel/a2-mathematics/integration/#exponential-logarithmic-integrals) if needed. This lesson follows [P2.8 separable equations](/alevel/a2-mathematics/differential-equations/); the variables here cannot always be separated directly.

## Standard Form and Solution Families {#standard-form}

Call the unknown function $y$. Its derivative $y^{\prime}=\frac{\mathrm dy}{\mathrm dx}$ is its rate of change, or the slope of its graph. The highest derivative in the equation is the first derivative, so the equation is **first-order**.

We study **linear** equations: $y$ and $y^{\prime}$ appear only to the first power, with no products such as $yy^{\prime}$ and no terms such as $y^2$ or $\sin y$. Their coefficients may depend on the independent variable.

The standard linear form is

$$\boxed{y^{\prime}+P(x)y=Q(x).}$$

Here $P$ is the function multiplying $y$, and $Q$ is the function on the right. First make the coefficient of $y^{\prime}$ equal to 1 so that the product rule will fit. For

$$a(x)y^{\prime}+b(x)y=c(x),$$

the standard form has $P=b/a$ and $Q=c/a$, on an interval where $a(x)\ne0$.

A **general solution** contains one arbitrary constant. An **initial condition**, such as $y(0)=2$, fixes the value at a starting point. A **boundary condition**, such as $y(2)=5$, fixes the value at a stated boundary. Either can determine the constant and hence a **particular solution** of a first-order equation.

**Check where the method can be used.** Work on an interval where the standard-form coefficients are continuous. If standard form fails at $x=0$, first solve separately on $x>0$ or $x<0$. Do not assume the constants on the two sides are the same.

Can a solution also include zero? Check the original equation separately. If it contains $1/x$, it is undefined there. But if only the coefficient of the derivative becomes zero, the original equation may still be defined. Any proposed extension must be differentiable there and satisfy the original equation. A point where standard form fails is called a singular point of that form.

## The Integrating Factor {#integrating-factor}

### Why the method works {#derive-integrating-factor}

We want to write the left side as the derivative of one product. Then integration will undo the derivative.

First look at a specific product. Differentiate an exponential multiplied by the unknown function:

$$(e^{2x}y)^{\prime}=e^{2x}y^{\prime}+2e^{2x}y=e^{2x}(y^{\prime}+2y).$$

So, if the left side has the form in brackets, multiplying by this exponential turns it into one derivative. An **integrating factor** is a multiplier chosen for this purpose. We call it $\mu$ (mu). Now find a rule for choosing it.

Multiply the standard form by a function $\mu(x)$:

$$\mu y^{\prime}+\mu P y=\mu Q.$$

The product rule gives $(\mu y)^{\prime}=\mu y^{\prime}+\mu^{\prime} y$. Compare its two terms with the multiplied equation: they match if $\mu^{\prime}=P\mu$.

To find such a factor, first integrate $P$. Call the resulting antiderivative $F$, so $F^{\prime}=P$. Choose $\mu=e^F$: the chain rule makes its derivative equal to the exponent's derivative multiplied by the same exponential. Check:

$$\mu^{\prime}=F^{\prime}e^F=P\mu.$$

Thus an **integrating factor** is

$$\boxed{\mu=e^{\int P(x)\,\mathrm dx}.}$$

We omit the arbitrary constant in the integral: multiplying an integrating factor by a nonzero constant gives the same method. On the chosen interval, $\mu$ is nonzero, so division by $\mu$ is valid.

The left side is now one derivative. Integrate it, then divide by the factor to recover the unknown function. The formula below shows those steps; you do not need to memorise it before following Example 1:

$$\begin{aligned}
(\mu y)^{\prime}&=\mu Q,\\
\mu y&=\int\mu Q\,\mathrm dx+C,\\
y&=\boxed{\frac1\mu\left(\int\mu Q\,\mathrm dx+C\right)}.
\end{aligned}$$

### A reliable procedure {#integrating-factor-procedure}

1. Write $y^{\prime}+Py=Q$, dividing every term if necessary.
2. Calculate $\mu=e^{\int P\,\mathrm dx}$.
3. Multiply every term by $\mu$ and write the left side as $(\mu y)^{\prime}$.
4. Integrate, include $C$, and divide by $\mu$.
5. Apply the stated condition and check the answer in the original equation.

For $P=1/x$, $\int P\,\mathrm dx=\ln\lvert x\rvert $, so the formula gives $\mu=\lvert x\rvert $. On either interval $x>0$ or $x<0$, we may use $\mu=x$, because the two choices differ by a nonzero constant factor on that interval. This calculation excludes $x=0$; any extension needs a separate check in the original equation.

<section class="worked-example" markdown="1">

### Example 1: normalise and solve {#example-1-normalise-and-solve}

> **Original example.** Solve $2y^{\prime}+4y=6$, given $y(0)=1$.

This is a complete demonstration. The unknown function and its derivative occur linearly, so an integrating factor is available. We first divide **every term** by 2: the standard form is $y^{\prime}+2y=3$, so $P=2$ and $Q=3$. Using 4 as $P$ would match the wrong equation.

Choose $\mu=e^{2x}$ because its derivative is twice itself.

Here $\int2\,\mathrm dx=2x$ supplies the exponent of the factor. When integrating the right side below, the chain rule gives $\frac{\mathrm d}{\mathrm dx}e^{2x}=2e^{2x}$, so its antiderivative needs a factor of $1/2$.

Multiplication gives

$$e^{2x}y^{\prime}+2e^{2x}y=3e^{2x}.$$

By the product rule,

$$\frac{\mathrm d}{\mathrm dx}(e^{2x}y)=e^{2x}y^{\prime}+2e^{2x}y.$$

The matching coefficients are what make the method work. Integrate this product derivative, include the arbitrary constant, then divide the whole result by the nonzero factor:

$$\begin{aligned}
(e^{2x}y)^{\prime}&=3e^{2x},\\
\int(e^{2x}y)^{\prime}\,\mathrm dx&=3\int e^{2x}\,\mathrm dx,\\
e^{2x}y&=3\left(\frac12e^{2x}\right)+C,\\
e^{2x}y&=\frac32e^{2x}+C,\\
y&=\frac32+Ce^{-2x}.
\end{aligned}$$

Only now use the initial condition. At $x=0$, $1=\frac32+C$, so $C=-\frac12$:

$$\boxed{y=\frac32-\frac12e^{-2x}},\qquad x\in\mathbb R.$$

Check the original equation as well as the condition: $y^{\prime}=e^{-2x}$, so $2y^{\prime}+4y=2e^{-2x}+6-2e^{-2x}=6$, and $y(0)=1$. Both coefficients are continuous for every real input, so no singular point restricts this solution.

</section>

<section class="lesson-check" markdown="1">

### Example 2: variable coefficient {#example-2-variable-coefficient}

> **Original example.** For $x>0$, solve $y^{\prime}+\frac{2}{x}y=x$, given $y(1)=2$.

Now try it with the help closed. Find $P$ and $Q$, calculate the factor, and check that the multiplied left side is a product derivative. Then integrate, use the condition and check your answer.

<details markdown="1">
<summary>Hint</summary>

Use $\int 2/x\,\mathrm dx=2\ln x$. The integrating factor is $x^2$.

</details>

<details markdown="1">
<summary>Solution</summary>

Since $x>0$,

$$\int\frac2x\,\mathrm dx=2\int\frac1x\,\mathrm dx=2\ln x,\qquad \mu=e^{2\ln x}=x^2.$$

Multiplying every term gives $x^2y^{\prime}+2xy=x^3$. The product rule gives $(x^2y)^{\prime}=x^2y^{\prime}+2xy$, since $\mu^{\prime}=2x=(2/x)\mu$. Thus

$$\begin{aligned}
(x^2y)^{\prime}&=x^3,\\
x^2y&=\int x^3\,\mathrm dx=\frac{x^{3+1}}{3+1}+C,\\
x^2y&=\frac{x^4}{4}+C,\\
y&=\frac{x^2}{4}+\frac{C}{x^2}.
\end{aligned}$$

The initial condition gives $2=\frac14+C$, so

$$\boxed{y=\frac{x^2}{4}+\frac{7}{4x^2}},\qquad x>0.$$

Differentiating the general solution gives $y^{\prime}=x/2-2C/x^3$. Adding $(2/x)y=x/2+2C/x^3$ recovers $x$.

If you multiplied the right side incorrectly, return to [step 3](#integrating-factor-procedure); it becomes the factor times the original right side. If the product derivative does not reproduce the coefficient of the unknown function, expand it with the [product rule](/alevel/a2-mathematics/differentiation/#products-and-quotients) before integrating. Close this check, then use [Question 3](#practice-3) for a different coefficient.

</details>

</section>

<section class="lesson-check" markdown="1">

### Example 3: trigonometric coefficient {#example-3-trigonometric-coefficient}

> **Adapted example.** On $0<x<\frac\pi2$, solve $y^{\prime}+\frac{\sec^2x}{\tan x}y=2\tan x$, given $y(\frac\pi4)=1$.

This changes the right side and condition from OxfordAQA Specimen 2018 FM03, Question 5. It follows the same integrating-factor method; it is not the official question.

If needed, recover [trigonometric integrals](/alevel/a2-mathematics/integration/#trigonometric-integrals) and [substitution](/alevel/a2-mathematics/integration/#substitution) before attempting this example.

<details markdown="1">
<summary>Hint</summary>

The numerator $\sec^2x$ is the derivative of $\tan x$. Then use $\tan^2x=\sec^2x-1$.

</details>

<details markdown="1">
<summary>Solution</summary>

On the stated interval $\tan x>0$. To evaluate the integral below, use $u=\tan x$, so $\mathrm du=\sec^2x\,\mathrm dx$:

$$\int\frac{\sec^2x}{\tan x}\,\mathrm dx=\int\frac1u\,\mathrm du=\ln\lvert u\rvert=\ln(\tan x),\qquad \mu=\tan x.$$

Multiplying the equation by $\tan x$ gives the product derivative below. To integrate its right side, use $\tan^2x=\sec^2x-1$:

$$\begin{aligned}
(y\tan x)^{\prime}&=2\tan^2x,\\
y\tan x&=2\int\tan^2x\,\mathrm dx,\\
y\tan x&=2\int\sec^2x\,\mathrm dx-2\int1\,\mathrm dx,\\
y\tan x&=2\tan x-2x+C.
\end{aligned}$$

At $x=\pi/4$, $1=2-\pi/2+C$, so $C=\pi/2-1$. Thus

$$\boxed{y=\frac{2\tan x-2x+\pi/2-1}{\tan x}},\qquad 0<x<\frac\pi2.$$

To check the differential equation, differentiate $y\tan x$: its derivative is $2\sec^2x-2=2\tan^2x$. Dividing the product-rule expansion by $\tan x$ recovers the required equation. Both endpoints are excluded from the original coefficients.

</details>

</section>

## Complementary Functions and Particular Integrals {#cf-and-pi}

### Split the solution into two parts {#general-cf-pi}

Sometimes it is quicker to build the answer in two parts. One part gives zero when substituted into the left side. The other gives the required right side. Adding them still solves the equation. Here are the names for those parts.

For $y^{\prime}+Py=Q$, the associated **homogeneous equation** is $y^{\prime}+Py=0$. Its general solution is the **complementary function (CF)**:

$$\begin{aligned}
(\mu y_c)^{\prime}&=0,\\
\mu y_c&=\int0\,\mathrm dx=C,\\
y_c&=Ce^{-\int P\,\mathrm dx}=\frac C\mu.
\end{aligned}$$

This formula also includes the zero solution when $C=0$. Deriving it from the integrating factor avoids dividing by $y$ and accidentally losing that solution.

A **particular integral (PI)** is any one function $y_p$ satisfying the complete equation $y_p^{\prime}+Py_p=Q$. Adding the two gives

$$\boxed{y=y_c+y_p.}$$

Indeed, $(y_c+y_p)^{\prime}+P(y_c+y_p)=0+Q$. This is the general solution because the difference between any two solutions satisfies the homogeneous equation.

An integrating factor supplies a PI even when guessing is inconvenient:

$$y_p=\frac1\mu\int\mu Q\,\mathrm dx,$$

where we choose one antiderivative without an arbitrary constant. The constant belongs in the CF.

**Keep the terms distinct:** a PI is one solution used to build the general family. A particular solution satisfying a condition usually includes a nonzero CF term as well.

### Simple trials for a constant coefficient {#simple-pi-trials}

For $y^{\prime}+ay=Q(x)$ with constant $a$, choose a function whose derivative can combine with it to give the right side. Leave its coefficients unknown, then substitute to find them. This is called **undetermined coefficients**. The trial must be checked in the equation.

| Right side | Useful first trial | Check before using it |
|---|---|---|
| A constant, with $a\ne0$ | $y_p=A$ | Substitute to find $A$ |
| A polynomial of degree $n$, with $a\ne0$ | A polynomial of degree $n$ | Include all lower powers and compare coefficients |
| $be^{kx}$, with $k\ne-a$ | $y_p=Ae^{kx}$ | $(k+a)A=b$ |
| $be^{-ax}$ | $y_p=Axe^{-ax}$ | $Ae^{-ax}$ duplicates the CF and gives zero |

When $a=0$, the equation is simply $y^{\prime}=Q$ and direct integration works. For variable $P(x)$, these trials are not a general recipe; use the integrating factor if a suitable PI is not apparent.

<section class="worked-example" markdown="1">

### Example 4: polynomial particular integral {#example-4-polynomial-pi}

> **Original example.** Find the general solution of $y^{\prime}+2y=4x+3$. Hence find the solution satisfying the boundary condition $y(1)=2$.

For the homogeneous part, $\int2\,\mathrm dx=2x$. Thus $(e^{2x}y_c)^{\prime}=0$; integration gives $e^{2x}y_c=\int0\,\mathrm dx=C$ and the CF is $Ce^{-2x}$.

The right side is linear, so try $y_p=Ax+B$. Keep the constant term because differentiating a linear term produces a constant. Substitution gives

$$A+2(Ax+B)=4x+3.$$

The two sides must agree for every value of the variable. Match the coefficients of the linear terms and then the constants: $2A=4$ and $A+2B=3$, so $A=2$ and $B=1/2$. Add the CF and PI:

$$\boxed{y=Ce^{-2x}+2x+\frac12}.$$

The boundary condition gives $2=Ce^{-2}+5/2$, hence $C=-e^2/2$:

$$\boxed{y=2x+\frac12-\frac12e^{2-2x}},\qquad x\in\mathbb R.$$

Check: the CF contributes zero to $y^{\prime}+2y$, while the PI contributes $2+4x+1=4x+3$. At $x=1$, the displayed solution is $2$.

</section>

<section class="lesson-check" markdown="1">

### Example 5: exponential particular integral {#example-5-exponential-pi}

> **Original example.** Solve $y^{\prime}-3y=2e^x$, given $y(0)=4$, using a CF and a PI.

<details markdown="1">
<summary>Hint</summary>

The CF is $Ce^{3x}$. Try $y_p=Ae^x$.

</details>

<details markdown="1">
<summary>Solution</summary>

For the homogeneous part, $\int(-3)\,\mathrm dx=-3x$. Thus $(e^{-3x}y_c)^{\prime}=0$; integration gives $e^{-3x}y_c=\int0\,\mathrm dx=C$ and the CF is $Ce^{3x}$.

The right side is an exponential. Try $y_p=Ae^x$ because its derivative keeps the same exponential factor. Substitution gives

$$Ae^x-3Ae^x=2e^x,$$

so $A=-1$. Thus $y=Ce^{3x}-e^x$. Applying $y(0)=4$ gives $C=5$:

$$\boxed{y=5e^{3x}-e^x},\qquad x\in\mathbb R.$$

Check: $y^{\prime}-3y=(15e^{3x}-e^x)-(15e^{3x}-3e^x)=2e^x$, and $y(0)=4$.

</details>

</section>

<section class="worked-example" markdown="1">

### Example 6: repeated exponential {#example-6-repeated-exponential}

> **Original example.** Find the general solution of $y^{\prime}+2y=3e^{-2x}$. Explain why the trial $y_p=Ae^{-2x}$ fails.

For the homogeneous part, $\int2\,\mathrm dx=2x$. Thus $(e^{2x}y_c)^{\prime}=0$; integration gives $e^{2x}y_c=\int0\,\mathrm dx=C$ and the CF is $Ce^{-2x}$.

The first trial $Ae^{-2x}$ gives $y_p^{\prime}+2y_p=0$ for every $A$. Changing the coefficient cannot help: the two terms always cancel, but the required right side is nonzero.

Try $y_p=Axe^{-2x}$. By the product rule,

$$y_p^{\prime}=Ae^{-2x}-2Axe^{-2x},\quad y_p^{\prime}+2y_p=Ae^{-2x}.$$

Hence $A=3$ and

$$\boxed{y=(C+3x)e^{-2x}},\qquad x\in\mathbb R.$$

The integrating factor reaches the same answer directly: $(e^{2x}y)^{\prime}=3$, so $e^{2x}y=\int3\,\mathrm dx=3\int1\,\mathrm dx=3x+C$. The extra factor $x$ repairs the repeated exponential trial in this first-order constant-coefficient case.

</section>

## Practice Questions {#practice}

All six questions below are original practice questions. State the general solution before applying any condition, and check your final answer by differentiation. Questions 1–3 check the integrating-factor section: keep hints and answers closed on your first attempt. Questions 4–6 also draw on the later methods and interval discussion.

<section class="lesson-check" markdown="1">

### Question 1: an initial value {#practice-1}

> Solve $3y^{\prime}+6y=12$, given $y(0)=5$.

<details markdown="1">
<summary>Hint</summary>

Divide by 3. Use $\mu=e^{2x}$.

</details>

<details markdown="1">
<summary>Solution</summary>

The standard form is $y^{\prime}+2y=4$. From $\int2\,\mathrm dx=2x$, use $\mu=e^{2x}$, giving $(e^{2x}y)^{\prime}=4e^{2x}$. Integrate both sides:

$$e^{2x}y=4\int e^{2x}\,\mathrm dx=4\left(\frac12e^{2x}\right)+C=2e^{2x}+C.$$

Dividing by the factor gives $y=2+Ce^{-2x}$. At $x=0$, $C=3$:

$$\boxed{y=2+3e^{-2x}},\qquad x\in\mathbb R.$$

Here $y^{\prime}=-6e^{-2x}$; substitution gives $3y^{\prime}+6y=12$, and $y(0)=5$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 2: a positive interval {#practice-2}

> For $x>0$, solve $y^{\prime}+\frac1x y=2$, given $y(2)=5$.

<details markdown="1">
<summary>Hint</summary>

Use $\mu=x$, and recognise $(xy)^{\prime}$.

</details>

<details markdown="1">
<summary>Solution</summary>

Since $\int(1/x)\,\mathrm dx=\ln x$, use $\mu=x$. Then $(xy)^{\prime}=2x$, so

$$xy=2\int x\,\mathrm dx=2\frac{x^2}{2}+C=x^2+C.$$

Thus $y=x+C/x$. The condition gives $5=2+C/2$, hence

$$\boxed{y=x+\frac6x},\qquad x>0.$$

Check: $y^{\prime}+y/x=1-6/x^2+1+6/x^2=2$. The original coefficient excludes $x=0$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 3: a new equation {#practice-3}

This task also uses the [chain rule](/alevel/a2-mathematics/differentiation/#composite-functions) and [reverse-chain integration](/alevel/a2-mathematics/integration/#reverse-chain-rule). Revisit those skills first if needed; they let you differentiate and integrate a composite exponential.

> Solve $y^{\prime}+2xy=2x$, given $y(0)=3$.

<details markdown="1">
<summary>Hint</summary>

Use $\mu=e^{x^2}$; its derivative is $2xe^{x^2}$.

</details>

<details markdown="1">
<summary>Solution</summary>

Since $\int2x\,\mathrm dx=2(x^2/2)=x^2$, multiplication by $\mu=e^{x^2}$ gives $(e^{x^2}y)^{\prime}=2xe^{x^2}$. Put $u=x^2$, so $\mathrm du=2x\,\mathrm dx$:

$$e^{x^2}y=\int2xe^{x^2}\,\mathrm dx=\int e^u\,\mathrm du=e^u+C=e^{x^2}+C.$$

Therefore $y=1+Ce^{-x^2}$. The condition gives $C=2$:

$$\boxed{y=1+2e^{-x^2}},\qquad x\in\mathbb R.$$

Check: $y^{\prime}=-4xe^{-x^2}$ cancels the exponential term in $2xy$, leaving $2x$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 4: polynomial PI and boundary condition {#practice-4}

> Using a CF and a PI, solve $y^{\prime}+y=x^2$, given the boundary condition $y(1)=0$.

<details markdown="1">
<summary>Hint</summary>

Try $y_p=Ax^2+Bx+D$. Include the linear and constant terms.

</details>

<details markdown="1">
<summary>Solution</summary>

For the homogeneous part, $\int1\,\mathrm dx=x$. Thus $(e^xy_c)^{\prime}=0$; integration gives $e^xy_c=\int0\,\mathrm dx=C$ and the CF is $Ce^{-x}$.

Now try a quadratic PI. Substitution gives

$$y_p^{\prime}+y_p=Ax^2+(2A+B)x+(B+D).$$

Therefore $A=1$, $B=-2$ and $D=2$. The general solution is $y=Ce^{-x}+x^2-2x+2$. At $x=1$, $0=Ce^{-1}+1$, so $C=-e$:

$$\boxed{y=x^2-2x+2-e^{1-x}},\qquad x\in\mathbb R.$$

The polynomial contributes $x^2$ to $y^{\prime}+y$, the exponential contributes zero, and $y(1)=0$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 5: a general family and a condition {#practice-5}

> Find the general solution of $y^{\prime}-y=4e^x$, then use $y(0)=2$.

<details markdown="1">
<summary>Hint</summary>

The CF is $Ce^x$, so try $y_p=Axe^x$.

</details>

<details markdown="1">
<summary>Solution</summary>

Here $\int(-1)\,\mathrm dx=-x$, and the homogeneous product integrates to $e^{-x}y_c=\int0\,\mathrm dx=C$, giving $y_c=Ce^x$.

For $y_p=Axe^x$, $y_p^{\prime}-y_p=Ae^x$, giving $A=4$. Hence $y=(C+4x)e^x$. The initial condition gives $C=2$:

$$\boxed{y=(2+4x)e^x},\qquad x\in\mathbb R.$$

Differentiating gives $y^{\prime}=(6+4x)e^x$, so $y^{\prime}-y=4e^x$ and $y(0)=2$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 6: negative interval {#practice-6}

> On $x<0$, solve $y^{\prime}-\frac1x y=x$, given $y(-1)=2$. Explain why the solution interval cannot include $x=0$.

<details markdown="1">
<summary>Hint</summary>

The integrating-factor formula gives $1/\lvert x\rvert $. On $x<0$, you may instead use the constant multiple $\mu=1/x$.

</details>

<details markdown="1">
<summary>Solution</summary>

Since $\int-1/x\,\mathrm dx=-\ln\lvert x\rvert $, use $\mu=1/x$ on the stated interval. Multiplication gives

$$\frac{y^{\prime}}x-\frac y{x^2}=1,\qquad \left(\frac yx\right)^{\prime}=1.$$

Integrating both sides gives $y/x=\int1\,\mathrm dx=x+C$, hence $y=x^2+Cx$. The condition gives $2=1-C$, so

$$\boxed{y=x^2-x},\qquad x<0.$$

Check: $y^{\prime}-y/x=(2x-1)-(x-1)=x$. Although the formula is a polynomial, the original equation is undefined at $x=0$, so this solution of the original equation is stated on $x<0$.

</details>

</section>

## Diagnose and Retry {#diagnose-and-retry}

These tasks are self-written and have no official marks. Explain the error before opening feedback; then close every solution and attempt the new task independently. If you need a hint, record that help and use the [later review](#later-review) after further study.

<section class="lesson-check" markdown="1">

**Diagnose:** A learner chooses integrating factor $e^{4x}$ for $2y^{\prime}+4y=6$. Explain which step was omitted.

<details markdown="1">
<summary>Feedback</summary>

First divide every term by 2. The standard form is $y^{\prime}+2y=3$, so the integrating factor is $e^{2x}$. The product derivative must reproduce the normalised coefficient.

Return to [standard form](#standard-form) if you used the coefficient from the unnormalised equation; compare the [full demonstration](#example-1-normalise-and-solve), then close it before the new task below.

</details>

</section>

<section class="lesson-check" markdown="1">

### A new initial-value problem {#normalisation-retry}

> **Independent retry (self-written).** For $x>0$, solve $xy^{\prime}+(2-x)y=x^2e^x$, given $y(1)=0$. State the standard-form coefficients, justify your integrating factor, and check the original equation and condition.

<details markdown="1"><summary>Hint</summary>

Begin with the coefficient of the derivative. After normalising, separate the coefficient of the unknown function into a reciprocal term and a constant. Check the chosen factor by differentiating it.

</details>

<details markdown="1"><summary>Retry solution and check</summary>

Since $x>0$, division by $x$ is valid:

$$y^{\prime}+\left(\frac2x-1\right)y=xe^x,\qquad P=\frac2x-1,\quad Q=xe^x.$$

Integrating the normalised coefficient gives

$$\int\left(\frac2x-1\right)\,\mathrm dx=2\int\frac1x\,\mathrm dx-\int1\,\mathrm dx=2\ln x-x,\qquad \mu=e^{2\ln x-x}=x^2e^{-x}.$$

Differentiate the factor to check that it has the required relation:

$$\mu^{\prime}=(2x-x^2)e^{-x}=\left(\frac2x-1\right)\mu.$$

Multiplying every term, including the right side, gives

$$\begin{aligned}
(x^2e^{-x}y)^{\prime}&=x^3,\\
x^2e^{-x}y&=\int x^3\,\mathrm dx=\frac{x^{3+1}}{3+1}+C,\\
x^2e^{-x}y&=\frac{x^4}{4}+C,\\
y&=e^x\left(\frac{x^2}{4}+\frac{C}{x^2}\right).
\end{aligned}$$

The condition gives $C=-1/4$, hence

$$\boxed{y=\frac{e^x}{4}(x^2-x^{-2})},\qquad x>0.$$

For a direct check, put $f=(x^2-x^{-2})/4$, so $y=e^xf$ and $y^{\prime}=e^x(f+f^{\prime})$. Then

$$xy^{\prime}+(2-x)y=e^x(xf^{\prime}+2f)=e^xx^2.$$

Also $f(1)=0$, so the condition holds. The integrating factor is nonzero on the stated interval; this argument does not divide through at zero or join solutions across it.

If your coefficient was not normalised, return to [standard form](#standard-form). If the right side or product derivative differed, revisit the [procedure](#integrating-factor-procedure). A correct final value alone does not replace these checks.

</details>

</section>

<section class="lesson-check" markdown="1">

### Reverse the construction {#recover-equation}

After the retry, start instead from a solution family and reconstruct its equation.

**Reverse problem (self-written):** Every member of the family $y=x^2+C/x$, on $x>0$, solves the same equation $y^{\prime}+P(x)y=Q(x)$. Recover $P$ and $Q$, and find the member satisfying $y(1)=0$.

<details markdown="1">
<summary>Hint</summary>

The equation must hold for every value of the arbitrary constant, so its coefficient must cancel.

</details>

<details markdown="1">
<summary>Retry solution and check</summary>

Substitution gives $2x-C/x^2+P(x)(x^2+C/x)=Q(x)$. The coefficient of $C$ gives $P(x)=1/x$; the remaining terms give $Q(x)=3x$. The condition gives $C=-1$, hence $y=x^2-1/x$ on $x>0$. Check the equation and the condition separately.

</details>

</section>

## Return after further study {#later-review}

After attempting the [next lesson's practice](/alevel/a2-further-mathematics/second-order-differential-equations/#practice), return here with the earlier solutions covered. Note whether you can choose a method and complete the checks without help.

<section class="lesson-check" markdown="1">

### Two equations {#mixed-review}

> **Later review (self-written).** Solve (A) $y^{\prime}=2xy$, with $y(0)=2$; and (B) $xy^{\prime}+y=x^2$, with $y(1)=0$ on $x>0$. Choose and explain a valid method for each, then check both original equations and conditions.

<details markdown="1"><summary>Hint</summary>

Compare what can be separated directly and what becomes a product derivative after normalising. More than one method may work; explain the one you use.

</details>

<details markdown="1"><summary>Review solution and recovery</summary>

For (A), separate a nonzero solution as $\mathrm dy/y=2x\,\mathrm dx$ and integrate:

$$\int\frac1y\,\mathrm dy=2\int x\,\mathrm dx,\qquad \ln\lvert y\rvert=2\frac{x^2}{2}+C=x^2+C.$$

Exponentiation gives $y=Ke^{x^2}$ with a nonzero signed constant. The initial value gives $K=2$, selecting

$$y=2e^{x^2},\qquad x\in\mathbb R.$$

Its derivative is $4xe^{x^2}=2xy$. The zero solution lost when dividing by the unknown function does not meet the initial value. An integrating factor is also valid here; separation is a convenient choice, not the only correct one.

For (B), divide by the positive independent variable. The standard-form coefficients are $P=1/x$ and $Q=x$. Calculate the factor on this interval:

$$\int\frac1x\,\mathrm dx=\ln x,\qquad \mu=e^{\ln x}=x\quad(x>0).$$

Thus

$$\begin{aligned}
(xy)^{\prime}&=x^2,\\
xy&=\int x^2\,\mathrm dx=\frac{x^{2+1}}{2+1}+C,\\
xy&=\frac{x^3}{3}+C,\\
y&=\frac{x^2}{3}+\frac Cx.
\end{aligned}$$

The condition gives $C=-1/3$:

$$y=\frac{x^2-x^{-1}}3,\qquad x>0.$$

Differentiating gives $y^{\prime}=(2x+x^{-2})/3$; substitution yields $xy^{\prime}+y=x^2$, and $y(1)=0$. If the factor was wrong, return to [normalisation](#standard-form); if the product did not expand correctly, revisit the [derivation](#derive-integrating-factor). If separation caused trouble, revisit [P2.8](/alevel/a2-mathematics/differential-equations/) and retry (A) with this check closed. Record whether you needed a hint, rather than treating assisted work as independent evidence.

</details>

</section>

## Quick Reference {#quick-reference}

| Step or method | Result | What to check |
|---|---|---|
| Standard form | $y^{\prime}+P(x)y=Q(x)$ | Divide every term by the coefficient of $y^{\prime}$ |
| Integrating factor | $\mu=e^{\int P\,\mathrm dx}$ | Use the standard-form $P$; no arbitrary constant needed in $\mu$ |
| Product derivative | $(\mu y)^{\prime}=\mu Q$ | Multiply the right side too |
| General solution | $y=\mu^{-1}(\int\mu Q\,\mathrm dx+C)$ | Divide every term by $\mu$ |
| Complementary function | $y_c=C/\mu$ | Solves $y_c^{\prime}+Py_c=0$ |
| Particular integral | Any one $y_p$ satisfying $y_p^{\prime}+Py_p=Q$ | Do not add a second arbitrary constant |
| CF + PI | $y=y_c+y_p$ | Apply the condition after adding the two parts |
| Exponential trial | For $y^{\prime}+ay=be^{kx}$, $y_p=\frac b{k+a}e^{kx}$ if $k+a\ne0$ | If $k=-a$, use $y_p=bxe^{-ax}$ |
| Conditions and interval | Substitute the given $(x,y)$ to find $C$ | Use a valid interval; check points excluded by normalisation separately in the original equation |
{: .wide-table}

## Common Pitfalls {#common-pitfalls}

- Using the coefficient of $y$ before making the coefficient of $y^{\prime}$ equal to 1.
- Multiplying only the left side by the integrating factor.
- Writing $(\mu y)^{\prime}$ without checking that $\mu^{\prime}=P\mu$.
- Forgetting $C$, or dividing only one term by $\mu$ at the end.
- Treating a PI as the final solution satisfying the condition.
- Trying an exponential PI that is already in the CF; multiply the trial by $x$ in the repeated case above.
- Dropping the absolute value in $\ln\lvert x\rvert $ without specifying a sign interval, or applying the standard-form method across a singular point without a separate check.

**After practice:** redo any question for which you needed a hint. Show the standard form, integrating factor and product derivative, or explicitly identify the CF and PI. Finish by checking both the equation and its condition.

If an exponential integral lost its coefficient, revisit [example 1](#example-1-normalise-and-solve) and [exponential integrals](/alevel/a2-mathematics/integration/#exponential-logarithmic-integrals), then retry [Q1](#practice-1). For a power-rule error, revisit [power integrals](/alevel/a2-mathematics/integration/#power-integrals), then try the [normalisation retry](#normalisation-retry). If CF and PI were confused, revisit [example 4](#example-4-polynomial-pi) before [Q4](#practice-4); for a repeated exponential, revisit [example 6](#example-6-repeated-exponential) before [Q5](#practice-5). Close the answer first and record when the same question has already been seen.

After other topics, attempt the course's [mixed tasks](/alevel/a2-further-mathematics/#mixed-review) and [later review](/alevel/a2-further-mathematics/#later-review).

**Learning path:** [Previous lesson: hyperbolic functions](/alevel/a2-further-mathematics/hyperbolic-functions/) · [Next lesson: second-order differential equations](/alevel/a2-further-mathematics/second-order-differential-equations/) · [Further Pure Mathematics](/alevel/a2-further-mathematics/).

## Sources {#sources}

Textbook: Chapter 25.1 and 25.3, printed pp. 306–307 and 318–319, in *International A Level Further Mathematics*. The integrating-factor demonstration, scaffold, retry and later review are self-written teaching tasks without official marks.

The scope follows OxfordAQA's [International A-level Further Mathematics specification, FP2.10, printed p. 19](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf): first-order linear equations, integrating factors, CF plus PI, and general and particular solutions. Example 3 adapts the method from OxfordAQA Specimen 2018 FM03, Question 5, checked against its official mark scheme, Question 5. The worked method makes the standard form, integrating factor, product derivative, integration and condition explicit. The adapted example changes the equation and condition; no official mark allocation is implied.

[OxfordAQA Specimen 2018, Q5, QP PDF p. 10](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-specimen-paper-2019-v3.pdf#page=10); [MS Q5, PDF p. 8](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-mark-scheme-2016-v1.pdf#page=8). Q5 and its mark-scheme method were re-read on 2026-10-23. Only the identified method is adapted; the adapted question and additional self-written tasks are not official questions.
