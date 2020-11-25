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

/*
let myArray = [1, 2 ,3];
function compareInts(a, b) {
    return a - b;
}

function compareStrings(a, b) {
    var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
    if (nameA < nameB) //sort string ascending
        return -1 
    if (nameA > nameB)
        return 1
    return 0 //default return value (no sorting)
}

function selectionSort(arr, compareFunction) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            //if (arr[min] > arr[j]) {
            if (compareFunction(arr[min] > arr[j])) {
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

let myArray = [3, 2, 1]
console.log(selectionSort(myArray, compareInts))
*/

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


