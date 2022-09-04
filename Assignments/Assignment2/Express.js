const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {

    console.log('Users.');
    res.send('<h1>The "Users" page</h1>');
});

app.use('/', (req, res, next) => {

    console.log('Just a /'); 
    res.send('<h1>The "/" page</h1>');
});

app.listen(3000);

 
