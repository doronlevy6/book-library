const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Import routes
const bookRoutes = require("./controllers/booksController");
const authorRoutes = require("./controllers/authorsController");

// Use routes
app.use("/books", bookRoutes);
app.use("/authors", authorRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
