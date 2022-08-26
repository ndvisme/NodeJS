const { Duplex } = require("stream");


// this is a function that gets two arguments, and then does its body
const requestHandler = (req, res) => {

    // get data from the request --> the url given & the method
    const url = req.url;
    const method = req.method;

    if(url === '/'){

        // add a form with a username input --> after submit
        // post request to /create-user
        res.write('<html>');
        res.write('<head><title>Add a user</title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="New User"><button type="submit">Submit</button></form></body>');
        res.write('</html>');

        return res.end();
    }
    else if(url === '/users'){

        // return a list of dummy users
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Dummy Users List</title></head>');
        res.write('<ul><li>User 1</li></ul>');
        res.write('</html>');
        return res.end();
    }
    else if(url === '/create-user' && method === 'POST'){

        const body = [];

        // get chunks of data and put it in body
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {

            // after it finishes to pass chunks of data make to one piece
            const parsedBody = Buffer.concat(body).toString();

            const message = parsedBody.split('=')[1];

            console.log(message);

            // return to main page
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }
};

// so i'll be able to use these functions on other files.
module.exports = {
    handler: requestHandler,
    someText: 'Some hard coded text'
};
