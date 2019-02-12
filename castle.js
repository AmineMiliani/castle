const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')

module.exports = function(url,callback){
request(url, (error, response, html) => {
  let list = []
  let link = []
  let name = []
  let chef_name = []
  let chef_link = []
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html)
    var info = $('#countryF').eq(1).find('li')

    //var list = new Array()
    info.each((i, el) => {
      link[i] = $(el).find('a').eq(0).attr('href')
      name[i] = $(el).find('a').eq(0).text()
      chef_name[i] = $(el).find('a').eq(1).text()
      chef_link[i] = $(el).find('a').eq(1).attr('href')
    })

  }
  callback(null,link,name,chef_name,chef_link)
})




//console.log(list)

}
