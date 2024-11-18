// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Cinderella {
//     constructor(name, age, shoeSize) {
//         this.name = name;
//         this.age = age;
//         this.shoeSize = shoeSize;
//     }
// }
//
// class Prince {
//     constructor(name, age, foundShoeSize) {
//         this.name = name;
//         this.age = age;
//         this.foundShoeSize = foundShoeSize;
//     }
//
//     findCinderella(cinderellas) {
//         for (const cinderella of cinderellas) {
//             if (cinderella.shoeSize === this.foundShoeSize) {
//                 return cinderella;
//             }
//         }
//         return null;
//     }
// }
//
// const cinderellas = [
//     new Cinderella('Oksana', 18, 35),
//     new Cinderella('Ira', 19, 36),
//     new Cinderella('Marta', 20, 37),
//     new Cinderella('Lena', 21, 38),
//
// ];
//
// const prince = new Prince('Alexander', 22, 36);
//
// const foundCinderella = prince.findCinderella(cinderellas);
// if (foundCinderella) {
//     console.log(`Попелюшка знайдена: ${foundCinderella.name}`);
// } else {
//     console.log('Попелюшка не знайдена.');
// }
//
// const foundCinderellaWithFind = cinderellas.find(
//     cinderella => cinderella.shoeSize === prince.foundShoeSize
// );
//
// if (foundCinderellaWithFind) {
//     console.log(`Попелюшка знайдена: ${foundCinderellaWithFind.name}`);
// } else {
//     console.log('Попелюшка не знайдена.');
// }

