   import { auth, db } from "./firebaseConfig.js";       
   import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-database.js";      


          
          var questions = [
    {
        question: " What is html?",
        option1: "Hyper Text",
        option2: "Programming Language",
        option3: "Hyper text markup language",
        correctAns: "Hyper text markup language",
    },
    {
        question: "What is css?",
        option1: "hyper text",
        option2: "programming language",
        option3: "Cascading Style Sheet",
        correctAns: "Cascading Style Sheet",
    },

    {
        question: "Which attribute provides alternative text for an image?",
        option1: "alt",
        option2: "aria-label",
        option3: "desc",
        correctAns: "alt",
    },
    {
        question: "Which CSS creates a flex container?",
        option1: "positon: flex;",
        option2: "display: flex;",
        option3: "flex: container;",
        correctAns: "display: flex;",
    },
    {
        question: "Which attribute combination opens a link in a new tab safely?",
        option1: "rel='external'",
        option2: "target='_blank'",
        option3: "target='_blank' rel='noopener noreferrer'",
        correctAns: "target='_blank' rel='noopener noreferrer'",
    },
    {
        question: "Which selector has higher specificity than a class selector?",
        option1: "ID selector(e.g.,#id)",
        option2: "Universal selector(*)",
        option3: "Type selector (e.g.,p)",
        correctAns: "ID selector(e.g.,#id)",
    },
    {
        question: "Which property sets background color?",
        option1: "color",
        option2: "bg-shade",
        option3: "background-color",
        correctAns: "background-color",
    },
    {
        question: "Which element groups rows of table headings?",
        option1: "thead",
        option2: "tfoot",
        option3: "tbody",
        correctAns: "thead",
    },
    {
        question: "Which form attribute makes a field mandatory?",
        option1: "Validate",
        option2: "required",
        option3: "pattern",
        correctAns: "required",
    },
    {
        question: "Which CSS centers flex items along the main axis?",
        option1: "place-item:center;",
        option2: "justify-content:center;",
        option3: "align-items:center;",
        correctAns: "justify-content:center;",
    },


]
// save questions to database
function writeUserData() {
  const db = getDatabase();
  set(ref(db, 'quizQuestions') , questions) 
  .then(() => {
//   console.log("Data saved successfully!");
 
})
.catch((error) => {
    console.log("error to save data!",error.message);
});
}
writeUserData();

// ques saved


var count = 0;
var scores = 0;


function playQuestion() {
    var cards = document.getElementById("quizQues")
    cards.innerHTML = `<fieldset class="mb-4">
                    <p class="ps-3 fw-bold mb-3"> ${questions[count].question}</p>
                   <label class="radio-block">
        <input type="radio" name="quiz" id="1" value="${questions[count].option1}"> 
        <span>${questions[count].option1}</span>
    </label> <br>
    
    <label class="radio-block">
        <input type="radio" name="quiz" id="2" value="${questions[count].option2}"> 
        <span>${questions[count].option2}</span>
    </label> <br>
    
    <label class="radio-block">
        <input type="radio" name="quiz" id="3" value="${questions[count].option3}"> 
        <span>${questions[count].option3}</span>
    </label>
                   

                </fieldset>
                 <button id="nextBtn">Next Question</button>`

                 document.getElementById("nextBtn").addEventListener("click",nextQuestion)

}
playQuestion()



function nextQuestion(){
 var correctQuestion = questions[count].correctAns;
    var checkedInput = document.querySelector('input[name="quiz"]:checked')
    if (checkedInput === null) {
        alert("Select the Answer");
        return;
    }
    if (checkedInput.value === correctQuestion) {
        checkedInput.parentElement.style.backgroundColor = "#96FF96"

        scores++;
        document.getElementById("scores").innerText = scores;


    }
    if (checkedInput.value !== correctQuestion) {
        checkedInput.parentElement.style.backgroundColor = "#FF5555";

        var correctInput = document.querySelector(`input[name="quiz"][value="${correctQuestion}"]`)
        correctInput.parentElement.style.backgroundColor = "#96FF96"
    }



    setTimeout(() => {
            count++;
    

        if (count < questions.length) {
           document.getElementById("quesNo").innerText = count + 1;
            playQuestion();
        } else {
           pushUserScore(scores)

               Swal.fire({
                title: 'Quiz Completed!',
                text: `Your Total Score: ${scores} / ${questions.length}`,
                icon: 'success',
                background: 'rgb(134, 80, 8)',
                color: 'rgb(219, 214, 208)',
                confirmButtonText: 'Restart Quiz',
                confirmButtonColor: 'rgb(134, 80, 8)' 
            }).then((result) => {
                if (result.isConfirmed) {
                    startQuiz();
                }
            });

        }
    
}, 1000);

};




function startQuiz() {

    count = 0;
    scores = 0;
    document.getElementById("scores").innerText = scores;
    document.getElementById("quesNo").innerText = count + 1;
    playQuestion()
}

function showStartQuiz() {
    Swal.fire({
        title: 'Welcome to Quiz App!',
        text: 'Are you ready for Quiz?',
        icon: 'info',
        showCancelButton: false,

        background: 'rgb(134, 80, 8)',
        color: 'rgb(219, 214, 208)',
        confirmButtonText: 'Start Quiz',
        confirmButtonColor: 'rgb(134, 80, 8)', 
        allowOutsideClick: false 
    }).then((result) => {
        if (result.isConfirmed) {
            startQuiz(); 
        }
    });
}

showStartQuiz()

 function pushUserScore(finalScore) {
     var user = auth.currentUser
if(user){
    var scoreRef = ref(db,'quizScores')
    var scoreData ={
        email : user.email,
        score:finalScore,
        totalQues: questions.length
    }
    push(scoreRef, scoreData)

.then(() => {
  console.log("Data saved successfully!");
 
})
.catch((error) => {
    console.log("error to save data!",error.message);
});
}
 }
pushUserScore(scores)


