# Chinese web font

Noto Sans SC is self-hosted under SIL Open Font License 1.1; see [OFL.txt](OFL.txt).
Source: [Google Fonts](https://github.com/google/fonts/tree/a85815a42757630ce188fdad368c2dfc444d4773/ofl/notosanssc), commit `a85815a42757630ce188fdad368c2dfc444d4773`.
Original file: `NotoSansSC[wght].ttf`, SHA-256 `a3041811a78c361b1de50f953c805e0244951c21c5bd412f7232ef0d899af0da`.

The two WOFF2 subsets preserve weights 100–900 and cover all 29,310 CJK code points in this source. Latin and mathematical alphabets are excluded so English text and MathJax retain their fonts. The common subset contains GB2312 Chinese, CJK punctuation/compatibility symbols and the two additional characters used by current pages; other supported CJK characters use the extended subset. Browsers fetch a subset only when its characters occur. Local YaHei/PingFang/Noto faces take priority for Chinese; otherwise the downloaded fonts provide consistent sans-serif Chinese on phones.

To reproduce, download the pinned TTF above, then run the following from the repository root using `uv run --with fonttools==4.66.1 --with brotli python rebuild.py SOURCE.ttf`. The source font is not needed to build or serve the site.

```python
import re
import sys
from hashlib import sha256
from pathlib import Path
from fontTools import subset

source = Path(sys.argv[1])
assert sha256(source.read_bytes()).hexdigest() == 'a3041811a78c361b1de50f953c805e0244951c21c5bd412f7232ef0d899af0da'
css = Path('assets/css/fonts/chinese.css').read_text()
for filename, ranges in re.findall(r"src: url\('/assets/fonts/noto-sans-sc/([^']+)'\)[\s\S]*?unicode-range: ([^;]+);", css):
    subset.main([str(source), '--unicodes=' + ranges.replace('U+', ''),
                 '--flavor=woff2', '--notdef-outline',
                 '--output-file=assets/fonts/noto-sans-sc/' + filename])
```
