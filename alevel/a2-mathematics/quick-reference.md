---
title: Pure Mathematics — Quick Reference
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
permalink: /alevel/a2-mathematics/quick-reference/
toc_headings: h2
study_page: true
---

[Back to the topic index](/alevel/a2-mathematics/)

Use these notes to check a formula or method. For worked examples and practice, choose a lesson from the [Pure Mathematics topic index](/alevel/a2-mathematics/#study-a-topic).

The P2 labels follow the OxfordAQA syllabus topic groups, with some shortened titles. They are not the chapter numbers in the textbook. The [topic index](/alevel/a2-mathematics/#quick-reference) shows the matching textbook chapters and syllabus supplement.

## P2.1: Algebra and Functions

### Algebraic Fractions

[Learn to simplify and operate on algebraic fractions](/alevel/a2-mathematics/algebraic-fractions-and-division/) with worked examples and practice.

- Use the same rules as for numerical fractions. For addition or subtraction, first use a common denominator. Exclude values that make a denominator zero.
- **Addition example**: $\frac{x}{x+4} + \frac{4}{x-1} = \frac{x(x-1) + 4(x+4)}{(x+4)(x-1)} = \frac{x^2 + 3x + 16}{(x+4)(x-1)}$
- **Multiplication example**: $\frac{x}{x+4} \times \frac{4}{x-1} = \frac{4x}{(x-1)(x+4)}$
- **Division example**: $\frac{x}{x+4} \div \frac{4}{x-1} = \frac{x}{x+4} \times \frac{x-1}{4} = \frac{x(x-1)}{4(x+4)}$

All three examples require $x\ne-4,1$. The divisor in the third example is never zero on this domain.

### Algebraic Division

[Study quotients, remainders and the remainder theorem](/alevel/a2-mathematics/algebraic-fractions-and-division/#algebraic-division).

- An algebraic fraction is **improper** when the degree of the numerator is at least the degree of the denominator. Use **algebraic division** to write it as a polynomial plus a proper fraction.
- For $\frac{F(x)}{G(x)}$ where $F(x)$ and $G(x)$ are polynomials, $G(x)\ne0$:

  $$\frac{F(x)}{G(x)}=Q(x)+\frac{R(x)}{G(x)}.$$

  Here $Q(x)$ is the quotient and $R(x)$ is the remainder. A non-zero remainder has lower degree than $G(x)$; a zero remainder means the division is exact.
- **Example**:

  $$\frac{x^3+x^2-7}{x-3}=x^2+4x+12+\frac{29}{x-3}.$$

  The restriction is $x\ne3$.

- **Remainder theorem:** for divisor $ax+b$ with $a\ne0$, the remainder is $F(-\frac ba)$.
- **Factor theorem:** $ax+b$ is a factor of $F(x)$ if and only if $F(-\frac ba)=0$.

### Partial Fractions

[Study the method, repeated factors and worked examples](/alevel/a2-mathematics/partial-fractions/#method).

### Functions

[Learn domains, ranges, composite functions and inverse functions](/alevel/a2-mathematics/functions/) with worked examples and practice.

- **Definition**: A function maps each input to exactly one output
- **Domain**: The set of input values allowed for the function  
- **Range**: The set of output values for the stated domain
- For a finite domain, evaluate only the allowed inputs. For a piecewise function, select the formula for the part containing the input.
- **Notation**: 
  - $f(x)=\sqrt{x},\ \lbrace x\in\mathbb{R},x\geq0\rbrace$
  - $f:x\mapsto\sqrt{x},\ \lbrace x\in\mathbb{R},x\geq0\rbrace$

### Function Types
- **One-to-one**: Different inputs give different outputs. A horizontal line meets the graph at most once.
- **Many-to-one**: Two or more different inputs can give the same output.
- **One-to-many**: One input gives more than one output, so this is not a function.

### Composite Functions {#function-composition}
- $fg(x) = f(g(x))$ (apply $g$ first, then $f$)
- $gf(x) = g(f(x))$ (apply $f$ first, then $g$)
- For $fg$, $x$ must be in the domain of $g$, and $g(x)$ must be in the domain of $f$.
- **Note**: $gf(x) \neq fg(x)$ in general
- **Example**: 
  - $f(x) = 3x - 2$, $g(x) = x^2 + 4x - 2$

  $$\begin{aligned}fg(x)&=3(x^2+4x-2)-2\\&=3x^2+12x-8,\\gf(x)&=(3x-2)^2+4(3x-2)-2\\&=9x^2-8.\end{aligned}$$

### Inverse Functions
- Denoted as $f^{-1}$
- A function has an inverse only if it is **one-to-one** on its stated domain. You may need to restrict the domain.
- Graphically: Reflection in the line $y = x$
- **Properties**:
  - $ff^{-1}(x)=x$ on the range of $f$; $f^{-1}f(x)=x$ on the domain of $f$.
  - Domain of $f(x)$ = Range of $f^{-1}(x)$
  - Domain of $f^{-1}(x)$ = Range of $f(x)$
- **Finding inverse**:
  1. Let $y = f(x)$
  2. Interchange $x$ and $y$ variables
  3. Rearrange to make $y$ the subject
  4. Choose any required branch, then state the inverse's domain and range.
- **Example**: 
  - $f(x)=x^3-8,\ \lbrace x\in\mathbb{R},x\geq2\rbrace$
  - $f^{-1}(x) = \sqrt[3]{x + 8}$, with domain $x\geq0$ and range $f^{-1}(x)\geq2$

### Modulus Function

[Compare modulus graphs and solve equations and inequalities](/alevel/a2-mathematics/modulus-and-transformations/) with worked examples and practice.

The modulus is defined by

$$\lvert x\rvert=\begin{cases}x & \text{if }x\geq0\\-x & \text{if }x<0.\end{cases}$$

- **Types of modulus functions**:
  - $y = \lvert f(x) \rvert$: Keep the parts with $f(x)\geq0$. Reflect the parts below the $x$-axis in the $x$-axis.
  - $y = f(\lvert x \rvert)$: Keep the allowed part for $x\geq0$, then reflect it in the $y$-axis. An input is allowed only if $\lvert x\rvert$ belongs to the original domain.

### Transformations

[Work through combinations of transformations](/alevel/a2-mathematics/modulus-and-transformations/#combinations-of-transformations).

Use these transformations to sketch a new graph. For the two stretches below, $a>0$. A negative multiplier also introduces a reflection.
- $y = af(x)$ → One-way stretch parallel to the $y$-axis, with scale factor $a$
- $y = f(x) + a$ → Vertical translation by $a$ (up/down)
- $y = f(x + a)$ → Horizontal translation by $-a$ (left/right)
- $y = f(ax)$ → One-way stretch parallel to the $x$-axis, with scale factor $\frac{1}{a}$
- $y = -f(x)$ → Reflection in x-axis
- $y = f(-x)$ → Reflection in y-axis

### Solving Modulus Equations
1. Sketch the graphs to see how many solutions there are
2. Identify intersection points
3. Solve each case using the definition of modulus. Check that each answer satisfies its case condition.
- **Example**: Solve $\lvert 2x + a \rvert - b = \frac{1}{3}x$
  - Case 1, $2x+a\geq0$: $2x + a - b = \frac{1}{3}x$
  - Case 2, $2x+a<0$: $-(2x + a) - b = \frac{1}{3}x$

For an inequality with modulus on both sides, find the equality boundaries and test the intervals or compare the graphs. Square both sides only when both are non-negative. See [the worked example](/alevel/a2-mathematics/modulus-and-transformations/#example-7--modulus-on-both-sides).

### Simplification of Rational Functions {#rational-functions}

[Practise factorisation and domain restrictions](/alevel/a2-mathematics/algebraic-fractions-and-division/#simplification).

- Factorise the numerator and denominator, then cancel common factors. Keep the restrictions from the original denominator.
- **Simplification example**:

  $$\begin{aligned}\frac{x^2-4x}{x^2-5x+4}&=\frac{x(x-4)}{(x-4)(x-1)}\\&=\frac{x}{x-1},\qquad x\ne1,4.\end{aligned}$$

### More Algebraic Division Examples {#algebraic-division-1}
**Examples**:
- $\frac{3x + 4}{x - 1} = 3 + \frac{7}{x - 1}$, with $x\ne1$
- $\frac{2x^3 - 3x^2 - 2x + 2}{x - 2} = 2x^2 + x + \frac{2}{x - 2}$, with $x\ne2$

### Partial Fractions (Extended)

Use the same process for more complex combinations of linear and repeated factors. For example,

$$\frac{3+2x^2}{(2x+1)(x-3)^2}=\frac{A}{2x+1}+\frac{B}{x-3}+\frac{C}{(x-3)^2}.$$

Compare degrees first, then clear the denominator. If constants remain unknown after substituting the roots, compare coefficients or substitute another convenient value.

### Proof by Contradiction

[Study mathematical language, direct proof, contradiction and counter-examples](/alevel/a2-mathematics/mathematical-proof/). These are MA03 syllabus requirements.

- **Direct proof:** start with the assumptions and justify steps that reach the conclusion.
- **Proof by contradiction:** assume the opposite of the desired statement. Derive a contradiction, state it clearly and conclude that the original statement is true.
- **Disproof by counter-example:** give one allowed case in which the assumption holds but the conclusion fails.
- $P\Rightarrow Q$ means $P$ is sufficient for $Q$, and $Q$ is necessary for $P$. Use $P\Leftrightarrow Q$ only when both directions hold.

---

## P2.2: Binomial Series {#p22-sequences-and-series}

For worked examples and independent practice, open the [Binomial Series lesson](/alevel/a2-mathematics/binomial-series/).

### Binomial Series {#binomial-series-}
- $(1+x)^n$ can be expanded for any real $n$.
- When $n$ is negative or non-integer, use $\lvert x\rvert<1$ for the infinite series in this course. We do not include endpoints in the stated range; behaviour there depends on $n$. For positive integer $n$, the expansion is finite and valid for all real $x$. For $n=0$, the result is $1$ where the original expression is defined.
- **Expansion:**

  $$(1+x)^n=1+nx+\frac{n(n-1)}{2!}x^2+\frac{n(n-1)(n-2)}{3!}x^3+\cdots.$$

- **General term**, for $r\geq1$:

  $$u_{r+1}=\frac{n(n-1)\cdots(n-r+1)}{r!}x^r.$$
- **Approximations**: Use the first few terms to estimate a root or power. For example, use $n=\frac12$ and $x=0.04$ to estimate $\sqrt{1.04}$.
- **Example**: $(2 + 3x)^{-2} = \frac{1}{4}\left(1 + \frac{3x}{2}\right)^{-2}$, valid for $\lvert x \rvert < \frac{2}{3}$

### Series Expansion
- Express the rational function in partial fractions. Use the binomial series for each term, then combine like powers of $x$. Use values of $x$ for which every series is valid.
- **Example form**: $\frac{3 + 2x^2}{(2x + 1)(x - 3)^2}$

---

## P2.3: Parametric Equations {#p23-coordinate-geometry}

For worked examples and independent practice, open the [Parametric Equations lesson](/alevel/a2-mathematics/parametric-equations/).

### Parametric Equations
- A curve can be given by $x=f(t)$ and $y=g(t)$, where $t$ is the **parameter**. See textbook Section 5.6.
- Eliminate $t$ to find a Cartesian equation. Keep any restrictions from the parameter range.
- **Examples**:
  - $x = t^2, y = 2t \Rightarrow y^2 = 4x$, with $x\geq0$
  - $x=a\cos\theta$, $y=b\sin\theta$, with $a,b\ne0$, give the ellipse $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$.
  - $x = \frac{1}{t}, y = 3t \Rightarrow y = \frac{3}{x}$, with $t\ne0$ and $x\ne0$
  - $x=t+\frac1t$, $y=t-\frac1t$, with $t\ne0$, give $x^2-y^2=4$.

---

## P2.4: Trigonometric Functions and Formulae {#p24-trigonometry}

For worked examples and independent practice, open the [Trigonometric Functions and Formulae lesson](/alevel/a2-mathematics/trigonometric-functions-and-formulae/).

### Inverse Trigonometric Functions {#inverse-trigonometric-functions-}
- $\sin^{-1}x$: Domain $[-1,1]$, Range $[-\frac{\pi}{2}, \frac{\pi}{2}]$
- $\cos^{-1}x$: Domain $[-1,1]$, Range $[0, \pi]$
- $\tan^{-1}x$: Domain $\mathbb{R}$, Range $(-\frac{\pi}{2}, \frac{\pi}{2})$

### Reciprocal Trigonometric Functions {#reciprocal-functions}
- $\sec x = \frac{1}{\cos x}$
- $\cosec x = \frac{1}{\sin x}$
- $\cot x = \frac{\cos x}{\sin x}$

Cosecant and cotangent require $\sin x\ne0$; secant requires $\cos x\ne0$. The identities below apply where all their terms are defined. The tangent sum, difference and double angle forms also need a non-zero denominator.

### Trigonometric Identities
- $1 + \tan^2 x = \sec^2 x$
- $1 + \cot^2 x = \cosec^2 x$
- $\sin 2A = 2\sin A\cos A$
- The cosine forms are equivalent:

  $$\begin{aligned}\cos2A&=\cos^2 A-\sin^2 A\\&=2\cos^2 A-1\\&=1-2\sin^2 A.\end{aligned}$$

- $\tan 2A = \frac{2\tan A}{1 - \tan^2 A}$

### Compound Angle Formulae
- $\sin(A \pm B) = \sin A\cos B \pm \cos A\sin B$
- $\cos(A \pm B) = \cos A\cos B \mp \sin A\sin B$
- $\tan(A \pm B) = \frac{\tan A \pm \tan B}{1 \mp \tan A\tan B}$

### Expressions of the Form $a\cos\theta+b\sin\theta$ {#r-formulae}
- $a\cos\theta + b\sin\theta = r\cos(\theta \pm \alpha)$ or $r\sin(\theta \pm \alpha)$
- For $a\cos\theta+b\sin\theta=r\cos(\theta-\alpha)$, use $r=\sqrt{a^2+b^2}$, $r\cos\alpha=a$ and $r\sin\alpha=b$. These equations give the correct quadrant for $\alpha$.

### Trigonometric Equations

List every solution in the stated interval. If you change the angle variable, change the interval too. Factor instead of dividing by a function that may be zero. Use the [lesson practice](/alevel/a2-mathematics/trigonometric-functions-and-formulae/#practice) for questions with hints and checked solutions.

---

## P2.5: Exponential and Logarithmic Functions {#p25-exponentials-and-logarithms}

For worked examples and independent practice, open the [Exponential and Logarithmic Functions lesson](/alevel/a2-mathematics/exponential-and-logarithmic-functions/).

### Exponential Function {#exponential-function-}
- $y = e^x$
- Graph: Always positive ($y > 0$), increasing, y-intercept at (0,1)
- The gradient is equal to the function value: $\frac{d}{dx}(e^x) = e^x$

### Natural Logarithm
- $y = \ln x$ - inverse of $e^x$
- Graph: Domain $x > 0$, x-intercept at (1,0)

### Laws of Logarithms {#logarithm-laws-}

For these laws, $a>0$ and $b>0$.
- **Product**: $\ln(ab) = \ln a + \ln b$
- **Quotient**: $\ln\left(\frac{a}{b}\right) = \ln a - \ln b$
- **Power**: $\ln(a^k) = k \ln a$
- **Useful values**: $\ln e = 1$, $\ln 1 = 0$
- **Solving Equations**: Use $a = e^{\ln a}$ or $\ln(e^x) = x$ to convert between exponential and logarithmic forms.

### Applications
- For $N_0>0$ and $k>0$, use $N=N_0e^{kt}$ for growth and $N=N_0e^{-kt}$ for decay. $N_0$ is the initial value.
- For this decay form, the **half-life** is $T=\frac{\ln2}{k}$.
- For a percentage change per equal interval, use $N=N_0q^n$. Growth by $p\%$ has $q=1+\frac p{100}$; decay by $p\%$ has $q=1-\frac p{100}$. For whole-interval thresholds, check the first integer satisfying the original inequality.

---

## P2.6: Differentiation

For worked examples and independent practice, open the [Differentiation lesson](/alevel/a2-mathematics/differentiation/).

### Basic Derivatives

Use radians when differentiating trigonometric functions. Each derivative applies where the original function is defined and differentiable; in particular, $\ln x$ requires $x>0$.

| Function | Derivative |
|----------|------------|
| $e^{kx}$ | $ke^{kx}$ |
| $\ln x$ | $\frac{1}{x}$ |
| $\sin kx$ | $k\cos kx$ |
| $\cos kx$ | $-k\sin kx$ |
| $\tan kx$ | $k\sec^2 kx$ |
| $\sec x$ | $\sec x \tan x$ |
| $\cosec x$ | $-\cosec x \cot x$ |
| $\cot x$ | $-\cosec^2 x$ |

### Inverse Trigonometric Derivatives

$$\frac{d}{dx}\sin^{-1}x=\frac1{\sqrt{1-x^2}},\qquad -1<x<1,$$

$$\frac{d}{dx}\cos^{-1}x=-\frac1{\sqrt{1-x^2}},\qquad -1<x<1,$$

$$\frac{d}{dx}\tan^{-1}x=\frac1{1+x^2},\qquad x\in\mathbb R.$$

For a composite function, multiply by the inner derivative. The sine and cosine inverses are defined at $x=\pm1$, but their derivatives are not finite there.

### Product Rule
- $\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)$

**Example**: Differentiate $x^2 \ln x$, where $x>0$.
- $f(x) = x^2$, $f'(x) = 2x$
- $g(x) = \ln x$, $g'(x) = \frac{1}{x}$
- Derivative: $2x\ln x + x^2 \cdot \frac{1}{x} = 2x\ln x + x$

### Quotient Rule
- $\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$

**Example**: Differentiate $\frac{2x + 1}{3x - 2}$, where $x\ne\frac23$.
- $f(x) = 2x + 1$, $f'(x) = 2$
- $g(x) = 3x - 2$, $g'(x) = 3$
- Derivative: 

$$\frac{2(3x - 2) - (2x + 1)3}{(3x - 2)^2} = \frac{6x - 4 - 6x - 3}{(3x - 2)^2} = \frac{-7}{(3x - 2)^2}$$

### Chain Rule
- $\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$
- For composite functions: $\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$

#### Chain Rule Examples

**Example 1**: Differentiate $(2x^3 - 5x + 1)^4$
- Let $u = 2x^3 - 5x + 1$, then $y = u^4$
- $\frac{dy}{dx} = 4(2x^3 - 5x + 1)^3 \cdot (6x^2 - 5)$

**Example 2**: Differentiate $\ln(4x^3 + 7)$, where $4x^3+7>0$.
- $\frac{dy}{dx} = \frac{1}{4x^3 + 7} \cdot 12x^2 = \frac{12x^2}{4x^3 + 7}$

### Alternative Chain Rule Form
- If $\frac{dx}{dy}\ne0$, $\frac{dy}{dx} = \frac{1}{\frac{dx}{dy}}$

**Example**: Curve $x = y^2 - 4y + 1$, find $\frac{dy}{dx}$ when $y = 1$
- $\frac{dx}{dy} = 2y - 4$
- When $y = 1$: $\frac{dx}{dy} = -2$
- Therefore: $\frac{dy}{dx} = \frac{1}{-2} = -\frac{1}{2}$

### Implicit Differentiation
- Differentiate both sides with respect to $x$
- Treat $y$ as a function of $x$
- Use chain rule for $y$ terms: $\frac{d}{dx}[f(y)] = f'(y)\frac{dy}{dx}$

### Parametric Differentiation

For gradients, tangents, normals and stationary points, open the [Parametric Equations lesson](/alevel/a2-mathematics/parametric-equations/#parametric-differentiation).
- Given $x = f(t), y = g(t)$
- $\frac{dy}{dx} = \frac{\frac{dy}{dt}}{\frac{dx}{dt}}$, where $\frac{dx}{dt}\ne0$
- The MA03 specification does not require second derivatives of implicit or parametric curves. Use a gradient sign change to classify their stationary points.

### Applications
- Finding tangents and normals for curves defined implicitly or parametrically
- Equations of tangents at general points
- A stationary point has $dy/dx=0$. Find both coordinates and classify it using the derivative's sign change or the second derivative. A zero second derivative is inconclusive.
- A horizontal tangent has a vertical normal; a vertical tangent has a horizontal normal. For finite non-zero tangent gradient $m$, the normal gradient is $-\frac1m$.

### Differentiation Rules Summary

| Rule | Formula | When to Use |
|------|---------|-------------|
| Product | $(uv)' = u'v + uv'$ | Two functions multiplied |
| Quotient | $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$ | One function divided by another |
| Chain | $\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$ | Composite functions |
| Implicit | Differentiate both sides, include $\frac{dy}{dx}$ | Equations not in $y = f(x)$ form |

---

## P2.7: Integration

[Choose a method and practise](/alevel/a2-mathematics/integration/): worked examples on simplifying first, standard integrals, integration by substitution, integration by parts and partial fractions.

### Standard Integrals {#basic-integration}

In this table, $k\ne0$. Each formula applies where the function is defined. The constant of integration is $C$.

| Function | Integral |
|----------|----------|
| $e^{kx}$ | $\frac{1}{k}e^{kx} +C$ |
| $\frac{1}{x}$ | $\ln\lvert x\rvert +C \quad (x \neq 0)$ |
| $\sin kx$ | $-\frac{1}{k}\cos kx +C$ |
| $\cos kx$ | $\frac{1}{k}\sin kx +C$ |
| $\sec^2 kx$ | $\frac{1}{k}\tan kx +C$ |
| $\tan kx$ | $\frac{1}{k}\ln\lvert\sec kx\rvert +C$ |

### Integration by Inspection

The textbook also calls this integration by recognition or “by sight”.
Use the chain rule in reverse. Check your result by differentiation.

**For $a\ne0$**: $\int f'(ax+b) dx = \frac{1}{a} f(ax+b) +C$

**Examples:**
- $\int e^{-3x} dx = -\frac{1}{3}e^{-3x} +C$
- $\int \sin 4x dx = -\frac{1}{4}\cos 4x +C$
- $\int \frac{1}{\sqrt{x}} dx = 2\sqrt{x} +C$

### Integration by Substitution
Choose a new variable $u$ to make the integral simpler. Write every part of the integral in terms of $u$, including $dx$. For a definite integral, change the limits too.

**General form:** $\int f(g(x))g'(x) dx = \int f(u) du$ where $u = g(x)$

**Example 1:** $\int x(2 + x)^6 dx$
- Result: $\frac{1}{8}(2 + x)^8 - \frac{2}{7}(2 + x)^7 +C$

**Example 2:** $\int \frac{x}{\sqrt{x - 3}} dx$
- Result: $\frac{2}{3}(x - 3)^{\frac{3}{2}} + 6(x - 3)^{\frac{1}{2}} +C$

### Integration by Parts {#integration-by-parts-}
From the product rule:

$$\int v\frac{du}{dx}\,dx=uv-\int u\frac{dv}{dx}\,dx.$$

As in the textbook, choose $v$ as the factor to differentiate and $\frac{du}{dx}$ as the factor to integrate. Check whether the new integral is easier.

**Example 1:** $\int xe^{2x} dx$
$$\int xe^{2x} dx = \frac{1}{2}xe^{2x} - \frac{1}{4}e^{2x} +C$$

**Example 2:** $\int \ln x dx$, where $x>0$.
$$\int \ln x dx = x\ln x - x +C$$

### Special Forms

Use this result where $f(x)\ne0$:

$$\int \frac{f'(x)}{f(x)} dx = \ln \lvert f(x) \rvert +C$$

**Examples:**
- $\int \frac{2x}{x^2 + 1} dx = \ln\lvert x^2 + 1 \rvert +C$
- $\int \tan x dx = -\ln\lvert \cos x \rvert +C$

### Integration Using Partial Fractions

[Learn the method and practise integrating rational functions](/alevel/a2-mathematics/partial-fractions/#integration).

### Integrating Trigonometric Functions

[Study the identities and worked examples](/alevel/a2-mathematics/integration-applications/#trigonometric-integrals).

Use the identities from textbook Section 6.5 to change the integrand into a simpler form.

- For an odd power of $\sin x$, keep one factor $\sin x$ and use $\sin^2x=1-\cos^2x$ for the remaining even power. Then try $u=\cos x$.
- For an odd power of $\cos x$, keep one factor $\cos x$ and use $\cos^2x=1-\sin^2x$. Then try $u=\sin x$.
- For even powers, use $\sin^2x=\frac{1-\cos2x}{2}$ and $\cos^2x=\frac{1+\cos2x}{2}$.
- For powers of $\tan x$, use $\tan^2x=\sec^2x-1$ to reduce the power.

For example,

$$\int\sin^2x\,dx=\frac{x}{2}-\frac{\sin2x}{4}+C.$$

### Volume of Revolution {#volumes-of-revolution-}

[Learn how to choose the radius, variable and limits](/alevel/a2-mathematics/integration-applications/#volume-of-revolution).

These formulas are for the region between the curve and the axis of rotation.

#### About the x-axis:
$$V = \int_a^b \pi y^2 dx$$

#### About the y-axis:
$$V = \int_c^d \pi x^2 dy$$

### Definite Integration with Applications

[Compare signed integrals and total area with worked examples](/alevel/a2-mathematics/integration-applications/#area).

#### Area between curve and x-axis:
$$A = \int_a^b \lvert y\rvert dx$$

Use $A=\int_a^b y\,dx$ when $y\geq0$ throughout the interval. If the curve crosses the $x$-axis, split the interval at the crossings and add the positive areas. A definite integral gives signed area.

#### Area between two curves:
$$A=\int_a^b[f(x)-g(x)]\,dx.$$

Here $f(x)\geq g(x)$ throughout $[a,b]$.

---

## P2.8 Differential Equations

[Study the full lesson with worked examples, models and practice](/alevel/a2-mathematics/differential-equations/).

### First Order Differential Equations with Separable Variables

**Separable Variables:** Equations of the form $\frac{dy}{dx} = f(x)g(y)$

**Forming an equation:** For a positive quantity, use $\frac{dy}{dt}=ky$ for proportional growth and $\frac{dy}{dt}=-ky$ for proportional decay, taking $k>0$ in both cases. Use the given starting value to find the arbitrary constant in the solution, and further information to find $k$ if needed.

**Solution method:**
1. Where $g(y)\ne0$, separate the variables: $\frac{1}{g(y)} dy = f(x) dx$
2. Integrate both sides: $\int \frac{1}{g(y)} dy = \int f(x) dx$
3. Use the given initial condition or boundary condition to find $C$. Also check constant solutions for which $g(y)=0$; dividing by $g(y)$ may lose these solutions.

**Example 1:** $\frac{dy}{dx} = ky$
- Solution: $y = Ae^{kx}$ where $A$ is constant. For proportional decay written as $\frac{dy}{dt}=-ky$ with $k>0$, use $y=Ae^{-kt}$. The half-life is $\frac{\ln2}{k}$.

**Example 2:** $\frac{dy}{dx} = x(1 + y^2)$
- Solution: $y = \tan\left(\frac{1}{2}x^2 +C\right)$

---

## P2.9 Numerical Methods

[Study the full lesson with root intervals, iteration and integration rules](/alevel/a2-mathematics/numerical-methods/).

### Location of Roots
If $f(x)$ is continuous on $[a, b]$ and $f(a)$, $f(b)$ have opposite signs, then there exists at least one root in $(a, b)$.

### Iteration
Rearrange $f(x)=0$ into $x=g(x)$. Choose a starting value $x_0$, then use $x_{n+1}=g(x_n)$. Some rearrangements do not converge. A useful local check is $\lvert g'(x)\rvert<1$ near the root, as in textbook Section 8.2. Use a sign-change interval in the original equation to verify the rounding. [Staircase and cobweb diagrams](/alevel/a2-mathematics/numerical-methods/#staircase-and-cobweb-diagrams) illustrate convergence and divergence.

**Example:** Solve $x^3 - x - 1 = 0$
- Rearrange to $x = \sqrt[3]{x + 1}$
- Use $x_{n+1} = \sqrt[3]{x_n + 1}$

### Numerical Integration

Divide $[a,b]$ into $n$ equal strips of width $h=\frac{b-a}{n}$. Write $x_i=a+ih$ and $y_i=f(x_i)$.

**Mid-ordinate rule:** Use the height at the centre of each strip.

$$\int_a^b f(x)\,dx\approx h\left(y_{\frac12}+y_{\frac32}+\cdots+y_{n-\frac12}\right).$$

**Simpson's rule:** Use pairs of strips. The number of strips $n$ must be even, so the number of ordinates $n+1$ is odd.

$$\begin{aligned}
\int_a^b f(x)\,dx\approx\frac{h}{3}\big[&(y_0+y_n)\\
&+4(y_1+y_3+\cdots+y_{n-1})\\
&+2(y_2+y_4+\cdots+y_{n-2})\big].
\end{aligned}$$

The first and last ordinates have weight $1$. The inside ordinates alternate between weights $4$ and $2$.

---

## P2.10 Vectors

[Study the full lesson with lines, scalar products and perpendicular distances](/alevel/a2-mathematics/vectors/).

### Basic Operations

A **vector** has magnitude and direction. A **scalar** has magnitude only. For $\vec a=(x,y,z)$:
- **Magnitude:** $\lvert \vec{a} \rvert = \sqrt{x^2 + y^2 + z^2}$
- **Addition:** $\vec{a} + \vec{b} = (a_1 + b_1, a_2 + b_2, a_3 + b_3)$
- **Scalar multiplication:** $k\vec{a} = (ka_1, ka_2, ka_3)$

### Position Vectors and Lines

If $A$ and $B$ have position vectors $\vec a$ and $\vec b$, then $\overrightarrow{AB}=\vec b-\vec a$. The midpoint of $AB$ has position vector $\frac12(\vec a+\vec b)$.
- **Position vector:** $\vec{r} = x\vec{i} + y\vec{j} + z\vec{k}$
- **Vector equation of line:** $\vec{r} = \vec{a} + \lambda\vec{b}$
  where $\vec{a}$ is the position vector of a fixed point on the line and $\vec{b}\ne\vec{0}$ is a direction vector

**Example:** Line through point $(1,0,2)$ with direction vector $\begin{pmatrix} -1 \\\\ 2 \\\\ 3 \end{pmatrix}$:

$$\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix} + \lambda \begin{pmatrix} -1 \\ 2 \\ 3 \end{pmatrix}$$

### Scalar Product

The angle formula requires two non-zero vectors.
$$\vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}|\cos\theta = a_1b_1 + a_2b_2 + a_3b_3$$

**Angle between vectors:**
$$\cos\theta = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}||\vec{b}|}$$

For the acute angle between two lines, use the modulus of the scalar product in the numerator.

For non-zero vectors, **perpendicular vectors** satisfy $\vec{a} \cdot \vec{b} = 0$

### Pairs of Lines

For lines $\vec r=\vec a+\lambda\vec b$ and $\vec r=\vec c+\mu\vec d$:

- If the direction vectors are scalar multiples, the lines are parallel or are the same line.
- To find an intersection, equate the three components. A single pair of values $\lambda,\mu$ must satisfy all three equations.
- Lines in three dimensions that are neither parallel nor intersecting are **skew lines**.

### Foot of the Perpendicular from a Point to a Line

Let $P$ have position vector $\vec p$ and let $H$ be on $\vec r=\vec a+\lambda\vec b$.

1. Write $\vec h=\vec a+\lambda\vec b$.
2. Use $(\vec h-\vec p)\cdot\vec b=0$ to find $\lambda$.
3. Find $H$. The perpendicular distance from $P$ to the line is $\lvert\vec h-\vec p\rvert$.
