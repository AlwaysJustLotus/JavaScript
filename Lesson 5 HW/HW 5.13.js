// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sum, currency, exhange) {
    let chosen;
    for (const item in currency) {...}
    let result = sum/chosen.value
    return result;
}

exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')
console.log(result);