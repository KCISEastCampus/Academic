# 体积优化落地研究报告（字体子集化 + 图片压缩）

> 研究对象：`D:\GitHub\Academic`（Jekyll 4 + GitHub Pages 静态学术站，win32 本机 + GitHub Actions ubuntu-linux）
> 调研方式：primary sources（官方文档 / 上游仓库 / 工具官方站点），所有关键结论后附 `[cite:来源]`，文末列「来源」清单。
> 本报告只做调查与方案撰写，**不修改仓库任何文件**。文中命令均为「建议落地」而非已执行改动。

---

## 一页结论摘要

本仓库静态体积的绝对大头是「字体」与「图片」两块，二者合计约 `140MB`（不含 `assets/vendor` 的 `26MB`），也是本次优化的全部目标。

| 块 | 现状 | 建议动作 | 目标量级 | 预计收益 |
|---|---|---|---|---|
| `assets/fonts/*.ttf` 四个字重 | 4 × 17–18MB ≈ **70MB** | 按站点实际用字子集化，输出 **woff2** | 每个 ≈ **200–250KB**，四个 ≈ **1MB** | **≈ 69MB（约 99%）** |
| `assets/img/` 124 图 | ≈ **70MB**（PNG 106 / JPG 9 / WebP 6） | JPG→WebP（照片类）+ PNG 无损/近无损重压 | ≈ **15–25MB** | **≈ 45–55MB（约 60–75%）** |
| `assets/vendor/`（bootstrap、bootstrap-icons、mathjax） | ≈ 26MB | **不动**（第三方依赖，绝无必要） | 保持 | 0 |

合计：两块静态资源从 **≈140MB** 降到 **≈20–26MB**，**约省 115–120MB（≈85%）**。Word 站点（`_site`）打包上传的 artifact 会显著变小，用户首屏 / 全站加载明显更快。

**一句话结论：字体用 `fonttools::pyftsubset` 出 woff2（体积可到 1/70），图片用 `sharp-cli`（node 已装）+ 可选 `pngquant/oxipng`。两者都塞进 GitHub Actions 的 `pages.yml` 即可，不需要改 Jekyll 构建逻辑。**

> 实测证据（本报告实际跑出来的数字，非估计）：
> 用站点自身内容提取的字符集（`1031` 个非 ASCII + 可打印 ASCII，共 `1124` 字符）对 `MapleMono-NF-CN-Regular.ttf` 做子集化：**17MB TTF → 205KB woff2（0.2MB）**。[cite:MEAS]
> 同一字体的「全量 CJK 统一汉字（4E00–9FFF）」子集则为 **5.4MB**。[cite:MEAS]

---

## 一、字体子集化（fonttools / pyftsubset）

### 1.1 为什么是它：核心参数（来源：fontTools 官方文档）

`pyftsubset`（即 `fonttools subset`）是 fontTools 官方子集化工具，接受 TT/CFF 风味的 `.otf/.ttf` 或 `.woff`。[cite:C1]

关键参数与默认行为：

| 参数 | 作用 | 备注 |
|---|---|---|
| `--output-file=<path>` | 输出文件 | 缺省为 `<name>.subset` |
| `--flavor=woff2` | 输出 **woff2** | **需要 Brotli**（`pip install brotli`，官方指向 `github.com/google/brotli`）[cite:C1] |
| `--unicodes=<XXXX>` | 按 Unicode 码点/区间保留字符 | 例 `--unicodes=41-5a,61-7a`；`*`=全部 |
| `--text-file=<path>` | 从文本文件读取要保留的字符 | 换行符不会被加入；`--text`/`--unicodes` 可**并存并累加** |
| `--layout-features[+-]=<tag>` | 保留的 OpenType layout 特性 | 默认已含 `calt,ccmp,clig,kern,liga,locl,mark,mkmk…`；`*`=全部 |
| `--no-hinting` | 丢弃 hinting | 文档称最多可再小 **30%**，适合高分辨率屏 |
| `--name-IDs[+-]=<id>` | 保留 name 表条目（默认 0–6） | 想保留作者/商标可 `+=7,8,9`；`*`=全部 |
| `--drop-tables[+-]=<table>` | 丢弃的表 | 默认丢弃 `JSTF,DSIG,EBDT,EBLC,EBSC,PCLT,LTSH` 及 Graphite 表 |
| `--notdef-glyph` | 保留 `.notdef` | **默认保留**；TT 风味可 `--no-notdef-glyph` 省几字节 |
| `--recommended-glyphs` | 加 `.notdef/.null/CR/space` | 默认不加（现代系统不需要） |
| `--retain-gids` / `--harfbuzz-repacker` | 保留 gid / 用 HarfBuzz Repacker | 后者可进一步压 GPOS/GSUB（需 `uharfbuzz`） |
| `--ignore-missing-unicodes` | 缺失字符不报错 | **默认开启**，对我们「文本提取但字体里没有的字（如 emoji）」很友好 |
| `--no-desubroutinize` | 保留 CFF 子程序 | `--desubroutinize` 对某些 CFF 子集更小 |

**结论：一句标准命令**（已实测可得 205KB）：
```bash
pyftsubset in.ttf \
  --text-file=chars_site.txt \
  --flavor=woff2 --output-file=out.woff2 \
  --layout-features=liga,calt,ccmp,kern \
  --no-hinting --name-IDs=0,1,2,3,4,5,6
```

### 1.2 字符集策略：站点实际用字 vs 全量 CJK

**推荐：从站内文本提取实际用字（`--text-file`）。** 实测差距巨大：

| 策略 | 字符数 | 单个字重 woff2 | 四个字重 |
|---|---|---|---|
| **站点实际用字**（本仓库 .md/.html 提取，含 ASCII + CJK + 93 个 emoji） | 1124 码点 | **205KB** | **≈1MB** |
| 全量 CJK 统一汉字（4E00–9FFF + 全角标点 + ASCII） | ~20,990 | **5.4MB** | **≈21.6MB** |

[cite:MEAS]

- **全量 CJK 常用字/GB 集**：适合**不确定内容会长变、又不想每次构建都重新生成**的项目。5.4MB/字重仍是原字体的 1/3，但 4 个字重 21MB 对学术站偏重。
- **站点实际用字**：只要内容里加了新汉字而没重新子集化，就会缺字。**关键点：我们的 CI 每次都在 `jekyll build` 前重跑子集化，所以子集永远和内容同步，不会缺字。** 这正是推荐它的原因——动态、自愈、体积最小。[cite:C1]

### 1.3 Nerd Font 图标（PUA）要不要保留——重点

这是最容易踩的坑。Nerd Fonts 的图标 glyph 大量落在 Unicode **私有区（PUA）** 与非 PUA 区段：

- 私有区（PUA）编码块：`E000–F8FF`、`F0000–FFFFF`、`100000–10FFFF`。[cite:C2]
- Nerd Fonts v3.5.0 各 glyph set 的码点范围（节选）：
  - Powerline Symbols `e0a0–e0b3`；Powerline Extra `e0b4–e0c8 / e0ca / e0cc–e0d7`
  - Pomicons `e000–e00a`；Seti-UI+Cust `e5fa–e6bb`；Devicons `e700–e958`
  - Font Awesome `ed00–f2ff`；Codicons `ea60–ec84`；Font Logos `f300–f384`；Octicons `f400–f533` + `2665/26a1`
  - Material Design `f0001–f1af0`；另含 Braille `2800–28ff`、Box Drawing `2500–259f`（这两类不在 PUA，是普通 Unicode 区段）[cite:C2]

**风险**：`--text-file` 只保留你**明确写进文件**的字符。如果代码/页面里用实体或 CSS 引用 Nerd Font 图标（如 `&#xe0a0;`），这些字符不会出现在 .md 里，**`--text-file` 会漏掉它们**，子集化后图标变方块/tofu。

**本仓库的实际情况**：
- 我用 node 对仓库全部 `.md/.html` 统计：**PUA（E000–F8FF）使用数为 0**；用到 93 个 emoji + 4 个 box-drawing。
- 图标主要走 **Bootstrap Icons**（`style.css` 里的 `.bi` 规则、`bootstrap-icons` 字体，在 `assets/vendor` 里，**不归 MapleMono 管**）。[cite:FILES]

**结论 / 建议**：这个站点的图标不在 MapleMono 的 PUA 里，所以**不必为了图标而拖进整个 PUA 区**。但为了**免疫未来**内容里突然出现 Powerline/JSON/终端类符号，给出两条可选兜底：
1. **保守（推荐）**：`--text-file` 之外再叠一个 `--unicodes` 保留用到的 PUA 子段，增加几十 KB 换来不漏图标：
   ```bash
   --unicodes=U+E000-F0FF,U+F000-F8FF,U+2500-25FF,U+2800-28FF
   ```
2. **彻底**：叠 `--unicodes=U+E000-F8FF` 保留整个 PUA 区（会多保留很多无用 icon glyph，子集变大）。

> 若你确知某些页面会用 Nerd Font 图标（终端截图展示、代码高亮符号等），就把对应的图标字面**直接写进 `chars_site.txt`**（如 `\ue0b0`），或按上面方案加 `--unicodes`。pyftsubset 会把 PUA/非 PUA 字符都当普通码点保留，二者不冲突、可累加。[cite:C1]

### 1.4 woff2 体积量级与 `font-display: swap`

- 实测：站点实际用字 → **205KB/字重**；全量 CJK → **5.4MB/字重**。[cite:MEAS]
- `font-display: swap`：**保留**。`assets/css/fonts/maplemono.css` 里四个 `@font-face` 已带 `font-display: swap`。[cite:FILES] 子集化后 woff2 更小、更有必要用 swap——先用回退字体渲染，字体几毫秒内到位，避免 FOIT 白屏。

### 1.5 静态字重的注意点

四枚是**独立的静态 TTF**（Regular / Bold / Italic / BoldItalic），**不是可变字体**，所以：
- 直接对**每个文件各跑一遍** pyftsubset 即可，无需特殊处理。[cite:C1]
- **italic 的 glyph 覆盖**：静态斜体字体把同一批 codepoint 映射到斜体字形。由于我们是按 codepoint 子集 + `--layout-features`（含 `calt/ccmp/kern`）做 layout closure，斜体字形会随码点一起保留，**无需额外参数**。四个文件都要跑，不要只跑 Regular。[cite:C1]
- 建议把 `.ttf` 与 `.woff2` 都保留在仓库里（Jekyll 原样拷贝）；CSS 里 `src: url(...) format('woff2')` 优先，浏览器自动回退。**不要**把高清晰度下不用的 `.ttf` 塞进 `_site`（见 CI 一节「删除 ttf 的原位方案」）。

### 1.6 Windows 本机命令（无 python，用 uvx）

环境已核实：本机 `uv 0.11.16` / `uvx 0.11.16` 可用，`python/python3` **不可用**，node v22、ruby 3.4.4 可用。[cite:MEAS]

`uvx` 会在独立环境里运行工具，`--from` 指定包、`--with` 附加依赖。[cite:C8]

**（1）提取站点字符 → `chars_site.txt`**（node，本机可用）：

<details><summary>extract-chars.mjs（点击展开）</summary>

```js
// extract-chars.mjs  —— 从仓库 .md/.html 提取实际用字到 chars_site.txt
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const SKIP = new Set(['assets','_site','.git','vendor','node_modules','.jekyll-cache']);
const files = [];
function walk(d){
  for(const e of readdirSync(d,{withFileTypes:true})){
    const p = join(d, e.name);
    if(e.isDirectory()){ if(SKIP.has(e.name)) continue; walk(p); }
    else if(/\.(md|html)$/.test(p)) files.push(p);
  }
}
walk('.');
const cps = new Set();
for(let i=0x20;i<=0x7E;i++) cps.add(i);          // 可打印 ASCII（含字母/数字/标点/空格）
for(const f of files){
  let s; try{ s = readFileSync(f,'utf8'); }catch{ continue; }
  for(const ch of s){ const c = ch.codePointAt(0); if(c>=0x20 && (c<=0x7E || c>=0x80)) cps.add(c); }
}
writeFileSync('chars_site.txt', [...cps].sort((a,b)=>a-b).map(c=>String.fromCodePoint(c)).join(''));
console.log('unique code points:', cps.size);
```
运行：`node extract-chars.mjs`
</details>

**（2）四个字重各跑一遍 pyftsubset**（bash / Git Bash）：

<details><summary>subset fonts（点击展开）</summary>

```bash
# chars_site.txt 已在仓库根目录（由上面脚本生成）
for F in Regular Bold Italic BoldItalic; do
  uvx --from fonttools --with brotli pyftsubset \
    "assets/fonts/MapleMono-NF-CN-${F}.ttf" \
    --text-file=chars_site.txt \
    --unicodes=U+E000-F0FF,U+F000-F8FF,U+2500-25FF,U+2800-28FF \
    --flavor=woff2 \
    --output-file="assets/fonts/MapleMono-NF-CN-${F}.woff2" \
    --layout-features=liga,calt,ccmp,kern \
    --no-hinting --name-IDs=0,1,2,3,4,5,6
done
```
</details>

> `uvx` 第一次运行会从 PyPI 拉取 `fonttools` 与 `brotli` 到缓存（本机已实测成功，无需联网时除外）。若要固定版本：改成 `uvx --from 'fonttools==4.63.0' --with brotli ...`。[cite:C8]
> 若不想用 `--with brotli`，可用 `uvx --from 'fonttools[woff]'`——但实测它只装 fonttools（会提示无 `brotli` extra），**真正出 woff2 需要 brotli**，所以**推荐 `--with brotli`**。[cite:MEAS]

把 `assets/css/fonts/maplemono.css` 四处的 `src` 改为指向 `.woff2` 并声明 `format('woff2')`（此 CSS 改动属于落地实施，不在本次职责内）。

### 1.7 GitHub Actions（ubuntu）脚本

需要在 `jekyll build` **之前**执行（这样 `_site` 里就是 woff2）。把下面两个 step 插到 `pages.yml` 的 `Setup Ruby` 与 `Build site` 之间。[cite:C10]

```yaml
      - name: Setup Python (for font subsetting)
        uses: actions/setup-python@v5
        with:
          python-version: '3.12'

      - name: Subset MapleMono fonts to woff2 (before Jekyll build so _site ships woff2)
        run: |
          pip install --quiet fonttools brotli

          # 1) 从内容提取实际用字
          python - <<'PY'
          import os
          SKIP={'assets','_site','.git','vendor','node_modules','.jekyll-cache'}
          files=[]
          def walk(d):
              for e in os.scandir(d):
                  if e.is_dir():
                      if e.name in SKIP: continue
                      walk(e.path)
                  elif e.name.endswith(('.md','.html')):
                      files.append(e.path)
          walk('.')
          cps=set(c for c in range(0x20,0x7F))           # 可打印 ASCII
          for f in files:
              try: s=open(f,encoding='utf-8').read()
              except OSError: continue
              for ch in s:
                  c=ord(ch)
                  if c>=0x20 and (c<=0x7E or c>=0x80): cps.add(c)
          open('chars_site.txt','w',encoding='utf-8').write(''.join(chr(c) for c in sorted(cps)))
          print('unique code points:', len(cps))
          PY

          # 2) 每个字重子集化 → woff2
          for F in Regular Bold Italic BoldItalic; do
            pyftsubset "assets/fonts/MapleMono-NF-CN-${F}.ttf" \
              --text-file=chars_site.txt \
              --unicodes=U+E000-F0FF,U+F000-F8FF,U+2500-25FF,U+2800-28FF \
              --flavor=woff2 \
              --output-file="assets/fonts/MapleMono-NF-CN-${F}.woff2" \
              --layout-features=liga,calt,ccmp,kern \
              --no-hinting --name-IDs=0,1,2,3,4,5,6
          done

          # 3) 可选：只把 woff2 留给部署，删除源 ttf 减小 _site
          # rm -f assets/fonts/MapleMono-NF-CN-*.ttf
```

> 说明：Jekyll `source: .`、`destination: _site`，`assets/` 下所有文件会原样拷贝进 `_site`。所以在 `build` 前对 `assets/fonts/*.ttf` 子集化，`_site/assets/fonts/*.woff2` 自动就位。[cite:C10]
> 若不想 `_site` 里还带 70MB 的 `.ttf`，把上面第 3 步的 `rm -f` 取消注释（只保留 woff2；CSS 已切成 woff2 后不影响显示）。

---

## 二、图片压缩

### 2.1 工具与格式取舍

| 工具 | 适合 | 关键参数 | 维护状态 |
|---|---|---|---|
| **sharp**（node，`sharp-cli` 封装） | 通用：JPG→WebP/AVIF、PNG 重压、批量 | `-q/--quality`、`-f/--format`、`--lossless`、`--easy`、`--effort` | **活跃**（sharp-cli 6.0.0，2026-08 发布）[cite:C6][cite:C7] |
| **oxipng**（Rust） | PNG **无损**重压 | `-o 0–6`（默认 2）、`--strip safe`、`-a/--alpha`、`-r`、`-t` | 活跃（README 同步）[cite:C4] |
| **pngquant** | PNG **有损**（调色板化，适合截图/照片） | `--quality=65-85 --speed 1` | 活跃 |
| **cwebp**（libwebp） | 直接出 WebP | `-q 75/80/85`、`-lossless`、`-near_lossless`、`-exact`、`-alpha_q` | 活跃（Google 官方）[cite:C5] |
| **AVIF** | 更小体积（浏览器支持进一步提升） | `-f avif -q 50–60 --effort 6` | sharp 支持 |

**推荐**：**JPG / 大图照片 → 转 WebP**（`q 80`，甚至可试 AVIF）；**PNG 示意/公式/透明图 → 保持 PNG**（用 oxipng 无损，或 cwebp 无损/近无损保留 alpha）。
- 透明 PNG：**不要**转成不透明 WebP。webp/cwebp 用 `-exact` 保留透明区 RGB，sharp 用 `--exact`，oxipng 天然支持 alpha（`-a` 对全透明像素改色以省体积，属「视觉无损妥协」，谨慎用于必须精确还原的图）。[cite:C4][cite:C5][cite:C7]
- 超大公式截图：若纯文字截图，用**有损但高 q**（WebP `q 85–90` 或 oxipng）通常没问题；若含大量细小文字/线框，**优先无损**或 `--near_lossless=60`，避免字迹糊。[cite:C5]

### 2.2 本机批量命令（node/npx 已装）

**（A）照片类 JPG → WebP（`q 80`，`--effort 5`）**，glob 支持、输出宏 `{dir}` 表示写回原目录，用 `-f webp` 自动换扩展名，`--exact` 保留透明数据（对无透明 JPG 无副作用）。[cite:C7]

```bash
# 示例：整个 assets/img 下所有 JPG→WebP（q80）
uvx --from sharp-cli --version >/dev/null 2>&1 || true   # 先确保 sharp-cli 可获取（npm 侧）

# 用 npx（本机 node22 / npx10 已装）：
npx --yes sharp-cli \
  -i 'assets/img/**/*.jpg' -o '{dir}' \
  -f webp -q 80 --effort 5 --exact
```

> 说明：sharp-cli 的 `-i` 支持 glob（要加引号）；`-o '{dir}'` + `-f webp` 会把 `foo.jpg` 写成同目录的 `foo.webp`，**原 jpg 不会删除**。[cite:C7] 想让产物覆盖原文件并改名，可用 `-o '{dir}'` 且不指定 `-f`，或用输出宏 `{dir}/{name}.webp`。

**（B）PNG 无损重压**（统一走 sharp `--lossless -f png --effort 7`，无系统额外依赖）：

```bash
npx --yes sharp-cli \
  -i 'assets/img/**/*.png' -o '{dir}' \
  -f png --lossless --effort 7
```

> 若要更激进（失真更小但更省）可再叠 `--nearLossless 60`；若要显著更小且可接受轻微失真（截图类），改跑 `pngquant`（见下）。[cite:C7]

**（C）可选强化：pngquant / oxipng**（本机无 python，需二进制；可用 `npx` 的镜像或 winget 安装）

```bash
# 有损（截图/照片 PNG）—— 调色板 + 抖动
pngquant --quality=65-85 --speed 1 --force assets/img/**/*.png
# 无损（必须精确的图）—— oxipng
oxipng -o 2 --strip safe -a -t 4 assets/img/**/*.png   # -r 递归
```
（`pngquant`/`oxipng` 官方手册可参考；oxipng 的 `-a` 属于「视觉无损」变换，谨慎给必须精确还原的图，`-o 4` 更小但更慢。[cite:C4]）

### 2.3 纳入 pages.yml 的方式

Jekyll 不处理静态资源（原样拷贝），所以图片压缩是**独立 step**。推荐放在 `jekyll build` **之后**、`Pagefind` **之前**，直接对 `_site/assets/img` 跑，让上载的 artifact 更小：

```yaml
      - name: Optimize images (post-build, before Pagefind)
        run: |
          npx --yes sharp-cli \
            -i '_site/assets/img/**/*.jpg' -o '{dir}' \
            -f webp -q 80 --effort 5 --exact
          npx --yes sharp-cli \
            -i '_site/assets/img/**/*.png' -o '{dir}' \
            -f png --lossless --effort 7
          # 说明：PNG 若为「透明/公式」图保留无损；照片类 PNG 可改 -f webp -q 80
```

> **为何放在 build 之后**：此时 `_site` 已生成，只需改这一处即可减小部署产物，无需改动源码图片；`Pagefind` 只索引 HTML 文本，先后顺序对索引结果无影响。[cite:C10]
> **注意**：如果同时想**减小 git 仓库体积**（而不只是部署体积），应另跑一遍**对源码 `assets/img` 的压缩**并手动提交结果。两者目标不同（一个省 artifact，一个省 repo），不要混淆。

**关于是否值得用 Jekyll 的 `prebuild`/钩子**：
- Jekyll 没有官方的 "pre-build" 钩子；但**有官方插件 Hook API**（`Jekyll::Hooks.register :site, :after_ready` / `:pre_render` / `:post_build` 等），可在 Ruby 里挂自定义逻辑。[cite:C10]
- **不建议用 Ruby 钩子做图片/字体优化**：会引入 Ruby 依赖、且与已有的 `node`/`python` 工具链耦合。**用 workflow 里的独立 step 最干净、最透明**（失败也可读日志、可跳过）。

### 2.4 哪些目录跳过、风险点

**必须/建议跳过的目录：**
- `assets/vendor/`（bootstrap、bootstrap-icons、mathjax，≈26MB）——**绝不动**，它们是第三方依赖，动了对功能/图标/公式渲染有害。[cite:FILES]
- **已存在的 `.webp`**——不要二次压缩（本例 vendor 与 `student-council-news/event-260417/*.webp` 已有一批 1.1–1.3MB 的 WebP，说明部分图片之前已转 WebP）。[cite:FILES][cite:MEAS]
- 用作 `logo`、favicon、`StarEdu*.png` 等**已压缩的小图标**。

**风险点：**
1. **透明 PNG 转不透明 WebP**：白/黑底，α 分层丢失。对策：转 WebP 必须 `--exact`/`--alpha_q`；或干脆只对**无透明**的图转 WebP，透明图走有损 PNG 保留。
2. **超大公式/示意图有损压**：公式截图文字细，低 q 会糊。对策：这些图**保持无损**或 `--near_lossless 60` 以上。
3. **重复压缩**：同一批图先转 WebP 又留 JPG，或对已压图重复压，体积不降反升。对策：glob `*.jpg` 时排除已存在 `*.webp` 的同名图，或压缩前 `--dry`/`--print` 看输出。[cite:C7]
4. **CI 时长**：140 图+AVIF 会很慢。建议 AVIF 只对**最大的若干张**手动权衡，WebP `--effort` 别拉满（`5` 平衡），CI 里加 `--timeout` 兜底。[cite:C7]

---

## 三、落地清单（实施时按此顺序）

1. 新增 `scripts/extract_chars.mjs`（本机）与 CI 里的 Python 等价逻辑（见 1.6/1.7）。
2. `pages.yml`：`Setup Python` + `Subset MapleMono fonts to woff2` 插到 `Build site` 之前；`Optimize images` 插到 `Build site` 之后、`Build Pagefind` 之前。
3. 改 `assets/css/fonts/maplemono.css` 四个 `@font-face` 的 `src`：指向 `MapleMono-NF-CN-{Regular,Bold,Italic,BoldItalic}.woff2` 并加 `format('woff2')`；保留 `font-display: swap`。
4. 可选：删除 `assets/fonts/*.ttf`（或 CI 里 `rm -f`），避免 70MB 进 `_site`。
5. 实测并记录前后体积（可用 `du -sh _site/assets` 对比）。

---

## 来源清单

| 标记 | 来源 | 链接 | 维护/状态 |
|---|---|---|---|
| [C1] | fontTools 官方 `subset`（pyftsubset）文档 | https://fonttools.readthedocs.io/en/latest/subset/ | 活跃维护；`--flavor=woff2` 需 Brotli |
| [C2] | Nerd Fonts Wiki · Glyph Sets and Code Points（PUA 等码点） | https://github.com/ryanoasis/nerd-fonts/wiki/Glyph-Sets-and-Code-Points | 活跃（v3.5.0） |
| [C3] | GoogleChromeLabs/squoosh PR #1321 “Remove CLI / libsquoosh”（2023-01-03 merged，作者弃用 CLI，官方 web 版继续） | https://github.com/GoogleChromeLabs/squoosh/pull/1321 | 上游 CLI 已弃用；社区 fork `frostoven/Squoosh-with-CLI` |
| [C4] | oxipng MANUAL.txt（10.1.0 全参数手册） | https://github.com/oxipng/oxipng/blob/628e241e23f368097883807fa6e985ccf7c00357/MANUAL.txt | 活跃 |
| [C5] | Google WebP `cwebp` 官方文档 | https://developers.google.com/speed/webp/docs/cwebp | 官方活跃 |
| [C6] | sharp-cli npm registry（latest 6.0.0，更新于 2026-08-22） | https://registry.npmjs.org/sharp-cli | **活跃** |
| [C7] | sharp-cli README（命令语法、glob、输出宏、`-f/-q/--lossless/--effort/--exact`） | https://github.com/vseventer/sharp-cli | 活跃 |
| [C8] | uv 官方《Using tools》（`uvx` 临时环境、`--from`/`--with`） | https://docs.astral.sh/uv/guides/tools/ | 官方活跃 |
| [C9] | filamentgroup/glyphhanger 的 `pyftsubset` 帮助汇总（可读性高的 flag 清单） | https://github.com/filamentgroup/glyphhanger/blob/master/docs/pyftsubsethelp.txt | 参考 |
| [C10] | 本仓库 `.github/workflows/pages.yml`、`assets/css/fonts/maplemono.css`、`_config.yml` | `.github/workflows/pages.yml` 等（本地源码） | 本仓库 |
| [FILES] | 本仓库实测：`assets/fonts/*.ttf` 尺寸、`assets/img/*` 分布、`assets/vendor` 内容、`.bi` 图标规则 | 本地 `du`/`grep` | 本仓库 |
| [MEAS] | 本报告实际运行：node 提取字符 + `uvx --from fonttools --with brotli pyftsubset` 实测 17MB→205KB（text subset）；全量 CJK 子集 5.4MB；本机 `uv/uvx 0.11.16` 可用、无 python | 本地执行 | 实测 |

> 备注：`[C3]` 明确 Squoosh 官方 CLI 已被作者弃用（2023-01-03 PR #1321 merged），故本报告**不使用 `@squoosh/cli`**，改用仍活跃的 `sharp-cli`；如需 Squoosh 式 UI/预多格式对比，可看社区 fork。`[C6]` 证实 `sharp-cli` 至今（2026-08）仍在发版。
