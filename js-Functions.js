// // - - - - - Functions - - - - - 

// // Function Declaration

// function greet(name) {
// 	console.log('Hello - ' + name)
// }

// // Function Expression (when function is in the variable)

// const greet2 = function greet2(name) {
// 	console.log('Hi - ' + name)
// }

// greet('Ruslan')
// greet2('Maki')

//  - - - - - - -- - Анонимные функции	

// let counter = 0
// setInterval(function () { // Анонимная функция
// 	console.log(++counter)
// }, 1000)

// - - - - - - -- - - Стрелочные функции 

// function greet(name) {
// 	console.log('Hello - ' + name)
// }

// const arrow = (name) => {
// 	console.log('Hello - ' + name)
// }

// arrow('Ruslan')

// const arrow2 = name => console.log('Hello - ' + name) // Same as the last code, if there is only 1 condition u can do without - {} - and if there is only 1 _variable in front of function ( - _function(_variable) - ) u can do it without the ()

// arrow2('Maki') 

// - - - - - - - - - Параметры по умолчанию

//  const summ = (a, b) => a + b
//  console.log(summ(5, 6))

//  function sumAll(...all) { // [...all] - accepts any amount of numbers
// 	let result = 0
// 	for (let num of all) { 
// 		result += num
// 	}
// 	return result
//  }
// console.log(sumAll(1, 2, 3, 4, 5, 6, 7))

// - - - - - - - - Замыкание

// function character(name) {
// 	return function(lastName) {
// 		console.log(`${name} ${lastName}`)
// 	}
// }

// const logLastName = character('Ruslan')

// console.log(logLastName('Makiev'))

// ========= Замыкания и как они работают ==========

// function calcTheNumber(n) {
// 	return function() {
// 		console.log(1000 + n)
// 	}
// }

// ===== Example of such function  ======

// function calcTheNumbers(a, b) {
// 	function multBy(x) {
// 		return x * x
// 	}
// 	console.log(multBy(a) + multBy(b))
// }
// calcTheNumbers(10, 5)


// function outside() {
// 	const x = 5
// 	function inside(x) {
// 		return x * 2
// 	}
// 	return inside
// }
// console.log(outside()(10)) // Выполняется внутренняя функция первой а после внешняя (inside ==> outside ==> global func)


// const calc = calcTheNumber(200) // Здесь переменная calc становится функцией в нашем случае подфункцией calcTheNumber() и мы уже ее можем вызывать также как функцию
// calc() 

// function urlGenerator(domain) {
// 	return function(url) {
// 		return `https://${url}.${domain}`
// 	}
// }
// const domainName = urlGenerator('com') // Мы присваиваем переменной domainName функцию function(url) {} 
// console.log(domainName('google')) // И здесь мы уже показываем как это работает!

