---
title: "Gene expression: regulation and cell identity"
layout: subjects
mathjax: true
grade: a2
subject: a2-biology
study_page: true
toc_headings: 'h2, h3'
lang: en
permalink: /alevel/a2-biology/gene-expression/
---

[BL04 · Control](/alevel/a2-biology/paper-4/) · 3.4.9

## Same genome, different cell behaviour {#start}

A neurone and a muscle fibre can share essentially the same genome but contain different proteins. The question is which genes are expressed, at what level and at which stage the information flow is controlled. Review [genetic information](/alevel/a2-biology/prerequisites/#information) and [cell division](/alevel/a2-biology/prerequisites/#division).

<!-- task:BL04-E0 -->
**E0 · Self-written / 自拟题**

Name the process from DNA to RNA and the process from mRNA to a polypeptide. Does a cell need to change a gene's base sequence every time it changes the amount of its protein product?
<!-- /task:BL04-E0 -->

<details markdown="1">
<summary>E0 · Check</summary>

Transcription produces RNA from DNA; translation uses mRNA to assemble a polypeptide. Changing expression does not require changing DNA sequence. DNA itself is not translated: the information in expressed protein-coding genes is transcribed and then translated.

</details>

## Access to DNA: epigenetic control {#epigenetics}

DNA is associated with histone proteins in chromatin. Access for transcription factors and RNA polymerase influences whether a gene can be transcribed. **Epigenetic regulation** changes gene activity without altering the DNA base sequence; some such states can be maintained through cell division. This does not mean every acquired state is permanently inherited by offspring.

**DNA methylation** adds methyl groups at particular sites. Increased methylation in a gene's promoter region often reduces transcription by interfering with transcription-factor binding and recruiting proteins associated with less accessible chromatin. The effect depends on location and gene context: “all methylated DNA is switched off” is too broad.

**Histone acetylation** commonly reduces the positive charge on histones, weakening their interaction with negatively charged DNA and favouring more accessible chromatin. Decreased acetylation tends to favour tighter packing and lower transcription. These are regulatory tendencies, not a rule that a single mark alone predicts every gene's expression.

![Information-flow schematic from DNA in chromatin through transcription to mRNA and translation to protein. Separate labelled control points show DNA methylation/histone acetylation at transcription and small-RNA action on mRNA, with no arrow changing the DNA sequence.](/assets/images/a2-biology/bl04-expression.svg)

*Original schematic. Solid arrows show information flow; labelled regulatory links show control of a step. It is not a molecular-scale picture.*

### Connect the affected gene to cancer {#cancer}

Tumour-suppressor proteins can restrain the cell cycle, support DNA repair or help initiate apoptosis when damage is serious. Silencing a tumour-suppressor gene can remove one of these controls. By contrast, increased activity of a division-promoting proto-oncogene can contribute to oncogenic signalling. Abnormal methylation patterns can therefore have different consequences depending on which genes become more or less active; cancer is a multistep process, not the inevitable result of any methyl group.

**Worked mechanism · Self-written / 自拟题:** promoter methylation increases at a functional tumour-suppressor gene → access/transcription decreases → less relevant protein is produced → cell-cycle restraint or damage response is weakened → abnormal cells may divide more readily. Each link identifies a molecule or process. Writing “methylation causes cancer” omits both the gene and the mechanism.

## RNA interference acts after transcription {#rnai}

Small RNAs can regulate the fate and use of existing mRNA. **MicroRNA (miRNA)** is produced from precursor RNA, while **small interfering RNA (siRNA)** commonly comes from double-stranded RNA processing. A guide strand associates with a protein complex and uses complementary base pairing to recognise target mRNA.

In the standard silencing mechanisms, close complementarity can guide cleavage and subsequent degradation of mRNA; other interactions reduce translation and can promote mRNA destabilisation. This reduces the amount of protein produced without deleting or mutating the gene. Detailed processing-enzyme names are not the central requirement; explain recognition, the affected RNA and the protein consequence.

The specification's broader wording permits increased or decreased gene activity. The direct mechanisms taught here are silencing; a wider network can produce an indirect increase, for example by silencing an mRNA encoding a repressor. If a question supplies another context-dependent effect, use the given evidence rather than claiming all small RNAs always have the same outcome.

<!-- task:BL04-E1 -->
**E1 · Self-written / 自拟题**

Complete a typical RNA-interference chain: a small RNA associates with a protein complex → its sequence recognises complementary ____ → cleavage/degradation or reduced ____ → less target protein. State why this does not itself remove the target gene from the genome.
<!-- /task:BL04-E1 -->

<details markdown="1">
<summary>E1 · Hint</summary>

Which molecule is paired with the small RNA? Which process actually reads mRNA to make protein?

</details>

<details markdown="1">
<summary>E1 · Explanation</summary>

Target mRNA → translation. The small RNA guides a protein complex to the RNA, causing cleavage/degradation or reduced translation. The DNA sequence remains in the genome, so expression may recover if the RNA interference stops and new mRNA is made.

</details>

## Infer a mechanism from different measurements {#evidence}

Constructed teaching data; relative units use the untreated control as 100. These are not measured clinical results or data adapted from an official paper.

<!-- task:BL04-gene-expression-data -->

| Treatment | Target mRNA / relative units | Target protein / relative units |
| --- | --- | --- |
| Untreated control | 100 | 100 |
| A | 30 | 35 |
| B | 95 | 25 |

<!-- /task:BL04-gene-expression-data -->

<!-- task:BL04-E2 -->
**E2 · Self-written / 自拟题**

The table contains constructed mean values measured at one time, with no uncertainty estimates supplied. Compare A and B with the control. Explain why reduced transcription is a plausible explanation for A but is not established by the data. Suggest a different regulatory level for B and one measurement that would distinguish competing explanations.
<!-- /task:BL04-E2 -->

<details markdown="1">
<summary>E2 · Hint</summary>

An amount measured at one time depends on both production and removal. Consider mRNA stability as well as transcription, and protein degradation as well as translation.

</details>

<details markdown="1">
<summary>E2 · Explanation</summary>

A has 70% less mRNA and 65% less protein than the control; B has only 5% less mRNA but 75% less protein. A is consistent with reduced transcription, but increased mRNA degradation could also produce a low mRNA amount. B is consistent with inhibited translation or faster protein degradation.

Measure newly synthesised RNA to test transcription, mRNA decay to test stability, or protein synthesis/decay to distinguish B's alternatives. Use biological replication, matching sampling times and uncertainty estimates. The table has no error information, so it cannot establish whether 95 differs reliably from 100 or supply a significance claim. Protein concentration can lag behind a change in mRNA.

</details>

<!-- task:BL04-E3 -->
**E3 · Self-written / 自拟题**

A treatment reduces methylation near the promoter of a tumour-suppressor gene in cultured cells. Explain a possible route to slower cell division. State two additional results needed before concluding that this mechanism explains the effect, and two reasons why this is not yet evidence of an effective treatment for human patients.
<!-- /task:BL04-E3 -->

<details markdown="1">
<summary>E3 · Hint</summary>

Separate target engagement, gene expression, cell behaviour and patient outcome. Controls must address other effects of the treatment.

</details>

<details markdown="1">
<summary>E3 · Explanation</summary>

Reduced promoter methylation could allow more transcription and tumour-suppressor protein, strengthening cell-cycle restraint. Measure increased target mRNA/protein and show that the division effect depends on this functional gene, for example with a suitable gene-specific loss-of-function comparison. Include untreated and vehicle controls and check general toxicity, which could slow division for another reason.

Cultured cells do not establish delivery to human tissues, safe dosage, long-term safety or effectiveness across tumour types. Slower division is not proof that a tumour is eliminated. These are evidence requirements, not recommendations for patient treatment.

</details>

## Differentiation and stem-cell potential {#stem-cells}

Differentiation results from different combinations of genes being expressed, producing proteins that establish specialised structure and function. Most DNA in a specialised cell is not being used to make protein at that time; much genomic DNA is non-protein-coding, including regulatory sequences. A cell does not normally lose all “unused genes” when it differentiates.

A **stem cell** can self-renew and produce differentiated descendants. Potency describes the range of possible descendants, not how rapidly a cell divides.

| Potency | Possible descendants | Context |
| --- | --- | --- |
| Totipotent | Embryonic and extraembryonic tissues capable of supporting a whole organism | Zygote and very early mammalian embryonic cells, for a limited stage |
| Pluripotent | Body cell types from all three germ layers, but not by itself a whole organism with supporting extraembryonic tissues | Embryonic stem cells; induced pluripotent stem cells made by reprogramming differentiated cells |
| Multipotent | Several related cell types in a tissue lineage | Haematopoietic stem cells producing blood-cell lineages |
| Unipotent | One differentiated lineage, with self-renewal | Tissue-specific renewing cell populations |

Adult tissues normally rely mainly on tissue-restricted multipotent or unipotent cells. Do not infer that every mature tissue naturally contains plentiful pluripotent cells: reprogramming adult cells to induced pluripotency is a distinct procedure.

Stem-cell applications require controlled differentiation, survival, integration and appropriate function. Undifferentiated cells can proliferate inappropriately; transplanted cells may be rejected, and reprogramming/culture can introduce or select unwanted changes. Evaluation weighs these risks against possible restoration of damaged tissue, source availability, consent, embryo-related concerns, cost and access. A list of ethical words is insufficient without linking them to the proposed source and use.

<!-- task:BL04-E4 -->
**E4 · Self-written / 自拟题**

A team wants to replace damaged nerve cells. Compare an embryonic pluripotent-cell source with a patient's reprogrammed induced pluripotent cells. Give a potential benefit, a biological risk and an ethical or practical issue for each. State what evidence would demonstrate successful function rather than simply cell survival.
<!-- /task:BL04-E4 -->

<details markdown="1">
<summary>E4 · Hint</summary>

Both sources are pluripotent. Distinguish source-related issues from problems shared by any cell transplantation.

</details>

<details markdown="1">
<summary>E4 · One balanced evaluation</summary>

Embryonic cells offer a broad differentiation potential but require reliable control to prevent inappropriate growth; donor-derived cells can be immunologically mismatched. Embryo use raises consent and moral-status concerns. Patient-derived induced pluripotent cells also offer broad potential and may reduce immune mismatch while avoiding embryo destruction, but reprogramming, inherited patient mutations, culture changes and undifferentiated-cell growth still require checks; preparation can be costly and slow.

For either source, show the intended neuronal identity, appropriate electrical responses, connections with host circuits and a relevant functional improvement compared with controls, with long-term safety follow-up. Cell survival alone does not establish correct integration or restored function.

</details>

## Diagnose and retry {#retry}

“DNA is translated” confuses information stages. “Low mRNA proves transcription stopped” ignores degradation. “Pluripotent means able to make an entire organism” confuses pluripotency with totipotency.

<!-- task:BL04-E5 -->
**E5 · Self-written / 自拟题 — retry**

A scientist proposes reducing methylation at every promoter to prevent cancer. Evaluate the proposal by comparing a tumour-suppressor gene with a gene that promotes cell division. Explain why “less methylation is always safer” is not a valid rule.
<!-- /task:BL04-E5 -->

<details markdown="1">
<summary>E5 · Hint</summary>

Restoring expression of a brake on division and increasing expression of an accelerator have different consequences.

</details>

<details markdown="1">
<summary>E5 · Explanation</summary>

Reducing methylation may restore a silenced tumour-suppressor gene, but could also increase expression of a division-promoting gene or disrupt normal expression patterns. Effects depend on site, gene function, existing mutations and cell context. A universal demethylation proposal therefore needs gene-specific evidence and safety evaluation; less methylation is not universally protective.

</details>

## Sources and connections {#sources}

[OxfordAQA 9610 specification v5.1](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-biology-specification.pdf), §3.4.9; [official resources](https://www.oxfordaqa.com/qualification/international-as-and-a-level-biology-9610/). BL04 May/June 2025 Q7, MS pp.16–18, was read for gene-specific cancer reasoning and limits of model evidence. All tasks, constructed data and feedback here are self-written, not official questions or marks.

Compare altered expression with [inheritance](/alevel/a2-biology/inheritance/), then study [gene technology](/alevel/a2-biology/gene-technology/) and [experimental design](/alevel/a2-biology/experimental-design/).
