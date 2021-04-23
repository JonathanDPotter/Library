let myLibrary = [];

const display = document.getElementById("display");
const createBook = document.getElementById("create-book");
const form = document.getElementById("form-body");
const formInput = document.querySelectorAll("input")
const cancel = document.getElementById("cancel");
const submitBook = document.getElementById("submit-book");

let myBooks = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", read: true },
  { title: "The Colour of Magic", author: "Terry Pratchett", read: true },
  { title: "The Light Fantastic", author: "Terry Pratchett", read: true },
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", read: true }
];

function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
 }

function addBookToLibrary(title, author, read) {
  newBook = new Book(title, author, read)
  myBooks.push(newBook);
  showBooksinLibrary([newBook]);
}

function showBooksinLibrary(books) {
  books.forEach((obj, i) => {
    let book = document.createElement("div");
    book.classList.add("book");
    book.setAttribute("data-index", i);
    book.setAttribute("id", i);

    let title = document.createElement("p");
    title.textContent = `Title: ${obj.title}`;

    let author = document.createElement("p");
    author.textContent = `Author: ${obj.author}`;

    let read = document.createElement("input");
    read.type = 'checkbox'
    read.checked = obj.read

    let readLabel = document.createElement("label");
    readLabel.for = "read";
    readLabel.textContent = "Read? "

    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(readLabel);
    book.appendChild(read);

    let button = document.createElement("button");
    button.classList.add("btn");
    button.innerText = "remove";
    button.addEventListener("click", function () {
      myBooks.splice(this.dataset.index, 1);
      display.removeChild(book);
    });
    book.appendChild(button);
    display.appendChild(book);
  });
}

createBook.addEventListener("click", function () {
  form.style.display = "block";
});


submitBook.addEventListener("click", function (event) {
  event.preventDefault();
  addBookToLibrary(formInput[0].value, formInput[1].value, formInput[2].checked)
  form.style.display = "none";
  formInput[0].value = '';
  formInput[1].value = '';
  formInput[2].checked = false;
});

cancel.addEventListener("click", () => {
  form.style.display = "none";
    formInput[0].value = "";
    formInput[1].value = "";
    formInput[2].checked = false;
})

showBooksinLibrary(myBooks);
