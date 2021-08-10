const { createOneBook, getBookById } = require("./controller");

const booksRouter = require("express").Router();

booksRouter.post("/", createOneBook);

booksRouter.get("/", getBookById);

module.exports = booksRouter;
