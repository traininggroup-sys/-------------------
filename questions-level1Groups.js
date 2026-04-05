// بطل سرقة يا حرامي هتروح النار 😈

// Level 1 questions SPLITTED into 5 GROUPS
// User: EDIT arrays to add your questions. Format: {question, options[], answer, explanation}

// 1. عربي (Arabic/Grammar)
const arabic = [
  {"question": "اختر الجملة الصحيحة:", "options": ["لم ينجو إلا رجلين","لم ينجُ إلا رجلين","لم ينجو إلا رجلان","لم ينجُ إلا رجلان"], "answer": "لم ينجُ إلا رجلان"},
  {"question": "حدد المحسن اللفظي في الآية ﴿ وَيَوْمَ تَقُومُ السَّاعَةُ يُقْسِمُ الْمُجْرِمُونَ مَا لَبِثُوا غَيْرَ سَاعَةٍ ﴾:", "options": ["طباق","مقابلة","جناس تام","جناس ناقص"], "answer": "جناس تام"},
  {"question": "معنى (شم العرانين):", "options": ["أعزة أباة","الأنف","الذين يتدخلون فيما لا يعنيهم"], "answer": "أعزة أباة"},
  {"question": "حدد الجملة التي تحتوي على فعل يبدأ بألف وصل:", "options": ["الرجال يصمدون في الصعاب","حضر الحفل اثنان من الضيوف","اندفع الجنود إلى المعركة","أطعمت الأم ابنها"], "answer": "اندفع الجنود إلى المعركة"},
  {"question": "حدد الجملة الصحيحة:", "options": ["إهتم المصريون بالعلم","اهتم المصرين بالعلم","اهتم المصريين بالعلم","اهتم المصريون بالعلم"], "answer": "اهتم المصريون بالعلم"},
  {"question": "تصغير كلمة (إبل):", "options": ["أُبْيلة","إبَلي","إبلات","آبال"], "answer": "أُبْيلة"},
  {"question": "بين دعاة (حرب) ودعاة (سلام):", "options": ["طباق","مقابلة","ترادف","جناس"], "answer": "طباق"},
  // Add more arabic grammar...
];

// 2. معلومات عامة (General)
const general = [
  {"question": "تولى الرئيس السيسي حكم مصر عام؟", "options": ["2012","2013","2014","2015"], "answer": "2014"},
  {"question": "عاصمة السياحة لعام 2010؟", "options": ["الدوحة","الأقصر","الإسكندرية","الخارجة"], "answer": "الإسكندرية"},
  {"question": "المدينة الصناعية الغذائية سايلو فودز تقع بالسادات محافظة؟", "options": ["الغربية","المنوفية","الشرقية","سوهاج"], "answer": "المنوفية"},
  {"question": "اليوم العالمي لمكافحة الفساد في أي يوم ديسمبر؟", "options": ["14","1","9","19"], "answer": "9"},
  {"question": "إطلاق الاستراتيجية الوطنية للملكية الفكرية عام؟", "options": ["2022","2023","2024","2025"], "answer": "2022"},
  {"question": "مدة تنفيذ الاستراتيجية الوطنية للملكية الفكرية كم سنة؟", "options": ["3","4","5","6"], "answer": "5"},
  {"question": "محمد أنور السادات اُغتيل في ٦ أكتوبر عام ---", "options": ["1981","1983","1994","1987"], "answer": "1981"},
  // Add more general...
];

// 3. حاسب (Computer)
const computer = [
  {"question": "تعريف الحاسب هو:", "options": ["أجهزة مرئية فقط","شبكة من الأجهزة","آلة إلكترونية لمعالجة المعلومات / البيانات","وسيلة لتخزين الصوت فقط"], "answer": "آلة إلكترونية لمعالجة المعلومات / البيانات"},
  {"question": "أي من أنواع الذاكرة التالية تُعد ذاكرة غير متطايرة؟", "options": ["RAM","ROM","Cache","Register"], "answer": "ROM"},
  {"question": "أي من أنواع الذاكرة التالية تُعد ذاكرة متطايرة؟", "options": ["RAM","ROM","Register"], "answer": "RAM"},
  {"question": "الـ BIOS هو جزء من:", "options": ["ROM","RAM","WAN","LAN"], "answer": "ROM"},
  {"question": "ما الفرق الأساسي بين HDD و SSD؟", "options": ["SSD لا يحتوي على أجزاء ميكانيكية","HDD أسرع","SSD أبطأ","HDD لا يُستخدم للتخزين"], "answer": "SSD لا يحتوي على أجزاء ميكانيكية"},
  {"question": "زر Windows في شريط المهام يحتوي على:", "options": ["Apps","Shutdown","Search","جميع ما سبق"], "answer": "جميع ما سبق"},
  // Add more computer...
];

// 4. انجليزي (English)
const english = [
  {"question": "They ____ a new house next year.", "options": ["bought","will buy","buying","buys"], "answer": "will buy"},
  {"question": "I always ____ my mom in the kitchen.", "options": ["helped","helps","helping","help"], "answer": "help"},
  {"question": "What is the opposite of (tall)?", "options": ["Big","Short","Fat","Long"], "answer": "Short"},
  {"question": "What is the opposite of (up)?", "options": ["High","Below","Down","Under"], "answer": "Down"},
  {"question": "Choose the correct past perfect form of (play)", "options": ["Playing","Has played","Had played","Having Played"], "answer": "Had played"},
  // Add more english...
];

// 5. تربوي (Educational)
const educational = [
  {"question": "إعطاء المرأة حق الترشح لأول مرة بالانتخابات عام ---", "options": ["1956","1959","1951","1957"], "answer": "1956"},
  {"question": "إعلان الرئيس عبد الفتاح السيسي عام -- عامًا للمرأة المصرية،", "options": ["2023","2021","2019","2017"], "answer": "2017"},
  {"question": "التزام الدولة المصرية بالمادة -- من الدستور المصري...", "options": ["31","41","51","61"], "answer": "41"},
  {"question": "يعد مشروع إعادة تأهيل وتبطين ترع الري أحدث المشروعات...", "options": ["صح","خطأ"], "answer": "صح"},
  // Add more educational...
];

export const level1Groups = {arabic, general, computer, english, educational};

console.log('✅ questions-level1Groups.js: ', {
  arabic: arabic.length, 
  general: general.length, 
  computer: computer.length, 
  english: english.length, 
  educational: educational.length
});
