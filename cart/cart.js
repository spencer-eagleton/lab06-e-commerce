import { chickens } from '../chicken.js';
import { cart } from '../data/cart-data.js';
import { findById } from '../utils.js';

const tableBody = document.getElementById('table-body');
for (let cartItem of cart){
    
    const chickenData = findById(cartItem.id, chickens);


    const tableRow = document.createElement('tr');

    const tableDataBreed = document.createElement('td');
    tableDataBreed.textContent = chickenData.breed;
   
    const tableDataPrice = document.createElement('td');
    tableDataPrice.textContent = chickenData.price;
    
    const tableDataQty = document.createElement('td');
    tableDataQty.textContent = cartItem.qty;

    const tableDataTotal = document.createElement('td');
    tableDataTotal.textContent = cartItem.qty * chickenData.price;

    tableRow.append(tableDataBreed, tableDataPrice, tableDataQty, tableDataTotal);
    tableBody.appendChild(tableRow);
}