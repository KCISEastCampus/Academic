/**
 * OxfordAQA Exam Timetable Interactive Calendar & Schedule Ledger
 * Designed for KCIS East Campus · OxfordAQA International AS & A2
 * 
 * Features:
 * - Interactive Month Calendar Grid (Default View)
 * - Daily Schedule Ledger (List View)
 * - View Switcher: Calendar vs List
 * - Dynamic Filtering: Cohort (AS/A2), Subject, and Search keywords
 * - Responsive Mobile Day Inspector (Date dots + Daily Agenda)
 * - Full Exam Paper Details Modal with homeroom teacher note and PDF link
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
  var currentViewMode = 'calendar'; // Default to calendar view
  var selectedMobileDate = '2027-01-05'; // Default to first exam date

  // DOM Elements
  var calendarContainer = root.querySelector('[data-timetable-calendar]');
  var daysContainer = root.querySelector('[data-timetable-days]');
  var cohortButtons = root.querySelectorAll('[data-cohort-filter]');
  var subjectSelect = root.querySelector('[data-subject-filter]');
  var searchInput = root.querySelector('[data-timetable-search]');
  var countDisplay = root.querySelector('[data-filter-count]');
  var viewModeButtons = root.querySelectorAll('[data-view-mode]');

  // Modal Elements
  var modalBackdrop = document.getElementById('examDetailModal');
  var modalCloseBtn = document.getElementById('modalCloseBtn');
  var modalDismissBtn = document.getElementById('modalDismissBtn');
  var modalExamCohort = document.getElementById('modalExamCohort');
  var modalExamCode = document.getElementById('modalExamCode');
  var modalExamSubject = document.getElementById('modalExamSubject');
  var modalExamPaper = document.getElementById('modalExamPaper');
  var modalExamTitle = document.getElementById('modalExamTitle');
  var modalExamDate = document.getElementById('modalExamDate');
  var modalExamDay = document.getElementById('modalExamDay');
  var modalExamDuration = document.getElementById('modalExamDuration');
  var modalExamGrade = document.getElementById('modalExamGrade');

  function escapeHtml(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Find exam by ID or code
  function findExamById(id) {
    return exams.find(function (e) {
      return e.id === id || e.code === id;
    });
  }

  var modalTrigger = null;
  var previousBodyOverflow = "";

  // Open Exam Detail Modal
  function openExamModal(exam) {
    if (!modalBackdrop || !exam) return;

    modalTrigger = document.activeElement;
    previousBodyOverflow = document.body.style.overflow;
    var isA2 = exam.cohort === 'A2';
    if (modalExamCohort) {
      modalExamCohort.textContent = exam.cohort;
      modalExamCohort.className = 'ledger-badge ' + (isA2 ? 'cohort-a2' : 'cohort-as');
    }
    if (modalExamCode) modalExamCode.textContent = exam.code;
    if (modalExamSubject) modalExamSubject.textContent = exam.subject;
    if (modalExamPaper) modalExamPaper.textContent = exam.paper;
    if (modalExamTitle) modalExamTitle.textContent = exam.title;
    if (modalExamDate) modalExamDate.textContent = exam.date_formatted;
    if (modalExamDay) modalExamDay.textContent = exam.day;
    if (modalExamDuration) modalExamDuration.textContent = exam.duration;
    if (modalExamGrade) modalExamGrade.textContent = exam.grade + ' · ' + (isA2 ? 'A2 Level' : 'AS Level');

    modalBackdrop.classList.add('is-open');
    modalBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (modalCloseBtn) modalCloseBtn.focus();
  }

  // Close Exam Detail Modal
  function closeExamModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('is-open');
    modalBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = previousBodyOverflow;
    if (modalTrigger && modalTrigger.isConnected) modalTrigger.focus();
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeExamModal);
  if (modalDismissBtn) modalDismissBtn.addEventListener('click', closeExamModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', function (e) {
      if (e.target === modalBackdrop || e.target.classList.contains('exam-modal-dialog')) {
        closeExamModal();
      }
    });
  }

  document.addEventListener('keydown', function (e) {
    if (!modalBackdrop || !modalBackdrop.classList.contains('is-open')) return;
    if (e.key === 'Escape') {
      closeExamModal();
    } else if (e.key === 'Tab') {
      var controls = modalBackdrop.querySelectorAll('button:not([disabled]), a[href]');
      var first = controls[0];
      var last = controls[controls.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  // Filter matching exams
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

  // Render Single Row (List View)
  function renderRow(exam) {
    var isA2 = exam.cohort === 'A2';
    var cohortClass = isA2 ? 'cohort-a2' : 'cohort-as';
    var cohortLabel = isA2 ? 'A2 · G12' : 'AS · G11';

    return [
      '<div class="ledger-row" data-cohort="' + escapeHtml(exam.cohort) + '" data-exam-id="' + escapeHtml(exam.id) + '" role="row" style="cursor: pointer;" title="Click to view full paper details">',
        '<div class="ledger-col-cohort" role="cell">',
          '<span class="ledger-badge ' + cohortClass + '">' + escapeHtml(cohortLabel) + '</span>',
        '</div>',
        '<div class="ledger-col-code" role="cell">',
          '<button type="button" class="unit-code exam-details-trigger" aria-label="View details for ' + escapeHtml(exam.code) + '">' + escapeHtml(exam.code) + '</button>',
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

  // Render List View (Ledger Stream)
  function renderListView(matched) {
    if (!daysContainer) return;

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

    // Attach row click listeners for details
    daysContainer.querySelectorAll('.ledger-row').forEach(function (row) {
      row.addEventListener('click', function () {
        var examId = row.getAttribute('data-exam-id');
        var exam = findExamById(examId);
        if (exam) openExamModal(exam);
      });
    });
  }

  // Render Calendar View (Month Grid)
  function renderCalendarView(matched) {
    if (!calendarContainer) return;

    if (!matched.length) {
      calendarContainer.innerHTML = '<div class="timetable-empty"><h4>No examinations match your filter</h4><p>Try another cohort or subject, or clear the search.</p></div>';
      return;
    }

    var examDateMap = {};
    matched.forEach(function (exam) {
      if (!examDateMap[exam.date]) {
        examDateMap[exam.date] = [];
      }
      examDateMap[exam.date].push(exam);
    });

    if (!examDateMap[selectedMobileDate]) {
      selectedMobileDate = Object.keys(examDateMap).sort()[0];
    }

    // Calendar Header
    var headerHtml = [
      '<div class="cal-header-bar">',
        '<div class="cal-month-title">',
          '<i class="bi bi-calendar3 text-primary"></i>',
          '<span>January 2027</span>',
          '<span class="badge bg-body-secondary text-body-secondary border ms-2 fw-normal" style="font-size: 0.72rem;">1X27 Series</span>',
        '</div>',
        '<div class="cal-legend">',
          '<span class="cal-legend-item"><span class="cal-legend-dot as"></span> AS · Grade 11</span>',
          '<span class="cal-legend-item"><span class="cal-legend-dot a2"></span> A2 · Grade 12</span>',
        '</div>',
      '</div>'
    ].join('');

    // Desktop 7-Column Grid
    // Jan 1 2027 was Friday. In Mon-Sun format:
    // Mon Dec 28, Tue Dec 29, Wed Dec 30, Thu Dec 31
    // Jan 1 to Jan 31
    var gridDays = [];
    
    // Padding Dec 2026 days
    gridDays.push({ date: '2026-12-28', num: 28, isOtherMonth: true, isWeekend: false });
    gridDays.push({ date: '2026-12-29', num: 29, isOtherMonth: true, isWeekend: false });
    gridDays.push({ date: '2026-12-30', num: 30, isOtherMonth: true, isWeekend: false });
    gridDays.push({ date: '2026-12-31', num: 31, isOtherMonth: true, isWeekend: false });

    // Jan 2027 days (1 to 31)
    for (var d = 1; d <= 31; d++) {
      var dStr = '2027-01-' + (d < 10 ? '0' + d : d);
      var dayOfWeek = new Date(dStr + 'T12:00:00').getDay(); // 0 is Sun, 6 is Sat
      var isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);
      gridDays.push({ date: dStr, num: d, isOtherMonth: false, isWeekend: isWeekend });
    }

    var weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    var weekdaysHtml = [
      '<div class="cal-weekdays">',
        weekdays.map(function (w, i) {
          var isWk = (i >= 5);
          return '<div class="cal-weekday ' + (isWk ? 'is-weekend' : '') + '">' + w + '</div>';
        }).join(''),
      '</div>'
    ].join('');

    var cellsHtml = gridDays.map(function (day) {
      var dayExams = examDateMap[day.date] || [];
      var hasExams = dayExams.length > 0;
      var cellClasses = ['cal-cell'];

      if (day.isOtherMonth) cellClasses.push('is-other-month');
      if (day.isWeekend) cellClasses.push('is-weekend');
      if (hasExams) cellClasses.push('has-exams');

      var countBadge = hasExams ? '<span class="cal-day-count">' + dayExams.length + 'p</span>' : '';

      var chipsHtml = dayExams.map(function (ex) {
        var isA2 = ex.cohort === 'A2';
        var cohortClass = isA2 ? 'cohort-a2' : 'cohort-as';
        return [
          '<button type="button" class="cal-exam-chip ' + cohortClass + '" data-exam-id="' + escapeHtml(ex.id) + '" title="' + escapeHtml(ex.code + ' ' + ex.subject + ': ' + ex.title + ' (' + ex.duration + ')') + '">',
            '<div class="cal-chip-top">',
              '<span class="cal-chip-code">' + escapeHtml(ex.code) + '</span>',
              '<span class="cal-chip-duration">' + escapeHtml(ex.duration) + '</span>',
            '</div>',
            '<div class="cal-chip-title">' + escapeHtml(ex.subject + ' · ' + ex.paper) + '</div>',
          '</button>'
        ].join('');
      }).join('');

      return [
        '<div class="' + cellClasses.join(' ') + '">',
          '<div class="cal-cell-header">',
            '<span class="cal-day-num">' + day.num + '</span>',
            countBadge,
          '</div>',
          '<div class="cal-cell-exams">',
            chipsHtml,
          '</div>',
        '</div>'
      ].join('');
    }).join('');

    var desktopGridHtml = [
      '<div class="cal-grid-wrapper">',
        weekdaysHtml,
        '<div class="cal-days-grid">',
          cellsHtml,
        '</div>',
      '</div>'
    ].join('');

    // Mobile View (< 768px): Compact Matrix + Selected Day Inspector
    var mobileDaysHtml = gridDays.map(function (day) {
      var dayExams = examDateMap[day.date] || [];
      var hasExams = dayExams.length > 0;
      var isSelected = (day.date === selectedMobileDate);
      var dayClasses = ['cal-mobile-day'];

      if (day.isOtherMonth) dayClasses.push('is-other-month');
      if (hasExams) dayClasses.push('has-exams');
      if (isSelected) dayClasses.push('is-selected');

      var dotsHtml = '';
      if (hasExams) {
        var hasAS = dayExams.some(function (e) { return e.cohort === 'AS'; });
        var hasA2 = dayExams.some(function (e) { return e.cohort === 'A2'; });
        dotsHtml = '<div class="cal-mobile-dots">' +
          (hasAS ? '<span class="cal-dot as"></span>' : '') +
          (hasA2 ? '<span class="cal-dot a2"></span>' : '') +
        '</div>';
      }

      return [
        '<button type="button" class="' + dayClasses.join(' ') + '" data-mobile-date="' + escapeHtml(day.date) + '" ' + (day.isOtherMonth ? 'disabled' : '') + '>',
          '<span class="cal-mobile-num">' + day.num + '</span>',
          dotsHtml,
        '</button>'
      ].join('');
    }).join('');

    // Selected Day Agenda for Mobile
    var selectedDateExams = examDateMap[selectedMobileDate] || [];
    var selectedDateObj = new Date(selectedMobileDate + 'T12:00:00');
    var selectedDateTitle = new Intl.DateTimeFormat('en-GB', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }).format(selectedDateObj);

    var mobileCardsHtml = '';
    if (selectedDateExams.length > 0) {
      mobileCardsHtml = selectedDateExams.map(function (ex) {
        var isA2 = ex.cohort === 'A2';
        return [
          '<button type="button" class="cal-agenda-card ' + (isA2 ? 'cohort-a2' : 'cohort-as') + '" data-exam-id="' + escapeHtml(ex.id) + '">',
            '<div class="d-flex align-items-center gap-2">',
              '<span class="ledger-badge ' + (isA2 ? 'cohort-a2' : 'cohort-as') + '">' + ex.cohort + '</span>',
              '<div>',
                '<strong class="d-block" style="font-size: 0.88rem;">' + escapeHtml(ex.subject + ' · ' + ex.code) + '</strong>',
                '<small class="text-muted">' + escapeHtml(ex.paper) + '</small>',
              '</div>',
            '</div>',
            '<span class="duration-pill"><i class="bi bi-clock"></i> ' + escapeHtml(ex.duration) + '</span>',
          '</button>'
        ].join('');
      }).join('');
    } else {
      mobileCardsHtml = '<p class="text-muted small text-center my-3">No examinations scheduled on this date.</p>';
    }

    var mobileViewHtml = [
      '<div class="cal-mobile-view">',
        '<div class="cal-mobile-matrix">',
          weekdays.map(function (w) { return '<div class="cal-mobile-weekday">' + w + '</div>'; }).join(''),
          mobileDaysHtml,
        '</div>',
        '<div class="cal-mobile-agenda">',
          '<div class="cal-agenda-header">',
            '<h3 class="cal-agenda-date">' + selectedDateTitle + '</h3>',
            '<span class="badge bg-body-secondary text-body-secondary border">' + selectedDateExams.length + ' scheduled</span>',
          '</div>',
          '<div class="cal-agenda-cards">',
            mobileCardsHtml,
          '</div>',
        '</div>',
      '</div>'
    ].join('');

    calendarContainer.innerHTML = headerHtml + desktopGridHtml + mobileViewHtml;

    // Attach exam chip click handlers
    calendarContainer.querySelectorAll('.cal-exam-chip, .cal-agenda-card').forEach(function (chip) {
      chip.addEventListener('click', function (e) {
        e.stopPropagation();
        var examId = chip.getAttribute('data-exam-id');
        var exam = findExamById(examId);
        if (exam) openExamModal(exam);
      });
    });

    // Attach mobile date selector
    calendarContainer.querySelectorAll('.cal-mobile-day').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var d = btn.getAttribute('data-mobile-date');
        if (d) {
          selectedMobileDate = d;
          renderCalendarView(matched);
        }
      });
    });
  }

  // Master Render function
  function render() {
    var matched = getMatchingExams();

    if (countDisplay) {
      countDisplay.textContent = matched.length;
    }

    renderCalendarView(matched);
    renderListView(matched);

    // Toggle container display based on currentViewMode
    if (currentViewMode === 'calendar') {
      if (calendarContainer) calendarContainer.style.display = 'block';
      if (daysContainer) daysContainer.style.display = 'none';
    } else {
      if (calendarContainer) calendarContainer.style.display = 'none';
      if (daysContainer) daysContainer.style.display = 'block';
    }
  }

  // View Switcher (Calendar vs List)
  viewModeButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      currentViewMode = btn.getAttribute('data-view-mode');
      viewModeButtons.forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      render();
    });
  });

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
