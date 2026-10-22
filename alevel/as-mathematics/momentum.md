---
layout: subjects
title: "Momentum and impulse"
mathjax: true
grade: as
subject: as-mathematics
permalink: /alevel/as-mathematics/momentum/
toc_headings: h2, h3
study_page: true
---

[AS Mathematics learning route](/alevel/as-mathematics/#learning-route) · M1.4 · OxfordAQA 9660 v5.2

Attempt each task on paper before opening its hint. Use the separate solution to check method, conditions and result. All questions are **self-written**, with no official marks. The paired Chinese page keeps the same English prompts, formulae and numerical answers.

- [L25 Signed impulse and collision constraints](#l25)

## L25 · Signed impulse and collision constraints {#l25}

Goal: choose a system, justify momentum conservation and filter post-collision velocities. Prerequisites: L02, L22 and L24.

On one chosen axis, momentum is $mv$ and impulse on a constant mass is $I=m(v-u)$, with units $\mathrm{N\,s}=\mathrm{kg\,m\,s^{-1}}$. Impulse has a sign; its magnitude is nonnegative. For a two-particle system, opposite internal collision impulses cancel. If the resultant external impulse is zero or negligible,

$$m_1u_1+m_2u_2=m_1v_1+m_2v_2.$$

Conservation does not determine both final velocities without another stated condition. If A is left of B and they are separating immediately after contact, $v_A<v_B$; equality is the boundary case of common velocity. A fixed wall exerts an external impulse on a ball, so the ball alone does not conserve momentum. M1 direct surface impacts are perpendicular to a smooth fixed surface; restitution law is not required. Momentum conservation alone does not imply kinetic-energy conservation.

![Right is positive. Before impact A is left and moves right, B is right and moves left. After impact both move right, with B faster than A so the particles separate.](/alevel/as-mathematics/assets/collision.svg)

### Worked reasoning {#l25-worked}

**Question:** A 2 kg particle A moving right at $5\,\mathrm{m\,s^{-1}}$ collides with a 3 kg particle B moving left at $1\,\mathrm{m\,s^{-1}}$. Afterwards A moves right at $0.5\,\mathrm{m\,s^{-1}}$. External impulse on the pair is negligible. Find B’s velocity and the impulse on A; check separation.

Initial total momentum is $2(5)+3(-1)=7\,\mathrm{kg\,m\,s^{-1}}$. Conservation gives $1+3v_B=7$, so $v_B=2\,\mathrm{m\,s^{-1}}$ rightwards. Impulse on A is $2(0.5-5)=-9\,\mathrm{N\,s}$, meaning 9 N s leftwards. B receives the opposite impulse $3[2-(-1)]=9\,\mathrm{N\,s}$. Since A was left of B at impact and $0.5<2$, they separate.

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

### Diagnose and repair {#l25-diagnosis}

Using speeds as positive in every term destroys the direction information. Do not add an unstated energy or restitution equation. This group supplies the MA02 → MA05 collision-analysis prerequisite: signed velocities, a justified system and feasible final motion.

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

## After this lesson {#next-step}

This is the final lesson in this route. Close the solutions and attempt the retries independently, explaining your system and sign convention. Return to the course route to choose topics that need more practice.

[Previous lesson: Forces and Newton’s laws](/alevel/as-mathematics/forces/) · [Course route](/alevel/as-mathematics/#learning-route)

## Sources and scope {#sources}

Organised against the [current official 9660 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). Paired marking material informs the expected reasoning; every task here is separately self-written and is not an official question or official mark scheme.

Specification §3.2 M1.4; MA02 January 2025 Q11, QP pp22–23, MS pp20–21.

[MA01 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

Success means independently explaining the method and checking its conditions, not just reading a solution. Student learning outcomes have not been trialled.
