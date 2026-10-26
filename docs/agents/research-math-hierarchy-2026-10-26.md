# 数学导航层次研究：保留纯数 URL，分离学科与单元

日期：2026-10-26。研究快照：`c7214ff9e522e531abdf19ad10bd4fcbf0db20cf` 的当前工作区。范围仅限导航机制、入口身份、双语与关联检查；本次唯一写入文件是本记录。正文仍在制作，**待正文完成、FM04 内容验收后，由主流程实施导航调整**；本文不是实施或课程验收记录。

## 1. 结论与最小实施边界

**推荐保留 `/alevel/a2-mathematics/` 的 MA03 纯数课程身份、`/alevel/a2-further-mathematics/` 的 FM03 高等纯数课程身份及对应中文 URL；新增真实学科总览 hub，显式呈现“学科 → 并列单元 → 课题”。物理路径无需迁移。** 两个根入口的标题、范围和学习路线确实都是纯数，不能只把面包屑文字改成 Mathematics / Further Mathematics，却继续让“学科”链接指向纯数课程。[普通纯数入口:2–16](../../alevel/a2-mathematics/index.md#L2-L16)、[高等纯数入口:2–34](../../alevel/a2-further-mathematics/index.md#L2-L34)。

建议候选 hub：

| 逻辑学科入口 | 建议新增英文 URL | 建议新增中文 URL |
| --- | --- | --- |
| A2 Mathematics / A2 数学 | `/alevel/a2-mathematics-overview/` | `/zh/alevel/a2-mathematics-overview/` |
| A2 Further Mathematics / A2 高等数学 | `/alevel/a2-further-mathematics-overview/` | `/zh/alevel/a2-further-mathematics-overview/` |

这四个是**建议新增、尚不存在的 URL**：当前课程文件、permalink / redirect 与导航检索未发现占用；实施前重新检查冲突。不要使用 `/alevel/mathematics/`，它已经是 AS 数学的兼容重定向；`/alevel/a2mathematics/` 同样已属于现有 MA03 入口的兼容地址。[AS 数学 frontmatter:8–12](../../alevel/as-mathematics/index.md#L8-L12)、[MA03 frontmatter:7–13](../../alevel/a2-mathematics/index.md#L7-L13)。

```text
A-Level
├─ A2 Mathematics                      新 hub
│  ├─ Pure Mathematics · MA03           旧 /alevel/a2-mathematics/
│  │  └─ lesson                        旧课题 URL
│  ├─ Statistics · MA04                 旧 /alevel/a2-mathematics/statistics/
│  │  └─ lesson                        旧课题 URL
│  └─ Mechanics · MA05                  旧 /alevel/a2-mathematics/mechanics/
│     └─ lesson                        旧课题 URL
└─ A2 Further Mathematics              新 hub
   ├─ Further Pure · FM03               旧 /alevel/a2-further-mathematics/
   │  └─ lesson                        旧课题 URL
   ├─ Further Statistics · FM04         旧 /alevel/a2-further-mathematics/statistics/
   │  └─ available lesson(s)            仅按实施时已验收范围列出
   └─ Further Mechanics · FM05          未提供课程；说明状态，无课程链接
```

上图是**建议的逻辑导航**，不是拟议的目录移动。普通统计与力学作为并列单元已有独立入口；FM04 当前入口明确说明只有一篇样章。现有 fm04 范围声明必须随正文实际验收更新，不能因目录层次整理就称完整课程。[MA04 路线:13–29](../../alevel/a2-mathematics/statistics.md#L13-L29)、[MA05 路线:13–47](../../alevel/a2-mathematics/mechanics.md#L13-L47)、[FM04 状态:14–32](../../alevel/a2-further-mathematics/statistics/index.md#L14-L32)。

当前两个 A2 Further 课程目录均未发现 mechanics / FM05 学习页或入口。`alevel/fx-cg50/further-mechanics/index.md` 是计算器扩展指南，`cg50_stage: further`，不能充当 FM05 课程；考试记录和 PDF 也不构成课程。[计算器力学入口:2–10](../../alevel/fx-cg50/further-mechanics/index.md#L2-L10)。hub 可以说明“FM05：课程待制作 / course not yet available”，但不要创建可点击的空课程、虚假的完成徽章或指向 MA05 / 计算器指南的 FM05 链接。

## 2. 当前机制：三个来源并未表达同一层次

### 2.1 首页与 A-Level 目录：并列卡片，尚无 A2 学科 hub

- `/` 与 `/zh/` 使用 `layout: index`；`/alevel/` 与 `/zh/alevel/` 使用 `layout: level`、`level: alevel`。[首页](../../index.markdown#L1-L6)、[中文首页](../../zh/index.markdown#L1-L8)、[A-Level](../../alevel/index.md#L1-L8)、[中文 A-Level](../../zh/alevel/index.md#L1-L11)。
- 两个布局都按 `AS,A2,Tools` 分组，读取同一 `_data/subjects.yml`，再调用同一 `subject_card.html`。首页保留 `#as-courses`、`#a2-courses`、`#igcse-courses`；A-Level 目录还有 `#tools-courses`。[首页布局:25–53](../../_layouts/index.html#L25-L53)、[目录布局:24–41](../../_layouts/level.html#L24-L41)。
- A2 普通数学已有 **Pure、Mechanics、Statistics 三张并列卡片**；高数只有 Further Pure 卡片，没有 FM04、FM05 卡片，也没有学科总览卡片。因此“全部数学在首页都被嵌在纯数下”不符合现状；问题主要出现在 URL 推导的面包屑，FM04 还有发现路径与搜索分类缺口。[subjects:14–45](../../_data/subjects.yml#L14-L45)。
- 英文 mechanics / statistics 卡片路径没有尾斜线；中文卡片先规范化尾斜线，再找 `translation_of` 对应页，已有中文译页时返回其 URL。卡片本身用 `name_zh`，不显示 description。不要无意中改变测试锁定的 URL 字符串。[卡片:1–18](../../_includes/subject_card.html#L1-L18)、[目的地快照:21–62](../../scripts/test-frontend-ux.js#L21-L62)。
- 普通纯数入口底部把 MA04、MA05 称为“其他 A2 数学单元”；FM03 入口的主路线仍只列纯数课题，未列 FM04。FM04 页面当前有回 FM03 的链接；不能据此认为已经存在统一的 A2 Further 课程总入口。[MA03:292–294](../../alevel/a2-mathematics/index.md#L292-L294)、[中文 MA03:291–293](../../zh/alevel/a2-mathematics/index.md#L291-L293)、[FM03:15–40](../../alevel/a2-further-mathematics/index.md#L15-L40)、[FM04:14–18](../../alevel/a2-further-mathematics/statistics/index.md#L14-L18)。

### 2.2 面包屑：按 URL 分段，纯数标签写死在目录段映射中

仓库只有一个实际 include 调用点：`_layouts/subjects.html:37`，形式为 `{% include breadcrumb.html skip_parent=page.breadcrumb_skip_parent %}`；所有使用 `subjects` 布局的页面都经此调用。首页与 level 布局不调用它。[subjects 布局:31–54](../../_layouts/subjects.html#L31-L54)。

当前算法：

1. `ui` 按 `page.lang` 选择，缺省英文；首页标签和链接单独输出。[breadcrumb:3–18](../../_includes/breadcrumb.html#L3-L18)。
2. 有 `cg50_stage` 时走计算器专用分支，直接输出 A-Level、指南、阶段与当前标题；不走普通分段、`skip_parent` 或 m2 特例。[breadcrumb:20–32](../../_includes/breadcrumb.html#L20-L32)。
3. 普通分支使用 `page.translation_of | default: page.url | split: '/'`，所以中文页面通常也是拆英文规范 URL，而不是中文物理路径。跳过空段、`index` 和等于 `include.skip_parent` 的段。[breadcrumb:33–36](../../_includes/breadcrumb.html#L33-L36)。
4. 另有特例：当段是 `a2-mathematics` 且 `page.subject == 'm2'`，不输出该父级。这只覆盖 MA05，不覆盖 `s2` 或 FM04。[breadcrumb:37](../../_includes/breadcrumb.html#L37)。
5. 当前页取 `page.title`；中间段 `a2-mathematics` 固定为 `ui.pure_mathematics`，`a2-further-mathematics` 固定为 `ui.further_pure_mathematics`。它们不读取 subjects 卡片名称，也不依据统计内容自动调整。[breadcrumb:38–57](../../_includes/breadcrumb.html#L38-L57)。
6. `mechanics` 有专门映射，始终指向普通 MA05 的 URL；将来不能直接让 FM05 复用这个词段映射，否则会串到普通数学。[breadcrumb:72–73](../../_includes/breadcrumb.html#L72-L73)。
7. `statistics` 没有专门映射：默认根据原 crumbs 的位置拼接路径；存在 `site.pages` 才生成链接，标签仅由路径段转换为 `Statistics`，不用目标页标题，也没有中文标签。不存在的中间页输出 span，不伪造链接。[breadcrumb:76–84](../../_includes/breadcrumb.html#L76-L84)。

对应 UI 字典目前只有两个纯数标签：英文 `A2 Pure Mathematics`、`A2 Further Pure Mathematics`；中文 `A2 纯数学`、`A2 高等纯数学`。改变卡片名称不能改变它们；把这两个键全局改为学科名称则会错误改变纯数课题的单元标签。[UI:15–16](../../_data/ui.yml#L15-L16)、[中文 UI:131–132](../../_data/ui.yml#L131-L132)。

### 2.3 `skip_parent` 必须保留的具体语义与调用者

`skip_parent` 是**单个路径段字符串的相等比较**，不是 URL、列表、父级替换或逻辑树配置。它只禁止输出匹配项，不会从 `crumbs` 删除该段，也不会重算循环位置或后续路径；默认 fallback 的 URL 仍包含被跳过的物理段。当前页依据原循环的 `forloop.last` 决定；不能把当前页词段也列为 skip，更不能用“去掉所有父级”的列表替换而不检查行为。[breadcrumb:33–40](../../_includes/breadcrumb.html#L33-L40)、[fallback:77–83](../../_includes/breadcrumb.html#L77-L83)。

完整直接调用链：

| 文件 | 现有职责 | 后续约束 |
| --- | --- | --- |
| [_layouts/subjects.html:37](../../_layouts/subjects.html#L37) | 传入 `page.breadcrumb_skip_parent` | 保留现有 include 形式与参数，新增数学分支不要求改全站调用者 |
| [admissions/tmua-esat/index.html:2–10](../../admissions/tmua-esat/index.html#L2-L10) | `breadcrumb_skip_parent: admissions` | 保留 Home → 当前 TMUA 页，不引入 admissions 父级 |
| [scripts/import-tmua-notes.js:82–91](../../scripts/import-tmua-notes.js#L82-L91) | 生成相同 frontmatter | 不能只改生成结果却丢掉生成器契约；本方案不需要改它 |
| [scripts/test-tmua-presentation.js:10–17](../../scripts/test-tmua-presentation.js#L10-L17) | 精确断言 include 的旧调用字符串，保护原正文 | 若重写调用行会直接失败；推荐保留而不是无故改测试 |

当前数学页面没有设置 `breadcrumb_skip_parent`；MA05 的去父级行为来自模板内 m2 特例。只在两篇 FM04 页面添加 skip 可以隐藏“高等纯数”，但既不创建真实学科父级，也不修复 MA04、搜索和后续新增课题，不能作为最终解决方案。

## 3. 当前路径、标题与可见 breadcrumb 核验

以下列出源码确定的行为，并读取现存 `_site` HTML 交叉核对标签和 href。现存示例 HTML 的写入时间约为 **2026-10-26 03:34 UTC**；本轮没有重新构建，不能把该产物当作正在制作正文的最新验收。`T` 表示当前页 `page.title`、无链接；省略共同的 Home → A-Level。

| 当前英文 URL | 当前 breadcrumb | 结论 |
| --- | --- | --- |
| `/alevel/a2-mathematics/` | T = A2 Pure Mathematics | 根页确为 MA03 课程，不是全学科 hub |
| `/alevel/a2-mathematics/functions/` 等纯数课题 | A2 Pure Mathematics → T | 原纯数单元父级应保留 |
| `/alevel/a2-mathematics/statistics/` | A2 Pure Mathematics → T = A2 Mathematics · Statistics | MA04 被表述为纯数子级 |
| `/alevel/a2-mathematics/statistics/poisson-distribution/` | A2 Pure Mathematics → Statistics → T | 同上，Statistics 链接到正确 MA04 入口 |
| `/alevel/a2-mathematics/mechanics/` | T = A2 Mechanics | m2 特例使其目前没有纯数父级，也没有数学学科父级 |
| `/alevel/a2-mathematics/mechanics/mathematical-modelling/` | A2 Mechanics → T | 物理路径仍含 a2-mathematics，显示层跳过了它 |
| `/alevel/a2-further-mathematics/` | T = A2 Further Pure Mathematics | 根页确为 FM03 课程 |
| `/alevel/a2-further-mathematics/roots-and-polynomials/` 等纯数课题 | A2 Further Pure Mathematics → T | 原高等纯数单元父级应保留 |
| `/alevel/a2-further-mathematics/statistics/` | A2 Further Pure Mathematics → T = A2 Further Statistics: starting route | FM04 被表述为高等纯数子级 |
| `/alevel/a2-further-mathematics/statistics/moment-generating-functions/` | A2 Further Pure Mathematics → Statistics → T | Statistics 链接到 FM04，不会串 MA04，但上级身份错误 |

来源：[breadcrumb:33–84](../../_includes/breadcrumb.html#L33-L84)、[MA03 frontmatter](../../alevel/a2-mathematics/index.md#L1-L14)、[MA04 frontmatter](../../alevel/a2-mathematics/statistics.md#L1-L11)、[MA05 frontmatter](../../alevel/a2-mathematics/mechanics.md#L1-L11)、[FM03 frontmatter](../../alevel/a2-further-mathematics/index.md#L1-L11)、[FM04 frontmatter](../../alevel/a2-further-mathematics/statistics/index.md#L1-L12)、[MGF frontmatter](../../alevel/a2-further-mathematics/statistics/moment-generating-functions.md#L1-L15)。

中文静态 HTML 另有两个必须区别于运行后行为的细节：

- Home 指向 `/zh/`，纯数与 mechanics 专门映射也带 `/zh`；但 A-Level 链接静态仍是 `/alevel/`。[breadcrumb:8](../../_includes/breadcrumb.html#L8)、[47–73](../../_includes/breadcrumb.html#L47-L73)。
- MA04、FM04 中文课题页的 `Statistics` 仍是英文，静态 href 指向各自**英文** statistics 入口，因为 fallback 使用 `translation_of` 的英文 crumbs。语言脚本随后会把已配对链接改成中文路径，但不翻译这个没有 `data-ui` 的文字；无 JavaScript 时仍是英文链接。[fallback:77–83](../../_includes/breadcrumb.html#L77-L83)、[语言脚本:26–35、45–58](../../assets/js/site-language.js#L26-L58)。

因此后续显式数学 breadcrumb 应直接输出本语言的 hub / 单元链接及标签，保留语言脚本的增强行为；不能只观察运行后的 href 就称静态中文导航已正确。

## 4. 数学入口 frontmatter 完整清单

下表记录已读取的全部课程类数学 index frontmatter，以及实际作为 index 使用的 `statistics.md`、`mechanics.md`。`/zh` 配对表示中文 `lang: zh-CN`、`translation_of: 英文规范 URL`、独立中文 permalink；英文多数不声明 lang，由布局缺省 en。

| 入口源文件（中英文分别读取） | 当前标题 EN / 中文 | `subject` / `grade` | 其他导航字段 |
| --- | --- | --- | --- |
| [IG index:1–8](../../igcse/mathematics/index.md#L1-L8)；[中文:1–11](../../zh/igcse/mathematics/index.md#L1-L11) | IG Mathematics / IGCSE 数学 | `igcse-mathematics` / `igcse` | `/igcse/mathematics/` 与 /zh 配对；中文是英文笔记主题目录，不是整课汉化 |
| [AS 数学:1–13](../../alevel/as-mathematics/index.md#L1-L13)；[中文:1–12](../../zh/alevel/as-mathematics/index.md#L1-L12) | AS Mathematics / AS 数学 | `as-mathematics` / `as` | `/alevel/as-mathematics/`；reading；TOC 含 pure、statistics、mechanics；旧 `/alevel/mathematics/` 重定向 |
| [AS 高数:1–13](../../alevel/as-further-mathematics/index.md#L1-L13)；[中文:1–12](../../zh/alevel/as-further-mathematics/index.md#L1-L12) | AS Further Mathematics / AS 高等数学 | `as-further-mathematics` / `as` | `/alevel/as-further-mathematics/`；reading；TOC 含 route-a/b/s/m；旧 `/alevel/asfm/` 重定向 |
| [MA03:1–14](../../alevel/a2-mathematics/index.md#L1-L14)；[中文:1–13](../../zh/alevel/a2-mathematics/index.md#L1-L13) | A2 Pure Mathematics / A2 纯数学 | `a2-mathematics` / `a2` | `/alevel/a2-mathematics/`；study、reading；显式主题 TOC；旧 a2mathematics 重定向 |
| [MA04:1–11](../../alevel/a2-mathematics/statistics.md#L1-L11)；[中文:1–13](../../zh/alevel/a2-mathematics/statistics.md#L1-L13) | A2 Mathematics · Statistics / A2 数学 · 统计学 | `s2` / `a2` | `/alevel/a2-mathematics/statistics/`；study、reading；显式路线与回顾 TOC |
| [MA05:1–11](../../alevel/a2-mathematics/mechanics.md#L1-L11)；[中文:1–13](../../zh/alevel/a2-mathematics/mechanics.md#L1-L13) | A2 Mechanics / A2 力学 | `m2` / `a2` | `/alevel/a2-mathematics/mechanics/`；study、reading；`toc_headings: h2` |
| [FM03:1–11](../../alevel/a2-further-mathematics/index.md#L1-L11)；[中文:1–13](../../zh/alevel/a2-further-mathematics/index.md#L1-L13) | A2 Further Pure Mathematics / A2 高等纯数学 | `a2-further-mathematics` / `a2` | `/alevel/a2-further-mathematics/`；study、reading；start-here/course-outline/mixed-review/later-review |
| [FM04:1–12](../../alevel/a2-further-mathematics/statistics/index.md#L1-L12)；[中文:1–13](../../zh/alevel/a2-further-mathematics/statistics/index.md#L1-L13) | A2 Further Statistics: starting route / A2 高等统计：起步学习路线 | **仍是 `a2-further-mathematics`** / `a2` | `/alevel/a2-further-mathematics/statistics/`；英文显式 en；study、reading；h2；不能仅凭 subject 区分 FM03/FM04 |

以上都使用 `layout: subjects`、`mathjax: true`。AS 已经在各自入口中并列组织纯数、统计、力学，不需要为此次 A2 问题重构 AS 课程。[AS 数学:23–56](../../alevel/as-mathematics/index.md#L23-L56)、[AS 高数:23–55](../../alevel/as-further-mathematics/index.md#L23-L55)。

计算器数学相关 index 也全部读取；它们是独立导航分支，不应混入 A2 学科单元树：

| 源文件（均在 `alevel/fx-cg50/`） | 关键 frontmatter / 身份 |
| --- | --- |
| [index.md:1–11](../../alevel/fx-cg50/index.md#L1-L11) | 中文学习路线；`subjects`、`lang: zh-CN`、study；`cg50_stage: overview` |
| [beginner/index.md:1–11](../../alevel/fx-cg50/beginner/index.md#L1-L11) | 中文初学指南；相同公共字段；stage beginner |
| [advanced/index.md:1–12](../../alevel/fx-cg50/advanced/index.md#L1-L12) | 中文进阶指南；stage advanced、part mathematics |
| [advanced/mechanics/index.md:1–12](../../alevel/fx-cg50/advanced/mechanics/index.md#L1-L12) | 中文进阶力学；stage advanced、part mechanics |
| [further-mathematics/index.md:1–11](../../alevel/fx-cg50/further-mathematics/index.md#L1-L11) | 中文复数、矩阵与向量操作；stage further |
| [further-mathematics/numerical-calculus/index.md:1–11](../../alevel/fx-cg50/further-mathematics/numerical-calculus/index.md#L1-L11) | 中文数值方法与微积分操作；stage further |
| [further-mechanics/index.md:1–11](../../alevel/fx-cg50/further-mechanics/index.md#L1-L11) | 中文力学扩展；stage further；不是 FM05 正文 |
| [mathematics/index.md:1–8](../../alevel/fx-cg50/mathematics/index.md#L1-L8) | `layout: null`、`sitemap: false`；旧 URL → `/alevel/fx-cg50/advanced/#mathematics-units` |
| [mathematics/ma01/index.md:1–8](../../alevel/fx-cg50/mathematics/ma01/index.md#L1-L8)；[ma02:1–8](../../alevel/fx-cg50/mathematics/ma02/index.md#L1-L8)；[ma03:1–8](../../alevel/fx-cg50/mathematics/ma03/index.md#L1-L8)；[ma04:1–8](../../alevel/fx-cg50/mathematics/ma04/index.md#L1-L8) | 同为 null / sitemap false；各自旧 permalink 保留，redirect_target → advanced 的 #ma01 / #ma02 / #ma03 / #ma04 |
| [mathematics/ma05/index.md:1–8](../../alevel/fx-cg50/mathematics/ma05/index.md#L1-L8) | 同为兼容页；目标 `/alevel/fx-cg50/advanced/mechanics/` |

这七个实际指南 index 均有自己的标题、permalink 和 h2,h3 TOC；六个兼容 index 使用 `redirect_target` 并包含旧数学跳转模板，不经 subjects breadcrumb。没有发现对应 `/zh/alevel/fx-cg50/` 译页配对，不能为中文单语指南伪造英文版本。[语言测试:171–174](../../scripts/test-site-language.js#L171-L174)。

## 5. 搜索与双语是直接依赖，不能遗漏

`_data/subjects.yml` 同时供卡片和搜索使用。`search_metadata.html` 将 `translation_of` 或当前 URL 规范化，选择**最长匹配路径**的 subject.name / name_zh。普通统计、力学因已有更长记录而分类正确；FM04 没有独立记录，只能继承 `A2 Further Math - Pure / A2 高等数学 · 纯数学`。现存 `_site` 的 FM04 入口和 MGF 页面确实输出这个 Pagefind section。[搜索分类:1–13](../../_includes/search_metadata.html#L1-L13)、[subjects:14–45](../../_data/subjects.yml#L14-L45)。

该 section 同时用于 HTML 的 Pagefind meta 和 fallback JSON；只改一个搜索出口会导致两套分类不一致。[head:34–39](../../_includes/head.html#L34-L39)、[assets/search.json:6–17](../../assets/search.json#L6-L17)。未来增加 hub / FM04 展示记录时，保留纯数、普通统计、力学的具体分类；不能把纯数记录的 path/name 改成 hub 后，让所有旧课题又落入错误分类。

双语契约：

- 通过 `translation_of` 建立实际页面配对；head 输出全站 pairs 与 alternate，nav 输出无 JavaScript 语言链接。[head:19–48](../../_includes/head.html#L19-L48)、[nav:7–10、47–49](../../_includes/nav.html#L7-L49)。
- `site-language.js` 规范化尾斜线 / index.html、保留 query 与 hash，按配对改写链接；明确 `hreflang`、download、data-language-explicit 的链接不改写；显式课程 URL 决定内容语言。[site-language:14–35](../../assets/js/site-language.js#L14-L35)、[54–78](../../assets/js/site-language.js#L54-L78)。
- 原 nav 语言链接点击也保留 hash。[nav:87–94](../../_includes/nav.html#L87-L94)。新增两个 hub 必须各有真实中英文页、相同稳定锚点；不能用修改现有页面 `translation_of` 的方式伪装新父级。
- `pure_mathematics`、`further_pure_mathematics` 继续代表单元；学科 hub 与 Statistics / Further Statistics 应有独立双语标签，英文与中文 UI 键集合保持一致。[UI:15–16](../../_data/ui.yml#L15-L16)、[中文 UI:131–132](../../_data/ui.yml#L131-L132)、[键对齐测试:161](../../scripts/test-site-language.js#L161)。

## 6. 最小方案比较与推荐

| 方案 | 改动面与结果 | 判断 |
| --- | --- | --- |
| A：仅跳过错误纯数父级，再补 statistics 标签 | 可在 breadcrumb 按数学家族和单元定位，覆盖 MA04/FM04，保留 m2；旧 URL 不动。但没有真实学科父级，首页与搜索缺口仍需处理 | 可作临时修正，不满足最终学科层次目标 |
| B：新增真实 hub，数学专用逻辑 breadcrumb，旧单元 URL 全保留 | 新增四个双语 hub 页面；在公共 include 中集中映射两个学科与现有单元，其他页面保持旧分支；首页/目录表达学科分组，FM04 搜索分类同步修正 | **推荐；最小且完整地满足本次要求** |
| C：将旧根入口改成学科 hub，纯数搬到 /pure/，或只改父级文字 | 搬正文需迁移入口锚点、旧链接和测试；只改名却仍指向纯数则虚构学科入口 | 不推荐，与已接受的纯数根身份相冲突 |

方案 B 的实施边界：

1. 新 hub 只做范围明确的课程总览，提供并列单元、已验收起点及实际状态；复用共享布局，不复制纯数正文、综合题或旧锚点。
2. 在 `breadcrumb.html` 的计算器分支之后、普通 fallback 之前，对已知 A2 数学家族输出显式逻辑层次。FM04 要按完整规范路径定位，不能只看其目前与 FM03 相同的 subject；索引页以单元标题结束，课题页再链接所属单元；hub 页以学科标题结束。保留旧 `skip_parent` 调用、其他学科映射及“不存在父级不链接”的 fallback。
3. 示例目标：`Home → A-Level → A2 Mathematics(hub) → A2 Pure Mathematics(旧根) → Functions`；`Home → A-Level → A2 Mathematics(hub) → Statistics(MA04入口) → Poisson…`；`Home → A-Level → A2 Further Mathematics(hub) → Further Statistics(FM04入口) → MGF…`。纯数页链接仍用原纯数标签，不把这个节点冒充学科。
4. 首页与 A-Level 目录复用同一学科分组呈现：学科标题链接真实 hub，纯数/统计/力学为并列单元入口；保留现有阶段锚点。最小兼容做法是保留现有 unit 记录和深层目的地，在 A2 卡片区上方建立学科分组，补一条**准确标明实际范围**的 FM04 记录。不要为了少几行模板而把旧 Pure 记录改名并改 path，导致搜索分类和旧卡片承诺混在一起。
5. FM04 独立 subject 数据记录会同时增加卡片和修正最长路径搜索分类；因此卡片数量、顺序断言要按最终设计有意更新。若最后决定首页仅保留两个学科总卡片，则必须另行保留 unit 搜索分类来源，明确拆开展示与分类职责；这是比保留分组单元卡片更大的选项，不是本次默认。
6. 可在各单元入口添加同语言“全部 A2 数学 / 高数单元”返回 hub 链接；已有学习路线、next/previous、回补、参考入口、题目与稳定锚点保持。当前大量页面无需逐篇新增 breadcrumb frontmatter，不引入全站导航树或课程完成度系统。

## 7. 直接调用者与受影响页面清单

| 调用/数据面 | 必须覆盖的文件或页面 | 最小处理 |
| --- | --- | --- |
| 公共 breadcrumb | `_includes/breadcrumb.html`；唯一调用 `_layouts/subjects.html:37` | 集中处理数学逻辑层次；调用行保持 |
| 标签 | `_data/ui.yml` 的 en 与 zh-CN | 新学科/统计标签与旧纯数标签区分 |
| 发现路径 | `_data/subjects.yml`、`_includes/subject_card.html`、`_layouts/index.html`、`_layouts/level.html` | 两个页面布局保持同源；仅按需要增加数学分组，不改卡片通用语义 |
| 首页/目录实体 | `index.markdown`、`zh/index.markdown`、`alevel/index.md`、`zh/alevel/index.md` | 通过布局生效；一般不需改 frontmatter |
| 新学科 hub | 新建两组 en / zh-CN 页面，明确 permalink 与 translation_of | 四页；不碰旧纯数根身份 |
| MA03 | `alevel/a2-mathematics/index.md`、15 个直接课题、`quick-reference.md`，以及全部对应 zh 页面 | 17 对页面会经过同一数学分支；内容通常无需改。参考 [现有双语枚举:13–18](../../scripts/test-bilingual.js#L13-L18) |
| MA04 | `statistics.md`；statistics 下 `poisson-distribution`、`continuous-random-variables`、`exponential-distribution`、`normal-distribution`、`estimation`、`hypothesis-testing`、`mean-tests`；全部对应 zh 页面 | 8 对；移除“纯数父级”并补真实学科父级。[枚举:6–7、34–39](../../scripts/test-ma04-content.js#L6-L39) |
| MA05 | `mechanics.md`；mechanics 下 `mathematical-modelling`、`vectors-and-kinematics`、`forces-equilibrium-and-friction`、`moments-and-rigid-objects`、`centres-of-mass`、`momentum-bridge`、`newtons-laws-of-motion`、`projectiles`、`work-and-energy`、`uniform-circular-motion`、`quick-reference`；全部对应 zh 页面 | 12 对；现有 m2 特例行为由新数学分支完整接管或保留，不退回纯数父级。[入口:1–13](../../alevel/a2-mathematics/mechanics.md#L1-L13)、[测试自动枚举:7–8、17–23](../../scripts/test-mechanics-bilingual.js#L7-L23) |
| FM03 | `alevel/a2-further-mathematics/index.md` 与16个直接纯数课题及 zh 对应页 | 17 对；保留 Further Pure 单元节点。[完整课题枚举:9–14](../../scripts/test-further-bilingual.js#L9-L14) |
| FM04 | 当前 `statistics/index.md`、`statistics/moment-generating-functions.md` 与两篇 zh 对应页；后续正文完成时重新枚举 | 当前2对；subject 与 FM03 相同，使用路径区分。[入口:1–18](../../alevel/a2-further-mathematics/statistics/index.md#L1-L18)、[MGF:1–15](../../alevel/a2-further-mathematics/statistics/moment-generating-functions.md#L1-L15) |
| 搜索两个出口 | `_includes/search_metadata.html` → `_includes/head.html` 与 `assets/search.json` | 至少核验新 hub、FM04、原四单元分类；不允许两出口不一致 |
| 双语链接 | `_includes/nav.html`、`_includes/head.html`、`assets/js/site-language.js` | 复用已有配对，不必为导航整理重写语言脚本；检查静态链接和增强后链接 |
| 跨页兼容 | TMUA、生成器；所有 fx-CG50 stage 页；AS/IGCSE、physics 等普通 fallback 使用者 | 不修改其内容或专用分支；对相关断言做回归 |
| 备用/编辑器消费者 | `_includes/subject_button.html`、`admin/config.yml:190–215`、`admin/preview-templates/subjects.js:5–39` | 当前未发现 subject_button 实际 include 调用；CMS 只展示平面 name/path/color，未建当前 stage/name_zh 完整编辑表单。保留现有字段可避免顺带重构；若新分组需由 CMS 编辑，才单独补其 schema/预览 |

上表页面数量来自当前两个 A2 目录的 frontmatter 只读枚举：普通数学每语言 `17 pure + 8 s2 + 12 m2`；高数每语言 `17 pure + 2 FM04`。这是作用范围计数，不是学习质量或完成度统计；正文继续制作后必须更新枚举。

## 8. 最小变更测试列表：改哪些断言，保留哪些契约

本轮读取测试，不修改或声称全部运行通过。实施时应先 fresh build，再检查生成 HTML；已有 `_site` 不能验证新方案。

### 8.1 直接关联导航的全部现有断言

| 测试 | 已存在的具体约束 | 实施动作 |
| --- | --- | --- |
| [test-frontend-ux.js:21–83](../../scripts/test-frontend-ux.js#L21-L83) | en/zh 首页与目录的卡片目的地和顺序；首页18张、A-Level14张、IGCSE4张；阶段锚点；mechanics 精确搜索分类及两出口一致 | 新增 FM04 卡片/学科分组后有意更新快照与数量；保留旧单元目的地及IGCSE；补 hub 与 FM04 的双语发现路径和搜索分类 |
| [test-tmua-presentation.js:10–17](../../scripts/test-tmua-presentation.js#L10-L17) | include 调用字符串精确匹配、原 TMUA 正文保护 | 保留 `skip_parent=page.breadcrumb_skip_parent`，一般无需改测试；另核验渲染后仍跳过 admissions |
| [test-mechanics-chapter10.js:174–206](../../scripts/test-mechanics-chapter10.js#L174-L206) | breadcrumb 不含 A2 Pure Mathematics；课题需含链接 A2 Mechanics；全部本地 href / fragment 有效；旧课程锚点存在 | 加学科 hub 应继续通过；扩充中英文 subject → unit 断言，momentum-bridge 也需覆盖，不能只依赖此固定列表 |
| [test-further-roots.js:77](../../scripts/test-further-roots.js#L77)、[test-further-induction-series.js:96](../../scripts/test-further-induction-series.js#L96)、[test-further-inverse-trig.js:95](../../scripts/test-further-inverse-trig.js#L95) | 纯数课题保留 A2 Further Pure Mathematics 标签，前两项要求它是链接 | 保留原纯数单元节点，无需因增加真正学科父级删除这些断言；只检查全页 includes 不能代替完整链顺序 |
| [test-frontend-loading.js:28–35](../../scripts/test-frontend-loading.js#L28-L35) | docs / tests fixture 的不存在父级不生成链接 | 保留普通 fallback；新数学映射不波及这些 fixture |
| [test-fx-cg50.js:119–123、145–151](../../scripts/test-fx-cg50.js#L119-L151) | 指南、further-topics 与 advanced/mechanics 的专用 breadcrumb | 计算器分支优先，保持全部 stage 行为 |
| [test-physics-bilingual.js:35](../../scripts/test-physics-bilingual.js#L35)、[test-physics-circular.js:70](../../scripts/test-physics-circular.js#L70)、[test-physics-learning-pilots.js:53–55](../../scripts/test-physics-learning-pilots.js#L53-L55) | 物理英文父级及中文父级的准确链接/标签；pilots 也检查其他学科入口 | 公共 include 改动的直接回归保护；不改变原映射 |

### 8.2 URL、锚点、双语与内容边界的现有保护

| 测试/fixture | 与本次层次修改直接相关的保护 |
| --- | --- |
| [test-site-language.js:97–124、142–174](../../scripts/test-site-language.js#L97-L174) | query/hash 保留；实际中英文配对存在且唯一；UI 键对齐；显式路径不被强行改语言；单语指南不伪造配对 |
| [test-bilingual.js:13–30、54–75](../../scripts/test-bilingual.js#L13-L75) | MA03 根/课题 permalink、原内容锚点、配对链接；语言链接保留 fragment；MA05 入口切换 |
| [test-further-bilingual.js:31–48、98–120](../../scripts/test-further-bilingual.js#L31-L120) | FM03 旧根的混合/延后任务及稳定锚点；16课双语链接、标题锚点、配对；不能把根页换成只剩卡片的 hub |
| [test-mechanics-bilingual.js:17–56](../../scripts/test-mechanics-bilingual.js#L17-L56) | 自动枚举 MA05 入口与课题，保留中英文公式、课题锚点、语言链接和本地引用 |
| [test-ma04-content.js:34–54](../../scripts/test-ma04-content.js#L34-L54) 与 [legacy-ids.json](audit-assets/ma04-full-2026-10-26/legacy-ids.json) | MA04 入口、旧 heading IDs、七课路线、双语综合/延后任务、**全页**本地链接与 fragment；新增 hub breadcrumb 链接必须在 fresh build 中真实存在 |
| [test-pure-consistency.js:136–142](../../scripts/test-pure-consistency.js#L136-L142) | 原纯数入口 legacy ID 仍存在且指向同一主题，不能迁走旧根内容 |
| [test-a2-heading-hierarchy.js:7–39](../../scripts/test-a2-heading-hierarchy.js#L7-L39)、[test-reading-layout.js:41–68](../../scripts/test-reading-layout.js#L41-L68) | 原根课程及课题保持 TOC、双语 heading 树、阅读布局和任务边界；扫描刻意排除普通 statistics/mechanics，不等于它们没有导航问题，也不覆盖嵌套 FM04 |
| [test-subject-index-translations.js:36–69、89–98](../../scripts/test-subject-index-translations.js#L36-L98) | AS 数学与 IGCSE 中文入口的范围说明、译页与英文参考链接不能被本次 A2 重组波及 |
| [test-as-mathematics-content.js:37–44、182起](../../scripts/test-as-mathematics-content.js#L37-L44)、[test-as-further-course.js:227–228](../../scripts/test-as-further-course.js#L227-L228) | 现有 AS 学科路线和 legacy anchors 保留；不是本轮重写目标 |
| [test-fm04-sample.js:6–24](../../scripts/test-fm04-sample.js#L6-L24) | 当前 MGF 题干、数学、学习锚点及折叠默认关闭；**没有**完整 FM04 breadcrumb / hub / 搜索断言，不可拿它的通过当导航验收 |

不需要重写既有数学计算测试或复制上述断言。最小新增验证可放在一份导航行为测试中，读取 fresh build：

1. 四个真实 hub：标题/范围、三条并列单元状态，FM05 没有虚假课程链接；hub 不是重定向到旧 pure 页。
2. MA03、MA04、MA05、FM03、FM04 各选入口和课题，**两种语言逐项比较 breadcrumb 的顺序、文本、href、唯一 aria-current**。学科 href 必须是新 hub；Pure href 必须是旧根；两种 Statistics 不串科。
3. 对中文静态 HTML 就要求 hub / unit / A-Level 链接同语言、统计标签中文，不等 JS 修正；运行语言切换后仍保持原 query/hash 和正确落点。
4. TMUA 仍跳过 admissions，通用无父页 fixture 仍不是坏链接；CG50、物理、AS/IGCSE 保持原有行为。特别覆盖 `skip_parent` 不删除后续物理路径的语义。
5. 首页和 A-Level 目录采用同一分组与目的地；原阶段锚点不变。FM04 在 Pagefind meta 与 fallback JSON 中分类一致、与 FM03 区分。

当前 CI 先 Jekyll build + Pagefind，再跑共享前端、数学、MA04 等检查。[workflow:22–38](../../.github/workflows/test.yml#L22-L38)、[数学/MA04:55–80](../../.github/workflows/test.yml#L55-L80)。现有数学 glob 是 `test-further-*`，**不会匹配 `test-fm04-sample.js`**；当前 workflow 也未调用 TMUA presentation 或 fx-CG50 测试。实施时按实际改动显式补跑相关脚本，若新增导航测试，加入现有 workflow，不另建测试平台。

## 9. 本轮核验与限制

- 已完成：读取公共 breadcrumb 与唯一调用点、skip_parent 的页面/生成器/测试；全部数学相关 index frontmatter（含实际单元入口与计算器兼容页）；subjects/UI；中英文首页与 A-Level 目录；搜索两个出口和语言脚本；上述相关测试与 workflow。对两个 A2 目录作只读 frontmatter/路径枚举，并从现存 `_site` 提取中英文真实 breadcrumb 标签/href 与搜索 section 交叉核对。
- 文中行号对应开头工作区快照；正文有其他任务继续制作，尤其 FM04 样章范围和页面数须在实施时重新读取。旧范围研究中“尚无 FM04 文件”的描述已不是当前事实，本记录以实际源码的入口 + MGF 样章为准。
- 最终文档检查时，其他任务又新增未跟踪的 `standard-mgfs.md` 中英文页。已只读核对其 frontmatter：仍使用 `subject: a2-further-mathematics`、statistics 下的独立 permalink，中文有正确 translation_of，故同样纳入本报告所述 FM04 导航分支；未核验其正文或接受状态。以上“2 对 FM04 页面”是初次枚举快照，此时文件至少为入口、MGF、standard-MGF 共3对，入口当时的“仅一篇样章”声明尚不能代表新增正文的验收结果。[英文新页:1–12](../../alevel/a2-further-mathematics/statistics/standard-mgfs.md#L1-L12)、[中文新页:1–13](../../zh/alevel/a2-further-mathematics/statistics/standard-mgfs.md#L1-L13)。此新增不会改变真实 hub 与显式平行单元的推荐。
- 未做：实现、页面移动、提交/推送、fresh Jekyll build、浏览器桌面/手机阅读或学生试用、FM04/其他学科内容质量验收。尝试只读调用本机 Ruby 获取版本以支持独立模板核验时进程返回 `3221225506`、无输出，因此未运行新的 Liquid/Jekyll 渲染；现存 `_site` 观察仅作为辅助证据，不称新构建通过。
- 后续顺序：先完成正文及内容验收 → 主流程重新确认入口状态与占用 → 采用真实 hub + 显式平行单元 breadcrumb → fresh build 与上述导航/兼容检查 → 桌面、手机、键盘及双语定位验收。入口整理不能代替课程质量验收。[长期标准:课程入口职责](course-content-standard.md#2-课程学习页与参考资料各有职责)、[长期标准:结构与格式验收](course-content-standard.md#结构与格式验收)。
