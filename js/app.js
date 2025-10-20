/*-------------------------------- Constants --------------------------------*/

//5) Define the required constants.

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


/*---------------------------- Variables (state) ----------------------------*/

//1) Define the required variables used to track the state of the game.

let board = [];
let turn = 'X';
let winner = false;
let tie = false; 

/*------------------------ Cached Element References ------------------------*/

//2) Store cached element references.

const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#message');
const resetButton = document.querySelector('#reset');
console.log('Squares', squareEls); 
console.log('message', messageEl);
console.log('reset', resetButton);
/*-------------------------------- Functions --------------------------------*/

//4) The state of the game should be rendered to the user.

//7) Create Reset functionality.

// Sets the game to defaults
function init() {
    console.log('Initializing')
    board = ['', '', '', '', '', '', '', '', '']; 
    turn = 'X'; 
    winner = false; 
    tie = false; 
    render();

}
// Takes the variables of the game and shows them on the screen 

function render() {
    updateBoard();
    updateMessage();


}

function updateBoard(){

    // Loop through the board array and assign the display value to the square

    board.forEach((value,index) => {
        squareEls[index].textContent = value;
     

        // to-do: style the square 

    })



    // Assign the value to the square 

}

function updateMessage(){


    // if winner and tie are false, show whos turn it is 

    if(winner === false && tie === false){
        
        messageEl.textContent = turn + "'s Turn"
    } else if(winner === false && tie === true){

  

    // if winner is false and tie is true, show 'Tie!'
    messageEl.textContent = "It's a Tie!"; 
      } else {

    // else show who wins
    messageEl.textContent = turn + " You win!"; 
      }
}

function handleClick(event){
    
    const squareIndex = event.target.id;

    if(board[squareIndex] !== '' || winner === true || tie === true){
        return;
    }

    placePiece(squareIndex); 

    checkForWinner();

    checkForTies();

    switchPlayerTurn();

    render();

}

function checkForWinner(){


    winningCombos.forEach((winningCombo)=>{
        if(
            board[winningCombo[0]] != '' && 
            board[winningCombo[0]] === board[winningCombo[1]] &&
            board[winningCombo[0]] === board[winningCombo[2]]
        ) {
            winner = true; 
            playConfetti();
        }
    })

}

function checkForTies(){
    if(winner){
        tie=false;
        return;
    }
   if(!board.includes('')){
        tie=true;
    }

    }

    function switchPlayerTurn(){
        if(winner || tie){
            return;
        }

        if(turn === 'X'){
            turn = 'O'
        } else{
            turn = 'X'
        }
    }

function placePiece(index){
    board[index] = turn; 

}

function playConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    setTimeout(() => {
        confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
    });
}, 250);


    setTimeout(() => {
        confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
    });
}, 400);

}

/*----------------------------- Event Listeners -----------------------------*/

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

// Loop through the squared
for(let i=0; i < squareEls.length; i++){

    squareEls[i].addEventListener('click', handleClick)
// add a click listener
}


resetButton.addEventListener('click', init);


init();

//6) Handle a player clicking a square with a `handleClick` function.





