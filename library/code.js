function book( title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
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

	myLibrary.forEach((element, index) => {
		const card = createCard(element, index)
		library.appendChild(card)
	})
}

function createCard(book, numberId) {

	const card = document.createElement("div")
	card.classList.add("card");

	for(let value of Object.keys(book)) {

		let info = createInfo(value, book[value])
		card.appendChild(info[0]);
		card.appendChild(info[1]);
	}

	card.appendChild(createRemoveButton(numberId));

	return card;
}

function createRemoveButton(numberId) {
	const removeButton = document.createElement("button");
	removeButton.classList.add("remove-btn");
	removeButton.dataset.numberId = numberId;
	removeButton.textContent = "REMOVE";
	removeButton.addEventListener("click", removeEntry);

	return removeButton;
}

function createInfo(name, value)  {

	const pName = document.createElement("p");
	pName.classList.add("value-name");
	pName.textContent = name.toUpperCase();

	let pValue;

	switch(typeof value){
		case "boolean":
			pValue = document.createElement("input");
			pValue.setAttribute("type", "checkbox");
			pValue.checked = value;
			break;
		case "string":
		case "number":
			pValue = document.createElement("p");
			pValue.classList.add("value");
			pValue.textContent = value;
			break;

		default:
			console.log("createInfo ERROR");
			console.log(value + typeof value)
			break;
	}

	return [pName, pValue];
}

function submitInfo (event) {
	event.preventDefault();

	let title = document.querySelector("#title");
	let author = document.querySelector("#author");
	let pages = document.querySelector("#pages");
	let read = document.querySelector("#read");

	addBookToLibrary(new book (
		title.value, 
		author.value, 
		(pages.value - 0),
		read.checked));

	dialog.close();

	title.value = "";
	author.value = "";
	pages.value = 0;
	read.checked = false;
}

function removeEntry () {
	myLibrary.splice(this.dataset.numberId, 1);
	displayBooks();
}

const myLibrary = [];

for(let i = 0; i < 10; i++)
	addBookToLibrary(new book( "Metamorphosis", "Kafka", (50 + i), false));

displayBooks();

let book1 = new book( "Metamorphosis", "Kafka", 50, false);

let dialog = document.querySelector("dialog");
document.querySelector(".add-btn").addEventListener("click", () => dialog.show());

document.querySelector("#submit-btn").addEventListener("click", submitInfo);