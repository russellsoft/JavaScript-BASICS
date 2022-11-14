// Есть два метода которые я изучил для использования Дескрипторов
// == 1 == 

// const person = {}

// Object.defineProperty(person, "name", {
// 	value: 'Ruslan', // Задает Значение Ключу в объекте
// 	writable: false, // Не дает изменять значение
// 	enumerable: false, // Не дает перечислять значение(я) [for (let i in person)]
// 	configurable: false // Не позволяет удалять name [delete person.name]
// })


// == 2 == 
// const person = Object.create({}, {
// 	name: {
// 		value: 'Ruslan', // Задает Значение Ключу в объекте
// 		writable: true, // Не дает изменять значение
// 		enumerable: true, // Не дает перечислять значение(я) [for (let i in person)]
// 		configurable: true // Не позволяет удалять name [delete person.name]
// 	},

// 	age: { 
// 		value: 20
// 	}
// })

// const personOne = {
// 	firstName: 'Ruslan',
// 	lastName: 'Makiev'
// }

// Object.defineProperty(personOne, 'fullName', {
// 	get: function() {
// 		return this.firstName + ' ' + this.lastName
// 	},

// 	set: function(value) {
// 		const split = value.split(' ')
// 		this.firstName = split[0]
// 		this.lastName = split[1]
// 	}
// })
 
// personOne.fullName = "Sultan Abdulla"
// console.log(personOne.firstName)
// console.log(personOne.lastName)
// const today = new Date()