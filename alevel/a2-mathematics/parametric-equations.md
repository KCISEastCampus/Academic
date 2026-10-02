---
title: Parametric Equations
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
permalink: /alevel/a2-mathematics/parametric-equations/
toc_headings: h2
study_page: true
---

[Pure Mathematics](/alevel/a2-mathematics/) · P2.3 Parametric Equations and P2.6 Differentiation

Describe a curve using a parameter, find its Cartesian equation and use parametric differentiation to find gradients.

- **Learning:** start with [Cartesian equations](#cartesian-equations), then study [sketching](#sketching-a-curve) and [differentiation](#parametric-differentiation).
- **Homework help:** find the parameter value first, then calculate both coordinates and the gradient.
- **Revision:** try [practice](#practice) with solutions closed, then check the [quick reference](#quick-reference).

Textbook: Chapter 5, Sections 5.6–5.7 (printed pp. 72–77).

**Before you start:** you should know straight-line equations, trigonometric identities and [Differentiation](/alevel/a2-mathematics/differentiation/).

All worked examples and practice questions are self-written, not official past-paper questions. The suggested practice time is a guide; no official marks are assigned.

## Cartesian Equations

In $x=f(t)$ and $y=g(t)$, the variable $t$ is the **parameter**. Each allowed value of $t$ gives a point $(x,y)$ on the curve.

To find a **Cartesian equation**, eliminate the parameter. Keep any restrictions on the coordinates: the equation alone may describe more of the curve than the given parameter range.

### Example 1: eliminate a parameter and keep the range

**Question:** Find the Cartesian equation for $x=t^2$, $y=2t+1$, where $t\geq0$.

From $y=2t+1$, $t=\frac{y-1}{2}$. Hence

$$\boxed{x=\frac{(y-1)^2}{4},\qquad y\geq1.}$$

Also $x\geq0$. The restriction $y\geq1$ selects the upper branch of the sideways parabola.

**Check:** $t=2$ gives $(4,5)$ and $(5-1)^2=4(4)$. The point $(4,-3)$ satisfies the equation but is excluded by the parameter range.

### Example 2: use a trigonometric identity

**Question:** Eliminate $\theta$ from $x=3\cos\theta$, $y=2\sin\theta$, where $0\leq\theta\leq\pi$.

Use $\cos^2\theta+\sin^2\theta=1$:

$$\boxed{\frac{x^2}{9}+\frac{y^2}{4}=1,\qquad y\geq0.}$$

This is the upper half of an ellipse. As $\theta$ increases, it runs from $(3,0)$ through $(0,2)$ to $(-3,0)$.

**Check:** the endpoints are included. The lower half is excluded because $\sin\theta\geq0$ on this interval.

### Example 3: keep an excluded point

**Question:** Find the Cartesian equation for

$$x=\frac{t}{1-t},\qquad y=\frac{t^2}{1-t},\qquad t\ne1.$$

Rearrange $x(1-t)=t$ to get $t=\frac{x}{1+x}$. The value $x=-1$ is impossible in the original equation. Since $y=tx$,

$$\boxed{y=\frac{x^2}{1+x},\qquad x\ne-1.}$$

Every real $x\ne-1$ gives an allowed $t=\frac{x}{1+x}$.

**Check:** $t=2$ gives $(-2,-4)$, which satisfies the Cartesian equation.

### From Cartesian to parametric form

You can often choose one coordinate as the parameter. For $y=x^2-1$ with $x\geq0$, use $x=t$, $y=t^2-1$, where $t\geq0$. Eliminating $t$ checks the result and its domain.

Another useful choice is $x=a\cos\theta$, $y=b\sin\theta$ for $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$, with $a,b>0$. The interval $0\leq\theta<2\pi$ covers the whole ellipse once. Restrict the parameter if the Cartesian curve includes only part of the ellipse.

## Sketching a Curve

Make a table of parameter values. Plot the corresponding points, find intercepts and restrictions, and show the direction as the parameter increases. A few points alone do not prove the full shape.

### Example 4: sketch both branches

**Question:** Describe the sketch of $x=t^2$, $y=t-2$, for all real $t$.

| $t$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
|---|---|---|---|---|---|
| $x$ | $4$ | $1$ | $0$ | $1$ | $4$ |
| $y$ | $-4$ | $-3$ | $-2$ | $-1$ | $0$ |

Eliminating $t$ gives $x=(y+2)^2$. This is a sideways parabola with vertex $(0,-2)$, opening to the right. It meets the $x$-axis at $(4,0)$.

As $t$ increases from negative values to zero, the point moves along the lower branch towards the vertex. For $t>0$, it moves away along the upper branch. Both branches are included, and $x\geq0$.

![A sideways parabola with arrows showing increasing parameter values](/assets/img/parametric-parabola.svg)

**Common mistake:** writing $y=\sqrt{x}-2$ keeps only $t\geq0$. For all real $t$, both signs are needed: $y=-2\pm\sqrt{x}$.

## Parametric Differentiation

Differentiate $x$ and $y$ separately with respect to the parameter. By the chain rule,

$$\frac{dy}{dt}=\frac{dy}{dx}\frac{dx}{dt},\qquad
\boxed{\frac{dy}{dx}=\frac{\frac{dy}{dt}}{\frac{dx}{dt}}},\qquad \frac{dx}{dt}\ne0.$$

Do not confuse $dy/dt$ with the gradient $dy/dx$.

- If $dy/dt=0$ and $dx/dt\ne0$, the tangent is horizontal: this is a stationary point.
- If $dx/dt=0$ and $dy/dt\ne0$, the tangent is vertical; the gradient is not finite.
- If both are zero, the quotient does not give the gradient. Check the curve or a limit before describing the tangent.

### Example 5: find a gradient and a vertical tangent

**Question:** For $x=t^2$, $y=t-2$, find the gradient at $t=1$ and the point where the gradient is $2$. Are there stationary points?

$$\frac{dx}{dt}=2t,\qquad \frac{dy}{dt}=1,\qquad \frac{dy}{dx}=\frac1{2t}\quad(t\ne0).$$

At $t=1$, the point is $(1,-1)$ and the gradient is $\boxed{\frac12}$.

For gradient $2$, $\frac1{2t}=2$ gives $t=\frac14$, so the point is $\boxed{\left(\frac1{16},-\frac74\right)}$.

There are no stationary points: $\frac1{2t}$ is never zero. At $t=0$, the vertex $(0,-2)$ has vertical tangent $\boxed{x=0}$ and horizontal normal $\boxed{y=-2}$.

**Check:** implicit differentiation of $x=(y+2)^2$ gives $1=2(y+2)\frac{dy}{dx}$, agreeing with the parametric result when $t\ne0$.

## Tangents and Normals

At parameter $t=a$, calculate the point $(x_0,y_0)$ and tangent gradient $m$. Use

$$y-y_0=m(x-x_0).$$

For a finite non-zero tangent gradient, the normal gradient is $-\frac1m$. A horizontal tangent has a vertical normal; a vertical tangent has a horizontal normal.

### Example 6: a normal and a second intersection

**Question:** Find the normal to $x=t^2$, $y=2t$ at $t=1$, then find where it meets the curve again.

The point is $(1,2)$ and $\frac{dy}{dx}=\frac{2}{2t}=\frac1t$. At $t=1$, the tangent gradient is $1$, so the normal is

$$y-2=-(x-1),\qquad \boxed{y=3-x}.$$

At intersections with the curve, substitute the parametric coordinates into this line:

$$2t=3-t^2\quad\Rightarrow\quad(t-1)(t+3)=0.$$

The root $t=1$ is the original point. The other root is $t=-3$, giving $\boxed{(9,-6)}$.

**Check:** $-6=3-9$. Find both coordinates from the same parameter value.

### Example 7: a tangent at a general point

**Question:** Find the tangent to $x=3\cos\theta$, $y=2\sin\theta$ at $\theta=\alpha$.

For $\sin\alpha\ne0$,

$$\frac{dy}{dx}=-\frac{2\cos\theta}{3\sin\theta},\qquad
y-2\sin\alpha=-\frac{2\cos\alpha}{3\sin\alpha}(x-3\cos\alpha).$$

Rearrange, then use $\sin^2\alpha+\cos^2\alpha=1$:

$$\boxed{\frac{x\cos\alpha}{3}+\frac{y\sin\alpha}{2}=1.}$$

The boxed form also covers $\sin\alpha=0$: at $\alpha=0$ the tangent is $x=3$, and at $\alpha=\pi$ it is $x=-3$. Check these vertical tangents separately rather than dividing by zero.

**Check:** substituting the point $(3\cos\alpha,2\sin\alpha)$ gives $1$ on the left. At $\alpha=\frac\pi2$, the tangent is $y=2$.

## Stationary Points

Solve $dy/dt=0$, check $dx/dt\ne0$, and substitute into both coordinates. To classify a point, examine $dy/dx$ on each side **as $x$ increases**. A change from negative to positive gives a local minimum; positive to negative gives a local maximum.

The OxfordAQA MA03 specification does not require second derivatives of parametric or implicit curves. Use the gradient's sign change here.

### Example 8: classify a stationary point

**Question:** Find and classify the stationary point of $x=t^3$, $y=(t+2)^2$.

$$\frac{dy}{dx}=\frac{2(t+2)}{3t^2}\quad(t\ne0).$$

The gradient is zero at $t=-2$, where $dx/dt=12\ne0$. The point is $\boxed{(-8,0)}$.

Near $t=-2$, $x=t^3$ increases as $t$ increases. The denominator $3t^2$ is positive, so the gradient is negative for $t<-2$ and positive for $t>-2$. This is a **local minimum**. At $t=0$, $(0,4)$ has a vertical tangent, not a stationary point.

**Check:** $y=(t+2)^2\geq0$, with equality only at $t=-2$.

## Practice

Allow about **30–40 minutes**. Keep the solutions closed on your first attempt.

### Question 1: Cartesian equation and restrictions

Eliminate $t$ from $x=2t^2$, $y=3t-1$, where $t\leq0$. Describe the part of the curve included.

<details markdown="1">
<summary>Hint</summary>

Solve the equation for $y$ to get $t$. Translate $t\leq0$ into a restriction on $y$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$t=\frac{y+1}{3}$, so $\boxed{x=\frac{2(y+1)^2}{9},\ y\leq-1}$. This is the lower branch of a sideways parabola, including its vertex $(0,-1)$; $x\geq0$.

At $t=-1$, $(x,y)=(2,-4)$, which satisfies the equation and restriction.

</details>

### Question 2: a restricted ellipse

For $x=4\cos\theta$, $y=3\sin\theta$, where $0\leq\theta\leq\frac\pi2$, find the Cartesian equation and describe the direction as $\theta$ increases.

<details markdown="1">
<summary>Hint</summary>

Use $\cos^2\theta+\sin^2\theta=1$ and calculate the endpoints.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$\boxed{\frac{x^2}{16}+\frac{y^2}{9}=1,\ x\geq0,\ y\geq0}$. The point moves along the first-quadrant arc from $(4,0)$ to $(0,3)$ as $\theta$ increases.

At $\theta=\frac\pi4$, the point $(2\sqrt2,\frac{3\sqrt2}{2})$ gives $\frac12+\frac12=1$.

</details>

### Question 3: tangent and normal

For $x=t^2+1$, $y=t^3$, find the tangent and normal at $t=2$.

<details markdown="1">
<summary>Hint</summary>

Find the point and divide $dy/dt$ by $dx/dt$ before substituting $t=2$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The point is $(5,8)$ and $\frac{dy}{dx}=\frac{3t^2}{2t}=\frac{3t}{2}$ for $t\ne0$. The tangent gradient is $3$, giving $\boxed{y-8=3(x-5)}$.

The normal is $\boxed{y-8=-\frac13(x-5)}$. Both lines contain $(5,8)$ and their gradients have product $-1$.

</details>

### Question 4: stationary points

Find and classify the stationary points of $x=t$, $y=t^3-3t$.

<details markdown="1">
<summary>Hint</summary>

Find $dy/dx$ and check its sign on each side of each stationary point. Give coordinates, not just parameter values.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$\frac{dy}{dx}=3t^2-3=0$ gives $t=\pm1$. Since $x=t$, increasing $t$ increases $x$, and both points are valid stationary points.

$\boxed{(-1,2)}$ is a local maximum; $\boxed{(1,-2)}$ is a local minimum. The gradient changes from positive to negative at $x=-1$ and from negative to positive at $x=1$.

</details>

### Question 5: two zero derivatives

For $x=t^3$, $y=t^3$, find the tangent at $t=0$. Explain why direct substitution into the derivative quotient is insufficient.

<details markdown="1">
<summary>Hint</summary>

Eliminate $t$, or examine the gradient for $t\ne0$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Both $dx/dt$ and $dy/dt$ are zero at $t=0$, so the quotient gives the undefined expression $0/0$.

The Cartesian equation is $y=x$, for all real $x$. Hence the tangent at $(0,0)$ is $\boxed{y=x}$, with gradient $1$. For $t\ne0$, the quotient is $3t^2/(3t^2)=1$, agreeing with this result. The point is not stationary.

</details>

### Question 6: another intersection

For $x=t^2$, $y=4t$, find the normal at $t=1$ and its other intersection with the curve.

<details markdown="1">
<summary>Hint</summary>

After finding the normal, substitute $x=t^2$, $y=4t$ into it and remove the root for the original point.

</details>

<details markdown="1">
<summary>Solution and check</summary>

At $(1,4)$, $\frac{dy}{dx}=\frac2t=2$, so the normal is $\boxed{y-4=-\frac12(x-1)}$.

Substitution gives $8t=9-t^2$, so $(t-1)(t+9)=0$. The other parameter value is $t=-9$, giving $\boxed{(81,-36)}$.

Check: $-36-4=-\frac12(81-1)=-40$.

</details>

## Quick Reference

| Task | Method | Check |
|---|---|---|
| Cartesian equation | Eliminate the parameter by substitution or an identity | Keep restrictions and excluded values |
| Sketch | Plot points, find intercepts and use the Cartesian equation | Show direction as the parameter increases |
| Gradient | $(dy/dt)/(dx/dt)$ | Check $dx/dt\ne0$ |
| Tangent or normal | Calculate the point and gradient | Treat vertical and horizontal lines separately |
| Stationary point | Solve $dy/dt=0$ with $dx/dt\ne0$ | Give both coordinates and classify |
| Further intersection | Substitute parametric coordinates into the line equation | Exclude the original point and check the parameter range |

**You should be able to:** eliminate a parameter, sketch the allowed curve, find gradients, tangents and normals, and find and classify stationary points.

**Learning path:** [Previous: Differentiation](/alevel/a2-mathematics/differentiation/) · [Next: Integration — Choosing a Method](/alevel/a2-mathematics/integration/) · [Return to the Pure Mathematics topic index](/alevel/a2-mathematics/).
