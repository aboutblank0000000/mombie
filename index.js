fetch('https://api.mombiestreet.com/api/v2/products/search?keyword=%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3')
    .then(response => response.json())
    .then(data => console.log(data));


function Toggle1(){
    var btnvar1 = document.getElementById('heart1');
    if (btnvar1.className == "fas fa-heart") {
        btnvar1.className = "far fa-heart"
    }
    else{
        btnvar1.className = "fas fa-heart"
    }
}

function Toggle2(){
    var btnvar2 = document.getElementById('heart2');
    if (btnvar2.className == "fas fa-heart") {
        btnvar2.className = "far fa-heart"
    }
    else{
        btnvar2.className = "fas fa-heart"
    }
}