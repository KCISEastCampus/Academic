const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
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
console.log('Timetable data passed: 41 unique papers, valid dates/cohorts/durations, CH02 regression and official PDF link.');
