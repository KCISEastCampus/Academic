---
title: "Vectors, interception and closest approach"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/relative-motion/
toc_headings: h2, h3
study_page: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/) · M1 · FM1.1

All demonstrations, scaffolded attempts, independent tasks and retries here are **self-written**, with no official marks. Write your method and reasons before opening hints and solutions separately.

## Do intersecting routes imply a meeting? {#model}

**Start:** locate $(3,4)$ and find its distance from the origin. **Goal:** introduce vector notation, combine velocities and test the same time in two components; then solve interception and nearest-distance problems. You need coordinates, constant-speed motion and quadratics. Use one inertial frame, common origin, common clock and consistent units.

The unit vectors $\mathbf i,\mathbf j$ point one unit along positive x,y. Components add separately; subtraction gives the displacement from one point to another. A vector has direction as well as magnitude; speed is a nonnegative magnitude.

$$\mathbf r=x\mathbf i+y\mathbf j=\begin{pmatrix}x\\y\end{pmatrix},\quad
\lvert\mathbf r\rvert=\sqrt{x^2+y^2},\quad\overrightarrow{AB}=\mathbf r_B-\mathbf r_A;\qquad
\mathbf r(t)=\mathbf r(0)+\mathbf vt.$$

$$\mathbf r_{BA}=\mathbf r_B-\mathbf r_A=\mathbf r_{BA}(0)+(\mathbf v_B-\mathbf v_A)t;\qquad \mathbf v_{BA}=\mathbf v_B-\mathbf v_A.$$

For a moving medium, $\mathbf v_{\rm ground}=\mathbf v_{\rm relative\ medium}+\mathbf v_{\rm medium}$; draw vectors head-to-tail. For example current $4\mathbf i$ and swimming $3\mathbf j$ give ground velocity $4\mathbf i+3\mathbf j$ and speed 5 in matching units.

![Head-to-tail velocity triangle with components (4,0), (0,3), resultant (4,3) and magnitude 5; a second panel shows relative displacement (6−2t,8) meeting its perpendicular closest point at t=3.](/alevel/as-further-mathematics/diagrams/relative.svg)

## Demonstration: successful interception and a nearest point {#demonstration}

**Demonstration (self-written):** At $t=0$ s, target B is at $(6,0)$ m with velocity $(0,1)$ m s⁻¹. A leaves the origin at a constant unknown direction and speed 2 m s⁻¹. Find a heading to intercept B for $t>0$.

$$\mathbf v_A t=(6,t),\qquad \mathbf v_A=(6/t,1),\qquad 36/t^2+1=4.$$

$$t=2\sqrt3\ \mathrm s,\quad\mathbf v_A=(\sqrt3,1)\ \mathrm{m\,s^{-1}},\quad\text{heading }\pi/6\text{ above positive x}.$$

Both positions are $(6,2\sqrt3)$ m then. The negative algebraic time is inadmissible. For a different pair with relative displacement $(6-2t,8)$ m, $0\le t\le5$ s, minimise the squared separation:

$$d^2=(6-2t)^2+64=4(t-3)^2+64\Rightarrow d_{\min}=8\ \mathrm m\text{ at }t=3\ \mathrm s.$$

Geometrically the relative point follows a horizontal line; its perpendicular from the origin reaches $(0,8)$. If that time lies outside the allowed interval, use an endpoint. If relative velocity is zero, the separation is constant; do not divide by its squared magnitude.

## Scaffold and independent choice {#practice}

**Scaffold (self-written):** A starts at $(0,0)$ m with velocity $(4,3)$ m s⁻¹; B starts at $(12,0)$ m with velocity $(1,3)$ m s⁻¹. Write relative position B−A and test collision.

<details markdown="1"><summary>Scaffold check</summary>

$$\mathbf r_{BA}(t)=(12-3t,0);\qquad t=4\ \mathrm s,\quad\mathbf r_A=\mathbf r_B=(16,12)\ \mathrm m.$$

</details>

**Independent task (self-written):** A starts at $(0,0)$ m with velocity $(2,0)$ m s⁻¹; B starts at $(6,8)$ m with velocity $(0,-2)$ m s⁻¹. Do they collide for $t\ge0$? Find their closest distance for $t\ge0$, and then for $0\le t\le2$ s. Explain the changed answer geometrically or algebraically.

<details markdown="1"><summary>Hint</summary>

A collision requires both relative components to vanish at one time. Distance minimisation must obey the given time interval.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\mathbf r_{BA}=(6-2t,8-2t);\qquad 6-2t=0\Rightarrow t=3,\quad8-2t=0\Rightarrow t=4.$$

Different times mean no collision despite intersecting route lines.

$$d^2=(6-2t)^2+(8-2t)^2=8(t-3.5)^2+2.$$

$$t\ge0:\quad t=3.5\ \mathrm s,\ d_{\min}=\sqrt2\ \mathrm m;\qquad 0\le t\le2:\quad t=2\ \mathrm s,\ d_{\min}=2\sqrt5\ \mathrm m.$$

The unrestricted nearest point occurs after the shorter observation interval; separation decreases throughout that shorter interval, so its final endpoint is nearest.

</details>

## Diagnose and retry {#retry}

If you equated speeds, you discarded direction. If a negative time gives your minimum, restore the time restriction and compare endpoints.

**Retry (self-written):** A and B have equal velocity $(2,-1)$ m s⁻¹ and initial separation vector $(3,4)$ m. Find their relative velocity and separation for all valid times.

<details markdown="1"><summary>Retry check</summary>

$$\mathbf v_{BA}=\mathbf0,\qquad\mathbf r_{BA}=(3,4)\ \mathrm m,\qquad d=5\ \mathrm m.$$

</details>

## Sources and scope {#sources}

Scope follows 9665 v5.2. The paired questions and mark schemes below informed the required evidence; these exercises do not reproduce their questions or award official marks.

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FM1.1.
- FM02 June 2024 Q9; QP p.18, MS p.16. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

[Previous](/alevel/as-further-mathematics/linear-combinations/) · [Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/dimensions/)
