let loader = 0;
let question = 0;
let questionsAsked = 0
let points = 0;
let loop = true;
const quizLength = 10;
// Cards
const welcomeCard = document.querySelector( '#welcomeCard' );
const card1 = document.querySelector('#card1');
const endingCard = document.querySelector( '#endingCard' );
const developerCard = document.querySelector( '#developerCard' );
// Text Bubbles
const welcomeText = document.querySelector( '#welcomeText' );
const endingText = document.querySelector( '#endingText' );
const textBubble = document.querySelector( '#textBubble' );
// Character
const character = document.querySelector( '#character' )
// Question
const questionContent = document.querySelector( '#questionContent' );
// Answer options
const optionA = document.querySelector( '#optionA' );
const optionB = document.querySelector( '#optionB' );
const optionC = document.querySelector( '#optionC' );
const optionD = document.querySelector( '#optionD' );
// Next Buttons
const startButton = document.querySelector( '#startButton' );
const nextButton1 = document.querySelector( '#nextButton1' );
const nextButton2 = document.querySelector( '#nextButton2' );
// Score
const score = document.querySelector( '#score' );

/* ---Funtions--- */

// Next Card
const nextCard = (currentCard, nextCard) => {
    currentCard.className = 'card text-center animate__animated animate__backOutLeft';
    setTimeout(() => { currentCard.remove();  }, 500);
    setTimeout(() => { nextCard.className = 'card text-center animate__animated animate__backInRight'; }, 500);
}

// Get Random Number
const getRandomNumber = (min, max) => {
    return Math.round(Math.random()*(max - min) + parseInt(min));
}

// Get Question
const getQuestion = (i) => {
    textBubble.className = 'text-center text-break';
    textBubble.textContent = 'Selecciona la respuesta correcta:';
    character.src = questions[i].character.src;
    character.width = questions[i].character.width;
    character.height = questions[i].character.height;
    questionContent.textContent = `${questionsAsked+1}. ${questions[i].question}`;
    optionA.className = 'col-4 btn btn-outline-success btn-sm text-start';
    optionB.className = 'col-4 btn btn-outline-success btn-sm text-start';
    optionC.className = 'col-4 btn btn-outline-success btn-sm text-start';
    optionD.className = 'col-4 btn btn-outline-success btn-sm text-start';
    optionA.textContent = questions[i].options[0].option;
    optionB.textContent = questions[i].options[1].option;
    optionC.textContent = questions[i].options[2].option;
    optionD.textContent = questions[i].options[3].option;
}

// Check Answer
const checkAnswer = (i, j, button) => {
    if(questions[i].options[j].isCorrect){
        points++;
        textBubble.textContent = questions[i].bubbleAnswer;
        textBubble.className = 'text-center text-break animate__animated animate__heartBeat';
        button.className = 'col-4 btn btn-success btn-sm text-start';
    }
    else{
        textBubble.textContent = questions[i].feedback;
        textBubble.className = 'text-center text-break animate__animated animate__shakeX';
        button.className = 'col-4 btn btn-danger btn-sm text-start';
        setTimeout(() => { textBubble.className = 'text-center text-break';  }, 1000);
    }
    optionA.classList.add('disabled');
    optionB.classList.add('disabled');
    optionC.classList.add('disabled');
    optionD.classList.add('disabled');
    setTimeout(() => { nextButton1.className = 'btn btn-outline-success btn-sm animate__animated animate__bounceInUp'; }, 300);
    questions[i].questionAsked = true;
    questionsAsked++;
}

const getPoints = () => {
    score.textContent = `Calificación: ${points}`;
    if(points == 10)
        endingText.textContent = `¡Excelente! obtuviste un ${points} redondo, conoces y dominas los conceptos y medidas a seguir para el buen Manejo de los Residuos Eléctricos y Electrónicos. ¡Cuidemos nuestro planeta y sus recursos!`;
    else if(points == 9 || points == 8)
        endingText.textContent = `¡Muy bien! obtuviste un ${points}, casi llegas al 10. Estas a nada de dominar los conceptos y medidas a seguir para el buen Manejo de los Residuos Eléctricos y Electrónicos. ¡Cuidemos nuestro planeta y sus recursos!`
    else if(points == 7)
        endingText.textContent = `¡Bien! obtuviste un ${points}, repasa un poco mas para dominar los conceptos y medidas a seguir para el buen Manejo de los Residuos Eléctricos y Electrónicos. ¡Cuidemos nuestro planeta y sus recursos!`;
    else
        endingText.textContent = `Obtuviste un ${points}, repasa mas para dominar los conceptos y medidas a seguir para el buen Manejo de los Residuos Eléctricos y Electrónicos.`
}

/* ---Events--- */

// Welcome Card Events
startButton.addEventListener('click', () => {
    if(loader === 0){
        welcomeText.textContent = `Este es un quiz interactivo de ${quizLength} preguntas tomadas de nuestro banco de ${questions.length} preguntas de las primeras 3 unidades de la materia. Conocerás acciones, conceptos y recomendaciones para el buen manejo en contra del Impacto Ambiental y las RAEE, ¿Estas listo?`;
        welcomeText.className = 'text-center text-break animate__animated animate__pulse';
        startButton.textContent = 'Comenzar';
        loader++;
    }else{
        question = getRandomNumber(0, questions.length - 1);
        getQuestion(question);
        nextCard(welcomeCard, card1);
    }
})

// Quiz Card Events
optionA.addEventListener('click', () => { checkAnswer(question, 0, optionA) } );
optionB.addEventListener('click', () => { checkAnswer(question, 1, optionB) } );
optionC.addEventListener('click', () => { checkAnswer(question, 2, optionC) } );
optionD.addEventListener('click', () => { checkAnswer(question, 3, optionD) } );
nextButton1.addEventListener('click', () => {
    if(questionsAsked == quizLength){
        getPoints();
        nextCard(card1, endingCard);
    }else{
        card1.className = 'card text-center animate__animated animate__backOutLeft';
        nextButton1.className = 'btn btn-outline-success btn-sm animate__animated animate__fadeOutDown';
        console.log(questionsAsked);
        setTimeout(() => {
            loop = true;
            while(loop == true){
                question = getRandomNumber(0, questions.length - 1);
                if(questions[question].questionAsked == false){
                    getQuestion(question);
                    card1.className = 'card text-center animate__animated animate__backInRight';
                    loop = false;
                }
            }
        }, 500);
    }
} );
nextButton2.addEventListener('click', () => { nextCard(endingCard, developerCard); } );