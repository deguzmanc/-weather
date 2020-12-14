import { heapSort, quickSort, topHeap, topSelect, ascendingName, descendingName, ascendingLon, descendingLon, ascendingLat, descendingLat, ascendingDist, descendingDist } from './Sorting.js';

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

var sortBy, displayNum, sortType, cityName, order, cityObj;
document.getElementById('form').addEventListener('submit', (e) =>{
    e.preventDefault();
    displayNum = document.getElementById("number").value;

    if(document.getElementById("heap").checked){
        sortType = "heap";
    }else if (document.getElementById('quick').checked){
        sortType = "quick";
    }
    else if (document.getElementById('topHeap').checked){
        sortType = "topHeap";
    }
    else if (document.getElementById('topSelect').checked){
        sortType = "topSelect";
    }

    if(document.getElementById("long").checked){
        sortBy = "longitude";
    }else if (document.getElementById('lat').checked){
        sortBy = "latitude";
    }else if (document.getElementById('name').checked){
        sortBy = "name";
    }else if (document.getElementById('dist').checked){
        sortBy = "distance";
    }

    if(document.getElementById("asc").checked){
        order = true;
    }else if (document.getElementById('desc').checked){
        order = false;
    }

    let t1, t2;
    let cities = []
    switch(sortType) {
        case "heap":
            t1 = performance.now()
            heapSort(cityList,sortBy,order,cityObj)
            t2 = performance.now()
            cities = cityList.slice(0, displayNum);
            break;
        case "quick":
            t1 = performance.now()
            quickSort(cityList,sortBy,order,cityObj)
            t2 = performance.now()
            cities = cityList.slice(0, displayNum);
            break;
        case "topHeap":
            t1 = performance.now()
            cities = topHeap(cityList, sortBy, displayNum, order, cityObj)
            t2 = performance.now()
            break;
        case "topSelect":
            
            // cities = topSelect(cityList, sortBy, displayNum, order, cityObj)
            let func = ascendingName
            switch (sortBy) {
                
                case 'name':
                    func = order ? ascendingName : descendingName
                    break;
                case 'longitude':
                    func = order ? ascendingLon : descendingLon
                    break;
                case 'latitude':
                    func = order ? ascendingLat : descendingLat
                    break;
                case 'distance':
                    func = order ? ascendingDist : descendingDist
                    break;
            }
            t1 = performance.now()
            cityList.sort(func)
            t2 = performance.now()
            cities = cityList.slice(0, displayNum);
            
            break;   
    }
    console.log(cities)
    console.log(sortType + " took " + (t2 - t1) + " milliseconds.")

    let output = '';
    for (let i = 0; i < cityList.length && i < displayNum; i++) { //put cities into list
        output += `<li class="city-${i}">${cities[i].name}, ${cities[i].country}</li>`
    }

    document.getElementById("cityArray").innerHTML = output;
    cities.forEach((city,i) => {
        document.querySelector(`li.city-${i}`).addEventListener('click', (e) => {
            e.preventDefault();
            cityName = document.querySelector(`li.city-${i}`).innerText;
            getWeather();
        })
    });
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
        cityObj = data;
        document.getElementById("displayCityName").innerHTML = data.name;
        document.getElementById("displayTemp").innerHTML = data.main.temp + '°F';
        document.getElementById("displayWeather").innerHTML = data.weather[0].description;
        document.getElementById("weatherIcon").src = "http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
        document.getElementById("displayCountryName").innerHTML = data.sys.country;
        document.getElementById('flag').src = "https://flagcdn.com/h20/"+data.sys.country.toLowerCase()+".png";
        document.getElementById("displayLong").innerHTML = "Longitude: " + data.coord.lon;
        document.getElementById("displayLat").innerHTML = "Latitude: " + data.coord.lat;
        document.getElementById("displayFeelsLike").innerHTML = "Feels like: " + data.main.feels_like + '°F';
        document.getElementById("displayHumid").innerHTML = "Humidity: " + data.main.humidity + "%";
        document.getElementById("displayWindSpeed").innerHTML = "Wind Speed: " + data.wind.speed + " mph";
    })  
}
