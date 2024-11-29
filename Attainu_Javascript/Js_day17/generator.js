
// generators

// please learn from somewhere else
// moreover iterators and generators are not that important

function* getGenerators(){
    let count = 1;
    while(true){
        if(count == 5) return count;
        yield count;// means takes a copy of count
        count++
    }
}

let it = genFunction();
it.next()// gives the next count
for (i of it){
    console.log(i)
}