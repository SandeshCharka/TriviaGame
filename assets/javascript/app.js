// Start button to initiate
$("#start").on("click", function () {
    quiz.start();
})
// Done button to end
// have to use document.on because the button is not initially on the page but rather gets added.
$(document).on("click", "#done", function () {
    quiz.finish();
})
// questions for trivia
var myQuestions = [{
        question: "Who is the leader of S.H.I.E.L.D?",
        answers: ["Tony Stark", "Bruce Banner", "Nick Fury"],
        correctAnswer: "Nick Fury"
    },
    {
        question: "Who is Loki's Sibling?",
        answers: ["Peter Parker", "Tony Stark", "Thor", "Black Widow"],
        correctAnswer: "Thor"
    },
    {
        question: "What is Captain America's real name?",
        answers: ["Buck Rogers", "Ted Rogers", "Steve Rogers", "The First Avenger"],
        correctAnswer: "Steve Rogers"
    },
    {
        question: "What's the name of the blue glowy powerful cube?",
        answers: ["The Orb", "The Force", "The Blue Crystal", "Tesseract"],
        correctAnswer: "Tesseract"
    },
    {
        question: "What Weapon does Thor Carry?",
        answers: ["Bow and Arrow", "2 Pistols", "Saber", "Hammer"],
        correctAnswer: "Hammer"
    },
    {
        question: "What is the amulet that doctor strange carries?",
        answers: ["Pearl Dream", "Eye Of Agamotto", "Gifted Mark", "Spotless Shield Pendant"],
        correctAnswer: "Eye Of Agamotto"
    },
    {
        question: "Which avenger can wield the Mjolnir?",
        answers: ["Thor", "Hawkeye", "Iron Man", "The Hulk"],
        correctAnswer: "Thor"
    },
];

var quiz = {
    correct: 0,
    incorrect: 0,
    timer: 30,
    countdown: function () {
        // run function every second with setInterval
        quiz.timer--;
        //everytime function is ran update timer on page
        $("#timer").html(quiz.timer);
        //once timer runs out end trivia page and go to results page
        if (quiz.timer <= 0) {
            console.log("time is up!");
            quiz.finish();
        }
    },
    start: function () {
        // create setinterval to run countdown function
        timer = setInterval(quiz.countdown, 1000);
        // create html with timer id so that the countdown function which is ran every second can dynamically update the page with the updated timer
        $("#area").prepend("<h2> Time Remaining: <span id='timer'>30</span> Seconds</h2>");
        // remove start button
        $("#start").remove();
        // loop through every question and append the question and the following multiple choice answers to each question before moving on to the next question
        for (var i = 0; i < myQuestions.length; i++) {
            $("#area").append("<h4>" + myQuestions[i].question + "</h4>");
            // another loop to loop through every answer and append them on the same line to the question
            // input type radio to allow only once answer
            // give a name attribute to reference the question later for correct/incorrect answer
            // the "value" attribute will hold the chosen answer by the user which will be used to compare to the correctanswer and then adding a count to either a correct or incorrect answer
            for (var j = 0; j < myQuestions[i].answers.length; j++) {
                $("#area").append("<input type='radio' name='question-" + i + "' value ='" + myQuestions[i].answers[j] + "'>" + myQuestions[i].answers[j] + " ");
            }
        }
        //creating a done button to force end the quiz
        $("#area").append("<br><button id='done'> Done </button>");

    },
    // function to end the quiz when the timer runs out
    finish: function () {
        //getting the question by using the name attribute and checking which answer was chosen and then comparing that answer to the correct answer to add a count to either a correct or incorrect counter.
        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() == myQuestions[0].correctAnswer) {
                quiz.correct++;
            } else {
                quiz.incorrect++;
            }
        });
        // replicating block of code for each question in the trivia quiz
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() == myQuestions[1].correctAnswer) {
                quiz.correct++;
            } else {
                quiz.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() == myQuestions[2].correctAnswer) {
                quiz.correct++;
            } else {
                quiz.incorrect++;
            }

        });
        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() == myQuestions[3].correctAnswer) {
                quiz.correct++;
            } else {
                quiz.incorrect++;
            }

        });
        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() == myQuestions[4].correctAnswer) {
                quiz.correct++;
            } else {
                quiz.incorrect++;
            }

        });
        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val() == myQuestions[5].correctAnswer) {
                quiz.correct++;
            } else {
                quiz.incorrect++;
            }

        });
        $.each($("input[name='question-6']:checked"), function () {
            if ($(this).val() == myQuestions[6].correctAnswer) {
                quiz.correct++;
            } else {
                quiz.incorrect++;
            }

        });

        // stopping the timer after the quiz is over
        clearInterval(timer);
        // getting rid of the previous html on the page and replacing it with the results
        $("#area").html("<h2> Correct:" + quiz.correct + "</h2>")
        $("#area").append("<h2> Incorrect:" + quiz.incorrect + "</h2>")
        // getting the unanswered questions by using some arithmetic
        $("#area").append("<h2> Unanswered:" + (myQuestions.length - (quiz.correct + quiz.incorrect)) + "</h2>")
    }
};

// Start button creates 30 second timer

// Form initiatlized from start button with Q's and A's
// Form can only choose have one answer. (Radio form)

// If timer runs out indicate correct/incorrect/unanswered questions page

// Done button submits form, indicating correct/incorrect/unanswered questions page