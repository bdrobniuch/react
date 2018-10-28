class Person {
    constructor (name){
        this.name = name;
    }
    sayName() {
        console.log(`My name is ${this.name}`);
    }
}


let user = new Person("Łukasz");

console.log(user);
user.sayName();

let adam = new Person('Adam');

adam.sayName();

class User extends Person {
    constructor (name,status) {
        super(name);
        this.status = status;
    }
    
    fullInfo() {
        this.sayName();
        if (this.status) {
            console.log("Aktywny");
        } else{
            console.log("Nieaktywny");
        }
    }
}

let newUser = new User("Adam",true);

console.log(newUser);
newUser.fullInfo();