### Liquid Template Error

**Error Message:** Nesting too deep included in /_layouts/index.html (Liquid::StackLevelError)

**Context:** This error occurred during the GitHub Actions `pages-build-deployment` job.

**Possible Cause:** The error is likely caused by a circular or recursive include involving `_includes/site_header.html`. 

**Action Suggested:** Please check all includes (especially `head.html`, `banner.html`, and others referenced by `index.html`) for any direct or indirect inclusion of `site_header.html`. Refactor the includes to break the loop and resolve the nesting issue.

**Repository:** KCISEastCampus/Academic