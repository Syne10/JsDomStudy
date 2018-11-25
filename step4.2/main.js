const rock     = 0;
const scissors = 1;
const paper    = 2;

let player   = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
let computer = Math.floor(Math.random() * 3);
let itemArr  = ["камень", "ножницы", "бумага"];

if(player == 0 && computer == 1){
	alert("камень vs ножницы => player win");
} else if(player == 0 && computer == 2){
	alert("камень vs бумаги => computer win");
} else if(player == 1 && computer == 0){
		alert("ножницы vs камень => computer win");
} else if(player == 1 && computer == 2){
	alert("ножницы vs бумаги => player win")
} else if(player == 2 && computer == 0){
	alert("бумага vs камень => player win")
} else if(player == 2 && computer == 1){
	alert("бумага vs ножницы => computer win")
} else {
	alert(itemArr[player] + " vs " + itemArr[computer] + " => ничья")
}