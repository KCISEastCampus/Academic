# A2 四科 Markdown 层级与阅读排版复核

日期：2026-10-15。基于当前工作树，核查 A2 数学 Pure、高等数学 Pure、物理和化学的 45 对中英文页面，共 90 页。此次只新增审查记录和截图，没有改课程正文、布局或样式。

## 结论与核查边界

**存在实际的内容组织问题，之前“结构转换可靠”的结论不足以评价阅读排版。** 标题没有跳级、折叠块正确闭合，不代表标题表达了正确的从属关系，也不代表文字、公式和示范安排适合学生阅读。

本轮记录 **8 类 P2 调整项、2 类 P3 优化建议**，涉及 12 对页面；其中 10 对包含 P2 项。P2 表示值得安排修正的结构或阅读问题，不表示学科答案必然错误；P3 是有理由尝试的优化，不能据此认定现有结构不可用。其余 33 对在本轮范围内未定位到同等明确的新增问题，不等于已经证明“最佳”。

核查方法与完成状态：

- 逐页检查 45 对页面的标题树、概念分组、例题与练习归属、表格用途、段落边界及折叠前后衔接；核对中英文对应结构。复核总计 2,016 个正文标题、1,176 个折叠块和生成 HTML 中的 272 个表格。中英文每对的标题数、折叠数一致；数量一致仅作定位辅助，不作为内容对齐证据。
- 检查全部 90 页对应 HTML 存在，且生成时间不早于源文件。本轮使用上一轮已构建的同一内容，没有为新增报告重新构建全站。
- 在当前预览中实看 8 个代表页面，覆盖四科；桌面视口为 1280×900，手机视口为 390×844，共保存并查看 10 张截图。并非每页都完成两种尺寸的浏览器验收，表中“未定位问题”主要是源文件与生成结构的编辑审查结果。
- 本轮不重新核算所有题目、不重新核验全部官方材料、不进行学生试用。学科正确性和原有技术问题见[总审查](audit-a2-upgraded-subjects-2026-10-15.md)及[原结构检查](audit-a2-markdown-structure-2026-10-15.md)。

## M01 · P2 · 潜热例题归到了比热容实验下面

位置：[热学英文](../../alevel/a2-physics/thermal-physics.md) L112、153；[中文](../../zh/alevel/a2-physics/thermal-physics.md) L114、155。

现有层级为：

```text
H2 必做实验 8：电学法测比热容
  H3 检查点：不确定度与热损失
  H3 例题 2：利用加热图像
  H3 例题 3：扣除背景融冰
H2 连续流动系统
```

例题 3 求的是熔化比潜热，且强调背景供热修正，不能作为“测比热容”这一实验的子内容。桌面截图中阅读该题时，目录也仍指向比热容实验。此处是具体归属错误，与整章篇幅长短无关。

最小调整：在例题 3 前增加“比潜热测量与背景修正”这一独立概念标题，使其与比热容实验分开；保留现有例题锚点。也可整体重新编排升温与物态变化部分，但不需要为此拆出整套新页面。

证据：[桌面潜热例题](../../.playwright-mcp/a2-editorial-2026-10-15/physics-latent-desktop.png)。

## M02 · P2 · 真题之后的新概念没有退出上一题的标题范围

下列段落已经在答案折叠块之外，却仍在前一题 H3 的范围内，直到下一题标题才结束：

| 页面 | 中文位置 | 英文位置 | 实际属于的新内容 |
| --- | --- | --- | --- |
| [过渡金属](../../zh/alevel/a2-chemistry/transition-metals.md) / [EN](../../alevel/a2-chemistry/transition-metals.md) | L248，位于 Q4 后 | L247 | 血红蛋白与 CO 的配位背景，应引出 Q5 |
| 同上 | L394，位于 Q7 后 | L393 | 自催化与浓度图像，应引出 Q8 |
| [电极电势](../../zh/alevel/a2-chemistry/electrode-potentials.md) / [EN](../../alevel/a2-chemistry/electrode-potentials.md) | L249、251，位于 Q4 后 | L248、250 | RP6 通用测量与盐桥选择 |
| [水溶液中的离子](../../zh/alevel/a2-chemistry/ions-in-solution.md) / [EN](../../alevel/a2-chemistry/ions-in-solution.md) | L183，位于 Q3 后 | L182 | 过量氨水作为配体的作用，应引出示范 3 与 Q4 |

影响：视觉上把讲授内容夹在题目及其提示、评分解析之间；按标题浏览时，新概念被归到上一题，学生也难分清这是上一题补充还是下一段讲解。

最小调整：为这些新概念恢复相应的概念标题；其下的示范与题目使用下一层标题。RP6 可以作为独立实验节，包含说明及相关任务。不能仅增加一条横线：横线不会改变标题的从属范围。

证据：[Q7 后直接出现自催化讲解](../../.playwright-mcp/a2-editorial-2026-10-15/chem-new-concept-after-question.png)。

## M03 · P2 · 普数速查页把同一主题拆散，部分标题只剩跳转链接

位置：[普数速查中文](../../zh/alevel/a2-mathematics/quick-reference.md) L22–156；[英文](../../alevel/a2-mathematics/quick-reference.md) L20–154。

“代数分式／多项式除法／部分分式”先出现一次，之后进入函数、映射、反函数、绝对值与变换，随后又回到“有理函数的化简／更多除法／部分分式进阶”。其中第一次“部分分式”只有一条课程链接，没有速查公式；真正的分解形式在后面。这让同一主题的查阅需要跨过多个无关小节。

建议按概念合并：

```text
H2 代数与函数
  H3 代数分式：限制、化简、运算
  H3 多项式除法：恒等式、余数、例子
  H3 部分分式：基本与重复因式形式、使用条件
  H3 函数
    H4 定义域与值域／映射／复合／反函数
  H3 绝对值与变换
  H3 数学论证
```

保留旧锚点作为兼容入口，课程链接作为“完整讲解”的补充。速查页可以简短，但同一主题的必要提醒应集中；不应以标题数量相同代替概念对齐。

证据：[手机上只有课程链接的部分分式小节](../../.playwright-mcp/a2-editorial-2026-10-15/math-reference-mobile.png)。

## M04 · P2 · 两种求积法与各自例题被铺成同一层

位置：[数值方法中文](../../zh/alevel/a2-mathematics/numerical-methods.md) L150、160、185、199、221；[英文](../../alevel/a2-mathematics/numerical-methods.md) L148、158、183、197、219。

“中点纵坐标法 → 例题 4 → 辛普森法则 → 例题 5 → 例题 6”全部为 H3，实际渲染字号也相同。例题 4 属于中点法，例题 5–6 属于辛普森法；当前标题树没有表达这一关系。

最小调整：两种方法维持 H3，各自例题降为 H4；也可将方法各设 H2，但需要同时处理原“数值积分”的范围和目录。保留图、公式、适用条件与例题相邻。不能机械地把全站所有“例题”都降级：跨多个模型的综合例题可以与概念小节并列。

证据：[数值方法桌面](../../.playwright-mcp/a2-editorial-2026-10-15/math-numerical-desktop.png)。

## M05 · P2 · 题目、方法和答案挤在同一段；反应式串列难以逐项对照

明确位置：

- [离子反应中文](../../zh/alevel/a2-chemistry/ions-in-solution.md) L52、139、187、239；[英文](../../alevel/a2-chemistry/ions-in-solution.md) L51、138、186、238。多个示范在一个段落中连续写 Question／Method／Model answer；手机上粗体标签直接夹进正文，不能形成清楚的阅读停顿。
- [过渡金属中文](../../zh/alevel/a2-chemistry/transition-metals.md) L74、132、284、356、362；[英文](../../alevel/a2-chemistry/transition-metals.md) 对应 L73、131、283、355、361。题目与方法、答案与独立检查有类似合段。
- [第三周期中文](../../zh/alevel/a2-chemistry/period-3.md) L62、64、66；[英文](../../alevel/a2-chemistry/period-3.md) 对应 L61、63、65。多条反应式及其条件用分号串在长段里，查找某元素时要反复扫整段。

最小调整：题目、方法、推理、检查按功能另起段；真正顺序性的推理用编号步骤。第三周期的成组反应用短列表，条件紧随相应反应，必要的长方程式单独显示。不要给每个短标签都加标题，也不要把一切改成宽表格。

示范解答直接可见本身可以成立；本项要求清楚分段，不要求将所有示范折叠。独立练习继续分别提供提示与解答。

证据：[离子示范手机截图](../../.playwright-mcp/a2-editorial-2026-10-15/chem-ions-mobile.png)。

## M06 · P2 · 热学的独立计算式使用行内公式标记

位置：[热学中文](../../zh/alevel/a2-physics/thermal-physics.md) 例如 L149、151、165、167、267；[英文](../../alevel/a2-physics/thermal-physics.md) 对应 L147、149、163、165、265。两种语言各有 **29 处**仅包含一个单美元公式、没有附属说明文字的独立段落。

这与句中嵌入公式不同：它们承担完整代入、结果或检验步骤。生成页面中这些 MathJax 容器没有 display 属性，独立分式按行内样式呈现、靠左排列；同页原理公式使用显示模式，其他多数升级课程的完整计算也使用显示模式。手机上的压力计算尤其需要沿长等式逐项阅读。

最小调整：将承担独立计算的公式改为显示公式，长推理使用 aligned 按等号断行；文字条件与相应步骤保持相邻。短小的句中关系仍用行内公式。本项不包含上一轮已报告的未解析 TeX 问题，两者需要分别处理。

证据：[桌面潜热计算](../../.playwright-mcp/a2-editorial-2026-10-15/physics-latent-desktop.png)、[手机气体计算](../../.playwright-mcp/a2-editorial-2026-10-15/physics-formulas-mobile.png)。

## M07 · P2 · 物理比较总结的子主题升成了并列章节

位置：[物理速查中文](../../zh/alevel/a2-physics/quick-reference.md) L571、585、596、606、622、626、638；[英文](../../alevel/a2-physics/quick-reference.md) L522、535、546、556、571、575、587。这是上一轮已有提示、本轮经实际页面再次确认的层级问题。

“引力场与电场比较”及其“相似点／不同点”都是 H2；“电场与磁场”及其联系、粒子运动、速度选择器也都是 H2。正文标题和侧栏目录都将父主题与子主题显示成平级。

建议两个比较主题保留 H2，其内部比较维度使用 H3。当前全部课程只收集 H2 作为目录，降级后这些子标题将不再出现在目录或目录搜索中；实施时必须同时决定怎样保留必要的子主题导航，不能只改井号后就认定体验完成。保留原稳定锚点。

证据：[比较总结桌面截图](../../.playwright-mcp/a2-editorial-2026-10-15/physics-comparison-desktop.png)。

## M08 · P2 · 首次讲解把完整长公式放进宽表，手机看不全一行所需信息

主要位置：[弧长中文](../../zh/alevel/a2-further-mathematics/arc-length-and-surface-area.md) L32–46；[英文](../../alevel/a2-further-mathematics/arc-length-and-surface-area.md) L30–44。另需处理[普数积分](../../zh/alevel/a2-mathematics/integration.md) L60–68 的公式与条件表及其[英文](../../alevel/a2-mathematics/integration.md)对应部分。

弧长页的第一张表同时比较“表示方式／微元／完整积分”。390px 手机视口下，容器宽 335px，表宽约 541px；截图只能看到表示方式和微元，完整弧长列在右侧。下一张曲面面积表宽 520px，公式也被截在可横向滚动的区域中。这里没有证据表明内容被永久裁掉；问题是首次学习时，同一推理所需的条件和公式不能同时看到。

最小调整：首次讲解按“直角坐标／参数”分别给出短说明与完整显示公式，把条件放在公式旁；简洁的比较表可放在复习处。短数值表、同维度性质对照仍适合保留。普数积分的紧凑公式表可保留，但应检查公式和条件能否无需来回横移地对应；不要仅将全站字号缩小来塞表。

证据：[高数手机公式表](../../.playwright-mcp/a2-editorial-2026-10-15/further-arc-mobile.png)。普数积分表的手机横移在上一轮实际呈现检查中已有记录，本轮未重复截图。

## M09 · P3 · 高数双曲函数与弧长的讲解、示范可以靠得更近

[双曲函数中文](../../zh/alevel/a2-further-mathematics/hyperbolic-functions.md) L26–252 集中完成定义、图像、解方程、反函数、求导与积分，L254 才开始 9 个示范；[英文](../../alevel/a2-further-mathematics/hyperbolic-functions.md)对应 L24–250、252。示范 1 又回到最初的指数定义，示范 5–6 才回到求导。弧长页也是先集中列完三类公式，再统一开始例题。

这是一种可用的参考讲义结构，不构成标题语法错误；作为首次学习页，往返距离较大。建议先在双曲函数样章试排“定义与例 1 → 方程与例 2 → 反函数与例 4 → 求导与例 5–6 → 积分与例 7–9”，其余例题按所用原理安置；末尾保持混合独立练习。弧长示范可分别紧随相应公式。保留例题锚点，不按固定数量拆页。

证据：[双曲函数例题区桌面截图](../../.playwright-mcp/a2-editorial-2026-10-15/further-examples-desktop.png)。学习效果尚未试用验证。

## M10 · P3 · 化学入口的资源分组依靠折叠标签，标题树仍归在先修检查内

位置：[化学入口中文](../../zh/alevel/a2-chemistry/index.md) L43、64–79；[英文](../../alevel/a2-chemistry/index.md) L42、63–78。

最后一个 H2 是“开始前的 AS 检查”，之后的资源折叠块里出现“教材／实验与真题／大纲与边界”等 H3。视觉上 summary 已把资源单独包起，展开也正常；但 summary 不是标题，按标题树阅读时仍显示为 AS 检查的子项。

建议为整个资源组增加合适的 H2，再保留内部折叠；或把资源放到真正对应的课程概览下。无需把全部来源展开在首屏。此项优先级低于错误归属的教学正文。

## 45 对页面的逐页记录

每行均包含英文与中文页面。A：有 P2 调整项；B：仅 P3 优化建议；N：本轮未定位同等明确的新增层级或排版问题。N 不表示该页已通过全部学科、可访问性或全部尺寸验收。

### A2 数学 Pure：17 对

| 页面 | 结论 | 编辑判断 |
| --- | --- | --- |
| [入口](../../zh/alevel/a2-mathematics/index.md) | N | 按先修关系用顺序列表，资料映射折叠，适合作为入口 |
| [函数](../../zh/alevel/a2-mathematics/functions.md) | N | 定义域、复合、反函数分组清楚；方法、例题和纠错均在所属主题内 |
| [绝对值与变换](../../zh/alevel/a2-mathematics/modulus-and-transformations.md) | N | 图像、组合变换、方程不等式按能力推进，步骤列表用途明确 |
| [分式与除法](../../zh/alevel/a2-mathematics/algebraic-fractions-and-division.md) | N | 化简、运算、除法分组成立；长除法另解有明确回指，不强制重构 |
| [部分分式](../../zh/alevel/a2-mathematics/partial-fractions.md) | N | 两个相近示范集中在例题节可接受；积分另成应用节 |
| [二项式级数](../../zh/alevel/a2-mathematics/binomial-series.md) | N | 展开、组合、近似及适用条件保持相邻 |
| [三角函数](../../zh/alevel/a2-mathematics/trigonometric-functions-and-formulae.md) | N | 按函数、恒等式、和差角、单一正弦余弦、二倍角分组，不因页长而拆散 |
| [指数与对数](../../zh/alevel/a2-mathematics/exponential-and-logarithmic-functions.md) | N | 模型引入、函数和求解有明确连接；短小的模型联系节有实际作用 |
| [微分](../../zh/alevel/a2-mathematics/differentiation.md) | N | 法则、复合、应用、隐函数层次成立；反三角导数示范使用隐函数有依据 |
| [参数方程](../../zh/alevel/a2-mathematics/parametric-equations.md) | N | 消参、草图、求导、直线、驻点的学习转折清楚 |
| [积分方法](../../zh/alevel/a2-mathematics/integration.md) | A · M08 | 方法表具有比较作用；公式与条件宽表需改善手机对应阅读 |
| [积分应用](../../zh/alevel/a2-mathematics/integration-applications.md) | N | 三角积分、面积、体积分开，例题与各目标对应 |
| [微分方程](../../zh/alevel/a2-mathematics/differential-equations.md) | N | 分离、给定条件、建模、增长衰减各有清楚目标 |
| [数值方法](../../zh/alevel/a2-mathematics/numerical-methods.md) | A · M04 | 两种求积法与各自例题需表达父子关系 |
| [向量](../../zh/alevel/a2-mathematics/vectors.md) | N | 对象、直线、位置关系、数量积、距离顺序连贯；列表承担操作步骤 |
| [数学证明](../../zh/alevel/a2-mathematics/mathematical-proof.md) | N | 直接证明、反证、反例各成主题；无需套长课模板 |
| [速查](../../zh/alevel/a2-mathematics/quick-reference.md) | A · M03 | 代数主题重复分散，部分分式第一入口缺少速查内容 |

### A2 高等数学 Pure：12 对

| 页面 | 结论 | 编辑判断 |
| --- | --- | --- |
| [入口](../../zh/alevel/a2-further-mathematics/index.md) | N | 11 个课程入口与全部大纲映射分开；准备中条目明确 |
| [根与多项式](../../zh/alevel/a2-further-mathematics/roots-and-polynomials.md) | N | 根系数、复根、实根分组成立；例题可综合使用三次与一般次数结论 |
| [数学归纳法](../../zh/alevel/a2-further-mathematics/proof-by-induction.md) | N | 系列、整除及其他应用分别组织；证明步骤在示范中保留连续性 |
| [有限级数](../../zh/alevel/a2-further-mathematics/finite-series.md) | N | 方法比较、部分分式、差分与归纳法具有可解释分组 |
| [级数与极限](../../zh/alevel/a2-further-mathematics/series-and-limits.md) | N | 收敛、展开、组合、极限、反常积分的模型边界明确 |
| [棣莫弗定理](../../zh/alevel/a2-further-mathematics/de-moivres-theorem.md) | N | 幂、根、单位根、恒等式、积分逐步连接；同页较长不自动构成问题 |
| [极坐标](../../zh/alevel/a2-further-mathematics/polar-coordinates.md) | N | 转换、草图、交点、面积各有邻近示范 |
| [反三角函数](../../zh/alevel/a2-further-mathematics/inverse-trigonometric-functions.md) | N | 图像、求导、积分、配方、定积分、分部积分有清楚学习转折 |
| [弧长与曲面](../../zh/alevel/a2-further-mathematics/arc-length-and-surface-area.md) | A · M08、M09 | 首次公式表手机横移；示范可移到对应模型附近 |
| [双曲函数](../../zh/alevel/a2-further-mathematics/hyperbolic-functions.md) | B · M09 | 建议试排讲解与示范交错，现有题库分节并非语法错误 |
| [一阶微分方程](../../zh/alevel/a2-further-mathematics/first-order-differential-equations.md) | N | 推导、步骤、例题与练习可区分；例题也可折叠，不据此认定全部折叠错误 |
| [二阶微分方程](../../zh/alevel/a2-further-mathematics/second-order-differential-equations.md) | N | CF、PI、共振分组清楚；练习标题透露分类的问题留在原学科报告，不重复当成层级错误 |

### A2 物理：9 对

| 页面 | 结论 | 编辑判断 |
| --- | --- | --- |
| [入口](../../zh/alevel/a2-physics/index.md) | N | 完整学习页、后续参考主题、PH04 热学分别列出 |
| [圆周运动](../../zh/alevel/a2-physics/circular-motion.md) | N | 运动量、受力、坡顶谷底、倾斜力、测量按模型转折组织 |
| [简谐运动](../../zh/alevel/a2-physics/simple-harmonic-motion.md) | N | 速率例题在能量节明确续接；两种振子推导及示范有标识，不强制统一降级 |
| [引力场](../../zh/alevel/a2-physics/gravitational-fields-and-satellites.md) | N | 场、势、图像、轨道、能量、同步条件分组清楚 |
| [电场](../../zh/alevel/a2-physics/electric-fields.md) | N | 力、势、叠加、加速、横向运动分别组织，图式与解释保持邻近 |
| [电容](../../zh/alevel/a2-physics/capacitance.md) | N | 电荷、图像、几何、储能、介质、固定量按问题变化组织 |
| [充放电](../../zh/alevel/a2-physics/capacitor-charge-and-discharge.md) | N | 电路、两过程、时间、图像、能量、实验递进；图像维度作为子节成立 |
| [热学](../../zh/alevel/a2-physics/thermal-physics.md) | A · M01、M06 | 潜热题归属错误；29 处独立公式段落使用行内模式 |
| [速查](../../zh/alevel/a2-physics/quick-reference.md) | A · M07 | 比较总结父主题与子主题同级，目录不能表达从属 |

### A2 化学：7 对

| 页面 | 结论 | 编辑判断 |
| --- | --- | --- |
| [入口](../../zh/alevel/a2-chemistry/index.md) | B · M10 | 资源折叠的视觉分组成立，但标题树仍位于 AS 检查下 |
| [热力学](../../zh/alevel/a2-chemistry/thermodynamics.md) | N | 定义、循环、溶解、熵与 Gibbs 分组成立；定义表适合比较，未将所有表格判为不合适 |
| [电极电势](../../zh/alevel/a2-chemistry/electrode-potentials.md) | A · M02 | RP6 通用说明需退出 Q4 的标题范围 |
| [酸碱与缓冲](../../zh/alevel/a2-chemistry/acids-bases-and-buffers.md) | N | 强酸碱、弱酸、滴定、缓冲递进；交错真题及末尾选题索引可保留 |
| [第三周期](../../zh/alevel/a2-chemistry/period-3.md) | A · M05 | 反应式串列需按反应分行，条件跟随；性质比较表有价值 |
| [过渡金属](../../zh/alevel/a2-chemistry/transition-metals.md) | A · M02、M05 | 新概念被归到前题；部分示范多功能标签合段 |
| [水溶液中的离子](../../zh/alevel/a2-chemistry/ions-in-solution.md) | A · M02、M05 | 氨水新角色没有概念标题；题目方法答案合段 |

## 实施时的约束与验收

优先处理 M01、M02、M07 的明确归属，再处理 M03–M06 的查阅与阅读，最后试排 M08–M10。第一份样章可选热学的“温度变化／物态变化／两类测量”段，第二份选离子反应的一组讲解与真题。

- H1 表达页面主题；H2 表达学习转折或独立任务；H3/H4 按实际从属使用。标题层级由内容决定，不要求所有学科有相同数量的层级。
- 段落承担一个清楚作用；连续推理用文字与公式连接，操作顺序用编号，比较用表格。不能仅靠粗体标签、横线或 details 标签代替概念层级。
- 提示与答案分别折叠，必要概念讲解不夹在上一题的标题范围。完整示范可直接可见，避免为了统一外观把所有内容折叠。
- 保留英文题干、题目身份、条件、数据、答案、稳定锚点及双语对应；标题调整后检查语言切换和题目链接。改编题身份不因版式优化而改变。
- 层级调整后核对正文与目录共同表达的分组；当前 H2-only 的目录不能直接承担所有子主题查阅。不要为把题目塞入目录而把所有题目升成 H2。
- 实施课程修改后再运行对应检查、Jekyll 构建、HTML 和桌面手机验收，实际检查长公式、表格、提示与答案展开。此次审查报告不是这些后续修复已经完成的证明。

## 截图清单

截图均来自此次当前预览；文件保存在项目本地审查目录，不作为课程图片发布。

| 证据 | 尺寸 | 用途 |
| --- | --- | --- |
| [过渡金属概念区](../../.playwright-mcp/a2-editorial-2026-10-15/chem-complexes-desktop.png) | 1280×900 | 配体与形状表格、正文和标题实际关系 |
| [离子示范](../../.playwright-mcp/a2-editorial-2026-10-15/chem-ions-mobile.png) | 390×844 | 题目、方法、答案合段 |
| [潜热例题](../../.playwright-mcp/a2-editorial-2026-10-15/physics-latent-desktop.png) | 1280×900 | 比热容实验下的潜热题及行内计算式 |
| [普数数值方法](../../.playwright-mcp/a2-editorial-2026-10-15/math-numerical-desktop.png) | 1280×900 | 求积法正文与公式、图示 |
| [高数公式表](../../.playwright-mcp/a2-editorial-2026-10-15/further-arc-mobile.png) | 390×844 | 弧长完整公式列需横移 |
| [物理比较](../../.playwright-mcp/a2-editorial-2026-10-15/physics-comparison-desktop.png) | 1280×900 | 比较父子标题及目录平级 |
| [普数速查](../../.playwright-mcp/a2-editorial-2026-10-15/math-reference-mobile.png) | 390×844 | 部分分式标题下只有跳转链接 |
| [题后的新概念](../../.playwright-mcp/a2-editorial-2026-10-15/chem-new-concept-after-question.png) | 1280×900 | 自催化被夹在 Q7 与 Q8 之间 |
| [双曲函数例题区](../../.playwright-mcp/a2-editorial-2026-10-15/further-examples-desktop.png) | 1280×900 | 统一例题区从指数定义重新开始 |
| [热学计算](../../.playwright-mcp/a2-editorial-2026-10-15/physics-formulas-mobile.png) | 390×844 | 手机上的独立行内公式 |
