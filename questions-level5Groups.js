// بطل سرقة يا حرامي هتروح النار 😈

// Level 5 questions SPLITTED into 5 GROUPS (من level5.js)

// 1. عربي (Arabic/Grammar)
const arabic = [
  {"question": "الفعل (اختبَرَ):", "options": ["ألف وصل","همزة قطع"], "answer": "ألف وصل"},
  {"question": "المذكرتان .......... مفيدتان:", "options": ["كلتاهما","كلاهما"], "answer": "كلتاهما"},
  {"question": "كلمة (شتان):", "options": ["فعل أمر","فعل مضارع بمعنى يفترق","اسم فعل ماض بمعنى افترق"], "answer": "اسم فعل ماض بمعنى افترق"},
  {"question": "قال الرجل لأولاده ( ) ما أجمل رؤيتي لكم ( ):", "options": ["فاصلة - علامة استفهام","فاصلة - علامة تعجب","نقطتان رأسيتان - علامة تعجب"], "answer": "نقطتان رأسيتان - علامة تعجب"},
  {"question": "قال المعلم لتلاميذه ( ) أنتم المستقبل ( ):", "options": ["نقطتان رأسيتان - نقطة","نقطتان رأسيتان - علامة تعجب"], "answer": "نقطتان رأسيتان - نقطة"},
  {"question": "قِ:", "options": ["اسم","فعل","حرف"], "answer": "فعل"},
  {"question": "عِ:", "options": ["اسم","فعل","حرف"], "answer": "فعل"},
  {"question": "تِ:", "options": ["اسم","فعل","حرف"], "answer": "فعل"},
  {"question": "الداعي يقول (اجعل الجملة للجمع):", "options": ["اللاعيين يقولون","الداعوون يقولون","الداعون يقولون","الداعون يقولوا"], "answer": "الداعون يقولون"},
  {"question": "اختر الجملة الصحيحة:", "options": ["أصبحَ التدخينُ ممنوعًا في الأماكنِ العامة","أصبحَ التدخينَ ممنوعٌ في الأماكنِ العامة","أصبح التدخينُ ممنوعًا في الأماكنَ العامة"], "answer": "أصبحَ التدخينُ ممنوعًا في الأماكنِ العامة"},
  {"question": "رأيت ست وعشرين طالبةً — الصحيح:", "options": ["رأيت ست وعشرون طالبةً","رأيت ست وعشرين طالبةً","رأيت ستة وعشرون طالبةً"], "answer": "رأيت ست وعشرين طالبةً"}
];

// 2. معلومات عامة (General)
const general = [
  {"question": "تقع محطة مياه -العدوة- بمحافظة؟", "options": ["المنيا","الأقصر","الإسكندرية","القاهرة"], "answer": "المنيا"},
  {"question": "رواية -لباب المفتوح- من تأليف الكاتبة والأديبة المصرية؟", "options": ["نور السعيد","لطيفة الزيات","نوال السعداوي","لا شيء مما سبق"], "answer": "لطيفة الزيات"},
  {"question": "من اختصاصات المجلس القومي للمدفوعات زيادة استخدام أوراق النقد خارج القطاع المصرفي؟", "options": ["صح","خطأ"], "answer": "خطأ"},
  {"question": "أول سيدة تتقلد منصب وزيرة في مصر عندما اختارها الرئيس جمال عبد الناصر وزيرة للشئون الاجتماعية عام 1962 هي؟", "options": ["سميرة موسى","لطيفة الزيات","حكمت أبو زيد","عائشة محمد"], "answer": "حكمت أبو زيد"},
  {"question": "اختصار منظمة الأمم المتحدة للتنمية الصناعية هو؟", "options": ["اليونيدو","اليونيسكو","الفاو","الأونكتاد","اليونيسف","الإسيسكو"], "answer": "اليونيدو"},
  {"question": "اختصار منظمة الأمم المتحدة للتربية والعلوم والثقافة هو؟", "options": ["اليونيدو","اليونيسكو","الفاو","الأونكتاد","اليونيسف","الإسيسكو"], "answer": "اليونيسكو"},
  {"question": "اختصار منظمة الأمم المتحدة للأغذية والزراعة هو؟", "options": ["اليونيدو","اليونيسكو","الفاو","الأونكتاد","اليونيسف","الإسيسكو"], "answer": "الفاو"},
  {"question": "اختصار منظمة الأمم المتحدة للتجارة والتنمية هو؟", "options": ["اليونيدو","اليونيسكو","الفاو","الأونكتاد","اليونيسف","الإسيسكو"], "answer": "الأونكتاد"},
  {"question": "المنظمة التابعة للأمم المتحدة المكلفة بحماية حقوق كل طفل في كل مكان هي؟", "options": ["اليونيدو","اليونيسكو","الفاو","الأونكتاد","اليونيسف","الإسيسكو"], "answer": "اليونيسف"},
  {"question": "اختصار منظمة العالم الإسلامي للتربية والعلوم والثقافة هو؟", "options": ["اليونيدو","اليونيسكو","الفاو","الأونكتاد","اليونيسف","الإسيسكو"], "answer": "الإسيسكو"},
  {"question": "مجمع صوامع عرب العليقات بمدينة الخانكة بمحافظة ----", "options": ["بني سويف","الجيزة","الإسكندرية","القليوبية"], "answer": "القليوبية"}
];

// 3. حاسب (Computer)
const computer = [
  {"question": "لتشغيل الحاسوب يلزم تشغيل:", "options": ["وحدة التخزين فقط","المعالج فقط","وحدة النظام والشاشة ونظام التشغيل","الطابعة ولوحة المفاتيح"], "answer": "وحدة النظام والشاشة ونظام التشغيل"},
  {"question": "أي مما يلي يُعد جزءًا من وحدة النظام؟", "options": ["وحدة المعالجة المركزية","الشاشة","القرص المدمج","القرص المرن"], "answer": "وحدة المعالجة المركزية"},
  {"question": "الأشياء العشوائية تُسمّى", "options": ["ثابتة","عشوائية Random","مرتّبة","منظمة"], "answer": "عشوائية Random"},
  {"question": "ما وظيفة نظام التشغيل الأساسية؟", "options": ["عمل التقارير والرسائل وجداول البيانات","التحكم في عمليات الحاسب","التحكم في انتقال البيانات من وإلى وحدة المعالجة المركزية","إعداد نسخة احتياطية لملفات الحاسب"], "answer": "التحكم في عمليات الحاسب"},
  {"question": "الجهاز المستخدم لإدخال البيانات:", "options": ["البرامج","جهاز الإدخال","جهاز الإخراج","الذاكرة"], "answer": "جهاز الإدخال"},
  {"question": "اسم الشاشة التي تتعرف على اللمس:", "options": ["Recog Screen","Point Screen","شاشة اللمس Touch Screen","Android Screen"], "answer": "شاشة اللمس Touch Screen"},
  {"question": "يُطلق على الناتج المطبوع من الكمبيوتر اسم:", "options": ["نسخة الكترونية","نسخ","نسخة مطبوعة","ورق"], "answer": "نسخة مطبوعة"},
  {"question": "يطلق على النتائج المعروضة على شاشة الكمبيوتر اسم:", "options": ["نسخة الكترونية","وحدة العرض المرئية","نسخة مطبوعة","نسخة الشاشة"], "answer": "نسخة الكترونية"},
  {"question": "أي مما يلي ليس برنامج تحرير صور؟", "options": ["Photoshop","MS PowerPoint","Corel Draw","MS Paint"], "answer": "MS PowerPoint"},
  {"question": "عدد أشرطة التمرير في النافذة:", "options": ["2","1","3","4"], "answer": "2"}
];

// 4. انجليزي (English)
const english = [
  {"question": "Made of metal and plastic and used in writing.", "options": ["Ruler","Eraser","Pencil","Pen"], "answer": "Pen"},
  {"question": "When we mix black color with white color, the result is?", "options": ["Red","Grey","Black","White"], "answer": "Grey"},
  {"question": "Where do we go to play sports?", "options": ["School","Mosque","Club","Home"], "answer": "Club"},
  {"question": "What is the season before summer? What is the season after the winter?", "options": ["Winter","Autumn","Summer","Spring"], "answer": "Spring"},
  {"question": "We feel cold in the ____.", "options": ["Summer","Winter","Autumn","Summer"], "answer": "Winter"},
  {"question": "A sea animal with a shell", "options": ["Fish","Turtle","Octopus","Whale"], "answer": "Turtle"},
  {"question": "Resala is a big____.", "options": ["Hospital","Restaurant","Charity","School"], "answer": "Charity"},
  {"question": "___ help some people to see better.", "options": ["Glasses","Shoes","Watches","Gloves"], "answer": "Glasses"},
  {"question": "An animal climbs trees?", "options": ["Dog","Elephant","Horse","Monkey"], "answer": "Monkey"},
  {"question": "We use _ to navigate on the computer screen.", "options": ["Keyboard","Mouse","Monitor","Printer"], "answer": "Mouse"},
  {"question": "Which animal is well known for its ability to mimic human actions?", "options": ["Horse 🐎","Dog 🐕","Monkey 🐒","Cat 🐈"], "answer": "Monkey 🐒"},
  {"question": "Which animal has wings and a beak?", "options": ["Dog 🐶","Fish 🐟","Rabbit 🐰","Bird 🐦"], "answer": "Bird 🐦"}
];

// 5. تربوي (Educational)
const educational = [
  {"question": "What is the opposite of (Happy)?", "options": ["Fast","Smart","Sad","Nice"], "answer": "Sad"},
  {"question": "What is the opposite of (Old)?", "options": ["New","Fresh","Young","Used"], "answer": "New"},
  {"question": "What is the opposite of (fast)?", "options": ["Slow","Speedy","Rapid","Quick"], "answer": "Slow"},
  {"question": "What is the opposite of (quiet)?", "options": ["Still","Peaceful","Loud","Calm"], "answer": "Loud"},
  {"question": "What is the opposite of (Open)?", "options": ["Down","Far","Closed","Wide"], "answer": "Closed"},
  {"question": "What can you smell?", "options": ["All of them","Food 🍲","Perfume 💐","Flower 🌸"], "answer": "All of them"},
  {"question": "Which of these is fast and has wings?", "options": ["Bird 🐦","Cheetah 🐆","Rabbit 🐰","Horse 🐎"], "answer": "Bird 🐦"},
  {"question": "A ____ is tall, long, and has many branches.", "options": ["Grass 🌿","Flower 🌸","Plant 🪴","Tree 🌳"], "answer": "Tree 🌳"},
  {"question": "What is the smallest animal?", "options": ["Bird 🐦","Spider 🕷","Ant 🐜","Elephant 🐘"], "answer": "Ant 🐜"},
  {"question": "We travel with a ______.","options": ["Food","Passport","Bag","License"],"answer": "Passport"},
  {"question": "Put the verb (see) in the past perfect continuous tense:", "options": ["Seen","Has seen","Saw","Had been seeing"], "answer": "Had been seeing"},
  {"question": "Choose the correct tense of the verb in the sentence: (He is speaking.)", "options": ["Present Continuous","Future Simple","Past Simple","Present Simple"], "answer": "Present Continuous"}
];

export const level5Groups = {arabic, general, computer, english, educational};

console.log('✅ questions-level5Groups.js: ', {
  arabic: arabic.length, 
  general: general.length, 
  computer: computer.length, 
  english: english.length, 
  educational: educational.length,
  total: arabic.length + general.length + computer.length + english.length + educational.length
});
