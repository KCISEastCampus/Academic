---
title: Springs and Hooke’s Law
layout: subjects
mathjax: true
grade: igcse
subject: igcse-physics
permalink: /igcse/physics/springs-and-hookes-law/
toc_headings: h2, h3
study_page: true
---

<h2 id="start-here">Does returning to the original length prove Hooke’s law?</h2>

A spring changes shape when forces act on it. We need two different tests: how extension depends on force, and what happens when the force is removed.

1. Distinguish [length and extension](#length-and-extension).
2. Test [the proportional model](#hookes-law) using a loading record.
3. Make decisions for [the spring practical](#spring-practical).
4. Attempt [independent practice](#independent-practice), then [diagnose and retry](#diagnose-and-retry).

**Before you start:** use force, weight and equilibrium from [Forces and Motion](/igcse/physics/forces-and-motion/). All tasks and records here are self-written teaching material, not measured results. No practical completion is implied.

<h3 id="first-length">Try first: which length changed?</h3>

*Self-written task.*

<!-- task:first-length -->

A spring is 50 mm long without a load and 62 mm long with a load. A student records its extension as 62 mm. Correct the record and explain what reference measurement is needed.

<!-- /task:first-length -->

<details markdown="1">
<summary>Hint</summary>

Compare the loaded spring with its unloaded state.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The extension is 12 mm, not the final length. Measure the unloaded length between the same two reference points before adding loads. Without a reference length, the final length alone does not give the extension.

</details>

<h2 id="length-and-extension">Measure a change, not the whole length</h2>

Let the unloaded length be $L_0$, the loaded length $L$, and the extension $e$:

$$e=L-L_0$$

Stretching, compression and bending are different forms of deformation. For **elastic deformation**, the object recovers its original shape after the forces are removed. **Inelastic deformation** leaves a permanent change. Test recovery by unloading; a loading graph alone cannot establish it.

A stretched spring stores elastic potential energy. Work transfers energy into that store; unloading can transfer energy out. We do not need a spring-energy equation to determine its stiffness here.

<h2 id="hookes-law">Test the proportional model before using it</h2>

Within the **limit of proportionality**, force is proportional to extension. Hooke’s law is an empirical model with a range of validity:

$$F=ke,\qquad k=\frac{F}{e}$$

Here F and e are magnitudes of the applied stretching force and extension, and k is the **spring constant** or stiffness. With F in N and e in m, k is in N/m. On a graph with force vertically and extension horizontally, the straight-line gradient is k. If the axes are reversed, the gradient is its reciprocal.

**Worked conversion:** a 2.0 N load produces an 8.0 mm extension within the proportional range:

$$e=8.0\times10^{-3}\,\mathrm{m},\qquad k=\frac{2.0}{0.0080}=250\,\mathrm{N\,m^{-1}}$$

The number 0.25 would have units N/mm, not N/m. Larger k means a larger force for the same extension in the linear range.

**Constructed loading record:** the unloaded length is 50 mm. After the entire loading sequence, removal of all loads returns the spring to 50 mm within the stated reading resolution (1 mm).

<!-- record:spring-record -->

| Force / N | Length / mm | Extension / mm |
| --- | --- | --- |
| 0 | 50 | 0 |
| 1 | 54 | 4 |
| 2 | 58 | 8 |
| 3 | 62 | 12 |
| 4 | 67 | 17 |
| 5 | 74 | 24 |

<!-- /record:spring-record -->

<img src="/assets/img/physics-ig-spring.svg" alt="Constructed loading graph with extension in mm horizontally and force in N vertically. Points correspond to the supplied table: (0,0), (4,1), (8,2), (12,3), (17,4), (24,5); no unloading curve is plotted." width="760" height="430">

<h3 id="loading-data">What does the record support?</h3>

*Self-written task.*

<!-- task:loading-data -->

Use the table and graph to determine the spring constant in the proportional region. Identify the first recorded load that departs from that model. Can the exact limit of proportionality be located from these readings? Does the departure prove permanent deformation?

<!-- /task:loading-data -->

<details markdown="1">
<summary>Hint</summary>

Use the straight region, then consider what the unloading observation tests.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The first four points support 250 N/m. At 4 N the extension is 17 mm rather than the model prediction 16 mm, so 4 N is the first recorded departure. The exact threshold is not resolved: investigate between 3 and 4 N with smaller increments and appropriate uncertainty. The observed return to 50 mm supports elastic recovery within the reading resolution, even though the whole loading range is not proportional. Nonlinearity does not itself prove permanent deformation.

</details>

<h2 id="spring-practical">Required practical: choose measurements that test the model</h2>

Use a securely clamped spring with a vertical ruler close to a small pointer. Record the unloaded position, then add known loads in small steps, allow oscillations to settle, and read at eye level. Keep the same reference points, ruler and spring. Record load, length and extension with units, including repeats where appropriate.

For a light spring supporting a stationary hanging load, the stretching force equals the **total suspended weight**:

$$F=mg$$

Count the hanger mass as well as added masses. If the hanger remains in the reference state, subtract that reference load consistently instead of calling the spring unloaded.

Plot force against extension and fit a straight line only over a justified proportional region. Reduce load steps near a departure; do not force a line through every point. Unload in steps and recheck the original length to test recovery. A persistent residual extension larger than the measurement uncertainty supports permanent deformation.

**Decisions and safety:** secure or weight the stand to prevent tipping, keep feet clear of falling masses, use a tray below the load, and stop before unsafe overstretching. Move the ruler close to the pointer and read square-on to reduce parallax. Repeats reveal scatter; they do not remove a consistent viewing bias. These are preparation and analysis activities, not a substitute for doing the experiment.

<h3 id="hanger-mass">A missing mass in the model</h3>

*Self-written task.*

<!-- task:hanger-mass -->

A 0.050 kg hanger carries 0.150 kg of added masses. The spring is stationary, its own mass is negligible, and g = 10 N/kg. The extension from the completely unloaded length is 8.0 mm, within the proportional range. Determine the force and spring constant. Explain the bias if only the added masses are counted.

<!-- /task:hanger-mass -->

<details markdown="1">
<summary>Hint</summary>

Draw the hanging system and count everything supported by the spring.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$F=(0.050+0.150)\times10=2.0\,\mathrm{N},\qquad k=\frac{2.0}{0.0080}=250\,\mathrm{N\,m^{-1}}$$

Ignoring the hanger gives 1.5 N and 187.5 N/m, an underestimate. The extension reference is completely unloaded, so excluding the hanger weight is inconsistent.

</details>

<h3 id="practical-decision">Choose a useful improvement</h3>

*Self-written task.*

<!-- task:practical-decision -->

A student reads the spring while it oscillates, always looks down at a ruler behind the pointer, and records only loading data. Propose a change for each problem and say what evidence or error it addresses. Why is “repeat everything five times” insufficient?

<!-- /task:practical-decision -->

<details markdown="1">
<summary>Hint</summary>

Separate scatter, viewing bias and the missing recovery test.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Wait for oscillations to settle before reading. Put the ruler close to the pointer and view at eye level to reduce parallax. Record unloading and check the original length to test recovery. Repeats can estimate scatter but do not correct the same viewing bias or supply an omitted unloading observation.

</details>

<h2 id="independent-practice">Use the model without a method label</h2>

<h3 id="practice-load">A different spring</h3>

*Self-written task.*

<!-- task:practice-load -->

A light spring has unloaded length 80 mm and spring constant 400 N/m. It supports a total mass of 0.30 kg at rest. Use g = 10 N/kg. The proportional model is valid up to a force of 4.0 N. Determine the final length and check that your method is applicable.

<!-- /task:practice-load -->

<details markdown="1">
<summary>Hint</summary>

Find the stretching force before predicting a length.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$F=0.30\times10=3.0\,\mathrm{N},\quad e=\frac{3.0}{400}=0.0075\,\mathrm{m}=7.5\,\mathrm{mm}$$

The final length is 87.5 mm. The 3.0 N force is below the stated 4.0 N proportional limit, and the stationary light-spring model allows force to equal the total suspended weight.

</details>

<h3 id="practice-extrapolation">When the calculation is not evidence</h3>

*Self-written task.*

<!-- task:practice-extrapolation -->

Use the constructed loading record above. A student predicts that 6.0 N gives 24 mm extension because the low-load spring constant is 250 N/m. Evaluate this prediction. Another spring returns to 50 mm after a 3 N test but to 53 mm after a separate 5 N test. What can be concluded about recovery, assuming the readings resolve 1 mm?

<!-- /task:practice-extrapolation -->

<details markdown="1">
<summary>Hint</summary>

Check the range of the linear model and distinguish the two springs.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The 6 N prediction extrapolates a model that has already failed at 4 and 5 N; no reliable 6 N extension follows from these data. The separate spring recovers within resolution after 3 N but has a resolved 3 mm residual extension after 5 N, evidence of permanent deformation in that test. This does not locate an exact elastic limit or change what the first spring’s unloading record says.

</details>

<h2 id="diagnose-and-retry">Check the reference, unit and model range</h2>

| Error | Repair |
| --- | --- |
| Final length used as extension | Subtract the unloaded length. |
| N/mm reported as N/m | Convert extension to metres first. |
| Every curved graph called permanent deformation | Seek unloading evidence. |
| One k extrapolated indefinitely | Check the proportional range. |
| Repeats said to remove all error | Identify scatter and consistent bias separately. |

<h3 id="retry-reference">Retry with an inverse problem</h3>

*Self-written task.*

<!-- task:retry-reference -->

Within its proportional range, a spring has length 72 mm under a 1.0 N force and 82 mm under a 3.0 N force. Find its spring constant and unloaded length. Explain why 72 mm is not the unloaded length.

<!-- /task:retry-reference -->

<details markdown="1">
<summary>Hint</summary>

Use the change in force and change in extension; the unknown original length cancels.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$k=\frac{3.0-1.0}{(82-72)\times10^{-3}}=200\,\mathrm{N\,m^{-1}}$$

At 1.0 N the extension is 5.0 mm, so the unloaded length is 67 mm. The 72 mm reading already includes extension caused by a nonzero force.

</details>

<h2 id="sources-and-next">Scope and next step</h2>

Scope: OxfordAQA International GCSE Physics 9203, Section 3.1.1 deformation and force–extension content, including the spring required practical. All tasks, numbers and plotted records are self-written or constructed; no official marks are assigned. See the [official specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-gcse-physics-specification.pdf).

[Previous: Forces and Motion](/igcse/physics/forces-and-motion/) · [Back to IGCSE Physics](/igcse/physics/). [Next: Centre of Mass, Stability and Moments](/igcse/physics/centre-of-mass-and-moments/).
