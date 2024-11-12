function MinNumber(arr){
    let min = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

console.log(MinNumber([11, 22, 33, -11, -22, -33]));