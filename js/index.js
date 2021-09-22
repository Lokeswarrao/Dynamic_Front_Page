var prev = document.getElementById("prev");
var next = document.getElementById("next");
var thumbnail = document.getElementsByClassName("thumbnail");
var hero = document.getElementsById("hero");


var backgroundImg = new Array(
    "Image/bg1.png",
    "Image/bg2.png",
    "Image/bg3.png",
    "Image/bg4.png",
    "Image/bg5.png",
    "Image/bg6.png",
);

let i=0;
next.onclick = function(){
    
    if(i<4){
        hero.style.backgroundImg = 'url("'+backgroundImg[i+1]+'")';
    i++;
    }

    
}