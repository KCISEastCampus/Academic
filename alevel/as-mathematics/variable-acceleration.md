---
layout: subjects
title: "Variable acceleration"
mathjax: true
grade: as
subject: as-mathematics
permalink: /alevel/as-mathematics/variable-acceleration/
toc_headings: h2
reading_layout: true
study_page: true
---

[AS Mathematics learning route](/alevel/as-mathematics/#learning-route) · M1.2 · OxfordAQA 9660 v5.2
{:.lesson-meta}

Read the explanation and complete example, then try the questions on paper. Hints and solutions open separately. All questions are **self-written**, with no official marks.

- [From acceleration to velocity and position](#l23)

## From acceleration to velocity and position {#l23}

Goal: recover velocity and position using their conditions, then distinguish displacement from distance. Prerequisites: [differentiation](/alevel/as-mathematics/differentiation/#l06), [integration](/alevel/as-mathematics/integration/#l08) and [signed motion](../constant-acceleration/#l22).

### Acceleration tells us how velocity changes {#l23-concept}

Knowing acceleration does not tell us the initial velocity. Integrate it, then use a velocity condition to fix the first constant. Position needs another integration and its own condition:

$$\begin{aligned}
v&=\frac{ds}{dt},\qquad a=\frac{dv}{dt},\\
v&=\int a\,dt+C,\\
s&=\int v\,dt+D.
\end{aligned}$$

The two constants answer different questions, so keep them distinct. Differentiate your final position to recover velocity and differentiate again for acceleration. Then check each given condition.

Displacement is the signed integral of velocity. For distance, find where velocity changes sign and add positive path lengths. Taking the absolute value only after adding the whole integral can hide a return journey. If the model changes partway through, use the position and specified velocity at the join; acceleration need not match. These examples use power calculus, not later differential-equation methods.

<div class="worked-example" markdown="1">

### A complete example {#l23-worked}

**Question:** A particle has $a=2t-4\,\mathrm{m\,s^{-2}}$, $v(0)=3\,\mathrm{m\,s^{-1}}$ and $s(0)=0$. Find v and s, then displacement and distance from $t=0$ to $t=4$.

Acceleration is the derivative of velocity. Integrate first, keeping the unknown starting velocity:

$$v=\int(2t-4)\,dt=t^2-4t+C.$$

At $t=0$, velocity is 3, so $3=C$. Now integrate this complete velocity expression to find position:

$$s=\int(t^2-4t+3)\,dt=\frac{t^3}3-2t^2+3t+D.$$

At $t=0$, position is 0, so $D=0$. These are two different constants fixed by two different conditions. Differentiating s recovers v and then a.

For distance, first locate turns: $v=t^2-4t+3=(t-1)(t-3)$ has signs +, −, +, changing at 1 and 3 s. The positions are $s(0)=0,s(1)=4/3,s(3)=0,s(4)=4/3$ metres.

Displacement compares only final and initial position: $4/3$ m. Distance adds the lengths of all three parts: $4/3+4/3+4/3=4$ m. Average speed is this distance divided by 4 s, giving $1\,\mathrm{m\,s^{-1}}$.

</div>

<div class="lesson-check" markdown="1">

### Complete a supported attempt {#l23-scaffold}

**Question:** A particle has $a=6t$, $v(0)=2$ and $s(0)=5$ in SI units. Find v and s and its displacement in the first 2 s.

<details markdown="1">
<summary>Hint</summary>

A zero acceleration at the start does not make the initial velocity zero.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$v=3t^2+2$ and $s=t^3+2t+5$. Displacement is $s(2)-s(0)=12$ m.

</details>

</div>

<div class="lesson-check" markdown="1">

### Independent task {#l23-independent}

**Question:** For $0\le t\le2$, a particle has velocity $v=3t^2$ in SI units. After 2 s it decelerates uniformly to rest at time T. Its total distance from 0 to T is 26 m. Find T, the later acceleration, and the time and value of the greatest speed.

<details markdown="1">
<summary>Hint</summary>

Use the first stage’s final velocity to construct the second stage’s graph.

</details>

<details markdown="1">
<summary>Solution and check</summary>

First-stage distance is $[t^3]_0^2=8$ m and joining velocity is $12\,\mathrm{m\,s^{-1}}$. Remaining distance is 18 m. The later triangle area is $12(T-2)/2=18$, so $T=5$ s and later acceleration is $-12/3=-4\,\mathrm{m\,s^{-2}}$. Speed increases to 12 at $t=2$ and then decreases, so that is the greatest speed and its time.

</details>

</div>

<div class="lesson-check" markdown="1">

### Another independent task {#l23-independent-conditions}

**Question:** For $0\le t\le2$, a particle has acceleration $a=6t-2$ in SI units. At $t=1$ its velocity is 3 and its position is 5. Find v and s in terms of t, then its displacement from 0 to 2 s. Check both given conditions.

<details markdown="1">
<summary>Hint</summary>

Use the velocity condition after the first integration and the position condition after the second.

</details>

<details markdown="1">
<summary>Solution and check</summary>

First integrate the acceleration:

$$v=3t^2-2t+C,\qquad 3=3-2+C,\qquad C=2.$$

Then integrate the velocity, including this constant term:

$$s=t^3-t^2+2t+D,\qquad 5=1-1+2+D,\qquad D=3.$$

Thus $v=3t^2-2t+2$ and $s=t^3-t^2+2t+3$. Differentiating recovers the given acceleration, and at $t=1$ the values are 3 and 5. The displacement is $s(2)-s(0)=11-3=8$ m.

</details>

</div>

### Diagnose and repair {#l23-diagnosis}

SUVAT equations cannot be used across an interval of variable acceleration. Taking an absolute value only after integrating the whole interval still loses backward travel. Split where velocity changes sign.

For lost initial conditions, revisit [the two integrations](#l23-worked), then [use two new conditions](#l23-retry-conditions). For lost return travel, use [the sign changes](#l23-worked), then [the distance retry](#l23-retry).

<div class="lesson-check" markdown="1">

### Try again {#l23-retry}

**Question:** Position is $s=t^3-3t^2$ metres for $0\le t\le3$. Find acceleration at 1 s and total distance over the interval.

<details markdown="1">
<summary>Hint</summary>

Differentiate for acceleration and inspect velocity sign for distance.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$v=3t(t-2)$ and $a=6t-6$, so $a(1)=0$. Positions at 0,2,3 s are $0,-4,0$ m, giving total distance $8$ m.

</details>

</div>

<div class="lesson-check" markdown="1">

### Use both conditions again {#l23-retry-conditions}

**Question:** A particle has $a=4t$, $v(0)=-2$ and $s(0)=1$ in SI units. Find its position at $t=2$ by finding v and s first.

<details markdown="1">
<summary>Hint</summary>

The starting position is not the constant in the velocity expression.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Integration gives $v=2t^2+C$. Since $v(0)=-2$, $C=-2$. Integrating again gives $s=\frac23t^3-2t+D$. Since $s(0)=1$, $D=1$. Therefore $s(2)=16/3-4+1=7/3$ m. Differentiating s twice gives $a=4t$.

</details>

</div>

## After this lesson {#next-step}

Close the solutions and check that you can complete each group’s retry independently and explain the method and its conditions. Revisit the relevant example if needed, then continue to the next lesson.

[Previous lesson: Constant acceleration](/alevel/as-mathematics/constant-acceleration/) · [Course route](/alevel/as-mathematics/#learning-route) · [Next lesson: Forces and Newton’s laws](/alevel/as-mathematics/forces/)

After completing this route, try [the mixed task](/alevel/as-mathematics/#mixed-mechanics). In a later study session, return to [the recall task](/alevel/as-mathematics/#later-mechanics) with solutions closed.

## Sources and scope {#sources}

<details class="lesson-notes" markdown="1">
<summary>View scope and marking sources</summary>

Organised against the [current official 9660 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). Paired marking material informs the expected reasoning; every task here is separately self-written and is not an official question or official mark scheme.

Specification §3.2 M1.2; MA02 January 2025 Q10, QP pp20–21, MS pp17–19.

[MA01 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

Success means independently explaining the method and checking its conditions, not just reading a solution. Student learning outcomes have not been trialled.

</details>

{% include exam_topic_practice.html %}
