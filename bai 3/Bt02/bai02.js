const http = require('http');

const server = http.createServer((req, res) => {
    // Trang chủ
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        res.end(`
            <h1>Xin chào!</h1>
            <h2>Thông tin sinh viên</h2>
            <p>Họ và tên: Trần Quốc Huy</p>
            <p>Mã sinh viên: CD-CNTT18A17</p>
            <p>Lớp: CĐ-CNTT18A</p>
        `);
    }
    else if (req.url === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        res.end(`
            <h1>Giới thiệu bản thân</h1>
            <p>Họ và tên: Trần Quốc Huy</p>
            <p>Lớp: CĐ-CNTT18A</p>
            <p>Tôi đang học lập trình Node.js.</p>
            <p>Tôi yêu thích âm nhạc và thể thao.</p>
            <a href="/">Quay về trang chủ</a>
        `);
    }
    else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        res.end(`
            <h1>404 - Không tìm thấy trang</h1>
            <p>Đường dẫn bạn truy cập không tồn tại.</p>
            <a href="/">Quay về trang chủ</a>
        `);
    }
});

server.listen(3000, () => {
    console.log('Server đang chạy tại http://localhost:3000');
});
