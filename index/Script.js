const inputField = document.getElementById('inputField');
const addButton = document.getElementById('addButton');
const listBox = document.getElementById('listBox');
const sortByNameButton = document.getElementById('sortByNameButton');
const sortByValueButton = document.getElementById('sortByValueButton');
const deleteButton = document.getElementById('deleteButton');

function addPair() {
    const input = inputField.value.trim();
    const regex = /^[a-zA-Z0-9]+\s*=\s*[a-zA-Z0-9]+$/;
    if (!regex.test(input)) {
        alert('Invalid format. Use Name=Value (alphanumeric only).');
        return;
    }
    const [name, value] = input.split('=').map(item => item.trim());
    const option = document.createElement('option');
    option.value = name + '=' + value;
    option.textContent = `${name} = ${value}`;
    listBox.appendChild(option);
    inputField.value = '';
}

function sortByName() {
    sortList(0);
}

function sortByValue() {
    sortList(1);
}

function sortList(index) {
    const options = Array.from(listBox.options);
    options.sort((a, b) => {
        const aPair = a.value.split('=').map(item => item.trim());
        const bPair = b.value.split('=').map(item => item.trim());
        return aPair[index].localeCompare(bPair[index]);
    });
    listBox.innerHTML = '';
    options.forEach(option => listBox.appendChild(option));
}

function deleteSelected() {
    Array.from(listBox.selectedOptions).forEach(option => option.remove());
}

addButton.addEventListener('click', addPair);
sortByNameButton.addEventListener('click', sortByName);
sortByValueButton.addEventListener('click', sortByValue);
deleteButton.addEventListener('click', deleteSelected);

inputField.addEventListener('keypress', event => {
    if (event.key === 'Enter') addPair();
});