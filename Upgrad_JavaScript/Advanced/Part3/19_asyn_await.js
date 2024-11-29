
// When a promise is resolved, the result passed in as an argument while resolving the promise 
// is held inside the variable which waits for the promise object to be settled (either resolved 
//     or rejected).

// The best practice is to wait for the promise in the try block using the await keyword and 
// have a catch block to handle the error(s), if any.

// The await keyword can only be used for a promise and thus, can be prepended to a promise 
// object only.


// defining the async function which waits for the promise to be resolved / rejected
const getName = async () => {
    try {
        let name = await namePromise;
        console.log(`Name received from DB = ${name}`);
    } catch (err) {
        console.log(err);
    }
}

// defining the promise object with the producer
let namePromise = new Promise((resolve, reject) => {
    console.log("Getting name from DB...");
    setTimeout(() => {
        resolve("Srishti");
    }, 3000);
});

getName();