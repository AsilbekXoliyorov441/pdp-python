window.COURSE_MODULES = window.COURSE_MODULES || [];
COURSE_MODULES.push({
  id: 7,
  month: 4,
  weeks: "13-14 hafta",
  title: "Xatolar, fayllar va modullar",
  icon: "🛡️",
  description: "Dasturni xatolarga chidamli qilishni, ma'lumotlarni faylga saqlashni, tayyor modullardan foydalanishni va JSON bilan ishlashni o'rganamiz. Endi dasturlarimiz yopilgandan keyin ham ma'lumotni \"eslab qoladi\".",
  outcomes: [
    "Traceback'ni o'qib, xato turini va qatorini topa oladi",
    "try/except/else/finally yordamida dasturni xatolardan himoya qila oladi",
    "raise orqali o'z tekshiruvlarini yoza oladi",
    "Fayllarga yozish, qo'shish va o'qishni with yordamida bajara oladi",
    "math, random, datetime modullaridan foydalana oladi",
    "JSON orqali lug'at va ro'yxatlarni faylga saqlab, qayta yuklay oladi",
    "Ma'lumotni saqlaydigan kichik konsol ilova yoza oladi"
  ],
  lessons: [
    // ===================== DARS 1 =====================
    {
      id: "m7-l1",
      title: "Xatolar va try/except",
      duration: 90,
      goals: [
        "SyntaxError va ishlash vaqtidagi xatolarni farqlash",
        "Asosiy xato turlarini tanish: ValueError, ZeroDivisionError, IndexError, KeyError, TypeError, NameError",
        "Traceback'ni o'qish",
        "try/except/else/finally bilan xatolarni ushlash",
        "Xavfsiz son kiritish funksiyasini yozish va raise'dan foydalanish"
      ],
      keywords: ["Exception", "Traceback", "try", "except", "else", "finally", "as e", "raise"],
      plan: [
        { time: 10, label: "Takrorlash (funksiyalar) va motivatsiya: dastur nega 'qulaydi'?" },
        { time: 15, label: "Xato turlari va traceback'ni o'qish" },
        { time: 25, label: "try/except, bir nechta except, as e, else/finally" },
        { time: 10, label: "Xavfsiz son kiritish va raise" },
        { time: 25, label: "Amaliy mashqlar" },
        { time: 5, label: "Xulosa va uyga vazifa" }
      ],
      slides: [
        {
          type: "title",
          title: "Xatolar va try/except",
          subtitle: "Dasturimiz yiqilmasin: xatolarni ushlash san'ati",
          emoji: "🛡️",
          notes: "Darsni savol bilan boshlang: 'Kim dasturi qizil yozuv chiqarib to'xtab qolganini ko'rgan?' Hamma qo'l ko'taradi. Bugun shu qizil yozuvni tushunish va boshqarishni o'rganamiz."
        },
        {
          type: "text",
          title: "Xatolar ikki xil bo'ladi",
          body: "Python xatolarni ikki guruhga bo'ladi. Ularni farqlash juda muhim, chunki ular turlicha tuzatiladi.",
          points: [
            "**SyntaxError** — kod Python qoidalariga zid yozilgan (qavs yopilmagan, `:` unutilgan). Dastur **umuman boshlanmaydi**.",
            "**Ishlash vaqtidagi xato (runtime error, Exception)** — kod to'g'ri yozilgan, lekin bajarilayotganda muammo chiqdi (0 ga bo'lish, yo'q element). Dastur **xato joyigacha ishlaydi**, keyin to'xtaydi.",
            "SyntaxError'ni faqat kodni tuzatib yo'qotamiz.",
            "Runtime xatolarni esa `try/except` bilan **ushlab**, dasturni davom ettirishimiz mumkin — bugungi asosiy mavzu."
          ],
          notes: "Doskaga ikki misol yozing: `print(\"salom\"` (SyntaxError) va `print(10/0)` (runtime). Sinfdan so'rang: 'Qaysi biri birinchi qatorgacha ham ishlamaydi?'"
        },
        {
          type: "analogy",
          title: "Oshpaz va retsept",
          emoji: "🍲",
          text: "Tasavvur qiling, oyingiz palov retseptini yozib berdi. Agar retsept shunchalik chalkash yozilganki, uni umuman o'qib bo'lmasa — bu **SyntaxError**: ishni boshlay olmaysiz. Agar retsept aniq, lekin pishirayotganda sabzi tugab qolsa — bu **runtime xato**: ish yarmida to'xtadi. Tajribali oshpaz esa oldindan o'ylaydi: 'Agar sabzi tugasa, qo'shnidan so'rayman'. Mana shu oldindan o'ylangan reja — `try/except`!",
          notes: "O'quvchilardan o'zlarining misolini so'rang: 'Futbol o'yinida qanday try/except bor?' (to'p chiqib ketsa — aut, o'yin to'xtamaydi)."
        },
        {
          type: "code",
          title: "Xato dasturni to'xtatadi",
          code: `print("Dastur boshlandi")
a = 10
b = 0
print("Bo'linma:", a / b)
print("Bu qator hech qachon chiqmaydi")`,
          explain: [
            "Birinchi `print` muvaffaqiyatli ishladi — dastur xatogacha ishlaydi.",
            "`a / b` qatorida **ZeroDivisionError** yuz berdi: nolga bo'lib bo'lmaydi.",
            "Xatodan keyingi barcha qatorlar bajarilmaydi — dastur 'qulaydi'.",
            "Oxirgi qatorda xato **turi** va **izohi** yoziladi: `ZeroDivisionError: division by zero`."
          ],
          output: "Dastur boshlandi\nZeroDivisionError: division by zero",
          notes: "▶ tugmasini bosib, qizil yozuvni ko'rsating. Ta'kidlang: birinchi qator chiqdi, oxirgisi chiqmadi. 'Nima uchun?' deb so'rang."
        },
        {
          type: "text",
          title: "Eng ko'p uchraydigan xatolar",
          body: "Bu nomlarni yod bilsangiz, xatoni ko'rishingiz bilan nima bo'lganini tushunasiz:",
          points: [
            "**ValueError** — qiymat noto'g'ri: `int(\"salom\")`",
            "**ZeroDivisionError** — nolga bo'lish: `5 / 0`",
            "**IndexError** — ro'yxatda bunday indeks yo'q: `[1, 2, 3][10]`",
            "**KeyError** — lug'atda bunday kalit yo'q: `{\"a\": 1}[\"b\"]`",
            "**TypeError** — tur mos emas: `\"yosh: \" + 15`",
            "**NameError** — o'zgaruvchi e'lon qilinmagan: `print(ism)` (ism yo'q bo'lsa)"
          ],
          notes: "Har bir misol uchun sinfdan so'rang: 'Bu qaysi xato beradi?' — keyin javobni oching. TypeError va ValueError'ni ko'pchilik adashtiradi: TypeError — tur noto'g'ri, ValueError — tur to'g'ri, qiymat noto'g'ri."
        },
        {
          type: "code",
          title: "Traceback'ni o'qishni o'rganamiz",
          code: `def oxirgi_baho(baholar):
    return baholar[5]

mening_baholarim = [5, 4, 3]
print(oxirgi_baho(mening_baholarim))`,
          explain: [
            "To'liq xabar **Traceback** deyiladi — bu xato 'izi'. Uni **pastdan yuqoriga** o'qiymiz.",
            "Eng pastki qator: xato turi va izohi — `IndexError: list index out of range`.",
            "Undan yuqorida: `line 2, in oxirgi_baho` — xato aynan shu funksiyaning 2-qatorida.",
            "Eng yuqorida: `line 5` — funksiya qayerdan chaqirilgani.",
            "Ro'yxatda 3 ta element (indeks 0, 1, 2), biz esa 5-indeksni so'radik."
          ],
          output: "IndexError: list index out of range",
          notes: "Kodni ishga tushirib, to'liq traceback'ni ekranda ko'rsating va qatorlarni barmoq bilan ko'rsatib o'qing. Qoida: 'Avval oxirgi qatorni o'qi, keyin qator raqamini top'."
        },
        {
          type: "code",
          title: "try/except — birinchi himoya",
          code: `matn = "salom"
try:
    son = int(matn)
    print("Son:", son)
except ValueError:
    print("Xato: bu son emas!")

print("Dastur davom etmoqda")`,
          explain: [
            "`try:` blokiga xato chiqishi **mumkin** bo'lgan kodni yozamiz.",
            "Xato chiqsa, Python `try` ichidagi qolgan qatorlarni tashlab, darhol `except` blokiga o'tadi.",
            "`except ValueError:` — faqat ValueError'ni ushlaydi.",
            "Eng muhimi: dastur **qulamadi**, oxirgi `print` ham ishladi!"
          ],
          output: "Xato: bu son emas!\nDastur davom etmoqda",
          notes: "Keyin `matn = \"25\"` qilib qayta ishga tushiring — endi except ishlamaydi. Sinf bilan birga ikkala holatni solishtiring."
        },
        {
          type: "quiz",
          question: "Bu kod nima chiqaradi?",
          code: `try:
    print("A")
    x = int("12a")
    print("B")
except ValueError:
    print("C")
print("D")`,
          options: ["A B D", "A C D", "A B C D", "C D"],
          answer: 1,
          explain: "\"A\" chiqadi, keyin `int(\"12a\")` xato beradi — \"B\" tashlab ketiladi, except ichidagi \"C\" chiqadi, so'ng \"D\".",
          notes: "Javobni ochishdan oldin har bir qatorni sinf bilan 'qadam-baqadam' bajaring. Ko'pchilik B ham chiqadi deb o'ylaydi."
        },
        {
          type: "code",
          title: "Bir nechta except",
          code: `def bol(a, b):
    try:
        return int(a) / int(b)
    except ValueError:
        return "Faqat son kiriting"
    except ZeroDivisionError:
        return "0 ga bo'lib bo'lmaydi"

print(bol("10", "4"))
print(bol("10", "abc"))
print(bol("10", "0"))`,
          explain: [
            "Bitta `try` ga bir nechta `except` yozish mumkin — har bir xato turiga o'z javobi.",
            "Python except'larni **yuqoridan pastga** tekshiradi va birinchi mos keladiganini bajaradi.",
            "`\"abc\"` → ValueError, `\"0\"` → ZeroDivisionError.",
            "Funksiya ichida try/except — juda keng tarqalgan usul."
          ],
          output: "2.5\nFaqat son kiriting\n0 ga bo'lib bo'lmaydi",
          notes: "Sinfdan so'rang: 'bol(\"abc\", \"0\") nima qaytaradi?' (ValueError birinchi chiqadi — int(a) birinchi bajariladi)."
        },
        {
          type: "compare",
          title: "Xato: hamma narsani ushlash",
          left: {
            label: "❌ Yalang'och except",
            code: `try:
    son = int(input("Son: "))
    natija = 100 / son
    print(natijaa)
except:
    print("Son noto'g'ri!")`
          },
          right: {
            label: "✅ Aniq xato turlari",
            code: `try:
    son = int(input("Son: "))
    natija = 100 / son
    print(natija)
except ValueError:
    print("Son noto'g'ri!")
except ZeroDivisionError:
    print("0 kiritmang!")`
          },
          good: "right",
          notes: "Chap tomonda `natijaa` deb xato yozilgan (NameError), lekin `except:` uni ham yutib yuboradi va 'Son noto'g'ri!' deydi — bu yolg'on xabar. Aniq except — dasturchining o'z xatolarini yashirmaydi."
        },
        {
          type: "code",
          title: "except ... as e — xato matnini olish",
          code: `lugat = {"ali": 5, "vali": 4}
royxat = [10, 20, 30]

try:
    print(lugat["sardor"])
except KeyError as e:
    print("Kalit topilmadi:", e)

try:
    print(royxat[10])
except IndexError as e:
    print("Xato matni:", e)`,
          explain: [
            "`as e` — xato obyektini `e` o'zgaruvchisiga saqlaydi.",
            "`print(e)` xato izohini chiqaradi: KeyError uchun — kalitning o'zi.",
            "Bu foydalanuvchiga yoki o'zimizga **aniq** ma'lumot berish uchun qulay.",
            "`e` o'rniga istalgan nom yozish mumkin, lekin `e` — odatiy nom."
          ],
          output: "Kalit topilmadi: 'sardor'\nXato matni: list index out of range",
          notes: "Qo'shimcha: `type(e).__name__` xato turining nomini beradi — qiziquvchilarga ko'rsatish mumkin."
        },
        {
          type: "code",
          title: "else va finally",
          code: `def tekshir(matn):
    try:
        son = int(matn)
    except ValueError:
        print(matn, "-> son emas")
    else:
        print(matn, "-> son, kvadrati", son * son)
    finally:
        print("Tekshiruv tugadi")

tekshir("7")
tekshir("yetti")`,
          explain: [
            "`else` — faqat xato **chiqmaganda** bajariladi.",
            "`finally` — **har doim** bajariladi: xato bo'lsa ham, bo'lmasa ham.",
            "`finally` odatda 'tozalash' uchun: faylni yopish, xabar berish.",
            "Tartib: try → (except yoki else) → finally."
          ],
          output: "7 -> son, kvadrati 49\nTekshiruv tugadi\nyetti -> son emas\nTekshiruv tugadi",
          notes: "Doskaga sxema chizing: try → xato bo'ldimi? Ha → except, Yo'q → else; ikkalasidan keyin → finally."
        },
        {
          type: "quiz",
          question: "Qaysi blok xato bo'lsa ham, bo'lmasa ham DOIMO bajariladi?",
          options: ["else", "except", "finally", "try"],
          answer: 2,
          explain: "`finally` har doim ishlaydi. `else` faqat xato bo'lmaganda, `except` faqat xato bo'lganda.",
          notes: "Tez savol — 30 soniya. Keyin so'rang: 'try ham har doim ishlaydimi?' (boshlanadi, lekin oxirigacha emas bo'lishi mumkin)."
        },
        {
          type: "code",
          title: "Xavfsiz son kiritish (sikl bilan)",
          code: `def son_ol(kiritmalar):
    for matn in kiritmalar:
        try:
            return int(matn)
        except ValueError:
            print(f"'{matn}' — son emas, qaytadan kiriting!")
    return 0

# input() o'rniga foydalanuvchi kiritganlarini taqlid qilamiz
yosh = son_ol(["o'n besh", "", "15"])
print("Keyingi yil", yosh + 1, "yoshda bo'lasiz")`,
          explain: [
            "Foydalanuvchi to'g'ri son kiritmaguncha qayta-qayta so'raymiz.",
            "`return` ishlashi bilan funksiya tugaydi — sikl ham to'xtaydi.",
            "Haqiqiy dasturda ro'yxat o'rniga `while True:` va `input()` ishlatiladi (keyingi mashqda).",
            "Bo'sh satr `\"\"` ham ValueError beradi."
          ],
          output: "'o'n besh' — son emas, qaytadan kiriting!\n'' — son emas, qaytadan kiriting!\nKeyingi yil 16 yoshda bo'lasiz",
          notes: "Haqiqiy versiyani doskada yozing: `while True: matn = input(savol); try: return int(matn) except ValueError: print(...)`. Bu funksiyani o'quvchilar keyingi barcha loyihalarda ishlatadi."
        },
        {
          type: "code",
          title: "raise — o'zimiz xato chiqaramiz",
          code: `def yosh_tekshir(yosh):
    if yosh < 0 or yosh > 120:
        raise ValueError("Yosh 0 va 120 orasida bo'lishi kerak")
    return yosh

for y in [14, -3, 150]:
    try:
        print("Qabul qilindi:", yosh_tekshir(y))
    except ValueError as e:
        print("Xato:", e)`,
          explain: [
            "`raise` — xatoni **o'zimiz** chiqaramiz, agar qiymat mantiqan noto'g'ri bo'lsa.",
            "-3 Python uchun to'g'ri son, lekin yosh sifatida ma'nosiz — shuning uchun raise.",
            "Chiqarilgan xatoni oddiy xato kabi `try/except` bilan ushlaymiz.",
            "Matnni qavs ichida beramiz — u `e` orqali o'qiladi."
          ],
          output: "Qabul qilindi: 14\nXato: Yosh 0 va 120 orasida bo'lishi kerak\nXato: Yosh 0 va 120 orasida bo'lishi kerak",
          notes: "Savol bering: 'Nega print bilan xabar chiqarmasdan raise qilamiz?' Javob: funksiya o'zi qaror qilmaydi, chaqirgan joy xatoni qanday hal qilishni tanlaydi."
        },
        {
          type: "task",
          title: "Mashq 1: Xavfsiz kalkulyator",
          task: "Foydalanuvchidan ikki son va amal (+, -, *, /) so'rang. Son o'rniga matn kiritilsa — 'Son kiriting!', nolga bo'linsa — '0 ga bo'lib bo'lmaydi!', noma'lum amal kiritilsa — raise ValueError(\"Noma'lum amal\") qilib, xabarni chiqaring.",
          starter: `def hisobla(a, b, amal):
    # bu yerda amalni bajaring, noma'lum amal bo'lsa raise qiling
    pass

try:
    a = float(input("Birinchi son: "))
    b = float(input("Ikkinchi son: "))
    amal = input("Amal (+ - * /): ")
    print("Natija:", hisobla(a, b, amal))
# except bloklarini yozing
`,
          hint: "Uchta except kerak: ValueError as e (son ham, noma'lum amal ham shu xato), ZeroDivisionError. ValueError uchun e ni chiqaring.",
          solution: `def hisobla(a, b, amal):
    if amal == "+":
        return a + b
    elif amal == "-":
        return a - b
    elif amal == "*":
        return a * b
    elif amal == "/":
        return a / b
    else:
        raise ValueError("Noma'lum amal")

try:
    a = float(input("Birinchi son: "))
    b = float(input("Ikkinchi son: "))
    amal = input("Amal (+ - * /): ")
    print("Natija:", hisobla(a, b, amal))
except ValueError as e:
    print("Xato:", e)
except ZeroDivisionError:
    print("0 ga bo'lib bo'lmaydi!")`,
          notes: "10 daqiqa bering. Tekshirish uchun 3 holatni sinab ko'rishni so'rang: 'abc', 5 / 0, va 5 % 2."
        },
        {
          type: "task",
          title: "Mashq 2: Sinf ro'yxatidan o'quvchi",
          task: "Ro'yxat: [\"Aziz\", \"Malika\", \"Jasur\", \"Dilnoza\"]. Foydalanuvchi raqam kiritadi (1 dan boshlab). Xavfsiz son_ol(savol) funksiyasini while True bilan yozing, keyin o'quvchi ismini chiqaring. Raqam ro'yxatdan tashqarida bo'lsa — IndexError'ni ushlab 'Bunday raqamli o'quvchi yo'q' deng.",
          starter: `def son_ol(savol):
    while True:
        # input + try/except
        pass

oquvchilar = ["Aziz", "Malika", "Jasur", "Dilnoza"]
raqam = son_ol("O'quvchi raqami: ")
`,
          hint: "son_ol ichida: matn = input(savol), try: return int(matn), except ValueError: print(...). Keyin oquvchilar[raqam - 1] ni try ichida oling. Eslatma: 0 kiritilsa indeks -1 bo'ladi — buni if bilan tekshiring!",
          solution: `def son_ol(savol):
    while True:
        matn = input(savol)
        try:
            return int(matn)
        except ValueError:
            print("Iltimos, butun son kiriting!")

oquvchilar = ["Aziz", "Malika", "Jasur", "Dilnoza"]
raqam = son_ol("O'quvchi raqami: ")
try:
    if raqam < 1:
        raise IndexError
    print("Tanlangan o'quvchi:", oquvchilar[raqam - 1])
except IndexError:
    print("Bunday raqamli o'quvchi yo'q")`,
          notes: "Qiyin nuqta: manfiy indeks Python'da xato bermaydi (-1 — oxirgi element). Buni topgan o'quvchini maqtang."
        },
        {
          type: "summary",
          title: "Xulosa",
          points: [
            "SyntaxError — kod umuman ishlamaydi; runtime xato — ishlash davomida chiqadi.",
            "Traceback'ni pastdan yuqoriga o'qiymiz: xato turi → qator raqami.",
            "`try/except XatoTuri:` — xatoni ushlab, dasturni davom ettiradi.",
            "Har doim **aniq** xato turini yozing, yalang'och `except:` dan qoching.",
            "`as e` — xato matni; `else` — xato bo'lmasa; `finally` — har doim.",
            "`raise ValueError(\"...\")` — o'z tekshiruvimiz uchun xato chiqarish."
          ],
          notes: "Uyga vazifani tushuntiring. Keyingi dars — fayllar: u yerda FileNotFoundError'ni ushlashga to'g'ri keladi, bugungi bilim kerak bo'ladi."
        }
      ],
      homework: [
        { level: "oson", task: "6 ta xato turining (ValueError, ZeroDivisionError, IndexError, KeyError, TypeError, NameError) har biriga xato beradigan bittadan kod yozing va har birini try/except bilan ushlab, xato matnini `as e` orqali chiqaring." },
        { level: "o'rta", task: "son_ol(savol, kichik, katta) funksiyasini yozing: foydalanuvchi butun son kiritmaguncha va son [kichik, katta] oralig'ida bo'lmaguncha qayta so'rasin. U bilan baho (1-5) va yosh (7-18) so'rang." },
        { level: "qiyin", task: "'Sonni top' o'yini: kompyuter sonni o'ylaydi (masalan, 37), foydalanuvchi taxmin qiladi. Matn kiritilsa o'yin qulamasin va urinish sanalmasin. Oxirida urinishlar sonini chiqaring. Qo'shimcha: 1-100 dan tashqari son kiritilsa raise ValueError qiling va uni ushlang." }
      ]
    },

    // ===================== DARS 2 =====================
    {
      id: "m7-l2",
      title: "Fayllar bilan ishlash",
      duration: 90,
      goals: [
        "Fayllar nima uchun kerakligini tushunish",
        "open() rejimlari: r, w, a",
        "with operatori bilan faylni xavfsiz ochish",
        "write, writelines, read, readline, for qator in fayl",
        "encoding=\"utf-8\" va strip() ning ahamiyati",
        "FileNotFoundError'ni ushlash, ro'yxatni faylga saqlab qayta o'qish"
      ],
      keywords: ["open", "with", "r", "w", "a", "write", "read", "readline", "strip", "utf-8", "FileNotFoundError"],
      plan: [
        { time: 10, label: "Takrorlash: try/except, raise" },
        { time: 10, label: "Nega fayllar kerak? Rejimlar va with" },
        { time: 25, label: "Yozish, qo'shish, o'qish usullari, strip va encoding" },
        { time: 15, label: "FileNotFoundError va ro'yxatni saqlash" },
        { time: 25, label: "Amaliy mashqlar" },
        { time: 5, label: "Xulosa va uyga vazifa" }
      ],
      slides: [
        {
          type: "title",
          title: "Fayllar bilan ishlash",
          subtitle: "Dastur yopilsa ham ma'lumot yo'qolmasin",
          emoji: "📁",
          notes: "Boshlang: 'Kecha yozgan o'yiningizda rekord 120 ochko edi. Dasturni qayta ochsangiz rekord qayerda?' — yo'qolgan. Bugun buni hal qilamiz."
        },
        {
          type: "text",
          title: "Nega fayllar kerak?",
          body: "Hozirgacha barcha ma'lumotlar o'zgaruvchilarda — ya'ni **operativ xotirada (RAM)** saqlanardi. Dastur tugashi bilan ular o'chib ketadi.",
          points: [
            "**Fayl** — diskda saqlanadigan ma'lumot, dastur yopilgandan keyin ham qoladi.",
            "Misollar: o'yin rekordlari, kundalik yozuvlari, kontaktlar, sozlamalar.",
            "Ish tartibi har doim bir xil: **ochish → o'qish/yozish → yopish**.",
            "Bizning platformada fayllar brauzerning **virtual xotirasida** yaratiladi — shuning uchun misollarda avval yozamiz, keyin o'sha kodda o'qiymiz."
          ],
          notes: "Platforma haqidagi eslatmani albatta ayting: sahifa yangilansa virtual fayllar o'chadi. Kompyuterdagi haqiqiy Python'da esa fayl papkada paydo bo'ladi."
        },
        {
          type: "analogy",
          title: "Doska va daftar",
          emoji: "📓",
          text: "O'qituvchi doskaga yozgan narsa — bu **o'zgaruvchi**: dars tugadi, navbatchi doskani o'chirdi — hammasi yo'q. Siz esa muhim narsani **daftaringizga** yozasiz — ertaga ham, bir oydan keyin ham o'qiysiz. Fayl — dasturning daftari. `\"w\"` — daftarning yangi sahifasiga toza yozish, `\"a\"` — oxiriga davom ettirish, `\"r\"` — faqat o'qish.",
          notes: "Sinfdan so'rang: 'Telefoningizdagi qaysi ilovalar ma'lumotni faylda saqlaydi?' (galereya, kontaktlar, o'yin progressi)."
        },
        {
          type: "text",
          title: "open() va rejimlar",
          body: "Faylni ochish: `open(nom, rejim, encoding=\"utf-8\")`",
          points: [
            "`\"r\"` — **o'qish** (read). Standart rejim. Fayl yo'q bo'lsa → FileNotFoundError.",
            "`\"w\"` — **yozish** (write). Fayl yo'q bo'lsa yaratadi, bor bo'lsa **ichini o'chirib** qaytadan yozadi!",
            "`\"a\"` — **qo'shish** (append). Eski ma'lumot saqlanadi, yangisi oxiriga qo'shiladi.",
            "`with open(...) as f:` — blok tugagach fayl **avtomatik yopiladi**, xato bo'lsa ham.",
            "`encoding=\"utf-8\"` — o'zbekcha, ruscha harflar va emoji to'g'ri saqlanishi uchun."
          ],
          notes: "\"w\" xavfli ekanini alohida ta'kidlang: bitta harf xatosi butun faylni o'chirishi mumkin. Rejimlarni doskaga jadval qilib yozing."
        },
        {
          type: "code",
          title: "Faylga yozish va o'qish",
          code: `with open("salom.txt", "w", encoding="utf-8") as f:
    f.write("Salom, fayl!\\n")
    f.write("Bu ikkinchi qator\\n")

with open("salom.txt", "r", encoding="utf-8") as f:
    matn = f.read()

print(matn)
print("Belgilar soni:", len(matn))`,
          explain: [
            "`f` — fayl obyekti, u orqali yozamiz va o'qiymiz.",
            "`write()` o'zi yangi qatorga o'tmaydi — `\\n` ni o'zimiz qo'shamiz.",
            "`read()` — butun faylni **bitta satr** sifatida qaytaradi.",
            "Satr uzunligi 31: `\\n` ham bitta belgi hisoblanadi."
          ],
          output: "Salom, fayl!\nBu ikkinchi qator\n\nBelgilar soni: 31",
          notes: "Sinfdan so'rang: 'Nega bo'sh qator chiqdi?' — fayl `\\n` bilan tugaydi, print yana bitta qo'shadi. Bu strip() mavzusiga ko'prik."
        },
        {
          type: "compare",
          title: "with — yopishni unutmaslik uchun",
          left: {
            label: "❌ Qo'lda ochib-yopish",
            code: `f = open("eslatma.txt", "w", encoding="utf-8")
f.write("Uy vazifasi: 5-mashq\\n")
# f.close() unutildi!
# Ma'lumot diskka yozilmay qolishi mumkin`
          },
          right: {
            label: "✅ with bilan",
            code: `with open("eslatma.txt", "w", encoding="utf-8") as f:
    f.write("Uy vazifasi: 5-mashq\\n")
# blokdan chiqqanda fayl o'zi yopildi`
          },
          good: "right",
          notes: "close() unutilsa, ma'lumot buferda qolib ketishi mumkin. Bundan buyon faqat with ishlatamiz — bu professional odat."
        },
        {
          type: "code",
          title: "\"w\" va \"a\" farqi",
          code: `with open("kundalik.txt", "w", encoding="utf-8") as f:
    f.write("Dushanba: matematika\\n")

with open("kundalik.txt", "a", encoding="utf-8") as f:
    f.write("Seshanba: ingliz tili\\n")

with open("kundalik.txt", encoding="utf-8") as f:
    print(f.read())

with open("kundalik.txt", "w", encoding="utf-8") as f:
    f.write("Chorshanba: informatika\\n")

with open("kundalik.txt", encoding="utf-8") as f:
    print(f.read())`,
          explain: [
            "\"a\" eski qatorni saqlab, yangisini oxiriga qo'shdi — 2 qator.",
            "Ikkinchi marta \"w\" bilan ochganimizda eski hamma narsa **o'chdi**.",
            "Rejim yozilmasa — standart \"r\" (o'qish).",
            "Kundalik, log, chat tarixi uchun odatda \"a\" ishlatiladi."
          ],
          output: "Dushanba: matematika\nSeshanba: ingliz tili\n\nChorshanba: informatika\n",
          notes: "Kodni ishga tushirishdan oldin sinfdan oxirgi natijani taxmin qilishni so'rang. Ko'pchilik 3 qator chiqadi deb o'ylaydi."
        },
        {
          type: "quiz",
          question: "\"rekord.txt\" faylida 10 ta qator bor. Uni open(\"rekord.txt\", \"w\") bilan ochib, 1 qator yozsak, faylda nechta qator bo'ladi?",
          options: ["11", "10", "1", "Xato chiqadi"],
          answer: 2,
          explain: "\"w\" rejimi faylni ochganda uning ichini butunlay tozalaydi. Faqat yangi yozilgan 1 qator qoladi.",
          notes: "Agar 11 desa — \"a\" rejimi bilan adashtiryapti. Farqni yana bir bor eslating."
        },
        {
          type: "code",
          title: "Qatorma-qator o'qish: for qator in f",
          code: `with open("mevalar.txt", "w", encoding="utf-8") as f:
    f.writelines(["olma\\n", "anor\\n", "uzum\\n"])

with open("mevalar.txt", encoding="utf-8") as f:
    raqam = 1
    for qator in f:
        print(raqam, qator.strip())
        raqam += 1`,
          explain: [
            "`writelines(ro'yxat)` — bir nechta satrni birdaniga yozadi (`\\n` ni o'zi qo'shmaydi!).",
            "`for qator in f:` — faylni qatorma-qator o'qiydi. Katta fayllar uchun eng yaxshi usul.",
            "Har bir `qator` oxirida `\\n` bor — `strip()` uni olib tashlaydi.",
            "`strip()` boshidagi va oxiridagi bo'sh joylarni ham tozalaydi."
          ],
          output: "1 olma\n2 anor\n3 uzum",
          notes: "Eslating: strip() — 4-modulda satrlar mavzusida o'rgangan metodimiz. Endi u fayllarda juda kerak bo'ladi."
        },
        {
          type: "compare",
          title: "strip() unutilsa",
          left: {
            label: "❌ strip() siz",
            code: `with open("ism.txt", "w", encoding="utf-8") as f:
    f.write("Aziz\\nMalika\\n")
with open("ism.txt", encoding="utf-8") as f:
    for qator in f:
        print("Salom,", qator, "!")
# Salom, Aziz
#  !
# ...`
          },
          right: {
            label: "✅ strip() bilan",
            code: `with open("ism.txt", "w", encoding="utf-8") as f:
    f.write("Aziz\\nMalika\\n")
with open("ism.txt", encoding="utf-8") as f:
    for qator in f:
        print("Salom,", qator.strip(), "!")
# Salom, Aziz !
# Salom, Malika !`
          },
          good: "right",
          notes: "Chap kodni ishga tushirib ko'rsating — '!' keyingi qatorga tushib qoladi. Bundan tashqari, `\"Aziz\\n\" == \"Aziz\"` — False! Qidiruvda ham strip kerak."
        },
        {
          type: "code",
          title: "readline() va readlines()",
          code: `with open("sinf.txt", "w", encoding="utf-8") as f:
    f.write("7-B sinf\\nAziz\\nMalika\\nJasur\\n")

with open("sinf.txt", encoding="utf-8") as f:
    sarlavha = f.readline()
    qolganlari = f.readlines()

print("Sarlavha:", sarlavha.strip())
print(qolganlari)
print("O'quvchilar soni:", len(qolganlari))`,
          explain: [
            "`readline()` — faqat **bitta** (navbatdagi) qatorni o'qiydi.",
            "`readlines()` — qolgan barcha qatorlarni **ro'yxat** qilib qaytaradi.",
            "Fayl 'kursor' bilan o'qiladi: readline'dan keyin readlines 2-qatordan boshlaydi.",
            "Ro'yxat elementlarida `\\n` qolgan — kerak bo'lsa strip qilamiz."
          ],
          output: "Sarlavha: 7-B sinf\n['Aziz\\n', 'Malika\\n', 'Jasur\\n']\nO'quvchilar soni: 3",
          notes: "Kursorni kitob o'qishdagi xatcho'p bilan solishtiring: qayerda to'xtasangiz, keyingi safar o'sha yerdan davom etasiz."
        },
        {
          type: "text",
          title: "encoding=\"utf-8\" nega kerak?",
          body: "Kompyuter harflarni sonlar ko'rinishida saqlaydi. Qaysi harf qaysi songa mos kelishini **kodirovka** belgilaydi.",
          points: [
            "**UTF-8** — dunyodagi deyarli barcha harflar va emoji'larni qo'llaydi.",
            "Windows'da standart kodirovka boshqa bo'lishi mumkin — natijada `Тошкент` yoki `😊` o'rniga g'alati belgilar chiqadi yoki UnicodeError bo'ladi.",
            "Qoida: matnli fayl ochganda **har doim** `encoding=\"utf-8\"` yozing.",
            "Yozishda ham, o'qishda ham bir xil kodirovka bo'lishi shart."
          ],
          notes: "Agar imkon bo'lsa, haqiqiy kompyuterda kodirovkasiz ruscha matn yozib, Notepad'da ochib ko'rsating. Qisqa — 3 daqiqa."
        },
        {
          type: "code",
          title: "Fayl topilmasa: FileNotFoundError",
          code: `def fayl_oqi(nom):
    try:
        with open(nom, encoding="utf-8") as f:
            return f.read()
    except FileNotFoundError:
        print(f"'{nom}' topilmadi, bo'sh matn qaytaramiz")
        return ""

with open("bor.txt", "w", encoding="utf-8") as f:
    f.write("Men borman!")

print(fayl_oqi("bor.txt"))
print(repr(fayl_oqi("yoq.txt")))`,
          explain: [
            "\"r\" rejimida mavjud bo'lmagan fayl ochilsa — **FileNotFoundError**.",
            "Dastur birinchi marta ishga tushganda fayl hali yo'q — bu odatiy holat!",
            "Shuning uchun o'qish doim `try/except FileNotFoundError` ichida bo'lishi kerak.",
            "`repr()` bo'sh satrni `''` ko'rinishida ko'rsatadi."
          ],
          output: "Men borman!\n'yoq.txt' topilmadi, bo'sh matn qaytaramiz\n''",
          notes: "O'tgan dars bilan bog'lang: mana try/except'ning haqiqiy hayotdagi qo'llanilishi. Sinfdan so'rang: 'Nega \"w\" rejimida bu xato chiqmaydi?'"
        },
        {
          type: "code",
          title: "Baholar ro'yxatini saqlash va qayta o'qish",
          code: `baholar = [5, 4, 5, 3, 4]

with open("baholar.txt", "w", encoding="utf-8") as f:
    for b in baholar:
        f.write(str(b) + "\\n")

oqilgan = []
with open("baholar.txt", encoding="utf-8") as f:
    for qator in f:
        oqilgan.append(int(qator))

print(oqilgan)
print("O'rtacha:", sum(oqilgan) / len(oqilgan))`,
          explain: [
            "Faylga faqat **matn** yoziladi — shuning uchun `str(b)`.",
            "Fayldan o'qilgan har narsa ham **matn** — hisoblash uchun `int()` ga aylantiramiz.",
            "`int(\"5\\n\")` ishlaydi: int() chetdagi bo'sh joy va `\\n` ni o'zi tashlaydi.",
            "Natija: ro'yxat → fayl → yana ro'yxat. Dastur yopilsa ham baholar saqlanadi!"
          ],
          output: "[5, 4, 5, 3, 4]\nO'rtacha: 4.2",
          notes: "Asosiy g'oya: 'Faylda hamma narsa matn'. Sinfdan so'rang: 'f.write(5) yozsak nima bo'ladi?' (TypeError: write() argument must be str)."
        },
        {
          type: "quiz",
          question: "Fayldan o'qilgan qator \"15\\n\". Uni 1 ga oshirish uchun qaysi kod to'g'ri?",
          options: ["qator + 1", "int(qator) + 1", "str(qator) + 1", "qator.strip() + 1"],
          answer: 1,
          explain: "Fayldan o'qilgan qator — str. Unga son qo'shib bo'lmaydi (TypeError). int() satrni songa aylantiradi va `\\n` ni o'zi e'tiborsiz qoldiradi.",
          notes: "4-variant ko'pchilikni chalg'itadi: strip() ham str qaytaradi, son emas."
        },
        {
          type: "task",
          title: "Mashq 1: Do'stlar ro'yxati",
          task: "Foydalanuvchidan 3 ta do'stining ismini so'rab, 'dostlar.txt' fayliga har birini alohida qatorga yozing. So'ng faylni o'qib, raqamlangan ro'yxat chiqaring: '1. Aziz' ko'rinishida.",
          starter: `with open("dostlar.txt", "w", encoding="utf-8") as f:
    for i in range(3):
        ism = input("Do'stingiz ismi: ")
        # faylga yozing

# faylni o'qib, raqamlab chiqaring
`,
          hint: "Yozishda f.write(ism + \"\\n\"). O'qishda raqam = 1 o'zgaruvchisi va for qator in f: print(f\"{raqam}. {qator.strip()}\").",
          solution: `with open("dostlar.txt", "w", encoding="utf-8") as f:
    for i in range(3):
        ism = input("Do'stingiz ismi: ")
        f.write(ism + "\\n")

with open("dostlar.txt", encoding="utf-8") as f:
    raqam = 1
    for qator in f:
        print(f"{raqam}. {qator.strip()}")
        raqam += 1`,
          notes: "Tez tugatganlarga: bo'sh ism kiritilsa faylga yozmaslik shartini qo'shishni so'rang."
        },
        {
          type: "task",
          title: "Mashq 2: Vazifalar ro'yxati (To-Do)",
          task: "Ikki funksiya yozing: qosh(ish) — 'vazifalar.txt' oxiriga yangi vazifani qo'shadi (\"a\" rejimi); korsat() — barcha vazifalarni raqamlab chiqaradi, fayl yo'q bo'lsa 'Vazifalar yo'q' deydi. Avval korsat(), keyin 3 ta vazifa qo'shib, yana korsat() chaqiring.",
          starter: `def qosh(ish):
    pass

def korsat():
    pass

korsat()
qosh("Matematika uy vazifasi")
qosh("Kitob o'qish - 20 bet")
qosh("Futbol mashg'uloti")
korsat()`,
          hint: "korsat() ichida try: with open(...) as f: ... except FileNotFoundError: print(\"Vazifalar yo'q\").",
          solution: `def qosh(ish):
    with open("vazifalar.txt", "a", encoding="utf-8") as f:
        f.write(ish + "\\n")

def korsat():
    try:
        with open("vazifalar.txt", encoding="utf-8") as f:
            raqam = 1
            for qator in f:
                print(f"{raqam}. {qator.strip()}")
                raqam += 1
    except FileNotFoundError:
        print("Vazifalar yo'q")

korsat()
qosh("Matematika uy vazifasi")
qosh("Kitob o'qish - 20 bet")
qosh("Futbol mashg'uloti")
korsat()`,
          notes: "Kodni ikki marta ishga tushirsa, vazifalar ikki barobar bo'lishini ko'rsating — 'a' rejimining xususiyati. Bu keyingi uy vazifasiga g'oya."
        },
        {
          type: "summary",
          title: "Xulosa",
          points: [
            "Fayl — dastur yopilgandan keyin ham saqlanadigan ma'lumot.",
            "Rejimlar: `\"r\"` o'qish, `\"w\"` qaytadan yozish (eskisi o'chadi!), `\"a\"` oxiriga qo'shish.",
            "Har doim `with open(..., encoding=\"utf-8\") as f:` — fayl o'zi yopiladi.",
            "`write()` faqat matn yozadi va `\\n` ni o'zi qo'shmaydi.",
            "`read()` — hammasi, `readline()` — bitta qator, `for qator in f` — qatorma-qator.",
            "Qatorlarni `strip()` qiling, sonlarni `int()` bilan qaytaring.",
            "O'qishni `try/except FileNotFoundError` bilan himoyalang."
          ],
          notes: "Keyingi dars — modullar: tasodifiy sonlar, matematika va sanalar. O'quvchilarga 'Keyingi darsda o'z zar o'yinimizni yozamiz' deb qiziqtiring."
        }
      ],
      homework: [
        { level: "oson", task: "'men_haqimda.txt' fayliga ismingiz, yoshingiz, sevimli fan va sevimli taomingizni alohida qatorlarga yozing. Keyin faylni o'qib, har bir qatorni '-> ' belgisi bilan chiqaring." },
        { level: "o'rta", task: "Rekordlar tizimi: 'rekord.txt' da eng yaxshi natija saqlansin. Foydalanuvchi yangi natija kiritadi; u rekorddan katta bo'lsa, faylga yozing va 'Yangi rekord!' deng. Fayl yo'q bo'lsa rekord 0 deb hisoblang (FileNotFoundError)." },
        { level: "qiyin", task: "'baholar.txt' faylida har qatorda 'Ism,baho' (masalan 'Aziz,5') yozilgan bo'lsin (avval kod bilan 6 qator yarating). Faylni o'qib: har bir o'quvchining o'rtacha bahosini lug'atda hisoblang, eng yaxshi o'quvchini toping va natijani 'hisobot.txt' ga yozing. Noto'g'ri qatorlarni (masalan 'Jasur,besh') try/except bilan o'tkazib yuboring." }
      ]
    },

    // ===================== DARS 3 =====================
    {
      id: "m7-l3",
      title: "Modullar: random, math, datetime",
      duration: 90,
      goals: [
        "Modul va standart kutubxona tushunchasi",
        "import, from ... import, as taxallus",
        "math: sqrt, pi, ceil, floor",
        "random: randint, choice, shuffle, sample, seed",
        "datetime: sana yaratish, ayirish, yoshni hisoblash",
        "O'z modulini yaratish, __name__ == \"__main__\", pip haqida tushuncha"
      ],
      keywords: ["import", "from", "as", "math", "random", "datetime", "modul", "pip", "__name__"],
      plan: [
        { time: 10, label: "Takrorlash: fayllar, rejimlar" },
        { time: 10, label: "Modul nima? import usullari" },
        { time: 30, label: "math, random, datetime amaliy misollarda" },
        { time: 10, label: "O'z modulimiz, __main__, pip va kutubxonalar" },
        { time: 25, label: "Amaliy mashqlar" },
        { time: 5, label: "Xulosa va uyga vazifa" }
      ],
      slides: [
        {
          type: "title",
          title: "Modullar: random, math, datetime",
          subtitle: "Boshqalar yozgan tayyor kodlardan foydalanamiz",
          emoji: "🧰",
          notes: "Savol bilan boshlang: 'Ildiz chiqarish funksiyasini o'zingiz yozishingiz kerak bo'lsa, qancha vaqt ketadi?' Bugun Python'ning tayyor 'asboblar qutisi'ni ochamiz."
        },
        {
          type: "text",
          title: "Modul nima?",
          body: "**Modul** — funksiyalar va o'zgaruvchilar yozilgan alohida `.py` fayl. Uni `import` qilib, ichidagi tayyor kodlardan foydalanamiz.",
          points: [
            "Python bilan birga 200 dan ortiq modul keladi — bu **standart kutubxona**.",
            "`math` — matematik funksiyalar (ildiz, pi, yaxlitlash).",
            "`random` — tasodifiy sonlar va tanlovlar (o'yinlar uchun!).",
            "`datetime` — sana va vaqt bilan ishlash.",
            "`json` — keyingi darsda: ma'lumotlarni saqlash."
          ],
          notes: "Ta'kidlang: o'tgan darsdagi FileNotFoundError, int(), print() — ular 'ichki' (built-in), import kerak emas. Modullar esa import talab qiladi."
        },
        {
          type: "analogy",
          title: "Non yopish uchun bug'doy ekmaysiz",
          emoji: "🍞",
          text: "Oyingiz somsa pishirmoqchi. U dalaga borib bug'doy ekib, o'rib, tegirmonda un tortmaydi — do'kondan **tayyor un** sotib oladi. Dasturchilar ham shunday: `math.sqrt()` ni noldan yozmaymiz, **tayyor modulni** olib ishlatamiz. `import` — bu do'kondan kerakli mahsulotni olib kelish. Vaqt tejaladi, sifat esa yuqori — chunki bu kodlarni minglab dasturchilar sinab chiqqan.",
          notes: "O'quvchilardan boshqa misol so'rang: 'Telefon ilovasi yaratuvchilari kamerani noldan yasaydimi?'"
        },
        {
          type: "code",
          title: "math moduli",
          code: `import math

print(math.sqrt(49))
print(math.pi)
print(math.ceil(4.1))
print(math.floor(4.9))
print(round(math.pi, 2))

radius = 5
yuza = math.pi * radius ** 2
print("Aylana yuzi:", round(yuza, 1))`,
          explain: [
            "`import math` — modulni ulaymiz, so'ng `math.nom` ko'rinishida ishlatamiz.",
            "`sqrt` — kvadrat ildiz (doim float qaytaradi: 7.0).",
            "`ceil` — **yuqoriga** yaxlitlash (shift), `floor` — **pastga** (pol).",
            "`math.pi` — funksiya emas, o'zgaruvchi (qavssiz yoziladi)."
          ],
          output: "7.0\n3.141592653589793\n5\n4\n3.14\nAylana yuzi: 78.5",
          notes: "Hayotiy misol bering: 23 o'quvchi, avtobusda 10 o'rin. Nechta avtobus kerak? math.ceil(23 / 10) = 3. floor emas!"
        },
        {
          type: "text",
          title: "Import qilishning 3 usuli",
          body: "Bitta modulni turli usulda ulash mumkin:",
          points: [
            "`import math` → `math.sqrt(16)` — eng aniq usul, nom qayerdan kelgani ko'rinib turadi.",
            "`from math import sqrt, pi` → `sqrt(16)` — faqat keraklilarini olamiz, prefikssiz yozamiz.",
            "`import datetime as dt` → `dt.date(...)` — **taxallus** (qisqa nom).",
            "`from math import *` — hammasini olish. **Tavsiya etilmaydi**: nomlar aralashib ketadi.",
            "Import'lar odatda faylning **eng boshida** yoziladi."
          ],
          notes: "Doskada uch usulni yonma-yon yozing. Sinfdan so'rang: 'Agar o'zingizda ham sqrt nomli funksiya bo'lsa, qaysi usul xavfli?'"
        },
        {
          type: "compare",
          title: "Ko'p uchraydigan xato",
          left: {
            label: "❌ Import unutilgan",
            code: `print(math.sqrt(16))
# NameError: name 'math' is not defined`
          },
          right: {
            label: "✅ Avval import",
            code: `import math
print(math.sqrt(16))
# 4.0`
          },
          good: "right",
          notes: "Yana bir xato: `from math import sqrt` qilib, keyin `math.sqrt` yozish — bu ham NameError. Ikkalasini aralashtirmaslikni ayting."
        },
        {
          type: "code",
          title: "from ... import va as",
          code: `from math import sqrt, floor
import math as m

print(sqrt(81))
print(floor(9.99))
print(m.ceil(9.01))

# Pifagor: katetlar 3 va 4
gipotenuza = sqrt(3 ** 2 + 4 ** 2)
print("Gipotenuza:", gipotenuza)`,
          explain: [
            "`from math import sqrt, floor` — endi `sqrt()` to'g'ridan-to'g'ri ishlaydi.",
            "`import math as m` — `math` o'rniga qisqa `m` deymiz.",
            "Mashhur taxalluslar: `import numpy as np`, `import pandas as pd`.",
            "Bir dasturda bir nechta usulni birga ishlatish mumkin."
          ],
          output: "9.0\n9\n10\nGipotenuza: 5.0",
          notes: "Pifagor teoremasini o'quvchilar geometriyadan biladi — fanlararo bog'lanishni ta'kidlang."
        },
        {
          type: "code",
          title: "random moduli",
          code: `import random

random.seed(42)  # har doim bir xil natija uchun

print(random.randint(1, 6))
mevalar = ["olma", "anor", "uzum", "behi"]
print(random.choice(mevalar))
random.shuffle(mevalar)
print(mevalar)
print(random.sample(range(1, 50), 3))`,
          explain: [
            "`randint(a, b)` — a dan b gacha butun son, **b ham kiradi** (zar: 1-6).",
            "`choice(royxat)` — ro'yxatdan bitta tasodifiy element.",
            "`shuffle(royxat)` — ro'yxatni **joyida** aralashtiradi, hech narsa qaytarmaydi.",
            "`sample(toplam, k)` — k ta **takrorlanmas** element (lotereya!).",
            "`seed(42)` — 'tasodif'ni qayta takrorlanadigan qiladi. Uni olib tashlasangiz, natija har safar boshqacha."
          ],
          output: "6\nolma\n['behi', 'anor', 'uzum', 'olma']\n[16, 15, 9]",
          notes: "Avval seed bilan ishga tushiring, so'ng seed qatorini o'chirib 2-3 marta bosing — natija o'zgarishini ko'rsating. Xato: `mevalar = random.shuffle(mevalar)` — natija None bo'ladi!"
        },
        {
          type: "quiz",
          question: "random.randint(1, 3) qaysi qiymatni HECH QACHON qaytarmaydi?",
          options: ["1", "2", "3", "4"],
          answer: 3,
          explain: "randint ikkala chegarani ham o'z ichiga oladi: 1, 2 yoki 3. 4 esa oraliqdan tashqarida. Diqqat: range(1, 3) da esa 3 kirmaydi — bu ikkisini adashtirmang!",
          notes: "range va randint farqini doskaga yozing: range(1, 3) → 1, 2; randint(1, 3) → 1, 2, 3."
        },
        {
          type: "code",
          title: "datetime: sanalar va yosh hisoblash",
          code: `import datetime

bugun = datetime.date(2026, 11, 5)
tugilgan = datetime.date(2011, 3, 21)

farq = bugun - tugilgan
print("Yashagan kunlar:", farq.days)

yosh = bugun.year - tugilgan.year
if (bugun.month, bugun.day) < (tugilgan.month, tugilgan.day):
    yosh -= 1
print("Yosh:", yosh)
print("Sana:", bugun.strftime("%d.%m.%Y"))`,
          explain: [
            "`datetime.date(yil, oy, kun)` — aniq sana yaratadi.",
            "Ikki sanani ayirsak — **timedelta** chiqadi, `.days` — kunlar soni.",
            "Yosh = yillar farqi, lekin tug'ilgan kun hali kelmagan bo'lsa −1.",
            "Kortejlarni solishtirish: avval oy, teng bo'lsa kun solishtiriladi.",
            "`strftime(\"%d.%m.%Y\")` — sanani chiroyli formatda chiqarish."
          ],
          output: "Yashagan kunlar: 5708\nYosh: 15\nSana: 05.11.2026",
          notes: "Har bir o'quvchi o'z tug'ilgan sanasini qo'yib ko'rsin — 'Siz necha kun yashagansiz?' — bu juda qiziqarli bo'ladi."
        },
        {
          type: "code",
          title: "Bugungi sana: date.today()",
          code: `import datetime

bugun = datetime.date.today()
print("Bugun:", bugun)
print("Yil:", bugun.year, "Oy:", bugun.month, "Kun:", bugun.day)

hafta_kunlari = ["Dushanba", "Seshanba", "Chorshanba",
                 "Payshanba", "Juma", "Shanba", "Yakshanba"]
print("Hafta kuni:", hafta_kunlari[bugun.weekday()])

ertaga = bugun + datetime.timedelta(days=1)
print("Ertaga:", ertaga)`,
          explain: [
            "`date.today()` — kompyuter soatidan bugungi sanani oladi — natija har kuni boshqacha.",
            "`.year`, `.month`, `.day` — sananing qismlari.",
            "`.weekday()` — 0 (dushanba) dan 6 (yakshanba) gacha son — uni o'zbekcha ro'yxatdan indeks qilib ishlatamiz.",
            "`timedelta(days=1)` — sanaga kun qo'shish yoki ayirish."
          ],
          output: "Bugun: 2026-11-05\nYil: 2026 Oy: 11 Kun: 5\nHafta kuni: Payshanba\nErtaga: 2026-11-06\n(namuna — natija ishga tushirilgan kunga bog'liq)",
          notes: "Natija bugungi sanaga bog'liq — slayddagi output faqat namuna. Sinfdan so'rang: '100 kundan keyin qaysi sana?' — timedelta(days=100)."
        },
        {
          type: "quiz",
          question: "Bu kod nima chiqaradi?",
          code: `import math
print(math.ceil(7.2), math.floor(7.8))`,
          options: ["7 8", "8 7", "7 7", "8 8"],
          answer: 1,
          explain: "ceil — har doim yuqoriga: 7.2 → 8. floor — har doim pastga: 7.8 → 7. Oddiy round() dan farqli!",
          notes: "Eslab qolish usuli: ceiling — shift (yuqorida), floor — pol (pastda)."
        },
        {
          type: "compare",
          title: "O'z modulimizni yaratamiz",
          left: {
            label: "📄 helpers.py (modul)",
            code: `def salomlash(ism):
    return f"Salom, {ism}!"

def ortacha(sonlar):
    return sum(sonlar) / len(sonlar)

MAKTAB = "42-maktab"`
          },
          right: {
            label: "📄 main.py (asosiy dastur)",
            code: `import helpers
from helpers import ortacha

print(helpers.salomlash("Aziz"))
print(ortacha([5, 4, 5]))
print(helpers.MAKTAB)
# Salom, Aziz!
# 4.666666666666667
# 42-maktab`
          },
          notes: "Bu yerda 'to'g'ri/noto'g'ri' yo'q — ikki fayl yonma-yon. Tushuntiring: ikkala fayl BIR papkada bo'lishi kerak, import'da .py yozilmaydi. Katta loyihalarni bo'laklarga bo'lish shunday qilinadi."
        },
        {
          type: "text",
          title: "if __name__ == \"__main__\":",
          body: "Modul import qilinganda uning **butun kodi** bajariladi. Agar helpers.py ichida sinov uchun `print()` lar bo'lsa, ular main.py ishga tushganda ham chiqib ketadi. Buning yechimi:",
          points: [
            "Har bir faylda maxsus `__name__` o'zgaruvchisi bor.",
            "Fayl **to'g'ridan-to'g'ri** ishga tushirilsa: `__name__ == \"__main__\"`.",
            "Fayl **import** qilinsa: `__name__ == \"helpers\"` (modul nomi).",
            "Shuning uchun sinov kodini `if __name__ == \"__main__\":` ichiga yozamiz — u faqat fayl o'zi ishga tushganda bajariladi.",
            "Hozircha shuni bilish yetarli — katta loyihalarda tez-tez uchratasiz."
          ],
          notes: "Qisqa tushuntiring (3-4 daqiqa), chuqurlashmang. Analogiya: 'Uyingizda o'zingiz ovqat pishirasiz (main), mehmonga borganda esa faqat retseptni berasiz (import)'."
        },
        {
          type: "text",
          title: "pip va mashhur kutubxonalar",
          body: "Standart kutubxonadan tashqari internetda **500 000 dan ortiq** tayyor paket bor (pypi.org). Ularni `pip` dasturi o'rnatadi: terminalda `pip install nom`.",
          points: [
            "**requests** — internetdan ma'lumot olish (ob-havo, valyuta kursi API'lari).",
            "**pygame** — 2D o'yinlar yaratish: rasm, ovoz, klaviatura.",
            "**flask** — o'z veb-saytingizni yaratish.",
            "**aiogram** — Telegram bot yozish (O'zbekistonda juda mashhur!).",
            "**numpy / pandas** — katta ma'lumotlar va hisob-kitoblar.",
            "Brauzer platformamizda pip ishlamaydi — bular kompyuterdagi Python uchun."
          ],
          notes: "Bu faqat tanishtiruv — kod yozmaymiz. Sinfdan so'rang: 'Qaysi biri bilan nima yaratmoqchi bo'lardingiz?' Motivatsiya uchun muhim slayd."
        },
        {
          type: "task",
          title: "Mashq 1: Parol generatori",
          task: "random modulidan foydalanib, parol_yarat(uzunlik) funksiyasini yozing. Parol harflar, raqamlar va belgilardan iborat bo'lsin. Foydalanuvchidan uzunlikni so'rang (son bo'lmasa yoki 4 dan kichik bo'lsa — xabar bering). Natijani chiqaring.",
          starter: `import random

harflar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
raqamlar = "0123456789"
belgilar = "!@#%&*?"

def parol_yarat(uzunlik):
    # random.choice bilan har bir belgini tanlang
    pass
`,
          hint: "Barcha belgilarni bitta satrga qo'shing: hammasi = harflar + raqamlar + belgilar. So'ng for sikl bilan uzunlik marta random.choice(hammasi) ni parolga qo'shing.",
          solution: `import random

harflar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
raqamlar = "0123456789"
belgilar = "!@#%&*?"

def parol_yarat(uzunlik):
    hammasi = harflar + raqamlar + belgilar
    parol = ""
    for i in range(uzunlik):
        parol += random.choice(hammasi)
    return parol

try:
    n = int(input("Parol uzunligi: "))
    if n < 4:
        raise ValueError("Parol kamida 4 belgi bo'lsin")
    print("Sizning parolingiz:", parol_yarat(n))
except ValueError as e:
    print("Xato:", e)`,
          notes: "Qiyinlashtirish: parolda kamida bitta raqam bo'lishini kafolatlash. Natija har safar boshqacha — buni ham ko'rsating."
        },
        {
          type: "task",
          title: "Mashq 2: Navro'zgacha necha kun?",
          task: "datetime yordamida bugun = date(2026, 11, 5) sanasidan keyingi Navro'zgacha (21-mart) necha kun qolganini hisoblang. Keyin dasturni umumiy qiling: agar bugun 21-martdan keyin bo'lsa, keyingi yilning Navro'zini oling. Yana zar tashlang: randint bilan 2 ta zar, yig'indisini chiqaring.",
          starter: `import datetime
import random

bugun = datetime.date(2026, 11, 5)
# shu yilning Navro'zi
navroz = datetime.date(bugun.year, 3, 21)
# agar o'tib ketgan bo'lsa...
`,
          hint: "if navroz < bugun: navroz = datetime.date(bugun.year + 1, 3, 21). Kunlar: (navroz - bugun).days.",
          solution: `import datetime
import random

bugun = datetime.date(2026, 11, 5)
navroz = datetime.date(bugun.year, 3, 21)
if navroz < bugun:
    navroz = datetime.date(bugun.year + 1, 3, 21)

qoldi = (navroz - bugun).days
print("Navro'zgacha", qoldi, "kun qoldi!")
print("Bu taxminan", qoldi // 7, "hafta")

zar1 = random.randint(1, 6)
zar2 = random.randint(1, 6)
print("Zarlar:", zar1, zar2, "Yig'indi:", zar1 + zar2)`,
          notes: "To'g'ri javob: 136 kun (19 hafta). O'quvchilar bugun o'rniga date.today() ni ham sinab ko'rishsin."
        },
        {
          type: "summary",
          title: "Xulosa",
          points: [
            "Modul — tayyor kodli `.py` fayl; standart kutubxona Python bilan birga keladi.",
            "`import math`, `from math import sqrt`, `import math as m` — uch usul.",
            "math: `sqrt`, `pi`, `ceil` (yuqoriga), `floor` (pastga).",
            "random: `randint` (chegaralar kiradi), `choice`, `shuffle` (joyida), `sample`, `seed`.",
            "datetime: `date(y, m, d)`, `date.today()`, sanalar ayirmasi → `.days`.",
            "O'z modulimiz: helpers.py + `import helpers`; sinov kodi `if __name__ == \"__main__\":` ichida.",
            "pip — tashqi kutubxonalar: requests, pygame, flask..."
          ],
          notes: "Keyingi dars — JSON: lug'at va ro'yxatlarni faylga saqlash. Bu modulning eng muhim darsi va loyiha uchun asos."
        }
      ],
      homework: [
        { level: "oson", task: "math moduli bilan kalkulyator: foydalanuvchi son kiritadi, dastur uning kvadrat ildizini, ceil va floor qiymatini va shu radiusli aylana yuzini (2 xona aniqlikda) chiqaradi. Manfiy son kiritilsa, xabar bering." },
        { level: "o'rta", task: "'Tosh-qaychi-qog'oz' o'yini: kompyuter random.choice bilan tanlaydi, foydalanuvchi kiritadi. 5 raund o'ynang, hisobni yuriting. Noto'g'ri so'z kiritilsa, raund qayta o'ynalsin." },
        { level: "qiyin", task: "O'z modulingizni yarating (kompyuterdagi Python'da): 'sana_yordamchi.py' ichida yosh_hisobla(tugilgan_sana), kunlar_qoldi(sana) va hafta_kuni(sana) (o'zbekcha nom qaytarsin) funksiyalari bo'lsin, pastida `if __name__ == \"__main__\":` sinovlari. 'main.py' dan import qilib, oila a'zolarining yoshini hisoblang." }
      ]
    },

    // ===================== DARS 4 =====================
    {
      id: "m7-l4",
      title: "JSON va ma'lumotlarni saqlash",
      duration: 90,
      goals: [
        "JSON formati nima ekanini va nega kerakligini tushunish",
        "json.dumps / json.loads — satr bilan ishlash",
        "json.dump / json.load — fayl bilan ishlash",
        "ensure_ascii=False va indent parametrlari",
        "try/except + fayl + json + funksiyalarni birlashtirib, ma'lumotni saqlaydigan ilova yozish"
      ],
      keywords: ["json", "dumps", "loads", "dump", "load", "ensure_ascii", "indent", "JSONDecodeError"],
      plan: [
        { time: 10, label: "Takrorlash: fayllar va modullar" },
        { time: 15, label: "JSON nima? dumps/loads, Python va JSON farqlari" },
        { time: 20, label: "ensure_ascii, indent, dump/load fayl bilan" },
        { time: 15, label: "Ishonchli yukla/saqla funksiyalari, kichik ilova" },
        { time: 25, label: "Amaliy mashqlar (loyihaga tayyorgarlik)" },
        { time: 5, label: "Xulosa, uyga vazifa va loyiha topshirig'i" }
      ],
      slides: [
        {
          type: "title",
          title: "JSON va ma'lumotlarni saqlash",
          subtitle: "Lug'at va ro'yxatlarni faylga saqlab, qayta tiklaymiz",
          emoji: "💾",
          notes: "O'tgan darsda baholarni txt ga saqladik — har birini str() va int() qilish noqulay edi. 'Agar lug'at ichida ro'yxat bo'lsa-chi?' deb so'rang. Bugun yechim — JSON."
        },
        {
          type: "text",
          title: "Muammo va yechim",
          body: "Faylga faqat **matn** yozish mumkin. Lekin bizning ma'lumotlar murakkab: lug'at ichida ro'yxat, ro'yxat ichida lug'at...",
          points: [
            "`str(lugat)` bilan yozish oson, lekin qayta lug'atga aylantirish qiyin.",
            "**JSON** (JavaScript Object Notation) — ma'lumotlarni matn ko'rinishida saqlash uchun **dunyo standarti**.",
            "Deyarli barcha dasturlash tillari va saytlar JSON tushunadi: Telegram botlar, ob-havo API'lari, o'yin saqlanishlari.",
            "Python'da `json` moduli bor — standart kutubxonada, o'rnatish shart emas.",
            "JSON ko'rinishi Python lug'atiga juda o'xshaydi!"
          ],
          notes: "Agar imkon bo'lsa, brauzerda biror API javobini (masalan, ochiq ob-havo JSON namunasi) ko'rsating — 'Mana, saytlar shunday gaplashadi'."
        },
        {
          type: "analogy",
          title: "Posilka jo'natish",
          emoji: "📦",
          text: "Toshkentdan Samarqanddagi buvingizga sovg'a jo'natyapsiz: ko'ylak, kitob, shirinlik. Ularni qutiga **qadoqlab**, ustiga yorliq yozasiz — bu `json.dumps()`: Python obyektini matnga 'qadoqlash'. Buvingiz qutini ochib, narsalarni joy-joyiga qo'yadi — bu `json.loads()`: matndan yana lug'at va ro'yxatlarni 'chiqarish'. Pochta qutining ichida nima borligini bilmaydi — u faqat qutini tashiydi. Fayl ham shunday: u faqat matnni saqlaydi.",
          notes: "Eslab qolish uchun: dumps/loads oxiridagi 's' — string (satr). dump/load — fayl bilan."
        },
        {
          type: "code",
          title: "json.dumps — Python → JSON matn",
          code: `import json

talaba = {
    "ism": "Aziz",
    "yosh": 14,
    "baholar": [5, 4, 5],
    "faol": True,
    "sinf_rahbari": None
}
matn = json.dumps(talaba)
print(matn)
print(type(matn))`,
          explain: [
            "`json.dumps(obyekt)` — Python obyektini **JSON satrga** aylantiradi.",
            "Diqqat: `True` → `true`, `None` → `null` — JSON qoidasi.",
            "JSON'da satrlar faqat **qo'shtirnoq** `\"` ichida bo'ladi.",
            "Natija turi — `str`. Endi uni faylga yozish mumkin!"
          ],
          output: `{"ism": "Aziz", "yosh": 14, "baholar": [5, 4, 5], "faol": true, "sinf_rahbari": null}
<class 'str'>`,
          notes: "Sinfdan so'rang: 'print(talaba) bilan print(matn) ning farqi nimada?' — Ikkalasini ham chiqarib solishtiring: tirnoqlar va true/True."
        },
        {
          type: "text",
          title: "Python va JSON: moslik jadvali",
          body: "JSON faqat oddiy turlarni biladi:",
          points: [
            "`dict` ↔ object `{...}`",
            "`list` (va `tuple`) ↔ array `[...]` — kortej qayta yuklanganda **ro'yxat** bo'lib qaytadi!",
            "`str` ↔ string (faqat `\"...\"`)",
            "`int`, `float` ↔ number",
            "`True` / `False` ↔ `true` / `false`;  `None` ↔ `null`",
            "**set** — JSON'da yo'q! Saqlashdan oldin `list(toplam)` qiling, aks holda TypeError.",
            "Lug'at kalitlari JSON'da doim **satr**: `{1: \"a\"}` → `{\"1\": \"a\"}`."
          ],
          notes: "Oxirgi ikki band — eng ko'p uchraydigan tuzoqlar. Ayniqsa raqamli kalitlar: saqlab qayta yuklasangiz, d[1] emas d[\"1\"] bo'ladi."
        },
        {
          type: "code",
          title: "json.loads — JSON matn → Python",
          code: `import json

matn = '{"shahar": "Samarqand", "aholi": 600000, "tumanlar": ["Urgut", "Kattaqo\\'rg\\'on"]}'
d = json.loads(matn)

print(type(d))
print(d["shahar"])
print(d["aholi"] + 1000)
print(d["tumanlar"][0])`,
          explain: [
            "`json.loads(satr)` — JSON matnni Python obyektiga qaytaradi.",
            "Natija — haqiqiy lug'at: kalit bo'yicha olish, son bilan hisoblash mumkin.",
            "Python satri `'...'` ichida JSON'ning `\"...\"` lari bemalol turadi.",
            "Matndagi apostrofni `\\'` bilan yozdik, chunki satr bitta tirnoqda."
          ],
          output: "<class 'dict'>\nSamarqand\n601000\nUrgut",
          notes: "Internetdan keladigan ma'lumot (API) doim matn ko'rinishida keladi — loads uni ishlatiladigan lug'atga aylantiradi."
        },
        {
          type: "code",
          title: "ensure_ascii=False va indent",
          code: `import json

kontakt = {"ism": "Dilnoza", "shahar": "Тошкент", "kayfiyat": "😊"}

print(json.dumps(kontakt))
print(json.dumps(kontakt, ensure_ascii=False))
print(json.dumps(kontakt, ensure_ascii=False, indent=2))`,
          explain: [
            "Standart holatda lotin bo'lmagan harflar `\\uXXXX` kodlarga aylanadi — o'qib bo'lmaydi.",
            "`ensure_ascii=False` — harflar va emoji asl holicha saqlanadi.",
            "`indent=2` — chiroyli, chekinishli format: odam o'qishi oson.",
            "Faylga saqlashda ikkalasini ham deyarli doim yozamiz."
          ],
          output: `{"ism": "Dilnoza", "shahar": "\\u0422\\u043e\\u0448\\u043a\\u0435\\u043d\\u0442", "kayfiyat": "\\ud83d\\ude0a"}
{"ism": "Dilnoza", "shahar": "Тошкент", "kayfiyat": "😊"}
{
  "ism": "Dilnoza",
  "shahar": "Тошкент",
  "kayfiyat": "😊"
}`,
          notes: "Kirill yozuvidagi o'zbekcha va emoji'larni ko'rsating. Bu ma'lumot buzilgani emas — shunchaki kodlangan, loads uni to'g'ri qaytaradi. Lekin faylni ochib o'qish uchun ensure_ascii=False qulay."
        },
        {
          type: "code",
          title: "json.dump / json.load — fayl bilan",
          code: `import json

kontaktlar = {"Ali": "+998901112233", "Laylo": "+998935556677"}

with open("kontaktlar.json", "w", encoding="utf-8") as f:
    json.dump(kontaktlar, f, ensure_ascii=False, indent=2)

with open("kontaktlar.json", encoding="utf-8") as f:
    yuklangan = json.load(f)

print(yuklangan)
print("Laylo:", yuklangan["Laylo"])
print("Kontaktlar soni:", len(yuklangan))`,
          explain: [
            "`json.dump(obyekt, f)` — obyektni to'g'ridan-to'g'ri **faylga** yozadi.",
            "`json.load(f)` — fayldan o'qib, Python obyektini qaytaradi.",
            "`s` siz versiyalar — fayl bilan; `s` li (dumps/loads) — satr bilan.",
            "Fayl kengaytmasi `.json` — bu odat, majburiy emas."
          ],
          output: "{'Ali': '+998901112233', 'Laylo': '+998935556677'}\nLaylo: +998935556677\nKontaktlar soni: 2",
          notes: "Bu — darsning eng muhim slaydi. O'quvchilarga 'dump va load — saqlash va yuklash' deb yozdiring."
        },
        {
          type: "compare",
          title: "dump va dumps adashtirilishi",
          left: {
            label: "❌ Xato",
            code: `import json
data = {"ball": 95}
with open("natija.json", "w", encoding="utf-8") as f:
    json.dumps(data, f)
# TypeError: dumps() takes 1 positional
# argument but 2 were given`
          },
          right: {
            label: "✅ To'g'ri",
            code: `import json
data = {"ball": 95}
with open("natija.json", "w", encoding="utf-8") as f:
    json.dump(data, f)
# yoki: f.write(json.dumps(data))`
          },
          good: "right",
          notes: "Yana bir keng tarqalgan xato: json.load(\"fayl.json\") — fayl nomini berish. load ga fayl NOMI emas, ochilgan fayl OBYEKTI beriladi."
        },
        {
          type: "quiz",
          question: "json.dumps([True, None, (1, 2)]) nima qaytaradi?",
          options: [
            "[True, None, (1, 2)]",
            "'[true, null, [1, 2]]'",
            "'[True, None, [1, 2]]'",
            "TypeError"
          ],
          answer: 1,
          explain: "dumps satr qaytaradi; True → true, None → null, kortej → massiv [1, 2].",
          notes: "Moslik jadvalini eslating. Kortej — eng ko'p chalg'itadigan qism."
        },
        {
          type: "code",
          title: "Ishonchli yukla() va saqla()",
          code: `import json

def yukla(fayl, standart):
    try:
        with open(fayl, encoding="utf-8") as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        return standart

def saqla(fayl, malumot):
    with open(fayl, "w", encoding="utf-8") as f:
        json.dump(malumot, f, ensure_ascii=False, indent=2)

print(yukla("yoq.json", []))
saqla("royxat.json", ["non", "sut", "tuxum"])
print(yukla("royxat.json", []))`,
          explain: [
            "Fayl yo'q bo'lsa (birinchi ishga tushish) — **standart** qiymat qaytadi.",
            "Fayl buzilgan bo'lsa (`json.JSONDecodeError`) ham dastur qulamaydi.",
            "Bir nechta xatoni bitta except'da **kortej** bilan ushlash mumkin.",
            "Bu ikki funksiyani har bir loyihangizga ko'chirib ishlating!"
          ],
          output: "[]\n['non', 'sut', 'tuxum']",
          notes: "Bu funksiyalar loyihada to'g'ridan-to'g'ri ishlatiladi. O'quvchilar ularni daftarga ko'chirib olsin."
        },
        {
          type: "code",
          title: "Dastur 'eslab qoladi': ishga tushishlar hisoblagichi",
          code: `import json

def yukla():
    try:
        with open("hisob.json", encoding="utf-8") as f:
            return json.load(f)
    except FileNotFoundError:
        return {"marta": 0}

hisob = yukla()
hisob["marta"] += 1

with open("hisob.json", "w", encoding="utf-8") as f:
    json.dump(hisob, f)

print("Dastur", hisob["marta"], "- marta ishga tushdi")`,
          explain: [
            "Birinchi ishga tushishda fayl yo'q → `{\"marta\": 0}` → 1 bo'ladi.",
            "Keyingi safar fayldan 1 o'qiladi → 2 bo'ladi, va hokazo.",
            "Bu barcha 'saqlanadigan' ilovalarning sxemasi: **yukla → o'zgartir → saqla**.",
            "▶ ni bir necha marta bosing — son o'sib boradi!"
          ],
          output: "Dastur 1 - marta ishga tushdi",
          notes: "Kodni 3-4 marta ishga tushiring — 1, 2, 3, 4. Bu 'wow' daqiqasi: dastur birinchi marta xotiraga ega bo'ldi. 'Yukla → o'zgartir → saqla' sxemasini doskaga yozing."
        },
        {
          type: "quiz",
          question: "Fayldan ma'lumotni Python lug'atiga yuklash uchun qaysi to'g'ri?",
          options: [
            "json.load(\"data.json\")",
            "json.loads(f)",
            "json.dump(f)",
            "json.load(f)  # f = open(\"data.json\", encoding=\"utf-8\")"
          ],
          answer: 3,
          explain: "load() ga ochilgan fayl obyekti beriladi. Fayl nomini (satrni) bersak xato bo'ladi; loads esa satr kutadi; dump — saqlash uchun.",
          notes: "Har bir noto'g'ri variant nega noto'g'ri ekanini o'quvchilardan so'rab chiqing."
        },
        {
          type: "text",
          title: "Kichik ilovaning tuzilishi",
          body: "Endi barcha bilimlarni birlashtiramiz. Ma'lumot saqlaydigan har qanday konsol ilova shunday tuziladi:",
          points: [
            "**1. Import va sozlamalar:** `import json`, `FAYL = \"data.json\"`.",
            "**2. Yordamchi funksiyalar:** `yukla()`, `saqla()`, `son_ol()` (try/except bilan).",
            "**3. Amal funksiyalari:** `qosh()`, `korsat()`, `qidir()`, `statistika()`.",
            "**4. Menyu sikli:** `while True:` — tanlov so'rash, mos funksiyani chaqirish, `0` — chiqish.",
            "**5. Har bir o'zgarishdan keyin `saqla()`** — dastur kutilmaganda yopilsa ham ma'lumot yo'qolmaydi."
          ],
          notes: "Bu sxema modul loyihasi uchun asos. Loyiha topshirig'ini shu slayddan keyin e'lon qilish mumkin."
        },
        {
          type: "task",
          title: "Mashq 1: Kontaktlar daftari",
          task: "Menyuli dastur yozing: 1 — kontakt qo'shish (ism, telefon), 2 — barcha kontaktlarni ko'rsatish, 3 — ism bo'yicha qidirish, 0 — chiqish. Kontaktlar lug'at ko'rinishida 'kontaktlar.json' da saqlansin, har qo'shishdan keyin saqlansin. Noto'g'ri menyu tanlovi uchun xabar bering.",
          starter: `import json

FAYL = "kontaktlar.json"

def yukla():
    pass

def saqla(kontaktlar):
    pass

kontaktlar = yukla()
while True:
    tanlov = input("1-qo'shish 2-ro'yxat 3-qidirish 0-chiqish: ")
    # ...
`,
          hint: "yukla() FileNotFoundError'da {} qaytarsin. Qidirishda: if ism in kontaktlar. Ro'yxatda: for ism, tel in kontaktlar.items().",
          solution: `import json

FAYL = "kontaktlar.json"

def yukla():
    try:
        with open(FAYL, encoding="utf-8") as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        return {}

def saqla(kontaktlar):
    with open(FAYL, "w", encoding="utf-8") as f:
        json.dump(kontaktlar, f, ensure_ascii=False, indent=2)

kontaktlar = yukla()
while True:
    tanlov = input("1-qo'shish 2-ro'yxat 3-qidirish 0-chiqish: ")
    if tanlov == "1":
        ism = input("Ism: ").strip()
        tel = input("Telefon: ").strip()
        kontaktlar[ism] = tel
        saqla(kontaktlar)
        print("Saqlandi!")
    elif tanlov == "2":
        if not kontaktlar:
            print("Kontaktlar yo'q")
        for ism, tel in kontaktlar.items():
            print(ism, "-", tel)
    elif tanlov == "3":
        ism = input("Kim kerak? ").strip()
        if ism in kontaktlar:
            print(ism, "-", kontaktlar[ism])
        else:
            print("Topilmadi")
    elif tanlov == "0":
        print("Xayr!")
        break
    else:
        print("Noto'g'ri tanlov")`,
          notes: "12-15 daqiqa. Dasturni to'xtatib, qayta ishga tushirib, kontaktlar saqlanganini isbotlashni so'rang — bu asosiy tekshiruv."
        },
        {
          type: "task",
          title: "Mashq 2: Baholar jurnali",
          task: "'jurnal.json' faylida {\"Aziz\": [5, 4], \"Malika\": [5]} kabi ma'lumot saqlansin. baho_qosh(jurnal, ism, baho) funksiyasi: baho 1-5 oralig'ida bo'lmasa raise ValueError; o'quvchi yo'q bo'lsa yangi ro'yxat ochsin. Bir nechta baho qo'shib (biri noto'g'ri — 7), saqlang, qayta yuklang va har bir o'quvchining o'rtacha bahosini chiqaring.",
          starter: `import json

def baho_qosh(jurnal, ism, baho):
    pass

jurnal = {}
for ism, baho in [("Aziz", 5), ("Malika", 4), ("Aziz", 7), ("Aziz", 3)]:
    # try/except bilan qo'shing
    pass
`,
          hint: "baho_qosh ichida: if not 1 <= baho <= 5: raise ValueError(...). Keyin if ism not in jurnal: jurnal[ism] = []. O'rtacha: sum(b) / len(b).",
          solution: `import json

def baho_qosh(jurnal, ism, baho):
    if not 1 <= baho <= 5:
        raise ValueError(f"{baho} - noto'g'ri baho")
    if ism not in jurnal:
        jurnal[ism] = []
    jurnal[ism].append(baho)

jurnal = {}
for ism, baho in [("Aziz", 5), ("Malika", 4), ("Aziz", 7), ("Aziz", 3)]:
    try:
        baho_qosh(jurnal, ism, baho)
    except ValueError as e:
        print("Xato:", e)

with open("jurnal.json", "w", encoding="utf-8") as f:
    json.dump(jurnal, f, ensure_ascii=False)

with open("jurnal.json", encoding="utf-8") as f:
    yuklangan = json.load(f)

for ism, baholar in yuklangan.items():
    print(ism, "o'rtacha:", round(sum(baholar) / len(baholar), 2))`,
          notes: "Kutiladigan natija: 'Xato: 7 - noto'g'ri baho', Aziz o'rtacha: 4.0, Malika o'rtacha: 4.0. Bu mashq loyihaning kichik nusxasi."
        },
        {
          type: "summary",
          title: "Xulosa",
          points: [
            "JSON — ma'lumotlarni matn ko'rinishida saqlash va almashishning dunyo standarti.",
            "`dumps`/`loads` — satr bilan; `dump`/`load` — fayl bilan.",
            "True→true, None→null, tuple→list, set saqlanmaydi, kalitlar doim satr.",
            "`ensure_ascii=False` — o'zbekcha/ruscha harflar va emoji uchun; `indent=2` — chiroyli ko'rinish.",
            "`yukla()` FileNotFoundError va JSONDecodeError'ni ushlab, standart qiymat qaytaradi.",
            "Har qanday saqlovchi ilova sxemasi: **yukla → o'zgartir → saqla**.",
            "Endi siz haqiqiy, 'xotirali' dasturlar yoza olasiz!"
          ],
          notes: "Modul loyihasini e'lon qiling: 'Shaxsiy kundalik / Test tizimi'. Talablarni birga o'qib chiqing va keyingi darsgacha birinchi versiyani boshlashni so'rang."
        }
      ],
      homework: [
        { level: "oson", task: "O'zingiz haqingizdagi lug'at yarating (ism, yosh, sevimli fanlar ro'yxati, sevimli o'yinlar ro'yxati). Uni 'men.json' ga ensure_ascii=False va indent=2 bilan saqlang, keyin qayta yuklab, har bir sevimli fanni alohida qatorda chiqaring." },
        { level: "o'rta", task: "'Xarid ro'yxati' dasturi: mahsulot qo'shish, o'chirish, ko'rsatish va 0 — chiqish. Ro'yxat 'xarid.json' da saqlansin. O'chirishda mahsulot topilmasa (ValueError — list.remove) xabar bering." },
        { level: "qiyin", task: "'Lug'at o'yini' (inglizcha-o'zbekcha): 'sozlar.json' da so'zlar lug'ati saqlansin. Menyu: so'z qo'shish, test (random.sample bilan 5 ta tasodifiy so'z so'raladi va ball hisoblanadi), natijalar tarixi (har bir testning sanasi va bali 'natijalar.json' ga ro'yxat sifatida qo'shib boriladi). Barcha kiritishlar xatolarga chidamli bo'lsin." }
      ]
    }
  ],
  project: {
    title: "Shaxsiy kundalik / Test tizimi",
    description: "Ma'lumotlarni JSON faylda saqlaydigan konsol ilova yarating. Asosiy variant — shaxsiy kundalik: har bir yozuvda sana, matn va kayfiyat bahosi (1-5) bo'ladi. Dastur yopilib qayta ochilganda barcha yozuvlar joyida bo'lishi, noto'g'ri kiritishlarda esa qulamasligi kerak. Xohlovchilar xuddi shu tuzilishda 'Test tizimi'ni (savollar bazasi + natijalar tarixi) yaratishi mumkin.",
    requirements: [
      "Ma'lumotlar 'kundalik.json' faylida yozuvlar ro'yxati sifatida saqlansin (har yozuv — lug'at: sana, matn, kayfiyat)",
      "yukla() va saqla() funksiyalari: fayl yo'q yoki buzilgan bo'lsa dastur qulamasin (try/except)",
      "Menyu (while True): 1 — yozuv qo'shish, 2 — barcha yozuvlar, 3 — so'z bo'yicha qidirish, 4 — statistika, 0 — chiqish",
      "Yozuv qo'shishda sana datetime.date.today() dan avtomatik olinsin, kayfiyat esa xavfsiz son_ol() funksiyasi bilan 1-5 oralig'ida so'ralsin",
      "Bo'sh matnli yozuv qabul qilinmasin (raise ValueError yoki tekshiruv)",
      "Qidiruv katta-kichik harflarga qaramasdan ishlasin (lower())",
      "Statistika: yozuvlar soni, o'rtacha kayfiyat, eng yaxshi kayfiyatli kun, eng ko'p yozilgan sana",
      "ensure_ascii=False va indent=2 bilan saqlansin, har bir funksiya alohida vazifani bajarsin (klasslarsiz)"
    ],
    bonus: [
      "Yozuvni raqami bo'yicha o'chirish (IndexError'ni ushlash)",
      "Bugungi kunga 'kun maslahati' — random.choice bilan ro'yxatdan motivatsion gap",
      "Kayfiyat grafigi: har bir yozuv uchun '★' belgilari bilan (masalan, ★★★★)",
      "Test tizimi rejimi: savollar.json dan random.sample bilan 5 ta savol, natijani sana bilan saqlash",
      "Ma'lumotlarni 'eksport.txt' ga chiroyli matn ko'rinishida chiqarish"
    ],
    example: `import json
import datetime
import random

FAYL = "kundalik.json"
MASLAHATLAR = ["Bugun yangi narsa o'rgan!", "Do'stingga yaxshi so'z ayt.",
               "10 daqiqa kitob o'qi.", "Ota-onangga yordam ber."]

def yukla():
    try:
        with open(FAYL, encoding="utf-8") as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        return []

def saqla(yozuvlar):
    with open(FAYL, "w", encoding="utf-8") as f:
        json.dump(yozuvlar, f, ensure_ascii=False, indent=2)

def son_ol(savol, kichik, katta):
    while True:
        try:
            son = int(input(savol))
            if son < kichik or son > katta:
                raise ValueError(f"{kichik} dan {katta} gacha son kiriting")
            return son
        except ValueError as e:
            print("Xato:", e)

def yozuv_qosh(yozuvlar):
    matn = input("Bugun nima bo'ldi? ").strip()
    if not matn:
        print("Bo'sh yozuv saqlanmaydi.")
        return
    kayfiyat = son_ol("Kayfiyat (1-5): ", 1, 5)
    sana = datetime.date.today().isoformat()
    yozuvlar.append({"sana": sana, "matn": matn, "kayfiyat": kayfiyat})
    saqla(yozuvlar)
    print("Saqlandi! Kun maslahati:", random.choice(MASLAHATLAR))

def chiqar(yozuv, raqam):
    yulduz = "★" * yozuv["kayfiyat"]
    print(f"{raqam}. [{yozuv['sana']}] {yulduz} {yozuv['matn']}")

def royxat(yozuvlar):
    if not yozuvlar:
        print("Hali yozuvlar yo'q.")
    for i, yozuv in enumerate(yozuvlar, 1):
        chiqar(yozuv, i)

def qidir(yozuvlar):
    soz = input("Qidiriladigan so'z: ").strip().lower()
    topildi = 0
    for i, yozuv in enumerate(yozuvlar, 1):
        if soz in yozuv["matn"].lower():
            chiqar(yozuv, i)
            topildi += 1
    print("Topildi:", topildi, "ta")

def statistika(yozuvlar):
    if not yozuvlar:
        print("Statistika uchun yozuvlar yo'q.")
        return
    kayfiyatlar = [y["kayfiyat"] for y in yozuvlar]
    print("Yozuvlar soni:", len(yozuvlar))
    print("O'rtacha kayfiyat:", round(sum(kayfiyatlar) / len(kayfiyatlar), 2))
    eng_yaxshi = max(yozuvlar, key=lambda y: y["kayfiyat"])
    print("Eng yaxshi kun:", eng_yaxshi["sana"], "-", eng_yaxshi["matn"])
    sanalar = {}
    for y in yozuvlar:
        sanalar[y["sana"]] = sanalar.get(y["sana"], 0) + 1
    faol = max(sanalar, key=sanalar.get)
    print("Eng faol kun:", faol, f"({sanalar[faol]} ta yozuv)")

def ochir(yozuvlar):
    raqam = son_ol("O'chiriladigan yozuv raqami: ", 1, 100000)
    try:
        olingan = yozuvlar.pop(raqam - 1)
        saqla(yozuvlar)
        print("O'chirildi:", olingan["matn"])
    except IndexError:
        print("Bunday raqamli yozuv yo'q.")

def main():
    yozuvlar = yukla()
    print("📔 Shaxsiy kundalik. Yozuvlar:", len(yozuvlar))
    while True:
        print("\\n1-qo'shish 2-ro'yxat 3-qidirish 4-statistika 5-o'chirish 0-chiqish")
        tanlov = input("Tanlov: ").strip()
        if tanlov == "1":
            yozuv_qosh(yozuvlar)
        elif tanlov == "2":
            royxat(yozuvlar)
        elif tanlov == "3":
            qidir(yozuvlar)
        elif tanlov == "4":
            statistika(yozuvlar)
        elif tanlov == "5":
            ochir(yozuvlar)
        elif tanlov == "0":
            print("Xayr! Ertaga yana yozing 👋")
            break
        else:
            print("Noto'g'ri tanlov, qaytadan urinib ko'ring.")

if __name__ == "__main__":
    main()`
  },
  test: [
    {
      q: "Qaysi xato dastur umuman ishga tushmasdan oldin aniqlanadi?",
      options: ["ZeroDivisionError", "SyntaxError", "ValueError", "KeyError"],
      answer: 1
    },
    {
      q: "Bu kod qaysi xatoni beradi?",
      code: `baholar = {"Aziz": 5}
print(baholar["Malika"])`,
      options: ["IndexError", "NameError", "KeyError", "TypeError"],
      answer: 2
    },
    {
      q: "Bu kod nima chiqaradi?",
      code: `try:
    x = int("7")
except ValueError:
    print("A")
else:
    print("B")
finally:
    print("C")`,
      options: ["B C", "A C", "A B C", "C"],
      answer: 0
    },
    {
      q: "O'z tekshiruvimiz uchun xato chiqarishda qaysi kalit so'z ishlatiladi?",
      options: ["except", "throw", "error", "raise"],
      answer: 3
    },
    {
      q: "Faylning eski ma'lumotini saqlab, oxiriga yangi qator qo'shish uchun qaysi rejim kerak?",
      options: ["\"r\"", "\"a\"", "\"w\"", "\"x\""],
      answer: 1
    },
    {
      q: "Fayldan o'qilgan qatorlar oxiridagi '\\n' belgisini qaysi metod olib tashlaydi?",
      options: ["strip()", "split()", "replace()", "upper()"],
      answer: 0
    },
    {
      q: "Bu kod nima chiqaradi?",
      code: `import math
print(math.ceil(2.1) + math.floor(2.9))`,
      options: ["4", "6", "5", "5.0"],
      answer: 2
    },
    {
      q: "random.shuffle(royxat) nima qiladi?",
      options: [
        "Yangi aralashtirilgan ro'yxat qaytaradi",
        "Bitta tasodifiy elementni qaytaradi",
        "Ro'yxatni tartiblaydi",
        "Ro'yxatni joyida aralashtiradi va None qaytaradi"
      ],
      answer: 3
    },
    {
      q: "Bu kod nima chiqaradi?",
      code: `import json
print(json.dumps({"ok": True, "x": None}))`,
      options: [
        "{'ok': True, 'x': None}",
        "{\"ok\": true, \"x\": null}",
        "{\"ok\": True, \"x\": None}",
        "TypeError"
      ],
      answer: 1
    },
    {
      q: "Lug'atni JSON faylga o'zbekcha/ruscha harflarni buzmasdan saqlash uchun qaysi kod to'g'ri?",
      options: [
        "json.dumps(data, f)",
        "json.load(data, f, ensure_ascii=True)",
        "json.dump(data, f, ensure_ascii=False)",
        "f.write(data)"
      ],
      answer: 2
    }
  ]
});
