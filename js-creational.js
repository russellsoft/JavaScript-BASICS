// // = = = FACTORY = = = // 
// class SimpleMembership {
// 	constructor(name) {
// 		this.name = name
// 		this.cost = 50
// 	}	
// }

// class StandardMembership {
// 	constructor(name) {
// 		this.name = name
// 		this.cost = 150
// 	}	
// }

// class PremiumMembership {
// 	constructor(name) {
// 		this.name = name
// 		this.cost = 500
// 	}	
// }

// class MembershipFactory {
// 	static list = {
// 		simple: SimpleMembership,
// 		standard: StandardMembership,
// 		premium: PremiumMembership
// 	}

// 	create(name, type = "simple") {
// 		const Membership = MembershipFactory.list[type] || MembershipFactory.list.simple
// 		const member = new Membership(name)
// 		member.type = type
// 		member.define = function () {
// 			console.log(`Name: ${this.name} - Type: ${this.type} - Cost: ${this.cost}`)
// 		}
// 		return member
// 	}
// }
// const factory = new MembershipFactory()

// const members = [
// 	factory.create("Hanzo", "premium"),
// 	factory.create("Akai", "simple"),
// 	factory.create("Claude", "standard")
// ]

// members.forEach(m => {
// 	m.define()
// })

// = = = PROTOTYPE = = = // 

// const car = {
// 	wheels: 4,

// 	init() {
// 		console.log(`This car has ${this.wheels} wheels and the owner is ${this.owner}`)
// 	}
// }

// const carOwnerDetermine = Object.create(car, {
// 	owner: {
// 		value: "Дмитрий"
// 	}
// })

// = = = SINGLETON = = = // 

// class Database {
// 	constructor(data) {
// 		if (Database.exists) {
// 			return Database.instance
// 		}
// 		Database.instance = this
// 		Database.exists = true
// 		this.data = data
// 	}

// 	getData() {
// 		return this.data
// 	}
// }

// const myData = new Database("hit me")
// console.log(myData.getData())

// const yourData = new Database("do not hit me plz")
// console.log(yourData.getData())
