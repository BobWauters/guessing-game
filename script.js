
(function (){
    console.log('test excercise')

// TODO: generate numbers 1-15

    function getRandomInt(max) {
        return Math.floor(Math.random() * max) +1;
    }
    console.log(getRandomInt(15));
    // expected output: 1 to 15

    //variables for secret and user number
    const secretNumber = getRandomInt(15)
// TODO: way for users to guess (also html)

    document.getElementById('guessUserLabel').innerHTML ='Guess the right number between 1 - 15 to win';

// TODO: capture click of button
    // On click
    document.getElementById('userGuessButton').addEventListener('click', function() {
    const userGuess = document.getElementById('userGuess').value;
    console.log(userGuess);
    });

    //event-listener

// TODO: compare guess to secret number
    if (userGuess ==secretNumber);
// TODO: end message show



})();