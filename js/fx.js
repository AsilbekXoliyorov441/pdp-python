// Animatsiyalar: Motion (Framer Motion'ning vanilla JS versiyasi)
// Kutubxona yuklanmasa yoki foydalanuvchi animatsiyani o'chirgan bo'lsa — hamma narsa animatsiyasiz ko'rinadi.
(function () {
  const M = window.Motion;
  const ok = !!(M && M.animate) && "IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches;
  const SPRING = { type: "spring", stiffness: 240, damping: 26, mass: 0.9 };
  const SOFT = { duration: 0.5, easing: [0.22, 1, 0.36, 1] };
  const list = (els) => (els ? Array.from(els.length != null ? els : [els]) : []).filter(Boolean);

  // Elementlarni pastdan yuqoriga, navbat bilan chiqarish (stagger)
  function enter(els, o = {}) {
    els = list(els);
    if (!ok || !els.length) return;
    M.animate(els, { opacity: [0, 1], y: [o.y ?? 22, 0], scale: [o.scale ?? 1, 1] },
      { ...SPRING, delay: M.stagger(o.stagger ?? 0.06, { startDelay: o.delay ?? 0 }) });
  }

  // Ekranga kirganda chiqadigan bloklar (scroll reveal)
  const CHILDREN = ".step-card, .check-row, .ex-item, .hw-card, .option, .dv, .cmp-side, .flow-step, .rm-week";
  function reveal(els) {
    els = list(els);
    if (!ok) return;
    els.forEach((el) => {
      el.style.opacity = "0";
      M.inView(el, () => {
        M.animate(el, { opacity: [0, 1], y: [36, 0] }, SPRING);
        enter(el.querySelectorAll(CHILDREN), { y: 16, stagger: 0.05, delay: 0.08 });
      }, { margin: "0px 0px -8% 0px" });
    });
  }

  // Raqamlarni 0 dan sanab chiqish
  function counters(root) {
    if (!ok) return;
    root.querySelectorAll("[data-count]").forEach((el) => {
      const to = +el.dataset.count;
      M.animate(0, to, { duration: 1.1, easing: [0.22, 1, 0.36, 1], onUpdate: (v) => (el.textContent = Math.round(v)) });
    });
  }

  // Progress chiziqlarini to'ldirish
  function bars(root) {
    if (!ok) return;
    root.querySelectorAll("[data-bar]").forEach((el, i) => {
      M.animate(el, { width: ["0%", el.dataset.bar + "%"] }, { duration: 0.9, delay: 0.3 + i * 0.08, easing: [0.22, 1, 0.36, 1] });
    });
  }

  // Har bir sahifa ochilganda
  function page(root) {
    if (!ok) return;
    M.animate(root, { opacity: [0, 1] }, { duration: 0.25 });
    enter(root.querySelectorAll(".fade-down"), { y: -10 });
    enter(root.querySelectorAll(".fade-up, .stat-chip, .track-card, .mission"), { delay: 0.05 });
    reveal(root.querySelectorAll(".fade-in"));
    counters(root);
    bars(root);
  }

  // Taqdimot: slayd almashishi
  function slide(el, dir) {
    if (!ok) return;
    M.animate(el, { opacity: [0, 1], x: [dir < 0 ? -60 : 60, 0] }, SPRING);
    enter(el.querySelectorAll(".sec-head, .tb-emoji, .lesson-badge, .tb-title, .tb-sub, .lead"), { y: 14, stagger: 0.05, delay: 0.05 });
    enter(el.querySelectorAll(CHILDREN + ", .editor, .code-static, .analogy, .quiz-q"), { y: 18, stagger: 0.05, delay: 0.15 });
  }

  // Savol: to'g'ri / noto'g'ri javob
  function correct(el) { if (ok) M.animate(el, { scale: [1, 1.05, 1] }, { duration: 0.45 }); }
  function wrong(el) { if (ok) M.animate(el, { x: [0, -8, 8, -6, 6, 0] }, { duration: 0.4 }); }
  function pop(el) { if (ok) M.animate(el, { opacity: [0, 1], scale: [0.94, 1], x: [24, 0] }, SPRING); }

  window.fx = { ok, enter, reveal, page, slide, correct, wrong, pop, counters, bars };
})();
