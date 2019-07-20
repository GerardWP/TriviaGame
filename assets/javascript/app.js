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
            answer: "D: The Vatican! Based on landmass, Vatican City is the smallest country in the world, measuring just 0.2 square miles, almost 120 times smaller than the island of Manhattan. Situated on the western bank of the Tiber River, Vatican City's 2-mile border is landlocked by Italy.",
            imageURL: "qTwoImage"
        },
        {
            number: "3",
            question: "Which country did the Duke of Wellington play cricket for?",
            options: ["England", "Iran", "Israel", "Ireland"],
            correctOption: "Ireland",
            answer: "D: Ireland! Arthur Wellesley, later the first Duke of Wellington, was born in Dublin in 1769. In 1792 he played cricket for an All Ireland side at Phoenix Park.",
            imageURL: "qThreeImage"
        },
        {
            number: "4",
            question: "Which country’s phone book is ordered by first name?",
            options: ["Austria", "Indonesia", "Iceland", "Italy"],
            correctOption: "Iceland",
            answer: "C: Iceland! Everybody in Iceland calls everyone else by their first name, even the president. No one ever uses Mr or Ms, and surnames are just the father’s first name with “son” or “daughter” tacked on.",
            imageURL: "qFourImage"
        },
        {
            number: "5",
            question: "Which country’s main airport has a three-letter short code that often features in The Simpsons?",
            options: ["Turkey", "Australia", "New Zealand", "Qatar"],
            correctOption: "Qatar",
            answer: "D: Qatar! The capital of Qatar is Doha. Doha International Airport’s three-letter short code is DOH.",
            imageURL: "qFiveImage"
        },
        {
            number: "6",
            question: "What is the largest country in Europe?",
            options: ["Russia", "France", "Ukraine", "Spain"],
            correctOption: "Russia",
            answer: "A: Russia! Not only is Russia the largest country in Europe but it is, in fact, the largest in the world. The whole of Russia has a total land area of 17,098,242 square km, with 3,972,400 sq km of the country considered to be part of Europe. 77% of the total population of the country lives on the European side.",
            imageURL: "qSixImage"
        },
        {
            number: "7",
            question: "In which country did polar bears originate?",
            options: ["Canada", "Ireland", "Nepal", "Iceland"],
            correctOption: "Ireland",
            answer: "B: Ireland! All polar bears are descended from brown bears that lived in Ireland more than 10,000 years ago.",
            imageURL: "qSevenImage"
        },
        {
            number: "8",
            question: "In which country is cheese acceptable as security on a bank loan?",
            options: ["Denmark", "Switzerland", "Italy", "Poland"],
            correctOption: "Italy",
            answer: "C: Italy! Credito Emiliano bank in northern Italy happily accepts cheese as collateral. A whole wheel of Parmesan can be worth thousands of dollars.",
            imageURL: "qEightImage"
        },
        {
            number: "9",
            question: "Which country has more Boy Scouts than the rest of the world combined?",
            options: ["Indonesia", "United States", "China", "Australia"],
            correctOption: "Indonesia",
            answer: "A: Indonesia! There are more than 17 million Boy Scouts in Indonesia, more than half the world’s total and three times as many as in the next keenest scouting country, the USA.",
            imageURL: "qNineImage"
        },
        {
            number: "10",
            question: "Which country has hosted the greatest number of summer Olympic Games?",
            options: ["France", "United States", "Japan", "United Kingdom"],
            correctOption: "United States",
            answer: "A: United States! The United States have hosted the Summer Olympic Games no less than four times! In 1904, 1932, 1984 & 1996",
            imageURL: "qTenImage"
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
        timeDisplay.html(timeLeft);
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

        timeDisplay.html(timeLeft);

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
        // x++
        updateHTML();
        $("#next-question").text("Next Question");
        startTimer()
        console.log(x)

        $("#question-display").text(questions[x].question);

        $("#option-a").text(questions[x].options[0])
        $("#option-b").text(questions[x].options[1])
        $("#option-c").text(questions[x].options[2])
        $("#option-d").text(questions[x].options[3])





    };
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
            // x++;
            questionAnswered = true;
            updateHTML();
            if (x === 9) {
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
            // x++;
            updateHTML();
            if (x === 9) {
                $("#next-question").text("Play Again");
                x = 0;
                score = 0;
            }
        }
    });

    $("#next-question").on("click", function () {
        $("#answer-zone").removeClass(questions[x].imageURL);
        $(this).css('display', 'none');
        $("#answer-info").empty();
        x++;
        timeLeft = 10;
        questionAnswered = false;
        updateHTML();
        trivia();

    });


    trivia();

    /*  I ended up having a problem with the way I was incrementing x. I definitely left this far too late. Won't be making that mistake again.
    The game does not work properly, it doesnt finish correctly. Apologies on the messy code also, not really good enough. 
    My last commit was before Midnight, though it was submitted slightly late. 
    I think my main problem here, aside from the terrible time managment, was my poor psuedo coding. I feel I am
    still struggling with proberly visualising the problem on a larger scale. Breaking it down into smaller
    problems is one thing, but getting them all to work together nicely in another, definitely an area I am going to work hard
    on improving it. Cheers */

});