/*----- constants -----*/
let loseSound = new Audio("Saberblk.mp3");
let winSound = new Audio("win.mp3");
let lostSound = new Audio("fail.mp3");

let player;
let bet;

let images = [
    {image: 'vader.jpg'},
    {image: 'blueLs.png'},
    {image: 'yoda.png'},
    {image: 'greenLs.gif'}
]

let spin;


/*----- app's state (variables) -----*/




/*----- cached element references -----*/

let slot1 = document.getElementById('s1');
let s1 = slot1.innerHTML;
let slot2 = document.getElementById('s2');
let s2 = slot2.innerHTML;
let slot3 = document.getElementById('s3');
let s3 = slot3.innerHTML;
let scoreEl = document.querySelector('.score-box');
let score = Number(scoreEl);
let message = document.querySelector('h3');
let msg = message.innerHTML;
let bet1 = document.getElementById('1');
let bet2 = document.getElementById('2');
let bet3 = document.getElementById('3');
let spinner = document.querySelector('.spin');
let reset = document.querySelector('.reset');
let bets = document.querySelectorAll('.bet');
/*----- event listeners -----*/

bet1.addEventListener('click', function() {
  bet2.style.visibility = "hidden";
  bet3.style.visibility = "hidden";
  message.innerHTML = "GOOD LUCK!";
  bet = 1;
})
bet2.addEventListener('click', function() {
    bet1.style.visibility = "hidden";
    bet3.style.visibility = "hidden";
    message.innerHTML = "GOOD LUCK!";
    bet = 5;
 })
 bet3.addEventListener('click', function() {
    bet1.style.visibility = "hidden";
    bet2.style.visibility = "hidden";
    message.innerHTML = "GOOD LUCK!";
    bet = 10;
 })

 
 spinner.addEventListener('click', function(e) {
     score = 1000;
     
     spinSlot();
     
     winner();
     
     loser();
     spinner.style.visibility = "hidden";
     reset.style.visibility = "visible";
     
    })

 reset.addEventListener('click', function() {
     slot1.innerHTML = s1;
     slot2.innerHTML = s2;
     slot3.innerHTML = s3;
     message.innerHTML = msg;
     reset.style.visibility = "hidden";
     spinner.style.visibility = "visible";
     bet1.style.visibility = "visible";
     bet2.style.visibility = "visible";
     bet3.style.visibility = "visible";

 })
    
    
    /*----- functions -----*/
    
    
    
    function spinSlot() {
        
        result1 = images[Math.floor(Math.random() * images.length)]
        result2 = images[Math.floor(Math.random() * images.length)]
        result3 = images[Math.floor(Math.random() * images.length)]
        
        const slot1Image = document.createElement('img')
        slot1Image.src = "images/" + result1.image
        
        const slot2Image = document.createElement('img')
        slot2Image.src = "images/" + result2.image
        
        const slot3Image = document.createElement('img')
        slot3Image.src = "images/" + result3.image
        
        
        
        slot1.append(slot1Image);
        slot2.append(slot2Image);
        slot3.append(slot3Image);
        
        
    };
    
    function winner() {
        
        if (result1 === result2 && result1 === result3) {
            message.innerHTML = 'YOU WIN!';
            scoreEl.innerHTML -= -(bet * 100);
            winSound.play();
        } else {
            message.innerHTML = 'You Lost... Try Again!'; 
            scoreEl.innerHTML -= bet;
            loseSound.play();
        }
    }
    
    function loser() {
        if (scoreEl.innerHTML <= 0) {
            spinner.parentNode.removeChild(spinner);
            lostSound.play();
        }
    }
    
    
    
   


