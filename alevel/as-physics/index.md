---
layout: subjects
title: AS Physics
mathjax: true
grade: as
subject: as-physics
permalink: /alevel/as-physics/
---

# AS Physics

> **Qualification**: OxfordAQA International AS Physics (9630) · Modular
> **Assessment**: Unit 1 (Mechanics, materials and atoms) + Unit 2 (Electricity, waves and particles) · 2h each · 80 marks each · 50% of AS each

## 📘 Unit 1: Mechanics, Materials and Atoms
`(Specification Sections: 3.1, 3.2, 3.3)`

---

### 1. 📏 Measurements & Errors (3.1)

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

### 2. 🚜 Mechanics (3.2.1 – 3.2.8)

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
> 1.  Gain in KE $= \frac{1}{2} mv^2 = 0.5 \times 1000 \times 20^2 = 200000 \text{ J}$.
> 2.  Work Done = Gain in Energy = $200000 \text{ J}$.
> 3.  Average Power $P = \frac{W}{t} = \frac{200000}{10} = 20000 \text{ W} = 20 \text{ kW}$.

---

### 3. 🏗️ Materials (3.2.9 – 3.2.10)

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

### 4. ⚛️ Particles, Radiation & Radioactivity (3.3)

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

---

## ⚡ Unit 2: Electricity, Waves and Particles
`(Specification Sections: 3.4, 3.5)`

---

### 5. 🔌 Electricity (3.4)

### 5.1 Basics of Electricity
* **Electric Current ($I$)**: Rate of flow of charge. $$I = \frac{Q}{t}$$
* **Potential Difference ($V$)**: Work done per unit charge. $$V = \frac{W}{Q}$$
* **Resistance ($R$)**: Defined as the ratio of potential difference to current. $$R = \frac{V}{I}$$

### 5.2 Current–Voltage Characteristics
* **Ohm's Law**: $I \propto V$ under constant physical conditions (a special case for ohmic conductors).
* **Ohmic conductor**: Linear $I$–$V$ graph through origin.
* **Semiconductor diode**: Current flows in one direction only; negligible current in reverse bias.
* **Filament lamp**: Resistance increases with temperature; curved $I$–$V$ graph.
* Unless stated, treat **ammeters as ideal** (zero resistance) and **voltmeters as ideal** (infinite resistance).

> **📝 Note**: Questions can be set with either $I$ or $V$ on the horizontal axis of the characteristic graph.

### 5.3 Resistivity
* **Resistivity ($\rho$)**: A material property. $$\rho = \frac{RA}{L}$$
* **Effect of temperature on resistance**:
    * **Metal conductors**: Resistance **increases** with temperature (more lattice vibrations scatter electrons).
    * **Thermistors**: **Negative temperature coefficient (ntc)** only — resistance **decreases** as temperature rises.

### 5.4 Circuits
* **Resistors in series**: $$R_T = R_1 + R_2 + R_3 + \dots$$
* **Resistors in parallel**: $$\frac{1}{R_T} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + \dots$$
* **Energy and power**: $$E = IVt, \qquad P = IV = I^2R = \frac{V^2}{R}$$
* **Cells**: In series (voltages add); identical cells in parallel (same voltage, larger current capacity).
* **Conservation** in dc circuits:
    * **Charge**: Current divides at junctions (Kirchhoff's current law).
    * **Energy**: Sum of potential differences around a loop equals the applied emf.

### 5.5 Potential Divider
* Used to supply a **constant or variable potential difference** from a power supply.
* The potentiometer as a measuring instrument is **not required**.
* Common applications: **variable resistors, thermistors, and light dependent resistors (LDR)** in the divider circuit.
* For a divider: output voltage $V_{\text{out}} = V_{\text{in}} \times \frac{R_2}{R_1 + R_2}$.

### 5.6 Electromotive Force and Internal Resistance
* **emf ($\varepsilon$)**: Energy transferred per unit charge from the source. $$\varepsilon = \frac{E}{Q}$$
* **Internal resistance ($r$)**: $$ \varepsilon = I(R + r)$$
* **Terminal pd** $= \varepsilon - Ir$ — internal resistance causes the terminal pd to **drop** as current increases.
* Calculations assume internal resistance is **not negligible** unless stated.

> **📝 Example Question**
> 
> A battery of emf 6.0 V and internal resistance 0.5 Ω is connected to a 2.5 Ω resistor. Calculate the current and the terminal pd.
>
> **Solution:**
> 1. Total resistance $R_{\text{total}} = 2.5 + 0.5 = 3.0 \, \Omega$.
> 2. $I = \frac{\varepsilon}{R + r} = \frac{6.0}{3.0} = 2.0 \text{ A}$.
> 3. Terminal pd $V = \varepsilon - Ir = 6.0 - (2.0 \times 0.5) = 5.0 \text{ V}$.

**Required Practical 3 🧪**: Investigation of the emf and internal resistance of cells/batteries by measuring the variation of terminal pd with current.

---

### 6. 🌊 Oscillations and Waves (3.5)

### 6.1 Oscillating Systems
* **Mass–spring system**: $$T = 2\pi\sqrt{\frac{m}{k}}$$
* **Simple pendulum**: $$T = 2\pi\sqrt{\frac{l}{g}}$$
* **Energy variation**: $E_k$ and $E_p$ interchange; total energy remains constant (in SHM).
* **Damping**: Reduces amplitude over time (energy lost to surroundings).

**Required Practical 4 🧪**: Investigation into simple harmonic systems using a mass-spring system and a simple pendulum.

### 6.2 Forced Vibrations and Resonance
* **Free vibrations**: Oscillate at the natural frequency.
* **Forced vibrations**: Driven at the driving frequency.
* **Resonance**: Large-amplitude oscillation when driving frequency $\approx$ natural frequency.
* **Damping** reduces the sharpness of the resonance peak.
* Examples: mechanical systems and situations involving stationary waves.

### 6.3 Progressive Waves
* Oscillation of particles of the medium (energy transfer without net mass transfer).
* Key quantities: **amplitude, frequency, wavelength, speed, phase, phase difference**.
* **Wave equation**: $$c = f\lambda, \qquad f = \frac{1}{T}$$
* **Phase difference**: measured in radians/degrees or as fractions of a cycle.

### 6.4 Longitudinal and Transverse Waves
* **Transverse**: particles oscillate perpendicular to energy propagation (e.g., waves on a string, EM waves).
* **Longitudinal**: particles oscillate parallel to energy propagation (e.g., sound).
* All electromagnetic waves travel at the same speed in a vacuum.
* Use of **ultrasound** in medicine.

### 6.5 Principle of Superposition and Stationary Waves
* **Superposition**: when two waves meet, their displacements add.
* **Stationary waves**: formed by two waves of the same frequency travelling in opposite directions.
* **Nodes** (no displacement) and **antinodes** (maximum displacement) on strings.
* **First harmonic** on a string: $$f = \frac{1}{2l}\sqrt{\frac{T}{\mu}}$$

### 6.6 Interference
* **Path difference** and **coherence**.
* **Young's double-slit experiment**: two coherent sources (or single source + double slits) produce an interference pattern.
* **Fringe spacing**: $$w = \frac{\lambda D}{s}$$
* **White light** produces a pattern with coloured fringes (central white fringe).
* ⚠️ Be aware of **safety issues** associated with lasers.

### 6.7 Diffraction
* **Single slit**: diffraction pattern with a central maximum and weaker side maxima.
* Central maximum width varies with wavelength (longer $\lambda$ → wider) and slit width (narrower slit → wider).
* **Diffraction grating** at normal incidence: $$d\sin\theta = n\lambda$$
* Applications of diffraction gratings (e.g., spectroscopy). The spectrometer is **not tested**.

### 6.8 Refraction at a Plane Surface
* **Refractive index**: $$n = \frac{c}{c_s}$$ (refractive index of air $\approx 1$).
* **Snell's law**: $$n_1\sin\theta_1 = n_2\sin\theta_2$$
* **Total internal reflection**: $$\sin c = \frac{n_2}{n_1}$$
* **Fibre optics**: function of the cladding (lower refractive index, protects, prevents signal loss).

### 6.9 Collisions of Electrons with Atoms
* **Ionisation** and **excitation** — e.g., in a fluorescent tube.
* **The electron volt (eV)**: energy gained by an electron accelerated through 1 V. $1 \text{ eV} = 1.6 \times 10^{-19} \text{ J}$.
* **Line spectra** (e.g., atomic hydrogen) as evidence for transitions between discrete energy levels.
    $$hf = E_1 - E_2$$
* **X-rays**: characteristic and line spectrum; basic structure and operation of an X-ray tube; medical applications.
* Be able to convert between eV and J.

### 6.10 Photoelectric Effect
* **Photon model** of electromagnetic radiation; Planck constant.
    $$E = hf = \frac{hc}{\lambda}$$
* **Photoelectric effect**: emission of electrons when light (above threshold frequency) hits a metal surface.
* **Threshold frequency**: minimum frequency to release electrons.
* **Work function ($\phi$)**: minimum energy to remove an electron.
* **Stopping potential**: voltage needed to stop the most energetic photoelectrons.
    $$hf = \phi + E_{k,\text{max}}$$

### 6.11 Wave–Particle Duality
* **Electron diffraction** → particles possess wave properties.
* **Photoelectric effect** → electromagnetic waves have a particulate nature.
* **de Broglie equation**: $$\lambda = \frac{h}{mv}$$ where $mv$ is the momentum.
* Diffraction amount changes with particle momentum (higher momentum → smaller wavelength → less diffraction).
* Appreciation of how understanding of the nature of matter changes over time.

> **📝 Example Question**
> 
> Calculate the de Broglie wavelength of an electron moving at $2.0 \times 10^6 \text{ m s}^{-1}$. (Electron mass $m_e = 9.11 \times 10^{-31} \text{ kg}$; $h = 6.63 \times 10^{-34} \text{ J s}$.)
>
> **Solution:**
> 1. Momentum $p = mv = 9.11 \times 10^{-31} \times 2.0 \times 10^6 = 1.82 \times 10^{-24} \text{ kg m s}^{-1}$.
> 2. $\lambda = \frac{h}{p} = \frac{6.63 \times 10^{-34}}{1.82 \times 10^{-24}} \approx 3.64 \times 10^{-10} \text{ m}$ (about 0.36 nm).

---

### 🧪 Key Required Practicals (Unit 2)
1.  **emf and internal resistance**: Measure terminal pd at different currents; gradient of $V$–$I$ graph $= -r$.
2.  **Simple harmonic systems**: Mass-spring and simple pendulum; measure $T$ and compare with theory.