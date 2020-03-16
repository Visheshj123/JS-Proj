//Init Storage
const storage = new Storage();
//Get stored location data
const weatherLocation = storage.getLocationData();


const Weather = new weather(weatherLocation.city, weatherLocation.state);

//Init UI
const ui = new UI();

//Get weather on DOM load
document.addEventListener('DOMContentLoad', getCoordinates());

//Change location event
document.getElementById('w-change-btn').addEventListener('click',(e) =>{
   const city = document.getElementById('city').value;
   const state = document.getElementById('state').value;
    Weather.changeLocation(city,state);
    getCoordinates();

    //Set Location Data
    storage.setLocationData(city,state);

    //Close modal
    $('#locModal').modal('hide');

});

function getCoordinates(){
    Weather.getCoordinates().then(data => getWeather(data));
  }

function getWeather(data){
    Weather.getWeather(data).then(data => ui.paint(data))
        .catch(err => console.log(err));
}
