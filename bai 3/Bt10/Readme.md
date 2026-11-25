# BÀI THỰC HÀNH 10 - NODEJS MONGODB $LOOKUP

## 1. Thông tin bài tập

- Họ và tên: Huy Trần
- Lớp: CD-CNTT18A
- Môn học: NodeJS
- Bài thực hành: Bài 10

## 2. Mục tiêu

- Tạo collection departments chứa thông tin khoa.
- Tạo collection students_join chứa thông tin sinh viên.
- Thêm ít nhất 2 khoa.
- Thêm ít nhất 4 sinh viên.
- Sử dụng aggregate() kết hợp $lookup.
- Liên kết sinh viên với khoa thông qua makhoa.
- Hiển thị sinh viên kèm tên khoa tương ứng.

## 3. Các bước thực hiện

### Bước 1: Tạo file bai10.js

Sử dụng module mongodb để kết nối database qlsinhvien.

### Bước 2: Tạo collection departments

Thêm 2 khoa:

- CNTT - Công nghệ thông tin
- QTKD - Quản trị kinh doanh

### Bước 3: Tạo collection students_join

Thêm 4 sinh viên có các thông tin masv, hoten, makhoa.

### Bước 4: Liên kết dữ liệu

Sử dụng aggregate() và $lookup để liên kết sinh viên với khoa theo makhoa.

### Bước 5: Hiển thị kết quả

Hiển thị mã sinh viên, họ tên, mã khoa và tên khoa tương ứng.

### Bước 6: Chạy chương trình

```bash
node bai10.js
```

## 4. Kết quả

- Tạo thành công 2 khoa.
- Thêm thành công 4 sinh viên.
- Liên kết dữ liệu bằng $lookup.
- Hiển thị danh sách sinh viên kèm tên khoa.

## 5. Ảnh minh chứng

### Ảnh 1: Code bai10.js
![Code bai10](code.png)

### Ảnh 2: Kết quả chạy Terminal
![Ket qua](ketqua.png)

### Ảnh 3: Collection departments
![Departments](departments.png)

### Ảnh 4: Collection students_join
![Students join](students_join.png)

## 6. Kết luận

Bài thực hành giúp làm quen với MongoDB aggregate() và $lookup, liên kết dữ liệu giữa collection sinh viên và collection khoa thông qua mã khoa makhoa, hiển thị tên khoa tương ứng với từng sinh viên.
