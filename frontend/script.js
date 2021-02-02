const welcomePage = new WelcomePage("welcomePage");
const questionsPage = new QuestionsPage("questionsPage");

async function startQuiz(username,quizName){
  const ids = await backendAPI.getQuizQuestionsList(quizName);
  const questionData = await backendAPI.getQuestion(ids[0]);
  questionsPage.displayQuestion(1,questionData.text,questionData.answers);
};
//Handles the click on the start button
welcomePage.startButtonClicked((userName,quizName)=>{
  welcomePage.hide();
  questionsPage.show();
  startQuiz(userName, quizName);
})

questionsPage.onSubmitAnswer((answer)=>{
  console.log(`Next Q button clicked!, answer is:${answer}`);
}); 

(async ()=>{
  const quizNames = await backendAPI.getQuizNames();
  welcomePage.displayQuizForm(quizNames);
})();