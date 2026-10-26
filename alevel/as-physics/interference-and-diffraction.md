---
title: "Interference and Diffraction"
layout: subjects
mathjax: true
grade: as
subject: as-physics
permalink: /alevel/as-physics/interference-and-diffraction/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

A narrow opening can spread light, while two openings produce alternating bright and dark regions. Both involve superposition, but their measurable spacings belong to different models.

<h2 id="before-you-start">Before you start</h2>

Use [phase and superposition](/alevel/as-physics/progressive-and-stationary-waves/) and sine/tangent. You will select the right pattern model, derive the grating condition and plan both RP5 wavelength methods.

<h2 id="coherence">From path difference to reinforcement</h2>

Coherent sources have the same frequency and a constant phase difference. For initially in-phase sources, path difference nλ gives constructive interference; (n + ½)λ gives destructive interference when amplitudes are equal. Two independent lamps usually have rapidly changing relative phase and do not give a stable fringe pattern. Splitting one source supplies coherence.

Light, microwaves and sound can interfere. For sound use coherent loudspeakers and a microphone along a measurement path; keep frequency fixed and account for room reflections. A quiet location alone does not locate a node without checking the path model.

<h2 id="double-slit">Double slit: measure many intervals</h2>

For narrow, closely separated slits a and distant screen D, the path difference at angle θ is approximately a sin θ. Bright fringes satisfy a sin θ = nλ. For small angles **in radians**, sin θ ≈ tan θ ≈ θ and screen displacement y ≈ Dθ. Thus:

$$w=\frac{\lambda D}{a}.$$

w is adjacent bright-fringe spacing. This requires D much larger than a and small angles; the slits must also diffract light enough for their beams to overlap. Wider a makes more phase change per screen distance and hence smaller w.

<div class="worked-example" markdown="1">
**Worked example — self-written.**
<!-- task:fringe-worked -->
Monochromatic light of wavelength 600 nm passes through two narrow slits separated by 0.30 mm. A screen is 2.0 m away. Find adjacent bright-fringe spacing and state the approximation. Explain why doubling the slit separation changes the spacing.
<!-- /task:fringe-worked -->

w = (600 × 10⁻⁹)(2.0)/(0.30 × 10⁻³) = 0.0040 m = 4.0 mm. Here w/D = 0.0020, consistent with small angles. Doubling a halves w for fixed λ and D. The relevant distance is between slit centres, not each slit's width.
</div>

With white light, the zero-path-difference central fringe is white; adjacent colours separate because spacing depends on wavelength, with violet closer to the centre than red. Further out the patterns overlap and lose clarity.

<div class="lesson-check" markdown="1">
<!-- task:fringe-check -->
In a constructed double-slit record, the distance from bright fringe −5 to bright fringe +5 is 32.0 ± 0.5 mm; screen distance D = 1.50 ± 0.01 m; slit separation a = 0.250 ± 0.005 mm. Estimate wavelength and a simple upper fractional uncertainty. A student divides 32.0 mm by 11 because 11 bright fringes were counted. Diagnose the error. Choose a measurement that reduces the fractional position uncertainty.
<!-- /task:fringe-check -->
<details markdown="1"><summary>Hint</summary>
Count intervals between endpoints. For a product/quotient, add fractional uncertainty estimates.
</details>
<details markdown="1"><summary>Solution and repair</summary>
There are 10 intervals, so w = 3.20 mm; λ = wa/D = 5.33 × 10⁻⁷ m = 533 nm. Fractional bound ≈ 0.5/32.0 + 0.005/0.250 + 0.01/1.50 = 0.0423, about 4.2% or 23 nm. This is a simple bound using stated independent measurement estimates, not a statistical confidence interval. Eleven marks enclose ten gaps. Use a larger span of identifiable fringes, repeating endpoint measurements; do not assume this removes slit-separation calibration bias.
</details>
</div>

<h2 id="single-slit">Single slit: spreading depends on aperture width</h2>

Diffraction is spreading when a wave passes an aperture or edge. It is prominent when aperture size is comparable with wavelength. A monochromatic single slit gives a broad central maximum with narrower, dimmer side maxima. Reducing slit width broadens the pattern. With white light, the centre is white and side regions show colours, with red spreading farther. These are qualitative pattern predictions here; no intensity-versus-angle formula is required.

Do not substitute slit width into the double-slit separation formula. A real double-slit pattern has fine interference fringes within a diffraction envelope.

<h2 id="grating">Derive the grating condition</h2>

A grating has many equally spaced parallel slits. For normal incidence, rays leaving adjacent slits towards the same far-field angle θ have extra path **d sin θ**, from the right triangle formed by slit spacing d and the perpendicular to the outgoing ray. All adjacent rays reinforce when this equals nλ:

$$d\sin\theta=n\lambda.$$

![Normal-incidence grating geometry: adjacent slits separated by d and outgoing parallel rays at angle theta to the normal; projecting d along the outgoing direction gives path difference d sin theta.](/assets/images/physics-as-grating.svg){: width="740" height="350" }

θ is measured from the straight-through normal direction, not the grating surface. If line density is N per metre, d = 1/N. The zero order has θ = 0; orders ±n appear symmetrically when aligned. Since sin θ ≤ 1, nλ ≤ d. A limiting θ = 90° is a grazing direction, generally not an observable screen maximum. Many slits produce sharp principal maxima useful in wavelength measurement and spectral analysis.

<div class="lesson-check" markdown="1">
<!-- task:grating-check -->
A grating has 600 lines per mm. Normally incident monochromatic light gives a first-order maximum at 22.0°. Find wavelength, predict the second-order angle, and find the largest possible order. Explain what changes if wavelength increases at the same grating.
<!-- /task:grating-check -->
<details markdown="1"><summary>Hint</summary>
Convert lines per mm to lines per metre. Test orders with sin θ ≤ 1.
</details>
<details markdown="1"><summary>Solution and repair</summary>
d = 1/(600 × 10³) = 1.667 × 10⁻⁶ m. λ = d sin 22.0° = 6.24 × 10⁻⁷ m = 624 nm. Second order has sin θ₂ = 2 sin 22° = 0.7492, θ₂ = 48.5°. d/λ = 2.669, so highest order is 2. Increasing wavelength increases each existing order angle and can reduce the number of allowed orders. It does not change d.
</details>
</div>

<h3 id="derive-grating-check">Rebuild the grating derivation</h3>

<div class="lesson-check" markdown="1">
<!-- task:derive-grating -->
Close the displayed equation and recreate the normal-incidence grating construction. Let A and B be adjacent slits a distance d apart and draw a perpendicular from B to the ray from A at C. Show which triangle angle equals θ, obtain AC, and derive the bright-order condition. State why normal incidence and the order n matter.
<!-- /task:derive-grating -->
<details markdown="1"><summary>Hint</summary>
AB = d and BC is perpendicular to AC. Project slit separation along propagation.
</details>
<details markdown="1"><summary>Solution and repair</summary>
AB lies in the grating plane; since the outgoing ray makes θ with the normal, angle ABC is θ. AC is opposite that angle, so AC = d sin θ. Normal incidence contributes no incoming path difference; adjacent outgoing rays reinforce when AC = nλ, hence d sin θ = nλ. n counts integer path-difference orders. Oblique incidence needs an additional incoming path difference.
</details>
</div>
<h3 id="pattern-check">Predict from path difference and aperture</h3>

<div class="lesson-check" markdown="1">
<!-- task:coherence-pattern -->
Two loudspeakers are driven in phase at the same fixed frequency. Sound wavelength is 0.68 m. At P their path difference is 0.34 m; at Q it is 0.68 m. Predict reinforcement/cancellation, assuming equal amplitudes and negligible other reflections. Explain why two independent unsynchronised sound sources may not preserve these locations. Separately, predict how a monochromatic single-slit central maximum changes if slit width halves, then if red light replaces blue light. Describe the central region with white light.
<!-- /task:coherence-pattern -->
<details markdown="1"><summary>Hint</summary>
Express path difference as a fraction of λ; slit width is not slit separation.
</details>
<details markdown="1"><summary>Solution and repair</summary>
P has path difference λ/2 and cancellation; Q has λ and reinforcement. Independent unsynchronised sources change relative phase, so fixed locations need not retain the same interference state. Halving a single slit width broadens the central maximum; longer-wavelength red also broadens it relative to blue. White light has a white centre and coloured side regions with red spreading farther.
</details>
</div>

<div class="lesson-check" markdown="1">
<!-- task:retry-pattern-geometry -->
Retry: with the same coherent speakers a new point has path difference 0.51 m. Is it an exact constructive or destructive location? Explain. A single slit is widened at unchanged wavelength: predict central-maximum width. For a normal-incidence grating, a student writes d cos θ = nλ while θ is measured from the normal; redraw the projection and diagnose the error.
<!-- /task:retry-pattern-geometry -->
<details markdown="1"><summary>Hint</summary>
0.51/0.68 = 0.75, neither an integer nor a half-integer.
</details>
<details markdown="1"><summary>Solution and repair</summary>
0.75λ gives neither exact reinforcement nor exact cancellation. A wider single slit gives a narrower central maximum. With θ from the normal the projection is d sin θ; d cos θ would correspond to the complementary angular convention. Recreate the perpendicular rather than changing functions without redefining the angle.
</details>
</div>

<h2 id="practical-check">RP5: two methods, different measurements</h2>

Double slit: align a low-power school-approved monochromatic source, two slits and a screen normal to the central ray. Measure D from slit plane to screen and a from calibrated slit information; measure many fringe intervals. Compare w versus D: gradient λ/a, checking small-angle conditions at every setting.

Grating: align normal incidence and measure θ for identifiable orders from the straight-through direction, using an appropriate angular scale or measured screen geometry θ = arctan(y/D). Large angles need the exact sine, not θ in degrees. Plot sin θ versus n: gradient λ/d. Repeat both sides; use the half-angle between corresponding ±n orders when the geometry allows, and check alignment separately.

Keep beams below eye level, secure the optical components, use a beam stop and prevent direct/specular eye exposure. Do not look through a grating into a laser. Follow local approved laser procedures; simulated patterns/data are not practical completion.

<div class="lesson-check" markdown="1">
<!-- task:practical-task -->
Design both RP5 wavelength methods: double slit and diffraction grating. Specify apparatus, distance/angle definitions, alignment, repeated readings, a graph or comparison, and laser controls. For a grating, explain why observing angles on both sides helps diagnose a zero/alignment error. A student calls diffraction by a single slit proof of two-slit interference. Explain the missing distinction.
<!-- /task:practical-task -->
<details markdown="1"><summary>Hint</summary>
For each method name the measured quantity before choosing an equation.
</details>
<details markdown="1"><summary>Solution and repair</summary>
A usable plan includes the distances/angles and controls above, repeated endpoint/angle readings and calculated uncertainty. Symmetric orders should be equal in magnitude; a common angular zero offset makes them unequal, while half their angular separation can remove that zero. This does not correct every incidence/alignment error. A single aperture has a diffraction pattern due to superposition across that aperture; calling it a two-source fringe pattern without two slits misidentifies the apparatus and spacing model.
</details>
</div>

<h2 id="retry">Change method, keep the meaning</h2>

<div class="lesson-check" markdown="1">
<!-- task:interference-retry -->
Retry: a grating has spacing 2.0 μm. Its second-order maximum is at 30°. Find wavelength and the highest allowed order; identify the limiting geometry if sin θ = 1. Separately, two slits give 3.0 mm fringe spacing at D = 1.2 m. D is increased to 1.8 m without changing source or slits. Predict the new spacing and say why broadening a single slit would not be analysed by this double-slit formula.
<!-- /task:interference-retry -->
<details markdown="1"><summary>Hint</summary>
Use the order in the grating formula. For fixed slits w is proportional to D.
</details>
<details markdown="1"><summary>Solution and repair</summary>
λ = d sin 30°/2 = 0.50 μm = 500 nm. n ≤ d/λ = 4; order 4 is the mathematical grazing limit θ = 90°, so the largest finite-angle observable order is 3. The double-slit spacing becomes 4.5 mm. A single slit's width controls its diffraction envelope, not a two-source separation. Return to grating for order mistakes and single-slit for model confusion.
</details>
</div>


<h2 id="sources-and-next">Scope and next step</h2>

OxfordAQA 9630 3.5.6–3.5.7 / RP5. Tasks are self-written; numerical/schematic records are constructed. Checking criteria are not official marks. [Official specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf).

[Previous](/alevel/as-physics/progressive-and-stationary-waves/) · [Next](/alevel/as-physics/refraction-and-optical-fibres/) · [Course](/alevel/as-physics/)
