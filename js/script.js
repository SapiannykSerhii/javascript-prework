// PLAY GAME

function playGame(playerInput){
        clearMessages();
    
// COMPUTER
    let randomNumber = Math.floor(Math.random() * 3 + 1);

        console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    function getMoveName( computerMove){
        if( computerMove == 1){
        return 'kamień';
        }
        else if( computerMove == 2){
            return 'papier';
        }
        else if( computerMove == 3){
            return 'nozyczki';
        }   
    
        printMessage('Nie znam ruchu o id ' + computerMove + '.');
        return '1, 2, 3.';
    }
    printMessage('Mój ruch to: ' + computerMove);

    // if(randomNumber == 1){
    //   computerMove = 'kamień';
    // }
    // else if(randomNumber == 2){
    //     computerMove = `papier`;
    // }
    // else if(randomNumber == 3){
    //     computerMove = `nozyczki`;
    // }

// PLAYER
    // let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
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
        return '1, 2, 3.';
        
    }
    printMessage('Twój ruch to: ' + playerMove);

    // if(playerInput == '1'){
    //   playerMove = 'kamień';
    // }
    // else if(playerInput == '2'){
    //     playerMove = 'papier';
    // }
    // else if(playerInput == '3'){
    //     playerMove = 'nozyczki';
    // }
   
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
 
