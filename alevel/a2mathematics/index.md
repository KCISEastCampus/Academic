---
title: A2 Mathematics
layout: subjects
mathjax: true
grade: a2
subject: a2mathematics
---

# P2 (Pure Mathematics)
## P2.1: Algebra and Functions

### Algebraic Fractions
- Manipulate algebraic fractions similarly to numeric fractions
- **Addition example**: $\frac{x}{x+4} + \frac{4}{x-1} = \frac{x(x-1) + 4(x+4)}{(x+4)(x-1)} = \frac{x^2 + 3x + 16}{(x+4)(x-1)}$
- **Multiplication example**: $\frac{x}{x+4} \times \frac{4}{x-1} = \frac{4x}{(x-1)(x+4)}$
- **Division example**: $\frac{x}{x+4} \div \frac{4}{x-1} = \frac{x}{x+4} \times \frac{x-1}{4} = \frac{x(x-1)}{4(x+4)}$

### Algebraic Division
- Rewrite **improper fractions** as proper fractions using polynomial division
- For $\frac{F(x)}{G(x)}$ where $F(x)$ and $G(x)$ are polynomials: $$\frac{F(x)}{G(x)} = Q(x) + \frac{r}{G(x)}$$ where $Q(x)$ is the quotient and $r$ is the remainder
- **Example**: $$\frac{x^3 + x^2 - 7}{x - 3} = x^2 + 4x + 12 + \frac{29}{x - 3}$$

### Partial Fractions
- Split fractions with multiple linear factors in the denominator
- **Proper fraction example**: $$\frac{6x^2 + 5x - 2}{x(x-1)(2x+1)} \equiv \frac{A}{x} + \frac{B}{x-1} + \frac{C}{2x+1}$$
- **Method**:
  1. Set up identity with unknown constants
  2. Multiply through by denominator
  3. Substitute values of $x$ (roots of the factors) to find constants
  4. Solve for remaining constants using additional values or by equating coefficients

### Repeated Linear Factors
- For repeated factors, include extra fractions: $$\frac{2x^2 + 2x - 18}{x(x-3)^2} \equiv \frac{A}{x} + \frac{B}{(x-3)} + \frac{C}{(x-3)^2}$$
- **Other examples**:
  $$\frac{10x^2 - 10x + 17}{(2x+1)(x-3)^2} \equiv \frac{A}{2x+1} + \frac{B}{(x-3)} + \frac{C}{(x-3)^2}$$
  $$\frac{2x}{(x+2)^2} \equiv \frac{A}{(x+2)} + \frac{B}{(x+2)^2}$$

### Proof by Contradiction 💡
- **Method**:
  1. Assume the statement is false (the negation is true)
  2.  Show this assumption leads to a **contradiction** (a mathematically impossible result)
  3.  Conclude the original statement must be true
- **Key facts**:
  - Even numbers: $n = 2k$
  - Odd numbers: $n = 2k + 1$
  - Rational numbers: $\frac{a}{b}$ where $a,b$ are integers ($b \neq 0$) with no common factors
  - Irrational numbers cannot be written as $\frac{a}{b}$
- **Examples**:
  - Proof that there are infinitely many prime numbers
  - Proof that no integers $a,b$ satisfy $21a + 14b = 1$

### Functions
- **Definition**: A function maps each input to exactly one output
- **Domain**: Set of all possible input values  
- **Range**: Set of all possible output values
- **Notation**: 
  - $f(x) = \sqrt{x}, \{x\in\mathbb{R}, x\geq 0\}$
  - $f: x \mapsto \sqrt{x}, \{x\in\mathbb{R}, x\geq 0\}$

### Function Types
- **One-to-one**: Each input has unique output (Passes horizontal line test)
- **Many-to-one**: Multiple inputs map to same output (Passes vertical line test, fails horizontal line test)
- **One-to-many**: Not functions (Fails vertical line test)

### Function Composition
- $fg(x) = f(g(x))$ (apply $g$ first, then $f$)
- $gf(x) = g(f(x))$ (apply $f$ first, then $g$)
- **Note**: $gf(x) \neq fg(x)$ in general
- **Example**: 
  - $f(x) = 3x - 2$, $g(x) = x^2 + 4x - 2$
  - $fg(x) = 3(x^2 + 4x - 2) - 2 = 3x^2 + 12x - 8$
  - $gf(x) = (3x - 2)^2 + 4(3x - 2) - 2 = 9x^2 - 8$

### Inverse Functions
- Denoted as $f^{-1}$
- Only exists for **one-to-one** functions
- Graphically: Reflection in the line $y = x$
- **Properties**:
  - $ff^{-1}(x) = f^{-1}f(x) = x$
  - Domain of $f(x)$ = Range of $f^{-1}(x)$
  - Domain of $f^{-1}(x)$ = Range of $f(x)$
- **Finding inverse**:
  1. Let $y = f(x)$
  2. Interchange $x$ and $y$ variables
  3. Rearrange to make $y$ the subject
  4. The new function is the inverse $f^{-1}(x)$
- **Example**: 
  - $f(x) = x^3 - 8, \{x\in\mathbb{R}, x\geq 2\}$
  - $f^{-1}(x) = \sqrt[3]{x + 8}, \text{Range: } y\geq 2$

### Modulus Function
- Definition: $\lvert x \rvert = \begin{cases} x & \text{if } x \geq 0 \\ -x & \text{if } x < 0 \end{cases}$
- **Types of modulus functions**:
  - $y = \lvert f(x) \rvert$: Modulus applied to outputs (Reflect negative parts in x-axis)
  - $y = f(\lvert x \rvert)$: Modulus applied to inputs (Sketch for $x\geq 0$, reflect in y-axis)

### Transformations
Combinations of:
- $y = af(x)$ → Vertical stretch by factor $a$ (from x-axis)
- $y = f(x) + a$ → Vertical translation by $a$ (up/down)
- $y = f(x + a)$ → Horizontal translation by $-a$ (left/right)
- $y = f(ax)$ → Horizontal stretch by factor $1/a$ (from y-axis)
- $y = -f(x)$ → Reflection in x-axis
- $y = f(-x)$ → Reflection in y-axis

### Solving Modulus Equations
1. Sketch the graphs involved to visualize the number of solutions
2. Identify intersection points
3. Solve equations for different cases based on modulus definition
- **Example**: Solve $\lvert 2x + a \rvert - b = \frac{1}{3}x$
  - Case 1 (non-reflected portion): $2x + a - b = \frac{1}{3}x$
  - Case 2 (reflected portion): $-(2x + a) - b = \frac{1}{3}x$

### Rational Functions
- Use Factor Theorem and Remainder Theorem for divisors of the form $(ax + b)$
- **Simplification example**: $$\frac{x^2 - 4x}{x^2 - 5x + 4} = \frac{x(x - 4)}{(x - 4)(x - 1)} = \frac{x}{x - 1}$$

### Algebraic Division
**Examples**:
- $\frac{3x + 4}{x - 1} = 3 + \frac{7}{x - 1}$
- $\frac{2x^3 - 3x^2 - 2x + 2}{x - 2} = 2x^2 + x + \frac{2}{x - 2}$

### Partial Fractions (Extended)
- Denominators not more complicated than repeated linear terms
- **Maximum complexity**: $\frac{3 + 2x^2}{(2x + 1)(x - 3)^2}$

---

## P2.2: Sequences and Series

### Binomial Series 🔢
- $(1 + x)^n$ for any rational $n$ (including fractions and negative integers)
- Valid for $\lvert x \rvert < 1$
- **General Term** (Expansion of $(1+x)^n$): $$u_{r+1} = \frac{n(n-1)\cdots(n-r+1)}{r!}x^r$$
- **Applications**: Use a few terms of the series to find approximate values of roots or powers (e.g., finding an approximation for $\sqrt{1.04}$).
- **Example**: $(2 + 3x)^{-2} = \frac{1}{4}\left(1 + \frac{3x}{2}\right)^{-2}$, valid for $\lvert x \rvert < \frac{2}{3}$

### Series Expansion
- Using partial fractions for rational functions, followed by Binomial Expansion on each term.
- **Maximum complexity**: $\frac{3 + 2x^2}{(2x + 1)(x - 3)^2}$

---

## P2.3: Coordinate Geometry

### Parametric Equations
- Curves defined by $x = f(t), y = g(t)$
- Conversion between Cartesian and parametric forms (usually by eliminating the parameter $t$)
- **Examples**:
  - $x = t^2, y = 2t \Rightarrow y^2 = 4x$
  - $x = a\cos\theta, y = b\sin\theta \Rightarrow \frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$
  - $x = \frac{1}{t}, y = 3t \Rightarrow y = \frac{3}{x}$
  - $x = t + \frac{1}{t}, y = t - \frac{1}{t} \Rightarrow x^2 - y^2 = 4$

---

## P2.4: Trigonometry

### Inverse Trigonometric Functions 📐
- $\sin^{-1}x$: Domain $[-1,1]$, Range $[-\frac{\pi}{2}, \frac{\pi}{2}]$
- $\cos^{-1}x$: Domain $[-1,1]$, Range $[0, \pi]$
- $\tan^{-1}x$: Domain $\mathbb{R}$, Range $(-\frac{\pi}{2}, \frac{\pi}{2})$

### Reciprocal Functions
- $\sec x = \frac{1}{\cos x}$
- $\cosec x = \frac{1}{\sin x}$
- $\cot x = \frac{1}{\tan x}$

### Trigonometric Identities
- $1 + \tan^2 x = \sec^2 x$
- $1 + \cot^2 x = \cosec^2 x$
- $\sin 2A = 2\sin A\cos A$
- $\cos 2A = \cos^2 A - \sin^2 A = 2\cos^2 A - 1 = 1 - 2\sin^2 A$
- $\tan 2A = \frac{2\tan A}{1 - \tan^2 A}$

### Compound Angle Formulae
- $\sin(A \pm B) = \sin A\cos B \pm \cos A\sin B$
- $\cos(A \pm B) = \cos A\cos B \mp \sin A\sin B$
- $\tan(A \pm B) = \frac{\tan A \pm \tan B}{1 \mp \tan A\tan B}$

### R-formulae
- $a\cos\theta + b\sin\theta = R\cos(\theta \pm \alpha)$ or $R\sin(\theta \pm \alpha)$
- Where $R = \sqrt{a^2 + b^2}$ and $\tan\alpha = \frac{\lvert b \rvert}{\lvert a \rvert}$ (Check quadrant to determine $\alpha$ correctly)

### Trigonometric Equations
**Examples from specification:**
- Solve $3\sin 2x = \cos x, 0 \leq x \leq 4\pi$ (Use double angle identity)
- Solve $2\sin x + 3\cos x = 1.5, -180^\circ < x \leq 180^\circ$ (Use R-formula)

---

## P2.5: Exponentials and Logarithms

### Exponential Function 📈
- $y = e^x$
- Graph: Always positive ($y > 0$), increasing, y-intercept at (0,1)
- The gradient is equal to the function value: $\frac{d}{dx}(e^x) = e^x$

### Natural Logarithm
- $y = \ln x$ - inverse of $e^x$
- Graph: Domain $x > 0$, x-intercept at (1,0)

### Logarithm Laws 📝
- **Product Rule**: $\ln(ab) = \ln a + \ln b$
- **Quotient Rule**: $\ln\left(\frac{a}{b}\right) = \ln a - \ln b$
- **Power Rule**: $\ln(a^k) = k \ln a$
- **Base Change**: $\ln e = 1$, $\ln 1 = 0$
- **Solving Equations**: Use $a = e^{\ln a}$ or $\ln(e^x) = x$ to convert between exponential and logarithmic forms.

### Applications
- Exponential growth and decay models (e.g., $N = N_0 e^{kt}$)

---

## P2.6: Differentiation

### Basic Derivatives

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

### Product Rule
- $\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)$

**Example**: Differentiate $x^2 \ln x$
- $f(x) = x^2$, $f'(x) = 2x$
- $g(x) = \ln x$, $g'(x) = \frac{1}{x}$
- Derivative: $2x\ln x + x^2 \cdot \frac{1}{x} = 2x\ln x + x$

### Quotient Rule
- $\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$

**Example**: Differentiate $\frac{2x + 1}{3x - 2}$
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

**Example 4**: Differentiate $\ln(4x^3 + 7)$
- $\frac{dy}{dx} = \frac{1}{4x^3 + 7} \cdot 12x^2 = \frac{12x^2}{4x^3 + 7}$

### Alternative Chain Rule Form
- **Implicitly Defined Inverse**: $\frac{dy}{dx} = \frac{1}{\frac{dx}{dy}}$

**Example**: Curve $x = y^2 - 4y + 1$, find $\frac{dy}{dx}$ when $y = 1$
- $\frac{dx}{dy} = 2y - 4$
- When $y = 1$: $\frac{dx}{dy} = -2$
- Therefore: $\frac{dy}{dx} = \frac{1}{-2} = -\frac{1}{2}$

### Implicit Differentiation
- Differentiate both sides with respect to $x$
- Treat $y$ as a function of $x$
- Use chain rule for $y$ terms: $\frac{d}{dx}[f(y)] = f'(y)\frac{dy}{dx}$

### Parametric Differentiation
- Given $x = f(t), y = g(t)$
- $\frac{dy}{dx} = \frac{dy/dt}{dx/dt}$

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
| $\sec^2 kx$ | $\frac{1}{k}\tan kx + c$ |
| $\tan kx$ | $\frac{1}{k}\ln\lvert\sec kx\rvert + c$ |

### Integration by Inspection
Recognizing derivatives and applying reverse chain rule:

**Special form**: $\int f'(ax+b) dx = \frac{1}{a} f(ax+b) + c$

**Examples:**
- $\int e^{-3x} dx = -\frac{1}{3}e^{-3x} + c$
- $\int \sin 4x dx = -\frac{1}{4}\cos 4x + c$
- $\int \frac{1}{\sqrt{x}} dx = 2\sqrt{x} + c$

### Integration by Substitution
Used when you can spot a function and its derivative:

**General form:** $\int f(g(x))g'(x) dx = \int f(u) du$ where $u = g(x)$

**Example 1:** $\int x(2 + x)^6 dx$
- Result: $\frac{1}{8}(2 + x)^8 - \frac{2}{7}(2 + x)^7 + c$

**Example 2:** $\int \frac{x}{\sqrt{x - 3}} dx$
- Result: $\frac{2}{3}(x - 3)^{\frac{3}{2}} + 6(x - 3)^{\frac{1}{2}} + c$

### Integration by Parts 🎣
Based on the product rule: $\int u dv = uv - \int v du$

**LIATE rule** (priority for choosing u): **L**ogarithmic, **I**nverse trigonometric, **A**lgebraic, **T**rigonometric, **E**xponential

**Example 1:** $\int xe^{2x} dx$
$$\int xe^{2x} dx = \frac{1}{2}xe^{2x} - \frac{1}{4}e^{2x} + c$$

**Example 2:** $\int \ln x dx$
$$\int \ln x dx = x\ln x - x + c$$

### Special Forms

$$\int \frac{f'(x)}{f(x)} dx = \ln \lvert f(x) \rvert + c$$

**Examples:**
- $\int \frac{2x}{x^2 + 1} dx = \ln\lvert x^2 + 1 \rvert + c$
- $\int \tan x dx = -\ln\lvert \cos x \rvert + c$

### Integration Using Partial Fractions
For rational functions where denominator can be factored:

**Example 2:** $\int \frac{x^2}{(x + 5)(x - 3)} dx$
Since improper, use division first:
$$\frac{x^2}{(x + 5)(x - 3)} = 1 + \frac{-2x + 15}{x^2 + 2x - 15}$$
Then decompose the remainder into partial fractions and integrate.

### Volumes of Revolution 🍩

#### About the x-axis:
$$V = \int_a^b \pi y^2 dx$$

#### About the y-axis:
$$V = \int_c^d \pi x^2 dy$$

### Definite Integration with Applications

#### Area between curve and x-axis:
$$A = \int_a^b y dx$$

#### Area between two curves:
$$A = \int_a^b [f(x) - g(x)] dx$$ where $f(x) \geq g(x)$

---

## P2.8 Differential Equations

### Formation and Solution of First Order Differential Equations

**Separable Variables:** Equations of the form $\frac{dy}{dx} = f(x)g(y)$

**Solution method:**
1. Separate variables: $\frac{1}{g(y)} dy = f(x) dx$
2. Integrate both sides: $\int \frac{1}{g(y)} dy = \int f(x) dx$
3. Use initial/boundary conditions to find the constant of integration ($c$).

**Example 1:** $\frac{dy}{dx} = ky$
- Solution: $y = Ae^{kx}$ where $A$ is constant.

**Example 2:** $\frac{dy}{dx} = x(1 + y^2)$
- Solution: $y = \tan\left(\frac{1}{2}x^2 + c\right)$

---

## P2.9 Numerical Methods

### Location of Roots
If $f(x)$ is continuous on $[a, b]$ and $f(a)$, $f(b)$ have opposite signs, then there exists at least one root in $(a, b)$.

### Iterative Methods
Recurrence relations of the form $x_{n+1} = f(x_n)$ derived by rearranging $f(x)=0$.

**Example:** Solve $x^3 - x - 1 = 0$
- Rearrange to $x = \sqrt[3]{x + 1}$
- Use $x_{n+1} = \sqrt[3]{x_n + 1}$

### Numerical Integration

**Mid-ordinate Rule:** (Uses rectangles at midpoints)
$$\int_a^b f(x) dx \approx h[f(x_{1/2}) + f(x_{3/2}) + \cdots + f(x_{n-1/2})]$$
where $h = \frac{b - a}{n}$

**Simpson's Rule:** (Uses parabolas through three points)
$$\int_a^b f(x) dx \approx \frac{h}{3}[f(x_0) + f(x_n) + 4(\sum \text{odd ordinates}) + 2(\sum \text{even ordinates})]$$
where $h = \frac{b - a}{n}$ and **n must be even** (number of strips)

---

## P2.10 Vectors

### Basic Operations
- **Magnitude:** $\lvert \vec{a} \rvert = \sqrt{x^2 + y^2 + z^2}$
- **Addition:** $\vec{a} + \vec{b} = (a_1 + b_1, a_2 + b_2, a_3 + b_3)$
- **Scalar multiplication:** $k\vec{a} = (ka_1, ka_2, ka_3)$

### Position Vectors and Lines
- **Position vector:** $\vec{r} = x\vec{i} + y\vec{j} + z\vec{k}$
- **Vector equation of line:** $\vec{r} = \vec{a} + \lambda\vec{b}$
  where $\vec{a}$ is a point on the line and $\vec{b}$ is the direction vector

**Example:** Line through (1, 0, 2) with direction (-1, 2, 3)

$$\begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \\ 2 \end{bmatrix} + \lambda \begin{bmatrix} -1 \\ 2 \\ 3 \end{bmatrix}$$

### Scalar Product
$$\vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}|\cos\theta = a_1b_1 + a_2b_2 + a_3b_3$$

**Angle between vectors:**
$$\cos\theta = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}||\vec{b}|}$$

**Perpendicular vectors:** $\vec{a} \cdot \vec{b} = 0$

### Planes 🧊
- **Normal Vector ($\vec{n}$):** A vector perpendicular to the plane.
- **Vector Equation**: $\vec{r} \cdot \vec{n} = \vec{a} \cdot \vec{n}$ (or $\vec{r} \cdot \vec{n} = d$)
    - $\vec{a}$ is the position vector of a fixed point on the plane.
- **Cartesian Equation**: $ax + by + cz = d$
    - $(a, b, c)$ are the components of the normal vector $\vec{n}$.
- **Angle between Line and Plane**: The angle $\theta$ between a line with direction $\vec{b}$ and a plane with normal $\vec{n}$ is found using:
$$\sin\theta = \left\lvert \frac{\vec{b} \cdot \vec{n}}{|\vec{b}||\vec{n}|} \right\rvert$$

### Applications
- Finding angle between two lines
- Finding foot of perpendicular from point to line
- Calculating perpendicular distance from point to line
- **Finding Intersection** (Line and Plane): Substitute the general point of the line ($\vec{r}$) into the Cartesian equation of the plane and solve for $\lambda$.