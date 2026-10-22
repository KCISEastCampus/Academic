# FM03 全单元制作与验收（2026-10-22）

## 范围与变更记录

本次目标是完成 OxfordAQA **9665 / FP2 / FM03，Version 5.2** 的课程内容和适用检查。以本地 `6655eaf` 为基准，在 `codex/fm03-completion-20261022` 工作树完成；没有迁移到 9765，也没有修改其他学科或共享布局。

**验收状态：本地内容与适用技术检查已完成。** 十六课覆盖 FP2.1–FP2.14；两语言连入口共 34 页，最终桌面／手机 68 视图全部通过。未发布，学习效果与硬件边界见文末。

- 新增五课的中英双语正文：向量积与共面、直线与平面、矩阵代数、线性方程组与三平面、特征值与特征向量。
- 新增四幅自绘 SVG 示意图；图的任务是解释模型，不使用独立练习的答案图。
- 原有十一课补充诊断、分开关闭的反馈及独立重试，并补核旧 AQA 题的原卷／评分材料身份；具体内容见[原十一课审查](audit-fm03-existing-2026-10-22.md)。
- 两语言入口及前后课程链接连接全部十六课，覆盖十四个官方主题；矩阵基础先于方程组，特征值放在其后。教材页码只是定位信息，本次未通读教材。
- 扩展双语总检到十六课；新增向量、矩阵、方程组和十一课重试的独立数学检查。既有专项测试只调整受新增反馈影响的折叠数量，保留原例题／练习及数学断言。

研究依据见[制作前研究](research-fm03-remaining-units-2026-10-22.md)及[官方证据核查](research-fm03-official-evidence-2026-10-22.md)。它们保留研究阶段的历史状态，实施和本次验收以本报告为准。向量和矩阵的题目核读、独立计算与细项覆盖另见[向量实施记录](implementation-fm03-vectors-2026-10-22.md)、[矩阵实施记录](implementation-fm03-matrices-2026-10-22.md)。

## 大纲到实际学习页

下表是内容覆盖，不是学生学习效果评价。每课有先修、解释与示范、独立任务、分开的提示／解答、错误诊断及重新尝试；中英两页保留相同英文问题、公式顺序与稳定锚点。

| 大纲 | 实际学习页（英文；另有对应中文） | 重点检查 |
| --- | --- | --- |
| FP2.1 | [Roots and polynomials](../../alevel/a2-further-mathematics/roots-and-polynomials.md) | 根与系数、共轭根条件、区间与根的个数 |
| FP2.2 | [De Moivre](../../alevel/a2-further-mathematics/de-moivres-theorem.md) | 整数指数证明、全部根、三角恒等式与积分 |
| FP2.3 | [Polar coordinates](../../alevel/a2-further-mathematics/polar-coordinates.md) | 本资格正半径约定、极点、交点、面积与分段 |
| FP2.4 | [Induction](../../alevel/a2-further-mathematics/proof-by-induction.md) | 起始、任意假设、归纳步、结论及运算次序 |
| FP2.5 | [Finite series](../../alevel/a2-further-mathematics/finite-series.md) | 相消、移位、下限、较小整数边界 |
| FP2.6 | [Series and limits](../../alevel/a2-further-mathematics/series-and-limits.md) | 展开系数、有效范围、首个非零项、反常积分 |
| FP2.7 | [Inverse trigonometric functions](../../alevel/a2-further-mathematics/inverse-trigonometric-functions.md) | 主值和定义域、链式系数、配方、积分与端点 |
| FP2.8 | [Arc length and surface area](../../alevel/a2-further-mathematics/arc-length-and-surface-area.md) | 笛卡尔／参数曲线、非负速率、半径与曲面而非端盖 |
| FP2.9 | [Hyperbolic functions](../../alevel/a2-further-mathematics/hyperbolic-functions.md) | 指数定义、恒等式、反函数的分支、微积分 |
| FP2.10 | [First-order DE](../../alevel/a2-further-mathematics/first-order-differential-equations.md) | 标准形式、积分因子、CF/PI、区间和条件代回 |
| FP2.11 | [Second-order DE](../../alevel/a2-further-mathematics/second-order-differential-equations.md) | 三种根型、共振、强迫项限制、边界／初始条件 |
| FP2.12 | [Vector products](../../alevel/a2-further-mathematics/vector-products-and-coplanarity.md)、[Lines and planes](../../alevel/a2-further-mathematics/lines-and-planes.md) | 面积／体积、共面、方向余弦、两种平面式、叉积直线式、交线和角；距离／反射用投影核验 |
| FP2.13 | [Matrix algebra](../../alevel/a2-further-mathematics/matrix-algebra.md)、[Eigenvalues](../../alevel/a2-further-mathematics/eigenvalues-and-eigenvectors.md) | 三轴旋转、六种反射、组合、三阶逆、体积、不变点／线；二阶／三阶及重复实特征值、非零向量 |
| FP2.14 | [Linear equations](../../alevel/a2-further-mathematics/linear-equations.md) | 至多三方程／未知数；全部参数分支、唯一／无解／无穷多及共同几何 |

## 新增方程组课的设计与数学核验

中心问题是“同时满足约束为什么可能有一个、没有或无穷多个解”。先修是两元消元、平面方程、矩阵乘法与逆；先让学生代回两个已知线性约束，再解释可逆行变换。依次连接逆矩阵、奇异系统与右端、三平面配置、参数分支。图只展示共同点／共同线／没有共同点；六个混合练习及变换右端后的重试要求独立分类、给完整解族并作几何解释。

- 自拟唯一解系统的系数行列式为 7，解 `(1,2,3)` 逐式成立。另一给定逆矩阵的两侧乘积均为单位阵。
- 相同系数、不同右端的系统分别给公共直线和矛盾，明确零行列式不能单独判定一致性。
- 参数系统化为 `kz=h−9`。`k≠0` 给唯一解 `(t,3−2t,t)`，其中 `t=(h−9)/k`；`k=0,h=9` 给整条公共线；`k=0,h≠9` 无解。不能除掉异常分支。
- 改编 Jan2025 FM03 Q8，已读 QP pp.14–15、MS p.13。系数行列式为 `−3(k−2)(k−3)`；`k=3` 的消元给互相矛盾的两式，三平面两两相交而无共同点。额外自拟追问 `k=2` 仍无解，不编造另一异常值必为无穷多解。
- `scripts/test-further-linear-equations.js` 用矩阵乘积、直接代回、全参数恒等式、法向和明确矛盾检查上述例练；双语该课的 156 个 TeX 出现逐项相同。

## 技术验收

以下为本轮实际运行结果；所有课程源文件定稿后重新构建，再跑专项与共享回归。

| 检查 | 实际结果 |
| --- | --- |
| Jekyll build | 成功，13.208 秒；Ruby 3.4，本机既有 Bundler 依赖 |
| Pagefind 1.5.2 | 成功，213 个页面、en／zh-cn 两语言；新课纳入索引 |
| `scripts/test-further*.js` 全部 13 个 | 全部退出码 0；包含旧例练、五课新数学和十一组重试 |
| `test-further-bilingual.js` | 16 对课程的英文问题、原分值、公式顺序、来源、图片、锚点、关闭的提示／解答、语言切换与链接通过；2446 个不同 TeX 片段无解析错误 |
| 共享前端 16 项 | footer-counter、site-language、subject-index-translations、search-language、search-excerpts、search-interaction、frontend-loading、frontend-ux、reading-layout、exam-timetable、theme-init、image-modal、reading-progress、accessibility、toc-refresh、back-to-top 均通过 |
| Markdown lint | 两语言全部 FM03 页及本日 FM03 研究／实施／审查文档通过 |
| 差异格式 | `git diff --check` 通过 |
| 生成 HTML 本地链接 | 34 页的 1144 个本地链接／锚点全部存在；PDF 的 page 片段不误作 HTML ID |
| 搜索实际界面 | 用五课各自中英文标题查询，10/10 均出现对应标题及正确语言的课程地址 |
| 桌面／手机全量实际浏览 | 最终 **68/68 通过、0 失败**；共 14752 个公式渲染实例、40 个课程图加载实例及 210 个可横向滚动区域的键盘检查，退出码 0 |

浏览器自动检查范围是 17 页（入口＋16 课）×2 语言×1365／390 像素宽度：等待实际 MathJax 和字体；逐图滚入视口并等待原图加载；检查公式错误和整页横向溢出；用 Enter 展开／收起提示，ArrowRight 滚动超宽公式／表格，Enter 打开图、切换缩放并用 Escape 关闭及返回焦点；实际选择语言，保留章节片段。没有把脚本可解析或截到图等同于真实键盘行为。

第一轮浏览器检查的五个失败由检查程序过早判断惰性图片加载造成；进入视口后原 SVG 均能加载。已修正检查程序等待原图完成再断言，未据误报改共享图片代码。四幅新图已逐幅目视：三轴正旋转视向、线面角与法向区别、反射中点、公共交集及体积高度均符合正文；手机图可放大查看。

目视检查与自动覆盖分开：新课练习区、长矩阵／公式横向阅读和图像弹层，以及旧十一课中文手机诊断区均有抽样目视；没有声称逐像素看完所有长页截图。超宽公式／表格保持局部横向滚动，不把它们缩到不可读或让整页横向溢出；浏览器中已用键盘验证可滚动到右端。未做屏幕阅读器朗读或实体手机触摸测试。

可复核的本地浏览器脚本、逐视图 JSON、搜索结果和 PNG 保存在 `C:\Users\mi\.codex\visualizations\2026\10\22\01a1618d-79b0-7581-ba24-4e304590d78c\`：`check-fm03-browser.cjs`、`fm03-browser-final/`、`check-fm03-search.cjs`、`fm03-search-results.json` 及 `diagram-*.png`。这些是本机验收工件，课程构建不依赖此目录。

## 交付边界

没有学生试用，因此不声称独立掌握、迁移或教学效果已验证。本次未新增计算器按键流程，也未做实机／VM 操作；链接到既有计算器指南不代表本次重新验收硬件。

FM03 examiner report 和公式册正文未获取；不列为已读来源、不虚构其内容，也不增加未经核对的必背公式要求。未通读教材；正式题以已实际读过的 QP／MS 和大纲为依据，旧 AQA 材料的补充角色另行标明。

这是本地内容与技术交付。没有提交、推送、创建 PR、合并或部署，不称为线上版本已更新；也不将适用回归检查称为全部学科的完整 CI。
