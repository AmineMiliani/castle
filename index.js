const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')

let castle = require('./castle.js')
let resto = require('./resto.js')

var url = 'https://www.relaischateaux.com/fr/site-map/etablissements'

castle(url,async function (err,link,name,chef_name,chef_link,count){
  if(err) return console.error("Error: ", err)
  {}
  let list = []
  //console.log(count)

  for(var i = 0; i < count; i++)
  {
    list[i] = new Hotel_Resto(link[i],name[i],chef_name[i],chef_link[i])
    //console.log(list[i]);
  }

  await resto(list, function (err,names){
    if(err) return console.error("Error: ", err)
    {}

    console.log(names)
  })
  console.log("Why does this console log print first ?????????");
})

/*
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
}*/
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
