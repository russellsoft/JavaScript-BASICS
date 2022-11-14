// const p = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve(10 + 20) // Конечный результат работы Промиса
// 	}, 1000);
// }).then(value => { // Метод then используется чтобы сказать, что делать после работы Promise
// 	console.log(value)
// }).catch(e => { // Ловит ошибки и показывает то что мы хотим показать 
// 	console.log('Error', e)
// })


// Создадим программу, которая умножает result на 2 после каждого then
new Promise(function(resolve, reject) {

	setTimeout(() => resolve(1), 1000);
 
 }).then(function(result) {
 
	alert(result); // 1
 
	return new Promise((resolve, reject) => { // (*)
	  setTimeout(() => resolve(result * 2), 1000);
	});
 
 }).then(function(result) { // (**)
 
	alert(result); // 2
 
	return new Promise((resolve, reject) => {
	  setTimeout(() => resolve(result * 2), 1000);
	});
 
 }).then(function(result) {
 
	alert(result); // 4
 
 });