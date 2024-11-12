function objects(users){
    for (const user of users){
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
    }
}

objects([
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Jane", age: 25 },
    { id: 3, name: "Mike", age: 35 }
]);