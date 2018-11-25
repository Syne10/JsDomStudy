let num = prompt("Введите число");

if(num>=0){
  console.log("Вы ввели: " + num);
} else {
  console.log("Ваше число: " + num + ". Противоположное ему: " + (num*=-1));
}