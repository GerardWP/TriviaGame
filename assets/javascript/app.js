$(document).ready(function () {

    var questions = [{
            number: "1",
            question: "What is the largest desert in the world?",
            options: ["Sahara", "Antartica", "Kalahari Desert", "Gobi Desert"],
            correctOption: "Antartica",
            answer: "B: Antarctica! Located around the South Pole, Antarctica is the driest, windiest, and coldest continent on earth. The entirety of Antarctica is a desert - the continent receives less than 200mm of precipitation every year."
        },
        {
            number: "2",
            question: "What is the smallest country in Europe?",
            options: ["Liechtenstein", "Monaco", "Luxembourg", "The Vatican"],
            correctOption: "The Vatican",
            answer: "D: The Vatican! Based on landmass, Vatican City is the smallest country in the world, measuring just 0.2 square miles, almost 120 times smaller than the island of Manhattan. Situated on the western bank of the Tiber River, Vatican City's 2-mile border is landlocked byItaly."
        },
        {
            number: "3",
            question: "Which country did the Duke of Wellington play cricket for?",
            options: ["England", "Iran", "Israel", "Ireland"],
            correctOption: "Ireland",
            answer: "D: Ireland! Arthur Wellesley, later the first Duke of Wellington, was born in Dublin in 1769. In 1792 he played cricket for an All Ireland side at Phoenix Park."
        },
        {
            number: "4",
            question: "Which country’s phone book is ordered by first name?",
            options: ["Austria", "Indonesia", "Iceland", "Italy"],
            correctOption: "Iceland",
            answer: "C: Iceland! Everybody in Iceland calls everyone else by their first name, even the president. No one ever uses Mr or Ms, and surnames are just the father’s first name with “son” or “daughter” tacked on."
        },
        {
            number: "5",
            question: "Which country’s main airport has a three-letter short code that often features in The Simpsons?",
            options: ["Turkey", "Australia", "New Zealand", "Qatar"],
            correctOption: "Qatar",
            answer: "D: Qatar! The capital of Qatar is Doha. Doha International Airport’s three-letter short code is DOH."
        },
        {
            number: "6",
            question: "What is the largest country in Europe?",
            options: ["Russia", "France", "Ukraine", "Spain"],
            correctOption: "Russia",
            answer: "A: Russia! Not only is Russia the largest country in Europe but it is, in fact, the largest in the world. The whole of Russia has a total land area of 17,098,242 square km, with 3,972,400 sq km of the country considered to be part of Europe. 77% of the total population of the country lives on the European side."
        },
        {
            number: "7",
            question: "In which country did polar bears originate?",
            options: ["Canada", "Ireland", "Nepal", "Iceland"],
            correctOption: "Ireland",
            answer: "B: Ireland! All polar bears are descended from brown bears that lived in Ireland more than 10,000 years ago."
        },
        {
            number: "8",
            question: "In which country is cheese acceptable as security on a bank loan?",
            options: ["Denmark", "Switzerland", "Italy", "Poland"],
            correctOption: "Italy",
            answer: "C: Italy! Credito Emiliano bank in northern Italy happily accepts cheese as collateral. A whole wheel of Parmesan can be worth thousands of dollars."
        },
        {
            number: "9",
            question: "Which country has more Boy Scouts than the rest of the world combined?",
            options: ["Indonesia", "United States", "China", "Australia"],
            correctOption: "Indonesia",
            answer: "A: Indonesia! There are more than 17 million Boy Scouts in Indonesia, more than half the world’s total and three times as many as in the next keenest scouting country, the USA."
        },
        {
            number: "10",
            question: "Which country has hosted the greatest number of summer Olympic Games?",
            options: ["France", "United States", "Japan", "United Kingdom"],
            correctOption: "United States",
            answer: "A: United States! The United States have hosted the Summer Olympic Games no less than four times! In 1904, 1932, 1984 & 1996"
        }
    ]

    var count = 0;
    var correctAnswers = 0;
    var wrongAnswers = 0;


    var score = 0;

    var backgroundDisplay = $("#trivia-section");

    var answerImage = $("#answer-box");

    var questionDisplay = $("#question");
    var choiceA = $("#option-a");
    var choiceB = $("#option-b");
    var choiceC = $("#option-c");
    var choiceD = $("#option-d");
    var questionNumber = $("#question-number");
    var questionsLeft = $("#questions-left")
    var scoreText = $("#score");

    var questionTimer;


    // -------------------------------------------------
    // function for displaying countdown timer on document

    var timeLeft = 15;
    var displayCountdown;

    function startTimer() {
        clearInterval(displayCountdown);
        displayCountdown = setInterval(countdownTimer, 1000);
    };

    function countdownTimer() {

        timeLeft--;

        $("#display-number").html("<h2>" + timeLeft + "</h2>");

        if (timeLeft === 0) {
            clearInterval(displayCountdown);
            timeLeft = 15;
        }
    };

    // -------------------------------------------------

    var questionsRemaining;

    function questionFunction(x) {

        questionsRemaining = questions.length - count;

        startTimer();

        scoreText.html(correctAnswers + "/" + questions.length)
        questionsLeft.html(questionsRemaining);
        questionNumber.html(questions[x].number);

        questionDisplay.html(questions[x].question);
        choiceA.html(questions[x].options[0]);
        choiceB.html(questions[x].options[1]);
        choiceC.html(questions[x].options[2]);
        choiceD.html(questions[x].options[3]);

        console.log(questions[x].optionA);

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
        } else if (count === 4) {
            questionFunction(4);
        } else if (count === 5) {
            questionFunction(5);
        } else if (count === 6) {
            questionFunction(6);
        } else if (count === 7) {
            questionFunction(7);
        } else if (count === 8) {
            questionFunction(8);
        } else if (count === 9) {
            questionFunction(9);
        } else if (count === 10) {
            questionFunction(10);
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