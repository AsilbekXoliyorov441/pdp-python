// PDP Junior — Python dars reja platformasi
// Sahifalar: Bosh sahifa → Oy (bo'lim) → Modul → Dars → Taqdimot
(function () {
  const { highlight, esc } = window.PyHighlight;
  const MODULES = (window.COURSE_MODULES || []).slice().sort((a, b) => a.id - b.id);
  const app = document.getElementById("app");

  // ---------- Oylar (bo'limlar) ----------
  const MONTHS = {
    1: { name: "Python asoslari", subtitle: "Birinchi qadamlar", emoji: "🚀", desc: "Dastur nima, o'zgaruvchilar, ma'lumot turlari, input/print, arifmetika, shartlar va mantiqiy fikrlash.", g1: "#f97316", g2: "#ef4444", accent: "#f97316", glow: "rgba(249,115,22,0.20)", ring: "rgba(249,115,22,0.14)", level: "Boshlang'ich" },
    2: { name: "Tsikllar va to'plamlar", subtitle: "Takrorlash va ma'lumotlar", emoji: "🔁", desc: "while va for tsikllari, algoritmlar, satrlar bilan chuqur ishlash va ro'yxatlar (list).", g1: "#3b82f6", g2: "#22d3ee", accent: "#22d3ee", glow: "rgba(34,211,238,0.20)", ring: "rgba(34,211,238,0.14)", level: "Boshlang'ich+" },
    3: { name: "Tuzilmalar va funksiyalar", subtitle: "Kodni tartibga solish", emoji: "🧩", desc: "Lug'atlar, kortejlar, to'plamlar, ichma-ich tuzilmalar va funksiyalar: parametr, return, lambda, rekursiya.", g1: "#facc15", g2: "#f97316", accent: "#f59e0b", glow: "rgba(245,158,11,0.20)", ring: "rgba(245,158,11,0.14)", level: "O'rta" },
    4: { name: "Professional daraja", subtitle: "OOP va yakuniy loyiha", emoji: "🏆", desc: "Xatolar bilan ishlash, fayllar, modullar, JSON, sinflar (OOP), meros va yakuniy loyiha himoyasi.", g1: "#a855f7", g2: "#ec4899", accent: "#a855f7", glow: "rgba(168,85,247,0.20)", ring: "rgba(168,85,247,0.14)", level: "O'rta+" },
  };
  const mvars = (mo) => { const t = MONTHS[mo] || MONTHS[1]; return `--g1:${t.g1};--g2:${t.g2};--accent:${t.accent};--glow:${t.glow};--ring:${t.ring}`; };

  // ---------- Ma'lumotlarni tayyorlash ----------
  const LESSONS = [];
  MODULES.forEach((m) => {
    const startWeek = parseInt(String(m.weeks || "1"), 10) || 1;
    (m.lessons || []).forEach((l, i) => {
      Object.assign(l, { _module: m, _index: i, _week: startWeek + Math.floor(i / 2), _global: LESSONS.length });
      LESSONS.push(l);
    });
  });
  const findLesson = (id) => LESSONS.find((l) => l.id === id);
  const findModule = (id) => MODULES.find((m) => String(m.id) === String(id));
  const monthMods = (mo) => MODULES.filter((m) => m.month === mo);
  const hours = (n) => Math.round((n * 90) / 60);

  // ---------- Yordamchilar ----------
  function fmt(s) {
    if (s == null) return "";
    return esc(String(s))
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/\n/g, "<br>");
  }
  const staticCode = (code) => `<pre class="code-static"><code>${highlight(code || "")}</code></pre>`;
  const pad = (n) => String(n).padStart(2, "0");
  const html = (s) => { const t = document.createElement("template"); t.innerHTML = s.trim(); return t.content.firstElementChild; };

  // UI bloklari (sayt uslubidagi komponentlar)
  const head = (ic, label, title, color) => `
    <div class="sec-head"><div class="sec-icon ${color}">${icon(ic, 30)}</div>
      <div><p class="sec-label ${color}">${label}</p><h3 class="sec-title">${title}</h3></div></div>`;
  const section = (ic, label, title, color, inner, cls) => `
    <section class="glass-sec ${cls || ""}">${head(ic, label, title, color)}<div class="sec-body">${inner}</div></section>`;
  const divider = (t) => `<div class="divider"><span></span><b>${t}</b><span></span></div>`;
  // Navigatsiya yo'li: Orqaga + Bosh sahifa / 2-oy / 3-modul / 10-dars
  const crumbs = (back, items, right) => `
    <div class="crumbbar fade-down">
      <a class="back-btn mb0" href="${back}">${icon("back", 15)} Orqaga</a>
      <nav class="crumbs">${[["#/", "Bosh sahifa"]].concat(items).map(([h, t], i, a) =>
        i === a.length - 1 ? `<span class="cur">${esc(t)}</span>` : `<a href="${h}">${esc(t)}</a><span class="sep">/</span>`).join("")}</nav>
      ${right ? `<span class="tag-box">${right}</span>` : ""}
    </div>`;
  const glows = (style) => `<div class="bg-glows" style="${style || ""}"><i class="g1"></i><i class="g2"></i><i class="g3"></i></div>`;

  // ---------- Saqlash ----------
  const store = {
    get(k, d) { try { const v = localStorage.getItem("pdpjr-py:" + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("pdpjr-py:" + k, JSON.stringify(v)); } catch (e) {} },
  };
  const isDone = (id) => !!store.get("done", {})[id];
  function setDone(id, val) { const d = store.get("done", {}); if (val) d[id] = Date.now(); else delete d[id]; store.set("done", d); }
  const doneIn = (ls) => ls.filter((l) => isDone(l.id)).length;

  const TYPE = {
    title: ["sparkles", "Kirish", "c-cyan"], text: ["book", "Tushuntirish", "c-cyan"], analogy: ["bulb", "Esda qoladigan misol", "c-yellow"],
    code: ["code", "Jonli kod", "c-orange"], compare: ["scale", "Solishtiramiz", "c-pink"], quiz: ["gamepad", "Tezkor savol", "c-emerald"],
    task: ["pencil", "Amaliy mashq", "c-purple"], summary: ["list", "Xulosa", "c-emerald"], homework: ["house", "Uy vazifasi", "c-orange"],
  };
  const LEVEL = { "oson": ["Oson", "lv-easy"], "o'rta": ["O'rta", "lv-mid"], "qiyin": ["Qiyin", "lv-hard"] };

  let cleanup = null;

  // ---------- Pastki menyu (mobil) ----------
  const bottomNav = document.getElementById("bottomNav");
  function renderBottomNav(active) {
    const items = [{ id: "home", href: "#/", label: "Bosh sahifa", ic: "home", color: "#22d3ee" }]
      .concat([1, 2, 3, 4].map((mo) => ({ id: "m" + mo, href: "#/section/" + mo, label: mo + "-oy", emoji: MONTHS[mo].emoji, color: MONTHS[mo].accent })));
    bottomNav.innerHTML = `<div class="bn-in">${items.map((it) => `
      <a href="${it.href}" class="${it.id === active ? "on" : ""}" style="--c:${it.color}">
        <span class="bn-ic">${it.emoji ? it.emoji : icon(it.ic, 20)}</span><span>${it.label}</span></a>`).join("")}</div>`;
  }
  document.querySelectorAll(".ico-slot").forEach((s) => (s.outerHTML = icon(s.dataset.icon, 16)));

  // ---------- Router ----------
  function route() {
    dispatch();
    if (window.fx && !document.body.classList.contains("presenting")) fx.page(app);
  }
  function dispatch() {
    if (cleanup) { cleanup(); cleanup = null; }
    document.body.classList.remove("presenting");
    const [page, a, b] = (location.hash.replace(/^#\/?/, "") || "").split("/");
    document.querySelectorAll("[data-nav]").forEach((n) => n.classList.toggle("active", n.dataset.nav === page));
    window.scrollTo(0, 0);
    let active = "home";
    if (page === "section") active = "m" + a;
    if (page === "module" || page === "project" || page === "test") { const m = findModule(a); active = m ? "m" + m.month : ""; }
    if (page === "lesson") { const l = findLesson(a); active = l ? "m" + l._module.month : ""; }
    renderBottomNav(active);
    if (!MODULES.length) return notFound("Modul fayllari topilmadi. js/modules/ papkasini tekshiring.");
    if (page === "section") return viewSection(+a);
    if (page === "module") return viewModule(findModule(a));
    if (page === "lesson") return viewLesson(findLesson(a));
    if (page === "present") return viewPresent(findLesson(a), parseInt(b || "0", 10));
    if (page === "test") return viewTest(findModule(a));
    if (page === "project") return viewProject(findModule(a));
    if (page === "plan") return viewPlan();
    if (page === "playground") return viewPlayground();
    if (page === "help") return viewHelp();
    return viewHome();
  }
  window.addEventListener("hashchange", route);

  // ---------- 1. Bosh sahifa ----------
  function viewHome() {
    const next = LESSONS.find((l) => !isDone(l.id)) || LESSONS[LESSONS.length - 1];
    const stats = [["layers", "Oylar", 4], ["book", "Modullar", MODULES.length], ["code", "Darslar", LESSONS.length], ["trophy", "Loyihalar", MODULES.length]];
    app.innerHTML = `
    <div class="page bg-080">${glows()}
      <div class="wrap">
        <div class="hero-grid fade-up">
          <div>
            <span class="hero-badge">${icon("sparkles", 11)} PDP Junior Python Roadmap</span>
            <h1 class="hero-h1">Python <span class="grad-text">Dars Reja</span><br>Platformasi</h1>
            <p class="hero-p">13–16 yoshli o'quvchilar uchun 4 oylik bosqichma-bosqich Python kursi. Har bir darsda nazariya, jonli kod, interaktiv savollar, amaliy mashqlar, uy vazifasi va modul loyihalari mavjud.</p>
            <div class="stat-chips">${stats.map(([ic, l, v], i) => `
              <div class="stat-chip" style="animation-delay:${200 + i * 70}ms"><div class="chip-ic">${icon(ic, 15)}</div><div><p class="chip-v" data-count="${v}">${v}</p><p class="chip-l">${l}</p></div></div>`).join("")}
            </div>
            <div class="hero-cta">
              <a class="btn-white" href="#/present/${next.id}/0">${icon("play", 17)} Keyingi darsni boshlash</a>
              <a class="btn-glass" href="#/lesson/${next.id}">${next._global + 1}-dars: ${esc(next.title)}</a>
            </div>
          </div>
          <div class="track-card">
            <div class="track-head"><div class="track-ic">${icon("route", 15)}</div><div><p class="chip-l">Yo'nalish</p><p class="track-t">Python Track</p></div></div>
            <div class="track-list">${[1, 2, 3, 4].map((mo, i) => {
              const ls = monthMods(mo).flatMap((m) => m.lessons); const pct = ls.length ? Math.max(4, (doneIn(ls) / ls.length) * 100) : 4;
              return `<a class="track-item" href="#/section/${mo}" style="${mvars(mo)}">
                <div class="ti-top"><span class="ti-name"><span class="ti-emoji">${MONTHS[mo].emoji}</span>${mo}-oy · ${esc(MONTHS[mo].name)}</span><span class="chip-l">${monthMods(mo).length}m · ${ls.length}d</span></div>
                <div class="bar"><div data-bar="${pct}" style="width:${pct}%"></div></div></a>`; }).join("")}
            </div>
          </div>
        </div>
        ${divider("Bo'limni tanlang")}
        <div class="sec-cards">${[1, 2, 3, 4].map((mo, i) => {
          const t = MONTHS[mo], mods = monthMods(mo), n = mods.reduce((s, m) => s + m.lessons.length, 0);
          return `<a class="sec-card fade-up" href="#/section/${mo}" style="${mvars(mo)};animation-delay:${100 + i * 90}ms">
            <div class="hover-glow"></div>
            <div class="sc-top"><div class="sc-emoji">${t.emoji}</div><div class="sc-arrow">${icon("arrow", 15)}</div></div>
            <h2 class="sc-title">${mo}-oy</h2>
            <p class="sc-sub">${esc(t.name)}</p>
            <p class="sc-desc">${esc(t.desc)}</p>
            <div class="sc-meta">${icon("book", 11)} ${mods.length} modul <span class="vsep"></span> ${n} dars</div>
          </a>`; }).join("")}
        </div>

        ${divider("Kurs qanday tuzilgan")}
        <section class="glass-sec fade-in">${head("route", "Har bir dars formulasi", "90 daqiqalik dars 6 bosqichdan iborat", "c-cyan")}
          <div class="sec-body"><div class="flow">${[
            ["sparkles", "Kirish", "Takrorlash, dars maqsadlari", "c-cyan"],
            ["bulb", "Tushuntirish", "Hayotiy misol va nazariya", "c-yellow"],
            ["code", "Jonli kod", "Kodni birga yozib, ishga tushiramiz", "c-orange"],
            ["gamepad", "Tezkor savol", "Sinf bilan interaktiv test", "c-emerald"],
            ["pencil", "Amaliy mashq", "Mustaqil yozish: maslahat + yechim", "c-purple"],
            ["house", "Uy vazifasi", "3 daraja: oson, o'rta, qiyin", "c-pink"]].map(([ic, t, d, c], i) => `
            <div class="flow-step"><div class="fs-top"><div class="fs-ic ${c}">${icon(ic, 22)}</div><span class="fs-n">${pad(i + 1)}</span></div><h4>${t}</h4><p>${d}</p></div>`).join("")}
          </div></div>
        </section>

        ${divider("16 haftalik yo'l xaritasi")}
        <section class="glass-sec fade-in">${head("calendar", "Roadmap", "Haftama-hafta reja", "c-orange")}
          <div class="sec-body"><div class="roadmap">${[1, 2, 3, 4].map((mo) => `
            <div class="rm-month" style="${mvars(mo)}">
              <div class="rm-head"><span class="rm-dot"></span><b>${mo}-oy</b><span class="muted">${esc(MONTHS[mo].name)}</span></div>
              <div class="rm-weeks">${monthMods(mo).flatMap((m) => [0, 1].map((k) => {
                const ls = m.lessons.slice(k * 2, k * 2 + 2), wk = (parseInt(m.weeks, 10) || 1) + k;
                return `<a class="rm-week ${ls.every((l) => isDone(l.id)) ? "done" : ""}" href="#/module/${m.id}">
                  <span class="rm-wn">${wk}-hafta</span><span class="rm-mod">${m.icon || ""} ${esc(m.title)}</span>
                  ${ls.map((l) => `<span class="rm-l">${isDone(l.id) ? icon("tick", 12) : "•"} ${esc(l.title)}</span>`).join("")}
                  ${k === 1 ? `<span class="rm-extra">${icon("wrench", 12)} Loyiha + test</span>` : ""}</a>`; })).join("")}
              </div>
            </div>`).join("")}
          </div></div>
        </section>
      </div>
    </div>`;
  }

  // ---------- 2. Bo'lim (oy) sahifasi ----------
  function viewSection(mo) {
    const t = MONTHS[mo];
    if (!t) return notFound();
    const mods = monthMods(mo), n = mods.reduce((s, m) => s + m.lessons.length, 0);
    app.innerHTML = `
    <div class="page bg-080" style="${mvars(mo)}"><div class="bg-glows sec-glow"><i class="g1"></i><i class="g2"></i></div>
      <div class="wrap">
        ${crumbs("#/", [["", `${mo}-oy · ${t.name}`]], `${mo}-oy`)}
        <div class="glass-hero fade-up">
          <div class="gh-row">
            <div class="gh-emoji">${t.emoji}</div>
            <div><p class="gh-sub">${esc(t.subtitle)}</p><h1 class="gh-title">${mo}-oy: ${esc(t.name)}</h1><p class="gh-desc">${esc(t.desc)}</p></div>
          </div>
          <div class="hr"></div>
          <div class="gh-stats">
            <span>${icon("book", 14, "acc")} <b>${mods.length}</b> modul</span>
            <span>${icon("clock", 14, "acc")} <b>${n}</b> dars</span>
            <span>Jami: <b>${hours(n)} soat</b></span>
            <span>Daraja: <b>${t.level}</b></span>
          </div>
        </div>
        ${divider(`${mods.length} ta modul`)}
        <div class="mod-cards">${mods.map((m, i) => `
          <a class="mod-card fade-up" href="#/module/${m.id}" style="animation-delay:${70 + i * 70}ms">
            <div class="hover-glow"></div>
            <div class="mc-top"><div class="mc-num">${pad(m.id)}</div><div class="pill">Modul</div></div>
            <div class="mc-body">
              <p class="mc-kicker">Module ${m.id} · ${esc(m.weeks || "")}</p>
              <h3 class="mc-title">${m.icon || ""} ${esc(m.title)}</h3>
              <p class="mc-desc">${esc(m.description || "")}</p>
            </div>
            <div class="mc-foot">
              <div class="chips">
                <span class="chip">${icon("book", 12, "acc")} ${m.lessons.length} dars</span>
                <span class="chip">${icon("clock", 12, "acc")} ${hours(m.lessons.length)} soat</span>
                <span class="chip">${icon("tick", 12, "acc")} ${doneIn(m.lessons)}/${m.lessons.length} o'tildi</span>
              </div>
              <div class="mc-go"><span>Darslarni ko'rish</span><div class="go-btn">${icon("arrow", 17)}</div></div>
            </div>
          </a>`).join("")}
        </div>
      </div>
    </div>`;
  }

  // ---------- 3. Modul sahifasi ----------
  function viewModule(m) {
    if (!m) return notFound("Module topilmadi");
    const first = m.lessons.find((l) => !isDone(l.id)) || m.lessons[0];
    app.innerHTML = `
    <div class="page bg-057" style="${mvars(m.month)}">
      <div class="bg-mod"><i class="tint"></i><i class="radials"></i><i class="gridlines"></i></div>
      <div class="wrap">
        ${crumbs(`#/section/${m.month}`, [[`#/section/${m.month}`, `${m.month}-oy`], ["", `${m.id}-modul · ${m.title}`]], `Module ${m.id}`)}
        <div class="mod-hero fade-up">
          <i class="mh-tint"></i><i class="mh-g1"></i><i class="mh-g2"></i>
          <div class="rel">
            <div class="mh-row">
              <div class="mh-text">
                <span class="path-badge">${icon("sparkles", 13, "c-cyan")} Python Learning Path · ${m.month}-oy</span>
                <p class="mh-sub">${esc(m.weeks || "")} · ${m.icon || ""} Module ${m.id}</p>
                <h1 class="mh-title">${esc(m.title)}</h1>
                <p class="mh-desc">${fmt(m.description)}</p>
              </div>
              <a class="btn-white" href="#/lesson/${first.id}">${icon("play", 18)} Boshlash</a>
            </div>
            <div class="mh-stats">
              <div class="mh-stat">${icon("book", 20, "c-cyan")}<p class="v">${m.lessons.length}</p><p class="l">Darslar</p></div>
              <div class="mh-stat">${icon("clock", 20, "c-violet")}<p class="v">${hours(m.lessons.length)}</p><p class="l">Taxminiy soat</p></div>
              <div class="mh-stat">${icon("wrench", 20, "c-orange")}<p class="v">Amaliy</p><p class="l">Loyiha + test</p></div>
            </div>
          </div>
        </div>
        <div class="stepper fade-up">${m.lessons.map((l, i) => `
          <a class="st-item ${isDone(l.id) ? "done" : l === first ? "cur" : ""}" href="#/lesson/${l.id}">
            <span class="st-dot">${isDone(l.id) ? icon("tick", 14) : i + 1}</span><span class="st-t"><small>${l._week}-hafta</small>${esc(l.title)}</span></a>`).join("")}
          ${m.project ? `<a class="st-item extra" href="#/project/${m.id}"><span class="st-dot">${icon("wrench", 14)}</span><span class="st-t"><small>Yakun</small>Loyiha</span></a>` : ""}
          ${m.test ? `<a class="st-item extra" href="#/test/${m.id}"><span class="st-dot">${icon("gamepad", 14)}</span><span class="st-t"><small>Yakun</small>Test</span></a>` : ""}
        </div>
        ${m.outcomes ? section("target", "Modul natijasi", "Modul oxirida o'quvchi nimalarni qila oladi?", "c-emerald",
          `<div class="checks-grid">${m.outcomes.map((o) => `<div class="check-row">${icon("check", 20, "c-emerald")}<span>${fmt(o)}</span></div>`).join("")}</div>`, "mb fade-in") : ""}
        <div class="list-head">
          <div><p class="kicker c-cyan">Lessons</p><h2 class="lh-title">Darslar ro'yxati</h2></div>
          <div class="count-box">${icon("list", 15, "c-cyan")} ${m.lessons.length} ta dars mavjud</div>
        </div>
        <div class="lesson-cards">${m.lessons.map((l, i) => lessonCard(m, l, i)).join("")}</div>
        <div class="list-head mt"><div><p class="kicker c-orange">Module yakuni</p><h2 class="lh-title">Loyiha va test</h2></div></div>
        <div class="end-cards">
          ${m.project ? `<a class="end-card" href="#/project/${m.id}"><div class="ec-ic c-orange">${icon("wrench", 28)}</div><div><p class="sec-label c-orange">Modul loyihasi</p><h3>${esc(m.project.title)}</h3><p>${fmt(m.project.description)}</p></div><div class="go-btn">${icon("arrow", 17)}</div></a>` : ""}
          ${m.test && m.test.length ? `<a class="end-card" href="#/test/${m.id}"><div class="ec-ic c-emerald">${icon("gamepad", 28)}</div><div><p class="sec-label c-emerald">Modul testi · ${m.test.length} savol</p><h3>Bilimni tekshirish</h3><p>Sinf bilan birga ekranda yechiladigan yakuniy test.</p></div><div class="go-btn">${icon("arrow", 17)}</div></a>` : ""}
        </div>
        <div class="pager">
          ${findModule(m.id - 1) ? `<a class="btn-glass" href="#/module/${m.id - 1}">${icon("back", 15)} ${esc(findModule(m.id - 1).title)}</a>` : "<span></span>"}
          ${findModule(m.id + 1) ? `<a class="btn-glass" href="#/module/${m.id + 1}">${esc(findModule(m.id + 1).title)} ${icon("arrow", 15)}</a>` : "<span></span>"}
        </div>
      </div>
    </div>`;
  }

  function lessonCard(m, l, i) {
    return `<div class="lc-wrap fade-up" style="animation-delay:${40 + i * 40}ms"><div class="lc-glow"></div>
      <div class="lc-border"><div class="lc-inner"><div class="lesson-card">
        <div class="lcard-top"><div class="lcard-ic">${isDone(l.id) ? icon("tick", 22) : icon("play", 22)}</div><span class="dur">${l.duration || 90} daqiqa</span></div>
        <p class="lcard-n">${l._global + 1}-dars · ${l._week}-hafta</p>
        <h3 class="lcard-t">${esc(l.title)}</h3>
        <p class="lcard-d">${(l.keywords || []).slice(0, 5).map(esc).join(" · ")}</p>
        <a class="lcard-btn" href="#/lesson/${l.id}">Dars rejasini ochish</a>
        <a class="lcard-btn2" href="#/present/${l.id}/0">${icon("present", 14)} Taqdimot</a>
      </div></div></div></div>`;
  }

  // ---------- Kontent bloklari (dars sahifasi va taqdimot uchun umumiy) ----------
  function renderBlock(s, ctx) {
    const [ic, label, color] = TYPE[s.type] || TYPE.text;
    const node = document.createElement("div");
    node.className = "block b-" + s.type;

    switch (s.type) {
      case "title": {
        const l = ctx.lesson, m = ctx.module;
        node.innerHTML = `<div class="title-block">
          <div class="tb-emoji">${esc(s.emoji || (m && m.icon) || "🐍")}</div>
          ${l ? `<span class="lesson-badge">${icon("sparkles", 16)} ${l._global + 1}-DARS • ${esc(m.title)}</span>` : ""}
          <h1 class="tb-title">${fmt(s.title)}</h1>
          ${s.subtitle ? `<p class="tb-sub">${fmt(s.subtitle)}</p>` : ""}
          ${ctx.isFirst && l && l.goals ? `<div class="tb-goals"><p class="sec-label c-cyan">Bugun o'rganamiz</p>${l.goals.map((g) => `<div class="check-row">${icon("check", 20, "c-emerald")}<span>${fmt(g)}</span></div>`).join("")}</div>` : ""}
        </div>`;
        break;
      }
      case "text":
        node.innerHTML = section(ic, label, fmt(s.title), color, `
          ${s.body ? `<p class="lead">${fmt(s.body)}</p>` : ""}
          ${s.points ? `<div class="step-grid">${s.points.map((p, i) => `<div class="step-card" style="--d:${i}"><div class="sc-n"><span>${pad(i + 1)}</span>${icon("arrow", 18, "c-cyan")}</div><p>${fmt(p)}</p></div>`).join("")}</div>` : ""}
          ${s.code ? staticCode(s.code) : ""}`);
        break;
      case "analogy":
        node.innerHTML = section(ic, label, fmt(s.title || "Hayotdan misol"), color, `
          <div class="analogy"><div class="an-emoji">${esc(s.emoji || "💡")}</div><p>${fmt(s.text || s.body)}</p></div>`);
        break;
      case "code":
        node.innerHTML = section(ic, label, fmt(s.title), color, `
          <div class="code-grid ${s.explain && s.explain.length ? "" : "full"}"><div class="code-slot"></div>
          ${s.explain && s.explain.length ? `<div class="explain">${s.explain.map((p, i) => `<div class="ex-item" style="--d:${i}"><span>${i + 1}</span><p>${fmt(p)}</p></div>`).join("")}</div>` : ""}</div>`);
        node.querySelector(".code-slot").appendChild(createEditor({ code: s.code, expected: s.output || "" }));
        break;
      case "compare": {
        const side = (k, d) => `<div class="cmp-side ${s.good === k ? "good" : s.good ? "bad" : ""}">
          <div class="cmp-label">${s.good === k ? icon("check", 18) : s.good ? icon("xcircle", 18) : ""} ${fmt(d.label || d.title || "")}</div>
          <div class="cmp-slot"></div>
          ${d.points ? `<ul class="mini-list">${d.points.map((p) => `<li>${fmt(p)}</li>`).join("")}</ul>` : ""}
          ${d.note ? `<p class="cmp-note">${fmt(d.note)}</p>` : ""}</div>`;
        node.innerHTML = section(ic, label, fmt(s.title), color, `
          <div class="cmp">${side("left", s.left || {})}${side("right", s.right || {})}</div>
          ${s.explain ? `<p class="note-box">${fmt(Array.isArray(s.explain) ? s.explain.join(" ") : s.explain)}</p>` : ""}`);
        const slots = node.querySelectorAll(".cmp-slot");
        [s.left, s.right].forEach((d, i) => { if (d && d.code) slots[i].appendChild(createEditor({ code: d.code, compact: true, title: i ? "B.py" : "A.py" })); });
        break;
      }
      case "quiz": {
        node.innerHTML = `<section class="glass-sec quiz-sec">${head("gamepad", ctx.quizLabel || "Mini Game", "Tezkor savol", "c-emerald")}
          <div class="quiz-card">
            <h4 class="quiz-q">${ctx.qNum ? ctx.qNum + ". " : ""}${fmt(s.question || s.q)}</h4>
            ${s.code ? staticCode(s.code) : ""}
            <div class="options">${(s.options || []).map((o, i) => `<button class="option" data-i="${i}"><span class="opt-ic">${icon("circle", 18)}</span><span class="opt-k">${"ABCD"[i]}</span><span class="opt-t">${fmt(o)}</span></button>`).join("")}</div>
            <div class="quiz-foot"><button class="btn-glass sm reveal">${icon("help", 15)} Javobni ko'rsatish</button></div>
            <div class="quiz-explain" hidden>${icon("bulb", 18, "c-yellow")} <span>${fmt(s.explain || "")}</span></div>
          </div></section>`;
        const opts = node.querySelectorAll(".option");
        const reveal = (picked) => {
          opts.forEach((b, i) => {
            const ok = i === s.answer, me = i === picked;
            b.classList.toggle("correct", ok);
            b.classList.toggle("wrong", me && !ok);
            b.querySelector(".opt-ic").innerHTML = ok ? icon("check", 18) : me ? icon("xcircle", 18) : icon("circle", 18);
            b.disabled = true;
            if (window.fx) { if (ok) fx.correct(b); else if (me) fx.wrong(b); }
          });
          if (s.explain) node.querySelector(".quiz-explain").hidden = false;
          ctx.onAnswer && ctx.onAnswer(picked === s.answer);
        };
        opts.forEach((b) => (b.onclick = () => reveal(+b.dataset.i)));
        node.querySelector(".reveal").onclick = () => reveal(-1);
        node._key = (k) => { const i = "1234abcd".indexOf(k.toLowerCase()) % 4; if (i >= 0 && opts[i] && !opts[0].disabled) reveal(i); };
        break;
      }
      case "task": {
        node.innerHTML = section(ic, label, fmt(s.title), color, `
          <div class="task-grid">
            <div>
              <p class="lead">${fmt(s.task)}</p>
              <div class="btn-row">
                ${s.hint ? `<button class="btn-glass sm" data-r="hint">${icon("bulb", 15)} Maslahat</button>` : ""}
                ${s.solution ? `<button class="btn-glass sm" data-r="sol">${icon("check", 15)} Yechimni ko'rsatish</button>` : ""}
              </div>
              <div class="hint-box" hidden>${icon("bulb", 18, "c-yellow")} <span>${fmt(s.hint)}</span></div>
            </div>
            <div class="task-code"></div>
          </div>`);
        const ed = createEditor({ code: s.starter || "# Kodingizni shu yerga yozing\n", title: "mashq.py" });
        node.querySelector(".task-code").appendChild(ed);
        node.querySelectorAll("[data-r]").forEach((b) => (b.onclick = () => {
          if (b.dataset.r === "hint") node.querySelector(".hint-box").hidden = false;
          else { ed.setCode(s.solution); ed.querySelector(".editor-title").textContent = "yechim.py"; b.innerHTML = icon("tick", 15) + " Yechim ko'rsatildi"; }
        }));
        break;
      }
      case "summary":
        node.innerHTML = `<section class="glass-sec dark-sec"><h3 class="ds-title">${fmt(s.title || "Dars oxirida o'quvchi nimalarni bilishi kerak?")}</h3>
          <div class="checks-grid">${(s.points || []).map((p, i) => `<div class="check-row hov" style="--d:${i}">${icon("check", 20, "c-emerald")}<span>${fmt(p)}</span></div>`).join("")}</div></section>`;
        break;
      case "homework":
        node.innerHTML = section("house", "Uyga vazifa", "Keyingi darsgacha bajariladi", "c-orange", `
          <div class="hw-teaser">
            <div class="hw-grid">${(s.items || []).map(hwCard).join("")}</div>
            ${ctx.present && ctx.lesson ? `<div class="btn-row center">
              <button class="btn-white" data-done>${icon("tick", 17)} ${isDone(ctx.lesson.id) ? "Dars o'tilgan" : "Darsni tugatdik"}</button>
              ${ctx.nextLesson ? `<a class="btn-glass" href="#/lesson/${ctx.nextLesson.id}">Keyingi dars: ${esc(ctx.nextLesson.title)} ${icon("arrow", 15)}</a>` : ""}
            </div>` : ""}
          </div>`);
        const d = node.querySelector("[data-done]");
        if (d) d.onclick = () => { setDone(ctx.lesson.id, true); d.innerHTML = icon("tick", 17) + " Ajoyib! Dars o'tildi 🎉"; };
        break;
      case "result":
        node.innerHTML = typeof s.html === "function" ? s.html() : s.html;
        break;
      default:
        node.innerHTML = section(ic, label, fmt(s.title), color, `<p class="lead">${fmt(s.body || s.text || "")}</p>`);
    }
    return node;
  }
  function hwCard(h) {
    const [t, c] = LEVEL[h.level] || [h.level || "", "lv-mid"];
    return `<div class="hw-card ${c}"><span class="hw-lv">${esc(t)}</span><p>${fmt(h.task)}</p></div>`;
  }
  const blockTitle = (s) => s.title || s.question || s.q || (TYPE[s.type] || [])[1] || "";

  // ---------- 4. Dars sahifasi ----------
  function viewLesson(l) {
    if (!l) return notFound("Dars topilmadi");
    if (cleanup) { cleanup(); cleanup = null; }
    const m = l._module;
    const first = l.slides[0] && l.slides[0].type === "title" ? l.slides[0] : null;
    const goals = l.goals || [];
    const plan = l.plan || [];
    const prev = LESSONS[l._global - 1], next = LESSONS[l._global + 1];
    const body = l.slides.map((s, i) => ({ s, i })).filter(({ s, i }) => !(i === 0 && s.type === "title"));
    // Mundarija bandlari
    const toc = [{ id: "sec-plan", t: "Dars yo'li", ic: "route", c: "c-cyan" }]
      .concat(body.map(({ s, i }, k) => ({ id: "blk-" + i, t: blockTitle(s), ic: (TYPE[s.type] || TYPE.text)[0], c: (TYPE[s.type] || TYPE.text)[2], n: k + 1 })))
      .concat(l.homework && l.homework.length ? [{ id: "sec-hw", t: "Uy vazifasi", ic: "house", c: "c-orange" }] : []);

    app.innerHTML = `
    <div class="read-progress"><div id="readBar"></div></div>
    <div class="page bg-950" style="${mvars(m.month)}">${glows()}
      <section class="wrap wide">
        ${crumbs(`#/module/${m.id}`, [[`#/section/${m.month}`, `${m.month}-oy`], [`#/module/${m.id}`, `${m.id}-modul`], ["", `${l._global + 1}-dars`]], `${l._week}-hafta`)}
        <section class="lesson-hero fade-up">
          <i class="lh-g1"></i><i class="lh-g2"></i>
          <div class="lh-grid">
            <div>
              <span class="lesson-badge">${icon("sparkles", 16)} ${l._global + 1}-DARS • ${esc(m.title)}</span>
              <h1 class="lh-h2">${esc(l.title)}</h1>
              <p class="lh-p">${fmt(first && first.subtitle ? first.subtitle : (goals[0] || ""))}</p>
              <div class="dv-grid">
                <div class="dv"><p>${icon("clock", 14)} Davomiylik</p><h3><span data-count="${l.duration || 90}">${l.duration || 90}</span> daqiqa</h3></div>
                <div class="dv"><p>${icon("calendar", 14)} Hafta</p><h3>${l._week}-hafta</h3></div>
                <div class="dv"><p>${icon("layers", 14)} Bosqichlar</p><h3><span data-count="${body.length}">${body.length}</span> ta</h3></div>
              </div>
              <div class="btn-row mt">
                <a class="btn-white" href="#/present/${l.id}/0">${icon("present", 18)} Taqdimotni boshlash</a>
                <button class="btn-glass" id="doneBtn">${isDone(l.id) ? icon("tick", 16) + " O'tilgan" : icon("circle", 16) + " O'tildi deb belgilash"}</button>
                <button class="btn-glass" onclick="window.print()">${icon("printer", 16)} Chop etish</button>
              </div>
            </div>
            <div class="mission" id="mission"></div>
          </div>
        </section>

        <div class="lesson-layout">
          <aside class="toc">
            <div class="toc-card">
              <div class="toc-head"><p class="kicker c-cyan">Dars tarkibi</p><span class="toc-pct" id="tocPct">0%</span></div>
              <div class="toc-bar"><div id="tocBar"></div></div>
              <nav class="toc-list">${toc.map((t) => `
                <a href="#${t.id}" data-target="${t.id}" class="toc-item"><span class="toc-ic ${t.c}">${icon(t.ic, 14)}</span>
                <span class="toc-t">${t.n ? `<b>${pad(t.n)}</b> ` : ""}${esc(String(t.t).replace(/[*`]/g, ""))}</span></a>`).join("")}
              </nav>
              <a class="btn-white toc-cta" href="#/present/${l.id}/0">${icon("play", 15)} Taqdimot</a>
            </div>
          </aside>

          <div class="stack lesson-main">
            ${l.keywords && l.keywords.length ? `<div class="kw-row fade-in"><span class="kw-label">Kalit so'zlar:</span>${l.keywords.map((k) => `<span class="kw">${esc(k)}</span>`).join("")}</div>` : ""}
            ${plan.length ? `<div id="sec-plan" class="anchor fade-in">${section("route", "Dars yo'li", "90 daqiqalik dars rejasi", "c-cyan",
              `<div class="timeline">${plan.map((p) => `<div style="flex:${p.time}" title="${esc(p.label)}"></div>`).join("")}</div>
               <div class="step-grid four">${plan.map((p, i) => `<div class="step-card"><div class="sc-n"><span>${pad(i + 1)}</span><b class="c-cyan">${p.time} daq</b></div><h4>${esc(p.label)}</h4></div>`).join("")}</div>`)}</div>` : ""}

            <div id="blocks" class="stack"></div>

            ${l.homework && l.homework.length ? `<div id="sec-hw" class="anchor fade-in">${section("house", "Uyga vazifa", "Keyingi darsgacha bajariladi", "c-orange", `<div class="hw-teaser"><div class="hw-grid">${l.homework.map(hwCard).join("")}</div></div>`)}</div>` : ""}
            ${next ? `<section class="glass-sec fade-in">${head("rocket", "Keyingi dars", "Keyingi darsda nima qilamiz?", "c-orange")}
              <div class="sec-body"><a class="teaser" href="#/lesson/${next.id}"><span class="muted">${next._global + 1}-dars · ${next._week}-hafta</span><h4>${esc(next.title)}</h4><div class="chips">${(next.keywords || []).slice(0, 6).map((k) => `<span class="chip warm">${esc(k)}</span>`).join("")}</div></a></div></section>` : ""}
            <div class="pager">
              ${prev ? `<a class="btn-glass" href="#/lesson/${prev.id}">${icon("back", 15)} ${esc(prev.title)}</a>` : "<span></span>"}
              ${next ? `<a class="btn-glass" href="#/lesson/${next.id}">${esc(next.title)} ${icon("arrow", 15)}</a>` : "<span></span>"}
            </div>
          </div>
        </div>
      </section>
    </div>`;

    // Lesson mission paneli (maqsadlar)
    const mission = document.getElementById("mission");
    const grads = [["#22d3ee", "#3b82f6"], ["#fb923c", "#ef4444"], ["#c084fc", "#ec4899"], ["#34d399", "#06b6d4"], ["#facc15", "#f97316"]];
    let active = 0;
    function drawMission(anim) {
      if (!goals.length) { mission.remove(); return; }
      const [a, b] = grads[active % grads.length];
      mission.innerHTML = `<i class="ms-g1"></i><i class="ms-g2"></i><div class="rel">
        <div class="ms-head"><div><p class="sec-label c-cyan">Lesson Mission</p><h3 class="sec-title">Bugungi maqsadlar</h3></div>
          <div class="ms-ic" style="background:linear-gradient(135deg,${a},${b})">${icon("target", 30)}</div></div>
        <div class="ms-card" style="background:linear-gradient(135deg,${a},${b})"><h4>${active + 1}-maqsad <small>/ ${goals.length}</small></h4><p>${fmt(goals[active])}</p></div>
        <div class="ms-list">${goals.map((g, i) => `<button class="ms-btn ${i === active ? "on" : ""}" data-i="${i}"><span>${i + 1}. ${fmt(g.length > 52 ? g.slice(0, 50) + "…" : g)}</span><span>${i === active ? "🚀" : "→"}</span></button>`).join("")}</div></div>`;
      mission.querySelectorAll(".ms-btn").forEach((b) => (b.onclick = () => { active = +b.dataset.i; drawMission(true); }));
      if (anim && window.fx) { fx.pop(mission.querySelector(".ms-card")); }
    }
    drawMission();

    // Bloklar — sahifada ketma-ket, raqamlangan
    const box = document.getElementById("blocks");
    body.forEach(({ s, i }, k) => {
      const wrap = document.createElement("div");
      wrap.className = "block-wrap anchor fade-in";
      wrap.id = "blk-" + i;
      const b = renderBlock(s, { lesson: l, module: m });
      const h = b.querySelector(".sec-head");
      if (h) h.insertAdjacentHTML("beforeend", `<span class="blk-n">${pad(k + 1)}<small>/${pad(body.length)}</small></span>`);
      wrap.appendChild(b);
      wrap.appendChild(html(`<div class="block-meta">
        <a href="#/present/${l.id}/${i}" class="bm-link">${icon("present", 14)} Shu yerdan taqdimot</a>
        ${s.notes ? `<details class="bm-notes"><summary>${icon("notes", 14)} O'qituvchi uchun izoh</summary><p>${fmt(s.notes)}</p></details>` : ""}
      </div>`));
      box.appendChild(wrap);
    });
    document.getElementById("doneBtn").onclick = () => { setDone(l.id, !isDone(l.id)); viewLesson(l); };

    // Mundarija: bosilganda silliq o'tish, scroll bo'yicha faol band va progress
    const items = Array.from(app.querySelectorAll(".toc-item"));
    items.forEach((a) => (a.onclick = (e) => {
      e.preventDefault();
      const t = document.getElementById(a.dataset.target);
      if (t) window.scrollTo({ top: t.getBoundingClientRect().top + scrollY - 90, behavior: "smooth" });
    }));
    const readBar = document.getElementById("readBar"), tocBar = document.getElementById("tocBar"), tocPct = document.getElementById("tocPct");
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const max = document.documentElement.scrollHeight - innerHeight;
        const p = max > 0 ? Math.min(100, Math.max(0, (scrollY / max) * 100)) : 0;
        readBar.style.width = p + "%"; tocBar.style.width = p + "%"; tocPct.textContent = Math.round(p) + "%";
        let cur = items[0];
        for (const a of items) { const t = document.getElementById(a.dataset.target); if (t && t.getBoundingClientRect().top < innerHeight * 0.35) cur = a; }
        items.forEach((a) => a.classList.toggle("on", a === cur));
        if (cur && cur._lastOn !== true) {
          items.forEach((a) => (a._lastOn = false)); cur._lastOn = true;
          const list = cur.parentElement, top = cur.offsetTop - list.clientHeight / 2;
          list.scrollTo({ top, behavior: "smooth" });
        }
      });
    }
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    cleanup = () => removeEventListener("scroll", onScroll);
  }

  // ---------- 5. Taqdimot rejimi ----------
  function presenter(opts) {
    document.body.classList.add("presenting");
    const slides = opts.slides;
    let idx = Math.max(0, Math.min(opts.startAt || 0, slides.length - 1));
    let showNotes = store.get("notes", false);
    let drawing = false;
    app.innerHTML = `
      <div class="present" style="${opts.vars || ""}">
        ${glows()}
        <div class="present-top">
          <a class="pt-x" href="${opts.backHref}" title="Chiqish (Esc)">${icon("x", 16)}</a>
          <span class="pt-title">${esc(opts.title)}</span>
          <span class="pt-type"></span>
        </div>
        <div class="stage"></div>
        <canvas class="draw-layer"></canvas>
        <aside class="notes" hidden><div class="notes-head">${icon("notes", 14)} O'qituvchi uchun izoh <small>(N — yashirish)</small></div><div class="notes-body"></div></aside>
        <div class="overview" hidden></div>
        <div class="present-bar">
          <button class="pb" data-a="prev" title="Oldingi (←)">${icon("back", 18)}</button>
          <div class="pb-progress"><div></div></div>
          <button class="pb" data-a="next" title="Keyingi (→ yoki Probel)">${icon("arrow", 18)}</button>
          <span class="pb-count"></span>
          <span class="pb-timer" title="Dars vaqti (T — qayta boshlash)">00:00</span>
          <button class="pb" data-a="grid" title="Barcha slaydlar (G)">${icon("grid", 17)}</button>
          <button class="pb" data-a="draw" title="Ekranga chizish (D)">${icon("pencil", 17)}</button>
          <button class="pb" data-a="notes" title="O'qituvchi izohi (N)">${icon("notes", 17)}</button>
          <button class="pb" data-a="full" title="To'liq ekran (F)">${icon("max", 17)}</button>
        </div>
      </div>`;
    const P = app.querySelector(".present"), stage = P.querySelector(".stage");
    const notesEl = P.querySelector(".notes"), notesBody = P.querySelector(".notes-body");
    const bar = P.querySelector(".pb-progress div"), count = P.querySelector(".pb-count");
    const typeEl = P.querySelector(".pt-type"), timerEl = P.querySelector(".pb-timer");
    const overview = P.querySelector(".overview"), canvas = P.querySelector(".draw-layer");
    let current = null, timerStart = Date.now();

    function show(i, dir) {
      idx = Math.max(0, Math.min(i, slides.length - 1));
      const s = slides[idx];
      const slide = document.createElement("div");
      slide.className = "slide " + (dir < 0 ? "enter-l" : "enter-r") + " s-" + s.type;
      const b = renderBlock(s, Object.assign({}, opts.ctx, { isFirst: idx === 0, present: true, qNum: s._n }));
      slide.appendChild(b);
      stage.innerHTML = "";
      stage.appendChild(slide);
      if (window.fx) fx.slide(slide, dir);
      current = b;
      bar.style.width = ((idx + 1) / slides.length) * 100 + "%";
      count.textContent = `${idx + 1} / ${slides.length}`;
      const T = TYPE[s.type];
      typeEl.innerHTML = T ? `${icon(T[0], 14)} ${T[1]}` : "";
      notesBody.innerHTML = s.notes ? fmt(s.notes) : "<i>Bu slayd uchun izoh yo'q.</i>";
      notesEl.hidden = !showNotes;
      P.classList.toggle("with-notes", showNotes);
      clearCanvas();
      opts.onChange && opts.onChange(idx);
    }
    const go = (d) => { if (idx + d >= 0 && idx + d < slides.length) show(idx + d, d); };
    function toggleNotes() { showNotes = !showNotes; store.set("notes", showNotes); notesEl.hidden = !showNotes; P.classList.toggle("with-notes", showNotes); }
    function toggleFull() {
      if (!document.fullscreenElement) document.documentElement.requestFullscreen && document.documentElement.requestFullscreen();
      else document.exitFullscreen && document.exitFullscreen();
    }
    function toggleGrid() {
      if (!overview.hidden) { overview.hidden = true; return; }
      overview.innerHTML = `<div class="ov-grid">${slides.map((s, i) => { const T = TYPE[s.type] || ["sparkles", "Natija", "c-cyan"];
        return `<button class="ov-item ${i === idx ? "cur" : ""}" data-i="${i}"><span class="ov-n">${pad(i + 1)}</span><span class="ov-t ${T[2]}">${icon(T[0], 13)} ${T[1]}</span><b>${esc(blockTitle(s))}</b></button>`; }).join("")}</div>`;
      overview.hidden = false;
      overview.querySelectorAll("[data-i]").forEach((b) => (b.onclick = () => { overview.hidden = true; show(+b.dataset.i, 1); }));
    }
    const ctx2 = canvas.getContext("2d");
    const sizeCanvas = () => { canvas.width = innerWidth; canvas.height = innerHeight; };
    const clearCanvas = () => ctx2.clearRect(0, 0, canvas.width, canvas.height);
    function toggleDraw() {
      drawing = !drawing;
      P.classList.toggle("drawing", drawing);
      P.querySelector('[data-a="draw"]').classList.toggle("on", drawing);
      if (!drawing) clearCanvas();
    }
    sizeCanvas();
    let pen = false;
    canvas.addEventListener("pointerdown", (e) => { pen = true; ctx2.beginPath(); ctx2.moveTo(e.clientX, e.clientY); });
    canvas.addEventListener("pointermove", (e) => {
      if (!pen) return;
      ctx2.lineTo(e.clientX, e.clientY);
      ctx2.strokeStyle = "#22d3ee"; ctx2.lineWidth = 4; ctx2.lineCap = "round"; ctx2.lineJoin = "round"; ctx2.stroke();
    });
    const penUp = () => (pen = false);
    addEventListener("pointerup", penUp);
    addEventListener("resize", sizeCanvas);

    P.querySelector(".present-bar").addEventListener("click", (e) => {
      const b = e.target.closest("[data-a]"); if (!b) return;
      ({ prev: () => go(-1), next: () => go(1), notes: toggleNotes, full: toggleFull, grid: toggleGrid, draw: toggleDraw })[b.dataset.a]();
    });
    function onKey(e) {
      if (e.target.closest && e.target.closest("textarea, input")) return;
      const k = e.key;
      if (k === "ArrowRight" || k === "PageDown" || k === " ") { e.preventDefault(); go(1); }
      else if (k === "ArrowLeft" || k === "PageUp") { e.preventDefault(); go(-1); }
      else if (k === "Home") show(0, -1);
      else if (k === "End") show(slides.length - 1, 1);
      else if (k === "n" || k === "N") toggleNotes();
      else if (k === "f" || k === "F") toggleFull();
      else if (k === "g" || k === "G") toggleGrid();
      else if (k === "d" || k === "D") toggleDraw();
      else if (k === "t" || k === "T") timerStart = Date.now();
      else if (k === "r" || k === "R") { const btn = current && current.querySelector('[data-act="run"]'); btn && btn.click(); }
      else if (k === "Escape") {
        if (!overview.hidden) overview.hidden = true;
        else if (drawing) toggleDraw();
        else if (!document.fullscreenElement) location.hash = opts.backHref;
      } else if (current && current._key) current._key(k);
    }
    document.addEventListener("keydown", onKey);
    let sx = null;
    stage.addEventListener("touchstart", (e) => (sx = e.touches[0].clientX), { passive: true });
    stage.addEventListener("touchend", (e) => {
      if (sx == null) return;
      const dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 60) go(dx < 0 ? 1 : -1);
      sx = null;
    });
    const tick = setInterval(() => {
      const sec = Math.floor((Date.now() - timerStart) / 1000);
      timerEl.textContent = `${pad(Math.floor(sec / 60))}:${pad(sec % 60)}`;
      const dur = (opts.duration || 0) * 60;
      timerEl.classList.toggle("warn", !!dur && sec > dur - 600 && sec <= dur);
      timerEl.classList.toggle("over", !!dur && sec > dur);
    }, 1000);

    show(idx, 1);
    cleanup = () => {
      document.removeEventListener("keydown", onKey);
      removeEventListener("resize", sizeCanvas);
      removeEventListener("pointerup", penUp);
      clearInterval(tick);
      if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen();
    };
    return { show, get index() { return idx; } };
  }

  function viewPresent(l, at) {
    if (!l) return notFound("Dars topilmadi");
    const slides = l.slides.slice();
    if (l.homework && l.homework.length) slides.push({ type: "homework", items: l.homework, notes: "Uy vazifasini daftarga yozdiring. Kamida 'oson' va 'o'rta' darajalar majburiy, 'qiyin' — ixtiyoriy (bonus ball)." });
    presenter({
      slides, startAt: at,
      title: `${l._global + 1}-dars · ${l.title}`,
      backHref: `#/lesson/${l.id}`,
      duration: l.duration || 90,
      vars: mvars(l._module.month),
      ctx: { lesson: l, module: l._module, nextLesson: LESSONS[l._global + 1] },
      onChange: (i) => history.replaceState(null, "", `#/present/${l.id}/${i}`),
    });
  }

  // ---------- 6. Modul testi ----------
  function viewTest(m) {
    if (!m || !m.test) return notFound();
    const score = { right: 0, answered: 0 }, seen = new Set();
    const slides = [{ type: "title", emoji: "📝", title: `${m.id}-modul testi`, subtitle: `${m.title} · ${m.test.length} ta savol · har biriga 1 daqiqa`, notes: "O'quvchilar javobni daftarga yozsin (A/B/C/D), keyin birga tekshiring yoki sinf bilan ovoz berib tanlang." }];
    m.test.forEach((t, i) => slides.push({ type: "quiz", question: t.q, code: t.code, options: t.options, answer: t.answer, explain: t.explain, notes: `To'g'ri javob: ${"ABCD"[t.answer]}`, _n: i + 1 }));
    slides.push({ type: "result", notes: "Eng ko'p xato qilingan savollarni qayta tushuntiring.", html: () => {
      const pct = Math.round((score.right / m.test.length) * 100);
      return `<div class="title-block"><div class="tb-emoji">${pct >= 80 ? "🏆" : pct >= 50 ? "👍" : "📚"}</div>
        <span class="lesson-badge">${icon("trophy", 16)} Test natijasi</span>
        <h1 class="tb-title">${score.right} / ${m.test.length}</h1>
        <p class="tb-sub">${score.answered ? (pct >= 80 ? "Zo'r! Modul mavzulari yaxshi o'zlashtirildi." : pct >= 50 ? "Yaxshi, lekin ba'zi mavzularni takrorlash kerak." : "Mavzularni yana bir bor takrorlaymiz.") : "Javoblar daftarda tekshirildi."}</p>
        <div class="btn-row center"><a class="btn-glass" href="#/module/${m.id}">${icon("back", 15)} Modulga qaytish</a>${m.project ? `<a class="btn-white" href="#/project/${m.id}">${icon("wrench", 16)} Loyihaga o'tish</a>` : ""}</div></div>`;
    } });
    const p = presenter({
      slides, title: `${m.id}-modul testi · ${m.title}`, backHref: `#/module/${m.id}`, vars: mvars(m.month),
      ctx: { module: m, quizLabel: "Modul testi", onAnswer: (ok) => { if (seen.has(p.index)) return; seen.add(p.index); score.answered++; if (ok) score.right++; } },
    });
  }

  // ---------- 7. Loyiha ----------
  function viewProject(m) {
    if (!m || !m.project) return notFound();
    const pr = m.project;
    app.innerHTML = `
    <div class="page bg-057" style="${mvars(m.month)}"><div class="bg-mod"><i class="tint"></i><i class="radials"></i><i class="gridlines"></i></div>
      <div class="wrap">
        ${crumbs(`#/module/${m.id}`, [[`#/section/${m.month}`, `${m.month}-oy`], [`#/module/${m.id}`, `${m.id}-modul`], ["", "Loyiha"]], "Project")}
        <div class="mod-hero fade-up"><i class="mh-tint"></i><i class="mh-g1"></i><i class="mh-g2"></i>
          <div class="rel"><div class="mh-row"><div class="mh-text">
            <span class="path-badge">${icon("wrench", 13, "c-orange")} Module ${m.id} loyihasi</span>
            <p class="mh-sub">${esc(m.title)}</p><h1 class="mh-title">${esc(pr.title)}</h1><p class="mh-desc">${fmt(pr.description)}</p>
          </div></div></div></div>
        <div class="stack">
          <div class="two">
            ${section("list", "Majburiy", "Talablar", "c-cyan", `<div class="checks-col">${(pr.requirements || []).map((r) => `<div class="check-row">${icon("check", 20, "c-emerald")}<span>${fmt(r)}</span></div>`).join("")}</div>`)}
            ${section("star", "Qo'shimcha ball", "Bonus g'oyalar", "c-yellow", `<div class="checks-col">${(pr.bonus || []).map((r) => `<div class="check-row">${icon("star", 20, "c-yellow")}<span>${fmt(r)}</span></div>`).join("")}</div>`)}
          </div>
          ${section("trophy", "Baholash", "Loyiha qanday baholanadi?", "c-purple", `<div class="dv-grid four">
            <div class="dv"><p>Ishlaydi, talablar bajarilgan</p><h3>40%</h3></div>
            <div class="dv"><p>Toza kod: nomlar, izohlar</p><h3>20%</h3></div>
            <div class="dv"><p>Xatolarga chidamli</p><h3>20%</h3></div>
            <div class="dv"><p>Himoya: kodni tushuntira oladi</p><h3>20%</h3></div></div>`)}
          ${pr.example ? section("code", "O'qituvchi uchun", "Namuna yechim", "c-orange", `<details class="solution"><summary>${icon("help", 15)} Namuna kodni ochish (o'quvchilarga oxirida ko'rsating)</summary><div id="exSlot"></div></details>`) : ""}
        </div>
      </div>
    </div>`;
    if (pr.example) document.getElementById("exSlot").appendChild(createEditor({ code: pr.example, title: "loyiha.py" }));
  }

  // ---------- 8. O'quv reja ----------
  function viewPlan() {
    app.innerHTML = `
    <div class="page bg-080">${glows()}
      <div class="wrap">
        <div class="list-head"><div><p class="kicker c-cyan">Syllabus</p><h1 class="lh-title big">O'quv reja</h1><p class="muted">4 oy · 16 hafta · haftasiga 2 dars (90 daqiqa) · har 2 haftada 1 modul, loyiha va test.</p></div>
          <button class="btn-glass" onclick="window.print()">${icon("printer", 16)} Chop etish</button></div>
        <div class="stack">${[1, 2, 3, 4].map((mo) => section("calendar", `${mo}-oy · ${MONTHS[mo].subtitle}`, `${MONTHS[mo].emoji} ${esc(MONTHS[mo].name)}`, "c-cyan",
          monthMods(mo).map((m) => `<div class="plan-mod">
            <a class="plan-mod-t" href="#/module/${m.id}"><span class="mc-num sm" style="${mvars(mo)}">${pad(m.id)}</span>${esc(m.title)} <span class="muted">· ${esc(m.weeks || "")}</span></a>
            <div class="table-wrap"><table class="plan-table"><thead><tr><th>Hafta</th><th>№</th><th>Dars mavzusi</th><th>Asosiy tushunchalar</th><th></th></tr></thead><tbody>
            ${m.lessons.map((l) => `<tr class="${isDone(l.id) ? "done" : ""}"><td>${l._week}</td><td>${l._global + 1}</td><td><a href="#/lesson/${l.id}">${esc(l.title)}</a></td>
              <td>${(l.keywords || []).map((k) => `<span class="kw sm">${esc(k)}</span>`).join("")}</td>
              <td>${isDone(l.id) ? icon("check", 18, "c-emerald") : `<a href="#/present/${l.id}/0" title="Taqdimot">${icon("play", 16)}</a>`}</td></tr>`).join("")}
            <tr class="extra"><td>${(parseInt(m.weeks, 10) || 1) + 1}</td><td>—</td><td colspan="3">${icon("wrench", 14, "c-orange")} Loyiha: <a href="#/project/${m.id}">${esc(m.project ? m.project.title : "")}</a> · ${icon("gamepad", 14, "c-emerald")} <a href="#/test/${m.id}">Modul testi</a></td></tr>
            </tbody></table></div></div>`).join(""))).join("")}
          ${section("reset", "Yangi guruh", "Progressni tozalash", "c-pink", `<p class="lead">Yangi guruh bilan boshlaganda barcha "o'tildi" belgilarini o'chiring.</p><button class="btn-glass" id="resetBtn">${icon("reset", 15)} Hammasini tozalash</button>`)}
        </div>
      </div>
    </div>`;
    document.getElementById("resetBtn").onclick = (e) => {
      const b = e.currentTarget;
      if (b.dataset.sure) { store.set("done", {}); viewPlan(); }
      else { b.dataset.sure = 1; b.textContent = "Ishonchingiz komilmi? Yana bosing"; }
    };
  }

  // ---------- 9. Kod maydoni ----------
  function viewPlayground() {
    const saved = store.get("playground", `# Bu yerda erkin kod yozishingiz mumkin 🐍\nism = "Python"\nfor i in range(3):\n    print(f"{i + 1}. Salom, {ism}!")\n`);
    app.innerHTML = `
    <div class="page bg-080">${glows()}
      <div class="wrap">
        <div class="list-head"><div><p class="kicker c-orange">Live coding</p><h1 class="lh-title big">Kod maydoni</h1><p class="muted">Darsda jonli kod yozish uchun. <b>Ctrl+Enter</b> — ishga tushirish. Kod avtomatik saqlanadi.</p></div></div>
        <div id="pgSlot" class="playground"></div>
      </div>
    </div>`;
    const ed = createEditor({ code: saved, title: "playground.py" });
    document.getElementById("pgSlot").appendChild(ed);
    const ta = ed.querySelector("textarea");
    ta.addEventListener("input", () => store.set("playground", ta.value));
    ta.focus();
  }

  // ---------- 10. Yordam ----------
  function viewHelp() {
    const keys = [["→ / Probel", "Keyingi slayd"], ["←", "Oldingi slayd"], ["F", "To'liq ekran"], ["N", "O'qituvchi izohlari"], ["G", "Barcha slaydlar"], ["D", "Ekranga chizish"], ["R", "Slayddagi kodni ishga tushirish"], ["T", "Taymerni qayta boshlash"], ["1–4", "Savolga javob"], ["Esc", "Chiqish"], ["Ctrl+Enter", "Muharrirda kodni ishga tushirish"]];
    app.innerHTML = `
    <div class="page bg-080">${glows()}
      <div class="wrap narrow">
        <div class="list-head"><div><p class="kicker c-cyan">Qo'llanma</p><h1 class="lh-title big">Platformadan foydalanish</h1></div></div>
        <div class="stack">
          ${section("route", "O'qituvchi uchun", "Darsni qanday o'tish kerak?", "c-cyan", `<div class="step-grid">${[
            "Darsdan oldin **Dars rejasi** sahifasini oching: maqsadlar, vaqt rejasi, slaydlar va o'qituvchi izohlari bilan tanishing.",
            "Sinfda **Taqdimotni boshlash** tugmasini bosing va **F** bilan to'liq ekranga o'ting.",
            "Kod slaydlarida **Ishga tushirish** ni bosing — kod brauzerning o'zida ishlaydi. Kodni o'zgartirib, o'quvchilar bilan tajriba qiling.",
            "Savollarda avval o'quvchilardan javob so'rang, keyin variantni bosing.",
            "Oxirgi slaydda uy vazifasini bering va **Darsni tugatdik** ni bosing.",
            "Har 2 haftada modul **testi** va **loyiha**sini o'tkazing."].map((t, i) => `<div class="step-card"><div class="sc-n"><span>${pad(i + 1)}</span>${icon("arrow", 18, "c-cyan")}</div><p>${fmt(t)}</p></div>`).join("")}</div>`)}
          ${section("present", "Taqdimot", "Klaviatura tugmalari", "c-purple", `<div class="keys">${keys.map(([k, t]) => `<div class="key-row"><kbd>${esc(k)}</kbd><span>${t}</span></div>`).join("")}</div>`)}
          ${section("terminal", "Python", "Kod qanday ishlaydi?", "c-orange", `<p class="lead">Kod brauzerda <b>Pyodide</b> orqali ishlaydi. Birinchi ishga tushirishda internet kerak (~10 MB bir marta yuklanadi). <code>input()</code> chaqirilganda oyna chiqadi. Cheksiz tsikl 6 soniyadan keyin avtomatik to'xtatiladi. Internet bo'lmasa, <b>Kutilgan natija</b> tugmasi bilan natijani ko'rsating.</p>`)}
          ${section("pencil", "Kontent", "Darslarni o'zgartirish", "c-emerald", `<p class="lead">Barcha darslar <code>js/modules/m01.js</code> … <code>m08.js</code> fayllarida. Formati <code>KONTENT_FORMATI.md</code> faylida yozilgan. Faylni o'zgartirib, sahifani yangilang.</p>`)}
        </div>
      </div>
    </div>`;
  }

  function notFound(msg) {
    app.innerHTML = `<div class="page bg-057 center-page"><div class="nf-card"><p class="nf-t">${esc(msg || "Sahifa topilmadi")}</p><p class="muted">Bunday sahifa mavjud emas yoki noto'g'ri link ochilgan.</p><a class="btn-white" href="#/">Bosh sahifaga qaytish</a></div></div>`;
  }

  route();
})();
