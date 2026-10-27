---
title: Redox and Electron Accounting
layout: subjects
mathjax: true
grade: as
subject: as-chemistry
permalink: /alevel/as-chemistry/redox-equations/
toc_headings: h2, h3
study_page: true
reading_layout: true
---

<h2 id="start-here">Where did the electrons go?</h2>

Oxidation is electron loss; reduction is electron gain. They occur together because electrons transferred by one reactant must be accepted by another. Oxygen transfer is useful in some reactions, but cannot describe every redox process. You need [balanced ionic equations](/alevel/as-chemistry/amount-and-equations/#reaction-ratios) and the [atom/ion distinction](/alevel/as-chemistry/atomic-structure/#particles). All questions are self-written; this is reasoning about equations, not instructions to mix reagents.

<h2 id="electron-transfer">Name the agent by what it does to another species</h2>

For $\ce{Zn(s) + Cu^2+(aq) -> Zn^2+(aq) + Cu(s)}$, zinc gives away electrons:

$$\ce{Zn(s) -> Zn^2+(aq) + 2e-}$$

Copper(II) ions accept them: $\ce{Cu^2+(aq) + 2e- -> Cu(s)}$. Zn is oxidised and is the **reducing agent**, because it gives electrons to reduce Cu²⁺. Cu²⁺ is reduced and is the **oxidising agent**, because it accepts electrons from Zn. Agent names describe the effect on the other reactant, not the change in the agent itself. Electrons cancel in the overall equation; free electrons are not left as products of an ordinary aqueous overall reaction.

<div class="lesson-check" markdown="1">
<h3 id="agent-check">Trace the transfer</h3>
<!-- task:agent-check -->
Magnesium reacts with H+(aq) to give Mg2+(aq) and H2(g). Write both half-equations and the overall equation. Identify the species oxidised, the species reduced, the oxidising agent and the reducing agent. If the acid is HCl, explain why chloride is absent from the net ionic equation.
<!-- /task:agent-check -->
<details markdown="1"><summary>Hint</summary>
Magnesium loses two electrons, while each hydrogen ion gains one.
</details>
<details markdown="1"><summary>Solution and check</summary>
$\ce{Mg(s) -> Mg^2+(aq) + 2e-}$ and $\ce{2H+(aq) + 2e- -> H2(g)}$ combine to $\ce{Mg(s) + 2H+(aq) -> Mg^2+(aq) + H2(g)}$. Mg is oxidised/reducing agent; H⁺ is reduced/oxidising agent. Cl⁻ is unchanged on both sides and cancels as a spectator. If you named Mg the oxidising agent, return to [the meaning of agent](#electron-transfer) and explain the other reactant’s change.
</details>
</div>

<h2 id="oxidation-states">Use oxidation states as an accounting model</h2>

Oxidation state allocates bonding electrons to the more electronegative atom as a formal bookkeeping model. It equals actual ion charge for a monatomic ion; it does not imply that a covalent molecule contains those free ions. An uncombined element is 0, even when its formula is O₂ or Cl₂. The sum over a neutral formula is 0; over an ion it is the ion charge.

Group 1 is usually +1, Group 2 +2; F is −1 in compounds. H is usually +1, but −1 in metal hydrides such as NaH. O is usually −2, but −1 in peroxides such as H₂O₂; in OF₂, F remains −1, so O is +2. Establish these assignments before solving for the unknown. An increase in oxidation state indicates oxidation; a decrease indicates reduction.

<div class="worked-example" markdown="1">
In $\ce{SO4^2-}$, write $x+4(-2)=-2$, so S is +6. The ion’s total charge −2 is not the sulfur oxidation state. In Fe₂O₃, $2x+3(-2)=0$, so Fe is +3. The coefficient counts atoms before the charge sum is solved.
</div>

<div class="lesson-check" markdown="1">
<h3 id="state-check">Check a set of assignments</h3>
<!-- task:state-check -->
Find Fe and S oxidation states in Fe2(SO4)3, N in NH4+, and O in H2O2 and OF2. Explain why the total ion charge is not assigned to every atom. In 2Fe2+ + Cl2 → 2Fe3+ + 2Cl−, use changes in oxidation state to identify oxidation, reduction and both agents.
<!-- /task:state-check -->
<details markdown="1"><summary>Hint</summary>
Use the charge of a whole sulfate group first. Keep the peroxide and fluoride exceptions.
</details>
<details markdown="1"><summary>Solution and check</summary>
Fe +3, S +6, N −3; O is −1 in H2O2 and +2 in OF2. The sum, with multiplicities, must equal total charge; assigning that total to each atom would overcount. Fe changes +2→+3: oxidation; Fe2+ is reducing agent. Cl changes 0→−1: reduction; Cl2 is oxidising agent. If you assigned S −2, rework the sulfate charge equation in [the model](#oxidation-states).
</details>
</div>

<h2 id="half-equations">Balance atoms, then charge, then cancel electrons</h2>

For acidic aqueous half-equations with products specified, balance non-H/O atoms first, O with H₂O, H with H⁺, and charge with electrons. Check atoms and charge again. This is an accounting procedure for the stated medium and products, not a prediction of what any arbitrary mixture will do. An alkaline question needs its appropriate medium; do not leave added H⁺ in an alkaline overall equation.

<div class="worked-example" markdown="1">
**Self-written derivation using specified acidic products.** Reduce $\ce{MnO4-}$ to $\ce{Mn^2+}$. One Mn already matches. Four O require 4H₂O on the right; their eight H require 8H⁺ on the left. Left charge is now +7; right charge is +2. Add five electrons to the left to make both +2:

$$\ce{MnO4-(aq) + 8H+(aq) + 5e- -> Mn^2+(aq) + 4H2O(l)}$$

Oxidation $\ce{Fe^2+(aq) -> Fe^3+(aq) + e-}$ releases only one electron, so multiply **every term** by five before adding. The overall equation is:

$$\ce{MnO4-(aq) + 8H+(aq) + 5Fe^2+(aq) -> Mn^2+(aq) + 4H2O(l) + 5Fe^3+(aq)}$$

Check left charge $-1+8+10=17$, right $2+15=17$, and equal Mn/Fe/O/H counts. The 1:5 mole ratio follows from electron conservation, not the initial solution concentrations.
</div>

<div class="lesson-check" markdown="1">
<h3 id="combine-check">Rebuild an unfamiliar equation</h3>
<!-- task:combine-check -->
In acidic solution Cr2O7^2− is reduced to Cr3+ and Fe2+ is oxidised to Fe3+. H2O is the oxygen-containing product. Construct both balanced half-equations and the net overall equation, including H+ where needed. Check total charge. Determine how many moles of Fe2+ react with 0.00200 mol of Cr2O7^2−. Products are supplied; their formation is not a reaction to memorise for this task.
<!-- /task:combine-check -->
<details markdown="1"><summary>Hint</summary>
Two chromium atoms must appear on the right. Compare the total electron requirements of the two half-reactions.
</details>
<details markdown="1"><summary>Solution and check</summary>
$\ce{Cr2O7^2- + 14H+ + 6e- -> 2Cr^3+ + 7H2O}$ and $\ce{Fe^2+ -> Fe^3+ + e-}$. Multiply the latter by six: $\ce{Cr2O7^2- + 14H+ + 6Fe^2+ -> 2Cr^3+ + 7H2O + 6Fe^3+}$ (aqueous ions, liquid water). Charges: $-2+14+12=24$ and $6+18=24$. Fe2+ amount $=6(0.00200)=0.0120$ mol. If electrons survived in the overall equation, equalise them before adding, then use [the retry](#retry).
</details>
</div>

<div class="lesson-check" markdown="1">
<h3 id="audit-check">Audit a laboratory explanation</h3>
<!-- task:audit-check -->
A report writes MnO4− + 8H+ → Mn2+ + 4H2O + 5e− and says “atoms match, so the equation is balanced; manganese is oxidised because it gains positive charge.” Diagnose each error. A separate reaction is Cl2 + 2OH− → Cl− + ClO− + H2O. Assign chlorine oxidation states and explain how the same starting element can undergo both oxidation and reduction.
<!-- /task:audit-check -->
<details markdown="1"><summary>Hint</summary>
Calculate both total charges before naming the electron change.
</details>
<details markdown="1"><summary>Solution and check</summary>
In the report, left charge is +7 and right is −3. The electrons belong on the left: Mn changes +7→+2 and is reduced. A species charge is not automatically the oxidation state of one atom inside it. In the supplied alkaline equation, Cl changes 0→−1 in Cl− and 0→+1 in ClO−. Some chlorine is reduced and some oxidised: disproportionation. It does not mean an individual chlorine atom simultaneously finishes in both products. Revisit [charge sums](#oxidation-states) if those ideas were confused.
</details>
</div>

<h2 id="retry">Use new species after checking the failed step</h2>

<div class="lesson-check" markdown="1">
<h3 id="retry-redox">A new electron ledger</h3>
<!-- task:retry-redox -->
In acidic solution H2O2 is reduced to H2O while I− is oxidised to I2. Construct the half-equations and overall equation, and name the oxidising agent. Explain why oxygen being −1 in H2O2 matters. If 0.00300 mol H2O2 reacts completely by this equation, determine the I− amount consumed. Keep atoms, charge and electrons as three distinct checks.
<!-- /task:retry-redox -->
<details markdown="1"><summary>Hint</summary>
Start with H2O2 → 2H2O, then supply the missing H and charge.
</details>
<details markdown="1"><summary>Solution and check</summary>
$\ce{H2O2 + 2H+ + 2e- -> 2H2O}$; $\ce{2I- -> I2 + 2e-}$. Overall $\ce{H2O2(aq) + 2H+(aq) + 2I-(aq) -> 2H2O(l) + I2(aq)}$. H2O2 is the oxidising agent: its O changes −1→−2. Assuming −2 initially would conceal the reduction. Two iodide ions lose two electrons total for one H2O2, so 0.00600 mol I− reacts. Left/right charge is zero and all H/O/I atoms match. Later try an unseen equation in [the full review](/alevel/as-chemistry/as-review/).
</details>
</div>

<h2 id="sources">Sources and connections</h2>

[OxfordAQA 9620 specification](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-chemistry-specification.pdf), 3.1.5; Lister/Renshaw (OUP, 2016), Chapter 7, selected pp. 130, 133, 136–137. Supplied unfamiliar products support balancing, not an additional list of compulsory reactions. Continue to [periodicity](/alevel/as-chemistry/periodicity/) and [halogen reactions](/alevel/as-chemistry/halogens/), or [course entrance](/alevel/as-chemistry/).
