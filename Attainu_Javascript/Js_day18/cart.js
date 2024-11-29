
export default class Cart { // default export
    constructor(){
        this.items = []
    }
    addItems(item){
        this.items.push(item);
    }
    removeItem(item){
        this.items.pop();
    }
    
}

export var someVar = 200;