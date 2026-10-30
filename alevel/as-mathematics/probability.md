---
layout: subjects
title: "Further probability"
mathjax: true
grade: as
subject: as-mathematics
permalink: /alevel/as-mathematics/probability/
toc_headings: h2
reading_layout: true
study_page: true
---

[AS Mathematics learning route](/alevel/as-mathematics/#learning-route) · S1.1 · OxfordAQA 9660 v5.2
{:.lesson-meta}

Read the explanation and complete example, then try the questions on paper. Hints and solutions open separately. All questions are **self-written**, with no official marks.

- [Events and conditional probabilities](#l18)

## Events and conditional probabilities {#l18}

Goal: use conditional probabilities and distinguish independent from mutually exclusive events. Prerequisites: fractions and proportions.

### “Given B” changes the group we count {#l18-concept}

An experiment has possible outcomes, called its sample space. An event is a collection of those outcomes. For equally likely outcomes, divide the favourable count by the whole count. Observed relative frequency is an estimate, not necessarily the exact theoretical probability.

“A given B” means we now consider only outcomes in B. Of that smaller group, ask what fraction also belongs to A:

$$P(A\cup B)=P(A)+P(B)-P(A\cap B),\qquad P(A\mid B)=\frac{P(A\cap B)}{P(B)}\quad(P(B)>0).$$

The union means either event, including overlap; subtract the intersection once because adding both counts it twice. The complement has $P(A')=1-P(A)$.

Mutually exclusive means they cannot happen together: $P(A\cap B)=0$. Independent means knowing one does not change the other's probability: $P(A\cap B)=P(A)P(B)$. They are different questions. An overlap cannot exceed either event, and a union cannot exceed 1. A table, tree or Venn diagram can help you see which group belongs in each denominator.

<div class="worked-example" markdown="1">

### A complete example {#l18-worked}

**Question:** In a constructed group of 100 equally likely records, 20 belong to both A and B, 20 to A only, 30 to B only, and 30 to neither. Find $P(A\mid B)$ and decide whether A and B are independent or mutually exclusive.

A two-way table is

| | B | Not B | Total |
| --- | --- | --- | --- |
| A | 20 | 20 | 40 |
| Not A | 30 | 30 | 60 |
| Total | 50 | 50 | 100 |

Thus $P(A\mid B)=20/50=0.4$. Also $P(A\cap B)=0.2=0.4(0.5)=P(A)P(B)$, so they are independent. They are not mutually exclusive because the intersection has 20 records. The union is $0.4+0.5-0.2=0.7$.

</div>

<div class="lesson-check" markdown="1">

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

</div>

<div class="lesson-check" markdown="1">

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

</div>

### Diagnose and repair {#l18-diagnosis}

Using the whole group as a conditional denominator ignores the information given. Independence is a product test, not absence of overlap. The stored MA02 January 2025 Q7(b) has incompatible marginals/intersection; this course uses new, consistent data and does not silently repair that official identity.

For a conditional denominator, rebuild [the two-way table](#l18-worked), then [try a nonzero overlap](#l18-retry-conditional). For confusion between mutually exclusive and independent, use [the event comparison](#l18-retry).

<div class="lesson-check" markdown="1">

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

</div>

<div class="lesson-check" markdown="1">

### Another retry {#l18-retry-conditional}

**Question:** In a constructed group of 50 equally likely records, 22 belong to A, 20 belong to B and 8 belong to both. Find the probability of A given B and of B given A. Decide whether A and B are independent.

<details markdown="1">
<summary>Hint</summary>

For each conditional probability, first identify the group you already know the record belongs to.

</details>

<details markdown="1">
<summary>Solution and check</summary>

Given B, only its 20 records remain possible, so $P(A\mid B)=8/20=2/5$. Given A, the reference group instead has 22 records, so $P(B\mid A)=8/22=4/11$.

They are not independent: $P(A\mid B)=2/5\ne22/50=P(A)$. The counts are consistent: A only 14, B only 12, both 8 and neither 16, totalling 50. Using 50 as both conditional denominators would answer a different question.

</details>

</div>

## After this lesson {#next-step}

Close the solutions and check that you can complete each group’s retry independently and explain the method and its conditions. Revisit the relevant example if needed, then continue to the next lesson.

[Previous lesson: Exponentials and logarithms](/alevel/as-mathematics/exponentials-logarithms/) · [Course route](/alevel/as-mathematics/#learning-route) · [Next lesson: Discrete random variables](/alevel/as-mathematics/random-variables/)

After completing this route, try [the mixed task](/alevel/as-mathematics/#mixed-statistics). In a later study session, return to [the recall task](/alevel/as-mathematics/#later-statistics) with solutions closed.

## Sources and scope {#sources}

<details class="lesson-notes" markdown="1">
<summary>View scope and marking sources</summary>

Organised against the [current official 9660 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf). Paired marking material informs the expected reasoning; every task here is separately self-written and is not an official question or official mark scheme.

Specification §3.2 S1.1; MA02 January 2025 Q7, QP pp14–15, MS p14. Its inconsistent part (b) data are not reused as a model.

[MA01 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma01-2025-january-mark-scheme.pdf) · [MA02 January 2025 QP](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf) · [paired MS](/assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf)

Success means independently explaining the method and checking its conditions, not just reading a solution. Student learning outcomes have not been trialled.

</details>

{% include exam_topic_practice.html %}
