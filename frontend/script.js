const welcomePage = new WelcomePage("welcomePage");
const questionsPage = new QuestionsPage("questionsPage");

(async ()=>{
  const quizNames = await backendAPI.getQuizNames();
  welcomePage.displayQuizForm(quizNames);
  //Handles the click on the start button
  welcomePage.startButtonClicked((userName,quizName)=>{
    welcomePage.hide();
    questionsPage.show();
    startQuiz(userName, quizName);
  })
})();

async function startQuiz(username,quizName){
  const ids = await backendAPI.getQuizQuestionsList(quizName);
  let currentQuestionIndex = 0;
  await question(ids[currentQuestionIndex],currentQuestionIndex+1);
  questionsPage.onSubmitAnswer(async (answer)=>{
    console.log(`Submitted answer for ${currentQuestionIndex}, answer is:${answer}`);
    currentQuestionIndex++;
    if (currentQuestionIndex < ids.length){
      await question(ids[currentQuestionIndex],currentQuestionIndex+1);
    }else{
     console.log("quiz is finished");
    };
  }); 
};

//function to get the data from the backend and display it
async function question(id,questionNumber){
  const questionData = await backendAPI.getQuestion(id);
  questionsPage.displayQuestion(questionNumber,questionData.text,questionData.answers);
};