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
		const card = createCard (book.title, book.author, book.pages)
		library.appendChild(card)
	}
}

function createCard( title, author, pages) {

	const card = document.createElement("div")
	card.classList.add("card");

	const pTitle = document.createElement("p");
	pTitle.classList.add("title");
	pTitle.textContent = title;
	card.appendChild(pTitle);

	const pAuthor = document.createElement("p");
	pAuthor.classList.add("author");
	pAuthor.textContent = author;
	card.appendChild(pAuthor);

	const pPages = document.createElement("p");
	pPages.classList.add("pages");
	pPages.textContent = pages;
	card.appendChild(pPages);	

	return card;
}

const myLibrary = [];

addBookToLibrary(new book( "Metamorphosis", "Kafka", 50));
addBookToLibrary(new book( "Metamorphosis", "Kafka", 50));
addBookToLibrary(new book( "Metamorphosis", "Kafka", 50));

displayBooks();