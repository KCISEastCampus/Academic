---
title: Newton’s Laws — Choose the Object Before the Equation
layout: subjects
mathjax: true
grade: as
subject: as-physics
permalink: /alevel/as-physics/newtons-laws/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">What changes the motion?</h2>

A lift can move downwards while the floor pushes a passenger upwards harder than gravity pulls them down. The apparent contradiction disappears when we distinguish **the direction of motion** from **the direction in which velocity changes**.

By the end, you should be able to draw forces on a named object, use all three Newton’s laws, and choose between a single object and a connected system. Start with [force diagrams](#force-model), follow the [lift example](#lift-example), then try the [independent tasks](#independent-practice).

Before you start: you need signed velocity and acceleration from [straight-line motion](/alevel/as-physics/straight-line-motion/#graphs-and-signs), and force components from [vectors and moments](/alevel/as-physics/vectors-and-moments/). We use a laboratory frame treated as inertial, constant masses and translational motion; rotation is outside this page.

<div class="lesson-check" markdown="1">
**Start with familiar motion — self-written task.**

<!-- task:motion-start -->
A trolley moves to the right. Its velocity changes from +6.0 m/s to +2.0 m/s in 2.0 s. Find its average acceleration and state its direction. Is the trolley moving left at the end?
<!-- /task:motion-start -->

<details markdown="1"><summary>Hint</summary>
Use the change in signed velocity, not the final velocity alone.
</details>
<details markdown="1"><summary>Solution and check</summary>
The acceleration is $(2.0-6.0)/2.0=-2.0\,\mathrm{m\,s^{-2}}$, to the left. The final velocity remains positive, so the trolley still moves right. If these signs are difficult, revisit the linked motion lesson before continuing.
</details>
</div>

<h2 id="force-model">A force diagram belongs to one object</h2>

Name the object first. Then ask, for each interaction, “What other object pushes or pulls this one?” Draw only forces **on** the chosen object. Weight is the Earth’s gravitational force on it; a normal contact force is a surface’s perpendicular push. Friction and drag oppose relative sliding or relative motion through a fluid in the simple cases here. A force does not have to point along the velocity.

Choose axes and a positive direction. Add force components along each axis; the resultant force is their vector sum. Do not add a separate “force of motion”, and do not draw $ma$ as an extra interaction. It describes the effect of the resultant.

<h2 id="three-laws">Three laws, three different questions</h2>

**First law — what if the resultant is zero?** An object remains at rest or moves with constant velocity in an inertial frame. Constant velocity includes constant direction. A moving object does not require a forward resultant to keep moving; a driving force may simply balance resistance.

**Second law — how does the resultant change motion?** For constant mass:

$$\sum F_x=ma_x,\qquad \sum F_y=ma_y$$

The component signs come from the chosen axes. Zero resultant means zero acceleration, not necessarily zero velocity. If a force changes, the acceleration may change too; constant-acceleration motion equations then need a separate justification.

**Third law — what force acts on the other object?** If A exerts a force on B, B simultaneously exerts an equal and opposite force of the same interaction type on A. These forces act on different objects, so they do not cancel on B’s force diagram. Different masses can have different accelerations under these equal force magnitudes.

A book at rest has an upward table force and a downward weight that balance. They act on the same book and are not a third-law pair. The partner of the table’s force on the book is the book’s force on the table. The partner of the Earth’s force on the book is the book’s gravitational force on the Earth.

<h2 id="lift-example">A passenger moving down and slowing</h2>

<div class="worked-example" markdown="1">
**Worked example — self-written.**

<!-- task:worked-lift -->
A 60 kg passenger stands on the horizontal floor of a lift. The lift moves down at 4.0 m/s and slows uniformly to rest in 2.0 s. The passenger stays in contact with the floor. Find the floor force on the passenger. Use $g=10\,\mathrm{m\,s^{-2}}$; neglect other forces on the passenger.
<!-- /task:worked-lift -->

Choose the passenger as the object and upwards as positive. The velocity goes from −4.0 to 0 m/s, so:

$$a=\frac{0-(-4.0)}{2.0}=+2.0\,\mathrm{m\,s^{-2}}$$

The passenger’s forces are the floor’s normal force $N$ upwards and weight $mg$ downwards. The lift cable acts on the lift, not directly on the passenger.

![Passenger force diagram: floor force N upwards and weight mg downwards; N is drawn longer. The passenger alone is the chosen object.](/assets/img/physics-as-passenger-forces.svg){: width="480" height="320" }

Because the acceleration is upwards, the upward force must exceed the weight. Apply the second law to the passenger:

$$N-mg=ma$$

$$N=60(10+2.0)=720\,\mathrm{N}$$

The weight is 600 N and the resultant is 120 N upwards. The force unit checks: $\mathrm{kg\,m\,s^{-2}}=\mathrm{N}$. If the lift continued down at constant speed, $a=0$ and $N=600\,\mathrm{N}$. Motion downwards alone would not tell us which force is larger. The 720 N downward force exerted by the passenger on the floor is the third-law partner of $N$.
</div>

<h2 id="connected-system">Choose the whole system, then look inside it</h2>

Suppose two trolleys A and B are joined by a taut, light horizontal string on a level track. A horizontal pull acts on A. If the string does not stretch, their accelerations along the track are equal. “Light” lets us neglect string mass and use equal tensions at its ends; a slack string would not enforce the same constraint.

For the combined A+B system, the two string forces are internal and cancel in the horizontal sum. With negligible horizontal resistance:

$$P=(m_A+m_B)a$$

For B alone, the string force is external to that chosen object. With no other horizontal force on B, $T=m_Ba$. These are two descriptions of the same motion. They answer different questions: the whole system gives its acceleration; the single trolley gives the connection force. An external resistance must still be included on whichever diagram contains the affected trolley.

<h2 id="independent-practice">Use the model yourself</h2>

Keep hints closed on the first attempt. Draw the object boundary and forces before calculating. All tasks and checking criteria on this page are self-written, with no official marks assigned.

<div class="lesson-check" markdown="1">
<h3 id="steady-check">A steady journey</h3>
<!-- task:steady-check -->
A 2.0 kg trolley travels right at a constant velocity of 3.0 m/s along a level track. A horizontal driving force and a 6.0 N horizontal resistance are the only horizontal forces. Find the driving force. Assess the statement “constant velocity means no forces act”. The driving force is then removed while the resistance remains 6.0 N: find the acceleration while the trolley still moves right.
<!-- /task:steady-check -->
<details markdown="1"><summary>Hint</summary>
Separate the constant-velocity interval from the interval after the driving force is removed.
</details>
<details markdown="1"><summary>Solution and check</summary>
During the steady journey, the horizontal resultant is zero, so the driving force is 6.0 N rightwards. Forces act but balance; zero resultant does not mean absent forces or zero velocity. After removal, right positive gives $a=-6.0/2.0=-3.0\,\mathrm{m\,s^{-2}}$. The trolley slows while still moving right. If you inferred no resistance from steady motion, revisit [the first law](#three-laws) and retry [the package](#retry-forces), distinguishing the stated velocity from its change.
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="force-transfer">A changing reading</h3>
<!-- task:force-transfer -->
A 50 kg passenger is moving upwards in a lift. A floor sensor measures an upward normal force of 400 N on the passenger. Use g = 10 m/s². Draw the forces on the passenger, calculate the acceleration, and explain what happens to the speed while the passenger is still moving upwards. Can this motion continue with the same velocity indefinitely?
<!-- /task:force-transfer -->
<details markdown="1"><summary>Hint</summary>
Choose an axis. The sensor measures one force, not the resultant.
</details>
<details markdown="1"><summary>Solution and check</summary>
Upwards positive gives $400-500=50a$, hence $a=-2.0\,\mathrm{m\,s^{-2}}$. Draw 400 N upwards and 500 N downwards. The passenger slows while moving upwards. If these forces persist, the velocity changes; it cannot remain the same indefinitely. Do not infer a time to stop without an initial speed. If you used $400=50a$, return to [the force diagram](#force-model) and include the weight.
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="interaction-check">Two students pushing</h3>
<!-- task:interaction-check -->
Two students, A (40 kg) and B (60 kg), stand on low-friction wheeled platforms and push one another horizontally. During one instant A exerts a 120 N force to the right on B. Neglect other horizontal forces and platform masses. State the force on A, find both accelerations with right positive, and explain in English why the two students do not each have zero resultant force.
<!-- /task:interaction-check -->
<details markdown="1"><summary>Hint</summary>
Put a separate boundary around each student. Name the receiver of each force.
</details>
<details markdown="1"><summary>Solution and check</summary>
B exerts 120 N to the left on A. Thus $a_A=-120/40=-3.0\,\mathrm{m\,s^{-2}}$ and $a_B=120/60=+2.0\,\mathrm{m\,s^{-2}}$. An English explanation is: “The interaction forces act on different students. Each student has a non-zero horizontal resultant, so each accelerates.” Equal forces do not imply equal accelerations. If you cancelled the pair on one student, return to [the third law](#three-laws), then try the retry below.
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="connected-check">A measured acceleration</h3>
<!-- task:connected-check -->
Trolleys A (2.0 kg) and B (3.0 kg) are joined by a taut, light, inextensible horizontal string. A pull P acts to the right on A. B experiences a 1.0 N resistance to the left; A has negligible horizontal resistance. Both accelerate right at 0.80 m/s². Find P and the string tension. Explain which forces disappear from the combined-system equation and why.
<!-- /task:connected-check -->
<details markdown="1"><summary>Hint</summary>
Use one combined diagram and one diagram for B. Keep the resistance in both relevant equations.
</details>
<details markdown="1"><summary>Solution and check</summary>
For A+B, $P-1.0=(2.0+3.0)(0.80)$, so $P=5.0\,\mathrm{N}$. For B, $T-1.0=3.0(0.80)$, so $T=3.4\,\mathrm{N}$. Check A: $5.0-3.4=2.0(0.80)$. The string forces cancel only in the combined sum because they are internal and opposite; the resistance is external and remains. If you used $T=P$, check the non-zero resultant required for A, then try [the new connected system](#retry-connected).
</details>
</div>

<h2 id="diagnose-and-retry">Repair the reasoning, then close the answer</h2>

If force followed velocity in your answer, revisit the [lift example](#lift-example). If every opposite pair cancelled, revisit [which object receives each force](#three-laws). If a connection force equalled the pull, revisit [the two system choices](#connected-system). Then close the worked answers and do this new situation.

<div class="lesson-check" markdown="1">
<h3 id="retry-connected">The other trolley is pulled</h3>
<!-- task:retry-connected -->
Trolley B (3.0 kg) is to the left of trolley A (1.0 kg), joined by a taut, light, inextensible horizontal string. B is pulled left with 9.0 N. A experiences a 1.0 N resistance to the right; B has negligible horizontal resistance. Both move left. Find their acceleration and the tension, naming the boundary used for each equation. Check your result using B alone.
<!-- /task:retry-connected -->
<details markdown="1"><summary>Hint</summary>
You may choose left as positive. The resistance now acts on A, which has no applied pull.
</details>
<details markdown="1"><summary>Solution and check</summary>
Left positive: for A+B, $9.0-1.0=(3.0+1.0)a$, so $a=+2.0\,\mathrm{m\,s^{-2}}$. For A alone, $T-1.0=1.0(2.0)$, giving $T=3.0\,\mathrm{N}$. B alone checks $9.0-3.0=3.0(2.0)$. Internal string forces disappear only from the combined sum. If the result is still unclear, draw separate labelled arrows on A and B before revisiting the answer.
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="retry-forces">A package in a descending lift</h3>
<!-- task:retry-forces -->
A 4.0 kg package rests on a lift floor. The lift is moving downwards and accelerating downwards at 1.5 m/s². Use g = 10 m/s². Find the normal force on the package, name its third-law partner, and explain whether the package is speeding up or slowing down. Explain why the weight and normal force are not a third-law pair. Later the lift descends at constant non-zero velocity: find the normal force then and explain why neither force has disappeared.
<!-- /task:retry-forces -->
<details markdown="1"><summary>Hint</summary>
Keep the chosen object fixed when writing the second-law equation; change the receiver when naming the third-law partner.
</details>
<details markdown="1"><summary>Solution and check</summary>
Upwards positive: $N-40=4.0(-1.5)$, so $N=34\,\mathrm{N}$, still positive and compatible with floor contact. Its partner is the package’s 34 N downward force on the floor. Velocity and acceleration are both downwards, so speed increases. Weight and normal force act on the same package and come from different interactions; they are not a third-law pair. A negative computed normal would require reconsidering contact, since a floor cannot pull the package down in this model. During the later constant-velocity descent, $a=0$ and $N=40\,\mathrm{N}$: gravity and floor contact still act but balance.
</details>
</div>

<h2 id="sources-and-next">Continue with systems that collide</h2>

Scope: OxfordAQA International AS Physics 9630, PH01 §3.2.5. Scope checked against the [qualification page](https://www.oxfordaqa.com/qualification/international-as-and-a-level-physics-9630/) and its linked [specification, Version 4.4](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf). A second official PDF is labelled Version 5.1; the relevant content agrees. These are self-written teaching tasks and a schematic diagram, not reproduced exam questions or measured records.

[Previous: Projectile Motion](/alevel/as-physics/projectile-motion/) · [Next: Momentum and Impulse](/alevel/as-physics/momentum-and-impulse/) · [AS Physics](/alevel/as-physics/)

On the next page, the force may vary too quickly to use a single constant acceleration. You will use its effect over time, then revisit this page’s force choices in the [later mixed review](/alevel/as-physics/momentum-and-impulse/#later-review).

{% include exam_topic_practice.html %}
