
bind() //method:

var person = {
 firstName: "Sakshi",
 lastName: "Jain",
 get: function() {
   console.log("Outer: " + this.firstName + " " + this.lastName);
   var print = function() {
     console.log("Inner: " + this.firstName + " " + this.lastName);
   }.bind(this, "Developer", "JavaScript");
   print();
 }
};

person.get();


call() //method:

var person = {
 firstName: "Sakshi",
 lastName: "Jain",
 get: function() {
   console.log("Outer: " + this.firstName + " " + this.lastName);
   var print = function(role, language) {
     console.log(role, language);
     console.log("Inner: " + this.firstName + " " + this.lastName);
   }.call(this, "Developer", "JavaScript");
 }
};

person.get();


apply() //method:

var person = {
 firstName: "Sakshi",
 lastName: "Jain",
 get: function() {
   console.log("Outer: " + this.firstName + " " + this.lastName);
   var print = function(role, language) {
     console.log(role, language);
     console.log("Inner: " + this.firstName + " " + this.lastName);
   }.apply(this, ["Developer", "JavaScript"]);
 }
};

person.get();
 //All the above code snippet give the same output, as follows:

//Output:

// Outer: Sakshi Jain
// Developer JavaScript
// Inner: Sakshi Jain

// PROBLEMS********

/* DONE 1: 
A. Defined a function with identifier greetParticipants
B. Passed the scope of the team object to greetParticipants function using bind() method
C. The function greetParticipants prints the message to welcome both participants defined in the team object on the console, as shown in Problem Statement
*/
var team = {
  participantOne: "Srishti",
  participantTwo: "Prateek",
  print: function () {
      var greetParticipants = function (p1, p2) {
          var message = "Welcome ";
          message += p1 + " " + p2;
          console.log(message);
      }.bind(this, this.participantOne, this.participantTwo);
      greetParticipants();
  }
}

team.print();


/* DONE 2: 
A. Defined a function with identifier greetParticipants
B. Passed the scope of the team object to greetParticipants function using call() method
C. The function greetParticipants prints the message to welcome both participants defined in the team object on the console, as shown in Problem Statement
*/
var team = {
  participantOne: "Srishti",
  participantTwo: "Prateek",
  print: function () {
      var greetParticipants = function (p1, p2) {
          var message = "Welcome ";
          message += p1 + " " + p2;
          console.log(message);
      }.call(this, this.participantOne, this.participantTwo);
  }
}

team.print();


/* DONE 3: 
A. Defined a function with identifier greetParticipants
B. Passed the scope of the team object to greetParticipants function using apply() method
C. The function greetParticipants prints the message to welcome both participants defined in the team object on the console, as shown in Problem Statement
*/
var team = {
  participantOne: "Srishti",
  participantTwo: "Prateek",
  print: function () {
      var greetParticipants = function (p1, p2) {
          var message = "Welcome ";
          message += p1 + " " + p2;
          console.log(message);
      }.apply(this, [this.participantOne, this.participantTwo]);
  }
}

team.print();