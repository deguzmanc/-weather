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

export{quickSort}