import { heapSort } from './HeapSort.js';

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

function paritition(arr, low, high){
    let pivot = arr[low];
    let up = low;
    let down = high;

    while(up < down){
        for(let i = up; i < high; i++){
            if(arr[up] > pivot){
                break;
            }
            up++;
        }
        for(let i = down; i > low; i--){
            if(arr[down] < pivot){
                break;
            }
            down++;
        }
        if(up < down){
            swap(arr, up, down);
        }
    }
    swap(arr, up, down);
    
}

function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
 }

function quickSort (arr, low, high){
    if (low < high){
        let pivot = paritition(arr, low, high);
        quickSort(arr, low, pivot - 1);
        quickSort(arr, pivot + 1, high);
    }
    return arr;
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
let strArray = ["Chris Brugal", "Joshua Fu", "Joshua McHarris", "Carlos de Guzman", "Carlos"]

heapSort(myArray, "hello")
console.log(myArray)