
const fs = require('fs');

// 1. Tạo thư mục data
if (!fs.existsSync('data')) {
    fs.mkdirSync('data');
    console.log('Tạo thư mục data thành công!');
} else {
    console.log('Thư mục data đã tồn tại!');
}

fs.writeFileSync('data/ghichu.txt',
    'Dong 1: Hoc NodeJS module fs.\n' +
    'Dong 2: Thuc hanh tao va doi ten file.\n' +
    'Dong 3: Thuc hanh doc va xoa file.'
);
console.log('Tạo và ghi file ghichu.txt thành công!');

fs.renameSync('data/ghichu.txt', 'data/ghichu_moi.txt');
console.log('Đổi tên thành ghichu_moi.txt thành công!');

const noiDung = fs.readFileSync('data/ghichu_moi.txt', 'utf8');
console.log('\nNội dung file sau khi đổi tên:');
console.log(noiDung);

fs.writeFileSync('data/tam.txt', 'File tam de thuc hanh xoa.');
console.log('\nTạo file tam.txt thành công!');

fs.unlinkSync('data/tam.txt');
console.log('Xóa file tam.txt thành công!');
