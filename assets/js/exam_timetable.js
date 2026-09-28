/**
 * OxfordAQA Exam Timetable Interactive Filter & Search
 * All English UI for KCIS East Campus
 */
(function () {
  'use strict';

  var root = document.querySelector('[data-exam-timetable]');
  var dataNode = document.getElementById('exam-timetable-data');

  if (!root || !dataNode) return;

  var timetableData;
  try {
    timetableData = JSON.parse(dataNode.textContent);
  } catch (err) {
    console.error('Failed to parse exam timetable data', err);
    return;
  }

  var exams = timetableData.exams || [];
  var subjects = timetableData.subjects || [];
  var currentCohort = 'ALL';
  var currentSubject = 'ALL';
  var searchTerm = '';

  var daysContainer = root.querySelector('[data-timetable-days]');
  var cohortButtons = root.querySelectorAll('[data-cohort-filter]');
  var subjectSelect = root.querySelector('[data-subject-filter]');
  var searchInput = root.querySelector('[data-timetable-search]');
  var countDisplay = root.querySelector('[data-filter-count]');

  var subjectIcons = {};
  subjects.forEach(function (s) {
    subjectIcons[s.name] = s.icon || 'bi-bookmark';
  });

  function escapeHtml(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function getMatchingExams() {
    return exams.filter(function (exam) {
      var matchesCohort = (currentCohort === 'ALL' || exam.cohort === currentCohort);
      var matchesSubject = (currentSubject === 'ALL' || exam.subject === currentSubject);
      
      var haystack = [
        exam.subject,
        exam.code,
        exam.paper,
        exam.title,
        exam.cohort,
        exam.grade
      ].join(' ').toLowerCase();

      var matchesSearch = !searchTerm || haystack.indexOf(searchTerm) !== -1;
      return matchesCohort && matchesSubject && matchesSearch;
    });
  }

  function renderRow(exam) {
    var isA2 = exam.cohort === 'A2';
    var cohortClass = isA2 ? 'cohort-a2' : 'cohort-as';
    var cohortLabel = isA2 ? 'A2 · G12' : 'AS · G11';

    return [
      '<div class="ledger-row" data-cohort="' + escapeHtml(exam.cohort) + '" role="row">',
        '<div class="ledger-col-cohort" role="cell">',
          '<span class="ledger-badge ' + cohortClass + '">' + escapeHtml(cohortLabel) + '</span>',
        '</div>',
        '<div class="ledger-col-code" role="cell">',
          '<code class="unit-code">' + escapeHtml(exam.code) + '</code>',
        '</div>',
        '<div class="ledger-col-details" role="cell">',
          '<div class="exam-subject-line">',
            '<strong class="exam-subject">' + escapeHtml(exam.subject) + '</strong>',
            '<span class="exam-paper-sep">·</span>',
            '<span class="exam-paper">' + escapeHtml(exam.paper) + '</span>',
          '</div>',
          '<div class="exam-title-line">' + escapeHtml(exam.title) + '</div>',
        '</div>',
        '<div class="ledger-col-duration" role="cell">',
          '<span class="duration-pill"><i class="bi bi-clock"></i> ' + escapeHtml(exam.duration) + '</span>',
        '</div>',
      '</div>'
    ].join('');
  }

  function render() {
    var matched = getMatchingExams();

    if (countDisplay) {
      countDisplay.textContent = matched.length;
    }

    if (!matched.length) {
      daysContainer.innerHTML = [
        '<div class="timetable-empty">',
          '<i class="bi bi-calendar-x"></i>',
          '<h4>No examinations match your filter</h4>',
          '<p>Try selecting another cohort, subject, or clearing the search keyword.</p>',
        '</div>'
      ].join('');
      return;
    }

    // Group matched exams by date
    var groups = {};
    matched.forEach(function (exam) {
      if (!groups[exam.date]) {
        groups[exam.date] = {
          date: exam.date,
          date_formatted: exam.date_formatted,
          day: exam.day,
          items: []
        };
      }
      groups[exam.date].items.push(exam);
    });

    var sortedDates = Object.keys(groups).sort();

    daysContainer.innerHTML = sortedDates.map(function (dKey) {
      var grp = groups[dKey];
      var dateObj = new Date(dKey + 'T12:00:00');
      var dateFormatted = new Intl.DateTimeFormat('en-GB', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }).format(dateObj);

      var rowsHtml = grp.items.map(renderRow).join('');
      var paperWord = grp.items.length === 1 ? 'paper' : 'papers';

      return [
        '<section class="ledger-day-section" aria-labelledby="date-' + escapeHtml(dKey) + '">',
          '<div class="ledger-day-header">',
            '<h2 id="date-' + escapeHtml(dKey) + '" class="ledger-date-title">' + escapeHtml(dateFormatted) + '</h2>',
            '<span class="ledger-day-count">' + grp.items.length + ' ' + paperWord + '</span>',
          '</div>',
          '<div class="ledger-day-table" role="table" aria-label="' + escapeHtml(dateFormatted) + ' examinations">',
            rowsHtml,
          '</div>',
        '</section>'
      ].join('');
    }).join('');
  }

  // Cohort Tab Clicks
  cohortButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      currentCohort = btn.getAttribute('data-cohort');
      cohortButtons.forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      render();
    });
  });

  // Subject Dropdown Change
  if (subjectSelect) {
    subjectSelect.addEventListener('change', function () {
      currentSubject = subjectSelect.value;
      render();
    });
  }

  // Search Input
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      searchTerm = searchInput.value.trim().toLowerCase();
      render();
    });
  }

  // Initial render
  render();
})();
