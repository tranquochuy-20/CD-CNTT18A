# BÀI THỰC HÀNH 04 - NODEJS VÀ MONGODB

## 1. Thông tin bài thực hành

- **Bài:** Bài thực hành 04
- **Tên bài:** Kết nối và thao tác dữ liệu với MongoDB
- **Database:** `qlsinhvien`
- **Collection:** `students`

## 2. Mục tiêu

- Kết nối MongoDB đang chạy trên máy tính.
- Sử dụng database `qlsinhvien`.
- Sử dụng collection `students`.
- Thêm ít nhất 3 sinh viên bằng `insertMany()`.
- Sử dụng `find()` để hiển thị danh sách sinh viên.
- Đóng kết nối sau khi hoàn thành.

## 3. Các bước thực hiện

### Bước 1: Khởi tạo project

```bash
npm init -y
```

### Bước 2: Cài đặt thư viện MongoDB

```bash
npm install mongodb
```

### Bước 3: Tạo file bai04.js

Tạo file `bai04.js` và viết chương trình kết nối MongoDB.

### Bước 4: Chạy chương trình

```bash
node bai04.js
```

## 4. Nội dung chương trình

Chương trình thực hiện:
- Kết nối MongoDB tại `mongodb://127.0.0.1:27017`.
- Tạo database `qlsinhvien`.
- Tạo collection `students`.
- Sử dụng `insertMany()` thêm 3 sinh viên.
- Sử dụng `find()` hiển thị danh sách sinh viên.
- Sử dụng `client.close()` để đóng kết nối.

## 5. Kết quả thực hiện

Chương trình chạy thành công với kết quả:

- Kết nối MongoDB thành công.
- Số sinh viên đã thêm: 3.
- Hiển thị danh sách 3 sinh viên:
  - SV001 - Lam Minh Khang - 20 tuổi - 8.5 điểm.
  - SV002 - Tran Quoc Huy - 21 tuổi - 9 điểm.
  - SV003 - Ha Van Sam - 19 tuổi - 7.5 điểm.
- Đã đóng kết nối MongoDB.

## 6. Hình ảnh minh chứng

### Ảnh 1: Cài đặt thư viện MongoDB

![Cài đặt MongoDB](anh1-caidat.png)

### Ảnh 2: Chạy chương trình trên Terminal

![Kết quả chạy chương trình](anh2-ketqua-terminal.png)

### Ảnh 3: Kiểm tra dữ liệu trên MongoDB Compass

![Dữ liệu MongoDB](anh3-mongodb-compass.png)

## 7. Kết luận

Đã hoàn thành bài thực hành 04. Chương trình kết nối MongoDB thành công, thêm 3 sinh viên bằng `insertMany()`, hiển thị danh sách bằng `find()` và đóng kết nối sau khi hoàn thành.
