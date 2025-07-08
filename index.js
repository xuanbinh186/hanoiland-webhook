const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// ✅ Zalo xác minh domain
app.get('/zalo_verifierHTRkT8JaFdTryAfLaDvzI6kIgdU7sNmWCJam.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'zalo_verifierHTRkT8JaFdTryAfLaDvzI6kIgdU7sNmWCJam.html'));
});

// ✅ Test webhook
app.get('/', (req, res) => {
  res.send('✅ Webhook Zalo is running!');
});

app.post('/webhook', (req, res) => {
  console.log('✅ Đã nhận tin từ Zalo:', req.body);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
})
const express = require('express');
const app = express();
const path = require('path');

// ⚠️ Thêm dòng sau để phục vụ thư mục /public
app.use(express.static(path.join(__dirname, 'public')));
