---
title: "Gene technology: obtain, amplify and express DNA"
layout: subjects
mathjax: true
grade: a2
subject: a2-biology
study_page: true
toc_headings: h2
lang: en
permalink: /alevel/a2-biology/gene-technology/
---

[BL04 · Control](/alevel/a2-biology/paper-4/) · 3.4.10

## Separate the outcomes before choosing the method {#start}

**Recombinant DNA** combines DNA fragments from different sources. Obtaining a sequence, amplifying it, transferring it and expressing it are different achievements. This page follows that chain and asks what evidence establishes each step. Review [DNA and protein synthesis](/alevel/a2-biology/prerequisites/#information) and [gene regulation](/alevel/a2-biology/gene-expression/).

<!-- task:BL04-G0 -->
**G0 · Self-written / 自拟题**

Distinguish a DNA copy, an mRNA molecule and a protein product. Which of these does an ordinary PCR reaction directly amplify?
<!-- /task:BL04-G0 -->

<details markdown="1">
<summary>G0 · Check</summary>

Ordinary PCR amplifies DNA. It does not directly make mRNA or protein. RNA needs a reverse-transcription step before a conventional DNA PCR; protein production requires expression in a suitable system.

</details>

## Three ways to obtain a DNA fragment {#obtain}

**From mRNA:** isolate mature mRNA from cells expressing the gene. **Reverse transcriptase** uses it as a template to make complementary DNA (cDNA); DNA polymerase can make a second strand after suitable preparation. Because mature eukaryotic mRNA has been spliced, the corresponding coding cDNA lacks the introns present in genomic DNA. This is useful for a bacterial host that cannot carry out the same eukaryotic splicing.

**From DNA:** a **restriction endonuclease** recognises a particular DNA sequence and cuts the sugar–phosphate backbone. Some cuts create staggered, complementary **sticky ends**; others create blunt ends. Suitable sites must flank the intended fragment without disrupting its essential sequence. Cutting insert and vector with compatible enzymes allows matching ends; not every restriction enzyme makes the same ends.

**Artificial synthesis:** a known designed sequence can be assembled chemically and enzymatically. This allows a chosen sequence without first obtaining its mRNA, but sequence accuracy and suitability for the intended expression system must still be checked.

The genetic code is nearly universal, so a codon usually specifies the same amino acid in different organisms. This makes transfer useful; it does not guarantee correct transcription, splicing, folding or processing in every recipient. A host-compatible promoter and other control sequences are still needed.

## PCR: make copies outside cells {#pcr}

A PCR mixture requires template DNA, **two primers**, free DNA nucleotides, thermostable DNA polymerase and an appropriate buffer with required ions. The primers bind to opposite template strands at opposite ends of the target region. Their 3′ ends point into the region to be copied. DNA polymerase extends from a primer's 3′ end, synthesising new DNA **5′ to 3′**; it cannot start a strand without a primer.

| Stage | What changes | What does not happen |
| --- | --- | --- |
| Denaturation, e.g. about 95°C | Hydrogen bonds between paired strands are disrupted; strands separate | The DNA backbone is not deliberately cut into nucleotides |
| Annealing, at a primer-dependent lower temperature | Primers base-pair to complementary target sequences | An arbitrary universal 55°C optimum cannot be assumed |
| Extension, often near 72°C for a suitable polymerase | Polymerase joins nucleotides with phosphodiester bonds | It does not join the two old strands back together |

These temperatures illustrate one common setup, not a fixed recipe for every polymerase or primer. Too low an annealing temperature can allow non-specific binding; too high can prevent sufficient correct binding. Test a temperature range and compare target yield and specificity, then refine intervals near a promising region. The best tested temperature is not automatically the exact optimum.

![PCR schematic with antiparallel template strands, 5-prime and 3-prime ends, two primers at opposite ends and new-strand synthesis arrows pointing into the target. A second sequence distinguishes fragment insertion, transformation, selection, DNA verification and expression testing.](/assets/images/a2-biology/bl04-gene-technology.svg)

*Original schematic. The arrows on new strands show synthesis direction, not movement of the whole DNA molecule.*

New DNA serves as template in later cycles, producing rapid amplification. In an idealised reaction with perfect doubling, the number of target molecules after n cycles is:

$$N_n=N_0\,2^n.$$

This is an ideal model for amplifiable target copies, not a guarantee of yield or of exact-length product composition in early cycles. Reagents become limiting, polymerase can lose activity and reactions reach a plateau. PCR can help identify a target using specific primers and product analysis, but a band of the expected size is not a complete sequence check.

## In vivo amplification and expression {#recombinant}

A **vector** carries the DNA into a host and permits maintenance or replication; a plasmid vector usually includes an origin of replication and a selectable marker. To build a suitable expression construct:

1. Obtain the target DNA and provide a host-compatible **promoter** upstream and **transcription terminator** downstream. Other necessary translation signals must also work in the host.
2. Cut insert and vector at suitable sites to produce compatible ends. Complementary sticky ends base-pair, positioning the backbones.
3. **DNA ligase** seals the sugar–phosphate backbone by forming phosphodiester bonds. Base pairing holds matching ends together; ligase is not the enzyme that makes hydrogen bonds between bases.
4. Introduce the construct into host cells: **transformation**. Only some cells take up a vector.
5. Select or screen candidate cells, verify the DNA construct, culture confirmed cells so the DNA replicates, and test expression and product function separately.

A transcription terminator ends transcription; it is not the same as a stop codon, which ends translation. An origin of replication enables plasmid copying; a promoter enables transcription. A selectable marker identifies a property such as vector uptake, not automatically the desired gene sequence.

**Worked route · Self-written / 自拟题:** to obtain a human protein in bacteria, begin with a coding cDNA rather than an unprocessed intron-containing gene, assemble it in the correct orientation with compatible control regions, and verify the insert. Then measure the protein and its activity. Correct DNA does not ensure that a host can perform every required modification, so choosing the host is part of the biological design.

<!-- task:BL04-G1 -->
**G1 · Self-written / 自拟题**

A human protein-coding gene contains introns. Complete a route to a DNA coding sequence suitable for a bacterial expression construct: isolate mature ____ from a cell expressing the gene → use ____ to make cDNA → make the second DNA strand → add compatible ____ and ____ regions in a suitable vector. Explain why the coding sequence alone is insufficient.
<!-- /task:BL04-G1 -->

<details markdown="1">
<summary>G1 · Hint</summary>

The mature transcript supplies an intron-free coding template; host machinery still needs instructions for transcription.

</details>

<details markdown="1">
<summary>G1 · Explanation</summary>

mRNA → reverse transcriptase → compatible promoter and terminator. The promoter permits host RNA polymerase to initiate transcription and the terminator defines its end. Appropriate translation signals, orientation and reading frame are also needed. An intron-free sequence solves a splicing problem; it does not solve all expression or protein-processing problems.

</details>

## Calculations and controls {#evidence}

<!-- task:BL04-G2 -->
**G2 · Self-written / 自拟题**

A constructed PCR calculation starts with 12 double-stranded target molecules and assumes perfect doubling in each of 8 cycles. Calculate the final number. Each cycle takes 20 s for denaturation, 25 s for annealing and 40 s for extension; a final extension takes 5 min. Calculate the total programmed time, excluding heating/cooling transitions. State two reasons actual target yield may be lower than the ideal estimate.
<!-- /task:BL04-G2 -->

<details markdown="1">
<summary>G2 · Hint</summary>

Add all three stage times for one cycle and include the extra final extension only once. Keep ideal doubling separate from measured yield.

</details>

<details markdown="1">
<summary>G2 · Answer</summary>

$$N_8=12\times2^8=3072.$$

$$t=8(20+25+40)+5\times60=980\ \text{s}=16\ \text{min}\ 20\ \text{s}.$$

Incomplete primer annealing, inhibitors, damaged template, declining enzyme activity or limiting nucleotides can reduce yield. The stated time excludes temperature transitions; a real instrument run may take longer. The target count is an idealisation, not a measured result.

</details>

<!-- task:BL04-gene-technology-data -->

| Reaction | Product at expected target size | Additional products |
| --- | --- | --- |
| Positive-control DNA | Present | Absent |
| No-template control | Present | Absent |
| Sample DNA | Present | Absent |

<!-- /task:BL04-gene-technology-data -->

<!-- task:BL04-G3 -->
**G3 · Self-written / 自拟题**

The table shows constructed PCR observations. Evaluate the claim that the sample definitely contained the target before testing. Explain what the positive control and no-template control test, and propose a response to the result.
<!-- /task:BL04-G3 -->

<details markdown="1">
<summary>G3 · Hint</summary>

A reaction without added template should not make the target. Compare what successful amplification proves with what contamination can imitate.

</details>

<details markdown="1">
<summary>G3 · Explanation</summary>

The positive control shows that known target DNA can be amplified under these conditions. The no-template control is intended to reveal contamination or unintended amplification. A target-sized product in it makes the sample result unreliable: contamination could explain the sample band, so the initial presence of target is not established. Identify possible contamination, prepare clean reagents and repeat appropriate controls before interpreting the sample. Sequence-specific confirmation can distinguish a target from a same-sized non-specific product.

</details>

<!-- task:BL04-G4 -->
**G4 · Self-written / 自拟题**

A plasmid contains an antibiotic-resistance marker and a separate reporter gene. The intended insertion site lies inside the reporter. A colony survives the antibiotic and has no reporter activity. Explain what each observation supports, why neither proves that the correct target protein is produced, and give the next DNA-level and protein-level checks.
<!-- /task:BL04-G4 -->

<details markdown="1">
<summary>G4 · Hint</summary>

Selection establishes survival under a condition; screening suggests a candidate insert. Verification and expression require further evidence.

</details>

<details markdown="1">
<summary>G4 · Explanation</summary>

Antibiotic survival supports a functional resistance marker and possible plasmid uptake. Loss of reporter activity is consistent with insertional disruption, but a wrong insert or reporter mutation can also cause it. Use a suitable DNA check, such as insert-spanning PCR followed by sequencing, to verify identity, orientation and reading frame. Measure the target protein and its biological activity to test expression and function. A marker alone proves neither. This is a conceptual analysis, not an instruction to culture modified organisms outside supervised facilities.

</details>

## Evaluate an application and retry {#retry}

A technology's success has several levels: the intended sequence is present, the product is made, it functions, the organism performs under relevant conditions, and the outcome matters to people or ecosystems. Financial and ethical evaluation must identify who gains, who bears costs and what alternatives exist.

<!-- task:BL04-G5 -->
**G5 · Self-written / 自拟题 — retry**

A genetically modified crop produces more of a dietary precursor in laboratory plants. A company claims this alone proves that introducing it will improve population health. Evaluate the claim using a mechanism, an experimental requirement and an economic or social condition.
<!-- /task:BL04-G5 -->

<details markdown="1">
<summary>G5 · Hint</summary>

Connect crop chemistry to intake and biological use in people; laboratory concentration alone skips those steps.

</details>

<details markdown="1">
<summary>G5 · Evaluation</summary>

The precursor must remain available after storage/cooking, be consumed in sufficient amounts and be absorbed and converted effectively. Appropriate field performance and controlled nutritional evidence are needed; laboratory concentration alone does not establish population benefit. Seed cost, farmer access, local adaptation, consumer acceptance, gene flow and alternatives such as food diversification or supplementation affect the decision. Weigh evidence for the particular crop and community, rather than asserting that all genetic modification is either safe or harmful.

</details>

If you confused PCR with protein production, return to G0. If marker survival became “correct protein confirmed”, revisit the staged evidence. If you gave one temperature as always optimal, distinguish a tested range from a universal condition.

## Sources and connections {#sources}

[OxfordAQA 9610 specification v5.1](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-biology-specification.pdf), §3.4.10; [official resources](https://www.oxfordaqa.com/qualification/international-as-and-a-level-biology-9610/). BL04 May/June 2025 Q6, MS pp.14–15, was read for ligase, marker and application reasoning. Tasks, values, diagrams and feedback here are self-written, with no official marks claimed.

Connect expression to [gene regulation](/alevel/a2-biology/gene-expression/), transmission to [inheritance](/alevel/a2-biology/inheritance/), controls to [experimental design](/alevel/a2-biology/experimental-design/), and evaluation to [synoptic writing](/alevel/a2-biology/synoptic-writing/).
