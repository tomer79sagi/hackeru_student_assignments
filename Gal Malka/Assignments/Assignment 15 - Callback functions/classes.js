class Person {
    firstName;
    lastName;
    Age;

    constructor(first,last,age){
        this.firstName = first
        this.lastName = last
        this.Age = age
    }

    getFirstName(){
        return this.firstName
    }
    setFirstName(first){
        this.firstName = first
    }

    getLastName(){
        return this.lastName
    }
    setLastName(last){
        this.lastName = last
    }

    getAge(){
        return this.Age
    }
    setAge(age){
        this.Age = age
    }
}


function start(){
    let gal = new Person("Gal","Malka",24)
    alert("First Name Is: " + gal.getFirstName())
    alert("Last Name Is: " + gal.getLastName())
    alert("Age Is: " + gal.getAge())
}


