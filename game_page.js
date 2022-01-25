player_name1=localStorage.getItem("Player_1");
player_name2=localStorage.getItem("Player_2");
player_score1=0;
player_score2=0;
document.getElementById("player_1").innerHTML=player_name1+" : ";
document.getElementById("player_2").innerHTML=player_name2+" : ";
document.getElementById("player1Score").innerHTML=player_score1;
document.getElementById("player2Score").innerHTML=player_score2;
document.getElementById("quest").innerHTML="Question Turn - "+player_name1;
document.getElementById("sns").innerHTML="Answer Turn - "+player_name2;

function send(){
    Number1=document.getElementById("n1").value;
    Number2=document.getElementById("n2").value;
    actual_answer=parseInt(Number1) * parseInt(Number2);
    
    quetion_word="<h4"+Number1+" x "+Number2+"</h4> <br>";
    input_box="Answer: <input type='text' id='answerInput' placeholder='Type Your Answer'>";
    check_button="<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>";
    var row= quetion_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}