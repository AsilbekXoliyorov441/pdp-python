// Brauzerda Python ishga tushirish (Pyodide). Birinchi marta internet kerak.
(function () {
  const PYODIDE_URL = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/";
  let loading = null;
  let py = null;

  const BOOT = `
import sys, time, builtins, traceback, js

class _Out:
    def __init__(self, kind): self.kind = kind
    def write(self, s):
        _emit(self.kind, s)
        return len(s)
    def flush(self): pass

_LIMIT = 6.0
_start = [0.0]

def _tracer(frame, event, arg):
    if time.time() - _start[0] > _LIMIT:
        raise TimeoutError("Kod juda uzoq ishladi (cheksiz tsikl bo'lishi mumkin)")
    return _tracer

def _input(prompt=""):
    prompt = str(prompt)
    r = js.prompt(prompt if prompt else "Qiymat kiriting:")
    if r is None:
        r = ""
    print(prompt + r)
    _start[0] = time.time()
    return r

_HINTS = {
    "SyntaxError": "Sintaksis xatosi: qavs, ikki nuqta (:) yoki qo'shtirnoq tushib qolgan bo'lishi mumkin.",
    "IndentationError": "Chekinish (bo'sh joy) xatosi: blok ichidagi qatorlar bir xil surilgan bo'lishi kerak.",
    "NameError": "Bunday nom topilmadi: o'zgaruvchi e'lon qilinmagan yoki nomi xato yozilgan.",
    "TypeError": "Tur xatosi: mos kelmaydigan turlar bilan amal bajarilmoqda (masalan, son + matn).",
    "ValueError": "Qiymat xatosi: masalan, int() ga son bo'lmagan matn berildi.",
    "ZeroDivisionError": "Nolga bo'lish mumkin emas!",
    "IndexError": "Indeks chegaradan tashqarida: bunday tartib raqamli element yo'q.",
    "KeyError": "Lug'atda bunday kalit yo'q.",
    "AttributeError": "Bu obyektda bunday metod yoki xususiyat yo'q.",
    "FileNotFoundError": "Fayl topilmadi.",
    "TimeoutError": "Tsikl to'xtamayapti — shartni tekshiring.",
    "RecursionError": "Rekursiya juda chuqur — to'xtash sharti (base case) bormi?",
}

def _run(src):
    g = {"__name__": "__main__"}
    old_out, old_err, old_in = sys.stdout, sys.stderr, builtins.input
    sys.stdout, sys.stderr = _Out("out"), _Out("err")
    builtins.input = _input
    _start[0] = time.time()
    ok = True
    try:
        code = compile(src, "<kod>", "exec")
        sys.settrace(_tracer)
        try:
            exec(code, g)
        finally:
            sys.settrace(None)
    except SystemExit:
        pass
    except BaseException as e:
        ok = False
        name = type(e).__name__
        line = None
        if isinstance(e, SyntaxError):
            line = e.lineno
        else:
            for fr in traceback.extract_tb(e.__traceback__):
                if fr.filename == "<kod>":
                    line = fr.lineno
        where = f" ({line}-qator)" if line else ""
        _emit("err", f"\\n❌ {name}{where}: {e}\\n")
        if name in _HINTS:
            _emit("hint", "💡 " + _HINTS[name] + "\\n")
    finally:
        sys.stdout, sys.stderr = old_out, old_err
        builtins.input = old_in
    return ok
`;

  function load(onStatus) {
    if (py) return Promise.resolve(py);
    if (loading) return loading;
    loading = new Promise((resolve, reject) => {
      onStatus && onStatus("Python yuklanmoqda… (birinchi marta 5-15 soniya)");
      const s = document.createElement("script");
      s.src = PYODIDE_URL + "pyodide.js";
      s.onload = async () => {
        try {
          const p = await window.loadPyodide({ indexURL: PYODIDE_URL });
          p.runPython(BOOT);
          py = p;
          resolve(p);
        } catch (e) { loading = null; reject(e); }
      };
      s.onerror = () => { loading = null; reject(new Error("Internet yo'q: Python yuklanmadi")); };
      document.head.appendChild(s);
    });
    return loading;
  }

  // onOut(kind, text): kind = "out" | "err" | "hint"
  async function run(code, onOut, onStatus) {
    const p = await load(onStatus);
    let buf = 0;
    p.globals.set("_emit", (kind, s) => {
      buf += s.length;
      if (buf > 200000) return; // juda ko'p chiqish bo'lsa to'xtatamiz
      onOut(kind, s);
    });
    const runner = p.globals.get("_run");
    try { return runner(code); }
    finally { runner.destroy && runner.destroy(); }
  }

  window.PyRunner = { load, run, isReady: () => !!py };
})();
