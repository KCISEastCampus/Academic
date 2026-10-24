# MA03 algebra rollout — 2026-10-23

状态：八页正文及本记录已完成作者源码自检并冻结，待主代理统一构建与独立交叉复审；浏览器阅读及学生试用未验收。

## 边界与起点

- 工作树 `D:/GitHub/Academic-ma03-numerical`；基线 `bb18c70fb93942ffe0f00f2795e9e1d7f89c3ebe`；开工 Git status 无输出。
- 执行范围：`alevel/a2-mathematics/` 及 `zh/` 对应的 functions、modulus-and-transformations、algebraic-fractions-and-division、partial-fractions 八篇正文及本记录。未发现这四章独立专题测试；全局 test-bilingual/test-pure-consistency 只可读，不修改。
- 用户授权分组并行修订；不 commit/push/build，不写原 `D:/GitHub/Academic` dirty 课程稿，不改共享 CSS/布局/图像/其他组。
- 已读工作树 AGENTS、course-content-standard v1.1、MATH_FORMULA_GUIDELINES、codex-collaboration，以及八篇原文、数值方法样章和其专题测试。复用 reading_layout/worked-example/lesson-check，保持旧锚点、元数据、题图与可靠计算。
- 原文问题：练习标题提示分类/选法；独立题缺少每题边界；部分分式把新知识的形式选择放在教学之前且紧随可见答案；错误恢复大多只叫重做原题，延后复查无实际新任务。

## 设计卡（先于正文修改）

| 页面 | 中心问题与可观察目标 | 精确先修与回补 | 模型、图的用途、示范与独立考查 |
| --- | --- | --- | --- |
| Functions | 一条公式何时构成可逆映射？求范围、判断一一性、保持复合的输入条件、选择反函数分支并据图交换坐标 | AS algebra #l02 配方/区间/转折点；代入和解方程；本页 domain-and-range 回补 | 公式＋定义域共同定义函数；先范围再复合再反函数；保留 inverse SVG 作反射示范；另用坐标和定义域画独立草图，不能靠读图注抄答案 |
| Modulus | 改变输入与改变输出怎样影响整条图？以点检验组合变换，分情况/平方检验条件，读交点判不等式区间 | AS algebra #l05 点变换；#l02 直线二次图/符号区间；Functions 定义域 | 保留 modulus SVG 区分内外绝对值；图用于推理而非装饰；独立任务要求自行描图、标截距、联系图像次序与解集 |
| Algebraic fractions/division | 表达式改写后哪些输入仍不可用？化简/四则、余数因式定理、除法与次数条件 | 展开与合并；AS algebra #l02 二次式因式分解、#l03 多项式代入；Functions 定义域；参数题内示范联立消元 | 展开验证恒等式，代入只在多项式中；例5连续保留余数/系数/长除法；独立任务保留商、非首一线性除式和限制条件 |
| Partial fractions | 怎样选择可积分的分解并证明它？按次数/因式选形式、求常数、检验、积分及区间有效性 | 前页 algebraic-division；Integration logarithmic-form 与 standard-integrals；链式求导 | 先用已知次数诊断，再教分解结构；完整示范到通分检查；重复因式、三线性因式、方法混合任务及定积分有效性作独立产出 |

## 逐目标证据表（已对照最终源码，非学生达标声明）

| 目标与官方条目 | 先修/回补 | 概念与示范 | 独立产出 | 判断依据、错误恢复与新重试 |
| --- | --- | --- | --- | --- |
| F1 定义域/值域/分段/有限定义域 P2.1 | AS algebra #l02；domain-and-range | 原例1/2与一一性解释 | practice Q1/2/6 | 转折点/分支/有限输出；retry-range、retry-piecewise；later-review |
| F2 复合及条件 P2.1 | 代入/不等式；composite-functions | 原例3＋错误诊断 | Q3 | 先内后外，保留原域；retry-composite |
| F3 反函数、分支及图像 P2.1 | 一一性/平方根；inverse-functions | 原例4/5＋保留图 | Q4/5及新 Q7 图像任务 | 定义域值域互换，负分支，交换坐标；retry-inverse，later-review |
| M1 绝对值图像 P2.1 | Functions 范围；modulus-graphs | 原例1/2和 SVG | Q1/2 | 分清输入/输出、只翻负部分；retry-graphs |
| M2 组合变换 P2.1 | AS algebra #l05 | 原例3/4＋输入坐标方程 | Q3 | 轴/方向/因子、顺序和点；retry-transform，later-review |
| M3 方程和图像不等式 P2.1 | AS algebra #l02 | 原例5–7 | Q4–6 | 分类条件/非负平方/交点与区间；retry-equation、later-review |
| A1 化简/四则与限制 P2.1（四则属先修回补） | AS algebra #l01/#l02 | 原例1–3 | Q1–3 | 整因式相消、原分母和除数非零；retry-domain、retry-operations |
| A2 非首一余数/因式定理 P2.1 | AS algebra #l03 | 原例5及 factor-theorem | 原 Follow-up 独立边界＋新参数题 | 代入除式的根、证明链；retry-remainder，later-review |
| A3 多项式除法 P2.1 | 次数/合并同类项 | 原例4–6 | Q4/5 | F=GQ+R，deg R<deg G，保留商；retry-division |
| P1 分解形式与常数 P2.1 | algebraic-division | method、原例1/2 | Q1/2＋check-three-factors | 不同/重复因式，清分母，恒等式验证；retry-form |
| P2 积分和方法选择 P2.7 | Integration 对数/幂积分及求导 | integration、原例3＋重复项 | Q2–4＋check-methods | 商/线性系数/对数绝对值/幂规则；retry-integral，later-review |
| P3 定积分条件与核验 P2.7 | 定积分定义/定义域 | integration 连续区间限制 | Q4＋稍后条件判断题 | 区间内分母非零；跨极点不能直接套端点；later-review |

## 来源与实际阅读边界

- 当前资格页：[OxfordAQA 9660 qualification](https://www.oxfordaqa.com/qualification/international-as-and-a-level-mathematics-9660/) 。沿用9660/MA03，不迁移9760；不用误指 FM01 的 sample 链接。
- 大纲：[Mathematics 9660 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf) 。已核 PDF 36页、9660、Version5.2，P2.1 印刷p21/PDF20；重复一次因式为范围，不可约二次因式不考。P2.7 积分为本页应用，非把所有积分方法收入本组。
- 官方出版物镜像 [January 2025 MA03 question paper](https://aqamat.alevelclouds.com/25_01_QP_P2.pdf) / [January 2025 MA03 mark scheme](https://aqamat.alevelclouds.com/25_01_MS_P2.pdf)：已核 January2025、9660/MA03、QP32页/MS22页、QP日期13 January2025、120分。实读 Q1（QP3/MS4）、Q6(a)(b)(c)（QP12–13/MS11）；核对代入线性除式的根、列方程、求系数；反函数交换变量及重排；复合和值域；变换轴向和因子。原文分数身份不转移到自拟题。
- 补充镜像 [January 2024 MA03 question paper](https://aqamat.alevelclouds.com/24_01_QP_P2.pdf) / [January 2024 MA03 mark scheme](https://aqamat.alevelclouds.com/24_01_MS_P2.pdf)：已核 January2024、9660/MA03、QP32/MS22页、12 January2024、120分。实读 Q2（QP3/MS5）图像与模值不等式；Q10(a)（QP22/MS18）三线性因式部分分式；Q14(a) January2025（QP26/MS21）参数分式恒等式另作交叉参考。已读渲染原页核清绝对值、分母及分式符号；MS18 的三线性形式与清分母步骤、MS21 的参数恒等式、MS5 的图像分段和不等式边界均已目视核对。
- 全部新增课堂题、重试和解答为自拟，无官方分值；保留模值例7为大纲示例、本站解答的身份。未逐题读取其他 QP/MS，不声称检查全卷。未读考官报告。
- PDF/临时验证放 `C:/Users/mi/AppData/Local/Temp/academic-ma03-algebra-20261023`。浏览工具截图有 cache miss，已用本地 pypdfium2 渲染、读原页核数学；不修改输入PDF。下载文件 pypdf 有非致命 object-offset 警告，页数及渲染需互核。

## 验收记录

### 实际内容改进与逐目标自检

- **Functions（F1–F3）：**保留配方、分段/有限域、复合及反函数完整示范。`#check-inverse-graph` 让学生实际画出受限分支、端点及交换坐标；`#retry-range` 从跨转折点域改为单调子域，检验范围与负根选择；`#retry-composite` 两个复合最终同为 x，但定义域分别从2、4开始，须独立检查输入；`#retry-piecewise` 检查边界与有限输出集合；`#later-review` 合并复合限制、反函数和草图。`#retry-inverse` 别名移至R1题干处，避免跳入关闭答案。诊断题标题改为中性，英文题干在中文页保留。
- **Modulus（M1–M3）：**输入匹配方程解释水平因子为何取倒数，完整例3保持顺序、坐标与检查连续；`#check-point` 提供一次受支持尝试。`#retry-graphs` 加入受限原域，必须画不相连的输入绝对值图像，不能只抄示范V形；`#retry-transform` 将反射、平移与新域一起检验；`#retry-equation` 核验候选的所属情况及右侧非负。`#later-review` 要求两图顶点、交点、图像次序及不等式区间，再检验负水平系数的点变换。保留可靠示范SVG，独立图像题的答案只在关闭解答中出现。
- **Algebra（A1–A3）：**非首一线性除式由多项式恒等式推导代入点，例5保留系数比较、长除法及展开检查的连续性；`#check-remainders` 有两条余数条件及消元步骤。原Q5把未学的部分分式明确延后到下一页，而本页先完成商、余数、原域与恒等式。`#retry-domain`、`#retry-operations` 区别约分后的公式与原表达式可用输入，后者比较乘法与除法在零值处的差别；`#retry-remainder` 与 `#retry-division` 检验非首一代入点、余数次数与商。稍后题 `#later-review` 同时比较原二次除式余数5x−10和约分后一次除式余数5，并明确本题原分子记作P。
- **Partial fractions（P1–P3）：**入口只先检查已学次数，不要求在教分解结构前猜形式；用逆向通分及重建分子解释重复因式。积分系数从链式求导推导。`#check-three-factors` 保留三线性因式、清分母、三个常数、积分及重组检查；`#check-methods` 混合直接对数形式与部分分式，并接受其他正确方法。`#retry-form` 检查非首一重复因式及幂积分，`#retry-integral` 检查等次数先除法和商的积分。`#later-review` 先判断跨越极点的端点代入为何无效，再做有效区间的确切定积分，不额外要求反常积分理论。

每篇均有错误→具体回补→同目标新题、可定位的 `#later-review` 与下一主题。所有学生尝试各有边界，提示与解答分别默认关闭；原有可靠正文和示范图未删减为速查。速查保留在练习和回顾之后。

### 发现、修复与回查

| 发现 | 本次修复 | 实际回查 |
| --- | --- | --- |
| 部分分式先修“对数积分”误指分部积分中的ln(x)例题 | 改指 `integration/#logarithmic-form`，保留标准积分入口 | 英中目标源文件与片段均存在 |
| 余数参数题先修把联立方程指向多项式L03 | L03只承担代入；因式分解指向L02，并在参数解答中补消元 | 两方程相减得3c=12，b=3、c=4满足两条原余数条件 |
| 模值行内平移向量的双反斜线被 Markdown 吞掉，主代理统一构建发现 test-vectors/pure 失败 | 双语各六处全部改用等价的 `\binom{a}{b}` 列向量，适用于原表格和列表，保留全部坐标及变换顺序；未改测试 | 源码无剩余 pmatrix；双语公式逐项一致；全局生成 HTML 回归仍由主代理重建后验收 |
| 中文自然语序造成公式次序不同及少量帮助内容多出独立数学标记 | 调整英中叙述顺序并补齐相同数学标记；未删除必要解释、图像或条件 | 按原 `test-bilingual.js` 数学提取正则逐项完全相等 |
| 原练习标题提前提示方法，且下一题边界不明显 | 中性标题配原显式ID，各题独立section及两个关闭details | 八页原ID集合保留，无重复ID，无嵌套题框或提示框 |

### 实际验证与可复现材料

临时自检：`C:/Users/mi/AppData/Local/Temp/academic-ma03-algebra-20261023/verify.py`；结果 `verification-results.json`。这些文件仅在任务scratch，未新增仓库测试，未改全局测试。

1. **数学作者复算：**用精确有理数多项式运算重建新增分式恒等式、商/余数及参数条件；分别检查原域限制。手工核对函数单调支、域值域交换、分段并集、受限模值图与输入匹配；脚本检查关键端点/映射和区间代表值，后者仅为检查，不代替全区间推理。新增积分按链式/幂规则复核，并在多个合法区间做数值求导辅助检查；定积分端点和符号分别检查。通过，不宣称每个原题均获得独立代理复审。
2. **英中精确对齐：**用现有全局脚本相同正则 `\$\$[\s\S]*?\$\$|\$[^$\n]+\$` 比较全部公式，四对均逐项相等：Functions **351/351**；Modulus **349/349**；Algebra **251/251**；Partial fractions **169/169**。全部独立英文题干、新task块和原示范英文题干对齐；逐项检查新增提示、答案、条件与错误反馈。
3. **源码结构：**八页章节ID及层级双语一致；原锚点和题图目标保留；身份、学科、语言、permalink等元数据保留。为复用样章阅读目录，有意将八页 `toc_headings` 由h2/h3/h4改为h2/h3，并启用reading_layout；原长除法h4仍属于例5，未改其级别。所有本页与站内源链接及片段存在，题框/例框和details配对，无默认open、嵌套题框、重复ID、控制字符、未配对美元符或TeX花括号，数学中无ASCII竖线。
4. **Git检查：**仅对本组八篇和本记录运行 `git diff --check -- <assigned paths>`，通过。本组未改已有专题测试，因为没有这四章专属脚本；主代理统一运行渲染相关全局检查。工作树出现其他组变更属并行作业，未处理或覆盖。

这些结果是作者源码与数学自检，不是构建或阅读验收。当前 `test-a2-heading-hierarchy.js` 读取页面声明的TOC选项并核生成HTML；本组未运行依赖 `_site` 的测试，不使用旧 `_site` 作为证据。

### 冻结与未验收项

- 本组八篇正文与本记录已冻结，供主代理构建及交叉审查；源文件指纹见下表。除明确复审反馈外不再改写。
- **独立内容审查：待主代理安排。**本次作者按目标复算不能替代独立审查通过。
- **Jekyll构建/生成HTML/全局适用测试：未执行，按用户要求交主代理统一完成。**未 commit、push 或修改共享CSS/布局、其他组、原Academic dirty稿。
- **实际桌面与手机阅读、键盘展开、深浅主题、MathJax、目录/旧锚点、语言切换：待统一构建后验收。**源码闭合和链接存在不等于浏览器行为通过。
- **学生首次独立作答、新重试与稍后回顾：未试用。**尚无学习效果证据，不声称课程已达标或学生已掌握。


| 冻结源文件 | SHA-256前12位 |
| --- | --- |
| `alevel/a2-mathematics/functions.md` | `a333a34f64fc` |
| `zh/alevel/a2-mathematics/functions.md` | `43b56a4cd58a` |
| `alevel/a2-mathematics/modulus-and-transformations.md` | `bec519d1d17b` |
| `zh/alevel/a2-mathematics/modulus-and-transformations.md` | `d6b577fafd52` |
| `alevel/a2-mathematics/algebraic-fractions-and-division.md` | `67b50ad110d4` |
| `zh/alevel/a2-mathematics/algebraic-fractions-and-division.md` | `6e6fa2da9409` |
| `alevel/a2-mathematics/partial-fractions.md` | `90f822bfc35f` |
| `zh/alevel/a2-mathematics/partial-fractions.md` | `f8dd88667b5f` |

### 主代理构建反馈后的局部修复与重新冻结

2026-10-23：按主代理构建反馈，仅重开双语 modulus-and-transformations.md 的平移列向量表达及本记录。各六处行内 pmatrix 改为 binom，解决 Markdown 对行分隔的吞并；数值、题目、条件和课程结构不变，不改全局或专题测试。此前“正常双反斜线”源码自检不足以保证实际渲染，此项由主代理生成 HTML 发现，现保留发现及修复证据。重新运行八页作者 scratch 自检（含原锚点/元数据/题干/精确公式序列及链接）、确认每页六处 binom 且无 pmatrix、检查本次三文件 diff 后重新冻结；最终版本以更新后的哈希为准。构建和实际 MathJax 回归仍交主代理，通知 Wegener 按最终哈希复核。

### R-02 定点修订后的最终冻结指纹

2026-10-23：Wegener 的 R-02 指出中文 partial-fractions 页的符号纠错链接范围较宽。主代理已将该链接收窄为 `#check-signs`，并请 Wegener 定点关闭。本次只核对课程源码中的链接、目标锚点及文件指纹，更新本记录；未修改课程，也不据此声称 R-02 已由 Wegener 正式关闭。

上方冻结表保留为历史快照，其中该中文页的旧指纹 `f8dd88667b5f` 已被下列最终指纹替代，其余行不因本次记录更新而变更：

| 最终冻结源文件 | SHA-256（完整） |
| --- | --- |
| `zh/alevel/a2-mathematics/partial-fractions.md` | `80869fe1902b6cfd4e1ea71694abbcfe90d317ba5ffad9b54d0819ea75159e8d` |

本组课程内容保持冻结。`review-ma03-functions-series-rollout-2026-10-23.md` 独立交叉复审已完成，主代理已收到独立复审结论，该报告亦冻结。本轮仅更新作者记录，未执行 build、commit 或 push；统一构建与浏览器回归由主代理负责。
