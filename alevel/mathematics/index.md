---
layout: subjects
title: AS Mathematics
mathjax: true
grade: as
subject: math
---

# Introduction to AS Mathematics
## OxfordAQA International AS Mathematics (9660)

AS Mathematics forms the first part of the A-Level Mathematics qualification. The AS level consists of two examined components:

- **International AS Unit P1**: Pure Mathematics (50% of AS, 20% of A-Level)
- **International AS Unit PSM1**: Pure Mathematics, Statistics and Mechanics (50% of AS, 20% of A-Level)

### Assessment Structure

| Unit | Duration | Marks | Calculator | Weighting |
|-----|----------|-------|------------|-----------|
| P1 | 1 hour 30 minutes | 80 marks | Allowed | 50% of AS |
| PSM1 | 1 hour 30 minutes | 80 marks | Allowed | 50% of AS |

*Note: PSM1 consists of 40 marks Pure Maths, 20 marks Statistics, and 20 marks Mechanics*

---

# Revision Guide

## 3.1 International AS Unit P1 (Pure Maths)

### P1.1: Algebra

#### Surds and Indices
- **Surd Manipulation**: 
  - Simplification: $\sqrt{12} = 2\sqrt{3}$
  - Rationalisation: $\frac{1}{\sqrt{2}-1} = \sqrt{2}+1$
  - Complex rationalisation: $\frac{2\sqrt{3}+\sqrt{2}}{3\sqrt{2}+\sqrt{3}} = \frac{\sqrt{6}}{3}$
- **Laws of Indices**: For all rational exponents
  - $a^m \times a^n = a^{m+n}$
  - $(a^m)^n = a^{mn}$
  - $a^0 = 1$, $a^{-n} = \frac{1}{a^n}$

#### Quadratic Functions
- **Graph Characteristics**: Vertex, line of symmetry, intercepts
- **Discriminant Analysis** ($\Delta = b^2 - 4ac$):
  - $\Delta > 0$: Two distinct real roots
  - $\Delta = 0$: Equal (repeated) roots  
  - $\Delta < 0$: No real roots
- **Solution Methods**:
  - Factorisation: $2x^2 + x - 6 = (2x - 3)(x + 2)$
  - Completing square: $x^2 + 6x - 1 = (x + 3)^2 - 10$
  - Quadratic formula: $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$

#### Polynomials
- **Algebraic Division**: Division by linear terms $(x - a)$
  - Methods: Inspection, equating coefficients, formal division
- **Remainder Theorem**: $f(a)$ = remainder when $f(x) \div (x - a)$
- **Factor Theorem**: If $f(a) = 0$, then $(x - a)$ is a factor
- **Application**: Factorise cubics like $x^3 - 5x^2 + 7x - 3$

#### Inequalities and Simultaneous Equations
- **Quadratic Inequalities**: Solve $2x^2 + x \geq 6$
- **Simultaneous Equations**: One linear, one quadratic - solve by substitution

#### Functions and Graphs
- **Function Types**: Linear, quadratic, cubic
- **Graph Sketching**: Interpret intersection points as equation solutions
- **Transformations**:
  - $y = af(x)$: Vertical stretch scale factor $a$
  - $y = f(x) + a$: Vertical translation
  - $y = f(x + a)$: Horizontal translation  
  - $y = f(ax)$: Horizontal stretch scale factor $\frac{1}{a}$

### P1.2: Coordinate Geometry

#### Straight Lines
- **Equation Forms**:
  - $y = mx + c$ (gradient-intercept)
  - $y - y_1 = m(x - x_1)$ (point-gradient)
  - $ax + by + c = 0$ (general form)
- **Geometrical Calculations**:
  - Gradient: $m = \frac{y_2 - y_1}{x_2 - x_1}$
  - Distance: $d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$
  - Midpoint: $\left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$

#### Line Relationships
- **Parallel Lines**: $m_1 = m_2$
- **Perpendicular Lines**: $m_1 \times m_2 = -1$
- **Intersections**: Line with curve - interpret roots geometrically

### P1.3: Differentiation

#### Fundamental Concepts
- **Derivative as Gradient**: $f'(x)$ = gradient of tangent at point
- **Rate of Change**: Interpretation as instantaneous rate
- **Notation**: $f'(x)$ or $\frac{dy}{dx}$
- **Basic Rules**:
  - $\frac{d}{dx}(ax^n) = anx^{n-1}$ ($n$ rational)
  - $\frac{d}{dx}[f(x) + g(x)] = f'(x) + g'(x)$

#### Applications
- **Tangents and Normals**:
  - Tangent: $y - y_1 = f'(x_1)(x - x_1)$
  - Normal: $y - y_1 = -\frac{1}{f'(x_1)}(x - x_1)$
- **Stationary Points**: Where $f'(x) = 0$
- **Second Derivatives**: Determine nature of stationary points
- **Optimisation**: Practical problems involving maxima/minima

### P1.4: Integration

#### Basic Integration
- **Reverse of Differentiation**: $\int f'(x) dx = f(x) + c$
- **Standard Results**:
  - $\int ax^n dx = \frac{a}{n+1}x^{n+1} + c$ ($n \neq -1$)
  - $\int [f'(x) + g'(x)] dx = f(x) + g(x) + c$

#### Definite Integrals and Applications
- **Area Under Curve**: $A = \int_a^b y dx$ ($y \geq 0$)
- **Negative Areas**: Regions below x-axis give negative values
- **Area Between Curves**: Between line and curve, or two curves
- **Trapezium Rule**: Approximation of area
  - Graphical interpretation of over/under-estimation

### P1.5: Sequences and Series

#### Sequences
- **nth Term**: Given by formula $u_n = f(n)$
- **Iterative Sequences**: $x_{n+1} = f(x_n)$, find limit as $n \to \infty$

#### Series
- **Arithmetic Series**:
  - $u_n = a + (n - 1)d$
  - $S_n = \frac{n}{2}[2a + (n - 1)d]$
- **Geometric Series**:
  - $u_n = ar^{n-1}$
  - $S_n = \frac{a(1 - r^n)}{1 - r}$ ($r \neq 1$)
  - $S_\infty = \frac{a}{1 - r} \quad (|r| < 1)$
- **Binomial Expansion**:
  - $(1 + x)^n = 1 + nx + \frac{n(n-1)}{2!}x^2 + \cdots + x^n$
  - Notation: $n!$, $\binom{n}{r}$

---

## 3.2 International AS Unit PSM1 (Pure Maths, Statistics and Mechanics)

### PP1.1: Circles

#### Circle Geometry
- **Standard Equation**: $(x - a)^2 + (y - b)^2 = r^2$
- **Completing Square**: Convert to centre-radius form
- **Circle Properties**:
  - Angle in semicircle = $90°$
  - Perpendicular from centre bisects chord
  - Tangent perpendicular to radius at point of contact
- **Tangents and Normals**: Find equations using geometry

### PP1.2: Trigonometry

#### Trigonometric Fundamentals
- **Sine/Cosine Rules**:
  - $\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$
  - $a^2 = b^2 + c^2 - 2bc\cos A$
- **Area of Triangle**: $\frac{1}{2}ab\sin C$
- **Radian Measure**: $180^\circ = \pi$ radians
- **Arc and Sector**:
  - Arc length: $l = r\theta$
  - Sector area: $A = \frac{1}{2}r^2\theta$

#### Trigonometric Functions and Equations
- **Graphs**: Sine, cosine, tangent - symmetry and periodicity
- **Identities**:
  - $\tan\theta = \frac{\sin\theta}{\cos\theta}$
  - $\sin^2\theta + \cos^2\theta = 1$
- **Solving Equations**: In given intervals, up to difficulty of $2\sin^2\theta + 5\cos\theta = 4$

### PP1.3: Exponentials and Logarithms

#### Exponential Functions
- **Graph**: $y = a^x$, always positive, increasing if $a > 1$
- **Laws of Indices**: Applied where appropriate

#### Logarithmic Functions
- **Laws of Logarithms**:
  - $\log_a x + \log_a y = \log_a(xy)$
  - $\log_a x - \log_a y = \log_a\left(\frac{x}{y}\right)$
  - $k\log_a x = \log_a(x^k)$
- **Inverse Relationship**: $y = a^x \Leftrightarrow x = \log_a y$
- **Solving Equations**: $a^x = b$ using logarithms

---

### S1.1: Further Probability

#### Probability Fundamentals
- **Basic Concepts**: Random events, relative frequency, equally likely outcomes
- **Set Notation**: Understanding but not essential for use
- **Probability Laws**:
  - $P(A \cup B) = P(A) + P(B) - P(A \cap B)$
  - $P(A') = 1 - P(A)$
  - Mutually exclusive: $P(A \cup B) = P(A) + P(B)$

#### Conditional Probability and Independence
- **Multiplication Law**:
  - $P(A \cap B) = P(A) \times P(B\vert A) = P(B) \times P(A\vert B)$
  - Independent: $P(A \cap B) = P(A) \times P(B)$
- **Application**: Direct application of probability laws, frequency tables

### S1.2: Discrete Random Variables

#### Probability Distributions
- **Discrete Random Variables**: Finite outcomes, tabular or functional form
- **Measures**:
  - Central tendency: Mean
  - Spread: Variance, standard deviation

#### Expectation and Variance
- **Formulae**:
  - $E(X) = \mu = \sum x_i P_i$
  - $E(g(X)) = \sum g(x_i)P_i$
  - $Var(X) = E((X - \mu)^2) = E(X^2) - \mu^2$
- **Linear Transformations**:
  - $E(aX + b) = aE(X) + b$
  - $Var(aX + b) = a^2Var(X)$
- **Sums of Variables**:
  - $E(aX + bY) = aE(X) + bE(Y)$
  - $Var(aX + bY) = a^2Var(X) + b^2Var(Y)$ (independent)

### S1.3: Bernoulli and Binomial Distributions

#### Bernoulli Distribution
- **Conditions**: Single trial, two outcomes
- **Mean and Variance**:
  - $E(X) = p$
  - $Var(X) = p(1-p)$

#### Binomial Distribution
- **Definition**: Sum of independent Bernoulli trials
- **Probability**: $P(X = r) = \binom{n}{r}p^r(1-p)^{n-r}$
- **Mean and Variance**:
  - $E(X) = np$
  - $Var(X) = np(1-p)$
- **Calculation**: Using formula and tables

---

### M1.1: Motion in a Straight Line with Constant Acceleration

#### Kinematics Fundamentals
- **Basic Quantities**:
  - Displacement vs distance
  - Velocity vs speed
- **Graphs**: Sketching and interpreting kinematics graphs
- **Gradients and Areas**: Using graphs to solve problems

#### Constant Acceleration Equations
- **Standard Formulae**:
  - $v = u + at$
  - $s = ut + \frac{1}{2}at^2$
  - $v^2 = u^2 + 2as$
  - $s = \frac{1}{2}(u + v)t$
- **Vertical Motion**: Under gravity ($a = -9.8 ms^{-2}$)
- **Average Speed**: Total distance $\div$ total time

### M1.2: Motion in a Straight Line with Variable Acceleration

#### Calculus in Kinematics
- **Relationships**:
  - $v = \frac{ds}{dt}$
  - $a = \frac{dv}{dt} = \frac{d^2s}{dt^2}$
  - $s = \int v dt$
  - $v = \int a dt$
- **Application**: Using P1 calculus techniques

### M1.3: Forces and Newton's Laws

#### Forces and Equilibrium
- **Common Forces**:
  - Weight: $W = mg$ ($g = 9.8 ms^{-2}$)
  - Tension, thrust, normal reaction, friction
  - Dynamic friction: $F = \mu R$
- **Newton's Laws**: Applied to straight-line motion
- **Connected Particles**: Light inextensible strings, smooth pulleys

### M1.4: Momentum and Impulse

#### Momentum Principles
- **Momentum**: $p = mv$
- **Conservation**: Applied to two particles in straight line
- **Impulse**: Change in momentum = impulse
- **Direct Impact**: With fixed smooth surface