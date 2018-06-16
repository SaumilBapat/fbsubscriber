var express = require('express');
const { Pool } = require('pg');

//Start DB
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

//Start Express App
var app = express();


var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Started on port " + port);
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
});

app.get('/db', async (req, res) => {
  try {
    const client = await pool.connect()
    const result = await client.query('SELECT * FROM test_table');
    res.send(result);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});
