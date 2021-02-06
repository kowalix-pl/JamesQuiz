// this handles comms. with the backend
const backendAPI = {
  
  getQuizNames: function() {
    return fetch('http://127.0.0.1:3000/quizzes')
      .then(response=>response.json())
      .then((quizArray)=>{
        return quizArray.map(quiz=>quiz.name);
      })
  },

  getQuizQuestionsList: function(quizName){
    return fetch(`http://127.0.0.1:3000/quizzes/${quizName}`)
      .then(response=>response.json())
   },
  
  getQuestion: function(id){
    return fetch(`http://127.0.0.1:3000/questions/${id}`)
    .then(response=>response.json())
   },

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

