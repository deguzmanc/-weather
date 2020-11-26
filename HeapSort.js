//* ==== Passed comparison functions for sorts ==== *//
function ascendingName(a, b) {
    let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
    return nameA.localeCompare(nameB)
}

function descendingName(a, b) {
    let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
    return nameB.localeCompare(nameA)
}

function ascendingLon(a, b) {
    return a.coord.lon > b.coord.lon ? 1 : -1
}

function descendingLon(a, b) {
    return a.coord.lon < b.coord.lon ? 1 : -1
}

function ascendingLat(a, b) {
    return a.coord.lat > b.coord.lat ? 1 : -1
}

function descendingLat(a, b) {
    return a.coord.lat < b.coord.lat ? 1 : -1
}

//FIXME
function ascendingDist(a, b, c) {
    return a.coord.lat < b.coord.lat ? 1 : -1
}

function descendingDist(a, b, c) {
    return a.coord.lat < b.coord.lat ? 1 : -1
}

function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function heapify(arr, n, i, compareFunction) {
    let largest = i;        //initialize largest as root
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    // If left child is larger than root
    if (l < n && compareFunction(arr[l], arr[largest]) === 1)
        largest = l;

    // If right child is larger than others
    if (r < n && compareFunction(arr[r], arr[largest]) === 1)
        largest = r;

    // If largest is not root
    if (largest != i) {
        swap(arr, i, largest)

        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest, compareFunction);
    }
}

//* ==== Main / exported function ==== *//
function heapSort(arr, sortby, ascending) {
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
    for (let i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i, func);

    // One by one extract an element from heap
    for (let i = n - 1; i > 0; i--) {
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // call heapify on the reduced heap
        heapify(arr, i, 0, func);
    }
}

function topElements(arr, l, sortby, ascending) {
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
    for (let i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i, func);

    //copy top l elements into array and return
    let tArr = []
    for (let i = n - 1; i > n - 1 - l; i--) {
        tArr.push(arr[0])       // copy into array

        swap(arr, i, 0)         //swap with root
        heapify(arr, i, 0, func);           // call max heapify on the reduced heap
    }
    
    return tArr
}

export { heapSort, topElements};