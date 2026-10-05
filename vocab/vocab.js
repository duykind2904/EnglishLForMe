function escapeAttr(text){
  return text.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function speakBtn(text){
  return `<button class="speak-btn" data-speak="${escapeAttr(text)}" title="Nghe phát âm" aria-label="Nghe phát âm">🔊</button>`;
}

let currentSpeakBtn = null;

// Trên điện thoại (nhất là Android), chỉ đặt utter.lang là chưa đủ: trình duyệt
// vẫn dùng giọng mặc định của máy (tiếng Việt). Phải chọn hẳn 1 giọng tiếng Anh.
const SPEAK_LANG = "en-US";
const SPEAK_LANG_PREFIXES = ["en-us", "en-gb", "en-au", "en"];
// Giọng đọc tự nhiên hay gặp trên iPhone/Mac, Windows, Android -> ưu tiên.
const GOOD_VOICE_NAMES = ["samantha", "ava", "allison", "susan", "zoe", "evan", "nathan", "tom", "daniel", "karen", "serena", "jenny", "aria", "guy"];
// Giọng "vui" của iPhone/Mac (cùng lang en-US nhưng đọc rất khó nghe) -> loại bỏ.
const NOVELTY_VOICE_NAMES = ["albert", "bad news", "bahh", "bells", "boing", "bubbles", "cellos", "deranged", "good news", "hysterical", "jester", "junior", "kathy", "organ", "pipe organ", "princess", "ralph", "superstar", "trinoids", "whisper", "wobble", "zarvox", "fred"];
// Giọng Eloquence (iOS 17+): đọc được nhưng giọng máy móc -> chỉ dùng khi không còn giọng nào khác.
const ELOQUENCE_VOICE_NAMES = ["eddy", "flo", "grandma", "grandpa", "reed", "rocko", "sandy", "shelley"];
const VOICE_STORAGE_KEY = "speakVoice:" + SPEAK_LANG;
let speakVoice = null;

function normLang(v){
  return (v.lang || "").toLowerCase().replace(/_/g, "-");
}

function langRank(v){
  const l = normLang(v);
  const i = SPEAK_LANG_PREFIXES.findIndex(p => l === p || l.startsWith(p + "-"));
  return i;
}

function voiceScore(v){
  const name = v.name.toLowerCase();
  let score = 0;
  if(/premium|cao cấp/.test(name)) score += 50;
  if(/enhanced|nâng cao/.test(name)) score += 40;
  if(/natural|online|neural/.test(name)) score += 40;
  if(/siri/.test(name)) score += 30;
  if(/google/.test(name)) score += 30;
  if(GOOD_VOICE_NAMES.some(g => name.includes(g))) score += 20;
  if(ELOQUENCE_VOICE_NAMES.includes(name.replace(/\s*\(.*$/, "").trim())) score -= 30;
  score -= langRank(v) * 5;
  return score;
}

function candidateVoices(){
  return window.speechSynthesis.getVoices()
    .filter(v => langRank(v) >= 0)
    .filter(v => !NOVELTY_VOICE_NAMES.includes(v.name.toLowerCase().replace(/\s*\(.*$/, "").trim()))
    .sort((a, b) => voiceScore(b) - voiceScore(a));
}

function pickVoice(){
  const voices = candidateVoices();
  const saved = localStorage.getItem(VOICE_STORAGE_KEY);
  return voices.find(v => v.voiceURI === saved) || voices[0] || null;
}

// Ô chọn giọng đọc trong header: máy nào giọng tự chọn chưa hay thì chọn tay.
function renderVoiceSelect(){
  const header = document.querySelector(".header");
  if(!header) return;
  const voices = candidateVoices();
  let row = document.getElementById("voiceRow");
  if(voices.length < 2){
    if(row) row.remove();
    return;
  }
  if(!row){
    row = document.createElement("div");
    row.id = "voiceRow";
    row.className = "day-select-row";
    row.innerHTML = `<label for="voicePicker">Giọng đọc:</label><select id="voicePicker"></select>`;
    const dayRow = header.querySelector(".day-select-row");
    dayRow ? dayRow.after(row) : header.prepend(row);
    row.querySelector("select").addEventListener("change", (e) => {
      localStorage.setItem(VOICE_STORAGE_KEY, e.target.value);
      speakVoice = pickVoice();
    });
  }
  const select = row.querySelector("select");
  select.innerHTML = voices.map(v =>
    `<option value="${escapeAttr(v.voiceURI)}">${escapeAttr(v.name)} (${v.lang})</option>`
  ).join("");
  if(speakVoice) select.value = speakVoice.voiceURI;
}

function refreshVoices(){
  speakVoice = pickVoice();
  renderVoiceSelect();
}

if("speechSynthesis" in window){
  refreshVoices();
  window.speechSynthesis.onvoiceschanged = refreshVoices;
}

function speak(text, btn){
  if(!("speechSynthesis" in window)){
    alert("Trình duyệt này không hỗ trợ phát âm (Text-to-Speech).");
    return;
  }
  if(!speakVoice) speakVoice = pickVoice();
  // Máy có danh sách giọng nhưng không có giọng tiếng Anh -> báo cách cài thay vì đọc giọng Việt.
  if(!speakVoice && window.speechSynthesis.getVoices().length > 0){
    alert("Máy chưa có giọng đọc tiếng Anh.\n\n" +
      "• Android: Cài đặt > Quản lý chung / Trợ năng > Chuyển văn bản thành giọng nói > Công cụ của Google > Cài đặt dữ liệu giọng nói > tải Tiếng Anh.\n" +
      "• iPhone: Cài đặt > Trợ năng > Nội dung được đọc > Giọng nói > tải giọng Tiếng Anh.\n\n" +
      "Nếu đang mở trong Zalo/Facebook, hãy mở bằng Chrome hoặc Safari.");
    return;
  }
  window.speechSynthesis.cancel();
  if(currentSpeakBtn) currentSpeakBtn.classList.remove("playing");

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = speakVoice ? speakVoice.lang : SPEAK_LANG;
  if(speakVoice) utter.voice = speakVoice;
  utter.rate = 0.9;
  utter.onend = () => btn && btn.classList.remove("playing");
  utter.onerror = () => btn && btn.classList.remove("playing");

  if(btn){
    btn.classList.add("playing");
    currentSpeakBtn = btn;
  }
  window.speechSynthesis.speak(utter);
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".speak-btn");
  if(!btn) return;
  speak(btn.dataset.speak, btn);
});

// ---------------- Học 3000 từ vựng ----------------
// Dữ liệu VOCAB nằm ở vocab-data.js (sinh từ file Excel bằng tools/build_vocab.py).

const LESSON_SIZE = 20;
const LEARNED_KEY = "vocab:learned";
const LESSON_KEY = "vocab:lesson";
const LESSON_COUNT = Math.ceil(VOCAB.length / LESSON_SIZE);

const learned = new Set(JSON.parse(localStorage.getItem(LEARNED_KEY) || "[]"));
let lessonIndex = Math.min(Number(localStorage.getItem(LESSON_KEY)) || 0, LESSON_COUNT - 1);

function escapeHtml(text){
  return String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function shuffle(arr){
  const a = arr.slice();
  for(let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function lessonWords(){
  return VOCAB.slice(lessonIndex * LESSON_SIZE, (lessonIndex + 1) * LESSON_SIZE);
}

function toggleLearned(id){
  learned.has(id) ? learned.delete(id) : learned.add(id);
  localStorage.setItem(LEARNED_KEY, JSON.stringify([...learned]));
  renderProgress();
  renderLessonPicker();
}

function learnedBtn(id){
  const on = learned.has(id);
  return `<button class="vc-learned-btn${on ? " on" : ""}" data-learned="${id}">${on ? "✓ Đã thuộc" : "Đánh dấu đã thuộc"}</button>`;
}

function meaningHtml(v){
  return v.vi
    ? `<div class="vi">${v.type ? `<span class="vc-type">${escapeHtml(v.type)}</span>` : ""}${escapeHtml(v.vi)}</div>`
    : `<div class="vc-missing">Chưa có nghĩa trong file Excel</div>`;
}

function examplesHtml(v){
  if(!v.ex.length) return "";
  return `<ul class="vc-examples">` +
    v.ex.map(e => `<li><span>${escapeHtml(e)}</span>${speakBtn(e)}</li>`).join("") +
    `</ul>`;
}

// ---------- Header ----------
function renderProgress(){
  const pct = learned.size / VOCAB.length * 100;
  document.getElementById("progressLabel").textContent = `Đã thuộc ${learned.size} / ${VOCAB.length} từ`;
  document.getElementById("progressBar").style.width = pct + "%";
}

const lessonPicker = document.getElementById("lessonPicker");

function renderLessonPicker(){
  let html = "";
  for(let i = 0; i < LESSON_COUNT; i++){
    const words = VOCAB.slice(i * LESSON_SIZE, (i + 1) * LESSON_SIZE);
    const done = words.filter(w => learned.has(w.id)).length;
    const mark = done === words.length ? " ✓" : done ? ` (${done}/${words.length})` : "";
    html += `<option value="${i}">Bài ${i + 1}: ${escapeHtml(words[0].w)} – ${escapeHtml(words[words.length - 1].w)}${mark}</option>`;
  }
  lessonPicker.innerHTML = html;
  lessonPicker.value = lessonIndex;
}

lessonPicker.addEventListener("change", () => {
  lessonIndex = Number(lessonPicker.value);
  localStorage.setItem(LESSON_KEY, lessonIndex);
  listSearch = "";
  renderList();
  startFlash();
  startQuiz();
});

// ---------- Tab Danh sách ----------
const LIST_LIMIT = 200;
let listSearch = "";
let hideLearned = false;

function renderList(){
  const panel = document.getElementById("panel-list");
  const q = listSearch.trim().toLowerCase();
  // Có từ khóa -> tìm trong cả 3000 từ; không có -> chỉ hiện bài đang chọn.
  let words = q
    ? VOCAB.filter(v => v.w.toLowerCase().includes(q) || v.vi.toLowerCase().includes(q))
    : lessonWords();
  if(hideLearned) words = words.filter(v => !learned.has(v.id));

  panel.innerHTML = `<div class="card vc-toolbar">
      <input type="search" id="vocabSearch" placeholder="Tìm trong cả 3000 từ (Anh hoặc Việt)..." value="${escapeHtml(listSearch)}">
      <label><input type="checkbox" id="hideLearned" ${hideLearned ? "checked" : ""}> Ẩn từ đã thuộc</label>
    </div>
    <div class="card">
      ${q ? `<p class="vc-note">Tìm thấy ${words.length} từ.</p>` : ""}
      ${words.length ? words.slice(0, LIST_LIMIT).map(v => `
        <div class="sentence-block${learned.has(v.id) ? " is-learned" : ""}">
          <div class="vc-word-head">
            <div class="en-row">
              <span class="vc-no">${v.id}</span>
              <div class="en">${escapeHtml(v.w)}</div>
              ${speakBtn(v.w)}
            </div>
            ${learnedBtn(v.id)}
          </div>
          ${v.ipa ? `<div class="phonetic">${escapeHtml(v.ipa)}</div>` : ""}
          ${meaningHtml(v)}
          ${examplesHtml(v)}
        </div>`).join("") : `<div class="empty">Không có từ nào.</div>`}
      ${words.length > LIST_LIMIT ? `<p class="vc-note">Chỉ hiện ${LIST_LIMIT} kết quả đầu tiên, hãy gõ cụ thể hơn.</p>` : ""}
    </div>`;

  const search = document.getElementById("vocabSearch");
  search.addEventListener("input", () => {
    listSearch = search.value;
    renderList();
    const s = document.getElementById("vocabSearch");
    s.focus();
    s.setSelectionRange(s.value.length, s.value.length);
  });
  document.getElementById("hideLearned").addEventListener("change", (e) => {
    hideLearned = e.target.checked;
    renderList();
  });
}

// ---------- Tab Flashcard ----------
let flashWords = [];
let flashPos = 0;
let flashFlipped = false;
let flashOnlyUnlearned = false;

function startFlash(shuffled){
  flashWords = lessonWords();
  if(flashOnlyUnlearned) flashWords = flashWords.filter(v => !learned.has(v.id));
  if(shuffled) flashWords = shuffle(flashWords);
  flashPos = 0;
  flashFlipped = false;
  renderFlash();
}

function renderFlash(){
  const panel = document.getElementById("panel-flash");
  const v = flashWords[flashPos];
  const options = `<div class="card vc-toolbar">
      <label><input type="checkbox" id="flashOnlyUnlearned" ${flashOnlyUnlearned ? "checked" : ""}> Chỉ học từ chưa thuộc</label>
      <button class="vc-btn" id="flashShuffle">🔀 Trộn thẻ</button>
    </div>`;

  if(!v){
    panel.innerHTML = options + `<div class="card empty">Bạn đã thuộc hết từ trong bài này! 🎉</div>`;
  }else{
    panel.innerHTML = options + `
      <div class="card vc-flashcard" id="flashCard">
        <div class="vc-count">${flashPos + 1} / ${flashWords.length}</div>
        <div class="vc-big-word">${escapeHtml(v.w)} ${speakBtn(v.w)}</div>
        ${v.ipa ? `<div class="phonetic">${escapeHtml(v.ipa)}</div>` : ""}
        ${flashFlipped
          ? `<div class="vc-flash-back">${meaningHtml(v)}${examplesHtml(v)}</div>`
          : `<div class="vc-flash-hint">Bấm vào thẻ (hoặc phím cách) để xem nghĩa</div>`}
      </div>
      <div class="vc-nav">
        <button class="vc-btn" id="flashPrev" ${flashPos === 0 ? "disabled" : ""}>← Trước</button>
        ${learnedBtn(v.id)}
        <button class="vc-btn" id="flashNext" ${flashPos === flashWords.length - 1 ? "disabled" : ""}>Sau →</button>
      </div>`;

    document.getElementById("flashCard").addEventListener("click", (e) => {
      if(e.target.closest(".speak-btn")) return;
      flipFlash();
    });
    document.getElementById("flashPrev").addEventListener("click", () => moveFlash(-1));
    document.getElementById("flashNext").addEventListener("click", () => moveFlash(1));
  }

  document.getElementById("flashOnlyUnlearned").addEventListener("change", (e) => {
    flashOnlyUnlearned = e.target.checked;
    startFlash();
  });
  document.getElementById("flashShuffle").addEventListener("click", () => startFlash(true));
}

function flipFlash(){
  flashFlipped = !flashFlipped;
  renderFlash();
}

function moveFlash(step){
  const next = flashPos + step;
  if(next < 0 || next >= flashWords.length) return;
  flashPos = next;
  flashFlipped = false;
  renderFlash();
}

document.addEventListener("keydown", (e) => {
  if(!document.getElementById("panel-flash").classList.contains("active")) return;
  if(e.target.matches("input, select, textarea, button")) return;
  if(e.key === "ArrowLeft") moveFlash(-1);
  else if(e.key === "ArrowRight") moveFlash(1);
  else if(e.key === " "){
    e.preventDefault();
    flipFlash();
  }
});

// ---------- Tab Kiểm tra ----------
// Chỉ kiểm tra được những từ đã có nghĩa tiếng Việt.
const WITH_MEANING = VOCAB.filter(v => v.vi);
let quizMode = "en-vi"; // en-vi: nhìn từ chọn nghĩa; vi-en: nhìn nghĩa chọn từ
let quiz = null;

function startQuiz(){
  const words = shuffle(lessonWords().filter(v => v.vi));
  quiz = {
    questions: words.map(v => ({
      word: v,
      options: shuffle([v, ...shuffle(WITH_MEANING.filter(o => o.id !== v.id && o.vi !== v.vi && o.w !== v.w)).slice(0, 3)])
    })),
    pos: 0,
    score: 0,
    answered: null
  };
  renderQuiz();
}

function renderQuiz(){
  const panel = document.getElementById("panel-quiz");
  const modeBar = `<div class="card vc-toolbar">
      <label><input type="radio" name="quizMode" value="en-vi" ${quizMode === "en-vi" ? "checked" : ""}> Anh → Việt</label>
      <label><input type="radio" name="quizMode" value="vi-en" ${quizMode === "vi-en" ? "checked" : ""}> Việt → Anh</label>
      <button class="vc-btn" id="quizRestart">↻ Làm lại</button>
    </div>`;

  if(!quiz.questions.length){
    panel.innerHTML = modeBar + `<div class="card empty">Các từ trong bài này chưa có nghĩa tiếng Việt trong file Excel nên chưa kiểm tra được.</div>`;
  }else if(quiz.pos >= quiz.questions.length){
    const perfect = quiz.score === quiz.questions.length;
    panel.innerHTML = modeBar + `<div class="card empty vc-quiz-result">
        Kết quả: <b>${quiz.score} / ${quiz.questions.length}</b> câu đúng${perfect ? "<br>Xuất sắc! 🎉" : ""}
      </div>`;
  }else{
    const q = quiz.questions[quiz.pos];
    const asked = quizMode === "en-vi"
      ? `<div class="vc-big-word">${escapeHtml(q.word.w)} ${speakBtn(q.word.w)}</div>
         ${q.word.ipa ? `<div class="phonetic">${escapeHtml(q.word.ipa)}</div>` : ""}`
      : `<div class="vc-big-word vc-quiz-vi">${escapeHtml(q.word.vi)}</div>
         ${q.word.type ? `<div class="phonetic">${escapeHtml(q.word.type)}</div>` : ""}`;

    panel.innerHTML = modeBar + `<div class="card">
        <div class="vc-count">Câu ${quiz.pos + 1} / ${quiz.questions.length} · Đúng ${quiz.score}</div>
        ${asked}
        <div class="vc-options">
          ${q.options.map(o => {
            let cls = "vc-option";
            if(quiz.answered !== null){
              if(o.id === q.word.id) cls += " correct";
              else if(o.id === quiz.answered) cls += " wrong";
            }
            return `<button class="${cls}" data-answer="${o.id}" ${quiz.answered !== null ? "disabled" : ""}>${escapeHtml(quizMode === "en-vi" ? o.vi : o.w)}</button>`;
          }).join("")}
        </div>
        ${quiz.answered !== null ? `<div class="vc-nav"><button class="vc-btn primary" id="quizNext">Câu tiếp →</button></div>` : ""}
      </div>`;

    panel.querySelectorAll("[data-answer]").forEach(b => b.addEventListener("click", () => {
      quiz.answered = Number(b.dataset.answer);
      if(quiz.answered === q.word.id) quiz.score++;
      if(quizMode === "vi-en") speak(q.word.w);
      renderQuiz();
    }));
    const next = document.getElementById("quizNext");
    if(next) next.addEventListener("click", () => {
      quiz.pos++;
      quiz.answered = null;
      renderQuiz();
    });
  }

  panel.querySelectorAll("input[name=quizMode]").forEach(r => r.addEventListener("change", () => {
    quizMode = r.value;
    startQuiz();
  }));
  document.getElementById("quizRestart").addEventListener("click", startQuiz);
}

// ---------- Chung ----------
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-learned]");
  if(!btn) return;
  toggleLearned(Number(btn.dataset.learned));
  renderList();
  if(flashOnlyUnlearned){
    // Giữ nguyên vị trí: từ vừa thuộc biến mất, thẻ kế tiếp trượt vào chỗ cũ.
    const pos = flashPos;
    startFlash();
    flashPos = Math.min(pos, Math.max(flashWords.length - 1, 0));
    renderFlash();
  }else{
    renderFlash();
  }
});

document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("panel-" + btn.dataset.tab).classList.add("active");
  });
});

renderProgress();
renderLessonPicker();
renderList();
startFlash();
startQuiz();

