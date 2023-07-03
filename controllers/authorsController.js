const express = require("express");
const router = express.Router();
const authorsService = require("../services/authorsService");

router.get("/", (req, res) => {
  try {
    const authors = authorsService.getAllAuthors();
    res.json(authors);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get("/:id", (req, res) => {
  try {
    const author = authorsService.getAuthorById(parseInt(req.params.id));
    if (author) res.json(author);
    else res.status(404).send("Author not found");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post("/", (req, res) => {
  try {
    const author = authorsService.createAuthor(req.body);
    res.status(201).json(author);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.put("/:id", (req, res) => {
  try {
    const author = authorsService.updateAuthor(
      parseInt(req.params.id),
      req.body
    );
    if (author) res.json(author);
    else res.status(404).send("Author not found");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.delete("/:id", (req, res) => {
  try {
    const author = authorsService.deleteAuthor(parseInt(req.params.id));
    if (author) res.json(author);
    else res.status(404).send("Author not found");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
