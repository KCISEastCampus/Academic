# A2 四科标题层级与目录修复

日期：2026-10-15。对应 [标题层级审查](audit-a2-heading-hierarchy-2026-10-15.md)。范围为 Mathematics Pure 17 对、Further Mathematics Pure 12 对、Physics 9 对、Chemistry 7 对，共 45 对、90 页；不包括普数 Statistics、Mechanics 和 A2 Biology。本轮保留已有工作树的其他变更。

## 修复结果

- 90 页目录由仅 H2 改为 H2、H3、H4，复用已有目录树、搜索、折叠及手机抽屉功能。
- 11 对、22 页正文按概念归属重组。H2 是主题，H3 是子概念、模型或方法，H4 用于确实从属于它的示范；短主题和独立综合练习保留合理的 H2 → H3，不统一给所有例题降级。
- 共享样式使用字号、字重和留白表达等级，删除 H3 上方分隔线及 H4 装饰短线。桌面 H2/H3/H4 分别为 1.65/1.3/1.1rem，手机为 1.5/1.25/1.0625rem；手机不再统一所有标题的前后间距。

| 学科 | 正文调整 |
| --- | --- |
| 普数积分 | 按化简、逆链式、换元、分部、对数形式组织方法说明与所属示范；通用分部积分公式移到方法引入，对数积分延伸归入分部积分。 |
| 普数分式与除法 | 同一道题的长除法解法成为例题 5 的 H4 子节。 |
| 高数棣莫弗 | 两种三角恒等式推导方向各有所属示范；三角幂积分与复指数积分各有方法入口。 |
| 高数级数与极限 | 对数展开的范围交集、级数乘积和复合展开分别先说明方法，再给示范。 |
| 高数极坐标 | 公共区域与两曲线之间的面积分开；面积差的通用公式和警示移出公共区域例题。 |
| 物理 SHM、RC | 竖直弹簧、单摆、面积法、对数线性分析的专属例题归入对应模型或方法；独立数据探究保持独立。 |
| 物理热学 | 分子运动论下面组织模型与证据、动量传递推导压强、温度与分子能量；速度例题归入分子能量。 |
| 物理速查 | 库仑力、RC 放电、感应电动势三个原有示例分别移至对应概念处，原始来源状态说明保留。 |
| 化学第三周期 | 结构与相变、形成和水反应、氧化物酸碱性、含氧酸结构分别拥有对应示范和考查。 |
| 化学热力学 | 熵计算与 Gibbs 温度分析区分；ΔG 方程及单位说明置于 Gibbs 小节开头。熔点熵变题 Q6 保留在 Gibbs 解释之后，因为解题需要 ΔG = 0 的先修，而非仅凭题名移到熵计算前面。 |

## 内容与技术检查

修复前快照和最新源码、生成 HTML 比较结果：

- 2,060 个原有标题锚点全部仍可找到；新增方法入口后共 2,100 个正文标题。
- 1,214 个 `<details>` 内容块、136 个连续引用题目块与原稿逐块相同，允许重排位置。
- 原有兼容 `<span id>` 保留；公式出现次数及表达式保持一致。比较仅忽略空白、内联/独立公式定界符、`\displaystyle` 和句末句点；分部积分通用公式由内联改为独立公式。
- 新增 `scripts/test-a2-heading-hierarchy.js`：覆盖全部 90 页源码/HTML 等级、无跳级、唯一 ID、正文局部链接、45 对双语标题树，以及 11 对修复的具体父子关系。
- 调整既有测试的例题标题匹配，使 H3/H4 都被计入，保留原有内容验证。

通过的检查共 13 项：`test-bilingual`、`test-further-bilingual`、`test-physics-bilingual`、`test-chemistry-ch03`、`test-pure-consistency`、`test-further-de-moivre`、`test-further-series-limits`、`test-further-polar`、`test-physics-shm`、`test-physics-charge-discharge`、`test-physics-thermal`、`test-toc-refresh`、`test-a2-heading-hierarchy`（均为 `scripts/*.js`）。各测试的学科覆盖不同，不能合称 90 页全部答案已重新人工核验。最后一次 Gibbs 公式归属调整后重跑化学、全范围标题检查及快照比较，均通过。

最新 Jekyll 构建成功，用时 18.011 秒。`git diff --check` 通过。未提交、推送或发布。

## 浏览器检查与证据

截图和快照比较结果保存在 `.playwright-mcp/a2-visual-full-2026-10-15/`。此轮是修改位置的局部目检，不是全页展开检查：

- 中文桌面：上述 11 对修复各选修改节，包括积分、长除法、高数级数/棣莫弗/极坐标、SHM、RC、热学、物理速查、第三周期和化学热力学。常用视口 1280×720，后续为 1280×900。
- 英文桌面 1280×900：积分、级数、热学和化学 Gibbs 小节。
- 手机 390×844：中文积分、级数、热学、化学 Gibbs 小节；公式、表格和标题可读，未观察到整页横向溢出，MathJax 错误节点为零。
- 积分目录实测：搜索“换元”/“分部”保留父主题、方法和例题；方法节点可折叠并以 Enter 展开；手机抽屉 Escape 关闭后焦点返回目录按钮。
- 共享 CSS 额外抽查英文数学力学速查的桌面和手机标题。首次桌面截图出现目录覆盖疑点；视口稳定后复查元素边界与截图，目录右缘为 327.2px、正文左缘为 352.8px，未复现遮挡。最终截图已覆盖瞬态截图。

可复核截图：`heading-repair-integration-desktop.png`、`heading-repair-integration-mobile.png`、`heading-toc-mobile.png`、`heading-series-mobile.png`、`heading-thermal-mobile.png`、`heading-gibbs-mobile.png`、`heading-integration-english.png`、`heading-series-english.png`、`heading-thermal-english.png`、`heading-gibbs-english.png`、`heading-division-desktop.png`、`heading-legacy-mechanics-desktop.png` 和 `heading-legacy-mechanics-mobile.png`。其余中文修改节截图位于同目录的 `heading-*-desktop.png`。`heading-repair-preservation.json` 记录最新比较计数。

## 完成边界

本轮完成已确认的标题父子关系、目录深度和共享标题样式修复。原先 90 页逐段、全折叠展开、桌面和手机的完整目检仍有缺口，见四份 `visual-a2-*-2026-10-15.md`；本轮局部检查不能将它们全部标为完成。未进行学生试用、真实实验、全站旧页面或完整屏幕阅读器验收。共享标题样式作用于所有使用 subjects 布局的课程，旧页面目前仅做上述代表抽查。

本地预览运行于 `http://localhost:8124/`，服务仅绑定本机。后续验收应使用当前生成页面，不复用修复前的标题树或失效截图。
