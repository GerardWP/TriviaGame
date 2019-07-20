$(document).ready(function () {

    var questions = [{
            number: "1",
            question: "What is the largest desert in the world?",
            options: ["Sahara", "Antartica", "Kalahari Desert", "Gobi Desert"],
            correctOption: "Antartica",
            answer: "B: Antarctica! Located around the South Pole, Antarctica is the driest, windiest, and coldest continent on earth. The entirety of Antarctica is a desert - the continent receives less than 200mm of precipitation every year.",
            imageURL: "qOneImage"
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
    ];


    var questionAnswered = false;
    var x = 0;

    var score = 0;


    var timeDisplay = $("#display-number");
    var scoreDisplay = $("#score");
    var qRemaining = $("#questions-left");


    function updateHTML() {
        scoreDisplay.html(score);
        qRemaining.html(questions.length - x);
        timeDisplay.html("<h2>" + "Question Clock: " + timeLeft + "</h2>");
    };

    updateHTML();

    timeDisplay.html("<h2>Question Clock: </h2>")

    // ---------------------

    var timeLeft = 10;
    var displayCountdown;


    function startTimer() {
        clearInterval(displayCountdown);
        displayCountdown = setInterval(countdownTimer, 1000);
    };

    function countdownTimer() {

        timeLeft--;

        timeDisplay.html("<h2>" + "Question Clock: " + timeLeft + "</h2>");

        if (timeLeft === 0 & questionAnswered === false) {
            clearInterval(displayCountdown);
            timeLeft = 10;
            $("#answer-zone").addClass(questions[x].imageURL);
            $("#answer-info").text("Time is UP! The correct answer is " + questions[x].answer);
            $("#next-question").css('display', 'block');
            updateHTML();
        };
    };



    // -------------------

    function trivia() {
        $("#next-question").text("Next Question");
        startTimer()

        $("#question-display").text(questions[x].question);

        $("#option-a").text(questions[x].options[0])
        $("#option-b").text(questions[x].options[1])
        $("#option-c").text(questions[x].options[2])
        $("#option-d").text(questions[x].options[3])

        $(".button").on("click", function () {
            if (questionAnswered) {
                return
            } else if ($(this).text() === questions[x].correctOption) {
                clearInterval(displayCountdown);
                timeLeft = timeLeft;
                $("#answer-info").text("Correct! The answer is " + questions[x].answer);
                $("#next-question").css('display', 'block');
                $("#answer-zone").addClass(questions[x].imageURL);
                score++;

                questionAnswered = true;
                updateHTML();
                if (x === 10) {
                    $("#next-question").text("Play Again");
                    x = 0;
                    score = 0;
                }

            } else {
                clearInterval(displayCountdown);
                timeLeft = timeLeft;
                $("#answer-info").text("Incorrect! The correct answer is " + questions[x].answer);
                $("#next-question").css('display', 'block');
                $("#answer-zone").addClass(questions[x].imageURL);
                questionAnswered = true;
                updateHTML();
                if (x === 10) {
                    $("#next-question").text("Play Again");
                    x = 0;
                    score = 0;
                }
            }

        });

        $("#next-question").on("click", function () {
            $("#answer-zone").removeClass(questions[x].imageURL);
            x++
            $(this).css('display', 'none');
            $("#answer-info").empty();
            timeLeft = 10;
            questionAnswered = false;
            updateHTML();
            trivia();

        });


    };


    trivia();


});
// possibleAnswers.forEach(function (i) {
//     var answerButtons = $('<button id="buttonId">');
//     answerButtons.text(i).appendTo($("#questions-display"));
// });

// i tried the above code to generate my button text, and it worked, but the cick function would NOT respond to the buttons.

// console.log(questions[x].answer)