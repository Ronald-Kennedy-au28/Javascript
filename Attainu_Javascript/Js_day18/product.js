
class Product{
    constructor(kaam,cat){
        this.kaam = kaam;
        this.cat = cat;
    }
    get cat(){
        return this.cat;
    }
    get kaam(){
        return this.kaam;
    }
    set cat(kit){
        this.cat = kit;
    }
    set kaam(peru){
        this.kaam = peru;
    }
}

var someVar = 100;

export {Product,someVar};
// we can export two ways 
// having the keyword "export" before the object or
// like above putting them in brackets