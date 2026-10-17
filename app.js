/**
 * NPTEL AI Safety & Alignment - Interactive Quiz Application
 * Handles all 12 assignments (141 questions), exam & study modes,
 * scoring evaluation, wrongly-answered filtering, and retries.
 */

// Application State
const state = {
  allAssignments: typeof QUIZ_DATA !== 'undefined' ? QUIZ_DATA : [],
  currentAssignmentIdx: 0, // 0 for Assignment 1, 11 for Assignment 12, or 'all'
  currentQuestions: [],
  userAnswers: {}, // { [qId]: ['a'] or ['a', 'c'] or '91' }
  flagged: new Set(),
  isSubmitted: false,
  isStudyMode: false,
  viewMode: 'sheet', // 'sheet' or 'focus'
  focusIndex: 0,
  activeFilter: 'wrong', // 'wrong', 'correct', 'unanswered', 'all'
  timerSeconds: 0,
  timerInterval: null,
  isTimerRunning: true,
  evaluation: null // { total, correct, wrong, unanswered, scorePct, results: { [qId]: { isCorrect, isUnanswered, userAns, correctAns } } }
};

// DOM Elements
const DOM = {
  themeToggleBtn: document.getElementById('themeToggleBtn'),
  themeIconSun: document.getElementById('themeIconSun'),
  themeIconMoon: document.getElementById('themeIconMoon'),
  assignmentSelect: document.getElementById('assignmentSelect'),
  modeQuizBtn: document.getElementById('modeQuizBtn'),
  modeStudyBtn: document.getElementById('modeStudyBtn'),
  timerDisplay: document.getElementById('timerDisplay'),
  currentAssignmentLabel: document.getElementById('currentAssignmentLabel'),
  questionCountLabel: document.getElementById('questionCountLabel'),
  progressStatusText: document.getElementById('progressStatusText'),
  progressBarFill: document.getElementById('progressBarFill'),
  viewSheetBtn: document.getElementById('viewSheetBtn'),
  viewFocusBtn: document.getElementById('viewFocusBtn'),
  questionsContainer: document.getElementById('questionsContainer'),
  focusNavControls: document.getElementById('focusNavControls'),
  prevQuestionBtn: document.getElementById('prevQuestionBtn'),
  nextQuestionBtn: document.getElementById('nextQuestionBtn'),
  focusCounterDisplay: document.getElementById('focusCounterDisplay'),
  submitBar: document.getElementById('submitBar'),
  submitRemainingText: document.getElementById('submitRemainingText'),
  resetAnswersBtn: document.getElementById('resetAnswersBtn'),
  submitQuizBtn: document.getElementById('submitQuizBtn'),
  resultsCard: document.getElementById('resultsCard'),
  scoreDialCircle: document.getElementById('scoreDialCircle'),
  scorePercentage: document.getElementById('scorePercentage'),
  scoreFraction: document.getElementById('scoreFraction'),
  resultsBadge: document.getElementById('resultsBadge'),
  resultsHeadline: document.getElementById('resultsHeadline'),
  resultsMessage: document.getElementById('resultsMessage'),
  metricTotal: document.getElementById('metricTotal'),
  metricCorrect: document.getElementById('metricCorrect'),
  metricWrong: document.getElementById('metricWrong'),
  metricUnanswered: document.getElementById('metricUnanswered'),
  retakeWrongBtn: document.getElementById('retakeWrongBtn'),
  retakeAllBtn: document.getElementById('retakeAllBtn'),
  printReportBtn: document.getElementById('printReportBtn'),
  countWrongTab: document.getElementById('countWrongTab'),
  countCorrectTab: document.getElementById('countCorrectTab'),
  countUnansweredTab: document.getElementById('countUnansweredTab'),
  countAllTab: document.getElementById('countAllTab'),
  sidebarDrawer: document.getElementById('sidebarDrawer'),
  drawerToggleBtn: document.getElementById('drawerToggleBtn'),
  sidebarAssignBadge: document.getElementById('sidebarAssignBadge'),
  questionPaletteGrid: document.getElementById('questionPaletteGrid'),
  resultsLegend: document.getElementById('resultsLegend'),
  statAnsweredCount: document.getElementById('statAnsweredCount'),
  statRemainingCount: document.getElementById('statRemainingCount'),
  statFlaggedCount: document.getElementById('statFlaggedCount'),
  weekPillsContainer: document.getElementById('weekPillsContainer'),
  confirmModal: document.getElementById('confirmModal'),
  confirmModalText: document.getElementById('confirmModalText'),
  modalReviewBtn: document.getElementById('modalReviewBtn'),
  modalSubmitAnywayBtn: document.getElementById('modalSubmitAnywayBtn'),
  imageModal: document.getElementById('imageModal'),
  closeImageModalBtn: document.getElementById('closeImageModalBtn'),
  modalEnlargedImage: document.getElementById('modalEnlargedImage'),
  imageModalCaption: document.getElementById('imageModalCaption'),
  toastNotification: document.getElementById('toastNotification')
};

// ==========================================================================
// Initialization
// ==========================================================================
function init() {
  initTheme();
  populateAssignmentSelector();
  populateWeekPills();
  setupEventListeners();
  loadAssignment(0); // Load Assignment 1 by default
  startTimer();
}

// Populate Assignment Dropdown
function populateAssignmentSelector() {
  DOM.assignmentSelect.innerHTML = '';
  
  // Single assignments
  state.allAssignments.forEach((ass, idx) => {
    const opt = document.createElement('option');
    opt.value = idx;
    opt.textContent = `${ass.title} (${ass.count} Qs)`;
    DOM.assignmentSelect.appendChild(opt);
  });

  // Grand Mock Exam option (All 12 Assignments combined)
  const allOpt = document.createElement('option');
  allOpt.value = 'all';
  const totalCount = state.allAssignments.reduce((acc, a) => acc + a.count, 0);
  allOpt.textContent = `⭐ All 12 Assignments Combined (${totalCount} Qs)`;
  DOM.assignmentSelect.appendChild(allOpt);
}

// Populate Quick Jump Week Pills (1..12)
function populateWeekPills() {
  DOM.weekPillsContainer.innerHTML = '';
  state.allAssignments.forEach((ass, idx) => {
    const btn = document.createElement('button');
    btn.className = `week-pill-btn ${idx === 0 ? 'active' : ''}`;
    btn.textContent = `W${idx + 1}`;
    btn.title = ass.title;
    btn.addEventListener('click', () => {
      DOM.assignmentSelect.value = idx;
      loadAssignment(idx);
    });
    DOM.weekPillsContainer.appendChild(btn);
  });
}

// ==========================================================================
// Assignment Loading & Reset
// ==========================================================================
function loadAssignment(val, customQuestions = null) {
  state.currentAssignmentIdx = val;
  state.userAnswers = {};
  state.flagged.clear();
  state.isSubmitted = false;
  state.evaluation = null;
  state.focusIndex = 0;
  state.timerSeconds = 0;

  // Determine questions list
  if (customQuestions) {
    state.currentQuestions = customQuestions;
    DOM.currentAssignmentLabel.textContent = "Custom Practice (Wrong Questions Only)";
    DOM.sidebarAssignBadge.textContent = "Retry";
  } else if (val === 'all') {
    state.currentQuestions = [];
    state.allAssignments.forEach(a => {
      state.currentQuestions.push(...a.questions);
    });
    DOM.currentAssignmentLabel.textContent = "Grand Mock Exam (All 12 Assignments)";
    DOM.sidebarAssignBadge.textContent = "All Weeks";
  } else {
    const ass = state.allAssignments[parseInt(val, 10)];
    state.currentQuestions = [...ass.questions];
    DOM.currentAssignmentLabel.textContent = ass.title;
    DOM.sidebarAssignBadge.textContent = `Week ${parseInt(val, 10) + 1}`;
  }

  DOM.questionCountLabel.textContent = `${state.currentQuestions.length} Questions`;

  // Update pills active status
  const pills = DOM.weekPillsContainer.querySelectorAll('.week-pill-btn');
  pills.forEach((pill, idx) => {
    pill.classList.toggle('active', val !== 'all' && parseInt(val, 10) === idx);
  });

  // UI Resets
  DOM.resultsCard.classList.add('hidden');
  DOM.resultsLegend.classList.add('hidden');
  DOM.submitBar.classList.remove('hidden');

  renderQuestions();
  renderPalette();
  updateProgressUI();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================================================
// Rendering Questions
// ==========================================================================
function renderQuestions() {
  DOM.questionsContainer.innerHTML = '';

  const questionsToRender = state.isSubmitted && state.activeFilter !== 'all' 
    ? getFilteredQuestions() 
    : state.currentQuestions;

  if (questionsToRender.length === 0) {
    DOM.questionsContainer.innerHTML = `
      <div class="glass-panel" style="padding: 3rem; text-align: center;">
        <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">No questions match this filter</h3>
        <p style="color: var(--text-muted);">Switch to another filter tab above to view other questions.</p>
      </div>
    `;
    return;
  }

  questionsToRender.forEach((q, idx) => {
    const isFocusTarget = state.viewMode === 'focus' ? (idx === state.focusIndex) : true;
    const card = createQuestionCard(q, idx, isFocusTarget);
    DOM.questionsContainer.appendChild(card);
  });

  updateFocusNavUI();
}

function getFilteredQuestions() {
  if (!state.evaluation) return state.currentQuestions;
  return state.currentQuestions.filter(q => {
    const evalItem = state.evaluation.results[q.id];
    if (!evalItem) return true;
    if (state.activeFilter === 'wrong') return !evalItem.isCorrect && !evalItem.isUnanswered;
    if (state.activeFilter === 'correct') return evalItem.isCorrect;
    if (state.activeFilter === 'unanswered') return evalItem.isUnanswered;
    return true;
  });
}

function createQuestionCard(q, displayIdx, isVisible = true) {
  const card = document.createElement('article');
  card.className = `question-card glass-panel ${!isVisible ? 'hidden' : ''}`;
  card.id = `q_card_${q.id}`;

  const isFlagged = state.flagged.has(q.id);
  const userAns = state.userAnswers[q.id];
  const evalItem = state.evaluation ? state.evaluation.results[q.id] : null;

  // Add evaluation classes if submitted
  if (evalItem) {
    if (evalItem.isCorrect) card.classList.add('eval-correct');
    else card.classList.add('eval-wrong');
  }

  // Type badge label
  let typeLabel = "Single Choice";
  if (q.type === 'multiple') typeLabel = "Select All That Apply";
  else if (q.type === 'numerical') typeLabel = "Numerical Answer";

  // Eval status badge if submitted
  let evalStatusBadge = '';
  if (evalItem) {
    if (evalItem.isCorrect) {
      evalStatusBadge = `<span class="q-eval-status status-correct"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Correct</span>`;
    } else if (evalItem.isUnanswered) {
      evalStatusBadge = `<span class="q-eval-status status-wrong" style="background: var(--accent-warning-light); color: var(--accent-warning);">⚪ Not Attempted</span>`;
    } else {
      evalStatusBadge = `<span class="q-eval-status status-wrong"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> Incorrect</span>`;
    }
  }

  // Header HTML
  let headerHtml = `
    <div class="question-header">
      <div class="q-badge-group">
        <span class="q-num-badge">Q${q.question_num}</span>
        <span class="q-type-badge">${typeLabel}</span>
        ${evalStatusBadge}
      </div>
      <button class="q-flag-btn ${isFlagged ? 'flagged' : ''}" onclick="toggleFlag('${q.id}')" title="Flag for review" aria-label="Flag question">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="${isFlagged ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"/>
        </svg>
      </button>
    </div>
  `;

  // Body HTML
  let imageHtml = '';
  if (q.image) {
    imageHtml = `
      <div class="question-image-wrapper" onclick="openImageModal('${q.image}', 'Question Formula / Diagram')">
        <img src="${q.image}" alt="Question Graphic" loading="lazy">
      </div>
    `;
  }

  let bodyHtml = `
    <div class="question-body">
      <p class="question-text">${escapeHtml(q.question)}</p>
      ${imageHtml}
    </div>
  `;

  // Options / Input HTML
  let optionsHtml = '';
  if (q.type === 'numerical') {
    const val = userAns || '';
    const isReadOnly = state.isSubmitted ? 'readonly' : '';
    let numericalEvalInfo = '';
    if (evalItem) {
      numericalEvalInfo = `
        <div class="numerical-eval-hint" style="color: ${evalItem.isCorrect ? 'var(--accent-success)' : 'var(--accent-danger)'};">
          ${evalItem.isCorrect ? '✓ Correct Answer!' : `✗ Incorrect. Correct Answer: <strong>${q.numerical_answer}</strong>`}
        </div>
      `;
    }
    optionsHtml = `
      <div class="numerical-input-group">
        <input type="text" class="numerical-input" placeholder="Type answer here..." 
               value="${escapeHtml(val)}" ${isReadOnly} 
               oninput="handleNumericalInput('${q.id}', this.value)">
      </div>
      ${numericalEvalInfo}
    `;
  } else {
    // Multiple or Single Choice options
    optionsHtml = `<div class="options-list">`;
    q.options.forEach(opt => {
      const isSelected = Array.isArray(userAns) && userAns.includes(opt.key);
      const isCorrectOpt = Array.isArray(q.correct) && q.correct.includes(opt.key);

      let evalClass = '';
      let badgeHtml = '';

      if (state.isSubmitted || state.isStudyMode) {
        if (isCorrectOpt) {
          evalClass = 'eval-correct-highlight';
          badgeHtml = `<span class="option-eval-badge badge-correct-answer">✓ Correct</span>`;
        } else if (isSelected) {
          evalClass = 'eval-wrong-highlight';
          badgeHtml = `<span class="option-eval-badge badge-user-wrong">✗ Your Choice</span>`;
        }
      } else if (isSelected) {
        evalClass = 'selected';
      }

      optionsHtml += `
        <div class="option-item ${evalClass}" onclick="handleOptionSelect('${q.id}', '${opt.key}')">
          <div class="option-indicator">${opt.key.toUpperCase()}</div>
          <div class="option-text">${escapeHtml(opt.text)}</div>
          ${badgeHtml}
        </div>
      `;
    });
    optionsHtml += `</div>`;
  }

  // Explanation Box (shown if submitted or in Study Mode)
  let explanationHtml = '';
  if ((state.isSubmitted || state.isStudyMode) && (q.explanation || q.explanation_image)) {
    let expImgHtml = '';
    if (q.explanation_image) {
      expImgHtml = `
        <div class="explanation-image" onclick="openImageModal('${q.explanation_image}', 'Step-by-step Solution Derivation')">
          <img src="${q.explanation_image}" alt="Solution Derivation" loading="lazy">
        </div>
      `;
    }
    explanationHtml = `
      <div class="explanation-box">
        <div class="explanation-header">
          <svg class="explanation-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
          </svg>
          <span class="explanation-title">Official Explanation & References</span>
        </div>
        <div class="explanation-content">
          <p class="explanation-text">${escapeHtml(q.explanation || "See official lecture derivation.")}</p>
          ${expImgHtml}
        </div>
      </div>
    `;
  }

  card.innerHTML = headerHtml + bodyHtml + optionsHtml + explanationHtml;
  return card;
}

// ==========================================================================
// Interaction Handlers (Option Pick, Input, Flag)
// ==========================================================================
window.handleOptionSelect = function(qId, key) {
  if (state.isSubmitted) return; // Locked once submitted

  const q = state.currentQuestions.find(item => item.id === qId);
  if (!q) return;

  if (q.type === 'multiple') {
    // Multi-choice toggle
    const current = Array.isArray(state.userAnswers[qId]) ? [...state.userAnswers[qId]] : [];
    const idx = current.indexOf(key);
    if (idx > -1) {
      current.splice(idx, 1);
    } else {
      current.push(key);
    }
    if (current.length === 0) {
      delete state.userAnswers[qId];
    } else {
      state.userAnswers[qId] = current.sort();
    }
  } else {
    // Single-choice select
    state.userAnswers[qId] = [key];
  }

  updateQuestionCardUI(qId);
  renderPalette();
  updateProgressUI();
};

window.handleNumericalInput = function(qId, val) {
  if (state.isSubmitted) return;
  const trimmed = val.trim();
  if (trimmed === '') {
    delete state.userAnswers[qId];
  } else {
    state.userAnswers[qId] = trimmed;
  }
  renderPalette();
  updateProgressUI();
};

window.toggleFlag = function(qId) {
  if (state.flagged.has(qId)) {
    state.flagged.delete(qId);
  } else {
    state.flagged.add(qId);
  }
  updateQuestionCardUI(qId);
  renderPalette();
};

function updateQuestionCardUI(qId) {
  const q = state.currentQuestions.find(item => item.id === qId);
  if (!q) return;
  const card = document.getElementById(`q_card_${qId}`);
  if (card) {
    const isVisible = !card.classList.contains('hidden');
    const newCard = createQuestionCard(q, 0, isVisible);
    card.replaceWith(newCard);
  }
}

// ==========================================================================
// Navigation & Palette
// ==========================================================================
function renderPalette() {
  DOM.questionPaletteGrid.innerHTML = '';

  state.currentQuestions.forEach((q, idx) => {
    const btn = document.createElement('button');
    btn.className = 'palette-btn';
    btn.textContent = q.question_num;
    btn.title = `Jump to Question ${q.question_num}`;

    const isAnswered = state.userAnswers.hasOwnProperty(q.id);
    const isFlagged = state.flagged.has(q.id);

    if (state.isSubmitted && state.evaluation) {
      const evalItem = state.evaluation.results[q.id];
      if (evalItem) {
        if (evalItem.isCorrect) btn.classList.add('eval-correct');
        else btn.classList.add('eval-wrong');
      }
    } else {
      if (isAnswered) btn.classList.add('answered');
      if (isFlagged) btn.classList.add('flagged');
    }

    if (state.viewMode === 'focus' && idx === state.focusIndex) {
      btn.classList.add('active');
    }

    btn.addEventListener('click', () => {
      jumpToQuestion(idx, q.id);
    });

    DOM.questionPaletteGrid.appendChild(btn);
  });
}

function jumpToQuestion(idx, qId) {
  if (state.viewMode === 'focus') {
    state.focusIndex = idx;
    renderQuestions();
    renderPalette();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    // If filtered out, reset filter to 'all' so card is rendered
    if (state.isSubmitted && state.activeFilter !== 'all') {
      state.activeFilter = 'all';
      updateFilterTabsUI();
      renderQuestions();
    }
    const card = document.getElementById(`q_card_${qId}`);
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      card.style.transform = 'scale(1.02)';
      setTimeout(() => card.style.transform = '', 300);
    }
  }

  // Close mobile sidebar if open
  DOM.sidebarDrawer.classList.remove('mobile-open');
}

function updateProgressUI() {
  const total = state.currentQuestions.length;
  const answered = Object.keys(state.userAnswers).length;
  const remaining = total - answered;
  const pct = total > 0 ? Math.round((answered / total) * 100) : 0;

  DOM.progressStatusText.textContent = `Answered ${answered} / ${total}`;
  DOM.progressBarFill.style.width = `${pct}%`;

  DOM.submitRemainingText.textContent = remaining === 0 
    ? "All questions answered! Ready to submit." 
    : `${remaining} of ${total} questions remaining`;

  DOM.statAnsweredCount.textContent = answered;
  DOM.statRemainingCount.textContent = remaining;
  DOM.statFlaggedCount.textContent = state.flagged.size;
}

function updateFocusNavUI() {
  if (state.viewMode !== 'focus') {
    DOM.focusNavControls.classList.add('hidden');
    return;
  }
  DOM.focusNavControls.classList.remove('hidden');
  const total = state.currentQuestions.length;
  DOM.focusCounterDisplay.textContent = `Question ${state.focusIndex + 1} of ${total}`;
  DOM.prevQuestionBtn.disabled = state.focusIndex === 0;
  DOM.nextQuestionBtn.disabled = state.focusIndex >= total - 1;
}

// ==========================================================================
// Quiz Submission & Evaluation
// ==========================================================================
DOM.submitQuizBtn.addEventListener('click', () => {
  const total = state.currentQuestions.length;
  const answered = Object.keys(state.userAnswers).length;
  const remaining = total - answered;

  if (remaining > 0) {
    DOM.confirmModalText.textContent = `You have ${remaining} unanswered question${remaining > 1 ? 's' : ''}. Are you sure you want to finish and submit your quiz now?`;
    DOM.confirmModal.classList.remove('hidden');
  } else {
    evaluateAndShowResults();
  }
});

DOM.modalSubmitAnywayBtn.addEventListener('click', () => {
  DOM.confirmModal.classList.add('hidden');
  evaluateAndShowResults();
});

DOM.modalReviewBtn.addEventListener('click', () => {
  DOM.confirmModal.classList.add('hidden');
  // Jump to first unanswered
  for (let i = 0; i < state.currentQuestions.length; i++) {
    const q = state.currentQuestions[i];
    if (!state.userAnswers.hasOwnProperty(q.id)) {
      jumpToQuestion(i, q.id);
      break;
    }
  }
});

function evaluateAndShowResults() {
  state.isSubmitted = true;
  stopTimer();

  let correctCount = 0;
  let wrongCount = 0;
  let unansweredCount = 0;
  const results = {};

  state.currentQuestions.forEach(q => {
    const userAns = state.userAnswers[q.id];
    const isUnanswered = userAns === undefined || userAns === null || (Array.isArray(userAns) && userAns.length === 0);

    let isCorrect = false;

    if (isUnanswered) {
      unansweredCount++;
    } else if (q.type === 'numerical') {
      // Check numerical float equality or trimmed string match
      const correctVal = parseFloat(q.numerical_answer);
      const userVal = parseFloat(userAns);
      if (!isNaN(correctVal) && !isNaN(userVal)) {
        isCorrect = Math.abs(correctVal - userVal) < 0.05;
      } else {
        isCorrect = String(userAns).trim().toLowerCase() === String(q.numerical_answer).trim().toLowerCase();
      }
      if (isCorrect) correctCount++;
      else wrongCount++;
    } else {
      // Single or Multiple Choice Check
      const correctSet = new Set(q.correct || []);
      const userSet = new Set(Array.isArray(userAns) ? userAns : [userAns]);

      if (correctSet.size === userSet.size && [...correctSet].every(k => userSet.has(k))) {
        isCorrect = true;
        correctCount++;
      } else {
        wrongCount++;
      }
    }

    results[q.id] = {
      isCorrect,
      isUnanswered,
      userAns,
      correctAns: q.type === 'numerical' ? q.numerical_answer : q.correct
    };
  });

  const total = state.currentQuestions.length;
  const scorePct = total > 0 ? Math.round((correctCount / total) * 100) : 0;

  state.evaluation = {
    total,
    correct: correctCount,
    wrong: wrongCount,
    unanswered: unansweredCount,
    scorePct,
    results
  };

  // Populate Results Section
  DOM.resultsCard.classList.remove('hidden');
  DOM.resultsLegend.classList.remove('hidden');
  DOM.submitBar.classList.add('hidden'); // Hide submit bar in review mode

  DOM.metricTotal.textContent = total;
  DOM.metricCorrect.textContent = correctCount;
  DOM.metricWrong.textContent = wrongCount;
  DOM.metricUnanswered.textContent = unansweredCount;

  DOM.scorePercentage.textContent = `${scorePct}%`;
  DOM.scoreFraction.textContent = `${correctCount} / ${total} Correct`;

  // Animate Circular Dial
  const radius = 52;
  const circumference = 2 * Math.PI * radius; // 326.7
  const offset = circumference - (scorePct / 100) * circumference;
  DOM.scoreDialCircle.style.strokeDashoffset = offset;

  if (scorePct >= 80) {
    DOM.scoreDialCircle.style.stroke = 'var(--accent-success)';
    DOM.resultsBadge.textContent = "🏆 Outstanding Mastery!";
    DOM.resultsHeadline.textContent = "Excellent Performance!";
  } else if (scorePct >= 50) {
    DOM.scoreDialCircle.style.stroke = 'var(--accent-primary)';
    DOM.resultsBadge.textContent = "👍 Good Progress!";
    DOM.resultsHeadline.textContent = "Keep Up The Great Work!";
  } else {
    DOM.scoreDialCircle.style.stroke = 'var(--accent-danger)';
    DOM.resultsBadge.textContent = "📚 Review Recommended";
    DOM.resultsHeadline.textContent = "Focus on Wrong Answers Below";
  }

  // Filter Tabs Counts
  DOM.countWrongTab.textContent = wrongCount;
  DOM.countCorrectTab.textContent = correctCount;
  DOM.countUnansweredTab.textContent = unansweredCount;
  DOM.countAllTab.textContent = total;

  // By default, prioritize showing WRONGLY ANSWERED questions if any, otherwise All
  state.activeFilter = wrongCount > 0 ? 'wrong' : 'all';
  updateFilterTabsUI();

  renderQuestions();
  renderPalette();

  // Scroll smoothly to Results Card
  DOM.resultsCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
  showToast(`Evaluation Complete! Score: ${correctCount}/${total} (${scorePct}%)`);
}

function updateFilterTabsUI() {
  const tabs = DOM.resultsCard.querySelectorAll('.filter-tab');
  tabs.forEach(tab => {
    tab.classList.toggle('active', tab.dataset.filter === state.activeFilter);
  });
}

// Filter Tab Click Handlers
DOM.resultsCard.querySelectorAll('.filter-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    state.activeFilter = tab.dataset.filter;
    updateFilterTabsUI();
    renderQuestions();
  });
});

// Retry Wrong Questions Only
DOM.retakeWrongBtn.addEventListener('click', () => {
  if (!state.evaluation) return;
  const wrongIds = Object.keys(state.evaluation.results).filter(id => {
    const res = state.evaluation.results[id];
    return !res.isCorrect; // Wrong or unanswered
  });

  if (wrongIds.length === 0) {
    showToast("🎉 You got 100% correct! No wrong questions to retry.");
    return;
  }

  const wrongQuestions = state.currentQuestions.filter(q => wrongIds.includes(q.id));
  loadAssignment(state.currentAssignmentIdx, wrongQuestions);
  showToast(`Starting practice with ${wrongQuestions.length} wrongly answered questions.`);
});

DOM.retakeAllBtn.addEventListener('click', () => {
  loadAssignment(state.currentAssignmentIdx);
  showToast("Quiz reset! Good luck!");
});

DOM.resetAnswersBtn.addEventListener('click', () => {
  if (confirm("Are you sure you want to clear all your selected answers?")) {
    state.userAnswers = {};
    renderQuestions();
    renderPalette();
    updateProgressUI();
    showToast("Answers cleared.");
  }
});

DOM.printReportBtn.addEventListener('click', () => {
  window.print();
});

// ==========================================================================
// Mode Toggles & View Controls
// ==========================================================================
DOM.modeQuizBtn.addEventListener('click', () => {
  state.isStudyMode = false;
  DOM.modeQuizBtn.classList.add('active');
  DOM.modeStudyBtn.classList.remove('active');
  renderQuestions();
  showToast("Exam Mode enabled: Test yourself before submitting.");
});

DOM.modeStudyBtn.addEventListener('click', () => {
  state.isStudyMode = true;
  DOM.modeStudyBtn.classList.add('active');
  DOM.modeQuizBtn.classList.remove('active');
  renderQuestions();
  showToast("Study Mode enabled: Answers & explanations revealed instantly.");
});

DOM.viewSheetBtn.addEventListener('click', () => {
  state.viewMode = 'sheet';
  DOM.viewSheetBtn.classList.add('active');
  DOM.viewFocusBtn.classList.remove('active');
  renderQuestions();
});

DOM.viewFocusBtn.addEventListener('click', () => {
  state.viewMode = 'focus';
  DOM.viewFocusBtn.classList.add('active');
  DOM.viewSheetBtn.classList.remove('active');
  renderQuestions();
});

DOM.prevQuestionBtn.addEventListener('click', () => {
  if (state.focusIndex > 0) {
    state.focusIndex--;
    renderQuestions();
    renderPalette();
  }
});

DOM.nextQuestionBtn.addEventListener('click', () => {
  if (state.focusIndex < state.currentQuestions.length - 1) {
    state.focusIndex++;
    renderQuestions();
    renderPalette();
  }
});

// Keyboard Navigation for Focus Mode
document.addEventListener('keydown', (e) => {
  if (state.viewMode !== 'focus') return;
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

  if (e.key === 'ArrowLeft') {
    DOM.prevQuestionBtn.click();
  } else if (e.key === 'ArrowRight') {
    DOM.nextQuestionBtn.click();
  } else if (['1', '2', '3', '4', '5'].includes(e.key)) {
    const q = state.currentQuestions[state.focusIndex];
    if (q && q.options && q.options.length > 0) {
      const idx = parseInt(e.key, 10) - 1;
      if (idx < q.options.length) {
        handleOptionSelect(q.id, q.options[idx].key);
      }
    }
  }
});

// Assignment Selector change
DOM.assignmentSelect.addEventListener('change', (e) => {
  loadAssignment(e.target.value);
});

// Mobile Drawer
DOM.drawerToggleBtn.addEventListener('click', () => {
  DOM.sidebarDrawer.classList.toggle('mobile-open');
});

// ==========================================================================
// Timer
// ==========================================================================
function startTimer() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerInterval = setInterval(() => {
    if (state.isTimerRunning) {
      state.timerSeconds++;
      updateTimerUI();
    }
  }, 1000);
}

function stopTimer() {
  state.isTimerRunning = false;
  if (state.timerInterval) clearInterval(state.timerInterval);
}

function updateTimerUI() {
  const mins = Math.floor(state.timerSeconds / 60);
  const secs = state.timerSeconds % 60;
  DOM.timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// ==========================================================================
// Image Modal / Lightbox
// ==========================================================================
window.openImageModal = function(src, caption = '') {
  DOM.modalEnlargedImage.src = src;
  DOM.imageModalCaption.textContent = caption;
  DOM.imageModal.classList.remove('hidden');
};

DOM.closeImageModalBtn.addEventListener('click', () => {
  DOM.imageModal.classList.add('hidden');
});

DOM.imageModal.addEventListener('click', (e) => {
  if (e.target === DOM.imageModal) {
    DOM.imageModal.classList.add('hidden');
  }
});

// ==========================================================================
// Theme Toggle
// ==========================================================================
function initTheme() {
  const savedTheme = localStorage.getItem('nptel_quiz_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcons(savedTheme);
}

DOM.themeToggleBtn.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('nptel_quiz_theme', next);
  updateThemeIcons(next);
});

function updateThemeIcons(theme) {
  if (theme === 'dark') {
    DOM.themeIconSun.classList.remove('hidden');
    DOM.themeIconMoon.classList.add('hidden');
  } else {
    DOM.themeIconSun.classList.add('hidden');
    DOM.themeIconMoon.classList.remove('hidden');
  }
}

// Toast Notification
function showToast(msg) {
  DOM.toastNotification.textContent = msg;
  DOM.toastNotification.classList.remove('hidden');
  setTimeout(() => {
    DOM.toastNotification.classList.add('hidden');
  }, 3200);
}

// Helper: Escape HTML
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function setupEventListeners() {
  // Global modal escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      DOM.confirmModal.classList.add('hidden');
      DOM.imageModal.classList.add('hidden');
    }
  });
}

// Start application when DOM is ready
document.addEventListener('DOMContentLoaded', init);
