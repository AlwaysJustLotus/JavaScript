// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// function Car(model, manufacturer, year, maxSpeed, engineVolume) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//
//     this.drive = function () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год`);
//     };
//
//     this.info = function () {
//         console.log(`Модель: ${this.model}`);
//         console.log(`Виробник: ${this.manufacturer}`);
//         console.log(`Рік випуску: ${this.year}`);
//         console.log(`Максимальна швидкість: ${this.maxSpeed}`);
//         console.log(`Об'єм двигуна: ${this.engineVolume}`);
//         if (this.driver) {
//             console.log(`Водій: ${JSON.stringify(this.driver)}`);
//         }
//     };
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//         console.log(`Нова максимальна швидкість: ${this.maxSpeed}`);
//     };
//
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//         console.log(`Новий рік випуску: ${this.year}`);
//     };
//
//     this.addDriver = function (driver) {
//         this.driver = driver;
//         console.log(`Водія додано: ${JSON.stringify(driver)}`);
//     };
// }
//
// const myCar = new Car('Megane', 'Renault', 2010, 212, 1.4);
//
// myCar.drive();
// myCar.info();
// myCar.increaseMaxSpeed(28);
// myCar.changeYear(2012);
// myCar.addDriver({ name: 'Alex', age: 22 });
// myCar.info();