---
title: Electromagnetic Induction
layout: subjects
mathjax: true
grade: a2
subject: a2-physics
permalink: /alevel/a2-physics/electromagnetic-induction/
toc_headings: h2, h3, h4
study_page: true
---

[A2 Physics](/alevel/a2-physics/) · PH03 · 3.10.3–3.10.4

What must change to induce an emf, and where does the transferred energy come from? Start with flux, then connect a graph, a direction and an energy balance.

**Before starting:** recall [magnetic force and directions](/alevel/a2-physics/magnetic-fields-and-moving-charges/), area, gradients and electrical power. New to this topic? Read in order. Revising? Try [Practice](#practice) with the solutions closed.

## Flux is not flux linkage {#flux-linkage}

For a flat area in a uniform field, define an area normal. Let $\theta$ be the angle **between the field and that normal**, not the plane:

$$\Phi=BA\cos\theta,\qquad \Psi=N\Phi=NBA\cos\theta.$$

$\Phi$ is flux through one turn; $\Psi$ is the flux linkage of $N$ identical turns, each linking the same flux. Flux has unit weber: $1\,\mathrm{Wb}=1\,\mathrm{T\,m^2}$. Flux linkage is commonly recorded in Wb turns; turns are dimensionless. If different turns link different fluxes, add their individual fluxes.

<img src="/assets/img/physics-flux-normal.svg" alt="Worked geometry: theta is measured from the area normal to the field. A separate edge-on view shows that field parallel to the coil plane gives zero flux." width="520" height="380" data-lazy-ignore="true">

Field normal to the plane gives maximum flux magnitude; field parallel to the plane gives zero. Reversing the chosen normal reverses the flux sign, not the physical field. Translating a whole coil inside an unchanged uniform field without changing its orientation or area does not change its linkage.

### Example 1: find the turns {#example-1}

*Adapted from OxfordAQA 9630 PH03 June 2024 Q6.1–6.2; QP p.19 and MS p.16 read. The angle convention is stated explicitly.*

A coil has $A=7.5\times10^{-4}\,\mathrm{m^2}$ and $B=4.2\times10^{-2}\,\mathrm T$. Its normal is $51^\circ$ to the field and its flux linkage is $2.4\times10^{-3}\,\mathrm{Wb}$ (turns dimensionless). Find the number of turns and explain why rotation can induce an emf even though field strength is constant.

$$N=\frac{2.4\times10^{-3}}{(4.2\times10^{-2})(7.5\times10^{-4})\cos51^\circ}\approx121.$$

Turns must be an integer; 120 is appropriate to two significant figures. Rotation changes the angle and therefore flux linkage. Its rate of change induces emf by Faraday's law. Naming the law or copying an equation without explaining the change is incomplete.

## Faraday: read the change, not the height {#faraday-sign}

For a fixed positive loop direction and its corresponding right-hand normal:

$$\overline\varepsilon=-\frac{\Delta\Psi}{\Delta t},\qquad \varepsilon=-\frac{\mathrm d\Psi}{\mathrm dt}.$$

The first gives an interval average; the second gives the instantaneous value. Emf magnitude is the magnitude of the linkage-time gradient. The minus sign gives the direction relative to the chosen convention. If the graph already shows $\Psi=N\Phi$, **do not multiply by N again**. $1\,\mathrm V=1\,\mathrm{Wb\,s^{-1}}$.

Large flux can be constant and give zero emf. Zero flux can be passing rapidly through zero and give nonzero emf. An open coil can have an induced terminal emf but no sustained conduction current.

### Example 2: average emf {#example-2}

A 120-turn coil has single-turn flux decreasing uniformly from $3.0\,\mathrm{mWb}$ to $1.0\,\mathrm{mWb}$ in $40\,\mathrm{ms}$. Find the signed emf for this flux convention.

$$\Delta\Psi=120(1.0-3.0)\times10^{-3}=-0.24\,\mathrm{Wb},\qquad \overline\varepsilon=-\frac{-0.24}{0.040}=\boxed{+6.0\,\mathrm V}.$$

The constant rate makes average and instantaneous emf equal within the interval. Reversing the terminal labels reverses the measured sign; it does not change the magnitude.

## Lenz: oppose the change {#lenz-energy}

Move a magnet towards a coil connected to a sensitive centre-zero meter: a changing linkage produces a deflection. Hold it still: the deflection returns to zero. Withdraw it: the sign reverses. Reverse the magnet pole or the meter leads and the sign reverses again; moving faster generally gives a larger magnitude. These are predictions for an experiment, not a claim that you have performed it.

For a north pole approaching the near face of a closed coil, the induced field makes that face north to repel the approach. Viewed from the magnet, conventional current is anticlockwise. On withdrawal the near face becomes south and the current reverses. The induced field opposes the **change**, not necessarily the original field: when external flux decreases, the induced field can point along it.

An external agent must do work against the electromagnetic resistance to maintain motion. Electrical heating comes from this work, or from decreasing kinetic/gravitational energy if the motion is not maintained. If induction reinforced the motion while also heating a resistor, energy would be created without an input.

## Moving rods and eddy currents {#moving-conductor}

<img src="/assets/img/physics-induction-rod.svg" alt="Worked circuit: a vertical rod slides right on rails in a field into the page. A resistor closes the loop at the left. Motion, field and rod are mutually perpendicular; no force or current answers are drawn." width="520" height="400" data-lazy-ignore="true">

In this geometry, positive charges moving right feel magnetic force up the rod. Charge separation gives the top a higher potential. For an isolated rod, electrical and magnetic forces balance at steady separation. With $E=\varepsilon/L$:

$$qE=qvB\quad\Rightarrow\quad\varepsilon=BLv.$$

This magnitude formula requires rod, velocity and field mutually perpendicular. Translation parallel to the field gives no such emf. A closed resistive loop carries current upwards in the moving rod; its magnetic force is leftwards. With negligible rail/rod resistance and constant speed:

$$I=\frac{BLv}{R},\quad F_{\mathrm{ext}}=BIL,\quad F_{\mathrm{ext}}v=I\varepsilon=I^2R.$$

Opening the circuit removes the steady current and braking force in this ideal model, while leaving charge separation and terminal emf.

### Example 3: follow the energy {#example-3}

For the closed rail circuit take $B=0.50\,\mathrm T$, $L=0.20\,\mathrm m$, $v=3.0\,\mathrm{m\,s^{-1}}$ and $R=2.0\,\Omega$. Find emf, current, external force and input power.

$$\varepsilon=0.30\,\mathrm V,\quad I=0.15\,\mathrm A,\quad F_{\mathrm{ext}}=0.015\,\mathrm N,\quad P=0.045\,\mathrm W.$$

Check independently with $I^2R=0.045\,\mathrm W$. Doubling speed doubles emf/current, doubles the required force and quadruples power at unchanged resistance.

In a bulk conductor, changing flux can drive closed circulating **eddy currents** without an external wire loop. Their fields can oppose motion and their resistance transfers energy to heating. A falling magnet in a conducting tube can therefore slow without contact. Cutting slots interrupts large current loops; laminating a transformer core uses this idea to reduce unwanted heating. A nonmagnetic conductor can still support eddy currents.

## A rotating coil connects flux to AC {#rotating-coil}

Take $t=0$ when the positive normal is along the field and let $\theta=\omega t$. For uniform rotation:

$$\Psi=NBA\cos\omega t,\qquad \varepsilon=NBA\omega\sin\omega t,\qquad \omega=2\pi f.$$

Peak emf is $\varepsilon_0=NBA\omega$. At maximum linkage the gradient and emf are zero; at a zero crossing of linkage, emf magnitude is maximum. The curves are a quarter-cycle apart under this convention. Faster rotation changes **both** amplitude and period. A generator transfers mechanical input to electrical output; loading it requires additional driving torque.

## Graph investigation: choose the emf {#data-flux-graph}

*Self-written; constructed teaching graph, not measured records.*

The graph shows total linkage $\Psi$ in Wb turns (turns dimensionless). Positive normal is out of the page; positive loop direction is anticlockwise viewed on the page. Sketch signed emf on the same time scale, calculate its value on each straight segment, and find its signed time-area. Explain why the ideal corners do not define unique instantaneous emf values. Do not multiply by the coil turn count again.

<img src="/assets/img/physics-induction-flux-task.svg" alt="Task graph of total flux linkage against time: vertices at 0 s and 0 Wb, 0.20 s and 0.060 Wb, 0.50 s and 0.060 Wb, 0.60 s and 0 Wb. Only linkage is plotted; the emf graph is left for the student." width="520" height="390" data-lazy-ignore="true">

<details markdown="1">
<summary>Hint</summary>

A horizontal segment has zero gradient. A falling segment has negative gradient; include the minus sign in Faraday’s law.

</details>

<details markdown="1">
<summary>Analysis and retry</summary>

On the three open intervals the emf is respectively $-0.30\,\mathrm V$, $0$ and $+0.60\,\mathrm V$. Its signed time-area is:

$$(-0.30)(0.20)+0(0.30)+(0.60)(0.10)=0\,\mathrm{V\,s}=-\Delta\Psi.$$

The linkage returns to its start, so the net area is zero even though emf was nonzero during parts of the motion. The graph has abrupt changes of gradient at its corners; real apparatus rounds these transitions. **Retry:** traverse the same linkage changes in half the time. Emf magnitudes double, durations halve and each signed area is unchanged. Area conversion is a consequence of the law, not a claim of an additional named specification requirement.

</details>

## Practice {#practice}

### Question 1: change a model condition {#question-1}

*Self-written.*

A closed coil is wholly inside a uniform steady field. Compare the emf when it (a) translates without rotation, (b) rotates, and (c) leaves the field region. Explain why the presence of a field alone cannot answer the question.

<details markdown="1">
<summary>Hint</summary>

Track linkage, not simply whether the coil is moving.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

(a) Zero if area and orientation remain fixed. (b) Generally nonzero because the normal-field angle changes, though zero at particular instants. (c) Generally nonzero while the linked area leaves the field. **Retry:** open the coil: emf can remain, while sustained current cannot.

</details>

### Question 2: read linkage from emf {#question-2}

*Adapted from OxfordAQA 9630 PH03 January 2020 Q34; QP p.42 and MS p.9 (key B) read. Algebra and an open sketch replace the graph options; the initial phase is restated.*

Over a full cycle, an emf is $\varepsilon=\varepsilon_0\sin\omega t$. The linkage has zero mean. Sketch linkage with a positive value at $t=0$, mark its extrema and zero crossings, and derive its amplitude.

<details markdown="1">
<summary>Hint</summary>

Differentiate your proposed curve and apply the minus sign.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

$$\Psi=\frac{\varepsilon_0}{\omega}\cos\omega t.$$

Linkage starts at a positive maximum, crosses zero at a quarter period and reaches a negative minimum at half a period. Its amplitude is emf amplitude divided by angular frequency. **Retry:** reverse the emf polarity; the linkage curve changes sign for the same zero-mean condition.

</details>

### Question 3: explain a passing magnet {#question-3}

*Adapted from OxfordAQA 9630 PH03 January 2020 Q5.2/Q5.4; QP pp.18/20 and MS p.8 read. An explicitly described trace replaces the original plotted trace; exact timing is not reused.*

A magnet on a trolley passes beneath a stationary coil. The measured emf has two lobes of opposite sign with a zero interval between them. Explain the signs and the zero interval using linkage. Predict changes if the trolley accelerates so that it passes the second lobe faster than the first.

<details markdown="1">
<summary>Hint</summary>

Connect each part of the trace to a rate and its sign, not only the names of laws.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

The linkage first changes one way and later the other; Lenz’s law gives opposite emf signs. A zero interval indicates no linkage change in that interval, not necessarily no field. Faster passage through a comparable spatial change gives a taller, narrower lobe; the later lobe is larger/narrower if passage there is faster, and lobe separation shortens. **Retry:** reverse the measured terminals; signs reverse while widths remain.

</details>

### Question 4: infer generator frequency {#question-4}

*Adapted from OxfordAQA 9630 PH03 January 2020 Q32; QP p.40 and MS p.9 (key C) read. Open calculation and a transfer task replace the choices.*

A 40-turn coil of area $0.20\,\mathrm{m^2}$ rotates uniformly in $1.5\,\mathrm{mT}$. Its peak emf is $0.24\,\mathrm V$. Determine its rotation frequency and predict peak emf when frequency doubles.

<details markdown="1">
<summary>Hint</summary>

Convert millitesla and distinguish angular frequency from frequency.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

$$f=\frac{0.24}{2\pi(40)(0.20)(1.5\times10^{-3})}\approx\boxed{3.2\,\mathrm{Hz}}.$$

Doubling frequency gives peak emf $0.48\,\mathrm V$ and half the period. **Retry:** double turns instead: amplitude doubles but period does not change.

</details>

### Question 5: break the circuit {#question-5}

*Self-written.*

Use Example 3 geometry and values. Replace the $2.0\,\Omega$ load with $4.0\,\Omega$ while keeping the rod speed fixed. Find emf, current, driving force and heating power. Then state what survives when the circuit is opened.

<details markdown="1">
<summary>Hint</summary>

Motion sets emf; resistance sets the current and therefore the braking force.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

$$\varepsilon=0.30\,\mathrm V,\quad I=0.075\,\mathrm A,\quad F_{\mathrm{ext}}=0.0075\,\mathrm N,\quad P=0.0225\,\mathrm W.$$

Open circuit: terminal emf remains, but steady current and magnetic drag vanish in this model. **Retry:** close it again and release the drive; deceleration invalidates constant-speed power as a constant over time.

</details>

### Question 6: explain braking without contact {#question-6}

*Self-written.*

A magnet falls through a conducting nonmagnetic tube more slowly than through a plastic tube. Explain the energy path and predict how a long insulating slit along the conducting tube could affect the fall. Does a slower fall prove that all energy is stored magnetically?

<details markdown="1">
<summary>Hint</summary>

Identify closed induced-current paths and resistance.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

Changing flux drives eddy currents in the conductor. Their magnetic effects oppose relative motion, transferring gravitational energy into resistive heating as well as kinetic energy. A slit interrupts major circulating paths and can weaken braking. A slow or steady descent does not imply energy is accumulating indefinitely in a field. **Retry:** explain why the tube need not be ferromagnetic.

</details>

## Quick reference {#quick-reference}

| Check first | Relation |
| --- | --- |
| Angle measured from normal, uniform field | $\Psi=NBA\cos\theta$ |
| Total linkage already supplied | $\overline\varepsilon=-\Delta\Psi/\Delta t$ |
| Rod, velocity and field mutually perpendicular | $\varepsilon=BLv$ |
| Closed resistive loop, steady motion | $F_{\mathrm{ext}}v=I^2R$ |
| Uniform coil rotation | $\varepsilon_0=NBA(2\pi f)$ |

[Previous: Magnetic Fields and Moving Charges](/alevel/a2-physics/magnetic-fields-and-moving-charges/) · [Course index](/alevel/a2-physics/) · [Next: Alternating Current](/alevel/a2-physics/alternating-current/)

## Sources and scope {#sources}

Scope: OxfordAQA 9630 PH03, [specification body v4.4](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf), Sections 3.10.3–3.10.4, printed pp.25–26/PDF pp.24–25, checked 21 October 2026. Adapted January 2020 questions pair QP pp.17–20/40/42 with MS pp.8–9; the graph-phase task has direct Q34 evidence. Example 1 pairs June 2024 QP p.19 with MS p.16. Jim Breithaupt Chapter 21.2–21.3, printed pp.374/378, supports explanation only. Other tasks, numbers and drawings are original teaching material. The linkage-graph area is a derived teaching connection. This page is not a numbered required practical and does not claim physical experiment completion.
