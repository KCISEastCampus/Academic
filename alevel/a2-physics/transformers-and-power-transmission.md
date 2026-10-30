---
title: Transformers and Power Transmission
layout: subjects
mathjax: true
grade: a2
subject: a2-physics
permalink: /alevel/a2-physics/transformers-and-power-transmission/
toc_headings: h2, h3, h4
study_page: true
---

[A2 Physics](/alevel/a2-physics/) · PH03 · 3.10.6 · RP7

A transformer can increase voltage, but cannot create power. Follow changing flux, account for losses, then decide what is held fixed in a transmission comparison.

**Before starting:** recall [Faraday’s law](/alevel/a2-physics/electromagnetic-induction/) and [rms values](/alevel/a2-physics/alternating-current/). The [RP7 investigation](#data-transformer-efficiency) asks for measurement decisions and data analysis; reading it is not completion of the physical practical.

## One changing flux, two windings {#transformer-principle}

An alternating primary current produces changing flux in a shared magnetic core. The linked changing flux induces emf in the secondary; a secondary current flows only when its circuit is closed. For the same core flux per turn:

$$\varepsilon_p=-N_p\frac{\mathrm d\Phi}{\mathrm dt},\qquad\varepsilon_s=-N_s\frac{\mathrm d\Phi}{\mathrm dt}.$$

Neglect winding resistance and leakage in the ideal voltage model. Dividing the emf magnitudes gives:

$$\boxed{\frac{V_s}{V_p}=\frac{N_s}{N_p}}.$$

Use rms with rms, or peak with peak; do not mix them. More secondary turns give a step-up transformer; fewer give step-down. A simple transformer changes amplitude, **not frequency**. It transfers energy by the electromagnetic field, without conducting charge from one isolated winding to the other.

A steady DC current gives steady core flux after the switching transient, so there is no sustained secondary emf. Switching DC on or off can induce a brief secondary signal. Low DC winding resistance can also cause excessive primary current and heating: do not test a transformer on an unsuitable DC supply.

### Example 1: voltage and frequency {#example-1}

*Adapted from OxfordAQA 9630 PH03 January 2020 Q35; QP p.43 and MS p.9 (key C) read. Open calculation replaces the options.*

An ideal transformer has $N_p=300$ and $N_s=600$. Its primary sine voltage has peak $10\,\mathrm V$ at $20\,\mathrm{Hz}$. Find the secondary peak and frequency, then its rms voltage.

$$V_{s0}=10\frac{600}{300}=20\,\mathrm V,\qquad f_s=20\,\mathrm{Hz},\qquad V_{s,\mathrm{rms}}=\frac{20}{\sqrt2}\approx14\,\mathrm V.$$

The ratio changes voltage amplitude, not how often the common flux completes a cycle.

## Ideal current and actual efficiency {#efficiency-and-losses}

For an ideal transformer delivering power, with the usual resistive-load model:

$$P_{\mathrm{in}}=P_{\mathrm{out}},\qquad V_pI_p=V_sI_s,\qquad\frac{I_s}{I_p}=\frac{N_p}{N_s}.$$

Stepping up voltage reduces current for the same transferred power; multiplying both by the turns ratio would create power. An actual device loses energy:

$$\eta=\frac{P_{\mathrm{out}}}{P_{\mathrm{in}}},\qquad P_{\mathrm{loss}}=P_{\mathrm{in}}-P_{\mathrm{out}}.$$

Multiply by 100 for percent efficiency. In the PH03 stated power model and the handbook exercise below, estimate powers using $V_{\mathrm{rms}}I_{\mathrm{rms}}$. This product is exact for the resistive output but is not universally the true input power of an AC device. In a real transformer investigation, a suitable AC power meter can check true input power; otherwise report the VI approximation and its limitation. No power-factor calculation is introduced here.

Match each mechanism to a change in design, rather than listing loss names:

| Mechanism | What happens and how to reduce it |
| --- | --- |
| Copper loss | Winding resistance causes Joule heating; suitably thick, low-resistance wire reduces it at a given current. |
| Eddy-current heating | Changing core flux induces loops within conducting core material; insulated laminations interrupt large loops and increase their resistance. |
| Hysteresis heating | Repeated reversal of magnetisation dissipates energy; a suitable magnetically soft core reduces energy dissipated per cycle. |
| Flux leakage | Some primary flux does not link the secondary, reducing coupling; a well-designed closed shared core and winding placement reduce leakage. Leakage is not itself a claim that all unlinked field energy becomes heat. |

### Example 2: use actual input power {#example-2}

A transformer delivers $12\,\mathrm{V\ rms}$ at $2.0\,\mathrm{A\ rms}$ to a resistive load. Its true input power is measured as $30\,\mathrm W$. Find efficiency and loss. Can the ideal current-ratio equation also be assumed exactly?

$$P_{\mathrm{out}}=24\,\mathrm W,\qquad\eta=\frac{24}{30}=0.80=80\%,\qquad P_{\mathrm{loss}}=6.0\,\mathrm W.$$

The measured loss rules out treating the whole device as lossless, but does not by itself determine the winding-current ratio. These data do not justify assuming the ideal current ratio; a lossy model can still retain that ratio. Imposing both the exact ideal voltage and current ratios under the VI power model would force equal powers and contradict the measured loss.

## RP7: decide what and how to measure {#rp7-method}

<img src="/assets/img/physics-transformer-meters.svg" alt="Measurement schematic: an isolated low-voltage AC source feeds the primary with series ammeter and parallel voltmeter; a separate secondary circuit has series ammeter, variable resistive load and a parallel voltmeter. Both windings share a closed core." width="520" height="500" data-lazy-ignore="true">

Investigate how efficiency varies with secondary load/current. Before collecting readings, decide which current range gives useful variation without exceeding coil, supply, rheostat or meter ratings. Begin with high load resistance and a low, teacher-approved isolated AC voltage. Use AC meters of suitable range; amperemeters go in series and voltmeters across the relevant winding/load. Never place an ammeter directly across a supply.

Keep turns, core assembly and frequency fixed; monitor primary voltage **under load**, since a source can sag. Limit temperature changes by switching off between readings and taking a repeat series after cooling. Record all four quantities together for every load setting, with resolutions/uncertainties. Repeats test scatter; they cannot fix a wrong meter mode, connection or power model. Do not deliberately short the secondary or connect exposed apparatus to mains. Follow the school’s apparatus-specific risk assessment.

## RP7 data investigation: leave efficiency uncalculated {#data-transformer-efficiency}

*Adapted data task: seven selected rows from OxfordAQA 9630 Practical handbook, Version 2, September 2018, [p.74](https://www.oxfordaqa.com/oaqaresources/science/teaching/a-level-practical-handbook-physics.pdf), sorted here by secondary current. Only the four original meter readings are retained. They are official example data, not this school’s measurements. Tasks and uncertainty assumptions are self-written.*

Use the handbook VI approximation for this exercise: estimate input and output powers from the rms meter products and report the resulting estimated efficiency. Subscripts p and s mean primary and secondary. For a teaching uncertainty comparison only, take every voltage reading as ±0.1 V and current reading as ±0.01 A. These uncertainty values are supplied here, not taken from the original table.

| $V_p$ / V | $I_p$ / A | $V_s$ / V | $I_s$ / A |
| --- | --- | --- | --- |
| 12.0 | 1.36 | 22.0 | 0.56 |
| 12.1 | 1.79 | 21.6 | 0.78 |
| 11.8 | 2.14 | 20.4 | 1.00 |
| 11.5 | 2.64 | 19.3 | 1.26 |
| 11.2 | 3.07 | 18.2 | 1.50 |
| 11.0 | 3.47 | 17.1 | 1.70 |
| 10.8 | 3.84 | 16.4 | 1.89 |

1. Calculate estimated input power, output power, loss and efficiency for every row. Plot efficiency vertically against secondary current. Describe the broad trend using data, without assuming it must always increase.
2. Does primary voltage stay constant? Explain one consequence for a claim that only secondary current changed.
3. For the 1.00 A row, estimate a conservative fractional uncertainty in efficiency using the supplied first-order rule: add the four fractional meter uncertainties. Is the exact position of a maximum established by this small sample?
4. Choose one change to reduce copper loss and one to reduce core heating, explaining the mechanism. State a measurement that would test whether the VI input approximation is adequate.

<details markdown="1">
<summary>Hint</summary>

For each row calculate the two powers separately before dividing output by input. A fractional uncertainty uses the uncertainty divided by that row’s reading, not by a shared nominal value.

</details>

<details markdown="1">
<summary>Analysis and retry</summary>

The estimated efficiencies, in row order, are about 75.5%, 77.8%, 80.8%, 80.1%, 79.4%, 76.2% and 74.7%. The broad maximum is around the middle of this sampled load range. For the 1.00 A row:

$$P_{\mathrm{in}}=25.252\,\mathrm W,\quad P_{\mathrm{out}}=20.4\,\mathrm W,\quad P_{\mathrm{loss}}=4.852\,\mathrm W,\quad\eta\approx0.808.$$

Primary voltage falls overall from about 12 V to 10.8 V and secondary voltage also falls. This is not a perfectly constant-primary-voltage investigation. At low load, roughly persistent core losses form a larger fraction of input; at higher currents winding heating grows. The records alone do not separate every loss mechanism.

$$\frac{\Delta\eta}{\eta}\approx\frac{0.1}{20.4}+\frac{0.01}{1.00}+\frac{0.1}{11.8}+\frac{0.01}{2.14}\approx0.028.$$

This gives about ±0.023 in efficiency, or **±2.3 percentage points**, not ±2.3% of efficiency. This conservative first-order estimate is not a statistical confidence interval. Nearby differences and sparse sampling do not fix an exact optimum. Measure true input power with an appropriate AC power meter to test the VI approximation. **Retry:** a report gives 110% efficiency. Retain the raw readings and inspect wiring, paired load settings, ranges/calibration and power definitions; do not clip the value to 100%.

</details>

## Transmission: state which power is fixed {#power-transmission}

<img src="/assets/img/physics-transmission-model.svg" alt="Transmission model showing source, ideal step-up transformer, a two-wire line represented by total loop resistance, receiving voltage and a resistive load. Source and receiving powers are labelled separately." width="520" height="350" data-lazy-ignore="true">

Use a simple resistive line of total outgoing-plus-return resistance $R_{\mathrm{line}}$, negligible other line effects, and rms quantities:

$$\Delta V=IR_{\mathrm{line}},\qquad P_{\mathrm{line}}=I^2R_{\mathrm{line}},\qquad P_{\mathrm{send}}=P_{\mathrm{receive}}+P_{\mathrm{line}}.$$

For the same sending power, $I=P_{\mathrm{send}}/V_{\mathrm{send}}$. A higher sending voltage reduces current, line voltage drop and line heating. Receiving power then differs slightly because line loss differs. If instead the question fixes receiving power and receiving voltage, use those to determine current first, then add the line drop to obtain sending voltage. Do not mix the two ends. Real grids have additional constraints; this is the stated PH03 model.

### Example 3: compare two sending voltages {#example-3}

A station sends $100\,\mathrm{kW}$ through a line with total resistance $10\,\Omega$. Compare sending voltages 10 kV and 20 kV. Find line current, heating loss, voltage drop and received power. Treat transformers as ideal.

At 10 kV: $I=10\,\mathrm A$, loss $=1.0\,\mathrm{kW}$, drop $=100\,\mathrm V$ and received power $=99.0\,\mathrm{kW}$.

At 20 kV: $I=5.0\,\mathrm A$, loss $=0.25\,\mathrm{kW}$, drop $=50\,\mathrm V$ and received power $=99.75\,\mathrm{kW}$.

Doubling sending voltage at fixed sending power quarters the loss and halves the voltage drop. Check: receiving voltages are 9.90 and 19.95 kV, whose products with the respective currents reproduce received powers. A receiving step-down transformer then provides a suitable load voltage without recreating lost energy.

## Practice {#practice}

### Question 1: test a claim of extra power {#question-1}

*Self-written.*

An ideal transformer has turns ratio $N_s/N_p=5$. It supplies a resistive load with 50 W from a 10 V rms primary. Determine primary current, secondary voltage and secondary current. Diagnose the claim “both voltage and current increase fivefold”.

<details markdown="1">
<summary>Hint</summary>

Conserve power before using a current ratio.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

$$I_p=5.0\,\mathrm A,\qquad V_s=50\,\mathrm V,\qquad I_s=1.0\,\mathrm A.$$

Increasing both voltage and current fivefold would multiply power by 25. **Retry:** if actual efficiency were 80% at the same 50 W output, input power would be 62.5 W. Those power data alone do not determine the current ratio; the exact ideal voltage and current ratios cannot both be imposed under the VI power model.

</details>

### Question 2: explain two design decisions {#question-2}

*Adapted from OxfordAQA 9630 PH03 Specimen 2019/V2.0 Q5; QP p.12 and MS p.10 read. The explanation task is retained; no official marks are assigned here.*

Explain how two distinct transformer loss mechanisms occur and how suitable design or material choices reduce each one. Give a linked explanation for each, rather than a list of names.

<details markdown="1">
<summary>Hint</summary>

For each choice connect cause, energy transfer and the physical effect of the improvement.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

One valid pair is eddy-current heating and copper loss. Changing core flux induces circulating currents that dissipate energy; insulated laminations interrupt large loops and raise their resistance. Winding current causes resistive heating; thicker low-resistance conductors reduce this at the same current. Hysteresis with a suitable soft core is another valid mechanism. **Retry:** explain why laminations are insulated, rather than merely being separate metal sheets touching electrically.

</details>

### Question 3: hold the receiving end fixed {#question-3}

*Self-written.*

A resistive load must receive $40\,\mathrm{kW}$ at 2.0 kV through a line of total resistance $4.0\,\Omega$. Find current, line loss, sending voltage and sending power. Repeat for the same received power at 4.0 kV.

<details markdown="1">
<summary>Hint</summary>

The given voltage is at the receiving end; do not subtract the line drop from it to find sending voltage.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

At 2.0 kV: $I=20\,\mathrm A$, loss $=1.6\,\mathrm{kW}$, $V_{\mathrm{send}}=2080\,\mathrm V$ and $P_{\mathrm{send}}=41.6\,\mathrm{kW}$.

At 4.0 kV: $I=10\,\mathrm A$, loss $=0.40\,\mathrm{kW}$, $V_{\mathrm{send}}=4040\,\mathrm V$ and $P_{\mathrm{send}}=40.4\,\mathrm{kW}$.

**Retry:** halve line resistance at fixed received power/voltage: current is unchanged and line loss halves.

</details>

### Question 4: understand a no-load reading {#question-4}

*Self-written.*

A real transformer has its secondary open. Its primary AC meter still records current. Does this prove that power is being delivered to the secondary load? Explain what other measurements are needed to distinguish current, true input power and output power.

<details markdown="1">
<summary>Hint</summary>

An open secondary carries no sustained load current, while magnetisation and losses still concern the primary.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

No. Secondary load power is zero when load current is zero. Primary current can establish changing magnetisation and supply losses; current alone does not measure true AC power. Measure true input power with a suitable power meter and record voltages and currents with correct modes. **Retry:** a nonzero open-circuit secondary voltage does not imply a nonzero load power.

</details>

### Question 5: change core resistivity {#question-5}

*Adapted from OxfordAQA 9630 PH03 June 2024 Q20; QP p.33 and MS p.21 (key C) read. An explanation replaces the options; comparable flux is explicitly assumed.*

Two otherwise comparable conducting cores experience the same changing flux. Explain why higher electrical resistivity can reduce eddy-current heating. Does this remove the need to consider hysteresis or winding resistance?

<details markdown="1">
<summary>Hint</summary>

Separate the induced emf around a loop from the resistance of that loop.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

For comparable loop geometry and flux change, induced emf is comparable. Higher loop resistance reduces circulating current and heating at that emf. It does not remove magnetisation-reversal loss or copper resistance in windings. **Retry:** insulated laminations can reduce loop currents even if the base material stays the same.

</details>

### Question 6: combine waveform and power {#question-6}

*Self-written.*

An ideal transformer has $N_p=240$, $N_s=120$. Its primary sinusoidal peak voltage is $24\,\mathrm V$ at 50 Hz. The secondary feeds a constant $6.0\,\Omega$ load. Determine secondary peak, rms voltage, average load power, primary rms current and output frequency. State one reason a real measurement could differ.

<details markdown="1">
<summary>Hint</summary>

Convert the secondary peak to rms before using resistive power.

</details>

<details markdown="1">
<summary>Solution and retry</summary>

$$V_{s0}=12\,\mathrm V,\quad V_{s,\mathrm{rms}}=\frac{12}{\sqrt2}\approx8.5\,\mathrm V,\quad P_{\mathrm{out}}=12\,\mathrm W.$$

$$I_{p,\mathrm{rms}}=\frac{12}{24/\sqrt2}\approx0.71\,\mathrm A,\qquad f_s=50\,\mathrm{Hz}.$$

Winding voltage drop, incomplete coupling or changed load resistance can alter a real result; energy losses require greater input power for the same output. **Retry:** double load resistance while keeping ideal input voltage fixed: output voltage stays the same, but load current and power halve.

</details>

## Quick reference and PH03 review {#quick-reference}

| Model | Relation |
| --- | --- |
| Ideal voltage ratio, same type of voltage value | $V_s/V_p=N_s/N_p$ |
| Ideal lossless transfer | $V_pI_p=V_sI_s$ |
| Actual efficiency | $\eta=P_{\mathrm{out}}/P_{\mathrm{in}}$ |
| Resistive line, total loop resistance | $P_{\mathrm{line}}=I^2R_{\mathrm{line}}$; $\Delta V=IR_{\mathrm{line}}$ |

Before leaving PH03, explain this chain in English without copying the table: mechanical rotation → changing linkage → induced sine voltage → rms heating → transformed voltage/current → line loss. For the other PH03 models, return to the course index and attempt a closed-solution task on circular motion, fields, capacitance and exponential change.

[Previous: Alternating Current](/alevel/a2-physics/alternating-current/) · [PH03 course index](/alevel/a2-physics/) · [PH04: Thermal Physics](/alevel/a2-physics/thermal-physics/)

## Sources and scope {#sources}

OxfordAQA 9630 PH03, [specification body v4.4](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-international-as-and-a-level-physics-specification.pdf) Section 3.10.6 and RP7, printed pp.26/38 (PDF pp.25/37), checked 21 October 2026. Example 1 adapts January 2020 QP Q35 p.43, paired with MS p.9. Question 2 adapts Specimen 2019/V2.0 Q5, QP p.12 and MS p.10. Question 5 adapts June 2024 QP Q20 p.33 with MS p.21. RP7 methods and selected four-column example readings come from [Practical handbook v2, September 2018](https://www.oxfordaqa.com/oaqaresources/science/teaching/a-level-practical-handbook-physics.pdf), pp.72–74; its derived columns are recalculated here, not supplied in the task. The current specification defines efficiency as output/input. Teacher-supplied uncertainties are separate from those source records. Jim Breithaupt Section 21.5, printed p.384, supports the common-flux explanation. Other tasks and drawings are self-written. No physical RP7 or student learning trial is certified.

{% include exam_topic_practice.html %}
