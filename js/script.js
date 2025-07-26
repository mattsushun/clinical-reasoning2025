const quizData = [
  {
    question: "臨床推論のプロセスとして、正しい順序で並んでいるものはどれですか？",
    options: [
      "評価と計画 → 仮説生成 → 情報収集 → 問題リストの作成",
      "情報収集 → 仮説生成 → 問題リストの作成 → 評価と計画",
      "情報収集 → 問題リストの作成 → 仮説生成 → 評価と計画",
      "問題リストの作成 → 情報収集 → 仮説生成 → 評価と計画",
      "仮説生成 → 評価と計画 → 情報収集 → 問題リストの作成"
    ],
    correctAnswer: 2,
    explanation: "臨床推論のプロセスは、大きく分けて以下の4段階で構成されます。\n• 情報収集 → 問題リスト作成 → 仮説生成 → 評価と計画"
  },
  // 以下、他の問題オブジェクトも同様に続けてください…
];

// --- DOM 要素取得 ---
const progressBar       = document.getElementById('progress-bar');
const questionNumberEl  = document.getElementById('question-number');
const questionTextEl    = document.getElementById('question-text');
const optionsContainer  = document.getElementById('options-container');
const explanationContainer = document.getElementById('explanation-container');
const resultIndicatorEl = document.getElementById('result-indicator');
const explanationTextEl = document.getElementById('explanation-text');
const nextBtn           = document.getElementById('next-btn');
const restartBtn        = document.getElementById('restart-btn');
const quizBody          = document.getElementById('quiz-body');
const resultsContainer  = document.getElementById('results-container');
const scoreTextEl       = document.getElementById('score-text');

let currentQuestionIndex = 0;
let score = 0;

// --- クイズ開始 ---
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  resultsContainer.classList.add('hidden');
  quizBody.classList.remove('hidden');
  document.getElementById('quiz-footer').classList.remove('hidden');
  loadQuestion();
}

// --- 問題表示 ---
function loadQuestion() {
  explanationContainer.classList.add('hidden');
  nextBtn.classList.add('hidden');
  optionsContainer.innerHTML = '';
  const progress = ((currentQuestionIndex) / quizData.length) * 100;
  progressBar.style.width = `${progress}%`;

  const q = quizData[currentQuestionIndex];
  questionNumberEl.textContent = `問題 ${currentQuestionIndex + 1}`;
  questionTextEl.textContent = q.question;

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.innerHTML = `<span class="mr-3 text-blue-600 font-bold">${i+1}.</span> ${opt}`;
    btn.classList.add('option-btn','w-full','p-4','text-left','bg-white','border-2','border-gray-300','rounded-lg','hover:bg-gray-50','focus:outline-none','focus:ring-2','focus:ring-offset-2','focus:ring-blue-400');
    btn.dataset.index = i;
    btn.addEventListener('click', selectAnswer);
    optionsContainer.appendChild(btn);
  });
}

// --- 解答処理 ---
function selectAnswer(e) {
  const selected = e.currentTarget;
  const chosen = parseInt(selected.dataset.index);
  const correct = quizData[currentQuestionIndex].correctAnswer;
  const buttons = optionsContainer.querySelectorAll('button');
  buttons.forEach(b => {
    b.disabled = true;
    b.classList.remove('hover:bg-gray-50');
  });

  if (chosen === correct) {
    score++;
    selected.classList.add('correct');
    resultIndicatorEl.innerHTML = '<span class="text-3xl font-bold text-green-600">正解！</span>';
  } else {
    selected.classList.add('incorrect');
    buttons[correct].classList.add('correct');
    resultIndicatorEl.innerHTML = '<span class="text-3xl font-bold text-red-600">不正解…</span>';
  }

  explanationTextEl.innerText = quizData[currentQuestionIndex].explanation;
  explanationContainer.classList.remove('hidden');

  nextBtn.textContent = currentQuestionIndex < quizData.length - 1 ? '次の問題へ' : '結果を見る';
  nextBtn.classList.remove('hidden');
}

// --- 次へ／結果表示 ---
function showNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  quizBody.classList.add('hidden');
  explanationContainer.classList.add('hidden');
  document.getElementById('quiz-footer').classList.add('hidden');
  resultsContainer.classList.remove('hidden');
  progressBar.style.width = '100%';
  scoreTextEl.textContent = `${score} / ${quizData.length}`;
}

// --- イベント ---
nextBtn.addEventListener('click', showNextQuestion);
restartBtn.addEventListener('click', startQuiz);

// --- 初期化 ---
startQuiz();
