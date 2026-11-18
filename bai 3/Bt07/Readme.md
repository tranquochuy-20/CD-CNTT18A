# BÀI THỰC HÀNH 07 - NODEJS HTTP SERVER

## 1. Mục tiêu

- Sử dụng module `http` để tạo Web Server.
- Sử dụng đối tượng `URL` để xử lý đường dẫn và tham số.
- Tạo Web Server tại cổng 3001.
- Xử lý đường dẫn `/hello?name=Minh` và hiển thị Xin chào Minh.
- Xử lý đường dẫn `/sum?a=10&b=20` và hiển thị Tổng = 30.
- Trả về thông báo lỗi nếu thiếu tham số hoặc giá trị không hợp lệ.

## 2. Tập tin sử dụng

- `bai07.js`: Chương trình tạo Web Server và xử lý yêu cầu từ trình duyệt.

## 3. Các bước thực hiện

### Bước 1: Tạo tập tin bai07.js

Sử dụng module `http` và đối tượng `URL` để xây dựng Web Server.

### Bước 2: Chạy chương trình

```bash
node bai07.js
```

### Bước 3: Kiểm tra trên trình duyệt

- http://localhost:3001/hello?name=Huy
- http://localhost:3001/sum?a=10&b=20
- http://localhost:3001/hello
- http://localhost:3001/sum?a=abc&b=20

## 4. Kết quả thực hiện

- Khởi động Web Server thành công tại cổng 3001.
- Hiển thị Xin chào Minh khi truy cập đường dẫn hello.
- Hiển thị Tổng = 30 khi truy cập đường dẫn sum.
- Thông báo lỗi khi thiếu tham số.
- Thông báo lỗi khi giá trị không hợp lệ.
- Thông báo lỗi khi truy cập đường dẫn không tồn tại.

## 5. Hình ảnh minh chứng

### Ảnh 1: Code file bai07.js

### Ảnh 2: Kết quả chạy Web Server trên Terminal

### Ảnh 3: Kết quả truy cập đường dẫn hello

### Ảnh 4: Kết quả truy cập đường dẫn sum

### Ảnh 5: Kết quả kiểm tra thông báo lỗi

## 6. Kết luận

Đã hoàn thành bài thực hành 07. Chương trình sử dụng thành công module http và đối tượng URL để tạo Web Server tại cổng 3001, xử lý các yêu cầu hello, sum và kiểm tra lỗi theo yêu cầu đề bài.
