# AS Mathematics 9660：MA02 统计、力学与圆的补修研究

研究日期：2026-10-25。用途：为并行实施提供官方范围、配对试卷证据和最小设计建议。范围限于 PP1.1、S1.1–S1.3、M1.1–M1.4；MA02 其余纯数内容由主任务处理。本研究只新增本文件，不制作课程正文、题库或图像，不操作 Git、不构建、不打开课程浏览器页面、不安装依赖。

**优先补圆的法线、L19 分布构造与线性变换的独立产出、L23 两次积分常数、L24 假设与方程的对应，以及 L22／L24 对应题目的图形反馈。** 现有 L20 独立性辨认、L21 Bernoulli 方差推导和 L25 碰后可行性分析应保留；不能因本轮补缺而把已有证据误报为缺失。[审计 AS-01、AS-02、AS-03、AS-07][AUDIT]

## 1. 本次实际阅读与文件身份

### 阅读方式与边界

| 材料 | 本次实际读过的内容 | 没有据此宣称的工作 |
| --- | --- | --- |
| [AGENTS.md](../../AGENTS.md)、[课程内容长期标准 v1.1][STANDARD]、[2026-10-24 审计][AUDIT] | 仓库要求、长期标准全文及审计全文 | 未重做审计中的构建、浏览器检查或学生试用 |
| [当前 9660 资格页][QUAL] | 单元身份、PSM1 评估说明、实际指向的大纲链接 | 未迁移到网站另列的 9760 新资格 |
| [该链接打开的官方 specification v5.2][SPEC] | PDF 封面／目录及版本标识、§2.2、§3.2 的 PSM1 引言、PP1.1、S1.1–S1.3、M1.1–M1.4；逐项范围定位见下表 | 未读完全部 36 页；PP1.2／PP1.3 不作本轮内容研究；不把 PSM1 的 PP1 与 MA01 的 P1 混称 |
| [本地 MA02 QP][QP] | 封面；Q3（pp6–7）、Q6–Q8（pp12–17）、Q9–Q11（pp19–23）；确认 p18 空白。其余页只作题号／页面索引与空白、附加页辨认 | 未逐题重做 Q1、Q2、Q4、Q5，未重验全部 80 分 |
| [本地配套 MA02 MS][MS] | 封面、p3 评分缩写；Q3（pp7–8）、Q6–Q8（pp13–15）、Q9–Q11（pp16–21），包括 Q11(b) 的替代解法 | p2 及其他题评分页没有作详细方法复核 |
| 现有英文课程源码 | [圆][CIRCLE]、[概率][PROB]、[随机变量][RV]、[二项][BIN]、[匀加速][CA]、[变加速][VA]、[力][FORCE]、[动量][MOM]的现有目标、示范、任务、反馈与来源段 | 未逐句重审中文、归档旧资料或其他纯数页；未认证双语语义对齐 |

本地两份卷均以 bundled runtime（bundle `26.1022.11436`）内 Python 的 `pypdf.PdfReader` **本轮重新提取**，不是引用旧研究的“已读”声明。用已安装的 `pypdfium2` 在内存渲染并查看 QP pp6、14、17、20、23 和 MS pp15、20、21，核清圆图、条件概率分母、旋转器概率、分段速度与不等号。没有保存提取文本或渲染文件，也没有增加依赖。

官方大纲读取的是 web 工具返回的实际 PDF 正文及分页，不只是资格页摘要。直接从 Python 下载受环境网络限制，官方 PDF 截图亦未成功；本轮没有生成本地大纲副本或大纲图像核验记录。所引用条目和线性规则在 PDF 正文中可明确辨认。

**并行修改边界：**本记录的课程缺口陈述针对下列实际阅读快照。交付前只读哈希对照显示，8 对中英文课程文件均已随主线程工作发生变化；本研究没有回读主线程新增正文，也没有将原缺口认定为最终版本仍未修复。以下为所读英文文件的 SHA-256；不能拿本记录代替主线程最终内容验收。

```text
alevel/as-mathematics/circles.md                6377fc60296ed71a5005c714e4c08559474cdbd0e21fae0045c7af6bb845ef29
alevel/as-mathematics/probability.md            8257c7487802c4946153583ed07a61fa8b6d7634c0686f009ddafb4588f47491
alevel/as-mathematics/random-variables.md       e7d490dfaa315fe32e9c97f26a76581ae180ef13d46954757c40d8c74bf6d89d
alevel/as-mathematics/binomial.md               6dca705525bdc09dca1255cd5ed477a80f43c114c27006f15432e0efe244069f
alevel/as-mathematics/constant-acceleration.md   0a40c8bbb225bb32cd48ce8753c13f79b741ff926750c39ea155bb06d3ee09a7
alevel/as-mathematics/variable-acceleration.md   a43496587c0b87e2345c4067514dfc81e098c5fa3c205e25e455778d58e6798f
alevel/as-mathematics/forces.md                 16f43d42a15cfb0995445a4ff28c72095aad465fde5fff61277369a2fe14dceb
alevel/as-mathematics/momentum.md               e3a245e064b94724acf534a4c4081d356a8ad069f4dd513dbc8b84fda14cf4dd
```

### 封面核验

| 核验项 | QP 本轮读数 | MS 本轮读数 |
| --- | --- | --- |
| 身份 | INTERNATIONAL AS MATHEMATICS；`9660/MA02`；Unit PSM1 Pure Mathematics, Statistics and Mechanics | 同资格、同单元；MA02 Mark scheme |
| 日期／版本 | Wednesday 8 January 2025，07:00 GMT；`IB/G/Jan25/G4003/V4` | January 2025；Version 1.0 Final；`251xMA02/MS`；封面未列具体考试日与时间 |
| 时长／分值 | 1 hour 30 minutes；80 分，A／B／C 分别 40／20／20 | 所读 B 节题目合计 7+6+7=20，C 节合计 3+12+5=20；不将 MS 封面说成另列了时长或总分 |
| PDF 页数 | `len(reader.pages)=28`；最后题目在 p23，后有空白和附加作答页 | `len(reader.pages)=21`；p21 为 Q11(b) 替代解法 |
| 工具 | 封面允许 graphical calculator，要求配套公式及统计表册 | 未在本轮验证某机型按键流程或重读公式册 |

以上来自 [QP p1][QP1]、[MS p1][MS1]及实际 PDF 页数；QP／MS 的本文页码均为从 1 开始的 PDF 页，与可见印刷页一致。大纲有偏移，必须使用下表中的两套页码。

本地文件 SHA-256，供实施方确认使用同一版本：

```text
QP  c012472610d3e869fb9d73b6ce94b547f984ce2df5cf764744078212fe47e1d1
MS  f66fed29e34a3ff95946053ac065017c5e16e55be59bd70fc682a5a699832c6d
```

## 2. 官方范围与本卷证据不能互相替代

大纲实际为 **International AS and A-level Mathematics (9660), Version 5.2，36 个 PDF 页**；§3.2 将 PSM1 分为 PP1、S1、M1，§2.2 说明 MA02 所属 AS PSM1 的 80 分构成。以下只摘本轮补修所需边界。[大纲 PDF pp2、8、13][SPEC]

| 条目 | 大纲印刷页／PDF 页 | 本轮必须保留的范围与边界 |
| --- | --- | --- |
| PP1.1 | 15／14 | 圆方程、平移、几何性质及指定点切线／法线；不要求隐函数求导。[原页][SP14] |
| S1.1 | 16／15 | 条件概率、互斥／独立及概率表；树图、Venn 图可用但不作为必须使用的题目要求。[原页][SP15] |
| S1.2 | 17／16 | 有限分布、矩及简单函数；包括单变量线性规则和独立变量的和／差。[原页][SP16] |
| S1.3 | 17／16 | Bernoulli、独立试验之和、二项概率公式／表及相应矩的推导；本轮不引入 A2 分布或检验。[原页][SP16] |
| M1.1–M1.2 | 18／17 | 运动图、路程／位移、匀加速与变加速微积分；后者限于 AS P1 微积分。[原页][SP17] |
| M1.3–M1.4 | 19／18 | 水平／竖直直线动力学及连接体、动态摩擦、动量／冲量；不要求分解斜向力或恢复系数定律。[原页][SP18] |

尤其不能以“一套真题没有考到”删去大纲目标，也不能把本卷某个评分步骤说成所有同类题的统一评分规定。

## 3. 本轮新读的 QP／MS 方法对应

下表记录原卷证据，**不是整卷新解答**。数值为本轮独立复算后与 MS 对照；分值只属于该原题。

| 目标／原题 | 精确 QP／MS 页 | 本轮确认的推理与使用限制 |
| --- | --- | --- |
| 圆：Q3(a)、(b)(i)–(ii)，10 分 | [QP pp6–7][QP6]；[MS pp7–8][MS7] | Q、R 为 (9,5)、(12,2)。中点 (21/2,7/2)，弦斜率 −1，中垂线为 y=x−7；与 x 轴相交给 P=(7,0)。再得半径平方 29、另一圆圆心 (17,4)，平移向量 (10,4)。Q3(a) 明确要求使用弦的中垂线，不能只凭等距算出给定结论而省去指定方法。**Q3 没有直接要求切线／法线方程；法线补修依据 PP1.1，不标成 Q3 已考内容。** |
| 二项及独立和：Q6(a)–(c)，7 分 | [QP pp12–13][QP12]；[MS p13][MS13] | 固定 40 名顾客，成功率 0.09，题干明确独立。恰 6 人为 0.0826，超过 4 人为 1−P(X≤4)≈0.2897，均依题意保留四位小数。三日方差为 3.276+2.3751+2.1294=7.7805；用共同 p 的 n p(1−p) 反推总顾客数 95。Q6 是模型应用证据，不是对 Bernoulli 方差推导的替代。 |
| 条件分母／互斥：Q7(a)，4 分 | [QP p14][QP14]；[MS p14][MS14] | 由 P(R∣C′)=23/36 与 P(C′)=6/23 得 P(R∩C′)=1/6，故 P(R∩C)=0。将条件概率乘以其真正的条件事件概率，再判断互斥。Q7(b) 另见下方异常记录。 |
| 建立分布／期望和：Q8(a)–(b)，7 分 | [QP pp16–17][QP16]；[MS p15][MS15] | A 的取值 1、5、9、14，概率分别为 k、5k、9k、14k；归一化给 k=1/29，再算 E(A)=303/29。B 取 0、1，P(B=0)=11/16，故 E(B)=5/16；由总期望 11 得 E(C)=111/464。原题给了独立性，但期望相加本身不需要独立性。**本题未直接检验 Var(aX+b)；该补缺依据 S1.2。** |
| 连接体：Q9，3 分 | [QP p19][QP19]；[MS p16][MS16] | 0.7 kg 向下、0.4 kg 向上：0.7g−T=0.7a，T−0.4g=0.4a；消去 T 得 a=147/55 m s⁻²≈2.67 m s⁻²。同 T、同加速度大小来自题干模型。MS 评分对象是列式、消元和答案；没有要求学生逐项说明理想化，不能拿该计算题当作假设解释已被独立考查。 |
| 分段速度／图像：Q10(a)–(c)，12 分 | [QP pp20–21][QP20]；[MS pp17–19][MS17] | 第一段 v=−0.5t²+1.9t，0≤t≤2；之后 v=1.8−k(t−2)，2<t≤T，k>0；T 后为零。t=1.9 的峰值为 1.805 m s⁻¹，且须与端点、后段最大值 1.8 比较。首 2 s 路程为 37/15 m，平均速率为 37/30 m s⁻¹。剩余路程 81/5 m，由三角形面积得 T=20 s。**原题给 v，没有要求从 a 连续积分两次求两个常数；该任务应标为 M1.2 范围内的自拟补修。** |
| 冲量／碰后边界：Q11(a)–(b)，5 分 | [QP pp22–23][QP22]；[MS pp20–21][MS20] | 取 A 原方向为正，守恒式为 24−2mq=2v+4m，故 v=12−m(2+q)。原题及 MS 采用 0<v≤4，冲量大小 I=24−2v，给 16≤I<24 N s；由此得到 0<12−m(2+q)≤4。p21 也给通过 B 的冲量 I=2mq+4m 的替代解法。应先解释方向和碰后不继续相互穿入的条件，而非硬背区间。 |

### Q7(b)：本轮再次确认的局部数据矛盾

[QP pp14–15][QP14]给 P(R)=1/6，买午餐事件记为 L 时，P(L)=5/7、P(R∩L)=9/50。因 9/50>1/6，交集超过边缘概率；等价地 P(R∩L′)=−1/75。因此这份本地版本无法同时成立。[MS p14][MS14]的加法运算给 368/525，数值落在 0 与 1 之间仍不能修复联合模型。

本轮只把这一问题用作来源异常记录，**不移植为有效示范，不静默改数后继续称官方原题**。未核查官方勘误或其他替换版本；结论只针对上列哈希对应的本地文件。现有 [L18 独立题][PROB]使用自拟一致数据并检查概率边界，应保留。

## 4. 给实施方的最小设计建议

本节均为项目设计选择，遵守[长期标准 §§1、3–5、7][STANDARD]，不是官方题目或官方评分标准。下面的数值只供作者核对，不是本轮新写入的学生题面；后续正式使用须保留“自拟题”身份、关闭提示／答案及中英文一致性。

### 圆：在现有几何链上补法线

在 [L14][CIRCLE] 的“半径与切线垂直”之后直接建立“法线是过圆心与接触点的直线”，不依赖微分章节替它完成迁移。沿现有完整示范 C=(2,−1)、P=(5,3)，切线为 3x+4y=27，法线为 4x−3y=11；两线均过 P，法线还过 C。[范围依据 PP1.1][SP14]；本例是对现有自拟数据的推导。

最少补一个独立子问即可连接现有任务：对独立题**平移前**的圆，在 (0,1) 求切线和法线。作者检查值为切线 3x−y=−1、法线 x+3y=3，圆心为 (3,0)。原重试中半径水平的情况可同时检查法线 y=2；若另查竖直半径，须直接写竖直线方程，不能套负倒数制造除零。任务图只给必要几何信息，完整两线检查图放在关闭的解答内。

### 随机变量：一个独立子任务同时检验构造与线性选择

[L19][RV] 已有线性讲解和带支架计算，但独立题、重试均对既定 X 作非线性变换。保留这些内容，在独立区补一个中性标题的自拟任务简案：六枚等可能筹码标为 0、1、1、1、3、3，抽一次，以 U 为标签值，记录分数 S=5−2U；要求自己建立 U 的分布，再求 S 的均值、方差、SD，并说明所用规则为何适用。不要先提供概率行或以标题提示线性方法。[S1.2][SP16]、[Q8 的分布构造方法][MS15]

作者验收值：U 的概率为 1/6、1/2、1/3；E(U)=3/2、Var(U)=5/4；E(S)=2、Var(S)=5、SD(S)=√5。解释应区分平移和缩放：−2 不会产生负 SD，也不是把方差乘 −2。这里是同一变量的确定变换，不需要另设独立性。重复标签必须合并概率，不能把三个不同标签当等可能。

这样改变了信息表征和需要自主作出的判断，不只是更换既有分布的数字。用 U 另起随机对象，避免覆盖后续 `1/X` 重试沿用的非零 X。重试应针对实际错误：若错在等可能对象，就换一组重复标签重新构造；若错在线性缩放，就用另一条线性计分规则重做均值／方差。现有 [L20](../../alevel/as-mathematics/random-variables.md#l20) 的独立和与同一变量倍数比较无需另造一套。

### 二项：保留现有推导，仅补真正的表格读取机会

[L21][BIN] 已有 Bernoulli 的 E(B²)=p、Var(B)=p(1−p) 及独立指标求和推导，也已有不放回情境的反例，不能列成待补。若加强“公式与表”目标，最小做法是在已有题旁提供**明确标成自行计算的**小段 F(r)=P(X≤r) 数表，让学生自行选出严格尾部所需条目；给出 F(4)、F(5) 等相邻项才能看出选错边界。[S1.3][SP16]、[Q6(b)][MS13]

不能写成本轮已读取某版官方统计表，也不增加未经验证的 fx-CG50 按键步骤。Q6 的 1−P(X≤4) 可作作者校核依据；实际学生任务若改数据或情境，按改编／自拟身份另行标识。

### 变加速：把条件代入链写出来，再补同目标独立恢复

[L23 示例][VA]不必扩写所有幂次积分；需要显露的是两次不同条件分别确定两个常数。对已有 a=2t−4、v(0)=3、s(0)=0，作者应能核对以下完整链：

$$v=t^2-4t+C_v,\qquad 3=v(0)=C_v,$$

$$s=\frac{t^3}{3}-2t^2+3t+C_s,\qquad 0=s(0)=C_s.$$

一项独立任务可把条件移到不同的非零时刻，要求学生决定先用哪个条件，例如同一加速度配 v(1)=2、s(2)=5。作者核对为

$$v=t^2-4t+5,\qquad s=\frac{t^3}{3}-2t^2+5t+\frac13.$$

检查不止看最终函数：分别代回两个给定条件，并微分核对 s′=v、v′=a。位置常数不由速度条件确定，位置也不应默认为“从零累计路程”。这一任务依 [M1.2][SP17]，不冒充 [Q10][QP20] 的原题要求。

### 力：用“假设 → 哪条关系 → 改后失效处”代替只背术语

建议只给 [L24 独立任务][FORCE]追加一个模型判断子问，或紧邻已有 Q9 型模型放一项独立比较，不新开一课。判定依据如下；对应的理想模型见 [M1.3][SP18]、[Q9 题干][QP19]及[配套列式][MS16]。

| 模型中的条件 | 学生应解释的关系 | 改变条件后的最低限度判断 |
| --- | --- | --- |
| 绳绷紧、不可伸长，固定滑轮／支点路径 | 两侧沿绳的加速度大小相等，选轴后两物体方向相反 | 改为可伸长连接后，不能继续直接令两侧加速度大小相等；绳松弛时亦不能沿用该约束 |
| 轻绳和理想光滑、轻滑轮／光滑支点 | 支持用同一 T 表示相应绳段张力 | 去掉相关理想化，不得继续自动认定张力处处相同；不要求新增转动或摩擦定量模型 |
| 水平汽车／拖车的刚性定长连接 | 两物体沿道路有相同加速度 | 可伸长连接不再自动保证这一关系 |
| 轻连接杆 | 可忽略杆自身惯性，在该近似下两端力等大反向 | 有质量的加速连接杆，其两端力不能自动视为等大；每个接触处的牛顿第三定律力对仍始终作用于不同物体 |

真正的独立产出应指认“哪一个等式不再有依据”，不能只答“模型不准确”。例如保留绳绷紧但允许伸长时，原先同一个 a 的两条牛顿方程不能照搬；这不等于牛顿第二定律失效。题干不应把答案性质直接写进小标题。恒定加速度还需要对应力与质量条件，不能只由“不可伸长”推出。

### 图形反馈：只补当前任务需要核对的图

| 当前任务 | 关闭解答内的最小反馈 | 应避免的误导 |
| --- | --- | --- |
| [L22 独立 v–t 任务][CA] | 本题实际是连接 (0,0)、(4,8)、(7,8)、(10,−4) 的**三条直线段**；标出零点 (9,0)、坐标单位、三段斜率 2、0、−4，以及有符号面积 16、24、8、−2。由图核对位移 46 m、路程 50 m、平均速率 5 m s⁻¹ | 审计称“四段”容易混淆：按零点分割后是四块面积，不是四条原始线段。折点不随意指定唯一加速度；不能用另一道竖直抛射的图代替反馈 |
| [L24 汽车／拖车独立任务][FORCE] | 分开画两个物体：汽车向右 1800 N，向左 400 N 与连接力；拖车向右连接力、向左 200 N。各自重力向下、路面反力向上。解答核对 a=1.2 m s⁻²、连接力 680 N，并把力标在正确物体上 | 不把第三定律力对画在同一物体上，不把加速度箭头当成额外的力；悬挂物示意图不能代替本题对象 |

两项图的功能分别是检查符号／面积，以及作用对象／方程。范围依据为 [M1.1][SP17]、[M1.3][SP18]；采用先作答后揭示、保留必要替代文字，是[长期标准 §§4、6][STANDARD]与[审计 AS-07][AUDIT]的项目安排，不是“官方要求每题必须配图”。可以复用现有布局与原生折叠，不需要动画、自动判图或新依赖。

### 动量：保留现有独立任务的严格边界

[L25][MOM]已经训练系统、方向、外冲量与碰后分离，应保留。原卷 [Q11／MS pp20–21][MS20]容许 v=4 的共同速度边界；当前自拟独立题明确要求 immediately separate，故必须使用 v_A<v_B，不能抄原题的 ≤。同样，带符号冲量与冲量大小应分开表示，不因 MS 接受若干端点写法就模糊数学条件。

后续若把末课接到综合复查，只需给实际的未标方法任务和按错因返回的链接；不增加账户或打卡系统。任务选题由主实施方安排，本研究没有制作综合卷或学生试用记录。[长期标准 §5][STANDARD]、[审计 AS-05][AUDIT]

## 5. 本轮检查结果与交付限制

- 已核验两份本地 PDF 的封面身份、日期字段、实际页数与 SHA-256；本轮读过的原题分值为 Q3 的 10 分、统计 20 分、力学 20 分，共 50 分。其余纯数 30 分没有重做。
- 已独立复核上述 Q3、Q6–Q11 的关键推理；用 bundled Python 的 `Fraction`、`math.comb` 与断言核算所述数值及建议任务的重复标签概率、负线性缩放、两时刻积分常数和圆切线／法线方程，并人工核对 Q11 的方向、守恒式和区间。Q7(b) 是已确认模型矛盾，不能因加法结果正确记为模型通过。
- 已检查研究记录的本地链接、页码范围与相应条目；本轮没有课程源码修改、Git 操作、构建、浏览器课程验收、新依赖或学生试用。本地提取和渲染均在内存完成。
- 这是实施前来源与设计记录，**不是课程内容审查通过、双语验收通过或学习效果证明**。正式补修后仍需按长期标准对实际新增内容独立求解、核对双语、完成适用技术／阅读检查；学生试用另记状态。官方勘误、公式册逐条收录、计算器实际机型操作均未在本轮重验。

## 6. 用户追加询问：工作区现有 Node 工具文件

只读查看根目录 `package.json`、`node_modules` 的时间与清单：前者创建／最后修改为 2026-10-24 23:26:06，后者为 23:26:08，早于本研究；manifest 是常规初始化字段，未声明 dependencies。目录内锁文件只列 `playwright-core`，其包元数据为 v1.64.1，用途是浏览器自动化。

本研究没有执行 npm／pip、写入这些路径或依赖它们；PDF 提取使用预装 Python，内存渲染通过 Node 内置 `child_process` 调用该 Python。历史创建者和其他线程是否仍需这些目录未确认；本轮没有删除或修改它们。

[QUAL]: https://www.oxfordaqa.com/qualification/international-as-and-a-level-mathematics-9660/
[SPEC]: https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf
[SP14]: https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf#page=14
[SP15]: https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf#page=15
[SP16]: https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf#page=16
[SP17]: https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf#page=17
[SP18]: https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf#page=18
[QP]: ../../assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf
[QP1]: ../../assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf#page=1
[QP6]: ../../assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf#page=6
[QP12]: ../../assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf#page=12
[QP14]: ../../assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf#page=14
[QP16]: ../../assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf#page=16
[QP19]: ../../assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf#page=19
[QP20]: ../../assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf#page=20
[QP22]: ../../assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-question-paper.pdf#page=22
[MS]: ../../assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf
[MS1]: ../../assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf#page=1
[MS7]: ../../assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf#page=7
[MS13]: ../../assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf#page=13
[MS14]: ../../assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf#page=14
[MS15]: ../../assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf#page=15
[MS16]: ../../assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf#page=16
[MS17]: ../../assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf#page=17
[MS20]: ../../assets/pdf/fx-cg50/references/oxfordaqa-ma02-2025-january-mark-scheme.pdf#page=20
[STANDARD]: course-content-standard.md
[AUDIT]: audit-as-mathematics-standard-2026-10-24.md
[CIRCLE]: ../../alevel/as-mathematics/circles.md#l14
[PROB]: ../../alevel/as-mathematics/probability.md#l18
[RV]: ../../alevel/as-mathematics/random-variables.md#l19
[BIN]: ../../alevel/as-mathematics/binomial.md#l21
[CA]: ../../alevel/as-mathematics/constant-acceleration.md#l22-independent
[VA]: ../../alevel/as-mathematics/variable-acceleration.md#l23
[FORCE]: ../../alevel/as-mathematics/forces.md#l24
[MOM]: ../../alevel/as-mathematics/momentum.md#l25
