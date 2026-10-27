# IGCSE 代数八主题实施记录

状态：有界作者源稿已修订并再次冻结，待 Poincare 独立复核与主执行者统一技术验收；本轮只写本记录、指定 16 个中英页面及必要 `igcse-algebra-*.svg`。不提交 Git、不推送、不发布，不改入口、共享样式、测试、分数样章或其他作者文件。

## 范围、来源与实际阅读

已读根 AGENTS、RTK、课程长期标准 v1.1、主分工记录、公式指南、已认可分数样章。范围固定 OxfordAQA 9260 v5.1，不迁移资格。以下页码均为 **PDF 页码**（spec 印刷页比 PDF 页多 1）。已用 pypdf 常规 `page.extract_text()` 阅读 spec PDF 14–17，且渲染并目视四页 Core/Extension 列。A13–15 与 A18 均是 Extension；A11 求过点直线／垂线、A9 正式记号域值域复合反函数、A12 指数三角、A16 配方、A20 配方公式、A21 一次二次联立、A23 二维与二次、A25–26 二次数列均在官方 Extension 列；学生页面现按单一路线自然递进，不再逐段标层级。

实际读过的相关 QP/MS（不是以下载代阅读）：

| 官方文件，均 Specimen 2018 | QP PDF 页／题 | 配套 MS PDF 页／实际校准内容 |
| --- | --- | --- |
| 9260/1C | 12 Q13–14；13 Q15；16 Q20；18 Q22；23 Q27 | 7 Q13–14；9 Q20、22；11 Q27。重排、因式、平衡方程、根、斜率截距 |
| 9260/2C | 2 Q1–2；4 Q5；12 Q13；16–17 Q16；18 Q17；22 Q24；24 Q27 | 4 Q1–5；7 Q13、16(b,c)；8 Q17；10 Q24；11 Q27。另已读 MS 5–6、9，但不把这些非本组题算覆盖证据 |
| 9260/1E | 2 Q3；16 Q17；22–23 Q23；24 Q24；25 Q25；30 Q31 | 4 Q3；9–10 Q17；11 Q23；12 Q24–25；16 Q31。分式、公分母、精确二次根、速度图面积、驻点约束 |
| 9260/2E | 11 Q12–13；13 Q16；14 Q17；15 Q18；18 Q21；19 Q22；20 Q23；25 Q28 | 7 Q12–13；9–10 Q16–17；11 Q18；12 Q21；13 Q22–23；16–17 Q28。分段图、化简后求导、切线、二次数列、证明、复合、指数、联立 |

四卷封面已通过常规逐页提取核对 Specimen 2018；文件名的 2016 不作为考季。复杂分式与分段表达式存在提取顺序问题，课程不复刻这些官方原题，使用自拟题与独立重算。官方图形题尚未逐图视读，不声称图形校验完成。本组不使用 S17，不对其交并排字作结论。

## 制作前设计卡与逐能力映射

共同中心问题：如何把数量关系变成可检查的式、图与推理？先修为有理数四则、顺序与分数；缺失者回到 Number 的具体概念。所有自拟题标明无官方分值，英文 Question 保留。公开完整示范；独立题逐题提供分别关闭的提示和解答；retry 同目标换条件／表征；每页连接 mixed-review/#algebra-review 并有稍后任务。所有 slug 固定，不另增地址。

下表先于课程正文编写；`#` 后为该页锚点，两语言相同。判定以推理和条件为准，不以答案数字或题量为准。

| 页面／条目／可观察能力 | 先修／回补 | 讲解与示范 | 独立证据 | 反馈判定／同目标重试 |
| --- | --- | --- | --- | --- |
| expressions-and-formulae：A1、A3、A22 用字母表示过程，分辨式／方程／恒等式／公式／不等式、项与因子 | Number 四则；本页 #letters | #letters、#language | #practice-language | 说明等号是否对所有允许值成立；#retry-language |
| A2 代入负数与多步公式 | #letters、运算顺序 | #substitution | #practice-substitution | 平方括号与乘法解释；#retry-substitution |
| A4 合并同类项、单／双括号 | #language | #expansion | #practice-expansion | 每项相乘，异类不能合并；#retry-expansion |
| A4 Extension 三个二项式 | 双括号 | #three-brackets | #practice-three | 先两后第三，检查代值；#retry-three |
| A5 公因式、首一二次、平方差；Extension ax² | 展开 | #factorising | #practice-factors | 乘回原式验证；#retry-factors |
| A2 简单重排与复杂重排、subject 两次 | 分数与等式 | #rearrange、#twice | #practice-rearrange、#practice-twice | 同做逆运算、收集 subject、非零除数；#retry-rearrange、#retry-twice |
| A6 跨组指数衔接 | powers-roots-and-standard-form | #indices | #practice-indices | 指数只对乘除同底数适用；#retry-indices |
| algebraic-fractions-and-proof：A7 数字分母四则 | 分数算术／展开 | #numeric-denominators | #practice-numeric | 公分母／乘倒数；#retry-numeric |
| A7 Extension 代数分母四则与原式限制 | 因式 | #conditions、#operations | #practice-fractions | 除数也不得为零，因子才能约；#retry-fractions |
| A8 说明等价与反例；Extension 整数证明 | 展开与 A3 | #equivalence、#proof | #practice-argument、#practice-proof | 任意整数、完整一般式、结论；#retry-argument、#retry-proof |
| equations-and-inequalities：A19、A22 列一次方程，括号及两边未知 | 式与等式 | #balance、#model | #practice-equations、#practice-model | 代回原条件和单位；#retry-equations |
| A19 图解近似根 | coordinates-and-lines | #graph-solutions | #practice-graph | 实际绘制两线及交点；#retry-graph |
| A23 一次不等式与数轴 | 有向数／等式 | #inequalities | #practice-inequality | 负数乘除翻向、空实心；#retry-inequality |
| A23 Extension 二维区域 | 坐标直线 | #regions | #practice-region | 实虚线、测试点、交集；#retry-region |
| A23 Extension 二次不等式 | quadratics | #quadratic-inequalities | #practice-quadratic | 根分区检验，非只报根；#retry-quadratic |
| coordinates-and-lines：A10 四象限绘点 | 有向数 | #coordinates | #practice-points | 横后纵、轴点；#retry-points |
| A11 作图、识别解释斜率截距／平行 | 坐标与代入 | #gradient、#intercepts | #practice-lines | 用真实轴尺度，斜率单位；#retry-lines |
| A11 Extension 两点／一点斜率直线、垂直与垂线 | 方程 | #through-points、#perpendicular | #practice-equation、#practice-perpendicular | 代回点、斜率积、竖线例外；#retry-equation |
| quadratics-and-simultaneous-equations：A16、A20 根截距顶点对称；因式与图 | A5、直线 | #roots、#sketch | #practice-roots、#practice-graph | 图式转换并读近似根；#retry-graph |
| A16、20 Extension 配方、公式与无实根 | 平方根／展开 | #square、#formula | #practice-square、#practice-formula | ±、精确式与回代；#retry-square |
| A21 两一次联立的代数／图 | 一次方程 | #simultaneous | #practice-simultaneous | 同一对值满足两式、交点；#retry-simultaneous |
| A21 Extension 一次二次联立 | 二次解法 | #line-curve | #practice-line-curve | 两对配对、逐式检查；#retry-line-curve |
| A22 情境列式并筛选根 | 长度／面积 | #modelling | #practice-model | 量纲与物理范围；#retry-model |
| functions-and-graphs：A9 输入输出；Extension 域值域、复合反函数 | 代入／重排 | #machines、#domain、#composite、#inverse | #practice-machine、#practice-domain、#practice-composite、#practice-inverse | 一个输入一个输出、复合次序、反函数限域；各同名 retry |
| A12 一次／二次／简单三次／倒数图 | 坐标／根 | #families | #practice-families | 关键点、渐近线、连线；#retry-families |
| A12 Extension 指数与度制三角图（任意角） | 幂／三角比 | #exponential、#trigonometric | #practice-exponential、#practice-trigonometric | 基数、周期、极值、无定义角；对应 retry |
| A17 分段／非标准情境图解释 | 分段直线 | #context-graphs | #practice-context | 根据区间作图，不跨间断连线；#retry-context |
| A18 Extension 正反变关系代数连接 | Number ratio-and-proportion | #variation | #practice-variation | 定比例常数并检验方向；#retry-variation |
| sequences：A24 递推／位置规则，A25 三角平方立方 | Number 运算 | #rules、#families | #practice-rules、#practice-families | 从给定首项逐步与识别族；对应 retry |
| A26 线性 nth term 与归属判别 | 一次方程 | #linear | #practice-linear | 正整数项号、首项检验；#retry-linear |
| A25–26 Extension 二次规则 | 展开／二阶差 | #quadratic | #practice-quadratic | 减去 an² 后找余下线性、非凭猜；#retry-quadratic |
| differentiation-and-motion：A17 距时／速时图与率 | 直线斜率 | #motion | #practice-motion | 坐标、轴单位、速度与距离区别；#retry-motion |
| A13 Extension 非负整次多项式求导（先化简） | A4、A6 | #gradient-function | #practice-derivative | 常数导数 0，不能推广本课至负／分次；#retry-derivative |
| A14 Extension 切线 | 过点直线 | #tangent | #practice-tangent | y 与 y′ 分别给点／斜率；#retry-tangent |
| A15 Extension 极大极小／驻点拐点与草图 | 解二次与符号 | #stationary | #practice-stationary | 导数左右符号、坐标、曲线穿过水平切线；#retry-stationary |
| A17 Extension 非线性切线估梯度／曲线下面积数估 | 梯形／坐标 | #estimates | #practice-estimates | 切线大三角、梯形等宽、近似与单位；#retry-estimates |

教材边界：不以旧 PDF 章节代替 9260 范围。本次不引入 AS 积分、链式法则、负／分次幂微分、弧度三角微分、图形计算器许可或 CAS 考场流程。所有课堂数据为构造示例，非实测。

## 代表段与验收计划

先完成 `differentiation-and-motion` 的非负整次微分、切线与驻点段，作者独立重算、查梯度与点的分工、驻点判别与新题反馈，再扩展。另以代数证明作为不同类型的作者检查。用户本轮明确安排后续由主执行者独立交叉审查：本记录仅记作者自检，不称独立审查通过。学生试用未进行。

### 代表段作者自检（扩展前）

已先写 `differentiation-and-motion` 中英页：公开示范从展开到导数、点和切线分工、导数符号与驻点分类；独立题更换多项式和图数据，含同目标新 retry。用独立数值差商在 −3、−1、0、2、4 检查 `2x(x²−3)+5` 的导数 `6x²−6`，重算驻点高度 16、−16 与梯形估算 12.5 m；双语逐式比对通过。人工重建驻点拐点两侧斜率／弯曲变化，未以零导数自动判极值。源读后检查符合 A13–17 边界，无 AS 积分。此为作者检查，非独立交叉审查。

首次环境尝试：默认 python 不在 PATH；已改用绑定 Python。绑定 Python 没有 sympy／fitz，未安装依赖；PDF 改用 Poppler 渲染，计算改用直接数值差商与代数重算。首次 Jekyll 命令返回 1 且无输出，构建尚未通过，待排查。临时渲染图不进入公共 source 缓存。

后续填写：扩展后的实际内容／计算检查、构建与阅读检查、发现修复、缺口与交接。


## 最终作者自检与冻结

八主题共 16 个中英源页面已写齐，另有两张教学 SVG。本状态是“作者源稿完成，待独立内容审查与统一技术验收”，不是内容审查通过、技术通过或学生已掌握。

### 实际独立任务

每个页面都有 #start、#practice、#retry、#next-step、#sources；下列任务均有公开英文题干、单独默认关闭的提示和完整解答。主任务共 50 个；题数仅供定位，不作覆盖质量判据。上方逐能力映射给出讲解与相应 retry，坐标页另补 #retry-directions 检验水平／竖直垂线。

| 主题（中英同锚点） | 实际独立任务锚点 |
| --- | --- |
| expressions-and-formulae | #practice-language、#practice-substitution、#practice-expansion、#practice-three、#practice-factors、#practice-rearrange、#practice-twice、#practice-indices |
| algebraic-fractions-and-proof | #practice-numeric、#practice-fractions、#practice-argument、#practice-proof |
| equations-and-inequalities | #practice-equations、#practice-model、#practice-graph、#practice-inequality、#practice-region、#practice-quadratic |
| coordinates-and-lines | #practice-points、#practice-lines、#practice-equation、#practice-perpendicular |
| quadratics-and-simultaneous-equations | #practice-roots、#practice-graph、#practice-square、#practice-formula、#practice-simultaneous、#practice-line-curve、#practice-model |
| functions-and-graphs | #practice-machine、#practice-domain、#practice-composite、#practice-inverse、#practice-families、#practice-exponential、#practice-trigonometric、#practice-tangent-graph、#practice-context、#practice-variation |
| sequences | #practice-rules、#practice-families、#practice-linear、#practice-quadratic、#practice-choice |
| differentiation-and-motion | #practice-motion、#practice-derivative、#practice-tangent、#practice-stationary、#practice-estimates、#practice-area |

### 核算、发现与修复

- 全部八对页面从磁盘读回：英文 Question 完全相同，TeX 完整出现序列逐式相同，锚点同序；frontmatter subject 为 igcse-mathematics，中文 translation_of 正确。无 U+00A7 临时公式占位字符、默认 open、重复锚点；每题的提示和解答分别关闭，每个 lesson-check 两个 details，无相互嵌套。所有本页与当前跨页学习路径／锚点检查通过；其他作者后续修改仍须统一复查。
- 393 次独立数值检查涉及展开／因式／有理式恒等、二次根代回及二次不等式区间；另逐项重算数列、价格联立、直线斜率与配对坐标。恒等抽样只作排错，不冒称证明；一般证明另按分配律、任意整数、因子与结论逐行重建。函数复合次序、反函数限域、三角周期／渐近线、数列项号正整数与模型单位作人工核验。
- 首轮自己生成的中间文本含临时公式字符；主执行者指出后，已直接修正磁盘文件并对最终 16 页做零残留断言。没有把双语同错当正确性证据。
- 主执行者指出 #practice-estimates 直接给切线上两点泄露画线／选点判断；已删去题干切线点，保留可绘曲线规则与步长。首次与 retry 均要求自己画切线、选两个相距较远的点。参考读数只在关闭的解答中：首次约 2 m/s²，retry 约 1 m/s²，提供手绘自检区间并明示不是官方容差；还须核查局部方向和点确在自己切线上。
- 新增 igcse-algebra-line.svg（直线数表与轴尺度）和 igcse-algebra-tangent.svg（曲线、切线与梯度三角形），均为作者绘制、公开示范专用。XML/title/desc/viewBox 检查通过，以已有 sharp 在独立临时目录渲染并逐图实际查看：点、线、刻度、run=2/rise=12 均一致。独立估算题使用不同曲线数据，题前无同数据切线图。未用浏览器验收图在网页中的大小。
- 补读 1C MS PDF 8 Q15，与此前 QP PDF 13 配对；补重读 2C MS PDF 11 Q27。此前官方阅读表增加这项后，函数源区的所有题页引用均有实际读取。仍不声称已逐图验收所有官方源图。
- 末轮补齐因子识别的直接任务、斜率单位的新重试、水平／竖线例外的新重试、驻点新题的标注草图。所有更改后再次做双语源级配对检查。

### 保留的验收边界

按主执行者新指示，不再运行全站 Jekyll 或网页浏览器，不覆盖 _site。初次构建尝试返回 1 且无输出，没有构建成功证据；没有自行重复或更改配置。最终冻结后的构建、生成 HTML、MathJax、桌面／手机／键盘／主题／语言切换由主执行者统一执行。未做独立另一位作者的数学审查，未做学生试用或真实纸笔估读；不宣称学习效果已验证。未提交、推送或发布；未改入口、共享样式、测试、分数样章和公共缓存。

### 首次源文件冻结 SHA256（已由文末修订冻结替代）

以下为本作者源稿最终实际字节。冻结后不再修改这些页面／图像，后续修改须重新核验相应任务、双语和 hash。实施记录本身不在其自引用 hash 中。

| 文件 | SHA256 |
| --- | --- |
| igcse/mathematics/expressions-and-formulae.md | a71f976ea2f94c30e1640cb5bf53da0ce0a5834b497c66ea34331635d5f47788 |
| zh/igcse/mathematics/expressions-and-formulae.md | 896af6f58da2a4c770582b0f7a8382ab000e492ff71af3a4c1cc3fff8e8902d0 |
| igcse/mathematics/algebraic-fractions-and-proof.md | cdc58f67b12799c0cde6672db909645418c4f58c168f4c61990cf884e9a0e18e |
| zh/igcse/mathematics/algebraic-fractions-and-proof.md | e1f7c80231cb242b0506e58f55122d7124126e6d57dddaac563353692f73d424 |
| igcse/mathematics/equations-and-inequalities.md | fc1a9893ac6625721485d2a458eaf261d0ae676c9f97454cda656cc531adf08d |
| zh/igcse/mathematics/equations-and-inequalities.md | 02b574082abf51fc763f4f3d399f9443b8cb6374e65ae5b90144cf7a22b2d21e |
| igcse/mathematics/coordinates-and-lines.md | 242b0d07fb0c81ece7de14703d42f44ebf4659590e048af4c63d6ba754701537 |
| zh/igcse/mathematics/coordinates-and-lines.md | 2ba4f5bdd4d3bf6a7570929afc6c07260b48d68261fb937fe7ee135851b576c4 |
| igcse/mathematics/quadratics-and-simultaneous-equations.md | 74dc1adeb19e9923c79275cd478010a02dbe08325deb9ea80f83633f3d321a1a |
| zh/igcse/mathematics/quadratics-and-simultaneous-equations.md | 2d6aa890779864aa69e8f6465d1856326bb8ef778c4146829e58e3d90f372108 |
| igcse/mathematics/functions-and-graphs.md | 14471bb305fd5569518b684c79916e8ec5c827e94bc287780dc50d39c9958a87 |
| zh/igcse/mathematics/functions-and-graphs.md | 5a8b84e7c974f879e26b090c247725fa1a654a65b2dbdde53bf479748966e679 |
| igcse/mathematics/sequences.md | d6c88f88ca2660230fcaaf4e4237f677822bd276cd503fdb32d7c1be9899d2b4 |
| zh/igcse/mathematics/sequences.md | a8f86f517c0c76213df455f0d093258912381dd9535498a30b3f14e5bb2f79b8 |
| igcse/mathematics/differentiation-and-motion.md | 01f16102346ddf2fb3e6e0e53ebf15e98bbdd7939a4906cd9b07441ec976288a |
| zh/igcse/mathematics/differentiation-and-motion.md | dd4b4c38285649d8cb69bc7f24a45ca29593889f60fa27c3d18f8371379dafde |
| assets/img/igcse-algebra-line.svg | 2b669fe0087aca28dc6e0253485fbe902bd72f28999dc2a6bdffd5a17f536d63 |
| assets/img/igcse-algebra-tangent.svg | a61eb6e4f76a9be209cb4d27f13b4ff8aaae0268bfa1434bf698133e1a50771b |


## 独立审查 A-R1–4 修订设计（先于正文）

来源：Poincare 的 review-igcse-algebra-2026-10-27.md；四项仍待其复核，不自行关闭审查。用户另明确学校只开设 Extension：本作者16页已移除学生分流标签，保留全部基础和进阶任务；官方列判断留在本记录，不再作为学生跳过内容的依据。

- A-R1：明确负的是被开方数 Δ，不是否定实数负分支；保留±和反函数负分支教学。
- A-R2：指数趋零条件限为 k>1 时 x 向负方向无界，0<k<1 时 x 向正方向无界；k=1 恒1。
- A-R3 中心问题：如何从新情境的规则建立图，而非抄已给分段函数？首次独立题改为构造的自行车收费，学生从文字建规则、选择边界、画跳跃，读价格并判断不可能费用；重试改为水箱灌水—停止—排水，从分段速率重建连续体积图、解释平段及同高度两时刻。先修是区间、开实心端点、直线斜率；回补 #context-graphs；独立锚点仍 #practice-context／#retry-context，不增slug。解答逐段核区间、单位、端点和可达输出。均自拟情境而非真实机构价格或实测数据，无官方分值。
- A-R4：指数初值／乘数恢复直接连接 #exponential 和 #retry-exponential，正反比例常数另接 #variation，避免混淆。

不构建；修后做题目／TeX／锚点配对、各区间独立核算与冻结SHA，通知审查者复核。


## A-R1–4 修后作者自检与最终冻结

已修 A-R1–4，尚待 Poincare 对此版本独立复核，不能由作者自行宣布审查通过。

| 审查项 | 实际修订与独立核验 |
| --- | --- |
| A-R1 | quadratics #formula 中英统一为“负数的平方根不是实数／Δ<0无实根”，补明 −√4=−2 是实数负分支，保留±；未改求根数值 |
| A-R2 | functions #exponential 保留 k=1 恒为1；只对 k>1 的负向、0<k<1 的正向无界输入写趋零。以2与1/2的幂抽查，k=1两方向均为1 |
| A-R3 | #practice-context 从自拟租车文字独立列分段式／绘图，C(0)=0、C(2)=6、C(2.5)=10、C(4)=13；定义域[0,4]，值域{0,6}并(9,13]，9与8都不取，11元在3小时。孤立零点、2小时包含左段、续租右段开点与费用跳跃均解释。#retry-context 换自拟10升水箱，由文字累计水量，节点(0,2)/(2,8)/(4,8)/(7,2)，无跳跃，V(5)=6；6升发生于4/3和5分钟，域[0,7]、值域[2,8]，容量及非负条件成立。题前未给分段式或对应答案图；纸上绘图产出仍为必要任务 |
| A-R4 | #retry 直接将指数初值／乘数错误指回 #exponential 并链接 #retry-exponential；另保留正反比例常数的 #variation，中文同义配对 |

源级复查：16页英文Question逐题一致、完整TeX序列逐式一致、稳定锚点同序；所有原有数学任务保留，两个抽象分段题替换为真实情境能力任务。仍为142个Question和94个独立／重试题框，题数不是覆盖证据。frontmatter／translation_of／五公共锚点、无§与默认open、题框各两段关闭帮助、div/details闭合、本页及当前跨页路径均通过。路线改写后16页学生可见 Core／Extension 标签零残留，基础内容未删。新数据执行725次数值条件检查（其中包含701个水箱取样，仅作排错），区间端点、值域缺口和一般规则另逐段手算；不把取样当全范围证明。

两SVG未变，沿用前轮源与实际渲染检查。未构建、未运行站点浏览器，不称MathJax／HTML／手机桌面／键盘或学生试用通过。未提交Git、推送或发布。本组源稿从本表再次冻结，等待复核；后续修改须重新核验受影响任务、双语与SHA。

| 文件 | 最终 SHA256 |
| --- | --- |
| igcse/mathematics/expressions-and-formulae.md | f353ae39f68e8f0a0babb7dbe15c4118a63dfd81943cd62b2036c3dc149d668b |
| zh/igcse/mathematics/expressions-and-formulae.md | 73edcf6229ab82ed4eec9c4fbd4656279b392a11553b6cb3a65b9894577e2319 |
| igcse/mathematics/algebraic-fractions-and-proof.md | 852eec95b4d14540446f14f3e22ff2fdcb4a743c02edcd97d13c870e204bcd50 |
| zh/igcse/mathematics/algebraic-fractions-and-proof.md | 757692c1482e947eb44e82d91111bea45c9d681dc6df75b14babfd651a26850a |
| igcse/mathematics/equations-and-inequalities.md | 6eb366bff501571413bea7603701fba6a8bd1e18ac65b4ee811f202e94ffe1f9 |
| zh/igcse/mathematics/equations-and-inequalities.md | 1e875d4edff45aa917c0255c46c9b6684d32b7984fbf2b36a634624c1d44d0cd |
| igcse/mathematics/coordinates-and-lines.md | 84ee2c576c0fc259d8370c199f68249de0629553c6dee8348d105e87f8bcba99 |
| zh/igcse/mathematics/coordinates-and-lines.md | e4b3cc073be719223a894fc71785c59f5cd4ba3077347819126b6d359d7fd2e2 |
| igcse/mathematics/quadratics-and-simultaneous-equations.md | 290d565cca033c355a90b82681b1daa2b206a31729eba5b1bb34e5700a0d4a36 |
| zh/igcse/mathematics/quadratics-and-simultaneous-equations.md | 8ad94cff9c480b8ea39d7181ed1f2ac517c034dc08a23ab22ec0918aaa1544cd |
| igcse/mathematics/functions-and-graphs.md | 5022dc555bd143b0b604c0554a03cc9dcd0c9682e9a90bd1f9be1fe02d29bcc0 |
| zh/igcse/mathematics/functions-and-graphs.md | 75de41b0e2535becda2a5217933072ddfca04501ca3da4475c20d2f5af584826 |
| igcse/mathematics/sequences.md | f8baaee4f01a5b9f238f6e1b01dc8fd4d35b7f0ee0720a09490a968544a4a0d0 |
| zh/igcse/mathematics/sequences.md | 93de84fd52998928f365bd9e72a2007d07e53c73469fa35761d8b051ed4dcf55 |
| igcse/mathematics/differentiation-and-motion.md | d22142b58a421b812cd6dd3eaf3731798b48f052619f61c0953eea1e286f9376 |
| zh/igcse/mathematics/differentiation-and-motion.md | 86b2d0402117ab4c8a1b652a14eeef6abc5487e1b8ef21aff5c1955d49d49fac |
| assets/img/igcse-algebra-line.svg | 2b669fe0087aca28dc6e0253485fbe902bd72f28999dc2a6bdffd5a17f536d63 |
| assets/img/igcse-algebra-tangent.svg | a61eb6e4f76a9be209cb4d27f13b4ff8aaae0268bfa1434bf698133e1a50771b |
