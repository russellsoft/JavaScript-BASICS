// === S T A R T === // 

// const url = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json' // Write down the url for json file
// const request = new XMLHttpRequest() 
// request.open('GET', url)
// request.responseType = 'json' // 'text' to get a string 
// request.send() // send request

// request.onload = function() {
// 	const getInfoFromJsonFile = request.response // get the object from the response
// }


// Let's create a game
const header = document.querySelector('header')
const section = document.querySelector('section')

const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'
const request = new XMLHttpRequest()
request.open('GET', requestURL)
request.responseType = 'json'
request.send()

request.onload = function() {
	const superHeroes = request.response
	populateHeader(superHeroes)
	showHeroes(superHeroes)
}

function populateHeader(jsonObj) {
	const myH1 = document.createElement('h1')
	myH1.textContent = jsonObj['squadName']
	header.appendChild(myH1)

	const myPara = document.createElement('p')
	myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed']
	header.appendChild(myPara)
}

function showHeroes(jsonObj) {
	const heroes = jsonObj['members']

	for (let i = 0; i < heroes.length; i++) {
		const myArticle = document.createElement('article');
		const myH2 = document.createElement('h2');
		const myPara1 = document.createElement('p');
		const myPara2 = document.createElement('p');
		const myPara3 = document.createElement('p');
		const myList = document.createElement('ul');
	

		myH2.textContent = heroes[i].name
		myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
		myPara2.textContent = 'Age: ' + heroes[i].age;
		myPara3.textContent = 'Superpowers:';
	
		const superPowers = heroes[i].powers
		for (let j = 0; j < superPowers.length; j++) {
			const listItem = document.createElement('li')
			listItem.textContent = superPowers[j]
			myList.appendChild(listItem)
		}

		myArticle.appendChild(myH2);
		myArticle.appendChild(myPara1);
		myArticle.appendChild(myPara2);
		myArticle.appendChild(myPara3);
		myArticle.appendChild(myList);
		section.appendChild(myArticle);
	}
}