function book( title, author, pages) {
	this.title = title;
	this.author = author;
	this.pages = pages;
}

function addBookToLibrary(book) {
	myLibrary.push(book);
	displayBooks()
}

function displayBooks() {
	const library = document.getElementById("library")
	while(library.hasChildNodes()) {
		library.removeChild(library.lastChild);
	}

	for (let book of myLibrary) {
		const card = createCard(book)
		library.appendChild(card)
	}
}

function createCard(book) {

	const card = document.createElement("div")
	card.classList.add("card");

	for(let value of Object.keys(book)) {
		let info = createInfo( value, book[value]);
		card.appendChild(info[0])
		card.appendChild(info[1])
	}

	return card;
}

function createInfo(name, value)  {

	const pName = document.createElement("p");
	pName.classList.add("value-name");
	pName.textContent = name.toUpperCase();

	const pValue = document.createElement("p");
	pValue.classList.add("value");
	pValue.textContent = value;

	return [pName, pValue];
}

const myLibrary = [];

for(let i = 0; i < 10; i++)
	addBookToLibrary(new book( "Metamorphosis", "Kafka", 50));

book1 = new book( "Metamorphosis", "Kafka", 50);

displayBooks();