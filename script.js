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

let personalityHTML = "<ul>";
console.log(personalities.length);
for(let i = 0; i < personalities.length; i++) {
    personalityHTML += "<li><a href='"+personalities[i]['url']+"'>"+personalities[i]['label']+"</a></li>";
}
personalityHTML += "</ul>";

const personalityContainer = document.querySelector(".personality-container");
personalityContainer.innerHTML = personalityHTML;
