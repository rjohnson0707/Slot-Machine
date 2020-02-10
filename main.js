/*----- constants -----*/

let player;

let images = [
    { name: 'vader', image: 'vader.jpg'},
    { name: 'blueLs', image: 'blueLs.png'},
    { name: 'yoda', image: 'yoda.png'},
    { name: 'greenLs', image: 'greenLs.jpg'}
]

let spin;

/*----- app's state (variables) -----*/
let score = 1000;



/*----- cached element references -----*/

let slot1 = document.getElementById('s1');
let slot2 = document.getElementById('s2');
let slot3 = document.getElementById('s3');
let totalScore = document.querySelector('.score-box');
let message = document.querySelector('h3');
let bets = document.querySelectorAll('.bet');
/*----- event listeners -----*/

bets.addEventListener('click', betFunction);
bets.addEventListener('click', hideFunction);


/*----- functions -----*/