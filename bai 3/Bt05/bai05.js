
const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

async function main() {
    try {
        // Ket noi MongoDB
        await client.connect();
        console.log('Ket noi MongoDB thanh cong!');

        const db = client.db('qlsinhvien');
        const students = db.collection('students');

        console.log('\nDANH SACH SINH VIEN CO DIEM >= 7:');

        const list = await students
            .find({ diem: { $gte: 7 } })
            .sort({ diem: -1 })
            .toArray();

        console.log(list);

        const result = await students.updateOne(
            { masv: 'SV001' },
            { $set: { diem: 9.5 } }
        );

        console.log('\nKET QUA CAP NHAT:');
        console.log('So sinh vien duoc cap nhat:', result.modifiedCount);

        // Hien thi lai thong tin sau cap nhat
        console.log('\nTHONG TIN SINH VIEN SAU CAP NHAT:');

        const updatedStudent = await students.findOne({
            masv: 'SV001'
        });

        console.log(updatedStudent);

    } catch (error) {
        console.error('Loi:', error);
    } finally {
        // Dong ket noi
        await client.close();
        console.log('\nDa dong ket noi MongoDB!');
    }
}

main();
