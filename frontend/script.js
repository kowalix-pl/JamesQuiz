
class QuizController {
  constructor(){
    this.welcomePage = new WelcomePage("welcomePage");
    this.questionsPage = new QuestionsPage("questionsPage");
  }
  
  async welcome(){
    const quizNames = await backendAPI.getQuizNames();
    this.welcomePage.displayQuizForm(quizNames);
    //Handles the click on the start button
    this.welcomePage.startButtonClicked(async (userName,quizName)=>{
      this.welcomePage.hide();
      this.questionsPage.show();
      await this.startQuiz(userName, quizName);
    })
  }
  async run(){
    await this.welcome();
  }
  async startQuiz(username,quizName){
    const ids = await backendAPI.getQuizQuestionsList(quizName);
    let currentQuestionIndex = 0;
    await this._question(ids[currentQuestionIndex],currentQuestionIndex+1);
    this.questionsPage.onSubmitAnswer(async (answer)=>{
      console.log(`Submitted answer for ${currentQuestionIndex}, answer is:${answer}`);
      currentQuestionIndex++;
      if (currentQuestionIndex < ids.length){
        await this._question(ids[currentQuestionIndex],currentQuestionIndex+1);
      }else{
       console.log("quiz is finished");
      };
    }); 
  }
  //function to get the data from the backend and display it
  async _question(id,questionNumber){
    const questionData = await backendAPI.getQuestion(id);
    this.questionsPage.displayQuestion(questionNumber,questionData.text,questionData.answers);
  }
}
const quizController = new QuizController();
(async()=>{
   await quizController.run();
})();

