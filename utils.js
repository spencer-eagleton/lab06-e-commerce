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

export function toUSD(number){
    return number.toLocaleString('en-us', { style: 'currency', currency: 'USD' });
}


export function getCart(){
    const cartString = localStorage.getItem('CART') || '[]';
    const cart = JSON.parse(cartString);
    return cart;
}

export function addItem(id){
    const cart = getCart();
    const cartItem = findById(id, cart);
    
    if (cartItem){
        cartItem.qty++;
    } else {
        const newItem = { id: id, qty: 1 };
        cart.push(newItem);
    }
    const stringCart = JSON.stringify(cart);
    localStorage.setItem('CART', stringCart);

}

import { chickens } from './chicken.js';

export function getProducts(){
    let lsProducts = localStorage.getItem('PRODUCTS');
    const products = JSON.parse(lsProducts);

    if (!products){
        const chickensString = JSON.stringify(chickens);
        localStorage.setItem('PRODUCTS', chickensString);
    }
    return products || chickens;
}

export function addProduct(newChicken){
    let products = getProducts();
    
    products.push(newChicken);

    let productsString = JSON.stringify(products);
    localStorage.setItem('PRODUCTS', productsString);
}