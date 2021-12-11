let myLibrary = [
	{
		"title" : "Harry Potter",
		"author" : "J.K. Rowling",
		"pages" : 255,
		"read" : "not read yet"
	}
];

var Book = function (title, author, pages, read){
	this.title = title,
	this.author = author,
	this.pages = pages;
	if (read === true){
		this.read = "already read"
	} else {
		this.read = "not read yet"
	};
}

function addBookToLibrary(){
	var newBook = new Book (document.getElementById('title').value,
					document.getElementById('author').value,
					document.getElementById('pages').value,
					document.getElementById('read').checked);
	console.log(newBook);
	myLibrary.push(newBook);
}

var testBook = {
	"title" : "Statistics for dummies",
	"author" : "Arthur",
	"pages" : 100,
	"read" : "has not read",
}