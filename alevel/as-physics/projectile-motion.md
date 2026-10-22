---
title: Projectile Motion
layout: subjects
mathjax: true
grade: as
subject: as-physics
permalink: /alevel/as-physics/projectile-motion/
toc_headings: h2, h3
study_page: true
---

<h2 id="start-here">Two directions, one clock</h2>

Projectile motion combines two one-dimensional descriptions of the same flight. Its horizontal and vertical parts share one time; they do not generally share one acceleration.

1. Establish [the model and components](#projectile-model).
2. Connect [trajectory, records and velocity graphs](#representations).
3. Solve [the football adaptation](#exam-football), choosing the appropriate time.
4. Test [resistive-force limits](#resistive-forces), then complete [independent practice](#independent-practice).

**Before you start:** use [Vectors and Moments](/alevel/as-physics/vectors-and-moments/) for components and [Straight-line Motion](/alevel/as-physics/straight-line-motion/) for signed velocities and constant-acceleration equations. Use the g stated in each task. All plotted records are constructed; no physical experiment is implied. The football sequence is labelled adapted; other tasks are self-written.

<h3 id="first-independence">Try first: does horizontal speed delay the fall?</h3>

*Self-written task.*

<!-- task:first-independence -->

Two small identical balls leave the same height simultaneously. One is released from rest; the other is projected horizontally. Ignore air resistance and assume a horizontal landing surface with no intervening obstacles. Which lands first? Explain using the vertical initial conditions, rather than the length of each path.

<!-- /task:first-independence -->

<details markdown="1">
<summary>Hint</summary>

Compare their initial vertical velocities and vertical accelerations.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Both start with zero vertical velocity and share the same downward acceleration and fall distance, so they land together. The projected ball travels a longer curved path, but its horizontal motion does not change the no-drag vertical motion. A vertical push, different height or significant drag would require reconsidering the comparison.

</details>

<h2 id="projectile-model">Choose the system and axes before using equations</h2>

Model the projectile as a particle after it has left the hand or launcher. Use fixed ground axes: x horizontal to the right, y vertically upwards from the launch position. In a uniform gravitational field, with air resistance neglected, only weight acts during free flight. There is no continuing forward “launch force”.

For initial speed u at angle θ above the horizontal:

$$u_x=u\cos\theta,\qquad u_y=u\sin\theta$$

$$a_x=0,\qquad a_y=-g$$

Apply the straight-line equations separately, using the same elapsed time t:

$$x=u_xt,\qquad y=u_yt-\frac12gt^2$$

$$v_x=u_x,\qquad v_y=u_y-gt$$

The speed is the magnitude of the velocity vector:

$$v=\sqrt{v_x^2+v_y^2}$$

At the highest point only the vertical component is zero. For an oblique launch with nonzero horizontal speed, the ball still moves horizontally and accelerates downwards. The trajectory tangent points along velocity; acceleration is not generally along that tangent.

**Worked horizontal launch.** A particle leaves a horizontal edge at 6.0 m/s; the landing plane is 4.905 m below it. Use g = 9.81 m/s² and neglect air resistance. Horizontal launch means the initial vertical velocity is zero, not that gravity is zero:

$$-4.905=-\frac12\times9.81t^2,\qquad t=1.00\,\mathrm{s},\qquad x=6.0\times1.00=6.0\,\mathrm{m}$$

Reject the negative time root because the flight begins at release. At landing the components are +6.0 m/s and −9.81 m/s. The downward component follows from the fall; the horizontal component is unchanged. A larger horizontal launch speed at the same height would increase x, not this fall time.

<h3 id="horizontal-transfer">Change what is measured</h3>

*Self-written task.*

<!-- task:horizontal-transfer -->

A particle is projected horizontally and lands 16.0 m away on a plane 19.62 m below the launch position. Use g = 9.81 m/s² and neglect air resistance. Find the flight time, initial speed and vertical velocity just before landing. Sketch the velocity and acceleration arrows at that instant.

<!-- /task:horizontal-transfer -->

<details markdown="1">
<summary>Hint</summary>

The vertical fall fixes the time before the horizontal distance fixes the launch speed.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$t=\sqrt{\frac{2\times19.62}{9.81}}=2.00\,\mathrm{s},\qquad u_x=\frac{16.0}{2.00}=8.00\,\mathrm{m\,s^{-1}}$$

The vertical velocity is −19.62 m/s (−19.6 m/s to 3 significant figures). Velocity points down and right along the trajectory tangent; acceleration points vertically down, with no horizontal component. The initial speed equals its horizontal component because the initial vertical component is zero.

</details>

<h2 id="representations">Read one flight as a path and as component graphs</h2>

**Constructed idealised record:** a particle has initial components 8.0 m/s rightwards and 6.0 m/s upwards. For this task use g = 10 m/s², neglect air resistance, and stop at its return to the horizontal launch plane. Time labels identify simultaneous x and y coordinates, not two separate clocks.

<!-- record:projectile-record -->

| t / s | x / m | y / m |
| --- | --- | --- |
| 0.0 | 0.0 | 0.00 |
| 0.3 | 2.4 | 1.35 |
| 0.6 | 4.8 | 1.80 |
| 0.9 | 7.2 | 1.35 |
| 1.2 | 9.6 | 0.00 |

<!-- /record:projectile-record -->

<img src="/assets/img/physics-as-projectile-path.svg" alt="Constructed no-drag trajectory for initial components 8 m/s horizontally and 6 m/s upwards with g 10 m/s squared. Markers at 0, 0.3, 0.6, 0.9 and 1.2 seconds match the supplied x and y record. The horizontal launch plane is y zero; arrows for the requested velocity graphs are not supplied." width="760" height="430">

<h3 id="component-graphs">Build the velocity graphs from the model</h3>

*Self-written task.*

<!-- task:component-graphs -->

Using the constructed record, sketch v_x–time and v_y–time graphs for 0 to 1.2 s. Determine the velocity vector and speed at 0.6 s. Explain why equally spaced horizontal markers do not imply constant speed along the curved path. Describe the acceleration–time graphs.

<!-- /task:component-graphs -->

<details markdown="1">
<summary>Hint</summary>

Differentiate the two coordinate descriptions, or apply the velocity equations component by component.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The horizontal graph is constant at +8.0 m/s; the vertical graph is a straight line from +6.0 to −6.0 m/s, crossing zero at 0.6 s. At that instant velocity is horizontal at +8.0 m/s and speed is 8.0 m/s; the acceleration is still downwards.

<img src="/assets/img/physics-as-projectile-components.svg" alt="Solution graphs for the constructed flight: horizontal velocity stays at positive 8 m/s; vertical velocity decreases linearly from positive 6 to negative 6 m/s over 1.2 s and is zero at 0.6 s. Solid labels distinguish the two components without relying on colour." width="760" height="430">

Equal horizontal steps show constant horizontal velocity only. The vertical component changes, so total speed changes: it falls towards the apex and rises afterwards. The acceleration graphs are horizontal lines at zero horizontally and −10 m/s² vertically. Velocity–time areas give +9.6 m horizontally and zero net vertical displacement.

</details>

<h2 id="exam-football">Choose the event, not just a quadratic root</h2>

**Adapted from OxfordAQA International AS Physics 9630, PH01 June 2024 Q08.1–08.6; original figure and paired mark scheme checked.** The original football context is treated here as a point particle launched from y = 0. The crossbar is a horizontal target at y = 2.56 m, reached on descent. Tasks combine and rephrase the original parts; no official marks are assigned. Use initial speed 15 m/s, angle 38° above horizontal and g = 9.81 m/s², neglecting air resistance unless explicitly reconsidered.

<h3 id="exam-apex">Show how the maximum follows</h3>

*Adapted task; source identified in this section.*

<!-- task:exam-apex -->

For the adapted football model, determine the initial horizontal and vertical velocity components. Show that the maximum height gained is approximately 4.3 m and the time to reach it approximately 0.94 s. State the velocity and acceleration directions at that point.

<!-- /task:exam-apex -->

<details markdown="1">
<summary>Hint</summary>

At the apex set the vertical velocity to zero, not the whole velocity vector.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$u_x=15\cos38^\circ=11.820\ldots\,\mathrm{m\,s^{-1}},\qquad u_y=15\sin38^\circ=9.2349\ldots\,\mathrm{m\,s^{-1}}$$

$$0=u_y^2-2gh,\qquad h=\frac{u_y^2}{2g}=4.3467\ldots\,\mathrm{m}$$

$$0=u_y-gt_{\mathrm{top}},\qquad t_{\mathrm{top}}=\frac{u_y}{g}=0.9414\ldots\,\mathrm{s}$$

These establish the approximate statements rather than merely repeating them. Velocity remains horizontally rightwards and acceleration vertically downwards. The checked scheme illustrates 4.31 m and 0.937 s after using a rounded 9.2 m/s vertical component; retaining the original trigonometric value explains the small numerical difference.

</details>

<h3 id="exam-target">Why are both roots positive?</h3>

*Adapted task; source identified in this section.*

<!-- task:exam-target -->

In the same adapted model, find both times when the particle is at y = 2.56 m. Identify the time at which it reaches the crossbar on descent and calculate the horizontal distance to the crossbar. Use vertical velocity to justify the root choice. Explain why the same-height range formula cannot be substituted directly.

<!-- /task:exam-target -->

<details markdown="1">
<summary>Hint</summary>

A height below the apex can be passed once upwards and once downwards.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$2.56=u_yt-\frac12gt^2,\qquad t=\frac{u_y\pm\sqrt{u_y^2-2g(2.56)}}{g}$$

The two times are about 0.338 s and 1.545 s. Their vertical velocities are about +5.92 and −5.92 m/s, so the later time is the descending crossing required by the stated event.

$$d=u_xt_{\mathrm{descending}}=18.26\ldots\,\mathrm{m}\approx18\,\mathrm{m}$$

The other time is not an algebra error: it is a different crossing of the same height. The target is above the launch level, so setting net vertical displacement to zero would solve the wrong event. The checked scheme’s rounded working gives about 1.54 s and 18 m.

</details>

<h2 id="resistive-forces">Know which model changes when the air matters</h2>

**Drag** acts opposite the object’s velocity relative to the fluid. In still air a rising projectile experiences drag backwards and downwards; on descent drag has an upward component as well as a backwards component while it moves forwards. Drag generally increases with relative speed. Horizontal velocity is then no longer constant, and vertical acceleration is not simply a constant −g.

For the same launch in the ordinary still-air, drag-only comparison, the maximum height is lower and the trajectory is no longer the symmetric no-drag parabola. A target reached in the no-drag model may be missed. Do not keep its old flight time while merely subtracting a horizontal speed: drag also changes the vertical motion.

**Lift** is perpendicular to the relative flow; its direction depends on the flow and body orientation, so it is not necessarily vertically upwards. If appreciable lift acts, the weight-only projectile model also fails. We do not require a lift or drag formula here.

**Friction** between contacting surfaces opposes their relative slipping or tendency to slip. It may act forwards on a driven vehicle, while air drag acts backwards; distinguish the bodies and interactions. The static/dynamic friction distinction is not introduced here as an additional assessment requirement.

For a falling object with no lift, drag can grow until it balances weight: acceleration is then zero at **terminal speed**, while velocity remains nonzero. At a vehicle’s steady maximum speed on a level road, driving force balances air drag and other resistance. With the same available driving force and other resistance unchanged, streamlining lowers drag at a given speed and permits a higher limiting speed. Real driving force may itself vary with speed, so “maximum speed” is a balance of interactions, not proof that all forces disappear.

<h3 id="force-model-check">Explain three limits of “acceleration is −g”</h3>

*Self-written task.*

<!-- task:force-model-check -->

Explain (a) why the no-drag football trajectory cannot simply be reused after appreciable air resistance is introduced, (b) how an object can fall at constant nonzero terminal speed, and (c) why a streamlined vehicle may have a higher steady maximum speed when the available driving force is unchanged. State an assumption for each comparison.

<!-- /task:force-model-check -->

<details markdown="1">
<summary>Hint</summary>

Identify which forces have changed or have become balanced.

</details>

<details markdown="1">
<summary>Solution and check</summary>

(a) In still air, drag has horizontal and vertical components, so it changes both the flight time and horizontal travel; with ordinary drag and no lift, the maximum height is lower. (b) For vertical descent without lift, upward drag balances weight, giving zero resultant force and zero acceleration while the existing velocity is preserved. (c) On a level road, with other resistance unchanged, reduced drag at the old speed leaves a forward resultant for the same drive; speed can rise until resistance again balances drive. These claims do not require drag to be zero at a terminal or limiting speed.

</details>

<h2 id="independent-practice">Solve a new event without a method label</h2>

<h3 id="practice-ledge">The landing point is below the launch level</h3>

*Self-written task.*

<!-- task:practice-ledge -->

A particle leaves a ledge 5.0 m above level ground with velocity components 8.0 m/s horizontally and 6.0 m/s upwards. Use g = 10 m/s² and neglect air resistance. Determine the time to hit the ground, horizontal distance travelled and vertical velocity just before impact. Sketch the velocity direction. Explain why taking twice the time to the apex gives the wrong landing time.

<!-- /task:practice-ledge -->

<details markdown="1">
<summary>Hint</summary>

With the launch point as origin, the landing event has vertical displacement −5.0 m.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$-5.0=6.0t-5.0t^2,\qquad t=\frac{6+\sqrt{136}}{10}=1.766\ldots\,\mathrm{s}$$

The other root is negative and precedes launch. The horizontal distance is 14.13… m and vertical velocity −11.66… m/s, approximately 14 m and −12 m/s to two significant figures. The velocity points down and right. Twice the time to the apex is 1.2 s, the return to the launch height; the ground is lower, so the particle continues falling after that event.

</details>

<h2 id="same-height-range">A useful result with a specific landing condition</h2>

Only when the landing plane is at the launch height, with the same no-drag model and an upward launch, can the nonzero root of the vertical equation be used as:

$$T=\frac{2u\sin\theta}{g},\qquad R=(u\cos\theta)T=\frac{u^2\sin2\theta}{g}$$

This connects the two component equations; it does not override a different specified target height. Under these assumptions 45° gives the largest range for a fixed launch speed, because the sine factor cannot exceed one. Different launch/landing heights, lift or air resistance can change that conclusion.

<h2 id="diagnose-and-retry">Check direction, time and the target plane</h2>

| Error | Repair |
| --- | --- |
| Gravity slows the horizontal motion in the no-drag model | Resolve acceleration onto the chosen axes. |
| The whole velocity is zero at the apex | Set only the vertical component to zero. |
| Both positive time roots describe the same event | Use ascent/descent and the target position. |
| Twice the ascent time always gives landing time | Check the landing height. |
| Drag changes only horizontal travel | Reconsider the complete force and motion model. |

<h3 id="retry-two-angles">Same range, different flight</h3>

*Self-written task.*

<!-- task:retry-two-angles -->

Two particles are launched from the same level ground with the same speed 20 m/s, one at 30° and one at 60° above horizontal. Use g = 10 m/s², neglect air resistance and assume each lands back on the same level. Compare their ranges, flight times and maximum heights. Explain why equal range does not mean identical velocity throughout the flight.

<!-- /task:retry-two-angles -->

<details markdown="1">
<summary>Hint</summary>

The two launches trade horizontal velocity for vertical velocity.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$R_{30}=R_{60}=\frac{20^2\sin60^\circ}{10}=34.64\ldots\,\mathrm{m}$$

Flight times are 2.00 s and 3.464… s; maximum heights are 5.00 m and 15.0 m. The 60° launch has less horizontal speed but more time in the air. The 30° launch has more horizontal speed and less flight time, giving the same horizontal distance. Their initial velocity vectors, vertical velocities and trajectories differ. The result relies on the equal-height, no-drag conditions stated in the task.

</details>

<h2 id="sources-and-next">Scope and next step</h2>

Scope: OxfordAQA International AS Physics 9630, PH01 Section 3.2.4: independent components in a uniform gravitational field, with qualitative friction, lift, drag, terminal speed and limiting vehicle speed. The football sequence adapts PH01 June 2024 Q08.1–08.6 with the paired mark scheme checked. The force-model task extends the conceptual ideas using self-written contexts. Other tasks and records are self-written; none are assigned invented official marks. Scope follows the [official specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf).

[Previous: Straight-line Motion](/alevel/as-physics/straight-line-motion/) · [Back to AS Physics](/alevel/as-physics/) · [Existing dynamics and momentum notes](/alevel/as-physics/#24-newtons-laws--momentum). Dynamics, energy and materials still need subsequent learning pages; four lessons are not the complete AS course.
