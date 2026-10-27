# Independent review: AS chemistry amount-and-equations sample

Date: 2026-10-27. Reviewer: independent Codex reviewer, separate from the author/integration work. Observed HEAD: `5864df18ec9c9a04e74cd4431365dc99c4a7a706`; branch `codex/as-chemistry-foundations`. The reviewed working files, rather than HEAD alone, are identified by fingerprints below.

## Decision

**Draft / revision required before expanding this quantitative-page pattern.** All six marked tasks and the incidental numerical examples were independently solved. No incorrect intended numerical answer, unbalanced displayed equation, incorrect limiting-reactant calculation, or material bilingual condition/answer mismatch was found. However, the claimed balancing objective has no independent task, the atom-economy check repeats an exposed answer, and percentage-error recovery lacks a matching retry. Source-version provenance also needs correction.

New linked lessons and indexes are **pending integration, not findings**, as explicitly requested. This report does not authorize expansion, publication, or a claim of student mastery. The author should fix and recheck the affected sample tasks before extending this pattern.

## Authority, scope and source verification

Read `C:/Users/mi/.codex/RTK.md`, repository `AGENTS.md`, `docs/agents/course-content-standard.md` (especially sections 1, 3-7), the formula guidelines, both complete sample lessons, and `docs/agents/implementation-as-chemistry-foundations-2026-10-27.md`. Only this review document is written; no course, integration, configuration or Git-state changes were made.

Live primary-source checks:

- The [current OxfordAQA chemistry qualification page](https://www.oxfordaqa.com/qualifications/international-as-a-level-chemistry/) links to a [9620 specification whose body identifies Version 5.3](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf), 52 PDF pages, teaching from September 2019 and AS/A-level exams from May/June 2020. Relevant content is on printed pages 13-14 (PDF pages 13-14).
- The [specification URL in the lessons](https://www.oxfordaqa.com/oaqaresources/specifications/oxfordaqa-international-as-and-a-level-chemistry-specification.pdf) still resolves to Version 4.3, 50 PDF pages; corresponding material is on printed pages 12-13. This is an older version of the same qualification, not evidence of a different qualification requiring automatic migration.
- The relevant 3.1.2 subsections agree between these versions: relative masses, mole/entity calculations, gases, empirical/molecular formulae, equations and associated calculations; RP1 covers volumetric solution preparation and titration. The sample addresses only part of that scope. Unit 1 contains 3.1.2; its use can also be drawn upon in Unit 2. Constants supplied in tasks are appropriate; recall of the Avogadro constant is not required.

This is an independent chemistry/learning-design review, not an independent verification of the scanned textbook or official question/mark-scheme transcription. All sample tasks are explicitly self-written; no official marks are claimed. Textbook page verification remains with the main agent as requested.

## Findings requiring action

### F1 - Correct the claim that the current specification is Version 4.3

Location: implementation record line 7; lesson source links at EN line 165 / ZH line 167.

The implementation record says the current qualification page points to Version 4.3. Following that page now leads to Version 5.3, while the lessons link to the older PDF. This is a reproducible provenance error, even though I found no change in the relevant 3.1.2 requirements. Record both identities and the checked equivalence, and use the current primary link or explicitly label a deliberately retained older version. Do not describe this as a discovered chemistry-scope mismatch.

Acceptance basis: AGENTS requires following the current qualification page and checking PDF identity; long-term standard section 7 requires traceable scope.

### F2 - The balancing objective is neither demonstrated step by step nor independently tested

Location: implementation record line 18; EN lines 69-81, 92-100, 110, 151 / ZH lines 71-83, 94-102, 112, 153.

The record includes balancing in this page's objectives. The lesson correctly forbids changing subscripts, but presents the water and aluminium equations already balanced. Every task needing symbolic coefficients either supplies them or is a complete worked example. The opening particle task tests atom conservation, not independently writing a balanced unfamiliar equation; the ionic equation is also supplied. A student can complete every assessed task while never choosing any coefficient.

Show one short coefficient-selection chain using atom counts, then require an unaided balance with correct reactant/product formulae supplied and a separate closed check. Include atom/charge accounting where ionic balancing is claimed; alternatively map that part explicitly to a later task without claiming this sample assesses it. This is not a demand to invent unknown product chemistry or introduce redox half-equations.

Reconstruction using only the stated prerequisites: start Al + O2 -> Al2O3; one product unit needs three O atoms, whereas oxygen arrives in pairs. Two product units need six O atoms, so use three O2 and four Al: 4Al + 3O2 -> 2Al2O3. Water similarly needs two H2O for one O2, then two H2. Those decisions are available from conservation and ratios but are not made visible in the present demonstration.

Acceptance basis: standard sections 1, 3 and 4; a core objective without a valid independent output blocks a full content pass.

### F3 - The atom-economy assessment reuses an answer visible immediately above it

Location: EN lines 130-141 / ZH lines 132-143; implementation record line 18.

The worked paragraph gives CaCO3 -> CaO + CO2, identifies CaO as desired, and explicitly gives 56.0% atom economy. `process-check` changes the batch mass but uses the same reaction and desired product. Its atom economy is therefore the already displayed 56.0%; even the general diagnosis of a yield above 100% is introduced immediately beforehand. This is useful supported application of the yield definition, but cannot alone establish independent selection of the atom-economy numerator/denominator or transfer of that distinction.

Retain the useful reported-yield anomaly, but assess atom economy with a changed desired product or reaction whose answer is not visible nearby. A coefficient other than one would also test the correctly taught coefficient weighting. Keep the worked example available as teaching; repair the assessment rather than hiding necessary instruction or accessibility text. Neutral task titles and closed answer controls are otherwise appropriate.

Acceptance basis: standard sections 1 and 4, including leakage from adjacent material. The yield calculation itself remains a valid attempt; this finding does not invalidate every part of the task.

### F4 - A percentage misconception has explanation and a return link, but no corresponding retry

Location: EN lines 141-157 / ZH lines 143-159; implementation record line 18.

For using actual recovered mass in atom economy, feedback correctly directs the student to the definitions. The only local retry then asks for limiting reactant, water mass and leftover hydrogen molecules; it contains neither an actual yield nor a desired-product allocation decision. Correctly doing that retry cannot show that a yield/atom-economy error was repaired. The particle comparison's recovery is also only partial: the retry starts in moles, so it does not recheck the original mass-to-moles comparison.

Add or map a small changed-condition retry that calls on the failed decision, with its own closed feedback and instruction to close the old answer. Prioritize the two-percentage distinction; do not count the hydrogen task as evidence for its recovery. A new mixed-review destination remains pending integration, but its eventual tasks must explicitly provide this evidence if recovery is assigned there.

Acceptance basis: standard section 5 requires retries to test the difficulty just repaired. This is a present sample task-to-feedback gap, not a finding that an unwritten linked page is broken.

## Small clarification, not an arithmetic failure

EN line 151 / ZH line 153 asks for the gas remaining "after water condenses"; the answer assumes all product water is excluded from the counted gas. Condensation alone does not guarantee a perfectly dry gas. State complete reaction and "ignore water vapour" or ask specifically for the remaining unreacted hydrogen. The intended 2.00 g / 6.02 x 10^23 result is correct under that school-level idealization; an exact total wet-gas mass/count would need additional information. No vapour-pressure calculations need to be added to this sample.

## Independent solutions: every marked task

### 1. `count-start` - EN 23 / ZH 25

From the formula prerequisites, hydrogen and oxygen molecules are H2 and O2. Initial atoms: H = 4 x 2 = 8; O = 3 x 2 = 6. Each water molecule uses two H and one O, so hydrogen permits 8/2 = 4 water molecules; oxygen permits six. Maximum: **four H2O molecules**, consuming four O atoms; **one O2 molecule remains**, no H2 remains. Final atom inventory is eight H and six O. Molecule count need not be conserved. The answer does not require the newly taught mole.

### 2. `particle-check` - EN 57 / ZH 59

M(CO2) = 12.0 + 2 x 16.0 = 44.0 g mol^-1; M(O2) = 32.0 g mol^-1. A: n = 8.80/44.0 = 0.200 mol molecules, N = 1.204 x 10^23, or **1.20 x 10^23 molecules** to three significant figures. B: n = 8.00/32.0 = 0.250 mol, N = **1.51 x 10^23 molecules** (unrounded 1.505 x 10^23). Thus **B has more molecules** despite having less mass.

Both molecules contain two oxygen atoms: A has 0.400 mol O atoms = 2.408 x 10^23 = **2.41 x 10^23**; B has 0.500 mol O atoms = **3.01 x 10^23**. B also has more oxygen atoms. The unequal molar masses explain why mass alone is insufficient. This calculation uses only the newly explained mass/amount/entity relationships and the declared formula/arithmetic prerequisites.

### 3. `worked-batch` - EN 89 / ZH 91

Balanced model: 4Al(s) + 3O2(g) -> 2Al2O3(s). Initial amounts: 5.40/27.0 = 0.200 mol Al atoms and 6.40/32.0 = 0.200 mol O2 molecules. Compare reaction extents: 0.200/4 = 0.0500 mol versus 0.200/3 = 0.066666... mol. **Al limits**; coefficients compare reacted amounts, not initial masses.

Product: 2 x 0.0500 = 0.100 mol Al2O3 formula units. M = 2 x 27.0 + 3 x 16.0 = 102.0 g mol^-1, so **10.2 g Al2O3**. Remaining Al: **0 g**. O2 consumed: 3 x 0.0500 = 0.150 mol; remaining: 0.0500 mol = **1.60 g O2**. Mass check: 5.40 + 6.40 = 10.2 + 1.60 = 11.8 g. The single-product/completion assumptions are explicit; actual recovery need not reach this bound. Al2O3 is not treated as discrete molecules.

### 4. `batch-check` - EN 110 / ZH 112

Al = 10.8/27.0 = 0.400 mol; O2 = 6.40/32.0 = 0.200 mol. Extent limits are 0.100 mol and 0.066666... mol, respectively: **O2 now limits**. Product = (2/3) x 0.200 = 0.133333... mol x 102.0 = **13.6 g Al2O3**. Al used = (4/3) x 0.200 = 0.266666... mol; remaining = 0.133333... mol x 27.0 = **3.60 g Al**. O2 remaining: **0 g**. Check: 17.2 g initially and 17.2 g finally.

Doubling Al does not double product: twice the old 10.2 g would be 20.4 g, requiring 0.300 mol O2, but only 0.200 mol is supplied. This is a meaningful condition change, not merely a number substitution: the limiting identity switches. Keep full precision until the final mass.

### 5. `process-check` - EN 135 / ZH 137

CaCO3(s) -> CaO(s) + CO2(g); Ca/C/O atom counts and total charge balance. M(CaCO3) = 100.0, M(CaO) = 56.0, M(CO2) = 44.0 g mol^-1. Initial carbonate = 10.0/100.0 = 0.100 mol, giving a maximum **5.60 g CaO** and 4.40 g CO2. Reported yield under the stated purity assumption: 5.88/5.60 x 100% = **105%**. Desired-product atom economy: 56.0/100.0 x 100% = **56.0%**, unaffected by collected mass or yield.

The claim is false: recovered mass is not stoichiometric allocation. A physically consistent explanation is residual carbonate from incomplete decomposition. For example, 0.0063636... mol unreacted carbonate and 0.0936363... mol CaO would weigh 5.88 g, with 4.12 g CO2 lost; total mass remains 10.0 g. The textbook-independent mass balance demonstrates that this explanation is possible, not evidence that it actually occurred. Water uptake after cooling is another possible external addition; it means the recovered material is not solely pure CaO. The explanation does not require asserting an observed experiment or that repetition removes systematic bias.

### 6. `retry-amount` - EN 151 / ZH 153

2H2 + O2 -> 2H2O. Extent limits: 3.00/2 = 1.50 mol and 1.00/1 = 1.00 mol, so **oxygen limits**. It consumes 2.00 mol H2 and produces 2.00 mol H2O. With M(H2O) = 18.0 g mol^-1, maximum water = **36.0 g**. Remaining hydrogen = 3.00 - 2.00 = 1.00 mol, hence **2.00 g** and **6.02 x 10^23 H2 molecules**. No O2 remains. Check: initial 3.00 x 2.0 + 1.00 x 32.0 = 38.0 g; final 36.0 + 2.00 = 38.0 g.

An independent English explanation can be: "One mole of oxygen consumes two moles of hydrogen. Oxygen is exhausted first, leaving one mole of hydrogen. The remaining molecules are hydrogen, not the water removed from the gas." Numerical gas totals assume exclusion of water vapour as noted above. This retry changes substance, input representation and requested entity count; it is useful stoichiometric transfer, but is not a mixed-method or percentage-recovery task.

## Definitions, equations and incidental explanations reconstructed

- From M = m/n, rearrange to n = m/M; g divided by g mol^-1 gives mol. In kilograms the molar mass must be in kg mol^-1 (CO2: 0.0440 kg mol^-1). N = n NA counts the named entities; N has no unit, n is in mol and NA in mol^-1. The given approximation 6.02 x 10^23 is suitable for these answers.
- A 0.200 mol CO2 sample contains 0.200 mol C atoms and 0.400 mol O atoms. A 4.40 g sample gives 0.100 mol molecules, 6.02 x 10^22 molecules and 1.204 x 10^23 O atoms. Formula subscripts multiply atoms within an entity; reaction coefficients compare entities/amounts across substances.
- Ar is a dimensionless weighted mean relative to one twelfth of the carbon-12 atom mass; Mr is the corresponding molecular comparison. Relative formula mass is appropriate for ionic solids. The Ca(OH)2 example gives 40.0 + 2(16.0 + 1.0) = **74.0**, dimensionless; molar mass would be 74.0 g mol^-1. Neither language calls the ionic lattice a collection of Ca(OH)2 molecules. Isotope-abundance calculation is not needed for the stated tasks.
- The balanced water equation gives 2 mol H2 + 1 mol O2 -> 2 mol H2O: masses **4.0 + 32.0 = 36.0 g**. H+(aq) + OH-(aq) -> H2O(l) conserves two H atoms, one O atom and zero net charge. State symbols are explained; these examples do not establish independent ionic-equation writing.
- For any positive reaction extent x, reacted amounts are ax and bx; hence n(A) reacted/a = n(B) reacted/b. Each initial inventory imposes x <= n(initial)/coefficient. Taking the smallest bound explains limiting-reactant selection without requiring formal extent-of-reaction theory as an extra prerequisite. The worked examples implement this correctly. If inventories exactly match, both can be exhausted; the prose's "other is in excess" describes the non-matching cases used here, not a universal rule.
- For atom economy, each stoichiometric amount contributes coefficient x molar mass to the reactant total; the corresponding desired-product contribution is divided by that total. Equal total stoichiometric product mass is an equivalent denominator by atom/mass conservation. Actual excess feed and actual collected product do not belong in this ratio. The inline CaCO3 example correctly gives **56.0% atom economy**, theoretical **56.0 g CaO per 100.0 g carbonate**, and **90.0% yield** for 50.4 g pure product. The caveat that neither percentage measures all energy or safety impacts is sound.

The particle-to-mole scaling, unit cancellation, limiting comparison and leftover mass checks can be reconstructed from the declared prerequisites plus instruction on the page. The main missing observable learning action is coefficient selection (F2), not an undisclosed advanced chemistry prerequisite.

## Bilingual support, independence and coverage

All six marked English task texts are exactly equal between the two files, including values, assumptions, command words, constants and demand for an unscripted English explanation. Manual comparison found matching answers, atom/mass accounting, purity assumptions and return links. All five student-task hint/answer pairs are separate and closed in source in both languages; the complete worked example is intentionally visible. Existing anchor sets and local fragment links agree and resolve in source. No hidden answer in a title or alternative text was found; F3 concerns the exposed adjacent example, not a broken disclosure control.

The Chinese `reaction-ratios` paragraph explicitly names the limiting reactant; the English version explains the same selection but first names "limiting" in the worked example. Adding the English term at its definition would improve vocabulary alignment, but it is not a material difference in available reasoning. Both versions give the same hints, no sentence template, and the same limited recovery evidence.

Relative mass definitions, ionic entities/equations, atom-economy advantages and coefficient weighting are explained or mentioned but not all independently assessed here. Do not infer full 3.1.2 attainment from the six tasks. Gases, formula deduction, solution calculations, full practical decisions, and delayed mixed-method review belong to the planned other lessons; their absence here is not a sample defect. The design table should map their eventual evidence precisely, including economic/ethical/environmental reasoning if claiming complete 3.1.2 coverage.

## Four content-acceptance axes and separate statuses

| Acceptance axis | Status for the fingerprinted sample | Evidence / remaining condition |
| --- | --- | --- |
| 1. Scope and subject correctness | **Calculations/definitions pass; provenance revision required** | Relevant 9620 AS content is appropriate and all intended answers reconcile. Fix F1; clarify the dry-gas idealization. No complete-AS or full-3.1.2 claim is supported. |
| 2. Reconstructible from declared prerequisites | **Mostly satisfied; balancing demonstration needs completion** | Formula reading, conservation and proportional arithmetic suffice for the reconstructed chains above. Show coefficient selection as in F2 rather than relying only on finished equations. No new advanced prerequisite is needed. |
| 3. Independent tasks assess targets; usable feedback | **Revision required; expansion gate not passed** | Particle counts and the limiting-reactant switch provide genuine output; separate closed hints are suitable. F2-F4 leave balancing, independent atom-economy evidence and percentage recovery incomplete. |
| 4. Findable course route and later review | **Pending integration, not a finding** | Local repair anchors work in source; named next lessons and mixed review are planned and localized. Actual entry/index routes, delayed task availability and return paths need verification after the main agent writes them. No pass claimed in advance. |

Content status: **draft / needs revision**. Independent review has occurred, but the sample has not passed the expansion gate. Technical status: **not assessed beyond source checks**. Student status: **not trialled**; no learning-effect claim. Publishing/integration status: **pending main-agent work**.

## Verification and limits

Independently reasoned through every task and incidental example, then used an in-memory Node assert check to confirm all principal numerical results, six-task bilingual text parity, ten closed disclosure blocks per language, unique anchors and existing local fragment targets. No reusable test script or other artifact was added. These checks corroborate arithmetic/structure; they do not establish independent student learning.

No Jekyll build, generated-HTML inspection, MathJax/browser execution, desktop/mobile reading, keyboard interaction, textbook-page verification, official paper/mark-scheme reading, real experiment or student trial was performed. Building would write additional files and is outside this report-only assignment. Textbook verification and integration are explicitly reserved to the main agent. The official scope check used the PDF text; this is not a PDF visual-layout acceptance claim.

Fingerprints (SHA-256) were read twice during the review and unchanged. Recheck modified tasks/feedback before reusing this decision after concurrent author work.

| Reviewed file | SHA-256 |
| --- | --- |
| `alevel/as-chemistry/amount-and-equations.md` | `08F74B5B27210B1AA8220C974CCAA90EA00C0A0ED1897C5D6170CA2C77A0B1B0` |
| `zh/alevel/as-chemistry/amount-and-equations.md` | `F7B9EDE0FEFCB2D5C5748CB698180E5C0308E857A6D02423C29E69CE58039EBC` |
| `docs/agents/implementation-as-chemistry-foundations-2026-10-27.md` | `4157BBE4405EC80DF28DDC3CD0ACB4B9F63C64145A0AC93A645A6F5CBDAA6785` |

## Recheck 1 - 2026-10-27, revised eight-task sample

This append records a new decision for the revised fingerprints below; the initial review above remains a historical record. Re-read both complete lessons and the implementation record, independently reconstructed the new/replaced tasks, and repeated source parity, disclosures, anchors and arithmetic checks. No course files were edited. Observed HEAD remains `5864df18ec9c9a04e74cd4431365dc99c4a7a706`.

### Decision and new finding

**One remaining correctness/bilingual-feedback blocker: R1 below. Same-pattern expansion is not yet cleared for this exact snapshot.** The three new/replaced task calculations are correct, and the original assessment/provenance defects have been substantively repaired. Once R1 is corrected and verified, I see no other content blocker to reusing this pattern for comparable AS quantitative learning pages, subject to each page's own scope and task checks. This is a stated repair condition, not an unconditional or automatically effective pass. Technical acceptance, course-route acceptance and student evidence remain separate.

**R1 - The Chinese magnesium task diagnoses unreacted calcium carbonate.** At `zh/alevel/as-chemistry/amount-and-equations.md:156`, `process-check` now correctly uses pure MgCO3, MgO and CO2, but its feedback still says "残留未反应的碳酸钙". Calcium carbonate is not the unreacted starting solid in the stated system: no calcium was supplied. The explanation should identify residual **碳酸镁 / MgCO3**, or use the equivalent unambiguous generic "未反应的碳酸盐". English correctly says "Unreacted carbonate". This is a small edit but a real subject/translation error in corrective feedback, not a rounding disagreement. Recheck that sentence in context after the author changes it. No course edit was made by this reviewer.

### Original finding dispositions

| Original finding | Recheck result |
| --- | --- |
| F1: old specification provenance | **Resolved.** Both lesson links now use the Version 5.3 URL verified earlier in this review. The implementation record identifies the current download, distinguishes the older 4.3 URL and confines equivalence to 3.1.2/RP1. No new whole-qualification equivalence claim is inferred. This recheck did not redownload the same PDFs. |
| F2: no independent coefficient selection | **Core assessment gap resolved.** `equation-check` now requires the student to choose coefficients, supply states, count atoms and reject a changed formula. The answer is not in adjacent teaching. A full narrated balancing example is still brief/absent, but I could reconstruct this task from the expressly declared formula, ratio and atom-conservation prerequisites without new chemistry; the original missing-independent-output blocker no longer applies. Further narration would help some readers but is not a separate remaining blocker for this sample. Independent ionic-equation writing remains unproved, as before. |
| F3: exposed atom-economy answer | **Resolved for the sample objective.** MgCO3 changes the denominator from 100.0 to 84.3 and the answer from 56.0% to 47.8%; students cannot copy the preceding calcium answer. The ethanol retry further changes the chemical context and tests collection versus stoichiometry. These are still near/guided-context tasks, not proof of delayed mixed-method transfer. |
| F4: no matching percentage retry | **Resolved for percentage recovery.** `process-check` explicitly links to `retry-process`, which uses new substances and asks which percentage changes when collection improves. Its waste/limitation explanation also supplies observable evaluative output. The earlier observation that the hydrogen retry does not repeat a mass-to-moles sample comparison remains an evidence limit; do not label that retry proof of every particle-comparison skill. |

The implementation objective row still lists the earlier task names without `equation-check` / `retry-process`, although the following revision narrative explicitly locates both additions. The evidence is findable; synchronize that row when maintaining the record, without treating this bookkeeping lag as another content blocker.

### Independent solution A - `equation-check` (EN 86 / ZH 88)

Start with the supplied formulae Al + HCl -> AlCl3 + H2. If one AlCl3 unit is made, three HCl supply its three chlorine atoms; those three hydrogen atoms require 1.5 H2 molecules in the proportional equation. Multiply all four coefficients by two to obtain the smallest whole-number set:

**2Al(s) + 6HCl(aq) -> 2AlCl3(aq) + 3H2(g).**

Inventory: Al 2 = 2, Cl 6 = 6, H 6 = 6; the coefficient set has no common factor greater than one. The question gives the aqueous acid, aqueous salt and hydrogen gas; aluminium is the solid metal. AlCl2 would represent a different specified composition and cannot replace AlCl3 to avoid choosing coefficients. The full equation is electrically neutral on both sides; no unstated net-ionic dissociation or redox-half-equation knowledge is needed. Both solutions are correct. The closed hint suggests a common atom total without revealing the coefficients.

### Independent solution B - replacement `process-check` (EN 148 / ZH 150)

Conservation with the specified products gives **MgCO3(s) -> MgO(s) + CO2(g)**, ratio 1:1:1. Molar masses are 24.3 + 12.0 + 3(16.0) = **84.3 g mol^-1**, **40.3 g mol^-1** and **44.0 g mol^-1**. Initial carbonate amount = 8.43/84.3 = **0.100 mol**. Maximum pure MgO = 0.100 x 40.3 = **4.03 g**; theoretical CO2 = 4.40 g, checking 4.03 + 4.40 = 8.43 g.

Reported yield = 4.23/4.03 x 100% = **104.962779...%**, hence **105%** to three significant figures. Atom economy = 40.3/84.3 x 100% = **47.8054567...%**, hence **47.8%**. The 4.23 g recovered mass is not an atom-economy numerator: it is conditional experimental/reported evidence, not the stoichiometric mass allocation. Improved collection or apparent yield does not change the balanced equation's atom economy.

A physically possible explanation is residual MgCO3: if r mol is unreacted, solid mass = (0.100-r)40.3 + 84.3r = 4.03 + 44.0r. Setting this to 4.23 gives r = **0.00454545... mol**, a positive amount smaller than the initial 0.100 mol. CO2 loss is then (0.100-r)44.0 = **4.20 g**, so 4.23 + 4.20 = 8.43 g. This independently validates the residual-carbonate explanation, while showing why the Chinese calcium attribution in R1 is wrong. Water uptake after cooling is another possible cause of added recovered mass; it would invalidate the assumed dry pure MgO composition. No evidence establishes which cause actually occurred.

### Independent solution C - `retry-process` (EN 177 / ZH 179)

C2H5OH -> C2H4 + H2O is already balanced: each side has C2, H6 and O1. M(ethanol) = 2(12.0) + 6(1.0) + 16.0 = **46.0 g mol^-1**; M(ethene) = **28.0 g mol^-1**; M(water) = **18.0 g mol^-1**. The 46.0 g ethanol batch is **1.00 mol** and can theoretically make 1.00 mol ethene, **28.0 g**. Stoichiometric mass check: 28.0 + 18.0 = 46.0 g.

Initial yield = 22.4/28.0 x 100% = **80.0%**. Atom economy for desired ethene = 28.0/46.0 x 100% = **60.869565...% = 60.9%**. The extra 2.80 g raises actual recovery to **25.2 g**, so yield becomes 25.2/28.0 x 100% = **90.0%**. Atom economy remains **60.9%**, because neither equation nor desired product changes. Both languages' solutions agree with this independent chain.

An acceptable advantage is that, for a given mass of desired product and other things being comparable, a larger desired-product fraction can mean less stoichiometric by-product waste and less reactant mass diverted to it. This follows from the taught fraction and mass conservation; it needs no new organic mechanism. A limitation is that this percentage does not measure actual conversion/collection, energy requirements or toxicity. A lower raw-material cost is possible, not guaranteed by atom economy alone: prices and actual process performance still matter. The answer's "can" appropriately limits the cost claim. No operating conditions or experimental validation of ethanol dehydration are claimed by this stoichiometric task.

### Unchanged tasks, bilingual help and independence

Re-read the other five marked tasks and their feedback; their original results remain valid: four water molecules and one O2 remaining; particle-sample oxygen counts 2.41 x 10^23 and 3.01 x 10^23; the worked batch 10.2 g product / 1.60 g O2 remaining; the changed batch 13.6 g product / 3.60 g Al remaining; and the hydrogen retry 36.0 g water / 2.00 g H2 / 6.02 x 10^23 remaining H2 molecules. The earlier non-blocking request to specify ignoring water vapour is still outstanding.

All **eight task texts are identical between languages**. Manual comparison of the added/changed hints and feedback found the one substantive mismatch R1, with matching numerical answers and constants otherwise. There are now seven separate hint/answer pairs per language, fourteen `details` elements, all closed in source. The full demonstration remains intentionally visible. Titles do not identify the answer. Local fragment targets remain valid. Reading the optional hint must still be recorded as assisted performance.

### Four acceptance axes after recheck

| Axis | Revised status | Basis / remaining work |
| --- | --- | --- |
| 1. Scope and subject correctness | **Numerical/scope checks pass; one feedback correction required** | Current provenance is repaired; all eight intended task answers are correct. R1 names the wrong carbonate in Chinese. No full 3.1.2 or complete-AS attainment claim is supported. |
| 2. Reconstructible from stated prerequisites | **Pass for this sample's reasoning** | New coefficient selection and percentage chains above use supplied formulae, atom conservation, ratios and definitions already taught. More balancing narration and an explicit dry-gas convention remain useful refinements, not additional advanced prerequisites. |
| 3. Independent targets and feedback/retry | **Assessment design repaired; feedback pass withheld only for R1** | A genuine coefficient-selection task, non-copied atom-economy calculation and matching new-context percentage retry now exist. Correct R1 so corrective feedback is chemically sound in both languages. Delayed/mixed transfer is still unverified. |
| 4. Course route and later review | **Pending integration, not a finding** | Local recovery anchors exist; entry/index routes, follow-on lessons and delayed review remain with the main agent. No new missing-link finding is raised. |

Overall at these fingerprints: **draft / one correction awaiting verification**; **same-pattern expansion not yet cleared**. Technical/rendered acceptance: **pending the main agent's checks, not assessed here**. Textbook verification: **pending the main agent**. Student trial: **not performed**. No build, course edit, commit or publication was performed by this reviewer.

### Recheck fingerprints

| Reviewed file | SHA-256 |
| --- | --- |
| `alevel/as-chemistry/amount-and-equations.md` | `1FF3108BD1677E76F3FA15951F482FFD47D9EC44CF27CE800EE9C9C761804C02` |
| `zh/alevel/as-chemistry/amount-and-equations.md` | `B5C116CA0C5515C1D135D086EC760564BF3CB670BD2C352753901EBA00FC1F41` |
| `docs/agents/implementation-as-chemistry-foundations-2026-10-27.md` | `1498DC060F006A7770FAB6F94A577E1F5FB29C4212C60FDD552A08228F67FBF3` |

An in-memory Node assert check independently confirmed the Al/H/Cl inventory, magnesium theoretical mass and both percentages, an attainable residual-carbonate mass balance, ethanol/ethene yields and atom economy, eight-task text parity, closed disclosure controls and local anchors. No test script was saved. As before, this is source/content evidence, not rendered-page or student-learning evidence.

## Recheck 2 - 2026-10-27, balancing narration and mass-input retry

Re-read the current bilingual lessons and implementation record following the additional author repairs. This append supersedes the earlier comments that coefficient-selection narration, mass-to-moles recovery and an explicit water-vapour convention are missing. It does not silently close R1 from Recheck 1.

### Additional repairs independently verified

**Coefficient selection is now narrated before independent assessment.** EN line 69 / ZH line 71 begins with the supplied skeleton H2 + O2 -> H2O, keeps one O2, chooses two H2O to conserve its two oxygen atoms, then chooses two H2 for the resulting four hydrogen atoms. Each side therefore has four H and two O atoms; 2:1:2 is the smallest positive whole-number ratio. Both explanations give the same choices and checks, using only formula reading and atom conservation. This closes the remaining narration suggestion under F2 as well as retaining the independent Al/HCl task. It does not reveal that task's 2:6:2:3 coefficients.

**The amount retry now requires mass-to-moles conversion.** EN line 164 / ZH line 166 gives 6.00 g H2 and 32.0 g O2 rather than supplying their amounts. Independently:

1. M(H2) = 2(1.0) = 2.0 g mol^-1; n(H2) = 6.00/2.0 = **3.00 mol**. M(O2) = 2(16.0) = 32.0 g mol^-1; n(O2) = 32.0/32.0 = **1.00 mol**. Grams alone would give the wrong basis for the comparison.
2. The reaction-extent limits are 3.00/2 = 1.50 mol and 1.00/1 = 1.00 mol, so **oxygen is limiting**. It consumes 2.00 mol H2, produces 2.00 mol H2O, and leaves 1.00 mol H2.
3. M(H2O) = 18.0 g mol^-1, hence maximum water mass is **36.0 g**. Remaining hydrogen is **2.00 g**, comprising **6.02 x 10^23 molecules**. No oxygen remains at the theoretical completion point. Total mass checks: 6.00 + 32.0 = 36.0 + 2.00 = **38.0 g**.

EN line 170 / ZH line 172 explicitly supplies the two initial conversions in the closed answer, not ahead of the attempt. This makes the mass/amount decision part of the retry and gives the particle task's existing return link a meaningful recovery task. It still does not separately repeat a two-sample oxygen-atom comparison, and should not be described as proof of every possible entity-count variation. That is an assessment-boundary statement, not another repair requirement.

**Water-vapour convention is explicit in both identical task texts.** The added sentence "Ignore water vapour in the remaining gas" makes the requested remaining-gas mass and count refer to hydrogen alone under the model. The previous wet-gas ambiguity is resolved; no extra vapour-pressure knowledge is required.

### Remaining finding and verdict

**R1 remains present and is the sole content blocker observed in this snapshot.** ZH line 156 still attributes the excessive recovered mass in the pure MgCO3/MgO task to "残留未反应的碳酸钙". The required identity is **碳酸镁 / MgCO3**, or an unambiguous generic reference to the unreacted carbonate. I checked the actual current sentence rather than inferring closure from the other repairs. The English sentence remains chemically valid. The MgO calculations and ethanol retry retain the correct values independently solved in Recheck 1.

**Verdict: do not expand yet.** The added repairs pass; same-pattern expansion remains withheld only until the author corrects R1 and the corrected source is verified. No new issue was found in the revised balancing or mass-input tasks. No course files were edited by this reviewer.

### Four axes at this version

| Acceptance axis | Current verdict | Evidence / boundary |
| --- | --- | --- |
| 1. Scope and subject correctness | **One correction still required: R1** | Scope/provenance and all intended calculations remain sound; the incorrect Chinese carbonate identity is still in feedback. |
| 2. Reconstructible from stated prerequisites | **Pass for this sample** | The new narration explicitly justifies coefficient choices. The retry shows mass-to-amount, reacted amount, remaining species, mass and entity-count steps; the gas idealization is stated. |
| 3. Independent tasks and feedback/retry | **Task design passes; bilingual-feedback pass pending R1** | Independent coefficient selection, the non-exposed Mg denominator, percentage recovery and mass-to-moles recovery are present. All eight task texts match; hints and answers remain closed in source. |
| 4. Course route and later review | **Pending integration, not a finding** | Source-local repair anchors exist; complete indexes, next lessons and delayed/mixed review remain for the main agent to integrate and verify. |

Technical/rendered acceptance remains **pending the main agent**, not inherited from this content recheck. Textbook verification remains with the main agent; student trial remains **not performed**. This verdict does not change or pre-empt those statuses.

### Recheck 2 fingerprints and checks

| Reviewed file | SHA-256 |
| --- | --- |
| `alevel/as-chemistry/amount-and-equations.md` | `4094A06CDC514240800A988778F5834F739138D8E56EED9497270D766BA7619D` |
| `zh/alevel/as-chemistry/amount-and-equations.md` | `A7FFFC16173906F195B4845ECDFA9ABBED9842427D435F2F80202BD9075C729B` |
| `docs/agents/implementation-as-chemistry-foundations-2026-10-27.md` | `1498DC060F006A7770FAB6F94A577E1F5FB29C4212C60FDD552A08228F67FBF3` |

The independent numerical chain was corroborated with an in-memory assert check; eight-task bilingual parity, seven closed hint/answer pairs per language, unique anchors and valid local fragment links were checked again. The scan also confirmed the exact residual-calcium wording in R1. Only this report was written; no build, saved test script, course edit or commit was performed.

## Recheck 3 - 2026-10-27, final sample-pattern verdict

**No remaining content blockers found at the fingerprints below. The independent content gate for reusing this sample's quantitative teaching pattern is passed: same-pattern expansion to comparable AS quantitative pages is explicitly allowed.** This supersedes the expansion holds in the initial review and Rechecks 1-2. It is not a declaration that the integrated course, every part of 3.1.2, practical-learning types or student learning outcomes have passed. Each expanded page still needs its own scope, scientific correctness, independent tasks and feedback checked. Course-route integration remains pending as requested.

### Exact correction and added teaching verified

Read the current `process-check` answer in context. At `zh/alevel/as-chemistry/amount-and-equations.md:158`, the sentence now reads: **“残留未反应的碳酸镁，或冷却后吸收水，都可能使固体偏重。”** This correctly identifies the supplied MgCO3 as the possible unreacted solid. It matches the English explanation at line 156, “Unreacted carbonate or uptake of water after cooling could make the recovered solid too heavy.” **R1 is closed on the actual source, not on an author's claim alone.**

The added visible mainline paragraph at EN line 145 / ZH line 147 gives equivalent conditional explanations: for comparable routes to the same product, a greater fraction of stoichiometric reactant mass in the desired product can reduce by-product waste and purchased feed mass, potentially reducing disposal cost and waste-exposure opportunities. Both explicitly condition those advantages on real substances/processes and acknowledge that toxic reagents or high heating requirements can outweigh them. This is scientifically sound and now explicitly teaches the basis for the retry's advantage/limitation response. It does not claim guaranteed low cost, low toxicity or a complete environmental assessment. The generic evaluative response is supported explanation, not evidence of far transfer or a full process comparison.

No unchanged item was solved again in this narrow closure check. Instead, an in-memory comparison removed exactly the new paragraph in each language and restored the old Chinese carbonate word solely in temporary strings. Both resulting SHA-256 values exactly matched the Recheck 2 source fingerprints. This establishes that the current lesson changes are confined to these two repairs; all previously reviewed tasks, numerical solutions, balancing narration, mass-input retry, vapour condition and disclosure markup are unchanged. All eight current task texts were also compared and remain identical between languages. The established independent solution evidence therefore carries forward without repeating it.

### Four acceptance axes and evidence status

| Acceptance axis | Final sample verdict | Evidence / limit |
| --- | --- | --- |
| 1. Scope and subject correctness | **Pass for the reviewed sample** | F1 and R1 are resolved; prior independent equation, quantity, entity, unit and numerical checks remain applicable. No outstanding chemistry or bilingual-condition finding. |
| 2. Reconstructible from declared prerequisites | **Pass for the reviewed sample** | Explicit coefficient-selection narration, supplied formulae, worked conversions and the new conditional evaluation explanation support the required reasoning without new unstated chemistry. |
| 3. Independent targets, feedback and retry | **Pass for this quantitative sample pattern** | Independent balancing, a changed atom-economy denominator, mass-to-moles recovery and a matching percentage retry are present; corrected feedback is now consistent in both languages. This does not assert delayed retention or mixed-method mastery. |
| 4. Course route and later review | **Pending integration, not a finding** | Preserve the local recovery paths; verify the eventual indexes, next lessons, delayed/mixed tasks and return routes after integration. No overall route pass is claimed now. |

**Expansion decision: allowed for the same quantitative pattern; integrated-course acceptance remains pending.** There is no remaining sample-content correction that must precede that expansion. Experimental/titration activity design still requires the separately planned review and is not automatically accepted by this decision.

Technical evidence: the user/main agent reports a successful sample build and four bilingual desktop/mobile browser routes passing. This is recorded as **reported main-agent evidence**, not as checks independently executed or inspected by this reviewer. The implementation record still shows the earlier pending technical state; its eventual acceptance update belongs to the main agent. Textbook verification remains with the main agent; no student trial or learning-effect claim is introduced. No integration or publication was performed here.

### Final reviewed snapshot

Observed HEAD: `5864df18ec9c9a04e74cd4431365dc99c4a7a706`. Working-file fingerprints, rather than unchanged HEAD alone, identify the accepted sample:

| Reviewed file | SHA-256 |
| --- | --- |
| `alevel/as-chemistry/amount-and-equations.md` | `59181C02C4C25DC149ECCBF8F0DEA5BCCF39E4FFC2C57C3DB57D01B8F9BC7725` |
| `zh/alevel/as-chemistry/amount-and-equations.md` | `27083C627BC627151DE6172AFE496A8E0725A62243875C0B0B37F62992716E58` |
| `docs/agents/implementation-as-chemistry-foundations-2026-10-27.md` | `1498DC060F006A7770FAB6F94A577E1F5FB29C4212C60FDD552A08228F67FBF3` |

Only this review file was appended. No course changes, saved scripts, build, browser run, Git-state change or commit were made by this reviewer in the closure check.

## Independent formula/gas review - 2026-10-27

Scope: the complete current `alevel/as-chemistry/formulae-and-gases.md` and its Chinese counterpart, under the same AGENTS and course-content-standard requirements used above. Read the current implementation record and relevant linked recovery destinations. No textbook scan was reopened; textbook verification remains the main agent's responsibility. The 9620 Version 5.3 scope identity and 3.1.2.3-4 requirements were independently verified earlier in this report, not redownloaded for this bounded review.

**Verdict: one minor constructed-data precision correction required (FG1); otherwise the chemistry, six intended answers, gas-model reasoning and bilingual help pass this bounded content review.** This does not revoke the accepted teaching pattern. It does prevent calling this exact page's data/roundoff fully checked without qualifying the discrepancy. No defect involving the old Mr = 152 draft is reported: the actual current retry says **Mr = 76.0** and correctly gives **N2O3**.

### FG1 - Hydrogen percentage is not the rounded value of the proposed formula

Locations: EN `composition-check`, lines 51 and 57; ZH lines 53 and 59.

Using the atomic masses provided, both C2H4O and C4H8O2 give H percentage 4/44 x 100 = 8/88 x 100 = **9.090909...%**, which rounds to **9.09%**, not the printed **9.10%**. The carbon fraction, 54.54545...%, and oxygen fraction, 36.36363...%, do round to the other displayed one-decimal values. Thus the near-integer inference is sensible, but the answer's unqualified claim that C2H4O "fits the percentages" overstates consistency at the particular printed hydrogen precision. Rounding to two decimal places alone gives a 9.10% interval starting at 9.095%; the calculated 9.090909...% is outside it. No additional experimental uncertainty is specified.

This is a small numerical-data/precision issue, not a wrong molecular formula or a reason to invent another compound. A minimal repair is to use **9.1%** in both task texts, at a precision that covers the intended composition, and keep the corresponding working/precision consistent. Alternatively use 9.09% and update the missing-oxygen calculation and intermediate values accordingly. Do not silently appeal to an unspecified large measurement error. The page explicitly teaches when rounding supports a model, so its constructed check should exemplify that distinction. Both languages currently share this defect; it is not a translation mismatch.

### Independent solutions: all six marked tasks

1. **`worked-formula` (EN 30 / ZH 32).** On a 100 g basis, atom amounts C = 40.0/12.0 = 3.333333... mol, H = 6.67/1.0 = 6.67 mol, O = 53.3/16.0 = 3.33125 mol. Dividing by the smallest gives **1.000625... : 2.002251... : 1**, consistent with 1:2:1 at the displayed precision. Empirical formula **CH2O**, empirical-unit relative mass 30.0; k = 60.0/30.0 = 2, molecular formula **C2H4O2**. Back-calculated C/H/O percentages are 40.0%, 6.66666...% and 53.33333...%, which round as given (their printed total 99.97% is an ordinary rounding consequence). Neither empirical nor molecular formula specifies connectivity; structure is not established. Every table value and the multiplier explanation check out.

2. **`composition-check` (EN 51 / ZH 53).** By the printed numbers, oxygen = 100 - 54.5 - 9.10 = **36.4%**. A 100 g basis gives C = 4.541666... mol, H = 9.10 mol and O = 2.275 mol. Dividing by 2.275 gives **1.996336... : 4 : 1**, motivating empirical formula **C2H4O**, empirical-unit relative mass 44.0. The proposed molecular formula has Mr = 44.0, so it contradicts the independent Mr = 88.0. Taking k = 88.0/44.0 = 2 yields intended molecular formula **C4H8O2**. The composition ratio supports this inference approximately; its literal hydrogen-roundoff claim requires FG1's repair. This distinguishes mass percentages from molecular size rather than treating either as a structural identification.

3. **`worked-gas` (EN 80 / ZH 82).** p = 100 kPa = **100000 Pa**, V = 249 cm3 = **249 x 10^-6 m3**, T = **300 K**. n = pV/(RT) = 24.9/2493 = **0.009987966305... mol**. M = 0.440/n = **44.053012... g mol^-1**, hence **44.1 g mol^-1** to three significant figures. This is consistent with a 44.0 g mol^-1 gas under the stated ideal approximation/rounded measurements, not proof of CO2 identity. Independently reversing the hypothesis: 0.440/44.0 = 0.0100 mol CO2 predicts **249.3 cm3**, which rounds to the supplied 249 cm3. There is no requirement that a rounded-input estimate reproduce exactly 44.0.

4. **`gas-check` (EN 95 / ZH 97).** Same p,V,T gives n = 0.009987966305... mol. With mass 0.420 g, M = **42.050602... g mol^-1 = 42.1 g mol^-1**. The CH2 empirical unit has relative mass 14.0; k = 3.003614... is consistent with integer **3**, yielding **C3H6**. Its structure is still unspecified. At fixed p and T, the ideal equation fixes V/n; doubling V for the same pure substance requires **double n and double m**, here **0.840 g**, while molecular mass and formula stay unchanged. A sealed fixed-mass sample of that substance cannot double V while keeping p and T unchanged in this model. The question and solution clearly distinguish adding more sample from enlarging individual molecules.

5. **`retry-formula` (EN 111 / ZH 113): actual Mr = 76.0.** N atoms: 28.0/14.0 = **2.00 mol**; O atoms: 48.0/16.0 = **3.00 mol**. The reduced atom ratio is **2:3**, so empirical formula **N2O3**, relative unit mass **76.0**. k = 76.0/76.0 = **1**, and molecular formula is also **N2O3**. Dividing the amounts by two gives 1:1.5; both entries must then be multiplied by two to preserve the ratio. Rounding only the 1.5 to 2 gives NO2 and mass ratio **14:32** (equivalently 28:64), inconsistent with the supplied **28:48**. N2O3 reproduces 28:48 exactly. No gas state or stability at 300 K is asserted for this compound: do not import the separate gas example's conditions into this composition task. The prior Mr = 152 draft plays no part in this review.

6. **`retry-gas` (EN 125 / ZH 127).** For 250 cm3, pV = 25.0 Pa m3; n = 25.0/2493 = **0.010028078620... mol**, M = 0.580/n = **57.8376 g mol^-1 = 57.8 g mol^-1**. If the true volume is revised to 500 cm3 with the same p,T,m, inferred n doubles and M halves: **28.9188 g mol^-1 = 28.9 g mol^-1**. These are alternative data interpretations, not two allowed states of one unchanged fixed-mass pure gas at the same p,T. Separately, if only a fraction f of the original pure gas is collected (0 < f < 1) while the calculation still uses the full original mass, inferred M = M_true/f, so it is **too high**. Correcting units or repeating a consistently leaking collection does not restore lost gas. The two separate hypothetical changes are correctly kept apart.

### Units, physical assumptions and learning evidence

The empirical/molecular definitions are correct, including the warning that ionic lattices do not thereby have molecular formulae. Formula multiplication preserves every subscript; non-integer k far from plausible precision challenges the data/model. A 100 g basis is an arbitrary scale choice, not a claim about actual sample mass. The missing oxygen requires the stated only-C/H/O assumption. Composition and molecular mass are distinct constraints; neither alone proves structure or unique identity.

The ideal-gas equation, rearrangements and conversions are correct: Pa m3 = J, so pV/(RT) has unit mol; mRT/(pV) has unit g mol^-1 for m in grams. The dm3-to-m3 and cm3-to-m3 factors are 10^-3 and 10^-6 respectively; Celsius conversion uses an absolute-temperature scale. Pressure must be absolute, not gauge. The text states negligible particle volume/attraction, identifies high density/near condensation as limits, and distinguishes these from measurement mistakes. All assessed gas tasks specify ideal, dry samples at 100 kPa and 300 K; no wet-gas correction or real identification is claimed. The same sample must supply m,p,V,T; loss from an apparatus is not automatically mass successfully collected. Unnamed gases in constructed alternative datasets need not be assigned a real identity for these conditional inferences.

The page provides complete demonstrations, then requires testing an incorrect molecular proposal and combining independent gas/composition evidence. The gas check reuses the worked p,V,T and therefore does not independently test those conversions there; `retry-gas` supplies another numerical volume and asks a different dependence/bias judgement. The formula retry changes elements and introduces the fractional ratio with k = 1, not an automatic instruction to double every molecular formula. Those are legitimate recovery/near-transfer tasks; they do not prove all unit conversions or delayed method selection. The mixed review below supplies additional independent combined decisions.

All **six marked English task texts are identical** in EN and ZH. Manual comparison found equivalent hints, assumptions, answers, warnings about identity and recovery links. There are four separate hint/answer pairs per language, all closed in source; full demonstrations are intentionally visible. No answer-bearing task title or other severe task leakage was found. Mathematical notation, quantities, powers of ten and atom/molecule distinctions match. Local anchors and cross-page feedback fragment targets exist; Chinese links are localized. FG1 remains the only concrete repair identified in these source snapshots.

### Four axes and limits for formula/gas

| Axis | Verdict | Evidence / limit |
| --- | --- | --- |
| 1. Scope and chemistry | **Minor precision repair required: FG1** | Appropriate 9620 AS 3.1.2.3-4 content; intended formulae and gas results independently correct. The literal H-percentage consistency claim needs repair. |
| 2. Reconstructible from declared prerequisites | **Pass** | The linked mole lesson plus explicit percent basis, atom-amount ratios, multiplier and ideal-gas units are sufficient for the reconstructed reasoning. |
| 3. Independent output, feedback and retry | **Pass, subject to FG1's corrected data claim** | Incorrect-proposal evaluation, formula/gas combination, fractional-ratio retry and changed collection model are real tasks with actionable feedback. No student-mastery inference. |
| 4. Route and later review | **Source-level connections checked** | The two languages link to the now-present mixed review and prerequisite/retry sections. Full index entry, rendered navigation and actual delayed use remain for main-agent integration/verification. |

No build, generated HTML, browser/keyboard/mobile test, original textbook scan, real apparatus or student trial was performed. Only this report was appended. Arithmetic and source-structure checks ran in memory; no script was saved. The broader pattern approval above is unaffected by this one small data correction.

| Formula/gas source snapshot | SHA-256 |
| --- | --- |
| `alevel/as-chemistry/formulae-and-gases.md` | `63A0DFFFB32A9CF1670FD7158593AFD9660C1C45FDB202074216173AE40DE6C3` |
| `zh/alevel/as-chemistry/formulae-and-gases.md` | `AA386C2CE8AB12560E0DC786B7E7449ADD30C6ECEF08A8554D2056043779CB6C` |

## Independent mixed quantitative review - 2026-10-27

Read both complete `quantitative-review.md` sources and the specific linked prerequisite/feedback sections needed to judge the tasks, particularly `solutions-and-titration/#uncertainty-and-bias` and its two retry sections. This is the requested bounded review of all **five** marked tasks, not a separate comprehensive acceptance of the entire titration lesson. Same AGENTS/long-term content standard and previously verified 9620 AS 3.1.2/RP1 scope apply.

**Verdict: content pass for the five reviewed mixed tasks; no numerical, chemical, model-condition, bilingual-help or bias-direction blocker found.** Actual integrated entry/navigation and student delayed performance are not thereby accepted. The formula-page precision finding FG1 above remains separate and does not contaminate the mixed composition data, which are different and consistent.

### Independent solutions: all five marked tasks

1. **`unknown-check` (EN 24 / ZH 26).** Atom conservation gives **MgCO3(s) + 2HCl(aq) -> MgCl2(aq) + CO2(g) + H2O(l)**. C 1, Mg 1, O 3, H 2 and Cl 2 occur on each side, with zero net charge. Excess acid, complete carbonate reaction, inert non-gas-producing impurity, pure dry gas and no loss let the CO2 amount trace the carbonate amount: n(CO2) = 100000(249 x 10^-6)/(8.31 x 300) = **0.009987966305... mol**. Ratio 1:1 gives that amount of MgCO3, with M = 84.3 g mol^-1; carbonate mass = **0.8419855596... g**, purity = 0.8419855596.../1.20 x 100 = **70.165463...% = 70.2%**. Impurity mass is a nonnegative **0.35801444... g**, consistent with the assumed mixture. Similar repeats show repeatability, not freedom from a common error. If fraction f of the CO2 is collected, inferred carbonate amount/purity are multiplied by f and are **too low**. This is the opposite direction to the full-original-mass/collected-gas molar-mass error in `retry-gas`, because a different quantity is inferred. Dry/no-loss collection from acid is an explicit idealization, not evidence that an actual apparatus avoided dissolved gas or leaks. All conditions required by this inference are supplied.

2. **`evidence-check` (EN 37 / ZH 39).** Oxygen by subtraction is **53.33%** before sensible rounding; this calculated remainder does not introduce a new independently measured high-precision percentage. On a 100 g basis: C = 3.333333... mol, H = 6.67 mol, O = 3.333125 mol. Ratios normalized to the last value are about **1.000063 : 2.001125 : 1**, consistent with **CH2O**, relative empirical-unit mass **30.0**. k = 180/30.0 = **6**, so molecular formula **C6H12O6**. Percentages back-check to 40.0%, 6.66666...% and 53.33333...%, as required by the stated precision. This does not prove glucose: molecular formula is not connectivity or unique identity, and the page need not require naming another compound to reject uniqueness. Withdraw Mr and the empirical formula/ratio remain supported, while k and the particular molecular formula are no longer fixed. This tests which conclusion depends on which evidence, not merely a new multiplier calculation.

3. **`record-check` (EN 50 / ZH 52).** Final-minus-initial titres are **25.20, 25.25 and 25.15 cm3**. Maximum minus minimum is **0.10 cm3**, meeting the supplied criterion for all three; mean = **25.20 cm3**. Acid amount = 0.1000 x 0.02520 = **0.002520 mol**; carbonate amount = half = **0.001260 mol**. Fixed aliquot volume = 0.02500 dm3, so c(carbonate) = 0.001260/0.02500 = **0.05040 mol dm^-3**.

   The task explicitly requests summed absolute reading bounds: two readings give **+/-0.10 cm3**, and 0.10/25.20 x 100 = **0.396825...% = 0.40%**. This is the stated reading contribution, not a total uncertainty, standard error of the mean or a universal burette specification. Repetition does not justify dividing an arbitrary worst-case bound by the square root of three.

   Here the known acid is delivered from the burette and the **unknown carbonate is in the conical flask**: c(carbonate) = c(HCl) V(titre)/(2 V(aliquot)). Overshoot makes V(titre) too large, so inferred carbonate concentration is **too high**. In the linked carbonate-standard worked example, the **unknown acid is in the burette**, with c(HCl) = 2 c(carbonate) V(aliquot)/V(titre); overshoot then makes that different inferred concentration **too low**. Both languages and the feedback link correctly distinguish these cases. A consistently displaced endpoint is not covered simply by the assigned scale-reading bound or concordance.

4. **`route-check` (EN 63 / ZH 65).** A: CH4 + H2O -> CO + 3H2 has C1/H6/O1 on each side; B: CH4 + 2H2O -> CO2 + 4H2 has C1/H8/O2. For hydrogen as the only desired product, A has stoichiometric reactant mass 16.0 + 18.0 = **34.0** and desired H2 mass 3 x 2.0 = **6.0**, giving **17.647058...% = 17.6%** atom economy. B has total reactant mass 16.0 + 2(18.0) = **52.0** and desired H2 mass 4 x 2.0 = **8.0**, giving **15.384615...% = 15.4%**. The mass totals also equal the product totals: A 28.0 + 6.0 = 34.0; B 44.0 + 8.0 = 52.0.

   In B, excess steam and 16.0/16.0 = **1.00 mol CH4** allow at most **4.00 mol / 8.00 g H2**. Recovered 6.00 g gives **75.0% yield**. More H2 per methane does not by itself increase H2 atom economy: steam contributes reactant mass too. Neither these percentages nor B's H2 output alone justifies a community recommendation. A specific further question could concern process heat demand and fuel source, containment/handling of carbon-containing by-products, or actual hazardous emissions. The task calls the routes idealized and asks for a maximum; it does not claim either equation alone proves conversion, industrial feasibility, kinetics or environmental performance. Reusing CO would alter the defined useful-product accounting, not the hydrogen-only percentages just calculated.

5. **`later-check` (EN 80 / ZH 82).** n(HCl) = 0.1000 x 0.01800 = **0.001800 mol**; carbonate in the 25.00 cm3 aliquot = **0.0009000 mol**. Quantitative preparation and a homogeneous solution make the aliquot fraction 25.00/250.0 = 0.1000, so original carbonate = **0.009000 mol**, mass = 0.009000 x 106.0 = **0.9540 g**. Purity = 0.9540/1.06 x 100 = **90.0%**, with 0.106 g inert material consistent with the starting sample.

   Water added only after the correct aliquot is in the conical flask does not change its carbonate moles, required neutralising acid or calculated purity under the stated model. Overfilling the original volumetric flask instead makes every fixed 25.00 cm3 aliquot less concentrated. If true solution volume is V_actual > 250.0 cm3 but the calculation still scales by 250.0/25.00, inferred total carbonate is n_true x 250.0/V_actual, hence purity is **too low**. This explicitly distinguishes conserving the moles in a completed aliquot from incorrectly scaling a diluted parent solution. Both languages request an unscripted English explanation and provide the same reasoning after the attempt.

### Method choice, feedback and delayed route evidence

Methods genuinely vary across the set: gas amount plus stoichiometry/purity; composition plus molecular-size evidence and a withdrawal test; raw titre selection plus concentration/uncertainty/bias; coefficient-weighted atom economy plus yield and conditional judgement; and aliquot-to-whole-sample scaling plus two dilution boundaries. The task headings do not name equations or reveal numerical conclusions. Some conditions and relationships are intentionally supplied (the carbonate ratio, for example), so this is not a claim that every relation was independently recalled. The useful assessment is selecting and connecting those relationships in the specified sample, not manufacturing missing chemistry.

Feedback identifies common failures: confusing gas mass with carbonate mass, cm3 with m3, molecular formula with unique identity, unknown-in-flask with unknown-in-burette, missing stoichiometric coefficients and omitting the tenfold aliquot factor. Each referenced lesson/fragment exists in both languages and the Chinese paths are localized. Verified the return target `solutions-and-titration/#uncertainty-and-bias`: it actually contains the contrasting unknown-acid calculation, not just a matching heading.

The general recovery paragraph groups preparation and endpoint-bias recovery under a link to `#retry-preparation`. That landing point contains the preparation retry, followed immediately by `#retry-titration`, which asks for a changed unknown-in-flask calculation and a diluted-titrant bias. Thus a real relevant route exists; this is not a broken-link or missing-task finding. A non-blocking navigation refinement would link preparation directly to `#retry-preparation` and endpoint/burette bias directly to `#retry-titration` so the first visible retry matches the chosen error. The latter checks tracing bias through moles and titre, rather than repeating the exact same endpoint scenario.

All **five English task texts are exactly equal between languages**, including assumptions, numeric precision, the uncertainty-combination rule and the required English explanation. Manual comparison found equivalent hints, solution decisions, bias directions and source/constructed-data disclosures. Five hint/answer pairs per language are separate and closed in source; there is no visible answer next to a first attempt. The `later-check` is an actual new integrated task, not just an instruction to revise. It provides a later-return opportunity and an error record; neither an agent solving it now nor a link's existence proves real delayed retention.

### Four axes and integrated recovery status

| Axis | Verdict | Evidence / limit |
| --- | --- | --- |
| 1. Scope and chemistry | **Pass for the five tasks** | Appropriate 9620 AS quantitative/RP1 preparation-analysis scope; equations, quantities, units, precision and bias directions independently checked. No real experiment or official marking claim. |
| 2. Reconstructible from prerequisites | **Pass for this task set** | The named three prerequisite lessons teach the needed relationships, measurements, conservation and uncertainty/bias tracing. Necessary reaction products/ratios and instrument bounds are supplied. |
| 3. Independent methods, feedback and retry | **Pass** | The five tasks require different combinations and conclusions, with usable corrective explanations and existing retry destinations. The grouped preparation/bias link could be made more direct but does not block content acceptance. |
| 4. Route and later review | **Mixed/recovery task content and source links pass; wider integration pending** | All in-scope local and cross-page fragment targets exist, and a delayed integrated task is present. Full index entry, rendered switching/navigation and actual later student use remain to be checked separately by the main agent. |

This review supplies the previously missing independent content evidence for the mixed/recovery portion of axis 4. It does **not** turn every course-route, technical or student-trial status into a pass, nor accept the entire practical lesson by implication. The formula-page FG1 correction remains an outstanding small data item for that separate page.

### Mixed-review snapshot and checks not performed

| Mixed-review source snapshot | SHA-256 |
| --- | --- |
| `alevel/as-chemistry/quantitative-review.md` | `1D4B4DD6D65F0D7AC1AC6A15C4806505608C41E1B7173BEE987908B3B7AE378B` |
| `zh/alevel/as-chemistry/quantitative-review.md` | `ADAC88E4B4D39B3F094EF1C4D320EB4E480BBE31C69652B285678B31CCEAEFD5` |

Observed HEAD remains `5864df18ec9c9a04e74cd4431365dc99c4a7a706`; the working-file hashes identify the reviewed versions. An in-memory assert check corroborated all principal mixed numerical results, opposite overshoot directions, dilution/purity direction, five-task parity, closed controls and existing fragment destinations. The earlier six-task formula/gas checks were also run in memory. No script was saved. Only this review file was appended; no course edits, builds, browser runs, original scans, student trials or commits were performed. The main agent owns builds/tests, source matrices and remaining integration.

## FG1 closure, added entity task and route-content roll-up - 2026-10-27

This append incorporates both subsequent requests: verify the percentage-precision repair, then independently check the new MgCl2 task and CaCl2 retry. **FG1 is closed. The new entity calculations and definition are correct; one new retry-disclosure issue E1 remains.** Previous quantitative-pattern approval and the mixed-review content pass are retained, but the new entity retry cannot yet be counted as a valid independent recovery attempt.

### FG1 closed on current source

Both formula/gas sources now use **9.1% H**, and their corresponding atom-amount working uses **9.1 mol**. C4H8O2 gives 9.090909...% H, which rounds to 9.1% at this precision; oxygen by difference remains 36.4%, so the existing near-integer inference and final formula need no change. No unspecified measurement error is needed to reconcile the exercise.

There are two `9.10` to `9.1` replacements per language. The files also changed from LF to CRLF line endings. Normalizing line endings in memory and reversing only those two replacements reproduces each original formula/gas SHA-256 exactly. Thus no other text, task condition, arithmetic, feedback or answer changed. Current raw-byte fingerprints below deliberately reflect CRLF; they are not the earlier LF fingerprints. Six-task bilingual identity remains intact.

### Independent solution of the new entity task and inline retry

Locations: EN `entity-check` lines 68-79; ZH lines 70-81.

**Definition:** Ar is the weighted mean mass of an atom of the element divided by one twelfth of the mass of a carbon-12 atom. Both numerator and denominator are masses, so **Ar has no unit**. The new task explicitly requires this definition and its reference; it is now an observable response, rather than explanation alone.

**MgCl2:** relative formula mass = 24.3 + 2(35.5) = **95.3**, dimensionless. Molar mass = **95.3 g mol^-1**; 0.100 mol formula units have mass 0.100 x 95.3 = **9.53 g**. Each formula unit represents one magnesium ion and two chloride ions in the lattice, so the amounts are **0.100 mol Mg2+** and **0.200 mol Cl-**. Their numbers are **6.02 x 10^22 magnesium ions** and **1.204 x 10^23 chloride ions**, the latter reported as **1.20 x 10^23** to three significant figures. The amounts also satisfy charge neutrality: 2(0.100) - 0.200 = 0. The solid's extended ionic lattice does not contain discrete MgCl2 molecules; specifying formula units is appropriate.

**CaCl2 retry:** relative formula mass = 40.0 + 2(35.5) = **111.0**, dimensionless; molar mass **111.0 g mol^-1**. For 0.0500 mol formula units, sample mass = 0.0500 x 111.0 = **5.55 g**. Chloride amount = 2 x 0.0500 = **0.100 mol**; chloride number = 0.100 x 6.02 x 10^23 = **6.02 x 10^22 ions**. Relative masses and literal particle numbers are dimensionless; molar mass, sample mass and amount carry g mol^-1, g and mol respectively. "Ions" identifies the counted entities; it does not turn their number into an amount in mol.

All stated answers, entity choices and rounding in both languages agree with these independent calculations. The Mg task's English text and the separate unmarked inline Ca retry prompt are each identical across languages. Hint content is equivalent, the existing explanation supplies the prerequisites, and no new bonding theory or isotope-abundance calculation is required. Removing just the newly inserted `entity-check` block reproduces the previously accepted amount-lesson fingerprints, so unrelated accepted material has not changed. There are now **nine marked tasks plus the inline CaCl2 retry**, not ten marked task blocks.

### E1 - Checking the entity answer reveals the retry answer before the instructed retry

Both prompts are followed by a **single** closed "Solution and check" / "解答与检查" disclosure. Its content contains the full MgCl2 answer **and the complete CaCl2 retry answer** (EN line 79 / ZH line 81). The visible instruction says "Close the answer and retry". Following that sequence requires opening the primary feedback first, which exposes **111.0, 5.55 g and 6.02 x 10^22 chloride ions** before the intended recovery attempt. Closing the panel afterwards does not restore an unseen answer.

This is not an arithmetic or entity-definition error. It is a direct answer-disclosure problem for the added retry under the long-term standard's independent-task/recovery requirements. Give the primary answer and retry answer their **own separately closed disclosures**, so the student can check MgCl2, close it, attempt CaCl2 and then reveal only that check. No new page, dependency or extra calculation is needed. Preserve the necessary explanation and the correct bilingual content. Until this is repaired, count the primary entity task as an available independent output, but **do not count this retry as independent recovery evidence**. The in-memory source check confirmed that both 9.53 and 5.55 currently appear in the same answer panel in both languages.

### Route-content judgement and four axes

Source-level entry/recovery integration has progressed since the earlier pending status. Inspected both course indexes and checked **54 in-batch Markdown route-link occurrences**, including existing fragment destinations, across the two indexes and eight lesson files. The Chinese index retains five old chapter links, each with its matching compatibility anchor, an explicit English label and `data-language-explicit`; the English target chapters remain present. The entry says this is a quantitative/RP1 sequence and separates the old reference notes from the guided route. It does not claim the full AS course is now complete.

| Acceptance axis | Current bounded verdict | Evidence / limit |
| --- | --- | --- |
| 1. Scope and chemistry | **Pass for the material independently solved in this report** | F1, R1 and FG1 are closed; new entity/relative-mass calculations and Ar definition are sound. No wrong numerical answer remains in the reviewed tasks. |
| 2. Reconstructible from prerequisites | **Pass in the reviewed remit** | Entity definitions, mole/ratio conversions, balancing choices, gas units and conditional evaluation explanations support the attempted work. |
| 3. Independent output, feedback and retry | **Existing tasks pass; new entity retry needs E1 repair** | The primary added task strengthens definition/entity evidence. Its shared answer panel prevents an unexposed CaCl2 recovery attempt. Do not mark all new retry evidence accepted yet. |
| 4. Route and later review | **Source-level quantitative entry/recovery loop passes** | Index entry, prerequisite links, repair targets and the independently solved later integrated task exist. This is source/content route acceptance, not independently executed browser verification or observed retention. |

**Roll-up:** the previously reviewed amount, formula/gas and mixed-review content has no remaining scientific/precision finding; FG1 is formally closed. Same quantitative-pattern expansion remains allowed. The added entity retry has the one concrete presentation/learning-evidence repair E1 before its independent-retry claim or a clean final all-items pass. This report has inspected the titration sections necessary for the mixed tasks and recovery links; it still does not substitute for a separate full experimental-type review of `solutions-and-titration`. Do not extend this bounded decision to all AS chemistry, all practicals or real apparatus competence.

The user/main agent reports **16 browser views passed** and earlier successful build checks. Record these as **main-agent technical evidence**, not new runs by this reviewer. The earlier implementation record still shows pending statuses; updating that acceptance record belongs to the main agent. No student trial, actual delayed performance, real experiment or learning-effect validation has been supplied here.

### Current final-snapshot fingerprints

These are raw SHA-256 values, including the files' actual line endings, at the closure/entity-review snapshot. Later E1 repair will require new fingerprints for the amount pair. HEAD remains `5864df18ec9c9a04e74cd4431365dc99c4a7a706`.

| Independently reviewed content source | SHA-256 |
| --- | --- |
| `alevel/as-chemistry/amount-and-equations.md` | `63474AB56E833848357815F412043BAB4627F0603EF4915EAAC7C221AA80CC87` |
| `zh/alevel/as-chemistry/amount-and-equations.md` | `2CE14239583C049E3FC5E6C6639FB67BC25DE9CE80A3A740C28C59F54C0A01CF` |
| `alevel/as-chemistry/formulae-and-gases.md` | `48BEA0CDC7B7CC1BF00074784418645E00E3390F12B5B19B4EA56364A342583E` |
| `zh/alevel/as-chemistry/formulae-and-gases.md` | `19A1420FAF309A7427FC0773D14F023309491DDD893E59DDD7B5DABD61DF3AB5` |
| `alevel/as-chemistry/quantitative-review.md` | `1D4B4DD6D65F0D7AC1AC6A15C4806505608C41E1B7173BEE987908B3B7AE378B` |
| `zh/alevel/as-chemistry/quantitative-review.md` | `ADAC88E4B4D39B3F094EF1C4D320EB4E480BBE31C69652B285678B31CCEAEFD5` |

The following identify the additional route/prerequisite sources inspected; a fingerprint does not enlarge the stated review scope:

| Route/prerequisite record | SHA-256 |
| --- | --- |
| `alevel/as-chemistry/index.md` | `5405CC61E77DCE34D386BFCED6CCAADC1722D5C4752248BF0A41B9D931DEFBBD` |
| `zh/alevel/as-chemistry/index.md` | `C0A2D811A03010EA286EBE8287EF024BCFA39327631D11BE8EBD1EF37538D61B` |
| `alevel/as-chemistry/solutions-and-titration.md` | `0AE4C0B5B79FA6C02CB2F3B99E1B92426BB250CF2E786B635CEE110D13B609F0` |
| `zh/alevel/as-chemistry/solutions-and-titration.md` | `1F17E2FC653694FC75DB326FB4746BA2040EF1DDBEE5AB1E755BE435A88E0B99` |
| `docs/agents/implementation-as-chemistry-foundations-2026-10-27.md` | `1498DC060F006A7770FAB6F94A577E1F5FB29C4212C60FDD552A08228F67FBF3` |

New entity arithmetic, charge/particle accounting, task/prompt parity, closed controls, unchanged-content comparisons and route-link checks ran in memory with assertions. Only this review file was appended. No course files, tests, saved scripts, Git state, builds or browser sessions were changed.

## E1 closure - 2026-10-27

**E1 is closed on both current amount-lesson sources.** Inspected the actual `entity-check` block: the primary answer ends before the CaCl2 retry answer; a separate **Retry solution and check / 重试解答与检查** disclosure now contains the retry results. Hint, primary answer and retry answer are three separate controls, all **default closed**. Opening the primary answer exposes neither 111.0 nor 5.55 g; the student can check MgCl2, close it, attempt CaCl2 and then open its own feedback. This repairs the exact leakage previously reported.

For each language, removing only the inserted closing/opening disclosure boundary and its new summary, while preserving the existing CRLF line endings, reproduces the immediately preceding raw source SHA-256 exactly. Original task text, numbers, explanations and answers are unchanged. No old task was solved again, and no new content change was requested or made.

| Accepted closure snapshot | Raw SHA-256 |
| --- | --- |
| `alevel/as-chemistry/amount-and-equations.md` | `A39D4A3D1211DE6D6B8A981B55F7CD22424EBB34E5557F0B4F01E2EFA5D9E992` |
| `zh/alevel/as-chemistry/amount-and-equations.md` | `161C92DFD5DF7C496CE027DE02626641A1DFCDBF74D7D834A9E9D765D6D5C6BB` |

**Final bounded content verdict: no outstanding findings remain in the material independently reviewed in this report; FG1 and E1 are both closed.** The added entity task/retry now passes its content and source-disclosure checks. The prior amount, formula/gas and five-task mixed-review passes, source-level quantitative recovery/later-review route judgement and same-pattern expansion permission all remain in force. This closes the last reviewer-raised correction in the current remit; it does not enlarge that remit to a full independent experimental-type audit, the full AS course or student learning effectiveness.

This closure is a source check only. Previously reported build, 16 local checks and 16 browser views remain attributed to the main agent; they were not rerun here, and no rendered test of the new disclosure split is claimed. Only this review file was appended; no course edits, builds or commits were performed.
