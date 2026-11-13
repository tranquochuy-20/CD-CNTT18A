class SinhVien {
    constructor(ma, hoTen, tuoi, diem) {
        this.ma = ma;
        this.hoTen = hoTen;
        this.tuoi = tuoi;
        this.diem = diem;
    }
}

const danhSachSinhVien = [
    new SinhVien("SV01", "Tran Quoc Huy", 20, 8.5),
    new SinhVien("SV02", "Nguyen Anh Quan", 21, 6.5),
    new SinhVien("SV03", "Ha Van Sam", 20, 7.0),
    new SinhVien("SV04", "Lam Minh Khang", 20, 6.0),
    new SinhVien("SV05", "Nguyen Hoang Hai", 21, 7.5)
];


const sinhVienDatYeuCau = danhSachSinhVien.filter(
    (sinhVien) => sinhVien.diem >= 5
);

console.log("DANH SACH SINH VIEN DAT YEU CAU:");
console.log(sinhVienDatYeuCau);
