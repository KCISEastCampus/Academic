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
|---------------------|---------------------|----------------|
| 1                   | 1                   | s              |
| 2                   | 2                   | s, p           |
| 3                   | 3                   | s, p, d        |
| 4                   | 4                   | s, p, d, f     |

### 1.2 Atomic Orbitals
#### Orbital Shapes & Numbers:

| Orbital | Shape | Number per Principal Level |
|---------|-------|----------------------------|
| s       | Spherical | 1 (in every level)        |
| p       | Dumbbell | 3 (from level 2 upwards)  |
| d       | Various | 5 (from level 3 upwards)  |
| f       | Various | 7 (from level 4 upwards)  |

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

<div class="mass-spec-flow" style="display: flex; align-items: center; justify-content: center; gap: 1rem; padding: 2rem; background: var(--surface); border-radius: 12px; margin: 1.5rem 0; box-shadow: 0 4px 12px rgba(0,0,0,0.15); border: 1px solid rgba(var(--accent-al-rgb), 0.2);">
  <div style="background: rgba(var(--accent-al-rgb), 0.15); padding: 1rem 1.5rem; border-radius: 8px; font-weight: bold; color: var(--accent-al); box-shadow: 0 2px 8px rgba(0,0,0,0.1); border: 1px solid rgba(var(--accent-al-rgb), 0.3);">Ion Source</div>
  <div style="color: var(--muted); font-size: 2em;">→</div>
  <div style="background: rgba(var(--accent-al-rgb), 0.15); padding: 1rem 1.5rem; border-radius: 8px; font-weight: bold; color: var(--accent-al); box-shadow: 0 2px 8px rgba(0,0,0,0.1); border: 1px solid rgba(var(--accent-al-rgb), 0.3);">Analyser</div>
  <div style="color: var(--muted); font-size: 2em;">→</div>
  <div style="background: rgba(var(--accent-al-rgb), 0.15); padding: 1rem 1.5rem; border-radius: 8px; font-weight: bold; color: var(--accent-al); box-shadow: 0 2px 8px rgba(0,0,0,0.1); border: 1px solid rgba(var(--accent-al-rgb), 0.3);">Detector</div>
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

| Element | Electronic Configuration | 1st IE (kJ/mol) | Dominant Factor |
|---------|--------------------------|-----------------|-----------------|
| **Li** | 1s² 2s¹ | 519 | High shielding from 1s² electrons |
| **Be** | 1s² 2s² | 900 | Increased nuclear charge, no extra shielding |
| **B** | 1s² 2s² 2p¹ | 799 | Electron in higher energy p orbital |
| **C** | 1s² 2s² 2p² | 1086 | Increased nuclear charge, unpaired electrons |
| **Na** | [${Ne}$] 3s¹ | 496 | Increased distance + more shielding |
| **Mg** | [${Ne}$] 3s² | 738 | Increased nuclear charge |

#### Visual Summary

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 1.5rem 0;">
  <div style="background: var(--surface); padding: 2rem; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); border: 1px solid rgba(var(--accent-ig-rgb), 0.3);">
    <h4 style="text-align: center; color: var(--accent-ig); margin-top: 0; font-size: 1.3em;">⚡ HIGH IONISATION ENERGY</h4>
    <ul style="color: var(--text); line-height: 2; font-size: 1.05em; list-style: none; padding-left: 0;">
      <li style="padding: 0.3rem 0; border-left: 3px solid var(--accent-ig); padding-left: 1rem; margin-bottom: 0.5rem;">✓ Small atom</li>
      <li style="padding: 0.3rem 0; border-left: 3px solid var(--accent-ig); padding-left: 1rem; margin-bottom: 0.5rem;">✓ High nuclear charge</li>
      <li style="padding: 0.3rem 0; border-left: 3px solid var(--accent-ig); padding-left: 1rem; margin-bottom: 0.5rem;">✓ Minimal shielding</li>
      <li style="padding: 0.3rem 0; border-left: 3px solid var(--accent-ig); padding-left: 1rem;">✓ Close to nucleus</li>
    </ul>
  </div>
  <div style="background: var(--surface); padding: 2rem; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); border: 1px solid rgba(var(--accent-al-rgb), 0.3);">
    <h4 style="text-align: center; color: var(--accent-al); margin-top: 0; font-size: 1.3em;">🔋 LOW IONISATION ENERGY</h4>
    <ul style="color: var(--text); line-height: 2; font-size: 1.05em; list-style: none; padding-left: 0;">
      <li style="padding: 0.3rem 0; border-left: 3px solid var(--accent-al); padding-left: 1rem; margin-bottom: 0.5rem;">✓ Large atom</li>
      <li style="padding: 0.3rem 0; border-left: 3px solid var(--accent-al); padding-left: 1rem; margin-bottom: 0.5rem;">✓ Low nuclear charge</li>
      <li style="padding: 0.3rem 0; border-left: 3px solid var(--accent-al); padding-left: 1rem; margin-bottom: 0.5rem;">✓ Extensive shielding</li>
      <li style="padding: 0.3rem 0; border-left: 3px solid var(--accent-al); padding-left: 1rem;">✓ Far from nucleus</li>
    </ul>
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

| Electron groups | Bonding groups | Lone Pairs | Molecular geometry | Bond angles |
|------------------:|---------------:|-----------:|-------------------|-------------|
| 2 | 2 | 0 | Linear | 180° |
| 3 | 3 | 0 | Trigonal planar | 120° |
| 3 | 2 | 1 | Bent (Angular) | < 120° |
| 4 | 4 | 0 | Tetrahedral | 109.5° |
| 4 | 3 | 1 | Trigonal pyramidal | ~107° |
| 4 | 2 | 2 | Bent (Angular) | ~104.5° |
| 5 | 5 | 0 | Trigonal bipyramidal | 120° (equatorial), 90° (axial) |
| 5 | 4 | 1 | Seesaw | <120° (equatorial), <90° (axial) |
| 5 | 3 | 2 | T-shaped | <90° |
| 5 | 2 | 3 | Linear | 180° |
| 6 | 6 | 0 | Octahedral | 90° |
| 6 | 5 | 1 | Square pyramidal | <90° |
| 6 | 4 | 2 | Square planar | 90° |

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

<div style="background: var(--surface); padding: 2rem; border-radius: 12px; margin: 1.5rem 0; box-shadow: 0 4px 12px rgba(0,0,0,0.15); border: 1px solid rgba(var(--accent-al-rgb), 0.25);">
  <h5 style="text-align: center; color: var(--accent-al); margin-top: 0;">📐 Tetrahedral Base (4 pairs)</h5>
  <div style="display: flex; align-items: center; justify-content: center; gap: 1.5rem; margin-top: 1.5rem; flex-wrap: wrap;">
    <div style="text-align: center;">
      <div style="background: rgba(var(--accent-al-rgb), 0.2); padding: 1rem 1.5rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.15); margin-bottom: 0.5rem; border: 1px solid rgba(var(--accent-al-rgb), 0.4);">
        <strong style="font-size: 1.3em; color: var(--accent-al);">109.5°</strong>
      </div>
      <small style="color: var(--muted);">0 lone pairs</small>
    </div>
    <div style="font-size: 2em; color: var(--muted);">→</div>
    <div style="text-align: center;">
      <div style="background: rgba(var(--accent-ig-rgb), 0.2); padding: 1rem 1.5rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.15); margin-bottom: 0.5rem; border: 1px solid rgba(var(--accent-ig-rgb), 0.4);">
        <strong style="font-size: 1.3em; color: var(--accent-ig);">107°</strong>
      </div>
      <small style="color: var(--muted);">1 lone pair</small>
    </div>
    <div style="font-size: 2em; color: var(--muted);">→</div>
    <div style="text-align: center;">
      <div style="background: rgba(245, 87, 108, 0.2); padding: 1rem 1.5rem; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.15); margin-bottom: 0.5rem; border: 1px solid rgba(245, 87, 108, 0.4);">
        <strong style="font-size: 1.3em; color: #f5576c;">104.5°</strong>
      </div>
      <small style="color: var(--muted);">2 lone pairs</small>
    </div>
  </div>
  <p style="text-align: center; margin-top: 1.5rem; color: var(--muted); font-style: italic; margin-bottom: 0;">As lone pairs increase, bond angles decrease due to stronger lone-pair repulsion.</p>
</div>

#### Quick determination steps
1. Count the total electron pairs around the central atom (bonding + lone pairs).
2. Determine the number of lone pairs.
3. Use the table above to find the base geometry.
4. Adjust bond angles based on lone-pair count and relative repulsion (see values above).

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