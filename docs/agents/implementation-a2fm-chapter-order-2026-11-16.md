# A2 高数入口改为教材章序：实施记录（2026-11-16）

## 范围与依据

用户反馈：学习按教材顺序，网站看起来按 Specification 顺序，要求「改成教材排布」。

核对：原入口的 16 课其实已是教材章序 17→28，唯一偏离是第 28 章（28.1–28.2）排在第 27 章之前；造成「按大纲排」观感的是索引里以 FP2.1–FP2.14 编号为首列、以及「cover all fourteen syllabus topics FP2.1–FP2.14」的措辞。

教材：*International A Level Further Mathematics with Statistics*（Gaulter 等，OUP 2017，学生书 ISBN 9780198375999）。A2 Pure 为第 17–28 章，A2 Statistics 为第 29–33 章；逐章小节与起止印刷页取自 OUP 官方 look-inside 目录（`9780198411277`）。页码一律为印刷页码。

按 [课程内容长期标准](../course-content-standard.md) §2：章号只作骨架，入口仍用主题语言（章标题 + 课页主题句），不按小节机械拆页；一页可覆盖多节（18、25、26、28 各两课；27 一课覆盖 27.1–27.2）。

## 改动清单

### 1. 纯数入口 `alevel/a2-further-mathematics/index.md`（及 `zh/` 镜像）

- `## Start Here`：16 项平铺列表改为 12 个 `### Chapter NN: …` 教材章（17→28 书序，27 在 28 前），每章下一行斜体小节与印刷页码范围，再给课页与主题句；双课章用列表并在括号标注所辖小节。
- 12 个章标题均带显式锚点（`{#chapter-27-solutions-of-linear-equations}` 等），中英一致，供跨页引用。
- 首段说明「课程按教材 A2 纯数学第 17–28 章的书上章次排列」；`## Course Outline` 折叠表的列序改为「教材章节与页码 | 大纲条目 | 课」，把 FP2 编号降为第二列。
- 删除「Matrix algebra comes before linear equations…」的互换说明——27/28 已回到书序。

### 2. 第 27 课去前置依赖 `linear-equations.md`（中英）

教材 27 章（行列式与解的个数）不预设矩阵求逆，因此把原 `## Inverse Matrices {#inverse-matrices}` 段整体移入第 28 课：

- 迁出 `### Example 2: use a supplied inverse {#example-2}` 与 `### Joint task: construct the inverse, then use it {#joint-inverse-task}`；
- 第 27 课 `toc_headings` 去掉 `#inverse-matrices`，简介、`**Learning:**` 路线、`Before you start` 不再提逆矩阵；
- 恢复段落改指本课已有的 `#example-2` 与 `#plane-configurations`；
- 速查表「非零行列式」行改为「用消元，或用第 28 章的逆矩阵路线」。

### 3. 第 28 课承接 `matrix-algebra.md`（中英）

在 28.1 求逆示范之后新增 `### Using a supplied inverse to solve a system {#supplied-inverse-solution}`（中文 `### 用给定的逆矩阵解方程组`），内容即原第 27 课例 2：验证双侧逆、左乘右端、代回检验。原 `#joint-inverse-task` 不再另设，因为本课既有 `#inverse-system-task` 已要求自行构造逆并解方程，重复布置会变成同一题计两次独立证据。

### 4. 学习路径链（中英）

按书序改接：26 → **27 linear equations** → **28 matrix algebra** → 28.3 eigenvalues。

- `linear-equations.md`：Previous `lines and planes`，Next `matrix algebra`；
- `matrix-algebra.md`：Previous `linear equations`，Next `eigenvalues and eigenvectors`；`#inverse-completion` 的指路与 Sources 里 `eigenvalues follow in 28.3` 同步；
- `eigenvalues-and-eigenvectors.md`：Previous 改为 `matrix algebra`，次链改回 `linear equations`。

### 5. 五课补教材身份行（中英）

`vector-products-and-coplanarity`（第 26 章 26.1–26.2、26.6，pp. 320–328、338–341）、`lines-and-planes`（26.3–26.5，pp. 329–337）、`matrix-algebra`（28.1–28.2，pp. 354–360）、`linear-equations`（27.1–27.2，pp. 346–350）、`eigenvalues-and-eigenvectors`（28.3，pp. 361–366）此前只在正文写考纲编号，现按其余课页格式在 `**Before you start:**` 前补一行 `Textbook: Chapter …, in *International A Level Further Mathematics*.`（中文「教材：…」）。第 27 课删段后例题编号由 1、3、4、5 顺次改为 1–4，相关交叉引用同步。

### 6. 统计入口 `statistics/index.md`（中英）

`## What each lesson helps you do` / `## 每一课解决什么问题` 由 10 条平铺列表改为第 29–33 章（29.1–29.3 MGF、30 估计量、31 区间估计、32 检验一、33 检验二），课页顺序未变，仅补章号、小节与页码；锚点 `#chapter-29-…` … `#chapter-33-…` 中英一致。

## 验证

- 构建：`D:/Ruby34-x64/bin/bundle.bat exec jekyll build --disable-disk-cache`，退出 0，约 47–55 s。
- 测试（全量 `scripts/test-*.js`，91 个通过）：除与本改动无关的既有失败 `test-vectors.js`、`test-integration-applications.js`、`test-mechanics-forces.js`、`test-tmua-presentation.js`、`test-ux-optimizations.js`（缺 playwright）外全部通过；其中 `test-a2-heading-hierarchy.js`、`test-anchor-navigation.js`、`test-further-bilingual.js`、`test-fm04-content.js`、`test-subject-index-translations.js`、`test-chinese-typography.js`、`test-reading-layout.js` 与本改动直接相关且通过。
- 实际阅读：1440 px 与窄屏各看中英入口、统计路线、第 27/28 课改动段；无横向溢出，宽矩阵显示已拆成两行。
- 行尾：本次改动文件统一 LF（编辑时曾把 `lines-and-planes`、`vector-products-and-coplanarity`、两处 `statistics/index` 写成混合 CRLF，已按 HEAD 的 LF 归一，`git diff` 只剩语义改动）。

## 未做与待确认

- 未改 `toc_headings`：侧栏仍只列 h2，章标题不进目录（若要侧栏逐章跳转需另议，会影响所有 reading_layout 页面的密度）。
- FM04 的 FS2 大纲条目与教材 29–33 章的小节对应只写到章一级，没有逐条 FS2.1–4 映射。
