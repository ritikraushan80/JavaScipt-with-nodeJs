class Person{
   constructor(name){
        console.log('I am  Inside constructor');
        this.name = name
    }

    toString(){
        return (`I am ${this.name}`)
    }
}

class Student extends Person{
    constructor(name,address, age){
        super(name);
        this.address = address;
        this.age = age;
    }

    toString(){
        return (`${super.toString()}, I am from ${this.address} and I am ${this.age} years old.`)
    }
}
 
class Employee extends Student{
    constructor(name, address, age, Id){
            super(name, address, age)
            this.Id = Id;
    }
    toString(){
        return (`${super.toString()}, My Id: ${this.Id}`)
    }
}
 
let p2 = new Employee('Ritik','Hajipur', 23, 1004)
console.log(p2);
console.log(p2.toString())