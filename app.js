/* Import the node express module */
import express from 'express';

//Create an instance of an Express application
const app = express();

//Set up and define a port number where the server will listen
const PORT = 3003;

//Enable static file serving
app.use(express.static('public'));

//Add view engine
app.set('view engine', 'ejs');

//Array to hold contact info
const contacts = [];

//Define the default route ("/")
app.get('/', (req, res) => {
    //In response to the request, send the html file at the directory.
    res.render('home');
});

//Add a route to the confirmation pare
app.get('/confirm', (req, res) => {
    res.render('confirm')
});

//Add a route to the admin page
app.get('/admin', (req, res) => {
    res.render('admin');
})

// app.post('');

//Start a server in the designated port
app.listen(PORT, () => {
    console.log(`Server running in port http://localhost:${PORT}`);
})