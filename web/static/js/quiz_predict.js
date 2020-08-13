
// Variables for the html
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

// Questions for the Quiz

const myQuestions = [
    {
      question: "What is your preferred duration for music?",
      answers: {
        a: 10000,
        b: 100000,
        c: 1000000
      },
      correctAnswer: "c"
    },
    {
      question: "Major or minor scale? Major - brighter, cheerier, energetic Minor - chill, mellow, gloomy",
      answers: {
        a: "Major",
        b: "Minor",
      },
      correctAnswer: "a"
    },
    {
        question: "Where do you prefer to sit when you go to a concert, music hall, performance, etc.?",
        answers: {
          a: "Front",
          b: "Middle",
          c: "Back"
        },
        correctAnswer: "c"
    },
    {
        question: "Do you feel like dancing?",
        answers: {
          a: "Yes!",
          b: "No thanks",
        },
        correctAnswer: "b"
    },
    {
        question: "Do you need some energy?",
        answers: {
          a: "Yes!",
          b: "Minor",
        },
        correctAnswer: "a"
    },
    {
        question: "Do you like vocals in your music?",
        answers: {
          a: "Yes!",
          b: "No thanks",
        },
        correctAnswer: "b"
    },
    {
        question: "Do you like live music?",
        answers: {
          a: "Yes!",
          b: "No thanks",
        },
        correctAnswer: "b"
    },
    {
        question: "Do you like your music loud or how loud do you want your music?",
        answers: {
          a: "Yes!",
          b: "No thanks",
        },
        correctAnswer: "b"
    },

    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    }
  ];


function buildQuiz(){
    // variable to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => 
    {
      // the code we want to run for each question goes here

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }
      // add this question and its answers to the output
      output.push(
        `<div class="slide">
        <div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>
      </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}

function showResults(){

        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll('.answers');
      
        // keep track of user's answers
        let numCorrect = 0;
      
        // for each question...
        myQuestions.forEach( (currentQuestion, questionNumber) => {
      
          // find selected answer
          const answerContainer = answerContainers[questionNumber];
          const selector = `input[name=question${questionNumber}]:checked`;
          const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      
          // if answer is correct
          if(userAnswer === currentQuestion.correctAnswer){
            // add to the number of correct answers
            numCorrect++;
      
            // color the answers green
            answerContainers[questionNumber].style.color = 'lightgreen';
          }
          // if answer is wrong or blank
          else{
            // color the answers red
            answerContainers[questionNumber].style.color = 'red';
          }
        });
      
        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }
  
  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

// display quiz right away
buildQuiz();

// Pagination
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;


// Show the first slide
showSlide(currentSlide);


// on submit, show results
submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

