# AS Mathematics learner-route pilot

## Problem and scope

The course entrance exposed specification and activity codes before explaining what to learn. All fifteen lessons lacked adjacent-lesson navigation. This pilot changes both language entrances and thirty lesson endings; it does not redesign the whole site or add new assessment content.

## Design decisions

Keep the shared subject layout, heading/body fonts and existing palette: background `#f8fafc`, surface `#ffffff`, text `#0f172a`, muted text `#64748b`, links `#0369a1`, AS accent `#16a34a`. Use left-aligned text and ordered topic lists within four meaningful groups: MA01 foundations, MA02 pure mathematics, statistics and mechanics. Each link names a topic and states an observable capability.

The primary entrance is the first algebra lesson. Specification references remain available in a closed disclosure; the existing archive stays closed with its original anchors. Avoid a separate card system or new styling: the information hierarchy, rather than another visual theme, addresses the observed problem.

Each lesson ends with an independent retry checkpoint and named previous/next links plus a return to the route. The first lesson has no previous link; the final lesson directs learners back to choose topics needing practice. This is a suggested sequence, not a claim that statistics requires the preceding MA02 pure topics.

## Verification

- AS source checks: all fifteen topics, twenty-five groups, paired English prompts and formulas, anchors, closed solutions, and adjacent-lesson links.
- Subject index translation, language-switch and frontend UX checks passed.
- Markdown lint, whitespace checks and Jekyll build passed; Pagefind index regenerated.
- Actual Chromium at desktop 1365px and phone 390px, in both languages: start link, keyboard hint toggle, next lesson, previous link, return to course, closed reference disclosures, legacy assessment bookmark, no page overflow or MathJax errors in the exercised flow. Entrance screenshots inspected at both widths.

The existing mathematical tasks and solutions were preserved. No new student trial, learning-effect validation or calculator hardware test was performed. This pilot has not been published; other course entrances remain a separate improvement scope.
