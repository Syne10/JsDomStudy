let bank  = prompt("сколько у вас денег?");
let apple = prompt("сколько яблок вы собираетесь купить?");
let bread = prompt("сколько хлеба вы собираетесь купить?");
let applePrice = prompt("цена за одно яблоко?");
let breadPrice = prompt("цена за одну булку хлеба?");

let sum = (apple*applePrice) + (bread*breadPrice);

if(bank>sum){
  alert('true');
} else {
  alert('false');
}