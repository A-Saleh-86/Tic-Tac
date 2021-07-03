var one=document.getElementById("one");
var two=document.getElementById("two");
var three=document.getElementById("three");
var four=document.getElementById("four");
var five=document.getElementById("five");
var six=document.getElementById("six");
var seven=document.getElementById("seven");
var eight=document.getElementById("eight");
var nine=document.getElementById("nine");
var p1=document.getElementById("p1");
var p2=document.getElementById("p2");
var s1=document.getElementById("s1");
var s2=document.getElementById("s2");
var y=document.getElementById("y");
var winName=document.getElementById("winName");
var sGame=document.getElementById("sGame");
var eGame=document.getElementById("eGame");
var aGame=document.getElementById("aGame");
var turn = null;
var player1Symbol = null;
var player2Symbol = null;
var gameOn = false;
var p1Name=document.getElementById("p1Name");
var p2Name=document.getElementById("p2Name");
var p1Image=document.getElementById("p1Image");
var p2Image=document.getElementById("p2Image");
var p1N=document.getElementById("p1N");
var p2N=document.getElementById("p2N");
var p1S=document.getElementById("p1S");
var p2S=document.getElementById("p2S");
p1S.value=0;
p2S.value=0;


function checkValue(){
	/*Check For Same symbol*/
	if(p1.value===p2.value)
		{alert("Choose another Symbol");
	p1.value=y.value;
	p2.value=y.value;
	}
}

	/*Reseet grid and the value of the box*/

function resetGrid(){
	one.value=one.innerHTML="";
	two.value=two.innerHTML="";
	three.value= three.innerHTML="";
	four.value= four.innerHTML="";
	five.value= five.innerHTML="";
	six.value= six.innerHTML="";
	seven.value= seven.innerHTML="";
	eight.value= eight.innerHTML="";
	nine.value= nine.innerHTML="";
	
}

/*lets play button*/
function startGame(){
	
		//validation if game is on
  if(gameOn == true) //game is already started
  	return;

  //validation of choose name
  if(p1Name.value=='' || p2Name.value=='' || p1Name.value==p2Name.value){
  	alert("Enter your Name");
  	p1.value=' ';
  	p2.value=' ';
  	p1Name.value='';
  	p2Name.value='';
  	return;
  }
   if((p1.value == " " || p2.value == " ") ||
     (p1.value == null || p2.value == null) )
		 {	
   		 alert("you must choose symbol");
   		return;
  	 }
	//validation on selection of symbols
  //if both not selected, return error ask player to choose you symbol
   
  	player1Symbol = p1.value;
    player2Symbol = p2.value;
  	turn = 'p1';
  	//empty all boxes
    gameOn = true;
		resetGrid();
		p1.disabled=true;
		p2.disabled=true;
		sGame.disabled=true;
		p1Name.disabled=true;
		p2Name.disabled=true;
		p1N.innerHTML=p1Name.value.toUpperCase();
		p2N.innerHTML=p2Name.value.toUpperCase();
		aGame.disabled=false;


}

/*Display The Winners*/

function winShow(){
	gameOn=false;
	turn=null;
	player1Symbol=null;
	player2Symbol=null;
	p1.disabled=true;
	p2.disabled=true;
	sGame.disabled=true;
	p1Name.disabled=true;
	p2Name.disabled=true;
	aGame.disabled=false;

}

//A nother Round Button:

function anotherRound(){
	player1Symbol = p1.value;
  player2Symbol = p2.value;
  turn = 'p1';
  gameOn = true;
	resetGrid();
	p1.disabled=true;
	p2.disabled=true;
	sGame.disabled=true;
	p1Name.disabled=true;
	p2Name.disabled=true;
	p1N.innerHTML=p1Name.value.toUpperCase();
	p2N.innerHTML=p2Name.value.toUpperCase();
	winName.innerHTML='';
	
}

//Start a New Game

function endGame(){
	p1.disabled=false;
	p2.disabled=false;
	sGame.disabled=false;
	resetGrid();
	gameOn=false;
	p1.value=y.value;
	p2.value=y.value;
	turn=null;
	player1Symbol=null;
	player2Symbol=null;
	p1Name.value='';
	p2Name.value='';
	winName.innerHTML='';
	p1Name.disabled=false;
	p2Name.disabled=false;
	p1N.innerHTML='Player1';
	p2N.innerHTML='Player2';
	p1S.value='';
	p1S.innerHTML='';
	p2S.value='';
	p2S.innerHTML='';
	aGame.disabled=true;
}

/*Conditions Of Wins*/

function isWin(){
	if(one.value==two.value &&
		two.value==three.value &&
		one.value !=""&&
		two.value !="" &&
		three.value !=""){
		return true;
	}else if(four.value==five.value &&
		five.value==six.value &&
		four.value !=""&&
		five.value !="" &&
		six.value !=""){
		return true;
	}else if(seven.value==eight.value &&
		eight.value==nine.value &&
		seven.value !=""&&
		eight.value !="" &&
		nine.value !=""){
		return true;
	}else if(one.value==four.value &&
		four.value==seven.value &&
		one.value !=""&&
		four.value !="" &&
		seven.value !=""){
		return true;
	}else if(two.value==five.value &&
		five.value==eight.value &&
		two.value !=""&&
		five.value !="" &&
		eight.value !=""){
		return true;
	}else if(three.value==six.value &&
		six.value==nine.value &&
		three.value !=""&&
		nine.value !="" &&
		six.value !=""){
		return true;
	}else if(one.value==five.value &&
		five.value==nine.value &&
		one.value !=""&&
		five.value !="" &&
		nine.value !=""){
		return true;
	}else if(three.value==five.value &&
		five.value==seven.value &&
		three.value !=""&&
		five.value !="" &&
		seven.value !=""){
		return true;
	}else{
		return false;
	}
}




 function playTurn(a/*box object*/,b /*turn*/){
 	
  	if(gameOn == false){
    	return;
    }
    if(a.innerHTML != ''){
    	alert("you must play in an empty box");
      return;
      
    }
    
    var symbol;
    var pName;
    var pImage;
    var count;
    
    if(b == 'p1'){
    	symbol = player1Symbol;
    	count=player1Symbol;	
    	pImage=p1Image.value;
    	pName=p1Name.value;
      turn = 'p2';
      a.value=symbol;
     }
    else if (b == 'p2'){
    	symbol = player2Symbol;
    	count=player2Symbol;
    	pImage=p2Image.value;
    	pName=p2Name.value;
      turn = 'p1';
      a.value=symbol;
    }
    
  a.innerHTML = pImage;
  pName=pName.toUpperCase()

 		//winner:

    if(isWin(true)){

    	 //count the score:

    	if(count==player1Symbol){
    		p1S.value ++;
    		p1S.innerHTML=p1S.value;
  		}
   		 if(count==player2Symbol){
    		p2S.value ++;
    		p2S.innerHTML=p2S.value;
   	 }
    	winShow();
    	winName.innerHTML='Congratulation  '+
    	 "<span style='color:red;'>"+
    	 pName+"</span>";
    }

    //non winner:

   	else if(
    	one.value !="" &&
    	two.value !="" &&
    	three.value !="" &&
    	four.value !="" &&
    	five.value !="" &&
    	six.value !="" &&
    	seven.value !="" &&
    	eight.value !="" &&
    	nine.value !="" 
    	){
    	
    	winName.innerHTML="<span style='color:red;'>T3adol</span>";
    	
    }
  }
  


