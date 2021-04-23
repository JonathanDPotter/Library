let myLibrary = [];

const display = document.getElementById('display');
myBooks = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", read: true },
  { title: "The Colour of Magic", author: "Terry Pratchett", read: true },
  { title: "The Light Fantastic", author: "Terry Pratchett", read: true },
  { title: "The Hobbit", author: "J.R.R. Tolkien", read: true },
  { title: "The Colour of Magic", author: "Terry Pratchett", read: true },
  { title: "The Light Fantastic", author: "Terry Pratchett", read: true }
];

function Book() {}

function addBookToLibrary() {}

function showBooksinLibrary() {
  myBooks.forEach((obj, i) => {
    let book = document.createElement("div");
    book.classList.add("book");
    book.setAttribute("data-index", i);
    book.setAttribute("id", i)
    let title = document.createElement("p");
    title.textContent = `Title ${obj.title}`;
    let author = document.createElement('p');
    author.textContent = `Author: ${obj.author}`
    book.appendChild(title);
    book.appendChild(author);
    let button = document.createElement("button");
    button.classList.add("btn");
    button.innerText = "remove";
    button.addEventListener("click", function () {
      myBooks.splice(this.dataset.index, 1);
      display.removeChild(book);
    })
    book.appendChild(button);
    display.appendChild(book);
  });
}
console.log(display.childNodes[0])

showBooksinLibrary();