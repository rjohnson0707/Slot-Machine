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
let bet1 = document.querySelector('.bet1');
let bet2 = document.querySelector('.bet2');
let bet3 = document.querySelector('.bet3');
let spinner = document.querySelector('.spin');
/*----- event listeners -----*/

bet1.addEventListener('click', function() {
   console.log('button 1');
})
bet2.addEventListener('click', function() {
    console.log('button 2');
 })
 bet3.addEventListener('click', function() {
    console.log('button 3');
 })

spinner.addEventListener('click', function() {

    message.innerHTML = 'Good Luck!';
    
    //function that spins each slot
    
    //function that determines winner
})


/*----- functions -----*/
