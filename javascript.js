var playing=false;
var action;
var timecounter=60;
var score;
var correctAnswer;
var correctOption;
document.getElementById("startreset").onclick= function(){
if(playing==false)
{score=0;
 document.getElementById("startreset").innerHTML="Reset Game";
 document.getElementById("gameover").style.display = "none";
 document.getElementById("timeremaining").style.display = "block";
 document.getElementById("score").innerHTML = score;
 playing=true;
 questions();
 startcounting();
}
else
 location.reload();
}
function startcounting(){

    action=setInterval(function(){
     document.getElementById("counter").innerHTML = timecounter;
        timecounter-=1;
    if(timecounter==-1)
    {clearInterval(action);
     document.getElementById("gameover").style.display ="block";
     document.getElementById("scorevalue").innerHTML = score; 
     playing=false;
     timecounter=60;
     document.getElementById("timeremaining").style.display = "none";
     document.getElementById("startreset").innerHTML = "Start Game";
    }   
    },500)
    
}
function questions(){
    var x=1+ Math.round(9*Math.random());
    var y=1+ Math.round(9*Math.random());
    correctAnswer=x*y;
    document.getElementById("display").innerHTML= x + "*" +y;
    correctOption = 1 + Math.round(3*Math.random());
    document.getElementById("box" + correctOption).innerHTML = correctAnswer;
    for(i=1;i<5;i++)
    { var wronganswer=(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()))
        if(i!=correctOption)
        { if(wronganswer==correctAnswer)
            wronganswer=wronganswer+1;
            document.getElementById("box"+i).innerHTML=wronganswer;

        }
    }
    
}

for(i=1;i<5;i++)
{document.getElementById("box"+i).onclick = 
 function(){
     if(playing==true)
     { if(this.innerHTML==correctAnswer)
        { score++;
          document.getElementById("score").innerHTML = score;
          document.getElementById("correct").style.display="block";
          setTimeout(function(){
          document.getElementById("correct").style.display="none";
          },1000);
          questions();
        }
        else
        {document.getElementById("wrong").style.display="block";
         setTimeout(function(){
             document.getElementById("wrong").style.display="none";
         },1000)
        }

     }
 }
}
$(function(){
    $("*").css("font-size",'30px');

});
