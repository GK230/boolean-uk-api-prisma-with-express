const dbClient = require("../../utils/dbClient");

async function createOneBook(req, res) {
  const newBook = req.body;

  try {
    const validatedBook = {
      ...newBook,
    };

    const book = await dbClient.book.create({ data: validatedBook });
    res.json({ data: book });
  } catch (error) {
    if (error.message) {
      res.json({ msg: error.message });
    }
  }
}

function getBookById(req, res) {
    const id = Number(req.params.id)
    dbClient.book.findUnique(({
        where: {
          id: id,
        }})).then(book => {
      res.json({ book });
    });
  

module.exports = {
  createOneBook,
  getBookById
};
