---
layout: subjects
title: "Further probability"
mathjax: true
grade: as
subject: as-mathematics
permalink: /alevel/as-mathematics/probability/
toc_headings: h2, h3
study_page: true
---

[AS Mathematics learning route](/alevel/as-mathematics/#learning-route) · S1.1 · OxfordAQA 9660 v5.2

Attempt each task on paper before opening its hint. Use the separate solution to check method, conditions and result. All questions are **self-written**, with no official marks. The paired Chinese page keeps the same English prompts, formulae and numerical answers.

- [L18 Events, tables and changed denominators](#l18)

## L18 · Events, tables and changed denominators {#l18}

Goal: define a random experiment, use conditional probabilities and distinguish independence from exclusion. Prerequisites: fractions and proportions.

A sample space lists possible outcomes; events are subsets. For equally likely outcomes use favourable count divided by total count. Relative frequencies estimate probabilities from observations and need not equal a theoretical value exactly. The addition and conditional rules are

$$P(A\cup B)=P(A)+P(B)-P(A\cap B),\qquad P(A\mid B)=\frac{P(A\cap B)}{P(B)}\quad(P(B)>0).$$

The complement has $P(A')=1-P(A)$. Mutually exclusive means $P(A\cap B)=0$; independent means $P(A\cap B)=P(A)P(B)$. Thus multiplying a conditional probability by its conditioning-event probability recovers the intersection. An intersection cannot exceed either marginal probability, and a union cannot exceed 1. A two-way table often makes denominators visible; tree/Venn diagrams are allowed but not compulsory.

### Worked reasoning {#l18-worked}

**Question:** In a constructed group of 100 equally likely records, 20 belong to both A and B, 20 to A only, 30 to B only, and 30 to neither. Find $P(A\mid B)$ and decide whether A and B are independent or mutually exclusive.

A two-way table is

| | B | Not B | Total |
| --- | --- | --- | --- |
| A | 20 | 20 | 40 |
| Not A | 30 | 30 | 60 |
| Total | 50 | 50 | 100 |

Thus $P(A\mid B)=20/50=0.4$. Also $P(A\cap B)=0.2=0.4(0.5)=P(A)P(B)$, so they are independent. They are not mutually exclusive because the intersection has 20 records. The union is $0.4+0.5-0.2=0.7$.

### Complete a supported attempt {#l18-scaffold}

**Question:** Given $P(A)=0.3$, $P(B\mid A)=0.6$ and $P(B)=0.4$, find the intersection and union probabilities.

<details markdown="1">
<summary>Hint</summary>

The conditional probability is a fraction of A.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$P(A\cap B)=0.3(0.6)=0.18$ and $P(A\cup B)=0.3+0.4-0.18=0.52$.

</details>

### Independent task {#l18-independent}

**Question:** Suppose $P(A)=0.4$, $P(B)=0.7$, and $P(A\mid B)=0.5$. Find the probability of neither event and decide whether the events are independent. A second report gives the same marginal probabilities but intersection 0.45. Can the second report describe a probability model?

<details markdown="1">
<summary>Hint</summary>

Recover the intersection and test probability boundaries as well as formula arithmetic.

</details>

<details markdown="1">
<summary>Solution and check</summary>

The first intersection is $0.5(0.7)=0.35$, so the union is $0.75$ and neither has probability $0.25$. Independence fails because $0.35\ne0.4(0.7)=0.28$. The second report is impossible: $0.45>P(A)=0.4$.

</details>

### Diagnose and repair {#l18-diagnosis}

Using the whole group as a conditional denominator ignores the information given. Independence is a product test, not absence of overlap. The stored MA02 January 2025 Q7(b) has incompatible marginals/intersection; this course uses new, consistent data and does not silently repair that official identity.

### Try again {#l18-retry}

**Question:** Events C and D are mutually exclusive with probabilities 0.2 and 0.3. Find $P(C\mid D)$ and decide whether they are independent.

<details markdown="1">
<summary>Hint</summary>

Compare zero intersection with the product of the positive marginals.

</details>

<details markdown="1">
<summary>Solution and check</summary>

$P(C\mid D)=0/0.3=0$. They are not independent because $0\ne0.2(0.3)=0.06$.

</details>

## Sources and scope {#sources}

Organised against the [current official 9660 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). Paired marking material informs the expected reasoning; every task here is separately self-written and is not an official question or official mark scheme.

Specification §3.2 S1.1; MA02 January 2025 Q7, QP pp14–15, MS p14. Its inconsistent part (b) data are not reused as a model.

[MA01 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

Success means independently explaining the method and checking its conditions, not just reading a solution. Student learning outcomes have not been trialled.
