// створити функцію яка приймає масив та виводить кожен його елемент

function printElement(arr){
    for (const item of arr) {
        console.log(item)
    }
}
let arr = [15, 3.14, true, "Hi", "Alex"]
printElement(arr)