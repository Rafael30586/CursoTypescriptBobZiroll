let myName = "Bob" //Typescript es capáz de inferir el tipo de dato en este caso, sabe que la variable es d etipo string
let myName2: string = "Michael" // De esta forma asignamos a la variable un tipo de dato

let numberOfWheels: number = 4
let isStudent: boolean = false

type Address = {
    street: string,
    city: string,
    country: string
}

type Person = { // En este ejemplo estamos creando un custom type, o sea, un tipo de dato que lo podemos personalizar como queramos
    name: string,
    age: number,
    isStudent: boolean
    address?: Address //El signo ? provoca que ese campo (en este caso address) sea opcional cuando creamos un objeto, en esta caso, de tipo Person.
}

let person1 = {
    name: "Joe",
    age: 42,
    isStudent: true,
}

let person2 = {
    name: "Jill",
    age: 66,
    isStudent: false,
    address: {
        street: "Guillermo Clinton",
        city: "Madrid",
        country: "España"
    }
}

let people: Person[] = [person1, person2] //Un array del tipo Person
let people2: Array<Person> = [person1, person2] // Así también se puede crear un array