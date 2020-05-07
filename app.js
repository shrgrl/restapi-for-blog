//Harici modüller
const express = require("express");
const app = express();
//bu uygulamayı başka uygulamalarda da çalıştırabilmek için cors modülünü kullanıyoruz
const cors = require('cors');
app.use(cors());
app.options('*', cors());

//Önceden yapılandırılmış bir bağlantı noktası yoksa PORT 5000'i kullan
const PORT = process.env.PORT || 5000

var data = require("./app.json");

app.get("/", function(req, res) {
  res.json(data);
});

app.listen(PORT, function() {
  console.log("Server running on port 5000...");
});

