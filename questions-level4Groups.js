// بطل سرقة يا حرامي هتروح النار 😈

// Level 4 questions SPLITTED into 5 GROUPS (من level4.js)

// 1. عربي (Arabic/Grammar)
const arabic = [
  {"question": "من يعمل خيرًا يجد خيرًا — كلمة (يعمل):", "options": ["فعل الشرط فعل مضارع مجزوم بالسكون","فعل الشرط فعل مضارع منصوب بالفتحة","فعل الشرط فعل مضارع مرفوع بالضمة"], "answer": "فعل الشرط فعل مضارع مجزوم بالسكون"},
  {"question": "اتقِ الله وأتقن عملك — كلمة (اتقِ):", "options": ["فعل أمر مبني على السكون","فعل أمر مبني على حذف حرف العلة","فعل أمر مبني على الكسر"], "answer": "فعل أمر مبني على حذف حرف العلة"},
  {"question": "اختر الجملة الصحيحة:", "options": ["أصبح التدخينَ ممنوعًا","أصبح التدخينُ ممنوعًا","أصبح التدخينَ ممنوعٌ"], "answer": "أصبح التدخينُ ممنوعًا"},
  {"question": "كُتبت الهمزة في كلمة (يملأ) على ألف:", "options": ["لأنها متطرفة بعد فتحة","لأنها متطرفة","لأن الهمزة مفتوحة"], "answer": "لأنها متطرفة بعد فتحة"},
  {"question": "العلاقة بين كلمتي (مُرسِل – مُرسَل):", "options": ["ترادف","مقابلة","جناس"], "answer": "جناس"},
  {"question": "رأيت ست وعشرين طالبةً — الصحيح:", "options": ["رأيت ست وعشرون طالبةً","رأيت ست وعشرين طالبةً","رأيت ستة وعشرون طالبةً"], "answer": "رأيت ست وعشرين طالبةً"},
  {"question": "سلمت على ست وعشرين طالبةً — الصحيح:", "options": ["سلمت على ست وعشرون","سلمت على ست وعشرين","سلمت على ستة وعشرون"], "answer": "سلمت على ست وعشرين طالبةً"},
  {"question": "نوع الواو في (الرجال يدعون):", "options": ["أصلية","زائدة"], "answer": "زائدة"},
  {"question": "النون في (الرجال يدعون):", "options": ["علامة رفع","نون نسوة"], "answer": "علامة رفع"},
  {"question": "النون في (النساء يدعون):", "options": ["علامة رفع","نون النسوة"], "answer": "نون النسوة"},
  {"question": "جمع كلمة (مقلة):", "options": ["مُقلات","مقل","كلاهما صحيح"], "answer": "كلاهما صحيح"}
];

// 2. معلومات عامة (General)
const general = [
  {"question": "افتتاح المركز المتكامل لتجميع البلازما كان عام؟", "options": ["2022","2023","2020","2021"], "answer": "2021"},
  {"question": "افتتاح مصنع معالجة وتدوير المخلفات البلدية الصلبة بتونة الجبل كان عام؟", "options": ["2022","2023","2024","2025"], "answer": "2023"},
  {"question": "أول مركز متكامل في أفريقيا والشرق الأوسط لتجميع البلازما تم إنشاؤه في؟", "options": ["العين السخنة","العين السقعة","مدينة السادس من أكتوبر","مدينة شرم الشيخ"], "answer": "مدينة السادس من أكتوبر"},
  {"question": "افتتاح محطة معالجة صرف صحي أبو صير تقع بمحافظة؟", "options": ["بني سويف","الإسماعيلية","الإسكندرية","القاهرة"], "answer": "بني سويف"},
  {"question": "نوع من التكتل التجاري يتألف من منطقة تجارة حرة مع تعرفة جمركية وسياسات خارجية مشتركة هو؟", "options": ["الاتحاد العالمي","الاتحاد الجمركي","المجلس القومي الجمركي","لا شيء مما سبق"], "answer": "الاتحاد الجمركي"},
  {"question": "مجمع صوامع عرب العليقات بمدينة الخانكة بمحافظة ----", "options": ["بني سويف","الجيزة","الإسكندرية","القليوبية"], "answer": "القليوبية"},
  {"question": "كتاب -صفحة جديدة- هو أحد أعمال الكاتب؟", "options": ["أنور السادات","طه حسين","علاء الديب","لا شيء مما سبق"], "answer": "علاء الديب"},
  {"question": "توفي سعد زغلول في القاهرة عام؟", "options": ["1999","1919","1929","1927"], "answer": "1927"},
  {"question": "المجلس القومي لمكافحة الإرهاب والتطرف تم إنشاؤه عام؟", "options": ["2015","2017","2018","2016"], "answer": "2017"},
  {"question": "تم إنشاء المجلس الأعلى لمواجهة الإرهاب والتطرف عام؟", "options": ["2015","2017","2018","2016"], "answer": "2018"},
  {"question": "صدر قانون مكافحة الإرهاب في مصر عام؟", "options": ["2015","2017","2018","2016"], "answer": "2015"},
  {"question": "يتم إجراء التعداد السكاني في مصر كل --- سنوات.", "options": ["10","7","5","15"], "answer": "10"}
];

// 3. حاسب (Computer)
const computer = [
  {"question": "أيٌّ من التالي ليس إصدارًا من نظام تشغيل ويندوز للحواسيب الشخصية:", "options": ["ME","98","XP","Linux","95"], "answer": "Linux"},
  {"question": "أي مما يلي ليس نظام تشغيل؟", "options": ["Windows","Android","Unix","Joby How"], "answer": "Joby How"},
  {"question": "البرنامج المسؤول عن إدارة الموارد في الحاسوب يسمى:", "options": ["برنامج مضاد فيروسات","نظام تشغيل","محرر نصوص","متصفح ويب"], "answer": "نظام تشغيل"},
  {"question": "عند تسجيل ملفات المستخدم أين يتم تخزينها؟", "options": ["RAM","ROM","Hard Disk"], "answer": "Hard Disk"},
  {"question": "يُعتبر نظام تشغيل:", "options": ["Unix","Word","PowerPoint","Excel"], "answer": "Unix"},
  {"question": "أي مما يلي يُعد برنامج نظام تشغيل؟", "options": ["معالجة النصوص / قواعد البيانات / جداول البيانات","مستعرض الملفات / جهاز الكمبيوتر / المستندات","مستعرض الإنترنت / نيتسكيب / أوتلوك","ويندوز XP / لينكس / فيستا"], "answer": "ويندوز XP / لينكس / فيستا"},
  {"question": "أيٌّ مما يلي يُعد برنامج نظام تشغيل؟", "options": ["برنامج التشغيل (Driver)","برنامج التصفح (Browser)","برنامج البرمجة","لا توجد إجابة صحيحة"], "answer": "لا توجد إجابة صحيحة"},
  {"question": "زر Windows في شريط المهام يحتوي على:", "options": ["Apps","Shutdown","Search","جميع ما سبق"], "answer": "جميع ما سبق"},
  {"question": "أي العبارات التالية تصف وضع Sleep؟", "options": ["يتم حفظ جميع البيانات ويتم إيقاف تشغيل الجهاز بالكامل","يتم إغلاق التطبيقات ويُعاد تشغيل النظام تلقائيًا","يستمر الجهاز في العمل بكامل طاقته دون حفظ","يتم إيقاف تشغيل الشاشة وتقليل استهلاك الطاقة مع بقاء البرامج والملفات مفتوحة"], "answer": "يتم إيقاف تشغيل الشاشة وتقليل استهلاك الطاقة مع بقاء البرامج والملفات مفتوحة"},
  {"question": "الـ BIOS هو جزء من:", "options": ["ROM","RAM","WAN","LAN"], "answer": "ROM"},
  {"question": "وظيفة الـ BIOS هي:", "options": ["تخزين الملفات","تحرير النصوص","برنامج يُحمّل نظام التشغيل عند بدء تشغيل الجهاز","تصميم عروض"], "answer": "برنامج يُحمّل نظام التشغيل عند بدء تشغيل الجهاز"},
  {"question": "أبطأ أنواع الطابعات:", "options": ["طابعة دايزي ويل","طابعة الليزر","طابعة نفث الحبر","الطابعة النقطية"], "answer": "طابعة دايزي ويل"}
];

// 4. انجليزي (English)
const english = [
  {"question": "Dr. Magdy Yacoub is___ .", "options": ["Surgeon","Lawyer","Teacher","Pharmacist"], "answer": "Surgeon"},
  {"question": "What is the result of mixing red color with yellow color?", "options": ["Green","Brown","Purple","Orange"], "answer": "Orange"},
  {"question": "What do we wear on our eyes to protect them from the sun?", "options": ["Blouse","Sunglasses","Mask","Hat"], "answer": "Sunglasses"},
  {"question": "What is the correct spelling of the word in the sentence: (The volcano _____) ?", "options": ["Exploded","Expoloded","Exploaded","Ecploded"], "answer": "Exploded"},
  {"question": "When we eat, we use ____.", "options": ["Ruler","Brush","Pen","Spoon"], "answer": "Spoon"},
  {"question": "I ____ a headache.", "options": ["Having","Havee","Have","Has"], "answer": "Have"},
  {"question": "The _____ is the most important person in the company.", "options": ["Manager","Janitor","Customer","Driver"], "answer": "Manager"},
  {"question": "What is the device used to print the paper?", "options": ["Monitor","Camera","Computer","Printer"], "answer": "Printer"},
  {"question": "What do we use after a shower to dry our bodies and hands?", "options": ["Razor","Towel","Sponge","Lotion"], "answer": "Towel"},
  {"question": "What do we call the person who makes and sells bread?", "options": ["Doctor","Baker","Teacher","Worker"], "answer": "Baker"},
  {"question": "What is the opposite of (tall)?", "options": ["Big","Short","Fat","Long"], "answer": "Short"},
  {"question": "What is the opposite of (up)?", "options": ["High","Below","Down","Under"], "answer": "Down"}
];

// 5. تربوي (Educational)
const educational = [
  {"question": "إعطاء المرأة حق الترشح لأول مرة بالانتخابات عام ---", "options": ["1956","1959","1951","1957"], "answer": "1956"},
  {"question": "إعلان الرئيس عبد الفتاح السيسي عام -- عامًا للمرأة المصرية،", "options": ["2023","2021","2019","2017"], "answer": "2017"},
  {"question": "يعد مشروع إعادة تأهيل وتبطين ترع الري أحدث المشروعات المصرية لمواجهة أزمة العجز المائي", "options": ["صح","خطأ"], "answer": "صح"},
  {"question": "صدر قانون مكافحة الإرهاب عام 2013", "options": ["صح","خطأ"], "answer": "خطأ"},
  {"question": "عند إدخال البيانات إلى جهاز الكمبيوتر، إلى أي جزء يتم إرسالها أولاً للمعالجة؟", "options": ["ذاكرة القراءة فقط (ROM)","الذاكرة المخبأة (Cache Memory)","ذاكرة الوصول العشوائي (RAM)","وحدة المعالجة المركزية (CPU)"], "answer": "ذاكرة الوصول العشوائي (RAM)"},
  {"question": "أي من الأجهزة التالية تُعد وحدة إدخال وإخراج معًا؟", "options": ["لوحة المفاتيح","الفأرة","الميكروفون","شاشة اللمس"], "answer": "شاشة اللمس"},
  {"question": "ما هي وحدة الإدخال والإخراج معًا؟", "options": ["الشاشة","عصا التحكم","طابعة الماسح الضوئي","لوحة المفاتيح"], "answer": "طابعة الماسح الضوئي"},
  {"question": "أيّ الوحدات التالية تُعتبر وحدة إدخال وإخراج؟", "options": ["القرص الصلب","الميكروفون","الفأرة","الطابعة"], "answer": "القرص الصلب"},
  {"question": "أي الوحدات الآتية تُعتبر وحدة إخراج؟", "options": ["عصا اللعب","آلة التصوير الرقمية","الشاشة","الفأرة"], "answer": "الشاشة"},
  {"question": "الوظيفة الأساسية لوحدة المعالجة المركزية:", "options": ["عرض الصور","تخزين البيانات","معالجة البيانات وتنفيذ التعليمات","الاتصال بالإنترنت"], "answer": "معالجة البيانات وتنفيذ التعليمات"},
  {"question": "الجزء المسؤول عن العمليات الحسابية والمنطقية:", "options": ["وحدة الحساب والمنطق","وحدة التحكم","المسجل","ذاكرة الكاش"], "answer": "وحدة الحساب والمنطق"},
  {"question": "ما وظيفة وحدة ALU في الحاسب؟", "options": ["تخزين البيانات","معالجة البيانات","عرض البيانات","التحكم في الأجهزة"], "answer": "معالجة البيانات"}
];

export const level4Groups = {arabic, general, computer, english, educational};

console.log('✅ questions-level4Groups.js: ', {
  arabic: arabic.length, 
  general: general.length, 
  computer: computer.length, 
  english: english.length, 
  educational: educational.length,
  total: arabic.length + general.length + computer.length + english.length + educational.length
});
