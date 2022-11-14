// ДЛЯ ПОДКЛЮЧЕНИЯ В <head> HTML введи код <script type="text/javascript" src="js-guide_1.js"></script>

//  - - - - - - - - - Variables - - - - - - - - - - - - - - - - 

// const firstName = 'Ruslan' // Неизменяемая переменная, желательна в использовании
// const age = 19
// let _variable = 'smth' // Изменяемая переменная, желательна в использовании
// var _variable = 'smth' // Изменяемая переменная, НЕжелательна в использовании 
// - - - - - - - - - - - - - - - - - - - - //
// 100 // Number
// 'text' // String
// True, False // Boolean
// - - - - - - - - - - - - - - - - - - - - //
// Mutation 
// const lastName = prompt('Type your last name: ') - py(input)
// alert(firstName + ' ' + lastName) - py(print) [browser start screen alert]
// const a = 10
// console.log(+a) // +_variable команда + преобразовывает строку в число str => integer

//  - - - - - - - - - Conditions (trs. Условия) - - - - - - - - -

//const ifReady = false // True === Boolean

/*

if (ifReady === false) {
	console.log('Course is ready!')
} else {
	console.log('Course is not ready!')
}

Next condition(условие) is the same as this one

*/ 

// ifReady ? console.log('Course is ready!') : console.log('Course is not ready!')  -  These are the same ones, the second condition(условие) is used for small condition(условие) types. 

//  - - - - - - FUNCTIONS - - - - - - - -

// Example (1)
// function calculateAge(year) {
//  	return 2022 - year
// }

// const myAge = calculateAge(2002)
// console.log(myAge)

// console.log(calculateAge(2002)) // The same as last code

// Example (2)

// function logNameAge(name, year) {
// 	const age = calculateAge(year)

// 	if (age > 0) {
// 		console.log('Человек по имени ' + name + ' имеет возраст ' + age + ' лет')
// 	} else {
// 		console.log('Вообще то это уже будущее!')
// 	}
// }

// logNameAge('Руслан', 2022)

// - - - - - - - - ARRAYS (МАССИВЫ) - - - - - - - -

// Исчисление массивов начинается с 0! 

/*

const countries = ['Russia', 'America', 'Canada'] // с помощью [] (квадратных скобок) создается массив, также есть способ const _variable new Array('_smth')
console.log(countries.length) 
countries[countries.length] = 'Китай'
console.log(countries)
console.log(countries[0])
console.log(countries[2])

*/

// - - - - - - - - - - ЦИКЛЫ - - - - - - - - - - - 

// const cars = ['Volkswagen', 'Audi', 'Lada']

// for (let i = 0; i < cars.length; i++ /* функция ++ плюсует значение переменной i на 1 после каждого цикла */) {
// 	const car = cars[i]
// 	console.log(car)
// }

// for (let car of cars) { // The same loop as the last one 
// 	console.log(car)
// }

// ===== do  {} while =====
// let i = 0
// do {
// 	i += 1
// 	console.log(i)
// }while (i < 5)

// ====== while (condition) {} ======
// let i = 0
// while (i > 5) {
// 	i += 1
// 	console.log(i)
// }

// - - - - - - - - - - ОБЪЕКТЫ - - - - - - - - - - -  


const person = { // that's how object is created: _variable { (code) }
	name: {
		first: 'Ruslan',
		second: 'Maki' 
	},
	lastName: 'Makiev',
	year: 2002,
	languages: ['Ru', 'En'], // Array
	hasWife:	false, // Boolean
	hello: function () { // Function
		console.log('Hello world!')
	}
}
// person.name.first // Точечный способ вывода 
// person['name']['first'] // Скобочный способ вывода
// console.log(person.firstName) // 
// console.log(person['lastName']) // The same code as written before
// person.hello()
// person.isProgrammer = true
// person.hasWife = true
// console.log(person)

// const para = document.createElement('p'); // создает тег p и задает ее значение переменной para
// para.textContent = 'Hello world!'; // Передают значение тегу p 
// document.body.appendChild(para); // Переносит тег p с значением 'Hello world' в конец тега body!

// function Person(first, last, age, gender, interests) {
// 	this.name = {
// 		first,
// 		last
// 	},
// 	this.age = age
// 	this.gender = gender
// 	this.interests = interests
// }

// Person.prototype.greeting = function() {
// 	alert('Hi! I\'m ' + this.name.first + '.');
//  };

//  Person.prototype.farewell = function() {
// 	alert(this.name.first + ' has left the building. Bye for now!');
//  }


// Person.prototype.farewell = function() {
// 	alert(this.name + ' has left the building. Bye for now!')
//  }

// const person1 = new Person('Ruslan', 20) // new используется чтобы указать, что вы хотите использовать указанную функцию или класс (в нашем случае Person) в качестве конструктора
// const person3 = new person1.constructor('Maki', 21)

// function Teacher(first, last, age, gender, interests, subject) {
// 	Person.call(this, first, last, age, gender, interests)

// 	this.subject = subject
// }

// Teacher.prototype = Object.create(Person.prototype) // После этого кода, Teacher.prototype.constructor стало = Person.prototype.constructor. Это решается кодом ниже -> 
// Object.defineProperty(Teacher.prototype, 'constructor', {
// 	value: Teacher,
// 	enumerable: false, // false, чтобы данное свойство не появлялось в цикле for in
// 	writable: true })

// Teacher.prototype.greeting = function() {
// 	let prefix
	
// 	if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
// 		prefix = 'Mr.'
// 	}else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
// 		prefix = 'Mrs.'
// 	}else {
// 		prefix = 'Mx.'
// 	}

// 	alert(`Hello, my name is ${prefix}${this.name.first} and I teach the ${this.subject}`)
// }

// const salya = new Teacher('Saligat', 'Kurbanova', 60, 'f', 'teaching', 'math')

// function Brick() {
// 	this.width = 10
// 	this.height = 20
// }

// function BlueBrick() {
// 	Brick.call(this)

// 	this.weight = 20
// }

// const bricks = new BlueBrick()



// === Generators ===//

// function* generateStr() {
// 	yield "H"
// 	yield "E"
// 	yield "L"
// 	yield "L"
// }

// const gen = generateStr()

// function* generetaNumber(num) {
// 	for (let i = 0; i < num; i++) {
// 		yield i
// 	}
// }

// const gen = generetaNumber(10)

const iterator = {
	[Symbol.iterator](n = 10) {
		let i = 0
		return {
			next() {
				if (i < n) {
					return {value: ++i, done: false}
				}
				return {value: undefined, done: true}
			}
		}
	}
}

for (let k of iterator) {
	console.log(k)
}