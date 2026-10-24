---
title: Algebraic Fractions and Algebraic Division
layout: subjects
mathjax: true
grade: a2
subject: a2-mathematics
permalink: /alevel/a2-mathematics/algebraic-fractions-and-division/
toc_headings: h2, h3
reading_layout: true
study_page: true
---

[Pure Mathematics](/alevel/a2-mathematics/) · P2.1 Algebra and Functions
{: .lesson-meta}

How can you rewrite a fraction without changing its value? Start with cancelling and the four operations, then use division to separate a whole polynomial part from a fraction that remains. Keep track of which inputs the original calculation allows.

Textbook: Chapter 1, Sections 1.6–1.7 (pp. 13–16). The four operations are included as prerequisite revision. The examples and practice questions below are self-written teaching exercises.

- **Learning:** start with [simplification](#simplification), then work through the examples.
- **Homework help:** use [operations with fractions](#operations-with-fractions) or [algebraic division](#algebraic-division).
- **Revision:** try the [practice questions](#practice) before opening the solutions.
{: .lesson-routes}

<div class="lesson-notes" markdown="1">

**Before you start:** expand and collect terms, factorise quadratics ([AS Algebra L02](/alevel/as-mathematics/algebra/#l02)) and substitute into polynomials ([L03](/alevel/as-mathematics/algebra/#l03)). One question asks you to find two unknown coefficients; its solution shows how to subtract two equations to remove one unknown. Recover [allowed inputs](/alevel/a2-mathematics/functions/#domain-and-range), then ask: which inputs remain unavailable after a rewrite? Begin with restrictions, then study division and remainders. Use [independent practice](#practice), [new retries](#repair-and-retry) and [later review](#later-review) when revising.

</div>

## Simplification

A fraction can contain expressions with powers of x, rather than just numbers. If both its numerator and denominator are polynomials, it defines a **rational function** wherever its denominator is not zero. For example,

$$f(x)=\frac{x^2-9}{x^2+x-6}.$$

The denominator cannot be zero. Find these restrictions before cancelling any factors.

### Factorise first

1. Factorise the numerator and denominator.
2. State the values excluded by the original denominator.
3. Cancel any common factors.
4. Keep the original restrictions with the simplified answer.

A **factor** is something multiplied by the rest of an expression; a **term** is one of the pieces added or subtracted. Cancelling means dividing the whole numerator and denominator by the same non-zero factor. It cannot remove just one term from a sum. For example,

$$\frac{x(x+2)}{x(x+5)}=\frac{x+2}{x+5},\qquad x\ne0,-5,$$

but $\frac{x+2}{x+5}$ cannot be simplified by cancelling the two occurrences of $x$.

<section class="worked-example" markdown="1">

### Example 1 — A cancelled factor still gives a restriction

**Question:** Simplify $\displaystyle\frac{x^2-9}{x^2+x-6}$ and state its domain.

We want to see whole factors that can be divided out. The numerator is a difference of two squares; in the denominator, look for two numbers whose product is minus six and whose sum is one. Factorising gives:

$$\frac{x^2-9}{x^2+x-6}=\frac{(x-3)(x+3)}{(x+3)(x-2)}.$$

The original denominator is zero at $x=-3$ and $x=2$. For all other real inputs, cancel the common factor $x+3$:

$$\boxed{\frac{x^2-9}{x^2+x-6}=\frac{x-3}{x-2},\qquad x\ne-3,2}.$$

The domain is all real $x$ except $-3$ and $2$.

**Check:** At $x=0$, both expressions give $\frac32$. At $x=-3$, the simplified formula alone would give $\frac65$, but the original fraction is undefined. The restriction must remain.

</section>

### Fractions within a fraction

If the numerator or denominator contains fractional coefficients, multiply **both** by a common multiple of their denominators. For example,

$$\frac{\frac12x+1}{\frac14x-2}=\frac{2x+4}{x-8},\qquad x\ne8.$$

Here both the numerator and denominator were multiplied by $4$. There are no common factors to cancel in the result.

## Operations with Fractions

Use the same rules as for numerical fractions. The letters below represent expressions: every denominator must be non-zero.

| Operation | Rule | What to check |
|---|---|---|
| Addition | $\displaystyle\frac ab+\frac cd=\frac{ad+bc}{bd}$ | Use a common denominator; factorise to avoid unnecessary expansion |
| Subtraction | $\displaystyle\frac ab-\frac cd=\frac{ad-bc}{bd}$ | Subtract the whole second numerator |
| Multiplication | $\displaystyle\frac ab\times\frac cd=\frac{ac}{bd}$ | Cancel common factors before expanding |
| Division | $\displaystyle\frac ab\div\frac cd=\frac ab\times\frac dc$ | The divisor must also be non-zero, so $c\ne0$ |
{: .wide-table}

The product $bd$ is a common denominator. If $b$ and $d$ share a factor, you can use a smaller common denominator.

<section class="worked-example" markdown="1">

### Example 2 — Subtract the whole numerator

**Question:** Express $\displaystyle\frac{2}{x-1}-\frac{x}{x+2}$ as a single fraction.

To subtract fractions, first give them the same denominator. Use $(x-1)(x+2)$, with $x\ne1,-2$. Multiply the first numerator and denominator by the second factor, and the second numerator and denominator by the first factor. Each fraction keeps its value:

$$\frac{2}{x-1}-\frac{x}{x+2}=\frac{2(x+2)-x(x-1)}{(x-1)(x+2)}.$$

The minus sign applies to the whole second numerator. Keep brackets until you have expanded it:

$$2x+4-(x^2-x)=-x^2+3x+4.$$

Therefore,

$$\boxed{\frac{2}{x-1}-\frac{x}{x+2}=\frac{-x^2+3x+4}{(x-1)(x+2)},\qquad x\ne1,-2}.$$

The numerator factorises as $-(x-4)(x+1)$, so no factor cancels with the denominator.

**Check:** At $x=0$, both expressions give $-2$.

**Common mistake:** writing $-x(x-1)=-x^2-x$. The correct expansion is $-x^2+x$.

</section>

<section class="worked-example" markdown="1">

### Example 3 — Division adds a restriction

**Question:** Simplify $\displaystyle\frac{x^2-9}{x^2-1}\div\frac{x-3}{x+1}$ and state all restrictions.

The original denominators require $x\ne1,-1$. The divisor must not be zero, so also exclude $x=3$.

Multiply by the reciprocal of the divisor, then factorise:

$$\frac{x^2-9}{x^2-1}\times\frac{x+1}{x-3}
=\frac{(x-3)(x+3)(x+1)}{(x-1)(x+1)(x-3)}.$$

Cancel common factors, keeping all three restrictions:

$$\boxed{\frac{x+3}{x-1},\qquad x\ne-1,1,3}.$$

**Check:** At $x=0$, the original expression is $9\div(-3)=-3$, which agrees with the answer.

**Common mistake:** keeping only $x\ne1$ because it is the only restriction visible in the final denominator. At $x=3$, the original expression would require division by zero.

</section>

## Algebraic Division

Think first of dividing whole numbers. Seventeen contains three groups of five, with two left over:

$$17=5\times3+2,\qquad \frac{17}{5}=3+\frac25.$$

Polynomial division uses the same “divisor times quotient, plus what is left” structure. There is one important difference: we stop when nothing is left, or when the remaining polynomial has a lower highest power than the divisor, rather than comparing their numerical sizes.

The **degree** of a non-zero polynomial is its highest power of $x$. For example, $3x^2-7$ has degree $2$.

| Type of fraction | Degrees | First step |
|---|---|---|
| Proper | Numerator degree is less than denominator degree | Simplify or use partial fractions as needed |
| Improper | Numerator degree is at least denominator degree | Use algebraic division |

For example, $\frac{x+1}{x^2+2}$ is proper, while $\frac{x^2+1}{x^2+2}$ is improper. Equal degrees still require division.

The **quotient** $Q(x)$ tells us what to multiply the divisor by. The **remainder** $R(x)$ is what we must still add to recover the original polynomial. If F is the original polynomial and G is the divisor, then

$$F(x)=G(x)Q(x)+R(x).$$

Thus, wherever $G(x)\ne0$,

$$\frac{F(x)}{G(x)}=Q(x)+\frac{R(x)}{G(x)}.$$

If the remainder is non-zero, its degree must be less than the degree of $G$. A zero remainder means the division is exact.

<section class="worked-example" markdown="1">

### Example 4 — Rearrange a simple numerator

**Question:** Express $\displaystyle\frac{3x+5}{x-2}$ as a constant plus a proper fraction.

How many copies of the denominator account for the x term in the numerator? Three copies do, but their constant term is minus six. The numerator needs plus five, so add eleven to make up the difference:

$$3x+5=3(x-2)+11.$$

Therefore,

$$\boxed{\frac{3x+5}{x-2}=3+\frac{11}{x-2},\qquad x\ne2}.$$

**Check:** Multiply the answer by $x-2$: $3(x-2)+11=3x+5$.

</section>

**Why does substitution give the remainder?** For a linear divisor $ax+b$, where $a\ne0$, the remainder has degree below $1$, so it is a constant $R$:

$$F(x)\equiv(ax+b)Q(x)+R.$$

Choose $x=-b/a$ because it makes the divisor zero. The whole term containing $Q(x)$ then becomes zero, leaving $R=F(-b/a)$. We can use this input in the polynomial identity, which has no division; the original fraction is still undefined there. If two coefficients are unknown and two remainders are given, make each divisor zero in turn. This gives two equations to solve for the unknown numbers.

<section class="worked-example" markdown="1">

### Example 5 — Remainder theorem and comparison of coefficients

**Question:** Express $\displaystyle\frac{2x^3+3x^2-5x+4}{x+2}$ as a quadratic expression plus a proper fraction.

The **remainder theorem** says that the remainder on division of $F(x)$ by $x-a$ is $F(a)$.

Here $x+2=x-(-2)$, so the remainder is

$$F(-2)=2(-2)^3+3(-2)^2-5(-2)+4=10.$$

The numerator's highest power is three and the divisor's is one. The quotient must therefore have highest power two, so that multiplying back produces a cubic. Use three unknown coefficients to describe it and write the polynomial identity:

$$2x^3+3x^2-5x+4\equiv(x+2)(Ax^2+Bx+C)+10.$$

Expand the right-hand side. The two polynomials must be equal for every input, so the numbers multiplying each power must match. This is **comparison of coefficients**:

$$2x^3+3x^2-5x+4\equiv Ax^3+(2A+B)x^2+(2B+C)x+2C+10.$$

| Coefficient | Equation | Result |
|---|---|---|
| $x^3$ | $A=2$ | $A=2$ |
| $x^2$ | $2A+B=3$ | $B=-1$ |
| $x$ | $2B+C=-5$ | $C=-3$ |

The constant term checks: $2C+10=-6+10=4$.

$$\boxed{\frac{2x^3+3x^2-5x+4}{x+2}=2x^2-x-3+\frac{10}{x+2},\qquad x\ne-2}.$$

Substituting $-2$ into the **polynomial** is allowed. The original fraction is undefined there.

#### The same example by long division

Long division gives the same quotient and remainder. Write the powers in descending order and include a zero coefficient for any missing power.

At each step, deal with the term containing the highest power first (the **leading term**). To remove twice x cubed using a divisor beginning with x, choose twice x squared for the quotient. Multiply the whole divisor by that choice, then subtract the whole product. Repeat with what is left, as the rows below show:

| Current expression | Next quotient term | Subtract | New remainder |
|---|---|---|---|
| $2x^3+3x^2-5x+4$ | $2x^2$ | $2x^2(x+2)$ | $-x^2-5x+4$ |
| $-x^2-5x+4$ | $-x$ | $-x(x+2)$ | $-3x+4$ |
| $-3x+4$ | $-3$ | $-3(x+2)$ | $10$ |
{: .wide-table}

Stop because only a constant is left, while the divisor still contains x. That remainder has lower degree than the divisor. Collect the three quotient terms to obtain $2x^2-x-3$.

**Check either method:** Expand $(x+2)(2x^2-x-3)+10$. It gives $2x^3+3x^2-5x+4$.

**A different linear divisor:** For $kx-b$ with $k\ne0$, the constant remainder is $F(\frac bk)$. The quotient coefficients must still account for the leading coefficient $k$.

</section>

### Factor theorem

If nothing is left over in a division, the divisor is a factor: multiplying it by the quotient gives the whole original polynomial. The **factor theorem** states this as follows: $ax+b$ is a factor of $F(x)$ if and only if $F(-\frac ba)=0$, where $a\ne0$. This is the remainder theorem with a zero remainder.

For example, for $F(x)=2x^3+x^2-8x-4$, the divisor $2x+1$ is zero at $x=-\frac12$. Since

$$F\left(-\frac12\right)=-\frac14+\frac14+4-4=0,$$

$2x+1$ is a factor. Division gives

$$\begin{aligned}F(x)&=(2x+1)(x^2-4)\\&=(2x+1)(x-2)(x+2).\end{aligned}$$

Expanding checks the factorisation.

**Common mistake:** substituting $-b$ instead of $-\frac ba$ for a divisor $ax+b$.

<section class="worked-example" markdown="1">

### Example 6 — Divide before using partial fractions

**Question:** Express $\displaystyle\frac{x^2+6x-1}{(x-1)(x+2)}$ as a polynomial plus a proper fraction.

The denominator is $x^2+x-2$. Both highest powers are two, so this is an improper fraction and needs division before partial fractions. One copy of the denominator accounts for the numerator's highest-power term.

Subtract one copy of the denominator from the numerator:

$$x^2+6x-1=(x^2+x-2)+(5x+1).$$

Hence,

$$\boxed{\frac{x^2+6x-1}{(x-1)(x+2)}=1+\frac{5x+1}{(x-1)(x+2)},\qquad x\ne1,-2}.$$

The remainder has degree $1$, which is less than the denominator degree $2$. The fraction after the quotient is now proper.

The [first Partial Fractions example](/alevel/a2-mathematics/partial-fractions/#worked-example-1--different-linear-factors) shows that this remainder fraction is $\frac2{x-1}+\frac3{x+2}$. Therefore the full result is

$$1+\frac2{x-1}+\frac3{x+2},\qquad x\ne1,-2.$$

**Check:** Adding the fractions gives the original numerator:

$$\begin{aligned}&(x-1)(x+2)+2(x+2)+3(x-1)\\&\qquad=x^2+6x-1.\end{aligned}$$

**Common mistake:** giving only the two partial fractions and losing the quotient $1$.

</section>

## Practice

Show your factorisation or division steps. State all restrictions, then check your result before opening the solution.

<section class="lesson-check" markdown="1">

### Question 1 {#question-1--keep-the-original-domain}

Simplify $\displaystyle\frac{x^2-4}{x^2-5x+6}$ and state its domain.

<details markdown="1">
<summary>Hint</summary>

Factorise both polynomials. Which value becomes invisible after you cancel a factor?

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\frac{(x-2)(x+2)}{(x-2)(x-3)}=\frac{x+2}{x-3},\qquad x\ne2,3.$$

The domain is all real $x$ except $2$ and $3$.

**Check:** At $x=0$, both expressions give $-\frac23$. The simplified formula would give $-4$ at $x=2$, but the original fraction is undefined.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 2 {#question-2--a-shared-denominator-factor}

Express $\displaystyle\frac1{x-2}-\frac3{(x-2)(x+1)}$ as a single fraction in its simplest form. State the restrictions.

<details markdown="1">
<summary>Hint</summary>

Use $(x-2)(x+1)$ as the common denominator. You only need to multiply the first numerator by $x+1$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\frac{x+1-3}{(x-2)(x+1)}=\frac{x-2}{(x-2)(x+1)}=\frac1{x+1},\qquad x\ne2,-1.$$

**Check:** At $x=0$, the original expression gives $-\frac12+\frac32=1$, as does the result. The cancelled factor does not allow $x=2$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 3 {#question-3--check-the-divisor-too}

Simplify $\displaystyle\frac{x^2-1}{x^2-4}\div\frac{x+1}{x-2}$ and state all restrictions.

<details markdown="1">
<summary>Hint</summary>

Exclude zeros of both original denominators and any value that makes the divisor zero. Then multiply by its reciprocal.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The denominator restrictions are $x\ne-2,2$. The divisor is zero at $x=-1$, so this value is excluded too.

$$\frac{(x-1)(x+1)}{(x-2)(x+2)}\times\frac{x-2}{x+1}=\frac{x-1}{x+2},\qquad x\ne-2,-1,2.$$

**Check:** At $x=0$, the original expression is $\frac14\div(-\frac12)=-\frac12$, matching the answer.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 4 {#question-4--find-a-quotient-and-remainder}

Express $\displaystyle\frac{x^2+4}{x-2}$ as a polynomial plus a proper fraction. Check the remainder using the remainder theorem.

<details markdown="1">
<summary>Hint</summary>

The quotient is linear. The remainder is $F(2)$ for $F(x)=x^2+4$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The remainder is $F(2)=8$. The identity is

$$x^2+4=(x-2)(x+2)+8.$$

Therefore,

$$\frac{x^2+4}{x-2}=x+2+\frac8{x-2},\qquad x\ne2.$$

**Check:** Expand $(x-2)(x+2)+8=x^2-4+8=x^2+4$.

</details>

</section>

<section class="lesson-check" markdown="1">

### Follow-up {#factor-follow-up}

 For $P(x)=2x^3-3x^2-8x+12$, show that $2x-3$ is a factor, then factorise $P(x)$ fully.

<details markdown="1">
<summary>Hint</summary>

Solve $2x-3=0$, then substitute that input into the polynomial.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$P(\frac32)=\frac{27}{4}-\frac{27}{4}-12+12=0$. By the factor theorem, $2x-3$ is a factor. Division gives

$$\boxed{P(x)=(2x-3)(x^2-4)=(2x-3)(x-2)(x+2).}$$

Expand the factors to check the original polynomial.

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 5 {#question-5--a-quadratic-divisor}

Express $\displaystyle\frac{x^3+2x^2+3x+4}{x^2-1}$ as a polynomial plus a proper fraction. State its domain and verify the identity. After studying Partial Fractions, return and decompose the proper fraction.

<details markdown="1">
<summary>Hint</summary>

Use long division with divisor $x^2-1$. A non-zero remainder may now be linear. Keep the quotient when you form the partial fractions.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Subtract $x(x^2-1)$ from the numerator to leave $2x^2+4x+4$. Subtract $2(x^2-1)$ to leave $4x+6$.

The quotient is $x+2$ and the remainder is $4x+6$:

$$\frac{x^3+2x^2+3x+4}{x^2-1}=x+2+\frac{4x+6}{(x-1)(x+1)},\qquad x\ne1,-1.$$

**After studying the next page:** For the proper fraction, write

$$4x+6\equiv A(x+1)+B(x-1).$$

Setting $x=1$ gives $A=5$. Setting $x=-1$ gives $B=-1$. Hence,

$$\boxed{x+2+\frac5{x-1}-\frac1{x+1},\qquad x\ne1,-1}.$$

**Check:** $5(x+1)-(x-1)=4x+6$. Including the quotient gives the original numerator:

$$\begin{aligned}&(x^2-1)(x+2)+(4x+6)\\&\qquad=x^3+2x^2+3x+4.\end{aligned}$$

</details>

</section>

<section class="lesson-check" markdown="1">

### Question 6 {#check-remainders}

<!-- task:check-remainders -->
Let $P(x)=2x^3+bx^2+cx+1$. The remainder on division by $2x-1$ is $4$, and the remainder on division by $x+1$ is $-2$. Find $b$ and $c$, showing the equations used.
<!-- /task:check-remainders -->

<details markdown="1">
<summary>Hint</summary>

Find the value of $x$ making each divisor zero and substitute into $P$; a remainder is an output, not the input.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$P\left(\frac12\right)=\frac14+\frac b4+\frac c2+1=4\quad\Rightarrow\quad b+2c=11.$$

$$P(-1)=-2+b-c+1=-2\quad\Rightarrow\quad b-c=-1.$$

Subtract the second equation from the first: $3c=12$, so $c=4$. Then $b-c=-1$ gives $b=3$.

$$\boxed{b=3,\qquad c=4}.$$

Check $P(\frac12)=4$ and $P(-1)=-2$. Substituting $1$ in the first condition ignores the leading coefficient of the divisor; review the remainder identity, then attempt R3.

</details>

</section>

## Repair and try again {#repair-and-retry}

Close the old answer and choose a new task for your error. Check the identity and the domain separately.

| Error | Recovery action | New task |
| --- | --- | --- |
| Cancelled terms or lost an excluded input | Review [factor cancellation](#factorise-first); list original denominator zeros | [R1](#retry-domain) |
| Treated multiplication and division restrictions alike | Review [division](#example-3--division-adds-a-restriction); also check whether the divisor is zero | [R2](#retry-operations) |
| Used the wrong input when the divisor's x coefficient was not one | Review [the remainder demonstration](#example-5--remainder-theorem-and-comparison-of-coefficients); solve divisor equals zero first | [R3](#retry-remainder) |
| Lost quotient or wrong remainder degree | Review [the division identity](#algebraic-division); expand GQ+R | [R4](#retry-division) |

<section class="lesson-check" markdown="1">

### R1 {#retry-domain}

<!-- task:retry-domain -->
Simplify $\displaystyle\frac{x^2+x-6}{x^2-4}$ and give the domain of the original expression. Explain whether $x=2$ becomes allowed.
<!-- /task:retry-domain -->

<details markdown="1">
<summary>Hint</summary>

Factorise both polynomials; a value for the simplified formula does not make the original input allowed.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$\frac{(x+3)(x-2)}{(x-2)(x+2)}=\frac{x+3}{x+2},\qquad x\ne-2,2.$$

The original is still undefined at $x=2$. At $x=0$, both forms give $\frac32$; that substitution is a check, while factorisation establishes the identity.

</details>

</section>

<section class="lesson-check" markdown="1">

### R2 {#retry-operations}

<!-- task:retry-operations -->
Let $A(x)=\displaystyle\frac{x^2-4}{x-1}$ and $B(x)=\displaystyle\frac{x-2}{x+1}$. Simplify $A(x)B(x)$ and $A(x)\div B(x)$, stating every restriction for each. Explain any difference.
<!-- /task:retry-operations -->

<details markdown="1">
<summary>Hint</summary>

The product requires both expressions to be defined; the quotient also requires $B(x)\ne0$.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$A(x)B(x)=\frac{(x-2)^2(x+2)}{(x-1)(x+1)},\qquad x\ne-1,1.$$

$$A(x)\div B(x)=\frac{(x+2)(x+1)}{x-1},\qquad x\ne-1,1,2.$$

The product is defined and equals zero at $x=2$. The quotient would divide by zero there, so that input remains excluded after cancellation.

</details>

</section>

<section class="lesson-check" markdown="1">

### R3 {#retry-remainder}

<!-- task:retry-remainder -->
For $H(x)=4x^3-4x^2-7x+4$, determine the remainder on division by $2x-1$. Decide whether $2x-1$ is a factor and find the quotient.
<!-- /task:retry-remainder -->

<details markdown="1">
<summary>Hint</summary>

Calculate $H(\frac12)$; if the remainder is zero, verify the factor by multiplying it by the quotient.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$H\left(\frac12\right)=\frac12-1-\frac72+4=0.$$

$$H(x)=(2x-1)(2x^2-x-4).$$

The remainder is $0$, so $2x-1$ is a factor and the quotient is $2x^2-x-4$. Expansion recovers the polynomial; this does not define the original fraction at $x=\frac12$.

</details>

</section>

<section class="lesson-check" markdown="1">

### R4 {#retry-division}

<!-- task:retry-division -->
Express $\displaystyle\frac{2x^3+x^2+1}{x^2-1}$ as a polynomial plus a proper fraction. State the quotient, remainder and original domain, and check the identity.
<!-- /task:retry-division -->

<details markdown="1">
<summary>Hint</summary>

At each step, divide the terms with the highest powers. The remainder may be linear; keep excluding the original forbidden inputs if you simplify the remaining fraction.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$2x^3+x^2+1=(x^2-1)(2x+1)+(2x+2).$$

$$\frac{2x^3+x^2+1}{x^2-1}=2x+1+\frac{2x+2}{x^2-1}=2x+1+\frac2{x-1},\qquad x\ne-1,1.$$

The quotient is $2x+1$ and remainder $2x+2$, of degree $1<2$. Expanding the product and adding the remainder recovers the numerator. Final cancellation does not allow $x=-1$.

</details>

</section>

## Return later {#review}

After Partial Fractions, attempt this without the examples and explain your starting decision.

<section class="lesson-check" markdown="1">

### Review task {#later-review}

<!-- task:later-review -->
Write $\displaystyle\frac{x^3-2x^2+x-2}{x^2-4}$ as a polynomial plus a proper fraction in its simplest form, keeping the original domain. Find the remainder when the original numerator is divided by $x-2$, and explain how that agrees with your simplification.
<!-- /task:later-review -->

<details markdown="1">
<summary>Hint</summary>

Grouping and long division are both possible. Multiply by the original denominator to check the rewrite, and check the domain separately.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$x^3-2x^2+x-2=(x-2)(x^2+1),\qquad x^2-4=(x-2)(x+2).$$

$$\frac{x^3-2x^2+x-2}{x^2-4}=x-2+\frac5{x+2},\qquad x\ne-2,2.$$

Let $P$ denote the original numerator. The remainder is $P(2)=0$, agreeing with the numerator factor $x-2$. Check division using $(x+2)(x-2)+5=x^2+1$. Direct division by the original quadratic divisor gives the same quotient $x-2$ but remainder $5x-10$, not $5$: a remainder belongs to a specified divisor. If you lost the excluded input $2$, return to R1; for a remainder error, return to R4.

</details>

</section>

## Quick Reference

| Task | Method | Check |
|---|---|---|
| Simplify | Factorise, then cancel common factors | Keep the original domain restrictions |
| Add or subtract | Use a common denominator | Put brackets around a numerator being subtracted |
| Multiply | Multiply numerators and denominators | Cancel factors before expanding |
| Divide | Multiply by the reciprocal | Exclude values that make the divisor zero |
| Divide polynomials | Find quotient and remainder | Expand divisor times quotient plus remainder |
| Use the remainder theorem | For divisor $ax+b$, calculate $F(-\frac ba)$, where $a\ne0$ | Substitute into the polynomial, not the fraction |
| Use the factor theorem | Check whether that remainder is zero | Expand the resulting factors to check |
| Prepare for partial fractions | Divide if the fraction is improper | Keep the quotient in the final answer |

**Can you explain it?** Why can a cancelled factor still exclude an input? Why does division need one more check than multiplication? When is the remainder a constant, and when can it be linear?

[Next: Partial Fractions](/alevel/a2-mathematics/partial-fractions/) · [Back to the topic index](/alevel/a2-mathematics/) · [All reference notes](/alevel/a2-mathematics/quick-reference/#algebraic-fractions)

<details markdown="1">
<summary>Scope and sources</summary>

[OxfordAQA 9660 specification v5.2, P2.1](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf).

Official questions and paired marking material consulted (mirrors of the published papers): January 2025 Q1, QP p3 / MS p4. [January 2025 QP](https://aqamat.alevelclouds.com/25_01_QP_P2.pdf) · [MS](https://aqamat.alevelclouds.com/25_01_MS_P2.pdf).

The classroom examples, practice, retries and review are self-written teaching material, with no official marks.

</details>

**Learning path:** [Previous: Modulus Functions and Transformations](/alevel/a2-mathematics/modulus-and-transformations/) · [Next: Partial Fractions](/alevel/a2-mathematics/partial-fractions/).
