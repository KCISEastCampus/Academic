---
title: "Bayes: changing the sample space"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/bayes/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/) · S1 · FS1.1

All demonstrations, scaffolded attempts, independent tasks and retries here are **self-written**, with no official marks. Write your method and reasons before opening hints and solutions separately.

## Change the sample space, not the conditional direction {#model}

You will construct complete trees with two or three sources, justify the denominator after an observation, and recover an unknown branch rate. Recall that conditional probability restricts the sample space to the event after the bar. Its probability must be positive.

$$
\begin{aligned}
&P(A\mid B)=\frac{P(A\cap B)}{P(B)},\\
&P(B)>0.
\end{aligned}
$$

Sources form a mutually exclusive, exhaustive partition: exactly one source occurs. Within each source, the observation and its complement exhaust that branch. Source and observation need not be independent. Here r is two or three.

The two/three-source model here assumes positive source priors so that within-source conditionals are defined. Remove zero-prior sources first; if just one source remains, its posterior is one whenever the observation is possible.

$$
\begin{aligned}
&P(B)=\sum_{i=1}^{r}P(A_i)P(B\mid A_i),\\
&P(A_j\mid B)\\
&\quad=\frac{P(A_j)P(B\mid A_j)}{P(B)},\\
&r\in\{2,3\},\\
&P(B)>0.
\end{aligned}
$$

Draw and label the first source branches, then split each into B and its complement with conditional probabilities. Multiply along every path to label joint-probability leaves. First branches total one; each second-stage pair totals one; all leaves total one. Circle every observed-event leaf, add them for the denominator, and choose the required source leaf for the numerator. If the observed event has probability zero, the posterior is undefined.

If joint probabilities are unfamiliar, revisit [AS probability](/alevel/as-mathematics/probability/#l18), then complete the scaffold before drawing new trees.

## Demonstration: rebuild the observed population {#demonstration}

<section class="worked-example" markdown="1">

**Demonstration (self-written):** Sources A, B, C supply respectively 0.5, 0.3, 0.2 of items, with defect probabilities 0.02, 0.04, 0.10. An item is selected at random from the combined output. Given it is defective, find its source-C probability.

![Three-source probability tree: A 0.5, B 0.3, C 0.2; each splits to defective and not defective with probabilities 0.02/0.98, 0.04/0.96, 0.10/0.90. Leaf joint probabilities are shown.](/alevel/as-further-mathematics/diagrams/bayes.svg){: width="560" height="665" }

The diagram is part of this demonstration. All three defect paths belong in the denominator. The numerator includes selecting C as well as obtaining a defect from C.

$$
\begin{aligned}
&P(A\cap D)=0.5(0.02)=0.010,\\
&P(B\cap D)=0.3(0.04)=0.012,\\
&P(C\cap D)=0.2(0.10)=0.020,\\
&P(D)=0.010+0.012+0.020=0.042,\\
&P(C\mid D)=\frac{0.020}{0.042}=\frac{10}{21}.
\end{aligned}
$$

Check with a constructed population of 10,000: sources contribute 5,000, 3,000 and 2,000 items, with 100, 120 and 200 defects. The ratio is 200 out of 420. These are constructed counts, not measurements. C supplies 20% of output but a much larger share of defects; 0.10 answers the reverse conditional question.

</section>

## Demonstration: recover an unknown rate {#inverse}

<section class="worked-example" markdown="1">

**Demonstration 2 (self-written):** Two equally likely sources have alert rates r and 0.2. Given an alert, the first source has probability 0.6. Find r and check the model.

Write the posterior before solving: the unknown rate affects both numerator and denominator.

$$
\begin{aligned}
&0.6=\frac{0.5r}{0.5r+0.5(0.2)},\\
&0.6(r+0.2)=r,\\
&0.12=0.4r,\\
&r=0.3.
\end{aligned}
$$

Check: the alert probability is 0.25 and the first alert leaf is 0.15; their ratio is 0.6. The conditioning event has positive probability and r lies in the allowed interval. Check both conditions in every inverse problem.

</section>

## Complete a branch, then draw new trees {#practice}

<section class="lesson-check" id="scaffold" markdown="1">

**Scaffold (self-written):** Complete the not-defective leaves of the same tree and calculate $P(C\mid D^c)$.

<details markdown="1"><summary>Hint</summary>

Complement within each source, then multiply along the path.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&P(A\cap D^c)=0.49,\\
&P(B\cap D^c)=0.288,\\
&P(C\cap D^c)=0.18,\\
&P(D^c)=0.958,\\
&P(C\mid D^c)=\frac{0.18}{0.958}=\frac{90}{479}.
\end{aligned}
$$

All six leaves total one.

</details>

</section>

<section class="lesson-check" id="practice-1" markdown="1">

**Independent task (self-written):** A randomly selected sample was processed by laboratory A with probability 0.6 or B with probability 0.4. Pass probabilities are 0.9 for A and 0.75 for B. Draw and label a complete probability tree. A sample fails; find the probability B processed it, and explain why 0.25 is not the answer.

<details markdown="1"><summary>Hint</summary>

Circle every failure path, not only the B failure.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&P(F\mid A)=0.1,\\
&P(F\mid B)=0.25,\\
&P(A\cap F)=0.06,\\
&P(B\cap F)=0.10,\\
&P(A\cap F^c)=0.54,\\
&P(B\cap F^c)=0.30,\\
&P(F)=0.06+0.10=0.16,\\
&P(B\mid F)=\frac{0.10}{0.16}=\frac58.
\end{aligned}
$$

Your tree must show first branches 0.6/0.4 and second pairs 0.9/0.1, 0.75/0.25. All four leaves total one. The given 0.25 conditions on B, whereas the question conditions on failure.

</details>

</section>

<section class="lesson-check" id="practice-2" markdown="1">

**Independent task 2 (self-written):** Sources A, B, C have shares 0.2, 0.5, 0.3 and alert probabilities 0.1, 0.2, 0.4 respectively. Draw a new complete probability tree, label every branch and joint-probability leaf, and find the probability of C given an alert. Check your tree in two ways.

<details markdown="1"><summary>Hint</summary>

Each source needs alert and no-alert branches.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&P(A\cap L)=0.02,\\
&P(A\cap L^c)=0.18,\\
&P(B\cap L)=0.10,\\
&P(B\cap L^c)=0.40,\\
&P(C\cap L)=0.12,\\
&P(C\cap L^c)=0.18,\\
&P(L)=0.24,\\
&P(C\mid L)=\frac{0.12}{0.24}=\frac12.
\end{aligned}
$$

First branches are 0.2/0.5/0.3; second pairs are 0.1/0.9, 0.2/0.8, 0.4/0.6. Every split totals one, and the six leaves total one (alert 0.24, no alert 0.76). Your own tree is required, not only a posterior.

</details>

</section>

<section class="lesson-check" id="practice-3" markdown="1">

**Independent task 3 (self-written):** A and B supply 0.4 and 0.6 of items. Their defect rates are r and 0.1. Given a defect, A has probability 0.5. Find r and check that the proposed model is admissible.

<details markdown="1"><summary>Hint</summary>

Do not equate a branch rate to a posterior.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&\frac12=\frac{0.4r}{0.4r+0.6(0.1)},\\
&0.2r+0.03=0.4r,\\
&r=0.15,\\
&P(D)=0.12.
\end{aligned}
$$

Both defect leaves are 0.06. Rates are admissible and the conditioning event is possible.

</details>

</section>

## Choose a retry from your error {#retry}

Reversed conditional: redo retry 1 and name the denominator in words. Incomplete tree: draw retry 2 on blank paper. Impossible rate: reread the inverse demonstration, then do retry 3. A posterior above one usually means an observed path was omitted from the denominator.

<section class="lesson-check" id="retry-1" markdown="1">

**Retry (self-written):** In the laboratory task, a sample passes. Find the probability it came from A.

<details markdown="1"><summary>Hint</summary>

Circle the pass leaves this time.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&P(F^c)=0.54+0.30=0.84,\\
&P(A\mid F^c)=\frac{0.54}{0.84}=\frac9{14}.
\end{aligned}
$$

The observed population is now all passes.

</details>

</section>

<section class="lesson-check" id="retry-2" markdown="1">

**Retry 2 (self-written):** A, B, C process shares 0.25, 0.25, 0.5 of samples; their pass rates are 0.8, 0.6, 0.9. Draw and label a complete tree on blank paper. Given a failure, find the probability of C and verify all leaf probabilities sum to one.

<details markdown="1"><summary>Hint</summary>

Complement each pass rate before multiplying.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&P(A\cap F)=0.05,\\
&P(A\cap F^c)=0.20,\\
&P(B\cap F)=0.10,\\
&P(B\cap F^c)=0.15,\\
&P(C\cap F)=0.05,\\
&P(C\cap F^c)=0.45,\\
&P(F)=0.20,\\
&P(C\mid F)=\frac14.
\end{aligned}
$$

Second pairs are 0.8/0.2, 0.6/0.4, 0.9/0.1. Six leaves total one.

</details>

</section>

<section class="lesson-check" id="retry-3" markdown="1">

**Retry 3 (self-written):** A and B have shares 0.25 and 0.75, defect rates r and 0.2. Given a defect, A has probability 0.4. Find and check r.

<details markdown="1"><summary>Hint</summary>

Separate the A defect joint probability from the defect total.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&0.4=\frac{0.25r}{0.25r+0.75(0.2)},\\
&0.10r+0.06=0.25r,\\
&r=0.4,\\
&P(D)=0.25.
\end{aligned}
$$

The numerator is 0.10, so substitution gives 0.10/0.25=0.4.

</details>

</section>

## Return after another statistics chapter {#later-review}

<section class="lesson-check" id="later-task" markdown="1">

**Later review (self-written):** Three suppliers have shares 0.5, 0.25, 0.25 and alert rates 0.1, 0.2, 0.4. Without notes, draw a complete tree and find the first supplier probability given an alert and given no alert. Would conditioning on an alert still be defined if all three alert rates were zero? Explain.

<details markdown="1"><summary>Hint</summary>

Find the observed sample space twice. Then ask whether an alert can occur.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$
\begin{aligned}
&P(A\cap L)=0.05,\\
&P(A\cap L^c)=0.45,\\
&P(B\cap L)=0.05,\\
&P(B\cap L^c)=0.20,\\
&P(C\cap L)=0.10,\\
&P(C\cap L^c)=0.15,\\
&P(L)=0.20,\\
&P(L^c)=0.80,\\
&P(A\mid L)=\frac14,\\
&P(A\mid L^c)=\frac{0.45}{0.80}=\frac9{16}.
\end{aligned}
$$

If every alert rate is zero, the alert event has probability zero. The corresponding conditional probability is undefined, not zero.

</details>

</section>

## Decide your next step {#next-step}

Proceed to discrete uniform when you can draw a complete new tree and justify its posterior denominator. If the tree is correct but the ratio is reversed, revisit the observed-population demonstration and retry 1. If inverse algebra is the obstacle, write joint probabilities first and redo the inverse demonstration. After the next statistics chapter, return to the later review without notes.

## Sources and scope {#sources}

Scope follows 9665 v5.2. The paired questions and mark schemes below informed the required evidence; these exercises do not reproduce their questions or award official marks.

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FS1.1.
- FM02 June 2024 Q6; QP p.13, MS p.12. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

[Previous](/alevel/as-further-mathematics/euler-method/) · [Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/discrete-uniform/)

{% include exam_topic_practice.html %}
