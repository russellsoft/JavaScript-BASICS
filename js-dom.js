const header = document.getElementById('hello')
const header2 = document.querySelector('.h2-head')
const h2List = document.querySelectorAll('h2')
const header3 = h2List[1]

setTimeout(() => {
	allHeaders(header, 'Билал')
}, 1);

setTimeout(() => {
	allHeaders(header2, 'самый', 'yellow')
}, 1);

setTimeout(() => {
	allHeaders(header3, 'крутой Чел!', 'white', fontSize = '40px')
}, 1);

allHeaders = (node, text, color = 'red', fontSize) => {
	node.textContent = text
	node.style.color = color
	node.style.textAlign = 'center'
	node.style.backgroundColor = 'black'
	node.style.padding = '20px'
	// falsy: '', undefined, false, null, 0
	if (fontSize) {
		node.style.fontSize = fontSize
	}
}

header.onclick = () => {
	if (header.style.color === 'red') {
		header.style.color = 'black'
		header.style.backgroundColor = 'white'
	} else {
		header.style.color = 'red'
		header.style.background = 'black'
	}
} // add click function on the 'block', (same as tag <button> in html i think)

header2.addEventListener('click', () => {
	if (header2.style.color === 'yellow') {
		header2.style.color = 'black'
		header2.style.backgroundColor = 'white'
	} else {
		header2.style.color = 'yellow'
		header2.style.background = 'black'
	}
}) // The same code as the last one (same button)