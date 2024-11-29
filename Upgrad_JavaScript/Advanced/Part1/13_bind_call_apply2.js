

/// mcq

// bind(), call(), apply() methods
// Choose the option which correctly displays the output of the code snippet given below:

var laptop = {
    company: "Apple",
    model: "Macbook Air",
    os: "macOS",
    set: function (company, model, os) {
        var setCompany = function (company) {
            this.company = company;
        }.bind(this, company);
 
        var setModel = function (model) {
            this.model = model;
        }.bind(this);
 
        var setOS = function (os) {
            this.os = os;
        }
 
        setCompany();
        setModel();
        setOS();
    },
    get: function() {
        console.log(this.company, this.model, this.os);
    }
};

laptop.set("Dell", "Inspiron", "Windows");
laptop.get();

// output

// Company = Dell 
// Model = undefined 
// OS = macOS

// ✓ Correct
// Feedback:
// The method set() inside the laptop object is called while passing in parameters “Dell”, 
// “Inspiron” and “Windows” as company, model and os respectively. 

// Now, inside the set() method, the function setCompany() is defined after binding the scope of
//  “this”, which refers to the laptop object. The company is also passed as an argument inside 
//  the bind() method. The setCompany() function successfully updates the company of the laptop
//   object to “Dell”. 

// The setModel() function inside the get() method binds the scope of the laptop object to itself.
//  Thus, this.model is defined inside the setModel() function but the argument model is not passed
//   inside the bind() method. This is why, the argument model is undefined inside this function. 
//   Thus, setModel() function sets the value of model to undefined. 

// Next comes the setOS() function inside the get() method. This function does not has the bind() 
// method. Now, since it is a regular function call, the ‘this’ keyword inside this function points 
// to the global object which is the window object. Inside the setOS() function, a key named ‘os’
//  is created and attached to the window object, setting its value to undefined, because the os 
//  argument is not passed to this function and thus, the parameter os contains the default value
//   undefined. Note that the key os is anyways added to the global object and even if there had 
//   been any value passed as an argument to the setOS() method, this would have made no impact 
//   on the key named ‘os’ in the laptop object.

// All the functions - setCompany(), setModel() and setOS() are called inside the get() method,
//  which do the required job, as explained earlier.

// Now, the get() method is called which prints the value of the object’s keys - company as “Dell”,
//  model as undefined and os as “macOS”. Thus, this option is the correct choice.