---
title: "Dimensions, units and model limits"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/dimensions/
toc_headings: "#start, #model, #demonstration, #practice, #retry, #later-review, #next-step, #sources"
study_page: true
reading_layout: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/)

Can the units rule out a proposed law? Can they determine it? We will build dimensions from definitions, infer powers from an explicit model and separate a necessary check from evidence that a model describes reality.

All examples and exercises are **self-written**, with no official marks. Read the explanations and continuous examples, then attempt each question before opening its hint or solution.

## Before you start {#start}

You need index laws, simultaneous linear equations and the definitions of velocity, acceleration, force and work. If dividing powers is difficult, revisit [AS algebra](/alevel/as-mathematics/algebra/#l01). In the check below, use only these definitions.

<section class="lesson-check" markdown="1">

### A definition check {#entry-check}

**Entry check (self-written):** Velocity has SI unit m s⁻¹. Use acceleration as change of velocity per time, and force as mass times acceleration, to derive their SI base units. Write the base units of force divided by area.

<details markdown="1"><summary>Hint</summary>

Divide by seconds once more for acceleration. An area has unit m².

</details>

<details markdown="1"><summary>Solution and repair</summary>

$$\begin{aligned}{}[a]_{\rm SI}&=\mathrm{m\,s^{-2}},\\{}[F]_{\rm SI}&=\mathrm{kg\,m\,s^{-2}},\\{}[F/A]_{\rm SI}&=\mathrm{kg\,m^{-1}\,s^{-2}}.\end{aligned}$$

Here the subscript SI means a unit expression, not dimensions. If you obtained m rather than m⁻¹ in the last line, write the area divisor explicitly and subtract its exponent. Rebuild the chain before continuing.

</details>

</section>

## 1. Dimensions describe the kind of quantity {#model}

A unit tells us the measurement scale: metres and centimetres measure the same kind of length. A dimension records that kind independently of scale. Write mass, length and time dimensions as M, L and T, and use square brackets for dimensions. Thus a speed has dimension $[v]=LT^{-1}$ whether its numerical unit is m s⁻¹ or km h⁻¹. These letters are not the mass, length or time values of a particular object.

Products multiply dimensions; division subtracts exponents; powers multiply exponents. Quantities that are added or equated must have matching dimensions. A pure number has dimension 1; a coefficient represented by a letter need not be dimensionless.

### Build dimensions and units together {#units}

| Quantity | Definition | Dimensions | SI unit |
| --- | --- | --- | --- |
| Velocity | displacement/time | $LT^{-1}$ | m s⁻¹ |
| Acceleration | velocity change/time | $LT^{-2}$ | m s⁻² |
| Force | mass × acceleration | $MLT^{-2}$ | N |
| Momentum / impulse | mass × velocity / force × time | $MLT^{-1}$ | kg m s⁻¹ / N s |
| Energy | force × distance | $ML^2T^{-2}$ | J |
| Power | energy/time | $ML^2T^{-3}$ | W |
| Pressure | force/area | $ML^{-1}T^{-2}$ | Pa |
| Density | mass/volume | $ML^{-3}$ | kg m⁻³ |

For work, the definition uses the force component along the displacement; its dimensions are still force times length. A named SI unit is shorthand: N means kg m s⁻², while Pa means N m⁻². Convert units to a common system before numerical substitution, even when dimensions already match.

## 2. Check a formula, then infer powers {#demonstration}

<section class="worked-example" markdown="1">

### Pressure from two descriptions {#pressure}

**Demonstration (self-written):** Pressure P is normal force per area. A proposed pressure difference is $P=\rho gh$, where ρ is density, g is acceleration and h is depth. Check dimensions and SI units. Does this establish the law?

Start from the definition rather than memorising the pressure row. Area contributes L² in the denominator.

$$\begin{aligned}{}[P]&=\frac{MLT^{-2}}{L^2}\\&=ML^{-1}T^{-2}.\end{aligned}$$

Now multiply the dimensions of every factor on the right. This explicitly tests the proposed combination.

$$\begin{aligned}{}[\rho gh]&=(ML^{-3})(LT^{-2})(L)\\&=ML^{-1}T^{-2}=[P].\end{aligned}$$

$$\begin{aligned}&(\mathrm{kg\,m^{-3}})(\mathrm{m\,s^{-2}})(\mathrm m)\\&\quad=\mathrm{kg\,m^{-1}\,s^{-2}}.\end{aligned}$$

The dimensions and SI units agree. This is necessary for the formula to describe a pressure, but $2\rho gh$ passes too. The test does not establish a stationary fluid of constant density, uniform g, the pressure reference or the numerical coefficient. Those require a physical model or evidence.

</section>

To infer powers, specify the entire assumed list of dimensional variables and the form of the relation. Otherwise a missing variable or a dimensional coefficient can change the result. The following inference is conditional on a product of powers with dimensionless K.

<section class="worked-example" markdown="1">

### A period from an assumed model

**Demonstration (self-written):** Assume a pendulum period τ has form $K\ell^ag^bm^c$, with dimensionless K and no other dimensional variables. Find the powers.

Match the time dimension on the left to the mass, length and time exponents on the right. An absent dimension has exponent zero.

$$\begin{aligned}T&=L^a(LT^{-2})^bM^c\\&=M^cL^{a+b}T^{-2b},\\c&=0,\\a+b&=0,\\-2b&=1.\end{aligned}$$

The time equation fixes b first; the length equation then fixes a. The mass exponent vanishes.

$$\begin{aligned}a&=\tfrac12,\quad b=-\tfrac12,\quad c=0,\\\tau&=K\sqrt{\ell/g}.\end{aligned}$$

Check: $[\ell/g]=T^2$, so the square root supplies time. Within this model, changing mass alone cannot change the period. Positive length and g are assumed. K remains undetermined: it could depend on a dimensionless amplitude. A small-amplitude pendulum theory supplies a particular K; dimensional balance does not establish that approximation.

</section>

### What a successful check leaves open {#model-limits}

Matching M, L and T can reject an inconsistent expression under its stated definitions. It cannot select between all consistent laws, find a pure numerical multiplier or prove that a variable list is complete. It also cannot distinguish work from torque merely because both have dimensions of force times length. If an exponent system is inconsistent, the assumed form or variable list fails; a pure numerical multiplier cannot repair missing dimensions.

## 3. Build and test your own expressions {#practice}

<section class="lesson-check" markdown="1">

### Find an unknown coefficient {#scaffold-G}

**Scaffold (self-written):** If a gravitational force is modelled as $F=Gm_1m_2/r^2$, derive dimensions and SI units of G.

<details markdown="1"><summary>Hint</summary>

Rearrange for G before inserting dimensions. Both masses contribute a factor M.

</details>

<details markdown="1"><summary>Solution and repair</summary>

$$\begin{aligned}{}[G]&=\frac{[F]L^2}{M^2}\\&=M^{-1}L^3T^{-2},\\\text{SI unit}&:\ \mathrm{m^3\,kg^{-1}\,s^{-2}}.\end{aligned}$$

Multiplying this by two masses and dividing by r² returns force dimensions. If you treated G as a pure number, return to [units](#units), then try [the coefficient retry](#retry-coefficient).

</details>

</section>

<section class="lesson-check" markdown="1">

### Compare two proposals {#practice-1}

**Independent task (self-written):** In a linear resistance model $F=kv$, find the dimensions and SI units of k. A competing model is $F=C\rho A v^2$, where A is area and C is dimensionless. Check it, predict the force factor when v doubles with other variables fixed, and explain why the check cannot select the true model. Is $F=kv+1$ dimensionally valid if 1 is a pure number?

<details markdown="1"><summary>Hint</summary>

Divide to obtain k; multiply to check the competing model. Separate scaling within a model from evidence for that model.

</details>

<details markdown="1"><summary>Solution and repair</summary>

$$\begin{aligned}{}[k]&=\frac{MLT^{-2}}{LT^{-1}}=MT^{-1},\\\text{SI unit}&:\ \mathrm{kg\,s^{-1}},\\{}[C\rho Av^2]&=(ML^{-3})(L^2)(L^2T^{-2})\\&=MLT^{-2}.\end{aligned}$$

The quadratic proposal predicts a factor of 4; the linear proposal predicts 2. Both pass dimensions, so their regimes and observations must decide applicability. A pure 1 cannot be added to a force; a dimensional force constant would be a different statement. If you claimed consistency proves truth, reread [the limits](#model-limits), then attempt [later review](#later-review) after the next lesson.

</details>

</section>

<section class="lesson-check" markdown="1">

### A wave model {#practice-2}

**Independent task (self-written):** A string has tension S (a force) and linear density μ (mass per length). Assume its wave speed is $c=KS^a\mu^b$, with dimensionless K and no other dimensional variables. Derive a and b, state the SI units of μ, and explain what remains undetermined.

<details markdown="1"><summary>Hint</summary>

Derive the dimensions of linear density from its definition. Match M, L and T separately.

</details>

<details markdown="1"><summary>Solution and repair</summary>

$$\begin{aligned}{}[\mu]&=ML^{-1},\\\text{SI unit}&:\ \mathrm{kg\,m^{-1}},\\LT^{-1}&=M^{a+b}L^{a-b}T^{-2a},\\a+b&=0,\\a-b&=1,\\-2a&=-1,\\a&=\tfrac12,\quad b=-\tfrac12,\\c&=K\sqrt{S/\mu}.\end{aligned}$$

For positive tension and linear density, the ratio under the root has speed-squared dimensions. K and the physical validity of the assumed variable list remain open. If you balanced only time, check all three equations, return to [the period example](#demonstration), then solve [the timescale retry](#retry-timescale) without help.

</details>

</section>

<section class="lesson-check" markdown="1">

### Assess an assumption {#practice-3}

**Independent task (self-written):** A proposed timescale uses only mass m and length ℓ: $\tau=Km^a\ell^b$, with dimensionless K. Can any real exponents a and b make it dimensionally consistent? Justify your answer for all a and b.

<details markdown="1"><summary>Hint</summary>

Which time exponent can the right side have, regardless of a and b?

</details>

<details markdown="1"><summary>Solution and repair</summary>

$$T=M^aL^bT^0.$$

Equality would require the time exponents 1 and 0 to agree, which is impossible for every a and b. A pure K cannot help. This rules out the stated model, not the existence of every possible timescale. A missing variable or dimensional coefficient could change it. Repair at [model limits](#model-limits), then try [another variable list](#retry-missing-variable).

</details>

</section>

## 4. Repair a specific difficulty {#retry}

Choose the retry that matches the error, cover the earlier solution and write a new chain of reasoning. Correcting a copied exponent is not yet an independent check.

<section class="lesson-check" markdown="1">

### A new timescale {#retry-timescale}

**Retry (self-written):** A timescale is assumed to depend only on a length ℓ and a speed v through $K\ell^av^b$. Find a,b and say whether K is determined.

<details markdown="1"><summary>Hint</summary>

Include the time exponent carried by speed.

</details>

<details markdown="1"><summary>Solution and repair</summary>

$$\begin{aligned}T&=L^{a+b}T^{-b},\\a+b&=0,\quad -b=1,\\a&=1,\quad b=-1,\\\tau&=K\ell/v.\end{aligned}$$

K is undetermined. For positive length and speed the units are seconds. If this still fails, write the two exponents as separate equations before revisiting [the period example](#demonstration).

</details>

</section>

<section class="lesson-check" markdown="1">

### A coefficient claim {#retry-coefficient}

**Retry (self-written):** A resistance force is written $R=D\rho v^2$. Density ρ and speed v have their usual meanings. Determine the dimensions and SI units required for D. Assess the claim that D is dimensionless.

<details markdown="1"><summary>Hint</summary>

Compare force with density times speed squared.

</details>

<details markdown="1"><summary>Solution and repair</summary>

$$\begin{aligned}{}[\rho v^2]&=ML^{-1}T^{-2},\\{}[D]&=\frac{MLT^{-2}}{ML^{-1}T^{-2}}=L^2,\\\text{SI unit}&:\ \mathrm{m^2}.\end{aligned}$$

D needs area dimensions. Calling it dimensionless makes the stated expression inconsistent as a force. If you obtained dimension 1, compare pressure and force in [the worked example](#pressure).

</details>

</section>

<section class="lesson-check" markdown="1">

### A different variable list {#retry-missing-variable}

**Retry (self-written):** A timescale is proposed as $\tau=Km^aF^b$, using only mass m and force F, with dimensionless K. Decide whether it can work and prove your conclusion by matching exponents.

<details markdown="1"><summary>Hint</summary>

The length exponent and time exponent both depend on b. Can both required values hold?

</details>

<details markdown="1"><summary>Solution and repair</summary>

$$\begin{aligned}T&=M^{a+b}L^bT^{-2b},\\b&=0\quad\text{from L},\\-2b&=1\quad\text{from T}.\end{aligned}$$

The last two conditions contradict each other, so no real a,b work. A time factor existing somewhere on the right is not enough: all dimensions must match simultaneously. If you accepted the model using time alone, repeat [practice 3](#practice-3).

</details>

</section>

## Later review {#later-review}

Return here after learning [impulse and collisions](/alevel/as-further-mathematics/impulse-and-collisions/). Hide both pages’ examples and choose your own route through the problem.

<section class="lesson-check" markdown="1">

### A proposed shortcut {#review-task}

**Later review (self-written):** A net force is $F(t)=At+Bt^2$ for $0\le t\le\Delta t$. Determine the dimensions and SI units of A and B. A student proposes $J=\Delta t\,F(\Delta t)$ for the impulse. Is this dimensionally consistent, and is it always correct? Obtain the impulse and test the claim when A is 2 N s⁻¹, B is zero and the duration is 3 s.

<details markdown="1"><summary>Hint</summary>

Each force term must have force dimensions. For the second claim, distinguish an endpoint force from the force throughout the interval.

</details>

<details markdown="1"><summary>Solution and repair</summary>

$$\begin{aligned}{}[A]&=MLT^{-3},\quad\text{SI}:\ \mathrm{N\,s^{-1}},\\{}[B]&=MLT^{-4},\quad\text{SI}:\ \mathrm{N\,s^{-2}},\\J&=\int_0^{\Delta t}(At+Bt^2)\,dt\\&=\tfrac12 A(\Delta t)^2+\tfrac13 B(\Delta t)^3.\end{aligned}$$

The proposed product has impulse dimensions, but replaces a varying force by its final value. Here it gives 18 N s; integration gives 9 N s. The counterexample disproves “always”, while both expressions pass the dimensional check. A constant force would justify the rectangle formula.

If the units failed, repair at [units](#units) and [the coefficient retry](#retry-coefficient). If you inferred truth from units, revisit [model limits](#model-limits); for the impulse calculation use [the next lesson’s integral](/alevel/as-further-mathematics/impulse-and-collisions/#impulse).

</details>

</section>

## Next step {#next-step}

Explain aloud why a correct dimension cannot certify a law. Then move to [impulse and collisions](/alevel/as-further-mathematics/impulse-and-collisions/), where force, time and momentum must agree in dimensions **and** in direction and system choice. Record which retries needed a hint, and return for the review after that lesson.

## Sources and scope {#sources}

OxfordAQA 9665 v5.2, FM1.2; no migration to 9765. The paired official material was actually read to inform the required derivation and checks. The questions above are self-written, not official questions or mark schemes.

- [Current 9665 qualification page](https://www.oxfordaqa.com/qualification/international-as-and-a-level-further-mathematics-9665/) and [9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FM1.2.
- FM02 June 2024 Q10(a)(b): [QP p.19](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf#page=19), [Final MS p.17](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf#page=17).

[Previous](/alevel/as-further-mathematics/relative-motion/) · [Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/impulse-and-collisions/)
