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
---

[AS Further Mathematics](/alevel/as-further-mathematics/) · S1 · FS1.1

All demonstrations, scaffolded attempts, independent tasks and retries here are **self-written**, with no official marks. Write your method and reasons before opening hints and solutions separately.

## What changes after an observation? {#model}

**Start:** for an event B of positive probability, explain $P(A\mid B)=P(A\cap B)/P(B)$. **Goal:** construct a two/three-source tree, keep conditional directions and compute a posterior. Sources must form a mutually exclusive, exhaustive partition. No independence between source and observation is assumed.

$$P(B)=\sum_{i=1}^3P(A_i)P(B\mid A_i),\qquad
P(A_i\mid B)=\frac{P(A_i)P(B\mid A_i)}{P(B)}\quad(P(B)>0).$$

Multiply along a path to obtain a joint probability; add all paths leading to B for its total probability. Then restrict the sample space to B and renormalise.

## Demonstration: reconstruct the relevant population {#demonstration}

**Demonstration (self-written):** Sources A, B, C supply respectively 0.5, 0.3, 0.2 of items, with defect probabilities 0.02, 0.04, 0.10. An item is selected at random from the combined output. Given it is defective, find its source-C probability.

![Three-source probability tree: A 0.5, B 0.3, C 0.2; each splits to defective and not defective with probabilities 0.02/0.98, 0.04/0.96, 0.10/0.90. Leaf joint probabilities are shown.](/alevel/as-further-mathematics/diagrams/bayes.svg)

$$P(D)=0.5(0.02)+0.3(0.04)+0.2(0.10)=0.042;\qquad P(C\mid D)=\frac{0.02}{0.042}=\frac{10}{21}.$$

C supplies only 20% of output but a much larger share of defects. The new denominator is all defective items, not all C items. On a constructed population of 10,000 items there are 100,120,200 defective items from the three sources, making the same ratio $200/420$.

## Scaffold and independent choice {#practice}

**Scaffold (self-written):** Complete the not-defective leaves of the same tree and calculate $P(C\mid D^c)$.

<details markdown="1"><summary>Scaffold check</summary>

$$P(A\cap D^c)=0.49,\quad P(B\cap D^c)=0.288,\quad P(C\cap D^c)=0.18;\qquad P(C\mid D^c)=\frac{0.18}{0.958}=\frac{90}{479}.$$

</details>

**Independent task (self-written):** A randomly selected sample was processed by laboratory A with probability 0.6 or B with probability 0.4. Pass probabilities are 0.9 for A and 0.75 for B. Draw and label a complete probability tree. A sample fails; find the probability B processed it, and explain why 0.25 is not the answer.

<details markdown="1"><summary>Hint</summary>

The supplied 0.25 is conditional on B; the question is conditional on failure. Sum every failure path.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$P(F\mid A)=0.1,\quad P(F\mid B)=0.25;\quad P(F)=0.6(0.1)+0.4(0.25)=0.16;\qquad P(B\mid F)=\frac{0.10}{0.16}=\frac58.$$

The complementary pass leaves are 0.54 and 0.30; all four leaves total 1. $P(F\mid B)$ and $P(B\mid F)$ have different denominators.

</details>

## Diagnose and retry {#retry}

If your posterior exceeds 1, the numerator or denominator is inconsistent. If the denominator is just one path, redraw the observed-event sample space.

**Retry (self-written):** In the laboratory task, a sample passes. Find the probability it came from A.

<details markdown="1"><summary>Retry check</summary>

$$P(A\mid F^c)=\frac{0.54}{0.54+0.30}=\frac9{14}.$$

</details>

## Sources and scope {#sources}

Scope follows 9665 v5.2. The paired questions and mark schemes below informed the required evidence; these exercises do not reproduce their questions or award official marks.

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FS1.1.
- FM02 June 2024 Q6; QP p.13, MS p.12. [FM02 June 2024 QP](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-question-paper.pdf) · [Final MS](/assets/pdf/fx-cg50/references/oxfordaqa-fm02-2024-june-mark-scheme.pdf).

[Previous](/alevel/as-further-mathematics/euler-method/) · [Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/discrete-uniform/)
