# BÀI THỰC HÀNH 09 - NODEJS MONGODB

## 1. Thông tin bài tập

- Họ và tên: Huy Trần
- Lớp: CD-CNTT18A
- Môn học: NodeJS
- Bài thực hành: Bài 09

## 2. Mục tiêu

- Kết nối database qlsinhvien.
- Sử dụng collection students_test.
- Thêm ít nhất 5 sinh viên mẫu.
- Sử dụng deleteOne() để xóa một sinh viên theo mã sinh viên.
- Sử dụng deleteMany() để xóa các sinh viên có điểm dưới 5.
- Hiển thị số bản ghi đã xóa.
- Hiển thị danh sách sinh viên còn lại bằng find().

## 3. Các bước thực hiện

### Bước 1: Tạo file bai09.js

Sử dụng module mongodb để kết nối MongoDB.

### Bước 2: Thêm sinh viên

Sử dụng insertMany() để thêm 5 sinh viên vào collection students_test.

### Bước 3: Xóa một sinh viên

Sử dụng deleteOne() để xóa sinh viên có masv SV002.

### Bước 4: Xóa sinh viên có điểm dưới 5

Sử dụng deleteMany() với điều kiện diem dưới 5.

### Bước 5: Hiển thị danh sách còn lại

Sử dụng find() để hiển thị danh sách sinh viên sau khi xóa.

### Bước 6: Chạy chương trình

```bash
node bai09.js
```

## 4. Kết quả

- Thêm thành công 5 sinh viên.
- Xóa thành công 1 sinh viên bằng deleteOne().
- Xóa thành công 2 sinh viên có điểm dưới 5 bằng deleteMany().
- Danh sách còn lại có 2 sinh viên.

## 5. Ảnh minh chứng

### Ảnh 1: Code bai09.js
![Code bai09](anh1_code.png)

### Ảnh 2: Kết quả chạy Terminal
![Ket qua](anh2_ketqua.png)

### Ảnh 3: MongoDB Compass
![MongoDB](anh3_mongodb.png)

## 6. Kết luận

Bài thực hành giúp làm quen với MongoDB trong NodeJS, thao tác thêm dữ liệu, xóa dữ liệu bằng deleteOne(), deleteMany() và truy vấn dữ liệu bằng find().
