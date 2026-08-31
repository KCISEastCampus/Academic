// extract_chars.mjs -- 从仓库 .md/.html 提取实际用字到 scripts/chars_site.txt
// 用途：为 MapleMono 字体子集化提供字符集（站点实际用字，动态与内容同步）。
// 运行：node scripts/extract_chars.mjs
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const SKIP = new Set(['assets', '_site', '.git', 'vendor', 'node_modules', '.jekyll-cache']);
const files = [];

(function walk(d) {
  for (const e of readdirSync(d, { withFileTypes: true })) {
    const p = join(d, e.name);
    if (e.isDirectory()) {
      if (SKIP.has(e.name)) continue;
      walk(p);
    } else if (/\.(md|html)$/.test(p)) {
      files.push(p);
    }
  }
})('.');

const cps = new Set();
for (let i = 0x20; i <= 0x7e; i++) cps.add(i); // 可打印 ASCII（含字母/数字/标点/空格）
for (const f of files) {
  let s;
  try { s = readFileSync(f, 'utf8'); } catch { continue; }
  for (const ch of s) {
    const c = ch.codePointAt(0);
    if (c >= 0x20 && (c <= 0x7e || c >= 0x80)) cps.add(c);
  }
}

const out = [...cps].sort((a, b) => a - b).map((c) => String.fromCodePoint(c)).join('');
writeFileSync('scripts/chars_site.txt', out);
console.log('files scanned:', files.length);
console.log('unique code points:', cps.size);
