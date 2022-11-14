// async function func() {  // For the function to be async, you should add async before the function. Async returns Promise
// 	return 1
// }

// ==== Here I created a function using the await function, await is used only in async function. 
// async function waiter() {
// 	let promise = new Promise(resolve => {
// 		setTimeout(() => {
// 			resolve('READY!')
// 		}, 2000);
// 	})
// 	alert(await promise)
// }
// waiter()

// !! This won't work, because there is no async function 
// let response = await fetch('/article/promise-chaining/user.json');
// let user = await response.json();

// !! You can use anonym async function like
// (async () => {
// 	let response = await fetch('/article/promise-chaining/user.json');
// 	let user = await response.json();
// })

// ==== Example ====

const delay = ms => {
	return new Promise(r => setTimeout(() => {
		r()
	}, ms))
}

const url = 'https://jsonplaceholder.typicode.com/todos/1'

async function fetchToDos() {
	await delay(2000)
	const response = await fetch(url)
	const data = await response.json()
	console.log(data)
}

fetchToDos()

