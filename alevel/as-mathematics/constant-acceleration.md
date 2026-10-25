---
layout: subjects
title: "Constant acceleration"
mathjax: true
grade: as
subject: as-mathematics
permalink: /alevel/as-mathematics/constant-acceleration/
toc_headings: h2
reading_layout: true
study_page: true
---

[AS Mathematics learning route](/alevel/as-mathematics/#learning-route) · M1.1 · OxfordAQA 9660 v5.2
{:.lesson-meta}

Read the explanation and complete example, then try the questions on paper. Hints and solutions open separately. All questions are **self-written**, with no official marks.

- [Describe motion with graphs](#l22)

## Describe motion with graphs {#l22}

Goal: connect signed motion quantities, graphs and total distance. Prerequisites: [line gradients](/alevel/as-mathematics/coordinate-geometry/#l04) and units.

### Direction belongs in the calculation {#l22-concept}

Choose an origin and say which way is positive. Displacement tells how far the final position is from the initial one, with a sign. Distance counts the whole path and cannot be negative. Velocity includes direction; speed is its magnitude.

An s–t graph's gradient is velocity; a v–t graph's gradient is acceleration. Area under v–t gives displacement with signs; area under a–t gives change in velocity. At a turn, velocity crosses zero, so split areas there when finding distance. A curved s–t graph can still have constant acceleration.

For constant acceleration only, the change of velocity is acceleration times time. The straight v–t graph also gives displacement as a trapezium area. These connections lead to

$$\begin{aligned}
v&=u+at,\\
s&=ut+\tfrac12at^2,\\
v^2&=u^2+2as,\\
s&=\tfrac12(u+v)t.
\end{aligned}$$

Choose the equation using the quantities you know; do not use constant-acceleration formulae across a changing acceleration. Neglecting air resistance and taking upward positive gives $a=-9.8\,\mathrm{m\,s^{-2}}$, even at the highest point when velocity is zero. Average speed uses total distance; average velocity uses displacement. Both divide by total time.

![Upward is positive. Velocity decreases linearly from 14.7 at t=0 through zero at 1.5 s to -14.7 at 3 s; acceleration is a constant -9.8.](/alevel/as-mathematics/assets/motion.svg)

<div class="worked-example" markdown="1">

### A complete example {#l22-worked}

**Question:** A ball is projected vertically upwards at $14.7\,\mathrm{m\,s^{-1}}$ and returns to the launch height. Neglect air resistance and take $g=9.8\,\mathrm{m\,s^{-2}}$. Find the time to its highest point, maximum height, total flight time, distance and average speed.

$v=14.7-9.8t=0$ at $t=1.5$ s. The height is $14.7(1.5)-4.9(1.5)^2=11.025$ m. Setting $s=14.7t-4.9t^2=0$ gives $t=0$ or $3$ s; only 3 s is the later return. Distance is $22.05$ m, hence average speed $7.35\,\mathrm{m\,s^{-1}}$. Average velocity is zero because the displacement is zero. Values here follow the constructed inputs without premature rounding.

</div>

<div class="lesson-check" markdown="1">

### Complete a supported attempt {#l22-scaffold}

**Question:** A particle has initial velocity $4\,\mathrm{m\,s^{-1}}$ and constant acceleration $2\,\mathrm{m\,s^{-2}}$. Find its velocity and displacement after 3 s and relate the displacement to its v–t graph.

<details markdown="1">
<summary>Hint</summary>

The graph is a straight line with nonzero starting height.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$v=10\,\mathrm{m\,s^{-1}}$ and $s=21$ m. The trapezium area is $(4+10)3/2=21$ m; its slope is the stated acceleration.

</details>

</div>

<div class="lesson-check" markdown="1">

### Independent task {#l22-independent}

**Question:** A continuous v–t graph consists of straight segments joining $(0,0),(4,8),(7,8),(10,-4)$, with time in seconds and velocity in metres per second. Sketch it, determine each acceleration, and find displacement, distance and average speed over 10 s.

<details markdown="1">
<summary>Hint</summary>

Split the final segment where velocity changes sign.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The accelerations are $2,0,-4\,\mathrm{m\,s^{-2}}$ on the three open time intervals. Velocity is zero again at $t=9$ s. Signed areas give displacement $16+24+8-2=46$ m, while distance is $16+24+8+2=50$ m, so average speed is $5\,\mathrm{m\,s^{-1}}$. At the idealised joins the slope changes abruptly, so no single acceleration value is assigned there.

![Check graph: the three velocity segments pass through the four given points and cross zero at 9 seconds. The below-axis triangular area counts negatively for displacement and positively for distance.](/alevel/as-mathematics/assets/motion-check.svg)

</details>

</div>

### Diagnose and repair {#l22-diagnosis}

A negative velocity means motion in the opposite chosen direction, not negative distance. The arithmetic mean of two endpoint speeds is not a general average-speed rule, especially across turning points or multiple stages.

Return to [signed areas and direction](#l22-concept), then [retry a journey with a turn](#l22-retry).

<div class="lesson-check" markdown="1">

### Try again {#l22-retry}

**Question:** A particle starts with velocity $6\,\mathrm{m\,s^{-1}}$ and acceleration $-2\,\mathrm{m\,s^{-2}}$ for 5 s. Find its displacement and total distance.

<details markdown="1">
<summary>Hint</summary>

Locate the zero velocity before measuring distance.

</details>

<details markdown="1">
<summary>Solution and check</summary>

It turns at $t=3$ s. Displacement is $30-25=5$ m. Forward distance is $9$ m and return distance $4$ m, so total distance is $13$ m.

</details>

</div>

## After this lesson {#next-step}

Close the solutions and check that you can complete each group’s retry independently and explain the method and its conditions. Revisit the relevant example if needed, then continue to the next lesson.

[Previous lesson: Binomial distributions](/alevel/as-mathematics/binomial/) · [Course route](/alevel/as-mathematics/#learning-route) · [Next lesson: Variable acceleration](/alevel/as-mathematics/variable-acceleration/)

After completing this route, try [the mixed task](/alevel/as-mathematics/#mixed-mechanics). In a later study session, return to [the recall task](/alevel/as-mathematics/#later-mechanics) with solutions closed.

## Sources and scope {#sources}

<details class="lesson-notes" markdown="1">
<summary>View scope and marking sources</summary>

Organised against the [current official 9660 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). Paired marking material informs the expected reasoning; every task here is separately self-written and is not an official question or official mark scheme.

Specification §3.2 M1.1; MA02 January 2025 Q10 motion-graph evidence, MS pp17–19.

[MA01 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

Success means independently explaining the method and checking its conditions, not just reading a solution. Student learning outcomes have not been trialled.

</details>
