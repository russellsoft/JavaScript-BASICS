const requestUrl = "https://jsonplaceholder.typicode.com/users"

// const xhr = new XMLHttpRequest()

// xhr.open("GET", url)

// // = = = = = = = = = = = = = = = = = = = = = // 
// // xhr.onload = () => console.log(JSON.parse(xhr.response)) // 1 way to parse the string from xhr req

// // xhr.responseType = "json"
// // xhr.onload = () => console.log(xhr.response) // 2 way
// // = = = = = = = = = = = = = = = = = = = = = //

// xhr.onload = () => {
// 	if (xhr.status >= 400) {
// 		console.error("404 ERROR")
// 	} else {
// 		console.log(xhr.response)
// 	}
// }

// xhr.onerror = () => console.log(xhr.response)

// xhr.send()

// PROMISE METHOD =>

// function sendRequest(method, url, body = null) { // body = null, if we will use the GET method that doesn't need 3rd value
// 	return new Promise((resolve, reject) => {
// 		const xhr = new XMLHttpRequest()
// 		xhr.open(method, url)

// 		xhr.responseType = "json"
// 		xhr.setRequestHeader('Content-Type', 'application/json')

// 		xhr.onload = () => {
// 			if (xhr.status >= 400) {
// 				reject("404 ERROR")
// 			} else {
// 				resolve(xhr.response)
// 			}
// 		}
	
// 		xhr.onerror = () => reject(xhr.response)
	
// 		xhr.send(JSON.stringify(body))
// 	})	
// }

// sendRequest("GET", requestUrl)
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err))

// sendRequest("POST", requestUrl, {
// 	name: "Ruslan",
// 	age: 20
// })
// 	.then(data => console.log(data))
// 	.catch(err => console.log(err))

// function sendRequest(method, url, body = null) { 
// 	return fetch(url, { // fetch works the same as Promise 
// 		method: method,
// 		body: JSON.stringify(body),
// 		headers: {'Content-Type': 'application/json'}
// 	}).then(response => {
// 		if (response.ok) { // ok - no errors
// 			return response.json()
// 		} 
// 		return response.json().then(error => { // Working with errors 
// 			const e = new Error("ERROR!")
// 			e.data = error
// 			throw e
// 		})
// 	})
// }

async function sendRequest(method, url, body = null) { // USING ASYNC & AWAIT
	const response = await fetch(url, {
		method: method,
		body: JSON.stringify(body),
		headers: { 'Content-Type': 'application/json' }
	})
	if (response.ok) { // ok - no errors
		return response.json()
	}
	const error = await response.json()
	const e = new Error("ERROR!")
	e.data = error
	throw e
}

const body = {
	name: "Ruslan",
	age: 20
}

sendRequest("POST", requestUrl, body)
	.then(data => console.log(data))
	.catch(err => console.log(err))