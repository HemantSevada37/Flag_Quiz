
// document.getElementsById('nav-bar').style.color = "red";
let answer = 0;
let country = ["country", "India", "USA", "United Kingdom", "Australia", 
"Canada", "Germany", "France", "Japan", "China", "Pakisthan", "South Africa",
 "South Korea", "Italy", "Israel", "Bangladesh", "Brazil", "Denmark", "Egypt",
"Finland", "New Zealand", "Norway", "Spain", "Sri Lanka", "Switzerland", "UAE"];

let correctScore =0;
let incorrectScore = 0;
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

    document.getElementById('submit-button').disabled = false;
    document.getElementById(`opt1`).checked = false;
    document.getElementById(`opt2`).checked = false;
    document.getElementById(`opt3`).checked = false;
    document.getElementById(`opt4`).checked = false;

    document.getElementsByClassName("option-item")[0]
    .style.backgroundColor = "#C5C5C5";
    document.getElementsByClassName("option-item")[1]
    .style.backgroundColor = "#C5C5C5";
    document.getElementsByClassName("option-item")[2]
    .style.backgroundColor = "#C5C5C5";
    document.getElementsByClassName("option-item")[3]
    .style.backgroundColor = "#C5C5C5";
}

function result(){
    // document.getElementById(`new-flag`).style.color = "blue";
    
    if(!(document.getElementById(`opt1`).checked || 
        document.getElementById(`opt2`).checked || 
        document.getElementById(`opt3`).checked || 
        document.getElementById(`opt4`).checked)){
            alert("Please choose one option!");
            return;
    }

    if(document.getElementById(`opt1`).checked){
        document.getElementById(`opt1`).parentNode
        .style.backgroundColor = "#fc3c3c";
    }
    if(document.getElementById(`opt2`).checked){
        document.getElementById(`opt2`).parentNode
        .style.backgroundColor = "#fc3c3c";
    }
    if(document.getElementById(`opt3`).checked){
        document.getElementById(`opt3`).parentNode
        .style.backgroundColor = "#fc3c3c";
    }
    if(document.getElementById(`opt4`).checked){
        document.getElementById(`opt4`).parentNode
        .style.backgroundColor = "#fc3c3c";
    }

    document.getElementById(`opt${answer}`).parentNode
        .style.backgroundColor = "#61bd4f";

    showScore(document.getElementById(`opt${answer}`).checked);

    document.getElementById('submit-button').disabled = true;
    
    document.getElementById(`opt1`).checked = false;
    document.getElementById(`opt2`).checked = false;
    document.getElementById(`opt3`).checked = false;
    document.getElementById(`opt4`).checked = false;
}

window.onload = newq();
