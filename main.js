/*----- constants -----*/
let loseSound = new Audio("Saberblk.mp3");
let winSound = new Audio("win.mp3");
let lostSound = new Audio("fail.mp3");
let mainSound = new Audio("starwars.mp3");
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
let message = document.querySelector('h3');
let msg = message.innerHTML;
let bet1 = document.getElementById('1');
let bet2 = document.getElementById('2');
let bet3 = document.getElementById('3');
let spinner = document.querySelector('.spin');
let reset = document.querySelector('.reset');
let bets = document.querySelectorAll('.bet');
let board = document.querySelector('.board')
/*----- event listeners -----*/

bet1.addEventListener('click', function() {
  bet2.style.visibility = "hidden";
  bet3.style.visibility = "hidden";
  message.innerHTML = "GOOD LUCK!";
  bet = 10;
  spinner.style.visibility = "visible";
})
bet2.addEventListener('click', function() {
    bet1.style.visibility = "hidden";
    bet3.style.visibility = "hidden";
    message.innerHTML = "GOOD LUCK!";
    bet = 50;
    spinner.style.visibility = "visible";
 })
 bet3.addEventListener('click', function() {
    bet1.style.visibility = "hidden";
    bet2.style.visibility = "hidden";
    message.innerHTML = "GOOD LUCK!";
    bet = 100;
    spinner.style.visibility = "visible";
 })

 
 spinner.addEventListener('click', function(e) {
    init(); 

     spinSlot();
     
     setTimeout(function() {
         render();
     }, 1500);
     
     setTimeout(function () {
         loser(); 
     }, 1500);
     
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
        
        
        
       setTimeout(function() {
           slot1.append(slot1Image);
       }, 500);
       setTimeout(function() {
        slot2.append(slot2Image);
    }, 1000);
    setTimeout(function() {
        slot3.append(slot3Image);
    }, 1500);        
    };
    
    function render() {
        
        if (result1 === images[0] && result2 === images[0] && result3 === images[0]) {
            message.innerHTML = 'YOU MUST NOW JOIN THE DARK SIDE OF THE FORCE';
            scoreEl.innerHTML -= (bet * 50);
            loseSound.play();
        } else if (result1 === images[1] && result2 === images[1] && result3 === images[1]) {
            message.innerHTML = 'BIG WIN! OBI-WAN WOULD BE PROUD';
            scoreEl.innerHTML -= -(bet * 50);
            winSound.play();
        } else if (result1 === images[2] && result2 === images[2] && result3 === images[2]) {
            message.innerHTML = 'MEGA WIN! YOU ARE THE NEW LEADER OF THE REBELLION';
            scoreEl.innerHTML -= -(bet * 100);
            winSound.play();
        } else if (result1 === images[3] && result2 === images[3] && result3 === images[3]) {
            message.innerHTML = 'WINNER! THE EMPIRE IS WEAKENING!';
            scoreEl.innerHTML -= -(bet * 25);
            winSound.play();
        } else  {
            message.innerHTML = 'You Lost... Try Again!'; 
            scoreEl.innerHTML -= bet;
            loseSound.play();
        }
    }
    
    function loser() {
        if (scoreEl.innerHTML <= 0) {
            spinner.parentNode.removeChild(spinner);
            board.parentNode.removeChild(board);
            lostSound.play();
            message.innerHTML = 'THE EMPIRE HAS STRUCK BACK! YOU HAVE FAILED'
        }
    }

    function init() {
        slot1.innerHTML = s1;
        slot2.innerHTML = s2;
        slot3.innerHTML = s3;
        message.innerHTML = 'GOOD LUCK!';
    }
    
    
    
   


