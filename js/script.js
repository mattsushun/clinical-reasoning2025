// js/script.js

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
    explanation: "臨床推論のプロセスは、大きく分けて以下の4段階で構成されます。\n• 情報収集: 問題や気になることがあった際に、まず漏れなく情報を集めます。患者の安全確保や有効な薬物療法のために必須です。SOAP形式やOPQRST/SOCRATESといった包括的な情報収集フォーマットが活用されます。\n• 問題リストの作成: 収集した情報から問題点を抽出し、定義付けします。客観的情報がプロブレムに該当し、確定診断前の疾患名ではなく症状として記載します。\n• 仮説生成: 問題リストに基づいて、「ありそうかな、なさそうかな」と可能性のある疾患や薬剤性の有害事象、薬物相互作用などを検討し、仮説を立てます。\n• 評価と計画: 生成された仮説を検証し、治療目標の設定、薬物治療の提案・調整、有効性・安全性のモニタリング計画などを策定します。"
  },
  {
    question: "頭痛を訴える患者に対して、薬剤師が痛みの包括的な情報収集を行う際に用いられる「OPQRST」または「SOCRATES」の頭文字が示す情報として、最も初期に把握すべき重要な項目はどれですか？",
    options: [
      "O: Onset (発症) – どのように始まったか、急激か、徐々にか",
      "P: Provoking/Palliating (誘発・緩和因子) – 症状を悪化または和らげるものがあるか",
      "Q: Quality (性質) – どのように感じるか（ズキズキ、締め付けられるなど）",
      "R: Region/Radiation (場所・広がり) – 頭のどの部分か、どこに広がるか",
      "S: Severity (重症度) – 痛みの強さを10段階で評価するとどうか"
    ],
    correctAnswer: 0,
    explanation: "OPQRSTおよびSOCRATESは、痛みの包括的な情報収集に用いられるフレームワークです。薬剤師はこれらのフレームワークを活用することで、漏れのない情報収集を目指します。特に「Onset (発症)」は、突然の激しい頭痛（サンダークラップ頭痛）のように、致死的な疾患（くも膜下出血など）の可能性を示すレッドフラッグの判断に直結するため、初期に把握すべき重要な項目となります。"
  },
  {
    question: "50代の男性患者が3日間続く頭痛を訴え、カルシウム拮抗薬が処方されました。薬剤師が患者に問診する際、最も緊急性の高い医療機関への紹介が必要となる「レッドフラッグ」の兆候はどれですか？",
    options: [
      "以前からある緊張型頭痛と診断されている",
      "安静にすると痛みが軽減する",
      "発熱と同時に首の硬直（項部硬直）を伴う",
      "コーヒーを飲むと頭痛が悪化する",
      "頭痛薬を飲むと痛みが和らぐ"
    ],
    correctAnswer: 2,
    explanation: "レッドフラッグとは、より深刻な病態を示す警告サインであり、医療機関への紹介が必要な場合の判断材料となります。頭痛に関する主なレッドフラッグとして、以下が挙げられています。\n• 突然の激しい頭痛（サンダークラップ頭痛）\n• 生涯最悪の頭痛\n• 頭痛や神経学的麻痺（口の呂律が回らない、手のしびれなど）\n• 発熱と項部硬直を伴う頭痛（髄膜炎や脳炎の可能性）\n• 50歳以上で新規に発症した頭痛（側頭動脈炎や腫瘍の可能性）\n上記の症状を認めた場合は、緊急での精査・対応が必要となります。"
  },
  {
    question: "薬剤師が患者の症状を評価する際、「マイナーエイルメント」という概念が用いられることがあります。次の症状のうち、一般的にマイナーエイルメントに分類され、単純な対応で対処可能とされるものはどれですか？",
    options: [
      "意識障害を伴う頭痛",
      "高熱と全身の倦怠感が持続する風邪症状",
      "激しい胸痛を伴う胃の不快感",
      "食べすぎによる胃もたれや胸焼け",
      "手足の麻痺を伴うめまい"
    ],
    correctAnswer: 3,
    explanation: "マイナーエイルメントとは、患者自身が単純な対応（OTC薬の使用、安静、自己申告による休養など）で対処できる健康上の訴えを指します。これには風邪症状（軽度）、頭痛（軽度）、胃腸障害（胃もたれ、胸焼けなど）、軽度のニキビ、口内炎などが含まれます。ただし、マイナーエイルメントであっても、重症度（症状の持続時間、性質、随伴症状の有無など）の判断は重要であり、レッドフラッグがないかを確認する必要があります。"
  },
  {
    question: "高血圧緊急症において、標的臓器障害（TOD: Target Organ Damage）として主な標的臓器に含まれないものはどれですか？",
    options: [
      "脳",
      "心臓",
      "腎臓",
      "血管",
      "脾臓"
    ],
    correctAnswer: 4,
    explanation: "TOD（Target Organ Damage）は、高血圧などの基礎疾患によって引き起こされる主要臓器の機能的・構造的障害を指します。高血圧緊急症における主な標的臓器は、脳、心臓、腎臓、血管、眼底（目）です。脾臓は一般的な高血圧性標的臓器には含まれません。TODの評価は、治療介入の判断や予後の予測に重要です。"
  },
  {
    question: "臨床医には２つの思考プロセスがあると言われています。患者を見た瞬間に、その症状の組み合わせから即座に典型的な疾患を想起し、直感的に診断を下そうとする思考プロセスとはどれですか？",
    options: [
      "システム1（探索的アプローチ）",
      "システム2（仮説検証型アプローチ）",
      "アンカリングバイアス",
      "コンファメーションバイアス",
      "ベイズ統計"
    ],
    correctAnswer: 0,
    explanation: "臨床医の思考プロセスには以下の2種類があります。\n• システム1（探索的アプローチ）: 早い、自動的、直感的、パターンに基づく思考。認知的な労力が少なく、経験や記憶に強く影響されます。患者を見た瞬間の印象や症状の組み合わせから即座に疾患を想起する際に用いられます。\n• システム2（仮説検証型アプローチ）: 遅い、意識的、分析的、論理的推論に基づく思考。認知的な労力が多く、仮説を立てて検証を繰り返すことで診断精度を高めます。\nどちらか一方が優れているわけではなく、両方をバランスよく使用することが正しい診断に結びつける上で重要です。"
  },
  {
    question: "薬剤師が患者の症状を評価する際、最初に得た情報や初期の仮説に固執し、新たな情報や症状の変化があってもその最初の判断から離れられず、診断を誤ってしまうことがある認知バイアスはどれですか？",
    options: [
      "アンカリングバイアス",
      "コンファメーションバイアス（確証バイアス）",
      "アベイラビリティバイアス（利用可能性バイアス）",
      "後知恵バイアス",
      "代表性ヒューリスティック"
    ],
    correctAnswer: 0,
    explanation: "認知バイアスは、思考の偏りによって誤診につながる可能性があります。\n• アンカリングバイアス: 最初の仮説に固執し、初期の判断から離れられず、新たな症状の変化の可能性を無視してしまうことで、誤った診断に結びつくバイアスです。\n• コンファメーションバイアス（確証バイアス）は、自分の仮説を裏付ける情報ばかりを探し、都合の悪い情報を無視する傾向です。\nこれらのバイアスを回避し、包括的な情報収集と評価を行うことが重要です。"
  },
  {
    question: "患者が喉の痛みと発熱を訴えている場合、薬剤師が「風邪や感染症だろう」という初期仮説に基づいて、喉の痛みや鼻水、体の倦怠感といった風邪症状に基づく情報収集ばかりを行い、心筋炎のような重篤な疾患を見落としてしまう可能性がある認知バイアスはどれですか？",
    options: [
      "アンカリングバイアス",
      "コンファメーションバイアス（確証バイアス）",
      "利用可能性バイアス",
      "フレーミング効果",
      "現状維持バイアス"
    ],
    correctAnswer: 1,
    explanation: "• コンファメーションバイアス（確証バイアス）: 自分の仮説を裏付ける所見のみに注目し、都合のいい情報だけを探してしまうことで、重篤な疾患を見落とす可能性があります。例えば、心筋炎患者の最大80%に感冒様症状や呼吸器症状、消化器症状の前駆症状があることが報告されており、安易に風邪と判断すると見逃すリスクがあります。\n認知バイアスを避けるためには、診断チェックリストの活用や、思考の網羅性を高める意識を持つことが重要です。"
  },
  {
    question: "術後の患者が下痢と腹痛を訴え、その原因としてクロストリディオイデス・ディフィシル感染症（CDI）が鑑別疾患として挙げられました。CDI発症の最も高いリスク因子として知られている薬剤はどれですか？",
    options: [
      "メトトレキサート",
      "エソメプラゾール（PPI）",
      "クリンダマイシン（抗生剤）",
      "プレガバリン",
      "セレコキシブ（NSAIDs）"
    ],
    correctAnswer: 2,
    explanation: "クロストリディオイデス・ディフィシル感染症（CDI）は、抗生物質の使用が主なリスク因子とされています。特にクリンダマイシンは、他の抗菌薬に比べてCDI発症のリスクがかなり高いことが有名です。入院中の下痢で抗菌薬使用歴がある場合、CDIを積極的に疑う必要があります。PPIもCDIのリスク因子として挙げられることがありますが、抗菌薬が直接的な原因となり、中でもクリンダマイシンのリスクは特に高いとされています。"
  },
  {
    question: "長期入院中の患者が下痢を訴え、薬剤性下痢が鑑別疾患として考えられました。患者はエソメプラゾール（PPI）とメトトレキサート（MTX）を服用しています。これらの薬剤が薬剤性下痢の原因として考慮される理由として、不適切なものはどれですか？",
    options: [
      "エソメプラゾール（PPI）は長期服用により、下痢との関連が報告されている。",
      "メトトレキサート（MTX）は、副作用として下痢を誘発することがある。",
      "PPI関連下痢は、collagenous colitisとして報告されている。",
      "これらの薬剤は、腸内細菌叢に影響を与え、下痢を引き起こす可能性がある。",
      "エソメプラゾール（PPI）による下痢は、発熱と血便を必ず伴う。"
    ],
    correctAnswer: 4,
    explanation: "• エソメプラゾール（PPI）の長期服用は、下痢との関連が報告されており、collagenous colitisの原因となることがあります。\n• メトトレキサート（MTX）も、副作用として下痢を誘発することが知られています。\n• これらの薬剤が腸内環境に影響を与え、下痢を引き起こす可能性はあります。\nしかし、PPIによる下痢やMTXによる下痢が発熱と血便を必ず伴うわけではありません。発熱や血便はCDIのような重症の感染症や、炎症性腸疾患で認められる可能性が高い症状であり、薬剤性下痢のすべてに当てはまるものではありません。"
  },
  {
    question: "88歳の高齢女性が早朝に胸苦しい圧迫感で目覚めたと訴えています。薬剤師が医療機関へ緊急のコンサルトを行うべき「レッドフラッグ」に該当する胸痛の随伴症状はどれですか？",
    options: [
      "食後に胃酸が逆流する感覚を伴う",
      "体を動かすと痛みが誘発される",
      "深呼吸すると痛みが悪化する",
      "多量の発汗を伴い、奥歯や左腕に放散する痛み",
      "特定の場所を指で示すことができる局所的な痛み"
    ],
    correctAnswer: 3,
    explanation: "胸痛には様々な原因がありますが、特に心臓に起因する重篤な疾患（急性冠症候群など）のレッドフラッグは迅速な対応を必要とします。「強心症らしい胸痛」の特徴として、以下のものが挙げられています。\n• 圧迫感がある\n• 多量の発汗を伴う\n• 嘔吐がある\n• 左上肢へ放散する\n• 右肩へ放散する\n• 両上肢へ放散する\n• 失神・失血を伴う\n特に、多量の発汗を伴い、奥歯や左腕といった典型的な部位へ放散する痛みは、心筋梗塞や狭心症などの急性冠症候群を示唆する重要な兆候です。"
  },
  {
    question: "88歳の高齢女性の胸痛の症例において、様々な鑑別疾患が検討されました。次に挙げる胸痛の特徴のうち、「狭心症らしくない胸痛」の兆候はどれですか？",
    options: [
      "痛みの持続時間が30分以上である",
      "圧迫感がある",
      "運動時に誘発される",
      "ニトログリセリンの舌下で痛みが軽減する",
      "左腕に痛みが放散する"
    ],
    correctAnswer: 0,
    explanation: "「狭心症らしくない胸痛」の特徴（None anginal sign）として、以下の4つが挙げられています。\n• 持続時間: 30秒以内の胸痛、または30分以上の胸痛（30分以上続く場合は心筋梗塞に移行している可能性が高いとされます）。\n• 痛みの性状・部位: 極所の圧痛がある、誘発できる痛み、指で指せる痛み、刺すような痛み。\n• 体位の変化・呼吸の影響: 体位の変化で増悪・軽快する痛み、呼吸で悪化する痛み（胸膜炎、肺炎、肺塞栓、気胸などの可能性）。\n• 軽快因子: 水分や食事で治る胸痛。\n選択肢1の「痛みの持続時間が30分以上」は、狭心症では通常見られず、むしろ心筋梗塞への移行を示唆するため、狭心症らしくない特徴となります。"
  },
  {
    question: "高血圧症を抱える患者の治療管理において、「TOD」という概念が重要視されます。TODが示す意味として、最も適切なものはどれですか？",
    options: [
      "薬物治療の目標用量（Target Optimal Dose）",
      "薬物相互作用の全体的なリスク（Total Overlap of Drug-Drug Interactions）",
      "高血圧や慢性疾患に伴う主要臓器の機能的・構造的障害（Target Organ Damage）",
      "治療効果の経時的変化（Time-dependent Outcome Data）",
      "有害事象報告の全体数（Total Occurrence of Drug Adverse Events）"
    ],
    correctAnswer: 2,
    explanation: "TODはTarget Organ Damageの略で、高血圧などの基礎疾患によって引き起こされる主要臓器の機能的・構造的障害を指します。慢性的な症状が継続することによって起こるものであり、脳、心臓、腎臓、血管、眼底が主な標的臓器とされます。TODの早期発見と早期介入は、患者の予後改善に非常に重要です。"
  },
  {
    question: "薬剤性の有害事象の発生を疑った際、その薬剤との因果関係を評価することが重要です。国際団体CIOMS（国際医学団体協議会）などが用いる評価基準において、因果関係の評価で最も重要な要素はどれですか？",
    options: [
      "患者の経済状況",
      "薬剤の剤形",
      "症状の発現と薬剤の投与の時間的な関連性",
      "薬剤の市場での販売期間",
      "医師の専門分野"
    ],
    correctAnswer: 2,
    explanation: "薬剤性の有害事象の因果関係評価には、CIOMS/WHOが作成した基準が用いられます。因果関係評価の重要な要素として、以下の点が挙げられています。\n• 時間的な関連: 症状の発現と薬剤の投与の時間軸が合理的であるか。\n• 中止後の改善: 薬剤中止後に症状が改善したか。\n• 再投与時の再発: 薬剤を再投与した場合に症状が再発したか。\n• 代替原因の除外: 症状を引き起こす他の原因が考えにくいか。\nこれらの要素を総合的に評価し、因果関係は「確実」「可能性あり」「可能性が低い」など、確率的に判断されます。中でも、症状の発現と薬剤の投与の時間的な関連性は、最も基本的な評価軸となります。"
  },
  {
    question: "複数の疾患を持つ高齢患者が多数の薬剤を服用している状況は「ポリファーマシー」と呼ばれます。このような状況は、薬剤師が疾患を想起し、患者の状態を評価する上でどのような影響を与える可能性が最も高いですか？",
    options: [
      "薬剤管理が簡素化され、副作用のリスクが低下する。",
      "個々の薬剤の作用が強化され、治療効果が増大する。",
      "薬剤間の相互作用や多剤併用による有害事象のリスクが増加し、症状の鑑別を複雑にする。",
      "患者の服薬アドヒアランスが必ず向上し、症状が安定する。",
      "特定の疾患の症状がマスキングされ、疾患の想起を容易にする。"
    ],
    correctAnswer: 2,
    explanation: "ポリファーマシーは、患者が多数の薬剤を服用している状態を指し、特に高齢者で問題となります。この状況は、疾患の想起や患者評価に複雑な影響を与えます。\n• 薬剤間の相互作用や多剤併用による有害事象のリスクが増加し、症状の鑑別を複雑にする: 複数の薬剤がそれぞれ副作用を持つため、どの薬剤が原因となっているか、あるいは薬剤間の相互作用による症状なのかを判断するのが困難になります。これにより、特定の疾患症状と薬剤性有害事象の区別がつきにくくなり、疾患の想起を複雑にします。\n• 服薬アドヒアランスの低下: 多くの薬剤を服用することは、患者の服薬アドヒアランスを低下させる可能性があります。\n薬剤師はポリファーマシーの状態にある患者に対し、包括的な服薬管理と評価を通じて、疾患の鑑別と適切な介入を慎重に行う必要があります。"
  }
];


// --- DOM 要素取得 ---
const progressBar         = document.getElementById('progress-bar');
const questionNumberEl    = document.getElementById('question-number');
const questionTextEl      = document.getElementById('question-text');
const optionsContainer    = document.getElementById('options-container');
const explanationContainer= document.getElementById('explanation-container');
const resultIndicatorEl   = document.getElementById('result-indicator');
const explanationTextEl   = document.getElementById('explanation-text');
const nextBtn             = document.getElementById('next-btn');
const restartBtn          = document.getElementById('restart-btn');
const quizBody            = document.getElementById('quiz-body');
const resultsContainer    = document.getElementById('results-container');
const scoreTextEl         = document.getElementById('score-text');

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

  // プログレスバー更新（任意で調整可）
  const progress = ((currentQuestionIndex) / quizData.length) * 100;
  progressBar.style.width = `${progress}%`;

  const q = quizData[currentQuestionIndex];
  questionNumberEl.textContent = `問題 ${currentQuestionIndex + 1}`;
  questionTextEl.textContent = q.question;

  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.innerHTML = `<span class="mr-3 text-blue-600 font-bold">${i + 1}.</span> ${opt}`;
    btn.classList.add(
      'option-btn','w-full','p-4','text-left',
      'bg-white','border-2','border-gray-300','rounded-lg',
      'hover:bg-gray-50','focus:outline-none','focus:ring-2',
      'focus:ring-offset-2','focus:ring-blue-400'
    );
    btn.dataset.index = i;
    btn.addEventListener('click', selectAnswer);
    optionsContainer.appendChild(btn);
  });
}

// --- 解答処理 ---
function selectAnswer(e) {
  const selected = e.currentTarget;
  const chosen   = parseInt(selected.dataset.index, 10);
  const correct  = quizData[currentQuestionIndex].correctAnswer;

  // 全ボタン無効化
  optionsContainer.querySelectorAll('button').forEach(b => {
    b.disabled = true;
    b.classList.remove('hover:bg-gray-50');
  });

  if (chosen === correct) {
    score++;
    selected.classList.add('correct');
    resultIndicatorEl.innerHTML = '<span class="text-3xl font-bold text-green-600">正解！</span>';
  } else {
    selected.classList.add('incorrect');
    optionsContainer.querySelectorAll('button')[correct].classList.add('correct');
    resultIndicatorEl.innerHTML = '<span class="text-3xl font-bold text-red-600">不正解…</span>';
  }

  explanationTextEl.innerText = quizData[currentQuestionIndex].explanation;
  explanationContainer.classList.remove('hidden');

  nextBtn.textContent = (currentQuestionIndex < quizData.length - 1) ? '次の問題へ' : '結果を見る';
  nextBtn.classList.remove('hidden');
}

// --- 次へ・結果表示 ---
// 修正ポイント：インクリメント前に条件を判定し、最後の問題まで繰り返す
function showNextQuestion() {
  if (currentQuestionIndex < quizData.length - 1) {
    currentQuestionIndex++;
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

// --- イベントリスナー ---
nextBtn.addEventListener('click', showNextQuestion);
restartBtn.addEventListener('click', startQuiz);

// --- 初期化 ---
startQuiz();
