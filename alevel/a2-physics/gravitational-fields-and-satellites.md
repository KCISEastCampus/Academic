---
title: Gravitational Fields and Satellites
layout: subjects
mathjax: true
grade: a2
subject: a2-physics
permalink: /alevel/a2-physics/gravitational-fields-and-satellites/
toc_headings: h2
study_page: true
---

[A2 Physics](/alevel/a2-physics/) · PH03 · 3.7.1–3.7.4 Gravitational fields and satellites

Describe gravitational fields, calculate changes in potential energy, read field graphs, and explain the speed, period and energy of a satellite.

- **Learning:** start with [force and field strength](#force-and-field-strength), then connect [potential](#potential-and-potential-energy) to [circular orbits](#circular-orbits).
- **Homework help:** draw the forces, measure distance from the planet's centre, and distinguish field strength, potential and potential energy.
- **Revision:** try [practice](#practice) with the hints and solutions closed.

**Before you start:** review [Circular Motion](/alevel/a2-physics/circular-motion/) and conservation of energy in [AS Physics](/alevel/as-physics/). Use $G=6.67\times10^{-11}\,\mathrm{N\,m^2\,kg^{-2}}$, Earth's mass $M=5.97\times10^{24}\,\mathrm{kg}$ and Earth's radius $R=6.37\times10^6\,\mathrm m$ unless stated otherwise. Convert kilometres to metres and keep extra digits until the final answer.

Worked examples and Questions 1–6 are self-written. Questions 7–8 are adapted from OxfordAQA PH03 papers. Their wording is simplified and no official marks are assigned. Diagrams are not to scale.

## Force and Field Strength

**Think first:** a satellite is $400\,\mathrm{km}$ above Earth. Should you put $400\,\mathrm{km}$ into Newton's law of gravitation?

<details markdown="1">
<summary>Check your explanation</summary>

No. The distance is measured from Earth's centre. Use $r=R+h$, where $R$ is Earth's radius and $h$ is the height above its surface.

</details>

**Newton's law of gravitation:** every particle attracts every other particle. The force is directly proportional to the product of their masses and inversely proportional to the square of their separation:

$$\boxed{F=\frac{GMm}{r^2}}.$$

This gives the **magnitude** of the force. Its direction is towards the other mass. The two objects exert equal and opposite forces on each other, even if their masses are very different. Their accelerations need not be equal.

For point masses, $r$ is their separation. For a spherically symmetric planet and a small object outside it, use the distance from the planet's centre. These outside-field equations do not describe positions inside the planet.

**Gravitational field strength** at a point is the gravitational force per unit mass on a small test mass at that point:

$$\boxed{g=\frac{F}{m}=\frac{GM}{r^2}}.$$

Field strength is a **vector**. The expression $GM/r^2$ gives its magnitude; the field points towards the source mass. Its units are $\mathrm{N\,kg^{-1}}$, equivalent to $\mathrm{m\,s^{-2}}$. A freely falling object has acceleration equal to the resultant gravitational field strength if no other forces act.

Do not confuse $G$, the universal gravitational constant, with $g$, which depends on position. Doubling $r$ reduces the field strength to one quarter. Changing the test mass changes its force, but does not change the field strength.

<img src="/assets/img/physics-gravity-field.svg" alt="Radial field lines point towards a spherical planet and cross circular equipotentials at right angles. A second diagram distinguishes planet radius R, height h and distance r from the centre." width="400" height="640" data-lazy-ignore="true">

### Example 1: field strength above Earth

A satellite has mass $500\,\mathrm{kg}$ and is $400\,\mathrm{km}$ above Earth's surface. Find the field strength and gravitational force there.

First find the distance from Earth's centre:

$$r=R+h=6.37\times10^6+4.00\times10^5.$$

$$r=6.77\times10^6\,\mathrm m.$$

$$g=\frac{GM}{r^2}\approx\boxed{8.69\,\mathrm{N\,kg^{-1}}}.$$

$$F=mg\approx\boxed{4.34\times10^3\,\mathrm N}.$$

Both the field and force point towards Earth's centre. The satellite still has a substantial gravitational force on it. An astronaut may feel weightless because the astronaut and spacecraft fall together, so there is no supporting contact force in this ideal model.

**Common mistake:** saying that gravity is zero in orbit, or using the surface value of $g$ at every height.

## Potential and Potential Energy

**Gravitational potential** $V$ at a point is the work done per unit mass by an external agent in moving a small test mass from infinity to that point without changing its kinetic energy. We choose $V=0$ at infinity.

For a point mass, or outside a spherically symmetric planet:

$$\boxed{V=-\frac{GM}{r}}.$$

Potential is a **scalar**, measured in $\mathrm{J\,kg^{-1}}$. It is negative at a finite distance from an isolated positive mass: gravity attracts the test mass, so positive work is needed to take it from that point to infinity. Equivalently, the external agent does negative work when bringing it slowly from infinity.

**Gravitational potential energy** is the energy due to position in the gravitational field. For a test mass $m$:

$$\boxed{E_p=mV=-\frac{GMm}{r}}.$$

Potential describes the field at a point; potential energy also depends on the test mass. Do not give potential in joules or potential energy in $\mathrm{J\,kg^{-1}}$.

For a move from point 1 to point 2:

$$\boxed{\Delta E_p=m(V_2-V_1)}.$$

If kinetic energy is unchanged, the work done by an external agent is $\Delta E_p$. The work done **by gravity** is $-\Delta E_p$. If speed changes, include $\Delta E_k$ as well: external work equals $\Delta E_k+\Delta E_p$, assuming no other energy transfers.

Moving outwards from an isolated planet makes $V$ and $E_p$ **less negative**, so both increase. Close to Earth's surface, where $g$ is approximately constant, $\Delta E_p\approx mg\Delta h$. For a large change in height, use $m\Delta V$.

### Example 2: lifting a payload

A $500\,\mathrm{kg}$ payload moves from Earth's surface to a height of $400\,\mathrm{km}$, with no change in kinetic energy. Ignore Earth's rotation and air resistance. Find the work done by an external agent.

$$V_1=-\frac{GM}{R}\approx-6.25\times10^7\,\mathrm{J\,kg^{-1}}.$$

$$V_2=-\frac{GM}{R+h}\approx-5.88\times10^7\,\mathrm{J\,kg^{-1}}.$$

Use the unrounded values to find the difference:

$$W_{\text{external}}=\Delta E_p.$$

$$\Delta E_p=GMm\left(\frac{1}{R}-\frac{1}{R+h}\right).$$

$$\boxed{W_{\text{external}}=1.85\times10^9\,\mathrm J}.$$

Gravity does $-1.85\times10^9\,\mathrm J$ of work. This calculation does not include giving the payload orbital speed, so it is not the full energy needed to place it in orbit.

**Check:** potential increases from a more negative value to a less negative value. The required external work is positive.

## Graphs, Equipotentials and Combined Fields

Outside an isolated spherical planet, the **magnitude** of $g$ follows $1/r^2$ and tends to zero as $r$ increases. Potential follows $-1/r$: its graph lies below zero and rises towards zero.

<img src="/assets/img/physics-gravity-graphs.svg" alt="Three graphs outside a planet: field strength magnitude falls as inverse square distance; negative potential rises towards zero; circular orbit kinetic energy is positive while potential and total energies are negative." width="400" height="720" data-lazy-ignore="true">

The field is the **negative potential gradient**. If outwards is positive, the radial component is:

$$\boxed{g_r=-\frac{\mathrm dV}{\mathrm dr}}.$$

Use the gradient of a **tangent** at the chosen point on a curved graph. A ratio $V/r$ is not the gradient. Since $V$ increases outwards, its gradient is positive and $g_r$ is negative: the field points inwards. Its magnitude is $GM/r^2$.

On a potential-energy graph for a fixed test mass:

$$F_r=-\frac{\mathrm dE_p}{\mathrm dr},\qquad g_r=\frac{F_r}{m}.$$

The area under a graph of field-strength magnitude against $r$, between two radii, gives the increase in potential when moving outwards. Multiply by the test mass for the increase in potential energy.

An **equipotential** is a surface of constant potential. Moving along it changes neither potential nor potential energy, so gravity does no work. Field lines cross equipotentials at right angles. Around an isolated spherical planet, equipotentials are concentric spheres, shown as circles in a cross-section. For equal changes in potential, closer spacing means a stronger field. Near Earth's surface over a small region, the field is approximately uniform and equipotentials are approximately horizontal planes.

### Example 3: reading a potential gradient

At a point on a $V$–$r$ graph, a tangent rises by $1.0\times10^7\,\mathrm{J\,kg^{-1}}$ over an outward distance of $2.0\times10^6\,\mathrm m$. Find the field strength there.

$$\frac{\Delta V}{\Delta r}=\frac{1.0\times10^7}{2.0\times10^6}=5.0\,\mathrm{N\,kg^{-1}}.$$

The field strength is $\boxed{5.0\,\mathrm{N\,kg^{-1}}}$ **inwards**. With outwards positive, $g_r=-5.0\,\mathrm{N\,kg^{-1}}$. The two points used for the calculation must lie on the tangent, not on widely separated parts of the curve.

### More than one source mass

Add field strengths as **vectors**, taking account of direction. Add potentials as **scalars**, keeping their signs.

Between two isolated masses, their fields point in opposite directions. There is a point where their magnitudes are equal and the resultant field is zero. For unequal masses, this point is closer to the smaller mass. Both potentials are still negative, so the resultant potential is not zero.

**Check your explanation:** at a maximum of the potential along the line joining two masses, the gradient is zero. This gives zero resultant field along that line; by symmetry the transverse components are also zero there. It does not give zero potential. A test mass displaced slightly along the line accelerates away from this point: the equilibrium is unstable along the line.

## Circular Orbits

For a small satellite in a circular orbit about a spherical planet, with gravity as the only force, gravitational force provides the required centripetal force:

$$\frac{GMm}{r^2}=\frac{mv^2}{r}.$$

Cancel the satellite mass and rearrange:

$$\boxed{v=\sqrt{\frac{GM}{r}}}.$$

Use the circumference to find the period:

$$T=\frac{2\pi r}{v}.$$

$$\boxed{T=2\pi\sqrt{\frac{r^3}{GM}}}.$$

$$\boxed{T^2=\frac{4\pi^2}{GM}r^3}.$$

For circular orbits about the **same central mass**, $T^2\propto r^3$. A $T^2$–$r^3$ graph is a straight line through the origin, with gradient $4\pi^2/(GM)$. The speed and period do not depend on the satellite's mass in this model, where the satellite's mass is much smaller than the planet's.

A larger circular orbit has **lower speed** and **longer period**. Do not apply this speed formula to a powered spacecraft at any chosen position or to every point of an elliptical orbit.

### Example 4: speed and period in low orbit

Find the speed and period of the satellite $400\,\mathrm{km}$ above Earth from Example 1.

$$v=\sqrt{\frac{GM}{6.77\times10^6}}.$$

$$\boxed{v=7.67\times10^3\,\mathrm{m\,s^{-1}}}.$$

$$T=\frac{2\pi(6.77\times10^6)}{v}.$$

$$\boxed{T=5.55\times10^3\,\mathrm s\approx92.4\,\mathrm{min}}.$$

**Check:** $v^2/r=8.69\,\mathrm{m\,s^{-2}}$, the field strength found in Example 1. Gravity is the inward force; do not add a second force labelled “centripetal force”.

## Orbital Energy

For the same ideal circular-orbit model:

$$E_k=\frac12mv^2=\frac{GMm}{2r}.$$

$$E_p=-\frac{GMm}{r}.$$

$$\boxed{E_{\text{total}}=E_k+E_p=-\frac{GMm}{2r}}.$$

Kinetic energy is positive, potential energy is negative, and the total energy is negative. The potential-energy magnitude is twice the kinetic energy. A negative total energy means the satellite cannot reach infinity without gaining energy, in this isolated system.

When comparing two circular orbits, increasing $r$ decreases $E_k$ but increases $E_p$ by a larger amount. The total energy therefore **increases**, becoming less negative. Energy must be supplied to reach the higher circular orbit, even though its final speed is lower. The transfer path between them is not described by the circular-orbit speed formula at every point.

### Example 5: moving to a higher circular orbit

A $500\,\mathrm{kg}$ satellite moves from a circular orbit $400\,\mathrm{km}$ above Earth to one $800\,\mathrm{km}$ above Earth. Find its net gain in mechanical energy, ignoring losses.

$$r_1=6.77\times10^6\,\mathrm m.$$

$$r_2=7.17\times10^6\,\mathrm m.$$

$$\Delta E_{\text{total}}=\frac{GMm}{2}\left(\frac{1}{r_1}-\frac{1}{r_2}\right).$$

$$\boxed{\Delta E_{\text{total}}=8.20\times10^8\,\mathrm J}.$$

The change is positive. The increase in potential energy is $1.64\times10^9\,\mathrm J$, while kinetic energy decreases by $8.20\times10^8\,\mathrm J$. This is the net mechanical energy gain of the satellite, not the chemical energy needed by a real rocket or its fuel use.

<details markdown="1">
<summary>Energy extension: escape speed</summary>

For an object launched from distance $r$ in an isolated, non-rotating planet's field, with no further propulsion or resistance, the limiting escape condition is zero total mechanical energy. Speed tends to zero at infinity:

$$\frac12mv_{\text{escape}}^2-\frac{GMm}{r}=0.$$

$$v_{\text{escape}}=\sqrt{\frac{2GM}{r}}.$$

This is $\sqrt2$ times the circular-orbit speed at the same radius. At Earth's surface, the given constants give about $11.2\,\mathrm{km\,s^{-1}}$. If another body's gravity matters, use the combined potential and the energy change for the actual path; do not use an isolated-planet formula automatically.

</details>

## Geosynchronous and Geostationary Orbits

A **geosynchronous** satellite has the same orbital period as Earth's rotation. It need not stay above one point on Earth's surface.

A **geostationary** satellite is a special geosynchronous satellite. To stay above the same surface point, it must:

- have the same period as Earth's rotation;
- have a circular orbit in the equatorial plane;
- travel in the same direction as Earth's rotation.

A ground antenna can point in a fixed direction to communicate with it. Such satellites are useful for communications and continuous observation of the same region. They cannot be placed directly above the poles. Lower polar orbits can cover different parts of Earth as the planet rotates beneath them.

Use $T=24\,\mathrm h=86400\,\mathrm s$ when this is the period given in a question. More precisely, the relevant rotation period is Earth's sidereal day, about $86164\,\mathrm s$; do not mix these values during a calculation. See [ESA's explanation of geostationary orbits](https://www.esa.int/Enabling_Support/Space_Transportation/Types_of_orbits).

### Example 6: orbit radius and height

Using $T=86400\,\mathrm s$, find the radius and height of a geostationary orbit.

$$r^3=\frac{GMT^2}{4\pi^2}.$$

$$r=\left(\frac{GMT^2}{4\pi^2}\right)^{1/3}.$$

$$\boxed{r=4.22\times10^7\,\mathrm m}.$$

Subtract Earth's radius, using the unrounded orbit radius:

$$h=r-R\approx\boxed{3.59\times10^7\,\mathrm m}.$$

The radius is about $42200\,\mathrm{km}$, while the height is about $35900\,\mathrm{km}$. Giving the radius as the height misses the size of Earth.

## Practice

Show the equation, substitution, units and any required direction. Explain physical reasons rather than just quoting a formula.

### Question 1: changing distance and mass

At distance $r$ from an isolated point mass, a test mass $m$ experiences force magnitude $F$, field-strength magnitude $g$ and potential $V$. It is replaced by mass $2m$ at distance $2r$. Give the new force, field strength, potential and potential energy in terms of the original values.

<details markdown="1">
<summary>Hint</summary>

Force and field strength follow $1/r^2$. Potential follows $-1/r$. Which quantities also depend on the test mass?

</details>

<details markdown="1">
<summary>Solution</summary>

The new force is $F/2$, field strength is $g/4$, and potential is $V/2$. Since $V$ is negative, $V/2$ is less negative than $V$. The new potential energy is $(2m)(V/2)=mV$, equal to its original value.

The source mass is unchanged. The test mass does not set the field strength or potential.

</details>

### Question 2: two attracting masses

Two small isolated masses, $4M$ and $M$, are separated by distance $d$. Find the point between them where the resultant gravitational field is zero. Is the potential there zero?

<details markdown="1">
<summary>Hint</summary>

Let $x$ be the distance from $4M$. Equate the field magnitudes, not the potentials.

</details>

<details markdown="1">
<summary>Solution</summary>

The fields point in opposite directions:

$$\frac{4GM}{x^2}=\frac{GM}{(d-x)^2}.$$

For a point between the masses, both distances are positive, so $x=2(d-x)$:

$$\boxed{x=\frac{2d}{3}}.$$

The point is $d/3$ from the smaller mass. Potentials add as scalars:

$$V=-\frac{4GM}{2d/3}-\frac{GM}{d/3}.$$

$$\boxed{V=-\frac{9GM}{d}}.$$

It is negative, even though the resultant field is zero.

</details>

### Question 3: field, potential and work

At distance $2R$ from Earth's centre, find the field strength and potential. How much external work is needed to move a $100\,\mathrm{kg}$ object slowly from there to infinity, without changing its kinetic energy?

<details markdown="1">
<summary>Hint</summary>

Use $r=2R$ in each equation. The final potential is zero.

</details>

<details markdown="1">
<summary>Solution</summary>

$$g=\frac{GM}{(2R)^2}\approx\boxed{2.45\,\mathrm{N\,kg^{-1}}}.$$

The field points towards Earth's centre.

$$V=-\frac{GM}{2R}\approx\boxed{-3.13\times10^7\,\mathrm{J\,kg^{-1}}}.$$

$$W_{\text{external}}=100(0-V).$$

$$\boxed{W_{\text{external}}=3.13\times10^9\,\mathrm J}.$$

This is positive because work is done against gravity. Do not put a negative sign on the energy that must be supplied.

</details>

### Question 4: potential-energy gradient

A potential-energy graph for a $37\,\mathrm{kg}$ rock has a tangent gradient of $+1.4\,\mathrm{J\,m^{-1}}$ at a point. The positive direction is along increasing distance on the horizontal axis. Find the force component and the field-strength component. Explain what happens at a maximum of this graph along the line joining two source masses.

<details markdown="1">
<summary>Hint</summary>

First use the negative gradient to obtain force. Divide by the rock's mass to obtain field strength.

</details>

<details markdown="1">
<summary>Solution</summary>

$$F=-1.4\,\mathrm N.$$

$$g=\frac{-1.4}{37}\approx\boxed{-0.038\,\mathrm{N\,kg^{-1}}}.$$

The force and field point in the negative direction. Dividing the potential energy itself by mass gives potential, not field strength.

At a maximum, the tangent is horizontal. The two attractions balance and the resultant field is zero. The potential energy can still be negative. A small displacement along the line takes the rock away from this unstable equilibrium.

</details>

### Question 5: comparing circular orbits

Two satellites of the same mass orbit the same isolated planet in circular orbits. Satellite B has twice the orbit radius of satellite A. Give the ratios $v_B/v_A$, $T_B/T_A$, $E_{kB}/E_{kA}$ and $E_{\text{total},B}/E_{\text{total},A}$. Does B have greater or smaller total energy?

<details markdown="1">
<summary>Hint</summary>

Use the powers of $r$ in the circular-orbit equations. Remember that total energy is negative.

</details>

<details markdown="1">
<summary>Solution</summary>

$$\frac{v_B}{v_A}=\frac{1}{\sqrt2},\qquad\frac{T_B}{T_A}=2^{3/2}.$$

$$\frac{E_{kB}}{E_{kA}}=\frac12,\qquad\frac{E_{\text{total},B}}{E_{\text{total},A}}=\frac12.$$

B has **greater** total energy: half a negative value is less negative. Energy must be supplied to move from A's circular orbit to B's circular orbit, despite the lower final speed.

</details>

### Question 6: a synchronous satellite

A satellite has the same period as Earth's rotation, but its circular orbit is inclined to the equator. Is it geosynchronous? Is it geostationary? Explain why a fixed ground antenna cannot always point at it.

<details markdown="1">
<summary>Hint</summary>

Matching the period is one condition. What keeps a satellite above the same surface point?

</details>

<details markdown="1">
<summary>Solution</summary>

It is geosynchronous because its period matches Earth's rotation. It is not geostationary because its orbit is not in the equatorial plane. Its position north or south of the equator changes during the orbit, so its direction from a ground station changes.

</details>

### Question 7: when Earth's field is not enough

**Adapted from OxfordAQA PH03, January 2020, Question 4.**

The Moon's orbital period is $27.3$ days. A satellite at distance $4.5\times10^5\,\mathrm{km}$ from Earth's centre has the same angular speed. Calculate its angular speed, Earth's field strength there, and the centripetal acceleration required. Explain why Earth's gravity alone cannot give the stated circular motion.

<details markdown="1">
<summary>Hint</summary>

Convert days to seconds and kilometres to metres. Compare $GM/r^2$ with $\omega^2r$.

</details>

<details markdown="1">
<summary>Solution</summary>

$$T=27.3(86400)=2.35872\times10^6\,\mathrm s.$$

$$\omega=\frac{2\pi}{T}\approx\boxed{2.66\times10^{-6}\,\mathrm{rad\,s^{-1}}}.$$

$$r=4.5\times10^8\,\mathrm m.$$

$$g_{\text{Earth}}=\frac{GM}{r^2}.$$

$$\boxed{g_{\text{Earth}}=2.0\times10^{-3}\,\mathrm{N\,kg^{-1}}}.$$

$$a=\omega^2r\approx\boxed{3.2\times10^{-3}\,\mathrm{m\,s^{-2}}}.$$

The required inward acceleration is greater than Earth's field strength. Earth's gravity alone is insufficient. In the original Earth–Moon system, the Moon also contributes an inward gravitational force when the satellite is beyond the Moon along the line joining their centres. Use the **resultant** field; do not apply the Earth-only circular-orbit formula without checking its assumptions.

</details>

### Question 8: an energy barrier between Moon and Earth

**Adapted from OxfordAQA PH03, June 2024, Question 3.** The maximum energy is supplied here instead of being read from the paper's graph.

A $37\,\mathrm{kg}$ rock moves from the Moon towards Earth along the line joining their centres. Its combined gravitational potential energy is $-1.4\times10^8\,\mathrm J$ at the launch point and reaches a maximum of $-4.8\times10^7\,\mathrm J$ between the bodies. Treat the bodies as fixed and ignore other forces. Explain why the energy is negative and why there is a maximum. Find the limiting minimum launch speed needed to reach the maximum.

<details markdown="1">
<summary>Hint</summary>

Use the increase in the combined potential energy. The limiting case has zero kinetic energy at the maximum.

</details>

<details markdown="1">
<summary>Solution</summary>

Potential energy is zero at infinity. The gravitational attractions mean positive work is needed to remove the rock to infinity, so its energy at the finite positions is negative.

Moving away from the Moon increases the contribution to potential energy from the Moon. Moving towards Earth decreases the contribution from Earth. At the maximum, the two gravitational forces balance and the resultant field is zero.

$$\begin{aligned}
\Delta E_p&=(-4.8\times10^7)\\
&\quad-(-1.4\times10^8).
\end{aligned}$$

$$\Delta E_p=9.2\times10^7\,\mathrm J.$$

$$\frac12mv^2=\Delta E_p.$$

$$v=\sqrt{\frac{2(9.2\times10^7)}{37}}.$$

$$\boxed{v=2.2\times10^3\,\mathrm{m\,s^{-1}}}.$$

A speed slightly above this limiting value lets the rock pass the maximum in this ideal model. Beyond it, Earth's attraction is stronger and the rock speeds up towards Earth. The Moon's isolated escape-speed formula is not appropriate because Earth's gravity also contributes.

</details>

## Quick Reference

| Quantity | Equation and condition |
|---|---|
| Gravitational force magnitude | $F=\dfrac{GMm}{r^2}$; point masses or the outside field of a spherical planet |
| Field-strength magnitude | $g=\dfrac{GM}{r^2}$; directed towards the source |
| Gravitational potential | $V=-\dfrac{GM}{r}$; zero at infinity |
| Potential energy | $E_p=mV$; includes the test mass |
| Change in potential energy | $\Delta E_p=m\Delta V$ |
| Radial field component | $g_r=-\dfrac{\mathrm dV}{\mathrm dr}$; outwards positive |
| Circular-orbit speed | $v=\sqrt{\dfrac{GM}{r}}$; gravity alone |
| Circular-orbit period | $T=2\pi\sqrt{\dfrac{r^3}{GM}}$ |
| Circular-orbit kinetic energy | $E_k=\dfrac{GMm}{2r}$ |
| Circular-orbit total energy | $E_{\text{total}}=-\dfrac{GMm}{2r}$ |
| Orbit radius and height | $r=R+h$; measure $r$ from the centre |

Before moving on, check that you can distinguish $g$, $V$ and $E_p$, explain the negative potential, read a tangent gradient, derive the orbit equations, and explain why a higher circular orbit needs more energy despite its lower speed.

[Next lesson: Electric Fields](/alevel/a2-physics/electric-fields/) · [Previous lesson: Simple Harmonic Motion](/alevel/a2-physics/simple-harmonic-motion/) · [PH03 course index](/alevel/a2-physics/) · [PH03 reference notes](/alevel/a2-physics/quick-reference/)

<details markdown="1">
<summary>Sources and exam wording</summary>

This lesson follows Sections 3.7.1–3.7.4 of the [OxfordAQA Physics specification](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-physics-specification.pdf). It includes potential gradients, field and potential graphs, circular-orbit energy and the significance of geosynchronous orbits.

Textbook support: Jim Breithaupt, *Oxford International AQA Examinations: International A Level Physics*, Chapter 17, printed pp. 297–316. Definitions and symbols follow the textbook and specification, with explicit work and direction conventions where needed. The teacher's AS handouts inform the use of short explanations, diagrams, graph reading and staged exercises.

Questions 7–8 are adapted from OxfordAQA PH03 January 2020 Question 4 and June 2024 Question 3. The official mark schemes were consulted before drafting. The energy maximum in Question 8 is a supplied representative value from the mark scheme's accepted range, not a new reading of the original diagram. All answers were derived and checked independently rather than copied from textbook answer lists.

</details>
