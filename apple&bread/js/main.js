let budget     = prompt("сколько у вас денег?");
let apple 	   = prompt("сколько яблок вы собираетесь купить?");
let bread      = prompt("сколько хлеба вы собираетесь купить?");
let applePrice = prompt("цена за одно яблоко?");
let breadPrice = prompt("цена за одну булку хлеба?");

let calc = (budget, apple, bread, applePrice, breadPrice) => {
	let sum = (apple*applePrice) + (bread*breadPrice);
	return (budget > sum) ? console.log("Вам хватает денег на покупку!") : console.log("Вам не хватит денег!");
}

(budget != "" && apple != "" && bread != "" && applePrice != "" && breadPrice != "") ? calc() : console.log("Вы что-то упустили!");
