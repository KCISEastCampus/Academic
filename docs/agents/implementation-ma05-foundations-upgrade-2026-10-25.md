# MA05 基础组三课双语扩充实施记录

日期：2026-10-25。直接编辑共用工作区 `D:/GitHub/Academic`，分支 `codex/ma05-full-upgrade`，基准 `d1e93ecac2b0ea1cb8b295b4f289a208fd250db8`。本记录先于正文改写建立。

写集仅为 `mathematical-modelling.md`、`vectors-and-kinematics.md`、`momentum-bridge.md` 及 `zh/` 对应三页，`scripts/test-mechanics-chapter10.js`、`scripts/test-mechanics-momentum.js` 与本记录。共享 CSS/layout、入口、速查、forces 样章和其他组页面不修改；不构建、不切分支、不提交、不推送、不安装依赖。用户明确允许同分支不同写集并行，覆盖协作文档的常规单分支接力做法。

已读 `AGENTS.md`、RTK、课程长期标准 **v1.1**、公式指南与已认可双语 forces 样章。复用开放概念主线、`reading_layout: true`、完整 `worked-example`、逐题 `lesson-check` 及分别默认关闭的提示/解答。题标题中性化时保留旧锚点；可靠旧题、数据与数学保护保留。所有课程任务为 Self-written／自拟，无官方分值。

## 先写设计卡

| 页面 | 中心问题、可观察目标 | 先修、模型与呈现 | 示范、提示与独立证据 | 下一步 |
| --- | --- | --- | --- | --- |
| 建模 | 同一现实情境，为何能列出这些方程，又何时失效？解释假设的实际作用；为单体/整体选择受力与方向；用接触、张力与约束检验结果 | 简单方程；AS 重力/牛顿定律，链接 `forces/#l24-concept`，正文重建合力、加速度方向与系统；复用汽车受力图，图用于比较内外力，不提前泄露独立任务 | 保留球、汽车拖车、升降机、定滑轮四示范；五原题分别考假设、约束、系统、方向与刚体限制；绳/杆诊断与新情境恢复题 | 向量运动学；做过力矩后回看模型是否保留转动信息；主入口混合及稍后任务 |
| 向量运动学 | 已知某一时刻的位置或运动变化，怎样确定它在哪里、怎样运动、走了多远？区分位置/位移/距原点/路程；求三维速度、速率、加速度和方向；积分并应用正确条件；辨别路径相交与相遇 | 向量、P2 微积分、弧度，正文给固定坐标含义及变化率；保留路径图但放在对应示范，不先答独立任务；新增一维折返公开示范与径向变化说明 | 保留六示范与七题；补方向独立考查、两次积分同目标新重试、三维恢复题、路径/碰撞独立任务及其真正同目标新重试；圆周速率题独立成为径向/路程检查 | forces；学圆周运动后回做提取；入口 `#mixed-problems`、`#later-review` |
| 动量桥接 | 选了哪个系统后，动量才能守恒？冲量、动能与方向分别告诉什么？判断外冲量；由力时记录求带符号变化；保留大小的正负分支并独立检验能量与分离 | 一维带符号速度、AS 牛顿定律、三角形面积、动能（正文解释）；同一惯性系、质量不变；无恢复系数必考要求；保留构造力时图 | 两个原完整示范；原诊断改为概念讲解后的逐题检查；原两题及撞墙任务保留；新增系统选择独立题、分支能量新重试、带负面积冲量重试 | 功与能；之后本页稍后题，入口混合与稍后提取 |

## 目标 → 讲解 → 独立任务 → 判据/回补/新重试

下列锚点在中英文页同名，恢复链接直达对应讲解；新重试题与原题共享目标，但改变条件、表示或求问方向。

| 目标（范围） | 讲解/示范 | 独立产出 | 判据与恢复路径 | 新重试/稍后 |
| --- | --- | --- | --- | --- |
| 假设的效果与适用性（M2.1） | 建模 `#modelling-assumptions`、球示范 | 原 Q1、Q5 | 区分尺寸与阻力，说明任务是否需要转动信息；回原假设节 | `#model-retry`，`#later-check` |
| 区分轻/不可伸长/绷紧及约束（M2.1） | 建模假设、`#a-fixed-pulley` | 原 Q2、`#independent-check` | 轻决定质量方程，绷紧且不可伸长决定几何；绳不能推 | `#constraint-retry` |
| 选择系统并建立方程（M2.1/M2.4 先修） | `#connected-bodies`，汽车示范 | 原 Q3 | 整体只计外力，单车含张力；两方程共同成立 | `#system-retry` |
| 区分速度与加速度并检验接触（M2.1/M2.4 先修） | `#a-lift-and-its-passenger` | 原 Q4 | 先决定加速度符号；反力非负；不能把 T 当乘客受力 | `#lift-retry` |
| 位置、位移、距原点、路程（M2.2） | `#position-and-displacement`、`#distance-travelled` | 原 Q7，`#radial-check` | 向量/标量正确，折返处分段，路程积分速率 | `#distance-retry`、`#radial-retry` |
| 三维分量求导、大小、方向、静止（M2.2） | `#velocity-and-acceleration`，例2/5 | Q1、Q4、`#direction-check` | 所有速度分量同一时刻为零；角有参考轴；速率为模 | `#direction-retry`，`#calculus-retry` 的加速度核对 |
| 两次积分和实际时刻条件（M2.2，连M2.4） | `#integrating-with-given-conditions`，例3–5 | Q2、Q3、Q6 | 两个常向量，恢复全部条件、微分回查；给合力先除质量 | `#conditions-retry`、`#calculus-retry` |
| 路径、方向与相遇（M2.2） | `#the-path-of-a-particle`、`#meeting-or-crossing` | Q5、`#independent-check` | 路径限制、两非零向量垂直、共同时间满足全部分量 | `#path-retry`、`#meeting-retry` |
| 系统/外冲量与守恒条件（M1.4→M2.6） | 动量 `#choose-the-system-before-conserving-momentum` | `#system-check`、原撞墙题 | 命名系统、方向及外冲量；单物体内力不能凭空取消 | `#system-retry`、`#later-check` |
| 冲量与动能变化有别（M1.4→M2.6） | `#from-force-to-impulse`、速度反向示范 | 原 Q1、起点检查 | 有符号面积/末减初；动能为速度平方，不把 Ns 当 J | `#impulse-retry` |
| 大小的方向分支、动能和分离（M1.4→M2.6） | 大小两方向示范 | 原 Q2 | 两分支分别守恒；负速度可行；能量条件与相对运动另检 | `#collision-retry` |

## 原始来源亲读记录

- [9660 v5.2 大纲](https://www.oxfordaqa.com/wp-content/uploads/2026/07/oxfordaqa-a-level-mathematics-specification.pdf)：本轮直接打开核正文 9660、Version 5.2、36 PDF页，实读 M2.1/M2.2 与 M1.4。整段 M2 为 **printed27–30／PDF26–29（1-based）**，M2.1/2 实际在 printed28／PDF27，M1.4 在 printed19／PDF18。不迁移 9760；M1.4 明示不要求 Newton’s law of restitution。
- 本地 QP：`assets/pdf/fx-cg50/references/oxfordaqa-ma05-2025-january-question-paper.pdf`，24页；封面核 9660/MA05、Unit M2 Mechanics、**21 January 2025**、90分钟、80分、g=9.8；计算器最终答案默认2sf，题内覆盖（Q8(c)、Q9 要求3sf）。配套 MS：17页，January 2025，**Version 1.0 Final**。用 pypdf 逐页亲读封面与下列全部相关页；不是仅依据研究记录。
- Q3(b)(i–ii)：QP pp6–7（含背景20kg、半径0.3m、角速率3），MS p8。链式求导系数3；a 再求导；摩擦为实际水平合力 F=20a。**原卷无 Q3(c)**，任务中的 (c) 按实际 Q3(b)(ii) 记录，不虚构题号。
- Q8(a–c)：QP pp16–17，MS pp15–16。初动量19.2、7.5，末X动量大小2.4，先列两个符号；Y动量24.3或29.1；初动能97.785，损失37.296或11.664（按题3sf为37.3、11.7）。保留两分支，不能自行添加“必为弹性”条件。
- Q9：QP pp18–19，MS p17。F/3 后积分；“starts from rest”给 v(0)=0，“at the origin”另给 r(0)=0；代t=2后求三维模 OA，MS 未舍入10.54830625m，按题3sf为10.5m。公式的上标与三角参数用原页图另核。
- 建模原参考已补读：Q5(a) 的 QP p10／MS p11，核对墙面反力40N和水平合力为零的理由；Q6(a) 的 QP p12／MS p12，核对 uniform lamina 是单位面积质量恒定。均为本轮实际逐页读取，并非沿用旧课程声明。

## 实际完成与冻结交接

**课程源码和两份测试已冻结，停止扩展。** 最终仅保存本实施记录；构建、全部测试、独立审查与浏览器验收交主线程。

实际改动：三课双语共六页、两份指定测试及本记录。复用现有样式，无新课程资产、无共享文件改动、无依赖安装、无分支/提交/推送操作。临时脚本和 Q9 的两张原页核对图仅放在获准的 visualizations 工作目录，不属于仓库交付资产。

- 建模：保留四个完整示范和五道原练习；增加系统边界、轻与不可伸长的区别、定滑轮长度约束、升降机速度/加速度与接触条件的开放解释；保留绳/杆任务，补模型、系统、加速度方向的新重试与稍后任务。最终每语言11个独立题框、4个公开示范；这些数量只描述结构，不作为学习成效证据。
- 向量：保留原六示范与七题，补公开折返示范；解释速度变化率、径向变化与速率、位置/位移/距原点/路程、积分常量和给合力时先除质量。原相交不相遇题现在对应由速度记录重建位置的相遇重试；原圆周速率题独立成题并配偏离原点直线路径的新重试。另补方向、同时静止、合力到三维位置的条件检查。最终每语言16题框、7个公开示范。
- 动量：原诊断移至概念讲解后；开放说明系统外冲量、内力抵消、动能转移及分离/共同运动条件。保留两示范、两原题和撞墙题，补外部电动机冲量、弹簧储能释放、正负力时面积、右侧物体动量大小分支的新任务。最终每语言8题框、2个公开示范。不新增恢复系数必考要求。
- chapter10 测试增加 `--source-only`；保留原数学保护及默认生成页面检查。将旧固定提示/解答总数改为保留原Q1至Qn、提示/解答源与生成角色相符、题框数量源与生成相符，允许章节新增任务，不统一固定新题数。

### 已实际执行的局部检查

1. `node scripts/test-mechanics-chapter10.js --source-only`：最终通过。包括保留与新增微积分、初值、分量、方向、折返、相遇、单体/整体受力核算；双语题干/结构与 **305个去重TeX片段**的本地 MathJax 编译。此命令明确未读取生成页。
2. `node scripts/test-mechanics-momentum.js`：通过。包括原冲量/功积分、两方向分支、被动模型拒绝、撞墙、五步二分保护，以及新正负力时记录的冲量/功双路核算、弹簧释放、外冲量和共同速度分支；双语源结构与TeX编译通过。
3. 采用现有 bilingual test 的同一正则比较**完整、有次序**的TeX序列：建模 **86/86**、向量 **316/316**、动量 **81/81**，均 identical。曾出现建模两个表达式和向量两个原点符号差异，已修正并重新通过。
4. `git diff --check`：本组八个已跟踪改动文件通过，仅有工作区LF/CRLF提示。六页本地链接的源文件存在性检查通过，包含目录 `index.md` 路由；不将此视作生成HTML锚点检查。

### 数学自检的具体依据

- 原有10组向量位置/速度/加速度及给定条件核算保留。新合力重试的两次积分恢复静止和原点条件，末位置模为约0.865m；新路程任务末位置6、位移3、路程5，区分各量；新相遇任务同一时刻为1秒。刹车拖车题由整体与单体独立核得刹车850N、杆对拖车向左150N；秤读数任务加速度向上1m/s²，与向下运动时减速相符。
- 直接核算原卷 Q3(b)(i–ii)：链式系数、二次求导、20倍加速度的水平摩擦向量；Q9：微分回查、两个零初始条件、末位置模10.54830625m。Q9 的QP p18和MS p17另经Poppler原页图检查，确认指数为负t/3、三角参数与分量符号。
- 直接核算原卷 Q8 两方向分支及37.296J、11.664J的动能损失。新碰撞重试两代数分支分别给末动能6J与54J；前者等速度允许共同运动，后者既增能又仍相互接近。弹簧重试总动量为零但动能增加15J，能量源来自题给储能；正负力时重试净冲量1Ns，末速度−0.5m/s、动能变化−0.75J，另用功积分核对。

以上为作者核算与测试，**不是独立内容审查或真实学生证据**。

### 未做与接手事项

- 本组未运行Jekyll构建、全局测试或浏览器；未验收最终生成HTML、桌面/手机重排、键盘、语言切换和跨组入口锚点。主线程将基于最终冻结源码重新构建并执行。
- 未运行 shared bilingual/transfer tests；未修改这些共享测试。已做的TeX等序列、英文Question与本组数学检查不替代主线程的全部测试。
- 独立学科/课程质量审查待主线程，学生试用未进行；不得标记学习效果已验证。冻结时作者自检未留下已知未解决的数学题目错误，但不据此代替独立复核。
- 旧ID通过显式锚点及原主题标题保留；最终生成锚点对应仍交主线程核查。`#mixed-problems`、`#later-review` 接到主线程课程入口；源路由存在，最终锚点不在本组验收范围。

### 冻结文件 SHA-256

| 文件（相对仓库） | SHA-256 |
| --- | --- |
| `alevel/a2-mathematics/mechanics/mathematical-modelling.md` | `64ef32fc17b971c8e0fba9eb0226c07ef7641c59308cc530945ce55b07abf473` |
| `zh/alevel/a2-mathematics/mechanics/mathematical-modelling.md` | `56dbdbfd7b4985f1c38384f5db3d612172e11a1a9a2a80b6189ab376bb9e9253` |
| `alevel/a2-mathematics/mechanics/vectors-and-kinematics.md` | `e1e989f4a6582fcce0887e7dad35d50a492d4c1e3590242b6d6d0ef9cab02108` |
| `zh/alevel/a2-mathematics/mechanics/vectors-and-kinematics.md` | `da8418182236a5505b092ef97e4b3e234a6caabfdfdf04053707775696761d9f` |
| `alevel/a2-mathematics/mechanics/momentum-bridge.md` | `d404cd19edba00434f84464d1d336878801aa935bc1f422ce7b46a64059ef675` |
| `zh/alevel/a2-mathematics/mechanics/momentum-bridge.md` | `eaeb451eb1d646a58fff2e06ea23f8b3d9ef789e835f71cd763f5ef7f4144f55` |
| `scripts/test-mechanics-chapter10.js` | `9267e966922346ac5aad5fea373504d1c78e91e75df2cc9c02a62208dc3988fa` |
| `scripts/test-mechanics-momentum.js` | `e6f53c256e2d9cbe5a7024eda2ed875e721e61c65fd74072bb7c24690ce18abd` |
