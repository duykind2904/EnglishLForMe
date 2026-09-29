// Danh sách ngôn ngữ có thể học. Thêm ngôn ngữ mới = thêm 1 phần tử vào đây.
const LANGUAGES = [
  {
    flag: "🇬🇧",
    name: "Tiếng Anh",
    desc: "Đoạn văn, từ vựng, ngữ pháp và luyện nói mỗi ngày.",
    href: "english.html"
  },
  {
    flag: "🇨🇳",
    name: "Tiếng Trung",
    desc: "Chữ Hán, pinyin, ngữ pháp và luyện nói mỗi ngày.",
    href: "chinese.html"
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
