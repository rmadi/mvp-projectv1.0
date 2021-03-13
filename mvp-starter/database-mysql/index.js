var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'rmadi12553086',
  database : 'mvp'
});

var selectAll = function(callback) {
  let sql = 'select * from items';
  connection.query(sql, (err, result)=> {
    return  err? callback(err, null): callback(null, result);
  })
 
};
// register post reuest 
const formRegister = function (params, callback) {
  const str = `INSERT INTO forms (firstname, lastname, email, password) VALUES (?,?,?,?)`;
  connection.query(str, params, (err, result)=> {
    return err? callback(err, null): callback(null, result)
    
    
  } )
}
// update item
const updateItem = function(params, callback) {
  let str = `UPDATE items
  SET name = ?, price = ?,img = ? WHERE id = ?;`
 
  connection.query(str, params, (err, result)=> {
    if (err) {console.log(err)}
    return callback(err, result)
  })
}

const deleteitem = function(params, callback) {
  let str = `delete from items where id = ?`;
  connection.query(str, params, (err, result)=> {
    return err?callback(err, null):callback(null, result)
  })
}

module.exports.selectAll = selectAll;
module.exports.formRegister = formRegister;
module.exports.updateItem = updateItem;
module.exports.deleteitem = deleteitem;



