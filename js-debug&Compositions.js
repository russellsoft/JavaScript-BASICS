// const num1 = document.querySelector('#num1')
// const num2 = document.querySelector('#num2')
// const addBtn = document.querySelector('#add')
// const subBtn = document.querySelector('#sub')
// const output = document.querySelector('#output')

// function getInputValues() {
// 	const value1 = +num1.value 
// 	const value2 = +num2.value

// 	return [value1, value2]
// }

// function addHandler() {
// 	const values = getInputValues()

// 	const result = values[0] + values[1]

// 	displayEquasion(result)
// }

// function subHandler() {
// 	const values = getInputValues()

// 	const result = values[0] - values[1]

// 	displayEquasion(result)
// }

// function displayEquasion(result) {
// 	output.closest('.card').style.display = 'block'
// 	output.innerHTML = `${result}`
// }

// addBtn.addEventListener('click', addHandler)
// subBtn.addEventListener('click', subHandler)

// = = = COMPOSITION = = = //

function createProgrammer(name) {
	const programmer = {name}
	return {
		...programmer,
		...canCode(programmer)
	}
}

function canCode({ name }) {
	return {
		code: () => console.log(`${name} is coding...`)
	}
}

function canAngular({ name }) {
	return {
		angular: () => console.log(`${name} is creating Angular...`)
	}
}

function canNodeJS({ name }) {
	return {
		node: () => console.log(`${name} is writing code on Node JS...`)
	}
} 

// = = = = =

function canReactAndVue() {
	 return {
		react: () => console.log(`${name} is coding on React...`),
		vue: () => console.log(`${name} is coding on Vue...`)
	 }
}

// = = = = = 

function createFrontEnd() {
	const programmer = createProgrammer(name)

	return {
		...programmer,
		...canAngular(programmer)
	}
}

function createBackEnd() {
	const programmer = createProgrammer(name)

	return {
		...programmer,
		...canNodeJS(programmer)
	}
}

function createFullStack() {
	const programmer = createProgrammer()

	return {
		...programmer,
		...canAngular(programmer),
		...canNodeJS(programmer),
		...canReactAndVue(programmer)
	}
}

const programmer = createFullStack('Alex')
programmer.code()
programmer.node()
programmer.angular()
programmer.vue()
programmer.react()