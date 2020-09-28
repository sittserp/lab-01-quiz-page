// import functions and grab DOM elements
import { countAsYes } from '../count-as-yes.js';

const button = document.getElementById('button');
const score = document.getElementById('score');

// initialize state

let tally = 0;

// set event listeners to update state and DOM

button.addEventListener('click', () => {
    const userConfirmed = confirm('Do you really want to take the quiz?');
        if (!userConfirmed) {
            alert('You chose wisely.');
            return;
        }
    const userName = prompt('What is your name?');

    const habitat = prompt(`Hi, ${userName}!  Does the coconut octopus live in the Pacific Ocean?`);
        if (countAsYes(habitat)) {tally++};

    const movement = prompt('Does the coconut octopus walk on two legs in the water?');
        if (countAsYes(movement)) {tally++};

    const tree = prompt('Does the coconut octopus live in coconut trees?');
        if (!countAsYes(tree)) {tally++}

    const food = prompt(`Okay, ${userName}, last one: Does the coconut octopus eat shrimp?`);
        if (countAsYes(food)) {tally++};

    alert('Well done!  Check your score at the bottom of the page!')

    score.textContent = `Congratulations, ${userName}! You got ${tally} out of 4 correct!`;

});

