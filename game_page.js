player_name1=localStorage.getItem("Player_1");
player_name2=localStorage.getItem("Player_2");
console.log(player_name2);
player_score1=0;
player_score2=0;
document.getElementById("player_1").innerHTML=player_name1+" : ";
document.getElementById("player_2").innerHTML=player_name2+" : ";
document.getElementById("player1Score").innerHTML=player_score1;
document.getElementById("player2Score").innerHTML=player_score2;
document.getElementById("quest").innerHTML="Question Turn - "+player_name1;
document.getElementById("ans").innerHTML="Answer Turn - "+player_name2;

function send(){
    Number1=document.getElementById("n1").value;
    Number2=document.getElementById("n2").value;
    actual_answer=parseInt(Number1) * parseInt(Number2);
    
    quetion_word="<h4>"+Number1+" x "+Number2+"</h4> <br>";
    input_box="Answer: <input type='text' id='answerInput' placeholder='Type Your Answer'>";
    check_button="<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>";
    var row= quetion_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}
question_turn="player1";
answer_turn="player2";

function check(){
    get_ans=document.getElementById("answerInput").value;
    console.log(get_ans)
   if(get_ans==actual_answer){
       if(answer_turn=="player1"){
    player_score1=player_score1+1;
    document.getElementById("player1Score").innerHTML=player_score1;
       }
       else{
        player_score2=player_score2+1;
        document.getElementById("player2Score").innerHTML=player_score2;
       }       
   }
   if (question_turn=="player1"){
       question_turn="player2";
       document.getElementById("player_Question").innerHTML="Question Turn - "+player_name2;
   }
   else if (question_turn=="player2"){
    question_turn="player1";
    document.getElementById("player_Question").innerHTML="Question Turn - "+player_name1;
   }
   if (answer_turn=="player1"){
    answer_turn="player2";
    document.getElementById("player_Answer").innerHTML="Answer Turn - "+player_name2;
}
else if (answer_turn=="player2"){
 answer_turn="player1";
 document.getElementById("player_Answer").innerHTML="Answer Turn - "+player_name1;
}
document.getElementById("output").innerHTML="";
}