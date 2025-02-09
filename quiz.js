const quizData = [
    {
      question: "Who do I love the most?",
      options: ["My man", "Aku", "Ayo", "Nancy"],
      correctAnswer: "My man"
    },
    {
      question: "What's my worst course?",
      options: ["Pharmacology", "Med-surg", "Mental Health", "Emergency Nursing"],
      correctAnswer: "Pharmacology"
    },
    {
      question: "What track is this?",
      options: ["Front end", "Back end", "Web 3", "Product management"],
      correctAnswer: "Front end"
    },
    {
      question: "Which was the hardest task ever(Make una pity us)?",
      options: ["Task 6", "Task 6", "Task 6", "Task 6"],
      correctAnswer: "Task 6"
    },
    {
      question: "How has the learnable experience been so far?",
      options: ["I dey vex", "Learnable is beginner friendly (Tappi make I no catch you outside)", "The Lord is my strength", "It is"],
      correctAnswer: "Learnable is beginner friendly (Tappi make I no catch you outside)"
    }
  ];
  
  const quizContainer = document.getElementById('quiz-container');
  const resultsContainer = document.getElementById('results-container');
  const questionElement = document.getElementById('question');
  const optionsContainer = document.getElementById('options-container');
  const nextButton = document.getElementById('next-button');
  const progressElement = document.getElementById('progress');
  const scoreElement = document.getElementById('score-text');
  const restartButton = document.getElementById('restart-button');
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';
    
    currentQuestion.options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.onclick = () => handleAnswer(option);
      optionsContainer.appendChild(button);
    });
  
    progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
    nextButton.disabled = true;
  }
  
  
  function handleAnswer(selectedOption) {
    const buttons = optionsContainer.querySelectorAll('button');
    buttons.forEach(button => {
      button.disabled = true;

      if (button.textContent === quizData[currentQuestionIndex].correctAnswer) {
        button.classList.add('correct');
      }

      if (button.textContent === selectedOption && 
          selectedOption !== quizData[currentQuestionIndex].correctAnswer) {
        button.classList.add('wrong');
      }
    });
  
    if (selectedOption === quizData[currentQuestionIndex].correctAnswer) {
      score++;
    }
    nextButton.disabled = false;
  }
  
  function showResults() {
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    scoreElement.textContent = `You scored ${score} out of ${quizData.length}!`;
  }
  
  nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < quizData.length - 1) {
      currentQuestionIndex++;
      loadQuestion();
    } else {
      showResults();
    }
  });
  

  restartButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    quizContainer.style.display = 'block';
    resultsContainer.style.display = 'none';
    loadQuestion();
  });
  loadQuestion();