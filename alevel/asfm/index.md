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

Rational functions come in several key types:

$$y = \frac{ax + b}{cx + d} \quad \text{(Linear/Linear)}$$

$$y = \frac{ax + b}{cx^2 + dx + e} \quad \text{(Linear/Quadratic)}$$

$$y = \frac{x^2 + ax + b}{x^2 + cx + d} \quad \text{(Quadratic/Quadratic)}$$

**Step-by-Step Analysis:**

**Step 1: Finding Asymptotes**

*Vertical asymptotes* occur where the denominator equals zero:
- For $$y = \frac{x+2}{x-3}$$, set $x - 3 = 0$, so vertical asymptote at $x = 3$

*Horizontal asymptotes* depend on comparing degrees:
- If degree(numerator) < degree(denominator): $y = 0$
- If degrees are equal: $y = \dfrac{\text{leading coeff of numerator}}{\text{leading coeff of denominator}}$

**Step 2: Finding Intercepts**

- **x-intercepts**: Set numerator = 0
- **y-intercepts**: Set x = 0

**Step 3: Stationary Points (Without Calculus)**

For rational function $$y = \frac{P(x)}{Q(x)}$$:

1. Set $y = k$ to get $$P(x) = kQ(x)$$
2. Rearrange into quadratic: $Ax^2 + Bx + C = 0$
3. For real solutions to exist: $B^2 - 4AC ≥ 0$
4. Solve for range of $k$ to find stationary points

---

**Example with Detailed Working:**

Find asymptotes and stationary points of $$y = \frac{x^2 + 2}{x^2 - 4x}$$

**Vertical asymptotes:**
$$x^2 - 4x = 0 \Rightarrow x(x-4) = 0 \Rightarrow x = 0, 4$$

**Horizontal asymptotes:**
Degrees are equal, so $$y = \frac{1}{1} = 1$$

**Stationary points:**

Set $y = k$:
$$x^2 + 2 = k(x^2 - 4x)$$
$$x^2 + 2 = kx^2 - 4kx$$
$$(1-k)x^2 + 4kx + 2 = 0$$

For real solutions, discriminant ≥ 0:
$$(4k)^2 - 4(1-k)(2) ≥ 0$$
$$16k^2 - 8(1-k) ≥ 0$$
$$16k^2 - 8 + 8k ≥ 0$$
$$2k^2 + k - 1 ≥ 0$$
$$(2k-1)(k+1) ≥ 0$$

Therefore: $k ≤ -1$ or $k ≥ \frac{1}{2}$

Stationary points occur at boundaries: $(1, -1)$ and $(-2, \frac{1}{2})$

#### 1.2 Conic Sections - Deep Understanding

The four main conic sections have distinct geometric properties:

**Parabola**: $y^2 = 4ax$

- **Focus:** $(a, 0)$
- **Directrix:** $x = -a$
- **Key property:** All points equidistant from focus and directrix

---

**Ellipse:** 

$$\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$$

- **Major axis length:** $2a$
- **Minor axis length:** $2b$
- **Foci:** $(±c, 0)$ where $c^2 = a^2 - b^2$

---

**Hyperbola:** 

$$\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$$

- **Asymptotes:** $y = ±\frac{b}{a}x$
- **Foci:** $(±c, 0)$ where $c^2 = a^2 + b^2$

---

**Rectangular Hyperbola:** 

$$xy = c^2$$

- **Asymptotes:** $x = 0$, $y = 0$ (the coordinate axes)
- **Orientation:** Rotated 45° from standard hyperbola

---

### 2. Coordinate Geometry (FP1.2)

#### Locus Problems - Systematic Approach

**Distance Formulas:**

Between two points:
$$d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$$

From point to vertical line $x = a$:
$$d = \lvert x - a\rvert$$

From point to horizontal line $y = b$:
$$d = \lvert y - b\rvert$$

---

**Example Problem:**

Find the locus of points equidistant from $(2, 3)$ and the line $x = 4$

**Solution:**

**Step 1:** Distance to point = Distance to line

$$\sqrt{(x-2)^2 + (y-3)^2} = \lvert x - 4\rvert$$

**Step 2:** Square both sides

$$(x-2)^2 + (y-3)^2 = (x-4)^2$$

**Step 3:** Expand

$$x^2 - 4x + 4 + y^2 - 6y + 9 = x^2 - 8x + 16$$

**Step 4:** Simplify

$$4x + y^2 - 6y - 3 = 0$$

This is the equation of a parabola.

---

### 3. Complex Numbers (FP1.3)
#### 3.1 What are Complex Numbers?

(Tips: Real Part function and Imaginary Part function looks like $$ \Re(z) $$ and $$ \Im(z) $$ in computer respectively.)

**Foundation Concept**: $$\sqrt{-1} = i$$ where $$i^2 = -1$$

**Standard Form**: $$z = x + iy$$
- Real part: $$\Re(z) = x$$
- Imaginary part: $$\Im(z) = y$$

#### 3.2 Basic Operations - Step by Step

**Addition:**
$$(a + bi) + (c + di) = (a + c) + (b + d)i$$

**Subtraction:**
$$(a + bi) - (c + di) = (a - c) + (b - d)i$$

**Multiplication:**
$$(a + bi)(c + di) = ac + adi + bci + bdi^2 = (ac - bd) + (ad + bc)i$$

---

**Division - CRITICAL METHOD**

To divide complex numbers, multiply both numerator and denominator by the conjugate of the denominator.

For $\frac{a + bi}{c + di}$:

1. Conjugate of denominator: $c - di$
2. Multiply by conjugate:
$$\frac{a + bi}{c + di} × \frac{c - di}{c - di} = \frac{(a + bi)(c - di)}{c^2 + d^2}$$

**Example:**

$$\frac{3 + 2i}{1 - i} = \frac{(3 + 2i)(1 + i)}{(1 - i)(1 + i)} = \frac{3 + 3i + 2i + 2i^2}{1 + 1} = \frac{1 + 5i}{2}$$

#### 3.3 Different Forms of Complex Numbers

**Cartesian Form:**
$$z = x + iy$$

**Polar Form:**
$$z = r(\cos θ + i\sin θ)$$

where:
- **Modulus:** $r = \lvert z\rvert = \sqrt{x^2 + y^2}$
- **Argument:** $θ = \arg(z) = \tan^{-1}(y/x)$ (adjusted for quadrant)

---

**Conversion Examples**

*Cartesian to Polar:*

For $3 + 4i$:
- $r = \sqrt{9 + 16} = 5$
- $θ = \tan^{-1}(4/3) ≈ 53.13°$

*Polar to Cartesian:*

For $2(\cos 60° + i\sin 60°)$:
$$2(0.5 + i\tfrac{\sqrt{3}}{2}) = 1 + i\sqrt{3}$$

#### 3.4 Complex Conjugates

**Definition:**

If $z = x + iy$, then the conjugate $z^* = x - iy$

**Properties:**

- $$z + z^* = 2\Re(z)$$
- $$z - z^* = 2i\Im(z)$$
- $$zz^* = \lvert z\rvert^2 = x^2 + y^2$$

#### 3.5 Argand Diagram and Loci

**Basic Loci Equations**

**Circle:**
$$\lvert z - a\rvert = r$$

- Center: point representing complex number $a$
- Radius: $r$

---

**Perpendicular Bisector:**
$$\lvert z - a\rvert = \lvert z - b\rvert$$

Points equidistant from $a$ and $b$

---

**Ray from point:**
$$\arg(z - a) = θ$$

Fixed angle $θ$ emanating from point $a$

---

**Example Problems**

1. $\lvert z - (2 + i)\rvert = 3$
   - Circle center (2, 1), radius 3

2. $\arg(z - 1) = \frac{π}{4}$
   - Ray from (1, 0) at 45°

3. $\lvert z - 3\rvert = \lvert z + 2i\rvert$
   - Perpendicular bisector of points (3, 0) and (0, -2)

---

### 4. Roots and Coefficients (FP1.4)

#### 4.1 Fundamental Relationships

For quadratic equation $$ax^2 + bx + c = 0$$ with roots $α$ and $β$:

**Sum of roots:**
$$α + β = -\frac{b}{a}$$

**Product of roots:**
$$αβ = \frac{c}{a}$$

#### 4.2 Advanced Manipulations

**Common Expressions** (derived from sum and product):

$$α^2 + β^2 = (α + β)^2 - 2αβ$$

$$α^3 + β^3 = (α + β)^3 - 3αβ(α + β)$$

$$α^4 + β^4 = (α^2 + β^2)^2 - 2(αβ)^2$$

$$\frac{1}{α} + \frac{1}{β} = \frac{α + β}{αβ}$$

#### 4.3 Forming New Equations

**Process** for equations with transformed roots:

1. Let $S = α + β$ and $P = αβ$ (from original equation)
2. Express new sum and product in terms of $S$ and $P$
3. Construct new quadratic: $$x^2 - (\text{new sum})x + (\text{new product}) = 0$$

**Example:** Original equation has roots $α, β$. Find equation with roots $α^3, β^3$

**New sum:**
$$α^3 + β^3 = S^3 - 3PS$$

**New product:**
$$α^3β^3 = (αβ)^3 = P^3$$

**New equation:**
$$x^2 - (S^3 - 3PS)x + P^3 = 0$$

---

### 5. Series (FP1.5)

#### 5.1 Essential Summation Formulas

**Must Memorize** these three fundamental results:

$$\sum_{r=1}^n r = \frac{n(n+1)}{2}$$

$$\sum_{r=1}^n r^2 = \frac{n(n+1)(2n+1)}{6}$$

$$\sum_{r=1}^n r^3 = \left[\frac{n(n+1)}{2}\right]^2$$

#### 5.2 Method of Differences

**Principle:** Express terms as differences of consecutive terms in a sequence

**General Approach**

1. Look for pattern: $u_r = f(r) - f(r+1)$ or $u_r = f(r+1) - f(r)$
2. Write out terms to see the cancellation pattern
3. Sum telescopes to first minus last term

---

**Classic Example:**

Find $\sum_{r=1}^n \frac{1}{r(r+1)}$

**Step 1:** Use partial fractions
$$\frac{1}{r(r+1)} = \frac{1}{r} - \frac{1}{r+1}$$

**Step 2:** Write out terms
$$\left(\frac{1}{1} - \frac{1}{2}\right) + \left(\frac{1}{2} - \frac{1}{3}\right) + \cdots + \left(\frac{1}{n} - \frac{1}{n+1}\right)$$

**Step 3:** Telescoping cancellation
$$1 - \frac{1}{n+1} = \frac{n}{n+1}$$

#### 5.3 Advanced Summation Examples

**Example 1:**

Find $\sum_{r=1}^n r(r+1)(r+2)$

**Key observation:** Notice that
$$r(r+1)(r+2) = \frac{1}{4}[r(r+1)(r+2)(r+3) - (r-1)r(r+1)(r+2)]$$

Using telescoping sum:
$$\sum_{r=1}^n r(r+1)(r+2) = \frac{1}{4}n(n+1)(n+2)(n+3)$$

---

**Example 2:**

Find $\sum_{r=1}^n (2r-1)(2r+1)$

**Method:** Use method of differences to show that $(2r-1)(2r+1)$ can be expressed as a telescoping series.

After applying the telescoping technique, the sum simplifies to a manageable form.

---

### 6. Trigonometry (FP1.6) - General Solutions

#### 6.1 Solving Trigonometric Equations

**General Solutions Formulas:**

$$\sin θ = k \quad \Rightarrow \quad θ = nπ + (-1)^n α$$ 

where $α = \sin^{-1}k$

$$\cos θ = k \quad \Rightarrow \quad θ = 2nπ ± α$$ 

where $α = \cos^{-1}k$

$$\tan θ = k \quad \Rightarrow \quad θ = nπ + α$$ 

where $α = \tan^{-1}k$

---

#### 6.2 Exact Values - Must Know

**Standard Angles:**

| Angle | $\sin$ | $\cos$ | $\tan$ |
|-------|--------|--------|--------|
| $0°$ | $0$ | $1$ | $0$ |
| $30°$ | $\frac{1}{2}$ | $\frac{\sqrt{3}}{2}$ | $\frac{1}{\sqrt{3}}$ |
| $45°$ | $\frac{1}{\sqrt{2}}$ | $\frac{1}{\sqrt{2}}$ | $1$ |
| $60°$ | $\frac{\sqrt{3}}{2}$ | $\frac{1}{2}$ | $\sqrt{3}$ |
| $90°$ | $1$ | $0$ | undefined |

---

#### 6.3 Worked Examples

**Example 1:** Solve $\sin 2x = \frac{\sqrt{3}}{2}$

**Step 1:** Reference angle
$$\sin^{-1}\left(\frac{\sqrt{3}}{2}\right) = \frac{π}{3}$$

**Step 2:** General solution for $2x$
$$2x = nπ + (-1)^n\frac{π}{3}$$

**Step 3:** Solve for $x$
$$x = \frac{nπ}{2} + (-1)^n\frac{π}{6}$$

---

**Example 2:** Solve $\cos(x + \frac{π}{6}) = -\frac{1}{\sqrt{2}}$

**Step 1:** Reference angle (positive value)
$$\cos^{-1}\left(\frac{1}{\sqrt{2}}\right) = \frac{π}{4}$$

**Step 2:** Since cosine is negative, angles in quadrants II and III
$$x + \frac{π}{6} = 2nπ ± \frac{3π}{4}$$

**Step 3:** Solve for $x$
$$x = 2nπ + \frac{3π}{4} - \frac{π}{6} \quad \text{or} \quad x = 2nπ - \frac{3π}{4} - \frac{π}{6}$$

---

### 7. Calculus (FP1.7)

#### 7.1 First Principles Differentiation

**Definition:**
$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

**Example:** Find derivative of $f(x) = x^2$ from first principles

**Step 1:** Calculate $f(x+h)$
$$f(x+h) = (x+h)^2 = x^2 + 2xh + h^2$$

**Step 2:** Find the difference
$$f(x+h) - f(x) = 2xh + h^2$$

**Step 3:** Divide by $h$
$$\frac{f(x+h) - f(x)}{h} = 2x + h$$

**Step 4:** Take limit as $h \to 0$
$$\lim_{h \to 0} (2x + h) = 2x$$

Therefore, $f'(x) = 2x$

#### 7.2 Connected Rates of Change

Using the chain rule to relate rates of change of different variables:

$$\frac{dy}{dt} = \frac{dy}{dx} × \frac{dx}{dt}$$

**Example:** Pressure-Volume Relationship

If $P = kV^3$ and volume $V$ is changing with time:

$$\frac{dP}{dt} = \frac{dP}{dV} × \frac{dV}{dt} = 3kV^2 × \frac{dV}{dt}$$

This shows how the rate of change of pressure depends on both the current volume and the rate at which volume is changing.

#### 7.3 Small Changes

For small changes in independent variable, we can estimate changes in dependent variable:

$$δy ≈ \frac{dy}{dx} × δx$$

**Example:** Estimating Change

For $y = 20x^{-2}$, estimate change in $y$ when $x$ increases from $5$ to $5.1$.

**Step 1:** Find the derivative
$$\frac{dy}{dx} = -40x^{-3} = -\frac{40}{x^3}$$

**Step 2:** Evaluate at $x = 5$
$$\frac{dy}{dx}\bigg|_{x=5} = -\frac{40}{125} = -0.32$$

**Step 3:** Calculate small change
$$δx = 5.1 - 5 = 0.1$$

**Step 4:** Estimate $δy$
$$δy ≈ -0.32 × 0.1 = -0.032$$

Therefore, $y$ decreases by approximately $0.032$ when $x$ increases to $5.1$.

#### 7.4 Improper Integrals

**Type 1**: Infinite limits $$\int_a^∞ f(x)dx = \lim\limits_{b \to ∞} \int_a^b f(x)dx$$

**Type 2**: Infinite integrand $$\int_a^b f(x)dx$$ where $f(x) \rightarrow \infty$ at some point

**Examples**:
1. $$\int_0^4 \frac{1}{\sqrt{x}}dx = \lim_{a \to 0} \int_a^4 x^{-\frac{1}{2}}dx = \lim_{a \to 0} [2\sqrt{x}]_a^4 = 4$$
2. $$\int_4^\infty x^{-\frac{3}{2}}dx = \lim_{b \to \infty} [-\frac{2}{\sqrt{x}}]_4^b = 1$$

---

# Further Pure maths, Statistics and Mechanics(FPSM1)

### 8. Matrices and Transformations (FPP1.1)

#### 8.1 Matrix Algebra Fundamentals

Matrices are rectangular arrays of numbers that can be combined using specific algebraic rules. Unlike regular multiplication, matrix operations follow strict dimensional constraints.

**Addition and Subtraction:**
Matrices can only be added or subtracted if they have identical dimensions. We simply add or subtract corresponding elements:
$$\begin{bmatrix} a & b \\ c & d \end{bmatrix} + \begin{bmatrix} e & f \\ g & h \end{bmatrix} = \begin{bmatrix} a+e & b+f \\ c+g & d+h \end{bmatrix}$$

**Scalar Multiplication:**
When multiplying a matrix by a single number (scalar), multiply every element by that number:
$$k\begin{bmatrix} a & b \\ c & d \end{bmatrix} = \begin{bmatrix} ka & kb \\ kc & kd \end{bmatrix}$$

**Matrix Multiplication:**
For product $AB$ to exist, the number of columns in $A$ must equal the number of rows in $B$. When multiplying two 2×2 matrices:

$$\begin{bmatrix} a & b \\ c & d \end{bmatrix} \begin{bmatrix} e & f \\ g & h \end{bmatrix} = \begin{bmatrix} ae+bg & af+bh \\ ce+dg & cf+dh \end{bmatrix}$$

**Important:** Matrix multiplication is not commutative—$AB \neq BA$ in general.

#### 8.2 Identity and Inverse Matrices

**Identity Matrix ($I$):**
The identity matrix plays the same role for matrices as the number 1 does for ordinary multiplication. Any matrix multiplied by the identity matrix equals itself:
$$AI = IA = A$$

For 2×2 matrices: $I = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$

For 3×3 matrices: $I = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}$

**Inverse Matrices:**
The inverse of matrix $A$, denoted $A^{-1}$, satisfies $AA^{-1} = A^{-1}A = I$. For an inverse to exist, the determinant must be non-zero.

For a 2×2 matrix, if $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$ and $\det(A) \neq 0$:

$$A^{-1} = \frac{1}{ad-bc} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$$

**Key Properties:**
- $(AB)^{-1} = B^{-1}A^{-1}$ (note the order reversal)
- $(AB)^T = B^TA^T$ (transpose reverses order similarly)
- If $\det(A) = 0$, the matrix has no inverse (called singular)

#### 8.3 Determinants

The determinant is a special number associated with a square matrix that tells us important properties about the matrix, particularly whether it has an inverse and how it scales areas/volumes.

**2×2 Determinant:**
$$\det\begin{bmatrix} a & b \\ c & d \end{bmatrix} = ad - bc$$

**Geometric Interpretation:**
- The absolute value of the determinant equals the area scale factor of a geometric transformation
- Negative determinant indicates that the transformation includes a reflection (it reverses orientation)
- A determinant of zero means the matrix is singular and has no inverse

**Example:** For $\begin{bmatrix} 3 & 2 \\ 1 & 4 \end{bmatrix}$:
$$\det(A) = (3)(4) - (2)(1) = 12 - 2 = 10$$

This transformation scales areas by a factor of 10.

#### 8.4 Transformations in 2D

Two-dimensional transformations can be represented as matrices that modify the coordinates of points in a plane. By applying these matrices to position vectors, we can rotate, reflect, scale, and shear figures.

**Standard Transformation Matrices:**

| Transformation | Matrix |
|----------------|---------|
| Reflection in x-axis | $\begin{bmatrix} 1 & 0 \\\ 0 & -1 \end{bmatrix}$ |
| Reflection in y-axis | $\begin{bmatrix} -1 & 0 \\\ 0 & 1 \end{bmatrix}$ |
| Reflection in $y=x$ | $\begin{bmatrix} 0 & 1 \\\ 1 & 0 \end{bmatrix}$ |
| Rotation $θ$ anticlockwise | $\begin{bmatrix} \cos θ & -\sin θ \\\ \sin θ & \cos θ \end{bmatrix}$ |
| Enlargement (scale $k$) | $\begin{bmatrix} k & 0 \\\ 0 & k \end{bmatrix}$ |
| Stretch x-direction (scale $k$) | $\begin{bmatrix} k & 0 \\\ 0 & 1 \end{bmatrix}$ |

**Shear Transformations:**
Shear transformations skew figures in a particular direction while preserving area. The parameter $k$ determines the amount of shearing:

- **Shear parallel to x-axis**: $\begin{bmatrix} 1 & k \\\ 0 & 1 \end{bmatrix}$ — y-coordinate unchanged, x increases with y-value
- **Shear parallel to y-axis**: $\begin{bmatrix} 1 & 0 \\\ k & 1 \end{bmatrix}$ — x-coordinate unchanged, y increases with x-value

**Composition of Transformations:**
When applying multiple transformations in sequence, multiply the transformation matrices in the order applied (right to left). For example, rotation followed by reflection is represented as $R_{\text{reflect}} × M_{\text{rotate}}$.

#### 8.5 Invariant Points and Lines

An invariant point is one that doesn't move under a transformation, while an invariant line is a line where all points on it transform to other points on the same line.

**Key Definitions:**
- **Invariant Point**: A point that maps to itself, so $M\vec{p} = \vec{p}$ where $\vec{p}$ is the position vector
- **Invariant Line**: A line where every point on it maps to another point on the same line
- **Line of Invariant Points**: A special case where every single point on the line is fixed (maps to itself)

**Finding Invariant Lines:**
For transformation matrix $M$, a line $y = mx + c$ is invariant if when we apply the transformation to a general point $(x, y)$ on the line, the resulting point $(X, Y)$ also lies on the same line.

**Method:**
1. Write the transformation: $\begin{bmatrix} X \\\ Y \end{bmatrix} = \begin{bmatrix} a & b \\\ c & d \end{bmatrix} \begin{bmatrix} x \\\ y \end{bmatrix}$
2. Substitute $y = mx + c$ into the transformation
3. Require that $Y = mX + c$ for the same values of $m$ and $c$
4. Solve the resulting system for $m$ and $c$

**Finding Invariant Points:**
Solve: $\begin{bmatrix} a & b \\\ c & d \end{bmatrix} \begin{bmatrix} x \\\ y \end{bmatrix} = \begin{bmatrix} x \\\ y \end{bmatrix}$

This gives us $(a-1)x + by = 0$ and $cx + (d-1)y = 0$. If the determinant of the system is non-zero, the only solution is the origin $(0,0)$.

<!-- ---

### 9. Linear Graphs (FPP1.2)

Many experimental and natural relationships are non-linear. By clever manipulation of variables, we can transform these relationships into linear form, which enables us to easily extract parameters and test whether the relationship fits the expected model.

#### 9.1 Reducing Non-Linear Relationships to Linear Form

**Power Law Relationships:** $y = ax^n$

When we suspect a power law relationship, take logarithms of both sides:
$$\log y = \log a + n \log x$$

Setting $Y = \log y$ and $X = \log x$:
$$Y = nX + \log a$$

This is linear! Plot $Y$ against $X$ to get a straight line where:
- **Gradient** = $n$ (the power)
- **Intercept** = $\log a$

**Exponential Relationships:** $y = ab^x$

Taking logarithms:
$$\log y = \log a + x \log b$$

Setting $Y = \log y$:
$$Y = (\log b)x + \log a$$

Plot $Y$ against $x$:
- **Gradient** = $\log b$
- **Intercept** = $\log a$

**Polynomial Relationships:** $y = ax^3 + b$

This is already close to linear. Let $X = x^3$:
$$y = aX + b$$

Plot $y$ against $X = x^3$ directly for a linear relationship.

**Reciprocal Relationships:** $\frac{1}{x} + \frac{1}{y} = k$

Rearrange to solve for one variable:
$$\frac{1}{y} = k - \frac{1}{x}$$

Let $Y = \frac{1}{y}$ and $X = \frac{1}{x}$:
$$Y = -X + k$$

Plot $Y$ against $X$ to obtain a straight line.

#### 9.2 Worked Example

Experimental data is suspected to follow the relationship $y^2 = ax^3 + b$, where $a$ and $b$ are constants to be determined. We measure several $(x,y)$ values and need to find both the relationship and the parameters.

**Step 1: Identify the Transformation**
The given relationship is $y^2 = ax^3 + b$, which is linear in $y^2$ and $x^3$.

**Step 2: Transform the Variables**
Let $Y = y^2$ and $X = x^3$. The relationship becomes:
$$Y = aX + b$$

**Step 3: Prepare the Data**
For each measured pair $(x,y)$:
- Calculate $X = x^3$
- Calculate $Y = y^2$
- Record the transformed pair $(X,Y)$

**Step 4: Plot the Transformed Data**
Plot all transformed points $(X,Y)$ on a graph. If the hypothesis is correct, these points should lie approximately on a straight line.

**Step 5: Find the Line of Best Fit**
Using linear regression or graphical methods:
- **Gradient** = $a$
- **Intercept** = $b$

**Step 6: Express Results**
The values of $a$ and $b$ give us the complete relationship: $y^2 = ax^3 + b$ -->

<!-- ---

### 10. Numerical Methods (FPP1.3)

Numerical methods provide techniques to find approximate solutions to problems that are difficult or impossible to solve analytically. These include finding roots of equations, approximating values, and solving differential equations numerically.

#### 10.1 Root Location and the Intermediate Value Theorem

**Sign Change Method:**
If a continuous function $f(x)$ has opposite signs at two points, there must be at least one root between them:

$$\text{If } f(x) \text{ is continuous on } [a,b] \text{ and } f(a) × f(b) < 0, \text{ then } \exists c ∈ (a,b): f(c) = 0$$

**Method:**
1. Evaluate $f(a)$ and $f(b)$
2. Check that signs are opposite (product is negative)
3. A root exists between $a$ and $b$
4. This is the starting point for root-finding algorithms

#### 10.2 Root-Finding Algorithms

**Method 1: Interval Bisection (Most Reliable)**

This method repeatedly halves the interval containing the root:

**Step 1:** Start with interval $[a,b]$ where $f(a)f(b) < 0$

**Step 2:** Calculate midpoint
$$c = \frac{a+b}{2}$$

**Step 3:** Evaluate $f(c)$
- If $f(a)f(c) < 0$, the root is in $[a,c]$, set $b = c$
- If $f(c)f(b) < 0$, the root is in $[c,b]$, set $a = c$

**Step 4:** Repeat steps 2-3 until the interval is sufficiently small

**Advantages:** Always converges; no derivative needed  
**Disadvantages:** Slow convergence

**Method 2: Linear Interpolation**

Instead of bisecting at the midpoint, draw a straight line between $(a,f(a))$ and $(b,f(b))$ and find where it crosses the x-axis:

$$c = a - f(a) × \frac{b-a}{f(b)-f(a)}$$

**Step 1:** Calculate $c$ using the formula above

**Step 2:** Evaluate $f(c)$ and use sign change to select new interval $[a,c]$ or $[c,b]$

**Step 3:** Repeat until convergence

**Advantages:** Faster than bisection when applicable  
**Disadvantages:** Can fail if $f(b) ≈ f(a)$ (very flat)

**Method 3: Newton-Raphson (Fastest, But Requires Care)**

This method uses the derivative to predict the next approximation:

$$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$$

**Step 1:** Choose initial estimate $x_0$ (must be reasonably close to root)

**Step 2:** Calculate function value and derivative at $x_n$

**Step 3:** Apply formula to get $x_{n+1}$

**Step 4:** Repeat until $|x_{n+1} - x_n|$ is sufficiently small

**Advantages:** Quadratic convergence (very fast) near the root  
**Disadvantages:** Requires derivative; needs good initial guess; can diverge with poor starting point

#### 10.3 Numerical Differential Equations - Euler's Method

For differential equations that don't have closed-form solutions, Euler's method provides a simple numerical approach. Starting from an initial condition, we take small steps and use the derivative to approximate the next value.

**The Algorithm:**
Given a differential equation $\frac{dy}{dx} = f(x,y)$ with initial condition $(x_0, y_0)$ and step size $h$:

$$x_{n+1} = x_n + h$$
$$y_{n+1} = y_n + hf(x_n, y_n)$$

**Interpretation:**
- At each point $(x_n, y_n)$, the slope is $f(x_n, y_n)$
- We move horizontally by $h$
- We move vertically by $h × \text{(slope)}$
- The new point $(x_{n+1}, y_{n+1})$ is our approximation

**Worked Example:**

Solve $\frac{dy}{dx} = x + y$, with $y(0) = 1$, using step size $h = 0.1$

**Starting Point:** $(x_0, y_0) = (0, 1)$

**Step 1:** 
- Slope: $f(0,1) = 0 + 1 = 1$
- $x_1 = 0 + 0.1 = 0.1$
- $y_1 = 1 + 0.1(1) = 1.1$
- Point: $(0.1, 1.1)$

**Step 2:**
- Slope: $f(0.1, 1.1) = 0.1 + 1.1 = 1.2$
- $x_2 = 0.1 + 0.1 = 0.2$
- $y_2 = 1.1 + 0.1(1.2) = 1.22$
- Point: $(0.2, 1.22)$

**Step 3:**
- Slope: $f(0.2, 1.22) = 0.2 + 1.22 = 1.42$
- $x_3 = 0.2 + 0.1 = 0.3$
- $y_3 = 1.22 + 0.1(1.42) = 1.362$
- Point: $(0.3, 1.362)$

**Continue iteratively:** Repeat the process for additional steps, each time using the new values to calculate the next slope.

**Accuracy Considerations:**
- Smaller step size $h$ → more accurate but more computations
- Larger step size $h$ → fewer computations but less accurate
- Error accumulates as we take more steps (especially for larger intervals) -->