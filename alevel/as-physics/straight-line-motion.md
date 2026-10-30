---
title: Straight-line Motion and Uniform Acceleration
layout: subjects
mathjax: true
grade: as
subject: as-physics
permalink: /alevel/as-physics/straight-line-motion/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">One motion, three connected descriptions</h2>

Displacement tells us where an object is relative to its start. Velocity tells us how that position changes. Acceleration tells us how velocity changes. The connections matter more than choosing an equation by its letters.

1. Connect [signs, gradients and areas](#graphs-and-signs).
2. Establish when [constant-acceleration equations](#constant-acceleration) apply.
3. Explain [vertical motion and turning](#vertical-motion).
4. Analyse [freefall data for RP1](#freefall-practical), then try [independent practice](#independent-practice).

**Before you start:** use [IG motion graphs](/igcse/physics/motion-and-graphs/) if needed, and [AS measurement uncertainties](/alevel/as-physics/measurements-and-uncertainties/) for experimental evaluation. Choose a positive direction before assigning signs. All numerical records are constructed; the labelled exam adaptation changes the original graph and values.

<h3 id="first-turn">Try first: stopped or unaccelerated?</h3>

*Self-written task.*

<!-- task:first-turn -->

A ball is thrown vertically upwards and later returns to its release height. Ignore air resistance. At the highest point its velocity is zero. Does its acceleration also become zero? Give a reason using the interaction that still acts.

<!-- /task:first-turn -->

<details markdown="1">
<summary>Hint</summary>

Which force disappears at the highest point?

</details>

<details markdown="1">
<summary>Solution and check</summary>

Gravity still acts at the highest point. The velocity is momentarily zero while continuing to change downwards; acceleration is downwards throughout the free flight. Zero velocity at one instant is not evidence of zero acceleration.

</details>

<h2 id="graphs-and-signs">Read the gradient and the signed area</h2>

Displacement and velocity have signs; distance and speed are non-negative. Over a finite interval:

$$\bar v=\frac{\Delta s}{\Delta t},\qquad \text{average speed}=\frac{\text{total distance}}{\Delta t},\qquad \bar a=\frac{\Delta v}{\Delta t}$$

Instantaneous velocity is the displacement–time tangent gradient; instantaneous acceleration is the velocity–time tangent gradient. A secant gives an interval average. A negative velocity can become less negative: the object slows down while its acceleration is positive.

| Graph | Gradient or area | Meaning |
| --- | --- | --- |
| Displacement–time | Tangent gradient | Instantaneous velocity |
| Velocity–time | Tangent gradient | Instantaneous acceleration |
| Velocity–time | Signed area | Displacement change |
| Speed–time | Area | Distance travelled |
| Acceleration–time | Signed area | Velocity change |

For distance from a velocity graph, add the magnitudes of the areas on opposite sides of zero. For a curved graph use a tangent for an instantaneous value and an appropriate area estimate; a single constant-acceleration equation cannot replace that varying motion.

<h3 id="graph-transfer">Move between representations</h3>

*Self-written task.*

<!-- task:graph-transfer -->

A trolley starts with velocity +2.0 m/s. Its acceleration is +3.0 m/s² for 2.0 s, then −2.0 m/s² for 5.0 s. Sketch acceleration–time and velocity–time graphs. Determine the final velocity, total displacement and total distance. Identify when the trolley reverses direction.

<!-- /task:graph-transfer -->

<details markdown="1">
<summary>Hint</summary>

Use acceleration–time areas for velocity changes, then split velocity–time areas at zero.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$v_2=2+3\times2=8\,\mathrm{m\,s^{-1}},\qquad v_7=8-2\times5=-2\,\mathrm{m\,s^{-1}}$$

The acceleration graph has horizontal levels +3 and −2, with a jump at 2 s; the idealisation leaves its value at that transition unspecified. The velocity graph joins (0,2), (2,8), (7,−2) with straight lines and crosses zero at 6 s. Areas give 10 m for 0–2 s, +16 m for 2–6 s and −1 m for 6–7 s. Displacement is +25 m, distance 27 m. Reversal occurs at 6 s. The graphs share velocities at the boundary but not one acceleration over the whole interval.

</details>

<h2 id="constant-acceleration">Establish the condition, then choose the equation</h2>

For motion along one axis with **constant acceleration** over the chosen time interval, define u as the initial velocity, v as final velocity, s as displacement from the interval’s starting position, and t as elapsed time:

$$v=u+at$$

The velocity–time graph is straight, so its signed trapezium area gives:

$$s=\frac{u+v}{2}t=ut+\frac12at^2$$

Eliminating t gives the remaining useful relation:

$$v^2=u^2+2as$$

These equations connect the same interval and sign convention. Squaring loses the sign of v, so use the motion to choose a physically appropriate sign afterwards. Do not use the arithmetic mean of end velocities for a general curved velocity graph.

<div class="worked-example" markdown="1">

**Worked choice:** a trolley moving at +4.0 m/s accelerates uniformly at +2.0 m/s² over +12 m. Time is not given, so eliminate it:

$$v^2=4.0^2+2\times2.0\times12=64,\qquad v=+8.0\,\mathrm{m\,s^{-1}}$$

The positive sign follows from the motion: acceleration reinforces the initial positive velocity. The check gives 2.0 s and a mean velocity of +6.0 m/s.

</div>

<h3 id="suvat-choice">Choose an interval that has one acceleration</h3>

*Self-written task.*

<!-- task:suvat-choice -->

A train moves at 12 m/s, accelerates uniformly to 20 m/s over 160 m, then travels at 20 m/s for 15 s. Determine the total time and distance. Explain why one nonzero acceleration cannot describe the whole journey.

<!-- /task:suvat-choice -->

<details markdown="1">
<summary>Hint</summary>

Find the first interval’s time from its velocity graph; carry its final velocity into the second stage.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$t_1=\frac{2\times160}{12+20}=10\,\mathrm{s},\qquad a_1=\frac{20-12}{10}=0.80\,\mathrm{m\,s^{-2}}$$

The second stage covers 300 m at zero acceleration. Total time is 25 s and distance 460 m. Using one nonzero acceleration throughout would predict a changing velocity during the stated constant-speed stage.

</details>

<h2 id="vertical-motion">Turning changes velocity, not the direction of gravity</h2>

Choose upwards as positive. For free flight near Earth’s surface, neglecting air resistance and taking constant g:

$$a=-g,\qquad v=u-gt,\qquad s=ut-\frac12gt^2$$

The velocity graph slopes down throughout both ascent and descent. The displacement graph is curved, with a horizontal tangent at the highest point. At that point v is zero, not a. On descent v and a are both negative, so speed increases.

An impact ends this free-flight interval. For a bouncing ball, velocity changes rapidly during contact; draw a separate short contact interval rather than extending the free-flight line through the bounce. Between bounces the gradient is still −g; the outgoing speed need not equal the incoming speed.

<h3 id="vertical-return">Find two times without inventing two motions</h3>

*Self-written task.*

<!-- task:vertical-return -->

A ball leaves a hand vertically upwards at 14.7 m/s. Take g = 9.8 m/s² and ignore air resistance. Find its maximum rise, the times when it is 9.8 m above the release point, and its velocity at each of those times. Find the distance travelled by the time it returns to the release height, before being caught.

<!-- /task:vertical-return -->

<details markdown="1">
<summary>Hint</summary>

Use the same upward-positive convention on both sides of the highest point.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$t_{\mathrm{top}}=\frac{14.7}{9.8}=1.50\,\mathrm{s},\qquad h=\frac{14.7^2}{2\times9.8}=11.025\,\mathrm{m}$$

For the stated height:

$$9.8=14.7t-4.9t^2,\qquad t^2-3t+2=0,\qquad t=1.0\,\mathrm{s}\ \text{or}\ 2.0\,\mathrm{s}$$

Velocities are +4.9 m/s and −4.9 m/s: the first is ascending, the second descending. The maximum rise rounds to 11.0 m; retaining unrounded values, the return takes 3.0 s and the distance is 22.05 m (22.1 m to 3 significant figures), while displacement is zero. Both positive roots refer to the same free flight; neither represents a bounce.

</details>

<h2 id="exam-graph">From the whole graph to an average</h2>

The following idealised graph is **adapted from OxfordAQA International AS Physics 9630, PH01 June 2024 Q04.1**. The original graph and paired mark scheme were checked. This redraw changes times, speeds and the starting instant; its answer is not the original paper’s answer. No original marks are assigned.

<img src="/assets/img/physics-as-kinematics.svg" alt="Adapted idealised velocity–time graph. Time is in milliseconds and velocity in metres per second. Straight segments join (0,0), (4,3), (10,3), (12,0). The object moves in the positive direction from 0 to 12 ms." width="760" height="430">

<h3 id="exam-average">Use the graph, not just its endpoints</h3>

*Adapted task; see source identity below.*

<!-- task:exam-average -->

Determine the average speed during the 12 ms motion shown in the adapted graph. Explain why averaging the initial and final speeds does not work here. Sketch the corresponding acceleration–time graph, giving the values and units on each open interval.

<!-- /task:exam-average -->

<details markdown="1">
<summary>Hint</summary>

Convert milliseconds to seconds for both area and gradient.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$d=\left(\frac12\times4\times3+6\times3+\frac12\times2\times3\right)10^{-3}=0.027\,\mathrm{m}$$

$$\text{average speed}=\frac{0.027}{0.012}=2.25\,\mathrm{m\,s^{-1}}$$

The graph stays non-negative, so area gives distance as well as displacement. The initial and final speeds are both zero but the object moves between them; there is no single constant acceleration. Accelerations are +750 m/s² over 0–4 ms, zero over 4–10 ms and −1500 m/s² over 10–12 ms. At the idealised corners the instantaneous acceleration is unspecified; real transitions would be rounded.

</details>

<h2 id="freefall-practical">RP1: determine g from a graph</h2>

Release a compact ball from rest without a push. An electronic release and impact sensor can start timing at release and stop it after a measured vertical fall s. Measure s between the ball’s initial position and the position of the same reference point at the stopping event; account for the ball’s size and sensor geometry. Use several safe heights, repeat times and record their spread. Keep release and sensing arrangements consistent.

For the no-drag, zero-initial-speed, synchronised timing model:

$$s=\frac12gt^2$$

Plot s vertically against t² horizontally. A straight-line gradient has units m/s² and equals half of g. Fit the data; an unexplained intercept is evidence to investigate, not a reason to force the line through zero.

**Constructed record:** t is the mean of repeat timings at each height. Values are idealised and are not evidence that a physical practical was performed.

<!-- record:freefall-record -->

| Mean t / s | t² / s² | s / m |
| --- | --- | --- |
| 0.200 | 0.0400 | 0.196 |
| 0.250 | 0.0625 | 0.306 |
| 0.300 | 0.0900 | 0.441 |
| 0.350 | 0.1225 | 0.600 |
| 0.400 | 0.1600 | 0.784 |

<!-- /record:freefall-record -->

<img src="/assets/img/physics-as-freefall.svg" alt="Constructed freefall graph with squared time in seconds squared horizontally and distance in metres vertically. Five supplied records are plotted with a straight model line; the gradient and value of g are left for the student to determine." width="760" height="430">

<h3 id="freefall-analysis">Choose the graph and diagnose a bias</h3>

*Self-written task.*

<!-- task:freefall-analysis -->

Use widely separated points on the fitted freefall line to estimate g, including units. A second apparatus starts its timer 0.020 s after release but stops it at impact. Predict the bias in g if s is divided by half the square of that recorded time. Would repeat readings alone remove the bias? Propose a check and a safety precaution.

<!-- /task:freefall-analysis -->

<details markdown="1">
<summary>Hint</summary>

A delayed start shortens the measured time without shortening the actual fall distance.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\text{gradient}=\frac{0.784-0.196}{0.1600-0.0400}=4.90\,\mathrm{m\,s^{-2}},\qquad g=2\times4.90=9.80\,\mathrm{m\,s^{-2}}$$

The recorded time is too short, so this calculation overestimates g. At a true fall time of 0.200 s and distance 0.196 m, the delayed timer reads 0.180 s and would give about 12.1 m/s². A constant time delay need not produce a simple constant intercept on the squared-time plot. Check synchronisation against an independent timing method or known electronic trigger, and inspect patterns over heights. Repeats alone preserve the delay. Secure apparatus and catch the ball in a tray clear of feet, avoiding excessive heights.

</details>

<h2 id="independent-practice">Select the method yourself</h2>

<h3 id="practice-sensor">Find the missing start</h3>

*Self-written task.*

<!-- task:practice-sensor -->

A trolley passes sensor A, then sensor B 18 m farther along the same straight track. It reaches B 3.0 s later at +9.0 m/s. Acceleration is constant between the sensors. Find its velocity at A and its acceleration. Explain what would fail if only the final velocity were known and constant acceleration had not been established.

<!-- /task:practice-sensor -->

<details markdown="1">
<summary>Hint</summary>

The displacement is the area between the two sensors’ times.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$18=\frac{u+9.0}{2}\times3.0,\qquad u=+3.0\,\mathrm{m\,s^{-1}},\qquad a=\frac{9.0-3.0}{3.0}=+2.0\,\mathrm{m\,s^{-2}}$$

The positive velocities show no reversal in this constant-acceleration interval. Without constant acceleration the trapezium rule need not give the exact area; many curved velocity histories could have the same final velocity and different initial velocities. An additional model or motion data would be needed.

</details>

<h2 id="diagnose-and-retry">Check signs and the interval before recalculating</h2>

| Error | Repair |
| --- | --- |
| Zero velocity means zero acceleration | Check the continuing interaction and graph gradient. |
| Negative acceleration always means slowing | Compare signs of velocity and acceleration. |
| End speeds always average to the mean | Establish a straight velocity graph first. |
| A velocity graph area always gives distance | Split at zero and distinguish signed areas. |
| The same equation covers a bounce | Separate free flight and contact. |

<h3 id="retry-turning">Retry with negative initial velocity</h3>

*Self-written task.*

<!-- task:retry-turning -->

Take east as positive. An object starts at the origin with velocity −6.0 m/s and constant acceleration +2.0 m/s² for 5.0 s. Find when it changes direction, its final displacement, distance travelled and final speed. Sketch a velocity–time graph to check all four answers.

<!-- /task:retry-turning -->

<details markdown="1">
<summary>Hint</summary>

The zero crossing divides two triangles with opposite signed areas.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$v=-6+2t,\qquad t_{\mathrm{turn}}=3.0\,\mathrm{s},\qquad s=-6\times5+\frac12\times2\times5^2=-5.0\,\mathrm{m}$$

The graph joins (0,−6) to (5,+4), crossing zero at 3 s. It travels 9 m west and then 4 m east, giving 13 m distance and −5.0 m displacement. Final velocity is +4.0 m/s and final speed 4.0 m/s. Positive acceleration first reduces the speed, then increases it after reversal.

</details>

<h2 id="curved-graphs">Curves, tangents and finite contact</h2>

A secant over an interval gives average velocity; a tangent at one instant gives instantaneous velocity. Narrow trapezia estimate curved areas, but sampled values alone do not uniquely define the joins.

![Displacement curve s=t² with given points and the tangent at t=2 s; the separate velocity record uses the same numerical samples but different units.](/assets/images/physics-as-curved-motion.svg){: width="800" height="380" }

<div class="lesson-check" markdown="1">
<!-- task:curved-graph-check -->
A curved displacement–time graph contains (0 s, 0 m), (1 s, 1 m), (2 s, 4 m), (3 s, 9 m). Its drawn tangent at 2 s passes through (1 s, 0 m) and (3 s, 8 m). Find average velocity over 0–3 s and instantaneous velocity at 2 s. Explain the different lines used. Separately, velocities at t = 0, 1, 2, 3 s are 0, 1, 4, 9 m/s, joined by a smooth curve. Estimate displacement using 1 s trapezia and explain the estimate's limitation.
<!-- /task:curved-graph-check -->
<details markdown="1"><summary>Hint</summary>
Use endpoint displacement difference for the average, and the tangent for the instant.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Average velocity = 9/3 = 3.0 m/s; tangent velocity = (8−0)/(3−1) = 4.0 m/s. The separate velocity record gives trapezia (0+1)/2 + (1+4)/2 + (4+9)/2 = 9.5 m. These samples do not fix the exact curved area; more samples or a justified model are needed.
</details>
</div>

<div class="lesson-check" markdown="1">
<!-- task:bounce-graph-check -->
A ball reaches a floor at −4.0 m/s and leaves at +3.0 m/s after 0.020 s of contact. Upwards is positive. After separation take g = 10 m/s² with negligible air resistance. Sketch velocity against time over contact and the next 0.30 s. Find average contact acceleration, distinguish subsequent acceleration, and mark the next highest point. Is a straight contact segment established by these data?
<!-- /task:bounce-graph-check -->
<details markdown="1"><summary>Hint</summary>
Separate contact from subsequent free flight.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Average contact acceleration = [3−(−4)]/0.020 = +350 m/s². After separation acceleration is −10 m/s², reaching v = 0 after 0.30 s at the highest point. Contact data fix endpoints only; any straight segment is schematic and does not prove constant contact acceleration.
</details>
</div>
<h2 id="raw-freefall">RP1: process the raw record first</h2>

For release from rest, s = ½gt². Plot s against t²: gradient = g/2. With uncertainty on both axes check whether candidate lines cross every allowed rectangle. A free intercept can reveal a fixed distance offset; repeat spread does not include every calibration error.

<div class="lesson-check" markdown="1">
<!-- task:raw-freefall-check -->
Constructed freefall raw records are:

| Distance / m, each ±0.001 m | Repeated times / s |
| --- | --- |
| 0.196 | 0.198, 0.200, 0.202 |
| 0.441 | 0.298, 0.300, 0.302 |
| 0.784 | 0.398, 0.400, 0.402 |

Choose graph axes, process the means, and estimate g. Adopt half the repeat range as the timing-spread contribution: calculate the first T² uncertainty and its single-height g uncertainty. Construct error bars, compare a free-intercept line with a forced-origin line, and explain why the single-height bound is not the uncertainty of the full fit. Name omitted calibration/timing effects.
<!-- /task:raw-freefall-check -->
<details markdown="1"><summary>Hint</summary>
Average first, then square. A squared quantity approximately doubles the fractional uncertainty.
</details>
<details markdown="1"><summary>Solution and repair</summary>
Means are 0.200, 0.300, 0.400 s; t² = 0.0400, 0.0900, 0.1600 s². The s-versus-t² slope is 4.90 m/s², giving g = 9.80 m/s² and zero central intercept. Half-range timing is ±0.002 s; first Δ(t²) ≈ 2(0.200)(0.002) = 0.0008 s². The first-height bound is Δg/g ≈ 0.001/0.196 + 2(0.002/0.200), giving Δg ≈ 0.246 m/s². This is not a full-fit uncertainty. Extreme corners of the endpoint rectangles give slopes about 4.787–5.017 m/s², g about 9.57–10.03 m/s²; both also cross the middle rectangle under the stated first-order t² bounds. Check every rectangle. Timing offsets, release triggers and distance reference definitions need independent checks.
</details>
</div>

<div class="lesson-check" markdown="1">
<!-- task:retry-freefall-bias -->
Retry: a distance scale overestimates every true fall distance by a fixed 0.020 m, while times are correct. Predict the effect on a free-intercept distance-versus-time-squared line, and explain the effect of using g = 2s/t² at one height or forcing the graph through zero. Suggest an independent check of the distance definition.
<!-- /task:retry-freefall-bias -->
<details markdown="1"><summary>Hint</summary>
Write recorded s = true s + 0.020.
</details>
<details markdown="1"><summary>Solution and repair</summary>
The free-intercept slope is unchanged and intercept is +0.020 m. A single-height g = 2s/t² is high; forcing the origin absorbs the offset into the slope, biasing g high here. Independently check the actual release/detection reference points using a separately calibrated length measure or revised landmarks. Repeating timing does not fix the distance.
</details>
</div>

<h2 id="sources-and-next">Scope and next step</h2>

Scope: OxfordAQA International AS Physics 9630, PH01 Section 3.2.3 and Required practical 1. The graph task references PH01 June 2024 Q04.1 and its paired mark scheme; its altered graph is explicitly adapted. All other tasks and freefall records are self-written or constructed. No official marks or physical-practical completion are claimed. Scope follows the [official specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf).

[Previous: Vectors and Moments](/alevel/as-physics/vectors-and-moments/) · [Back to AS Physics](/alevel/as-physics/) · [Next: Projectile Motion](/alevel/as-physics/projectile-motion/).

{% include exam_topic_practice.html %}
