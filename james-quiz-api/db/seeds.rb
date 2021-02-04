
 java_script_quiz = Quiz.find_by({ name: 'JavaScript'})
 if java_script_quiz.nil? 
    java_script_quiz=Quiz.create(name:"JavaScript")
    java_script_quiz.questions.create({
      text: "How do you do?",
      answer: "Great",
      choices: ["Not so good","Great","Awesome"]
    })
    java_script_quiz.questions.create({
      text: "What day is today?",
      answer: "Friday",
      choices: ["Monday","Tuesday","Friday"]
    })
 end 

 html_quiz = Quiz.find_by({ name: 'HTML'})
 if html_quiz.nil? 
    html_quiz=Quiz.create(name:"HTML")
    html_quiz.questions.create({
      text: "Are you married?",
      answer: "yes",
      choices: ["yes","no","do not want to say"]
    })
    html_quiz.questions.create({
      text: "How old are you?",
      answer: "5",
      choices: ["5","10","15"]
    })
 end 