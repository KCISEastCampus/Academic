# FM03 非线性旋转面积样段：Spec 审查

2026-10-29。**Spec 内容审查通过：未发现缺项、部分实现、越界或实现错误。**结论仅适用于下列 SHA256 对应版本。

范围：四页按 `git diff 59c15fb658e187414f1d09ac7c4620c334942120 --` 与工作树比较；测试及 SVG 直接读取。HEAD 与基点相同，但存在未提交变更，未使用空的 `HEAD...HEAD`。本审查只新增此报告。

依据：[设计卡及目标表](implementation-fm03-nonlinear-surface-sample-2026-10-29.md#制作前设计卡)、[优化清单首项](research-further-ms-course-priorities-2026-10-29.md#2-已确认的优化清单)、[FM03 研究 §3.1](research-fm03-ms-alignment-2026-10-29.md#31-先补非线性曲面面积的完整选法与独立作答链)，以及 AGENTS、课程长期标准、公式指南和本轮用户规格。

## 实际核算与对照

独立解析重建：令 $x=\cosh u$、$u\ge0$，则半径为 $u$、$\mathrm ds=\cosh u\,\mathrm du$；分部积分得到原函数 $u\sinh u-\cosh u$。回到 x 即 $F(x)=\sqrt{x^2-1}\cosh^{-1}x-x$，求导复核正确，且 $F(1^+)=-1$。

| 任务 | 独立重建结果 |
| --- | --- |
| 改编示范，x 从 1 到 2 | $S=2\pi[\sqrt3\ln(2+\sqrt3)-1]$ |
| 参数独立题，t 从 0 到 ln 2 | 两导数为 sinh t、1，速率为正的 cosh t；$L=3/4$，$S=\pi(3\ln2-1)/2$ |
| 轴下重试，t 从 0 到 ln 3 | 两导数为 sinh t、−1，半径为 t；$S=4\pi(2\ln3-1)/3$ |
| 延后多项式题 | 半径 $x^3/3$、斜率 $x^2$；令 $u=1+x^4$，新限为 1、2，得 $S=\pi(2\sqrt2-1)/9$ |

另以 32768 段旋转圆台面积求和及折线弧长独立复核，四题面积最大绝对差约 $1.1\times10^{-9}$。各区间的 x 严格递增，无重复曲面；参数端点速率为 1，Cartesian 导数在 x=1 无有限值不排除曲线端点。均不含端盖。

只读核对缓存 QP、MS 封面及 Q5 的 PDF 第 8–9 页，并目视四张题／评分页；确认为 9665/FM03、January 2026、MS Version 1.0 Final。原 Q5(a) 三分对应导数、平方加一化简及可信的 show；Q5(b) 五分对应完整定积分、分部积分选择、正确原函数、代限和精确值。新增示范均落实（英文 582–640 行；中文 585–643 行），原题答案亦重算一致。端点极限未冒称额外官方分值；改编及自拟身份清楚。

按设计卡检查，半径／ds／dx、选分部积分的原因、上下端计算均有直白说明；不要求重复所有常规算术。三题未预先指定积分方法，提示与答案分别默认关闭；有错因回补及同目标重试。新增段在基本练习后，双曲课有定点回链，未强迫原基础顺序依赖反双曲先修。四份英文题干及新增显示公式双语一致。SVG 曲线采样坐标与模型相符，role/title/desc 齐备；没有扩展其余七项。

## 版本记录

以下为实际读取文件的原始字节 SHA256；前四项为待审课程页，后两项为未跟踪新文件。

| 文件（仓库相对路径） | SHA256 |
| --- | --- |
| `alevel/a2-further-mathematics/arc-length-and-surface-area.md` | `818c828d7da0172f47edf92e57185dafb8b400604c37a2e14e8e5d35abdf6bff` |
| `zh/alevel/a2-further-mathematics/arc-length-and-surface-area.md` | `7fe7babd7cfe2726e8ec84d19baa59d404ea1f49c014d13e3a0eb59afe4281bd` |
| `alevel/a2-further-mathematics/hyperbolic-functions.md` | `31560253ec06e140f47fd1ff6f6a2d553c16be377778479706ae19eb78862fbf` |
| `zh/alevel/a2-further-mathematics/hyperbolic-functions.md` | `ffb48932874a11130a0a76c41f086169f4eb6f4489290d7596136674777625c3` |
| `scripts/test-further-surface-area.js` | `0b4675d94c85e2bc06ced2c087cd08b3511a11562dd78bbb492a41af1b0cb20a` |
| `assets/img/further-nonlinear-surface-elements.svg` | `848d52f85381a383d10019bb5b81179d3565560a995ae7fd2e6d7eb7b200a860` |

测试已阅读并通过语法检查，完整脚本留待主任务统一构建后运行。本轮未构建或改写共享 `_site`，未作实际浏览器、键盘／手机或学生试用验收；内容通过不代表这些项目已通过。未提交、推送或发布。
