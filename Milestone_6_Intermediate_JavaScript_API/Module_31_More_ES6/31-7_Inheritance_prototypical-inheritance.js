
class Vehicle {

    constructor (name, price){
        this.name = name;
        this.price = price;
    }

    move(){
        console.log('Ami choli')
    }
}

class Bus extends Vehicle {

    constructor (name, price, seat){
        super(name, price);
        this.seat = seat;
    }

    route(){
        console.log('dhake to cox');
    }
}

class Truck extends Vehicle {

    constructor (name, price, capacity){
        super (name, price);
        this.capacity = capacity;
    }

    route (){
        console.log('daka to baka');
    }
}

const greenline = new Bus('greenline', 12, 50);
// console.log(greenline);

// Encapsulation
class Person {

    #status;
    constructor (name, age, status) {
        this.name = name;
        this.age = age;
        this.#status = status;
    }

    action (){
        console.log(this.#status);
        
    }
}

const solim = new Person('solim', 20, 'single');

solim.action();
