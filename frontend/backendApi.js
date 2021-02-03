// this handles comms. with the backend
const questions = [];
questions.push({
  text:"How do you define function in JavaScript?",
  answers:["Function(){}","Get ..d","Def."],
  correctAnswer:"Function(){}",
  id:1
});
questions.push({
  text:"How do you define function in Ruby?",
  answers:["Var","Const."],
  correctAnswer: "Const.",
  id:2
});
questions.push({
  text:"How do you?",
  answers:["let","var."],
  correctAnswer:"var.",
  id:3
});

const backendAPI = {
  
  getQuizNames: function() {
    return Promise.resolve(["HTML","CSS","JavaScript"]);
  },

  getQuizQuestionsList: function(quizName){
    const ids = questions.map((question)=>{
     return question.id;
    });
    return Promise.resolve(ids);
   },
  
  getQuestion: function(id){
    const foundQuestion = questions.find((question)=>{
      return question.id==id;
    });
    return Promise.resolve(foundQuestion);
   }
};

