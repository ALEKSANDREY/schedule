$('document').ready(function () {
  // Cache element selectors for elements that are used throughout the script
  var $boxes = $('td');
  var $resetButton = $('#reset');
  var turnText = $('#playerTurn');

  // Keep track of turns and plays
  var counter = 1;
  var winCounter = 0;
  var player1Moves = [];
  var player2Moves = [];

  // Array for winning combinations
  var winningCombinations = [[0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

  // Setting up events for when the user clicks a td or the #reset button
  $boxes.on('click', addXorO);
  $resetButton.on('click', resetBoard);

  function addXorO () {
    // Only add an X or O if the tile has not been previously selected.
    if ($(this).html().length === 0) {
      // Find out which square the user clicked.
      var squareNumber = parseInt($(this).attr('data-num'));

      counter++;
      // Check to see who's turn it is
      if (counter % 2 === 0) {
        player1Moves.push(squareNumber);
        $(this).html('O');
        $(this).attr('class', 'player1');
        turnText.html('It is X&rsquo;s turn');
        checkForWin(player1Moves, 'O');
      }
      else {
        player2Moves.push(squareNumber);
        $(this).html('X');
        $(this).attr('class', 'player2');
        turnText.html('It is O&rsquo;s turn');
        checkForWin(player2Moves, 'X');
      }

    // if the counter is greater than or equal to 10, the game is a draw!
    if (counter >= 10){
      alert('Game Over! It\'s a draw!');
      turnText.html('Game Over! It&rsquo;s a draw!');
      $resetButton.html('Play Again');
    }

   }
  }

  function checkForWin (movesArray, name) {
    // loop over the first array of winning combinations
    for (outerArrayIndex = 0; outerArrayIndex < winningCombinations.length; outerArrayIndex++) {
      // reset the winCounter each time!
      winCounter = 0;
      // loop over each individual array
      for (var innerArrayIndex = 0; innerArrayIndex < winningCombinations[outerArrayIndex].length; innerArrayIndex++) {
        // if the number in winning combo array is === a number in moves array, add to winCounter
        if (movesArray.indexOf(winningCombinations[outerArrayIndex][innerArrayIndex]) !== -1){
          winCounter++;
        }

        // if winCounter === 3 that means all 3 moves are winning combos and game is over!
        if (winCounter === 3){
          alert('Game over, ' + name + ' wins!');
          turnText.html('Game over, ' + name + ' wins!');
          $resetButton.html('Play Again');
          $boxes.unbind('click', addXorO);
        }
      }
    }
  }

  function resetBoard () {
    $resetButton.html('Clear Board');
    $boxes.on('click', addXorO);
    $boxes.html('');
    player1Moves = [];
    player2Moves = [];
    winCounter = 0;
    counter = 1;
    turnText.html('It is O&rsquo;s turn');
  }

});
