// Danh sách ngôn ngữ có thể học. Thêm ngôn ngữ mới = thêm 1 phần tử vào đây.
const LANGUAGES = [
  {
    flag: "🇬🇧",
    name: "Tiếng Anh",
    desc: "Đoạn văn, từ vựng, ngữ pháp và luyện nói mỗi ngày.",
    href: "english/english.html"
  },
  {
    flag: "📚",
    name: "3000 Từ Vựng Tiếng Anh",
    desc: "Học theo bài 20 từ: danh sách, flashcard và kiểm tra trắc nghiệm.",
    href: "vocab/vocab.html"
  },
  {
    flag: "🇨🇳",
    name: "Tiếng Trung",
    desc: "Chữ Hán, pinyin, ngữ pháp và luyện nói mỗi ngày.",
    href: "chinese/chinese.html"
  }
];

const langGrid = document.getElementById("langGrid");
langGrid.innerHTML = LANGUAGES.map(l => `
  <a class="lang-card" href="${l.href}">
    <div class="lang-flag">${l.flag}</div>
    <div class="lang-name">${l.name}</div>
    <div class="lang-desc">${l.desc}</div>
  </a>
`).join("");
