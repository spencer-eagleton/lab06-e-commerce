import { chickens } from '../chicken.js';
import { cart } from '../data/cart-data.js';
import { renderLineItem } from '../render-line-item.js';
import { findById, calculateOrderTotal } from '../utils.js';


const tableBody = document.getElementById('table-body');
for (let cartItem of cart){
    
    const chickenData = findById(cartItem.id, chickens);


    const tableRow = renderLineItem(cartItem, chickenData);

    tableBody.appendChild(tableRow);
}

const orderTotal = calculateOrderTotal(cart, chickens);
const tableDataOrderTotal = document.getElementById('total');
tableDataOrderTotal.textContent = orderTotal;