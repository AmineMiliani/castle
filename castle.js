const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

request('https://www.relaischateaux.com/fr/site-map/etablissements', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    var info = $('#countryF').eq(1).find('li');
    //var list = new Array();
    info.each((i, el) => {
      const link = $(el).find('a').eq(0).attr('href');
      const title = $(el).find('a').eq(0).text();
      const chef_name = $(el).find('a').eq(1).text();
      var hotel_Resto = new Hotel_Resto(title,link,chef_name);
      console.log(hotel_Resto);
    });

}
});

    class Hotel_Resto{

      constructor(name, url,chef_name){
        this.name = name;
        this.url = url;
        this.chef_name = chef_name;
      }
      getName() {
        return this.name;
      }

    }
