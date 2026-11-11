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

//Add middleware for the app
app.use(express.urlencoded({extended: true}));

//Array to hold contact info
const contacts = [];

//Define the default route ("/")
app.get('/', (req, res) => {
    //In response to the request, send the html file at the directory.
    res.render('home');
});

//Add a route to the confirmation page
app.get('/confirm', (req, res) => {
    res.render('confirm')
});

//Add a route to the contact page
app.get('/contact', (req, res) => {
    res.render('contact')
})

//Add a route to the admin page
app.get('/admin', (req, res) => {
    //Post the data from the contacts page into the admin pages
    res.render('admin', {contacts});
})

//Post the data from the contacts page into the admin pages
app.post('/confirm', (req, res) => {
    console.log(req.body);

    //Create a JSON object to store the data from each submission from the contacts posting
    const contact = req.body;
    contact['timestamp'] = new Date(); //Affix a timestamp to each contact submission.
    contacts.push(contact); //Push the contact into the contacts array.

    res.render('confirm', {contact});
});

//Start a server in the designated port
app.listen(PORT, () => {
    console.log(`Server running in port http://localhost:${PORT}`);
})