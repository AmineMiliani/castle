const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

request('https://www.relaischateaux.com/fr/site-map/etablissements', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    var info = $('#countryF').eq(1).children('ul');
    var list = new Array();
    info.each((i, el) => {
      //var link = $(el).find('a').attr('href');
      //const title = $(el).find('a').text();
      var test = $(el).children('li');

      test.each((j, el) => {
        //var link = $(el).find('a').attr('href');
        //const title = $(al).find('a').text();
        var test2 = $(el).children('a');
        test2.each((k, el) => {
          var link = $(el).attr('href');
          const title = $(el).text();

          var hotel_Resto = new Hotel_Resto(title,link);

          console.log(title);
        });
      //  var hotel_Resto = new Hotel_Resto(title,link);

//console.log(link);
      });
  //    var hotel_Resto = new Hotel_Resto(title,link);

//      console.log(link);
    });

    //  console.log(info);
  };
  //  console.log(info);
});


class Hotel_Resto{

  constructor(name, url){
    this.name = name;
    this.url = url;
  }
  getName() {
    return this.name;
  }

}
