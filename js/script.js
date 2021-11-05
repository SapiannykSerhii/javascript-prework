// COMPUTER
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}
else if(randomNumber == 2){
    computerMove = `papier`;
}
else if(randomNumber == 3){
    computerMove = `nozyczki`;
}
printMessage('Mój ruch to: ' + computerMove);


// PLAYER
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2'){
    playerMove = 'papier';
}
else if(playerInput == '3'){
    playerMove = 'nozyczki';
}

printMessage('Twój ruch to: ' + playerMove);

// RESULT
if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrał!');
}
else if( computerMove == 'kamień' && playerMove == 'nozyczki'){
    printMessage('Ty przegrał');
}
else if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis');
}

else if( computerMove == 'nozyczki' && playerMove == 'kamień'){
    printMessage('Ty wygrał');
}
else if( computerMove == 'nozyczki' && playerMove == 'papier'){
    printMessage('Ty przegrał');
}
else if( computerMove == 'nozyczki' && playerMove == 'nozyczki'){
    printMessage('Remis');
}

else if( computerMove == 'papier' && playerMove == 'nozyczki'){
    printMessage('Ty wygrał');
}
else if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Ty przegrał')
}
else if( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis');
}


