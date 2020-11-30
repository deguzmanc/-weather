import { heapSort, quickSort, topHeap, topSelect } from './Sorting.js';

//array of objects that contains the information for the cities from local JSON
var cityList = [];
fetch('city.list.json')
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        for (var i in data) {
            cityList.push(data[i]);
        } 
    });

var sortBy, displayNum, sortType, cityName, order;
document.getElementById('form').addEventListener('submit', (e) =>{
    e.preventDefault();
    displayNum = document.getElementById("number").value;

    if(document.getElementById("heap").checked){
        sortType = "heap";
    }else if (document.getElementById('quick').checked){
        sortType = "quick";
    }

    if(document.getElementById("long").checked){
        sortBy = "longitude";
    }else if (document.getElementById('lat').checked){
        sortBy = "latitude";
    }

    if(document.getElementById("asc").checked){
        order = true;
    }else if (document.getElementById('desc').checked){
        order = false;
    }
})

document.getElementById("form2").addEventListener('submit', (e) =>{
    e.preventDefault();
    cityName = document.getElementById("cityName").value;
    getWeather();
})

function getWeather(){ 
    fetch("http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&APPID=64c4674bb358ce6241ec014179c26214&units=imperial")
    .then((response)=> response.json())
    .then((data)=>{
        console.log(data);
        document.getElementById("displayCityName").innerHTML = data.name;
        document.getElementById("displayTemp").innerHTML = data.main.temp + '°F';
        document.getElementById("displayWeather").innerHTML = data.weather.description;
        document.getElementById("displayCountryName").innerHTML = data.sys.country;
        document.getElementById("displayLong").innerHTML = "Longitutde: " + data.coord.lon;
        document.getElementById("displayLat").innerHTML = "Latitude: " + data.coord.lat;
        document.getElementById("displayFeelsLike").innerHTML = "Feels like: " + data.main.feels_like + '°F';
        document.getElementById("displayHumid").innerHTML = "Humidity: " + data.main.humidity + "%";
        document.getElementById("displayWindSpeed").innerHTML = "Wind Speed: " + data.wind.speed + " mph";
    })  
}


