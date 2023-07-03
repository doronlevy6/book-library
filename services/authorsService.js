let authors = [
  { id: 1, name: "Author1" },
  { id: 2, name: "Author2" },
];

const getAllAuthors = () => {
  return authors;
};

const getAuthorById = (id) => {
  return authors.find((author) => author.id === id);
};

const createAuthor = (author) => {
  const newId =
    authors.length > 0
      ? Math.max(...authors.map((author) => author.id)) + 1
      : 1;
  const newAuthor = { id: newId, ...author };
  authors.push(newAuthor);
  return newAuthor;
};

const updateAuthor = (id, updatedAuthor) => {
  let author = authors.find((author) => author.id === id);
  if (author) {
    author = { ...author, ...updatedAuthor };
    authors = authors.map((a) => (a.id === id ? author : a));
    return author;
  }
};

const deleteAuthor = (id) => {
  const authorIndex = authors.findIndex((author) => author.id === id);
  if (authorIndex !== -1) {
    const deletedAuthor = authors[authorIndex];
    authors.splice(authorIndex, 1);
    return deletedAuthor;
  }
};

module.exports = {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
