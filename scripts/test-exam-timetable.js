const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const built = url => read(path.join('_site', url, 'index.html'));
const html = fs.readFileSync(path.join(root, '_site/timetable/index.html'), 'utf8');
const data = JSON.parse(html.match(/<script id="exam-timetable-data"[^>]*>([\s\S]*?)<\/script>/)[1]);
assert.equal(data.exams.length, 41);
assert.equal(new Set(data.exams.map(e => e.id)).size, 41);
assert.equal(new Set(data.exams.map(e => e.code)).size, 41);
const subjects = new Set(data.subjects.map(s => s.name));
for (const exam of data.exams) {
  assert(subjects.has(exam.subject), exam.code);
  assert(['AS', 'A2'].includes(exam.cohort), exam.code);
  assert.equal(exam.grade, exam.cohort === 'AS' ? 'Grade 11' : 'Grade 12');
  assert.match(exam.date, /^2027-01-\d{2}$/);
  const date = new Date(exam.date + 'T12:00:00Z');
  assert.equal(new Intl.DateTimeFormat('en-GB', { weekday: 'long', timeZone: 'UTC' }).format(date), exam.day);
  assert.equal(new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(date), exam.date_formatted);
  assert.match(exam.duration, /^\d+h(?: \d+m)?$/);
}
assert.equal(data.exams.filter(e => e.cohort === 'AS').length, 18);
assert.equal(data.exams.filter(e => e.cohort === 'A2').length, 23);
// Official January 2027 PDF: Chemistry Paper 2 is on Thursday 14 January.
assert.equal(data.exams.find(e => e.code === 'CH02').date, '2027-01-14');
assert(fs.existsSync(path.join(root, '_site', data.series_info.pdf_link)));
const zhHtml = built('/zh/timetable/');
assert.match(read('timetable/index.md'), /^lang: en$/m);
assert.match(read('zh/timetable/index.md'), /^translation_of: \/timetable\/$/m);
for (const [page, lang, target] of [[html, 'en', '/zh/timetable/'], [zhHtml, 'zh-CN', '/timetable/']]) {
  assert(page.includes(`<html lang="${lang}">`));
  assert(page.match(/<a[^>]*id="languageSwitch"[^>]*>/)[0].includes(`href="${target}"`));
  assert(page.includes('hreflang="en" href="https://academic.kcisec.site/timetable/"'));
  assert(page.includes('hreflang="zh-CN" href="https://academic.kcisec.site/zh/timetable/"'));
  const nav = page.match(/<div class="site-nav-links"[^>]*>([\s\S]*?)<\/div>/)[1];
  const active = [...nav.matchAll(/<a[^>]*class="[^"]*\bactive\b[^"]*"[^>]*>/g)];
  assert.equal(active.length, 1);
  assert(active[0][0].includes(`href="${lang === 'en' ? '/timetable/' : '/zh/timetable/'}"`));
  const ui = JSON.parse(page.match(/<script id="exam-timetable-ui"[^>]*>([\s\S]*?)<\/script>/)[1]);
  assert.equal(ui.weekdays.length, 5);
  assert(page.includes(`<span>${ui.calendar}</span>`));
  assert(page.includes(`aria-label="${ui.details}"`));
}
assert.deepEqual(JSON.parse(zhHtml.match(/<script id="exam-timetable-data"[^>]*>([\s\S]*?)<\/script>/)[1]), data, 'Both languages must share the same examination data');

// Verify language-aware navigation on every translated page, including English fallbacks.
const translatedPages = fs.readdirSync(path.join(root, 'zh'), { recursive: true })
  .filter(file => /\.(md|markdown)$/.test(file))
  .map(file => read(path.join('zh', file)))
  .map(source => ({
    original: source.match(/^translation_of: (.+)$/m)?.[1].trim(),
    url: source.match(/^permalink: (.+)$/m)?.[1].trim()
  }))
  .filter(page => page.original && page.url);
const navUrls = ['/', '/alevel/', '/igcse/', '/timetable/', '/student-council/', '/contributors/', 'https://ericstone.top/exams/'];
for (const page of translatedPages) {
  const nav = built(page.url).match(/<div class="site-nav-links"[^>]*>([\s\S]*?)<\/div>/)[1];
  const links = [...nav.matchAll(/<a href="([^"]+)"/g)].map(match => match[1]);
  assert.deepEqual(links, navUrls.map(url => translatedPages.find(page => page.original === url)?.url || url), page.url);
  for (const url of links.filter(url => url.startsWith('/'))) assert(fs.existsSync(path.join(root, '_site', url, 'index.html')), `Broken navigation: ${page.url} -> ${url}`);
}
console.log('Timetable data passed: 41 unique papers, valid dates/cohorts/durations, CH02 regression and official PDF link.');
console.log(`Bilingual timetable and navigation passed on ${translatedPages.length} Chinese pages: paired switches, hreflang, active links, shared data and existing destinations.`);

// Exercise responsive defaults and the calendar's accessible date controls.
const vm = require('node:vm');
for (const width of [390, 1360]) {
  const buttons = ['calendar', 'list'].map(mode => ({
    attrs: { 'data-view-mode': mode },
    classList: { toggle() {} },
    getAttribute(key) { return this.attrs[key]; },
    setAttribute(key, value) { this.attrs[key] = value; },
    addEventListener(type, handler) { this[type] = handler; }
  }));
  const calendar = { style: {}, querySelectorAll: () => [] };
  const rootNode = {
    querySelector: selector => selector === '[data-timetable-calendar]' ? calendar : null,
    querySelectorAll: selector => selector === '[data-view-mode]' ? buttons : []
  };
  const ui = JSON.parse(zhHtml.match(/<script id="exam-timetable-ui"[^>]*>([\s\S]*?)<\/script>/)[1]);
  vm.runInNewContext(read('assets/js/exam_timetable.js'), {
    window: { innerWidth: width }, console, Intl, Date,
    document: {
      documentElement: { lang: 'zh-CN' },
      querySelector: () => rootNode,
      getElementById: id => ({
        'exam-timetable-data': { textContent: JSON.stringify(data) },
        'exam-timetable-ui': { textContent: JSON.stringify(ui) }
      })[id],
      addEventListener() {}
    }
  });
  assert.equal(calendar.style.display, width === 390 ? 'none' : 'block');
  assert.equal(buttons[1].attrs['aria-pressed'], String(width === 390));
  assert.match(calendar.innerHTML, /data-mobile-date="2027-01-05" aria-pressed="true" aria-label="[^"]*2027[^"]*4 场考试"/);
  buttons[0].click();
  assert.equal(calendar.style.display, 'block', 'The mobile default never prevents choosing the calendar');
  assert.equal(buttons[0].attrs['aria-pressed'], 'true');
}
console.log('Timetable interaction passed: responsive default, view switching and complete date labels.');
