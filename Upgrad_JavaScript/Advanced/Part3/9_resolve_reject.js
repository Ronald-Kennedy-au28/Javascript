
// Success
// When the result of the producer code is success, the resolve() callback is
//  invoked to resolve the promise object.

// Failure
// When the result of the producer code is failure, the reject() callback is 
// invoked to reject the promise object.

// At this point, you know about the internal properties of the promise object
//  and you also know when the resolve() and reject() callbacks are invoked depending 
//  on the result of the producer code. Now is the time to look at the relation
//  between the internal properties of the promise object and the resolve() & reject()
//   callbacks. You’ll look at them in the next video with Srishti.


// 1.If the promise is resolved and the following method is invoked inside the producer code:

// resolve(val); // resolving a promise with some value

// The properties of the promise object change as:

// Status = ‘resolved’

// Value = val

// Status property is set from ‘pending’ to ‘resolved’ and the Value property is set from 
// undefined to val passed in as an argument while invoking the resolve(val) callback.
 

// 2.If the promise is rejected and the following method is invoked inside the producer code:
// reject(err); // rejecting a promise with some error

// The properties of the promise object change as:

// Status = ‘rejected’

// Value = err

// Status property is set from ‘pending’ to ‘rejected’ and the Value property is set from undefined 
// to err passed in as an argument while invoking the reject(err) callback.