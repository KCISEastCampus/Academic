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
$$PV = nRT$$
Where:
- P = Pressure (Pa)
- V = Volume (m³)
- n = Number of moles
- R = Gas constant (8.31 J K⁻¹ mol⁻¹)
- T = Temperature (K)

**At room temperature and pressure (RTP):**  
1 mole of any gas occupies approximately 24 dm³

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
Two main methods:
- **Electron Impact**: High-energy electrons knock out electrons to form 1+ ions  
  $${X(g) + e- -> X+(g) + 2e-}$$
- **Electrospray Ionisation**: Sample gains protons to form ${XH+}$ ions  
  $${X(g) + H+ -> XH+(g)}$$

#### Stage 2: Acceleration
- Positive ions accelerated by electric field
- All ions given same kinetic energy:  
  $$KE = \frac{1}{2}mv^2$$

#### Stage 3: Ion Drift
- Ions travel through flight tube
- Lighter ions travel faster:  
  $$v = \sqrt{\frac{2KE}{m}}$$

#### Stage 4: Detection
- Ions hit detector plate
- Signal strength ∝ number of ions
- Computer generates mass spectrum

### 3.3 Calculating Relative Atomic Mass
$$A_r = \frac{\sum(m_i \times a_i)}{\sum a_i}$$
where $m_i$ is isotope mass and $a_i$ is relative abundance

**Example - Chlorine:**
- ${^{35}Cl}$ (75%), ${^{37}Cl}$ (25%)
- $A_r = \frac{(35 \times 75) + (37 \times 25)}{100} = 35.5$

---

## 4. Ionisation Energy

### 4.1 Definitions
- **First Ionisation Energy**: Energy required to remove one mole of electrons from one mole of gaseous atoms to form one mole of gaseous 1+ ions  
  $${Na(g) -> Na+(g) + e-}$$
- **Successive Ionisation Energies**: Energy required to remove subsequent electrons

### 4.2 Factors Affecting Ionisation Energy

Three main factors determine the value of ionisation energy:

#### 1. Atomic Radius (Distance from Nucleus)
- **Effect**: As distance from nucleus increases, ionisation energy decreases
- Greater distance = weaker electrostatic attraction = easier to remove electron

#### 2. Nuclear Charge (Number of Protons)
- **Effect**: As nuclear charge increases, ionisation energy increases
- **Explanation**: More protons in nucleus = stronger positive charge  
  Stronger attraction to electrons = harder to remove electrons
- **Example**:  
  - Hydrogen (1 proton): 1st IE = 1310 kJ/mol  
  - Helium (2 protons): 1st IE = 2370 kJ/mol

#### 3. Shielding Effect (Electron Repulsion)
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
<p>
    <img src="https://cdn.savemyexams.com/uploads/2021/05/3.1.3-Ionization-Energies_-Trends-Successive-Ionisation-Energies-of-Calcium_1.png" alt="Successive Ionisation Energies" style="background: white; padding: 10px; border-radius: 5px;"/>
</p>
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

### 5.3 Regular Shapes (No Lone Pairs)

| Bond Pairs | Shape | Bond Angle | Example |
|------------|-------|-------------|----------|
| 2 | Linear | $180^\circ$ | ${BeCl}_2$ |
| 3 | Trigonal Planar | $120^\circ$ | ${AlCl}_3$ |
| 4 | Tetrahedral | $109.5^\circ$ | ${CH}_4$ |
| 5 | Trigonal Bipyramidal | $90^\circ$ & $120^\circ$ | ${PCl}_5$ |
| 6 | Octahedral | $90^\circ$ | ${SF}_6$ |

### 5.4 Irregular Shapes (With Lone Pairs)

#### Ammonia
- **Bond pairs**: 3
- **Lone pairs**: 1
- **Total pairs**: 4
- **Base shape**: Tetrahedral
- **Actual shape**: Trigonal Pyramidal
- **Bond angle**: $107^\circ$ (reduced from $109.5^\circ$ due to lone pair repulsion)

#### Water
- **Bond pairs**: 2
- **Lone pairs**: 2
- **Total pairs**: 4
- **Base shape**: Tetrahedral
- **Actual shape**: Angular/Bent
- **Bond angle**: $104.5^\circ$ (further reduced due to two lone pairs)

#### Xenon Tetrafluoride
- **Bond pairs**: 4
- **Lone pairs**: 2
- **Total pairs**: 6
- **Base shape**: Octahedral
- **Actual shape**: Square Planar
- **Bond angle**: $90^\circ$

### 5.5 Molecules with Double Bonds
- Double bonds repel other bonds as if they were single bonds
- Example: Carbon dioxide (${CO}_2$)
  - **Double bond pairs**: 2
  - **Lone pairs**: 0
  - **Shape**: Linear
  - **Bond angle**: $180^\circ$

### 5.6 Shape of Ions
**Method for determining ion shapes:**
1. Draw outer shell electrons of central atom
2. **For positive ions**: Remove electrons equal to the positive charge
3. **For negative ions**: Add electrons equal to the negative charge
4. Pair up electrons following normal rules
5. Determine shape using electron pair repulsion theory

**Examples:**
- ${NH}_4^+$: Remove 1 electron → 4 bond pairs, 0 lone pairs → Tetrahedral ($109.5^\circ$)
- ${NH}_2^-$: Add 1 electron → 2 bond pairs, 2 lone pairs → Angular ($104.5^\circ$)

### 5.7 Special Cases & Exceptions

#### Phosphorus(V) Fluoride (${PF}_5$)
- Uses d orbitals to expand octet
- **Shape**: Trigonal Bipyramidal
- **Bond angles**: $120^\circ$ (equatorial) and $90^\circ$ (axial)

#### Sulfur(VI) Fluoride (${SF}_6$)
- Uses d orbitals to expand octet
- **Shape**: Octahedral
- **Bond angles**: $90^\circ$

### 5.8 Key Shape Predictions

| Molecule/Ion | Bond Pairs | Lone Pairs | Shape | Bond Angle |
|--------------|------------|------------|-------|------------|
| ${BF}_3$ | 3 | 0 | Trigonal Planar | $120^\circ$ |
| ${SiCl}_4$ | 4 | 0 | Tetrahedral | $109.5^\circ$ |
| ${PCl}_4^+$ | 4 | 0 | Tetrahedral | $109.5^\circ$ |
| ${PCl}_6^-$ | 6 | 0 | Octahedral | $90^\circ$ |
| ${H}_2{S}$ | 2 | 2 | Angular | $92^\circ$ |

### Practical Tips

#### Predicting Molecular Polarity
- **Symmetric shapes** (linear, trigonal planar, tetrahedral, etc.): Often non-polar if all atoms are identical
- **Asymmetric shapes**: Usually polar due to uneven charge distribution
- Lone pairs often create molecular dipoles

#### Bond Angle Trends

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
  <p style="text-align: center; margin-top: 1.5rem; color: var(--muted); font-style: italic; margin-bottom: 0;">As lone pairs increase, bond angles decrease due to stronger repulsion</p>
</div>

#### Quick Shape Determination
1. Count total electron pairs around central atom
2. Identify number of lone pairs
3. Apply electron pair repulsion theory
4. Adjust bond angles for lone pair effects