// Kod muharriri: rangli ko'rinish + tahrirlash + ishga tushirish
(function () {
  const { highlight, esc } = window.PyHighlight;

  function createEditor(opts) {
    const o = Object.assign({ code: "", expected: "", runnable: true, compact: false, title: "" }, opts);
    const wrap = document.createElement("div");
    wrap.className = "editor" + (o.compact ? " compact" : "");
    wrap.innerHTML = `
      <div class="editor-bar">
        <span class="dots"><i></i><i></i><i></i></span>
        <span class="editor-title">${esc(o.title || "main.py")}</span>
        <span class="editor-actions">
          <button class="btn-mini" data-act="copy" title="Nusxa olish">${icon("copy", 14)}</button>
          <button class="btn-mini" data-act="reset" title="Asl holatiga qaytarish">${icon("reset", 14)}</button>
          ${o.runnable ? `<button class="btn-run" data-act="run" title="Ishga tushirish (Ctrl+Enter)">${icon("play", 13)} Ishga tushirish</button>` : ""}
        </span>
      </div>
      <div class="editor-body">
        <pre class="editor-hl" aria-hidden="true"><code></code></pre>
        <textarea class="editor-ta" spellcheck="false" autocapitalize="off" autocomplete="off"></textarea>
      </div>
      <div class="editor-out" hidden>
        <div class="out-head"><span>Natija</span><span class="out-status"></span>
          ${o.expected ? `<button class="btn-mini" data-act="expected">Kutilgan natija</button>` : ""}
          <button class="btn-mini" data-act="clear">${icon("x", 14)}</button></div>
        <pre class="out-body"></pre>
      </div>`;

    const ta = wrap.querySelector(".editor-ta");
    const hl = wrap.querySelector(".editor-hl code");
    const hlPre = wrap.querySelector(".editor-hl");
    const outBox = wrap.querySelector(".editor-out");
    const outBody = wrap.querySelector(".out-body");
    const status = wrap.querySelector(".out-status");

    function render() {
      hl.innerHTML = highlight(ta.value) + "\n";
      const lines = ta.value.split("\n").length;
      wrap.style.setProperty("--lines", lines);
    }
    ta.value = o.code;
    render();

    ta.addEventListener("input", render);
    ta.addEventListener("scroll", () => { hlPre.scrollTop = ta.scrollTop; hlPre.scrollLeft = ta.scrollLeft; });
    ta.addEventListener("keydown", (e) => {
      e.stopPropagation(); // taqdimot tugmalari ishlamasin
      if (e.key === "Tab") {
        e.preventDefault();
        insert(e.shiftKey ? "" : "    ");
      } else if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        runCode();
      } else if (e.key === "Enter") {
        e.preventDefault();
        const before = ta.value.slice(0, ta.selectionStart);
        const line = before.split("\n").pop();
        let indent = line.match(/^\s*/)[0];
        if (/:\s*$/.test(line)) indent += "    ";
        insert("\n" + indent);
      } else if (e.key === "Escape") {
        ta.blur();
      }
    });

    function insert(text) {
      const s = ta.selectionStart, en = ta.selectionEnd;
      ta.value = ta.value.slice(0, s) + text + ta.value.slice(en);
      ta.selectionStart = ta.selectionEnd = s + text.length;
      render();
    }

    function append(kind, text) {
      const span = document.createElement("span");
      span.className = "out-" + kind;
      span.textContent = text;
      outBody.appendChild(span);
      outBody.scrollTop = outBody.scrollHeight;
    }

    async function runCode() {
      if (!o.runnable) return;
      outBox.hidden = false;
      outBody.textContent = "";
      status.textContent = "⏳";
      status.className = "out-status";
      try {
        const ok = await window.PyRunner.run(ta.value, append, (msg) => { status.textContent = msg; });
        status.textContent = ok ? "✅ Bajarildi" : "⚠️ Xato";
        status.className = "out-status " + (ok ? "ok" : "bad");
        if (!outBody.textContent) append("muted", "(hech narsa chiqarilmadi)");
      } catch (err) {
        status.textContent = "";
        append("err", "Python ishga tushmadi: " + err.message + "\nKutilgan natija tugmasini bosing.");
        if (o.expected) showExpected();
      }
    }

    function showExpected() {
      outBox.hidden = false;
      outBody.textContent = "";
      append("muted", "Kutilgan natija:\n");
      append("out", o.expected);
    }

    wrap.addEventListener("click", (e) => {
      const b = e.target.closest("[data-act]");
      if (!b) return;
      const act = b.dataset.act;
      if (act === "run") runCode();
      if (act === "reset") { ta.value = o.code; render(); }
      if (act === "clear") { outBox.hidden = true; }
      if (act === "expected") showExpected();
      if (act === "copy") {
        navigator.clipboard && navigator.clipboard.writeText(ta.value);
        b.innerHTML = icon("tick", 14); setTimeout(() => (b.innerHTML = icon("copy", 14)), 1000);
      }
    });

    wrap.setCode = (c) => { o.code = c; ta.value = c; render(); };
    wrap.getCode = () => ta.value;
    wrap.run = runCode;
    return wrap;
  }

  window.createEditor = createEditor;
})();
