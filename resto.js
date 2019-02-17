const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')

module.exports = function(url,callback){
  request(url, (error, response, html,i) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html)
      var resto_name = $('.locationContact').find('strong').text();
    //  console.log(list_tmp[i]);
    }
  callback(null,resto_name)
})




//console.log(list)

}
