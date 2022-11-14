// const person = {
// 	name: 'Ruslan',
// 	age: 19,
// 	isProgrammer: true,
// 	language: ['ru', 'en', 'ch'],
// 	// 'complex key': 'complex value',
// 	// ['key_' + (1 + 3)]: 'Computed key', // key_4
// 	greet() {
// 		console.log('greet from person!')
// 	},
// 	info() {
// 		console.info('information abot the person, name:', this.name)
// 	}
// }

// console.log(person)
// console.log(person.name)
// const ageKey = 'age'
// console.log(person[ageKey])
// console.log(person['complex key'])

// person.language.push('dg')
// console.log(person)
// person['key_4'] = undefined
// delete person['key_4']

// const name = person.name
// const age = person.age
// const language = person.language

// const {name, age: personAge, language} = person 
// console.log(name, personAge, language)

// for (let key in person) {
// 	if (person.hasOwnProperty(key)) {
// 		console.log(key)
// 		console.log(person[key])
// 	}
// }

// const keys = Object.keys(person)
// keys.forEach((key) => {
// 	console.log(key)
// 	console.log(person[key])
// })

// Context
// person.info()

// const logger = {
// 	keys(obj) {
// 		console.log('Keys', Object.keys(this))
// 	},

// 	keysAndValues() {
// 		// for (let i of Object.keys(person)) {
// 		// 	console.log(`"${i}": ${person[i]}`)
// 		// }
// 		Object.keys(this).forEach(key => {
// 			console.log(`"${key}": ${this[key]}`)
// 		})
// 	}
// }
// logger.keysAndValues.call(person)

// const bound = logger.keys.bind(person) // .bind() creates new function that calls the object that we need 
// logger.keys.call(person) // .call() doesn't creat new function

// Bind ==>

const person = {
	name: 'Ruslan'
}

function showObj(phone) {
	console.log(`Name: ${this.name}, phone number: ${phone}`)
}

const bindExample = showObj.bind(person)("+7-999-999-99-99")