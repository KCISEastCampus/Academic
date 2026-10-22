---
title: "Dimensions, units and model limits"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/dimensions/
toc_headings: h2, h3
study_page: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/) · M2 · FM1.2

All demonstrations, scaffolded attempts, independent tasks and retries here are **self-written**, with no official marks. Write your method and reasons before opening hints and solutions separately.

## What can dimensional consistency prove? {#model}

**Start:** derive acceleration units from velocity change per time. **Goal:** find dimensions and units, infer powers under stated assumptions and identify the limits of the test. M,L,T denote dimensions of mass, length and time, not their numerical units. Terms added in an equation must have the same dimensions.

| Quantity | Definition | Dimensions | SI unit |
| --- | --- | --- | --- |
| Velocity | displacement/time | $LT^{-1}$ | m s⁻¹ |
| Acceleration | velocity/time | $LT^{-2}$ | m s⁻² |
| Force | mass × acceleration | $MLT^{-2}$ | N |
| Momentum / impulse | mass × velocity / force × time | $MLT^{-1}$ | kg m s⁻¹ / N s |
| Energy | force × distance | $ML^2T^{-2}$ | J |
| Power | energy/time | $ML^2T^{-3}$ | W |
| Pressure | force/area | $ML^{-1}T^{-2}$ | Pa |
| Density | mass/volume | $ML^{-3}$ | kg m⁻³ |

Each row comes from its definition, not from the spelling of the unit. An unknown coefficient can carry dimensions. Dimensionless constants, angles and ratios may affect a model without appearing in an M,L,T balance.

## Demonstration: pressure and a period model {#demonstration}

$$[\rho gh]=(ML^{-3})(LT^{-2})(L)=ML^{-1}T^{-2}=[P].$$

This checks the dimensions of $P=\rho gh$; it does not establish the hydrostatic assumptions or determine a coefficient. $2\rho gh$ has the same dimensions.

**Demonstration (self-written):** Assume a pendulum period τ has form $K\ell^ag^bm^c$, with dimensionless K and no other dimensional variables. Find the powers.

$$T=L^a(LT^{-2})^bM^c\Rightarrow c=0,\ a+b=0,\ -2b=1.$$

$$a=1/2,\quad b=-1/2,\quad c=0\Rightarrow\tau=K\sqrt{\ell/g}.$$

The result depends on the assumed variable list and product-of-powers model. K could depend on a dimensionless amplitude. An ideal small-amplitude pendulum model gives a particular K; dimensional analysis alone does not.

## Scaffold and independent choice {#practice}

**Scaffold (self-written):** If a gravitational force is modelled as $F=Gm_1m_2/r^2$, derive dimensions and SI units of G.

<details markdown="1"><summary>Scaffold check</summary>

$$[G]=\frac{[F]L^2}{M^2}=M^{-1}L^3T^{-2};\qquad\mathrm{m^3\,kg^{-1}\,s^{-2}}.$$

</details>

**Independent task (self-written):** In a linear resistance model $F=kv$, find the dimensions and SI units of k. A competing model is $F=C\rho A v^2$, where A is area and C is dimensionless. Check it, predict the force factor when v doubles with other variables fixed, and explain why the check cannot select the true model. Is $F=kv+1$ dimensionally valid if 1 is a pure number?

<details markdown="1"><summary>Hint</summary>

Divide dimensions to obtain k; multiply them to check the competing model. Separate algebraic scaling from evidence about physical applicability.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$[k]=(MLT^{-2})/(LT^{-1})=MT^{-1},\qquad\mathrm{kg\,s^{-1}}.$$

$$[C\rho Av^2]=(ML^{-3})(L^2)(L^2T^{-2})=MLT^{-2}.$$

The competing force scales by 4, while the linear force scales by 2. Both can be dimensionally consistent in different regimes; observations and model assumptions are needed. Adding the pure number 1 to a force is invalid.

</details>

## Diagnose and retry {#retry}

A correct unit is not proof of a law. If your exponent equations have no solution, check the dimensions and whether the assumed variables could supply the required dimensions.

**Retry (self-written):** A timescale is assumed to depend only on a length ℓ and a speed v through $K\ell^av^b$. Find a,b and say whether K is determined.

<details markdown="1"><summary>Retry check</summary>

$$T=L^{a+b}T^{-b}\Rightarrow b=-1,\ a=1;\qquad\tau=K\ell/v.$$

K remains undetermined by dimensions.

</details>

## Sources and scope {#sources}

Scope follows 9665 v5.2. The paired questions and mark schemes below informed the required evidence; these exercises do not reproduce their questions or award official marks.

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FM1.2.
- FM02 June 2024 Q10; QP p.19, MS p.17. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

[Previous](/alevel/as-further-mathematics/relative-motion/) · [Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/impulse-and-collisions/)
