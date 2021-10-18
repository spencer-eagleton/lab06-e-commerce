
import { renderLineItem } from '../render-line-item.js';
import { findById, calculateOrderTotal, toUSD, getCart, getProducts } from '../utils.js';

const cart = getCart();
const chickens = getProducts();

const tableBody = document.getElementById('table-body');
for (let cartItem of cart){
    
    const chickenData = findById(cartItem.id, chickens);


    const tableRow = renderLineItem(cartItem, chickenData);

    tableBody.appendChild(tableRow);
}

const orderTotal = calculateOrderTotal(cart, chickens);
const tableDataOrderTotal = document.getElementById('total');
tableDataOrderTotal.textContent = toUSD(orderTotal);

const checkoutButton = document.getElementById('checkout-button');

checkoutButton.addEventListener('click', ()=>{
    localStorage.removeItem('CART');
    window.location.replace('..');
});