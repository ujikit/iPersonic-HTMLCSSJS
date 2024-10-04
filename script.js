class PersonalityQuiz {
    constructor() {
        this.personalities = [
            {'fx': 'BBBB', 'url': '1.html', 'label': 'Idealis Penyelaras'},
            {'fx': 'ABBB', 'url': '2.html', 'label': 'Idealis Terlibat'},
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
            {'fx': 'BBBA', 'url': '16.html', 'label': 'Idealis Pemimpi'},
        ];

        this.quizOptions = [
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

        this.fxAnswer = '';
        this.init();
    }

    init() {
        this.displayDropdownTopMenu();
        this.displayFooter();
        this.displayQuizOptions();
    }

    displayDropdownTopMenu() {
        let personalityHTML = "<ul>";
        for(let i = 0; i < this.personalities.length; i++) {
            personalityHTML += "<li><a href='"+this.personalities[i]['url']+"'>"+this.personalities[i]['label']+"</a></li>";
        }
        personalityHTML += "</ul>";

        const personalityContainer = document.querySelector(".personality-container");
        personalityContainer.innerHTML = personalityHTML;
    }

    displayFooter() {
        let footerHTML = '<p>© iPersonic <a href="#">Personality Test</a> <a href="#">Career Test</a> <a href="#">Persönlichkeitstest</a> <a href="#">Berufstest</a> <a href="#">Privacy Policy</a> <a href="#">Felicitas Heyne</a> <a href="#">Impressum</a> <a href="#">Help & Contact</a> iPersonic supports <a href="#">Audiopedia Foundation</a></p>';
        footerHTML += '<p><a href="#">English</a> | <a href="#">Deutsch</a> | <a href="#">Español</a> | <a href="#">Français</a> | <a href="#">Português</a> | <a href="#">中文</a> | <a href="#">Русский</a> | <a href="#">हिंदी</a> | <a href="#">العربية</a> | <a href="#">日本語</a> | <a href="#">Bahasa Indonesia</a> | <a href="#">Italiano</a> | <a href="#">Svenska</a> | <a href="#">Nederlands</a> | <a href="#">עברית</a> | <a href="#">Afrikaans</a> | <a href="#">Bosanski</a> | <a href="#">Català</a> | <a href="#">Čeština</a> | <a href="#">Hrvatski</a> | <a href="#">Magyar</a> | <a href="#">Română</a> | <a href="#">Slovenski</a> | <a href="#">Slovenský</a> | <a href="#">Srpski</a> | <a href="#">Български</a></p>';

        const footerContainer = document.querySelector(".footer-container");
        footerContainer.innerHTML = footerHTML;
    }

    displayQuizOptions() {
        let totalAnswer = this.fxAnswer.length;
        // set quiz step
        let quizStepHTML = "<ul>";
        let stepActive = '';
        for(let i = 0; i < this.quizOptions.length; i++) {
            let numberStep = i + 1;
            stepActive = (totalAnswer === i) ? 'active' : '';
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
        quizOptionsHTML += "<p class='lead-2 font-weight-light'>"+this.quizOptions[totalAnswer][1]+"</p>";
        quizOptionsHTML += "<br />";
        quizOptionsHTML += "<a href='#' class='btn btn-orange choose-answer' data='A'><i class='fa fa-play' aria-hidden='true'></i>&nbsp;&nbsp;Hal ini berlaku untuk saya</a>";
        quizOptionsHTML += "</div>";
        quizOptionsHTML += "<div class='quiz-box'>";
        quizOptionsHTML += "<p class='lead-2 font-weight-light'>"+this.quizOptions[totalAnswer][2]+"</p>";
        quizOptionsHTML += "<br />";
        quizOptionsHTML += "<a href='#' class='btn btn-orange choose-answer' data='B'><i class='fa fa-play' aria-hidden='true'></i>&nbsp;&nbsp;Hal ini berlaku untuk saya</a>";
        quizOptionsHTML += "</div>";

        const quizOptionsContainer = document.querySelector(".quiz-options");
        if(quizOptionsContainer) {
            quizOptionsContainer.innerHTML = quizOptionsHTML;
        }

        this.saveQuizAnswer();
    }

    saveQuizAnswer() {
        // set click button answer
        const answerButtons = document.querySelectorAll(".choose-answer");
        answerButtons.forEach(button => {
            button.addEventListener("click", () => {
                let valueButton = button.getAttribute("data");
                if(this.fxAnswer.length < 4) {
                    this.fxAnswer += valueButton;
                    let totalAnswer = this.fxAnswer.length;
                    console.log(this.fxAnswer);
                    console.log(totalAnswer);

                    if(this.fxAnswer.length < this.quizOptions.length) {
                        this.displayQuizOptions();
                    } else {
                        for(let i = 0; i < this.personalities.length; i++) {
                            if(this.fxAnswer === this.personalities[i]['fx']) {
                                console.log("redirect to "+this.personalities[i]['url']);
                                window.location.href = this.personalities[i]['url'];
                            }
                        }
                    }                
                }
            });
        });
    }
}

// Initialize the Personality Quiz
new PersonalityQuiz();
