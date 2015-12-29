var express = require('express');
var router = express.Router();
// Add appdata in routes index from Lesson 26
var appdata = require('../data.json');

/* GET home page. */
router.get('/', function(req, res) {
  var myArtwork = [];
  // Lesson 26
  var myArtists = [];
  myArtists = appdata.speakers;

  appdata.speakers.forEach(function(item) {
    myArtwork = myArtwork.concat(item.artwork);
  });
  res.render('index', {
    title: 'Home',
    artwork: myArtwork,
    artists: myArtists,
    // 27
    page: 'home'
  });
});

// Lesson 25 - more routes (tools to organize applications)
/*
1. routes
2. add views - speakers.ejs
*/

/* GET speakers page. */

/* GET speakers page. */
router.get('/speakers', function(req, res) {
  var myArtwork = [];
  // Lesson 26
  var myArtists = [];
  myArtists = appdata.speakers;

  appdata.speakers.forEach(function(item) {
      myArtwork = myArtwork.concat(item.artwork);
  });
  res.render('speakers', {
    title: 'Speakers',
    artwork: myArtwork,
    artists: myArtists,
    // 27
    page: 'artistList'
  });
});

/* GET speakers detail page. */
router.get('/speakers/:speakerid', function(req, res) {
  var myArtwork = [];
  // 26
  var myArtists = [];

  appdata.speakers.forEach(function(item) {
    if (item.shortname == req.params.speakerid) {
      // 26
      myArtists.push(item);
      // 25
      myArtwork = myArtwork.concat(item.artwork);
    }
  });
  res.render('speakers', {
    title: 'Speakers',
    artwork: myArtwork,
    artists: myArtists,
    page: 'artistDetail'
  });
});


module.exports = router;

