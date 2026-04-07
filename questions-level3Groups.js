// بطل سرقة يا حرامي هتروح النار 😈

// Level 3 questions SPLITTED into 5 GROUPS
// User: EDIT arrays to add your questions. Format: {question, options[], answer, explanation}

// 1. عربي (Arabic/Grammar)
const arabic = [
  {"question": "نوع الواو في (الرجال يدعون):", "options": ["أصلية", "زائدة"], "answer": "زائدة"},
  {"question": "النون في (الرجال يدعون):", "options": ["علامة رفع", "نون نسوة"], "answer": "علامة رفع"},
  {"question": "النون في (النساء يدعون):", "options": ["علامة رفع", "نون النسوة"], "answer": "نون النسوة"},
  {"question": "اختر الكلمة الصحيحة:", "options": ["سوءًا", "سوءً", "سوئًا", "سوأً"], "answer": "سوءًا"},
  {"question": "الفعل الذي يبدأ بهمزة قطع:", "options": ["اجبر", "اجبار", "انجبر"], "answer": "اجبر"},
  {"question": "المصدر الذي يبدأ بهمزة قطع:", "options": ["انجبار", "انجبر", "اجبار", "اجبر"], "answer": "اجبار"},
  {"question": "عندما يعمل أصدقاء قاسم على مساعدته:", "options": ["ساعد قاسمُ أصدقاءه","ساعد قاسم أصدقائه","ساعد قاسمًا أصدقاؤه","ساعد قاسمًا أصدقاءه"], "answer": "ساعد قاسمًا أصدقاؤه"},
  {"question": "عندما يعمل ماجد على مساعدة الأصدقاء:", "options": ["ساعد ماجدُ أصدقاءه","ساعد ماجدُ أصدقائه","ساعد ماجدًا أصدقاؤه","ساعد ماجدًا أصدقاءه"], "answer": "ساعد ماجدُ أصدقاءه"},
  {"question": "اختر الجملة الصحيحة:", "options": ["العصى لمن عصى","العصى لمن عصا","العصا لمن عصى"], "answer": "العصا لمن عصى"},
  {"question": "اختر الجملة الصحيحة:", "options": ["جاءت ست وعشرون طالبةّ","جاءت ستة وعشرون طالبةً","جاءت ست وعشرين طالبةٍ"], "answer": "جاءت ست وعشرون طالبةّ"},
  {"question": "جمع كلمة (مقلة):", "options": ["مُقلات","مقل","كلاهما صحيح"], "answer": "كلاهما صحيح"},
  {"question": "جمع كلمة (مغوار):", "options": ["مغاوير","أغوار","كلاهما صحيح"], "answer": "مغاوير"}
];

// 2. معلومات عامة (General)
const general = [
  {"question": "يتم إجراء التعداد السكاني في مصر كل --- سنوات.", "options": ["10","7","5","15"], "answer": "10"},
  {"question": "تقع صوامع أبو صوير في محافظة؟", "options": ["الإسماعيلية","الأقصر","الإسكندرية","القاهرة"], "answer": "الإسماعيلية"},
  {"question": "تقع صومعة الحمام في محافظة؟", "options": ["مطروح","الأقصر","الإسكندرية","القاهرة"], "answer": "مطروح"},
  {"question": "مجلس الأمن السيبراني تابع لـ؟", "options": ["رئاسة مجلس الوزراء","وزارة الخارجية","وزارة الداخلية","وزارة التعليم"], "answer": "رئاسة مجلس الوزراء"},
  {"question": "افتتح الرئيس عبد الفتاح السيسي ميناء أكتوبر الجاف في عام؟", "options": ["2022","2021","2019","2023"], "answer": "2023"},
  {"question": "يقع محور جرجا على نهر النيل بمحافظة؟", "options": ["سوهاج","الأقصر","الإسكندرية","القاهرة"], "answer": "سوهاج"},
  {"question": "تحولت مصلحة التجارة والصناعة إلى وزارة مستقلة في يوليو --- خلال عهد الرئيس جمال عبد الناصر.", "options": ["1982","1950","1956","1992"], "answer": "1956"},
  {"question": "عدد محاور الاستراتيجية الوطنية لحقوق الإنسان هو؟", "options": ["14","3","9","4"], "answer": "4"},
  {"question": "قرر الرئيس عبد الفتاح السيسي في حفل إفطار الأسرة المصرية العفو عن الغارمين عام؟", "options": ["2022","2021","2019","2023"], "answer": "2022"},
  {"question": "صدر قرار إنشاء المجلس القومي للمدفوعات في عام؟", "options": ["2015","2021","2019","2017"], "answer": "2017"},
  {"question": "إعلان الوحدة بين مصر وسوريا عام ---", "options": ["1958","1959","1957","1960"], "answer": "1958"},
  {"question": "المعهد العالي للموسيقى 'الكونسرفاتوار'، معهد متخصص عالي أسّسه المؤلف الموسيقي ___ عام 1959", "options": ["أبو بكر خيرت","نشأت إسماعيل","محمد علي","سليمان حافظ","نشأت إسماعيل"], "answer": "أبو بكر خيرت"}
];

// 3. حاسب (Computer)
const computer = [
  {"question": "الـ Mac هو:", "options": ["برنامج مساعد","برنامج وسائط متعددة","نظام تشغيل","نظام ويندوز"], "answer": "نظام تشغيل"},
  {"question": "يكثر استخدام الوسائط المتعددة في:", "options": ["الأفلام","البرامج التعليمية","برامج الأطفال","كل ما سبق"], "answer": "كل ما سبق"},
  {"question": "كل الآتي يعبر عن الكمبيوتر ما عدا:", "options": ["الإدخال","التخزين","المعالجة","الفهم"], "answer": "الفهم"},
  {"question": "ما هو نظام التشغيل المفتوح المصدر الذي يستخدم في العديد من الخوادم؟", "options": ["Windows","Chrome OS","Mac OS","Linux"], "answer": "Linux"},
  {"question": "نظام التشغيل الذي يعمل به نظام أندرويد:", "options": ["Windows","Android OS","macOS","Linux"], "answer": "Android OS"},
  {"question": "أي من أنظمة التشغيل التالية لا يدعم واجهة المستخدم الرسومية (GUI)؟", "options": ["macOS","DOS","Windows","Linux"], "answer": "DOS"},
  {"question": "اسم نظام التشغيل الذي طوّره العلماء والمهندسون في البداية:", "options": ["DREF","OS/2","UNIX","لا يوجد إجابة صحيحة"], "answer": "UNIX"},
  {"question": "من أنظمة التشغيل ما عدا:", "options": ["Windows XP","Windows LP","Linux","Windows 7"], "answer": "Windows LP"},
  {"question": "كل مما يلي يُعد من أنظمة تشغيل الأجهزة الشخصية (PC) ما عدا:", "options": ["Windows 8","Windows XP","Windows 10 Pro","Windows Server 2008"], "answer": "Windows Server 2008"},
  {"question": "أي مما يلي لا يعتبر نظام تشغيل:", "options": ["ويندوز XP","ويندوز XL","ويندوز 2000","ويندوز 98"], "answer": "ويندوز XL"},
  {"question": "المجلد عبارة عن:", "options": ["ملف","برنامج","مكان لتجميع الملفات وتنظيمها","لوحة تحكم"], "answer": "مكان لتجميع الملفات وتنظيمها"},
  {"question": "قد يحتوي المجلد على:", "options": ["ملفات فقط","ملفات ومجلدات فرعية","مجلدات فرعية فقط","لا شيء مما سبق"], "answer": "ملفات ومجلدات فرعية"}
];

// 4. انجليزي (English)
const english = [
  {"question": "Which animal is well known for its ability to mimic human actions?", "options": ["Horse 🐎","Dog 🐕","Monkey 🐒","Cat 🐈"], "answer": "Monkey 🐒"},
  {"question": "Which animal has wings and a beak?", "options": ["Dog 🐶","Fish 🐟","Rabbit 🐰","Bird 🐦"], "answer": "Bird 🐦"},
  {"question": "What is the fastest animal?", "options": ["Lion 🦁","Horse 🐎","Cheetah 🐆","Elephant 🐘"], "answer": "Cheetah 🐆"},
  {"question": "Which animal is white and lays eggs?", "options": ["Hen / chicken 🐔","Dog 🐶","Cat 🐱","Cow 🐄"], "answer": "Hen / chicken 🐔"},
  {"question": "What is the plural of (Woman)?", "options": ["Wimen","Womanses","Women","Womans"], "answer": "Women"},
  {"question": "What do we use to protect our skin from the sun?", "options": ["Sunscreen","Powder","Soap","Moisturizer"], "answer": "Sunscreen"},
  {"question": "People learn from ____.", "options": ["Himself","People","Experiences","Experience"], "answer": "Experience"},
  {"question": "Who was the poet of the prophet?", "options": ["Ahmed Shawqi","Imru' al-Qais","Al-Mutanabbi","Hassan bin Thabit"], "answer": "Hassan bin Thabit"},
  {"question": "A farmer with a sick cow goes to____.", "options": ["Teacher","Veterinarian","Chef","Mechanic"], "answer": "Veterinarian"},
  {"question": "The country that is known for making films is_____", "options": ["Brazil","Egypt","United States of America","China"], "answer": "United States of America"},
  {"question": "What is the opposite of (Happy)?", "options": ["Fast","Smart","Sad","Nice"], "answer": "Sad"},
  {"question": "What is the opposite of (Old)?", "options": ["New","Fresh","Young","Used"], "answer": "New"}
];

// 5. تربوي (Educational)
const educational = [
  {"question": "الشَّيَم: هي الأرض الصلبة التي لا حفر فيها:", "options": ["صح","خطأ"], "answer": "صح"},
  {"question": "معنى الشيمة: الخلق والطبيعة والفطرة، غريزة وخصلة:", "options": ["صح","خطأ"], "answer": "صح"},
  {"question": "كلمة (ءامين) تكتب (آمين):", "options": ["صح","خطأ"], "answer": "صح"},
  {"question": "حكم تقديم الخبر على المبتدأ في (عليكم السلام):", "options": ["جائز","واجب"], "answer": "جائز"},
  {"question": "حدد صاحب الحال في (جاءوا أباهم عشاءً يبكون):", "options": ["أباهم","الضمير هم","واو الجماعة في جاءوا"], "answer": "واو الجماعة في جاءوا"},
  {"question": "Put the verb (see) in the past perfect continuous tense:", "options": ["Seen","Has seen","Saw","Had been seeing"], "answer": "Had been seeing"},
  {"question": "Choose the correct tense of the verb in the sentence: (He is speaking.)", "options": ["Present Continuous","Future Simple","Past Simple","Present Simple"], "answer": "Present Continuous"},
  {"question": "Put the verb (draw) in the past simple tense:", "options": ["Draws","Drawing","Drew","Drawn"], "answer": "Drew"},
  {"question": "Choose the correct present perfect form of (have):", "options": ["Haves","Has/have had","Having","Had"], "answer": "Has/have had"},
  {"question": "Choose the correct present perfect form of the verb (run)", "options": ["Ran","Running","Runs","Has/have run"], "answer": "Has/have run"},
  {"question": "What can you smell?", "options": ["All of them","Food 🍲","Perfume 💐","Flower 🌸"], "answer": "All of them"},
  {"question": "Which of these is fast and has wings?", "options": ["Bird 🐦","Cheetah 🐆","Rabbit 🐰","Horse 🐎"], "answer": "Bird 🐦"},
  {"question": "A ____ is tall, long, and has many branches.", "options": ["Grass 🌿","Flower 🌸","Plant 🪴","Tree 🌳"], "answer": "Tree 🌳"},
  {"question": "What is the smallest animal?", "options": ["Bird 🐦","Spider 🕷","Ant 🐜","Elephant 🐘"], "answer": "Ant 🐜"},
  {"question": "We travel with a ______.","options": ["Food","Passport","Bag","License"],"answer": "Passport"}
];

export const level3Groups = {arabic, general, computer, english, educational};

console.log('✅ questions-level3Groups.js: ', {
  arabic: arabic.length, 
  general: general.length, 
  computer: computer.length, 
  english: english.length, 
  educational: educational.length,
  total: arabic.length + general.length + computer.length + english.length + educational.length
});
