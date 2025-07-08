const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// ⚠️ Cấu hình cho phép Express phục vụ file tĩnh từ thư mục /public
app.use(express.static(path.join(__dirname, 'public')));

// Middleware đọc JSON và URL-encoded body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route test (nếu muốn)
app.get('/', (req, res) => {
  res.send('Webhook Server is running');
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
