# IGCSE Geometry calculation 制作记录

2026-10-27。有界作者，只写四个主题的中英 Markdown、本记录和 `assets/img/igcse-geometry-calculation-*.svg`。不提交、不推送、不发布；不编辑入口、共享文件、测试、分数样章或其他作者文件。已读 AGENTS、课程长期标准 v1.1、总制作路线、公式指南和已认可双语分数样章。

## 来源先读与范围判定

实际使用本地公共缓存，未覆盖缓存。用 pypdf 的 regular `page.extract_text()`，未以 layout 文本代替阅读。以下均为 **PDF 页码**；spec 印刷页码比 PDF 页码大 1。

- `specification.pdf` 9260 v5.1：PDF 19–22（印刷 20–23）已读并经 Poppler 渲染。**初次视觉分栏把 G23/G24 错判为 Core，现已撤销**；详见下方纠错记录，渲染操作不构成层级已正确核实的证据。经原始词坐标补核：G10–11、G14–15、G16 圆和复合平面、G19 二维直角三角、G21 单变换为 Core。G16 右列立体表面积/体积（包括锥台）、G17 相似面积体积、G18 弧扇形、G19 三维、G20 非直角三角、G21 组合和负/分数放大、**G22–G26 全部为 Extension**。G11 construct/interpret x=222.60/47.27 均左栏，主执行者已用同 PDF 词坐标独立复核其 Core 层级；不再以先前的“原图确认”作为依据。
- 四套 QP 封面已实际读，均为 **Specimen 2018**，不是文件名中的 2016 考季。
- 1C Q11(a,b)：QP PDF 11；MS PDF 6–7，正确平移、旋转及图形位置证据。Q25：QP PDF 21；MS PDF 11，圆柱→升→秒/小时并作结论。
- 2C Q10：QP PDF 9；MS PDF 5，长度/质量换算。Q12：QP PDF 12；MS PDF 6，质量与体积的比例。Q28：QP PDF 25，已另看渲染，图中 Q28(a) 邻边 8、斜边 11；(b) 37 为邻边、y 为对边。
- 1E Q4：QP PDF 3；MS PDF 4，向量相减。Q16：QP PDF 14–15、MS PDF 8，两个 QP 图另看渲染，单位方形 180° 和负 3 倍放大。Q28–29：QP PDF 27–28；MS PDF 14，投影角和锥体体积。
- 2E Q11：QP PDF 10，与 2C Q28 相同二维直角三角任务；Q19：QP PDF 16、MS PDF 12，SSS 余弦定理钝角；Q26：QP PDF 23、MS PDF 15，长度比立方；Q27：QP PDF 24、MS PDF 15，路径向量和倍数证明平行。

页面全部题目为自拟题，无官方分值；官方材料用于限定范围和核对作答证据，不把自拟反馈称官方评分。无额外教材的覆盖声明；不教行列式、逆矩阵、弧度、向量点积或 i/j 作为本课必考。无 fx-CG50 考场许可声明。S17 不属于本组，未作排字判定。

## 逐能力设计卡（先于正文）

中心问题：面对一个图形或测量问题，怎样从可见的形状、单位和方向选方法，并检查结果？先修是四则、平方/平方根、分数、坐标和简单解方程，按缺口回到具体概念。固定 slug 与主记录一致，中英各一份；两语言任务、公式、数据和反馈对应。

| 页面 / 官方条目 / 可观察能力 | 先修与回补 | 主线/完整示范 | 独立输出锚点 | 判断依据与同目标重试 |
| --- | --- | --- | --- | --- |
| units-area-and-volume / G10–11：识别立体面棱点，构造/读投影 | 平面形状、方格计数；#solids | 面与曲面区别；有方向的方块堆图/高度数据示范 | #check-solids、#check-views | 逐面/边解释；投影取方向上的最大高度而非总数；#retry-views |
| 同页 / G14：长度、面积、体积/容量、质量、时间12/24、money、speed、density | 乘除、分数；#units、#rates | 单位小方格/小立方体；跨午夜、货币、密度与速度示范 | #check-units、#check-rates | 量纲、60进制、比较基准；#retry-units、#retry-rates |
| 同页 / G15–16：三角/平行四边/梯形、圆与复合面积周长，定截面体积和表面积 | 垂高；#flat-shapes、#prisms | 分割/补全、展开外表面；圆柱和三角柱示范 | #check-flat、#check-prism | 周长只沿边界、接合面不外露；#retry-flat、#retry-prism |
| 同页 / G16 Extension：球、锥、棱锥、复合体和两种锥台 | 相似与勾股；#solids-extension | 垂高/斜高、完整体减相似小体；公开两类锥台示范 | #check-composite、#check-frustums | 体积差、外表面积加切口减接合；#retry-solids |
| 同页 / G17–18 Extension：长度/面积/体积比例，弧长/扇形/反求角 | 分数、圆；#scaling、#sectors | k/k²/k³、小圆心角占整周比例 | #check-scale、#check-sector | 先明确量的维度；#retry-scale、#retry-sector |
| pythagoras-and-trigonometry / G19：二维边角选法；Extension 三维投影 | 平方/平方根、坐标；#right-triangles、#ratios | 标直角/斜边/对邻边，逆三角，三维投影示范 | #check-right、#check-ratios、#check-space | 必须指出所用三角形和角的投影；#retry-right、#retry-ratios、#retry-space |
| 同页 / G20 Extension：正弦/余弦定理与面积，反求边/角 | 解方程、角和；#any-triangle | 对边配对、SAS/SSS、sin的两角可能性与面积垂高解释 | #check-any、#check-area | 不是默认直角；核对角和及大小关系；#retry-any、#retry-area |
| transformations / G21：执行/完整描述单变换与不变量；Extension 组合与负/分数放大 | 坐标和带符号数；#moves、#enlargements | 真坐标图、旋转中心、中心到点的向量；先后次序 | #check-single、#check-description、#check-enlarge、#check-order | 描述含向量/镜线/中心角方向/比例；#retry-single、#retry-enlarge、#retry-order |
| vectors-and-matrices / G22 Extension：向量运算、图示、几何证明 | 平移/坐标；#vectors、#proof | 首尾相接、差/负倍、交换结合、中点证明 | #check-vectors、#check-proof | 明确方向、公共起点/倍数、非零；#retry-vectors、#retry-proof |
| 同页 / G23–24 Extension：2×2、2×1、标量、identity | 带符号数和乘法；#matrix-products、#identity | 行乘列；数值逐格公开示范 | #check-products | 维数和左右次序；#retry-products |
| 同页 / G25–26 Extension：单位方形与变换矩阵/组合 | 单变换；#unit-square、#composition | 两单位向量的像作两列，右边先做 | #check-square、#check-composition | 画四个顶点并用非对称点查顺序；#retry-square、#retry-composition |

所有页的 #practice 为独立题入口、#retry 为恢复入口、#next-step 含延后任务/混合链接；#sources 为折叠来源。先完成 transformations 的图形/描述代表段并作者自检，再扩展；不把作者自检称为独立交叉审查，后者由主执行者安排。

## 验收状态

设计完成。先写完 transformations 双语代表段（坐标绘图、非原点中心、反求描述、负分数比例、非交换组合）。作者逐顶点复算：K=(1,0) 的90°逆时针像为 (0,0),(0,2),(-1,0)；两种组合次序分别检验两个非对称点；负比例面积取平方而非负面积。自检了先修、公开示范到独立题、错误回补和同目标重试/稍后回顾的路径。此为作者自检，不是独立内容审查；按本轮有界作者分工继续扩展供主执行者交叉审查。

2C Q28 的配套 MS PDF 11 与 2E Q11 的 MS PDF 7 已补读：cos x=8/11，x约43.3°；tan40°=y/37。1E Q10 MS PDF 6 亦实际读过，与1C圆柱题相同。

技术/其余独立复算/双语/实际阅读结果将在本记录追加。学生试用未进行；独立交叉审查待主执行者安排。

## 层级错判纠正（Avicenna 独立 review 触发）

主执行者转达本轮审查代理 Avicenna 对 G23/G24 的独立发现后，作者立即撤回“矩阵乘法/identity 属于 Core”的错误判定。对同一公共缓存 specification.pdf（manifest SHA256 d803d6a8ef6e10d530511572269c58586e8fad83ea5aa77fa7a7e0c44745322a）用 pdfplumber 原始单词坐标重核：PDF22 中 G23 的 multiplications x=302.39，G24 的 identity x=317.50，均在约298分界右侧。G22 的 understand x=302.39；G17/G20 等扩展首词亦 x=302.39。故 G22–G26 全部 Extension。错误已从双语 vectors-and-matrices 的起点分流、重试标题、折叠来源区和本设计表修正，Core 返回单变换。不得引用本记录旧版或先前口头更新作为 Core 证据。

其他层级逐页重核词坐标而不是仅看串行提取文本：PDF20 G14 use、G15 know、G16 圆公式 know x=47.27；PDF21 G17 use、G19 including 3D、G20 know x=302.39。G11 construct x=222.60，interpret x=47.27；主执行者已用同 PDF 独立复核二者均在 Core 左栏，此为这一项的范围复核，不扩大为全课“独立审核通过”声明。Poppler 本次渲染曾报告缺 Symbol/ArialUnicode 字体，保留该限制；词坐标是纠正本次层级错误的直接证据。

按最新并行约定，不再自行运行 Jekyll 或浏览器。此前一次 Jekyll 尝试使用独立输出目录且未成功，不作为任何技术通过证据；统一构建/全页/桌面手机/键盘验收由主执行者在冻结后执行。

## 作者最终源级自检与冻结

2026-10-27：四主题的中英八份源稿及六个 SVG 已完成本轮作者自检，冻结给另一作者独立审查。状态为**源稿完成／待独立内容复核与统一技术验收**，不是“技术通过”或“学习效果已验证”。不提交、不推送、不发布。

- 文件：`igcse/mathematics/{units-area-and-volume,pythagoras-and-trigonometry,transformations,vectors-and-matrices}.md` 及对应 `zh/` 四页。主题锚点与上面的逐能力表一致。G10–11、G14–26 的分配与具体独立任务见设计表，未接管 G12。
- 图：`assets/img/igcse-geometry-calculation-{composite,solids,transformations,triangle,vectors,views}.svg`。XML 均可解析，viewBox、标题/说明、相应正文替代文字齐备。用 bundled sharp 直接栅格化六图并查看拼图，未启用浏览器：复合边界/内部直径、棱柱与棱锥虚线、单位坐标、6–8–10直角图、首尾相接箭头、前/右观察箭头均可读，图数据与正文一致。这不是手机/暗色网页验收。
- 严格逐式核查：忽略 TeX 内空白后，两语言公式序列完全相等。units 170/170，trigonometry 86/86，transformations 88/88，vectors 112/112。vectors 初次112/105仅为中文把若干相邻行内式合并；已拆分对齐。英文 Question 题干各26、15、10、14段，两语言逐题完全相同；包含示范、独立、重试和延后题，不以此题量宣称能力验收完成。
- 结构源检：八页 frontmatter subject 均为 igcse-mathematics；中文 lang/translation_of 与 permalink 正确；必需 start/practice/retry/next-step/sources 齐全，无重复 ID，本页链接均有目标。div/details 开闭平衡；提示、解答分别默认关闭；没有把基础讲解收进来源折叠。尚未检查生成 HTML、MathJax 最终渲染或跨组最终锚点。
- 独立复算（作者计算，不冒称独立审查）：逐任务核对长度/方向/面积体积单位、负比例、旋转中心、行乘列、矩阵非交换、向量首尾方向及证明非退化条件。另用 NumPy 核算矩阵乘积与组合，math 核算三角舍入和补角候选；圆/棱锥台分别按体积差与外露侧面+两底重新计算。锥台主示范84π/90π与336/360，反求原高题28π与112，重试87.5π/80π与56/140一致。核查时间跨午夜、m²/m³幂次、kg/g/cm³、反向币值和圆柱填充时间200π秒；不将浮点显示当作误差保证。
- 教学路径：各目标有正文与独立任务，反馈不只列答案；重试恢复相同目标（含向量平行及共线、两类锥台、反求比例/角），页末有延后未标方法任务和 mixed-review/#geometry-review。全课程混合题及入口由主执行者负责。

### 冻结源 SHA256

以下只锁定本作者14个内容/图片源文件，不含会继续追加的本记录；后续任何修复均须重核受影响项。

| 文件 | SHA256 |
| --- | --- |
| igcse/mathematics/units-area-and-volume.md | 3013491a34d3896eabe8351f4c0d1a738f0f3c0e2d8700cc7149d5509b982ade |
| zh/igcse/mathematics/units-area-and-volume.md | a0374053d42b2283e985cf4992d44bd9aefc80b97a939bbc666b392809501761 |
| igcse/mathematics/pythagoras-and-trigonometry.md | ad471a1f0d60fa9f62768376c9ef42c93f0e542eccb73efcf8a37788f1c578f2 |
| zh/igcse/mathematics/pythagoras-and-trigonometry.md | acd4aed1e9029c15e8e389e25f1934c9dacd929887a9f682133662bc977b4d79 |
| igcse/mathematics/transformations.md | 05b3c88bd2b221413426c7cd6d52d25a36cbce2f541565f3c1771466c631aaa3 |
| zh/igcse/mathematics/transformations.md | ba1e7ca1cf6dd80ff2a4a825e7b02ef4d196eff63287834ffeb1d18676cf68d0 |
| igcse/mathematics/vectors-and-matrices.md | d1bdc81572ea8130e9348c9cda711b43bcf6f3cc8b2370455fa37b12fb07d80f |
| zh/igcse/mathematics/vectors-and-matrices.md | 6bd82ea2b0a75b68f56252840159094d393190697c5431c25276a4f8be3f0b63 |
| assets/img/igcse-geometry-calculation-composite.svg | 3f03264c3ce765cdd4854818f348f37186c0e284fc5b24ec77dc1c62eae76524 |
| assets/img/igcse-geometry-calculation-solids.svg | ea84898116ae1e2e81e4e6c750775a214911c914f26129d7d03ccb2720728e3d |
| assets/img/igcse-geometry-calculation-transformations.svg | cb74dbe2d499a2cefd29e3b97cbe25d342fdc9b383221fa2c02259fbdd9ae3c4 |
| assets/img/igcse-geometry-calculation-triangle.svg | bf36fcee085cccf17c06fdc62a9e043110c49da7ab4375c81dd5b275cec3c12d |
| assets/img/igcse-geometry-calculation-vectors.svg | 6989654370325fdfb14736a205410c0b1b5b92b01a5719c5cd64a5938d7e65e1 |
| assets/img/igcse-geometry-calculation-views.svg | 12e9c389e499cf582b0ca2548628c82d98aefde6a0fc4423b72dfa2ac253a7c7 |

### 尚欠项与交接

另一作者独立重建解释与复算、主执行者统一 Jekyll/适用测试/生成HTML/桌面手机明暗/键盘和语言切换验收、学生无帮助试用和延后保持均未完成。不得将本次作者检查当作这些状态通过。Poppler 缺字体及 G23/G24 层级错判已如实登记，矩阵全页 Extension 的修订已进入上述冻结 SHA。G11 construct/interpret 已获主执行者同PDF词坐标复核 Core。本记录不代写主报告或索引。

## Hilbert R1–R6 修补设计（先于修补正文）

2026-10-27：实际读完 `review-igcse-geometry-calculation-2026-10-27.md`。接受 R1–R5；R6按随后主执行者转达的新课程要求改为 Extension 单一路线，保留全部基础任务，不再制作学生可见 Core 分流。官方左右列判断留在制作／审查记录，不删大纲的共同基础。前一冻结 SHA 保留作为被审历史版本，下文修补后的新冻结表才是交接版本。

| 发现／能力 | 修补主线与首次独立输出 | 新重试／判定证据 |
| --- | --- | --- |
| R1 完整正比例放大作图；反求各种单变换描述 | 补如何反求平移向量及旋转中心的主线；#check-description增加未知向量与未知中心旋转；#check-positive-enlarge给非原点中心整三角形放大；#check-enlarge-description给对应三角形反求中心和比例 | #retry-single新数据反求平移／旋转；#retry-positive-enlarge新中心、新整图及未知中心反求，均核对全部顶点，不以一个点或Extension旧题替代 |
| R2 向量差／负数乘的实际图示；结合律 | #check-vectors要求从O画u−v、−2v及2v−u的实际路线；#check-associativity给三向量比较两种分组，区分交换与结合 | #retry-vectors换AB/BC位移画差及负数乘；#retry-associativity换向量并纠正混合减法的错误分组，写中间终点 |
| R3 矩阵顺序的可判定重试 | 保留首次非交换组合；把#retry-composition改成反射y=x与顺时针90°的两个不同矩阵 | 两个乘积及(2,1)中间点／终点不同，能实际暴露先后颠倒 |
| R4 中文反射原像歧义 | 两处“原点”改“原像点” | 保留真正指坐标原点的其他表述 |
| R5 立体模型条件 | 矩形侧面限定直三棱柱；双语题干明确图A为直棱柱、B底为正方形 | 解答用正方形底四棱锥，不额外断言顶点垂足 |
| R6及新课程路线 | 八页删除学生可见Core/Extension分流、标签与两类群体服务声明，标题自然由基础进阶 | transformations→vectors自然接续；单位面积体积→三角→变换，保留稍后任务与mixed入口 |

补题均为自拟题、无官方分值；坐标数据足以在单位方格完整作图，帮助与解答独立关闭。先逐点／逐向量／逐矩阵独立核算，再写入中英同题；随后重新核对所有公式和题干序列，交Hilbert复查。不得把作者修补状态称为独立审查通过或网页技术通过。

### R1–R6修补完成与再次冻结

八份源稿已落实上述修补，六张SVG未改；不改Hilbert报告、他组源或共享文件。状态为**作者修补完成／再次冻结／待Hilbert复查**。旧冻结核验仍只适用于旧版本；新增任务已由作者重新从题干计算，不声称Hilbert已审过新题。

- R1：#check-description现在分别反求平移(-3,2)、绕(1,1)逆时针90°旋转，并保留镜线反求；#retry-single用(4,-3)及绕(1,2)顺时针90°的新对应图重试。#check-positive-enlarge要求把全部三点绕(1,-1)放大2倍，像为(3,3),(5,3),(3,7)；#check-enlarge-description从三组对应点反求(1,1)、比例2；#retry-positive-enlarge改用(-2,1)、比例3画整图，并从另一组三角形反求(-1,0)、比例3。每问有完整坐标数据、作图要求及所有顶点反馈。垂直平分线／对应连线交点和逐顶点映射另行复算；修稿过程纠正了一条草写的对应连线，最终正文为y=x。
- R2：#check-vectors画差路线O→(2,-1)→(1,-4)、负数倍O→(-2,-6)、组合O→(2,6)→(0,7)；#retry-vectors的新向量得到差(7,2)、组合(-11,-1)、负数倍(8,-2)，明确原AB→BC路线从A起，另三图从O起。#check-associativity两种分组均到(1,4)，#retry-associativity均到(0,3)，并以(2,-7)与(6,1)排除错误减法分组。新增#grouping主线和明确回补链接；交换律与结合律分别判断。
- R3：重试使用S为y=x反射、R为顺时针90°，RS=diag(1,-1)、SR=diag(-1,1)；(2,1)中间点分别(1,2)/(1,-2)，终点(2,-1)/(-2,1)，次序错误不会再被相同矩阵平方掩盖。
- R4/R5：中文反射两处改为“原像点”；立体解释和图题把A限定为直棱柱，B只给正方形底，解答不额外断言正棱锥。矩形侧面需要直的条件；棱／面／顶点计数不变。
- R6／新课程要求：八页所有学生可见Core/Extension分流、题头标签、来源折叠内群体说明已删除；没有删共同基础概念。路线自然为单位面积体积→二维／三维／非直角三角→单／组合变换→向量矩阵，再做延后题与mixed。`#solids-extension`等既有锚点保留以免断链；它不是学生可见标题。官方tier位置及G23/24纠错历史继续保留在本作者记录，不能反推学校另开Core课。
- 作者复核：新坐标、中心等距、全部向量中间点与合向量、两个矩阵乘积用NumPy及精确分数交叉检查；所有题干和完整TeX逐式中英一致。最终公式段units170、trig86、transformations118、vectors151；英文Question段26、15、13、16，均逐段一致。八页公共锚点、本页链接、重复ID、div/details配对及默认关闭源检通过；无Core/Extension可见文字残留。未运行Jekyll／浏览器，未检查生成HTML或学生效果。

### 当前交接版本SHA256（替代旧页冻结值）

| 源文件 | SHA256 |
| --- | --- |
| igcse/mathematics/units-area-and-volume.md | 3d32e8f36c01a940a1464520d4f2d5c25126913d41896e0a4807cca80bda6345 |
| zh/igcse/mathematics/units-area-and-volume.md | a819bf842580209e41b322139839411451722112499a36c7a996eccc073f86b1 |
| igcse/mathematics/pythagoras-and-trigonometry.md | 36497d3f86b696baa319a9b28b23b9f6a87c7f203735124716e4dad4cbb90db7 |
| zh/igcse/mathematics/pythagoras-and-trigonometry.md | 67193233d81a7e7006e35bd75a12b22b3db27ae4b1f8d4b4e82c1732dba8df61 |
| igcse/mathematics/transformations.md | 1292f38a1a6c21b1e5d065d36b629ac4b484a1c60d79173058c258c979048f22 |
| zh/igcse/mathematics/transformations.md | 32c080d85749504432b8bdffe043a224fceb10dd6307b00b3eb8ba5330f1ecc4 |
| igcse/mathematics/vectors-and-matrices.md | 71ce0ddf69685d58a647c8f510811a997491543a2dc414871a2e64bfec51f63b |
| zh/igcse/mathematics/vectors-and-matrices.md | 2cde97ecf963c7d70e605615882e72dad8fbd02e47163fa3a14e8c13a7aada3a |

六张`igcse-geometry-calculation-*.svg`已重新读取字节SHA，与上表之前的14文件冻结表中各SVG值全部相同，继续作为当前图源。交接通知：R1–R6修补及单路线调整已就绪，请Hilbert按上述新SHA复查，不沿用旧通过项来宣称新增任务已独立审核。作者随后恢复Number独立报告。

### SC-1追加修补设计

主执行者转达Avicenna范围审查第3节：#check-scale和#retry-scale给出的表面积、体积不能同时属于真实闭合立体。这是不同于Hilbert原数值比复算的新发现，接受纠正；原作者只核算比例运算而未核实立体可实现性，不能继续把旧数据列为正确情境。

修补保留两种反求能力：首次题改成边长3与4的真实立方体，已知表面积54/96、较小体积27/棱3，要求从面积恢复长度因子4/3，再得大体积64/棱4；新重试改成边长4与6的立方体，已知体积64/216、较小面积96/棱4，要求从体积恢复3/2，再得大面积216/棱6。解答最后用6s²、s³交叉核验实际形状，不用审查者的不等式教学生，也不删独立目标。先写此设计再改两语言题干／完整反馈，再更新本页最终SHA，交Hilbert及Avicenna复核。

### SC-1修补完成／最终再冻结

两语言#check-scale/#retry-scale题干、解答、反馈已按上述设计全部改为明确立方体。Fraction独立核对96/54=(4/3)²、27(4/3)³=64、216/64=(3/2)³、96(3/2)²=216；再从实际边长3/4/6分别重建S=6s²、V=s³，得到(54,27)、(96,64)、(216,216)。由面积／体积先恢复长度倍数的独立作答要求均保留。学生页未加入审查不等式或超范围要求。

本记录较前“相似体积192／面积90”及170段公式属于旧被审版本，只能保留为问题历史，**不再作为有效模型或当前答案**。当前units两语言均178段TeX，26段Question严格对应；其余三章沿用R1–R6修补后冻结值。更新的两个实际字节SHA如下，替代前面两个units值；六SVG未改。已通知主执行者交Hilbert与Avicenna复核SC-1及最终源；作者修补不自行关闭两份独立报告。不构建、不提交、不发布。

| 当前替换源 | 最终SHA256 |
| --- | --- |
| igcse/mathematics/units-area-and-volume.md | c5d0082d5b2492200024162a346ef1c317f032cf4a6c7107c7728513dc7812d6 |
| zh/igcse/mathematics/units-area-and-volume.md | 809c868254320afa9cc4752f0d1ae9595a07a3b3ad00e31d34c92fd6e4095df5 |
