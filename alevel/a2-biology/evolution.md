---
title: "Allele frequencies, selection and speciation"
layout: subjects
mathjax: true
grade: a2
subject: a2-biology
study_page: true
toc_headings: 'h2, h3'
lang: en
permalink: /alevel/a2-biology/evolution/
---

[BL03 learning route](/alevel/a2-biology/paper-3/) · OxfordAQA 9610 · 3.3.7–3.3.8

Attempt each task before opening its hint or answer.

## Evolution concerns a population across generations {#start}

An individual can grow or change its physiology without evolution occurring. Evolution involves changes in allele frequencies in a population across generations. For population genetics, define the potentially interbreeding group, place and time before counting. A gene pool comprises the alleles present in that population. Begin with [inheritance](/alevel/a2-biology/inheritance/) and [meiosis](/alevel/a2-biology/prerequisites/#division); then distinguish a frequency calculation from a causal explanation.

<!-- task:EV0 -->
**Self-written / 自拟题 — EV0**

A lizard becomes darker during a cold morning, then returns to its original colour. Does this observation alone establish evolution? State what population-level evidence would be needed.
<!-- /task:EV0 -->

<details markdown="1">
<summary>Hint EV0</summary>

Separate a reversible phenotype change from an inherited change across generations.

</details>

<details markdown="1">
<summary>Answer EV0</summary>

No. This may be a physiological response within one individual. Evidence of changed allele frequencies across generations in a defined population is needed to establish genetic evolution.

</details>

## Counting alleles does not require Hardy–Weinberg equilibrium {#allele-counts}

At an autosomal locus in N diploid individuals, there are 2N allele copies. Count two A copies from each AA and one from each Aa. This calculation describes the sample even if mating is not random or selection is occurring. For two alleles, define p as the A frequency and q as the a frequency, with p + q = 1. Dominance does not determine which allele is more common.

$$p=\frac{2n_{AA}+n_{Aa}}{2N},\qquad q=\frac{2n_{aa}+n_{Aa}}{2N},\qquad p+q=1.$$

**Worked count — Self-written; constructed data:** among 100 individuals, 36 are AA, 48 Aa and 16 aa. A copies = 2 × 36 + 48 = 120 out of 200, so p = 0.60 and q = 0.40. The observed proportions also happen to match p², 2pq and q², but the allele count itself did not need that assumption.

## Hardy–Weinberg: a conditional model {#hardy-weinberg}

If gametes carry A with probability p and a with probability q, random union gives AA with p², Aa with pq + qp = 2pq, and aa with q². Under the ideal conditions, allele frequencies remain constant between generations. The model assumes a very large population (negligible drift), random mating, and no selection, mutation or migration changing the gene pool. Random mating concerns genotype combinations; constancy of allele frequency also requires the other conditions.

Use the model to calculate an expectation, then compare evidence. A population need not satisfy the assumptions just because the equation can be evaluated.

$$p^2+2pq+q^2=(p+q)^2=1.$$

**Worked reverse calculation — Self-written:** a fully penetrant autosomal recessive phenotype occurs in 1 in 2500 in a population assumed to be in equilibrium. Then q² = 1/2500 = 0.0004, so q = 0.02, p = 0.98 and carrier frequency 2pq = 0.0392. About 3.92%, not 2%, are carriers. This inference depends on the recessive model, phenotype identification and equilibrium.

If the question already gives an **allele frequency**, do not take its square root. If it gives a dominant phenotype frequency, that frequency corresponds to p² + 2pq, not p² alone. If phenotype is affected by incomplete penetrance, environment or several genes, a simple disease-frequency substitution may fail.

<!-- task:EV1 -->
**Self-written / 自拟题 — EV1**

A population at Hardy–Weinberg equilibrium has a dominant allele A at frequency 0.04. For 10 000 individuals, calculate expected AA, Aa and aa counts. Explain why 0.04 is not the proportion of all individuals showing the dominant phenotype.
<!-- /task:EV1 -->

<details markdown="1">
<summary>Hint EV1</summary>

The input is p, not p². The dominant phenotype includes two genotypes.

</details>

<details markdown="1">
<summary>Answer EV1</summary>

q = 0.96. AA: 0.0016 × 10 000 = 16; Aa: 0.0768 × 10 000 = 768; aa: 0.9216 × 10 000 = 9216. With complete dominance, 784 individuals show the dominant phenotype, frequency 0.0784. Allele frequency counts allele copies; phenotype frequency counts individuals.

</details>

## Natural selection: write the causal chain {#natural-selection}

Mutation can produce new alleles; meiosis and fertilisation reshuffle allele combinations. Mutations do not arise because an organism needs a particular solution. Phenotypic variation can also have environmental causes, so a trait difference must have a heritable basis for selection to generate the proposed genetic response.

Under a selection pressure such as predation, disease or competition, some phenotypes leave more surviving fertile offspring. Their alleles are passed on more often. Over generations, frequencies can change. **Fitness** is relative reproductive success in the specified environment, not simply strength or lifespan. Selection acts through phenotypes; the evolutionary consequence concerns inherited allele frequencies.

**Mechanism demonstration — Self-written:** in a fictional insect population, a heritable variant reduces binding of a pesticide to its target. After treatment, carriers survive and reproduce more successfully, passing on the allele. Across generations its frequency rises. The pesticide selects among variants; it does not instruct every insect to develop the needed mutation. Costs of resistance can alter the outcome when the pesticide is absent.

### Three patterns of selection {#selection-patterns}

The patterns describe which phenotypes have greater reproductive success under stated conditions. They are not three ways individuals choose to adapt. Use the same trait axis for comparing cases and distinguish a curve of **relative fitness** from a histogram of observed individuals.

| Pattern | Favoured phenotypes | Expected tendency if variation is heritable |
| --- | --- | --- |
| Directional | One end of the existing range | Mean can shift towards that end |
| Stabilising | Intermediate phenotypes | Extremes selected against; variation can narrow |
| Disruptive | Both extremes relative to intermediates | Intermediate disadvantage; divergence can be promoted |

![Three original qualitative selection diagrams: relative fitness versus trait value rises towards one extreme for directional selection, peaks centrally for stabilising selection and is higher at both extremes for disruptive selection. These are model fitness curves, not measured population distributions.](/assets/images/a2-biology/bl03-selection.svg)

A shift to mainly hard seeds could favour larger beaks: a directional model. If very small offspring survive cold poorly and very large offspring have birth difficulties, intermediate size could be favoured: a stabilising model. Two food types that favour small and large feeding structures over intermediate structures could create disruptive selection. These are constructed examples; actual claims need survival and reproductive data.

Disruptive selection alone does not prove speciation. Interbreeding and recombination may continue to connect the population. A near-constant trait mean also does not prove no selection: stabilising selection can remove extremes without shifting the centre.

## Drift, bottlenecks and artificial selection {#drift}

**Genetic drift** is random change in allele frequencies through sampling. It is especially influential in small populations or for alleles represented by few copies. It can eliminate an allele even if that allele is not harmful. It does not create a new allele; mutation does.

A **bottleneck** severely reduces population size. Surviving individuals may carry an unrepresentative subset of alleles, reducing diversity and changing frequencies. Even if numbers later recover, lost alleles do not automatically return. A founder event can similarly begin a population from a small sample. By contrast, selection involves consistent differences in reproductive success associated with inherited phenotypes. Chance and selection can act together.

**Artificial selection** uses human choices of breeding individuals to increase traits such as yield. Select suitable parents, breed them, measure offspring and continue across generations. A heritable component is required; yield also depends on environment. Using a narrow set of parents can reduce diversity and increase inbreeding, making recessive harmful alleles more likely to be paired. High output can trade off with disease resistance, fertility or animal welfare. Control the rearing environment and record several traits rather than selecting from one unusually favourable observation.

## Speciation: reduced gene flow must become reproductive isolation {#speciation}

In **allopatric speciation**, a geographical barrier separates populations and reduces gene flow. Different selection pressures, mutations and drift can produce genetic divergence. If differences eventually prevent successful interbreeding that produces fertile offspring, reproductive isolation has evolved. The barrier's appearance alone is not enough to declare two species.

In **sympatric speciation**, divergence occurs without geographical separation. Assortative mating, different breeding times or ecological specialisation can reduce gene flow within the same region. In plants, chromosome doubling can produce a polyploid lineage that is reproductively isolated from its diploid ancestors; establishment still requires viable reproduction, for example compatible polyploids or self-fertilisation. Sharing the same place does not guarantee free gene flow.

Pre-fertilisation barriers include different mating signals, breeding times or incompatible gametes. Post-fertilisation barriers include hybrid inviability or sterility. Use the supplied evidence: failure to observe mating once is weak evidence for an absolute barrier. The fertile-offspring criterion is a useful biological-species model for sexually reproducing organisms, with limits for asexual organisms and populations that cannot practically be crossed.

## Independent inference and diagnosis {#practice}

<!-- task:EV2 -->
**Self-written / 自拟题 — EV2**

A storm leaves 12 survivors from an island population of 1200 beetles. A rare neutral allele is absent among the survivors, and population size later returns to 1200. Explain the change without invoking an advantage of the other allele. Explain why restored population size does not establish restored genetic diversity.
<!-- /task:EV2 -->

<details markdown="1">
<summary>Hint EV2</summary>

A neutral allele can be lost by sampling. Population size and number of allele forms are different quantities.

</details>

<details markdown="1">
<summary>Answer EV2</summary>

A bottleneck sampled only a few individuals; by chance none carried the rare allele. This is drift, not evidence that the alternative allele was advantageous. Descendants of the survivors can restore numbers while retaining a reduced gene pool; the absent allele needs reintroduction or mutation to reappear.

</details>

<!-- task:EV3 -->
**Self-written / 自拟题 — EV3**

In a constructed seed-eating bird population, small and large beaks each produce more surviving offspring than intermediate beaks. Identify the selection pattern and explain its possible effect on phenotype frequencies. State the extra evidence required before concluding that two species have formed.
<!-- /task:EV3 -->

<details markdown="1">
<summary>Hint EV3</summary>

Reproductive success is given; reproductive isolation is not.

</details>

<details markdown="1">
<summary>Answer EV3</summary>

This is disruptive selection. If beak differences are heritable, alleles contributing to the two favoured phenotypes may increase relative to those producing intermediates. To infer speciation, investigate reduced gene flow and reproductive isolation, such as consistent assortative mating and inability to produce viable fertile hybrids. A two-peaked phenotype distribution alone is insufficient.

</details>

<!-- task:EV4 -->
**Self-written / 自拟题 — EV4**

A river separates two mammal populations. Their allele frequencies differ after many generations, but controlled crosses produce fertile offspring. Explain how divergence could have arisen and evaluate the claim that geographical isolation proves speciation.
<!-- /task:EV4 -->

<details markdown="1">
<summary>Hint EV4</summary>

Separate the origin of genetic differences from the criterion used to call them species.

</details>

<details markdown="1">
<summary>Answer EV4</summary>

Reduced gene flow allows different selection pressures, drift and mutations to change frequencies independently. Geographical separation can begin divergence, but fertile offspring show that the tested cross lacks a complete post-fertilisation barrier. Investigate natural mating and other barriers; the geographical barrier alone does not prove completed speciation.

</details>

<!-- task:EV5 -->
**Self-written / 自拟题 — EV5**

Retry: in a sample of 200 individuals, 80 are AA, 100 are Aa and 20 are aa. Calculate p and q directly. Then calculate Hardy–Weinberg expected counts using these frequencies. Explain why a difference between observed and expected counts is not, by itself, proof of natural selection.
<!-- /task:EV5 -->

<details markdown="1">
<summary>Hint EV5</summary>

Count 400 allele copies first. The expected counts are model outputs, not replacements for the observations.

</details>

<details markdown="1">
<summary>Answer EV5</summary>

p = (160 + 100)/400 = 0.65; q = 0.35. Expected AA = 0.4225 × 200 = 84.5; Aa = 0.455 × 200 = 91; aa = 0.1225 × 200 = 24.5. Sampling variation, non-random mating, population mixing or other violated assumptions can cause differences. A statistical assessment and biological evidence are needed before identifying selection as the cause.

</details>

## Sources and next steps {#sources}

Scope follows [OxfordAQA 9610 specification v5.1](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-biology-specification.pdf), 3.3.7–3.3.8. This page uses the numbering in the v5.1 copy read for this course; the school should confirm the applicable specification for a future exam series. [Official qualification and resources](https://www.oxfordaqa.com/qualification/international-as-and-a-level-biology-9610/).

Except where explicitly labelled Adapted, examples, questions and feedback are author-written, not official questions or mark schemes. Constructed data are not measurements; web exercises do not constitute completion of required practical work.

[Inheritance models](/alevel/a2-biology/inheritance/) · [Ecology and selection pressures](/alevel/a2-biology/ecology/) · [Artificial selection and farming](/alevel/a2-biology/energy-production/) · [Genotype and expression](/alevel/a2-biology/gene-expression/) · [BL05 data skills](/alevel/a2-biology/data-skills/) · [BL05 synoptic writing](/alevel/a2-biology/synoptic-writing/)
