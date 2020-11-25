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
    });


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

let myArray = [3, 2, 1]
console.log(selectionSort(myArray, compareInts))
*/

function ascending(a, b) {
    return a > b
}

function descending(a, b) {
    return b > a
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
        heapify(arr, n, largest);
    }
}

function heapSort(arr, sortby) {
    let func = function(a, b) {
        return a > b
    }
    // switch (sortby) {
    //     case 'name':
    //         func = descending
    //         break;
    //     case 'longitude':
    //         func = ascending
    //         break;
    // }
    let n = arr.length;

    // Build heap (rearrange array)
    for (let i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i, ascending);

    // One by one extract an element from heap
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // call max heapify on the reduced heap
        heapify(arr, i, 0, ascending);
    }
}

export {heapSort};