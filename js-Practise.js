// // Practising with the prototypes 

// ES5 Синтаксис

// const Animal = function(options) { // Тоже самое что и класс, но в виде функции
// 	this.name = options.name
// 	this.color = options.color
	
// 	// this.voice = function() { // Этот код мы не можем вызывать также как и прототипированную функцию в класс
// 	// 	console.log("Base voice of", dog.name)
// 	// }
// }

// Animal.prototype.voice = function() {
// 	console.log("Base voice of", dog.name)
// }

// const dog = new Animal({
// 	name: "Rex",
// 	color: "#fff"
// })

// const Cat = function(options) {
// 	Animal.apply(this, arguments)

// 	this.hasTail = options.hasTail
// }

// Cat.prototype = Object.create(Animal.prototype) // Теперь мы можем работать с прототипами класса Animal

// const cat = new Cat({
// 	name: "Murzik",
// 	color: 'white',
// 	hasTail: true
// })


// ES6 Синтаксис используя классы

class Animal {
	constructor(options) {
		this.name = options.name
		this.color = options.color
	}

	voice() { // Эта функция сразу же добавляется в прототип класса Animal в сравнении с функцией, которую мы использовали в синтаксисе ES5, где функция добавлялась в конструктор класса
		console.log("This voice has:", this.name)
	}
}

const dog = new Animal({
	name: "Rex",
	color: "#fff"
})

class Cat extends Animal {
	constructor(options) {
		super(options)

		this.hasTail = options.hasTail
	}
}

const cat = new Cat ({
		name: "Murzik",
		color: 'white',
		hasTail: true
})

// Examples 

// Также можно добавлять методы (функции) в сам корневой объект (String, Number, Object, etc.)

Object.prototype.voice = function() {
	console.log("Voice!")
}

console.log({name: "Ruslan"}.voice()) // Это работает, потому что метод voice() находится в корневом прототипе Объекта, это также можно использовать с массивами, строками и числами

String.prototype.toTag = function(tag) {
	return `<${tag}>${this}<${tag}>`
}

console.log("Hello world".toTag("h1"))