# AS 化学三页分词修订：限定独立复核

日期：2026-10-27。范围仅为 as-review、bonding-and-shape、structure-and-forces 中英六页本次空格／分词修订，以及空间 SVG 是否仍为已审版本。只写本报告，无课程编辑、构建或 Git 操作；不重算已独立求解的全部题目，不新增外部来源。

**结论：双语题目与学科内容完整性 PASS，原三页内容通过状态保留；未发现本次修订造成的公式、数值、条件、符号、电荷或机理错误。仍有非阻断的分词遗留，不能把本结论写成“所有粘连或真实渲染问题已清零”。**

## 实际核验

| 页面 | 双语任务块逐字一致 | 本轮人工核验 |
| --- | --- | --- |
| as-review | 8/8：mixed-a–f、later-a/b | 逐题读题及两种语言提示／答案，核对物种、量、单位、热量符号、平衡式、检验证据、机理步骤与先前独立求解报告一致 |
| bonding-and-shape | 6/6，含 retry | 核对离子式、电子来源、BP/LP、键角、偶极方向与反馈；B1 比较及重试仍保留 |
| structure-and-forces | 5/5，含 retry | 核对规定粒子数、连线身份、电荷移动、色散、氢键供受体、冰密度和相变解释；S1 比较及重试仍保留 |

总计 **19/19** 题干块逐字相同。这是逐块文字比较结果；两语帮助／答案另经实际阅读核对，不以题数或标题代替语义审查。

as-review 的 Al/H₂ 计量、量热／Hess、两类 Kc、精确质量与水合数等沿用先前独立求解证据；本轮检查既有数值、运算式及条件是否被破坏，没有重新声称完成一次全数重算。mixed-e 仍明确孤立氧化产物 C3H6O，原证据排他条件保留；酸催化脱水及环氧乙烷开环仍有正确电子对起点、成断键、带电中间体与再生酸步骤。中英反馈及回补要求一致。

六页 details 起闭计数分别为 EN/ZH 16/16、12/12、10/10；未见 open 属性，未见重复 id。没有美元符号 TeX 定界，本次关键公式主要为行内化学／算术文字，已按其实际表达检查。上述源码结构检查不等于 DOM、MathJax 或键盘验收。

未读取不可变的修订前全文件快照，未进行 Git diff；因此不主张已证明每一个字节差异都只涉及空格。结论依据是当前实际题干／答案与本会话既有独立内容记录的限定核对。

## 空间 SVG

`assets/img/chemistry-as-bonding-spatial.svg` 的 SHA256 仍为 `93B13AD5BD6B86ADC9C0D8307804039577D2EC611DCF6C2A27503BA22C523389`，与 bonding 报告第三轮完全相同。继承该轮实际源码几何核验：PCl5 两轴三赤道、SF6 两轴四赤道及楔／虚线图例可表达所述空间排列，无新内容阻断。该图支持教学示例，未使其他孤对转换任务失去独立性。

该轮及本轮均未实际渲染 SVG；字体重叠、裁切、手机滚动与真实空间可读性须由页面技术检查另行确认，不以哈希或源码几何结论代替。

## 非阻断可读性遗留与最小修复

以下均在当前源码实际读到；同一英文题干遗留也存在于中文页。只建议补边界空格，不改数值或化学内容。

| 定位 | 原片段 | 最小修复 |
| --- | --- | --- |
| as-review EN22／ZH24，mixed-a | contains80.0%；100kPa | contains 80.0%；100 kPa |
| as-review EN48／ZH50，mixed-c | capacity4.18 | capacity 4.18 |
| as-review EN104／ZH106，later-a | loses0.1800；leaves0.2180；mass218.0gmol−1；using18.0gmol−1 | loses 0.1800；leaves 0.2180；mass 218.0 g mol−1；using 18.0 g mol−1 |
| as-review EN117／ZH119，later-b | homogeneous2.00；[O]equation | homogeneous 2.00；[O] equation |
| as-review EN28、67、123 答案 | give3s²；Average30/20；HigherT；leavesKc | give 3s²；Average 30/20；Higher T；leaves Kc |
| bonding-and-shape EN143，retry 答案 | has2 bonding；linear180°；about104.5° | has 2 bonding；linear 180°；about 104.5° |

这些不改变题意或已验证答案，不重开 B1/S1 等学科门槛；真实阅读验收仍需主代理确认，不由本报告宣布完成。

## 本轮文件快照（SHA256）

| 页面 | EN | ZH |
| --- | --- | --- |
| as-review | `6ADD54C0B554C5B8DB9181AF67A6FEE61B6FA93B0749AC3A61F8FDEE15A95A23` | `D6923E4ED74AB97315B537143869790578D1BA21415959D8F6305BF04C0EA0FF` |
| bonding-and-shape | `056D06D6F8ED20D33DCFEE336252F64C3ABCE4E771F5C02792026DF3881F4576` | `85302CE57C4531242A5453DAD7A0BDA2F9D76A01DF09CD104CDFCC22A34876E7` |
| structure-and-forces | `A0315F7647969DD96450058FF2BECE1864853DB3FA2CFC1D635DD21EA106DA07` | `C60444EF4BDBD31BAC469A48B1431B35E34AAA4677776210A7E5B5729A68EC79` |

原核心、氧化还原、化学键、结构物性和综合内容报告不因这次分词修订重新打开；24 路线的整合条件不因此自动关闭。可继续接收有机六页批次的独立内容复核，收到交付后以其实际版本为准，不能将本轮三页检查外推为有机批次或全 AS 已通过。未验证学生试用、实际网页／手机／键盘、公式与 SVG 渲染或发布状态。
