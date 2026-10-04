---
title: Electric Fields
layout: subjects
mathjax: true
grade: a2
subject: a2-physics
permalink: /alevel/a2-physics/electric-fields/
toc_headings: h2
study_page: true
---

[A2 Physics](/alevel/a2-physics/) · PH03 · 3.8.1–3.8.3 Electric fields

Calculate electric forces, field strength and potential, combine fields, and explain the motion of a charged particle between parallel plates.

- **Learning:** start with [force and field strength](#force-and-field-strength), then distinguish [potential and potential energy](#potential-and-potential-energy).
- **Homework help:** draw field and force arrows separately, keep the signs of charges in energy calculations, and convert all distances to metres.
- **Revision:** try [practice](#practice) with the hints and solutions closed.

**Before you start:** review [Gravitational Fields and Satellites](/alevel/a2-physics/gravitational-fields-and-satellites/) and AS equations for constant acceleration. Use $\varepsilon_0=8.85\times10^{-12}\,\mathrm{F\,m^{-1}}$, $k=1/(4\pi\varepsilon_0)\approx8.99\times10^9\,\mathrm{N\,m^2\,C^{-2}}$, $e=1.60\times10^{-19}\,\mathrm C$, electron mass $m_e=9.11\times10^{-31}\,\mathrm{kg}$ and $g=9.81\,\mathrm{m\,s^{-2}}$ unless stated otherwise. Here $Q$ denotes a source charge and $q$ a small test charge. Keep extra digits until the final answer.

Worked examples and Questions 1–5 are self-written. Questions 6–8 are adapted from OxfordAQA PH03 papers. Their wording is simplified and no official marks are assigned. Diagrams are not to scale. Capacitance is covered in the next lesson.

## Force and Field Strength

**Think first:** a positive charge and an electron are placed at the same point in an electric field. Do their forces point in the same direction?

<details markdown="1">
<summary>Check your explanation</summary>

No. Field direction is defined by the force on a positive test charge. The electron has negative charge, so its force is opposite to the field direction.

</details>

**Electric field strength** at a point is the force per unit positive test charge placed at that point. It is a vector, measured in $\mathrm{N\,C^{-1}}$ or $\mathrm{V\,m^{-1}}$.

For any small test charge, the force is:

$$\boxed{\mathbf F=q\mathbf E}.$$

The force is in the field direction for $q>0$ and opposite to it for $q<0$. Its magnitude is $|q|E$, where $E$ is the field-strength magnitude. The test charge must be small enough not to change the source charge distribution significantly.

**Coulomb's law** gives the force between two point charges in a vacuum. Its magnitude is:

$$\boxed{F=\frac{|Q_1Q_2|}{4\pi\varepsilon_0r^2}=\frac{k|Q_1Q_2|}{r^2}}.$$

Here $r$ is the separation of the charges. Like charges repel; unlike charges attract. Each charge experiences a force of the same magnitude in the opposite direction, regardless of the sizes of the charges. Air can usually be treated as a vacuum for these calculations.

**Field lines** show the direction of force on a positive test charge. The tangent to a line gives the field direction. Lines point away from positive charges and towards negative charges; they do not cross. Closer line spacing indicates a stronger field within a consistently drawn field diagram. Around an isolated point charge, the lines are radial. Between broad oppositely charged parallel plates, they are approximately parallel and equally spaced away from the edges.

<img src="/assets/img/physics-electric-fields.svg" alt="Field lines between equal opposite charges run from positive to negative. Around two equal positive charges, lines curve apart and the field is zero at the midpoint." width="400" height="560" data-lazy-ignore="true">

### Example 1: force between point charges

Point charges $+3.0\,\mathrm{nC}$ and $-8.0\,\mathrm{nC}$ are separated by $60\,\mathrm{mm}$. Find the force magnitude and state whether it is attractive or repulsive.

$$r=0.060\,\mathrm m.$$

$$F=\frac{k(3.0\times10^{-9})(8.0\times10^{-9})}{(0.060)^2}.$$

$$\boxed{F=6.0\times10^{-5}\,\mathrm N}.$$

The charges are opposite, so the force is **attractive**. Each charge is pulled towards the other. We used charge magnitudes for this calculation and stated the direction separately.

**Common mistake:** reporting a negative force magnitude without defining an axis. A magnitude is non-negative; the charge signs determine attraction or repulsion.

## Potential and Potential Energy

**Absolute electric potential** $V$ at a point is the work done per unit positive charge by an external agent in moving a small positive test charge from infinity to that point without changing its kinetic energy. We choose $V=0$ at infinity.

Potential is a **scalar**. Its unit is the volt, with $1\,\mathrm V=1\,\mathrm{J\,C^{-1}}$. Electric potential difference is the change in potential between two points, $\Delta V=V_2-V_1$.

For an isolated point charge:

$$\boxed{V=\frac{Q}{4\pi\varepsilon_0r}=\frac{kQ}{r}}.$$

Keep the sign of the source charge: $V$ is positive for a positive source and negative for a negative source. Potential does not have a direction. A negative potential is a value below the chosen zero, not an arrow towards the source.

The radial field-strength component, with outwards positive, is:

$$E_r=\frac{kQ}{r^2}.$$

The field-strength **magnitude** is $k|Q|/r^2$. For a negative source, $E_r<0$ means the field points inwards.

These point-charge equations also describe the outside field of a spherically symmetric charged sphere, with $r$ measured from its centre. Do not apply them inside a conducting sphere. In electrostatic equilibrium, the field inside the conductor is zero and its potential is constant, but not necessarily zero. Nearby charges can change a conductor's surface charge distribution and the shape of its outside field.

For a small test charge $q$, the **electric potential energy** is:

$$\boxed{E_p=qV}.$$

Keep the sign of $q$ as well as $V$. An electron at positive potential has negative potential energy. For two isolated point charges, the interaction potential energy is $kQ_1Q_2/r$; it is positive for like charges and negative for unlike charges, with zero at infinite separation.

For a move between two points:

$$\boxed{\Delta E_p=q(V_2-V_1)=q\Delta V}.$$

The work done **by the electric field** is $-\Delta E_p$. External work equals $\Delta E_p$ when kinetic energy is unchanged. If only the electric force does work:

$$\boxed{\Delta E_k=-q\Delta V}.$$

A positive charge released from rest accelerates towards lower potential. A negative charge accelerates towards higher potential. Both gain kinetic energy and lose potential energy under the electric force alone.

### Example 2: field, potential and an electron

A point is $0.10\,\mathrm m$ from an isolated charge of $+4.0\,\mathrm{nC}$. Find the field-strength magnitude and potential there. Then find the force and potential energy of an electron at that point.

$$E=\frac{k(4.0\times10^{-9})}{(0.10)^2}.$$

$$\boxed{E=3.6\times10^3\,\mathrm{N\,C^{-1}}}.$$

The field points **away from** the positive source.

$$V=\frac{k(4.0\times10^{-9})}{0.10}\approx\boxed{+3.6\times10^2\,\mathrm V}.$$

For the electron, $q=-e$. Its force magnitude is:

$$F=eE\approx\boxed{5.8\times10^{-16}\,\mathrm N}.$$

Its force points **towards** the source, opposite to the field. Its potential energy is:

$$E_p=(-e)V\approx\boxed{-5.8\times10^{-17}\,\mathrm J}.$$

**Check:** the source sets the field and potential. The electron's charge determines its force and potential energy; it does not reverse the field itself.

## Graphs and Equipotentials

For a point charge, field-strength magnitude varies as $1/r^2$, while potential varies as $1/r$, keeping the source charge's sign. Both tend to zero at infinity. For a positive source, $V$ falls towards zero as $r$ increases; for a negative source, it rises towards zero from below.

<img src="/assets/img/physics-electric-graphs.svg" alt="Signed radial field and potential graphs for positive and negative isolated source charges. Both tend to zero at large distance; field magnitude varies as inverse square distance and potential as inverse distance." width="400" height="560" data-lazy-ignore="true">

With a chosen positive direction along coordinate $x$, the field component is the **negative potential gradient**:

$$\boxed{E_x=-\frac{\mathrm dV}{\mathrm dx}}.$$

Use the gradient of a tangent at the chosen point on a curved graph. A ratio $V/x$ is not the gradient. For a small interval in an approximately uniform field, use $E_x\approx-\Delta V/\Delta x$.

The signed area under an $E_x$–$x$ graph gives **minus** the change in potential:

$$\Delta V=-\int_{x_1}^{x_2}E_x\,\mathrm dx.$$

For a uniform field, this is $\Delta V=-E_x\Delta x$. Multiplying by $q$ gives the change in potential energy. An area under a field graph does not directly give energy without the charge factor.

An **equipotential** is a surface of constant potential. Moving a fixed charge along it changes neither potential nor potential energy, so the electric field does no work. Field lines cross equipotentials at right angles. Around an isolated point charge, equipotentials are concentric spheres, shown as circles in a cross-section. Between ideal parallel plates, they are planes parallel to the plates. For equal changes in potential, closer equipotential spacing means a stronger field.

**Common mistake:** assuming an equipotential is a region of zero field. Potential is constant along the surface, but can change in the direction perpendicular to it.

## Combining Fields and Potentials

Add field strengths as **vectors**, with directions. Add potentials as **scalars**, keeping their signs. Calculate the field first, then use $\mathbf F=q\mathbf E$ for the test charge.

At the midpoint between two equal positive charges, their fields cancel but their positive potentials add. At the midpoint between equal and opposite charges, their potentials cancel but their fields point in the same direction and add. Therefore, **zero field does not imply zero potential, and zero potential does not imply zero field**.

### Example 3: fields at right angles

Take right as $+x$ and up as $+y$. A $+2.0\,\mathrm{nC}$ source is $0.10\,\mathrm m$ to the left of point P. A $-3.0\,\mathrm{nC}$ source is $0.10\,\mathrm m$ above P. Find the resultant field and potential at P.

The positive source gives a field to the right. The negative source gives a field upwards, towards that source:

$$E_x=1.798\times10^3\,\mathrm{N\,C^{-1}}.$$

$$E_y=2.697\times10^3\,\mathrm{N\,C^{-1}}.$$

Use Pythagoras for the magnitude:

$$E=\sqrt{E_x^2+E_y^2}\approx\boxed{3.2\times10^3\,\mathrm{N\,C^{-1}}}.$$

$$\theta=\tan^{-1}\left(\frac{E_y}{E_x}\right)\approx\boxed{56^\circ}.$$

The field points $56^\circ$ above the positive $x$ direction. Add the potentials with their signs:

$$\begin{aligned}
V&=\frac{k(2.0\times10^{-9})}{0.10}\\
&\quad+\frac{k(-3.0\times10^{-9})}{0.10}.
\end{aligned}$$

$$\boxed{V=-90\,\mathrm V}.$$

The negative potential does not mean that the resultant field points downwards or left. The vector directions came from the source positions and charge signs.

## Uniform Fields Between Plates

For broad parallel plates, away from their edges, the field is approximately uniform: its magnitude and direction are constant. It points from the positive plate to the negative plate, perpendicular to them. Near the edges, the field curves and the uniform-field approximation becomes less accurate.

Let $U=V_{\text{high}}-V_{\text{low}}>0$ be the potential difference magnitude between plates separated by $d$. Then:

$$\boxed{E=\frac{U}{d}}.$$

The textbook also writes this as $E=V/d$, using $V$ for the plate potential difference magnitude. Here $U$ keeps it distinct from the potential $V$ at a point and the signed change $\Delta V$ along a particle's path.

**Derivation:** a small positive charge $q$ moves along the field from the higher-potential plate to the lower-potential plate. The field does work $Fd=qEd$. Its potential energy falls by $qU$, so $qEd=qU$ and $E=U/d$.

If $x$ increases from the high-potential plate towards the low-potential plate, the potential graph is a straight line with gradient $-U/d$. Potential falls in the field direction.

### Example 4: an electron accelerated from rest

Parallel plates are $20\,\mathrm{mm}$ apart with potential difference magnitude $250\,\mathrm V$. An electron starts from rest just inside the lower-potential plate and reaches the higher-potential plate. Ignore gravity and other energy transfers. Find the field strength, force magnitude, kinetic energy gain and final speed.

$$E=\frac{250}{0.020}=\boxed{1.25\times10^4\,\mathrm{V\,m^{-1}}}.$$

$$F=eE=\boxed{2.00\times10^{-15}\,\mathrm N}.$$

The electron's force is towards the higher-potential plate. For its motion, $\Delta V=+250\,\mathrm V$ and $q=-e$:

$$\Delta E_k=-(-e)(250).$$

$$\boxed{\Delta E_k=4.00\times10^{-17}\,\mathrm J}.$$

$$\frac12m_ev^2=eU.$$

$$v=\sqrt{\frac{2eU}{m_e}}\approx\boxed{9.37\times10^6\,\mathrm{m\,s^{-1}}}.$$

**Check:** kinetic energy increases although the electron moves to higher potential, because its charge is negative. This is a non-relativistic calculation; use it when speeds are sufficiently below the speed of light.

## Motion Across a Uniform Field

A charged particle enters the field between horizontal plates with horizontal speed $u$, initially at right angles to the field. Ignore gravity, air resistance and interactions with other particles. Choose $+y$ upwards.

- Horizontal electric force is zero, so horizontal velocity stays $u$.
- Vertical force $F_y=qE_y$ is constant, so vertical acceleration is $a_y=qE_y/m$.
- Initially $v_y=0$. Therefore $x=ut$, $y=\tfrac12a_yt^2$ and $v_y=a_yt$.

For a field region of horizontal length $L$:

$$\boxed{t=\frac{L}{u}}.$$

$$\boxed{y=\frac{qE_yL^2}{2mu^2}}.$$

Eliminating time gives $y=qE_yx^2/(2mu^2)$, so the path inside the uniform field is **parabolic**. The sign of $y$ gives the deflection direction. After leaving the field, the particle follows a straight line tangent to the path if no further force acts. Its horizontal speed remains $u$, but its total speed generally increases because it gains a vertical velocity component.

<img src="/assets/img/physics-electric-plates.svg" alt="Uniform field points down from the positive upper plate to the negative lower plate. An electron entering horizontally curves upwards towards the positive plate and leaves on a straight tangent; a positive charge is forced downwards." width="400" height="620" data-lazy-ignore="true">

### Example 5: electron deflection

An electron enters horizontally midway between plates with speed $2.0\times10^7\,\mathrm{m\,s^{-1}}$. The plates are $0.040\,\mathrm m$ long and $0.020\,\mathrm m$ apart, with potential difference magnitude $100\,\mathrm V$. The upper plate is positive. Find the deflection and direction of motion as the electron leaves the field.

The field points downwards, so $E_y=-U/d=-5.0\times10^3\,\mathrm{V\,m^{-1}}$. The negative electron accelerates upwards:

$$a_y=\frac{(-e)(-5.0\times10^3)}{m_e}.$$

$$a_y=+8.78\times10^{14}\,\mathrm{m\,s^{-2}}.$$

The crossing time depends on the horizontal velocity:

$$t=\frac{0.040}{2.0\times10^7}=2.0\times10^{-9}\,\mathrm s.$$

$$y=\frac12a_yt^2\approx\boxed{+1.8\,\mathrm{mm}}.$$

This is less than half the plate separation, $10\,\mathrm{mm}$, so the electron does not hit the upper plate in this model.

$$v_y=a_yt\approx1.76\times10^6\,\mathrm{m\,s^{-1}}.$$

$$\theta=\tan^{-1}\left(\frac{v_y}{u}\right)\approx\boxed{5.0^\circ}.$$

It leaves $5.0^\circ$ above the horizontal. Keep unrounded values when finding the angle.

**Check:** the increase in kinetic energy is $m_ev_y^2/2$. Moving upwards gives $\Delta V=Ey>0$, so the loss of electron potential energy is $eEy$. These values agree.

**Common mistakes:** using the changing total speed to find the crossing time, assuming constant total speed, or using the full plate separation as the vertical distance travelled.

## Comparing Electric and Gravitational Fields

Both fields exert forces at a distance and obey an inverse-square law for point sources. In both, field strength is a vector, potential is a scalar, field lines cross equipotentials at right angles, and the field is the negative potential gradient.

| Feature | Gravitational field | Electric field |
|---|---|---|
| Force on a small object | $\mathbf F=m\mathbf g$ | $\mathbf F=q\mathbf E$ |
| Potential-energy change | $m\Delta V$ | $q\Delta V$ |
| Source property | Mass | Electric charge |
| Interaction | Attractive | Attractive or repulsive |
| Isolated source potential | Negative, with zero at infinity | Same sign as the source charge |

### Example 6: forces between an electron and a proton

Compare the magnitudes of the electric and gravitational forces between an electron and a proton at separation $r$. Use $G=6.67\times10^{-11}\,\mathrm{N\,m^2\,kg^{-2}}$ and proton mass $m_p=1.67\times10^{-27}\,\mathrm{kg}$.

$$F_{\text{electric}}=\frac{ke^2}{r^2}.$$

$$F_{\text{gravity}}=\frac{Gm_em_p}{r^2}.$$

The separation cancels in the ratio:

$$\frac{F_{\text{electric}}}{F_{\text{gravity}}}=\frac{ke^2}{Gm_em_p}.$$

$$\boxed{\frac{F_{\text{electric}}}{F_{\text{gravity}}}=2.3\times10^{39}}.$$

Both forces are attractive here, but the electric force is vastly stronger. The ratio is dimensionless and independent of $r$ in this point-particle model. A neutron adds mass to a nucleus without adding electric charge; do not give it charge $+e$.

## Practice

Show the equation, substitution and units. State the direction when asked. Keep charge signs in potential and energy calculations.

### Question 1: changing the separation

Two point charges have force magnitude $F$ at separation $r$. Both charge magnitudes are doubled and their separation becomes $3r$. Find the new force in terms of $F$. If force magnitude is plotted against $1/r^2$ for fixed charges, what does the gradient represent?

<details markdown="1">
<summary>Hint</summary>

Scale the charge product and the square of separation separately.

</details>

<details markdown="1">
<summary>Solution</summary>

$$\boxed{F_{\text{new}}=\frac49F}.$$

The product of charge magnitudes increases by four and $r^2$ increases by nine. For fixed charges, $F=k|Q_1Q_2|(1/r^2)$, so the straight-line graph passes through the origin and its gradient is $k|Q_1Q_2|$.

</details>

### Question 2: zero field between like charges

Two positive point charges, $+Q$ and $+4Q$, are separated by distance $d$. Find the point between them where the resultant field is zero. Find its potential in terms of $k$, $Q$ and $d$.

<details markdown="1">
<summary>Hint</summary>

Let $x$ be the distance from $+Q$. Fields oppose between the sources; potentials add.

</details>

<details markdown="1">
<summary>Solution</summary>

$$\frac{kQ}{x^2}=\frac{4kQ}{(d-x)^2}.$$

For positive distances between the charges, $d-x=2x$, giving $\boxed{x=d/3}$. The point is closer to the smaller charge.

$$V=\frac{kQ}{d/3}+\frac{4kQ}{2d/3}.$$

$$\boxed{V=\frac{9kQ}{d}}.$$

The field is zero, but the potential is positive.

</details>

### Question 3: zero potential between unlike charges

Point charges $+Q$ and $-Q$ are separated by distance $2a$. Find the potential and field-strength magnitude at their midpoint. State the force direction on an electron there.

<details markdown="1">
<summary>Hint</summary>

At the midpoint, the potentials have opposite signs. Draw the field arrow from each source before adding.

</details>

<details markdown="1">
<summary>Solution</summary>

$$V=\frac{kQ}{a}-\frac{kQ}{a}=\boxed{0}.$$

Both fields point from the positive source towards the negative source:

$$\boxed{E=\frac{2kQ}{a^2}}.$$

The electron's force is opposite to the field, towards the positive source. Its potential energy is zero at that point, but its force is not zero.

</details>

### Question 4: gradient, area and energy

A $V$–$x$ graph is a straight line from $120\,\mathrm V$ at $x=0$ to $40\,\mathrm V$ at $x=0.020\,\mathrm m$. Find the field component. An electron moves between these points in the positive $x$ direction. Find the signed change in its potential energy and the work done by the field.

<details markdown="1">
<summary>Hint</summary>

Use the negative gradient for field strength and $q\Delta V$ for the change in potential energy.

</details>

<details markdown="1">
<summary>Solution</summary>

$$E_x=-\frac{40-120}{0.020}.$$

$$\boxed{E_x=+4.0\times10^3\,\mathrm{V\,m^{-1}}}.$$

The signed area under the field graph is $E_x\Delta x=+80\,\mathrm V$, so $\Delta V=-80\,\mathrm V$.

$$\Delta E_p=(-1.60\times10^{-19})(-80).$$

$$\boxed{\Delta E_p=+1.28\times10^{-17}\,\mathrm J}.$$

The field does $\boxed{-1.28\times10^{-17}\,\mathrm J}$ of work. The electron moves against its electric force. If no other force acts, it must have enough initial kinetic energy to complete the move; it loses this amount of kinetic energy.

</details>

### Question 5: a beam between plates

An electron enters horizontally at $1.5\times10^7\,\mathrm{m\,s^{-1}}$ midway between plates. Their separation is $0.020\,\mathrm m$ and their length is $0.030\,\mathrm m$. The uniform field is $2.0\times10^3\,\mathrm{V\,m^{-1}}$ downwards. Find the time in the field and the upward deflection at exit. State the path inside and outside the field.

<details markdown="1">
<summary>Hint</summary>

Horizontal velocity stays constant. The electron's vertical acceleration is opposite to the field.

</details>

<details markdown="1">
<summary>Solution</summary>

$$t=\frac{0.030}{1.5\times10^7}=\boxed{2.0\times10^{-9}\,\mathrm s}.$$

$$a_y=\frac{e(2.0\times10^3)}{m_e}.$$

$$y=\frac12a_yt^2\approx\boxed{+0.70\,\mathrm{mm}}.$$

This is less than $d/2=10\,\mathrm{mm}$, so the electron exits without striking a plate. Its path is parabolic inside the uniform field. Outside the field, it is a straight tangent if no other force acts. Only the horizontal speed is constant inside the field.

</details>

### Question 6: adding a neutron

**Adapted from OxfordAQA PH03, January 2020, Question 16.**

A deuterium nucleus contains one proton and one neutron. Take its mass as $3.34\times10^{-27}\,\mathrm{kg}$ and its charge as $+e$. Find the ratio of the electric force magnitude to the gravitational force magnitude on an electron at distance $r$. Use $G=6.67\times10^{-11}\,\mathrm{N\,m^2\,kg^{-2}}$.

<details markdown="1">
<summary>Hint</summary>

Compare with Example 6. The nuclear mass changes, but the charge remains $+e$.

</details>

<details markdown="1">
<summary>Solution</summary>

$$\frac{F_{\text{electric}}}{F_{\text{gravity}}}=\frac{ke^2}{Gm_e(3.34\times10^{-27})}.$$

$$\boxed{\frac{F_{\text{electric}}}{F_{\text{gravity}}}=1.1\times10^{39}}.$$

The nuclear mass is about twice the proton mass, so the gravitational force is about twice as large while the electric force is unchanged. The ratio is about half the electron–proton value, and does not depend on $r$.

</details>

### Question 7: a stationary oil drop

**Adapted from OxfordAQA PH03, June 2024, Question 4.**

An oil drop of mass $m$ is stationary between horizontal parallel plates. The upper plate is positive. Their potential difference magnitude is $U$ and their separation is $d$. Ignore forces due to air.

1. Show that its charge is $q=-mgd/U$, explaining the sign with a force balance.
2. For $U=16\,\mathrm V$, $d=1.5\,\mathrm{mm}$ and $q=-4.8\times10^{-19}\,\mathrm C$, point X is $1.5\,\mathrm{\mu m}$ directly below the drop's centre, well outside its surface and away from plate edges. Find the resultant field at X, including the plate field and the drop's field. Treat the drop's field as that of a point charge and ignore redistribution of charge on the plates.
3. Suggest two changes that can each make the drop accelerate downwards, keeping its mass unchanged.

<details markdown="1">
<summary>Hint</summary>

The plate field points downwards, but the electric force on the drop must point upwards. At X, draw the field from the negative drop separately from the plate field.

</details>

<details markdown="1">
<summary>Solution</summary>

Take downwards as positive. The weight is $+mg$ and the plate field is $E=U/d>0$. Equilibrium requires:

$$mg+q\frac{U}{d}=0.$$

$$\boxed{q=-\frac{mgd}{U}}.$$

The sign comes from the force balance: the electric force must oppose the downward field to balance the weight, so the drop is negatively charged. Saying only “the drop is negative” does not show why the sign is required. Use the plate field in this force balance; the drop does not exert a net force on itself.

At X, the plate field is downwards:

$$E_{\text{plates}}=\frac{16}{1.5\times10^{-3}}.$$

$$E_{\text{plates}}=1.07\times10^4\,\mathrm{V\,m^{-1}}.$$

The drop's field points **upwards**, towards the negative drop. Its magnitude is:

$$E_{\text{drop}}=\frac{k(4.8\times10^{-19})}{(1.5\times10^{-6})^2}.$$

$$E_{\text{drop}}=1.92\times10^3\,\mathrm{V\,m^{-1}}.$$

Subtract magnitudes because the directions are opposite:

$$E_{\text{resultant}}=E_{\text{plates}}-E_{\text{drop}}.$$

$$\boxed{E_{\text{resultant}}=8.7\times10^3\,\mathrm{V\,m^{-1}}}.$$

The resultant field points **downwards**. The distance for the drop's field is $1.5\,\mathrm{\mu m}$, not the distance from X to a plate.

Two possible changes are reducing $U$ with $d$ fixed, or increasing $d$ with $U$ fixed. Each reduces the upward electric force below the weight, so the drop accelerates downwards. Making the drop's negative charge smaller in magnitude is another possible change if its mass stays unchanged.

</details>

### Question 8: exchanging positions on an equipotential

**Adapted from OxfordAQA PH03, June 2024, Question 18.**

Small test charges $+3.0\,\mathrm{\mu C}$ and $-3.0\,\mathrm{\mu C}$ occupy two positions on the same equipotential surface of $25\,\mathrm{kV}$. Ignore their effect on the source field and their mutual interaction. Find each charge's potential energy in this external field. What is the net work done by the external field when their positions are exchanged? Must the field strength on that surface be zero?

<details markdown="1">
<summary>Hint</summary>

The initial and final potential are the same for each charge. Distinguish the value of potential energy from its change.

</details>

<details markdown="1">
<summary>Solution</summary>

For the positive charge:

$$E_p=(3.0\times10^{-6})(25\times10^3).$$

$$\boxed{E_p=+0.075\,\mathrm J}.$$

For the negative charge, $\boxed{E_p=-0.075\,\mathrm J}$. Each has $\Delta V=0$ when the positions are exchanged, so each has $\Delta E_p=q\Delta V=0$. The net work by the external field is $\boxed{0\,\mathrm J}$. This depends on unchanged potential at each charge's endpoints, not on the two charge signs cancelling.

The field need not be zero. It can be perpendicular to the equipotential surface, with potential changing in that perpendicular direction.

</details>

## Quick Reference

| Quantity | Equation and condition |
|---|---|
| Coulomb force magnitude | $F=\dfrac{k|Q_1Q_2|}{r^2}$; point charges in a vacuum |
| Force on a test charge | $\mathbf F=q\mathbf E$; opposite to the field for $q<0$ |
| Radial field component | $E_r=\dfrac{kQ}{r^2}$; outwards positive |
| Point-charge potential | $V=\dfrac{kQ}{r}$; zero at infinity |
| Potential energy | $E_p=qV$; retain both signs |
| Potential-energy change | $\Delta E_p=q\Delta V$ |
| Work done by the field | $W_{\text{field}}=-q\Delta V$ |
| Field component from potential | $E_x=-\dfrac{\mathrm dV}{\mathrm dx}$ |
| Uniform field magnitude | $E=\dfrac{U}{d}$; $U$ is the plate potential difference magnitude |
| Crossing time | $t=\dfrac{L}{u}$; constant horizontal velocity |
| Deflection in a uniform field | $y=\dfrac{qE_yL^2}{2mu^2}$; initially $v_y=0$, no other forces |

Before moving on, check that you can distinguish field direction from force direction, keep charge signs in energy calculations, combine fields and potentials correctly, use a tangent or area on a graph, and explain why only horizontal velocity stays constant during deflection.

[Next lesson: Capacitance](/alevel/a2-physics/capacitance/) · [Previous lesson: Gravitational Fields and Satellites](/alevel/a2-physics/gravitational-fields-and-satellites/) · [PH03 course index](/alevel/a2-physics/) · [PH03 reference notes](/alevel/a2-physics/quick-reference/)

<details markdown="1">
<summary>Sources and exam wording</summary>

This lesson follows Sections 3.8.1–3.8.3 of the [OxfordAQA Physics specification](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-physics-specification.pdf). It includes force comparisons for subatomic particles, uniform-field derivation, charged-particle trajectories, potential gradients and the area under field graphs. Section 3.8.4, capacitance, is reserved for the next lesson.

Textbook support: Jim Breithaupt, *Oxford International AQA Examinations: International A Level Physics*, Chapter 18, printed pp. 317–338. The symbols and definitions follow the textbook and specification. $U$ denotes a potential difference magnitude where needed to distinguish it from signed $\Delta V$; $Q$ and $q$ distinguish source and test charges. The teacher's AS handouts inform short explanations, diagrams and staged exercises.

Questions 6–8 are adapted from OxfordAQA PH03 January 2020 Question 16 and June 2024 Questions 4 and 18. The official mark schemes were consulted before drafting. The oil-drop geometry and assumptions are stated explicitly instead of relying on the paper's diagram. All numerical answers and directions were derived and checked independently rather than copied from textbook answer lists.

</details>
