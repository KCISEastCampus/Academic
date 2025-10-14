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
```
1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d → 5p → 6s → 4f → 5d → 6p → 7s → 5f → 6d → 7p
```

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
| $\text{moles} = \frac{\text{mass (g)}}{\text{molar mass (g/mol)}}$ | Calculate moles from mass |
| $\text{mass} = \text{moles} \times \text{molar mass}$ | Calculate mass from moles |
| $\text{moles} = \text{concentration (mol/dm³)} \times \text{volume (dm³)}$ | Solution calculations |
| $\text{moles} = \frac{\text{concentration} \times \text{volume (cm³)}}{1000}$ | Solution calculations (cm³) |

### 2.3 Reacting Mass Calculations
- Use balanced chemical equations to find mole ratios
- Example:  
  $$\text{CaCO}_3 + 2\text{HCl} \rightarrow \text{CaCl}_2 + \text{CO}_2 + \text{H}_2\text{O}$$
  1 mole $\text{CaCO}_3$ reacts with 2 moles $\text{HCl}$

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
```
Ion Source → Analyser → Detector
```

### 3.2 Time of Flight (TOF) Process

#### Stage 1: Ionisation
Two main methods:
- **Electron Impact**: High-energy electrons knock out electrons to form 1+ ions  
  $$\text{X}(g) + e^- \rightarrow \text{X}^+(g) + 2e^-$$
- **Electrospray Ionisation**: Sample gains protons to form $\text{XH}^+$ ions  
  $$\text{X}(g) + \text{H}^+ \rightarrow \text{XH}^+(g)$$

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
$$A_r = \frac{\sum(\text{isotope mass} \times \text{relative abundance})}{\sum\text{relative abundance}}$$

**Example - Chlorine:**
- $^{35}\text{Cl}$ (75%), $^{37}\text{Cl}$ (25%)
- $A_r = \frac{(35 \times 75) + (37 \times 25)}{100} = 35.5$

---

## 4. Ionisation Energy

### 4.1 Definitions
- **First Ionisation Energy**: Energy required to remove one mole of electrons from one mole of gaseous atoms to form one mole of gaseous 1+ ions  
  $$\text{Na}(g) \rightarrow \text{Na}^+(g) + e^-$$
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
| **Na** | [Ne] 3s¹ | 496 | Increased distance + more shielding |
| **Mg** | [Ne] 3s² | 738 | Increased nuclear charge |

#### Visual Summary

```
HIGH IONISATION ENERGY              LOW IONISATION ENERGY
     ↓                                       ↓
Small atom                            Large atom
High nuclear charge                   Low nuclear charge  
Minimal shielding                     Extensive shielding
Close to nucleus                      Far from nucleus
```

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