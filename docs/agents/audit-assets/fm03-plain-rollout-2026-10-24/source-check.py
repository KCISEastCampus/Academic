from pathlib import Path
import hashlib,json,re,subprocess,sys
sys.stdout.reconfigure(encoding='utf-8')
root=Path('.')
out=Path(__file__).parent
preserved=json.loads((out/'preserved-source-hashes.json').read_text(encoding='utf-8'))
assert all(hashlib.sha256(Path(p).read_bytes()).hexdigest()==h for p,h in preserved.items()),'Approved sample or shared layout changed'
approved={'hyperbolic-functions','first-order-differential-equations','second-order-differential-equations'}
files=[p for prefix in ['','zh/'] for p in sorted(Path(prefix+'alevel/a2-further-mathematics').glob('*.md')) if p.stem not in approved]
assert len(files)==28
historical=json.loads((out/'previous-heading-anchors.json').read_text(encoding='utf-8'))
counts={'pages':len(files),'oldPrompts':0,'oldExplicitIds':0,'oldHeadings':0,'preservedSources':len(preserved)}
for p in files:
 name=p.as_posix(); old=subprocess.check_output(['git','show','19db6ca:'+name],encoding='utf-8'); current=p.read_text(encoding='utf-8')
 prompts=re.findall(r'^>.*$|^\*\*Question:\*\*.*$',old,re.M)
 assert all(s in current for s in prompts),(name,'original prompt changed')
 counts['oldPrompts']+=len(prompts)
 ids=[m[0] or m[1] for m in re.findall(r'\{#([^}]+)\}|\bid="([^"]+)"',old)]
 html=Path('_site',p.parent,'' if p.stem=='index' else p.stem,'index.html').read_text(encoding='utf-8')
 assert all(f'id="{s}"' in html for s in ids),(name,'explicit ID missing')
 counts['oldExplicitIds']+=len(ids)
for name,ids in historical.items():
 p=Path(name); html=Path('_site',p.parent,'' if p.stem=='index' else p.stem,'index.html').read_text(encoding='utf-8')
 assert all(f'id="{s}"' in html for s in ids),(name,'historical heading missing')
 counts['oldHeadings']+=len(ids)
(out/'final').mkdir(exist_ok=True)
(out/'final/source-check-results.json').write_text(json.dumps(counts,indent=2)+'\n',encoding='utf-8')
print(json.dumps(counts))
