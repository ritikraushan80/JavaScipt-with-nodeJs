class Getter{
    #age
    static address = 'Hajipur'
    constructor(name){
        this.name = name
    }
    printIntro(){
        return (`Hii, my name is ${this.name} and I am ${this.#age} years old.`)
    }

    get getAge(){
        return this.#age
    }
    set setAge(age){
        this.#age =  age
    }
   

 
}
console.log(Getter.address)

let p1 = new Getter('Ritik');
 p1.setAge = 23;
console.log(p1.printIntro());
console.log(p1.getAge);