---
title: "Work, Energy and Power"
layout: subjects
mathjax: true
grade: as
subject: as-physics
permalink: /alevel/as-physics/work-energy-power/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">What crosses the energy boundary?</h2>

A force can act without doing work: carrying a bag horizontally at constant height involves an upward support force perpendicular to displacement. Work measures energy transferred by a force along a displacement. You will decide which forces transfer energy, use areas when a force varies, and check an energy budget. Prerequisites: [forces](/alevel/as-physics/newtons-laws/), [momentum](/alevel/as-physics/momentum-and-impulse/) and graph areas.

<h2 id="work">Keep force and displacement directions together</h2>

For constant force, $W=Fs\cos\theta$, with angle between force and displacement. Forward components do positive work; opposing components do negative work. For a varying component along the path, work is its signed force–displacement area, not a force–time area. The unit is joule: $1\,\mathrm{J}=1\,\mathrm{N\,m}$.

Kinetic energy is $E_k=\tfrac12mv^2$. The net work of all forces equals its change. Weight and support do zero work on a horizontal path; they may still be nonzero forces.

<div class="worked-example" markdown="1">
**Worked example — self-written.**
<!-- task:energy-worked -->
A 2.0 kg trolley starts from rest on a horizontal track. A constant 10 N pull acts at 60° above the direction of travel over 4.0 m. Horizontal resistance is 1.0 N. The trolley stays on the track. Use g = 10 m/s². Find the work by the pull, work by resistance and final speed.
<!-- /task:energy-worked -->

The pull’s forward component is $10\cos60^\circ=5.0\,\mathrm{N}$. Its work is 20 J; resistance does −4.0 J. Thus $\Delta E_k=16\,\mathrm{J}$ and $v=\sqrt{2(16)/2}=4.0\,\mathrm{m\,s^{-1}}$. The vertical pull is 8.66 N, below the 20 N weight, so a positive support force can maintain contact. The energy calculation and force model agree.
</div>

<h2 id="budget">Choose what stays inside the system</h2>

For an object–Earth system near the surface, gravitational potential-energy change is $\Delta E_p=mg\Delta h$; the zero of height is a choice. A raised object released downwards can gain kinetic energy as potential energy decreases. A Hookean spring stores $\tfrac12kx^2$ relative to its relaxed length. For non-Hookean loading use the area under its force–extension curve; the triangle formula does not apply to an arbitrary curve.

An isolated system conserves total energy. Friction transfers mechanical energy into internal energy; it does not destroy energy. Either account for external work or include the relevant stores inside the system; do not count gravity twice as both work input and the same potential-energy decrease.

<h2 id="transfer">A different representation</h2>

<div class="lesson-check" markdown="1">
<!-- task:energy-transfer -->
A 1.0 kg trolley starts at 2.0 m/s on a horizontal track. Its forward applied force rises linearly from 0 to 8.0 N over 3.0 m; a steady 1.0 N resistance acts backwards. Find its final speed. Explain why neither the peak force nor the impulse formula supplies the applied work here.
<!-- /task:energy-transfer -->
<details markdown="1"><summary>Hint</summary>
Use the applied force–displacement area, then subtract resistance work.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Applied work is $\tfrac12(3)(8)=12\,\mathrm{J}$; resistance work is −3 J. Initial kinetic energy is 2 J, final energy 11 J, so $v=\sqrt{22}=4.69\,\mathrm{m\,s^{-1}}$. The peak is not maintained throughout the path. Impulse changes momentum and uses time; the given horizontal axis is displacement. If areas were confused, compare both graph axes before doing the retry.
</details>
</div>

<h2 id="power-check">How fast is useful energy transferred?</h2>

Average power is energy transferred divided by elapsed time; instantaneous mechanical power is $P=Fv\cos\theta$, or $Fv$ for aligned force and velocity. For varying power, energy is the power–time area. Efficiency is useful output divided by total input for the same process, using energies or powers consistently. One kW h is $1000\times3600=3.6\times10^6$ J; it is energy, not power.

<div class="lesson-check" markdown="1">
<!-- task:energy-power -->
A motor raises a 20 kg load vertically at constant speed 0.50 m/s. Use g = 10 m/s². Electrical input is 160 W. Find useful power and efficiency. A different machine delivers 120 W usefully for 2.0 h: express its useful output energy in J and kW h.
<!-- /task:energy-power -->
<details markdown="1"><summary>Hint</summary>
Steady lifting balances weight; compare useful output with total input.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Useful lifting power is $mgv=100\,\mathrm{W}$; efficiency $100/160=0.625=62.5\%$. The other machine delivers $120(7200)=864000\,\mathrm{J}=0.240\,\mathrm{kW\,h}$. An efficiency above 100% would expose a mismatched boundary, interval or calculation. If kW h was treated as power, repeat the unit conversion explicitly.
</details>
</div>

<h2 id="retry">Connect stores with a new stopping process</h2>

<div class="lesson-check" markdown="1">
<!-- task:energy-retry -->
A 0.50 kg cart is released from rest 2.0 m above a horizontal stopping section. It loses 2.0 J to resistance before reaching that section, then stops against a spring of stiffness 100 N/m. During spring compression the track is horizontal and resistance is negligible. Use g = 10 m/s². Find the entry speed and maximum compression. Explain where the initial energy ends up.
<!-- /task:energy-retry -->
<details markdown="1"><summary>Hint</summary>
Write the initial store, irreversible transfer and final store before substituting.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Initial potential energy is 10 J. After the 2 J transfer to surroundings, kinetic energy is 8 J and $v=\sqrt{32}=5.66\,\mathrm{m\,s^{-1}}$. At maximum compression the cart is momentarily at rest, and $\tfrac12(100)x^2=8$, so $x=0.40\,\mathrm{m}$. The initial 10 J ends as 8 J elastic energy and 2 J transferred to internal energy. If you lost resistance or counted gravity twice, redraw the boundary and budget. Later start [Unit 1 review](/alevel/as-physics/unit-1-review/) with these answers closed.
</details>
</div>



<div class="lesson-check" markdown="1">
<!-- task:variable-force-retry -->
Retry with a different graph: a 2.0 kg object moves right at 1.0 m/s. Its horizontal resultant force is plotted against displacement through points (0 m, 0 N), (1 m, 6 N), (2 m, 6 N), (3 m, −2 N), with straight joins. Calculate work and final speed at 3 m. Explain why using peak force times 3 m is wrong, and what area would mean if the horizontal axis were time instead.
<!-- /task:variable-force-retry -->
<details markdown="1"><summary>Hint</summary>
Check the horizontal axis, then add signed segment areas.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Signed areas give 3 + 6 + 2 = 11 J. The last segment's net trapezium area can also be split into positive and negative triangles. Initial kinetic energy is 1 J, final 12 J, so v = √12 = 3.46 m/s. Peak 6 N does not act throughout, so 18 J is wrong. A force–time area would be impulse in N s, not work.
</details>
</div>

<h3 id="power-retry">Retry with changed conditions</h3>

<div class="lesson-check" markdown="1">
<!-- task:power-retry -->
Retry: a motor lifts a 12 kg load steadily at 0.25 m/s with electrical input 60 W. Take g = 10 m/s². Find useful power and efficiency. At the same efficiency, what input power is needed for 0.50 m/s? A claim of 0.50 m/s with only 80 W input is made: can it also retain the original efficiency? Explain your conditional conclusion.
<!-- /task:power-retry -->
<details markdown="1"><summary>Hint</summary>
Use P = mgv for the steady load, then useful/input.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Useful power = 30 W and efficiency = 50%. Doubling speed doubles useful power to 60 W, requiring 120 W input at the same efficiency. With 80 W input at 0.50 m/s the implied efficiency is 75%, so the original 50% model and those two readings cannot all hold together. This identifies a model/data inconsistency, not a universal impossibility of 75% efficiency.
</details>
</div>

<h2 id="sources-and-next">Scope and next step</h2>

OxfordAQA 9630 §3.2.7–3.2.8. Tasks are self-written; numerical/schematic records are constructed. Checking criteria are not official marks. [Official specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf).

[Previous](/alevel/as-physics/momentum-and-impulse/) · [Next](/alevel/as-physics/materials-and-young-modulus/) · [Course](/alevel/as-physics/)

{% include exam_topic_practice.html %}
