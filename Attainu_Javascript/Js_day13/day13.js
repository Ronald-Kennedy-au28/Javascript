
// Destructuring

const arr = [ "ron",28 ,"BCA"];

function getdata(hag){
    const [name,age,degree] = hag;
    console.log(name,age,degree);
}
getdata(arr);


const obj = {
    paisa: "hindi",
    kaasu: "tamil",
    dabbu: "telugu"
};
function money(rapay){
    const { paisa,dabbu}= rapay;
    console.log(paisa , dabbu)
};
money(obj);

// __proto__ , prototype

/// creating class

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    get(){
        console.log(this.name +this.age);
    }
}

// creating a new object with class

var jak = new Person("ara", 45);

class students extends Person{
    constructor (name,age){
        super(Person)
    }

}