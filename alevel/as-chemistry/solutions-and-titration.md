---
title: Solutions and Titration
layout: subjects
mathjax: true
grade: as
subject: as-chemistry
permalink: /alevel/as-chemistry/solutions-and-titration/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">How much solute was in the unknown sample?</h2>

A colour change is an observation. An unknown concentration is an inference that also needs a measured sample volume, a known titrant concentration and a balanced reaction. This lesson connects those pieces through **Required practical 1: prepare a volumetric solution and carry out a simple acid–base titration**.

You need [mass-to-moles and reaction ratios](/alevel/as-chemistry/amount-and-equations/). You will choose preparation steps, process original burette readings and explain which way a procedural fault moves the calculated result. All numerical datasets are self-written and constructed. This is preparation and data analysis; carry out real work only with a teacher's approved method and risk assessment, eye protection, a pipette filler and appropriate handling of dilute acids/alkalis. Report and rinse splashes as instructed; never pipette by mouth.

<h2 id="concentration">Concentration refers to the whole solution</h2>

Concentration $c$ is solute amount divided by **final solution volume**, not by the volume of water added:

$$c=\frac{n}{V},\qquad n=cV$$

For $c$ in $\mathrm{mol\,dm^{-3}}$, use $V$ in dm³. Because 1000 cm³ = 1 dm³, 25.00 cm³ = 0.02500 dm³. A 0.1000 $\mathrm{mol\,dm^{-3}}$ solution contains $0.1000\times0.02500=0.002500$ mol in that aliquot. A smaller aliquot has fewer moles, not a lower concentration, if the solution was well mixed.

In a dilution without loss or reaction, solute amount remains the same while final volume changes. This gives $c_1V_1=c_2V_2$ for the **same solute transferred**. It is not a universal titration equation: reacting species must obey their balanced coefficients. A concentration in $\mathrm{g\,dm^{-3}}$ is mass per volume; divide by the molar mass in $\mathrm{g\,mol^{-1}}$ to obtain $\mathrm{mol\,dm^{-3}}$.

<h2 id="preparing-solution">Prepare a known amount in a known final volume</h2>

A **standard solution** has an accurately known concentration. To make 250.0 cm³ of 0.05000 $\mathrm{mol\,dm^{-3}}$ anhydrous sodium carbonate, use $M(\ce{Na2CO3})=106.0\,\mathrm{g\,mol^{-1}}$. Required amount is $0.05000\times0.2500=0.01250$ mol; required mass is **1.325 g**. This assumes the stated pure, dry, anhydrous material. A hydrated formula has a different molar mass: do not use the anhydrous number for a hydrated bottle.

Weigh a suitable mass with sufficient resolution, recording the actual mass transferred (for example by difference). Dissolve it in a beaker in less than the final volume of deionised water. Transfer the solution through a funnel into a 250.0 cm³ volumetric flask; rinse the beaker, rod and funnel into the flask. This is **quantitative transfer**: the measured solute must all reach the measured volume. If dissolving warms the solution, let it return to the flask's calibration temperature before making up to the mark.

Add water near the line, then use a dropping pipette so the bottom of the meniscus meets the calibration mark at eye level. Stopper and invert repeatedly to mix. The flask gives the final solution volume; do not dissolve the solid in 250.0 cm³ of water and assume the resulting volume is still 250.0 cm³. If you overshoot, pouring some mixed solution away removes solute as well as solvent and does not restore the intended concentration. Prepare again as directed rather than reporting the target concentration as measured.

Use the actual mass and volume to calculate the concentration. Accurate labelling of the substance, hydration state, concentration and preparation date prevents a later titration from using the wrong standard.

<div class="lesson-check" markdown="1">
<h3 id="preparation-check">Decide what the preparation makes</h3>
<!-- task:preparation-check -->
A student needs 250.0 cm3 of 0.04000 mol dm−3 anhydrous Na2CO3 solution, using pure dry solid of M = 106.0 g mol−1. Calculate the required mass. Choose between a measuring cylinder and a volumetric flask for the final volume and justify it. The balance records an actual transferred mass of 1.055 g. Calculate the actual concentration if the final volume is 250.0 cm3. Explain why “add the solid to 250.0 cm3 of water” is not equivalent.
<!-- /task:preparation-check -->
<details markdown="1"><summary>Hint</summary>
Separate target concentration from actual concentration. The denominator must describe the final mixture.
</details>
<details markdown="1"><summary>Solution and check</summary>
Target mass is $0.04000\times0.2500\times106.0=\mathbf{1.060\,g}$. A volumetric flask is calibrated for a fixed final volume and has a narrower neck for setting its mark accurately than a general measuring cylinder. Actual concentration is $(1.055/106.0)/0.2500=\mathbf{0.03981\,mol\,dm^{-3}}$. Adding solid to a known water volume does not establish the final solution volume. If you reported 0.04000 without using the recorded mass, revisit [actual preparation](#preparing-solution), then try [the preparation retry](#retry-preparation).
</details>
</div>


<div class="lesson-check" markdown="1">
<h3 id="preparation-procedure">Repair a proposed procedure</h3>
<!-- task:preparation-procedure -->
A student dissolves a weighed carbonate sample in warm water, transfers the solution without rinsing the beaker or funnel, fills the still-warm volumetric flask to its mark and takes an aliquot without mixing. Correct the sequence and explain what each correction protects. Could calculation alone certify that the student has performed the method competently?
<!-- /task:preparation-procedure -->
<details markdown="1"><summary>Hint</summary>
Track both the solute that reaches the flask and the volume and uniformity of the cooled solution.
</details>
<details markdown="1"><summary>Solution and check</summary>
Rinse the beaker, rod and funnel into the flask to recover the weighed solute; incomplete transfer makes concentration lower than calculated from the original mass. Let the solution reach the calibration temperature before setting the final mark. Then stopper and invert repeatedly before taking an aliquot, so it represents the bulk solution. A calculation cannot certify practical competence: supervised observation of handling and measurements is still needed. If any reason was missing, revisit [preparation](#preparing-solution) and explain a corrected sequence again without looking.
</details>
</div>

<h2 id="titration-model">An endpoint makes a chemical comparison possible</h2>

For carbonate and strong acid at complete neutralisation:

$$\ce{Na2CO3(aq) + 2HCl(aq) -> 2NaCl(aq) + CO2(g) + H2O(l)}$$

One carbonate unit consumes two hydrogen ions; a suitable net ionic equation is:

$$\ce{CO3^2-(aq) + 2H+(aq) -> CO2(g) + H2O(l)}$$

Atoms and total charge agree: two C/H/O sides contain one C, two H and three O, and the total charge on each side is zero. Sodium and chloride ions are spectators. For this reaction's complete-neutralisation endpoint, methyl orange is a suitable indicator; a phenolphthalein endpoint would correspond to a different stage of carbonate neutralisation. Use the indicator specified and justified for the particular reaction. You do not need an A2 pH-curve derivation here.

The **equivalence point** is the stoichiometric point; an indicator's **endpoint** is the observed colour-change point used to approximate it. They are not definitions of pH 7, nor are they automatically identical. Add a few drops of indicator so its own acid/base demand remains small and use a consistent endpoint criterion. With acid added to carbonate, stop at the first persistent orange change from yellow, using the teacher-approved consistent colour criterion, not after deliberately making the solution strongly acidic.


Stage 1: $\ce{CO3^2-(aq) + H+(aq) -> HCO3-(aq)}$. Stage 2: $\ce{HCO3-(aq) + H+(aq) -> CO2(g) + H2O(l)}$. Each consumes one mole of H+ per mole of original carbonate, giving two in total.

<div class="lesson-check" markdown="1">
<h3 id="endpoint-check">Choose which observation matches the reaction</h3>
<!-- task:endpoint-check -->
An acid is added to carbonate. Method A stops when phenolphthalein first loses its pink colour at the carbonate-to-hydrogencarbonate stage. Method B uses the first persistent methyl-orange orange endpoint for complete neutralisation. Which method matches CO3^2− + 2H+ → CO2 + H2O? Explain how many moles of H+ each stage consumes per mole of original carbonate, and why continuing to deep red is unsuitable.
<!-- /task:endpoint-check -->
<details markdown="1"><summary>Hint</summary>
Compare the species remaining after one hydrogen ion with those after two.
</details>
<details markdown="1"><summary>Solution and check</summary>
B matches the complete reaction. Stage 1 uses one mole of H+ per mole of carbonate to form hydrogencarbonate; stage 2 uses one further mole, giving CO2 and water. A stops after the first stage and cannot use the total 1:2 ratio. Deep red indicates excess acid beyond the prescribed orange criterion. If you chose by colour alone, revisit [the model](#titration-model), close this answer and explain both stages from the species.
</details>
</div>

<h2 id="apparatus-decisions">Choose actions for their effect on amount</h2>

Measure a fixed carbonate aliquot with a volumetric pipette and filler into a conical flask. Rinse the pipette first with water and then with the solution it will deliver; otherwise residual water dilutes that aliquot. Let it drain as designed; do not blow out a calibrated residual unless the pipette is specified for that use.

Rinse the burette with water and then with the acid to be used. Fill its tip and remove air bubbles before recording the initial reading; remove the filling funnel. Read the bottom of a clear meniscus at eye level, using the scale that increases downwards. A titre is **final reading minus initial reading**; the initial reading need not be zero.

<div class="table-responsive" role="region" aria-label="Titration apparatus schematic, scroll horizontally" tabindex="0" style="overflow-x:auto" markdown="1">

![Schematic of a burette above a conical flask on a white tile. Enlarged scale increases downwards; a dashed eye line meets the bottom of the concave meniscus. A pipette with a filler is shown separately for transferring an aliquot.](/assets/img/chemistry-as-titration.svg){: width="720" height="420" style="min-width:720px" }

</div>

On a narrow screen, scroll sideways to read the labels, or select the image to enlarge it.

The schematic explains roles, not exact glassware dimensions. Swirl the flask during addition, rinse splashes down its walls with deionised water and use a white tile to see the endpoint. That water changes the solution's volume but does not change the moles of carbonate already transferred, so the required acid amount is unchanged. The conical flask need not be dry; it must be clean and free of reactive contamination.

Do a rough titration to locate the endpoint, then repeat more carefully, adding dropwise near the expected point. Obtain concordant titres using the criterion supplied by the question or method. Do not average the rough titre with accurate ones. An unexplained discordant result calls for investigation and further measurements, not selective removal to make an attractive mean. Concordance indicates repeatability, not freedom from systematic bias.

<h2 id="raw-data">From original readings to concentration</h2>

<div class="worked-example" markdown="1">
**Worked example — self-written, constructed readings; not real experimental data.**
<!-- task:worked-titration -->
25.00 cm3 aliquots of 0.05000 mol dm−3 Na2CO3 are titrated with HCl of unknown concentration, using methyl orange at complete neutralisation. Accurate titres within 0.10 cm3 are concordant. The burette readings are listed below. Find a defensible mean titre and the acid concentration. Use the reaction Na2CO3 + 2HCl → 2NaCl + CO2 + H2O.
<!-- /task:worked-titration -->

| Run | Initial reading / cm³ | Final reading / cm³ |
| --- | --- | --- |
| Rough | 0.00 | 25.90 |
| 1 | 0.40 | 25.50 |
| 2 | 1.20 | 26.20 |
| 3 | 0.70 | 25.75 |

Subtract each starting reading: titres are 25.90 (rough), 25.10, 25.00 and 25.05 cm³. Accurate runs 1–3 span exactly 0.10 cm³, meeting the stated criterion. Exclude the rough reading by method, not because it spoils the answer. Their mean is $(25.10+25.00+25.05)/3=\mathbf{25.05\,cm^3}$.

Each aliquot contains $0.05000\times0.02500=0.001250$ mol carbonate. The equation requires twice that acid amount:

$$n(\ce{HCl})=2(0.001250)=0.002500\,\mathrm{mol}$$

$$c(\ce{HCl})=\frac{0.002500}{0.02505}=0.09980\,\mathrm{mol\,dm^{-3}}$$

Check backwards: 25.05 cm³ of that acid supplies about 0.002500 mol, matching twice the carbonate amount. The similar volumes do not imply similar concentrations here because the ratio is 2:1. Calculate concentration of the material **in the burette**, using its mean titre as denominator, not the pipetted volume by habit.
</div>

<div class="lesson-check" markdown="1">
<h3 id="sample-check">Process a new measurement record</h3>
<!-- task:sample-check -->
A 25.00 cm3 aliquot of NaOH of unknown concentration is titrated with 0.1000 mol dm−3 HCl. The indicator endpoint is an adequate estimate of complete neutralisation. HCl + NaOH → NaCl + H2O. Constructed readings, in cm3, are: rough initial 0.00, final 20.80; run 1 initial 0.60, final 20.65; run 2 initial 1.10, final 21.10; run 3 initial 0.30, final 21.00. Accurate titres within 0.10 cm3 are concordant. Calculate each titre, select a provisional concordant mean, explain why another accurate run is sensible, and infer the NaOH concentration. Write the net ionic equation and check charge.
<!-- /task:sample-check -->

[Retry the raw-reading selection first](#retry-readings).
<details markdown="1"><summary>Hint</summary>
The concentration being sought is now in the flask. Keep the mean delivered volume separate from the aliquot volume.
</details>
<details markdown="1"><summary>Solution and check</summary>
Titres are 20.80 (rough), 20.05, 20.00 and 20.70 cm³. Runs 1 and 2 differ by 0.05 cm³; their provisional mean is **20.025 cm³**, reported **20.03 cm³** to two decimal places. Run 3 is discordant: investigate endpoint or procedural problems and obtain another concordant result. This is a justified provisional inference, not proof of an experimental cause. Keep the unrounded mean in the calculation: acid amount is $0.1000\times0.020025=0.0020025$ mol; the 1:1 ratio gives $c(\ce{NaOH})=0.0020025/0.02500=\mathbf{0.08010\,mol\,dm^{-3}}$. The net equation $\ce{H+(aq) + OH-(aq) -> H2O(l)}$ has two H atoms, one O and zero total charge on both sides. If you used $c_1V_1=c_2V_2$ without checking the equation, compare this 1:1 case with [the carbonate example](#raw-data), then [retry](#retry-titration).
</details>
</div>

<h2 id="uncertainty-and-bias">Explain an uncertainty or bias through the calculation</h2>

Suppose a task assigns each burette reading an uncertainty of ±0.05 cm³. A titre uses **two readings**, so adding their absolute bounds gives ±0.10 cm³. For a 25.05 cm³ titre this contribution is $0.10/25.05\times100=0.40\%$. This is a stated worst-case reading contribution, not the total experimental uncertainty; pipette calibration, standard concentration and endpoint judgement can also matter. Use values and combination rules stated in the task; no single uncertainty applies to every instrument.

A **systematic bias** consistently shifts the result. In the carbonate-standard example, $c(\ce{HCl})=2c(\ce{carbonate})V_{\text{aliquot}}/V_{\text{titre}}$. Overshooting the endpoint increases the denominator, so the inferred acid concentration is too low. An air bubble initially in the burette tip that is filled during delivery also makes the recorded titre include liquid that did not reach the flask, producing the same direction. Repeating either faulty procedure can give concordant but biased results.

A **random variation** changes readings unpredictably; careful repeats and a justified mean can reduce its effect on the estimate. Greater precision or repeatability is not automatically greater accuracy. Reading at eye level reduces parallax; choosing a repeatable endpoint helps precision; fixing a leaking tap removes a cause of loss. Name the cause and explain how an improvement changes it.

<div class="lesson-check" markdown="1">
<h3 id="fault-check">Trace two different faults</h3>
<!-- task:fault-check -->
In the carbonate-standard experiment above, consider two separate faults. A: the pipette contains deionised water and is not rinsed with the carbonate solution before delivering the aliquot. The calculation still uses the stated standard concentration. B: extra deionised water is added only to the conical flask after a correct aliquot has been transferred. For each, predict the effect on the required acid titre and on the calculated acid concentration. Would three identical repeats necessarily reveal fault A? Give a targeted correction.
<!-- /task:fault-check -->
<details markdown="1"><summary>Hint</summary>
Track carbonate moles reaching the flask. Then compare those moles with what the calculation assumes.
</details>
<details markdown="1"><summary>Solution and check</summary>
In A the aliquot is diluted in the pipette, so fewer carbonate moles arrive and the titre is smaller. Using the intended carbonate amount divided by that smaller titre gives an acid concentration **too high**. Rinse the pipette with the solution it will deliver before use. Three repeats may agree if the same dilution recurs; agreement does not remove or reveal every bias. In B carbonate moles are unchanged, so the equivalence acid amount, titre and inferred concentration are **unchanged** in this idealization. The liquid is more dilute but contains the same amount to neutralise. If you treated both as identical dilution, revisit [the apparatus decisions](#apparatus-decisions), then retry the preparation and titration below.
</details>
</div>


<div class="lesson-check" markdown="1">
<h3 id="uncertainty-check">Separate a reading bound from the whole experiment</h3>
<!-- task:uncertainty-check -->
A titre is 18.40 cm3. Each burette reading has stated bound ±0.04 cm3. Add absolute bounds to estimate the titre bound and its percentage contribution. A report calls this the total uncertainty and claims concordant repeats exclude bias. Evaluate both claims. Close the answer, then retry for 12.00 cm3 with each reading ±0.03 cm3.
<!-- /task:uncertainty-check -->
<details markdown="1"><summary>Hint</summary>
A titre is a difference of two readings. List sources beyond those readings.
</details>
<details markdown="1"><summary>Solution and check</summary>
The bound is ±0.08 cm³; 0.08/18.40 × 100 = 0.43%. Using only one reading would halve the stated bound incorrectly. This omits endpoint judgement, pipette volume and standard concentration; concordance does not exclude a repeated systematic fault.
</details>
<details markdown="1"><summary>Retry solution and check</summary>
Retry: ±0.06 cm³ and 0.50%, still only the stated reading contribution. For an incorrect result, return to [the two-reading explanation](#uncertainty-and-bias), then close this answer and redo the changed values.
</details>
</div>

<h2 id="retry-preparation">Repair the preparation reasoning</h2>

Close the previous answers before each self-written retry.

<div class="lesson-check" markdown="1">
<!-- task:retry-preparation -->
0.5300 g of pure dry anhydrous Na2CO3 (M = 106.0 g mol−1) is quantitatively transferred into a 250.0 cm3 volumetric flask and made to the mark. Calculate its concentration. 25.00 cm3 is then transferred to another 250.0 cm3 volumetric flask and diluted to the mark without loss. Calculate the second concentration. Explain what would be wrong with preparing the first solution by filling the flask to the mark before adding the solid.
<!-- /task:retry-preparation -->
<details markdown="1"><summary>Hint</summary>
Use the actual mass first. During the second step only the transferred aliquot's solute amount is conserved.
</details>
<details markdown="1"><summary>Solution and check</summary>
First amount is $0.5300/106.0=0.005000$ mol, so concentration is **0.02000 $\mathrm{mol\,dm^{-3}}$**. The aliquot has $0.02000\times0.02500=0.0005000$ mol; making that to 0.2500 dm³ gives **0.002000 $\mathrm{mol\,dm^{-3}}$**. Filling before adding solid does not set the final solution volume; dissolve and quantitatively transfer first, then set the final mark. The second solution has one tenth the concentration because one tenth of the initial solution volume is diluted to the original volume.
</details>
</div>


<div class="lesson-check" markdown="1">
<h3 id="retry-readings">Select again from a new record</h3>
<!-- task:retry-readings -->
Constructed burette readings (initial, final) in cm3 are: rough (0.00, 23.90), accurate 1 (0.50, 23.85), accurate 2 (1.00, 24.40), accurate 3 (0.20, 24.10). Accurate titres within 0.10 cm3 are concordant. Calculate all titres, choose a provisional mean and justify further work. Do not infer the cause of a discordant reading from its number alone.
<!-- /task:retry-readings -->
<details markdown="1"><summary>Hint</summary>
Subtract first; only then compare accurate titres.
</details>
<details markdown="1"><summary>Solution and check</summary>
Titres are 23.90 (rough), 23.35, 23.40 and 23.90 cm³. Runs 1–2 give provisional mean 23.375 cm³, reported 23.38 cm³. Exclude rough by method. Accurate run 3 is discordant: investigate the method and obtain another concordant accurate run; its value alone does not establish the cause. If you averaged all readings or skipped subtraction, return to [raw data](#raw-data), then close this answer and explain your selection again.
</details>
</div>

<h2 id="retry-titration">Change the reaction and the unknown</h2>

<div class="lesson-check" markdown="1">
<!-- task:retry-titration -->
A 25.00 cm3 aliquot of H2SO4 of unknown concentration is completely neutralised by a concordant mean titre of 24.60 cm3 of 0.1000 mol dm−3 NaOH. Assume a suitable endpoint. Write the balanced equation with Na2SO4 and H2O as the products, then determine the acid concentration. If the delivered NaOH had been diluted by residual water in the burette but the calculation used 0.1000 mol dm−3, would the acid concentration be reported too high or too low? Explain using the changed titre and one correction.
<!-- /task:retry-titration -->
<details markdown="1"><summary>Hint</summary>
The known solution and unknown sample have changed places compared with the carbonate worked example. Derive the coefficient ratio again.
</details>
<details markdown="1"><summary>Solution and check</summary>
$\ce{H2SO4(aq) + 2NaOH(aq) -> Na2SO4(aq) + 2H2O(l)}$. NaOH amount is 0.002460 mol, so acid amount is half that, 0.001230 mol. Acid concentration is **0.04920 $\mathrm{mol\,dm^{-3}}$**. Diluted NaOH needs a larger titre to neutralise the same acid amount; calculating with the nominal concentration overestimates NaOH moles and therefore acid concentration. Rinse the burette with the NaOH solution before filling. Contrast this **too-high** result with acid-in-burette endpoint overshoot, which made a different unknown too low. The direction belongs to a stated calculation, not to a memorised list of faults.
</details>
</div>

Later use the [mixed quantitative review](/alevel/as-chemistry/quantitative-review/) without hints, and return here if you confuse an aliquot with a titre or repeatability with accuracy. [Course entrance](/alevel/as-chemistry/).

<h2 id="sources">Scope and reading</h2>

[OxfordAQA 9620 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf), 3.1.2.2, 3.1.2.5 and RP1; [official Chemistry Practical Handbook](https://www.oxfordaqa.com/oaqaresources/science/teaching/a-level-practical-handbook-chemistry-4.2.pdf), pp. 21, 28 and 44–52. The handbook's acid/base example is one possible method; it does not require these particular lesson reagents. Textbook: Lister and Renshaw (OUP, 2016), §§2.2 and 2.5, pp. 34–35, 47; Practical 1, pp. 521–522. All tasks, numerical readings and checking criteria here are self-written. Preparation, uncertainty estimates and paper exercises do not certify completed apparatus work.
