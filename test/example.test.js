// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderChicken } from '../render-chicken.js';
import { chickens } from '../chicken.js';
import { findById, getCart } from '../utils.js';

const test = QUnit.test;

test('renderChicken better return HTML snippet', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 
     `<div class="chicken-card"><img src="./assets/whitechicken.png"><h2>Leghorn</h2></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const foghorn = chickens[0];

    const actual = renderChicken(foghorn).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

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


