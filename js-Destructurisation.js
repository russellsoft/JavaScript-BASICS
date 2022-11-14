// Arrays => 

// function duo(a, b) {
// 	return [
// 		a + b,
// 		a - b,
// 		a * b,
// 		a / b
// 	]
// }

// const [sum, min, mult, dev] = duo(42, 10) // Вот как работает деструктуризация 
// const [sum,, mult = "Multiple is undefined", dev] = duo(42, 10) // Также можно игнорировать некоторые элементы если это необходимо, также можно задать значения по умолчанию для определенных переменных, если вместо них случайно выйдет undefined

// Objects =>

const person = {
	name: "Ruslan",
	age: 20,
	address: {country: "russia", city: "Moscow"}
}

// const {name: firstName, age, address: {country, city: homeCity}} = person // Так работает деструктуризация с объектами

// Example, used in React

// function defineP({name: firstName, age}) {
// 	console.log(`His name is ${firstName} and age is ${age}`)
// }

// defineP(person)