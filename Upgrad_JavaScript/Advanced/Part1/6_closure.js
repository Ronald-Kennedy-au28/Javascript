function modifyItem() {
    var items = 0;
 
    return {
        add: function() {
            console.log("Added item to cart!");
            items++;
        },
 
        getCount: function() {
            return "Items in cart = " + items;
        }
    }
 }
 
var item = modifyItem();

item.add();
console.log(item.getCount()); // prints 1

item.add();
item.add();
console.log(item.getCount()); // prints 3

//2

function createEmployeeID() { 
	var prefix = "employee"; 
	var generateID = function() { 
		for (var i = 0; i < 5; i++) { 
			console.log(prefix + i); 
		} 
	} 
	return generateID; 
    // here returning generateId is like invoking generateId()
    // i think it stores the value 
} 
var print = createEmployeeID(); 
print();// prints => employee0 employee1 employee2 employee3 employee4


//3

var generateID = function() {
    // DONE 1: Declared & initialized variable named prefix with value "uid-"
    var prefix = "uid-";
    // DONE 2: Declared & initialized variable named count with value 0
    var count = 0;

    return function() {
        count++;
        return prefix + count;
    }
}

var create = generateID();
console.log(create());
console.log(create());
console.log(create());