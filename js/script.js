// COMPUTER
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

function getMoveName(argComputerMove){
    if( argComputerMove == 1){
      return 'kamień';
    }
    else if( argComputerMove == 2){
        return 'papier';
    }
    else if( argComputerMove == 3){
        return 'nozyczki';
    }   
  
    printMessage('Nie znam ruchu o id ' + argComputerMove + '.');
    return '1, 2, 3.';
  }

// if(randomNumber == 1){
//   computerMove = 'kamień';
// }
// else if(randomNumber == 2){
//     computerMove = `papier`;
// }
// else if(randomNumber == 3){
//     computerMove = `nozyczki`;
// }
printMessage('Mój ruch to: ' + computerMove);


// PLAYER
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

function getMoveName(agrPlayerMove){
    if( agrPlayerMove == 1){
      return 'kamień'
    }
    else if( agrPlayerMove == 2){
        return 'papier';
    }
    else if( agrPlayerMove == 3){
        return 'nozyczki';
    }   
  
    printMessage('Nie znam ruchu o id ' + agrPlayerMove+ '.');
    return '1, 2, 3.';
  }


// if(playerInput == '1'){
//   playerMove = 'kamień';
// }
// else if(playerInput == '2'){
//     playerMove = 'papier';
// }
// else if(playerInput == '3'){
//     playerMove = 'nozyczki';
// }

printMessage('Twój ruch to: ' + playerMove);

// RESULT


function displayResult( agrComputerMove, agrPlayerMove){

if( agrComputerMove == 'kamień' && agrPlayerMove == 'papier'){
    printMessage('Ty wygrał!');
}
else if( agrComputerMove == 'kamień' && agrPlayerMove == 'nozyczki'){
    printMessage('Ty przegrał');
}
else if( agrComputerMove == 'kamień' && agrPlayerMove == 'kamień'){
    printMessage('Remis');
}
else if( agrComputerMove == 'nozyczki' && agrPlayerMove == 'kamień'){
    printMessage('Ty wygrał');
}
else if( agrComputerMove == 'nozyczki' && agrPlayerMove == 'papier'){
    printMessage('Ty przegrał');
}
else if( agrComputerMove == 'nozyczki' && agrPlayerMove == 'nozyczki'){
    printMessage('Remis');
}
else if( agrComputerMove == 'papier' && agrPlayerMove == 'nozyczki'){
    printMessage('Ty wygrał');
}
else if( agrComputerMove == 'papier' && agrPlayerMove == 'kamień'){
    printMessage('Ty przegrał')
}
else if( agrComputerMove == 'papier' && agrPlayerMove == 'papier'){
    printMessage('Remis');
}
console.log('Nieobsluzone: ' + argComputerMove + ' ' + argPlayerMove);

}




// if( computerMove == 'kamień' && playerMove == 'papier'){
//     printMessage('Ty wygrał!');
// }
// else if( computerMove == 'kamień' && playerMove == 'nozyczki'){
//     printMessage('Ty przegrał');
// }
// else if( computerMove == 'kamień' && playerMove == 'kamień'){
//     printMessage('Remis');
// }

// else if( computerMove == 'nozyczki' && playerMove == 'kamień'){
//     printMessage('Ty wygrał');
// }
// else if( computerMove == 'nozyczki' && playerMove == 'papier'){
//     printMessage('Ty przegrał');
// }
// else if( computerMove == 'nozyczki' && playerMove == 'nozyczki'){
//     printMessage('Remis');
// }

// else if( computerMove == 'papier' && playerMove == 'nozyczki'){
//     printMessage('Ty wygrał');
// }
// else if( computerMove == 'papier' && playerMove == 'kamień'){
//     printMessage('Ty przegrał')
// }
// else if( computerMove == 'papier' && playerMove == 'papier'){
//     printMessage('Remis');
// }


