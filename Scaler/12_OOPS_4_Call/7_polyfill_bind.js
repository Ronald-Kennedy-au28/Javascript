
function greet(place){
    console.log(`Hi ${this.name}`)
    console.log(place)
}

const person = {
    name : "Ron",
    age : 30
}

Function.prototype.myBind = function(obj,...boundArgs){
    const myfxn = this  /// bcoz using this in line 14 will result in global object and not the instance
    return function(...args){
        return myfxn.call(obj,...boundArgs,...args)
    }
}

const bindedFxn = greet.bind(person,"Bangalore")
bindedFxn()