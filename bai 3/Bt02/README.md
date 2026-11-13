# BÀI 3 - BÀI TẬP 02: TẠO HTTP SERVER VÀ XỬ LÝ ROUTE

**Họ và tên:** Trần Quốc Huy

**Lớp:** CĐ-CNTT18A

## 1. Yêu cầu bài thực hành

- Sử dụng module `http` tạo Web Server tại cổng 3000.
- Khi truy cập `/`, hiển thị lời chào và mã sinh viên.
- Khi truy cập `/about`, hiển thị thông tin giới thiệu bản thân.
- Khi truy cập đường dẫn không tồn tại, trả về mã trạng thái HTTP 404.

## 2. Cấu trúc thư mục

```text
Bt02/
├── bai02.js
├── README.md
└── images/
    ├── buoc1.png
    ├── buoc2.png
    └── ketqua.png
```

## 3. Các bước thực hiện

**Bước 1: Kiểm tra phiên bản Node.js**

```bash
node -v
npm -v
```

**Bước 2: Khởi động Web Server**

Mở Terminal tại thư mục Bt02 và chạy:

```bash
node bai02.js
```

**Bước 3: Truy cập trang chủ**

Mở trình duyệt và truy cập:

```text
http://localhost:3000
```

Trang chủ hiển thị lời chào và thông tin sinh viên.

**Bước 4: Truy cập trang giới thiệu**

```text
http://localhost:3000/about
```

Trang hiển thị thông tin giới thiệu bản thân.

**Bước 5: Kiểm tra lỗi 404**

Truy cập đường dẫn không tồn tại:

```text
http://localhost:3000/abc
```

Server trả về mã trạng thái HTTP 404.

## 4. Kết quả thực hiện

Đã tạo thành công HTTP Server bằng module `http` của Node.js.

- Trang chủ `/`: HTTP 200.
- Trang giới thiệu `/about`: HTTP 200.
- Đường dẫn không tồn tại: HTTP 404.

## 5. Hình ảnh minh chứng

### 5.1. Mã nguồn chương trình

![Mã nguồn bai02.js](images/buoc1.png)

### 5.2. Các bước chạy và truy cập trang web

![Các bước chạy chương trình](images/buoc2.png)

### 5.3. Kết quả chương trình

![Kết quả chạy chương trình](images/ketqua.png)

---

**Sinh viên thực hiện:** Trần Quốc Huy

**Lớp:** CĐ-CNTT18A
