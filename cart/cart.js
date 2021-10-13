import { chickens } from '../chicken.js';
import { renderLineItem } from '../render-line-item.js';
import { findById, calculateOrderTotal, toUSD, getCart } from '../utils.js';

const cart = getCart();

const tableBody = document.getElementById('table-body');
for (let cartItem of cart){
    
    const chickenData = findById(cartItem.id, chickens);


    const tableRow = renderLineItem(cartItem, chickenData);

    tableBody.appendChild(tableRow);
}

const orderTotal = calculateOrderTotal(cart, chickens);
const tableDataOrderTotal = document.getElementById('total');
tableDataOrderTotal.textContent = toUSD(orderTotal);

