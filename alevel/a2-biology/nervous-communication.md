---
title: "Nervous communication and synaptic integration"
layout: subjects
mathjax: true
grade: a2
subject: a2-biology
study_page: true
toc_headings: h2
lang: en
permalink: /alevel/a2-biology/nervous-communication/
---

[BL04 · Control](/alevel/a2-biology/paper-4/) · 3.4.3

## Build an electrical explanation {#start}

The goal is to explain how a local membrane change propagates and how synapses combine signals. Use [receptors](/alevel/a2-biology/receptors/) for generator potentials and [respiration](/alevel/a2-biology/respiration/) for ATP supply. The values below are illustrative; real thresholds and timings vary.

<!-- task:BL04-N0 -->
**N0 · Self-written / 自拟题**

Sodium ions are more concentrated outside an axon than inside. Explain why their movement through an open channel can occur without ATP, whereas maintaining this concentration difference requires energy.
<!-- /task:BL04-N0 -->

<details markdown="1">
<summary>N0 · Check</summary>

An open channel permits facilitated diffusion down an electrochemical gradient; the moving ions do not need ATP hydrolysis at the channel. Pumping ions back against their gradients requires energy. A charged ion cannot readily pass through the hydrophobic lipid bilayer unaided.

</details>

## A motor neurone and its resting membrane {#resting}

A motor neurone has dendrites and a cell body receiving inputs, a long axon carrying action potentials, and terminals communicating with muscle. Schwann cells form insulating myelin around peripheral axons, interrupted by **nodes of Ranvier**, where voltage-gated channels are concentrated. The direction of information is from input regions to terminals; it is not a stream of sodium ions travelling the entire axon length.

The sodium–potassium pump hydrolyses ATP to move **3 Na⁺ out and 2 K⁺ in** per cycle. It establishes and maintains high external Na⁺ and high internal K⁺. At rest the membrane is much more permeable to K⁺ than to Na⁺ through leak pathways. K⁺ tends to diffuse out; the developing negative internal charge opposes further K⁺ loss. Differential permeability and electrochemical gradients establish a negative resting potential, often illustrated as about −70 mV. The pump also contributes electrically, but it is not the rapid switch responsible for each spike.

## Action potentials: change permeability, then recover {#action-potential}

| Phase | Main change | Consequence |
| --- | --- | --- |
| Threshold and depolarisation | Voltage-gated Na⁺ channels open; Na⁺ enters | Depolarisation opens more Na⁺ channels: rapid positive feedback |
| Repolarisation | Na⁺ channels inactivate; delayed voltage-gated K⁺ channels open | K⁺ leaves and the inside becomes negative again |
| After-hyperpolarisation | K⁺ channels close gradually | Potential briefly becomes more negative than resting level |
| Return and maintenance | Channels reset; resting permeability resumes; pump maintains gradients | The membrane can respond again after recovery |

Above threshold, an action potential is **all-or-nothing**: it is regenerated with approximately the same amplitude in the same healthy axon under the same conditions. A stronger stimulus can increase frequency, not continuously increase spike height.

During the **absolute refractory period**, inactivated Na⁺ channels cannot reopen to make another spike. During the following relative period, recovery is incomplete and a stronger stimulus is needed. This produces separate impulses, limits maximum frequency, and helps a normally travelling impulse move forward because the membrane just behind it is refractory.

**Worked explanation · Self-written / 自拟题:** repolarisation continues briefly even if ATP production is interrupted while gradients remain. K⁺ can still leave through open channels. Long-term signalling will fail as gradients run down, but “the pump pushes K⁺ out to repolarise each spike” is wrong: the pump transports K⁺ in.

## Propagation and conduction speed {#conduction}

Na⁺ entry at an active region causes local currents that depolarise adjacent membrane to threshold. The next region generates a new action potential; the signal does not fade like a passive voltage change would. In myelinated fibres, current spreads rapidly beneath the insulating sheath and action potentials are regenerated mainly at nodes: **saltatory conduction**. “Jumping” is a description of regeneration sites, not teleportation of ions.

A larger axon diameter reduces internal resistance to local current and generally increases speed. Warming within a physiological range accelerates channel kinetics and related processes; excessive heat disrupts proteins and membrane function. Comparisons require the other variables to be controlled.

## A cholinergic synapse and a muscle junction {#synapse}

1. An action potential reaches the presynaptic terminal and opens voltage-gated Ca²⁺ channels.
2. Ca²⁺ enters down its electrochemical gradient and triggers vesicle fusion with the membrane, releasing **acetylcholine (ACh)** by exocytosis.
3. ACh diffuses across the cleft and binds to complementary postsynaptic receptors. Ligand-gated cation channels open; net inward positive current produces an excitatory postsynaptic potential.
4. If integrated excitation reaches threshold at the receiving neurone's trigger region, a new action potential forms.
5. **Acetylcholinesterase** hydrolyses ACh. Choline is taken back into the terminal and used to remake ACh; vesicles are recycled. This terminates the signal and permits separate responses.

The chemical synapse is normally one-way because transmitter release machinery is presynaptic and the relevant receptors are postsynaptic. ATP supports ion pumping, transmitter recycling and vesicle processes; calcium entry is a trigger, not an energy source.

![Synapse schematic with an incoming action potential, calcium entry, vesicle fusion, acetylcholine diffusion across a cleft and postsynaptic receptors. Acetylcholinesterase terminates the signal; a labelled return arrow shows choline uptake.](/assets/images/a2-biology/bl04-synapse.svg)

*Original schematic; arrow labels distinguish ion movement, transmitter diffusion and recycling. Structures are not to scale.*

At a **neuromuscular junction**, the target is a skeletal muscle fibre's motor end plate. ACh produces an end-plate depolarisation that normally triggers a muscle action potential, leading to Ca²⁺ release inside the muscle. This junction is excitatory; it is not the usual site of inhibitory integration. Compare it with neurone-to-neurone synapses, which can excite or inhibit. Continue the mechanism in [muscles](/alevel/a2-biology/muscles/).

<!-- task:BL04-N1 -->
**N1 · Self-written / 自拟题**

Complete the causal chain at a cholinergic synapse: presynaptic action potential → opening of ____ channels → ____ enters → vesicles ____ → acetylcholine binds to ____ → postsynaptic ion permeability changes. Explain why acetylcholinesterase is needed.
<!-- /task:BL04-N1 -->

<details markdown="1">
<summary>N1 · Hint</summary>

Separate calcium entry into the terminal from sodium-dominated inward current at the receiving membrane.

</details>

<details markdown="1">
<summary>N1 · Explanation</summary>

Voltage-gated calcium channels → Ca²⁺ enters → vesicles fuse with the presynaptic membrane → ACh binds to postsynaptic receptors. Acetylcholinesterase breaks down ACh, ending receptor stimulation so persistent transmitter does not merge separate signals.

</details>

## Integration: summation and inhibition {#integration}

An excitatory postsynaptic potential is graded and decays. **Temporal summation** occurs when repeated inputs from one synapse arrive close enough in time to overlap. **Spatial summation** combines inputs from different synapses. The resulting voltage at the trigger region determines whether threshold is reached; one incoming impulse need not create one outgoing impulse.

An inhibitory synapse can open Cl⁻ or K⁺ channels, increasing conductance and making threshold harder to reach. It may hyperpolarise the membrane or reduce an excitatory voltage change by shunting current. Do not define inhibition only as “no transmitter”: it is an active change caused by an inhibitory input. Not all neurotransmitters or receptors have the same effects.

<!-- task:BL04-N2 -->
**N2 · Self-written / 自拟题**

A deliberately simplified model starts at −70 mV with a threshold of −55 mV. Each excitatory input contributes +6 mV for 5 ms; an inhibitory input contributes −5 mV for the same interval. Inputs sum only while their effects overlap. Compare: (A) three simultaneous excitatory inputs; (B) three excitatory inputs 10 ms apart; (C) three simultaneous excitatory inputs plus one simultaneous inhibitory input. State the model's predictions and one limitation.
<!-- /task:BL04-N2 -->

<details markdown="1">
<summary>N2 · Hint</summary>

Calculate only inputs that overlap within the stated window. This is a teaching model, not a claim that real synapses add perfectly linearly.

</details>

<details markdown="1">
<summary>N2 · Predictions</summary>

A: −70 + 18 = −52 mV, so threshold is reached. B: each input gives only −64 mV before fading; no spike. C: −70 + 18 − 5 = −57 mV; no spike. Real inputs decay continuously, depend on location and membrane conductance, and interact nonlinearly. The model cannot predict a real firing rate from these arithmetic values.

</details>

## Independent predictions {#practice}

<!-- task:BL04-N3 -->
**N3 · Self-written / 自拟题**

Drug X blocks presynaptic voltage-gated calcium channels but does not affect axonal sodium channels. Drug Y blocks postsynaptic acetylcholine receptors. Predict recordings from the presynaptic axon and postsynaptic membrane after stimulation in each case. Explain one measurement that distinguishes X from Y.
<!-- /task:BL04-N3 -->

<details markdown="1">
<summary>N3 · Hint</summary>

Ask whether the failure is before transmitter release or after its arrival at the receiving membrane.

</details>

<details markdown="1">
<summary>N3 · Explanation</summary>

Both drugs can leave an arriving presynaptic action potential intact while preventing the normal postsynaptic excitation. X reduces Ca²⁺ entry and hence ACh release. Y leaves release possible but prevents receptor activation. Measuring ACh release or presynaptic Ca²⁺ entry distinguishes these locations; recording only the absence of a postsynaptic spike does not.

</details>

<!-- task:BL04-N4 -->
**N4 · Self-written / 自拟题**

Two axons have the same diameter and temperature; only one is myelinated. Explain why conduction differs. Then explain why increasing temperature cannot be assumed to increase conduction speed indefinitely.
<!-- /task:BL04-N4 -->

<details markdown="1">
<summary>N4 · Hint</summary>

Link insulation to where the action potential must be regenerated, then consider the functional temperature range of proteins.

</details>

<details markdown="1">
<summary>N4 · Explanation</summary>

Myelin reduces current leakage and allows local current to reach more distant nodes rapidly, so fewer stretches of membrane must regenerate a spike. Unmyelinated membrane regenerates along its length. Temperature effects are bounded: excessive temperature damages channels and other proteins, so indefinite acceleration is not a valid extrapolation.

</details>

## Diagnose and retry {#retry}

If you attributed every voltage change to ATP, revisit pump versus channel. If you gave one spike per input, revisit summation. If you treated every synapse as excitatory, separate a muscle end plate from a neurone receiving inhibitory inputs.

<!-- task:BL04-N5 -->
**N5 · Self-written / 自拟题 — retry**

ATP production stops but the ion gradients initially remain. A student predicts that every sodium channel immediately stops conducting. Evaluate this prediction and describe what sustained ATP shortage would eventually do to signalling.
<!-- /task:BL04-N5 -->

<details markdown="1">
<summary>N5 · Hint</summary>

An open channel and the gradient driving ions through it are different requirements.

</details>

<details markdown="1">
<summary>N5 · Explanation</summary>

The immediate prediction is unjustified: channels can initially conduct ions down the remaining gradients. Sustained ATP shortage prevents pumps maintaining gradients and impairs terminal processes, so resting potentials and reliable signalling eventually fail. The timescale depends on activity and remaining energy; no fixed time follows from the question.

</details>

## Sources and connections {#sources}

[OxfordAQA 9610 specification v5.1](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-biology-specification.pdf), §3.4.3; [official resources](https://www.oxfordaqa.com/qualification/international-as-and-a-level-biology-9610/). BL04 May/June 2025 Q2, MS v1.0 Final p.7, was read for pump/channel calibration. All questions and model values here are self-written; feedback is not an official mark scheme.

Connect ATP supply to [respiration](/alevel/a2-biology/respiration/) and causal explanations to [synoptic writing](/alevel/a2-biology/synoptic-writing/).
