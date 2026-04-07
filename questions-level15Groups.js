// بطل سرقة يا حرامي هتروح النار 😈

// Level 15 questions SPLITTED into 5 GROUPS
// ملاحظة: level15Questions قليل جداً، أضفت أسئلة إضافية تربوية/شخصية

// 1. عربي
const arabic = [
  {"question": "زرتُ المريضَ زيارتين، أعرب كلمة (زيارتين)", "options": ["مفعول به", "حال", "مفعول مطلق"], "answer": "مفعول مطلق"},
  {"question": "تضع الشركة خصم.................. بالمئة", "options": ["خمسون بالمئة", "خمسين بالمئة"], "answer": "خمسين بالمئة"},
  // أضف المزيد...
];

// 2. معلومات عامة
const general = [
  {"question": "عدد الدول العربية ١٢ في افريقيا", "options": ["صح", "خطا"], "answer": "خطا"},
  {"question": "عدلي منصور تولي الرئاسة عام 2014", "options": ["صح", "خطا"], "answer": "خطا"},
  // أضف...
];

// 3. حاسب
const computer = [
  {"question": "ما هو الاختصار المستخدم لتحديد كل الخلايا في Excel؟", "options": ["Ctrl + S", "Ctrl + P", "Ctrl + C", "Ctrl + A"], "answer": "Ctrl + A"},
  {"question": "ما الفرق بين HDD و SSD؟", "options": ["SSD لا يحتوي على أجزاء ميكانيكية", "HDD أسرع", "SSD أبطأ"], "answer": "SSD لا يحتوي على أجزاء ميكانيكية"},
  // أضف...
];

// 4. إنجليزي
const english = [
  {"question": "What is the opposite of (Happy)?", "options": ["Fast", "Smart", "Sad", "Nice"], "answer": "Sad"},
  {"question": "Choose the countable nouns:", "options": ["Chair", "Water", "Air", "Milk"], "answer": "Chair"},
  // أضف...
];

// 5. تربوي (الأسئلة الأصلية + إضافات)
const educational = [
  {"question": "هل أنت شخص محبوب من عائلتك؟", "options": ["أوافق بشدة", "أوافق", "محايد", "لا أوافق", "لا أوافق بشدة"], "answer": 0},
  {"question": "هل أنت شخص شجاع؟", "options": ["أوافق بشدة", "أوافق", "محايد", "لا أوافق", "لا أوافق بشدة"], "answer": 0},
  {"question": "هل أنت ملتزم بأهدافك؟", "options": ["أوافق بشدة", "أوافق", "محايد", "لا أوافق"], "answer": 0},
  // أضف أسئلة تربوية/شخصية...
];

export const level15Groups = {arabic, general, computer, english, educational};

console.log('✅ questions-level15Groups.js: ', {
  arabic: arabic.length, general: general.length, computer: computer.length, 
  english: english.length, educational: educational.length
});

