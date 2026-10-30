---
title: "Refraction and Optical Fibres"
layout: subjects
mathjax: true
grade: as
subject: as-physics
permalink: /alevel/as-physics/refraction-and-optical-fibres/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

A ray can change direction at a boundary; a digital pulse can spread even when its light remains guided. First follow a ray, then follow a pulse.

<h2 id="before-you-start">Before you start</h2>

Use sine and inverse sine, [wave speed/frequency](/alevel/as-physics/progressive-and-stationary-waves/) and [pulse timing](/alevel/as-physics/progressive-and-stationary-waves/#ultrasound). You will draw boundary rays, test total internal reflection and separate three fibre limitations.

<h2 id="refraction">Angles are measured from the normal</h2>

Refractive index n = c/v compares vacuum speed c with phase speed v in the material. For light crossing an interface:

$$n_1\sin\theta_1=n_2\sin\theta_2.$$

A larger n means lower speed. At oblique incidence into larger n the ray bends towards the normal. Frequency stays fixed by the source and boundary continuity; wavelength changes because v = fλ. At normal incidence the direction does not change, but speed/wavelength can.

<div class="worked-example" markdown="1">
**Worked example — self-written.**
<!-- task:refraction-worked -->
Light travels from air (n = 1.00) into glass (n = 1.50) at 40.0° to the normal. Find the refracted angle and speed in the glass using c = 3.00 × 10⁸ m/s. State which of frequency and wavelength changes.
<!-- /task:refraction-worked -->

sin θ₂ = sin 40.0°/1.50 = 0.4285, so θ₂ = 25.4°. v = c/n = 2.00 × 10⁸ m/s. Frequency remains fixed, wavelength becomes 1/1.50 of its air value to this approximation. Measuring from the surface instead would require complementary angles, not inserting 50° into the same normal-angle setup.
</div>

<h2 id="total-internal-reflection">Two conditions for total internal reflection</h2>

Light must travel **from higher to lower refractive index**, and incidence must exceed the critical angle C. At C the refracted ray is along the boundary, θ₂ = 90°:

$$\sin C=\frac{n_{\rm lower}}{n_{\rm higher}}.$$

Below C there is transmission and generally some reflection. Above C the ideal boundary has no propagating transmitted ray: reflection angle equals incidence angle. At exactly C the grazing ray is the limiting case; avoid claiming the condition is merely 'a large angle'.

<div class="lesson-check" markdown="1">
<!-- task:ray-check -->
A ray inside water (n = 1.33) meets a water–air boundary at 50.0° to the normal. Determine whether it is totally internally reflected. Sketch the incident and resulting ray, marking the normal. A second ray in air meets water at 80°. Can it undergo total internal reflection at this entry boundary? Explain.
<!-- /task:ray-check -->
<details markdown="1"><summary>Hint</summary>
Compare the index order and the critical angle before attempting inverse sine for a refracted ray.
</details>
<details markdown="1"><summary>Solution and repair</summary>
C = arcsin(1.00/1.33) = 48.8°. The 50.0° water ray exceeds C, so it reflects at 50.0° to the normal; no propagating refracted ray is drawn in air. Air to water is lower to higher index, so cannot meet the condition for total internal reflection, even at 80°. Its refracted ray bends towards the normal.
</details>
</div>

<h2 id="fibre-model">Step-index fibres</h2>

A step-index fibre has a uniform higher-index core surrounded by lower-index cladding, with an abrupt index change at their boundary. Suitable rays repeatedly totally internally reflect. Incidence is measured to each boundary's **normal**, not along the fibre axis. Cladding maintains a controlled lower-index boundary, separates neighbouring cores and protects the guiding region against surface contamination/contact. It does not make all entering rays guided.

![Schematic step-index fibre: a higher-index core between two lower-index cladding regions; a ray reflects at each boundary with the angle measured from its normal.](/assets/images/physics-as-fibre.svg){: width="760" height="320" }

<h2 id="dispersion-and-absorption">A pulse is more than one ray</h2>

- **Absorption** transfers optical energy to material internal energy, reducing received intensity. Use a low-absorption operating wavelength/material; repeaters or amplifiers can address signal strength, but do not undo all distortion.
- **Modal dispersion**: different allowed paths/modes have different transit times. A short pulse broadens and neighbouring bits can overlap. A sufficiently narrow core supporting a single mode reduces this mechanism.
- **Material dispersion**: refractive index depends on wavelength, so a source with a spread of wavelengths has different travel times. A narrower source spectrum and suitable operating wavelength/material reduce this broadening.

The first reduces energy; the latter two spread arrival times. A bright detector signal can still contain inseparable pulses. These are causal explanations, not simply three names for attenuation.

<div class="lesson-check" markdown="1">
<!-- task:fibre-check -->
A step-index fibre has core index 1.48 and cladding index 1.46. Calculate the core–cladding critical angle. Explain what happens to a ray incident inside the core at 85.0° to the boundary normal. Distinguish absorption, modal dispersion and material dispersion, then suggest a suitable change to reduce each source of signal loss or pulse broadening.
<!-- /task:fibre-check -->
<details markdown="1"><summary>Hint</summary>
Calculate the ratio core/cladding in the physically possible order. Separate pulse width from pulse energy.
</details>
<details markdown="1"><summary>Solution and repair</summary>
C = arcsin(1.46/1.48) ≈ 80.6°. Incidence 85.0° exceeds C and travels from higher to lower n, so the ideal ray is guided by total internal reflection. Absorption reduces energy (choose low-loss wavelength/material); modal dispersion spreads different paths (single-mode narrow core); material dispersion spreads different wavelengths (narrower spectrum/suitable wavelength). Cladding is essential to guiding but is not itself a cure for all dispersion.
</details>
</div>

<h2 id="retry">Re-test the conditions</h2>

<div class="lesson-check" markdown="1">
<!-- task:fibre-retry -->
Retry: a ray travels from glass n = 1.60 to a liquid n = 1.40 at 60.0° to the normal. Predict the result and, if transmitted, calculate its angle. Two narrow light pulses in a fibre overlap after a long distance although received total energy remains almost unchanged. Explain why this observation suggests dispersion rather than absorption; why would making the source dimmer not directly fix the overlap?
<!-- /task:fibre-retry -->
<details markdown="1"><summary>Hint</summary>
A numerical critical-angle test comes before a claim of total reflection. The energy observation matters.
</details>
<details markdown="1"><summary>Solution and repair</summary>
C = arcsin(1.40/1.60) = 61.0°. Incidence 60.0° is below C, so transmission occurs; sin θ₂ = (1.60/1.40)sin 60° = 0.98974, θ₂ ≈ 81.8°, with possible partial reflection. Overlap with nearly conserved received energy is consistent with arrival-time spreading, not predominantly absorption. Dimming scales energy without removing path or wavelength travel-time differences. Revisit total-internal-reflection for index/angle errors and dispersion-and-absorption for pulse errors.
</details>
</div>


<h2 id="sources-and-next">Scope and next step</h2>

OxfordAQA 9630 3.5.8. Tasks are self-written; numerical/schematic records are constructed. Checking criteria are not official marks. [Official specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf).

[Previous](/alevel/as-physics/interference-and-diffraction/) · [Next](/alevel/as-physics/photons-and-wave-particle-duality/) · [Course](/alevel/as-physics/)

{% include exam_topic_practice.html %}
