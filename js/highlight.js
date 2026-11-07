// Oddiy Python sintaksis ranglagich (tashqi kutubxonasiz)
(function () {
  const KEYWORDS = new Set(("False None True and as assert async await break class continue def del elif else except " +
    "finally for from global if import in is lambda nonlocal not or pass raise return try while with yield match case").split(" "));
  const BUILTINS = new Set(("print input int float str bool len range type list dict set tuple sum min max abs round " +
    "sorted reversed enumerate zip map filter open isinstance super self divmod any all chr ord id help").split(" "));

  const TOKEN = /(#[^\n]*)|([rRbBfF]{0,2}"""[\s\S]*?"""|[rRbBfF]{0,2}'''[\s\S]*?'''|[rRbBfF]{0,2}"(?:\\.|[^"\\\n])*"?|[rRbBfF]{0,2}'(?:\\.|[^'\\\n])*'?)|(\b\d+(?:\.\d+)?\b)|([A-Za-z_][A-Za-z0-9_]*)|(@\w+)|([^\sA-Za-z0-9_#'"]+)|(\s+)/g;

  function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function highlight(code) {
    let out = "";
    let m;
    let prevWord = "";
    TOKEN.lastIndex = 0;
    while ((m = TOKEN.exec(code)) !== null) {
      const [t, com, strg, num, word, deco, op] = m;
      if (com) out += `<span class="tk-com">${esc(t)}</span>`;
      else if (strg) out += `<span class="tk-str">${esc(t)}</span>`;
      else if (num) out += `<span class="tk-num">${esc(t)}</span>`;
      else if (word) {
        if (KEYWORDS.has(word)) out += `<span class="tk-kw">${word}</span>`;
        else if (prevWord === "def" || prevWord === "class") out += `<span class="tk-fn">${word}</span>`;
        else if (BUILTINS.has(word)) out += `<span class="tk-bi">${word}</span>`;
        else if (code[TOKEN.lastIndex] === "(") out += `<span class="tk-call">${word}</span>`;
        else out += esc(word);
        prevWord = word;
        continue;
      } else if (deco) out += `<span class="tk-kw">${esc(t)}</span>`;
      else if (op) out += `<span class="tk-op">${esc(t)}</span>`;
      else out += esc(t);
      if (!/^\s+$/.test(t)) prevWord = "";
    }
    return out;
  }

  window.PyHighlight = { highlight, esc };
})();
