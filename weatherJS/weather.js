class weather{
  constructor(city, state){
    this.apiKey = 'APIKEY';
    this.city = city;
    this.state = state;
  }

  //Fetch Weather from api
  async getWeather(data){

    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.apiKey}/${data.coordinates.lat},${data.coordinates.lng}`, {
        mode: 'cors'
    });

    const responseData = await response.json();

    return {
      weather: responseData.currently,
      location: data.location
    };
  }

  //Change weather location
  changeLocation(city,state){
    this.city = city;
    this.state = state;
  }

  async getCoordinates(){
    var words = `${this.city}+${this.state}`;
    const apiKey = 'APIKEY';
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=${words}&key=${apiKey}`, {
          mode: 'cors'
      }).catch(err => console.log(err));

    const responseData = await response.json();
    console.log(responseData)

    return {
      coordinates: responseData.results[0].geometry.location,
      location: responseData.results[0].formatted_address
    };


  }
}
