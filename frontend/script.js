
const startButton = document.getElementById("startButton");
const welcomePage = document.getElementById("welcomePage");
const questionsPage = document.getElementById("questionsPage");
const quizRadioButtons = document.getElementById("quizInput");

startButton.addEventListener("click", ()=>{
  welcomePage.classList.add("hidden");
  questionsPage.classList.remove("hidden");
}); 

/* <input type="radio" id="jsradio" name="quiztype" value="javascript">
<label for="jsradio">JavaScript</label><br> */

function radioButton(label,value) {
  const newInputId = `${value}radio`;
  const newInput = document.createElement("input");
  newInput.setAttribute("type","radio");
  newInput.setAttribute("name","quiztype");
  newInput.setAttribute("value",value);
  newInput.setAttribute("id", newInputId);
  quizRadioButtons.append(newInput);
  const newLabel = document.createElement("label");
  newLabel.setAttribute("for",newInputId);
  newLabel.textContent = label;
  quizRadioButtons.append(newLabel);
};

radioButton("Python","python");
radioButton("Ruby","ruby");