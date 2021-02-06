
 java_script_quiz = Quiz.find_by({ name: 'JavaScript'})
 if java_script_quiz.nil? 
    java_script_quiz=Quiz.create(name:"JavaScript")
    java_script_quiz.questions.create({
      text: "Inside which HTML element do we put the JavaScript?",
      answer: "<script>",
      choices: ["<script>","<js>","<scripting>"]
    })

    java_script_quiz.questions.create({
      text: "Where is the correct place to insert a JavaScript?",
      answer: "Both the <head> and the <body> section are correct",
      choices: ["The <head> section","The <body> section","Both the <head> and the <body> section are correct"]
    })

    java_script_quiz.questions.create({
      text: "How do you create function in JavaScript?",
      answer: "function myFunction()",
      choices: ["function:myFunction()","function = myFunction()","function myFunction()"]
    })

    java_script_quiz.questions.create({
      text: "How do you call a function named myFunction?",
      answer: "myFunction()",
      choices: ["myFunction()","call myFunction()"," call function myFunction()"]
    })

    java_script_quiz.questions.create({
      text: "How do write an IF statement in JavaScript?",
      answer: "if (i==5)",
      choices: ["if i=5 then","if i==5 then","if (i==5)"]
    })

 end 

 html_quiz = Quiz.find_by({ name: 'HTML'})
 if html_quiz.nil? 
    html_quiz=Quiz.create(name:"HTML")
    html_quiz.questions.create({
      text: "What does HTML stand for?",
      answer: "Hyper Text Markup Language",
      choices: ["Home Tool Markup Language","Hyper Text Markup Language","Hyperlinks and Text Markup Language"]
    })
    html_quiz.questions.create({
      text: "Choose the correct HTML element for the largest heading?",
      answer: "<h1>",
      choices: ["<h6>","<h1>","<head>"]
    })

    html_quiz.questions.create({
      text: "What is the correct HTML element for inserting a line break?",
      answer: "<br>",
      choices: ["<lb>","<br>","<break>"]
    })

    html_quiz.questions.create({
      text: "Choose the correct HTML element to define emphasized text?",
      answer: "<em>",
      choices: ["<i>","<em>","<italic>"]
    })

    html_quiz.questions.create({
      text: "Choose the correct HTML element to define emphasized text?",
      answer: "<em>",
      choices: ["<i>","<em>","<italic>"]
    })

    html_quiz.questions.create({
      text: "Which character is used to indicate an end tag?",
      answer: "/",
      choices: ["*","/","<"]
    })
 end 

 css_quiz = Quiz.find_by({ name: 'CSS'})
 if css_quiz.nil? 
    css_quiz=Quiz.create(name:"CSS")

    css_quiz.questions.create({
      text: "Where in an HTML document is the correct place to refer to an internal style sheet?",
      answer: "In the <head> section",
      choices: ["In the <body> section","In the <head> section","At the end of the document"]
    })

    css_quiz.questions.create({
      text: "Which HTML attribute is used to define inline styles?",
      answer: "style",
      choices: ["styles","style","class"]
    })

    css_quiz.questions.create({
      text: "Which HTML tag is used to define an internal style sheet?",
      answer: "<style>",
      choices: ["<style>","<css>","<script>"]
    })

    css_quiz.questions.create({
      text: "Which is the correct CSS syntax?",
      answer: "body {color: black;}",
      choices: ["{body:color=black;}","body:color=black;","body {color: black;}"]
    })

    css_quiz.questions.create({
      text: "Which is more specific as a selector?",
      answer: "id",
      choices: ["class","id","html tag"]
    })
 end 