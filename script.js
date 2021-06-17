
(function () {
    console.log('test excercise')

// TODO: generate numbers 1-15

    function getRandomInt(max) {
        return Math.floor(Math.random() * max) + 1;
    }

    /*  TRIED FIXING INNERHTML GIVE VALUE

    const peopleInVerou =15;
    console.log(getRandomInt(peopleInVerou));
    */


    //console.log(getRandomInt(15));
    // expected output: 1 to 15

    //variables for secret and user number
    const secretNumber = getRandomInt(15)

// TODO: way for users to guess (also html)

    document.getElementById('guessUserLabel').innerHTML = 'Guess the right number between 1 - 15 to win';

// TODO: capture click of button
    // event-listener
    document.getElementById('userGuessButton').addEventListener('click', function () {
        const userGuess = document.getElementById('userGuess').value;
        console.log(userGuess);


        //onclick

// TODO: compare guess to secret number

        console.log(document);
        console.log(document.getElementById('result'));

        if (userGuess === secretNumber) {
            document.getElementById('result').innerHTML = 'whoop whoop ya got it right';
        } else {
            document.getElementById('result').innerHTML = 'Ya guessed wrong, ya answer be ${userGuess} , the right answer was ';
        }


// TODO: end message show


    });
})();