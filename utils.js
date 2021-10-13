export function findById(id, items){
    for (let item of items){
        if (item.id === id){
            return item;
        }
    }
}

export function calculateOrderTotal(cart, chickens) {
    let orderTotal = 0;
    for (let item of cart){
        const chicken = findById(item.id, chickens);
        orderTotal = orderTotal + chicken.price * item.qty;
    }
    return orderTotal;
}