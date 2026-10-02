---
title: Work and Energy
layout: subjects
mathjax: true
grade: a2
subject: m2
permalink: /alevel/a2-mathematics/mechanics/work-and-energy/
toc_headings: h2
study_page: true
---

[A2 Mechanics](/alevel/a2-mathematics/mechanics/) · M2.6 Work and Energy

Find work done by a force, use power to solve vehicle problems, and compare kinetic and potential energy to find speeds and distances.

- **Learning:** start with [work](#work-done-by-a-force), then study [power](#power) and [the work-energy principle](#the-work-energy-principle).
- **Homework help:** name the force doing the work. Choose a fixed zero level for potential energy and check whether resistance is present.
- **Revision:** try [practice](#practice) with the solutions closed. Check signs, units and whether mechanical energy is conserved.

Textbook: Chapter 14, *Work, Power and Energy*, Sections 14.1–14.3 (printed pp. 220–237). This lesson uses the textbook terms *work done*, *driving force*, *power*, *kinetic energy*, *potential energy*, *work-energy principle* and *conservation of mechanical energy*.

**Before you start:** review [Newton's Laws of Motion](/alevel/a2-mathematics/mechanics/newtons-laws-of-motion/) and [Forces, Equilibrium and Friction](/alevel/a2-mathematics/mechanics/forces-equilibrium-and-friction/). Use $g=9.8\,\mathrm{m\,s^{-2}}$ unless stated otherwise. Keep exact values until the final answer; give numerical answers to three significant figures, or one decimal place for angles, unless asked otherwise.

Model bodies as particles unless stated otherwise. All worked examples and practice questions are self-written, not official past-paper questions. No official marks are assigned. Diagrams show the model and are not drawn to scale.

## Work Done by a Force

For a **constant force** and straight-line motion, work done is the force component in the direction of motion multiplied by the distance moved:

$$\boxed{W=Fs\cos\theta}.$$

Here $F$ is the force magnitude, $s$ is the distance and $\theta$ is the angle between the force and the direction of motion. In vector form, for a constant force over displacement $\mathbf d$:

$$W=\mathbf F\cdot\mathbf d.$$

Work is a scalar measured in **joules (J)**. One joule is one newton metre. For a force that changes, do not multiply one force value by the whole distance. Add the work over the motion; along a straight line this can be written as the integral of the force component with respect to displacement.

| Force direction | Work done by the force |
|---|---|
| In the direction of motion | Positive: energy is supplied |
| Opposite to motion | Negative: energy is removed |
| Perpendicular to motion | Zero |

If a constant resistance $f$ opposes the motion over distance $s$, the **work done by resistance** is $-fs$. The **work done against resistance** is the positive amount $fs$. These phrases have different signs.

For motion on a fixed plane, the normal reaction is perpendicular to motion and does no work. Friction acts along the plane and can do work.

![A block moving to the right with an angled pulling force and opposing friction; work uses the horizontal force component and the distance moved](/assets/img/a2-math-mech/work-force-components.svg)

### Example 1: which forces do work?

**Question:** a block moves $3\,\mathrm m$ to the right on a fixed horizontal plane. A constant force of $40\,\mathrm N$ pulls at $60^\circ$ above horizontal. Friction is $12\,\mathrm N$. Find the work done by each force and the total work.

The pulling force has horizontal component $40\cos60^\circ=20\,\mathrm N$:

$$\boxed{W_{\text{pull}}=40(3)\cos60^\circ=60\,\mathrm J}.$$

$$\boxed{W_{\text{friction}}=-12(3)=-36\,\mathrm J}.$$

Weight and the normal reaction are vertical, so each does zero work. Hence:

$$\boxed{W_{\text{total}}=60-36=24\,\mathrm J}.$$

The work done **against** friction is $36\,\mathrm J$.

**Check:** the horizontal resultant is $20-12=8\,\mathrm N$. Its work is $8(3)=24\,\mathrm J$. Using $40(3)$ would count the vertical component as doing work.

## Work Against Gravity

Near the Earth's surface, take weight $mg$ as constant. For a vertical rise of $h$, work done **by weight** is $-mgh$, and work done **against gravity** is $mgh$.

On a slope, use the **vertical height change**, not the distance along the slope. If the distance up a plane is $s$ and its angle to horizontal is $\alpha$:

$$h=s\sin\alpha,\qquad W_{\text{weight}}=-mgs\sin\alpha.$$

For a descent, weight does positive work. A body can also gain kinetic energy during a lift, so the work done by the lifting force is not always just $mgh$.

### Example 2: lifting at constant speed

**Question:** a load of mass $20\,\mathrm{kg}$ is lifted vertically through $2\,\mathrm m$ at constant speed in $4\,\mathrm s$. Ignore resistance. Find the work done by the lifting force and by weight, then find the average power of the lifting force.

The resultant force is zero, so the lifting force is $20g=196\,\mathrm N$.

$$\boxed{W_{\text{lift}}=196(2)=392\,\mathrm J}.$$

$$\boxed{W_{\text{weight}}=-392\,\mathrm J}.$$

$$\boxed{P_{\text{average}}=\frac{392}{4}=98\,\mathrm W}.$$

**Check:** total work is zero, matching no change in kinetic energy. The speed and power are:

$$v=\frac24=0.5\,\mathrm{m\,s^{-1}},\qquad P=196(0.5)=98\,\mathrm W.$$

## Power

**Power** is the rate at which work is done. It is measured in **watts (W)**, where one watt is one joule per second.

$$\boxed{P_{\text{average}}=\frac{\text{work done}}{\text{time taken}}}.$$

Instantaneous power is:

$$P=\frac{\mathrm dW}{\mathrm dt}.$$

For a force component $F_{\parallel}$ in the direction of motion and speed $v$:

$$\boxed{P=F_{\parallel}v}.$$

For a vehicle whose driving force $D$ acts in the direction of motion, the useful mechanical power supplied by the engine is $P=Dv$. This is the power of the **driving force**, not of the resultant force. Resistance removes energy at rate $fv$.

Use metres per second and watts:

$$1\,\mathrm{kW}=1000\,\mathrm W,\qquad 1\,\mathrm{km\,h^{-1}}=\frac5{18}\,\mathrm{m\,s^{-1}}.$$

Average power and power at an instant need not be equal. If power is constant and $v>0$, then $D=P/v$ changes as speed changes. This formula cannot be used at $v=0$. A finite force does zero mechanical work per second at that instant; an engine can still use fuel while stationary.

### Example 3: work and power of a vehicle

**Question:** a vehicle travels at a steady $54\,\mathrm{km\,h^{-1}}$ on a level road. The constant resistance is $2400\,\mathrm N$. Find the engine's mechanical power and the work done by its driving force in $40\,\mathrm s$.

$$v=54\left(\frac5{18}\right)=15\,\mathrm{m\,s^{-1}}.$$

At steady speed, the driving force balances resistance: $D=2400\,\mathrm N$.

$$\boxed{P=2400(15)=36000\,\mathrm W=36\,\mathrm{kW}}.$$

$$\boxed{W=P(40)=1.44\times10^6\,\mathrm J=1.44\,\mathrm{MJ}}.$$

**Check:** distance travelled is $15(40)=600\,\mathrm m$, and $D(600)$ gives the same work. The resultant force and change in kinetic energy are zero, although the engine does positive work.

## Vehicles on Inclined Roads

Let a vehicle move uphill, with driving force $D$ up the slope and constant resistance $f$ down the slope. Taking uphill as positive:

$$D-f-mg\sin\alpha=ma.$$

If its mechanical power is $P$ and its speed is $v>0$:

$$\boxed{\frac Pv-f-mg\sin\alpha=ma}.$$

At the maximum steady speed for a given available power, set $a=0$. For a constant resistance model, this gives:

$$v_{\text{steady}}=\frac{P}{f+mg\sin\alpha}.$$

For downhill motion, taking downhill as positive gives:

$$\frac Pv+mg\sin\alpha-f=ma.$$

A positive steady speed in this powered downhill model requires $f>mg\sin\alpha$. If weight already exceeds resistance, a forward driving force cannot produce steady speed; braking or a different resistance model is needed.

### Example 4: steady speed and acceleration uphill

**Question:** a car of mass $1000\,\mathrm{kg}$ has mechanical power $29.4\,\mathrm{kW}$. Constant resistance is $980\,\mathrm N$. The uphill road angle satisfies:

$$\sin\alpha=\frac1{20}.$$

Find its maximum steady speed uphill and its acceleration when moving uphill at $10\,\mathrm{m\,s^{-1}}$. Also find the maximum steady speeds on a level road and down the same slope at this power.

The weight component down the slope is $1000g/20=490\,\mathrm N$. At steady uphill speed:

$$\frac{29400}{v}=980+490,\qquad \boxed{v=20\,\mathrm{m\,s^{-1}}}.$$

At $v=10$, the driving force is $29400/10=2940\,\mathrm N$:

$$1000a=2940-980-490,\qquad \boxed{a=1.47\,\mathrm{m\,s^{-2}}}.$$

On a level road:

$$\boxed{v=\frac{29400}{980}=30\,\mathrm{m\,s^{-1}}}.$$

Downhill, weight helps the driving force:

$$\frac{29400}{v}+490-980=0,\qquad \boxed{v=60\,\mathrm{m\,s^{-1}}}.$$

**Check:** downhill $f-mg\sin\alpha=490>0$, so a positive steady speed exists in this model. These results assume resistance stays constant; real resistance often increases with speed.

## Kinetic and Potential Energy

**Kinetic energy (KE)** is energy due to motion:

$$\boxed{KE=\frac12mv^2}.$$

Use **speed**, the magnitude of velocity. Kinetic energy is a scalar and cannot be negative. It is zero at rest, and doubling the speed multiplies it by four.

To see where the formula comes from, consider a constant resultant force accelerating a particle from rest through distance $s$. Since $F=ma$ and $v^2=2as$, its work is:

$$Fs=mas=\frac12mv^2.$$

**Gravitational potential energy (PE)** is energy due to vertical position in a constant gravitational field:

$$\boxed{PE=mgh}.$$

Choose a **fixed zero level** and measure $h$ vertically upwards from it. Potential energy can be negative below that level. Changing the zero level changes the values of PE, but not the change in PE between two positions.

The **mechanical energy (ME)** of a particle in this model is $KE+PE$. Work and both forms of energy are measured in joules.

### Example 5: vector velocity and a zero level

**Question:** a particle of mass $2\,\mathrm{kg}$ has velocity

$$\mathbf v=(3\mathbf i+4\mathbf j)\,\mathrm{m\,s^{-1}}.$$

It is $2.5\,\mathrm m$ above the ground. Find its kinetic, potential and mechanical energy using the ground as the zero level. Then use a fixed zero level $3\,\mathrm m$ above the ground.

The speed is $\sqrt{3^2+4^2}=5\,\mathrm{m\,s^{-1}}$:

$$\boxed{KE=\frac12(2)(5^2)=25\,\mathrm J}.$$

With the ground as zero:

$$\boxed{PE=2g(2.5)=49\,\mathrm J},\qquad \boxed{ME=74\,\mathrm J}.$$

With the new zero level, $h=2.5-3=-0.5\,\mathrm m$:

$$\boxed{PE=-9.8\,\mathrm J},\qquad \boxed{ME=15.2\,\mathrm J}.$$

**Check:** kinetic energy is unchanged. Every PE value for this particle is reduced by $2g(3)=58.8\,\mathrm J$, so energy differences between positions stay the same. Do not add the velocity components to find speed.

## The Work-Energy Principle

The textbook uses the **work-energy principle** to compare the work done by forces other than weight with the change in mechanical energy. Weight is already accounted for through potential energy.

$$\boxed{W_{\text{other forces}}=\Delta(KE+PE)}.$$

Here $\Delta$ means final value minus initial value. Include work by the driving force, friction, tension or any other force that does work. Exclude weight from the left-hand side when PE is included on the right.

An equivalent form counts the work of **all forces, including weight**, and compares it with the change in kinetic energy alone:

$$\boxed{W_{\text{all forces}}=\Delta KE}.$$

Choose one form and keep it throughout the calculation. **Do not count weight as work and also include the same change in PE.** For a rise of $h$, the link between the forms is $W_{\text{weight}}=-\Delta PE=-mgh$.

When a driving force does work $W_D$ and a constant resistance $f$ acts over distance $s$:

$$W_D-fs=(KE_{\text{final}}+PE_{\text{final}})-(KE_{\text{initial}}+PE_{\text{initial}}).$$

For resistance alone, this becomes:

$$\text{mechanical energy lost}=fs.$$

Energy has been transferred out of the mechanical energy of the body, for example as heating. It has not disappeared.

### Example 6: driving, friction and stopping

**Question:** a block of mass $4\,\mathrm{kg}$ moves at $8\,\mathrm{m\,s^{-1}}$ on a fixed rough horizontal plane. The coefficient of friction is $0.2$. A horizontal force of $12\,\mathrm N$ acts forwards for $5\,\mathrm m$ and is then removed. Find the speed after the first $5\,\mathrm m$ and the further distance before the block stops.

The normal reaction is $4g=39.2\,\mathrm N$. Sliding friction is $0.2(39.2)=7.84\,\mathrm N$. There is no change in PE.

$$12(5)-7.84(5)=\frac12(4)v^2-\frac12(4)(8^2).$$

$$2v^2=148.8,\qquad \boxed{v=\sqrt{74.4}\approx8.63\,\mathrm{m\,s^{-1}}}.$$

After the force is removed, friction removes the remaining $148.8\,\mathrm J$ of kinetic energy:

$$7.84s=148.8,\qquad \boxed{s\approx19.0\,\mathrm m}.$$

**Check:** during the pull, $a=(12-7.84)/4=1.04\,\mathrm{m\,s^{-2}}$. Then $v^2=8^2+2(1.04)(5)=74.4$. Split the motion where the force is removed; do not keep the $12\,\mathrm N$ force in the stopping stage.

### Example 7: work up a rough plane

**Question:** a block of mass $5\,\mathrm{kg}$ is pulled $4\,\mathrm m$ up a fixed plane inclined at $30^\circ$ to horizontal. Its speed rises from $2$ to $6\,\mathrm{m\,s^{-1}}$. The pulling force is constant and parallel to the plane. Friction is $8\,\mathrm N$. Find the work done by the pulling force and its magnitude.

![A block pulled up a rough slope, with distance s along the slope and vertical height h; driving work supplies kinetic energy, potential energy and work against friction](/assets/img/a2-math-mech/work-energy-slope.svg)

The vertical rise is $h=4\sin30^\circ=2\,\mathrm m$.

$$\Delta KE=\frac12(5)(6^2-2^2)=80\,\mathrm J.$$

$$\Delta PE=5g(2)=98\,\mathrm J,\qquad fs=8(4)=32\,\mathrm J.$$

Let the pulling force be $D$. The work-energy principle gives:

$$4D-32=80+98.$$

$$\boxed{W_D=210\,\mathrm J},\qquad \boxed{D=52.5\,\mathrm N}.$$

**Check:** using all forces gives $210-32-98=80\,\mathrm J=\Delta KE$. Also, $a=(6^2-2^2)/(2\cdot4)=4$, and $52.5-8-5g\sin30^\circ=5(4)$.

## Conservation of Mechanical Energy

When forces other than weight do no net work, mechanical energy is conserved:

$$\boxed{KE_{\text{initial}}+PE_{\text{initial}}=KE_{\text{final}}+PE_{\text{final}}}.$$

This applies to a projectile with no air resistance, or a particle moving on a **fixed smooth** track when its normal reaction is perpendicular to motion. It does not apply unchanged when friction removes energy or an engine supplies it.

For a particle rising through vertical height $h$, with initial speed $u$ and final speed $v$:

$$\frac12mu^2=\frac12mv^2+mgh,\qquad v^2=u^2-2gh.$$

For a vertical drop of $h$, the last term changes sign and $v^2=u^2+2gh$. The mass cancels. Energy gives **speed**, not direction or travel time. For a projectile, the speed at the highest point need not be zero: its horizontal component remains.

### Example 8: a bead on a fixed smooth wire

**Question:** a bead is threaded on a smooth circular wire of radius $1\,\mathrm m$, fixed in a vertical plane. It is projected from the lowest point $A$ at $4.9\,\mathrm{m\,s^{-1}}$. Ignore air resistance. Find the height above $A$ where it first comes to rest and its height relative to the centre $O$.

![A bead threaded on a fixed smooth vertical circular wire, rising from A to B; the normal reaction is perpendicular to the path, and h is the vertical rise](/assets/img/a2-math-mech/energy-smooth-wire.svg)

Choose $A$ as the zero level. The normal reaction does no work, so:

$$\frac12m(4.9^2)=mgh.$$

$$\boxed{h=\frac{4.9^2}{2g}=1.225\,\mathrm m\approx1.23\,\mathrm m}.$$

The centre is $1\,\mathrm m$ above $A$, so the bead stops:

$$\boxed{1.225-1=0.225\,\mathrm m\text{ above }O}.$$

**Check:** $0<h<2$, the wire's full vertical height, so the turning point lies on the wire. The bead is threaded on it, which keeps it constrained to the circular path. A body merely resting on a track can lose contact; energy alone would not check that condition.

## Practice

Try each question before opening the hint. State the model and the force doing work, then check your answer using force balance, units or an energy comparison.

### Q1: signed work

A block moves $4\,\mathrm m$ to the right on a fixed horizontal plane. A constant force of $30\,\mathrm N$ pulls at $60^\circ$ above horizontal. Friction is $10\,\mathrm N$. Find the work done by the pull, the work done by friction, the work done against friction and the total work.

<details markdown="1">
<summary>Hint</summary>

Resolve the pulling force in the direction of motion. Weight and the normal reaction are perpendicular to motion.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\boxed{W_{\text{pull}}=30(4)\cos60^\circ=60\,\mathrm J}.$$

$$\boxed{W_{\text{friction}}=-40\,\mathrm J},\qquad \boxed{W_{\text{against friction}}=40\,\mathrm J}.$$

$$\boxed{W_{\text{total}}=20\,\mathrm J}.$$

**Check:** the horizontal resultant is $30\cos60^\circ-10=5\,\mathrm N$. Its work is $5(4)=20\,\mathrm J$.

</details>

### Q2: a lift that speeds up

A constant vertical force lifts a particle of mass $10\,\mathrm{kg}$ from rest through $3\,\mathrm m$. Its final speed is $4\,\mathrm{m\,s^{-1}}$. Ignore resistance. Find the work done by the lifting force and the magnitude of the force.

<details markdown="1">
<summary>Hint</summary>

The lifting force must supply the gain in both kinetic and potential energy.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\Delta KE=\frac12(10)(4^2)=80\,\mathrm J,\qquad \Delta PE=10g(3)=294\,\mathrm J.$$

$$\boxed{W_{\text{lift}}=374\,\mathrm J},\qquad \boxed{F=\frac{374}{3}\approx125\,\mathrm N}.$$

**Check:** use $v^2=2as$ to find acceleration, then apply $F-mg=ma$:

$$a=\frac{4^2}{2\cdot3}=\frac83,\qquad F=10g+10\left(\frac83\right)=\frac{374}{3}.$$

Using $mgh$ alone would miss the gain in KE.

</details>

### Q3: an angled pull on a rough plane

A block of mass $5\,\mathrm{kg}$ is pulled from rest through $5\,\mathrm m$ on a fixed rough horizontal plane. The constant pulling force is $25\,\mathrm N$ at an acute angle $\theta$ above horizontal, where $\cos\theta=4/5$. The coefficient of friction is $0.2$. Find the normal reaction, the work done by the pulling force and the final speed. Assume the block remains in contact with the plane and slides forwards.

<details markdown="1">
<summary>Hint</summary>

The upward component reduces the normal reaction. Use this reaction when finding friction, then apply the work-energy principle.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Since $\sin\theta=3/5$:

$$\boxed{R=5g-25\left(\frac35\right)=34\,\mathrm N}.$$

Friction is $0.2R=6.8\,\mathrm N$. The pull does:

$$\boxed{W_D=25(5)\left(\frac45\right)=100\,\mathrm J}.$$

$$100-6.8(5)=\frac12(5)v^2,\qquad \boxed{v=\sqrt{26.4}\approx5.14\,\mathrm{m\,s^{-1}}}.$$

**Check:** $R>0$ and the forward force component $20\,\mathrm N$ exceeds friction. Also $a=(20-6.8)/5=2.64$, giving $v^2=2(2.64)(5)=26.4$.

</details>

### Q4: engine power at an instant

A car of mass $800\,\mathrm{kg}$ moves on a level road against constant resistance $400\,\mathrm N$. Its acceleration is $0.5\,\mathrm{m\,s^{-2}}$ when its speed is $72\,\mathrm{km\,h^{-1}}$. Find the engine's mechanical power at that instant. If the engine can supply $24\,\mathrm{kW}$, find its maximum steady speed in this model.

<details markdown="1">
<summary>Hint</summary>

Find the driving force from $D-f=ma$, then use $P=Dv$. Set $a=0$ for steady speed.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$v=72\left(\frac5{18}\right)=20\,\mathrm{m\,s^{-1}}.$$

$$D=800(0.5)+400=800\,\mathrm N.$$

$$\boxed{P=800(20)=16000\,\mathrm W=16\,\mathrm{kW}}.$$

At maximum steady speed, $D=400$:

$$\boxed{v=\frac{24000}{400}=60\,\mathrm{m\,s^{-1}}}.$$

**Check:** at the first instant, resistance removes $400(20)=8\,\mathrm{kW}$. The other $8\,\mathrm{kW}$ increases KE, since $mav=800(0.5)(20)=8000\,\mathrm W$.

</details>

### Q5: falling with resistance

A particle of mass $3\,\mathrm{kg}$ falls vertically through a liquid of depth $4\,\mathrm m$. Its speed increases from $2$ to $5\,\mathrm{m\,s^{-1}}$. The liquid exerts a constant upward resistance $f$. Find $f$, the work done by weight and the work done by resistance.

<details markdown="1">
<summary>Hint</summary>

The loss in PE supplies both the gain in KE and the work done against resistance.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\text{PE lost}=3g(4)=117.6\,\mathrm J.$$

$$\Delta KE=\frac12(3)(5^2-2^2)=31.5\,\mathrm J.$$

$$4f=117.6-31.5=86.1,\qquad \boxed{f\approx21.5\,\mathrm N}.$$

$$\boxed{W_{\text{weight}}=117.6\,\mathrm J},\qquad \boxed{W_{\text{resistance}}=-86.1\,\mathrm J}.$$

**Check:** total work $117.6-86.1=31.5\,\mathrm J=\Delta KE$. The resistance is smaller than the weight $29.4\,\mathrm N$, matching the increase in downward speed. Use the unrounded $f=21.525\,\mathrm N$ in checks.

</details>

### Q6: sliding down a rough plane

A block of mass $2\,\mathrm{kg}$ is released from rest on a fixed inclined plane where $\sin\alpha=1/4$. A constant frictional force of $2\,\mathrm N$ opposes its downward motion. Find its speed after moving $4\,\mathrm m$ down the plane, and the distance down the plane when its speed reaches $5\,\mathrm{m\,s^{-1}}$.

<details markdown="1">
<summary>Hint</summary>

After distance $s$, the vertical drop is $s/4$. The gain in KE is the PE lost minus $2s$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\frac12(2)v^2=2g\left(\frac s4\right)-2s=2.9s.$$

At $s=4$:

$$\boxed{v=\sqrt{11.6}\approx3.41\,\mathrm{m\,s^{-1}}}.$$

At $v=5$:

$$25=2.9s,\qquad \boxed{s\approx8.62\,\mathrm m}.$$

**Check:** the downhill resultant is $2g/4-2=2.9\,\mathrm N$, so $a=1.45\,\mathrm{m\,s^{-2}}$. Then $v^2=2as=2.9s$. Mechanical energy is not conserved here.

</details>

### Q7: vertical projection from above the ground

A ball is projected vertically upwards at $14.7\,\mathrm{m\,s^{-1}}$ from a point $1\,\mathrm m$ above the ground. Ignore air resistance. Find its greatest height above the ground and its speed just before hitting the ground.

<details markdown="1">
<summary>Hint</summary>

At the top, the ball is instantaneously at rest because this projection is vertical. Use the ground as a fixed zero level.

</details>

<details markdown="1">
<summary>Solution and check</summary>

At greatest height $H$:

$$\frac12m(14.7^2)+mg(1)=mgH.$$

$$\boxed{H=1+\frac{14.7^2}{2g}=12.025\,\mathrm m\approx12.0\,\mathrm m}.$$

At the ground:

$$\frac12mv^2=\frac12m(14.7^2)+mg(1).$$

$$\boxed{v=\sqrt{235.69}\approx15.4\,\mathrm{m\,s^{-1}}}.$$

**Check:** the impact speed exceeds the launch speed because the ground is below the launch point. The ball's velocity at impact is downwards; energy alone gives only its speed.

</details>

### Q8: two motions on a smooth wire

A bead is threaded on a smooth circular wire of radius $0.8\,\mathrm m$, fixed in a vertical plane. Ignore air resistance. (a) It is released from rest at a point level with the centre. Find its speed at the lowest point. (b) What initial speed at the lowest point gives just enough energy to rise through the full vertical height of the wire?

<details markdown="1">
<summary>Hint</summary>

The vertical drop in (a) is one radius. The vertical rise in (b) is two radii.

</details>

<details markdown="1">
<summary>Solution and check</summary>

**(a)** $\frac12mv^2=mg(0.8)$:

$$\boxed{v=\sqrt{15.68}\approx3.96\,\mathrm{m\,s^{-1}}}.$$

**(b)** $\frac12mu^2=mg(1.6)$:

$$\boxed{u=\sqrt{31.36}=5.6\,\mathrm{m\,s^{-1}}}.$$

**Check:** the mass cancels in both parts. The normal reaction does no work. The bead is threaded on the wire, so it remains constrained; a particle on an open track or a string would need a separate contact or tension check.

Part (b) gives the **limiting speed** for passing over the top. In this ideal model, the bead approaches the highest point with speed tending to zero at the threshold. A greater initial speed is needed to pass over it.

</details>

## Method Summary

- **Work:** name the force and use its component in the direction of motion. Distinguish work *by* resistance from work *against* resistance.
- **Power:** use $W/t$ for an average and $Dv$ for the driving force at an instant. Convert kW to W and km/h to m/s.
- **Vehicle motion:** combine $D=P/v$ with the force equation. Set $a=0$ only for steady speed.
- **Energy:** use speed for KE and a fixed vertical zero level for PE. Include weight in total work or include PE, counting gravity once.
- **Conservation:** check that other forces do no net work. With resistance, use mechanical energy lost equals work done against resistance.
- **Check the result:** signs, units, direction of motion, height above the chosen level and whether contact is maintained.

**Learning path:** [Previous: Projectiles](/alevel/a2-mathematics/mechanics/projectiles/) · [Next: Uniform Circular Motion](/alevel/a2-mathematics/mechanics/uniform-circular-motion/) · [Mechanics topic index](/alevel/a2-mathematics/mechanics/).
