import { addProduct } from '../utils.js';
const form = document.getElementById('new-product-form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = new FormData(form);
    const newChicken = {
        id: data.get('id'),
        breed: data.get('breed'),
        eggPerWeekAvg: data.get('epwa'),
        demeanor: data.get('demeanor'),
        img: data.get('img'),
        price: data.get('price')

    };
    addProduct(newChicken);
    document.getElementById('new-product-form').reset();
    alert('Cluck! Cluck! New CLUCKER added!');
});