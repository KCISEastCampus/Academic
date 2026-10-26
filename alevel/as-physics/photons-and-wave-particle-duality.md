---
title: "Photons and Wave–Particle Duality"
layout: subjects
mathjax: true
grade: as
subject: as-physics
permalink: /alevel/as-physics/photons-and-wave-particle-duality/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

Light spreads and interferes, yet it transfers energy to electrons in discrete amounts. Use the evidence appropriate to the question; a useful model has a stated job and a boundary.

<h2 id="before-you-start">Before you start</h2>

Use [atomic structure](/alevel/as-physics/atoms-and-particles/), [energy per charge](/alevel/as-physics/charge-current-and-potential/), [momentum](/alevel/as-physics/momentum-and-impulse/) and [diffraction](/alevel/as-physics/interference-and-diffraction/). You will interpret levels/spectra, explain X-ray production, analyse photoelectric data and use particle-wave evidence.

<h2 id="photons-and-ev">Energy comes in quanta</h2>

For electromagnetic radiation a photon has energy:

$$E=hf=\frac{hc}{\lambda}.$$

Use vacuum wavelength in E = hc/λ here. h is Planck's constant in J s. An electronvolt is an energy unit: 1 eV is the energy gained by a charge of magnitude e through 1 V, so 1 eV = 1.602 × 10⁻¹⁹ J. It is not a voltage or a charge. A keV is 10³ eV, a MeV is 10⁶ eV.

<h2 id="levels-and-spectra">Allowed atomic energies</h2>

Excitation raises an electron to a higher allowed bound energy; ionisation removes it from the atom. With the ionisation limit chosen as zero, bound levels are negative. A downward transition emits a photon of energy E_high − E_low; an upward photon absorption needs a matching level gap in the isolated-atom single-photon model. Colliding electrons can also excite atoms, retaining excess kinetic energy.

A hot low-density gas gives emission lines at its allowed photon energies. A cooler gas in front of a continuous source removes corresponding frequencies, giving dark absorption lines. Discrete lines support quantised energy differences, rather than electrons being allowed every energy.

In a fluorescent tube, an electric discharge accelerates electrons. Collisions excite gas atoms (commonly mercury); de-excitation produces ultraviolet photons, which excite a phosphor coating that emits visible light. Energy losses mean the output need not equal the absorbed UV photon energy in one visible photon.

<div class="worked-example" markdown="1">
**Worked example — self-written.**
<!-- task:levels-worked -->
An atom has levels −5.0, −3.0 and −1.0 eV relative to an ionisation limit of 0 eV. An electron drops from −1.0 to −3.0 eV. Find emitted photon energy and wavelength using h = 6.63 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m/s and 1 eV = 1.602 × 10⁻¹⁹ J. What minimum energy ionises an atom initially at −3.0 eV?
<!-- /task:levels-worked -->

The gap is (−1.0) − (−3.0) = 2.0 eV = 3.204 × 10⁻¹⁹ J. λ = hc/E = 6.21 × 10⁻⁷ m = 621 nm. Ionising from −3.0 eV to 0 requires 3.0 eV, not −3.0 eV. Energy is supplied to increase the electron's energy.
</div>

<div class="lesson-check" markdown="1">
<!-- task:levels-check -->
For the same three levels, list all distinct downward-transition photon energies and explain why counting transitions is not always the same as counting different wavelengths. Can a 1.5 eV photon excite an atom from −5.0 eV to either shown higher bound level in the isolated-atom single-photon model? Explain how absorption lines differ from emission lines.
<!-- /task:levels-check -->
<details markdown="1"><summary>Hint</summary>
List pairs, then group equal gaps. An absorption cannot leave the atom at an unlisted bound energy.
</details>
<details markdown="1"><summary>Solution and repair</summary>
The three downward transitions have energies 2.0, 2.0 and 4.0 eV, so there are two distinct photon energies/wavelengths in this ideal record. A 1.5 eV photon matches neither the 2.0 nor 4.0 eV gap from −5.0 eV and cannot produce either stated excitation. Emission adds light at transition frequencies; absorption removes matching light from an incident continuous spectrum.
</details>
</div>

<h2 id="xray-tube">X rays: braking and inner-shell transitions</h2>

An evacuated X-ray tube has a heated cathode that releases electrons, a large accelerating potential difference, and a metal anode/target. Electron kinetic energy gained is eV. On hitting the target, most energy becomes heat, so cooling is required. Electron deceleration produces a **continuous** X-ray spectrum: different encounters release different fractions of the kinetic energy. Its maximum photon energy is eV, giving minimum wavelength hc/(eV).

Some collisions eject inner-shell electrons from target atoms. Higher-level electrons fall into these vacancies, producing **characteristic lines** fixed by target energy differences. The lines require sufficient incident energy to create the vacancies; they are not the origin of the entire continuum. Higher accelerating voltage raises maximum photon energy; higher tube current mainly increases electron/photon number under otherwise unchanged conditions.

X rays image differences in absorption (for example bone and soft tissue) and are used in CT. Their ionising action is also a hazard: authorised operation uses shielding, restricted beams and justified exposure. This page explains production and evidence, not a procedure for operating a tube.

<div class="lesson-check" markdown="1">
<!-- task:xray-check -->
An X-ray tube accelerates electrons through 40 kV before they strike a metal target. Find the largest possible energy of one emitted photon in keV and joules. Explain the continuous spectrum and characteristic lines separately. Explain why increasing tube current at unchanged voltage need not increase the maximum photon energy. Give one medical use and a relevant exposure control.
<!-- /task:xray-check -->
<details markdown="1"><summary>Hint</summary>
One electron gains eV; the maximum single photon can receive at most that energy.
</details>
<details markdown="1"><summary>Solution and repair</summary>
$E_{\max}$ = 40 keV = 6.408 × 10⁻¹⁵ J. Different decelerations produce the continuum; transitions into inner-shell vacancies produce target-specific lines. Tube current changes how many electrons arrive per second; unchanged voltage keeps each electron's available energy limit fixed. Radiography or CT is a medical use; shielding/collimation and minimised justified exposure control ionising risk.
</details>
</div>

<h2 id="photoelectric-effect">A threshold that intensity cannot fix</h2>

A surface electron absorbs one photon in the elementary photoelectric model. Work function φ is the minimum energy needed to escape; electrons can lose additional energy before escape, so the largest kinetic energy is:

$$E_{k,\max}=hf-\phi,\qquad f_0=\frac{\phi}{h},\qquad eV_s=E_{k,\max}.$$

$V_s$ is the magnitude of retarding potential just sufficient to stop even the fastest emitted electrons. Above threshold, increasing frequency increases maximum kinetic energy. At fixed above-threshold frequency, greater intensity supplies more photons and generally raises photoelectric current (under comparable collection conditions), but does not raise the maximum kinetic energy. Below threshold no ordinary single-photon emission occurs, however long/intense the illumination in this model. Prompt emission and a frequency threshold challenged a simple continuous-energy wave account.

Plotting $V_s$ against f gives gradient h/e and horizontal intercept f₀. A negative vertical intercept is −φ/e; it is an extrapolation, not a physically negative measured maximum kinetic energy below threshold.

<div class="lesson-check" markdown="1">
<!-- task:photoelectric-check -->
A constructed photoelectric record gives:

| Frequency / 10¹⁴ Hz | Stopping potential / V |
| --- | --- |
| 5.0 | 0.17 |
| 6.0 | 0.58 |
| 7.0 | 0.99 |

Estimate h from a Vₛ-versus-f gradient using e = 1.602 × 10⁻¹⁹ C. Estimate threshold frequency and work function. Predict separately the effects of increased intensity at fixed frequency above threshold and increased frequency at fixed photon arrival rate. Why cannot more intense light below threshold eject electrons in this model?
<!-- /task:photoelectric-check -->
<details markdown="1"><summary>Hint</summary>
Use frequency in Hz, and retain units of the gradient. Separate photon number from energy per photon.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Gradient = (0.99−0.17)/(2.0 × 10¹⁴) = 4.10 × 10⁻¹⁵ V s. h ≈ 6.57 × 10⁻³⁴ J s. The line is $V_s$ = (4.10 × 10⁻¹⁵)f − 1.88, so f₀ ≈ 4.59 × 10¹⁴ Hz and φ ≈ 1.88 eV = 3.01 × 10⁻¹⁹ J. These are estimates from a rounded constructed record. Higher intensity at fixed f raises photon arrival rate/current, leaving $V_s$ unchanged. Higher f raises $V_s$; with photon arrival rate fixed, current need not increase. Below threshold each photon supplies too little escape energy; additional photons do not pool energy in the stated model.
</details>
</div>

<h2 id="wave-particle-evidence">Electron diffraction and changing models</h2>

De Broglie proposed a wavelength associated with momentum:

$$\lambda=\frac{h}{p}.$$

Electron diffraction by crystal planes supports matter-wave behaviour; a wave model predicts interference structure. Detectors still record individual localised impacts, whose distribution builds the pattern. Conversely, photon energy explains photoelectric thresholds while wave propagation explains interference. Neither a small classical ball picture alone nor a purely continuous classical energy picture accounts for all these observations. Model development follows new evidence; do not claim the experiment photographs a literal sinusoidal electron trajectory.

<div class="lesson-check" markdown="1">
<!-- task:duality-check -->
Electrons with momentum 2.0 × 10⁻²⁴ kg m/s form a diffraction pattern through a thin crystal. Calculate their de Broglie wavelength using h = 6.63 × 10⁻³⁴ J s. Predict the wavelength and the change of diffraction angles for the same crystal when momentum doubles. Explain what diffraction supports, and why it does not mean electrons have ceased to produce localised detector impacts.
<!-- /task:duality-check -->
<details markdown="1"><summary>Hint</summary>
Use momentum directly; no electron mass or accelerating-voltage relation is needed.
</details>
<details markdown="1"><summary>Solution and repair</summary>
λ = 6.63 × 10⁻³⁴/(2.0 × 10⁻²⁴) = 3.315 × 10⁻¹⁰ m ≈ 0.33 nm. Doubling p halves λ. For the same crystal, constructive path differences then occur at smaller angles: diffraction features move nearer the direct beam. The spatial diffraction distribution supports wave behaviour; localised impacts remain evidence about detection. These are complementary observations, not mutually exclusive detector outcomes.
</details>
</div>

<div class="lesson-check" markdown="1">
<!-- task:units-check -->
Convert 2.5 keV to joules, 0.20 kWh to joules, and 3.0 mm² to m². Explain where each prefix or power acts. Use 1 eV = 1.602 × 10⁻¹⁹ J.
<!-- /task:units-check -->
<details markdown="1"><summary>Hint</summary>
Square the length conversion for area. A kilowatt-hour contains a power and a time.
</details>
<details markdown="1"><summary>Solution and repair</summary>
2.5 keV = 4.005 × 10⁻¹⁶ J ≈ 4.0 × 10⁻¹⁶ J; 0.20 kWh = 0.20(1000)(3600) = 7.2 × 10⁵ J; 3.0 mm² = 3.0(10⁻³ m)² = 3.0 × 10⁻⁶ m². The prefix k acts on eV or W; the square acts on the whole millimetre unit.
</details>
</div>

<h2 id="retry">Use a new energy record</h2>

<div class="lesson-check" markdown="1">
<!-- task:quantum-retry -->
Retry: a metal has work function 2.0 eV. Incident photons have energy 3.2 eV. Find maximum electron kinetic energy in eV and stopping potential. The photon energy is then reduced to 1.8 eV while intensity is doubled. Predict emission. An atom initially at −4.0 eV absorbs 2.5 eV and reaches an allowed level: give that level and its remaining ionisation energy. A separate absorption scan shows narrow lines separated by transparent frequency bands. Explain how this selective absorption supports quantised levels, and why one stipulated 2.5 eV transition alone would not establish forbidden intermediate energies.
<!-- /task:quantum-retry -->
<details markdown="1"><summary>Hint</summary>
Subtract the escape energy. A negative computed maximum is a no-emission condition.
</details>
<details markdown="1"><summary>Solution and repair</summary>
$E_{k,\max}$ = 1.2 eV and $V_s$ = 1.2 V. At 1.8 eV < 2.0 eV no single-photon emission occurs; doubling intensity does not change this. The excited bound level is −1.5 eV, leaving 1.5 eV for ionisation. Selective absorption at narrow lines, with transmission between them, supports particular allowed energy gaps. One stipulated transition alone would also fit continuous-energy arithmetic; it does not establish forbidden intermediate energies. A wave-speed relation alone does not predict allowed bound levels. Revisit levels-and-spectra for sign errors and photoelectric-effect for intensity/energy confusion.
</details>
</div>


<h3 id="tube-and-transition-check">Explain the tube and calculate a transition</h3>

<div class="lesson-check" markdown="1">
<!-- task:tube-and-transition-check -->
In English, explain a fluorescent tube from accelerated electrons through excitation/ionisation of gas to ultraviolet emission and visible emission from the coating. Distinguish excitation from ionisation. Separately a bound electron drops from −1.0 to −4.0 eV: calculate photon wavelength using h = 6.63 × 10⁻³⁴ J s, c = 3.00 × 10⁸ m/s and 1 eV = 1.602 × 10⁻¹⁹ J.
<!-- /task:tube-and-transition-check -->
<details markdown="1"><summary>Hint</summary>
A collision can raise a bound electron or remove it; the coating is a second energy-transfer stage.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Example: 'Accelerated electrons collide with gas atoms. Excitation raises electrons to higher bound levels; ionisation removes electrons and supplies charged particles that help sustain the discharge. De-excitation emits ultraviolet photons. The phosphor absorbs ultraviolet energy and emits visible photons.' For the new transition E = 3.0 eV = 4.806 × 10⁻¹⁹ J; λ = hc/E = 4.14 × 10⁻⁷ m = 414 nm.
</details>
</div>
<h3 id="xray-duality-retry">Retry X-ray and diffraction evidence</h3>

<div class="lesson-check" markdown="1">
<!-- task:xray-duality-retry -->
Retry: the same target is used in an X-ray tube at 25 kV and 50 kV. Compare maximum photon energies, the cause of the continuum and the possible characteristic-line positions. In a separate fixed-crystal electron experiment the momentum halves: predict de Broglie wavelength and diffraction angles. Explain why increasing electron arrival rate at fixed momentum changes event number rather than this wavelength.
<!-- /task:xray-duality-retry -->
<details markdown="1"><summary>Hint</summary>
Separate energy per electron, target levels and particle momentum.
</details>
<details markdown="1"><summary>Solution and repair</summary>
X-ray maxima are 25 and 50 keV. Deceleration releases variable fractions of incident electron energy, giving a continuum. Accessible characteristic lines stay at the same target level gaps, although the higher voltage can excite additional lines. Halving electron momentum doubles de Broglie wavelength and generally moves corresponding diffraction features to larger angles; some orders can become unavailable. More electrons at unchanged momentum increase detection events, not h/p.
</details>
</div>

<h2 id="sources-and-next">Scope and next step</h2>

OxfordAQA 9630 3.5.9–3.5.11. Tasks are self-written; numerical/schematic records are constructed. Checking criteria are not official marks. [Official specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf).

[Previous](/alevel/as-physics/refraction-and-optical-fibres/) · [Next](/alevel/as-physics/unit-2-review/) · [Course](/alevel/as-physics/)
