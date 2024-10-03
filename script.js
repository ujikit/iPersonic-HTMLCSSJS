const personalities = [
    {'fx': '2222', 'url': '1.html', 'label': 'Idealis Penyelaras'},
    {'fx': '1222', 'url': '2.html', 'label': 'Idealis Penyelaras'},
    {'fx': '1212', 'url': '3.html', 'label': 'Pemikir Dinamis'},
    {'fx': '1211', 'url': '4.html', 'label': 'Pemikir Pendobrak'},
    {'fx': '1221', 'url': '5.html', 'label': 'Idealis Spontan'},
    {'fx': '1121', 'url': '6.html', 'label': 'Pelaku Santai'},
    {'fx': '1122', 'url': '7.html', 'label': 'Realis Sosial'},
    {'fx': '1112', 'url': '8.html', 'label': 'Realis Bertekad'},
    {'fx': '1111', 'url': '9.html', 'label': 'Pelaku Bersemangat'},
    {'fx': '2111', 'url': '10.html', 'label': 'Pelaku Individualistis'},
    {'fx': '2121', 'url': '11.html', 'label': 'Pelaku Peka'},
    {'fx': '2122', 'url': '12.html', 'label': 'Realis Baik Hati'},
    {'fx': '2112', 'url': '13.html', 'label': 'Realis Terpercaya'},
    {'fx': '2212', 'url': '14.html', 'label': 'Pemikir Mandiri'},
    {'fx': '2211', 'url': '15.html', 'label': 'Pemikir Analitis'},
    {'fx': '2221', 'url': '15.html', 'label': 'Idealis Pemimpi'},
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

function displayDropdownTopMenu(personalities) {
    let personalityHTML = "<ul>";
    for(let i = 0; i < personalities.length; i++) {
        personalityHTML += "<li><a href='"+personalities[i]['url']+"'>"+personalities[i]['label']+"</a></li>";
    }
    personalityHTML += "</ul>";

    const personalityContainer = document.querySelector(".personality-container");
    personalityContainer.innerHTML = personalityHTML;
}

function displayQuizOptions(quizOptions) {
    // set quiz step
    let quizStepHTML = "<ul>";
    quizStepHTML += "<li class='active'>Langkah 1</li>";
    quizStepHTML += "<li>Langkah 2</li>";
    quizStepHTML += "<li>Langkah 3</li>";
    quizStepHTML += "<li>Langkah 4</li>";
    quizStepHTML += "</ul>";

    const quizStepContainer = document.querySelector(".quiz-step");
    quizStepContainer.innerHTML = quizStepHTML;

    // set quiz options
    let answer = 0;
    let quizOptionsHTML = "";
    quizOptionsHTML += "<div class='quiz-box'>";
    quizOptionsHTML += "<p class='lead-2 font-weight-light'>"+quizOptions[answer][1]+"</p>";
    quizOptionsHTML += "<br />";
    quizOptionsHTML += "<a href='#' class='btn btn-orange choose-answer' data='1'><i class='fa fa-play' aria-hidden='true'></i>&nbsp;&nbsp;Hal ini berlaku untuk saya</a>";
    quizOptionsHTML += "</div>";
    quizOptionsHTML += "<div class='quiz-box'>";
    quizOptionsHTML += "<p class='lead-2 font-weight-light'>"+quizOptions[answer][2]+"</p>";
    quizOptionsHTML += "<br />";
    quizOptionsHTML += "<a href='#' class='btn btn-orange choose-answer' data='2'><i class='fa fa-play' aria-hidden='true'></i>&nbsp;&nbsp;Hal ini berlaku untuk saya</a>";
    quizOptionsHTML += "</div>";

    const quizOptionsContainer = document.querySelector(".quiz-options");
    quizOptionsContainer.innerHTML = quizOptionsHTML;

    // set click button answer
    const answerButtons = document.querySelectorAll(".choose-answer");
    answerButtons.forEach(button => {
        button.addEventListener("click", function() {
            let valueButton = button.getAttribute("data");
            alert(valueButton);
        })
    })
}


// call functions
displayDropdownTopMenu(personalities);
displayQuizOptions(quizOptions);
