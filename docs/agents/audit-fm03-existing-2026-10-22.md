# FM03 既有十一课内容、来源与源码审计（2026-10-22）

## 本轮结论与边界

目标资格为 **OxfordAQA International A-level Further Mathematics 9665，Unit FP2 / FM03，Version 5.2**。本轮直接检查共享工作树中的十一课中英对，覆盖 **FP2.1–FP2.11、81 个编号例题、78 组编号练习**，以及正文推导、速查、未编号小例子和新增的十一组诊断／独立重试。数量由本轮源码重新统计，多小问按一组计；不含入口与其他代理负责的五节新课。

本轮未发现需要更改既有解答数值或数学结论的确证错误。旧审计提出的九道 AQA 题来源记录缺口已补齐原卷题号及对应 MS；另外补核反三角三题，并把级数 Q8 追溯到实际原卷。新增诊断／重试有独立数学检查，不能用双语相同或字符串匹配代替核算。

**这不是全站交付全通过结论。** 本代理只完成内容、数学、来源和源码检查。Jekyll、生成 HTML、桌面／手机、键盘及辅助技术验收由主代理负责；本轮最后一次 prime、分值标签和排版修改后仍须最终 rebuild。没有学生试用或学习效果证据，未提交、推送或发布。

基准 HEAD：`6655eaf00cb75d88061f514be27839b9d1d4c635`。本轮已读根 `AGENTS.md`、`C:\Users\mi\.codex\RTK.md`、`docs/MATH_FORMULA_GUIDELINES.md`、[剩余单元研究](research-fm03-remaining-units-2026-10-22.md)、[官方证据核查](research-fm03-official-evidence-2026-10-22.md)及[旧审计](audit-a2-further-pure-2026-10-15.md)。旧审计只作问题线索，以下阅读、核算与执行结果均为本轮工作。

## 范围逐项落点与本轮核算

大纲正文依据[官网可读的 9665 Version 5.2 PDF](https://www.oxfordaqa.com/wp-content/uploads/2022/06/oxfordaqa-a-level-further-mathematics-specification.pdf#page=15)，实际读取 PDF 第 15–19 页／印刷第 16–20 页。当前资格页与新路径身份由本日研究记录提供；没有证实 2022 与 2026 路径的字节一致性。下表不是按教材标题推定范围。

下表的 E、Q 分别指本页全部编号例题、练习。每课中英文均阅读；逐题重新检查推理、数据、运算、条件和答案。代数展开／代回与解析积分、证明逻辑的检查分开，有限取样不冒充全范围证明。

| 大纲／课程文件（英文／中文） | 逐题范围、例／练 | 完整范围与本轮重点核算 |
| --- | --- | --- |
| FP2.1 [Roots](../../alevel/a2-further-mathematics/roots-and-polynomials.md)／[中文](../../zh/alevel/a2-further-mathematics/roots-and-polynomials.md) | E1–6，Q1–7；6／7 | 根与系数、重根计数、实系数共轭条件、换根方程。重算 E1 平方和 41/4、E2 新三次式、E3–4 二次因式与全部根、E4 参数 15；Q1 平方和 10，Q2 其余四根和 5/2、积 4，Q3 平移后三次式，Q4 四次式两因子，Q5 常数 5+i，Q7 p=-4、q=-2、r=20。E6／Q6 严格单调与变号分别证明唯一性和定位，非实根实部界合法。 |
| FP2.4 [Induction](../../alevel/a2-further-mathematics/proof-by-induction.md)／[中文](../../zh/alevel/a2-further-mathematics/proof-by-induction.md) | E1–6，Q1–6；6／6 | 序列、求和及其他归纳应用：平方和、递推、整除、De Moivre、n 阶导数、矩阵。逐步检查初始、任意假设、使用假设的归纳步和完整范围结论；Q2 检查两个初始值及两个连续假设；Q6 从 n=2 开始、差为 7·15^n。导数相位及矩阵乘法次序正确。 |
| FP2.5 [Finite series](../../alevel/a2-further-mathematics/finite-series.md)／[中文](../../zh/alevel/a2-further-mathematics/finite-series.md) | E1–4，Q1–5；4／5 | 任意适当方法求有限和：归纳、部分分式、差分、幂和。逐项检查一格／两格相消、短和重叠和不同下限；Q3=19/1365，Q5=894/1225；E4 去除首两项合计 11。Q4 归纳步骤不以相消法替代指定方法。 |
| FP2.6 [Series and limits](../../alevel/a2-further-mathematics/series-and-limits.md)／[中文](../../zh/alevel/a2-further-mathematics/series-and-limits.md) | E1–10，Q1–8；10／8 | Maclaurin、五种标准展开及相关函数范围、乘积／复合、两类标准极限、展开求极限、反常积分显式极限。核算 E4 系数 1,2,11/6,1；E5 三次项零、四次项 -1/8；E6–7 极限 2、1/12；E8–10 积分 1、-1/4、1/4。Q1 端点均发散；Q2 包含 -1/3、不含 1/3；Q3 常数因子 1/2；Q4 四次项 e/6；Q5 极限 -3/2、1/4；Q6 分别发散、1/9；Q7 项为 3x²；Q8=2e³/9。调和级数分组证明、比值判别的无结论情形也检查。 |
| FP2.2 [De Moivre](../../alevel/a2-further-mathematics/de-moivres-theorem.md)／[中文](../../zh/alevel/a2-further-mathematics/de-moivres-theorem.md) | E1–10，Q1–8；10／8 | 整数幂、零／负幂、指数形式、单位根、复方根的几何与根式、双向三角恒等变换和积分。E1=8i，E2=-i/8；E3–4 所有根及象限；E6 四个解均代回分式根关系且分母非零；E7 三倍角、E8 五次幂、E9 原函数系数；E10 实部积分系数 2/13、3/13。Q1 主辐角 -2π/3，Q2 正弦余弦交换的符号，Q3–4 全部根与平移圆心，Q5 非零除数，Q6 四次余弦及原函数，Q7 最小正角 π/10，Q8 第五角分母和正根乘积 √5。 |
| FP2.3 [Polar](../../alevel/a2-further-mathematics/polar-coordinates.md)／[中文](../../zh/alevel/a2-further-mathematics/polar-coordinates.md) | E1–9，Q1–8；9／8 | 坐标／曲线转换、正半径草图、面积公式及所需角限。极点以外采用官方 r>0；不要求极坐标切线公式。E3 直线的正分母区间，E4–5 负半径剔除，E6 交点及弦长，E7 单瓣 π/3，E8 螺线 7π³/12，E9 公共面积 3π/4-3√3/4。Q2 双曲线允许象限、Q3 两个正半径瓣且单瓣 π/2、Q4=π+2、Q5=π/2-1；Q6 平方后 r 保持正、Q7 圆通过极点、Q8=13/3。 |
| FP2.7 [Inverse trig](../../alevel/a2-further-mathematics/inverse-trigonometric-functions.md)／[中文](../../zh/alevel/a2-further-mathematics/inverse-trigonometric-functions.md) | E1–8，Q1–8；8／8 | 三种反三角导数、两种标准积分，含链式法则、配方与定积分。核算所有缩放系数；E2 切线斜率 -2；E3 有理内函数导数分母 x⁴+3x²+1；E6 开区间；E7 端点反常积分 π/2；E8 分部积分符号。Q2 两个导数及有效区间，Q3–4 不同系数，Q5 恒等式仅 x<1，Q6=π/(4√2)，Q7=√3π/6-1/2，Q8=π/4-ln√2。 |
| FP2.8 [Arc / surface](../../alevel/a2-further-mathematics/arc-length-and-surface-area.md)／[中文](../../zh/alevel/a2-further-mathematics/arc-length-and-surface-area.md) | E1–6，Q1–7；6／7 | 直角坐标及参数弧长、绕 x 轴旋转面积的四种形式。E1=14/3，E2=3/4+(ln2)/2，E3 速率 tan t、弧长 ln2；E4–6 曲面积依次 8π√2、2π√2、8π。Q1–3 长度 2√10、√5+ln(2+√5)/2、3π/2；Q4–5 面积 4π√2、8π√2；Q6 全圆长 2π、独立球面只计 4π；Q7 长 √2、面积 π√2。半径取绝对值、端盖排除、描线重复与旋转重叠分开检查。 |
| FP2.9 [Hyperbolic](../../alevel/a2-further-mathematics/hyperbolic-functions.md)／[中文](../../zh/alevel/a2-further-mathematics/hyperbolic-functions.md) | E1–9，Q1–8；9／8 | 指数定义证明恒等式、线性组合方程、六种核心图、三个反函数对数形式及证明、直接／反函数求导证明、积分。E1 精确分数；E2 只保留正指数根；E3=(ln3)/2；E4 对数分支；E5–6 链式系数与定义域；E7–9 原函数逐一求导。Q3 两正根均保留，Q4 负输入 acosh 无实值，Q5 符号，Q6 排除 π/2+kπ，Q7 换元，Q8 三种积分的 1/2、1/10、1/2 与负支限制。倒数函数域中的集合括号源码正确。 |
| FP2.10 [First order](../../alevel/a2-further-mathematics/first-order-differential-equations.md)／[中文](../../zh/alevel/a2-further-mathematics/first-order-differential-equations.md) | E1–6，Q1–6；6／6 | P、Q 为变量函数的一阶线性方程；标准化、积分因子推导、CF+PI、通解、初值和边值。十二组解均重新求导代回并检查条件；E3 乘 tan x 后导数为 2tan²x、条件常数 π/2-1，端点均排除；E6 指数重合须乘 x；Q3 用 e^(x²)，Q6 虽得多项式 x²-x，原方程仍只能在 x<0 讨论。 |
| FP2.11 [Second order](../../alevel/a2-further-mathematics/second-order-differential-equations.md)／[中文](../../zh/alevel/a2-further-mathematics/second-order-differential-equations.md) | E1–7，Q1–7；7／7 | 整数常系数、实／复／重辅助根、CF+PI；指数／正弦／余弦／四次以内多项式及线性组合；初值边值。十四组解均重新代回和查条件；E5 三角 PI 两项均必需，E6 重根乘 x²；E7=(3+2x)e^(-2x)-2x-1，逐项处理无穷远导数；Q4 PI=x⁴-12x²+24，Q6=sin2x-2xcos2x，Q7=x³+2x²+1。右端次数限制不错误施加给 PI；边值不唯一反例 Bsin x 正确。 |

## 原题与评分材料：本轮实际核读

以下页码均为 **PDF 页，从 1 起**。旧 AQA 是另一资格 **Mathematics 6360 / MFP2、MFP3**，不能称为 OxfordAQA FM03 历年题；只作对应教学补充。实际原卷及配套 AQA 编写的 MS 从 PMT 目录取得，部分 QP 为 condensed 排版，**不是从 AQA 官网下载的字节原件**。2006 QP 文本乱码的相关题页另渲染目视；极坐标图题亦读图对照。没有猜题号，也没有为消除检查失败删除题目或覆盖。

| 本课位置 | 原卷身份／题号 | QP／MS PDF 页 | 本轮读取并比较的内容 |
| --- | --- | --- | --- |
| Roots Q7 | MFP2 Jan2006 Q2 | 2／3 | 两部分题文、5+5 分；根和、平方和及共轭根乘积。QP p2 目视。 |
| Induction Q6 | MFP2 Jun2006 Q6 | 4／6 | f(n+1)-8f(n)、4+4 分、n≥2 的归纳。QP p4 目视。 |
| Finite Q5 | MFP2 Jun2010 Q2 | 3／4 | 部分分式和 n=48 相消，3+5 分。 |
| Series Q7 | MFP3 Jan2013 Q2 | 2／4 | 展开及乘积二次项，1+4 分。 |
| De Moivre Q7 | MFP2 Jun2007 Q3 | 2／4 | 第十五幂为 -i，最小正角，5 分。 |
| De Moivre Q8 | MFP2 Jun2011 Q7 | 4／7 | 五倍角、四次方程、正根乘积，5+3+3+5 分。 |
| Polar Q6 | MFP3 Jun2014 Q3 | 6／5 | r(4-3cosθ)=4 的转换及 4 分；QP p6 目视。 |
| Polar Q7 | MFP3 Jun2013 Q2 | 2／4 | 以原点为极点的圆方程及 4 分。 |
| Polar Q8 | MFP3 Jan2009 Q3 | 3／4 | 曲线、角域、极点、初始线、面积和 6 分；QP p3 目视。图已重绘，保留改编标记；英中统一 **6 marks (original question)**，分值属于原题。 |
| Inverse trig Q6 | MFP2 Jan2012 Q6 | 3／7 | 配方及精确积分，2+6 分；另与 FM03 Specimen2018 Q9、MS p12 比较。 |
| Inverse trig Q7 | MFP2 Jan2011 Q5 | 3／5 | 根式导数、反正弦分部积分，2+6 分。 |
| Inverse trig Q8 | MFP2 Jun2007 Q4 | 3／5 | 乘积导数、积分及 2+5 分。 |
| Series Q8 | **MFP3 Jun2011 Q3** | **2／6** | 本轮新追溯：先在 Combined QP p52 找到卷尾身份，再读单卷和配套 MS。三小问题文对应，原配分为 3+1+3；课程继续标教材改编，不另给改编题官方分。解为 2e³/9。 |

所有题目所在课程页现有直接 QP／MS 链接和本轮读取日期；教材章页只保留为原有交叉定位，**本轮没有取回整本教材逐页校勘**。Series Q8 的直接材料为[单卷 QP p2](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/June%202011%20QP%20-%20FP3%20AQA.pdf#page=2)及[配套 MS p6](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/June%202011%20MS%20-%20FP3%20AQA.PDF#page=6)，不是由题型相似猜测的年份。

官方 OxfordAQA 样卷按正文识别为 **FM03 Specimen 2018**。本轮读到并用于课程比对的 QP／配套 MS 如下，未宣称整卷审计：

| 本课位置 | 实际读取的 QP／MS 页 | 改编与核算边界 |
| --- | --- | --- |
| Hyperbolic E3 | Q2，QP pp4–5；MS p5 | 改方程，保留指数／加法公式的教学方法；非原题、无官方配分。 |
| First order E3 | Q5，QP p10；MS p8 | 改右端和条件；核对积分因子方法后独立解新方程。 |
| Second order E7 | Q7，QP pp12–13；MS p10 | 改方程及条件；新 PI 和无穷远条件独立代回。 |
| Inverse trig Q6 | Q9，QP pp15–16；MS p12 | 与旧 AQA Jan2012 Q6 同题；核对配方、换元、系数与积分限。 |
| Arc E3 | Q11，QP pp18–19；MS p14 | 保留方法并改写题文；检查正速率与弧长，不给新官方分。 |

样卷链接：[QP](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-specimen-paper-2019-v3.pdf)、[MS](https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-mark-scheme-2016-v1.pdf)。文件名中的年份不代替正文身份。归纳课末补充证据改为本轮实际用 pypdf 阅读的仓库 [FM03 Jun2024 Q7 / MS pp10–11](../../assets/pdf/fx-cg50/references/oxfordaqa-fm03-2024-june-mark-scheme.pdf#page=10)及[Jan2025 Q5 / MS p8](../../assets/pdf/fx-cg50/references/oxfordaqa-fm03-2025-january-mark-scheme.pdf#page=8)；它们支持证明的证据安排，不替代本课旧 Jun2006 Q6 的配套 MS。

## 新增诊断与独立重试：可重跑数学证据

文件：[scripts/test-further-retry.js](../../scripts/test-further-retry.js)。运行：`node scripts/test-further-retry.js`。无新依赖、无网络或构建要求，不写源文件。使用 BigInt 有理数、多项式／Laurent 多项式、精确复数、求导和定积分核验；同时把题目／答案关键片段绑定到两个语言的当前源码，防止题已改而数学检查仍测旧值。**源码绑定只是防陈旧检查，不是数学证据。**

| 课题 | 新任务目的与数学核验 |
| --- | --- |
| Roots | 诊断复系数不能套共轭根；精确核对两根和／积。重试反求二次因子与首一三次式，三个根逐一代回、根和 6、根积 10。 |
| Induction | 诊断有限个样例不构成证明。新求和先查 n=1，再精确核对任意 k 的归纳系数恒等式；n=1…25 只是补充算术检查。明确要求完整英文证明。 |
| Finite | 诊断两格相消漏端项；由部分和逆求通项，交叉相乘的多项式分子恒为 1，另查 S0 和首项。 |
| Series | 诊断过早截断；线性系数 a-2 唯一为零时 a=2，二次系数 a²/2 给极限 2。保留一次项会产生 c/x，不能有有限双侧极限。 |
| De Moivre | 诊断漏 2kπ；从平移正方形构造四次式，精确验证四个不同根、共同半径与四分之一转动关系。 |
| Polar | 诊断先减半径再平方；用精确 Fourier 系数积分，心形线平方常数项 3/2，面积差 5π/2。0≤1+cosθ≤2 在全角域证明不交换边界。 |
| Inverse trig | 诊断主值区间；用内函数导数和分母系数核对新原函数，初值 π/6；以 π 的有理系数核对开值域 (-π/3,2π/3)。 |
| Arc | 诊断条宽漏 ds；由端点构造参数式，核验两端、正半径、速率平方 25、长度 5、精确积分曲面积 30π，不加端盖。 |
| Hyperbolic | 诊断改对数不能修复 acosh 定义域；隐式导数给 k=2，指数取值 3 与 1/3 精确核对 x=2/3。斜率分母平方为 1+4x²，随绝对值增大；另核对奇性、增长及无实数 acosh(-2)。图像渐近线结论另据对数无界性解析检查，不用几个数值样本当证明。 |
| First order | 诊断先标准化再取积分因子；任意 C 的系数必须消去，反求 P=1/x、Q=3x。解 x²-1/x 的 Laurent 多项式求导代回、初值及 x>0 限制均保留。 |
| Second order | 诊断重复根只乘 x 仍在 CF；精确指数微分算子核对两个独立 CF 项、反求首一方程、右端 6e^(-x)、解 (1+x+3x²)e^(-x) 及两个初值。 |

最终执行结果：**11/11 通过，退出码 0**。所有新题为自拟，无官方分值；每课反馈、提示、重试解答为三个相互独立、默认关闭的 details。建议先解释错误，再关闭解答独立作答；使用提示后另行重试。没有据此宣称学生已经独立掌握。

## 修复、双语、答案泄露与源码检查

本轮实际修改：

1. 补齐上述九题及反三角三题的 QP／MS 身份、页码与核读记录；Series Q8 补可靠原卷来源但保留教学改编身份。未删除旧题、降低范围或伪造新官方分值。
2. 十一课补诊断／独立重试，九课补统一自拟／原题／改编的身份说明；一阶、二阶已有逐例身份。弧长补光滑曲线短弦、勾股与极限的概念解释。
3. **Smart quote 源头修复**：只在数学片段中把 ASCII 撇号导数改为显式 `^{\prime}`，涉及 Roots、Induction、Series、Inverse trig、Hyperbolic、First order 六对课。Hyperbolic 每种语言改 11 个含撇号数学片段；总计每种语言 85 个片段。未替换普通文章中的英文所有格，不豁免测试。源公式最终没有 ASCII 撇号或弯引号。
4. 新增长分数、求和、积分、极限改用独立显示公式；修正新增极坐标面积式积分微元前的间距。英中公式内容、分隔符及顺序逐项一致。
5. 二阶末页新增下一课 `vector-products-and-coplanarity` 双语链接；两个目标文件均已存在。

**没有冒领的旧修复：**本轮初读时，二阶练习标题已经是中性 Question 1–7，并已有混合顺序；没有仍需隐藏的根型／共振标题。双曲集合已经使用 `\lbrace0\rbrace`（每语种四处）；本轮核对并保留。它们是当前状态，不是本轮新修复。

独立题图与 alt：核对六个既有 SVG 的 XML、可达性、文字／条件和正文关系。复根图、公共区域图、反三角图及双曲图用于示范／概念，允许呈现所解释的特征；Polar Q8 独立练习图及 alt 仅给原题曲线、极点和初始线，不含面积答案。新独立重试不附预解图；标题、提示摘要不预先给答案。未通过删减必要 alt 掩盖泄露。

最终源码检查结果（本代理实际执行，不依赖旧报告）：

| 检查 | 结果 |
| --- | --- |
| 11 对数学片段逐项精确相等，包括出现顺序 | 每语种 **3150** 次；合计 6300；通过 |
| 唯一 TeX 的本地 MathJax 3.2.2 解析，base+ams | **2035** 个，无 merror 或 data-mjx-error |
| 分值标签、外部来源 URL、图片路径序列 | 两语言完全一致；包括 Polar Q8 的原题分值标签 |
| 英文例题／练习题干、新诊断及重试完整英文问题 | 中文保留；通过 |
| details | 每语种 **217** 个；配对数相同，独立闭合、无嵌套、无 open，中文摘要已译 |
| 中文标题与元数据 | h2–h4 均显式英文稳定 ID，无重复；lang、translation_of、permalink 配对 |
| 数学片段危险字符 | 无 ASCII 竖线、ASCII 撇号或 smart quotes；不把 Markdown 表格分隔线误算进数学 |
| 图片与后继课程 | 六个既有 SVG XML 可解析；两语言末页后继课程文件存在 |
| 新数学回归 | `node scripts/test-further-retry.js` 退出码 0 |
| 文件检查 | 指定交付文件的 `git diff --check` 与新脚本 `node --check` 均退出码 0；最终清除新增段落行尾空白后再跑源码 parity 和 retry，仍全部通过 |
| 补充独立算术 | 临时精确运算检查 **39 个 DE 系数恒等式**、六类有限和 n≤30 及两个指定精确和；通过。样本只补充已检查的解析相消／归纳，不代替证明。 |

临时读取与检查副本位于本机临时目录 `fm03-existing-audit-20261022`，不属于仓库交付依赖。持久可重跑的新题数学证据是上述新增脚本；总测试、旧回归脚本和构建保持主代理所有权，本代理未改它们。

## 尚未核实与交接状态

- **教材逐字与页码：未核实。** 未取整本所供教材；本轮已直接核实原卷，不能据此宣称教材转载和印刷页码逐字校勘完成。
- **官方文件路径同一性：未核实。** 当前大纲／样卷新路径与已读取官网旧路径的字节一致性未证明；AQA 旧卷为作者可识别的镜像，有的排版压缩。没有把获取失败说成不存在。
- **独立 examiner report 与公式册正文：未取得。** 不把样卷 MS 或答卷例评称考官报告；公式来源、范围和分支按已读取材料及独立数学检查记录，不声称核过未取得的公式册。
- **构建、生成 HTML、桌面／手机浏览、键盘和辅助技术：由主代理验收。** 主代理已报告统一构建及旧回归通过、浏览器和共享前端检查已运行；这些是主代理状态，不是本代理重复执行的证据。最后源码修复后可作最终 rebuild；不能仅以本报告的源码 MathJax 解析证明 Markdown 到 HTML 全链通过。
- **学生试用：未进行。** 未验证提示撤去后的英文独立作答、迁移或学习效果。

本子任务最终交付仅为上表十一对课程（22 个文件）、本报告及 `scripts/test-further-retry.js`。未改入口、共享样式、共享总测试、新课或 SVG；未切分支、提交、推送、发布。旧来源问题已关闭到上述明确的原卷／镜像证据边界，未把尚缺的教材和技术验收写成“全部通过”。
