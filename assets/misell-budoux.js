document.addEventListener('DOMContentLoaded', () => {
  // h1とh2タグをすべて選択
  const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  // 各ヘッダーをループ処理
  headers.forEach((header) => {
    const content = header.innerHTML;
    header.innerHTML = `<budoux-ja>${content}</budoux-ja>`;
  });
});