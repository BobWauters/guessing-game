
(function (){
    console.log('test excercise')

// TODO: generate numbers 1-15

    function getRandomInt(max) {
        return Math.floor(Math.random() * max) +1;
    }
    console.log(getRandomInt(15));
    // expected output: 1 to 15

// TODO: way for users to guess (also html)

    document.getElementById('guessUserLabel').innerHTML ='Guess the right number between 1 - 15 to win';

// TODO: capture click of button
    // On click
    document.getElementById('userGuessButton').addEventListener('click', function() {
        var guessUser = Number (document.getElementById(userGuess))
    document.getElementById('userGuess').value;
    });

    //event-listener

// TODO: compare guess to secret number
// TODO: end message show



})();