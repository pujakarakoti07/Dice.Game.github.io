function player(){

    var n=Math.floor(Math.random()*6)+1;
    let music=new Audio("dice.mp3");
    music.play();
    document.querySelector("img.player1").setAttribute("src","dice-six-faces-"+n+".png");            
    var x=Math.floor(Math.random()*6)+1;
    document.querySelector("img.player2").setAttribute("src","dice-six-faces-"+x+".png");
    if(n<x){
        document.querySelector(".head").innerHTML="PLAYER2 WINS!"
    }
    else if(n>x){
        document.querySelector(".head").innerHTML="PLAYER1 WINS!"
    }
    else{
        document.querySelector(".head").innerHTML="DRAW!"
    }
}      
