class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }
  
  greetPatron(patron, morning) {
    if (morning) {
      return `Good morning, ${patron}!`;
    } else {
      return `Hello, ${patron}!`;
    }
  }

  findBook(title) {
    let hasBook;
    for (var key in this.library.shelves) {
      let index = this.library.shelves[key].findIndex((book) => book.title === title);
      if (index > -1) {
        hasBook = true;
        this.library.shelves[key].splice(index, 1);
      }
    }
    if (hasBook === true) {
      return `Yes, we have ${title}`
    } else {
      return `Sorry, we do not have ${title}`
    }
  }

  calculateLateFee(numberOfDays) {
    return Math.ceil(numberOfDays * 0.25);
  }
}

module.exports = Librarian;
