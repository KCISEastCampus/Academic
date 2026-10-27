---
title: Atomic Structure and Evidence
layout: subjects
mathjax: true
grade: as
subject: as-chemistry
permalink: /alevel/as-chemistry/atomic-structure/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">How can measurements reveal an atom?</h2>

A model of an atom must explain observations, not merely give a memorable picture. Early indivisible-atom models could not explain electrons or radioactive change. Scattering evidence supports a small positive nucleus and mostly empty space; electrons occupy quantum states around it. A shell drawing is a representation of energy and population, not a photograph of miniature planets. Models changed because new evidence constrained them.

You need charge, simple formulae and [moles and relative mass](/alevel/as-chemistry/amount-and-equations/). Here you will infer particle counts, interpret an isotope spectrum, connect a TOF measurement with mass, write electron configurations and use ionisation energies as evidence. Tasks and numerical datasets are self-written; constructed measurements are not real observations.

<h2 id="particles">Count the nucleus separately from the electrons</h2>

A proton has relative charge +1 and relative mass about 1; a neutron has charge 0 and mass about 1; an electron has charge −1 and relative mass about 1/1836. Nearly all atomic mass is in the nucleus; the electrons account for most atomic extent. The proton number $Z$ identifies the element. The mass number $A$ counts protons plus neutrons: it is an integer for a specified isotope, not a weighted mean.

In $\ce{^{A}_{Z}X^{q+}}$, protons = $Z$, neutrons = $A-Z$, electrons = $Z-q$. A negative charge means extra electrons: an ion with charge −1 has $Z+1$. Ion formation changes electrons, not the element. **Isotopes** have the same proton number and different neutron numbers. Their neutral atoms normally have the same electron configuration and very similar chemistry; their masses and some physical behaviour differ.

For example $\ce{^{24}_{12}Mg^{2+}}$ contains 12 protons, 12 neutrons and 10 electrons. Check total charge: $12-10=+2$.

<div class="lesson-check" markdown="1">
<h3 id="particle-check">Identify what changed</h3>
<!-- task:particle-check -->
A report says that the electron has charge +1 and relative mass 1, and that rare large-angle deflections of positive probes support positive charge spread uniformly through the atom. Correct the particle values and assess the scattering claim. For 26Mg2+ (Z = 12) and 37Cl− (Z = 17), state proton, neutron and electron numbers. Compare 26Mg2+ with neutral 24Mg: identify the isotope difference and the ionisation difference. A learner says that Mg2+ has two fewer protons than Mg. Explain the error.
<!-- /task:particle-check -->
<details markdown="1"><summary>Hint</summary>
Use the nuclear numbers before changing the electron count. Check charge independently.
</details>
<details markdown="1"><summary>Solution and check</summary>
An electron has charge −1 and relative mass about 1/1836. A neutron has charge 0 and mass about 1; a proton +1 and about 1. Most probes passing through with rare large deflections supports a small concentrated positive nucleus rather than uniformly spread positive charge. 26Mg2+: 12 p, 14 n, 10 e. 37Cl−: 17 p, 20 n, 18 e. The Mg isotopes differ by two neutrons; the 2+ ion has lost two electrons relative to its neutral atom. Removing protons would change the element, not make the magnesium ion. If you used A as the electron count, return to [the nuclear/charge distinction](#particles) and use the later retry.
</details>
</div>

<h2 id="isotope-evidence">A spectrum separates masses; the average need not be a peak</h2>

A simple elemental mass spectrum plots detector response against **mass-to-charge ratio**, $m/z$. Here all peaks refer to single-atom, singly positive ions, so the numerical $m/z$ identifies relative isotopic mass. Do not average the horizontal positions without their abundances. A 2+ ion would have half the $m/z$ of the same 1+ isotope; establish charge before interpreting a peak.

<div class="worked-example" markdown="1">
**Self-written example, constructed isotope record.** An element has relative isotope masses 10.0 and 11.0, with relative responses 20 and 80. Assume equal detection response per ion. In 100 atoms, the total relative mass is $20(10.0)+80(11.0)=1080$, so $A_r=10.80$. No atom has to have mass 10.80, and no peak there is expected. If responses were 2 and 8 rather than percentages, divide by their total 10, not by 100.
</div>

<div role="region" aria-label="Worked-example mass spectrum, scroll horizontally" tabindex="0" style="overflow-x:auto" markdown="1">

![Constructed elemental spectrum for the worked example: m/z 10 and 11 have relative responses 20 and 80.](/assets/img/chemistry-as-isotope-spectrum.svg){: width="520" height="280" style="min-width:440px" }

</div>

<div class="lesson-check" markdown="1">
<h3 id="spectrum-check">Interpret a new record</h3>
<!-- task:spectrum-check -->
Read the peak positions and responses from the constructed spectrum below; all ions are mononuclear 1+. Reference isotope patterns, rounded for this task, are Mg: masses 24/25/26 with responses 79/10/11; Ne: 20/22 with 90/10; Cl: 35/37 with 75/25. Identify which candidate matches, justify the comparison, and calculate Ar. Explain why a missing peak at that mean does not refute the result. State one necessary assumption about detector response. How would the position of the 24.0 isotope change if it formed a 2+ ion?
<!-- /task:spectrum-check -->
<div role="region" aria-label="New mass spectrum, scroll horizontally" tabindex="0" style="overflow-x:auto" markdown="1">

![Constructed record: mononuclear 1+ peaks at m/z 24, 25, 26 with relative responses 79, 10, 11.](/assets/img/chemistry-as-isotope-check.svg){: width="520" height="280" style="min-width:440px" }

</div>

<details markdown="1"><summary>Hint</summary>
Weight the masses. Keep isotope mass separate from m/z.
</details>
<details markdown="1"><summary>Solution and check</summary>
The peaks match Mg, not the Ne or Cl positions/pattern. $A_r=(24.0\times79+25.0\times10+26.0\times11)/100=24.32$. The mean describes the mixture, not an additional isotope. Relative response must represent relative numbers (or be corrected for unequal detector response). The 2+ isotope would appear at $m/z=12.0$; it has not become a mass-12 atom. If your mean was 25.0, you ignored abundance: revisit [weighting](#isotope-evidence), then retry with the new record below.
</details>
</div>

<h2 id="tof">Separate the jobs in a time-of-flight instrument</h2>

Ionisation produces charged gas-phase particles. Electron-impact ionisation removes an electron; electrospray can produce protonated ions, so a protonated molecular peak is not automatically the neutral molecule mass. The acceleration stage gives the compared ions equal kinetic energy under the stated equal-charge conditions; they then drift through a field-free tube in a vacuum. The vacuum reduces collisions that would change the flight. Arrival at the detector produces a current as positive ions gain electrons. The signal times and amounts give mass/charge and relative abundance.

For equal kinetic energy $E_k$ and drift distance $L$:

$$E_k=\tfrac12mv^2,\qquad t=\frac{L}{v},\qquad t\propto\sqrt{m}$$

Here $m$ is ion mass and $v$ speed. Solve first for $v=\sqrt{2E_k/m}$, then substitute into time: $t=L\sqrt{m/(2E_k)}$. In a ratio, the common $L$ and $E_k$ factors cancel, leaving the square root of the mass ratio.

The lighter ion is faster; equal energy does **not** mean equal speed. These comparisons require the same path and kinetic energy, with charge accounted for. They do not describe neutral atoms simply falling down a tube. Molecular mass measurements connect to [organic analysis](/alevel/as-chemistry/organic-analysis/); molecular fragmentation is distinct from an elemental isotope calculation.

<div class="lesson-check" markdown="1">
<h3 id="tof-check">Test the instrument explanation</h3>
<!-- task:tof-check -->
Ions A and B have the same positive charge, travel the same drift distance and have equal kinetic energy. Their masses are in the ratio 20:40. Find tB/tA. Put ionisation, acceleration, drift and detection in a defensible order, and explain the vacuum and how a positive ion produces a detector current. A report assumes equal ion speed and uses flight time alone as a measure of abundance. Correct both claims.
<!-- /task:tof-check -->
<details markdown="1"><summary>Hint</summary>
Use energy to compare speeds; separate when a pulse arrives from how large its signal is.
</details>
<details markdown="1"><summary>Solution and check</summary>
$t_B/t_A=\sqrt{40/20}=\sqrt2\approx1.41$. Ionise → accelerate → drift → detect, then analyse times and responses. Vacuum limits collisions. Positive ions gain electrons at the detector; electrons supplied through the external circuit produce a current. Equal energy gives unequal speeds for unequal masses. Time locates a mass/charge peak; response reflects how many ions are detected, subject to response assumptions. If you used a time ratio 2, derive the square-root relation from the energy equation again.
</details>
</div>

<h3 id="molecular-mass">Establish the molecular-ion identity first</h3>

When an intact molecular ion M+ has charge +1 and negligible electron mass, its m/z numerically gives Mr: an explicitly identified M+ peak at 46.0 gives Mr ≈ 46.0. For an explicitly identified [M+H]+ peak, subtract the added proton mass (about 1.0 here): m/z 47.0 gives neutral Mr ≈ 46.0. A fragment peak need not represent the whole molecule; a peak location without ion identity is insufficient.

<div class="lesson-check" markdown="1">
<!-- task:molecular-check -->
Sample A has an explicitly identified intact M+ ion at m/z 58.0. Sample B has an explicitly identified [M+H]+ ion at m/z 61.0; use relative proton mass 1.0. Determine the neutral Mr of each. Could an unidentified fragment peak at m/z 31 establish either molecular mass? Explain.
<!-- /task:molecular-check -->
<details markdown="1"><summary>Hint</summary>
Separate intact molecular ions, protonated ions and fragments.</details>
<details markdown="1"><summary>Solution and check</summary>
A has Mr ≈ 58.0; B has Mr ≈ 60.0 after subtracting the proton. An unidentified fragment at 31 cannot by itself establish the parent molecular mass. If you reported 61 for B, identify what was added before treating m/z as neutral mass.
</details>
</div>

<h2 id="electron-configurations">Represent the electrons in states, not circular tracks</h2>

A shell has a principal number $n$; subshells include s, p and d. An orbital is a quantum state associated with a spatial probability distribution, not an electron path. Each orbital holds at most two electrons with opposite spins. An s subshell has one orbital (2 electrons), p has three (6), d has five (10). In a subshell, occupy equal-energy orbitals singly with parallel spins before pairing. For example p³ is `↑  ↑  ↑`; p⁴ is `↑↓  ↑  ↑`.

Build neutral configurations through $Z=36$ in the order 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, respecting capacities. The notation $2p^6$ gives shell 2, p subshell, six electrons. [Ar] abbreviates $1s^2 2s^2 2p^6 3s^2 3p^6$. Useful ground-state exceptions are Cr: $[\mathrm{Ar}]3d^5 4s^1$ and Cu: $[\mathrm{Ar}]3d^{10}4s^1$; the subshell energies are close, and a simplistic filling order alone does not predict every atom. Kr ends $3d^{10}4s^2 4p^6$.

When transition-metal atoms form ions, remove 4s electrons before 3d. Fe is $[\mathrm{Ar}]3d^6 4s^2$, Fe²⁺ is $[\mathrm{Ar}]3d^6$, and Fe³⁺ is $[\mathrm{Ar}]3d^5$. Check the total count against $Z$ minus charge; do not leave 4s full simply because it was filled first.

<div class="lesson-check" markdown="1">
<h3 id="configuration-check">Make and check an electron record</h3>
<!-- task:configuration-check -->
Write ground-state electron configurations for Cr (Z = 24), Mn2+ (Z = 25), and Br− (Z = 35). Count the electrons in each. Draw the three p-orbital boxes for a p5 subshell, showing spins. Explain what is wrong with placing four parallel-spin electrons into one p orbital.
<!-- /task:configuration-check -->
<details markdown="1"><summary>Hint</summary>
Check charge before filling; distinguish an entire p subshell from one orbital.
</details>
<details markdown="1"><summary>Solution and check</summary>
Cr: [Ar]3d5 4s1, 24 electrons; Mn2+: [Ar]3d5, 23 electrons; Br−: [Ar]3d10 4s2 4p6, 36 electrons. p5 has two opposite-spin pairs and one singly occupied orbital: ↑↓, ↑↓, ↑. One orbital cannot hold four electrons or a same-spin pair. If Mn2+ retained 4s electrons, revisit [ion formation](#electron-configurations), then use the Cu+ retry.
</details>
</div>

<h2 id="ionisation-evidence">Energy changes test the arrangement</h2>

**First ionisation energy** is the energy needed to remove one mole of electrons from one mole of gaseous atoms, forming one mole of gaseous 1+ ions. It is positive: energy is required to overcome attraction. Include gas states and one electron per atom:

$$\ce{Mg(g) -> Mg+(g) + e-},\qquad\ce{Mg+(g) -> Mg^2+(g) + e-}$$

The second equation is the second ionisation energy, not removal of two electrons from neutral Mg. Successive energies rise as an increasingly positive ion attracts the remaining electrons more strongly; a particularly large jump indicates removal from an inner shell. A constructed sequence 600, 1200, 5000, 6600 kJ mol⁻¹ has its large jump between the second and third removals, supporting two outer electrons, not two shells. These numbers are a model record, not identification of an element.

Across Period 3, increasing nuclear charge generally strengthens attraction as shielding changes little within the same shell. Two dips carry subshell evidence: Al loses a higher-energy 3p electron more easily than Mg loses 3s; S loses an electron from a paired 3p orbital, where electron repulsion makes removal easier than from P with three singly occupied 3p orbitals. Do not explain every dip as an extra shell. Down Group 2, the outer electron is in a higher shell and more shielded; increased distance and shielding outweigh increased nuclear charge, so first ionisation energy generally falls.

<div class="lesson-check" markdown="1">
<h3 id="energy-check">Choose an explanation from evidence</h3>
<!-- task:energy-check -->
Correct the definition “first ionisation energy is the energy to remove an electron from any atom” and write the first ionisation equation for Al. Constructed approximate first-ionisation records in kJ mol−1 are Na–Ar: 500, 740, 580, 790, 1010, 1000, 1250, 1520; Be, Mg, Ca, Sr, Ba: 900, 740, 590, 550, 500. Infer the overall directions and identify the Period-3 exceptions. A constructed successive-ionisation record for a Period-3 element X is 580, 1820, 2740, 11600 kJ mol−1. Infer the number of outer electrons, identify the decisive comparison and write its outer-shell configuration. Mg has successive values 740, 1450, 7700, 10500: explain their evidence for 3s2. Write the equation for the third ionisation of X. Explain why the first ionisation energies fall from Mg to Al and from P to S, and generally fall down Group 2, using different appropriate electron arguments.
<!-- /task:energy-check -->
<details markdown="1"><summary>Hint</summary>
A jump reveals crossing a shell boundary; a small Period-3 dip needs a subshell or pairing argument.
</details>
<details markdown="1"><summary>Solution and check</summary>
The definition needs one mole of gaseous atoms, each losing one electron to give one mole of gaseous 1+ ions; Al(g) → Al+(g) + e−. The Period-3 record generally rises, with Mg→Al and P→S dips; the Group-2 record falls. Mg has a large jump after its second removal, consistent with removing its two outer 3s electrons before an inner-shell electron. The jump after the third electron supports three outer electrons; in Period 3 the outer configuration is 3s2 3p1. Third ionisation: X2+(g) → X3+(g) + e−. Mg→Al: removal changes from 3s to higher-energy 3p. P→S: pairing repulsion in one 3p orbital makes the paired electron easier to remove. Down Group 2: greater distance and inner-electron shielding outweigh rising nuclear charge. The sequence alone does not identify a unique element or occupied-shell count; combined with the stated Period-3 condition, X is Al. If one general phrase replaced all three explanations, return to [the distinct comparisons](#ionisation-evidence).
</details>
</div>

<h2 id="retry">Close the answers and use new evidence</h2>

<div class="lesson-check" markdown="1">
<h3 id="retry-atoms">A corrected report</h3>
<!-- task:retry-atoms -->
An unknown element has mononuclear 1+ isotope signals at relative masses 63.0 and 65.0 with responses 3 and 1. Calculate Ar and explain the peak assumption. Separately, state p, n and e for 65Cu+ (Z = 29), write its electron configuration, and write an equation for the second ionisation of Cu. For equal-energy ions of masses 25 and 36 on the same path, calculate the heavier-to-lighter flight-time ratio. Use these as separate claims: the isotope record alone does not prove a particular electron arrangement.
<!-- /task:retry-atoms -->
<details markdown="1"><summary>Hint</summary>
Normalize by the total signal; remove 4s from neutral Cu before 3d.
</details>
<details markdown="1"><summary>Solution and check</summary>
$A_r=(63.0\times3+65.0)/4=63.5$, assuming equal response per detected singly charged atom. 65Cu+: 29 p, 36 n, 28 e; [Ar]3d10. Second ionisation: Cu+(g) → Cu2+(g) + e−. Flight ratio $\sqrt{36/25}=1.20$. The mean is not an isotope, and atomic mass evidence alone does not establish orbital populations. Return to the specific failed section before attempting an unseen later task in [the full-course review](/alevel/as-chemistry/as-review/).
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-energy">Test the explanation on new comparisons</h3>
<!-- task:retry-energy -->
A new Period-3 record has a large successive-ionisation jump after the first electron. Infer the outer configuration and write its first-ionisation equation using symbol Y. Predict and explain which has the greater first ionisation energy: Na or Mg, and Mg or Ca. Explain separately why S is below P. Your explanation must distinguish nuclear charge, shell shielding and paired-electron repulsion.
<!-- /task:retry-energy -->
<details markdown="1"><summary>Hint</summary>
Name which electron is being removed in each comparison.</details>
<details markdown="1"><summary>Solution and check</summary>
The Period-3 outer configuration is 3s1; Y(g) → Y+(g) + e−. Mg exceeds Na because nuclear charge rises within the same main shell with similar shielding. Mg exceeds Ca because the Ca outer electron is in a higher, more shielded shell. S is below P because a paired 3p electron has additional electron repulsion. A jump after one electron does not indicate one occupied shell. Close this answer before retrying; if the distinctions remain unclear, return to ionisation-evidence.
</details>
</div>

<h2 id="sources">Sources and next step</h2>

[OxfordAQA 9620 specification, Version 5.3](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf), 3.1.1; Lister/Renshaw, *International A Level Chemistry* (OUP, 2016), Chapter 1, pp. 13–28. Selected source pages were read; the molecular-ion rules here are limited to explicitly identified ions; detailed analysis follows later. Every task and numerical record is self-written, without official marks. Continue to [bonding and shape](/alevel/as-chemistry/bonding-and-shape/), or [course entrance](/alevel/as-chemistry/).
