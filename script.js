//** if there is one of something use methods..if there are mulitple use factory functions **

// create gamebaord array using method
const gameBoard = (function(){
    const arr = [];

    //create player factory function
    const createPlayer = (name, selection) => {
        return {name, selection}
    }

    //create players variables
    const playerOne = createPlayer('player1', 'x')
    const playerTwo = createPlayer('player2', 'o')
})()

//gameflow
const gameFlow= (function(){

})()


