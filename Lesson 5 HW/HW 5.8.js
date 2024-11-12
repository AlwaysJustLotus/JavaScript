// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function createListFromArray(arr) {
    document.write(`<ul>`)
    for (const item of arr){
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}
createListFromArray([111, 222, 333, Math.PI, true, 'write'])