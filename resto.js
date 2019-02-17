const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')

var resto_name =""

module.exports = function(list,callback){
  let names = []
  var j = 0;
  for(var i in list){
    //  console.log(list[i]);

    if(list[i] != undefined){
      if(list[i].getChef_link() != undefined){
        var chef_link = list[i].getChef_link();
      //  console.log(chef_link)
        if(chef_link.indexOf("chef") >= 0)
        {
          request(chef_link,(error, response, html) => {
            if (!error && response.statusCode == 200) {
              const $ = cheerio.load(html)
              names[j] = $('.locationContact').find('strong').text();
              //list[i].setRestoName(resto_name)
              console.log(j)
              console.log(names[j]);


              j++
            }
          })
        }
        else{
          j++;
        }
      }
      callback(null,new Promise(resolve => names))
    }




    //console.log(list)

  }
}
