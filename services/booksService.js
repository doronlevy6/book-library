let books = [
  {
    id: 1,
    title: "Book1",
    author: "Author1",
    isbn: "ISBN1",
    publication_date: "2023-01-01",
  },
  {
    id: 2,
    title: "Book2",
    author: "Author2",
    isbn: "ISBN2",
    publication_date: "2023-02-01",
  },
];

const getAllBooks = () => {
  return books;
};

const getBookById = (id) => {
  return books.find((book) => book.id === id);
};

const createBook = (book) => {
  const newId =
    books.length > 0 ? Math.max(...books.map((book) => book.id)) + 1 : 1;
  const newBook = { id: newId, ...book };
  books.push(newBook);
  return newBook;
};

const updateBook = (id, updatedBook) => {
  let book = books.find((book) => book.id === id);
  if (book) {
    book = { ...book, ...updatedBook };
    books = books.map((b) => (b.id === id ? book : b));
    return book;
  }
};

const deleteBook = (id) => {
  const bookIndex = books.findIndex((book) => book.id === id);
  if (bookIndex !== -1) {
    const deletedBook = books[bookIndex];
    books.splice(bookIndex, 1);
    return deletedBook;
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
