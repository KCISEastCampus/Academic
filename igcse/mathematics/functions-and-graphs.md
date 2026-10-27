---
layout: subjects
title: "Functions and graphs"
mathjax: true
grade: igcse
subject: igcse-mathematics
permalink: /igcse/mathematics/functions-and-graphs/
reading_layout: true
study_page: true
toc_headings: "h2"
---

[IGCSE Mathematics](/igcse/mathematics/#learning-start)

{:.lesson-meta}

## Start here {#start}

A rule takes an input and produces an output. A graph shows many input–output pairs at once. Start with the machine idea, then study the separate sections on allowed inputs, combining rules and graph shapes.

You need [substitution and rearranging](/igcse/mathematics/expressions-and-formulae/#start), [coordinates](/igcse/mathematics/coordinates-and-lines/#coordinates) and [quadratic graphs](/igcse/mathematics/quadratics-and-simultaneous-equations/#sketch). Start with function machines and familiar graphs, then connect function notation, domains, inverse/composite functions, exponential/trigonometric graphs and variation.

All examples, tasks and data on this page are self-written, with no official marks; data are illustrative. Try on paper before opening help.

{:.lesson-meta}

## One input, one output {#machines}

A function is a rule assigning exactly one output to each allowed input. Different inputs may share an output. “Multiply by 3, then subtract 4” sends 2 to 2 and 5 to 11. To find an input from an output, undo the operations in reverse order.

<div class="worked-example" markdown="1">

### Work forwards and backwards {#example-machine}

**Question:** A machine multiplies its input by 3, then subtracts 4. Find the output for input −2, and input for output 8.

$$(3)(-2)-4=-10;\qquad 3x-4=8\Rightarrow3x=12\Rightarrow x=4.$$

Check the backwards answer by running it forwards: 3×4−4=8. Subtracting 4 before multiplying would be a different rule.

</div>

## Test a rule {#practice}

<div class="lesson-check" markdown="1">

### A new machine {#practice-machine}

**Question:** A machine adds 5, then multiplies by 2. Find its output for −3, the input giving output 18, and an expression for output from input x.

<details markdown="1">

<summary>Hint</summary>

Bracket the first operation because the whole result is doubled.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$2(-3+5)=4;\quad 2(x+5)=18\Rightarrow x=4;\quad \text{output}=2(x+5).$$

The rule is not 2x+5, since both the input and the added 5 get doubled. Check input 4 gives 18.

</details>

</div>

## Allowed inputs and actual outputs {#domain}

Write f(x) for the output of function f at input x. It is not f times x. The **domain** is the allowed input set; the **range** is the set of outputs actually reached. A formula and a domain together determine the range. A graph is a function when no vertical line hits more than one included point.

<div class="worked-example" markdown="1">

### An interval changes the range {#example-domain}

**Question:** For $f(x)=x^2$ with $-2\le x\le3$, state the domain and range.

Inputs run from −2 to 3, including 0. Squaring makes outputs non-negative. The smallest is 0 at x=0; the largest is 9 at x=3. Every intermediate height is reached on 0≤x≤3.

$$\text{domain}:\ -2\le x\le3;\qquad \text{range}:\ 0\le f(x)\le9.$$

Squaring just the two endpoints would miss the minimum. For h(x)=1/x the input 0 is forbidden, and output 0 is never reached.

</div>

<div class="lesson-check" markdown="1">

### Find the actual outputs {#practice-domain}

**Question:** For $f(x)=(x-1)^2$ on −1≤x≤3, state domain and range. For $g(x)=1/x$ with all possible real inputs, state domain and range. Does a rule assigning both +√x and −√x to each positive input define a function?

<details markdown="1">

<summary>Hint</summary>

Find where the square is zero. Ask whether the proposed rule gives one or two outputs.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$f:\ -1\le x\le3,\quad 0\le f(x)\le4;\qquad g:\ x\ne0,\quad g(x)\ne0.$$

f has minimum 0 at x=1 and maximum 4 at either end. The two-root rule is not a function because each positive input gets two distinct outputs. Either chosen branch alone can be a function.

</details>

</div>

## Feed one output into another {#composite}

fg(x) means f(g(x)): do g first, then f. It is not the product f(x)g(x), and reversing order usually changes the answer. The inner rule must exist, and its output must lie in the outer rule’s domain.

<div class="worked-example" markdown="1">

### Order matters {#example-composite}

**Question:** Let $f(x)=x^2+1$ and $g(x)=x-2$, both on all real inputs. Find fg(x), gf(x), fg(3), gf(3).

$$fg(x)=(x-2)^2+1=x^2-4x+5,\qquad gf(x)=(x^2+1)-2=x^2-1,$$

$$fg(3)=2,\qquad gf(3)=8.$$

In the first, the entire output x−2 is squared. In the second, subtract 2 from f’s completed output. Both composites have all-real domains.

</div>

<div class="lesson-check" markdown="1">

### Compose and control the input {#practice-composite}

**Question:** Let $f(x)=2x+1$ and $g(x)=x^2-3$, both on all real inputs. Find fg(x), gf(x), and solve fg(x)=gf(x). Then let h(x)=1/x and k(x)=x−3: find hk(x) and its domain.

<details markdown="1">

<summary>Hint</summary>

Substitute the whole inner expression. For hk, k must not output zero.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$fg(x)=2x^2-5,\qquad gf(x)=(2x+1)^2-3=4x^2+4x-2,$$

$$2x^2+4x+3=0,\qquad \Delta=16-24=-8<0,$$

$$hk(x)=\frac1{x-3},\qquad x\ne3.$$

There is no real x making the first two composites equal. This is a legitimate result, not a reason to change the composite order. hk excludes x=3 because h cannot accept k(3)=0.

</details>

</div>

## Undo a rule {#inverse}

An inverse function returns the original input. Its domain is the old range and its range the old domain. Write y=f(x), solve for x, then rewrite the inverse with a fresh input letter. The symbol f⁻¹ means inverse, not reciprocal. An inverse is a function only when each old output identifies one input.

<div class="worked-example" markdown="1">

### Undo and swap domains {#example-inverse}

**Question:** For $f(x)=3x-4$, 1≤x≤5, find f⁻¹ and state its domain and range.

$$y=3x-4,\quad y+4=3x,\quad x=\frac{y+4}{3},\qquad f^{-1}(x)=\frac{x+4}{3}.$$

The original range is −1≤y≤11, so the inverse domain is −1≤x≤11 and inverse range 1≤f⁻¹(x)≤5. Check f(2)=2 and f⁻¹(2)=2; more generally f⁻¹(f(x))=(3x−4+4)/3=x on the stated domain.

</div>

For x² on all real inputs, +2 and −2 both give 4, so no single inverse can recover which input was used. Restrict to x≥0 and the inverse is √x, domain x≥0. Restrict to x≤0 and the inverse is −√x. The restriction chooses the branch.

<div class="lesson-check" markdown="1">

### Find an inverse and a branch {#practice-inverse}

**Question:** Find the inverse of $f(x)=5-2x$ on −1≤x≤3, stating both domains and ranges. Then find the inverse of g(x)=x² on x≤0 and check it at output 9.

<details markdown="1">

<summary>Hint</summary>

A decreasing linear rule reaches its largest value at its smallest input. Use the negative square-root branch for g.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$f^{-1}(x)=\frac{5-x}{2}.$$

f domain [−1,3], range [−1,7]. Its inverse domain [−1,7], range [−1,3]. For g, range is [0,∞); inverse g⁻¹(x)=−√x, with domain [0,∞), range (−∞,0]. g⁻¹(9)=−3, and g(−3)=9. The plus root would recover an input outside g’s stated domain.

</details>

</div>

## Recognise a shape from its rule {#families}

A line has constant gradient. A quadratic has a symmetric turn. A simple cubic x³ rises through (0,0) with a flat centre and different bending either side. A reciprocal 1/x has two separate branches: positive for positive x, negative for negative x. It never touches either axis, although it approaches them. The axes are asymptotes. Never join the reciprocal branches across x=0.

<div class="worked-example" markdown="1">

### Make the shape drawable {#example-families}

**Question:** Plot $y=x^3$ on −2≤x≤2 and $y=1/x$ on −2≤x≤2, x≠0. Use separate axes.

| x | −2 | −1 | 0 | 1 | 2 |
| --- | --- | --- | --- | --- | --- |
| x³ | −8 | −1 | 0 | 1 | 8 |

| x | −2 | −1 | −0.5 | 0.5 | 1 | 2 |
| --- | --- | --- | --- | --- | --- | --- |
| 1/x | −0.5 | −1 | −2 | 2 | 1 | 0.5 |

For the cubic draw a smooth increasing curve through the origin, flatter near 0. For the reciprocal draw a branch in I and a branch in III, moving steeply towards the y-axis without reaching it. Tables do not authorise a straight segment across a forbidden input. For the line and quadratic, reuse the complete [line construction](/igcse/mathematics/coordinates-and-lines/#example-line) and [parabola construction](/igcse/mathematics/quadratics-and-simultaneous-equations/#example-sketch).

</div>

<div class="lesson-check" markdown="1">

### Match rules to evidence {#practice-families}

**Question:** For $y=x-2$, $y=x^2-2$, $y=x^3-2$ and $y=2/x$, make tables and sketch each on separate axes for −2≤x≤2 (excluding 0 for 2/x). Identify which has a turning point, which is undefined at 0, and which has constant gradient. Give intercepts.

<details markdown="1">

<summary>Hint</summary>

Use integer x-values; for the reciprocal add x=±0.5. Do not infer shape from one common point.

</details>

<details markdown="1">

<summary>Solution and check</summary>

| x | −2 | −1 | 0 | 1 | 2 |
| --- | --- | --- | --- | --- | --- |
| x−2 | −4 | −3 | −2 | −1 | 0 |
| x²−2 | 2 | −1 | −2 | −1 | 2 |
| x³−2 | −10 | −3 | −2 | −1 | 6 |

Line: constant slope 1, intercepts (0,−2),(2,0). Quadratic: minimum (0,−2), roots ±√2. Cubic: rising with a flat inflection at (0,−2), x-intercept ∛2. Reciprocal: undefined at 0, no axis intercepts; values at −2,−1,−0.5,0.5,1,2 are −1,−2,−4,4,2,1. Sketch branches in I and III with axes as asymptotes. The cubic’s flat point is not a turn.

</details>

</div>

## Repeated multiplication {#exponential}

In y=kˣ the input is the exponent; k is a fixed positive number. For k>1 the graph grows; for 0<k<1 it decays; k=1 gives the constant 1. Every such graph passes through (0,1). Values stay positive. For k>1 they approach zero as x decreases without bound; for 0<k<1 they approach zero as x increases without bound. The constant graph for k=1 stays at 1 and does not approach zero. This is different from x³, where the base changes.

<div class="worked-example" markdown="1">

### Watch a multiplier {#example-exponential}

**Question:** Plot $y=2^x$ for −2≤x≤3. Explain why it is not a straight line.

| x | −2 | −1 | 0 | 1 | 2 | 3 |
| --- | --- | --- | --- | --- | --- | --- |
| 2ˣ | 0.25 | 0.5 | 1 | 2 | 4 | 8 |

Each unit step doubles y, rather than adding a constant amount. Plot and join smoothly, staying above the x-axis. Negative exponents give reciprocals, not negative y-values.

</div>

<div class="lesson-check" markdown="1">

### Identify growth or decay {#practice-exponential}

**Question:** Plot $y=(1/2)^x$ for −2≤x≤3. A model is N=80aᵗ with a>0, t in hours. It gives N=20 at t=2 and decreases with time. Find a, the initial value and N at t=3.

<details markdown="1">

<summary>Hint</summary>

Use 80a²=20 and choose the positive root; an initial value uses t=0.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$y:\ 4,2,1,0.5,0.25,0.125;\qquad a^2=\tfrac14,\quad a=\tfrac12,$$

$$N(0)=80,\qquad N(3)=80(\tfrac12)^3=10.$$

Draw a smooth decreasing positive curve through (0,1), approaching y=0. The model halves each hour. A negative a is excluded by the stated condition and would not define the intended positive exponential for all real t.

</details>

</div>

## Repeating graphs in degrees {#trigonometric}

For an angle x measured in degrees, sin x is the vertical coordinate on a unit circle and cos x the horizontal coordinate. One full turn is 360°. Thus sin and cos repeat every 360°, including for negative angles and angles above 360°. Their range is −1 to 1. Tangent is sin x divided by cos x, so it is undefined where cos x=0 and repeats every 180°.

| x (degrees) | 0 | 90 | 180 | 270 | 360 |
| --- | --- | --- | --- | --- | --- |
| sin x | 0 | 1 | 0 | −1 | 0 |
| cos x | 1 | 0 | −1 | 0 | 1 |

Plot and connect with smooth waves, never straight zigzags. For tangent use the following data within one branch. Draw vertical dashed asymptotes at −90° and 90°; the curve increases through (0,0) and grows without bound near the ends. Copy that branch every 180°, without connecting across an asymptote.

| x (degrees) | −60 | −45 | 0 | 45 | 60 |
| --- | --- | --- | --- | --- | --- |
| tan x (approx.) | −1.732 | −1 | 0 | 1 | 1.732 |

For any integer k, tangent is undefined at 90°+180°k. Subtract whole periods to interpret large angles: sin 450°=sin 90°=1, cos(−360°)=1, tan 225°=tan 45°=1. For right-triangle meaning and exact-angle values revisit [trigonometry](/igcse/mathematics/pythagoras-and-trigonometry/#start).

<div class="lesson-check" markdown="1">

### Draw beyond one turn {#practice-trigonometric}

**Question:** Sketch sin x and cos x on separate axes for −180°≤x≤540°, marking zeros, maxima and minima. State each period and range, then find sin(−90°) and cos 450°.

<details markdown="1">

<summary>Hint</summary>

Extend the quarter-turn pattern in both directions. Negative x is an angle, not a negative sign placed outside the function.

</details>

<details markdown="1">

<summary>Solution and check</summary>

| x (degrees) | −180 | −90 | 0 | 90 | 180 | 270 | 360 | 450 | 540 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| sin x | 0 | −1 | 0 | 1 | 0 | −1 | 0 | 1 | 0 |
| cos x | −1 | 0 | 1 | 0 | −1 | 0 | 1 | 0 | −1 |

Draw smooth waves through the points, labelling the horizontal axis in degrees. Period 360°, range [−1,1] for each. sin(−90°)=−1 and cos450°=0. Maxima are height 1, minima −1; neither graph has vertical asymptotes.

</details>

</div>

<div class="lesson-check" markdown="1">

### Draw separate branches {#practice-tangent-graph}

**Question:** Sketch y=tan x for −180°≤x≤360°. Mark zeros, vertical asymptotes and points where y=1 or −1. Find tan(−135°) and explain why tan270° is undefined.

<details markdown="1">

<summary>Hint</summary>

Repeat the branch from −90° to 90° every 180°.

</details>

<details markdown="1">

<summary>Solution and check</summary>

Zeros: −180°,0°,180°,360°. Asymptotes: −90°,90°,270°. y=1 at −135°,45°,225°; y=−1 at −45°,135°,315°. Draw increasing disconnected branches, never crossing asymptotes. tan(−135°)=1; cos270°=0, so tangent’s quotient has zero denominator. Period 180°, range all real numbers.

</details>

</div>

## Read a rule that changes {#context-graphs}

A real-context graph may use a different rule in each interval. Read which interval contains the input before calculating. Open and filled endpoints distinguish exclusions; a jump is not a line you should fill in.

<div class="worked-example" markdown="1">

### A parking fee {#example-context}

**Question:** A constructed parking rule is C=3 for 0<t≤1 and C=3+2(t−1) for 1<t≤4, with t in hours and C in dollars. Plot it and find C at 0.5 and 3 hours.

Draw a horizontal segment from (0,3) open to (1,3) filled. Then a line from (1,3) to (4,9), with the joining point already included by the first rule.

$$C(0.5)=3,\qquad C(3)=3+2(3-1)=7.$$

Time 0 is excluded; the first hour has a fixed fee and later hours add at 2 dollars per hour. Extending the second line back would misprice shorter stays.

</div>

<div class="lesson-check" markdown="1">

### Build a graph from a tariff {#practice-context}

**Question:** A constructed bicycle-hire tariff allows 0 to 4 hours of hire. At t = 0 there is no hire and no charge. A hire of more than 0 and at most 2 hours costs 6 dollars. If the hire lasts more than 2 hours, a 3-dollar continuation fee is added to the first 6 dollars, plus 2 dollars per hour beyond 2 hours; fractions of an hour are charged proportionally. Define the cost C(t), draw its graph with endpoint marks, and state its domain and range. Find C(0), C(2), C(2.5) and C(4). When is the cost 11 dollars? Can the cost be 8 dollars? Explain what happens just after 2 hours.

<details markdown="1">

<summary>Hint</summary>

Separate no hire, up to 2 hours, and more than 2 hours before writing each cost.

</details>

<details markdown="1">

<summary>Solution and check</summary>

First choose the rule by the hire duration. Exactly 2 hours still costs 6 dollars; the continuation fee applies only after 2 hours, and the variable charge uses the extra time.

$$C(t)=\begin{cases}0,&t=0,\\6,&0<t\le2,\\9+2(t-2),&2<t\le4.\end{cases}$$

Draw an isolated filled point at (0,0); a horizontal segment from open (0,6) to filled (2,6); then a rising segment from open (2,9) to filled (4,13). Do not insert a vertical segment across the jump. Label time in hours and cost in dollars.

$$C(0)=0,\quad C(2)=6,\quad C(2.5)=10,\quad C(4)=13.$$

Domain [0,4]; range is {0,6} together with (9,13], excluding 9 itself. Solving 9+2(t−2)=11 gives t=3 hours, inside the final interval. A cost of 8 dollars is impossible: the first charges are 0 or 6, and continuation costs more than 9. Just after 2 hours the cost jumps from 6 to just above 9; the 3-dollar fee is added once, not once per hour. If you included 2 hours in the continuation branch or filled prices between 6 and 9, revisit [intervals and endpoints](#context-graphs), then close this answer and try the [new tank context](#retry-context).

</details>

</div>



## Express a relationship {#variation}

Direct variation means y=kx, or y=kx² when directly proportional to the square of x. Inverse variation means y=k/x, so xy=k stays constant. Find k from a known pair, then use the rule, rather than guessing from a trend. Full ratio reasoning is in [ratio and proportion](/igcse/mathematics/ratio-and-proportion/#start).

<div class="worked-example" markdown="1">

### Find the constant first {#example-variation}

**Question:** y varies inversely as x. When x=4, y=6. Find y when x=8.

$$y=\frac{k}{x},\quad 6=\frac{k}{4}\Rightarrow k=24,\qquad y=\frac{24}{8}=3.$$

Doubling x halves y, agreeing with a fixed product 24. Using y=kx would predict growth and contradict inverse variation.

</div>

<div class="lesson-check" markdown="1">

### Choose the relationship {#practice-variation}

**Question:** (a) y is directly proportional to x² and y=12 when x=2. Find the formula and y at x=3. (b) A rectangle has fixed area 24 cm² with positive sides x,y cm. Express y in terms of x and find y when x=8.

<details markdown="1">

<summary>Hint</summary>

The stated proportion names x², not x. Fixed rectangular area is a fixed product.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$y=kx^2,\quad 12=4k\Rightarrow k=3,\quad y=3x^2,\quad y(3)=27;$$

$$xy=24,\quad y=\frac{24}{x},\ x>0,\qquad y(8)=3\text{ cm}.$$

The first ratio y/x² stays 3; the second product stays 24. Units in the rectangle are area divided by length, giving length.

</details>

</div>

## Return to one idea at a time {#retry}

Wrong operation order: [machines](#machines). Range from endpoints only: [domain](#domain). Wrong composition order: [composite](#composite). Missing inverse branch: [inverse](#inverse). Joined forbidden inputs: [families](#families). Wrong period/units: [trigonometric](#trigonometric). Misread intervals: [context](#context-graphs). Wrong exponential initial value or multiplier: [exponential graphs](#exponential), then [retry](#retry-exponential). Wrong proportionality constant: [variation](#variation).

<div class="lesson-check" markdown="1">

### Retry a machine {#retry-machine}

**Question:** A machine subtracts 3, then squares. Find output for input 1 and all inputs giving output 4.

<details markdown="1">

<summary>Hint</summary>

Undoing a square may give two inputs.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$f(1)=(1-3)^2=4;\quad (x-3)^2=4\Rightarrow x-3=\pm2\Rightarrow x=1,5.$$

Each input still has one output; a shared output does not make the original rule cease to be a function.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry a range {#retry-domain}

**Question:** State the range of f(x)=x²+1 for −3≤x≤2. Explain why the outputs of the endpoints are insufficient.

<details markdown="1">

<summary>Hint</summary>

Check whether x=0 is allowed.

</details>

<details markdown="1">

<summary>Solution and check</summary>

Range [1,10]: minimum 1 at x=0, maximum 10 at x=−3. Endpoints give 10,5 and miss the interior minimum.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry order and restrictions {#retry-composite}

**Question:** Let f(x)=x+1, g(x)=2x. Find fg,gf. For h(x)=1/x and k(x)=x+2, find hk and kh with domains.

<details markdown="1">

<summary>Hint</summary>

Check the inner output before the outer rule.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$fg(x)=2x+1,\quad gf(x)=2x+2;\quad hk(x)=\frac1{x+2},\ x\ne-2;\quad kh(x)=\frac1x+2,\ x\ne0.$$

The two denominator exclusions belong to different inputs; do not carry one domain over to both composites.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry an inverse {#retry-inverse}

**Question:** Find the inverse of f(x)=4x+1 on 0≤x≤2, with its domain and range. Can x² on all real inputs have a single-valued inverse?

<details markdown="1">

<summary>Hint</summary>

Swap old domain and range.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$f^{-1}(x)=\frac{x-1}{4}.$$

Inverse domain [1,9], range [0,2]. x² on all reals has no inverse function because e.g. 1 and −1 both give 1; a domain restriction is needed.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry shapes {#retry-families}

**Question:** Sketch y=x³+1 and y=−1/x using x=−2,−1,−0.5,0.5,1,2, adding x=0 only where allowed. State intercepts and asymptotes.

<details markdown="1">

<summary>Hint</summary>

A negative reciprocal changes the sign of each reciprocal output.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$x^3+1:\ -7,0,0.875,1.125,2,9;\qquad -1/x:\ 0.5,1,2,-2,-1,-0.5.$$

Cubic also includes (0,1); x-intercept (−1,0), no asymptotes. Negative reciprocal has branches II and IV, axes as asymptotes, no intercepts. Never add (0,0) to it.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry exponential behaviour {#retry-exponential}

**Question:** Plot y=3ˣ at x=−2,−1,0,1,2. State intercepts and behaviour as x becomes very negative. A=100(0.8)ᵗ: find A at t=0,1,2.

<details markdown="1">

<summary>Hint</summary>

A negative power is a reciprocal.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$3^x:\ \tfrac19,\tfrac13,1,3,9;\qquad A:\ 100,80,64.$$

The increasing graph crosses (0,1), has no x-intercept and approaches zero for increasingly negative x. The A model decreases by a factor 0.8 each step, not a fixed subtraction of 20.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry cycles and branches {#retry-trigonometric}

**Question:** Sketch sin x and tan x over 0°≤x≤360°, marking key points and asymptotes. Find sin810°, cos(−180°), tan405°. State both ranges.

<details markdown="1">

<summary>Hint</summary>

Reduce angles by a whole period of the correct function.

</details>

<details markdown="1">

<summary>Solution and check</summary>

Sine points (0,0),(90,1),(180,0),(270,−1),(360,0), smoothly joined; range [−1,1]. Tangent zeros 0°,180°,360°, asymptotes 90°,270°, increasing separate branches, range all reals. At 45°,225° tangent is 1; at 135°,315° it is −1. sin810°=1, cos(−180°)=−1, tan405°=1.

</details>

</div>

<div class="lesson-check" markdown="1">

### Retry with a tank {#retry-context}

**Question:** In a constructed tank model, a 10-litre tank contains 2 litres at t = 0. Water enters at a steady 3 litres per minute for the first 2 minutes. The tap is then closed for 2 minutes. From t = 4 to t = 7 minutes water drains at a steady 2 litres per minute. Define V(t) for 0 to 7 minutes and draw its graph. State its domain and range; find V(2), V(4) and V(5), and all times when the volume is 6 litres. Explain what a horizontal part means and whether the graph should jump at a change of rule.

<details markdown="1">

<summary>Hint</summary>

Find how much water is present at each change of rule before describing the next change.

</details>

<details markdown="1">

<summary>Solution and check</summary>

Accumulate the amount of water; the flow rate is not the volume. After 2 minutes the tank holds 2+3×2=8 litres, and it stays at 8 while the tap is closed. Draining begins at minute 4, so subtract 2(t−4), not 2t.

$$V(t)=\begin{cases}2+3t,&0\le t\le2,\\8,&2<t\le4,\\8-2(t-4),&4<t\le7.\end{cases}$$

Label minutes horizontally and litres vertically. Join the filled points (0,2), (2,8), (4,8) and (7,2) by continuous straight segments. The adjacent rules give the same volumes at minutes 2 and 4, so there is no jump. The horizontal segment means constant volume and zero net flow, not an empty tank.

$$V(2)=8,\quad V(4)=8,\quad V(5)=6;\qquad t=\frac43\text{ min}\ \text{or}\ t=5\text{ min}\quad\text{when }V=6.$$

The 6-litre level solves 2+3t=6 during filling and 8−2(t−4)=6 during draining; both times lie in their own intervals. Domain [0,7], range [2,8]; the 10-litre capacity is never exceeded. If you found only one time, test the 6-litre horizontal line on every segment. If you drew a jump, check that you carried forward the earlier volume, then revisit [rules and intervals](#context-graphs).

</details>

</div>



<div class="lesson-check" markdown="1">

### Retry a relationship {#retry-variation}

**Question:** y varies inversely as x², x>0, and y=8 when x=2. Find its formula and y at x=4. Also find the direct-variation formula when z is proportional to x and z=15 at x=3.

<details markdown="1">

<summary>Hint</summary>

The first keeps yx² constant; the second keeps z/x constant.

</details>

<details markdown="1">

<summary>Solution and check</summary>

$$y=\frac{k}{x^2},\ k=8(2^2)=32,\quad y(4)=2;\qquad z=kx,\ k=15/3=5,\quad z=5x.$$

</details>

</div>

## Next step and later review {#next-step}

Study [sequences](/igcse/mathematics/sequences/#start), then revisit the range and composite tasks. Continue to [differentiation and motion](/igcse/mathematics/differentiation-and-motion/#start) to connect a curve to its local gradient.

[Try the mixed algebra review after another topic.](/igcse/mathematics/mixed-review/#algebra-review) Close solutions and record what you can do without help.

## Scope and sources {#sources}

<details markdown="1">

<summary>Qualification and sources used</summary>

A9, A12, A17 and A18; specification PDF 15–16 (printed 16–17). A18 is shared with Number. Angles are degrees throughout.

Read 1C QP PDF 13 Q15 with [MS PDF 8](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601C-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=8); 1E QP PDF 2 Q3 with [MS PDF 4](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9260-92601E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=4); 2E QP PDF 11 Q12–13, 19 Q22, 20 Q23 with [MS PDF 7](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9260-92602E-international-gcse-mathematics-mark-scheme-2016-v1.pdf#page=7) and 13.

OxfordAQA International GCSE Mathematics **9260**, specification **v5.1**. [Qualification](https://www.oxfordaqa.com/qualification/international-gcse-mathematics-9260/); [specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-gcse-mathematics-specification.pdf). Assessment references below are **Specimen 2018** even where the URL says 2016. They calibrate scope and reasoning; no task here is an official examination question.

</details>
