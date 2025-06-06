const menu = [
    {name: "margarita", price: 8},
    {name: "pepperoni", price: 10},
    {name: "hawaian", price: 10},
    {name: "veggie", price: 9},
]

var id = 0;

let cashInRegister = 100;
const orderQueue = [];

function addNewPizza(pizza){
    menu.push(pizza);
}

function placeOrder(pizzaName){
    for(pizza of menu){
        if(pizzaName === pizza.name){
            id = id + 1;
            cashInRegister = cashInRegister + (pizza.price)
            const order = { orderId: id,orderedPizza : pizzaName , status: "ordered"}
            orderQueue.push(order);
            console.log(order);
            return order;
        }
    }

}

function completeOrder(orderId){
    for(singleOrder of orderQueue){
        if(orderId=== singleOrder.orderId){
            singleOrder.status = "completed";
            return singleOrder;
        }
        
    }

}