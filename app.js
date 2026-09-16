const books = [
    { title: "Harry Potter and the prisoner of Azkaban", author: "J.K. Rowling", genre: "Fantasy", year: 1999 },
    {title: "How to train your dragon", author: "Cressida Cowell", genre: "Fantasy", year: 2003},
    {title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", year: 1937},
    {title: "The Republic", author: "Plato", genre: "Philosophy", year: "380 BCE"},
    {title: "Meditations", author: "Marcus Aurelius", genre: "Philosophy", year: 180},
];

const bookList = document.getElementById("book-list");

function renderProducts(items) {
    bookList.innerHTML = "";

    items.forEach(function(book) {
        const card = document.createElement("div");
        card.className = "book-card";

        card.innerHTML = `
            <h2>${book.title}</h2>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
            <p><strong>Year:</strong> ${book.year}</p>
            <button class="add-to-cart">Add to Cart</button>
        `;

        bookList.appendChild(card);
    });
}

renderProducts(books);