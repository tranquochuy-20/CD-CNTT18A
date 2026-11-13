
const fs = require('fs');

const hoTen = 'Tran Quoc Huy';
const maSinhVien = 'CD-CNTT18A17';
const lop = 'CD-CNTT18A';

const noiDung = `Ho va ten: ${hoTen}\nMa sinh vien: ${maSinhVien}\n`;

fs.writeFileSync('thongtin.txt', noiDung);

console.log('1. Noi dung ban dau:');

let duLieu = fs.readFileSync('thongtin.txt', 'utf8');
console.log(duLieu);

fs.appendFileSync('thongtin.txt', `Lop: ${lop}\n`);

console.log('2. Noi dung sau khi cap nhat:');

duLieu = fs.readFileSync('thongtin.txt', 'utf8');
console.log(duLieu);
