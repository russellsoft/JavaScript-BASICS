// - - - - - - - Numbers - - - - - - - -

/*

const num = 13 // Integer
const float = 13.13 // Float
const pow = 10e3 // 10e1 (Комманда - e - возводит левове число в правое значение)

const strNumber = '40'
const strFloat = '40.40'

console.log(parseInt(strNumber) + 2) // Command [ parseInt(_string) ] converts a string(строка) into Integer(число)
console.log(+strNumber + 2) // The same as last command

console.log(parseFloat(strFloat) + 2) // Comman [ parseFloat(_string) ] converts a string(строка) with float into Float
console.log(+strFloat + 2) // The same as lash command

console.log((0.4 + 0.2))
console.log(parseFloat((0.4 + 0.2).toFixed(1))) // _value.toFixed(_needed amount of last digits) leave only needed amount of float digits

*/

// BigInt (not much to say, just use after an integer 'n' letter: 10n - BigInt and that's it)

// - - - - - - - - Math - - - - - - - - -

/*

console.log(Math.PI) // Number Pi (Число Пи)
console.log(Math.E) // Number e

console.log(Math.sqrt(25)) // Возвести в корень 
console.log(Math.pow(5, 2)) // Возвести в степень
console.log(Math.abs(-4.2)) // Приводит число в положительное значение
console.log(Math.max(10, 11, 12, 13)) // Показывает наибольшее по значению число
console.log(Math.min(10, 11, 12, 13)) // Показывает наименьшее по значению число
console.log(Math.floor(10.5)) // Округляет число к меньшему значению (10)
console.log(Math.ceil(10.5)) // Округляет число к большему значению (11)
console.log(Math.round(10.6)) // Округляет число
console.log(Math.trunc(10.6)) // Обрезает Float значение числа (answer: 10)
console.log(Math.random()) // Рандомное число

*/

// Example

// function getRandomNumber(max, min) {
// 	return Math.floor(Math.random() * (max - min + 1) + min)
// }

// console.log(getRandomNumber(10, 50))

// - - - - - - - - - - Strings - - - - - - - - - - -

// const names = 'Руслан' // Use '_word' for creating a string
// const age = 19

// // const output = 'Меня зовут ' + names + ' и мне ' + age + ' лет'
// const output = `Меня зовут ${names} и мне ${age} лет ${age < 20 ? 'A' : 'B'}` // The same code as the last one written, just here I use ``  instead of '' and ${} instead of "" + _variable + ""
// console.log(output)

// Useless Example - - - - - - - - - 

// const namess = "Билал"
// let ages = 10
// const isPupil = true
// const hasWife = false
// const output = `Меня зовут ${namess} и мне ${ages} лет. ${isPupil ? 'Я учусь в школе' : 'Я не учусь в школе'}. ${hasWife ? 'Я женат' : 'Я не женат'}`

// console.log(output)

/*

const name = 'Руслан'

console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.charAt(2)) // Shows what stands on that number (starts with 0 always)
console.log(name.indexOf('лан')) // Shows the position where the written 'part' of the string is written
console.log(name.toLowerCase().startsWith('рус')) // You can use ceveral functions before each one
console.log(name.endsWith('ан'))
console.log(name.repeat(3)) // Repeats the string

const pass = '     password     '

console.log(pass)
console.log(pass.trim()) // Deletes all spaces in string
console.log(pass.trimLeft())
console.log(pass.trimRight())

*/
