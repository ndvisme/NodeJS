const express = require('express');

const app = express();

const path = require('path');

const rootDir = require('../../util/path');

app.use('/users', (req, res, next) => {
    res.sendFile(path.join(
        rootDir, 
        'Assignments', 
        'Assignment3', 
        'views', 
        'users.html'
        ))
});

app.use('/', (req, res, next) => {

    res.sendFile(path.join(
        rootDir, 
        'Assignments', 
        'Assignment3', 
        'views', 
        'users.html'
        ))
});

app.listen(3000);

 
