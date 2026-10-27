# IGCSE Number 六主题实施记录

日期：2026-10-27。作者边界：六个固定 slug 的中英学习页、本记录、`assets/img/igcse-number-*.svg`。不改入口、共享样式、测试或已认可分数样章；不提交、不推送、不发布。状态：十二页已按 Kierkegaard 保存点四项发现修补，并按学校 Extension 单一路线调整后重新冻结；本轮作者源级检查完成，待 Kierkegaard 复核、统一技术验收和学生试用，未标内容或技术验收通过。

## 范围与实际阅读

已读 AGENTS、RTK、课程内容长期标准 v1.1、主制作路线、公式指南及已认可中英样章。课程身份：OxfordAQA International GCSE Mathematics **9260 v5.1**。使用公共只读缓存；`page.extract_text()` 常规提取，不使用 layout txt。以下均为 **PDF 页码**，大纲印刷页比 PDF 页大 1。

- 大纲 PDF pp.10–14、16：N1–N8、N10–N20、A6、A18。Poppler 渲染并目视核对 PDF pp.11–13 的双列：分数指数和 surds 为 Extension；N11 的计算上下界、N12 循环转换、N15 逆百分及复利公式、N20 指数增长衰减也在 Extension 列。Core 仍教限的含义、逐次复利计算及重复比例变化。A18 另用 pdfplumber 文字坐标核对：`express` 的 x=302，与右列 Extension 起点相同；代数正反变率按 Extension 标注。
- 四套 QP 封面均实际读到 **Specimen 2018**，不能把 URL 中 2016 当考季；MS 封面同样如此。
- 1C Q21(a)(b)，QP p.17，MS p.9：252 的质因数分解、与 672 的 HCF=84。1C Q28，QP p.24，MS p.12：总量按 3:2 分后逐类计价，61.60。1C Q9(a)(b)，QP p.8，MS p.5：35 小时 350、单位工资 10；此处仅取已读数值及评分逻辑，不复刻未完整核对的图题。
- 2C Q4，QP p.4，MS p.4：27 为立方数；Q7、Q9，QP pp.6、8，MS p.5：先减定金再等分、整数件数向下取整及剩余量；Q21，QP p.19，MS p.9：标准式 2.5×10^6。
- 1E Q14，QP p.12，MS p.7：标准式质量比较和差、3 s.f.；Q26，QP p.25（另目视公式），MS p.13：共轭有理化，6+2√5。
- 2E Q6，QP p.5，MS p.5：精确分数与整体回推，40；为 recurring 页的精确分数先修依据，并非循环小数官方题。Q14、Q15，QP p.12，MS p.8：比例差对应份数、逐年复利首次超过门槛。Q23，QP pp.20–21，MS p.13：12000a^t、a=0.8、8 小时约六分之一。Q24，QP p.21，MS p.14：保守负载用最小容量除最大单体质量，再向下取整；自拟教学改用每只箱子均有质量界，避免把平均质量误作每个人的保证。

没有在所读样卷中找到循环小数、全部书面四则或分数指数的专门题，不声称已找到；这些目标由大纲条目和作者独立推导支持。未采用教材题，不把其他资格的深度并入 9260。

## 写正文前的逐能力设计卡

中心问题：数量怎样保持意义，计算怎样既正确又适合情境？先修为整数计数和乘法表；分数页接已认可样章。图只用来解释数轴顺序、舍入区间和比例模型，独立画图题给完整坐标数据。所有新例题与任务为自拟、无官方分值；中英保留同一英文 Question、数学、数据、条件和答案。

| 页面／可观察能力及条目 | 先修与回补 | 主线／完整示范 | 独立输出锚点 | 判断、反馈和同目标重试 |
| --- | --- | --- | --- | --- |
| number-operations：位值、负数和分数排序 N1/N2 | 计数；#place-value、样章 #same-amount | #place-value、#signed-numbers；数轴由左至右增大 | #practice-order | 负数大小、相同单位比较；#retry-order |
| 同页：正负整数和小数书面四则 N2/N3 | 位值和乘法表 | #written-methods、#signed-numbers；借位、进位、部分积、除法余数 | #practice-arithmetic | 估计、逆运算与符号；#retry-arithmetic |
| 同页：真假带分数的正负四则 N2/N7 | 样章 #same-amount；#fraction-arithmetic | #fraction-arithmetic：通分单位、乘法份额、除以分数的逆运算 | #practice-fractions | 换单位/倒数/负带分数范围；#retry-fractions |
| 同页：运算顺序、括号、倒数 N3 | 上述四则 | #operation-order | #practice-order-of-operations | 同级从左往右；#retry-order-of-operations |
| 同页：奇偶质数、质因数、HCF/LCM 选用 N4 | 整除 | #factors-multiples | #practice-factors | 区分等大分组和再次同时；#retry-factors |
| powers-roots-and-standard-form：正整数幂、根 N5 | 乘法 | #powers-and-roots；负号与括号、主平方根 | #practice-powers | 检查乘积和根；#retry-powers |
| 同页：整数指数法则 N6/A6 | 幂的因数意义 | #index-laws；零负指数、非零底数条件 | #practice-indices | 同底数乘除与幂的幂；#retry-indices |
| 同页：标准式运算和显示 N8/N10 | 位值 | #standard-form；统一指数再相加 | #practice-standard-form | 系数范围、单位、E 显示；#retry-standard-form |
| 同页：分数指数 N6/A6 Extension | 根与整数幂 | #fractional-powers，先根后幂 | #practice-fractional-powers | 正底数下等价改写；#retry-fractional-powers |
| 同页：surds 精确运算与有理化 N7 Extension | 平方数、分配律 | #surds，平方因子、同类根式、单根/共轭分母 | #practice-surds | 不把和的根拆开；#retry-surds |
| accuracy-and-bounds：小数位、有效数字、估算 N10/N11 | 位值 | #rounding、#estimation | #practice-rounding、#practice-estimation | 首个非零位与保留位、估算不是界；#retry-rounding |
| 同页：限的含义 N11 Core | 舍入 | #limits，半个舍入单位、端点与真实区间图 | #practice-limits | 正量普通四舍五入；#retry-limits |
| 同页：正量复合上下界 N11 Extension | 分数及限 | #calculated-bounds：和差积商、正分母、保证容量 | #practice-bounds | 每个变量向哪端变化；#retry-bounds |
| recurring-decimals：循环与有限的区别、分数转循环 N12 Extension | 样章 #change-form、书面除法 | #remainders；有限余数、重复周期 | #practice-division | 标明真实重复位，不把截断当等于；#retry-division |
| 同页：纯/混循环转最简分数与证明 N12 Extension | 等式两边相同操作、精确分数 | #align-tails；两个移位让无限尾对齐 | #practice-conversion、#practice-reasoning | 完整消尾、约分、反向核验；#retry-conversion |
| percentage-change：求变化率和变化后量 N15 | 样章 #find-share/#find-part | #multipliers；原量作分母 | #practice-change | 百分点与百分变化、相继变化；#retry-change |
| 同页：简单/复利 N15 Core | 百分数和重复乘法 | #interest；每年基数不同，完整逐年链 | #practice-interest | 固定原本金/上期总量；#retry-interest |
| 同页：逆百分和复利公式 N15 Extension | 乘数、整数幂 | #reverse、#formula-model | #practice-reverse、#practice-model | 除乘数、首次超过须检验相邻整数期；#retry-reverse、#retry-model |
| ratio-and-proportion：比例化简、分配、情境与差 N16–N18 | 分数、除法 | #ratio-parts；统一单位、份数图 | #practice-sharing、#practice-mixture | 区分部分比与部分占整体、单改配料不保持比例；#retry-sharing |
| 同页：单位率、工资、best buy N19 | 小数除法 | #unit-rates | #practice-rates | 统一计量单位、数量约束；#retry-rates |
| 同页：正反比和重复比例 N20 | 乘除、变量 | #direct-inverse；表格数据、画图点与不变量 | #practice-models | 常量是比值/乘积，情境假设；#retry-models |
| 同页：代数变率 A18、指数增长衰减 N20 Extension | 整数幂、公式代入 | #variation、#exponential | #practice-variation、#practice-growth | 指数周期和乘数、识别非线性比例；#retry-variation、#retry-growth |

每页固定提供 #start、#practice、#retry、#next-step、#sources；表中任务拥有各自关闭的提示／解答。不同目标按概念组织，不设相同题量。学后链接数字综合 #number-review，并在后续代数或数据综合返回，记录提示使用与重试情况。

## 代表段先行

选择 accuracy-and-bounds 的区间推理与保守容量建模作为不同于已认可样章的代表学习类型。先写该中英页面、数轴区间 SVG，作者重新求解并以 Fraction 精确核对面积 51.75–68.75、商 23/11–25/9、14 箱及 22 瓶保证，并用合法输入反例排除 15 箱／23 瓶；检查左闭右开和正分母条件。中英英文题干及所有 TeX 对齐检查通过后，才扩展其余五主题。作者自检不是独立审查；用户已指定主执行者随后安排交叉审查，故本组交付仍标待独立审查，不宣称内容审查通过。

主执行者随后实际通读代表页至末，确认正量商端点、安全容量、新重试及舍入估算可追踪；明确不作为最终独立复核。最终稿又加入和差上下界的首次独立任务，待交叉审查核验这部分增补。

## 实际文件与独立证据

下表每个文件均已在 `igcse/mathematics/` 和 `zh/igcse/mathematics/` 写入一份。各对 `Question:` 英文题干、完整 TeX 顺序与稳定锚点严格一致；所有学习页的 subject 均为 `igcse-mathematics`。

| 文件（两语言同名） | 实际范围 | 首次独立任务（均默认不显示提示／解答） | 练习及重试题框数／每语言 TeX 段 |
| --- | --- | --- | --- |
| number-operations.md | N1–N4、N7 精确分数 | #practice-order、#practice-arithmetic、#practice-fractions、#practice-order-of-operations、#practice-factors | 10／101 |
| powers-roots-and-standard-form.md | N5–N8、A6、N10 显示解释 | #practice-powers、#practice-indices、#practice-standard-form、#practice-fractional-powers、#practice-surds | 10／106 |
| accuracy-and-bounds.md | N11、N10 输入及合理性 | #practice-rounding、#practice-estimation、#practice-limits、#practice-bounds | 7／29 |
| recurring-decimals.md | N12 循环部分，Extension | #practice-division、#practice-conversion、#practice-reasoning | 5／43 |
| percentage-change.md | N15，基础计算到反向模型连续展开 | #practice-change、#practice-interest、#practice-reverse、#practice-model | 8／44 |
| ratio-and-proportion.md | N16–N20、A18 | #practice-sharing、#practice-mixture、#practice-rates、#practice-models、#practice-variation、#practice-growth | 11／53 |

图像为 `assets/img/igcse-number-integer-line.svg`、`assets/img/igcse-number-rounding-interval.svg`、`assets/img/igcse-number-ratio-parts.svg`。三图均有 viewBox、title、desc 和非颜色独占的标记；已用 Sharp 离线转 PNG 并逐张查看，文字、刻度、端点和等份对应清楚。图文件为最终资源，临时 PNG 位于系统 Temp，不写公共来源缓存。正反比画图任务给出完整数对、坐标轴范围及解答中的线型／端点说明，学生无需猜测缺图。

## 作者实际检查与修正

- 108 项独立重算断言通过：正负四则及 Fraction 精确分数、HCF/LCM、标准式、分数指数及 surd 数值等值、和差积商的界及容量反例、循环尾块转换、简单／复利、首次过阈值的整年链、单位率、比例、正反变率及增长衰减。浮点等值检查不替代正文中的代数证明。
- 十二页源级检查通过：英文题干、376 段 TeX、锚点严格配对（本轮修补后重跑）；frontmatter；本页恢复链接；跨页源文件及目标锚点；SVG XML/title/desc；公式花括号平衡；51 个练习／重试题框均有两个分别关闭的提示／答案，无嵌套题框。此项只说明源级一致，不等于 Jekyll 或 MathJax 实际渲染通过。
- 修正幂页中文漏写的 `$m$`；调整比例页中英文已知数对的 TeX 出现顺序；补充负整数四则、3 的幂识别、和差上下界首次独立考查；澄清正分数的真假定义、质因数中的指数简写、循环重试变量定义。独立任务不只要求抄写定义，包含未指明方法、反向求量、错误判断、图式转换与新情境。
- N13/N14 的已认可中英分数样章保持原样，只通过链接作为先修。缓存来源、主报告、入口、共享样式和其他作者文件均未编辑。

## Kierkegaard 保存点修补设计（先记录，后改正文）

2026-10-27 收到四项确认发现及学校仅开设 Extension 的新要求。本轮保留全部基础概念/任务与固定锚点，学生正文按自然主题连续学习，去除 Core 分流及逐段 Extension 标签；官方双列判断仍保留在本作者记录作为来源身份，不把单一路线误作删基础知识。

| 保存点发现 | 本轮学生产出及判据 | 受影响位置与反馈设计 |
| --- | --- | --- |
| 1：小于1的除数结论缺条件 | 区分正量的数值增大与负数绝对值增大；原有负除法仍保留 | number-operations #written-methods：明确正被除数及0<除数<1，负商更小、离0更远，逆运算核验 |
| 2：面积乘积界无新重试 | 对新记录8cm/3cm的矩形独立写面积区间并解释端点 | accuracy-and-bounds #retry-bounds 增面积求问；下端18.75可取，上端29.75不可取，正量单调性是理由 |
| 3：由复利终值反求年利率无本页重试 | 新本金600、两年终值636.54，先由平方比求正乘数，再还原年利率并正向核验 | percentage-change #retry-model 增反求任务；提示只指求正乘数，解答保留q²、q、r及600q²的检查 |
| 4：只增加一种配料后新比无重试 | 将新配方4L/10L只加2L第一种，求6:10=3:5并解释未等倍变化 | ratio-and-proportion #retry-sharing 增求问；反馈明确第二种仍10L，不把总量或原比直接当新比 |

本次修补前再次常规读取 spec PDF pp.11–14、2E QP pp.12/21 与 MS pp.8/14、1C QP p.24 与 MS p.12，核对N11界/保证、N15模型/整年检查及N17–18混合计价。新重试全部自拟、无官方分值，最终作者重算与冻结SHA在本节后续补记；此设计卡不是独立复核通过。

## 尚欠项与交接边界

1. 主执行者按用户最新协调，在全部源稿冻结后统一运行 Jekyll、现有适用检查、生成 HTML 与 MathJax 验证、全页链接、手机／桌面、键盘及深浅主题阅读。本作者未运行构建或浏览器，不因源级检查通过而预称技术通过。
2. Kierkegaard 已留下四项确认发现的独立审查保存点；本轮已修补，待其复核修补段及单一路线。独立审查尚未正式交付，不把保存点或作者重算冒充最终内容通过。
3. 学生试用未进行；不宣称学习效果已验证。每页后续链接指向已约定的混合回顾；间隔后真实无帮助作答与重试保持仍待观察。
4. N10 的三角函数模式及操作由三角函数主题承担，本组只覆盖数值输入、括号、标准式显示与合理性检查。没有实际机型按键验收，也不以 fx-CG50 或 CAS 核验暗示 IGCSE 考场许可。
5. 本组所列 N1–N8、N10–N12 循环部分、N15–N20、A6/A18 均有上述实际位置；N9 与 S17 不属本组，不对其集合符号排字作已验证声明。N12 有限小数/百分数和 N13/N14 承接保留样章，不在本组重复覆盖。

## 本轮修补结果与最终冻结交接

2026-10-27：上述四项全部落实到两语言同一英文 Question、提示及解答。单一路线调整覆盖六主题12页：移除学生可见 Core 跳过/分流声明、逐段 Extension 标签及来源折叠区的双学习群体说明；原有整数/小数/分数/舍入/单利/单位率等必要基础全部保留，锚点和跨页路径不变。官方列位的历史核对保留在本记录，不改变9260的实际范围。

- 发现1：正量条件写明；负数除法保留并解释−31.5<−12.6，避免把绝对值增长叫作数值增大。
- 发现2：#retry-bounds 新增面积任务，正量乘积区间为18.75≤A<29.75 cm²；包含下端因为两下限均可取，排除上端因为上限不可取。用区间单调性核验，不以浮点采样证明端点。
- 发现3：#retry-model 新增600→636.54两年反求，636.54/600=1.0609，正乘数1.03，年利率3%；600→618→636.54正向核验。反馈区分两年总增长6.09%与年利率3%，拒绝负乘数。
- 发现4：#retry-sharing 新增只加入2L A，4/10变6/10=3/5，反馈指出B仍10L、未同时等倍放大。原成本36元明确是加料前配方成本。
- 本轮用Fraction/Decimal独立重算以上新数值，并对新增面积作代数端点检查；12页英文Question、完整TeX序列、稳定锚点配对通过，TeX分别101/106/29/43/44/53（合376），51个练习框各有两个独立默认关闭的帮助区；必需锚点、frontmatter、本页恢复链接、无控制字符及无残留Core/Extension学生分流文字检查完成。数字只用于防漏，不代表学习质量通过。
- 3个Number SVG未修改。没有运行Jekyll、站点服务或浏览器，没有改测试、入口、共享样式、缓存、已认可分数样章或其他作者源稿，没有Git提交/推送/发布。

**冻结交接给 Kierkegaard：**请复核 #written-methods 的条件与负数比较、#retry-bounds 面积端点、#retry-model 年利率反求、#retry-sharing 单加成分，以及六主题单一路线措辞。此处记录作者已修补并冻结，不代其关闭独立审查发现。

| 冻结源文件 | SHA-256 |
| --- | --- |
| `assets/img/igcse-number-integer-line.svg` | `3bbd717a4042f1f20f0865c73a88f4de15f0a5f9de0a6d1d347eb525fc2dd0cc` |
| `assets/img/igcse-number-ratio-parts.svg` | `10addbc3df8477fdbd829f6643444c3b5c07a45a133d743d64663a0342b1b1b9` |
| `assets/img/igcse-number-rounding-interval.svg` | `a70e6c1af2c97fefc600deeeaebfd25c59326c0493ef2c0e1010e79074bcdf92` |
| `igcse/mathematics/accuracy-and-bounds.md` | `072fc821a0d2f8f04a377a137c72a1830a85d6471fa932975812ab4e051afd2a` |
| `igcse/mathematics/number-operations.md` | `f33030a781ce730f07571ce5be12d9f0cd213fdbafa01aff4102dd32b754b42e` |
| `igcse/mathematics/percentage-change.md` | `03c1048bc009552b591c1611fa23f83129a07faa7580a63d602654640826ee7e` |
| `igcse/mathematics/powers-roots-and-standard-form.md` | `c9db2208d143f842882a1a9c77e8c9ea4c5b30fd0ecd4c91ba68bd8a38126e73` |
| `igcse/mathematics/ratio-and-proportion.md` | `b0e5e8bedd6fb206c0eacd23af5fc9fc1ee31c05eed820d28d3874a6600dbf1d` |
| `igcse/mathematics/recurring-decimals.md` | `3b80b35e0077eab72a29033c768f9b673bddd88929a32c3d960be1f412b14512` |
| `zh/igcse/mathematics/accuracy-and-bounds.md` | `c34ef7e9d5bc1f08e8517a0c5ed34dff39d5eeb7c37817bf608661fe7cace449` |
| `zh/igcse/mathematics/number-operations.md` | `b637aa1d10d449cff0d3beebac0cb577aa2ed4bb2c99e73df9a1bf497f6a7353` |
| `zh/igcse/mathematics/percentage-change.md` | `3b51c9e8678ce7c851ed1ae256cb68dd2add1b28f720a9d5a2299d618e9ca458` |
| `zh/igcse/mathematics/powers-roots-and-standard-form.md` | `b6b1a4503c1432322ce3fbdb6c37173839f25e13b239008c2c604950e68865df` |
| `zh/igcse/mathematics/ratio-and-proportion.md` | `8f24e3d4f22d4cbd000dad768f54d244b16b3a1353b57b9d97919c63cda78d85` |
| `zh/igcse/mathematics/recurring-decimals.md` | `eba5cce7cdce27aa692acd86c7dcdd3424b932fbc0e66c67e730762f7f2426a8` |
