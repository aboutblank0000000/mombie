fetch('https://api.mombiestreet.com/api/v2/products/search?keyword=%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3')
    .then(response => response.json())
    .then(data => console.log(data));


function Toggle1(){
    var btn = document.getElementById('heart1');
    if (btn.className == "fas fa-heart") {
        btn.className = "far fa-heart"
    }
    else{
        btn.className = "fas fa-heart"
    }
}

function Toggle2(){
    var btn = document.getElementById('heart2');
    if (btn.className == "fas fa-heart") {
        btn.className = "far fa-heart"
    }
    else{
        btn.className = "fas fa-heart"
    }
}

function Toggle3(){
    var btn = document.getElementById('heart3');
    if (btn.className == "fas fa-heart") {
        btn.className = "far fa-heart"
    }
    else{
        btn.className = "fas fa-heart"
    }
}

function Toggle4(){
    var btn = document.getElementById('heart4');
    if (btn.className == "fas fa-heart") {
        btn.className = "far fa-heart"
    }
    else{
        btn.className = "fas fa-heart"
    }
}

function Toggle5(){
    var btn = document.getElementById('heart5');
    if (btn.className == "fas fa-heart") {
        btn.className = "far fa-heart"
    }
    else{
        btn.className = "fas fa-heart"
    }
}

function Toggle6(){
    var btn = document.getElementById('heart6');
    if (btn.className == "fas fa-heart") {
        btn.className = "far fa-heart"
    }
    else{
        btn.className = "fas fa-heart"
    }
}

function Toggle7(){
    var btn = document.getElementById('heart7');
    if (btn.className == "fas fa-heart") {
        btn.className = "far fa-heart"
    }
    else{
        btn.className = "fas fa-heart"
    }
}

function Toggle8(){
    var btn = document.getElementById('heart8');
    if (btn.className == "fas fa-heart") {
        btn.className = "far fa-heart"
    }
    else{
        btn.className = "fas fa-heart"
    }
}

function Toggle9(){
    var btn = document.getElementById('heart9');
    if (btn.className == "fas fa-heart") {
        btn.className = "far fa-heart"
    }
    else{
        btn.className = "fas fa-heart"
    }
}

function Toggle10(){
    var btn = document.getElementById('heart10');
    if (btn.className == "fas fa-heart") {
        btn.className = "far fa-heart"
    }
    else{
        btn.className = "fas fa-heart"
    }
}

function Toggle11(){
    var btn = document.getElementById('heart11');
    if (btn.className == "fas fa-heart") {
        btn.className = "far fa-heart"
    }
    else{
        btn.className = "fas fa-heart"
    }
}

function Toggle12(){
    var btn = document.getElementById('heart12');
    if (btn.className == "fas fa-heart") {
        btn.className = "far fa-heart"
    }
    else{
        btn.className = "fas fa-heart"
    }
}

function Toggle13(){
    var btn = document.getElementById('heart13');
    if (btn.className == "fas fa-heart") {
        btn.className = "far fa-heart"
    }
    else{
        btn.className = "fas fa-heart"
    }
}

function Toggle14(){
    var btn = document.getElementById('heart14');
    if (btn.className == "fas fa-heart") {
        btn.className = "far fa-heart"
    }
    else{
        btn.className = "fas fa-heart"
    }
}

function Toggle15(){
    var btn = document.getElementById('heart15');
    if (btn.className == "fas fa-heart") {
        btn.className = "far fa-heart"
    }
    else{
        btn.className = "fas fa-heart"
    }
}

let currentItem = 3;
function loadmore(){
    let boxes = [...document.querySelectorAll('.box')];
    for (var i = currentItem; i < currentItem + 3; i++){
        boxes[i].style.display = 'flex';
    }
    currentItem +=3;

    if(currentItem >= boxes.length){
        document.getElementById('cm').style.display = 'none'
    }
}

liff.init(function (data) {});
function nq(){
    liff.sendMessages([
		{
		  type: 'text',
		  text: 'ตอบคำถามถัดไป'
		}
	  ])
    liff.closeWindow();
}
