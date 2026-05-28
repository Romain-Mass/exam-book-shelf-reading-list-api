const $bookGallery = document.querySelector("#book-gallery");
const $bookAmount = document.querySelector("#books-amount");
const form = document.querySelector("form");
const $btnSubmit = document.querySelector(".btn");
const divContainer = document.createElement("div");
const divDescription = document.createElement("div");
const divTitle = document.createElement("div");
const divBarContent = document.createElement("div");
const divBar = document.createElement("div");
const divBarProgress = document.createElement("div");
const $img = document.createElement("img");
const Title = document.createElement("h1");
const NameAuthor = document.createElement("h3");
const Type = document.createElement("p");
const Progress = document.createElement("p");
const pourcentageProgress = document.createElement("span");

async function loadAllBooks() {
	const response = await fetch("http://10.69.4.8:3000/v1/books?apiKey=123");
	const data = await response.json();

	data.forEach((book) => {
		createBooks(book);
	});

	console.log(data);
}

// function getBooks() {
// 	let allBooks = loadAllBooks();
// 	let num = allBooks.length;
// 	$bookAmount.textContent = num;
// }

document.addEventListener("DOMContentLoaded", () => {
	loadAllBooks();
});

function createBooks(title) {
	// for (let i = 0; i < loadAllBooks.length; i++) {}
	const divContainer = document.createElement("div");
	const divDescription = document.createElement("div");
	const divTitle = document.createElement("div");
	const divBarContent = document.createElement("div");
	const divBar = document.createElement("div");
	const divBarProgress = document.createElement("div");
	const $img = document.createElement("img");
	const Title = document.createElement("h1");
	const NameAuthor = document.createElement("h3");
	const Type = document.createElement("p");
	const Progress = document.createElement("p");
	const pourcentageProgress = document.createElement("span");

	divContainer.classList.add("book-card");
	divBarProgress.classList.add("book-card-chip");
	divDescription.classList.add("book-card-chip");

	$img.src = loadAllBooks.cover;
	// $img.alt = loadAllBooks.cover;
	Title.textContent = title.name;
	Type.textContent = "Hello";
	NameAuthor.textContent = "Hello";
	Progress.textContent = "Progress";
	pourcentageProgress.textContent = loadAllBooks.progress;

	$bookGallery.appendChild(divContainer);
	divContainer.appendChild($img);
	divContainer.appendChild(Title);
	divContainer.appendChild(Type);
	divContainer.appendChild(NameAuthor);
	divContainer.appendChild(Progress);
	divContainer.appendChild(pourcentageProgress);
	divContainer.appendChild(divBarProgress);

	return $bookGallery;
}

$btnSubmit.addEventListener("click", (e) => {
	e.preventDefault();
	createBooks();
});
