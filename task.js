const fontSizeButton = Array.from(document.getElementsByClassName("font-size"));
const book = document.getElementById("book");

for (let i = 0; i < fontSizeButton.length; i++) {
    fontSizeButton[i].addEventListener("click", (event) => {
        event.preventDefault();
        if (fontSizeButton[i].getAttribute("data-size") === "small") {
            removeClassBook();
            book.classList.add("book_fs-small");
        } else if (fontSizeButton[i].getAttribute("data-size") === "big") {
            removeClassBook();
            book.classList.add("book_fs-big");
        } else {
            removeClassBook();
        }
    })
}

function removeClassBook() {
    if (book.classList.contains("book_fs-big")) {
        book.classList.remove("book_fs-big");
    } else if (book.classList.contains("book_fs-small")) {
        book.classList.remove("book_fs-small");
    }
}
