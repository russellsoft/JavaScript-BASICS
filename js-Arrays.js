const cars = ['Mazda', 'Reno', 'Mercedes', 'BMW', 'Porche']
const people = [
	{name: 'Albert', budget: 10000},
	{name: 'Zey', budget: 20000},
	{name: 'Freya', budget: 30000}
]
const fib = [1, 1, 2, 3, 5, 8, 13, 21]

// - - - Function - - - 
function anyThing() {

}

// - - - Methods - - - 
// cars.push('Lada') // Add new object in the end of the Array
// cars.unshift('Toyota') // Add new object in the start of the Array

// const firstCar = cars.shift() // Deletes from the Array first object in the list (in this case I add it in the variable)
// const lastCar = cars.pop() // Deletes from the Array last object in the list (in this case I add it in the variable)
// console.log(cars)
// console.log(firstCar)
// console.log(lastCar)

// - - - I'll show you actually 3 same codes right here =>
// - 1 -
// let findPerson
// for (const person of people) {
// 	if (person.budget === 20000) {
// 		findPerson = person
// 	}
// }
// console.log(findPerson)

// - 2 -
// const person = people.find(function (person) {
// 	return person.budget === 30000
// })
// console.log(person)

// - 3 -
// const person = people.find(person => person.budget === 10000)
// console.log(person)

// console.log(cars.includes('BMW')) // Shows is there such value in the array (Показывает есть ли указанное значение в массиве)

// const pow2fib = fib.map(num => num ** 2) // Метод map() позволяет вызвать переданную функцию один раз для каждого элемента массива, формируя новый массив из результатов вызова этой функции 
// const cutTheFib = fib.filter(num => num >= 10) // Метод filter() фильтрует (удаляет) из массива не подходящие к переданной функции значения, формируя новый массив из результатов вызова этой функции
// console.log(pow2fib)
// console.log(cutTheFib)
// Задача 1 // Перевернуть текст

// const text = 'Привет, я люблю JavaScript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)

// const index = cars.indexOf('BMW') // .indexOf show the index number of the value
// cars[index] = 'LA'
// console.log(cars)

// Создадим код который показывает сумму бюджета только тех людей, у которых бюджет больше 15000

// const allBudget = people
// 	.filter(person => person.budget > 15000)
// 	.reduce((acc, person) => {
// 		acc += person.budget
// 		return acc
// 	}, 0)
// console.log(allBudget)

// !!! -  Метод - map() создаёт новый массив, меняя каждый элемент массива индивидуально. Метод - filter() создаёт новый массив убирая элементы, которые не соответствуют условиям. Метод - reduce() в свою очередь, берёт все элементы в массиве, складывает их в новое значение.

// function map(f, arr) {
// 	var result = []
// 	for (let i = 0; i != arr.length; i++) {
// 		result[i] = f(a[i])
// 			return result
// 	}
// }

// const f = function(x) {
// 	return x * x * x
// }

// const numbers = [1, 2, 3, 4, 5]
// const a = map(f, numbers)
// console.log(a)

// Filter

// const peoples = [
// 	{name: 'Klarisa', age: 20},
// 	{name: 'Gana', age: 15},
// 	{name: 'Farsa', age: 24}
// ]

// const adults = peoples.filter(persons => persons.age >= 18)
// console.log(adults)

// Reduce - Еще раз объясню как использовать этот метод в массиве

// const reduseTutorial = people.reduce((total, person) => {
// 	return total + person.budget
// }, 0) // total = 0 - the value we have given
// console.log(reduseTutorial)

// Method find and findIndex

const albert = people.find(person => person.name === "Albert") // finds the needed item
console.log(albert)

const albertIndex = people.findIndex(person => person.name === "Albert") // finds the index of the needed item
console.log(albertIndex)