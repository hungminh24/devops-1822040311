// Cập nhật năm ở chân trang bằng JavaScript.
const yearElement = document.getElementById('current-year');
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}
