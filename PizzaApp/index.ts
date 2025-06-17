type Pizza = {
    id: number
    name: string,
    price: number
}

type Order = {
    id: number,
    pizza: string,
    status: "completed" | "ordered"
}

let id = 0;
let cashInRegister2 = 100;
const orderQueue2: Order[] = [];
let pizzaGlobalId = 1;

const menu2: Pizza[] = [
    {id: pizzaGlobalId++, name: "margarita", price: 8},
    {id: pizzaGlobalId++, name: "pepperoni", price: 10},
    {id: pizzaGlobalId++, name: "hawaian", price: 10},
    {id: pizzaGlobalId++, name: "veggie", price: 9},
]



function addNewPizza2(pizza: Omit<Pizza, "id">): Pizza{ //Se puede aclarar que una función retorna undefined colocando void, aunque no es necesario, la función funciona igual
    let newPizza: Pizza ={
        id: pizzaGlobalId,
        name: pizza.name,
        price: pizza.price
    }
    pizzaGlobalId++;
    menu2.push(newPizza);
    return newPizza;
}

addNewPizza2({name:"Chicken bacon ranch",price: 12})
addNewPizza2({name:"BBQ chicken",price: 12})
addNewPizza2({name:"Spicy sausage",price: 11})

function placeOrder2(pizzaName: string): Order | undefined{
    for(let pizza of menu2){
        if(pizzaName === pizza.name){
            id = id + 1;
            cashInRegister2 = cashInRegister2 + (pizza.price)
            const order: Order = { id: id, pizza : pizzaName , status: "ordered"}
            orderQueue2.push(order);
            console.log(order);
            return order;
        }
    }

}

function addToArray<T>(array: T[], item: T): T[]{
    array.push(item)
    return array
}

addToArray<Pizza>(menu2,{id: pizzaGlobalId++,name: "Chicken Bacon Ranch", price: 12})
addToArray<Order>(orderQueue2, { id: pizzaGlobalId++,pizza: menu2[2].name, status: "completed"})

function completeOrder2(orderId: number): Order | undefined{
    for(let singleOrder of orderQueue2){
        if(orderId === singleOrder.id){
            singleOrder.status = "completed";
            return singleOrder;
        }
        
    }

}

function getPizzaDetail(identifier: number | string): Pizza | undefined { // En este caso, el argumento puede ser un número o un string, además, estamos aclarando que retorna datos de tipo 'Pizza' o undefined
    if(typeof(identifier)==="number"){
        for(let pizza of menu2){
            if(identifier===pizza.id) return pizza;
        }

    }else if(typeof(identifier)==="string"){
        for(let pizza of menu2){
            if(identifier===pizza.name) return pizza;
        }
    }else{
        throw new TypeError("Parameter `identifier` must be either a string or a number");
    }

}

