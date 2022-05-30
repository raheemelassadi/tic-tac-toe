//** if there is one of something use methods..if there are mulitple, use factory functions **

// create gamebaord array using method
const gameBoard = (function(){

    //gameflow
    const gameFlow = (function(){

            //create player factory function
    const createPlayer = (name, mark) => {
        return {name, mark}
    }

    //create player variables
    const playerOne = createPlayer('player1', 'x')
    const playerTwo = createPlayer('player2', 'o')

    //winning combos
    const winningCombos = [
        [0,1,2],
        [0,3,6],
        [3,4,5],
        [6,7,8],
        [1,4,7],
        [2,4,6],
        [2,5,8],
        [0,4,8]
    ]


        //dom select td elements (the sqaures)
        const squares = document.querySelectorAll('td')

        //selectcurrplayer
        let gameOver = false;
        
        const playerOneArr = [];
        const playerTwoArr = [];

        let currPlayer = playerOne;

        const playerNumber = document.querySelector('#player-number');
        const playerMark = document.querySelector('#player-mark');

        //when sqaures are clicked, add the currplayers mark
        for (let i = 0; i < squares.length; i++){
            squares[i].addEventListener('click', function(){
                const newElem = document.createElement('p')
                //player1 logic
                if (currPlayer == playerOne){
                    playerOneArr.push(Number(squares[i].id))
                    playerOneArr.sort((a,b)=>a-b)
                    for(let i = 0; i < winningCombos.length; i++){
                        for (let j = 0; j < playerOneArr.length; j++){
                            if (JSON.stringify(playerOneArr.slice(j, j + 3)) == JSON.stringify(winningCombos[i])){
                                alert('Player One Wins!!')
                        }
                    }
                    }
                    playerNumber.textContent = '2'
                    playerMark.textContent = 'O'
                    newElem.textContent = playerOne.mark
                    currPlayer = playerTwo
                //player2 logic    
                } else {
                    playerTwoArr.push(Number(squares[i].id))
                    playerTwoArr.sort((a,b)=>a-b)
                    for(let i = 0; i < winningCombos.length; i++){
                        for (let j = 0; j < playerTwoArr.length; j++){
                            if (JSON.stringify(playerTwoArr.slice(j, j + 3)) == JSON.stringify(winningCombos[i])){
                                alert('Player Two Wins!!')
                        }
                    }
                    }
                    playerNumber.textContent = '1';
                    playerMark.textContent = 'X'
                    newElem.textContent = playerTwo.mark 
                    currPlayer = playerOne
                }
                squares[i].appendChild(newElem)                   
            }, {once: true})

        } 
    })()
})()







