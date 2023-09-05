 function player1(){
            var n=Math.floor(Math.random()*6)+1;
            document.querySelector("img.player1").setAttribute("src","dice-six-faces-"+n+".png");            
            var x=Math.floor(Math.random()*6)+1;
            document.querySelector("img.player2").setAttribute("src","dice-six-faces-"+x+".png");
            if(n<x){
                document.querySelector("h1").innerHTML="PLAYER2 WINS!"
                
            }
            else if(n>x){
                document.querySelector("h1").innerHTML="PLAYER1 WINS!"
            }
            else{
                document.querySelector("h1").innerHTML="DRAW!"
            }
        }      