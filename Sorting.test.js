import { expect, test } from '@jest/globals';
import { heapSort, topElements, ascendingName } from './Sorting.js';
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

//array of objects that contains the information for the cities from local JSON
var cityList = require("./city.list.json")
var cityList2 = _.cloneDeep( cityList )

test("Heap Sort in ascending order", () => {
    let cityNames = ["‘Arīqah", "‘Ayn Ḩalāqīm", "Behjatābād", "Ḩeşār-e Sefīd", "Kalāteh-ye Dowlat", "Qabāghlū", "Taglag", "Ţālesh Maḩalleh"]
    expect(heapSort(cityArray).map(a => a.name)).toEqual(cityNames)
})

test("Heap Sort in descending longitude", () => {
    let cityNames = ["Kalāteh-ye Dowlat", "Behjatābād", "Ţālesh Maḩalleh", "Ḩeşār-e Sefīd", "Qabāghlū", "Taglag", "‘Arīqah", "‘Ayn Ḩalāqīm"]
    expect(heapSort(cityArray, "longitude", false).map(a => a.name)).toEqual(cityNames)
})

test("Heap Sort in ascending name with whole data", () => {
    expect(heapSort(cityList, "name").map(a => a.name)).toEqual(cityList2.sort(ascendingName).map(a => a.name))
})