const $bookGallery = document.querySelector("#book-gallery");
const form = document.querySelector("form");
const $btnSubmit = document.querySelector(".btn");

async function loadAllBooks() {
	const response = await fetch("http://10.69.4.8:3000/v1/books?apiKey=123");
	const data = await response.json();

	console.log(data);
}

document.addEventListener("DOMContentLoaded", () => {
	loadAllBooks();
});

$btnSubmit.addEventListener("click", (e) => {
	e.preventDefault();
	createBooks();
});

function createBooks(img, title) {
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

	$img.src = loadAllBooks().cover;
	// $img.alt = loadAllBooks.cover;
	Title.textContent = loadAllBooks.name;
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
