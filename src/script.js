const myLibrary = [];

const container = document.getElementById("container");

let addButton = document.getElementById("add-item");

addButton.addEventListener("click", function() {
    addBookToLibrary(hobbit1);
});

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `Title: ${title} by ${author}, ${pages} pages, ${read}`;
    }
}

function addBookToLibrary(book){
    myLibrary.push(book);
    const content = `
    <div class="bg-zinc-950 rounded-lg p-4 min-w-min" array-index=${myLibrary.length}>
        <div class="flex flex-col gap-1">
            <p class="text-3xl font-semibold text-violet-500 mb-4">${book.title}</p>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read}</p>
        </div>
        <div class="mt-6 flex justify-end">
            <button type="button" onclick="removeBookFromLibrary()" class="bg-red-700 rounded-md p-2 hover:bg-red-900">Remove</button>
        </div>
    </div>`

    container.innerHTML += content;
}

function removeBookFromLibrary(){
    //remove
    console.log("Test");
}


let hobbit = new Book("Hobbit", "Tolkien", 295, true);
let hobbit1 = new Book("Hobbit1", "Tolkien1", 2951, false);

addBookToLibrary(hobbit);
addBookToLibrary(hobbit1);