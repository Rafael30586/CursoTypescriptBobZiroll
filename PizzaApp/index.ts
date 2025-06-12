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


const menu2: Pizza[] = [
    {id:1, name: "margarita", price: 8},
    {id:2, name: "pepperoni", price: 10},
    {id:3, name: "hawaian", price: 10},
    {id:4, name: "veggie", price: 9},
]

var id = 0;
let cashInRegister2 = 100;
const orderQueue2: Order[] = [];

function addNewPizza2(pizza: Pizza){
    menu2.push(pizza);
}

function placeOrder2(pizzaName: string){
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

function completeOrder2(orderId: number){
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

