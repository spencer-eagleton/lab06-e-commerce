// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderChicken } from '../render.js';
import { chickens } from '../chicken.js';

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
