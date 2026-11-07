window.COURSE_MODULES = window.COURSE_MODULES || [];
COURSE_MODULES.push({
  id: 3,
  month: 2,
  weeks: "5-6 hafta",
  title: "Tsikllar",
  icon: "🔁",
  description: "Kompyuterning eng kuchli tomoni — bir ishni minglab marta charchamay takrorlash. Bu modulda while va for tsikllari, break/continue, ichma-ich tsikllar va sonlar bilan ishlaydigan klassik algoritmlarni o'rganamiz.",
  outcomes: [
    "while tsikli yordamida shart bajarilguncha amalni takrorlay oladi",
    "for va range() bilan aniq sonli takrorlashlarni yoza oladi",
    "break, continue va tsikl else qismidan to'g'ri foydalana oladi",
    "Tsiklni qadamma-qadam jadval orqali kuzatib (trace qilib) xatoni topa oladi",
    "Ichma-ich tsikllar bilan shakllar va jadvallar chiqara oladi",
    "Raqamlarni sanash, sonni teskari aylantirish, max/min topish, FizzBuzz kabi algoritmlarni yoza oladi",
    "random.randint yordamida 'Sonni top' o'yinini yarata oladi"
  ],
  lessons: [
    // ===================== 1-DARS =====================
    {
      id: "m3-l1",
      title: "while tsikli",
      duration: 90,
      goals: [
        "Tsikl nima uchun kerakligini tushunish",
        "while sintaksisini va hisoblagich (counter) bilan ishlashni o'rganish",
        "Cheksiz tsikl xavfini bilish va uni Ctrl+C bilan to'xtatish",
        "Yig'indi to'plash (akkumulyator) usulini qo'llash",
        "Kiritishni tekshiruvchi tsikl yozish",
        "Tsiklni jadval orqali qadamma-qadam kuzatish"
      ],
      keywords: ["while", "tsikl", "hisoblagich", "cheksiz tsikl", "Ctrl+C", "akkumulyator", "trace"],
      plan: [
        { time: 10, label: "Takrorlash: if/elif/else, match-case" },
        { time: 15, label: "Nega tsikl kerak? while sintaksisi" },
        { time: 15, label: "Trace jadvali va cheksiz tsikl" },
        { time: 15, label: "Yig'indi to'plash va kiritishni tekshirish" },
        { time: 10, label: "Quiz savollari" },
        { time: 20, label: "Amaliy mashqlar" },
        { time: 5, label: "Xulosa va uyga vazifa" }
      ],
      slides: [
        {
          type: "title",
          title: "while tsikli",
          subtitle: "Kompyuterga bir ishni qayta-qayta bajarishni o'rgatamiz",
          emoji: "🔁",
          notes: "Darsni savol bilan boshlang: 'Kim telefonida budilnikni 5 daqiqaga kechiktirgan?' Budilnik ham tsikl: siz to'xtatmaguningizcha qayta-qayta chalinadi."
        },
        {
          type: "text",
          title: "Nega tsikl kerak?",
          body: "Tasavvur qiling: ekranga 100 marta **Salom!** chiqarish kerak. 100 qator `print()` yozasizmi? Agar 1 000 000 marta bo'lsa-chi?",
          points: [
            "Dasturlashda **bir xil ishni ko'p marta** bajarish juda ko'p uchraydi",
            "**Tsikl** (loop) — kod blokini qayta-qayta bajaradigan konstruksiya",
            "Python'da 2 xil tsikl bor: `while` va `for`",
            "Bugun `while` — **shart rost (True) ekan, takrorla** degani",
            "Oltin qoida: kodni nusxalab ko'paytirish — yomon belgi, tsikl — yaxshi belgi"
          ],
          notes: "Doskaga 5 ta bir xil print yozing va so'rang: 'Agar 1000 ta kerak bo'lsa nima qilamiz?' O'quvchilar o'zlari 'takrorlash kerak' degan fikrga kelsin."
        },
        {
          type: "analogy",
          title: "Futbol mashg'uloti",
          emoji: "⚽",
          text: "Murabbiy aytadi: **'Maydonni 5 marta aylanib yuguringlar!'** Siz har aylanadan keyin barmog'ingizni bukib sanaysiz: 1, 2, 3... Har safar o'zingizdan so'raysiz: **'Hali 5 ga yetmadimi?'** Yetmagan bo'lsa — yana yugurasiz. Yetgan bo'lsa — to'xtaysiz. Mana shu `while` tsikli! Barmoqlar — **hisoblagich (counter)**, 'hali 5 ga yetmadimi?' — **shart**, yugurish — **tsikl tanasi**."
          ,
          notes: "O'quvchilardan so'rang: agar siz aylanalarni sanashni unutsangiz nima bo'ladi? Javob: cheksiz yugurasiz — bu cheksiz tsiklga ko'prik bo'ladi."
        },
        {
          type: "text",
          title: "while sintaksisi",
          body: "`while` so'zidan keyin **shart**, oxirida **ikki nuqta** `:`, tanasi esa **4 ta probel** bilan ichkariga suriladi — xuddi `if` dagidek.",
          points: [
            "`while shart:` — shart True bo'lsa, tana bajariladi",
            "Tana tugagach Python **yana tepaga qaytib** shartni tekshiradi",
            "Shart False bo'lishi bilan tsikl tugaydi va keyingi qatorga o'tiladi",
            "`if` bir marta tekshiradi, `while` esa **qayta-qayta** tekshiradi",
            "Tana ichida shartga ta'sir qiluvchi narsa **albatta o'zgarishi** kerak (masalan, `i += 1`)"
          ],
          notes: "if va while ni yonma-yon yozib ko'rsating: farqi faqat bitta so'z, lekin if bir marta, while ko'p marta ishlaydi. Indentatsiya xatosi eng ko'p uchraydigan xato ekanini eslating."
        },
        {
          type: "code",
          title: "Birinchi tsikl: hisoblagich",
          code: `i = 1
while i <= 5:
    print("Salom!", i)
    i += 1
print("Tsikl tugadi")`,
          explain: [
            "`i = 1` — hisoblagich boshlang'ich qiymati",
            "`i <= 5` — shart: i 5 dan oshmaguncha davom etamiz",
            "`i += 1` — har aylanishda i bittaga oshadi (`i = i + 1` bilan bir xil)",
            "Oxirgi `print` tsikldan tashqarida — u faqat bir marta, tsikl tugagach ishlaydi"
          ],
          output: `Salom! 1
Salom! 2
Salom! 3
Salom! 4
Salom! 5
Tsikl tugadi`,
          notes: "Kodni ishga tushirishdan oldin o'quvchilardan natijani taxmin qilishni so'rang. Keyin 5 ni 10 ga o'zgartirib, kod qanchalik qisqa qolganini ko'rsating."
        },
        {
          type: "text",
          title: "Tsiklni kuzatish (trace jadvali)",
          body: "Dasturchi tsiklni 'kompyuter kabi' qadamma-qadam kuzatadi. Yuqoridagi kod uchun jadval:",
          points: [
            "**1-qadam:** i = 1 → `1 <= 5` True → chiqaradi `Salom! 1` → i = 2",
            "**2-qadam:** i = 2 → `2 <= 5` True → chiqaradi `Salom! 2` → i = 3",
            "**3-qadam:** i = 3 → `3 <= 5` True → chiqaradi `Salom! 3` → i = 4",
            "**4-qadam:** i = 4 → `4 <= 5` True → chiqaradi `Salom! 4` → i = 5",
            "**5-qadam:** i = 5 → `5 <= 5` True → chiqaradi `Salom! 5` → i = 6",
            "**6-qadam:** i = 6 → `6 <= 5` **False** → tsikl tugadi, `Tsikl tugadi` chiqadi",
            "Xulosa: tana **5 marta**, shart esa **6 marta** tekshirildi!"
          ],
          notes: "Doskada 3 ustunli jadval chizing: i | shart | ekranga. Bir o'quvchini 'kompyuter' qilib, jadvalni u bilan birga to'ldiring. Bu ko'nikma keyingi barcha darslarda kerak bo'ladi."
        },
        {
          type: "compare",
          title: "Cheksiz tsikl: eng mashhur xato",
          left: {
            label: "❌ Xato: i o'zgarmaydi",
            code: `i = 1
while i <= 5:
    print("Salom!", i)
# i += 1 unutildi!
# i doim 1, shart doim True
# Dastur hech qachon tugamaydi`
          },
          right: {
            label: "✅ To'g'ri: i har safar oshadi",
            code: `i = 1
while i <= 5:
    print("Salom!", i)
    i += 1
# 5 marta ishlaydi va tugaydi`
          },
          good: "right",
          notes: "So'rang: chap koddagi i qiymati 100-qadamda nechaga teng? (Hamon 1!) Yana bir keng tarqalgan xato: i += 1 ni tsikldan tashqariga (indentatsiyasiz) yozib qo'yish — natija ham cheksiz tsikl."
        },
        {
          type: "text",
          title: "Cheksiz tsikl va Ctrl+C",
          body: "Agar shart **hech qachon False bo'lmasa**, tsikl abadiy aylanadi — kompyuter 'qotib' qolgandek bo'ladi.",
          points: [
            "Sabablar: hisoblagichni oshirishni unutish, noto'g'ri yo'nalishda o'zgartirish (`i -= 1` o'rniga `i += 1`), noto'g'ri shart",
            "Terminalda to'xtatish: **Ctrl+C** tugmalarini bosing → `KeyboardInterrupt`",
            "Brauzerda (bizning platformada) — sahifadagi **To'xtatish** tugmasi yoki sahifani yangilash",
            "Tekshirish usuli: o'zingizdan so'rang — **'Shartdagi o'zgaruvchi tana ichida o'zgaryaptimi va to'g'ri tomonga ketyaptimi?'**",
            "Ba'zan cheksiz tsikl ataylab yoziladi (`while True`) — buni 3-darsda o'rganamiz"
          ],
          notes: "Terminalda while True: print('salom') ni ishga tushirib, Ctrl+C bilan to'xtatib ko'rsating — bolalar uchun bu juda esda qoladigan lahza. 1 daqiqadan oshirmang."
        },
        {
          type: "code",
          title: "Yig'indi to'plash (akkumulyator)",
          code: `yigindi = 0
son = 1
while son <= 10:
    yigindi += son
    son += 1
print("1 dan 10 gacha yig'indi:", yigindi)`,
          explain: [
            "`yigindi = 0` — 'bo'sh cho'ntak', boshida hech narsa yo'q",
            "Har aylanishda joriy son cho'ntakka qo'shiladi: 0+1, 1+2, 3+3, 6+4 ...",
            "Akkumulyator **tsikldan oldin** e'lon qilinadi — tsikl ichida emas!",
            "Natijani tsikl **tugagandan keyin** chiqaramiz"
          ],
          output: `1 dan 10 gacha yig'indi: 55`,
          notes: "Jadval bilan birinchi 4 qadamni trace qiling: yigindi 0→1→3→6→10. So'rang: 'yigindi = 0 ni tsikl ichiga qo'ysak nima bo'ladi?' (Har safar nolga tushib ketadi, oxirida 10 chiqadi.)"
        },
        {
          type: "code",
          title: "Teskari sanoq: raketa starti",
          code: `soniya = 5
while soniya > 0:
    print(soniya, "...")
    soniya -= 1
print("Start! 🚀")`,
          explain: [
            "Hisoblagich faqat oshmaydi — kamayishi ham mumkin: `soniya -= 1`",
            "Shart `soniya > 0`: 0 ga yetganda tsikl to'xtaydi",
            "Agar shartni `soniya >= 0` qilsak, `0 ...` ham chiqadi"
          ],
          output: `5 ...
4 ...
3 ...
2 ...
1 ...
Start! 🚀`,
          notes: "Sinf bilan birga ovoz chiqarib sanang. Keyin so'rang: soniya -= 1 o'rniga soniya += 1 yozsak nima bo'ladi? (Cheksiz tsikl — son o'sib boraveradi.)"
        },
        {
          type: "quiz",
          question: "Bu kod ekranga nimani chiqaradi?",
          code: `x = 10
while x > 0:
    x -= 3
print(x)`,
          options: ["1", "0", "-2", "-3"],
          answer: 2,
          explain: "Trace: 10 → 7 → 4 → 1 → -2. x = 1 bo'lganda shart hali True, shuning uchun yana 3 ayiriladi va x = -2 bo'ladi. Endi -2 > 0 False — tsikl tugaydi.",
          notes: "Ko'pchilik '1' deydi — chunki oxirgi qadamni unutadi. Jadval chizib tekshirishni talab qiling."
        },
        {
          type: "code",
          title: "Kiritishni tekshiruvchi tsikl",
          code: `yosh = int(input("Yoshingizni kiriting (1-120): "))
while yosh < 1 or yosh > 120:
    print("Noto'g'ri yosh! Qaytadan urinib ko'ring.")
    yosh = int(input("Yoshingizni kiriting (1-120): "))
print(f"Rahmat! Siz {yosh} yoshdasiz.")`,
          explain: [
            "Avval bir marta so'raymiz, keyin noto'g'ri bo'lsa — **qayta-qayta** so'raymiz",
            "Shart **xato holatni** tasvirlaydi: 'yosh noto'g'ri ekan, so'rayver'",
            "`or` — ikki xato holatdan biri bo'lsa ham yetarli",
            "Natijada tsikldan keyin `yosh` albatta to'g'ri bo'ladi",
            "Namuna: foydalanuvchi 150, -5, keyin 15 kiritdi"
          ],
          output: `Yoshingizni kiriting (1-120): 150
Noto'g'ri yosh! Qaytadan urinib ko'ring.
Yoshingizni kiriting (1-120): -5
Noto'g'ri yosh! Qaytadan urinib ko'ring.
Yoshingizni kiriting (1-120): 15
Rahmat! Siz 15 yoshdasiz.`,
          notes: "Bu usul Telegram ro'yxatdan o'tishda telefon raqamini qayta so'rashga o'xshaydi. Ishga tushirib, o'quvchilarga ataylab xato qiymat kiritishni taklif qiling."
        },
        {
          type: "quiz",
          question: "Bu tsikl tanasi necha marta bajariladi?",
          code: `n = 0
while n < 20:
    n += 4`,
          options: ["4", "5", "6", "Cheksiz"],
          answer: 1,
          explain: "n qiymatlari: 0 → 4 → 8 → 12 → 16 → 20. Tana 5 marta bajarildi; n = 20 bo'lganda `20 < 20` False.",
          notes: "Javobni bilganlar barmoq bilan ko'rsatsin (4, 5 yoki 6). Keyin birga trace qiling."
        },
        {
          type: "task",
          title: "Mashq 1: Juft sonlar",
          task: "while tsikli yordamida 2 dan 20 gacha bo'lgan barcha juft sonlarni bitta qatorda chiqaring, so'ng ularning yig'indisini chiqaring.",
          starter: `son = 2
yigindi = 0
while ...:
    # sonni chiqaring va yig'indiga qo'shing
    ...
print()
print("Yig'indi:", yigindi)`,
          hint: "Hisoblagichni 1 ga emas, 2 ga oshiring: `son += 2`. Bir qatorda chiqarish uchun `print(son, end=\" \")` dan foydalaning.",
          solution: `son = 2
yigindi = 0
while son <= 20:
    print(son, end=" ")
    yigindi += son
    son += 2
print()
print("Yig'indi:", yigindi)`,
          notes: "end=\" \" parametrini qisqacha tushuntiring: print odatda yangi qatorga o'tadi, end bilan buni o'zgartiramiz. Kutilgan yig'indi: 110."
        },
        {
          type: "task",
          title: "Mashq 2: Bankdagi omonat",
          task: "Bankka 1 000 000 so'm qo'ydingiz. Har yili omonat 10% ga oshadi (butun so'mlarda hisoblang: `pul += pul * 10 // 100`). Necha yildan keyin pul 2 000 000 so'mdan oshadi yoki teng bo'ladi? Har yilgi summani ham chiqaring.",
          starter: `pul = 1000000
yil = 0
while ...:
    ...
print(f"{yil} yildan keyin pul {pul} so'm bo'ladi")`,
          hint: "Shart: pul hali 2 000 000 dan kichik ekan, davom et. Tana ichida pulni oshiring va yil sanagichini 1 ga oshiring.",
          solution: `pul = 1000000
yil = 0
while pul < 2000000:
    pul += pul * 10 // 100
    yil += 1
    print(f"{yil}-yil: {pul} so'm")
print(f"{yil} yildan keyin pul {pul} so'm bo'ladi")`,
          notes: "Bu yerda biz necha marta takrorlashni oldindan bilmaymiz — while aynan shunday holatlar uchun. Javob: 8 yil, 2143588 so'm."
        },
        {
          type: "task",
          title: "Mashq 3: PIN-kod",
          task: "Foydalanuvchidan PIN-kod so'rang. To'g'ri PIN — 2024. To'g'ri kiritilmaguncha qayta so'rang va har safar 'Noto'g'ri PIN!' deb yozing. Oxirida nechta urinishda topganini chiqaring.",
          starter: `pin = input("PIN kiriting: ")
urinish = 1
while ...:
    ...
print(...)`,
          hint: "Shart: `pin != \"2024\"`. Tana ichida xabar chiqaring, qayta input oling va urinishni 1 ga oshiring.",
          solution: `pin = input("PIN kiriting: ")
urinish = 1
while pin != "2024":
    print("Noto'g'ri PIN!")
    pin = input("PIN kiriting: ")
    urinish += 1
print(f"Xush kelibsiz! Urinishlar soni: {urinish}")`,
          notes: "Tez bajarganlarga qo'shimcha: PIN faqat 3 marta kiritilishi mumkin bo'lsin (bu keyingi darslardagi break mavzusiga ko'prik)."
        },
        {
          type: "summary",
          title: "Xulosa: while tsikli",
          points: [
            "`while shart:` — shart True ekan, tana qayta-qayta bajariladi",
            "Hisoblagich: boshlang'ich qiymat → shart → o'zgartirish (`i += 1`)",
            "Shartdagi o'zgaruvchi o'zgarmasa — **cheksiz tsikl**, to'xtatish: **Ctrl+C**",
            "Akkumulyator (`yigindi = 0`) tsikldan **oldin** yaratiladi, natija tsikldan **keyin** chiqariladi",
            "while kiritishni tekshirish uchun juda qulay: xato ekan — qayta so'ra",
            "Trace jadvali — tsiklni tushunish va xato topishning eng yaxshi usuli"
          ],
          notes: "Chiqish savoli: 'while va if ning asosiy farqi nima?' 2-3 o'quvchidan javob oling, so'ng uyga vazifani tushuntiring."
        }
      ],
      homework: [
        { level: "oson", task: "while yordamida 1 dan 50 gacha bo'lgan 5 ga karrali sonlarni (5, 10, 15, ... 50) chiqaring." },
        { level: "o'rta", task: "Foydalanuvchidan n sonini so'rang va 1 dan n gacha bo'lgan sonlarning kvadratlari yig'indisini hisoblang (1² + 2² + ... + n²). Masalan, n=3 bo'lsa natija 14." },
        { level: "qiyin", task: "Foydalanuvchi 0 kiritmaguncha sonlar so'rang. 0 kiritilganda: nechta son kiritilgani, ularning yig'indisi va o'rtacha qiymatini chiqaring. Hech son kiritilmagan bo'lsa (birinchisi 0), 'Son kiritilmadi' deb yozing." }
      ]
    },

    // ===================== 2-DARS =====================
    {
      id: "m3-l2",
      title: "for va range()",
      duration: 90,
      goals: [
        "for tsikli va range(n) bilan ishlashni o'rganish",
        "range(start, stop, step) ning uchta shaklini tushunish",
        "Teskari sanash va qadam bilan sanashni bajarish",
        "Satrdagi har bir belgi bo'yicha aylanish",
        "for yordamida yig'indi, ko'paytma va ko'paytirish jadvalini hisoblash",
        "Qachon for, qachon while ishlatishni farqlash"
      ],
      keywords: ["for", "range", "start", "stop", "step", "iteratsiya", "end"],
      plan: [
        { time: 10, label: "Takrorlash: while, trace jadvali" },
        { time: 15, label: "for va range(n)" },
        { time: 15, label: "range(start, stop, step), teskari sanash" },
        { time: 10, label: "Satr bo'ylab aylanish" },
        { time: 10, label: "Yig'indi, ko'paytma, ko'paytirish jadvali" },
        { time: 25, label: "Quiz va amaliy mashqlar" },
        { time: 5, label: "Xulosa va uyga vazifa" }
      ],
      slides: [
        {
          type: "title",
          title: "for va range()",
          subtitle: "Aniq sonli takrorlashlar uchun eng qulay tsikl",
          emoji: "🔢",
          notes: "Takrorlash: o'tgan darsdagi 1 dan 5 gacha chiqaruvchi while kodini doskaga yozdiring. Bugun xuddi shu ishni 2 qatorda qilishni o'rganamiz deb qiziqtiring."
        },
        {
          type: "analogy",
          title: "Davomat jurnali",
          emoji: "📋",
          text: "O'qituvchi davomat qilayotganda jurnaldagi ro'yxat bo'yicha **har bir o'quvchini birma-bir** chaqiradi: 1-o'quvchi, 2-o'quvchi, ... oxirgisigacha. U 'hali tugamadimi?' deb shart tekshirib o'tirmaydi — ro'yxat tugashi bilan to'xtaydi. `for` tsikli ham shunday: u **ketma-ketlikning har bir elementini** navbat bilan oladi va ketma-ketlik tugaganda o'zi to'xtaydi. Hisoblagichni oshirishni unutib qo'yish xavfi yo'q!",
          notes: "So'rang: while da qaysi 3 qadamni o'zimiz yozardik? (boshlang'ich qiymat, shart, oshirish). for bularning hammasini o'zi bajaradi."
        },
        {
          type: "text",
          title: "for sintaksisi va range(n)",
          body: "`for o'zgaruvchi in ketma_ketlik:` — ketma-ketlikning har bir elementi navbat bilan o'zgaruvchiga yoziladi va tana bajariladi.",
          points: [
            "`range(n)` — 0 dan **n-1 gacha** sonlar ketma-ketligi: `range(5)` → 0, 1, 2, 3, 4",
            "n ning o'zi **kirmaydi**! Lekin jami roppa-rosa **n ta** son bo'ladi",
            "O'zgaruvchi nomi ixtiyoriy: `i`, `son`, `qadam`...",
            "Hisoblagichni oshirish shart emas — for buni o'zi qiladi",
            "Shu sababli for da cheksiz tsikl deyarli bo'lmaydi"
          ],
          notes: "Eng ko'p savol: 'Nega 0 dan boshlanadi va n kirmaydi?' Javob: dasturlashda sanash 0 dan boshlanadi, range(5) esa 'roppa-rosa 5 marta' degani. Buni bir necha marta takrorlang."
        },
        {
          type: "code",
          title: "range(n) amalda",
          code: `for i in range(5):
    print("Qadam", i)
print("Tayyor!")`,
          explain: [
            "Tana 5 marta bajariladi, i qiymatlari: 0, 1, 2, 3, 4",
            "5 ning o'zi chiqmaydi — `stop` qiymati kirmaydi",
            "Xuddi shu ishni while bilan yozish uchun 4 qator kerak edi"
          ],
          output: `Qadam 0
Qadam 1
Qadam 2
Qadam 3
Qadam 4
Tayyor!`,
          notes: "Shu kodni while varianti bilan solishtiring (doskada yonma-yon). for qisqaroq va xavfsizroq ekanini ta'kidlang."
        },
        {
          type: "text",
          title: "range() ning 3 ta shakli",
          body: "range ga 1, 2 yoki 3 ta son berish mumkin:",
          points: [
            "`range(stop)` → 0 dan stop-1 gacha. `range(4)` → 0 1 2 3",
            "`range(start, stop)` → start dan stop-1 gacha. `range(3, 7)` → 3 4 5 6",
            "`range(start, stop, step)` → step qadam bilan. `range(1, 10, 3)` → 1 4 7",
            "Manfiy qadam — **teskari sanash**: `range(5, 0, -1)` → 5 4 3 2 1",
            "**start kiradi, stop kirmaydi** — buni doim yodda tuting!",
            "Agar start dan stop ga qadam bilan yetib bo'lmasa — range bo'sh bo'ladi"
          ],
          notes: "Har bir shaklni doskada sonlar o'qi chizib ko'rsating: start ga dumaloq to'liq nuqta, stop ga bo'sh doiracha. Bu matematikadagi oraliqlar bilan bog'lashga yordam beradi."
        },
        {
          type: "code",
          title: "start, stop va step",
          code: `for i in range(1, 6):
    print(i, end=" ")
print()

for i in range(2, 11, 2):
    print(i, end=" ")
print()

for i in range(10, 0, -3):
    print(i, end=" ")
print()`,
          explain: [
            "`end=\" \"` — print yangi qatorga o'tmasdan, oxiriga probel qo'yadi",
            "Bo'sh `print()` — keyingi qatorga o'tish uchun",
            "`range(2, 11, 2)` — 2 dan 10 gacha juft sonlar (11 kirmaydi)",
            "`range(10, 0, -3)` — 10, 7, 4, 1 (keyingisi -2 bo'lardi, u 0 dan o'tib ketadi)"
          ],
          output: `1 2 3 4 5
2 4 6 8 10
10 7 4 1`,
          notes: "Ishga tushirishdan oldin har bir qatorni o'quvchilar daftarga yozsin. Uchinchi qator eng qiyini — tekshirib ko'ring, kim to'g'ri topdi."
        },
        {
          type: "quiz",
          question: "Bu kod nimani chiqaradi?",
          code: `for i in range(3, 8):
    print(i, end=" ")`,
          options: ["3 4 5 6 7 8", "3 4 5 6 7", "4 5 6 7 8", "3 5 7"],
          answer: 1,
          explain: "start (3) kiradi, stop (8) kirmaydi. Qadam berilmagan — demak 1. Natija: 3 4 5 6 7.",
          notes: "8 ni ham kiritganlar ko'p bo'ladi — 'stop kirmaydi' qoidasini yana bir bor ovoz chiqarib aytdiring."
        },
        {
          type: "code",
          title: "Teskari sanoq: Yangi yil",
          code: `for s in range(5, 0, -1):
    print(s)
print("Yangi yil muborak! 🎉")`,
          explain: [
            "start = 5, stop = 0, step = -1",
            "Sonlar kamayib boradi: 5, 4, 3, 2, 1",
            "0 kirmaydi — stop har doim tashqarida qoladi",
            "0 ham chiqishi kerak bo'lsa: `range(5, -1, -1)`"
          ],
          output: `5
4
3
2
1
Yangi yil muborak! 🎉`,
          notes: "O'tgan darsdagi raketa (while) misolini eslating va solishtiring: for varianti qisqaroq. So'rang: 0 ni ham chiqarish uchun nimani o'zgartiramiz?"
        },
        {
          type: "code",
          title: "Satr bo'ylab aylanish",
          code: `soz = "Python"
for harf in soz:
    print(harf, end=" | ")
print()

sanoq = 0
for harf in "Samarqand":
    if harf == "a":
        sanoq += 1
print("'a' harfi", sanoq, "marta uchradi")`,
          explain: [
            "for faqat sonlar bilan emas — **satrdagi har bir belgi** bo'yicha ham aylanadi",
            "`harf` navbat bilan 'P', 'y', 't', 'h', 'o', 'n' qiymatlarini oladi",
            "Ikkinchi qism: for ichida `if` — shartga mos belgilarni sanaymiz",
            "Katta 'S' bilan kichik 's' — boshqa-boshqa belgilar!"
          ],
          output: `P | y | t | h | o | n |
'a' harfi 3 marta uchradi`,
          notes: "O'quvchilardan o'z ismini yozib, undagi ma'lum harflarni sanashni so'rang. Masalan: 'Abdulla' so'zida 'a' nechta? (Katta A sanalmaydi — 1 ta!) Bu katta-kichik harf farqini yaxshi ko'rsatadi."
        },
        {
          type: "code",
          title: "Yig'indi va ko'paytma",
          code: `n = 5
yigindi = 0
kopaytma = 1
for i in range(1, n + 1):
    yigindi += i
    kopaytma *= i
print(f"Yig'indi: {yigindi}")
print(f"Ko'paytma (5!): {kopaytma}")`,
          explain: [
            "`range(1, n + 1)` — 1 dan n gacha (n ham kirishi uchun +1)",
            "Yig'indi uchun boshlang'ich qiymat **0**",
            "Ko'paytma uchun boshlang'ich qiymat **1** (0 bo'lsa, natija doim 0!)",
            "1·2·3·4·5 = 120 — buni **faktorial** deyiladi va 5! deb yoziladi"
          ],
          output: `Yig'indi: 15
Ko'paytma (5!): 120`,
          notes: "So'rang: kopaytma = 0 qilsak nima bo'ladi? O'quvchilar o'zlari sinab ko'rsin. Keyin n = 10 qilib, 10! qanchalik katta son ekanini ko'rsating (3628800)."
        },
        {
          type: "compare",
          title: "1 dan 10 gacha: chegara xatosi",
          left: {
            label: "❌ 10 chiqmaydi",
            code: `for i in range(1, 10):
    print(i)
# 1 dan 9 gacha chiqadi!`
          },
          right: {
            label: "✅ 10 ham chiqadi",
            code: `for i in range(1, 11):
    print(i)
# 1 dan 10 gacha chiqadi`
          },
          good: "right",
          notes: "Bu 'birga xato' (off-by-one) deyiladi — hatto tajribali dasturchilar ham qiladi. Qoida: oxirgi son kirishi uchun stop = oxirgi son + 1."
        },
        {
          type: "code",
          title: "Ko'paytirish jadvali",
          code: `son = 7
for i in range(1, 11):
    print(f"{son} x {i} = {son * i}")`,
          explain: [
            "i 1 dan 10 gacha o'zgaradi",
            "f-satr ichida hisoblash ham mumkin: `{son * i}`",
            "son ni o'zgartirib, istalgan jadvalni olish mumkin",
            "`son = int(input(...))` qilsak — interaktiv jadval bo'ladi"
          ],
          output: `7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70`,
          notes: "Boshlang'ich sinfda jadvalni yod olgansiz, endi kompyuter 2 qatorda yozadi! O'quvchilardan 13 ning jadvalini chiqarishni so'rang."
        },
        {
          type: "text",
          title: "for yoki while — qachon qaysi biri?",
          body: "Ikkalasi ham takrorlaydi, lekin har birining o'z o'rni bor:",
          points: [
            "**for** — necha marta takrorlash **oldindan ma'lum**: 10 marta, 1 dan n gacha, satrning har bir harfi",
            "**while** — takrorlash soni **noma'lum**, shartga bog'liq: to'g'ri parol kiritilguncha, pul yetguncha",
            "for misollar: ko'paytirish jadvali, 1..100 yig'indisi, so'zdagi harflarni sanash",
            "while misollar: kiritishni tekshirish, o'yin 'yutguncha', omonat 2 baravar bo'lguncha",
            "Har qanday for ni while bilan yozish mumkin, lekin for odatda **qisqa va xavfsiz**"
          ],
          notes: "Sinfga 3-4 vaziyat ayting va 'for yoki while?' deb so'rang: 'Telegram'da yangi xabar kelguncha kutish' (while), '30 ta o'quvchiga baho qo'yish' (for), 'to'g'ri javob berguncha savol berish' (while)."
        },
        {
          type: "quiz",
          question: "`*` belgisi necha marta chiqadi?",
          code: `for i in range(0, 20, 5):
    print("*")`,
          options: ["3", "4", "5", "20"],
          answer: 1,
          explain: "i qiymatlari: 0, 5, 10, 15. Keyingisi 20 bo'lardi, lekin stop kirmaydi. Jami 4 marta.",
          notes: "Qiyinlanganlarga maslahat: qiymatlarni daftarga birma-bir yozib chiqing."
        },
        {
          type: "quiz",
          question: "Bu kod nimani chiqaradi?",
          code: `for i in range(5, 0):
    print(i)`,
          options: ["5 4 3 2 1", "0 1 2 3 4 5", "Hech narsa chiqmaydi", "Xato beradi"],
          answer: 2,
          explain: "Qadam berilmagan, ya'ni +1. 5 dan oshib borib 0 ga hech qachon yetib bo'lmaydi — range bo'sh. Teskari sanash uchun `range(5, 0, -1)` kerak.",
          notes: "Bu tuzoqli savol. Xato bermasligi o'quvchilarni hayron qoldiradi — Python shunchaki tsiklni bir marta ham bajarmaydi."
        },
        {
          type: "task",
          title: "Mashq 1: Toq sonlar yig'indisi",
          task: "for va range() yordamida 1 dan 99 gacha bo'lgan barcha toq sonlar yig'indisini hisoblang va nechta toq son borligini ham chiqaring.",
          starter: `yigindi = 0
soni = 0
for i in range(...):
    ...
print("Toq sonlar soni:", soni)
print("Yig'indi:", yigindi)`,
          hint: "range ga qadam bering: `range(1, 100, 2)` — 1, 3, 5, ..., 99. if kerak emas!",
          solution: `yigindi = 0
soni = 0
for i in range(1, 100, 2):
    yigindi += i
    soni += 1
print("Toq sonlar soni:", soni)
print("Yig'indi:", yigindi)`,
          notes: "Ba'zilar range(1, 100) va if i % 2 == 1 bilan yechadi — bu ham to'g'ri, ikkala usulni maqtang. Javob: 50 ta, yig'indi 2500."
        },
        {
          type: "task",
          title: "Mashq 2: Unli harflarni sanash",
          task: "Foydalanuvchidan so'z so'rang va undagi unli harflar (a, e, i, o, u) sonini chiqaring. Masalan: 'dasturlash' → 3 ta unli.",
          starter: `soz = input("So'z kiriting: ")
unlilar = 0
for harf in soz:
    ...
print(...)`,
          hint: "`if harf in \"aeiou\":` — harf shu satr ichida bormi, tekshiradi. Katta harflar uchun `soz.lower()` dan foydalaning.",
          solution: `soz = input("So'z kiriting: ")
unlilar = 0
for harf in soz.lower():
    if harf in "aeiou":
        unlilar += 1
print(f"'{soz}' so'zida {unlilar} ta unli harf bor")`,
          notes: "in operatorini qisqacha tushuntiring: 'a' in 'salom' → True. Tez bajarganlarga: undosh harflarni ham sanash vazifasini bering."
        },
        {
          type: "summary",
          title: "Xulosa: for va range()",
          points: [
            "`for x in ketma_ketlik:` — har bir element uchun tana bajariladi",
            "`range(n)` → 0..n-1, `range(a, b)` → a..b-1, `range(a, b, q)` → q qadam bilan",
            "**start kiradi, stop kirmaydi**; manfiy qadam — teskari sanash",
            "for satrdagi har bir belgi bo'yicha ham aylana oladi",
            "Yig'indi 0 dan, ko'paytma 1 dan boshlanadi",
            "Soni ma'lum — **for**, shartga bog'liq — **while**"
          ],
          notes: "Chiqish savoli: range(10, 0, -2) qaysi sonlarni beradi? (10 8 6 4 2). To'g'ri javob berganlar darsdan chiqishi mumkin :)"
        }
      ],
      homework: [
        { level: "oson", task: "for yordamida 100 dan 0 gacha 10 qadam bilan teskari sanang: 100 90 80 ... 0." },
        { level: "o'rta", task: "Foydalanuvchidan n sonini so'rang va n! (faktorial) ni hisoblang. Keyin 1 dan n gacha bo'lgan sonlardan 3 ga bo'linadiganlari yig'indisini ham chiqaring." },
        { level: "qiyin", task: "Foydalanuvchidan gap so'rang. Gapdagi harflar, probellar va raqamlar sonini alohida sanang. Maslahat: `belgi.isalpha()`, `belgi.isdigit()` va `belgi == \" \"` tekshiruvlaridan foydalaning." }
      ]
    },

    // ===================== 3-DARS =====================
    {
      id: "m3-l3",
      title: "break, continue va else",
      duration: 90,
      goals: [
        "break bilan tsiklni muddatidan oldin to'xtatish",
        "continue bilan joriy qadamni o'tkazib yuborish",
        "while True + break namunasini qo'llash",
        "Tsiklning else qismi qachon ishlashini tushunish",
        "3 urinishli parol tizimini yozish",
        "Birinchi bo'luvchini topish va sonni tub ekanini tekshirish"
      ],
      keywords: ["break", "continue", "while True", "for-else", "tub son", "bo'luvchi"],
      plan: [
        { time: 10, label: "Takrorlash: for, range, while" },
        { time: 15, label: "break va continue" },
        { time: 15, label: "Tsikl else qismi, tub son tekshiruvi" },
        { time: 15, label: "while True + break, parol tizimi" },
        { time: 10, label: "Quiz savollari" },
        { time: 20, label: "Amaliy mashqlar" },
        { time: 5, label: "Xulosa va uyga vazifa" }
      ],
      slides: [
        {
          type: "title",
          title: "break, continue va else",
          subtitle: "Tsiklni boshqarish: to'xtatish, o'tkazib yuborish va yakunlash",
          emoji: "🛑",
          notes: "Takrorlash uchun tezkor savol: range(2, 10, 3) qaysi sonlarni beradi? (2 5 8). So'ng: 'Agar tsiklni o'rtasida to'xtatish kerak bo'lsa-chi?' deb mavzuga o'ting."
        },
        {
          type: "analogy",
          title: "Bozorda tarvuz tanlash",
          emoji: "🍉",
          text: "Bozorda tarvuzlarni birma-bir tekshirasiz. **Chirigan tarvuzni** ko'rsangiz — uni o'tkazib yuborasiz va keyingisiga o'tasiz: bu `continue`. **Zo'r, pishgan tarvuzni** topdingizmi — qolganlarini tekshirib o'tirmaysiz, sotib olib uyga ketasiz: bu `break`. Agar barcha tarvuzlarni ko'rib chiqib, birortasi ham yoqmasa, 'bugun tarvuz olmadim' deysiz: bu tsiklning `else` qismi — u faqat qidiruv **break siz** oxirigacha borganda ishlaydi.",
          notes: "Bu o'xshatishni dars davomida bir necha marta eslatib turing. So'rang: tarvuz topilmasa, qaysi qism ishlaydi?"
        },
        {
          type: "text",
          title: "break — tsikldan chiqish",
          body: "`break` uchragan zahoti tsikl **darhol to'xtaydi**, qolgan qadamlar bajarilmaydi va dastur tsikldan keyingi qatorga o'tadi.",
          points: [
            "Odatda `if` ichida ishlatiladi: 'kerakli narsa topildi — to'xta'",
            "for va while ning ikkalasida ham ishlaydi",
            "break dan keyingi qatorlar (tsikl ichida) bajarilmaydi",
            "Faqat **eng ichki** tsikldan chiqaradi (ichma-ich tsikllarda muhim)"
          ],
          notes: "Doskada yo'l chizing: tsikl — aylana yo'l, break — undan chiqib ketuvchi 'avariya chiqishi'."
        },
        {
          type: "code",
          title: "break: birinchisini topish",
          code: `for son in range(50, 100):
    if son % 7 == 0:
        print("Birinchi 7 ga bo'linadigan son:", son)
        break
    print(son, "- mos emas")
print("Qidiruv tugadi")`,
          explain: [
            "50 dan boshlab sonlarni tekshiramiz",
            "`son % 7 == 0` — qoldiqsiz bo'linadi",
            "56 topilishi bilan break — 57..99 umuman tekshirilmaydi",
            "Topilmagan sonlar uchun '- mos emas' chiqadi"
          ],
          output: `50 - mos emas
51 - mos emas
52 - mos emas
53 - mos emas
54 - mos emas
55 - mos emas
Birinchi 7 ga bo'linadigan son: 56
Qidiruv tugadi`,
          notes: "So'rang: break ni olib tashlasak nima bo'ladi? (63, 70, 77... hammasi chiqadi va 'mos emas' qatorlari ham). Sinab ko'rsating."
        },
        {
          type: "code",
          title: "continue — o'tkazib yuborish",
          code: `for i in range(1, 11):
    if i % 3 == 0:
        continue
    print(i, end=" ")
print()
print("3 ga karralilar o'tkazib yuborildi")`,
          explain: [
            "`continue` — joriy qadamning **qolgan qismini** tashlab, keyingi qadamga o'tadi",
            "Tsikl to'xtamaydi! Faqat bitta aylanish qisqaradi",
            "3, 6, 9 uchun `print` bajarilmadi",
            "while da continue ishlatganda ehtiyot bo'ling: hisoblagich continue dan **oldin** oshishi kerak"
          ],
          output: `1 2 4 5 7 8 10
3 ga karralilar o'tkazib yuborildi`,
          notes: "while + continue tuzog'ini ta'kidlang: agar i += 1 continue dan keyin bo'lsa, cheksiz tsikl hosil bo'ladi. Buni keyingi slayddagi jadvalda ham ko'rsating."
        },
        {
          type: "text",
          title: "break va continue farqi",
          body: "Ikkalasi ham tsikl ichida `if` bilan birga ishlatiladi, lekin vazifasi butunlay boshqa:",
          points: [
            "**break** — 'Bas, yetadi!' — tsikl butunlay tugaydi",
            "**continue** — 'Bunisi keraksiz, keyingisiga o't!' — tsikl davom etadi",
            "break dan keyin tsiklning `else` qismi **ishlamaydi**, continue dan keyin esa ishlaydi",
            "Telegram misoli: spam xabarni o'chirib keyingisini o'qish — continue; kerakli xabarni topib qidiruvni yopish — break",
            "Ortiqcha continue kodni chalkashtirishi mumkin — ba'zan oddiy `if` yetarli"
          ],
          notes: "Jismoniy mashq: o'quvchilar navbat bilan 1 dan 20 gacha sanaydi, 4 ga karrali sonda 'o'tdim' deyiladi (continue), 15 ga yetganda 'stop' (break)."
        },
        {
          type: "quiz",
          question: "Bu kod nimani chiqaradi?",
          code: `for i in range(1, 10):
    if i == 5:
        break
    print(i, end=" ")`,
          options: ["1 2 3 4 5", "1 2 3 4", "1 2 3 4 6 7 8 9", "5"],
          answer: 1,
          explain: "i = 5 bo'lganda break print dan oldin ishlaydi, shuning uchun 5 chiqmaydi va tsikl tugaydi. Natija: 1 2 3 4.",
          notes: "Keyin so'rang: break o'rniga continue bo'lsa-chi? (1 2 3 4 6 7 8 9 — uchinchi variant)."
        },
        {
          type: "text",
          title: "Tsiklning else qismi",
          body: "Python'da for va while ga ham `else` yozish mumkin! U **tsikl break siz, tabiiy tugaganda** bajariladi.",
          points: [
            "Tsikl oxirigacha bordi (break bo'lmadi) → `else` ishlaydi",
            "Tsikl break bilan to'xtadi → `else` **o'tkazib yuboriladi**",
            "`else` tsikl bilan **bir xil chekinishda** yoziladi (if bilan emas!)",
            "Asosiy qo'llanilishi: **qidiruv** — 'topilmadi' xabarini chiqarish",
            "Uni 'nobreak' (break bo'lmasa) deb o'qish oson"
          ],
          notes: "Bu Python'ning o'ziga xos xususiyati — ko'p tillarda yo'q. Indentatsiyani alohida ko'rsating: else for bilan bir ustunda turadi."
        },
        {
          type: "code",
          title: "Tub sonni tekshirish (for-else)",
          code: `n = 91
for d in range(2, n):
    if n % d == 0:
        print(n, "tub emas, bo'luvchisi:", d)
        break
else:
    print(n, "- tub son!")

n = 29
for d in range(2, n):
    if n % d == 0:
        print(n, "tub emas, bo'luvchisi:", d)
        break
else:
    print(n, "- tub son!")`,
          explain: [
            "Tub son — faqat 1 ga va o'ziga bo'linadigan son (2, 3, 5, 7, 11, ...)",
            "2 dan n-1 gacha bo'luvchi qidiramiz",
            "91 = 7 · 13 → birinchi bo'luvchi 7 topildi, break, else ishlamaydi",
            "29 uchun bo'luvchi topilmadi → tsikl oxirigacha bordi → else ishladi"
          ],
          output: `91 tub emas, bo'luvchisi: 7
29 - tub son!`,
          notes: "Ko'pchilik 91 ni tub deb o'ylaydi — kodni ishga tushirishdan oldin sinfdan so'rang. Bu kod bir xil qismi takrorlanadi, kelajakda funksiyalar bilan buni qisqartiramiz deb aytib qo'ying."
        },
        {
          type: "compare",
          title: "Tub son tekshiruvi: xato va to'g'ri",
          left: {
            label: "❌ Har qadamda xulosa",
            code: `n = 9
for d in range(2, n):
    if n % d == 0:
        print("Tub emas")
    else:
        print("Tub son")
# 7 qator chiqadi:
# Tub son, Tub emas, Tub son...`
          },
          right: {
            label: "✅ Xulosa oxirida",
            code: `n = 9
for d in range(2, n):
    if n % d == 0:
        print("Tub emas")
        break
else:
    print("Tub son")
# Faqat: Tub emas`
          },
          good: "right",
          notes: "Chapdagi xato juda keng tarqalgan: bitta d ga bo'linmasligi sonni tub qilmaydi! 'Tub son' degan xulosani faqat BARCHA bo'luvchilar tekshirilgandan keyin qilish mumkin."
        },
        {
          type: "text",
          title: "while True + break namunasi",
          body: "Ba'zan to'xtash sharti tsiklning **o'rtasida** ma'lum bo'ladi. Shunda ataylab cheksiz tsikl yozamiz va ichida break qo'yamiz.",
          points: [
            "`while True:` — shart doim rost, tsikl o'z-o'zidan tugamaydi",
            "Ichida albatta `if ...: break` bo'lishi shart — aks holda haqiqiy cheksiz tsikl!",
            "Qulay holatlar: menyu, o'yin, 'to'g'ri kiritilguncha so'rash'",
            "Afzalligi: `input` ni ikki joyda yozish shart emas (1-darsdagi misolga solishtiring)"
          ],
          notes: "1-darsdagi yosh tekshiruvchi kodni eslating: u yerda input ikki marta yozilgan edi. while True bilan bitta input yetarli."
        },
        {
          type: "code",
          title: "while True: pul yig'ish",
          code: `pul = 0
kun = 0
while True:
    kun += 1
    pul += 15000
    if pul >= 100000:
        break
print(f"{kun} kunda {pul} so'm yig'ildi")
print("Yangi futbol to'pi sotib olsa bo'ladi! ⚽")`,
          explain: [
            "Har kuni 15 000 so'm yig'amiz, maqsad — 100 000 so'm",
            "Shart tsikl ichida tekshiriladi va bajarilganda break",
            "7-kun: 105 000 ≥ 100 000 → break",
            "Shu masalani `while pul < 100000:` bilan ham yozish mumkin edi"
          ],
          output: `7 kunda 105000 so'm yig'ildi
Yangi futbol to'pi sotib olsa bo'ladi! ⚽`,
          notes: "O'quvchilardan shu kodni oddiy while shart bilan qayta yozishni so'rang (1 daqiqa). Ikkalasi ham to'g'ri — qaysi biri tushunarliroq ekanini muhokama qiling."
        },
        {
          type: "code",
          title: "3 urinishli parol",
          code: `togri_parol = "python123"
urinish = 0
while urinish < 3:
    parol = input("Parolni kiriting: ")
    urinish += 1
    if parol == togri_parol:
        print("Xush kelibsiz! ✅")
        break
    print(f"Noto'g'ri! Qolgan urinish: {3 - urinish}")
else:
    print("Akkaunt bloklandi! 🔒")`,
          explain: [
            "Ko'pi bilan 3 marta so'raymiz (`urinish < 3`)",
            "To'g'ri parol → break → else ishlamaydi",
            "3 urinish tugasa → tsikl tabiiy tugadi → else: bloklash",
            "Namuna: foydalanuvchi 'salom', 'parol' va '12345' kiritdi"
          ],
          output: `Parolni kiriting: salom
Noto'g'ri! Qolgan urinish: 2
Parolni kiriting: parol
Noto'g'ri! Qolgan urinish: 1
Parolni kiriting: 12345
Noto'g'ri! Qolgan urinish: 0
Akkaunt bloklandi! 🔒`,
          notes: "Bank kartasi PIN-kodi yoki telefon qulfi aynan shunday ishlaydi. Ikkinchi marta ishga tushirib to'g'ri parolni kiriting — else ishlamasligini ko'rsating."
        },
        {
          type: "quiz",
          question: "Bu kod nimani chiqaradi?",
          code: `for i in range(3):
    print(i, end=" ")
else:
    print("tugadi")`,
          options: ["0 1 2", "0 1 2 tugadi", "tugadi", "Xato: for ga else yozib bo'lmaydi"],
          answer: 1,
          explain: "Tsiklda break yo'q, u oxirigacha bordi — demak else ishlaydi. Natija: 0 1 2 tugadi.",
          notes: "4-variantni tanlaganlar ko'p bo'lishi mumkin — Python'da bu mumkinligini yana bir bor ta'kidlang."
        },
        {
          type: "quiz",
          question: "s ning qiymati nechaga teng bo'ladi?",
          code: `s = 0
for i in range(1, 6):
    if i % 2 == 0:
        continue
    s += i
print(s)`,
          options: ["15", "9", "6", "5"],
          answer: 1,
          explain: "Juft sonlar (2, 4) continue bilan o'tkazib yuboriladi. Faqat 1 + 3 + 5 = 9 qo'shiladi.",
          notes: "15 deganlar continue ni e'tiborsiz qoldirgan, 6 deganlar esa juftlarni qo'shgan. Ikkalasini ham trace bilan tushuntiring."
        },
        {
          type: "task",
          title: "Mashq 1: Eng kichik bo'luvchi",
          task: "221 sonining 1 dan katta eng kichik bo'luvchisini toping va chiqaring. Agar bo'luvchi faqat sonning o'zi bo'lsa, 'tub son' deb yozing. Keyin n ni 223 ga o'zgartirib sinab ko'ring.",
          starter: `n = 221
for d in range(2, n + 1):
    if ...:
        ...
        break`,
          hint: "Birinchi `n % d == 0` bo'lgan d — eng kichik bo'luvchi. Topilishi bilan break qiling. d == n bo'lsa — son tub.",
          solution: `n = 221
for d in range(2, n + 1):
    if n % d == 0:
        if d == n:
            print(n, "- tub son")
        else:
            print(n, "ning eng kichik bo'luvchisi:", d)
        break`,
          notes: "221 = 13 · 17, javob 13. 223 esa tub son. Kuchli o'quvchilarga: tekshiruvni n gacha emas, d * d <= n gacha qilish yetarli ekanini o'ylab ko'rishni taklif qiling."
        },
        {
          type: "task",
          title: "Mashq 2: Sonlar yig'uvchi",
          task: "while True yordamida foydalanuvchidan sonlar so'rang. 0 kiritilsa tsiklni to'xtating. Manfiy sonlarni continue bilan o'tkazib yuboring (yig'indiga qo'shmang). Oxirida musbat sonlar yig'indisini chiqaring.",
          starter: `yigindi = 0
while True:
    son = int(input("Son kiriting (0 - chiqish): "))
    ...
print("Musbat sonlar yig'indisi:", yigindi)`,
          hint: "Avval `if son == 0: break`, keyin `if son < 0: continue`, eng oxirida `yigindi += son`. Tartib muhim!",
          solution: `yigindi = 0
while True:
    son = int(input("Son kiriting (0 - chiqish): "))
    if son == 0:
        break
    if son < 0:
        print("Manfiy son o'tkazib yuborildi")
        continue
    yigindi += son
print("Musbat sonlar yig'indisi:", yigindi)`,
          notes: "Bu yerda break ham, continue ham bor — ikkalasining farqini mustahkamlash uchun ideal mashq. Juftlikda bajarishga ruxsat bering."
        },
        {
          type: "summary",
          title: "Xulosa: tsiklni boshqarish",
          points: [
            "`break` — tsiklni darhol to'xtatadi",
            "`continue` — joriy qadamni tashlab, keyingisiga o'tadi",
            "Tsikl `else` qismi faqat **break bo'lmaganda** ishlaydi — qidiruvlar uchun qulay",
            "`while True:` + `break` — to'xtash sharti tsikl o'rtasida bo'lganda",
            "Tub son tekshiruvi: xulosani barcha bo'luvchilar tekshirilgandan keyin qiling",
            "Parol, PIN, menyu — hammasi tsikl + break namunasi"
          ],
          notes: "Chiqish savoli: 'Tarvuz misolida continue nima edi, break nima edi?' Uyga vazifani tushuntiring — qiyin darajadagi vazifa keyingi darsga yaxshi tayyorgarlik."
        }
      ],
      homework: [
        { level: "oson", task: "1 dan 30 gacha sonlarni chiqaring, lekin 4 ga bo'linadiganlarini continue yordamida o'tkazib yuboring." },
        { level: "o'rta", task: "Bankomat dasturi: PIN-kod (masalan 1234) uchun 3 ta urinish bering. To'g'ri bo'lsa, while True bilan menyu ko'rsating: 1 - balans, 2 - pul yechish, 3 - chiqish. Chiqish tanlanganda break." },
        { level: "qiyin", task: "for va for-else yordamida 100 dan katta birinchi tub sonni toping (javob: 101). Keyin 1000 dan katta birinchi tub sonni toping." }
      ]
    },

    // ===================== 4-DARS =====================
    {
      id: "m3-l4",
      title: "Ichma-ich tsikllar va algoritmlar",
      duration: 90,
      goals: [
        "Ichma-ich (nested) tsikllar qanday ishlashini tushunish",
        "Yulduzchalardan kvadrat, uchburchak va piramida chizish",
        "Ko'paytirish jadvali (setka) chiqarish",
        "% 10 va // 10 yordamida raqamlar bilan ishlash: sanash, yig'indi, teskari son",
        "Ro'yxatsiz max/min qiymatni kuzatib borish",
        "FizzBuzz masalasini yechish"
      ],
      keywords: ["ichma-ich tsikl", "nested", "naqsh", "% 10", "// 10", "max", "min", "FizzBuzz", "algoritm"],
      plan: [
        { time: 10, label: "Takrorlash: break, continue, else" },
        { time: 20, label: "Ichma-ich tsikllar, yulduzcha shakllar, jadval" },
        { time: 20, label: "Raqamlar algoritmlari: sanash, teskari son" },
        { time: 10, label: "Max/min va FizzBuzz" },
        { time: 5, label: "Loyihaga tayyorgarlik: random" },
        { time: 20, label: "Quiz va amaliy mashqlar" },
        { time: 5, label: "Xulosa va uyga vazifa" }
      ],
      slides: [
        {
          type: "title",
          title: "Ichma-ich tsikllar va algoritmlar",
          subtitle: "Tsikl ichida tsikl va dasturchilarning klassik masalalari",
          emoji: "🧩",
          notes: "Takrorlash: 'for-else qachon else qismini bajaradi?' Keyin bugun modulning eng qiziq darsi ekanini — shakllar chizishimizni va algoritmlar yozishimizni ayting."
        },
        {
          type: "analogy",
          title: "Soat millari",
          emoji: "⏰",
          text: "Soatga qarang: **minut mili** to'liq bir aylana (60 qadam) qilganda, **soat mili** faqat **bitta** qadam suriladi. Ichma-ich tsikl ham xuddi shunday: **tashqi tsikl** bir qadam qilguncha, **ichki tsikl** to'liq aylanib chiqadi. Yana bir misol — maktab jadvali: 6 kun (tashqi tsikl) va har kuni 5 ta dars (ichki tsikl) = haftada 30 ta dars. Jami takrorlanish = tashqi × ichki.",
          notes: "So'rang: bir sutkada minut mili necha marta aylanadi? (24). Jami necha minut? (24 × 60 = 1440). Bu ichma-ich tsikldagi ko'paytirish qoidasini tushuntiradi."
        },
        {
          type: "code",
          title: "Tsikl ichida tsikl",
          code: `for kun in range(1, 4):
    print(f"--- {kun}-kun ---")
    for dars in range(1, 3):
        print(f"  {dars}-dars")
print("Hafta tugadi!")`,
          explain: [
            "Tashqi tsikl `kun` 3 marta ishlaydi",
            "Har bir kun uchun ichki tsikl `dars` 2 marta to'liq ishlaydi",
            "Ichki tsikl tanasi jami 3 × 2 = **6 marta** bajariladi",
            "Chekinish (indentatsiya) qaysi qator qaysi tsiklga tegishli ekanini belgilaydi"
          ],
          output: `--- 1-kun ---
  1-dars
  2-dars
--- 2-kun ---
  1-dars
  2-dars
--- 3-kun ---
  1-dars
  2-dars
Hafta tugadi!`,
          notes: "Doskada kun va dars qiymatlari jadvalini chizing: (1,1), (1,2), (2,1)... O'quvchilar ichki tsikl har safar 1 dan qayta boshlanishini ko'rishi kerak."
        },
        {
          type: "code",
          title: "Yulduzcha kvadrat",
          code: `n = 4
for qator in range(n):
    for ustun in range(n):
        print("*", end=" ")
    print()`,
          explain: [
            "Tashqi tsikl — **qatorlar**, ichki tsikl — **ustunlar**",
            "Ichki tsikl bir qatordagi 4 ta yulduzchani yonma-yon chiqaradi (`end=\" \"`)",
            "Bo'sh `print()` ichki tsikldan **keyin**, lekin tashqi tsikl **ichida** — yangi qatorga o'tadi",
            "Bu qoida barcha shakllar uchun asos: qator → ustunlar → yangi qator"
          ],
          output: `* * * *
* * * *
* * * *
* * * *`,
          notes: "Eng ko'p xato: print() ni noto'g'ri chekinish bilan yozish. Uni ichki tsikl ichiga qo'yib ko'rsating — har bir yulduzcha alohida qatorga tushadi."
        },
        {
          type: "code",
          title: "Uchburchak va piramida",
          code: `for i in range(1, 6):
    for j in range(i):
        print("*", end="")
    print()

n = 4
for i in range(1, n + 1):
    print(" " * (n - i) + "*" * (2 * i - 1))`,
          explain: [
            "Uchburchak: ichki tsikl **i marta** ishlaydi — har qatorda bittadan ko'p",
            "Ya'ni ichki tsikl chegarasi tashqi tsikl o'zgaruvchisiga bog'liq",
            "Piramida: satrni songa ko'paytirish — `\"*\" * 3` → `***`",
            "Bo'shliqlar: n - i, yulduzchalar: 2i - 1 (1, 3, 5, 7)"
          ],
          output: `*
**
***
****
*****
   *
  ***
 *****
*******`,
          notes: "Piramida formulasini o'quvchilar bilan jadval orqali chiqaring: i | bo'shliq | yulduz. 1|3|1, 2|2|3, 3|1|5, 4|0|7. Formulani o'zlari topishsa, juda yaxshi."
        },
        {
          type: "code",
          title: "Ko'paytirish setkasi",
          code: `for i in range(1, 6):
    for j in range(1, 6):
        print(f"{i * j:4}", end="")
    print()`,
          explain: [
            "Har bir katak = qator raqami × ustun raqami",
            "`{i * j:4}` — sonni 4 belgilik joyga o'ngga tekislab yozadi",
            "Shuning uchun ustunlar chiroyli tekis turadi",
            "6 ni 11 ga o'zgartirsangiz — to'liq 10×10 jadval"
          ],
          output: `   1   2   3   4   5
   2   4   6   8  10
   3   6   9  12  15
   4   8  12  16  20
   5  10  15  20  25`,
          notes: "Formatlashni (:4) qisqa tushuntiring — chuqur kirmang. :4 ni olib tashlab ko'rsating: jadval qiyshiq bo'lib qoladi."
        },
        {
          type: "quiz",
          question: "`print(\"#\")` necha marta bajariladi?",
          code: `for a in range(3):
    for b in range(4):
        print("#")`,
          options: ["7", "4", "12", "3"],
          answer: 2,
          explain: "Tashqi tsikl 3 marta, har birida ichki tsikl 4 marta: 3 × 4 = 12.",
          notes: "7 deganlar sonlarni qo'shib yuborgan. Soat millari o'xshatishini eslating: ko'paytiriladi!"
        },
        {
          type: "text",
          title: "Raqamlar bilan ishlash siri: % 10 va // 10",
          body: "Sonning raqamlarini ajratish uchun ikki amal kifoya:",
          points: [
            "`son % 10` — **oxirgi raqam**: 4825 % 10 → 5",
            "`son // 10` — **oxirgi raqamni o'chirish**: 4825 // 10 → 482",
            "Ularni tsiklda takrorlaymiz: son 0 bo'lguncha",
            "Trace: 4825 → oxirgi 5, qoldi 482 → oxirgi 2, qoldi 48 → oxirgi 8, qoldi 4 → oxirgi 4, qoldi 0 → stop",
            "Takrorlash soni noma'lum (son uzunligiga bog'liq) — shuning uchun **while**"
          ],
          notes: "Doskada 4825 sonini yozib, har qadamda oxirgi raqamni o'chirib boring. Bu algoritmlar olimpiada masalalarida juda ko'p uchraydi."
        },
        {
          type: "code",
          title: "Raqamlarni sanash va yig'indisi",
          code: `son = 48213
nusxa = son
raqamlar = 0
yigindi = 0
while nusxa > 0:
    yigindi += nusxa % 10
    nusxa //= 10
    raqamlar += 1
print(f"{son} sonida {raqamlar} ta raqam bor")
print(f"Raqamlar yig'indisi: {yigindi}")`,
          explain: [
            "`nusxa` bilan ishlaymiz — asl `son` buzilmasin (oxirida chiqarish uchun kerak)",
            "Har qadamda oxirgi raqam yig'indiga qo'shiladi va o'chiriladi",
            "Raqamlar soni = necha marta o'chirganimiz",
            "4 + 8 + 2 + 1 + 3 = 18"
          ],
          output: `48213 sonida 5 ta raqam bor
Raqamlar yig'indisi: 18`,
          notes: "Savol: son = 0 bo'lsa nechta raqam deydi? (0 ta — xato! Bu chegaraviy holat.) Qiziquvchilarga uni qanday tuzatishni o'ylashni taklif qiling."
        },
        {
          type: "code",
          title: "Sonni teskari aylantirish",
          code: `son = 12345
teskari = 0
while son > 0:
    oxirgi = son % 10
    teskari = teskari * 10 + oxirgi
    son //= 10
print("Teskari son:", teskari)`,
          explain: [
            "`teskari * 10` — mavjud raqamlarni bir pog'ona chapga suradi",
            "`+ oxirgi` — yangi raqamni o'ng tomonga qo'shadi",
            "Trace: 0 → 5 → 54 → 543 → 5432 → 54321",
            "Bu algoritm palindrom (12321 kabi) sonlarni tekshirishda ishlatiladi"
          ],
          output: `Teskari son: 54321`,
          notes: "Trace jadvalini albatta doskada to'ldiring: son | oxirgi | teskari. Bu modulning eng muhim algoritmlaridan biri. Ba'zilar str() bilan qilishni taklif qiladi — bu ham usul, lekin bugun matematik yo'lni o'rganamiz."
        },
        {
          type: "code",
          title: "Eng katta va eng kichikni topish",
          code: `son = int(input("1-son: "))
eng_katta = son
eng_kichik = son
for i in range(2, 6):
    son = int(input(f"{i}-son: "))
    if son > eng_katta:
        eng_katta = son
    if son < eng_kichik:
        eng_kichik = son
print("Eng katta:", eng_katta)
print("Eng kichik:", eng_kichik)`,
          explain: [
            "Birinchi sonni ham eng katta, ham eng kichik deb olamiz",
            "Har yangi sonni 'rekordchi' bilan solishtiramiz — yangi rekord bo'lsa, almashtiramiz",
            "Ro'yxat kerak emas: faqat 2 ta o'zgaruvchi yetarli",
            "Namuna: 7, -3, 12, 0, 5 kiritildi"
          ],
          output: `1-son: 7
2-son: -3
3-son: 12
4-son: 0
5-son: 5
Eng katta: 12
Eng kichik: -3`,
          notes: "O'xshatish: sport musobaqasida rekord — yangi natija rekorddan yaxshi bo'lsa, rekord yangilanadi. Sinfdan 5 kishining bo'yini so'rab, shu algoritmni 'qo'lda' bajaring."
        },
        {
          type: "compare",
          title: "Max uchun boshlang'ich qiymat",
          left: {
            label: "❌ eng_katta = 0",
            code: `# Sonlar: -5, -2, -9
eng_katta = 0
# -5 > 0? Yo'q
# -2 > 0? Yo'q
# -9 > 0? Yo'q
# Natija: 0 — bunday son yo'q edi!`
          },
          right: {
            label: "✅ Birinchi son bilan boshlash",
            code: `# Sonlar: -5, -2, -9
eng_katta = -5   # birinchi son
# -2 > -5? Ha → eng_katta = -2
# -9 > -2? Yo'q
# Natija: -2 ✓`
          },
          good: "right",
          notes: "Bu xato juda yashirin: musbat sonlar bilan sinaganda hammasi to'g'ri ishlaydi. Shuning uchun dasturni har doim manfiy sonlar bilan ham sinash kerakligini o'rgating."
        },
        {
          type: "code",
          title: "FizzBuzz — mashhur intervyu masalasi",
          code: `for i in range(1, 16):
    if i % 15 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)`,
          explain: [
            "3 ga bo'linsa — Fizz, 5 ga — Buzz, ikkalasiga ham — FizzBuzz",
            "**Tartib muhim!** 15 ga tekshiruv eng birinchi bo'lishi shart",
            "15 ga bo'linish = 3 ga ham, 5 ga ham bo'linish (`i % 3 == 0 and i % 5 == 0`)",
            "Bu masala dasturchilarni ishga olishda haqiqatan so'raladi!"
          ],
          output: `1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz`,
          notes: "Avval sinf bilan o'yin o'ynang: navbat bilan sanang, 3 ga karralida 'Fizz', 5 ga 'Buzz' deyiladi. Xato qilgan o'tiradi. Keyin kodni ko'rsating."
        },
        {
          type: "quiz",
          question: "Agar FizzBuzz kodida tekshiruv tartibi shunday bo'lsa, i = 15 uchun nima chiqadi?",
          code: `i = 15
if i % 3 == 0:
    print("Fizz")
elif i % 5 == 0:
    print("Buzz")
elif i % 15 == 0:
    print("FizzBuzz")`,
          options: ["FizzBuzz", "Fizz", "Buzz", "Fizz va Buzz"],
          answer: 1,
          explain: "if-elif zanjirida birinchi True bo'lgan shart ishlaydi, qolganlari tekshirilmaydi. 15 % 3 == 0 True — 'Fizz' chiqadi va zanjir tugaydi.",
          notes: "Bu if-elif mavzusini takrorlash uchun ham foydali. Qoida: eng tor (maxsus) shart birinchi tekshiriladi."
        },
        {
          type: "quiz",
          question: "Bu kod nimani chiqaradi?",
          code: `n = 907
t = 0
while n > 0:
    t = t * 10 + n % 10
    n //= 10
print(t)`,
          options: ["79", "907", "709", "97"],
          answer: 2,
          explain: "Teskari aylantirish algoritmi: 0 → 7 → 70 → 709. O'rtadagi 0 ham saqlanadi, chunki 7 * 10 + 0 = 70.",
          notes: "79 deganlar 0 yo'qolib ketadi deb o'ylagan. Trace jadvalini o'quvchilardan biriga doskada to'ldirtiring."
        },
        {
          type: "text",
          title: "Loyihaga tayyorgarlik: tayyor vosita random",
          body: "Python'da ko'plab **tayyor vositalar** (modullar) bor. Ulardan biri — `random`, tasodifiy sonlar uchun.",
          points: [
            "`import random` — dastur boshida bir marta yoziladi: 'random vositasini olib kel'",
            "`random.randint(1, 100)` — 1 dan 100 gacha (ikkalasi ham **kiradi**!) tasodifiy butun son",
            "Diqqat: range dan farqli, randint da oxirgi son ham kiradi",
            "Har ishga tushirganda natija boshqacha — o'yinlar uchun aynan shu kerak",
            "Misol: zar tashlash — `random.randint(1, 6)`"
          ],
          notes: "Qisqa namoyish: zar tashlashni 5 marta ishga tushiring, har safar boshqa son chiqishini ko'rsating. Modullarni chuqur o'rganishga hozir kirmang — faqat loyiha uchun kerakli qismi."
        },
        {
          type: "task",
          title: "Mashq 1: Sonli uchburchak",
          task: "Ichma-ich tsikllar yordamida n = 5 uchun quyidagi shaklni chiqaring:\n1\n1 2\n1 2 3\n1 2 3 4\n1 2 3 4 5",
          starter: `n = 5
for i in range(1, n + 1):
    for j in range(...):
        ...
    print()`,
          hint: "Ichki tsikl 1 dan i gacha: `range(1, i + 1)`. Sonlarni `print(j, end=\" \")` bilan yonma-yon chiqaring.",
          solution: `n = 5
for i in range(1, n + 1):
    for j in range(1, i + 1):
        print(j, end=" ")
    print()`,
          notes: "Tez bajarganlarga: teskari uchburchak (5 dan 1 gacha qisqarib boruvchi) chizish vazifasini bering."
        },
        {
          type: "task",
          title: "Mashq 2: Palindrom son",
          task: "Foydalanuvchidan musbat butun son so'rang. Uni teskari aylantiring va son palindrom (o'ngdan ham, chapdan ham bir xil o'qiladigan, masalan 12321) ekanligini aniqlang.",
          starter: `son = int(input("Son kiriting: "))
nusxa = son
teskari = 0
while ...:
    ...
if ...:
    print("Palindrom!")
else:
    print("Palindrom emas")`,
          hint: "Teskari aylantirish algoritmini `nusxa` ustida bajaring, so'ng `teskari == son` ni tekshiring.",
          solution: `son = int(input("Son kiriting: "))
nusxa = son
teskari = 0
while nusxa > 0:
    teskari = teskari * 10 + nusxa % 10
    nusxa //= 10
print("Teskari son:", teskari)
if teskari == son:
    print("Palindrom! 🎉")
else:
    print("Palindrom emas")`,
          notes: "Sinov uchun sonlar: 12321 (ha), 1221 (ha), 123 (yo'q), 7 (ha). Nega nusxa kerakligini so'rang — asl son 0 bo'lib qoladi!"
        },
        {
          type: "task",
          title: "Mashq 3: 2 dan 50 gacha tub sonlar",
          task: "Ichma-ich tsikl va for-else yordamida 2 dan 50 gacha bo'lgan barcha tub sonlarni bitta qatorda chiqaring va ularning sonini sanang.",
          starter: `soni = 0
for n in range(2, 51):
    for d in range(2, n):
        ...
    else:
        ...
print()
print("Jami tub sonlar:", soni)`,
          hint: "Ichki tsiklda bo'luvchi topilsa — break. else qismida (bo'luvchi topilmadi) sonni chiqaring va sanagichni oshiring.",
          solution: `soni = 0
for n in range(2, 51):
    for d in range(2, n):
        if n % d == 0:
            break
    else:
        print(n, end=" ")
        soni += 1
print()
print("Jami tub sonlar:", soni)`,
          notes: "Bu mashq butun modulni birlashtiradi: for, ichma-ich tsikl, break, else. n = 2 da ichki range bo'sh — else darhol ishlaydi, shuning uchun 2 ham tub deb topiladi. Javob: 15 ta."
        },
        {
          type: "summary",
          title: "Xulosa: ichma-ich tsikllar va algoritmlar",
          points: [
            "Ichma-ich tsikl: tashqi bir qadam — ichki to'liq aylanish; jami = tashqi × ichki",
            "Shakllar: tashqi — qatorlar, ichki — ustunlar, oxirida `print()`",
            "`% 10` — oxirgi raqam, `// 10` — oxirgi raqamni o'chirish",
            "Teskari son: `teskari = teskari * 10 + oxirgi`",
            "Max/min: birinchi qiymatdan boshlang, 0 dan emas!",
            "FizzBuzz: eng maxsus shartni birinchi tekshiring",
            "`random.randint(a, b)` — loyihamiz uchun tasodifiy son"
          ],
          notes: "Keyingi darsda 'Sonni top' loyihasini yozamiz — o'quvchilardan o'yin qoidalarini uyda o'ylab kelishni so'rang. Modul testiga tayyorlanishni eslating."
        }
      ],
      homework: [
        { level: "oson", task: "n = 5 uchun yulduzchalardan teskari uchburchak chiqaring: birinchi qatorda 5 ta, oxirgisida 1 ta yulduzcha." },
        { level: "o'rta", task: "Foydalanuvchidan son so'rang va uning raqamlari ichida eng katta raqamni, eng kichik raqamni hamda juft raqamlar sonini toping (masalan, 52817 → max 8, min 1, juft raqamlar 2 ta)." },
        { level: "qiyin", task: "1 dan 1000 gacha bo'lgan 'Armstrong sonlar'ni toping: 3 xonali son raqamlarining kublari yig'indisi o'ziga teng bo'lsa (153 = 1³ + 5³ + 3³). Ichma-ich tsikl yoki raqamlarni ajratish usulidan foydalaning." }
      ]
    }
  ],

  project: {
    title: "Sonni top o'yini 🎯",
    description: "Kompyuter 1 dan 100 gacha tasodifiy son o'ylaydi, o'yinchi esa uni topishga harakat qiladi. Har bir taxmindan keyin kompyuter 'kattaroq' yoki 'kichikroq' deb yo'l ko'rsatadi. O'yin urinishlarni sanaydi, qiyinlik darajalariga ega va qayta o'ynash imkonini beradi. Loyihada modulning barcha mavzulari ishlatiladi: while, for, break, continue, else va random.randint tayyor vositasi.",
    requirements: [
      "Dastur boshida `import random` qiling va `random.randint(1, 100)` bilan sirli son tanlang",
      "O'yinchidan taxmin so'rang va 'Kattaroq son ayting' / 'Kichikroq son ayting' deb yo'l ko'rsating",
      "Har bir urinishni sanang va topilganda nechta urinishda topilganini chiqaring",
      "Qiyinlik darajalari: Oson (1-50, 10 urinish), O'rta (1-100, 7 urinish), Qiyin (1-200, 5 urinish)",
      "Urinishlar tugasa, sirli sonni oshkor qiling (tsikl else qismidan foydalaning)",
      "Son bo'lmagan kiritishni tekshiring va continue bilan qayta so'rang (urinish sanalmasin)",
      "O'yin tugagach 'Yana o'ynaysizmi? (ha/yo'q)' deb so'rang va tashqi tsikl bilan qayta boshlang"
    ],
    bonus: [
      "Taxmin sirli songa 5 tadan kam farq qilsa '🔥 Juda yaqin!' deb yozing",
      "Har o'yindan keyin eng yaxshi natijani (eng kam urinish) saqlang va ko'rsating",
      "O'ynalgan o'yinlar va yutuqlar sonini sanab, oxirida statistikani chiqaring",
      "Rollarni almashtiring: o'yinchi son o'ylaydi, kompyuter esa 'kattaroq/kichikroq' javoblariga qarab uni topadi (o'rtasini olish strategiyasi)"
    ],
    example: `import random

print("🎯 Sonni top o'yiniga xush kelibsiz!")
eng_yaxshi = 0
yana = "ha"
while yana == "ha":
    print("Qiyinlik darajasini tanlang:")
    print("1 - Oson (1-50, 10 urinish)")
    print("2 - O'rta (1-100, 7 urinish)")
    print("3 - Qiyin (1-200, 5 urinish)")
    daraja = input("Tanlovingiz: ")
    if daraja == "1":
        chegara = 50
        max_urinish = 10
    elif daraja == "3":
        chegara = 200
        max_urinish = 5
    else:
        chegara = 100
        max_urinish = 7

    sirli = random.randint(1, chegara)
    urinish = 0
    print(f"Men 1 dan {chegara} gacha son o'yladim. Sizda {max_urinish} ta urinish bor!")

    while urinish < max_urinish:
        matn = input("Taxminingiz: ")
        # isdigit() - satr faqat raqamlardan iboratmi, tekshiradi
        if not matn.isdigit():
            print("Iltimos, faqat musbat son kiriting!")
            continue
        taxmin = int(matn)
        urinish += 1
        if taxmin == sirli:
            print(f"🎉 Topdingiz! Son {sirli} edi. Urinishlar: {urinish}")
            if eng_yaxshi == 0 or urinish < eng_yaxshi:
                eng_yaxshi = urinish
                print("🏆 Yangi rekord!")
            break
        if taxmin < sirli:
            print("⬆️ Kattaroq son ayting!")
        else:
            print("⬇️ Kichikroq son ayting!")
        if abs(taxmin - sirli) < 5:
            print("🔥 Juda yaqin!")
        print(f"Qolgan urinishlar: {max_urinish - urinish}")
    else:
        print(f"😢 Urinishlar tugadi. Sirli son {sirli} edi.")

    yana = input("Yana o'ynaysizmi? (ha/yo'q): ").lower()

if eng_yaxshi > 0:
    print(f"Eng yaxshi natijangiz: {eng_yaxshi} ta urinish")
print("O'yin uchun rahmat! 👋")`
  },

  test: [
    {
      q: "Bu kod necha marta 'Salom' chiqaradi?",
      code: `i = 0
while i < 4:
    print("Salom")
    i += 1`,
      options: ["3", "4", "5", "Cheksiz"],
      answer: 1
    },
    {
      q: "Quyidagi kodning asosiy xatosi nima?",
      code: `i = 1
while i <= 10:
    print(i)`,
      options: ["while dan keyin qavs kerak", "print noto'g'ri yozilgan", "i o'zgarmaydi — cheksiz tsikl", "i = 0 bo'lishi kerak"],
      answer: 2
    },
    {
      q: "range(2, 12, 3) qaysi sonlarni beradi?",
      options: ["2 5 8 11", "2 5 8", "3 6 9 12", "2 5 8 11 14"],
      answer: 0
    },
    {
      q: "10 dan 1 gacha teskari sanash uchun qaysi range to'g'ri?",
      options: ["range(10, 1)", "range(10, 0)", "range(1, 10, -1)", "range(10, 0, -1)"],
      answer: 3
    },
    {
      q: "Bu kod nimani chiqaradi?",
      code: `s = 0
for i in range(1, 5):
    s += i
print(s)`,
      options: ["15", "10", "4", "6"],
      answer: 1
    },
    {
      q: "continue nima qiladi?",
      options: ["Tsiklni butunlay to'xtatadi", "Dasturni tugatadi", "Joriy qadamning qolganini tashlab, keyingi qadamga o'tadi", "Tsiklni boshidan qayta boshlaydi va hisoblagichni nolga tushiradi"],
      answer: 2
    },
    {
      q: "Bu kod nimani chiqaradi?",
      code: `for i in range(5):
    if i == 3:
        break
else:
    print("A")
print("B")`,
      options: ["B", "A B", "A", "Hech narsa"],
      answer: 0
    },
    {
      q: "Ichki print necha marta bajariladi?",
      code: `for i in range(4):
    for j in range(5):
        print(i, j)`,
      options: ["9", "5", "4", "20"],
      answer: 3
    },
    {
      q: "n = 3572 bo'lsa, n % 10 va n // 10 qiymatlari qanday?",
      options: ["2 va 357", "357 va 2", "3 va 572", "2 va 357.2"],
      answer: 0
    },
    {
      q: "random.randint(1, 6) qaysi qiymatlarni qaytarishi mumkin?",
      options: ["0 dan 5 gacha", "1 dan 5 gacha", "1 dan 6 gacha (6 ham kiradi)", "Faqat 1 yoki 6"],
      answer: 2
    }
  ]
});
