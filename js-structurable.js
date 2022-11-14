// = = = ADAPTER = = = //

// class OldCalc {
// 	operations(n1, n2, operation) {
// 		switch (operation) {
// 			case 'add': return n1 + n2
// 			case 'sub': return n1 - n2
// 			default: return NaN
// 		}
// 	}
// }

// class NewCalc {
// 	add(n1, n2) {
// 		return n1 + n2
// 	}

// 	sub(n1, n2) {
// 		return n1 - n2
// 	}
// }

// class CalcAdapter { // Адаптер нам нужен для того чтобы переделать старый код в новый не переделывая его полностью
// 	constructor() {
// 		this.calc = new NewCalc()
// 	}

// 	operations(n1, n2, operation) {
// 		switch (operation) {
// 			case 'add': return this.calc.add(n1, n2)
// 			case 'sub': return this.calc.sub(n1, n2)
// 			default: return NaN
// 		}
// 	}
// }

// const h = new CalcAdapter()
// console.log(h.operations(10, 5, "add"))

// = = = FACADES = = = //

// class Complaints {
// 	constructor() {
// 		this.complaints = []
// 	}

// 	reply(complaint) {

// 	}

// 	add(complaint) { 
// 		this.complaints.push(complaint)
// 		return this.reply(complaint)
// 	}
// }

// class ProductComplaints extends Complaints {
// 	reply({id, customer, details}) {
// 		return `Product ID: ${id}. Customer: ${customer} (${details})`
// 	}
// }

// class ServiceComplaints extends Complaints {
// 	reply({id, customer, details}) {
// 		return `Service ID: ${id}. Customer: ${customer} (${details})`
// 	}
// }

// class FacadeComplaint {
// 	register(customer, type, details) {
// 		const id = Date.now()
// 		let complaint

// 		if (type === "service") {
// 			complaint = new ServiceComplaints()
// 		} else {
// 			complaint = new ProductComplaints()
// 		}

// 		return complaint.add({id, customer, details})
// 	}
// }

// const example = new FacadeComplaint()

// console.log(example.register("Minotaur", "service", "Not working"))
// console.log(example.register("Guinevre", "product", "Awful"))
// console.log(example.register("Yui-sun shin", "product", "Discusting"))

// = = = FLYWEIGHT = = = //

// class Car {
// 	constructor(model, price) {
// 		this.model = model
// 		this.price = price
// 	}
// }

// class CarFactory {
// 	constructor() {
// 		this.cars = []
// 	}

// 	create(model, price) {
// 		const candidate = this.getCar(model)
// 		if (candidate) {
// 			return candidate
// 		}

// 		const newCar = new Car(model, price) 
// 		this.cars.push(newCar)
// 		return newCar
// 	}

// 	getCar(model) {
// 		return this.cars.find(car => car.model === model)
// 	}
// }
// const factory = new CarFactory()
// const bmwX6 = factory.create("bmw", 10000)
// const audi = factory.create("audi", 12000)
// const bmwX3 = factory.create("bmw", 9000)

// = = = PROXY = = = //

// function networkFetch(url) {
// 	return `${url}: Answer from server`
// }

// const cache = new Set()
// const proxiedFetch = new Proxy(networkFetch, {
// 	apply(target, thisArg, args) {
// 		const url = args[0]
// 		if (cache.has(url)) {
// 			return `${url} Ответ из - кэша`
// 		} else {
// 			cache.add(url)
// 			return Reflect.apply(target, thisArg, args)
// 		}
// 	}
// })

