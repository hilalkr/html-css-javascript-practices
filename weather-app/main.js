 const url = 'https://api.openweathermap.org/data/2.5/';
 const key ='';

 setQuery = (e) => {
     if(e.keyCode == 13){
        getResult(searchBar.value);
     }
 }

 const getResult = (cityName) => {
     let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=en`;
     fetch(query)
     .then(weather =>{
        return weather.json()
     })
     .then(displayResult)
 }
 const displayResult = (result) => {
    let city = document.querySelector('.city');
    city.innerText = `${result.name},${result.sys.country}`;

    let temp = document.querySelector('.temp');
    temp.innerText = `${Math.round(result.main.temp)}°C`;

    let desc = document.querySelector('.desc');
    desc.innerText = result.weather[0].description;

    let minmax = document.querySelector('.minmax');
    minmax.innerText = `${Math.round(result.main.temp_min)}°c / ${Math.round(result.main.temp_max)}°c`;
 }

 const searchBar =document.getElementById('searchBar');
 searchBar.addEventListener('keypress',setQuery);
 
// Get the temperature and weather condition elements
var tempElement = document.querySelector('.temp');
var descElement = document.querySelector('.desc');


var temp = tempElement.innerHTML;
var desc = descElement.innerHTML;


if (temp < 5 && desc === "cloudy") {
    tempElement.innerHTML = "It's cold today. You should dress thickly.";
} 
 if (temp > 15 && desc === "sunny") {
    tempElement.innerHTML = "The weather is beautiful today!";

 }
 if (temp < 0 && desc === "snowy"){
    tempElement.innerHTML = "Be careful, the floors can be slippery!";
 }
 
 
