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
  var count = 0
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html)
    var info = $('#countryF').eq(1).find('li')

    //var list = new Array()
    info.each((i, el) => {
      link[i] = $(el).find('a').eq(0).attr('href')
      name[i] = $(el).find('a').eq(0).text().split('\n')[1].split('                                            ')[1]

      chef_name[i]= $(el).find('a').eq(1).text().split('\n')[1]
      chef_link[i] = $(el).find('a').eq(1).attr('href')
      count++;
    })

  }
  callback(null,link,name,chef_name,chef_link,count)
})




//console.log(list)

}
