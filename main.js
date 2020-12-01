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

// console.log(cityArray)
// console.log(topHeap(cityArray, "distance", 2, false))
// console.log(topSelect(cityArray, "distance", 2, false))
// console.log(heapSort(cityArray))
// console.log(quickSort(cityArray, "distance"))
// console.log({
//     "id": 4156404,
//     "name": "Gainesville",
//     "state": "FL",
//     "country": "US",
//     "coord": {
//         "lon": -82.324829,
//         "lat": 29.65163
//     }
// })
// console.log(cityList.sort())
// console.log(heapSort(cityList).map(a => a.name)) //prints names
// console.log(cityList)

// console.log(heapSort(cityArray, "latitude", true))
// console.log(heapSort(cityArray, "longitude", false))

// console.log(quickSort(myArray))

function getWeather(){ 
    fetch("http://api.openweathermap.org/data/2.5/weather?q="+cityName+"&APPID=64c4674bb358ce6241ec014179c26214&units=imperial")
    .then((response)=> response.json())
    .then((data)=>{
        console.log(data);
        cityObj = data;
        document.getElementById("displayCityName").innerHTML = data.name;
        document.getElementById("displayTemp").innerHTML = data.main.temp + '°F';
        document.getElementById("displayWeather").innerHTML = data.weather[0].description;
        document.getElementById("displayCountryName").innerHTML = data.sys.country;
        document.getElementById('flag').src = "https://www.countryflags.io/"+data.sys.country+"/flat/32.png";
        document.getElementById("displayLong").innerHTML = "Longitutde: " + data.coord.lon;
        document.getElementById("displayLat").innerHTML = "Latitude: " + data.coord.lat;
        document.getElementById("displayFeelsLike").innerHTML = "Feels like: " + data.main.feels_like + '°F';
        document.getElementById("displayHumid").innerHTML = "Humidity: " + data.main.humidity + "%";
        document.getElementById("displayWindSpeed").innerHTML = "Wind Speed: " + data.wind.speed + " mph";
    })  
}

