const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

async function main() {
    try {
        await client.connect();
        console.log('Ket noi MongoDB thanh cong!');

        const db = client.db('qlsinhvien');
        const students = db.collection('students');

        const result = await students.insertMany([
            { masv: 'SV001', hoten: 'Lam Minh Khang', tuoi: 20, diem: 8.5 },
            { masv: 'SV002', hoten: 'Tran Quoc Huy', tuoi: 21, diem: 9 },
            { masv: 'SV003', hoten: 'Ha Van Sam', tuoi: 19, diem: 7.5 }
        ]);

        console.log('So sinh vien da them:', result.insertedCount);

        console.log('\nDANH SACH SINH VIEN:');
        const list = await students.find().toArray();
        console.log(list);

    } catch (error) {
        console.error('Loi:', error);
    } finally {
        await client.close();
        console.log('\nDa dong ket noi MongoDB!');
    }
}

main();