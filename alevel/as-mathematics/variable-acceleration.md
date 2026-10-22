---
layout: subjects
title: "Variable acceleration"
mathjax: true
grade: as
subject: as-mathematics
permalink: /alevel/as-mathematics/variable-acceleration/
toc_headings: h2, h3
study_page: true
---

[AS Mathematics learning route](/alevel/as-mathematics/#learning-route) · M1.2 · OxfordAQA 9660 v5.2

Attempt each task on paper before opening its hint. Use the separate solution to check method, conditions and result. All questions are **self-written**, with no official marks. The paired Chinese page keeps the same English prompts, formulae and numerical answers.

- [L23 Calculus and connected stages of motion](#l23)

## L23 · Calculus and connected stages of motion {#l23}

Goal: determine constants from conditions and calculate distances for variable acceleration. Prerequisites: L06–L08 and L22.

For position $s$, velocity $v$ and acceleration $a$,

$$v=\frac{ds}{dt},\quad a=\frac{dv}{dt},\quad v=\int a\,dt+C,\quad s=\int v\,dt+D.$$

Each integration introduces its own constant. Use velocity conditions for the first and position conditions for the second. On an interval, the displacement is the integral of velocity; distance requires splitting at every sign change and adding positive path lengths. At a change of motion model, match position and the specified velocity; acceleration may change. These tasks use P1 power calculus, not later trigonometric or differential-equation methods.

### Worked reasoning {#l23-worked}

**Question:** A particle has $a=2t-4\,\mathrm{m\,s^{-2}}$, $v(0)=3\,\mathrm{m\,s^{-1}}$ and $s(0)=0$. Find v and s, then displacement and distance from $t=0$ to $t=4$.

Integrating and using the conditions gives $v=t^2-4t+3=(t-1)(t-3)$ and $s=t^3/3-2t^2+3t$. The velocity signs are +, −, + over the intervals split at 1 and 3 s. The positions are $s(0)=0,s(1)=4/3,s(3)=0,s(4)=4/3$ metres. Displacement is $4/3$ m, whereas distance is $4/3+4/3+4/3=4$ m. Thus average speed over this interval is $1\,\mathrm{m\,s^{-1}}$.

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

### Diagnose and repair {#l23-diagnosis}

SUVAT equations cannot be used across an interval of variable acceleration. Taking an absolute value only after integrating the whole interval still loses backward travel. Split where velocity changes sign.

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

## Sources and scope {#sources}

Organised against the [current official 9660 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). Paired marking material informs the expected reasoning; every task here is separately self-written and is not an official question or official mark scheme.

Specification §3.2 M1.2; MA02 January 2025 Q10, QP pp20–21, MS pp17–19.

[MA01 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

Success means independently explaining the method and checking its conditions, not just reading a solution. Student learning outcomes have not been trialled.
