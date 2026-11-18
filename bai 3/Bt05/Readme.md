# BÀI THỰC HÀNH 05 - NODEJS VÀ MONGODB

## 1. Mục tiêu
- Tìm sinh viên có điểm lớn hơn hoặc bằng 7 bằng `find()` và `$gte`.
- Sắp xếp điểm giảm dần bằng `sort()`.
- Cập nhật điểm sinh viên theo mã sinh viên bằng `updateOne()` và `$set`.
- Hiển thị thông tin sinh viên sau khi cập nhật.

## 2. Database sử dụng
- Database: `qlsinhvien`
- Collection: `students`

## 3. Các bước thực hiện

### Bước 1: Khởi tạo project
```bash
npm init -y
```

### Bước 2: Cài đặt thư viện MongoDB
```bash
npm install mongodb
```

### Bước 3: Chạy chương trình
```bash
node bai05.js
```

## 4. Kết quả thực hiện

- Kết nối MongoDB thành công.
- Tìm được danh sách sinh viên có điểm >= 7.
- Sắp xếp sinh viên theo điểm giảm dần.
- Cập nhật điểm sinh viên SV001 thành 9.5.
- Hiển thị thông tin sau cập nhật thành công.
- Đóng kết nối MongoDB.

## 5. Hình ảnh minh chứng

### Ảnh 1: Cài đặt thư viện MongoDB
![Cài đặt thư viện](anh1-caidat.png)

### Ảnh 2: Kết quả tìm kiếm
![Tìm kiếm](anh2-timkiem.png)

### Ảnh 3: Kết quả sắp xếp
![sắp xếp](anh2-sapxep.png)

### Ảnh 4: Kết quả cập nhật sinh viên
![Cập nhật sinh viên](anh3-capnhat.png)

### Ảnh 5: Kiểm tra dữ liệu trên MongoDB Compass
![MongoDB Compass](anh4-compass.png)



## 6. Kết luận

Đã hoàn thành bài thực hành 05. Chương trình sử dụng thành công các thao tác find(), $gte, sort(), updateOne() và $set để tìm kiếm, sắp xếp và cập nhật thông tin sinh viên trong MongoDB.
