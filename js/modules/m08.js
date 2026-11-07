window.COURSE_MODULES = window.COURSE_MODULES || [];
COURSE_MODULES.push({
  id: 8,
  month: 4,
  weeks: "15-16 hafta",
  title: "OOP va yakuniy loyiha",
  icon: "🏆",
  description: "Obyektga yo'naltirilgan dasturlash (OOP): sinflar, obyektlar, metodlar, meros va polimorfizm. Modul oxirida o'quvchi butun kurs bilimlarini birlashtirib, o'z yakuniy loyihasini yaratadi va himoya qiladi.",
  outcomes: [
    "Sinf (class) yaratib, undan bir nechta obyekt hosil qila oladi",
    "__init__ va self qanday ishlashini o'z so'zlari bilan tushuntira oladi",
    "Metodlar, __str__, class va obyekt atributlaridan to'g'ri foydalanadi",
    "Ma'lumotni metodlar ichida tekshirib, inkapsulyatsiya qoidasiga amal qiladi",
    "Meros (inheritance), super() va metodni qayta yozish (override) dan foydalanadi",
    "Polimorfizm yordamida turli obyektlarni bitta sikl ichida boshqaradi",
    "Loyihani rejalashtiradi, toza kod yozadi, qo'lda test qiladi va himoya qiladi"
  ],
  lessons: [
    // ================================================================
    // 1-DARS: SINFLAR VA OBYEKTLAR
    // ================================================================
    {
      id: "m8-l1",
      title: "Sinflar va obyektlar",
      duration: 90,
      goals: [
        "OOP nima uchun kerakligini real misollar orqali tushunish",
        "Sinf (class) — chizma, obyekt — undan yasalgan narsa ekanini anglash",
        "__init__ va self qanday ishlashini chuqur tushunish",
        "Atributlar bilan ishlash va bir sinfdan bir nechta obyekt yaratish"
      ],
      keywords: ["class", "obyekt", "__init__", "self", "atribut", "instance"],
      plan: [
        { time: 10, label: "Takrorlash: lug'atlar va funksiyalar" },
        { time: 15, label: "Nega OOP? Chizma va obyekt o'xshatishi" },
        { time: 30, label: "class sintaksisi, __init__, self, atributlar" },
        { time: 25, label: "Amaliyot: Phone, Car, Book sinflari" },
        { time: 10, label: "Quiz, xulosa va uyga vazifa" }
      ],
      slides: [
        {
          type: "title",
          title: "Sinflar va obyektlar",
          subtitle: "Obyektga yo'naltirilgan dasturlash (OOP) dunyosiga xush kelibsiz!",
          emoji: "🏗️",
          notes: "Darsni savol bilan boshlang: «O'yinlardagi qahramonlar, telefondagi kontaktlar — ularning har birida qanday ma'lumotlar bor?» 2-3 javob eshitib, OOP aynan shuni modellashtirishini ayting."
        },
        {
          type: "text",
          title: "Muammo: ma'lumot ko'payib ketsa nima bo'ladi?",
          body: "Hozirgacha biz ma'lumotni **o'zgaruvchi**, **ro'yxat** va **lug'at**larda saqladik, amallarni esa alohida **funksiya**larga yozdik. Kichik dasturda bu yetarli. Lekin 30 ta o'quvchi, 100 ta mahsulot yoki o'yindagi 50 ta qahramon bo'lsa-chi?",
          points: [
            "Ma'lumot (ism, yosh) bir joyda, uni o'zgartiradigan funksiyalar boshqa joyda — tartib yo'qoladi",
            "Lug'at kalitini adashtirish oson: `'ism'` o'rniga `'name'` yozib qo'ysak, Python ogohlantirmaydi",
            "Har bir «narsa» uchun qanday maydonlar bo'lishi kerakligi hech qayerda yozilmagan",
            "**OOP** — ma'lumot va unga tegishli amallarni bitta «quti» — **obyekt** ichiga joylash usuli"
          ],
          notes: "O'quvchilarga 6-moduldagi bank loyihasini eslating: global o'zgaruvchilar va ko'p funksiyalar qanchalik chalkash bo'lgan edi. Bu slayd 3 daqiqadan oshmasin."
        },
        {
          type: "code",
          title: "Eski usul: lug'at + funksiya",
          code: `talaba1 = {"ism": "Ali", "yosh": 14, "sinf": "8-A"}
talaba2 = {"ism": "Malika", "yosh": 15, "sinf": "9-B"}

def tanishtir(t):
    print("Salom, men", t["ism"] + ",", t["yosh"], "yoshdaman")

tanishtir(talaba1)
tanishtir(talaba2)

# Kalit nomida xato qilsak, Python indamaydi:
talaba3 = {"name": "Vali", "yosh": 13}
print("ism" in talaba3)`,
          explain: [
            "Har bir talaba — alohida lug'at, `tanishtir` funksiyasi esa ulardan tashqarida",
            "`talaba3` da `'ism'` o'rniga `'name'` yozilgan — `tanishtir(talaba3)` chaqirsak `KeyError` bo'ladi",
            "Lug'at «talaba qanday tuzilgan bo'lishi kerak» degan qoidani bilmaydi",
            "Bu muammoni **sinf (class)** hal qiladi: u tuzilmani bir marta va aniq belgilaydi"
          ],
          output: `Salom, men Ali, 14 yoshdaman
Salom, men Malika, 15 yoshdaman
False`,
          notes: "Kodni ishga tushiring, so'ng sinfdan so'rang: «tanishtir(talaba3) desak nima bo'ladi?» Birga sinab ko'rib, KeyError ni ko'rsating."
        },
        {
          type: "analogy",
          title: "Sinf — chizma, obyekt — tayyor mashina",
          emoji: "🚗",
          text: "Asakadagi avtozavodni tasavvur qiling. Muhandislar **Cobalt** mashinasining bitta **chizmasi**ni (loyihasini) chizishadi: 4 ta g'ildirak, rul, rang, dvigatel hajmi. Chizmaning o'zida yurib bo'lmaydi! Lekin shu bitta chizma asosida zavod minglab **haqiqiy mashina** chiqaradi: biri oq, biri qora, biri kumushrang. Har bir mashinaning raqami, rangi, probegi o'ziniki. Python'da **chizma = class**, **zavoddan chiqqan har bir mashina = obyekt** (instance)."
          ,
          notes: "Doskaga chap tomonga «Chizma (class)», o'ng tomonga 3 ta mashina (obyekt) chizing. So'rang: «Telefon do'konida qaysi narsa class, qaysi biri obyekt?» (Telefon modeli — class, qo'lingizdagi telefon — obyekt)."
        },
        {
          type: "text",
          title: "OOP lug'ati: 4 ta asosiy so'z",
          body: "Bu so'zlarni butun modul davomida ishlatamiz, shuning uchun ularni yaxshilab eslab qoling:",
          points: [
            "**Class (sinf)** — chizma, shablon. Masalan: `Student`, `Phone`, `Car`. Nomi katta harf bilan boshlanadi",
            "**Obyekt (instance, nusxa)** — sinfdan yaratilgan aniq narsa: `ali = Student(...)`",
            "**Atribut** — obyektning ma'lumoti (xususiyati): `ali.ism`, `ali.yosh`",
            "**Metod** — obyektning qila oladigan ishi (sinf ichidagi funksiya). Buni keyingi darsda chuqur o'rganamiz"
          ],
          notes: "Har bir atamaga o'quvchilardan misol so'rang: «Futbolchi sinfining atributlari qanday bo'ladi?» (ism, raqam, jamoa, gollar soni)."
        },
        {
          type: "code",
          title: "Eng oddiy sinf",
          code: `class Student:
    pass            # hozircha bo'sh chizma

s1 = Student()      # obyekt yaratamiz (qavslar shart!)
s1.ism = "Ali"      # atribut qo'shamiz
s1.yosh = 14

print(s1.ism)
print(s1.yosh)
print(type(s1))`,
          explain: [
            "`class Student:` — yangi sinf e'lon qilinadi. `pass` — «hozircha ichi bo'sh» degani",
            "`Student()` — sinfni funksiyadek **chaqirsak**, yangi obyekt yaratiladi",
            "Nuqta (`.`) orqali obyektning atributiga murojaat qilamiz: `s1.ism`",
            "`type(s1)` obyekt qaysi sinfdan ekanini ko'rsatadi",
            "Kamchilik: atributlarni har safar qo'lda qo'shish kerak — buni `__init__` hal qiladi"
          ],
          output: `Ali
14
<class '__main__.Student'>`,
          notes: "Ko'p o'quvchilar `s1 = Student` deb qavssiz yozadi — bu obyekt emas, sinfning o'zi bo'ladi. Shu farqni alohida ta'kidlang."
        },
        {
          type: "code",
          title: "__init__ — obyektning «tug'ilish» metodi",
          code: `class Student:
    def __init__(self, ism, yosh, sinf):
        self.ism = ism
        self.yosh = yosh
        self.sinf = sinf

ali = Student("Ali", 14, "8-A")
malika = Student("Malika", 15, "9-B")

print(ali.ism, ali.yosh, ali.sinf)
print(malika.ism, malika.yosh, malika.sinf)`,
          explain: [
            "`__init__` (ikki tomonda **ikkitadan** pastki chiziq) — obyekt yaratilayotganda **avtomatik** chaqiriladi",
            "`Student('Ali', 14, '8-A')` yozilganda qiymatlar `ism`, `yosh`, `sinf` parametrlariga tushadi",
            "`self.ism = ism` — kelgan qiymatni **shu obyektning** ichiga saqlaydi",
            "Endi har bir talabada albatta `ism`, `yosh`, `sinf` bo'ladi — tuzilma aniq!",
            "Bir sinfdan xohlagancha obyekt yaratish mumkin"
          ],
          output: `Ali 14 8-A
Malika 15 9-B`,
          notes: "Sekin tushuntiring: Student(...) chaqirilganda avval bo'sh obyekt yaratiladi, keyin __init__ uni to'ldiradi. Doskada strelkalar bilan qiymatlar qayerga ketishini ko'rsating."
        },
        {
          type: "text",
          title: "self — eng muhim so'z. Chuqur tushunamiz",
          body: "`self` — «**men o'zim**», ya'ni hozir ishlayotgan obyektning o'zi. Python `ali = Student('Ali', 14, '8-A')` ni ko'rganda ichida taxminan shunday qiladi:",
          points: [
            "1) Yangi bo'sh obyekt yaratadi (keling, uni `X` deb ataylik)",
            "2) `Student.__init__(X, 'Ali', 14, '8-A')` ni chaqiradi — ya'ni **`self` o'rniga `X` ning o'zi beriladi**",
            "3) `self.ism = ism` aslida `X.ism = 'Ali'` degani",
            "4) Tayyor `X` obyekt `ali` o'zgaruvchisiga yoziladi",
            "Shuning uchun `self` ni biz o'zimiz **bermaymiz** — Python uni avtomatik qo'yadi",
            "`self.ism` — obyektning atributi (saqlanib qoladi), oddiy `ism` — faqat `__init__` ichidagi vaqtinchalik o'zgaruvchi"
          ],
          notes: "Bu darsning eng qiyin joyi — shoshilmang (5-7 daqiqa). Sinfdan so'rang: «Agar self.ism = ism o'rniga faqat ism = ism yozsak nima bo'ladi?» (atribut saqlanmaydi, keyin AttributeError)."
        },
        {
          type: "analogy",
          title: "self — daftardagi «Men»",
          emoji: "📒",
          text: "Sinfda o'qituvchi hammaga bitta ko'rsatma beradi: «**O'z** daftaringizga **o'z** ismingizni yozing». Ko'rsatma hamma uchun bitta (bu — sinf ichidagi kod), lekin Ali buni bajarganda Alining daftariga «Ali» yoziladi, Malika bajarganda — Malikaning daftariga «Malika». Ko'rsatmadagi «o'z» so'zi — bu aynan `self`. Kod bitta, lekin `self` har safar boshqa obyektni bildiradi.",
          notes: "Shu o'xshatishni amalda ko'rsating: ikki o'quvchini chaqirib, bir xil ko'rsatma bering. Keyin doskaga `self = Ali` va `self = Malika` deb yozing."
        },
        {
          type: "code",
          title: "Har bir obyekt — mustaqil",
          code: `class Student:
    def __init__(self, ism):
        print("__init__ ishladi, ism =", ism)
        self.ism = ism

a = Student("Ali")
b = Student("Vali")

b.ism = "Valijon"      # faqat b o'zgaradi
print(a.ism)
print(b.ism)
print(a is b)`,
          explain: [
            "Har bir `Student(...)` chaqiruvida `__init__` **qaytadan** ishlaydi — ekranda ikki marta xabar chiqdi",
            "`a` va `b` — ikki xil obyekt, har birining o'z `ism` atributi bor",
            "`b.ism` ni o'zgartirish `a` ga hech qanday ta'sir qilmaydi",
            "`a is b` — `False`, chunki ular xotirada ikki alohida narsa"
          ],
          output: `__init__ ishladi, ism = Ali
__init__ ishladi, ism = Vali
Ali
Valijon
False`,
          notes: "O'quvchilardan natijani ishga tushirishdan OLDIN taxmin qilishni so'rang. Ko'pchilik __init__ xabari bir marta chiqadi deb o'ylaydi."
        },
        {
          type: "quiz",
          question: "Bu kod nima chiqaradi?",
          code: `class Mushuk:
    def __init__(self, ism):
        self.ism = ism

m1 = Mushuk("Momiq")
m2 = Mushuk("Qora")
m1.ism = "Oppoq"
print(m1.ism, m2.ism)`,
          options: ["Momiq Qora", "Oppoq Qora", "Oppoq Oppoq", "Xato beradi"],
          answer: 1,
          explain: "m1 va m2 — alohida obyektlar. m1.ism o'zgardi (Oppoq), m2.ism esa o'zgarmadi (Qora).",
          notes: "Qo'l ko'tarib ovoz berdiring. «Oppoq Oppoq» deganlar bilan alohida gaplashing — ular obyektlarni bitta deb o'ylayapti."
        },
        {
          type: "code",
          title: "Phone sinfi: standart qiymat va ro'yxat atribut",
          code: `class Phone:
    def __init__(self, model, narx, batareya=100):
        self.model = model
        self.narx = narx
        self.batareya = batareya
        self.ilovalar = []      # har bir telefonning o'z ro'yxati

p1 = Phone("Samsung A54", 4500000)
p2 = Phone("iPhone 13", 7800000, 65)

p1.ilovalar.append("Telegram")
p2.ilovalar.append("Instagram")

print(p1.model, p1.batareya, p1.ilovalar)
print(p2.model, p2.batareya, p2.ilovalar)`,
          explain: [
            "`batareya=100` — standart qiymat: berilmasa 100 bo'ladi (funksiyalardagidek)",
            "Atribut parametrdan kelishi shart emas: `self.ilovalar = []` har doim bo'sh ro'yxatdan boshlanadi",
            "Ro'yxat `__init__` ichida yaratilgani uchun **har bir telefonning ro'yxati alohida**",
            "Atribut har qanday turda bo'lishi mumkin: son, matn, ro'yxat, lug'at va hatto boshqa obyekt"
          ],
          output: `Samsung A54 100 ['Telegram']
iPhone 13 65 ['Instagram']`,
          notes: "Sinfdan so'rang: «Sizning telefoningiz uchun yana qanday atributlar qo'shardingiz?» (rang, xotira, egasi). Birini birga qo'shib ko'ring."
        },
        {
          type: "compare",
          title: "Lug'at yoki sinf?",
          left: {
            label: "Lug'at: tuzilma nazoratsiz",
            code: `p1 = {"model": "A54", "narx": 4500000}
p2 = {"modell": "iPhone", "narx": 7800000}
# p2 da kalit xato yozilgan!
# Hech kim sezmaydi...
print(p2["model"])   # KeyError`
          },
          right: {
            label: "Sinf: tuzilma bir marta yoziladi",
            code: `class Phone:
    def __init__(self, model, narx):
        self.model = model
        self.narx = narx

p1 = Phone("A54", 4500000)
p2 = Phone("iPhone", 7800000)
print(p2.model)      # har doim bor`
          },
          good: "right",
          notes: "Lug'at yomon emasligini ayting — kichik ma'lumot uchun u qulay. Lekin bir xil tuzilmali ko'p narsalar bo'lsa, sinf ishonchliroq. JSON bilan ishlaganda esa lug'atlar yana kerak bo'ladi (4-darsda ko'ramiz)."
        },
        {
          type: "code",
          title: "Obyektlar ro'yxati: Car",
          code: `class Car:
    def __init__(self, nomi, yil, narx):
        self.nomi = nomi
        self.yil = yil
        self.narx = narx

mashinalar = [
    Car("Cobalt", 2022, 13000),
    Car("Malibu", 2023, 30000),
    Car("Spark", 2021, 9000),
]

for car in mashinalar:
    print(car.nomi, "-", car.yil, "yil,", car.narx, "$")

eng_qimmat = max(mashinalar, key=lambda c: c.narx)
print("Eng qimmati:", eng_qimmat.nomi)`,
          explain: [
            "Obyektlarni ham ro'yxatga solish mumkin — xuddi sonlar yoki matnlardek",
            "`for car in mashinalar:` — har aylanishda `car` navbatdagi obyekt bo'ladi",
            "`max(..., key=lambda c: c.narx)` — 5-modulda o'tgan `lambda` bilan narx bo'yicha eng kattasini topamiz",
            "Natija — obyektning o'zi, shuning uchun `eng_qimmat.nomi` deb yozamiz"
          ],
          output: `Cobalt - 2022 yil, 13000 $
Malibu - 2023 yil, 30000 $
Spark - 2021 yil, 9000 $
Eng qimmati: Malibu`,
          notes: "Lambda ni eslatib o'ting. Topshiriq: «Eng arzon mashinani qanday topamiz?» — o'quvchilar min() deb javob berishsin."
        },
        {
          type: "quiz",
          question: "Bu kod ishga tushganda nima bo'ladi?",
          code: `class Car:
    def __init__(self, nomi, yil):
        self.nomi = nomi
        self.yil = yil

c = Car("Nexia")`,
          options: [
            "Mashina yaratiladi, yil = None bo'ladi",
            "TypeError: yil argumenti yetishmayapti",
            "Ekranga Nexia chiqadi",
            "NameError: Car topilmadi"
          ],
          answer: 1,
          explain: "__init__ ikkita qiymat kutadi (nomi, yil), biz esa bittasini berdik. self ni Python o'zi beradi, qolganlarini biz berishimiz shart. Standart qiymat (yil=2020) bo'lsa, xato bo'lmasdi.",
          notes: "Xato matnini ko'rsating: «missing 1 required positional argument: 'yil'». O'quvchilarni xato xabarini o'qishga o'rgating."
        },
        {
          type: "text",
          title: "Ko'p uchraydigan xatolar",
          body: "Bu xatolarni deyarli har bir boshlovchi qiladi. Oldindan bilsangiz, vaqtingiz tejaladi:",
          points: [
            "`def __init__(ism):` — `self` yozilmagan → `TypeError: takes 1 positional argument but 2 were given`",
            "`def _init_(self):` — bitta pastki chiziq → metod avtomatik ishlamaydi",
            "`ism = ism` o'rniga `self.ism = ism` yozish kerak, aks holda → `AttributeError`",
            "`s = Student` (qavssiz) — bu obyekt emas, sinfning o'zi",
            "Sinf nomi katta harf bilan: `Student`, obyekt nomi kichik harf bilan: `student`"
          ],
          notes: "Har bir xatoni tezda kodda ko'rsatib chiqing (2-3 daqiqa). O'quvchilar xato matnini o'qib, sababini aytishga harakat qilsin."
        },
        {
          type: "task",
          title: "Mashq 1: Kutubxona kitoblari",
          task: "`Book` sinfini yarating: atributlari `nomi`, `muallif`, `sahifalar`. 3 ta o'zbek kitobi obyektini ro'yxatga joylang. Har bir kitobni chiroyli chiqaring va oxirida jami sahifalar sonini hisoblang.",
          starter: `class Book:
    def __init__(self, nomi, muallif, sahifalar):
        # atributlarni shu yerga yozing
        pass

kitoblar = [
    # 3 ta kitob yarating
]

jami = 0
# sikl bilan chiqaring va jamini hisoblang`,
          hint: "`__init__` ichida `self.nomi = nomi` kabi uchta qator yozing. Siklda `k.sahifalar` ni `jami` ga qo'shib boring.",
          solution: `class Book:
    def __init__(self, nomi, muallif, sahifalar):
        self.nomi = nomi
        self.muallif = muallif
        self.sahifalar = sahifalar

kitoblar = [
    Book("O'tkan kunlar", "Abdulla Qodiriy", 400),
    Book("Shum bola", "G'afur G'ulom", 120),
    Book("Sariq devni minib", "Xudoyberdi To'xtaboyev", 250),
]

jami = 0
for k in kitoblar:
    print(k.nomi, "-", k.muallif, "-", k.sahifalar, "bet")
    jami += k.sahifalar
print("Jami:", jami, "bet")`,
          notes: "7-8 daqiqa bering. Python satrlarida o' va g' borligi uchun qo'shtirnoq (\" \") ishlatish kerakligini eslating — aks holda tutuq belgisi satrni yopib qo'yadi."
        },
        {
          type: "task",
          title: "Mashq 2: A'lochilarni topamiz",
          task: "`Pupil` sinfini yarating: `ism` va `baholar` (ro'yxat). Alohida `ortacha(pupil)` funksiyasi o'quvchining o'rtacha bahosini qaytarsin. Sinfdagi 3 o'quvchidan o'rtachasi 4 va undan yuqori bo'lganlarni chiqaring.",
          starter: `class Pupil:
    def __init__(self, ism, baholar):
        pass

def ortacha(pupil):
    pass

sinf = [
    Pupil("Ali", [5, 4, 5]),
    Pupil("Vali", [3, 4, 3]),
    Pupil("Malika", [5, 5, 4]),
]`,
          hint: "O'rtacha = `sum(pupil.baholar) / len(pupil.baholar)`. Natijani `round(o, 2)` bilan yaxlitlang.",
          solution: `class Pupil:
    def __init__(self, ism, baholar):
        self.ism = ism
        self.baholar = baholar

def ortacha(pupil):
    return sum(pupil.baholar) / len(pupil.baholar)

sinf = [
    Pupil("Ali", [5, 4, 5]),
    Pupil("Vali", [3, 4, 3]),
    Pupil("Malika", [5, 5, 4]),
]

for p in sinf:
    o = ortacha(p)
    if o >= 4:
        print(p.ism, round(o, 2), "- a'lochi")`,
          notes: "Kuchli o'quvchilarga qo'shimcha: eng yuqori o'rtachali o'quvchini max() va lambda bilan toping. Keyingi darsda ortacha() ni sinf ichiga (metod qilib) ko'chirishimizni aytib qo'ying."
        },
        {
          type: "summary",
          title: "Bugun nimani o'rgandik?",
          points: [
            "**OOP** — ma'lumot va amallarni bitta obyektga jamlash usuli",
            "**class** — chizma, **obyekt** — undan yaratilgan aniq narsa: `ali = Student(...)`",
            "`__init__` obyekt yaratilganda avtomatik ishlaydi va atributlarni to'ldiradi",
            "`self` — hozirgi obyektning o'zi; Python uni avtomatik beradi",
            "Atributlarga nuqta orqali murojaat qilinadi: `ali.ism`",
            "Har bir obyekt mustaqil; obyektlarni ro'yxatga solib, sikl bilan ishlash mumkin",
            "Keyingi dars: obyektlar **ish qilishni** o'rganadi — metodlar!"
          ],
          notes: "Xulosani o'quvchilarga o'qitib chiqing. Chiqish savoli: «self nima? Bir gap bilan aytib bering» — 2-3 o'quvchidan so'rang."
        }
      ],
      homework: [
        { level: "oson", task: "`Pet` (uy hayvoni) sinfini yarating: `ism`, `turi`, `yosh` atributlari bilan. 3 ta obyekt yaratib, har birini `print` bilan chiqaring." },
        { level: "o'rta", task: "`Footballer` sinfi: `ism`, `jamoa`, `gollar`. 5 ta futbolchini ro'yxatga joylang. Eng ko'p gol urganni toping va «Paxtakor» jamoasidagilarni alohida chiqaring." },
        { level: "qiyin", task: "`Movie` sinfi: `nomi`, `yil`, `reyting`, `janrlar` (ro'yxat). 5 ta film yarating. Janr bo'yicha filmlarni lug'atga guruhlang (`{'komediya': ['...']}`) va reytingi 8 dan yuqori filmlarni yil bo'yicha tartiblab chiqaring." }
      ]
    },

    // ================================================================
    // 2-DARS: METODLAR VA INKAPSULYATSIYA
    // ================================================================
    {
      id: "m8-l2",
      title: "Metodlar va inkapsulyatsiya",
      duration: 90,
      goals: [
        "Metod yozish va obyekt holatini metod orqali o'zgartirish",
        "__str__ yordamida obyektni chiroyli chiqarish",
        "Class atributi va obyekt atributi farqini tushunish",
        "Inkapsulyatsiya: _balance va metod ichida tekshirish",
        "6-moduldagi bank loyihasini OOP uslubida qayta yozish"
      ],
      keywords: ["metod", "__str__", "class atributi", "inkapsulyatsiya", "_balance", "holat"],
      plan: [
        { time: 10, label: "Takrorlash: class, __init__, self" },
        { time: 20, label: "Metodlar va obyekt holati" },
        { time: 20, label: "__str__, class va obyekt atributlari" },
        { time: 25, label: "Inkapsulyatsiya va BankAccount" },
        { time: 15, label: "Amaliyot, xulosa, uyga vazifa" }
      ],
      slides: [
        {
          type: "title",
          title: "Metodlar va inkapsulyatsiya",
          subtitle: "Obyektlarga «ish qilish»ni o'rgatamiz",
          emoji: "⚙️",
          notes: "Takrorlash: doskaga 1-darsdagi Student sinfini yozdiring (bir o'quvchi). Sinfdan xatolarni topishni so'rang. 5 daqiqa."
        },
        {
          type: "text",
          title: "Metod nima?",
          body: "**Metod** — sinf ichida yozilgan funksiya. U obyektning **ma'lumotlari bilan ishlaydi**. Atributlar obyekt «nima»ligini bildirsa, metodlar u «nima qila olishini» bildiradi.",
          points: [
            "Metod `def` bilan sinf **ichida** (bitta chekinish bilan) yoziladi",
            "Birinchi parametri doim `self` — shu orqali obyektning atributlariga yetib boradi",
            "Chaqirish: `obyekt.metod()` — masalan `ali.salomlash()`",
            "`ali.salomlash()` aslida `Student.salomlash(ali)` degani — `self` = `ali`",
            "Metod ham `return` qilishi mumkin, xuddi oddiy funksiyadek"
          ],
          notes: "Analogiya bilan bog'lang: «Telefonning atributlari — rangi, xotirasi. Metodlari — qo'ng'iroq qilish, rasmga olish». Sinfdan yana 2 ta misol so'rang."
        },
        {
          type: "code",
          title: "Birinchi metodlar",
          code: `class Student:
    def __init__(self, ism, yosh):
        self.ism = ism
        self.yosh = yosh

    def salomlash(self):
        print("Salom! Men", self.ism)

    def keyingi_yil(self):
        return self.yosh + 1

ali = Student("Ali", 14)
ali.salomlash()
print("Keyingi yil:", ali.keyingi_yil())`,
          explain: [
            "`salomlash` — ekranga chiqaradi, hech narsa qaytarmaydi",
            "`keyingi_yil` — qiymat **qaytaradi**, uni `print` ichida ishlatdik",
            "Ikkala metod ham `self` orqali `ism` va `yosh` ni ko'ra oladi",
            "Chaqirganda `self` ni yozmaymiz: `ali.salomlash()` — qavs ichi bo'sh"
          ],
          output: `Salom! Men Ali
Keyingi yil: 15`,
          notes: "So'rang: «ali.keyingi_yil() dan keyin ali.yosh nechchi bo'ladi?» (14 — chunki metod faqat hisobladi, atributni o'zgartirmadi). Bu keyingi slaydga ko'prik."
        },
        {
          type: "code",
          title: "Metod obyekt holatini o'zgartiradi",
          code: `class Phone:
    def __init__(self, model):
        self.model = model
        self.batareya = 50

    def ishlat(self, daqiqa):
        self.batareya = max(0, self.batareya - daqiqa // 2)

    def zaryadla(self, foiz):
        self.batareya = min(100, self.batareya + foiz)

    def holat(self):
        print(self.model, "batareya:", str(self.batareya) + "%")

p = Phone("Redmi Note 12")
p.holat()
p.ishlat(30)
p.holat()
p.zaryadla(80)
p.holat()`,
          explain: [
            "Obyektning **holati** — uning atributlarining hozirgi qiymatlari",
            "`ishlat(30)` — 30 daqiqada batareya 15% kamayadi: 50 → 35",
            "`zaryadla(80)` — 35 + 80 = 115, lekin `min(100, ...)` uni 100 da to'xtatadi",
            "`max(0, ...)` va `min(100, ...)` — qiymat chegaradan chiqmasligini **metodning o'zi** nazorat qiladi"
          ],
          output: `Redmi Note 12 batareya: 50%
Redmi Note 12 batareya: 35%
Redmi Note 12 batareya: 100%`,
          notes: "Har bir qadamdan keyin to'xtab, batareya qiymatini doskaga yozib boring. O'quvchilardan p.ishlat(200) dan keyin nima bo'lishini so'rang (0)."
        },
        {
          type: "analogy",
          title: "Metodlar — televizor pulti",
          emoji: "📺",
          text: "Uydagi televizorni eslang. Ovozni oshirish uchun televizorni ochib, ichidagi simlarni burab o'tirmaysiz — **pultdagi tugmani** bosasiz. Tugmalar — bu **metodlar**: `ovoz_oshir()`, `kanal_almashtir()`. Televizorning ichki holati (ovoz darajasi, kanal raqami) — bu **atributlar**. Pult ovozni 100 dan oshirmaydi — chegarani televizorning o'zi nazorat qiladi. Yaxshi sinf ham shunday: tashqaridan faqat «tugmalar» bilan boshqariladi.",
          notes: "So'rang: «Agar har kim televizor ichini ochib o'zgartirsa nima bo'ladi?» — buzilib qoladi. Bu fikrni inkapsulyatsiya slaydida yana eslatamiz."
        },
        {
          type: "code",
          title: "__str__ — obyektni chiroyli chiqarish",
          code: `class Book:
    def __init__(self, nomi, muallif):
        self.nomi = nomi
        self.muallif = muallif

    def __str__(self):
        return f"📖 {self.nomi} ({self.muallif})"

k = Book("Shum bola", "G'afur G'ulom")
print(k)
matn = "Sevimli kitobim: " + str(k)
print(matn)`,
          explain: [
            "`__str__` bo'lmasa, `print(k)` tushunarsiz narsa chiqaradi: `<__main__.Book object at 0x7f...>`",
            "`__str__` — maxsus metod: `print(k)` yoki `str(k)` chaqirilganda Python uni **o'zi** chaqiradi",
            "`__str__` matnni **`return` qilishi** shart, `print` qilmasligi kerak!",
            "f-string ichida ham ishlaydi: `f'Kitob: {k}'`"
          ],
          output: `📖 Shum bola (G'afur G'ulom)
Sevimli kitobim: 📖 Shum bola (G'afur G'ulom)`,
          notes: "Avval __str__ ni o'chirib ishga tushiring — o'quvchilar «0x...» ni ko'rsin. Keyin qaytarib qo'ying. Farq juda yaqqol ko'rinadi."
        },
        {
          type: "quiz",
          question: "Bu kod nima chiqaradi?",
          code: `class Olma:
    def __init__(self, rang):
        self.rang = rang

    def __str__(self):
        return "Olma: " + self.rang

o = Olma("qizil")
print(o)`,
          options: ["Olma: qizil", "<__main__.Olma object at 0x...>", "qizil", "Xato beradi"],
          answer: 0,
          explain: "print(o) yozilganda Python avtomatik o.__str__() ni chaqiradi va qaytgan matnni chiqaradi.",
          notes: "Qo'shimcha savol: «Agar __str__ ichida return o'rniga print yozsak?» — TypeError bo'ladi, chunki __str__ matn qaytarishi shart."
        },
        {
          type: "text",
          title: "Class atributi va obyekt atributi",
          body: "Atributlar ikki xil bo'ladi. Farqi — **kimga tegishli** ekanida:",
          points: [
            "**Obyekt atributi** — `__init__` ichida `self.ism = ...` bilan yaratiladi. Har bir obyektniki o'zi (har kimning ismi har xil)",
            "**Class atributi** — sinf ichida, metodlardan tashqarida yoziladi: `maktab = '14-maktab'`. **Hamma obyektlar uchun umumiy**",
            "Class atributiga sinf nomi orqali murojaat qilish ma'qul: `Student.soni`",
            "Qachon ishlatiladi: umumiy sozlamalar (maktab nomi, soliq foizi), hisoblagichlar (nechta obyekt yaratildi)"
          ],
          notes: "Misol: «Sinfdagi har bir o'quvchining ismi — obyekt atributi. Maktab nomi esa hammaniki bir xil — class atributi.» Yana bitta misolni o'quvchilardan so'rang."
        },
        {
          type: "code",
          title: "Class atributi: umumiy ma'lumot va hisoblagich",
          code: `class Student:
    maktab = "14-maktab"   # class atributi (hammaga umumiy)
    soni = 0

    def __init__(self, ism):
        self.ism = ism       # obyekt atributi (har kimniki o'zi)
        Student.soni += 1

a = Student("Ali")
b = Student("Malika")

print(a.ism, a.maktab)
print(b.ism, b.maktab)
print("Jami o'quvchilar:", Student.soni)
Student.maktab = "Prezident maktabi"
print(a.maktab, "|", b.maktab)`,
          explain: [
            "`maktab` va `soni` — sinf darajasida, barcha obyektlar ularni ko'radi",
            "Har bir `Student(...)` da `Student.soni += 1` — hisoblagich oshadi",
            "`Student.maktab` ni o'zgartirsak — **barcha** obyektlarda o'zgaradi",
            "`self.ism` esa har bir obyektda alohida"
          ],
          output: `Ali 14-maktab
Malika 14-maktab
Jami o'quvchilar: 2
Prezident maktabi | Prezident maktabi`,
          notes: "Uchinchi o'quvchini qo'shib, soni 3 bo'lishini ko'rsating. So'rang: «Nima uchun self.soni += 1 emas, Student.soni += 1 yozdik?» — keyingi quiz shu haqida."
        },
        {
          type: "quiz",
          question: "Diqqat, tuzoq! Nima chiqadi?",
          code: `class Jamoa:
    ochko = 0
    def __init__(self, nomi):
        self.nomi = nomi

a = Jamoa("Paxtakor")
b = Jamoa("Nasaf")
a.ochko = 3
print(a.ochko, b.ochko, Jamoa.ochko)`,
          options: ["3 3 3", "3 0 0", "3 0 3", "0 0 0"],
          answer: 1,
          explain: "a.ochko = 3 class atributini o'zgartirmaydi — u faqat a obyektining ichida YANGI obyekt atributi yaratadi. b va Jamoa esa hamon umumiy 0 ni ko'radi.",
          notes: "Bu qiyin savol. To'g'ri javobdan keyin qoida chiqaring: class atributini o'zgartirmoqchi bo'lsangiz, SinfNomi.atribut deb yozing."
        },
        {
          type: "analogy",
          title: "Inkapsulyatsiya — bankomat",
          emoji: "🏧",
          text: "Humo yoki Uzcard kartangizdan pul yechayotganingizni tasavvur qiling. Bankomat ichidagi pul qutisiga qo'l tiqib, xohlagancha olib bo'lmaydi! Faqat **ekrandagi tugmalar** orqali so'raysiz: «200 000 so'm yechish». Bankomat avval **tekshiradi**: PIN to'g'rimi? Hisobda pul yetarlimi? Shundan keyingina beradi. Bu **inkapsulyatsiya**: ichki ma'lumot (balans) yashirin, uni faqat **tekshiruvli metodlar** orqali o'zgartirish mumkin.",
          notes: "So'rang: «Agar bankomat tekshirmasa nima bo'lardi?» Kulgili javoblarni eshiting, keyin kodda ham shu muammo borligini ayting: hisob.balance = -1000000 yozish mumkin bo'lsa — bu xato."
        },
        {
          type: "code",
          title: "_balance va metod ichida tekshirish",
          code: `class BankAccount:
    def __init__(self, egasi, balans=0):
        self.egasi = egasi
        self._balance = balans      # _ = «ichki, tegmang»

    def deposit(self, summa):
        if summa <= 0:
            print("❌ Summa musbat bo'lishi kerak")
            return
        self._balance += summa
        print("✅ +", summa)

    def get_balance(self):
        return self._balance

hisob = BankAccount("Ali", 1000)
hisob.deposit(500)
hisob.deposit(-200)
print("Balans:", hisob.get_balance())`,
          explain: [
            "`_balance` — oldidagi pastki chiziq dasturchilar o'rtasidagi **kelishuv**: «buni tashqaridan to'g'ridan-to'g'ri o'zgartirmang»",
            "Python buni taqiqlamaydi, lekin yaxshi dasturchi bu qoidaga amal qiladi",
            "Pul faqat `deposit()` orqali qo'shiladi — u esa manfiy summani **rad etadi**",
            "Balansni o'qish uchun `get_balance()` metodi bor"
          ],
          output: `✅ + 500
❌ Summa musbat bo'lishi kerak
Balans: 1500`,
          notes: "Ta'kidlang: _ bilan boshlangan atribut «xususiy» (private) degani faqat kelishuv. Ko'p o'quvchi «demak uni o'zgartirib bo'lmaydi» deb o'ylaydi — bu noto'g'ri."
        },
        {
          type: "compare",
          title: "6-modul bank loyihasi: funksiyalar vs sinf",
          left: {
            label: "Funksiyalar + global (6-modul)",
            code: `balans = 0
tarix = []

def deposit(summa):
    global balans
    balans += summa
    tarix.append(("+", summa))

def withdraw(summa):
    global balans
    if summa > balans:
        print("Mablag' yetarli emas")
        return
    balans -= summa
    tarix.append(("-", summa))
# 2-hisob kerak bo'lsa? Hammasini qaytadan!`
          },
          right: {
            label: "Sinf (OOP uslubi)",
            code: `class BankAccount:
    def __init__(self, egasi):
        self.egasi = egasi
        self._balance = 0
        self.tarix = []

    def deposit(self, summa):
        self._balance += summa
        self.tarix.append(("+", summa))

    def withdraw(self, summa):
        if summa > self._balance:
            print("Mablag' yetarli emas")
            return
        self._balance -= summa
        self.tarix.append(("-", summa))
# 100 ta hisob? BankAccount(...) x 100`
          },
          good: "right",
          notes: "Asosiy farqlar: global yo'q, ma'lumot va funksiyalar birga, istalgancha hisob ochish mumkin. O'quvchilardan yana bitta afzallikni topishni so'rang."
        },
        {
          type: "code",
          title: "To'liq BankAccount: ikki hisob, tarix va __str__",
          code: `class BankAccount:
    def __init__(self, egasi, balans=0):
        self.egasi = egasi
        self._balance = balans
        self.tarix = []

    def withdraw(self, summa):
        if summa > self._balance:
            print(f"❌ {self.egasi}: mablag' yetarli emas")
            return False
        self._balance -= summa
        self.tarix.append(f"-{summa}")
        return True

    def __str__(self):
        return f"{self.egasi}: {self._balance} so'm, tarix: {self.tarix}"

ali = BankAccount("Ali", 50000)
vali = BankAccount("Vali", 10000)
ali.withdraw(20000)
vali.withdraw(30000)
print(ali)
print(vali)`,
          explain: [
            "Ikki obyekt — ikki mustaqil hisob, har birining o'z balansi va tarixi",
            "`withdraw` muvaffaqiyatli bo'lsa `True`, aks holda `False` qaytaradi — boshqa kod buni tekshira oladi",
            "Valining hisobida 10 000 bor, 30 000 so'ralgan — metod rad etdi va tarixga yozmadi",
            "`__str__` tufayli `print(ali)` darhol tushunarli ma'lumot beradi"
          ],
          output: `❌ Vali: mablag' yetarli emas
Ali: 30000 so'm, tarix: ['-20000']
Vali: 10000 so'm, tarix: []`,
          notes: "Topshiriq bering (og'zaki): «transfer(self, boshqa_hisob, summa) metodini qanday yozamiz?» Javob: if self.withdraw(summa): boshqa_hisob.deposit(summa). Bu uyga vazifada ham bor."
        },
        {
          type: "text",
          title: "Metodlarda ko'p uchraydigan xatolar",
          body: "Bularni eslab qoling — ko'pincha shu xatolar uchun soatlab vaqt ketadi:",
          points: [
            "Metodda `self` unutilgan: `def deposit(summa):` → chaqirganda `TypeError`",
            "Metod ichida `self.` siz yozish: `_balance += summa` → `UnboundLocalError`/`NameError`",
            "Metodni qavssiz chaqirish: `ali.salomlash` — hech narsa bo'lmaydi, chunki metod **chaqirilmadi**",
            "`__str__` ichida `print` qilish — u **`return`** qilishi kerak",
            "Obyekt atributini `__init__` dan tashqarida birinchi marta yaratish — keyin u ba'zi obyektlarda bo'lmay qoladi"
          ],
          notes: "Uchinchi xatoni kodda ko'rsating: print(ali.keyingi_yil) — «bound method» chiqadi. O'quvchilar buni ko'p uchratishadi."
        },
        {
          type: "task",
          title: "Mashq 1: To'rtburchak sinfi",
          task: "`Rectangle` sinfini yarating: `eni`, `boyi` atributlari; `yuza()`, `perimetr()`, `kvadratmi()` metodlari va `__str__`. 4x6 to'rtburchak uchun hammasini chiqaring.",
          starter: `class Rectangle:
    def __init__(self, eni, boyi):
        pass

    def yuza(self):
        pass

    # perimetr, kvadratmi, __str__

r = Rectangle(4, 6)
print(r)`,
          hint: "Perimetr = 2 * (eni + boyi). `kvadratmi` `self.eni == self.boyi` ni qaytarsin. `__str__` f-string qaytarsin.",
          solution: `class Rectangle:
    def __init__(self, eni, boyi):
        self.eni = eni
        self.boyi = boyi

    def yuza(self):
        return self.eni * self.boyi

    def perimetr(self):
        return 2 * (self.eni + self.boyi)

    def kvadratmi(self):
        return self.eni == self.boyi

    def __str__(self):
        return f"To'rtburchak {self.eni}x{self.boyi}"

r = Rectangle(4, 6)
print(r)
print("Yuza:", r.yuza())
print("Perimetr:", r.perimetr())
print("Kvadratmi?", r.kvadratmi())`,
          notes: "6-7 daqiqa. Tez tugatganlarga: kattalashtir(k) metodini qo'shing — eni va bo'yini k marta oshirsin."
        },
        {
          type: "task",
          title: "Mashq 2: Do'kon savati (tekshiruv bilan)",
          task: "`Savat` sinfini yarating. Mahsulotlar lug'atda saqlansin: `{nomi: [narx, soni]}`. Metodlar: `qosh(nomi, narx, soni=1)` — narx yoki son 0 dan kichik/teng bo'lsa rad etsin, mahsulot bor bo'lsa sonini oshirsin; `olib_tashla(nomi)`; `jami()` — umumiy summa.",
          starter: `class Savat:
    def __init__(self):
        self.mahsulotlar = {}

    def qosh(self, nomi, narx, soni=1):
        pass

    def olib_tashla(self, nomi):
        pass

    def jami(self):
        pass

savat = Savat()
savat.qosh("Non", 4000, 2)
savat.qosh("Sut", 12000)
savat.qosh("Non", 4000)
savat.qosh("Olma", -5000)
savat.olib_tashla("Sut")
print(savat.mahsulotlar)
print("Jami:", savat.jami(), "so'm")`,
          hint: "Jami uchun: `for narx, soni in self.mahsulotlar.values():` siklida `narx * soni` ni qo'shib boring. Kutilgan natija: `{'Non': [4000, 3]}` va `Jami: 12000 so'm`.",
          solution: `class Savat:
    def __init__(self):
        self.mahsulotlar = {}

    def qosh(self, nomi, narx, soni=1):
        if narx <= 0 or soni <= 0:
            print("❌ Noto'g'ri qiymat:", nomi)
            return
        if nomi in self.mahsulotlar:
            self.mahsulotlar[nomi][1] += soni
        else:
            self.mahsulotlar[nomi] = [narx, soni]

    def olib_tashla(self, nomi):
        if nomi in self.mahsulotlar:
            del self.mahsulotlar[nomi]

    def jami(self):
        return sum(narx * soni for narx, soni in self.mahsulotlar.values())

savat = Savat()
savat.qosh("Non", 4000, 2)
savat.qosh("Sut", 12000)
savat.qosh("Non", 4000)
savat.qosh("Olma", -5000)
savat.olib_tashla("Sut")
print(savat.mahsulotlar)
print("Jami:", savat.jami(), "so'm")`,
          notes: "Bu mashq yakuniy loyihadagi «Do'kon/kassa» varianti uchun asos bo'ladi — o'quvchilarga aytib qo'ying. 10 daqiqa bering."
        },
        {
          type: "summary",
          title: "Xulosa",
          points: [
            "**Metod** — sinf ichidagi funksiya, birinchi parametri `self`",
            "Metodlar obyekt **holatini** o'zgartiradi va uni nazorat qiladi",
            "`__str__` — `print(obyekt)` uchun chiroyli matn **qaytaradi**",
            "**Class atributi** hammaga umumiy, **obyekt atributi** har kimniki o'zi",
            "**Inkapsulyatsiya**: ichki ma'lumot (`_balance`) faqat tekshiruvli metodlar orqali o'zgaradi",
            "OOP uslubida bank tizimi global o'zgaruvchilarsiz va istalgancha hisob bilan ishlaydi"
          ],
          notes: "Chiqish savoli: «Class atributi va obyekt atributiga bittadan misol ayting». Keyingi dars — meros: «It va mushuk sinflarida umumiy nima bor?» deb qiziqtirib qo'ying."
        }
      ],
      homework: [
        { level: "oson", task: "`Counter` (hisoblagich) sinfi: `oshir()`, `kamaytir()` (0 dan pastga tushmasin), `nolla()` metodlari va `__str__`. Bir necha marta chaqirib natijani chiqaring." },
        { level: "o'rta", task: "Darsdagi `BankAccount` ga `deposit`, `transfer(boshqa_hisob, summa)` metodlarini qo'shing. Transfer faqat `withdraw` muvaffaqiyatli bo'lsa ishlasin. Class atributi `jami_hisoblar` nechta hisob ochilganini sanasin." },
        { level: "qiyin", task: "`Gradebook` (jurnal) sinfi: o'quvchi qo'shish, unga baho qo'yish (faqat 2-5 oralig'ida, aks holda rad etsin), o'quvchining o'rtachasi, sinf reytingi (o'rtacha bo'yicha tartiblangan ro'yxat) metodlari. Ichki lug'at `_baholar` deb nomlansin va tashqaridan faqat metodlar orqali ishlatilsin." }
      ]
    },

    // ================================================================
    // 3-DARS: MEROS VA POLIMORFIZM
    // ================================================================
    {
      id: "m8-l3",
      title: "Meros va polimorfizm",
      duration: 90,
      goals: [
        "Meros (inheritance) orqali takrorlanuvchi kodni yo'qotish",
        "super().__init__ yordamida ota sinfni to'g'ri ishga tushirish",
        "Metodni qayta yozish (override) va kengaytirish",
        "Polimorfizm: turli obyektlarda bir xil metodni chaqirish",
        "isinstance bilan obyekt turini tekshirish"
      ],
      keywords: ["meros", "inheritance", "super()", "override", "polimorfizm", "isinstance"],
      plan: [
        { time: 10, label: "Takrorlash: metodlar va __str__" },
        { time: 20, label: "Meros va super().__init__" },
        { time: 20, label: "Override va polimorfizm" },
        { time: 20, label: "isinstance va o'yin qahramonlari" },
        { time: 20, label: "Amaliyot, xulosa, uyga vazifa" }
      ],
      slides: [
        {
          type: "title",
          title: "Meros va polimorfizm",
          subtitle: "Sinflar oilasi: ota sinfdan farzand sinfga",
          emoji: "🧬",
          notes: "Takrorlash uchun uyga vazifadagi Counter yoki BankAccount ni bir o'quvchiga ko'rsattiring (5 daqiqa)."
        },
        {
          type: "text",
          title: "Muammo: bir xil kod qayta-qayta",
          body: "Hayvonot bog'i dasturini yozyapmiz. `Dog`, `Cat`, `Cow` sinflarining hammasida `ism`, `yosh` atributlari va `ovqatlan()` metodi bor. Har birida bir xil kodni 3 marta yozamizmi?",
          points: [
            "Kodni nusxalash = xatoni ham nusxalash. Bitta joyda tuzatsangiz, qolgan ikkitasi eskicha qoladi",
            "Yangi umumiy xususiyat (masalan `vazn`) qo'shish uchun barcha sinflarni o'zgartirish kerak",
            "Yechim — **meros**: umumiy narsalarni bitta **ota sinf**ga (`Animal`) yozamiz",
            "**Farzand sinflar** (`Dog`, `Cat`) ota sinfdagi hamma narsani avtomatik oladi va o'zlariga xos narsalarni qo'shadi"
          ],
          notes: "Doskaga daraxt chizing: tepada Animal, pastda Dog, Cat, Cow. Umumiy atributlarni tepaga, xoslarini pastga yozing."
        },
        {
          type: "analogy",
          title: "Meros — oiladagi kabi",
          emoji: "👨‍👦",
          text: "Siz ota-onangizdan ko'p narsani **meros** qilib olgansiz: familiya, ko'z rangi, balki kulishingiz ham dadangiznikiga o'xshar. Lekin sizda ularda yo'q narsalar ham bor: siz Python bilasiz, TikTok'dan foydalanasiz! Ba'zan esa siz biror ishni ota-onangizdan **boshqacha** qilasiz — masalan, ular gazeta o'qiydi, siz esa yangiliklarni telefondan. Dasturlashda ham xuddi shunday: **farzand sinf** ota sinfdan hamma narsani oladi, **yangi narsa qo'shadi** va ba'zilarini **o'zgacha bajaradi** (override).",
          notes: "Sinfdan so'rang: «Siz ota-onangizdan nimani meros olgansiz-u, nimani boshqacha qilasiz?» Kulgili javoblar darsni jonlantiradi. 3 daqiqa."
        },
        {
          type: "code",
          title: "Birinchi meros: Animal → Dog, Cat",
          code: `class Animal:
    def __init__(self, ism, yosh):
        self.ism = ism
        self.yosh = yosh

    def ovqatlan(self):
        print(self.ism, "ovqatlanmoqda 🍖")

class Dog(Animal):
    pass

class Cat(Animal):
    pass

d = Dog("Bobik", 3)
c = Cat("Momiq", 2)
d.ovqatlan()
c.ovqatlan()
print(d.yosh, c.yosh)`,
          explain: [
            "`class Dog(Animal):` — qavs ichida **ota sinf** yoziladi. «Dog — bu Animal'ning bir turi»",
            "`Dog` ichi bo'sh (`pass`), lekin u `__init__` va `ovqatlan()` ni ota sinfdan **meros** oldi",
            "`Dog('Bobik', 3)` — Python `Dog` da `__init__` topolmaydi va ota sinfdagisini ishlatadi",
            "Ota sinf = **parent / base class**, farzand sinf = **child / subclass**"
          ],
          output: `Bobik ovqatlanmoqda 🍖
Momiq ovqatlanmoqda 🍖
3 2`,
          notes: "Python metodni qanday qidirishini tushuntiring: avval obyektning o'z sinfida, topilmasa — ota sinfda. Bu keyingi slaydlar uchun muhim."
        },
        {
          type: "code",
          title: "super().__init__ — ota qismini to'ldirish",
          code: `class Animal:
    def __init__(self, ism, yosh):
        self.ism = ism
        self.yosh = yosh

class Dog(Animal):
    def __init__(self, ism, yosh, zoti):
        super().__init__(ism, yosh)    # ota qismini to'ldiradi
        self.zoti = zoti                # faqat itga xos

class Cat(Animal):
    def __init__(self, ism, yosh, uy_mushugi=True):
        super().__init__(ism, yosh)
        self.uy_mushugi = uy_mushugi

d = Dog("Bobik", 3, "Alabay")
c = Cat("Momiq", 2)
print(d.ism, d.yosh, d.zoti)
print(c.ism, c.yosh, c.uy_mushugi)`,
          explain: [
            "Itga qo'shimcha atribut (`zoti`) kerak — shuning uchun `Dog` o'z `__init__` ini yozdi",
            "`super()` — «mening ota sinfim». `super().__init__(ism, yosh)` ota sinfning `__init__` ini chaqiradi",
            "Shunda `ism` va `yosh` ni qayta yozmaymiz — ota sinf o'zi to'ldiradi",
            "Keyin farzandga xos atributlar qo'shiladi: `self.zoti`, `self.uy_mushugi`"
          ],
          output: `Bobik 3 Alabay
Momiq 2 True`,
          notes: "Eng ko'p xato: super().__init__ ni unutish. Sinab ko'rsating: o'sha qatorni o'chirsangiz, print(d.ism) da AttributeError chiqadi."
        },
        {
          type: "text",
          title: "super() qanday ishlaydi?",
          body: "`super()` — ota sinfga «ko'prik». U orqali ota sinfning istalgan metodini chaqirish mumkin:",
          points: [
            "`super().__init__(...)` — ota sinfning konstruktorini chaqiradi. Odatda farzand `__init__` ining **birinchi qatori**",
            "`super()` ga `self` ni berish shart emas — Python o'zi qo'yadi",
            "Farzand o'z `__init__` ini yozsa, ota sinfnikini **avtomatik chaqirmaydi** — shuning uchun `super()` kerak",
            "`super().metod()` — ota sinf metodini ishlatib, ustiga yangi narsa qo'shishning eng yaxshi usuli",
            "Qoida: farzandda `__init__` yo'q bo'lsa — `super()` ham kerak emas, ota sinfniki o'zi ishlaydi"
          ],
          notes: "So'rang: «Nega super().__init__(self, ism, yosh) deb yozmaymiz?» — chunki super() orqali chaqirilganda self avtomatik beriladi."
        },
        {
          type: "code",
          title: "Override: metodni qayta yozish",
          code: `class Animal:
    def __init__(self, ism):
        self.ism = ism

    def ovoz(self):
        return "..."

    def tanishtir(self):
        print(f"{self.ism}: {self.ovoz()}")

class Dog(Animal):
    def ovoz(self):
        return "Vov-vov! 🐶"

class Cat(Animal):
    def ovoz(self):
        return "Miyov! 🐱"

Animal("Noma'lum").tanishtir()
Dog("Bobik").tanishtir()
Cat("Momiq").tanishtir()`,
          explain: [
            "`Dog` va `Cat` ota sinfdagi `ovoz()` ni **qayta yozdi** (override) — nomi bir xil, ichi boshqa",
            "`tanishtir()` faqat ota sinfda yozilgan, lekin u `self.ovoz()` ni chaqiradi",
            "`self` it bo'lsa — itning `ovoz()` i, mushuk bo'lsa — mushukniki ishlaydi",
            "Python har doim avval **obyektning o'z sinfida** qidiradi, keyin ota sinfda"
          ],
          output: `Noma'lum: ...
Bobik: Vov-vov! 🐶
Momiq: Miyov! 🐱`,
          notes: "Eng qiziq joy: tanishtir() bitta, lekin natija har xil. «Nega?» deb so'rang va self qaysi obyekt ekanini birga aniqlang."
        },
        {
          type: "quiz",
          question: "Bu kod nima chiqaradi?",
          code: `class A:
    def salom(self):
        return "A"

class B(A):
    def salom(self):
        return "B" + super().salom()

print(B().salom())`,
          options: ["A", "B", "BA", "AB"],
          answer: 2,
          explain: "B.salom() override qilingan, lekin ichida super().salom() orqali ota metodni ham chaqiradi: \"B\" + \"A\" = \"BA\". Bu — metodni kengaytirish.",
          notes: "Bu override va super() ni birlashtiradi. Noto'g'ri javob berganlar bilan qadam-baqadam yurib chiqing."
        },
        {
          type: "compare",
          title: "Nusxalash yoki meros?",
          left: {
            label: "Kodni nusxalash",
            code: `class Dog:
    def __init__(self, ism, yosh):
        self.ism = ism
        self.yosh = yosh
    def ovqatlan(self):
        print(self.ism, "ovqatlandi")

class Cat:
    def __init__(self, ism, yosh):
        self.ism = ism
        self.yosh = yosh
    def ovqatlan(self):
        print(self.ism, "ovqatlandi")`
          },
          right: {
            label: "Meros",
            code: `class Animal:
    def __init__(self, ism, yosh):
        self.ism = ism
        self.yosh = yosh
    def ovqatlan(self):
        print(self.ism, "ovqatlandi")

class Dog(Animal):
    pass

class Cat(Animal):
    pass`
          },
          good: "right",
          notes: "So'rang: «Endi ovqatlan() ga ovqat nomini qo'shmoqchimiz. Chap tomonda nechta joyni o'zgartirasiz? O'ngda-chi?» (2 ga qarshi 1, 10 ta hayvon bo'lsa 10 ga qarshi 1)."
        },
        {
          type: "analogy",
          title: "Polimorfizm — qo'ng'iroq chalindi!",
          emoji: "🔔",
          text: "Maktabda tanaffus qo'ng'irog'i chalinadi. Bu **bitta signal**, lekin har kim o'zicha javob beradi: futbolchi bola maydonga yuguradi, Malika kutubxonaga ketadi, navbatchi sinfni shamollatadi, o'qituvchi esa o'qituvchilar xonasiga boradi. Qo'ng'iroq har kimga alohida buyruq bermaydi — u shunchaki «tanaffus!» deydi. **Polimorfizm** (yunoncha «ko'p shakllilik») ham shu: turli obyektlarga **bir xil metodni** chaqiramiz, har biri uni **o'zicha** bajaradi.",
          notes: "So'rang: «Uyda ham shunday misol bormi?» (Masalan: «Dasturxonga!» desa, har kim har xil ish qiladi). Bu juda tez tushuniladi."
        },
        {
          type: "code",
          title: "Polimorfizm amalda",
          code: `class Animal:
    def __init__(self, ism):
        self.ism = ism
    def ovoz(self):
        return "..."

class Dog(Animal):
    def ovoz(self):
        return "Vov!"

class Cat(Animal):
    def ovoz(self):
        return "Miyov!"

class Cow(Animal):
    def ovoz(self):
        return "Mo-o-o!"

hayvonlar = [Dog("Bobik"), Cat("Momiq"), Cow("Zebo"), Dog("Rex")]
for h in hayvonlar:
    print(h.ism, "->", h.ovoz())`,
          explain: [
            "Ro'yxatda **aralash** obyektlar: itlar, mushuk, sigir",
            "Siklda biz `h` qaysi tur ekanini **tekshirmaymiz** — shunchaki `h.ovoz()` deymiz",
            "Har bir obyekt o'z sinfidagi `ovoz()` ni ishlatadi",
            "Yangi hayvon (`Sheep`) qo'shsak, siklni o'zgartirish **shart emas** — bu polimorfizmning kuchi"
          ],
          output: `Bobik -> Vov!
Momiq -> Miyov!
Zebo -> Mo-o-o!
Rex -> Vov!`,
          notes: "Jonli kodlash: sinf bilan birga Sheep sinfini qo'shing («Bee-e!») va ro'yxatga qo'shing. Sikl o'zgarmasdan ishlashini ko'rsating."
        },
        {
          type: "code",
          title: "isinstance — obyekt qaysi turdan?",
          code: `class Animal:
    pass
class Dog(Animal):
    pass
class Cat(Animal):
    pass

d = Dog()
print(isinstance(d, Dog))
print(isinstance(d, Animal))
print(isinstance(d, Cat))
print(issubclass(Cat, Animal))

narsalar = [Dog(), Cat(), Dog(), 5, "salom"]
itlar = [x for x in narsalar if isinstance(x, Dog)]
print("Itlar soni:", len(itlar))`,
          explain: [
            "`isinstance(obyekt, Sinf)` — obyekt shu sinfdan (yoki uning farzandidan) bo'lsa `True`",
            "It — bu ham `Dog`, ham `Animal` (meros tufayli), lekin `Cat` emas",
            "`issubclass(Cat, Animal)` — `Cat` sinfi `Animal` ning farzandimi?",
            "Ro'yxatdan faqat kerakli turdagilarni ajratish uchun qulay (list comprehension bilan)",
            "Maslahat: iloji bo'lsa `isinstance` bilan `if-elif` zanjiri o'rniga **polimorfizm** ishlating"
          ],
          output: `True
True
False
True
Itlar soni: 2`,
          notes: "isinstance(5, int) kabi oddiy turlar bilan ham ishlashini ko'rsating — bu try/except ga muqobil tekshiruv sifatida ham foydali."
        },
        {
          type: "quiz",
          question: "Nima chiqadi?",
          code: `class Transport:
    pass
class Car(Transport):
    pass
class Bike(Transport):
    pass

t = Bike()
print(isinstance(t, Transport), isinstance(t, Car))`,
          options: ["True True", "True False", "False False", "False True"],
          answer: 1,
          explain: "Bike — Transport ning farzandi, shuning uchun birinchisi True. Lekin Bike va Car — aka-uka sinflar, bir-birining turi emas, shuning uchun ikkinchisi False.",
          notes: "Doskaga daraxtni chizib ko'rsating: Bike va Car bir-biriga emas, faqat Transport ga ulangan."
        },
        {
          type: "code",
          title: "O'yin qahramonlari: Character → Warrior",
          code: `class Character:
    def __init__(self, ism, hp, kuch):
        self.ism = ism
        self.hp = hp
        self.kuch = kuch

    def hujum(self, dushman):
        dushman.hp -= self.kuch
        print(f"{self.ism} -> {dushman.ism}: -{self.kuch}, qoldi {dushman.hp} HP")

class Warrior(Character):
    def hujum(self, dushman):
        print("⚔️ Qilich zarbasi!")
        super().hujum(dushman)

temur = Warrior("Temur", 100, 15)
goblin = Character("Goblin", 40, 5)
temur.hujum(goblin)
goblin.hujum(temur)`,
          explain: [
            "`Character` — barcha qahramonlar uchun umumiy: `ism`, `hp` (jon), `kuch`, `hujum()`",
            "Metod argument sifatida **boshqa obyektni** qabul qiladi: `hujum(self, dushman)`",
            "`Warrior` hujumni **kengaytirdi**: avval o'z xabarini chiqaradi, keyin `super().hujum()`",
            "Goblin oddiy `Character` — u ota sinfning `hujum()` idan foydalanadi"
          ],
          output: `⚔️ Qilich zarbasi!
Temur -> Goblin: -15, qoldi 25 HP
Goblin -> Temur: -5, qoldi 95 HP`,
          notes: "O'quvchilar o'yinlarni yaxshi ko'radi — ulardan qanday qahramon turlari bo'lishini so'rang (Archer, Healer...). Bular uyga vazifada kerak bo'ladi."
        },
        {
          type: "code",
          title: "Mage va jamoaviy jang (polimorfizm)",
          code: `class Character:
    def __init__(self, ism, hp, kuch):
        self.ism, self.hp, self.kuch = ism, hp, kuch
    def hujum(self, d):
        d.hp -= self.kuch
        print(f"{self.ism} -> {d.ism}: -{self.kuch}, qoldi {d.hp} HP")

class Mage(Character):
    def __init__(self, ism, hp, kuch, mana):
        super().__init__(ism, hp, kuch)
        self.mana = mana
    def hujum(self, d):
        if self.mana >= 10:
            self.mana -= 10
            print("🔥 Olov sehri! Kuch x2")
            d.hp -= self.kuch
        super().hujum(d)

boss = Character("Ajdar", 100, 20)
jamoa = [Character("Askar", 50, 8), Mage("Zarina", 40, 12, 15)]
for raund in range(2):
    for qahramon in jamoa:
        qahramon.hujum(boss)`,
          explain: [
            "`Mage` qo'shimcha atribut (`mana`) oladi — `super().__init__` + `self.mana`",
            "Mana yetarli bo'lsa, sehr qo'shimcha zarba beradi va 10 mana sarflanadi",
            "1-raundda sehr ishladi (100 → 92 → 68), 2-raundda mana 5 qoldi — oddiy hujum",
            "Jamoa siklida biz turini tekshirmaymiz — har biri o'z `hujum()` ini qiladi: **polimorfizm**"
          ],
          output: `Askar -> Ajdar: -8, qoldi 92 HP
🔥 Olov sehri! Kuch x2
Zarina -> Ajdar: -12, qoldi 68 HP
Askar -> Ajdar: -8, qoldi 60 HP
Zarina -> Ajdar: -12, qoldi 48 HP`,
          notes: "HP qiymatlarini doskada qadam-baqadam hisoblang. So'rang: «Ajdar qachon yengiladi? Buni while sikli bilan qanday yozamiz?» (while boss.hp > 0)."
        },
        {
          type: "text",
          title: "Meros bilan bog'liq ko'p xatolar",
          body: "Diqqat qiling — bu xatolar loyihada ham albatta uchraydi:",
          points: [
            "`super().__init__(...)` ni unutish → ota sinf atributlari yaratilmaydi → `AttributeError`",
            "`super().__init__` ga argumentlarni noto'g'ri tartibda berish",
            "Override qilganda metod nomini xato yozish (`ovozi` va `ovoz`) — yangi metod yaratiladi, eskisi o'zgarmaydi",
            "`class Dog(Animal)` o'rniga `class Dog: Animal` — meros ishlamaydi",
            "Hamma narsani merosga majburlash: «It — bu hayvon» ✅, lekin «Mashina — bu g'ildirak» ❌ (mashinada g'ildirak **bor** — bu kompozitsiya)"
          ],
          notes: "Oxirgi punktni alohida tushuntiring: «bu — ...ning turi» bo'lsa meros, «...da ... bor» bo'lsa kompozitsiya (atribut sifatida boshqa obyekt). Loyiha talablarida ikkalasi ham bor."
        },
        {
          type: "task",
          title: "Mashq 1: Geometrik shakllar",
          task: "`Shape` ota sinfi (`nomi` atributi, `yuza()` metodi 0 qaytaradi). Farzandlar: `Circle(r)`, `Rectangle(a, b)`, `Triangle(asos, h)` — har biri `yuza()` ni override qilsin. Shakllar ro'yxatini sikl bilan aylanib, har birining nomi va yuzasini (2 xona aniqlikda) va jami yuzani chiqaring.",
          starter: `import math

class Shape:
    def __init__(self, nomi):
        self.nomi = nomi
    def yuza(self):
        return 0

class Circle(Shape):
    def __init__(self, r):
        super().__init__("Doira")
        self.r = r
    # yuza() ni yozing

# Rectangle va Triangle ni yozing

shakllar = [Circle(2), Rectangle(3, 4), Triangle(6, 5)]`,
          hint: "Doira yuzasi: `math.pi * r ** 2`. Uchburchak: `asos * h / 2`. Siklda `round(s.yuza(), 2)` ishlating.",
          solution: `import math

class Shape:
    def __init__(self, nomi):
        self.nomi = nomi
    def yuza(self):
        return 0

class Circle(Shape):
    def __init__(self, r):
        super().__init__("Doira")
        self.r = r
    def yuza(self):
        return math.pi * self.r ** 2

class Rectangle(Shape):
    def __init__(self, a, b):
        super().__init__("To'rtburchak")
        self.a = a
        self.b = b
    def yuza(self):
        return self.a * self.b

class Triangle(Shape):
    def __init__(self, asos, h):
        super().__init__("Uchburchak")
        self.asos = asos
        self.h = h
    def yuza(self):
        return self.asos * self.h / 2

shakllar = [Circle(2), Rectangle(3, 4), Triangle(6, 5)]
jami = 0
for s in shakllar:
    print(s.nomi, round(s.yuza(), 2))
    jami += s.yuza()
print("Jami yuza:", round(jami, 2))`,
          notes: "10 daqiqa. super().__init__('Doira') da nomni farzand o'zi berishiga e'tibor qarating — Circle(2) chaqiruvchi nomni bermaydi."
        },
        {
          type: "task",
          title: "Mashq 2: Xodimlar maoshi",
          task: "`Employee` (ism, maosh, `oylik()` metodi maoshni qaytaradi, `__str__`). `Manager` qo'shimcha `bonus` oladi va `oylik()` = maosh + bonus. `Intern` (amaliyotchi) `oylik()` = maoshning yarmi. Hammasini bitta ro'yxatda aylanib chiqaring va jami ish haqi fondini hisoblang.",
          starter: `class Employee:
    def __init__(self, ism, maosh):
        self.ism = ism
        self.maosh = maosh
    def oylik(self):
        return self.maosh
    def __str__(self):
        return f"{self.ism}: {self.oylik()} so'm"

# Manager va Intern ni yozing

xodimlar = [
    Employee("Ali", 5000000),
    Manager("Dilnoza", 8000000, 2000000),
    Intern("Sardor", 3000000),
]`,
          hint: "`Manager.__init__` da `super().__init__(ism, maosh)` va `self.bonus = bonus`. `Intern` ga faqat `oylik()` ni override qilish yetarli. `__str__` ni qayta yozish shart emas — u `self.oylik()` ni chaqiradi!",
          solution: `class Employee:
    def __init__(self, ism, maosh):
        self.ism = ism
        self.maosh = maosh
    def oylik(self):
        return self.maosh
    def __str__(self):
        return f"{self.ism}: {self.oylik()} so'm"

class Manager(Employee):
    def __init__(self, ism, maosh, bonus):
        super().__init__(ism, maosh)
        self.bonus = bonus
    def oylik(self):
        return self.maosh + self.bonus

class Intern(Employee):
    def oylik(self):
        return self.maosh // 2

xodimlar = [
    Employee("Ali", 5000000),
    Manager("Dilnoza", 8000000, 2000000),
    Intern("Sardor", 3000000),
]
for x in xodimlar:
    print(x)
print("Jami fond:", sum(x.oylik() for x in xodimlar), "so'm")`,
          notes: "Bu mashqning asosiy g'oyasi: __str__ ota sinfda bir marta yozilgan, lekin polimorfizm tufayli har kim uchun to'g'ri oylik chiqadi. Buni o'quvchilar o'zi kashf qilsin."
        },
        {
          type: "summary",
          title: "Xulosa",
          points: [
            "**Meros**: `class Dog(Animal):` — farzand ota sinfdagi hamma narsani oladi",
            "`super().__init__(...)` — ota sinf atributlarini to'ldiradi, keyin farzandga xoslari qo'shiladi",
            "**Override** — ota metodini farzandda shu nom bilan qayta yozish",
            "`super().metod()` — ota metodini ishlatib, ustiga yangi narsa qo'shish",
            "**Polimorfizm** — aralash obyektlar ro'yxatida bir xil metodni chaqirish, har biri o'zicha bajaradi",
            "`isinstance(obj, Sinf)` — obyekt turini tekshirish",
            "Meros: «...ning turi»; kompozitsiya: «...da ... bor»"
          ],
          notes: "Keyingi dars yakuniy loyiha haqida ekanini e'lon qiling. O'quvchilar uyda 4 ta variantdan qaysi biri yoqishini o'ylab kelishsin."
        }
      ],
      homework: [
        { level: "oson", task: "`Vehicle` ota sinfi (`nomi`, `tezlik`, `harakatlan()` metodi). `Car` va `Bicycle` farzandlari `harakatlan()` ni override qilsin («🚗 ... yo'lda ketmoqda», «🚲 ... pedal bosilmoqda»). Ro'yxatda aylanib chaqiring." },
        { level: "o'rta", task: "Darsdagi o'yinga `Archer` (kamonchi: 30% ehtimol bilan ikki marta uradi, `random` dan foydalaning) va `Healer` (hujum o'rniga jamoadoshni davolaydi) sinflarini qo'shing. Boss HP 0 bo'lguncha `while` sikli bilan jang qiling." },
        { level: "qiyin", task: "Kompozitsiya + meros: `Library` sinfi ichida `Item` lar ro'yxati saqlansin. `Item` dan `Book` (sahifalar) va `Magazine` (son raqami) meros olsin, har biri `__str__` va `ijara_muddati()` (kitob 14 kun, jurnal 7 kun) ni override qilsin. `Library` da qo'shish, qidirish (nom bo'yicha), turi bo'yicha sanash (`isinstance`) metodlari bo'lsin." }
      ]
    },

    // ================================================================
    // 4-DARS: YAKUNIY LOYIHA — REJALASH VA HIMOYA
    // ================================================================
    {
      id: "m8-l4",
      title: "Yakuniy loyiha: rejalash va himoya",
      duration: 90,
      goals: [
        "Loyihani g'oyadan tayyor dasturgacha bosqichma-bosqich rejalashtirish",
        "Toza kod yozish qoidalarini qo'llash",
        "Dasturni qo'lda test qilish va ko'p uchraydigan xatolarni topish",
        "Loyihani taqdimot qilish va himoya qilishga tayyorlanish",
        "Baholash mezonlarini bilish va loyiha mavzusini tanlash"
      ],
      keywords: ["loyiha", "reja", "toza kod", "test", "JSON", "himoya", "MVP"],
      plan: [
        { time: 10, label: "Kirish: kurs davomida nimalarni o'rgandik" },
        { time: 20, label: "Loyihani rejalashtirish: g'oyadan kodgacha" },
        { time: 15, label: "Toza kod va menyu + JSON andozasi" },
        { time: 15, label: "Test qilish va ko'p uchraydigan xatolar" },
        { time: 15, label: "Himoya va baholash mezonlari" },
        { time: 15, label: "Mavzu tanlash va reja yozish (amaliyot)" }
      ],
      slides: [
        {
          type: "title",
          title: "Yakuniy loyiha: rejalash va himoya",
          subtitle: "4 oylik yo'lning cho'qqisi — o'z dasturingizni yaratasiz!",
          emoji: "🏆",
          notes: "Tabriklashdan boshlang: 4 oy oldin ular print() ni bilmagan edi. Modullarni tez eslating (if/sikllar, ro'yxat/lug'atlar, funksiyalar, try/except va fayllar, json, OOP) — loyihada hammasi kerak bo'ladi. So'rang: «Kursda eng yoqqan mavzu qaysi bo'ldi?»"
        },
        {
          type: "analogy",
          title: "Loyiha — palov damlash kabi",
          emoji: "🍚",
          text: "Oshpaz palov damlashdan oldin hech qachon «qani, boshlaymiz-chi» demaydi. Avval **nechta odamga** ekanini aniqlaydi (g'oya), keyin **masalliq ro'yxatini** tuzadi: guruch, go'sht, sabzi, piyoz (funksiyalar ro'yxati). Qozon tanlaydi (ma'lumot tuzilmasi). Keyin **qat'iy tartib**: avval yog' qizdiriladi, keyin go'sht, keyin sabzi, oxirida guruch (qadam-baqadam qurish). Har bosqichda **tatib ko'radi** (test). Sabzi va guruchni bir vaqtda tashlasangiz — bo'tqa chiqadi! Dastur ham shunday: hammasini birdan yozsangiz — xatolar bo'tqasi chiqadi.",
          notes: "So'rang: «Kim uyda palov damlashga yordam bergan? Qanday tartibda qilinadi?» O'quvchilar tartibni aytib berishsin — keyin uni loyiha bosqichlariga solishtiring."
        },
        {
          type: "text",
          title: "Loyiha qurishning 5 qadami",
          body: "Har qanday dastur — kichik o'yindan katta ilovagacha — shu yo'l bilan quriladi:",
          points: [
            "**1. G'oya** — bir gap bilan: «Dastur nima qiladi va kim uchun?»",
            "**2. Funksiyalar ro'yxati** — foydalanuvchi nima qila oladi? (5-8 punkt). Eng muhimlarini belgilang",
            "**3. Ma'lumot tuzilmalari** — nima saqlanadi va qayerda: ro'yxat, lug'at, sinf atributlari, JSON fayl",
            "**4. Sinflar va funksiyalar** — qog'ozda «skelet»: sinf nomlari, atributlari, metodlari",
            "**5. Qadam-baqadam qurish** — avval eng oddiy ishlaydigan versiya (MVP), keyin ustiga qo'shib borish. Har qadamdan keyin ishga tushirib tekshiring!"
          ],
          notes: "Bu slayd — darsning eng muhim qismi. O'quvchilar har bir qadamni daftarga yozib olsin. Loyiha papkasida reja.txt fayli bo'lishi ham baholanadi."
        },
        {
          type: "text",
          title: "Misol: «Kutubxona tizimi» rejasi",
          body: "**G'oya:** maktab kutubxonasi uchun kitoblarni hisobga oluvchi dastur. **Funksiyalar ro'yxati:**",
          points: [
            "⭐ Kitob qo'shish (nomi, muallif, yil) — **majburiy**",
            "⭐ Barcha kitoblarni ko'rish (bor/band holati bilan) — **majburiy**",
            "⭐ Kitobni o'quvchiga berish va qaytarib olish — **majburiy**",
            "⭐ Ma'lumotlarni JSON faylga saqlash va yuklash — **majburiy**",
            "➕ Nom yoki muallif bo'yicha qidirish — qo'shimcha",
            "➕ Kitob, jurnal, darslik turlari (meros) — qo'shimcha",
            "➕ Muddati o'tgan kitoblar (`datetime`) — bonus"
          ],
          notes: "Sinf bilan birga «Virtual uy hayvoni» uchun ham shunday ro'yxat tuzing (doskada, 3-4 daqiqa). ⭐ va ➕ ga ajratish — vaqtni to'g'ri taqsimlashning kaliti."
        },
        {
          type: "code",
          title: "Skelet: sinflarni avval qog'ozda (keyin kodda)",
          code: `class Book:
    def __init__(self, nomi, muallif):
        self.nomi = nomi
        self.muallif = muallif
        self.band = False

class Library:
    def __init__(self):
        self.kitoblar = []          # kompozitsiya: kutubxonada kitoblar BOR

    def qosh(self, kitob):
        self.kitoblar.append(kitob)

    def ber(self, nomi):
        for k in self.kitoblar:
            if k.nomi == nomi and not k.band:
                k.band = True
                return True
        return False

lib = Library()
lib.qosh(Book("Ufq", "Said Ahmad"))
print(lib.ber("Ufq"), lib.ber("Ufq"))`,
          explain: [
            "Avval faqat **eng kerakli** atribut va metodlar — keyin kengaytiramiz",
            "`Library` ichida `Book` obyektlari ro'yxati — bu **kompozitsiya**",
            "`ber()` birinchi marta `True` (berildi), ikkinchi marta `False` (allaqachon band)",
            "Har bir metodni yozgan zahoti shunday kichik tekshiruv bilan sinab ko'ring"
          ],
          output: `True False`,
          notes: "Ta'kidlang: bu MVP ning boshlanishi. Menyu, JSON, __str__ — keyingi qadamlarda qo'shiladi. Avval yadro ishlashi kerak."
        },
        {
          type: "compare",
          title: "Toza kod: nomlar muhim!",
          left: {
            label: "Tushunarsiz kod",
            code: `class a:
    def __init__(s, x, y):
        s.x = x
        s.y = y
    def f(s, z):
        if s.y >= z:
            s.y = s.y - z
            return 1
        return 0`
          },
          right: {
            label: "Toza kod",
            code: `class Product:
    def __init__(self, nomi, soni):
        self.nomi = nomi
        self.soni = soni

    def sot(self, miqdor):
        """Omborda yetarli bo'lsa sotadi."""
        if self.soni >= miqdor:
            self.soni -= miqdor
            return True
        return False`
          },
          good: "right",
          notes: "So'rang: «Chap tomondagi kod nima qiladi?» O'quvchilar qiynaladi. Keyin o'ngdagini ko'rsating — ikkalasi bir xil ishlaydi! Himoyada o'z kodingizni tushuntirish uchun ham nomlar muhim."
        },
        {
          type: "text",
          title: "Toza kod qoidalari",
          body: "Kodni kompyuter uchun emas, **odamlar uchun** yozamiz (jumladan bir haftadan keyingi o'zingiz uchun!):",
          points: [
            "**Nomlar ma'noli bo'lsin:** `x`, `a1` emas — `narx`, `talabalar`, `hisobla_jami()`",
            "**Sinf nomlari** — `KattaHarf` (`BankAccount`), **funksiya va o'zgaruvchilar** — `kichik_harf` (`get_balance`)",
            "**Funksiya kichik bo'lsin:** bitta funksiya — bitta ish. 20 qatordan oshsa — bo'lib tashlang",
            "**Takrorlanmasin:** bir xil kod 2-3 joyda bo'lsa — funksiya yoki metodga chiqaring",
            "**Izohlar** «nima uchun»ni tushuntirsin: `# 0 dan pastga tushmasin` ✅, `# 1 qo'shamiz` ❌",
            "**Sehrli sonlar** o'rniga konstanta: `MAX_ENERGIYA = 100`",
            "Hammasini oxirida `main()` funksiyasiga yig'ing"
          ],
          notes: "Har bir qoidaga o'quvchilarning avvalgi vazifalaridan (anonim) misol ko'rsatsangiz, juda samarali bo'ladi."
        },
        {
          type: "code",
          title: "Menyu andozasi: try/except bilan xavfsiz tanlov",
          code: `buyruqlar = ["1", "abc", "2", "9", "0"]   # input() o'rniga sinov uchun

def tanlovni_ol(matn):
    try:
        return int(matn)
    except ValueError:
        return -1

for b in buyruqlar:
    tanlov = tanlovni_ol(b)
    if tanlov == 1:
        print("📚 Kitoblar ro'yxati")
    elif tanlov == 2:
        print("➕ Kitob qo'shish")
    elif tanlov == 0:
        print("👋 Xayr!")
        break
    else:
        print("⚠️ Noto'g'ri tanlov:", b)`,
          explain: [
            "Haqiqiy loyihada `buyruqlar` o'rniga `while True:` va `input('Tanlang: ')` bo'ladi",
            "`try/except ValueError` — foydalanuvchi harf yozsa, dastur **qulamaydi**",
            "Noma'lum raqam (9) uchun ham `else` bor — har qanday kiritishga tayyor bo'ling",
            "`0` — chiqish. Chiqishdan oldin JSON ga saqlashni unutmang!",
            "Maslahat: sinov uchun kiritishlarni ro'yxatga yozib qo'yish — tez test qilish usuli"
          ],
          output: `📚 Kitoblar ro'yxati
⚠️ Noto'g'ri tanlov: abc
➕ Kitob qo'shish
⚠️ Noto'g'ri tanlov: 9
👋 Xayr!`,
          notes: "Bu andozani o'quvchilar loyihasiga to'g'ridan-to'g'ri olishi mumkin. So'rang: «try/except bo'lmasa 'abc' kiritilganda nima bo'lardi?» (ValueError, dastur to'xtaydi)."
        },
        {
          type: "code",
          title: "Obyektlarni JSON ga saqlash va yuklash",
          code: `import json

class Book:
    def __init__(self, nomi, muallif):
        self.nomi = nomi
        self.muallif = muallif

    def to_dict(self):
        return {"nomi": self.nomi, "muallif": self.muallif}

kitoblar = [Book("Shum bola", "G'afur G'ulom"), Book("Ufq", "Said Ahmad")]

with open("kitoblar.json", "w", encoding="utf-8") as f:
    json.dump([k.to_dict() for k in kitoblar], f, ensure_ascii=False)

with open("kitoblar.json", encoding="utf-8") as f:
    malumot = json.load(f)
yuklangan = [Book(d["nomi"], d["muallif"]) for d in malumot]
print(len(yuklangan), "ta kitob yuklandi:", yuklangan[1].nomi)`,
          explain: [
            "`json` obyektni to'g'ridan-to'g'ri saqlay olmaydi — avval **lug'atga** aylantiramiz: `to_dict()`",
            "Saqlash: obyektlar → lug'atlar ro'yxati → `json.dump`",
            "Yuklash: `json.load` → lug'atlar ro'yxati → har biridan qayta obyekt yaratamiz",
            "`ensure_ascii=False` — o' va g' harflari faylda chiroyli saqlanadi"
          ],
          output: `2 ta kitob yuklandi: Ufq`,
          notes: "Bu — loyihaning eng ko'p xato qilinadigan joyi. O'quvchilar json.dump(kitoblar, f) deb yozib, TypeError: Object of type Book is not JSON serializable olishadi. Shu xatoni ko'rsating."
        },
        {
          type: "text",
          title: "Qo'lda test qilish: «buzib ko'ring!»",
          body: "Dasturingiz faqat «yaxshi» kiritishlar bilan ishlasa — bu hali tayyor dastur emas. Har bir funksiyani shunday tekshiring:",
          points: [
            "✅ **Oddiy holat:** to'g'ri qiymatlar (kitob qo'shish, ro'yxatni ko'rish)",
            "⚠️ **Chegara holatlar:** bo'sh ro'yxat, 0, juda katta son, bo'sh satr",
            "❌ **Noto'g'ri kiritish:** son o'rniga harf, mavjud bo'lmagan kitob nomi, manfiy narx",
            "💾 **Fayl:** dasturni yopib qayta oching — ma'lumot saqlandimi? Fayl yo'q bo'lsa-chi?",
            "📝 Test jadvali tuzing: «Nima kiritdim → Nima kutdim → Nima bo'ldi»",
            "Do'stingizga bering — u siz o'ylamagan usulda buzadi! 😄"
          ],
          notes: "Juftlarga bo'linib bir-birining oldingi uy vazifasini «buzishga» urinib ko'rish o'yinini o'tkazing (3-4 daqiqa). Juda qiziqarli va foydali."
        },
        {
          type: "text",
          title: "Loyihalarda eng ko'p uchraydigan xatolar",
          body: "O'tgan yillardagi o'quvchilar loyihalaridan to'plangan «top xatolar»:",
          points: [
            "`self` unutilgan yoki `self.` siz atribut → `AttributeError` / `NameError`",
            "`super().__init__` chaqirilmagan → farzand sinfda ota atributlari yo'q",
            "`input()` matn qaytaradi: `if tanlov == 1` hech qachon `True` bo'lmaydi (`'1'` bilan solishtiring yoki `int()`)",
            "Obyektni to'g'ridan-to'g'ri `json.dump` qilish → avval `to_dict()`",
            "Fayl yo'q bo'lganda `FileNotFoundError` — `try/except` bilan ushlang",
            "Cheksiz `while True` — chiqish (`break`) sharti yo'q",
            "Ro'yxatni aylanayotganda undan element o'chirish — elementlar «sakrab» ketadi"
          ],
          notes: "Har bir xato uchun «belgisi qanday?» deb so'rang. Masalan input() xatosi: menyu hech narsaga javob bermaydi va doim else ishlaydi."
        },
        {
          type: "quiz",
          question: "Bu kodda qanday xato bor?",
          code: `class Pet:
    def __init__(self, ism):
        ism = ism
        self.toqlik = 50

p = Pet("Bobik")
print(p.ism)`,
          options: [
            "Hech qanday xato yo'q, Bobik chiqadi",
            "AttributeError: Pet obyektida ism atributi yo'q",
            "None chiqadi",
            "TypeError: argument yetishmayapti"
          ],
          answer: 1,
          explain: "ism = ism — bu faqat __init__ ichidagi vaqtinchalik o'zgaruvchi. Obyektga saqlash uchun self.ism = ism yozish kerak.",
          notes: "Bu eng ko'p uchraydigan xato — o'quvchilar uni o'z loyihasida albatta ko'radi. Xato matnini o'qishni mashq qildiring."
        },
        {
          type: "text",
          title: "Loyihani himoya qilish: 5-7 daqiqa",
          body: "Himoya — bu imtihon emas, balki o'z ishingiz bilan **faxrlanish** imkoniyati. Taqdimot tartibi:",
          points: [
            "**1. G'oya (30 soniya):** «Mening dasturim ... qiladi. Uni ... uchun yaratdim»",
            "**2. Demo (2-3 daqiqa):** dasturni ishga tushirib, asosiy funksiyalarni ko'rsating. Oldindan mashq qiling!",
            "**3. Kodni tushuntirish (2 daqiqa):** sinflaringiz, meros/kompozitsiya qayerda, JSON qanday saqlanadi",
            "**4. Qiyinchiliklar (1 daqiqa):** «Eng qiyini ... bo'ldi, uni ... qilib hal qildim»",
            "**5. Savollarga javob:** «Bilmayman» deyish uyat emas — «buni qanday hal qilardim» deb fikr yuriting",
            "Maslahat: demo uchun tayyor JSON fayl bilan boshlang — bo'sh dastur zerikarli ko'rinadi"
          ],
          notes: "Himoyaga tayyorgarlik uchun o'quvchilar uyda oyna oldida yoki oilasi oldida taqdimotni bir marta mashq qilishsin. Ota-onalarni himoyaga taklif qilish ham yaxshi motivatsiya."
        },
        {
          type: "text",
          title: "Baholash mezonlari (100 ball)",
          body: "Loyihangiz quyidagi mezonlar bo'yicha baholanadi:",
          points: [
            "**Ishlashi — 25 ball:** dastur xatosiz ishga tushadi, barcha majburiy funksiyalar ishlaydi",
            "**OOP — 20 ball:** kamida 2 ta sinf, meros yoki kompozitsiya, metodlar, `__str__`",
            "**Ma'lumotlar va fayl — 15 ball:** ro'yxat/lug'atlar, JSON ga saqlash va qayta yuklash",
            "**Xatolarga chidamlilik — 10 ball:** `try/except`, noto'g'ri kiritishda qulamaydi",
            "**Toza kod — 10 ball:** ma'noli nomlar, kichik funksiyalar, izohlar",
            "**Himoya — 15 ball:** demo, kodni tushuntirish, savollarga javob",
            "**Ijodkorlik — 5 ball:** o'ziga xos g'oya, bonus funksiyalar (`random`, `datetime`, ...)"
          ],
          notes: "Mezonlarni o'quvchilarga qog'ozda tarqating yoki suratga olishsin. Ta'kidlang: eng ko'p ball «ishlashi» uchun — murakkab lekin ishlamaydigan dasturdan oddiy lekin ishlaydigani yaxshi."
        },
        {
          type: "text",
          title: "Loyiha g'oyalari: qiyinlik bo'yicha",
          body: "Asosiy 4 ta variantdan birini tanlang yoki o'qituvchi bilan kelishib o'z g'oyangizni taklif qiling:",
          points: [
            "🟢 **Virtual uy hayvoni (Tamagotchi)** — ovqat berish, o'ynash, uxlatish; It/Mushuk sinflari. Boshlash uchun eng oson",
            "🟡 **Do'kon / kassa tizimi** — mahsulotlar, savat, chek, ombor qoldig'i; `Product` → `Food`/`Electronics`",
            "🟡 **Kutubxona tizimi** — kitob qo'shish, berish/qaytarish, qidirish; kompozitsiya + meros",
            "🔴 **Matnli sarguzasht o'yini** — xonalar, qahramon, dushmanlar, inventar, jang; ko'p sinflar va `random`",
            "⭐ Boshqa g'oyalar: Viktorina o'yini, Kundalik/vazifalar rejalovchi, Sport turniri jadvali, Kino reytingi"
          ],
          notes: "O'quvchilarni o'z darajasiga mos tanlashga undang. Kuchli o'quvchi oson variantni olib, ko'p bonus qo'shishi ham mumkin. Dars oxirida har kim tanlovini aytsin."
        },
        {
          type: "quiz",
          question: "Loyihani boshlashning eng to'g'ri tartibi qaysi?",
          options: [
            "Darhol menyu va dizaynni yozish, keyin qolganini o'ylash",
            "G'oya → funksiyalar ro'yxati → ma'lumot tuzilmasi → sinflar skeleti → qadam-baqadam qurish va test",
            "Butun kodni bir kunda yozib, oxirida bir marta ishga tushirish",
            "Internetdan tayyor kodni topib, nomlarini o'zgartirish"
          ],
          answer: 1,
          explain: "Avval reja, keyin kichik qadamlar va har qadamdan keyin test. Bir marta oxirida ishga tushirilgan katta kodda xatolarni topish juda qiyin.",
          notes: "4-variant bo'yicha halollik haqida gaplashing: himoyada kodni tushuntira olmaslik darhol bilinadi va bu baholashda hisobga olinadi."
        },
        {
          type: "task",
          title: "Amaliyot 1: Loyihangiz skeleti",
          task: "Tanlagan loyihangiz uchun: (1) bir gaplik g'oya, (2) 5 ta funksiya (⭐/➕ belgisi bilan) izoh sifatida yozing. (3) Kamida 2 ta sinf skeletini yarating (atributlar va bo'sh metodlar), (4) 2-3 qatorlik tekshiruv bilan ishga tushiring. Namuna sifatida «Do'kon» varianti berilgan.",
          starter: `# G'oya: ...
# Funksiyalar:
# ⭐ 1. ...
# ⭐ 2. ...
# ➕ 3. ...

class Product:
    def __init__(self, nomi, narx, soni):
        pass

class Shop:
    def __init__(self):
        pass

    def qosh(self, mahsulot):
        pass

    def sot(self, nomi, miqdor):
        pass`,
          hint: "Avval faqat `__init__` va 1-2 ta eng muhim metodni to'liq yozing. `Shop` ichida `self.mahsulotlar = {}` (nomi → Product) qulay. Har bir metoddan keyin `print` bilan tekshiring.",
          solution: `# G'oya: kichik do'kon uchun mahsulot va savdo hisobi
# Funksiyalar:
# ⭐ 1. Mahsulot qo'shish
# ⭐ 2. Mahsulotlar ro'yxatini ko'rish
# ⭐ 3. Sotish (omborda yetarli bo'lsa)
# ⭐ 4. JSON ga saqlash/yuklash
# ➕ 5. Kunlik tushum hisoboti

class Product:
    def __init__(self, nomi, narx, soni):
        self.nomi = nomi
        self.narx = narx
        self.soni = soni

    def __str__(self):
        return f"{self.nomi}: {self.narx} so'm ({self.soni} dona)"

class Shop:
    def __init__(self):
        self.mahsulotlar = {}
        self.tushum = 0

    def qosh(self, mahsulot):
        self.mahsulotlar[mahsulot.nomi] = mahsulot

    def sot(self, nomi, miqdor):
        m = self.mahsulotlar.get(nomi)
        if m is None or m.soni < miqdor:
            print("❌ Sotib bo'lmaydi:", nomi)
            return
        m.soni -= miqdor
        self.tushum += m.narx * miqdor
        print("✅ Sotildi:", nomi, "x", miqdor)

dokon = Shop()
dokon.qosh(Product("Non", 4000, 10))
dokon.sot("Non", 3)
dokon.sot("Choy", 1)
print(dokon.mahsulotlar["Non"], "| Tushum:", dokon.tushum)`,
          notes: "Bu darsning asosiy amaliy qismi (10-12 daqiqa). Aylanib yurib har bir o'quvchining g'oyasi va sinflarini tekshiring. Juda katta rejalarni kichraytirishga yordam bering."
        },
        {
          type: "task",
          title: "Amaliyot 2: Saqlash va yuklash yordamchilari",
          task: "Har qanday loyihada ishlatsa bo'ladigan ikki funksiya yozing: `saqla(fayl, malumot)` — ma'lumotni JSON ga yozadi; `yukla(fayl, standart)` — faylni o'qiydi, fayl yo'q yoki buzilgan bo'lsa `standart` qiymatni qaytaradi. Ballar lug'ati bilan sinab ko'ring.",
          starter: `import json

def saqla(fayl, malumot):
    pass

def yukla(fayl, standart):
    pass

ballar = yukla("ballar.json", {})
print("Boshida:", ballar)
ballar["Ali"] = ballar.get("Ali", 0) + 10
saqla("ballar.json", ballar)
print("Saqlandi:", yukla("ballar.json", {}))`,
          hint: "`yukla` ichida `try:` bilan faylni oching, `except (FileNotFoundError, json.JSONDecodeError):` da `return standart`. Saqlashda `ensure_ascii=False, indent=2`.",
          solution: `import json

def saqla(fayl, malumot):
    with open(fayl, "w", encoding="utf-8") as f:
        json.dump(malumot, f, ensure_ascii=False, indent=2)

def yukla(fayl, standart):
    try:
        with open(fayl, encoding="utf-8") as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        return standart

ballar = yukla("ballar.json", {})
print("Boshida:", ballar)
ballar["Ali"] = ballar.get("Ali", 0) + 10
saqla("ballar.json", ballar)
print("Saqlandi:", yukla("ballar.json", {}))`,
          notes: "Kodni 2-3 marta ishga tushirishni so'rang — har safar Ali'ning bali 10 ga oshadi. Bu fayl haqiqatan saqlanayotganining isboti."
        },
        {
          type: "task",
          title: "Amaliyot 3: Xatolarni toping va tuzating",
          task: "Quyidagi «Virtual uy hayvoni» kodida 4 ta xato bor. Ularni toping, tuzating va dastur `Momiq: Miyov!` va `Momiq to'qligi: 70` deb chiqarishiga erishing.",
          starter: `class Pet:
    def __init__(self, ism):
        self.ism = ism
        self.toqlik = 50

    def ovqatlan(miqdor):
        self.toqlik += miqdor

class Cat(Pet):
    def __init__(self, ism):
        self.rang = "oq"

    def ovoz(self):
        return "Miyov!"

m = Cat("Momiq")
m.ovqatlan("20")
print(m.ism + ": " + m.ovoz)
print(m.ism, "to'qligi:", m.toqlik)`,
          hint: "1) `ovqatlan` da nimadir yetishmayapti. 2) `Cat.__init__` ota sinfni chaqirmayapti. 3) `m.ovoz` — metod chaqirildimi? 4) `ovqatlan` ga qanday turdagi qiymat berilyapti — son yoki matn?",
          solution: `class Pet:
    def __init__(self, ism):
        self.ism = ism
        self.toqlik = 50

    def ovqatlan(self, miqdor):
        self.toqlik += miqdor

class Cat(Pet):
    def __init__(self, ism):
        super().__init__(ism)
        self.rang = "oq"

    def ovoz(self):
        return "Miyov!"

m = Cat("Momiq")
m.ovqatlan(20)
print(m.ism + ": " + m.ovoz())
print(m.ism, "to'qligi:", m.toqlik)`,
          notes: "Xatolarni bittalab tuzatish va har safar ishga tushirish kerakligini ko'rsating — har bir xato xabari keyingi xatoga yo'l ko'rsatadi (TypeError, AttributeError, TypeError, bound method). 8-10 daqiqa."
        },
        {
          type: "summary",
          title: "Yakuniy loyihaga tayyormisiz? ✅",
          points: [
            "Reja: **g'oya → funksiyalar → ma'lumotlar → sinflar → qadam-baqadam qurish**",
            "Avval eng oddiy ishlaydigan versiya (MVP), keyin bonuslar",
            "Toza kod: ma'noli nomlar, kichik funksiyalar, foydali izohlar",
            "Har qadamdan keyin test: oddiy, chegara va noto'g'ri kiritishlar",
            "Obyektlarni JSON ga `to_dict()` orqali saqlang, yuklashda `try/except`",
            "Himoya: g'oya → demo → kod → qiyinchiliklar → savollar",
            "Siz endi dasturchisiz! 🎉 Muvaffaqiyat!"
          ],
          notes: "Loyiha topshirish muddatini va himoya sanasini aniq e'lon qiling. Har bir o'quvchi tanlagan mavzusini va bir gaplik g'oyasini aytib chiqsin — bu dars yakuni."
        }
      ],
      homework: [
        { level: "oson", task: "Tanlagan loyihangiz uchun to'liq reja yozing (reja.txt): g'oya, ⭐/➕ funksiyalar ro'yxati, qaysi sinflar va ularning atributlari/metodlari bo'lishi." },
        { level: "o'rta", task: "Loyihangizning MVP versiyasini yozing: kamida 2 ta sinf va menyu ishlasin (hali JSON shart emas). Test jadvalida kamida 5 ta tekshiruv bo'lsin." },
        { level: "qiyin", task: "To'liq loyihani yakunlang: meros yoki kompozitsiya, JSON ga saqlash/yuklash, try/except, kamida 1 ta bonus funksiya (`random` yoki `datetime`). Himoya uchun 5 daqiqalik taqdimot rejasini tayyorlang." }
      ]
    }
  ],

  project: {
    title: "Yakuniy loyiha",
    description: "Butun kurs davomida o'rgangan bilimlaringizni birlashtirib, to'liq ishlaydigan konsol dasturini yarating. Variantlardan birini tanlang: 🐶 Virtual uy hayvoni (Tamagotchi) — hayvonni boqish, o'ynatish, uxlatish va uning holatini kuzatish; 📚 Kutubxona tizimi — kitoblarni qo'shish, berish/qaytarish, qidirish; 🗺️ Matnli sarguzasht o'yini — xonalar bo'ylab sayohat, dushmanlar bilan jang, inventar; 🛒 Do'kon/kassa tizimi — mahsulotlar, savat, chek va ombor qoldig'i. O'z g'oyangizni o'qituvchi bilan kelishib tanlashingiz ham mumkin. Loyiha oxirida himoya qilinadi.",
    requirements: [
      "Kamida 2 ta sinf (class) — atributlar, metodlar va __str__ bilan",
      "Meros (inheritance) yoki kompozitsiya (bir obyekt ichida boshqa obyektlar) ishlatilgan bo'lsin",
      "Ma'lumotlar ro'yxat va/yoki lug'atlarda saqlansin",
      "Kod funksiyalarga bo'lingan bo'lsin (main() funksiyasi bilan)",
      "try/except — noto'g'ri kiritishda va fayl yo'q bo'lganda dastur qulamasin",
      "Ma'lumotlar JSON faylga saqlanib, dastur qayta ochilganda yuklansin",
      "Foydalanuvchi uchun raqamli menyu (while sikli) va chiqish imkoniyati",
      "Ma'noli nomlar va kamida 5 ta foydali izoh"
    ],
    bonus: [
      "random moduli: tasodifiy hodisalar (hayvon kasal bo'lib qolishi, jangdagi omad, chegirmalar)",
      "datetime: kitob qaytarish muddati, chek sanasi, hayvonning oxirgi ovqatlangan vaqti",
      "Polimorfizm: aralash obyektlar ro'yxatida bir xil metodni chaqirish",
      "Statistika: eng ko'p sotilgan mahsulot, eng faol o'quvchi, o'yin rekordlari",
      "Bir nechta foydalanuvchi yoki bir nechta saqlash fayli (slot) bilan ishlash"
    ],
    example: `import json
import random

FAYL = "pet.json"
MAX = 100


class Pet:
    turi = "Hayvon"

    def __init__(self, ism, toqlik=60, baxt=60, energiya=60, yosh=0):
        self.ism = ism
        self.toqlik = toqlik
        self.baxt = baxt
        self.energiya = energiya
        self.yosh = yosh

    def _chegarala(self):
        # Barcha ko'rsatkichlar 0..100 oralig'ida qolsin
        self.toqlik = max(0, min(MAX, self.toqlik))
        self.baxt = max(0, min(MAX, self.baxt))
        self.energiya = max(0, min(MAX, self.energiya))

    def ovoz(self):
        return "..."

    def feed(self):
        self.toqlik += 25
        self.energiya += 5
        self._chegarala()
        print(f"🍖 {self.ism} ovqatlandi. Mazza qildi!")

    def play(self):
        if self.energiya < 15:
            print(f"😴 {self.ism} juda charchagan, avval uxlasin.")
            return
        self.baxt += 20
        self.energiya -= 15
        self.toqlik -= 10
        self._chegarala()
        print(f"🎾 {self.ism} o'ynadi: {self.ovoz()}")

    def sleep(self):
        self.energiya += 40
        self.toqlik -= 10
        self.yosh += 1
        self._chegarala()
        print(f"💤 {self.ism} uxladi. Yoshi endi {self.yosh} kun.")

    def vaqt_otdi(self):
        # Har bir harakatdan keyin hayvon biroz och qoladi va zerikadi
        self.toqlik -= random.randint(3, 8)
        self.baxt -= random.randint(2, 6)
        self._chegarala()

    def tirikmi(self):
        return self.toqlik > 0 and self.baxt > 0

    def __str__(self):
        return (f"{self.turi} {self.ism} | 🍗 {self.toqlik} | 😊 {self.baxt} "
                f"| ⚡ {self.energiya} | 🎂 {self.yosh} kun")

    def to_dict(self):
        return {"turi": self.turi, "ism": self.ism, "toqlik": self.toqlik,
                "baxt": self.baxt, "energiya": self.energiya, "yosh": self.yosh}


class Dog(Pet):
    turi = "It"

    def ovoz(self):
        return "Vov-vov! 🐶"

    def play(self):
        # It o'ynashni juda yaxshi ko'radi: qo'shimcha baxt
        super().play()
        self.baxt = min(MAX, self.baxt + 5)


class Cat(Pet):
    turi = "Mushuk"

    def ovoz(self):
        return "Miyov! 🐱"

    def sleep(self):
        # Mushuk ko'proq uxlaydi va ko'proq kuch yig'adi
        super().sleep()
        self.energiya = min(MAX, self.energiya + 10)


TURLAR = {"It": Dog, "Mushuk": Cat}


def saqlash(pet):
    with open(FAYL, "w", encoding="utf-8") as f:
        json.dump(pet.to_dict(), f, ensure_ascii=False, indent=2)
    print("💾 Saqlandi!")


def yuklash():
    try:
        with open(FAYL, encoding="utf-8") as f:
            d = json.load(f)
        sinf = TURLAR.get(d["turi"], Pet)
        return sinf(d["ism"], d["toqlik"], d["baxt"], d["energiya"], d["yosh"])
    except (FileNotFoundError, json.JSONDecodeError, KeyError):
        return None


def yangi_pet():
    ism = input("Uy hayvoningiz ismi: ").strip() or "Do'stim"
    tur = input("Turi (1 - it, 2 - mushuk): ").strip()
    if tur == "2":
        return Cat(ism)
    return Dog(ism)


def menyu():
    print("\\n--- MENYU ---")
    print("1. Ovqat berish")
    print("2. O'ynash")
    print("3. Uxlatish")
    print("4. Holatini ko'rish")
    print("5. Saqlash")
    print("0. Saqlab chiqish")


def main():
    print("🐾 VIRTUAL UY HAYVONI 🐾")
    pet = yuklash()
    if pet:
        print("Xush kelibsiz! Topildi:", pet)
    else:
        pet = yangi_pet()
        print("Yangi do'stingiz:", pet)

    amallar = {"1": pet.feed, "2": pet.play, "3": pet.sleep}

    while pet.tirikmi():
        menyu()
        try:
            tanlov = input("Tanlang: ").strip()
        except EOFError:
            tanlov = "0"
        if tanlov in amallar:
            amallar[tanlov]()
            pet.vaqt_otdi()
        elif tanlov == "4":
            print(pet)
        elif tanlov == "5":
            saqlash(pet)
        elif tanlov == "0":
            saqlash(pet)
            print("Xayr! 👋")
            break
        else:
            print("⚠️ Bunday buyruq yo'q.")
    else:
        print(f"😢 {pet.ism} sizni tark etdi... Unga ko'proq g'amxo'rlik qiling!")


main()`
  },

  test: [
    {
      q: "Sinf (class) va obyekt o'rtasidagi farq nima?",
      options: [
        "Ular bir xil narsa",
        "Sinf — chizma (shablon), obyekt — shu chizma asosida yaratilgan aniq narsa",
        "Obyekt — chizma, sinf — undan yaratilgan narsa",
        "Sinf faqat sonlarni, obyekt faqat matnlarni saqlaydi"
      ],
      answer: 1
    },
    {
      q: "__init__ metodi qachon ishlaydi?",
      options: [
        "Faqat biz uni o'zimiz chaqirganda",
        "Dastur tugaganda",
        "Har safar sinfdan yangi obyekt yaratilganda avtomatik",
        "print(obyekt) yozilganda"
      ],
      answer: 2
    },
    {
      q: "Bu kod nima chiqaradi?",
      code: `class Box:
    def __init__(self, n):
        self.n = n
    def ikki(self):
        self.n = self.n * 2

b = Box(5)
b.ikki()
b.ikki()
print(b.n)`,
      options: ["5", "10", "20", "Xato"],
      answer: 2
    },
    {
      q: "Metod ichidagi self nimani bildiradi?",
      options: [
        "Sinfning nomini",
        "Metodni chaqirgan, hozir ishlayotgan obyektning o'zini",
        "Ota sinfni",
        "Python kalit so'zi, uni olib tashlasa ham bo'ladi"
      ],
      answer: 1
    },
    {
      q: "Bu kod nima chiqaradi?",
      code: `class Game:
    oyinchilar = 0
    def __init__(self, ism):
        self.ism = ism
        Game.oyinchilar += 1

a = Game("Ali")
b = Game("Vali")
c = Game("Sardor")
print(Game.oyinchilar)`,
      options: ["0", "1", "3", "Xato"],
      answer: 2
    },
    {
      q: "Atribut nomi oldidagi pastki chiziq (self._balance) nimani bildiradi?",
      options: [
        "Python bu atributni o'zgartirishni butunlay taqiqlaydi",
        "Dasturchilar kelishuvi: «ichki atribut, tashqaridan to'g'ridan-to'g'ri o'zgartirmang»",
        "Atribut avtomatik JSON ga saqlanadi",
        "Atribut faqat son bo'la oladi"
      ],
      answer: 1
    },
    {
      q: "Farzand sinfning __init__ ida super().__init__(ism) nima qiladi?",
      options: [
        "Yangi sinf yaratadi",
        "Ota sinfning __init__ ini chaqirib, ota sinf atributlarini to'ldiradi",
        "Farzand sinfni o'chiradi",
        "Dasturni qayta ishga tushiradi"
      ],
      answer: 1
    },
    {
      q: "Bu kod nima chiqaradi? (polimorfizm)",
      code: `class Shakl:
    def nomi(self):
        return "shakl"
class Doira(Shakl):
    def nomi(self):
        return "doira"
class Kvadrat(Shakl):
    pass

for s in [Doira(), Kvadrat()]:
    print(s.nomi(), end=" ")`,
      options: ["shakl shakl", "doira doira", "doira shakl", "Xato"],
      answer: 2
    },
    {
      q: "Kurs takrori: bu kod nima chiqaradi?",
      code: `try:
    son = int("12a")
    print("Son:", son)
except ValueError:
    print("Xato kiritish")`,
      options: ["Son: 12", "Son: 12a", "Xato kiritish", "Dastur to'xtaydi"],
      answer: 2
    },
    {
      q: "Kurs takrori: Book obyektlari ro'yxatini JSON faylga saqlashning to'g'ri usuli qaysi?",
      options: [
        "json.dump(kitoblar, f) — obyektlarni to'g'ridan-to'g'ri",
        "Har bir obyektni to_dict() bilan lug'atga aylantirib, lug'atlar ro'yxatini json.dump qilish",
        "print(kitoblar) natijasini nusxalab faylga qo'lda yozish",
        "JSON obyektlarni umuman saqlay olmaydi, faqat .txt ishlatish kerak"
      ],
      answer: 1
    }
  ]
});
