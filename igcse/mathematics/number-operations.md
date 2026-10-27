---
layout: subjects
title: "Number operations"
mathjax: true
grade: igcse
subject: igcse-mathematics
permalink: /igcse/mathematics/number-operations/
reading_layout: true
study_page: true
toc_headings: "h2"
---

[IGCSE Mathematics](/igcse/mathematics/#learning-start)
{:.lesson-meta}

## Keep the meaning while you calculate {#start}

A balance can be below zero, a ribbon can be cut into fractional lengths, and two repeating events may meet again. These questions need different calculations. Start with place value and check each answer by reversing the operation. You need counting and multiplication tables; fraction meaning is recapped in [the fractions lesson](/igcse/mathematics/fractions-decimals-and-percentages/#same-amount). All tasks here are self-written, with no official marks.

## A digit changes value when its place changes {#place-value}

In 305.047, the 3 represents 300, the 4 represents 0.04, and the 7 represents 0.007. Each move one place left multiplies a place value by 10; one place right divides it by 10. The zeros hold places, so 3.05 and 3.5 are different. Appending a zero after a decimal does not change its value: $3.50=3.5$. Multiply 0.047 by 100 to get 4.7: the digits move two places relative to the decimal point. Divide 305 by 1000 to get 0.305.

## Negative numbers and direction {#signed-numbers}

On a number line, moving right increases the number. So $-4<-1<0<2$. A larger distance from zero does not always mean a larger number: negative numbers lie to the left. Write $a\ne b$ when values differ; use $\le$ or $\ge$ if equality is allowed.

![Number line with evenly spaced ticks from minus four to four; the arrow points right towards increasing values.](/assets/img/igcse-number-integer-line.svg)

Adding a positive number moves right; adding a negative number moves left. Subtracting undoes addition: removing a loss increases a balance.

$$-3+5=2,\qquad -3-5=-8,\qquad -3-(-5)=-3+5=2.$$

For multiplication, extend a pattern: $(-3)\times2=-6$, $(-3)\times1=-3$, $(-3)\times0=0$, so $(-3)\times(-1)=3$. Each step increases the product by 3. Thus equal signs give a positive product or quotient; different signs give a negative one. Division is checked by multiplication. Division by zero is undefined.

## Write the steps so place values stay aligned {#written-methods}

<div class="worked-example" markdown="1">

### Addition and subtraction {#example-written-add}

**Question:** Work out 27.68 + 4.57 and 30.02 - 4.57 using written methods.

Align decimal points so hundredths meet hundredths, not tens. For addition, 8+7=15 hundredths: write 5 and carry 1 tenth. Then 6+5+1=12 tenths: write 2 and carry 1 unit. Units give 7+4+1=12; carry 1 ten.

$$\begin{array}{r}27.68\\+\,4.57\\\hline32.25\end{array}$$

For subtraction, exchange one of the 3 tens for 10 units, one unit for 10 tenths, then one tenth for 10 hundredths. The top row is now 2 tens, 9 units, 9 tenths and 12 hundredths. Subtract column by column:

$$\begin{array}{r}30.02\\-\,4.57\\\hline25.45\end{array}$$

Check by reversing: $25.45+4.57=30.02$. Approximate checks, 28+5 about 33 and 30-5 about 25, match the scale.

</div>

<div class="worked-example" markdown="1">

### Multiplication and division {#example-written-multiply}

**Question:** Work out 3.24 times 1.5 and 12.6 divided by 0.4 without a calculator.

First multiply whole numbers. Split the 15 into 5 and 10, not 5 and 1:

$$\begin{array}{r}324\\\times\,15\\\hline1620\\3240\\\hline4860\end{array}$$

The inputs were multiplied by 100 and 10 to become whole numbers. Undo that factor of 1000:

$$3.24\times1.5=4.860=4.86.$$

For division, multiply both dividend and divisor by 10; the quotient stays unchanged. In 126 divided by 4, 4 goes into 12 three times. Bring down 6: one 4 leaves remainder 2. Write a decimal point and bring down a zero: 20 gives five 4s.

$$12.6\div0.4=126\div4=31.5.$$

Check: $31.5\times0.4=12.6$. For a positive dividend and a positive divisor below 1, the quotient is larger than the dividend. For a negative input such as $-12.6\div0.4$, calculate the magnitude the same way and then use the sign rule to get -31.5. Its magnitude increases, but its value becomes smaller: $-31.5<-12.6$. It is farther to the left of zero.

</div>

## Fractions must count equal-sized parts {#fraction-arithmetic}

For positive fractions, a proper fraction has numerator smaller than denominator, such as $\frac34$; an improper fraction such as $\frac74$ contains at least one whole. A mixed number writes wholes and a part:

$$1\frac34=\frac{1\times4+3}{4}=\frac74,\qquad -1\frac34=-\left(1+\frac34\right)=-\frac74.$$

For addition and subtraction, count a common unit: thirds and quarters can both become twelfths. For multiplication, take a share of a share: three quarters of two thirds is six twelfths. To divide by a non-zero fraction, multiply by its reciprocal, because a number times its reciprocal is 1.

<div class="worked-example" markdown="1">

### Four fraction operations {#example-fractions}

**Question:** Calculate $\frac23+\frac14$, $\frac23-\frac14$, $\frac23\times\frac34$ and $-1\frac12\div\frac34$.

Only addition and subtraction require equal denominators:

$$\frac23+\frac14=\frac8{12}+\frac3{12}=\frac{11}{12},\qquad
\frac23-\frac14=\frac8{12}-\frac3{12}=\frac5{12}.$$

For multiplication, cancel common factors across numerator and denominator, which divides both by the same non-zero number:

$$\frac23\times\frac34=\frac6{12}=\frac12.$$

For division, change the mixed number first. If $q$ is the quotient, then $q\times\frac34=-\frac32$; multiplying by $\frac43$ isolates $q$:

$$-\frac32\div\frac34=-\frac32\times\frac43=-2.$$

Check: $-2\times\frac34=-\frac32$. Adding denominators would count different-sized pieces as if they were the same size.

</div>

## Decide what is done first {#operation-order}

Brackets group a calculation. Then evaluate powers and roots, then multiplication and division from left to right, then addition and subtraction from left to right. Multiplication has no priority over division at the same level. A fraction bar groups its whole numerator and denominator.

$$18\div3\times2=6\times2=12,\qquad
\frac{3+5}{2^2}=8\div4=2.$$

The reciprocal of a non-zero number $a$ is $1/a$, so the reciprocal of $-\frac23$ is $-\frac32$. Use a calculator to check an expression with explicit brackets; the display does not choose the intended grouping for you.

## Choose between factors and multiples {#factors-multiples}

A factor divides a whole number exactly; a multiple is made by multiplying it by a whole number. Even integers divide by 2; odd integers do not. A prime is a positive integer greater than 1 with exactly two positive factors. Thus 1 is not prime, 2 is prime and even, and 9 is odd but not prime.

Prime factorisation splits a number into primes: $24=2\times12=2\times2\times6=2^3\times3$ and $36=2^2\times3^2$. Here $2^3$ is shorthand for three factors of 2. For the highest common factor (HCF), keep only the prime copies both numbers have. For the lowest common multiple (LCM), keep enough copies to contain each number:

$$\operatorname{HCF}(24,36)=2^2\times3=12,\qquad
\operatorname{LCM}(24,36)=2^3\times3^2=72.$$

12 is the largest equal group size that divides both. 72 is the first positive total reached by counting in either 24s or 36s. These are different questions, even though they use the same factorisations.

## Choose and explain {#practice}

<div class="lesson-check" markdown="1">

### Compare the values {#practice-order}

**Question:** Order $-0.4,\ -\frac38,\ 0.04,\ -\frac25$ from smallest to largest, using equality where needed. State the value of the 4 in 7.046 and calculate 7.046 times 100.

<details markdown="1">
<summary>Hint</summary>

Convert fractions to decimals, then place negative values to the left of zero.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$-0.4=-\frac25<-\frac38<0.04.$$

The 4 represents 0.04 and $7.046\times100=704.6$. Since -0.4 is farther left than -0.375, it is smaller, despite having a larger magnitude.

</details>

</div>

<div class="lesson-check" markdown="1">

### Account for a balance {#practice-arithmetic}

**Question:** Calculate $-18+7$, $-18-(-7)$, $(-6)(-4)$ and $24\div(-3)$. A balance is -12.75 dollars. A payment of 28.60 dollars is added and a fee of 4.85 dollars is subtracted. Find the new balance using written addition/subtraction. Also calculate $-2.35\times1.2$ and $-8.4\div(-0.6)$ with written methods; check both by an inverse operation.

<details markdown="1">
<summary>Hint</summary>

Find the magnitude first, keep decimal places aligned, then apply signs.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$-18+7=-11,\quad-18-(-7)=-11,\quad(-6)(-4)=24,\quad24\div(-3)=-8.$$

$$-12.75+28.60=15.85,\qquad15.85-4.85=11.00.$$

For the multiplication, $235\times12=2350+470=2820$, then divide by 1000:

$$-2.35\times1.2=-2.82,\qquad-8.4\div(-0.6)=84\div6=14.$$

Written division: 6 into 8 gives 1 with remainder 2; bring down 4, and 24 gives 4. Checks: $-2.82\div1.2=-2.35$ and $14\times(-0.6)=-8.4$. The balance check is $11+4.85-28.60=-12.75$.

</details>

</div>

<div class="lesson-check" markdown="1">

### Keep exact values {#practice-fractions}

**Question:** Calculate $-\frac56+\frac34$, $1\frac16-(-\frac23)$, $-\frac78\times\frac4{21}$ and $2\frac14\div(-\frac38)$. Give exact simplified answers and check the division.

<details markdown="1">
<summary>Hint</summary>

Convert the mixed numbers; addition/subtraction uses common parts, division uses a reciprocal.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$-\frac56+\frac34=-\frac{10}{12}+\frac9{12}=-\frac1{12}.$$

$$1\frac16-(-\frac23)=\frac76+\frac46=\frac{11}6=1\frac56.$$

$$-\frac78\times\frac4{21}=-\frac16,\qquad
2\frac14\div(-\frac38)=\frac94\times(-\frac83)=-6.$$

Check: $-6\times(-\frac38)=\frac94$. A negative times a negative is positive, so the inverse check returns the positive dividend.

</details>

</div>

<div class="lesson-check" markdown="1">

### Does the working follow the expression? {#practice-order-of-operations}

**Question:** A learner writes $24\div6\times2=2$. Explain the error, evaluate $5-2(3-7)+\sqrt{16}$, and give the reciprocal of $-\frac45$.

<details markdown="1">
<summary>Hint</summary>

Multiplication/division at the same level is left to right. Evaluate the bracket before multiplying.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$24\div6\times2=4\times2=8.$$

The learner grouped 6 times 2 without a bracket.

$$5-2(3-7)+\sqrt{16}=5-2(-4)+4=5+8+4=17.$$

The reciprocal is $-\frac54$; multiplying it by $-\frac45$ gives 1.

</details>

</div>

<div class="lesson-check" markdown="1">

### Two situations with the same numbers {#practice-factors}

**Question:** There are 48 red beads and 60 blue beads. Make the greatest possible number of identical bags using all beads. How many bags, and what is in each? Two signals flash every 48 s and 60 s; they flash together now. When do they next flash together? Give prime factorisations of 48 and 60. Classify 1, 2, 9 and 10 as odd/even and prime/not prime.

<details markdown="1">
<summary>Hint</summary>

For bags, the number of bags must divide both counts. For signals, the elapsed time must be a multiple of both intervals.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$48=2^4\times3,\qquad60=2^2\times3\times5.$$

The greatest bag count is 12, with 4 red and 5 blue beads per bag. The next common time is 240 s:

$$\operatorname{HCF}=2^2\times3=12,\qquad\operatorname{LCM}=2^4\times3\times5=240.$$

1 is odd and not prime; 2 is even and prime; 9 is odd and not prime; 10 is even and not prime. Giving 12 seconds for the signals fails: neither has completed an interval.

</details>

</div>

## Try again after repairing the idea {#retry}

Use the matching link before retrying: [place value and order](#place-value), [written methods](#written-methods), [fractions](#fraction-arithmetic), [operation order](#operation-order), or [factors and multiples](#factors-multiples). Record whether a hint was needed.

<div class="lesson-check" markdown="1">

### Retry the comparison {#retry-order}

**Question:** Insert $<$, $>$ or $=$ between $-\frac7{10}$ and -0.68. What does the 7 mean in 0.0705? Divide 70.5 by 100.

<details markdown="1">
<summary>Hint</summary>

Compare -0.70 and -0.68 on the number line.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$-\frac7{10}<-0.68,\qquad70.5\div100=0.705.$$

The 7 represents 0.07. Moving right from -0.70 reaches -0.68, so -0.68 is larger.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry the arithmetic {#retry-arithmetic}

**Question:** Use written methods for $8.07+3.96$, $20.01-8.76$, $-1.6\times2.4$ and $-7.2\div0.3$. Check one by an inverse operation.

<details markdown="1">
<summary>Hint</summary>

Align addition/subtraction columns. For division, scale both numbers by 10.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$8.07+3.96=12.03,\qquad20.01-8.76=11.25.$$

Addition carries through hundredths and tenths. Subtraction exchanges a ten across the zero columns.

$$-1.6\times2.4=-\frac{16\times24}{100}=-3.84,\qquad-7.2\div0.3=-72\div3=-24.$$

The partial products for 16 times 24 are 64 and 320. Check: $-24\times0.3=-7.2$.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry exact arithmetic {#retry-fractions}

**Question:** Calculate $-\frac34+\frac56$, $-1\frac14-\frac23$, $-\frac35\times(-\frac{10}9)$ and $-\frac56\div1\frac23$.

<details markdown="1">
<summary>Hint</summary>

A negative mixed number negates the whole mixed quantity.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$-\frac34+\frac56=\frac1{12},\qquad
-1\frac14-\frac23=-\frac54-\frac23=-\frac{23}{12}.$$

$$-\frac35\times(-\frac{10}9)=\frac23,\qquad
-\frac56\div1\frac23=-\frac56\times\frac35=-\frac12.$$

Check the division: $-\frac12\times\frac53=-\frac56$.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry the grouping {#retry-order-of-operations}

**Question:** Evaluate $30\div5\times3-2^2$ and $(30\div5)(3-2)^2$. Give the reciprocal of -4.

<details markdown="1">
<summary>Hint</summary>

The second expression has a different bracket structure.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$30\div5\times3-2^2=6\times3-4=14,\qquad
(30\div5)(3-2)^2=6\times1=6.$$

The reciprocal of -4 is $-\frac14$; their product is 1.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry the choice {#retry-factors}

**Question:** Find the shortest ribbon length that can be cut into either 18 cm or 30 cm pieces with no waste. Then find the greatest number of identical packs made from 18 pencils and 30 erasers, using all items. Explain the different choices. Also classify 15, 17 and 18 as odd/even and prime/not prime.

<details markdown="1">
<summary>Hint</summary>

One answer is a common multiple, the other a common divisor.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$$18=2\times3^2,\qquad30=2\times3\times5.$$

The ribbon is 90 cm; 6 packs each contain 3 pencils and 5 erasers.

$$\operatorname{LCM}=2\times3^2\times5=90,\qquad\operatorname{HCF}=2\times3=6.$$

90 is divisible by either cut length; 6 divides both item counts. 15 is odd and not prime; 17 is odd and prime; 18 is even and not prime. For 17, no integer from 2 to 8 divides it exactly. A factor from 9 to 16 would need a paired integer factor strictly between 1 and 2, which is impossible. Its only positive factors are therefore 1 and 17.

</details>

</div>

## Carry these habits forward {#next-step}

Continue to [powers, roots and standard form](/igcse/mathematics/powers-roots-and-standard-form/#start). After another topic, do [mixed number review](/igcse/mathematics/mixed-review/#number-review) with this page closed; return to the particular concept if choosing the operation is difficult.

## Scope and sources {#sources}

<details markdown="1">
<summary>Scope, tier and reference reading</summary>

N1–N4 and the exact-fraction part of N7: ordering, signed written arithmetic, place value, operation order, reciprocals, prime factors, HCF and LCM. These foundations lead to powers and surds on the following pages.

[OxfordAQA 9260 specification v5.1, PDF pp.10–11](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf).

9260/1C, **Specimen 2018**, Q21(a)(b): [QP PDF p.17](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601C-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=17), [MS PDF p.9](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=9).

9260/2C, **Specimen 2018**, Q7: [QP PDF p.6](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=6), [MS PDF p.5](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=5).

9260/2E, **Specimen 2018**, Q6: [QP PDF p.5](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-specimen-paper-2016-v1.pdf#page=5), [MS PDF p.5](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=5).

The paired pages above informed the teaching; no official question is reproduced here. All examples and tasks are self-written, with no official marks. Contexts and diagram data are constructed for learning.

</details>
