# A2 Physics 全页视觉复核（2026-10-15）

状态：完成。正文与交互证据目检已补齐；速查手机长行公式已修并完成新截图复验。下文旧进展保留作为历史，最新边界见文末 ledger。范围为九对页面（18 页），桌面 1365 px 与手机 390 px，默认折叠与全部展开状态。入口无折叠。截图由主任务统一通过真实浏览器生成，清单见 `.playwright-mcp/a2-visual-full-2026-10-15/manifest.json`。

审阅方式：使用 `physics-review-sheets.py` 把截图分成原始像素、带 40 px 重叠的可读条带；桌面仅裁去左侧目录但另看完整入口截图，手机保留全宽。逐段查看正文、公式、图表和展开反馈，不以 DOM 检查代替目检。主任务提醒：全页截图中的固定导航位于捕获时滚动位置，不能把截图中途的导航覆盖误判为正文缺陷。

## 逐页进展

| 页面 | EN 桌面／手机 | ZH 桌面／手机 | 观察 |
| --- | --- | --- | --- |
| index | 已看默认态 | 已看默认态 | 课程范围、分段与条目清楚，中文入口完整目录可见；英文入口截图目录尚未展开，需主任务另核对初始化状态 |
| circular-motion | 默认正文及展开反馈已看；首个解释在 open 截图仍关闭，待补 | 默认正文与全部展开反馈已看 | 力图、公式及题目分段清晰；英文首块截图状态与 manifest 的 13/14 open 一致，暂不认定源问题 |
| simple-harmonic-motion | 展开正文与反馈已看；默认练习区已看；首个解释待补 | 展开正文与全部反馈、默认练习区已看 | 相位图、能量图、实验与练习结构清晰。手机实验比较表需要横向滚动；尚未核验横向操作。英文 open 为 16/17，首个解释内容未目检 |
| gravitational-fields-and-satellites | 展开正文与全部反馈、默认练习区已看 | 展开正文与全部反馈、默认练习区已看 | 轨道、场与势图、能量推导、速查表均清晰，无新增确凿源问题 |
| electric-fields | 展开正文与全部反馈、默认练习区已看 | 展开正文与练习反馈、默认练习区已看；首个解释待补 | 场线图、带电粒子路径、场与势图在手机与桌面均可读；中文 open 为 17/18，首个解释未目检 |
| capacitance | 待看 | 待看 | — |
| capacitor-charge-and-discharge | 待看 | 待看 | — |
| thermal-physics | 等待补齐连续截图 | 等待补齐连续截图 | 主任务确认最初 parts 存在截图高度与滚动步长不一致，不计为完整目检 |
| quick-reference | 等待补齐连续截图 | 等待补齐连续截图 | 同上 |

## 当前修改与限制

尚未修改课程正文或共享样式。浏览器交互、完整屏幕阅读器、学生试用与真实实验不由这些截图证明。
## 续查进展（本轮）

- Capacitance EN/ZH 的桌面、手机，关闭与全部展开 8 个全页截图已全部分段查看；未见新的正文截断、标题层级、公式失效或图示重叠。手机三列比较表使用横向容器，截图只显示左部，横向操作仍待主任务交互验证。
- 原始截图英文段落普遍呈粗衬线字体，而 Markdown 只有局部 strong。是否站点用户字体偏好或共享样式仍待根任务确认，未认定为物理页面源错误。
- 待补的默认 open 详情：circular-motion EN 首个 `Check your explanation`，simple-harmonic-motion EN 首个 `Check your explanation`，electric-fields ZH 首个 `核对你的解释`；它们的 open 截图实际分别仅 13/14、16/17、17/18。
- 新热学 ZH 连续截图已接收，接下来查看；未先行标记完成。

## 2026-10-16 最终截图续验 ledger（完成）

仅将实际调用 view_image 阅读的图计入；生成完成、manifest 完整和键盘断言不等于目检通过。沿用上文已读旧证据，不重复计数。

新证据根目录：`.playwright-mcp/a2-final-2026-10-16/`，条带位于 `readable-strips/physics/`。以下范围中的每一张已实际阅读（101 张）：

| 文件名前缀（均为 physics__） | 已读编号 | 内容边界 |
| --- | --- | --- |
| capacitor-charge-and-discharge__en__desktop__final-fullpage | 01–10 | 全正文、20 个展开提示/解答、来源及页脚 |
| capacitor-charge-and-discharge__en__mobile__final-fullpage | 01–05 | 同上 |
| capacitor-charge-and-discharge__zh__desktop__final-fullpage | 01–10 | 同上 |
| capacitor-charge-and-discharge__zh__mobile__final-fullpage | 01–04 | 同上 |
| circular-motion__en__desktop/mobile__final-fullpage | 各 01 | 补首个展开解释 |
| electric-fields__zh__desktop/mobile__final-fullpage | 各 01 | 补首个展开解释 |
| thermal-physics__en__desktop__final-clip | 01–14 | 全正文、RP8/RP9 数据分析、全部展开反馈及页脚 |
| thermal-physics__en__mobile__final-clip | 01–07 | 同上；长公式右端待读交互截图 |
| thermal-physics__zh__desktop__final-clip | 01–13 | 全正文及页脚 |
| thermal-physics__zh__mobile__final-clip | 01–06 | 全正文及页脚；长公式右端待读交互截图 |
| quick-reference__en__desktop__final-fullpage | 01–09 | 全正文、例题、比较表及页脚 |
| quick-reference__en__mobile__final-fullpage | 01–05 | 全正文、例题及页脚；表格末列另读 keyboard-right |
| quick-reference__zh__desktop__final-clip | 01–08 | 全正文、例题、比较表及页脚 |
| quick-reference__zh__mobile__final-clip | 01–04 | 同上；表格末列另读 keyboard-right |
| simple-harmonic-motion__en__desktop/mobile__final-clip | 各 01 | 补首个展开解释；清楚说明振动本身不足以证明 SHM |

### 最终已看边界与分工

- 上表 101 张原像素条带均由本执行者实际调用 `view_image` 阅读。结合历史已读证据，九对页面（18 页）的正文、首提示、全部展开反馈与页尾旧缺口已补齐。没有把仅生成的截图计为已看。
- 另实际读 `physics__index__en__desktop.png`：Contents 已初始化，四项章节目录、学习入口、课程范围及页脚完整；解除旧英文入口待验项。
- 实际读完全部 19 张最新 `*__keyboard-right.png`：capacitance EN table 0/1、ZH table 0；quick-reference EN/ZH table 0/2/3/4/6；simple-harmonic-motion EN/ZH table 2；thermal-physics EN/ZH math 50/54。末列条件、公式及单位均可见，无导航叠印。热学窄屏长显示公式属于横移容器，右端已读，不认定裁切缺陷。键盘 ArrowRight 到 max 的实际操作断言由主代理执行，本执行者阅读结果截图。
- 图像放大由主代理接手：主代理于 2026-10-16 回报实际看完 36 图的 72 张 readable-fit-corners/readable-middle 合图，无新问题，包含 SHM 相位／能量／恢复力及 thermal 300 J 符号。此结论归属主代理，本执行者未读这些合图（0 张），不冒领独立验收。Enter/Fit/4 倍四角/Escape 焦点返回亦由主代理执行。
- 逐文件实际证据清单保存在 `.playwright-mcp/a2-final-2026-10-16/physics-executor-reviewed.json`，列出 101 条带、1 张入口及 19 张右端；历史已读证据仍以上文记录为准。

### 确认的问题、修复与新截图复验

速查手机截图的卫星、库仑力、磁通链、变压器、速度选择器例题存在长行内计算链越出引用卡并被裁掉。区别于已验的横移表格／显示公式：这些是 `$...$` 行内式，`style.css` 保持其 overflow visible，而引用卡 `subject.css` 为 overflow hidden，没有相应横移容器；19 张右端截图不能证明这些行内计算链可达。

仅修改 `alevel/a2-physics/quick-reference.md`（211–212、243–244、460、519–520、625 行）及 `zh/alevel/a2-physics/quick-reference.md`（230–231、265–266、504、567–568、676 行），各 8 条计算链，按等号／推出号用 `<br>` 分成较短行内式。保留题干、表达式、数值、答案、单位与锚点；未改共享 CSS，也未重构。

本执行者运行 `node scripts/test-physics-bilingual.js` 通过（9 对页的公式、英文题干、锚点、折叠、图片、链接及导航）；`git diff --check` 通过。主代理随后确认新构建成功（15.318 秒），并重新运行 physics-bilingual 与 90 页 heading 检查通过。未在分科范围外修改共享样式或检查脚本。

主代理重建后生成并实际调用 `view_image` 看完 20 张定点图：五卡 × EN/ZH × 桌面/390 px 手机；确认公式末项、单位及结果完整。证据为 `quick-reference-fixed-check.json` 与 `quick-reference-fixed-{en,zh}-{desktop,mobile}-card-{2,3,5,6,9}.png`；20 卡 mjx 边界断言零失败。本执行者另实际读取上述 10 张 mobile 卡，最长根式／分式与结果均完整，无新增问题。桌面 10 张的新视觉结论归属主代理，不计入本执行者独立已读数。

分科 ledger 已追加新拍 10 张手机卡的独立已看清单，以及主代理 20 张实读记录。本执行者本轮实际阅读合计 131 张图片（101 条带、1 入口、19 右端、10 修复后手机卡）；主代理图像合图 72 张与修复定点 20 张分开记账，不混同。

**剩余项：无本次约定范围内的待补正文、提示、入口、末列或定点修复截图。**学生试用、屏幕阅读器与实际实验不在本次证据范围；不以视觉验收推断学习效果。未使用浏览器、未提交、未推送。
