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


module.exports = {
  createLibrary,
  // addBook,
  // checkoutBook
};
