// === Objects ===
const person = {
	name: 'Ruslan',
	age: 20,
	isBusinessMan: false
}

const op = new Proxy(person, { // new Proxy receives object and functions in the method
	get(target, prop) { // target - the object, prop - the objects key 
		if (!(prop in target)) {
			return prop.split('_').map(p => target[p]).join(' ')
		}
		return target[prop]
	},

	set(target, prop, value) { // value - new value for the prop(key) from target(obj)
		if (prop in target) {
			target[prop] = value // changes the age's value 
		} else {
			throw new Error('This is error') // throws error if there is no such prop (key) in the target
		}
	},

	deleteProperty(target, prop) {
		console.log('Deleting... ' + prop)
		delete target[prop]
		return true
	}
})

// === Functions ===

const log = text => `Log: ${text}`

const fp = new Proxy(log, {
	apply(target, thisArg, args) { // target - function, thisArg - Переданный контекст с помощью call or bind (apply), args - values given to apply
		console.log('Calling function')

		return target.apply(thisArg, args).toUpperCase()
	}
})

// === Classes ===

class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
}

const PersonProxy = new Proxy(Person, {
	construct(target, args) {
		return new target(...args)
	}
})

const p = new PersonProxy('Ruslan', 20)

// Practice Examples 

// Find coordinates Example (Wrapper)

const findCoordinatesFn = (target, defaultValue = 0) => new Proxy(target, {get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)})
const coordinates = findCoordinatesFn({x: 24,y: 48}, 0)

// Hidden key in obj

const hideKey = (target, prefix = "_", defaultValue = 0) => {
	return new Proxy(target, {
		has: (obj, prop) => (prop in obj) && !prop.startsWith(prefix),
		ownKeys: obj => Reflect.ownKeys(obj).filter(p => !p.startsWith(prefix)),
		get: (obj, prop, receiver) => prop in receiver ? obj[prop] : defaultValue
	})
}

const variable = hideKey({
	name: "Ruslan", 
	age: 20,
	_id: 123123
})

// Optimization (trying to use findById method with objects)

const IndexedArray = new Proxy(Array, { // IndexedArray - class (constructor)
	construct(target, [args]) {
		const index = {}
		args.forEach(item => index[item.id] = i)

		return new Proxy(new target(...args), {
			get (arr, prop) {
				switch (prop) {
					case "push":
						return item => {
							index[item.id] = item
							arr[prop].call(arr, item)
						}
					case "findById":
						return id = index[id]
					default: 
						return arr[prop]
				}
			}
		})
	}
})

