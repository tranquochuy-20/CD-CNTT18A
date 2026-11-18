
const http = require("http");

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    res.setHeader("Content-Type", "text/plain; charset=utf-8");

    if (url.pathname === "/hello") {
        const name = url.searchParams.get("name");

        if (!name || !name.trim()) {
            res.statusCode = 400;
            return res.end("Lỗi: Thiếu tham số name!");
        }

        res.statusCode = 200;
        return res.end(`Xin chào ${name}`);
    }

    else if (url.pathname === "/sum") {
        const a = url.searchParams.get("a");
        const b = url.searchParams.get("b");

        if (a === null || b === null || a.trim() === "" || b.trim() === "") {
            res.statusCode = 400;
            return res.end("Lỗi: Thiếu tham số a hoặc b!");
        }

        const numA = Number(a);
        const numB = Number(b);

        if (!Number.isFinite(numA) || !Number.isFinite(numB)) {
            res.statusCode = 400;
            return res.end("Lỗi: Giá trị a hoặc b không hợp lệ!");
        }

        res.statusCode = 200;
        return res.end(`Tổng = ${numA + numB}`);
    }

    else {
        res.statusCode = 404;
        return res.end("Lỗi: Không tìm thấy đường dẫn!");
    }
});

server.listen(3001, () => {
    console.log("Web Server đang chạy tại http://localhost:3001");
});
