const Library = [];

class Book {
    constructor(title, author, pages, read, id) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = id;
    }
}

const uid = function(){
    return Date.now().toString(36) + Math.random().toString(36);
}

let book = new Book("Hobbit", "Tolkien", 295, true, uid());

const container = document.getElementById("container");

const addItemButton = document.getElementById("add-item").addEventListener("click", function(){
    addBook(book);
});

addBook(book);




function addBook(book){
    const content = `
    <div class="bg-zinc-950 rounded-lg p-4 min-w-min" id=${book.id}>
        <div class="flex flex-col gap-1">
            <p class="text-3xl font-semibold text-violet-500 mb-4">${book.title}</p>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read}</p>
        </div>
        <div class="mt-6 flex justify-end">
            <button type="button" onclick="removeBook(this)" book-id=${book.id} class="bg-red-700 rounded-md p-2 hover:bg-red-900">Remove</button>
        </div>
    </div>`;

    container.innerHTML += content;
}

function removeBook(sender){
    let id = sender.getAttribute("book-id");
    //find item by propert value id
}
