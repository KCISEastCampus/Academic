# MA03 函数与级数扩展实施记录

日期：2026-10-23。基线：bb18c70。工作树：D:/GitHub/Academic-ma03-numerical。
状态：设计完成，正文局部修订进行中；待主代理统一构建、真实阅读验收及交叉独立复审。

## 范围与写入边界

仅负责双语 binomial-series.md、trigonometric-functions-and-formulae.md、exponential-and-logarithmic-functions.md，及 scripts/test-binomial-series.js、test-trigonometry.js、test-exponential-logarithmic.js 和本记录。保留元数据、旧锚点、现有可靠图像与正文。复用 Numerical Methods 的 reading_layout/worked-example/lesson-check；不改共享布局/CSS/其他组，不 commit/push/build，不接触原 Academic 的 dirty 课程稿。临时核验材料位于系统临时目录 ma03-functions-series-20261023。

已读 AGENTS.md、course-content-standard.md v1.1、MATH_FORMULA_GUIDELINES.md、codex-collaboration.md、数值方法样章及本组三章双语原文和原专题测试。用户已批准样章并授权扩展，本记录不将这种授权记为新章节独立内容审查通过。

## 来源身份与实际阅读

- 当前资格页：[OxfordAQA 9660 qualification](https://www.oxfordaqa.com/qualification/international-as-and-a-level-mathematics-9660/) ，2026-10-23 访问。
- 当前大纲：[Mathematics 9660 specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf) ，PDF 36 页，正文 9660、Version 5.2；实读 P2.1/P2.2（印刷 p21）、P2.4（p22）、P2.5（p23）。本组主要是 P2.2、P2.4、P2.5；反函数/变换与参数限制连接 P2.1/P2.3，积分应用仅指向已有后续页。
- January 2025 官方出版 QP/MS 镜像：[January 2025 MA03 question paper](https://aqamat.alevelclouds.com/25_01_QP_P2.pdf) 、[January 2025 MA03 mark scheme](https://aqamat.alevelclouds.com/25_01_MS_P2.pdf) 。同时读仓库 assets/pdf/fx-cg50/references/ 下 oxfordaqa-ma03-2025-january-question-paper.pdf / mark-scheme.pdf 的对应正文。QP：9660/MA03，13 January 2025，120 marks，32 页；MS：MA03，January 2025，Version 1.0 Final，22 页。没有使用资格页误指 FM01 的 sample 链接。
- 级数：实读 Q14(a)–(c)，QP pp26–27 / MS pp21–22。核对分解后提出常数、展开、合并系数、使用前面结果；官方题的参数条件不被泛化成页面的新通则。
- 三角：实读 Q7(a)(i)–(ii)、Q7(b)，QP pp14–15 / MS p12。核对系数/相位、转换角的区间、sec 二次式、分支与最后精度；评分允许有效不同方法，不把复习题限定为唯一解法。
- 指数：实读 Q10(b)(i)，QP pp18–19 / MS p15。核对先建立指数关系、化为二次方程、拒绝负的指数值、完整展示给定结论的推理。本组不声称核验 Q10(b)(ii) 的面积解答。
- 所有保留/新增例题、练习、重试及数据均自拟，不分配官方分值；自拟检查点不称官方评分标准。教材页码只保留为原有定位，不声称本次重新核验教材原书。

## 设计卡

| 页面 | 中心问题与精确先修 | 核心决策、图和示范用途 | 独立任务与回顾 |
| --- | --- | --- | --- |
| Binomial Series | 怎样把函数写成可展开形式，并区分适用范围与截断精度？先会指数、乘多项式、分式；页内回补整数展开/阶乘，部分分式连到对应 Method。AS binomial.md 实为概率分布，不能误作代数展开先修。 | 用完整的 n、u、外部因子解释符号及范围；保留六例，补重复线性因子的一段连续示范；不以图凑数。 | 局部补步→原独立题→未指定分解法的新有理函数→按错误返回原例→新题重试→有定位的延后合并/近似任务。 |
| Trigonometry | 怎样选表征且不丢掉定义域或区间内的根？先会 AS l15/l16 的弧度、周期与象限，函数页的反函数及变换。 | 区分反函数与倒数；保留倒数图并让新任务画变换后的图；相位/倍角示范连贯保留全部分支。 | 转换区间的局部补步→中性标题原独立题→新混合倒数方程→按反函数/证明消参/相位/零因子四类恢复→延后未标方法方程，接受等价有效方法。 |
| Exponentials and Logarithms | 怎样从变化/图像判断模型，且在合法定义域内解方程？先会指数法则、AS l17 对数与不等式、函数页的反函数/变换。 | 从固定比例选择模型，连续演示负对数除法与整时刻检查；保留正性、图像与反函数的联系。 | 局部补步→中性标题原题→构造数据反求模型及 k→模型/法则/方程/图像对应重试→延后复合关系与严格阈值任务。 |

## 逐目标证据表（写正文前建立；现已按实际正文锚点复核）

EN 位于 alevel/a2-mathematics/，ZH 位于 zh/alevel/a2-mathematics/；同名页面与相同锚点互相对应。

| 目标与官方条目 | 先修/回补 | 概念与示范 | 独立产出 | 判定、错误与新重试 |
| --- | --- | --- | --- | --- |
| B1 有理幂、替换整个 u、保留常数及范围（P2.2） | #prerequisite-repair；AS algebra/#l01 | #the-binomial-series；Example 1–3；#check-normalise | #question-1--reciprocal、#question-2--outside-factor、#question-3--signs | 系数/原式常数项/整表达式范围；#retry-normalise 用 x² 输入检验迁移 |
| B2 有理函数含重复线性因子、合并乘积（P2.2） | partial-fractions/#method；多项式乘法 | #partial-fractions-and-products；Example 4–5、#example-repeated-factor | #question-4--two-ranges、#question-5--a-product、#question-7 | 分解重合成、所需幂次配对、各范围交集；#retry-combine |
| B3 选择近似形式并检查截断精度（P2.2 应用） | 指数/平方根；B1–B2 | #approximations；Example 6 | #question-6--choose-a-useful-form、#later-review | 小参数、约等号、舍入与实际校验；#retry-approximation；不能用范围当误差保证 |
| T1 反三角定义域/值域/图像（P2.4，连接 P2.1） | AS trigonometry/#l16；functions/#inverse-functions | #inverse-trigonometric-functions；Example 1 | #q1--inverse-values-and-graph | 实际作图与三点、主值不是全部方程解；#retry-inverse |
| T2 倒数图像、定义域与方程完整区间（P2.4） | 周期、单位与象限 | #reciprocal-trigonometric-functions；原 SVG；Example 2；#check-angle-interval | #q2--reciprocal-equation、#q9 | 图像须标尺度/渐近线；未知分母非零，全部分支；#retry-zero-factor、#later-review |
| T3 恒等证明及消参限制（P2.4，连接 P2.3） | 因式分解与定义域 | #trigonometric-identities；Example 3–4、9 | #q3--an-identity-and-its-domain、#q4--eliminate-the-parameter | 符号论证而非单值验证、曲线限制保留；#retry-identities |
| T4 和差角/幅角选择与最值（P2.4） | 精确值与系数比较 | #compound-angle-formulae、#sine-and-cosine-forms；Example 5–7 | #q5--exact-values-and-a-compound-angle-equation、#q6--coefficients-signs-and-extrema | 全系数/象限/周期/全精度；#retry-phase |
| T5 二倍角、幂与不丢根（P2.4） | AS algebra/#l02；T2–T4 | #double-angle-formulae；Example 8–9 | #q7--a-quadratic-equation、#q8--double-angle-and-powers、#q9、#later-review | 不除可能为零的因子，原方程验证与完整性分开；#retry-zero-factor |
| E1 选增长/衰减模型、反求倍数、判断阈值和局限（P2.5） | AS exponentials-logarithms/#l17；不等式 | #exponential-growth-and-decay、Example 1–2、#check-threshold、#connecting-the-models | #q1--growth-and-comparing-models、#q2--decay-and-model-assumptions、#q8、#later-model | 单位、比例、负对数翻号、邻整数、k=ln q；#retry-model |
| E2 e/ln 图像与逆关系（P2.5，连接 P2.1） | functions/#inverse-functions；变换 | #the-exponential-function、#the-logarithmic-function；原 SVG；Example 3、7–8 | #q3--two-transformed-graphs、#q7--inverse-and-a-composite-function | 真正作图、渐近线侧别、定义域值域互换；#retry-graphs |
| E3 对数法则的原定义域（P2.5，连接 AS 先修） | AS l17；E2 的正性 | #natural-logarithms；Example 4–5 | #q4--logarithm-laws-and-domains、#q5--check-the-original-logarithms | 分别检查原真数，不把合并式范围当原范围；#retry-laws |
| E4 指数/对数方程与复合关系（P2.5/P2.1） | 因式分解；E2–E3 | #solving-equations；Example 5–6、8 | #q5--check-the-original-logarithms、#q6--exponential-equations、#q7--inverse-and-a-composite-function、#later-review | u>0、真数、回代、唯一性说明；#retry-equations |

## 发现、修订与检查

### 作者发现与修正

| 位置/目标 | 具体发现与局部修订 | 本轮作者复查 |
| --- | --- | --- |
| 三章起点与先修 | 保留原课程顺序；明确仅需调用的 AS 指数、二次式、弧度/周期/象限、一般对数及 MA03 反函数/部分分式入口。级数页内补整数展开与阶乘，避免把 AS 概率分布 binomial.md 误作代数先修。exp/log 在首次使用 ln 前补符号解释。 | 声明的先修、页内回补与 64 处本地路径/片段可定位。没有把微积分列为 exp/log 先修。 |
| 三章结构、任务与标题 | 复用 reading_layout、worked-example、lesson-check；原例题解法完整包围，每题有独立边界、默认关闭的提示和解答；中性题目标题保留旧 ID，来源降为文末折叠。按主代理源码预检，将 H2 后的 H4 改为语义上的 H3，不跳级。 | 三个专题 source-only 检查通过：无题框嵌套，题干先于帮助，双语标题层级/ID 一致；原有元数据（除 TOC 深度）、锚点和两张可靠图像保留。尚未实际检查渲染。 |
| B1/B2 | 增加 x² 输入的重试，避免范围只背线性端点；补连续的重复因子示范及不标分解方法的新有理函数题。恢复题含普通乘积、平方因子和两个不同范围的交集。 | 由通项递推求系数，再乘回原分母核算：示范 F 为 3+2x+5x²+4x³；新题 G 为 2+3x+5x²+6x³；恢复组合题为 2+x+5x²+7x³。原独立题仍保留。 |
| B3 | 回顾把组合、范围与精度判断联系起来；修正初稿 H(0.01) 的错误末位，写为约 1.0202540700。 | 三次式给 1.020254，两者 4dp 均为 1.0203；x=0.49 时截断值 3.050846 与原式约 10.536 的差距否定“在范围内即足够精确”。重试 sqrt(15.84) 的三次近似 3.97994975 和 5dp 均重新核算。 |
| T1/T2 | 原来仅写点的任务改成实际 sketch；新增依赖现有 sec 图的 2sec(2θ) 任务，答案置于自己的解答内。反函数新重试改变内层符号；倒数图的新重试使用 cosec(2x)。 | 图的定义域、渐近线、关键点、取值分支和边界重新计算；旧图及替代文字保留。没有用删改必要替代文字隐藏答案。 |
| T3/T4/T5 | 保留完整恒等证明、消参与相位系数解释；新增混合 sec/tan 方程同时检查定义域和全角区间。恢复表对应反函数、证明/曲线限制、相位、零因子/区间。延后题允许二次式或一般 cos 相等关系等有效方法。 | Q9 先化为 (2secφ−3)(secφ+1)=0，解析枚举 cosφ=2/3 与 −1 的全部分支、排除极点、再回代原式。secφ=−1 是接触零点，数值异号扫描不能证明完整性；测试单独覆盖该点。重试的五个根包括两端点，延后题包括 0 与 2π。 |
| E1 | 新增构造数据反求两个月/一个月因子，阈值与 Ae^(kt) 转换同题判断。恢复题特设严格阈值恰等于整年的情形；延后回顾区分连续到达时刻与首个严格低于阈值的整小时。 | q=0.75，阈值 3.04318… 月，首次整月 4；q=0.9 的恢复题 N2=81 仍不低于 81，首次 3；半衰期题恰为 80 在 9h，首次整小时 10，N10≈63.50。数据标明构造，未来固定倍数不是由三点证明。 |
| E2/E3/E4 | 练习明确 sketch 指数/对数图并判断反射关系；恢复题补复合函数及原定义域；保留对数原真数、指数代换正性的完整步骤。延后交点任务需说明唯一性。 | 复合 f(ln x)=2+1/x 仍须 x>0；合并对数不扩域，所有拒绝根回到原真数或 u>0 判断。交点 (ln(5/2),ln(5/2)) 满足原式，单调性或指数单射性说明唯一。 |
| 英中对齐 | 英文题干、公式、条件、答案、提示和恢复路径均逐段对读；修齐 exp/log 的符号解释、复合解答和公式出现顺序。 | Binomial 263/263、trigonometry 354/354、exp/log 437/437 个公式片段精确序列相同；相应 12、15、15 个 task 英文题干完全一致。计数只作回归证据，不代替逐目标内容审查。 |

### 实际执行的检查

- `node scripts/test-binomial-series.js --source-only`：通过。
- `node scripts/test-trigonometry.js --source-only`：通过。
- `node scripts/test-exponential-logarithmic.js --source-only`：通过。
- 上述三个脚本的 `node --check`：通过；保留旧数学断言，新增独立系数/重合成、范围、全部三角分支、图像关键坐标、严格阈值及复合定义域核算。
- `git diff --check -- <本组六份正文及三个专题测试>`：通过；本记录写入后再对十个分配文件检查。只读检查其他组共享内容的链接，没有修改其他组。
- 临时只读检查：64 处本地路径/片段均存在，TeX 内无 ASCII 竖线；原元数据（除 TOC 深度）与可靠图像原样保留。
- 专题脚本默认模式仍检查生成 HTML 的布局、锚点、题框、关闭帮助、表格/公式及图像文件；本轮只执行 source-only。没有用旧 _site 结果当作新版的技术通过证据。

### 冻结与交叉复审交接

作者自检完成；本组在 bb18c70 基线上的未提交修订已冻结，交由主代理统一构建及独立交叉复审。本轮只改分配的六份双语正文、三个专题测试与本记录，共十个文件；不 commit/push/build，不改共享 CSS/布局，不碰原 D:/GitHub/Academic 的 dirty 课程稿。临时原文快照与核算脚本仅保存在本任务临时目录。

交叉复审优先重新独立求解重复因子级数、三角 Q9 的接触根与区间、严格阈值和复合定义域；检查每项目标的独立产出及对应恢复是否可执行。作者自检不称独立内容复审通过。

主代理构建后运行三个专题脚本的默认模式，并统一运行适用的 bilingual、heading-hierarchy、pure-consistency、reading-layout 等检查。再实际阅读三章中英文的代表性示范→尝试→展开帮助→恢复→回顾路线，检查桌面/手机、键盘、语言切换、公式、图像及主题。上述生成 HTML、实际阅读、交叉独立复审和学生试用均尚未完成；当前不标“技术检查通过”或“内容审查通过”，也不宣称学习效果已验证。
