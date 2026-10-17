---
title: "Homeostasis: blood glucose and heart rate"
layout: subjects
mathjax: true
grade: a2
subject: a2-biology
study_page: true
toc_headings: 'h2, h3'
lang: en
permalink: /alevel/a2-biology/homeostasis/
---

[BL04 · Control](/alevel/a2-biology/paper-4/) · 3.4.6–3.4.8 · RP5

## Track the variable, not just the arrow {#start}

Homeostasis keeps the internal environment within restricted limits despite changing inputs. It is dynamic regulation, not an absolutely constant reading. Here you will connect feedback to blood glucose and heart rate, then evaluate a pulse investigation. Review [transport and circulation](/alevel/a2-biology/prerequisites/#transport), membranes and enzymes.

<!-- task:BL04-H0 -->
**H0 · Self-written / 自拟题**

A room becomes colder and a heater switches on. Identify the disturbance, response and effect on the original disturbance. Would switching on extra cooling have the same feedback sign?
<!-- /task:BL04-H0 -->

<details markdown="1">
<summary>H0 · Check</summary>

The disturbance is falling temperature; heating opposes it, so the loop is negative feedback. Extra cooling would reinforce the fall, giving positive feedback in this hypothetical system. “Positive” does not mean beneficial and “negative” does not mean a decreasing response.

</details>

## Feedback has a target and a consequence {#feedback}

A receptor detects a change, a coordinating system processes the information, and effectors alter processes that influence the variable. **Negative feedback** opposes the initial deviation. Separate responses to deviations above and below a desired range give finer control than one response acting in only one direction. Delays can produce fluctuations about the range; regulation does not imply a perfectly flat graph.

Core temperature and blood pH matter because enzyme activity depends on molecular motion and protein structure. Low temperature slows many reactions; excessive heat can disrupt enzyme structure. Changes in pH alter charges and bonding and can change active-site shape. Restricting these variables helps metabolic pathways function together.

**Positive feedback** reinforces an initial change. It can contribute to loss of control, such as a temperature disturbance being amplified when normal regulation fails. It can also serve a bounded biological process: platelet activation recruits further platelets at an injury until the initiating problem is contained. Always identify what stops such amplification; do not call every positive loop a normal homeostatic correction.

## Blood glucose: sources, sinks and liver pathways {#glucose}

Digestion and absorption after a meal supply glucose. Liver glycogen breakdown and synthesis of new glucose also supply blood glucose. Cellular uptake and respiration remove it; exercise changes demand, while meals, fasting and stress alter inputs and hormonal signals. Adequate glucose supports ATP production, including in the nervous system. Excess dissolved glucose also makes blood water potential more negative, disturbing water balance.

| Process | Meaning | Consequence in liver |
| --- | --- | --- |
| Glycogenesis | Glucose is incorporated into glycogen | Storage reduces the glucose available for release |
| Glycogenolysis | Glycogen is broken down | Liver can produce and release glucose to blood |
| Gluconeogenesis | Glucose is synthesised from non-carbohydrate precursors, e.g. glycerol and some amino acids | Supports glucose supply when absorbed glucose is limited |

Do not confuse gluconeogenesis with glycogenolysis: one makes glucose from other substrates; the other uses an existing carbohydrate store. Muscle glycogen mainly fuels the muscle itself; it is not released as free glucose into blood in the same way as liver glycogen.

## Insulin and the counter-regulatory hormones {#hormones}

When glucose rises, **β cells in pancreatic islets** increase secretion of **insulin**, a protein hormone. It binds to specific receptors on target-cell surfaces, initiating intracellular signalling. In muscle and adipose cells, this recruits glucose transporters (notably GLUT4) to the surface, increasing facilitated glucose uptake. In liver, insulin promotes enzymes and pathways for glycogenesis and reduces glucose output; hepatic glucose transport is not simply the same GLUT4 mechanism. Insulin also supports glucose use and storage, lowering the original rise and reducing the secretion stimulus.

When glucose falls, **α cells in pancreatic islets** increase **glucagon** secretion. Glucagon acts particularly on the liver to promote glycogenolysis and gluconeogenesis. Blood glucose rises towards the regulated range and the stimulus for glucagon secretion is reduced.

**Adrenaline**, released by the adrenal medulla during stress or activity, prepares substrates for demand. It promotes liver glycogen breakdown and glucose output; its effects on muscle glycogen support local ATP production. These hormones coordinate metabolism rather than themselves converting glycogen into glucose.

![Original information-flow diagram: a rise in glucose activates beta-cell insulin secretion and storage/uptake responses; a fall activates alpha-cell glucagon secretion and hepatic glucose production. Each response opposes its initiating glucose change. A separate heart panel shows SAN, AVN delay, bundle of His and Purkinje conduction.](/assets/images/a2-biology/bl04-feedback-heart.svg)

*Arrows in the feedback panel show causal signals, not blood flow. The conduction panel shows electrical sequence, not a scale drawing of the heart.*

**Worked explanation · Self-written / 自拟题:** after a meal, increased glucose stimulates β cells; insulin binds surface receptors, muscle/adipose cells increase transporter availability, and liver storage increases. Uptake/storage reduce blood glucose, so insulin stimulation declines. Naming the starting variable and the final effect demonstrates negative feedback.

### The cAMP second-messenger model {#second-messenger}

For glucagon and suitable adrenaline receptors in liver, receptor activation leads to activation of **adenyl cyclase**. This enzyme converts ATP into **cyclic AMP (cAMP)**. cAMP activates a **protein kinase**, which changes the activity of downstream proteins by phosphorylation. An enzyme cascade promotes glycogen breakdown and adjusts metabolic pathways. One activated component can influence many downstream molecules, amplifying a small hormone signal.

The hormone is the extracellular first messenger; cAMP relays the signal inside. A receptor has a binding site, not necessarily an enzyme's active site. A protein kinase phosphorylates proteins; it does not directly cut glycogen into glucose. Insulin uses a different signalling route: do not give every hormone the same cAMP pathway.

<!-- task:BL04-H1 -->
**H1 · Self-written / 自拟题**

Complete a liver-cell pathway after glucagon binds: membrane receptor → ____ → ____ → protein kinase → altered activity of downstream ____ → increased glucose output. Explain why the protein kinase should not be labelled “the enzyme that directly hydrolyses glycogen”.
<!-- /task:BL04-H1 -->

<details markdown="1">
<summary>H1 · Hint</summary>

Distinguish the enzyme that makes cAMP, the messenger itself, and the enzymes that perform glycogen metabolism.

</details>

<details markdown="1">
<summary>H1 · Explanation</summary>

Adenyl cyclase → cAMP → protein kinase → downstream enzymes. The kinase changes other proteins' phosphorylation state; activated metabolic enzymes carry out glycogen breakdown. Treating the kinase as the direct glycogen-hydrolysing enzyme loses this essential causal step.

</details>

<!-- task:BL04-H2 -->
**H2 · Self-written / 自拟题**

A specific inhibitor prevents cAMP production in liver cells but does not prevent glucagon binding. Predict the immediate effect on the response to glucagon. Explain why observing normal hormone binding alone would not establish normal regulation of blood glucose.
<!-- /task:BL04-H2 -->

<details markdown="1">
<summary>H2 · Hint</summary>

Follow the signal past binding. A working receptor–hormone interaction is only one step.

</details>

<details markdown="1">
<summary>H2 · Explanation</summary>

The cAMP-dependent activation of protein kinase and downstream glycogen breakdown is reduced, so the expected immediate increase in hepatic glucose output is reduced. Binding can be normal while intracellular signal transmission fails. Other pathways and longer-term compensation mean that binding data alone cannot predict a whole person's exact glucose concentration.

</details>

## Diabetes: mechanism, symptoms and evidence {#diabetes}

In **Type 1 diabetes**, immune-mediated loss of pancreatic β cells commonly causes severe insulin deficiency. In **Type 2 diabetes**, target tissues respond less effectively to insulin, often followed by inadequate insulin secretion relative to demand. Type 2 risk is associated with factors including inherited susceptibility, age, excess body fat and low physical activity; an association in a population does not prove one factor caused an individual case. Type 1 should not be explained simply as eating too much sugar.

Management depends on type and individual needs: Type 1 requires insulin replacement; dietary planning supports matching glucose supply to treatment. Type 2 management can involve dietary/activity changes, medicines and sometimes insulin. These are course-level principles, not an individual treatment plan. Mechanistically, insulin can compensate for absent secretion, but a treatment response must be measured rather than assumed from a label.

High filtered glucose can exceed renal reabsorption capacity. Glucose remaining in tubule fluid makes its water potential more negative, reducing water reabsorption and increasing urine loss; dehydration contributes to thirst. This uses AS transport principles. A full nephron/ADH course is not an additional compulsory BL04 topic here.

<!-- task:BL04-H3 -->
**H3 · Self-written / 自拟题**

A person has persistently high blood glucose and glucose remains in the kidney tubule fluid. Explain how this can increase urine volume and thirst. Explain why these symptoms alone do not distinguish Type 1 from Type 2 diabetes.
<!-- /task:BL04-H3 -->

<details markdown="1">
<summary>H3 · Hint</summary>

Trace the solute retained in tubule fluid to water movement; distinguish a shared consequence from different underlying causes.

</details>

<details markdown="1">
<summary>H3 · Explanation</summary>

Glucose lowers tubule-fluid water potential, so less water returns to blood and more is lost in urine. The resulting water deficit promotes thirst. Either deficient insulin secretion or impaired insulin action can produce high glucose, so these symptoms alone cannot distinguish the types; additional diagnostic evidence is needed.

</details>

## Heart: generate a rhythm, then adjust it {#heart}

Cardiac muscle is **myogenic**: the impulse to contract starts in the heart, not with one motor-neurone instruction per beat. The **sinoatrial node (SAN)** acts as the pacemaker. A wave spreads through the atria, causing atrial systole. Non-conducting tissue between atria and ventricles prevents direct spread; conduction passes through the **atrioventricular node (AVN)**, whose delay permits ventricular filling. The bundle of His conducts towards the apex; **Purkinje tissue** distributes excitation through ventricular walls, coordinating contraction from the apex upwards to eject blood.

Autonomic nerves adjust SAN firing. **Sympathetic** activity increases heart rate; **parasympathetic**, including the vagus nerve, decreases it. They modify the intrinsic rhythm rather than make cardiac muscle non-myogenic.

**Chemoreceptors** detect chemical changes associated with CO₂ and pH. Increased metabolic activity can increase CO₂ and lower pH; information to cardiovascular centres in the medulla can increase sympathetic and reduce parasympathetic drive, raising heart rate. Increased circulation helps transport gases, provided ventilation and other processes also respond. Heart rate itself is often an effector response, not the original regulated variable.

**Pressure receptors (baroreceptors)** in the carotid sinus and aortic arch detect stretch. Raised arterial pressure normally increases their input to medullary centres, favouring reduced sympathetic and increased parasympathetic activity, slowing the SAN. A fall evokes the opposite adjustment. Cardiac output depends on both rate and stroke volume; heart rate alone is not a direct measurement of blood pressure or oxygen delivery.

<!-- task:BL04-H4 -->
**H4 · Self-written / 自拟题**

Complete the response to a fall in arterial blood pressure: less stretch of pressure receptors → changed input to the medulla → increased ____ and reduced ____ activity to the SAN → ____ heart rate. Explain how this can oppose the original change, assuming stroke volume and other factors permit it.
<!-- /task:BL04-H4 -->

<details markdown="1">
<summary>H4 · Hint</summary>

Choose the autonomic branch that accelerates the SAN, then connect rate to cardiac output under the given condition.

</details>

<details markdown="1">
<summary>H4 · Explanation</summary>

Increased sympathetic and reduced parasympathetic activity → increased heart rate. With adequate stroke volume, cardiac output increases and can help restore pressure. The increase opposes the original fall, so the loop is negative feedback. Other vascular and volume responses also affect the actual pressure.

</details>

## RP5: a pulse rate depends on the counting window {#practical}

<!-- task:BL04-H5 -->
**H5 · Self-written / 自拟题**

A constructed pulse record contains 18 beats during the first 10 s after exercise and 15 during the next 10 s. Calculate the two rates in beats min−1. Explain why counting for longer both reduces the relative effect of a one-beat counting error and may change the biological quantity being estimated. Plan a fair within-person comparison of two safe activity intensities.
<!-- /task:BL04-H5 -->

<details markdown="1">
<summary>H5 · Hint</summary>

Convert a 10-second count to a per-minute rate. During recovery the heart rate is changing, so a long count is an average across different states.

</details>

<details markdown="1">
<summary>H5 · Calculation and design</summary>

$$r_1=18\times\frac{60}{10}=108\ \text{beats min}^{-1},\qquad r_2=15\times\frac{60}{10}=90\ \text{beats min}^{-1}.$$

One missed beat in 10 s changes the calculated rate by 6 beats min−1; in 60 s it changes it by 1 beat min−1. However, a longer post-exercise count averages over recovery and may underestimate the rate immediately after exercise.

With consent, a right to stop and teacher-approved safe activity, use the same person for both intensities; standardise duration, environment, counting window and delay after stopping. Allow return to a defined resting condition between trials and counterbalance the order. Repeat on suitable occasions and include several people if drawing conclusions beyond one individual. Record age/fitness and relevant conditions without treating multiple readings from one person as independent people. Stop if unwell. This planning exercise does not complete RP5.

</details>

## Diagnose and retry {#retry}

A feedback explanation missing the final effect is incomplete. A hormone name without its target tissue is ambiguous. A pulse result without a time window cannot reliably be compared with a changing recovery rate.

<!-- task:BL04-H6 -->
**H6 · Self-written / 自拟题 — retry**

A rising CO₂ concentration lowers blood pH. Heart rate increases, improving transport to the lungs, and CO₂ is removed more rapidly. Identify the regulated disturbance and explain why an INCREASE in heart rate can form part of NEGATIVE feedback. Contrast this with a clotting reaction that recruits more platelets.
<!-- /task:BL04-H6 -->

<details markdown="1">
<summary>H6 · Hint</summary>

The sign of feedback describes the effect on the disturbance, not whether an effector becomes more active.

</details>

<details markdown="1">
<summary>H6 · Explanation</summary>

The disturbance is increased CO₂/decreased pH. Faster circulation can assist its correction by transporting CO₂ for removal, so the effect opposes the disturbance: negative feedback. Platelet recruitment enhances the initiating platelet response, so that local process is positive feedback; it needs a limiting endpoint rather than restoring its own activation to the initial value.

</details>

## Sources and connections {#sources}

[OxfordAQA 9610 specification v5.1](https://www.oxfordaqa.com/wp-content/uploads/2022/08/oxfordaqa-a-level-biology-specification.pdf), §3.4.6–3.4.8; [official resources](https://www.oxfordaqa.com/qualification/international-as-and-a-level-biology-9610/). All page tasks, numbers and feedback are self-written; no official marks are assigned.

Connect glucose demand to [respiration](/alevel/a2-biology/respiration/), trial design to [experimental design](/alevel/a2-biology/experimental-design/), and mechanism chains to [synoptic writing](/alevel/a2-biology/synoptic-writing/).
