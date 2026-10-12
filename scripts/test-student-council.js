const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const site = path.join(root, '_site');
const readPage = url => fs.readFileSync(path.join(site, url, 'index.html'), 'utf8');
const matches = (html, regex) => [...html.matchAll(regex)].map(match => match[1].trim());
const routes = ['', 'members/', 'alumni/', 'news/', 'news/recruitment/', 'news/logo-announcement/', 'news/events-260417/'];
const expectedNames = [
  'Eric Shi', 'James Wang', 'Leo Xie', 'Kathy Yue', 'Dada Du', 'Blanch Wang', 'Katniss Zhang', 'Rose Yang',
  'Jason Jiang', 'Henry Zhang', 'Alisa Liu', 'Jimmy Tang', 'Kevin Du', 'Mark Lin', 'Yoky Guo', 'Lucy Yang', 'Liberty Gong', 'Kevin Liu',
  'Marcia Ma', 'Mable Yang', 'Wendy Wang', 'Yiyi Zeng'
].sort();
const expectedChineseNames = [
  '石洪斌', '王铎', '解徐洺淏', '岳心怡', '杜翼陈', '王睿奇', '章梓彤', '杨月泽',
  '姜嘉鑫', '张梓涵', '刘卿竹', '唐浩宇', '杜艺歌', '林心悦', '郭幼茜', '杨璐欣', '龚曦屔', '刘光卿',
  '马艺涵', '杨依蒙', '汪雨彤', '曾伊依'
].sort();
for (const prefix of ['', '/zh']) {
  const lang = prefix ? 'zh-CN' : 'en';
  for (const route of routes) {
    const url = `${prefix}/student-council/${route}`;
    const html = readPage(url);
    assert(html.includes(`<html lang="${lang}">`), `${url}: document language`);
    assert(!html.includes('{{') && !html.includes('{%'), `${url}: fully rendered Liquid`);
    const alternate = `${prefix ? '' : '/zh'}/student-council/${route}`;
    assert(html.includes(`id="languageSwitch" href="${alternate}"`), `${url}: static language switch`);
    assert(html.includes(`hreflang="${prefix ? 'en' : 'zh-CN'}" href="https://academic.kcisec.site${alternate}"`), `${url}: reciprocal language metadata`);
    assert(html.includes(`href="${prefix}/student-council/"`), `${url}: static council navigation`);
    const content = html.match(/<main\b[\s\S]*?<\/main>/)[0];
    for (const href of matches(content, /href="([^"]*student-council[^"]*)"/g)) {
      const link = new URL(href, `https://academic.kcisec.site${url}`);
      const target = readPage(link.pathname);
      if (link.hash) assert(target.includes(`id="${decodeURIComponent(link.hash.slice(1))}"`), `${url}: tag/heading destination ${href}`);
    }
  }
  const members = readPage(`${prefix}/student-council/members/`);
  const names = [
    ...matches(members, new RegExp(`class="name" lang="${lang}">([^<]+)<`, 'g')),
    ...matches(members, new RegExp(`class="members-page-leader"><span>[^<]+<\\/span> <span lang="${lang}">([^<]+)<`, 'g'))
  ].sort();
  assert.deepEqual(names, prefix ? expectedChineseNames : expectedNames, `${lang}: exact localized roster`);
  const counts = matches(members, /class="members-page-card-subtitle">(\d+) [^<]+</g).map(Number);
  assert.deepEqual(counts, [9, 10, 3], `${lang}: counts include leaders`);
  assert.deepEqual(matches(members, /class="value">([^<]+)</g), ['22', '3']);
  const alumni = readPage(`${prefix}/student-council/alumni/`);
  assert.deepEqual(matches(alumni, /class="value">([^<]+)</g), ['2025-2026', '17', '5', '9'], `${lang}: historical statistics`);
  assert.equal((alumni.match(/class="grade-badge graduated"/g) || []).length, 5, `${lang}: graduation status remains intact`);
  assert(alumni.includes('谢秦一') && alumni.includes('钱俊希') && alumni.includes('11I'), `${lang}: historical records preserved`);
  const expectedExecutives = prefix ? ['石洪斌', '马艺涵', '姜嘉鑫'] : ['Eric Shi', 'Marcia Ma', 'Jason Jiang'];
  assert.deepEqual(matches(alumni, new RegExp(`class="executive-name"><span lang="${lang}">([^<]+)<`, 'g')), expectedExecutives, `${lang}: alumni executive names`);
  assert.deepEqual(matches(readPage(`${prefix}/student-council/`), new RegExp(`class="member-name"><span lang="${lang}">([^<]+)<`, 'g')), expectedExecutives, `${lang}: current executive names`);
  for (const route of ['', 'news/']) {
    const html = readPage(`${prefix}/student-council/${route}`);
    const urls = matches(html, route ? /class="news-title"[^>]*>\s*<a href="([^"]+)"/g : /<a href="([^"]+)" class="news-item"/g);
    assert.equal(urls.length, 3, `${lang}: three news entries`);
    assert.equal(new Set(urls).size, 3, `${lang}: no bilingual duplicates`);
    assert(urls.every(url => url.startsWith(`${prefix}/student-council/news/`)), `${lang}: news list language`);
    assert.deepEqual(matches(html, new RegExp(`class="news-author"><i[^>]*><\\/i> <span lang="${lang}">([^<]+)<`, 'g')), Array(3).fill(expectedExecutives[0]), `${lang}: news author names`);
  }
  for (const route of routes.filter(route => route.startsWith('news/') && route !== 'news/')) {
    const html = readPage(`${prefix}/student-council/${route}`);
    assert(html.includes(`class="post-author" lang="${lang}">${expectedExecutives[0]}</span>`), `${lang}: article author name`);
    const content = html.match(/<article class="post-content">([\s\S]*?)<\/article>/)[1];
    const anchor = prefix ? matches(content, /<span id="([^"]+)"><\/span>/g) : [];
    if (prefix) {
      assert.equal(anchor.length, 1, 'English heading alias remains reachable on the Chinese page');
      assert(readPage(`/student-council/${route}`).includes(`id="${anchor[0]}"`));
      assert(!content.includes('Note: This news') && !content.includes('Event Photo'), `${route}: Chinese article and image descriptions`);
    } else {
      assert(content.includes('Click Here') && content.includes('lang="zh-CN"'), `${route}: original bilingual article preserved`);
    }
    const inline = matches(html, /<script>([\s\S]*?)<\/script>/g).find(script => script.includes('post-back-button'));
    for (const [query, referrer, archive] of [['', '', false], ['?from=news_archive', '', true], ['', `https://academic.kcisec.site${prefix}/student-council/news/`, true]]) {
      const attrs = {};
      const label = {};
      vm.runInNewContext(inline, {
        URLSearchParams,
        window: { location: { search: query } },
        document: { referrer, getElementById: id => id === 'post-back-button' ? { setAttribute: (key, value) => { attrs[key] = value; } } : label }
      });
      if (archive) {
        assert.equal(attrs.href, `${prefix}/student-council/news/`);
        assert.equal(label.textContent, prefix ? '返回全部动态' : 'Back to All News');
        assert.equal(attrs['aria-label'], label.textContent);
      } else assert.deepEqual(attrs, {});
    }
  }
}
console.log('Student Council passed: 7 page pairs, 22 names in each language, localized executive and author names, department counts, historical records, unique news lists, anchors and localized return buttons.');
