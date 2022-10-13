
// document.getElementsById('nav-bar').style.color = "red";
let answer = 0;
let randomNumber = 25;
let country = ["country", "India", "USA", "United Kingdom", "Australia", 
"Canada", "Germany", "France", "Japan", "China", "Pakisthan", "South Africa",
 "South Korea", "Italy", "Israel", "Bangladesh", "Brazil", "Denmark", "Egypt",
"Finland", "New Zealand", "Norway", "Spain", "Sri Lanka", "Switzerland", "UAE",
"Afghanistan", "Belgium","Bhutan", "Greece", "HongKong", "Indonesia", "Iran",
"Iraq", "Ireland", "Maldives", "Mexico", "Myanmar", "Poland", "Portugal",
"Russia", "Saudi Arabia", "Singapore", "Taiwan", "Turkey", "Argentina", "Austria",
"Chile", "Czech Republic", "Fiji", "Ghana", "Iceland", "Kuwait", 'Malaysia',
"Mauritius", "Netherlands", "North Korea", "Oman", "Philippines", "Qatar",
"Somalia", "Syria", "Sweden", "Thailand", "Ukraine", "Vatican City", "Vietnam"];
// console.log(country.length);
// console.log(country[65], country[25], country[50]);

let correctScore =0;
let incorrectScore = 0;
// variables for 4 option containers
let option1 = document.getElementById(`opt1`);
let option2 = document.getElementById(`opt2`);
let option3 = document.getElementById(`opt3`);
let option4 = document.getElementById(`opt4`);
let audio = document.querySelectorAll('audio');
let level_easy = document.getElementById('level').childNodes[1];
let level_medium = document.getElementById('level').childNodes[4];
let level_hard = document.getElementById('level').childNodes[7];

function selectLevel(level){
    if(level == "easy"){
        // console.log("clicked");
        // console.log(document.getElementById('level').childNodes);
        level_easy.classList.add("selected");
        level_medium.classList.remove("selected");
        level_hard.classList.remove("selected");
        randomNumber = 25;
    }else if(level == "medium"){
        level_easy.classList.remove("selected");
        level_medium.classList.add("selected");
        level_hard.classList.remove("selected");
        randomNumber = 45;
    }else if(level == "hard"){
        level_easy.classList.remove("selected");
        level_medium.classList.remove("selected");
        level_hard.classList.add("selected");
        randomNumber = 66;
    }
}

function showScore(x){
    if(x) {
        correctScore++;
        audio[0].play();
    }else{
        incorrectScore++;
        audio[1].play();
    }
    document.getElementById("correct-score").innerHTML = correctScore;
    document.getElementById("incorrect-score").innerHTML = incorrectScore;
}
// showScore(false);

function randomNum(){
    return Math.floor((Math.random() * randomNumber) + 1);
}

function newq(){
    // document.getElementById('new-flag').style.color = "red";
    audio[2].play();
    let options = [];
    let optionTemp=0;
    while(options.length < 4){
        do{
            optionTemp = randomNum();
        }while(options.includes(optionTemp))
        options.push(optionTemp);
    }

    answer = options[0];
    options.sort((a,b) => (0.5 - Math.random()));

    document.getElementById('image').src = `flags/${answer}.png`;
    document.getElementById('option1').innerHTML = `${country[options[0]]}`;
    document.getElementById('option2').innerHTML = `${country[options[1]]}`;
    document.getElementById('option3').innerHTML = `${country[options[2]]}`;
    document.getElementById('option4').innerHTML = `${country[options[3]]}`;
    answer = options.indexOf(answer) +1;

    option1.checked = false;
    option2.checked = false;
    option3.checked = false;
    option4.checked = false;

    option1.parentNode.classList.remove("op-red", "op-green");
    option2.parentNode.classList.remove("op-red", "op-green");
    option3.parentNode.classList.remove("op-red", "op-green");
    option4.parentNode.classList.remove("op-red", "op-green");
    option1.parentNode.classList.add("op-gray");
    option2.parentNode.classList.add("op-gray");
    option3.parentNode.classList.add("op-gray");
    option4.parentNode.classList.add("op-gray");

    document.getElementById("new-flag").style.display = "none";
    document.getElementById("submit-button").style.display = "inline-block";
}

function result(){
    // document.getElementById(`new-flag`).style.color = "blue";
    
    if(!(option1.checked || option2.checked || 
        option3.checked || option4.checked)){
            alert("Please choose one option!");
            return;
    }

    if(option1.checked){
        option1.parentNode.classList.add("op-red");
        option1.parentNode.classList.remove("op-gray");
    }
    if(option2.checked){
        option2.parentNode.classList.add("op-red");
        option2.parentNode.classList.remove("op-gray");
    }
    if(option3.checked){
        option3.parentNode.classList.add("op-red");
        option3.parentNode.classList.remove("op-gray");
    }
    if(option4.checked){
        option4.parentNode.classList.add("op-red");
        option4.parentNode.classList.remove("op-gray");
    }

    document.getElementById(`opt${answer}`).parentNode.classList.add("op-green");
    document.getElementById(`opt${answer}`).parentNode.classList.remove("op-gray");

    showScore(document.getElementById(`opt${answer}`).checked);

    document.getElementById("submit-button").style.display = "none";
    document.getElementById("new-flag").style.display = "inline-block";
}

window.onload = newq();
window.onload = selectLevel("easy");
