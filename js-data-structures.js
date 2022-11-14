class Node {
	constructor(data, next = null) {
		this.data = data
		this.next = next
	}
}

class Data {
	constructor() {
		this.head = null
		this.tail = null
	}

	append(data) {
		const node = new Node(data)

		if (this.tail) {
			this.tail.next = node
		}

		if (!this.head) {
			this.head = node
		}
		this.tail = node
	}

	prepend(data) {
		const node = new Node(data, this.head)

		this.head = node

		if (!this.tail)	{
			this.tail = node
		}
	}

	remove(data) {
		if (!this.head) {
			return
		}

		let current = this.head

		if (this.head && this.head.data === data) {
			this.head = this.head.next
		}

		while (current.next) {
			if (current.next.data === data) {
				current.next = current.next.next
			} else {
				current = current.next
			}
		}

		if (this.tail.data === data) {
			this.tail = current
		}
	}

	insertBetween(after, data) {
		const found = this.find(after)

		if (!found) {
			return
		}

		found.next = new Node(data, found.next)
	}

	find(data) {
		if (!this.head) {
			return // Выход из функции
		}

		let current = this.head
		while (current) {
			if (current.data === data) {
				return current
			}
			current = current.next
		}
	}

	toArray() {
		const output = []

		let current = this.head
		while (current) {
			output.push(current)
			current = current.next
		}

		return output
	}
}

const list = new Data()

list.prepend("Hi")
list.append("my")
list.append("name")
list.append("is")
list.append("Gus") 
list.prepend(42)
list.append(24)