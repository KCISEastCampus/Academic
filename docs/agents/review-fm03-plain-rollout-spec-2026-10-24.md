# FM03 通俗表达扩展：Spec 独立复核

2026-10-24。结论：本轮未发现有证据的需求缺失／部分实现、越界或实现错误；最小修正：无。此结论只针对本次改动。

需求为用户原话“普数人人必学，希望简单语言，特别初学者”“FM03 样章写得好，扩展至所有其余 FM03”，具体边界见[主实施记录](implementation-fm03-plain-rollout-2026-10-24.md)第 7–13、17–21 行：先建立意义，保留深度、原任务和恢复路线，不预解独立题。已读四份指定规范及四份实施记录；作者来源记录仅作线索。

逐页对照固定基点 19db6ca1640fb47fd541b3f8fb3d45d510d41b09 与未提交工作副本，范围为下列 28 页及矩阵测试；HEAD 等于基点，无范围内新提交，未用三点 diff。已重读最终六页分行公式及中文极坐标第 33 行重述，数学一致。

独立复算及条件／反例见下表。原英文任务、证明、536 个帮助块、源码锚点承接、示范边界与回补／综合／回顾路线保留；帮助默认关闭，新增示范未给出原独立题答案。双语公式序列一致。

未编辑课程或共享文件，未构建、运行仓库测试、打开浏览器或提交；未重审全部旧卷、认证生成页面及学生效果。主任务报告的专题测试、手机截图和生成锚点结果属主线技术证据，本审核未重复验证。

以下为核算定位及快照附件，不扩大上述结论。表内反例是审查用核验，不要求另加到课程正文。

| 需求对应与最终位置 | 独立重建与条件核验 |
| --- | --- |
| 先具体后一般；[matrix-algebra 英文](../../alevel/a2-further-mathematics/matrix-algebra.md)（第 37 行）／[matrix-algebra 中文](../../zh/alevel/a2-further-mathematics/matrix-algebra.md)（第 41 行）；[eigenvalues-and-eigenvectors 英文](../../alevel/a2-further-mathematics/eigenvalues-and-eigenvectors.md)（第 39 行）／[eigenvalues-and-eigenvectors 中文](../../zh/alevel/a2-further-mathematics/eigenvalues-and-eigenvectors.md)（第 43 行） | K₀L₀=[[4,6],[1,3]]；反序 L₀K₀=[[2,4],[1,5]]。D₀p=(2,0)=2p；D₀q=(2,3)，不能用同一倍数得到。零向量不能确定特征值；diag(0,3) 把非零 (1,0) 送到零，说明零特征值仍允许。新示范与原 P、Q、A 诊断不同。 |
| 展开来由与正式证明；[roots-and-polynomials 英文](../../alevel/a2-further-mathematics/roots-and-polynomials.md)（第 45 行）／[roots-and-polynomials 中文](../../zh/alevel/a2-further-mathematics/roots-and-polynomials.md)（第 47 行）；[de-moivres-theorem 英文](../../alevel/a2-further-mathematics/de-moivres-theorem.md)（第 39 行）／[de-moivres-theorem 中文](../../zh/alevel/a2-further-mathematics/de-moivres-theorem.md)（第 41 行） | 分配律得 x²−7x+10；三因式依次取常数给 −s₁、+s₂、−s₃，领先系数须非零，重根按因式位置重复计入。另以含零根、负根、重根的因式卷积核验；(1+i)²=2i，模 √2→2、角 π/4→π/2。一般平方用二倍角恒等式；保留任意正整数归纳、零次及负整数倒数证明，r>0 条件未丢。 |
| 递推／相消；[proof-by-induction 英文](../../alevel/a2-further-mathematics/proof-by-induction.md)（第 35 行）／[proof-by-induction 中文](../../zh/alevel/a2-further-mathematics/proof-by-induction.md)（第 37 行）；[finite-series 英文](../../alevel/a2-further-mathematics/finite-series.md)（第 29 行）／[finite-series 中文](../../zh/alevel/a2-further-mathematics/finite-series.md)（第 31 行） | 起点加任意 k→k+1 覆盖给定正整数；命题 n≥2 的传递成立却不能证明 n=1，说明不能省起点。逐项重建 1/[r(r+1)] 和移位二的相消，分别剩 1−1/(n+1) 与 (1+1/2−1/(n+1)−1/(n+2))/2；n=1 边界也成立。原完整证明及端项链未删。 |
| 系数／收敛条件；[series-and-limits 英文](../../alevel/a2-further-mathematics/series-and-limits.md)（第 113 行）／[series-and-limits 中文](../../zh/alevel/a2-further-mathematics/series-and-limits.md)（第 115 行） | P(0)=a，P′(0)=b，P″(0)=2c，故 c=f″(0)/2；一般 r 次项由 r! 得系数。独立核验“任意阶可导仍不足”：f(x)=e^(−1/x²)、f(0)=0 的每阶导数在零处均为零，但非零处函数为正；正文明确限定级数确实表示函数。等比部分和为 2−2^(1−n)，并保留调和级数反例，未以项趋零代替收敛证明。 |
| 几何输入与分支；[polar-coordinates 英文](../../alevel/a2-further-mathematics/polar-coordinates.md)（第 31 行）／[polar-coordinates 中文](../../zh/alevel/a2-further-mathematics/polar-coordinates.md)（第 33 行）；[inverse-trigonometric-functions 英文](../../alevel/a2-further-mathematics/inverse-trigonometric-functions.md)（第 31 行）／[inverse-trigonometric-functions 中文](../../zh/alevel/a2-further-mathematics/inverse-trigonometric-functions.md)（第 33 行） | (4,π/6)→(2√3,2)；由整圆角度比例得扇形面积，再取角片极限。非负半径、弧度、扫一次及换边界条件保留，扫两周会重复计面积。sin(π/3)=sin(2π/3)，只有 π/3 属反正弦主值区间；函数端点与导数严格定义域分开。新数值未展示原 3π/4 诊断答案。 |
| 小段长度与旋转面积；[arc-length-and-surface-area 英文](../../alevel/a2-further-mathematics/arc-length-and-surface-area.md)（第 83 行）／[arc-length-and-surface-area 中文](../../zh/alevel/a2-further-mathematics/arc-length-and-surface-area.md)（第 85 行） | 不跨轴短线段的圆台侧面积为 π(r₀+r₁)ℓ，极限给 2πr ds。用 y=x、0≤x≤1 反查：侧面积 π√2；若误用 dx 则只得 π。半径绝对值、完整一周、分段光滑、端盖与两类重复覆盖条件均保留。 |
| 方向／交集／可逆；[vector-products-and-coplanarity 英文](../../alevel/a2-further-mathematics/vector-products-and-coplanarity.md)（第 46 行）／[vector-products-and-coplanarity 中文](../../zh/alevel/a2-further-mathematics/vector-products-and-coplanarity.md)（第 48 行）；[lines-and-planes 英文](../../alevel/a2-further-mathematics/lines-and-planes.md)（第 33 行）／[lines-and-planes 中文](../../zh/alevel/a2-further-mathematics/lines-and-planes.md)（第 35 行）；[linear-equations 英文](../../alevel/a2-further-mathematics/linear-equations.md)（第 58 行）／[linear-equations 中文](../../zh/alevel/a2-further-mathematics/linear-equations.md)（第 60 行） | 叉积先确定法向及面积，再以单位法向点乘求有向高度；交换底边使符号反向，退化底面不能除以其面积。单位化 (2,−1,2) 得 (2/3,−1/3,2/3)；零方向不构成直线，平行方向不能张成平面。保留一式后减去其倍数可加回恢复；首例得到 −3y−z=−9、y−2z=−4，(1,2,3) 满足全部原式，未先解起步诊断。 |
| 入口与必要检查；[index 英文](../../alevel/a2-further-mathematics/index.md)（第 36 行）／[index 中文](../../zh/alevel/a2-further-mathematics/index.md)（第 38 行）；[矩阵测试](../../scripts/test-further-matrices.js)（第 77 行） | 概念起点、原先修、跨章综合和延后回顾入口在源码中可追踪；移至复习区的 method 锚点仍由显式 ID 承接。测试差异仅增加五行新矩阵／向量算例核验，与必要桥梁相符；未扩充课程范围。 |

SHA256 清单：仓库根为 D:/GitHub/Academic；按原始文件字节计算，包含极坐标重述和 roots-and-polynomials、de-moivres-theorem、matrix-algebra 中英六页的最后分行。任何一项变化均须重验对应部分；此清单不包含本审核报告自身。

~~~text
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
~~~
