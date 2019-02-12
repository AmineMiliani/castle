const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('resto.csv');

// Write Headers
//writeStream.write(`Title,Link,Date \n`);
function changePage(){
  var myJSONObject = { page: 3 };
  request({
      url: "https://www.relaischateaux.com/us/themes/unique-restaurants",
      method: "POST",
      json: true,   // <--Very important!!!
      body: myJSONObject
  }, function (error, response, body){

  });
}
request('https://www.relaischateaux.com/us/themes/unique-restaurants', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
/*
    $('.post-preview').each((i, el) => {
      const title = $(el)
        .find('.post-title')
        .text()
        .replace(/\s\s+/g, '');
      const link = $(el)
        .find('a')
        .attr('href');
      const date = $(el)
        .find('.post-date')
        .text()
        .replace(/,/, '');


      // Write Row To CSV
      writeStream.write(`${title}, ${link}, ${date} \n`);


    });*/
    $('.hotelQuickView').each((i, el) => {
      const name = $(el).children('h3').children('a').children('span').text();
      const price = $(el).find('.price').text();
      console.log(name + price);

  });




    //const restaurants = $('.hotelQuickView')
    //const chief = rest_chief.children('.mainTitle2');
    //const chief_name = chief.children();
    //const name = chief_name.first();

    //const content = $('.mainTitle2');
    //const output = content.children('h1').next().text();


  }
});
changePage();

request('https://www.relaischateaux.com/us/themes/unique-restaurants', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
/*
    $('.post-preview').each((i, el) => {
      const title = $(el)
        .find('.post-title')
        .text()
        .replace(/\s\s+/g, '');
      const link = $(el)
        .find('a')
        .attr('href');
      const date = $(el)
        .find('.post-date')
        .text()
        .replace(/,/, '');


      // Write Row To CSV
      writeStream.write(`${title}, ${link}, ${date} \n`);


    });*/
    $('.hotelQuickView').each((i, el) => {
      const name = $(el).children('h3').children('a').children('span').text();
      const price = $(el).find('.price').text();
      console.log(name + price);

  });
}
});
