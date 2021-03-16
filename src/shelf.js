function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
}

function unshelfBook(bookTitle, shelf) {
  let index = shelf.findIndex((book) => {
    return book.title === bookTitle;
  });
  shelf.splice(index, 1);
}

function listTitles(shelf) {
  let titles = shelf.map((book) => {
    return book.title;
  });
  return titles.join(', ');
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  // searchShelf
};
