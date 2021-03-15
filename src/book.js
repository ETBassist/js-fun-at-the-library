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

function calculatePageCount(book) {
  return book.length * 20;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  // writeBook,
  // editBook
}
