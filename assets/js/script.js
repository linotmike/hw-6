var API_KEY = 'b0dd27e738abd0fef5675f846f03dba4'
var userSearchHistory = [];
var lat = undefined;
var lon = undefined;
var api5day = undefined;
var apiCurrent = undefined;
var currentDayArray = [];
var fiveDayarray = [];
var currentDayURL = undefined;
var fiveDayURL = undefined;



// dom element refs
var submitBtn = document.querySelector("#submit-btn")
var city = document.getElementById("city-input")
var search = document.getElementById("search-form")
var cityAttribute = document.querySelector("city-attributes")
var history = document.getElementById("history")


function getCoords() {

    // code to get coordinates, see open weather api docs

    // getWeather()
}
function getWeather(event) {
    var { lat } = location
    var { lon } = location
    event.preventDefault()
    //var city = location.name

    var apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=imperial&appid=${API_KEY}`;

    fetch(apiURL) 
    .then(function (response) {
        console.log(response)
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        lat = data.coord.lat;
        lon = data.coord.lon;
        document.querySelector("#city-name").textContent=data.name
        //document.querySelector(".date").textContent="date: "+data.main.date
        document.querySelector(".temp").textContent="Temperature: "+data.main.temp+"ºF"
        document.querySelector(".wind").textContent="wind: "+data.wind.speed+" MPH"
        document.querySelector(".humidity").textContent="humidity: "+data.main.humidity+"%"
        //currentDayURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`;
        //getApiCurrentDay(currentDayURL)
        fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`;
         fetch(fiveDayURL)
         .then(response =>{
            console.log(response)
            return response.json()

          } )
          .then(data => {
            console.log(data);
            
            document.querySelector("#temp1").textContent="Temperature: "+data.list[2].main.temp+"ºF"
            document.querySelector("#wind1").textContent="wind: "+data.list[2].wind.speed+" MPH"
            document.querySelector("#hum1").textContent="humidity: "+data.list[2].main.humidity+"%"


            
            document.querySelector("#temp2").textContent="Temperature: "+data.list[10].main.temp+"ºF"
            document.querySelector("#wind2").textContent="wind: "+data.list[10].wind.speed+" MPH"
            document.querySelector("#hum2").textContent="humidity: "+data.list[10].main.humidity+"%"


            document.querySelector("#temp3").textContent="Temperature: "+data.list[18].main.temp+"ºF"
            document.querySelector("#wind3").textContent="wind: "+data.list[18].wind.speed+" MPH"
            document.querySelector("#hum3").textContent="humidity: "+data.list[18].main.humidity+"%"


            document.querySelector("#temp4").textContent="Temperature: "+data.list[26].main.temp+"ºF"
            document.querySelector("#wind4").textContent="wind: "+data.list[26].wind.speed+" MPH"
            document.querySelector("#hum4").textContent="humidity: "+data.list[26].main.humidity+"%"


            document.querySelector("#temp5").textContent="Temperature: "+data.list[34].main.temp+"ºF"
            document.querySelector("#wind5").textContent="wind: "+data.list[34].wind.speed+" MPH"
            document.querySelector("#hum5").textContent="humidity: "+data.list[34].main.humidity+"%"



          })
        //     getCurrentWeatherDetails(city, data)
     })
    .catch(function (error) {
        console.log(error)
    })
}
submitBtn.addEventListener("click" ,getWeather)
// call this func when api call i smade
//function getCurrentWeatherDetails(city, weather) {
    //  var date = new Date()
   // dispsly details from api
//
// fetch(`https://api.openweathermap.org/geo/1.0/direct?q=seattle&limit=5&appid=b0dd27e738abd0fef5675f846f03dba4`)
// .then(res => res.json())
//  .then(data => {
//    console.log(data);
//   }
