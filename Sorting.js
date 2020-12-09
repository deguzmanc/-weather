//* ==== Passed comparison functions for sorts ==== *//
function ascendingName({ name: a }, {name: b}) {
    return a.localeCompare(b)
}

function descendingName({ name: a }, {name: b}) {
    return b.localeCompare(a)
}

function ascendingLon({coord: {lon : a}}, {coord: {lon : b}}, c) {
    return c ? Math.abs(a - c.coord.lon) - Math.abs(b - c.coord.lon) : a - b;
}

function descendingLon({coord: {lon : a}}, {coord: {lon : b}}, c) {
    return c ? Math.abs(b - c.coord.lon) - Math.abs(a - c.coord.lon) : b - a;
}

function ascendingLat({coord: {lat : a}}, {coord: {lat : b}}, c) {
    return c ? Math.abs(a - c.coord.lat) - Math.abs(b - c.coord.lat) : a - b;
}

function descendingLat({coord: {lat : a}}, {coord: {lat : b}}, c) {
    return c ? Math.abs(b - c.coord.lat) - Math.abs(a - c.coord.lat) : b - a;
}

function distSquared({lat : aLat, lon : aLon}, {lat : bLat, lon : bLon}) {
    return Math.pow(aLat - bLat, 2) + Math.pow(aLon - bLon, 2)
}

function ascendingDist({coord: a}, {coord: b}, x) {
    if (x === undefined) {
        let c = {lon : -82.324829, lat : 29.65163}
        return distSquared(a, c) - distSquared(b, c)
    }
    else {
        let { coord : c } = x;
        return distSquared(a, c) - distSquared(b, c)
    }        
}

function descendingDist({coord: a}, {coord: b}, x) {
    if (x === undefined) {
        let c = {lon : -82.324829, lat : 29.65163}
        return distSquared(a, c) - distSquared(b, c)
    }
    else {
        let { coord : c } = x;
        return distSquared(a, c) - distSquared(b, c)
    }       
}

function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function heapify(arr, n, i, compareFunction, city) {
    let largest = i;        //initialize largest as root
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    // If left child is larger than root
    if (l < n && compareFunction(arr[l], arr[largest], city) > 0)
        largest = l;

    // If right child is larger than others
    if (r < n && compareFunction(arr[r], arr[largest], city) > 0)
        largest = r;

    // If largest is not root
    if (largest != i) {
        swap(arr, i, largest)

        // Recursively heapify the sub-tree
        heapify(arr, n, largest, compareFunction, city)
    }
}

//* ==== Main / exported function ==== *//
function heapSort(arr, sortby, ascending, city) {
    if (ascending === undefined)
        ascending = true                //default
    let func = ascending ? ascendingName : descendingName
    switch (sortby) {
        case 'name':
            func = ascending ? ascendingName : descendingName
            break;
        case 'longitude':
            func = ascending ? ascendingLon : descendingLon
            break;
        case 'latitude':
            func = ascending ? ascendingLat : descendingLat
            break;
        case 'distance':
            func = ascending ? ascendingDist : descendingDist
            break;
    }

    let n = arr.length;

    // Build heap in place
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
        heapify(arr, n, i, func, city);

    // One by one extract an element from heap
    for (let i = n - 1; i > 0; i--) {
        swap(arr, 0, i)

        // call heapify on the reduced heap
        heapify(arr, i, 0, func, city);
    }
    return arr
}

function paritition(arr, low, high, compareFunction, city){
    swap(arr, low, Math.floor((low + high) / 2))
    let pivot = arr[low];
    let up = low;
    let down = high;
    
    while(up < down) {
        for(let i = up; i < high; i++){
            // if(arr[up] > pivot) {
            if (up > 0 && up < arr.length && compareFunction(arr[up], pivot, city) > 0) {
                break;
            }
            up++;
        }
        for(let i = down; i > low; i--){
            // if(down > 0 && down < arr.length && arr[down] < pivot) {
            if (down > 0 && down < arr.length && compareFunction(arr[down], pivot, city) < 0) {
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

function quickSortHelp(arr, low, high, compareFunction, city){
    if (low < high){
        let pivot = paritition(arr, low, high, compareFunction, city);
        quickSortHelp(arr, low, pivot - 1, compareFunction, city);
        quickSortHelp(arr, pivot + 1, high, compareFunction, city);
    }
    return arr;
}

function quickSort(arr, sortby, ascending, city) {
    if (ascending === undefined)
        ascending = true                //default
    let func = ascending ? ascendingName : descendingName
    switch (sortby) {
        case 'name':
            func = ascending ? ascendingName : descendingName
            break;
        case 'longitude':
            func = ascending ? ascendingLon : descendingLon
            break;
        case 'latitude':
            func = ascending ? ascendingLat : descendingLat
            break;
        case 'distance':
            func = ascending ? ascendingDist : descendingDist
            break;
    }
    return quickSortHelp(arr, 0, arr.length, func, city)
}

function topHeap(arr, sortby, l, ascending, city) {
    if (ascending === undefined)
        ascending = true
    //build opposite heap as heapsort
    let func = ascending ? descendingName : ascendingName
    switch (sortby) {
        case 'name':
            func = ascending ? descendingName : ascendingName
            break;
        case 'longitude':
            func = ascending ? descendingLon :ascendingLon
            break;
        case 'latitude':
            func = ascending ? descendingLat : ascendingLat
            break;
        case 'distance':
            func = ascending ? descendingDist : ascendingDist
            break;
    }

    let n = arr.length;

    // Build heap in place
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
        heapify(arr, n, i, func, city);

    //put l elements at back of array
    let tArr = []
    for (let i = n - 1; i > n - 1 - l; i--) {
        tArr.push(arr[0])       //push top of heap

        swap(arr, i, 0)         //swap with root
        heapify(arr, i, 0, func, city);           // call max heapify on the reduced heap
    }
    
    return tArr//arr.slice(n - l)
}

function topSelect(arr, sortby, l, ascending, city) { 
    if (ascending === undefined)
        ascending = true                //default
    let func = ascending ? ascendingName : descendingName
    switch (sortby) {
        case 'name':
            func = ascending ? ascendingName : descendingName
            break;
        case 'longitude':
            func = ascending ? ascendingLon : descendingLon
            break;
        case 'latitude':
            func = ascending ? ascendingLat : descendingLat
            break;
        case 'distance':
            func = ascending ? ascendingDist : descendingDist
            break;
    }
    let n = arr.length;
    // let tArr = []
    for(let i = 0; i < l; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            // if(func(inputArr[j] < inputArr[min]) {
            if (func(arr[j], arr[min], city) < 0) {
                min=j; 
            }
         }
        //  tArr.push(arr[min])
         if (min != i) {
             swap(arr, i, min)    
        }
        
    }
    return arr.slice(0, l) //tArr;
}

export { heapSort, quickSort, topHeap, topSelect, ascendingName, descendingName, ascendingLon, descendingLon, ascendingLat, descendingLat, ascendingDist, descendingDist };