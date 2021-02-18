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
//all classes represent specific pages (welcome,questions&results)
class WelcomePage extends Page{
  constructor(containerID){
    super(containerID);//super calls constructor of the super class.
    this._clickHandler = function(){};
    const startButton = document.getElementById("startButton");
    startButton.addEventListener("click", ()=>{
      const quizNameElement = document.querySelector('input[name="quiztype"]:checked');
      if (quizNameElement){
        const quizName = quizNameElement.value;
        const usernameInput = document.getElementById("usernameInput");
        this._clickHandler(usernameInput.value, quizName);
      }
    }); 
  }
  displayQuizForm(quizNames){
    quizNames.forEach(quizName => {
     this._radioButton(quizName, quizName);
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

class QuestionsPage extends Page{
  constructor(containerID){
    super(containerID);
    this._onSubmitAnswer = function(){};
    const nextQuestionButton = document.getElementById("nextQuestionButton");
    nextQuestionButton.addEventListener("click", ()=>{
      const name = `answer`; //Radio button number
      const quizAnswerElement = document.querySelector(`input[name="${name}"]:checked`)
      if (quizAnswerElement){//checks if the radio button is checked by the user
        const quizAnswer = quizAnswerElement.value;
        this._onSubmitAnswer(quizAnswer);
      }
    }); 
  }
  //displays a single question 
  displayQuestion(questionNumber,questionText,answersArray){
    const questionsContainer = document.getElementById("questionsContainer");
    questionsContainer.innerHTML = "";
    const questionNumberHTML = htmlCreator.element("h2",{},`Question number: ${questionNumber}`); 
    questionsContainer.append(questionNumberHTML);
    const displayQuestion = htmlCreator.element("h3",{},questionText); 
    questionsContainer.append(displayQuestion);
    
    answersArray.forEach((answerText,index)=> {
      htmlCreator.radio(questionsContainer,{id:`answer${questionNumber}-${index}`,name:`answer`,label:answerText,value:answerText});
   //name for the radiobuttons allows grouping
    });
  }
  //registers the submit answer handler
  onSubmitAnswer(fn){
    this._onSubmitAnswer = fn;
  }
}

class ResultsPage extends Page{
   displayResults(username,correct,total){
     const resultsText = `Congratulations ${username} you got ${correct} out of ${total}!`;
     const resultsHTML = htmlCreator.element("h2",{},resultsText); 
     this._element.append(resultsHTML);
   }
   displayScores(scores){
     const tableHTML = htmlCreator.element("table",{class: "resultsTable"});
     const theadHTML = htmlCreator.element("thead");
     const headtrHTML = htmlCreator.element("tr");
     const thuserHTML = htmlCreator.element("th",{},"Username");
     const thpointsHTML = htmlCreator.element("th",{},"Points");
     tableHTML.append(theadHTML);
     theadHTML.append(headtrHTML);
     headtrHTML.append(thuserHTML);
     headtrHTML.append(thpointsHTML); 
     scores.forEach((score)=>{
       const newRow = this.scoreRow(score);
       tableHTML.append(newRow);
     })
     this._element.append(tableHTML);
   }
//creates 1 row of the high score table 
   scoreRow(score){
    const trHTML = htmlCreator.element("tr");
    const tdHTML = htmlCreator.element("td",{},score.username);
    const tdpointsHTML = htmlCreator.element("td",{},score.points);
    trHTML.append(tdHTML);
    trHTML.append(tdpointsHTML);
    return trHTML;
   }
}