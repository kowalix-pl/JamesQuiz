// this handles comms. with the backend
const backendAPI = {
  
  //fetches the list of quiz names from the backend server
  getQuizNames: function() {
    return fetch('http://127.0.0.1:3000/quizzes')
      .then(response=>response.json())
      .then((quizArray)=>{//name from the object
        return quizArray.map(quiz=>quiz.name);
      })
  },
/*fetches the list of all ids objects for specific quiz
[array of numbers, numbera are id's of */
  getQuizQuestionsList: function(quizName){
    return fetch(`http://127.0.0.1:3000/quizzes/${quizName}`)
      .then(response=>response.json())
   },
  //gets question object with a specific question id
  getQuestion: function(id){
    return fetch(`http://127.0.0.1:3000/questions/${id}`)
    .then(response=>response.json())
   },
//submits the results of the quiz and returns the high scores for that quiz
   scoreQuiz: function(userName,quizName,correctAnswers){
    const opts = {points:correctAnswers,userName,quizName}; 
    return fetch(`http://127.0.0.1:3000/scores`,{
      method: 'post',
      body: JSON.stringify({score: opts}),
      headers: {"Content-Type": "application/json"}
    })
    .then(response=>response.json())
   }
};

