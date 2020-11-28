import { expect, test } from '@jest/globals';
import { heapSort, quickSort, topHeap, topSelect, ascendingName, descendingName, ascendingLon, descendingLon, ascendingLat, descendingLat, ascendingDist, descendingDist } from './Sorting.js';
// import { heapSort, topElements, ascendingName, quickSort, descendingLon, ascendingDist } from './Sorting.js';
const fetch = require("node-fetch");
const _ = require("lodash")

//testing
var cityArray = [{
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

let cityArray2 = _.cloneDeep(cityArray)

test("Heap Sort in ascending order", () => {
    expect(heapSort(cityArray).map(a => a.name)).toEqual(cityArray2.sort(ascendingName).map(a => a.name))
})

test("Heap Sort and quickSort in descending longitude", () => {
    expect(heapSort(cityArray, "longitude", false).map(a => a.name)).toEqual(quickSort(cityArray2, "longitude", false).map(a => a.name))
})

test("Quick Sort in ascending order", () => {
    expect(quickSort(cityArray).map(a => a.name)).toEqual(cityArray2.sort(ascendingName).map(a => a.name))
})

test("Heap Sort and Quick Sort in descending distance from Gainesville", () => {
    expect(quickSort(cityArray, "distance", false).map(a => a.name)).toEqual(quickSort(cityArray2, "distance", false).map(a => a.name))
})

test("topHeap and topSelect in asceding latitude", () => {
    expect(topHeap(cityArray, "latitude", 3)).toEqual(topSelect(cityArray2,"latitude", 3))
})