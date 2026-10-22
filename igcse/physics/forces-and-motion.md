---
title: Forces and Motion
layout: subjects
mathjax: true
grade: igcse
subject: igcse-physics
permalink: /igcse/physics/forces-and-motion/
toc_headings: h2, h3
study_page: true
---

<h2 id="start-here">Moving forwards, accelerating backwards?</h2>

A motion graph describes what happens. A force model explains how interactions change that motion.

1. [Choose the object and draw its forces](#force-model).
2. Connect [resultant force](#newtons-laws) to acceleration, then [momentum](#momentum).
3. Use the models to explain [stopping](#stopping-distance) and [terminal velocity](#terminal-velocity).
4. Attempt [independent practice](#independent-practice), then [diagnose and retry](#diagnose-and-retry).

**Before you start:** use signed velocity, acceleration and velocity–time areas from [Motion and Motion Graphs](/igcse/physics/motion-and-graphs/). All numerical motion here is along a straight line unless stated otherwise. Take east as positive and use the stated value of g.

Tasks are self-written except the labelled specimen adaptation. Records and diagrams are constructed for teaching, not measured practical results.

<h3 id="first-judgement">Try first: what can a straight graph tell you?</h3>

*Self-written task.*

<!-- task:first-judgement -->

A trolley's idealised position–time graph is a straight rising line, with east chosen as positive. A student says: “It is moving east, so its resultant force must point east.” Is that conclusion justified? Use the motion description before choosing an equation.

<!-- /task:first-judgement -->

<details markdown="1">
<summary>Hint</summary>

Distinguish velocity from a change in velocity.

</details>

<details markdown="1">
<summary>Solution and check</summary>

A straight position–time graph has constant gradient and therefore constant velocity. Acceleration is zero, so the resultant force is zero in the constant-mass model. The trolley can still have several forces acting on it; they balance.

</details>

<h2 id="force-model">Choose one object before adding forces</h2>

A force represents an interaction. Name both the object receiving the force and the agent exerting it: the table pushes on the trolley; Earth pulls on the trolley. A **free-body diagram** includes forces acting on the chosen object, not its velocity and not the forces it exerts on other objects.

Weight is gravitational force, not mass:

$$W=mg$$

Mass is measured in kg, weight in N and gravitational field strength in N/kg. Tension acts along a taut string; normal contact force is perpendicular to the contact surface. Friction opposes relative sliding or its tendency, not necessarily the object's velocity relative to the ground.

<img src="/assets/img/physics-ig-force-model.svg" alt="Schematic of a 5 kg trolley on a horizontal surface: pull 40 N east, resistance 10 N west, normal contact 49 N upwards and weight 49 N downwards. The arrows are forces on the trolley; g is 9.8 N/kg." width="760" height="430">

For the illustrated trolley, vertical acceleration is zero and there is no vertical component of the pull. Thus the normal force equals its weight. This equality is a result of those conditions, not a universal rule.

**Worked horizontal model.** Take east as positive:

$$F_{\mathrm{resultant}}=40-10=+30\,\mathrm{N},\qquad a=\frac{30}{5}=+6.0\,\mathrm{m\,s^{-2}}$$

Use the resultant, not the 40 N pull alone. The arrows indicate interactions, not a drawing of the trolley's future path.

<h3 id="two-directions">Two forces that are not opposite</h3>

*Self-written task.*

<!-- task:two-directions -->

Two horizontal forces act on a small ring: 3.0 N east and 4.0 N north. Use a scale drawing of 1 cm to 1 N to find their resultant. State its magnitude and direction. Explain why adding 3.0 and 4.0 as ordinary numbers is not appropriate.

<!-- /task:two-directions -->

<details markdown="1">
<summary>Hint</summary>

Join arrows head to tail; the resultant runs from the first tail to the last head.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The drawing gives a 5.0 cm diagonal, representing 5.0 N, about 53° north of east. The sides form a right triangle, so the check is $R^2=3^2+4^2=25$. A 7 N sum would require forces in the same direction. Use a protractor for the direction; trigonometric calculation is not needed for this scale-drawing task.

</details>

<h2 id="newtons-laws">Connect the force model to the motion</h2>

For a constant-mass object in an inertial frame:

- **First law:** zero resultant force preserves velocity, including the special case of rest.
- **Second law:** resultant force determines acceleration, not velocity.
- **Third law:** if A exerts a force on B, B exerts an equal and opposite force on A. The two forces act on different objects, simultaneously, and arise from the same interaction.

$$\sum F=ma,\qquad a=\frac{v-u}{\Delta t}$$

An eastward-moving trolley can have a westward acceleration and slow down. It does not immediately move west. A weight and a normal force can balance on one object, but are not each other's third-law partners: the partner of Earth's pull on the trolley is the trolley's gravitational pull on Earth.

If contact or the direction of motion changes, reconsider the force model. Do not extend a constant sliding-friction equation beyond the instant an object stops without checking what forces then act.

<h3 id="remove-the-pull">Remove the driving interaction</h3>

*Self-written task.*

<!-- task:remove-the-pull -->

A 5.0 kg trolley travels east at 8.0 m/s. The pull is removed. While it is sliding east, a constant 10 N resistance acts west. Find its acceleration and velocity after 3.0 s. A student extends the same equation to 6.0 s and predicts a westward velocity. Explain what must be reconsidered.

<!-- /task:remove-the-pull -->

<details markdown="1">
<summary>Hint</summary>

Choose a sign for force, then check whether the assumed direction of sliding survives the calculation.

</details>

<details markdown="1">
<summary>Solution and check</summary>

With east positive,

$$a=\frac{-10}{5.0}=-2.0\,\mathrm{m\,s^{-2}},\qquad v=8.0-2.0\times3.0=+2.0\,\mathrm{m\,s^{-1}}.$$

The trolley is still moving east, more slowly. The assumed force brings it to rest after 4.0 s. Beyond that, a resistance defined as opposing eastward sliding cannot simply be kept westward to make the trolley reverse. With no new driving interaction on this horizontal model it can remain at rest.

</details>

<h2 id="momentum">Choose the system before conserving momentum</h2>

Momentum is a vector:

$$p=mv,\qquad F_{\mathrm{average}}=\frac{\Delta p}{\Delta t}$$

For a chosen system, total momentum is conserved when the external impulse is zero or negligible over the interaction. Internal forces exchange momentum between objects, but do not change the system's total. A single colliding trolley usually does not conserve its own momentum.

**Worked collision.** A 2.0 kg trolley travelling east at 3.0 m/s sticks to a stationary 1.0 kg trolley. Assume negligible external horizontal impulse:

$$2.0\times3.0+1.0\times0=(2.0+1.0)v,\qquad v=+2.0\,\mathrm{m\,s^{-1}}.$$

For the first trolley its momentum changes from 6.0 to 4.0 kg m/s. During a 0.10 s collision,

$$F_{\mathrm{average}}=\frac{4.0-6.0}{0.10}=-20\,\mathrm{N}.$$

The negative sign means west. The other trolley gains the same momentum that the first loses. Sticking does not conserve kinetic energy: some energy becomes internal energy, sound or deformation.

For the same momentum change, increasing the stopping time reduces the average force. This is why cushioning, crumple zones and airbags help; they do not make momentum disappear. An average force does not specify the peak force.

<h2 id="stopping-distance">Separate reacting from braking</h2>

Stopping distance is thinking distance plus braking distance. During the reaction interval, the simplified model keeps speed constant; during braking, a resultant backward force reduces speed. Tiredness and distraction can lengthen reaction time; wet or icy roads, worn tyres and poor brakes can reduce available braking force.

The constructed record below represents a car travelling east. Assume constant speed until braking starts, then uniform deceleration.

<!-- record:braking-record -->

| Time / s | 0 | 0.50 | 3.50 |
| --- | --- | --- | --- |
| Velocity east / (m/s) | 12 | 12 | 0 |

<!-- /record:braking-record -->

<img src="/assets/img/physics-ig-braking.svg" alt="Constructed velocity-time record: 12 m/s at 0 s and at 0.50 s, followed by a straight descending segment to zero at 3.50 s. The reaction and braking stages are labelled; no areas or distances are supplied." width="760" height="430">

**Worked reaction stage:** the area is a rectangle, so thinking distance is $12\times0.50=6.0\,\mathrm{m}$. The braking stage has a different duration and shape. Braking transfers kinetic energy to thermal stores; it does not destroy energy.

For the same mass and constant resultant braking force, deceleration has fixed magnitude. Doubling initial speed doubles the braking time, so both the height and base of the triangular velocity–time area double. Braking distance therefore increases by a factor of four in this model; thinking distance only doubles if reaction time is unchanged.

<h3 id="read-the-stop">Complete the braking argument</h3>

*Self-written task.*

<!-- task:read-the-stop -->

Use the constructed braking record. The car has mass 1000 kg.

1. Determine braking distance and total stopping distance.
2. Determine the resultant force during braking, including its direction.
3. The initial speed is doubled while mass, reaction time and resultant braking force stay unchanged. Predict the new thinking distance, braking distance and total stopping distance. Explain why doubling the original total is incorrect.

<!-- /task:read-the-stop -->

<details markdown="1">
<summary>Hint</summary>

Use the 3.0 s braking interval, not 3.5 s. Keep the two distance contributions separate.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The braking area is a triangle:

$$d_{\mathrm{braking}}=\frac12\times3.0\times12=18\,\mathrm{m},\qquad d_{\mathrm{stop}}=6.0+18=24\,\mathrm{m}.$$

$$a=\frac{0-12}{3.0}=-4.0\,\mathrm{m\,s^{-2}},\qquad F=1000\times(-4.0)=-4000\,\mathrm{N}.$$

At 24 m/s, thinking distance is 12 m. Braking takes 6.0 s and its triangular area is 72 m, giving 84 m in total. The contributions scale differently; the total is neither simply doubled nor exactly quadrupled.

</details>

<h2 id="terminal-velocity">Zero acceleration while still falling</h2>

For a falling person, take downward as positive. With approximately constant weight and negligible buoyancy,

$$F_{\mathrm{resultant}}=mg-D.$$

Initially drag D is small. As downward speed rises, drag increases and acceleration decreases. When drag equals weight, the resultant is zero and the person continues downwards at terminal velocity. A velocity–time graph becomes horizontal at a non-zero velocity.

Opening a parachute increases drag sharply at the current speed. If drag exceeds weight, acceleration is upwards even while velocity is downwards. Speed falls until a new, lower terminal speed is reached. Streamlining generally reduces drag at a given speed and can increase terminal speed under otherwise comparable conditions.

<h2 id="independent-practice">Select the system and justify your method</h2>

Keep solutions closed. Draw any needed forces or motion graphs before substituting numbers. State whether your conclusion concerns one object or a system.

<h3 id="practice-release">A release with no initial motion</h3>

*Self-written task.*

<!-- task:practice-release -->

Two trolleys of masses 1.5 kg and 0.50 kg start at rest on a horizontal low-friction track. A compressed spring between them is released. The 1.5 kg trolley moves west at 0.40 m/s. Ignore external horizontal impulse. Determine the velocity of the other trolley, and explain why equal and opposite interaction forces do not imply equal speeds.

<!-- /task:practice-release -->

<details markdown="1">
<summary>Hint</summary>

Account for signs and masses. Apply conservation to both trolleys together.

</details>

<details markdown="1">
<summary>Solution and check</summary>

With east positive,

$$0=1.5\times(-0.40)+0.50v,\qquad v=+1.2\,\mathrm{m\,s^{-1}}.$$

The lighter trolley moves east. Equal and opposite impulses cause equal and opposite momentum changes, not equal velocities when masses differ. Energy stored in the spring supplies kinetic energy while total horizontal momentum remains zero.

</details>

<h3 id="practice-parachute">Explain the whole change in forces</h3>

*Adapted from OxfordAQA International GCSE Physics 9203/1, Paper 1 Specimen, Q01.3–01.6; paired mark scheme checked. Extra post-opening data and task added.*

<!-- task:practice-parachute -->

A falling parachutist has weight 784 N where g = 9.8 N/kg. Before the parachute opens, the downward speed becomes constant at 50 m/s. Ignore buoyancy.

1. Determine the mass and the drag at this constant speed.
2. Explain how the resultant force and acceleration changed as the parachutist sped up towards 50 m/s.
3. Immediately after opening, drag is 1200 N. Determine acceleration, stating direction, and explain whether the parachutist must already be moving upwards.

<!-- /task:practice-parachute -->

<details markdown="1">
<summary>Hint</summary>

Distinguish direction of acceleration from direction of velocity. Use weight to find mass.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The mass is $784/9.8=80\,\mathrm{kg}$ and drag at constant speed is 784 N upwards. As speed increased, drag increased; weight stayed approximately constant, so downward resultant force and acceleration decreased to zero.

With downward positive immediately after opening,

$$a=\frac{784-1200}{80}=-5.2\,\mathrm{m\,s^{-2}}.$$

The acceleration is upwards; the velocity can still be downwards, so the person slows down. A suitable explanation is: “Upward acceleration changes the downward velocity towards zero; it does not instantly reverse the motion.”

</details>

<h3 id="practice-impact">Same momentum change, different protection</h3>

*Self-written task.*

<!-- task:practice-impact -->

A 0.20 kg ball moving east at 10 m/s is stopped without rebounding. One pad stops it in 0.010 s; another takes 0.050 s. Determine the average horizontal force on the ball in each case. Explain what this comparison does and does not establish about the largest force during impact.

<!-- /task:practice-impact -->

<details markdown="1">
<summary>Hint</summary>

Use final minus initial momentum, then distinguish an average from a peak.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The momentum change is $\Delta p=0-0.20\times10=-2.0\,\mathrm{kg\,m\,s^{-1}}$.

$$F_1=-200\,\mathrm{N},\qquad F_2=-40\,\mathrm{N}.$$

Both forces are westward. The longer stopping time gives a smaller magnitude of average force for the same momentum change. Without force–time records, the exact peak forces and their ratio are not established.

</details>

<h2 id="diagnose-and-retry">Repair the reason for the error</h2>

| Claim | Check again |
| --- | --- |
| Moving east requires an eastward resultant | Compare [velocity with acceleration](#newtons-laws). |
| All opposite arrows are a third-law pair | Name the [object and interaction](#force-model). |
| Each trolley separately conserves momentum | Choose the [whole system](#momentum). |
| Doubling speed doubles stopping distance | Separate [reaction and braking](#stopping-distance). |
| Terminal velocity means no forces act | Rebuild the [balanced force model](#terminal-velocity). |

<h3 id="retry-forces">Retry: identify which bodies receive the forces</h3>

*Self-written task.*

<!-- task:retry-forces -->

A book rests on a horizontal table. Earth pulls the book down and the table pushes it up. A student calls these a Newton's third-law pair. Correct the explanation, naming the partner of each force. Then explain why the book does not accelerate.

<!-- /task:retry-forces -->

<details markdown="1">
<summary>Hint</summary>

For each interaction, swap “agent on object” to “object on agent”.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Earth's pull on the book pairs with the book's gravitational pull on Earth. The table's upward contact force pairs with the book's downward contact force on the table. The book's two forces balance, giving zero resultant and zero acceleration; the balancing forces on the book belong to different interactions.

</details>

<h2 id="sources-and-next">Scope and next step</h2>

This lesson develops the force/weight foundations of OxfordAQA International GCSE Physics 9203 Section 3.1.1 and Sections 3.1.3–3.1.6. Continue with spring deformation in the next lesson. Centre of mass and moments have a later lesson in this route; this page is not the entire forces unit.

Scope follows the [official specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-gcse-physics-specification.pdf). The specimen adaptation is identified beside its task; all other tasks and numerical records are self-written. No official marks are assigned to the adaptations or self-written tasks.

[Previous: Motion and Motion Graphs](/igcse/physics/motion-and-graphs/) · [Back to IGCSE Physics](/igcse/physics/) · [Existing moments notes](/igcse/physics/#%EF%B8%8F-17-centre-of-mass--18-moments).

[Next: Springs and Hooke’s Law](/igcse/physics/springs-and-hookes-law/)
