const express = require('express');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'db name'
})

connection.connect()

// make query
connection.query('', function (err, rows, fields) {
  if (err){
    console.error('Error conecting: ' + err.stack);
  }

  //do stuff if valid
})

//kill connection
connection.end()
