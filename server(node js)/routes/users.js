var express = require('express');
var router = express.Router();
const multer = require('multer')
const fs = require('fs')


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/temp-Storage')
  },
  filename: function (req, file, cb) {
    cb(null, 'artwork.jpg')
  }
})

var upload = multer({ storage: storage }).single('artwork')

router.get('/', function (req, res, next) {
  res.send('This is WalkMan Music-player Server');
});

router.post('/addSongs', function (req, res, next) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err)
    } else if (err) {
      return res.status(500).json(err)
    } else {
      console.table(JSON.parse(req.body.details))
      let songDetails = JSON.parse(req.body.details)
    }
  })
});

module.exports = router;
