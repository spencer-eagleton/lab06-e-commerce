// import functions and grab DOM elements
import { renderChicken } from './render-chicken.js';

import { addItem, getProducts } from './utils.js';

// initialize global state
const chickenList = document.getElementById('chicken-list');

const chickens = getProducts();

for (let chicken of chickens){
    const chickenCard = renderChicken(chicken);
    chickenList.append(chickenCard);
}

const addButtons = document.getElementsByClassName('add-button');
for (let addbutton of addButtons){
    addbutton.addEventListener('click', ()=>{
        addItem(addbutton.id);
    
    });
}
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
