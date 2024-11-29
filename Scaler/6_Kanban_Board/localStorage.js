
// LOCAL STORAGE 

// Local storage is available in "window" object

// To access Local storage in dev's tool => Application: as "key"-"value" pair
// whatever datatype you pass to the local storage, will stored in string 
// if non-primitive datatypes like array and obj is passed, data is lost in the process of converting to string

// therefore we need to use => JSON.stringfy(obj)
// later need to convert back to its original => JSON.parse(stringifiedObj)
