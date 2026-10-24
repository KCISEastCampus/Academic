# MA03 几何、积分应用与证明扩展记录

日期：2026-10-23。基线：`bb18c70fb93942ffe0f00f2795e9e1d7f89c3ebe`。工作树：`D:/GitHub/Academic-ma03-numerical`。

## 范围和状态

本组仅修改 `alevel/a2-mathematics/{integration-applications,vectors,mathematical-proof}.md`、相应 `zh/` 正文、`scripts/test-integration-applications.js`、`scripts/test-vectors.js` 和本记录。初始状态只有本组新建的 scratch；不改原 Academic 的 dirty 稿、不改 integration/index、共享 CSS/布局或其他组；不 commit/push/build。课程标准 v1.1、AGENTS、公式指南与协作文件已读，复用 Numerical Methods 的 reading_layout/worked-example/lesson-check；用户已授权样章后的扩展。以下设计卡与证据表在正文修订前落盘。状态：作者源码及数学自检已完成；交叉复审已回传 P2/P3，本轮按用户授权完成下述最小来源修补，再次冻结待 Gibbs 定点关闭。构建、实际页面与学生试用的验收不由本次来源修补证明；本记录不代替复审者关闭发现。

## 设计卡

### Integration applications

中心问题：同一曲线如何因所求量而改变积分式？目标：根据奇偶幂选择恒等式并核对链式系数；由草图确定总面积分段与上下曲线；依据旋转轴、截面半径、变量及积分限建立体积积分。先修：幂函数与三角标准积分、换元、弧度和二倍角；回补 integration 的 standard-integrals/substitution、三角公式页 double-angle-formulae。保留 8 个可靠示范、原面积 SVG、7 题英文题干与旧锚点；例题边界明确；练习先自行画图再开帮助。新增变化条件的恢复题和延后跨表征任务，不能以只换数代替迁移。

### Vectors

中心问题：如何把几何约束写成同维、有方向、有共同参数的向量关系？目标：二维与三维运算、连点与单位向量；直线和四种位置关系；方向角与顶点角；用垂足构建距离。先修：坐标差、勾股、联立线性方程、余弦；回补 AS coordinate-geometry/algebra。补二维概念与运算顺序、实际箭头作图及二维直线交点；保留原 7 个示范与垂足 SVG。通过二维几何综合检验自行选择向量、角与高度，而非单看算式。

### Mathematical proof

中心问题：什么证据能够覆盖命题的全部允许取值？目标：区分推出和等价、必要与充分；直接证明覆盖全范围；反证法正确否定结论并指出矛盾；反例满足假设且否定结论；未指定方法时选择证法。先修：整数奇偶、因式分解、最简分数和有理数运算封闭性；补充除以非零数和分母限制。保留原 3 个示范、3 题与锚点；另设不标方法的命题判断、符号任务和同目标重试。归纳法不额外列为此 MA03 页必考内容。

## 逐目标证据表（正文修订前设计，交付时已逐项核对实际位置）

所有位置为相应双语页面共用锚点。判断点是自拟教学检查点，无官方分值。

| 目标与范围 | 先修/回补 | 讲解、连续示范 | 独立产出 | 判断、错误恢复与新重试 |
| --- | --- | --- | --- | --- |
| I1 三角积分：P2.4 与 P2.7 | 标准积分/换元、二倍角 | trigonometric-integrals；原例 1–4 | practice Q1–4；review-later | 恒等式、完整角、系数、定义区间；repair-trig |
| I2 总面积/曲线间面积：AS 回顾衔接 P2.7 | 交点/函数符号/定积分 | area；原例 5–6 和原图 | Q5–6 自行作图；review-later | 分段且被积高度非负；repair-area |
| I3 x/y 轴旋转体：P2.7 | 截面圆面积/变量与限 | volume-of-revolution；原例 7–8 | Q7(a)(b)；review-later | 半径平方、变量、限、单位；repair-volume |
| V1 二三维向量运算：P2.10 | 坐标/勾股 | vectors-and-position-vectors、二维连续示范 | check-plane；Q1；mixed-geometry | 同维、终点减起点、单位模；repair-direction |
| V2 直线与交点：P2.10 | 联立方程 | straight-lines、pairs-of-lines；原例 2–4 | check-plane；Q2–4；review-later | 同一参数满足全部分量/另参数代表另线；repair-lines |
| V3 数量积、角与几何：P2.10 | cos/平方根 | scalar-product；原例 5–6、顶点方向补步 | Q5；mixed-geometry | 有向角不随意取绝对值、同一顶点出发；repair-angle |
| V4 垂足、距离、三角形面积：P2.10 应用 | 垂直/底高 | foot-of-the-perpendicular-and-distance；原例 7 | Q6–7；mixed-geometry | 点在线上且连接向量垂直；repair-foot |
| P1 数学语言、等价和条件：Unit P2 引言 | 解方程/定义域 | statements-and-symbols | check-language；review-later | 双向与定义域皆有效；repair-logic |
| P2 直接全范围证明：Unit P2 引言 | 整数表示/因式分解 | direct-proof；原例 1 | Q1、check-method；review-later | 任意整数/穷尽分类、不靠代入；repair-direct |
| P3 反证法：Unit P2 引言 | 最简分数/有理数封闭性 | proof-by-contradiction；原例 2 | Q2；check-method | 相反假设→已知矛盾→结论；repair-contradiction |
| P4 反例与自行选证法：Unit P2 引言 | 命题范围/假设结论 | disproof-by-counter-example；原例 3 | Q3；check-method；review-later | 反例在域内且满足前提；repair-counterexample |

## 来源与实读边界

- 当前资格页：[OxfordAQA International AS and A-level Mathematics 9660](https://www.oxfordaqa.com/qualification/international-as-and-a-level-mathematics-9660/)。保持 9660/MA03，不迁往 9760；不使用误指 FM01 的 sample 链接。
- 当前大纲：[OxfordAQA Mathematics specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)。已核正文 9660、v5.2、36 PDF 页；Unit P2 引言（印刷 p19）、P2.4、P2.7（印刷 p23）和 P2.10（印刷 p24）。面积为先修回顾，垂足为向量应用，不将其另编为大纲条目。
- 官方出版材料镜像：January 2025 `25_01_QP_P2.pdf` / `25_01_MS_P2.pdf`（[出版物镜像站](https://aqamat.alevelclouds.com/)），正文 9660/MA03、2025-01-13、120 分、QP 32 页、MS 22 页、Final v1.0。分配主题实读 Q4(a–c) 与 MS pp8–9、Q5 与 MS p10；用于保留连点方向、数量积→角、分别求参数与核第三分量、完整半径平方→二倍角→积分→代限的关键证据，不复制为官方题。
- 证明页仍为自拟教学题。January 2024 Q12(a) 的一般参数论证及配套 MS 不能用作反证法/反例的配对评分依据。本次另读下列 7357 配对材料作为其他资格补充教学依据，不声称已核到独立对应的 MA03 反证法/反例题。

- January 2024 官方出版 QP/MS 镜像：[QP](https://aqamat.alevelclouds.com/24_01_QP_P2.pdf) / [MS](https://aqamat.alevelclouds.com/24_01_MS_P2.pdf)。正文核 9660/MA03、2024-01-12、120 分、QP 32 页、MS 22 页、Final v1.0；视觉实读 Q12(a) QP p26 与 MS p21，并读其余 Q12 QP p27、MS p22 文本。核到一般参数关系必须覆盖全部分量、垂足需在线且垂直、三角形底高与角的向量选择。

- **其他资格补充教学依据：**作者 Sagan 于本次修补实读官方 AQA A-level Mathematics 7357/2 June 2023 [QP](https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-73572-QP-JUN23.PDF) pp16–17 Q10(b)(c) 与 [MS](https://filestore.aqa.org.uk/sample-papers-and-mark-schemes/2023/june/AQA-73572-MS-JUN23.PDF) p16；身份、方法链及适用边界见下文 P2/P3 修补记录。

## 实施结果与具体发现

| 页面 | 保留的主线 | 本次局部完善与可观察产出 |
| --- | --- | --- |
| integration-applications（双语） | 原 8 个示范、7 个练习、面积 SVG 及 20 个旧标题锚点 | 解释恒等式/微分配对；圆盘由区域、旋转轴和半径建立；练习先自画图；3 个原因对应的新重试；review-region 对同一区域分别求面积与体积 |
| vectors（双语） | 原 7 个示范、7 个练习、垂足 SVG 及 21 个旧标题锚点 | 增加二维箭头、同维运算与标量顺序；保留三维并检查全分量；区分顶点角和直线锐角；mixed-geometry 连接角、垂足、面积；4 个新重试和全参数 review-point |
| mathematical-proof（双语） | 原 3 个示范、3 个练习及 12 个旧标题锚点 | 明确域、量词与否定、充分必要、除零；解释平方整除的余数论证；check-method 不指定证法；4 类恢复与新重试；review-inequality 改变定义域并要求全范围论证 |

这些任务数量是实际内容的结果，不作为固定模板或质量指标。全部题干仍为自拟英文题；中文解释和帮助与英文数学、假设和任务对齐，没有添加官方分值。

发现与修复：

1. 初次包裹示范时把 H2 下的示范直接降到 H4。已依据真实父主题修复：积分应用/证明示范为 H3；向量先有 plane-vectors、three-dimensional-vectors 两个 H3，plane-worked 和原例 1 为其下 H4，其余示范为所属 H2 下的 H3。旧 ID 不变；双语标题树一致且无跳级。未改共享 heading 测试。
2. 主代理指出公式序列不一致。已补全两种语言中缺失的数学标记、统一对应解释的公式顺序：积分应用 257/257、向量 372/372、证明 196/196，逐项精确一致；没有删除必要数学或帮助。具体包括 y 轴限的起点说明、量词否定中的 P、充分必要关系、n/k 的整数条件与倒数证明的非零条件。
3. 作者末轮发现 check-plane 把箭头三角关系写为无箭头的 OA+AB=OB，可能误读为长度等式；双语已明确为向量箭头等式。向量速查的“全部三个方程”改为“所有分量”，适用于本页二维和三维。
4. 积分应用例 8 后关于面积/体积的一般比较移出该例边界，学生可辨示范结束和概念承接。原练习标题中的方法名改为中性题号，保留旧锚点；提示、完整解答分别默认关闭，每题边界独立。
5. 前期 Python 字符串曾把两处 TeX 转义为控制字符，已修复；最终六页控制字符检查通过。向量测试的数组比较现在也先核对维数。

## 作者数学自检

积分应用逐题重新求导/积分：原三角不定积分及新 sin²x cos²x 的导数均恢复原式；新修复区域的带符号积分为 2/3、总面积为 1；y 轴旋转新题为 32π/5；延后区域面积为 1/2、x 轴体积为 π²/16。脚本对 8 个原函数作数值求导，并从原被积函数数值积分交叉核 16 个定积分/面积/体积结果，另人工核恒等式、链式系数、函数定义区间、区域/积分变量/限与单位。

向量逐题重新核算原例/练习和新题：二维 AB=(4,−2)、交点 (1,1)；顶点角 135°；综合题角 63.4°、垂足 (2,1)、距离 2√5、面积 10；负标量重试方向 (6,−8)、模 10；异面重试候选 t=2、s=5 的第三分量为 4 与 7；恢复垂足 (2,2)、距离 √2。全参数任务用统一关系 t=2u 覆盖任意实数，垂直条件为 24u−2=0，u=1/12。脚本取值只交叉检查运算；全参数结论依据恒等关系，未用有限取样冒充证明。

证明全部示范/练习由作者重建逻辑，另以精确系数与有理数反例检查运算：奇数平方、模 3 的三种穷尽情形、连续整数和及乘积均覆盖负整数与零；n² 奇 ⇒ n 奇保留整数域并导出矛盾；非零有理数乘无理数与倒数反证均检查除数非零；反例分别满足域与前提；x²=2x 不丢 x=0；√(x²)=x 当且仅当 x≥0；x+1/x≥2 的全正实数证明在除以 x 前说明正性、等号 x=1，扩至非零实数用 −1 否定。上述是作者自检，不是独立复审；反证法/反例现补入已实读的 7357 官方 QP/MS 方法依据，身份为其他资格补充教学依据，不冒称 MA03 配对题。

## 实际检查与未验收项

已执行：

- `node scripts/test-integration-applications.js --source-only`：通过，数学及英中任务条件、独立题边界、关闭的提示/解答。
- `node scripts/test-vectors.js --source-only`：通过，原有与新增二维/三维、角、垂足、参数、维数及双语任务条件。
- `scratch/ma03-geometry-proof/source-audit.py`：通过，六页的精确数学序列、标题树无跳级且双语一致、原元数据（允许 toc/reading 调整）、旧 ID、原图及替代文字、英文示范题干、独立题干、每题两个关闭的帮助区、section/details 平衡不嵌套、页内与所链先修的源码目标可定位。结果保存 `scratch/ma03-geometry-proof/source-audit-result.json`。
- 本组六页及两个脚本的 `git diff --check`：通过；冻结后按清单再次核对。

未执行：Jekyll 构建、生成 HTML 的专题脚本默认模式、全局 test-bilingual/test-a2-heading-hierarchy、浏览器桌面/手机实际阅读、主题、键盘折叠和实际语言切换。这些由主代理统一构建与验收；源码路径存在不等于实际页面体验通过。没有学生试用；交叉复审 P2/P3 的定点关闭待 Gibbs 确认。

## 冻结与交叉复审交接

本组停止修改正文和专题脚本，交主代理安排独立复审；后续若有反馈，按新分配解冻并重检受影响部分。建议复审者独立重建三类关键证据：

- 不看作者答案，按 y 轴区域画切片并列式；对带符号积分/总面积及延后题解释量纲和被积函数变化。
- 自画二维三角形、从顶点选方向，并独立求垂足/面积；对三维异面与全参数命题检查全部分量和运算次序。
- 不指定证法地完成 check-method 与 review-inequality；核全部允许值、否定方式、除数和等号条件，单独审查中文说明与英文题意。

交叉复审已回传 P2/P3，作者本轮仅作下述来源与链接修补；不能据作者修补记录写“发现已由独立复审关闭”。构建/阅读验收与学生试用分别记状态。


## 2026-10-23 交叉复审 P2/P3 最小修补

本轮仅改英中 mathematical-proof 的来源折叠区及本记录；依据 Gibbs 的 review-ma03-geometry-proof-rollout-2026-10-23.md，不改原数学、题干、提示、解答、锚点、元数据或其他文件。

- **P2：身份与实际阅读。**作者 Sagan 亲自读取上述官方 filestore PDF 正文封面和 QP pp16–17、MS p16：AQA A-level Mathematics 7357/2，June 2023；QP 40 页、满分 100，MS 28 页、Version 1.0 Final。题号与页脚代码相符。本次依据网页 PDF 正文读取；未把失败的 QP 网页截图计作视觉验收，也未把复审者先前阅读回填为作者原先已读。
- **反例方法链。**Q10(b) 要否定有理数与其倒数之和总严格大于 2 的主张。核对 MS 后，作者用取 1、所得和等于 2 独立检查：取值有理且非零，倒数有定义，并明确比较后否定严格不等式；只报数字不够。对应本页检查域、前提与原结论失败的证据。
- **反证方法链与条件。**Q10(c) 从所求严格不等式的否定出发，乘以正的两数之积，移项、因式分解得到差的平方非正；两数不同保证该平方严格为正，指出冲突并回到原结论。作者核清乘积正性和平方严格正的条件。QP 为不同的正数；MS 有较窄的正整数措辞，本页不据此收窄正实数范围。
- **来源边界。**英中来源区均明确标为“其他资格补充教学依据”；9660 MA03 范围仍以 v5.2 大纲为准，全部现有任务仍为自拟题，不移植 7357 的分值、AO 或评分细则，也不声称找到了 MA03 对应题。January 2024 Q12(a) 保留为全参数论证依据。
- **P3 与检查。**实施记录三处裸 URL 改为描述性 Markdown 链接。三文件 markdownlint、限定三路径的 git diff --check 通过；来源区前的英中页面字节与修补前相同，全页数学序列仍为 196/196 且逐项一致。新增英中来源说明人工对齐。本轮没有 build、push、commit 或浏览器验收；再次冻结交 Gibbs 定点复核 P2/P3。

## 冻结文件清单（SHA256）

以下八个内容/测试文件已冻结；本记录为第九个交付文件。原 scratch 的 freeze-manifest.json 是修补前快照，本轮按三文件授权未改它；当前两篇 proof 以本表新 hash 为准，本记录的新 hash 另在交接消息报告，避免自引用。

| 文件 | SHA256 |
| --- | --- |
| `alevel/a2-mathematics/integration-applications.md` | `dcf70289c4a8e8e47f17da06506e85199edc347158791d07d4b453c8d6588eb1` |
| `alevel/a2-mathematics/vectors.md` | `470e1e14ecdcca725ddf33e2883502d7e79dfeb70c9a9ec0ea7e6bdd1272ae7a` |
| `alevel/a2-mathematics/mathematical-proof.md` | `9349fc090d999dc788055aea6370064ff3b8cc1a8a96527c08d5258f1e4cd72b` |
| `zh/alevel/a2-mathematics/integration-applications.md` | `123e0b7452d52440fc7ee2073447407d797ef31b9d2f96f5738abd10ef7f7007` |
| `zh/alevel/a2-mathematics/vectors.md` | `7ac5d029bea6dee887aa8031405b5ce891c354adaa4bf38187918c1e61d71565` |
| `zh/alevel/a2-mathematics/mathematical-proof.md` | `01515a133cdab76bbf4465f14b5a1e1b33ac6dc6875479a2dca23efb050dca97` |
| `scripts/test-integration-applications.js` | `08e054dd42f088298d890c1ed763c416deb4c6087f2cee9782eee17ba6f1d11d` |
| `scripts/test-vectors.js` | `f9f9c26e128980e1333a64aff3e35b1b51b880ed47dedfdf87995b6951fca83c` |
