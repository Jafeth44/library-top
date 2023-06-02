let myLibrary = [];

//book constructor
class Book {
	constructor(title, author, pages, read) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
		this.info = function () {
			let readed = "";
			if (read) {
				readed = "already readed";
			} else {
				readed = "not read yet";
			}
			return `${title} by ${author}, ${pages} pages, ${readed}`;
		};
	}
}

//function to add books
function addBookToLibrary(event) {
	event.preventDefault();
	let title = document.getElementById("title").value;
	let author = document.getElementById("author").value;
	let pages = document.getElementById("pages").value;
	let tmpBook = new Book(title, author, pages);
	if (title != "" || author != "" || pages != "") {
		myLibrary.push(tmpBook);
		document.getElementById("title").value = "";
		document.getElementById("author").value = "";
		document.getElementById("pages").value = "";
		toggleBookForm(event);
	}
}
