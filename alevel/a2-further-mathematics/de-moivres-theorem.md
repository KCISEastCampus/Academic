---
title: De Moivre's Theorem
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
permalink: /alevel/a2-further-mathematics/de-moivres-theorem/
toc_headings: "#powers-and-proof, #complex-roots, #roots-of-unity, #trigonometric-identities, #integration, #practice, #diagnose-and-retry, #later-review, #method, #quick-reference"
study_page: true
reading_layout: true
---

[Further Pure Mathematics](/alevel/a2-further-mathematics/) · FP2.2 De Moivre's theorem

Find powers and roots of complex numbers. Use the same theorem to prove trigonometric identities and evaluate integrals.

- **Learning:** start with [one concrete square](#first-square), then read [the general result and proof](#powers-and-proof).
- **Homework help:** choose [powers and proof](#powers-and-proof), [complex roots](#complex-roots), [roots of unity](#roots-of-unity), [trigonometric identities](#trigonometric-identities) or [integration](#integration).
- **Revision:** try [practice](#practice) before opening the solutions, then use the [quick reference](#quick-reference).

Textbook: Chapter 20, Sections 20.1–20.3, printed pp. 234–252; review and practice on pp. 253–254, in *International A Level Further Mathematics*.

**Before you start:** recover quadrant choices at [AS modulus and argument](/alevel/as-further-mathematics/complex-numbers-and-roots/#geometry) and reciprocal arithmetic at [conjugates](/alevel/as-further-mathematics/complex-numbers-and-roots/#conjugate). For proof, revisit the [induction hypothesis and step](/alevel/a2-further-mathematics/proof-by-induction/#method); for the product, revisit [compound-angle formulae](/alevel/a2-mathematics/trigonometric-functions-and-formulae/#compound-angle-formulae). Before integrating, recover [trigonometric integrals](/alevel/a2-mathematics/integration/#trigonometric-integrals) and [exponential integrals](/alevel/a2-mathematics/integration/#exponential-logarithmic-integrals), then return to [Examples 9–10](#integration) and check each inner coefficient. You also need the binomial theorem. Use **radians** throughout.

**Task status:** Unless an official question or teaching adaptation is explicitly identified, the worked examples and exercises are self-written teaching tasks with no official marks.

**Learning goal:** use De Moivre's theorem for integer powers, find every complex root, explain their positions on an Argand diagram and use complex numbers to obtain trigonometric results.

## Powers and Proof

<section class="worked-example" markdown="1">

### Start by squaring {#first-square}

**Self-written illustration; no official marks.** Calculate $(1+i)^2$ and describe its position on an Argand diagram.

Use ordinary multiplication first:

$$(1+i)^2=1+2i+i^2=2i.$$

The number $1+i$ is a distance $\sqrt2$ from the origin, at an angle $\pi/4$ from the positive real axis. The number $2i$ lies on the positive imaginary axis, at distance $2$ and angle $\pi/2$. In this square, the distance has been squared and the angle has doubled. These distances are the **moduli** and these angles are the **arguments**.

</section>

How does multiplication produce this change? First use modulus $1$, expand the square and apply the double-angle formulae:

$$\begin{aligned}
&(\cos\theta+i\sin\theta)^2\\
&=\cos^2\theta-\sin^2\theta+2i\sin\theta\cos\theta\\
&=\cos2\theta+i\sin2\theta.
\end{aligned}$$

If the original modulus is $r$, the outside factor $r$ is also squared to $r^2$. Squaring gives one case; the proof below establishes the result for all integer powers.

For every integer $n$,

$$\boxed{\begin{aligned}
&(\cos\theta+i\sin\theta)^n\\
&\quad=\cos n\theta+i\sin n\theta.
\end{aligned}}$$

This is **De Moivre's theorem**. If $z=r(\cos\theta+i\sin\theta)$ with $r>0$, then

$$\boxed{z^n=r^n(\cos n\theta+i\sin n\theta).}$$

The modulus is positive. The argument must place the number in the correct quadrant: knowing $\tan\theta$ alone does not decide the quadrant.

### Proof for positive integers

For $n=1$, both sides are $\cos\theta+i\sin\theta$.

Assume that the result is true for $n=k$, where $k$ is any positive integer. Then

$$\begin{aligned}
&(\cos\theta+i\sin\theta)^{k+1}\\
&\quad=(\cos k\theta+i\sin k\theta)
       (\cos\theta+i\sin\theta).
\end{aligned}$$

The real part of the product is

$$\cos k\theta\cos\theta-\sin k\theta\sin\theta
=\cos((k+1)\theta).$$

The imaginary part is

$$\sin k\theta\cos\theta+\cos k\theta\sin\theta
=\sin((k+1)\theta).$$

The result is true for $n=1$. If it is true for $n=k$, it is true for $n=k+1$. Therefore it is true for all positive integers $n$ by mathematical induction.

### Zero and negative integers

For $n=0$, both sides are $1$.

For $n=-m$, where $m$ is a positive integer, use the reciprocal:

$$\begin{aligned}
&(\cos\theta+i\sin\theta)^{-m}\\
&\quad=\frac1{\cos m\theta+i\sin m\theta}\\
&\quad=\cos m\theta-i\sin m\theta\\
&\quad=\cos(-m\theta)+i\sin(-m\theta).
\end{aligned}$$

The denominator becomes $1$ when we multiply by the conjugate, since $\cos^2m\theta+\sin^2m\theta=1$.

**Common mistake:** using the integer-power formula with a fractional power and giving only one root. To find all roots, use the method in [Complex Roots](#complex-roots).

### Exponential form

You may use the identity

$$e^{i\theta}=\cos\theta+i\sin\theta.$$

Thus $z=re^{i\theta}$ is the **exponential form** of a complex number. It gives

$$\begin{aligned}
(re^{i\theta})^n&=r^ne^{in\theta},\\
(r_1e^{i\theta_1})(r_2e^{i\theta_2})
&=r_1r_2e^{i(\theta_1+\theta_2)}.
\end{aligned}$$

For a product, multiply the moduli and add the arguments. For a quotient, divide the moduli and subtract the arguments. Arguments that differ by an integer multiple of $2\pi$ represent the same number.

When a **principal argument** is requested, use the range $-\pi<\theta\le\pi$.

<section class="worked-example" markdown="1">

### Example 1 — A power and its argument

**Question:** express $(1-i)^6$ in $a+ib$ form.

The modulus of $1-i$ is $\sqrt2$. Its argument is $-\frac\pi4$, since it lies in the fourth quadrant.

$$\begin{aligned}
1-i&=\sqrt2e^{-i\pi/4},\\
(1-i)^6&=(\sqrt2)^6e^{-3i\pi/2}\\
&=8\left(\cos\frac{3\pi}{2}-i\sin\frac{3\pi}{2}\right)\\
&=\boxed{8i}.
\end{aligned}$$

**Check:** $(1-i)^2=-2i$, so $(1-i)^6=(-2i)^3=8i$. The final modulus is $(\sqrt2)^6=8$.

</section>

<section class="worked-example" markdown="1">

### Example 2 — A negative power

**Question:** find $(\sqrt3+i)^{-3}$ in $a+ib$ form.

Since $\sqrt3+i=2e^{i\pi/6}$,

$$\begin{aligned}
(\sqrt3+i)^{-3}
&=2^{-3}e^{-i\pi/2}\\
&=\boxed{-\frac{i}{8}}.
\end{aligned}$$

**Check:** $(\sqrt3+i)^3=8i$, and $\frac1{8i}=-\frac i8$. A negative power changes the modulus as well as the argument.

</section>

<span id="roots"></span>

## Complex Roots

To solve $z^n=Re^{i\theta}$, where $R>0$ and $n$ is a positive integer, write $z=\rho e^{i\phi}$. Equating moduli and arguments gives

$$\rho^n=R,\qquad n\phi=\theta+2k\pi.$$

Hence all the roots are

$$\boxed{\begin{aligned}
z_k&=R^{1/n}e^{i(\theta+2k\pi)/n},\\
k&=0,1,\ldots,n-1.
\end{aligned}}$$

There are **$n$ different roots**. They lie on a circle centred at the origin, with radius $R^{1/n}$ and equal angular spacing $\frac{2\pi}{n}$. For $n\ge3$, they form a regular polygon on an Argand diagram.

If $R=0$, the equation is $z^n=0$ and its only distinct root is $0$. The argument method is for a non-zero right-hand side.

**Common mistake:** adding $2\pi$ after dividing the argument. Adjacent roots differ by $\frac{2\pi}{n}$, not by $2\pi$.

<section class="worked-example" markdown="1">

### Example 3 — Three roots and an Argand diagram

**Question:** solve $z^3=8i$. Give the roots in $a+ib$ form and describe their positions.

Write $8i=8e^{i\pi/2}$. Each root has modulus $8^{1/3}=2$, with arguments

$$\frac{\pi/2+2k\pi}{3}
=\frac\pi6+\frac{2k\pi}{3},
\qquad k=0,1,2.$$

The three arguments are $\frac\pi6$, $\frac{5\pi}{6}$ and $\frac{3\pi}{2}$. So

$$\boxed{\begin{aligned}
z_0&=\sqrt3+i,\\
z_1&=-\sqrt3+i,\\
z_2&=-2i.
\end{aligned}}$$

![Argand diagram of the three roots of z cubed equals 8i: root coordinates are square root of 3 plus i, minus square root of 3 plus i, and minus 2i, on a circle of radius 2](/assets/img/further-complex-roots.svg)

The roots form an equilateral triangle on the circle $\lvert z\rvert=2$. The angle between adjacent roots is $\frac{2\pi}{3}$. If principal arguments are requested, write the last argument as $-\frac\pi2$.

**Check:** cubing any root gives modulus $8$ and argument $\frac\pi2$ modulo $2\pi$. Also, the three roots add to zero.

</section>

<section class="lesson-check" markdown="1">

### Complete a root calculation {#supported-root-arguments}

**Supported attempt (self-written):** For $v^2=-4i$, complete the modulus equation and the argument equation before listing the two roots. Explain why taking just the principal argument after division loses a root.

<details markdown="1">
<summary>Hint</summary>

Use $-4i=4e^{-i\pi/2}$ and include full turns before dividing.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\begin{aligned}
\lvert v\rvert^2&=4,\qquad 2\arg v=-\frac\pi2+2k\pi,\\
v_k&=2e^{i(-\pi/4+k\pi)},\quad k=0,1,\\
v&=\sqrt2-i\sqrt2,\quad-\sqrt2+i\sqrt2.
\end{aligned}$$

A full turn on the right becomes a half turn after division by two, giving a different root.

</details>

</section>

<section class="worked-example" markdown="1">

### Example 4 — An exact trigonometric value from square roots

**Question:** solve $z^2=\sqrt3+i$, and hence find $\cos\frac\pi{12}$ in surd form.

The right-hand side has modulus $2$ and argument $\frac\pi6$. The roots are

$$\sqrt2e^{i\pi/12}
\quad\text{and}\quad
\sqrt2e^{i13\pi/12}.$$

To find their Cartesian form, put $z=a+ib$. Then

$$a^2-b^2=\sqrt3,\qquad 2ab=1.$$

Also, $\lvert z\rvert=\sqrt2$, so $a^2+b^2=2$. Adding and subtracting gives

$$a^2=\frac{2+\sqrt3}{2},
\qquad b^2=\frac{2-\sqrt3}{2}.$$

The root with argument $\frac\pi{12}$ is in the first quadrant. Therefore

$$a=\frac{\sqrt3+1}{2},
\qquad b=\frac{\sqrt3-1}{2}.$$

To see the surd simplification, square these positive candidates:

$$\left(\frac{\sqrt3\pm1}{2}\right)^2
=\frac{4\pm2\sqrt3}{4}=\frac{2\pm\sqrt3}{2}.$$

Both signs change for the other root:

$$\boxed{z=\pm\left(\frac{\sqrt3+1}{2}
+i\frac{\sqrt3-1}{2}\right).}$$

For the first root, $a=\sqrt2\cos\frac\pi{12}$. Hence

$$\begin{aligned}
\cos\frac\pi{12}&=\frac{a}{\sqrt2}
=\frac{\sqrt3+1}{2\sqrt2}
=\frac{\sqrt2(\sqrt3+1)}4
=\boxed{\frac{\sqrt6+\sqrt2}{4}}.
\end{aligned}$$

**Check:** $a^2-b^2=\sqrt3$ and $2ab=1$. The positive signs are chosen from the quadrant, not from the square-root equations alone.

</section>

## Roots of Unity

The **$n$th roots of unity** are the solutions of $z^n=1$. They are

$$\boxed{z_k=e^{2k\pi i/n},
\qquad k=0,1,\ldots,n-1.}$$

Let $\omega=e^{2\pi i/n}$. The roots can also be written as $1,\omega,\omega^2,\ldots,\omega^{n-1}$.

They lie on the unit circle and have equal angular spacing $\frac{2\pi}{n}$. For $n>1$, their sum is zero:

$$1+\omega+\omega^2+\cdots+\omega^{n-1}
=\frac{1-\omega^n}{1-\omega}=0.$$

Here $\omega^n=1$ and $\omega\ne1$. Do not use the fraction when the denominator is zero.

<section class="worked-example" markdown="1">

### Example 5 — A cosine sum

**Question:** use the fifth roots of unity to show that

$$\cos\frac{2\pi}{5}+\cos\frac{4\pi}{5}
=-\frac12.$$

Set $\omega=e^{2\pi i/5}$. The sum of the roots is zero:

$$1+\omega+\omega^2+\omega^3+\omega^4=0.$$

Pair the conjugates, using $\omega^4=\omega^{-1}$ and $\omega^3=\omega^{-2}$:

$$\begin{aligned}
\omega+\omega^4&=2\cos\frac{2\pi}{5},\\
\omega^2+\omega^3&=2\cos\frac{4\pi}{5}.
\end{aligned}$$

Therefore

$$1+2\cos\frac{2\pi}{5}+2\cos\frac{4\pi}{5}=0,$$

which gives the required result.

**Check:** the sum of the imaginary parts is also zero, because each conjugate pair has opposite imaginary parts.

</section>

<section class="worked-example" markdown="1">

### Example 6 — Powers on both sides of an equation

**Question:** solve $16z^4=(z-1)^4$.

First check $z=0$: it gives $0=1$, so it is not a solution. We can divide by $16z^4$:

$$\left(\frac{z-1}{2z}\right)^4=1.$$

Thus $\frac{z-1}{2z}$ can be any of the fourth roots of unity $1,-1,i,-i$. Write it as $\omega$:

$$z-1=2\omega z
\quad\Rightarrow\quad
z=\frac1{1-2\omega}.$$

Substituting the four values gives

$$\boxed{\begin{aligned}
z&=-1,\quad \frac13,\\
z&=\frac{1+2i}{5},\quad\frac{1-2i}{5}.
\end{aligned}}$$

**Check:** the denominator $1-2\omega$ is never zero for these four values. Each answer satisfies $z-1=2\omega z$; raising this equation to the fourth power gives the original equation.

**Common mistake:** taking only the real fourth roots. The complex roots of unity give two further solutions.

</section>

## Trigonometric Identities

### Multiple angles in terms of powers

Expand $(\cos\theta+i\sin\theta)^n$ by the binomial theorem.

- The **real part** is $\cos n\theta$. Even powers of $i$ contribute to it.
- The **imaginary part** is $\sin n\theta$. Odd powers of $i$ contribute to it.

The imaginary part is the real coefficient of $i$; it does not include $i$. Use $i^2=-1$, $i^3=-i$ and $i^4=1$.

<section class="worked-example" markdown="1">

#### Example 7 — Triple-angle formulae

**Question:** use De Moivre's theorem to express $\sin3\theta$ in powers of $\sin\theta$, $\cos3\theta$ in powers of $\cos\theta$ and $\tan3\theta$ in powers of $\tan\theta$.

For a shorter expansion, write $c=\cos\theta$ and $s=\sin\theta$:

$$\begin{aligned}
(c+is)^3
&=c^3+3ic^2s-3cs^2-is^3\\
&=(c^3-3cs^2)+i(3c^2s-s^3).
\end{aligned}$$

Equating real and imaginary parts gives

$$\cos3\theta=c^3-3cs^2,
\qquad
\sin3\theta=3c^2s-s^3.$$

Use $s^2=1-c^2$ for cosine, and $c^2=1-s^2$ for sine:

$$\boxed{\begin{aligned}
\cos3\theta&=4\cos^3\theta-3\cos\theta,\\
\sin3\theta&=3\sin\theta-4\sin^3\theta.
\end{aligned}}$$

For tangent, divide the imaginary part by the real part, then divide the numerator and denominator by $c^3$. With $t=\tan\theta$,

$$\boxed{\tan3\theta=\frac{3t-t^3}{1-3t^2}.}$$

This form requires $\cos\theta\ne0$ and $\cos3\theta\ne0$, so both tangent expressions are defined.

**Check:** the sine expression is odd in $\theta$ and the cosine expression is even. At $\theta=0$, the formulae give $0$ and $1$.

</section>

### Powers in terms of multiple angles

Now let $z=\cos\theta+i\sin\theta=e^{i\theta}$. Since $\lvert z\rvert=1$,

$$\frac1z=\cos\theta-i\sin\theta.$$

Hence

$$\boxed{\begin{aligned}
z+\frac1z&=2\cos\theta,\\
z-\frac1z&=2i\sin\theta.
\end{aligned}}$$

For any integer $m$,

$$\boxed{\begin{aligned}
z^m+\frac1{z^m}&=2\cos m\theta,\\
z^m-\frac1{z^m}&=2i\sin m\theta.
\end{aligned}}$$

These reciprocal identities use **unit modulus**. If the original complex number has modulus $r\ne1$, first use $\frac zr=e^{i\theta}$.

<section class="worked-example" markdown="1">

#### Example 8 — Express a fifth power using multiple angles

**Question:** express $\sin^5\theta$ in terms of sines of multiples of $\theta$.

From $2i\sin\theta=z-\frac1z$, raise both sides to the fifth power. Since $(2i)^5=32i$,

$$\begin{aligned}
32i\sin^5\theta
&=z^5-5z^3+10z\\
&\quad-\frac{10}{z}+\frac5{z^3}-\frac1{z^5}\\
&=\left(z^5-\frac1{z^5}\right)
-5\left(z^3-\frac1{z^3}\right)\\
&\quad+10\left(z-\frac1z\right).
\end{aligned}$$

Replace each pair by a sine:

$$32i\sin^5\theta
=2i\sin5\theta-10i\sin3\theta+20i\sin\theta.$$

Dividing by $32i$ gives

$$\boxed{\begin{aligned}
\sin^5\theta
&=\frac1{16}\sin5\theta\\
&\quad-\frac5{16}\sin3\theta+\frac58\sin\theta.
\end{aligned}}$$

**Check:** at $\theta=\frac\pi2$, the right-hand side is $\frac1{16}+\frac5{16}+\frac58=1$.

</section>

## Integration

### Rewrite as multiple-angle terms {#integrate-multiple-angle-terms}

Use the preceding identities to rewrite a trigonometric power as multiple-angle terms, then integrate term by term and check each inner coefficient.

<section class="worked-example" markdown="1">

#### Example 9 — Integrate a trigonometric power

**Question:** use the result in Example 8 to find $\int\sin^5x\,\mathrm dx$.

Integrate each multiple-angle term separately. Remember that

$$\int\sin kx\,\mathrm dx=-\frac1k\cos kx+C
\qquad(k\ne0).$$

Therefore

$$\begin{aligned}
\int\sin^5x\,\mathrm dx
&=\frac1{16}\int\sin5x\,\mathrm dx
-\frac5{16}\int\sin3x\,\mathrm dx
+\frac58\int\sin x\,\mathrm dx\\
&=\frac1{16}\left(-\frac{\cos5x}{5}\right)
-\frac5{16}\left(-\frac{\cos3x}{3}\right)
+\frac58(-\cos x)+C\\
&=\boxed{-\frac1{80}\cos5x+\frac5{48}\cos3x-\frac58\cos x+C}.
\end{aligned}$$

**Check:** differentiating gives $\frac1{16}\sin5x-\frac5{16}\sin3x+\frac58\sin x$, which is $\sin^5x$ by Example 8.

**Common mistake:** forgetting the factor $\frac1k$ when integrating $\sin kx$ or $\cos kx$.

</section>

### Integrate using complex exponentials {#integrate-complex-exponentials}

Express the integrand as the real or imaginary part of a complex exponential, integrate that exponential, then take the required part and add a real constant of integration.

<section class="worked-example" markdown="1">

#### Example 10 — Use exponential form in an integral

**Question:** find $\int e^{2x}\cos3x\,\mathrm dx$ using exponential form.

Since $\cos3x$ is the real part of $e^{3ix}$, the integrand is the real part of $e^{(2+3i)x}$. For a constant nonzero coefficient, divide by that coefficient when integrating; equivalently use the linear substitution

$$\begin{aligned}
u&=(2+3i)x,\qquad \mathrm du=(2+3i)\,\mathrm dx,\\
\int e^{(2+3i)x}\,\mathrm dx
&=\frac1{2+3i}\int e^u\,\mathrm du
=\frac{e^u}{2+3i}+C_{\mathbb C}\\
&=\frac{e^{(2+3i)x}}{2+3i}+C_{\mathbb C}.
\end{aligned}$$

Rationalise the coefficient:

$$\frac1{2+3i}=\frac{2-3i}{13}.$$

Then

$$\begin{aligned}
&\frac{e^{(2+3i)x}}{2+3i}\\
&\quad=\frac{e^{2x}}{13}(2-3i)(\cos3x+i\sin3x)\\
&\quad=\frac{e^{2x}}{13}\big[(2\cos3x+3\sin3x)
+i(2\sin3x-3\cos3x)\big].
\end{aligned}$$

Take the real part and add a real constant:

$$\boxed{\begin{aligned}
&\int e^{2x}\cos3x\,\mathrm dx\\
&\quad=\frac{e^{2x}}{13}(2\cos3x+3\sin3x)+C.
\end{aligned}}$$

**Check:** differentiating gives a cosine coefficient $\frac{4+9}{13}=1$ and a sine coefficient $\frac{6-6}{13}=0$.

For a sine integral, take the **imaginary part** instead. Integration by parts twice is another method, but exponential form keeps this calculation short.

</section>

## Practice

Try each question before opening the hint or solution. Questions 1–6 and 9–11 are **self-written practice with no official marks**; Question 11 extends the complex-exponential demonstration. Questions 7–8 retain the AQA wording and marks reproduced in the supplied textbook.

<section class="lesson-check" markdown="1">

### Question 1 — A quadrant check

Use De Moivre's theorem to find $(-\sqrt3+i)^4$. Give your answer in $a+ib$ form and in exponential form with a principal argument.

<details markdown="1">
<summary>Hint</summary>

The modulus is $2$ and the argument is $\frac{5\pi}{6}$. After multiplying the argument by $4$, subtract a suitable multiple of $2\pi$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\begin{aligned}
(-\sqrt3+i)^4
&=16e^{10\pi i/3}\\
&=16e^{-2\pi i/3}\\
&=\boxed{-8-8\sqrt3\,i}.
\end{aligned}$$

The exponential form with principal argument is $\boxed{16e^{-2\pi i/3}}$.

**Check:** the modulus of the Cartesian answer is $\sqrt{64+192}=16$. Its real and imaginary parts are both negative, so the principal argument is in the third quadrant, written as a negative angle.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 2 — Put sine and cosine in the correct order

Simplify $(\sin\theta+i\cos\theta)^6$ into multiple-angle form.

<details markdown="1">
<summary>Hint</summary>

Write $\sin\theta=\cos(\frac\pi2-\theta)$ and $\cos\theta=\sin(\frac\pi2-\theta)$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The number is $e^{i(\pi/2-\theta)}$, so its sixth power is

$$\begin{aligned}
e^{i(3\pi-6\theta)}
&=\cos(3\pi-6\theta)+i\sin(3\pi-6\theta)\\
&=\boxed{-\cos6\theta+i\sin6\theta}.
\end{aligned}$$

**Check:** at $\theta=0$, the original expression is $i^6=-1$, which agrees with the result.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 3 — All four roots

Solve $z^4=-16$ in $a+ib$ form. State the radius of the circle containing the roots and the angle between adjacent roots. Draw the four roots on an Argand diagram with equal axis scales; label each Cartesian coordinate and argument, the circle and its radius. Explain why your list is complete.

<details markdown="1">
<summary>Hint</summary>

Use $-16=16e^{i\pi}$, then take $k=0,1,2,3$ in the root formula.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Every root has modulus $2$. Their arguments are

$$\frac{\pi+2k\pi}{4}
=\frac\pi4+\frac{k\pi}{2},
\qquad k=0,1,2,3.$$

Thus the four roots are

$$\boxed{\begin{aligned}
&\sqrt2+i\sqrt2,\quad-\sqrt2+i\sqrt2,\\
&-\sqrt2-i\sqrt2,\quad\sqrt2-i\sqrt2.
\end{aligned}}$$

They form a square centred at the origin, on a circle of radius $2$. Adjacent roots differ in argument by $\frac\pi2$.

**Check:** raising any root to the fourth power gives modulus $16$ and an odd multiple of $\pi$ as its argument, so the value is $-16$.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 380" role="img" aria-labelledby="four-root-title four-root-desc" style="width:100%;height:auto">
<title id="four-root-title">Self-written answer diagram showing all four roots</title>
<desc id="four-root-desc">Equal-scale real and imaginary axes. A circle of radius two about the origin contains the four coordinate pairs formed by positive and negative square root of two, with arguments starting at pi over four and spaced by pi over two.</desc>
<g fill="none" stroke="currentColor" stroke-width="1.5">
<path d="M55 190H400M225 35V345"/>
<path d="M392 186L400 190L392 194M221 43L225 35L229 43"/>
<circle cx="225" cy="190" r="106.066" stroke-dasharray="4 4"/>
<path d="M300 115H150V265H300Z"/>
<path d="M225 190H331.066" stroke-dasharray="3 3"/>
</g>
<g fill="currentColor" font-size="22" font-family="sans-serif">
<circle cx="300" cy="115" r="4"/><circle cx="150" cy="115" r="4"/>
<circle cx="150" cy="265" r="4"/><circle cx="300" cy="265" r="4"/>
<text x="403" y="184">Re</text><text x="234" y="35">Im</text><text x="203" y="215">O</text>
<text x="270" y="183">r = 2</text>
<text x="306" y="81">(√2, √2)</text><text x="306" y="108">π/4</text>
<text x="144" y="81" text-anchor="end">(−√2, √2)</text><text x="144" y="108" text-anchor="end">3π/4</text>
<text x="144" y="294" text-anchor="end">(−√2, −√2)</text><text x="144" y="321" text-anchor="end">5π/4</text>
<text x="306" y="294">(√2, −√2)</text><text x="306" y="321">7π/4</text>
</g>
</svg>

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 4 — Roots after a translation

Solve $(z-1)^3=8$ in $a+ib$ form. Describe the positions of the three roots on an Argand diagram.

<details markdown="1">
<summary>Hint</summary>

Find the three cube roots of $8$ for $z-1$, then add $1$ to every answer.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The cube roots of $8$ are $2$, $-1+i\sqrt3$ and $-1-i\sqrt3$. Hence

$$\boxed{z=3,\quad i\sqrt3,\quad-i\sqrt3.}$$

The three roots form an equilateral triangle on the circle $\lvert z-1\rvert=2$. Its centre is $1+0i$, rather than the origin.

**Check:** all three values have distance $2$ from $1$. Subtracting $1$ and cubing gives $8$ in each case.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 5 — Real and imaginary parts

Use De Moivre's theorem to show that

$$\cos4\theta=8\cos^4\theta-8\cos^2\theta+1,$$

and, where $\sin\theta\ne0$,

$$\frac{\sin4\theta}{\sin\theta}
=8\cos^3\theta-4\cos\theta.$$

<details markdown="1">
<summary>Hint</summary>

Expand $(c+is)^4$, where $c=\cos\theta$ and $s=\sin\theta$. Then use $s^2=1-c^2$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\begin{aligned}
(c+is)^4
&=(c^4-6c^2s^2+s^4)\\
&\quad+i(4c^3s-4cs^3).
\end{aligned}$$

Taking the real part and substituting $s^2=1-c^2$ gives

$$\begin{aligned}
\cos4\theta
&=c^4-6c^2(1-c^2)+(1-c^2)^2\\
&=\boxed{8c^4-8c^2+1}.
\end{aligned}$$

Taking the imaginary part, then dividing by $s\ne0$, gives

$$\begin{aligned}
\frac{\sin4\theta}{\sin\theta}
&=4c^3-4c(1-c^2)\\
&=\boxed{8c^3-4c}.
\end{aligned}$$

**Check:** at $\theta=\frac\pi4$, the results give $\cos\pi=-1$ and $\frac{\sin\pi}{\sin(\pi/4)}=0$. The quotient is undefined when $\sin\theta=0$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 6 — A cosine power and its integral

Using $z=\cos x+i\sin x$, express $\cos^4x$ in terms of cosines of multiple angles. Hence find $\int\cos^4x\,\mathrm dx$.

<details markdown="1">
<summary>Hint</summary>

Raise $2\cos x=z+\frac1z$ to the fourth power. Pair $z^4$ with $z^{-4}$ and $z^2$ with $z^{-2}$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\begin{aligned}
16\cos^4x
&=z^4+4z^2+6+\frac4{z^2}+\frac1{z^4}\\
&=2\cos4x+8\cos2x+6.
\end{aligned}$$

Therefore

$$\boxed{\cos^4x=\frac18\cos4x+\frac12\cos2x+\frac38.}$$

Integrating term by term,

$$\begin{aligned}
\int\cos^4x\,\mathrm dx
&=\frac18\int\cos4x\,\mathrm dx
+\frac12\int\cos2x\,\mathrm dx+\frac38\int1\,\mathrm dx\\
&=\frac18\left(\frac{\sin4x}{4}\right)
+\frac12\left(\frac{\sin2x}{2}\right)+\frac38x+C\\
&=\boxed{\frac1{32}\sin4x+\frac14\sin2x+\frac38x+C}.
\end{aligned}$$

**Check:** differentiating gives the multiple-angle expression above. The constant term $\frac38$ integrates to $\frac38x$, not to a constant.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 7 — AQA: the smallest positive angle

**Source:** AQA Mathematics 6360, MFP2, June 2007, Question 3. **5 marks**. Textbook cross-reference: Chapter 20, practice examination question 2, printed p. 253. [Question paper, Q3 (PDF p. 2)](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202007%20QP%20-%20FP2%20AQA.PDF#page=2); [AQA mark scheme, Q3 (PDF p. 4)](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202007%20MS%20-%20FP2%20AQA.PDF#page=4). Question and matching mark scheme re-read on 2026-10-23; these are AQA-authored documents hosted by PMT, with some question papers in condensed layout.

Use De Moivre's theorem to find the smallest positive angle $\theta$ for which

$$(\cos\theta+i\sin\theta)^{15}=-i.$$

<details markdown="1">
<summary>Hint</summary>

Use an argument of $-\frac\pi2$ for $-i$, but include $2k\pi$. The value from $k=0$ is negative.

</details>

<details markdown="1">
<summary>Worked solution and check</summary>

By De Moivre's theorem,

$$\cos15\theta+i\sin15\theta=-i.$$

Thus

$$15\theta=-\frac\pi2+2k\pi,
\qquad k\in\mathbb Z,$$

so

$$\theta=-\frac\pi{30}+\frac{2k\pi}{15}.$$

The first positive value occurs at $k=1$:

$$\boxed{\theta=\frac\pi{10}.}$$

**Check:** $15\theta=\frac{3\pi}{2}$, whose cosine is zero and sine is $-1$. Consecutive solutions are separated by $\frac{2\pi}{15}$, so the preceding one is negative.

**Mark-scheme comparison:** Apply De Moivre’s theorem, match the real and imaginary parts, and select 15θ = 3π/2 to obtain the smallest positive θ = π/10. Our working has been checked against the linked AQA mark scheme; these explanations are our own, not an official mark scheme.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 8 — AQA: a fifth-angle identity and a product

**Source:** AQA Mathematics 6360, MFP2, June 2011, Question 7. **5 + 3 + 3 + 5 marks**. Textbook cross-reference: Chapter 20, practice examination question 3, printed p. 253. [Question paper, Q7 (PDF p. 4)](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202011%20QP%20-%20FP2%20AQA.pdf#page=4); [AQA mark scheme, Q7 (PDF p. 7)](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202011%20MS%20-%20FP2%20AQA.PDF#page=7). Question and matching mark scheme re-read on 2026-10-23; these are AQA-authored documents hosted by PMT, with some question papers in condensed layout.

**a i** Use De Moivre's theorem to show that

$$\begin{aligned}
\cos5\theta
&=\cos^5\theta-10\cos^3\theta\sin^2\theta\\
&\quad+5\cos\theta\sin^4\theta,
\end{aligned}$$

and find a similar expression for $\sin5\theta$. **(5 marks)**

**a ii** Deduce that

$$\begin{aligned}
&\tan5\theta\\
&\quad=\frac{\tan\theta(5-10\tan^2\theta+\tan^4\theta)}
{1-10\tan^2\theta+5\tan^4\theta}.
\end{aligned}$$

**(3 marks)**

**b** Explain why $t=\tan\frac\pi5$ is a root of the equation

$$t^4-10t^2+5=0$$

and write down the three other roots of this equation in trigonometrical form. **(3 marks)**

**c** Deduce that

$$\tan\frac\pi5\tan\frac{2\pi}{5}=\sqrt5.$$

**(5 marks)**

<details markdown="1">
<summary>Hint</summary>

Expand $(c+is)^5$. Divide the imaginary part by the real part for tangent. For part c, pair the positive roots with their negatives and use the product of the roots.

</details>

<details markdown="1">
<summary>Worked solution and check</summary>

**a i** Put $c=\cos\theta$ and $s=\sin\theta$. By the binomial theorem,

$$\begin{aligned}
(c+is)^5
&=(c^5-10c^3s^2+5cs^4)\\
&\quad+i(5c^4s-10c^2s^3+s^5).
\end{aligned}$$

De Moivre's theorem identifies the two parts:

$$\boxed{\begin{aligned}
\cos5\theta&=c^5-10c^3s^2+5cs^4,\\
\sin5\theta&=5c^4s-10c^2s^3+s^5.
\end{aligned}}$$

**a ii** Divide the imaginary part by the real part. Where $c\ne0$, divide both numerator and denominator by $c^5$. With $t=\tan\theta$,

$$\boxed{\tan5\theta=\frac{t(5-10t^2+t^4)}{1-10t^2+5t^4}.}$$

The formula applies where $\cos\theta\ne0$ and $\cos5\theta\ne0$.

**b** At $\theta=\frac\pi5$, $\tan5\theta=\tan\pi=0$. The denominator is non-zero and $t\ne0$, so

$$5-10t^2+t^4=0.$$

The same reasoning works for $\theta=\frac{2\pi}{5},\frac{3\pi}{5},\frac{4\pi}{5}$. These give four distinct roots:

$$\boxed{\tan\frac\pi5,\quad
\tan\frac{2\pi}{5},\quad
\tan\frac{3\pi}{5},\quad
\tan\frac{4\pi}{5}.}$$

**c** Let $a=\tan\frac\pi5$ and $b=\tan\frac{2\pi}{5}$. Since $\tan(\pi-\theta)=-\tan\theta$, the roots are $a,b,-b,-a$.

The product of the roots of $t^4-10t^2+5=0$ is $5$. Hence

$$ab(-b)(-a)=a^2b^2=5.$$

Both $a$ and $b$ are positive, so $ab$ is positive. Therefore

$$\boxed{\tan\frac\pi5\tan\frac{2\pi}{5}=\sqrt5.}$$

**Check:** the quadratic in $t^2$ has roots $5\pm2\sqrt5$, both positive, with product $5$. The sign of $ab$ still needs the first-quadrant check.

**Mark-scheme comparison:** Expand the fifth power and compare parts; divide by cos⁵θ where it is nonzero. Identify all four tangent roots, then justify the positive product √5. Our working has been checked against the linked AQA mark scheme; these explanations are our own, not an official mark scheme.

</details>

**Connect earlier learning:** after this question, return to the [Roots and Polynomials later task](/alevel/a2-further-mathematics/roots-and-polynomials/#later-review) and reconstruct roots and an equation from new conditions without the trigonometric cue.

</section>

<section class="lesson-check" markdown="1">

### Question 9 — An integer-power proof {#question-9--an-integer-power-proof}

**Self-written task; no official marks.** Starting from the compound-angle formulae, prove in English that

$$(\cos t-i\sin t)^n=\cos nt-i\sin nt$$

for every integer $n$. Give an induction hypothesis and step for positive integers, then justify zero and negative integers. Do not quote De Moivre's theorem as the proof.

<details markdown="1">
<summary>Hint</summary>

Prove the positive case first; modulus one makes the reciprocal available.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Put $v=\cos t-i\sin t$. For $n=1$ the identity is immediate. Assume that it holds for an arbitrary positive integer $k$. Then

$$\begin{aligned}
v^{k+1}&=(\cos kt-i\sin kt)(\cos t-i\sin t)\\
&=(\cos kt\cos t-\sin kt\sin t)
-i(\sin kt\cos t+\cos kt\sin t)\\
&=\cos((k+1)t)-i\sin((k+1)t).
\end{aligned}$$

Thus the statement holds for all positive integers by induction. For zero, both sides equal one. Also

$$v\overline v=\cos^2t+\sin^2t=1,$$

so $v$ is nonzero. For a positive integer $m$,

$$\begin{aligned}
v^{-m}&=\frac1{\cos mt-i\sin mt}
=\frac{\cos mt+i\sin mt}{\cos^2mt+\sin^2mt}\\
&=\cos mt+i\sin mt
=\cos(-mt)-i\sin(-mt).
\end{aligned}$$

The identity therefore holds for every integer.

Check: the hypothesis uses arbitrary k, the product connects to the compound-angle formulae, and the induction conclusion is stated. Zero and negative integers need separate reasons. Checking a few powers is insufficient. Retry the negative-integer argument with angle variable 2t, explaining why its denominator is nonzero.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 10 — An exact value from a complex root {#question-10--an-exact-value-from-a-complex-root}

**Self-written task; no official marks.** Let $w=a+ib$ lie in the first quadrant and satisfy $w^2=1+i$. Find $a$ and $b$ exactly. Use both the Cartesian and polar forms of $w$ to deduce an exact surd expression for $\cos\frac\pi8$, explaining every sign choice.

<details markdown="1">
<summary>Hint</summary>

Connect the square difference, squared modulus and quadrant.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Compare real and imaginary parts, then use the modulus for a third relation.

$$\begin{aligned}
a^2-b^2&=1,\quad 2ab=1,\quad
\lvert w\rvert^2=\lvert1+i\rvert=\sqrt2,\\
a^2+b^2&=\sqrt2,\\
a^2&=\frac{\sqrt2+1}{2},\qquad b^2=\frac{\sqrt2-1}{2},\\
a&=\sqrt{\frac{\sqrt2+1}{2}},\qquad
b=\sqrt{\frac{\sqrt2-1}{2}}.
\end{aligned}$$

Both signs are positive because the root is in the first quadrant. In polar form,

$$\begin{aligned}
1+i&=\sqrt2e^{i\pi/4},\qquad w=2^{1/4}e^{i\pi/8},\\
\cos\frac\pi8&=\frac{a}{2^{1/4}}
=\sqrt{\frac{\sqrt2+1}{2\sqrt2}}
=\boxed{\frac{\sqrt{2+\sqrt2}}{2}}.
\end{aligned}$$

Check: these positive values give 2ab=1 and a square difference of one. Divide by the modulus of the root. If your sign was wrong, close this solution and attempt the [separate retry](#exact-value-retry).

</details>

</section>

<section class="lesson-check" markdown="1">

#### Retry — Signs and unit direction {#exact-value-retry}

**Self-written retry; no official marks.** A root $w$ of $w^2=1+i$ lies in the third quadrant. Find $w$ and $w/\lvert w\rvert$ exactly. Explain every sign choice.

Keep the preceding solution closed while finding both exact values, then open the check.

<details markdown="1">
<summary>Exact-value retry check</summary>

$$w=-\sqrt{\frac{\sqrt2+1}{2}}-i\sqrt{\frac{\sqrt2-1}{2}},\qquad
\frac{w}{\lvert w\rvert}=-\frac{\sqrt{2+\sqrt2}}2-i\frac{\sqrt{2-\sqrt2}}2.$$

Both components are negative; squaring still gives the original number. Taking positive square roots would violate the specified quadrant.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 11 — A definite integral {#question-11--a-definite-integral}

**Self-written extension; no official marks.** Evaluate $\int_0^{\pi/2}e^x\sin2x\,\mathrm dx$ using complex exponential form. Show the complex integral, coefficient calculation, selected part, antiderivative and both endpoint values.

<details markdown="1">
<summary>Hint</summary>

Select the imaginary part; the lower-endpoint value is nonzero.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Integrate the real and imaginary components with respect to the real variable. Here the required component is the imaginary part.

$$\begin{aligned}
u&=(1+2i)x,\qquad \mathrm du=(1+2i)\,\mathrm dx,\\
\int e^{(1+2i)x}\,\mathrm dx
&=\frac1{1+2i}\int e^u\,\mathrm du
=\frac{e^{(1+2i)x}}{1+2i}+C_{\mathbb C},\\
\frac1{1+2i}&=\frac{1-2i}{5},\\
\frac{e^{(1+2i)x}}{1+2i}
&=\frac{e^x}{5}(1-2i)(\cos2x+i\sin2x)\\
&=\frac{e^x}{5}\big[(\cos2x+2\sin2x)+i(\sin2x-2\cos2x)\big],\\
\int_0^{\pi/2}e^x\sin2x\,\mathrm dx
&=\left[\frac{e^x}{5}(\sin2x-2\cos2x)\right]_0^{\pi/2}\\
&=\frac{e^{\pi/2}}5(\sin\pi-2\cos\pi)
-\frac15(\sin0-2\cos0)\\
&=\boxed{\frac25(e^{\pi/2}+1)}.
\end{aligned}$$

Check: the integrand is nonnegative on the interval, so the answer is positive. Differentiating the antiderivative gives a sine coefficient of one and a cosine coefficient of zero. If you selected the real part, revisit Example 10, identify the integrand, then close the solution and retry.

</details>

</section>

## Diagnose and Retry {#diagnose-and-retry}

Both tasks are self-written and have no official marks. Explain the error before opening feedback; then close every solution and attempt the new task independently. If you need a hint, return later for another independent attempt.

<section class="lesson-check" markdown="1">

**Diagnose:** A learner solves $z^4=1$ by dividing the argument zero by four and gives only $z=1$. Repair the argument step.

<details markdown="1">
<summary>Feedback</summary>

Use all arguments $0+2k\pi$ before division. The four roots are $e^{ik\pi/2}$ for $k=0,1,2,3$; later values repeat these roots.

</details>

</section>

<section class="lesson-check" markdown="1">

**Independent retry:** The four roots of a monic quartic form a square centred at $1$ with radius $2$. One root is $3$. Find all the roots and construct the quartic. List all arguments of the fourth power of a displacement before dividing by four. Explain why four choices are distinct and later choices repeat.

<details markdown="1">
<summary>Hint</summary>

Work with displacements from the centre, then use their common fourth power.

</details>

<details markdown="1">
<summary>Retry solution and check</summary>

$$\begin{aligned}
w&=z-1,\qquad w^4=16,\\
4\arg w&=0+2k\pi,\qquad
w_k=2e^{ik\pi/2},\quad k=0,1,2,3.
\end{aligned}$$

These four arguments are different modulo a full turn; adding four to the index adds a full turn and repeats a root. The argument list is required evidence for this retry.


The displacements are $2,2i,-2,-2i$. Thus the roots are $3,1+2i,-1,1-2i$, and $(z-1)^4=16$. Expanding gives $z^4-4z^3+6z^2-4z-15=0$. Subtracting the centre and taking fourth powers checks every root.

</details>

</section>

## Connect and Return Later {#later-review}

Complete [polar areas](/alevel/a2-further-mathematics/polar-coordinates/#areas) first, then try the task below and record any hint used.

<section class="lesson-check" markdown="1">

### Roots, rays and a region {#later-roots-and-area}

**Later task (self-written):** After completing polar-coordinate areas, return with the solutions closed. Find all roots of $z^3=8$ and plot them. Two adjacent root rays bound a region inside $r=2$. Find the area of the smaller sector, and check the root sum from the polynomial coefficients.

<details markdown="1">
<summary>Hint</summary>

Find every root, then distinguish the stated circular boundary from straight edges.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\begin{aligned}
z_k&=2e^{2k\pi i/3},\quad k=0,1,2,\\
z&=2,\quad-1+i\sqrt3,\quad-1-i\sqrt3,\\
\sum z_k&=2-1-1+i\sqrt3-i\sqrt3=0.
\end{aligned}$$

The diagram is an equilateral triangle centred at the origin on a circle of radius two. Taking adjacent rays anticlockwise from the positive real axis,

$$\begin{aligned}
A&=\frac12\int_0^{2\pi/3}2^2\,\mathrm d\theta
=2\int_0^{2\pi/3}1\,\mathrm d\theta\\
&=[2\theta]_0^{2\pi/3}
=2\left(\frac{2\pi}{3}\right)-2(0)=\boxed{\frac{4\pi}{3}}.
\end{aligned}$$

The region is a circular sector. The zero root sum agrees with the missing quadratic coefficient.

</details>

</section>

## Method for revision {#method}

- **A power or a reciprocal?** Write the number as $r(\cos\theta+i\sin\theta)$ first. Raise the modulus to the power and multiply the argument by the power.
- **An equation $z^n=w$?** Find the modulus and argument of $w$. Include $\theta+2k\pi$ before dividing the argument by $n$.
- **A multiple angle in terms of powers?** Expand $(\cos\theta+i\sin\theta)^n$, then take the real or imaginary part.
- **A power such as $\sin^5\theta$ in terms of multiple angles?** Use $z=\cos\theta+i\sin\theta$ and the identities involving $z$ and $\frac1z$.

**Choose the direction before expanding:** $\sin5\theta$ and $\sin^5\theta$ are different expressions. The first is the sine of $5\theta$; the second is the fifth power of $\sin\theta$.

## Quick Reference

| Task | Method | Check |
|---|---|---|
| Integer power | Write $z=re^{i\theta}$, then use $z^n=r^ne^{in\theta}$ | Raise the modulus as well as multiplying the argument |
| Reciprocal or negative power | Use $r^{-n}e^{-in\theta}$ for $z^{-n}$, $n>0$ | The modulus becomes a reciprocal |
| All roots of a non-zero number | $z_k=R^{1/n}e^{i(\theta+2k\pi)/n}$, $k=0,\ldots,n-1$ | Count $n$ distinct answers |
| Argand diagram | Common radius $R^{1/n}$; spacing $\displaystyle\frac{2\pi}{n}$ | Check the centre if the equation uses $z-a$ |
| Roots of unity | $1,\omega,\ldots,\omega^{n-1}$, with $\omega=e^{2\pi i/n}$ | Their sum is zero for $n>1$ |
| Multiple angle in terms of powers | Expand $(\cos\theta+i\sin\theta)^n$ | Real part for cosine, imaginary part for sine |
| Power in terms of multiple angles | Raise $z+z^{-1}=2\cos\theta$ or $z-z^{-1}=2i\sin\theta$ to a power | These identities require $\lvert z\rvert=1$ |
| Tangent identity | Divide imaginary part by real part | State where the tangent expressions are defined |
| Integration | Integrate the multiple-angle expression, or take a part of a complex exponential | Include the angle factors and $+C$ |
{: .wide-table}

**After practice:** if the quadrant was wrong, repeat Question 1. If sine and cosine were interchanged, repeat Question 2. If roots were missing, repeat Questions 3–4. If the direction of a trigonometric expansion was wrong, compare Question 5 with Question 6. If the smallest angle was wrong, repeat Question 7. If a sign was lost in a product, repeat Question 8.

**You should be able to:** prove the theorem for integer powers, use exponential form, find and plot all roots, derive trigonometric identities in both directions, obtain an exact surd value and use the results in integration.

The lesson follows FP2.2 of the [OxfordAQA Further Mathematics 9665 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf). Worked examples are teaching material. Questions 7–8 retain the AQA questions and marks from the supplied textbook.

**Learning path:** [Previous: Series and Limits](/alevel/a2-further-mathematics/series-and-limits/) · [Next: Polar Coordinates](/alevel/a2-further-mathematics/polar-coordinates/) · [Back to the course](/alevel/a2-further-mathematics/).

**Next steps:** complete this lesson's [later task](#later-review), then attempt the course [mixed review](/alevel/a2-further-mathematics/#mixed-review) and [delayed review](/alevel/a2-further-mathematics/#later-review). Record your first attempt, hints used and retry result.
