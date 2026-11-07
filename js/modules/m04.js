window.COURSE_MODULES = window.COURSE_MODULES || [];
COURSE_MODULES.push({
  id: 4,
  month: 2,
  weeks: "7-8 hafta",
  title: "Satrlar va ro'yxatlar",
  icon: "📝",
  description: "Matn (satr) bilan chuqur ishlashni va ma'lumotlarni ro'yxatlarda saqlashni o'rganamiz. Indeks, kesish, satr metodlari, ro'yxat amallari va ro'yxatlar ustida oddiy algoritmlar — haqiqiy dasturlarning asosi.",
  outcomes: [
    "Satrdagi istalgan belgini indeks va manfiy indeks orqali ola biladi",
    "Kesish ([a:b:qadam]) yordamida satr va ro'yxat bo'laklarini ajrata oladi",
    "Satr metodlari (upper, strip, replace, split, join va boshqalar) bilan matnni qayta ishlay oladi",
    "Ro'yxat yaratadi, unga element qo'shadi, o'zgartiradi va o'chiradi",
    "Ro'yxatdan yig'indi, o'rtacha, eng katta/kichik qiymatni topadi, qidiradi va filtrlaydi",
    "Ro'yxatlar va satr metodlari yordamida menyuli To-Do dasturi yozadi"
  ],
  lessons: [
    // ===================== 1-DARS =====================
    {
      id: "m4-l1",
      title: "Satrlar chuqurroq",
      duration: 90,
      goals: [
        "Satr — belgilar ketma-ketligi ekanini tushunish",
        "Musbat va manfiy indeks bilan belgilarni olish",
        "Kesish [a:b:qadam] va satrni teskari aylantirish",
        "len(), in operatori va satrning o'zgarmasligini bilish",
        "Satr belgilari bo'yicha for sikli va palindrom tekshiruvi"
      ],
      keywords: ["indeks", "manfiy indeks", "kesish (slicing)", "len", "in", "o'zgarmas (immutable)", "palindrom"],
      plan: [
        { time: 10, label: "Takrorlash: for sikli va f-satrlar" },
        { time: 20, label: "Indeks va manfiy indeks" },
        { time: 20, label: "Kesish, qadam va teskari satr" },
        { time: 15, label: "in operatori, o'zgarmaslik, belgilar bo'yicha sikl" },
        { time: 20, label: "Amaliy mashqlar: palindrom va harf sanash" },
        { time: 5, label: "Xulosa va uyga vazifa" }
      ],
      slides: [
        {
          type: "title",
          title: "Satrlar chuqurroq",
          subtitle: "Matnni harfma-harf bo'laklaymiz: indeks, kesish va palindromlar",
          emoji: "🔤",
          notes: "Darsni savol bilan boshlang: \"Telefoningiz parolni qanday qilib harfma-harf tekshiradi?\" Bugun satr ichiga kirib, har bir belgiga alohida murojaat qilishni o'rganamiz."
        },
        {
          type: "text",
          title: "Satr — bu belgilar qatori",
          body: "Biz `\"Salom\"` kabi satrlarni ko'p ishlatdik. Endi uning ichiga qaraymiz: satr — bu **belgilar ketma-ketligi**. Har bir belgining o'z **tartib raqami (indeksi)** bor.",
          points: [
            "Indeks **0 dan** boshlanadi, 1 dan emas!",
            "`\"PYTHON\"` so'zida: P=0, Y=1, T=2, H=3, O=4, N=5",
            "Bo'sh joy (probel), raqam, belgi — hammasi ham alohida belgi hisoblanadi",
            "Belgini olish: `satr[indeks]` — kvadrat qavs ichida raqam"
          ],
          notes: "Doskaga PYTHON so'zini katta harflarda yozing va har harf ostiga 0 dan 5 gacha raqam qo'ying. O'quvchilardan so'rang: \"Nega 0 dan?\" — kompyuter \"boshidan necha qadam\" deb sanaydi."
        },
        {
          type: "analogy",
          title: "Poyezd vagonlari",
          emoji: "🚆",
          text: "Toshkent–Samarqand \"Afrosiyob\" poyezdini tasavvur qiling. Satr — bu poyezd, har bir harf — bitta vagon. Lokomotivdan keyingi birinchi vagon **0-raqamli**, chunki u lokomotivdan 0 qadam uzoqda. Vagon raqamini bilsangiz, uni darhol topasiz — xuddi `satr[3]` kabi. Oxiridan sanash esa `-1` (eng oxirgi vagon), `-2` (oxiridan ikkinchi) va hokazo.",
          notes: "Bir nechta o'quvchini doskaga chiqarib qatorga tizing, har biri bitta harf. \"0-o'quvchi kim? -1-o'quvchi kim?\" deb so'rang — bu ko'rgazmali usul juda yaxshi ishlaydi."
        },
        {
          type: "code",
          title: "Indeks bilan belgini olish",
          code: `soz = "PYTHON"
print(soz[0])
print(soz[3])
print(soz[5])
print("Uzunligi:", len(soz))

ism = "Aziza"
print(f"Birinchi harf: {ism[0]}")`,
          explain: [
            "`soz[0]` — birinchi belgi, chunki sanoq 0 dan",
            "`soz[5]` — oxirgi belgi; 6 harfli so'zda oxirgi indeks 5",
            "`len(soz)` — satrdagi belgilar soni (uzunlik)",
            "f-satr ichida ham indeksdan foydalanish mumkin"
          ],
          output: `P
H
N
Uzunligi: 6
Birinchi harf: A`,
          notes: "Ishga tushirishdan oldin sinfdan natijani taxmin qilishni so'rang. Qoida: oxirgi indeks doim len(satr) - 1 ga teng — buni alohida ta'kidlang."
        },
        {
          type: "code",
          title: "Manfiy indeks — oxiridan sanash",
          code: `shahar = "Toshkent"
print(shahar[-1])
print(shahar[-2])
print(shahar[-8])

# Oxirgi harfni ikki usulda olish
print(shahar[len(shahar) - 1])
print(shahar[-1])`,
          explain: [
            "`-1` — har doim oxirgi belgi, so'z uzunligi qanday bo'lmasin",
            "`-2` — oxiridan ikkinchi belgi",
            "`shahar[-8]` — 8 harfli so'zda bu birinchi harf",
            "`shahar[-1]` yozish `shahar[len(shahar) - 1]` dan ancha qulay"
          ],
          output: `t
n
T
t
t`,
          notes: "Manfiy indeksni \"orqadan sanash\" deb tushuntiring. Savol: \"Toshkent[-8] va Toshkent[0] bir xilmi?\" — ha, ikkalasi ham T."
        },
        {
          type: "compare",
          title: "Ko'p uchraydigan xato: chegaradan chiqish",
          left: {
            label: "❌ Xato: IndexError",
            code: `soz = "olma"
# 4 harf: indekslar 0, 1, 2, 3
print(soz[4])
# IndexError: string index out of range`
          },
          right: {
            label: "✅ To'g'ri",
            code: `soz = "olma"
print(soz[3])            # a
print(soz[len(soz) - 1]) # a
print(soz[-1])           # a`
          },
          good: "right",
          notes: "Bu xatoni ataylab ishga tushirib ko'rsating va xato matnini birga o'qing: \"index out of range\" — \"indeks chegaradan tashqarida\". O'quvchilar xato xabarlarini o'qishdan qo'rqmasligi kerak."
        },
        {
          type: "quiz",
          question: "Bu kod nimani chiqaradi?",
          code: `s = "Futbol"
print(s[2] + s[-1])`,
          options: ["tl", "ul", "tb", "Fl"],
          answer: 0,
          explain: "`s[2]` — F(0), u(1), **t(2)**. `s[-1]` — oxirgi harf **l**. Ikki satr qo'shilsa: `\"tl\"`.",
          notes: "Qo'l ko'tarib ovoz berish usulini qo'llang. Ko'pchilik \"ul\" deb javob beradi — chunki 1 dan sanashadi. Shu xatoni muhokama qiling."
        },
        {
          type: "code",
          title: "Kesish (slicing): satr[boshi:oxiri]",
          code: `soz = "Samarqand"
print(soz[0:5])
print(soz[5:9])
print(soz[:3])
print(soz[3:])
print(soz[-4:])
print(soz[:])`,
          explain: [
            "`soz[a:b]` — a-indeksdan **b gacha** (b o'zi kirmaydi!)",
            "`soz[:3]` — boshi yozilmasa, 0 dan boshlanadi",
            "`soz[3:]` — oxiri yozilmasa, satr oxirigacha boradi",
            "`soz[-4:]` — oxirgi 4 ta belgi",
            "`soz[:]` — butun satrning nusxasi"
          ],
          output: `Samar
qand
Sam
arqand
qand
Samarqand`,
          notes: "Eng muhim qoida: oxirgi indeks KIRMAYDI, xuddi range(a, b) dagidek. range bilan bog'lang — o'quvchilar buni allaqachon bilishadi."
        },
        {
          type: "code",
          title: "Qadam bilan kesish va teskari satr",
          code: `harflar = "ABCDEFGHIJ"
print(harflar[0:10:2])
print(harflar[1::2])
print(harflar[::3])

# Qadam manfiy bo'lsa — orqaga yuradi
print(harflar[::-1])

ism = "Bobur"
print(ism[::-1])`,
          explain: [
            "Uchinchi son — **qadam**: `[boshi:oxiri:qadam]`",
            "`[::2]` — har ikkinchi belgi (0, 2, 4, ...)",
            "`[1::2]` — 1 dan boshlab har ikkinchi (1, 3, 5, ...)",
            "`[::-1]` — satrni **teskari** aylantirishning eng qisqa usuli"
          ],
          output: `ACEGI
BDFHJ
ADGJ
JIHGFEDCBA
ruboB`,
          notes: "Sinfdan o'z ismlarini teskari yozishni so'rang (avval daftarda, keyin kodda). [::-1] — juda mashhur Python \"hiylasi\", uni yodda saqlashlarini ayting."
        },
        {
          type: "quiz",
          question: "Natija qanday bo'ladi?",
          code: `s = "Telegram"
print(s[2:6])`,
          options: ["eleg", "legr", "legra", "egra"],
          answer: 1,
          explain: "T(0) e(1) **l(2) e(3) g(4) r(5)** a(6) m(7). 2 dan 6 gacha, 6 kirmaydi: `\"legr\"`.",
          notes: "O'quvchilar \"legra\" deyishi mumkin — oxirgi indeks kirmasligini yana bir bor eslating. Indekslarni doskaga yozib ko'rsating."
        },
        {
          type: "code",
          title: "in operatori — satr ichida bormi?",
          code: `xabar = "Bugun futbol o'yini bor"
print("futbol" in xabar)
print("basketbol" in xabar)
print("F" in xabar)
print("x" not in xabar)

if "o'yin" in xabar:
    print("Xabarda o'yin haqida gap bor!")`,
          explain: [
            "`a in b` — a satri b ichida bormi? Natija: `True` yoki `False`",
            "Katta-kichik harf farqlanadi: `\"F\"` va `\"f\"` har xil",
            "`not in` — yo'qligini tekshiradi",
            "`in` ni `if` bilan birga ishlatish juda qulay"
          ],
          output: `True
False
False
True
Xabarda o'yin haqida gap bor!`,
          notes: "Hayotiy misol: Telegram'da kalit so'z bo'yicha qidiruv yoki spam filtr shu tamoyilda ishlaydi. Savol: \"F in xabar nega False?\""
        },
        {
          type: "compare",
          title: "Satr o'zgarmas (immutable)!",
          left: {
            label: "❌ Xato: TypeError",
            code: `ism = "Jasur"
ism[0] = "N"
# TypeError: 'str' object does
# not support item assignment`
          },
          right: {
            label: "✅ To'g'ri: yangi satr yasash",
            code: `ism = "Jasur"
ism = "N" + ism[1:]
print(ism)   # Nasur`
          },
          good: "right",
          notes: "Satrni o'zgartirib bo'lmaydi, faqat yangisini yasash mumkin. O'xshatish: tosh ustiga o'yilgan yozuv — uni o'chirolmaysiz, yangi tosh kerak. Keyingi darslarda ro'yxat bunga qarama-qarshi ekanini ko'ramiz."
        },
        {
          type: "code",
          title: "Satr belgilari bo'yicha for sikli",
          code: `soz = "kitob"
for harf in soz:
    print(harf)

# Indeks bilan birga
for i in range(len(soz)):
    print(i, "->", soz[i])`,
          explain: [
            "`for harf in soz` — har aylanishda `harf` navbatdagi belgini oladi",
            "`range(len(soz))` — 0 dan 4 gacha indekslar",
            "Indeks kerak bo'lsa — ikkinchi usul, faqat belgi kerak bo'lsa — birinchisi"
          ],
          output: `k
i
t
o
b
0 -> k
1 -> i
2 -> t
3 -> o
4 -> b`,
          notes: "Ikki usulni solishtiring. Savol: \"Qachon indeks kerak bo'ladi?\" — masalan, qo'shni harflarni solishtirganda yoki joyini bilish kerak bo'lganda."
        },
        {
          type: "code",
          title: "Harflarni sanash va teskari yig'ish",
          code: `soz = "assalomu alaykum"
soni = 0
for h in soz:
    if h == "a":
        soni += 1
print("a harfi soni:", soni)

teskari = ""
for h in "salom":
    teskari = h + teskari
print(teskari)`,
          explain: [
            "Hisoblagich (`soni`) 0 dan boshlanadi va har mos kelganda 1 ga oshadi",
            "`teskari = h + teskari` — har yangi harf **oldiga** qo'shiladi",
            "Bu `[::-1]` ning qo'lda yozilgan varianti — algoritmni tushunish uchun foydali"
          ],
          output: `a harfi soni: 4
molas`,
          notes: "Ikkinchi sikl qanday ishlashini jadvalda ko'rsating: '' → 's' → 'as' → 'las' → 'olas' → 'molas'. Bu \"kuzatish jadvali\" usuli algoritmlarni tushunishda juda kuchli."
        },
        {
          type: "code",
          title: "Palindrom tekshiruvi",
          code: `soz = "kiyik"
if soz == soz[::-1]:
    print(soz, "— palindrom!")
else:
    print(soz, "— palindrom emas")

soz2 = "Anna"
kichik = soz2.lower()
print(kichik == kichik[::-1])`,
          explain: [
            "**Palindrom** — oldidan ham, orqasidan ham bir xil o'qiladigan so'z: kiyik, qozoq, 12321",
            "Tekshiruv: `soz == soz[::-1]` — so'z o'zining teskarisiga tengmi?",
            "`\"Anna\"` da `A` va `a` farq qiladi, shuning uchun avval `.lower()` bilan kichik harfga o'tkazamiz (keyingi darsda batafsil)"
          ],
          output: `kiyik — palindrom!
True`,
          notes: "Sinfdan o'zbekcha palindromlar topishni so'rang: kiyik, qozoq, otot... Raqamlar ham bo'lishi mumkin: 1221. .lower() ni qisqa tanishtiring, keyingi darsda chuqur o'rganamiz."
        },
        {
          type: "task",
          title: "Mashq 1: Ism tahlilchisi",
          task: "Foydalanuvchidan ism so'rang. Chiqaring: 1) ism uzunligi, 2) birinchi va oxirgi harf, 3) ismning teskarisi, 4) ismdagi 'a' harflari soni (for bilan).",
          starter: `ism = input("Ismingiz: ")
# 1) uzunlik
# 2) birinchi va oxirgi harf
# 3) teskarisi
# 4) 'a' harflari soni
`,
          hint: "Uzunlik — `len(ism)`, birinchi — `ism[0]`, oxirgi — `ism[-1]`, teskari — `ism[::-1]`. Sanash uchun `soni = 0` va `for h in ism:` dan foydalaning.",
          solution: `ism = input("Ismingiz: ")
print("Uzunligi:", len(ism))
print("Birinchi harf:", ism[0])
print("Oxirgi harf:", ism[-1])
print("Teskarisi:", ism[::-1])

soni = 0
for h in ism:
    if h == "a" or h == "A":
        soni += 1
print("'a' harflari soni:", soni)`,
          notes: "10 daqiqa bering. Tez tugatganlarga qo'shimcha: ismning o'rtadagi harfini chiqarish (ism[len(ism) // 2])."
        },
        {
          type: "task",
          title: "Mashq 2: Palindrom aniqlagich",
          task: "Foydalanuvchi so'z kiritadi. Dastur katta-kichik harfga qaramasdan uning palindrom ekanini aniqlasin. Bonus: so'z 'stop' bo'lmaguncha qayta-qayta so'rasin (while sikli).",
          starter: `soz = input("So'z kiriting: ")
# kichik harfga o'tkazing
# teskarisi bilan solishtiring
`,
          hint: "`soz = soz.lower()` qiling, keyin `if soz == soz[::-1]:`. Bonus uchun `while True:` va `if soz == \"stop\": break`.",
          solution: `while True:
    soz = input("So'z kiriting (chiqish: stop): ")
    soz = soz.lower()
    if soz == "stop":
        print("Xayr!")
        break
    if soz == soz[::-1]:
        print(soz, "— palindrom ✅")
    else:
        print(soz, "— palindrom emas ❌")`,
          notes: "Bonusdagi while True + break naqshini 3-moduldan eslating. Sinfda bir nechta so'zni birga sinab ko'ring: qozoq, Kiyik, python."
        },
        {
          type: "summary",
          title: "Bugun nimalarni o'rgandik?",
          points: [
            "Satr — belgilar ketma-ketligi, indeks **0 dan** boshlanadi",
            "`s[-1]` — oxirgi belgi, `s[-2]` — oxiridan ikkinchi",
            "`s[a:b]` — a dan b gacha (b kirmaydi), `s[a:b:qadam]`",
            "`s[::-1]` — teskari satr; palindrom: `s == s[::-1]`",
            "`len(s)` — uzunlik, `\"x\" in s` — bormi yoki yo'qmi",
            "Satr **o'zgarmas**: `s[0] = ...` xato beradi, yangi satr yasash kerak",
            "`for h in s:` — har bir belgi bo'yicha aylanish"
          ],
          notes: "Xulosani o'quvchilarning o'zi aytsin: har bir punktni bitta o'quvchidan so'rang. Uyga vazifani tushuntirib, keyingi darsda satr metodlarini o'rganishimizni e'lon qiling."
        }
      ],
      homework: [
        { level: "oson", task: "Foydalanuvchidan so'z so'rang va uning birinchi 3 harfi, oxirgi 3 harfi hamda teskarisini chiqaring." },
        { level: "o'rta", task: "Foydalanuvchi kiritgan gapdagi unli harflar (a, e, i, o, u) sonini for sikli va `in` operatori yordamida sanang. Maslahat: `if h in \"aeiou\":`." },
        { level: "qiyin", task: "Foydalanuvchi kiritgan so'zning faqat juft indeksdagi harflarini, keyin toq indeksdagi harflarini chiqaring (kesish bilan). So'ngra so'zni \"aylantiring\": birinchi yarmi va ikkinchi yarmining o'rnini almashtiring (masalan, 'kompyuter' → 'yuterkomp' yoki shunga o'xshash)." }
      ]
    },

    // ===================== 2-DARS =====================
    {
      id: "m4-l2",
      title: "Satr metodlari",
      duration: 90,
      goals: [
        "Metod nima ekanini va uni qanday chaqirishni tushunish",
        "Harflar registri: upper, lower, title, capitalize",
        "Tozalash va almashtirish: strip, replace; qidirish: find, count",
        "Tekshirish: startswith, endswith, isdigit, isalpha",
        "split va join, maxsus belgilar \\n va \\t",
        "Unli harflar va so'zlarni sanash, Sezar shifri g'oyasi"
      ],
      keywords: ["metod", "upper", "lower", "strip", "replace", "find", "count", "split", "join", "isdigit", "\\n"],
      plan: [
        { time: 10, label: "Takrorlash: indeks, kesish, palindrom" },
        { time: 20, label: "Registr va tozalash metodlari" },
        { time: 15, label: "Qidirish va tekshirish metodlari" },
        { time: 15, label: "split, join va maxsus belgilar" },
        { time: 25, label: "Amaliyot: so'z sanash, Sezar shifri, login tekshiruvi" },
        { time: 5, label: "Xulosa va uyga vazifa" }
      ],
      slides: [
        {
          type: "title",
          title: "Satr metodlari",
          subtitle: "Matnni tozalash, o'zgartirish, qidirish va bo'laklash",
          emoji: "🛠️",
          notes: "Takrorlash savoli bilan boshlang: \"'Python'[::-1] nima beradi?\", \"'olma'[1:3]?\" 2-3 daqiqa tezkor savol-javob qiling."
        },
        {
          type: "text",
          title: "Metod nima?",
          body: "**Metod** — bu satrga \"biriktirilgan\" tayyor buyruq. U nuqta orqali chaqiriladi: `satr.metod()`. Python'da satrlar uchun o'nlab metodlar bor.",
          points: [
            "Yozilishi: `ism.upper()` — avval o'zgaruvchi, keyin nuqta, metod nomi va qavslar",
            "Qavslar **majburiy**: `ism.upper` emas, `ism.upper()`",
            "Ba'zi metodlarga qiymat beriladi: `matn.replace(\"a\", \"o\")`",
            "Satr o'zgarmas, shuning uchun metodlar **yangi satr qaytaradi**, asl satr o'zgarmaydi"
          ],
          notes: "len(s) funksiya, s.upper() esa metod ekanini ko'rsating. Farqi: metod nuqta bilan aniq bir obyektga tegishli. Oxirgi punktni alohida ta'kidlang — bu keyinroq ko'p xatoga sabab bo'ladi."
        },
        {
          type: "analogy",
          title: "Instagram filtrlari",
          emoji: "📸",
          text: "Telefoningizda rasmga filtr qo'ysangiz, ilova sizga **yangi rasm** ko'rsatadi, galereyadagi asl rasm esa o'zgarmay qoladi. Uni saqlamoqchi bo'lsangiz, \"Saqlash\" tugmasini bosishingiz kerak. Satr metodlari ham xuddi shunday: `ism.upper()` yangi, katta harfli satr beradi, lekin `ism` o'zgarmaydi. Saqlash uchun: `ism = ism.upper()`.",
          notes: "Bu o'xshatishni dars davomida bir necha marta eslating, ayniqsa compare slaydida. \"Saqlash tugmasini bosdingizmi?\" iborasi o'quvchilarga yaxshi eslab qolinadi."
        },
        {
          type: "code",
          title: "Katta va kichik harflar",
          code: `matn = "salom, DUNYO! python zo'r"
print(matn.upper())
print(matn.lower())
print(matn.title())
print(matn.capitalize())
print(matn)`,
          explain: [
            "`upper()` — hammasi KATTA harf",
            "`lower()` — hammasi kichik harf",
            "`title()` — Har So'zning Birinchi Harfi Katta",
            "`capitalize()` — faqat butun matnning birinchi harfi katta, qolgani kichik",
            "Oxirgi qator: asl `matn` o'zgarmagan!"
          ],
          output: `SALOM, DUNYO! PYTHON ZO'R
salom, dunyo! python zo'r
Salom, Dunyo! Python Zo'R
Salom, dunyo! python zo'r
salom, DUNYO! python zo'r`,
          notes: "title() dagi \"Zo'R\" ga e'tibor qarating: apostrofdan keyin Python yangi so'z deb o'ylaydi. Bu o'zbek tilidagi qiziq holat — o'quvchilar bilan muhokama qiling."
        },
        {
          type: "code",
          title: "strip() — ortiqcha bo'sh joylarni olib tashlash",
          code: `login = "   ali_2010   "
print("[" + login + "]")
print("[" + login.strip() + "]")
print("[" + login.lstrip() + "]")
print("[" + login.rstrip() + "]")

javob = "  HA "
if javob.strip().lower() == "ha":
    print("Tasdiqlandi!")`,
          explain: [
            "`strip()` — ikki chetdagi bo'sh joylarni olib tashlaydi",
            "`lstrip()` — faqat chapdan, `rstrip()` — faqat o'ngdan",
            "Metodlarni zanjir qilib ulash mumkin: `javob.strip().lower()`",
            "Foydalanuvchi kiritgan ma'lumotni doim tozalash — yaxshi odat"
          ],
          output: `[   ali_2010   ]
[ali_2010]
[ali_2010   ]
[   ali_2010]
Tasdiqlandi!`,
          notes: "Savol: \"Nega login kiritishda bo'sh joy muammo bo'ladi?\" — foydalanuvchi tasodifan probel bossa, parol to'g'ri bo'lsa ham kirolmaydi. Zanjir chaqiruvni chapdan o'ngga o'qishni o'rgating."
        },
        {
          type: "compare",
          title: "Eng ko'p uchraydigan xato: natijani saqlamaslik",
          left: {
            label: "❌ Natija yo'qolib ketdi",
            code: `ism = "dilnoza"
ism.capitalize()
print(ism)
# dilnoza  (o'zgarmadi!)`
          },
          right: {
            label: "✅ Natija saqlandi",
            code: `ism = "dilnoza"
ism = ism.capitalize()
print(ism)
# Dilnoza`
          },
          good: "right",
          notes: "Instagram o'xshatishini eslating: \"Saqlash tugmasi qayerda?\" — bu `ism = ...` qismi. Har yili o'quvchilarning yarmi shu xatoni qiladi."
        },
        {
          type: "code",
          title: "replace, find, count — almashtirish va qidirish",
          code: `gap = "men olma yedim, olma shirin"
print(gap.replace("olma", "nok"))
print(gap.replace(" ", "_"))
print(gap.count("olma"))
print(gap.count("i"))
print(gap.find("olma"))
print(gap.find("banan"))`,
          explain: [
            "`replace(eski, yangi)` — barcha mos qismlarni almashtiradi",
            "`count(x)` — x necha marta uchrashini sanaydi",
            "`find(x)` — x birinchi marta **qaysi indeksda** boshlanishini qaytaradi",
            "Topilmasa, `find` **-1** qaytaradi (xato bermaydi)"
          ],
          output: `men nok yedim, nok shirin
men_olma_yedim,_olma_shirin
2
3
4
-1`,
          notes: "find natijasini indekslar bilan tekshiring: m(0) e(1) n(2) bo'sh(3) o(4). -1 qiymati \"topilmadi\" belgisi ekanini ta'kidlang — buni if bilan tekshirish mumkin."
        },
        {
          type: "quiz",
          question: "Bu kod nimani chiqaradi?",
          code: `s = "banan"
print(s.count("an"), s.find("n"))`,
          options: ["2 3", "1 2", "2 2", "3 2"],
          answer: 2,
          explain: "\"b**an**\" va \"b-an-**an**\" — `\"an\"` 2 marta uchraydi. Birinchi `\"n\"` esa b(0) a(1) **n(2)** — 2-indeksda.",
          notes: "Ikkala qiymatni alohida tekshiring. \"2 3\" deb javob berganlar find ni 1 dan sanagan."
        },
        {
          type: "code",
          title: "Tekshiruvchi metodlar (True/False)",
          code: `tel = "+998901234567"
print(tel.startswith("+998"))
print(tel.endswith("67"))

yosh = "15"
print(yosh.isdigit())
print("15a".isdigit())
print("Sardor".isalpha())
print("Sardor 7".isalpha())`,
          explain: [
            "`startswith(x)` / `endswith(x)` — x bilan boshlanadi / tugaydimi",
            "`isdigit()` — hamma belgilar raqammi?",
            "`isalpha()` — hamma belgilar harfmi? (bo'sh joy ham harf emas!)",
            "Bular `input()` ni tekshirishda juda kerak: `int()` dan oldin `isdigit()` qiling"
          ],
          output: `True
True
True
False
True
False`,
          notes: "Hayotiy misol: ro'yxatdan o'tish formasi telefon raqami +998 bilan boshlanishini tekshiradi. Savol: \"int('15a') nima bo'ladi?\" — xato. isdigit() bundan saqlaydi."
        },
        {
          type: "code",
          title: "split va join — bo'laklash va yopishtirish",
          code: `gap = "Men Python o'rganyapman"
sozlar = gap.split()
print(sozlar)
print("So'zlar soni:", len(sozlar))

sana = "05.11.2026"
print(sana.split("."))

print("-".join(sozlar))
print(" ".join(["Bugun", "dars", "bor"]))`,
          explain: [
            "`split()` — bo'sh joylar bo'yicha bo'lib, **ro'yxat** qaytaradi",
            "`split(\".\")` — ko'rsatilgan belgi bo'yicha bo'ladi",
            "`\"-\".join(royxat)` — teskari amal: ro'yxat elementlarini `-` bilan yopishtiradi",
            "Kvadrat qavsdagi natija — **ro'yxat**, uni keyingi darsda batafsil o'rganamiz"
          ],
          output: `['Men', 'Python', "o'rganyapman"]
So'zlar soni: 3
['05', '11', '2026']
Men-Python-o'rganyapman
Bugun dars bor`,
          notes: "Ro'yxatni birinchi marta ko'rishmoqda — qisqa ayting: \"bu bir nechta qiymat saqlaydigan quti, keyingi darsda batafsil\". \"o'rganyapman\" qo'sh tirnoqda chiqishini ko'rsating — ichida apostrof bor."
        },
        {
          type: "code",
          title: "Maxsus belgilar: \\n va \\t",
          code: `print("1-qator\\n2-qator\\n3-qator")
print("Ism:\\tAli")
print("Yosh:\\t14")
print("U \\"Salom\\" dedi")
print('Bu o\\'zbekcha matn')`,
          explain: [
            "`\\n` — yangi qatorga o'tish (new line)",
            "`\\t` — tabulyatsiya (jadval kabi tekislash)",
            "`\\\"` va `\\'` — satr ichida qo'shtirnoq/apostrof yozish",
            "Teskari chiziq `\\` — \"keyingi belgi maxsus\" degan ishora"
          ],
          output: `1-qator
2-qator
3-qator
Ism:\tAli
Yosh:\t14
U "Salom" dedi
Bu o'zbekcha matn`,
          notes: "Bitta print bilan kichik jadval chiqarishni ko'rsating. O'zbek tilida apostrof ko'p, shuning uchun qo'shtirnoqdan foydalanish qulayroq ekanini ayting."
        },
        {
          type: "code",
          title: "Unli harflarni va so'zlarni sanash",
          code: `gap = "Bugun Toshkentda havo juda issiq"
unlilar = "aeiouAEIOU"
soni = 0
for h in gap:
    if h in unlilar:
        soni += 1
print("Unli harflar:", soni)

sozlar = gap.split()
print("So'zlar:", len(sozlar))
print("Eng birinchi so'z:", sozlar[0].upper())`,
          explain: [
            "`h in unlilar` — harf unlilar satrida bormi?",
            "Katta va kichik unlilarni ham hisobga olish uchun ikkalasini yozdik",
            "So'zlarni sanash: `len(gap.split())`",
            "Ro'yxat elementiga ham metod qo'llash mumkin: `sozlar[0].upper()`"
          ],
          output: `Unli harflar: 11
So'zlar: 5
Eng birinchi so'z: BUGUN`,
          notes: "Alternativ yechimni so'rang: avval gap.lower() qilib, keyin faqat \"aeiou\" bilan tekshirish. Ikki yechim ham to'g'ri — dasturlashda bitta to'g'ri javob bo'lmaydi."
        },
        {
          type: "quiz",
          question: "Natija nima?",
          code: `s = "  Olma,Nok,Uzum  "
print(len(s.strip().split(",")))`,
          options: ["1", "2", "3", "17"],
          answer: 2,
          explain: "`strip()` chetdagi bo'sh joylarni olib tashlaydi, `split(\",\")` vergul bo'yicha bo'ladi: `['Olma', 'Nok', 'Uzum']` — 3 ta element.",
          notes: "Zanjirni qadam-baqadam yechib ko'rsating: avval strip, keyin split, oxirida len. Ichkaridan tashqariga emas, chapdan o'ngga o'qiladi."
        },
        {
          type: "code",
          title: "Sezar shifri g'oyasi — maxfiy xabar",
          code: `alifbo = "abcdefghijklmnopqrstuvwxyz"
xabar = "salom"
siljish = 3
shifr = ""
for h in xabar:
    joy = alifbo.find(h)
    yangi = (joy + siljish) % 26
    shifr += alifbo[yangi]
print("Shifrlangan:", shifr)`,
          explain: [
            "Har bir harf alifboda 3 qadam oldinga suriladi: a→d, s→v",
            "`alifbo.find(h)` — harfning alifbodagi o'rni",
            "`% 26` — z dan keyin yana a ga qaytish (aylana)",
            "Ochish uchun: `(joy - siljish) % 26`"
          ],
          output: `Shifrlangan: vdorp`,
          notes: "Yuliy Sezar haqida qisqa hikoya qiling — u sarkardalarga shu usulda xat yozgan. Sinfga \"vdorp\" ni qaytarib ochishni topshiring (siljish -3)."
        },
        {
          type: "task",
          title: "Mashq 1: Matn analizatori",
          task: "Foydalanuvchidan gap so'rang. Chiqaring: 1) belgilar soni, 2) so'zlar soni, 3) unli harflar soni, 4) gapni Har So'zi Katta Harf bilan, 5) bo'sh joylarni '_' ga almashtirilgan variant.",
          starter: `gap = input("Gap kiriting: ")
gap = gap.strip()
# davom ettiring...
`,
          hint: "`len(gap)`, `len(gap.split())`, unlilar uchun for + `in \"aeiouAEIOU\"`, `gap.title()`, `gap.replace(\" \", \"_\")`.",
          solution: `gap = input("Gap kiriting: ")
gap = gap.strip()

print("Belgilar soni:", len(gap))
print("So'zlar soni:", len(gap.split()))

unli = 0
for h in gap.lower():
    if h in "aeiou":
        unli += 1
print("Unli harflar:", unli)

print("Title:", gap.title())
print("Pastki chiziq:", gap.replace(" ", "_"))`,
          notes: "12 daqiqa. Yurib chiqib, natijani saqlamaslik xatosini kuzating. Tez bitirganlarga: eng uzun so'zni topish (for + len)."
        },
        {
          type: "task",
          title: "Mashq 2: Login va telefon tekshiruvi",
          task: "Foydalanuvchidan login va telefon raqamini so'rang. Login: bo'sh joysiz, kichik harfga o'tkazilsin va kamida 4 belgi bo'lsin. Telefon: '+998' bilan boshlansin, 13 belgidan iborat bo'lsin va '+' dan keyingi qismi faqat raqam bo'lsin. Har bir xatoni alohida xabar bilan ko'rsating.",
          starter: `login = input("Login: ").strip().lower()
tel = input("Telefon: ").strip()
# tekshiruvlarni yozing
`,
          hint: "`len(login) >= 4`, `\" \" not in login`, `tel.startswith(\"+998\")`, `len(tel) == 13`, `tel[1:].isdigit()`.",
          solution: `login = input("Login: ").strip().lower()
tel = input("Telefon: ").strip()

xato = False
if len(login) < 4:
    print("Login kamida 4 belgi bo'lsin")
    xato = True
if " " in login:
    print("Loginda bo'sh joy bo'lmasin")
    xato = True
if not tel.startswith("+998"):
    print("Raqam +998 bilan boshlansin")
    xato = True
if len(tel) != 13 or not tel[1:].isdigit():
    print("Raqam formati noto'g'ri")
    xato = True

if not xato:
    print("Ro'yxatdan o'tdingiz,", login)`,
          notes: "xato = False bayroq (flag) usulini tushuntiring — u keyingi darslarda ham kerak. Real ilovalar (Click, Payme) ham raqamni shunday tekshiradi."
        },
        {
          type: "summary",
          title: "Xulosa: satr metodlari",
          points: [
            "Metod: `satr.metod()` — natija **yangi satr**, saqlash uchun `s = s.metod()`",
            "Registr: `upper`, `lower`, `title`, `capitalize`",
            "Tozalash: `strip`, almashtirish: `replace(eski, yangi)`",
            "Qidirish: `find` (topilmasa -1), `count`",
            "Tekshirish: `startswith`, `endswith`, `isdigit`, `isalpha`",
            "`split()` — satrdan ro'yxat, `\"-\".join(r)` — ro'yxatdan satr",
            "`\\n` — yangi qator, `\\t` — tabulyatsiya"
          ],
          notes: "Doskaga metodlar \"shpargalkasi\"ni yozib qoldiring. Keyingi dars — ro'yxatlar; split() natijasi aynan ro'yxat edi, deb ko'prik qiling."
        }
      ],
      homework: [
        { level: "oson", task: "Foydalanuvchidan ism va familiya so'rang (kichik harflarda bo'lsa ham). Ularni to'g'ri formatda chiqaring: 'Familiya Ism' va bosh harflar: 'A.V.'." },
        { level: "o'rta", task: "Gap kiritilsin. Undagi eng uzun so'zni va uning uzunligini toping (split + for). Shuningdek, gapdagi har bir so'zni teskari qilib chiqaring: 'salom dunyo' → 'molas oynud'." },
        { level: "qiyin", task: "Sezar shifri dasturini to'liq yozing: foydalanuvchi 'shifrlash' yoki 'ochish' rejimini, matnni va siljishni kiritadi. Bo'sh joy va alifboda yo'q belgilar o'zgarmay qolsin. Katta harflarni ham qo'llab-quvvatlang." }
      ]
    },

    // ===================== 3-DARS =====================
    {
      id: "m4-l3",
      title: "Ro'yxatlar (list)",
      duration: 90,
      goals: [
        "Ro'yxat nima uchun kerakligini tushunish",
        "Ro'yxat yaratish, indeks bilan o'qish va o'zgartirish",
        "append, insert, remove, pop, clear metodlari",
        "len, in, kesish va ro'yxat bo'yicha sikllar (for, range(len()), enumerate)",
        "sort, sorted, reverse bilan tartiblash",
        "Ro'yxat o'zgaruvchan (mutable), satr esa o'zgarmas ekanini farqlash"
      ],
      keywords: ["list", "append", "insert", "remove", "pop", "sort", "sorted", "enumerate", "mutable"],
      plan: [
        { time: 10, label: "Takrorlash: split() va satr metodlari" },
        { time: 15, label: "Ro'yxat yaratish, indeks, o'zgartirish" },
        { time: 20, label: "Qo'shish va o'chirish metodlari" },
        { time: 20, label: "Sikllar, enumerate, tartiblash" },
        { time: 20, label: "Amaliyot: xarid ro'yxati va reyting" },
        { time: 5, label: "Xulosa va uyga vazifa" }
      ],
      slides: [
        {
          type: "title",
          title: "Ro'yxatlar (list)",
          subtitle: "Bitta o'zgaruvchida ko'p qiymat saqlaymiz",
          emoji: "📋",
          notes: "Muammo bilan boshlang: \"Sinfda 30 o'quvchi bor. Har birining bahosini saqlash uchun 30 ta o'zgaruvchi ochamizmi?\" Javobni kutib, ro'yxatni yechim sifatida tanishtiring."
        },
        {
          type: "text",
          title: "Nega ro'yxat kerak?",
          body: "Hozirgacha bitta o'zgaruvchida bitta qiymat saqladik. Lekin hayotda ma'lumotlar ko'pincha **to'plam** bo'lib keladi: o'quvchilar, baholar, xaridlar, kontaktlar.",
          points: [
            "Yomon usul: `baho1 = 5`, `baho2 = 4`, `baho3 = 3`, ... — 30 ta o'zgaruvchi!",
            "Yaxshi usul: `baholar = [5, 4, 3, ...]` — bitta ro'yxat",
            "Ro'yxat **kvadrat qavs** `[ ]` ichida, elementlar **vergul** bilan ajratiladi",
            "Ro'yxatda istalgan tur bo'lishi mumkin: sonlar, satrlar, aralash"
          ],
          notes: "Yomon usulni doskaga yozib, \"endi o'rtachasini hisoblang\" deng — qanchalik noqulay ekanini his qilishsin. Keyin ro'yxat bilan buni bir qatorda qilish mumkinligini va'da qiling."
        },
        {
          type: "analogy",
          title: "Sinf jurnali va bozorlik ro'yxati",
          emoji: "🛒",
          text: "Onangiz sizni bozorga yuborib, qog'ozga yozib beradi: 1) non, 2) sut, 3) kartoshka. Bu — ro'yxat! Siz unga yangi narsa **qo'shishingiz** (\"tuxum ham ol\"), birontasini **o'chirishingiz** (\"sut uyda bor ekan\") yoki **almashtirishingiz** (\"kartoshka o'rniga piyoz\") mumkin. Sinf jurnali ham ro'yxat: har o'quvchining tartib raqami bor. Faqat Python'da tartib raqami **0 dan** boshlanadi.",
          notes: "So'rang: \"Satrni o'zgartirib bo'lmasdi. Bozorlik ro'yxatini-chi?\" — bu bugungi asosiy farq (mutable) ga ishora."
        },
        {
          type: "code",
          title: "Ro'yxat yaratish va indeks",
          code: `mevalar = ["olma", "nok", "uzum", "anor"]
baholar = [5, 4, 5, 3, 4]
bosh = []

print(mevalar)
print(mevalar[0])
print(mevalar[-1])
print(baholar[2])
print(len(mevalar), len(baholar), len(bosh))`,
          explain: [
            "Indekslar xuddi satrdagidek: 0 dan boshlanadi, -1 — oxirgi",
            "`[]` — bo'sh ro'yxat (keyin to'ldiramiz)",
            "`len()` — elementlar soni",
            "`print(royxat)` butun ro'yxatni qavslari bilan chiqaradi"
          ],
          output: `['olma', 'nok', 'uzum', 'anor']
olma
anor
5
4 5 0`,
          notes: "Satrdagi indekslash bilan to'liq bir xil ekanini ko'rsating — yangi narsa o'rganishning hojati yo'q. Savol: \"mevalar[4] nima beradi?\" — IndexError."
        },
        {
          type: "code",
          title: "Elementni o'zgartirish",
          code: `jamoa = ["Messi", "Ronaldo", "Neymar"]
print(jamoa)

jamoa[1] = "Shomurodov"
print(jamoa)

jamoa[-1] = "Mbappe"
print(jamoa)`,
          explain: [
            "`royxat[i] = yangi` — i-elementni almashtiradi",
            "Satrda bunday qilib bo'lmasdi (TypeError), ro'yxatda esa mumkin",
            "Ro'yxat **o'zgaruvchan (mutable)** — o'sha ro'yxatning o'zi o'zgaradi"
          ],
          output: `['Messi', 'Ronaldo', 'Neymar']
['Messi', 'Shomurodov', 'Neymar']
['Messi', 'Shomurodov', 'Mbappe']`,
          notes: "O'tgan darsdagi ism[0] = 'N' xatosini eslating va farqni ta'kidlang. Sinfdan sevimli jamoasini ro'yxat qilib yozishni so'rang."
        },
        {
          type: "code",
          title: "Qo'shish: append va insert",
          code: `xaridlar = ["non", "sut"]
xaridlar.append("tuxum")
print(xaridlar)

xaridlar.insert(0, "kartoshka")
print(xaridlar)

xaridlar.insert(2, "go'sht")
print(xaridlar)
print("Jami:", len(xaridlar))`,
          explain: [
            "`append(x)` — x ni ro'yxat **oxiriga** qo'shadi",
            "`insert(i, x)` — x ni **i-o'ringa** qo'yadi, qolganlari o'ngga suriladi",
            "Bu metodlar ro'yxatning **o'zini** o'zgartiradi, `xaridlar = ...` shart emas"
          ],
          output: `['non', 'sut', 'tuxum']
['kartoshka', 'non', 'sut', 'tuxum']
['kartoshka', 'non', "go'sht", 'sut', 'tuxum']
Jami: 5`,
          notes: "append — eng ko'p ishlatiladigan metod. Navbat misoli: append — navbat oxiriga turish, insert(0, ...) — navbatsiz oldinga kirish :)"
        },
        {
          type: "code",
          title: "O'chirish: remove, pop, clear",
          code: `sinf = ["Ali", "Vali", "Gulnoza", "Sardor", "Vali"]
sinf.remove("Vali")
print(sinf)

chiqdi = sinf.pop()
print("pop():", chiqdi, sinf)

chiqdi = sinf.pop(0)
print("pop(0):", chiqdi, sinf)

sinf.clear()
print(sinf)`,
          explain: [
            "`remove(x)` — x qiymatli **birinchi** elementni o'chiradi",
            "`pop()` — oxirgi elementni olib tashlaydi va **qaytaradi**",
            "`pop(i)` — i-indeksdagi elementni olib tashlaydi va qaytaradi",
            "`clear()` — hammasini o'chiradi, bo'sh ro'yxat qoladi"
          ],
          output: `['Ali', 'Gulnoza', 'Sardor', 'Vali']
pop(): Vali ['Ali', 'Gulnoza', 'Sardor']
pop(0): Ali ['Gulnoza', 'Sardor']
[]`,
          notes: "remove qiymat bo'yicha, pop indeks bo'yicha ishlashini doskada jadval qilib yozing. Ikki \"Vali\" dan faqat birinchisi o'chganiga e'tibor qarating."
        },
        {
          type: "compare",
          title: "Xato: append natijasini o'zgaruvchiga yozish",
          left: {
            label: "❌ Ro'yxat yo'qoldi",
            code: `royxat = [1, 2, 3]
royxat = royxat.append(4)
print(royxat)
# None`
          },
          right: {
            label: "✅ To'g'ri",
            code: `royxat = [1, 2, 3]
royxat.append(4)
print(royxat)
# [1, 2, 3, 4]`
          },
          good: "right",
          notes: "Bu satr metodlariga teskari! Satrda s = s.upper() kerak edi, ro'yxatda esa append o'zi o'zgartiradi va None qaytaradi. Qoida: ro'yxat metodlari (append, insert, sort, ...) natija qaytarmaydi."
        },
        {
          type: "quiz",
          question: "Kod oxirida ro'yxat qanday bo'ladi?",
          code: `r = [10, 20, 30]
r.append(40)
r.insert(1, 15)
r.pop()
print(r)`,
          options: ["[10, 15, 20, 30, 40]", "[15, 10, 20, 30]", "[10, 15, 20, 30]", "[10, 20, 30, 15]"],
          answer: 2,
          explain: "append → `[10, 20, 30, 40]`, insert(1, 15) → `[10, 15, 20, 30, 40]`, pop() oxirgisini olib tashlaydi → `[10, 15, 20, 30]`.",
          notes: "Har qadamdan keyingi holatni doskaga yozib boring. Bu \"kuzatish jadvali\" usulini o'quvchilar o'zlari ham qo'llashsin."
        },
        {
          type: "code",
          title: "in va kesish (slicing) ro'yxatlarda",
          code: `kunlar = ["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"]
print("Ju" in kunlar)
print("Bayram" in kunlar)

print(kunlar[:5])
print(kunlar[5:])
print(kunlar[::2])
print(kunlar[::-1])`,
          explain: [
            "`in` — element ro'yxatda bormi?",
            "Kesish satrdagi bilan bir xil: `[boshi:oxiri:qadam]`",
            "Kesish **yangi ro'yxat** qaytaradi, asl ro'yxat o'zgarmaydi",
            "`kunlar[:5]` — ish kunlari, `kunlar[5:]` — dam olish kunlari"
          ],
          output: `True
False
['Du', 'Se', 'Ch', 'Pa', 'Ju']
['Sh', 'Ya']
['Du', 'Ch', 'Ju', 'Ya']
['Ya', 'Sh', 'Ju', 'Pa', 'Ch', 'Se', 'Du']`,
          notes: "Satr bilan o'xshashlikni yana bir bor ta'kidlang: o'rgangan bilimlar qayta ishlatiladi. Savol: \"Dam olish kunlarini teskari tartibda qanday olamiz?\""
        },
        {
          type: "code",
          title: "Ro'yxat bo'yicha sikl: 3 usul",
          code: `oquvchilar = ["Ali", "Madina", "Jasur"]

for ism in oquvchilar:
    print("Salom,", ism)

for i in range(len(oquvchilar)):
    print(i + 1, oquvchilar[i])

for i, ism in enumerate(oquvchilar, 1):
    print(f"{i}. {ism}")`,
          explain: [
            "1-usul: faqat qiymatlar kerak bo'lsa — eng sodda",
            "2-usul: `range(len())` — indeks kerak bo'lsa (masalan, o'zgartirish uchun)",
            "3-usul: `enumerate` — tartib raqami va qiymat birga; `1` — sanoqni 1 dan boshlash",
            "Raqamlangan ro'yxat chiqarishda `enumerate` eng qulay"
          ],
          output: `Salom, Ali
Salom, Madina
Salom, Jasur
1 Ali
2 Madina
3 Jasur
1. Ali
2. Madina
3. Jasur`,
          notes: "enumerate da ikki o'zgaruvchi (i, ism) borligini tushuntiring: har aylanishda u juftlik beradi. Bu loyihadagi vazifalarni raqamlab chiqarishda kerak bo'ladi."
        },
        {
          type: "code",
          title: "Tartiblash: sort, sorted, reverse",
          code: `ballar = [72, 95, 60, 88, 95]
yangi = sorted(ballar)
print("sorted:", yangi)
print("asl:", ballar)

ballar.sort(reverse=True)
print("sort kamayish:", ballar)

ismlar = ["Zafar", "Aziz", "Lola"]
ismlar.reverse()
print(ismlar)`,
          explain: [
            "`sorted(r)` — **yangi** tartiblangan ro'yxat qaytaradi, asl o'zgarmaydi",
            "`r.sort()` — ro'yxatning **o'zini** tartiblaydi",
            "`reverse=True` — kamayish tartibida",
            "`r.reverse()` — shunchaki teskari aylantiradi (tartiblamaydi!)"
          ],
          output: `sorted: [60, 72, 88, 95, 95]
asl: [72, 95, 60, 88, 95]
sort kamayish: [95, 95, 88, 72, 60]
['Lola', 'Aziz', 'Zafar']`,
          notes: "reverse() tartiblamasligini alohida ko'rsating — Lola, Aziz, Zafar alifbo tartibida emas! Satrlar alifbo bo'yicha tartiblanadi; katta harflar kichiklardan oldin turadi."
        },
        {
          type: "compare",
          title: "Satr o'zgarmas, ro'yxat o'zgaruvchan",
          left: {
            label: "Satr (str) — immutable",
            code: `s = "kot"
# s[0] = "b"  -> TypeError
s = "b" + s[1:]
print(s)        # bot
s.upper()       # s o'zgarmaydi
print(s)        # bot`
          },
          right: {
            label: "Ro'yxat (list) — mutable",
            code: `r = ["k", "o", "t"]
r[0] = "b"      # mumkin
print(r)        # ['b', 'o', 't']
r.append("!")   # r o'zgaradi
print(r)        # ['b', 'o', 't', '!']`
          },
          notes: "Bu yerda \"yaxshi/yomon\" yo'q — ikkalasi ham to'g'ri, faqat xulqi har xil. Qoidani yozdiring: satr metodi — natijani saqlang; ro'yxat metodi — o'zini o'zgartiradi."
        },
        {
          type: "quiz",
          question: "Nima chiqadi?",
          code: `r = [3, 1, 2]
t = sorted(r)
r.reverse()
print(r, t)`,
          options: ["[1, 2, 3] [1, 2, 3]", "[2, 1, 3] [1, 2, 3]", "[3, 2, 1] [1, 2, 3]", "[2, 1, 3] [3, 1, 2]"],
          answer: 1,
          explain: "`sorted(r)` yangi ro'yxat beradi: `t = [1, 2, 3]`, `r` esa o'zgarmaydi. Keyin `r.reverse()` asl `[3, 1, 2]` ni teskari qiladi: `[2, 1, 3]`.",
          notes: "Ko'pchilik [3, 2, 1] deydi — reverse ni sort deb o'ylashadi. Bu chalkashlikni aniq tushuntiring."
        },
        {
          type: "task",
          title: "Mashq 1: Bozorlik ro'yxati",
          task: "Bo'sh ro'yxat yarating. Foydalanuvchi mahsulot nomlarini kiritadi, 'tamom' yozsa to'xtaydi. Agar mahsulot ro'yxatda allaqachon bo'lsa, 'Bu bor!' deb qo'shmasin. Oxirida ro'yxatni alifbo tartibida, raqamlab chiqaring.",
          starter: `xaridlar = []
while True:
    narsa = input("Mahsulot (tamom - chiqish): ").strip().lower()
    # ...
`,
          hint: "`if narsa == \"tamom\": break`, `if narsa in xaridlar:` ... `else: xaridlar.append(narsa)`. Oxirida `xaridlar.sort()` va `for i, n in enumerate(xaridlar, 1):`.",
          solution: `xaridlar = []
while True:
    narsa = input("Mahsulot (tamom - chiqish): ").strip().lower()
    if narsa == "tamom":
        break
    if narsa == "":
        continue
    if narsa in xaridlar:
        print("Bu bor!")
    else:
        xaridlar.append(narsa)

xaridlar.sort()
print("Bozorlik ro'yxati:")
for i, n in enumerate(xaridlar, 1):
    print(f"{i}. {n}")
print("Jami:", len(xaridlar), "ta mahsulot")`,
          notes: "10-12 daqiqa. strip().lower() nega kerakligini so'rang — \"Non\" va \"non \" bir xil bo'lishi uchun. Bu loyiha uchun tayyorgarlik."
        },
        {
          type: "task",
          title: "Mashq 2: Turnir jadvali",
          task: "Ro'yxat berilgan: `ochkolar = [12, 45, 33, 45, 8, 27]`. 1) Kamayish tartibida chiqaring, 2) eng yaxshi 3 ta natijani (kesish bilan) ko'rsating, 3) eng past natijani ro'yxatdan olib tashlang (pop) va qolganini chiqaring.",
          starter: `ochkolar = [12, 45, 33, 45, 8, 27]
# davom ettiring
`,
          hint: "`ochkolar.sort(reverse=True)`, top-3: `ochkolar[:3]`, eng past natija tartiblangandan keyin oxirida turadi: `ochkolar.pop()`.",
          solution: `ochkolar = [12, 45, 33, 45, 8, 27]
ochkolar.sort(reverse=True)
print("Tartiblangan:", ochkolar)
print("Top-3:", ochkolar[:3])

eng_past = ochkolar.pop()
print("Chiqib ketdi:", eng_past)
print("Qolganlar:", ochkolar)`,
          notes: "Kibersport yoki futbol turnirini misol qiling. Qo'shimcha savol: \"Agar sort qilmasak, eng pastini qanday topamiz?\" — keyingi dars mavzusi."
        },
        {
          type: "summary",
          title: "Xulosa: ro'yxatlar",
          points: [
            "Ro'yxat: `r = [1, 2, 3]`, bo'sh: `r = []`",
            "Indeks, manfiy indeks, kesish, `len`, `in` — satrdagidek ishlaydi",
            "O'zgartirish: `r[i] = qiymat` (ro'yxat **mutable**)",
            "Qo'shish: `append(x)`, `insert(i, x)`",
            "O'chirish: `remove(x)`, `pop()`, `pop(i)`, `clear()`",
            "Sikl: `for x in r`, `for i in range(len(r))`, `for i, x in enumerate(r, 1)`",
            "`sorted(r)` — yangi ro'yxat, `r.sort()` — o'zini; `r.reverse()` — teskari"
          ],
          notes: "Exit-ticket: har bir o'quvchi qog'ozga 1 ta ro'yxat metodi va u nima qilishini yozib topshirsin. Keyingi darsda ro'yxatlar bilan algoritmlar — yig'indi, maksimum, qidiruv."
        }
      ],
      homework: [
        { level: "oson", task: "Sevimli 5 ta filmingiz (yoki o'yiningiz) ro'yxatini yarating. Uni enumerate bilan raqamlab chiqaring, keyin 2-o'rindagisini boshqasiga almashtiring va oxiriga yana bittasini qo'shing." },
        { level: "o'rta", task: "Foydalanuvchi 5 ta son kiritadi (for + input + append). Ro'yxatni o'sish va kamayish tartibida chiqaring, birinchi va oxirgi elementlarni, hamda o'rtadagi uchtasini (kesish) ko'rsating." },
        { level: "qiyin", task: "Telefon kontaktlari: ro'yxatga ismlar qo'shiladi. Menyu: 1-qo'shish, 2-o'chirish (ism bo'yicha, yo'q bo'lsa xabar), 3-ko'rsatish (alifbo tartibida, raqamlangan), 4-chiqish. Bir xil ism ikki marta qo'shilmasin." }
      ]
    },

    // ===================== 4-DARS =====================
    {
      id: "m4-l4",
      title: "Ro'yxatlar bilan algoritmlar",
      duration: 90,
      goals: [
        "sum, max, min funksiyalari va ularni qo'lda yozish",
        "O'rtacha qiymatni hisoblash",
        "Ro'yxatdan element qidirish va sanash",
        "Shart bo'yicha yangi ro'yxatga filtrlash",
        "List comprehension bilan tanishish",
        "input() satrini sonlar ro'yxatiga aylantirish, 2D ro'yxat (jadval)"
      ],
      keywords: ["sum", "max", "min", "o'rtacha", "qidiruv", "filtr", "list comprehension", "2D ro'yxat"],
      plan: [
        { time: 10, label: "Takrorlash: ro'yxat metodlari" },
        { time: 20, label: "sum/max/min, o'rtacha, qo'lda yozish" },
        { time: 15, label: "Qidirish, filtrlash, sanash" },
        { time: 15, label: "List comprehension, split → int, 2D ro'yxat" },
        { time: 25, label: "Amaliyot: baholar statistikasi va filtrlar" },
        { time: 5, label: "Xulosa, modul loyihasi bilan tanishuv" }
      ],
      slides: [
        {
          type: "title",
          title: "Ro'yxatlar bilan algoritmlar",
          subtitle: "Yig'indi, eng kattasi, qidiruv, filtr — ma'lumotdan foydali xulosa chiqaramiz",
          emoji: "🧮",
          notes: "Takrorlash: \"append bilan insert farqi?\", \"sorted bilan sort farqi?\" Keyin ayting: bugun dasturchilarning har kuni ishlatadigan algoritmlarini o'rganamiz."
        },
        {
          type: "text",
          title: "Algoritm — qadamlar ketma-ketligi",
          body: "Ro'yxatda ma'lumot bor, lekin bizga undan **javob** kerak: o'rtacha baho qancha? Eng ko'p gol urgan kim? Kimlar 5 olgan? Bularning barchasi bitta naqshga asoslanadi:",
          points: [
            "1) Boshlang'ich qiymat tayyorlash (`jami = 0`, `soni = 0`, `natija = []`)",
            "2) Ro'yxatni `for` bilan aylanib chiqish",
            "3) Har bir element bilan nimadir qilish (qo'shish, solishtirish, tekshirish)",
            "4) Sikldan keyin natijani chiqarish",
            "Python'da ko'p ishlar uchun tayyor funksiyalar ham bor — lekin ichida nima bo'layotganini bilish muhim"
          ],
          notes: "Bu 4 qadamli naqshni doskaga yozib qoldiring va har bir kod slaydida \"qaysi qadam qayerda?\" deb so'rang."
        },
        {
          type: "code",
          title: "Tayyor funksiyalar: sum, max, min",
          code: `baholar = [5, 4, 3, 5, 4, 5]
print("Yig'indi:", sum(baholar))
print("Eng yuqori:", max(baholar))
print("Eng past:", min(baholar))

ortacha = sum(baholar) / len(baholar)
print("O'rtacha:", ortacha)
print(f"O'rtacha: {ortacha:.2f}")
print("O'rtacha:", round(ortacha, 1))`,
          explain: [
            "`sum(r)` — barcha sonlar yig'indisi",
            "`max(r)` / `min(r)` — eng katta / eng kichik element",
            "O'rtacha = yig'indi / soni",
            "`:.2f` — f-satrda verguldan keyin 2 xona, `round(x, 1)` — 1 xonagacha yaxlitlash"
          ],
          output: `Yig'indi: 26
Eng yuqori: 5
Eng past: 3
O'rtacha: 4.333333333333333
O'rtacha: 4.33
O'rtacha: 4.3`,
          notes: "Bo'sh ro'yxatda len 0 bo'lib, nolga bo'lish xatosi chiqishini ogohlantiring: avval if len(r) > 0 tekshirish kerak. max/min satrlar bilan ham ishlaydi (alifbo bo'yicha)."
        },
        {
          type: "analogy",
          title: "Eng yaxshi to'purarni topish",
          emoji: "⚽",
          text: "Murabbiy jamoadagi eng ko'p gol urgan futbolchini aniqlamoqchi. U birinchi o'yinchining golini yodda saqlaydi: \"hozircha rekord — shu\". Keyin navbatdagi o'yinchiga qaraydi: agar uning goli ko'proq bo'lsa, rekordni yangilaydi. Shunday qilib hamma o'yinchilarni bir marta ko'rib chiqadi. Oxirida yodidagi son — eng katta. `max()` ichida aynan shu jarayon bo'ladi!",
          notes: "Sinfda tezkor o'yin: 5 nafar o'quvchi yonma-yon turib, qo'lida bir son yozilgan qog'oz ushlasin; bir o'quvchi \"rekordchi\" bo'lib qatorni bir marta aylanib chiqsin."
        },
        {
          type: "code",
          title: "Qo'lda: yig'indi va eng kattasi",
          code: `gollar = [3, 7, 2, 9, 4]

jami = 0
for g in gollar:
    jami += g
print("Jami gollar:", jami)

eng_kop = gollar[0]
for g in gollar:
    if g > eng_kop:
        eng_kop = g
print("Eng ko'p:", eng_kop)`,
          explain: [
            "Yig'indi: `jami = 0` dan boshlab, har elementni qo'shib boramiz",
            "Maksimum: birinchi elementni \"hozircha rekord\" deb olamiz",
            "Kattaroq son uchrasa — rekordni yangilaymiz",
            "Nega `eng_kop = 0` emas? Agar hamma sonlar manfiy bo'lsa, 0 noto'g'ri javob beradi"
          ],
          output: `Jami gollar: 25
Eng ko'p: 9`,
          notes: "Kuzatish jadvalini doskada qiling: g=3 → 3, g=7 → 7, g=2 → 7, g=9 → 9, g=4 → 9. Savol: \"Eng kichigini topish uchun nimani o'zgartiramiz?\" — > ni < ga."
        },
        {
          type: "code",
          title: "Qidirish: element qayerda?",
          code: `ismlar = ["Ali", "Bekzod", "Malika", "Diyor"]
qidir = "Malika"

topildi = False
for i in range(len(ismlar)):
    if ismlar[i] == qidir:
        print(qidir, "topildi, o'rni:", i + 1)
        topildi = True
        break

if not topildi:
    print(qidir, "ro'yxatda yo'q")

print(ismlar.index("Diyor"))`,
          explain: [
            "**Chiziqli qidiruv**: boshidan boshlab birma-bir tekshiramiz",
            "Topilsa — `break` bilan to'xtaymiz, keraksiz aylanish yo'q",
            "`topildi` bayrog'i — topilmagan holatni aniqlash uchun",
            "Tayyor usul: `r.index(x)` — indeksni qaytaradi (yo'q bo'lsa xato beradi!)"
          ],
          output: `Malika topildi, o'rni: 3
3`,
          notes: "index() yo'q element uchun ValueError berishini ayting — shuning uchun avval `if x in r:` tekshirish kerak. Telegram kontaktlardan qidiruv misolini keltiring."
        },
        {
          type: "code",
          title: "Filtrlash va sanash",
          code: `ballar = [45, 82, 67, 91, 38, 76, 55]

otganlar = []
yiqilganlar = 0
for b in ballar:
    if b >= 60:
        otganlar.append(b)
    else:
        yiqilganlar += 1

print("O'tganlar:", otganlar)
print("O'tganlar soni:", len(otganlar))
print("Yiqilganlar soni:", yiqilganlar)
print("82 necha marta:", ballar.count(82))`,
          explain: [
            "**Filtr**: bo'sh ro'yxat → shartga mos kelsa `append`",
            "**Sanash**: hisoblagich → shartga mos kelsa `+= 1`",
            "Asl ro'yxat o'zgarmaydi — natija yangi ro'yxatda",
            "`r.count(x)` — aniq bir qiymat necha marta uchrashini sanaydi"
          ],
          output: `O'tganlar: [82, 67, 91, 76]
O'tganlar soni: 4
Yiqilganlar soni: 3
82 necha marta: 1`,
          notes: "Imtihon natijalari misolini muhokama qiling. Savol: \"90 dan yuqori ball olganlarni qanday ajratamiz?\" — faqat shartni o'zgartirish kifoya."
        },
        {
          type: "compare",
          title: "Xato: aylanayotgan ro'yxatdan o'chirish",
          left: {
            label: "❌ Kutilmagan natija",
            code: `sonlar = [1, 2, 2, 3]
for s in sonlar:
    if s == 2:
        sonlar.remove(s)
print(sonlar)
# [1, 2, 3]  — bitta 2 qoldi!`
          },
          right: {
            label: "✅ Yangi ro'yxatga filtrlash",
            code: `sonlar = [1, 2, 2, 3]
yangi = []
for s in sonlar:
    if s != 2:
        yangi.append(s)
print(yangi)
# [1, 3]`
          },
          good: "right",
          notes: "Bu jiddiy va yashirin xato: element o'chirilganda qolganlari chapga suriladi va sikl bittasini o'tkazib yuboradi. Qoida: aylanayotgan ro'yxatni o'zgartirmang, yangisini yarating."
        },
        {
          type: "quiz",
          question: "Bu kod nimani chiqaradi?",
          code: `r = [4, 7, 1, 8, 3]
n = 0
for x in r:
    if x > 3:
        n += x
print(n)`,
          options: ["3", "19", "23", "15"],
          answer: 1,
          explain: "3 dan katta sonlar: 4, 7, 8. Ularning yig'indisi: 4 + 7 + 8 = **19**. (3 o'zi kirmaydi, chunki `>` qat'iy).",
          notes: "\"3\" deb javob berganlar sanash bilan yig'indini adashtirgan. \"23\" deganlar 3 ni ham qo'shgan."
        },
        {
          type: "code",
          title: "List comprehension — qisqa yozuv",
          code: `sonlar = [1, 2, 3, 4, 5, 6]

kvadratlar = [x * x for x in sonlar]
print(kvadratlar)

juftlar = [x for x in sonlar if x % 2 == 0]
print(juftlar)

ismlar = ["ali", "lola", "sardor"]
print([i.capitalize() for i in ismlar])`,
          explain: [
            "Shakli: `[ifoda for x in royxat]` — har element uchun ifoda",
            "Shart bilan: `[x for x in royxat if shart]` — filtr",
            "Bu 3-4 qatorli `for + append` ning bir qatorli varianti",
            "Avval oddiy for bilan yozishni o'rganing, keyin qisqartiring"
          ],
          output: `[1, 4, 9, 16, 25, 36]
[2, 4, 6]
['Ali', 'Lola', 'Sardor']`,
          notes: "Doskada for + append versiyasini yonma-yon yozib, qaysi qism qayerga ko'chganini strelka bilan ko'rsating. Bu faqat tanishuv — majburlamang."
        },
        {
          type: "code",
          title: "Bir qatorda bir nechta son kiritish",
          code: `# Haqiqiy dasturda: matn = input("Sonlar: ")
matn = "5 12 7 3 20"
qismlar = matn.split()
print(qismlar)

sonlar = [int(q) for q in qismlar]
print(sonlar)
print("Yig'indi:", sum(sonlar))
print("Eng kattasi:", max(sonlar))`,
          explain: [
            "`split()` satrlar ro'yxatini beradi: `['5', '12', ...]` — bular hali **satr**!",
            "`int(q)` har birini songa aylantiradi",
            "Shundan keyin `sum`, `max` kabi funksiyalar ishlaydi",
            "Olimpiada masalalarida aynan shu usul juda ko'p ishlatiladi"
          ],
          output: `['5', '12', '7', '3', '20']
[5, 12, 7, 3, 20]
Yig'indi: 47
Eng kattasi: 20`,
          notes: "Satrlar ro'yxatiga sum qo'llash xato berishini ko'rsating. for + append varianti: `sonlar = []`, `for q in qismlar: sonlar.append(int(q))` — sekinroq o'quvchilar uchun buni ham yozing."
        },
        {
          type: "code",
          title: "2D ro'yxat: baholar jadvali",
          code: `ismlar = ["Ali", "Lola", "Jasur"]
jadval = [
    [5, 4, 5],
    [3, 4, 4],
    [5, 5, 5],
]
print(jadval[1])
print(jadval[1][0])

for i in range(len(ismlar)):
    ortacha = sum(jadval[i]) / len(jadval[i])
    print(f"{ismlar[i]}: {ortacha:.1f}")`,
          explain: [
            "2D ro'yxat — **ro'yxatlar ro'yxati** (jadval: qatorlar va ustunlar)",
            "`jadval[1]` — 2-qator (Lolaning baholari)",
            "`jadval[1][0]` — 2-qator, 1-ustun: Lolaning birinchi bahosi",
            "`ismlar[i]` va `jadval[i]` bir xil indeks bilan bog'langan"
          ],
          output: `[3, 4, 4]
3
Ali: 4.7
Lola: 3.7
Jasur: 5.0`,
          notes: "Elektron kundalik (emaktab) misolini keltiring — u aynan jadval. jadval[qator][ustun] tartibini eslab qolishlari uchun \"avval qavat, keyin xona\" o'xshatishini ishlating."
        },
        {
          type: "quiz",
          question: "Nima chiqadi?",
          code: `t = [[1, 2, 3], [4, 5, 6]]
print(t[1][2] + t[0][1])`,
          options: ["5", "7", "8", "6"],
          answer: 2,
          explain: "`t[1][2]` — 2-qator, 3-element: **6**. `t[0][1]` — 1-qator, 2-element: **2**. Jami: 6 + 2 = **8**.",
          notes: "Jadvalni doskaga chizib, qator va ustunlarni 0 dan raqamlang. Ko'pchilik indeksni 1 dan sanab adashadi."
        },
        {
          type: "task",
          title: "Mashq 1: Baholar statistikasi",
          task: "Foydalanuvchi baholarni bir qatorda bo'sh joy bilan kiritadi (masalan: 5 4 3 5 2 4). Chiqaring: baholar soni, o'rtacha (2 xona), eng yuqori va eng past baho (max/min ISHLATMASDAN, qo'lda), nechta '5' borligi va 3 dan past baholar ro'yxati.",
          starter: `matn = input("Baholar: ")
baholar = [int(x) for x in matn.split()]
# davom ettiring
`,
          hint: "`eng_yuqori = baholar[0]` dan boshlang va for bilan solishtiring. 5 lar soni: `baholar.count(5)`. Past baholar: `[b for b in baholar if b < 3]`.",
          solution: `matn = input("Baholar: ")
baholar = [int(x) for x in matn.split()]

if len(baholar) == 0:
    print("Baho kiritilmadi")
else:
    ortacha = sum(baholar) / len(baholar)
    eng_yuqori = baholar[0]
    eng_past = baholar[0]
    for b in baholar:
        if b > eng_yuqori:
            eng_yuqori = b
        if b < eng_past:
            eng_past = b
    print("Soni:", len(baholar))
    print(f"O'rtacha: {ortacha:.2f}")
    print("Eng yuqori:", eng_yuqori)
    print("Eng past:", eng_past)
    print("5 lar soni:", baholar.count(5))
    print("Past baholar:", [b for b in baholar if b < 3])`,
          notes: "15 daqiqa. Bo'sh kiritish holatini tekshirishni eslating. Kuchli o'quvchilarga: o'rtachadan yuqori baholarni ham chiqarish."
        },
        {
          type: "task",
          title: "Mashq 2: Harorat kuzatuvi",
          task: "Haftalik harorat ro'yxati berilgan: `harorat = [18, 22, 25, 19, 30, 27, 21]` va `kunlar = [\"Du\", \"Se\", \"Ch\", \"Pa\", \"Ju\", \"Sh\", \"Ya\"]`. 1) Eng issiq kunning nomini toping, 2) 20 darajadan iliq kunlar nomlarini yangi ro'yxatga yig'ing, 3) haftalik o'rtacha haroratni chiqaring.",
          starter: `harorat = [18, 22, 25, 19, 30, 27, 21]
kunlar = ["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"]
`,
          hint: "Eng issiq kun indeksi: `harorat.index(max(harorat))`. Iliq kunlar uchun `for i in range(len(harorat)):` va `kunlar[i]` ni append qiling.",
          solution: `harorat = [18, 22, 25, 19, 30, 27, 21]
kunlar = ["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"]

eng = harorat.index(max(harorat))
print("Eng issiq kun:", kunlar[eng], harorat[eng])

iliq = []
for i in range(len(harorat)):
    if harorat[i] > 20:
        iliq.append(kunlar[i])
print("Iliq kunlar:", iliq)

ortacha = sum(harorat) / len(harorat)
print(f"O'rtacha: {ortacha:.1f}")`,
          notes: "Ikki parallel ro'yxat (bir xil indeks) g'oyasi loyihada ham kerak bo'ladi (vazifalar va ularning holati). Shu bog'liqlikni ta'kidlang."
        },
        {
          type: "summary",
          title: "Xulosa: ro'yxat algoritmlari",
          points: [
            "Tayyor: `sum(r)`, `max(r)`, `min(r)`, o'rtacha = `sum(r) / len(r)`",
            "Qo'lda maksimum: `eng = r[0]`, keyin `for` + `if x > eng`",
            "Qidiruv: `for` + `if` + `break`, yoki `x in r` va `r.index(x)`",
            "Filtr: bo'sh ro'yxat + shartli `append`; sanash: hisoblagich yoki `r.count(x)`",
            "List comprehension: `[x * 2 for x in r if x > 0]`",
            "Kiritish: `[int(x) for x in input().split()]`",
            "2D ro'yxat: `jadval[qator][ustun]`"
          ],
          notes: "Modul loyihasi — To-Do dasturini tanishtiring: unda shu modulning barcha bilimlari kerak bo'ladi. Talablarni birga o'qib chiqing."
        }
      ],
      homework: [
        { level: "oson", task: "Foydalanuvchi bir qatorda sonlar kiritadi. Ularning yig'indisi, o'rtachasi, eng kattasi va eng kichigini chiqaring (tayyor funksiyalar bilan)." },
        { level: "o'rta", task: "Sonlar ro'yxatidan juft va toq sonlarni ikkita alohida ro'yxatga ajrating (bir marta oddiy for bilan, bir marta list comprehension bilan). Qaysi ro'yxatda elementlar ko'proq ekanini ayting." },
        { level: "qiyin", task: "3 o'quvchi va 4 fan uchun baholar jadvalini 2D ro'yxatda saqlang. Har bir o'quvchining o'rtacha bahosini, har bir fan bo'yicha o'rtachani (ustun bo'yicha!) va eng yuqori o'rtachaga ega o'quvchi ismini chiqaring." }
      ]
    }
  ],

  project: {
    title: "To-Do (vazifalar) dasturi",
    description: "Konsolda ishlaydigan shaxsiy vazifalar ro'yxati. Foydalanuvchi menyu orqali vazifa qo'shadi, ro'yxatni ko'radi, vazifani bajarilgan deb belgilaydi, o'chiradi va statistikani ko'radi. Dastur ro'yxatlar, satr metodlari va while sikliga asoslanadi.",
    requirements: [
      "Menyu `while True` siklida qayta-qayta chiqadi: 1-Qo'shish, 2-Ko'rsatish, 3-Bajarildi, 4-O'chirish, 5-Statistika, 0-Chiqish",
      "Vazifalar `vazifalar` ro'yxatida, ularning holati (True/False) parallel `bajarildi` ro'yxatida saqlanadi",
      "Qo'shishda matn `strip()` qilinadi va `capitalize()` bilan chiroyli ko'rinishga keltiriladi; bo'sh vazifa qabul qilinmaydi",
      "Ro'yxat `enumerate` bilan 1 dan raqamlab chiqariladi, bajarilganlari [x], bajarilmaganlari [ ] belgisi bilan",
      "Raqam kiritilganda `isdigit()` bilan tekshiriladi va chegaradan tashqari raqamga xabar beriladi",
      "O'chirishda `pop()` ikkala ro'yxatdan ham bir xil indeks bilan ishlatiladi",
      "Statistika: jami, bajarilgan, qolgan vazifalar soni va bajarilish foizi",
      "def, dict, tuple ishlatilmaydi — faqat o'tilgan mavzular"
    ],
    bonus: [
      "Qidiruv: kalit so'z kiritilsa, uni o'z ichiga olgan vazifalar ko'rsatilsin (`in` va `lower()`)",
      "Bajarilgan barcha vazifalarni bir buyruq bilan tozalash (yangi ro'yxatga filtrlash)",
      "Vazifa oldiga muhimlik belgisi: '!' bilan boshlangan vazifalar ro'yxat boshiga (`startswith`, `insert(0, ...)`)",
      "Bitta qatorda bir nechta raqam kiritib (masalan '1 3 4'), bir nechta vazifani birdaniga belgilash (`split`)"
    ],
    example: `vazifalar = []
bajarildi = []

while True:
    print("\\n===== TO-DO =====")
    print("1. Vazifa qo'shish")
    print("2. Ro'yxatni ko'rish")
    print("3. Bajarildi deb belgilash")
    print("4. Vazifani o'chirish")
    print("5. Statistika")
    print("0. Chiqish")
    tanlov = input("Tanlang: ").strip()

    if tanlov == "1":
        matn = input("Yangi vazifa: ").strip()
        if matn == "":
            print("Bo'sh vazifa qo'shib bo'lmaydi!")
        else:
            vazifalar.append(matn.capitalize())
            bajarildi.append(False)
            print("Qo'shildi ✅")

    elif tanlov == "2":
        if len(vazifalar) == 0:
            print("Ro'yxat bo'sh. Dam oling! 😎")
        else:
            for i, v in enumerate(vazifalar, 1):
                belgi = "[x]" if bajarildi[i - 1] else "[ ]"
                print(f"{i}. {belgi} {v}")

    elif tanlov == "3" or tanlov == "4":
        raqam = input("Vazifa raqami: ").strip()
        if not raqam.isdigit():
            print("Raqam kiriting!")
        elif int(raqam) < 1 or int(raqam) > len(vazifalar):
            print("Bunday raqamli vazifa yo'q!")
        else:
            i = int(raqam) - 1
            if tanlov == "3":
                bajarildi[i] = True
                print(f"'{vazifalar[i]}' bajarildi! 🎉")
            else:
                ochdi = vazifalar.pop(i)
                bajarildi.pop(i)
                print(f"'{ochdi}' o'chirildi 🗑")

    elif tanlov == "5":
        jami = len(vazifalar)
        tayyor = bajarildi.count(True)
        print("Jami:", jami)
        print("Bajarilgan:", tayyor)
        print("Qolgan:", jami - tayyor)
        if jami > 0:
            foiz = tayyor / jami * 100
            print(f"Bajarilish: {foiz:.0f}%")

    elif tanlov == "0":
        print("Xayr! Vazifalaringizni unutmang 👋")
        break

    else:
        print("Noto'g'ri tanlov, qaytadan urinib ko'ring")`
  },

  test: [
    {
      q: "Bu kod nimani chiqaradi?",
      code: `s = "Python"
print(s[1] + s[-2])`,
      options: ["Pn", "yo", "yh", "Po"],
      answer: 1
    },
    {
      q: "`\"Samarqand\"[2:5]` qiymati qanday?",
      code: "",
      options: ["\"amar\"", "\"mar\"", "\"marq\"", "\"ama\""],
      answer: 1
    },
    {
      q: "Satrni teskari aylantirishning to'g'ri usuli qaysi?",
      code: "",
      options: ["s.reverse()", "s[-1]", "s[::-1]", "reverse(s)"],
      answer: 2
    },
    {
      q: "Bu kod nimani chiqaradi?",
      code: `ism = "lola"
ism.upper()
print(ism)`,
      options: ["lola", "LOLA", "Lola", "Xato beradi"],
      answer: 0
    },
    {
      q: "`\"olma,nok,uzum\".split(\",\")` natijasi nima?",
      code: "",
      options: ["\"olma nok uzum\"", "['olma,nok,uzum']", "3", "['olma', 'nok', 'uzum']"],
      answer: 3
    },
    {
      q: "`\"banan\".find(\"x\")` nima qaytaradi?",
      code: "",
      options: ["-1", "0", "None", "Xato beradi"],
      answer: 0
    },
    {
      q: "Kod oxirida r qanday bo'ladi?",
      code: `r = [1, 2, 3]
r.append(4)
r.pop(0)
r.insert(1, 9)
print(r)`,
      options: ["[1, 9, 2, 3]", "[2, 3, 4, 9]", "[2, 9, 3, 4]", "[9, 2, 3, 4]"],
      answer: 2
    },
    {
      q: "`sorted(r)` va `r.sort()` farqi nimada?",
      code: "",
      options: [
        "Hech qanday farq yo'q",
        "sorted yangi ro'yxat qaytaradi, sort esa ro'yxatning o'zini tartiblaydi",
        "sort yangi ro'yxat qaytaradi, sorted esa o'zini o'zgartiradi",
        "sorted faqat satrlar bilan ishlaydi"
      ],
      answer: 1
    },
    {
      q: "Bu kod nimani chiqaradi?",
      code: `r = [3, 8, 1, 6]
print([x for x in r if x > 2])`,
      options: ["[8, 6]", "[3, 8, 6]", "[1]", "[True, True, False, True]"],
      answer: 1
    },
    {
      q: "Jadvaldan 7 sonini qanday olamiz?",
      code: `t = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]`,
      options: ["t[3][1]", "t[0][2]", "t[2][0]", "t[2][1]"],
      answer: 2
    }
  ]
});
