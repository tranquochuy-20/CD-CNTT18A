
const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log('Ket noi MongoDB thanh cong!');

        const db = client.db('qlsinhvien');
        const collection = db.collection('students_test');

        await collection.deleteMany({});

        // 2. Them 5 sinh vien
        const sinhvien = [
            { masv: 'SV001', hoten: 'Tran Quoc Huy', tuoi: 21, diem: 9 },
            { masv: 'SV002', hoten: 'Nguyen Anh Quan', tuoi: 20, diem: 7 },
            { masv: 'SV003', hoten: 'Ha Van Sam', tuoi: 19, diem: 4 },
            { masv: 'SV004', hoten: 'Lam Minh Khang', tuoi: 20, diem: 3.5 },
            { masv: 'SV005', hoten: 'Nguyen Hoang Hai', tuoi: 21, diem: 8 }
        ];

        const them = await collection.insertMany(sinhvien);
        console.log('Them sinh vien:', them.insertedCount);

        const xoaMot = await collection.deleteOne({ masv: 'SV002' });
        console.log('So sinh vien xoa bang deleteOne:', xoaMot.deletedCount);

        const xoaNhieu = await collection.deleteMany({ diem: { $lt: 5 } });
        console.log('So sinh vien xoa bang deleteMany:', xoaNhieu.deletedCount);

        console.log('\nDanh sach sinh vien con lai:');

        const conLai = await collection.find().toArray();

        conLai.forEach((sv) => {
            console.log(sv);
        });

    } catch (error) {
        console.log('Loi:', error);
    } finally {
        await client.close();
        console.log('\nDa dong ket noi MongoDB!');
    }
}

run();
