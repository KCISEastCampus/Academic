# FM03 证明与级数三章：独立内容审查

日期：2026-10-23。基线：`d50b33b9fb954cbcadb27ea60bff6aa17163ef67`。身份：本报告为另一组 author 完稿后的独立内容审查；审查者没有制作本组课程。只写本报告，不修改本组课程、作者报告、入口、CSS 或脚本，不运行 build、tests、commit 或 push。

当前状态：**本轮 diff 及关联上下文的独立内容审查完成；R1 已由 Ohm 修复，经两语源码复读与独立重算后关闭。未发现其他阻断项。** 结论限于所列六页版本，不是全站、全部历史资产或学生学习效果认证。

## 范围与判据

中英 `proof-by-induction`、`finite-series`、`series-and-limits` 六页相对基线的 diff，以及理解新增任务、更改答案、来源身份和学习路径所需的关联上下文。未改可靠资产不机械全面重审。

依据：AGENTS、长期标准 v1.1、公式规范、总审计及代数／几何和微积分／复数相关附录、本组设计与作者检查记录。按用户最新澄清，所有常规积分逐行展开只要求一阶章；其他章节保全对应官方 MS 的关键方法、条件和得分步骤，常规运算允许合理压缩。自拟题按同类官方方法核查，不赋官方分值。

## 发现及修复闭合

### R1 · P2 · 有限级数官方 Q5 缺数值展开及抵消的得分证据——已关闭

位置：两语 `finite-series/#question-5--original-aqa-practice`，EN 约437–450行、ZH约441–454行（初次审查快照；以原题身份 AQA MFP2 June2010 Q2(b) 定位）。

修前答案从 `1/2 Σ(1/r−1/(r+2))` 直接到四个端项 `1/2(1+1/2−1/49−1/50)`。解释了正负分母范围，最终 `894/1225` 也正确，但尚未给出数值展开行。

本轮重新阅读官方MS PDF第4页并视觉核对：方法证据包括三行数值项、末行及适当抵消，其中末行允许由工作隐含。初稿对末行必须显式写出的表述过强，现勘误；作者此次同时显式给出末行，是充分清楚的教学处理，不是要求所有常规算术逐行扩写。

Ohm修后两语实际展开为 `1/2[(1−1/3)+(1/2−1/4)+(1/3−1/5)+…+(1/48−1/50)]`，说明了抵消和全部端项，再给出正确终值；英文原题、3+5官方分值与身份保留。

证据：[AQA June2010 MFP2 MS，PDF第4页](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202010%20MS%20-%20FP2%20AQA.PDF#page=4)。AQA编写、PMT托管；并非OxfordAQA FM03历年卷。

状态：**R1已关闭**。已直接复读修后EN L437–450、ZH L439–452并独立重算：r=1、2、3与r=48数值项正确；分母3至48成对抵消，保留1、1/2、−1/49、−1/50，结果3576/4900=894/1225正确。两语题干、条件、分值与帮助一致；题框边界仍闭合。报告初稿的锚点误记已勘误，没有改课程ID。

## 审查完成状态

新增／改变数学已独立重算；双语帮助、源码边界、实际先修及回顾落点与版本复读已完成，没有其他待核实质项目。下面保存目标证据、独立核算与真实来源范围。

学生试用只包括用户已接受的一阶积分因子样章；本组三章没有真实学生首次作答、重试或延后保持证据。作者核算、独立审查与技术验收分别记录。

## 目标与旧审计缺口闭合

资格仍为 **OxfordAQA 9665，A2 Further Pure FP2／FM03，FP2.4–6**，specification v5.2；未迁移9765。审查不是按栏目或题数判定，也不将新增任务存在写成学生已经掌握。

| 目标 | 实际讲解／独立产出 | 反馈、重试及本次判断 |
| --- | --- | --- |
| FP2.4：完整归纳、正确起点、任意允许整数与全范围结论 | 归纳`#method`及原六例；Q1–6涵盖求和、递推、整除、矩阵和导数 | 有限试值诊断后，新的加权幂和证明仍须写完整归纳；原有效恢复链保留。精确先修及`#later-review`补足后续调用 |
| FP2.5：从结构选求和方法并解释 | 有限级数`#choose-a-method`；Q1把分式与下限为3的多项式和并置，要求选法理由及最小n检验 | 代数附录A01闭合：不能只抄全组指定路线；官方Q5必须使用差分的原指令保留 |
| FP2.5：移位抵消、全部端项及短和 | 首次分式系数、三因式差分及Q2–5；新`#boundary-retry`用下限2、移位3重新检验漏项 | A05中有限级数条目闭合：重试调用原困难；`#reverse-task`另保留部分和到通项能力，不再替代端项恢复。Q5经R1修复保全MS方法证据 |
| FP2.6：实际求导形成Maclaurin系数 | `#maclaurin-series`首例连续求导；Q2(b)对ln(2+x)实际求导并形成三次展开 | 微积分附录F02的Series条目闭合；`#coefficient-retry`用根式新函数重测导数值除阶乘，不能只套标准展开表 |
| FP2.6：范围、截断、乘积／复合及消项极限 | 原展开与极限任务保留；Q7保留官方题及实际乘积贡献 | 原参数重试仍检验一次项消除和保留足够阶数；新后续F任务连接求导、展开和极限，未挤掉范围条件 |
| FP2.6：反常积分先有限积分再取极限 | E8–10建立无穷上界、零端点和分部积分；Q6、Q8独立作答 | 方法选择、原函数、有限代界与极限可追踪；按用户澄清允许合理压缩已经建立的常规运算，自拟题无官方配分 |

归纳没有为同一个核心证明逻辑机械新增每类重试；原有效例题与任务按用途保留。三章目录、示范和学生题的调整服务于推理及独立输出，类名或边界数量不是通过理由。

## 独立数学核算

下表是审查者重建的计算与条件，不是摘录作者核算。有限数值仅作边界／算术核对，一般结论仍依据代数、抵消、归纳和极限论证。

| 新增／改变对象及必要上下文 | 独立重算 |
| --- | --- |
| 归纳后续g(x)=e^x cos x四次系数 | 已证导数公式得g⁽⁴⁾(0)=−4，除4!得−1/6；另由两展开卷积得1/24−1/4+1/24=−1/6 |
| 归纳有效重试 | Σr2^(r−1)=(n−1)2^n+1：n=1成立；假设到k后加(k+1)2^k，得k2^(k+1)+1，正是下一式；有任意整数假设与结论 |
| 官方归纳Q6相关上下文 | f(n)=15^n−8^(n−2)，n≥2；f(2)=224=7×32，f(n+1)−8f(n)=7×15^n。任意m≥2的假设推出f(m+1)=8f(m)+7×15^m为7的整数倍，起点与范围齐全 |
| 有限Q1(b)不同结构求和 | 展开(2r−1)²并用二次／一次／常数和，去掉前两项1+9，得n(4n²−1)/3−10，n≥3；n=3得25 |
| 首次部分分式与差分 | 间隔1系数1、−1；间隔2系数1/2、−1/2；三因式的相邻二因式差分及系数正确，实际抵消与端项一致 |
| 有限端项重试 | 3/[r(r+3)]=1/r−1/(r+3)；r=2至n之和为1/2+1/3+1/4−1/(n+1)−1/(n+2)−1/(n+3)。n=2、3短和为3/10、7/15，重叠端项也能正确处理 |
| 有限后续任务 | r=3至n的1/[r(r+2)]之和为1/2(1/3+1/4−1/(n+1)−1/(n+2))；n=3为1/15，部分和极限7/24，没有以通项趋零替代收敛论证 |
| Maclaurin首例e^(2x) | 零点导数值1、2、4、8，除阶乘得1+2x+2x²+4x³/3 |
| Q2(b)：ln(2+x) | 零点导数值ln2、1/2、−1/4、1/4，展开ln2+x/2−x²/8+x³/24；用ln2+ln(1+x/2)核对，范围−2<x≤2，正端点保留 |
| 系数诊断及根式重试 | f'''(0)=12给三次系数12/3!=2。h=√(1+2x)的前三阶导数为(1+2x)^−1/2、−(1+2x)^−3/2、3(1+2x)^−5/2；零点值1、1、−1、3，展开1+x−x²/2+x³/2。题问标准范围，−1/2<x<1/2正确 |
| 后续综合F=(1+x)e^(−x) | F'=−xe^(−x)，F''=(x−1)e^(−x)，F'''=(2−x)e^(−x)；展开1−x²/2+x³/3，对应消项极限−1/2。原函数−(x+2)e^(−x)，0至R积分2−(R+2)e^(−R)，极限2 |
| 积分示范E8–10 | ∫₁ᴿx^−2 dx=1−1/R→1；对照∫₁ᴿ1/x dx=lnR发散。∫ₐ¹xlnx dx用原函数x²lnx/2−x²/4，a→0⁺得−1/4。∫₀ᴿxe^(−2x) dx的原函数−(x/2+1/4)e^(−2x)，极限1/4 |
| 积分Q6及Q8 | Q6(a)：∫ₐ¹1/x dx=−lna→∞。Q6(b)原函数−(x/3+1/9)e^(−3x)，有限代界后极限1/9。Q8原函数x³lnx/3−x³/9，0至e的反常积分2e³/9；a→0⁺及a³lna→0明确 |
| 保留的截断重试 | (e^(ax)−1−2x)/x²有有限双侧极限须a=2，余下极限a²/2=2；不能丢掉分子的一次项 |
| 官方级数Q7相关方法 | e^(3x)(1+2x)^−3/2二次系数有三个贡献7.5−9+4.5=3，实际乘积方法与MS一致 |

比值判别主线及3^n/n!中的阶乘消去正确；作为教材练习支持方法说明，没有伪称9665新增必考要求。新增／改变数学未发现定义域、阶乘、符号、边界或极限错误。

## 双语帮助、精确先修与后续回顾

逐任务语义对照新增英文任务、中文转述、折叠提示和答案：有限Q1的方法理由与最小n检查、端项及短和重试、ln(2+x)求导要求、根式重试、g四次系数与F综合任务，两语条件和帮助相当，中文没有公开替学生完成选法或系数判断。公式序列对照只是辅助，不以公式数／字数一致认证质量。

实际读到先修落点内容：AS series的标准幂和及改变下限；partial-fractions的系数方法；复数乘法和i²；矩阵行乘列；代数指数法则及因式分解；标准导数、乘积和链式；幂／指数对数积分、分部积分及有限上下限。英文部分锚点由标题生成，已核对标题与正文，不因没有显式ID误报坏链。生成HTML中的导航行为仍由技术验收确认。

三章各有可作答的后续任务：归纳→有限级数Q4→学完Maclaurin后求g四次系数；有限级数→学完收敛后返回部分和极限7/24；级数→后续De Moivre练习后返回F任务。它们有具体题干、关闭的帮助及反馈，不是泛泛“以后复习”。

章末链接的两语课程入口`#mixed-review`和`#later-review`已有实际任务。本审查只核对承接所需落点和任务，不接管index全面审查，也不因入口抽样未逐一列全本组能力否定各章已有后续调用。

## 本轮实际读取的一手材料

阅读日期均为 **2026-10-23**。下列是本审查轮实际重读，不将作者或2026-10-22的“已读”记录冒作本轮阅读。PMT是托管站，原作者为AQA；旧AQA题是同类技能补充，不称OxfordAQA历年题。

| 材料及身份 | 实际读取位置、方式与用途 |
| --- | --- |
| [9665资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-further-mathematics-9665/)所链[specification v5.2](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-further-mathematics-specification.pdf) | FP2.4–6，PDF第16–17页／印刷第17–18页；同轮此前成功读取网页／PDF文本。后续重开曾返回Internal Error，不写成又一次成功取得 |
| [AQA June2006 MFP2 QP](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202006%20QP%20-%20FP2%20AQA.PDF)／[MS](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202006%20MS%20-%20FP2%20AQA.PDF) | QP封面、PDF第4页Q6；MS第6页；4+4分。封面19June2006、6360/MFP2、75分；读取本轮已有缓存原件并视觉核对，查起点、使用假设与全范围结论 |
| [AQA June2010 MFP2 QP](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202010%20QP%20-%20FP2%20AQA.PDF)／[MS](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP2/Papers-AQA/June%202010%20MS%20-%20FP2%20AQA.PDF) | QP PDF第3页（印刷第4页）Q2，MS第4页；3+5分。核身份并视觉读题干／MS，部分分式、指定差分、数值行及抵消，R1依据 |
| [AQA January2013 MFP3 QP](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/January%202013%20QP%20-%20FP3%20AQA.pdf)／[MS](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/January%202013%20MS%20-%20FP3%20AQA.PDF) | QP第2页Q2、MS第4页；1+4分。读取缓存原件、核身份并视觉核对；e^(3x)、二项式及乘积二次系数。课程Q7保留原题与分值 |
| [AQA June2011 MFP3 QP](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/June%202011%20QP%20-%20FP3%20AQA.pdf)／[MS](https://pmt.physicsandmathstutor.com/download/Maths/A-level/FP3/Papers-AQA/June%202011%20MS%20-%20FP3%20AQA.PDF) | QP第2页Q3、MS第6页。读取缓存原件、核身份并视觉核对；分部积分、反常原因、有限端点和显式极限。课程Q8继续标教材衍生教学改编，无官方配分 |
| 本地[June2024 FM03 QP](../../assets/pdf/fx-cg50/references/oxfordaqa-fm03-2024-june-question-paper.pdf)／[MS](../../assets/pdf/fx-cg50/references/oxfordaqa-fm03-2024-june-mark-scheme.pdf) | QP第1、10–11页，MS第1、10–11页；Q7导数归纳及系数／阶乘。OxfordAQA 9665/FM03 Unit FP2，QP30May2024、120分、MS final v1.0；实际重读PDF文本，未逐页视觉核验 |
| 本地[January2025 FM03 QP](../../assets/pdf/fx-cg50/references/oxfordaqa-fm03-2025-january-question-paper.pdf)／[MS](../../assets/pdf/fx-cg50/references/oxfordaqa-fm03-2025-january-mark-scheme.pdf) | QP第1、8–10页，MS第1、7–10页；Q5整除归纳、Q6差分数值行、Q4有限界／极限。OxfordAQA 9665/FM03 Unit FP2，QP14January2025、120分、MS final v1.0；实际重读PDF文本，未逐页视觉核验 |

旧卷缓存原件位于`C:/Users/mi/AppData/Local/Temp/fm03-proof-series-7dq4kwqw/`；本轮审查读取已有原件，不冒称本次新下载。部分QP压缩排版，PDF页与页脚分开记录。OxfordAQA四份PDF的数学文本抽取有次序局限，仅据可识别内容校准方法／条件，未据此认证整卷、增录全文或赋分。未获取新的考官报告，未列未读材料为已读。

## 源码、技术与学生试用的边界

只读检查六页源码中的完整示范、下一任务、折叠帮助及显式ID，未见角色框嵌套、交叉／未闭合、重复显式ID或多道独立题共框；details为markdown=1且默认关闭。R1只改Q5答案内部的展开及说明，修后再次复读两语该处，边界仍闭合。这不是Jekyll构建、生成HTML或浏览器阅读验收。

主代理报告修R1前13项技术专项全通过，修后数学／双语测试再次通过、最终build已成，受影响16视图仍在复查。本审查未执行这些操作，不把技术结果替代内容判断，也不提前宣布尚在进行的浏览器复查完成。没有运行build、tests、commit或push；只写本报告，没有改课程源、其他报告、index、共享CSS、scripts、标准或AGENTS。

**本轮所列版本的内容审查完成，无未决内容阻断；本组三章仍待学生试用。** 唯一真实学生反馈来自已接受的一阶积分因子样章；本组三章没有无帮助首次作答、重试成功或延后保持证据。作者自检、独立内容审查、技术验收、学习效果分别记录。

## 最终审查版本

下列SHA-256标识实际复读版本。归纳、级数两语审查中未变；有限级数两语包括Ohm的R1修复。后续改变题目、条件、解答或帮助时复查受影响内容。

| 文件 | SHA-256 |
| --- | --- |
| alevel/a2-further-mathematics/proof-by-induction.md | `6b0937369359a12685cc6b0f31f4a11d5274dada2cfbf5a48dc445586fd03b44` |
| zh/alevel/a2-further-mathematics/proof-by-induction.md | `03327f88321d8c9737ff1f92282f8b6f79a3853f50f3736a36d34186befd4813` |
| alevel/a2-further-mathematics/finite-series.md | `d1434cf6f7983f77904fabfab93ab79979aaad2cbe6390334a51977dc0ef75f8` |
| zh/alevel/a2-further-mathematics/finite-series.md | `e268af310f2a37695719b82affca69a6c82d1c5a86564bf99da862a15e88d607` |
| alevel/a2-further-mathematics/series-and-limits.md | `1f01f17f9b4b09dd183da13c83a111a3f38948c73d6ec7976c674cfa24a91edb` |
| zh/alevel/a2-further-mathematics/series-and-limits.md | `8aed35ef3209608d96b2a112e364422151b622098e1177c3171cdbd4bff96af8` |
