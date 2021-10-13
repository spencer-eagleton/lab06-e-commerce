import { toUSD } from './utils.js';

export function renderLineItem(cartItem, chickenData) {
    
    const tableRow = document.createElement('tr');

    const tableDataBreed = document.createElement('td');
    tableDataBreed.textContent = chickenData.breed;
   
    const tableDataPrice = document.createElement('td');
    tableDataPrice.textContent = chickenData.price;
    
    const tableDataQty = document.createElement('td');
    tableDataQty.textContent = cartItem.qty;

    const tableDataTotal = document.createElement('td');
    const total = cartItem.qty * chickenData.price;
    tableDataTotal.textContent = toUSD(total);

    tableRow.append(tableDataBreed, tableDataPrice, tableDataQty, tableDataTotal);

    return tableRow;

}