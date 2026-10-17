# A2 Chemistry 全页面视觉复核

日期：2026-10-15；最终续验更新：2026-10-16。范围：CH03 入口与六个学习页，中英文共 14 页。

**当前结论：正文 28 视图、140/140 张条带已逐张目检至页脚，全部原待验展开项已补齐；主代理另已实际读完 31 处右端和 6 图的 12 张合图。新增 Tollens 双语行内长式已分行修复，主代理已完成修复后重建与双语桌面／手机四张定点图实读，全部闭合，无剩余项。详见文末最终 ledger；下方 2026-10-15 状态保留为历史记录。**

## 状态与方法

**修复后视觉验收仍未完成：**本轮 56 张化学截图已到位。入口、热力学、电极电势、酸碱及第三周期的中英文桌面与手机正文沿用上轮逐段查看记录（10 页）；过渡金属中英文桌面、离子反应中英文桌面与手机的现有 open 截图现已补看至页尾，过渡金属手机沿用上轮记录。源码已修复入口 Kc 长式、热力学长式与步骤编号、电极电势并排长式、酸碱缺失的浓度符号及长式、过渡金属的长数值计算；这些修复已由主任务纳入构建，修复后截图仍未复查。缺失展开项及截图遮挡处仍待补，不能称全部状态验收完成。

检查使用现有真实浏览器截图，包含桌面与手机及 closed/open 状态；部分 open 未全部打开，具体见下。截图切成保留原始像素尺寸的可读条带并逐张打开，不以长图缩略图、DOM 统计或构建结果替代目检。截图保存在 `.playwright-mcp/a2-visual-full-2026-10-15/`。本次补看的六种视图均由 legacy-fullPage 原图裁剪，条带连续不等于原始截图已证明无几何缺口。

## 逐页记录

| 页面 | 英文桌面／手机 | 中文桌面／手机 | 检查重点与结论 |
| --- | --- | --- | --- |
| 入口 | 四状态全文 | 四状态全文 | 课程比较表、先修题、资源展开；手机 Q5 答案长式已分行，待修复截图 |
| Thermodynamics／热力学 | open 全文 | open 全文 | Born–Haber 图在 open 正常；长算式、示范 4 编号重启与中文速查表挤列已修；缺失展开项见下 |
| Electrode potentials／电极电势 | open 全文 | open 全文 | RP6 原始数据与反馈表可读；四处并排公式已拆开；中文缺 Q1 提示 |
| Acids, bases and buffers／酸碱与缓冲 | open 全文 | open 全文 | 曲线、近似坐标、缓冲 mol 表及反馈已看；滴定式左侧浓度消失、Q4 pH 横溢已修；缺 Q1 提示 |
| Period 3／第三周期 | open 全文 | open 全文 | 分列反应、结构性质及模型边界、酸及阴离子表示、氯化物水解均已看；未发现需改源码的新问题；中文缺 Q1 提示 |
| Transition metals／过渡金属 | open 桌面及手机已看至页尾 | open 桌面及手机已看至页尾 | 桌面补看配位图、波长、EDTA、滴定及催化解析、练习和诊断；波长及滴定长数值式的修复后画面未复查；两语言均缺 Q1 提示 |
| Ions in solution／水溶液中的离子 | open 桌面及手机已看至页尾 | open 桌面及手机已看至页尾 | 水解平衡与模型边界、离子观察表、两步氨反应、碳酸根、RP9、EDTA、练习及诊断均已查看；手机旧截图多处长反应式右侧超出画面，后续状态待复查；表格横向操作未检验 |

## 问题与修复

已修源码见上方状态；构建纳入不代替修复后目检。本次补看只更新证据与待办，未改课程。

### 本次补看证据

使用 `readable-strips.py --subject chemistry --slug transition-metals --slug ions-in-solution` 生成条带后，实际逐张打开以下 35 张图片。目录为 `.playwright-mcp/a2-visual-full-2026-10-15/readable-strips/chemistry/`；下表文件前缀均为 `chemistry__`，后缀均为 `.jpg`。

| 实际补看视图 | 文件名主体及编号 | 张数 |
| --- | --- | ---: |
| 过渡金属英文桌面 | `transition-metals__en__desktop__legacy--01` 至 `--08` | 8 |
| 过渡金属中文桌面 | `transition-metals__zh__desktop__legacy--01` 至 `--07` | 7 |
| 离子反应英文桌面 | `ions-in-solution__en__desktop__legacy--01` 至 `--07` | 7 |
| 离子反应中文桌面 | `ions-in-solution__zh__desktop__legacy--01` 至 `--06` | 6 |
| 离子反应英文手机 | `ions-in-solution__en__mobile__legacy--01` 至 `--04` | 4 |
| 离子反应中文手机 | `ions-in-solution__zh__mobile__legacy--01` 至 `--03` | 3 |

离子反应旧手机画面中，少量 OH⁻／NH₃ 沉淀反应、铜与氨的两阶段反应及三价离子与碳酸根长式存在右侧不可见部分（英文手机 `--02`、中文手机 `--02` 为主要证据）。本次未继续核对这些式子的当前源码及修复后画面，不将旧画面问题当作当前源码仍有问题的结论。

两页的部分原始 fullPage 截图在练习／速查区叠印固定导航栏，例如离子反应英文桌面 `--06`、中文桌面 `--05`／`--06`。已看到页面末尾与页脚，但被导航遮住的局部仍需补截图；仅凭该叠印不判断实时网页必然存在遮挡缺陷。手机观察表初始画面只显示左侧列，本次未操作横向滚动。

### 需要主任务补充的截图

manifest 中部分 open 未全部打开：thermodynamics EN 17/19（图 1 替代描述、Q2 Hint），ZH 18/19（Q1 提示）；electrode-potentials ZH 13/14（Q1 提示）；acids-bases-and-buffers EN/ZH 17/18（Q1 Hint／提示）；period-3 ZH 13/14（Q1 提示）、transition-metals EN/ZH 17/18（Q1 Hint／提示）。两视口计数相同。现有 open 截图不能声称全部折叠内容完成目检。

## 检查边界

本轮是网页排版与展开内容的视觉检查，不等于重新认证全部外部来源、真实实验、完整屏幕阅读器或学生学习效果。未提交、推送或发布。

## 2026-10-16 最终截图续验 ledger（全部完成）

本节为重启恢复的实际目检边界，优先于旧轮待验状态。未用浏览器，未以 manifest 生成代替阅读。

正文目录：`.playwright-mcp/a2-final-2026-10-16/readable-strips/chemistry/`。下列均实际通过 view_image 阅读，前缀 `chemistry__`、后缀 `.jpg`，方法 `final-fullpage`：

| slug | en desktop | en mobile | zh desktop | zh mobile |
| --- | --- | --- | --- | --- |
| index | 01–02 | 01 | 01–02 | 01 |
| thermodynamics | 01–09 | 01–05 | 01–08 | 01–04 |
| electrode-potentials | 01–07 | 01–04 | 01–06 | 01–03 |
| acids-bases-and-buffers | 01–08 | 01–05 | 01–07 | 01–04 |
| period-3 | 01–07 | 01–04 | 01–06 | 01–03 |
| transition-metals | 01–08 | 01–05 | 01–07 | 01–04 |
| ions-in-solution | 01–07 | 01–04 | 01–06 | 01–03 |

已读 **140/140 张，28/28 视图**，正文剩余 **0**。入口与六课的中英文桌面、手机均已连续读到页脚，含方法、示范、真题、全部展开提示／解析／替代描述、独立练习、速查与错因反馈。旧缺口全部补看：热力学图 1 替代描述及 Q1/Q2 提示、电势中文 Q1、酸碱双语 Q1、第三周期中文 Q1、过渡金属双语 Q1。离子反应旧导航叠印区域已用最终正文截图读清；OH⁻／NH₃ 沉淀、铜与氨两阶段及三价离子与碳酸根反应的分行末项可读。旧“需要主任务补充的截图”列表不再是当前待办。

实际逐文件清单保存于 `.playwright-mcp/a2-final-2026-10-16/chemistry-reviewed-final.json` 的 `body.files`，与上述编号表一致。该清单记录已读行为，不以生成或文件存在替代目检。

### 主代理协助验收

按用户分工，31 张最新 `*__keyboard-right.png` 及 6 图的 12 张 `*__readable-fit-corners.jpg`／`*__readable-middle.jpg` 由主代理实际 view_image 阅读，本执行者未重复读取。证据及逐文件清单见 `.playwright-mcp/a2-final-2026-10-16/main-assisted-review.json`。主代理报告：31 处末列／公式末项可读，无错位或遮挡；滴定图 pH 坐标及 NaOH cm³、Born–Haber 箭头／物种／Step A/B、配合物楔线／虚线／4− 电荷可读。键盘到 max、Enter/Fit/4 倍四角及中部、Escape 焦点返回的操作与断言也由主代理执行，不计为本执行者操作。

### 新增确认问题与修复后边界

过渡金属中英手机的 Tollens 总式为过长行内公式，右侧 NH₃/H₂O 项超出正文画面。实际证据：`chemistry__transition-metals__en__mobile__final-fullpage--03.jpg`、`chemistry__transition-metals__zh__mobile__final-fullpage--02.jpg`。该行内式不在原 display 公式横向截图清单中，不能用原 31 处通过覆盖它。

已仅在 `alevel/a2-chemistry/transition-metals.md` 和 `zh/alevel/a2-chemistry/transition-metals.md` 将相同总式改为三行 aligned 显示公式：反应物、箭头与 RCOO⁻/Ag、NH₃/H₂O。物种、电荷、系数与稳定锚点未改变，无重构。除这两份课程文件与本记录，本次未修改其他课程或共享实现；保留其他执行者既有改动。

**最终闭合：主代理已实际 view_image 读完 `tollens-fixed-en-desktop.png`、`tollens-fixed-en-mobile.png`、`tollens-fixed-zh-desktop.png`、`tollens-fixed-zh-mobile.png` 四张精确公式图，三行反应物及 RCOO⁻／2Ag／4NH₃／2H₂O 均完整可读、无裁切，手机无需横移。** `tollens-fixed-check.json` 记录零 merror、无整页溢出。140 张正文清单与这四张修复后补图共同覆盖最终结果；四张补图的阅读归属主代理，本执行者未重复读取。全部正文、原待验展开项、右端、图像及新增修复后状态已闭合，无剩余或另需补拍区域。

技术检查：主代理反馈此次 Tollens 修改后再次构建通过（13.565 秒），CH03 与 90 页 heading 检查通过；双语桌面／手机 DOM 反应式完整、无 merror、无整页溢出。上述为主代理执行结果；修复后视觉另由上述四张定点图实读确认。主代理清理两处 trailing spaces，并反馈 diff --check 通过。未提交、推送或发布。外部来源、真实实验、完整屏幕阅读器和学生学习效果仍不属于本次视觉验收结论。
