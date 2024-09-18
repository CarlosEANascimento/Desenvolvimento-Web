const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');

const questions = [
    {
        question: "Qual é o nome do sistema operacional de código aberto mais popular?",
        answers: ["Windows", "macOS", "Linux", "Solaris"],
        correctAnswer: 2
    },
    {
        question: "O que significa a sigla 'HTML'?",
        answers: ["Hyperlinks and Text Markup Language", "Hypertext Transfer Protocol", "Hypertext Markup Language", "High-level Text Markup Language"],
        correctAnswer: 2
    },
    {
        question: "Qual destas linguagens de programação é usada principalmente para desenvolvimento de aplicativos móveis Android?",
        answers: ["Python", "Kotlin", "Ruby", "Swift"],
        correctAnswer: 1
    },
    {
        question: "Qual empresa desenvolveu o assistente de voz conhecido como 'Siri'?",
        answers: ["Amazon", "Microsoft", "Apple", "Google"],
        correctAnswer: 2
    },
    {
        question: "Qual tecnologia é usada para criar criptomoedas como o Bitcoin?",
        answers: ["Blockchain", "Inteligência Artificial", "Big Data", "Computação Quântica"],
        correctAnswer: 0
    }
];

function loadQuestions(){
    questions.forEach((q,index)=>{
        const div = document.createElement('div');
        div.innerHTML = '<h3>'+q.question+'</h3>';
        q.answers.forEach((answer, i)=>{
            div.innerHTML += '<label for='+index+'><input type="radio" name='+index+' value="'+i+'">'+answer+'</label><br>';
        });
        questionContainer.appendChild(div);
    });
}

function submitAnswers() {
    let score = 0;

    questions.forEach((q,index)=>{
        const selectedAnswer = document.querySelector('input[name="'+index+'"]:checked');
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
            score++;
        }
    });
    document.getElementById('result').innerHTML =  'you scored ' + score + ' out of ' + questions.length;
}

window.onload = loadQuestions;