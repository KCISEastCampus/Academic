---
title: AS Further Mathematics
layout: subjects
mathjax: true
grade: as
subject: asfm
---
# Intro to AS Further Math
## 🏗️ AS Level Course Structure

### Two Compulsory Units:

#### Unit FP1: Pure Mathematics
- **Duration**: 1 hour 30 minutes
- **Marks**: 80
- **Weighting**: 50% of AS, 20% of A-level
- **Calculator**: Allowed
- **Focus**: Advanced algebra, complex numbers, series, calculus

#### Unit FPSM1: Pure Mathematics, Statistics and Mechanics
- **Duration**: 1 hour 30 minutes
- **Marks**: 80
- **Weighting**: 50% of AS, 20% of A-level
- **Calculator**: Allowed
- **Breakdown**:
  - 40 marks Pure Mathematics
  - 20 marks Statistics
  - 20 marks Mechanics

---

# Further Pure Math(FP1)
## Revision Guide
### 1. Algebra and Graphs (FP1.1)

#### 1.1 Rational Functions - Complete Foundation

**Basic Forms:**
- Linear/Linear: $$y = \frac{ax + b}{cx + d}$$
- Linear/Quadratic: $$y = \frac{ax + b}{cx^2 + dx + e}$$
- Quadratic/Quadratic: $$y = \frac{x^2 + ax + b}{x^2 + cx + d}$$

**Step-by-Step Analysis:**

**1. Finding Asymptotes:**
- **Vertical asymptotes**: Set denominator = 0
   - For $$y = \frac{x+2}{x-3}$$, vertical asymptote at $x = 3$
- **Horizontal asymptotes**: Compare degrees
  - If degree(numerator) < degree(denominator): $y = 0$
  - If degrees equal: $$y = \frac{\text{leading coefficient of numerator}}{\text{leading coefficient of denominator}}$$

**2. Finding Intercepts:**
- **x-intercepts**: Set numerator = 0
- **y-intercepts**: Set x = 0

**3. Stationary Points (Without Calculus):**
For rational function $$y = \frac{P(x)}{Q(x)}$$:
- Set $y = k$ ⇒ $P(x) = kQ(x)$
- Rearrange to quadratic: $Ax^2 + Bx + C = 0$
- Use discriminant: $B^2 - 4AC ≥ 0$ for real solutions
- Solve for k-range to find stationary points

**Example with Detailed Working:**
For $$y = \frac{x^2 + 2}{x^2 - 4x}$$:

1. **Vertical asymptote**: $x^2 - 4x = 0$ ⇒ $x(x-4) = 0$ ⇒ $x = 0, 4$
2. **Horizontal asymptote**: Degrees equal ⇒ $$y = \frac{1}{1} = 1$$
3. **Stationary points**: Set $y = k$

$$x^2 + 2 = k(x^2 - 4x)$$
$$x^2 + 2 = kx^2 - 4kx$$
$$(1-k)x^2 + 4kx + 2 = 0$$

   Discriminant: $(4k)^2 - 4(1-k)(2) ≥ 0$

$$16k^2 - 8(1-k) ≥ 0$$
$$16k^2 - 8 + 8k ≥ 0$$
$$16k^2 + 8k - 8 ≥ 0$$
$$2k^2 + k - 1 ≥ 0$$
$$(2k-1)(k+1) ≥ 0$$

   Therefore: $k ≤ -1$ or $k ≥ \frac{1}{2}$

   Stationary points occur at boundaries: $(1, -1)$ and $(-2, \frac{1}{2})$

#### 1.2 Conic Sections - Deep Understanding

**Parabola**: $y^2 = 4ax$
- Focus: $(a, 0)$
- Directrix: $x = -a$
- All points equidistant from focus and directrix

**Ellipse**: 
$$\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$$
- Major axis length: $2a$
- Minor axis length: $2b$
- Foci: $(±c, 0)$ where $c^2 = a^2 - b^2$

**Hyperbola**: 
$$\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$$
- Asymptotes: $y = ±\frac{b}{a}x$
- Foci: $(±c, 0)$ where $c^2 = a^2 + b^2$

**Rectangular Hyperbola**: 
$$xy = c^2$$
- Asymptotes: $x = 0$, $y = 0$
- Rotated 45° from standard hyperbola

---

### 2. Coordinate Geometry (FP1.2)

#### Locus Problems - Systematic Approach

**Distance Formulas:**
- Distance between points: $$d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$$
- Distance from point to vertical line $x = a$: $\lvert x - a\rvert$
- Distance from point to horizontal line $y = b$: $\lvert y - b\rvert$

**Example Problem:**
Find locus of points equidistant from $$(2, 3)$$ and line $$x = 4$$

1. **Distance to point**: $$\sqrt{(x-2)^2 + (y-3)^2}$$
2. **Distance to line**: $\lvert x - 4\rvert$
3. **Set equal**: $\sqrt{(x-2)^2 + (y-3)^2} = \lvert x - 4\rvert$
4. **Square both sides**: $$(x-2)^2 + (y-3)^2 = (x-4)^2$$
5. **Expand**: $$x^2 - 4x + 4 + y^2 - 6y + 9 = x^2 - 8x + 16$$
6. **Simplify**: $$4x + y^2 - 6y - 3 = 0$$

---

### 3. Complex Numbers (FP1.3)
#### 3.1 What are Complex Numbers?

(Tips: Real Part function and Imaginary Part function looks like $$ \Re(z) $$ and $$ \Im(z) $$ in computer respectively.)

**Foundation Concept**: $$\sqrt{-1} = i$$ where $$i^2 = -1$$

**Standard Form**: $$z = x + iy$$
- Real part: $$\Re(z) = x$$
- Imaginary part: $$\Im(z) = y$$

#### 3.2 Basic Operations - Step by Step

**Addition**: $$(a + bi) + (c + di) = (a + c) + (b + d)i$$

**Subtraction**: $$(a + bi) - (c + di) = (a - c) + (b - d)i$$

**Multiplication**:
$$(a + bi)(c + di) = ac + adi + bci + bdi^2 = (ac - bd) + (ad + bc)i$$

**Division** - **CRITICAL METHOD**:
To divide $\frac{a + bi}{c + di}$:
1. Multiply numerator and denominator by conjugate of denominator
2. Conjugate of $$c + di$$ is $$c - di$$
3. $$\frac{a + bi}{c + di} × \frac{c - di}{c - di} = \frac{(a + bi)(c - di)}{c^2 + d^2}$$

**Example**: $$\frac{3 + 2i}{1 - i} = \frac{(3 + 2i)(1 + i)}{(1 - i)(1 + i)} = \frac{3 + 3i + 2i + 2i^2}{1 + 1} = \frac{1 + 5i}{2}$$

#### 3.3 Different Forms of Complex Numbers

**Cartesian Form**: $$z = x + iy$$

**Polar Form**: $$z = r(\cos θ + i\sin θ)$$
- Modulus: $r = \lvert z\rvert = \sqrt{x^2 + y^2}$
- Argument: $$θ = \arg(z) = \tan^{-1}(\frac{y}{x})$$ (adjusting for quadrant)

**Conversion Examples**:
- Cartesian to Polar: $3 + 4i$ ⇒ $r = \sqrt{9 + 16} = 5$, $θ = \tan^{-1}(\frac{4}{3}) ≈ 53.13°$
- Polar to Cartesian: $2(\cos 60° + i\sin 60°) = 2(0.5 + i\frac{\sqrt{3}}{2}) = 1 + i\sqrt{3}$

#### 3.4 Complex Conjugates

**Definition**: If $z = x + iy$, then conjugate $z^* = x - iy$

**Properties**:
- $$z + z^* = 2\Re(z)$$
- $$z - z^* = 2i\Im(z)$$
- $zz^* = \lvert z\rvert^2 = x^2 + y^2$

#### 3.5 Argand Diagram and Loci

**Basic Loci**:

1. **Circle**: $\lvert z - a\rvert = r$
   - Center: point representing complex number a
   - Radius: r

2. **Perpendicular Bisector**: $\lvert z - a\rvert = \lvert z - b\rvert$
   - Equidistant from points a and b

3. **Ray from point**: $$\arg(z - a) = θ$$
   - Fixed angle θ from point a

**Example Problems**:

1. $\lvert z - (2 + i)\rvert = 3$: Circle center (2,1), radius 3
2. $\arg(z - 1) = \frac{π}{4}$: Ray from (1,0) at 45°
3. $\lvert z - 3\rvert = \lvert z + 2i\rvert$: Perpendicular bisector of points (3,0) and (0,-2)

---

### 4. Roots and Coefficients (FP1.4)

#### 4.1 Fundamental Relationships

For quadratic $$ax^2 + bx + c = 0$$ with roots α, β:
- Sum of roots: $$α + β = -\frac{b}{a}$$
- Product of roots: $$αβ = \frac{c}{a}$$

#### 4.2 Advanced Manipulations

**Common Expressions**:
- $$α^2 + β^2 = (α + β)^2 - 2αβ$$
- $$α^3 + β^3 = (α + β)^3 - 3αβ(α + β)$$
- $$α^4 + β^4 = (α^2 + β^2)^2 - 2(αβ)^2$$
- $$\frac{1}{α} + \frac{1}{β} = \frac{α + β}{αβ}$$

#### 4.3 Forming New Equations

**Process for creating equations with transformed roots**:

1. **Identify original roots relationship**: $S = α + β$, $P = αβ$
2. **Express new sum and product in terms of S and P**
3. **Construct new quadratic**: $$x^2 - (\text{new sum})x + (\text{new product}) = 0$$

**Example**: Original equation has roots α, β. Find equation with roots $$α^3, β^3$$

1. New sum: $$α^3 + β^3 = S^3 - 3PS$$
2. New product: $$α^3β^3 = (αβ)^3 = P^3$$
3. New equation: $$x^2 - (S^3 - 3PS)x + P^3 = 0$$

---

### 5. Series (FP1.5)

#### 5.1 Essential Summation Formulas

**Must Memorize**:
- $$\sum_{r=1}^n r = \frac{n(n+1)}{2}$$
- $$\sum_{r=1}^n r^2 = \frac{n(n+1)(2n+1)}{6}$$
- $$\sum_{r=1}^n r^3 = \left[\frac{n(n+1)}{2}\right]^2$$

#### 5.2 Method of Differences

**Principle**: Express terms as difference of consecutive terms in a sequence

**General Approach**:
1. Look for pattern: $$u_r = f(r) - f(r+1)$$ or $$u_r = f(r+1) - f(r)$$
2. Write out terms to see cancellation
3. Sum collapses to first minus last term

**Classic Example**: $$\sum_{r=1}^n \frac{1}{r(r+1)}$$

1. Use partial fractions: $$\frac{1}{r(r+1)} = \frac{1}{r} - \frac{1}{r+1}$$
2. Write out terms:
   $$(\frac{1}{1} - \frac{1}{2}) + (\frac{1}{2} - \frac{1}{3}) + \cdots + (\frac{1}{n} - \frac{1}{n+1})$$
3. Telescoping sum: $$1 - \frac{1}{n+1} = \frac{n}{n+1}$$

#### 5.3 Advanced Summation Examples

**Example 1**: $$\sum_{r=1}^n r(r+1)(r+2)$$

1. Note that: $$r(r+1)(r+2) = \frac{1}{4}[(r)(r+1)(r+2)(r+3) - (r-1)(r)(r+1)(r+2)]$$
2. Telescoping sum gives: $$\frac{1}{4}n(n+1)(n+2)(n+3)$$

**Example 2**: $$\sum_{r=1}^n (2r-1)(2r+1)$$

1. Method of differences: $$(2r-1)(2r+1) = \frac{1}{2}[(2r-1)(2r+1)(2r+3) - (2r-3)(2r-1)(2r+1)]$$
2. Sum telescopes

---

### 6. Trigonometry (FP1.6) - General Solutions

#### 6.1 Solving Trigonometric Equations

**General Solutions Formulas**:
- $$\sin θ = k$$ ⇒ $$θ = nπ + (-1)^nα$$ where $$α = \sin^{-1}k$$
- $$\cos θ = k$$ ⇒ $$θ = 2nπ ± α$$ where $$α = \cos^{-1}k$$
- $$\tan θ = k$$ ⇒ $$θ = nπ + α$$ where $$α = \tan^{-1}k$$

#### 6.2 Exact Values - Must Know

**Standard Angles**:

| Angle | sin | cos | tan |
|-------|-----|-----|-----|
| $0^\circ$ | 0 | 1 | 0 |
| $30^\circ$ | $\frac{1}{2}$ | $\frac{\sqrt{3}}{2}$ | $\frac{1}{\sqrt{3}}$ |
| $45^\circ$ | $\frac{1}{\sqrt{2}}$ | $\frac{1}{\sqrt{2}}$ | 1 |
| $60^\circ$ | $\frac{\sqrt{3}}{2}$ | $\frac{1}{2}$ | $\sqrt{3}$ |
| $90^\circ$ | 1 | 0 | $\infty$ |

#### 6.3 Worked Examples

**Example 1**: $$\sin 2x = \frac{\sqrt{3}}{2}$$

1. Reference angle: $$\sin^{-1}(\frac{\sqrt{3}}{2}) = \frac{π}{3}$$
2. General solution: $$2x = nπ + (-1)^n\frac{π}{3}$$
3. Final: $$x = \frac{nπ}{2} + (-1)^n\frac{π}{6}$$

**Example 2**: $$\cos(x + \frac{π}{6}) = -\frac{1}{\sqrt{2}}$$

1. Reference angle: $$\cos^{-1}(\frac{1}{\sqrt{2}}) = \frac{π}{4}$$
2. Since cosine is negative, angles in quadrants II and III
3. $$x + \frac{π}{6} = 2nπ ± \frac{3π}{4}$$
4. Solve for x

---

### 7. Calculus (FP1.7)

#### 7.1 First Principles Differentiation

**Definition**: $$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

**Example**: Find derivative of $$f(x) = x^2$$ from first principles

1. $$f(x+h) = (x+h)^2 = x^2 + 2xh + h^2$$
2. $$f(x+h) - f(x) = 2xh + h^2$$
3. $$\frac{f(x+h) - f(x)}{h} = 2x + h$$
4. $$\lim_{h \to 0} (2x + h) = 2x$$

#### 7.2 Connected Rates of Change

**Chain Rule Application**: $$\frac{dy}{dt} = \frac{dy}{dx} × \frac{dx}{dt}$$

**Example**: If $$P = kV^3$$ and $$V$$ is changing with time:
$$\frac{dP}{dt} = \frac{dP}{dV} × \frac{dV}{dt} = 3kV^2 × \frac{dV}{dt}$$

#### 7.3 Small Changes

**Formula**: $$δy ≈ \frac{dy}{dx} × δx$$

**Example**: For $y = 20x^{-2}$, estimate change in y when x increases from 5 to 5.1

1. $$\frac{dy}{dx} = -40x^{-3} = -\frac{40}{x^3}$$
2. At $x = 5$: $\frac{dy}{dx} = -\frac{40}{125} = -0.32$
3. $$δx = 0.1$$
4. $$δy ≈ -0.32 × 0.1 = -0.032$$

#### 7.4 Improper Integrals

**Type 1**: Infinite limits $$\int_a^∞ f(x)dx = \lim\limits_{b \to ∞} \int_a^b f(x)dx$$

**Type 2**: Infinite integrand $$\int_a^b f(x)dx$$ where $f(x) \rightarrow \infty$ at some point

**Examples**:
1. $$\int_0^4 \frac{1}{\sqrt{x}}dx = \lim_{a \to 0} \int_a^4 x^{-\frac{1}{2}}dx = \lim_{a \to 0} [2\sqrt{x}]_a^4 = 4$$
2. $$\int_4^\infty x^{-\frac{3}{2}}dx = \lim_{b \to \infty} [-\frac{2}{\sqrt{x}}]_4^b = 1$$