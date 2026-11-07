window.COURSE_MODULES = window.COURSE_MODULES || [];
COURSE_MODULES.push({
  id: 2,
  month: 1,
  weeks: "3-4 hafta",
  title: "Shartlar va mantiq",
  icon: "🔀",
  description: "Dasturga \"o'ylash\"ni o'rgatamiz: taqqoslash, if/elif/else, mantiqiy operatorlar va xatolarni topish. Endi dastur vaziyatga qarab turlicha ishlaydi.",
  outcomes: [
    "Taqqoslash operatorlari (==, !=, <, >, <=, >=) yordamida True/False natija oladi",
    "if, elif, else yordamida bir nechta yo'nalishli dastur yozadi",
    "and, or, not bilan murakkab shartlar tuzadi va truthy/falsy qiymatlarni tushunadi",
    "Ichma-ich shartlar, ternary ifoda va match-case dan foydalanadi",
    "Xato xabarlarini o'qiydi va print yordamida xatoni topadi",
    "Viktorina o'yinini mustaqil yozadi"
  ],
  lessons: [
    // ===================== 1-DARS =====================
    {
      id: "m2-l1",
      title: "Taqqoslash va if/else",
      duration: 90,
      goals: [
        "Taqqoslash operatorlarini bilish va natijasi bool ekanini tushunish",
        "if va if/else tuzilmasini to'g'ri yozish",
        "Chekinish (indentation) nima uchun muhimligini tushunish",
        "= va == farqini bilish"
      ],
      keywords: ["==", "!=", "<", ">", "<=", ">=", "if", "else", "bool", "indentation"],
      plan: [
        { time: 10, label: "Takrorlash: o'zgaruvchilar, input, bool" },
        { time: 20, label: "Taqqoslash operatorlari va bool natija" },
        { time: 25, label: "if va if/else, chekinish qoidalari" },
        { time: 10, label: "Ko'p uchraydigan xatolar: = va ==, chekinish" },
        { time: 20, label: "Amaliy mashqlar" },
        { time: 5, label: "Xulosa va uy vazifasi" }
      ],
      slides: [
        {
          type: "title",
          title: "Taqqoslash va if/else",
          subtitle: "Dastur qaror qabul qilishni o'rganadi",
          emoji: "🔀",
          notes: "Darsni savol bilan boshlang: \"Telefoningiz parolni qanday tekshiradi?\" 2-3 o'quvchi javobini eshiting va bugun aynan shuni o'rganamiz deng."
        },
        {
          type: "text",
          title: "Nega dasturga shartlar kerak?",
          body: "Hozirgacha yozgan dasturlarimiz har doim **bir xil** ishlardi: yuqoridan pastga, qatorma-qator. Lekin haqiqiy dasturlar **vaziyatga qarab** turlicha ishlaydi.",
          points: [
            "Parol to'g'ri bo'lsa — kirish, noto'g'ri bo'lsa — xato xabari",
            "Ball 60 dan yuqori bo'lsa — \"o'tdingiz\", aks holda — \"yiqildingiz\"",
            "Balans yetarli bo'lsa — to'lov, aks holda — rad etish",
            "Bularning hammasi **shart** (condition) yordamida yoziladi"
          ],
          notes: "O'quvchilardan o'zlari ishlatadigan ilovalardan shartga misol so'rang (masalan, Telegram'da kod xato kiritilsa nima bo'ladi). 3 daqiqa."
        },
        {
          type: "analogy",
          title: "Shart — bu hayotdagi \"agar\"",
          emoji: "⚽",
          text: "Onang aytadi: \"**Agar** uy vazifangni qilgan bo'lsang, futbolga borasan, **aks holda** uyda o'tirasan.\" Bu yerda shart — \"uy vazifasi qilinganmi?\". Javob faqat ikki xil: **ha (True)** yoki **yo'q (False)**. Python ham xuddi shunday: avval savol beradi, javobga qarab yo'lni tanlaydi. `if` — \"agar\", `else` — \"aks holda\".",
          notes: "Doskada ikki tarmoqli yo'l (vilka) chizing: chapda \"futbol\", o'ngda \"uyda\". Keyingi slaydlarda shu rasmga qaytasiz."
        },
        {
          type: "text",
          title: "Taqqoslash operatorlari",
          body: "Shart odatda ikki qiymatni **taqqoslash** orqali tuziladi. Natija har doim `True` yoki `False` bo'ladi.",
          points: [
            "`==` — teng (5 == 5 → True)",
            "`!=` — teng emas (5 != 3 → True)",
            "`>` — katta, `<` — kichik",
            "`>=` — katta yoki teng, `<=` — kichik yoki teng",
            "Diqqat: `==` ikkita tenglik belgisi! Bitta `=` — bu qiymat berish"
          ],
          notes: "Har bir operator uchun sinfdan og'zaki misol so'rang: \"10 >= 10 nima?\". Ko'pchilik False deydi — tushuntiring: teng bo'lsa ham True."
        },
        {
          type: "code",
          title: "Taqqoslash natijasi — bool",
          code: `a = 15
b = 10
print(a > b)
print(a < b)
print(a == 15)
print(a != b)
print(b >= 10)
print(b <= 9)`,
          explain: [
            "Har bir taqqoslash savolga o'xshaydi: \"a b dan kattami?\"",
            "Javob — `True` (ha) yoki `False` (yo'q)",
            "`b >= 10` — b 10 ga teng, shuning uchun True",
            "Bu qiymatlar `bool` turiga tegishli (1-modulda ko'rganmiz)"
          ],
          output: `True
False
True
True
True
False`,
          notes: "Kodni ishga tushirishdan oldin sinfdan har bir qator natijasini taxmin qilishni so'rang, keyin ▶ bosib tekshiring."
        },
        {
          type: "code",
          title: "Matnlarni ham taqqoslash mumkin",
          code: `ism = "Ali"
print(ism == "Ali")
print(ism == "ali")
print("olma" < "banan")
natija = 5 > 3
print(natija)
print(type(natija))`,
          explain: [
            "Matnlar harfma-harf taqqoslanadi, katta-kichik harf **farq qiladi**: \"Ali\" ≠ \"ali\"",
            "`<` matnlarda alifbo tartibini tekshiradi: \"o\" harfi \"b\" dan keyin, shuning uchun False",
            "Taqqoslash natijasini o'zgaruvchiga saqlash ham mumkin",
            "`type()` natija `bool` ekanini ko'rsatadi"
          ],
          output: `True
False
False
True
<class 'bool'>`,
          notes: "\"ali\" va \"Ali\" farqi — login tizimlarida muhim ekanini aytib o'ting. Alifbo tartibi bo'yicha savolni chuqurlashtirmang."
        },
        {
          type: "quiz",
          question: "Bu kod nima chiqaradi?",
          code: `x = 7
print(x >= 7)`,
          options: ["False", "True", "7", "Xato beradi"],
          answer: 1,
          explain: "`>=` — \"katta **yoki teng**\". 7 soni 7 ga teng, demak natija True.",
          notes: "Qo'l ko'tarib ovoz berish usulidan foydalaning. False deganlar bilan alohida gaplashing — ular >= ni > bilan adashtiryapti."
        },
        {
          type: "text",
          title: "if — \"agar\" operatori",
          body: "`if` dan keyin shart yoziladi. Shart **True** bo'lsa, ichidagi kod bajariladi. **False** bo'lsa — o'tkazib yuboriladi.",
          points: [
            "Sintaksis: `if shart:` — oxirida **ikki nuqta** (:) shart!",
            "Ichki kod **4 ta bo'sh joy** (yoki Tab) bilan suriladi — bu chekinish (indentation)",
            "Chekinishli barcha qatorlar `if` ga tegishli \"blok\" hisoblanadi",
            "Chekinishsiz qator — `if` dan tashqarida, har doim bajariladi"
          ],
          notes: "Doskada if blokini to'rtburchak bilan o'rab ko'rsating. Ikki nuqtani unutish — eng ko'p uchraydigan xato, buni alohida ta'kidlang."
        },
        {
          type: "code",
          title: "Birinchi if",
          code: `yosh = 17
if yosh >= 16:
    print("Siz ID-karta olishingiz mumkin")
    print("Hujjatlaringizni tayyorlang")
print("Dastur tugadi")`,
          explain: [
            "`yosh >= 16` → True, shuning uchun ichki 2 qator bajariladi",
            "Ichki qatorlar 4 ta bo'sh joy bilan surilgan",
            "Oxirgi `print` surilmagan — u `if` ga tegishli emas, doim ishlaydi",
            "Sinab ko'ring: `yosh = 12` qilsangiz faqat \"Dastur tugadi\" chiqadi"
          ],
          output: `Siz ID-karta olishingiz mumkin
Hujjatlaringizni tayyorlang
Dastur tugadi`,
          notes: "Kodni ikki marta ishga tushiring: yosh = 17 va yosh = 12 bilan. Farqni sinf o'zi aytsin."
        },
        {
          type: "code",
          title: "if / else — ikki yo'l",
          code: `ball = 54
if ball >= 60:
    print("Tabriklaymiz, imtihondan o'tdingiz!")
else:
    print("Afsus, yana tayyorlaning.")
print("Natija:", ball)`,
          explain: [
            "`else` — \"aks holda\": shart False bo'lsa bajariladi",
            "`else` dan keyin shart yozilmaydi, faqat ikki nuqta: `else:`",
            "Ikki blokdan **faqat bittasi** ishlaydi, hech qachon ikkalasi emas",
            "`else` doim `if` bilan bir xil chekinishda yoziladi"
          ],
          output: `Afsus, yana tayyorlaning.
Natija: 54`,
          notes: "So'rang: \"ball = 60 bo'lsa nima chiqadi?\" Javob — o'tdingiz, chunki >=. Chegaraviy qiymatlarni tekshirish odatini shakllantiring."
        },
        {
          type: "text",
          title: "Chekinish (indentation) — Python'ning qonuni",
          body: "Boshqa tillarda bloklar `{ }` qavslar bilan belgilanadi. Python'da esa bloklarni **faqat chekinish** belgilaydi. Shuning uchun bo'sh joylar — bu bezak emas, balki **kodning bir qismi**.",
          points: [
            "Bir blokdagi barcha qatorlar **bir xil** chekinishda bo'lishi kerak",
            "Standart — 4 ta bo'sh joy (redaktorlar Tab'ni avtomatik 4 bo'sh joyga aylantiradi)",
            "Chekinish yo'q bo'lsa → `IndentationError`",
            "Noto'g'ri chekinish ba'zan xato bermaydi, lekin dastur **noto'g'ri ishlaydi** — bu eng xavflisi!"
          ],
          notes: "Oxirgi punktga e'tibor bering: print'ni tasodifan if ichiga surib qo'yish mantiqiy xato beradi, Python buni aytmaydi."
        },
        {
          type: "compare",
          title: "Xato: chekinish unutilgan",
          left: {
            label: "❌ Noto'g'ri",
            code: `harorat = 35
if harorat > 30:
print("Juda issiq!")`
          },
          right: {
            label: "✅ To'g'ri",
            code: `harorat = 35
if harorat > 30:
    print("Juda issiq!")`
          },
          good: "right",
          notes: "Chap kodni muharrirda ishga tushirib, IndentationError xabarini ko'rsating. Xato xabarida qator raqami borligiga e'tibor qarating."
        },
        {
          type: "compare",
          title: "Eng mashhur xato: = va ==",
          left: {
            label: "❌ Noto'g'ri (SyntaxError)",
            code: `x = 5
if x = 5:
    print("x beshga teng")`
          },
          right: {
            label: "✅ To'g'ri",
            code: `x = 5
if x == 5:
    print("x beshga teng")`
          },
          good: "right",
          notes: "Eslatma qoidasi: bitta = \"qo'y\" (qiymat ber), ikkita == \"so'ra\" (tengmi?). O'quvchilarga 3 marta takrorlating."
        },
        {
          type: "code",
          title: "Amaliy misol: parol tekshirish",
          code: `# parol = input("Parolni kiriting: ")
parol = "python123"
if parol == "python123":
    print("Xush kelibsiz!")
    print("Siz tizimga kirdingiz.")
else:
    print("Parol noto'g'ri!")
    print("Qaytadan urinib ko'ring.")`,
          explain: [
            "Haqiqiy dasturda parol `input()` orqali olinadi (izohdagi qator)",
            "Slaydda natija aniq bo'lishi uchun qiymatni o'zimiz berdik",
            "Har bir blokda bir nechta qator bo'lishi mumkin",
            "Bo'sh joy ham belgi: \"python123 \" (oxirida probel) — boshqa parol!"
          ],
          output: `Xush kelibsiz!
Siz tizimga kirdingiz.`,
          notes: "Izohni olib tashlab, input bilan ishga tushiring va bir o'quvchiga xato parol kiritishni so'rang."
        },
        {
          type: "quiz",
          question: "Bu kod nima chiqaradi?",
          code: `x = 10
if x > 10:
    print("A")
else:
    print("B")
print("C")`,
          options: ["A va C", "B va C", "Faqat B", "Faqat C"],
          answer: 1,
          explain: "10 > 10 — False (teng, lekin katta emas), shuning uchun else ishlaydi: B. \"C\" esa if/else dan tashqarida, doim chiqadi.",
          notes: "\"Faqat B\" deganlar oxirgi print chekinishsiz ekanini sezmagan. Shu slaydda blok tushunchasini mustahkamlang."
        },
        {
          type: "quiz",
          question: "Qaysi qatorda xato bor?",
          code: `a = 3         # 1-qator
b = 3         # 2-qator
if a = b:     # 3-qator
    print("Teng")  # 4-qator`,
          options: ["1-qator", "2-qator", "3-qator", "4-qator"],
          answer: 2,
          explain: "Shartda taqqoslash uchun `==` kerak. `if a = b:` — SyntaxError. 1-2 qatorlarda `=` to'g'ri, chunki u yerda qiymat beriladi.",
          notes: "Tez savol — 30 soniya. Keyin to'g'ri variantni o'quvchining o'ziga doskaga yozdiring."
        },
        {
          type: "task",
          title: "Mashq 1: Musbat sonmi?",
          task: "Foydalanuvchidan butun son so'rang. Agar son 0 dan katta bo'lsa \"Musbat son\", aks holda \"Musbat emas\" deb chiqaring. Oxirida doim \"Tekshiruv tugadi\" yozilsin.",
          starter: `son = int(input("Son kiriting: "))
# shu yerga if/else yozing
`,
          hint: "`if son > 0:` dan foydalaning. \"Tekshiruv tugadi\" qatorini chekinishsiz yozing.",
          solution: `son = int(input("Son kiriting: "))
if son > 0:
    print("Musbat son")
else:
    print("Musbat emas")
print("Tekshiruv tugadi")`,
          notes: "5 daqiqa. Tez tugatganlarga 0 ni kiritib ko'rishni ayting: 0 musbatmi? (Yo'q — keyingi darsda elif bilan \"nol\" holatini ajratamiz.)"
        },
        {
          type: "task",
          title: "Mashq 2: Do'kondagi chegirma",
          task: "Xarid summasini so'rang. Agar summa 100 000 so'm yoki undan ko'p bo'lsa, 10% chegirma bering va \"Chegirma qo'llandi!\" deb yozing. Aks holda \"Chegirma yo'q\" deb yozing. Oxirida to'lanadigan summani chiqaring.",
          starter: `summa = float(input("Xarid summasi: "))
# chegirmani hisoblang
`,
          hint: "If ichida `summa = summa - summa * 10 / 100` yozing. Natijani `print(f\"To'lov: {summa} so'm\")` bilan chiqaring.",
          solution: `summa = float(input("Xarid summasi: "))
if summa >= 100000:
    summa = summa - summa * 10 / 100
    print("Chegirma qo'llandi!")
else:
    print("Chegirma yo'q")
print(f"To'lov: {summa} so'm")`,
          notes: "7 daqiqa. Ko'p o'quvchi `>=` o'rniga `>` yozadi — 100000 kiritib tekshirishni so'rang. Yechimni bitta o'quvchi proyektorda ko'rsatsin."
        },
        {
          type: "summary",
          title: "Bugun nimani o'rgandik?",
          points: [
            "Taqqoslash operatorlari: `==`, `!=`, `>`, `<`, `>=`, `<=` — natija doim `True`/`False`",
            "`if shart:` — shart True bo'lsa blok bajariladi",
            "`else:` — shart False bo'lganda ishlaydi, faqat bitta blok bajariladi",
            "Ikki nuqta (:) va 4 bo'sh joyli chekinish — majburiy",
            "`=` — qiymat berish, `==` — tenglikni tekshirish"
          ],
          notes: "Har bir punktni o'quvchilardan biriga o'z so'zlari bilan aytib berishni so'rang. Uy vazifasini tushuntiring."
        }
      ],
      homework: [
        { level: "oson", task: "Foydalanuvchi yoshini so'rang. 18 va undan katta bo'lsa \"Siz kattasiz\", aks holda \"Siz hali yoshsiz\" deb chiqaring. 17, 18 va 19 bilan tekshiring." },
        { level: "o'rta", task: "Ikkita son so'rang va qaysi biri kattaligini chiqaring: \"Birinchi son katta\" yoki \"Ikkinchi son katta yoki ular teng\". Keyin ikkala sonning farqini abs() yordamida chiqaring." },
        { level: "qiyin", task: "Telefon zaryadi dasturi: zaryad foizi va ekran yorqinligini (0-100) so'rang. Agar zaryad 20 dan kichik bo'lsa, yorqinlikni 2 marta kamaytiring (// 2) va \"Quvvatni tejash rejimi yoqildi\" deb yozing, aks holda \"Oddiy rejim\". Oxirida yangi yorqinlikni f-string bilan chiqaring." }
      ]
    },

    // ===================== 2-DARS =====================
    {
      id: "m2-l2",
      title: "elif va ichma-ich shartlar",
      duration: 90,
      goals: [
        "elif yordamida 3 va undan ko'p yo'nalishli shart yozish",
        "Shartlar tartibi natijaga qanday ta'sir qilishini tushunish",
        "Ichma-ich (nested) if yozish",
        "Oraliqlarni tekshirish: 10 <= x < 20"
      ],
      keywords: ["elif", "nested if", "oraliq", "%", "juft/toq"],
      plan: [
        { time: 10, label: "Takrorlash: if/else, taqqoslash" },
        { time: 20, label: "elif zanjiri va baho kalkulyatori" },
        { time: 10, label: "Shartlar tartibi, if va elif farqi" },
        { time: 15, label: "Juft/toq, oraliqlar, ichma-ich if" },
        { time: 30, label: "Amaliy mashqlar" },
        { time: 5, label: "Xulosa va uy vazifasi" }
      ],
      slides: [
        {
          type: "title",
          title: "elif va ichma-ich shartlar",
          subtitle: "Ikki emas, ko'p yo'l tanlaymiz",
          emoji: "🛣️",
          notes: "Uy vazifasini 2-3 o'quvchidan tezda so'rang. Keyin: \"Agar 3 ta variant bo'lsa-chi? if/else yetadimi?\" savoli bilan mavzuga o'ting."
        },
        {
          type: "text",
          title: "if/else yetmay qolganda",
          body: "`if/else` faqat **ikkita** yo'lni beradi. Lekin hayotda ko'pincha variantlar ko'proq bo'ladi.",
          points: [
            "Futbol natijasi: g'alaba, durang yoki mag'lubiyat — 3 ta variant",
            "Maktab bahosi: 5, 4, 3 yoki 2 — 4 ta variant",
            "Ob-havo: sovuq, iliq, issiq, juda issiq",
            "Yechim — `elif` (\"else if\" ning qisqartmasi: \"aks holda, agar...\")"
          ],
          notes: "O'quvchilarga 3+ variantli hayotiy vaziyat topishni topshiring (1 daqiqa). Eng qiziqini doskaga yozing."
        },
        {
          type: "analogy",
          title: "elif — futbol turnir jadvali",
          emoji: "🏆",
          text: "O'yin tugadi. Hakam hisobga qaraydi: **agar** biz ko'p gol ursak — 3 ochko. **Aks holda, agar** gollar teng bo'lsa — 1 ochko. **Aks holda** — 0 ochko. Hakam savollarni **tartib bilan** beradi va birinchi \"ha\" javobidan keyin to'xtaydi. Uchinchi savolga o'tmaydi, chunki javob topildi. `elif` ham aynan shunday ishlaydi!",
          notes: "Sinfdan sevimli jamoalari haqida so'rang (Paxtakor, Real, Barsa) — keyingi kod slaydida shu jamoa nomini ishlatsangiz bo'ladi."
        },
        {
          type: "code",
          title: "elif sintaksisi",
          code: `gol_biz = 2
gol_ular = 2
if gol_biz > gol_ular:
    print("G'alaba! +3 ochko")
elif gol_biz == gol_ular:
    print("Durang. +1 ochko")
else:
    print("Mag'lubiyat. 0 ochko")`,
          explain: [
            "Python shartlarni **yuqoridan pastga** tekshiradi",
            "Birinchi `if` False → keyingi `elif` ga o'tadi",
            "`elif` True → uning bloki bajariladi va qolganlari **o'tkazib yuboriladi**",
            "`elif` lar soni cheklanmagan, `else` esa ixtiyoriy"
          ],
          output: `Durang. +1 ochko`,
          notes: "gol_biz qiymatini 3 va 0 ga o'zgartirib, uchala holatni ham ko'rsating."
        },
        {
          type: "text",
          title: "if / elif / else qanday ishlaydi?",
          body: "Butun zanjir — **bitta qaror**. Undan faqat **bitta** blok bajariladi (yoki birortasi ham bajarilmaydi, agar `else` bo'lmasa).",
          points: [
            "1) `if` tekshiriladi → True bo'lsa bajariladi, zanjir tugaydi",
            "2) False bo'lsa — birinchi `elif` tekshiriladi, va hokazo",
            "3) Hech biri True bo'lmasa — `else` bajariladi",
            "`elif` hech qachon `if` siz yozilmaydi va `else` dan keyin kelmaydi"
          ],
          notes: "Doskada blok-sxema (oqim diagrammasi) chizing: romblar — shartlar, to'rtburchaklar — harakatlar."
        },
        {
          type: "code",
          title: "Baho kalkulyatori",
          code: `ball = 78
if ball >= 86:
    baho = 5
elif ball >= 71:
    baho = 4
elif ball >= 56:
    baho = 3
else:
    baho = 2
print(f"Ball: {ball}, baho: {baho}")`,
          explain: [
            "78 >= 86? Yo'q. 78 >= 71? Ha → baho = 4, qolgan shartlar tekshirilmaydi",
            "`elif ball >= 71` da \"ball < 86\" deb yozish shart emas — oldingi shart buni allaqachon kafolatlagan",
            "Bloklar ichida o'zgaruvchiga qiymat berib, keyin bir joyda chiqarish — qulay usul",
            "Chegaralarni tekshiring: 86, 71, 56 qiymatlari bilan sinab ko'ring"
          ],
          output: `Ball: 78, baho: 4`,
          notes: "Ikkinchi punkt muhim — o'quvchilar ko'pincha ortiqcha shart yozishadi. Bu xato emas, lekin elif mantig'ini tushunmaganini bildiradi."
        },
        {
          type: "compare",
          title: "Shartlar tartibi muhim!",
          left: {
            label: "❌ Noto'g'ri tartib",
            code: `ball = 95
if ball >= 56:
    print("Baho: 3")
elif ball >= 71:
    print("Baho: 4")
elif ball >= 86:
    print("Baho: 5")`
          },
          right: {
            label: "✅ To'g'ri tartib",
            code: `ball = 95
if ball >= 86:
    print("Baho: 5")
elif ball >= 71:
    print("Baho: 4")
elif ball >= 56:
    print("Baho: 3")`
          },
          good: "right",
          notes: "So'rang: \"Chap kod 95 ball uchun nima chiqaradi?\" — \"Baho: 3\"! Chunki 95 >= 56 birinchi bo'lib True bo'ldi. Qoida: \">=\" bilan ishlaganda kattasidan boshlang."
        },
        {
          type: "quiz",
          question: "Bu kod nima chiqaradi?",
          code: `t = 35
if t > 10:
    print("Iliq")
elif t > 30:
    print("Issiq")
else:
    print("Sovuq")`,
          options: ["Issiq", "Iliq va Issiq", "Iliq", "Sovuq"],
          answer: 2,
          explain: "35 > 10 — True, shuning uchun \"Iliq\" chiqadi va zanjir tugaydi. `elif t > 30` umuman tekshirilmaydi. Tartib xato — `t > 30` birinchi bo'lishi kerak edi.",
          notes: "\"Iliq va Issiq\" deganlar elif ni alohida if deb o'ylashyapti — keyingi slayd aynan shu haqida."
        },
        {
          type: "compare",
          title: "Alohida if'lar va elif zanjiri",
          left: {
            label: "❌ Alohida if'lar",
            code: `ball = 90
if ball >= 86:
    print("A'lo")
if ball >= 71:
    print("Yaxshi")
if ball >= 56:
    print("Qoniqarli")
# 3 ta xabar chiqadi!`
          },
          right: {
            label: "✅ elif zanjiri",
            code: `ball = 90
if ball >= 86:
    print("A'lo")
elif ball >= 71:
    print("Yaxshi")
elif ball >= 56:
    print("Qoniqarli")
# faqat "A'lo" chiqadi`
          },
          good: "right",
          notes: "Har bir alohida if — mustaqil savol. elif esa bitta savolning davomi. Chap kodni ishga tushirib, 3 qator chiqishini ko'rsating."
        },
        {
          type: "code",
          title: "Juft yoki toq? (% operatori)",
          code: `son = 17
if son % 2 == 0:
    print(son, "- juft son")
else:
    print(son, "- toq son")

qoldiq = son % 5
print("5 ga bo'lgandagi qoldiq:", qoldiq)`,
          explain: [
            "`%` — bo'lishdagi qoldiq (1-modulda o'rgangan edik)",
            "Juft son 2 ga qoldiqsiz bo'linadi: `son % 2 == 0`",
            "Xuddi shunday: `son % 5 == 0` — son 5 ga karrali",
            "Bu usul ko'p masalalarda ishlatiladi — yaxshi eslab qoling!"
          ],
          output: `17 - toq son
5 ga bo'lgandagi qoldiq: 2`,
          notes: "Sinfdan so'rang: \"Son 3 ga bo'linishini qanday tekshiramiz?\" — son % 3 == 0."
        },
        {
          type: "code",
          title: "Oraliqlar: 7 <= yosh < 18",
          code: `yosh = 13
if 0 <= yosh < 7:
    print("Bog'cha yoshi")
elif 7 <= yosh < 18:
    print("Maktab o'quvchisi")
elif 18 <= yosh < 60:
    print("Kattalar")
else:
    print("Nafaqa yoshi")`,
          explain: [
            "Python'da matematikadagidek **zanjir taqqoslash** mumkin: `7 <= yosh < 18`",
            "Bu \"yosh 7 dan kichik emas VA 18 dan kichik\" degani",
            "Chegaralarni diqqat bilan tanlang: 18 — \"Kattalar\" guruhiga kiradi",
            "Ko'p tillarda bunday yozib bo'lmaydi — bu Python'ning qulayligi"
          ],
          output: `Maktab o'quvchisi`,
          notes: "yosh = 7 va yosh = 18 bilan tekshiring — chegaraviy qiymatlar qaysi guruhga tushadi? O'quvchilar o'zi aytsin."
        },
        {
          type: "text",
          title: "Ichma-ich (nested) shartlar",
          body: "Ba'zan bitta shart bajarilgandan **keyin** yana savol berish kerak bo'ladi. Shunda `if` ichiga yana `if` yoziladi.",
          points: [
            "Masalan: avval \"bilet bormi?\", agar bor bo'lsa — \"yoshi yetarlimi?\"",
            "Ichki `if` yana 4 bo'sh joyga suriladi (jami 8 ta)",
            "Har bir `else` o'zining `if` i bilan bir xil chekinishda turadi",
            "Maslahat: 3 qavatdan chuqur ichma-ichlikdan qoching — o'qish qiyinlashadi"
          ],
          notes: "Stadion kirish joyini tasavvur qilishni so'rang: birinchi nazoratchi bilet tekshiradi, ikkinchisi — yoshni."
        },
        {
          type: "code",
          title: "Ichma-ich if: stadionga kirish",
          code: `bilet_bor = True
yosh = 12
if bilet_bor:
    if yosh >= 14:
        print("Stadionga kirishingiz mumkin")
    else:
        print("Kattalar bilan kirishingiz kerak")
else:
    print("Avval bilet sotib oling")`,
          explain: [
            "`if bilet_bor:` — o'zgaruvchi o'zi True/False, `== True` yozish shart emas",
            "Tashqi shart True → ichki `if` tekshiriladi",
            "Ichki `else` (8 bo'sh joy emas, 4 ta) ichki `if` ga tegishli",
            "Tashqi `else` (chekinishsiz) tashqi `if` ga tegishli"
          ],
          output: `Kattalar bilan kirishingiz kerak`,
          notes: "Qaysi else qaysi if ga tegishli ekanini rangli bo'r bilan bog'lab ko'rsating. bilet_bor = False qilib ham ishga tushiring."
        },
        {
          type: "quiz",
          question: "Bu kod nima chiqaradi?",
          code: `a = 5
b = 8
if a > 3:
    if b > 10:
        print("X")
    else:
        print("Y")
else:
    print("Z")`,
          options: ["X", "Z", "Y va Z", "Y"],
          answer: 3,
          explain: "a > 3 — True, ichkariga kiramiz. b > 10 — False, shuning uchun ichki else: \"Y\". Tashqi else ishlamaydi.",
          notes: "Javobni aytishdan oldin bir o'quvchiga kodni qadamma-qadam ovoz chiqarib \"bajarishni\" so'rang."
        },
        {
          type: "task",
          title: "Mashq 1: Baho kalkulyatori",
          task: "0 dan 100 gacha ball so'rang va bahoni chiqaring: 86-100 → 5, 71-85 → 4, 56-70 → 3, 0-55 → 2. Agar ball 100 dan katta yoki 0 dan kichik bo'lsa, \"Noto'g'ri ball!\" deb chiqaring.",
          starter: `ball = int(input("Ballingiz: "))
# avval noto'g'ri qiymatlarni tekshiring
`,
          hint: "Zanjirni `if ball > 100:` va `elif ball < 0:` bilan boshlang, keyin `elif ball >= 86:` va hokazo.",
          solution: `ball = int(input("Ballingiz: "))
if ball > 100:
    print("Noto'g'ri ball!")
elif ball < 0:
    print("Noto'g'ri ball!")
elif ball >= 86:
    print("Baho: 5")
elif ball >= 71:
    print("Baho: 4")
elif ball >= 56:
    print("Baho: 3")
else:
    print("Baho: 2")`,
          notes: "8 daqiqa. Ikki marta \"Noto'g'ri ball!\" yozish noqulay — keyingi darsda `or` bilan bitta shartga birlashtiramiz deb aytib qo'ying."
        },
        {
          type: "task",
          title: "Mashq 2: Son haqida hammasi",
          task: "Butun son so'rang. Agar son 0 bo'lsa \"Nol\" deb chiqaring. Aks holda avval musbat yoki manfiyligini, keyin (ichma-ich if bilan) juft yoki toqligini chiqaring. Masalan: \"Musbat juft son\".",
          starter: `son = int(input("Son: "))
if son == 0:
    print("Nol")
# davom ettiring
`,
          hint: "`elif son > 0:` ichida `if son % 2 == 0:` yozing. Manfiy sonlar uchun ham xuddi shunday (`else:` ichida).",
          solution: `son = int(input("Son: "))
if son == 0:
    print("Nol")
elif son > 0:
    if son % 2 == 0:
        print("Musbat juft son")
    else:
        print("Musbat toq son")
else:
    if son % 2 == 0:
        print("Manfiy juft son")
    else:
        print("Manfiy toq son")`,
          notes: "10 daqiqa. Python'da -3 % 2 natijasi 1 ga teng, shuning uchun manfiy sonlar uchun ham to'g'ri ishlaydi — qiziquvchilarga ko'rsating."
        },
        {
          type: "task",
          title: "Mashq 3: Telefon zaryadi",
          task: "Zaryad foizini (0-100) so'rang: 80 va undan yuqori → \"🔋 To'liq\", 50-79 → \"Yaxshi\", 20-49 → \"O'rtacha, zaryadlang\", 1-19 → \"⚠️ Kam! Quvvatni tejash rejimi\", 0 → \"Telefon o'chdi\".",
          starter: `zaryad = int(input("Zaryad (%): "))
`,
          hint: "Kattasidan boshlang: `if zaryad >= 80:`, `elif zaryad >= 50:`... Oxirida `elif zaryad >= 1:` va `else:`.",
          solution: `zaryad = int(input("Zaryad (%): "))
if zaryad >= 80:
    print("🔋 To'liq")
elif zaryad >= 50:
    print("Yaxshi")
elif zaryad >= 20:
    print("O'rtacha, zaryadlang")
elif zaryad >= 1:
    print("⚠️ Kam! Quvvatni tejash rejimi")
else:
    print("Telefon o'chdi")`,
          notes: "Tez ishlaydiganlar uchun. Vaqt qolmasa — uyga qo'shimcha vazifa qilib bering."
        },
        {
          type: "summary",
          title: "Bugun nimani o'rgandik?",
          points: [
            "`elif` — \"aks holda, agar\": 3 va undan ko'p yo'nalish uchun",
            "Zanjirdan faqat **birinchi** True bo'lgan blok bajariladi",
            "Shartlar tartibi muhim: `>=` bilan kattasidan boshlang",
            "Alohida `if` lar — mustaqil savollar, `elif` — bitta qaror",
            "`son % 2 == 0` — juftlik, `10 <= x < 20` — oraliq tekshirish",
            "Ichma-ich if: har bir `else` o'z `if` i bilan bir xil chekinishda"
          ],
          notes: "Chiqish chiptasi (exit ticket): har bir o'quvchi qog'ozga elif haqida bitta gap yozib topshirsin."
        }
      ],
      homework: [
        { level: "oson", task: "Hafta kuni raqamini (1-7) so'rang va kun nomini chiqaring (1 → Dushanba, ..., 7 → Yakshanba). Boshqa son kiritilsa — \"Bunday kun yo'q\"." },
        { level: "o'rta", task: "Tana massasi indeksi (BMI): vazn (kg) va bo'yni (m) so'rang, BMI = vazn / bo'y ** 2. Natijani round(…, 1) bilan chiqaring: 18.5 dan kam — \"Vazn kam\", 18.5-24.9 — \"Normal\", 25-29.9 — \"Ortiqcha vazn\", 30 va undan ko'p — \"Semizlik\"." },
        { level: "qiyin", task: "Taksi narxi kalkulyatori: masofa (km) va vaqtni (soat, 0-23) so'rang. Narx: birinchi 3 km — 10 000 so'm, har qo'shimcha km — 2 500 so'm. Agar soat 22 yoki undan katta bo'lsa (ichma-ich if bilan) narxga 20% tungi qo'shimcha qo'shing. Hisob-kitobni f-string bilan chiroyli chiqaring." }
      ]
    },

    // ===================== 3-DARS =====================
    {
      id: "m2-l3",
      title: "Mantiqiy operatorlar",
      duration: 90,
      goals: [
        "and, or, not operatorlarini ishlatish",
        "Haqiqat jadvallarini tushunish",
        "Bir nechta shartni birlashtirish",
        "Truthy va falsy qiymatlarni bilish",
        "Kabisa yili va login tekshiruvi masalalarini yechish"
      ],
      keywords: ["and", "or", "not", "haqiqat jadvali", "truthy", "falsy", "bool()"],
      plan: [
        { time: 10, label: "Takrorlash: elif, ichma-ich if" },
        { time: 25, label: "and, or, not va haqiqat jadvallari" },
        { time: 10, label: "Ko'p uchraydigan xato, ustuvorlik" },
        { time: 10, label: "Truthy va falsy qiymatlar" },
        { time: 10, label: "Kabisa yili va login tekshiruvi" },
        { time: 20, label: "Amaliy mashqlar" },
        { time: 5, label: "Xulosa va uy vazifasi" }
      ],
      slides: [
        {
          type: "title",
          title: "Mantiqiy operatorlar",
          subtitle: "and, or, not — shartlarni birlashtiramiz",
          emoji: "🧠",
          notes: "Takrorlash uchun savol: \"O'tgan darsdagi baho kalkulyatorida 'Noto'g'ri ball!' ni ikki marta yozdik. Buni qisqartirish mumkinmi?\""
        },
        {
          type: "text",
          title: "Bir nechta shart birdaniga",
          body: "Ko'pincha qaror **bitta emas, bir nechta** shartga bog'liq bo'ladi. Ichma-ich if yozish mumkin, lekin kod chuqurlashib, chalkashib ketadi.",
          points: [
            "`and` (va) — **ikkala** shart ham True bo'lishi kerak",
            "`or` (yoki) — **kamida bittasi** True bo'lsa yetarli",
            "`not` (emas) — natijani **teskarisiga** aylantiradi",
            "Bular mantiqiy operatorlar deyiladi, natijasi ham `bool`"
          ],
          notes: "Har bir operatorni o'zbekcha \"va\", \"yoki\", \"emas\" so'zlari bilan bog'lang — eslab qolish oson bo'ladi."
        },
        {
          type: "analogy",
          title: "Telegram, dam olish kuni va soyabon",
          emoji: "📱",
          text: "**and**: Telegram'ga kirish uchun telefon raqami to'g'ri **VA** SMS-kod to'g'ri bo'lishi kerak. Bittasi xato bo'lsa — kira olmaysiz.\n\n**or**: Maktabga bormaysiz, agar bugun shanba **YOKI** yakshanba bo'lsa (6 kunlik o'qishda — faqat yakshanba 😄). Bittasi rost bo'lsa yetadi.\n\n**not**: \"Agar yomg'ir **yog'masa**, futbolga chiqamiz\" — bu \"yomg'ir yog'yapti\" ning teskarisi.",
          notes: "Har bir misol uchun sinfdan o'z misolini so'rang. Masalan: \"PUBG'da o'ynash uchun internet bor VA telefon zaryadi bor bo'lishi kerak\"."
        },
        {
          type: "code",
          title: "and — ikkala shart ham kerak",
          code: `yosh = 15
boyi = 160
if yosh >= 12 and boyi >= 140:
    print("Attraksionga chiqishingiz mumkin 🎢")
else:
    print("Kechirasiz, mumkin emas")

print(yosh >= 12 and boyi >= 170)`,
          explain: [
            "`yosh >= 12` → True, `boyi >= 140` → True, demak `True and True` → True",
            "Agar birortasi False bo'lsa, butun ifoda False bo'ladi",
            "Oxirgi qator: 160 >= 170 False, shuning uchun natija False",
            "`and` ichma-ich `if` o'rnini bosadi va kodni soddalashtiradi"
          ],
          output: `Attraksionga chiqishingiz mumkin 🎢
False`,
          notes: "boyi = 130 qilib qayta ishga tushiring. So'rang: \"Bu kodni ichma-ich if bilan yozsak qanday bo'lardi?\""
        },
        {
          type: "text",
          title: "Haqiqat jadvallari",
          body: "Mantiqiy operatorlar natijasini jadval ko'rinishida eslab qolish oson:",
          points: [
            "**and**: True and True = **True** | True and False = False | False and True = False | False and False = False",
            "**or**: True or True = True | True or False = True | False or True = True | False or False = **False**",
            "**not**: not True = False | not False = True",
            "Qisqa qoida: `and` — bitta False hammasini buzadi; `or` — bitta True hammasini qutqaradi"
          ],
          notes: "Doskada 2x2 jadval chizing va o'quvchilarni chaqirib to'ldirtiring. 5 daqiqa."
        },
        {
          type: "code",
          title: "Haqiqat jadvalini tekshiramiz",
          code: `print(True and True)
print(True and False)
print(False or True)
print(False or False)
print(not True)
print(not (5 > 3))`,
          explain: [
            "Natijalar jadvaldagi bilan bir xil",
            "`not (5 > 3)`: avval qavs ichi → True, keyin not → False",
            "`not` faqat bitta qiymat bilan ishlaydi, `and`/`or` — ikkitasi bilan"
          ],
          output: `True
False
True
False
False
False`,
          notes: "Ishga tushirishdan oldin har bir qator uchun sinf \"True\" yoki \"False\" deb baqirsin — o'yinga aylantiring."
        },
        {
          type: "code",
          title: "or — bittasi yetarli",
          code: `kun = "yakshanba"
if kun == "shanba" or kun == "yakshanba":
    print("Dam olish kuni! 🎉")
else:
    print("Maktabga borish kerak 📚")

ball = 105
if ball < 0 or ball > 100:
    print("Noto'g'ri ball!")`,
          explain: [
            "Birinchi shart False, ikkinchisi True → `or` natijasi True",
            "Har bir shart **to'liq** yoziladi: `kun == \"shanba\" or kun == \"yakshanba\"`",
            "Ikkinchi qism: o'tgan darsdagi ikki marta tekshiruvni bitta qatorga jamladik"
          ],
          output: `Dam olish kuni! 🎉
Noto'g'ri ball!`,
          notes: "O'tgan darsdagi baho kalkulyatoriga qaytib, `or` bilan qisqartirilgan variantni ko'rsating."
        },
        {
          type: "code",
          title: "not — teskarisi",
          code: `yomgir = False
if not yomgir:
    print("Futbolga boramiz! ⚽")
else:
    print("Uyda qolamiz")

son = 7
if not son % 2 == 0:
    print(son, "juft emas")`,
          explain: [
            "`not yomgir` → `not False` → True",
            "`not son % 2 == 0` — avval `son % 2 == 0` (False), keyin `not` → True",
            "Ko'pincha `not` o'rniga `!=` ham ishlatish mumkin: `son % 2 != 0`",
            "`not` ni bool o'zgaruvchilar bilan ishlatish eng tabiiy"
          ],
          output: `Futbolga boramiz! ⚽
7 juft emas`,
          notes: "So'rang: \"`not son % 2 == 0` ni oddiyroq qanday yozamiz?\" — `son % 2 != 0`. O'qilishi oson variantni tanlash kerakligini ayting."
        },
        {
          type: "compare",
          title: "Mashhur xato: or ni noto'g'ri yozish",
          left: {
            label: "❌ Noto'g'ri (doim True!)",
            code: `kun = "dushanba"
if kun == "shanba" or "yakshanba":
    print("Dam olish kuni")
# "Dam olish kuni" chiqadi!`
          },
          right: {
            label: "✅ To'g'ri",
            code: `kun = "dushanba"
if kun == "shanba" or kun == "yakshanba":
    print("Dam olish kuni")
# hech narsa chiqmaydi`
          },
          good: "right",
          notes: "Chap kodda Python `\"yakshanba\"` ni alohida shart deb tushunadi, bo'sh bo'lmagan matn esa doim True (keyingi slaydlarda — truthy). Bu xato juda ko'p uchraydi!"
        },
        {
          type: "quiz",
          question: "Bu kod nima chiqaradi?",
          code: `print(True or False and False)`,
          options: ["False", "Xato beradi", "True", "None"],
          answer: 2,
          explain: "`and` ning ustuvorligi `or` dan yuqori (xuddi * ning + dan yuqoriligi kabi). Avval `False and False` → False, keyin `True or False` → True. Shubha bo'lsa — qavs qo'ying!",
          notes: "Ustuvorlik tartibi: not → and → or. Arifmetikadagi ko'paytirish/qo'shish tartibi bilan solishtiring."
        },
        {
          type: "text",
          title: "Truthy va falsy qiymatlar",
          body: "Python'da `if` dan keyin faqat True/False emas, **istalgan qiymat** yozish mumkin. Python uni o'zi `bool` ga aylantiradi.",
          points: [
            "**Falsy** (False hisoblanadi): `0`, `0.0`, `\"\"` (bo'sh matn), `False`, `None`",
            "**Truthy** (True hisoblanadi): qolgan hamma narsa — `5`, `-3`, `\"salom\"`, `\" \"` (probel ham!)",
            "Tekshirish uchun: `bool(qiymat)`",
            "Amaliyotda: `if ism:` — \"ism bo'sh emasmi?\" degan savol"
          ],
          notes: "Eslatma: \" \" (bitta probel) — truthy, chunki matn bo'sh emas. Bu ko'pchilikni hayron qoldiradi."
        },
        {
          type: "code",
          title: "bool() bilan tekshiramiz",
          code: `print(bool(0))
print(bool(42))
print(bool(""))
print(bool("salom"))
print(bool(-3.5))

# ism = input("Ismingiz: ")
ism = ""
if ism:
    print("Salom,", ism)
else:
    print("Ism kiritilmadi!")`,
          explain: [
            "0 va bo'sh matn — falsy, qolganlari — truthy",
            "Manfiy son ham truthy! Faqat 0 falsy",
            "`if ism:` — foydalanuvchi Enter'ni bosib yuborganini tekshirishning qisqa usuli",
            "Bu `if ism != \"\":` bilan bir xil ishlaydi"
          ],
          output: `False
True
False
True
True
Ism kiritilmadi!`,
          notes: "Izohni olib tashlab, input bilan ishga tushiring: avval hech narsa yozmasdan Enter, keyin ism bilan."
        },
        {
          type: "code",
          title: "Kabisa yili masalasi",
          code: `yil = 2024
# Qoida: 4 ga bo'linsa VA 100 ga bo'linmasa,
# YOKI 400 ga bo'linsa — kabisa yili
if (yil % 4 == 0 and yil % 100 != 0) or yil % 400 == 0:
    print(yil, "- kabisa yili (366 kun)")
else:
    print(yil, "- oddiy yil (365 kun)")`,
          explain: [
            "2024 % 4 == 0 → True, 2024 % 100 != 0 → True → qavs ichi True",
            "`True or ...` → True: kabisa yili",
            "1900 — 4 ga bo'linadi, lekin 100 ga ham bo'linadi va 400 ga bo'linmaydi → oddiy yil",
            "2000 — 400 ga bo'linadi → kabisa yili",
            "Qavslar mantiqni aniq ko'rsatadi — murakkab shartlarda doim qo'ying"
          ],
          output: `2024 - kabisa yili (366 kun)`,
          notes: "yil = 1900, 2000, 2023 bilan ishga tushiring. Nima uchun bunday qoida borligini qisqacha ayting: Yer Quyosh atrofini ~365.2425 kunda aylanadi."
        },
        {
          type: "quiz",
          question: "Qaysi yil kabisa yili?",
          options: ["1900", "2000", "2100", "2023"],
          answer: 1,
          explain: "2000 % 400 == 0 → kabisa. 1900 va 2100 100 ga bo'linadi, lekin 400 ga bo'linmaydi. 2023 esa 4 ga ham bo'linmaydi.",
          notes: "O'quvchilar avval daftarda hisoblasin, keyin javob bersin."
        },
        {
          type: "code",
          title: "Login tekshiruvi",
          code: `login = "ali_2010"
parol = "qwerty"
if login == "ali_2010" and parol == "qwerty":
    print("Tizimga kirdingiz ✅")
elif login == "ali_2010":
    print("Parol xato ❌")
else:
    print("Bunday foydalanuvchi yo'q")`,
          explain: [
            "`and`: login ham, parol ham to'g'ri bo'lishi shart",
            "`elif`: birinchi shart False, lekin login to'g'ri → demak parol xato",
            "`else`: login umuman topilmadi",
            "Haqiqiy saytlar xavfsizlik uchun \"login yoki parol xato\" deb umumiy yozadi"
          ],
          output: `Tizimga kirdingiz ✅`,
          notes: "parol = \"12345\" va login = \"vali\" bilan ishga tushirib, uchala yo'lni ko'rsating. Xavfsizlik haqidagi punktni muhokama qiling."
        },
        {
          type: "task",
          title: "Mashq 1: Kabisa yili",
          task: "Foydalanuvchidan yil so'rang va u kabisa yili ekanini aniqlang. Natija: \"2024 - kabisa yili\" yoki \"2023 - oddiy yil\". Shuningdek, fevral oyida necha kun borligini ham chiqaring (29 yoki 28).",
          starter: `yil = int(input("Yil: "))
`,
          hint: "Shart: `(yil % 4 == 0 and yil % 100 != 0) or yil % 400 == 0`. Fevral kunlarini if/else ichida chiqaring.",
          solution: `yil = int(input("Yil: "))
if (yil % 4 == 0 and yil % 100 != 0) or yil % 400 == 0:
    print(yil, "- kabisa yili")
    print("Fevralda 29 kun bor")
else:
    print(yil, "- oddiy yil")
    print("Fevralda 28 kun bor")`,
          notes: "7 daqiqa. 1900, 2000, 2024, 2023 bilan tekshirishni talab qiling."
        },
        {
          type: "task",
          title: "Mashq 2: Kino chiptasi chegirmasi",
          task: "Kinoteatr: chipta 40 000 so'm. Foydalanuvchidan yosh va o'quvchi ekanini (\"ha\"/\"yo'q\") so'rang. Agar yosh 7 dan kichik YOKI 65 dan katta bo'lsa — bepul. Aks holda, agar o'quvchi bo'lsa VA yosh 18 dan kichik bo'lsa — 50% chegirma. Qolganlar to'liq narx to'laydi.",
          starter: `yosh = int(input("Yoshingiz: "))
oquvchi = input("O'quvchimisiz? (ha/yo'q): ")
narx = 40000
`,
          hint: "Birinchi shart: `yosh < 7 or yosh > 65`. Ikkinchisi: `oquvchi == \"ha\" and yosh < 18`.",
          solution: `yosh = int(input("Yoshingiz: "))
oquvchi = input("O'quvchimisiz? (ha/yo'q): ")
narx = 40000
if yosh < 7 or yosh > 65:
    narx = 0
elif oquvchi == "ha" and yosh < 18:
    narx = narx // 2
print(f"Chipta narxi: {narx} so'm")`,
          notes: "10 daqiqa. E'tibor bering: \"Ha\" (katta harf) kiritsa ishlamaydi — qiziquvchilarga .lower() ni ko'rsatish mumkin, lekin majburiy emas."
        },
        {
          type: "summary",
          title: "Bugun nimani o'rgandik?",
          points: [
            "`and` — ikkala shart True bo'lsa True",
            "`or` — kamida bittasi True bo'lsa True",
            "`not` — True ni False ga, False ni True ga aylantiradi",
            "Ustuvorlik: not → and → or; shubha bo'lsa qavs qo'ying",
            "`x == \"a\" or \"b\"` — xato! To'g'risi: `x == \"a\" or x == \"b\"`",
            "Falsy: `0`, `0.0`, `\"\"`, `False`, `None`; qolgani — truthy"
          ],
          notes: "Keyingi darsda amaliyot ko'p bo'lishini va match-case hamda debug o'rganishimizni aytib qo'ying."
        }
      ],
      homework: [
        { level: "oson", task: "Son so'rang va u 1 dan 100 gacha oraliqda VA 5 ga karrali ekanini tekshiring (\"Ha\" / \"Yo'q\"). and operatoridan foydalaning." },
        { level: "o'rta", task: "Harf so'rang va u unli (a, e, i, o, u) yoki undosh ekanini aniqlang. or operatoridan foydalaning. Bo'sh kiritilsa (truthy/falsy yordamida) \"Hech narsa kiritilmadi\" deb chiqaring." },
        { level: "qiyin", task: "Xavfsiz parol tekshiruvi: login va parol so'rang. Login \"admin\" va parol \"Python2026\" bo'lsa — \"Xush kelibsiz\". Login to'g'ri, parol xato bo'lsa — \"Parol xato\". Login bo'sh bo'lsa — \"Login kiritilmadi\". Qo'shimcha: parol uzunligi len(parol) 8 dan kam bo'lsa, \"Parol juda qisqa\" deb ogohlantiring." }
      ]
    },

    // ===================== 4-DARS =====================
    {
      id: "m2-l4",
      title: "Shartlar amaliyoti va debug",
      duration: 90,
      goals: [
        "Ternary ifoda (a if shart else b) yozish",
        "match-case bilan tanishish",
        "Xato xabarlarini o'qish va tushunish",
        "print yordamida xatoni topish (debug)",
        "Amaliy masalalar: uchburchak turi, bankomat, chipta narxi"
      ],
      keywords: ["ternary", "match", "case", "debug", "Traceback", "SyntaxError", "TypeError"],
      plan: [
        { time: 5, label: "Takrorlash: and, or, not" },
        { time: 15, label: "Ternary ifoda va match-case" },
        { time: 20, label: "Xato xabarlarini o'qish va print bilan debug" },
        { time: 20, label: "Amaliy masalalar: uchburchak, bankomat" },
        { time: 25, label: "Mustaqil mashqlar" },
        { time: 5, label: "Xulosa, loyiha topshirig'i" }
      ],
      slides: [
        {
          type: "title",
          title: "Shartlar amaliyoti va debug",
          subtitle: "Yangi qurollar + xatolarni topish san'ati",
          emoji: "🛠️",
          notes: "Bugungi dars — modulning yakuniy darsi. Oxirida loyiha (Viktorina) topshirig'i beriladi deb ogohlantiring — motivatsiya uchun."
        },
        {
          type: "text",
          title: "Bugungi reja",
          body: "Shartlarni yozishni bilamiz. Endi ularni **qisqaroq**, **chiroyliroq** yozishni va **xatolarni tez topishni** o'rganamiz.",
          points: [
            "Ternary ifoda — if/else ni bitta qatorda yozish",
            "match-case — bitta o'zgaruvchini ko'p qiymatlar bilan solishtirish",
            "Xato xabarlarini o'qish — Python bizga nima demoqchi?",
            "Debug — print yordamida xatoni ovlash",
            "Ko'p amaliyot!"
          ],
          notes: "1-2 daqiqa. Tezda o'ting."
        },
        {
          type: "code",
          title: "Ternary ifoda: if/else bitta qatorda",
          code: `yosh = 16
holat = "katta" if yosh >= 18 else "kichik"
print("Siz", holat, "yoshdasiz")

son = 7
print("juft" if son % 2 == 0 else "toq")

ball = 75
natija = "o'tdi" if ball >= 60 else "yiqildi"
print(f"Ball: {ball} — {natija}")`,
          explain: [
            "Formula: `QIYMAT1 if SHART else QIYMAT2`",
            "Shart True bo'lsa — QIYMAT1, False bo'lsa — QIYMAT2 olinadi",
            "Natijani o'zgaruvchiga saqlash yoki to'g'ridan-to'g'ri print qilish mumkin",
            "Faqat **ikki** variantli oddiy tanlov uchun ishlating"
          ],
          output: `Siz kichik yoshdasiz
toq
Ball: 75 — o'tdi`,
          notes: "Ternary'ni o'zbekcha o'qing: \"holat = katta, agar yosh 18 dan katta bo'lsa, aks holda kichik\"."
        },
        {
          type: "compare",
          title: "Bir xil natija — ikki usul",
          left: {
            label: "Oddiy if/else (4 qator)",
            code: `harorat = 28
if harorat > 25:
    kiyim = "futbolka"
else:
    kiyim = "kurtka"
print(kiyim)`
          },
          right: {
            label: "Ternary (1 qator)",
            code: `harorat = 28
kiyim = "futbolka" if harorat > 25 else "kurtka"
print(kiyim)`
          },
          notes: "Ikkalasi ham to'g'ri. So'rang: \"Qachon qaysi biri yaxshiroq?\" Javob: oddiy tanlov — ternary; murakkab mantiq yoki ko'p qator — oddiy if/else."
        },
        {
          type: "text",
          title: "match-case — tanlov menyusi",
          body: "Bitta o'zgaruvchini **ko'p aniq qiymatlar** bilan solishtirish kerak bo'lsa, uzun `elif` zanjiri o'rniga `match-case` ishlatish mumkin (Python 3.10+).",
          points: [
            "`match o'zgaruvchi:` — nimani tekshiramiz",
            "`case qiymat:` — agar shu qiymatga teng bo'lsa",
            "`case 6 | 7:` — bir nechta qiymat (\"yoki\")",
            "`case _:` — boshqa barcha holatlar (else ga o'xshash)",
            "Faqat bitta mos `case` bajariladi"
          ],
          notes: "match-case ni chuqur o'rganmaymiz — faqat tanishuv. Asosiy vosita baribir if/elif/else ekanini ayting."
        },
        {
          type: "code",
          title: "match-case misoli",
          code: `kun = 3
match kun:
    case 1:
        print("Dushanba")
    case 2:
        print("Seshanba")
    case 3:
        print("Chorshanba")
    case 6 | 7:
        print("Dam olish kuni 😎")
    case _:
        print("Boshqa ish kuni")`,
          explain: [
            "`kun` qiymati 3 → `case 3:` bloki bajariladi",
            "`case 6 | 7:` — 6 yoki 7 bo'lsa",
            "`case _:` — hech qaysi case mos kelmasa (4, 5 va boshqalar)",
            "`case` ichida `>` yoki `<` kabi taqqoslash yozilmaydi — oraliqlar uchun if/elif ishlating"
          ],
          output: `Chorshanba`,
          notes: "kun = 7 va kun = 10 bilan sinab ko'ring. Oxirgi punkt — muhim cheklov."
        },
        {
          type: "analogy",
          title: "Debug — shifokor kabi ishlash",
          emoji: "🩺",
          text: "Shifokor oldiga borsangiz, u darhol dori bermaydi. Avval **belgilarni so'raydi** (qayeri og'riyapti?), keyin **tekshiradi** (harorat, tahlil), so'ng **tashxis qo'yadi**. Dasturchi ham xuddi shunday: xato xabari — bu belgilar, `print()` — bu tahlil, xatoni topish — tashxis. \"Bug\" so'zi inglizcha \"qo'ng'iz\": 1947-yilda kompyuter ichidan haqiqiy kuya topilgan va shundan beri xatolarni \"bug\" deyishadi!",
          notes: "Kuya tarixini qiziqarli qilib aytib bering (Grace Hopper jamoasi). Ta'kidlang: xato qilish — normal, hatto professional dasturchilar ham har kuni xato qiladi."
        },
        {
          type: "text",
          title: "Xato xabarini qanday o'qiymiz?",
          body: "Python xato bersa, **Traceback** chiqaradi. Uni **pastdan yuqoriga** o'qing:",
          points: [
            "Oxirgi qator — **xato turi** va qisqa tavsifi (eng muhim!)",
            "`line 3` — xato qaysi qatorda ekanini ko'rsatadi",
            "`SyntaxError` — yozuvda xato (ikki nuqta, qavs, qo'shtirnoq, `=` va `==`)",
            "`IndentationError` — chekinish xatosi",
            "`NameError` — o'zgaruvchi nomi xato yozilgan yoki yaratilmagan",
            "`TypeError` — mos kelmaydigan turlar (masalan, matnni son bilan taqqoslash)",
            "`ValueError` — `int(\"salom\")` kabi noto'g'ri qiymat"
          ],
          notes: "Ataylab xato kod yozib, sinf bilan birga Traceback'ni o'qing. Har bir xato turini bittadan ko'rsating (3-4 daqiqa)."
        },
        {
          type: "compare",
          title: "TypeError: input() doim matn qaytaradi",
          left: {
            label: "❌ TypeError",
            code: `yosh = input("Yoshingiz: ")
if yosh >= 18:
    print("Kattasiz")
# TypeError: '>=' not supported
# between instances of 'str' and 'int'`
          },
          right: {
            label: "✅ To'g'ri",
            code: `yosh = int(input("Yoshingiz: "))
if yosh >= 18:
    print("Kattasiz")`
          },
          good: "right",
          notes: "Bu modulning eng ko'p uchraydigan xatosi. Xato xabarini so'zma-so'z tarjima qiling: \"'str' va 'int' orasida '>=' qo'llab-quvvatlanmaydi\"."
        },
        {
          type: "code",
          title: "print() bilan debug qilish",
          code: `narx = 12000
soni = 3
chegirma = 10
jami = narx * soni
print("DEBUG: jami =", jami)
if jami > 30000:
    jami = jami - jami * chegirma / 100
    print("DEBUG: chegirma qo'llandi")
print("To'lov:", jami, "so'm")`,
          explain: [
            "Dastur noto'g'ri natija bersa — muhim joylarga `print` qo'ying",
            "\"DEBUG:\" so'zi bu vaqtinchalik xabar ekanini bildiradi",
            "Shu tarzda qaysi shart ishlagani va o'zgaruvchi qiymatini ko'rasiz",
            "Xato topilgach, DEBUG qatorlarini o'chirib tashlang"
          ],
          output: `DEBUG: jami = 36000
DEBUG: chegirma qo'llandi
To'lov: 32400.0 so'm`,
          notes: "So'rang: \"Nega 32400 emas, 32400.0 chiqdi?\" — chunki `/` doim float qaytaradi. Debug print'lar shunday kutilmagan narsalarni ham ko'rsatadi."
        },
        {
          type: "quiz",
          question: "Bu kod qanday xato beradi?",
          code: `ball = 80
if ball > 50
    print("Yaxshi")`,
          options: ["NameError", "TypeError", "IndentationError", "SyntaxError"],
          answer: 3,
          explain: "`if ball > 50` qatorining oxirida ikki nuqta (:) yo'q — bu yozuv (sintaksis) xatosi: SyntaxError.",
          notes: "Tez savol. Keyin so'rang: \"Agar `print` ni chekinishsiz yozsak qaysi xato bo'lardi?\" — IndentationError."
        },
        {
          type: "code",
          title: "Masala: uchburchak turi",
          code: `a = 5
b = 5
c = 8
if a + b <= c or a + c <= b or b + c <= a:
    print("Bunday uchburchak mavjud emas")
elif a == b == c:
    print("Teng tomonli uchburchak")
elif a == b or b == c or a == c:
    print("Teng yonli uchburchak")
else:
    print("Turli tomonli uchburchak")`,
          explain: [
            "Uchburchak qoidasi: ikki tomon yig'indisi uchinchisidan **katta** bo'lishi shart",
            "Avval mavjudligini tekshiramiz — aks holda qolgan tekshiruvlar ma'nosiz",
            "`a == b == c` — zanjir taqqoslash: uchalasi teng",
            "Tartib muhim: teng tomonli uchburchak ham teng yonli, shuning uchun u oldinroq"
          ],
          output: `Teng yonli uchburchak`,
          notes: "Qiymatlarni o'zgartiring: (3,3,3), (3,4,5), (1,2,10). Har safar sinf natijani oldindan aytsin."
        },
        {
          type: "code",
          title: "Masala: oddiy bankomat",
          code: `balans = 500000
summa = 120000
if summa <= 0:
    print("Noto'g'ri summa")
elif summa % 10000 != 0:
    print("Summa 10 000 ga karrali bo'lishi kerak")
elif summa > balans:
    print("Hisobingizda mablag' yetarli emas")
else:
    balans = balans - summa
    print(f"{summa} so'm berildi. Qoldiq: {balans} so'm")`,
          explain: [
            "Bankomat avval **xatolarni** tekshiradi, keyin pul beradi",
            "`summa % 10000 != 0` — bankomatda mayda pul yo'q",
            "Barcha tekshiruvlardan o'tsa — balans kamayadi",
            "Bu \"himoya shartlari\" usuli: avval yomon holatlar, oxirida asosiy ish"
          ],
          output: `120000 so'm berildi. Qoldiq: 380000 so'm`,
          notes: "summa = 15000, 700000, -5 bilan sinab ko'ring. So'rang: \"Yana qanday tekshiruv qo'shish mumkin?\" (masalan, kunlik limit)."
        },
        {
          type: "quiz",
          question: "Bu kod nima chiqaradi?",
          code: `x = 0
print("bor" if x else "yo'q")`,
          options: ["yo'q", "bor", "0", "Xato beradi"],
          answer: 0,
          explain: "0 — falsy qiymat, shuning uchun shart False hisoblanadi va \"yo'q\" tanlanadi. Bu savol ternary va truthy/falsy ni birlashtiradi.",
          notes: "O'tgan darsdagi truthy/falsy mavzusini eslatish uchun yaxshi imkoniyat."
        },
        {
          type: "task",
          title: "Mashq 1: Chipta narxi yoshga qarab",
          task: "Hayvonot bog'i chiptasi: 7 yoshgacha — bepul, 7-17 yosh — 15 000 so'm, 18-59 yosh — 30 000 so'm, 60 va undan katta — 10 000 so'm. Yosh va kun (\"shanba\", \"yakshanba\" yoki boshqa) so'rang. Dam olish kunlari narx 5 000 so'mga qimmatroq (bepul chiptadan tashqari).",
          starter: `yosh = int(input("Yosh: "))
kun = input("Hafta kuni: ")
`,
          hint: "Avval if/elif bilan asosiy narxni toping. Keyin alohida `if narx > 0 and (kun == \"shanba\" or kun == \"yakshanba\"):` bilan 5000 qo'shing.",
          solution: `yosh = int(input("Yosh: "))
kun = input("Hafta kuni: ")
if yosh < 7:
    narx = 0
elif yosh < 18:
    narx = 15000
elif yosh < 60:
    narx = 30000
else:
    narx = 10000
if narx > 0 and (kun == "shanba" or kun == "yakshanba"):
    narx = narx + 5000
print("Bepul!" if narx == 0 else f"Narx: {narx} so'm")`,
          notes: "10 daqiqa. E'tibor: ikkinchi shart alohida `if` — chunki u birinchi zanjirdan mustaqil. Qavs qo'yishni unutganlarni tekshiring."
        },
        {
          type: "task",
          title: "Mashq 2: Xatoni toping (debug)",
          task: "Quyidagi kodda 4 ta xato bor. Ularni toping va tuzating. Dastur ikki son va amal (+, -, *, /) so'rab, natijani chiqarishi kerak. Nolga bo'lishda \"Nolga bo'lib bo'lmaydi!\" deyishi kerak.",
          starter: `a = input("1-son: ")
b = float(input("2-son: "))
amal = input("Amal: ")
if amal = "+":
    print(a + b)
elif amal == "-":
    print(a - b)
elif amal == "*"
    print(a * b)
elif amal == "/":
    if b == 0:
    print("Nolga bo'lib bo'lmaydi!")
    else:
        print(a / b)`,
          hint: "Tekshiring: 1) a qanday turda? 2) `if` dagi tenglik belgisi 3) qaysi qatorda ikki nuqta yo'q? 4) ichki `if` ostidagi chekinish.",
          solution: `a = float(input("1-son: "))
b = float(input("2-son: "))
amal = input("Amal: ")
if amal == "+":
    print(a + b)
elif amal == "-":
    print(a - b)
elif amal == "*":
    print(a * b)
elif amal == "/":
    if b == 0:
        print("Nolga bo'lib bo'lmaydi!")
    else:
        print(a / b)
else:
    print("Noma'lum amal")`,
          notes: "Juftlikda ishlash: bir o'quvchi xatoni topadi, ikkinchisi Traceback'ni o'qib tushuntiradi. Yechimda qo'shimcha `else` ham bor — buni bonus sifatida ko'rsating."
        },
        {
          type: "task",
          title: "Mashq 3: Telegram bot menyusi (match-case)",
          task: "Oddiy bot menyusini yozing: foydalanuvchi buyruq kiritadi. \"/start\" → \"Salom! Men yordamchi botman 🤖\", \"/help\" → \"Buyruqlar: /start, /help, /about\", \"/about\" → \"Men Python'da yozilganman\". Boshqa har qanday buyruq → \"Noma'lum buyruq\". match-case ishlating.",
          starter: `buyruq = input("Buyruq: ")
match buyruq:
    # shu yerga case'larni yozing
`,
          hint: "Har bir buyruq uchun `case \"/start\":` ko'rinishida yozing. Oxirida `case _:` qo'shing.",
          solution: `buyruq = input("Buyruq: ")
match buyruq:
    case "/start":
        print("Salom! Men yordamchi botman 🤖")
    case "/help":
        print("Buyruqlar: /start, /help, /about")
    case "/about":
        print("Men Python'da yozilganman")
    case _:
        print("Noma'lum buyruq")`,
          notes: "Tez tugatganlar uchun. Telegram botlar haqiqatan ham Python'da shunday mantiq bilan yoziladi — keyingi oylarda bunga qaytamiz deb qiziqtiring."
        },
        {
          type: "summary",
          title: "Modul yakuni: shartlar ustasi bo'ldingiz! 🎓",
          points: [
            "Ternary: `a if shart else b` — oddiy tanlov uchun bitta qator",
            "match-case: bitta qiymatni ko'p aniq variantlar bilan solishtirish, `case _:` — qolganlari",
            "Traceback'ni pastdan o'qing: xato turi + qator raqami",
            "SyntaxError, IndentationError, NameError, TypeError, ValueError — asosiy xato turlari",
            "Debug: shubhali joyga `print(\"DEBUG:\", ...)` qo'ying",
            "Himoya shartlari: avval xato holatlarni tekshiring, keyin asosiy ishni bajaring"
          ],
          notes: "Loyiha (Viktorina o'yini) topshirig'ini tushuntiring va modul testini e'lon qiling. Namuna kodni to'liq ko'rsatmang — faqat tuzilmasini."
        }
      ],
      homework: [
        { level: "oson", task: "Son so'rang va ternary ifoda yordamida \"musbat\" yoki \"musbat emas\" deb chiqaring. Keyin yana bitta ternary bilan sonning juft/toqligini chiqaring." },
        { level: "o'rta", task: "Oy raqamini (1-12) so'rang va match-case yordamida fasl nomini chiqaring: 12 | 1 | 2 → Qish, 3 | 4 | 5 → Bahor, 6 | 7 | 8 → Yoz, 9 | 10 | 11 → Kuz, boshqa → \"Bunday oy yo'q\"." },
        { level: "qiyin", task: "Kengaytirilgan bankomat: balans 1 000 000 so'm. PIN-kod (\"1234\"), keyin amal (\"1\" — balansni ko'rish, \"2\" — pul yechish, \"3\" — pul qo'yish) so'rang. Pul yechishda: summa musbat, 10 000 ga karrali, balansdan oshmasligi va bir martada 2 000 000 dan oshmasligi kerak. Har bir xato holat uchun alohida xabar chiqaring. PIN xato bo'lsa — \"Karta bloklandi\"." }
      ]
    }
  ],

  project: {
    title: "Viktorina o'yini",
    description: "Kompyuter foydalanuvchiga savollar beradi, javoblarni tekshiradi, ball to'playdi va oxirida natijaga qarab baho beradi. Faqat shu modulda o'rganilgan narsalardan foydalaniladi: o'zgaruvchilar, input, if/elif/else, and/or/not. Tsikl, ro'yxat va funksiyalar ishlatilmaydi.",
    requirements: [
      "O'yin boshida o'yinchining ismini so'rash va salomlashish (ism bo'sh bo'lsa \"Mehmon\" deb nomlash)",
      "Kamida 5 ta savol: kamida 2 tasi matnli javob, kamida 2 tasi sonli javob (int() bilan)",
      "Har bir to'g'ri javob uchun ball o'zgaruvchisini oshirish va \"✅ To'g'ri!\" yoki \"❌ Xato! To'g'ri javob: ...\" deb chiqarish",
      "Matnli javoblarda katta-kichik harfni hisobga olmaslik (.lower() yoki or bilan bir nechta variant)",
      "Oxirida jami ball va foizni f-string bilan chiqarish (masalan: \"5 tadan 4 ta — 80%\")",
      "Natijaga qarab if/elif/else bilan yakuniy xabar: a'lo / yaxshi / o'rtacha / yana urinib ko'ring",
      "Kod izohlar bilan tartibli yozilgan bo'lsin"
    ],
    bonus: [
      "Murakkab savollar uchun 2 ball, oson savollar uchun 1 ball berish",
      "Boshida qiyinlik darajasini tanlash (match-case bilan) va shunga qarab boshqa savollar to'plami",
      "Ketma-ket 3 ta to'g'ri javob uchun qo'shimcha bonus ball (alohida o'zgaruvchi bilan)",
      "Yakuniy xabarni ternary ifoda bilan qisqartirish",
      "Emoji va chiroyli bezaklar (\"=\" * 30 kabi chiziqlar)"
    ],
    example: `# ===== VIKTORINA O'YINI =====
print("=" * 30)
print("   🧠 VIKTORINA O'YINI 🧠")
print("=" * 30)

ism = input("Ismingiz: ")
if not ism:
    ism = "Mehmon"
print(f"Salom, {ism}! Boshladik!")

ball = 0
jami = 5

# 1-savol (matnli)
javob = input("1) O'zbekiston poytaxti qaysi shahar? ")
if javob.lower() == "toshkent":
    print("✅ To'g'ri!")
    ball = ball + 1
else:
    print("❌ Xato! To'g'ri javob: Toshkent")

# 2-savol (sonli)
javob = int(input("2) 7 * 8 nechaga teng? "))
if javob == 56:
    print("✅ To'g'ri!")
    ball = ball + 1
else:
    print("❌ Xato! To'g'ri javob: 56")

# 3-savol (matnli, bir nechta variant)
javob = input("3) Python'da 'teng' operatori qanday yoziladi? ").strip()
if javob == "==":
    print("✅ To'g'ri!")
    ball = ball + 1
else:
    print("❌ Xato! To'g'ri javob: ==")

# 4-savol (sonli)
javob = int(input("4) Bir yilda necha oy bor? "))
if javob == 12:
    print("✅ To'g'ri!")
    ball = ball + 1
else:
    print("❌ Xato! To'g'ri javob: 12")

# 5-savol (ha/yo'q)
javob = input("5) 2024-yil kabisa yilimi? (ha/yo'q) ").lower()
if javob == "ha" or javob == "xa":
    print("✅ To'g'ri!")
    ball = ball + 1
else:
    print("❌ Xato! To'g'ri javob: ha")

# ===== NATIJA =====
foiz = round(ball / jami * 100)
print("=" * 30)
print(f"{ism}, natijangiz: {jami} tadan {ball} ta — {foiz}%")
if foiz >= 90:
    print("🏆 A'lo! Siz haqiqiy bilimdonsiz!")
elif foiz >= 70:
    print("👍 Yaxshi! Yana ozgina harakat!")
elif foiz >= 50:
    print("🙂 O'rtacha. Takrorlash kerak.")
else:
    print("📚 Yana urinib ko'ring!")`
  },

  test: [
    {
      q: "Bu kod nima chiqaradi?",
      code: `print(10 != 10)`,
      options: ["True", "False", "10", "Xato beradi"],
      answer: 1
    },
    {
      q: "Qaysi qator to'g'ri yozilgan?",
      options: ["if x = 5:", "if x == 5", "if x == 5:", "if (x == 5) then:"],
      answer: 2
    },
    {
      q: "Bu kod nima chiqaradi?",
      code: `ball = 70
if ball >= 86:
    print("5")
elif ball >= 71:
    print("4")
elif ball >= 56:
    print("3")
else:
    print("2")`,
      options: ["4", "3", "2", "Hech narsa"],
      answer: 1
    },
    {
      q: "`True and False or True` ifodasining natijasi qanday?",
      options: ["True", "False", "None", "Xato beradi"],
      answer: 0
    },
    {
      q: "Quyidagilardan qaysi biri falsy qiymat?",
      options: ["\"0\"", "-1", "\" \"", "0"],
      answer: 3
    },
    {
      q: "Bu kod nima chiqaradi?",
      code: `kun = "dushanba"
if kun == "shanba" or "yakshanba":
    print("Dam")
else:
    print("Ish")`,
      options: ["Ish", "Xato beradi", "Hech narsa", "Dam"],
      answer: 3
    },
    {
      q: "Son juft ekanini qaysi shart to'g'ri tekshiradi?",
      options: ["son / 2 == 0", "son % 2 == 0", "son // 2 == 0", "son % 2 == 1"],
      answer: 1
    },
    {
      q: "Bu kod nima chiqaradi?",
      code: `x = 15
natija = "katta" if x > 20 else "kichik"
print(natija)`,
      options: ["katta", "15", "kichik", "True"],
      answer: 2
    },
    {
      q: "Bu kod qanday xato beradi?",
      code: `yosh = input("Yosh: ")
if yosh > 18:
    print("Katta")`,
      options: ["SyntaxError", "IndentationError", "NameError", "TypeError"],
      answer: 3
    },
    {
      q: "match-case da \"boshqa barcha holatlar\" qanday yoziladi?",
      options: ["case _:", "case else:", "default:", "else:"],
      answer: 0
    }
  ]
});
