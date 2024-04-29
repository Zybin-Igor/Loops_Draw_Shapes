"user strict";
// Первая часть изучаем циклы.
//for
//while
//for(старт; работаем пока верно; счетчик){
//}
// for (let i = 1; i < 10; i++) {
// 		if (i === 5) 	{
// 			console.log("five");
// 			continue;
// 		}
// 		console.log(i);
				
// 	};
//заменяем цифру 5 на слово и продолжаем выводить цифры дальше.
// выводим цифры пока i = 10. Как только i = 10 цикл прекращается.
// после прекращения цикла программа начинает работать дальше (ниже цикла)

//В приведенном ниже примере мы пытаемся изменить цвет блоков с помощью цикла причем, блоки выступают в роли массива
// let div = document.querySelectorAll(".one");
// console.log(div);
//div.style.background = 'red';
// for (let i = 0; i < div.length; i = i + 1){
// console.log(div[i]);
// div[i].style.background = "red";
// div[i].onclick = two;
// }
// function two(){
// 	console.log("work!!!");
// }
// let b = document.getElementsByClassName("one");
// console.log(b);// это выражение аналогично выражению в 20 строчке
//Теперь можно попробоавть изменить наши блоки как в предыдущем примере и добавить к ним border c помощью цикла
// let c = document.getElementsByTagName("div"); //в этом случае мы обращаемся ко всем div, а не к классу (one) как в примере выше
// console.log(c);
// for (let i = 0; i < b.length; i++){
// 	b[i].style.border = "3px solid black";
// }
document.querySelector("button").onclick = () => {
	let r = document.querySelectorAll('input[type="radio"]');
	console.log(r);
	for (let i = 0; i < r.length; i++) {
		if (r[i].checked) {
			console.log(r[i].value);
		}
	}
}
let out = "";
for (let i = 0; i < 10; i++) {
	if (i === 5) {
		console.log("five");
		out += i + " ";
		continue;
	} if (i === 8) {
	break;
	}
	console.log(i);
}