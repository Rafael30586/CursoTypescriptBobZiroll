type Pizza = {
    name: string,
    price: number
}

type Order = {
    id: number,
    pizza: Pizza,
    status: string
}


const menu2 = [
    {name: "margarita", price: 8},
    {name: "pepperoni", price: 10},
    {name: "hawaian", price: 10},
    {name: "veggie", price: 9},
]

var id = 0;
let cashInRegister2 = 100;
const orderQueue2 = [];

function addNewPizza2(pizza: Pizza){
    menu2.push(pizza);
}

function placeOrder2(pizzaName: string){
    for(let pizza of menu2){
        if(pizzaName === pizza.name){
            id = id + 1;
            cashInRegister2 = cashInRegister2 + (pizza.price)
            const order = { orderId: id,orderedPizza : pizzaName , status: "ordered"}
            orderQueue2.push(order);
            console.log(order);
            return order;
        }
    }

}

function completeOrder2(orderId: number){
    for(let singleOrder of orderQueue2){
        if(orderId=== singleOrder.orderId){
            singleOrder.status = "completed";
            return singleOrder;
        }
        
    }

}