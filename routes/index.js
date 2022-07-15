var express = require('express');
var router = express.Router();
const axios = require("axios");
const csv = require('csv-parser');
const fs = require('fs');
const options = {
  method: 'GET',
  url: 'https://mega-millions.p.rapidapi.com/latest10',
  headers: {
    'X-RapidAPI-Key': '2ssq8iH43KmshkQsVFI998LmcAlWp1eTmmAjsnb5qXqtUVy79B',
    'X-RapidAPI-Host': 'mega-millions.p.rapidapi.com'
  }
};
/* GET home page. */
router.get('/', function(req, res, next) {


  axios.request(options).then(function (response) {
    fs.createWriteStream('./data.csv')
  .write(csv())
  .on(response.data, (row) => {
    
    console.log(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });
    console.log("reached");
  }).catch(function (error) {
    console.error(error);
  });
  res.render('index', { title: 'Express' });
});

module.exports = router;


