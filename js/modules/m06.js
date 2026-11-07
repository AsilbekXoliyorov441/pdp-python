window.COURSE_MODULES = window.COURSE_MODULES || [];
COURSE_MODULES.push({
  id: 6,
  month: 3,
  weeks: "11-12 hafta",
  title: "Funksiyalar",
  icon: "🧩",
  description: "Kodni takrorlamasdan, kichik va tushunarli bo'laklarga ajratishni o'rganamiz: def, parametrlar, return, ko'rinish sohasi, *args/**kwargs, lambda va rekursiya.",
  outcomes: [
    "O'z funksiyasini def bilan yarata oladi va uni chaqira oladi",
    "Parametr, argument, standart qiymat va kalit so'zli argumentlarni farqlaydi",
    "return va print farqini aniq tushunadi, funksiyadan bir nechta qiymat qaytara oladi",
    "Lokal va global o'zgaruvchilarni farqlaydi, ro'yxatni funksiyaga berishdagi xavfni biladi",
    "*args, **kwargs, docstring va yaxshi nomlashdan foydalanadi",
    "lambda'ni sorted/map/filter bilan ishlatadi va oddiy rekursiv funksiya yozadi",
    "Butun dasturni funksiyalardan quradi (bank hisobi simulyatori)"
  ],
  lessons: [
    // ==================== 1-DARS ====================
    {
      id: "m6-l1",
      title: "Funksiya nima?",
      duration: 90,
      goals: [
        "Funksiya nima uchun kerakligini (DRY tamoyili) tushunish",
        "def yordamida funksiya yaratish va uni chaqirish",
        "Funksiya avval aniqlanib, keyin chaqirilishini bilish",
        "Funksiya ichidagi print va 'hech narsa qaytarmaslik' farqini ko'rish",
        "Katta dasturni kichik funksiyalarga bo'lish"
      ],
      keywords: ["def", "funksiya", "chaqirish", "DRY", "None", "tana", "chekinish"],
      plan: [
        { time: 10, label: "Takrorlash: ro'yxatlar, lug'atlar, sikllar" },
        { time: 10, label: "Muammo: takrorlanuvchi kod va DRY tamoyili" },
        { time: 20, label: "def sintaksisi, chaqirish, tartib" },
        { time: 10, label: "print va hech narsa qaytarmaslik (None)" },
        { time: 10, label: "Dasturni funksiyalarga bo'lish" },
        { time: 25, label: "Amaliy mashqlar va quiz" },
        { time: 5, label: "Xulosa va uyga vazifa" }
      ],
      slides: [
        {
          type: "title",
          title: "Funksiya nima?",
          subtitle: "Bir marta yoz — istagancha ishlat",
          emoji: "🧩",
          notes: "Darsni savol bilan boshlang: 'Kim bir xil kodni copy-paste qilib, keyin hammasini bittalab tuzatishga majbur bo'lgan?' 2-3 o'quvchi tajribasini aytsin."
        },
        {
          type: "text",
          title: "Muammo: bir xil kod qayta-qayta",
          body: "Tasavvur qiling: maktab dasturida har bir sinf ro'yxatidan oldin chiroyli sarlavha chiqarish kerak. Biz hozircha faqat **copy-paste** qilishni bilamiz.",
          points: [
            "Bir xil 3 qator kod 10 joyda takrorlansa — **30 qator** bo'ladi",
            "Sarlavhani o'zgartirmoqchi bo'lsak — **10 joyni** bittalab tuzatamiz",
            "Bitta joyni unutsak — dasturda **xato** paydo bo'ladi",
            "Kod uzun, o'qish qiyin, xato topish yanada qiyin"
          ],
          notes: "Doskaga 'copy-paste = muammo' deb yozing. O'quvchilardan so'rang: 'Agar 100 joyda takrorlansa-chi?' Javob kutib, keyingi slaydga o'ting."
        },
        {
          type: "code",
          title: "Funksiyasiz: takrorlanish",
          code: `print("=" * 20)
print("  7-A sinf")
print("=" * 20)
print("Ali, Vali, Sardor")

print("=" * 20)
print("  7-B sinf")
print("=" * 20)
print("Madina, Zarina, Bek")`,
          explain: [
            "`print(\"=\" * 20)` — 20 ta tenglik belgisi chiqaradi",
            "Ramka chizadigan qatorlar **har safar qayta yozilgan**",
            "Agar ramkani `*` bilan almashtirmoqchi bo'lsak — 4 joyni o'zgartiramiz",
            "Bu kodni funksiya bilan qisqartiramiz!"
          ],
          output: `====================
  7-A sinf
====================
Ali, Vali, Sardor
====================
  7-B sinf
====================
Madina, Zarina, Bek`,
          notes: "Kodni ishga tushiring. So'rang: 'Bu yerda nima takrorlanyapti?' O'quvchilar ramka qatorlarini ko'rsatishi kerak."
        },
        {
          type: "analogy",
          title: "Funksiya — bu retsept (yoki blender)",
          emoji: "🍲",
          text: "Oshpaz palov retseptini **bir marta** yozib qo'yadi: guruch yuvish, sabzi to'g'rash, zirvak... Keyin har safar palov kerak bo'lsa, retseptni qaytadan o'ylab topmaydi — shunchaki 'palov tayyorla' deydi. Blender ham shunday: ichida murakkab mexanizm bor, lekin siz faqat **tugmani bosasiz**. Funksiya — bu nomlangan retsept: bir marta `def` bilan yozasiz, keyin nomini aytib (chaqirib) istagancha ishlatasiz. Bu **DRY** tamoyili: *Don't Repeat Yourself* — 'O'zingni takrorlama'.",
          notes: "Boshqa misollar so'rang: telefondagi 'tez qo'ng'iroq' tugmasi, o'yindagi 'kombo' tugmasi. DRY so'zini doskaga yozib qo'ying — butun modul davomida qaytamiz."
        },
        {
          type: "text",
          title: "def sintaksisi: funksiya anatomiyasi",
          body: "Funksiya yaratish uchun `def` (define — aniqlash) kalit so'zi ishlatiladi:",
          points: [
            "`def` — 'funksiya yaratyapman' degan kalit so'z",
            "`ramka` — funksiya nomi (o'zgaruvchi nomi qoidalari bilan: kichik harf, `_`)",
            "`()` — qavslar **majburiy** (keyingi darsda ichiga parametr yozamiz)",
            "`:` — ikki nuqta, xuddi `if` va `for` dagi kabi",
            "Funksiya **tanasi** — 4 ta bo'sh joy (Tab) bilan surilgan qatorlar",
            "Chekinish tugagan joyda funksiya ham tugaydi"
          ],
          notes: "Doskaga `def ramka():` ni yozib, har bir qismini strelka bilan belgilang. Eng ko'p xato: ikki nuqtani yoki qavslarni unutish."
        },
        {
          type: "code",
          title: "Birinchi funksiyamiz",
          code: `def ramka():
    print("=" * 20)

ramka()
print("  7-A sinf")
ramka()
print("Ali, Vali, Sardor")`,
          explain: [
            "1-2 qatorlar: funksiya **aniqlanadi** — bu paytda hech narsa chiqmaydi!",
            "`ramka()` — funksiyani **chaqirish**: Python tanasidagi kodni bajaradi",
            "Funksiya ikki marta chaqirildi — ramka ikki marta chiqdi",
            "Endi ramkani o'zgartirish uchun faqat **bitta** qatorni tuzatish kifoya"
          ],
          output: `====================
  7-A sinf
====================
Ali, Vali, Sardor`,
          notes: "Muhim lahza: def yozilganda kod ishlamaydi, faqat 'eslab qolinadi'. '=' ni '*' ga almashtirib, qayta ishga tushiring — o'zgarish ikki joyda ham ko'rinadi."
        },
        {
          type: "code",
          title: "Funksiya ichida bir nechta buyruq va sikl",
          code: `def menyu():
    print("--- O'YIN MENYUSI ---")
    variantlar = ["Boshlash", "Sozlamalar", "Chiqish"]
    for i, v in enumerate(variantlar, 1):
        print(i, v)

print("Xush kelibsiz!")
menyu()
print("Siz yutqazdingiz :(")
menyu()`,
          explain: [
            "Funksiya ichida istalgan kod bo'lishi mumkin: o'zgaruvchi, ro'yxat, sikl, if",
            "`enumerate(..., 1)` — raqamlashni 1 dan boshlaydi",
            "Har chaqirilganda funksiya **boshidan oxirigacha** bajariladi",
            "Dastur oqimi: funksiyaga 'sakraydi', bajaradi, so'ng **qaytib keladi**"
          ],
          output: `Xush kelibsiz!
--- O'YIN MENYUSI ---
1 Boshlash
2 Sozlamalar
3 Chiqish
Siz yutqazdingiz :(
--- O'YIN MENYUSI ---
1 Boshlash
2 Sozlamalar
3 Chiqish`,
          notes: "Dastur oqimini barmoq bilan kuzatib ko'rsating: 7-qator → 8-qator funksiyaga sakraydi → qaytadi → 9-qator. O'quvchilardan 'Nechta qator chiqadi?' deb oldindan so'rang."
        },
        {
          type: "compare",
          title: "Avval aniqlang, keyin chaqiring!",
          left: {
            label: "❌ Xato: chaqirish def dan oldin",
            code: `salom()

def salom():
    print("Assalomu alaykum!")

# NameError: name 'salom'
# is not defined`
          },
          right: {
            label: "✅ To'g'ri: avval def, keyin chaqirish",
            code: `def salom():
    print("Assalomu alaykum!")

salom()

# Assalomu alaykum!`
          },
          good: "right",
          notes: "Python kodni yuqoridan pastga o'qiydi. 1-qatorda u hali 'salom' degan so'zni bilmaydi. Shuning uchun funksiyalar odatda faylning tepasida yoziladi."
        },
        {
          type: "quiz",
          question: "Bu dastur nima chiqaradi?",
          code: `def gol():
    print("GOOOL!")

print("O'yin boshlandi")`,
          options: [
            "GOOOL!\nO'yin boshlandi",
            "O'yin boshlandi",
            "O'yin boshlandi\nGOOOL!",
            "Xato beradi"
          ],
          answer: 1,
          explain: "Funksiya faqat **aniqlangan**, lekin hech qayerda `gol()` deb **chaqirilmagan**. Shuning uchun uning ichidagi print ishlamaydi.",
          notes: "Bu eng muhim tushunchalardan biri. Ko'p o'quvchilar 1-variantni tanlaydi. Futbol misoli: 'Gol qoidasi bor, lekin gol urilmagan!'"
        },
        {
          type: "compare",
          title: "Qavslarni unutmang",
          left: {
            label: "❌ Qavssiz — chaqirilmaydi",
            code: `def salom():
    print("Salom!")

salom      # hech narsa bo'lmaydi
print(salom)
# <function salom at 0x7f...>`
          },
          right: {
            label: "✅ Qavs bilan — chaqiriladi",
            code: `def salom():
    print("Salom!")

salom()    # Salom!`
          },
          good: "right",
          notes: "Qavssiz nom — bu funksiyaning o'zi (retsept qog'ozi), qavs bilan — uni bajarish (ovqat pishirish). 4-darsda 'funksiya qiymat sifatida' mavzusida bunga qaytamiz."
        },
        {
          type: "code",
          title: "print qiladi, lekin hech narsa qaytarmaydi",
          code: `def salomlash():
    print("Salom, do'stim!")

natija = salomlash()
print("natija =", natija)
print(type(natija))`,
          explain: [
            "Funksiya ekranga **chiqardi** — lekin bu 'javob qaytarish' emas",
            "`natija` o'zgaruvchisiga hech narsa tushmadi — aniqrog'i, `None` tushdi",
            "`None` — Python'da 'hech narsa yo'q' degan maxsus qiymat",
            "Keyingi darsda `return` yordamida haqiqiy javob qaytarishni o'rganamiz"
          ],
          output: `Salom, do'stim!
natija = None
<class 'NoneType'>`,
          notes: "Bu keyingi dars uchun 'ko'prik'. O'quvchilarga ayting: ekranda ko'rinish va o'zgaruvchiga qiymat tushishi — ikki xil narsa. Hozircha shuni eslab qolishsa yetarli."
        },
        {
          type: "quiz",
          question: "Ekranda nechta qator chiqadi?",
          code: `def chiz():
    for i in range(3):
        print("*" * (i + 1))

chiz()
chiz()`,
          options: ["3", "2", "6", "9"],
          answer: 2,
          explain: "Har bir `chiz()` chaqiruvida sikl 3 marta ishlaydi: `*`, `**`, `***`. Funksiya 2 marta chaqirilgan: 3 × 2 = **6** qator.",
          notes: "O'quvchilar javob bergach, kodni ishga tushirib tekshiring. Kimdir 3 desa — 'funksiya necha marta chaqirildi?' deb so'rang."
        },
        {
          type: "code",
          title: "Dasturni funksiyalarga bo'lish",
          code: `def sarlavha():
    print("*** KUNDALIK ***")

def jadval():
    darslar = ["Matematika", "Ingliz tili", "Informatika"]
    for d in darslar:
        print("-", d)

def xayrlashuv():
    print("Omad, a'lochi!")

sarlavha()
jadval()
xayrlashuv()`,
          explain: [
            "Har bir funksiya **bitta vazifani** bajaradi — nomi ham shuni aytadi",
            "Pastdagi 3 qator — dasturning 'mundarijasi': o'qish juda oson",
            "Bitta qismni o'zgartirsak, qolganlariga tegmaymiz",
            "Katta dasturlar (o'yinlar, Telegram botlar) aynan shunday quriladi"
          ],
          output: `*** KUNDALIK ***
- Matematika
- Ingliz tili
- Informatika
Omad, a'lochi!`,
          notes: "Kitob analogiyasini bering: boblar = funksiyalar, mundarija = pastdagi chaqiruvlar. So'rang: 'jadval() ni ikki marta chaqirsak nima bo'ladi?'"
        },
        {
          type: "analogy",
          title: "Funksiyalar — futbol jamoasi",
          emoji: "⚽",
          text: "Futbol jamoasida har bir o'yinchining **o'z vazifasi** bor: darvozabon to'pni ushlaydi, himoyachi to'xtatadi, hujumchi gol uradi. Murabbiy (asosiy dastur) faqat buyruq beradi: 'Hujumchi — hujum qil!'. Agar bitta o'yinchi hamma ishni qilsa, jamoa yutqazadi. Dastur ham shunday: har bir funksiya bitta ishni yaxshi bajarsin, asosiy kod esa ularni to'g'ri tartibda chaqirsin.",
          notes: "So'rang: 'Agar sizning o'yiningizda funksiyalar bo'lsa, qanday nomlar berardingiz?' (masalan: sakrash, otish, hisob_korsat)."
        },
        {
          type: "task",
          title: "Mashq 1: Tabriknoma",
          task: "`tabrik()` nomli funksiya yozing. U ramka ichida 'Tug'ilgan kuning bilan!' yozuvini chiqarsin (ramka — 25 ta `*`). Keyin funksiyani **3 marta** chaqiring.",
          starter: `def tabrik():
    # shu yerga yozing
    pass

# funksiyani 3 marta chaqiring
`,
          hint: "Funksiya ichida 3 ta print bo'ladi: `\"*\" * 25`, matn, yana `\"*\" * 25`. Chaqirish uchun `for _ in range(3): tabrik()` ishlatish mumkin.",
          solution: `def tabrik():
    print("*" * 25)
    print(" Tug'ilgan kuning bilan!")
    print("*" * 25)

for _ in range(3):
    tabrik()`,
          notes: "5 daqiqa bering. Tekshirishda: kim funksiyani sikl ichida chaqirdi? Bu ham to'g'ri va chiroyli usul ekanini ta'kidlang."
        },
        {
          type: "task",
          title: "Mashq 2: Karra jadvali bo'laklarga",
          task: "Uchta funksiya yozing: `sarlavha()` — 'Karra jadvali: 7' chiqaradi; `jadval()` — 7 ning 1 dan 10 gacha karrasini `7 x 1 = 7` ko'rinishida chiqaradi; `oxiri()` — '--- tugadi ---' chiqaradi. So'ng ularni tartib bilan chaqiring.",
          starter: `def sarlavha():
    pass

def jadval():
    pass

def oxiri():
    pass

sarlavha()
jadval()
oxiri()`,
          hint: "jadval() ichida `for i in range(1, 11):` va f-string: `print(f\"7 x {i} = {7 * i}\")`.",
          solution: `def sarlavha():
    print("Karra jadvali: 7")

def jadval():
    for i in range(1, 11):
        print(f"7 x {i} = {7 * i}")

def oxiri():
    print("--- tugadi ---")

sarlavha()
jadval()
oxiri()`,
          notes: "Kuchli o'quvchilarga qo'shimcha: jadval() ni 2 marta chaqirsa nima bo'ladi? Keyingi darsda 7 o'rniga istalgan sonni berishni (parametr) o'rganamiz — qiziqish uyg'oting."
        },
        {
          type: "summary",
          title: "Xulosa: Funksiya nima?",
          points: [
            "Funksiya — nomlangan kod bo'lagi, **DRY**: o'zingni takrorlama",
            "`def nom():` bilan **aniqlanadi**, tanasi 4 bo'sh joy bilan suriladi",
            "`nom()` bilan **chaqiriladi** — qavslar majburiy",
            "Avval aniqlash, keyin chaqirish — aks holda `NameError`",
            "Ichida print bo'lsa ham, funksiya hech narsa qaytarmasa natija — `None`",
            "Katta dasturni kichik, bitta vazifali funksiyalarga bo'lamiz"
          ],
          notes: "O'quvchilardan bittadan so'z bilan 'bugun nima o'rgandik' deb so'rang. Uyga vazifani tushuntiring."
        }
      ],
      homework: [
        { level: "oson", task: "`profil()` funksiyasini yozing: u sizning ismingiz, yoshingiz va sevimli o'yiningizni 3 qatorda chiqarsin. Funksiyani 2 marta chaqiring." },
        { level: "o'rta", task: "Telefon menyusi dasturi: `asosiy_menyu()`, `kontaktlar()` (5 ta ismli ro'yxatni raqamlab chiqaradi), `sozlamalar()` funksiyalarini yozing va ularni mantiqiy tartibda chaqiring." },
        { level: "qiyin", task: "`archa()` funksiyasini yozing: u 5 qavatli yulduzcha archani markazlashtirib chizsin (masalan, `\" \" * (5 - i) + \"*\" * (2 * i - 1)`). So'ng `tana()` funksiyasi archa tanasini chizsin. Ikkalasini chaqiradigan `yangi_yil()` funksiyasini yozing." }
      ]
    },

    // ==================== 2-DARS ====================
    {
      id: "m6-l2",
      title: "Parametrlar va return",
      duration: 90,
      goals: [
        "Parametr va argument farqini tushunish",
        "Bir nechta parametr, standart qiymat va kalit so'zli argumentlardan foydalanish",
        "return va print farqini aniq bilish",
        "Bir nechta qiymatni kortej sifatida qaytarish",
        "Erta return va None bilan ishlash"
      ],
      keywords: ["parametr", "argument", "return", "standart qiymat", "kalit so'zli argument", "None", "kortej"],
      plan: [
        { time: 5, label: "Takrorlash: def va chaqirish" },
        { time: 20, label: "Parametrlar, argumentlar, standart qiymat, kalit so'z" },
        { time: 25, label: "return va print farqi, bir nechta qiymat, erta return" },
        { time: 10, label: "Quiz va savol-javob" },
        { time: 25, label: "Amaliy mashqlar" },
        { time: 5, label: "Xulosa va uyga vazifa" }
      ],
      slides: [
        {
          type: "title",
          title: "Parametrlar va return",
          subtitle: "Funksiyaga ma'lumot beramiz — undan javob olamiz",
          emoji: "🎯",
          notes: "O'tgan darsdagi `jadval()` mashqini eslating: u faqat 7 ning karrasini chiqarardi. 'Agar 9 ning karrasi kerak bo'lsa-chi? Yana bitta funksiya yozamizmi?' — bugungi mavzu shu savolga javob."
        },
        {
          type: "analogy",
          title: "Funksiya — bu kofe avtomati",
          emoji: "☕",
          text: "Kofe avtomatiga **pul** va **tanlov** (masalan, 'kapuchino') berasiz — bu **argumentlar**. Avtomat ichida ishlaydi va sizga **stakandagi kofe**ni qaytaradi — bu **return**. Avtomatning ekranida 'Tayyorlanmoqda...' yozuvi chiqadi — bu **print**: siz ko'rasiz, lekin uni icholmaysiz! Faqat qaytarilgan kofe qo'lingizga tushadi va uni ishlatishingiz mumkin.",
          notes: "Bu analogiya butun darsning asosi. return vs print farqiga yetganda yana shu analogiyaga qayting: 'ekrandagi yozuvni ichib bo'ladimi?'"
        },
        {
          type: "code",
          title: "Parametr — funksiyaning 'kirish eshigi'",
          code: `def salomlash(ism):
    print(f"Salom, {ism}! Darsga xush kelibsiz.")

salomlash("Aziz")
salomlash("Dilnoza")
salomlash("Jasur")`,
          explain: [
            "`ism` — **parametr**: funksiya ichidagi o'zgaruvchi (bo'sh quti)",
            "`\"Aziz\"` — **argument**: chaqirishda qutiga solinadigan haqiqiy qiymat",
            "Har chaqiruvda `ism` yangi qiymat oladi",
            "Bitta funksiya — istalgan ism uchun ishlaydi!"
          ],
          output: `Salom, Aziz! Darsga xush kelibsiz.
Salom, Dilnoza! Darsga xush kelibsiz.
Salom, Jasur! Darsga xush kelibsiz.`,
          notes: "Doskaga yozing: PARAMETR = def qatoridagi nom; ARGUMENT = chaqirishdagi qiymat. Eslab qolish uchun: 'Parametr — joy, argument — mehmon'."
        },
        {
          type: "code",
          title: "Bir nechta parametr",
          code: `def karra(son, gacha):
    for i in range(1, gacha + 1):
        print(f"{son} x {i} = {son * i}")

karra(9, 3)
print("---")
karra(3, 4)`,
          explain: [
            "Parametrlar vergul bilan ajratiladi: `(son, gacha)`",
            "Argumentlar **tartib bo'yicha** tushadi: 1-chi → `son`, 2-chi → `gacha`",
            "`karra(9, 3)`: son=9, gacha=3",
            "Bu **pozitsion argumentlar** deyiladi — o'rni muhim!"
          ],
          output: `9 x 1 = 9
9 x 2 = 18
9 x 3 = 27
---
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12`,
          notes: "So'rang: '`karra(3, 9)` desak nima bo'ladi?' — 3 ning 9 gacha karrasi. Tartib muhimligini shu bilan ko'rsating."
        },
        {
          type: "quiz",
          question: "Bu kod nima bo'ladi?",
          code: `def yuza(eni, boyi):
    print(eni * boyi)

yuza(5)`,
          options: [
            "5 chiqadi",
            "0 chiqadi",
            "TypeError: boyi argumenti yetishmayapti",
            "25 chiqadi"
          ],
          answer: 2,
          explain: "Funksiya 2 ta parametr kutadi, biz esa 1 ta argument berdik. Python xato beradi: `TypeError: yuza() missing 1 required positional argument: 'boyi'`.",
          notes: "Xato matnini o'qishni o'rgating: 'missing' — yetishmayapti, 'required' — majburiy. Bu xato juda ko'p uchraydi."
        },
        {
          type: "code",
          title: "Standart (default) qiymat",
          code: `def buyurtma(taom, soni=1, ichimlik="choy"):
    print(f"{soni} ta {taom} + {ichimlik}")

buyurtma("somsa")
buyurtma("lag'mon", 2)
buyurtma("osh", 3, "kompot")`,
          explain: [
            "`soni=1` — agar argument berilmasa, **1** olinadi",
            "`buyurtma(\"somsa\")` — soni va ichimlik standart qiymatda qoldi",
            "Standart qiymatli parametrlar **oxirida** turishi shart",
            "`def f(a=1, b):` — bu **SyntaxError** beradi"
          ],
          output: `1 ta somsa + choy
2 ta lag'mon + choy
3 ta osh + kompot`,
          notes: "Choyxona misoli: ofitsiant 'choy olib kelaymi?' deb so'ramaydi — choy doim standart. O'zingiz boshqa narsa so'rasangiz — o'zgaradi. print() ning ham `sep=\" \"` va `end=\"\\n\"` standart qiymatlari borligini eslating."
        },
        {
          type: "code",
          title: "Kalit so'zli (keyword) argumentlar",
          code: `def profil(ism, yosh, shahar="Toshkent"):
    print(f"{ism}, {yosh} yosh, {shahar}")

profil("Sardor", 14)
profil(yosh=15, ism="Malika")
profil("Bobur", 13, shahar="Samarqand")
profil("Nilufar", shahar="Buxoro", yosh=16)`,
          explain: [
            "`yosh=15` — argumentni **nomi bilan** beramiz, tartib ahamiyatsiz",
            "Pozitsion va kalit so'zli argumentlarni aralashtirish mumkin",
            "Qoida: avval pozitsion, **keyin** kalit so'zli argumentlar",
            "Kalit so'zlar kodni o'qishni osonlashtiradi: nima nimaga teng — aniq"
          ],
          output: `Sardor, 14 yosh, Toshkent
Malika, 15 yosh, Toshkent
Bobur, 13 yosh, Samarqand
Nilufar, 16 yosh, Buxoro`,
          notes: "So'rang: '`profil(15, \"Malika\")` desak nima bo'ladi?' — ism=15, yosh='Malika' bo'lib qoladi! Kalit so'zlar bunday chalkashlikdan saqlaydi. Eng ko'p xato: `profil(ism=\"Ali\", 14)` — kalit so'zdan keyin pozitsion argument (SyntaxError)."
        },
        {
          type: "compare",
          title: "return va print — eng muhim farq!",
          left: {
            label: "print — faqat ekranga chiqaradi",
            code: `def kvadrat_print(x):
    print(x * x)

a = kvadrat_print(4)   # 16 chiqadi
print(a)               # None
# a + 10  ->  TypeError!
# Natijani ishlatib bo'lmaydi`
          },
          right: {
            label: "return — qiymatni qaytaradi",
            code: `def kvadrat(x):
    return x * x

a = kvadrat(4)         # hech narsa chiqmaydi
print(a)               # 16
print(a + 10)          # 26
print(kvadrat(3) + kvadrat(4))  # 25
# Natija bilan ishlash mumkin!`
          },
          good: "right",
          notes: "Bu darsning ENG muhim slaydi — 5 daqiqa ajrating. Kofe avtomatini eslating: print — ekrandagi yozuv, return — qo'lingizga berilgan stakan. Qoida: funksiya hisoblasa — return qilsin, ekranga chiqarishni chaqiruvchi hal qilsin."
        },
        {
          type: "code",
          title: "return natijasini qayta ishlatamiz",
          code: `def chegirma(narx, foiz):
    return narx - narx * foiz // 100

krossovka = chegirma(400000, 25)
futbolka = chegirma(120000, 10)
jami = krossovka + futbolka

print("Krossovka:", krossovka)
print("Futbolka:", futbolka)
print("Jami:", jami)`,
          explain: [
            "`return` qiymatni chaqirilgan joyga **qaytarib beradi**",
            "Natijani o'zgaruvchiga saqlash, qo'shish, solishtirish mumkin",
            "`//` — butun bo'lish, so'm tiyinsiz chiqishi uchun",
            "print bilan bu mumkin bo'lmasdi — `jami` ni hisoblay olmasdik"
          ],
          output: `Krossovka: 300000
Futbolka: 108000
Jami: 408000`,
          notes: "Bozor misoli: sotuvchi chegirmani hisoblab, sizga raqamni aytadi — siz uni hamyoningizdagi pul bilan solishtirasiz. So'rang: 'Agar return o'rniga print bo'lsa, jami nima bo'lardi?' (TypeError)."
        },
        {
          type: "code",
          title: "Bir nechta qiymat qaytarish (kortej)",
          code: `def statistika(baholar):
    eng_kichik = min(baholar)
    eng_katta = max(baholar)
    ortacha = sum(baholar) / len(baholar)
    return eng_kichik, eng_katta, ortacha

natija = statistika([5, 3, 4, 5, 4])
print(natija)

mn, mx, ort = statistika([5, 3, 4, 5, 4])
print("Min:", mn, "Max:", mx, "O'rtacha:", ort)`,
          explain: [
            "`return a, b, c` — aslida **kortej** `(a, b, c)` qaytaradi",
            "Kortejni bitta o'zgaruvchiga olish mumkin: `natija`",
            "Yoki **ochib** (unpacking) bir nechta o'zgaruvchiga: `mn, mx, ort = ...`",
            "O'zgaruvchilar soni qaytarilgan qiymatlar soniga teng bo'lishi shart"
          ],
          output: `(3, 5, 4.2)
Min: 3 Max: 5 O'rtacha: 4.2`,
          notes: "Kortejlar mavzusini eslating: `a, b = 1, 2`. So'rang: '`mn, mx = statistika(...)` desak nima bo'ladi?' — ValueError, chunki 3 ta qiymat 2 ta o'zgaruvchiga sig'maydi."
        },
        {
          type: "code",
          title: "Erta return: funksiyadan darhol chiqish",
          code: `def baho(ball):
    if ball < 0 or ball > 100:
        return "Noto'g'ri ball"
    if ball >= 86:
        return 5
    if ball >= 71:
        return 4
    if ball >= 56:
        return 3
    return 2

print(baho(92), baho(75), baho(60), baho(30), baho(150))`,
          explain: [
            "`return` bajarilishi bilan funksiya **darhol tugaydi**",
            "Shuning uchun `elif` shart emas — keyingi `if` ga yetib bormaydi",
            "Birinchi tekshiruv — 'qo'riqchi' (guard): noto'g'ri ma'lumotni darrov qaytaradi",
            "return'dan keyingi kod hech qachon bajarilmaydi"
          ],
          output: `5 4 3 2 Noto'g'ri ball`,
          notes: "Analogiya: maktab qo'riqchisi — formasiz o'quvchini eshikdan qaytaradi, ichkariga kiritmaydi. Ta'kidlang: return'dan keyin yozilgan print hech qachon ishlamaydi."
        },
        {
          type: "code",
          title: "None: funksiya hech narsa qaytarmasa",
          code: `def tekshir(son):
    if son > 0:
        return "musbat"
    if son < 0:
        return "manfiy"

print(tekshir(5))
print(tekshir(-3))
print(tekshir(0))

javob = tekshir(0)
if javob is None:
    print("Funksiya hech narsa qaytarmadi!")`,
          explain: [
            "Agar `return` ga yetib bormasa — funksiya `None` qaytaradi",
            "`tekshir(0)`: ikkala shart ham False — return yo'q → `None`",
            "Bo'sh `return` ham `None` qaytaradi",
            "`None` ni tekshirish uchun `is None` ishlatiladi"
          ],
          output: `musbat
manfiy
None
Funksiya hech narsa qaytarmadi!`,
          notes: "Bu yashirin xato manbai! Funksiyaning har bir yo'li qiymat qaytarishini tekshirishni o'rgating. Savol: 'Bu funksiyani qanday tuzatamiz?' — oxiriga `return \"nol\"` qo'shamiz."
        },
        {
          type: "quiz",
          question: "Ekranda nima chiqadi?",
          code: `def f(x):
    return x * 2
    print("Salom")

y = f(3) + f(4)
print(y)`,
          options: ["Salom\n14", "14", "Salom\nSalom\n14", "None"],
          answer: 1,
          explain: "`return` dan keyin funksiya tugaydi, shuning uchun `print(\"Salom\")` **hech qachon** bajarilmaydi. f(3)=6, f(4)=8, 6+8=**14**.",
          notes: "Ko'pchilik 'Salom' chiqadi deb o'ylaydi. 'return — bu funksiyaning eshigi, chiqib ketgandan keyin ichkarida nima bo'lishi ahamiyatsiz' deb tushuntiring."
        },
        {
          type: "quiz",
          question: "Bu kod nima chiqaradi?",
          code: `def qosh(a, b=10):
    return a + b

print(qosh(5), qosh(5, 1), qosh(b=2, a=3))`,
          options: ["15 6 5", "5 6 5", "15 6 Xato", "15 15 5"],
          answer: 0,
          explain: "`qosh(5)`: b=10 → 15. `qosh(5, 1)`: b=1 → 6. `qosh(b=2, a=3)`: kalit so'zlar bilan, tartib muhim emas → 5.",
          notes: "Har bir chaqiruvni alohida tahlil qiling. Kalit so'zli argumentlar tartibdan qat'i nazar ishlashini yana bir bor ta'kidlang."
        },
        {
          type: "task",
          title: "Mashq 1: Tana massasi indeksi (TMI)",
          task: "`tmi(vazn, boy)` funksiyasini yozing: u `vazn / (boy * boy)` ni **1 xonagacha yaxlitlab qaytarsin** (`round`). So'ng `holat(tmi_qiymat)` funksiyasi: 18.5 dan kichik → 'Ozg'in', 25 dan kichik → 'Normal', aks holda → 'Ortiqcha vazn' qaytarsin. 50 kg, 1.65 m uchun natijani chiqaring.",
          starter: `def tmi(vazn, boy):
    pass

def holat(t):
    pass

t = tmi(50, 1.65)
print(t, holat(t))`,
          hint: "`return round(vazn / (boy * boy), 1)`. holat() ichida erta return: `if t < 18.5: return \"Ozg'in\"` ...",
          solution: `def tmi(vazn, boy):
    return round(vazn / (boy * boy), 1)

def holat(t):
    if t < 18.5:
        return "Ozg'in"
    if t < 25:
        return "Normal"
    return "Ortiqcha vazn"

t = tmi(50, 1.65)
print(t, holat(t))`,
          notes: "Javob: 18.4 Ozg'in. Ta'kidlang: ikkala funksiya ham print qilmaydi, faqat return qiladi — chiqarish asosiy kodda. Bu to'g'ri uslub."
        },
        {
          type: "task",
          title: "Mashq 2: Telefon tarifi kalkulyatori",
          task: "`tarif_narxi(gb, daqiqa, sms=0)` funksiyasini yozing: 1 GB = 5000 so'm, 1 daqiqa = 100 so'm, 1 SMS = 50 so'm. Funksiya **umumiy narx va eng qimmat xizmat nomini** (kortej) qaytarsin. `tarif_narxi(10, 200)` va `tarif_narxi(2, 50, sms=300)` uchun natijani chiqaring.",
          starter: `def tarif_narxi(gb, daqiqa, sms=0):
    internet = gb * 5000
    # davom ettiring
    pass

jami, qimmat = tarif_narxi(10, 200)
print(jami, qimmat)`,
          hint: "Uchta narxni lug'atga soling: `{\"internet\": ..., \"qo'ng'iroq\": ..., \"sms\": ...}`. Eng kattasining kalitini `max(lugat, key=lugat.get)` bilan topish mumkin.",
          solution: `def tarif_narxi(gb, daqiqa, sms=0):
    narxlar = {
        "internet": gb * 5000,
        "qo'ng'iroq": daqiqa * 100,
        "sms": sms * 50,
    }
    jami = sum(narxlar.values())
    qimmat = max(narxlar, key=narxlar.get)
    return jami, qimmat

jami, qimmat = tarif_narxi(10, 200)
print(jami, qimmat)
jami, qimmat = tarif_narxi(2, 50, sms=300)
print(jami, qimmat)`,
          notes: "Javoblar: 70000 internet va 30000 sms. `max(..., key=narxlar.get)` yangi bo'lishi mumkin — oddiy if bilan yechganlarni ham maqtang."
        },
        {
          type: "summary",
          title: "Xulosa: Parametrlar va return",
          points: [
            "**Parametr** — def qatoridagi nom, **argument** — chaqirishdagi qiymat",
            "Standart qiymat: `def f(a, b=10)` — standartlilar oxirida",
            "Kalit so'zli argument: `f(b=2, a=3)` — tartib muhim emas",
            "**print** — ekranga chiqaradi; **return** — qiymatni qaytaradi va uni ishlatish mumkin",
            "`return a, b` — kortej qaytaradi, `x, y = f()` bilan ochiladi",
            "return funksiyani darhol tugatadi; return bo'lmasa — `None`"
          ],
          notes: "Yakuniy savol: 'Kofe avtomatida return nima, print nima?' Har bir o'quvchi bitta javob bersin."
        }
      ],
      homework: [
        { level: "oson", task: "`perimetr(a, b)` va `yuza(a, b)` funksiyalarini yozing (ikkalasi ham return qilsin). 5 va 8 tomonli to'rtburchak uchun natijalarni chiqaring." },
        { level: "o'rta", task: "`soat_format(sekund)` funksiyasini yozing: u sekundlarni soat, daqiqa, sekundga ajratib, **kortej** qaytarsin. Masalan, 3725 → (1, 2, 5). Natijani `01:02:05` ko'rinishida chiqaring (f-string `{x:02}` dan foydalaning)." },
        { level: "qiyin", task: "`parol_kuchi(parol, min_uzunlik=8)` funksiyasini yozing: uzunlik, raqam bor-yo'qligi, katta harf bor-yo'qligi, maxsus belgi bor-yo'qligini tekshirib, 0-4 ball va 'Zaif'/'O'rtacha'/'Kuchli' so'zini kortej qilib qaytarsin. Erta return'dan foydalaning (bo'sh parol uchun darrov (0, 'Zaif'))." }
      ]
    },

    // ==================== 3-DARS ====================
    {
      id: "m6-l3",
      title: "Ko'rinish sohasi va *args/**kwargs",
      duration: 90,
      goals: [
        "Lokal va global o'zgaruvchilar farqini tushunish",
        "Global o'zgaruvchilar nima uchun xavfli ekanini bilish",
        "Ro'yxatni funksiyaga berishda o'zgarish (mutatsiya) xavfini tushunish",
        "*args va **kwargs bilan ixtiyoriy sondagi argument qabul qilish",
        "Docstring va yaxshi nomlash qoidalarini qo'llash"
      ],
      keywords: ["scope", "lokal", "global", "mutatsiya", "*args", "**kwargs", "docstring"],
      plan: [
        { time: 5, label: "Takrorlash: parametr va return" },
        { time: 25, label: "Lokal va global soha, global kalit so'zi" },
        { time: 15, label: "Ro'yxatlarni funksiyaga berish (mutatsiya)" },
        { time: 15, label: "*args va **kwargs" },
        { time: 5, label: "Docstring va nomlash" },
        { time: 20, label: "Amaliy mashqlar va quiz" },
        { time: 5, label: "Xulosa va uyga vazifa" }
      ],
      slides: [
        {
          type: "title",
          title: "Ko'rinish sohasi va *args/**kwargs",
          subtitle: "Qaysi o'zgaruvchi qayerda 'yashaydi'?",
          emoji: "🔭",
          notes: "Boshlash uchun savol: 'Funksiya ichida yaratilgan o'zgaruvchini funksiyadan tashqarida ishlatsa bo'ladimi?' Ovoz berish o'tkazing — javobni darsda topamiz."
        },
        {
          type: "analogy",
          title: "Ko'rinish sohasi — Telegram chatlari",
          emoji: "💬",
          text: "Siz do'stingiz bilan **shaxsiy chat**da yozishgan xabarni sinf guruhidagilar ko'rmaydi — bu **lokal** o'zgaruvchi: faqat funksiya ichida ko'rinadi. **Kanal**dagi postni esa hamma o'qiy oladi — bu **global** o'zgaruvchi. Lekin kanal postini oddiy obunachi o'zgartira olmaydi — buning uchun maxsus admin huquqi (`global` kalit so'zi) kerak. Funksiya tugashi bilan uning shaxsiy chati **o'chib ketadi**.",
          notes: "So'rang: 'Sizning uyingizdagi muzlatkichdagi ovqatni qo'shni ola oladimi?' — boshqa misol. Lokal = uy ichida, global = ko'chada."
        },
        {
          type: "code",
          title: "Lokal o'zgaruvchi faqat funksiya ichida yashaydi",
          code: `def hisobla():
    ball = 100          # lokal o'zgaruvchi
    print("Ichkarida:", ball)

hisobla()

# print(ball)  ->  NameError: name 'ball' is not defined

ball = 5                # bu boshqa, global 'ball'
hisobla()
print("Tashqarida:", ball)`,
          explain: [
            "Funksiya ichida yaratilgan o'zgaruvchi — **lokal**",
            "Funksiya tugashi bilan lokal o'zgaruvchi **yo'qoladi**",
            "Tashqaridagi `ball` va ichkaridagi `ball` — **ikki xil** o'zgaruvchi!",
            "Ichkaridagi `ball = 100` tashqaridagi 5 ga ta'sir qilmaydi"
          ],
          output: `Ichkarida: 100
Ichkarida: 100
Tashqarida: 5`,
          notes: "Izohdagi `print(ball)` ni izohdan chiqarib ishga tushirib ko'rsating — NameError. So'ng qaytaring. 'Bir xil nom — har xil quti' g'oyasini ta'kidlang."
        },
        {
          type: "code",
          title: "Globalni o'qish mumkin",
          code: `maktab = "45-maktab"

def tanishtir(ism):
    print(f"Men {ism}, {maktab} o'quvchisiman")

tanishtir("Otabek")
maktab = "IT-maktab"
tanishtir("Otabek")`,
          explain: [
            "Funksiya ichida global o'zgaruvchini **o'qish** mumkin",
            "Python avval lokaldan, topmasa — globaldan qidiradi",
            "Funksiya globalning **chaqirilgan paytdagi** qiymatini ko'radi",
            "Lekin bu funksiyani tashqi holatga bog'lab qo'yadi — keyingi slayd"
          ],
          output: `Men Otabek, 45-maktab o'quvchisiman
Men Otabek, IT-maktab o'quvchisiman`,
          notes: "Bir xil chaqiruv — har xil natija! Bu ba'zan chalkashlikka olib keladi. So'rang: 'maktabni parametr qilsak yaxshiroq bo'lmaydimi?'"
        },
        {
          type: "compare",
          title: "Globalni o'zgartirishga urinish",
          left: {
            label: "❌ UnboundLocalError",
            code: `ochko = 0

def gol_ur():
    ochko = ochko + 1
    # UnboundLocalError!
    # Python ochko'ni lokal deb
    # hisoblaydi, lekin hali
    # qiymati yo'q

gol_ur()`
          },
          right: {
            label: "✅ Parametr + return",
            code: `ochko = 0

def gol_ur(hisob):
    return hisob + 1

ochko = gol_ur(ochko)
ochko = gol_ur(ochko)
print(ochko)   # 2`
          },
          good: "right",
          notes: "Funksiya ichida o'zgaruvchiga qiymat berilsa (`=`), Python uni lokal deb hisoblaydi. To'g'ri yo'l: qiymatni parametr bilan olib, return bilan qaytarish. Bu eng toza usul."
        },
        {
          type: "code",
          title: "global kalit so'zi (bilib qo'ying, kam ishlating)",
          code: `hayot = 3

def zarba():
    global hayot
    hayot -= 1
    print("Ouch! Qolgan hayot:", hayot)

zarba()
zarba()
print("O'yin oxirida:", hayot)`,
          explain: [
            "`global hayot` — 'men tashqaridagi hayot bilan ishlayman' degani",
            "Endi funksiya global o'zgaruvchini **o'zgartira oladi**",
            "Ishlaydi, lekin professional dasturchilar buni **kam ishlatadi**",
            "Kichik dasturda qulay, katta dasturda — xatolar manbai"
          ],
          output: `Ouch! Qolgan hayot: 2
Ouch! Qolgan hayot: 1
O'yin oxirida: 1`,
          notes: "Ta'kidlang: global — bu 'ruxsat bor, lekin tavsiya etilmaydi'. Keyingi slaydda nima uchun ekanini muhokama qilamiz."
        },
        {
          type: "text",
          title: "Nima uchun global o'zgaruvchilar yomon?",
          body: "Tasavvur qiling: sinfdagi umumiy daftarga hamma yoza oladi. Kimdir xato yozib qo'ysa — **kim** yozganini topish qiyin!",
          points: [
            "**Kuzatish qiyin**: qiymat qaysi funksiyada o'zgarganini topish uchun butun kodni o'qish kerak",
            "**Kutilmagan natija**: bir xil chaqiruv har xil natija berishi mumkin",
            "**Qayta ishlatib bo'lmaydi**: funksiya boshqa dasturga ko'chirilsa, global yo'q — ishlamaydi",
            "**Tekshirish qiyin**: funksiyani alohida sinab bo'lmaydi",
            "Qoida: ma'lumotni **parametr bilan bering, return bilan oling**"
          ],
          notes: "O'quvchilardan so'rang: 'Futbol o'yinida hisobni har kim o'zgartira olsa nima bo'ladi?' — faqat hakam o'zgartiradi. Funksiya ham faqat o'ziga berilgan ma'lumot bilan ishlasin."
        },
        {
          type: "quiz",
          question: "Ekranda nima chiqadi?",
          code: `x = 10

def f():
    x = 20
    return x

print(f(), x)`,
          options: ["20 20", "10 10", "20 10", "UnboundLocalError"],
          answer: 2,
          explain: "Funksiya ichidagi `x = 20` — yangi **lokal** o'zgaruvchi. U globaldagi `x` ga tegmaydi. `f()` 20 qaytaradi, global `x` esa 10 bo'lib qoladi.",
          notes: "UnboundLocalError faqat avval o'qib, keyin yozganda (x = x + 1) chiqadi. Bu yerda faqat yozilmoqda — xato yo'q."
        },
        {
          type: "code",
          title: "Ro'yxatni funksiyaga berish: ehtiyot bo'ling!",
          code: `def bonus_qosh(baholar):
    baholar.append(5)
    return baholar

mening = [4, 3, 5]
yangi = bonus_qosh(mening)

print("yangi: ", yangi)
print("mening:", mening)
print(yangi is mening)`,
          explain: [
            "Ro'yxat funksiyaga **nusxa** sifatida emas, **o'zi** bo'lib beriladi",
            "`.append()` asl ro'yxatni o'zgartiradi — bu **mutatsiya** (yon ta'sir)",
            "`mening` ham o'zgarib ketdi — biz buni kutmagan bo'lishimiz mumkin!",
            "`is` — ikkalasi **bitta** obyekt ekanini ko'rsatadi"
          ],
          output: `yangi:  [4, 3, 5, 5]
mening: [4, 3, 5, 5]
True`,
          notes: "Analogiya: do'stingizga Google Docs havolasini yubordingiz — u o'zgartirsa, sizda ham o'zgaradi. Raqamlar va satrlar bilan bunday bo'lmaydi (ular o'zgarmas), faqat ro'yxat, lug'at, to'plam bilan."
        },
        {
          type: "compare",
          title: "Asl ro'yxatni buzmaslik",
          left: {
            label: "❌ Asl ro'yxat o'zgaradi",
            code: `def tartibla(royxat):
    royxat.sort()
    return royxat

sonlar = [3, 1, 2]
t = tartibla(sonlar)
print(sonlar)  # [1, 2, 3]  — buzildi!`
          },
          right: {
            label: "✅ Nusxa bilan ishlash",
            code: `def tartibla(royxat):
    nusxa = royxat.copy()   # yoki sorted()
    nusxa.sort()
    return nusxa

sonlar = [3, 1, 2]
t = tartibla(sonlar)
print(sonlar)  # [3, 1, 2]  — joyida
print(t)       # [1, 2, 3]`
          },
          good: "right",
          notes: "Qoida: agar funksiya nomi 'o'zgartiraman' demasa, asl ro'yxatni o'zgartirmasin. `.copy()`, `royxat[:]` yoki `sorted()` — uchala usulni eslating."
        },
        {
          type: "code",
          title: "*args — istalgan sondagi argument",
          code: `def yigindi(*sonlar):
    print("Keldi:", sonlar)
    jami = 0
    for s in sonlar:
        jami += s
    return jami

print(yigindi(5, 10))
print(yigindi(1, 2, 3, 4, 5))
print(yigindi())`,
          explain: [
            "`*sonlar` — barcha argumentlarni **kortej**ga yig'adi",
            "2 ta, 5 ta yoki 0 ta argument — hammasi ishlaydi",
            "Nomi istalgan bo'lishi mumkin, muhimi — oldidagi `*` belgisi",
            "An'anaviy nom: `*args` (arguments)"
          ],
          output: `Keldi: (5, 10)
15
Keldi: (1, 2, 3, 4, 5)
15
Keldi: ()
0`,
          notes: "print() ning o'zi ham *args ishlatadi — shuning uchun `print(1, 2, 3, 4)` istalgan sondagi qiymatni qabul qiladi. Bu qiziqarli fakt o'quvchilarga yoqadi."
        },
        {
          type: "code",
          title: "Oddiy parametr + *args",
          code: `def jamoa(nomi, *oyinchilar):
    print(f"{nomi} ({len(oyinchilar)} kishi):")
    for i, o in enumerate(oyinchilar, 1):
        print(f"  {i}. {o}")

jamoa("Paxtakor", "Shomurodov", "Masharipov")
jamoa("Navbahor", "Ali", "Vali", "Sobir")`,
          explain: [
            "Birinchi argument → `nomi`, **qolgan hammasi** → `oyinchilar`",
            "`*args` odatda oddiy parametrlardan **keyin** yoziladi",
            "`oyinchilar` — kortej: `len()`, `for`, indeks ishlaydi",
            "Bu ro'yxat berishdan qulayroq: qavslarsiz chaqiramiz"
          ],
          output: `Paxtakor (2 kishi):
  1. Shomurodov
  2. Masharipov
Navbahor (3 kishi):
  1. Ali
  2. Vali
  3. Sobir`,
          notes: "So'rang: 'jamoa(\"Bunyodkor\") desak nima chiqadi?' — '(0 kishi):' va boshqa hech narsa. Xato bo'lmaydi."
        },
        {
          type: "code",
          title: "**kwargs — istalgan kalit so'zli argumentlar",
          code: `def anketa(ism, **malumot):
    print("Ism:", ism)
    print("malumot =", malumot)
    for kalit, qiymat in malumot.items():
        print(f"  {kalit}: {qiymat}")

anketa("Zarina", yosh=14, sinf="8-B", hobbi="shaxmat")`,
          explain: [
            "`**malumot` — kalit so'zli argumentlarni **lug'at**ga yig'adi",
            "Kalit = argument nomi, qiymat = argument qiymati",
            "An'anaviy nom: `**kwargs` (keyword arguments)",
            "Tartib: `def f(oddiy, *args, **kwargs)`"
          ],
          output: `Ism: Zarina
malumot = {'yosh': 14, 'sinf': '8-B', 'hobbi': 'shaxmat'}
  yosh: 14
  sinf: 8-B
  hobbi: shaxmat`,
          notes: "**kwargs ni qisqa ko'rsating — hozircha tanishish yetarli. Eslab qolish: bitta yulduz — kortej, ikkita yulduz — lug'at."
        },
        {
          type: "quiz",
          question: "`f(1, 2, 3)` chaqirilganda `b` nimaga teng?",
          code: `def f(a, *b):
    print(b)`,
          options: ["2", "[2, 3]", "(1, 2, 3)", "(2, 3)"],
          answer: 3,
          explain: "Birinchi argument `a` ga tushadi (1), qolganlari `b` ga **kortej** sifatida yig'iladi: `(2, 3)`.",
          notes: "Ro'yxat emas, kortej ekanini ta'kidlang — qavslar dumaloq."
        },
        {
          type: "code",
          title: "Docstring — funksiyaning 'yo'riqnomasi'",
          code: `def ortacha_baho(baholar):
    """Baholar ro'yxatining o'rtachasini qaytaradi.

    Ro'yxat bo'sh bo'lsa, 0 qaytaradi.
    """
    if not baholar:
        return 0
    return round(sum(baholar) / len(baholar), 2)

print(ortacha_baho([5, 4, 4, 5, 3]))
print(ortacha_baho([]))
print(ortacha_baho.__doc__.splitlines()[0])`,
          explain: [
            "Docstring — funksiya tanasining **birinchi qatoridagi** uch qo'shtirnoqli matn",
            "U funksiya **nima qilishini** tushuntiradi (qanday — emas)",
            "`help(ortacha_baho)` yoki `.__doc__` bilan o'qish mumkin",
            "Kod muharrirlari sichqoncha olib borilganda docstringni ko'rsatadi"
          ],
          output: `4.2
0
Baholar ro'yxatining o'rtachasini qaytaradi.`,
          notes: "Dori qutisidagi yo'riqnoma analogiyasi: ichida nima borligini bilmasangiz ham, qanday ishlatishni bilasiz. `help(len)` ni ishga tushirib ko'rsatish mumkin."
        },
        {
          type: "text",
          title: "Yaxshi nomlash qoidalari",
          body: "Funksiya nomi — u **nima qilishini** aytib turishi kerak. Yaxshi nom = izoh yozmasa ham tushunarli kod.",
          points: [
            "Nom — **fe'l** bo'lsin: `hisobla_yuza`, `tekshir_parol`, `chiqar_menyu`",
            "`True/False` qaytaradigan funksiya: `is_` / `bormi_` bilan: `is_juft`, `bormi_raqam`",
            "Kichik harflar va `_`: `ortacha_baho` ✅, `OrtachaBaho` ❌, `ob` ❌",
            "`f`, `func1`, `qilish` — yomon nomlar: hech narsa aytmaydi",
            "Bitta funksiya — **bitta vazifa**. Nomida 'va' bo'lsa — ikkiga bo'ling"
          ],
          notes: "Mashq: doskaga yomon nomlarni yozing (`f1`, `x`, `ishla`) va o'quvchilar yaxshiroq nom taklif qilsin."
        },
        {
          type: "task",
          title: "Mashq 1: Istalgan sonli baholarning o'rtachasi",
          task: "`ortacha(*baholar)` funksiyasini yozing: istalgan sondagi bahoni qabul qilib, o'rtachasini (2 xonagacha yaxlitlab) qaytarsin. Agar baho berilmasa — 0 qaytarsin. Docstring ham yozing.",
          starter: `def ortacha(*baholar):
    """..."""
    pass

print(ortacha(5, 4, 3))
print(ortacha(5, 5, 4, 4, 5, 3))
print(ortacha())`,
          hint: "Bo'shlikni tekshirish: `if not baholar: return 0`. Keyin `round(sum(baholar) / len(baholar), 2)`.",
          solution: `def ortacha(*baholar):
    """Istalgan sondagi bahoning o'rtachasini qaytaradi."""
    if not baholar:
        return 0
    return round(sum(baholar) / len(baholar), 2)

print(ortacha(5, 4, 3))
print(ortacha(5, 5, 4, 4, 5, 3))
print(ortacha())`,
          notes: "Javoblar: 4.0, 4.33, 0. Erta return'ni (2-dars) eslating — bo'sh holat birinchi tekshiriladi."
        },
        {
          type: "task",
          title: "Mashq 2: Asl ro'yxatni buzmaydigan filtr",
          task: "`otganlar(ballar, chegara=60)` funksiyasini yozing: u `chegara` dan yuqori yoki teng ballarni **yangi ro'yxat** qilib qaytarsin. Asl ro'yxat o'zgarmasligini isbotlash uchun funksiyadan keyin uni ham chiqaring. Global o'zgaruvchi ishlatmang!",
          starter: `def otganlar(ballar, chegara=60):
    pass

natijalar = [45, 78, 90, 55, 60, 33]
print(otganlar(natijalar))
print(otganlar(natijalar, chegara=80))
print(natijalar)`,
          hint: "Yangi ro'yxat yarating: `yangi = []` va sikl bilan to'ldiring, yoki list comprehension: `[b for b in ballar if b >= chegara]`.",
          solution: `def otganlar(ballar, chegara=60):
    """Chegaradan o'tgan ballarni yangi ro'yxatda qaytaradi."""
    return [b for b in ballar if b >= chegara]

natijalar = [45, 78, 90, 55, 60, 33]
print(otganlar(natijalar))
print(otganlar(natijalar, chegara=80))
print(natijalar)`,
          notes: "Kimdir `.remove()` bilan asl ro'yxatdan o'chirsa — mutatsiya mavzusiga qaytib, nima uchun bu xavfli ekanini muhokama qiling (shuningdek, sikl paytida o'chirish elementlarni o'tkazib yuboradi)."
        },
        {
          type: "summary",
          title: "Xulosa: Ko'rinish sohasi va *args/**kwargs",
          points: [
            "**Lokal** o'zgaruvchi — faqat funksiya ichida, funksiya tugasa yo'qoladi",
            "**Global** — hamma joyda o'qiladi, o'zgartirish uchun `global` kerak (kam ishlating!)",
            "Eng yaxshi yo'l: ma'lumot **parametr** bilan kiradi, **return** bilan chiqadi",
            "Ro'yxat/lug'at funksiyaga **o'zi** beriladi — o'zgarsa, asli ham o'zgaradi",
            "`*args` → kortej, `**kwargs` → lug'at",
            "Docstring va **fe'l** ko'rinishidagi aniq nomlar kodni tushunarli qiladi"
          ],
          notes: "Telegram analogiyasini qayta so'rang: 'Shaxsiy chat — ?, kanal — ?'. Uyga vazifani tushuntiring."
        }
      ],
      homework: [
        { level: "oson", task: "`eng_uzun(*sozlar)` funksiyasini yozing: istalgan sondagi so'zdan eng uzunini qaytarsin. Docstring yozing. 3 xil chaqiruv bilan sinab ko'ring." },
        { level: "o'rta", task: "`savat_jami(**mahsulotlar)` funksiyasini yozing: `savat_jami(non=4000, sut=12000, tuxum=15000)` kabi chaqirilsin va har bir mahsulotni chiqarib, umumiy summani qaytarsin. Global o'zgaruvchi ishlatmang." },
        { level: "qiyin", task: "Ikki versiya yozing: `aralashtir_buzadi(royxat)` — `random.shuffle` bilan asl ro'yxatni aralashtiradi, va `aralashtir_xavfsiz(royxat)` — nusxasini aralashtirib qaytaradi. Har ikkisini chaqirib, asl ro'yxatga nima bo'lganini chiqaring va farqini izohda yozing." }
      ]
    },

    // ==================== 4-DARS ====================
    {
      id: "m6-l4",
      title: "lambda, rekursiya va funksiyalar amaliyoti",
      duration: 90,
      goals: [
        "lambda funksiyani sorted, map, filter bilan chuqur ishlatish",
        "Funksiyalarni qiymat sifatida (o'zgaruvchi, lug'at) ishlatish",
        "Rekursiya tushunchasi: bazaviy holat va rekursiv qadam",
        "RecursionError sababini tushunish",
        "Yordamchi funksiyalardan mini-kutubxona tuzish"
      ],
      keywords: ["lambda", "map", "filter", "sorted", "rekursiya", "bazaviy holat", "RecursionError"],
      plan: [
        { time: 5, label: "Takrorlash: scope, *args" },
        { time: 25, label: "lambda: sorted, map, filter; funksiya qiymat sifatida" },
        { time: 25, label: "Rekursiya: countdown, faktorial, bazaviy holat" },
        { time: 10, label: "Mini-kutubxona: yordamchi funksiyalar" },
        { time: 20, label: "Amaliy mashqlar va quiz" },
        { time: 5, label: "Xulosa va loyiha bilan tanishuv" }
      ],
      slides: [
        {
          type: "title",
          title: "lambda, rekursiya va funksiyalar amaliyoti",
          subtitle: "Funksiyalar bilan ustalik darajasi",
          emoji: "🪆",
          notes: "Bugun moduldagi eng qiziq, lekin eng 'boshni qiynaydigan' mavzular. O'quvchilarni ogohlantiring: rekursiya birinchi marta hech kimga oson tushmaydi — bu normal."
        },
        {
          type: "code",
          title: "lambda — bir qatorli funksiya",
          code: `def kvadrat(x):
    return x * x

kvadrat_l = lambda x: x * x

print(kvadrat(5), kvadrat_l(5))

qosh = lambda a, b: a + b
juftmi = lambda n: n % 2 == 0
print(qosh(3, 4), juftmi(7), juftmi(10))`,
          explain: [
            "`lambda x: x * x` — nomsiz, bir qatorli funksiya",
            "`:` dan keyin — **bitta ifoda**, u avtomatik return qilinadi",
            "`return` so'zi yozilmaydi, ichida `if` bloki, sikl bo'lmaydi",
            "Bir nechta parametr: `lambda a, b: a + b`"
          ],
          output: `25 25
7 False True`,
          notes: "Sorted bilan key sifatida ko'rganimizni eslating. Ta'kidlang: lambda'ni o'zgaruvchiga saqlash — odatda yomon uslub, buning uchun def bor. Lambda boshqa funksiyaga berish uchun yaxshi."
        },
        {
          type: "code",
          title: "sorted + lambda: murakkab tartiblash",
          code: `oquvchilar = [
    ("Ali", 85, 14),
    ("Madina", 92, 13),
    ("Bek", 85, 13),
    ("Zarina", 78, 15),
]

ball_boyicha = sorted(oquvchilar, key=lambda o: o[1], reverse=True)
print(ball_boyicha[0])

ikki_mezon = sorted(oquvchilar, key=lambda o: (-o[1], o[0]))
for o in ikki_mezon:
    print(o[0], o[1])`,
          explain: [
            "`key=lambda o: o[1]` — har bir kortejning 1-indeksi (ball) bo'yicha",
            "`reverse=True` — kamayish tartibida",
            "`(-o[1], o[0])` — avval ball bo'yicha kamayish, teng bo'lsa — ism bo'yicha alifbo",
            "Manfiy belgi — sonlarni teskari tartiblashning hiylasi"
          ],
          output: `('Madina', 92, 13)
Madina 92
Ali 85
Bek 85
Zarina 78`,
          notes: "Reyting jadvali (o'yinlar leaderboard) misolini keltiring. Ikki mezonli tartiblash olimpiada masalalarida juda ko'p uchraydi."
        },
        {
          type: "code",
          title: "map — har bir elementga funksiya qo'llash",
          code: `narxlar = [12000, 8500, 30000]
dollar = list(map(lambda n: round(n / 12800, 2), narxlar))
print(dollar)

sozlar = ["olma", "anor", "uzum"]
print(list(map(str.upper, sozlar)))

kirish = "5 3 8 1"
sonlar = list(map(int, kirish.split()))
print(sonlar, sum(sonlar))`,
          explain: [
            "`map(funksiya, ro'yxat)` — har bir elementga funksiyani qo'llaydi",
            "Natijani ko'rish uchun `list()` ga o'raymiz",
            "Tayyor funksiyalarni ham berish mumkin: `int`, `str.upper` (qavssiz!)",
            "`map(int, input().split())` — olimpiadalardagi mashhur usul"
          ],
          output: `[0.94, 0.66, 2.34]
['OLMA', 'ANOR', 'UZUM']
[5, 3, 8, 1] 17`,
          notes: "Comprehension bilan solishtiring: `[int(x) for x in kirish.split()]` — xuddi shu natija. Ikkala usul ham to'g'ri, comprehension ko'pincha o'qishga osonroq."
        },
        {
          type: "code",
          title: "filter — shartga mos elementlarni tanlash",
          code: `ballar = [45, 78, 90, 55, 60, 33, 100]
otganlar = list(filter(lambda b: b >= 60, ballar))
print(otganlar)

ismlar = ["Ali", "", "Vali", "", "Sardor"]
print(list(filter(None, ismlar)))

def ikki_yoki_uchga(n):
    return n % 2 == 0 or n % 3 == 0

print(list(filter(ikki_yoki_uchga, range(1, 13))))`,
          explain: [
            "`filter(funksiya, ro'yxat)` — funksiya `True` qaytargan elementlarni qoldiradi",
            "lambda o'rniga oddiy def funksiyani ham berish mumkin",
            "`filter(None, ...)` — 'bo'sh' qiymatlarni (`\"\"`, 0) olib tashlaydi",
            "map — **o'zgartiradi**, filter — **tanlaydi**"
          ],
          output: `[78, 90, 60, 100]
['Ali', 'Vali', 'Sardor']
[2, 3, 4, 6, 8, 9, 10, 12]`,
          notes: "Bozor misoli: map — har bir mevani yuvish (hammasi qoladi, lekin o'zgaradi), filter — chirigan mevalarni ajratib tashlash (ba'zilari qoladi)."
        },
        {
          type: "compare",
          title: "lambda'ni haddan oshirmang",
          left: {
            label: "❌ O'qib bo'lmaydigan lambda",
            code: `baho = lambda b: 5 if b >= 86 else (4 if b >= 71 else (3 if b >= 56 else 2))
print(baho(75))`
          },
          right: {
            label: "✅ Murakkab mantiq — def bilan",
            code: `def baho(b):
    """Ballni 5 ballik bahoga o'tkazadi."""
    if b >= 86:
        return 5
    if b >= 71:
        return 4
    if b >= 56:
        return 3
    return 2

print(baho(75))`
          },
          good: "right",
          notes: "Qoida: lambda — qisqa, oddiy, bir martalik ishlar uchun (key=, map, filter). Agar o'qish uchun 5 soniyadan ko'p vaqt kerak bo'lsa — def yozing."
        },
        {
          type: "code",
          title: "Funksiya — bu ham qiymat",
          code: `def qosh(a, b):
    return a + b

def ayir(a, b):
    return a - b

amallar = {"+": qosh, "-": ayir, "*": lambda a, b: a * b}

for belgi in ["+", "-", "*"]:
    funksiya = amallar[belgi]
    print(10, belgi, 3, "=", funksiya(10, 3))

def ikki_marta(f, x):
    return f(f(x))

print(ikki_marta(lambda n: n * 3, 2))`,
          explain: [
            "Funksiya nomi (qavssiz) — funksiyaning o'zi, uni lug'atga solish mumkin",
            "`amallar[belgi]` — funksiyani oladi, `(10, 3)` — uni chaqiradi",
            "Funksiyani boshqa funksiyaga **argument** sifatida berish mumkin",
            "`sorted(key=...)`, `map`, `filter` aynan shunday ishlaydi!"
          ],
          output: `10 + 3 = 13
10 - 3 = 7
10 * 3 = 30
18`,
          notes: "1-darsdagi 'qavssiz nom' slaydini eslating. ikki_marta: 2*3=6, 6*3=18. Bu kalkulyator usuli if-elif zanjiridan ancha chiroyli."
        },
        {
          type: "analogy",
          title: "Rekursiya — matryoshka qo'g'irchog'i",
          emoji: "🪆",
          text: "Matryoshkani ochasiz — ichida kichikroq matryoshka. Uni ochasiz — yana kichikroq... Va nihoyat **eng kichigi** — u ochilmaydi. Bu **bazaviy holat**: to'xtash nuqtasi. **Rekursiya** — funksiyaning **o'zini o'zi chaqirishi**. Har safar masala kichrayadi, va eng kichik holatga yetganda to'xtaydi. Yana bir misol: maktab navbatida 'Men nechanchiman?' deb so'rasangiz, oldingizdagidan so'raysiz, u o'z oldidagidan... birinchi turgan '1' deydi — va javob orqaga qaytib keladi.",
          notes: "Navbat misolini sinfda jonli o'ynab ko'rsating: 5 o'quvchini qatorga turg'izing, oxirgisi 'nechanchiman?' deb oldingiga so'raydi. Bu rekursiyani juda yaxshi tushuntiradi (3-4 daqiqa)."
        },
        {
          type: "code",
          title: "Rekursiya: teskari sanash",
          code: `def sanoq(n):
    if n == 0:              # bazaviy holat
        print("Start! 🚀")
        return
    print(n)
    sanoq(n - 1)            # rekursiv qadam

sanoq(5)`,
          explain: [
            "**Bazaviy holat**: `n == 0` — funksiya o'zini boshqa chaqirmaydi",
            "**Rekursiv qadam**: `sanoq(n - 1)` — masalani kichraytirib, o'zini chaqiradi",
            "Har chaqiruvda `n` 1 taga kamayadi: 5 → 4 → 3 → 2 → 1 → 0",
            "Har bir rekursiya shu **ikki qism**dan iborat bo'lishi shart"
          ],
          output: `5
4
3
2
1
Start! 🚀`,
          notes: "Bu misolni for sikl bilan ham yozish mumkinligini ko'rsating. Rekursiya — siklning alternativasi, ba'zi masalalarda (daraxtlar, papkalar) ancha qulayroq."
        },
        {
          type: "code",
          title: "Faktorial: rekursiya qanday 'qaytadi'",
          code: `def faktorial(n):
    if n <= 1:
        return 1
    return n * faktorial(n - 1)

print(faktorial(4))
print(faktorial(10))

# faktorial(4)
# = 4 * faktorial(3)
# = 4 * 3 * faktorial(2)
# = 4 * 3 * 2 * faktorial(1)
# = 4 * 3 * 2 * 1 = 24`,
          explain: [
            "`5! = 5 × 4 × 3 × 2 × 1`, shuningdek `n! = n × (n-1)!`",
            "Bazaviy holat: `1! = 1` (va `0! = 1`)",
            "Har bir chaqiruv javobni **kutib turadi**, keyin ko'paytiradi",
            "Javoblar ichkaridan tashqariga 'qaytib' keladi: 1 → 2 → 6 → 24"
          ],
          output: `24
3628800`,
          notes: "Doskada zinapoya chizing: pastga tushish (chaqiruvlar) va yuqoriga chiqish (return'lar). Bu vizualizatsiya ko'pchilikka tushunishga yordam beradi."
        },
        {
          type: "compare",
          title: "Bazaviy holatsiz rekursiya — cheksiz!",
          left: {
            label: "❌ Bazaviy holat yo'q",
            code: `def sanoq(n):
    print(n)
    sanoq(n - 1)

sanoq(3)
# 3, 2, 1, 0, -1, -2, ... -990
# RecursionError: maximum recursion
# depth exceeded`
          },
          right: {
            label: "✅ Bazaviy holat bor",
            code: `def sanoq(n):
    if n < 1:
        return
    print(n)
    sanoq(n - 1)

sanoq(3)
# 3, 2, 1`
          },
          good: "right",
          notes: "Python taxminan 1000 ta ichma-ich chaqiruvdan keyin to'xtatadi — bu RecursionError. Bu kompyuterni 'osilib qolish'dan saqlaydi. Yana bir xato: bazaviy holat bor, lekin qadam unga yaqinlashmaydi (masalan, n + 1)."
        },
        {
          type: "quiz",
          question: "Bu funksiya `f(4)` uchun nima qaytaradi?",
          code: `def f(n):
    if n == 0:
        return 0
    return n + f(n - 1)

print(f(4))`,
          options: ["4", "10", "24", "RecursionError"],
          answer: 1,
          explain: "f(4) = 4 + f(3) = 4 + 3 + f(2) = 4 + 3 + 2 + f(1) = 4 + 3 + 2 + 1 + f(0) = 4 + 3 + 2 + 1 + 0 = **10**. Bu 1 dan n gacha sonlar yig'indisi.",
          notes: "24 tanlaganlar faktorial bilan adashtirgan — + va * farqini ko'rsating. Doskada zanjirni yozib chiqing."
        },
        {
          type: "code",
          title: "Mini-kutubxona: yordamchi funksiyalar",
          code: `def is_prime(n):
    """n tub son bo'lsa True qaytaradi."""
    if n < 2:
        return False
    for d in range(2, int(n ** 0.5) + 1):
        if n % d == 0:
            return False
    return True

def digit_sum(n):
    """Son raqamlari yig'indisi."""
    return sum(int(r) for r in str(abs(n)))

print([n for n in range(1, 30) if is_prime(n)])
print(digit_sum(2026), digit_sum(-99))`,
          explain: [
            "`is_prime` — erta return: bo'luvchi topilsa, darhol `False`",
            "`n ** 0.5` — ildiz: undan katta bo'luvchini tekshirish shart emas",
            "`digit_sum` — sonni satrga aylantirib, har bir raqamni qo'shadi",
            "Kichik, tekshirilgan funksiyalar — katta dasturning 'g'ishtlari'"
          ],
          output: `[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
10 18`,
          notes: "Ildiz hiylasini tushuntiring: 36 = 6*6, agar 6 gacha bo'luvchi topilmasa, keyin ham topilmaydi. Bu funksiyalar keyingi modullarda va olimpiadalarda qayta-qayta kerak bo'ladi."
        },
        {
          type: "quiz",
          question: "Natija qanday bo'ladi?",
          code: `sonlar = [1, 2, 3, 4, 5, 6]
x = list(map(lambda n: n * n, filter(lambda n: n % 2, sonlar)))
print(x)`,
          options: ["[4, 16, 36]", "[1, 4, 9, 16, 25, 36]", "[1, 9, 25]", "[1, 3, 5]"],
          answer: 2,
          explain: "Avval `filter`: `n % 2` toq sonlar uchun 1 (True) → [1, 3, 5]. Keyin `map` ularni kvadratga oshiradi → **[1, 9, 25]**.",
          notes: "Ichkaridan tashqariga o'qishni o'rgating: avval filter, keyin map. `n % 2` — 0 bo'lsa False, 1 bo'lsa True."
        },
        {
          type: "task",
          title: "Mashq 1: Rekursiv funksiyalar",
          task: "Ikki rekursiv funksiya yozing: 1) `daraja(a, n)` — `a` ning `n`-darajasini `**` ishlatmasdan hisoblasin (`a^0 = 1`). 2) `teskari(s)` — satrni teskari qilib qaytarsin (bo'sh satr — bazaviy holat). Sinab ko'ring: `daraja(2, 10)`, `teskari(\"python\")`.",
          starter: `def daraja(a, n):
    # bazaviy holat?
    pass

def teskari(s):
    # bazaviy holat?
    pass

print(daraja(2, 10))
print(teskari("python"))`,
          hint: "`daraja`: `if n == 0: return 1`, aks holda `a * daraja(a, n - 1)`. `teskari`: `if s == \"\": return \"\"`, aks holda `teskari(s[1:]) + s[0]`.",
          solution: `def daraja(a, n):
    if n == 0:
        return 1
    return a * daraja(a, n - 1)

def teskari(s):
    if s == "":
        return ""
    return teskari(s[1:]) + s[0]

print(daraja(2, 10))
print(teskari("python"))`,
          notes: "Javoblar: 1024, nohtyp. `teskari` qiyinroq — zanjirni doskada ko'rsating: teskari(\"abc\") = teskari(\"bc\") + \"a\" = (teskari(\"c\") + \"b\") + \"a\" = \"cba\"."
        },
        {
          type: "task",
          title: "Mashq 2: O'z kutubxonangiz",
          task: "Uchta yordamchi funksiya yozing: `is_palindrom(s)` — katta-kichik harfga e'tibor bermay, so'z teskarisiga tengmi; `unlilar_soni(s)` — satrdagi unli harflar (a, e, i, o, u) soni; `eng_kop(royxat)` — ro'yxatda eng ko'p uchragan element. So'ng `filter` va `sorted`+`lambda` yordamida berilgan so'zlardan palindromlarni ajrating va so'zlarni unlilar soni bo'yicha tartiblang.",
          starter: `def is_palindrom(s):
    pass

def unlilar_soni(s):
    pass

def eng_kop(royxat):
    pass

sozlar = ["Kiyik", "olma", "Qoshiq", "anor", "Tut", "aka"]
print(list(filter(is_palindrom, sozlar)))
print(sorted(sozlar, key=lambda s: unlilar_soni(s)))
print(eng_kop([3, 1, 3, 2, 3, 1]))`,
          hint: "Palindrom: `s = s.lower()` va `s == s[::-1]`. Unlilar: `sum(1 for h in s.lower() if h in \"aeiou\")`. Eng ko'p: `max(royxat, key=royxat.count)`.",
          solution: `def is_palindrom(s):
    s = s.lower()
    return s == s[::-1]

def unlilar_soni(s):
    return sum(1 for h in s.lower() if h in "aeiou")

def eng_kop(royxat):
    return max(royxat, key=royxat.count)

sozlar = ["Kiyik", "olma", "Qoshiq", "anor", "Tut", "aka"]
print(list(filter(is_palindrom, sozlar)))
print(sorted(sozlar, key=lambda s: unlilar_soni(s)))
print(eng_kop([3, 1, 3, 2, 3, 1]))`,
          notes: "`key=lambda s: unlilar_soni(s)` o'rniga to'g'ridan-to'g'ri `key=unlilar_soni` yozish mumkinligini so'rang — funksiya qiymat sifatida! Tez bitirganlar `is_prime` va `digit_sum` ni ham qo'shsin."
        },
        {
          type: "summary",
          title: "Xulosa: lambda, rekursiya, amaliyot",
          points: [
            "`lambda x: ifoda` — qisqa nomsiz funksiya, `sorted`, `map`, `filter` uchun ideal",
            "`map` — har bir elementni **o'zgartiradi**, `filter` — **tanlaydi**",
            "Funksiya — qiymat: lug'atga solish va argument qilib berish mumkin",
            "Rekursiya = **bazaviy holat** + **rekursiv qadam** (masalani kichraytirish)",
            "Bazaviy holat bo'lmasa — `RecursionError`",
            "Kichik yordamchi funksiyalar — katta dasturning g'ishtlari. Endi loyiha vaqti!"
          ],
          notes: "Modul loyihasi — 'Bank hisobi simulyatori'ni tanishtiring: butun dastur funksiyalardan quriladi. Talablarni o'qib chiqing va kim qaysi bonus qismni qilishini so'rang."
        }
      ],
      homework: [
        { level: "oson", task: "`map` va `lambda` yordamida Selsiy darajalaridagi ro'yxatni `[0, 25, 37, 100]` Farengeytga o'tkazing (`F = C * 9 / 5 + 32`). `filter` bilan 50°F dan issiqlarini ajrating." },
        { level: "o'rta", task: "Rekursiv `fibonachchi(n)` funksiyasini yozing (f(0)=0, f(1)=1, f(n)=f(n-1)+f(n-2)) va birinchi 15 ta fibonachchi sonini chiqaring. `fibonachchi(35)` nima uchun sekin ishlashini izohda tushuntiring." },
        { level: "qiyin", task: "`matematika_kutubxonasi` yarating: `is_prime`, `digit_sum`, `ekub(a, b)` (rekursiv: `ekub(a, b) = ekub(b, a % b)`, `b == 0` da `a`), `ekuk(a, b)`, `bolinuvchilar(n)` funksiyalari. Har biriga docstring yozing va har birini kamida 2 ta misolda tekshiring." }
      ]
    }
  ],

  project: {
    title: "Bank hisobi simulyatori",
    description: "Butunlay funksiyalardan qurilgan konsol bank dasturi: hisobga pul qo'yish, yechish (tekshiruvlar bilan), balansni ko'rish va barcha amallar tarixi. Asosiy menyu ham alohida funksiya. Klasslar, fayllar va try-except ishlatilmaydi — faqat bu modulda o'rgangan narsalar.",
    requirements: [
      "Hisob ma'lumotlari lug'atda saqlansin: egasi, balans, tarix (ro'yxat) — va funksiyalarga **parametr** sifatida berilsin (global o'zgaruvchisiz)",
      "`pul_qoyish(hisob, summa)` — summa musbat bo'lsagina qo'shsin, natija xabarini **return** qilsin",
      "`pul_yechish(hisob, summa)` — summa musbat va balansdan oshmasligini tekshirsin (erta return bilan)",
      "`balans(hisob)` — joriy balansni qaytarsin; `tarix_korsat(hisob)` — barcha amallarni raqamlab chiqarsin",
      "Har bir muvaffaqiyatli amal tarixga `(\"kirim\", summa)` yoki `(\"chiqim\", summa)` kortej sifatida yozilsin",
      "Raqam kiritishni tekshiruvchi `son_kirit(xabar)` yordamchi funksiyasi (`isdigit()` bilan, noto'g'ri bo'lsa qayta so'rasin)",
      "`menyu()` funksiyasi menyuni chiqarsin, `main()` funksiyasi `while` sikl bilan dasturni boshqarsin",
      "Har bir funksiyaga qisqa docstring yozilsin"
    ],
    bonus: [
      "PIN-kod: dastur boshida 3 marta urinish imkoniyati, keyin bloklash",
      "`statistika(hisob)` — jami kirim, jami chiqim va eng katta amalni kortej qilib qaytarsin (`filter`, `lambda`, `max` bilan)",
      "Kunlik yechish limiti (masalan, 2 000 000 so'm) — standart qiymatli parametr: `pul_yechish(hisob, summa, limit=2000000)`",
      "Ikkinchi hisob yaratib, `otkazma(kimdan, kimga, summa)` funksiyasini qo'shing",
      "Muqobil loyiha: xuddi shu tamoyillar bilan matnli RPG jang o'yini (`hujum`, `davolanish`, `holat_korsat`, `random` bilan zarar)"
    ],
    example: `def hisob_yarat(egasi, boshlangich=0):
    """Yangi hisob lug'atini qaytaradi."""
    return {"egasi": egasi, "balans": boshlangich, "tarix": []}


def pul_qoyish(hisob, summa):
    """Hisobga pul qo'yadi va xabar qaytaradi."""
    if summa <= 0:
        return "Xato: summa musbat bo'lishi kerak!"
    hisob["balans"] += summa
    hisob["tarix"].append(("kirim", summa))
    return f"{summa} so'm qo'yildi."


def pul_yechish(hisob, summa, limit=2000000):
    """Hisobdan pul yechadi, barcha shartlarni tekshiradi."""
    if summa <= 0:
        return "Xato: summa musbat bo'lishi kerak!"
    if summa > limit:
        return f"Xato: bir martada {limit} so'mdan ko'p yechib bo'lmaydi!"
    if summa > hisob["balans"]:
        return "Xato: hisobda mablag' yetarli emas!"
    hisob["balans"] -= summa
    hisob["tarix"].append(("chiqim", summa))
    return f"{summa} so'm yechildi."


def balans(hisob):
    """Joriy balansni qaytaradi."""
    return hisob["balans"]


def tarix_korsat(hisob):
    """Barcha amallarni raqamlab chiqaradi."""
    if not hisob["tarix"]:
        print("Hali amallar yo'q.")
        return
    for i, (tur, summa) in enumerate(hisob["tarix"], 1):
        belgi = "+" if tur == "kirim" else "-"
        print(f"{i}. {tur:7} {belgi}{summa} so'm")


def statistika(hisob):
    """Jami kirim, jami chiqim va eng katta amalni qaytaradi."""
    tarix = hisob["tarix"]
    kirimlar = list(filter(lambda a: a[0] == "kirim", tarix))
    chiqimlar = list(filter(lambda a: a[0] == "chiqim", tarix))
    jami_kirim = sum(map(lambda a: a[1], kirimlar))
    jami_chiqim = sum(map(lambda a: a[1], chiqimlar))
    eng_katta = max(tarix, key=lambda a: a[1]) if tarix else None
    return jami_kirim, jami_chiqim, eng_katta


def son_kirit(xabar):
    """Foydalanuvchidan musbat butun son so'raydi."""
    while True:
        matn = input(xabar).strip()
        if matn.isdigit():
            return int(matn)
        print("Iltimos, faqat raqam kiriting!")


def menyu(hisob):
    """Asosiy menyuni chiqaradi."""
    print()
    print(f"===== BANK: {hisob['egasi']} =====")
    print("1. Balans")
    print("2. Pul qo'yish")
    print("3. Pul yechish")
    print("4. Tarix")
    print("5. Statistika")
    print("0. Chiqish")


def main():
    """Dasturni boshqaruvchi asosiy funksiya."""
    ism = input("Ismingiz: ").strip() or "Mijoz"
    hisob = hisob_yarat(ism, 100000)
    while True:
        menyu(hisob)
        tanlov = input("Tanlov: ").strip()
        if tanlov == "1":
            print(f"Balans: {balans(hisob)} so'm")
        elif tanlov == "2":
            print(pul_qoyish(hisob, son_kirit("Summa: ")))
        elif tanlov == "3":
            print(pul_yechish(hisob, son_kirit("Summa: ")))
        elif tanlov == "4":
            tarix_korsat(hisob)
        elif tanlov == "5":
            kirim, chiqim, eng = statistika(hisob)
            print(f"Jami kirim: {kirim}, jami chiqim: {chiqim}")
            print("Eng katta amal:", eng)
        elif tanlov == "0":
            print(f"Xayr, {hisob['egasi']}! Balansingiz: {balans(hisob)} so'm")
            break
        else:
            print("Bunday tanlov yo'q!")


main()`
  },

  test: [
    {
      q: "Funksiyani yaratish uchun qaysi kalit so'z ishlatiladi?",
      options: ["function", "def", "func", "lambda"],
      answer: 1
    },
    {
      q: "Bu kod nima chiqaradi?",
      code: `def f():
    print("A")

print("B")`,
      options: ["A B", "B", "A", "Xato"],
      answer: 1
    },
    {
      q: "Bu kod nima chiqaradi?",
      code: `def f(x):
    print(x * 2)

y = f(5)
print(y)`,
      options: ["10\n10", "10", "10\nNone", "None"],
      answer: 2
    },
    {
      q: "Quyidagilardan qaysi biri to'g'ri funksiya ta'rifi?",
      options: [
        "def f(a=1, b):",
        "def f(b, a=1):",
        "def f(a=1 b=2):",
        "def f[a, b]:"
      ],
      answer: 1
    },
    {
      q: "Bu kod nima chiqaradi?",
      code: `def f(a, b=3):
    return a * b

print(f(2), f(2, 5), f(b=1, a=4))`,
      options: ["6 10 4", "6 7 4", "5 10 4", "6 10 Xato"],
      answer: 0
    },
    {
      q: "`return a, b` qanday turdagi qiymat qaytaradi?",
      options: ["Ro'yxat (list)", "Lug'at (dict)", "Faqat a ni", "Kortej (tuple)"],
      answer: 3
    },
    {
      q: "Bu kod nima chiqaradi?",
      code: `x = 5

def f():
    x = 100

f()
print(x)`,
      options: ["100", "UnboundLocalError", "5", "None"],
      answer: 2
    },
    {
      q: "Bu kod nima chiqaradi?",
      code: `def qosh(royxat):
    royxat.append(0)

a = [1, 2]
qosh(a)
print(a)`,
      options: ["[1, 2]", "[1, 2, 0]", "[0, 1, 2]", "None"],
      answer: 1
    },
    {
      q: "Bu kod nima chiqaradi?",
      code: `def f(*sonlar):
    return len(sonlar)

print(f(4, 8, 15, 16))`,
      options: ["4", "43", "1", "(4, 8, 15, 16)"],
      answer: 0
    },
    {
      q: "Bazaviy holati bo'lmagan rekursiv funksiya chaqirilsa nima bo'ladi?",
      options: [
        "Funksiya 0 qaytaradi",
        "Dastur abadiy ishlaydi va hech qachon to'xtamaydi",
        "Funksiya bir marta ishlab to'xtaydi",
        "RecursionError xatosi chiqadi"
      ],
      answer: 3
    }
  ]
});
