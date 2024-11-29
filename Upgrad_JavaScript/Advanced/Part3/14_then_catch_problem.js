/**
 * Function to check whether the given email is valid or not
 * Prints "VALID Email" if the email is valid; prints "INVALID Email" if the email is invalid
 * @param {*} email 
 */
const isValid = email => {
    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    console.log(regex.test(String(email).toLowerCase()) ? "VALID Email!" : new Error("INVALID Email!"));
}

/* DONE 1: Created a promise with the producer code which gets the given email in the question from the server
    Mock this functionality of getting email from server using a setTimeout() method which returns this email after 2 seconds as the response from the server.
*/
let promiseObj = new Promise((resolve, reject) => {
    let email = null;
    setTimeout(() => {
        email = "srishti.gupta@upgrad.com"
        // DONE 2: Inside the producer code, invoked the resolve() callback while passing in the given email in the question as the argument
        resolve(email);
    }, 2000);
});

// DONE 3: Defined the consumer(s) using either of the two approaches
promiseObj.then((email) => {
    // DONE 4: Printed the email received from the producer code while resolving the promise in the format given in the question
    console.log(`Email = ${email}`);
    // DONE 5: If the promise is resolved (meaning that the email was fetched from the server successfully), invoked the isValid() method (given above) to print whether the received email is valid or not
    isValid(email);
}).catch((err) => {
    console.log(err);
});