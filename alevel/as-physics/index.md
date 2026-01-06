---
layout: subjects
title: AS Physics
mathjax: true
grade: as
subject: physics
---

# 📘 Unit 1: Mechanics, Materials and Atoms
`(Specification Sections: 3.1, 3.2, 3.3)`

---

## 1. 📏 Measurements & Errors (3.1)

### 1.1 SI Units and Prefixes
* **Base Units**: Mass (kg), Length (m), Time (s), Current (A), Temperature (K), Amount of substance (mol).
* **Prefixes**: You must be able to convert between these:

| Prefix | Symbol | Power of 10 |
|--------|--------|-------------|
| tera | T | $10^{12}$ |
| giga | G | $10^9$ |
| mega | M | $10^6$ |
| kilo | k | $10^3$ |
| milli | m | $10^{-3}$ |
| micro | $\mu$ | $10^{-6}$ |
| nano | n | $10^{-9}$ |
| pico | p | $10^{-12}$ |
| femto | f | $10^{-15}$ |

### 1.2 Errors and Uncertainties
* **Random Error**: Unpredictable fluctuations in readings. **Remedy**: Take repeat readings and calculate a mean.
* **Systematic Error**: Readings differ from the true value by a consistent amount (e.g., Zero Error). **Remedy**: Calibrate equipment; cannot be fixed by repeats.
* **Precision**: The degree of spread of repeated measurements (consistency).
* **Accuracy**: Closeness of the measured value to the true value.
* **Calculating Uncertainty**:
    * **Adding/Subtracting ($y = a \pm b$)**: Add **absolute** uncertainties ($\Delta y = \Delta a + \Delta b$).
    * **Multiplying/Dividing ($y = ab$ or $y=a/b$)**: Add **percentage** uncertainties ($\frac{\Delta y}{y} = \frac{\Delta a}{a} + \frac{\Delta b}{b}$).
    * **Powers ($y = x^n$)**: Multiply percentage uncertainty by $n$ ($\frac{\Delta y}{y} = n \times \frac{\Delta x}{x}$).

> **📝 Example Question**
> 
> A wire has length $L = 2.00 \pm 0.01 \text{ m}$ and radius $r = 1.0 \pm 0.1 \text{ mm}$. Calculate the percentage uncertainty in the volume $V = \pi r^2 L$.
>
> **Solution:**
> 1.  % uncert in $L = \frac{0.01}{2.00} \times 100 = 0.5\%$
> 2.  % uncert in $r = \frac{0.1}{1.0} \times 100 = 10\%$
> 3.  Volume formula depends on $r^2$, so we multiply $r$'s uncertainty by 2.
> 4.  Total % Uncertainty $= 0.5\% + (2 \times 10\%) = 20.5\%$

---

## 2. 🚜 Mechanics (3.2.1 – 3.2.8)

### 2.1 Vectors and Moments
* **Scalars vs Vectors**: Scalars have magnitude only (mass, speed); Vectors have magnitude and direction (force, velocity).
* **Resolving Vectors**:
    * Horizontal component: $F_x = F \cos \theta$
    * Vertical component: $F_y = F \sin \theta$ (where $\theta$ is angle to horizontal).
* **Moment**: $Force \times \text{perpendicular distance from pivot}$.
* **Principle of Moments**: For an object in equilibrium, $\Sigma \text{Clockwise Moments} = \Sigma \text{Anticlockwise Moments}$.
* **Couple**: Two equal and opposite coplanar forces. Moment = $F \times d$ (perpendicular distance between forces).

### 2.2 Kinematics (SUVAT)
Equations for **uniform acceleration** (motion in a straight line):
1.  $v = u + at$
2.  $s = ut + \frac{1}{2}at^2$
3.  $v^2 = u^2 + 2as$
4.  $s = \frac{(u+v)}{2}t$

* **Graphs**:
    * Gradient of **displacement-time** = Velocity.
    * Gradient of **velocity-time** = Acceleration.
    * Area under **velocity-time** = Displacement.

### 2.3 Projectile Motion
Independent effect of motion in horizontal and vertical directions.
* **Horizontal**: Constant velocity ($a=0$). Use $s = vt$.
* **Vertical**: Constant acceleration ($a = g = 9.81 \text{ m s}^{-2}$). Use SUVAT.

### 2.4 Newton's Laws & Momentum
* **Newton’s 2nd Law**: Rate of change of momentum is proportional to net force. $F = \frac{\Delta (mv)}{\Delta t}$ (or $F=ma$ if mass is constant).
* **Momentum ($p$)**: $p = mv$. (Vector quantity).
* **Impulse**: Change in momentum ($\Delta p = F \Delta t$). Equals area under Force-Time graph.
* **Conservation of Momentum**: Total momentum before collision = Total momentum after collision (in a closed system).

### 2.5 Work, Energy and Power
* **Work Done**: $W = F s \cos \theta$.
* **Power**: Rate of energy transfer. $P = \frac{\Delta W}{\Delta t} = Fv$.
* **Efficiency**: $\frac{\text{Useful Output Power}}{\text{Input Power}} \times 100\%$.
* **Conservation of Energy**:
    * **GPE**: $\Delta E_p = mg\Delta h$
    * **KE**: $E_k = \frac{1}{2}mv^2$

> **📝 Example Question**
> 
> A car of mass 1000 kg accelerates from rest to $20 \text{ m s}^{-1}$ in 10 s. Neglecting resistance, calculate the average power output.
>
> **Solution:**
> 1.  Gain in KE $= \frac{1}{2} mv^2 = 0.5 \times 1000 \times 20^2 = 200,000 \text{ J}$.
> 2.  Work Done = Gain in Energy = $200,000 \text{ J}$.
> 3.  Average Power $P = \frac{W}{t} = \frac{200,000}{10} = 20,000 \text{ W} = 20 \text{ kW}$.

---

## 3. 🏗️ Materials (3.2.9 – 3.2.10)

### 3.1 Bulk Properties
* **Density ($\rho$)**: $\rho = \frac{m}{V}$.
* **Hooke's Law**: $F = k \Delta L$ (Force $\propto$ Extension).
    * $k$ = Spring constant (stiffness).
* **Elastic Strain Energy**: Energy stored in a stretched material.
    * $E = \frac{1}{2}F \Delta L$ or $E = \frac{1}{2}k(\Delta L)^2$.
    * Equal to the **area under the Force-Extension graph**.

### 3.2 The Young Modulus
A measure of the stiffness of a material, independent of its dimensions.
* **Tensile Stress ($\sigma$)**: Force per unit cross-sectional area. $\sigma = \frac{F}{A}$ (Unit: Pa or N m$^{-2}$).
* **Tensile Strain ($\epsilon$)**: Extension per unit original length. $\epsilon = \frac{\Delta L}{L}$ (No units).
* **Young Modulus ($E$)**:
    $$E = \frac{\text{Stress}}{\text{Strain}} = \frac{FL}{A \Delta L}$$
* **Stress-Strain Graph**: The **gradient** of the linear section is the Young Modulus.

**Required Practical 2 🧪**: Investigation of load-extension graph for a wire to determine Young Modulus.

---

## 4. ⚛️ Particles, Radiation & Radioactivity (3.3)

### 4.1 Constituents of the Atom
* **Structure**: Protons and Neutrons in the nucleus; Electrons in shells.
* **Specific Charge**: Charge-to-mass ratio of a particle or nucleus.
    $$\text{Specific Charge} = \frac{\text{Charge (C)}}{\text{Mass (kg)}}$$
* **Notation**: $_Z^A\text{X}$ where $A$ = Nucleon number (Mass number), $Z$ = Proton number (Atomic number).

### 4.2 Particles and Antiparticles
* Every particle has an **antiparticle** with the same mass and rest energy but opposite charge.
    * Electron ($e^-$) $\leftrightarrow$ Positron ($e^+$)
    * Proton ($p$) $\leftrightarrow$ Antiproton ($\bar{p}$)
    * Neutron ($n$) $\leftrightarrow$ Antineutrino ($\bar{n}$) *(Note: Neutron/Antineutron have 0 charge but different internal structures)*.
* **Annihilation**: Particle and antiparticle collide $\rightarrow$ Mass converted to energy (2 photons).
* **Pair Production**: A high-energy photon converts into a particle-antiparticle pair.

### 4.3 Radioactivity
* **Decay Modes**:
    * **Alpha ($\alpha$)**: $_2^4\text{He}$. Highly ionising, low penetration (stopped by paper).
    * **Beta-minus ($\beta^-$)**: Electron. Neutron turns into proton. $_0^1n \rightarrow _1^1p + _{-1}^0e + \bar{\nu}_e$ (Antineutrino).
    * **Beta-plus ($\beta^+$)**: Positron. Proton turns into neutron. $_1^1p \rightarrow _0^1n + _{+1}^0e + \nu_e$ (Neutrino).
    * **Gamma ($\gamma$)**: EM wave. Low ionising, high penetration (stopped by lead).
* **Inverse Square Law**: Intensity of gamma radiation ($I$) varies with distance ($r$).
    $$I = \frac{k}{r^2}$$

> **📝 Example Question**
> 
> Calculate the specific charge of a Helium-4 nucleus ($^4_2\text{He}$).
> (Proton mass $\approx$ Neutron mass $\approx 1.67 \times 10^{-27} \text{ kg}$; $e = 1.60 \times 10^{-19} \text{ C}$).
>
> **Solution:**
> 1.  Nucleus has 2 protons and 2 neutrons.
> 2.  Total Charge $Q = 2 \times 1.60 \times 10^{-19} = 3.2 \times 10^{-19} \text{ C}$.
> 3.  Total Mass $m = 4 \times 1.67 \times 10^{-27} = 6.68 \times 10^{-27} \text{ kg}$.
> 4.  Specific Charge $= \frac{3.2 \times 10^{-19}}{6.68 \times 10^{-27}} \approx 4.79 \times 10^7 \text{ C kg}^{-1}$.

---

### 🧪 Key Required Practicals (Unit 1)
1.  **Determination of $g$ by freefall**: Plot $s$ against $t^2$. Gradient $= g/2$.
2.  **Young Modulus of a wire**: Measure diameter (micrometer), length, and extension. Plot Stress vs Strain. Gradient $= E$.