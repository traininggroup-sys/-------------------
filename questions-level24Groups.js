// بطل سرقة يا حرامي هتروح النار 😈

// Level 24 questions SPLITTED into 5 GROUPS (من questions-level24.js)

const arabic = [
  {"question": "زرتُ المريضَ زيارتين، أعرب (زيارتين)", "options": ["مفعول به", "حال", "مفعول مطلق"], "answer": "مفعول مطلق"},
  {"question": "تضع الشركة خصم... بالمئة", "options": ["خمسون", "خمسين"], "answer": "خمسين بالمئة"},
  // عربي آخر...
];

const general = [
  {"question": "من هو رئيس الوزراء سنة ١٩٥٢؟", "options": ["جمال عبد الناصر", "محمد نجيب", "أنور السادات"], "answer": "محمد نجيب"},
  {"question": "--- هو أسرع كوكب في نظامنا الشمسي", "options": ["عطارد", "الزهرة", "زحل"], "answer": "عطارد"},
  {"question": "الكوكبين اللذين يقعان بين المريخ وأورانوس...", "options": ["زحل والمشتري", "عطارد والزهرة"], "answer": "زحل والمشتري"},
  // تاريخ/جغرافيا...
];

const computer = [
  {"question": "ما هو الاختصار لتحديد كل الخلايا في Excel؟", "options": ["Ctrl + A", "Ctrl + S"], "answer": "Ctrl + A"},
  {"question": "الاختصار لنطاق خلايا متجاورة في Excel؟", "options": ["Click + Shift", "Ctrl + Click"], "answer": "Click + Shift"},
  // Excel/حاسب...
];

const english = [
  {"question": "What is the past participle of (do)?", "options": ["Did", "Done"], "answer": "Done"},
  {"question": "Choose the countable nouns:", "options": ["Chair", "Water"], "answer": "Chair"},
  // grammar...
];

const educational = [
  {"question": "جبل --- هو أعلى جبل في مصر", "options": ["سانت كاترين", "موسى"], "answer": "سانت كاترين"},
  {"question": "قطر الشمس أكبر من قطر الأرض بحوالي ----", "options": ["109 مرات", "10 مرات"], "answer": "109 مرات"},
  // علم/تربوي...
];

export const level24Groups = {arabic, general, computer, english, educational};

console.log('✅ questions-level24Groups.js ready');

