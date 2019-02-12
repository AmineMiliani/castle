let castle = require('./castle.js')

var url = 'https://www.relaischateaux.com/fr/site-map/etablissements'
castle(url,function (err,link,name,chef_name,chef_link){
  if(err) return console.error("Error: ", err)
  {}
  console.log(chef_name)
})

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
