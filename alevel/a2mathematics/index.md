---
title: A2 Mathematics
layout: subjects
mathjax: true
grade: a2
subject: a2mathematics
---

# P2 (Pure Mathematics)
## P2.1: Algebra and Functions

### Functions
- **Definition**: A function maps each input to exactly one output
- **Domain**: Set of all possible input values  
- **Range**: Set of all possible output values
- **Notation**: $$f(x) = x^2 - 4$$

### Function Composition
- $$fg(x) = f(g(x))$$
- The output of g becomes the input of f

### Inverse Functions
- Denoted as $$f^{-1}$$
- Graphically: Reflection in the line $$y = x$$
- Only exists if the function is one-to-one

### Modulus Function
- $$\lvert x \rvert = \begin{cases} x & \text{if } x \geq 0 \\ -x & \text{if } x < 0 \end{cases}$$
- Solves inequalities like $$\lvert x + 2 \rvert < 3\lvert x \rvert$$
- Graph forms a V-shape

### Transformations
Combinations of:
- $$y = af(x)$$ → Vertical stretch by factor a
- $$y = f(x) + a$$ → Vertical translation by a
- $$y = f(x + a)$$ → Horizontal translation by -a
- $$y = f(ax)$$ → Horizontal stretch by factor 1/a

**Examples from specification:**
- $$y = e^x$$ leading to $$y = e^{2x} - 1$$
- $$y = \ln x$$ leading to $$y = 2\ln(x - 1)$$
- $$y = \sec x$$ leading to $$y = 3\sec 2x$$

### Rational Functions
- Use Factor Theorem and Remainder Theorem for divisors of the form $$(ax + b)$$
- **Simplification example**: $$\frac{x^2 - 4x}{x^2 - 5x + 4} = \frac{x(x - 4)}{(x - 4)(x - 1)} = \frac{x}{x - 1}$$

### Algebraic Division
**Examples:**
- $$\frac{3x + 4}{x - 1} = 3 + \frac{7}{x - 1}$$
- $$\frac{2x^3 - 3x^2 - 2x + 2}{x - 2} = 2x^2 + x + \frac{2}{x - 2}$$

### Partial Fractions
- Denominators not more complicated than repeated linear terms
- **Maximum complexity**: $$\frac{3 + 2x^2}{(2x + 1)(x - 3)^2}$$

---

## P2.2: Sequences and Series

### Binomial Series
- $$(1 + x)^n$$ for any rational $$n$$
- Valid for $$\lvert x \rvert < 1$$
- **Example**: $$(2 + 3x)^{-2} = \frac{1}{4}\left(1 + \frac{3x}{2}\right)^{-2}$$, valid for $$\lvert x \rvert < \frac{2}{3}$$

### Series Expansion
- Using partial fractions for rational functions
- **Maximum complexity**: $$\frac{3 + 2x^2}{(2x + 1)(x - 3)^2}$$

---

## P2.3: Coordinate Geometry

### Parametric Equations
- Curves defined by $$x = f(t), y = g(t)$$
- Conversion between Cartesian and parametric forms
- **Examples**:
  - $$x = t^2, y = 2t$$
  - $$x = a\cos\theta, y = b\sin\theta$$
  - $$x = \frac{1}{t}, y = 3t$$
  - $$x = t + \frac{1}{t}, y = t - \frac{1}{t} \Rightarrow (x + y)(x - y) = 4$$

---

## P2.4: Trigonometry

### Inverse Trigonometric Functions
- $$\sin^{-1}x$$: Domain $$[-1,1]$$, Range $$[-\frac{\pi}{2}, \frac{\pi}{2}]$$
- $$\cos^{-1}x$$: Domain $$[-1,1]$$, Range $$[0, \pi]$$
- $$\tan^{-1}x$$: Domain $$\mathbb{R}$$, Range $$(-\frac{\pi}{2}, \frac{\pi}{2})$$

### Reciprocal Functions
- $$\sec x = \frac{1}{\cos x}$$
- $$\cosec x = \frac{1}{\sin x}$$
- $$\cot x = \frac{1}{\tan x}$$

### Trigonometric Identities
- $$1 + \tan^2 x = \sec^2 x$$
- $$1 + \cot^2 x = \cosec^2 x$$
- $$\sin 2A = 2\sin A\cos A$$
- $$\cos 2A = \cos^2 A - \sin^2 A = 2\cos^2 A - 1 = 1 - 2\sin^2 A$$
- $$\tan 2A = \frac{2\tan A}{1 - \tan^2 A}$$

### Compound Angle Formulae
- $$\sin(A \pm B) = \sin A\cos B \pm \cos A\sin B$$
- $$\cos(A \pm B) = \cos A\cos B \mp \sin A\sin B$$
- $$\tan(A \pm B) = \frac{\tan A \pm \tan B}{1 \mp \tan A\tan B}$$

### R-formulae
- $$a\cos\theta + b\sin\theta = R\cos(\theta \pm \alpha)$$ or $$R\sin(\theta \pm \alpha)$$
- Where $$R = \sqrt{a^2 + b^2}$$ and $$\tan\alpha = \frac{a}{b}$$ or $$\tan\alpha = \frac{b}{a}$$

### Trigonometric Equations
**Examples from specification:**
- Solve $$3\sin 2x = \cos x, 0 \leq x \leq 4\pi$$
- Solve $$2\sin x + 3\cos x = 1.5, -180^\circ < x \leq 180^\circ$$

---

## P2.5: Exponentials and Logarithms

### Exponential Function
- $$y = e^x$$
- Graph: Always positive, increasing, y-intercept at (0,1)

### Natural Logarithm
- $$y = \ln x$$ - inverse of $$e^x$$
- Graph: Domain $$x > 0$$, x-intercept at (1,0)

### Applications
- Exponential growth and decay models

---

## P2.6: Differentiation

### Basic Derivatives

| Function | Derivative |
|----------|------------|
| $$e^{kx}$$ | $$ke^{kx}$$ |
| $$\ln x$$ | $$\frac{1}{x}$$ |
| $$\sin kx$$ | $$k\cos kx$$ |
| $$\cos kx$$ | $$-k\sin kx$$ |
| $$\tan kx$$ | $$k\sec^2 kx$$ |

### Product Rule
- $$\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)$$

**Example**: Differentiate $$x^2 \ln x$$
- $$f(x) = x^2$$, $$f'(x) = 2x$$
- $$g(x) = \ln x$$, $$g'(x) = \frac{1}{x}$$
- Derivative: $$2x\ln x + x^2 \cdot \frac{1}{x} = 2x\ln x + x$$

### Quotient Rule
- $$\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$$

**Example**: Differentiate $$\frac{2x + 1}{3x - 2}$$
- $$f(x) = 2x + 1$$, $$f'(x) = 2$$
- $$g(x) = 3x - 2$$, $$g'(x) = 3$$
- Derivative: $$\frac{2(3x - 2) - (2x + 1)3}{(3x - 2)^2} = \frac{6x - 4 - 6x - 3}{(3x - 2)^2} = \frac{-7}{(3x - 2)^2}$$

### Chain Rule
- $$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$$
- For composite functions: $$\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$$

#### Chain Rule Examples

**Example 1**: Differentiate $$(2x^3 - 5x + 1)^4$$
- Let $$u = 2x^3 - 5x + 1$$, then $$y = u^4$$
- $$\frac{du}{dx} = 6x^2 - 5$$
- $$\frac{dy}{du} = 4u^3$$
- $$\frac{dy}{dx} = 4(2x^3 - 5x + 1)^3 \cdot (6x^2 - 5)$$

**Example 2**: Differentiate $$e^{3x^2}$$
- Let $$u = 3x^2$$, then $$y = e^u$$
- $$\frac{du}{dx} = 6x$$
- $$\frac{dy}{du} = e^u$$
- $$\frac{dy}{dx} = e^{3x^2} \cdot 6x = 6xe^{3x^2}$$

**Example 3**: Differentiate $$\sin(5x^2 - 2x)$$
- Let $$u = 5x^2 - 2x$$, then $$y = \sin u$$
- $$\frac{du}{dx} = 10x - 2$$
- $$\frac{dy}{du} = \cos u$$
- $$\frac{dy}{dx} = \cos(5x^2 - 2x) \cdot (10x - 2)$$

**Example 4**: Differentiate $$\ln(4x^3 + 7)$$
- Let $$u = 4x^3 + 7$$, then $$y = \ln u$$
- $$\frac{du}{dx} = 12x^2$$
- $$\frac{dy}{du} = \frac{1}{u}$$
- $$\frac{dy}{dx} = \frac{1}{4x^3 + 7} \cdot 12x^2 = \frac{12x^2}{4x^3 + 7}$$

### Alternative Chain Rule Form
- $$\frac{dy}{dx} = \frac{1}{\frac{dx}{dy}}$$

**Example**: Curve $$x = y^2 - 4y + 1$$, find $$\frac{dy}{dx}$$ when $$y = 1$$
- $$\frac{dx}{dy} = 2y - 4$$
- When $$y = 1$$: $$\frac{dx}{dy} = 2(1) - 4 = -2$$
- Therefore: $$\frac{dy}{dx} = \frac{1}{-2} = -\frac{1}{2}$$

### Implicit Differentiation
- Differentiate both sides with respect to x
- Treat y as a function of x
- Use chain rule for y terms: $$\frac{d}{dx}[f(y)] = f'(y)\frac{dy}{dx}$$

### Parametric Differentiation
- Given $$x = f(t), y = g(t)$$
- $$\frac{dy}{dx} = \frac{dy/dt}{dx/dt}$$

### Applications
- Finding tangents and normals for curves defined implicitly or parametrically
- Equations of tangents at general points

---

## Key Differentiation Rules Summary

| Rule | Formula | When to Use |
|------|---------|-------------|
| Product | $$\frac{d}{dx}[uv] = u'v + uv'$$ | Two functions multiplied |
| Quotient | $$\frac{d}{dx}[\frac{u}{v}] = \frac{u'v - uv'}{v^2}$$ | One function divided by another |
| Chain | $$\frac{dy}{dx} = \frac{dy}{du}\cdot\frac{du}{dx}$$ | Composite functions |
| Implicit | Differentiate both sides, include $$\frac{dy}{dx}$$ | Equations not in y = f(x) form |

