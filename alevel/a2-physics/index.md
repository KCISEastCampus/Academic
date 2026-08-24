---
layout: subjects
title: A2 Physics
mathjax: true
grade: a2
subject: physics
---

# 📘 A-level Paper 1 (PH03): Fields and Their Consequences
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
    * **Electrostatic force** (electron orbiting a nucleus)

### 1.4 Vertical Circular Motion
For an object moving in a **vertical** circle, the speed changes due to gravity.

| Position | Speed | Tension / Normal Force |
|----------|-------|----------------------|
| Highest point | Minimum | Minimum ($T + mg = \frac{mv^2}{r}$) |
| Lowest point | Maximum | Maximum ($T - mg = \frac{mv^2}{r}$) |

* **Minimum speed at the top** (for a mass on a string): $v_{\text{min}} = \sqrt{gr}$ (when $T = 0$)
* **Minimum speed at the top** (for a car over a bridge): $v_{\text{min}} = \sqrt{gr}$ (when $N = 0$)

### 1.5 Simple Harmonic Motion (SHM)
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
    * Maximum velocity: $v_{\text{max}} = A\omega$ (at equilibrium position)
    * Maximum acceleration: $a_{\text{max}} = A\omega^2$ (at maximum displacement)
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
| $v$ vs $t$ | Sine curve (phase-shifted by $\pi/2$) | Maximum at $x = 0$ |
| $a$ vs $t$ | Cosine curve (phase-shifted by $\pi$) | Maximum at $x = \pm A$ |

* **Energy in SHM**: Total energy is conserved, continuously converting between KE and elastic/gravitational PE.
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

### 2.1 Gravitational Field Strength
* **Definition**: The gravitational force per unit mass placed at a point in the field.
    $$g = \frac{F}{m}$$
    * $g$ has units of N kg$^{-1}$ (numerically equal to m s$^{-2}$).

### 2.2 Newton's Law of Gravitation
Every particle attracts every other particle with a force proportional to the product of their masses and inversely proportional to the square of the distance between them:
$$F = -\frac{GMm}{r^2}$$
* $G$ = Universal gravitational constant $= 6.67 \times 10^{-11}$ N m$^2$ kg$^{-2}$
* $M, m$ = masses of the two objects
* $r$ = distance between their centres
* The negative sign indicates an **attractive** force.

### 2.3 Gravitational Field of a Point Mass
The gravitational field strength at distance $r$ from a point mass $M$:
$$g = \frac{GM}{r^2}$$

### 2.4 Gravitational Potential
* **Definition**: The work done per unit mass in bringing a small test mass from infinity to a point in the field.
    $$\phi = -\frac{GM}{r}$$
    * $\phi$ is always **negative** (by convention, $\phi = 0$ at infinity).
    * Units: J kg$^{-1}$

### 2.5 Gravitational Potential Energy
The gravitational potential energy of a mass $m$ at a point where the gravitational potential is $\phi$:
$$E_p = m\phi = -\frac{GMm}{r}$$

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

* **Geostationary orbits**:
    * Orbit above the equator in the same direction as Earth's rotation.
    * Period $= 24$ hours.
    * Fixed position above the Earth's surface.
    * Altitude $\approx 3.58 \times 10^7$ m.
    * Used for telecommunications and weather monitoring.

> **📝 Example Question**
>
> A satellite orbits Earth at a height of 400 km above the surface. Given $R_E = 6.37 \times 10^6$ m and $M_E = 5.97 \times 10^{24}$ kg, calculate the orbital speed and period.
>
> **Solution:**
> 1. $r = R_E + h = 6.37 \times 10^6 + 4.00 \times 10^5 = 6.77 \times 10^6$ m
> 2. $v = \sqrt{\frac{GM}{r}} = \sqrt{\frac{6.67 \times 10^{-11} \times 5.97 \times 10^{24}}{6.77 \times 10^6}} = \sqrt{5.89 \times 10^7} = 7.67 \times 10^3$ m s$^{-1}$
> 3. $T = \frac{2\pi r}{v} = \frac{2\pi \times 6.77 \times 10^6}{7.67 \times 10^3} = 5540$ s $\approx 92.3$ min

---

## 3. ⚡ Electric Fields and Capacitance (3.8)

### 3.1 Electric Field Strength
* **Definition**: The force per unit positive charge placed at a point in the field.
    $$E = \frac{F}{Q}$$
    * $E$ has units of N C$^{-1}$ or V m$^{-1}$.

### 3.2 Coulomb's Law
The force between two point charges:
$$F = \frac{Q_1 Q_2}{4\pi\varepsilon_0 r^2}$$
* $\varepsilon_0$ = permittivity of free space $= 8.85 \times 10^{-12}$ C$^2$ N$^{-1}$ m$^{-2}$
* $k = \frac{1}{4\pi\varepsilon_0} = 8.99 \times 10^9$ N m$^2$ C$^{-2}$

### 3.3 Electric Field of a Point Charge
$$E = \frac{Q}{4\pi\varepsilon_0 r^2}$$

### 3.4 Electric Potential
* **Definition**: The work done per unit positive charge in bringing a small test charge from infinity to a point in the field.
    $$V = \frac{Q}{4\pi\varepsilon_0 r}$$
    * $V$ is **positive** for a positive source charge and **negative** for a negative source charge.
    * Units: V (volts) or J C$^{-1}$

### 3.5 Electric Potential Energy
$$E_p = QV = \frac{Q_1 Q_2}{4\pi\varepsilon_0 r}$$

### 3.6 Uniform Electric Field
Between two parallel plates separated by distance $d$ with potential difference $V$:
$$E = \frac{V}{d}$$
* Field lines are **parallel and equally spaced** (uniform field).
* Field lines go from **positive to negative** plate.

### 3.7 Comparison of Gravitational and Electric Fields

| Property | Gravitational Field | Electric Field |
|----------|-------------------|----------------|
| Source | Mass | Charge |
| Force law | $F = -\frac{GMm}{r^2}$ | $F = \frac{Q_1Q_2}{4\pi\varepsilon_0 r^2}$ |
| Field strength | $g = \frac{GM}{r^2}$ | $E = \frac{Q}{4\pi\varepsilon_0 r^2}$ |
| Potential | $\phi = -\frac{GM}{r}$ | $V = \frac{Q}{4\pi\varepsilon_0 r}$ |
| Potential energy | $E_p = -\frac{GMm}{r}$ | $E_p = \frac{Q_1Q_2}{4\pi\varepsilon_0 r}$ |
| Nature | Always attractive | Attractive or repulsive |

### 3.8 Capacitance
* **Definition**: The ability of a component to store charge. The charge stored per unit potential difference.
    $$C = \frac{Q}{V}$$
    * $C$ = capacitance (F, farads)
    * $Q$ = charge (C)
    * $V$ = potential difference (V)
    * $1 \text{ F} = 1 \text{ C V}^{-1}$

### 3.9 Parallel Plate Capacitor
For a parallel plate capacitor with plate area $A$, separation $d$, and dielectric of permittivity $\varepsilon$:
$$C = \frac{\varepsilon_0 \varepsilon_r A}{d}$$
* $\varepsilon_r$ = relative permittivity (dielectric constant) of the material between the plates

### 3.10 Energy Stored in a Capacitor
$$E = \frac{1}{2}QV = \frac{1}{2}CV^2 = \frac{Q^2}{2C}$$
* On a $Q$–$V$ graph, the energy stored equals the **area under the graph** (a triangle).

> **📝 Example Question**
>
> Two point charges, $+4.0 \times 10^{-6}$ C and $-3.0 \times 10^{-6}$ C, are separated by 0.20 m. Calculate the force between them and state its nature.
>
> **Solution:**
> 1. $F = \frac{1}{4\pi\varepsilon_0} \times \frac{Q_1 Q_2}{r^2} = 8.99 \times 10^9 \times \frac{4.0 \times 10^{-6} \times 3.0 \times 10^{-6}}{(0.20)^2}$
> 2. $F = 8.99 \times 10^9 \times \frac{1.2 \times 10^{-11}}{0.040} = 8.99 \times 10^9 \times 3.0 \times 10^{-10} = 2.7$ N
> 3. The force is **attractive** (opposite charges).

---

## 4. 📉 Exponential Change (3.9)

### 4.1 Capacitor Charging and Discharging
* **Charging**: When a capacitor is connected to a DC supply through a resistor:
    * Charge increases exponentially: $Q = Q_0(1 - e^{-t/RC})$
    * PD increases: $V = V_0(1 - e^{-t/RC})$
    * Current decreases exponentially: $I = I_0 e^{-t/RC}$
* **Discharging**: When a charged capacitor is connected through a resistor:
    * Charge decays exponentially: $Q = Q_0 e^{-t/RC}$
    * PD decays: $V = V_0 e^{-t/RC}$
    * Current decays: $I = I_0 e^{-t/RC}$

### 4.2 Time Constant (Capacitor)
$$\tau = RC$$
* $\tau$ = time constant (s)
* $R$ = resistance ($\Omega$)
* $C$ = capacitance (F)
* After time $\tau$, the charge (or PD) falls to $1/e \approx 37\%$ of its initial value.
* After time $5\tau$, the capacitor is considered fully discharged (< 1%).

### 4.3 Charging and Discharging Graphs

| Quantity | Charging | Discharging |
|----------|----------|-------------|
| $Q$ vs $t$ | Rises exponentially to $Q_0$ | Decays exponentially to 0 |
| $V$ vs $t$ | Rises exponentially to $V_0$ | Decays exponentially to 0 |
| $I$ vs $t$ | Decays exponentially from $I_0$ to 0 | Decays exponentially from $I_0$ to 0 (opposite direction) |

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

### 🧪 Key Required Practicals (Unit 3)
1.  **Investigating simple harmonic motion**: Use a ticker-tape timer or motion sensor to investigate the SHM of a mass-spring system or simple pendulum. Verify $T = 2\pi\sqrt{m/k}$ or $T = 2\pi\sqrt{L/g}$.
2.  **Charging and discharging a capacitor**: Use a voltmeter or data logger to investigate the exponential decay of PD, charge, or current during discharge. Determine the time constant $\tau = RC$.
3.  **Investigating electromagnetic induction**: Move a magnet into and out of a coil connected to a galvanometer or datalogger to observe the effects described by Faraday's and Lenz's laws.
4.  **Investigating the factors affecting magnetic flux linkage**: Use a search coil and datalogger to investigate how flux linkage depends on angle, number of turns, and area.

