---
title: Trigonometric Functions and Formulae
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
permalink: /alevel/a2-mathematics/trigonometric-functions-and-formulae/
toc_headings: h2, h3
reading_layout: true
study_page: true
---

[Pure Mathematics](/alevel/a2-mathematics/) · P2.4 Trigonometric Functions and Formulae
{: .lesson-meta}

<div class="lesson-lead" markdown="1">

Give sine, cosine or tangent an angle and it returns a number. Its graph shows this link. First learn how to work backwards to an angle and how to take reciprocals of function values. Then use formulae to rewrite expressions and solve equations, keeping every allowed angle.

</div>

1. [Distinguish inverses](#inverse-trigonometric-functions) from [reciprocals](#reciprocal-trigonometric-functions), using their inputs, outputs and graphs.
2. [Prove and connect forms](#trigonometric-identities), then use [compound angles](#compound-angle-formulae) and [single sine or cosine forms](#sine-and-cosine-forms).
3. [Work with double angles](#double-angle-formulae), then attempt [practice](#practice). Return to [review](#later-review) after another topic.
{: .lesson-routes}

<div class="lesson-notes" markdown="1">

**Before you start:** recover [radians and exact triangle values](/alevel/as-mathematics/trigonometry/#l15), [periodic graphs, quadrants and interval solutions](/alevel/as-mathematics/trigonometry/#l16), [factorising quadratics](/alevel/as-mathematics/algebra/#l02), [inverse functions](/alevel/a2-mathematics/functions/#inverse-functions) or [graph transformations](/alevel/a2-mathematics/modulus-and-transformations/) as needed. You do not need the compound-angle formulae in advance; they are introduced below.

All examples and tasks are self-written, with no official marks. A task completed with a hint is supported work; close the help before a new retry. [Sources and scope](#lesson-sources) follow the lesson.

</div>

## Choose a Method {#choose-a-method}


<details markdown="1">
<summary>Method reference for revision</summary>

| Task | First step | Check |
|---|---|---|
| Inverse function | Use its restricted range | One inverse value is not a full set of equation solutions |
| Reciprocal function | Write it in terms of sine or cosine | Keep undefined values excluded |
| Prove an identity | Work on one side using known formulae | Do not assume the identity you are proving |
| Compound angle | Expand, or recognise the expanded form | Cosine uses the opposite sign |
| $a\cos\theta+b\sin\theta$ | Compare coefficients in the requested form | Check the quadrant of $\alpha$ |
| Multiple angles | Use a double angle formula or change the angle variable | Transform the interval too |
{: .wide-table}

Use degrees when a question gives degrees. Otherwise this lesson uses radians. Keep exact values until the final answer; use full calculator values when finding decimal solutions.

</details>

## Inverse Trigonometric Functions {#inverse-trigonometric-functions}

Sine takes an angle as input and gives the height on its graph as output. Working backwards can give several angles: 30° and 150° both have sine 1/2. A horizontal line can meet the sine graph more than once.

For an inverse to give just one answer, first choose a part of the original graph with no repeated heights. For sine choose −π/2 to π/2, for cosine choose 0 to π, and for tangent choose −π/2 to π/2 without the endpoints. Different angles in each chosen part give different numbers: this is what **one-to-one** means.

In the table, the **domain** lists numbers you may put in; the **range** lists angles the inverse may give out. Notice that the input is now a number and the output is an angle.

| Inverse function | Domain | Range of the inverse |
|---|---|---|
| $\sin^{-1}x$ | $-1\le x\le1$ | $-\frac\pi2\le y\le\frac\pi2$ |
| $\cos^{-1}x$ | $-1\le x\le1$ | $0\le y\le\pi$ |
| $\tan^{-1}x$ | All real $x$ | $-\frac\pi2<y<\frac\pi2$ |

For example, $\sin^{-1}\left(\frac12\right)=\frac\pi6$. It gives one angle in the stated range. Solving $\sin\theta=\frac12$ on $[0,2\pi]$ gives **two** angles: $\frac\pi6$ and $\frac{5\pi}6$.

**Important:** $\sin^{-1}x$ means the inverse function, not $\frac1{\sin x}$. Also, $\sin^{-1}(\sin\theta)=\theta$ only when $\theta$ is in the restricted range. For example, $\sin^{-1}\left(\sin\frac{5\pi}6\right)=\frac\pi6$.

On the original graph, the horizontal coordinate is the angle and the vertical coordinate is its function value. Working backwards swaps these coordinates. The inverse graph is therefore the reflection of the chosen part of the original graph in $y=x$.

<section class="worked-example" markdown="1">

### Example 1 — Domain, range and a transformed inverse graph {#example-1--domain-range-and-a-transformed-inverse-graph}

**Question:** Find the domain and range of $y=\cos^{-1}(3x-2)$. Give three points for a sketch and solve $\cos^{-1}(3x-2)=\frac\pi3$.

$\cos^{-1}$ asks which angle in its chosen range has the given cosine. A cosine cannot be below $-1$ or above $1$, so first restrict the whole expression inside the brackets. In the inequality below, add 2 to all three parts, then divide them by positive 3:

$$-1\le3x-2\le1\quad\Rightarrow\quad\boxed{\frac13\le x\le1}.$$

The output is still an angle in the chosen inverse-cosine range, so the range is $\boxed{0\le y\le\pi}$. Choose −1, 0 and 1 as the values inside the brackets, then work backwards to each horizontal coordinate. As the input increases, the output angle decreases. The curve passes through

$$\left(\frac13,\pi\right),\quad\left(\frac23,\frac\pi2\right),\quad(1,0).$$

You can also track how points move from the graph of $y=\cos^{-1}x$: multiply each horizontal coordinate by $\frac13$, compressing along the $x$-axis, then add $\frac23$, moving it right along the $x$-axis. Heights stay the same.

Finally solve the equation. The output angle is known, so use cosine to recover the input: $3x-2=\cos\frac\pi3=\frac12$. Add 2 and divide by 3, giving $\boxed{x=\frac56}$.

**Check:** $\frac56$ is in the domain, and $\frac\pi3$ is in the inverse range. If the right-hand side had been $\frac{4\pi}3$, there would be no solution: it is outside that range.

</section>

## Reciprocal Trigonometric Functions {#reciprocal-trigonometric-functions}

Keep the angle unchanged and take the reciprocal of the function value: a height of 1/2 becomes 2, and −1/2 becomes −2. A zero height has no reciprocal because division by zero is not allowed. The names and formulae are:

$$\cosec\theta=\frac1{\sin\theta},\qquad \sec\theta=\frac1{\cos\theta},$$

$$\cot\theta=\frac{\cos\theta}{\sin\theta}.$$

Where $\tan\theta$ is defined and non-zero, $\cot\theta=\frac1{\tan\theta}$. Use $\frac{\cos\theta}{\sin\theta}$ to see the full domain: for example, $\cot\frac\pi2=0$ even though $\tan\frac\pi2$ is undefined.

- **Cosecant:** undefined at $\theta=k\pi$; period $2\pi$; values $y\le-1$ or $y\ge1$.
- **Secant:** undefined at $\theta=\frac\pi2+k\pi$; period $2\pi$; values $y\le-1$ or $y\ge1$.
- **Cotangent:** undefined at $\theta=k\pi$; period $\pi$; takes all real values and decreases between consecutive asymptotes.

Here $k$ is any integer, allowing one expression to list all the repeating positions. A **period** is the horizontal distance for one repeat. Near the excluded positions above, the denominator approaches zero and the reciprocal grows without bound in size. The vertical dashed line it approaches is a **vertical asymptote**; do not join the curve across it.

Read the graph below by finding its dashed lines, then the highest or lowest point of each separate part. Each part is often called a **branch**. Cosecant and secant are reciprocals of the graph's **heights**, not reflections of sine and cosine in $y=x$.

![Graphs of cosecant, secant and cotangent from zero to two pi, with dashed vertical asymptotes.](/assets/img/trigonometric-reciprocals.svg)

<section class="worked-example" markdown="1">

### Example 2 — Transform the interval as well as the angle {#example-2--transform-the-interval-as-well-as-the-angle}

**Question:** Solve $\sec\left(2\theta-\frac\pi3\right)=-2$ for $0\le\theta\le\pi$.

Give the whole angle in brackets the shorter name $\phi=2\theta-\frac\pi3$, so we can use a familiar cosine graph. As the original angle runs from 0 to π, this new angle also increases. Substituting the two endpoints gives $-\frac\pi3\le\phi\le\frac{5\pi}3$. Secant is the reciprocal of cosine, so a secant of −2 means a cosine of −1/2. The equation becomes

$$\cos\phi=-\frac12.$$

Find every point of height −1/2 on the cosine graph within this new angle interval: $\phi=\frac{2\pi}3$ or $\frac{4\pi}3$. Add π/3 to each angle and divide by 2 to recover the original angle. Thus

$$\boxed{\theta=\frac\pi2,\ \frac{5\pi}6}.$$

**Check:** both values are in $[0,\pi]$, and their cosine values are non-zero. Taking only $\cos^{-1}(-\frac12)=\frac{2\pi}3$ would miss the second solution.

</section>

<section class="lesson-check" markdown="1">

### Pause and complete {#check-angle-interval}

<!-- task:check-angle-interval -->

Let $\phi=2\theta-\pi/3$, with $0\le\theta\le\pi$. Write the interval for $\phi$, then solve $\sec\phi=2$ for all the corresponding $\theta$ values.

<!-- /task:check-angle-interval -->

<details markdown="1">
<summary>Hint</summary>

The cosine is now positive. Include the ends of the transformed interval if they satisfy the equation.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The interval is $-\pi/3\le\phi\le5\pi/3$. The equation is $\cos\phi=1/2$, with $\phi=-\pi/3,\pi/3,5\pi/3$. Thus $\theta=0,\pi/3,\pi$. Each gives a non-zero cosine and satisfies the original secant equation.

</details>

</section>

## Trigonometric Identities {#trigonometric-identities}

An **identity** says that two expressions are equal for every angle at which they can be calculated. It lets us change an expression into a more useful form. Start with $\sin^2\theta+\cos^2\theta=1$. Divide by $\cos^2\theta$: cosine squared divided by itself becomes 1, and the other two terms become tangent squared and secant squared. Dividing instead by $\sin^2\theta$ gives the cotangent and cosecant relationship:

$$1+\tan^2\theta=\sec^2\theta,\qquad 1+\cot^2\theta=\cosec^2\theta.$$

Each identity holds where its expressions are defined. For a proof, start with one side and use known identities until you reach the other side. Numerical checks can find a mistake, but they do not prove an identity.

<section class="worked-example" markdown="1">

### Example 3 — Prove an identity {#example-3--prove-an-identity}

**Question:** Prove $\sec\theta-\cos\theta=\sin\theta\tan\theta$ where both sides are defined.

The left side contains secant; the right contains sine and tangent. First write secant as a reciprocal of cosine so you can use a common denominator. Then change one minus cosine squared into sine squared. Finally combine one sine with the denominator to make tangent. Starting on the left:

$$\begin{aligned}
\sec\theta-\cos\theta
&=\frac1{\cos\theta}-\cos\theta\\
&=\frac{1-\cos^2\theta}{\cos\theta}\\
&=\frac{\sin^2\theta}{\cos\theta}\\
&=\sin\theta\tan\theta.
\end{aligned}$$

This is the right-hand side. The restriction is $\cos\theta\ne0$.

**Common mistake:** assuming the required result and rearranging it without explaining that every step is reversible.

</section>

<section class="worked-example" markdown="1">

### Example 4 — Eliminate a parameter {#example-4--eliminate-a-parameter}

**Question:** Given $x=3\sec\theta$ and $y=2\tan\theta$, eliminate $\theta$ and state the possible $x$ values.

The same angle supplies both coordinates. To **eliminate the parameter** means to obtain a relationship containing only the coordinates, without that angle. Divide the original equations by 3 and 2 to express secant and tangent using the coordinates. Substitute these into $\sec^2\theta-\tan^2\theta=1$:

$$\boxed{\frac{x^2}{9}-\frac{y^2}{4}=1}.$$

Since $\sec\theta\le-1$ or $\sec\theta\ge1$, $\boxed{x\le-3\text{ or }x\ge3}$. The parameter excludes $\theta=\frac\pi2+k\pi$.

**Check:** at $\theta=0$, $(x,y)=(3,0)$ satisfies both the original equations and the new equation. At $\theta=\pi$, the point is $(-3,0)$; do not discard the negative branch.

If the angle is allowed to vary over only part of a turn, keep only the points that those angles can reach. The new equation alone may describe too much of the curve.

</section>

## Compound Angle Formulae {#compound-angle-formulae}

If we know the sine and cosine of two separate angles, how can we find the value for their sum or difference? Adding or subtracting the sine values does not work. These formulae show how to combine the known values. Each bracket contains one complete angle.

$$\begin{aligned}
\sin(A+B)&=\sin A\cos B+\cos A\sin B,\\
\sin(A-B)&=\sin A\cos B-\cos A\sin B,\\
\cos(A+B)&=\cos A\cos B-\sin A\sin B,\\
\cos(A-B)&=\cos A\cos B+\sin A\sin B.
\end{aligned}$$

$$\tan(A+B)=\frac{\tan A+\tan B}{1-\tan A\tan B},$$

$$\tan(A-B)=\frac{\tan A-\tan B}{1+\tan A\tan B}.$$

Use tangent formulae only where all the terms are defined and the denominator is non-zero. If a tangent on the right is undefined, return to sine and cosine.

To derive the cosine difference formula, take two points on a unit circle at angles $A$ and $B$. The cosine formula gives their squared distance as $2-2\cos(A-B)$. Their coordinates give the same distance as

$$(\cos A-\cos B)^2+(\sin A-\sin B)^2.$$

Expanding and using $\sin^2 A+\cos^2 A=1$ gives $2-2(\cos A\cos B+\sin A\sin B)$. Equating the results gives the cosine difference formula. Replace $B$ by $-B$ to get the sum formula; use complementary angles to derive the sine formulae. Dividing the sine sum formula by the cosine sum formula gives the tangent sum formula where defined.

<section class="worked-example" markdown="1">

### Example 5 — Exact value and recognising a formula {#example-5--exact-value-and-recognising-a-formula}

**Question:** Find $\sin15^\circ$ exactly. Simplify $\sin\theta\cos\frac\pi4-\cos\theta\sin\frac\pi4$ and find the smallest positive value of $\theta$ at which the maximum occurs.

15° is not a standard special angle, but it equals 45° minus 30°. We know the sine and cosine of both these angles, so choose the sine difference formula and keep the surds for an exact value:

$$\begin{aligned}
\sin15^\circ&=\sin(45^\circ-30^\circ)\\
&=\frac{\sqrt2}{2}\frac{\sqrt3}{2}-\frac{\sqrt2}{2}\frac12\\
&=\boxed{\frac{\sqrt6-\sqrt2}{4}}.
\end{aligned}$$

The second expression is $\sin\left(\theta-\frac\pi4\right)$. Its maximum is $1$, when $\theta-\frac\pi4=\frac\pi2+2k\pi$. The smallest positive such angle is $\boxed{\theta=\frac{3\pi}4}$.

**Check:** $\sin15^\circ$ is positive and less than $\sin30^\circ=\frac12$. Do not use $\sin(A-B)=\sin A-\sin B$.

</section>

## Sine and Cosine Forms {#sine-and-cosine-forms}

Combining two terms into one lets us use the fact that a single sine or cosine lies between −1 and 1 to find maximum and minimum values or solve equations. One new number sets the height scale; another angle sets the horizontal shift.

To find them, choose the requested sine or cosine form and expand it **before** comparing coefficients. This means matching the numbers multiplying cosine in the two expressions, then matching the numbers multiplying sine. For example,

$$r\cos(\theta-\alpha)=r\cos\alpha\cos\theta+r\sin\alpha\sin\theta.$$

For $a\cos\theta+b\sin\theta$, this gives

$$r\cos\alpha=a,\qquad r\sin\alpha=b,\qquad r=\sqrt{a^2+b^2}.$$

Take $r>0$ when at least one of $a,b$ is non-zero. Choose $\alpha$ using **both** coefficient signs. The value of $\tan\alpha$ alone does not determine its quadrant. If $a=b=0$, the expression is zero and no angle is needed.

For $r\sin(\theta+\alpha)$, instead compare $r\sin\alpha=a$ and $r\cos\alpha=b$. The angle is not generally the same as for the cosine form.

<section class="worked-example" markdown="1">

### Example 6 — A sine form, maximum and minimum {#example-6--a-sine-form-maximum-and-minimum}

**Question:** Express $4\sin\theta-3\cos\theta$ as $r\sin(\theta-\alpha)$, with $r>0$ and $0<\alpha<90^\circ$. Find the maximum and minimum of $2+4\sin\theta-3\cos\theta$ and the angles at which they occur in $0\le\theta\le360^\circ$.

The question asks for a sine difference. Expand that form: its sine coefficient must be 4, and its negative cosine coefficient must be −3. Matching gives:

$$r\cos\alpha=4,\qquad r\sin\alpha=3.$$

So $r=5$, $\alpha=\tan^{-1}\frac34=36.869897\ldots^\circ$, and

$$4\sin\theta-3\cos\theta=5\sin(\theta-\alpha).$$

The maximum is $\boxed{7}$ at $\boxed{\theta=126.9^\circ}$, and the minimum is $\boxed{-3}$ at $\boxed{\theta=306.9^\circ}$, to one decimal place.

**Check:** at $\theta=0$, the original expression is $-3$, and the sine form gives $-5\sin\alpha=-3$. Keep $\alpha$ unrounded until the final angles.

</section>

<section class="worked-example" markdown="1">

### Example 7 — Solve using a cosine form {#example-7--solve-using-a-cosine-form}

**Question:** Solve $\cos\theta+\sqrt3\sin\theta=1$ for $0\le\theta\le2\pi$.

Since $r=2$, $r\cos\alpha=1$ and $r\sin\alpha=\sqrt3$, we have $\alpha=\frac\pi3$. Hence

$$2\cos\left(\theta-\frac\pi3\right)=1.$$

Let $\phi=\theta-\frac\pi3$, so $-\frac\pi3\le\phi\le\frac{5\pi}3$. In this interval, $\cos\phi=\frac12$ at $\phi=-\frac\pi3,\frac\pi3,\frac{5\pi}3$.

Therefore $\boxed{\theta=0,\frac{2\pi}3,2\pi}$.

**Check:** both endpoints are included in the question, so list both $0$ and $2\pi$. Substitution into the original equation confirms all three solutions.

</section>

## Double Angle Formulae {#double-angle-formulae}

A double angle is twice the original angle; it does not mean twice the function value. Set the two angles in a sum formula equal by putting $B=A$:

$$\sin2A=2\sin A\cos A,$$

$$\begin{aligned}
\cos2A&=\cos^2 A-\sin^2 A\\
&=1-2\sin^2 A=2\cos^2 A-1,
\end{aligned}$$

$$\tan2A=\frac{2\tan A}{1-\tan^2 A}.$$

The tangent formula needs all terms defined and a non-zero denominator. Cosine has three equal forms. Look at the other side of your equation: if it contains sine, choose the sine-squared form; if it contains cosine, choose the cosine-squared form. This leaves **one** trigonometric function to solve for, much like an unknown in a quadratic. Rearranging also gives

$$\sin^2 A=\frac{1-\cos2A}{2},\qquad\cos^2 A=\frac{1+\cos2A}{2}.$$

These forms are useful in [trigonometric integration](/alevel/a2-mathematics/integration-applications/#trigonometric-integrals).

<section class="worked-example" markdown="1">

### Example 8 — Keep solutions when factorising {#example-8--keep-solutions-when-factorising}

**Question:** Solve $\sin2x=\sin x$ for $0\le x\le2\pi$.

The two sine terms suggest using the sine double-angle formula. Moving everything to one side exposes a common factor, so we can split cases without dividing by a possibly zero quantity.

$$2\sin x\cos x-\sin x=0\quad\Rightarrow\quad\sin x(2\cos x-1)=0.$$

Thus $\sin x=0$ gives $x=0,\pi,2\pi$, while $\cos x=\frac12$ gives $x=\frac\pi3,\frac{5\pi}3$.

$$\boxed{x=0,\frac\pi3,\pi,\frac{5\pi}3,2\pi}.$$

**Common mistake:** dividing by $\sin x$. That would lose $0,\pi,2\pi$. Factor instead, then check all candidates in the original equation.

</section>

<section class="worked-example" markdown="1">

### Example 9 — Derive a further identity {#example-9--derive-a-further-identity}

**Question:** Prove $\cos3A=4\cos^3 A-3\cos A$.

A triple angle is a double angle plus the original angle, so start with the cosine sum formula, then use double-angle formulae. The required expression contains only cosine: replace sine squared by one minus cosine squared. Finally expand and collect terms:

$$\begin{aligned}
\cos3A&=\cos(2A+A)\\
&=\cos2A\cos A-\sin2A\sin A\\
&=(2\cos^2 A-1)\cos A-2\sin^2 A\cos A\\
&=2\cos^3 A-\cos A-2(1-\cos^2 A)\cos A\\
&=4\cos^3 A-3\cos A.
\end{aligned}$$

**Check:** at $A=0$, both sides are $1$. The algebra above proves the identity for all real angles; the single-value check alone would not.

</section>

## Practice {#practice}

Allow about **35–45 minutes**. Give exact answers unless a question asks for decimals. State any restrictions used in a proof or elimination.

<section class="lesson-check" markdown="1">

### Question 1 {#q1--inverse-values-and-graph}

<!-- task:q1--inverse-values-and-graph -->

Find $\sin^{-1}(-\frac12)$ and $\tan^{-1}(-\sqrt3)$ exactly. Sketch $y=\sin^{-1}(2x+1)$, stating the domain and range and labelling three points.

<!-- /task:q1--inverse-values-and-graph -->

<details markdown="1">
<summary>Hint</summary>

The output angle must lie in the range chosen for that inverse. The number in brackets must be a possible sine value, so solve $-1\le2x+1\le1$ for the allowed horizontal coordinates.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The angles are $\boxed{-\frac\pi6}$ and $\boxed{-\frac\pi3}$. The domain is $\boxed{-1\le x\le0}$ and the range is $\boxed{-\frac\pi2\le y\le\frac\pi2}$.

The graph increases through $(-1,-\frac\pi2)$, $(-\frac12,0)$ and $(0,\frac\pi2)$. Substitution makes its inverse inputs $-1,0,1$ respectively.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 2 {#q2--reciprocal-equation}

<!-- task:q2--reciprocal-equation -->

Solve $\cosec\theta=-2$ for $0\le\theta\le360^\circ$. Give the asymptotes and period of $y=\cot\theta$ using radians.

Use the secant panel above to construct a sketch of $y=2\sec(2\theta)$ on $0\le\theta\le\pi$. Label its asymptotes, turning points and range.

<!-- /task:q2--reciprocal-equation -->

<details markdown="1">
<summary>Hint</summary>

Use $\sin\theta=-\frac12$. Distinguish the units in the two parts.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$\boxed{\theta=210^\circ,330^\circ}$. Both sines are $-\frac12$, so the reciprocals are $-2$.

Cotangent has asymptotes $\boxed{\theta=k\pi}$, for integer $k$, and period $\boxed{\pi}$. Its zeros are $\frac\pi2+k\pi$, where cotangent is defined even though tangent is not.

For the new graph, horizontal coordinates in the secant panel are halved and heights doubled. Asymptotes are $\theta=\pi/4,3\pi/4$; turning points (including the boundary extrema) are $(0,2)$, $(\pi/2,-2)$ and $(\pi,2)$. The outer branches lie at $y\ge2$ and the middle branch at $y\le-2$. Draw the branches tending without bound beside each asymptote; do not join across them.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 3 {#q3--an-identity-and-its-domain}

<!-- task:q3--an-identity-and-its-domain -->

Prove $\tan\theta+\cot\theta=\sec\theta\cosec\theta$ and state the restrictions.

<!-- /task:q3--an-identity-and-its-domain -->

<details markdown="1">
<summary>Hint</summary>

Write the left-hand side in terms of sine and cosine, then use a common denominator.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\begin{aligned}
\tan\theta+\cot\theta
&=\frac{\sin\theta}{\cos\theta}+\frac{\cos\theta}{\sin\theta}\\
&=\frac{\sin^2\theta+\cos^2\theta}{\sin\theta\cos\theta}\\
&=\frac1{\sin\theta\cos\theta}=\sec\theta\cosec\theta.
\end{aligned}$$

Both $\sin\theta\ne0$ and $\cos\theta\ne0$ are required. At $\theta=\frac\pi4$, both sides give $2$, a useful check but not the proof.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 4 {#q4--eliminate-the-parameter}

<!-- task:q4--eliminate-the-parameter -->

Eliminate $\theta$ from $x=2\cosec\theta$, $y=3\cot\theta$. State the possible $x$ values.

<!-- /task:q4--eliminate-the-parameter -->

<details markdown="1">
<summary>Hint</summary>

Use $\cosec^2\theta-\cot^2\theta=1$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\boxed{\frac{x^2}{4}-\frac{y^2}{9}=1},\qquad \boxed{x\le-2\text{ or }x\ge2}.$$

The parameter excludes $\theta=k\pi$. At $\theta=\frac\pi2$ and $\frac{3\pi}2$, the original equations give $(2,0)$ and $(-2,0)$, confirming both branches.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 5 {#q5--exact-values-and-a-compound-angle-equation}

<!-- task:q5--exact-values-and-a-compound-angle-equation -->

Find $\cos15^\circ$ exactly. Solve $\sin(\theta+\frac\pi6)=\cos\theta$ for $0\le\theta\le2\pi$.

<!-- /task:q5--exact-values-and-a-compound-angle-equation -->

<details markdown="1">
<summary>Hint</summary>

Use $45^\circ-30^\circ$ for the exact value. Expand the sine sum, then factor or rearrange without losing zero cases.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\boxed{\cos15^\circ=\frac{\sqrt6+\sqrt2}{4}}.$$

Expanding the equation gives $\frac{\sqrt3}{2}\sin\theta+\frac12\cos\theta=\cos\theta$, so $\sqrt3\sin\theta=\cos\theta$.

If $\cos\theta=0$, this equation is false, so division by $\cos\theta$ loses no solution here. Thus $\tan\theta=\frac1{\sqrt3}$ and $\boxed{\theta=\frac\pi6,\frac{7\pi}6}$. In the original equation both sides are respectively $\frac{\sqrt3}{2}$ or $-\frac{\sqrt3}{2}$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 6 {#q6--coefficients-signs-and-extrema}

<!-- task:q6--coefficients-signs-and-extrema -->

Express $3\cos\theta-4\sin\theta$ as $r\cos(\theta+\alpha)$, with $r>0$ and $0<\alpha<90^\circ$. Find the maximum and minimum of $1+3\cos\theta-4\sin\theta$ and their angles in $0\le\theta\le360^\circ$, to one decimal place.

<!-- /task:q6--coefficients-signs-and-extrema -->

<details markdown="1">
<summary>Hint</summary>

Expand $r\cos(\theta+\alpha)$. The sine coefficient has a minus sign.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$r\cos\alpha=3$, $r\sin\alpha=4$, so $\boxed{r=5}$ and $\alpha=\tan^{-1}\frac43=53.130102\ldots^\circ$.

The maximum is $\boxed{6}$ at $\boxed{306.9^\circ}$; the minimum is $\boxed{-4}$ at $\boxed{126.9^\circ}$. At $\theta=0$, the cosine form gives $5\cos\alpha=3$, as required.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 7 {#q7--a-quadratic-equation}

<!-- task:q7--a-quadratic-equation -->

Solve $\cos2x=\sin x$ for $0\le x\le2\pi$.

<!-- /task:q7--a-quadratic-equation -->

<details markdown="1">
<summary>Hint</summary>

Use $\cos2x=1-2\sin^2 x$ and factor the quadratic in $\sin x$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$2\sin^2 x+\sin x-1=0\quad\Rightarrow\quad(2\sin x-1)(\sin x+1)=0.$$

Thus $\sin x=\frac12$ or $-1$, giving $\boxed{x=\frac\pi6,\frac{5\pi}6,\frac{3\pi}2}$. The original cosine double angle is respectively $\frac12,\frac12,-1$, matching the sine values.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 8 {#q8--double-angle-and-powers}

<!-- task:q8--double-angle-and-powers -->

Given $\tan A=\frac12$, find $\tan2A$ exactly. Express $6\sin^2 x-2$ in terms of $\cos2x$.

<!-- /task:q8--double-angle-and-powers -->

<details markdown="1">
<summary>Hint</summary>

Use the tangent double angle formula and $\sin^2 x=\frac{1-\cos2x}{2}$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\boxed{\tan2A=\frac{2(\frac12)}{1-\frac14}=\frac43},$$

$$\boxed{6\sin^2 x-2=1-3\cos2x}.$$

The tangent denominator is $\frac34\ne0$. For the second result, $x=0$ gives $-2$ on both sides and $x=\frac\pi2$ gives $4$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 9 {#q9}

<!-- task:q9 -->

Solve $2\tan^2(x-\pi/6)=\sec(x-\pi/6)+1$ for $0\le x<2\pi$. Give exact answers.

<!-- /task:q9 -->

<details markdown="1">
<summary>Hint</summary>

Look for a way to express tangent squared and secant using the same function. Record the inputs that would cause division by zero, then find the interval for the whole angle in brackets.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Put $\phi=x-\pi/6$, so $-\pi/6\le\phi<11\pi/6$ and $\cos\phi\ne0$. Using $\tan^2\phi=\sec^2\phi-1$ gives

$$2\sec^2\phi-\sec\phi-3=0\quad\Rightarrow\quad(2\sec\phi-3)(\sec\phi+1)=0.$$

Let $\beta=\cos^{-1}(2/3)$. The cosine cases are $2/3$ and $-1$. In this interval their angles are $\beta,2\pi-\beta,\pi$; $-\beta$ lies below the lower end. Therefore

$$x=\frac\pi6+\beta,\quad\frac{7\pi}6,\quad\frac{13\pi}6-\beta.$$

Each is in the original interval and has non-zero cosine. For secant $3/2$, the two sides both equal $5/2$; for secant $-1$, both are zero. Finding every matching cosine position over the whole angle interval shows that no solution is missing. Substitution alone only checks the listed solutions.

</details>

</section>

## Repair and try again {#repair}

Return to the explanation for the first step that failed. Close the old solution before trying the new question; judge valid alternative methods by their reasoning, restrictions and full solution set.

| Error in your work | Recover here | New attempt |
| --- | --- | --- |
| Inverse value outside its range, or incorrect inverse graph in Question 1 | [Inverse ranges](#inverse-trigonometric-functions) | [Retry A](#retry-inverse) |
| A numerical check offered as proof, or a lost curve restriction in Questions 3–4 | [Proof](#example-3--prove-an-identity), [parameter elimination](#example-4--eliminate-a-parameter) | [Retry B](#retry-identities) |
| Wrong sign/quadrant or extremum angle in Questions 5–6 | [Compound angles](#compound-angle-formulae), [coefficient comparison](#sine-and-cosine-forms) | [Retry C](#retry-phase) |
| Wrong reciprocal graph, lost zero factor, endpoints or angle branches in Questions 2, 7–9 | [Reciprocal graph](#reciprocal-trigonometric-functions), [transformed interval](#example-2--transform-the-interval-as-well-as-the-angle), [factorising](#example-8--keep-solutions-when-factorising) | [Retry D](#retry-zero-factor); redo the graph part of Question 2 separately if needed |

<section class="lesson-check" markdown="1">

### Retry A {#retry-inverse}

<!-- task:retry-inverse -->

Sketch $y=\cos^{-1}(1-2x)$ with its domain, range and three labelled points. Can its value equal $3\pi/2$?

<!-- /task:retry-inverse -->

<details markdown="1">
<summary>Hint</summary>

First keep $1-2x$ between −1 and 1. Then check whether the output angle lies between 0 and π, the chosen range for inverse cosine. This chosen output interval is also called its principal range.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The domain is $0\le x\le1$, the range is $0\le y\le\pi$, and the increasing curve passes through $(0,0),(1/2,\pi/2),(1,\pi)$. It cannot equal $3\pi/2$, which is outside its range. The reflection of the restricted cosine curve explains why the inverse is a single-valued graph.

</details>

</section>

<section class="lesson-check" markdown="1">

### Retry B {#retry-identities}

<!-- task:retry-identities -->

(a) Prove $(\sec^2x-1)\cos^2x=\sin^2x$, stating the restriction. (b) Eliminate $t$ from $u=2\sec t$, $v=\tan t$, where $0\le t<\pi/2$, retaining all curve restrictions.

<!-- /task:retry-identities -->

<details markdown="1">
<summary>Hint</summary>

Use an identity with a known domain. The parameter interval in (b) selects only part of the Cartesian curve.

</details>

<details markdown="1">
<summary>Solution and check</summary>

(a) For $\cos x\ne0$, the left side is $\tan^2x\cos^2x=\sin^2x$.

(b) $u^2/4-v^2=1$, with $u\ge2$ and $v\ge0$. At $t=0$ the point is $(2,0)$; increasing $t$ covers the upper half of the right branch. Keeping the full left branch or negative $v$ would add points the parameter cannot reach.

</details>

</section>

<section class="lesson-check" markdown="1">

### Retry C {#retry-phase}

<!-- task:retry-phase -->

Find the maximum and minimum of $2+\sin x+\cos x$ and where they occur for $0\le x\le2\pi$. Also solve $\sin x+\cos x=0$ on the same interval. Show a valid method of your choice.

<!-- /task:retry-phase -->

<details markdown="1">
<summary>Hint</summary>

If using a single sine or cosine form, expand it to check both coefficients. For an equation, justify any division.

</details>

<details markdown="1">
<summary>Solution and check</summary>

One form is $\sin x+\cos x=\sqrt2\cos(x-\pi/4)$. The maximum is $2+\sqrt2$ at $x=\pi/4$; the minimum is $2-\sqrt2$ at $x=5\pi/4$. The equation gives $x=3\pi/4,7\pi/4$. Alternatively, tangent can solve the equation after checking that $\cos x=0$ supplies no root.

</details>

</section>

<section class="lesson-check" markdown="1">

### Retry D {#retry-zero-factor}

<!-- task:retry-zero-factor -->

Solve $\sin2x=\cos x$ for $-\pi/2\le x\le3\pi/2$. Explain why your list is complete. Then sketch $y=\cosec(2x)$ for $0<x<\pi$, labelling its asymptotes and turning points.

<!-- /task:retry-zero-factor -->

<details markdown="1">
<summary>Hint</summary>

Before dividing by a trigonometric factor, consider where it is zero. For the sketch, map the argument interval and take reciprocals of sine heights.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$\cos x(2\sin x-1)=0$. The cosine case gives $-\pi/2,\pi/2,3\pi/2$; the sine case $1/2$ gives $\pi/6,5\pi/6$. These cases exhaust the factorisation. All five satisfy the original equation, including both endpoints.

For the graph, $2x$ covers $(0,2\pi)$, so vertical asymptotes are $x=0,\pi/2,\pi$ (including the boundaries). The positive branch has minimum $(\pi/4,1)$; the negative branch has maximum $(3\pi/4,-1)$. The graph has range $y\le-1$ or $y\ge1$, and no zero.

</details>

</section>

## Return later {#review}

After another topic, close the method table and examples and attempt this task. Record your chosen method and any help used.

<section class="lesson-check" markdown="1">

### Review task {#later-review}

<!-- task:later-review -->

Solve $\cos2x=\cos x$ for $0\le x\le2\pi$. Explain why no solution is lost or added. Use any valid exact method.

<!-- /task:later-review -->

<details markdown="1">
<summary>Hint</summary>

Connect the angles or express the equation using one function. Treat the endpoints as distinct inputs.

</details>

<details markdown="1">
<summary>Solution and check</summary>

One route is $2\cos^2x-\cos x-1=0$, so $(2\cos x+1)(\cos x-1)=0$. Thus $x=0,2\pi/3,4\pi/3,2\pi$. No factor was divided out; the two cosine cases supply all roots on the interval.

An equally valid route uses $2x=2k\pi\pm x$ and enumerates the same interval. Substitution checks each root but is not, by itself, proof that the list is complete. For missing endpoints return to [the interval example](#example-7--solve-using-a-cosine-form); for a lost factor use [Retry D](#retry-zero-factor).

</details>

</section>

## Quick Reference {#quick-reference}

| Formula or task | Use | Check |
|---|---|---|
| Inverse functions | One angle in a restricted range | Inverse and reciprocal are different |
| $\sec^2\theta=1+\tan^2\theta$ | Remove secant squared | Cosine must be non-zero |
| $\cosec^2\theta=1+\cot^2\theta$ | Remove cosecant squared | Sine must be non-zero |
| Compound angle | Expand or recognise a sum or difference | Cosine reverses the sign |
| Sine or cosine form | $r=\sqrt{a^2+b^2}$, then compare coefficients | Choose the quadrant and retain full $\alpha$ |
| Double angle | Reduce to one trigonometric function | Factor instead of dividing by a possible zero |
| Equation solutions | List all angles in the stated interval | Transform the interval and include endpoints if allowed |
{: .wide-table}

**If your answer looks wrong:** check radians or degrees, inverse ranges, signs, coefficient order, denominators and missing quadrants. Check every candidate in the original equation.

**You should be able to:** sketch inverse and reciprocal functions, prove identities, eliminate a parameter and solve equations using compound and double angle formulae.

**Learning path:** [Previous: Binomial Series](/alevel/a2-mathematics/binomial-series/) · [Next: Exponential and Logarithmic Functions](/alevel/a2-mathematics/exponential-and-logarithmic-functions/) · [Return to the Pure Mathematics topic index](/alevel/a2-mathematics/).

## Next step {#next-step}

When you can justify the domain and complete solution set without a method label, continue to [Exponential and Logarithmic Functions](/alevel/a2-mathematics/exponential-and-logarithmic-functions/). A failed graph, sign or completeness check has its own [recovery route](#repair); return to [review](#later-review) after a gap.

<details id="lesson-sources" markdown="1">
<summary>Sources and scope</summary>

Scope: OxfordAQA 9660 MA03 P2.4, with P2.1 inverse/graph and P2.3 parameter connections, [specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf), printed pp21–22. Preparation checked January 2025 MA03 Q7(a)(i)–(ii), Q7(b), [QP pp14–15](https://aqamat.alevelclouds.com/25_01_QP_P2.pdf) and [MS p12](https://aqamat.alevelclouds.com/25_01_MS_P2.pdf), for coefficient signs, interval branches and a reciprocal quadratic. All page questions remain self-written. Original textbook locator: Chapter 3, Sections 3.1–3.6, printed pp32–49; not rechecked against the book in this revision. Inverse-function addition formulae are not required here. Integration uses are linked to the later integration lesson.

</details>

{% include exam_topic_practice.html %}
