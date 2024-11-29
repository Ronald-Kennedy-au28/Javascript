
let original = {
    name : "ALice",
    details : {
        age : 30,
        hobbies : ["writing","cycling"]
    },
    greet(){
        console.log("hello")
    }
}

function deepClone(obj){
    if(obj === null || typeof obj !== "object")
        return obj;
    if(obj instanceof Array){
        let copyArr = [];
        for(let i=0; i<obj.length; i++){
            copyArr[i] = deepClone(obj[i])
        }
        return copyArr;
    }
    if(obj instanceof Object){
        let copyobj = {}
        for(let key in obj){
            copyobj[key] = deepClone[key]
        }
        return copyobj;
    }
    if(obj instanceof Function){
        return obj.bind({})
    }
}

let deepCopy = deepClone(original)