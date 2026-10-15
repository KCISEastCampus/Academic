---
title: "Inheritance: build and test genetic models"
layout: subjects
mathjax: true
grade: a2
subject: a2-biology
study_page: true
toc_headings: h2
lang: en
permalink: /alevel/a2-biology/inheritance/
---

[BL03 learning route](/alevel/a2-biology/paper-3/) · OxfordAQA 9610 · 3.3.6

Attempt each task before opening its hint or answer.

## Start with alleles, meiosis and probabilities {#start}

A gene occupies a locus; alleles are alternative forms of that gene. A diploid organism normally has two alleles at an autosomal locus, one on each homologous chromosome. Homozygotes carry the same allele twice; heterozygotes carry different alleles. **Genotype** specifies genetic constitution; **phenotype** results from genotype interacting with the environment. A dominant allele affects the heterozygote's phenotype; “dominant” does not mean common, stronger or advantageous.

Meiosis separates homologous chromosomes, so a gamete receives one allele at each locus. Fertilisation combines gametes. Use [information and meiosis prerequisites](/alevel/a2-biology/prerequisites/#information) if these steps are unfamiliar. The target is to predict offspring from a labelled model, then decide whether counts are compatible with it. A genetic probability describes repeated outcomes; four children do not have to realise a 3:1 ratio.

<!-- task:I0 -->
**Self-written / 自拟题 — I0**

A plant has genotype Aa at one autosomal locus. State the allele carried by each possible gamete and explain why a gamete does not normally contain Aa at that locus.
<!-- /task:I0 -->

<details markdown="1">
<summary>Hint I0</summary>

Track homologous chromosomes through meiosis.

</details>

<details markdown="1">
<summary>Answer I0</summary>

Gametes carry A or a. Homologous chromosomes separate during meiosis, so a normal haploid gamete receives one copy of this locus, not both alleles.

</details>

## Monohybrid crosses: state what the symbols mean {#monohybrid}

**Worked model — Self-written:** at a fictional seed-colour locus, A produces yellow seeds in AA and Aa, while aa is green. Assume complete dominance, equal segregation, random fertilisation and equal offspring survival. Cross two yellow heterozygotes: **Aa × Aa**. Each produces gametes A and a with probability ½.

| Gamete from parent 1 ↓ / parent 2 → | A (½) | a (½) |
| --- | --- | --- |
| A (½) | AA, yellow | Aa, yellow |
| a (½) | Aa, yellow | aa, green |

The genotype ratio is 1 AA : 2 Aa : 1 aa; the phenotype ratio is 3 yellow : 1 green. A **test cross** mates a dominant-phenotype individual of unknown genotype with aa. AA × aa gives all Aa; Aa × aa predicts 1 Aa : 1 aa. A small all-yellow sample cannot prove the unknown parent is AA; a heterozygote can produce such a sample by chance.

When reading pedigrees, infer genotypes from the specified model, not appearance alone. Under a fully penetrant recessive model, unaffected parents with an affected child must both carry the recessive allele, assuming no new mutation and correct parentage. Different penetrance or an alternative inheritance model can change that inference.

## Dihybrid crosses: when multiplication is justified {#dihybrid}

**Worked model — Self-written:** A/a controls yellow/green colour and B/b controls smooth/wrinkled shape in a fictional species. Each locus shows complete dominance. If the loci assort independently, **AaBb × AaBb** gives gametes **AB, Ab, aB, ab**, each with probability ¼, from both parents.

| Parent 1 ↓ / parent 2 → | AB | Ab | aB | ab |
| --- | --- | --- | --- | --- |
| AB | AABB | AABb | AaBB | AaBb |
| Ab | AABb | AAbb | AaBb | Aabb |
| aB | AaBB | AaBb | aaBB | aaBb |
| ab | AaBb | Aabb | aaBb | aabb |

Each cell has probability 1/16. A_ means AA or Aa, and B_ means BB or Bb. Thus the phenotype ratio is **9 A_B_ : 3 A_bb : 3 aaB_ : 1 aabb**, or yellow smooth : yellow wrinkled : green smooth : green wrinkled. The same result comes from independent probabilities: P(aa and B_) = ¼ × ¾ = 3/16.

The ratio needs the stated assumptions. Linkage changes gamete frequencies; gene interaction changes the mapping from genotype to phenotype; unequal survival changes the observed counts. Never choose 9:3:3:1 solely because two genes were mentioned.

<!-- task:I1 -->
**Self-written / 自拟题 — I1**

For the model above, cross AaBb with aabb, assuming independent assortment. List the gametes from each parent and the four offspring genotypes with their probabilities. Explain why the expected phenotype ratio is not 9:3:3:1.
<!-- /task:I1 -->

<details markdown="1">
<summary>Hint I1</summary>

The tester contributes only one gamete type.

</details>

<details markdown="1">
<summary>Answer I1</summary>

AaBb gives AB, Ab, aB, ab, each ¼; aabb gives ab only. Offspring are AaBb, Aabb, aaBb, aabb, each ¼. Their distinct phenotypes give 1:1:1:1. The 9:3:3:1 model requires two double heterozygotes under the stated dominance and independence assumptions.

</details>

## Codominance and multiple alleles {#codominance}

In **codominance**, both alleles have distinguishable effects in the heterozygote. A roan coat with both red and white hairs is not the same mechanism as a new intermediate pigment. Incomplete dominance, where the heterozygote has an intermediate phenotype, should not automatically be called codominance merely because the offspring ratio is 1:2:1.

**Worked model — Self-written:** let CᴿCᴿ be red, CᵂCᵂ white and CᴿCᵂ roan. CᴿCᵂ × CᴿCᵂ produces Cᴿ or Cᵂ gametes from each parent, giving ¼ red CᴿCᴿ, ½ roan CᴿCᵂ and ¼ white CᵂCᵂ. Here genotype and phenotype each follow 1:2:1 because all three genotypes can be distinguished.

**Multiple alleles** means that more than two allele forms exist in the population. An ordinary diploid individual still has two at the locus. In the simplified ABO model, Iᴬ and Iᴮ are codominant and both dominate i.

| Blood-group phenotype | Possible genotypes |
| --- | --- |
| A | IᴬIᴬ or Iᴬi |
| B | IᴮIᴮ or Iᴮi |
| AB | IᴬIᴮ |
| O | ii |

<!-- task:I2 -->
**Self-written / 自拟题 — I2**

Using the simplified ABO model, cross Iᴬi with Iᴮi. List the parental gametes and offspring genotypes and phenotypes. Explain why the existence of three alleles in the population does not give either parent three alleles at this locus.
<!-- /task:I2 -->

<details markdown="1">
<summary>Hint I2</summary>

Use two gametes from each parent, then combine one from each.

</details>

<details markdown="1">
<summary>Answer I2</summary>

Gametes: Iᴬ or i; Iᴮ or i, each ½. Offspring: IᴬIᴮ (AB), Iᴬi (A), Iᴮi (B), ii (O), each ¼. Population diversity describes possible allele forms across individuals; a diploid has two copies of the autosomal locus.

</details>

## X-linked inheritance: retain the chromosome labels {#sex-linkage}

For an X-linked recessive condition, define Xᴴ as the unaffected allele and Xʰ as the condition allele; assume the Y chromosome has no corresponding allele at this locus. An XY individual expresses Xʰ with only one copy, whereas an XX individual needs XʰXʰ under this model. The father passes his X to daughters and Y to sons, so he cannot directly pass this X-linked allele to a son.

**Worked model — Self-written:** XᴴXʰ × XᴴY. Maternal gametes are Xᴴ and Xʰ; paternal gametes are Xᴴ and Y, each ½.

| Maternal ↓ / paternal → | Xᴴ | Y |
| --- | --- | --- |
| Xᴴ | XᴴXᴴ, unaffected daughter | XᴴY, unaffected son |
| Xʰ | XᴴXʰ, carrier daughter | XʰY, affected son |

Thus ½ of sons, or ¼ of all offspring assuming equal sex probabilities, are expected to be affected. Always distinguish “a son is affected” from “an offspring is an affected son”. These probabilities are not medical predictions outside the stated simplified model.

## Autosomal linkage: phase determines the common gametes {#linkage}

Genes on the same chromosome are linked. During meiosis, crossing over between non-sister chromatids of homologous chromosomes can generate recombinant allele combinations. Write the **phase**, such as AB/ab: one homologue carries AB and the other ab. AaBb alone does not specify phase; Ab/aB is different.

**Worked model — Self-written:** with phase AB/ab and recombination fraction r = 0.20, parental gametes AB and ab each have probability (1 − r)/2 = 0.40; recombinant gametes Ab and aB each have probability r/2 = 0.10, assuming equal segregation and viability. Crossing to ab/ab reveals these frequencies in AaBb, aabb, Aabb and aaBb offspring. Do not impose four equally likely gametes.

An observed recombination fraction near 0.50 cannot distinguish unlinked genes from widely separated loci on one chromosome. The phase model also matters: in Ab/aB, the common classes are reversed. Recombination and phenotype expression are separate parts of the model.

![Original linkage teaching diagram: a homologous chromosome pair carries A with B on one chromosome and a with b on the other. Labels distinguish parental AB and ab from recombinant Ab and aB; this is a teaching model, not an independent task.](/assets/images/a2-biology/bl03-linkage.svg)

## Epistasis: map two loci onto one pathway {#epistasis}

Epistasis is an interaction between **different genes** in which one genotype masks or modifies the effect of another locus. Dominance compares alleles at the same locus. Ratios arise from a mechanism; “epistasis” is not the name of one universal ratio.

**Worked model — Self-written:** in a fictional pigment pathway, C_ allows pigment production; cc blocks it and produces white. If pigment is produced, B_ gives black and bb gives brown. For **CcBb × CcBb**, assume independent assortment: each parent gives CB, Cb, cB and cb with probability ¼. First work out genotype classes, then combine those with the same phenotype.

| Genotype class | Probability | Phenotype under this pathway |
| --- | --- | --- |
| C_B_ | 9/16 | Black |
| C_bb | 3/16 | Brown |
| ccB_ | 3/16 | White |
| ccbb | 1/16 | White |

The phenotype ratio is 9 black : 3 brown : 4 white. The four white sixteenths combine two genotypic classes because cc prevents pigment production regardless of B/b. An altered phenotype ratio does not by itself prove linkage: here gametes still assort independently.

<!-- task:I3 -->
**Self-written / 自拟题 — I3**

Use the pigment pathway above to cross Ccbb with ccBb. List gametes from each parent, offspring genotypes and expected phenotypes with probabilities. Explain which gene interaction changes the phenotype count.
<!-- /task:I3 -->

<details markdown="1">
<summary>Hint I3</summary>

Decide whether pigment can be made before deciding its colour.

</details>

<details markdown="1">
<summary>Answer I3</summary>

Ccbb gives Cb or cb; ccBb gives cB or cb, each ½. Offspring: CcBb black ¼, Ccbb brown ¼, ccBb white ¼, ccbb white ¼. Phenotype ratio = 1 black : 1 brown : 2 white. Homozygous cc masks the B/b effect because pigment production is blocked.

</details>

## Chi-squared: test counts against a specified model {#chi-squared}

State the null hypothesis: the observed offspring counts are consistent with the specified ratio, with deviations due to random sampling under that model. Calculate **expected counts**, not expected percentages, from total offspring × predicted probability. Use mutually exclusive categories and independent observations, with expected counts sufficiently large for the chi-squared approximation (a usual school rule is at least 5 per category).

For k categories with a fixed ratio and no parameters estimated from these counts, df = k − 1. Compare the statistic with the critical value for the chosen significance level. A small statistic does not prove the model; a large statistic suggests incompatibility but does not identify whether linkage, viability, counting error or another assumption failed.

$$\chi^2=\sum\frac{(O-E)^2}{E}.$$

**Worked calculation — Self-written; constructed data:** a 3:1 model predicts 75 and 25 in 100 offspring. Observed counts are 78 and 22. The contributions are 9/75 and 9/25, giving χ² = 0.48. With df = 1 and a 5% critical value of 3.84, do not reject the model. This does not mean the model has a 95% probability of being true; the significance level concerns the test's behaviour when the null model is true.

Sampling stage matters. If a genotype reduces survival, counts at germination may fit a fertilisation ratio while counts weeks later do not. For example, a chlorophyll-deficient seedling may initially respire stored food but later die when photosynthetic supply is needed. Record when and how offspring were sampled.

## Independent model selection and retry {#practice}

<!-- task:I4 -->
**Self-written / 自拟题 — I4**

An AB/ab individual is test-crossed with ab/ab. Constructed offspring counts are 82 AaBb, 78 aabb, 22 Aabb and 18 aaBb. Identify parental and recombinant classes, calculate recombination frequency, and explain why independent assortment is not a suitable starting assumption for predicting equal counts.
<!-- /task:I4 -->

<details markdown="1">
<summary>Hint I4</summary>

The test-cross offspring reveal the gamete from the heterozygous parent. Use the phase to identify recombinant combinations.

</details>

<details markdown="1">
<summary>Answer I4</summary>

Parental classes: AaBb and aabb, from AB and ab. Recombinants: Aabb and aaBb, from Ab and aB. Recombination frequency = (22 + 18)/200 × 100 = 20%. The stated linked phase and excess parental combinations support unequal gamete frequencies. Sampling variation and viability should be considered before treating the estimate as exact.

</details>

<!-- task:I5 -->
**Self-written / 自拟题 — I5**

For a fixed 9:3:3:1 model, the constructed counts of four exclusive offspring phenotypes are 88, 32, 28 and 12, total 160. Calculate expected counts and χ². Use df = 3 and the 5% critical value 7.815 to make a conclusion. State one reason that a non-significant result cannot establish every biological assumption of the model.
<!-- /task:I5 -->

<details markdown="1">
<summary>Hint I5</summary>

Expected counts sum to 160. Square each deviation, divide by its own expected count, then add.

</details>

<details markdown="1">
<summary>Answer I5</summary>

Expected counts are 90, 30, 30, 10. χ² = 4/90 + 4/30 + 4/30 + 4/10 = 0.711 (3 s.f.). This is below 7.815, so do not reject the fixed ratio at 5%. A compatible set of counts may also arise under another model, and a limited sample may lack power to detect a small departure. It does not prove independence, equal viability or the absence of gene interaction.

</details>

<!-- task:I6 -->
**Self-written / 自拟题 — I6**

Retry: a woman with genotype XᴴXʰ and a man with genotype XʰY have children under the X-linked model above. Predict the affected fraction among daughters and among sons. Show parental gametes and all offspring genotypes; do not reuse the earlier cross without changing the father.
<!-- /task:I6 -->

<details markdown="1">
<summary>Hint I6</summary>

Every daughter receives Xʰ from this father; every son receives Y.

</details>

<details markdown="1">
<summary>Answer I6</summary>

Maternal gametes Xᴴ, Xʰ; paternal gametes Xʰ, Y, each ½. Offspring XᴴXʰ, XʰXʰ, XᴴY, XʰY, each ¼. Half the daughters and half the sons are affected. XᴴXʰ daughters are unaffected carriers in this model.

</details>

## Combine two inheritance rules {#combined-model}

Codominance does not prevent independent assortment with another locus. First list the alleles possible in gametes at each locus; combine their probabilities if independence is specified. After fertilisation, assign the phenotype at each locus separately, then combine them. A codominant locus does not make 1:2:1 the ratio for every two-locus cross.

<!-- task:I7 -->
**Self-written / 自拟题 — I7**

Use CᴿCᴿ = red, CᴿCᵂ = roan, CᵂCᵂ = white. At an independent autosomal locus, A_ has horns and aa has no horns. Cross CᴿCᵂAa with CᵂCᵂaa. List all gametes, offspring genotypes and phenotypes with probabilities. Calculate the probability of an offspring being both roan and without horns.
<!-- /task:I7 -->

<details markdown="1">
<summary>Hint I7</summary>

The first parent is heterozygous at both loci; the second is homozygous at both. Each gamete needs one pigment allele and one A/a allele.

</details>

<details markdown="1">
<summary>Answer I7</summary>

First-parent gametes: CᴿA, Cᴿa, CᵂA, Cᵂa, each ¼. Second-parent gamete: Cᵂa only. Offspring: CᴿCᵂAa (roan, horns), CᴿCᵂaa (roan, no horns), CᵂCᵂAa (white, horns), CᵂCᵂaa (white, no horns), each ¼. Roan and without horns has probability ¼, also obtained from ½ × ½. The four distinct phenotypes have a 1:1:1:1 ratio.

</details>

## Sources and next steps {#sources}

Scope follows [OxfordAQA 9610 specification v5.1](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-biology-specification.pdf), 3.3.6. This page uses the numbering in the v5.1 copy read for this course; the school should confirm the applicable specification for a future exam series. [Official qualification and resources](https://www.oxfordaqa.com/qualification/international-as-and-a-level-biology-9610/).

Except where explicitly labelled Adapted, examples, questions and feedback are author-written, not official questions or mark schemes. Constructed data are not measurements; web exercises do not constitute completion of required practical work.

[Allele frequencies and evolution](/alevel/a2-biology/evolution/) · [Photosynthesis](/alevel/a2-biology/photosynthesis/) · [Gene expression](/alevel/a2-biology/gene-expression/) · [BL05 data skills](/alevel/a2-biology/data-skills/) · [BL05 experimental design](/alevel/a2-biology/experimental-design/) · [BL05 synoptic writing](/alevel/a2-biology/synoptic-writing/)
