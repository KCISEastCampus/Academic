---
layout: subjects
title: A2 Physics — PH03 Quick Reference
mathjax: true
grade: a2
subject: a2-physics
permalink: /alevel/a2-physics/quick-reference/
toc_headings: h2
study_page: true
---


[Back to the PH03 course index](/alevel/a2-physics/). For a full lesson, open [Circular Motion](/alevel/a2-physics/circular-motion/). These reference notes cover PH03; the other topics will be developed into guided lessons.

> **Qualification**: OxfordAQA International A-level Physics (9630) · Modular<br>
> **Assessment**: AS = Unit 1 + Unit 2 · A2 = Unit 3 + Unit 4 + Unit 5

# 📕 Unit 3: Fields and Their Consequences

`(Specification Sections: 3.6 – 3.10)`

---

## 1. 🔄 Circular and Periodic Motion (3.6)


### 1.1 Angular Quantities

* **Angular Displacement ($\theta$)**: Angle turned through, measured in **radians**.
    * $1 \text{ revolution} = 2\pi \text{ rad} = 360°$
* **Angular Velocity ($\omega$)**: Rate of change of angular displacement.
    $$\omega = \frac{\Delta \theta}{\Delta t}$$
    * Units: rad s$^{-1}$
* **Relationship between linear and angular velocity**:
    $$v = r\omega$$

### 1.2 Centripetal Acceleration

An object moving in a circle at constant speed has a **centripetal acceleration** directed towards the centre of the circle.
$$a = \frac{v^2}{r} = r\omega^2$$

### 1.3 Centripetal Force

By Newton's second law, a centripetal force is required to produce centripetal acceleration:
$$F = \frac{mv^2}{r} = mr\omega^2$$

* The centripetal force is **not a new force** — it is provided by an existing force such as:
    * **Tension** in a string (e.g., conical pendulum)
    * **Friction** between tyres and road (car on a bend)
    * **Gravitational force** (planetary orbits, satellite motion)
    * **Normal reaction** (car on a banked track)
    * **Magnetic force** (a charged particle moving perpendicular to a uniform magnetic field)

### 1.4 Vertical Circular Motion

At the top and bottom of a vertical circle, resolve the actual forces towards the centre. Use $F_T$ for tension here, reserving $T$ for period.

| Situation | Inward force equation | Condition |
|---|---|---|
| Particle on a string, top of a vertical circle | $F_T+mg=\dfrac{mv^2}{r}$ | $F_T\geq0$: $v\geq\sqrt{gr}$ (minimum speed for a taut string) |
| Particle on a string, bottom of a vertical circle | $F_T-mg=\dfrac{mv^2}{r}$ | Tension exceeds weight |
| Car at a hill crest, centre below | $mg-N=\dfrac{mv^2}{r}$ | $N\geq0$: $v\leq\sqrt{gr}$ (maximum speed for contact) |
| Car at the bottom of a dip, centre above | $N-mg=\dfrac{mv^2}{r}$ | Reaction exceeds weight |

For a particle on a string moving in a vertical circle under gravity, speed changes with height. Do not assume uniform speed. For a road, $r$ is the local radius of curvature. See the [force diagrams and contact conditions](/alevel/a2-physics/circular-motion/#at-the-top-and-bottom-of-a-curve).

### 1.5 Simple Harmonic Motion (SHM)

[Open the full Simple Harmonic Motion lesson](/alevel/a2-physics/simple-harmonic-motion/) for motion and energy graphs, period derivations, worked examples and practice.

* **Definition**: SHM is a type of periodic motion where the acceleration is **directly proportional to the displacement** from a fixed equilibrium position and is **always directed towards that position**.
    $$a = -\omega^2 x$$
    * $a$ = acceleration (m s$^{-2}$)
    * $x$ = displacement from equilibrium (m)
    * $\omega$ = angular frequency (rad s$^{-1}$)

* **Displacement, velocity and acceleration**:
    * Displacement: $x = A\cos(\omega t)$ (or $x = A\sin(\omega t)$ depending on initial conditions)
    * Velocity: $v = \frac{dx}{dt} = -A\omega\sin(\omega t)$
    * Acceleration: $a = \frac{dv}{dt} = -A\omega^2\cos(\omega t) = -\omega^2 x$

* **Key relationships**:
    * Maximum speed: $v_{\text{max}} = A\omega$ (at equilibrium position)
    * Maximum acceleration magnitude: $a_{\text{max}} = A\omega^2$ (at either extreme)
    * Period: $T = \frac{2\pi}{\omega}$
    * Frequency: $f = \frac{1}{T} = \frac{\omega}{2\pi}$

### 1.6 Examples of SHM


#### Mass-spring system

A mass $m$ attached to a spring of spring constant $k$:
$$\omega = \sqrt{\frac{k}{m}}, \quad T = 2\pi\sqrt{\frac{m}{k}}$$

#### Simple pendulum

A mass $m$ on a string of length $L$ swinging through small angles:
$$\omega = \sqrt{\frac{g}{L}}, \quad T = 2\pi\sqrt{\frac{L}{g}}$$
* The period is **independent of mass** and **amplitude** (for small angles).

### 1.7 Graphs of SHM


| Quantity | Graph Shape | Key Feature |
|----------|-------------|-------------|
| $x$ vs $t$ | Cosine/sine curve | Amplitude $A$, period $T$ |
| $v$ vs $t$ | Sine curve (phase-shifted by $\pi/2$) | Speed is greatest at $x = 0$ |
| $a$ vs $t$ | Cosine curve (phase-shifted by $\pi$) | Acceleration magnitude is greatest at $x = \pm A$ |

* **Energy in undamped SHM**: Total energy is conserved, transferring between KE and PE measured relative to equilibrium. For a spring oscillator:
    * KE: $E_k = \frac{1}{2}mv^2$ — maximum at equilibrium ($x = 0$)
    * PE: $E_p = \frac{1}{2}kx^2$ — maximum at extreme positions ($x = \pm A$)

> **📝 Example Question**
>
> A mass of 0.20 kg is attached to a spring of spring constant 50 N m$^{-1}$. It is displaced 4.0 cm from equilibrium and released. Calculate:
> (a) The angular frequency
> (b) The maximum velocity
> (c) The maximum acceleration
>
> **Solution:**
> 1. (a) $\omega = \sqrt{\frac{k}{m}} = \sqrt{\frac{50}{0.20}} = \sqrt{250} = 15.8$ rad s$^{-1}$
> 2. (b) $v_{\text{max}} = A\omega = 0.040 \times 15.8 = 0.63$ m s$^{-1}$
> 3. (c) $a_{\text{max}} = A\omega^2 = 0.040 \times 250 = 10$ m s$^{-2}$

---

## 2. 🌍 Gravitational Fields and Satellites (3.7)

[Open the full lesson: Gravitational Fields and Satellites](/alevel/a2-physics/gravitational-fields-and-satellites/) for explanations, graphs, worked examples and practice.


### 2.1 Gravitational Field Strength

* **Definition**: The gravitational force per unit mass placed at a point in the field.
    $$g = \frac{F}{m}$$
    * $g$ has units of N kg$^{-1}$ (numerically equal to m s$^{-2}$).

### 2.2 Newton's Law of Gravitation

Every particle attracts every other particle with a force proportional to the product of their masses and inversely proportional to the square of the distance between them:
$$F = \frac{GMm}{r^2}$$
* $G$ = Universal gravitational constant $= 6.67 \times 10^{-11}$ N m$^2$ kg$^{-2}$
* $M, m$ = masses of the two objects
* $r$ = distance between their centres
* This is the force magnitude. The force is directed towards the other mass. A signed radial component is negative when outwards is positive.

### 2.3 Gravitational Field of a Point Mass

The gravitational field strength at distance $r$ from a point mass $M$:
$$g = \frac{GM}{r^2}$$

### 2.4 Gravitational Potential

* **Definition**: The work done per unit mass in bringing a small test mass from infinity to a point in the field.
    $$V = -\frac{GM}{r}$$
    * $V$ is always **negative** (by convention, $V = 0$ at infinity).
    * Units: J kg$^{-1}$

### 2.5 Gravitational Potential Energy

The gravitational potential energy of a mass $m$ at a point where the gravitational potential is $V$:
$$E_p = mV = -\frac{GMm}{r}$$

* For a move between two points, $\Delta E_p=m\Delta V$.
* External work equals $\Delta E_p$ if kinetic energy is unchanged. Work done by gravity is $-\Delta E_p$.
* With outwards positive, the radial field component is the negative potential gradient: $g_r=-\dfrac{\mathrm dV}{\mathrm dr}$. Use a tangent to read the gradient at a point.

### 2.6 Gravitational Field Lines

* **Radial fields**: Lines point towards a point mass (converging towards the mass).
* **Uniform fields**: Parallel, equally spaced lines (e.g., near Earth's surface).

### 2.7 Orbital Motion

For a satellite in circular orbit around a planet of mass $M$:
* Gravitational force provides centripetal force:
    $$\frac{GMm}{r^2} = \frac{mv^2}{r}$$
* Orbital speed:
    $$v = \sqrt{\frac{GM}{r}}$$
* Orbital period:
    $$T = 2\pi\sqrt{\frac{r^3}{GM}}$$

* **Kepler's Third Law** (for circular orbits):
    $$T^2 \propto r^3$$
    * Compare orbits about the same central mass.

* **Circular-orbit energies**:
    $$E_k=\frac{GMm}{2r},\qquad E_p=-\frac{GMm}{r}$$
    $$E_{\text{total}}=-\frac{GMm}{2r}$$
    * A higher circular orbit has lower speed but greater total energy, which is less negative.

* **Geosynchronous orbits** have the same period as Earth's rotation. They need not remain above one surface point.

* **Geostationary orbits** are circular geosynchronous orbits:
    * Orbit above the equator in the same direction as Earth's rotation.
    * Period matches Earth's rotation; use $24$ hours when given in the question.
    * Fixed position above the Earth's surface.
    * Altitude is about $3.6 \times 10^7$ m.
    * Used for telecommunications and weather monitoring.

> **📝 Example Question**
>
> A satellite orbits Earth at a height of 400 km above the surface. Given $R_E = 6.37 \times 10^6$ m and $M_E = 5.97 \times 10^{24}$ kg, calculate the orbital speed and period.
>
> **Solution:**
> 1. $r = R_E + h = 6.37 \times 10^6 + 4.00 \times 10^5 = 6.77 \times 10^6$ m
> 2. $v = \sqrt{\frac{GM}{r}} = \sqrt{\frac{6.67 \times 10^{-11} \times 5.97 \times 10^{24}}{6.77 \times 10^6}} = \sqrt{5.89 \times 10^7} = 7.67 \times 10^3$ m s$^{-1}$
> 3. $T = \frac{2\pi r}{v} = \frac{2\pi \times 6.77 \times 10^6}{7.67 \times 10^3} = 5550$ s $\approx 92.4$ min

---

## 3. ⚡ Electric Fields and Capacitance (3.8)

[Open the full Electric Fields lesson](/alevel/a2-physics/electric-fields/) for field and force directions, potential graphs, combined fields, particle deflection and practice. [Open the full Capacitance lesson](/alevel/a2-physics/capacitance/) for charge, energy, dielectrics and practice.

### 3.1 Electric Field Strength

* **Definition**: The force per unit positive charge placed at a point in the field.
    $$E = \frac{F}{Q}$$
    * $E$ has units of N C$^{-1}$ or V m$^{-1}$.
    * Field strength is a vector. For any small test charge $q$, $\mathbf F=q\mathbf E$. A negative charge has force opposite to the field direction.

### 3.2 Coulomb's Law

The force magnitude between two point charges in a vacuum:
$$F = \frac{|Q_1 Q_2|}{4\pi\varepsilon_0 r^2}$$
* $\varepsilon_0$ = permittivity of free space $= 8.85 \times 10^{-12}$ C$^2$ N$^{-1}$ m$^{-2}$
* $k = \frac{1}{4\pi\varepsilon_0} = 8.99 \times 10^9$ N m$^2$ C$^{-2}$
* Like charges repel; unlike charges attract. Each experiences an equal and opposite force. Air can usually be treated as a vacuum.

### 3.3 Electric Field of a Point Charge

$$E_r = \frac{Q}{4\pi\varepsilon_0 r^2}$$

This is the signed radial component with outwards positive. The magnitude is $|Q|/(4\pi\varepsilon_0r^2)$; the field is outwards for a positive source and inwards for a negative source. Measure $r$ from the source charge, or from the centre of a spherically symmetric charged sphere for its outside field.

### 3.4 Electric Potential

* **Definition**: The work done per unit positive charge in bringing a small test charge from infinity to a point in the field.
    $$V = \frac{Q}{4\pi\varepsilon_0 r}$$
    * $V$ is **positive** for a positive source charge and **negative** for a negative source charge.
    * Units: V (volts) or J C$^{-1}$

### 3.5 Electric Potential Energy

$$E_p = QV = \frac{Q_1 Q_2}{4\pi\varepsilon_0 r}$$

* Retain the signs of both charge and potential. For a fixed small test charge $q$, $\Delta E_p=q\Delta V$.
* Work done by the field is $-q\Delta V$. If only the electric force does work, $\Delta E_k=-q\Delta V$.
* Potentials add as scalars; fields add as vectors. Zero potential does not imply zero field.
* With a chosen coordinate $x$, $E_x=-\mathrm dV/\mathrm dx$. A tangent gives the field at a point; the signed area under an $E_x$–$x$ graph is $-\Delta V$.
* Field lines cross equipotentials at right angles; no work is done by the field when a charge moves along an equipotential.

### 3.6 Uniform Electric Field

Between two parallel plates separated by distance $d$ with potential difference $V$:
$$E = \frac{V}{d}$$
* Field lines are **parallel and equally spaced** (uniform field).
* Field lines go from **positive to negative** plate.
* Here $V$ denotes the potential difference magnitude, not a signed change along a particle's path. The approximation applies away from plate edges.
* For horizontal entry at speed $u$ into a vertical field of length $L$, $t=L/u$ and $y=qE_yL^2/(2mu^2)$, with initial vertical velocity zero and no other forces. The path is parabolic inside the field and a straight tangent outside it. Only horizontal velocity stays constant in the field.

### 3.7 Comparison of Gravitational and Electric Fields


| Property | Gravitational Field | Electric Field |
|----------|-------------------|----------------|
| Source | Mass | Charge |
| Force law | $F = \frac{GMm}{r^2}$ (magnitude) | $F = \frac{|Q_1Q_2|}{4\pi\varepsilon_0 r^2}$ (magnitude) |
| Field strength | $g = \frac{GM}{r^2}$ (magnitude, inwards) | $E_r = \frac{Q}{4\pi\varepsilon_0 r^2}$ (outwards positive) |
| Potential | $V = -\frac{GM}{r}$ | $V = \frac{Q}{4\pi\varepsilon_0 r}$ |
| Potential energy | $E_p = -\frac{GMm}{r}$ | $E_p = \frac{Q_1Q_2}{4\pi\varepsilon_0 r}$ |
| Nature | Always attractive | Attractive or repulsive |

### 3.8 Capacitance

* **Definition**: The ability of a component to store charge. The charge stored per unit potential difference.
    $$C = \frac{Q}{V}$$
    * $C$ = capacitance (F, farads)
    * $Q$ = magnitude of charge on either plate (C), not the sum of both magnitudes
    * $V$ = potential difference magnitude (V)
    * $1 \text{ F} = 1 \text{ C V}^{-1}$

### 3.9 Parallel Plate Capacitor

For broad parallel plates with overlapping area $A$ on one plate and separation $d$, neglecting edge effects, with a dielectric fully filling the gap:
$$C = \frac{\varepsilon_0 \varepsilon_r A}{d}$$
* $\varepsilon_r$ = relative permittivity (dielectric constant) of the material between the plates

* For the same geometry, $\varepsilon_r=C/C_0$. Polar molecules tend to rotate with positive ends along the field. Bound surface charges produce an opposing polarisation field.
* A connected constant-voltage supply fixes $V$: full dielectric insertion increases $C$, $Q$ and stored energy by $\varepsilon_r$, while $E=V/d$ stays unchanged.
* Isolation fixes free plate charge $Q$: full insertion increases $C$ by $\varepsilon_r$ and reduces $V$, field strength and stored energy by that factor. These comparisons assume unchanged geometry.

### 3.10 Energy Stored in a Capacitor

$$E = \frac{1}{2}QV = \frac{1}{2}CV^2 = \frac{Q^2}{2C}$$
* Plot $V$ vertically against $Q$ horizontally. The energy stored is the **area under the graph**, $\int V\,\mathrm dQ$. For constant capacitance, the straight line through the origin gives a triangle of area $QV/2$.

* At fixed capacitance, energy released between voltages is $C(V_1^2-V_2^2)/2$, not $C(V_1-V_2)^2/2$.

> **📝 Example Question**
>
> Two point charges, $+4.0 \times 10^{-6}$ C and $-3.0 \times 10^{-6}$ C, are separated by 0.20 m. Calculate the force between them and state its nature.
>
> **Solution:**
> 1. $F = \frac{1}{4\pi\varepsilon_0} \times \frac{|Q_1 Q_2|}{r^2} = 8.99 \times 10^9 \times \frac{4.0 \times 10^{-6} \times 3.0 \times 10^{-6}}{(0.20)^2}$
> 2. $F = 8.99 \times 10^9 \times \frac{1.2 \times 10^{-11}}{0.040} = 8.99 \times 10^9 \times 3.0 \times 10^{-10} = 2.7$ N
> 3. The force is **attractive** (opposite charges).

---

## 4. 📉 Exponential Change (3.9)


### 4.1 Capacitor Charging and Discharging

[Open the full Capacitor Charge and Discharge lesson](/alevel/a2-physics/capacitor-charge-and-discharge/) for circuits, examples, practice and required practical 6.

For constant $R$ and $C$, with negligible other resistance and leakage:

| Quantity | Charging from zero | Discharging from $V_0$ |
|---|---|---|
| Capacitor voltage | $V_C=V_s(1-e^{-t/RC})$ | $V_C=V_0e^{-t/RC}$ |
| Charge | $Q=CV_s(1-e^{-t/RC})$ | $Q=Q_0e^{-t/RC}$ |
| Current magnitude | $I=(V_s/R)e^{-t/RC}$ | $I=(V_0/R)e^{-t/RC}$ |

During charging, $V_s=IR+V_C$. As capacitor voltage rises, resistor voltage and current fall. During discharge, $I=V_C/R$; current falls as voltage falls. Conventional current reverses through the resistor. These equations give magnitudes; a common signed-current convention gives opposite signs.

### 4.2 Time Constant (Capacitor)

$$\tau=RC,\qquad T_{1/2}=RC\ln2.$$

* At $t=RC$, discharge charge, voltage and current fall to about 36.8% of their initial values.
* Charging from zero reaches about 63.2% of the final charge and voltage, while current falls to about 36.8% of its initial value.
* $5RC$ gives about 99.3% completion, not an exact end point.
* Discharge energy follows $E_{\text{stored}}=E_0e^{-2t/RC}$, so its time to halve is $RC\ln2/2$.

### 4.3 Charging and Discharging Graphs

* Charging $Q$ and $V_C$ rise towards fixed limits. Discharge $Q$, $V_C$ and current magnitude approach zero with negative gradients that become less negative.
* Current is the gradient of charging $Q$ against $t$. During discharge, outgoing current magnitude is the negative of the charge gradient.
* Area under current magnitude against time gives charge **moved**, not automatically charge remaining. On discharge, subtract charge moved from initial charge.
* Required practical 6: plot $\ln(V_C/1\,\mathrm V)$ against time for discharge, or $\ln[(V_s-V_C)/1\,\mathrm V]$ for charging. Gradient $m=-1/(RC)$, so $RC=-1/m$ and $C=-1/(Rm)$.
* A voltmeter across the capacitor adds a parallel discharge path. Its input resistance should be much greater than $R$, or included when calculating the effective resistance.

### 4.4 Exponential Decay in Radioactivity

Radioactive decay follows the same exponential law:
$$N = N_0 e^{-\lambda t}$$
* $N$ = number of undecayed nuclei at time $t$
* $N_0$ = initial number of undecayed nuclei
* $\lambda$ = decay constant (s$^{-1}$)

* **Activity ($A$)**: The rate of decay.
    $$A = \lambda N = A_0 e^{-\lambda t}$$

* **Half-life ($t_{1/2}$)**: The time for half the nuclei to decay.
    $$t_{1/2} = \frac{\ln 2}{\lambda} = \frac{0.693}{\lambda}$$

* **Mean lifetime ($\tau$)**: The average time a nucleus survives before decaying.
    $$\tau = \frac{1}{\lambda}$$

### 4.5 Determining Decay Constants Graphically

* Plot $\ln N$ (or $\ln A$) against $t$:
    * $\ln N = \ln N_0 - \lambda t$
    * Gradient $= -\lambda$
    * $y$-intercept $= \ln N_0$

> **📝 Example Question**
>
> A 4700 μF capacitor is charged to 12 V and then discharged through a 10 kΩ resistor. Calculate:
> (a) The initial charge stored
> (b) The time constant
> (c) The time for the PD to fall to 4.0 V
>
> **Solution:**
> 1. (a) $Q_0 = CV_0 = 4700 \times 10^{-6} \times 12 = 0.0564$ C $= 56.4$ mC
> 2. (b) $\tau = RC = 10 \times 10^3 \times 4700 \times 10^{-6} = 47$ s
> 3. (c) $V = V_0 e^{-t/RC} \implies 4.0 = 12 \times e^{-t/47}$
> 4. $\frac{4.0}{12} = e^{-t/47} \implies \ln\left(\frac{1}{3}\right) = -\frac{t}{47}$
> 5. $t = 47 \times \ln 3 = 47 \times 1.099 = 51.6$ s $\approx 52$ s

---

## 5. 🧲 Magnetic Fields (3.10)


### 5.1 Magnetic Flux Density

* **Definition**: The force per unit current per unit length on a straight wire perpendicular to the field.
    $$B = \frac{F}{IL}$$
    * $B$ = magnetic flux density (T, tesla)
    * $F$ = force (N)
    * $I$ = current (A)
    * $L$ = length of wire in the field (m)

### 5.2 Force on a Current-Carrying Conductor

For a straight wire of length $L$ carrying current $I$ in a uniform magnetic field $B$:
$$F = BIL\sin\theta$$
* $\theta$ = angle between the current direction and the magnetic field
* The force is **maximum** when $\theta = 90°$ (wire perpendicular to field) and **zero** when $\theta = 0°$ (wire parallel to field).
* **Direction**: Determined by **Fleming's Left-Hand Rule**.

### 5.3 Fleming's Left-Hand Rule

* **Thumb**: Direction of motion (force)
* **First finger**: Direction of magnetic field (N → S)
* **Second finger**: Direction of conventional current

### 5.4 Force on a Moving Charge

For a charge $Q$ moving with velocity $v$ perpendicular to a magnetic field $B$:
$$F = BQv$$
* This is the principle behind the **mass spectrometer** and **circular particle accelerators**.
* The magnetic force provides centripetal force:
    $$BQv = \frac{mv^2}{r} \implies r = \frac{mv}{BQ}$$

### 5.5 Magnetic Flux

* **Magnetic Flux ($\Phi$)**: The product of magnetic flux density and the area perpendicular to the field.
    $$\Phi = BA\cos\theta$$
    * $B$ = magnetic flux density (T)
    * $A$ = area (m$^2$)
    * $\theta$ = angle between $B$ and the **normal** to the area
    * Units: Wb (webers)

### 5.6 Magnetic Flux Linkage

* **Flux Linkage** $= N\Phi = NBA\cos\theta$
    * $N$ = number of turns in a coil

### 5.7 Faraday's Law of Electromagnetic Induction

The induced electromotive force (emf) is equal to the rate of change of magnetic flux linkage:
$$\varepsilon = -N\frac{\Delta \Phi}{\Delta t} = -\frac{\Delta (N\Phi)}{\Delta t}$$

* The negative sign indicates the direction of the induced emf (Lenz's Law).

### 5.8 Lenz's Law

The direction of the induced current is such that it **opposes the change** that produced it.
* This is a consequence of the **conservation of energy**.

### 5.9 Motional emf

For a conductor of length $L$ moving at speed $v$ perpendicular to a magnetic field $B$:
$$\varepsilon = BLv$$

### 5.10 Alternating Currents

* A coil rotating in a uniform magnetic field at constant angular velocity $\omega$ produces a sinusoidal emf:
    $$\varepsilon = NBA\omega \sin(\omega t)$$
* **Peak emf**: $\varepsilon_0 = NBA\omega$
* **RMS (root mean square) values**:
    $$V_{\text{rms}} = \frac{V_0}{\sqrt{2}} \approx 0.707 V_0$$
    $$I_{\text{rms}} = \frac{I_0}{\sqrt{2}} \approx 0.707 I_0$$
* **Peak factor**: $\frac{V_0}{V_{\text{rms}}} = \sqrt{2}$
* **Mean (average) value** over a half-cycle: $V_{\text{mean}} = \frac{2V_0}{\pi} \approx 0.637 V_0$

### 5.11 The Transformer

A transformer changes the magnitude of an alternating voltage. It consists of a **soft iron core** with two coils wound around it: a **primary coil** and a **secondary coil**.

* **Transformer equation** (for an ideal transformer):
    $$\frac{V_s}{V_p} = \frac{N_s}{N_p}$$
    * $V_p, V_s$ = primary and secondary voltages
    * $N_p, N_s$ = number of turns in primary and secondary coils

* **Power relationship** (ideal transformer, 100% efficiency):
    $$V_p I_p = V_s I_s$$

* **Types**:
    * **Step-up**: $N_s > N_p \implies V_s > V_p$ (used in power transmission)
    * **Step-down**: $N_s < N_p \implies V_s < V_p$ (used in local distribution)

* **Energy losses in real transformers**:
    * Magnetic flux leakage
    * Eddy currents in the iron core
    * Hysteresis losses
    * Resistance in the coils (heating)

* **Power transmission**:
    * Long-distance transmission uses **high voltage, low current** to minimise energy losses ($P_{\text{loss}} = I^2 R$).
    * Step-up transformers increase voltage at power stations; step-down transformers reduce voltage for domestic use.

> **📝 Example Question**
>
> A rectangular coil of 200 turns and area $5.0 \times 10^{-3}$ m$^2$ is placed perpendicular to a uniform magnetic field of strength 0.15 T. The field is removed in 0.10 s. Calculate the average induced emf.
>
> **Solution:**
> 1. Initial flux linkage: $N\Phi = NBA = 200 \times 0.15 \times 5.0 \times 10^{-3} = 0.15$ Wb
> 2. Final flux linkage $= 0$ (field removed)
> 3. $\varepsilon = -N\frac{\Delta \Phi}{\Delta t} = -\frac{0 - 0.15}{0.10} = +1.5$ V
> 4. The induced emf is **1.5 V**.

> **📝 Example Question**
>
> A step-up transformer has 400 turns on the primary coil and 8000 turns on the secondary coil. The primary voltage is 230 V. Calculate:
> (a) The secondary voltage
> (b) The secondary current if the primary current is 2.0 A (assume 100% efficiency)
>
> **Solution:**
> 1. (a) $\frac{V_s}{V_p} = \frac{N_s}{N_p} \implies V_s = V_p \times \frac{N_s}{N_p} = 230 \times \frac{8000}{400} = 4600$ V
> 2. (b) $V_p I_p = V_s I_s \implies I_s = \frac{V_p I_p}{V_s} = \frac{230 \times 2.0}{4600} = 0.10$ A

---

## 🧪 Key Required Practicals (Unit 3)

1. **Required practical 6 — charge and discharge of capacitors:** record potential difference against time. Analyse discharge using a plot of $\ln(V/V_0)$ against $t$. The gradient is $-1/(RC)$, so the time constant is the negative reciprocal of the gradient.
2. **Required practical 7 — transformer efficiency:** measure input and output rms potential differences and currents with a resistive load. Calculate efficiency from $V_sI_s/(V_pI_p)$ and investigate changes with load.

The simple harmonic systems investigation is **AS required practical 4**. Moving magnets through coils and investigating flux linkage are useful demonstrations, but are not separate named required practicals. See Section 6.1 of the [OxfordAQA specification](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-physics-specification.pdf).

---

## 🔗 Summary: Comparing Gravitational Fields and Electric Fields


> Gravitational and electric fields follow almost identical mathematical structures. Mastering the parallels between them is a powerful way to learn and revise both topics.

| | Gravitational Field | Electric Field | Meaning |
|---|---|---|---|
| **Force magnitude** | $F = G\dfrac{Mm}{r^2}$ | $F = \dfrac{1}{4\pi\varepsilon_0}\dfrac{|Qq|}{r^2}$ | Non-negative force magnitude |
| **Field-strength magnitude** | $g = \dfrac{GM}{r^2}$ | $E = \dfrac{|Q|}{4\pi\varepsilon_0 r^2}$ | State the direction separately |
| **Potential energy** | $E_p = -G\dfrac{Mm}{r}$ | $E_p = \dfrac{1}{4\pi\varepsilon_0}\dfrac{Qq}{r}$ | Energy due to position in the field |
| **Potential** | $V = \dfrac{E_p}{m} = -\dfrac{GM}{r}$ | $V = \dfrac{E_p}{q} = \dfrac{Q}{4\pi\varepsilon_0 r}$ | Energy per unit mass / charge |
| **Relation between field strength and potential** | $g_r = -\dfrac{dV}{dr}$ | $E_r = -\dfrac{dV}{dr}$ | Signed radial components; outwards positive |

## Similarities


* For point sources, both force magnitudes follow an **inverse-square** law: $F \propto \dfrac{1}{r^2}$.
* Both have field strength defined as **force per unit** (mass or charge): $g = \dfrac{F}{m}$, $E = \dfrac{F}{Q}$.
* Both have potential defined as **energy per unit** (mass or charge): $V = \dfrac{E_p}{m}$, $V = \dfrac{E_p}{Q}$.
* Both are **conservative fields**: work done is path-independent; potential energy depends only on position.
* In both fields, the signed radial component equals the **negative gradient of potential**: $g_r = -\dfrac{dV}{dr}$, $E_r = -\dfrac{dV}{dr}$, with outwards positive.
* Field strength is a **vector**; potential is a **scalar**. In radial-field formulae, distinguish a magnitude from a signed radial component.
* Both fields can be represented by **field lines** and **equipotential surfaces**.

## Differences


* Gravitational force is **always attractive**; electric force can be **attractive or repulsive** (depending on the signs of the charges).
* Gravitational potential is always **negative** (by convention, $V = 0$ at infinity); electric potential can be **positive or negative**.
* Gravitational field is produced by **mass** (always positive); electric field is produced by **charge** (can be positive or negative).
* For an electron and proton, the electric force is about $2.3\times10^{39}$ times the gravitational force. Compare $k|Qq|$ with $GMm$ for the actual particles; the numerical values of $k$ and $G$ alone cannot establish the force ratio because their units differ.

---

## 🔗 Summary: Electric Fields and Magnetic Fields


> Electric and magnetic fields are different in many ways, but together they form the basis of **electromagnetic induction** and the operation of **transformers** and **generators**.

| | Electric Field | Magnetic Field |
|---|---|---|
| **Source** | Stationary or moving charges | Electric currents and permanent magnets |
| **Acts on** | Any charge (stationary or moving) | Moving charges only |
| **Force law** | $F = QE$ | $F = BQv\sin\theta$ |
| **Force direction** | Parallel to field (for $+$ charge) | Perpendicular to both $v$ and $B$ |
| **Work done by field** | Can do work (changes KE) | **No work done** (force $\perp$ velocity) |
| **Effect on speed** | Can change speed | Cannot change speed |
| **Field lines** | Open (from $+$ to $-$) | Closed loops (no start or end) |

## How Electric and Magnetic Fields Are Connected

Electric currents produce magnetic fields. A change in magnetic flux linkage induces an emf (Faraday's law); the induced current opposes the change that causes it (Lenz's law). These ideas explain generators and transformers.

## Charged Particles in Electric and Magnetic Fields


| | In an Electric Field | In a Magnetic Field |
|---|---|---|
| **Force** | $F = QE$ | $F = BQv$ (when $v \perp B$) |
| **Direction of force** | Along $E$ for positive charge; opposite $E$ for negative charge | Perpendicular to $v$ and $B$; direction depends on charge sign |
| **Trajectory** | Parabolic for entry perpendicular to a uniform field, with no other forces | Circular in a uniform field when $v\perp B$, with no other forces |
| **Speed changes?** | Can change as the field does work | No — magnetic force is perpendicular to velocity |
| **KE changes?** | Can change | No, for the magnetic force alone |
| **Key equation** | $a = \dfrac{QE}{m}$ | $r = \dfrac{mv}{BQ}$, $T = \dfrac{2\pi m}{BQ}$ |

## Velocity Selector (Electric + Magnetic Fields Combined)


For perpendicular electric and magnetic fields, choose the particle velocity perpendicular to both fields so the electric and magnetic forces oppose each other:
* Electric force: $F_E = QE$
* Magnetic force: $F_B = BQv$

When the forces balance ($F_E = F_B$), the particle passes through **undeflected**:
$$QE = BQv \implies v = \frac{E}{B}$$

Only particles with speed $v = \dfrac{E}{B}$ are selected. This is the principle behind the **velocity selector** used in mass spectrometers.

> **📝 Example Question**
>
> A velocity selector has $E = 3.0 \times 10^4$ V m$^{-1}$ and $B = 0.20$ T. A proton ($q = 1.6 \times 10^{-19}$ C, $m = 1.67 \times 10^{-27}$ kg) enters the selector.
>
> (a) What speed must the proton have to pass through undeflected?
> (b) It then enters a region with only the magnetic field. Calculate the radius of its circular path.
>
> **Solution:**
> 1. (a) $v = \dfrac{E}{B} = \dfrac{3.0 \times 10^4}{0.20} = 1.5 \times 10^5$ m s$^{-1}$
> 2. (b) $r = \dfrac{mv}{BQ} = \dfrac{1.67 \times 10^{-27} \times 1.5 \times 10^5}{0.20 \times 1.6 \times 10^{-19}} = 7.8 \times 10^{-3}$ m $= 7.8$ mm
