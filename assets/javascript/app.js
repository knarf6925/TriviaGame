$("#Start").on("click",function() {
  for (var i = 0; i < questions.length;i++){
      $("#subwrapper").append('<h2>'+ questions[i].questions+'<h2>');
      for(var j=0; j < questions[i].answers.length;j++){
          $("#subwrapper").append("<inpit type = 'radio' name='questions-"+ i +" ' value= '"+ questions[i].answers[j]+"'>"+questions[i].answers[j])
      }
  }
})


var questions =[{
    questions:"Who plays Rocky Balboa?",
    answers: ['Arnold Schwarzenegger', 'Sylvester Stallone', 'Mr. T', 'Bruce Willis'],
    correctAnswer:'Sylvester Stallone', 
}, {
    questions:"What is Rocky's trainers name?",
    answers:['Paulie', 'Mickey', 'Johnny', 'Phil'],
    correctAnswer:'Mickey',

}, {
    questions:"What's Rocky's nick name?",
    answers:['The Killer', 'The best in the west', 'The Italian Stalion', 'The Italin'],
    correctAnswer:'The Italian Stalion',
}, {
    questions:"What US city was Rocky from?",
    answers:['New York', 'Boston', 'Philadelphia', 'New Jersey'],
    correctAnswer:'Philadelphia',
}, {
    questions:"Who was Rocky's first opponent?",
    answers:['Mr T', 'Hulk Hogan', 'Apollo Creed', 'Mike the Punisher'],
    correctAnswer:'Apollo Creed',
}, {
    questions:"Who was the celebrity Rocky fought for charity in Rocky 3?",
    answers:['Ravishing Rick', 'The Hulk', 'Thunderlips', 'Clubber Lang'],
    correctAnswer:'Thunderlips',
}, {
    questions:"Where did he fight in Rocky 4?",
    answers:['Gym', 'Russia', 'New York', 'Alaska'],
    correctAnswer:'Russia',
}, {
    questions: "What is the name of his opponent in Rocky 4?",
    answers:['Apollo', 'Clubber Lang', 'Ivan Drago', 'Mr T'],
    correctAnswer:'Ivan Drago',
}, {
    questions:"Who trains Rocky in Rocky 3?",
    answers:['Mickey', 'Paulie', 'Apollo Creed', 'Larry'],
    correctAnswer:'Apollo Creed',
}, {
    questions:"What is Rocky's wifes name?",
    answers:['Ana', 'Adrian', 'Anabele', 'Amanada'],
    correctAnswer:'Adrian',

}];






