const express = require('express');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const cors = require('cors');
require('dotenv').config()

const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});


app.post("/api/fileanalyse", upload.single('upfile'), function(req, res){
  let file = req.file;

  res.json({
    name: file.originalname,
    type: file.mimetype,
    size: file.size
  })
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
