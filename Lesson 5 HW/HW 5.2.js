// створити функцію яка обчислює та повертає площу кола з радіусом r

function calculateRadius(radius) {
    let sum =  3.14 * radius * radius;
    return sum;
}

let radius = 15;
let area = calculateRadius(radius)
console.log(area)
