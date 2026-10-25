# MA05 dynamics / projectiles 分组实施记录

日期：2026-10-25。分支 `codex/ma05-full-upgrade`，用户给定基准 `d1e93ec`。先完成本设计卡与目标映射，再修改正文。作者仅负责本记录、Newton / projectiles 四个双语源文件及两个对应测试脚本；共用分支其他改动不属于本组。

## 设计卡（正文前）

对象：OxfordAQA Mathematics **9660 / MA05, A2 M2.4–5**，specification **v5.2**。M2 全段 printed 27–30 / PDF 26–29（1-based），本组条目在 printed 29 / PDF 28。不是 9760。

中心问题：力怎样改变所选物体的运动？接触、滑动方向或支承消失后，原方程还能继续用吗？抛体的两个方向怎样用同一个时间描述同一次运动？

先修：方程、直角三角比、受力图和静摩擦上限、带符号的速度/加速度、向量分量、基本多项式/指数/三角函数微积分。缺失时分别回补 forces 的 `#force-diagrams`、`#slope-components`、`#friction-and-limiting-equilibrium`，kinematics 的 `#velocity-and-acceleration`、`#integrating-with-given-conditions`。不要求学生先知道本课的动力学/抛体结果。

模型：质点、质量恒定、近似惯性地面坐标；固定平面接触时法向加速度为零、反力非负；滑动摩擦与运动相反，静止时重新比较需要量与上限；绳/滑轮条件决定共用加速度大小及张力。抛体仅受重力，忽略空气阻力、g 恒定，至首次碰撞为止。速度与加速度的单位和含义分别解释。

图的用途：复用原有三个 dynamics 受力图和三个 projectile 图，连接方向、分量、阶段与方程；不新造资产、不以图数作为验收。阶段示意图放在公开示范中，不用带答案图考方向选择。

组织：沿用用户认可 forces 样章的 `reading_layout: true`、完整公开 `worked-example`、每题独立 `lesson-check`，Hint / Solution 分别默认关闭。核心概念公开。保留可靠旧题、条件、公式、英文题干和旧锚点；练习标题改为中性但显式保留旧 ID。

独立产出：先不打开帮助，画图/选对象与方向、列出适用模型、保留积分条件或全部候选时间，再核算并解释条件。使用提示的结果单独理解为“借助帮助完成”。反馈须给具体回补链接，同目标另题重试；不把空间积分题作为滑动分阶段的重试。

后续：Newton → projectiles；projectiles → work-and-energy。两课均链接入口 `#mixed-problems` / `#later-review`，并留下可定位的本课延后提取任务。任务全为 **Self-written / 自拟题**，无官方分值。

## 目标 → 讲解 → 独立任务 → 判据 / 回补 / 新重试

下列锚点在中英页保持一致；正文写作和最后审查按此表逐项核对。

| 目标与范围 | 讲解 / 示范 | 独立任务 | 判据与具体恢复 | 同目标新重试 |
| --- | --- | --- | --- | --- |
| N1 M2.4：选研究对象、合外力与第三定律，区分速度/加速度 | `#newtons-laws-and-the-resultant-force` | `#body-check`、旧 Q3 | 图只含作用于该物体的力；相互作用力在不同物体；负 a 不等于反向速度；回该概念段 / forces `#force-diagrams` | 旧 Q3 反求驱动力；`#later-dynamics-check` 再提取 |
| N2 M2.4：水平/斜面常加速度，法向条件与滑动/停止重新建模 | `#linear-motion-with-constant-acceleration`、例 1–3 | 旧 Q1、Q2、`#independent-task-motion-direction-or-force-direction` | 法向分量不漏；说明合力恒定阶段；停后先求静摩擦需要量；回本段及 forces `#friction-and-limiting-equilibrium` | `#stages-retry` 改为先下滑、外力向上，停后重新判定 |
| N3 M2.4：连接体逐体方程及约束有效区间 | `#connected-particles`、例 4 | 旧 Q4 | 两个对象、两个正方向、相同 a 大小；T/R 非负；回本段 | `#connection-retry` 水平支承＋悬挂体触地后的变化 |
| N4 M2.4：恒定向量合力求运动，区分位置/位移/速率 | `#motion-in-two-or-three-dimensions`、例 5 | 旧 Q5 | 各分量合力除质量；初始条件；速率取模；回本段及 kinematics `#position-and-displacement` | `#vector-retry` 三维且非零起点，区别位移与最终位置 |
| N5 M2.4：时变合力积分两次，使用不在零时刻的条件 | `#motion-with-variable-acceleration`、例 6–7 | 旧 Q6、Q7 | 先 F/m；两组常量分别由条件确定；不可套恒加速度；回本段/kinematics `#integrating-with-given-conditions` | 保留 `#retry-use-a-force-record-in-space`，明确它重试变力目标 |
| N6 M2.4：从位置/速度反求合力（含三维） | `#finding-force-from-position`、例 8 | 旧 Q8 | r 求两次导数，v 求一次；F 是合力；弧度；回本段 | `#record-retry` 改给速度记录而非位置，辨认导数次数 |
| P1 M2.5：由重力模型建立分量、共用时间，辨别速度/加速度 | `#the-projectile-model` | `#release-check` | a_x=0、a_y=-g；水平速度非零不等于水平加速度非零；说明阻力假设 | `#retry-change-the-structure` 水平反求题补模型解释 |
| P2 M2.5：位置/速度/速率/方向与最高点 | `#position-speed-and-direction`、例 1 | 旧 Q1 | 方向由速度分量；最高点只有竖直分量为零；回本段 | `#independent-method-choice` 两高度交点与最高点速度 |
| P3 M2.5：由分量推导同高 T、H、R，保留适用条件 | `#greatest-height-and-range`、例 2 | 旧 Q2 | 非零根、v_y=0、代回 x；考试不直接引用成品公式；回本段 | `#flight-retry` 改给飞行时间和射程，反求分量/高度 |
| P4 M2.5：真实落地高度、正根/首次碰撞及离面分阶段 | `#projection-from-a-height`、例 3–4；`#leaving-a-surface` | 旧 Q3、Q4 | y=-h，t>0 且未更早碰撞；离边速度方向连续、力变化；回这两个段落 | `#retry-change-the-structure` 反求初速；`#later-projectile-check` 屋顶到地面的阶段任务 |
| P5 M2.5：两次过高度与高度区间 | `#passing-through-a-given-height`、例 5 | 旧 Q5 | 两根/上升下降/飞行域，区间是二次不等式；回本段 | `#independent-method-choice` 改变高度参照并诊断最高点断言 |
| P6 M2.5：消时推轨迹、目标角度及可实现性 | `#the-equation-of-the-path`、`#finding-an-unknown-projection-angle`、例 6–7 | 旧 Q6、Q7 | 同一 t 两项都代入、u_x≠0、q 范围、正时间；回对应段落 | `#target-retry` 目标提高后无实角，不强行保留两个角 |
| P7 M2.5：局部障碍/全程限高、严格边界和模型终点 | `#height-restrictions`、例 8 | 旧 Q6、Q8 | 在墙的位置求高度，与全程最大高度分开；触碰不是安全通过；回本段 | `#obstacle-retry` 同时给墙和天花板，比较不同条件 |

## 实际亲读来源（不是以旧研究记录替代）

- 已读仓库 AGENTS.md、course-content-standard.md **v1.1**、公式指南与认可的双语 forces 样章；沿用其公开概念/示范、分题帮助方式。本组授权明确为同一共用分支互不重叠写集。
- 从 [9660 官方资格页](https://www.oxfordaqa.com/qualification/international-as-and-a-level-mathematics-9660/) 核对 specification 链接；亲读 [v5.2 正文 M2.4–5](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf#page=28)。范围/页码如设计卡。M2.5 要从分量方程求 T/H/R，不在考试直接引用成品公式；不设斜面落点/阻力抛体。
- 本地 QP：`assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-question-paper.pdf`，24 页；封面 21 January 2025，9660/MA05 Unit M2，90 分钟，80 分，g=9.8，通常计算器最终答案 2 s.f.。
- 本地 MS：对应 `...-mark-scheme.pdf`，17 页；封面 January 2025，**Version 1.0 Final**。使用 bundled Python / pypdf 实际提取相关页；Q9 QP18 / MS17 另用 Poppler 图像核对数学排版，避免 PDF 文本丢失指数/负号。

| 来源题 | 实际 QP 页（printed/PDF 相同） | MS 页 | 亲读的方法与条件 / 独立核算 |
| --- | --- | --- | --- |
| Q1(a)–(c) | 2–3 | 4–5 | m=18000，P=345000，R=kv^(9/4)。在 v=12 瞬间 D=P/v=28750，D-R=ma=27000，k=1750/12^(9/4)=6.529…；不是将驱动力当合力，a=1.5 也不是整段恒定加速度。功率内容由能量组处理。 |
| Q4(a),(b) | 8–9 | 9–10 | x=u cosα t、y=u sinα t−gt²/2，两项都消 t，整理题给式须充分展示（AG）；u=15、α=60°、y=7 的两根及区间，x≈5.64,14.2；时间差≈1.1463 s。 |
| Q7(a)–(c) | 14–15 | 13–14 | 光滑屋顶40°、路程2.5、落差6；(a)题指定 energy method，u=√(2g×2.5sin40°)=5.61218…；(b)离边向下40°，y=-6、t≈0.798081、x≈3.431…；(c)速率12.2105、与向下竖直夹角20.6151°。屋顶阶段不是抛体，落点在水平地面；不把(a)改写成牛顿法冒充原要求。 |
| Q9 | 18–19 | 17 | F=(36t²−18t)i+(6cos t−24sin2t)j+3exp(−t/3)k；m=3，原点静止。先除3，积分后由v(0)=0给常量，再积分用r(0)=0；r(2)=(8,−6.681… ,1.620…)，OA≈10.54830625，题指定3 s.f.→10.5。非零原函数值不能因“静止/原点”直接令积分常量为零。 |

原题在本组记录中用于方法核验；课程所有任务继续明确 Self-written，不伪称官方题/评分点。

## 完成与验收

**本组源码已冻结，等待主线程整合验收。** 最终检查时 HEAD 仍为 `d1e93ecac2b0ea1cb8b295b4f289a208fd250db8`。未切分支、提交或推送。

实际改动文件（仅这七个仓库文件）：

- `alevel/a2-mathematics/mechanics/newtons-laws-of-motion.md`
- `zh/alevel/a2-mathematics/mechanics/newtons-laws-of-motion.md`
- `alevel/a2-mathematics/mechanics/projectiles.md`
- `zh/alevel/a2-mathematics/mechanics/projectiles.md`
- `scripts/test-mechanics-newton.js`
- `scripts/test-mechanics-projectiles.js`
- 本实施记录。

### 学习证据与作者复核

前面的目标映射已全部落在正文，N1–N6、P1–P7 均有实际独立题、定位讲解、错误恢复和同目标重试。逐项作者检查的重点如下；这是源码和作者数学自检，不冒充独立审查或学生效果证据。

| 目标 | 实际完成及核验 |
| --- | --- |
| N1 | 公开的小车解释与 `body-check` 先区分对象和相互作用力；Q3 由减速记录反求仍向前的驱动力；延后电缆题在向上速度和向下合力并存时要求无句型提示的英文解释。 |
| N2 | 原例1–3、Q1–2和独立上滑题的条件/数值保留；明确恒定的是合力向量，停止时不能沿用滑动摩擦。新下滑重试 a=3.55，t=40/71，位移=-40/71；停后所需摩擦向下2.2，小于上限4.9。受力回代核算通过。 |
| N3 | 原斜面连接体与滑轮合力保留；解释 light/smooth/inextensible 各自作用以及相加的是各局部标量方程。新触地题 a=3.92、T=11.76、触地前速率√3.92；绳松后 A 匀速，不能维持共同加速度。 |
| N4 | 原常向量例题、Q5及新三维非零起点任务均回代 r(0)、v(0)、m r''；新题一秒时 r=(3,3,-1/2)、v=(2,2,0)、位移=(2,1,1/2)。分清速度分量为零与加速度为零。 |
| N5 | 原两次积分、后时刻条件及空间题保留；将空间题明确归于变力重试，另外提供滑动目标的专用重试。新增公开的多项式/三角/指数混合示范，逐项确定 C、D：初始静止不等于所有积分常量为零。导数和条件检查通过。 |
| N6 | 原三维位置反求合力保留；新任务改给速度记录，需一次而非两次求导，F(0)=(0,-2,4)、模√20；解释这是合力而非必然等于重量。 |
| P1 | 从 flying particle 的受力推 a_x=0、a_y=-g；两次水平释放任务在同一2秒落地、距离18/36，质量取消及阻力假设都有独立解释要求。逆向发射重试另检验两个加速度分量。 |
| P2 | 原Q1与独立高度任务保留；原点距离、位置方向、速度方向、最高点只有竖直速度为零分别说明。速度、能量与位置回代通过。 |
| P3 | 原从分量求 T/H/R 的示范、Q2保留，并明确9660考试不直接引用成品公式。新题由4秒与32米反求 u_x=8、u_y=19.6、H=19.6；证明0<t<4时未提前触地。 |
| P4 | 原不同高度/向下发射题和正根保护保留；新增离面公开解释与屋顶延后任务。屋顶 a=5，边缘速度10且向下30°；空中T=1、落点5√3、撞地速率10√3、与向下竖直夹角30°。用总竖直落差15米独立能量核对 v²=300。未把斜面落点加入范围。 |
| P5 | 原两次过高度和时间区间题保留；独立题改变高度参照、同时求两个速度并诊断“最高点静止”；两个交点都小于首次落地时间(3+√13)/2。 |
| P6 | 原消时与两角题保留；新目标(10,10)在速率14时给 q²−4q+5=0，判别式=-4，无实角；独立用 y≤7.5 核对不可达。Q6路径目标恢复链接指向该新目标题。 |
| P7 | 原天花板严格角度范围、极限射程及不能穿过碰撞继续计程的保护保留；新墙/天花板组合任务 H=4.9<5，但墙处y=3.675<4，因此在墙处终止。 |

Newton 有9个公开完整示范、16个分别关闭提示/解答的任务；projectiles 有8个公开示范、15个任务。数量只用于确认边界完整，目标证据以逐项映射和上述实算为准。原来8个例题的编号/锚点保持；新增混合函数示范用不编号的扩展标题，避免旧例8前出现例9的阅读倒序。

### 实际测试结果

- `node scripts/test-mechanics-newton.js`：**通过**。原世界坐标受力、摩擦反向、滑轮受力、8组原向量运动的导数/条件/轨迹检查保留；新增停止阶段、触地、三维常力/变力、混合函数积分、速度记录及官方Q1/Q9方法核算。
- `node scripts/test-mechanics-projectiles.js`：**通过**。原位置/速度导数、能量恒等式、不同落地高度、首次落地、两高度根/区间、目标角、墙、天花板严格边界保护保留；新增同时间释放、逆向飞行、不可达目标、两障碍与屋顶离面任务；官方Q4/Q7独立重建核算通过。
- 两脚本已取消读取旧 `_site` HTML 的前置条件，直接检查各自双语源文件：`reading_layout`、公开例题边界、不嵌套任务、每题恰好两个独立且默认关闭的帮助、具体恢复链接、本页锚点唯一且可定位、英文题干相同、不得含破坏TeX的控制字符/ASCII竖线。
- 使用共享 bilingual 测试同样的 TeX 提取规则：Newton **407 / 407，逐项序列完全一致**；projectiles **379 / 379，逐项序列完全一致**。两脚本各自通过仓库已有 MathJax vendor 将本课所有独特 TeX 转成 SVG，并检查无 merror；不依赖未跟踪 node_modules 或安装新包。
- 对基准 `d1e93ec` 做只读保留检查：四页所有显式旧ID保留；Newton每个语言的 **78个原展示公式**、projectiles每个语言的 **67个原展示公式** 均仍在；原有每课3个图片路径/顺序不变。
- 两课中英标题ID序列一致，所有英文题干行对齐；本组本页恢复锚点通过。跨组页面和入口最终锚点由主线程整体验收。
- 对本组六个源码/脚本运行 `git diff --check`：通过。源码使用LF；Git仅提示工作区换行转换，不影响检查结果。

### 冻结指纹（SHA256）

| 文件 | SHA256 |
| --- | --- |
| Newton EN | `a1dcffce386ddb67a06bc21bc078b03162d3b82827c9b774824055234a6d1353` |
| Newton ZH | `62c2692691ec86905dea51ae8d6b138f6627915385b45bd45a62808a5f2400e5` |
| Projectiles EN | `1ae919c172546288b0c5361155761ff62066af967eb2f56a6baab89a4c0a796c` |
| Projectiles ZH | `c0245eb5031681dc604e2b30abe8aeff935f5785f89c66472a262b7947631a7b` |
| test-mechanics-newton.js | `b739a08e3d63deffa71fc182a389167428f14a5cc9a156b853acc02bdf477513` |
| test-mechanics-projectiles.js | `0fb4f5a103a4fe0ec35b61a3d81670987bd154efee1818bdeca4096a7c613080` |

### 明确交接的未完成项

本轮按分工未构建、未运行共享 bilingual/transfer 或全局测试、未做浏览器桌面/手机实际阅读、键盘操作和浏览器内公式排版验收。主线程已说明承担这些整合检查，本组不重复运行、不等待它们才交接。

内容状态：**作者数学与源码自检通过；独立内容复审待主线程安排**。技术状态：**本组source/math tests通过；全局构建/浏览器/跨组链接待整合验收**。学生试用：**未进行**，不能称学习效果已验证。

没有修改共享CSS/layout、入口、quick-reference、forces五文件、其他组页面或共享测试；没有安装依赖、改未跟踪package/node_modules。未增加课程图片资产。主线程可直接接手本记录和冻结源码继续验收。
