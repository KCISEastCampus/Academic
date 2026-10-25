---
layout: subjects
title: "Momentum and impulse"
mathjax: true
grade: as
subject: as-mathematics
permalink: /alevel/as-mathematics/momentum/
toc_headings: h2
reading_layout: true
study_page: true
---

[AS Mathematics learning route](/alevel/as-mathematics/#learning-route) · M1.4 · OxfordAQA 9660 v5.2
{:.lesson-meta}

Read the explanation and complete example, then try the questions on paper. Hints and solutions open separately. All questions are **self-written**, with no official marks.

- [Momentum and impulse in a chosen system](#l25)

## Momentum and impulse in a chosen system {#l25}

Goal: justify a momentum system and check feasible post-collision motion. Prerequisites: [directions](../constant-acceleration/#l22) and [forces](../forces/#l24).

### The chosen system decides what can be conserved {#l25-concept}

Choose one positive direction. Momentum is mass times signed velocity, $mv$. Impulse is the change in momentum: for constant mass, $I=m(v-u)$, with units $\mathrm{N\,s}=\mathrm{kg\,m\,s^{-1}}$. Its sign tells direction; its magnitude is nonnegative.

During a two-particle collision, the impulses the particles exert on each other are opposite. For the pair they cancel. If the resultant external impulse is zero or negligible, total momentum before equals total momentum after:

$$m_1u_1+m_2u_2=m_1v_1+m_2v_2.$$

One equation cannot determine two unknown final velocities: use the other condition actually given, such as sticking together. Do not add energy conservation or a restitution law without justification.

Also check what the particles do afterwards. If A is just left of B and they separate, $v_A<v_B$; equal velocities are the boundary of common motion. For a ball alone, a wall supplies external impulse, so its momentum is not conserved. M1 surface impacts here are normal to a smooth fixed surface; no restitution law is required.

![Right is positive. Before impact A is left and moves right, B is right and moves left. After impact both move right, with B faster than A so the particles separate.](/alevel/as-mathematics/assets/collision.svg)

<div class="worked-example" markdown="1">

### A complete example {#l25-worked}

**Question:** A 2 kg particle A moving right at $5\,\mathrm{m\,s^{-1}}$ collides with a 3 kg particle B moving left at $1\,\mathrm{m\,s^{-1}}$. Afterwards A moves right at $0.5\,\mathrm{m\,s^{-1}}$. External impulse on the pair is negligible. Find B’s velocity and the impulse on A; check separation.

Initial total momentum is $2(5)+3(-1)=7\,\mathrm{kg\,m\,s^{-1}}$. Conservation gives $1+3v_B=7$, so $v_B=2\,\mathrm{m\,s^{-1}}$ rightwards. Impulse on A is $2(0.5-5)=-9\,\mathrm{N\,s}$, meaning 9 N s leftwards. B receives the opposite impulse $3[2-(-1)]=9\,\mathrm{N\,s}$. Since A was left of B at impact and $0.5<2$, they separate.

</div>

<div class="lesson-check" markdown="1">

### Complete a supported attempt {#l25-scaffold}

**Question:** A 0.4 kg ball hits a fixed smooth wall normally at $6\,\mathrm{m\,s^{-1}}$ and rebounds at $4\,\mathrm{m\,s^{-1}}$. Taking towards the wall positive, find its impulse and explain why its momentum is not conserved.

<details markdown="1">
<summary>Hint</summary>

The rebound velocity has the opposite sign.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$I=0.4(-4-6)=-4\,\mathrm{N\,s}$. The wall supplies this external impulse to the ball, so the ball’s momentum changes. The impulse magnitude is 4 N s away from the wall.

</details>

</div>

<div class="lesson-check" markdown="1">

### Independent task {#l25-independent}

**Question:** A 1 kg particle A moving right at $6\,\mathrm{m\,s^{-1}}$ catches a stationary 2 kg particle B. External impulse is negligible. After impact A continues right with speed v and the particles separate immediately. Determine the admissible range of v using momentum and separation, and find the range of impulse magnitudes on A.

<details markdown="1">
<summary>Hint</summary>

Express B’s velocity using v, then require the right-hand particle to be moving faster.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Momentum gives $6=v+2v_B$, hence $v_B=(6-v)/2$. Continuing right requires $v>0$ and separation requires $v<(6-v)/2$, giving $0<v<2$. The impulse on A is $v-6$, always leftwards, with magnitude $6-v$. Thus the magnitude range is $4<\lvert I\rvert<6\,\mathrm{N\,s}$. The endpoints are excluded because zero A speed and equal final speeds do not meet the stated conditions.

</details>

</div>

### Diagnose and repair {#l25-diagnosis}

Using speeds as positive in every term destroys the direction information. Do not add an unstated energy or restitution equation. This group supplies the MA02 → MA05 collision-analysis prerequisite: signed velocities, a justified system and feasible final motion.

For signs or the chosen system, revisit [the collision example](#l25-worked), then [the sticking collision](#l25-retry). For separation, reread [the final-motion check](#l25-concept), then [find a new feasible range](#l25-retry-separation).

<div class="lesson-check" markdown="1">

### Try again {#l25-retry}

**Question:** A 1 kg particle at $4\,\mathrm{m\,s^{-1}}$ rightwards sticks to a stationary 3 kg particle after collision, with negligible external impulse. Find their common velocity and the impulse on the 1 kg particle. Is energy conservation needed?

<details markdown="1">
<summary>Hint</summary>

Sticking supplies a common-velocity condition.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$4=(1+3)V$ gives $V=1\,\mathrm{m\,s^{-1}}$ rightwards. The impulse is $1(1-4)=-3\,\mathrm{N\,s}$. No energy-conservation assumption is needed; the stated sticking condition closes the momentum model.

</details>

</div>

<div class="lesson-check" markdown="1">

### Another retry {#l25-retry-separation}

**Question:** A 2 kg particle A moving right at $6\,\mathrm{m\,s^{-1}}$ catches a stationary 1 kg particle B. The external impulse on the pair is negligible. After impact A continues right with speed v and the particles separate immediately. Find the possible range of v and the range of impulse magnitudes on A, explaining the endpoints.

<details markdown="1">
<summary>Hint</summary>

Express the right-hand particle’s final velocity in terms of v before imposing separation.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Take right positive. Momentum gives $12=2v+v_B$, so $v_B=12-2v$. A continues right and stays to the left of the separating B, so $0<v<v_B$. Hence $0<v<4\,\mathrm{m\,s^{-1}}$.

The impulse on A is $I=2(v-6)<0$, meaning leftwards, with magnitude $12-2v$. Therefore $4<\lvert I\rvert<12\,\mathrm{N\,s}$. At the lower speed boundary A would stop; at the upper one both final velocities would be equal, contradicting immediate separation. Both endpoints are excluded.

</details>

</div>

## After this lesson {#next-step}

This is the final lesson in this route. Close the solutions and attempt the retries independently, explaining your system and sign convention. Return to the course route to choose topics that need more practice.

[Previous lesson: Forces and Newton’s laws](/alevel/as-mathematics/forces/) · [Course route](/alevel/as-mathematics/#learning-route)

After completing this route, try [the mixed task](/alevel/as-mathematics/#mixed-mechanics). In a later study session, return to [the recall task](/alevel/as-mathematics/#later-mechanics) with solutions closed.

## Sources and scope {#sources}

<details class="lesson-notes" markdown="1">
<summary>View scope and marking sources</summary>

Organised against the [current official 9660 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). Paired marking material informs the expected reasoning; every task here is separately self-written and is not an official question or official mark scheme.

Specification §3.2 M1.4; MA02 January 2025 Q11, QP pp22–23, MS pp20–21.

[MA01 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

Success means independently explaining the method and checking its conditions, not just reading a solution. Student learning outcomes have not been trialled.

</details>
