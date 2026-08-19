const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const CORRECT_PASSWORD = "ttng8984188"; 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    const userPass = req.query.pass;

    if (userPass === CORRECT_PASSWORD) {
        return res.sendFile(path.join(__dirname, 'index.html'));
    }

    if (userPass !== undefined && userPass !== CORRECT_PASSWORD) {
        return res.send(`
            <!DOCTYPE html>
            <html lang="vi">
            <head><meta charset="UTF-8"><title>Sai Mật Khẩu</title></head>
            <body style="background: #0f172a; color: red; font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; font-size: 20px;">
                <div style="text-align: center;">
                    <p>⛔ Sai mật khẩu! Bạn không có quyền truy cập.</p>
                    <a href="/" style="color: #3b82f6; text-decoration: none; font-size: 16px;">&larr; Quay lại đăng nhập</a>
                </div>
            </body>
            </html>
        `);
    }

    res.send(`
        <!DOCTYPE html>
        <html lang="vi">
        <head>
            <meta charset="UTF-8">
            <title>Đăng Nhập Hệ Thống</title>
            <style>
                body { background: #0f172a; font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
                .card { background: #1e293b; padding: 40px; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); text-align: center; color: white; width: 320px; }
                h2 { margin-bottom: 20px; font-size: 22px; }
                input { width: 100%; padding: 12px; margin: 15px 0; border: 1px solid #475569; background: #0f172a; color: white; border-radius: 6px; box-sizing: border-box; font-size: 16px; outline: none; }
                input:focus { border-color: #3b82f6; }
                button { width: 100%; padding: 12px; background: #2563eb; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; font-size: 16px; transition: 0.2s; }
                button:hover { background: #1d4ed8; }
            </style>
        </head>
        <body>
            <div class="card">
                <h2>🔒 Đăng Nhập Tool</h2>
                <form action="/" method="GET">
                    <input type="password" name="pass" placeholder="Nhập mật khẩu..." required autofocus>
                    <button type="submit">Truy Cập</button>
                </form>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server đang chạy thành công tại cổng ${PORT}!`);
});