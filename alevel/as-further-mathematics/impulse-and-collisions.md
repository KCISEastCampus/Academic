---
title: "Variable-force impulse and collisions"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/impulse-and-collisions/
toc_headings: h2, h3
study_page: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/) · M3 · FM1.3

All demonstrations, scaffolded attempts, independent tasks and retries here are **self-written**, with no official marks. Write your method and reasons before opening hints and solutions separately.

## Which system, direction and interval? {#model}

**Start:** distinguish velocity −3 m s⁻¹ from speed 3 m s⁻¹. **Goal:** integrate a variable force, use signed momentum and restitution, test velocity ranges and explain energy change. You need AS momentum, integrals and simultaneous equations. Model particles moving along one straight line; use one positive axis throughout.

$$p=mv,\qquad J=\int_{t_1}^{t_2}F(t)\,dt=m(v-u).$$

Impulse is signed area under a force–time graph, with units N s. For a constant force this reduces to $J=F\Delta t$. Total momentum of a two-particle system is conserved only if its external impulse is zero or negligible during impact. Internal impulses cancel. A fixed wall supplies external impulse to the particle, so particle momentum alone is not conserved.

$$m_Au_A+m_Bu_B=m_Av_A+m_Bv_B;\qquad v_B-v_A=e(u_A-u_B),\quad0\le e\le1.$$

The restitution equation assumes A approaches B from the left on the chosen positive axis, with $u_A>u_B$. The post-impact separation speed is nonnegative. At $e=1$ the ideal collision conserves kinetic energy; for $e<1$ energy can leave translational kinetic energy. At $e=0$ velocities agree immediately; permanent adhesion is not implied.

## Demonstration: a force pulse and two particles {#demonstration}

**Demonstration (self-written):** A 2 kg particle initially moves at −1 m s⁻¹. Its net force is $F(t)=6t(1-t)$ N for $0\le t\le1$ s. Find its final velocity.

$$J=\int_0^1(6t-6t^2)\,dt=[3t^2-2t^3]_0^1=1\ \mathrm{N\,s};\qquad v=-1+1/2=-0.5\ \mathrm{m\,s^{-1}}.$$

![Positive force pulse F=6t(1−t), with labelled time endpoints and signed area 1 N s; a separate before/after collision diagram shows 2 kg and 1 kg particles and signed velocity arrows.](/alevel/as-further-mathematics/diagrams/impulse.svg)

**Demonstration (self-written):** A (2 kg) has initial velocity 3 m s⁻¹; B (1 kg) has velocity −1 m s⁻¹. They collide on a smooth horizontal line with negligible external impulse and $e=1/2$.

$$2v_A+v_B=5,\qquad v_B-v_A=2\Rightarrow v_A=1,\quad v_B=3\ \mathrm{m\,s^{-1}}.$$

$$J_A=2(1-3)=-4\ \mathrm{N\,s},\quad J_B=1(3-(-1))=4\ \mathrm{N\,s};$$

$$K_{\rm before}=\tfrac12(2)(3^2)+\tfrac12(1)(1^2)=9.5\ \mathrm J,\quad K_{\rm after}=\tfrac12(2)(1^2)+\tfrac12(1)(3^2)=5.5\ \mathrm J.$$

Opposite impulses conserve total momentum, while 4 J leaves kinetic energy; do not impose kinetic-energy conservation as a second equation for an inelastic impact.

## Scaffold and independent choice {#practice}

**Scaffold (self-written):** A 0.5 kg particle approaches a fixed wall at 4 m s⁻¹. Positive is away from the wall, and $e=0.75$. Find signed velocities and the wall's impulse on the particle.

<details markdown="1"><summary>Scaffold check</summary>

$$u=-4,\quad v=-eu=3\ \mathrm{m\,s^{-1}};\qquad J=0.5(3-(-4))=3.5\ \mathrm{N\,s}.$$

The impulse is away from the wall. The wall-particle system boundary differs from the particle alone.

</details>

**Independent task (self-written):** A 1 kg particle approaches a fixed wall with speed u. Positive is away from the wall. The net contact force is $F(t)=12t(1-t)$ N for $0\le t\le1$ s; other impulse is negligible. Assume a conventional restitution model $0\le e\le1$ and nonnegative outward velocity immediately after contact. Find the impulse, express the final signed velocity and e in terms of u, and find the physically permitted range of u. Explain which boundaries correspond to no rebound and an elastic impact.

<details markdown="1"><summary>Hint</summary>

Initial signed velocity is −u. Integrate before using $J=v+u$. A separating final velocity must obey $0\le v\le u$.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$J=\int_0^1(12t-12t^2)\,dt=2\ \mathrm{N\,s};\quad v=2-u,\quad e=\frac{2-u}{u}\quad(u>0).$$

$$0\le2-u\le u\Rightarrow1\le u\le2\ \mathrm{m\,s^{-1}}.$$

At $u=2$, v is zero and $e=0$ (no immediate rebound). At $u=1$, $v=u$ and $e=1$ (elastic). If strict positive rebound is required, exclude $u=2$. The range uses both the impulse data and the conventional impact model; the force pulse alone does not justify it.

</details>

## Diagnose and retry {#retry}

An impulse with the wrong direction often comes from replacing signed velocities by speeds. A computed $e>1$ fails the conventional model; do not accept it merely because the equations were solved.

**Retry (self-written):** Two equal 1 kg masses collide on a line with initial velocities 2 and 0 m s⁻¹, negligible external impulse and $e=0$. Find final velocities and kinetic-energy loss. Must they stay attached forever?

<details markdown="1"><summary>Retry check</summary>

$$v_A=v_B=1\ \mathrm{m\,s^{-1}},\qquad\Delta K_{\rm loss}=2-1=1\ \mathrm J.$$

Equal immediate velocities do not by themselves imply permanent attachment.

</details>

## Sources and scope {#sources}

Scope follows 9665 v5.2. The paired questions and mark schemes below informed the required evidence; these exercises do not reproduce their questions or award official marks.

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FM1.3.
- FM02 June 2024 Q11–12; QP pp.21–23, MS pp.18–20. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

[Previous](/alevel/as-further-mathematics/dimensions/) · [Course route](/alevel/as-further-mathematics/#learning-route)
