const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

request('https://www.relaischateaux.com/us/destinations/europe/france', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    var info = $('div').children('script').html().split(', markers : ')[1];
    var raw_price = $('.spriteSVG').children('symbol').html();

    var list = ListObject(splitItem(info));

    console.log(list);
    $('.hotelQuickView horizontalQuickView').each((i, el) => {
      const name = $(el).children('.row no-gutter').children('col-1-2 collapse-m').children('h3').children('a').children('span').text();
      const price = $(el).find('.price').text();
      console.log("name : " + name + "| price : " + price);

    });
  }
});

function splitItem(list)
{
  list = list.split('}');

  var j = 0;
  var lenght = 0;
  for(var i in list)
  {
    lenght++;
  }
  var new_lenght = new_lenght = Math.round(lenght/2);
  var newlist = new Array(new_lenght);
  for(var i = 0; i< new_lenght; i++)
  {
    newlist[i] = list[j] + list[j+1];
    j += 2;
  }
  return newlist;
}


function lenght(list)
{
  var lenght = 0;
  for(var i in list)
  {
    lenght++;
  }
  return lenght;
}

function StringToObject(item)
{
  var id = "";
  var name = "";
  var type = "";
  var lat = "";
  var lng = "";
  var id_bool = false;
  var name_bool = false;
  var type_bool = "";
  var end_id_index = 0;
  for(var i = 0; i < lenght(item);i++)
  {
    // for id
    if(id_bool == false)
    {
      if(item.charAt(i) == '\'')
      {
        var j = i+1;
        while(item.charAt(j) != '\'')
        {
          id += item.charAt(j);
          j++;
          end_id_index = j;
        }
        id_bool = true;
      }
    }
    // for name
    if(name_bool == false)
    {
      if(item.charAt(i) == '\"')
      {
        var j = i+1;
        while(item.charAt(j) != '\"')
        {
          name += item.charAt(j);
          j++;
        }
        name_bool = true;
      }
    }

    if(name_bool == false)
    {
      if(item.charAt(i) == '\"')
      {
        var j = i+1;
        while(item.charAt(j) != '\"')
        {
          name += item.charAt(j);
          j++;
        }
        name_bool = true;
      }
    }
    if(type_bool == false && i > end_id_index)
    {
      if(item.charAt(i) == '\'')
      {
        var j = i+1;
        while(item.charAt(j) != '\'')
        {
          type += item.charAt(j);
          j++;
        }
        type_bool = true;
      }
    }

    if((item.charAt(i) == 'l' && item.charAt(i+1) =='a') && (item.charAt(i+2 == 't') && item.charAt(i+3) == ":"))
    {
      var j = i+5;
      while(item.charAt(j) != ',')
      {
        lat += item.charAt(j);
        j++;
      }
    }

    if((item.charAt(i) == 'l' && item.charAt(i+1) =='n') && (item.charAt(i+2 == 'g') && item.charAt(i+3) == ":"))
    {
      var j = i+5;
      while(item.charAt(j) != " " )
      {
        lng += item.charAt(j);
        j++;
      }
    }
  }
  var hotel_Resto = new Hotel_Resto(id, name, type, lat, lng);
  return hotel_Resto;
}

function ListObject(list){
  hotel_Restos = new Array(lenght(list));
  for(var i = 0; i < lenght(list); i++){
    {
      hotel_Restos[i] = StringToObject(list[i]);
    }


  }
  return hotel_Restos;
}

class Hotel_Resto{

  constructor(id, name, type, lat, lng){
    this.id = id;
    this.name = name;
    this.type = type;
    this.lat = lat;
    this.lng = lng;
  }
  getName() {
    return this.name;
  }

}
