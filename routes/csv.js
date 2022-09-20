const express = require("express");
const router = express.Router();
const csvController = require("../controllers/csv");
const upload = require("../middlewares/upload");

router.post('/uploadAuthors', upload.single("file"), csvController.uploadAuthors)
router.post('/uploadBooks', upload.single("file"), csvController.uploadBooks)
router.post('/uploadMagazines', upload.single("file"), csvController.uploadMagazines)
router.get('/getAuthors', csvController.getAuthors)
router.get('/getBooks', csvController.getBooks)
router.get('/getMagazines', csvController.getMagazines)
router.get('/getBookByIsbn/:isbn', csvController.getBookByIsbn)
router.get('/getMagazineByIsbn/:isbn', csvController.getMagazineByIsbn)
router.get('/getMagazinesAndBooksByAuthor/:authorEmail', csvController.getMagazinesAndBooksByAuthor)
router.get('/getBooksAndMagazines', csvController.getBooksAndMagazines)
router.post('/addBook', csvController.addBook)
router.post('/addMagazine', csvController.addMagazine)




module.exports = router