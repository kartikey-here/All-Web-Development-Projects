let qno = document.getElementById('qno');
let qu = document.getElementById('qu');
let o1 = document.getElementById('o1');
let o2 = document.getElementById('o2');
let o3 = document.getElementById('o3');
let o4 = document.getElementById('o4');
let nse = document.getElementById('nextstartend');
quesans = [
    {
        no: 1,
        ques: "What is the name of Our Prime Minister",
        opt: [
            'Narendra Modi',
            'Rahul Gandhi',
            'Smriti Irani',
            'Neena Shankar'
        ],
        corr: 'Narendra Modi'
    },
    {
        no: 2,
        ques: "What comes after 68",
        opt: [
            '7',
            '14',
            '69',
            '61'
        ],
        corr: '69'
    },
    {
        no: 3,
        ques: "What is the capital city of France?",
        opt: [
            'London',
            'Paris',
            'Rome',
            'Berlin'
        ],
        corr: 'Paris'
    },
    {
        no: 4,
        ques: "How many continents are there in the world?",
        opt: [
            '5',
            '6',
            '7',
            '8'
        ],
        corr: '7'
    },
    {
        no: 5,
        ques: "Which planet is known as the 'Red Planet'?",
        opt: [
            'Venus',
            'Mars',
            'Jupiter',
            'Saturn'
        ],
        corr: 'Mars'
    },
    {
        no: 6,
        ques: "What is the largest mammal on Earth?",
        opt: [
            'Elephant',
            'Blue Whale',
            'Giraffe',
            'Polar Bear'
        ],
        corr: 'Blue Whale'
    },
    {
        no: 7,
        ques: "Who is the author of 'Half GirlFriend'?",
        opt: [
            'Chetan Bhagat',
            'J.K. Rowling',
            'Charles Dickens',
            'Sudha Murthy'
        ],
        corr: 'Chetan Bhagat'
    },
    {
        no: 8,
        ques: "What is the largest ocean on Earth?",
        opt: [
            'Atlantic Ocean',
            'Indian Ocean',
            'Southern Ocean',
            'Pacific Ocean'
        ],
        corr: 'Pacific Ocean'
    },
    {
        no: 9,
        ques: "Who painted the Mona Lisa?",
        opt: [
            'Vincent van Gogh',
            'Leonardo da Vinci',
            'Pablo Picasso',
            'Claude Monet'
        ],
        corr: 'Leonardo da Vinci'
    },
    {
        no: 10,
        ques: "What is the currency of Japan?",
        opt: [
            'Yuan',
            'Won',
            'Yen',
            'Ringgit'
        ],
        corr: 'Yen'
    }    
]
let noofques = quesans.length
let quesleft = Array.from({ length: noofques }, (_, index) => index + 1);
let score = []
let scoreno = 0
let nextques = { corr: null }
let selected_answer = 'def'
let wrong = []
function deftransparent() {
    o1.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    o2.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    o3.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    o4.style.backgroundColor = 'rgba(0, 0, 0, 0)';
}
function oo1() {
    deftransparent()
    o1.style.backgroundColor = 'green';
    selected_answer = o1.innerHTML;
}
function oo2() {
    deftransparent()
    o2.style.backgroundColor = 'green';
    selected_answer = o2.innerHTML;
}
function oo3() {
    deftransparent()
    o3.style.backgroundColor = 'green';
    selected_answer = o3.innerHTML;
}
function oo4() {
    deftransparent()
    o4.style.backgroundColor = 'green';
    selected_answer = o4.innerHTML;
}
function checkans() {

    if (xoxo > 1) {
        if (selected_answer === nextques.corr) {
            score.push(1)
            scoreno += 1
        }
        else {
            score.push(0)
            wrong.push([nextques, selected_answer])
        }
    }
    selected_answer = null
}
function fetchquesno() {
    checkans();
    var randomIndex = Math.floor(Math.random() * quesleft.length);
    var quesnumber = quesleft[randomIndex]
    nextques = quesans[quesnumber - 1]
    // console.log(nextques)
    quesleft.splice(randomIndex, 1);
    quesfun(nextques)

}
function quesfun(qq) {
    // console.log(score,wrong)
    var a = qq.ques
    //console.log('ques: ', a)
    qu.innerHTML = a;
    var opt = qq.opt
    var myopt = Array.from({ length: 4 }, (_, index) => index + 1);
    var ran = Math.floor(Math.random() * myopt.length);
    // console.log('opt1: ', opt[myopt[ran] - 1])
    o1.innerHTML = opt[myopt[ran] - 1]                     //opt 1
    myopt.splice(ran, 1);
    ran = Math.floor(Math.random() * myopt.length);
    // console.log('opt2: ', opt[myopt[ran] - 1])
    o2.innerHTML = opt[myopt[ran] - 1]                     //opt 2
    myopt.splice(ran, 1);
    ran = Math.floor(Math.random() * myopt.length);
    // console.log('opt3: ', opt[myopt[ran] - 1])
    o3.innerHTML = opt[myopt[ran] - 1]                     //opt 3
    myopt.splice(ran, 1);
    ran = Math.floor(Math.random() * myopt.length);
    // console.log('opt4: ', opt[myopt[ran] - 1])
    o4.innerHTML = opt[myopt[ran] - 1]                     //opt 4
    myopt.splice(ran, 1);
    quesupdated(true)
}
function quesupdated() {

}
let xoxo = 0
function game_start() {
    if (xoxo > 1 + noofques) {
        location.reload;
    }
    if (selected_answer === null) {
        alert('Please Choose an Option')
    }
    else {
        if (xoxo < noofques) {
            deftransparent();
            qno.innerHTML = 'Q. ' + (xoxo + 1) + '/'+noofques;
            nse.innerHTML = 'Next Question';
            if (xoxo == 9)
                nse.innerHTML = 'End Quiz';
            xoxo += 1
            fetchquesno();
        }
        else {
            checkans();
            nse.innerHTML = 'Reload';
            // qu.innerHTML = 'The ques will be displayed here. All the Best for your quiz ';
            // o1.innerHTML = 'Option a';
            // o2.innerHTML = 'Option b';
            // o3.innerHTML = 'Option c';
            // o4.innerHTML = 'Option d';
            // qno.innerHTML = 'Q. 0/' + noofques;
            alert('Your Score is: '+scoreno + '/' + noofques)
            // for (var i = 0; i < wrong.length; i++) {
            //     var tt = 'Ques: ' + (wrong[i][0]).ques + '\n' + (wrong[i][0]).opt + '\n' + 'Your Answer: ' + wrong[i][1] + '\nCorrect Answer: ' + (wrong[i][0]).corr;
            //     alert(tt);
            // }

        }
    }

    console.log(score, wrong)
}