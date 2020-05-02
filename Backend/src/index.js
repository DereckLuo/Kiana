import 'dotenv/config';
import express from 'express';

import * as db from './db'

const app = express();

app.get('/', (req, res) => {
    return res.status(200).send('Received a GET HTTP method');
});
app.post('/', (req, res) => {
    return res.status(200).send('Received a POST HTTP method');
});
app.put('/', (req, res) => {
    return res.status(200).send('Received a PUT HTTP method');
});
app.delete('/', (req, res) => {
    return res.status(200).send('Received a DELETE HTTP method');
});


let kianaDB = db.initialize();

kianaDB.query('SELECT * FROM authors', (err, rows) => {
    if (err) throw err;

    console.log('Data received from Db:');
    console.log(rows);
});


app.listen(process.env.PORT, () =>
    console.log(`Kiana listening on port ${process.env.PORT}!`),
);