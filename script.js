const personalities = [
    {'fx': 'BBBB', 'url': '1.html', 'label': 'Idealis Penyelaras'},
    {'fx': 'ABBB', 'url': '2.html', 'label': 'Idealis Penyelaras'},
    {'fx': 'ABAB', 'url': '3.html', 'label': 'Pemikir Dinamis'},
    {'fx': 'ABAA', 'url': '4.html', 'label': 'Pemikir Pendobrak'},
    {'fx': 'ABBA', 'url': '5.html', 'label': 'Idealis Spontan'},
    {'fx': 'AABA', 'url': '6.html', 'label': 'Pelaku Santai'},
    {'fx': 'AABB', 'url': '7.html', 'label': 'Realis Sosial'},
    {'fx': 'AAAB', 'url': '8.html', 'label': 'Realis Bertekad'},
    {'fx': 'AAAA', 'url': '9.html', 'label': 'Pelaku Bersemangat'},
    {'fx': 'BAAA', 'url': '10.html', 'label': 'Pelaku Individualistis'},
    {'fx': 'BABA', 'url': '11.html', 'label': 'Pelaku Peka'},
    {'fx': 'BABB', 'url': '12.html', 'label': 'Realis Baik Hati'},
    {'fx': 'BAAB', 'url': '13.html', 'label': 'Realis Terpercaya'},
    {'fx': 'BBAB', 'url': '14.html', 'label': 'Pemikir Mandiri'},
    {'fx': 'BBAA', 'url': '15.html', 'label': 'Pemikir Analitis'},
    {'fx': 'BBBA', 'url': '15.html', 'label': 'Idealis Pemimpi'},
];

const quizOptions = [
    {
        1: "Saya agak ramah, membuka hati dan saya suka berada bersama-sama dengan orang lain.",
        2: "Saya membutuhkan banyak waktu untuk sendirian dan agak hati-hati untuk memulai hubungan baru."
    },
    {
        1: "Saya lebih suka bekerja praktis, menghasilkan hasil yang nyata.",
        2: "Saya lebih suka bekerja secara teori, mengembangkan ide-ide dan konsep baru."
    },
    {
        1: "Saya pintar dalam hal analisis dan logika dan ketika saya ragu, saya membiarkan diri saya dipandu oleh otak saya.",
        2: "Saya sangat sensitif dan emosional dan bila ragu, aku membiarkan diriku dibimbing oleh hati saya."
    },
    {
        1: "Saya orang yang fleksibel dan spontan, kadang-kadang agak kacau.",
        2: "Saya orang yang handal dan terorganisir dengan baik. Saya lebih memilih untuk merencanakan masa depan."
    }        
];

function displayDropdownTopMenu() {
    let personalityHTML = "<ul>";
    for(let i = 0; i < personalities.length; i++) {
        personalityHTML += "<li><a href='"+personalities[i]['url']+"'>"+personalities[i]['label']+"</a></li>";
    }
    personalityHTML += "</ul>";

    const personalityContainer = document.querySelector(".personality-container");
    personalityContainer.innerHTML = personalityHTML;
}

function displayQuizOptions(fxAnswer) {
    let totalAnswer = fxAnswer.length;
    // set quiz step
    let quizStepHTML = "<ul>";
    let stepActive = '';
    for(let i = 0; i < quizOptions.length; i++) {
        let numberStep = i + 1;
        if(totalAnswer === i) {
            stepActive = 'active';
        }else{
            stepActive = '';
        }
        quizStepHTML += "<li class='"+stepActive+"'>Langkah "+numberStep+"</li>";
    }
    quizStepHTML += "</ul>";

    const quizStepContainer = document.querySelector(".quiz-step");
    if (quizStepContainer) {
        quizStepContainer.innerHTML = quizStepHTML;
    }

    // set quiz options
    let quizOptionsHTML = "";
    quizOptionsHTML += "<div class='quiz-box'>";
    quizOptionsHTML += "<p class='lead-2 font-weight-light'>"+quizOptions[totalAnswer][1]+"</p>";
    quizOptionsHTML += "<br />";
    quizOptionsHTML += "<a href='#' class='btn btn-orange choose-answer' data='A'><i class='fa fa-play' aria-hidden='true'></i>&nbsp;&nbsp;Hal ini berlaku untuk saya</a>";
    quizOptionsHTML += "</div>";
    quizOptionsHTML += "<div class='quiz-box'>";
    quizOptionsHTML += "<p class='lead-2 font-weight-light'>"+quizOptions[totalAnswer][2]+"</p>";
    quizOptionsHTML += "<br />";
    quizOptionsHTML += "<a href='#' class='btn btn-orange choose-answer' data='B'><i class='fa fa-play' aria-hidden='true'></i>&nbsp;&nbsp;Hal ini berlaku untuk saya</a>";
    quizOptionsHTML += "</div>";

    const quizOptionsContainer = document.querySelector(".quiz-options");
    if(quizOptionsContainer) {
        quizOptionsContainer.innerHTML = quizOptionsHTML;
    }
    
    // call function
    saveQuizAnswer(fxAnswer);
}

function saveQuizAnswer(fxAnswer) {
    // set click button answer
    const answerButtons = document.querySelectorAll(".choose-answer");
    answerButtons.forEach(button => {
        button.addEventListener("click", function() {
            let valueButton = button.getAttribute("data");
            if(fxAnswer.length < 4) {
                fxAnswer = fxAnswer + valueButton;
                let totalAnswer = fxAnswer.length;
                console.log(fxAnswer);
                console.log(totalAnswer)

                if(fxAnswer.length < quizOptions.length) {
                    displayQuizOptions(fxAnswer);
                }else{
                    for(let i = 0; i < personalities.length; i++) {
                        if(fxAnswer === personalities[i]['fx']) {
                            console.log("redirect to "+personalities[i]['url']);
                            window.location.href = personalities[i]['url'];
                        }
                    }
                }                
            }
        })
    });
}

function logicQuizOptions() {
    let fxAnswer = '';
    displayQuizOptions(fxAnswer);
}

// call functions
displayDropdownTopMenu();
logicQuizOptions();
