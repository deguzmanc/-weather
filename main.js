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

var sortBy, displayNum, sortType, cityName;
document.getElementById('form').addEventListener('submit', (e) =>{
    e.preventDefault();
    //displayNum = document.getElementById("number").value;
    //cityName = document.getElementById("cityName").value;

    if(document.getElementById("heap").checked){
        sortType = "heap";
    }else if (document.getElementById('quick').checked){
        sortType = "quick";
    }

    if(document.getElementById("long").checked){
        sortBy = "long";
    }else if (document.getElementById('lat').checked){
        sortBy = "lat";
    }
    getWeather();
})

function getWeather(){ 
    fetch("http://api.openweathermap.org/data/2.5/weather?q=Gainesville,US&APPID=64c4674bb358ce6241ec014179c26214&units=imperial")
    .then((response)=> response.json())
    .then((data)=>{
        console.log(data);
        document.getElementById("displayCityName").innerHTML = data.name;
        document.getElementById("displayTemp").innerHTML = data.main.temp + '°F';
        document.getElementById("displayWeather").innerHTML = data.weather.description;
        document.getElementById("displayCountryName").innerHTML = data.sys.country;
        document.getElementById("displayLong").innerHTML = data.coord.lon;
        document.getElementById("displayLat").innerHTML = data.coord.lat;
        document.getElementById("displayFeelsLike").innerHTML = data.main.feels_like + '°F';
        document.getElementById("displayHumid").innerHTML = data.main.humidity;
        document.getElementById("displayWindSpeed").innerHTML = data.wind.speed;
    })  
}


//testing
let cityArray = [{
    "id": 833,
    "name": "Ḩeşār-e Sefīd",
    "state": "",
    "country": "IR",
    "coord": {
        "lon": 47.159401,
        "lat": 34.330502
    }
},
{
    "id": 2960,
    "name": "‘Ayn Ḩalāqīm",
    "state": "",
    "country": "SY",
    "coord": {
        "lon": 36.321911,
        "lat": 34.940079
    }
},
{
    "id": 3245,
    "name": "Taglag",
    "state": "",
    "country": "IR",
    "coord": {
        "lon": 44.98333,
        "lat": 38.450001
    }
},
{
    "id": 3530,
    "name": "Qabāghlū",
    "state": "",
    "country": "IR",
    "coord": {
        "lon": 46.168499,
        "lat": 36.173302
    }
},
{
    "id": 5174,
    "name": "‘Arīqah",
    "state": "",
    "country": "SY",
    "coord": {
        "lon": 36.48336,
        "lat": 32.889809
    }
},
{
    "id": 7264,
    "name": "Kalāteh-ye Dowlat",
    "state": "",
    "country": "IR",
    "coord": {
        "lon": 57.616982,
        "lat": 36.163841
    }
},
{
    "id": 8084,
    "name": "Behjatābād",
    "state": "",
    "country": "IR",
    "coord": {
        "lon": 51.461639,
        "lat": 36.667431
    }
},
{
    "id": 9874,
    "name": "Ţālesh Maḩalleh",
    "state": "",
    "country": "IR",
    "coord": {
        "lon": 50.679192,
        "lat": 36.894329
    }
}]

let myArray = [3, 2, 1, 15, 1, 4]

//console.log(quickSort(myArray))
// console.log(heapSort(cityList).map(a => a.name)) //prints names
console.log(heapSort(cityArray, "name", true))
console.log(quickSort(myArray, 0, myArray.length))
console.log(cityList.sort())
// console.log(heapSort(cityList).map(a => a.name)) //prints names
// console.log(cityList)

// console.log(heapSort(cityArray, "latitude", true))
// console.log(heapSort(cityArray, "longitude", false))

// console.log(quickSort(myArray))


