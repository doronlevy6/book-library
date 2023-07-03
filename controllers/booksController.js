const express = require("express");
const router = express.Router();
const booksService = require("../services/booksService");

router.get("/", (req, res) => {
  try {
    const books = booksService.getAllBooks();
    res.json(books);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get("/:id", (req, res) => {
  try {
    const book = booksService.getBookById(parseInt(req.params.id));
    if (book) res.json(book);
    else res.status(404).send("Book not found");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post("/", (req, res) => {
  try {
    const book = booksService.createBook(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.put("/:id", (req, res) => {
  try {
    const book = booksService.updateBook(parseInt(req.params.id), req.body);
    if (book) res.json(book);
    else res.status(404).send("Book not found");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.delete("/:id", (req, res) => {
  try {
    const book = booksService.deleteBook(parseInt(req.params.id));
    if (book) res.json(book);
    else res.status(404).send("Book not found");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
