 let myLibrary = [];

 function Book (title, author, pages, read){
	this.title = title,
	this.author = author,
	this.pages = pages,
	this.read = read,
	this.info() = function() {
		return (`${this.title} by ${this.author}, ${this.pages}, ${this.read}`)
	}
 }

 function addBookToLibrary(){
	var T = document.getElementById('title').value;
	var A = document.getElementById('author').value;
	var P = document.getElementById('pages').value;
	

 }
