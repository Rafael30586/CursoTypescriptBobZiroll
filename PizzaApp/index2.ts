let myName = "Bob" //Typescript es capáz de inferir el tipo de dato en este caso, sabe que la variable es d etipo string
let myName2: string = "Michael" // De esta forma asignamos a la variable un tipo de dato

let numberOfWheels: number = 4
let isStudent: boolean = false

type Person = { // En este ejemplo estamos creando un custom type, o sea, un tipo de dato que lo podemos personalizar como queramos
    name: string,
    age: number,
    isStudent: boolean
}

let person1 = {
    name: "Joe",
    age: 42,
    isStudent: true
}

let person2 = {
    name: "Jill",
    age: 66,
    isStudent: false
}