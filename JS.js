function User(name, age, status){
    this.name = name;
    this.age = age;
    this.status = status;
    console.log(this);
}

new User('Alex', 12, true);
new User('Misha', 13, false)