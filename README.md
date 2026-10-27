# Bài thực hành DevOps – GitHub Actions

**Sinh viên:** Dương Minh Hùng  
**MSSV:** 1822040311

## Cấu trúc dự án

```text
devops-1822040311/
├── index.html
├── style.css
├── script.js
└── .github/
    └── workflows/
        └── deploy.yml
```

## Chạy thử trên máy

Mở `index.html` trực tiếp trong trình duyệt hoặc dùng tiện ích Live Server trong VS Code.

## Cấu hình workflow

Workflow chạy khi có `push` lên `main` hoặc khi bấm chạy thủ công. Job `check` kiểm tra ba file và yêu cầu `index.html` có thẻ `<title>` không rỗng. Job `deploy` có `needs: check`, nên sẽ bị bỏ qua nếu `check` thất bại.

## Lưu ý triển khai

Trong GitHub repository, mở **Settings → Pages → Build and deployment → Source** và chọn **GitHub Actions**. Sau đó push workflow lên nhánh `main`. Website GitHub Pages sẽ được phát hành theo địa chỉ `https://<github-username>.github.io/devops-1822040311/`.

## Thử nghiệm lỗi

1. Xóa riêng dòng `<title>...</title>` trong `index.html`, lưu và push lên `main`.
2. Mở tab **Actions**: job `check` phải đỏ (failed), job `deploy` bị bỏ qua (skipped).
3. Khôi phục thẻ `title`, đồng thời đổi nhãn `Phiên bản 1.0` ở `index.html` thành `Phiên bản 2.0`.
4. Commit và push. Xác nhận cả hai job thành công và trang web hiển thị Phiên bản 2.0.

Không đưa mật khẩu, token, hoặc thông tin cá nhân nhạy cảm vào repository hay website công khai.
