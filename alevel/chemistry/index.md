---
layout: subjects
title: AS Chemistry
mathjax: true
grade: as
subject: chem
---
# Unit 1 Structures and Energetics 

## 1. Atomic Structure

### 1.1 Electron Arrangement
- Electrons are arranged in **electron shells** (principal energy levels)
- Each main shell can hold up to **2n²** electrons
- Shells are further divided into **s, p, d, f subshells** with slightly different energy levels

#### Energy Level Splitting:
The table below summarizes the number and types of subshells present in each principal energy level:

| Principal Level (n) | Number of Subshells | Subshell Types |
| ------------------- | ------------------- | -------------- |
| 1                   | 1                   | s              |
| 2                   | 2                   | s, p           |
| 3                   | 3                   | s, p, d        |
| 4                   | 4                   | s, p, d, f     |

### 1.2 Atomic Orbitals
#### Orbital Shapes & Numbers:

| Orbital | Shape     | Number per Principal Level |
| ------- | --------- | -------------------------- |
| s       | Spherical | 1 (in every level)         |
| p       | Dumbbell  | 3 (from level 2 upwards)   |
| d       | Various   | 5 (from level 3 upwards)   |
| f       | Various   | 7 (from level 4 upwards)   |

### 1.3 Order of Filling Orbitals
Orbitals are not filled in numerical order due to energy level overlap.  
Example: **4s orbital fills before 3d**

#### Filling Order Mnemonic:

<div class="orbital-filling-order" style="background: var(--surface); padding: 1.5rem; border-radius: 12px; margin: 1rem 0; box-shadow: 0 4px 12px rgba(0,0,0,0.15); border: 1px solid rgba(var(--accent-ig-rgb), 0.2);">
  <div style="color: var(--text); font-family: 'Courier New', monospace; font-size: 1.1em; line-height: 2; text-align: center; letter-spacing: 0.05em;">
    1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d → 5p → 6s → 4f → 5d → 6p → 7s → 5f → 6d → 7p
  </div>
</div>

### 1.4 Rules for Filling Orbitals
- **Aufbau Principle**: Electrons enter the lowest available energy level
- **Hund's Rule**: Electrons prefer to occupy orbitals singly before pairing up (due to repulsion)

---

## 2. Amount of Substance

### 2.1 The Mole Concept
- **1 mole** = $6.02 \times 10^{23}$ particles (Avogadro's constant)
- Connects microscopic particle numbers with macroscopic mass

### 2.2 Key Formulas

| Formula | Purpose |
|---------|---------|
| $n = \frac{m}{M}$ <br> where $n$ = moles, $m$ = mass (g), $M$ = molar mass (g/mol) | Calculate moles from mass |
| $m = n \times M$ <br> where $m$ = mass, $n$ = moles, $M$ = molar mass | Calculate mass from moles |
| $n = c \times V$ <br> where $c$ = concentration (mol/dm³), $V$ = volume (dm³) | Solution calculations |
| $n = \frac{c \times V}{1000}$ <br> where $V$ is in cm³ | Solution calculations (cm³) |

### 2.3 Reacting Mass Calculations
- Use balanced chemical equations to find mole ratios
- Example:  
  $${CaCO3 + 2HCl -> CaCl2 + CO2 + H2O}$$
  1 mole ${CaCO3}$ reacts with 2 moles ${HCl}$

### 2.4 Ideal Gas Equation

The relationship between pressure, volume, moles, and temperature:

$$PV = nRT$$

Where:
- $P$ = Pressure (Pa)
- $V$ = Volume (m³)
- $n$ = Number of moles
- $R$ = Gas constant (8.31 J K⁻¹ mol⁻¹)
- $T$ = Temperature (K)

**Molar Volume at RTP:**  
At room temperature and pressure, 1 mole of any gas occupies approximately **24 dm³**

---

## 3. Mass Spectrometry

### 3.1 Instrument Components

<div class="row g-2 my-3 justify-content-center align-items-stretch">
  <div class="col-12 col-md-3">
    <div class="card h-100 text-center">
      <div class="card-body fw-semibold">Ion Source</div>
    </div>
  </div>
  <!-- arrow: horizontal on md+, vertical on xs/sm -->
  <div class="col-auto d-none d-md-flex align-items-center fs-2 text-muted">→</div>
  <div class="col-12 d-md-none text-center text-muted">↓</div>

  <div class="col-12 col-md-3">
    <div class="card h-100 text-center">
      <div class="card-body fw-semibold">Analyser</div>
    </div>
  </div>
  <div class="col-auto d-none d-md-flex align-items-center fs-2 text-muted">→</div>
  <div class="col-12 d-md-none text-center text-muted">↓</div>

  <div class="col-12 col-md-3">
    <div class="card h-100 text-center">
      <div class="card-body fw-semibold">Detector</div>
    </div>
  </div>
</div>

### 3.2 Time of Flight (TOF) Process

#### Stage 1: Ionisation

Electrons are removed from atoms using one of two methods:

- **Electron Impact**: High-energy electrons knock out electrons to form 1+ ions  
  $$X_{(g)} + e^- \rightarrow X^+_{(g)} + 2e^-$$

- **Electrospray Ionisation**: Sample gains protons to form $XH^+$ ions  
  $$X_{(g)} + H^+ \rightarrow XH^+_{(g)}$$

#### Stage 2: Acceleration

Positive ions are accelerated through an electric field, gaining kinetic energy:

$$KE = \frac{1}{2}mv^2$$

All ions receive the same kinetic energy regardless of their mass.

#### Stage 3: Ion Drift

Ions travel through the flight tube at different speeds:

$$v = \sqrt{\frac{2KE}{m}}$$

**Key principle:** Lighter ions travel faster than heavier ions

#### Stage 4: Detection

The time taken for ions to reach the detector is measured:

- Ions hit detector plate and produce a signal
- Signal strength ∝ number of ions
- Computer plots mass vs. intensity → **mass spectrum**

### 3.3 Calculating Relative Atomic Mass

For an element with multiple isotopes:

$$A_r = \frac{\sum(m_i \times a_i)}{\sum a_i}$$

where:
- $m_i$ = mass of isotope
- $a_i$ = relative abundance (%)

**Example - Chlorine:**

With isotopes $^{35}Cl$ (75%) and $^{37}Cl$ (25%):

$$A_r = \frac{(35 \times 75) + (37 \times 25)}{100} = 35.5$$

---

## 4. Ionisation Energy

### 4.1 Definitions

**First Ionisation Energy** is the energy required to remove one mole of electrons from one mole of gaseous atoms:

$$Na_{(g)} \rightarrow Na^+_{(g)} + e^-$$

$IE_1$ is always the easiest to remove.

**Successive Ionisation Energies** ($IE_2$, $IE_3$, etc.) are the energies needed to remove subsequent electrons, and become progressively harder as electrons are removed from filled shells.

### 4.2 Factors Affecting Ionisation Energy

Three main factors determine the value of ionisation energy:

1. Atomic Radius (Distance from Nucleus)
- **Effect**: As distance from nucleus increases, ionisation energy decreases
- Greater distance = weaker electrostatic attraction = easier to remove electron

2. Nuclear Charge (Number of Protons)
- **Effect**: As nuclear charge increases, ionisation energy increases
- **Explanation**: More protons in nucleus = stronger positive charge  
  Stronger attraction to electrons = harder to remove electrons
- **Example**:  
  - Hydrogen (1 proton): 1st IE = 1310 kJ/mol  
  - Helium (2 protons): 1st IE = 2370 kJ/mol

3. Shielding Effect (Electron Repulsion)
- **Effect**: As shielding increases, ionisation energy decreases
- **Explanation**: Inner shell electrons repel outer shell electrons  
  This reduces the effective nuclear charge experienced by outer electrons
- **Shielding order**: s > p > d > f (s orbitals provide most effective shielding)

#### Comparative Analysis:

| Element | Electronic Configuration | 1st IE (kJ/mol) | Dominant Factor                              |
| ------- | ------------------------ | --------------- | -------------------------------------------- |
| **Li**  | 1s² 2s¹                  | 519             | High shielding from 1s² electrons            |
| **Be**  | 1s² 2s²                  | 900             | Increased nuclear charge, no extra shielding |
| **B**   | 1s² 2s² 2p¹              | 799             | Electron in higher energy p orbital          |
| **C**   | 1s² 2s² 2p²              | 1086            | Increased nuclear charge, unpaired electrons |
| **Na**  | [${Ne}$] 3s¹             | 496             | Increased distance + more shielding          |
| **Mg**  | [${Ne}$] 3s²             | 738             | Increased nuclear charge                     |

#### Visual Summary

<div class="row g-3 my-3">
  <div class="col-12 col-md-6">
    <div class="card h-100">
      <div class="card-body">
        <h4 class="text-center mb-3">⚡ HIGH IONISATION ENERGY</h4>
        <ul class="list-unstyled mb-0">
          <li>✓ Small atom</li>
          <li>✓ High nuclear charge</li>
          <li>✓ Minimal shielding</li>
          <li>✓ Close to nucleus</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="col-12 col-md-6">
    <div class="card h-100">
      <div class="card-body">
        <h4 class="text-center mb-3">🔋 LOW IONISATION ENERGY</h4>
        <ul class="list-unstyled mb-0">
          <li>✓ Large atom</li>
          <li>✓ Low nuclear charge</li>
          <li>✓ Extensive shielding</li>
          <li>✓ Far from nucleus</li>
        </ul>
      </div>
    </div>
  </div>
</div>

### 4.3 Trends in Period 3

![Ionisation Energy Period 3](https://i0.wp.com/secondaryscience4all.wordpress.com/wp-content/uploads/2014/10/slide07.png?ssl=1)

**Explanations:**
- **Mg to Al drop**: Electron removed from higher energy p orbital (Al) vs s orbital (Mg)
- **P to S drop**: Electron removed from already paired orbital in S (more repulsion)

### 4.4 Trends Down Groups
- **Decreases down groups** due to:
  - Increased atomic radius
  - More shielding
  - Outweighs increased nuclear charge

### 4.5 Using Successive Ionisation Energies

![Successive Ionisation Energies](https://cdn.savemyexams.com/uploads/2021/05/3.1.3-Ionization-Energies_-Trends-Successive-Ionisation-Energies-of-Calcium_1.png)

Large jumps indicate change of main energy level:
- Sodium: Large jump between 1st and 2nd IE (removing from inner shell)
- Calcium: Large jumps after 2nd and 10th IEs

## 5. Molecular Shapes

### 5.1 Electron Pair Repulsion Theory
**Fundamental Principle**:  
"The shape adopted by a simple molecule or ion is that which keeps repulsive forces to a minimum"

- Each pair of electrons around an atom repels all other electron pairs
- Electron pairs take positions as far apart as possible to minimize repulsion
- All bonds are equally spaced out to give minimum repulsive forces

### 5.2 Types of Electron Pairs
- **Bonding pairs**: Electron pairs involved in covalent bonding
- **Lone pairs**: Electron pairs not used for bonding
- **Repulsion strength**: Lone pair-Lone pair > Lone pair-Bond pair > Bond pair-Bond pair

### 5.3 Unified Shape Table

The table below lists total electron groups, bonding pairs, lone pairs, molecular geometries and typical bond angles in a single, unified view for quick reference and comparison:

| Electron groups | Bonding groups | Lone Pairs | Molecular geometry   | Bond angles                      |
| --------------: | -------------: | ---------: | -------------------- | -------------------------------- |
|               2 |              2 |          0 | Linear               | 180°                             |
|               3 |              3 |          0 | Trigonal planar      | 120°                             |
|               3 |              2 |          1 | Bent (Angular)       | < 120°                           |
|               4 |              4 |          0 | Tetrahedral          | 109.5°                           |
|               4 |              3 |          1 | Trigonal pyramidal   | ~107°                            |
|               4 |              2 |          2 | Bent (Angular)       | ~104.5°                          |
|               5 |              5 |          0 | Trigonal bipyramidal | 120° (equatorial), 90° (axial)   |
|               5 |              4 |          1 | Seesaw               | <120° (equatorial), <90° (axial) |
|               5 |              3 |          2 | T-shaped             | <90°                             |
|               5 |              2 |          3 | Linear               | 180°                             |
|               6 |              6 |          0 | Octahedral           | 90°                              |
|               6 |              5 |          1 | Square pyramidal     | <90°                             |
|               6 |              4 |          2 | Square planar        | 90°                              |

### 5.4 Notes & Common Examples
- Ammonia (${NH}_3$): Electron groups = 4, Bonding = 3, Lone pairs = 1 → Trigonal pyramidal, bond angle ≈ 107°.
- Water (${H}_2O$): Electron groups = 4, Bonding = 2, Lone pairs = 2 → Bent (Angular), bond angle ≈ 104.5°.
- Xenon tetrafluoride (${XeF}_4$): Electron groups = 6, Bonding = 4, Lone pairs = 2 → Square planar, bond angles = 90°.
- Carbon dioxide (${CO}_2$): Double bonds are treated as bonding pairs in the VSEPR count → Linear, bond angle = 180°.

### 5.5 Ions and Counting Rules
- For ions, add or remove electrons according to the ion charge before pairing. Example: ${NH}_4^+$ (remove 1 electron) → 4 bonding pairs, 0 lone pairs → Tetrahedral.
- Double bonds are usually counted as a single bonding region for geometry purposes, although the electron density in a double bond can exert slightly greater repulsion than a single bond.

### 5.6 Practical Tips

#### Predicting Molecular Polarity
- Symmetric geometries (linear, trigonal planar, tetrahedral, octahedral, etc.) tend to be nonpolar when all substituents are identical.
- Lone pairs or different substituents create a net dipole, making molecules polar.

#### Bond Angle Trends (4-pair base)
As lone pairs increase, lone pair–bond pair repulsion grows stronger and bond angles decrease:

<div class="card my-3">
  <div class="card-body">
    <h5 class="text-center mb-3">📐 Tetrahedral Base (4 pairs)</h5>
    <div class="row text-center g-3 align-items-center justify-content-center">
      <div class="col-12 col-md-3">
        <div class="fs-3 fw-semibold">109.5°</div>
        <small class="text-muted">0 lone pairs</small>
      </div>
      <div class="col-1 d-none d-md-flex justify-content-center fs-3 text-muted">→</div>
      <div class="col-12 col-md-3">
        <div class="fs-3 fw-semibold">107°</div>
        <small class="text-muted">1 lone pair</small>
      </div>
      <div class="col-1 d-none d-md-flex justify-content-center fs-3 text-muted">→</div>
      <div class="col-12 col-md-3">
        <div class="fs-3 fw-semibold">104.5°</div>
        <small class="text-muted">2 lone pairs</small>
      </div>
    </div>
    <p class="text-center text-muted fst-italic mb-0 mt-3">As lone pairs increase, bond angles decrease due to stronger lone-pair repulsion.</p>
  </div>
</div>

#### Quick determination steps
1. Count the total electron pairs around the central atom (bonding + lone pairs).
2. Determine the number of lone pairs.
3. Use the table above to find the base geometry.
4. Adjust bond angles based on lone-pair count and relative repulsion (see values above).

---

## 5.7 Intermolecular Forces

Understanding the forces between molecules is essential for explaining many physical properties (melting/boiling points, solubility, viscosity, vapour pressure). These forces are weaker than covalent or ionic bonds but have a large cumulative effect in bulk.

### Types of intermolecular forces

- London (dispersion) forces (Van der Waals' forces) — induced dipole / induced dipole
  - Present in all molecules and atoms. Temporary fluctuations in electron density create instantaneous dipoles which induce dipoles in neighbours.
  - Strength increases with: larger electron cloud (higher molar mass), more easily polarisable atoms (less electronegativity), and surface contact area (e.g., long-chain hydrocarbons have stronger dispersion forces than compact molecules of the same formula).
  - Examples: Noble gases ($He$, $Ne$, $Ar$), halogens ($Cl_{2}$, $Br_{2}$, $I_{2}$), hydrocarbons.

- Permanent dipole–dipole interactions
  - Occur between molecules that have a permanent dipole (uneven distribution of electron density). Opposite ends of neighbouring dipoles attract.
  - Important when molecules have polar bonds and an overall polar geometry (e.g., $HCl$, $SO_{2}$).

- Hydrogen bonding
  - A special, relatively strong type of dipole–dipole interaction that occurs when a hydrogen atom is covalently bonded to a highly electronegative atom (N, O or F) and is attracted to a lone pair on N, O or F in a neighbouring molecule.
  - Typical pattern: $X–H···Y$ where $X,Y \in {N, O, F}$ (common examples: $O–H···O$ in water, $N–H···O$ in amides).
  - Hydrogen bonds dramatically raise boiling points and solubility in water.

### How intermolecular forces affect properties (examples)

- Boiling point trends: stronger intermolecular forces → higher boiling point.
  - Example: Compare $CH_{4}, HCl, H_{2}O$
    - $CH_{4}$ (non-polar, only dispersion): $\mathrm{b.p.} \approx -161.5\,^{\circ}\mathrm{C}$
    - $HCl$ (polar, dipole–dipole + dispersion): $\mathrm{b.p.} \approx -85.0\,^{\circ}\mathrm{C}$
    - $H_{2}O$ (hydrogen bonding): $\mathrm{b.p.} = 100\,^{\circ}\mathrm{C}$
  - Hydrogen bonding in water gives an unusually high boiling point for such a small molecule.

- Solid vs gas at room temperature:
  - $I_{2}$ is a solid because large electron cloud → strong dispersion forces; $Cl_{2}$ is a gas (smaller polarizability).

- Solubility:
  - Like dissolves like: polar solvents (water) solvate polar solutes via dipole interactions and hydrogen bonding; non-polar solvents dissolve non-polar solutes through dispersion forces.

### Visual/diagrammatic intuition

<div class="row gx-3 my-3">
  <figure class="col-12 col-md-4 text-center">
    <img src="/assets/img/intermolecular/london.svg" alt="London dispersion illustration" class="img-fluid" />
    <figcaption style="margin-top:0.5rem;color:var(--muted);">London: instantaneous dipole → induced dipole</figcaption>
  </figure>

  <figure class="col-12 col-md-4 text-center">
    <img src="/assets/img/intermolecular/dipole.svg" alt="Permanent dipole–dipole illustration" class="img-fluid" />
    <figcaption style="margin-top:0.5rem;color:var(--muted);">Dipole–Dipole: permanent +/− ends attract</figcaption>
  </figure>

  <figure class="col-12 col-md-4 text-center">
    <img src="/assets/img/intermolecular/hydrogen_bond.svg" alt="Hydrogen bond illustration" class="img-fluid" />
    <figcaption style="margin-top:0.5rem;color:var(--muted);">Hydrogen bond: X–H···Y (X,Y = N/O/F)</figcaption>
  </figure>
</div>

### Worked examples & practice

1) Explain why ethanol (CH3CH2OH) has a higher boiling point than dimethyl ether (CH3OCH3), even though they have the same molecular formula (C2H6O).

Answer: Ethanol can form hydrogen bonds (O–H···O) between molecules; dimethyl ether cannot (no O–H hydrogen). Both have similar dispersion contributions, but the hydrogen bonding in ethanol gives additional attractive energy, increasing the boiling point (ethanol $\mathrm{b.p.}\approx 78\,^{\circ}\mathrm{C}$, dimethyl ether $\mathrm{b.p.}\approx -24\,^{\circ}\mathrm{C}$).

2) Predict which has the higher melting/boiling point: $I_2$ or $Br_2$ and explain briefly.

Answer: $I_2$ has higher melting/boiling points than $Br_2$ because iodine atoms are larger and more polarisable, producing stronger London dispersion forces; therefore solid $I_2$ at room temperature, while $Br_2$ is a liquid at room temperature.

3) Short calculation-style reasoning:
  - Which of the following will have the highest boiling point: CH4, NH3, or HF? Rank and give reasons.

Answer: $HF$ > $N_3$ > $CH_4$. $HF$ forms very strong hydrogen bonds (F is most electronegative), $NH_3$ forms hydrogen bonds but weaker on average (fewer/less strong H-bonds than $HF$ in bulk), $CH_4$  has only dispersion forces.

---

## 6. Energetics

### 6.1 Energy Changes in Reactions
- **Exothermic**: Heat energy is released to surroundings (ΔH = –ve)
  - Examples: Combustion, neutralisation, respiration
  - Products have less energy than reactants
- **Endothermic**: Heat energy is absorbed from surroundings (ΔH = +ve)
  - Examples: Thermal decomposition, photosynthesis
  - Products have more energy than reactants

### 6.2 Enthalpy Change (ΔH)

**Definition:** Heat energy change at constant pressure

$$\Delta H = H_p - H_r$$

where $p$ = products and $r$ = reactants

**Standard conditions:** 100 kPa, 298 K, 1 mol dm⁻³ solutions

### 6.3 Enthalpy Profile Diagrams

Reaction profiles show how energy changes during a reaction:

#### Exothermic Reaction:
![Exothermic Reaction](https://cdn.savemyexams.com/uploads/2020/11/1.8-Reaction-Kinetics-Exothermic-Reaction-Activation-Energy.png)

Products have **lower** energy than reactants (ΔH = negative)

#### Endothermic Reaction:
![Endothermic Reaction](https://cdn.savemyexams.com/uploads/2020/11/1.8-Reaction-Kinetics-Endothermic-Reaction-Activation-Energy.png)

Products have **higher** energy than reactants (ΔH = positive)


### 6.4 Standard Enthalpy Changes

#### Enthalpy of Formation (ΔH°f)

**Definition:** Enthalpy change when 1 mole of compound is formed from its elements in standard states.

Note: $\Delta H°_f = 0$ for elements in their standard state.

**Example:**  

$$C_{(graphite)} + O_{2(g)} \rightarrow CO_{2(g)}$$

$$\Delta H°_f = -393 \text{ kJ mol}^{-1}$$

#### Enthalpy of Combustion (ΔH°c)

**Definition:** Enthalpy change when 1 mole of substance is completely burned in oxygen.

**Key characteristic:** Always exothermic (ΔH < 0)

**Example:**  

$$CH_{4(g)} + 2O_{2(g)} \rightarrow CO_{2(g)} + 2H_2O_{(l)}$$

$$\Delta H°_c = -890 \text{ kJ mol}^{-1}$$

### 6.5 Calorimetry

#### Basic Principle

When a reaction occurs in an insulated container, the heat released or absorbed changes the temperature of the surroundings:

$$Q = m \times c \times \Delta T$$

Where:
- $Q$ = heat energy (J)
- $m$ = mass of substance heated/cooled (g)
- $c$ = specific heat capacity (J g⁻¹ K⁻¹)
- $\Delta T$ = temperature change (K)

#### For Water

- **Specific heat capacity:** $c = 4.18 \text{ J g}^{-1}\text{ K}^{-1}$
- **Density:** $\approx 1 \text{ g cm}^{-3}$ (1 mL ≈ 1 g)

#### Calculating Enthalpy Change from Calorimetry

**Step 1:** Calculate heat energy released/absorbed

$$Q = m \times c \times \Delta T$$

**Step 2:** Calculate moles of limiting reactant

**Step 3:** Calculate enthalpy per mole

$$\Delta H = \frac{Q}{n}$$ (convert to $\text{kJ mol}^{-1}$)

**Step 4:** Add the sign: negative for exothermic, positive for endothermic

### 6.6 Hess's Law

#### Principle

"The total enthalpy change for a reaction is independent of the route taken, provided the starting materials and final products are the same."

This law allows us to calculate enthalpy changes for reactions that may be difficult to measure directly.

#### Method 1: Using Enthalpies of Formation

$$\Delta H°_{reaction} = \sum \Delta H°_f(products) - \sum \Delta H°_f(reactants)$$

**Example - Complete combustion of methane:**

$$CH_{4(g)} + 2O_{2(g)} \rightarrow CO_{2(g)} + 2H_2O_{(l)}$$

$$\Delta H = [\Delta H°_f(CO_2) + 2 \times \Delta H°_f(H_2O)] - [\Delta H°_f(CH_4) + 2 \times \Delta H°_f(O_2)]$$

$$= [-393 + 2 \times (-286)] - [-75 + 0] = -890 \text{ kJ mol}^{-1}$$

#### Method 2: Using Enthalpies of Combustion

$$\Delta H°_{reaction} = \sum \Delta H°_c(reactants) - \sum \Delta H°_c(products)$$

**Example - Formation of propane:**

$$3C_{(s)} + 4H_{2(g)} \rightarrow C_3H_{8(g)}$$

$$\Delta H = [3 \times \Delta H°_c(C) + 4 \times \Delta H°_c(H_2)] - [\Delta H°_c(C_3H_8)]$$

### 6.7 Bond Enthalpies

#### Definitions

**Bond dissociation enthalpy:** The energy required to break 1 mole of gaseous bonds

**Mean bond enthalpy:** The average energy for a particular bond type across different compounds

Note: Values are averages because bond strengths vary slightly depending on the molecular environment.

#### Calculating ΔH from Bond Enthalpies

$$\Delta H = \sum(\text{bonds broken}) - \sum(\text{bonds formed})$$

**Key concept:**
- Breaking bonds = ENDOTHERMIC (+ve)
- Forming bonds = EXOTHERMIC (-ve)

**Example - Hydrogenation of ethene:**

$$C_2H_{4(g)} + H_{2(g)} \rightarrow C_2H_{6(g)}$$

**Bonds broken:**
- $1 \times C=C$ (611 kJ/mol)
- $1 \times H-H$ (436 kJ/mol)

**Bonds formed:**
- $1 \times C-C$ (346 kJ/mol)  
- $2 \times C-H$ ($2 \times 413 = 826$ kJ/mol)

**Calculation:**

$$\Delta H = (611 + 436) - (346 + 826) = -125 \text{ kJ mol}^{-1}$$

### 6.8 Experimental Techniques

#### Solution Calorimetry:
- Use polystyrene cup as calorimeter
- Measure temperature change of solution
- Account for heat loss using cooling curves

#### Fuel Calorimetry:
- Burn fuel to heat known mass of water
- Simple calorimeter: metal can + thermometer
- Flame calorimeter: more accurate, reduces heat loss

#### Improving Accuracy:
- Use lids to reduce evaporation
- Stir to ensure even temperature
- Use draught screens
- Plot cooling curves to account for heat loss

---

# Unit 2: Redox, Equilibria and Kinetics

## 1. Redox Reactions

### 1.1 Oxidation and Reduction Definitions

#### Traditional Definitions:
- **Oxidation**: Gain of oxygen or loss of hydrogen
- **Reduction**: Loss of oxygen or gain of hydrogen

**Examples:**
- $$\ce{Mg(s) + 1/2O2(g) -> MgO(s)}$$ (Magnesium oxidized - gains oxygen)
- $$\ce{C2H5OH(l) -> CH3CHO(l) + H2(g)}$$ (Ethanol oxidized - loses hydrogen)
- $$\ce{C2H4(g) + H2(g) -> C2H6(g)}$$ (Ethene reduced - gains hydrogen)
- $$\ce{CuO(s) + H2(g) -> Cu(s) + H2O(l)}$$ (Copper oxide reduced - loses oxygen)

#### Modern Electron Transfer Definitions:
- **Oxidation**: Loss of electrons (OIL - Oxidation Is Loss)
- **Reduction**: Gain of electrons (RIG - Reduction Is Gain)
- **Redox**: Both oxidation and reduction occur simultaneously

**Memory Aid:**  
**OIL RIG** - Oxidation Is Loss, Reduction Is Gain

### 1.2 Half Equations

**Example - Magnesium and Oxygen:**
$$\ce{Mg -> Mg^{2+} + 2e^{-}}$$ (Oxidation - loss of electrons)
$$\ce{1/2O2 + 2e^{-} -> O^{2-}}$$ (Reduction - gain of electrons)

**Overall:** $$\ce{Mg + 1/2O2 -> Mg^{2+} + O^{2-}}$$

### 1.3 Ionic Equations and Spectator Ions

**Example Reaction:**
$$\ce{CuCl2(aq) + Ca(s) -> Cu(s) + CaCl2(aq)}$$

**Ionic Form:**
$$\ce{(Cu^{2+} + 2Cl^{-}) + Ca -> Cu + (Ca^{2+} + 2Cl^{-})}$$

**Half Equations:**
- Reduction: $$\ce{Cu^{2+} + 2e^{-} -> Cu}$$
- Oxidation: $$\ce{Ca -> Ca^{2+} + 2e^{-}}$$

**Spectator Ion:** $$\ce{Cl^{-}}$$ (takes no part in reaction)

**Net Ionic Equation:**
$$\ce{Cu^{2+}(aq) + Ca(s) -> Cu(s) + Ca^{2+}(aq)}$$

### 1.4 Oxidizing and Reducing Agents

| Agent Type          | Function                         | Example                          |
| ------------------- | -------------------------------- | -------------------------------- |
| **Oxidizing Agent** | Accepts electrons, gets reduced  | $\ce{Cu^{2+}}$ in above reaction |
| **Reducing Agent**  | Donates electrons, gets oxidized | $\ce{Ca}$ in above reaction      |

**Key Principle:** The species that is reduced is the oxidizing agent; the species that is oxidized is the reducing agent.

### 1.5 Practice Example

For: $$\ce{Ca(s) + Br2(g) -> CaBr2(s)}$$

- **Element gaining electrons:** $\ce{Br2}$ (reduced)
- **Element losing electrons:** $\ce{Ca}$ (oxidized)
- **Oxidizing agent:** $\ce{Br2}$
- **Reducing agent:** $\ce{Ca}$
- **Half equations:**
  - Reduction: $$\ce{Br2 + 2e^{-} -> 2Br^{-}}$$
  - Oxidation: $$\ce{Ca -> Ca^{2+} + 2e^{-}}$$

---

## 2. Oxidation States

### 2.1 Definition and Rules

**Oxidation State:** The charge an atom would have if all bonds were ionic

#### Fundamental Rules:
1. **Elements:** Oxidation state = 0 (e.g., $\ce{Na}$, $\ce{O2}$, $\ce{Cl2}$)
2. **Simple Ions:** Oxidation state = charge (e.g., $\ce{Na+}$ = +1, $\ce{Cl-}$ = -1)
3. **Molecules:** Sum of oxidation states = 0
4. **Complex Ions:** Sum of oxidation states = ion charge

#### Common Oxidation States:

| Element     | Usual OS | Exceptions                                      |
| ----------- | -------- | ----------------------------------------------- |
| **H**       | +1       | -1 in metal hydrides ($\ce{NaH}$)               |
| **O**       | -2       | -1 in peroxides ($\ce{H2O2}$), +2 in $\ce{F2O}$ |
| **F**       | -1       | Always -1 in compounds                          |
| **Group 1** | +1       | Always +1                                       |
| **Group 2** | +2       | Always +2                                       |
| **Al**      | +3       | Always +3                                       |
| **Cl**      | -1       | +1, +3, +5, +7 with O and F                     |

### 2.2 Calculating Oxidation States

#### For Molecules (Sum = 0):
**Example - CO₂:**
- O = -2 each (total -4 for 2 oxygen atoms)
- C must be +4 to make sum zero: $$+4 + 2(-2) = 0$$

**Example - NH₃:**
- H = +1 each (total +3 for 3 hydrogen atoms)
- N must be -3 to make sum zero: $$-3 + 3(+1) = 0$$

#### For Complex Ions (Sum = charge):
**Example - SO₄²⁻:**
- O = -2 each (total -8 for 4 oxygen atoms)
- S must be +6 to make sum -2: $$+6 + 4(-2) = -2$$

**Example - MnO₄⁻:**
- O = -2 each (total -8 for 4 oxygen atoms)
- Mn must be +7 to make sum -1: $$+7 + 4(-2) = -1$$

### 2.3 Using Oxidation States in Naming

**Examples:**

- $\ce{PbO2}$: Lead(IV) oxide (Pb = +4)
- $\ce{SnCl2}$: Tin(II) chloride (Sn = +2)
- $\ce{TiCl4}$: Titanium(IV) chloride (Ti = +4)
- $\ce{BrF5}$: Bromine(V) fluoride (Br = +5)

### 2.4 Identifying Redox Reactions using Oxidation States

**Oxidation:** Increase in oxidation state
**Reduction:** Decrease in oxidation state

**Practice Examples:**

| Change                       | Oxidation State Change | Type      |
| ---------------------------- | ---------------------- | --------- |
| $\ce{Fe^{2+} -> Fe^{3+}}$    | +2 → +3                | Oxidation |
| $\ce{I2 -> I^{-}}$           | 0 → -1                 | Reduction |
| $\ce{H2O2 -> O2}$            | -1 → 0                 | Oxidation |
| $\ce{H2O2 -> H2O}$           | -1 → -2                | Reduction |
| $\ce{Cr2O7^{2-} -> Cr^{3+}}$ | +6 → +3                | Reduction |

---

## 3. Balancing Redox Equations

### 3.1 Method for Balancing Half Equations

**Five Step Process:**

1. **Write species before/after** and balance atoms (except O and H)
2. **Determine oxidation states** of element changing
3. **Add electrons** to balance oxidation state change
4. **Add H⁺ ions** to balance charge (if in acidic solution)
5. **Add H₂O molecules** to balance oxygen and hydrogen

### 3.2 Worked Examples

#### Example 1: Simple Electron Transfer
$$\ce{Fe^{2+} -> Fe^{3+}}$$

**Step 1:** Atoms balanced  
**Step 2:** +2 → +3 (oxidation)  
**Step 3:** $$\ce{Fe^{2+} -> Fe^{3+} + e^{-}}$$  
**Step 4-5:** Not needed - already balanced

#### Example 2: Complex Reduction in Acid
$$\ce{MnO4^{-} -> Mn^{2+}}$$ (in acidic solution)

**Step 1:** Mn atoms balanced  
**Step 2:** +7 → +2 (reduction)  
**Step 3:** $$\ce{MnO4^{-} + 5e^{-} -> Mn^{2+}}$$  
**Step 4:** $$\ce{MnO4^{-} + 5e^{-} + 8H^{+} -> Mn^{2+}}$$ (charge balanced)  
**Step 5:** $$\ce{MnO4^{-} + 5e^{-} + 8H^{+} -> Mn^{2+} + 4H2O}$$

#### Example 3: Multiple Atoms
$$\ce{Cr2O7^{2-} -> Cr^{3+}}$$ (in acidic solution)

**Step 1:** $$\ce{Cr2O7^{2-} -> 2Cr^{3+}}$$ (balance Cr atoms)  
**Step 2:** 2@+6 → 2@+3 (each Cr reduced by 3 electrons)  
**Step 3:** $$\ce{Cr2O7^{2-} + 6e^{-} -> 2Cr^{3+}}$$  
**Step 4:** $$\ce{Cr2O7^{2-} + 6e^{-} + 14H^{+} -> 2Cr^{3+}}$$  
**Step 5:** $$\ce{Cr2O7^{2-} + 6e^{-} + 14H^{+} -> 2Cr^{3+} + 7H2O}$$

### 3.3 Combining Half Equations

**Four Step Process:**

1. **Write both half equations**
2. **Multiply equations** so electron numbers match
3. **Add equations** and cancel electrons
4. **Cancel any other species** appearing on both sides

**Example - Manganate(VII) with Iron(II):**

**Step 1:**
- Oxidation: $$\ce{Fe^{2+} -> Fe^{3+} + e^{-}}$$
- Reduction: $$\ce{MnO4^{-} + 5e^{-} + 8H^{+} -> Mn^{2+} + 4H2O}$$

**Step 2:** Multiply oxidation by 5:
$$\ce{5Fe^{2+} -> 5Fe^{3+} + 5e^{-}}$$

**Step 3:** Add equations:
$$\ce{MnO4^{-} + 5e^{-} + 8H^{+} + 5Fe^{2+} -> Mn^{2+} + 4H2O + 5Fe^{3+} + 5e^{-}}$$

**Step 4:** Cancel electrons:
$$\ce{MnO4^{-} + 8H^{+} + 5Fe^{2+} -> Mn^{2+} + 4H2O + 5Fe^{3+}}$$

---

## 4. Disproportionation Reactions

### 4.1 Definition
A reaction where the same element is both oxidized and reduced

### 4.2 Classic Example - Hydrogen Peroxide Decomposition
$$\ce{2H2O2 -> 2H2O + O2}$$

**Oxidation States:**
- In $\ce{H2O2}$: O = -1
- In $\ce{H2O}$: O = -2 (reduction)
- In $\ce{O2}$: O = 0 (oxidation)

**Explanation:** Two oxygen atoms reduce from -1 to -2, while two oxygen atoms oxidize from -1 to 0

### 4.3 Other Examples

**Copper(I) disproportionation:**
$$\ce{2Cu^{+} -> Cu^{2+} + Cu}$$
+1 → +2 (oxidation) and +1 → 0 (reduction)

**Iron disproportionation:**
$$\ce{3Fe^{2+} -> 2Fe^{3+} + Fe}$$
+2 → +3 (oxidation) and +2 → 0 (reduction)

---

## 5. Chemical Kinetics

### 5.1 Collision Theory

**Three Requirements for Reaction:**
1. **Collision** between particles
2. **Sufficient energy** (≥ activation energy)
3. **Correct orientation**

**Activation Energy ($E_a$):** Minimum energy required for a successful collision

### 5.2 Factors Affecting Reaction Rate

#### Temperature:
- **Effect:** Increases rate dramatically
- **Reason:** More particles have energy ≥ $E_a$
- **Rule of thumb:** 10°C increase ≈ doubles rate

#### Concentration/Pressure:
- **Effect:** Increases rate
- **Reason:** More frequent collisions
- **For gases:** Higher pressure = higher concentration

#### Surface Area:
- **Effect:** Increases rate for solids
- **Reason:** More particles exposed for collision
- **Example:** Powdered solid reacts faster than lumps

#### Catalysts:
- **Effect:** Increases rate
- **Reason:** Provides alternative pathway with lower $E_a$
- **Important:** Not consumed in reaction

### 5.3 Maxwell-Boltzmann Distribution

**Key Features:**
- No particles have zero energy
- Curve peaks at most probable energy
- Average energy > most probable energy
- Small fraction have very high energies (tail)

**Temperature Effect:**
- Higher temperature: curve broader, flatter, shifts right
- More particles have energy ≥ $E_a$
- Area under curve constant (total particles same)

**Catalyst Effect:**
- Lowers $E_a$ (moves activation energy left)
- More particles have energy ≥ new lower $E_a$
- Distribution curve unchanged

### 5.4 Catalysts

#### Types:
- **Homogeneous:** Same phase as reactants (e.g., $\ce{H+}$ in esterification)
- **Heterogeneous:** Different phase from reactants (e.g., Fe in Haber process)

#### Industrial Importance:
- Allow reactions at lower temperatures (save energy)
- Reduce $\ce{CO2}$ emissions
- Better atom economy
- Used in production of polymers, sulfuric acid, ammonia, ethanol

#### Examples:
- **Haber process:** $\ce{Fe}$ catalyst
- **Catalytic converters:** Pt, Rh, Pd
- **Ozone depletion:** Cl atoms catalyze $\ce{O3}$ destruction

---

## 6. Chemical Equilibrium

### 6.1 Dynamic Equilibrium

**Characteristics:**
- Forward and backward reactions occur simultaneously
- Rates of forward and backward reactions are equal
- Concentrations of all species remain constant
- Can only occur in closed system

**Example - Physical Equilibrium:**
$$\ce{H2O(l) <=> H2O(g)}$$
Rate of evaporation = Rate of condensation

### 6.2 The Equilibrium Constant ($K_c$)

#### General Form:
For: $$\ce{mA + nB <=> pC + qD}$$

$$K_c = \frac{[C]^p[D]^q}{[A]^m[B]^n}$$

#### Important Notes:
- Square brackets [] denote concentration in mol dm⁻³
- Pure solids and liquids are omitted from expression
- $K_c$ is constant at constant temperature
- Units vary depending on reaction stoichiometry

#### Examples:

| Reaction                            | $K_c$ Expression             | Units     |
| ----------------------------------- | ---------------------------- | --------- |
| $\ce{H2 + I2 <=> 2HI}$              | $\frac{[HI]^2}{[H2][I2]}$    | None      |
| $\ce{N2 + 3H2 <=> 2NH3}$            | $\frac{[NH3]^2}{[N2][H2]^3}$ | mol⁻² dm⁶ |
| $\ce{CaCO3(s) <=> CaO(s) + CO2(g)}$ | $[CO2]$                      | mol dm⁻³  |

### 6.3 Position of Equilibrium

**Interpreting $K_c$ values:**
- $K_c > 1$: Products favored (equilibrium lies to right)
- $K_c < 1$: Reactants favored (equilibrium lies to left)
- $K_c ≈ 1$: Significant amounts of both reactants and products

### 6.4 Le Chatelier's Principle

**Statement:** "When a system at equilibrium is subjected to a change, the position of equilibrium will shift to oppose that change."

#### Effect of Concentration:
- **Increase reactant:** Equilibrium shifts to right
- **Increase product:** Equilibrium shifts to left
- **Decrease reactant:** Equilibrium shifts to left  
- **Decrease product:** Equilibrium shifts to right

#### Effect of Pressure (gases only):
- **Increase pressure:** Shifts to side with fewer gas molecules
- **Decrease pressure:** Shifts to side with more gas molecules
- **No effect:** Equal numbers of gas molecules on both sides

#### Effect of Temperature:
- **Increase temperature:** Shifts in endothermic direction
- **Decrease temperature:** Shifts in exothermic direction

#### Effect of Catalyst:
- **No effect** on position of equilibrium
- **Speeds up** rate at which equilibrium is reached
- Affects forward and backward reactions equally

### 6.5 Industrial Applications - Haber Process

**Reaction:** $$\ce{N2(g) + 3H2(g) <=> 2NH3(g)} \quad \Delta H = -92 \text{ kJ mol}^{-1}$$

**Optimum Conditions:**
- **Pressure:** 200 atm (high - favors products, fewer gas molecules)
- **Temperature:** 400-450°C (compromise - lower favors yield but slows rate)
- **Catalyst:** Iron (speeds up rate)

**Compromise Reasoning:**
- **Equilibrium favors:** Low temperature, high pressure
- **Kinetics favor:** High temperature, high pressure, catalyst
- **Chosen conditions:** Balance between good yield and acceptable rate

### 6.6 Calculating $K_c$ from Experimental Data

**General Method:**
1. Write balanced equation
2. Construct ICE table (Initial, Change, Equilibrium)
3. Calculate equilibrium concentrations
4. Substitute into $K_c$ expression
5. Calculate value with correct units

**Example Calculation:**
For: $$\ce{CH3COOH + C2H5OH <=> CH3COOC2H5 + H2O}$$

Given: 1 mol acid + 1 mol alcohol, at equilibrium 2/3 acid reacted

**ICE Table:**

| Species | Initial | Change | Equilibrium |
| ------- | ------- | ------ | ----------- |
| Acid    | 1       | -2/3   | 1/3         |
| Alcohol | 1       | -2/3   | 1/3         |
| Ester   | 0       | +2/3   | 2/3         |
| Water   | 0       | +2/3   | 2/3         |

**Calculation:**
$$K_c = \frac{[Ester][Water]}{[Acid][Alcohol]} = \frac{(2/3)(2/3)}{(1/3)(1/3)} = 4$$ (no units)

---

## 7. Summary Tables

### 7.1 Redox Definitions Summary

| Concept             | Definition                       | Example                        |
| ------------------- | -------------------------------- | ------------------------------ |
| **Oxidation**       | Loss of electrons                | $\ce{Fe -> Fe^{2+} + 2e^{-}}$  |
| **Reduction**       | Gain of electrons                | $\ce{Cl2 + 2e^{-} -> 2Cl^{-}}$ |
| **Oxidizing Agent** | Accepts electrons, gets reduced  | $\ce{MnO4^{-}}$ in redox       |
| **Reducing Agent**  | Donates electrons, gets oxidized | $\ce{Fe^{2+}}$ in redox        |

### 7.2 Equilibrium Factors Summary

| Change                                 | Effect on Position        | Effect on $K_c$ |
| -------------------------------------- | ------------------------- | --------------- |
| **Increase reactant concentration**    | Shifts to products        | No change       |
| **Increase product concentration**     | Shifts to reactants       | No change       |
| **Increase pressure (gases)**          | Shifts to fewer molecules | No change       |
| **Increase temperature (endothermic)** | Shifts to products        | Increases       |
| **Increase temperature (exothermic)**  | Shifts to reactants       | Decreases       |
| **Add catalyst**                       | No change                 | No change       |

### 7.3 Reaction Rate Factors Summary

| Factor                        | Effect on Rate | Reason                        |
| ----------------------------- | -------------- | ----------------------------- |
| **Increase temperature**      | Increases      | More particles have $E ≥ E_a$ |
| **Increase concentration**    | Increases      | More frequent collisions      |
| **Increase surface area**     | Increases      | More particles exposed        |
| **Add catalyst**              | Increases      | Lower activation energy       |
| **Increase pressure (gases)** | Increases      | More frequent collisions      |