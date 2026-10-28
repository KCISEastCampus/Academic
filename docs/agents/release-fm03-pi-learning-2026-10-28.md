# FM03 找 PI 改版：发布候选验收

日期：2026-10-28。用户在局域网预览完成后明确授权“好，发布”。本次范围只有二阶微分方程中英页、直接相关测试及本轮研究／审查／验收记录。发布流程为 PR、最新提交 CI 和 Code Review、无未解决问题后合并，再确认 Pages；实际状态以 GitHub 为准。

## 发布范围与基点

- 独立分支 `codex/fm03-pi-learning`，从本次已获取的 `origin/main`：`56b8a40565e62ad69b1ffb8eb034d200807186bb` 建立；不把原 IGCSE 分支中的提交重复纳入新 PR。
- 生产变更仅 `alevel/a2-further-mathematics/second-order-differential-equations.md`、对应中文页及 `scripts/test-further-second-order.js`。无共享样式、布局、依赖或工作流变更。
- 记录限本日 PI 研究、制作、两份独立复核、本验收记录和 `audit-assets/second-order-pi-{research,learning}-2026-10-28/`。其他未跟踪草稿和本地目录不在提交范围内。
- 研究／实施记录中的“未发布”为当时状态；本记录不把候选验收冒称已合并、部署或学生学习效果通过。

## 学习变化与依据

同学反馈困难在“找 PI”。教师提供的表格整理为文字／公式表，并补清“查表只是起点，还要检查 CF”。路线为：普通形式与短尝试 → 相同右边、不同方程的判断 → 单根／重根／零根调整 → 不给 CF 的 Q5 → 混合项及条件综合。提示、解答分别默认关闭；专项 PI 重试与原逆向综合重试分开。

实际查阅的官方配对材料为 Specimen 2018 Q7、June 2024 Q8（实际考试 30 May）及 January 2025 Q12；大纲沿用 OxfordAQA 9665 v5.2 FP2.11。不把三份材料称作完整考频分析。教师图片书名／版本未知，不冒认官方公式表。新增短活动为自拟、无官方分值。

[实施与目标对应](implementation-fm03-pi-learning-2026-10-28.md)、[章节研究](research-fm03-second-order-pi-learning-2026-10-28.md)、[教育依据及边界](research-second-order-learning-evidence-2026-10-28.md)。

## 内容审查与最终版本

[标准审查](review-fm03-pi-learning-standards-2026-10-28.md)与[规格审查](review-fm03-pi-learning-spec-2026-10-28.md)的有效发现均已关闭。三份实际源码的 SHA256 与独立增量复核一致；原有 18 条英文题干、29 个显式锚点每语言全部保留。当前各 25 条题干、39 个显式锚点。

两份复核以原本地基点 `b9b3565` 审查。新 main 的后续提交只涉及另一项化学课程；已检查 AGENTS、课程标准、共享阅读样式／布局和本次三源相对原基点无上游变化，原独立数学与双语复核仍适用于相同源码。发布候选的构建与页面检查在新基点重做。

## 本次发布候选检查

- 最新 main 加本次改版的 Jekyll 构建通过：69.727 秒。Pagefind v1.5.2 生成 477 页、2语言、61322词；这只证明生成成功。
- 二阶专题、Further 双语、Further 重试、阅读布局、前端结构五项检查全部通过；课程和相关记录 Markdownlint 通过。专题保留 14 个解族及 6 项 PI 回归核算；324 个去重 TeX，全 Further 双语检查 2923 个去重 TeX。
- 最新候选重做中英 × 390／1365 px × 明暗 8 视图，检查默认／展开帮助、公式、宽度、键盘和语言定位；正文 43 个去重链接／锚点、14 个目标路径通过。证据见[浏览器记录](audit-assets/second-order-pi-learning-2026-10-28/browser-results.json)和[源码／生成页版本](audit-assets/second-order-pi-learning-2026-10-28/source-manifest.json)。
- 已实际目视检查[手机选形表](audit-assets/second-order-pi-learning-2026-10-28/pi-table-390.png)、[桌面选形表](audit-assets/second-order-pi-learning-2026-10-28/pi-table-1365.png)、[完整指数示范](audit-assets/second-order-pi-learning-2026-10-28/first-example-continuous-390.png)、重根分步与展开零根／重试；长式保留键盘可滚动的局部区域。

## 发布边界

用户已认可预览并授权发布，尚无新版同学独立作答、重试或延后保留证据；未进行实体手机、完整读屏／WCAG 或全部考季题目复核。内容修订可通过正常回退撤销，无数据迁移。远程 CI、Code Review、合并及 Pages 结果在本 PR 中记录，不能由本地通过代替。
