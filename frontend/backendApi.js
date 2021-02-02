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
  id:2
});
questions.push({
  text:"How do you?",
  answers:["let","var."],
  id:3
});

const backendAPI = {
  
  getQuizNames: function() {
    return Promise.resolve(["HTML","CSS","JavaScript"]);
  },

  getQuizQuestionsList: function(quizName,cb){
   const ids = questions.map((question)=>{
    return question.id;
   });
   cb(null,ids);
  },
  
  getQuestion: function(id,cb){
    const foundQuestion = questions.find((question)=>{
      return question.id==id;
    });
    cb(null,foundQuestion);
   }
};