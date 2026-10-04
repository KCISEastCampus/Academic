---
title: Simple Harmonic Motion
layout: subjects
mathjax: true
grade: a2
subject: a2-physics
permalink: /alevel/a2-physics/simple-harmonic-motion/
toc_headings: h2
study_page: true
---

[A2 Physics](/alevel/a2-physics/) · PH03 · 3.6.2 Simple harmonic motion

Use the condition for simple harmonic motion, read motion and energy graphs, and derive the periods of a mass–spring system and a simple pendulum.

- **Learning:** start with [the condition for SHM](#the-condition-for-shm), then connect [motion graphs](#motion-graphs-and-equations) to [energy](#energy-in-shm).
- **Homework help:** measure displacement from equilibrium, choose a positive direction, and check the initial position and velocity before choosing a sine or cosine equation.
- **Revision:** try [practice](#practice) with the hints and solutions closed.

**Before you start:** review [Circular Motion](/alevel/a2-physics/circular-motion/) and [AS oscillating systems](/alevel/as-physics/#61-oscillating-systems). Use $g=9.81\,\mathrm{m\,s^{-2}}$ unless stated otherwise. Convert lengths to metres, use radians in the equations, and keep extra digits until the final answer.

Worked examples and Questions 1–5 are self-written. Questions 6–7 and the energy checkpoint are adapted from OxfordAQA PH03 papers. Their wording is simplified and no official marks are assigned. Diagrams are not to scale.

## The Condition for SHM

**Think first:** an object moves back and forth about a fixed position. Is this enough to show that its motion is simple harmonic?

<details markdown="1">
<summary>Check your explanation</summary>

No. Oscillation alone is not enough. For simple harmonic motion, acceleration must be directly proportional to displacement from equilibrium and directed towards equilibrium.

</details>

In **simple harmonic motion (SHM)**, acceleration is directly proportional to displacement from a fixed equilibrium position and is always directed towards that position:

$$\boxed{a=-\omega^2x}.$$

Here $x$ is the signed displacement from equilibrium and $\omega$ is the **angular frequency**, in $\mathrm{rad\,s^{-1}}$. For straight-line motion, $a$ is the acceleration along that line. For a pendulum, we use the component along its curved path.

The negative sign means that acceleration and displacement have opposite signs. It does not mean that the object always slows down. An object speeds up as it moves towards equilibrium and slows down as it moves away.

**Amplitude** $A$ is the maximum magnitude of displacement from equilibrium. The distance between the two extreme positions is $2A$. The **period** $T$ is the time for a full oscillation; the **frequency** $f$ is the number of full oscillations per second.

$$\omega=2\pi f=\frac{2\pi}{T}.$$

An acceleration–displacement graph for SHM is a straight line through the origin with a negative gradient:

$$\text{gradient}=-\omega^2.$$

A negative gradient alone is not enough: the relation must be linear and displacement must be measured from equilibrium. A restoring force towards equilibrium must also be proportional to this displacement for the ideal SHM model.

### Example 1: recognising SHM

An oscillator obeys $a=-144x$, where $a$ is in $\mathrm{m\,s^{-2}}$ and $x$ is in metres. Its amplitude is $0.050\,\mathrm m$. Find its angular frequency and period, and its acceleration at $x=+0.030\,\mathrm m$.

Comparing with $a=-\omega^2x$:

$$\omega^2=144\,\mathrm{s^{-2}},\qquad \omega=12\,\mathrm{rad\,s^{-1}}.$$

$$T=\frac{2\pi}{12}\approx\boxed{0.52\,\mathrm s}.$$

$$a=-144(0.030)=-4.32\,\mathrm{m\,s^{-2}}.$$

The acceleration is $\boxed{4.3\,\mathrm{m\,s^{-2}}}$ in the negative direction, towards equilibrium. At $x=-0.030\,\mathrm m$, it has the same magnitude but the positive direction.

**Check:** maximum acceleration magnitude occurs at either extreme:

$$a_{\max}=\omega^2A=144(0.050)=7.2\,\mathrm{m\,s^{-2}}.$$

## Motion Graphs and Equations

For an undamped oscillator released from rest at $x=+A$ when $t=0$:

$$\boxed{x=A\cos(\omega t)}.$$

Velocity is the gradient of the displacement–time graph. Acceleration is the gradient of the velocity–time graph:

$$v=\frac{\mathrm dx}{\mathrm dt}=-A\omega\sin(\omega t).$$

$$a=\frac{\mathrm dv}{\mathrm dt}=-A\omega^2\cos(\omega t).$$

These give $a=-\omega^2x$. Differentiation helps explain the graphs; you can also read their gradients without differentiating an equation.

<img src="/assets/img/physics-shm-motion.svg" width="400" height="640" data-lazy-ignore="true" alt="Three graphs over one period: displacement starts at its positive maximum, velocity starts at zero and becomes negative, and acceleration starts at its negative maximum. Each graph uses its own labelled scale.">

The graphs use separate scales: $x/A$, $v/(A\omega)$ and $a/(A\omega^2)$. Their plotted heights do not mean that displacement, velocity and acceleration have the same units or magnitude.

| Time | $x$ | $v$ | $a$ |
|---|---|---|---|
| $0$ | $+A$ | $0$ | $-\omega^2A$ |
| $T/4$ | $0$ | $-\omega A$ | $0$ |
| $T/2$ | $-A$ | $0$ | $+\omega^2A$ |
| $3T/4$ | $0$ | $+\omega A$ | $0$ |
| $T$ | $+A$ | $0$ | $-\omega^2A$ |

Displacement and acceleration are in **antiphase**: their phase difference is $\pi$ radians, or half a cycle. Velocity leads displacement by $\pi/2$ radians, or a quarter of a cycle. The signs in the table tell you the direction of motion.

At equilibrium, speed is greatest and the SHM acceleration is zero. At either extreme, speed is zero and acceleration magnitude is greatest. A turning point is not a point of zero acceleration.

### Choose the equation from the starting conditions

| Conditions at $t=0$ | Displacement equation |
|---|---|
| Released from rest at $+A$ | $x=A\cos(\omega t)$ |
| Released from rest at $-A$ | $x=-A\cos(\omega t)$ |
| At equilibrium, moving in the positive direction | $x=A\sin(\omega t)$ |
| At equilibrium, moving in the negative direction | $x=-A\sin(\omega t)$ |

For another starting point, include a phase constant, for example $x=A\cos(\omega t+\phi)$. Do not assume that every oscillator starts at an extreme.

### Example 2: position and direction at a given time

A particle has displacement $x=0.040\cos(5\pi t)$ in metres, with $t$ in seconds. Find its period and its displacement, velocity and acceleration at $t=0.15\,\mathrm s$.

Here $A=0.040\,\mathrm m$ and $\omega=5\pi\,\mathrm{rad\,s^{-1}}$, so $T=0.40\,\mathrm s$.

$$\omega t=5\pi(0.15)=\frac{3\pi}{4}.$$

$$x=0.040\cos\left(\frac{3\pi}{4}\right)\approx\boxed{-0.028\,\mathrm m}.$$

$$v=-0.040(5\pi)\sin\left(\frac{3\pi}{4}\right).$$

$$\boxed{v\approx-0.44\,\mathrm{m\,s^{-1}}}.$$

$$a=-(5\pi)^2x\approx\boxed{+7.0\,\mathrm{m\,s^{-2}}}.$$

Use the unrounded $x$ in the last calculation. The particle is on the negative side and moving farther from equilibrium, while its acceleration points back towards equilibrium. It is slowing down.

**Check:** $T/4<0.15<T/2$, so this time lies between the first equilibrium crossing and the negative turning point.

## Speed at a Given Displacement

Using $x=A\cos(\omega t)$ and $v=-A\omega\sin(\omega t)$ gives:

$$v^2=\omega^2(A^2-x^2).$$

$$\boxed{v=\pm\omega\sqrt{A^2-x^2}}.$$

For **speed**, take the positive magnitude. For **velocity**, choose the sign from the direction of motion. The same displacement is normally reached twice in a cycle, once in each direction.

At $x=0$, speed is greatest:

$$\boxed{v_{\max}=\omega A}.$$

At $x=\pm A$, speed is zero. A value of $|x|>A$ is outside the motion and cannot be substituted to give a real speed.

### Example 3: speed and energy

A $0.20\,\mathrm{kg}$ particle is attached to a spring of spring constant $50\,\mathrm{N\,m^{-1}}$ on a smooth horizontal surface. It is released from rest $0.040\,\mathrm m$ from equilibrium. The spring obeys Hooke's law and damping is negligible.

The force equation is $ma=-kx$, so $\omega^2=k/m=250\,\mathrm{s^{-2}}$.

$$v_{\max}=\sqrt{250}(0.040)\approx\boxed{0.63\,\mathrm{m\,s^{-1}}}.$$

At $x=+0.024\,\mathrm m$:

$$|v|=\sqrt{250}\sqrt{0.040^2-0.024^2}.$$

$$\boxed{|v|\approx0.51\,\mathrm{m\,s^{-1}}}.$$

The velocity is negative as the particle first returns towards equilibrium, and positive on its later outward motion. A displacement alone does not determine the sign of velocity.

## Energy in SHM

For the ideal undamped oscillator, measure potential energy relative to equilibrium:

$$E_p=\frac12m\omega^2x^2.$$

$$E_k=\frac12mv^2=\frac12m\omega^2(A^2-x^2).$$

$$\boxed{E_{\text{total}}=\frac12m\omega^2A^2}.$$

For a horizontal spring, $m\omega^2=k$, so $E_p=kx^2/2$ and $E_{\text{total}}=kA^2/2$.

<img src="/assets/img/physics-shm-energy.svg" width="400" height="570" data-lazy-ignore="true" alt="Energy graphs: against displacement, potential energy is an upward parabola and kinetic energy a downward parabola. Against time, potential and kinetic energies each have two peaks per period of displacement. Total energy is constant.">

At either extreme, all the oscillation energy is potential energy. At equilibrium, it is all kinetic energy. Total energy stays constant when no energy is transferred to the surroundings.

For $x=A\cos(\omega t)$, $E_p=E_{\text{total}}\cos^2(\omega t)$ and $E_k=E_{\text{total}}\sin^2(\omega t)$. Each energy varies with period $T/2$: the oscillator passes through equilibrium twice in one full oscillation. Do not read the period of displacement from two neighbouring kinetic-energy peaks.

### Continue Example 3: an independent energy check

$$E_{\text{total}}=\frac12(50)(0.040)^2=0.040\,\mathrm J.$$

At $x=+0.024\,\mathrm m$:

$$E_p=\frac12(50)(0.024)^2=0.0144\,\mathrm J.$$

$$E_k=0.040-0.0144=0.0256\,\mathrm J.$$

$$|v|=\sqrt{\frac{2E_k}{m}}=\sqrt{\frac{2(0.0256)}{0.20}}.$$

This again gives $|v|\approx0.51\,\mathrm{m\,s^{-1}}$. The energy method checks the speed independently of the time equation.

### Checkpoint: momentum and energy

**Adapted from OxfordAQA PH03, June 2024, Question 8.** When the magnitude of an oscillator's momentum is greatest, what are its displacement and kinetic energy?

<details markdown="1">
<summary>Check your answer</summary>

Momentum magnitude is $m|v|$. It is greatest at equilibrium, where $x=0$ and kinetic energy is greatest. Zero acceleration at this point does not mean zero speed or zero momentum.

</details>

If damping is significant, energy is transferred to the surroundings and amplitude decreases. The fixed-amplitude equations and constant total-energy line above then no longer describe the motion exactly. Review [AS damping and resonance](/alevel/as-physics/#62-forced-vibrations-and-resonance) for those effects.

## Mass–Spring Systems and Pendulums

Use an ideal light spring obeying Hooke's law, or a pendulum with a light inextensible string and a small bob. Ignore friction and air resistance in the calculations below.

<img src="/assets/img/physics-shm-models.svg" width="400" height="680" data-lazy-ignore="true" alt="A vertical spring with a mass displaced down from equilibrium has weight down and a larger spring force up. A pendulum displaced right has tension towards the pivot and weight vertically down; the restoring component of weight acts along the path towards equilibrium.">

### Derive the period of a mass–spring system

For a horizontal spring, $x$ is displacement from its equilibrium position. The resultant restoring force is $F=-kx$:

$$ma=-kx,\qquad a=-\frac{k}{m}x.$$

Compare this with $a=-\omega^2x$:

$$\omega^2=\frac{k}{m}.$$

Using $\omega=2\pi/T$ and rearranging:

$$\boxed{T=2\pi\sqrt{\frac{m}{k}}}.$$

Thus $T\propto\sqrt m$ for a fixed spring, and $T\propto1/\sqrt k$ for a fixed mass. The ideal period does not depend on amplitude or on $g$. Increasing the mass by a factor of four doubles the period.

For two springs acting on a mass, first find the effective restoring force. The $k$ in this equation is the **effective spring constant of the system**, not automatically the constant of one spring.

### A vertical spring: find equilibrium first

Let the spring's extension at equilibrium be $e_0$. Vertical balance gives $ke_0=mg$. Take downwards as positive, and let $x$ be displacement from this equilibrium position. The total extension is $e_0+x$:

$$ma=mg-k(e_0+x)=-kx.$$

The constant weight cancels the spring force at equilibrium. The same period formula applies. Do not use total extension from the natural length as $x$ in $a=-\omega^2x$.

For this vertical system, $kx^2/2$ is the **combined spring and gravitational potential energy relative to equilibrium**, not the spring's elastic energy alone. The spring's elastic energy is $k(e_0+x)^2/2$.

### Example 4: a vertical spring

A $0.25\,\mathrm{kg}$ mass hangs from a spring of constant $40\,\mathrm{N\,m^{-1}}$. It oscillates with amplitude $0.020\,\mathrm m$. Find the equilibrium extension, period and acceleration when it is $0.020\,\mathrm m$ below equilibrium.

$$e_0=\frac{mg}{k}=\frac{0.25(9.81)}{40}\approx\boxed{0.061\,\mathrm m}.$$

$$T=2\pi\sqrt{\frac{0.25}{40}}\approx\boxed{0.50\,\mathrm s}.$$

At $x=+0.020\,\mathrm m$:

$$a=-\frac{40}{0.25}(0.020)=\boxed{-3.2\,\mathrm{m\,s^{-2}}}.$$

The acceleration is upwards. The mass is at its lower turning point, so its velocity is zero at this instant.

**Check using actual forces:** the spring force is $mg+kx=2.4525+0.80=3.2525\,\mathrm N$ upwards. The resultant is $0.80\,\mathrm N$ upwards, giving $a=0.80/0.25=3.2\,\mathrm{m\,s^{-2}}$ upwards.

### Derive the period of a simple pendulum

Let $L$ be the distance from the pivot to the centre of the bob. Measure the signed displacement $x=L\theta$ **along the arc** from the lowest point, with $\theta$ in radians.

Tension acts towards the pivot and has no component along the arc. The restoring component of weight is:

$$ma=-mg\sin\theta.$$

For small angles, $\sin\theta\approx\theta=x/L$, so:

$$a\approx-\frac{g}{L}x.$$

Compare with the SHM condition to obtain $\omega^2\approx g/L$, hence:

$$\boxed{T\approx2\pi\sqrt{\frac{L}{g}}}.$$

The approximation is good for small swings, typically around $10^\circ$ or less. The small-angle relation must use radians. The ideal small-angle period does not depend on bob mass or amplitude; it increases with $\sqrt L$ and decreases with $\sqrt g$.

Here $a$ means **tangential acceleration**. At the lowest point this is zero, but the bob still has radial acceleration $v^2/L$ towards the pivot. Tension is therefore greater than weight at that instant. This connects SHM to [circular motion force equations](/alevel/a2-physics/circular-motion/#force-equations).

### Example 5: period and speed of a pendulum

A $0.10\,\mathrm{kg}$ bob hangs from a light string of length $0.80\,\mathrm m$. It is released from rest $0.0030\,\mathrm m$ above its lowest point. Find the approximate period and its speed at the lowest point.

$$T\approx2\pi\sqrt{\frac{0.80}{9.81}}\approx\boxed{1.8\,\mathrm s}.$$

For speed, use the loss of gravitational potential energy:

$$mgh=\frac12mv^2.$$

$$v=\sqrt{2gh}\approx\boxed{0.24\,\mathrm{m\,s^{-1}}}.$$

**Check the model:** $h=L(1-\cos\theta)$ gives an initial angle of about $5.0^\circ$, so the small-angle period is suitable. The $0.0030\,\mathrm m$ height is not the amplitude along the arc.

## Measurements and Graphs

The mass–spring and pendulum investigation is **AS required practical 4**. PH03 develops the same motion models and graph skills; this is not a new numbered A2 practical.

Time at least ten full oscillations past a fixed marker at equilibrium. Start and stop as the object crosses the marker **in the same direction**. An opposite-direction crossing occurs half a cycle later. Repeat timings and take a mean, then divide by the number of oscillations. A longer total timing reduces percentage uncertainty from reaction time.

Keep pendulum swings small and measure $L$ from the pivot to the bob's centre. For a spring experiment, include the mass of a hanger in the oscillating mass. Use loads for which the spring obeys Hooke's law, and include enough points over a useful range.

| Graph | Keep constant | Gradient and use |
|---|---|---|
| $T^2$ against oscillating mass $m$ | Effective spring constant $k$ | $S=4\pi^2/k$; find $k=4\pi^2/S$ |
| $T^2$ against pendulum length $L$ | $g$, with small swings | $S=4\pi^2/g$; find $g=4\pi^2/S$ |

Both ideal graphs are straight lines through the origin. A real intercept may reveal an unaccounted hanger mass, spring mass or length offset. Do not force a best-fit line through the origin without considering the model and data. Use a large gradient triangle on the best-fit line, rather than two neighbouring data points.

If a total timing $t_n$ for $n$ oscillations has uncertainty $\Delta t_n$, then $T=t_n/n$ and $\Delta T=\Delta t_n/n$ when $n$ is counted correctly. The percentage uncertainty in $T^2$ is approximately twice that in $T$.

## Practice

### Question 1: test the condition

A particle has acceleration $a=-100x$, with $x$ in metres. Explain why this is SHM. Find its frequency and the acceleration at $x=-0.020\,\mathrm m$. Would $a=+100x$ describe SHM about $x=0$?

<details markdown="1">
<summary>Hint</summary>

Compare the coefficient with $\omega^2$, and use the sign to find the direction of acceleration.

</details>

<details markdown="1">
<summary>Solution</summary>

Acceleration is proportional to displacement and towards equilibrium. Here $\omega=10\,\mathrm{rad\,s^{-1}}$ and $f=10/(2\pi)\approx1.6\,\mathrm{Hz}$.

At $x=-0.020\,\mathrm m$, $a=-100(-0.020)=+2.0\,\mathrm{m\,s^{-2}}$, towards equilibrium. The positive relation $a=+100x$ directs acceleration away from $x=0$, so it is not SHM about that point.

</details>

### Question 2: starting at equilibrium

A particle passes through equilibrium in the positive direction at $t=0$. Its amplitude is $0.030\,\mathrm m$ and its period is $0.80\,\mathrm s$. Write an equation for $x(t)$ and find $x$, $v$ and $a$ at $t=0.20\,\mathrm s$.

<details markdown="1">
<summary>Hint</summary>

Choose a sine equation with a positive initial velocity. The stated time is one quarter of a period.

</details>

<details markdown="1">
<summary>Solution</summary>

$$\omega=\frac{2\pi}{0.80}=2.5\pi\,\mathrm{rad\,s^{-1}}.$$

$$x=0.030\sin(2.5\pi t).$$

At $t=0.20\,\mathrm s$, the particle is at its positive extreme:

$$x=+0.030\,\mathrm m,\qquad v=0.$$

$$a=-(2.5\pi)^2(0.030)\approx\boxed{-1.9\,\mathrm{m\,s^{-2}}}.$$

It is momentarily at rest but has acceleration towards equilibrium.

</details>

### Question 3: energy and graph periods

An undamped $0.40\,\mathrm{kg}$ oscillator has period $0.50\,\mathrm s$ and amplitude $0.020\,\mathrm m$. Find the total energy, kinetic energy and speed at $x=+0.010\,\mathrm m$. Find the separation in time of neighbouring kinetic-energy maxima.

<details markdown="1">
<summary>Hint</summary>

At half the amplitude, potential energy is one quarter of the total, because it depends on $x^2$. Count how often the particle passes through equilibrium.

</details>

<details markdown="1">
<summary>Solution</summary>

$$\omega=4\pi\,\mathrm{rad\,s^{-1}}.$$

$$E_{\text{total}}=\frac12(0.40)(4\pi)^2(0.020)^2.$$

$$\boxed{E_{\text{total}}\approx0.013\,\mathrm J}.$$

$$E_k=\frac34E_{\text{total}}\approx\boxed{0.0095\,\mathrm J}.$$

$$|v|=4\pi\sqrt{0.020^2-0.010^2}.$$

$$\boxed{|v|\approx0.22\,\mathrm{m\,s^{-1}}}.$$

Neighbouring kinetic-energy maxima are separated by $T/2=0.25\,\mathrm s$. Velocity can have either sign at the given displacement; the direction was not specified.

</details>

### Question 4: a vertical spring

A $0.30\,\mathrm{kg}$ mass hangs from a spring of constant $60\,\mathrm{N\,m^{-1}}$. It oscillates with amplitude $0.015\,\mathrm m$. Find the equilibrium extension, period and maximum speed. Find the magnitude and direction of acceleration at the upper turning point.

<details markdown="1">
<summary>Hint</summary>

Use $ke_0=mg$, then measure $x$ from equilibrium. Downwards is positive, so the upper turning point has $x=-A$.

</details>

<details markdown="1">
<summary>Solution</summary>

$$e_0=\frac{0.30(9.81)}{60}\approx0.049\,\mathrm m.$$

$$\omega=\sqrt{\frac{60}{0.30}}=\sqrt{200}\,\mathrm{rad\,s^{-1}}.$$

$$T=\frac{2\pi}{\sqrt{200}}\approx0.44\,\mathrm s.$$

$$v_{\max}=\sqrt{200}(0.015)\approx0.21\,\mathrm{m\,s^{-1}}.$$

At $x=-0.015\,\mathrm m$, $a=-200(-0.015)=+3.0\,\mathrm{m\,s^{-2}}$: downwards, towards equilibrium. The spring remains stretched because $e_0>A$.

</details>

### Question 5: measuring a pendulum

A small-angle pendulum of length $0.90\,\mathrm m$ completes 20 oscillations in $38.0\,\mathrm s$. Use these data to calculate $g$. If the uncertainty in the total timing is $\pm0.2\,\mathrm s$, find the timing contribution to the percentage uncertainty in $g$. Ignore length uncertainty for this calculation. What would doubling the bob mass do to the period?

<details markdown="1">
<summary>Hint</summary>

Divide the full timing by 20 before using the period equation. For fixed length, $g$ depends on $T^{-2}$.

</details>

<details markdown="1">
<summary>Solution</summary>

$$T=\frac{38.0}{20}=1.90\,\mathrm s.$$

$$g=\frac{4\pi^2L}{T^2}=\frac{4\pi^2(0.90)}{1.90^2}.$$

$$\boxed{g\approx9.8\,\mathrm{m\,s^{-2}}}.$$

$$\frac{\Delta T}{T}=\frac{0.2}{38.0}.$$

The timing contribution to the percentage uncertainty in $g$ is $2(0.2/38.0)(100)\approx1.1\%$. If length uncertainty were included, its percentage contribution would also be added for a maximum-uncertainty estimate.

Doubling the bob mass leaves the ideal small-angle period unchanged.

</details>

### Question 6: explanation and derivation

**Adapted from OxfordAQA PH03, January 2020, Question 1.**

A trolley connected to a horizontal spring oscillates with negligible damping. Its resultant force is $F=-kx$. State two ways to reduce percentage uncertainty when timing its period. Explain the negative sign, then derive the period equation using Newton's second law and the SHM condition.

<details markdown="1">
<summary>Hint</summary>

Start with $ma=-kx$ and compare with $a=-\omega^2x$. Finish by using $\omega=2\pi/T$; quoting the period formula alone is not a derivation.

</details>

<details markdown="1">
<summary>Solution</summary>

Time many oscillations and divide by their number; repeat the timings and take a mean. Use a fixed marker at equilibrium and count full cycles in the same direction.

The negative sign means that the resultant force acts in the opposite direction to displacement from equilibrium. It is a restoring force.

$$ma=-kx\quad\Rightarrow\quad a=-\frac{k}{m}x.$$

Comparing with $a=-\omega^2x$ gives $\omega^2=k/m$.

$$\left(\frac{2\pi}{T}\right)^2=\frac{k}{m}.$$

$$\boxed{T=2\pi\sqrt{\frac{m}{k}}}.$$

The negative signs agree; they do not give a negative value of $\omega^2$ or a negative period.

</details>

### Question 7: removing a hanging mass

**Adapted from OxfordAQA PH03, June 2024, Question 9.**

A mass $M$ hangs from an ideal vertical spring. A second mass $m$ hangs below it on a light thread. The system is at rest and the spring's extension is $\Delta l$. The thread is cut and the mass $M$ oscillates. Express its period in terms of $M$, $m$, $\Delta l$ and $g$, assuming the spring stays stretched throughout.

<details markdown="1">
<summary>Hint</summary>

Find $k$ from the equilibrium before the thread is cut. Which mass is oscillating afterwards?

</details>

<details markdown="1">
<summary>Solution</summary>

Before the cut, the spring supports both masses:

$$k\Delta l=(M+m)g.$$

After the cut, only $M$ oscillates, so:

$$T=2\pi\sqrt{\frac{M}{k}}.$$

$$\boxed{T=2\pi\sqrt{\frac{M\Delta l}{(M+m)g}}}.$$

The equilibrium extension changes to $Mg/k$. The mass starts at rest below this new equilibrium, with amplitude $mg/k$. Do not use $M+m$ as the oscillating mass after the cut. For the spring to remain stretched throughout, $M>m$ in this ideal model; $M=m$ is the limiting case of zero extension at the upper extreme. If $M<m$, the spring would need to exert a compressive force near that extreme.

</details>

## Quick Reference

| Use | Equation and condition |
|---|---|
| SHM condition | $a=-\omega^2x$; displacement from equilibrium |
| Period and frequency | $\omega=2\pi f=2\pi/T$ |
| Released from rest at $+A$ | $x=A\cos(\omega t)$ |
| Velocity for this release | $v=-A\omega\sin(\omega t)$ |
| Speed at displacement $x$ | $|v|=\omega\sqrt{A^2-x^2}$; $|x|\leq A$ |
| Maximum speed | $v_{\max}=\omega A$; at equilibrium |
| Maximum acceleration magnitude | $a_{\max}=\omega^2A$; at either extreme |
| Total oscillation energy | $E_{\text{total}}=m\omega^2A^2/2$; undamped SHM |
| Mass–spring period | $T=2\pi\sqrt{m/k}$; effective $k$, ideal light spring |
| Pendulum period | $T\approx2\pi\sqrt{L/g}$; small angles, pivot-to-centre length |

Before moving on, check that you can explain the negative sign, choose an equation from the starting conditions, read the directions from a graph, derive both period formulae, and distinguish period $T$ from the $T/2$ energy cycle.

[Next lesson: Gravitational Fields and Satellites](/alevel/a2-physics/gravitational-fields-and-satellites/) · [Previous lesson: Circular Motion](/alevel/a2-physics/circular-motion/) · [PH03 course index](/alevel/a2-physics/) · [PH03 reference notes](/alevel/a2-physics/quick-reference/)

<details markdown="1">
<summary>Sources and exam wording</summary>

This lesson follows Section 3.6.2 of the [OxfordAQA Physics specification](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-physics-specification.pdf), with AS oscillating systems and required practical 4 as prior knowledge. Period derivations, motion graphs and energy graphs are included in the specified content.

Textbook support: Jim Breithaupt, *Oxford International AQA Examinations: International A Level Physics*, Chapter 16, printed pp. 285–296. The teacher's AS handouts inform the use of short explanations, graph reading, spring and pendulum models, and staged exercises.

Questions 6–7 are adapted from OxfordAQA PH03 January 2020 Question 1 and June 2024 Question 9; the momentum checkpoint is adapted from June 2024 Question 8. The official mark schemes were consulted before drafting. Answers were derived and checked independently rather than copied from textbook answer lists.

</details>
