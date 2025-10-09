### Liquid Template Error

**Error Message:** Nesting too deep included in /_layouts/index.html (Liquid::StackLevelError)

**Context:** This error occurred during the GitHub Actions `pages-build-deployment` job.

**Possible Cause:** The error is likely caused by a circular or recursive include involving `_includes/site_header.html`. 

**Action Suggested:** Please check all includes (especially `head.html`, `banner.html`, and others referenced by `index.html`) for any direct or indirect inclusion of `site_header.html`. Refactor the includes to break the loop and resolve the nesting issue.

**Repository:** KCISEastCampus/Academic

---

## Resolution

**Status:** ✅ RESOLVED

**Root Cause:**
The error was caused by Liquid processing `{% include %}` tags even when they appeared inside HTML comments. Several include files had usage examples in their comments containing Liquid include tags that referenced themselves:
- `_includes/site_header.html` - Had `{% include site_header.html ... %}` in a comment
- `_includes/card.html` - Had `{% include card.html ... %}` in a comment  
- `_includes/exam_link.html` - Had `{% include exam_link.html ... %}` in a comment
- `_includes/subject_button.html` - Had `{% include subject_button.html ... %}` in a comment

This created infinite recursion as Liquid processed these tags even though they were only meant as documentation.

**Changes Applied:**
1. Removed Liquid `{% include %}` syntax from all HTML comments in include files
2. Replaced with plain text descriptions of how to use each include
3. Added `layout: none` front matter to `_layouts/index.html` and `_layouts/subjects.html` as a preventive measure

**Verification:**
- ✅ Jekyll build completes successfully (0.203 seconds)
- ✅ All pages render correctly with proper includes
- ✅ No circular dependencies remain in the codebase