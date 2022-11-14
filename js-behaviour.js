// = = = Chain-Of-Responsibility = = = //
// = = = = = = = = = = = //

// class mySum {
// 	constructor(i = 4) {
// 		this.sum = i
// 	}

// 	add(value) {
// 		this.sum += value
// 		return this
// 	}
// }

// const a = new mySum()
// console.log(a.add(10).add(20).sum)

// = = = = = = = = = = = //
// = = = COMMAND = = = //
// = = = = = = = = = = = //

// class MyMath {
// 	constructor(initialValue) {
// 		this.num = initialValue
// 	}

// 	square() {
// 		return this.num ** 2
// 	}

// 	cube() {
// 		return this.num ** 3
// 	}
// }

// class Command {
// 	constructor(subject) {
// 		this.subject = subject
// 		this.commandList = []
// 	}

// 	execute(command) {
// 		this.commandList.push(command)
// 		return this.subject[command]()
// 	}
// }

// const example = new Command(new MyMath(2))
// console.log(example.execute("square"))
// console.log(example.execute("cube"))
// console.log(example.commandList)

// = = = = = = = = = = = //
// = = = ITERATOR = = = //
// = = = = = = = = = = = //

// class Iterator {
// 	constructor(data) {
// 		this.index = 0
// 		this.data = data
// 	}

// 	[Symbol.iterator]() {
// 		return {
// 			next: () => {
// 				if (this.index < this.data.length) {
// 					return {
// 						value: this.data[this.index++],
// 						done: false
// 					}
// 				} else {
// 					this.index = 0
// 					return {
// 						value: void 0,
// 						done: true
// 					}
// 				}
// 			}
// 		}
// 	}
// }

// const iterator = new Iterator(['this', 'is', 'iterator'])

// for (const val of iterator) {
// 	console.log("Value", val)
// }

// = = = = = = = = = = = //
// = = = GENERATOR = = = // 
// = = = = = = = = = = = //

// function* generator(arr) {
// 	let index = 0

// 	while (index < arr.length) {
// 		yield arr[index++]
// 	}
// }

// const gen = generator(['this', 'is', 'iterator'])

// // for (const val of gen) {
// // 	console.log("Value", val)
// // }

// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value) // undefined 

// = = = = = = = = = = = //
// = = = MEDIATOR = = = //
// = = = = = = = = = = = //

// class User {
// 	constructor(name) {
// 		this.name = name
// 		this.room = null
// 	}

// 	send(message, to) {
// 		this.room.send(message, this, to)
// 	}

// 	receive(message, from) {
// 		console.log(`${from.name} => ${this.name}: ${message}`)
// 	}
// }

// class ChatRoom {
// 	constructor() {
// 		this.users = {}
// 	}

// 	register(user) {
// 		this.users[user.name] = user
// 		user.room = this
// 	}

// 	send(message, from, to) {
// 		if (to) {
// 			to.receive(message, from)
// 		} else {
// 			Object.keys(this.users).forEach(key => {
// 				if (this.users[key] !== from) {
// 					this.users[key].receive(message, from)
// 				}
// 			})
// 		}
// 	}
// }

// const user1 = new User("Claude")
// const user2 = new User("Balmond")
// const user3 = new User("Zeus")

// const room = new ChatRoom()
// room.register(user1)
// room.register(user2)
// room.register(user3)

// user1.send("Hello!", user2)
// user2.send("Hi!", user1)
// user3.send("Hello everyone")

// = = = = = = = = = = = //
// = = = OBSERVER = = = //
// = = = = = = = = = = = //

// class Subject {
// 	constructor() {
// 		this.observers = []
// 	}

// 	subscribe(observer) {
// 		this.observers.push(observer)
// 	}

// 	unsubscribe(observer) {
// 		this.observers = this.observers.filter(el => el !== observer)
// 	}

// 	fire(changes) {
// 		this.observers.forEach(observer => {
// 			observer.update(changes)
// 		})
// 	}
// }

// class Observer {
// 	constructor(state = 1) {
// 		this.state = state
// 		this.initialState = state
// 	}

// 	update(changes) {
// 		switch(changes.type) {
// 			case "INCREMENT": 
// 				this.state = ++this.state
// 				break
// 			case "DECREMENT":
// 				this.state = --this.state
// 				break
// 			case "ADD":
// 				this.state = changes.payload
// 				break
// 			default: this.state = this.initialState
// 		}
// 	}
// }

// const stream$ = new Subject()

// const obs1 = new Observer(1)
// const obs2 = new Observer(42)

// stream$.subscribe(obs1)
// stream$.subscribe(obs2)

// stream$.fire({type: 'INCREMENT'})
// stream$.fire({type: 'INCREMENT'})

// console.log(obs1.state)
// console.log(obs2.state)

// = = = = = = = = = = = //
// = = = STATE = = = = = //
// = = = = = = = = = = = //

// class Light {
// 	constructor(light) {
// 		this.light = light
// 	}
// }

// class RedLight extends Light {
// 	constructor() {
// 		super("Red")
// 	}

// 	sign() {
// 		return 'Stop'
// 	}
// }

// class YellowLight extends Light {
// 	constructor() {
// 		super("Yellow")
// 	}

// 	sign() {
// 		return 'Get Ready'
// 	}
// }

// class GreenLight extends Light {
// 	constructor() {
// 		super("Green")
// 	}

// 	sign() {
// 		return 'Drive'
// 	}
// }

// class TrafficLight {
// 	constructor() {
// 		this.states = [
// 			new RedLight(),
// 			new YellowLight(),
// 			new GreenLight
// 		]
// 		this.current = this.states[0]
// 	}

// 	change() {
// 		const total = this.states.length
// 		const index = this.states.findIndex(l => l === this.current)

// 		if (index + 1 < total) {
// 			this.current = this.states[index + 1]
// 		} else {
// 			this.current = this.states[0]
// 		}
// 	}

// 	sign() {
// 		return this.current.sign()
// 	}
// }

// const traffic = new TrafficLight()

// console.log(traffic.sign())
// traffic.change()
// console.log(traffic.sign())
// traffic.change()
// console.log(traffic.sign())
// traffic.change()
// console.log(traffic.sign())
// traffic.change()
// console.log(traffic.sign())
// traffic.change()
// console.log(traffic.sign())

// = = = = = = = = = = = //
// = = = STRATEGY = = = //
// = = = = = = = = = = = //

// class Vehicle {
// 	travelTime() {
// 		return this.driveTime
// 	}
// }

// class Bus extends Vehicle{
// 	constructor() {
// 		super()
// 		this.driveTime = 10
// 	}
// }

// class Taxi extends Vehicle{
// 	constructor() {
// 		super()
// 		this.driveTime = 5
// 	}
// }

// class Car extends Vehicle{
// 	constructor() {
// 		super()
// 		this.driveTime = 3
// 	}
// }

// class Commute {
// 	travel(transport) {
// 		return transport.travelTime()
// 	}
// }

// const example = new Commute()

// console.log(example.travel(new Taxi()))
// console.log(example.travel(new Bus()))
// console.log(example.travel(new Car()))

// = = = = = = = = = = = // 
// = = = TEMPLATE = = = // 
// = = = = = = = = = = = // 

// class Employee {
// 	constructor(name, salary) {
// 		this.name = name
// 		this.salary = salary
// 	}

// 	responsibilities() {}

// 	work() {
// 		return `${this.name} ${this.responsibilities()}`
// 	}

// 	getPaid() {
// 		return `${this.name} получает ${this.salary}`
// 	}
// }

// class Developer extends Employee{
// 	constructor(name, salary) {
// 		super(name, salary)
// 	}

// 	responsibilities() {
// 		return `разрабатывает программы`
// 	}
// }

// class Tester extends Employee{
// 	constructor(name, salary) {
// 		super(name, salary)
// 	}

// 	responsibilities() {
// 		return `тестирует программы`
// 	}
// }

// const dev = new Developer("Руслан", 1000)
// console.log(dev.work())
// console.log(dev.getPaid())