---
title: "Radioactivity — Background, Decay and Decisions"
layout: subjects
mathjax: true
grade: as
subject: as-physics
permalink: /alevel/as-physics/radiation-and-safety/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">What did the detector actually count?</h2>

A detector records radiation from the sample and the surroundings. Background includes cosmic radiation and natural radioactive material in rocks, soil and air. Subtract a rate measured for the same conditions without the sample; do not subtract counts collected over a different duration as if they were rates. Use [nuclear notation](/alevel/as-physics/atoms-and-particles/) and [measurement quality](/alevel/as-physics/measurements-and-uncertainties/) as prerequisites.

<h2 id="decays">Nuclear changes leave accounting evidence</h2>

Alpha emission removes two protons and two neutrons: $\,{}_Z^AX\to{}_{Z-2}^{A-4}Y+{}_2^4\mathrm{He}$. Beta-minus converts a neutron into a proton, emitting an electron and electron antineutrino; $A$ stays fixed and $Z$ rises by one. Beta-plus converts a proton into a neutron with a positron and electron neutrino, lowering $Z$ by one. A free neutron decays as:

$$\,{}_0^1n\to{}_1^1p+{}_{-1}^0e+\bar\nu_e$$

The varying beta-electron energies and the energy/momentum accounting motivated a previously unseen particle carrying the remainder. Gamma photons are emitted when an excited nucleus loses energy; neither $A$ nor $Z$ changes. Balance charge and nucleon number, but also name the neutrino: balancing two numbers alone does not complete the physics.

<h2 id="half-life">Halving applies to the source, not background</h2>

Radioactive decay is spontaneous and random: an individual decay time is unpredictable, while large samples have a repeatable statistical trend. Half-life is the time for the number of undecayed nuclei, or expected activity, to halve. Estimate it from several halvings on a background-corrected graph; equal time intervals must be measured horizontally.

<div class="worked-example" markdown="1">
**Worked example — self-written.**
<!-- task:radiation-worked -->
A constructed detector record gives 840, 440 and 240 counts per minute at 0, 4 and 8 minutes. Constant background is 40 counts per minute. Infer the half-life and predict the total rate at 16 minutes, using whole half-lives only.
<!-- /task:radiation-worked -->

Subtract 40 from every rate: 800, 400, 200 per minute. Each halving takes 4 min. At 16 min, four half-lives leave $800/2^4=50$ source counts per minute; add background back to predict 90 total per minute. AS uses graphical and whole-half-life calculations here; exponential decay equations belong to A2.
</div>

<h2 id="decay-check">Explain what is emitted</h2>

<div class="lesson-check" markdown="1">
<!-- task:decay-check -->
Complete and justify these decays, naming every emitted particle: uranium-238 (Z = 92) to thorium (Z = 90) by alpha decay; carbon-14 (Z = 6) to nitrogen (Z = 7) by beta-minus decay; sodium-22 (Z = 11) to neon (Z = 10) by beta-plus decay; a free neutron by beta-minus decay. Explain why gamma emission changes neither proton number nor nucleon number and why the neutrino was proposed.
<!-- /task:decay-check -->
<details markdown="1"><summary>Hint</summary>
Track Z and A, then identify any particles needed beyond their balance.
</details>
<details markdown="1"><summary>Solution and repair</summary>
$\,{}_{92}^{238}\mathrm U\to{}_{90}^{234}\mathrm{Th}+{}_2^4\mathrm{He}$; $\,{}_6^{14}\mathrm C\to{}_7^{14}\mathrm N+{}_{-1}^0e+\bar\nu_e$; $\,{}_{11}^{22}\mathrm{Na}\to{}_{10}^{22}\mathrm{Ne}+{}_{+1}^0e+\nu_e$. Free-neutron decay is the equation above. Gamma emission de-excites the same nucleus. Neutrinos account for missing energy and momentum in beta decay. If Z moved in the wrong direction, check emitted charge then retry the new nucleus below.
</details>
</div>

<h2 id="counts-check">Distance, absorption and evidence</h2>

For an approximately pointlike isotropic gamma source, geometric spreading gives corrected intensity proportional to $1/r^2$ when absorption and scattering are negligible. Distance is from the effective source to the sensitive detector region. A large source close to the detector violates the point approximation. Repeated equal-duration counts reveal scatter; longer collection reduces relative counting fluctuations but not a wrong distance zero.

<div class="lesson-check" markdown="1">
<!-- task:gamma-counts -->
Constructed total rates at source–detector distances 0.10, 0.20 and 0.40 m are 1040, 290 and 103 counts per minute. Background is 40 counts per minute. Test an inverse-square model using corrected rates. State two assumptions, identify how an incorrect distance zero would affect the test, and propose a measurement plan that can distinguish a trend from counting scatter.
<!-- /task:gamma-counts -->
<details markdown="1"><summary>Hint</summary>
Compare corrected rate times distance squared, not raw total rate times distance squared.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Corrected rates are 1000, 250 and 63 per minute. Multiplying by $r^2$ gives 10.0, 10.0 and 10.08 in consistent units, compatible with inverse-square behaviour subject to uncertainty. Assumptions include point-source geometry, unchanged detector efficiency and negligible absorption. A fixed distance offset produces a distance-dependent distortion, strongest nearby. Measure several distances, repeated equal-duration counts, separate background and the source/detector reference positions. Do not call this proof from three central values; compare scatter and uncertainty. If raw rates were used, redo the fresh record below.
</details>
</div>

<h2 id="choice-check">Use penetration without equating it with safety</h2>

Alpha particles ionise strongly and travel a short distance; paper or the outer skin layer can stop them. Beta particles penetrate farther; thin aluminium can attenuate them. Gamma photons penetrate farther still; sufficiently thick lead or concrete attenuates them, rather than stopping every photon. Controlled absorption comparisons distinguish components by changes with paper, aluminium and lead, keeping geometry and background constant. Real sources and absorbers require trained supervision, time reduction, distance, appropriate shielding and handling tools; these constructed data are not an invitation to handle a source.

<div class="lesson-check" markdown="1">
<!-- task:radiation-choice -->
Choose and justify radiation properties for monitoring paper thickness, thicker aluminium foil, and steel where beta radiation is almost fully absorbed. Explain why an alpha source outside the body can be a smaller hazard than the same source taken inside. For technetium-99m diagnostic imaging, explain why detectable escaping gamma radiation and a suitably short half-life are useful, without claiming zero risk.
<!-- /task:radiation-choice -->
<details markdown="1"><summary>Hint</summary>
A gauge needs a detectable transmitted signal that changes when thickness changes.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Beta is suitable for paper and, with appropriate energy, thicker aluminium foil; gamma may suit steel too opaque to beta. Alpha absorbed completely by the product gives little usable transmitted change. Choices depend on actual thickness, energy and detector. Internal alpha exposure puts strong ionisation next to sensitive tissue; limited external penetration does not mean harmless if ingested. Tc-99m gamma can leave the body for detection; a suitably short half-life limits persistence while allowing measurement. Safety depends on exposure and professional controls. If you chose solely the most penetrating radiation, revisit the measurement purpose.
</details>
</div>

<h2 id="retry">A fresh background and a new nucleus</h2>

<div class="lesson-check" markdown="1">
<!-- task:radiation-retry -->
A different constructed source has total rates 620, 320 and 170 counts per minute at 0, 3 and 6 minutes; background is 20 counts per minute. Find its half-life and total rate at 12 minutes. At distances 0.20 and 0.40 m its separate corrected gamma rates are 240 and 60 per minute. Test the distance law and explain why subtracting the background only once from the whole decay series is wrong. Write the daughter Z and A after one alpha decay of a nucleus with Z = 84, A = 210.
<!-- /task:radiation-retry -->
<details markdown="1"><summary>Hint</summary>
Correct each point, count halvings and keep the distance test separate.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Corrected rates are 600, 300, 150; half-life 3 min. At 12 min the source rate is $600/16=37.5$ per minute and total 57.5 per minute. Doubling distance reduces corrected gamma rate by four, consistent with inverse-square spreading under its assumptions. Every total contains a background contribution, so each rate needs correction. The alpha daughter has Z = 82, A = 206. Later use [Unit 1 review](/alevel/as-physics/unit-1-review/) for mixed source, energy and evidence decisions.
</details>
</div>


<h3 id="graph-half-life">Separate background and halving on a graph</h3>

![Constructed total rate against time, through (0 min,660/min), (2,340), (4,180), (6,100), (8,60); background 20/min.](/assets/images/physics-as-decay-graph.svg){: width="780" height="410" }

<div class="lesson-check" markdown="1">
<!-- task:graph-half-life-task -->
Use the constructed total-count-rate graph. Background is 20 counts/min. Read source rates after correction and use at least three successive halving intervals to estimate half-life. Predict total count rate at 10 min using whole half-lives. Explain why halving the plotted total directly gives inconsistent intervals.
<!-- /task:graph-half-life-task -->
<details markdown="1"><summary>Hint</summary>
Subtract 20 from each reading, then read horizontal intervals between successive source halvings.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Net rates are 640, 320, 160, 80, 40 counts/min; successive half-lives are each 2 min. At 10 min, five half-lives give total 640/32 + 20 = 40 counts/min. The plotted total contains non-decaying background, so total-rate halvings do not represent source halvings. Several intervals check consistency; this smooth constructed line does not display real counting scatter.
</details>
</div>

<div class="lesson-check" markdown="1">
<!-- task:beta-retry -->
Retry the emitted-particle accounting: oxygen-15 (Z = 8) undergoes beta-plus decay to nitrogen (Z = 7); tritium, hydrogen-3 (Z = 1), undergoes beta-minus decay to helium (Z = 2). Write complete equations with the appropriate neutrino or antineutrino, and explain the change of nucleon and proton numbers.
<!-- /task:beta-retry -->
<details markdown="1"><summary>Hint</summary>
Beta-plus emits a positron and electron neutrino; beta-minus emits an electron and electron antineutrino.
</details>
<details markdown="1"><summary>Solution and repair</summary>
$\,{}_8^{15}\mathrm O\to{}_7^{15}\mathrm N+{}_{+1}^0e+\nu_e$; $\,{}_1^3\mathrm H\to{}_2^3\mathrm{He}+{}_{-1}^0e+\bar\nu_e$. A is unchanged; Z falls by one in beta-plus and rises by one in beta-minus. Balancing A and Z alone does not identify the neutrino type: connect it to the process.
</details>
</div>

<h3 id="absorber-data-check">Infer components from absorber data</h3>

<div class="lesson-check" markdown="1">
<!-- task:absorber-data-check -->
Constructed equal-duration rates are background 20 counts/min; with the source, no absorber gives 820, paper gives 420, thin aluminium gives 120, thick lead gives 35 counts/min. Infer which radiation components are supported and identify one limitation. Retry: another source gives 220 without absorber, 218 with paper, and 22 with aluminium under the same background. What component is supported, and why is 'no alpha at all' stronger than these records establish?
<!-- /task:absorber-data-check -->
<details markdown="1"><summary>Hint</summary>
Correct every rate and compare changes, allowing counting uncertainty.
</details>
<details markdown="1"><summary>Solution and repair</summary>
First net rates are 800, 400, 100, 15. The successive reductions support alpha, beta and penetrating gamma components under the stated absorber model. The remainder need not mean every gamma photon is stopped; uncertainty, geometry, scattering and absorber thickness matter. Retry net rates 200, 198, 2 support a beta-dominated source. A 2-count/min change with paper is not convincing alpha evidence without counting uncertainties; absence below sensitivity does not prove absolute absence.
</details>
</div>

<h2 id="sources-and-next">Scope and next step</h2>

OxfordAQA 9630 §3.3.3. Tasks are self-written; numerical/schematic records are constructed. Checking criteria are not official marks. [Official specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf).

[Previous](/alevel/as-physics/atoms-and-particles/) · [Next](/alevel/as-physics/unit-1-review/) · [Course](/alevel/as-physics/)
