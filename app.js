/* Import the node express module */
import express from 'express';

/* Import the mysql2 module */
import mysql2 from 'mysql2'
/* Import the donenve module */
import dotenev from 'dotenv'
dotenev.config();

//Create an instance of an Express application
const app = express();

const pool = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
}).promise();

//DB test route
app.get('/db-test', async(req, res) => {
    try {
        //Get the contacts from the database query and store it to contacts
        const contacts = await pool.query('SELECT * FROM Contacts')
        //Send the data from contacts to the browser as JSON data.
        res.send(contacts[0]);
    } catch (error) {
        console.log("Database error", error);
        res.status(500).send(`Database error ${error.message}`)
    }
})

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
app.get('/admin', async(req, res) => {
    try {
        //Attempt to fetch the contacts table from the database
        const contacts = await pool.query(`SELECT * FROM Contacts ORDER BY FirstName DESC`);
        console.log(contacts[0]);

        //Render the table onto the admin page
        res.render('admin', {contacts : contacts[0]})
    } catch (error) {
        console.log("Database error", error);
        res.status(500).send(`Database error ${error.message}`) 
    }
})

//Add a route to the resume page
app.get('/resume', (req, res) => {
    res.render('resume')
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