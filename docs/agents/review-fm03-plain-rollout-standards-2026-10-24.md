# FM03 通俗表达扩展：Standards 独立复核

2026-10-24。结论：**本轮规范违反 0 项；判断建议 0 项**。依据 `AGENTS.md`、课程内容长期标准 v1.1 第 3–7 节、公式指南及协作要求。作者四份 implementation records 只作线索，新增例子另行展开、求导与乘回核算。

基点与当前 HEAD 均为 `19db6ca1640fb47fd541b3f8fb3d45d510d41b09`，无范围内新提交；采用 `git diff 19db6ca -- <下列29路径>` 审核工作副本。范围为指定 28 页及矩阵测试，排除 MA03、AS 和三对已认可样章。已纳入最终六页分行及中文极坐标句序调整。

概念先解释意义，再接术语、一般式和复习口令；新增示范有起止，未预解原独立诊断。源文对照确认 282 个原任务块、536 个帮助块逐字保留且默认关闭；162 个原示范块原样保留，另两块仅补消元选法解释。原英文任务、数学条件、图及替代文字保留；14 对 TeX 序列一致，旧标题到锚点的源码映射及学习／回补／重试／回顾路线保留。

代码异味仅作判断：新增断言复用既有矩阵读取与乘法，不提出抽象或命名整改；双语重复属于项目要求。本次无须提出最小修正。

核算定位如下，EN 为 `alevel/a2-further-mathematics/`，ZH 为 `zh/alevel/a2-further-mathematics/`；行号对应下方指纹版本。

| 对象 | 精确位置（EN／ZH） | 独立核验 |
| --- | --- | --- |
| K0L0 与最终分行 | `matrix-algebra.md:37`、`:49`／`:41`、`:53` | 四项为 4、6、1、3；两种语言第二行均改为 aligned 两行，矩阵与原诊断数据不同 |
| D0 对 p、q | `eigenvalues-and-eigenvectors.md:39`／`:43` | p 映为 (2,0)=2p；q 映为 (2,3)，两个分量不存在同一倍数；非零及零特征值条件仍在 |
| 复数平方 | `de-moivres-theorem.md:35`、`:47`／`:37`、`:49` | (1+i)²=2i；模从 √2 到 2、角从 π/4 到 π/2；一般平方按二倍角核对，整数幂证明仍保留 |
| 根系数展开 | `roots-and-polynomials.md:43`／`:45` | 二次式为 x²−7x+10；三因式逐项选取给出一次和、两两积和、总积的交替符号，最后乘领先系数 |
| Maclaurin 系数 | `series-and-limits.md:113`／`:115` | P′=b+2cx、P″=2c，故 a=f(0)、b=f′(0)、c=f″(0)/2；阶乘及幂级数表示的适用条件保留 |

**未检查边界：**未改课程或共享文件，未构建、运行浏览器或提交；未重读官方原卷／实时核验资格版本，未重审全部旧题或验证学生学习效果。主任务报告的首次构建 22.012s、13 项专题测试、双语 2864 个 TeX、生成页 926 个旧标题／653 个显式 ID／318 个旧题干保留，记为集成结果，未由本审核重跑，也不作内容证明；六页分行后的重建与实际阅读结果不由源码核验替代。

**最终 SHA256 清单（原始文件字节）：**共 28 页＋1 脚本。下次修复后按路径重算；只有指纹不变的部分可继承本结论。六页最新排版已包含在内。

```text
6030e7b3a078ad869e81ef14ee5bec7c05fa89568a85f6161e15b96de515521c  alevel/a2-further-mathematics/index.md
a2fbcd85e628a5b91a61fb27b2ef01ba933b05abc576dd7044719f1dddae5b9f  zh/alevel/a2-further-mathematics/index.md
af86af09b365357d07d65cb7ce26fbe63b4523d714b1632047e8587d40598f70  alevel/a2-further-mathematics/roots-and-polynomials.md
d0a632d368f98753caa2587e66065b92e02646f9fc27509910a3ff54f34822ce  zh/alevel/a2-further-mathematics/roots-and-polynomials.md
540ada6f1bf1e4a76fefaa12c1fa48e258388f8de7fd881c6978579f027bb816  alevel/a2-further-mathematics/proof-by-induction.md
215ae1f4b76bb1e4fdda00be1e2ef331849ef1e37b71fd65588e15be5a83a5e8  zh/alevel/a2-further-mathematics/proof-by-induction.md
8cef631e9a4cc8a6cd70e0fcf909ff626a9f7fd8b1c495c4e94c5dca2eb5ba19  alevel/a2-further-mathematics/finite-series.md
34387a7c24e0c09522f215ee7b3655700a8d7e168f19f5ef248fceba72cf65eb  zh/alevel/a2-further-mathematics/finite-series.md
74363074ac7d4dbbaf6e5d60d80da1cba9bd76473ac4d2ad61146b85023a5999  alevel/a2-further-mathematics/series-and-limits.md
caea1bbec4576b09e725015d104f5f2c42ecdf8965b33cccbb44d5f1eff7779b  zh/alevel/a2-further-mathematics/series-and-limits.md
dfa02feba4106ba6c71904abe00f134e7e65ff155e96b9959538db39a611cec5  alevel/a2-further-mathematics/de-moivres-theorem.md
6e7602e7989456317f97e1922863866a131c71b5606e66b5a039582e33b01767  zh/alevel/a2-further-mathematics/de-moivres-theorem.md
a4b6ac93e2c58353e1ec0abbef5d0fa7d6743a5e0908e2255b9cfc0f7968f08d  alevel/a2-further-mathematics/polar-coordinates.md
7405b879a8a3edee48d91b18c4ccc8d63e43ccd54d3df9bd523621e3fac7f367  zh/alevel/a2-further-mathematics/polar-coordinates.md
7777493e7f9b92cad11a3a2b41ea1df3eb7c081f3967b0a59a33a8ab62bd9669  alevel/a2-further-mathematics/inverse-trigonometric-functions.md
01fecb8e18759f0930b11af206eb6b042de3cc791dbe50ce9e9ee2239f23ab48  zh/alevel/a2-further-mathematics/inverse-trigonometric-functions.md
427d5dc457ff4d08f87de82adbce17a349e120af15fdc1c959c886b75718c4f7  alevel/a2-further-mathematics/arc-length-and-surface-area.md
db3b34aa928ad50259d6f5f117d84241a6e675f7f5c466e45a6e73fc379e4a64  zh/alevel/a2-further-mathematics/arc-length-and-surface-area.md
61d4861de974a4c0623b460b8948893dcebfebbe2f3b657ae9a6f8cf66002db7  alevel/a2-further-mathematics/vector-products-and-coplanarity.md
6b9ed2dc922f107b22f5f364894e6e6111ee0a16e4a075659485796f254008c6  zh/alevel/a2-further-mathematics/vector-products-and-coplanarity.md
42a32a4c9cbd2397423b54bc0aabbed5de876dd137382d20a083d4cc712f1894  alevel/a2-further-mathematics/lines-and-planes.md
7fa111bc4f2c95e15ca0a7410680ecf357accb2681735128051a71cc56c395ec  zh/alevel/a2-further-mathematics/lines-and-planes.md
331f725bae2107371cb33fa91fcaaa4a26796a977214f120d863d1c72236e572  alevel/a2-further-mathematics/matrix-algebra.md
763774c8dacda8d752fa4e2828c66c8cfac95e8d8aba25bf104c6d09d3231b65  zh/alevel/a2-further-mathematics/matrix-algebra.md
85c6cfb0b3bd118bdd2397a070677f72bac145d3704bcd26755a7add366fab93  alevel/a2-further-mathematics/linear-equations.md
d6f4100ccb2f27d886e4990bd90582544fa2f3daff063a750f1f8f28daae944d  zh/alevel/a2-further-mathematics/linear-equations.md
b922a49b41f1350189949d4ff38799ad9a1b6a4296d22b63378c6337dc32aed0  alevel/a2-further-mathematics/eigenvalues-and-eigenvectors.md
2388afa4d728f04d5d078478181c1c8665809b4fc2b505aa236688d67187c827  zh/alevel/a2-further-mathematics/eigenvalues-and-eigenvectors.md
509238a9ab38c644ee69c04cf52c69522f5d63b87a03bdffba61a4490543b9d7  scripts/test-further-matrices.js
```
