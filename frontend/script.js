//Class that shows and hides the page
class Page{
  constructor(containerID){
   this._element = document.getElementById(containerID);
  }
  hide(){
    this._element.classList.add("hidden");
  }
  show(){
    this._element.classList.remove("hidden");
  }
}
class WelcomePage extends Page{
  constructor(containerID){
    super(containerID);//super calls constructor of the super class.
    this._clickHandler = function(){};
    const startButton = document.getElementById("startButton");
    startButton.addEventListener("click", ()=>{
      const quizName = document.querySelector('input[name="quiztype"]:checked').value;
      const usernameInput = document.getElementById("usernameInput");
      this._clickHandler(usernameInput.value, quizName);
    }); 
  }
  displayQuizForm(quizNames){
    quizNames.forEach(quizName => {
     this._radioButton(quizName, quizName.toLowerCase());
    });
  }
  _radioButton(label, value){
    const newInputId = `${value}radio`;
    const radioContainer = document.getElementById("quizInput");
    htmlCreator.radio(radioContainer,{id:newInputId,label:label,value:value,name:"quiztype"});
  }
  // Registeres callback for when the start button is clicked
  startButtonClicked(fn){
    this._clickHandler = fn;
  }
}
const welcomePage = new WelcomePage("welcomePage");
const questionsPage = new Page("questionsPage");

// generate radiobuttons
function createQuestionRB(questionNumber,questionText,answersArray){
    const questionNumberHTML = htmlCreator.element("h2",{},`Question number: ${questionNumber}`); 
    htmlElement.questionsContainer.append(questionNumberHTML);
    const displayQuestion = htmlCreator.element("h3",{},questionText); 
    htmlElement.questionsContainer.append(displayQuestion);
    
    answersArray.forEach((answerText,index)=> {
      htmlCreator.radio(htmlElement.questionsContainer,{id:`answer${questionNumber}-${index}`,name:`answer${questionNumber}`,label:answerText,value:answerText});
    });
};

async function startQuiz(username,quizName){
  const ids = await backendAPI.getQuizQuestionsList(quizName);
  const questionData = await backendAPI.getQuestion(ids[0]);
  createQuestionRB(1,questionData.text,questionData.answers);
};
//Handles the click on the start button
welcomePage.startButtonClicked((userName,quizName)=>{
  welcomePage.hide();
  questionsPage.show();
  startQuiz(userName, quizName);
})

htmlElement.nextQuestionButton.addEventListener("click", ()=>{
  const name = `answer${1}`; //Radio button number
  const quizAnswer = document.querySelector(`input[name="${name}"]:checked`).value;
  console.log(`Next Q button clicked!, answer is:${quizAnswer}`);
}); 

(async ()=>{
  const quizNames = await backendAPI.getQuizNames();
  welcomePage.displayQuizForm(quizNames);
})();