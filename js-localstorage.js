const number = 20

localStorage.setItem("myNumber", number) // key: value - type of writing in local storage. Local storage gets only string values 
console.log(localStorage.getItem("myNumber")) 

const object = {
	name: "Ruslan",
	age: 20
}

// localStorage.setItem("myObject", object)
// console.log(localStorage.getItem("myObject")) // Object, shown in a string ver is [Object object] use next way to Stringify it =>
localStorage.setItem("myObject", JSON.stringify(object)) // That's how you do it 
console.log(localStorage.getItem("myObject"))

const person = JSON.parse(localStorage.getItem("myObject")) // This is the way to get object from string version of it
console.log(person)

// localStorage.removeItem("myNumber") // Removes the needed item from the localStorage
// localStorage.clear() // Clear all localStorage 
