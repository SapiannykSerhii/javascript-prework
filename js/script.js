// PLAY GAME

function playGame(playerInput){
        clearMessages();
    
// COMPUTER
    let randomNumber = Math.floor(Math.random() * 3 + 1);

        console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    // function getMoveName( computerMove){
    //     if( computerMove == 1){
    //     return 'kamień';
    //     }
    //     else if( computerMove == 2){
    //         return 'papier';
    //     }
    //     else if( computerMove == 3){
    //         return 'nozyczki';
    //     }   
    
        // printMessage('Nie znam ruchu o id ' + computerMove + '.');
        // return 'nieznany ruch';
    // }
    printMessage('Mój ruch to: ' + computerMove);

  

// PLAYER
    
    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    function getMoveName( playerMove){
        if( playerMove == 1){
        return 'kamień'
        }
        else if( playerMove == 2){
            return 'papier';
        }
        else if( playerMove == 3){
            return 'nozyczki';
        }   
    
        printMessage('Nie znam ruchu o id ' + playerMove + '.');
        return 'nieznany ruch';
        
    }
    printMessage('Twój ruch to: ' + playerMove);


   
// RESULT
    function displayResult(argComputerMove, argPlayerMove){

        if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('Ty wygrał!');
        }
        else if( argComputerMove == 'kamień' && argPlayerMove == 'nozyczki'){
            printMessage('Ty przegrał!');
        }
        else if( argComputerMove =='kamień' && argPlayerMove == 'kamień'){
            printMessage('Remis!');
        }
        else if( argComputerMove == 'nozyczki' && argPlayerMove == 'kamień'){
            printMessage('Ty wygrał!');
        }
        else if( argComputerMove == 'nozyczki' && argPlayerMove == 'papier'){
            printMessage('Ty przegrał!');
        }
        else if( argComputerMove == 'nozyczki' && argPlayerMove == 'nozyczki'){
            printMessage('Remis!');
        }
        else if( argComputerMove == 'papier' && argPlayerMove == 'nozyczki'){
            printMessage('Ty wygrał!');
        }
        else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
            printMessage('Ty przegrał!')
        }
        else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
            printMessage('Remis!');
        }
        else(console.log('Nieobsluzone: ' + argComputerMove + ' ' + argPlayerMove));
        }
    displayResult( computerMove, playerMove);
}
document.getElementById('play-rock').addEventListener('click', function(playerInput){
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(playerInput){
    playGame(2);
}); 
document.getElementById('play-scissors').addEventListener('click', function(playerInput){
    playGame(3);
});