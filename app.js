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

//Define the default route ("/")
app.get('/', (req, res) => {
    //In response to the request, send the html file at the directory.
    res.render("home")
    // res.sendFile(`${import.meta.dirname}/views/home.html`);
});

//Start a server in the designated port
app.listen(PORT, () => {
    console.log(`Server running in port http://localhost:${PORT}`);
})