function createTitle(title) {
  return `The ${title}`; 
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name,
    age,
    pronouns
  };
}

function saveReview(review, previousReviews) {
  if (!previousReviews.includes(review)) {
    previousReviews.push(review);
  }
}

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
}

function writeBook(title, mainCharacter, genre) {
  return {
    title,
    mainCharacter,
    pageCount: calculatePageCount(title),
    genre
  }
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  // editBook
}
