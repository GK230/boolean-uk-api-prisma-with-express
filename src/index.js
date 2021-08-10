const express = require("express");
const morgan = require("morgan");
const { PrismaClient } = require("@prisma/client");

const dbClient = new PrismaClient();
const booksRouter = require("./resources/books/router");

const app = express();

// Middlewares

app.use(morgan("dev"));
app.use(express.json());


// Routes
app.use("/books", booksRouter);

// Catch all
app.all("*", (req, res) => {
  res.status(404).json({ msg: "that route doesn't exist" });
});

// Start the server

app.listen(4000, () => {
  // dbClient.connect((error) => {
  //   if (error) {
  //     console.error(error);
  //   } else {
  //     console.log("Database is alive!");
  //   }
  // });

  console.log("Everything is swell!");
});

