---
title: AS Further Mathematics
layout: subjects
reading_layout: true
mathjax: true
grade: as
subject: as-further-mathematics
permalink: /alevel/as-further-mathematics/
toc_headings: "#learning-route, #entry-diagnosis, #route-a, #route-b, #route-s, #route-m, #exit-check, #course-sources, #reference-notes"
redirect_from:
  - /alevel/asfm/
  - /alevel/asfm/index.html
---

## Start here {#learning-route}

This course builds on ordinary AS Mathematics and covers OxfordAQA **9665 FM01 and FM02**. New to the course? Start with [rational functions](/alevel/as-further-mathematics/rational-functions/). If you have already studied part of it, choose a branch below.

Each lesson builds the idea, shows complete reasoning, then gives you a turn. Hints and solutions open separately; record a hinted attempt as supported work. Use the feedback to repair an error, then attempt its matching retry.

Use the [entry diagnosis](#entry-diagnosis) if unsure about prerequisites, and the [mixed and later review](#exit-check) after a branch. The [old reference notes](#reference-notes) remain at the end for lookup.

### FM01 · Pure mathematics {#route-a}

Follow the order below. Complex numbers use trigonometry and quadratics; series uses factorisation; calculus builds on AS differentiation and integration.

- [Rational functions](/alevel/as-further-mathematics/rational-functions/) — Sketch, solve inequalities and justify a range.
- [Conics and loci](/alevel/as-further-mathematics/conics-and-loci/) — Connect distance conditions, equations and tangency.
- [Trigonometric equations](/alevel/as-further-mathematics/trigonometric-solutions/) — Give all solutions and explain their completeness.
- [Complex numbers and roots](/alevel/as-further-mathematics/complex-numbers-and-roots/) — Connect arithmetic, Argand geometry and transformed roots.
- [Series](/alevel/as-further-mathematics/series/) — Choose a summation method and test an infinite limit.
- [Rates and approximations](/alevel/as-further-mathematics/rates-and-approximations/) — Build a derivative, connect rates and check a small-change estimate.
- [Improper integrals](/alevel/as-further-mathematics/improper-integrals/) — Replace a singular endpoint by the correct limit.

### FM02 · Pure mathematics {#route-b}

Study matrices before transformations. Linearisation needs logarithms. Study rates before numerical roots, then Euler.

- [Matrix algebra](/alevel/as-further-mathematics/matrix-algebra/) — Check dimensions, inverses and multiplication order.
- [Plane transformations](/alevel/as-further-mathematics/transformations/) — Describe compositions, area and complete invariant lines.
- [Linearisation](/alevel/as-further-mathematics/linearisation/) — Choose axes, plot transformed data and estimate constants.
- [Numerical roots](/alevel/as-further-mathematics/numerical-roots/) — Trace each update and justify the precision claimed.
- [Euler’s method](/alevel/as-further-mathematics/euler-method/) — Use the old-point gradient and interpret the approximation.

### FM02 · Statistics {#route-s}

Start with Bayes, then the two distributions. Derive their moments before PGFs, then study linear combinations.

- [Bayes’ theorem](/alevel/as-further-mathematics/bayes/) — Build the tree and change the conditioning sample space.
- [Discrete uniform distribution](/alevel/as-further-mathematics/discrete-uniform/) — Check equal probabilities and derive both moments.
- [Geometric distribution](/alevel/as-further-mathematics/geometric-distribution/) — Define what is counted, calculate tails and derive moments.
- [Probability generating functions](/alevel/as-further-mathematics/generating-functions/) — Derive PGFs, extract probabilities and combine independent variables.
- [Linear combinations](/alevel/as-further-mathematics/linear-combinations/) — Handle negative coefficients, covariance and correlation.

### FM02 · Mechanics {#route-m}

Relative motion introduces two-dimensional vectors; dimensions checks equations; collisions also needs signed momentum from ordinary AS.

- [Relative motion](/alevel/as-further-mathematics/relative-motion/) — Model interception and closest approach with vectors and geometry.
- [Dimensional analysis](/alevel/as-further-mathematics/dimensions/) — Find units and exponents, then explain what dimensions cannot establish.
- [Impulse and collisions](/alevel/as-further-mathematics/impulse-and-collisions/) — Choose the system and direction before applying impulse or collision laws.

### Entry diagnosis and recovery {#entry-diagnosis}

Choose the parts relevant to your next branch. Show working before opening help; you do not need all five as a gate to starting a lesson.

<section class="lesson-check" markdown="1">

#### Prerequisite check

**Task (self-written):** (a) Factor $x^2-x-2$. (b) Solve $\sin\theta=1/2$ for $0\le\theta<2\pi$. (c) Differentiate $x^3$ and integrate $x^2$ from 0 to 2. (d) If $P(A)=0.4$ and $P(B\mid A)=0.2$, find $P(A\cap B)$. (e) A 2 kg particle changes velocity from −1 to 3 m s⁻¹; find its signed impulse.

<details markdown="1"><summary>Hint</summary>

Check product and sum, unit-circle quadrants, power rules, a joint probability and signed velocities.

</details>

<details markdown="1"><summary>Solution, checks and recovery</summary>

$$\begin{aligned}
    (a)&\quad(x-2)(x+1),\\
    (b)&\quad\theta=\pi/6,\ 5\pi/6,\\
    (c)&\quad3x^2,\quad[x^3/3]_0^2=8/3,\\
    (d)&\quad P(A\cap B)=0.4(0.2)=0.08,\\
    (e)&\quad J=2[3-(-1)]=8\ \mathrm{N\,s}.
    \end{aligned}$$

(a) [Quadratics](/alevel/as-mathematics/algebra/#l02); (b) [periodic interval solutions](/alevel/as-mathematics/trigonometry/#l16); (c) [derivatives](/alevel/as-mathematics/differentiation/#l06) and [definite integrals](/alevel/as-mathematics/integration/#l08); (d) [conditional probability](/alevel/as-mathematics/probability/#l18); (e) [signed momentum](/alevel/as-mathematics/momentum/). Expand the factors to check; use both sine quadrants; multiply probabilities along one path; subtract initial momentum from final momentum. After recovery, close this solution and attempt the matching part below.

</details>

</section>

<section class="lesson-check" markdown="1">

#### Retry after recovery

**Task (self-written):** (a) Factor $x^2+2x-3$. (b) Solve $\cos\theta=-1/2$ for $0\le\theta<2\pi$. (c) Differentiate $x^4$ and integrate $x$ from 0 to 3. (d) If $P(C)=0.3$ and $P(D\mid C)=0.5$, find $P(C\cap D)$. (e) A 3 kg particle changes velocity from 2 to −1 m s⁻¹; find its signed impulse.

<details markdown="1"><summary>Hint</summary>

Use the repaired principle; independently check signs and the interval.

</details>

<details markdown="1"><summary>Solution, checks and recovery</summary>

$$\begin{aligned}
    (a)&\quad(x+3)(x-1),\\
    (b)&\quad\theta=2\pi/3,\ 4\pi/3,\\
    (c)&\quad4x^3,\quad[x^2/2]_0^3=9/2,\\
    (d)&\quad P(C\cap D)=0.15,\\
    (e)&\quad J=3(-1-2)=-9\ \mathrm{N\,s}.
    \end{aligned}$$

The negative impulse points opposite to the chosen positive direction. If an error remains, use the matching recovery link above, then the chosen lesson’s entry check.

</details>

</section>

### Mixed and later review {#exit-check}

After the relevant branches, close the lesson pages and select a method yourself. These tasks sample connections; use them alongside each lesson’s more detailed independent checks, not as a complete examination.

<section class="lesson-check" markdown="1">

#### Mixed task 1

**Task (self-written):** Give the complete real solution of $\cos(2x)=1/2$ and decide whether $\int_1^\infty x^{-2}\,dx$ is finite. Explain both conclusions.

<details markdown="1"><summary>Hint</summary>

The periodic equation and infinite endpoint need different arguments.

</details>

<details markdown="1"><summary>Solution, checks and recovery</summary>

$$x=\pm\pi/6+n\pi,\qquad n\in\mathbb Z.$$

$$\int_1^\infty x^{-2}\,dx=\lim_{R\to\infty}(1-1/R)=1.$$


Cosine gives two phases per turn; dividing by 2 changes the period to π. Infinity is not a substitution value. Return to trigonometric solutions for missing branches or improper integrals for a missing limit, then their retries.

[Trigonometric equations](/alevel/as-further-mathematics/trigonometric-solutions/#model) · [Improper integrals](/alevel/as-further-mathematics/improper-integrals/#model)

</details>

</section>

<section class="lesson-check" markdown="1">

#### Mixed task 2

**Task (self-written):** A transformation is $\operatorname{diag}(3,1)$. Find all its invariant lines, including any that miss the origin, and all its fixed points.

<details markdown="1"><summary>Hint</summary>

Retain the intercept as well as slope, and check vertical lines separately.

</details>

<details markdown="1"><summary>Solution, checks and recovery</summary>

For $y=mx+c$, the image point is $(3x,mx+c)$. Requiring $mx+c=3mx+c$ for every $x$ gives $m=0$. Thus all $y=c$ are invariant. A vertical line $x=k$ maps to $x=3k$, so only $x=0$ is invariant. Fixed points satisfy $3x=x$, hence every point on $x=0$ and no others.

An invariant line allows points to move along it; a line of fixed points does not. If intercepts or verticals were missed, return to transformations and its retry.

[Plane transformations](/alevel/as-further-mathematics/transformations/#invariant-lines)

[Matching retry](/alevel/as-further-mathematics/transformations/#retry-lines)

</details>

</section>

<section class="lesson-check" markdown="1">

#### Mixed task 3

**Task (self-written):** Independent $X,Y$ have PGFs $(1+t)/2$ and $(t+t^2)/2$. Find $P(X+Y=2)$ and the variance of their sum, explaining where independence is used.

<details markdown="1"><summary>Hint</summary>

Use coefficients or enumerate outcomes for the probability, then independently check the variance.

</details>

<details markdown="1"><summary>Solution, checks and recovery</summary>

$$\begin{aligned}G_{X+Y}(t)&=(t+2t^2+t^3)/4,\\P(X+Y=2)&=1/2,\\\operatorname{Var}(X+Y)&=1/4+1/4=1/2.\end{aligned}$$

Independence allows joint probabilities and PGFs to multiply and makes covariance zero. X is equally likely 0 or 1, Y equally likely 1 or 2; two of four equally likely pairs sum to 2. Recover coefficients in PGFs or variance cross terms in linear combinations.

[Probability generating functions](/alevel/as-further-mathematics/generating-functions/#model) · [Linear combinations](/alevel/as-further-mathematics/linear-combinations/#model)

</details>

</section>

<section class="lesson-check" markdown="1">

#### Mixed task 4

**Task (self-written):** Two particles have relative position $(4-t,3)$ m for $t\ge0$ s. Find their closest distance and explain whether they collide. Give a geometric check.

<details markdown="1"><summary>Hint</summary>

Check the permitted times and whether the relative path passes through the origin.

</details>

<details markdown="1"><summary>Solution, checks and recovery</summary>

$$d^2=(t-4)^2+9.$$

The minimum occurs at $t=4$ s, which is allowed, and $d=3$ m. The relative path is the horizontal line $y=3$; its perpendicular distance from the origin is 3 m. It never reaches the origin, so the particles do not collide.

For confusion between intersecting paths and meeting, revisit common time and initial conditions in relative motion. Also return there if the time domain was not checked.

[Common time and initial conditions](/alevel/as-further-mathematics/relative-motion/#relative-position) · [Allowed nearest point](/alevel/as-further-mathematics/relative-motion/#closest-approach) · [Matching retries](/alevel/as-further-mathematics/relative-motion/#retry)

</details>

</section>

#### Return later

After studying another topic, close the old solutions and attempt these tasks. Record your first working, help used, error and retry; choose the interval to suit your course.

<section class="lesson-check" markdown="1">

#### Later task 1

**Task (self-written):** For integer $n\ge1$, let $X$ be uniform on $\{1,\ldots,n\}$ and let $Y=2X-1$. Derive $E(X)$ and $\operatorname{Var}(X)$ using finite sums, then find $E(Y)$ and $\operatorname{Var}(Y)$. Is $Y$ uniform on $\{1,2,\ldots,2n-1\}$? Explain.

<details markdown="1"><summary>Hint</summary>

Start with the probability of each value and calculate both moments; separately check the support.

</details>

<details markdown="1"><summary>Solution, checks and recovery</summary>

$$\begin{aligned}
    E(X)&=\frac1n\frac{n(n+1)}2=\frac{n+1}2,\\
    E(X^2)&=\frac{(n+1)(2n+1)}6,\\
    \operatorname{Var}(X)&=\frac{n^2-1}{12},\\
    E(Y)&=2E(X)-1=n,\\
    \operatorname{Var}(Y)&=4\operatorname{Var}(X)=\frac{n^2-1}3.
    \end{aligned}$$

Y takes only the odd integers 1,3,…,2n−1, each with probability 1/n. For n>1 it is not uniform on the full consecutive set stated; for n=1 both sets are {1}. Recover [squared coefficients](/alevel/as-further-mathematics/linear-combinations/#model) or [finite-sum moment derivations](/alevel/as-further-mathematics/discrete-uniform/#demonstration), close the old solution, then attempt [recovery retry 1](#later-retry-1) below.

</details>

</section>

<section class="lesson-check" markdown="1">

#### Later task 2

**Task (self-written):** A ball of mass $m>0$ hits a fixed smooth wall normally at speed $u>0$. Take the incoming direction as positive; its velocity after impact is $-eu$, where $0\le e\le1$ ($e=0$ means no immediate rebound). Find its impulse. Someone proposes that the contact duration is $km/u$, with dimensionless $k$. Assess this proposal, then check the dimensions of impulse.

<details markdown="1"><summary>Hint</summary>

Draw the signed velocities before and after; check system and units separately.

</details>

<details markdown="1"><summary>Solution, checks and recovery</summary>

$$J=m(-eu-u)=-(1+e)mu.$$

$$\begin{aligned}[km/u]&=MTL^{-1}\ne T,\\{}[J]&=MLT^{-1}.\end{aligned}$$

The wall supplies an external impulse, so momentum of the ball alone is not conserved. The duration has wrong dimensions and must be rejected; even matching dimensions would not determine a contact model or dimensionless constant. Recover [impulse and system choice](/alevel/as-further-mathematics/impulse-and-collisions/#wall-model) and [dimensional model limits](/alevel/as-further-mathematics/dimensions/#model-limits), then close this solution and attempt [recovery retry 2](#later-retry-2).

</details>

</section>

<section class="lesson-check" markdown="1">

#### Recovery retry 1 {#later-retry-1}

**Task (self-written):** For integer $r\ge1$, $U$ is uniform on $\{0,\ldots,r-1\}$ and $V=3U+2$. Derive $E(U)$ and $\operatorname{Var}(U)$ from finite sums, then find $E(V)$ and $\operatorname{Var}(V)$. Is $V$ uniform on all integers from 2 to $3r-1$? Include the single-point case.

<details markdown="1"><summary>Hint</summary>

Write each probability, then weight values and squares separately.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
 E(U)&=\frac1r\sum_{j=0}^{r-1}j=\frac{r-1}2,\\
 E(U^2)&=\frac1r\sum_{j=0}^{r-1}j^2\\
 &=\frac{(r-1)(2r-1)}6,\\
 \operatorname{Var}(U)&=E(U^2)-[E(U)]^2\\
 &=\frac{r^2-1}{12},\\
 E(V)&=3E(U)+2=\frac{3r+1}2,\\
 \operatorname{Var}(V)&=9\operatorname{Var}(U)=\frac{3(r^2-1)}4.
 \end{aligned}$$

V has support 2,5,…,3r−1, with probability 1/r each. For r>1 there are gaps, so it is not uniform over the full consecutive set. At r=1 it is constant at 2, with variance zero. The finite-sum reasoning is required; quoting a distribution formula still leaves the derivation difficulty unrepaired.

</details>

</section>

<section class="lesson-check" markdown="1">

#### Recovery retry 2 {#later-retry-2}

**Task (self-written):** A 0.5 kg ball approaches a fixed wall at speed 4 m s⁻¹ and leaves at speed 1 m s⁻¹. Take the direction away from the wall as positive. Find the signed impulse on the ball, and explain whether its momentum is conserved. A student proposes $J=mv^2$ for impulse, with $v$ a speed. Check this dimensionally; would matching dimensions prove a collision law?

<details markdown="1"><summary>Hint</summary>

Assign both signed velocities first, then check the system boundary and MLT.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
 u&=-4\ \mathrm{m\,s^{-1}},\\
 v&=1\ \mathrm{m\,s^{-1}},\\
 J&=0.5[1-(-4)]\\
 &=2.5\ \mathrm{N\,s},\\
 [mv^2]&=ML^2T^{-2},\\
 {}[J]&=MLT^{-1}.
 \end{aligned}$$

The positive impulse points away from the wall. The wall exerts an external impulse on the ball, whose momentum alone is not conserved. The proposed dimensions fail; even matching dimensions would only pass a necessary check, not prove a model or determine dimensionless constants. If speeds were used as signed velocities, draw the arrows first, then close this answer and reconstruct the momentum change.

</details>

</section>

### Scope, assessment and sources {#course-sources}

<details markdown="1"><summary>Course identity and reference material</summary>

Scope follows the [9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), §§3.1–3.2: FM01 is FP1; FM02 comprises FPP1, FS1 and FM1. Each paper is 90 minutes, 80 marks, 50% of AS; FM02 has 40 pure, 20 statistics and 20 mechanics marks. FM01 assumes ordinary AS pure mathematics; FM02 assumes ordinary AS and FP1. The 20 lesson groups cover 18 official topics; induction, De Moivre, 3×3 inverses and eigenvalues are not prerequisites or required additions here.

The public FM01 QP body says **Specimen 2018 Morning**; its 2019/v3 filename and the paired MS copyright 2017 do not identify a formal 2019 sitting. FM02 is **June 2024**, examined 16 May 2024, with Version 1.0 Final MS. Lessons identify the QP/MS questions and pages actually read. All new tasks are self-written; their checks are not official marks.

Paper-specific precision and command words determine the evidence needed; calculators do not replace proofs, derivations or graphs. No new calculator hardware or exam-mode verification is claimed. Content and technical checks are recorded separately in the implementation documents; this course awaits student trial and makes no claim of verified learning effectiveness.

</details>

## Archived reference {#reference-notes}

The old notes are retained for lookup and existing bookmarks. Use the learning route above for current lessons and practice.

<details markdown="1">
<summary>Open the old English reference notes</summary>


<h1 id="️-as-level-course-structure">🏗️ AS Level Course Structure</h1>


<h2 id="two-compulsory-units">Two Compulsory Units:</h2>


<h3 id="unit-fp1-pure-mathematics">Unit FP1: Pure Mathematics</h3>

- **Duration**: 1 hour 30 minutes
- **Marks**: 80
- **Weighting**: 50% of AS, 20% of A-level
- **Calculator**: Allowed
- **Focus**: Advanced algebra, complex numbers, series, calculus

<h3 id="unit-fpsm1-pure-mathematics-statistics-and-mechanics">Unit FPSM1: Pure Mathematics, Statistics and Mechanics</h3>

- **Duration**: 1 hour 30 minutes
- **Marks**: 80
- **Weighting**: 50% of AS, 20% of A-level
- **Calculator**: Allowed
- **Breakdown**:
  - 40 marks Pure Mathematics
  - 20 marks Statistics
  - 20 marks Mechanics

---

<h1 id="-unit-fp1-pure-mathematics">📘 Unit FP1: Pure Mathematics</h1>

<h2 id="1-algebra-and-graphs-fp11">1. Algebra and Graphs (FP1.1)</h2>


<h3 id="11-rational-functions---complete-foundation">1.1 Rational Functions - Complete Foundation</h3>


**Basic Forms:**

Rational functions come in several key types:

$$y = \frac{ax + b}{cx + d} \quad \text{(Linear/Linear)}$$

$$y = \frac{ax + b}{cx^2 + dx + e} \quad \text{(Linear/Quadratic)}$$

$$y = \frac{x^2 + ax + b}{x^2 + cx + d} \quad \text{(Quadratic/Quadratic)}$$

**Step-by-Step Analysis:**

**Step 1: Finding Asymptotes**

*Vertical asymptotes*: cancel common factors first, while retaining exclusions from the original domain. A zero of the remaining denominator gives a vertical asymptote. An excluded point where the simplified denominator is non-zero is a removable hole.
- For $$y = \frac{x+2}{x-3}$$, set $x - 3 = 0$, so vertical asymptote at $x = 3$

*Horizontal asymptotes* depend on comparing degrees:
- If degree(numerator) < degree(denominator): $y = 0$
- If degrees are equal: $y = \dfrac{\text{leading coeff of numerator}}{\text{leading coeff of denominator}}$

**Step 2: Finding Intercepts**

- **x-intercepts**: Set numerator = 0, excluding points outside the original domain
- **y-intercepts**: Set x = 0, if the function is defined there

**Step 3: Stationary Points (Without Calculus)**

For rational function $$y = \frac{P(x)}{Q(x)}$$:

1. Set $y = k$ to get $$P(x) = kQ(x)$$
2. Rearrange into quadratic: $Ax^2 + Bx + C = 0$
3. When $A\ne0$, real solutions require $B^2-4AC\geq0$. Treat $A=0$ separately: the equation may become linear, inconsistent or an identity.
4. Check every candidate against the original denominator restrictions. A repeated admissible root can identify a tangency and hence a stationary value; a boundary caused by a missing point, a limiting value or degree reduction need not be a stationary point.

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

<h3 id="12-conic-sections---deep-understanding">1.2 Conic Sections - Deep Understanding</h3>


The four main conic sections have distinct geometric properties:

**Parabola**: $y^2 = 4ax$

- **Focus:** $(a, 0)$
- **Directrix:** $x = -a$
- **Key property:** All points equidistant from focus and directrix

**Ellipse:** $$\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$$

For the horizontal major axis described below, assume $a>b>0$.

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

<h2 id="2-coordinate-geometry-fp12">2. Coordinate Geometry (FP1.2)</h2>


<h3 id="locus-problems---systematic-approach">Locus Problems - Systematic Approach</h3>


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

<h2 id="3-complex-numbers-fp13">3. Complex Numbers (FP1.3)</h2>

<h3 id="31-what-are-complex-numbers">3.1 What are Complex Numbers?</h3>


(Tips: Real Part function and Imaginary Part function looks like $$\Re(z)$$ and $$\Im(z)$$ in computer respectively.)

**Foundation Concept**: $$\sqrt{-1} = i$$where$$i^2 = -1$$

**Standard Form**: $$z = x + iy$$
- Real part: $$\Re(z) = x$$
- Imaginary part: $$\Im(z) = y$$

<h3 id="32-basic-operations---step-by-step">3.2 Basic Operations - Step by Step</h3>


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

<h3 id="33-different-forms-of-complex-numbers">3.3 Different Forms of Complex Numbers</h3>


**Cartesian Form:**
$$z = x + iy$$

**Polar Form:**
$$z = r(\cos θ + i\sin θ)$$

where:
- **Modulus:** $r = \lvert z\rvert = \sqrt{x^2 + y^2}$
- **Argument:** For $z\ne0$ and $x\ne0$, use $\tan^{-1}(y/x)$ and adjust for the quadrant. On the imaginary axis, the principal argument is $\pi/2$ if $y>0$ and $-\pi/2$ if $y<0$. The argument of zero is undefined; principal arguments here lie in $(-\pi,\pi]$.

**Conversion Examples**

*Cartesian to Polar:*

For $3 + 4i$:
- $r = \sqrt{9 + 16} = 5$
- $θ = \tan^{-1}(4/3) ≈ 53.13°$

*Polar to Cartesian:*

For $2(\cos 60° + i\sin 60°)$:
$$2(0.5 + i\tfrac{\sqrt{3}}{2}) = 1 + i\sqrt{3}$$

<h3 id="34-complex-conjugates">3.4 Complex Conjugates</h3>


**Definition:**

If $z = x + iy$, then the conjugate $z^* = x - iy$

**Properties:**

- $$z + z^* = 2\Re(z)$$
- $$z - z^* = 2i\Im(z)$$
- $$zz^* = \lvert z\rvert^2 = x^2 + y^2$$

<h3 id="35-argand-diagram-and-loci">3.5 Argand Diagram and Loci</h3>


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

<h2 id="4-roots-and-coefficients-fp14">4. Roots and Coefficients (FP1.4)</h2>


<h3 id="41-fundamental-relationships">4.1 Fundamental Relationships</h3>


For quadratic equation $$ax^2 + bx + c = 0$$ with roots $α$ and $β$:

**Sum of roots:**
$$α + β = -\frac{b}{a}$$

**Product of roots:**
$$αβ = \frac{c}{a}$$

<h3 id="42-advanced-manipulations">4.2 Advanced Manipulations</h3>


**Common Expressions** (derived from sum and product):

$$α^2 + β^2 = (α + β)^2 - 2αβ$$

$$α^3 + β^3 = (α + β)^3 - 3αβ(α + β)$$

$$α^4 + β^4 = (α^2 + β^2)^2 - 2(αβ)^2$$

$$\frac{1}{α} + \frac{1}{β} = \frac{α + β}{αβ}$$

<h3 id="43-forming-new-equations">4.3 Forming New Equations</h3>


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

<h2 id="5-series-fp15">5. Series (FP1.5)</h2>


<h3 id="51-essential-summation-formulas">5.1 Essential Summation Formulas</h3>


**Use and understand** these three fundamental results:

$$\sum_{r=1}^n r = \frac{n(n+1)}{2}$$

$$\sum_{r=1}^n r^2 = \frac{n(n+1)(2n+1)}{6}$$

$$\sum_{r=1}^n r^3 = \left[\frac{n(n+1)}{2}\right]^2$$

<h3 id="52-method-of-differences">5.2 Method of Differences</h3>


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

<h3 id="53-advanced-summation-examples">5.3 Advanced Summation Examples</h3>


**Example 1:**

Find $\sum_{r=1}^n r(r+1)(r+2)$

**Key observation:** Notice that
$$r(r+1)(r+2) = \frac{1}{4}[r(r+1)(r+2)(r+3) - (r-1)r(r+1)(r+2)]$$

Using telescoping sum:
$$\sum_{r=1}^n r(r+1)(r+2) = \frac{1}{4}n(n+1)(n+2)(n+3)$$

**Example 2:**

Find $\sum_{r=1}^n (2r-1)(2r+1)$

**Method:** Expand $(2r-1)(2r+1)=4r^2-1$ and use the square-sum formula.

$$\sum_{r=1}^n(2r-1)(2r+1)=\frac{n(4n^2+6n-1)}3.$$

---

<h2 id="6-trigonometry-fp16---general-solutions">6. Trigonometry (FP1.6) - General Solutions</h2>


<h3 id="61-solving-trigonometric-equations">6.1 Solving Trigonometric Equations</h3>


**General Solutions Formulas:**

$$\sin θ = k \quad \Rightarrow \quad θ = nπ + (-1)^n α$$ 

$$\text{where } α = \sin^{-1}k$$

$$\cos θ = k \quad \Rightarrow \quad θ = 2nπ ± α$$ 

$$\text{where } α = \cos^{-1}k$$

$$\tan θ = k \quad \Rightarrow \quad θ = nπ + α$$ 

$$\text{where } α = \tan^{-1}k$$

---

<h3 id="62-exact-values---must-know">6.2 Exact Values - Must Know</h3>


**Standard Angles:**

| Angle | $\sin$ | $\cos$ | $\tan$ |
|-------|--------|--------|--------|
| $0°$ | $0$ | $1$ | $0$ |
| $30°$ | $\frac{1}{2}$ | $\frac{\sqrt{3}}{2}$ | $\frac{1}{\sqrt{3}}$ |
| $45°$ | $\frac{1}{\sqrt{2}}$ | $\frac{1}{\sqrt{2}}$ | $1$ |
| $60°$ | $\frac{\sqrt{3}}{2}$ | $\frac{1}{2}$ | $\sqrt{3}$ |
| $90°$ | $1$ | $0$ | undefined |

---

<h3 id="63-worked-examples">6.3 Worked Examples</h3>


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

<h2 id="7-calculus-fp17">7. Calculus (FP1.7)</h2>


<h3 id="71-first-principles-differentiation">7.1 First Principles Differentiation</h3>


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

<h3 id="72-connected-rates-of-change">7.2 Connected Rates of Change</h3>


Using the chain rule to relate rates of change of different variables:

$$\frac{dy}{dt} = \frac{dy}{dx} × \frac{dx}{dt}$$

**Example:** Pressure-Volume Relationship

In this hypothetical mathematical model, $P = kV^3$ with constant $k$; this is a stipulated relationship, not a general gas law. If volume $V$ is changing with time:

$$\frac{dP}{dt} = \frac{dP}{dV} × \frac{dV}{dt} = 3kV^2 × \frac{dV}{dt}$$

This shows how the rate of change of pressure depends on both the current volume and the rate at which volume is changing.

---

<h3 id="73-small-changes">7.3 Small Changes</h3>


For small changes in independent variable, we can estimate changes in dependent variable:

$$δy ≈ \frac{dy}{dx} × δx$$

**Example:** Estimating Change

For $y = 20x^{-2}$, estimate change in $y$ when $x$ increases from $5$ to $5.1$.

**Step 1:** Find the derivative
$$\frac{dy}{dx} = -40x^{-3} = -\frac{40}{x^3}$$

**Step 2:** Evaluate at $x = 5$
$$\frac{dy}{dx}\bigg\vert _{x=5} = -\frac{40}{125} = -0.32$$

**Step 3:** Calculate small change
$$δx = 5.1 - 5 = 0.1$$

**Step 4:** Estimate $δy$
$$δy ≈ -0.32 × 0.1 = -0.032$$

Therefore, $y$ decreases by approximately $0.032$ when $x$ increases to $5.1$.

---

<h3 id="74-improper-integrals">7.4 Improper Integrals</h3>


**Type 1**: Infinite limits $$\int_a^∞ f(x)dx = \lim\limits_{b \to ∞} \int_a^b f(x)dx$$

**Type 2**: Infinite integrand $$\int_a^b f(x)dx$$ where $f(x) \rightarrow \infty$ at some point

**Examples**:
1. $$\int_0^4 \frac{1}{\sqrt{x}}dx = \lim_{a \to 0} \int_a^4 x^{-\frac{1}{2}}dx = \lim_{a \to 0} [2\sqrt{x}]_a^4 = 4$$
2. $$\int_4^\infty x^{-\frac{3}{2}}dx = \lim_{b \to \infty} [-\frac{2}{\sqrt{x}}]_4^b = 1$$

---

<h1 id="-unit-fpsm1-pure-mathematics-statistics-and-mechanics">📗 Unit FPSM1: Pure Mathematics, Statistics and Mechanics</h1>


<h2 id="fpp11-matrices-and-transformations">FPP1.1: Matrices and Transformations</h2>


<h3 id="11-matrix-algebra">1.1 Matrix Algebra</h3>


<h3 id="definitions">Definitions</h3>

A **matrix** is a rectangular array of numbers. An $m \times n$ matrix has $m$ rows and $n$ columns.

<h3 id="addition-and-subtraction">Addition and Subtraction</h3>

Matrices can be added or subtracted only if they have the same dimensions. Add or subtract corresponding elements.

**Example**:
$$\begin{pmatrix} 2 & -1 \\ 3 & 0 \end{pmatrix} + \begin{pmatrix} 1 & 4 \\ -2 & 5 \end{pmatrix} = \begin{pmatrix} 3 & 3 \\ 1 & 5 \end{pmatrix}$$

<h3 id="scalar-multiplication">Scalar Multiplication</h3>

Multiply every element by the scalar.

**Example**:
$$3\begin{pmatrix} 2 & -1 \\ 0 & 4 \end{pmatrix} = \begin{pmatrix} 6 & -3 \\ 0 & 12 \end{pmatrix}$$

<h3 id="matrix-multiplication">Matrix Multiplication</h3>

For $A_{m \times n}$ and $B_{n \times p}$, the product $C = AB$ is $m \times p$ where:
$$c_{ij} = \sum_{k=1}^{n} a_{ik} b_{kj}$$

**Important**: Matrix multiplication is **not commutative** ($AB \neq BA$ in general).

**Example**:
$$\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} \begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix} = \begin{pmatrix} 1\times5 + 2\times7 & 1\times6 + 2\times8 \\ 3\times5 + 4\times7 & 3\times6 + 4\times8 \end{pmatrix} = \begin{pmatrix} 19 & 22 \\ 43 & 50 \end{pmatrix}$$

<h3 id="identity-matrix">Identity Matrix</h3>

The $n \times n$ identity matrix $I_n$ has 1s on the main diagonal and 0s elsewhere.
$$I_2 = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}, \quad I_3 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$

For any matrix $A$, $AI = IA = A$ (provided dimensions are compatible).

<h3 id="inverse-of-a-2-times-2-matrix">Inverse of a $2 \times 2$ Matrix</h3>

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

<h3 id="transpose-of-a-matrix">Transpose of a Matrix</h3>

The transpose $A^T$ is obtained by swapping rows and columns.
- $(A^T)\_{ij} = A\_{ji}$
- $(AB)^T = B^T A^T$
- $(A^{-1})^T = (A^T)^{-1}$

---

<h3 id="12-transformations-in-the-x-y-plane">1.2 Transformations in the $x$-$y$ Plane</h3>


A $2 \times 2$ matrix $M$ represents a linear transformation mapping a point $(x,y)$ to $(x',y')$:
$$\begin{pmatrix} x' \\ y' \end{pmatrix} = M \begin{pmatrix} x \\ y \end{pmatrix}$$

<h3 id="standard-transformation-matrices">Standard Transformation Matrices</h3>


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

<h3 id="combinations-of-transformations">Combinations of Transformations</h3>

If transformation $T_1$ has matrix $M_1$ and $T_2$ has matrix $M_2$, then applying $T_1$ **followed by** $T_2$ gives:
$$\begin{pmatrix} x' \\ y' \end{pmatrix} = M_2 M_1 \begin{pmatrix} x \\ y \end{pmatrix}$$
**Order matters**: $M_2 M_1$ means apply $M_1$ first, then $M_2$.

**Example**: Find the matrix for a rotation of $90^\circ$ anticlockwise followed by a reflection in the $x$-axis.

Rotation $90^\circ$: $R = \begin{pmatrix} 0 & -1 \\\\ 1 & 0 \end{pmatrix}$

Reflection in $x$-axis: $S = \begin{pmatrix} 1 & 0 \\\\ 0 & -1 \end{pmatrix}$

Combined: $SR = \begin{pmatrix} 1 & 0 \\\\ 0 & -1 \end{pmatrix} \begin{pmatrix} 0 & -1 \\\\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 0 & -1 \\\\ -1 & 0 \end{pmatrix}$

<h3 id="determinant-and-area-scale-factor">Determinant and Area Scale Factor</h3>

For a $2 \times 2$ matrix $M$:
- $\lvert \det(M) \rvert$ = factor by which area is scaled
- If $\det(M) = 0$, the transformation maps the plane onto a line, or onto the origin if $M$ is the zero matrix (singular)
- If $\det(M) < 0$, orientation is reversed (e.g., includes a reflection)

**Example**: The matrix $\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \end{pmatrix}$ has determinant $6$, so area is multiplied by $6$.

---

<h3 id="13-invariant-points-and-lines">1.3 Invariant Points and Lines</h3>


<h3 id="invariant-points">Invariant Points</h3>

A point $\mathbf{x}$ is **invariant** if $M\mathbf{x} = \mathbf{x}$.

**Method**: Solve $(M - I)\mathbf{x} = \mathbf{0}$.

**Example**: For $M = \begin{pmatrix} 0 & 1 \\\\ 1 & 0 \end{pmatrix}$ (reflection in $y=x$):

$(M - I) = \begin{pmatrix} -1 & 1 \\\\ 1 & -1 \end{pmatrix}$

Solve $\begin{pmatrix} -1 & 1 \\\\ 1 & -1 \end{pmatrix} \begin{pmatrix} x \\\\ y \end{pmatrix} = \begin{pmatrix} 0 \\\\ 0 \end{pmatrix}$ gives $-x + y = 0$ and $x - y = 0$, so $y = x$.

Thus all points on the line $y = x$ are invariant (the mirror line itself).

<h3 id="lines-of-invariant-points">Lines of Invariant Points</h3>

A **line of invariant points** means every point on that line is individually invariant (maps to itself).

<h3 id="invariant-lines">Invariant Lines</h3>

A line is **invariant** if every point on it maps to a point on the same line (not necessarily itself). The method below finds invariant lines through the origin.

**Method**: Let the line be $y = mx$. Any point on it is $(t, mt)$. After transformation, we require the image to satisfy $y' = m x'$.

**Example**: For $M = \begin{pmatrix} 2 & 0 \\\\ 0 & 1 \end{pmatrix}$ (stretch in $x$), find invariant lines through the origin.

Let $(x,y) = (t, mt)$. Then $(x',y') = (2t, mt)$.

For this to lie on $y = mx$: $mt = m(2t) \Rightarrow mt = 2mt \Rightarrow mt(1-2) = 0 \Rightarrow -mt = 0$.

So either $m = 0$ or $t = 0$ (trivial). Thus $m = 0$ is a solution.

Also check vertical lines $x = 0$: $(0,t) \to (0,t)$ maps to itself, so $x = 0$ is also invariant.

Thus the invariant lines through the origin are $y=0$ and $x=0$. More generally, every horizontal line $y=c$ is invariant for this transformation.

---

<h2 id="fpp12-linear-graphs--reducing-to-linear-form">FPP1.2: Linear Graphs – Reducing to Linear Form</h2>


<h3 id="21-transforming-non-linear-relationships">2.1 Transforming Non-Linear Relationships</h3>


When experimental data suggests a relationship of the form $y = kx^n$ or $y = k \cdot a^x$, we can take logarithms to obtain a linear equation.

<h3 id="case-1-power-law-y--kxn">Case 1: Power Law $y = kx^n$</h3>

Take natural logs (or $\log_{10}$):
$$\ln y = \ln k + n \ln x$$
Plot $\ln y$ against $\ln x$: gradient $= n$, intercept $= \ln k$.

<h3 id="case-2-exponential-law-y--k-cdot-ax">Case 2: Exponential Law $y = k \cdot a^x$</h3>

Take logs:
$$\ln y = \ln k + x \ln a$$
Plot $\ln y$ against $x$: gradient $= \ln a$, intercept $= \ln k$.

<h3 id="case-3-reciprocal-relationship-frac1y--a--fracbx">Case 3: Reciprocal Relationship $\frac{1}{y} = a + \frac{b}{x}$</h3>

Plot $\frac{1}{y}$ against $\frac{1}{x}$: gradient $= b$, intercept $= a$.

<h3 id="case-4-quadratic-form-y2--ax3--b">Case 4: Quadratic Form $y^2 = ax^3 + b$</h3>

Plot $y^2$ against $x^3$: gradient $= a$, intercept $= b$.

**Worked Example**:
The following constructed data illustrate an exact power law; they are not experimental measurements:

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

<h2 id="fpp13-numerical-methods">FPP1.3: Numerical Methods</h2>


<h3 id="31-location-of-roots">3.1 Location of Roots</h3>


If $f(x)$ is continuous on $[a,b]$ and $f(a)$ and $f(b)$ have opposite signs, then there is at least one root in $(a,b)$.

<h3 id="32-interval-bisection">3.2 Interval Bisection</h3>


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

After five iterations the retained interval is $[1.3125,1.34375]$. Its midpoint is $1.328125$, with absolute error at most $0.015625$ for the root in this bracket. These five steps do not justify reporting $1.324$; continue the table if more precision is required. Continuity gives a root in each sign-changing bracket, and $f'(x)=3x^2-1>0$ on $[1,2]$ makes this root unique.

<h3 id="33-linear-interpolation">3.3 Linear Interpolation</h3>


Use similar triangles to estimate root:
$$c = a - \frac{f(a)(b-a)}{f(b)-f(a)}$$

**Example**: For $f(x) = x^3 - x - 1$ on $[1,2]$:

$f(1) = -1$, $f(2) = 5$
$$c = 1 - \frac{(-1)(2-1)}{5 - (-1)} = 1 - \frac{-1}{6} = 1 + \frac{1}{6} = 1.1667$$

This is often faster than bisection but less reliable.

<h3 id="34-newton-raphson-method">3.4 Newton-Raphson Method</h3>


**Formula**:
$$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$$

**Geometric interpretation**: At each step, follow the tangent line to the $x$-axis.

**Example**: $f(x) = x^3 - x - 1$, $f'(x) = 3x^2 - 1$

Start with $x_0 = 1.5$:

$$x_1=1.5-\frac{0.875}{5.75}=1.347826086\ldots$$

| $n$ | $x_n$ (6 decimal places) |
|---|---|
| 0 | 1.500000 |
| 1 | 1.347826 |
| 2 | 1.325200 |
| 3 | 1.324718 |

Retain unrounded values during the iteration, and round only the reported answer.

Converges rapidly to root ≈ 1.3247.

**Convergence conditions**:
- $f'(x) \neq 0$ near root
- Initial guess sufficiently close to root
- For multiple roots, convergence is slower

---

<h3 id="35-eulers-method-for-differential-equations">3.5 Euler’s Method for Differential Equations</h3>


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

**Accuracy**: On a fixed finite interval, Euler's method converges as $h$ tends to zero under suitable smoothness and stability conditions. Reducing $h$ often improves accuracy, but two close approximations alone do not prove an error bound. Check the model, endpoint and accumulated rounding; do not assume that every individual smaller step must improve the answer.

---

<h2 id="fs11-bayes-theorem">FS1.1: Bayes’ Theorem</h2>


<h3 id="11-conditional-probability-review">1.1 Conditional Probability Review</h3>


$$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$

**Multiplication Rule**: $P(A \cap B) = P(A \mid B)P(B) = P(B \mid A)P(A)$

<h3 id="12-law-of-total-probability">1.2 Law of Total Probability</h3>


For a partition of the sample space into events $A_1, A_2, \dots, A_n$:
$$P(B) = \sum_{i=1}^n P(B \mid A_i)P(A_i)$$

<h3 id="13-bayes-theorem">1.3 Bayes’ Theorem</h3>


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

<h3 id="14-tree-diagrams">1.4 Tree Diagrams</h3>


Bayes' theorem problems are often solved using tree diagrams:
- First branch: probabilities of $A_i$
- Second branch: conditional probabilities of $B$ given $A_i$
- Multiply along branches to get joint probabilities
- Conditional probability = joint / total

---

<h2 id="fs12-discrete-uniform-distribution">FS1.2: Discrete Uniform Distribution</h2>


<h3 id="21-definition">2.1 Definition</h3>


A discrete random variable $X$ is **uniform** on the consecutive integers $a,a+1,\ldots,b$ if each has the same probability. Let $N=b-a+1$, with integers $a\leq b$.

<h3 id="22-probability-mass-function-pmf">2.2 Probability Mass Function (PMF)</h3>


$$P(X=x)=\begin{cases}1/N, & x\in\{a,a+1,\ldots,b\} \\ 0, & \text{otherwise}\end{cases}$$

<h3 id="23-cumulative-distribution-function-cdf">2.3 Cumulative Distribution Function (CDF)</h3>


$$F(x)=\begin{cases}0, & x<a \\ (\lfloor x\rfloor-a+1)/N, & a\leq x<b \\ 1, & x\geq b\end{cases}$$

The CDF is a step function; $\lfloor x\rfloor$ is the greatest integer not exceeding $x$.

<h3 id="24-mean-and-variance">2.4 Mean and Variance</h3>


$$E(X) = \frac{a+b}{2}$$

$$\text{Var}(X)=\frac{N^2-1}{12}$$

**Derivation of variance**:

Let $Y=X-a$, so $Y$ is uniform on $0,1,\ldots,N-1$.

$$E(Y)=\frac{N-1}{2},\qquad E(Y^2)=\frac{(N-1)(2N-1)}{6}$$

$$\text{Var}(X)=\text{Var}(Y)=\frac{(N-1)(2N-1)}{6}-\left(\frac{N-1}{2}\right)^2=\frac{N^2-1}{12}$$

<h3 id="25-probability-calculations">2.5 Probability Calculations</h3>


$$P(c\leq X\leq d)=\frac{d-c+1}{N}\quad\text{for integers }a\leq c\leq d\leq b$$

**Example (self-written)**: $X$ is uniform on $\{2,3,4,5,6,7,8\}$. Find $P(X>5)$.

The favourable values are $6,7,8$, so $P(X>5)=3/7$. Also, $E(X)=5$ and $\text{Var}(X)=(7^2-1)/12=4$.

---

<h2 id="fs13-geometric-distribution">FS1.3: Geometric Distribution</h2>


<h3 id="31-definition">3.1 Definition</h3>


The geometric distribution models the number of trials needed to achieve the **first success** in a sequence of independent Bernoulli trials, each with probability of success $p$.

**Notation**: $X \sim \text{Geom}(p)$

<h3 id="32-probability-mass-function">3.2 Probability Mass Function</h3>


$$P(X = k) = (1-p)^{k-1}p, \quad k = 1, 2, 3, \dots$$

**Interpretation**: First $k-1$ trials are failures (probability $1-p$ each), then the $k$th trial is a success (probability $p$).

<h3 id="33-cumulative-distribution-function">3.3 Cumulative Distribution Function</h3>


$$P(X \leq k) = 1 - (1-p)^k$$

$$P(X > k) = (1-p)^k$$

<h3 id="34-mean-and-variance">3.4 Mean and Variance</h3>


$$E(X) = \frac{1}{p}$$

$$\text{Var}(X) = \frac{1-p}{p^2}$$

**Derivation of mean**:
$$E(X) = \sum_{k=1}^\infty k(1-p)^{k-1}p = p \sum_{k=1}^\infty k(1-p)^{k-1}$$
Using $\sum_{k=1}^\infty k r^{k-1} = \frac{1}{(1-r)^2}$ for $\lvert r \rvert < 1$:
$$E(X) = p \cdot \frac{1}{[1-(1-p)]^2} = p \cdot \frac{1}{p^2} = \frac{1}{p}$$

<h3 id="35-memoryless-property">3.5 Memoryless Property</h3>


$$P(X > m+n \mid X > m) = P(X > n)$$

The geometric distribution is the only discrete distribution with this property.

**Example**: In a game with $p = 0.2$, find the probability that the first success occurs on the 4th trial.

$P(X = 4) = (0.8)^3 \times 0.2 = 0.512 \times 0.2 = 0.1024$

---

<h2 id="fs14-probability-generating-functions-pgf">FS1.4: Probability Generating Functions (PGF)</h2>


<h3 id="41-definition">4.1 Definition</h3>


For a discrete random variable $X$ taking non-negative integer values, the **probability generating function** is:
$$G_X(t) = E(t^X) = \sum_{x=0}^\infty t^x P(X = x)$$

$t$ is a dummy variable; the series converges for $\lvert t \rvert \leq 1$.

<h3 id="42-properties">4.2 Properties</h3>


**Property 1**: $G_X(1) = \sum_{x=0}^\infty P(X = x) = 1$

**Property 2**: $P(X = k) = \frac{G_X^{(k)}(0)}{k!}$ (the coefficient of $t^k$ in the expansion)

**Property 3**: $E(X) = G_X'(1)$

**Property 4**: $E(X(X-1)) = G_X''(1)$

**Property 5**: $\text{Var}(X) = G_X''(1) + G_X'(1) - [G_X'(1)]^2$

**Derivation**:
$G_X'(t) = \sum_{x=0}^\infty x t^{x-1} P(X = x)$, so $G_X'(1) = \sum x P(X = x) = E(X)$
$G_X''(t) = \sum_{x=0}^\infty x(x-1) t^{x-2} P(X = x)$, so $G_X''(1) = E(X(X-1))$
Then $\text{Var}(X) = E(X^2) - [E(X)]^2 = E(X(X-1)) + E(X) - [E(X)]^2$

<h3 id="43-pgfs-for-common-distributions">4.3 PGFs for Common Distributions</h3>


| Distribution | PGF $G_X(t)$ |
|--------------|--------------|
| Bernoulli$(p)$ | $1-p + pt$ |
| Binomial$(n,p)$ | $(1-p + pt)^n$ |
| Geometric$(p)$ | $\frac{pt}{1-(1-p)t}$ |
| Poisson$(\lambda)$ | $e^{\lambda(t-1)}$ |
| Uniform on $\{1,2,\dots,n\}$ | $\frac{t+t^2+\cdots+t^n}{n}$ (including $t=1$) |

**Derivation for Poisson**:
$$G_X(t) = \sum_{x=0}^\infty t^x \frac{e^{-\lambda}\lambda^x}{x!} = e^{-\lambda} \sum_{x=0}^\infty \frac{(\lambda t)^x}{x!} = e^{-\lambda} e^{\lambda t} = e^{\lambda(t-1)}$$

<h3 id="44-sum-of-independent-random-variables">4.4 Sum of Independent Random Variables</h3>


If $X$ and $Y$ are independent discrete random variables, then:
$$G_{X+Y}(t) = G_X(t) \cdot G_Y(t)$$

**Proof**: $G_{X+Y}(t) = E(t^{X+Y}) = E(t^X t^Y) = E(t^X)E(t^Y) = G_X(t)G_Y(t)$ by independence.

**Example**: $X \sim \text{Po}(\lambda_1)$, $Y \sim \text{Po}(\lambda_2)$ independent.
$G_{X+Y}(t) = e^{\lambda_1(t-1)} \cdot e^{\lambda_2(t-1)} = e^{(\lambda_1+\lambda_2)(t-1)}$
Thus $X+Y \sim \text{Po}(\lambda_1+\lambda_2)$.

---

<h2 id="fs15-linear-combinations-of-discrete-random-variables">FS1.5: Linear Combinations of Discrete Random Variables</h2>


<h3 id="51-expectation-of-a-linear-combination">5.1 Expectation of a Linear Combination</h3>


For constants $a$ and $b$:
$$E(aX + bY) = aE(X) + bE(Y)$$

More generally:
$$E\left(\sum_{i=1}^n a_i X_i\right) = \sum_{i=1}^n a_i E(X_i)$$

<h3 id="52-variance-of-a-linear-combination">5.2 Variance of a Linear Combination</h3>


For $Z = aX + bY$:
$$\text{Var}(Z) = a^2\text{Var}(X) + b^2\text{Var}(Y) + 2ab\,\text{Cov}(X,Y)$$

If $X$ and $Y$ are **independent**, $\text{Cov}(X,Y) = 0$:
$$\text{Var}(aX + bY) = a^2\text{Var}(X) + b^2\text{Var}(Y)$$

<h3 id="53-covariance">5.3 Covariance</h3>


$$\text{Cov}(X,Y) = E[(X - \mu_X)(Y - \mu_Y)] = E(XY) - E(X)E(Y)$$

Properties:
- $\text{Cov}(X,X) = \text{Var}(X)$
- $\text{Cov}(X,Y) = \text{Cov}(Y,X)$
- $\text{Cov}(aX, bY) = ab\,\text{Cov}(X,Y)$
- If $X$ and $Y$ are independent, $\text{Cov}(X,Y) = 0$ (converse not necessarily true)

<h3 id="54-correlation-coefficient">5.4 Correlation Coefficient</h3>


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

<h2 id="fm11-constant-velocity-in-two-dimensions">FM1.1: Constant Velocity in Two Dimensions</h2>


<h3 id="11-vector-representation">1.1 Vector Representation</h3>


Position vector: $\mathbf{r} = x\mathbf{i} + y\mathbf{j} = \begin{pmatrix} x \\\\ y \end{pmatrix}$

Velocity vector: $\mathbf{v} = \frac{d\mathbf{r}}{dt} = v_x\mathbf{i} + v_y\mathbf{j}$

For constant velocity: $\mathbf{r}(t) = \mathbf{r}_0 + \mathbf{v}t$

<h3 id="12-speed-and-distance">1.2 Speed and Distance</h3>


Speed = $\lvert \mathbf{v} \rvert = \sqrt{v_x^2 + v_y^2}$

Distance travelled = $\lvert \mathbf{v} \rvert \times t$

<h3 id="13-relative-velocity">1.3 Relative Velocity</h3>


Velocity of $A$ relative to $B$:
$$\mathbf{v}_{AB} = \mathbf{v}_A - \mathbf{v}_B$$

**Interpretation**: This is the velocity of $A$ as observed from $B$ (treating $B$ as fixed).

**Relative position** after time $t$:
$$\mathbf{r}_{AB}(t) = \mathbf{r}_A(t) - \mathbf{r}_B(t) = (\mathbf{r}_A(0) - \mathbf{r}_B(0)) + (\mathbf{v}_A - \mathbf{v}_B)t$$

**Example**: Ship $A$ is at $(0,0)$ moving at $10\mathbf{i}$ km/h. Ship $B$ is at $(20,10)$ moving at $5\mathbf{i} + 5\mathbf{j}$ km/h. Find velocity of $A$ relative to $B$.

$\mathbf{v}_A = 10\mathbf{i}$, $\mathbf{v}_B = 5\mathbf{i} + 5\mathbf{j}$
$\mathbf{v}_{AB} = (10-5)\mathbf{i} + (0-5)\mathbf{j} = 5\mathbf{i} - 5\mathbf{j}$

Speed = $\sqrt{5^2 + (-5)^2} = \sqrt{50} = 5\sqrt{2}$ km/h

<h3 id="14-interception-problems">1.4 Interception Problems</h3>


For $A$ to intercept $B$, there exists $t > 0$ such that:
$$\mathbf{r}_A(0) + \mathbf{v}_A t = \mathbf{r}_B(0) + \mathbf{v}_B t$$

Rearrange: $(\mathbf{v}_A - \mathbf{v}_B)t = \mathbf{r}_B(0) - \mathbf{r}_A(0)$

**Example**: $A$ starts at $(0,0)$ with velocity $u\mathbf{i}$, $B$ starts at $(100,0)$ with velocity $10\mathbf{j}$. Find $u$ so that $A$ intercepts $B$.

Position after $t$:
$A$: $(ut, 0)$
$B$: $(100, 10t)$

For interception: $ut = 100$ and $0 = 10t$ ⇒ $t=0$ from the y equation, which fails the x equation. No interception is possible: both position components must agree at the same valid time; path geometry alone is insufficient.

<h3 id="15-closest-approach">1.5 Closest Approach</h3>


For two particles moving with constant velocities, the **squared distance** between them is a quadratic function of time (possibly with a zero quadratic coefficient). Minimise it over the allowed time interval, checking its endpoints as well as any stationary point.

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

<h2 id="fm12-dimensional-analysis">FM1.2: Dimensional Analysis</h2>


<h3 id="21-base-dimensions">2.1 Base Dimensions</h3>


In mechanics, all physical quantities can be expressed in terms of three base dimensions:

| Base Quantity | Dimension Symbol |
|---------------|------------------|
| Mass | $M$ |
| Length | $L$ |
| Time | $T$ |

<h3 id="22-derived-dimensions">2.2 Derived Dimensions</h3>


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

<h3 id="23-dimensional-homogeneity">2.3 Dimensional Homogeneity</h3>


In any valid physical equation, both sides must have the same dimensions. This principle can be used to:
- Check the validity of equations
- Derive relationships between quantities
- Determine units

<h3 id="24-deriving-formulae-by-dimensional-analysis">2.4 Deriving Formulae by Dimensional Analysis</h3>


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

Thus $T=k\sqrt{l/g}$. For an ideal simple pendulum at small angular amplitudes, $k\approx2\pi$. Dimensional analysis alone cannot determine this numerical constant or rule out dependence on a dimensionless quantity such as angular amplitude.

**Example 2**: Speed of waves on a string
Assume $v = k \cdot T^a \cdot \mu^b$, where $T$ = tension ($MLT^{-2}$), $\mu$ = mass per unit length ($ML^{-1}$)

$[v] = LT^{-1}$, $[T] = MLT^{-2}$, $[\mu] = ML^{-1}$

$LT^{-1} = (MLT^{-2})^a \cdot (ML^{-1})^b = M^{a+b} L^{a-b} T^{-2a}$

Equate:
$M$: $0 = a + b$
$L$: $1 = a - b$
$T$: $-1 = -2a$ ⇒ $a = \frac{1}{2}$

Then $b = -a = -\frac{1}{2}$

Thus $v = k \sqrt{\frac{T}{\mu}}$. An ideal flexible-string wave model gives $k=1$; dimensional analysis alone cannot establish that model or coefficient.

---

<h2 id="fm13-collisions-in-one-dimension">FM1.3: Collisions in One Dimension</h2>


<h3 id="31-momentum">3.1 Momentum</h3>


Linear momentum: $\mathbf{p} = m\mathbf{v}$ (vector quantity)

Units: kg·m/s or N·s

<h3 id="32-impulse">3.2 Impulse</h3>


**Impulse** = change in momentum:
$$\mathbf{I} = \mathbf{p}_{\text{final}} - \mathbf{p}_{\text{initial}} = m\mathbf{v} - m\mathbf{u}$$

For a constant force:
$$\mathbf{I} = \mathbf{F} \Delta t$$

For a variable force:
$$\mathbf{I} = \int_{t_1}^{t_2} \mathbf{F} \, dt$$

Impulse is a vector; its direction is the same as the change in momentum.

<h3 id="33-conservation-of-momentum">3.3 Conservation of Momentum</h3>


For a system of particles with no external impulse (or when external forces are negligible), total momentum is conserved:

$$m_1\mathbf{u}_1 + m_2\mathbf{u}_2 = m_1\mathbf{v}_1 + m_2\mathbf{v}_2$$

<h3 id="34-newtons-experimental-law-coefficient-of-restitution">3.4 Newton’s Experimental Law (Coefficient of Restitution)</h3>


For two particles colliding along the line of centres:

$$v_2 - v_1 = -e(u_2 - u_1)$$

where:
- $u_1,u_2$ = signed velocities before impact, measured along one chosen positive axis
- $v_1, v_2$ = velocities after impact
- $e$ = coefficient of restitution ($0 \leq e \leq 1$)

| $e$ | Type of Collision |
|-----|-------------------|
| $e = 1$ | Perfectly elastic (kinetic energy conserved) |
| $0 < e < 1$ | Partially elastic (some KE lost) |
| $e = 0$ | Perfectly inelastic: $v_1=v_2$ immediately after impact; permanent adhesion is not implied |

<h3 id="35-impact-with-a-fixed-surface">3.5 Impact with a Fixed Surface</h3>


For a particle hitting a fixed smooth surface perpendicularly:
$$v = -e u$$

where $u$ and $v$ are signed velocities along the same axis. If away from the surface is positive, $u<0$ and $v\geq0$.

**Example**: A ball is dropped from height $h$ onto a horizontal floor with coefficient of restitution $e$. Find the height after the first bounce.

With upwards positive, velocity just before impact: $u=-\sqrt{2gh}$ (downwards)
Velocity just after impact: $v = e\sqrt{2gh}$ (upwards)
Height after bounce: $h_1 = \frac{v^2}{2g} = e^2 h$

<h3 id="36-worked-example-two-particle-collision">3.6 Worked Example: Two-Particle Collision</h3>


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

<h2 id="key-formulae-summary">Key Formulae Summary</h2>


<h3 id="pure-mathematics">Pure Mathematics</h3>


| Topic | Formula |
|-------|---------|
| $2\times2$ inverse | $\begin{pmatrix} a & b \\\\ c & d \end{pmatrix}^{-1} = \frac{1}{ad-bc}\begin{pmatrix} d & -b \\\\ -c & a \end{pmatrix}$ |
| Determinant | $\det(A) = ad - bc$ |
| Rotation by $\theta$ | $\begin{pmatrix} \cos\theta & -\sin\theta \\\\ \sin\theta & \cos\theta \end{pmatrix}$ |
| Newton-Raphson | $x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$ |
| Euler's method | $y_{n+1} = y_n + h f(x_n, y_n)$ |

<h3 id="statistics">Statistics</h3>


| Topic | Formula |
|-------|---------|
| Bayes' theorem | $P(A \mid B) = \frac{P(B \mid A)P(A)}{P(B)}$ |
| Discrete uniform PMF | $P(X=x)=1/N$ for integers $a\leq x\leq b$, $N=b-a+1$ |
| Discrete uniform mean | $E(X) = \frac{a+b}{2}$ |
| Discrete uniform variance | $\text{Var}(X)=(N^2-1)/12$ |
| Geometric PMF | $P(X=k) = (1-p)^{k-1}p$ |
| Geometric mean | $E(X) = \frac{1}{p}$ |
| Geometric variance | $\text{Var}(X) = \frac{1-p}{p^2}$ |
| PGF | $G_X(t) = E(t^X)$ |
| PGF mean | $E(X) = G_X'(1)$ |
| PGF variance | $\text{Var}(X) = G_X''(1) + G_X'(1) - [G_X'(1)]^2$ |
| Covariance | $\text{Cov}(X,Y) = E(XY) - E(X)E(Y)$ |
| Correlation | $\rho = \frac{\text{Cov}(X,Y)}{\sqrt{\text{Var}(X)\text{Var}(Y)}}$ |

<h3 id="mechanics">Mechanics</h3>


| Topic | Formula |
|-------|---------|
| Relative velocity | $\mathbf{v}_{AB} = \mathbf{v}_A - \mathbf{v}_B$ |
| Dimensional analysis | $[Q] = M^a L^b T^c$ |
| Impulse | $\mathbf{I} = m\mathbf{v} - m\mathbf{u}$ |
| Momentum conservation | $m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2$ |
| Newton's law | $v_2 - v_1 = -e(u_2 - u_1)$ |
| Impact with wall | $v=-eu$, with signed velocities along the same axis |

</details>
