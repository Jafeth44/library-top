function bookGrid(arr) {
	let tmpObj = arr[arr.length - 1];
	let tempGrid = document.getElementById("book-grid");
	tempGrid.innerHTML += /*html*/ `
        <div class="book-card">
            <h3>Title of the book: <br> ${tmpObj.title}</h3>
            <br><br>
            <h3>Author: <br> ${tmpObj.author}</h3>
            <br><br>
            <h3>Number of pages: <br> ${tmpObj.pages}</h3>
        </div>
    `;
}
