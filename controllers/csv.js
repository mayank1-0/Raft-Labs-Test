const db = require("../db/models/index");
const Authors = db.Authors;
const Books = db.Books;
const Magazines = db.Magazines;
const fs = require("fs");
const csv = require("fast-csv");
const { sequelize } = require("../db/models/index");

const uploadAuthors = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload a CSV file!");
    }
    let authors = [];
    let path = __basedir + "/resources/static/assets/uploads/" + req.file.filename;
    fs.createReadStream(path)
      .pipe(csv.parse({ headers: true }))
      .on("error", (error) => {
        throw error.message;
      })
      .on("data", (row) => {
        authors.push(row);
      })
      .on("end", () => {
        Authors.bulkCreate(authors)
          .then(() => {
            res.status(200).send({
              message:
                "Uploaded the file successfully: " + req.file.originalname,
            });
          })
          .catch((error) => {
            res.status(500).send({
              message: "Fail to import data into database!",
              error: error.message,
            });
          });
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};

const getAuthors = async (req, res) => {
  try{
  const authors = await Authors.findAll()
  console.log("Authors", authors);
  res.status(200).json({ message: "Successfully retrieved data", authors: authors })
  }
  catch(err){
    console.log(err);
    res.status(500).send({ message: err.message || "Some error occurred while retrieving authors."});
  };
};

const uploadBooks = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload a CSV file!");
    }
    let books = [];
    let path = __basedir + "/resources/static/assets/uploads/" + req.file.filename;
    fs.createReadStream(path)
      .pipe(csv.parse({ headers: true }))
      .on("error", (error) => {
        throw error.message;
      })
      .on("data", (row) => {
        books.push(row);
      })
      .on("end", () => {
        Books.bulkCreate(books)
          .then(() => {
            res.status(200).send({
              message:
                "Uploaded the file successfully: " + req.file.originalname,
            });
          })
          .catch((error) => {
            res.status(500).send({
              message: "Fail to import data into database!",
              error: error.message,
            });
          });
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};

const getBooks = async (req, res) => {
  try{
  const books = await Books.findAll()
  console.log("Books", books);
  res.status(200).json({ message: "Successfully retrieved data", books: books })
  }
  catch(err){
    console.log(err);
    res.status(500).send({ message: err.message || "Some error occurred while retrieving books."});
  };
};

const uploadMagazines = async (req, res) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload a CSV file!");
    }
    let magazines = [];
    let path = __basedir + "/resources/static/assets/uploads/" + req.file.filename;
    fs.createReadStream(path)
      .pipe(csv.parse({ headers: true }))
      .on("error", (error) => {
        throw error.message;
      })
      .on("data", (row) => {
        magazines.push(row);
      })
      .on("end", () => {
        Magazines.bulkCreate(magazines)
          .then(() => {
            res.status(200).send({
              message:
                "Uploaded the file successfully: " + req.file.originalname,
            });
          })
          .catch((error) => {
            res.status(500).send({
              message: "Fail to import data into database!",
              error: error.message,
            });
          });
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};

const getMagazines = async (req, res) => {
  try{
  const magazines = await Magazines.findAll()
  console.log("Magazines", magazines);
  res.status(200).json({ message: "Successfully retrieved data", magazines: magazines })
  }
  catch(err){
    console.log(err);
    res.status(500).send({ message: err.message || "Some error occurred while retrieving books."});
  };
};

const getBookByIsbn = async (req, res) => {
  try{
  const book = await Books.findAll({
    where: {
      isbn: req.params.isbn
    }
  })
  res.status(200).json({ message: "Successfully retrieved data", book: book })
  }
  catch(err){
    console.log(err);
    res.status(500).send({ message: err.message || "Some error occurred while retrieving the book."});
  };
};

const getMagazineByIsbn = async (req, res) => {
  try{
  const magazine = await Magazines.findAll({
    where: {
      isbn: req.params.isbn
    }
  })
  res.status(200).json({ message: "Successfully retrieved data", magazine: magazine })
  }
  catch(err){
    console.log(err);
    res.status(500).send({ message: err.message || "Some error occurred while retrieving the magazine."});
  };
};

const getMagazinesAndBooksByAuthor = async (req, res) => {
  try{
  const magazines = await Magazines.findAll({
    where: {
      authors: req.params.authorEmail
    }
  })
  magazines.forEach(element => {
    console.log(element)
  })
  const books = await Books.findAll({
    where: {
      authors: req.params.authorEmail
    }
  })
  books.forEach(element => {
    console.log(element);
  });
  res.status(200).json({ message: "Successfully retrieved books and magazines by given author", data: books + magazines})
  }
  catch(err){
    console.log(err);
    res.status(500).send({ message: err.message || "Some error occurred while retrieving the books and magazines."});
  };
};

const getBooksAndMagazines = async (req, res) =>{
  try{
    const data = await sequelize.query('SELECT * FROM books UNION ALL SELECT * FROM magazines ORDER BY title')
    console.log(data);
    res.status(200).send({ message: "Successfully retrieved data", data: data})
  }
  catch(err){
    console.log(err);
    res.status(500).send({ message: err.message || "Some error occurred while retrieving the books and magazines."});

  }
}

const addBook = async (req, res) =>{
  try{
    const newBook = req.body
    console.log(newBook);
    let newBookArray = [newBook]
    const data = await Books.create(newBook)
    // exporting new book to a csv file
    const ws = fs.createWriteStream("newBook.csv");
    csv
    .write(newBookArray, { headers: true })
    .on("finish", function() {
      console.log("Write to newBook.csv successfully!");
    })
    .pipe(ws);
  
    res.status(200).send({ message: "Successfully added book", data: data})
  }
  catch(err){
    console.log(err);
    res.status(500).send({ message: err.message || "Some error occurred while adding a book"});

  }
}

const addMagazine = async (req, res) =>{
  try{
    const newMagazine = req.body
    let newMagazineArray = [newMagazine]
    console.log(newMagazine);
    const data = await Magazines.create(newMagazine)
    // exporting new book to a csv file
    const ws1 = fs.createWriteStream("newMagazine.csv");
    csv
    .write(newMagazineArray, { headers: true })
    .on("finish", function() {
      console.log("Write to newMagazine.csv successfully!");
    })
    .pipe(ws1);
    res.status(200).send({ message: "Successfully added magazine", data: data})
  }
  catch(err){
    console.log(err);
    res.status(500).send({ message: err.message || "Some error occurred while adding a magazines."});

  }
}

module.exports = {
  uploadAuthors,
  uploadBooks,
  uploadMagazines,
  getAuthors,
  getBooks,
  getMagazines,
  getBookByIsbn,
  getMagazineByIsbn,
  getMagazinesAndBooksByAuthor,
  getBooksAndMagazines,
  addBook,
  addMagazine
};