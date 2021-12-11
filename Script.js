 let myLibrary = [];

 function Book (title, author, pages, read){
	this.title = title,
	this.author = author,
	this.pages = pages;
	if (read === true){
		this.read = "already read"
	} else {
		this.read = "not read yet"
	};
	console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`)
 }

 function addBookToLibrary(){
	var T = document.getElementById('title').value;
	this.T =Book (document.getElementById('title').value,
				  document.getElementById('author').value,
				  document.getElementById('pages').value,
				  document.getElementById('read').value);
	myLibrary.push();
 }
