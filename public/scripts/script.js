/* Get the form element from the HTML file on submit */
 document.getElementById("contact-form").onsubmit = () => {
    
    //Create a boolean value to check the status of form validation
    let valid = true;

    /*With every press (valid) of the submit button, 
    call the wipeErrors() */
    wipeErrors();

    //Create a regular expression that tests for emails
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    /* Checks for [any string of characters] + 
    [@] + [any string of characters] + 
    [.] + [any string of characters] */

    const liRegex = /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/.*/;
    /* Checks for [https or not] + [www. or not] + [linkedin.com] +

     */

    //Create and assign variables for the form elements
    //Get the value of first name, trim and store it.
    let fname = document.getElementById("f-name").value.trim(); 
    //Get the value of last name, trim and store it.
    let lname = document.getElementById("l-name").value.trim();
    //Get the value of email, trim and store it.
    let email = document.getElementById("email").value.trim();
    //Get the value of the LinkedIn link and store it
    let linkedIn = document.getElementById("li-url").value.trim();
    //Get the value of meet-list and store it.
    let meetList = document.getElementById("meet-list").value;
    //Get the value of meet-other, trim and store it.
    let meetOther = document.getElementById("meet-other").value.trim();
    //Get the value of mail-list and store it.
    let mailList = document.getElementById("mail-list");

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

    //If the email is not the correct format...
    if ((email != "") && (!emailRegex.test(email))) {
        valid = false; //Invalidate the validation.
        //Display the error message.
        document.getElementById("error-email").style.visibility = "visible";
    }

    //If the LinkedIn link is not in the correct format...
    if (linkedIn != "" && (!linkedIn.test(linkedIn))) {
        valid = false; //Invalidate the validation.
        document.getElementById("error-li").style.visibility = "visible";
    }

    //If the there is nothing selected for "How we met section"...
    if ((meetList === "" )|| (meetOther === "")) {
        valid = false; //Invalidate the validation.
        //Display the error message.
        document.getElementById("error-meet").style.visibility = "visible";
    };

    //If the user checks mail-list and they have not provided a valid email...
    if ((mailList.checked === true) && (email === "")) {
        valid = false; //Invalidate the validation.
        document.getElementById("error-email").style.visibility = "visible";
    }

    return valid;
 };


//Function that clears out the error displays
function wipeErrors() {
    //Grab all of the error display elements
    let errorMsgs = document.getElementsByClassName("error-msg");

    //For the length of the errorMsgs nodelist
    for (let i = 0; i < errorMsgs.length; i++) {
        /*Get the element at position i in the nodelist, change
        it's visibility back to "hidden" */
        errorMsgs[i].style.visibility = "hidden";
    };
    
};

