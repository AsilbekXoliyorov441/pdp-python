# Kontent formati (yangi dars / modul qo'shish uchun)

Har bir modul alohida fayl: `js/modules/m01.js` ... `js/modules/m08.js`.
Fayl `index.html` ichida `<script>` orqali ulanadi (internet/server shart emas).

## Modul fayli tuzilishi

```js
window.COURSE_MODULES = window.COURSE_MODULES || [];
COURSE_MODULES.push({
  id: 1,                       // modul raqami
  month: 1,                    // nechanchi oy (1-4)
  weeks: "1-2 hafta",
  title: "Python bilan tanishuv",
  icon: "🚀",
  description: "Modul haqida 1-2 gap",
  outcomes: ["Modul oxirida o'quvchi ... qila oladi", "..."],
  lessons: [ /* 4 ta dars, pastda */ ],
  project: {
    title: "Loyiha nomi",
    description: "Nima qilinadi",
    requirements: ["talab 1", "talab 2"],
    bonus: ["qo'shimcha g'oya"],
    example: "namuna kod (Python, ixtiyoriy)"
  },
  test: [ // modul yakuniy testi, 8-10 savol
    { q: "Savol matni", code: "ixtiyoriy kod", options: ["A", "B", "C", "D"], answer: 1 }
  ]
});
```

## Dars tuzilishi

```js
{
  id: "m1-l1",                // m<modul>-l<dars>
  title: "Dars nomi",
  duration: 90,               // daqiqa
  goals: ["Maqsad 1", "Maqsad 2"],
  keywords: ["print", "dastur"],
  plan: [                      // dars vaqt rejasi (o'qituvchi uchun)
    { time: 10, label: "Takrorlash" },
    { time: 30, label: "Yangi mavzu" }
  ],
  slides: [ /* slaydlar, pastda */ ],
  homework: [
    { level: "oson", task: "..." },
    { level: "o'rta", task: "..." },
    { level: "qiyin", task: "..." }
  ]
}
```

## Slayd turlari

Har bir slaydda ixtiyoriy `notes` — o'qituvchi izohi (o'quvchilar ko'rmaydi, N tugmasi bilan ochiladi).

Matnlarda `**qalin**` va `` `kod` `` ishlatish mumkin.

| type | maydonlar | vazifasi |
|---|---|---|
| `title` | `title`, `subtitle`, `emoji` | Dars boshidagi sarlavha slaydi |
| `text` | `title`, `body`, `points: []` | Tushuntirish |
| `analogy` | `title`, `emoji`, `text` | Hayotiy o'xshatish (bolalar uchun) |
| `code` | `title`, `code`, `explain: []`, `output` | Kod namunasi (▶ bilan ishga tushadi) |
| `compare` | `title`, `left: {label, code}`, `right: {label, code}`, `good` ("left"/"right"/yo'q) | Ikki variantni solishtirish |
| `quiz` | `question`, `code`, `options: []`, `answer` (indeks), `explain` | Sinf bilan tezkor savol |
| `task` | `title`, `task`, `starter`, `hint`, `solution` | Amaliy mashq |
| `summary` | `title`, `points: []` | Dars xulosasi |
