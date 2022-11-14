 const obj = {
	name: "Ruslan",
	age: 20,
	job: "Programmer"
 }

 const entries = [
	['name', 'Ruslan'],
	['age', 20],
	['job', 'Programmer']
 ]

//  console.log(Object.entries(obj)) // Object.entries(_obj) - преобразует объект в список (как в переменной entries)
//  console.log(Object.fromEntries(entries)) // Object.fromEntries(_mapArr) - преобразует список в объект

const map = new Map(entries) // Преобразует список в map

// console.log(map)
// console.log(map.get('job')) // map.get("key") - shows the value of the key in the map

map
	.set("New Field", 20) // map.set(key, value) - sets in the map array
	.set(obj, "value") // Фишка map - в виде ключа или значения можно передавать любое значение в сравнении с объектом где нельзя передать объект
	.delete('job') // Удаляет указанный ключ и его значение из map 
//	.has('age') // Проверяет, есть ли указанное значение в map (true / false)
	.size // Показывает длину
//	.clear() // Удаляет все из map
// console.log(map)

// ==============================

for (let [key, value] of map) {   // You can extract only key or value or all of them
	// console.log(key, value)
}
for (let key of map.keys()) {   
	// console.log(key)
}
for (let value of map.values()) {   
	// console.log(value)
}

map.forEach((key, value, m) => { // m - map (the same)
	// console.log(key, value)
})

// ==============================

const array = [...map] // the same as { const array = Array.from(map) }
// console.log(array)
const mapAsObj = Object.fromEntries(map.entries()) // Shows the array as an object
// console.log(mapAsObj)

// == EXAMPLE ==

// const users = {
// 	name: "Vlad",
// 	name: "Gans",
// 	name: "Walter"
// }

// const visitors = new Map()

// visitors
// 	.set(users[0], new Date())
// 	.set(users[1], new Date(new Date().getTime() + 1000 * 60))
// 	.set(users[2], new Date(new Date().getTime() + 5000 * 60))

// function visitorsTime(visit) {
// 	return visitors.get(visit)
// }

// console.log(visitorsTime(users[1]))

// ===== SET =====

const set = new Set([1, 2, 3, 3, 4, 5, 5, 5, 6, 6, 7]) // Выдает значение только один раз и не повторяет его 
set.add(10) // Add value in the set var

for (let key of set) { // key or value are the same for set
	// console.log(key) 
}

// EXAMPLE 

function uniqueValue(array) {
	return Array.from(new Set(array))
}

// console.log(uniqueValue([1, 1, 4, 4, 5, 6, 6]))

// ===== WeakMap =====
let object = {name: "Ruslan"}

const weakMap = new WeakMap([
	[object, "value"]
])
object = null
// console.log(weakMap.get(object))

// EXAMPLE PRACTICE

const cache = new WeakMap()

function checkCache(user) {
	if (!cache.has(user)) {
		cache.set(user, Date.now())
	}
	return cache.get(user)
}

let lena = {name: "lena"}
let alex = {name: "alex"}

checkCache(lena)
checkCache(alex)
lena = null 

// Этот пример показывает как можно работать с файлами (сервером) которые были удалены нами же 

// WeakSet работает также как и WeakMap