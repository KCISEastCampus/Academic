# Academic 境内访问超时：定位与部分修复

日期：2026-10-25，UTC+8。用户报告家庭宽带访问慢或 Timeout。状态：Cloudflare HTML 缓存已在线生效；四份网页／测试文件在本地修补完成，未推送或发布。不能据此宣布家庭宽带超时已根治。

## 测量环境与复现

主机应用层直连使用 curl `--noproxy "*"`、Chromium `--no-proxy-server`；对照为主机当前已配置的代理路径。没有修改系统代理、路由、浏览器安全设置或 TLS 校验。未取得用户家庭宽带的 HAR、运营商或独立境内多地域探针，因此以下是本机路径证据，不代表全国用户表现。

| 测量 | 实际结果 |
| --- | --- |
| MA05 入口直连，无压缩 | DNS 0.026 s，TLS 4.592 s；25.008 s 收到 53,542 字节后超时，HTTP 已开始返回 200 |
| 同页当前代理路径 | 总计 0.679 s，71,326 字节完整返回 |
| 浏览器式压缩直连 | 一次完整返回约 8.341 s；重复请求 18.004 s 只收到 16,549 字节后超时 |
| 原站手机冷启动 | 首页在 35 s 的 load 等待后仍无首次绘制；课程页出现 `ERR_TIMED_OUT`。见[原始记录](audit-assets/network-reliability-2026-10-25/academic-network-before.json) |
| 开启缓存后复测 | 首页一次 FCP 约 10.704 s，DOM 就绪约 12.334 s，35 s 内仍未完成 load；课程页仍有样式等待和无首次绘制的情况；另有一次 curl 连接阶段超时。见[复测记录](audit-assets/network-reliability-2026-10-25/academic-network-after-cache.json) |

当前 DNS CNAME 为 `kciseastcampus.github.io`，Cloudflare 代理开启，区域计划为 Free Website。直连公开响应头的一次接入位置为 LAX；代理对照为 HKG／SIN。连接、正文和小型样式文件均有停滞，说明并非只因课程篇幅长或单个大字体；DNS 耗时也不足以解释这些超时。缓存前后网络状态有波动，不能把两次 FCP 差异直接当成受控加速百分比。

Cloudflare 官方说明其全球网络不包含中国大陆节点，境内访问可能经过跨境链路；不能通过普通 Anycast 配置固定接入城市。境内专用 China Network 有单独的接入和资质条件。依据：[地理路由说明](https://developers.cloudflare.com/support/troubleshooting/general-troubleshooting/geographic-traffic-routing/)。因此现有海外入口的缓存优化不能保证消除家庭宽带的连接超时。

## 已生效：仅限 Academic 的公开 HTML 缓存

修复前课程 HTML 返回 `cf-cache-status: DYNAMIC`。通过 Cloudflare 连接新增一条缓存规则；原有两条规则逐字段比较保持不变，没有调整 DNS、SSL 或其他主机的设置。

- 匹配 `academic.kcisec.site`、GET／HEAD、无查询参数、以 `/` 或 `.html` 结尾的路径；排除 `/admin/`、`/cdn-cgi/`。
- HTML 允许边缘缓存，edge/browser TTL 均 `respect_origin`，没有强制覆盖源站的 private/no-store 等缓存约束。本轮源站公开响应为 `Cache-Control: max-age=600`；发布内容可能有相应缓存延迟，不承诺立即刷新。
- 复验出现 `cf-cache-status: HIT`、`Age: 100`。这个 HIT 来自代理路径的 SIN 节点；不伪称失败的直连请求也命中缓存。
- 已保存[修改前规则](audit-assets/network-reliability-2026-10-25/academic-cache-rules-before.json)与[修改后规则](audit-assets/network-reliability-2026-10-25/academic-cache-rules-after.json)。新增 rule ID 为 `93a92e6e5ee64b8cb118b2a427783a8b`，ruleset 从版本 4 到 5。回退只需删除这条新增规则，不恢复整个区域或改动原规则。

设置依据：[Cloudflare Cache Rules API](https://developers.cloudflare.com/cache/how-to/cache-rules/create-api/)、[缓存设置](https://developers.cloudflare.com/cache/how-to/cache-rules/settings/)。

## 已本地修补：非必要资源不阻止阅读

最小修补涉及 `_layouts/index.html`、`_includes/footer.html`、`assets/js/pop_ups.js` 和现有 `scripts/test-frontend-loading.js`；未改课程、公式、共享配色或排版。

1. 首页 `pop_ups.js` 原为同步 head 脚本。实际瀑布中该脚本曾等待约 29.7 s；将其请求挂起时，正文不可见。改为 `async`，并让脚本在 DOM 已就绪后才到达时也能初始化弹窗。仅使用 defer 虽能解除解析阻塞，却仍会拖住 DOMContentLoaded，因此最终使用 async。
2. 页脚访问计数器请求 `hitscounter.dev`，曾等待约 27.1 s。原 eager 图片会拖住 load。改为原生 `loading="lazy"`、`decoding="async"`，保留统计与滚动到页脚后的加载。

[故障注入前](audit-assets/network-reliability-2026-10-25/optional-network-before.json)两项均失败；[最终复验](audit-assets/network-reliability-2026-10-25/optional-network-final.json)两项通过：提示脚本永久挂起时正文可见且 DOM 就绪；计数器挂起时页面完成 load，滚动到页脚仍会请求计数器。这些是受控的附加资源故障测试，不是对真实境内线路恢复的证明。

最终 Jekyll 构建 30.869 s 成功，Pagefind 1.5.2 生成 297 页／两语言／46,589 词。14 项受影响检查通过：frontend-loading、frontend-ux、site-language、subject-index-translations、search-language、search-excerpts、search-interaction、reading-layout、theme-init、image-modal、accessibility、toc-refresh、back-to-top、further-first-order。

[八个浏览器视图](audit-assets/network-reliability-2026-10-25/network-fix-reading.json)检查中英文首页与一阶微分方程，手机浅色／桌面深色；第三方计数请求保持挂起。正常提示脚本刻意延迟至 DOMContentLoaded 后才放行，弹窗仍可显示；公式、键盘帮助、锚点阅读和页面宽度正常。[弹窗截图](audit-assets/network-reliability-2026-10-25/network-fix-home.png)与[课程截图](audit-assets/network-reliability-2026-10-25/network-fix-lesson.png)已目检。

## 未采用的操作与下一步

指定 GitHub Pages 源站 IP、保留当前 Host/SNI 的只读对照得到证书名不匹配；GitHub Pages API 的 `https_certificate` 为 null，`https_enforced` 为 false。因此没有直接关闭 Cloudflare 代理，没有关闭 TLS 校验，也没有变更正在工作的域名解析。Cloudflare 对用户的 HTTPS 目前仍正常，不能把源站证书状态描述成现有网页证书失效。

网页修补尚未推送／创建 PR／发布；本地预览为 `http://127.0.0.1:8838/zh/`。当前任务分支 `codex/site-network-reliability` 基于已发布 main，既有未跟踪 package.json／node_modules 保留。

若需要长期稳定服务境内家庭宽带，应准备同一 Jekyll 产物的境内镜像或适合境内接入的托管线路，再用目标运营商实测选择。具体实施需要可用域名／备案状态、托管账号或服务器及预算；本轮没有购买服务、迁移托管或凭空承诺境内节点。实体手机、用户家庭宽带的最终复验和全国运营商覆盖均未完成。
