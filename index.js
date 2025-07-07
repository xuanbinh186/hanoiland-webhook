const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  console.log('📩 Nhận tin từ Zalo:', req.body);
  res.sendStatus(200);
});

app.get('/', (req, res) => {
  res.send('✅ Webhook Zalo đang hoạt động!');
});
const path = yêu cầu('path');

// ✅ Thêm đoạn này để Zalo xác minh domain:
ứng dụng.lấy('/zalo_verifierHTRkT8JaFdTryAfLaDvzI6klgdU7sNmWCJam.html', (yêu cầu, độ phân giải) => {
  độ phân giải.gửiTệp(path.giaNhập(__dirname, 'công cộng', 'zalo_verifierHTRkT8JaFdTryAfLaDvzI6klgdU7sNmWCJam.html'));
});

app.listen(port, () => {
  console.log(`🚀 Server chạy tại cổng ${port}`);
});
