# FM03 剩余单元：独立官方证据核查（2026-10-22）

后续课程实施与统一验收见[全单元制作与验收](completion-fm03-2026-10-22.md)。本文件保持制作前官方证据核查的职责与阅读边界。

## 结论与分工

当前 OxfordAQA **9665** 资格页所链 specification，PDF 正文仍为 **Version 5.2**；**Unit FP2 对应 FM03，考试为 2 小时 30 分、120 分**。剩余学习页的官方范围是 **FP2.12 向量与三维坐标几何、FP2.13 矩阵代数、FP2.14 线性方程组**。[资格页][qualification]；[大纲 PDF 第 8 页／印刷第 9 页][spec8]、[第 29 页／印刷第 30 页][spec29]。

本文件只交付一手来源、范围边界与可用于实施的证据约束；已读根 `AGENTS.md`、`C:\Users\mi\.codex\RTK.md` 及 [2026-10-15 审查记录](audit-a2-further-pure-2026-10-15.md)，没有重新逐页审查课程。主代理已确认三个剩余主题分别对应教材第 26／27／28 章；**此教材对应来自本次分工信息，本核查未重读教材证明页码**。

综合方案由主代理写入 [research-fm03-remaining-units-2026-10-22.md](research-fm03-remaining-units-2026-10-22.md)。主代理已完成 Jun2024、Jan2025 本地 QP＋MS 的选题、原题图核对与精确计算检查；2019 例评目前仅已读第 19–20 页文字，手写图尚未目视核查。本文件不将这些分工成果计为本核查的独立阅读证据，不据此作统计，也不推测最新考季频率。

## 页码与身份核验

- 本文“PDF 第 N 页”按阅读器从 1 开始计数；大纲内部页的印刷页码比 PDF 页码大 1。例如 **PDF 第 19／20 页＝印刷第 20／21 页**。链接的 `#page=` 使用 PDF 页码。
- 从[当前 9665 资格页][qualification]的 Specification 链接进入 [2026/07 路径 PDF][spec]，核对到 32 页、封面 9665、2017 年 9 月起教学、AS 2018 年 5／6 月起考试、A-level 2019 年 5／6 月起考试，以及内页 **Version 5.2**。上传路径不是大纲版本或试卷考季。
- 9665 与网站同时展示的 revised **9765** 是不同资格入口；本任务没有迁移到 9765。FM03 的身份由大纲 §5.1 的单元代码表确认，不把资格页通用样卷入口当成 FM03：本次实际点击该通用入口得到的是 **FM01**。
- 当前 PDF 的文字层已读；FP2.12–14 的公式、表格分行和六个反射平面另以本地已保存的官方 **同版 5.2** 副本图像核对，并与当前文字层及[官网另一同版路径][spec-2022]交叉核验。**未取得当前文件的本地字节副本，未做哈希同一性比较，也不宣称完成当前整份 PDF 的图像验收。**

## FP2.12–14 的完整条目与限制

以下按大纲 Content 与 Additional information 两栏合并改述，不以教材或其他考试局添加必修项目。

### FP2.12：Vectors and three-dimensional coordinate geometry

来源：[大纲 PDF 第 19 页／印刷第 20 页][spec19]。

| 官方条目 | 必须保留的细项或条件 |
| --- | --- |
| 向量积（vector product） | 定义、性质、计算；用向量积求三角形与平行四边形面积。 |
| 数量三重积（scalar triple product） | 计算；求平行六面体体积；判断向量共面。 |
| 二维与三维几何中的向量应用 | 涉及点、直线、平面；包括直线形式 $(\mathbf r-\mathbf a)\times\mathbf b=\mathbf0$。 |
| 平面的向量方程 | 两种形式均须覆盖：$\mathbf r\cdot\mathbf n=d$ 与 $\mathbf r=\mathbf a+\lambda\mathbf b+\mu\mathbf c$。 |
| 直线与平面 | 求交点；求线面角。 |
| 两平面 | 求面面角；求两个不平行平面的交线方程。 |
| 直线与平面的 Cartesian coordinate geometry | 不只保留向量计算，还须连接坐标方程与几何对象。 |
| 方向比与方向余弦 | 包括方向余弦满足 $l^2+m^2+n^2=1$。 |
| 公式知识的限制 | 大纲说明不预期学生掌握公式册以外的公式；这不取消前述原理、计算和几何应用，也不等于只考背公式。 |

**可行动结论：**三维几何页至少要使上述对象、方程形式、面积／体积解释和交角／交线任务互相连接。两平面交线是明文要求，不能只用“求一个交点”替代。这个结论来自条目本身，不是历年出现频率。

### FP2.13：Matrix algebra

来源：[大纲 PDF 第 20 页／印刷第 21 页][spec20]。

| 官方条目 | 必须保留的细项或条件 |
| --- | --- |
| 三维旋转、反射、放大及其组合 | 旋转**只绕坐标轴**；反射平面**只限** $x=0$、$y=0$、$z=0$、$x=y$、$x=z$、$y=z$。这里是指定平面的反射，不是任意平面反射的一般算法。 |
| $3\times3$ 行列式 | 包括使用 $\det(AB)=\det A\det B$；不要求对乘积作一般性处理；包含体积比例因子（volume scale factor）。 |
| $3\times3$ 逆矩阵 | 不能以 AS 的 $2\times2$ 求逆覆盖此条。 |
| 三维不变点与不变直线 | 两项均须覆盖；不变直线不应只被简化成“逐点固定的直线”。 |
| $2\times2$ 和 $3\times3$ 矩阵的特征值、特征向量 | 包括特征方程；**仅实特征值**；**可含重复特征值**。 |

先修位置：[大纲 PDF 第 12 页／印刷第 13 页，FPP1.1][spec12]已经包含不超过 $3\times3$ 的矩阵运算、非方阵、$2\times2$ 逆矩阵、奇异性和二维变换。因此剩余页应衔接先修并明确新增的三维变换、三阶逆矩阵和特征结构；不应把所有矩阵知识都说成首次出现。

**可行动结论：**不能只做“行列式—逆矩阵—互异特征值”。指定三维变换及组合、不变点／线、体积比例和重复实特征值都在明确范围内。重复特征值也不能被教学简化为必然拥有一组特征向量基。

### FP2.14：Solution of linear equations

来源：[大纲 PDF 第 20 页／印刷第 21 页][spec20]。

| 官方条目 | 必须保留的细项或条件 |
| --- | --- |
| 方程组规模 | 至多三个线性方程、至多三个未知数。 |
| 求解及几何解释 | 两者都要覆盖；具体包含平面配置的解释。 |
| 解法 | 大纲层面接受任何求解方法；具体题目若指定方法，须另按题干与配套 MS 判断，不能以此句覆盖题目指令。 |

**可行动结论：**只教可逆矩阵下唯一解不足以覆盖“求解＋平面配置解释”。把唯一解、无解、无穷多解与几何配置连接，是本核查据条目提出的实施要求；大纲这一行没有逐项列出所有配置名称。不能从 $\det A=0$ 直接断定无解，必须继续检验方程的一致性。这是数学正确性要求，并非另一个考试局的新增大纲条目。

### 本轮额外核查

| 主题 | 9665 FP2.12–14 的明文状态 | 剩余学习页可执行的边界 |
| --- | --- | --- |
| 斜交线／异面直线的距离 | **未单独列名**；FP2.12 有点、线、面的广义几何应用，但没有明列最短距离任务或其公式。 | 不把它写成已核实的独立必修条目或必须背诵的公式。若主代理选作推导应用，注明由向量几何延伸；目前也不能仅凭未列名声称绝不可能出题。公式册正文未取得，尚未核实是否收录相关公式。 |
| 四面体体积 | **未单独列名**；明列的是数量三重积求**平行六面体**体积。 | 四面体可由相应平行六面体体积的六分之一推导，但须把这个几何因子解释清楚；这是可选的派生应用，不能替换明列的平行六面体任务，也不能冒称大纲逐字规定四面体。 |
| 平面反射 | **明确要求**三维反射，但限上列六个平面。 | 六种指定反射与组合属于核心；任意法向量、任意偏置平面的一般反射公式不应作为已明确要求的必修算法。 |
| 对角化（diagonalisation） | **未列名**；特征值、特征向量及特征方程的要求不自动等于独立要求对角化。 | 核心学习目标先落实特征方程、特征向量、几何解释和重复实特征值；若加入 $P^{-1}AP=D$ 或用其求矩阵幂，标为补充并检查成立条件。不能据此宣布这类派生解法被禁止。 |
| Cayley–Hamilton theorem | **未列名**，没有独立的定理陈述、证明或应用要求。 | 不从其他考试局引入为完成这三个主题所必需的定理；如使用，只能明确为额外方法，不能声称官方要求。 |

“未列名”与“禁止考查”是不同结论；明确的限定词，如旋转轴、反射平面及仅实特征值，应严格落实。上述边界来自[FP2.12][spec19]、[FP2.13–14][spec20]；本次未用其他考试局推定 9665 范围。

## FM03 其余条目的定位索引

用途仅为确认三项剩余主题在同一 FM03 中的位置，不重新审查现有学习页。

| 条目 | 官方主题 | PDF 页／印刷页 |
| --- | --- | --- |
| FP2.1 | Roots and polynomials | 15／16 |
| FP2.2 | De Moivre’s Theorem | 16／17 |
| FP2.3 | Polar coordinates | 16／17 |
| FP2.4 | Proof by induction | 16／17 |
| FP2.5 | Finite series | 16／17 |
| FP2.6 | Series and limits | 17／18 |
| FP2.7 | The calculus of inverse trigonometrical functions | 17／18 |
| FP2.8 | Arc length and area of surface of revolution about the x-axis | 17／18 |
| FP2.9 | Hyperbolic functions | 18／19 |
| FP2.10 | Differential equations – first order | 18／19 |
| FP2.11 | Differential equations – second order | 19／20 |
| FP2.12 | Vectors and three-dimensional coordinate geometry | 19／20 |
| FP2.13 | Matrix algebra | 20／21 |
| FP2.14 | Solution of linear equations | 20／21 |

整组来源：[大纲 §3.3，PDF 第 15–20 页][spec15]。§3.3 还规定 AS Mathematics 与 AS Further Mathematics 的纯数内容为先修；公式册结果一般可直接使用，但本单元要求且题目请求的证明仍须完成。

## 考试、计算器与作答证据

### 身份与时长

| 证据 | 已核实内容 |
| --- | --- |
| [大纲 PDF 第 8 页／印刷第 9 页][spec8] | FP2：150 分钟、120 原始分、A-level 权重 37.5%、允许计算器。 |
| [大纲 PDF 第 29 页／印刷第 30 页][spec29] | Unit FP2 的单元代码为 FM03；与 FM01／FM02 的 AS 单元分开。 |
| [FM03 Specimen 2018，PDF 第 1 页][qp] | FM03／Unit FP2；150 分钟、120 分；须备公式与统计表册；允许 graphics calculator；要求展示必要过程。 |

主代理本次另核实 Jun2024、Jan2025 本地卷均为 150 分钟／120 分，并确认 Jun2024 实际考试日为 **30 May 2024**。此处只是交接信息，**不是本核查独立阅读两套卷的证据**；综合报告应由主代理引用本地原卷。不要继承 AS 的 90 分钟／80 分。

### 当前管理手册的计算器边界

从[当前 Handbook 网页][handbook-page]的 Download here 进入的文件是 **September 2026、Version 1.1、225 页**，不是搜索中仍可见的 2026/03 旧路径。已读封面及 **§5.1.8.1，PDF／印刷第 107–108 页**。[当前手册][handbook107]

其规定禁止考试时使用符号代数、符号微分／积分及通信功能，限制预存资料；数值积分／微分可以使用，考试模式须限制被禁功能和存储资料。因此“允许图形计算器”不能解释为允许 CAS。**本核查未验证 fx-CG50 的具体系统、插件、模式设置或考场认可流程**，不据许可类别声称某台机器已验收。

### Command words 与指定方法

从[官方资源区][resources1]的 Command words 链接取得[9665 专用 PDF][commands]，共 4 页；已读全部文字。下表是简要改述，右栏是面向剩余学习页的实施解释。

| 指令与 PDF 页 | 官方要求的核心 | 对剩余学习页的约束 |
| --- | --- | --- |
| Deduce，第 2 页 | 应联系题中前面的结果。 | 不能把前后步骤做成互不相干的代算。 |
| Explain，第 2 页 | 要有解释，可用适当的代数、图示等支持。 | 写出为什么是该几何配置，或为什么方向／不变性成立。 |
| Find/determine，第 2 页；Solve，第 3 页 | 前者求结果；后者求满足条件的全部值。 | 参数方程组不能只交一个可行数值解，须处理该题要求的全部情形。 |
| Interpret、Justify，第 3 页 | 解释情境意义；提供支持答案的过程或理由。 | 矩阵／方程组输出须联系原几何对象。 |
| Prove、Show，第 3 页 | 严谨数学论证；由给定条件逻辑得到所给结论。 | 计算器抽样不能证明“对所有参数均非奇异”。 |
| Sketch、Plot，第 3 页 | 草图呈现关键特征；描点要求准确。 | 两者不能换标题后沿用相同验收标准。 |
| Write down/state/give，第 3 页 | 不预期中间步骤。 | 不应把所有题统一标成“无过程一律零分”。 |

该清单没有单独定义 `hence`。其实际用法可结合[样卷 Q5(b)，PDF 第 10 页][qp10]阅读；不能伪称清单中存在一个未列出的定义。

另须合读[样卷 MS 第 3 页的 No method shown][ms3]：它区分指定方法、可直接得到答案、计算器直接求得答案及其他情形。**不能概括为“所有正确裸答案都不给分”，也不能概括为“计算器结果都足够”。** 具体题干、精度和该题评分细则共同决定。

## 已取得的 FM03 specimen 与配套 MS

### 入口、身份与可获取性

在当前[资源区样卷检索结果][specimen-list]中，Specimen papers and mark schemes 是未标锁的条目，展开后实际列出：

- [当前目录的 FM03 QP 链接][qp-current]。
- [当前目录的 FM03 MS 链接][ms-current]。

这两个 `aqadownloads/other` 直链本次未能通过文本抓取取得正文；不能据工具失败判定为文件不存在。可读正文来自同一官网的 [QP 旧路径][qp]和 [MS 旧路径][ms]。**未核实新旧路径文件逐字或字节一致**。

已读 QP 封面及下表题干，正文为 **FM03／Unit FP2／Specimen 2018**，共 24 页；内页显示 Version 0.4。已读 MS 封面、通用评分说明及下表对应部分，正文为 **9665／Further Pure Mathematics Unit 2／Specimen 2018**，共 18 页。文件名里的 `2019-v3`、`2016-v1` 或版权年不替换正文身份。MS 第 2 页还说明样卷评分材料未经过正式实考试卷的通常标准化流程，不能把它当某一实际考季的考官报告。

### 对三个剩余主题直接有用的题目

| 题目与定位 | 与范围的联系 | 已读 MS 的具体证据与实施用途 |
| --- | --- | --- |
| Q4(a–c)：[QP 第 8–9 页][qp8]；[MS 第 7 页][ms7] | FP2.13 的参数矩阵、非奇异性、三阶逆矩阵；连接 FP2.14 求解。QP 分值为 3＋5＋4。 | (a) 需要从非零行列式说明非奇异；(c) 明确要求使用逆矩阵，MS 对未使用该方法的解法判零分。大纲“任何方法”不能覆盖这个具体指令。可作“代算—参数论证—指定方法求解”的证据链。 |
| Q6：[QP 第 11 页][qp11]；[MS 第 9 页][ms9] | FP2.13 的二阶特征值与特征向量，6 分。 | MS 列特征方程、求根、回代及非零倍数的特征向量。这里只提供互异实特征值的样例，不能据此删去大纲明列的三阶与重复实特征值。 |
| Q12(a–c)：[QP 第 20–21 页][qp20]；[MS 第 15–16 页][ms15] | FP2.12：线的方向与平面法向量、线在平面内的条件、线面角及交点条件。QP 分值为 1＋4＋5＋2。 | 评分说明接受用方向不平行／非零叉积论证非垂直；随后需参数化与平面关系、线面角和法向量夹角之间的联系。可支持方程、几何解释与参数条件的一致性检查。 |

题号按 QP 的题干对应：旧路径 MS 的线性方程组部分文字标记出现 `4(b)(ii)`，本表对应的是 QP **Q4(c)**；不应机械照搬该标签。未逐题图像校对整份 QP／MS，也未独立重算整份样卷。

这三题不是三个剩余主题的完整考查覆盖表：所读部分没有为每项指定三维反射、不变直线、重复特征值、无解／无穷多解配置各提供一个对应例题。上述必修内容仍由大纲确定；主代理可结合已安排的两套真题补充例证，不能以本样卷的局部缺题删除范围。

## 官方答卷例评与 examiner report：分开记录

| 材料 | 本次实际状态 | 可支持与不能支持的结论 |
| --- | --- | --- |
| [Example responses with commentary: FM03, Unit FP2][example] | **公开正文可读；30 页；本核查已读第 1–2 页身份／介绍。** 正文指明材料取自 June 2019 FM03，包含题目、MS、学生答案和 Lead Examiner 评语。 | 这是官方答卷例评，**不是 examiner report**。主代理已读第 19–20 页 Q9(b) 文字，提供两平面交线记号／负号的评语线索；手写图尚未目视核查。本核查仅登记该定位，不宣称已确认手写符号或其与具体扣分的对应。 |
| FM03 examiner report | **未获取正文，不能提供已核实 PDF 页码。** 已查 9665 官方资源目录及官网定向检索。 | [目录第 2 页][resources2]的 Jan2023–26、[第 3 页][resources3]的 May/June2024–26 等系列卡片标有 Locked resource；系列总标题提及 reports，不能证明每一单元都有一份可公开下载的报告。 |
| 早期系列目录 | [第 1 页][resources1]的 Jan2021／Jan2022 列表可见 FP2 QP、MS；Exam Report 名称可见于部分 AS 单元。 | 不能把 AS report 或系列总标题充作 FM03 报告证据，也不能据本次未找到断言 OxfordAQA 从未发布 FM03 report。 |
| Formulae and Statistical Tables insert | [资源区][resources1]有该条目，但标锁；**本次未获取公式册正文**。 | 所以上述“公式册以外不要求掌握”的大纲限定已核实，但公式册是否收录特定距离公式尚未核实。 |

访问限制均按当次状态记录；未登录中心账户、未绕过锁定资源，也未继续批量猜测 PDF 地址。官网资源区的 `/resources/page/2/…` 分页链接曾实际到达 404；查询参数 `dfg_page=2/3` 在浏览器中可读。工具抓取失败与目录标锁是两类证据，不能混同。

## 交给主代理的实施约束与未核实项

1. **覆盖约束已明确：**按本文件 FP2.12–14 全细项映射学习目标与独立考查；主方案按五段组织，实际分页待样章试用确定。特别检查交线、指定反射、不变线、重复实特征值和方程组几何解释，不只覆盖计算器容易直接计算的项目。
2. **例题证据可直接定位：**先用 Specimen 2018 Q4／Q6／Q12 及已读配套 MS，再由主代理将 Jun2024／Jan2025 的原题、评分说明与缺项连接。既有样卷材料不足以声称覆盖全部细项；删改数据或题干后应标改编。
3. **例评不等于群体统计：**2019 例评的评语可提供诊断线索，但不能称为“最新考生普遍失误”。主代理目前仅已读第 19–20 页 Q9(b) 文字；手写图尚未目视，手写符号及其与扣分的对应仍待图像核读。
4. **待补来源：**FM03 examiner report 正文、公式册正文、当前样卷新路径正文与旧路径同一性、当前大纲本地字节副本。公开获取失败已记录，未把未读材料写成已核实。
5. **范围仍需守住：**斜交线距离、四面体体积、对角化、Cayley–Hamilton 按上表分级；不得用其他考试局的学习清单补写成 9665 明文要求。若主代理真题阅读带来直接证据，再在综合方案中更新具体应用的地位。
6. **检查状态：**仅新增本 Markdown 文件；检查文档结构、引用定位与文件差异。未改课程、导航、脚本；未提交、推送或发送外部消息。未运行 Jekyll 或课程测试，也未进行计算器操作、课堂试用或学习效果验证。

[qualification]: https://www.oxfordaqa.com/qualification/international-as-and-a-level-further-mathematics-9665/
[spec]: https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf
[spec8]: https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf#page=8
[spec12]: https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf#page=12
[spec15]: https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf#page=15
[spec19]: https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf#page=19
[spec20]: https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf#page=20
[spec29]: https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf#page=29
[spec-2022]: https://www.oxfordaqa.com/wp-content/uploads/2022/06/oxfordaqa-a-level-further-mathematics-specification.pdf#page=20
[resources1]: https://www.oxfordaqa.com/resources/?dfg_filter=398&dfg_page=1
[resources2]: https://www.oxfordaqa.com/resources/?dfg_filter=398&dfg_page=2
[resources3]: https://www.oxfordaqa.com/resources/?dfg_filter=398&dfg_page=3
[specimen-list]: https://www.oxfordaqa.com/resources/?dfg_filter=398&dfg_page=1&dfg_s=specimen
[commands]: https://www.oxfordaqa.com/aqadownloads/other/a-level-further-maths-command-words.pdf
[handbook-page]: https://www.oxfordaqa.com/exams-admin/oxfordaqa-handbook/
[handbook107]: https://www.oxfordaqa.com/wp-content/uploads/2026/09/oxfordaqa-exams-administration-handbook.pdf#page=107
[qp-current]: https://www.oxfordaqa.com/aqadownloads/other/9665-FM03-international-a-level-further-mathematics-specimen-paper-2019-v3.pdf
[ms-current]: https://www.oxfordaqa.com/aqadownloads/other/9665-FM03-international-a-level-further-mathematics-mark-scheme-2016-v1.pdf
[qp]: https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-specimen-paper-2019-v3.pdf
[qp8]: https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-specimen-paper-2019-v3.pdf#page=8
[qp10]: https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-specimen-paper-2019-v3.pdf#page=10
[qp11]: https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-specimen-paper-2019-v3.pdf#page=11
[qp20]: https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-specimen-paper-2019-v3.pdf#page=20
[ms]: https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-mark-scheme-2016-v1.pdf
[ms3]: https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-mark-scheme-2016-v1.pdf#page=3
[ms7]: https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-mark-scheme-2016-v1.pdf#page=7
[ms9]: https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-mark-scheme-2016-v1.pdf#page=9
[ms15]: https://www.oxfordaqa.com/oaqaresources/maths/assessment/9665-FM03-international-a-level-further-mathematics-mark-scheme-2016-v1.pdf#page=15
[example]: https://www.oxfordaqa.com/oaqaresources/maths/assessment/a-level-further-maths-example-responses-paper-3-unit-fp2.pdf
