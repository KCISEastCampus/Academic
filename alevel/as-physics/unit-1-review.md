---
title: "Unit 1: Mixed Review"
layout: subjects
mathjax: true
grade: as
subject: as-physics
permalink: /alevel/as-physics/unit-1-review/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

Use this page **in a later study session**, with the lesson pages closed. The prompts deliberately do not name a method. Draw your model, state conditions and show checks before opening help. These are self-written mixed tasks, not a predicted paper or official mark scheme.

<h2 id="mixed-tasks">Choose your model</h2>

<div class="lesson-check" markdown="1">
<!-- task:unit1-1 -->
Choose plausible dimensions for a classroom and justify them. Using air density approximately 1.2 kg/m³, estimate the mass of air to the nearest power of ten. Explain how a 20% increase in every chosen dimension affects the mass. Do not treat your estimates as measured data.
<!-- /task:unit1-1 -->
<details markdown="1"><summary>Hint</summary>
Choose and justify three lengths, then multiply volume by density.
</details>
<details markdown="1"><summary>Solution and repair</summary>
One defensible choice is 8 m × 6 m × 3 m = 144 m³, giving 173 kg, nearest order 10² kg. Other justified rooms are acceptable. Multiplying all dimensions by 1.20 multiplies volume/mass by 1.20³ = 1.728, not 1.20. The density is also an approximation; report an order, not spurious decimal precision.

Repair: [return to the specific lesson](/alevel/as-physics/measurements-and-uncertainties/#practice-estimate), then close the answer and try its changed-condition retry.
</details>
</div>

<div class="lesson-check" markdown="1">
<!-- task:unit1-2 -->
A uniform 4.0 m beam weighs 80 N. It rests on ordinary supports at x = 0 and 3.0 m. A 100 N load is at x = 2.4 m. Find both support reactions and the greatest load position x for which both contacts can remain. Explain what a negative calculated reaction would mean.
<!-- /task:unit1-2 -->
<details markdown="1"><summary>Hint</summary>
Take moments about x=0; the contact limit occurs when the other reaction reaches zero.
</details>
<details markdown="1"><summary>Solution and repair</summary>
About x = 0: R_B(3.0) = 80(2.0) + 100(2.4), so R_B = 133.3 N, R_A = 46.7 N. At loss of left contact R_A = 0, so 180(3.0) = 160 + 100x; x = 3.8 m. Beyond that a negative R_A would require the unfastened support to pull down, outside the contact model.

Repair: [return to the specific lesson](/alevel/as-physics/vectors-and-moments/#practice-beam), then close the answer and try its changed-condition retry.
</details>
</div>

<div class="lesson-check" markdown="1">
<!-- task:unit1-3 -->
A ball leaves a ledge 1.8 m above level ground with velocity components +6.0 m/s horizontally and +2.0 m/s upwards. Take g = 10 m/s² and negligible air resistance. Find landing time, horizontal distance and vertical landing velocity. Explain in English which model assumption fails if appreciable upward lift acts.
<!-- /task:unit1-3 -->
<details markdown="1"><summary>Hint</summary>
Set vertical displacement to −1.8 m and choose the future root.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Use the common flight time: −1.8 = 2t − 5t² gives positive t = (2 + √40)/10 = 0.832 s. Range = 4.99 m and v_y = 2 − 10t = −6.32 m/s. Reject the negative root because it precedes launch. Example English: 'An appreciable lift force changes the resultant, so a_y is no longer necessarily −g and a_x may also change.'

Repair: [return to the specific lesson](/alevel/as-physics/projectile-motion/#force-model-check), then close the answer and try its changed-condition retry.
</details>
</div>


<div class="lesson-check" markdown="1">
<!-- task:unit1-4 -->
A 0.50 kg trolley moving right at 4.0 m/s sticks to a stationary 1.0 kg trolley. A sensor reports common velocity +1.20 m/s. Test a claim of negligible external horizontal impulse and calculate the external impulse required if both velocity readings are correct. Calculate the kinetic-energy change and explain why it cannot identify the cause of a momentum discrepancy. Separately, a 0.15 kg ball changes vertical velocity from −6.0 to +2.0 m/s during 0.030 s of floor contact. With g = 10 m/s², find average floor force.
<!-- /task:unit1-4 -->
<details markdown="1"><summary>Hint</summary>
Compare total momentum first; for floor force include gravity after finding resultant.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Initial momentum is +2.0 kg m/s; measured final momentum is +1.80 kg m/s. The required external impulse is −0.20 N s, so the records do not support negligible impulse. With negligible impulse the predicted common velocity would be 1.33 m/s. Kinetic energy changes from 4.0 to 1.08 J, ΔK = −2.92 J; energy loss in sticking alone does not distinguish external impulse from erroneous momentum readings. For the separate ball, average resultant = 0.15[2−(−6)]/0.030 = 40 N upwards, and floor force = 40 + 1.5 = 41.5 N.

Repair: [momentum evidence](/alevel/as-physics/momentum-and-impulse/#retry-evidence) and [floor contact](/alevel/as-physics/momentum-and-impulse/#retry-momentum).
</details>
</div>


<div class="lesson-check" markdown="1">
<!-- task:unit1-5 -->
A wire of length 1.5 m and cross-sectional area 1.0 × 10⁻⁷ m² extends 0.90 mm under an additional load of 12 N, within the proportional region. Estimate Young modulus and energy stored by this additional extension from the unloaded reference. Explain why an unloading curve ending at a permanent extension would change the energy recovery calculation.
<!-- /task:unit1-5 -->
<details markdown="1"><summary>Hint</summary>
Use stress/strain for modulus and area for recoverable energy.
</details>
<details markdown="1"><summary>Solution and repair</summary>
E = FL/(Ax) = 2.0 × 10¹¹ Pa; linear loading energy ½Fx = 0.0054 J. A permanent extension means plastic change; recovered work is the area under the actual unloading curve, not automatically the full loading triangle. The reference/elastic assumptions in the question are necessary.

Repair: [return to the specific lesson](/alevel/as-physics/materials-and-young-modulus/#retry), then close the answer and try its changed-condition retry.
</details>
</div>

<div class="lesson-check" markdown="1">
<!-- task:unit1-6 -->
An instrument gives outputs 1.1, 2.2, 2.9 and 4.2 V at inputs 0, 1, 2 and 3 N. No error bars or repeated readings are supplied. Draw an estimated straight trend, justify a provisional vertical uncertainty from scatter and test whether your chosen line/uncertainty is consistent with every point. Explain why scatter alone cannot rule out a common voltage offset.
<!-- /task:unit1-6 -->
<details markdown="1"><summary>Hint</summary>
Try a trend line, calculate residuals, then state what your provisional band omits.
</details>
<details markdown="1"><summary>Solution and repair</summary>
A possible line is V = 1.00F + 1.10, with residuals 0, +0.1, −0.2, +0.1 V. A provisional ±0.2 V vertical band is consistent with all four points. Other justified approximate trends/bands are possible: show the check. Without repeats/instrument information this is a rough scatter estimate, not a calibrated uncertainty or unique line. A shared offset moves every point while leaving the scatter almost unchanged.

Repair: [return to the specific lesson](/alevel/as-physics/measurements-and-uncertainties/#graph-records), then close the answer and try its changed-condition retry.
</details>
</div>

<div class="lesson-check" markdown="1">
<!-- task:unit1-7 -->
A detector records 510, 270 and 150 counts/min at times 0, 5 and 10 min. Background is 30 counts/min. Estimate half-life and expected total count rate at 20 min. Explain why repeated short counts fluctuate, and why subtracting background matters. Separately write the daughter nucleon/proton numbers for alpha decay of A = 226, Z = 88.
<!-- /task:unit1-7 -->
<details markdown="1"><summary>Hint</summary>
Subtract background from each rate before looking for halvings.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Net rates are 480, 240, 120 counts/min; half-life 5 min. At 20 min the net prediction is 30, total 60 counts/min. Nuclear decays occur randomly, so finite counts fluctuate; unremoved background distorts the halving pattern. Alpha decay daughter has A = 222 and Z = 86.

Repair: [return to the specific lesson](/alevel/as-physics/radiation-and-safety/#retry), then close the answer and try its changed-condition retry.
</details>
</div>

<div class="lesson-check" markdown="1">
<!-- task:unit1-8 -->
Two ions have the same nucleon number A = 12 and proton number Z = 6. Ion P has charge +e; ion Q has charge +3e. Give their electron counts and compare specific charges using equal approximate masses. A photon of energy 1.20 MeV produces an electron–positron pair near a nucleus. Using rest energy 0.511 MeV for each particle, estimate the energy available as kinetic energy and explain why the nucleus is relevant.
<!-- /task:unit1-8 -->
<details markdown="1"><summary>Hint</summary>
Use electron count Z−charge/e and compare pair energy with two rest energies.
</details>
<details markdown="1"><summary>Solution and repair</summary>
P has 5 electrons, Q has 3. With equal approximate masses, specific charges are in ratio 1:3. Available pair kinetic energy is at most 1.20−1.022 = 0.178 MeV; nuclear recoil may take a little. The nearby nucleus can take recoil momentum so energy and momentum conservation can both hold.

Repair: [return to the specific lesson](/alevel/as-physics/atoms-and-particles/#retry), then close the answer and try its changed-condition retry.
</details>
</div>


<div class="lesson-check" markdown="1">
<!-- task:unit1-motor -->
A 5.0 kg cart moves steadily at 2.0 m/s along a level floor. A motor pulls with 20 N at 60° above the horizontal while a constant 10 N resistance acts backwards. The cart travels 5.0 m, and electrical input power is 40 W. Calculate work by the pull, work by resistance, change in kinetic energy, mechanical output power and efficiency. Check whether ordinary floor contact is possible using g = 10 m/s². Explain why zero resultant work does not mean zero energy input.
<!-- /task:unit1-motor -->
<details markdown="1"><summary>Hint</summary>
Resolve the pull along displacement, then compare power input and useful mechanical transfer.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Pull work = 20(5)cos60° = +50 J; resistance work = −50 J, so net work and ΔK are zero, consistent with steady speed. Mechanical output power = (20cos60°)(2) = 20 W, efficiency = 20/40 = 50%. Vertical pull = 17.3 N < 50 N weight, so normal force ≈ 32.7 N is positive. Energy input is transferred through the cart against resistance and electrical/internal losses; a constant kinetic-energy store does not imply zero transfer.

Repair: [work and power](/alevel/as-physics/work-energy-power/#power-check) · [power retry](/alevel/as-physics/work-energy-power/#power-retry).
</details>
</div>

<h2 id="review-your-evidence">Review what your answer demonstrates</h2>

Check model choice, signs/units, graph or mechanism, and an English explanation separately. A correct number with an impossible support force or unjustified conservation assumption still needs repair. Record the actual difficulty and retry result; a tick here does not establish lasting retention. After a delay, choose a different condition yourself and predict what must change before calculating.


<h2 id="sources-and-next">Scope and next step</h2>

OxfordAQA 9630 PH01 / 3.1–3.3. Tasks are self-written; numerical/schematic records are constructed. Checking criteria are not official marks. [Official specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf).

[Previous](/alevel/as-physics/radiation-and-safety/) · [Next](/alevel/as-physics/charge-current-and-potential/) · [Course](/alevel/as-physics/)

{% include exam_topic_practice.html %}
