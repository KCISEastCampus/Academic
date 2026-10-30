---
title: "Resistance, Characteristics and Resistivity"
layout: subjects
mathjax: true
grade: as
subject: as-physics
permalink: /alevel/as-physics/resistance-and-resistivity/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">Does resistance describe the material or the experiment?</h2>

Resistance depends on material, geometry and physical conditions. A lamp heats as current rises; a wire-length experiment can accidentally measure heating as well as length. You will interpret characteristics and separate geometry from resistivity. Use [electrical definitions](/alevel/as-physics/charge-current-and-potential/) and [circular area and uncertainty](/alevel/as-physics/materials-and-young-modulus/).

<h2 id="characteristics">Read the axes before the gradient</h2>

Ohm’s law is $I\propto V$ at constant physical conditions: the characteristic is a straight line through the origin. On I-against-V its gradient is $1/R$; on V-against-I it is R. For a curved characteristic, the operating resistance is still V/I at a nonzero point. A tangent describes a local rate of change and is generally different.

A filament lamp’s temperature increases with current, increasing metal-lattice vibrations and electron scattering, hence resistance. Its I-against-V curve becomes less steep at larger magnitudes; reversal gives the corresponding negative quadrant. A semiconductor diode conducts strongly in forward bias and has very small reverse current in its ordinary operating range. A fixed universal forward threshold is not implied.

<h2 id="geometry">Resistivity removes specimen dimensions</h2>

$$R=\frac{\rho L}{A},\qquad A=\frac{\pi d^2}{4}$$

For uniform material at fixed temperature, resistivity $\rho$ has units Ω m. More length adds resistance; larger area supplies more parallel conducting paths. The diameter enters quadratically.

<div class="worked-example" markdown="1">
**Worked example — self-written.**
<!-- task:resistivity-worked -->
A uniform metal wire has length 1.00 m, circular diameter 0.50 mm and resistance 2.0 Ω at fixed temperature. Calculate its resistivity and predict the resistance of the same material at that temperature with twice the length and twice the diameter.
<!-- /task:resistivity-worked -->

$A=1.96\times10^{-7}\,\mathrm{m^2}$, so $\rho=RA/L=3.93\times10^{-7}\,\Omega\,\mathrm m$. Doubling diameter quadruples area, while doubling length doubles R: new resistance is half, 1.0 Ω. This ratio assumes unchanged temperature and material.
</div>

<h2 id="characteristic-check">Interpret three records</h2>

<div class="lesson-check" markdown="1">
<!-- task:resistance-characteristic -->
Constructed (V/V,I/A) records are A: (1,0.10),(2,0.20); B: (1,0.20),(2,0.30),(4,0.40); C: (−2,approximately 0),(0.2,approximately 0),(0.8,0.10). Identify an ohmic conductor, filament lamp and diode, sketch their qualitative I-against-V characteristics including negative voltages, and calculate B’s resistance at 4 V. If V is plotted vertically instead, what is the ohmic-line gradient? Does a curved graph’s tangent always give V/I?
<!-- /task:resistance-characteristic -->
<details markdown="1"><summary>Hint</summary>
Compare V/I across points before naming the component. Treat negative voltage consistently.
</details>
<details markdown="1"><summary>Solution and repair</summary>
A is ohmic with R = 10 Ω; B is lamp-like, with R increasing from 5 to 10 Ω; C is diode-like. At 4 V B has 10 Ω. A’s V-against-I gradient is 10 V/A. Its I-against-V gradient would be 0.10 A/V. A curved tangent need not equal V/I or its reciprocal. Sketch B symmetrically through opposite signs and C with small reverse current. If axes were exchanged silently, label both before retrying.
</details>
</div>

<h2 id="wire-check">A graph can expose an extra resistance</h2>

<div class="lesson-check" markdown="1">
<!-- task:resistivity-wire -->
For a constructed wire experiment at fixed temperature, lengths 0.25,0.50,0.75,1.00 m give resistances 1.2,2.2,3.2,4.2 Ω. Area is 5.0 × 10⁻⁸ m². Infer resistivity and a possible contact-resistance contribution. Explain why taking R/L from one reading would overestimate resistivity, and choose a procedure to control heating.
<!-- /task:resistivity-wire -->
<details markdown="1"><summary>Hint</summary>
Use the gradient of R against L and retain its intercept.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Gradient is 4.0 Ω/m, giving $\rho=4.0(5.0\times10^{-8})=2.0\times10^{-7}\,\Omega\,\mathrm m$. Intercept 0.20 Ω can represent leads/contacts under a constant-contact model. One R/L includes this extra term and overestimates rho. Use low current, switch off between readings, keep temperature stable and repeat length settings in a changed order. Check contacts independently rather than assuming the intercept’s cause. If geometry was confused, use the new length/diameter ratio below.
</details>
</div>

<h2 id="temperature-check">Temperature is part of the model</h2>

NTC resistance decreases as temperature rises; an increasing mobile-carrier population dominates in these devices. A resistance–temperature calibration is normally curved. Superconductors have zero resistivity below a material-dependent critical temperature under appropriate conditions, unlike merely cold ordinary conductors. They support strong electromagnets and reduce electrical transmission losses, but cooling still requires energy. Critical-field calculations are outside this AS scope.

<div class="lesson-check" markdown="1">
<!-- task:resistance-temperature -->
An NTC thermistor has constructed resistances 9,5,3 kΩ at 10,30,50°C. Explain the trend, whether one straight calibration line is justified, and how measuring current might alter the reading. Contrast the metal-wire trend and the ideal resistance change through a superconductor’s critical temperature. Give one useful superconducting application and one energy cost the zero-resistivity statement does not remove.
<!-- /task:resistance-temperature -->
<details markdown="1"><summary>Hint</summary>
Distinguish the device’s calibration from the temperature created by its own measurement.
</details>
<details markdown="1"><summary>Solution and repair</summary>
The drops over equal 20°C intervals are 4 and 2 kΩ, so the record does not support one exact straight calibration across the whole range. Measuring current can self-heat the NTC, decreasing resistance and producing an apparently higher temperature. Metals ordinarily increase resistance with temperature; an ideal superconducting transition reaches zero below its critical temperature. Strong-field magnets or low-loss power cables are applications; refrigeration and other system losses remain. Repeat at smaller measuring current in a controlled-temperature bath to test self-heating.
</details>
</div>

<h2 id="retry">Geometry and graph slopes in a new case</h2>

<div class="lesson-check" markdown="1">
<!-- task:resistance-retry -->
Another wire of the same material is three times as long and has half the original diameter. Predict its resistance ratio at fixed temperature. A lamp has V = 3.0 V and I = 0.20 A, while its local I-against-V tangent gradient is 0.040 A/V: find its operating resistance and compare with the inverse tangent gradient. State a fresh check for a thermistor whose apparent temperature shifts when measuring current increases.
<!-- /task:resistance-retry -->
<details markdown="1"><summary>Hint</summary>
Area scales with diameter squared; a ratio from the origin differs from a local tangent.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Resistance increases by $3/(1/2)^2=12$. Lamp operating resistance is 15 Ω, whereas the inverse tangent gradient is 25 Ω. They need not agree for a non-ohmic device. Test the thermistor at controlled external temperature using several smaller measuring currents and allow equilibrium; convergence as current is reduced supports self-heating as the cause. Later revisit these decisions in [Unit 2 review](/alevel/as-physics/unit-2-review/).
</details>
</div>


<h2 id="sources-and-next">Scope and next step</h2>

OxfordAQA 9630 §3.4.2–3.4.3. Tasks are self-written; numerical/schematic records are constructed. Checking criteria are not official marks. [Official specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf).

[Previous](/alevel/as-physics/charge-current-and-potential/) · [Next](/alevel/as-physics/dc-circuits-and-potential-dividers/) · [Course](/alevel/as-physics/)

{% include exam_topic_practice.html %}
