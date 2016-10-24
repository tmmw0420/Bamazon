var mysql = require('mysql');
var inquirer = require('inquirer');
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Daniel_21@",
  database:"bamazon_tw"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connecd as id" + connection.threadId);
});

// connection.query("SELECT * FROM bamazon_tw.products", function(err, res){
//   if (err) throw err;
//   console.log(res);
// });


connection.query("SELECT * FROM bamazon_tw.products", function(err, res) {
  for (var i = 0; i < res.length; i++) {
    console.log(res[i].ItemID + " | " + res[i].ProductName + " | " + res[i].Price + " | ");
  }
  connection.end();
});
