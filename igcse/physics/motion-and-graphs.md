---
title: Motion and Motion Graphs
layout: subjects
mathjax: true
grade: igcse
subject: igcse-physics
permalink: /igcse/physics/motion-and-graphs/
toc_headings: h2, h3
study_page: true
---

<h2 id="start-here">One journey, two different averages</h2>

**How can you travel a long way and finish almost where you started?** Learn to connect a journey, its position records and its velocity graph.

- **Learn:** begin with [position and direction](#position-and-direction), then [read the records](#position-records).
- **Investigate:** use the [velocity graph](#velocity-and-acceleration) to distinguish slowing down from reversing.
- **Check independently:** attempt [practice](#independent-practice) with solutions closed.

**Before you start:** use signed numbers, coordinates, straight-line gradients and rectangle/triangle areas. All motion is along one straight line. Choose east as positive unless stated otherwise.

All tasks are self-written. Tables and graphs are constructed teaching records, not measurements from a completed practical.

<h3 id="first-judgement">Try first: what changed?</h3>

*Self-written task.*

<!-- task:first-judgement -->
A student walks 12 m east, then 5 m west along the same straight path. Has the distance travelled got smaller during the second part? Is the final change in position equal to the total distance travelled? Explain without using a speed formula.
<!-- /task:first-judgement -->

<details markdown="1">
<summary>Hint</summary>

Track the length of the whole path separately from the starting and finishing positions.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The total path continues to grow: $D=12+5=17\,\mathrm{m}$. The final position change is $s=12-5=+7\,\mathrm{m}$, or 7 m east. Walking west reduces the eastward position, not the distance already travelled.

</details>

<h2 id="position-and-direction">Define the quantities before calculating</h2>

Choose a fixed origin and a positive direction. Position $x$ tells us where the object is relative to the origin. Displacement $s$ is the signed change in position; distance $D$ is the total path length and is never negative.

$$s=x_{\mathrm{final}}-x_{\mathrm{initial}}$$

$$\text{average velocity}=\frac{s}{\Delta t},\qquad \text{average speed}=\frac{D}{\Delta t}$$

The same total elapsed time includes any stops. Velocity includes direction; speed is its magnitude. Write units such as $\mathrm{m\,s^{-1}}$, and interpret a minus sign using the chosen positive direction.

**Read the vertical axis carefully.** A cumulative-distance graph cannot fall. A position graph can fall when an object moves towards decreasing coordinates. A graph of distance *from a fixed point* is different again: that distance can decrease. In the next graph the axis is signed position, not cumulative distance.

On a position–time graph, gradient gives velocity. Its magnitude gives speed. A horizontal segment means position is unchanged. On a curved graph, a tangent gives the velocity at that instant; an end-to-end gradient gives an average over the chosen interval.

<h2 id="position-records">Connect position records to a velocity description</h2>

A trolley is represented by the following idealised record. Assume constant velocity between successive points.

<!-- task:position-record -->

| Time $t$ / s | 0 | 2 | 5 | 9 |
| --- | --- | --- | --- | --- |
| Position $x$ / m | 0 | 6 | 6 | −2 |

<!-- /task:position-record -->

<img src="/assets/img/physics-ig-position.svg" alt="Constructed position-time graph joining (0 s, 0 m), (2 s, 6 m), (5 s, 6 m) and (9 s, minus 2 m) with straight segments." width="760" height="430">

**Worked first segment.** Use the *changes* in both coordinates:

$$v=\frac{6-0}{2-0}=+3\,\mathrm{m\,s^{-1}}$$

The positive sign means east. Using a coordinate height alone would confuse position with velocity. For a later segment, dividing final position by final time would average over the wrong interval.

<h3 id="complete-the-motion">Complete the remaining journey</h3>

*Self-written task.*

<!-- task:complete-the-motion -->
For the position record above:

1. Find the velocity in each of the remaining two intervals and draw the complete velocity–time graph.
2. Find the total distance and displacement over 9 s.
3. Calculate the average speed and average velocity over the complete record. Explain why their magnitudes differ.
<!-- /task:complete-the-motion -->

<details markdown="1">
<summary>Hint</summary>

Use the start and end of each interval. Add path lengths for distance; use only the initial and final positions for displacement.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The remaining velocities are

$$v_{2\text{–}5}=\frac{6-6}{5-2}=0,\qquad v_{5\text{–}9}=\frac{-2-6}{9-5}=-2\,\mathrm{m\,s^{-1}}.$$

Draw horizontal segments at $+3$, $0$ and $-2\,\mathrm{m\,s^{-1}}$ over the three intervals. The instantaneous changes at the joins idealise short transitions.

$$D=6+0+8=14\,\mathrm{m},\qquad s=-2\,\mathrm{m}$$

$$\text{average speed}=\frac{14}{9}=1.56\,\mathrm{m\,s^{-1}},\qquad \text{average velocity}=\frac{-2}{9}=-0.222\,\mathrm{m\,s^{-1}}$$

The return journey adds distance but cancels some displacement. A stop adds time to both denominators. Check that the velocity graph gives zero during the unchanged-position interval.

</details>

<h2 id="velocity-and-acceleration">A falling velocity graph does not always mean slowing down</h2>

Acceleration is the rate of change of velocity:

$$a=\frac{\Delta v}{\Delta t}$$

On a velocity–time graph, gradient gives acceleration and signed area gives displacement. Add the magnitudes of areas on both sides of the time axis for distance. This follows because each narrow time interval contributes velocity multiplied by duration.

<img src="/assets/img/physics-ig-velocity.svg" alt="Constructed velocity-time graph: a straight line from 4 metres per second at 0 seconds, through zero at 4 seconds, to minus 4 metres per second at 8 seconds." width="760" height="430">

**Worked interpretation, first 4 s.** Velocity is positive but decreases to zero, so speed decreases. The acceleration is

$$a=\frac{0-4}{4-0}=-1\,\mathrm{m\,s^{-2}}.$$

The first triangular area represents displacement:

$$s_{0\text{–}4}=\frac12\times4\times4=+8\,\mathrm{m}.$$

The graph is a record of velocity against time, not the trolley's shape or a hill. A horizontal velocity segment would mean *constant velocity*, and would mean rest only if it lay at zero.

<h3 id="crossing-zero">Explain what happens after zero</h3>

*Self-written task.*

<!-- task:crossing-zero -->
Use the velocity graph above.

1. Describe the direction and change in speed between 4 s and 8 s. Has the acceleration changed sign?
2. Find displacement and distance for the whole 8 s.
3. A student says: “Negative acceleration always means slowing down.” Use the graph to correct this claim.
<!-- /task:crossing-zero -->

<details markdown="1">
<summary>Hint</summary>

Compare velocity with acceleration, not just with zero. Treat the two triangles separately before adding.

</details>

<details markdown="1">
<summary>Solution and check</summary>

After 4 s the velocity is negative and its magnitude grows, so the object moves west and speeds up. Acceleration remains $-1\,\mathrm{m\,s^{-2}}$.

$$s=8-8=0\,\mathrm{m},\qquad D=8+8=16\,\mathrm{m}$$

It finishes at its starting position after travelling 16 m. Speed decreases when velocity and acceleration have opposite signs, and increases when their signs agree. Zero velocity at one instant does not imply zero acceleration or a lasting stop.

</details>

<h2 id="independent-practice">Choose the representation yourself</h2>

Keep solutions closed. Each task changes what is given or asks you to justify a claim; choose which quantities and graphs you need.

<h3 id="practice-return">A journey with a stop</h3>

*Self-written task.*

<!-- task:practice-return -->
A cyclist travels 60 m east in 10 s, then 40 m west in 10 s, and waits for 5 s. Motion during each travelling stage is uniform.

Find the average speed and average velocity for all 25 s. Sketch a position–time graph starting at the origin, and explain how its final coordinate differs from total distance.
<!-- /task:practice-return -->

<details markdown="1">
<summary>Hint</summary>

Include waiting time. Sketch the two travelling stages with their correct gradient signs before the final horizontal stage.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The path length is 100 m and displacement is 20 m east.

$$\text{average speed}=\frac{100}{25}=4.0\,\mathrm{m\,s^{-1}},\qquad \text{average velocity}=\frac{20}{25}=+0.80\,\mathrm{m\,s^{-1}}$$

Join $(0,0)$, $(10,60)$, $(20,20)$ and $(25,20)$ on the position graph, with time in seconds and position in metres. Final position is 20 m, not 100 m. The final 5 s changes neither path nor position but lowers both whole-journey averages.

</details>

<h3 id="practice-design">Construct a graph from a description</h3>

*Self-written task.*

<!-- task:practice-design -->
A trolley starts from rest, accelerates uniformly at 2.0 m s⁻² for 3.0 s, travels at constant velocity for 2.0 s, then slows uniformly to rest over 3.0 s without reversing.

Draw a labelled velocity–time graph and determine the total distance. Is the trolley stationary during the interval of zero acceleration? Explain.
<!-- /task:practice-design -->

<details markdown="1">
<summary>Hint</summary>

Find the joining velocity first. The total distance comes from three areas, and the graph never crosses below zero.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The joining velocity is $v=2.0\times3.0=6.0\,\mathrm{m\,s^{-1}}$. Join $(0,0)$, $(3,6)$, $(5,6)$ and $(8,0)$.

$$D=\frac12(3)(6)+(2)(6)+\frac12(3)(6)=30\,\mathrm{m}$$

During the flat segment the velocity is $6.0\,\mathrm{m\,s^{-1}}$, so it is moving with zero acceleration. The full distance is positive, and the two end triangles have the same area even though their acceleration signs differ.

</details>

<h3 id="practice-evidence">What do three readings actually establish?</h3>

*Self-written task.*

<!-- task:practice-evidence -->
A tracker records position 0 m at 0 s, 8 m at 4 s and 0 m at 8 s. Nothing is known about motion between readings. A student concludes that the object's speed never exceeded 2 m s⁻¹.

Is this conclusion justified? State what can be calculated and describe a different possible motion that gives the same readings.
<!-- /task:practice-evidence -->

<details markdown="1">
<summary>Hint</summary>

An average over an interval does not reveal all instantaneous values within it. Do not assume straight segments unless that assumption is supplied.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The interval average velocities are $+2\,\mathrm{m\,s^{-1}}$ and $-2\,\mathrm{m\,s^{-1}}$. They do not set an upper bound on speed.

The object could spend part of each interval waiting and move faster during the rest, with brief acceleration and deceleration. It could also make extra reversals. The overall displacement is zero, but total distance and instantaneous speeds need more information. The smallest possible path length is 16 m; even this lower bound does not establish a maximum speed.

</details>

<h2 id="diagnose-and-retry">Diagnose the error, then retry</h2>

| If your answer says… | Check this distinction |
| --- | --- |
| The height of a position graph is speed | Use the [gradient](#position-records), not the vertical coordinate. |
| A flat velocity graph means rest | Check whether the [velocity is zero](#velocity-and-acceleration). |
| Returning to the start gives zero distance | Separate [signed displacement and path length](#position-and-direction). |
| A negative acceleration always slows motion | Compare the [signs of velocity and acceleration](#crossing-zero). |

<h3 id="retry-average">Retry without the earlier working</h3>

*Self-written task.*

<!-- task:retry-average -->
A walker goes 8 m east and 8 m west in a total of 8 s. Give both whole-journey averages, then write one English sentence explaining why one is zero and the other is not.
<!-- /task:retry-average -->

<details markdown="1">
<summary>Hint</summary>

Calculate the path and final position separately before dividing by the same elapsed time.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Average speed is $2.0\,\mathrm{m\,s^{-1}}$; average velocity is $0\,\mathrm{m\,s^{-1}}$. A suitable explanation is: “The walker returns to the starting position, so displacement is zero, but the distance travelled is 16 m.”

</details>

<h2 id="sources-and-next">Scope and next step</h2>

This lesson uses OxfordAQA International GCSE Physics 9203, Sections 3.1.2 and the acceleration/graph parts of 3.1.3. It is not a full forces unit. Signed area is distinguished from distance when a graph includes negative velocity.

Use the [official specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-gcse-physics-specification.pdf) for scope. All examples, graph records and feedback here are self-written; no official marks are assigned.

[Next: Forces and Motion](/igcse/physics/forces-and-motion/) · [Back to IGCSE Physics](/igcse/physics/) · [Review the existing forces notes](/igcse/physics/#-13-resultant-forces)

