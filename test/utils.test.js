// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { countAsYes } from '../count-as-yes.js';

const test = QUnit.test;

test('return true if answer starts with y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const yes = 'yeppers';
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countAsYes(yes);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('return false if answer does not start with y', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const yes = 'blah blah blah';
    const expected = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countAsYes(yes);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});