window.COURSE_MODULES = window.COURSE_MODULES || [];
COURSE_MODULES.push({
  id: 5,
  month: 3,
  weeks: "9-10 hafta",
  title: "Lug'atlar, kortejlar va to'plamlar",
  icon: "🗂️",
  description: "Ma'lumotlarni aqlli saqlash: o'zgarmas kortejlar (tuple), kalit-qiymat lug'atlari (dict), takrorlanmas to'plamlar (set) va ularning ichma-ich birikmalari. Modul oxirida o'quvchilar haqiqiy \"maktab jurnali\" dasturini yozadi.",
  outcomes: [
    "Kortej (tuple) yaratadi, indekslaydi va `a, b = t` ko'rinishida ochadi (unpacking)",
    "Lug'at (dict) yaratadi, qiymat qo'shadi, o'zgartiradi, o'chiradi va `.get()` bilan xavfsiz o'qiydi",
    "`keys()`, `values()`, `items()` yordamida lug'at bo'ylab aylanadi",
    "Lug'at yordamida so'z va harflarni sanaydi",
    "To'plam (set) bilan takrorlanishlarni olib tashlaydi, birlashma/kesishma/ayirma amallarini bajaradi",
    "Lug'atlar ro'yxati va lug'atlar lug'ati bilan ishlaydi, `sorted(key=lambda ...)` bilan saralaydi",
    "Masalaga mos tuzilmani (list/tuple/dict/set) tanlay oladi"
  ],
  lessons: [
    // ===================== DARS 1 =====================
    {
      id: "m5-l1",
      title: "Kortejlar (tuple)",
      duration: 90,
      goals: [
        "Kortej nima ekanini va ro'yxatdan farqini tushunish",
        "Kortej yaratish, bitta elementli kortej `(5,)` yozish",
        "Indekslash, kesish (slicing), `len`, `in`, `count`, `index` dan foydalanish",
        "Unpacking: `a, b = t` va o'zgaruvchilarni almashtirish `a, b = b, a`",
        "Qachon tuple, qachon list ishlatishni tanlay olish"
      ],
      keywords: ["tuple", "kortej", "unpacking", "divmod", "o'zgarmas", "immutable"],
      plan: [
        { time: 10, label: "Takrorlash: ro'yxatlar (list) bo'yicha savol-javob" },
        { time: 20, label: "Kortej nima, yaratish, bitta elementli kortej" },
        { time: 15, label: "Indekslash, o'zgarmaslik, xatolar" },
        { time: 20, label: "Unpacking, swap, divmod, koordinatalar" },
        { time: 20, label: "Amaliy mashqlar" },
        { time: 5, label: "Xulosa va uyga vazifa" }
      ],
      slides: [
        {
          type: "title",
          title: "Kortejlar (tuple)",
          subtitle: "O'zgarmas ro'yxatlar: ishonchli va tez",
          emoji: "🔒",
          notes: "Darsni ro'yxatlar bo'yicha 2-3 ta savol bilan boshlang: `append` nima qiladi? `lst[0] = 5` ishlaydimi? Bugun o'zgartirib bo'lmaydigan ro'yxat bilan tanishamiz deb ayting."
        },
        {
          type: "text",
          title: "Kortej nima?",
          body: "**Kortej (tuple)** — bu elementlarning tartiblangan to'plami, xuddi ro'yxat kabi. Lekin bitta katta farqi bor: kortej yaratilgandan keyin uni **o'zgartirib bo'lmaydi** (immutable).",
          points: [
            "Ro'yxat kvadrat qavsda: `[1, 2, 3]`",
            "Kortej oddiy (dumaloq) qavsda: `(1, 2, 3)`",
            "Elementlar tartibi saqlanadi, indeks 0 dan boshlanadi",
            "Element qo'shib, o'chirib yoki almashtirib bo'lmaydi — `append`, `remove` yo'q",
            "Turli turdagi qiymatlarni saqlashi mumkin: `(\"Ali\", 14, True)`"
          ],
          notes: "Doskaga list va tuple ni yonma-yon yozing. \"Immutable\" so'zini ingliz tilida ham eslab qolishlarini so'rang — keyinchalik string ham immutable ekanini eslatib o'ting."
        },
        {
          type: "analogy",
          title: "Kortej — bu tug'ilgan kuningiz",
          emoji: "🎂",
          text: "Ro'yxat — bu sizning **telefoningizdagi o'yinlar ro'yxati**: bugun yangisini o'rnatasiz, ertaga birini o'chirasiz. Kortej esa — **tug'ilgan sanangiz** (kun, oy, yil): `(15, 3, 2011)`. Uni hech kim o'zgartira olmaydi! Xuddi shunday hafta kunlari, xaritadagi koordinatalar yoki futbol o'yinining yakuniy hisobi `(2, 1)` — bular o'zgarmas ma'lumotlar, ular uchun kortej juda mos.",
          notes: "O'quvchilardan yana o'zgarmas ma'lumotlarga misol so'rang: pasport raqami, RGB rang (255, 0, 0), shaxmat taxtasidagi katak (\"e\", 4)."
        },
        {
          type: "code",
          title: "Kortej yaratish",
          code: `hafta = ("Dush", "Sesh", "Chor", "Pay", "Juma", "Shan", "Yak")
sana = (15, 3, 2011)
oquvchi = ("Aziz", 14, "8-B")
bosh = ()                 # bo'sh kortej
qavssiz = 10, 20, 30      # qavssiz ham kortej bo'ladi!

print(hafta)
print(type(sana))
print(oquvchi)
print(len(bosh))
print(qavssiz, type(qavssiz))`,
          explain: [
            "Kortej dumaloq qavs `( )` ichida vergul bilan yoziladi",
            "Turli turdagi elementlar bo'lishi mumkin: matn, son, mantiqiy qiymat",
            "`()` — bo'sh kortej, uning uzunligi 0",
            "Aslida kortejni **vergul** yaratadi, qavs esa faqat chiroyli ko'rinish uchun: `10, 20, 30` ham kortej"
          ],
          output: `('Dush', 'Sesh', 'Chor', 'Pay', 'Juma', 'Shan', 'Yak')
<class 'tuple'>
('Aziz', 14, '8-B')
0
(10, 20, 30) <class 'tuple'>`,
          notes: "Oxirgi qatorga alohida e'tibor qarating: \"kortejni vergul yaratadi\". Bu keyingi slayd (bitta elementli kortej) uchun zamin."
        },
        {
          type: "code",
          title: "Tuzoq: bitta elementli kortej",
          code: `a = (5)
b = (5,)
c = "salom",

print(a, type(a))
print(b, type(b))
print(c, type(c))
print(len(b))`,
          explain: [
            "`(5)` — bu kortej emas! Bu shunchaki qavs ichidagi 5 soni, xuddi `(2 + 3)` kabi",
            "Bitta elementli kortej uchun **vergul shart**: `(5,)`",
            "`\"salom\",` — vergul bor, demak kortej",
            "Bu juda ko'p uchraydigan xato, imtihonlarda ham so'raladi"
          ],
          output: `5 <class 'int'>
(5,) <class 'tuple'>
('salom',) <class 'tuple'>
1`,
          notes: "Avval kodni ko'rsatib, natijani o'quvchilardan taxmin qilishni so'rang, keyin ishga tushiring. Ko'pchilik `(5)` ni kortej deb o'ylaydi."
        },
        {
          type: "quiz",
          question: "Bu kod nima chiqaradi?",
          code: `x = (7)
y = (7,)
print(type(x) == type(y))`,
          options: ["True", "False", "Xato (Error)", "(7,)"],
          answer: 1,
          explain: "`x` — oddiy `int` (7), `y` esa `tuple`. Turlari har xil, shuning uchun `False`.",
          notes: "Qo'l ko'tarish orqali ovoz bering. Kim \"True\" degan bo'lsa, oldingi slaydga qaytib tushuntiring."
        },
        {
          type: "code",
          title: "Indekslash va kesish (slicing)",
          code: `ranglar = ("qizil", "yashil", "ko'k", "sariq", "qizil")

print(ranglar[0])          # birinchi
print(ranglar[-1])         # oxirgi
print(ranglar[1:3])        # kesim ham kortej
print(len(ranglar))
print("ko'k" in ranglar)
print(ranglar.count("qizil"))
print(ranglar.index("sariq"))`,
          explain: [
            "Indekslash xuddi ro'yxatdagidek: `t[0]`, `t[-1]`",
            "Kesish (slicing) natijasi ham **kortej** bo'ladi",
            "`len`, `in` — ro'yxatdagidek ishlaydi",
            "Kortejda faqat 2 ta metod bor: `count()` (nechta) va `index()` (qayerda)",
            "`for` sikli bilan ham aylanish mumkin"
          ],
          output: `qizil
qizil
('yashil', "ko'k")
5
True
2
3`,
          notes: "\"Ro'yxatda nechta metod bor edi?\" deb so'rang (append, insert, remove, pop, sort...). Kortejda faqat ikkita — chunki o'zgartiruvchi metodlar unga kerak emas."
        },
        {
          type: "compare",
          title: "Kortejni o'zgartirib bo'lmaydi",
          left: {
            label: "❌ Xato: kortej elementini almashtirish",
            code: `sana = (15, 3, 2011)
sana[0] = 16
# TypeError: 'tuple' object does not
# support item assignment`
          },
          right: {
            label: "✅ To'g'ri: yangi kortej yasash",
            code: `sana = (15, 3, 2011)
sana = (16,) + sana[1:]
print(sana)   # (16, 3, 2011)

# yoki ro'yxatga aylantirib:
r = list(sana)
r[1] = 4
sana = tuple(r)
print(sana)   # (16, 4, 2011)`
          },
          good: "right",
          notes: "Muhim nuqta: biz eski kortejni o'zgartirmayapmiz, balki **yangi** kortej yaratib, o'zgaruvchiga beryapmiz. `list()` va `tuple()` bilan turlarni almashtirish mumkinligini ko'rsating."
        },
        {
          type: "code",
          title: "Unpacking — kortejni \"ochish\"",
          code: `oquvchi = ("Malika", 15, "9-A")

ism, yosh, sinf = oquvchi
print(ism)
print(yosh)
print(sinf)

x, y = (3, 8)
print("x =", x, "y =", y)`,
          explain: [
            "Kortej elementlarini bir qatorda alohida o'zgaruvchilarga ajratish — **unpacking**",
            "Chapdagi o'zgaruvchilar soni elementlar soniga **teng bo'lishi shart**",
            "`ism, yosh = oquvchi` yozsak — `ValueError: too many values to unpack`",
            "Bu ro'yxat va satr bilan ham ishlaydi: `a, b = [1, 2]`, `h1, h2 = \"ok\"`"
          ],
          output: `Malika
15
9-A
x = 3 y = 8`,
          notes: "Analogiya: sovg'a qutisini ochib, ichidagi narsalarni har birini o'z joyiga qo'yish. O'quvchilardan noto'g'ri sonli unpacking qilib, xatoni o'zlari ko'rishlarini so'rang."
        },
        {
          type: "code",
          title: "Swap: a, b = b, a sirini ochamiz",
          code: `a = 5
b = 9

# Boshqa tillarda uchinchi o'zgaruvchi kerak:
vaqtincha = a
a = b
b = vaqtincha
print(a, b)

# Python'da - bitta qator:
a, b = b, a
print(a, b)`,
          explain: [
            "O'ng tomondagi `b, a` avval **kortej** yaratadi: `(9, 5)`",
            "So'ng bu kortej chap tomonga unpacking qilinadi: `a = 9`, `b = 5`",
            "Ya'ni Python hech qanday sehr qilmaydi — bu oddiy tuple + unpacking!",
            "Uchta o'zgaruvchini ham aylantirish mumkin: `a, b, c = c, a, b`"
          ],
          output: `9 5
5 9`,
          notes: "Ikkita stakan (biri choy, biri sharbat) misolini keltiring: almashtirish uchun uchinchi stakan kerak. Python esa o'ng tomonni oldindan \"rasmga olib\" qo'yadi (kortej)."
        },
        {
          type: "code",
          title: "Juft qiymatlar: divmod, min/max",
          code: `# 135 daqiqa necha soat va necha daqiqa?
natija = divmod(135, 60)
print(natija)

soat, daqiqa = divmod(135, 60)
print(soat, "soat", daqiqa, "daqiqa")

ballar = [78, 95, 64, 88]
eng = (min(ballar), max(ballar))
kichik, katta = eng
print("Eng past:", kichik, "Eng yuqori:", katta)`,
          explain: [
            "`divmod(a, b)` bitta emas, **ikkita** qiymat qaytaradi: `(a // b, a % b)` kortej ko'rinishida",
            "Darhol unpacking qilib, ikkita o'zgaruvchiga olish qulay",
            "Bir nechta bog'liq natijani birga saqlash uchun kortej — eng yaxshi tanlov",
            "Keyingi modulda o'z funksiyalarimiz ham shunday juft qiymat qaytaradi"
          ],
          output: `(2, 15)
2 soat 15 daqiqa
Eng past: 64 Eng yuqori: 95`,
          notes: "`//` va `%` ni eslatib o'ting. Savol: \"200 sekund necha minut va necha sekund?\" — divmod(200, 60) = (3, 20)."
        },
        {
          type: "code",
          title: "Koordinatalar: kortejlar ro'yxati",
          code: `# O'yindagi xazinalar joylashuvi (x, y)
xazinalar = [(2, 3), (5, 1), (0, 7)]

for x, y in xazinalar:
    print("Xazina: x =", x, ", y =", y)

oyinchi = (5, 1)
if oyinchi in xazinalar:
    print("Tabriklaymiz, xazina topildi!")

xazinalar.append((4, 4))
print(len(xazinalar), "ta xazina")`,
          explain: [
            "Har bir nuqta — o'zgarmas kortej `(x, y)`, ro'yxat esa o'zgaruvchan (yangi nuqta qo'shsa bo'ladi)",
            "`for x, y in ...` — sikl ichida darhol unpacking",
            "`in` bilan kortejni ro'yxat ichidan qidirish mumkin",
            "Bu \"list of tuples\" — juda ko'p ishlatiladigan tuzilma"
          ],
          output: `Xazina: x = 2 , y = 3
Xazina: x = 5 , y = 1
Xazina: x = 0 , y = 7
Tabriklaymiz, xazina topildi!
4 ta xazina`,
          notes: "Minecraft yoki PUBG xaritasidagi koordinatalarni eslating. `enumerate` ham juft (indeks, qiymat) qaytarishini eslatib o'ting — u ham kortej!"
        },
        {
          type: "quiz",
          question: "Bu kod nima chiqaradi?",
          code: `t = (10, 20, 30)
a, b, c = t
a, c = c, a
print(a, b, c)`,
          options: ["10 20 30", "30 20 10", "30 10 20", "Xato: tuple o'zgarmaydi"],
          answer: 1,
          explain: "Unpacking: a=10, b=20, c=30. Keyin `a, c = c, a` — a va c almashadi: a=30, c=10. Kortej `t` o'zgarmadi, o'zgaruvchilar o'zgardi.",
          notes: "Kim 4-variantni tanlasa — muhim tushuncha: biz kortejni emas, o'zgaruvchilarni o'zgartirdik."
        },
        {
          type: "text",
          title: "Tuple yoki List? Qanday tanlash kerak",
          body: "Ikkalasi ham tartiblangan ketma-ketlik. Tanlov ma'lumotning **tabiatiga** bog'liq:",
          points: [
            "**List** — ma'lumot o'zgarib turadi: xarid ro'yxati, chat xabarlari, o'yinchilar ro'yxati",
            "**Tuple** — ma'lumot o'zgarmasligi kerak: sana, koordinata, RGB rang, hafta kunlari",
            "Tuple **xavfsizroq**: tasodifan o'zgartirib qo'yolmaysiz",
            "Tuple biroz **tezroq** va xotirani kamroq egallaydi",
            "Tuple'ni **lug'at kaliti** qilish mumkin, list'ni — yo'q (keyingi darsda ko'ramiz)",
            "Funksiya bir nechta qiymat qaytarsa — tuple"
          ],
          notes: "Sinfga tez o'yin: siz narsa aytasiz (\"do'kon savatchasi\", \"shaxmat katagi\", \"Telegram kontaktlari\"), ular \"list!\" yoki \"tuple!\" deb javob beradi."
        },
        {
          type: "task",
          title: "Mashq 1: Vaqt kalkulyatori",
          task: "Foydalanuvchi sekundlar sonini kiritadi (masalan, 3725). `divmod` va unpacking yordamida uni soat, daqiqa va sekundga ajratib chiqaring: `1 soat 2 daqiqa 5 sekund`.",
          starter: `sekund = int(input("Sekundlar: "))

# divmod bilan avval soatni ajrating
# keyin qolgan sekunddan daqiqani ajrating
`,
          hint: "Avval `soat, qoldiq = divmod(sekund, 3600)`, keyin `daqiqa, sek = divmod(qoldiq, 60)`.",
          solution: `sekund = int(input("Sekundlar: "))

soat, qoldiq = divmod(sekund, 3600)
daqiqa, sek = divmod(qoldiq, 60)

print(soat, "soat", daqiqa, "daqiqa", sek, "sekund")`,
          notes: "5-7 daqiqa bering. Tez tugatganlarga: natijani `01:02:05` ko'rinishida chiqarishni topshiring (f-string va `:02d`)."
        },
        {
          type: "task",
          title: "Mashq 2: Eng yaqin do'kon",
          task: "Do'konlar ro'yxati kortejlardan iborat: `(nomi, masofa_km)`. Sikl va unpacking yordamida eng yaqin do'konni toping va chiqaring. Shuningdek, 2 km dan yaqin bo'lgan do'konlarni alohida sanab chiqing.",
          starter: `dokonlar = [("Korzinka", 2.5), ("Makro", 1.2), ("Havas", 3.0), ("Baraka", 0.8)]

eng_nom = ""
eng_masofa = 1000
# shu yerga kod yozing
`,
          hint: "`for nom, masofa in dokonlar:` — har qadamda `masofa < eng_masofa` bo'lsa, ikkala o'zgaruvchini yangilang.",
          solution: `dokonlar = [("Korzinka", 2.5), ("Makro", 1.2), ("Havas", 3.0), ("Baraka", 0.8)]

eng_nom = ""
eng_masofa = 1000
yaqinlar = 0
for nom, masofa in dokonlar:
    if masofa < eng_masofa:
        eng_nom, eng_masofa = nom, masofa
    if masofa < 2:
        yaqinlar += 1

print("Eng yaqin:", eng_nom, "-", eng_masofa, "km")
print("2 km dan yaqin do'konlar soni:", yaqinlar)`,
          notes: "`eng_nom, eng_masofa = nom, masofa` — bir qatorda ikki o'zgaruvchini yangilashni ko'rsating. Bu ham kortej unpacking!"
        },
        {
          type: "summary",
          title: "Xulosa: Kortejlar",
          points: [
            "Kortej — o'zgarmas tartiblangan to'plam: `(1, 2, 3)`",
            "Bitta elementli kortej: `(5,)` — vergul shart!",
            "Indekslash, kesish, `len`, `in`, `count`, `index` ishlaydi; o'zgartirish — `TypeError`",
            "Unpacking: `a, b, c = t` — o'zgaruvchilar soni teng bo'lishi kerak",
            "`a, b = b, a` — kortej + unpacking yordamida almashtirish",
            "`divmod` kabi juft natijalar va koordinatalar uchun tuple ishlating"
          ],
          notes: "O'quvchilardan bitta-bitta \"bugun nima o'rgandim\" deb bir gap aytishni so'rang. Uyga vazifani tushuntiring."
        }
      ],
      homework: [
        { level: "oson", task: "O'zingiz haqingizda kortej yarating: `(ism, yosh, sinf, sevimli_fan)`. Unpacking bilan 4 ta o'zgaruvchiga ajrating va chiroyli gap qilib chiqaring." },
        { level: "o'rta", task: "Futbol o'yinlari natijalari ro'yxati: `[(\"Paxtakor\", 2, 1), (\"Nasaf\", 0, 0), (\"Bunyodkor\", 1, 3)]` (raqib, biz urgan, ular urgan). Nechta g'alaba, durang va mag'lubiyat bo'lganini hisoblang." },
        { level: "qiyin", task: "Foydalanuvchi 5 ta nuqtaning koordinatasini kiritadi (x va y). Ularni kortejlar ro'yxatida saqlang. Koordinata boshi (0, 0) ga eng yaqin nuqtani toping (masofa = `(x**2 + y**2) ** 0.5`) va qaysi chorakda joylashganini aniqlang." }
      ]
    },

    // ===================== DARS 2 =====================
    {
      id: "m5-l2",
      title: "Lug'atlar (dict)",
      duration: 90,
      goals: [
        "Lug'at (dict) nima ekanini kalit-qiymat juftligi orqali tushunish",
        "Lug'at yaratish, qiymatni `d[k]` va `d.get(k, default)` bilan olish",
        "Qiymat qo'shish, o'zgartirish, `del` va `pop` bilan o'chirish",
        "`in` bilan kalitni tekshirish, `keys()`, `values()`, `items()` bilan ishlash",
        "`KeyError` xatosini tushunish va undan qochish"
      ],
      keywords: ["dict", "lug'at", "kalit", "qiymat", "get", "items", "KeyError"],
      plan: [
        { time: 10, label: "Takrorlash: kortejlar, unpacking" },
        { time: 15, label: "Lug'at g'oyasi, yaratish va o'qish" },
        { time: 20, label: "get, qo'shish, o'zgartirish, o'chirish" },
        { time: 20, label: "in, keys/values/items, sikl" },
        { time: 20, label: "Amaliy mashqlar" },
        { time: 5, label: "Xulosa va uyga vazifa" }
      ],
      slides: [
        {
          type: "title",
          title: "Lug'atlar (dict)",
          subtitle: "Kalit bo'yicha qidirish: telefon kitobi kabi",
          emoji: "📖",
          notes: "Takrorlash: \"Kortejni qanday ochamiz?\", \"(5) va (5,) farqi?\". Keyin: \"Ro'yxatda Alining bahosini topish uchun nima qilardik?\" — indeksni eslab qolish noqulay ekanini his qildiring."
        },
        {
          type: "analogy",
          title: "Lug'at — bu telefoningizdagi kontaktlar",
          emoji: "📱",
          text: "Telefoningizda \"Onam\" deb qidirsangiz, darhol raqam chiqadi. Siz \"kontakt raqami 37\" deb eslab qolmaysiz — **ism** bo'yicha qidirasiz. Python lug'ati ham xuddi shunday: har bir **kalit** (ism) o'zining **qiymatiga** (telefon raqami) bog'langan. Yoki inglizcha-o'zbekcha lug'at kitobini oling: \"apple\" so'zini topsangiz — \"olma\" yozilgan. So'z — kalit, tarjima — qiymat.",
          notes: "Sinfdan so'rang: hayotda yana qayerda \"kalit → qiymat\" bor? (Bozorda mahsulot → narx, jurnalda o'quvchi → baho, o'yinda o'yinchi → ochko, Telegram'da username → profil)."
        },
        {
          type: "text",
          title: "Lug'at qanday tuzilgan?",
          body: "Lug'at jingalak qavslar `{ }` ichida yoziladi. Har bir element — **kalit: qiymat** juftligi, juftliklar vergul bilan ajratiladi.",
          points: [
            "`{\"olma\": 12000, \"nok\": 15000}` — kalit `\"olma\"`, qiymat `12000`",
            "Kalitlar **takrorlanmaydi** — bitta kalitga bitta qiymat",
            "Kalit o'zgarmas tur bo'lishi kerak: `str`, `int`, `tuple` (lekin `list` — yo'q!)",
            "Qiymat esa har qanday narsa: son, matn, ro'yxat, hatto boshqa lug'at",
            "Qidirish indeks bilan emas, **kalit** bilan: `narx[\"olma\"]`",
            "Python 3.7+ da lug'at elementlar qo'shilgan tartibni eslab qoladi"
          ],
          notes: "Doskada chiziq chizib ko'rsating: chap ustun — kalitlar, o'ng ustun — qiymatlar. Ro'yxatda \"kalit\" — bu 0, 1, 2 indekslar edi, lug'atda esa o'zimiz tanlaymiz."
        },
        {
          type: "code",
          title: "Lug'at yaratish va qiymatni olish",
          code: `narxlar = {
    "olma": 12000,
    "nok": 15000,
    "uzum": 20000
}

print(narxlar)
print(narxlar["olma"])
print(len(narxlar))

bosh = {}                 # bo'sh lug'at
print(type(bosh))`,
          explain: [
            "Lug'atni bir necha qatorda yozish o'qishni osonlashtiradi",
            "`narxlar[\"olma\"]` — kalit bo'yicha qiymatni olish",
            "`len()` — nechta juftlik borligini bildiradi",
            "`{}` — bo'sh lug'at (bo'sh to'plam emas — buni keyingi darsda ko'ramiz!)"
          ],
          output: `{'olma': 12000, 'nok': 15000, 'uzum': 20000}
12000
3
<class 'dict'>`,
          notes: "O'quvchilardan `print(narxlar[0])` ni sinab ko'rishni so'rang — KeyError: 0 chiqadi. Lug'atda indeks yo'q, faqat kalit!"
        },
        {
          type: "code",
          title: "KeyError va .get() — xavfsiz o'qish",
          code: `baholar = {"Ali": 5, "Vali": 4}

print(baholar.get("Ali"))
print(baholar.get("Sardor"))
print(baholar.get("Sardor", 0))
print(baholar.get("Sardor", "topilmadi"))

# print(baholar["Sardor"])
# Agar yuqoridagi qatorni ochsak, dastur yiqiladi:
# KeyError: 'Sardor'`,
          explain: [
            "`d[k]` — kalit bo'lmasa **KeyError** bilan dastur to'xtaydi",
            "`d.get(k)` — kalit bo'lmasa `None` qaytaradi, xato bermaydi",
            "`d.get(k, standart)` — kalit bo'lmasa siz bergan standart qiymat qaytadi",
            "Kalit borligiga ishonchingiz komil bo'lmasa — `get` ishlating"
          ],
          output: `5
None
0
topilmadi`,
          notes: "Oxirgi qatordagi `#` ni olib tashlab, ▶ bilan haqiqiy xatoni ko'rsating. Xato xabarini o'qishni o'rgating: oxirgi qatorda xato turi va sababi bor."
        },
        {
          type: "compare",
          title: "Kalit yo'q bo'lsa: d[k] yoki d.get(k)?",
          left: {
            label: "❌ Xavfli: KeyError chiqishi mumkin",
            code: `kontakt = {"Onam": "+998901234567"}
ism = "Dadam"
print(kontakt[ism])
# KeyError: 'Dadam'`
          },
          right: {
            label: "✅ Xavfsiz: get yoki in bilan",
            code: `kontakt = {"Onam": "+998901234567"}
ism = "Dadam"
print(kontakt.get(ism, "Kontakt yo'q"))

if ism in kontakt:
    print(kontakt[ism])
else:
    print("Bunday kontakt yo'q")`
          },
          good: "right",
          notes: "Ikkala usul ham to'g'ri: `get` qisqa, `if ... in` esa turli holatlarda turli ish qilish kerak bo'lsa qulay. Foydalanuvchi kiritgan kalit bilan ishlaganda har doim tekshiring!"
        },
        {
          type: "code",
          title: "Qo'shish va o'zgartirish",
          code: `oyinchi = {"nik": "ShoxPro", "daraja": 5}

oyinchi["daraja"] = 6          # o'zgartirish
oyinchi["oltin"] = 250         # yangi kalit qo'shish
oyinchi["oltin"] += 100        # qiymatni oshirish

print(oyinchi)

oyinchi.update({"daraja": 7, "klan": "Tashkent"})
print(oyinchi)`,
          explain: [
            "`d[k] = v` — kalit **bor** bo'lsa qiymatni almashtiradi, **yo'q** bo'lsa yangisini qo'shadi",
            "Bitta sintaksis — ikki xil vazifa! Shuning uchun ehtiyot bo'ling",
            "`d[k] += 1` — faqat kalit allaqachon bor bo'lsa ishlaydi",
            "`update()` — bir yo'la bir nechta juftlikni qo'shadi/o'zgartiradi"
          ],
          output: `{'nik': 'ShoxPro', 'daraja': 6, 'oltin': 350}
{'nik': 'ShoxPro', 'daraja': 7, 'oltin': 350, 'klan': 'Tashkent'}`,
          notes: "Savol: \"Agar `oyinchi[\"olmos\"] += 5` yozsak nima bo'ladi?\" — KeyError, chunki \"olmos\" hali yo'q. Bu keyingi darsdagi sanash usuliga ko'prik."
        },
        {
          type: "code",
          title: "O'chirish: del va pop",
          code: `savat = {"non": 2, "sut": 1, "tuxum": 10, "choy": 1}

del savat["choy"]
print(savat)

soni = savat.pop("tuxum")
print("O'chirildi, soni:", soni)
print(savat)

print(savat.pop("shakar", 0))   # yo'q bo'lsa 0 qaytadi
print(savat)`,
          explain: [
            "`del d[k]` — kalitni o'chiradi (kalit yo'q bo'lsa — KeyError)",
            "`d.pop(k)` — o'chiradi **va** o'chirilgan qiymatni qaytaradi",
            "`d.pop(k, standart)` — kalit yo'q bo'lsa xato emas, standart qiymat qaytadi",
            "`d.clear()` — lug'atni butunlay bo'shatadi"
          ],
          output: `{'non': 2, 'sut': 1, 'tuxum': 10}
O'chirildi, soni: 10
{'non': 2, 'sut': 1}
0
{'non': 2, 'sut': 1}`,
          notes: "Ro'yxatdagi `pop()` ni eslating: u indeks bo'yicha o'chirardi, lug'atdagi esa kalit bo'yicha."
        },
        {
          type: "quiz",
          question: "Bu kod nima chiqaradi?",
          code: `d = {"a": 1, "b": 2}
d["a"] = 10
d["c"] = 3
print(len(d), d["a"])`,
          options: ["2 1", "3 10", "4 10", "KeyError"],
          answer: 1,
          explain: "\"a\" allaqachon bor — qiymati 10 ga o'zgaradi. \"c\" yo'q edi — yangi qo'shiladi. Jami 3 ta kalit, `d[\"a\"]` = 10.",
          notes: "4-variantni tanlaganlar \"a\" ni ikki marta sanagan — kalit takrorlanmasligini qayta ta'kidlang."
        },
        {
          type: "code",
          title: "in — kalit bormi?",
          code: `lugat = {"apple": "olma", "book": "kitob", "cat": "mushuk"}

soz = "book"
if soz in lugat:
    print(soz, "-", lugat[soz])

print("dog" in lugat)
print("olma" in lugat)          # qiymat emas, kalit tekshiriladi!
print("olma" in lugat.values())`,
          explain: [
            "`k in d` — **faqat kalitlar** orasidan qidiradi",
            "\"olma\" — bu qiymat, shuning uchun `\"olma\" in lugat` → `False`",
            "Qiymatlar orasidan qidirish: `v in d.values()`",
            "Lug'atda `in` juda tez ishlaydi — hatto million kalit bo'lsa ham"
          ],
          output: `book - kitob
False
False
True`,
          notes: "Bu klassik xato: o'quvchilar `in` qiymatlarni ham tekshiradi deb o'ylashadi. Uchinchi qatordan oldin to'xtab, natijani taxmin qildiring."
        },
        {
          type: "code",
          title: "keys(), values(), items()",
          code: `ballar = {"Aziz": 85, "Laylo": 92, "Bobur": 78}

print(list(ballar.keys()))
print(list(ballar.values()))
print(list(ballar.items()))

print("Jami:", sum(ballar.values()))
print("Eng yuqori:", max(ballar.values()))
print("O'rtacha:", sum(ballar.values()) / len(ballar))`,
          explain: [
            "`keys()` — barcha kalitlar",
            "`values()` — barcha qiymatlar (`sum`, `max`, `min` bilan qulay)",
            "`items()` — `(kalit, qiymat)` **kortejlari** — o'tgan darsdagi tuple shu yerda!",
            "`list()` ga o'rab, oddiy ro'yxat ko'rinishida chiqaramiz"
          ],
          output: `['Aziz', 'Laylo', 'Bobur']
[85, 92, 78]
[('Aziz', 85), ('Laylo', 92), ('Bobur', 78)]
Jami: 255
Eng yuqori: 92
O'rtacha: 85.0`,
          notes: "`items()` natijasida kortejlarni ko'rsatib, \"bu kecha o'rgangan narsamiz!\" deb bog'lang. Keyingi slaydda ularni sikl ichida unpacking qilamiz."
        },
        {
          type: "code",
          title: "Lug'at bo'ylab sikl",
          code: `ballar = {"Aziz": 85, "Laylo": 92, "Bobur": 78}

for ism in ballar:                  # faqat kalitlar
    print(ism)

print("---")
for ism, ball in ballar.items():    # kalit + qiymat
    if ball >= 80:
        print(ism, "->", ball, "a'lo")
    else:
        print(ism, "->", ball, "yaxshi")`,
          explain: [
            "`for k in d:` — faqat **kalitlar** bo'yicha aylanadi",
            "`for k, v in d.items():` — kalit va qiymat birga (unpacking!)",
            "Bu eng ko'p ishlatiladigan usul — yodlab oling",
            "Sikl davomida lug'atga kalit qo'shish/o'chirish mumkin emas — xato beradi"
          ],
          output: `Aziz
Laylo
Bobur
---
Aziz -> 85 a'lo
Laylo -> 92 a'lo
Bobur -> 78 yaxshi`,
          notes: "O'quvchilardan `for k, v in ballar:` (items'siz) yozib ko'rishni so'rang — xato chiqadi. Nima uchun? Chunki faqat kalitlar keladi va satrni ikkiga ochib bo'lmaydi."
        },
        {
          type: "quiz",
          question: "Qaysi kod lug'atdagi barcha qiymatlarning yig'indisini to'g'ri hisoblaydi?",
          code: `d = {"x": 3, "y": 5, "z": 2}`,
          options: ["sum(d)", "sum(d.keys())", "sum(d.values())", "sum(d.items())"],
          answer: 2,
          explain: "`sum(d)` va `sum(d.keys())` kalitlarni (matnlarni) qo'shmoqchi bo'ladi — xato. `d.values()` esa 3, 5, 2 sonlarini beradi → 10.",
          notes: "Har bir variantni nima uchun xato ekanini o'quvchilarning o'zidan so'rang."
        },
        {
          type: "code",
          title: "Amaliy misol: bozordan xarid",
          code: `narx = {"pomidor": 8000, "bodring": 6000, "kartoshka": 5000}
savat = {"pomidor": 2, "kartoshka": 3, "piyoz": 1}

jami = 0
for mahsulot, kg in savat.items():
    if mahsulot in narx:
        summa = narx[mahsulot] * kg
        jami += summa
        print(mahsulot, kg, "kg =", summa, "so'm")
    else:
        print(mahsulot, "- bozorda yo'q")
print("Jami:", jami, "so'm")`,
          explain: [
            "Ikkita lug'at: biri narxlar, ikkinchisi xarid miqdori",
            "`items()` bilan savatni aylanamiz",
            "`in` bilan narx lug'atida mahsulot bor-yo'qligini tekshiramiz — KeyError'dan himoya",
            "Haqiqiy dasturlar (masalan, Uzum Market savatchasi) ham shunga o'xshash ishlaydi"
          ],
          output: `pomidor 2 kg = 16000 so'm
kartoshka 3 kg = 15000 so'm
piyoz - bozorda yo'q
Jami: 31000 so'm`,
          notes: "Savol: \"`narx[mahsulot]` o'rniga nima yozsak if kerak bo'lmasdi?\" — `narx.get(mahsulot, 0)`."
        },
        {
          type: "task",
          title: "Mashq 1: Mini tarjimon",
          task: "Inglizcha-o'zbekcha lug'at yarating (kamida 6 ta so'z). Foydalanuvchi so'z kiritadi, dastur tarjimasini chiqaradi. So'z topilmasa — \"Bu so'z lug'atda yo'q\" deb yozsin. Foydalanuvchi \"stop\" yozguncha davom etsin.",
          starter: `lugat = {
    "apple": "olma",
    "book": "kitob",
    # yana so'zlar qo'shing
}

while True:
    soz = input("Inglizcha so'z (stop - chiqish): ")
    # shu yerga kod
`,
          hint: "`soz.lower()` bilan kichik harfga o'tkazing. `break` bilan chiqing. Tarjimani `lugat.get(soz, \"...\")` bilan oling.",
          solution: `lugat = {
    "apple": "olma",
    "book": "kitob",
    "cat": "mushuk",
    "school": "maktab",
    "friend": "do'st",
    "water": "suv"
}

while True:
    soz = input("Inglizcha so'z (stop - chiqish): ").strip().lower()
    if soz == "stop":
        print("Xayr!")
        break
    print(lugat.get(soz, "Bu so'z lug'atda yo'q"))`,
          notes: "Tez tugatganlarga bonus: so'z topilmasa, foydalanuvchidan tarjimasini so'rab, lug'atga qo'shish."
        },
        {
          type: "task",
          title: "Mashq 2: Telefon kitobi",
          task: "Kontaktlar lug'ati bilan menyu yarating: 1 — kontakt qo'shish, 2 — qidirish, 3 — o'chirish, 4 — hammasini ko'rsatish, 0 — chiqish. Mavjud bo'lmagan kontaktni qidirish yoki o'chirishda dastur yiqilmasligi kerak.",
          starter: `kontaktlar = {"Onam": "+998901112233"}

while True:
    print("1-qo'shish 2-qidirish 3-o'chirish 4-hammasi 0-chiqish")
    tanlov = input("> ")
    # shu yerga kod
`,
          hint: "O'chirishda `if ism in kontaktlar: del kontaktlar[ism]`. Hammasini ko'rsatishda `for ism, tel in kontaktlar.items():`.",
          solution: `kontaktlar = {"Onam": "+998901112233"}

while True:
    print("1-qo'shish 2-qidirish 3-o'chirish 4-hammasi 0-chiqish")
    tanlov = input("> ")
    if tanlov == "1":
        ism = input("Ism: ")
        tel = input("Raqam: ")
        kontaktlar[ism] = tel
        print("Saqlandi!")
    elif tanlov == "2":
        ism = input("Kimni qidiramiz: ")
        print(kontaktlar.get(ism, "Topilmadi"))
    elif tanlov == "3":
        ism = input("Kimni o'chiramiz: ")
        if ism in kontaktlar:
            del kontaktlar[ism]
            print("O'chirildi")
        else:
            print("Bunday kontakt yo'q")
    elif tanlov == "4":
        for ism, tel in kontaktlar.items():
            print(ism, ":", tel)
    elif tanlov == "0":
        break
    else:
        print("Noto'g'ri tanlov")`,
          notes: "Bu mashq loyihaning (maktab jurnali) kichik versiyasi. Yaxshi yechimlarni proyektorda ko'rsating."
        },
        {
          type: "summary",
          title: "Xulosa: Lug'atlar",
          points: [
            "Lug'at — **kalit: qiymat** juftliklari: `{\"olma\": 12000}`",
            "`d[k]` — kalit bo'lmasa KeyError; `d.get(k, standart)` — xavfsiz",
            "`d[k] = v` — qo'shadi yoki o'zgartiradi; `del d[k]`, `d.pop(k)` — o'chiradi",
            "`k in d` — faqat kalitlarni tekshiradi",
            "`keys()`, `values()`, `items()`; sikl: `for k, v in d.items():`",
            "Kalitlar takrorlanmaydi va o'zgarmas turdan bo'lishi kerak"
          ],
          notes: "Chiqishdan oldin \"exit ticket\": har bir o'quvchi qog'ozga `get` va `[]` farqini bitta gap bilan yozib bersin."
        }
      ],
      homework: [
        { level: "oson", task: "5 ta do'stingizning tug'ilgan oyini lug'atda saqlang (ism → oy). Foydalanuvchi ism kiritsa, tug'ilgan oyini chiqaring; ism topilmasa xabar bering." },
        { level: "o'rta", task: "Oshxona menyusi lug'ati yarating (taom → narx). Foydalanuvchi buyurtmani \"end\" deguncha kiritadi. Oxirida chek chiqaring: har bir taom va jami summa. Menyuda yo'q taom kiritilsa ogohlantiring." },
        { level: "qiyin", task: "Ikkita lug'at berilgan: `ombor` (mahsulot → soni) va `sotuv` (mahsulot → sotilgan soni). Sotuvdan keyin ombordagi qoldiqni hisoblang. Agar biror mahsulot qoldig'i 0 ga tushsa, uni ombordan `pop` bilan o'chiring va \"tugadi\" deb xabar bering. Omborda yetarli bo'lmasa — xato xabari chiqaring." }
      ]
    },

    // ===================== DARS 3 =====================
    {
      id: "m5-l3",
      title: "Lug'atlar amaliyoti va to'plamlar (set)",
      duration: 90,
      goals: [
        "Lug'at yordamida harf va so'zlarni sanash (sanash namunasi)",
        "Qiymati ro'yxat bo'lgan lug'at (dict of lists) bilan ishlash",
        "To'plam (set) yaratish, `add`, `remove`, `discard`",
        "Birlashma, kesishma, ayirma amallarini real misollarda qo'llash",
        "Ro'yxatdagi takrorlanishlarni olib tashlash va tez `in` tekshiruvi"
      ],
      keywords: ["sanash", "set", "to'plam", "union", "intersection", "difference", "add", "discard"],
      plan: [
        { time: 10, label: "Takrorlash: lug'at metodlari, get" },
        { time: 25, label: "Sanash namunasi va dict of lists" },
        { time: 25, label: "To'plamlar: yaratish, amallar" },
        { time: 25, label: "Amaliy mashqlar" },
        { time: 5, label: "Xulosa va uyga vazifa" }
      ],
      slides: [
        {
          type: "title",
          title: "Lug'atlar amaliyoti va to'plamlar",
          subtitle: "Sanaymiz, guruhlaymiz va takrorlarni yo'qotamiz",
          emoji: "🧮",
          notes: "Takrorlash savollari: \"`get` ikkinchi argumenti nima uchun?\", \"`for k, v in d.items()` nima qiladi?\". Bugungi dars juda amaliy ekanini ayting."
        },
        {
          type: "text",
          title: "Sanash namunasi (counting pattern)",
          body: "Dasturlashda eng ko'p uchraydigan masalalardan biri — **nimadir necha marta uchraganini sanash**. Lug'at bunga ideal: kalit — sanalayotgan narsa, qiymat — necha marta.",
          points: [
            "1. Bo'sh lug'at yaratamiz: `sanoq = {}`",
            "2. Har bir element bo'yicha aylanamiz",
            "3. Agar element lug'atda bo'lmasa — 0 deb olamiz, keyin 1 qo'shamiz",
            "Qisqa yozuv: `sanoq[x] = sanoq.get(x, 0) + 1`",
            "Bu bitta qator — bugungi darsning eng muhim qatori!"
          ],
          notes: "Doskada \"anana\" so'zini qadam-baqadam sanab ko'rsating: har harfda lug'at qanday o'zgarishini jadval qilib yozing."
        },
        {
          type: "code",
          title: "Harflarni sanash",
          code: `soz = "assalomu alaykum"
sanoq = {}

for harf in soz:
    if harf == " ":
        continue
    sanoq[harf] = sanoq.get(harf, 0) + 1

print(sanoq)
print("'a' harfi:", sanoq["a"], "marta")`,
          explain: [
            "`sanoq.get(harf, 0)` — harf hali yo'q bo'lsa 0, bor bo'lsa joriy son",
            "Unga 1 qo'shib, qaytadan saqlaymiz",
            "Probelni `continue` bilan o'tkazib yuboramiz",
            "Lug'at harflar birinchi uchragan tartibda chiqadi"
          ],
          output: `{'a': 4, 's': 2, 'l': 2, 'o': 1, 'm': 2, 'u': 2, 'y': 1, 'k': 1}
'a' harfi: 4 marta`,
          notes: "O'quvchilardan o'z ismlaridagi harflarni sanab ko'rishni so'rang (soz o'zgaruvchisini almashtirib)."
        },
        {
          type: "code",
          title: "So'zlarni sanash va eng ko'p uchraganini topish",
          code: `matn = "men maktabga boraman men kitob olaman men o'qiyman kitob"
sozlar = matn.split()

sanoq = {}
for s in sozlar:
    sanoq[s] = sanoq.get(s, 0) + 1

for soz, son in sanoq.items():
    print(soz, ":", son)

eng = max(sanoq, key=sanoq.get)
print("Eng ko'p:", eng, "-", sanoq[eng], "marta")`,
          explain: [
            "`split()` — matnni so'zlarga ajratadi (strings mavzusidan eslang)",
            "Har bir so'zni sanash namunasi bilan sanaymiz",
            "`max(sanoq, key=sanoq.get)` — qiymati eng katta bo'lgan **kalitni** topadi",
            "Bu usul Telegram chatlaridagi eng ko'p yozilgan so'zni topishda ham ishlaydi"
          ],
          output: `men : 3
maktabga : 1
boraman : 1
kitob : 2
olaman : 1
o'qiyman : 1
Eng ko'p: men - 3 marta`,
          notes: "`key=sanoq.get` ni qisqa tushuntiring: \"max har bir kalitni uning qiymati bo'yicha solishtiradi\". Agar qiyin bo'lsa, oddiy sikl bilan ham eng kattasini topish mumkinligini ko'rsating."
        },
        {
          type: "compare",
          title: "Sanashdagi eng ko'p xato",
          left: {
            label: "❌ Kalit yo'qligida += ishlamaydi",
            code: `mevalar = ["olma", "nok", "olma"]
sanoq = {}
for m in mevalar:
    sanoq[m] += 1
# KeyError: 'olma'`
          },
          right: {
            label: "✅ get(k, 0) yoki if bilan",
            code: `mevalar = ["olma", "nok", "olma"]
sanoq = {}
for m in mevalar:
    if m in sanoq:
        sanoq[m] += 1
    else:
        sanoq[m] = 1
print(sanoq)  # {'olma': 2, 'nok': 1}`
          },
          good: "right",
          notes: "Ikkala to'g'ri usulni ham ko'rsating: `if/else` uzunroq, lekin tushunarliroq; `get(m, 0) + 1` qisqaroq. O'quvchi qaysi birini tushunsa, o'shani ishlatsin."
        },
        {
          type: "code",
          title: "Lug'at ichida ro'yxat (dict of lists)",
          code: `baholar = {
    "Aziz": [5, 4, 5],
    "Laylo": [5, 5, 5],
}

baholar["Aziz"].append(3)        # mavjud ro'yxatga qo'shish
baholar["Bobur"] = []             # yangi o'quvchi
baholar["Bobur"].append(4)

for ism, b in baholar.items():
    ortacha = sum(b) / len(b)
    print(ism, b, "o'rtacha:", round(ortacha, 2))`,
          explain: [
            "Qiymat ro'yxat bo'lishi mumkin: bitta o'quvchi — ko'p baho",
            "`baholar[\"Aziz\"]` — bu ro'yxat, unga `.append()` qilsa bo'ladi",
            "Yangi kalit uchun avval bo'sh ro'yxat yaratamiz",
            "Bu aynan modul loyihasi — \"Maktab jurnali\"ning asosi!"
          ],
          output: `Aziz [5, 4, 5, 3] o'rtacha: 4.25
Laylo [5, 5, 5] o'rtacha: 5.0
Bobur [4] o'rtacha: 4.0`,
          notes: "Savol: \"Agar Boburga bo'sh ro'yxat yaratmasdan `append` qilsak?\" — KeyError. \"Agar ro'yxat bo'sh qolsa, o'rtacha hisoblashda nima bo'ladi?\" — ZeroDivisionError."
        },
        {
          type: "quiz",
          question: "Bu kod nima chiqaradi?",
          code: `s = "kitob"
d = {}
for h in s:
    d[h] = d.get(h, 0) + 1
print(len(d), d["k"])`,
          options: ["5 1", "4 1", "5 2", "4 2"],
          answer: 0,
          explain: "\"kitob\" — k, i, t, o, b — 5 xil harf, hech biri takrorlanmaydi. Shuning uchun 5 ta kalit va `d[\"k\"]` = 1.",
          notes: "Variantni o'zgartirib so'rang: \"maktab\" bo'lsa? (5 ta kalit: m, a, k, t, b; d[\"a\"] = 2)."
        },
        {
          type: "analogy",
          title: "To'plam (set) — stikerlar kolleksiyasi",
          emoji: "🃏",
          text: "Futbolchilar stikerlarini yig'yapsiz deylik. Sizga Ronaldoning stikeri 3 marta tushdi — lekin albomda u **bitta** joy egallaydi. Albomga \"nechta xil stikerim bor\" muhim, takrorlar emas. Python'dagi **to'plam (set)** ham shunday: u faqat **takrorlanmas** qiymatlarni saqlaydi va tartibga ahamiyat bermaydi. Do'stingiz bilan albomlarni solishtirsangiz — \"ikkalamizda bor stikerlar\", \"faqat menda bor stikerlar\" — bu set amallari!",
          notes: "Yana misol: maktab to'garaklari (futbol to'garagi va shaxmat to'garagi a'zolari). Ikkalasiga qatnaydigan o'quvchilar — kesishma."
        },
        {
          type: "code",
          title: "To'plam yaratish va o'zgartirish",
          code: `sonlar = {3, 1, 3, 2, 1, 3}
print(sonlar)                     # takrorlar yo'qoldi
print(len(sonlar))

stikerlar = set()                 # bo'sh to'plam
stikerlar.add("Messi")
stikerlar.add("Ronaldo")
stikerlar.add("Messi")            # ikkinchi marta qo'shilmaydi
print(sorted(stikerlar))

stikerlar.remove("Ronaldo")       # yo'q bo'lsa - KeyError
stikerlar.discard("Neymar")       # yo'q bo'lsa - jim
print(sorted(stikerlar))`,
          explain: [
            "To'plam `{ }` ichida, lekin kalit-qiymat emas, faqat qiymatlar",
            "**Bo'sh to'plam faqat `set()`!** `{}` — bu bo'sh lug'at",
            "`add()` — qo'shish (bor bo'lsa, hech narsa o'zgarmaydi)",
            "`remove()` — yo'q elementda xato; `discard()` — xatosiz",
            "To'plamda **indeks yo'q**: `s[0]` — xato. Tartib kafolatlanmaydi, shuning uchun chiqarishda `sorted()` ishlatamiz"
          ],
          output: `{1, 2, 3}
3
['Messi', 'Ronaldo']
['Messi']`,
          notes: "Set elementlari tartibi har safar boshqacha bo'lishi mumkinligini ayting (ayniqsa matnlarda) — shuning uchun `sorted()` bilan chiqaramiz. sorted() natijasi ro'yxat ekaniga e'tibor bering."
        },
        {
          type: "code",
          title: "To'plam amallari: to'garaklar misolida",
          code: `futbol = {"Aziz", "Bobur", "Sardor", "Jasur"}
shaxmat = {"Laylo", "Bobur", "Jasur", "Malika"}

ikkalasi = futbol & shaxmat       # kesishma
hammasi = futbol | shaxmat        # birlashma
faqat_futbol = futbol - shaxmat   # ayirma
bittasida = futbol ^ shaxmat      # faqat bittasida

print("Ikkalasida:", sorted(ikkalasi))
print("Hammasi:", sorted(hammasi))
print("Faqat futbol:", sorted(faqat_futbol))
print("Faqat bittasida:", sorted(bittasida))`,
          explain: [
            "`a & b` yoki `a.intersection(b)` — **kesishma**: ikkalasida ham bor",
            "`a | b` yoki `a.union(b)` — **birlashma**: kamida bittasida bor (takrorsiz)",
            "`a - b` yoki `a.difference(b)` — **ayirma**: a da bor, b da yo'q",
            "`a ^ b` — **simmetrik ayirma**: faqat bittasida bor",
            "Matematikadagi Eyler-Venn diagrammasini eslang!"
          ],
          output: `Ikkalasida: ['Bobur', 'Jasur']
Hammasi: ['Aziz', 'Bobur', 'Jasur', 'Laylo', 'Malika', 'Sardor']
Faqat futbol: ['Aziz', 'Sardor']
Faqat bittasida: ['Aziz', 'Laylo', 'Malika', 'Sardor']`,
          notes: "Doskada ikkita kesishgan doira chizing va har bir amalni rang bilan bo'yab ko'rsating. Savol: `shaxmat - futbol` nima beradi? (Laylo, Malika)."
        },
        {
          type: "code",
          title: "Ro'yxatdagi takrorlarni olib tashlash",
          code: `# Telegram guruhiga kim nechta xabar yozdi
yozganlar = ["Ali", "Vali", "Ali", "Hasan", "Vali", "Ali"]

noyob = set(yozganlar)
print("Nechta odam yozgan:", len(noyob))
print(sorted(noyob))

# Tartibni saqlab takrorlarni olib tashlash:
natija = []
for ism in yozganlar:
    if ism not in natija:
        natija.append(ism)
print(natija)`,
          explain: [
            "`set(royxat)` — bir zumda takrorlarni olib tashlaydi",
            "`len(set(...))` — nechta **xil** element borligini bildiradi",
            "Kamchiligi: asl tartib yo'qoladi",
            "Tartib muhim bo'lsa — sikl va `not in` bilan yangi ro'yxat yig'amiz"
          ],
          output: `Nechta odam yozgan: 3
['Ali', 'Hasan', 'Vali']
['Ali', 'Vali', 'Hasan']`,
          notes: "`len(set(x)) == len(x)` — ro'yxatda takror yo'qligini tekshirishning qisqa usuli ekanini ko'rsating."
        },
        {
          type: "text",
          title: "Nega to'plam tez?",
          body: "Ro'yxatda `x in royxat` tekshirilganda Python elementlarni **birma-bir** ko'rib chiqadi. Million element bo'lsa — million qadam! To'plam va lug'at esa maxsus \"manzil tizimi\" (hash) ishlatadi va elementni deyarli **bir zumda** topadi.",
          points: [
            "Ro'yxatda qidirish — kitobni birinchi betdan varaqlash",
            "To'plamda qidirish — kitob mundarijasidan darhol sahifani topish",
            "Ko'p `in` tekshiruvi kerak bo'lsa — ro'yxatni to'plamga aylantiring",
            "Shu sababli set elementlari va dict kalitlari **o'zgarmas** bo'lishi shart (`list` — mumkin emas, `tuple` — mumkin)",
            "Eslatma: `{}` — bo'sh **lug'at**, bo'sh to'plam — `set()`"
          ],
          notes: "Misol: maktabdagi 1500 o'quvchidan kimdir \"ro'yxatda bormi?\" — navbatchi har birini so'rasa uzoq, alfavit bo'yicha papka bo'lsa darhol topadi."
        },
        {
          type: "quiz",
          question: "Bu kod nima chiqaradi?",
          code: `a = {}
b = set()
c = {1, 2, 2, 3}
print(type(a).__name__, type(b).__name__, len(c))`,
          options: ["set set 4", "dict set 3", "set set 3", "dict dict 4"],
          answer: 1,
          explain: "`{}` — bo'sh lug'at (dict), bo'sh to'plam faqat `set()` bilan yasaladi. `{1, 2, 2, 3}` da takror 2 tushib qoladi → 3 ta element.",
          notes: "`.__name__` turning nomini chiqaradi — buni qisqacha izohlang, asosiy e'tibor `{}` tuzog'iga."
        },
        {
          type: "task",
          title: "Mashq 1: Ovoz berish natijalari",
          task: "Sinf sardori saylovi! Ovozlar ro'yxati berilgan. Lug'at yordamida har bir nomzod nechta ovoz olganini sanang, natijalarni chiqaring va g'olibni e'lon qiling. Shuningdek, nechta xil nomzodga ovoz berilganini `set` bilan toping.",
          starter: `ovozlar = ["Laylo", "Aziz", "Laylo", "Bobur", "Aziz", "Laylo", "Malika", "Aziz", "Laylo"]

natija = {}
# sanash namunasi
`,
          hint: "`natija[ism] = natija.get(ism, 0) + 1`. G'olibni sikl bilan yoki `max(natija, key=natija.get)` bilan toping. Nomzodlar soni: `len(set(ovozlar))`.",
          solution: `ovozlar = ["Laylo", "Aziz", "Laylo", "Bobur", "Aziz", "Laylo", "Malika", "Aziz", "Laylo"]

natija = {}
for ism in ovozlar:
    natija[ism] = natija.get(ism, 0) + 1

for ism, son in natija.items():
    print(ism, ":", son, "ovoz")

golib = ""
eng_kop = 0
for ism, son in natija.items():
    if son > eng_kop:
        golib, eng_kop = ism, son

print("G'olib:", golib, "-", eng_kop, "ovoz")
print("Nomzodlar soni:", len(set(ovozlar)))`,
          notes: "Bonus topshiriq: har bir nomzod ovozining foizini ham chiqarish. Har bir ovoz uchun `\"*\" * son` bilan oddiy diagramma chizish ham qiziq."
        },
        {
          type: "task",
          title: "Mashq 2: Umumiy do'stlar",
          task: "Ikki o'quvchining Instagram'dagi do'stlari ro'yxati berilgan (takrorlar bor!). Toping: 1) umumiy do'stlar, 2) faqat birinchisining do'stlari, 3) jami nechta noyob odam. Natijalarni alifbo tartibida chiqaring.",
          starter: `aziz = ["Ali", "Vali", "Sardor", "Ali", "Kamola"]
laylo = ["Kamola", "Dilnoza", "Vali", "Dilnoza", "Zuhra"]

# avval to'plamga aylantiring
`,
          hint: "`a = set(aziz)`, `b = set(laylo)`. Umumiy — `a & b`, faqat Aziz — `a - b`, hammasi — `a | b`. Chiqarishda `sorted()`.",
          solution: `aziz = ["Ali", "Vali", "Sardor", "Ali", "Kamola"]
laylo = ["Kamola", "Dilnoza", "Vali", "Dilnoza", "Zuhra"]

a = set(aziz)
b = set(laylo)

print("Umumiy do'stlar:", sorted(a & b))
print("Faqat Azizning do'stlari:", sorted(a - b))
print("Jami noyob odamlar:", len(a | b))`,
          notes: "Savol: \"Instagram 'mutual friends' funksiyasini qanday qiladi deb o'ylaysiz?\" — aynan kesishma bilan!"
        },
        {
          type: "summary",
          title: "Xulosa: Sanash va to'plamlar",
          points: [
            "Sanash namunasi: `sanoq[x] = sanoq.get(x, 0) + 1`",
            "Dict of lists: `{\"Aziz\": [5, 4]}` — `d[k].append(v)` bilan to'ldiriladi",
            "Set — takrorlanmas, tartibsiz, indekssiz to'plam; bo'sh set — `set()`",
            "`add`, `remove` (xato beradi), `discard` (jim)",
            "`&` kesishma, `|` birlashma, `-` ayirma, `^` simmetrik ayirma",
            "`set(royxat)` — takrorlarni yo'qotadi; `in` set'da juda tez"
          ],
          notes: "Keyingi dars — ichma-ich tuzilmalar, ya'ni bugungi barcha bilimlar birlashadi. Uyga vazifadagi sanash masalasini albatta bajarishlarini so'rang."
        }
      ],
      homework: [
        { level: "oson", task: "Foydalanuvchi gap kiritadi. Gapdagi har bir unli harf (a, e, i, o, u) necha marta uchraganini lug'at yordamida sanab chiqaring." },
        { level: "o'rta", task: "Ikki xil gap kiriting. Ikkala gapda ham uchragan so'zlarni, faqat birinchi gapda uchragan so'zlarni va jami noyob so'zlar sonini toping (katta-kichik harf farqi bo'lmasin — `lower()`)." },
        { level: "qiyin", task: "Sinf o'quvchilari ro'yxati: `[(\"Aziz\", \"futbol\"), (\"Laylo\", \"shaxmat\"), (\"Bobur\", \"futbol\"), ...]` (kamida 8 ta). To'garak → o'quvchilar ro'yxati ko'rinishidagi lug'at (dict of lists) yarating. Har bir to'garakni a'zolar soni bilan chiqaring va eng ko'p a'zoli to'garakni toping." }
      ]
    },

    // ===================== DARS 4 =====================
    {
      id: "m5-l4",
      title: "Ichma-ich tuzilmalar",
      duration: 90,
      goals: [
        "Lug'atlar ro'yxati (list of dicts) yordamida ma'lumotlar bazasi yaratish",
        "Lug'atlar lug'ati (dict of dicts) bilan ishlash",
        "Ichma-ich ma'lumotlarga `a[i][\"k\"]` ko'rinishida murojaat qilish",
        "`sorted(key=lambda s: s[\"ball\"])` bilan lug'atlar ro'yxatini saralash",
        "Masalaga mos tuzilmani (list/tuple/dict/set) tanlash, dict comprehension bilan tanishish"
      ],
      keywords: ["list of dicts", "dict of dicts", "sorted", "lambda", "dict comprehension", "nested"],
      plan: [
        { time: 10, label: "Takrorlash: sanash namunasi va set amallari" },
        { time: 25, label: "Lug'atlar ro'yxati va lug'atlar lug'ati" },
        { time: 15, label: "Saralash: sorted va lambda" },
        { time: 10, label: "To'g'ri tuzilmani tanlash, dict comprehension" },
        { time: 25, label: "Amaliy mashqlar va loyiha tanishtiruvi" },
        { time: 5, label: "Xulosa va uyga vazifa" }
      ],
      slides: [
        {
          type: "title",
          title: "Ichma-ich tuzilmalar",
          subtitle: "Ro'yxat ichida lug'at, lug'at ichida lug'at — haqiqiy ma'lumotlar bazasi",
          emoji: "🧩",
          notes: "Takrorlash: \"Bo'sh set qanday yaratiladi?\", \"Harflarni sanash qatorini yozib bering\". Bugun barcha tuzilmalarni birlashtiramiz deb ayting."
        },
        {
          type: "analogy",
          title: "Ichma-ich tuzilma — bu maktab jurnali",
          emoji: "📒",
          text: "Sinf jurnalini oching: har bir **qator** — bitta o'quvchi, har bir **ustun** — ma'lumot turi (ism, sinf, ball). Bitta o'quvchi — bu lug'at: `{\"ism\": \"Aziz\", \"ball\": 85}`. Butun sinf esa — shunday lug'atlarning **ro'yxati**. Telegram ham xuddi shunday saqlaydi: chatlar ro'yxati, har bir chat — lug'at (nomi, oxirgi xabar, o'qilmaganlar soni), xabarlar esa — yana ro'yxat!",
          notes: "Doskada jadval chizing (3 qator, 3 ustun), keyin uni Python kodiga \"tarjima\" qiling. Excel jadvali bilan ham taqqoslash mumkin."
        },
        {
          type: "code",
          title: "Lug'atlar ro'yxati — o'quvchilar bazasi",
          code: `oquvchilar = [
    {"ism": "Aziz", "sinf": "8-A", "ball": 85},
    {"ism": "Laylo", "sinf": "8-B", "ball": 92},
    {"ism": "Bobur", "sinf": "8-A", "ball": 78},
]

print(oquvchilar[1])
print(oquvchilar[1]["ism"])
print(oquvchilar[-1]["ball"])

oquvchilar.append({"ism": "Malika", "sinf": "8-B", "ball": 88})
print(len(oquvchilar), "ta o'quvchi")`,
          explain: [
            "Tashqi tuzilma — **ro'yxat**, har bir elementi — **lug'at**",
            "`oquvchilar[1]` — ikkinchi o'quvchi (butun lug'at)",
            "`oquvchilar[1][\"ism\"]` — avval indeks, keyin kalit: chapdan o'ngga o'qiladi",
            "Yangi o'quvchi — `append` bilan yangi lug'at qo'shiladi"
          ],
          output: `{'ism': 'Laylo', 'sinf': '8-B', 'ball': 92}
Laylo
78
4 ta o'quvchi`,
          notes: "`oquvchilar[1][\"ism\"]` ni qadam-baqadam ochib bering: `oquvchilar[1]` → lug'at → `[\"ism\"]` → \"Laylo\". Bu \"zinapoyadan tushish\"ga o'xshaydi."
        },
        {
          type: "code",
          title: "Baza bo'ylab sikl: filtrlash va hisoblash",
          code: `oquvchilar = [
    {"ism": "Aziz", "sinf": "8-A", "ball": 85},
    {"ism": "Laylo", "sinf": "8-B", "ball": 92},
    {"ism": "Bobur", "sinf": "8-A", "ball": 78},
    {"ism": "Malika", "sinf": "8-B", "ball": 88},
]

jami = 0
for o in oquvchilar:
    jami += o["ball"]
    if o["sinf"] == "8-A":
        print(o["ism"], "- 8-A sinfda")

print("O'rtacha ball:", jami / len(oquvchilar))
alochilar = [o["ism"] for o in oquvchilar if o["ball"] >= 85]
print("85+ ball:", alochilar)`,
          explain: [
            "Siklda `o` — har safar bitta o'quvchi lug'ati",
            "`o[\"ball\"]` bilan kerakli maydonni olamiz",
            "Shart bo'yicha filtrlash — `if o[\"sinf\"] == \"8-A\"`",
            "List comprehension ham ishlaydi: shartga mos ismlar ro'yxati"
          ],
          output: `Aziz - 8-A sinfda
Bobur - 8-A sinfda
O'rtacha ball: 85.75
85+ ball: ['Aziz', 'Laylo', 'Malika']`,
          notes: "List comprehension'ni 4-modulda o'tganmiz — eslatib o'ting. Savol: 8-B sinfning o'rtacha balini qanday hisoblaymiz?"
        },
        {
          type: "code",
          title: "Lug'atlar lug'ati (dict of dicts)",
          code: `oyinchilar = {
    "ShoxPro": {"daraja": 12, "oltin": 500, "klan": "Tiger"},
    "Nodira07": {"daraja": 8, "oltin": 1200, "klan": "Eagle"},
}

print(oyinchilar["ShoxPro"]["oltin"])

oyinchilar["Nodira07"]["daraja"] += 1
oyinchilar["Jasur_UZ"] = {"daraja": 1, "oltin": 0, "klan": "-"}

for nik, info in oyinchilar.items():
    print(nik, "| daraja:", info["daraja"], "| oltin:", info["oltin"])`,
          explain: [
            "Tashqi kalit — noyob nik (username), qiymat — o'yinchi haqida lug'at",
            "Afzalligi: o'yinchini **indekssiz**, darhol nik bo'yicha topamiz",
            "`d[\"ShoxPro\"][\"oltin\"]` — ikki bosqichli murojaat",
            "`for nik, info in d.items()` — `info` ichki lug'at"
          ],
          output: `500
ShoxPro | daraja: 12 | oltin: 500
Nodira07 | daraja: 9 | oltin: 1200
Jasur_UZ | daraja: 1 | oltin: 0`,
          notes: "Savol: \"List of dicts va dict of dicts — qachon qaysi biri?\" Agar har bir yozuvning noyob nomi/ID'si bo'lsa va tez-tez shu bo'yicha qidirsak — dict of dicts."
        },
        {
          type: "code",
          title: "Chuqurroq: lug'at ichida ro'yxat ichida...",
          code: `maktab = {
    "8-A": {"rahbar": "Karimova", "oquvchilar": ["Aziz", "Bobur"]},
    "8-B": {"rahbar": "Toshmatov", "oquvchilar": ["Laylo", "Malika", "Sardor"]},
}

print(maktab["8-B"]["oquvchilar"][0])
maktab["8-A"]["oquvchilar"].append("Jasur")

for sinf, info in maktab.items():
    soni = len(info["oquvchilar"])
    print(sinf, "-", info["rahbar"], "-", soni, "o'quvchi")
    print("   ", ", ".join(info["oquvchilar"]))`,
          explain: [
            "Uch qavatli tuzilma: lug'at → lug'at → ro'yxat",
            "`maktab[\"8-B\"][\"oquvchilar\"][0]` — chapdan o'ngga uch qadam",
            "Har qadamda o'zingizdan so'rang: \"hozir qo'limda nima — list mi, dict mi?\"",
            "`\", \".join(...)` — ro'yxatni chiroyli matnga aylantiradi"
          ],
          output: `Laylo
8-A - Karimova - 3 o'quvchi
    Aziz, Bobur, Jasur
8-B - Toshmatov - 3 o'quvchi
    Laylo, Malika, Sardor`,
          notes: "Sinf bilan birga \"qo'limda nima?\" o'yinini o'ynang: `maktab` → dict, `maktab[\"8-B\"]` → dict, `...[\"oquvchilar\"]` → list, `...[0]` → str."
        },
        {
          type: "compare",
          title: "Ichma-ich murojaatdagi tipik xatolar",
          left: {
            label: "❌ Noto'g'ri",
            code: `oquvchilar = [{"ism": "Aziz", "ball": 85}]

print(oquvchilar["ism"])
# TypeError: list indices must be
# integers or slices, not str

print(oquvchilar[0].ism)
# AttributeError`
          },
          right: {
            label: "✅ To'g'ri",
            code: `oquvchilar = [{"ism": "Aziz", "ball": 85}]

print(oquvchilar[0]["ism"])     # Aziz

for o in oquvchilar:
    print(o["ism"], o["ball"])  # Aziz 85`
          },
          good: "right",
          notes: "Eng ko'p xato: ro'yxatga to'g'ridan-to'g'ri kalit bilan murojaat qilish. Avval indeks (yoki sikl) bilan lug'atni olish, keyin kalit kerak. `.ism` — boshqa tillardan (JavaScript) kelgan odat."
        },
        {
          type: "text",
          title: "lambda — saralash uchun \"kichik formula\"",
          body: "Lug'atlar ro'yxatini `sorted()` bilan to'g'ridan-to'g'ri saralab bo'lmaydi — Python ikkita lug'atni qanday solishtirishni bilmaydi. Biz unga **qaysi qiymat bo'yicha** solishtirishni aytishimiz kerak. Buning uchun `key=` parametriga kichik formula beramiz:",
          points: [
            "`lambda s: s[\"ball\"]` — \"har bir `s` o'quvchidan uning ballini ol\" degani",
            "`lambda` — kichik formula, `s` — har bir element, `:` dan keyin — nima bo'yicha solishtirish",
            "`sorted(royxat, key=lambda s: s[\"ball\"])` — ball bo'yicha o'sish tartibida",
            "`reverse=True` — kamayish tartibida (eng yuqori ball birinchi)",
            "Hozircha lambda'ni faqat saralash uchun ishlatamiz; to'liq funksiyalarni keyingi modulda o'rganamiz"
          ],
          notes: "Lambda'ni chuqur tushuntirib o'tirmang. \"Saralovchi robotga har bir o'quvchining qaysi kartasiga qarashni aytamiz\" deb tushuntiring."
        },
        {
          type: "code",
          title: "Lug'atlar ro'yxatini saralash",
          code: `oquvchilar = [
    {"ism": "Aziz", "ball": 85},
    {"ism": "Laylo", "ball": 92},
    {"ism": "Bobur", "ball": 78},
    {"ism": "Malika", "ball": 88},
]

reyting = sorted(oquvchilar, key=lambda s: s["ball"], reverse=True)
for o, s in enumerate(reyting, 1):
    print(o, s["ism"], s["ball"])

alifbo = sorted(oquvchilar, key=lambda s: s["ism"])
print([s["ism"] for s in alifbo])`,
          explain: [
            "`key=lambda s: s[\"ball\"]` — ball bo'yicha solishtir",
            "`reverse=True` — kattadan kichikka (reyting jadvali)",
            "`enumerate(..., 1)` — o'rinlarni 1 dan raqamlaydi",
            "`sorted` yangi ro'yxat qaytaradi, asl `oquvchilar` o'zgarmaydi",
            "Ism bo'yicha saralash — `lambda s: s[\"ism\"]`"
          ],
          output: `1 Laylo 92
2 Malika 88
3 Aziz 85
4 Bobur 78
['Aziz', 'Bobur', 'Laylo', 'Malika']`,
          notes: "O'quvchilarga o'zgartirib ko'rishni ayting: `reverse=True` ni olib tashlang, nima o'zgaradi? Kortejlar ro'yxati uchun ham ishlaydi: `key=lambda t: t[1]`."
        },
        {
          type: "quiz",
          question: "Bu kod nima chiqaradi?",
          code: `mahsulot = [
    {"nom": "non", "narx": 4000},
    {"nom": "sut", "narx": 12000},
    {"nom": "choy", "narx": 9000},
]
r = sorted(mahsulot, key=lambda m: m["narx"])
print(r[0]["nom"], r[-1]["nom"])`,
          options: ["non choy", "choy sut", "sut non", "non sut"],
          answer: 3,
          explain: "Narx bo'yicha o'sish tartibi: non (4000), choy (9000), sut (12000). Birinchisi — non, oxirgisi — sut.",
          notes: "Agar `reverse=True` qo'shilsa javob qanday bo'lardi? (sut non)."
        },
        {
          type: "text",
          title: "Qaysi tuzilmani tanlash kerak?",
          body: "To'g'ri tuzilma — dasturning yarmi! Qaror qabul qilish jadvali:",
          points: [
            "**list** `[ ]` — tartib muhim, takrorlar bo'lishi mumkin, o'zgaradi. Misol: navbat, xabarlar, baholar",
            "**tuple** `( )` — o'zgarmas, kichik bog'liq qiymatlar guruhi. Misol: koordinata, sana, `(ism, ball)`",
            "**dict** `{k: v}` — nom/ID bo'yicha tez qidirish. Misol: kontaktlar, narxlar, ism → baholar",
            "**set** `{ }` — faqat noyob qiymatlar, tez `in`, kesishma/birlashma. Misol: to'garak a'zolari, ko'rilgan videolar",
            "Ichma-ich: **list of dicts** — jadval (qatorlar); **dict of dicts** — ID bo'yicha yozuvlar; **dict of lists** — guruhlash"
          ],
          notes: "Bu slaydni o'quvchilar daftariga ko'chirib olishsin. Keyingi quizda shu bilimni sinaymiz."
        },
        {
          type: "quiz",
          question: "Maktab kutubxonasi: har bir kitobning noyob ID raqami bor va ID bo'yicha kitob ma'lumotlarini (nomi, muallifi, nechta nusxa) tez topish kerak. Qaysi tuzilma eng mos?",
          code: `# 1001 -> nomi: "O'tkan kunlar", muallif: "Qodiriy", nusxa: 3`,
          options: ["Matnlar ro'yxati (list of str)", "To'plam (set)", "Lug'atlar lug'ati (dict of dicts)", "Kortej (tuple)"],
          answer: 2,
          explain: "ID — tashqi kalit, kitob ma'lumotlari — ichki lug'at: `{1001: {\"nom\": ..., \"muallif\": ..., \"nusxa\": 3}}`. ID bo'yicha qidirish bir zumda.",
          notes: "Qo'shimcha savollar: \"Kim qaysi kitobni o'qigan (takrorsiz)?\" — set. \"Kutubxonaga navbat\" — list."
        },
        {
          type: "code",
          title: "Bonus: dict comprehension",
          code: `ismlar = ["Aziz", "Laylo", "Bobur"]
uzunlik = {ism: len(ism) for ism in ismlar}
print(uzunlik)

kvadrat = {n: n * n for n in range(1, 6)}
print(kvadrat)

ballar = {"Aziz": 85, "Laylo": 92, "Bobur": 58}
otganlar = {k: v for k, v in ballar.items() if v >= 60}
print(otganlar)`,
          explain: [
            "List comprehension'ga o'xshaydi, lekin `{kalit: qiymat for ...}`",
            "Bir qatorda yangi lug'at yasaydi",
            "`if` bilan filtrlash ham mumkin",
            "Murakkab bo'lsa — oddiy `for` sikl yozish ham mutlaqo to'g'ri!"
          ],
          output: `{'Aziz': 4, 'Laylo': 5, 'Bobur': 5}
{1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
{'Aziz': 85, 'Laylo': 92}`,
          notes: "Bu ixtiyoriy mavzu — vaqt kam bo'lsa, faqat birinchi misolni ko'rsating. Har bir comprehension'ni oddiy sikl ko'rinishida ham yozib ko'rsating."
        },
        {
          type: "task",
          title: "Mashq 1: Sport reytingi",
          task: "Futbol jamoalari ro'yxati (list of dicts) berilgan: nom, g'alaba, durang, mag'lubiyat. Har bir jamoa uchun ochkoni hisoblang (g'alaba — 3, durang — 1) va lug'atga `\"ochko\"` kaliti bilan qo'shing. So'ng ochko bo'yicha kamayish tartibida turnir jadvalini chiqaring.",
          starter: `jamoalar = [
    {"nom": "Paxtakor", "g": 5, "d": 2, "m": 1},
    {"nom": "Nasaf", "g": 6, "d": 0, "m": 2},
    {"nom": "Navbahor", "g": 4, "d": 3, "m": 1},
    {"nom": "Bunyodkor", "g": 2, "d": 2, "m": 4},
]

# 1) ochkolarni hisoblang
# 2) saralang va chiqaring
`,
          hint: "`for j in jamoalar: j[\"ochko\"] = j[\"g\"] * 3 + j[\"d\"]`. Keyin `sorted(jamoalar, key=lambda j: j[\"ochko\"], reverse=True)`.",
          solution: `jamoalar = [
    {"nom": "Paxtakor", "g": 5, "d": 2, "m": 1},
    {"nom": "Nasaf", "g": 6, "d": 0, "m": 2},
    {"nom": "Navbahor", "g": 4, "d": 3, "m": 1},
    {"nom": "Bunyodkor", "g": 2, "d": 2, "m": 4},
]

for j in jamoalar:
    j["ochko"] = j["g"] * 3 + j["d"]

jadval = sorted(jamoalar, key=lambda j: j["ochko"], reverse=True)
print("O'rin | Jamoa | Ochko")
for orin, j in enumerate(jadval, 1):
    print(orin, "|", j["nom"], "|", j["ochko"])`,
          notes: "Natija: Paxtakor 17, Nasaf 18, Navbahor 15, Bunyodkor 8. Bonus: ochkolar teng bo'lsa nima qilish kerakligini muhokama qiling."
        },
        {
          type: "task",
          title: "Mashq 2: Sinflar statistikasi",
          task: "O'quvchilar bazasi (list of dicts: ism, sinf, ball) berilgan. Har bir sinf uchun o'quvchilar ballari ro'yxatini yig'ing (dict of lists: sinf → ballar), so'ng har bir sinfning o'rtacha balini chiqaring va eng yaxshi sinfni toping.",
          starter: `baza = [
    {"ism": "Aziz", "sinf": "8-A", "ball": 85},
    {"ism": "Laylo", "sinf": "8-B", "ball": 92},
    {"ism": "Bobur", "sinf": "8-A", "ball": 78},
    {"ism": "Malika", "sinf": "8-B", "ball": 88},
    {"ism": "Sardor", "sinf": "8-V", "ball": 95},
]

sinflar = {}
# shu yerga kod
`,
          hint: "Har bir o'quvchi uchun: sinf hali `sinflar`da bo'lmasa `sinflar[s] = []`, keyin `sinflar[s].append(o[\"ball\"])`.",
          solution: `baza = [
    {"ism": "Aziz", "sinf": "8-A", "ball": 85},
    {"ism": "Laylo", "sinf": "8-B", "ball": 92},
    {"ism": "Bobur", "sinf": "8-A", "ball": 78},
    {"ism": "Malika", "sinf": "8-B", "ball": 88},
    {"ism": "Sardor", "sinf": "8-V", "ball": 95},
]

sinflar = {}
for o in baza:
    s = o["sinf"]
    if s not in sinflar:
        sinflar[s] = []
    sinflar[s].append(o["ball"])

eng_sinf = ""
eng_ortacha = 0
for sinf, ballar in sinflar.items():
    ortacha = sum(ballar) / len(ballar)
    print(sinf, ":", ballar, "o'rtacha:", ortacha)
    if ortacha > eng_ortacha:
        eng_sinf, eng_ortacha = sinf, ortacha

print("Eng yaxshi sinf:", eng_sinf)`,
          notes: "Bu mashq butun modulni birlashtiradi: list of dicts → dict of lists → sanash/o'rtacha → eng yaxshisini topish. Yechimni sinf bilan birga qadam-baqadam tahlil qiling."
        },
        {
          type: "summary",
          title: "Xulosa: Ichma-ich tuzilmalar",
          points: [
            "List of dicts — jadval: `baza[0][\"ism\"]`",
            "Dict of dicts — ID/nom bo'yicha yozuvlar: `d[\"ShoxPro\"][\"oltin\"]`",
            "Murojaatni chapdan o'ngga o'qing va har qadamda \"qo'limda nima?\" deb so'rang",
            "Saralash: `sorted(baza, key=lambda s: s[\"ball\"], reverse=True)`",
            "list — tartib, tuple — o'zgarmas, dict — kalit bo'yicha qidiruv, set — noyoblik",
            "Dict comprehension: `{k: v for k, v in d.items() if ...}`"
          ],
          notes: "Modul loyihasi — \"Maktab jurnali\"ni tanishtiring va talablarini o'qib bering. Keyingi modulda funksiyalar orqali bu dasturni yanada chiroyli qilishimizni ayting."
        }
      ],
      homework: [
        { level: "oson", task: "3 ta sevimli filmingiz haqida list of dicts yarating (nom, yil, reyting). Har bir filmni chiroyli formatda chiqaring va eng yuqori reytingli filmni toping." },
        { level: "o'rta", task: "Do'kon mahsulotlari bazasi (list of dicts: nom, narx, soni) yarating — kamida 6 ta. Narx bo'yicha arzondan qimmatga saralab chiqaring, omborda tugagan (soni 0) mahsulotlarni alohida ko'rsating va ombordagi umumiy tovar qiymatini hisoblang." },
        { level: "qiyin", task: "Mini Telegram: `chatlar` dict of dicts — kalit chat nomi, qiymat `{\"xabarlar\": [...], \"oqilmagan\": son}`. Menyu yarating: chatga xabar yozish (oqilmagan +1), chatni ochish (barcha xabarlarni ko'rsatish va oqilmagan = 0), chatlarni o'qilmagan xabarlar soni bo'yicha saralab ko'rsatish." }
      ]
    }
  ],

  project: {
    title: "Maktab jurnali",
    description: "Menyu orqali boshqariladigan elektron sinf jurnali. O'quvchilar lug'atda saqlanadi: kalit — o'quvchi ismi, qiymat — baholar ro'yxati (`{\"Aziz\": [5, 4, 5]}`). Dastur o'quvchi qo'shish, baho qo'yish, o'rtacha ball, eng yaxshi o'quvchi, sinf statistikasi va qidiruv imkoniyatlarini beradi. Funksiyalar (def), fayllar va klasslar ishlatilmaydi — faqat shu modulgacha o'rganilgan bilimlar.",
    requirements: [
      "Ma'lumotlar `jurnal = {}` lug'atida saqlansin: ism → baholar ro'yxati (dict of lists)",
      "`while True` menyu: 1 — o'quvchi qo'shish, 2 — baho qo'yish, 3 — har bir o'quvchining o'rtacha bali, 4 — eng yaxshi o'quvchi, 5 — sinf statistikasi, 6 — qidirish, 0 — chiqish",
      "O'quvchi qo'shishda bir xil ism ikki marta qo'shilmasin (`in` bilan tekshirish)",
      "Baho faqat 2 dan 5 gacha bo'lishi kerak; noto'g'ri baho yoki mavjud bo'lmagan o'quvchi uchun xabar chiqsin",
      "Bahosi yo'q o'quvchining o'rtachasini hisoblashda dastur yiqilmasin (0 ga bo'lish xatosi bo'lmasin)",
      "Sinf statistikasi: o'quvchilar soni, jami baholar soni, sinf o'rtacha bali, har bir baho (5, 4, 3, 2) necha marta qo'yilgani (sanash lug'ati)",
      "Qidiruv: ism yoki ismning bir qismi bo'yicha (katta-kichik harfga e'tibor bermasdan) topib, baholarini ko'rsatish",
      "Dastur boshida jurnalda 2-3 ta namunaviy o'quvchi bo'lsin"
    ],
    bonus: [
      "Reyting: o'quvchilarni o'rtacha ball bo'yicha `sorted(..., key=lambda ...)` bilan saralab chiqarish",
      "O'quvchini o'chirish (`pop`) va oxirgi qo'yilgan bahoni bekor qilish",
      "Har bir o'quvchi uchun fan bo'yicha baholar: `{\"Aziz\": {\"matematika\": [5, 4], \"ingliz\": [5]}}` (dict of dicts of lists)",
      "\"A'lochilar\" (o'rtacha 4.5 dan yuqori) ro'yxatini set ko'rinishida chiqarish",
      "Baholar diagrammasi: har bir baho uchun `\"█\" * son` ko'rinishida chizish"
    ],
    example: `# Maktab jurnali - 5-modul loyihasi
jurnal = {
    "Aziz": [5, 4, 5],
    "Laylo": [5, 5, 4, 5],
    "Bobur": [3, 4],
}

while True:
    print()
    print("===== MAKTAB JURNALI =====")
    print("1. O'quvchi qo'shish")
    print("2. Baho qo'yish")
    print("3. O'rtacha ballar")
    print("4. Eng yaxshi o'quvchi")
    print("5. Sinf statistikasi")
    print("6. Qidirish")
    print("0. Chiqish")
    tanlov = input("Tanlang: ").strip()

    if tanlov == "1":
        ism = input("O'quvchi ismi: ").strip().title()
        if ism == "":
            print("Ism bo'sh bo'lmasligi kerak!")
        elif ism in jurnal:
            print(ism, "allaqachon jurnalda bor.")
        else:
            jurnal[ism] = []
            print(ism, "jurnalga qo'shildi.")

    elif tanlov == "2":
        ism = input("Kimga baho qo'yamiz: ").strip().title()
        if ism not in jurnal:
            print("Bunday o'quvchi yo'q!")
        else:
            baho = input("Baho (2-5): ").strip()
            if baho in ["2", "3", "4", "5"]:
                jurnal[ism].append(int(baho))
                print(ism, "ga", baho, "qo'yildi. Baholari:", jurnal[ism])
            else:
                print("Baho 2 dan 5 gacha bo'lishi kerak!")

    elif tanlov == "3":
        if len(jurnal) == 0:
            print("Jurnal bo'sh.")
        for ism, baholar in jurnal.items():
            if len(baholar) > 0:
                ortacha = sum(baholar) / len(baholar)
                print(ism, ":", baholar, "-> o'rtacha", round(ortacha, 2))
            else:
                print(ism, ": hali baho yo'q")

    elif tanlov == "4":
        eng_ism = ""
        eng_ortacha = 0
        for ism, baholar in jurnal.items():
            if len(baholar) > 0:
                ortacha = sum(baholar) / len(baholar)
                if ortacha > eng_ortacha:
                    eng_ism, eng_ortacha = ism, ortacha
        if eng_ism == "":
            print("Hali hech kimda baho yo'q.")
        else:
            print("Eng yaxshi o'quvchi:", eng_ism, "-", round(eng_ortacha, 2))

    elif tanlov == "5":
        hamma_baholar = []
        for baholar in jurnal.values():
            hamma_baholar.extend(baholar)
        print("O'quvchilar soni:", len(jurnal))
        print("Jami baholar soni:", len(hamma_baholar))
        if len(hamma_baholar) > 0:
            ortacha = sum(hamma_baholar) / len(hamma_baholar)
            print("Sinf o'rtacha bali:", round(ortacha, 2))
            sanoq = {}
            for b in hamma_baholar:
                sanoq[b] = sanoq.get(b, 0) + 1
            for b in [5, 4, 3, 2]:
                print(b, "baho:", sanoq.get(b, 0), "marta")

    elif tanlov == "6":
        qism = input("Ism yoki uning bir qismi: ").strip().lower()
        topildi = 0
        for ism, baholar in jurnal.items():
            if qism in ism.lower():
                print(ism, ":", baholar)
                topildi += 1
        if topildi == 0:
            print("Hech kim topilmadi.")

    elif tanlov == "0":
        print("Jurnal yopildi. Xayr!")
        break

    else:
        print("Noto'g'ri tanlov, qaytadan urinib ko'ring.")`
  },

  test: [
    {
      q: "Quyidagilardan qaysi biri bitta elementli **kortej**?",
      options: ["(5)", "[5]", "(5,)", "{5}"],
      answer: 2
    },
    {
      q: "Bu kod nima chiqaradi?",
      code: `a, b = 3, 7
a, b = b, a
print(a, b)`,
      options: ["7 3", "3 7", "7 7", "Xato"],
      answer: 0
    },
    {
      q: "Bu kodda nima bo'ladi?",
      code: `t = (1, 2, 3)
t[0] = 10`,
      options: ["t = (10, 2, 3) bo'ladi", "TypeError xatosi chiqadi", "t = (1, 2, 3, 10) bo'ladi", "Hech narsa o'zgarmaydi, xato ham yo'q"],
      answer: 1
    },
    {
      q: "Bu kod nima chiqaradi?",
      code: `d = {"olma": 5, "nok": 3}
print(d.get("uzum", 0))`,
      options: ["None", "KeyError", "3", "0"],
      answer: 3
    },
    {
      q: "Bu kod nima chiqaradi?",
      code: `d = {"a": 1, "b": 2}
print("1" in d, "a" in d)`,
      options: ["True True", "False True", "True False", "False False"],
      answer: 1
    },
    {
      q: "Lug'atning kaliti va qiymatini birga aylanish uchun qaysi yozuv to'g'ri?",
      options: ["for k, v in d:", "for k, v in d.keys():", "for k, v in d.items():", "for k, v in d.values():"],
      answer: 2
    },
    {
      q: "Bu kod nima chiqaradi?",
      code: `s = "banan"
d = {}
for h in s:
    d[h] = d.get(h, 0) + 1
print(d["n"])`,
      options: ["2", "1", "3", "KeyError"],
      answer: 0
    },
    {
      q: "Bo'sh **to'plam** (set) qanday yaratiladi?",
      options: ["{}", "set()", "[]", "()"],
      answer: 1
    },
    {
      q: "Bu kod nima chiqaradi?",
      code: `a = {1, 2, 3, 4}
b = {3, 4, 5}
print(sorted(a - b), len(a | b))`,
      options: ["[3, 4] 5", "[1, 2] 7", "[5] 5", "[1, 2] 5"],
      answer: 3
    },
    {
      q: "Bu kod nima chiqaradi?",
      code: `baza = [{"ism": "Ali", "ball": 70},
        {"ism": "Vali", "ball": 95},
        {"ism": "Gani", "ball": 82}]
r = sorted(baza, key=lambda s: s["ball"], reverse=True)
print(r[1]["ism"])`,
      options: ["Ali", "Vali", "Gani", "Xato"],
      answer: 2
    }
  ]
});
