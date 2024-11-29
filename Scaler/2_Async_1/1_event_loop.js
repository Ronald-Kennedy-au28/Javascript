
// // Event Loop - website => Js Visualizer 900, jsv900

// First comes 

// 1. CALL STACK => where all codes are executed but not async ones( these are in web api)
// 2. Event Loop => event loop checks whether the call stack is empty or not,
//                     1. if empty CALL QUEUE items are pushed to CALL STACK;
//                     2. if not, waits for the CALL STACK to be empty to push CALL QUEUE
                    
// 3. Web API => this is of the browser or Node. where the async funcs are stored with timers
//                 running in the background of browser or node. 
//                 once the timer runs out the web api pushes the frist timed out function
//                 to the CALL QUEUE.
//                 the order in which the function is stored in web api doesnot matter
//                 what matters is the timed out function

// 4. CALL QUEUE => the timed out functions in web api is pushed to the  CALL QUEUE.
//                  the items in the CALL QUEUE waits till the CALL STACK IS EMPTY 
//                  and then goes to the CALL STACK 
//                  **** this co-ordination of checking the call stack and pushing the items 
//                  from call queue is done by EVENT LOOP


// **** we should never block the call stack, if blocked the browser gets crashed: 
// like : while infinite loop
// but with async func like setTimeOut can have infinite loop 