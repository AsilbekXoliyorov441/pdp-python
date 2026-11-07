window.COURSE_MODULES = window.COURSE_MODULES || [];
COURSE_MODULES.push({
  id: 1,
  month: 1,
  weeks: "1-2 hafta",
  title: "Python bilan tanishuv",
  icon: "🚀",
  description: "Dasturlash olamiga birinchi qadam: dastur va algoritm nima, birinchi Python dasturini yozamiz, o'zgaruvchilar, ma'lumot turlari, foydalanuvchi bilan muloqot (input) va arifmetik amallarni o'rganamiz.",
  outcomes: [
    "Dastur va algoritm nima ekanini o'z so'zlari bilan tushuntiradi",
    "print() yordamida matn va sonlarni chiqaradi, sep va end parametrlaridan foydalanadi",
    "Izoh (comment) yozadi va oddiy sintaksis xatolarini topib tuzatadi",
    "O'zgaruvchi yaratadi, to'g'ri nom beradi va int, float, str, bool turlarini ajrata oladi",
    "input() bilan ma'lumot oladi, int()/float()/str() bilan turini o'zgartiradi",
    "f-string yordamida chiroyli formatlangan natija chiqaradi",
    "Arifmetik operatorlar (+ - * / // % **) bilan amaliy masalalarni yechadi"
  ],
  lessons: [
    // ===================== 1-DARS =====================
    {
      id: "m1-l1",
      title: "Dasturlash nima? Birinchi dastur",
      duration: 90,
      goals: [
        "Dastur va algoritm tushunchalarini bilish",
        "Nega aynan Python o'rganayotganimizni tushunish",
        "Kod qanday bajarilishini (yuqoridan pastga, qatorma-qator) tushunish",
        "print() bilan matn va sonlarni chiqarish, sep va end dan foydalanish",
        "Izoh yozish va oddiy sintaksis xatolarini tuzatish"
      ],
      keywords: ["dastur", "algoritm", "Python", "print", "izoh", "sep", "end", "SyntaxError"],
      plan: [
        { time: 10, label: "Tanishuv va kirish: dastur nima?" },
        { time: 15, label: "Algoritm, Python va kod qanday ishlaydi" },
        { time: 25, label: "print(), izohlar, sep va end" },
        { time: 10, label: "Sintaksis xatolari va quiz" },
        { time: 25, label: "Amaliy mashqlar" },
        { time: 5, label: "Xulosa va uy vazifasi" }
      ],
      slides: [
        {
          type: "title",
          title: "Dasturlash nima? Birinchi dastur",
          subtitle: "Kompyuter bilan gaplashishni o'rganamiz",
          emoji: "🚀",
          notes: "Kursning birinchi darsi — o'zingizni tanishtiring va o'quvchilardan ismi va qaysi ilovani eng ko'p ishlatishini so'rang. Shu ilovalarni keyingi slaydda misol qilasiz."
        },
        {
          type: "text",
          title: "Dastur nima?",
          body: "**Dastur** — kompyuterga nima qilish kerakligini aytadigan **buyruqlar ketma-ketligi**. Kompyuter o'zi o'ylamaydi: u faqat biz yozgan buyruqlarni juda tez va aniq bajaradi.",
          points: [
            "Telegram, Instagram, PUBG, Click — bularning hammasi dasturlar",
            "Har bir dastur ichida minglab qator **kod** bor",
            "Kodni **dasturchi** yozadi — siz ham kurs oxirida dasturchi bo'lasiz!",
            "Kompyuter faqat **aniq** buyruqni tushunadi: \"taxminan\", \"bir oz\" degan so'zlarni bilmaydi"
          ],
          notes: "Sinfga savol: \"Telefoningizda nechta dastur bor?\" Javoblardan keyin: \"Har birini kimdir yozgan — bugun siz ham birinchi dasturingizni yozasiz\" deng."
        },
        {
          type: "analogy",
          title: "Algoritm — osh retsepti kabi",
          emoji: "🍚",
          text: "Onangiz osh pishirayotganini eslang: avval qozonni qizdiradi, keyin yog' quyadi, go'sht soladi, piyoz, sabzi, so'ng guruch... Agar tartibni buzsangiz — masalan, guruchni birinchi solsangiz — osh chiqmaydi! **Algoritm** — bu masalani yechish uchun **aniq va tartibli qadamlar** ro'yxati. Dastur esa shu algoritmni kompyuter tushunadigan tilda yozilgani.",
          notes: "O'quvchilardan bitta oddiy ish uchun algoritm aytishni so'rang: masalan, \"maktabga borish\" yoki \"telefonni zaryadlash\". Qadamlar tartibini almashtirsa nima bo'lishini muhokama qiling."
        },
        {
          type: "text",
          title: "Yaxshi algoritmning xususiyatlari",
          body: "Choy damlash algoritmi: 1) Choynakka suv quy. 2) Suvni qaynat. 3) Choynakka choy sol. 4) Qaynagan suvni quy. 5) 5 daqiqa kut.",
          points: [
            "**Aniqlik** — har bir qadam bir xil tushuniladi",
            "**Tartib** — qadamlar ketma-ketligi muhim",
            "**Tugallanish** — algoritm albatta tugashi kerak",
            "**Natija** — oxirida aniq natija bo'ladi (tayyor choy ☕)"
          ],
          notes: "Doskada choy algoritmini yozing va bitta qadamni o'chirib, \"Endi nima bo'ladi?\" deb so'rang. Bu 'aniqlik' tushunchasini yaxshi ko'rsatadi."
        },
        {
          type: "text",
          title: "Nega aynan Python?",
          body: "Dunyoda yuzlab dasturlash tillari bor: C++, Java, JavaScript... Biz **Python** dan boshlaymiz, chunki:",
          points: [
            "**Oddiy va o'qilishi oson** — kod deyarli ingliz tilidagi gapga o'xshaydi",
            "**Kuchli** — YouTube, Instagram, Netflix qismlari Python'da yozilgan",
            "**Sun'iy intellekt** (ChatGPT kabi), ma'lumotlar tahlili, o'yinlar, botlar — hammasida ishlatiladi",
            "Telegram bot yozish uchun eng qulay tillardan biri",
            "Dunyodagi eng mashhur tillardan biri — ish topish oson"
          ],
          notes: "Qiziqtirish uchun aytib o'ting: modul 8 oxirida o'zlari kichik o'yin/dastur yozishadi. 3 daqiqadan oshirmang."
        },
        {
          type: "text",
          title: "Kod qanday ishlaydi?",
          body: "Biz yozgan kodni **Python interpretatori** o'qiydi va bajaradi. U kodni **yuqoridan pastga, qatorma-qator** bajaradi.",
          points: [
            "1-qator bajariladi, keyin 2-qator, keyin 3-qator...",
            "Agar biror qatorda xato bo'lsa — dastur shu yerda to'xtaydi va xato xabarini chiqaradi",
            "Bizning platformada kod yozib, **▶ Ishga tushirish** tugmasini bosamiz",
            "Natija pastdagi **konsol** oynasida ko'rinadi"
          ],
          notes: "Platformani proyektorda ochib ko'rsating: kod oynasi qayerda, ▶ tugmasi qayerda, natija qayerda chiqadi. Bu keyingi barcha darslar uchun muhim."
        },
        {
          type: "code",
          title: "Birinchi dastur: print()",
          code: `print("Salom, dunyo!")
print("Mening ismim Python")
print("Men 1991-yilda yaratilganman")`,
          explain: [
            "`print()` — ekranga chiqarish buyrug'i (funksiya)",
            "Qavs ichidagi narsa ekranga chiqadi",
            "Matn doim **qo'shtirnoq** ichida yoziladi: `\"...\"` yoki `'...'`",
            "Har bir `print()` yangi qatordan chiqaradi"
          ],
          output: `Salom, dunyo!
Mening ismim Python
Men 1991-yilda yaratilganman`,
          notes: "\"Salom, dunyo!\" — dasturchilarning an'anaviy birinchi dasturi ekanini ayting. Har bir o'quvchi o'z kompyuterida yozib ishga tushirsin (3 daqiqa)."
        },
        {
          type: "code",
          title: "Matn va son: farqi bormi?",
          code: `print(5 + 3)
print("5 + 3")
print(10 * 2)
print("Ali", "Vali", "G'ani")
print("Yosh:", 14)`,
          explain: [
            "`5 + 3` — qo'shtirnoqsiz, Python hisoblaydi: **8**",
            "`\"5 + 3\"` — qo'shtirnoq ichida, bu oddiy **matn**, hisoblanmaydi",
            "Vergul bilan bir nechta narsani chiqarish mumkin",
            "Vergul bilan ajratilganlar orasiga avtomatik **bo'sh joy** qo'yiladi"
          ],
          output: `8
5 + 3
20
Ali Vali G'ani
Yosh: 14`,
          notes: "Ishga tushirishdan oldin sinfdan har bir qator natijasini taxmin qilishni so'rang. 2-qatorda ko'pchilik 8 deydi — aynan shu farqni ta'kidlang."
        },
        {
          type: "quiz",
          question: "Bu kod nima chiqaradi?",
          code: `print("7 * 2")`,
          options: ["14", "7 * 2", "72", "Xato beradi"],
          answer: 1,
          explain: "Qo'shtirnoq ichidagi hamma narsa **matn**. Python uni hisoblamaydi, xuddi yozilganidek chiqaradi: `7 * 2`.",
          notes: "Qo'l ko'tarib ovoz bering. 14 deganlarga oldingi slayddagi 2-qatorni qayta ko'rsating."
        },
        {
          type: "code",
          title: "Izohlar (comments)",
          code: `# Bu mening birinchi dasturim
# Muallif: Aziz, 8-sinf

print("Salom!")  # salomlashish
# print("Bu qator bajarilmaydi")
print("Xayr!")`,
          explain: [
            "`#` belgisidan keyingi hamma narsa — **izoh**",
            "Python izohlarni **o'qimaydi**, ular odamlar uchun",
            "Izoh kod nima qilishini tushuntiradi",
            "Qatorni vaqtincha o'chirish uchun boshiga `#` qo'yish mumkin"
          ],
          output: `Salom!
Xayr!`,
          notes: "Izoh — boshqa dasturchiga (va 1 oydan keyingi o'zingizga) yozilgan xat deb tushuntiring. 4-qatordagi # ni olib tashlab, qayta ishga tushirib ko'rsating."
        },
        {
          type: "code",
          title: "sep — ajratuvchi belgi",
          code: `print("08", "09", "2026")
print("08", "09", "2026", sep=".")
print("08", "09", "2026", sep="/")
print("Ali", "Vali", "Soli", sep=" | ")
print("a", "b", "c", sep="")`,
          explain: [
            "Odatda vergullar orasiga bo'sh joy qo'yiladi — bu `sep=\" \"`",
            "`sep=\".\"` — har bir qism orasiga nuqta qo'yadi",
            "`sep` ga istalgan matn berish mumkin: `\" | \"`, `\"-\"`, `\"\"`",
            "`sep=\"\"` — umuman ajratmasdan, yopishtirib chiqaradi"
          ],
          output: `08 09 2026
08.09.2026
08/09/2026
Ali | Vali | Soli
abc`,
          notes: "sep = separator (ajratuvchi) so'zidan. Sinfdan so'rang: telefon raqamini 90-123-45-67 ko'rinishida qanday chiqaramiz?"
        },
        {
          type: "code",
          title: "end — qator oxiri",
          code: `print("Salom", end=" ")
print("dunyo!")
print("Yuklanmoqda", end="...")
print("tayyor!")
print("1-qator", "2-qator", sep="\\n")`,
          explain: [
            "Odatda `print()` oxirida **yangi qatorga o'tadi**",
            "`end=\" \"` — yangi qator o'rniga bo'sh joy qo'yadi, keyingi print shu qatorda davom etadi",
            "`end=\"...\"` — oxiriga uch nuqta qo'yadi",
            "`\\n` — maxsus belgi: **yangi qator**. `sep=\"\\n\"` har bir qismni alohida qatorga chiqaradi"
          ],
          output: `Salom dunyo!
Yuklanmoqda...tayyor!
1-qator
2-qator`,
          notes: "\\n ni \"enter tugmasi\" deb tushuntiring. Ko'p o'quvchi teskari chiziqni (\\) / bilan adashtiradi — klaviaturada qayerdaligini ko'rsating."
        },
        {
          type: "compare",
          title: "Eng ko'p uchraydigan xatolar",
          left: {
            label: "❌ Noto'g'ri",
            code: `Print("Salom")
print("Salom)
print(Salom)
print "Salom"`
          },
          right: {
            label: "✅ To'g'ri",
            code: `print("Salom")
print("Salom")
print("Salom")
print("Salom")`
          },
          good: "right",
          notes: "Har bir xatoni birma-bir so'rang: 1) katta P — Python katta-kichik harfni farqlaydi; 2) qo'shtirnoq yopilmagan; 3) qo'shtirnoqsiz matn — o'zgaruvchi deb o'ylaydi; 4) qavs yo'q."
        },
        {
          type: "text",
          title: "Xato xabarini o'qishni o'rganamiz",
          body: "Xato — bu qo'rqinchli emas! Python bizga **qaysi qatorda** va **qanday** xato borligini aytadi. Xato xabarining **oxirgi qatorini** o'qing.",
          points: [
            "`SyntaxError` — yozilishda xato (qo'shtirnoq, qavs yetishmaydi)",
            "`NameError: name 'Print' is not defined` — Python bunday nomni bilmaydi (Print, Salom)",
            "`line 2` — xato 2-qatorda ekanini bildiradi",
            "Professional dasturchilar ham har kuni xato qiladi — muhimi, tuzatishni bilish"
          ],
          notes: "Proyektorda ataylab xato kod yozib ishga tushiring va xabarni birga o'qing. O'quvchilarga xatodan qo'rqmaslikni o'rgating — bu darsning muhim qismi."
        },
        {
          type: "quiz",
          question: "Bu kod nima chiqaradi?",
          code: `print("Bir", "Ikki", sep="-", end="!")
print("Uch")`,
          options: ["Bir Ikki! (yangi qator) Uch", "Bir-Ikki!Uch", "Bir-Ikki! (yangi qator) Uch", "Bir-Ikki Uch!"],
          answer: 1,
          explain: "`sep=\"-\"` so'zlar orasiga chiziqcha qo'yadi, `end=\"!\"` esa oxiriga undov qo'yadi va **yangi qatorga o'tmaydi**. Shuning uchun \"Uch\" shu qatorda davom etadi: `Bir-Ikki!Uch`.",
          notes: "Qiyinroq savol — 1 daqiqa o'ylashga bering. Keyin kodni ishga tushirib tekshiring."
        },
        {
          type: "task",
          title: "Mashq 1: O'zim haqimda",
          task: "print() yordamida o'zingiz haqingizda 4 qatorli ma'lumot chiqaring: ismingiz, yoshingiz, maktabingiz va sevimli mashg'ulotingiz. Dastur boshiga muallif haqida izoh yozing.",
          starter: `# Muallif: ...
print("Ismim: ...")
`,
          hint: "Har bir ma'lumot uchun alohida `print()` yozing. Izoh `#` bilan boshlanadi.",
          solution: `# Muallif: Madina, 7-sinf
print("Ismim: Madina")
print("Yoshim: 13")
print("Maktabim: 21-maktab")
print("Sevimli mashg'ulotim: rasm chizish")`,
          notes: "5 daqiqa. Yurib chiqib, qo'shtirnoq va qavslarni tekshiring. 2-3 o'quvchi natijasini proyektorda ko'rsating."
        },
        {
          type: "task",
          title: "Mashq 2: Futbol chiptasi",
          task: "sep va end yordamida quyidagi natijani 3 qatorda chiqaring: `Sana: 15.09.2026`, `Paxtakor - Nasaf`, `Joy: A-12`. Sana uchun 15, 09, 2026 ni alohida yozib, sep=\".\" ishlating.",
          starter: `print("Sana:", end=" ")
print("15", "09", "2026", sep=...)
`,
          hint: "Ikkinchi qatorda `sep=\" - \"`, uchinchida `sep=\"-\"` dan foydalaning: `print(\"Joy:\", end=\" \")` keyin `print(\"A\", 12, sep=\"-\")`.",
          solution: `print("Sana:", end=" ")
print("15", "09", "2026", sep=".")
print("Paxtakor", "Nasaf", sep=" - ")
print("Joy:", end=" ")
print("A", 12, sep="-")`,
          notes: "7 daqiqa. Tez tugatganlarga chiptaga ramka qo'shishni taklif qiling: print(\"=\" ...) bilan. Eng chiroyli chiptani proyektorda ko'rsating."
        },
        {
          type: "summary",
          title: "Bugun nimani o'rgandik?",
          points: [
            "**Dastur** — kompyuter uchun buyruqlar ketma-ketligi, **algoritm** — aniq va tartibli qadamlar",
            "Python kodni **yuqoridan pastga, qatorma-qator** bajaradi",
            "`print()` — ekranga chiqaradi; matn qo'shtirnoq ichida, son qo'shtirnoqsiz",
            "`#` — izoh, Python uni bajarmaydi",
            "`sep` — qismlar orasidagi belgi, `end` — qator oxiridagi belgi, `\\n` — yangi qator",
            "Xato xabarining oxirgi qatorini o'qing: SyntaxError, NameError"
          ],
          notes: "Har bir punktni bitta o'quvchiga o'z so'zlari bilan takrorlatib chiqing. Uy vazifasini tushuntiring."
        }
      ],
      homework: [
        { level: "oson", task: "Sevimli 3 ta taomingizning retseptini (algoritmini) qadamma-qadam daftarga yozing, keyin ulardan birini print() bilan ekranga chiqaring (har bir qadam alohida qatorda)." },
        { level: "o'rta", task: "Haftalik dars jadvalingizdan bir kunni chiqaring: kun nomi, keyin har bir dars `1 | Matematika | 08:00` ko'rinishida (sep=\" | \" dan foydalaning). Kodga izohlar yozing." },
        { level: "qiyin", task: "Faqat print() va belgilardan (*, #, /, \\, |, _) foydalanib ekranga uy, mashina yoki futbol to'pi rasmini chizing (kamida 6 qator). Bitta print() da sep=\"\\n\" yordamida bir nechta qatorni chiqarib ko'ring." }
      ]
    },

    // ===================== 2-DARS =====================
    {
      id: "m1-l2",
      title: "O'zgaruvchilar va ma'lumot turlari",
      duration: 90,
      goals: [
        "O'zgaruvchi nima ekanini va qanday yaratilishini tushunish",
        "O'zgaruvchiga to'g'ri nom berish qoidalarini bilish",
        "int, float, str, bool turlarini ajratish va type() dan foydalanish",
        "O'zgaruvchiga qayta qiymat berish, bir nechta o'zgaruvchiga birdan qiymat berish",
        "Ikki o'zgaruvchi qiymatlarini almashtirish (swap)"
      ],
      keywords: ["o'zgaruvchi", "=", "int", "float", "str", "bool", "type", "swap"],
      plan: [
        { time: 10, label: "Takrorlash: print, sep, end, izohlar" },
        { time: 20, label: "O'zgaruvchilar va nomlash qoidalari" },
        { time: 20, label: "Ma'lumot turlari va type()" },
        { time: 15, label: "Qayta qiymat berish, ko'p qiymat, swap" },
        { time: 20, label: "Amaliy mashqlar" },
        { time: 5, label: "Xulosa va uy vazifasi" }
      ],
      slides: [
        {
          type: "title",
          title: "O'zgaruvchilar va ma'lumot turlari",
          subtitle: "Dastur ma'lumotni qanday eslab qoladi?",
          emoji: "📦",
          notes: "Takrorlash: 2 o'quvchiga doskada print bilan sep va end misolini yozdiring (5 daqiqa). Keyin savol: \"O'yinda ochkolaringizni dastur qayerda saqlaydi?\""
        },
        {
          type: "analogy",
          title: "O'zgaruvchi — yorliqli quti",
          emoji: "📦",
          text: "Maktabdagi shkafchani tasavvur qiling: ustida **yorliq** bor (masalan, \"Aziz\"), ichida esa **narsa** (kitob, forma). O'zgaruvchi ham xuddi shunday: uning **nomi** (yorliq) va **qiymati** (ichidagi narsa) bor. Qutidagi narsani istalgan vaqtda almashtirish mumkin — shuning uchun u **o'zgaruvchi** deyiladi. Nomni bilsangiz, ichidagini darhol olasiz.",
          notes: "Doskada quti chizing, ustiga \"yosh\" deb yozing, ichiga 14. Keyin 14 ni o'chirib 15 yozing — \"tug'ilgan kun o'tdi!\". Bu qayta qiymat berishni ham tushuntiradi."
        },
        {
          type: "code",
          title: "O'zgaruvchi yaratish",
          code: `ism = "Jasur"
yosh = 14
bo_y = 1.65
print(ism)
print(yosh)
print("Ismi:", ism, "| Yoshi:", yosh, "| Bo'yi:", bo_y)`,
          explain: [
            "`=` — **qiymat berish** belgisi (matematikadagi tenglik emas!)",
            "Chapda — nom, o'ngda — qiymat: `nom = qiymat`",
            "`print(ism)` — qo'shtirnoqsiz, shuning uchun o'zgaruvchi **qiymati** chiqadi",
            "O'zgaruvchilarni matn bilan birga vergul orqali chiqarish mumkin"
          ],
          output: `Jasur
14
Ismi: Jasur | Yoshi: 14 | Bo'yi: 1.65`,
          notes: "`=` ni \"ga teng\" emas, \"qutiga sol\" deb o'qishni o'rgating: \"ism qutisiga Jasur ni sol\". print(\"ism\") va print(ism) farqini so'rang."
        },
        {
          type: "text",
          title: "O'zgaruvchiga nom berish qoidalari",
          body: "Python nomlarga qat'iy qoidalar qo'yadi. Qoidani buzsangiz — `SyntaxError`.",
          points: [
            "Faqat **harflar, raqamlar va `_`** (pastki chiziq) ishlatiladi",
            "**Raqam bilan boshlanmaydi**: `2ism` ❌, `ism2` ✅",
            "**Bo'sh joy bo'lmaydi**: `tug'ilgan yil` ❌, `tugilgan_yil` ✅",
            "**Apostrof va maxsus belgilar** (', -, !, @) bo'lmaydi: `o'quvchi` ❌, `oquvchi` ✅",
            "**Katta-kichik harf farqli**: `Yosh` va `yosh` — ikki xil o'zgaruvchi",
            "Python so'zlari (`print`, `if`, `for`, `True`...) nom sifatida ishlatilmaydi",
            "Yaxshi nom — **ma'noli**: `x` emas, `narx`, `ball`, `oquvchi_soni`"
          ],
          notes: "O'zbekcha so'zlardagi apostrof (o', g') nomda ishlatilmasligini alohida ta'kidlang — bu o'zbek o'quvchilarining eng ko'p xatosi: o_quvchi yoki oquvchi deb yozish kerak."
        },
        {
          type: "compare",
          title: "To'g'ri va noto'g'ri nomlar",
          left: {
            label: "❌ Noto'g'ri nomlar",
            code: `2sinf = "7-B"
tug'ilgan yil = 2011
o'yinchi-ismi = "Ronaldo"
print = 5`
          },
          right: {
            label: "✅ To'g'ri nomlar",
            code: `sinf2 = "7-B"
tugilgan_yil = 2011
oyinchi_ismi = "Ronaldo"
son = 5`
          },
          good: "right",
          notes: "Har bir chap qatordagi xatoni o'quvchilar o'zi topsin. `print = 5` — xato bermaydi, lekin keyin print() ishlamay qoladi! Buni alohida tushuntiring."
        },
        {
          type: "text",
          title: "4 ta asosiy ma'lumot turi",
          body: "Har bir qiymatning **turi** bor. Tur — Python bu qiymat bilan nima qila olishini belgilaydi.",
          points: [
            "`int` — butun son: `14`, `-5`, `0`, `2026`",
            "`float` — o'nli kasr son (nuqta bilan!): `3.14`, `1.65`, `-0.5`, `5.0`",
            "`str` — matn (string), qo'shtirnoq ichida: `\"Salom\"`, `'Toshkent'`, `\"123\"`",
            "`bool` — mantiqiy qiymat, faqat ikkita: `True` (rost) yoki `False` (yolg'on)",
            "Diqqat: o'nli kasrda **vergul emas, nuqta** yoziladi: `1,65` emas, `1.65`"
          ],
          notes: "Har bir turga sinfdan hayotiy misol so'rang: o'quvchilar soni (int), harorat (float), shahar nomi (str), darsga keldimi (bool)."
        },
        {
          type: "code",
          title: "type() — turini aniqlash",
          code: `print(type(14))
print(type(3.14))
print(type("Salom"))
print(type(True))
print(type("14"))
print(type(14.0))`,
          explain: [
            "`type()` qiymatning turini ko'rsatadi",
            "`\"14\"` — qo'shtirnoq ichida, demak bu **matn** (str), son emas!",
            "`14.0` — nuqtasi bor, demak **float**",
            "`True` va `False` katta harf bilan yoziladi"
          ],
          output: `<class 'int'>
<class 'float'>
<class 'str'>
<class 'bool'>
<class 'str'>
<class 'float'>`,
          notes: "`<class 'int'>` yozuvidan qo'rqmaslikni ayting — bizga faqat qo'shtirnoq ichidagi so'z kerak. 5- va 6-qatorlarni oldindan taxmin qildiring."
        },
        {
          type: "quiz",
          question: "Bu kod nima chiqaradi?",
          code: `narx = "25000"
print(type(narx))`,
          options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'bool'>"],
          answer: 2,
          explain: "Qiymat qo'shtirnoq ichida — demak bu **matn** (`str`), garchi ichida raqamlar bo'lsa ham.",
          notes: "int deganlar ko'p bo'ladi — bu keyingi darsdagi input() mavzusi uchun juda muhim tushuncha."
        },
        {
          type: "code",
          title: "Qiymatni o'zgartirish",
          code: `ball = 0
print("Boshida:", ball)
ball = 10
print("Birinchi g'alabadan keyin:", ball)
ball = ball + 25
print("Ikkinchi g'alabadan keyin:", ball)
holat = "o'yinda"
holat = "tugadi"
print("Holat:", holat)`,
          explain: [
            "Yangi qiymat berilganda **eskisi o'chadi**",
            "`ball = ball + 25` — o'ng tomon avval hisoblanadi: 10 + 25 = 35, keyin ball ga yoziladi",
            "Matematikada `x = x + 25` mumkin emas, Python'da esa juda ko'p ishlatiladi",
            "Kod yuqoridan pastga bajariladi — o'zgaruvchining **oxirgi** qiymati ishlatiladi"
          ],
          output: `Boshida: 0
Birinchi g'alabadan keyin: 10
Ikkinchi g'alabadan keyin: 35
Holat: tugadi`,
          notes: "`ball = ball + 25` qatorini sekin tushuntiring: \"qutidan eski qiymatni ol, 25 qo'sh, qaytib qutiga sol\". Bu kelgusi barcha modullarda kerak bo'ladi."
        },
        {
          type: "code",
          title: "Bir nechta o'zgaruvchiga birdan qiymat",
          code: `ism, yosh, sinf = "Laylo", 13, "7-A"
print(ism, yosh, sinf)

a = b = c = 0
print(a, b, c)

shahar = "Samarqand"
mamlakat = "O'zbekiston"
print(shahar, mamlakat, sep=", ")`,
          explain: [
            "`ism, yosh, sinf = ...` — qiymatlar **tartib bo'yicha** taqsimlanadi",
            "Chapdagi nomlar va o'ngdagi qiymatlar soni **teng** bo'lishi shart",
            "`a = b = c = 0` — uchalasiga bir xil qiymat",
            "Bir dasturda turli turdagi o'zgaruvchilar birga ishlataveradi"
          ],
          output: `Laylo 13 7-A
0 0 0
Samarqand, O'zbekiston`,
          notes: "Savol: `x, y = 1, 2, 3` nima bo'ladi? (Xato — qiymatlar soni mos emas.) Buni ishga tushirib ko'rsatish mumkin."
        },
        {
          type: "analogy",
          title: "Swap — ikki stakanni almashtirish",
          emoji: "🥤",
          text: "Bir stakanda **sharbat**, ikkinchisida **choy** bor. Ularni almashtirmoqchisiz. Sharbatni to'g'ridan-to'g'ri choyning ustiga quysangiz — aralashib ketadi! To'g'ri yo'l: **uchinchi bo'sh stakan** olasiz. Avval sharbatni bo'sh stakanga quyasiz, keyin choyni sharbat stakaniga, oxirida sharbatni choy stakaniga. Dasturlashda bu uchinchi stakan — **vaqtinchalik o'zgaruvchi** (`temp`).",
          notes: "Uchta stakan (yoki daftarlar) bilan sinf oldida jonli ko'rsating — bu juda yaxshi esda qoladi."
        },
        {
          type: "code",
          title: "Qiymatlarni almashtirish (swap)",
          code: `a = "sharbat"
b = "choy"
# 1-usul: uchinchi stakan bilan
temp = a
a = b
b = temp
print(a, b)

# 2-usul: Python usuli
a, b = b, a
print(a, b)`,
          explain: [
            "`temp = a` — sharbatni bo'sh stakanga saqlab qo'ydik",
            "`a = b` — a ga choy quyildi (sharbat temp da saqlanib qoldi)",
            "`b = temp` — b ga saqlangan sharbat quyildi",
            "`a, b = b, a` — Python'da bir qatorda almashtirish, juda qulay!"
          ],
          output: `choy sharbat
sharbat choy`,
          notes: "Savol: temp siz `a = b`, `b = a` yozsak nima bo'ladi? Doskada qadamma-qadam bajarib ko'rsating — ikkalasi ham \"choy\" bo'lib qoladi."
        },
        {
          type: "quiz",
          question: "Bu kod nima chiqaradi?",
          code: `x = 5
y = 8
x = y
y = x
print(x, y)`,
          options: ["8 5", "5 8", "8 8", "5 5"],
          answer: 2,
          explain: "`x = y` dan keyin x = 8. Keyin `y = x` — y ga ham 8 yoziladi. 5 qiymati yo'qolib ketdi! Shuning uchun swap uchun `temp` yoki `x, y = y, x` kerak.",
          notes: "Bu klassik xato. \"8 5\" deganlarga doskada qutilar bilan qadamma-qadam ko'rsating."
        },
        {
          type: "task",
          title: "Mashq 1: O'quvchi kartasi",
          task: "O'zgaruvchilar yarating: `ism` (str), `yosh` (int), `boy` (float, metrda), `sportchi` (bool). Har birini chiqaring va yoniga turini type() bilan ko'rsating.",
          starter: `ism = "..."
yosh = ...
# qolganlarini yozing
`,
          hint: "`print(\"Ism:\", ism, type(ism))` ko'rinishida yozing. bool uchun `True` yoki `False` (katta harf bilan).",
          solution: `ism = "Sardor"
yosh = 14
boy = 1.68
sportchi = True
print("Ism:", ism, type(ism))
print("Yosh:", yosh, type(yosh))
print("Bo'y:", boy, type(boy))
print("Sportchi:", sportchi, type(sportchi))`,
          notes: "6 daqiqa. Tekshiring: bo'yni 1,68 deb vergul bilan yozganlar bormi? true kichik harf bilan yozganlar bormi?"
        },
        {
          type: "task",
          title: "Mashq 2: Futbolchilar almashinuvi",
          task: "`hujumchi = \"Shomurodov\"`, `himoyachi = \"Ashurmatov\"`. Murabbiy ularning o'rnini almashtirdi. Avval `temp` yordamida almashtiring va chiqaring, keyin Python usuli bilan qaytarib almashtiring va yana chiqaring.",
          starter: `hujumchi = "Shomurodov"
himoyachi = "Ashurmatov"
print("Hujumchi:", hujumchi, "| Himoyachi:", himoyachi)
# almashtiring
`,
          hint: "1) `temp = hujumchi`, `hujumchi = himoyachi`, `himoyachi = temp`. 2) `hujumchi, himoyachi = himoyachi, hujumchi`.",
          solution: `hujumchi = "Shomurodov"
himoyachi = "Ashurmatov"
print("Hujumchi:", hujumchi, "| Himoyachi:", himoyachi)
temp = hujumchi
hujumchi = himoyachi
himoyachi = temp
print("Hujumchi:", hujumchi, "| Himoyachi:", himoyachi)
hujumchi, himoyachi = himoyachi, hujumchi
print("Hujumchi:", hujumchi, "| Himoyachi:", himoyachi)`,
          notes: "7 daqiqa. Tez tugatganlarga 3 ta o'zgaruvchini aylana bo'yicha almashtirishni bering: a←b, b←c, c←a."
        },
        {
          type: "summary",
          title: "Bugun nimani o'rgandik?",
          points: [
            "**O'zgaruvchi** — nomi va qiymati bor quti: `nom = qiymat`",
            "Nom: harf, raqam, `_`; raqam bilan boshlanmaydi; bo'sh joy va apostrof yo'q",
            "Turlar: `int` (butun), `float` (kasr), `str` (matn), `bool` (True/False)",
            "`type()` — qiymat turini ko'rsatadi; `\"14\"` — bu str!",
            "Yangi qiymat eskisini o'chiradi; `ball = ball + 10` — eski qiymatdan foydalanish",
            "Swap: `temp` orqali yoki `a, b = b, a`"
          ],
          notes: "Tezkor so'rov: 5 ta qiymat aytasiz (7, \"7\", 7.0, False, \"False\") — o'quvchilar turini aytadi. Keyin uy vazifasi."
        }
      ],
      homework: [
        { level: "oson", task: "Sevimli filmingiz (yoki o'yiningiz) haqida 5 ta o'zgaruvchi yarating: nomi, chiqqan yili, reytingi (masalan 8.7), janri, ko'rganmisiz (True/False). Hammasini chiroyli chiqaring va har birining turini type() bilan ko'rsating." },
        { level: "o'rta", task: "Hamyoningizda `pul = 50000` bor. Ketma-ket amallarni o'zgaruvchi orqali bajaring: 12000 ga non va sut oldingiz, 8000 ga telefon to'ldirdingiz, buvingiz 20000 berdi. Har qadamdan keyin qolgan pulni chiqaring (`pul = pul - 12000` kabi)." },
        { level: "qiyin", task: "Uchta o'zgaruvchi: `a = \"olma\"`, `b = \"nok\"`, `c = \"uzum\"`. Ularni aylana bo'yicha almashtiring: a ga b ning, b ga c ning, c ga a ning qiymati tushsin. Buni ikki usulda bajaring: faqat bitta `temp` bilan va bitta qatorda Python usulida." }
      ]
    },

    // ===================== 3-DARS =====================
    {
      id: "m1-l3",
      title: "input() va turlarni o'zgartirish",
      duration: 90,
      goals: [
        "input() yordamida foydalanuvchidan ma'lumot olish",
        "input() har doim str qaytarishini tushunish",
        "int(), float(), str() bilan turni o'zgartirish",
        "ValueError qachon chiqishini bilish",
        "f-string bilan chiroyli natija chiqarish, {x:.2f} formatlash"
      ],
      keywords: ["input", "int", "float", "str", "ValueError", "f-string", "len", "konkatenatsiya"],
      plan: [
        { time: 10, label: "Takrorlash: o'zgaruvchilar va turlar" },
        { time: 15, label: "input() va u doim str qaytarishi" },
        { time: 20, label: "Turlarni o'zgartirish: int(), float(), str(), ValueError" },
        { time: 15, label: "Matnlarni birlashtirish va f-string" },
        { time: 25, label: "Amaliy mashqlar" },
        { time: 5, label: "Xulosa va uy vazifasi" }
      ],
      slides: [
        {
          type: "title",
          title: "input() va turlarni o'zgartirish",
          subtitle: "Dastur foydalanuvchi bilan gaplashadi",
          emoji: "💬",
          notes: "Takrorlash: \"7\" va 7 ning farqi nima? type() nima qiladi? Swap qanday qilinadi? 3-4 o'quvchidan so'rang (5-7 daqiqa)."
        },
        {
          type: "text",
          title: "Nega input() kerak?",
          body: "Hozirgacha dasturimiz har doim **bir xil** natija berardi, chunki qiymatlarni o'zimiz yozdik. Haqiqiy dasturlar esa **foydalanuvchidan** ma'lumot oladi.",
          points: [
            "Telegram ro'yxatdan o'tishda ismingizni so'raydi",
            "Kalkulyator sonlarni sizdan oladi",
            "O'yin sizning tanlovingizni kutadi",
            "Python'da buning uchun `input()` funksiyasi bor"
          ],
          notes: "Savol: \"Bugun qaysi ilovalar sizdan ma'lumot so'radi?\" (parol, SMS kod, qidiruv...). 3 daqiqa."
        },
        {
          type: "analogy",
          title: "input() — Telegram bot kabi",
          emoji: "🤖",
          text: "Telegram'da botga yozasiz: bot \"Ismingizni kiriting:\" deb so'raydi va **siz javob yozmaguningizcha kutib turadi**. Javob yozgach, bot uni eslab qoladi va \"Rahmat, Aziz!\" deydi. `input()` ham xuddi shunday: savol beradi, **kutadi**, javobni olib o'zgaruvchiga saqlaydi. Muhim: bot sizning javobingizni har doim **matn** sifatida oladi — hatto \"15\" deb yozsangiz ham.",
          notes: "\"Har doim matn\" qismini ta'kidlang — darsning asosiy g'oyasi shu. Keyingi slaydlarda bunga qaytamiz."
        },
        {
          type: "code",
          title: "Birinchi input()",
          code: `ism = input("Ismingiz nima? ")
shahar = input("Qayerda yashaysiz? ")
print("Salom,", ism + "!")
print(shahar, "— ajoyib shahar!")`,
          explain: [
            "`input(\"...\")` — qavs ichidagi matnni ko'rsatadi va javobni kutadi",
            "Foydalanuvchi yozib **Enter** bosgach, javob o'zgaruvchiga tushadi",
            "Savol oxiriga bo'sh joy qo'ying: `\"Ismingiz nima? \"` — chiroyli ko'rinadi",
            "Natija har safar foydalanuvchi kiritganiga qarab o'zgaradi"
          ],
          output: `Ismingiz nima? Aziz
Qayerda yashaysiz? Buxoro
Salom, Aziz!
Buxoro — ajoyib shahar!`,
          notes: "Bir necha o'quvchi turli ism va shahar kiritib ishga tushirsin. Natija o'zgarishini ko'rsating — dastur endi \"jonli\"."
        },
        {
          type: "code",
          title: "input() har doim str qaytaradi!",
          code: `yosh = input("Yoshingiz: ")
print(type(yosh))
print(yosh + yosh)
print(yosh * 3)`,
          explain: [
            "Foydalanuvchi `14` kiritdi, lekin `yosh` — bu `\"14\"` (matn)",
            "`type(yosh)` — `<class 'str'>`",
            "Matnga matn qo'shilsa — **yopishtiriladi**: `\"14\" + \"14\"` = `\"1414\"`",
            "Matnni songa ko'paytirsa — **takrorlanadi**: `\"14\" * 3` = `\"141414\"`"
          ],
          output: `Yoshingiz: 14
<class 'str'>
1414
141414`,
          notes: "O'quvchilar odatda 28 va 42 kutadi — hayron qolishlari tabiiy. \"Nega shunday?\" deb so'rang va bot o'xshatishiga qayting."
        },
        {
          type: "compare",
          title: "Klassik xato: sonlarni qo'shish",
          left: {
            label: "❌ Noto'g'ri: 5 + 3 = 53",
            code: `a = input("1-son: ")
b = input("2-son: ")
print(a + b)
# 5 va 3 kiritilsa: 53`
          },
          right: {
            label: "✅ To'g'ri: 5 + 3 = 8",
            code: `a = int(input("1-son: "))
b = int(input("2-son: "))
print(a + b)
# 5 va 3 kiritilsa: 8`
          },
          good: "right",
          notes: "Ikkalasini ishga tushirib ko'rsating. `int(input(...))` ni ichkaridan tashqariga o'qishni o'rgating: avval input matn oladi, keyin int uni songa aylantiradi."
        },
        {
          type: "code",
          title: "Turlarni o'zgartirish: int(), float(), str()",
          code: `print(int("25") + 5)
print(float("3.5") * 2)
print(int(7.9))
print(float(4))
print(str(100) + "0")
print(int("2011") - 2000)`,
          explain: [
            "`int(\"25\")` — matnni butun songa: 25",
            "`float(\"3.5\")` — matnni kasr songa: 3.5",
            "`int(7.9)` — kasr qismini **tashlab yuboradi** (yaxlitlamaydi!): 7",
            "`str(100)` — sonni matnga: `\"100\"`, matnga `\"0\"` yopishadi: `\"1000\"`"
          ],
          output: `30
7.0
7
4.0
1000
11`,
          notes: "int(7.9) natijasini so'rang — ko'pchilik 8 deydi. int() yaxlitlamaydi, kesadi; yaxlitlash uchun round() bor (keyingi dars)."
        },
        {
          type: "text",
          title: "ValueError — o'zgartirib bo'lmaydi!",
          body: "Har qanday matnni songa aylantirib bo'lmaydi. Agar matn son ko'rinishida bo'lmasa, Python **ValueError** xatosini beradi.",
          points: [
            "`int(\"abc\")` ❌ — harflar son emas",
            "`int(\"3.5\")` ❌ — int nuqtali matnni qabul qilmaydi, `float(\"3.5\")` ✅",
            "`int(\"\")` ❌ — bo'sh matn (foydalanuvchi faqat Enter bosdi)",
            "`int(\" 42 \")` ✅ — chetidagi bo'sh joylar e'tiborga olinmaydi",
            "Xabar: `ValueError: invalid literal for int() with base 10: 'abc'`",
            "Hozircha foydalanuvchidan **to'g'ri** son kiritishini so'raymiz; xatolarni ushlashni keyinroq o'rganamiz"
          ],
          notes: "Proyektorda yosh so'raydigan dasturga \"o'n to'rt\" deb kiriting va xatoni birga o'qing. O'quvchilarga ham ataylab buzib ko'rishni taklif qiling."
        },
        {
          type: "quiz",
          question: "Qaysi qator ValueError beradi?",
          options: ["int(\"15\")", "float(\"2.5\")", "int(\"2.5\")", "float(\"7\")"],
          answer: 2,
          explain: "`int()` nuqtali matnni songa aylantira olmaydi. `\"2.5\"` uchun `float()` kerak. `float(\"7\")` esa bemalol ishlaydi va 7.0 beradi.",
          notes: "Har bir variantni platformada sinab ko'rish mumkin. float(\"7\") ham xato deb o'ylaganlar ko'p bo'ladi."
        },
        {
          type: "code",
          title: "Matnlarni birlashtirish 3 usulda",
          code: `ism = "Dilnoza"
yosh = 13
# 1-usul: vergul bilan
print("Ism:", ism, "yosh:", yosh)
# 2-usul: + bilan (konkatenatsiya)
print("Ism: " + ism + ", yosh: " + str(yosh))
# 3-usul: f-string
print(f"Ism: {ism}, yosh: {yosh}")`,
          explain: [
            "Vergul — oson, lekin avtomatik bo'sh joy qo'yadi",
            "`+` — faqat **str + str** ishlaydi, son uchun `str()` shart",
            "**f-string** — qo'shtirnoq oldidan `f` va o'zgaruvchilar `{}` ichida",
            "f-string — eng qulay va eng ko'p ishlatiladigan usul"
          ],
          output: `Ism: Dilnoza yosh: 13
Ism: Dilnoza, yosh: 13
Ism: Dilnoza, yosh: 13`,
          notes: "f-string ni \"shablon\" deb tushuntiring: matn tayyor, {} ichiga qiymatlar qo'yiladi. Endi asosan f-string ishlatamiz."
        },
        {
          type: "compare",
          title: "Son va matnni + bilan qo'shish",
          left: {
            label: "❌ TypeError",
            code: `yosh = 14
print("Men " + yosh + " yoshdaman")`
          },
          right: {
            label: "✅ f-string bilan",
            code: `yosh = 14
print(f"Men {yosh} yoshdaman")`
          },
          good: "right",
          notes: "Chapdagini ishga tushirib TypeError ni ko'rsating: \"can only concatenate str (not int) to str\". Ikki yechim bor: str(yosh) yoki f-string."
        },
        {
          type: "code",
          title: "f-string ichida hisoblash va formatlash",
          code: `narx = 12500
soni = 3
print(f"Jami: {narx * soni} so'm")
pi = 3.14159265
print(f"Pi soni: {pi:.2f}")
print(f"Pi soni: {pi:.4f}")
orta = 85 / 3
print(f"O'rtacha ball: {orta:.1f}")
ism = "Bobur"
print(f"{ism} ismida {len(ism)} ta harf bor")`,
          explain: [
            "`{}` ichida hisoblash ham mumkin: `{narx * soni}`",
            "`{pi:.2f}` — verguldan keyin **2 ta xona** qoldiradi (yaxlitlab)",
            "`.1f` — 1 xona, `.4f` — 4 xona",
            "`len(ism)` — matndagi belgilar sonini qaytaradi"
          ],
          output: `Jami: 37500 so'm
Pi soni: 3.14
Pi soni: 3.1416
O'rtacha ball: 28.3
Bobur ismida 5 ta harf bor`,
          notes: "`:.2f` ni pul, ball, foizlar uchun ishlatishini ayting. `.4f` da 3.1416 ga yaxlitlanganiga e'tibor qarating (3.14159 → 3.1416)."
        },
        {
          type: "quiz",
          question: "Bu kod nima chiqaradi?",
          code: `x = 7.456
print(f"Natija: {x:.1f}")`,
          options: ["Natija: 7.4", "Natija: 7.5", "Natija: 7.456", "Natija: {x:.1f}"],
          answer: 1,
          explain: "`.1f` — verguldan keyin 1 xona qoldiradi va **yaxlitlaydi**: 7.456 → 7.5 (chunki keyingi raqam 5).",
          notes: "Agar 'f' harfi unutilsa, 4-variant chiqishini ham eslatib o'ting — bu ham ko'p uchraydigan xato."
        },
        {
          type: "task",
          title: "Mashq 1: Yoshni hisoblash",
          task: "Foydalanuvchidan ismi va tug'ilgan yilini so'rang. 2026-yilda necha yoshga to'lishini va 2030-yilda necha yoshda bo'lishini f-string bilan chiqaring. Ismidagi harflar sonini ham ko'rsating.",
          starter: `ism = input("Ismingiz: ")
yil = ...
`,
          hint: "Yilni `int(input(...))` bilan oling. Yosh = `2026 - yil`. Harflar soni = `len(ism)`.",
          solution: `ism = input("Ismingiz: ")
yil = int(input("Tug'ilgan yilingiz: "))
yosh = 2026 - yil
print(f"{ism}, siz 2026-yilda {yosh} yoshga to'lasiz")
print(f"2030-yilda {2030 - yil} yoshda bo'lasiz")
print(f"Ismingizda {len(ism)} ta harf bor")`,
          notes: "6 daqiqa. int() ni unutganlar TypeError oladi: \"unsupported operand type(s) for -: 'int' and 'str'\" — xatoni birga o'qing."
        },
        {
          type: "task",
          title: "Mashq 2: Bozordan xarid",
          task: "Bozorda olma sotib olyapsiz. Foydalanuvchidan 1 kg olma narxini (butun son) va necha kg olishini (kasr son bo'lishi mumkin, masalan 2.5) so'rang. Jami summani 2 xona aniqlikda chiqaring.",
          starter: `narx = int(input("1 kg narxi: "))
kg = ...
`,
          hint: "Kg uchun `float(input(...))` ishlating. Natija: `print(f\"Jami: {jami:.2f} so'm\")`.",
          solution: `narx = int(input("1 kg narxi: "))
kg = float(input("Necha kg: "))
jami = narx * kg
print(f"{kg} kg olma = {jami:.2f} so'm")`,
          notes: "6 daqiqa. Kim kg uchun int ishlatsa, 2.5 kiritib ValueError oladi — bu aynan bugungi mavzu! Shu xatoni misol qilib tushuntiring."
        },
        {
          type: "summary",
          title: "Bugun nimani o'rgandik?",
          points: [
            "`input(\"savol\")` — foydalanuvchidan ma'lumot oladi va **har doim str** qaytaradi",
            "Son kerak bo'lsa: `int(input(...))` yoki `float(input(...))`",
            "`int(7.9)` → 7 (kesadi), `str(100)` → \"100\"",
            "Noto'g'ri matnni o'zgartirish → **ValueError**; str + int → **TypeError**",
            "f-string: `f\"Salom, {ism}!\"`, formatlash: `{x:.2f}`",
            "`len(matn)` — belgilar soni"
          ],
          notes: "Chiqish savoli: \"input('Son: ') ga 5 kiritsak va 2 ga ko'paytirsak nima chiqadi?\" (55). Uy vazifasini tushuntiring."
        }
      ],
      homework: [
        { level: "oson", task: "Foydalanuvchidan ismi, sevimli futbol jamoasi va sevimli o'yinchisini so'rang. f-string bilan bitta chiroyli gap chiqaring: \"Aziz, siz Paxtakor muxlisisiz va eng sevimli o'yinchingiz — Shomurodov!\"" },
        { level: "o'rta", task: "Mini-kalkulyator: foydalanuvchidan ikkita kasr son so'rang. Ularning yig'indisi, ayirmasi, ko'paytmasi va bo'linmasini har biri alohida qatorda, 2 xona aniqlikda (`:.2f`) chiqaring." },
        { level: "qiyin", task: "Telefon tarifi: foydalanuvchidan oylik abonent to'lovi (so'm), ishlatilgan qo'shimcha internet (MB) va 1 MB narxini (kasr son) so'rang. Jami to'lovni, kunlik o'rtacha to'lovni (30 kunga bo'lib) 2 xona aniqlikda chiqaring. Chiroyli chek ko'rinishida chop eting (ramka bilan)." }
      ]
    },

    // ===================== 4-DARS =====================
    {
      id: "m1-l4",
      title: "Arifmetik operatorlar",
      duration: 90,
      goals: [
        "Barcha arifmetik operatorlarni bilish: + - * / // % **",
        "Amallar bajarilish tartibini (prioritet) tushunish",
        "+=, -=, *= kabi qisqa yozuvlardan foydalanish",
        "round() va abs() funksiyalarini qo'llash",
        "Amaliy masalalar: vaqtni o'girish, raqamlarni ajratish, yuza va perimetr"
      ],
      keywords: ["+", "-", "*", "/", "//", "%", "**", "+=", "round", "abs", "prioritet"],
      plan: [
        { time: 10, label: "Takrorlash: input, int/float, f-string" },
        { time: 20, label: "Arifmetik operatorlar, // va %" },
        { time: 15, label: "Prioritet, +=, round(), abs()" },
        { time: 15, label: "Amaliy misollar: vaqt, raqamlar" },
        { time: 25, label: "Mashqlar va quiz" },
        { time: 5, label: "Xulosa va modul loyihasi haqida" }
      ],
      slides: [
        {
          type: "title",
          title: "Arifmetik operatorlar",
          subtitle: "Python — kuchli kalkulyator",
          emoji: "🧮",
          notes: "Takrorlash (7 daqiqa): input() qanday tur qaytaradi? f\"{x:.2f}\" nima qiladi? Bitta o'quvchi doskada ikki sonni so'rab yig'indisini chiqaradigan kod yozsin."
        },
        {
          type: "text",
          title: "Python'dagi arifmetik operatorlar",
          body: "Python'da 7 ta asosiy arifmetik operator bor. Ularning ba'zilari matematikadagidan boshqacha yoziladi.",
          points: [
            "`+` qo'shish, `-` ayirish, `*` ko'paytirish (× emas!)",
            "`/` bo'lish — natija **doim float**: `10 / 2` → `5.0`",
            "`//` butun bo'lish — kasr qismini tashlaydi: `17 // 5` → `3`",
            "`%` qoldiq — bo'lishdan qolgan qoldiq: `17 % 5` → `2`",
            "`**` darajaga ko'tarish: `2 ** 3` → `8`"
          ],
          notes: "`%` bu yerda foiz EMAS, qoldiq ekanini alohida ta'kidlang. `^` darajaga ko'tarish emasligini ham ayting (boshqa tillardan kelganlar adashadi)."
        },
        {
          type: "code",
          title: "Asosiy amallar",
          code: `a = 20
b = 6
print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(10 / 2)
print(f"{a / b:.2f}")`,
          explain: [
            "`+`, `-`, `*` — butun sonlar uchun natija butun son",
            "`/` — natija har doim **float**, hatto bo'linsa ham: `10 / 2` = `5.0`",
            "`20 / 6` uzun kasr beradi: 3.3333333333333335",
            "Chiroyli ko'rsatish uchun f-string va `:.2f` ishlatamiz"
          ],
          output: `26
14
120
3.3333333333333335
5.0
3.33`,
          notes: "Oxirgi raqam 5 bo'lib qolganini (3.3333333333333335) ko'rib hayron bo'lishadi — kompyuter kasrlarni taxminan saqlashini qisqa ayting, chuqurlashmang."
        },
        {
          type: "analogy",
          title: "// va % — konfetlarni bo'lish",
          emoji: "🍬",
          text: "Sizda **17 ta konfet** bor va uni **5 ta do'stingizga** teng bo'lmoqchisiz. Har biriga **3 tadan** tegadi (bu `17 // 5 = 3`), va sizda **2 ta** konfet ortib qoladi (bu `17 % 5 = 2`). Ya'ni `//` — \"har biriga nechtadan?\", `%` — \"nechta ortib qoldi?\". Tekshirish: 3 × 5 + 2 = 17 ✅",
          notes: "Boshqa misollar so'rang: 25 o'quvchini 4 kishilik jamoalarga bo'lsak, nechta jamoa va nechta ortiqcha o'quvchi? (6 jamoa, 1 ortiqcha)."
        },
        {
          type: "code",
          title: "Butun bo'lish va qoldiq",
          code: `print(17 // 5)
print(17 % 5)
print(20 // 4)
print(20 % 4)
print(7 // 10)
print(7 % 10)
print(14 % 2)
print(15 % 2)`,
          explain: [
            "`20 % 4` = 0 — qoldiq yo'q, demak 20 soni 4 ga **bo'linadi**",
            "`7 // 10` = 0, `7 % 10` = 7 — kichik sonni katta songa bo'lsak",
            "`son % 2` = 0 bo'lsa — son **juft**, 1 bo'lsa — **toq**",
            "Bu juftlik tekshiruvi keyingi modulda juda ko'p kerak bo'ladi"
          ],
          output: `3
2
5
0
0
7
0
1`,
          notes: "Har bir qator natijasini oldindan og'zaki so'rang. 7 // 10 va 7 % 10 eng qiyin — konfet o'xshatishi bilan tushuntiring (7 konfet, 10 do'st)."
        },
        {
          type: "code",
          title: "Darajaga ko'tarish",
          code: `print(2 ** 3)
print(5 ** 2)
print(10 ** 6)
print(2 ** 10)
print(9 ** 0.5)
tomon = 4
print(f"Kub hajmi: {tomon ** 3}")`,
          explain: [
            "`2 ** 3` = 2 × 2 × 2 = 8",
            "`10 ** 6` = 1 000 000 (million)",
            "`2 ** 10` = 1024 — 1 KB dagi baytlar soni",
            "`9 ** 0.5` — kvadrat ildiz: 3.0"
          ],
          output: `8
25
1000000
1024
3.0
Kub hajmi: 64`,
          notes: "2 ** 100 ni ishga tushirib ko'rsating — Python juda katta sonlar bilan ham ishlay oladi. O'quvchilarga bu qiziq bo'ladi."
        },
        {
          type: "text",
          title: "Amallar tartibi (prioritet)",
          body: "Python matematikadagi kabi amallarni ma'lum **tartibda** bajaradi:",
          points: [
            "1️⃣ `()` — qavslar ichi birinchi",
            "2️⃣ `**` — darajaga ko'tarish",
            "3️⃣ `*`, `/`, `//`, `%` — chapdan o'ngga",
            "4️⃣ `+`, `-` — chapdan o'ngga",
            "Shubha bo'lsa — **qavs qo'ying**! Kod o'qilishi ham osonlashadi"
          ],
          notes: "Doskada misol: 2 + 3 * 4 = ? Javoblar 20 va 14 bo'linadi — to'g'ri javob 14. Matematika darsidagi qoida bilan bir xil ekanini ayting."
        },
        {
          type: "code",
          title: "Prioritet misollarda",
          code: `print(2 + 3 * 4)
print((2 + 3) * 4)
print(10 - 4 - 3)
print(2 * 3 ** 2)
print(20 / 4 * 2)
print(7 + 10 % 3)`,
          explain: [
            "`2 + 3 * 4` — avval ko'paytirish: 2 + 12 = 14",
            "`(2 + 3) * 4` — avval qavs: 5 * 4 = 20",
            "`2 * 3 ** 2` — avval daraja: 2 * 9 = 18",
            "`20 / 4 * 2` — chapdan o'ngga: 5.0 * 2 = 10.0",
            "`7 + 10 % 3` — avval qoldiq: 7 + 1 = 8"
          ],
          output: `14
20
3
18
10.0
8`,
          notes: "Har bir qatorni o'quvchilar daftarda hisoblashsin (3 daqiqa), keyin ishga tushiring. Kim hammasini to'g'ri topdi — qo'l ko'tarsin."
        },
        {
          type: "compare",
          title: "O'rtacha ballni hisoblash",
          left: {
            label: "❌ Qavs unutilgan",
            code: `a = 80
b = 90
orta = a + b / 2
print(orta)   # 125.0 ?!`
          },
          right: {
            label: "✅ Qavs bilan",
            code: `a = 80
b = 90
orta = (a + b) / 2
print(orta)   # 85.0`
          },
          good: "right",
          notes: "Bu juda ko'p uchraydigan mantiqiy xato — dastur xato bermaydi, lekin natija noto'g'ri! Bunday xatolar eng xavflisi ekanini ayting."
        },
        {
          type: "quiz",
          question: "Bu kod nima chiqaradi?",
          code: `print(10 + 6 // 4 * 2)`,
          options: ["16", "12", "8", "13.0"],
          answer: 1,
          explain: "Avval `//` va `*` chapdan o'ngga: `6 // 4` = 1, `1 * 2` = 2. Keyin qo'shish: 10 + 2 = **12**.",
          notes: "Qiyin savol. 16 deganlar 6 // 4 ni 1.5 deb, 13.0 deganlar / bilan adashtirgan. Tushuntirib bering."
        },
        {
          type: "code",
          title: "Qisqa yozuvlar: += -= *= /=",
          code: `ball = 100
ball += 20     # ball = ball + 20
print(ball)
ball -= 50     # ball = ball - 50
print(ball)
ball *= 2      # ball = ball * 2
print(ball)
ball //= 3     # ball = ball // 3
print(ball)`,
          explain: [
            "`x += 5` — bu `x = x + 5` ning qisqa yozuvi",
            "Xuddi shunday: `-=`, `*=`, `/=`, `//=`, `%=`, `**=`",
            "O'yinlarda ochko, pul, hayot sonini o'zgartirishda juda qulay",
            "Diqqat: `=+` emas, `+=` yoziladi!"
          ],
          output: `120
70
140
46`,
          notes: "O'yin misoli: hayot = 100, zarba oldi: hayot -= 25. Savol: `x =+ 5` nima qiladi? (x ga +5 beradi, ya'ni x = 5 — qo'shmaydi!)"
        },
        {
          type: "code",
          title: "round() va abs()",
          code: `print(round(3.7))
print(round(3.2))
print(round(3.14159, 2))
print(round(1234.5678, 1))
print(abs(-15))
print(abs(15))
harorat_kun = 8
harorat_tun = -5
print("Farq:", abs(harorat_kun - harorat_tun))`,
          explain: [
            "`round(x)` — eng yaqin butun songa yaxlitlaydi",
            "`round(x, 2)` — 2 xonagacha yaxlitlaydi (natija son, f-string emas)",
            "`abs(x)` — modul (absolyut qiymat): manfiy ishorani olib tashlaydi",
            "Farq yoki masofa hisoblashda `abs()` juda qulay"
          ],
          output: `4
3
3.14
1234.6
15
15
Farq: 13`,
          notes: "Qiziq fakt (ixtiyoriy): round(2.5) → 2, round(3.5) → 4 — Python juft songa yaxlitlaydi. Faqat so'rashsa tushuntiring."
        },
        {
          type: "code",
          title: "Amaliy: soniyalarni soat:daqiqa:soniyaga",
          code: `jami = 7384   # soniya
soat = jami // 3600
qoldiq = jami % 3600
daqiqa = qoldiq // 60
soniya = qoldiq % 60
print(f"{jami} soniya = {soat} soat {daqiqa} daqiqa {soniya} soniya")

# Futbol o'yini: 5400 soniya
print(f"Futbol: {5400 // 60} daqiqa")`,
          explain: [
            "1 soat = 3600 soniya, `7384 // 3600` = 2 soat",
            "`7384 % 3600` = 184 — soatlardan ortib qolgan soniyalar",
            "`184 // 60` = 3 daqiqa, `184 % 60` = 4 soniya",
            "`//` va `%` birga — o'lchov birliklarini o'girishning asosiy usuli"
          ],
          output: `7384 soniya = 2 soat 3 daqiqa 4 soniya
Futbol: 90 daqiqa`,
          notes: "Doskada qadamma-qadam hisoblang. Savol: telefonda video 4000 soniya — necha daqiqa? Kod bilan tekshiring."
        },
        {
          type: "code",
          title: "Amaliy: sonning raqamlarini ajratish",
          code: `son = 473
birlik = son % 10
onlik = son // 10 % 10
yuzlik = son // 100
print("Yuzlik:", yuzlik)
print("O'nlik:", onlik)
print("Birlik:", birlik)
print("Raqamlar yig'indisi:", yuzlik + onlik + birlik)
print("Teskari son:", birlik * 100 + onlik * 10 + yuzlik)`,
          explain: [
            "`son % 10` — oxirgi raqam (10 ga bo'lgandagi qoldiq): 3",
            "`son // 10` — oxirgi raqamni olib tashlaydi: 47, keyin `% 10` → 7",
            "`son // 100` — birinchi raqam: 4",
            "Raqamlardan yangi son yig'ish: 3·100 + 7·10 + 4 = 374"
          ],
          output: `Yuzlik: 4
O'nlik: 7
Birlik: 3
Raqamlar yig'indisi: 14
Teskari son: 374`,
          notes: "Bu olimpiada masalalarining asosi. `son // 10 % 10` ni bosqichma-bosqich tushuntiring: 473 // 10 = 47, 47 % 10 = 7."
        },
        {
          type: "quiz",
          question: "`son = 5862` bo'lsa, `son // 10 % 10` nimaga teng?",
          options: ["2", "8", "6", "586"],
          answer: 2,
          explain: "`5862 // 10` = 586 (oxirgi raqam tashlandi), `586 % 10` = **6** — bu o'nliklar xonasidagi raqam.",
          notes: "8 deganlar yuzliklarni olgan. Doskada 5862 ni yozib, xonalarni belgilang."
        },
        {
          type: "task",
          title: "Mashq 1: Xona yuzasi va perimetri",
          task: "Foydalanuvchidan to'g'ri to'rtburchak shaklidagi xonaning uzunligi va enini (metrda, kasr bo'lishi mumkin) so'rang. Yuzasi (uzunlik × en), perimetri (2 × (uzunlik + en)) va 1 m² gilam 85000 so'm bo'lsa, gilam narxini chiqaring. Natijalar 2 xona aniqlikda.",
          starter: `uzunlik = float(input("Uzunlik (m): "))
en = ...
`,
          hint: "Perimetrda qavsni unutmang: `2 * (uzunlik + en)`. Narx: `yuza * 85000`.",
          solution: `uzunlik = float(input("Uzunlik (m): "))
en = float(input("En (m): "))
yuza = uzunlik * en
perimetr = 2 * (uzunlik + en)
narx = yuza * 85000
print(f"Yuza: {yuza:.2f} m2")
print(f"Perimetr: {perimetr:.2f} m")
print(f"Gilam narxi: {narx:.2f} so'm")`,
          notes: "7 daqiqa. Qavssiz `2 * uzunlik + en` yozganlarni toping — bu bugungi compare slaydidagi xato. Sinf xonasini o'lchab, haqiqiy sonlar bilan sinab ko'ring!"
        },
        {
          type: "task",
          title: "Mashq 2: Daqiqalarni o'girish",
          task: "Foydalanuvchi telefonda necha daqiqa o'tirganini kiritadi (masalan, 1500). Buni kun, soat va daqiqaga o'giring: \"1500 daqiqa = 1 kun 1 soat 0 daqiqa\". Shuningdek bu necha soniya ekanini ham chiqaring.",
          starter: `jami = int(input("Necha daqiqa: "))
# 1 kun = 1440 daqiqa, 1 soat = 60 daqiqa
`,
          hint: "`kun = jami // 1440`, `qoldiq = jami % 1440`, `soat = qoldiq // 60`, `daqiqa = qoldiq % 60`.",
          solution: `jami = int(input("Necha daqiqa: "))
kun = jami // 1440
qoldiq = jami % 1440
soat = qoldiq // 60
daqiqa = qoldiq % 60
print(f"{jami} daqiqa = {kun} kun {soat} soat {daqiqa} daqiqa")
print(f"Bu {jami * 60} soniya!")`,
          notes: "7 daqiqa. Tez tugatganlarga: 3 xonali son kiritib, raqamlari yig'indisini topadigan dastur yozishni bering."
        },
        {
          type: "summary",
          title: "Bugun nimani o'rgandik?",
          points: [
            "Operatorlar: `+ - * /` (doim float) `//` (butun bo'lish) `%` (qoldiq) `**` (daraja)",
            "Tartib: `()` → `**` → `* / // %` → `+ -`; shubha bo'lsa qavs qo'ying",
            "`x += 5` — `x = x + 5` ning qisqasi",
            "`round(x, 2)` — yaxlitlash, `abs(x)` — modul",
            "`son % 10` — oxirgi raqam, `son // 10` — oxirgi raqamsiz son",
            "`//` va `%` — vaqt va birliklarni o'girishning kaliti"
          ],
          notes: "Modul loyihasini e'lon qiling: \"Shaxsiy anketa va kalkulyator\". Talablarni ko'rsating va keyingi darsgacha boshlashni so'rang."
        }
      ],
      homework: [
        { level: "oson", task: "Foydalanuvchidan ikkita butun son so'rang va ular ustida barcha 7 ta amalni (+ - * / // % **) bajaring. Har bir natijani `17 // 5 = 3` ko'rinishida f-string bilan chiqaring." },
        { level: "o'rta", task: "Do'konda 1 ta daftar 4500 so'm. Foydalanuvchi qancha pulga ega ekanini kiritadi. Nechta daftar sotib ola olishi va qancha qaytim qolishini hisoblang (`//` va `%`). Shuningdek, 15% chegirma bo'lsa nechta daftar olishini ham hisoblang (narxni round() bilan yaxlitlang)." },
        { level: "qiyin", task: "Foydalanuvchi 4 xonali son kiritadi (masalan 2026). Uning har bir raqamini alohida chiqaring, raqamlar yig'indisi va ko'paytmasini toping, sonni teskari tartibda (6202) son sifatida hosil qiling va asl son bilan teskari sonning ayirmasini abs() bilan chiqaring." }
      ]
    }
  ],
  project: {
    title: "Shaxsiy anketa va kalkulyator",
    description: "Dastur foydalanuvchidan shaxsiy ma'lumotlarni so'raydi (ism, tug'ilgan yil, bo'y, vazn, sevimli narsalar va h.k.), ular asosida turli hisob-kitoblarni bajaradi va natijani chiroyli bezatilgan \"shaxsiy karta\" ko'rinishida chiqaradi. Faqat shu modulda o'rganilganlar ishlatiladi: print, sep/end, izohlar, o'zgaruvchilar, input, int/float/str, f-string, arifmetik operatorlar, round, abs, len. Shart, tsikl, ro'yxat va funksiyalar ishlatilmaydi.",
    requirements: [
      "Dastur boshida chiroyli sarlavha (masalan, \"=\" * 40 bilan chiziq) va salomlashish",
      "Kamida 6 ta ma'lumot so'rash: ism, familiya, tug'ilgan yil, shahar, bo'y (m, float), vazn (kg, float)",
      "Hozirgi yosh va 25 yoshga to'lishiga necha yil qolganini hisoblash",
      "Yashagan taxminiy kunlar, soatlar va daqiqalar sonini hisoblash (yil × 365 ...)",
      "Tana massasi indeksi (BMI = vazn / bo'y ** 2) ni 1 xona aniqlikda chiqarish",
      "Ism va familiyadagi harflar sonini len() bilan hisoblash",
      "Barcha natijalarni f-string bilan, ramkali \"shaxsiy karta\" ko'rinishida chiqarish",
      "Kod bo'limlarga ajratilgan va izohlar bilan yozilgan bo'lsin"
    ],
    bonus: [
      "Tug'ilgan yil raqamlari yig'indisini // va % yordamida hisoblash",
      "Haftalik cho'ntak pulini so'rab, bir yilda qancha yig'ilishini va nechta orzu qilgan narsani (narxini ham so'rang) sotib olish mumkinligini hisoblash",
      "Kuniga telefonda o'tkazgan soatlarni so'rab, bir yilda necha to'liq kun telefonda o'tkazilishini hisoblash",
      "sep va end yordamida kartaga qo'shimcha bezaklar qo'shish"
    ],
    example: `# ===== SHAXSIY ANKETA VA KALKULYATOR =====
# Muallif: 1-modul loyihasi

print("=" * 40)
print("     📋 SHAXSIY ANKETA 📋")
print("=" * 40)

# --- 1. Ma'lumotlarni olish ---
ism = input("Ismingiz: ")
familiya = input("Familiyangiz: ")
yil = int(input("Tug'ilgan yilingiz: "))
shahar = input("Shahringiz: ")
boy = float(input("Bo'yingiz (metr, masalan 1.65): "))
vazn = float(input("Vazningiz (kg): "))
pul = int(input("Haftalik cho'ntak pulingiz (so'm): "))

# --- 2. Hisob-kitoblar ---
joriy_yil = 2026
yosh = joriy_yil - yil
qolgan = 25 - yosh
kunlar = yosh * 365
soatlar = kunlar * 24
daqiqalar = soatlar * 60
bmi = vazn / boy ** 2
harflar = len(ism) + len(familiya)
yillik_pul = pul * 52
raqam_yigindi = yil // 1000 + yil // 100 % 10 + yil // 10 % 10 + yil % 10

# --- 3. Shaxsiy karta ---
print()
print("*" * 40)
print(f"  {ism} {familiya}")
print("*" * 40)
print(f"  Shahar:        {shahar}")
print(f"  Yosh:          {yosh}")
print(f"  25 yoshgacha:  {qolgan} yil")
print(f"  Yashagan kun:  {kunlar}")
print(f"  Soat:          {soatlar}")
print(f"  Daqiqa:        {daqiqalar}")
print(f"  BMI:           {bmi:.1f}")
print(f"  Ism+familiya:  {harflar} ta harf")
print(f"  Yillik pul:    {yillik_pul} so'm")
print(f"  Yil raqamlari yig'indisi: {raqam_yigindi}")
print("*" * 40)
print("Rahmat,", ism, end="! ")
print("Anketa tugadi.")`
  },
  test: [
    {
      q: "Bu kod nima chiqaradi?",
      code: `print("3 + 4")`,
      options: ["7", "3 + 4", "34", "Xato beradi"],
      answer: 1
    },
    {
      q: "Qaysi o'zgaruvchi nomi to'g'ri?",
      options: ["2ball", "o'quvchi_soni", "tugilgan yil", "oquvchi_soni"],
      answer: 3
    },
    {
      q: "Bu kod nima chiqaradi?",
      code: `print(type(5.0))`,
      options: ["<class 'float'>", "<class 'int'>", "<class 'str'>", "5.0"],
      answer: 0
    },
    {
      q: "Foydalanuvchi 4 va 6 ni kiritdi. Natija nima?",
      code: `a = input()
b = input()
print(a + b)`,
      options: ["10", "46", "Xato beradi", "4 6"],
      answer: 1
    },
    {
      q: "Bu kod nima chiqaradi?",
      code: `print("A", "B", "C", sep="-", end=".")`,
      options: ["A B C.", "A-B-C", "A-B-C.", "ABC-."],
      answer: 2
    },
    {
      q: "Qaysi qator ValueError xatosini beradi?",
      options: ["float(\"1.5\")", "int(\"12\")", "str(12)", "int(\"12.5\")"],
      answer: 3
    },
    {
      q: "Bu kod nima chiqaradi?",
      code: `print(23 // 5, 23 % 5)`,
      options: ["4 3", "4.6 3", "3 4", "4 4"],
      answer: 0
    },
    {
      q: "Bu kod nima chiqaradi?",
      code: `x = 10
x += 5
x *= 2
print(x)`,
      options: ["20", "25", "17", "30"],
      answer: 3
    },
    {
      q: "Bu kod nima chiqaradi?",
      code: `narx = 7.666
print(f"{narx:.2f}")`,
      options: ["7.66", "7.67", "7.666", "8"],
      answer: 1
    },
    {
      q: "Bu kod nima chiqaradi?",
      code: `print(2 + 3 * 2 ** 2)`,
      options: ["100", "20", "14", "38"],
      answer: 2
    }
  ]
});
