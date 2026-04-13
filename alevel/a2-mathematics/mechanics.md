---
layout: subjects
title: A2 Math - Mechanics
mathjax: true
grade: a2
subject: m2
permalink: /alevel/a2-mathematics/mechanics/
---

# M2 (Mechanics)

## M2.1: Mathematical Modelling

### Key Concepts
- **Modelling**: Simplifying real-world situations to make them mathematically tractable.
- **Assumptions**: Used to reduce complexity (e.g., treating objects as particles, strings as light and inextensible).
- **Interpretation**: Understanding the limitations and validity of a model.

### Common Modelling Assumptions

| Assumption | Implication |
|------------|-------------|
| Particle | Mass concentrated at a point; no rotation; air resistance ignored |
| Light | Mass of string/rod is zero → tension constant along it |
| Inextensible | Length of string/rod does not change → acceleration same for connected particles |
| Smooth | No friction; reaction force is perpendicular to surface |
| Rough | Friction acts; $F \leq \mu R$ |
| Gravity | $g = 9.8 \text{ ms}^{-2}$ downward |

---

## M2.2: Kinematics

### Variable Acceleration in 1D, 2D, and 3D

Given position vector $\mathbf{r} = f(t)\mathbf{i} + g(t)\mathbf{j} + h(t)\mathbf{k}$:

| Quantity | Formula |
|----------|---------|
| Velocity | $\mathbf{v} = \frac{d\mathbf{r}}{dt} = f^{\prime}(t)\mathbf{i} + g^{\prime}(t)\mathbf{j} + h^{\prime}(t)\mathbf{k}$ |
| Acceleration | $\mathbf{a} = \frac{d\mathbf{v}}{dt} = f^{\prime\prime}(t)\mathbf{i} + g^{\prime\prime}(t)\mathbf{j} + h^{\prime\prime}(t)\mathbf{k}$ |

**Integration:**
- $\mathbf{v} = \int \mathbf{a} \, dt$
- $\mathbf{r} = \int \mathbf{v} \, dt$

### Example
A particle moves with acceleration $\mathbf{a} = 6t\mathbf{i} + 2\mathbf{j}$. At $t=0$, $\mathbf{v} = \mathbf{0}$ and $\mathbf{r} = \mathbf{0}$. Find $\mathbf{v}$ and $\mathbf{r}$ at time $t$.

**Solution:**
$$\mathbf{v} = \int \mathbf{a} \, dt = \int (6t\mathbf{i} + 2\mathbf{j}) dt = 3t^2\mathbf{i} + 2t\mathbf{j} + \mathbf{c}$$
Using $\mathbf{v}(0) = \mathbf{0}$ ⇒ $\mathbf{c} = \mathbf{0}$ ⇒ $\mathbf{v} = 3t^2\mathbf{i} + 2t\mathbf{j}$

$$\mathbf{r} = \int \mathbf{v} \, dt = \int (3t^2\mathbf{i} + 2t\mathbf{j}) dt = t^3\mathbf{i} + t^2\mathbf{j} + \mathbf{d}$$
Using $\mathbf{r}(0) = \mathbf{0}$ ⇒ $\mathbf{d} = \mathbf{0}$ ⇒ $\mathbf{r} = t^3\mathbf{i} + t^2\mathbf{j}$

---

## M2.3: Statics and Forces

### Force Diagrams
- Identify all forces: weight ($mg$), tension ($T$), thrust, normal reaction ($R$), friction ($F$), applied forces.
- Label clearly.

### Equilibrium Conditions
For a body in equilibrium:
- **Translational equilibrium**: $\sum \mathbf{F} = 0$ (resultant force = 0)
- **Rotational equilibrium**: $\sum \text{moments} = 0$ (about any point)

### Friction
- **Limiting friction**: $F_{\text{max}} = \mu R$
- $F \leq \mu R$ (friction adjusts to prevent motion)

### Moments
- **Moment of a force about a point**: $M = Fd$ where $d$ is perpendicular distance from point to line of action.
- Sign convention: clockwise / anticlockwise.

### Rigid Bodies in Equilibrium
- For a rigid body: $\sum F_x = 0$, $\sum F_y = 0$, $\sum M = 0$.

### Centres of Mass

| Shape | Centre of Mass |
|-------|----------------|
| Uniform rod | Midpoint |
| Uniform rectangular lamina | Intersection of diagonals |
| Uniform circular lamina | Centre of circle |
| Uniform triangular lamina | Centroid (intersection of medians) |

**System of particles:**
$$\bar{x} = \frac{\sum m_i x_i}{\sum m_i}, \quad \bar{y} = \frac{\sum m_i y_i}{\sum m_i}$$

**Composite bodies:** Find centre of mass by treating as sum of parts (subtract holes).

### Exam-style Question

#### Equilibrium
<img src="/assets/img/MA05_example_q1.png" alt="Statics Example" style="width:500px; max-width:100%; height:auto;" />
A uniform rod $AB$, of length $2a$, is resting with its end $A$ on rough horizontal ground and a point $T$ on the rod in contact with a rough fixed prism of semicircular cross-section, of radius $a$. The rod lies in a vertical plane which is perpendicular to the axis of the prism, as shown in the figure above.

The coefficient of friction between the rod and the ground at $A$ and between the rod and the prism at $T$ is $\mu$, where $0 < \mu < 1$.

When the rod is inclined at an angle $\theta$ to the horizontal, where $\tan \theta = \frac{3}{4}$, the rod is at the point of slipping.

Determine the value of $\mu$.

#### Centre of Mass


A composite uniform lamina is modelled by the finite region bounded by two circular discs, shown shaded in the figure above. The details, of the sizes and relative positions of these discs, are as follows.

The straight line $POQ$ is a diameter of the larger circular disc, of radius $12a$, whose centre is at the point $O$. The smaller circular disc, of radius $6a$, has its centre at O', so that $O'$ lies on $OQ$ with $\lVert O'Q \rVert = 9a$.

A heavy particle is attached to the lamina at $Q$.

The straight line $XOY$ is perpendicular to $POQ$.

When the lamina is freely suspended from $X$ and hangs in equilibrium, with $P$ higher than $Q$, $POQ$ is inclined at $\arctan\frac{5}{12}$ to the horizontal.

Determine the ratio of the mass of the particle to the mass of the lamina.

#### Circular Motion
![Question](assets/img/MA05-circular-motion.png)
A car moving with constant speed $v$ in a horizontal circle of centre $O$ and radius $r$ on a road banked at angle $\theta$ to the horizontal.
The car has width $|AB|=2d$, centre of mass $G$ is the midpoint of $AB$ and at height $h$ above the ground.
The car is at the point of toppling about $G$ in an "up the bend" direction.
Show that
$$v^{2}=\frac{r g(d+h \tan \theta)}{h-d \tan \theta}$$

##### Solution

1. Vertical equilibrium:
   $$N\cos\theta = mg$$

2. Horizontal centripetal force:
   $$N\sin\theta = \frac{mv^2}{r}$$

3. Moment equilibrium about tipping point:
   $$N\cdot d = mg\cdot h\tan\theta + \frac{mv^2}{r}\cdot h$$

4. Substitute $N=\frac{mg}{\cos\theta}$:
   $$\frac{mgd}{\cos\theta}=mgh\tan\theta+\frac{mhv^2}{r}$$

5. Divide by $m$ and rearrange:
   $$
   \begin{align*}
   \frac{gd}{\cos\theta}-gh\tan\theta &= \frac{hv^2}{r} \\\\
   \frac{g(d-h\sin\theta)}{\cos\theta} &= \frac{hv^2}{r} \\\\
   v^2 &= \frac{rg(d+h\tan\theta)}{h-d\tan\theta}
   \end{align*}
   $$

#### Projectile Motion
A particle is projected at an angle $\alpha$ above the horizontal, from a vertical cliff face of height $H$ above level horizontal ground. It first hits the ground at a horizontal distance $D$, from the bottom of the cliff edge.

Assuming that air resistance can be ignored, show that the greatest height achieved by the particle from the level horizontal ground is
$$H + \frac{D^2 \tan^2 \alpha}{4(H + D \tan \alpha)}.$$

##### Solution
1. Let the initial speed be $u$.
Horizontal motion:
$$D = u \cos\alpha \cdot t \implies t = \frac{D}{u \cos\alpha}$$
Vertical motion (displacement $-H$, acceleration $-g$):
$$-H = u \sin\alpha \cdot t - \frac{1}{2} g t^2$$

2. Substitute $t = \frac{D}{u \cos\alpha}$ into the vertical equation:
$$-H = D \tan\alpha - \frac{g D^2}{2 u^2 \cos^2\alpha}$$
Rearrange for $u^2$:
$$u^2 = \frac{g D^2}{2 (H + D \tan\alpha) \cos^2\alpha}$$

3. Maximum height above projection point: $\frac{(u \sin\alpha)^2}{2g}$, so total height above ground:
$$h_{\text{max}} = H + \frac{u^2 \sin^2\alpha}{2g}$$

4. Substitute $u^2$ and simplify:
$$h_{\text{max}} = H + \frac{1}{2g} \cdot \frac{g D^2}{2 (H + D \tan\alpha) \cos^2\alpha} \cdot \sin^2\alpha$$
$$h_{\text{max}} = H + \frac{D^2 \tan^2\alpha}{4(H + D \tan\alpha)}$$

#### Centres of Mass
A composite uniform lamina is modelled by the finite region bounded by two circular discs, shown shaded in the figure above. The details, of the sizes and relative positions of these discs, are as follows.

The straight line $POQ$ is a diameter of the larger circular disc, of radius $12a$, whose centre is at the point $O$. The smaller circular disc, of radius $6a$, has its centre at $O'$, so that $O'$ lies on $OQ$ with $\lVert O'Q\rVert=9a$.

A heavy particle is attached to the lamina at $Q$.

The straight line $XOY$ is perpendicular to $POQ$.

When the lamina is freely suspended from $X$ and hangs in equilibrium, with $P$ higher than $Q$, $POQ$ is inclined at $\arctan\frac{5}{12}$ to the horizontal.

Determine the ratio of the mass of the particle to the mass of the lamina.

##### Solution
1.  Set coordinate system with $O$ as origin, $POQ$ as $x$-axis, $XOY$ as $y$-axis:
    $P(-12a,0)$, $Q(12a,0)$, $X(0,12a)$, $O'(3a,0)$ (since $|O'Q|=9a$).

2.  Calculate mass and centroid of the lamina:
    - Larger disc: mass $m_1 = 144\rho\pi a^2$, centroid $(0,0)$.
    - Smaller disc (removed): mass $-m_2 = -36\rho\pi a^2$, centroid $(3a,0)$.
    - Total mass of lamina: $M = m_1 - m_2 = 108\rho\pi a^2$.
    - Centroid of lamina:
    $$x_L = \frac{m_1 x_1 - m_2 x_2}{m_1 - m_2} = \frac{0 - 36\cdot 3a}{144-36} = -a, \quad y_L=0$$

3.  Let mass of particle be $m$ at $Q(12a,0)$. Total centroid of system:
    $$\bar{x} = \frac{M x_L + m x_Q}{M + m} = \frac{-Ma + 12am}{M + m}, \quad \bar{y}=0$$

4.  Equilibrium condition: centroid lies vertically below $X$.
    Given $\theta = \arctan\frac{5}{12}$, so $\tan\theta=\frac{5}{12}$, $\cos\theta=\frac{12}{13}$, $\sin\theta=\frac{5}{13}$.
    Horizontal coordinate of $X$ in global frame: $X'_X = 0\cdot\cos\theta + 12a\cdot\sin\theta = \frac{60a}{13}$.
    Horizontal coordinate of centroid: $X'_G = \bar{x}\cdot\cos\theta + 0\cdot\sin\theta = \frac{12\bar{x}}{13}$.
    Equate: $\frac{12\bar{x}}{13} = \frac{60a}{13} \implies \bar{x}=5a$.

5.  Solve for ratio $\frac{m}{M}$:
    $$\frac{-Ma + 12am}{M + m} = 5a$$
    $$\frac{-M + 12m}{M + m} = 5$$
    $$-M + 12m = 5M + 5m$$
    $$7m = 6M$$
    $$\frac{m}{M} = \frac{6}{7}$$

**Answer:** $\boxed{\dfrac{6}{7}}$

---

## M2.4: Newton’s Laws of Motion

### Newton’s Second Law
$$\mathbf{F} = m\mathbf{a}$$

### Applications

**1. Linear motion with constant acceleration (inclined planes):**
- Resolve parallel and perpendicular to plane.
- $mg \sin\theta$ down the plane; $R = mg \cos\theta$; friction $F = \mu R$ if moving.

**2. Variable acceleration:**
- Use $F = m \frac{dv}{dt} = m v \frac{dv}{ds}$

**3. Motion in 2D/3D:**
- Apply $\mathbf{F} = m\mathbf{a}$ component-wise.

### Example
A particle of mass 2 kg moves under force $\mathbf{F} = (4t)\mathbf{i} + 6\mathbf{j}$ N. Find acceleration at $t = 2$ s.

**Solution:**
$$\mathbf{a} = \frac{\mathbf{F}}{m} = \frac{4t}{2}\mathbf{i} + \frac{6}{2}\mathbf{j} = 2t\mathbf{i} + 3\mathbf{j}$$

At $t = 2$: $\mathbf{a} = 4\mathbf{i} + 3\mathbf{j}$ ms⁻²

---

## M2.5: Projectiles

### Assumptions
- Particle moves under constant gravity $g$ downwards.
- Air resistance ignored.
- Motion in vertical plane.

### Equations of Motion (from $t=0$)
Initial velocity $V$ at angle $\alpha$ above horizontal:
$$u_x = V\cos\alpha,\quad u_y = V\sin\alpha$$

| Component | Equation |
|-----------|----------|
| Horizontal | $x = (V\cos\alpha)t$ |
| Vertical | $y = (V\sin\alpha)t - \frac{1}{2}gt^2$ |

### Key Quantities

| Quantity | Formula |
|----------|---------|
| Time of flight | $T = \frac{2V\sin\alpha}{g}$ |
| Maximum height | $H = \frac{V^2\sin^2\alpha}{2g}$ |
| Range (horizontal) | $R = \frac{V^2\sin 2\alpha}{g}$ |

### Equation of Trajectory
Eliminate $t$:
$$y = x\tan\alpha - \frac{gx^2}{2V^2\cos^2\alpha}$$

### Example
A projectile is launched at 20 ms⁻¹ at 30° to horizontal. Find its range.

$$R = \frac{20^2 \times \sin 60°}{9.8} = \frac{400 \times \frac{\sqrt{3}}{2}}{9.8} = \frac{200\sqrt{3}}{9.8} \approx 35.3 \text{ m}$$

---

## M2.6: Work and Energy

### Work Done
- By constant force $\mathbf{F}$ over displacement $\mathbf{d}$:
  $$W = \mathbf{F} \cdot \mathbf{d} = Fd\cos\theta$$
- Units: Joules (J)

### Kinetic Energy
$$KE = \frac{1}{2}mv^2$$

### Gravitational Potential Energy (near Earth’s surface)
$$GPE = mgh$$

### Work-Energy Principle
$$W_{\text{total}} = \Delta KE = KE_{\text{final}} - KE_{\text{initial}}$$

### Conservation of Mechanical Energy (no non-conservative forces)
$$KE_{\text{initial}} + GPE_{\text{initial}} = KE_{\text{final}} + GPE_{\text{final}}$$

### Power
$$P = \frac{W}{t} = Fv$$
- $P$ = power (Watts), $F$ = force in direction of motion, $v$ = velocity

---

## M2.7: Uniform Circular Motion

### Key Relationships
For a particle moving in a circle of radius $r$ with constant angular speed $\omega$:

| Quantity | Formula |
|----------|---------|
| Linear speed | $v = r\omega$ |
| Centripetal acceleration | $a = r\omega^2 = \frac{v^2}{r}$ |
| Centripetal force | $F = m a = m r\omega^2 = \frac{mv^2}{r}$ |

### Direction
- Centripetal acceleration always points towards centre of circle.
- Centripetal force is provided by tension, friction, gravity, normal reaction, etc.

### Conical Pendulum
![Conical Pendulum](/assets/img/MA05_Conical_Pendulum.jpg)
A particle of mass $m$ on a string of length $L$, moving in horizontal circle with angle $\theta$ to vertical.

**Vertical equilibrium:** $T\cos\theta = mg$  
**Horizontal circular motion:** $T\sin\theta = m r \omega^2$ where $r = L\sin\theta$

Eliminating $T$:
$$\tan\theta = \frac{r\omega^2}{g} \quad \text{or} \quad \omega = \sqrt{\frac{g}{L\cos\theta}}$$

### Example
A particle moves in a horizontal circle of radius 0.5 m at 4 ms⁻¹. Find its centripetal acceleration and the time for one revolution.

$$a = \frac{v^2}{r} = \frac{4^2}{0.5} = 32 \text{ ms}^{-2}$$

$$\omega = \frac{v}{r} = \frac{4}{0.5} = 8 \text{ rad s}^{-1}$$

$$T = \frac{2\pi}{\omega} = \frac{2\pi}{8} = \frac{\pi}{4} \text{ s}$$

---

## Key Formulae Summary

| Topic | Formula |
|-------|---------|
| Kinematics (vector) | $\mathbf{v} = \frac{d\mathbf{r}}{dt}$, $\mathbf{a} = \frac{d\mathbf{v}}{dt}$ |
| Friction (limiting) | $F_{\text{max}} = \mu R$ |
| Moment | $M = Fd$ |
| Centre of mass (particles) | $\bar{x} = \frac{\sum m_i x_i}{\sum m_i}$ |
| Projectile range | $R = \frac{V^2\sin 2\alpha}{g}$ |
| Projectile max height | $H = \frac{V^2\sin^2\alpha}{2g}$ |
| Work | $W = Fd\cos\theta$ |
| Kinetic energy | $KE = \frac{1}{2}mv^2$ |
| Power | $P = Fv$ |
| Circular motion | $a = \frac{v^2}{r} = r\omega^2$ |