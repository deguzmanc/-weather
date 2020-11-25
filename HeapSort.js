//* ==== Passed functions for sorts ==== *//
function ascendingName(a, b) {
    var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
    return nameA.localeCompare(nameB) === 1
}

function descendingName(a, b) {
    var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
    return nameA.localeCompare(nameB) === -1
}

function ascendingLon(a, b) {
    return a.coord.lon > b.coord.lon
}

function descendingLon(a, b) {
    return a.coord.lon < b.coord.lon
}

function ascendingLat(a, b) {
    return a.coord.lat > b.coord.lat
}

function descendingLat(a, b) {
    return a.coord.lat < b.coord.lat
}

// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
function heapify(arr, n, i, compareFunction) {
    let largest = i; // Initialize largest as root
    let l = 2 * i + 1; // left = 2*i + 1
    let r = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    if (l < n && compareFunction(arr[l], arr[largest]))
        largest = l;

    // If right child is larger than largest so far
    if (r < n && compareFunction(arr[r], arr[largest]))
        largest = r;

    // If largest is not root
    if (largest != i) {
        let swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;

        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest, compareFunction);
    }
}

//* ==== Main / exported function ==== *//
function heapSort(arr, sortby) {
    let func = ascendingName
    switch (sortby) {
        case 'name':
            func = ascendingName
            break;
        case 'longitude':
            func = ascendingLon
            break;
        case 'latitude':
            func = ascendingLat
            break;
        case 'distance':
            func = ascendingName
            break;
    }

    let n = arr.length;

    // Build heap (rearrange array)
    for (let i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i, func);

    // One by one extract an element from heap
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // call max heapify on the reduced heap
        heapify(arr, i, 0, func);
    }
}

function topElements(arr, l, sortby) {
    //build opposite heap as heapsort
    let func = descendingName
    switch (sortby) {
        case 'name':
            func = descendingName
            break;
        case 'longitude':
            func = descendingLon
            break;
        case 'latitude':
            func = descendingLat
            break;
        case 'distance':
            func = descendingName
            break;
    }

    let n = arr.length;

    // Build heap in place
    for (let i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i, func);

    //copy top l elements into array and return
    let tArr = []
    for (let i = n - 1; i > n - 1 - l; i--) {
        // copy into array
        let temp = arr[0];
        tArr.push(temp)

        //swap
        arr[0] = arr[i];
        arr[i] = temp;

        // call max heapify on the reduced heap
        heapify(arr, i, 0, func);
    }
    
    return tArr
}

export { heapSort, topElements};