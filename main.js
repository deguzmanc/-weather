
//array of objects that contains the information for the cities from local JSON
var cityList = [];
fetch('city.list.json')
    .then(function(response){
        return response.json();
    }).then(function(data){
        for(var i in data){
            cityList.push(data[i]);
        } 
    });