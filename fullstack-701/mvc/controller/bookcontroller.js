const Book =require('../models/book');

  
  exports.getUser=async(req, res) => {
    //Get all
    console.log(Book);
    Book.find({})
        .then((books) => {
            res.send(books);
        })
        .catch((err) => {
            res.status(400).send("ERR")
        })
};

exports.addBook=async(req, res)=> {
    //INSERT    
    console.log(req.body)
    var book1 = new Book({
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity
    });
    await book1.save()
        .then((book) => { res.status(200).send(book); })
        .catch((err) => { if (err) return console.error(err); })
}