---
title: AS Further Mathematics
layout: subjects
mathjax: true
grade: as
subject: asfm
permalink: /alevel/as-further-mathematics/
redirect_from:
  - /alevel/asfm/
  - /alevel/asfm/index.html
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

**Ellipse:** $$\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$$

- **Major axis length:** $2a$
- **Minor axis length:** $2b$
- **Foci:** $(±c, 0)$ where $c^2 = a^2 - b^2$

**Hyperbola:** $$\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$$

- **Asymptotes:** $y = ±\frac{b}{a}x$
- **Foci:** $(±c, 0)$ where $c^2 = a^2 + b^2$

**Rectangular Hyperbola:** $$xy = c^2$$

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

(Tips: Real Part function and Imaginary Part function looks like $$\Re(z)$$ and $$\Im(z)$$ in computer respectively.)

**Foundation Concept**: $$\sqrt{-1} = i$$where$$i^2 = -1$$

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
Conversion 
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

**Perpendicular Bisector:**
$$\lvert z - a\rvert = \lvert z - b\rvert$$

Points equidistant from $a$ and $b$

**Ray from point:**
$$\arg(z - a) = θ$$

Fixed angle $θ$ emanating from point $a$

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

**Classic Example:**

Find $\sum_{r=1}^n \frac{1}{r(r+1)}$

**Step 1:** Use partial fractions
$$\frac{1}{r(r+1)} = \frac{1}{r} - \frac{1}{r+1}$$

**Step 2:** Write out terms
$$\left(\frac{1}{1} - \frac{1}{2}\right) + \left(\frac{1}{2} - \frac{1}{3}\right) + \cdots + \left(\frac{1}{n} - \frac{1}{n+1}\right)$$

**Step 3:** Telescoping cancellation
$$1 - \frac{1}{n+1} = \frac{n}{n+1}$$

---

#### 5.3 Advanced Summation Examples

**Example 1:**

Find $\sum_{r=1}^n r(r+1)(r+2)$

**Key observation:** Notice that
$$r(r+1)(r+2) = \frac{1}{4}[r(r+1)(r+2)(r+3) - (r-1)r(r+1)(r+2)]$$

Using telescoping sum:
$$\sum_{r=1}^n r(r+1)(r+2) = \frac{1}{4}n(n+1)(n+2)(n+3)$$

**Example 2:**

Find $\sum_{r=1}^n (2r-1)(2r+1)$

**Method:** Use method of differences to show that $(2r-1)(2r+1)$ can be expressed as a telescoping series.

After applying the telescoping technique, the sum simplifies to a manageable form.

---

### 6. Trigonometry (FP1.6) - General Solutions

#### 6.1 Solving Trigonometric Equations

**General Solutions Formulas:**

$$\sin θ = k \quad \Rightarrow \quad θ = nπ + (-1)^n α$$ 

$$\text{where } α = \sin^{-1}k$$

$$\cos θ = k \quad \Rightarrow \quad θ = 2nπ ± α$$ 

$$\text{where } α = \cos^{-1}k$$

$$\tan θ = k \quad \Rightarrow \quad θ = nπ + α$$ 

$$\text{where } α = \tan^{-1}k$$

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

---

#### 7.2 Connected Rates of Change

Using the chain rule to relate rates of change of different variables:

$$\frac{dy}{dt} = \frac{dy}{dx} × \frac{dx}{dt}$$

**Example:** Pressure-Volume Relationship

If $P = kV^3$ and volume $V$ is changing with time:

$$\frac{dP}{dt} = \frac{dP}{dV} × \frac{dV}{dt} = 3kV^2 × \frac{dV}{dt}$$

This shows how the rate of change of pressure depends on both the current volume and the rate at which volume is changing.

---

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

---

#### 7.4 Improper Integrals

**Type 1**: Infinite limits $$\int_a^∞ f(x)dx = \lim\limits_{b \to ∞} \int_a^b f(x)dx$$

**Type 2**: Infinite integrand $$\int_a^b f(x)dx$$ where $f(x) \rightarrow \infty$ at some point

**Examples**:
1. $$\int_0^4 \frac{1}{\sqrt{x}}dx = \lim_{a \to 0} \int_a^4 x^{-\frac{1}{2}}dx = \lim_{a \to 0} [2\sqrt{x}]_a^4 = 4$$
2. $$\int_4^\infty x^{-\frac{3}{2}}dx = \lim_{b \to \infty} [-\frac{2}{\sqrt{x}}]_4^b = 1$$

---

# Further Pure Math, Statistics and Mechanics (FPSM1)

## FPP1.1: Matrices and Transformations

### 1.1 Matrix Algebra

#### Definitions
A **matrix** is a rectangular array of numbers. An $m \times n$ matrix has $m$ rows and $n$ columns.

#### Addition and Subtraction
Matrices can be added or subtracted only if they have the same dimensions. Add or subtract corresponding elements.

**Example**:
$$\begin{pmatrix} 2 & -1 \\ 3 & 0 \end{pmatrix} + \begin{pmatrix} 1 & 4 \\ -2 & 5 \end{pmatrix} = \begin{pmatrix} 3 & 3 \\ 1 & 5 \end{pmatrix}$$

#### Scalar Multiplication
Multiply every element by the scalar.

**Example**:
$$3\begin{pmatrix} 2 & -1 \\ 0 & 4 \end{pmatrix} = \begin{pmatrix} 6 & -3 \\ 0 & 12 \end{pmatrix}$$

#### Matrix Multiplication
For $A_{m \times n}$ and $B_{n \times p}$, the product $C = AB$ is $m \times p$ where:
$$c_{ij} = \sum_{k=1}^{n} a_{ik} b_{kj}$$

**Important**: Matrix multiplication is **not commutative** ($AB \neq BA$ in general).

**Example**:
$$\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} \begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix} = \begin{pmatrix} 1\times5 + 2\times7 & 1\times6 + 2\times8 \\ 3\times5 + 4\times7 & 3\times6 + 4\times8 \end{pmatrix} = \begin{pmatrix} 19 & 22 \\ 43 & 50 \end{pmatrix}$$

#### Identity Matrix
The $n \times n$ identity matrix $I_n$ has 1s on the main diagonal and 0s elsewhere.
$$I_2 = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}, \quad I_3 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$

For any matrix $A$, $AI = IA = A$ (provided dimensions are compatible).

#### Inverse of a $2 \times 2$ Matrix
For $A = \begin{pmatrix} a & b \\\\ c & d \end{pmatrix}$:
- **Determinant**: $\det(A) = ad - bc$
- If $\det(A) \neq 0$, $A$ is **non-singular** and has an inverse:
$$A^{-1} = \frac{1}{ad - bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$$

**Properties**:
- $AA^{-1} = A^{-1}A = I$
- $(AB)^{-1} = B^{-1}A^{-1}$
- $(A^{-1})^{-1} = A$
- $\det(A^{-1}) = \frac{1}{\det(A)}$

**Example**: Find the inverse of $A = \begin{pmatrix} 2 & 1 \\\\ 5 & 3 \end{pmatrix}$.

$\det(A) = 2\times3 - 1\times5 = 6 - 5 = 1$

$$A^{-1} = \frac{1}{1} \begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix} = \begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}$$

#### Transpose of a Matrix
The transpose $A^T$ is obtained by swapping rows and columns.
- $(A^T)\_{ij} = A\_{ji}$
- $(AB)^T = B^T A^T$
- $(A^{-1})^T = (A^T)^{-1}$

---

### 1.2 Transformations in the $x$-$y$ Plane

A $2 \times 2$ matrix $M$ represents a linear transformation mapping a point $(x,y)$ to $(x',y')$:
$$\begin{pmatrix} x' \\ y' \end{pmatrix} = M \begin{pmatrix} x \\ y \end{pmatrix}$$

#### Standard Transformation Matrices

| Transformation | Matrix | Effect on Point |
|----------------|--------|-----------------|
| **Rotation** (anticlockwise) | | |
| $90^\circ$ | $\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \end{pmatrix}$ | $(x,y) \to (-y,x)$ |
| $180^\circ$ | $\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \end{pmatrix}$ | $(x,y) \to (-x,-y)$ |
| $270^\circ$ ($-90^\circ$) | $\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \end{pmatrix}$ | $(x,y) \to (y,-x)$ |
| $\theta$ | $\begin{pmatrix} \cos\theta & -\sin\theta \\\\ \sin\theta & \cos\theta \end{pmatrix}$ | $(x,y) \to (x\cos\theta - y\sin\theta, x\sin\theta + y\cos\theta)$ |
| **Reflection** | | |
| In $x$-axis | $\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \end{pmatrix}$ | $(x,y) \to (x,-y)$ |
| In $y$-axis | $\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \end{pmatrix}$ | $(x,y) \to (-x,y)$ |
| In $y = x$ | $\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \end{pmatrix}$ | $(x,y) \to (y,x)$ |
| In $y = -x$ | $\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \end{pmatrix}$ | $(x,y) \to (-y,-x)$ |
| **Stretch** | | |
| $k$ parallel to $x$-axis | $\begin{pmatrix} k & 0 \\\\ 0 & 1 \end{pmatrix}$ | $(x,y) \to (kx,y)$ |
| $k$ parallel to $y$-axis | $\begin{pmatrix} 1 & 0 \\\\ 0 & k \end{pmatrix}$ | $(x,y) \to (x,ky)$ |
| **Enlargement** (scale factor $k$) | $\begin{pmatrix} k & 0 \\\\ 0 & k \end{pmatrix}$ | $(x,y) \to (kx,ky)$ |
| **Shear** | | |
| Parallel to $x$-axis (factor $k$) | $\begin{pmatrix} 1 & k \\\\ 0 & 1 \end{pmatrix}$ | $(x,y) \to (x+ky, y)$ |
| Parallel to $y$-axis (factor $k$) | $\begin{pmatrix} 1 & 0 \\\\ k & 1 \end{pmatrix}$ | $(x,y) \to (x, kx+y)$ |

#### Combinations of Transformations
If transformation $T_1$ has matrix $M_1$ and $T_2$ has matrix $M_2$, then applying $T_1$ **followed by** $T_2$ gives:
$$\begin{pmatrix} x' \\ y' \end{pmatrix} = M_2 M_1 \begin{pmatrix} x \\ y \end{pmatrix}$$
**Order matters**: $M_2 M_1$ means apply $M_1$ first, then $M_2$.

**Example**: Find the matrix for a rotation of $90^\circ$ anticlockwise followed by a reflection in the $x$-axis.

Rotation $90^\circ$: $R = \begin{pmatrix} 0 & -1 \\\\ 1 & 0 \end{pmatrix}$

Reflection in $x$-axis: $S = \begin{pmatrix} 1 & 0 \\\\ 0 & -1 \end{pmatrix}$

Combined: $SR = \begin{pmatrix} 1 & 0 \\\\ 0 & -1 \end{pmatrix} \begin{pmatrix} 0 & -1 \\\\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 0 & -1 \\\\ -1 & 0 \end{pmatrix}$

#### Determinant and Area Scale Factor
For a $2 \times 2$ matrix $M$:
- $\lvert \det(M) \rvert$ = factor by which area is scaled
- If $\det(M) = 0$, the transformation maps the plane onto a line (singular)
- If $\det(M) < 0$, orientation is reversed (e.g., includes a reflection)

**Example**: The matrix $\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \end{pmatrix}$ has determinant $6$, so area is multiplied by $6$.

---

### 1.3 Invariant Points and Lines

#### Invariant Points
A point $\mathbf{x}$ is **invariant** if $M\mathbf{x} = \mathbf{x}$.

**Method**: Solve $(M - I)\mathbf{x} = \mathbf{0}$.

**Example**: For $M = \begin{pmatrix} 0 & 1 \\\\ 1 & 0 \end{pmatrix}$ (reflection in $y=x$):

$(M - I) = \begin{pmatrix} -1 & 1 \\\\ 1 & -1 \end{pmatrix}$

Solve $\begin{pmatrix} -1 & 1 \\\\ 1 & -1 \end{pmatrix} \begin{pmatrix} x \\\\ y \end{pmatrix} = \begin{pmatrix} 0 \\\\ 0 \end{pmatrix}$ gives $-x + y = 0$ and $x - y = 0$, so $y = x$.

Thus all points on the line $y = x$ are invariant (the mirror line itself).

#### Lines of Invariant Points
A **line of invariant points** means every point on that line is individually invariant (maps to itself).

#### Invariant Lines
A line (through the origin) is **invariant** if every point on the line maps to another point on the same line (not necessarily the same point).

**Method**: Let the line be $y = mx$. Any point on it is $(t, mt)$. After transformation, we require the image to satisfy $y' = m x'$.

**Example**: For $M = \begin{pmatrix} 2 & 0 \\\\ 0 & 1 \end{pmatrix}$ (stretch in $x$), find invariant lines.

Let $(x,y) = (t, mt)$. Then $(x',y') = (2t, mt)$.

For this to lie on $y = mx$: $mt = m(2t) \Rightarrow mt = 2mt \Rightarrow mt(1-2) = 0 \Rightarrow -mt = 0$.

So either $m = 0$ or $t = 0$ (trivial). Thus $m = 0$ is a solution.

Also check vertical lines $x = 0$: $(0,t) \to (0,t)$ maps to itself, so $x = 0$ is also invariant.

Thus invariant lines: $y = 0$ and $x = 0$.

---

## FPP1.2: Linear Graphs – Reducing to Linear Form

### 2.1 Transforming Non-Linear Relationships

When experimental data suggests a relationship of the form $y = kx^n$ or $y = k \cdot a^x$, we can take logarithms to obtain a linear equation.

#### Case 1: Power Law $y = kx^n$
Take natural logs (or $\log_{10}$):
$$\ln y = \ln k + n \ln x$$
Plot $\ln y$ against $\ln x$: gradient $= n$, intercept $= \ln k$.

#### Case 2: Exponential Law $y = k \cdot a^x$
Take logs:
$$\ln y = \ln k + x \ln a$$
Plot $\ln y$ against $x$: gradient $= \ln a$, intercept $= \ln k$.

#### Case 3: Reciprocal Relationship $\frac{1}{y} = a + \frac{b}{x}$
Plot $\frac{1}{y}$ against $\frac{1}{x}$: gradient $= b$, intercept $= a$.

#### Case 4: Quadratic Form $y^2 = ax^3 + b$
Plot $y^2$ against $x^3$: gradient $= a$, intercept $= b$.

**Worked Example**:
Experimental data gives:

| $x$ | 1 | 2 | 3 | 4 | 5 |
|-----|---|---|---|---|---|
| $y$ | 2.5 | 10.0 | 22.5 | 40.0 | 62.5 |

Find a relationship of the form $y = kx^n$.

**Solution**:
Take logs:

| $\ln x$ | 0 | 0.693 | 1.099 | 1.386 | 1.609 |
|---------|---|---|---|---|---|
| $\ln y$ | 0.916 | 2.303 | 3.114 | 3.689 | 4.135 |

Calculate gradient: $n = \frac{4.135 - 0.916}{1.609 - 0} = \frac{3.219}{1.609} = 2.00$
Intercept: $\ln k = 0.916$, so $k = e^{0.916} = 2.5$
Thus $y = 2.5x^2$.

---

## FPP1.3: Numerical Methods

### 3.1 Location of Roots

If $f(x)$ is continuous on $[a,b]$ and $f(a)$ and $f(b)$ have opposite signs, then there is at least one root in $(a,b)$.

### 3.2 Interval Bisection

**Algorithm**:
1. Find interval $[a,b]$ where $f(a)f(b) < 0$
2. Calculate midpoint $c = \frac{a+b}{2}$
3. Evaluate $f(c)$
4. If $f(c) = 0$, root found
5. If $f(a)f(c) < 0$, new interval $[a,c]$; else $[c,b]$
6. Repeat until interval is sufficiently small

**Example**: Find root of $f(x) = x^3 - x - 1$ in $[1,2]$.

| Iteration | a | b | c | f(c) |
|-----------|---|---|---|------|
| 1 | 1 | 2 | 1.5 | 0.875 |
| 2 | 1 | 1.5 | 1.25 | -0.297 |
| 3 | 1.25 | 1.5 | 1.375 | 0.225 |
| 4 | 1.25 | 1.375 | 1.3125 | -0.052 |
| 5 | 1.3125 | 1.375 | 1.34375 | 0.083 |

After 5 iterations, root ≈ 1.324 (accurate to 0.03).

### 3.3 Linear Interpolation

Use similar triangles to estimate root:
$$c = a - \frac{f(a)(b-a)}{f(b)-f(a)}$$

**Example**: For $f(x) = x^3 - x - 1$ on $[1,2]$:

$f(1) = -1$, $f(2) = 5$
$$c = 1 - \frac{(-1)(2-1)}{5 - (-1)} = 1 - \frac{-1}{6} = 1 + \frac{1}{6} = 1.1667$$

This is often faster than bisection but less reliable.

### 3.4 Newton-Raphson Method

**Formula**:
$$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$$

**Geometric interpretation**: At each step, follow the tangent line to the $x$-axis.

**Example**: $f(x) = x^3 - x - 1$, $f'(x) = 3x^2 - 1$

Start with $x_0 = 1.5$:
$x_1 = 1.5 - \frac{1.5^3 - 1.5 - 1}{3(1.5)^2 - 1} = 1.5 - \frac{3.375 - 2.5}{6.75 - 1} = 1.5 - \frac{0.875}{5.75} = 1.5 - 0.1522 = 1.3478$

$x_2 = 1.3478 - \frac{1.3478^3 - 2.3478}{3(1.3478)^2 - 1} = 1.3478 - \frac{2.447 - 2.3478}{5.456 - 1} = 1.3478 - \frac{0.0992}{4.456} = 1.3478 - 0.0223 = 1.3255$

$x_3 = 1.3255 - \frac{1.3255^3 - 2.3255}{3(1.3255)^2 - 1} = 1.3255 - \frac{2.329 - 2.3255}{5.271 - 1} = 1.3255 - \frac{0.0035}{4.271} = 1.3255 - 0.00082 = 1.3247$

Converges rapidly to root ≈ 1.3247.

**Convergence conditions**:
- $f'(x) \neq 0$ near root
- Initial guess sufficiently close to root
- For multiple roots, convergence is slower

---

### 3.5 Euler's Method for Differential Equations

Given $\frac{dy}{dx} = f(x,y)$ with initial condition $(x_0, y_0)$ and step size $h$:

$$y_{n+1} \approx y_n + h \cdot f(x_n, y_n)$$
$$x_{n+1} = x_n + h$$

**Geometric interpretation**: Approximate curve by straight line segments with slope $f(x_n, y_n)$.

**Worked Example**:
Solve $\frac{dy}{dx} = x + y$ with $y(0) = 1$, step $h = 0.1$, find $y(0.3)$.

| $n$ | $x_n$ | $y_n$ | $f(x_n,y_n) = x_n + y_n$ | $y_{n+1} = y_n + hf$ |
|-----|-------|-------|-------------------------|---------------------|
| 0 | 0 | 1 | 0 + 1 = 1 | 1 + 0.1×1 = 1.1 |
| 1 | 0.1 | 1.1 | 0.1 + 1.1 = 1.2 | 1.1 + 0.1×1.2 = 1.22 |
| 2 | 0.2 | 1.22 | 0.2 + 1.22 = 1.42 | 1.22 + 0.1×1.42 = 1.362 |
| 3 | 0.3 | 1.362 | | |

Thus $y(0.3) \approx 1.362$.

**Accuracy**: Smaller $h$ gives better approximation but more steps.

---

## FS1.1: Bayes' Theorem

### 1.1 Conditional Probability Review

$$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$

**Multiplication Rule**: $P(A \cap B) = P(A \mid B)P(B) = P(B \mid A)P(A)$

### 1.2 Law of Total Probability

For a partition of the sample space into events $A_1, A_2, \dots, A_n$:
$$P(B) = \sum_{i=1}^n P(B \mid A_i)P(A_i)$$

### 1.3 Bayes' Theorem

$$P(A_i \mid B) = \frac{P(B \mid A_i)P(A_i)}{\sum_{j=1}^n P(B \mid A_j)P(A_j)}$$

For two events:
$$P(A \mid B) = \frac{P(B \mid A)P(A)}{P(B \mid A)P(A) + P(B \mid A')P(A')}$$

**Worked Example**:
A factory has three machines producing items:
- Machine A: 40% of output, 2% defective
- Machine B: 35% of output, 3% defective
- Machine C: 25% of output, 4% defective

An item is found defective. What is the probability it came from Machine A?

**Solution**:

$P(A) = 0.4$, $P(B) = 0.35$, $P(C) = 0.25$

$P(D \mid A) = 0.02$, $P(D \mid B) = 0.03$, $P(D \mid C) = 0.04$

$P(D) = 0.4\times0.02 + 0.35\times0.03 + 0.25\times0.04 = 0.008 + 0.0105 + 0.01 = 0.0285$

$P(A \mid D) = \frac{0.4 \times 0.02}{0.0285} = \frac{0.008}{0.0285} = 0.2807$

### 1.4 Tree Diagrams

Bayes' theorem problems are often solved using tree diagrams:
- First branch: probabilities of $A_i$
- Second branch: conditional probabilities of $B$ given $A_i$
- Multiply along branches to get joint probabilities
- Conditional probability = joint / total

---

## FS1.2: Uniform Distribution (Continuous)

### 2.1 Definition

A continuous random variable $X$ has a **uniform distribution** on $[a,b]$ if all values in the interval are equally likely.

**Notation**: $X \sim U(a,b)$

### 2.2 Probability Density Function (PDF)

$$f(x) = \begin{cases} \frac{1}{b-a}, & a \leq x \leq b \\ 0, & \text{otherwise} \end{cases}$$

### 2.3 Cumulative Distribution Function (CDF)

$$F(x) = \begin{cases} 0, & x < a \\ \frac{x-a}{b-a}, & a \leq x \leq b \\ 1, & x > b \end{cases}$$

### 2.4 Mean and Variance

$$E(X) = \frac{a+b}{2}$$

$$\text{Var}(X) = \frac{(b-a)^2}{12}$$

**Derivation of variance**:

$$E(X^2) = \int_a^b x^2 \cdot \frac{1}{b-a} \, dx = \frac{1}{b-a} \left[ \frac{x^3}{3} \right]_a^b = \frac{b^3 - a^3}{3(b-a)} = \frac{a^2 + ab + b^2}{3}$$

$$\text{Var}(X) = E(X^2) - [E(X)]^2 = \frac{a^2 + ab + b^2}{3} - \left(\frac{a+b}{2}\right)^2 = \frac{(b-a)^2}{12}$$

### 2.5 Probability Calculations

$$P(c \leq X \leq d) = \frac{d-c}{b-a} \quad \text{for } a \leq c < d \leq b$$

**Example**: $X \sim U(2,8)$. Find $P(X > 5)$.

$P(X > 5) = \frac{8-5}{8-2} = \frac{3}{6} = 0.5$

---

## FS1.3: Geometric Distribution

### 3.1 Definition

The geometric distribution models the number of trials needed to achieve the **first success** in a sequence of independent Bernoulli trials, each with probability of success $p$.

**Notation**: $X \sim \text{Geom}(p)$

### 3.2 Probability Mass Function

$$P(X = k) = (1-p)^{k-1}p, \quad k = 1, 2, 3, \dots$$

**Interpretation**: First $k-1$ trials are failures (probability $1-p$ each), then the $k$th trial is a success (probability $p$).

### 3.3 Cumulative Distribution Function

$$P(X \leq k) = 1 - (1-p)^k$$

$$P(X > k) = (1-p)^k$$

### 3.4 Mean and Variance

$$E(X) = \frac{1}{p}$$

$$\text{Var}(X) = \frac{1-p}{p^2}$$

**Derivation of mean**:
$$E(X) = \sum_{k=1}^\infty k(1-p)^{k-1}p = p \sum_{k=1}^\infty k(1-p)^{k-1}$$
Using $\sum_{k=1}^\infty k r^{k-1} = \frac{1}{(1-r)^2}$ for $\lvert r \rvert < 1$:
$$E(X) = p \cdot \frac{1}{[1-(1-p)]^2} = p \cdot \frac{1}{p^2} = \frac{1}{p}$$

### 3.5 Memoryless Property

$$P(X > m+n \mid X > m) = P(X > n)$$

The geometric distribution is the only discrete distribution with this property.

**Example**: In a game with $p = 0.2$, find the probability that the first success occurs on the 4th trial.

$P(X = 4) = (0.8)^3 \times 0.2 = 0.512 \times 0.2 = 0.1024$

---

## FS1.4: Probability Generating Functions (PGF)

### 4.1 Definition

For a discrete random variable $X$ taking non-negative integer values, the **probability generating function** is:
$$G_X(t) = E(t^X) = \sum_{x=0}^\infty t^x P(X = x)$$

$t$ is a dummy variable; the series converges for $\lvert t \rvert \leq 1$.

### 4.2 Properties

**Property 1**: $G_X(1) = \sum_{x=0}^\infty P(X = x) = 1$

**Property 2**: $P(X = k) = \frac{G_X^{(k)}(0)}{k!}$ (the coefficient of $t^k$ in the expansion)

**Property 3**: $E(X) = G_X'(1)$

**Property 4**: $E(X(X-1)) = G_X''(1)$

**Property 5**: $\text{Var}(X) = G_X''(1) + G_X'(1) - [G_X'(1)]^2$

**Derivation**:
$G_X'(t) = \sum_{x=0}^\infty x t^{x-1} P(X = x)$, so $G_X'(1) = \sum x P(X = x) = E(X)$
$G_X''(t) = \sum_{x=0}^\infty x(x-1) t^{x-2} P(X = x)$, so $G_X''(1) = E(X(X-1))$
Then $\text{Var}(X) = E(X^2) - [E(X)]^2 = E(X(X-1)) + E(X) - [E(X)]^2$

### 4.3 PGFs for Common Distributions

| Distribution | PGF $G_X(t)$ |
|--------------|--------------|
| Bernoulli$(p)$ | $1-p + pt$ |
| Binomial$(n,p)$ | $(1-p + pt)^n$ |
| Geometric$(p)$ | $\frac{pt}{1-(1-p)t}$ |
| Poisson$(\lambda)$ | $e^{\lambda(t-1)}$ |
| Uniform on $\{1,2,\dots,n\}$ | $\frac{t(1-t^n)}{n(1-t)}$ |

**Derivation for Poisson**:
$$G_X(t) = \sum_{x=0}^\infty t^x \frac{e^{-\lambda}\lambda^x}{x!} = e^{-\lambda} \sum_{x=0}^\infty \frac{(\lambda t)^x}{x!} = e^{-\lambda} e^{\lambda t} = e^{\lambda(t-1)}$$

### 4.4 Sum of Independent Random Variables

If $X$ and $Y$ are independent discrete random variables, then:
$$G_{X+Y}(t) = G_X(t) \cdot G_Y(t)$$

**Proof**: $G_{X+Y}(t) = E(t^{X+Y}) = E(t^X t^Y) = E(t^X)E(t^Y) = G_X(t)G_Y(t)$ by independence.

**Example**: $X \sim \text{Po}(\lambda_1)$, $Y \sim \text{Po}(\lambda_2)$ independent.
$G_{X+Y}(t) = e^{\lambda_1(t-1)} \cdot e^{\lambda_2(t-1)} = e^{(\lambda_1+\lambda_2)(t-1)}$
Thus $X+Y \sim \text{Po}(\lambda_1+\lambda_2)$.

---

## FS1.5: Linear Combinations of Discrete Random Variables

### 5.1 Expectation of a Linear Combination

For constants $a$ and $b$:
$$E(aX + bY) = aE(X) + bE(Y)$$

More generally:
$$E\left(\sum_{i=1}^n a_i X_i\right) = \sum_{i=1}^n a_i E(X_i)$$

### 5.2 Variance of a Linear Combination

For $Z = aX + bY$:
$$\text{Var}(Z) = a^2\text{Var}(X) + b^2\text{Var}(Y) + 2ab\,\text{Cov}(X,Y)$$

If $X$ and $Y$ are **independent**, $\text{Cov}(X,Y) = 0$:
$$\text{Var}(aX + bY) = a^2\text{Var}(X) + b^2\text{Var}(Y)$$

### 5.3 Covariance

$$\text{Cov}(X,Y) = E[(X - \mu_X)(Y - \mu_Y)] = E(XY) - E(X)E(Y)$$

Properties:
- $\text{Cov}(X,X) = \text{Var}(X)$
- $\text{Cov}(X,Y) = \text{Cov}(Y,X)$
- $\text{Cov}(aX, bY) = ab\,\text{Cov}(X,Y)$
- If $X$ and $Y$ are independent, $\text{Cov}(X,Y) = 0$ (converse not necessarily true)

### 5.4 Correlation Coefficient

$$\rho(X,Y) = \frac{\text{Cov}(X,Y)}{\sqrt{\text{Var}(X)\text{Var}(Y)}}$$

Properties:
- $-1 \leq \rho \leq 1$
- $\rho = 1$: perfect positive linear relationship
- $\rho = -1$: perfect negative linear relationship
- $\rho = 0$: no linear correlation

**Worked Example**:
Given $E(X) = 2$, $\text{Var}(X) = 4$, $E(Y) = 3$, $\text{Var}(Y) = 9$, $\text{Cov}(X,Y) = 3$.
Find $E(2X + 3Y)$ and $\text{Var}(2X + 3Y)$.

$E(2X + 3Y) = 2E(X) + 3E(Y) = 2\times2 + 3\times3 = 4 + 9 = 13$

$\text{Var}(2X + 3Y) = 2^2\text{Var}(X) + 3^2\text{Var}(Y) + 2\times2\times3\times\text{Cov}(X,Y)$
$= 4\times4 + 9\times9 + 12\times3 = 16 + 81 + 36 = 133$

---

## FM1.1: Constant Velocity in Two Dimensions

### 1.1 Vector Representation

Position vector: $\mathbf{r} = x\mathbf{i} + y\mathbf{j} = \begin{pmatrix} x \\\\ y \end{pmatrix}$

Velocity vector: $\mathbf{v} = \frac{d\mathbf{r}}{dt} = v_x\mathbf{i} + v_y\mathbf{j}$

For constant velocity: $\mathbf{r}(t) = \mathbf{r}_0 + \mathbf{v}t$

### 1.2 Speed and Distance

Speed = $\lvert \mathbf{v} \rvert = \sqrt{v_x^2 + v_y^2}$

Distance travelled = $\lvert \mathbf{v} \rvert \times t$

### 1.3 Relative Velocity

Velocity of $A$ relative to $B$:
$$\mathbf{v}_{AB} = \mathbf{v}_A - \mathbf{v}_B$$

**Interpretation**: This is the velocity of $A$ as observed from $B$ (treating $B$ as fixed).

**Relative position** after time $t$:
$$\mathbf{r}_{AB}(t) = \mathbf{r}_A(t) - \mathbf{r}_B(t) = (\mathbf{r}_A(0) - \mathbf{r}_B(0)) + (\mathbf{v}_A - \mathbf{v}_B)t$$

**Example**: Ship $A$ is at $(0,0)$ moving at $10\mathbf{i}$ km/h. Ship $B$ is at $(20,10)$ moving at $5\mathbf{i} + 5\mathbf{j}$ km/h. Find velocity of $A$ relative to $B$.

$\mathbf{v}_A = 10\mathbf{i}$, $\mathbf{v}_B = 5\mathbf{i} + 5\mathbf{j}$
$\mathbf{v}_{AB} = (10-5)\mathbf{i} + (0-5)\mathbf{j} = 5\mathbf{i} - 5\mathbf{j}$

Speed = $\sqrt{5^2 + (-5)^2} = \sqrt{50} = 5\sqrt{2}$ km/h

### 1.4 Interception Problems

For $A$ to intercept $B$, there exists $t > 0$ such that:
$$\mathbf{r}_A(0) + \mathbf{v}_A t = \mathbf{r}_B(0) + \mathbf{v}_B t$$

Rearrange: $(\mathbf{v}_A - \mathbf{v}_B)t = \mathbf{r}_B(0) - \mathbf{r}_A(0)$

**Example**: $A$ starts at $(0,0)$ with velocity $u\mathbf{i}$, $B$ starts at $(100,0)$ with velocity $10\mathbf{j}$. Find $u$ so that $A$ intercepts $B$.

Position after $t$:
$A$: $(ut, 0)$
$B$: $(100, 10t)$

For interception: $ut = 100$ and $0 = 10t$ ⇒ $t = 0$ (trivial). No interception possible because $A$ has no $y$-component. This shows interception requires velocity components to align.

### 1.5 Closest Approach

For two moving particles, the distance between them is a quadratic function of time. To find the minimum distance:

**Method 1**: Complete the square
**Method 2**: Differentiate $d^2$ with respect to $t$ and set to zero

**Worked Example**: $A$ at $(0,0)$ moving at $2\mathbf{i}$, $B$ at $(0,10)$ moving at $3\mathbf{j}$. Find closest distance.

$\mathbf{r}_A(t) = (2t, 0)$
$\mathbf{r}_B(t) = (0, 10 + 3t)$
$\mathbf{r}_{AB}(t) = (2t - 0, 0 - (10+3t)) = (2t, -10 - 3t)$

Distance squared: $d^2 = (2t)^2 + (-10-3t)^2 = 4t^2 + 100 + 60t + 9t^2 = 13t^2 + 60t + 100$

Differentiate: $\frac{d(d^2)}{dt} = 26t + 60 = 0$ ⇒ $t = -\frac{60}{26} = -\frac{30}{13}$ (negative)

Minimum occurs at $t = 0$ (since $t \geq 0$): $d = \sqrt{100} = 10$

---

## FM1.2: Dimensional Analysis

### 2.1 Base Dimensions

In mechanics, all physical quantities can be expressed in terms of three base dimensions:

| Base Quantity | Dimension Symbol |
|---------------|------------------|
| Mass | $M$ |
| Length | $L$ |
| Time | $T$ |

### 2.2 Derived Dimensions

| Quantity | Formula | Dimensions |
|----------|---------|------------|
| Area | $l^2$ | $L^2$ |
| Volume | $l^3$ | $L^3$ |
| Velocity | $\frac{ds}{dt}$ | $LT^{-1}$ |
| Acceleration | $\frac{dv}{dt}$ | $LT^{-2}$ |
| Force | $ma$ | $MLT^{-2}$ |
| Work/Energy | $Fd$ | $ML^2T^{-2}$ |
| Power | $\frac{W}{t}$ | $ML^2T^{-3}$ |
| Momentum | $mv$ | $MLT^{-1}$ |
| Impulse | $Ft$ | $MLT^{-1}$ |
| Pressure | $\frac{F}{A}$ | $ML^{-1}T^{-2}$ |
| Density | $\frac{m}{V}$ | $ML^{-3}$ |

### 2.3 Dimensional Homogeneity

In any valid physical equation, both sides must have the same dimensions. This principle can be used to:
- Check the validity of equations
- Derive relationships between quantities
- Determine units

### 2.4 Deriving Formulae by Dimensional Analysis

**Method**:
1. Assume the quantity $Q$ is proportional to products of powers of relevant variables
2. Write the dimensional equation
3. Equate exponents of $M$, $L$, $T$
4. Solve for the exponents

**Example 1**: Period of a simple pendulum
Assume $T = k \cdot l^a \cdot g^b \cdot m^c$
Dimensions: $[T] = T$, $[l] = L$, $[g] = LT^{-2}$, $[m] = M$

$T = L^a \cdot (LT^{-2})^b \cdot M^c = L^{a+b} T^{-2b} M^c$

Equate exponents:
$M$: $c = 0$ (period independent of mass)
$T$: $1 = -2b$ ⇒ $b = -\frac{1}{2}$
$L$: $0 = a + b$ ⇒ $a = -b = \frac{1}{2}$

Thus $T = k \sqrt{\frac{l}{g}}$. Experiment shows $k = 2\pi$.

**Example 2**: Speed of waves on a string
Assume $v = k \cdot T^a \cdot \mu^b$, where $T$ = tension ($MLT^{-2}$), $\mu$ = mass per unit length ($ML^{-1}$)

$[v] = LT^{-1}$, $[T] = MLT^{-2}$, $[\mu] = ML^{-1}$

$LT^{-1} = (MLT^{-2})^a \cdot (ML^{-1})^b = M^{a+b} L^{a-b} T^{-2a}$

Equate:
$M$: $0 = a + b$
$L$: $1 = a - b$
$T$: $-1 = -2a$ ⇒ $a = \frac{1}{2}$

Then $b = -a = -\frac{1}{2}$

Thus $v = k \sqrt{\frac{T}{\mu}}$. Experiment shows $k = 1$.

---

## FM1.3: Collisions in One Dimension

### 3.1 Momentum

Linear momentum: $\mathbf{p} = m\mathbf{v}$ (vector quantity)

Units: kg·m/s or N·s

### 3.2 Impulse

**Impulse** = change in momentum:
$$\mathbf{I} = \mathbf{p}_{\text{final}} - \mathbf{p}_{\text{initial}} = m\mathbf{v} - m\mathbf{u}$$

For a constant force:
$$\mathbf{I} = \mathbf{F} \Delta t$$

For a variable force:
$$\mathbf{I} = \int_{t_1}^{t_2} \mathbf{F} \, dt$$

Impulse is a vector; its direction is the same as the change in momentum.

### 3.3 Conservation of Momentum

For a system of particles with no external impulse (or when external forces are negligible), total momentum is conserved:

$$m_1\mathbf{u}_1 + m_2\mathbf{u}_2 = m_1\mathbf{v}_1 + m_2\mathbf{v}_2$$

### 3.4 Newton's Experimental Law (Coefficient of Restitution)

For two particles colliding along the line of centres:

$$v_2 - v_1 = -e(u_2 - u_1)$$

where:
- $u_1, u_2$ = velocities before impact (positive in same direction)
- $v_1, v_2$ = velocities after impact
- $e$ = coefficient of restitution ($0 \leq e \leq 1$)

| $e$ | Type of Collision |
|-----|-------------------|
| $e = 1$ | Perfectly elastic (kinetic energy conserved) |
| $0 < e < 1$ | Partially elastic (some KE lost) |
| $e = 0$ | Perfectly inelastic (particles stick together, $v_1 = v_2$) |

### 3.5 Impact with a Fixed Surface

For a particle hitting a fixed smooth surface perpendicularly:
$$v = -e u$$

where $u$ = speed towards surface, $v$ = speed away from surface.

**Example**: A ball is dropped from height $h$ onto a horizontal floor with coefficient of restitution $e$. Find the height after the first bounce.

Velocity just before impact: $u = \sqrt{2gh}$ (downwards)
Velocity just after impact: $v = e\sqrt{2gh}$ (upwards)
Height after bounce: $h_1 = \frac{v^2}{2g} = e^2 h$

### 3.6 Worked Example: Two-Particle Collision

Particle $A$ of mass 2 kg moves at 3 m/s towards particle $B$ of mass 3 kg moving at 1 m/s in the same direction. They collide. Coefficient of restitution $e = 0.5$. Find velocities after collision.

**Solution**:
Let positive direction be initial direction of $A$.

Before: $u_A = 3$, $u_B = 1$

Conservation of momentum:
$2 \times 3 + 3 \times 1 = 2v_A + 3v_B$
$6 + 3 = 2v_A + 3v_B$
$2v_A + 3v_B = 9$ ... (1)

Newton's law:
$v_B - v_A = -e(u_B - u_A) = -0.5 \times (1 - 3) = -0.5 \times (-2) = 1$
So $v_B - v_A = 1$ ⇒ $v_B = v_A + 1$ ... (2)

Substitute (2) into (1):
$2v_A + 3(v_A + 1) = 9$
$2v_A + 3v_A + 3 = 9$
$5v_A = 6$
$v_A = 1.2$ m/s

Then $v_B = 1.2 + 1 = 2.2$ m/s

Both move in original direction.

**Check**: $v_B > v_A$, so they separate after collision.

---

## Key Formulae Summary

### Pure Mathematics

| Topic | Formula |
|-------|---------|
| $2\times2$ inverse | $\begin{pmatrix} a & b \\\\ c & d \end{pmatrix}^{-1} = \frac{1}{ad-bc}\begin{pmatrix} d & -b \\\\ -c & a \end{pmatrix}$ |
| Determinant | $\det(A) = ad - bc$ |
| Rotation by $\theta$ | $\begin{pmatrix} \cos\theta & -\sin\theta \\\\ \sin\theta & \cos\theta \end{pmatrix}$ |
| Newton-Raphson | $x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$ |
| Euler's method | $y_{n+1} = y_n + h f(x_n, y_n)$ |

### Statistics

| Topic | Formula |
|-------|---------|
| Bayes' theorem | $P(A \mid B) = \frac{P(B \mid A)P(A)}{P(B)}$ |
| Uniform mean | $E(X) = \frac{a+b}{2}$ |
| Uniform variance | $\text{Var}(X) = \frac{(b-a)^2}{12}$ |
| Geometric PMF | $P(X=k) = (1-p)^{k-1}p$ |
| Geometric mean | $E(X) = \frac{1}{p}$ |
| Geometric variance | $\text{Var}(X) = \frac{1-p}{p^2}$ |
| PGF | $G_X(t) = E(t^X)$ |
| PGF mean | $E(X) = G_X'(1)$ |
| PGF variance | $\text{Var}(X) = G_X''(1) + G_X'(1) - [G_X'(1)]^2$ |
| Covariance | $\text{Cov}(X,Y) = E(XY) - E(X)E(Y)$ |
| Correlation | $\rho = \frac{\text{Cov}(X,Y)}{\sqrt{\text{Var}(X)\text{Var}(Y)}}$ |

### Mechanics

| Topic | Formula |
|-------|---------|
| Relative velocity | $\mathbf{v}_{AB} = \mathbf{v}_A - \mathbf{v}_B$ |
| Dimensional analysis | $[Q] = M^a L^b T^c$ |
| Impulse | $\mathbf{I} = m\mathbf{v} - m\mathbf{u}$ |
| Momentum conservation | $m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2$ |
| Newton's law | $v_2 - v_1 = -e(u_2 - u_1)$ |
| Impact with wall | $v = -eu$ |