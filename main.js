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


