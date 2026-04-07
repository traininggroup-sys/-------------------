// بطل سرقة يا حرامي هتروح النار 😈

// Level 25 questions SPLITTED into 5 GROUPS (من questions-level25.js)

const arabic = [
  {"question": "استقلت من العمل استقالة واحدة، أعرب (استقالة)", "options": ["مفعول به", "مفعول مطلق"], "answer": "مفعول مطلق"},
  {"question": "استقلت... استقالة واحدة، (استقالة)؟", "options": ["مبين للنوع", "مبين للعدد"], "answer": "مبين للعدد"},
  // عربي...
];

const general = [
  {"question": "دُفن محمد أنور السادات في مسقط رأسه المنوفية", "options": ["صح", "خطا"], "answer": "خطا"},
  {"question": "محمد مرسي ترشح للرئاسة عام 2011", "options": ["صح", "خطا"], "answer": "خطا"},
  // تاريخ...
];

const computer = [
  {"question": "ما هو الاختصار لتحديد كل الخلايا في Excel؟", "options": ["Ctrl + A", "Ctrl + S"], "answer": "Ctrl + A"},
  {"question": "إدراج عمود جديد بين C و D؟", "options": ["تحديد D + إدراج", "تحديد C + إدراج"], "answer": "تحديد العمود D..."},
  // Excel...
];

const english = [
  {"question": "What is the past participle of (go)?", "options": ["Went", "Gone"], "answer": "Gone"},
  {"question": "Which preposition with 'crashed'?", "options": ["At", "Into"], "answer": "Into"},
  // grammar...
];

const educational = [
  {"question": "الجهاز الهضمي للبقرة يختلف عن الكلب", "options": ["صح", "خطا"], "answer": "صح"},
  {"question": "محافظة ميلاد الرئيس مبارك...", "options": ["المنوفية", "الإسكندرية"], "answer": "المنوفية"},
  // تربوي...
];

export const level25Groups = {arabic, general, computer, english, educational};

console.log('✅ questions-level25Groups.js ready');

