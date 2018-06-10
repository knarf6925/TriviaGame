$(document).ready(function() {

$("#remainingTime").hide();
$("#Start").on("click", trivia.startGame);
$(document).on("click", '.option', triviaguessChecker);

})

var trivia = {
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    currentSet: 0,
    timer: 0,
    timerOn: false,
    timerId: "",

    questions: {
        q1: "Who plays Rocky Balboa?",
        q2: "What is Rocky's trainers name?",
        q3: "What's Rocky's nick name?",
        q4: "What US city was Rocky from?",
        q5: "Who was Rocky's first opponent?",
        q6: "Who was the celebrity Rocky fought for charity in Rocky 3?",
        q7: "Where did he fight in Rocky 4?",
        q8: "What is the name of his opponent in Rocky 4?",
        q9: "Who trains Rocky in Rocky 3?",
        q10: "What is Rocky's wifes name?"


    },
    options: {
        q1: ['Arnold Schwarzenegger', 'Sylvester Stallone', 'Mr. T', 'Bruce Willis'],
        q2: ['Paulie', 'Mickey', 'Johnny', 'Phil'],
        q3: ['The Killer', 'The best in the west', 'The Italian Stalion', 'The Italin'],
        q4: ['New York', 'Boston', 'Philadelphia', 'New Jersey'],
        q5: ['Mr T', 'Hulk Hogan', 'Apollo Creed', 'Mike the Punisher'],
        q6: ['Ravishing Rick', 'The Hulk', 'Thunderlips', 'Clubber Lang'],
        q7: ['Gym', 'Russia', 'New York', 'Alaska'],
        q8: ['Apollo', 'Clubber Lang', 'Ivan Drago', 'Mr T'],
        q9: ['Mickey', 'Paulie', 'Apollo Creed', 'Larry'],
        q10: ['Ana', 'Adrian', 'Anabele', 'Amanada']
    },
    answers: {
        q1: 'Sylvester Stallone', 
        q2: 'Mickey',
        q3: 'The Italian Stalion',
        q4: 'Philadelphia',
        q5: 'Apollo Creed',
        q6: 'Thunderlips',
        q7: 'Russia',
        q8: 'Ivan Drago',
        q9: 'Apollo Creed',
        q10: 'Adrian',
        
    },

    startGame: function(){
        
    }


