// class Business {
// 	constructor(options) {
// 		this.name = options.name
// 		this.duty = options.duty
// 		this.income = options.income
// 	}

// 	yell() {
// 		console.log('I have a business!')
// 	}
// }

// const business = new Business ({
// 	name: 'Aerotine',
// 	duty: 'Selling aeroplanes',
// 	income: 20000
// })

// class SmlBusiness extends Business {
// 	constructor(options) {
// 		super(options)
// 		this.employees = options.employees
// 	}
// }

// const smlBusiness = new SmlBusiness ({
// 	name: 'Russell',
// 	duty: 'Oil and Gas production',
// 	income: 100000,
// 	employees: 100
// })

// console.log(smlBusiness)

// class Component { 
// 	constructor(selector) {
// 		this.$el = document.querySelector(selector)
// 	}

// 	show() {
// 		this.$el.style.display = 'none'
// 	}

// 	hide() {
// 		this.$el.style.display = 'block'
// 	}
// }

// class Box extends Component {
// 	constructor(options) {
// 		super(options.selector)
// 		this.$el.style.width = this.$el.style.height = options.size + 'px'
// 		this.$el.style.background = options.color
// 	}
// }

// const box = new Box ({
// 	selector: '#box',
// 	size: 100,
// 	color: 'red'
// })

// class Circle extends Box {
// 	constructor(options) {
// 		super(options) 
// 		this.$el.style.borderRadius = '50%'
// 		this.$el.style.border = '5px solid black'
// 	}
// }

// const circle = new Circle ({
// 	selector: '#circle',
// 	size: 150,
// 	color: 'blue'
// })

// class User {

// 	constructor(name) {
// 	  this.name = name
// 	}
 
// 	get name() {
// 	  return this._name
// 	}
 
// 	set name(value) {
// 	  if (value.length < 4) {
// 		 console.log('Имя слишком короткое!')
// 		 return
// 	  }
// 	  this._name = value
// 	}
 
//  }
 
//  let user = new User("Иван")
//  console.log(user.name)
//  user = new User("")

