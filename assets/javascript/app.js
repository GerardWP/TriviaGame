$(document).ready(function () {

    var questions = [{
            question: "What is your name?",
            optionA: "Bob",
            optionB: "Sally",
            optionC: "Jimbo",
            optionD: "Alex",
            answer: "C: Jimbo"
        },
        {
            question: "What is your favourite colour?",
            optionA: "Red",
            optionB: "Green",
            optionC: "Violet",
            optionD: "Blue",
            answer: "B: Green"
        },
        {
            question: "Who performed the song 'Folsom Prison Blues'?",
            optionA: "Bob Dylan",
            optionB: "John Denver",
            optionC: "Elvis Costello",
            optionD: "Johnny Cash",
            answer: "D: Johnny Cash"
        },
        {
            question: "What is Gerard Pelly's favourite food?",
            optionA: "Cheese Burgers",
            optionB: "Burritos",
            optionC: "Steak",
            optionD: "Oysters Kilpatrick",
            answer: "B: Burritos"
        }
    ]

    var count = 0;
    var correctAnswers = 0;
    var wrongAnswers = 0;

    var backgroundDisplay = $("#trivia-section");

    var answerImage = $("#answer-box");

    var questionDisplay = $("#question");
    var optionA = $("option-a");
    var optionB = $("option-b");
    var optionC = $("option-c");
    var optionD = $("option-d");

    var questionTimer;


    // -------------------------------------------------
    // function for displaying countdown timer on document

    var timeLeft = 30;
    var displayCountdown;

    function startTimer() {
        clearInterval(displayCountdown);
        displayCountdown = setInterval(countdownTimer, 1000);
    }

    function countdownTimer() {

        timeLeft--;

        $("#display-number").html("<h2>" + timeLeft + "</h2>");

        if (timeLeft === 0) {
            clearInterval(displayCountdown);
        }
    }

    // -------------------------------------------------



    function questionFunction(x) {

        startTimer();


        questionTimer = setTimeout(function () {
            console.log(questions[x].answer, count);
        }, 3000);

        count++



        setTimeout(function () {
            runQuestion();
        }, 3000);


        // clearTimeout(questionTimer);

    };

    function runQuestion() {

        if (count === 0) {

            questionFunction(0);

        } else if (count === 1) {

            questionFunction(1);


        } else if (count === 2) {

            questionFunction(2);


        } else if (count === 3) {

            questionFunction(3);


        } else {
            setTimeout(function () {
                console.log("END");
            }, 1500);
        }


    }


    function winScreen(x) {
        // what happens when the question is answers correctly
    }

    function loseScreen(x) {
        // what happens when the question is answers incorrectly
    }

    function timeUpScreen(x) {
        // what happens when time runs out for question
    }


    runQuestion();



});