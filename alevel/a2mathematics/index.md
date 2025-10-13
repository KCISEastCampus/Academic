---
title: A2 Mathematics
layout: subjects
mathjax: true
grade: a2
subject: a2mathematics
---

# P2 (Pure Mathematics)
## P2.1: Algebra and Functions

### Functions
- **Definition**: A function maps each input to exactly one output
- **Domain**: Set of all possible input values  
- **Range**: Set of all possible output values
- **Notation**: $$f(x) = x^2 - 4$$

### Function Composition
- $$fg(x) = f(g(x))$$
- The output of g becomes the input of f

### Inverse Functions
- Denoted as $$f^{-1}$$
- Graphically: Reflection in the line $$y = x$$
- Only exists if the function is one-to-one

### Modulus Function
- $$\lvert x \rvert = \begin{cases} x & \text{if } x \geq 0 \\ -x & \text{if } x < 0 \end{cases}$$
- Solves inequalities like $$\lvert x + 2 \rvert < 3\lvert x \rvert$$
- Graph forms a V-shape

### Transformations
Combinations of:
- $$y = af(x)$$ → Vertical stretch by factor a
- $$y = f(x) + a$$ → Vertical translation by a
- $$y = f(x + a)$$ → Horizontal translation by -a
- $$y = f(ax)$$ → Horizontal stretch by factor 1/a

**Examples from specification:**
- $$y = e^x$$ leading to $$y = e^{2x} - 1$$
- $$y = \ln x$$ leading to $$y = 2\ln(x - 1)$$
- $$y = \sec x$$ leading to $$y = 3\sec 2x$$

### Rational Functions
- Use Factor Theorem and Remainder Theorem for divisors of the form $$(ax + b)$$
- **Simplification example**: $$\frac{x^2 - 4x}{x^2 - 5x + 4} = \frac{x(x - 4)}{(x - 4)(x - 1)} = \frac{x}{x - 1}$$

### Algebraic Division
**Examples:**
- $$\frac{3x + 4}{x - 1} = 3 + \frac{7}{x - 1}$$
- $$\frac{2x^3 - 3x^2 - 2x + 2}{x - 2} = 2x^2 + x + \frac{2}{x - 2}$$

### Partial Fractions
- Denominators not more complicated than repeated linear terms
- **Maximum complexity**: $$\frac{3 + 2x^2}{(2x + 1)(x - 3)^2}$$

---

## P2.2: Sequences and Series

### Binomial Series
- $$(1 + x)^n$$ for any rational $$n$$
- Valid for $$\lvert x \rvert < 1$$
- **Example**: $$(2 + 3x)^{-2} = \frac{1}{4}\left(1 + \frac{3x}{2}\right)^{-2}$$, valid for $$\lvert x \rvert < \frac{2}{3}$$

### Series Expansion
- Using partial fractions for rational functions
- **Maximum complexity**: $$\frac{3 + 2x^2}{(2x + 1)(x - 3)^2}$$

---

## P2.3: Coordinate Geometry

### Parametric Equations
- Curves defined by $$x = f(t), y = g(t)$$
- Conversion between Cartesian and parametric forms
- **Examples**:
  - $$x = t^2, y = 2t$$
  - $$x = a\cos\theta, y = b\sin\theta$$
  - $$x = \frac{1}{t}, y = 3t$$
  - $$x = t + \frac{1}{t}, y = t - \frac{1}{t} \Rightarrow (x + y)(x - y) = 4$$

---

## P2.4: Trigonometry

### Inverse Trigonometric Functions
- $$\sin^{-1}x$$: Domain $$[-1,1]$$, Range $$[-\frac{\pi}{2}, \frac{\pi}{2}]$$
- $$\cos^{-1}x$$: Domain $$[-1,1]$$, Range $$[0, \pi]$$
- $$\tan^{-1}x$$: Domain $$\mathbb{R}$$, Range $$(-\frac{\pi}{2}, \frac{\pi}{2})$$

### Reciprocal Functions
- $$\sec x = \frac{1}{\cos x}$$
- $$\cosec x = \frac{1}{\sin x}$$
- $$\cot x = \frac{1}{\tan x}$$

### Trigonometric Identities
- $$1 + \tan^2 x = \sec^2 x$$
- $$1 + \cot^2 x = \cosec^2 x$$
- $$\sin 2A = 2\sin A\cos A$$
- $$\cos 2A = \cos^2 A - \sin^2 A = 2\cos^2 A - 1 = 1 - 2\sin^2 A$$
- $$\tan 2A = \frac{2\tan A}{1 - \tan^2 A}$$

### Compound Angle Formulae
- $$\sin(A \pm B) = \sin A\cos B \pm \cos A\sin B$$
- $$\cos(A \pm B) = \cos A\cos B \mp \sin A\sin B$$
- $$\tan(A \pm B) = \frac{\tan A \pm \tan B}{1 \mp \tan A\tan B}$$

### R-formulae
- $$a\cos\theta + b\sin\theta = R\cos(\theta \pm \alpha)$$ or $$R\sin(\theta \pm \alpha)$$
- Where $$R = \sqrt{a^2 + b^2}$$ and $$\tan\alpha = \frac{a}{b}$$ or $$\tan\alpha = \frac{b}{a}$$

### Trigonometric Equations
**Examples from specification:**
- Solve $$3\sin 2x = \cos x, 0 \leq x \leq 4\pi$$
- Solve $$2\sin x + 3\cos x = 1.5, -180^\circ < x \leq 180^\circ$$

---

## P2.5: Exponentials and Logarithms

### Exponential Function
- $$y = e^x$$
- Graph: Always positive, increasing, y-intercept at (0,1)

### Natural Logarithm
- $$y = \ln x$$ - inverse of $$e^x$$
- Graph: Domain $$x > 0$$, x-intercept at (1,0)

### Applications
- Exponential growth and decay models

---

## P2.6: Differentiation

### Basic Derivatives

| Function | Derivative |
|----------|------------|
| $$e^{kx}$$ | $$ke^{kx}$$ |
| $$\ln x$$ | $$\frac{1}{x}$$ |
| $$\sin kx$$ | $$k\cos kx$$ |
| $$\cos kx$$ | $$-k\sin kx$$ |
| $$\tan kx$$ | $$k\sec^2 kx$$ |

### Product Rule
- $$\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)$$

**Example**: Differentiate $$x^2 \ln x$$
- $$f(x) = x^2$$, $$f'(x) = 2x$$
- $$g(x) = \ln x$$, $$g'(x) = \frac{1}{x}$$
- Derivative: $$2x\ln x + x^2 \cdot \frac{1}{x} = 2x\ln x + x$$

### Quotient Rule
- $$\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$$

**Example**: Differentiate $$\frac{2x + 1}{3x - 2}$$
- $f(x) = 2x + 1$, $f'(x) = 2$
- $g(x) = 3x - 2$, $g'(x) = 3$
- Derivative: 

$$\frac{2(3x - 2) - (2x + 1)3}{(3x - 2)^2} = \frac{6x - 4 - 6x - 3}{(3x - 2)^2} = \frac{-7}{(3x - 2)^2}$$

### Chain Rule
- $$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$$
- For composite functions: $$\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$$

#### Chain Rule Examples

**Example 1**: Differentiate $$(2x^3 - 5x + 1)^4$$
- Let $$u = 2x^3 - 5x + 1$$, then $$y = u^4$$
- $$\frac{du}{dx} = 6x^2 - 5$$
- $$\frac{dy}{du} = 4u^3$$
- $$\frac{dy}{dx} = 4(2x^3 - 5x + 1)^3 \cdot (6x^2 - 5)$$

**Example 2**: Differentiate $$e^{3x^2}$$
- Let $$u = 3x^2$$, then $$y = e^u$$
- $$\frac{du}{dx} = 6x$$
- $$\frac{dy}{du} = e^u$$
- $$\frac{dy}{dx} = e^{3x^2} \cdot 6x = 6xe^{3x^2}$$

**Example 3**: Differentiate $$\sin(5x^2 - 2x)$$
- Let $$u = 5x^2 - 2x$$, then $$y = \sin u$$
- $$\frac{du}{dx} = 10x - 2$$
- $$\frac{dy}{du} = \cos u$$
- $$\frac{dy}{dx} = \cos(5x^2 - 2x) \cdot (10x - 2)$$

**Example 4**: Differentiate $$\ln(4x^3 + 7)$$
- Let $$u = 4x^3 + 7$$, then $$y = \ln u$$
- $$\frac{du}{dx} = 12x^2$$
- $$\frac{dy}{du} = \frac{1}{u}$$
- $$\frac{dy}{dx} = \frac{1}{4x^3 + 7} \cdot 12x^2 = \frac{12x^2}{4x^3 + 7}$$

### Alternative Chain Rule Form
- $$\frac{dy}{dx} = \frac{1}{\frac{dx}{dy}}$$

**Example**: Curve $$x = y^2 - 4y + 1$$, find $$\frac{dy}{dx}$$ when $$y = 1$$
- $$\frac{dx}{dy} = 2y - 4$$
- When $$y = 1$$: $$\frac{dx}{dy} = 2(1) - 4 = -2$$
- Therefore: $$\frac{dy}{dx} = \frac{1}{-2} = -\frac{1}{2}$$

### Implicit Differentiation
- Differentiate both sides with respect to $x$
- Treat $y$ as a function of $x$
- Use chain rule for $y$ terms: $$\frac{d}{dx}[f(y)] = f'(y)\frac{dy}{dx}$$

### Parametric Differentiation
- Given $$x = f(t), y = g(t)$$
- $$\frac{dy}{dx} = \frac{dy/dt}{dx/dt}$$

### Applications
- Finding tangents and normals for curves defined implicitly or parametrically
- Equations of tangents at general points

## Key Differentiation Rules Summary

| Rule | Formula | When to Use |
|------|---------|-------------|
| Product | $(uv)' = u'v + uv'$ | Two functions multiplied |
| Quotient | $\left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$ | One function divided by another |
| Chain | $\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$ | Composite functions |
| Implicit | Differentiate both sides, include $\frac{dy}{dx}$ | Equations not in $y = f(x)$ form |

---

## P2.7: Integration

### Basic Integration

| Function | Integral |
|----------|----------|
| $e^{kx}$ | $\frac{1}{k}e^{kx} + c$ |
| $\frac{1}{x}$ | $\ln\lvert x\rvert + c \quad (x \neq 0)$ |
| $\sin kx$ | $-\frac{1}{k}\cos kx + c$ |
| $\cos kx$ | $\frac{1}{k}\sin kx + c$ |
| $\tan kx$ | $\frac{1}{k}\ln\lvert\sec kx\rvert + c$ |

### Integration by Inspection
Recognizing derivatives and applying reverse chain rule:

**Examples:**
- $$\int e^{-3x} dx = -\frac{1}{3}e^{-3x} + c$$
- $$\int \sin 4x dx = -\frac{1}{4}\cos 4x + c$$
- $$\int \frac{1}{\sqrt{x}} dx = \int x^{-1/2} dx = 2\sqrt{x} + c$$

### Integration by Substitution
Used when you can spot a function and its derivative:

**General form:** $$\int f(g(x))g'(x) dx = \int f(u) du$$ where $$u = g(x)$$

**Example 1:** $$\int x(2 + x)^6 dx$$
- Let $$u = 2 + x$$, then $$du = dx$$ and $$x = u - 2$$
- $$\int (u - 2)u^6 du = \int (u^7 - 2u^6) du = \frac{1}{8}u^8 - \frac{2}{7}u^7 + c$$
- $$= \frac{1}{8}(2 + x)^8 - \frac{2}{7}(2 + x)^7 + c$$

**Example 2:** $$\int \frac{x}{\sqrt{x - 3}} dx$$
- Let $$u = x - 3$$, then $$du = dx$$ and $$x = u + 3$$
- $$\int \frac{u + 3}{\sqrt{u}} du = \int (u^{\frac{1}{2}} + 3u^{-\frac{1}{2}}) du = \frac{2}{3}u^{\frac{3}{2}} + 6u^{\frac{1}{2}} + c$$
- $$= \frac{2}{3}(x - 3)^{\frac{3}{2}} + 6(x - 3)^{\frac{1}{2}} + c$$

### Integration by Parts
Based on the product rule: $$\int u dv = uv - \int v du$$

**LIATE rule** (priority for choosing u): Logarithmic, Inverse trigonometric, Algebraic, Trigonometric, Exponential

**Example 1:** $\int xe^{2x} dx$
- Let $u = x$, $dv = e^{2x} dx$
- Then $du = dx$, $v = \frac{1}{2}e^{2x}$

$$\int xe^{2x} dx = \frac{1}{2}xe^{2x} - \int \frac{1}{2}e^{2x} dx = \frac{1}{2}xe^{2x} - \frac{1}{4}e^{2x} + c$$

**Example 2:** $\int \ln x dx$
- Let $u = \ln x$, $dv = dx$
- Then $du = \frac{1}{x} dx$, $v = x$

$$\int \ln x dx = x\ln x - \int x \cdot \frac{1}{x} dx = x\ln x - x + c$$

**Example 3:** $\int x\sin 3x dx$
- Let $u = x$, $dv = \sin 3x dx$
- Then $du = dx$, $v = -\frac{1}{3}\cos 3x$

$$\int x\sin 3x dx = -\frac{1}{3}x\cos 3x + \int \frac{1}{3}\cos 3x dx = -\frac{1}{3}x\cos 3x + \frac{1}{9}\sin 3x + c$$

### Special Forms

$$\int \frac{f'(x)}{f(x)} dx = \ln \lvert f(x) \rvert + c$$

**Examples:**
- $\int \frac{2x}{x^2 + 1} dx = \ln\lvert x^2 + 1 \rvert + c$
- $\int \tan x dx = \int \frac{\sin x}{\cos x} dx = -\ln\lvert \cos x \rvert + c$

### Integration Using Partial Fractions
For rational functions where denominator can be factored:

**Example 1:** $$\int \frac{1 - 4x}{(3x - 4)(x + 3)^2} dx$$

First decompose into partial fractions:
$$\frac{1 - 4x}{(3x - 4)(x + 3)^2} = \frac{A}{3x - 4} + \frac{B}{x + 3} + \frac{C}{(x + 3)^2}$$

Solve for A, B, C, then integrate each term separately.

**Example 2:** $$\int \frac{x^2}{(x + 5)(x - 3)} dx$$

Since degree of numerator ≥ degree of denominator, perform polynomial division first:
$$\frac{x^2}{(x + 5)(x - 3)} = 1 + \frac{-2x + 15}{x^2 + 2x - 15}$$

Then decompose the remainder into partial fractions and integrate.

### Volumes of Revolution

#### About the x-axis:
$$V = \int_a^b \pi y^2 dx$$

**Example:** Find volume when $y = \sqrt{x}$ from $x = 1$ to $x = 4$ is rotated about x-axis

$$V = \int_1^4 \pi (\sqrt{x})^2 dx = \pi \int_1^4 x dx = \pi \left[\frac{1}{2}x^2\right]_1^4 = \pi \left(8 - \frac{1}{2}\right) = \frac{15\pi}{2}$$

#### About the y-axis:
$$V = \int_c^d \pi x^2 dy$$

**Example:** Find volume when $y = x^2$ from $y = 0$ to $y = 4$ is rotated about y-axis
- $x = \sqrt{y}$

$$V = \int_0^4 \pi (\sqrt{y})^2 dy = \pi \int_0^4 y dy = \pi \left[\frac{1}{2}y^2\right]_0^4 = 8\pi$$

### Definite Integration with Applications

#### Area between curve and x-axis:
$$A = \int_a^b y dx$$

**Note:** If curve goes below x-axis, the integral gives negative value. For total area, take absolute values.

#### Area between two curves:
$$A = \int_a^b [f(x) - g(x)] dx$$ where $$f(x) \geq g(x)$$

### Integration Methods

| Method | Formula | When to Use |
|--------|---------|-------------|
| Substitution | $\int f(g(x))g'(x)dx = \int f(u)du$ | Composite functions |
| By Parts | $\int udv = uv - \int vdu$ | Product of functions |
| Partial Fractions | Decompose $\frac{P(x)}{Q(x)}$ | Rational functions |

<!-- ---

## P2.8 Differential Equations

### Formation and Solution of First Order Differential Equations

**Separable Variables:** Equations of the form $$\frac{dy}{dx} = f(x)g(y)$$

**Solution method:**
1. Separate variables: $$\frac{1}{g(y)} dy = f(x) dx$$
2. Integrate both sides: $$\int \frac{1}{g(y)} dy = \int f(x) dx$$
3. Solve for $y$ if possible

**Example 1:** $$\frac{dy}{dx} = ky$$ (Exponential growth/decay)
- $$\frac{1}{y} dy = k dx$$
- $$\int \frac{1}{y} dy = \int k dx$$
- $$\ln|y| = kx + c$$
- $$y = Ae^{kx}$$ where $$A = e^c$$

**Example 2:** $$\frac{dy}{dx} = x(1 + y^2)$$
- $$\frac{1}{1 + y^2} dy = x dx$$
- $$\int \frac{1}{1 + y^2} dy = \int x dx$$
- $$\tan^{-1} y = \frac{1}{2}x^2 + c$$
- $$y = \tan\left(\frac{1}{2}x^2 + c\right)$$ -->

<!-- ---

## P2.9 Numerical Methods

### Location of Roots
If $$f(x)$$ is continuous on $$[a, b]$$ and $$f(a)$$, $$f(b)$$ have opposite signs, then there exists at least one root in $$(a, b)$$.

### Iterative Methods
Recurrence relations of the form $$x_{n+1} = f(x_n)$$

**Example:** Solve $$x^3 - x - 1 = 0$$
- Rearrange to $$x = \sqrt[3]{x + 1}$$
- Use $$x_{n+1} = \sqrt[3]{x_n + 1}$$
- Start with $$x_0 = 1$$:
  - $$x_1 = \sqrt[3]{1 + 1} = \sqrt[3]{2} \approx 1.2599$$
  - $$x_2 = \sqrt[3]{1.2599 + 1} = \sqrt[3]{2.2599} \approx 1.3123$$
  - Continue until convergence

### Numerical Integration

**Mid-ordinate Rule:**
$$\int_a^b f(x) dx \approx h[f(x_{1/2}) + f(x_{3/2}) + \cdots + f(x_{n-1/2})]$$
where $$h = \frac{b - a}{n}$$ and $$x_{i-1/2} = a + (i - \frac{1}{2})h$$

**Simpson's Rule:**
$$\int_a^b f(x) dx \approx \frac{h}{3}[f(x_0) + f(x_n) + 4(f(x_1) + f(x_3) + \cdots) + 2(f(x_2) + f(x_4) + \cdots)]$$
where $$h = \frac{b - a}{n}$$ and n is even -->

<!-- ---

## P2.10 Vectors

### Basic Operations
- **Magnitude:** $\lvert \vec{a} \rvert = \sqrt{x^2 + y^2 + z^2}$
- **Addition:** $\vec{a} + \vec{b} = (a_1 + b_1, a_2 + b_2, a_3 + b_3)$
- **Scalar multiplication:** $k\vec{a} = (ka_1, ka_2, ka_3)$

### Position Vectors and Lines
- **Position vector:** $\vec{r} = x\vec{i} + y\vec{j} + z\vec{k}$
- **Vector equation of line:** $\vec{r} = \vec{a} + \lambda\vec{b}$
  where $$\vec{a}$$ is a point on the line and $$\vec{b}$$ is the direction vector

**Example:** Line through (1, 0, 2) with direction (-1, 2, 3)
$$\begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \\ 2 \end{bmatrix} + \lambda \begin{bmatrix} -1 \\ 2 \\ 3 \end{bmatrix}$$

### Scalar Product
$$\vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}|\cos\theta = a_1b_1 + a_2b_2 + a_3b_3$$

**Angle between vectors:**
$$\cos\theta = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}||\vec{b}|}$$

**Perpendicular vectors:** $$\vec{a} \cdot \vec{b} = 0$$

### Applications
- Finding angle between two lines
- Finding foot of perpendicular from point to line
- Calculating perpendicular distance from point to line -->