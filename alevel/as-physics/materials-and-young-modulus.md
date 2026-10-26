---
title: "Materials, Elastic Energy and Young Modulus"
layout: subjects
mathjax: true
grade: as
subject: as-physics
permalink: /alevel/as-physics/materials-and-young-modulus/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">Does a wire recover when the load is removed?</h2>

A steep force–extension curve can mean a thick specimen, not a different material. You will separate specimen geometry from material behaviour and design RP2 measurements. Prerequisites: [energy areas](/alevel/as-physics/work-energy-power/) and [uncertainty](/alevel/as-physics/measurements-and-uncertainties/).

<h2 id="material-model">Size, deformation and material properties</h2>

Density $\rho=m/V$ uses total mass per volume. A tensile load stretches a wire by $\Delta L$, distinct from its final length. Hooke’s law $F=k\Delta L$ applies only in the proportional region. The elastic limit concerns recovery after unloading; it need not coincide exactly with the limit of proportionality. Plastic deformation leaves a permanent extension. A brittle material fractures with little plastic deformation; a ductile specimen can sustain substantial plastic strain before fracture.

$$\sigma=\frac{F}{A},\qquad \epsilon=\frac{\Delta L}{L},\qquad E=\frac{\sigma}{\epsilon}=\frac{FL}{A\Delta L}$$

Stress has units Pa, strain has no unit. Young modulus is the stress–strain gradient in the initial linear region, not an arbitrary chord after yielding. Breaking stress is the stress at fracture. For a circular wire $A=\pi d^2/4$; diameter and radius are not interchangeable. Work supplied is the loading force–extension area; recoverable energy is the unloading area. Only a linear reversible loading from zero gives $\tfrac12F\Delta L$ entirely as stored elastic energy.

<div class="worked-example" markdown="1">
**Worked example — self-written.**
<!-- task:materials-worked -->
A uniform wire has original length 2.00 m and diameter 0.40 mm. Within its linear elastic region a 10.0 N load produces extension 0.80 mm. Find stress, strain, Young modulus and stored energy.
<!-- /task:materials-worked -->

Convert before squaring: $A=\pi(0.40\times10^{-3})^2/4=1.26\times10^{-7}\,\mathrm{m^2}$. Stress is $7.96\times10^7$ Pa and strain $0.00080/2.00=4.0\times10^{-4}$. Thus $E=1.99\times10^{11}$ Pa and energy $\tfrac12(10)(0.00080)=0.0040$ J. A short extension compared with original length supports the small-strain model; using mm for one length and m for the other would not.
</div>

<h2 id="curves">Interpret a different loading history</h2>

<div class="lesson-check" markdown="1">
<!-- task:materials-curves -->
A block has mass 54 g and volume 20 cm³. Find density in kg/m³. Separately, a constructed force–extension loading curve joins (0 mm,0 N), (1.0 mm,20 N), (2.0 mm,30 N) by straight segments. Unloading is a straight line to (0.50 mm,0 N). Find work supplied, energy recovered and permanent extension. Explain why the whole supplied work is not recoverable elastic energy. Compare this behaviour with a material that fractures after almost no plastic extension.
<!-- /task:materials-curves -->
<details markdown="1"><summary>Hint</summary>
Convert volume cubically; divide the loading area into a triangle and trapezium.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Density is $0.054/(20\times10^{-6})=2700\,\mathrm{kg\,m^{-3}}$. Supplied work is 0.010 + 0.025 = 0.035 J. Unloading recovers $\tfrac12(30)(0.0015)=0.0225$ J, leaving 0.0125 J transferred irreversibly and 0.50 mm permanent extension. This specimen shows plastic behaviour; a brittle specimen has little plastic deformation before fracture. If you used one triangle for the nonlinear loading, draw the two areas before the retry.
</details>
</div>

<h2 id="wire-data">RP2: make a measurement decision</h2>

Clamp a long wire securely above a catch tray, protect eyes from a possible breaking wire, and load gradually without standing below suspended masses. Measure original gauge length and several diameters at different positions and orientations with a zero-checked micrometer; averages reduce scatter but do not cure zero bias. A small initial seating load can remove slack: define the reference state and then use additional load and extension consistently. Keep temperature stable and avoid yielding during modulus measurements. Unload to check recovery; stop before damaging the specimen.

<div class="lesson-check" markdown="1">
<!-- task:materials-data -->
For RP2, wire length is 2.00 m and diameter 0.40 mm. Constructed position readings in mm for loads 0, 5, 10, 15 N are respectively: (1.00,1.00,1.00), (1.39,1.40,1.41), (1.79,1.80,1.81), (2.19,2.20,2.21). Process means and extensions, choose a graph to estimate Young modulus, and explain the diameter measurement and load–unload checks you would perform. For the 10 N calculation only, use bounds ±0.1 N, ±0.002 m in length, ±0.01 mm in diameter, and ±0.01 mm in each position indication. Estimate the percentage modulus uncertainty, distinguishing it from a fitted-gradient uncertainty.
<!-- /task:materials-data -->
<details markdown="1"><summary>Hint</summary>
Subtract the initial position from every loaded position. Decide whether your graph gradient is F/x or x/F.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Mean positions 1.00,1.40,1.80,2.20 mm give extensions 0,0.40,0.80,1.20 mm. A force-against-extension gradient is $1.25\times10^4\,\mathrm{N\,m^{-1}}$; multiply by $L/A$ to obtain $E\approx1.99\times10^{11}$ Pa. A stress–strain graph gives E directly. Measure diameter repeatedly in both orientations, correct zero and check unloading recovery/linearity. At 10 N, extension bound is ±0.02 mm because two indications are subtracted. The conservative first-order percentage bound is $1.0+0.1+2(2.5)+2.5=8.6\%$. This single-point estimate is not a whole-fit uncertainty; obtain that separately from compatible graph lines. If diameter uncertainty was counted once, its square in area identifies the repair needed for the retry.
</details>
</div>

<h2 id="retry">Geometry error or random scatter?</h2>

<div class="lesson-check" markdown="1">
<!-- task:materials-retry -->
A new wire has length 1.0 m and area 2.0 × 10⁻⁷ m². Loads of 4, 8 and 12 N produce extensions 0.10, 0.20 and 0.30 mm; all are linear elastic. Infer Young modulus and energy at 12 N. The diameter used to compute area was systematically 5% too large: predict the direction and approximate percentage bias in the inferred modulus. Explain why more load readings do not remove it. State how you would check it.
<!-- /task:materials-retry -->
<details markdown="1"><summary>Hint</summary>
Infer stiffness from the loading trend. In the modulus equation, area is in the denominator.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Stiffness is $4/(0.10\times10^{-3})=4.0\times10^4$ N/m, hence $E=2.0\times10^{11}$ Pa. Stored energy is 0.0018 J. A 5% high diameter produces about 10% high area and about 10% low E to first order (exact factor $1/1.05^2$, about 9.3% low). Check micrometer zero and compare an independent diameter method/standard; more load readings do not remove that shared bias. Use [Unit 1 review](/alevel/as-physics/unit-1-review/) later to link springs, motion and energy.
</details>
</div>



<div class="lesson-check" markdown="1">
<!-- task:nonlinear-retry -->
Retry the recovery model: a specimen loads along straight segments through (extension/mm, force/N) = (0,0), (1,8), (2,20), (3,24). It unloads through (3,24), (2,12), (1,0). Calculate loading work, recovered work and energy dissipated. State permanent extension and explain why one loading triangle would be invalid.
<!-- /task:nonlinear-retry -->
<details markdown="1"><summary>Hint</summary>
Use a separate trapezium for each segment and convert mm to m.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Loading work = 0.004 + 0.014 + 0.022 = 0.040 J; unloading recovery = 0.018 + 0.006 = 0.024 J; dissipation = 0.016 J, permanent extension = 1 mm. The changing segment slopes do not form one straight line through the origin, so $\frac12 F_{\max}x_{\max}$ is not the actual area.
</details>
</div>

<h3 id="stress-strain-check">Read the stress–strain record</h3>

<div class="lesson-check" markdown="1">
<!-- task:stress-strain-check -->
A constructed tensile stress–strain record follows straight segments (strain, stress/MPa): (0,0), (0.0010,200), (0.0020,240), (0.010,300), with fracture at the last point. Find the initial Young modulus and breaking stress. Sketch the graph and compare with a specimen that fractures at strain 0.0012 while still on the same initial straight line. Explain why stress divided by strain at fracture is not generally Young modulus.
<!-- /task:stress-strain-check -->
<details markdown="1"><summary>Hint</summary>
Convert MPa to Pa; distinguish initial gradient from the fracture endpoint.
</details>
<details markdown="1"><summary>Solution and repair</summary>
E = 200 × 10⁶/0.0010 = 2.0 × 10¹¹ Pa. Breaking stress is 300 MPa. The comparison specimen fractures at 240 MPa with little non-linear deformation, consistent with brittle behaviour. For the first specimen the whole curve is not proportional, so the fracture secant is not its initial elastic modulus.
</details>
</div>

<h2 id="sources-and-next">Scope and next step</h2>

OxfordAQA 9630 §3.2.9–3.2.10; RP2. Tasks are self-written; numerical/schematic records are constructed. Checking criteria are not official marks. [Official specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf).

[Previous](/alevel/as-physics/work-energy-power/) · [Next](/alevel/as-physics/atoms-and-particles/) · [Course](/alevel/as-physics/)
