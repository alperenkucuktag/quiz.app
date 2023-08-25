const quizData=[
    { question:'Harry Potter" serisinin yazari kimdir',

    a: 'J.R.R. Tolkien',
    b: 'George R.R. Martin',
    c: 'J.K. Rowling',
    d: 'Stephen King',
    e:'William Gibson',

    correct:'b'

    },
    { question:'Hangi gezegen Güneş Sistemindeki en büyük gezegendir',

    a: 'Mars',
    b: 'Venüs',
    c: 'Jupiter',
    d: 'Uranüs',
    e: 'Güneş',

    correct:'c'

    },
    { question:' Hangi ülke, Eiffel Kulesine ev sahipliği yapmaktadır',

    a: 'İtalya',
    b: 'İspanya',
    c: 'Fransa',
    d: 'Almanya',
    e: 'Yunanistan',

    correct:'c'

    },
    { question:'Leonardo da Vinci nin ünlü tablosu "Mona Lisa" hangi müzede sergilenmektedir',

    a: 'The Louvre, Paris',
    b: 'Tate Modern, Londra',
    c: ' Uffizi Galerisi, Floransa',
    d: 'Metropolitan Sanat Müzesi, New York',
    e: 'Orsay Müzesi',

    correct:'a'

    },
]

const quiz=document.querySelector("#quiz")
const answerEls=document.querySelectorAll(".answer")
const questionEl=document.querySelector("#question")
const a_text=document.querySelector("#a_text")
const b_text=document.querySelector("#b_text")
const c_text=document.querySelector("#c_text")
const d_text=document.querySelector("#d_text")
const e_text=document.querySelector("#e_text")
const submitBtn=document.querySelector("#submit")

let currentQuiz=0
let score=0
loadQuiz()
function loadQuiz(){
    const currentQuizData=quizData[currentQuiz]
    questionEl.innerText=currentQuizData.question
    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
    d_text.innerText=currentQuizData.d
    e_text.innerText=currentQuizData.e
    
    
}
// buttonlarişaretlenmemişse checked false değeri verir
function deselectedAnswers(){
    answerEls.forEach(answerEl=>answerEl.checked=false)
}

function getSelected(){
    
    let answer
    answerEls.forEach(answerEl=>{
        //button işaretlenmişse checked  true verir
         if(answerEl.checked){
            answer=answerEl.id
        }
    })
    
    return answer
    
}

submitBtn.addEventListener("click",()=>{
    //getSelected seçildi anlamını taşır
const answer=getSelected()
//console.log(answer)
if(answer){
    if(answer==quizData[currentQuiz].correct){
        score++
    }
    currentQuiz++
    console.log(currentQuiz)
    if(currentQuiz<quizData.length){
        loadQuiz()
    }else{
        quiz.innerHTML=`
        </h2>Test Tamamlandı,${score*20} puan aldınız </h2>
        <button class="submit" onClick="location.reload()">Tekrar Dene</button>
        `
    }
}

})