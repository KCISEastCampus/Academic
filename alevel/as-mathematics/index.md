---
layout: subjects
title: AS Mathematics
mathjax: true
reading_layout: true
grade: as
subject: as-mathematics
permalink: /alevel/as-mathematics/
toc_headings: "#learning-route, #pure-foundations, #further-pure, #statistics, #mechanics, #how-to-study, #mixed-review, #later-review, #sources-and-scope, #legacy-reference"
redirect_from:
  - /alevel/mathematics/
  - /alevel/mathematics/index.html
---

## Start here {#learning-route}

Build from algebra and graphs towards calculus, statistics and mechanics. You will need fractions, expansion and factorisation. Follow the route below when learning for the first time, or choose a topic when revising.

**[Start the first lesson: Algebra](/alevel/as-mathematics/algebra/)**

OxfordAQA AS Mathematics 9660: MA01 (P1) and MA02 (PSM1). Lessons are available in English and Chinese, with the same English practice questions.

## Pure mathematics foundations · MA01 {#pure-foundations}

Start with algebra and coordinates, then apply them to calculus and series.

1. **[Algebra](/alevel/as-mathematics/algebra/)** — Choose exact forms, solve equations and track graph transformations.
2. **[Coordinate geometry](/alevel/as-mathematics/coordinate-geometry/)** — Connect straight-line equations, gradients and intersections.
3. **[Differentiation](/alevel/as-mathematics/differentiation/)** — Find gradients and stationary points, and justify how a function changes.
4. **[Integration and approximation](/alevel/as-mathematics/integration/)** — Recover functions, interpret signed areas and use the trapezium rule.
5. **[Sequences and series](/alevel/as-mathematics/sequences/)** — Choose arithmetic or geometric models and justify sums and convergence.

## Further pure mathematics · MA02 {#further-pure}

Apply algebra and graphs to circles, periodic change and exponential relationships.

1. **[Circles](/alevel/as-mathematics/circles/)** — Connect circle equations with centres, radii, tangents and normals.
2. **[Trigonometry](/alevel/as-mathematics/trigonometry/)** — Use radians, identities and graphs to find every solution in an interval.
3. **[Exponentials and logarithms](/alevel/as-mathematics/exponentials-logarithms/)** — Solve exponential equations and check logarithm conditions.

## Statistics · MA02 {#statistics}

Move from events to random variables and distribution models.

1. **[Probability](/alevel/as-mathematics/probability/)** — Distinguish conditional probability from independence.
2. **[Discrete random variables](/alevel/as-mathematics/random-variables/)** — Build distributions and find expectation and variance.
3. **[Binomial distributions](/alevel/as-mathematics/binomial/)** — Check a binomial model and calculate probabilities.

## Mechanics · MA02 {#mechanics}

Describe motion before explaining why it changes. Variable acceleration needs calculus.

1. **[Constant acceleration](/alevel/as-mathematics/constant-acceleration/)** — Set a positive direction and connect motion equations with graphs.
2. **[Variable acceleration](/alevel/as-mathematics/variable-acceleration/)** — Connect displacement, velocity and acceleration using calculus.
3. **[Forces and Newton’s laws](/alevel/as-mathematics/forces/)** — Draw force diagrams, choose systems and form equations of motion.
4. **[Momentum and impulse](/alevel/as-mathematics/momentum/)** — Use signed momentum and impulse within a clearly defined system.

## How to complete a lesson {#how-to-study}

1. Read the goal, explanation and worked example. Understand why the method fits.
2. Attempt the supported question on paper. Open a hint before a solution if stuck.
3. Close solutions and attempt the independent English question. Check method, conditions and result, then complete the diagnosis and retry.
4. When you can explain the method and complete the retry independently, use “Next lesson” at the end. Otherwise revisit the relevant example.

All practice questions are self-written, with separate hints and solutions. Show/prove need reasoning; hence must use an earlier result. Calculator checks do not replace the required working.

## Connect ideas after each route {#mixed-review}

These questions mix earlier ideas without naming a method. Do the matching task after finishing a route. All are self-written. Keep help closed for the first attempt.

<div class="lesson-check" markdown="1">

### Task A {#mixed-foundations}

**Question:** For $0\le x\le3$, let $f(x)=x^3-3x^2$. Find its greatest and least values, with reasons. Find the area between its graph and the x-axis on this interval.

<details markdown="1">
<summary>Hint</summary>

Check both stationary points and the ends of the interval; identify the sign before measuring area.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$f'(x)=3x(x-2)$ is negative on $0<x<2$ and positive on $2<x<3$. Check $f(0)=0,f(2)=-4,f(3)=0$. The greatest value is 0 at 0 and 3; the least is −4 at 2.

Since $x^2(x-3)\le0$ on the whole interval,

$$A=-\int_0^3(x^3-3x^2)\,dx=-\left[\frac{x^4}4-x^3\right]_0^3=\frac{27}4.$$

For a missed endpoint revisit [feasible values](/alevel/as-mathematics/differentiation/#l07-concept); for a sign error revisit [area](/alevel/as-mathematics/integration/#l08-concept).

</details>

</div>

<div class="lesson-check" markdown="1">

### Task B {#mixed-further}

**Question:** A circle has diameter endpoints $A=(-3,0)$ and $B=(5,4)$. Find every real c for which $y=2x+c$ meets the circle at exactly one point, and find each contact point. Translate the circle by $(2,-1)$ and give its new equation.

<details markdown="1">
<summary>Hint</summary>

Use what the endpoints tell you about the circle, then combine the line and circle equations. What does exactly one intersection mean?

</details>

<details markdown="1">
<summary>Solution and check</summary>

The centre is the midpoint $(1,2)$, and the squared radius is $4^2+2^2=20$. The circle is $(x-1)^2+(y-2)^2=20$. Substituting the line gives

$$\begin{aligned}
(x-1)^2+(2x+c-2)^2&=20,\\
5x^2+(4c-10)x+(c-2)^2-19&=0.
\end{aligned}$$

Exactly one intersection means a repeated root. Its discriminant is

$$\begin{aligned}
\Delta&=(4c-10)^2\\
&\quad-20[(c-2)^2-19]\\
&=400-4c^2.
\end{aligned}$$

Setting it to zero gives $c=10$ or $-10$.

For $c=10$, the repeated root is $x=-3$ and the contact point is $(-3,4)$. For $c=-10$, it is $x=5$, giving $(5,0)$. Both points satisfy their line and circle equations. Translation moves the centre to $(3,1)$ without changing the radius, giving $(x-3)^2+(y-1)^2=20$.

If the circle setup was wrong, revisit [centre and radius](/alevel/as-mathematics/circles/#l14-concept). If the single-intersection test was wrong, revisit [intersection counts](/alevel/as-mathematics/coordinate-geometry/#l04-worked).

</details>

</div>

<div class="lesson-check" markdown="1">

### Task C {#mixed-statistics}

**Question:** In a constructed group of 60 equally likely records, 12 are in both A and B, 18 in A only, 8 in B only and 22 in neither. Find $P(A\mid B)$ and decide whether A and B are independent. Four records are then selected independently with replacement. Let X count those in B. Find its mean, variance and $P(X\ge1)$, stating why your model applies.

<details markdown="1">
<summary>Hint</summary>

Keep the conditional denominator separate from the success probability in the repeated selections.

</details>

<details markdown="1">
<summary>Solution and check</summary>

B contains $12+8=20$ records, so $P(A\mid B)=12/20=3/5$. Also $P(A)=30/60=1/2$. Since these differ, A and B are not independent.

Each new selection succeeds if it is in B, with probability $p=20/60=1/3$. The number of selections is fixed, there are two categories, and independent replacement keeps p unchanged. Thus $X\sim\mathrm{Bin}(4,1/3)$, with

$$E(X)=\frac43,\qquad\operatorname{Var}(X)=\frac89,\qquad P(X\ge1)=1-\left(\frac23\right)^4=\frac{65}{81}.$$

If the groups were confused, revisit [conditional probability](/alevel/as-mathematics/probability/#l18-worked); if the model or tail was wrong, revisit [binomial trials](/alevel/as-mathematics/binomial/#l21-concept).

</details>

</div>

<div class="lesson-check" markdown="1">

### Task D {#mixed-mechanics}

**Question:** A 2 kg block moves right at $2\,\mathrm{m\,s^{-1}}$ on a horizontal surface. For 4 s it has a constant horizontal driving force of 10 N right and a constant resistance of 2 N left. Find its acceleration, distance travelled and resultant impulse. State your positive direction and check the impulse in two ways.

<details markdown="1">
<summary>Hint</summary>

Use one body and the signed resultant force; compare change in momentum with force times time.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Take right positive. The vertical forces balance; horizontally $10-2=2a$, so $a=4\,\mathrm{m\,s^{-2}}$. Velocity after 4 s is $2+4(4)=18\,\mathrm{m\,s^{-1}}$, positive throughout. Distance equals displacement:

$$s=2(4)+\frac12(4)(4^2)=40\,\mathrm m.$$

The resultant impulse is $m(v-u)=2(18-2)=32\,\mathrm{N\,s}$ right. Also $(10-2)(4)=32\,\mathrm{N\,s}$, agreeing. Revisit [one-body force equations](/alevel/as-mathematics/forces/#l24-concept), [motion quantities](/alevel/as-mathematics/constant-acceleration/#l22-concept) or [impulse](/alevel/as-mathematics/momentum/#l25-concept) according to the error.

</details>

</div>

## Return in a later study session {#later-review}

After working on another topic, return here without rereading the old solutions. Write what you remember, then use the error links to repair a specific step. Note whether you needed help; doing it immediately after reading an answer is a different kind of evidence.

<div class="lesson-check" markdown="1">

### Recall A {#later-foundations}

**Question:** A curve has gradient $2x-4$ and passes through $(0,1)$. Find its equation, all x for which $y\le1$, and the area enclosed by this curve and $y=1$.

<details markdown="1">
<summary>Hint</summary>

Find the particular curve before deciding which intersections bound the region.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Integration gives $y=x^2-4x+C$. The point sets $C=1$. Then $y\le1$ means $x(x-4)\le0$, so $0\le x\le4$. On this interval the line is above the curve:

$$A=\int_0^4[1-(x^2-4x+1)]\,dx=\left[2x^2-\frac{x^3}3\right]_0^4=\frac{32}3.$$

Differentiate the curve and test its given point. For a lost constant use [function recovery](/alevel/as-mathematics/integration/#l08-independent-function); for a wrong interval use [quadratics](/alevel/as-mathematics/algebra/#l02-concept), then retry this task in a later session.

</details>

</div>

<div class="lesson-check" markdown="1">

### Recall B {#later-further}

**Question:** Solve $2\sin^2\theta=\cos\theta$ for $0\le\theta\le2\pi$. Give the angles to 3 decimal places and justify every algebraic value you keep or reject.

<details markdown="1">
<summary>Hint</summary>

Use one trigonometric quantity, then return from its value to every allowed angle.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Put $c=\cos\theta$ and use $\sin^2\theta=1-c^2$. Then $2c^2+c-2=0$, so $c=(-1\pm\sqrt{17})/4$. The negative choice is below −1 and cannot be a cosine. The other is between 0 and 1. If $\alpha=\arccos((\sqrt{17}-1)/4)$, the two angles are $\alpha,2\pi-\alpha$, approximately $0.675,5.608$ radians. Neither endpoint solves the original equation.

For the algebra revisit [the quadratic formula](/alevel/as-mathematics/algebra/#l02-concept); for missed angles revisit [the full cycle](/alevel/as-mathematics/trigonometry/#l16-concept). Close the old solution and then use [a new interval equation](/alevel/as-mathematics/trigonometry/#l16-retry).

</details>

</div>

<div class="lesson-check" markdown="1">

### Recall C {#later-statistics}

**Question:** X has values 0, 1 and 3 with probabilities $1/2,1/3,1/6$. Let $C=X^2$. Two independent copies of C are called $C_1,C_2$, and $T=C_1+C_2-1$. Find the mean and variance of C and T, showing which rules apply.

<details markdown="1">
<summary>Hint</summary>

For the square, build new values first. For the total, use independence.

</details>

<details markdown="1">
<summary>Solution and check</summary>

C takes values 0, 1 and 9 with the original probabilities. Hence $E(C)=1/3+9/6=11/6$ and $E(C^2)=1/3+81/6=83/6$. Thus

$$\operatorname{Var}(C)=\frac{83}6-\left(\frac{11}6\right)^2=\frac{377}{36}.$$

Independence gives $E(T)=11/6+11/6-1=8/3$ and $\operatorname{Var}(T)=377/36+377/36=377/18$. The constant shifts the mean but not the spread. For squaring errors revisit [transformed values](/alevel/as-mathematics/random-variables/#l19-concept); for variance addition revisit [independent outcomes](/alevel/as-mathematics/random-variables/#l20-concept), then use the linked retries there.

</details>

</div>

<div class="lesson-check" markdown="1">

### Recall D {#later-mechanics}

**Question:** For $0\le t\le3$, a 1.5 kg particle has $a=2-2t$, $v(0)=0$ and $s(0)=3$ in SI units. Find its displacement, distance and resultant impulse over the interval. Explain whether constant-acceleration equations could replace your method.

<details markdown="1">
<summary>Hint</summary>

Use both initial conditions; a return to the starting position need not mean zero distance.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Integrating gives $v=2t-t^2+C$; the velocity condition sets $C=0$. Then $s=t^2-t^3/3+D$ and the position condition sets $D=3$. Velocity changes from positive to negative at $t=2$. Positions are $s(0)=3,s(2)=13/3,s(3)=3$.

Displacement is 0; distance is $(13/3-3)+(13/3-3)=8/3$ m. Since $v(3)=-3$, resultant impulse is $1.5(-3-0)=-4.5\,\mathrm{N\,s}$, opposite the positive direction. Acceleration varies with t, so constant-acceleration equations cannot be used across the whole interval.

For the constants or turns return to [variable acceleration](/alevel/as-mathematics/variable-acceleration/#l23-worked); for impulse signs use [signed momentum](/alevel/as-mathematics/momentum/#l25-concept), then attempt their new retries with help closed.

</details>

</div>

## Sources and examination scope {#sources-and-scope}

<details markdown="1">
<summary>View specification, marking sources and calculator guidance</summary>

Based on the [current qualification page](https://www.oxfordaqa.com/qualification/international-as-and-a-level-mathematics-9660/) and [official specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf), plus documented paired MA01/MA02 January 2025 QP and Final MS reading. Each lesson identifies its marking evidence. The inconsistent MA02 Q7(b) data are not reused as a valid model. The two local AS specification PDFs remain historical v5.1 assets; use the current official link.

Conforming graphical calculators are permitted; this does not approve every CAS/plugin configuration. Consult the [current Handbook](https://www.oxfordaqa.com/wp-content/uploads/2026/09/oxfordaqa-exams-administration-handbook.pdf). No new hardware/examination-mode validation or item-by-item formula-booklet inventory is claimed.

</details>

## Archived reference {#legacy-reference}

Use the lessons above for current learning and practice. The old outline is retained here for reference and existing bookmarks.

<details markdown="1">
<summary>Open the old English reference outline</summary>

> **Qualification**: OxfordAQA International AS Mathematics (9660) · Modular<br>
> **Assessment**: Unit P1 + Unit PSM1 · 1h 30m each · 80 marks each · 50% of AS each

AS Mathematics forms the first part of the A-Level Mathematics qualification. The AS level consists of two examined components:

- **International AS Unit P1**: Pure Mathematics (50% of AS, 20% of A-Level)
- **International AS Unit PSM1**: Pure Mathematics, Statistics and Mechanics (50% of AS, 20% of A-Level)

## Assessment Structure


| Unit | Duration | Marks | Calculator | Weighting |
|-----|----------|-------|------------|-----------|
| P1 | 1 hour 30 minutes | 80 marks | Allowed | 50% of AS |
| PSM1 | 1 hour 30 minutes | 80 marks | Allowed | 50% of AS |

*Note: PSM1 consists of 40 marks Pure Maths, 20 marks Statistics, and 20 marks Mechanics*

---

<h1 id="31-international-as-unit-p1-pure-maths">3.1 International AS Unit P1 (Pure Maths)</h1>


## P1.1: Algebra


### Surds and Indices

- **Surd Manipulation**: 
  - Simplification: $\sqrt{12} = 2\sqrt{3}$
  - Rationalisation: $\frac{1}{\sqrt{2}-1} = \sqrt{2}+1$
  - Complex rationalisation: $\frac{2\sqrt{3}+\sqrt{2}}{3\sqrt{2}+\sqrt{3}} = \frac{\sqrt{6}}{3}$
- **Laws of Indices**: For $a > 0$ and rational exponents $m,n$
  - $a^m \times a^n = a^{m+n}$
  - $(a^m)^n = a^{mn}$
  - $a^0 = 1$, $a^{-n} = \frac{1}{a^n}$

### Quadratic Functions

- **Graph Characteristics**: Vertex, line of symmetry, intercepts
- **Discriminant Analysis** ($\Delta = b^2 - 4ac$):
  - $\Delta > 0$: Two distinct real roots
  - $\Delta = 0$: Equal (repeated) roots  
  - $\Delta < 0$: No real roots
- **Solution Methods**:
  - Factorisation: $2x^2 + x - 6 = (2x - 3)(x + 2)$
  - Completing square: $x^2 + 6x - 1 = (x + 3)^2 - 10$
  - Quadratic formula: $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$

### Polynomials

- **Algebraic Division**: Division by linear terms $(x - a)$
  - Methods: Inspection, equating coefficients, formal division
- **Remainder Theorem**: $f(a)$ = remainder when $f(x) \div (x - a)$
- **Factor Theorem**: If $f(a) = 0$, then $(x - a)$ is a factor
- **Application**: Factorise cubics like $x^3 - 5x^2 + 7x - 3$

### Inequalities and Simultaneous Equations

- **Quadratic Inequalities**: Solve $2x^2 + x \geq 6$
- **Simultaneous Equations**: One linear, one quadratic - solve by substitution

### Functions and Graphs

- **Function Types**: Linear, quadratic, cubic
- **Graph Sketching**: Interpret intersection points as equation solutions
- **Transformations**:
  - $y = af(x)$: Vertical stretch scale factor $\lvert a\rvert $ for $a \ne 0$; also reflect in the x-axis if $a < 0$
  - $y = f(x) + a$: Translation by vector $(0,a)$
  - $y = f(x + a)$: Translation by vector $(-a,0)$
  - $y = f(ax)$: Horizontal stretch scale factor $1/\lvert a\rvert $ for $a \ne 0$; also reflect in the y-axis if $a < 0$
  - If $a=0$, these become $y=0$ and $y=f(0)$ respectively (where defined), rather than stretches.

## P1.2: Coordinate Geometry


### Straight Lines

- **Equation Forms**:
  - $y = mx + c$ (gradient-intercept)
  - $y - y_1 = m(x - x_1)$ (point-gradient)
  - $ax + by + c = 0$ (general form)
- **Geometrical Calculations**:
  - Gradient: $m = \frac{y_2 - y_1}{x_2 - x_1}$ for $x_2 \ne x_1$; a vertical line has undefined gradient
  - Distance: $d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$
  - Midpoint: $\left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$

### Line Relationships

- **Parallel Lines**: $m_1 = m_2$ for lines with finite gradients; vertical lines are parallel to one another
- **Perpendicular Lines**: $m_1m_2 = -1$ for finite gradients; a horizontal line is perpendicular to a vertical line
- **Intersections**: Line with curve - interpret roots geometrically

## P1.3: Differentiation


### Fundamental Concepts

- **Derivative as Gradient**: $f'(x)$ = gradient of tangent at point
- **Rate of Change**: Interpretation as instantaneous rate
- **Notation**: $f'(x)$ or $\frac{dy}{dx}$
- **Basic Rules**:
  - $\frac{d}{dx}(ax^n) = anx^{n-1}$ ($n$ rational)
  - $\frac{d}{dx}[f(x) + g(x)] = f'(x) + g'(x)$

### Applications

- **Tangents and Normals**:
  - Tangent: $y - y_1 = f'(x_1)(x - x_1)$
  - Normal: $y - y_1 = -\frac{1}{f'(x_1)}(x - x_1)$ if $f'(x_1) \ne 0$; if $f'(x_1)=0$, the normal is $x=x_1$
- **Stationary Points**: Where $f'(x) = 0$
- **Second Derivatives**: Determine nature of stationary points
- **Optimisation**: Practical problems involving maxima/minima

## P1.4: Integration


### Basic Integration

- **Reverse of Differentiation**: $\int f'(x) dx = f(x) + c$
- **Standard Results**:
  - $\int ax^n dx = \frac{a}{n+1}x^{n+1} + c$ ($n \neq -1$)
  - $\int [f'(x) + g'(x)] dx = f(x) + g(x) + c$

### Definite Integrals and Applications

- **Area Under Curve**: $A = \int_a^b y dx$ ($y \geq 0$)
- **Signed Integral and Area**: If $y \leq 0$ on $[a,b]$, the integral is non-positive and the geometric area is $-\int_a^b y\,dx$. Extension beyond core P1 area questions: split the interval at sign changes to find total area.
- **Area Between Curves**: Between line and curve, or two curves
- **Trapezium Rule**: Approximation of area
  - Graphical interpretation of over/under-estimation

## P1.5: Sequences and Series


### Sequences

- **nth Term**: Given by formula $u_n = f(n)$
- **Iterative Sequences**: $x_{n+1} = f(x_n)$. If the sequence converges to $L$ and $f$ is continuous at $L$, then $L=f(L)$; convergence must be checked.

### Series

- **Arithmetic Series**:
  - $u_n = a + (n - 1)d$
  - $S_n = \frac{n}{2}[2a + (n - 1)d]$
- **Geometric Series**:
  - $u_n = ar^{n-1}$
  - $S_n = \frac{a(1 - r^n)}{1 - r}$ ($r \neq 1$)
  - $S_\infty = \frac{a}{1 - r} \quad (\lvert r \rvert < 1)$
- **Binomial Expansion** (positive integer $n$):
  - $(1 + x)^n = 1 + nx + \frac{n(n-1)}{2!}x^2 + \cdots + x^n$
  - Notation: $n!$, $\binom{n}{r}$

---

<h1 id="32-international-as-unit-psm1-pure-maths-statistics-and-mechanics">3.2 International AS Unit PSM1 (Pure Maths, Statistics and Mechanics)</h1>


## PP1.1: Circles


### Circle Geometry

- **Standard Equation**: $(x - a)^2 + (y - b)^2 = r^2$
- **Completing Square**: Convert to centre-radius form
- **Circle Properties**:
  - Angle in semicircle = $90°$
  - Perpendicular from centre bisects chord
  - Tangent perpendicular to radius at point of contact
- **Tangents and Normals**: Find equations using geometry

## PP1.2: Trigonometry


### Trigonometric Fundamentals

- **Sine/Cosine Rules**:
  - $\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$
  - $a^2 = b^2 + c^2 - 2bc\cos A$
- **Area of Triangle**: $\frac{1}{2}ab\sin C$
- **Radian Measure**: $180^\circ = \pi$ radians
- **Arc and Sector** ($\theta$ in radians):
  - Arc length: $l = r\theta$
  - Sector area: $A = \frac{1}{2}r^2\theta$

### Trigonometric Functions and Equations

- **Graphs**: Sine, cosine, tangent - symmetry and periodicity
- **Identities**:
  - $\tan\theta = \frac{\sin\theta}{\cos\theta}$
  - $\sin^2\theta + \cos^2\theta = 1$
- **Solving Equations**: In given intervals, up to difficulty of $2\sin^2\theta + 5\cos\theta = 4$

## PP1.3: Exponentials and Logarithms


### Exponential Functions

- **Graph**: For $a>0$, $y=a^x$ is positive; it increases if $a>1$, decreases if $0<a<1$, and is constant if $a=1$
- **Laws of Indices**: Applied where appropriate

### Logarithmic Functions

- **Laws of Logarithms** ($a>0$, $a\ne1$, $x,y>0$):
  - $\log_a x + \log_a y = \log_a(xy)$
  - $\log_a x - \log_a y = \log_a\left(\frac{x}{y}\right)$
  - $k\log_a x = \log_a(x^k)$
- **Inverse Relationship**: $y = a^x \Leftrightarrow x = \log_a y$ for $a>0$, $a\ne1$ and $y>0$
- **Solving Equations**: $a^x = b$ using logarithms

---

## S1.1: Further Probability


### Probability Fundamentals

- **Basic Concepts**: Random events, relative frequency, equally likely outcomes
- **Set Notation**: Understanding but not essential for use
- **Probability Laws**:
  - $P(A \cup B) = P(A) + P(B) - P(A \cap B)$
  - $P(A') = 1 - P(A)$
  - Mutually exclusive: $P(A \cup B) = P(A) + P(B)$

### Conditional Probability and Independence

- **Multiplication Law**:
  - $P(A \cap B) = P(A) \times P(B\vert A) = P(B) \times P(A\vert B)$
  - Independent: $P(A \cap B) = P(A) \times P(B)$
- **Application**: Direct application of probability laws, frequency tables

## S1.2: Discrete Random Variables


### Probability Distributions

- **Discrete Random Variables**: A finite or countably infinite set of possible values; this S1 section uses finite distributions in tabular or functional form
- **Measures**:
  - Central tendency: Mean
  - Spread: Variance, standard deviation

### Expectation and Variance

- **Formulae**:
  - $E(X) = \mu = \sum x_i P_i$
  - $E(g(X)) = \sum g(x_i)P_i$
  - $Var(X) = E((X - \mu)^2) = E(X^2) - \mu^2$
- **Linear Transformations**:
  - $E(aX + b) = aE(X) + b$
  - $Var(aX + b) = a^2Var(X)$
- **Sums of Variables**:
  - $E(aX + bY) = aE(X) + bE(Y)$
  - $Var(aX + bY) = a^2Var(X) + b^2Var(Y)$ (independent)

## S1.3: Bernoulli and Binomial Distributions


### Bernoulli Distribution

- **Conditions**: A single trial with success probability $p$; $X=1$ for success and $X=0$ for failure
- **Mean and Variance**:
  - $E(X) = p$
  - $Var(X) = p(1-p)$

### Binomial Distribution

- **Definition**: Number of successes in a fixed number $n$ of independent Bernoulli trials, each with the same success probability $p$
- **Probability**: $P(X = r) = \binom{n}{r}p^r(1-p)^{n-r}$
- **Mean and Variance**:
  - $E(X) = np$
  - $Var(X) = np(1-p)$
- **Calculation**: Using formula and tables

---

## M1.1: Motion in a Straight Line with Constant Acceleration


### Kinematics Fundamentals

- **Basic Quantities**:
  - Displacement vs distance
  - Velocity vs speed
- **Graphs**: Sketching and interpreting kinematics graphs
- **Gradients and Areas**: Using graphs to solve problems

### Constant Acceleration Equations

- **Standard Formulae**:
  - $v = u + at$
  - $s = ut + \frac{1}{2}at^2$
  - $v^2 = u^2 + 2as$
  - $s = \frac{1}{2}(u + v)t$
- **Vertical Motion**: With upwards positive and air resistance neglected, $a=-g=-9.8\,\mathrm{m\,s^{-2}}$; with downwards positive, $a=+g$
- **Average Speed**: Total distance $\div$ total time

## M1.2: Motion in a Straight Line with Variable Acceleration


### Calculus in Kinematics

- **Relationships**:
  - $v = \frac{ds}{dt}$
  - $a = \frac{dv}{dt} = \frac{d^2s}{dt^2}$
  - $s = \int v\,dt + C_1$
  - $v = \int a\,dt + C_2$
  - Determine the constants from the initial position and velocity.
- **Application**: Using P1 calculus techniques

## M1.3: Forces and Newton's Laws


### Forces and Equilibrium

- **Common Forces**:
  - Weight: $W = mg$ ($g = 9.8 ms^{-2}$)
  - Tension, thrust, normal reaction, friction
  - Dynamic friction: $F = \mu R$
- **Newton's Laws**: Applied to straight-line motion
- **Connected Particles**: Light inextensible strings, smooth pulleys

## M1.4: Momentum and Impulse


### Momentum Principles

- **Momentum**: $p = mv$
- **Conservation**: Total momentum is conserved when the resultant external impulse is zero; use signed velocities along one chosen axis
- **Impulse**: Change in momentum, $I=m(v-u)$ for constant mass, using the same positive direction
- **Direct Impact**: With fixed smooth surface

</details>
