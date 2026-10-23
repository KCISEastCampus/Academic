---
title: "Vectors, interception and closest approach"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/relative-motion/
toc_headings: "#start, #model, #velocity-triangle, #relative-position, #demonstration, #closest-approach, #practice, #retry, #later-review, #next-step, #sources"
study_page: true
reading_layout: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/)

Do intersecting routes imply a meeting? A position diagram tells us where objects can go; a common clock tells us whether they reach the same place together. We will use that distinction to choose a heading, test an interception and find a nearest point within an observation period.

Read [vectors and velocity addition](#model), [interception](#demonstration), then [closest approach](#closest-approach). Cover the examples before the [independent tasks](#practice). All examples and exercises are **self-written**, with no official marks.

## Before you start {#start}

You need coordinates, Pythagoras, constant-speed motion, basic trigonometry and completing the square. Vector notation is introduced here. If quadratics need repair, revisit [AS algebra](/alevel/as-mathematics/algebra/#l02); for a direction angle, sketch the right triangle before using inverse tangent.

<section class="lesson-check" markdown="1">

### Prerequisite check

**Entry check (self-written):** Locate $(3,4)$ and find its distance from the origin. A particle starts at $x=2$ m and moves with velocity $-3$ m s⁻¹. Write its position after $t$ seconds and find its position at $t=2$.

<details markdown="1"><summary>Hint</summary>

Distance is nonnegative. A negative velocity changes position in the negative coordinate direction; include the starting position.

</details>

<details markdown="1"><summary>Solution and repair</summary>

The point is in quadrant I and its distance is $\sqrt{3^2+4^2}=5$. The position is $x=2-3t$, so $x(2)=-4$ m. The negative sign gives location, not a negative distance. If you omitted the initial position, draw the start and the six-metre displacement separately. Cover this check and reconstruct both answers before continuing.

</details>

</section>

## 1. Describe one motion, then combine velocities {#model}

Treat each object as a particle moving at constant velocity in a fixed ground reference frame. Choose a common origin and clock; say which directions are positive and how long the model applies. Distances here are in metres and times in seconds unless stated otherwise. For navigation examples, take east as positive horizontal and north as positive vertical.

The unit vectors $\mathbf i,\mathbf j$ point one unit along the positive axes. The same position can be written with components or a column vector:

$$\mathbf r=x\mathbf i+y\mathbf j=\begin{pmatrix}x\\y\end{pmatrix},
\qquad \lvert\mathbf r\rvert=\sqrt{x^2+y^2}.$$

Position is measured from the origin. Displacement is the change between positions; subtract the starting point from the finishing point:

$$\overrightarrow{AB}=\mathbf r_B-\mathbf r_A.$$

Constant velocity means equal vector displacements in equal times, so

$$\mathbf r(t)=\mathbf r(0)+\mathbf vt.$$

Both components use the same elapsed time. Velocity includes direction; speed is its nonnegative magnitude. A velocity with one negative component can still have positive speed.

### Read a velocity triangle {#velocity-triangle}

A swimmer's motion relative to the water and the water's motion relative to the ground contribute to the ground displacement over the same time. Dividing that displacement sum by time gives

$$\begin{aligned}
\mathbf v_{\rm ground}
&=\mathbf v_{\rm relative\ medium}\\
&\quad+\mathbf v_{\rm medium}.
\end{aligned}$$

Draw these vectors head-to-tail. The resultant runs from the first tail to the last head, not between the two heads. A velocity diagram has velocity units; it is not a map of the river.

<section class="worked-example" markdown="1">

### From a triangle to a ground speed

**Demonstration (self-written):** A current has velocity $4\mathbf i$ m s⁻¹. A swimmer moves at $3\mathbf j$ m s⁻¹ relative to the water. Find the swimmer's ground velocity, speed and direction.

Draw the current four units east, then the swimming vector three units north from its head. The resultant goes northeast. The two contributions are perpendicular, so use Pythagoras, not addition of their lengths:

$$\begin{aligned}
\mathbf v_{\rm ground}&=4\mathbf i+3\mathbf j\ \mathrm{m\,s^{-1}},\\
\lvert\mathbf v_{\rm ground}\rvert&=\sqrt{4^2+3^2}=5\ \mathrm{m\,s^{-1}}.
\end{aligned}$$

The angle is $\tan^{-1}(3/4)\approx36.9^\circ$ north of east. Both components are positive, so the direction is consistent. In one second the ground displacement is four metres east and three north: this checks the interpretation.

</section>

![Top: arrowed velocity triangle, current four units east followed by swimming three north, with resultant five northeast. Bottom: relative position travels left from (6,8) at t=0 through the perpendicular foot (0,8) at t=3 to (-4,8) at t=5, on equally scaled metre axes.](/alevel/as-further-mathematics/diagrams/relative.svg){: width="560" height="690" }

The top panel represents the velocity addition just used. The bottom panel is a position diagram for [closest approach](#closest-approach); its arrows show time progressing along the allowed relative path.

### Keep the observer and subtraction order fixed {#relative-position}

To describe B relative to A, imagine translating the origin with A while keeping the axes parallel. Subtract A's position from B's position at the **same time**:

$$\begin{aligned}
\mathbf r_{BA}(t)&=\mathbf r_B(t)-\mathbf r_A(t)\\
&=\mathbf r_{BA}(0)+\mathbf v_{BA}t,\\
\mathbf v_{BA}&=\mathbf v_B-\mathbf v_A.
\end{aligned}$$

A collision means the relative position is the zero vector, so both components must vanish at one admissible time. Reversing the subtraction reverses both relative vectors and preserves the distance; reversing just one of them changes the model. Intersecting route lines alone do not test time.

<section class="lesson-check" markdown="1">

### Build and check the two components

**Scaffold (self-written):** A starts at $(0,0)$ m with velocity $(4,3)$ m s⁻¹; B starts at $(12,0)$ m with velocity $(1,3)$ m s⁻¹. Write relative position B−A and test collision.

<details markdown="1"><summary>Hint</summary>

Write a position for each particle first. Subtract the two initial positions and the two velocities in the same order. Check any proposed time in both original positions.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
\mathbf r_A(t)&=(4t,3t),\\
\mathbf r_B(t)&=(12+t,3t),\\
\mathbf r_{BA}(t)&=(12-3t,0).
\end{aligned}$$

The vertical separation is zero throughout. The horizontal separation becomes zero at $t=4\ \mathrm s$, giving $\mathbf r_A=\mathbf r_B=(16,12)\ \mathrm m$. This is a future collision if the stated velocities continue until then. If you used the sum of the velocities, return to [the observer definition](#relative-position).

</details>

</section>

## 2. Choose a heading that actually intercepts {#demonstration}

For a prescribed speed and unknown constant heading, the velocity components are unknown but their squared magnitudes must add to the prescribed speed squared. First require equal positions; then apply that speed condition and retain only admissible times.

<section class="worked-example" markdown="1">

### A successful interception, and its speed boundary

**Demonstration (self-written):** At $t=0$ s, target B is at $(6,0)$ m with velocity $(0,1)$ m s⁻¹. A leaves the origin at a constant unknown direction and speed 2 m s⁻¹. Find a heading to intercept B for $t>0$.

Take positive horizontal to the right and positive vertical upwards. B keeps moving vertically, so aiming at its initial position will miss. At a meeting after time $t$, A must have reached B's new position:

$$\begin{aligned}
\mathbf r_B(t)&=(6,t),\\
\mathbf r_A(t)&=\mathbf v_A t=(6,t),\\
\mathbf v_A&=(6/t,1).
\end{aligned}$$

Division by time is valid because $t>0$. The vertical component of A's velocity must match B's; the horizontal component must close the initial six-metre gap. Apply A's speed:

$$\begin{aligned}
36/t^2+1&=4,\\
t^2&=12,\\
t&=2\sqrt3\ \mathrm s,\\
\mathbf v_A&=(\sqrt3,1)\ \mathrm{m\,s^{-1}}.
\end{aligned}$$

The negative algebraic time is outside the model. The heading is $\pi/6$ above positive horizontal because both components are positive and their ratio is $1/\sqrt3$. Check the speed and meeting positions:

$$\begin{aligned}
\lvert\mathbf v_A\rvert&=\sqrt{3+1}=2\ \mathrm{m\,s^{-1}},\\
\mathbf r_A(2\sqrt3)&=(6,2\sqrt3)\ \mathrm m,\\
\mathbf r_B(2\sqrt3)&=(6,2\sqrt3)\ \mathrm m.
\end{aligned}$$

For the **same initial arrangement**, suppose A's speed is instead a nonnegative number $s$. The meeting condition would require

$$\frac{36}{t^2}=s^2-1.$$

For every finite $t>0$, the left side is positive. Thus interception here is possible exactly when $s>1$; then $t=6/\sqrt{s^2-1}$ gives a positive time and a valid velocity. At $s=1$, matching B's vertical velocity leaves no horizontal component; below that speed even the required vertical component is unavailable. This criterion belongs to this geometry, not to every pursuit problem.

</section>

## 3. Find the nearest point you can actually reach {#closest-approach}

The relative point follows a straight path with constant velocity. Its distance from the relative origin is the separation of the two objects. On the whole line the nearest point is the perpendicular foot: by Pythagoras, moving away from that foot adds a nonnegative squared length. On an observed segment or future ray, the foot may be unreachable; then the nearest admissible endpoint is required.

<section class="worked-example" markdown="1">

### Connect the perpendicular to a quadratic

**Demonstration (self-written):** Two particles have relative displacement $(6-2t,8)$ m for $0\le t\le5$ s. Find when they are closest and their separation then. Explain geometrically, and check algebraically.

In the bottom diagram, the relative point starts at $(6,8)$ and moves left at two metres per second. The height stays eight metres. The perpendicular from the origin meets the line at $(0,8)$, reached at $t=3$ s, within the allowed interval. Its length is therefore eight metres.

Minimising distance squared gives the same minimum because distance is nonnegative:

$$\begin{aligned}
d^2&=(6-2t)^2+64\\
&=4(t-3)^2+64,\\
d_{\min}&=8\ \mathrm m\quad\text{at }t=3\ \mathrm s.
\end{aligned}$$

The endpoint distances are $d(0)=10$ m and $d(5)=\sqrt{80}$ m, both larger. If observation stops at two seconds, the relative point only reaches $(2,8)$; the foot is beyond that segment. The nearest point is now its final endpoint, at $t=2$ s, with $d=\sqrt{68}=2\sqrt{17}$ m. The infinite line has not changed; the allowed motion has.

</section>

For any constant relative velocity, write the relative position as $(a+ut,b+vt)$. Here $a,b$ are initial displacement components and $u,v$ are relative velocity components. Expanding gives

$$\begin{aligned}
d^2(t)&=(a+ut)^2+(b+vt)^2\\
&=(u^2+v^2)t^2+2(au+bv)t\\
&\quad+a^2+b^2.
\end{aligned}$$

If $u^2+v^2>0$, completing the square places the whole-line minimum at

$$\begin{aligned}
t_*&=-\frac{au+bv}{u^2+v^2},\\
d^2(t)&=(u^2+v^2)(t-t_*)^2+d^2(t_*).
\end{aligned}$$

This proves the minimum over the whole time domain, not just at a few trial times. On a closed interval, use $t_*$ if it lies inside; if it lies before the interval, use the start; if it lies after, use the end. For $t\ge0$, a negative $t_*$ gives the minimum at zero. Geometrically these are the same perpendicular-foot and endpoint cases. If $u=v=0$, the separation stays $\sqrt{a^2+b^2}$; every allowed time is a minimum, and division by $u^2+v^2$ is invalid.

## Work independently {#practice}

Choose your origin, axes and clock explicitly, and label units on each diagram. The headings do not identify a method. Write your reasoning before opening either disclosure; record any help used.

<section class="lesson-check" markdown="1">

### Question 1 {#practice-1}

**Independent task (self-written):** A river flows east at 4 m s⁻¹. A boat has speed 5 m s⁻¹ relative to the water and must travel due north relative to the ground. Draw and label a head-to-tail velocity triangle. Find its velocity relative to the water, its ground speed and its heading west of north. Explain why pointing the boat due north would fail.

<details markdown="1"><summary>Hint</summary>

A due-north ground velocity has zero eastward component. The speed relative to the water constrains the length of that vector, not the ground vector.

</details>

<details markdown="1"><summary>Solution and check</summary>

Choose east and north as positive axes. The triangle must cancel the current horizontally:

$$\begin{aligned}
\mathbf v_{\rm water}&=(-4,3)\ \mathrm{m\,s^{-1}},\\
\mathbf v_{\rm ground}&=(-4,3)+(4,0)\\
&=(0,3)\ \mathrm{m\,s^{-1}}.
\end{aligned}$$

Draw the current to the east, then the water-relative vector back west and north; the resultant is vertical upwards. The positive vertical component selects north rather than south. Its water-relative speed is $\sqrt{(-4)^2+3^2}=5$ m s⁻¹; the ground speed is 3 m s⁻¹. The heading is $\tan^{-1}(4/3)\approx53.1^\circ$ west of north. Pointing due north gives ground velocity $(4,5)$ m s⁻¹, so it drifts east. If your ground speed was five, return to [which vector has the prescribed length](#velocity-triangle), then attempt [retry 1](#retry-1).

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 2 {#practice-2}

**Independent task (self-written):** At time zero, B is 12 m east of A and moves north at 3 m s⁻¹. A starts then with constant speed 5 m s⁻¹ and an unknown fixed heading. Set up a position model and find a heading and time for interception. Would any fixed heading succeed if A's speed were only 3 m s⁻¹? Justify your answer for all positive times.

<details markdown="1"><summary>Hint</summary>

Express the required velocity in terms of a possible meeting time. Impose its magnitude only after matching the positions.

</details>

<details markdown="1"><summary>Solution and check</summary>

Put A's initial position at the origin, positive east and north. For $t>0$,

$$\begin{aligned}
\mathbf r_B(t)&=(12,3t),\\
\mathbf v_A t&=(12,3t),\\
\mathbf v_A&=(12/t,3),\\
144/t^2+9&=25.
\end{aligned}$$

Thus $t=3$ s, $\mathbf v_A=(4,3)$ m s⁻¹, heading $\tan^{-1}(3/4)\approx36.9^\circ$ north of east. Both positions are $(12,9)$ m and the speed is five. With speed three the condition becomes $144/t^2=0$, impossible for any finite positive time. Matching the vertical speed leaves no component to close the eastward gap. If you used a negative time or aimed at the old position, rebuild [the meeting equation](#demonstration), then attempt [retry 2](#retry-2).

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 3 {#practice-3}

**Independent task (self-written):** A starts at $(0,0)$ m with velocity $(2,0)$ m s⁻¹; B starts at $(6,8)$ m with velocity $(0,-2)$ m s⁻¹. Do they collide for $t\ge0$? Find their closest distance for $t\ge0$, and then for $0\le t\le2$ s. Explain the changed answer geometrically or algebraically.

Also draw the relative path with its direction of motion, initial point, perpendicular foot and the endpoint for the shorter interval. Use your diagram to explain why intersecting route lines do not imply collision.

<details markdown="1"><summary>Hint</summary>

A collision requires both relative components to vanish at one time. Distance minimisation must obey the given time interval. The relative diagram is a map of separation vectors, not either object's ground route.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
\mathbf r_{BA}&=(6-2t,8-2t),\\
6-2t=0&\Rightarrow t=3,\\
8-2t=0&\Rightarrow t=4.
\end{aligned}$$

The two components vanish at different times, so there is no collision despite intersecting route lines. On the relative diagram the path is the line $y=x+2$, moving southwest from $(6,8)$. Its perpendicular foot from the origin is $(-1,1)$, reached at $t=3.5$ s; this point is not the origin.

$$\begin{aligned}
d^2&=(6-2t)^2+(8-2t)^2\\
&=8(t-3.5)^2+2.
\end{aligned}$$

For the future ray the foot is allowed; for the shorter interval it is beyond the endpoint $(2,4)$:

$$\begin{aligned}
t\ge0:&\quad t=3.5\ \mathrm s,\quad d_{\min}=\sqrt2\ \mathrm m,\\
0\le t\le2:&\quad t=2\ \mathrm s,\quad d_{\min}=2\sqrt5\ \mathrm m.
\end{aligned}$$

Separation decreases throughout the shorter interval, so its final endpoint is nearest. If your two collision times differed but you still reported a collision, return to [the same-time condition](#relative-position). If you used the unrestricted foot in the shorter interval, return to [the observed segment](#closest-approach), then attempt [retry 3](#retry-3).

</details>

</section>

## Diagnose and retry {#retry}

Choose the retry for the error you found: water and ground speed confused → retry 1; wrong heading or inadmissible meeting time → retry 2; an unreachable nearest point → retry 3; division by zero in the nearest-time formula → the constant-separation check. Close the old solution and make a fresh attempt.

<section class="lesson-check" markdown="1">

### Retry 1 {#retry-1}

**Retry (self-written):** A current flows east at 3 m s⁻¹. A swimmer has speed 5 m s⁻¹ relative to the water and wants to move due north over the ground. Draw a velocity triangle and find the required water-relative velocity, heading and ground speed.

<details markdown="1"><summary>Hint</summary>

Cancel the eastward component; then select the sign of the other component from the intended direction.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
\mathbf v_{\rm water}&=(-3,4)\ \mathrm{m\,s^{-1}},\\
\mathbf v_{\rm ground}&=(-3,4)+(3,0)\\
&=(0,4)\ \mathrm{m\,s^{-1}}.
\end{aligned}$$

The heading is $\tan^{-1}(3/4)\approx36.9^\circ$ west of north, and the ground speed is 4 m s⁻¹. Your head-to-tail triangle must end directly north of its start, and the water-relative arrow must have length five. A negative north component would describe the wrong direction; review [velocity addition](#velocity-triangle) if your resultant points east.

</details>

</section>

<section class="lesson-check" markdown="1">

### Retry 2 {#retry-2}

**Retry (self-written):** B starts 8 m north of A and moves east at 1 m s⁻¹. A starts at the same time with speed $\sqrt5$ m s⁻¹ in an unknown fixed direction. Find a velocity and positive time for interception, and check both positions. Explain whether speed 1 m s⁻¹ could succeed.

<details markdown="1"><summary>Hint</summary>

The separation is now initially vertical. Name the required east and north components before applying the speed condition.

</details>

<details markdown="1"><summary>Solution and check</summary>

With A initially at the origin and east and north positive,

$$\begin{aligned}
\mathbf r_B(t)&=(t,8),\\
\mathbf v_A&=(1,8/t),\\
1+64/t^2&=5,\\
t&=4\ \mathrm s,\\
\mathbf v_A&=(1,2)\ \mathrm{m\,s^{-1}}.
\end{aligned}$$

Both positions are $(4,8)$ m; the speed is $\sqrt{1+4}=\sqrt5$ m s⁻¹. At speed one, $64/t^2=0$ would be required, impossible at finite positive time. If the components were interchanged, return to [the position equation](#demonstration); its first component always represents the horizontal direction.

</details>

</section>

<section class="lesson-check" markdown="1">

### Retry 3 {#retry-3}

**Retry (self-written):** Two particles have relative position $(4+2t,3)$ m for $t\ge0$. Sketch the allowed relative path and find the least separation. Explain geometrically why the whole-line perpendicular foot does or does not give an allowed answer.

<details markdown="1"><summary>Hint</summary>

Mark the initial point and the direction in which the ray is traversed. Check the sign of the time needed to reach the vertical axis.

</details>

<details markdown="1"><summary>Solution and check</summary>

The ray starts at $(4,3)$ and moves right. The whole-line foot $(0,3)$ needs $t=-2$ s, so it is outside the future motion.

$$d^2=4(t+2)^2+9.$$

For $t\ge0$, the squared term increases from its value at zero; the minimum is at $t=0$ with $d=5$ m. A distance of three belongs to the extended line, not the allowed ray. Revisit [the endpoint rule](#closest-approach) if your sketch extends the actual motion backwards in time.

</details>

</section>

<section class="lesson-check" markdown="1">

### Constant-separation check {#retry-zero}

**Retry (self-written):** A and B have equal velocity $(2,-1)$ m s⁻¹ and initial separation vector $(3,4)$ m. Find their relative velocity and separation for all valid times.

<details markdown="1"><summary>Hint</summary>

Subtract the velocities before trying a nearest-time formula.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\begin{aligned}
\mathbf v_{BA}&=\mathbf0,\\
\mathbf r_{BA}&=(3,4)\ \mathrm m,\\
d&=5\ \mathrm m.
\end{aligned}$$

The relative point stays fixed, so every valid time gives the same separation. Equal velocities do not imply a collision: the nonzero initial separation remains. If you divided by zero, return to [the zero-relative-velocity case](#closest-approach).

</details>

</section>

## Return after the next lesson {#later-review}

After studying [dimensions](/alevel/as-further-mathematics/dimensions/), return with these examples closed. Select your own approach and record whether a hint was needed.

<section class="lesson-check" markdown="1">

### Mixed review

**Later review (self-written):** A starts at $(0,0)$ m with velocity $(1,2)$ m s⁻¹. B starts at $(8,k)$ m with velocity $(-1,1)$ m s⁻¹. Both motions continue for $0\le t\le6$ s. Find the value of $k$ for which they meet and check the meeting position. Now set $k=1$. Find their least separation in this interval and then if observation ends at $t=2$ s. Sketch the relative path to justify the change.

<details markdown="1"><summary>Hint</summary>

Use one clock. Decide what meeting means in your chosen representation, then reconsider the motion when the initial condition changes.

</details>

<details markdown="1"><summary>Solution and check</summary>

Using the stated coordinate axes,

$$\begin{aligned}
\mathbf r_A(t)&=(t,2t),\\
\mathbf r_B(t)&=(8-t,k+t),\\
\mathbf r_{BA}(t)&=(8-2t,k-t).
\end{aligned}$$

The first relative component gives $t=4$ s. The second then gives $k=4$; both original positions are $(4,8)$ m, within the allowed time.

For the changed initial condition,

$$\begin{aligned}
\mathbf r_{BA}(t)&=(8-2t,1-t),\\
d^2&=(8-2t)^2+(1-t)^2\\
&=5t^2-34t+65\\
&=5\left(t-\frac{17}5\right)^2+\frac{36}5.
\end{aligned}$$

The minimum on the six-second interval is at $t=17/5$ s, giving $d_{\min}=6/\sqrt5$ m. The relative path moves southwest from $(8,1)$ along $y=x/2-3$. The foot is $(6/5,-12/5)$: its joining line from the origin has slope $-2$, perpendicular to the path's slope $1/2$. With observation ending at two seconds, the path stops at $(4,-1)$ before reaching the foot; the minimum is at $t=2$ s and is $\sqrt{17}$ m.

A wrong meeting parameter calls for [same-time modelling](#relative-position) and [retry 2](#retry-2). A nearest point outside the interval calls for [the geometric restriction](#closest-approach) and [retry 3](#retry-3). Recompute from the changed initial condition rather than reusing the old collision model.

</details>

</section>

## Where to go next {#next-step}

You are ready to continue when you can label the frames in a velocity triangle, justify a possible or impossible interception, and use both a relative-path sketch and algebra to check the allowed nearest point. If one of these failed, use its specific retry before continuing to [dimensions](/alevel/as-further-mathematics/dimensions/). Keep the [mixed review](#later-review) for after that lesson; one correct attempt today does not establish later recall.

## Sources and scope {#sources}

This lesson covers **FM1.1**, constant velocity in two dimensions, within **9665 v5.2**. All page demonstrations, student tasks and checks are **self-written**; the official question below informs the modelling evidence, not official marks for these tasks.

<details markdown="1"><summary>Official scope and paired question</summary>

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FM1.1, PDF p.14 / printed p.15; reached from the [current 9665 qualification page](https://www.oxfordaqa.com/qualification/international-as-and-a-level-further-mathematics-9665/). This includes velocity triangles, interception, closest approach and geometric reasoning; it does not extend this lesson to two-dimensional collisions.
- FM02 June 2024 **Q9(a)(b)**; QP p.18, MS p.16. [Question paper](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Version 1.0 Final mark scheme](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf). These paired pages were read for this revision: subtract velocities in a stated order, then use the same time for both displacement components. The session is June 2024; the QP cover gives the examination date as 16 May 2024.

</details>

[Previous](/alevel/as-further-mathematics/linear-combinations/) · [Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/dimensions/)
