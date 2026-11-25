
const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log('Ket noi MongoDB thanh cong!');

        const db = client.db('qlsinhvien');

        const departments = db.collection('departments');
        const students = db.collection('students_join');

        await departments.deleteMany({});
        await students.deleteMany({});

        const khoa = [
            { makhoa: 'CNTT', tenkhoa: 'Cong nghe thong tin' },
            { makhoa: 'QTKD', tenkhoa: 'Quan tri kinh doanh' }
        ];

        await departments.insertMany(khoa);
        console.log('Them 2 khoa thanh cong!');

        const sinhvien = [
            { masv: 'SV001', hoten: 'Tran Quoc Huy', makhoa: 'CNTT' },
            { masv: 'SV002', hoten: 'Nguyen Anh Quan', makhoa: 'CNTT' },
            { masv: 'SV003', hoten: 'Ha Van Sam', makhoa: 'QTKD' },
            { masv: 'SV004', hoten: 'Lam Minh Khang', makhoa: 'QTKD' }
        ];

        await students.insertMany(sinhvien);
        console.log('Them 4 sinh vien thanh cong!');

        const ketQua = await students.aggregate([
            {
                $lookup: {
                    from: 'departments',
                    localField: 'makhoa',
                    foreignField: 'makhoa',
                    as: 'thongTinKhoa'
                }
            }
        ]).toArray();


        console.log('\nDanh sach sinh vien va khoa:');

        ketQua.forEach((sv) => {
            console.log({
                masv: sv.masv,
                hoten: sv.hoten,
                makhoa: sv.makhoa,
                tenkhoa: sv.thongTinKhoa[0]?.tenkhoa
            });
        });

    } catch (error) {
        console.log('Loi:', error);
    } finally {
        await client.close();
        console.log('\nDa dong ket noi MongoDB!');
    }
}

run();
