let board = ["","","","","","","","",""];
let current = "X";
let gameOver = false;
let cells = document.getElementsByClassName("cell");
let statusText = document.getElementById("status");
function makeMove(i){
 if(board[i] !== "" || gameOver) return;
 board[i] = current;
 cells[i].innerText = current;
 checkWin();
 if(!gameOver){
   current = current === "X" ? "O" : "X";
   statusText.innerText = current + " ki baari";
 }
}
function checkWin(){
 let win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
 for(let c of win){
  if(board[c[0]] && board[c[0]] === board[c[1]] && board[c[0]] === board[c[2]]){
   statusText.innerText = board[c[0]] + " Jeet Gaya!";
   gameOver = true;
   return;
  }
 }
 if(!board.includes("")){
  statusText.innerText = "Draw ho gaya!";
  gameOver = true;
 }
}
function resetGame(){
 board = ["","","","","","","","",""];
 current = "X";
 gameOver = false;
 statusText.innerText = "X ki baari";
 for(let cell of cells) cell.innerText = "";
}