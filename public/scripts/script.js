/* Get the form element from the HTML file on submit */
 document.getElementById("contact-form").onsubmit = () => {
    
    //Create a boolean value to check the status of form validation
    let valid = true;

    //Create a regular expression that tests for emails
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    /* Checks for [any string of characters] + 
    [@] + [any string of characters] + 
    [.] + [any string of characters] */

    //Create and assign variables for the form elements
    //Get the value of first name, trim and store it.
    let fname = document.getElementById("f-name").value.trim(); 
    //Get the value of last name, trim and store it.
    let lname = document.getElementById("l-name").value.trim();
    //Get the value of email, trim and store it.
    let email = document.getElementById("email").value.trim();
    //Get the value of meet-list and store it.
    let meetList = document.getElementById("meet-list").value;
    //Get the value of meet-other, trim and store it.
    let meetOther = document.getElementById("meet-other").value.trim();

    /* Validate the first name entry */

    // If the first name input has no entry...
    if (fname === "") {
        valid = false; //Invalidate the validation.
        //Display the error message.
        document.getElementById("error-f-name").style.visibility = "visible";
    }

    //If the last name input has no entry...
    if (lname === "") {
        valid = false; //Invalidate the validation.
        //Display the error message.
        document.getElementById("error-l-name").style.visibility = "visible";
    }

    //If the email is not a in the correct format
    if ((email != "") && (!emailRegex.test(email))) {
        valid = false; //Invalidate the validation.
        //Display the error message.
        document.getElementById("error-email").style.visibility = "visible";
    }

    return valid;
 };

