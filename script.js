
// document.getElementsById('nav-bar').style.color = "red";
let answer = 0;
let country = ["country", "India", "USA", "United Kingdom", "Australia", 
"Canada", "Germany", "France", "Japan", "China", "Pakisthan", "South Africa",
 "South Korea", "Italy", "Israel", "Bangladesh", "Brazil", "Denmark", "Egypt",
"Finland", "New Zealand", "Norway", "Spain", "Sri Lanka", "Switzerland", "UAE"];

let correctScore =0;
let incorrectScore = 0;
// variables for 4 option containers
let option1 = document.getElementById(`opt1`);
let option2 = document.getElementById(`opt2`);
let option3 = document.getElementById(`opt3`);
let option4 = document.getElementById(`opt4`);

function showScore(x){
    if(x) {
        correctScore++;
    }else{
        incorrectScore++;
    }
    document.getElementById("correct-score").innerHTML = correctScore;
    document.getElementById("incorrect-score").innerHTML = incorrectScore;
}
// showScore(false);

function randomNum(){
    return Math.floor((Math.random() * 25) + 1);
}

function newq(){
    // document.getElementById('new-flag').style.color = "red";
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
