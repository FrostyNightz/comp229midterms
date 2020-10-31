// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});
//newly added code **fixed**
router.get('/books', (req, res, next) =>{
  res.render('books/index', {
    title:'books',
    books:'books'
  });
})
//add page 
router.get('/add', (req,res, next)=>{
  res.render('books/add',{
    title:'Add book',
    books:''
  });
})
//
router.get('/edit', (req, res, next) =>{
  res.render('books/details', {
    title:'Edit book',
    books:''
  });
})
module.exports = router;
