function createLibrary(name) {
  return {
    name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
}

function addBook(library, book) {
  library.shelves[book.genre].push(book);
}

function checkoutBook(library, title, genre) {
  let bookIndex = library.shelves[genre].findIndex((book) => {
    book.title === title;
  });
  let book = library.shelves[genre].splice(bookIndex, 1);
  if (book.length > 0) {
    return `You have now checked out ${title} from the ${library.name}`;
  } else {
    return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
