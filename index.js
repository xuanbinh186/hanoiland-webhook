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

app.listen(port, () => {
  console.log(`🚀 Server chạy tại cổng ${port}`);
});
