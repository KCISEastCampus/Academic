---
title: Mass and Binding Energy
layout: subjects
mathjax: true
grade: a2
subject: a2-physics
permalink: /alevel/a2-physics/mass-and-binding-energy/
toc_headings: h2, h3, h4
study_page: true
---

[A2 Physics](/alevel/a2-physics/) · PH04 · 3.12.2

Why can joining particles release energy? Keep a mass account for the system, distinguish a nucleus from an atom, then connect mass differences to binding-energy graphs and reaction energy.

**Before starting:** recall nuclide notation, proton/neutron counts, energy conservation and J/eV units. [Nuclear radius](/alevel/a2-physics/nuclear-radius/) distinguishes models of size; this lesson asks about rest energy. Work through one nucleus before attempting a whole reaction.

## Checkpoint: identify the objects {#checkpoint-mass-objects}

A neutral helium-4 atom and a helium-4 nucleus contain the same numbers of protons and neutrons. Do they have the same mass? What must be tracked before using an atomic mass in a nuclear mass calculation?

<details markdown="1">
<summary>Check the objects</summary>

The atom includes two electrons. Its mass also includes their binding-energy contribution. Never combine an atomic mass with free-proton masses without accounting for the electrons. Electronic binding energies are often negligible at the MeV precision of these tasks, but the electron rest masses are a different issue.

</details>

## Rest energy and the atomic mass unit {#mass-energy}

For a system compared in its own rest frame, its rest energy is $E_{\mathrm{rest}}=Mc^2$. Supplying internal energy without adding matter increases the system rest mass; removing energy decreases it. A moving object does not gain **rest mass** merely because its speed increases. Include escaped radiation and kinetic energy when balancing a complete reaction.

$$\Delta E_{\mathrm{rest}}=\Delta M c^2,\qquad 1\,\mathrm{eV}=1.60\times10^{-19}\,\mathrm J,\qquad 1\,\mathrm{MeV}=1.60\times10^{-13}\,\mathrm J.$$

The atomic mass unit u is one twelfth of the mass of a neutral carbon-12 atom in its ground state. It is a unit of mass, not energy. The useful energy equivalent is $1\,\mathrm u\,c^2\approx931.5\,\mathrm{MeV}$. Follow the constants supplied in a question and retain extra figures before subtracting nearly equal masses.

### Example 1: explain an approximate conversion {#example-1}

*Adapted from OxfordAQA 9630 PH04 June 2024 Q4.1; QP p.8 and MS p.11 read. The rounding discussion is added.*

Using $1\,\mathrm u=1.661\times10^{-27}\,\mathrm{kg}$, $c=3.00\times10^8\,\mathrm{m\,s^{-1}}$ and the joule-to-MeV conversion above, show that the energy equivalent is about 930 MeV. Explain why the intermediate result need not equal 931.5 exactly.

$$1\,\mathrm u\,c^2=(1.661\times10^{-27})(3.00\times10^8)^2\,\mathrm J=1.4949\times10^{-10}\,\mathrm J,$$

$$\frac{1.4949\times10^{-10}}{1.60\times10^{-13}}\,\mathrm{MeV}\approx934\,\mathrm{MeV}\approx930\,\mathrm{MeV}\quad(2\text{ significant figures}).$$

The supplied constants are rounded. The approximate 930 MeV statement and the usual 931.5 MeV equivalent are consistent at the stated precision; changing units does not turn the numerical value of a mass directly into an energy without the conversion.

## One nucleus: mass defect and binding energy {#mass-defect}

Binding energy is the energy required to separate a nucleus completely into its free protons and neutrons, with no final relative kinetic energy. Formation from those free nucleons releases the same energy if the initial and final states are reversed. A bound nucleus has lower rest mass than the same separate nucleons.

For a **nuclear mass** $M_{\mathrm{nuc}}$, define positive mass defect and total binding energy:

$$\delta m=Z m_p+(A-Z)m_n-M_{\mathrm{nuc}},\qquad B=\delta m c^2,\qquad b=\frac BA.$$

<img src="/assets/img/physics-nuclear-binding-levels.svg" alt="Explanation schematic: separated nucleons have higher rest energy than the bound nucleus. The upward separation energy and downward formation energy have the same magnitude B. No numerical answers are supplied." width="520" height="330" data-lazy-ignore="true">

The total $B$ belongs to one nucleus; $b$ is the average per nucleon. Neither is stored fuel energy available without choosing a possible reaction. A larger $b$ indicates more tightly bound nucleons as a broad comparison, but does not by itself prove that every decay channel is forbidden.

### Example 2: use nuclear masses consistently {#example-2}

*Self-written; supplied rounded teaching masses.*

For a helium-4 nucleus use $m_p=1.00728\,\mathrm u$, $m_n=1.00867\,\mathrm u$, $M_{\mathrm{nuc}}=4.00150\,\mathrm u$ and $1\,\mathrm u\,c^2=931.5\,\mathrm{MeV}$. Find mass defect, total binding energy and binding energy per nucleon.

$$\delta m=2(1.00728)+2(1.00867)-4.00150=0.03040\,\mathrm u,$$

$$B=0.03040(931.5)\,\mathrm{MeV}\approx28.3\,\mathrm{MeV},\qquad b=\frac{28.3176}{4}\,\mathrm{MeV}\approx7.08\,\mathrm{MeV}.$$

The separation work is positive; formation can release about 28.3 MeV for the whole nucleus, not 7.08 MeV. The last value is an average per nucleon. Inverse checking adds the mass defect back to the nuclear mass and recovers the free-nucleon sum.

## Atomic masses: keep the electron account {#atomic-masses}

When neutral atomic masses are supplied, an alternative binding-energy account is:

$$\delta m\approx Zm({}^{1}\mathrm H)+(A-Z)m_n-M_{\mathrm{atom}}.$$

Each neutral hydrogen atom contributes one proton and one electron. The electron counts match the final neutral atom; the small difference in electronic binding energies is neglected here. This does not authorise using a bare-proton mass in place of a hydrogen-atom mass. For reactions, balance charge/nucleon numbers and check whether electron numbers cancel before using atomic masses. Positrons, electrons and ions require their own account.

## A reaction: sum the initial and final states {#reaction-energy}

Define energy release $Q$ as positive for an exothermic reaction:

$$Q=(M_{\mathrm{initial}}-M_{\mathrm{final}})c^2=\sum B_{\mathrm{products}}-\sum B_{\mathrm{reactants}}.$$

The binding-energy expression assumes the same total constituent nucleons on both sides, with any free nucleons included and assigned zero nuclear binding energy. Use total binding energies and all multiplicities. Released energy appears in kinetic energy and radiation; it is not a loss of total energy from the complete system.

### Example 3: atomic masses in a fusion account {#example-3}

*Adapted from OxfordAQA 9630 PH04 June 2024 Q4.2; QP p.8 and MS p.11 read. The supplied values are explicitly treated as neutral atomic masses here; electron bookkeeping and the interpretation are added.*

Consider the reaction:

$${}^{3}_{2}\mathrm{He}+{}^{3}_{2}\mathrm{He}\rightarrow{}^{4}_{2}\mathrm{He}+2\,{}^{1}_{1}\mathrm p.$$

Use neutral atom masses $M({}^{3}\mathrm{He})=3.016029\,\mathrm u$, $M({}^{4}\mathrm{He})=4.002603\,\mathrm u$, $M({}^{1}\mathrm H)=1.007823\,\mathrm u$, neglect electronic binding-energy differences and use 931.5 MeV per u of mass difference. Find the energy release.

$$\delta m=2(3.016029)-4.002603-2(1.007823)=0.013809\,\mathrm u,\qquad Q=0.013809(931.5)\,\mathrm{MeV}\approx12.9\,\mathrm{MeV}.$$

The nuclei have four protons in total on either side; the corresponding neutral-atom account therefore has four electrons on either side. This is why these atomic masses can be used to estimate the nuclear reaction energy. The supplied hydrogen value is not the mass of a bare proton. The positive mass difference agrees with the release of kinetic energy.

## Binding-energy graph: read the vertical quantity {#binding-energy-graph}

<img src="/assets/img/physics-nuclear-binding-curve.svg" alt="Constructed teaching graph of average binding energy per nucleon in MeV against nucleon number. Marked raw points are A=100 at 8.6 MeV per nucleon and A=200 at 7.9 MeV per nucleon. The curve is illustrative, not measured isotope data; no reaction-energy answer is drawn." width="520" height="360" data-lazy-ignore="true">

This illustrative curve is high near the iron/nickel region. Light-nucleus fusion and heavy-nucleus fission can release energy when the final **total** binding energy is greater. The graph is not a universal reaction rule: check possible products, conservation and all nucleon counts. It does not give total nuclear binding energy directly, and it does not show reaction rates or conditions for a reactor.

## Data investigation: one event or two? {#data-binding-records}

*Adapted data task from OxfordAQA 9630 PH04 June 2024 Q4.3; QP p.9 and MS p.11 read. The cycle multiplicity is supplied explicitly here; questions and retry are adapted. Values are provided teaching inputs, not this school’s measurements.*

A reaction is:

$${}^{2}_{1}\mathrm H+{}^{1}_{1}\mathrm p\rightarrow{}^{3}_{2}\mathrm{He}+\gamma.$$

Use the table of total nuclear binding energies. A specified cycle contains **two copies of this reaction**. Find the energy release per reaction and the contribution per cycle in J. Explain the factor connecting them, and predict the change if there were three copies instead.

| Particle | Total binding energy / pJ |
| --- | --- |
| Deuterium nucleus | 0.35593 |
| Proton | 0 |
| Helium-3 nucleus | 1.23489 |

<details markdown="1">
<summary>Hint</summary>

These are total nuclear energies; do not multiply by mass number. Convert pJ to J after accounting for the number of events.

</details>

<details markdown="1">
<summary>Analysis and retry</summary>

$$Q_{\mathrm{event}}=(1.23489-0.35593)\,\mathrm{pJ}=0.87896\,\mathrm{pJ},\qquad Q_{\mathrm{cycle}}=2Q_{\mathrm{event}}=1.75792\times10^{-12}\,\mathrm J.$$

The factor two is a reaction count, not a unit conversion or nucleon number. Three copies contribute about 2.64 pJ. **Retry:** if the table instead contained binding energy per nucleon, convert each nucleus to a total before subtracting.

</details>

## Practice {#practice}

### Question 1: switch to atomic masses {#question-1}

*Self-written.*

For a neutral carbon-12 atom take mass exactly $12\,\mathrm u$, neutral hydrogen mass $1.007825\,\mathrm u$ and neutron mass $1.008665\,\mathrm u$. Neglect electronic binding-energy differences. Find total binding energy and binding energy per nucleon using 931.5 MeV per u. Explain how the electron count is handled.

<details markdown="1">
<summary>Hint</summary>

A carbon nucleus has six protons and six neutrons. Use hydrogen atoms when the final mass includes electrons.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

$$\delta m=6(1.007825)+6(1.008665)-12=0.098940\,\mathrm u,\quad B\approx92.2\,\mathrm{MeV},\quad b\approx7.68\,\mathrm{MeV}.$$

Six hydrogen atoms and one neutral carbon atom both include six electrons. Neglecting electronic binding energies allows that electron mass contribution to cancel. **Retry:** why would free-proton masses combined with 12 u give too small a binding energy?

</details>

### Question 2: recover the nuclear mass {#question-2}

*Self-written.*

A nucleus contains eight protons and eight neutrons and has total binding energy 127.6 MeV. Use the free-nucleon masses in Example 2 and 931.5 MeV per u. Find its nuclear mass in u. Should it be greater or smaller than the free-nucleon sum?

<details markdown="1">
<summary>Hint</summary>

Invert the positive mass-defect account, keeping guard digits.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

$$M_{\mathrm{nuc}}=8(1.00728)+8(1.00867)-\frac{127.6}{931.5}\approx15.99062\,\mathrm u.$$

The bound nucleus is lighter than its separate nucleons. The shown extra digits support checking, not an experimental precision claim. **Retry:** increasing binding energy at fixed composition decreases nuclear rest mass.

</details>

### Question 3: turn graph heights into a reaction total {#question-3}

*Adapted from OxfordAQA 9630 PH04 June 2024 Q14; QP p.24 original graph viewed and MS p.20 key D read. The nuclide label, products and plotted values are replaced by an explicit simplified model and original teaching graph.*

Use the two marked points on the teaching binding-energy graph. In a simplified model, a nucleus with nucleon number 200 splits into two identical nuclei of nucleon number 100, with no free neutrons emitted. Estimate total energy release in MeV and explain why subtracting the two graph heights alone is insufficient.

<details markdown="1">
<summary>Hint</summary>

The vertical axis is energy per nucleon; account for all 200 nucleons on each side.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

$$Q=2(100)(8.6)-200(7.9)=140\,\mathrm{MeV}.$$

The height difference is 0.7 MeV per nucleon, not the energy per fission. The product count and total nucleon number have been stated for this model. **Retry:** actual products with free neutrons require a fresh total binding-energy account; free neutrons have zero nuclear binding energy.

</details>

### Question 4: check a sign and a system boundary {#question-4}

*Self-written.*

An excited nucleus emits a 2.0 MeV photon. Neglect recoil energy for this estimate. Use $c=3.00\times10^8\,\mathrm{m\,s^{-1}}$ and $1\,\mathrm{MeV}=1.60\times10^{-13}\,\mathrm J$. Estimate the change of nuclear rest mass, defining change as final minus initial. Has total energy disappeared?

<details markdown="1">
<summary>Hint</summary>

The sign of final-minus-initial mass differs from positive mass loss. Include the photon in the complete energy account.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

$$\Delta M\approx-\frac{2.0(1.60\times10^{-13})}{(3.00\times10^8)^2}\approx-3.6\times10^{-30}\,\mathrm{kg}.$$

Nuclear rest energy decreases while the photon carries energy away. A system including both conserves total energy. **Retry:** if recoil is included, the nuclear rest-energy decrease includes both photon and recoil kinetic energies.

</details>

### Question 5: diagnose two mass accounts {#question-5}

*Self-written.*

A student calculates helium binding energy using the mass of a neutral helium atom but the masses of two bare protons and two neutrons, then divides the result by four and calls it the total binding energy. Identify both errors and describe a consistent correction without looking up new numbers.

<details markdown="1">
<summary>Hint</summary>

Check the electron count first, then distinguish total energy from average energy.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

The first account contains electrons only on the atom side. Either use nuclear mass with bare protons, or use neutral hydrogen atoms with neutral helium and state the electronic-binding approximation. Dividing by four produces binding energy per nucleon, not total binding energy. **Retry:** an atomic mass is not the mass of a nucleus even when both share the same nucleon number.

</details>

### Question 6: explain the mechanism in English {#question-6}

*Self-written.*

Write a short explanation of how fusion of suitable light nuclei or fission of suitable heavy nuclei can release energy. Refer to the vertical axis of the binding-energy graph, total binding energy, rest mass, and the forms carrying released energy. Does a favourable energy balance alone guarantee a rapid reaction?

<details markdown="1">
<summary>Hint</summary>

First account for all nucleons; then connect a larger total binding energy to a smaller total rest mass.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

For a suitable reaction, the products have greater total binding energy and lower total rest mass than the reactants. The difference appears as kinetic energy and radiation, conserving total energy. The graph gives average binding energy per nucleon, so totals and conservation must be checked. A positive energy release does not establish a reaction rate or overcome a reaction barrier. **Retry:** distinguish this energy account from the temperature and neutron conditions studied in later lessons.

</details>

## Quick reference {#quick-reference}

| Account | Relationship and condition |
| --- | --- |
| Nuclear masses | $\delta m=Zm_p+(A-Z)m_n-M_{\mathrm{nuc}}$ |
| Neutral atomic masses | $\delta m\approx Zm({}^{1}\mathrm H)+(A-Z)m_n-M_{\mathrm{atom}}$; neglect electronic binding differences |
| One nucleus | $B=\delta m c^2$; $b=B/A$ |
| One reaction | $Q=(M_{\mathrm{initial}}-M_{\mathrm{final}})c^2$; include every particle and multiplicity |

[Previous: Nuclear Radius](/alevel/a2-physics/nuclear-radius/) · [PH04 course index](/alevel/a2-physics/#ph04-thermal-physics)

## Sources and scope {#sources}

OxfordAQA 9630 PH04, [specification body v4.4](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf) Section 3.12.2, printed p.28/PDF p.27, checked 21 October 2026. June 2024 QP pp.8–9/24 paired with MS pp.11/20 supports Examples 1/3, the reaction-data task and Question 3. Original QP tables and graph were viewed. Atomic-mass labels and the Question 3 reaction model are made explicit here rather than copying ambiguous particle labels. Jim Breithaupt Sections 24.2–24.3, printed pp.422–427/PDF pp.438–443, supports explanation; no whole textbook question is reproduced. Other examples and tasks are self-written, including the illustrative binding curve. Reactor operation, safety and the solar hydrogen cycle require later lessons; this page does not complete those sections on its own.

{% include exam_topic_practice.html %}
