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
},
{
    "id": 11263,
    "name": "Shahrīār Kandeh",
    "state": "",
    "country": "IR",
    "coord": {
        "lon": 53.19902,
        "lat": 36.631939
    }
},
{
    "id": 11754,
    "name": "Bālā Aḩmad Kolā",
    "state": "",
    "country": "IR",
    "coord": {
        "lon": 52.667271,
        "lat": 36.649059
    }
},
{
    "id": 12795,
    "name": "Aş Şūrah aş Şaghīrah",
    "state": "",
    "country": "SY",
    "coord": {
        "lon": 36.573872,
        "lat": 33.032669
    }
},
{
    "id": 14177,
    "name": "Āqdūz",
    "state": "",
    "country": "IR",
    "coord": {
        "lon": 44.26556,
        "lat": 39.197498
    }
},
{
    "id": 14256,
    "name": "Āzādshahr",
    "state": "",
    "country": "IR",
    "coord": {
        "lon": 48.570728,
        "lat": 34.790878
    }
},
{
    "id": 18007,
    "name": "Gollar",
    "state": "",
    "country": "IR",
    "coord": {
        "lon": 46.25,
        "lat": 37.383331
    }
},
{
    "id": 18093,
    "name": "Dīgāleh",
    "state": "",
    "country": "IR",
    "coord": {
        "lon": 45.106998,
        "lat": 37.552502
    }
},
{
    "id": 18557,
    "name": "Qarālar-e Mīrzā Ḩoseynqolī",
    "state": "",
    "country": "IR",
    "coord": {
        "lon": 45.067501,
        "lat": 37.674702
    }
},
{
    "id": 18918,
    "name": "Protaras",
    "state": "",
    "country": "CY",
    "coord": {
        "lon": 34.058331,
        "lat": 35.012501
    }
},
{
    "id": 23814,
    "name": "Kahrīz",
    "state": "",
    "country": "IR",
    "coord": {
        "lon": 47.055302,
        "lat": 34.383801
    }
},
{
    "id": 24851,
    "name": "Nūrābād",
    "state": "",
    "country": "IR",
    "coord": {
        "lon": 47.9725,
        "lat": 34.073399
    }
},
{
    "id": 29033,
    "name": "Rokan Sarā",
    "state": "",
    "country": "IR",
    "coord": {
        "lon": 49.608101,
        "lat": 37.32085
    }
},
{
    "id": 30321,
    "name": "Zīrjān",
    "state": "",
    "country": "IR",
    "coord": {
        "lon": 58.43586,
        "lat": 34.214401
    }
},
{
    "id": 30485,
    "name": "Dahasuways",
    "state": "",
    "country": "YE",
    "coord": {
        "lon": 50.729439,
        "lat": 15.72389
    }
},
{
    "id": 30490,
    "name": "Ash Shihr",
    "state": "",
    "country": "YE",
    "coord": {
        "lon": 49.606392,
        "lat": 14.75863
    }
}]
// let cityArray = [{
//     "id": 833,
//     "name": "Ḩeşār-e Sefīd",
//     "state": "",
//     "country": "IR",
//     "coord": {
//         "lon": 47.159401,
//         "lat": 34.330502
//     }
// },
// {
//     "id": 2960,
//     "name": "‘Ayn Ḩalāqīm",
//     "state": "",
//     "country": "SY",
//     "coord": {
//         "lon": 36.321911,
//         "lat": 34.940079
//     }
// },
// {
//     "id": 3245,
//     "name": "Taglag",
//     "state": "",
//     "country": "IR",
//     "coord": {
//         "lon": 44.98333,
//         "lat": 38.450001
//     }
// },
// {
//     "id": 3530,
//     "name": "Qabāghlū",
//     "state": "",
//     "country": "IR",
//     "coord": {
//         "lon": 46.168499,
//         "lat": 36.173302
//     }
// },
// {
//     "id": 5174,
//     "name": "‘Arīqah",
//     "state": "",
//     "country": "SY",
//     "coord": {
//         "lon": 36.48336,
//         "lat": 32.889809
//     }
// },
// {
//     "id": 7264,
//     "name": "Kalāteh-ye Dowlat",
//     "state": "",
//     "country": "IR",
//     "coord": {
//         "lon": 57.616982,
//         "lat": 36.163841
//     }
// },
// {
//     "id": 8084,
//     "name": "Behjatābād",
//     "state": "",
//     "country": "IR",
//     "coord": {
//         "lon": 51.461639,
//         "lat": 36.667431
//     }
// },
// {
//     "id": 9874,
//     "name": "Ţālesh Maḩalleh",
//     "state": "",
//     "country": "IR",
//     "coord": {
//         "lon": 50.679192,
//         "lat": 36.894329
//     }
// }]

console.log(cityArray)
// console.log(topHeap(cityArray, "distance", 2, false))
// console.log(topSelect(cityArray, "distance", 2, false))
console.log(heapSort(cityArray))
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


