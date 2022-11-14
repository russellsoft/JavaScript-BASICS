// = = = = = = = = = = = = = = = = = = = = =
// SPREAD

// Arrays =>
// const rusCities = ['Moscow', 'St.Petersburg']
// const europeCities = ['Berlin', 'London']
// console.log(...rusCities) // Разворачивает массив 
// const allCities = [...rusCities, 'Вашингтон', ...europeCities] // Можно так соединить несколько массивов в одну (ES6)
// const allCitiesOldVersion = rusCities.concat(europeCities)
// console.log(allCitiesOldVersion)

// Objects  => 
// const rusCities = {
// 	moscow: 20,
// 	stperer: 4
// }
// const euCities = {
// 	london: 10,
// 	berlin: 6
//}

// const allCities = ({...euCities, ...rusCities})
// console.log(allCities)

// PRACTISE
// const numbers = [1, 2, 3, 4, 5]
// console.log(Math.max(...numbers))

// const divs = document.querySelectorAll("div") // It is not an array, you can't use some methods with it like (map)
// console.log(Array.isArray(divs))

// const nodes = [...divs] // Now it is an array
// console.log(Array.isArray(nodes))

// = = = = = = = = = = = = = = = = = = = = =

// REST => 

// function rest(...args) { // Rest returns all values 
// 	return args
// }
// console.log(rest(1, 2, 3))
