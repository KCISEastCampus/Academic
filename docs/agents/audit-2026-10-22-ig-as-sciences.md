# IGCSE / AS content and reading-route audit — 2026-10-22

**Conclusion:** the eight audited strands offer different products: two partial bilingual physics learning routes, five predominantly reference-note strands, and one economics PDF directory. They should not be presented as interchangeable self-study courses. Preserve the useful explanations and physics pilots; fix scope disclosure, missing teaching/assessment links and feedback before expanding a common format.

## Basis and coverage

Read-only review of current files in `D:/GitHub/Academic`; HEAD at inspection: `1076347b4d56a09e60efe00e41021610b7552fbd`. Applied `AGENTS.md` and `docs/agents/course-content-standard.md`, especially §§1–5 and §7. References below are repository-relative source paths followed by **one-based line numbers**, not generated HTML locations. External-source statements are assessed as statements on the page, not independently verified facts.

**Inventory versus reading:** enumerated all 29 Markdown files in the eight subject directories and their existing Chinese counterparts. Read all 13 subject indexes in full, including their embedded notes, plus all four stage indexes: `igcse/index.md:1–8`, `zh/igcse/index.md:1–11`, `alevel/index.md:1–8`, `zh/alevel/index.md:1–11`. For separate physics bodies, read the four sample files listed below in full and scanned headings, task markers, scope and onward links in the other 12. Thus broad index patterns have full-index evidence; detailed lesson judgments are samples.

| Strand | Indexes read in full | Actual support and substantial body focus |
| --- | --- | --- |
| IGCSE mathematics | `igcse/mathematics/index.md:1–230`; `zh/igcse/mathematics/index.md:1–71` | English Extension outline, formulae, immediate-answer quick checks and revision PDFs. Body focus: Number and Algebra, lines 19–98. Chinese page is a topic index linking to English, not translated teaching. |
| IGCSE physics | `igcse/physics/index.md:1–677`; `zh/igcse/physics/index.md:1–681` | Four ordered learning topics in both languages, then eight units of reference notes. Full body sample: `igcse/physics/motion-and-graphs.md:1–290` and `zh/igcse/physics/motion-and-graphs.md:1–292`. Explicitly partial, not a complete guided course. |
| IGCSE chemistry | `igcse/chemistry/index.md:1–463`; `zh/igcse/chemistry/index.md:1–114` | Ten-unit English summary, tables, quick checks and practical reminders. Body focus: bonding, lines 65–111, and quantitative chemistry, 235–271. Chinese topic index only. |
| IGCSE biology | `igcse/biology/index.md:1–401`; `zh/igcse/biology/index.md:1–88` | Six-unit English summary and practical/study checklists. Body focus: organisation/transport, lines 17–88, and bioenergetics, 92–197. Chinese topic index only. |
| AS physics | `alevel/as-physics/index.md:1–385`; `zh/alevel/as-physics/index.md:1–389` | Four ordered bilingual lessons plus Unit 1–2 reference notes and worked examples. Full body sample: `alevel/as-physics/measurements-and-uncertainties.md:1–342` and `zh/alevel/as-physics/measurements-and-uncertainties.md:1–344`. Partial guided route is disclosed. |
| AS chemistry | `alevel/as-chemistry/index.md:1–881` | English organic notes, Chapters 11–15; no separate lesson Markdown. Body focus: nomenclature/isomerism, lines 64–199, and substitution/elimination, 427–540. Unit 1 exclusion disclosed; no Chinese counterpart found. |
| AS biology | `alevel/as-biology/index.md:1–1157` | English Unit 2 notes, Chapters 11–17, with substantial diagrams and some causal prose. Body focus: digestion/absorption, lines 111–194, and cardiac cycle, 633–698. Unit 1 exclusion disclosed; no Chinese counterpart found. |
| AS economics | `alevel/as-economics/index.md:1–41` | Eight PDF links: Units 1–5 and 7–9. All eight local targets exist. Read the complete extracted text of `assets/pdf/as-economics-unit-2.pdf`, p.1, covering demand, elasticities, supply and market allocation. No Chinese web counterpart found; the PDF itself contains some Chinese annotations. |

Other physics pages **structurally scanned, not fully read**: `igcse/physics/{forces-and-motion,springs-and-hookes-law,centre-of-mass-and-moments}.md`, `alevel/as-physics/{vectors-and-moments,straight-line-motion,projectile-motion}.md`, and each corresponding `zh/` file. These are the remaining six bilingual topic pairs; task-marker presence alone was not treated as evidence of teaching quality.

Supporting source inspected: `_data/subjects.yml`, the four subject-index strings in `_data/ui.yml`, `_includes/subject_card.html`, `_layouts/subjects.html` and `_layouts/level.html`. The three missing AS Chinese directories were also checked by searching `zh/` for corresponding routes/translation metadata.

## Prioritized findings

### 1. P1 — Scope and language qualifiers exist in data but do not reach course cards

**Evidence / reach:** `_data/subjects.yml:86–117,120–151` distinguishes Unit-2-only notes, PDF links and Chinese indexes. Yet `_includes/subject_card.html:12–18` emits the icon, name and arrow only; it never emits either description. The level page uses this include at `_layouts/level.html:35–39`. Chinese routing falls back to the English path when no translation exists (`_includes/subject_card.html:4–9`). In addition, the stored physics Chinese descriptions still say “Chinese index → English notes” (`_data/subjects.yml:99,133`), whereas both Chinese physics indexes now contain notes and lesson routes (`zh/igcse/physics/index.md:14–27`; `zh/alevel/as-physics/index.md:14–27`).

**Impact:** before entering, a learner cannot distinguish a course route from a reference/PDF destination or anticipate the language change. This is a source-template finding; screen layout was not tested.

**Recommendation:** show one accurate scope/language sentence from the existing fields on each card, updating the physics descriptions first. Retain the honest “Chinese topic index” notice for mathematics, chemistry and biology (`_data/ui.yml:139–142`; their Chinese indexes, lines 13–16). Do not label those three as Chinese courses; keep the three unavailable AS translations explicit.

### 2. P1 — Most note strands list what to know without teaching the decisions needed to use it

**Evidence / reach:** IGCSE mathematics lists algebraic proofs, function operations and differentiation without worked reasoning (`igcse/mathematics/index.md:55–98`). Chemistry compresses bonding/properties into definitions and a comparison table (`igcse/chemistry/index.md:68–111`); biology compresses diffusion, osmosis and active transport into three bullets followed by recall questions (`igcse/biology/index.md:66–88`). This pattern recurs across those three complete indexes. AS notes have stronger local explanations—naming decisions in `alevel/as-chemistry/index.md:128–150`, pressure/valve reasoning in `alevel/as-biology/index.md:640–664`—but no comparable learn → independent application → diagnostic recovery route. Biology's discussion questions at lines 472–482 are useful prompts, not a checked independent sequence.

**Impact:** a novice can recognise terminology while still needing an unstated teacher explanation to select a model, connect representations or construct an answer. Chinese index links lead back to the same support level.

**Recommendation:** keep these assets as reference notes. Pilot a small learning sequence for one target per strand: e.g. rationalisation, bonding-to-conductivity explanation, membrane transport prediction, organic naming and pressure-controlled valve action. Add stated prerequisites with recovery links, an explained choice, a scaffolded attempt and an independently judged transfer. Organise headings around those questions. In AS chemistry, “Bond Fission” and its two types are all sibling H4s (`alevel/as-chemistry/index.md:152–164`); the shared TOC includes H1–H4 by default (`_layouts/subjects.html:54`). Repair such grouping while retaining stable anchors, rather than mechanically splitting every numbered subsection into a page.

### 3. P1 — IGCSE quick checks expose answers before independent retrieval and supply little recovery

**Evidence / reach:** questions and bold parenthetical answers share the same line in mathematics (`igcse/mathematics/index.md:43–48,92–98`), chemistry (`igcse/chemistry/index.md:106–111,266–271`) and biology (`igcse/biology/index.md:82–88,191–197`). This is a repeated pattern throughout all three indexes, not just one isolated sample. The answers normally give the result or key phrase without diagnosing the learner's reasoning. The physics reference index already separates answers (`igcse/physics/index.md:113–149`).

**Impact:** seeing the answer can replace the retrieval being tested; a wrong response gives little direction beyond rereading. These checks cannot establish the broader application/proof/mechanism abilities named in the notes.

**Recommendation:** move answers behind separate disclosure, add a short reason/check and a targeted return link, then a retry for the actual misconception. Keep recall checks, but pair important application targets with changed conditions or representations. Label locally authored checks as self-written; do not invent official marks.

### 4. P1 — AS chemistry's Unit 2 coverage statement is broader than its visible teaching inventory

**Evidence / reach:** `alevel/as-chemistry/index.md:13–18` says the page covers Unit 2 “Organic 1 and Physical 1” and excludes only Unit 1. Its complete heading/body inventory instead runs from organic introduction through alkanes, halogenoalkanes, alkenes and alcohols (`:21,203,386,566,782–881`), with no separate physical-chemistry learning section or onward route identified in this directory. AS biology's explicit Unit 1 exclusion (`alevel/as-biology/index.md:12–15`) is useful disclosure and should be retained; this audit does not certify its Unit 2 completeness either.

**Impact:** students may treat a partial set of organic notes as their Unit 2 preparation boundary. This is a mismatch between the page's claim and available support, not an independently established official syllabus omission list.

**Recommendation:** describe the current asset as selected organic notes, name the unprovided portion, and prepare the standard's objective-to-explanation-to-independent-task map against the identified specification before claiming a whole unit. Do not infer qualification coverage from textbook chapter numbering.

### 5. P1 — AS economics is a useful archive, but supplies no web learning route or checked application

**Evidence / reach:** the entire index is attribution plus eight headings/PDF links (`alevel/as-economics/index.md:9–41`); numbering jumps from Unit 5 to Unit 7 (`:27–33`) without explaining the gap. The sampled Unit 2 PDF, p.1, contains definitions, arrow chains, examples and a Chinese instruction to describe a diagram/apply price functions. Its extracted text supplies no paired attempt/feedback/retry sequence. This is **one PDF sample**, not a finding about all eight PDFs; embedded graphics were not assessed.

**Impact:** a learner must invent their own study order, context application and standard of evaluation. An attribution identifies a contributor, but does not establish the qualification, edition or completeness of the collection.

**Recommendation:** retain the PDFs under a clearly named mindmap archive; state board/qualification/version and explain the numbering gap after checking its meaning. Start with one HTML market-change lesson that asks students to draw and explain a shift in a stated context, then make a conditional judgment with feedback. Link the mindmap as revision support. Do not assume “Unit 6 missing” means an official exam unit is absent.

### 6. P2 — Generic specification links and credits do not substantiate broad provenance claims

**Evidence / reach:** mathematics asserts Extension coverage and ends with a generic “Latest spec” link (`igcse/mathematics/index.md:15,226–230`). Chemistry calls the preceding material a “full syllabus guide” (`igcse/chemistry/index.md:458–463`); biology likewise ends with a generic latest-spec link (`igcse/biology/index.md:401`). The sampled AS chemistry page links a specific IUPAC naming rule (`alevel/as-chemistry/index.md:130`), but many instructional figures retain `IMG` descriptions and no local figure attribution (e.g. `:126–145,447–452`). AS biology supplies an explicit teaching-diagram source for HIV (`alevel/as-biology/index.md:251–253`), but that does not source the rest of the page. These are differences in traceability, not findings of plagiarism or scientific error.

**Impact:** readers cannot tell which version supports a completeness statement, which examples are authored, or how figure-specific help should be obtained. A generic image description also provides little instructional substitute when the image is unavailable.

**Recommendation:** record the actual specification identity/version and supported scope, soften unsupported completeness wording, and attach source/adaptation/author status to examples, figures and constructed data. Replace generic figure alternatives with meaningful descriptions of the needed structures or relationships, preserving the task's unanswered judgment. Use the physics sample's explicit self-written/constructed/no-official-marks statements as a local precedent (`igcse/physics/motion-and-graphs.md:22,283–287`). No external-source verification was performed here.

### 7. P2 — Practical labels and checklists often stop before the student's scientific decisions

**Evidence / reach:** IGCSE chemistry provides one-line practical goals for electrolysis, titration and rates (`igcse/chemistry/index.md:146,264,325`); biology gives a one-line osmosis investigation and a general skills checklist (`igcse/biology/index.md:75,382–387`). Neither supplies the corresponding variables/data/decision/feedback task at those locations. AS physics reference summaries also compress RP2/RP3 to aims and formulae (`alevel/as-physics/index.md:159,277,382–385`), but its dedicated measurement lesson explicitly offers constructed-data analysis and disclaims physical completion (`alevel/as-physics/measurements-and-uncertainties.md:20–22,154–207,337–339`).

**Impact:** knowing the practical title or graph gradient is easily mistaken for being able to design, analyse and evaluate the investigation. The short reference format itself is legitimate; its role needs to remain clear.

**Recommendation:** link each practical reminder to a focused preparation/data task when available; mark unsupported ones as summaries. For a first chemistry/biology pilot, require a variable/control choice, a usable raw-data record, interpretation and an explanation of one error direction, with criteria and a retry. Keep real practical completion separately evidenced.

### 8. P2 — Physics pilots have real teaching support, but sample goals still need fuller independent/retry evidence

**Evidence / sample only:** the motion lesson explains graph decisions, changes representations, tests a claim about sparse observations and links errors back to concepts (`igcse/physics/motion-and-graphs.md:74–112,198–259`; Chinese `:76–114,200–261`). It should not be classed as a compressed outline. However, its final retry only checks averages, whereas the diagnosis table also names flat velocity graphs and acceleration sign (`English :252–279`; Chinese `:254–281`). The AS measurement sample teaches error-bar line bounds using one worked record and a guided follow-up (`alevel/as-physics/measurements-and-uncertainties.md:154–207`); its independent section tests density, timing and estimation (`:211–295`) and its retry addresses shared offsets (`:297–331`), without another independent graph-bound record. The Chinese sample has the same distribution (`:156–209,213–333`).

**Impact:** the presence of “independent practice” and “retry” headings does not demonstrate independent mastery or repair for every stated ability. Nothing here establishes student learning effects or a defect in all eight physics topics.

**Recommendation:** map the sampled goals to actual independent evidence before extending the pilots. Add an unfamiliar error-bar record whose middle point constrains the extreme line, and a short graph/sign retry for the motion misconceptions. Place a later mixed revisit in the subsequent route; inspect those later bodies before deciding whether new material is needed. Preserve the existing good explanations, task identities and bilingual alignment.

## Limits and next review boundary

- This is a source-based structural/readability audit of the specified eight strands, not all Academic subjects. Index-body patterns were read across their complete pages; separate physics bodies were sampled as declared above. No exhaustive scientific/mathematical correctness, official coverage, question/mark-scheme identity or bilingual-equivalence certification is made.
- No page edits, builds, browser use, screenshots, commits, network/source refresh or student trials. Screenshot and actual desktop/mobile reading verification belong to the main audit. No claims about rendered heading spacing, formula rendering, responsive tables, disclosure behavior or keyboard usability were tested.
- Only the economics Unit 2 PDF's text was read; other PDFs and instructional image pixels were not reviewed. Local existence of the eight economics files does not prove successful browser delivery or legibility.
- The only authored file in this task is this report. Existing A2 numerical-methods edits and untracked artifacts were left in place. Findings describe the inspected working-tree source; later edits require reference and conclusion rechecks. Recommended changes are proposals, not completed fixes or content-standard acceptance.
