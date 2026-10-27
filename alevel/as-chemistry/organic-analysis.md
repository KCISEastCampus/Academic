---
title: Organic Analysis — Tests, Exact Mass and Infrared
layout: subjects
mathjax: true
grade: as
subject: as-chemistry
permalink: /alevel/as-chemistry/organic-analysis/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">What can several independent clues establish?</h2>

A clear solution, one colour change or one mass peak is rarely a complete identity. Here you will design tests, discriminate molecular formulae by exact mass and interpret a constructed infrared spectrum with reference fingerprints. Prerequisites are [functional groups](/alevel/as-chemistry/organic-foundations/), [alcohol oxidation](/alevel/as-chemistry/alcohols/) and [mass-to-charge ratio](/alevel/as-chemistry/atomic-structure/#tof). All tasks, numerical records and spectra below are **self-written/constructed**, not official questions or measured samples. RP5 here is preparation and evaluation on paper; it does not certify practical performance.

<h2 id="test-design">Separate observation, interpretation and test selection</h2>

An aldehyde contains –CHO, a ketone has C=O between two carbon groups, and a carboxylic acid contains –COOH. An alcohol OH is bonded to a saturated carbon; the OH of –COOH does not make an acid an alcohol. These structures help explain why tests overlap.

| Question and method | Observation to record | Defensible inference and limitation |
| --- | --- | --- |
| Add bromine water to a small fresh sample, shake as directed | Orange/brown colour disappears | Supports a reactive unsaturated candidate in a stated restricted set; other substances can consume bromine. A negative result needs an effective reagent/control. |
| Warm a fresh portion with acidified potassium dichromate(VI) in a water bath | Orange becomes green | Primary/secondary alcohols and aldehydes can be oxidised; colour alone does not identify an alcohol or distinguish the first two classes. |
| Warm with freshly prepared Tollens’ reagent, or Fehling’s solution under the specified conditions | Silver mirror/grey silver, or brick-red precipitate respectively | Supports an aldehyde among the simple candidates here; not a universal identification of every possible organic compound. Ketones here are negative. |
| Add carbonate to a fresh portion; test the evolved gas with limewater | Effervescence and limewater turns milky | Supports an acid releasing CO₂; another acid could do this, so establish the candidate context. |

For example $\ce{2CH3COOH + Na2CO3 -> 2CH3COONa + H2O + CO2}$ links the observed gas to acid chemistry. Do not write “CO₂ was observed”: bubbles are observed and the gas test supports its identity.

Use **separate labelled aliquots** so an earlier oxidant, acid or bromine does not change the substance for the next test. Choose a reagent blank and a known positive under the same conditions; they check contamination and an ineffective reagent respectively. Test a suitable known negative where the inference needs it. A negative result does not prove absence if the method failed or the concentration is below detection. Sodium is not a general alcohol test in an aqueous unknown: water and acids also react.

<div class="worked-example" markdown="1">
**Self-written design example.** A sample is either propanal or propanone. Both have C=O and the same formula, so exact mass and a carbonyl band alone do not separate them. Use a fresh portion with Tollens’ reagent alongside a known aldehyde and a blank. Silver formation supports propanal within this set; a negative result supports propanone only if the positive control worked. A second portion can supply independent spectral evidence.
</div>

Use small supervised quantities, eye protection and suitable ventilation; bromine and acidified dichromate are hazardous, Cr(VI) waste needs the approved collection route, and flammable liquids require a water bath rather than a naked flame. Tollens’ reagent is prepared fresh and promptly disposed of by the approved procedure; never store it or let residues dry. Read the local practical risk assessment before actual work.

<div class="lesson-check" markdown="1">
<h3 id="unknown-check">Design RP5 decisions before looking at outcomes</h3>
<!-- task:unknown-check -->
Four separate pure unknowns are drawn without repetition from cyclohexene, ethanol, ethanal and ethanoic acid. Propose a small-scale test plan that identifies them within this set. For each decision state reagent/conditions, observable result and inference. Use fresh aliquots and explain why dichromate alone cannot separate two candidates. Include a blank, an effective positive control and one risk control linked to its hazard. Finally explain why the same plan would not necessarily identify every component of a mixture.
<!-- /task:unknown-check -->
<details markdown="1"><summary>Hint</summary>
Start with distinctions the candidate structures actually support. Keep observations separate from names.
</details>
<details markdown="1"><summary>Solution and check</summary>
Fresh carbonate test: effervescence, gas makes limewater milky → ethanoic acid in this set. Fresh Tollens’/Fehling test with an effective aldehyde control: silver/brick-red solid → ethanal. After these identifications, bromine-water decolourisation supports cyclohexene among the remaining candidates; a fresh ethanol portion is left, supported by orange→green acidified dichromate on warming. Ethanal also reduces dichromate, so that colour is not an exclusive alcohol test. Candidate elimination and positive/control evidence must be stated together. A reagent blank should not give the positive result; a known reactive sample checks the reagent. Use a water bath for flammable samples, or an appropriate Cr(VI) waste/ventilation control. A mixture can give several positives and one component can mask another; the pure, finite-candidate assumption was essential. If you reused a treated portion or inferred a name from one nonspecific colour, revisit [test selection](#test-design), then use the changed set below.
</details>
</div>

<h2 id="exact-mass">Distinguish formula evidence from structural evidence</h2>

A nominal molecular mass uses rounded isotope masses and may fit more than one formula. High-resolution mass measurement can distinguish their **exact masses**. First establish that a peak is the singly charged molecular ion M⁺ and not a fragment, M²⁺ or [M+H]⁺. The question must state the ion identity or supply evidence for it. Here use the stated neutral-isotope mass sum; the electron-mass correction for M⁺ is neglected by the stated task convention.

<div class="worked-example" markdown="1">
Use ¹²C = 12.0000, ¹H = 1.0078 and ¹⁶O = 15.9949. Candidates C₂H₄O and C₃H₈ have the same nominal mass 44, but exact sums are $2(12.0000)+4(1.0078)+15.9949=44.0261$ and $3(12.0000)+8(1.0078)=44.0624$. A stipulated M⁺ value 44.0261 ± 0.0005 supports C₂H₄O **among these candidates**. It cannot distinguish ethanal from its other structural isomers. Do not report an unlimited formula search as unique when only a finite candidate list was tested.
</div>

<div class="lesson-check" markdown="1">
<h3 id="mass-check">Resolve a nominal-mass ambiguity</h3>
<!-- task:mass-check -->
A constructed M+ measurement of a pure compound is 46.0417 ± 0.0005. The ion is singly charged and unfragmented; neglect electron mass. Candidates are C2H6O and CH2O2. Use 12C = 12.0000, 1H = 1.0078, 16O = 15.9949 to calculate both masses and select the supported formula. Explain why this does not select ethanol rather than methoxymethane. What information would first be needed if the 46.0417 peak had no stated ion identity?
<!-- /task:mass-check -->
<details markdown="1"><summary>Hint</summary>
Compare calculated sums with the stated interval, then ask what changes between structural isomers.
</details>
<details markdown="1"><summary>Solution and check</summary>
C₂H₆O: 24.0000+6.0468+15.9949=46.0417. CH₂O₂: 12.0000+2.0156+31.9898=46.0054. Their separation 0.0363 is much larger than ±0.0005; the first formula is supported in this list. Ethanol and methoxymethane have identical elemental/isotopic composition and exact mass; obtain functional-group/structural evidence. Without identity, establish molecular versus fragment/protonated ion and charge before treating m/z as molecular mass. If you selected from the rounded value 46 alone, revisit [exact versus nominal](#exact-mass), then retry with a changed pair.
</details>
</div>

<h2 id="infrared">Read the axes before naming a bond</h2>

Infrared radiation can be absorbed when its frequency matches an allowed molecular vibration that changes the dipole moment. Bonds stretch and bend; an absorption is not a photograph of one bond breaking. The horizontal axis is **wavenumber in cm⁻¹**, conventionally decreasing left to right; it is proportional to frequency. In a **percentage-transmittance** plot, a downward trough is more absorption. In an absorbance plot the direction would differ.

Use the [official 9620 data booklet, Table A](https://www.oxfordaqa.com/oaqaresources/science/assessment/9620-international-a-level-chemistry-data-booklet-2016-v1.pdf): alcohol O–H 3230–3550 cm⁻¹; acid O–H 2500–3000; C=O 1680–1750; C–O 1000–1300. These are ranges, not a universal single frequency. Broadness and overlapping bands matter: a carboxylic-acid O–H can overlap C–H. The absence of a strong expected band is useful evidence under adequate sensitivity, not a guarantee of zero concentration.

<div class="worked-example" markdown="1">
A constructed reference has a broad 3230–3550 trough, a C–O feature near 1100 and no detectable C=O in 1680–1750. This supports an alcohol rather than a carboxylic acid in a simple candidate set. It does not distinguish every alcohol. Exact mass can constrain the formula; a controlled oxidation/test can then constrain the type. Several independent clues are stronger than repeating one inference.
</div>

<h2 id="fingerprints">Use a reference without overstating purity</h2>

The **fingerprint region** below about 1500 cm⁻¹ contains a complex pattern from many vibrations. Compare the whole pattern with an authentic reference under comparable conditions, not one coincident peak. A close match supports identity; unmatched extra bands can suggest an impurity or a changed sample. It does not prove absolute purity: weak contaminants may be below detection or hidden by overlap. Sampling, resolution and background must also be checked.

The following simplified traces are constructed for the independent task. They are not measured library spectra. Selected trough centres/depths are given in text below so the question is usable without colour or the image; the drawing omits most real fine structure.

<div role="region" aria-label="Constructed infrared comparison" tabindex="0" style="overflow-x:auto" markdown="1">

![Constructed transmittance spectra U, reference A and reference B; wavenumber decreases from 4000 to 500 cm−1. U and A share a trough near 1715 and a fingerprint pattern; U additionally has a broad shallow trough near 3400. The equivalent numeric record follows.](/assets/img/chemistry-as-analysis-ir.svg){: width="900" height="650" style="min-width:760px" }

</div>

Equivalent constructed record: all traces have a baseline near 90% transmittance and C–H absorption near 2950. U and A have trough centres 1715 (to 20%), 1360 (65%), 1220 (50%), 1090 (60%) and 950 (70%). U additionally has a broad trough covering 3230–3550, reaching 78% near 3400; A has no detectable trough there. B has no 1680–1750 trough, but has broad 3230–3550 absorption (to 25%) and fingerprint features near 1170 (45%), 1050 (35%) and 890 (60%). No trace shows a broad 2500–3000 acid-OH band. These values describe the same simplified drawing, not separate measurements.

<div class="lesson-check" markdown="1">
<h3 id="spectrum-check">Combine mass, chemical tests and a spectrum</h3>
<!-- task:spectrum-check -->
Use the constructed U/A/B record above. A is a reference for propanone; B is a reference for propan-2-ol. The major molecular species in U has formula C3H6O from a stated M+ record. A controlled Tollens test is negative. Identify the supported major component, citing the carbonyl region, expected OH region, fingerprint and test evidence separately. Explain the additional shallow U feature and why it does not justify a quantitative impurity percentage. A report calls U “proved 100% pure”. Evaluate that claim and propose one check on the extra feature.
<!-- /task:spectrum-check -->
<details markdown="1"><summary>Hint</summary>
A shared pattern can support the major identity while an unmatched feature limits the purity claim. Do not turn transmittance directly into a composition percentage.
</details>
<details markdown="1"><summary>Solution and check</summary>
The major component is supported as propanone within this reference set: C₃H₆O fits; 1715 lies in the C=O range, the low-wavenumber pattern matches A, and controlled negative Tollens is consistent with a ketone rather than propanal. The major spectrum does not have B’s strong broad OH band/fingerprint, but U has an additional weak broad OH-region feature. This can suggest an OH-containing contaminant, including water, or sampling/background effects; it does not identify one impurity uniquely. No calibration/path-length/concentration model is supplied, so 78% transmittance is not 22% impurity. Repeat with clean/dry sampling and a suitable background; compare a fresh portion and an appropriate reference. Even a perfect match cannot prove zero impurity below detection. If you used just one peak or ignored the extra band, return to [reference limits](#fingerprints), then use the new evidence below.
</details>
</div>

<h2 id="atmosphere">Connect molecular absorption to the energy balance</h2>

The surface warmed by incoming solar radiation emits infrared. Vibrational modes of CO₂, CH₄ and H₂O can absorb at relevant infrared frequencies; collisions transfer energy between molecules, and the atmosphere also emits radiation in different directions. This changes the escape of energy to space. An increase in greenhouse absorption initially reduces outgoing energy for the same temperature; the surface/lower atmosphere warms until the outgoing and incoming energy balance is restored under the changed conditions. It does not create energy.

Not every vibration is IR-active: it must change the dipole moment. CO₂ has polar bonds and IR-active modes despite having no permanent net molecular dipole in its symmetric equilibrium geometry. N₂/O₂ do not acquire the same greenhouse behaviour just because all gases collide. The mechanism is different from ultraviolet shielding by the ozone layer. This lesson makes no claim that an old textbook concentration table is current, and a band alone does not quantify a gas’s full climate effect.

<div class="lesson-check" markdown="1">
<h3 id="climate-check">Repair an energy explanation</h3>
<!-- task:climate-check -->
A report says “CO2 cannot absorb IR because it is nonpolar; greenhouse gases make new energy and mainly block ultraviolet, so one strong laboratory band proves a fixed amount of global warming.” Repair each claim using molecular vibration and an energy-balance argument. State why the spectrum alone cannot give that quantitative climate conclusion.
<!-- /task:climate-check -->
<details markdown="1"><summary>Hint</summary>
Distinguish a permanent dipole from a change during vibration; distinguish absorption mechanism from a whole-atmosphere prediction.
</details>
<details markdown="1"><summary>Solution and check</summary>
An IR-active vibration changes dipole moment; CO₂ has such modes even without a permanent net dipole. Greenhouse gases absorb/emit relevant outgoing IR and exchange energy; they do not create it. Ozone/UV shielding is different. Increased absorption can initially reduce outgoing energy at a given temperature, followed by warming toward a changed energy balance. Concentration, atmospheric path, overlapping absorption, emission, feedbacks and system conditions matter; a single band is not a calibrated global temperature prediction. If you replaced the mechanism with “traps heat” alone, reconstruct the surface→IR→molecular absorption/emission→energy balance chain, then write it in full English.
</details>
</div>

<h2 id="retry">Return later with changed candidates and records</h2>

<div class="lesson-check" markdown="1">
<h3 id="retry-tests">A new finite set</h3>
<!-- task:retry-tests -->
A pure sample is either but-1-ene, butan-2-ol, butanal or butanoic acid. Design a minimum defensible sequence using separate fresh portions and controls. Explain why a negative Tollens result alone cannot choose butan-2-ol, and why acidified dichromate cannot distinguish butanal from butan-2-ol.
<!-- /task:retry-tests -->
<details markdown="1"><summary>Hint</summary>
Choose a test that changes the remaining candidate set; record what would still be possible after a negative.
</details>
<details markdown="1"><summary>Solution and check</summary>
Carbonate plus confirmed CO₂ supports butanoic acid; fresh controlled Tollens/Fehling supports butanal; after those are excluded, fresh bromine-water decolourisation supports but-1-ene and the remaining alcohol is supported by controlled oxidation. State the observable results/conditions as above. Negative Tollens leaves an alkene, alcohol or acid in the original set, while both the aldehyde and secondary alcohol reduce acidified dichromate on warming. Include effective controls, avoid carrying earlier reagents into later tests and link a risk control to the chosen hazard. If the observation–inference separation still fails, close the key and rewrite the decision sequence.
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-mass">A new exact-mass comparison</h3>
<!-- task:retry-mass -->
A stated singly charged M+ value is 58.0417 ± 0.0005, neglecting electron mass. Compare C3H6O and C2H2O2 using the same atomic masses. Which is supported in this pair? Explain why exact mass cannot distinguish propanal from propanone, and name independent evidence that can.
<!-- /task:retry-mass -->
<details markdown="1"><summary>Hint</summary>
Count every atom; formula selection and connectivity selection are different questions.
</details>
<details markdown="1"><summary>Solution and check</summary>
C₃H₆O=36+6.0468+15.9949=58.0417; C₂H₂O₂=24+2.0156+31.9898=58.0054. The former is supported in this pair. Propanal and propanone share it and the same exact mass; controlled aldehyde tests and comparable reference fingerprints can distinguish them in this simple set. If you chose a unique structure from mass alone, return to [formula limits](#exact-mass) before the mixed review.
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-spectrum">An unlabelled evidence combination</h3>
<!-- task:retry-spectrum -->
A different pure sample has formula C2H4O2, a strong trough near 1720 cm−1 and a very broad absorption from 2500 to 3000 cm−1. It gives effervescence with carbonate and the gas makes limewater milky. Choose between ethanoic acid and methyl methanoate, justify the positive and exclusion evidence, and explain why an exact fingerprint match still would not certify absolute purity. Return after another topic and answer with all help closed.
<!-- /task:retry-spectrum -->
<details markdown="1"><summary>Hint</summary>
Combine structure, spectral range and chemical behaviour rather than one matching number.
</details>
<details markdown="1"><summary>Solution and check</summary>
Ethanoic acid is supported: both candidates can have C=O and the same formula, but broad acid OH plus carbonate/confirmed CO₂ supports COOH; methyl methanoate lacks that OH and does not behave as the acid in this stated test. Matching references supports identity, but sub-detection/overlapping impurities remain possible; no absolute-purity proof follows. If the carbonyl alone drove your choice, recover [ranges](#infrared), then justify the independent gas evidence in English.
</details>
</div>

<h2 id="sources">Scope, sources and next step</h2>

[OxfordAQA specification 5.3](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf), 3.3.6.1–3 and RP5; [official practical handbook](https://www.oxfordaqa.com/oaqaresources/science/teaching/a-level-practical-handbook-chemistry-4.2.pdf), RP5 pp.71–73; [9620 data booklet](https://www.oxfordaqa.com/oaqaresources/science/assessment/9620-international-a-level-chemistry-data-booklet-2016-v1.pdf), Table A. User textbook Lister/Renshaw (2016), printed pp.248–255, was actually read. This AS page excludes NMR, chromatography and systematic fragmentation analysis. All tasks and spectra are original teaching constructions with no official marks. Continue to [mixed full-course review](/alevel/as-chemistry/as-review/). No real student trial or laboratory assessment has been conducted.
