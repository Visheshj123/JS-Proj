class UI{
    constructor(){
      this.temp = document.getElementById('w-temp');
      this.desc = document.getElementById('w-desc');
      this.details = document.getElementById('w-details');
      this.icon = document.getElementById('w-icon');
      this.humidity = document.getElementById('w-humidity');
      this.feelsLike = document.getElementById('w-feelslike');
      this.dewpoint = document.getElementById('w-dewpoint');
      this.wind = document.getElementById('w-wind');
      this.string = document.getElementById('w-string');
      this.location = document.getElementById('w-location');
    }

  paint(weather){
    console.log(weather);
    console.log('The dewpoint is: ' +  weather.weather.dewPoint);
    console.log('the weather is: ' + weather.weather.temperature);
    this.location.textContent = weather.location;
    this.string.textContent = `${weather.weather.temperature}`;
    this.humidity.textContent = ` Relative Humidity: ${weather.weather.humidity}`;
    this.dewpoint.textContent = `DewPoint: ${weather.weather.dewPoint}`;
    this.feelsLike.textContent = `Feels Like: ${weather.weather.apparentTemperature}`;
    this.wind.textContent = `Wind: ${weather.weather.windBearing}`;
    this.desc.textContent = weather.weather.summary;
  }

}
