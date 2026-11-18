
const { tinhDiemTB, xepLoai } = require("./xulyDiem");

const sinhVien = [
    {
        hoten: "Tran Quoc Huy",
        toan: 9,
        ly: 8,
        hoa: 9
    },
    {
        hoten: "Lam Minh Khang",
        toan: 7,
        ly: 6,
        hoa: 8
    },
    {
        hoten: "Ha Van Sam",
        toan: 4,
        ly: 5,
        hoa: 4
    }
];

console.log("===== KET QUA HOC TAP =====");

sinhVien.forEach((sv) => {
    const diemTB = tinhDiemTB(sv.toan, sv.ly, sv.hoa);
    const loai = xepLoai(diemTB);

    console.log("Ho ten:", sv.hoten);
    console.log("Diem trung binh:", diemTB.toFixed(2));
    console.log("Xep loai:", loai);
    console.log("--------------------------");
});
