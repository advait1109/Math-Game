function addUser(){
player1=document.getElementById("player1Name").value;
player2=document.getElementById("player2Name").value;
localStorage.setItem("Player_1", player1);
localStorage.setItem("Player_2", player2);
window.location="game_page.html";
}
