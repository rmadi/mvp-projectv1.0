var express = require('express');
// var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var db = require('../database-mysql');
// var items = require('../database-mongo');
const cors = require('cors')
var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(express.json());
app.use(cors())
// get all data to list shop
app.get('/shop/data', (req, res)=>{
  db.selectAll((err, result)=> {
    if (err) {console.log(err)}
    res.status(200).json(result)
  })
});
// update my items
app.put('/shop/update/:id', (req, res)=> {
  console.log('************',req.body)
  console.log('################',req.params)
  db.updateItem([req.body.name, req.body.price, req.body.img, req.params.id], (err, result)=> {
    if (err) {console.log(err)}
    res.status(201).send('your Item is up to date ')
  })
})

// delete item
app.delete(`/shop/delete/:id`, (req, res)=>{
  console.log('************************',req.params)
  db.deleteitem([req.params.id], (err, result)=> {
    if (err) {console.log(err)}
    return res.status(204).send('your ite is deleted')
  })

})

// post reque from form
app.post('/sighin/register', (req, res)=> {
  console.log('*******************',req.body)
  

  //  [req.body.userName, req.body.lastName, req.body.email, req.body.password]
  let params = [req.body.firstname, req.body.lastname, req.body.email, req.body.password];
  db.formRegister(params, (err, result)=> {
    if (err) {console.log(err)}
    res.status(201).send('you data is saved ')
  })
});


app.listen(3000, function() {
  console.log('listening on port 3000!');
});

