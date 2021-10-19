// IMPORT MODULES under test here:
// import { example } from '../example.js';
// import { renderChicken } from '../render-chicken.js';
import { chickens } from '../chicken.js';
import { findById, getCart, addItem, addProduct, getProducts } from '../utils.js';

const test = QUnit.test;

// test('renderChicken better return HTML snippet', (expect) => {
//     //Arrange
//     // Set up your arguments and expectations
//     const expected = 
//      `<div class="chicken-card"><img src="./assets/whitechicken.png"><h2>Leghorn</h2><button class="add-button">Cluck it up!</button></div>`;
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const foghorn = chickens[0];

//     const actual = renderChicken(foghorn).outerHTML;

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual, expected);
// });

test('findById should return item with corresponding id', (expect)=>{
    
    const expected = {
        id: '5',
        breed: 'Easter-Egger',
        color: 'grey',
        eggPerWeekAvg: '4',
        demeanor: 'exciteable',
        img: './assets/brownchicken.png',
        price: 55
    };

    const actual = findById('5', chickens);
    expect.deepEqual(actual, expected);
});

test('getCart should return cart if cart is available', (expect)=>{
    const fakeCart = [
        { id: '2', qty: 4 },
        { id: '4', qty: 5 }

    ];
    localStorage.setItem('CART', JSON.stringify(fakeCart));
    const cart = getCart();
    expect.deepEqual(cart, fakeCart);
});

test('getCart should return empty array if cart is not available', (expect)=>{
    
    localStorage.removeItem('CART');
    const cart = getCart();

    expect.deepEqual(cart, []);

});

test('addItem should add 1 to quantity if item is in the cart', (expect)=>{

    const fakeCart = [
        { id: '2', qty: 5 },
        { id: '4', qty: 6 }
    ];

    localStorage.setItem('CART', JSON.stringify(fakeCart));
    addItem('2');
    const cart = getCart();
    const expected = [
        { id: '2', qty: 6 },
        { id: '4', qty: 6 }
    ];
    expect.deepEqual(cart, expected);
});

test('addItem should add an item if its not already there', (expect) =>{
 
    localStorage.removeItem('CART');
    
    const expected = [{ id: '1', qty: 1 }];
    addItem('1');
    const cart = getCart();
    expect.deepEqual(cart, expected);

});

test('addProduct function should push new product to products array', (expect)=>{
    let products = getProducts();
    const newProduct = {
        id: '6',
        breed: 'Fried',
        color: 'golden-brown',
        eggPerWeekAvg: '0',
        demeanor: 'crispy',
        img: './assets/fried.png',
        price: '10.75'

    };
    addProduct(newProduct);

    products = getProducts();
    expect.equal(products.length, 6);

});