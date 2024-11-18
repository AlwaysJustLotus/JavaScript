// *Через Array.prototype. створити власний foreach, filter


Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

const array = [1, 2, 3, 4, 5];

array.myForEach((element, index) => {
    console.log(`Елемент: ${element}, Індекс: ${index}`);
});

Array.prototype.myFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

const filteredArray = array.myFilter(element => element > 3);

console.log(filteredArray);


