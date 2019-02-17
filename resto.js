const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')

module.exports = function(chef_link,list,callback){
  request(chef_link, (error, response, html) => {
    var resto_name = "  "
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html)
      resto_name = $('.locationContact').find('strong').text();
      console.log(resto_name);
    }
  callback(null,resto_name)
})




//console.log(list)

}
