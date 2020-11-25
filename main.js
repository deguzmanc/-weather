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

let myArray = [1, 2 ,3];
function compareInts(a, b) {
    return a - b;
}

function ascending(a, b) {
    return a > b
}

function descending(a, b) {
    return b > a
}

function compareStrings(a, b) {
    var nameA = a.toLowerCase(), nameB = b.toLowerCase()
    // if (nameA < nameB) //sort string ascending
    //     return -1 
    // if (nameA > nameB)
    //     return 1
    return nameA > nameB //default return value (no sorting)
}

function selectionSort(arr, compareFunction) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            //if (arr[min] > arr[j]) {
            if (compareFunction(arr[min] > arr[j])) {
            if (compareFunction(arr[min], arr[j])) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
    }   
}
//let myArray = [3, 2, 1]
//console.log(selectionSort(myArray, compareInts))
//testing
let cityArray = [
{
    "id": 4046319,
    "name": "Bayou La Batre",
    "state": "AL",
    "country": "US",
    "coord": {
        "lon": -88.24852,
        "lat": 30.403521
    }
},
{
    "id": 4046332,
    "name": "Henderson",
    "state": "TX",
    "country": "US",
    "coord": {
        "lon": -94.799377,
        "lat": 32.153221
    }
},
{
    "id": 4046430,
    "name": "Natalia",
    "state": "TX",
    "country": "US",
    "coord": {
        "lon": -98.862534,
        "lat": 29.18968
    }
},
{
    "id": 4046440,
    "name": "Northrup",
    "state": "TX",
    "country": "US",
    "coord": {
        "lon": -96.970261,
        "lat": 30.1005
    }
},
{
    "id": 4046472,
    "name": "Primrose",
    "state": "TX",
    "country": "US",
    "coord": {
        "lon": -97.43335,
        "lat": 32.611519
    }
},
{
    "id": 4046499,
    "name": "Bear Creek",
    "state": "AL",
    "country": "US",
    "coord": {
        "lon": -87.700577,
        "lat": 34.274818
    }
},
{
    "id": 4046704,
    "name": "Fort Hunt",
    "state": "VA",
    "country": "US",
    "coord": {
        "lon": -77.058029,
        "lat": 38.732891
    }
},
{
    "id": 4046760,
    "name": "Jack",
    "state": "VA",
    "country": "US",
    "coord": {
        "lon": -77.509148,
        "lat": 37.196541
    }
},
{
    "id": 4046946,
    "name": "Yorktown",
    "state": "VA",
    "country": "US",
    "coord": {
        "lon": -76.509666,
        "lat": 37.238762
    }
}];

//================================START OF QUICK SORT===============================
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
            down--;
        }
        if(up < down){
            swap(arr, up, down);
        }
    }
    swap(arr, low, down);
    return down;
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

let testArr = [1, 3, 2, 10, 6, 4312, 5, 11]
let strArray = ["Chris Brugal", "Joshua Fu", "Joshua McHarris", "Carlos de Guzman", "Carlos"]
quickSort(testArr, 0, testArr.length-1);
quickSort(strArray, 0, strArray.length);
quickSort(cityArray, 0, cityArray.length);
console.log(cityArray);
//================================END OF QUICK SORT===============================


// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
function heapify(arr, n, i) {
    let largest = i; // Initialize largest as root
    let l = 2 * i + 1; // left = 2*i + 1
    let r = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    if (l < n && arr[l] > arr[largest])
        largest = l;

    // If right child is larger than largest so far
    if (r < n && arr[r] > arr[largest])
        largest = r;

    // If largest is not root
    if (largest != i) {
        let swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;

        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}

function heapSort(arr) {
    let n = arr.length;

    // Build heap (rearrange array)
    for (let i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);

    // One by one extract an element from heap
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // call max heapify on the reduced heap
        heapify(arr, i, 0);
    }
}


//let myArray = [3, 2, 1, 15, 1, 4]
//let strArray = ["Chris Brugal", "Joshua Fu", "Joshua McHarris", "Carlos de Guzman", "Carlos"]
heapSort(myArray)
console.log(myArray)
//console.log(selectionSort(myArray, descending))
//console.log(selectionSort(strArray, compareStrings))
