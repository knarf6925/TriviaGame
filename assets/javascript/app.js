//Start of game


$("#Start").on("click", function () {
    game.start();
    
})

// questions var
var questions = [{
    questions: "Who plays Rocky Balboa?",
    answers: ['Arnold Schwarzenegger', 'Sylvester Stallone', 'Mr. T', 'Bruce Willis'],
    correctAnswer: 'Sylvester Stallone',
}, {
    questions: "What is Rocky's trainers name?",
    answers: ['Paulie', 'Mickey', 'Johnny', 'Phil'],
    correctAnswer: 'Mickey',
}, {
    questions: "What's Rocky's nick name?",
    answers: ['The Killer', 'The best in the west', 'The Italian Stalion', 'The Italin'],
    correctAnswer: 'The Italian Stalion',
}, {
    questions: "What U.S. city was Rocky from?",
    answers: ['New York', 'Boston', 'Philadelphia', 'New Jersey'],
    correctAnswer: 'Philadelphia',
}, {
    questions: "Who was Rocky's first opponent?",
    answers: ['Mr T', 'Hulk Hogan', 'Apollo Creed', 'Mike the Punisher'],
    correctAnswer: 'Apollo Creed',
}, {
    questions: "Who was the celebrity Rocky fought for charity in Rocky 3?",
    answers: ['Ravishing Rick', 'The Hulk', 'Thunderlips', 'Clubber Lang'],
    correctAnswer: 'Thunderlips',
}, {
    questions: "Where did he fight in Rocky 4?",
    answers: ['Gym', 'Russia', 'New York', 'Alaska'],
    correctAnswer: 'Russia',
}, {
    questions: "What is the name of his opponent in Rocky 4?",
    answers: ['Apollo', 'Clubber Lang', 'Ivan Drago', 'Mr T'],
    correctAnswer: 'Ivan Drago',
}, {
    questions: "Who trains Rocky in Rocky 3?",
    answers: ['Mickey', 'Paulie', 'Apollo Creed', 'Larry'],
    correctAnswer: 'Apollo Creed',
}, {
    questions: "What is Rocky's wifes name?",
    answers: ['Ana', 'Adrian', 'Anabele', 'Amanada'],
    correctAnswer: 'Adrian',

}];

// game counter
var game = {
    correct: 0,
    incorrect: 0,
    counter: 5,
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("time is up");
            game.done();

        }
        // function to attach timer and questions to subwrapper
    },
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $("#subwrapper").prepend("<h2>Time Remaining: <span id='counter'> 60 </span> Seconds </h2>");
        $("#Start").remove();
        for (var i = 0; i < questions.length; i++) {
            $("#subwrapper").append('<h2>' + questions[i].questions + '<h2>');
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#subwrapper").append("<input type='radio' name='questions-" + i + " ' value= '" + questions[i].answers[j] + " ' > " + questions[i].answers[j])
            }
        }
    },

    // function to check answers 1-10

    done: function () {
        $.each($("input [name='question-0']:checked"), function () {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input [name='question-1']:checked"), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }

        });
        $.each($("input [name='question-2']:checked"), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        $.each($("input [name='question-3]:checked"), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input [name='question-4:checked"), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input [name='question-5]:checked"), function () {
            if ($(this).val() == questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input [name='question-6]:checked"), function () {
            if ($(this).val() == questions[6].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input [name='question-7]:checked"), function () {
            if ($(this).val() == questions[7].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input [name='question-8]:checked"), function () {
            if ($(this).val() == questions[8].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input [name='question-9]:checked"), function () {
            if ($(this).val() == questions[9].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input [name='question-10]:checked"), function () {
            if ($(this).val() == questions[10].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        //function to show results
        this.result();
    },

    result: function () {
        clearIntervalval(timer);
        $("#subwrapper h2").remove();

        $("#subwrapper").htmnl("<h2>Ay Yo! Your done!</h2>");
        $("#subwrapper").append("<h3>Correct Answers: " + this.correct + "</h3>");
        $("#subwrapper").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");


    }
}






