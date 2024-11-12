function createList (text, item) {
    document.write(`<ul>`)
    for (let i = 0; i < item; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
createList("не придумав опять нічого нового",3)