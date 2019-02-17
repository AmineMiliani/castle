const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')

let castle = require('./castle.js')
let resto = require('./resto.js')

var url = 'https://www.relaischateaux.com/fr/site-map/etablissements'

castle(url,function (err,link,name,chef_name,chef_link,count){
  if(err) return console.error("Error: ", err)
  {}
  let list = []
  //console.log(count)

  for(var i = 0; i < 150; i++)
  {
    list[i] = new Hotel_Resto(link[i],name[i],chef_name[i],chef_link[i])
    //console.log(list[i]);
  }
  let list_tmp = []
  list_tmp[0] = "test"
  var j = 0
  for(var i in list){
    //  console.log(list[i]);

    if(list[i] != undefined){
      if(list[i].getChef_link() != undefined){
        var chef_link = list[i].getChef_link();
        if(chef_link.indexOf("chef") >= 0)
        {
          resto(chef_link,function (err,resto_name){
            if(err) return console.error("Error: ", err)
            {}
            list[i].setRestoName(resto_name)

          })
        }
        else{
          list[i].setRestoName("doesn't have chef")
        }
      }
    }
  }

  console.log("Why does this console log print first ?????????");
})

function Hotel(name,url,chef_name,chef_link){
  var name = name;
  var url = url;
  var chef_name = chef_name;
  var chef_link = chef_link;


  Object.defineProperty(this, "test",{
    get(){
      return chef_link
    },
    set(value){
      chef_link = value ;

    }
  })
}
class Hotel_Resto{

  constructor(url,name,chef_name,chef_link){
    this.name = name;
    this.url = url;
    this.chef_name = chef_name;
    this.chef_link = chef_link;
    this.resto_name = "";
  }
  setRestoName(value){
    this.resto_name = value;
  }
  getRestoName() {
    return this.resto_name;
  }
  getChef_link(){
    return this.chef_link;
  }
  getChef_name(){
    return this.chef_name;
  }
}
