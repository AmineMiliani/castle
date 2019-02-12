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

  toString(){
    return this.id + " | " + this.name + " | " + this.type + " | " + this.lat + " | " + this.lng;
  }
}
