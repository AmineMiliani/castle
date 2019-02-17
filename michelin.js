const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')
const url_michelin = 'https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin'

request(url_michelin, (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html)
    var info = $('.panel-panel panels-content-left-top').find('.panel-pane-inside').text()
    console.log(info)

    //var list = new Array()
  /*  info.each((i, el) => {
      link[i] = $(el).find('a').eq(0).attr('href')
      name[i] = $(el).find('a').eq(0).text().split('\n')[1].split('                                            ')[1]

      chef_name[i]= $(el).find('a').eq(1).text().split('\n')[1]
      chef_link[i] = $(el).find('a').eq(1).attr('href')
      count++;
    })*/

  }
})




//console.log(list)
