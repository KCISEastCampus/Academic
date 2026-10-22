---
title: "Improper integrals: convergence or divergence"
layout: subjects
mathjax: true
grade: as
subject: as-further-mathematics
lang: en
permalink: /alevel/as-further-mathematics/improper-integrals/
toc_headings: h2, h3
study_page: true
---

[AS Further Mathematics](/alevel/as-further-mathematics/) · A7 · FP1.7

All demonstrations, scaffolded attempts, independent tasks and retries here are **self-written**, with no official marks. Write your method and reasons before opening hints and solutions separately.

## When does an unbounded region have finite area? {#model}

**Start:** integrate $x^{-2}$ between 1 and a finite $R>1$. **Goal:** identify the improper endpoint, introduce a cutoff and decide convergence using limits. You need powers, definite integration and simple limits, not advanced integration techniques. Infinity is not a number to substitute into an antiderivative.

$$\int_1^\infty f(x)\,dx=\lim_{R\to\infty}\int_1^R f(x)\,dx;\qquad
\int_0^1 f(x)\,dx=\lim_{\varepsilon\to0^+}\int_\varepsilon^1 f(x)\,dx.$$

The second form is needed when f is unbounded or undefined at 0. “Converges” means a finite real limit exists. Each side of an interior singularity must converge separately; divergent pieces cannot cancel to define the ordinary improper integral.

## Demonstration: compare similar powers {#demonstration}

$$\int_1^\infty x^{-2}\,dx=\lim_{R\to\infty}(1-R^{-1})=1;\qquad
\int_1^\infty x^{-1/2}\,dx=\lim_{R\to\infty}2(\sqrt R-1)=\infty.$$

$$\int_0^1 x^{-1/2}\,dx=\lim_{\varepsilon\to0^+}2(1-\sqrt\varepsilon)=2;\qquad
\int_0^1 x^{-2}\,dx=\lim_{\varepsilon\to0^+}(\varepsilon^{-1}-1)=\infty.$$

A power that converges at infinity can diverge at zero. In general the power test is: $\int_1^\infty x^{-p}\,dx$ converges for $p>1$, and $\int_0^1 x^{-p}\,dx$ for $p<1$. The antiderivative for $p\ne1$ proves these conditions; at $p=1$, a logarithm diverges at either end. These are two different endpoint limits.

![Area under y=1/x² from x=1 to a finite cutoff R=4; dashed boundary at R and the remaining positive tail are labelled.](/alevel/as-further-mathematics/diagrams/improper.svg)

The graph displays a finite cutoff, not a proof that the omitted tail vanishes. The tail here equals $1/R$, which supplies the proof.

## Scaffold and independent choice {#practice}

**Scaffold (self-written):** Evaluate $\int_4^\infty x^{-3/2}\,dx$ with a finite upper bound first.

<details markdown="1"><summary>Scaffold check</summary>

$$\lim_{R\to\infty}[-2x^{-1/2}]_4^R=\lim_{R\to\infty}(1-2/\sqrt R)=1.$$

</details>

**Independent task (self-written):** Decide whether each integral converges and evaluate those that do: $\int_0^4x^{-1/2}\,dx$, $\int_0^1x^{-3/2}\,dx$, and $\int_{-1}^1x^{-2}\,dx$. A calculator returns a finite value after cutting out a small interval around zero: does that settle the last case?

<details markdown="1"><summary>Hint</summary>

Locate all singular endpoints and interior singularities before choosing cutoffs. The last integral needs two one-sided checks.

</details>

<details markdown="1"><summary>Solution and check</summary>

$$\int_0^4x^{-1/2}\,dx=\lim_{\varepsilon\to0^+}(4-2\sqrt\varepsilon)=4.$$

$$\int_0^1x^{-3/2}\,dx=\lim_{\varepsilon\to0^+}(2/\sqrt\varepsilon-2)=\infty.$$

$$\int_{-1}^{-\varepsilon}x^{-2}\,dx=\varepsilon^{-1}-1,\qquad \int_{\varepsilon}^1x^{-2}\,dx=\varepsilon^{-1}-1.$$

Both sides in the last case diverge; the improper integral diverges. Every finite cutoff is integrable, but that does not establish a finite limit.

</details>

## Diagnose and retry {#retry}

If you used one antiderivative across zero, restore the missing domain break. If “very large” was your convergence argument, write the varying cutoff and its limit.

**Retry (self-written):** For which p do both $\int_0^1x^{-p}\,dx$ and $\int_1^\infty x^{-p}\,dx$ converge?

<details markdown="1"><summary>Retry check</summary>

No real p: the first requires $p<1$, the second $p>1$; $p=1$ diverges in both.

</details>

## Sources and scope {#sources}

Scope follows 9665 v5.2. The paired questions and mark schemes below informed the required evidence; these exercises do not reproduce their questions or award official marks.

FM01 specimen identity: the QP body says **Specimen 2018 Morning**; its filename contains 2019/v3 and footer versions vary. The officially paired MS is a specimen with copyright 2017, not a live-exam Final MS.

- [OxfordAQA 9665 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf), FP1.7.
- FM01 specimen Q3; QP pp.4–5, MS p.5. [FM01 specimen QP](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-specimen-paper-2019-v3-1.pdf) · [Specimen MS](https://www.oxfordaqa.com/wp-content/uploads/2026/07/9665-FM01-international-as-further-mathematics-mark-scheme-2017-v2-1.pdf).

[Previous](/alevel/as-further-mathematics/rates-and-approximations/) · [Course route](/alevel/as-further-mathematics/#learning-route) · [Next](/alevel/as-further-mathematics/matrix-algebra/)
