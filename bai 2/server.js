const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    res.end(`
        <!DOCTYPE html>
        <html lang="vi">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Bài 2 - Node.js HTTP Server</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    background-color: #f2f2f2;
                    padding-top: 100px;
                }
                .container {
                    background: white;
                    width: 400px;
                    margin: auto;
                    padding: 30px;
                    border-radius: 10px;
                }
                h1 {
                    color: #2563eb;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Xin chào!</h1>
                <h2>Thông tin sinh viên</h2>
                <p>Họ và tên: Huy Trần</p>
                <p>Lớp: CĐ-CNTT18A</p>
                <p>Đây là HTTP Server được tạo bằng Node.js.</p>
            </div>
        </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log('Server đang chạy tại http://localhost:3000');
});