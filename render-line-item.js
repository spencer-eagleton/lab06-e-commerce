export function renderLineItem(cartItem, chickenData) {
    
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

    return tableRow;

}