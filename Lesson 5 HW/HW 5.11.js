function sumNumbers(arr) {
    let everything = 0;
    for (const item of arr) {
        everything = everything + item;
    }
    return everything;
}
console.log(sumNumbers([1,2,10]));