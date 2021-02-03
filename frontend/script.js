
class QuizController {
  constructor(){
    this.welcomePage = new WelcomePage("welcomePage");
    this.questionsPage = new QuestionsPage("questionsPage");
    this.resultsPage = new ResultsPage("resultsPage");
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
    let numberOfCorrectAnswers = 0;
    let correctAnswer; 
    correctAnswer = await this._question(ids[currentQuestionIndex],currentQuestionIndex+1);
    this.questionsPage.onSubmitAnswer(async (answer)=>{
      if (answer == correctAnswer){
        numberOfCorrectAnswers++;
      }
      currentQuestionIndex++;
      if (currentQuestionIndex < ids.length){
        correctAnswer = await this._question(ids[currentQuestionIndex],currentQuestionIndex+1);
      } else {
        await this.endQuiz(username,numberOfCorrectAnswers,ids.length); 
      };
    }); 
  }
  async endQuiz(userName,correctAnswers,totalQuestions){
     this.questionsPage.hide();
     this.resultsPage.show();
     this.resultsPage.displayResults(userName,correctAnswers,totalQuestions);
  }
  //function to get the data from the backend and display it
  async _question(id,questionNumber){
    const questionData = await backendAPI.getQuestion(id);
    this.questionsPage.displayQuestion(questionNumber,questionData.text,questionData.answers);
    return questionData.correctAnswer;
  }
}
const quizController = new QuizController();
(async()=>{
   await quizController.run();
})();

