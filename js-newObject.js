// // ========== PROPERTY DESCRIPTORS ===========

// const person = Object.create({}, {
// 	name: {
// 		value: 'Ruslan',
// 		enumerable: false, // Запретить перечислять (for (let i in person))
// 		writable: false, // Запретить присвоение (person.name = )
// 		configurable: false // Запретить удаление (delete person.name)
// 	},
// 	birthYear: {
// 		value: 2002,
// 		enumerable: true, // The FALSE value is default for those functions
// 		writable: true,
// 		configurable: true
// 	}
// })

// // delete person['birthYear'] 
// console.log(person)

// const person = {}

// Object.defineProperty(person, "name", {
// 	value: 'Ruslan',
// 	writable: false,
// 	configurable: false
// })

// delete person.name
// console.log(person)