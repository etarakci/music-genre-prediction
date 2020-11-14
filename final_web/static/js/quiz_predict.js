

// Variables for the html
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

// Questions for the Quiz

const myQuestions = [
    {
      question: "Music Duration",
      answers: {
        a: 10000,
        b: 100000,
        c: 1000000
      },
      correctAnswer: "c"
    },
    {
      question: "Musical Pitch: <br> Major (1) - brighter, cheerier, energetic <br> Minor (2) - chill, mellow, gloomy",
      answers: {
        a: 1,
        b: 0,
      },
      correctAnswer: "a"
    },
    {
        question: "Preferred Location in the Audience: <br> Front (1) Middle (0.5) Back (0)",
        answers: {
          a: 1,
          b: 0.5,
          c: 0
        },
        correctAnswer: "c"
    },
    {
        question: "Danceability: <br> Yes (1) Maybe (0.5) No (0)",
        answers: {
          a: 1,
          b: 0.5,
          c: 0
        },
        correctAnswer: "b"
    },
    {
        question: "Energetic: <br> Yes (1) Maybe (0.5) No (0)",
        answers: {
          a: 1,
          b: 0.5,
          c: 0
        },
        correctAnswer: "a"
    },
    {
        question: "Vocals in Music: <br> Yes (1) Maybe (0.5) No (0)",
        answers: {
          a: 1,
          b: 0.5,
          c: 0
        },
        correctAnswer: "b"
    },
    {
        question: "Live Music: <br> Yes (1) Maybe (0.5) No (0)",
        answers: {
          a: 1,
          b: 0.5,
          c: 0
        },
        correctAnswer: "b"
    },
    {
        question: "Loudness <br> Measured: Decibals(dB) ",
        answers: {
          a: 0,
          b: -30,
          c: -60
        },
        correctAnswer: "b"
    },
    {
        question: "Spoken Word in Music: <br> Yes (1) Maybe (0.5) No (0)",
        answers: {
          a: 1,
          b: 0.5,
          c: 0
        },
        correctAnswer: "b"
    }, 
    {
        question: "Mood: <br> Cheery, Energetic (1) Chill, Mellow (0.5) Down, Gloomy (0)",
        answers: {
          a: 1,
          b: 0.5,
          c: 0
        },
        correctAnswer: "b"
    },    
    {
      question: "Beats <br> Measured: beats per minute",
      answers: {
        a: 0,
        b: 100,
        c: 200
      },
      correctAnswer: "b"
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
      
      console.log(answers);
      
    }
  );



  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}

function addScores(){
  testAnswer
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

  function showNextSlide(e) {
e.preventDefault()
    showSlide(currentSlide + 1);
  }
  
  function showPreviousSlide(e) {
    e.preventDefault()
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

