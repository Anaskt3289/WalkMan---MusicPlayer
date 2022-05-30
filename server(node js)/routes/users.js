var express = require('express');
var router = express.Router();
const multer = require('multer')
const fs = require('fs')
const db = require('../DatabaseConfig')
const userHelper = require('../Helpers/UserHelper')


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/temp-Storage')
  },
  filename: function (req, file, cb) {
    cb(null, 'artwork.jpg')
  }
})

var upload = multer({ storage: storage }).single('artwork')
router.get('/', async function (req, res, next) {
  res.send('This is WalkMan Music-player Server');
});

router.post('/addSongs', function (req, res, next) {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err)
    } else if (err) {
      return res.status(500).json(err)
    } else {
      let songDetails = JSON.parse(req.body.details)
      userHelper.addSongs(songDetails).then((resp) => {
        console.log(resp);
        var oldPath = './public/temp-Storage/artwork.jpg'
        var newPath = './public/artwork/' + resp + '.jpg'

        fs.rename(oldPath, newPath, function (err) {
          if (err)
            throw err;
        })
        res.status(200).json({ msg: 'success' })
      })


    }
  })
});

module.exports = router;
