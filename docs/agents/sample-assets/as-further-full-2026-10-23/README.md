# AS 高数最终验收证据

2026-10-23。本目录对应[全课程验收记录](../../implementation-as-further-full-upgrade-2026-10-23.md)。仅检验本地预览，不代表正式站已更新或学生已试用。

## 证据口径

- `browser-results.json`／`browser-measurements.csv`：42个中英文入口／学习页，1365／390px，light／dark；共168个视图。完整结果保留公式、坏图、局部溢出及脚本异常字段；截图为稳定加载后的位置，不是整页逐屏审查。
- `local-links.json`：本轮页面434个去重本地目标及片段的HTTP／静态目标检查；不认证所有外链、文件内容或每个旧片段的实际滚动位置。
- `targeted-results.json`：三个代表性旧书签的首次加载及同页连续跳转、真实搜索结果点击、量纲方括号；覆盖中英文和两种宽度。定位在额外700ms后复读，避免只捕获动画中途正确的一帧。
- `matrix-render-results.json`：两语言14个题干位置的实际矩阵行列数。源检查与MathJax错误节点不能单独发现Markdown吞掉行分隔符。
- `svg-readability.json`及四张`svg-contact-*.png`：13份旧图及2份新增冲量图在314／560px下的字体与标签包围盒检查、最终拼图；另经内容复审与实际页面加载检查。
- `source-manifest.json`：最终课页、图像、公式片段及检查脚本的SHA256；`sha256`绑定预览所用工作区原始字节，`git_sha256`绑定Git提交内字节，两者差异已核对仅为CRLF转LF。另列当前预览依赖的共享布局、样式与标准。独立内容报告中的较早哈希保留其原有时点，差异说明在总记录。

本轮曾发现局部公式过宽、量纲方括号解析、矩阵行分隔符及旧折叠笔记平滑滚动定位问题；最终结果是修复后复测。没有将最初的失败结果改称初次通过。

## 重跑

复用已安装的Node、Playwright和Chromium，不自动安装依赖。先在仓库根完成Jekyll构建及Pagefind索引，并启动本机预览；设置`PLAYWRIGHT_MODULE`为可导入的Playwright包路径，`CHROMIUM_PATH`为浏览器可执行文件。`ACADEMIC_ROOT`默认当前目录，`ACADEMIC_URL`默认`http://127.0.0.1:8832`（末尾不加斜杠）。

```powershell
node docs/agents/sample-assets/as-further-full-2026-10-23/browser-check.cjs
node docs/agents/sample-assets/as-further-full-2026-10-23/targeted-check.cjs
node docs/agents/sample-assets/as-further-full-2026-10-23/matrix-render-check.cjs
```

运行结果默认写入本目录的`runtime/`，也可用`ASFM_EVIDENCE_DIR`指定仓库外目录，避免覆盖本次保留证据。完整页面检查支持追加课页slug作定点重跑，例如`browser-check.cjs matrix-algebra`；局部重跑不代表全套再次通过。

没有真实学生试用、实体手机、计算器硬件流程、完整屏幕阅读器或完整WCAG符合性验收。截图支持阅读判断，不证明学习效果。
