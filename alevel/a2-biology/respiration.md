---
title: "Respiration: ATP, gas exchange and RQ"
layout: subjects
mathjax: true
grade: a2
subject: a2-biology
study_page: true
toc_headings: h2
lang: en
permalink: /alevel/a2-biology/respiration/
---

[BL03 learning route](/alevel/a2-biology/paper-3/) · OxfordAQA 9610 · 3.3.3 · RP8

Attempt each task before opening its hint or answer.

## Start with a boundary {#start}

Respiration transfers energy from organic substrates into ATP synthesis. It is a set of cellular reactions, not the movement of air into lungs. ATP hydrolysis can be coupled to active transport, biosynthesis and movement; ATP must continually be resynthesised from ADP and inorganic phosphate.

By the end, explain where carbon, electrons and protons move, then distinguish oxygen uptake from a respirometer's net gas change. If ATP, oxidation/reduction or gradients are unfamiliar, use the [prerequisites](/alevel/a2-biology/prerequisites/#energy-carriers). For the measurement sample lesson, begin at [gas balance](#gas-balance) and return to the mechanisms when explaining the reading.

<!-- task:R0 -->
**Self-written / 自拟题 — R0**

A living seed takes up oxygen but its gas chamber keeps the same volume. Does this observation alone show that respiration has stopped? Name the other gas you would need to consider.
<!-- /task:R0 -->

<details markdown="1">
<summary>Hint R0</summary>

Separate the amount entering the gas space from the amount leaving it.

</details>

<details markdown="1">
<summary>Check R0</summary>

No. Carbon dioxide production can replace the oxygen consumed. A net reading combines both processes; it does not measure either separately.

</details>

## Glycolysis: invest ATP to obtain a net return {#glycolysis}

In the cytoplasm, ATP phosphorylates glucose. Two ATP are invested before the six-carbon intermediate splits into two three-carbon triose phosphates. These are oxidised to two pyruvate molecules: NAD accepts hydrogen/electrons and becomes reduced NAD. Four ATP are made by substrate-level phosphorylation, so the **net gain is two ATP per glucose**, together with two reduced NAD.

Substrate-level phosphorylation transfers a phosphate from an intermediate directly to ADP. It does not require an electron transfer chain. Glycolysis does not use oxygen directly, but it needs a continuing supply of oxidised NAD; simply having glucose is not sufficient.

## Mitochondrial carbon reactions: link reaction and Krebs cycle {#aerobic}

Pyruvate is actively transported into the mitochondrial matrix. In the **link reaction**, each three-carbon pyruvate is decarboxylated and oxidised: one CO₂ and one reduced NAD are formed, and the remaining two-carbon acetate group combines with coenzyme A to form acetyl coenzyme A. Coenzyme A carries the acetyl group; it is not consumed permanently.

The two-carbon group combines with a four-carbon acceptor to form a six-carbon compound in the **Krebs cycle**. A sequence of decarboxylations and oxidations releases two CO₂ per turn, reduces NAD and FAD, makes ATP by substrate-level phosphorylation and regenerates the four-carbon acceptor. The cycle turns twice for each glucose.

| Stage, per glucose | Location | CO₂ released | Reduced coenzymes | Direct ATP gain |
| --- | --- | --- | --- | --- |
| Glycolysis | Cytoplasm | 0 | 2 reduced NAD | 2 net |
| Link reaction | Matrix | 2 | 2 reduced NAD | 0 |
| Krebs cycle, two turns | Matrix | 4 | 6 reduced NAD + 2 reduced FAD | 2 |

This is a carbon/coenzyme account, not a fixed total ATP yield. Oxidative phosphorylation supplies much of the additional ATP; coupling and transport costs mean a universal fixed ATP total should not be inferred from this table. Six carbons enter as glucose and six leave as CO₂ in complete oxidation. Oxygen taken from the air is reduced to water at the end of electron transfer; it is not directly converted into the CO₂ released by decarboxylation.

## A membrane makes oxidative phosphorylation possible {#oxidative-phosphorylation}

Reduced NAD and reduced FAD donate electrons to carriers in the inner mitochondrial membrane and are reoxidised. As electrons pass down the chain, energy released drives proton transfer **from the matrix to the intermembrane space**. The inner membrane restricts free proton movement, maintaining an electrochemical gradient. Protons return **to the matrix through ATP synthase**, which couples this flow to ATP synthesis.

Oxygen is the terminal electron acceptor; it combines with electrons and protons to form water. Without oxygen, sustained electron transfer stops, reduced coenzymes are not efficiently reoxidised, and link/Krebs reactions cannot continue at their normal aerobic rate. The cristae provide a large area for carriers and ATP synthase.

![Teaching schematic: inner mitochondrial membrane separates matrix from intermembrane space; electron transfer pumps protons outward and ATP synthase returns protons to the matrix. Not to scale.](/assets/images/a2-biology/bl03-respiration-membrane.svg)

<!-- task:R1 -->
**Self-written / 自拟题 — R1**

Complete the mechanism in two sentences: a membrane becomes freely permeable to protons → ______ → ATP synthesis by oxidative phosphorylation decreases. Explain why electron transfer and ATP synthesis need not decrease in exactly the same proportion.
<!-- /task:R1 -->

<details markdown="1">
<summary>Hint R1</summary>

Separate the energy used to build a gradient from the path by which protons return.

</details>

<details markdown="1">
<summary>Answer R1</summary>

The proton gradient dissipates because protons return without passing through ATP synthase. Less proton flow is coupled to ATP synthesis. Electron transfer can continue, or increase in an uncoupled system, while much less ATP is made; oxygen uptake is therefore not a direct ATP meter.

</details>

## Without oxygen: regenerate NAD {#anaerobic}

Fermentation does not extract the full energy available in glucose. Its crucial role is to reoxidise reduced NAD so that glycolysis can continue to make its small ATP yield.

In mammalian cells, pyruvate accepts hydrogen from reduced NAD and becomes **lactate**; this step releases no CO₂. In yeast, pyruvate first loses CO₂ to form ethanal; ethanal accepts hydrogen from reduced NAD and becomes **ethanol**. Both pathways regenerate NAD. The conversion after glycolysis does not supply an additional ATP gain in these pathways.

**Worked explanation — Self-written:** “Why does ethanol production permit glycolysis to continue?” Do not stop at “it makes NAD”. Write: *Ethanal accepts hydrogen from reduced NAD, regenerating NAD. NAD can then accept hydrogen during oxidation of triose phosphate, allowing glycolysis and substrate-level phosphorylation to continue.*

## Gas balance: define the sign before calculating {#gas-balance}

Let **O** be the positive volume of oxygen consumed and **C** the positive volume of carbon dioxide produced in a specified interval. Define **ΔV = final gas volume − initial gas volume**: a contraction has a negative ΔV. All gas volumes must be compared at the same temperature and pressure.

With effective CO₂ absorption, the gas loses oxygen but does not retain the CO₂ produced, so ΔVₐ = −O. Without an absorber, ΔVᵦ = C − O. Thus a zero net change can conceal two equal, nonzero flows. If paired samples have the same respiratory activity, C = ΔVᵦ + O. Use **changes within each apparatus**, not the difference between their absolute starting volumes.

$$\Delta V_A=-O,\qquad \Delta V_B=C-O,\qquad RQ=\frac{C}{O}\quad(O>0).$$

![Original gas-balance teaching diagram: oxygen leaves the gas space for the organism; carbon dioxide enters it, or is removed by an absorber. Arrows represent gas transfers, not measured rates.](/assets/images/a2-biology/bl03-gas-balance.svg)

**Worked example — Self-written; constructed data:** over 20 minutes, matched samples give ΔVₐ = −2.0 cm³ and ΔVᵦ = −0.6 cm³. Therefore O = 2.0 cm³, C = −0.6 + 2.0 = 1.4 cm³ and RQ = 0.70. The 0.6 cm³ contraction in B is not its oxygen uptake.

In a capillary, a displacement x corresponds to volume πr²x. Use the **radius**, and calibrate which direction represents contraction. For a constant-volume pressure instrument, a pressure change needs the instrument's calibration; it is not automatically a volume change.

## RQ: evidence for a substrate, not a unique identity {#rq}

For complete aerobic oxidation of glucose, six CO₂ are released for six O₂ consumed, giving RQ = 1. Lipids contain proportionally less oxygen and require more oxygen relative to CO₂ production: a typical lipid RQ is about 0.7. Protein values are often around 0.8–0.9, depending on amino acids and nitrogenous products. Mixed substrates can give intermediate values. Lipid breakdown supplies glycerol and fatty acids; glycerol can enter glycolysis, while fatty acids provide acetyl groups. After deamination, amino-acid carbon skeletons enter respiration at several points, including Krebs intermediates.

RQ near 1 is consistent with predominantly aerobic carbohydrate use, but does not uniquely identify glucose. Dissolution of CO₂, measurement error, biosynthesis and mixtures can affect the result. At zero oxygen consumption, the usual finite RQ is **undefined**: yeast fermentation can release CO₂ without O₂ uptake; lactate formation can give 0/0. Do not label every anaerobic pathway “RQ = infinity”.

## RP8: make the comparison valid {#rp8}

Choose one variable, such as temperature or substrate concentration. Specify organism, stage, mass and interval; allow temperature equilibration before sealing and reading. Keep oxygen available throughout an aerobic measurement. Use independent samples, not just repeated readings from the same seeds. A blank with inert material of comparable volume helps detect physical drift, but does not replace a living-sample replicate.

Keep the apparatus airtight, temperature stable and gas pressures comparable when reading volume. Darkness prevents photosynthesis from removing CO₂ and adding O₂ in green tissues; it is not evidence that plants respire only in the dark. Check equal absorber capacity and account for CO₂ dissolved in liquid. For long measurements, changing seed mass, substrate supply and oxygen availability can change rate.

Sodium hydroxide is corrosive: wear eye protection, prevent contact between organisms and absorbent, and use teacher-approved quantities and apparatus. A water bath controls temperature; minimise pressure build-up, handle glass safely, and use organisms under school welfare procedures. These are preparation decisions, not a claim that a practical has been performed.

## June 2025 data investigation {#real-data}

<!-- task:R2 -->
**Adapted / 改编题 — R2**

Source: OxfordAQA International A-level Biology **9610, BL05, June 2025, Q2**, QP pp.10–14, Table 2 on p.12; **MS, pp.8–9, read**. The numerical data are retained. The apparatus is described in words and the tasks below are rewritten; this is not a reproduction of the original question or its marks.

Each respirometer contains **3.5 g of germinating pea seeds** and is kept in darkness. A contains sodium hydroxide solution to absorb CO₂; B contains water without a CO₂ absorbent. Assume gas-tight equipment, stable temperature, comparable pressure when volumes are read, adequate oxygen and comparable respiratory activity of the seed samples.

| Time / h | Gas volume in A / cm³ | Gas volume in B / cm³ |
| --- | --- | --- |
| 0 | 100.0 | 90.0 |
| 5 | 99.0 | 89.5 |
| 9 | 97.5 | 89.5 |
| 17 | 95.0 | 90.0 |
| 30 | 90.0 | 90.5 |
| 37 | 87.0 | 90.0 |
| 48 | 83.5 | 90.0 |

1. Plot gas volume in A against time. Draw a straight line of best fit and use two widely separated points on your line to estimate oxygen consumption in mm³ g⁻¹ h⁻¹, to the nearest whole number. State the sign of the graph's gradient and why the consumption rate is positive.
2. Use the overall pattern in B, together with A, to explain the RQ estimate. Explain why subtracting 90.0 from 100.0 is not a valid way to find oxygen consumption.
3. Suggest the type of respiration and a likely class of substrate. State one reason the substrate cannot be identified uniquely.
4. Explain the purpose of darkness and give one check that would help distinguish gas exchange from physical drift.
<!-- /task:R2 -->

<details markdown="1">
<summary>Hint R2</summary>

A's slope is a volume change per hour. Convert cm³ to mm³ before dividing by mass. For B, use final minus initial volume; small fluctuations around a constant level need not represent a sustained trend. Check that your explanation includes both gases.

</details>

<details markdown="1">
<summary>Answer and scientific check R2</summary>

An independent least-squares line for A has gradient about −0.3559 cm³ h⁻¹. Thus:

$$\text{oxygen uptake rate}=\frac{0.3559\times1000}{3.5}\approx102\ \mathrm{mm^3\,g^{-1}\,h^{-1}}.$$

A well-drawn hand fit may differ: the source MS accepts 94–106 mm³ g⁻¹ h⁻¹. A's negative gradient represents gas loss; oxygen consumption is reported as a positive amount per time. Using only the first and last observations gives about 98, but does not demonstrate using a best-fit line.

B fluctuates between 89.5 and 90.5 cm³ with no overall change over 48 h. In the stated model, C − O ≈ 0, while A supplies evidence that O is positive. Therefore C ≈ O and RQ ≈ 1. Initial volumes differ between instruments and are not an exchange measurement.

This supports aerobic respiration using carbohydrate, not proof of glucose as the only substrate. Mixed substrate use or gas measurement effects can limit identification. Darkness removes photosynthetic exchange; an inert blank plus stable water-bath temperature can reveal physical drift. The approximate constancy of B is a measurement/model interpretation, not a claim that every intermediate reading is exactly 90.0.

</details>

## Independent transfer and diagnosis {#practice}

<!-- task:R3 -->
**Self-written / 自拟题 — R3**

A capillary of internal diameter 0.80 mm records a 12.0 mm contraction in 15.0 min with 2.00 g of seeds and a CO₂ absorbent. Calculate the oxygen uptake rate in mm³ g⁻¹ h⁻¹. A student then removes the absorbent and observes no movement. Evaluate the claim that removing the absorbent stopped respiration.
<!-- /task:R3 -->

<details markdown="1">
<summary>Hint R3</summary>

Use radius = diameter ÷ 2. Decide which gas quantity the second reading can actually establish.

</details>

<details markdown="1">
<summary>Answer R3</summary>

$$\text{rate}=\frac{\pi(0.40)^2(12.0)\times(60/15.0)}{2.00}=12.1\ \mathrm{mm^3\,g^{-1}\,h^{-1}}\quad(3\text{ s.f.}).$$

No movement without the absorber is compatible with CO₂ production equalling oxygen uptake. It cannot show that respiration stopped. Check sample activity and physical conditions before comparing.

</details>

<!-- task:R4 -->
**Self-written / 自拟题 — R4**

A sealed culture produces ethanol and CO₂, but measured oxygen uptake is zero. Another produces lactate without CO₂ or oxygen uptake. Explain how glycolysis can continue in each culture and whether a finite numerical RQ can identify either substrate.
<!-- /task:R4 -->

<details markdown="1">
<summary>Hint R4</summary>

Separate the need for NAD from the role of oxygen. Check the denominator before dividing.

</details>

<details markdown="1">
<summary>Answer R4</summary>

In both cultures reduced NAD is reoxidised when the organic acceptor is reduced, allowing further glycolysis and net ATP production. In the ethanol pathway, ethanal is the acceptor; in the lactate pathway it is pyruvate. Neither has a finite RQ here: the denominator is zero, and the lactate case is 0/0. Gas data alone cannot identify the substrate by the usual RQ rule.

</details>

<!-- task:R5 -->
**Self-written / 自拟题 — R5**

Retry: an absorber-containing respirometer warms during the run. Predict how this can affect the apparent oxygen uptake. Propose a temperature control and a blank, and explain why repeating the same uncontrolled procedure cannot remove this error.
<!-- /task:R5 -->

<details markdown="1">
<summary>Hint R5</summary>

How does warming affect gas volume, and does this reinforce or oppose a contraction due to oxygen uptake?

</details>

<details markdown="1">
<summary>Answer R5</summary>

At comparable pressure, warming expands the gas, opposing contraction from oxygen uptake. Apparent uptake is underestimated and the chamber may even expand. Use an equilibrated thermostatic water bath and a blank with comparable gas space and inert material volume to check physical drift. Repeating the same uncontrolled warming cannot remove a shared systematic bias.

</details>

## Sources and next steps {#sources}

Scope follows [OxfordAQA 9610 specification v5.1](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-biology-specification.pdf), 3.3.3 · RP8. This page uses the numbering in the v5.1 copy read for this course; the school should confirm the applicable specification for a future exam series. [Official qualification and resources](https://www.oxfordaqa.com/qualification/international-as-and-a-level-biology-9610/).

Except where explicitly labelled Adapted, examples, questions and feedback are author-written, not official questions or mark schemes. Constructed data are not measurements; web exercises do not constitute completion of required practical work.

[Photosynthesis](/alevel/a2-biology/photosynthesis/) · [Energy transfer](/alevel/a2-biology/energy-production/) · [Homeostasis](/alevel/a2-biology/homeostasis/) · [BL05 data skills](/alevel/a2-biology/data-skills/) · [BL05 experimental design](/alevel/a2-biology/experimental-design/) · [BL05 synoptic writing](/alevel/a2-biology/synoptic-writing/)
