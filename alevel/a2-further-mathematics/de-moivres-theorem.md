---
title: De Moivre's Theorem
layout: subjects
mathjax: true
grade: a2
subject: a2-further-mathematics
permalink: /alevel/a2-further-mathematics/de-moivres-theorem/
toc_headings: h2
study_page: true
---

[Further Pure Mathematics](/alevel/a2-further-mathematics/) · FP2.2 De Moivre's theorem

Find powers and roots of complex numbers. Use the same theorem to prove trigonometric identities and evaluate integrals.

- **Learning:** start with the [method](#method), then work through the examples.
- **Homework help:** choose [powers and proof](#powers-and-proof), [complex roots](#complex-roots), [roots of unity](#roots-of-unity), [trigonometric identities](#trigonometric-identities) or [integration](#integration).
- **Revision:** try [practice](#practice) before opening the solutions, then use the [quick reference](#quick-reference).

Textbook: Chapter 20, Sections 20.1–20.3, printed pp. 234–252; review and practice on pp. 253–254, in *International A Level Further Mathematics*.

**Before you start:** review [complex numbers](/alevel/as-further-mathematics/#3-complex-numbers-fp13), [proof by induction](/alevel/a2-further-mathematics/proof-by-induction/) and [integration](/alevel/a2-mathematics/integration/). You should know modulus, argument, complex conjugates, the binomial theorem and basic trigonometric identities. Use **radians** throughout this lesson.

## Method

**Learning goal:** use De Moivre's theorem for integer powers, find every complex root, explain their positions on an Argand diagram and use complex numbers to obtain trigonometric results.

- **A power or a reciprocal?** Write the number as $r(\cos\theta+i\sin\theta)$ first. Raise the modulus to the power and multiply the argument by the power.
- **An equation $z^n=w$?** Find the modulus and argument of $w$. Include $\theta+2k\pi$ before dividing the argument by $n$.
- **A multiple angle in terms of powers?** Expand $(\cos\theta+i\sin\theta)^n$, then take the real or imaginary part.
- **A power such as $\sin^5\theta$ in terms of multiple angles?** Use $z=\cos\theta+i\sin\theta$ and the identities involving $z$ and $\frac1z$.

**Choose the direction before expanding:** $\sin5\theta$ and $\sin^5\theta$ are different expressions. The first is the sine of $5\theta$; the second is the fifth power of $\sin\theta$.

## Powers and Proof

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

### Example 2 — A negative power

**Question:** find $(\sqrt3+i)^{-3}$ in $a+ib$ form.

Since $\sqrt3+i=2e^{i\pi/6}$,

$$\begin{aligned}
(\sqrt3+i)^{-3}
&=2^{-3}e^{-i\pi/2}\\
&=\boxed{-\frac{i}{8}}.
\end{aligned}$$

**Check:** $(\sqrt3+i)^3=8i$, and $\frac1{8i}=-\frac i8$. A negative power changes the modulus as well as the argument.

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

Both signs change for the other root:

$$\boxed{z=\pm\left(\frac{\sqrt3+1}{2}
+i\frac{\sqrt3-1}{2}\right).}$$

For the first root, $a=\sqrt2\cos\frac\pi{12}$. Hence

$$\boxed{\cos\frac\pi{12}
=\frac{\sqrt6+\sqrt2}{4}.}$$

**Check:** $a^2-b^2=\sqrt3$ and $2ab=1$. The positive signs are chosen from the quadrant, not from the square-root equations alone.

## Roots of Unity

The **$n$th roots of unity** are the solutions of $z^n=1$. They are

$$\boxed{z_k=e^{2k\pi i/n},
\qquad k=0,1,\ldots,n-1.}$$

Let $\omega=e^{2\pi i/n}$. The roots can also be written as $1,\omega,\omega^2,\ldots,\omega^{n-1}$.

They lie on the unit circle and have equal angular spacing $\frac{2\pi}{n}$. For $n>1$, their sum is zero:

$$1+\omega+\omega^2+\cdots+\omega^{n-1}
=\frac{1-\omega^n}{1-\omega}=0.$$

Here $\omega^n=1$ and $\omega\ne1$. Do not use the fraction when the denominator is zero.

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

## Trigonometric Identities

### Multiple angles in terms of powers

Expand $(\cos\theta+i\sin\theta)^n$ by the binomial theorem.

- The **real part** is $\cos n\theta$. Even powers of $i$ contribute to it.
- The **imaginary part** is $\sin n\theta$. Odd powers of $i$ contribute to it.

The imaginary part is the real coefficient of $i$; it does not include $i$. Use $i^2=-1$, $i^3=-i$ and $i^4=1$.

### Example 7 — Triple-angle formulae

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

### Example 8 — Express a fifth power using multiple angles

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

## Integration

### Example 9 — Integrate a trigonometric power

**Question:** use the result in Example 8 to find $\int\sin^5x\,\mathrm dx$.

Integrate each multiple-angle term separately. Remember that

$$\int\sin kx\,\mathrm dx=-\frac1k\cos kx+C
\qquad(k\ne0).$$

Therefore

$$\boxed{\begin{aligned}
\int\sin^5x\,\mathrm dx
&=-\frac1{80}\cos5x\\
&\quad+\frac5{48}\cos3x-\frac58\cos x+C.
\end{aligned}}$$

**Check:** differentiating gives $\frac1{16}\sin5x-\frac5{16}\sin3x+\frac58\sin x$, which is $\sin^5x$ by Example 8.

**Common mistake:** forgetting the factor $\frac1k$ when integrating $\sin kx$ or $\cos kx$.

### Example 10 — Use exponential form in an integral

**Question:** find $\int e^{2x}\cos3x\,\mathrm dx$ using exponential form.

Since $\cos3x$ is the real part of $e^{3ix}$, the integrand is the real part of $e^{(2+3i)x}$. An antiderivative of this complex exponential is

$$\frac{e^{(2+3i)x}}{2+3i}.$$

Rationalise the coefficient:

$$\frac1{2+3i}=\frac{2-3i}{13}.$$

Then

$$\begin{aligned}
&\frac{e^{(2+3i)x}}{2+3i}\\
&\quad=\frac{e^{2x}}{13}(2-3i)(\cos3x+i\sin3x).
\end{aligned}$$

Take the real part and add a real constant:

$$\boxed{\begin{aligned}
&\int e^{2x}\cos3x\,\mathrm dx\\
&\quad=\frac{e^{2x}}{13}(2\cos3x+3\sin3x)+C.
\end{aligned}}$$

**Check:** differentiating gives a cosine coefficient $\frac{4+9}{13}=1$ and a sine coefficient $\frac{6-6}{13}=0$.

For a sine integral, take the **imaginary part** instead. Integration by parts twice is another method, but exponential form keeps this calculation short.

## Practice

Try each question before opening the hint or solution. Questions 1–6 are **original practice written for this lesson**. Questions 7–8 retain the AQA wording and marks reproduced in the supplied textbook.

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

### Question 3 — All four roots

Solve $z^4=-16$ in $a+ib$ form. State the radius of the circle containing the roots and the angle between adjacent roots.

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

</details>

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

$$\boxed{\begin{aligned}
\int\cos^4x\,\mathrm dx
&=\frac1{32}\sin4x+\frac14\sin2x\\
&\quad+\frac38x+C.
\end{aligned}}$$

**Check:** differentiating gives the multiple-angle expression above. The constant term $\frac38$ integrates to $\frac38x$, not to a constant.

</details>

### Question 7 — AQA: the smallest positive angle

**Original AQA question.** AQA MFP2, June 2007; textbook Chapter 20, practice examination Question 2, printed p. 253. **5 marks.**

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

This is our worked solution, not an official mark scheme.

</details>

### Question 8 — AQA: a fifth-angle identity and a product

**Original AQA question.** AQA MFP2, June 2011; textbook Chapter 20, practice examination Question 3, printed p. 253. **16 marks.**

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

This is our worked solution, not an official mark scheme.

</details>

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

**After practice:** if the quadrant was wrong, repeat Question 1. If sine and cosine were interchanged, repeat Question 2. If roots were missing, repeat Questions 3–4. If the direction of a trigonometric expansion was wrong, compare Question 5 with Question 6. If the smallest angle was wrong, repeat Question 7. If a sign was lost in a product, repeat Question 8.

**You should be able to:** prove the theorem for integer powers, use exponential form, find and plot all roots, derive trigonometric identities in both directions, obtain an exact surd value and use the results in integration.

The lesson follows FP2.2 of the [OxfordAQA Further Mathematics 9665 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf). Worked examples are teaching material. Questions 7–8 retain the AQA questions and marks from the supplied textbook.

**Learning path:** [Previous: Series and Limits](/alevel/a2-further-mathematics/series-and-limits/) · [Next: Polar Coordinates](/alevel/a2-further-mathematics/polar-coordinates/) · [Back to the course](/alevel/a2-further-mathematics/).
