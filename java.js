
var player1 = prompt("Enter player1 name ");
var player2 = prompt("Enter player2 name ");
//myfunc();
function myfunc(){

document.getElementById("1").innerHTML = player1;
document.getElementById("2").innerHTML = player2;

var random_1 = Math.floor(Math.random() * 6)+1;

var random_2 = Math.floor(Math.random()*6)+1;
var string_1 = "dice-"+random_1+".jpg";
var string_2 = "dice-"+random_2+".jpg";
document.querySelectorAll("img")[0].setAttribute("src",string_1);
document.querySelectorAll("img")[1].setAttribute("src",string_2);
if(string_1==string_2){
  document.querySelector("h1").innerHTML = "Draw";
}else
if(string_1>string_2){
  document.querySelector("h1").innerHTML =player1 + " Wins";
}else
if(string_1<string_2){
  document.querySelector("h1").innerHTML = player2 + " Wins";
}
}
