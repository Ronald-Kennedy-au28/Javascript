
let zoo ={
    name :"Amazing Zing",
    location:"Australia",
    animals:[
        {species:"Lion",favTreat:"Meat"},
        {species:"Panda",favTreat:"Leaves"}
    ]
}
// need to have a copy of "zoo"

let zoo2 = zoo 
// this does not make a copy rather creates a new pointer "zoo2" in stack
// which points the same address as of the "zoo"
// therefore, there are 2 pointers in stack which points the same address in the heap

// solution
let zoo3 = {...zoo} // shallow copy
// this creates a new pointer in the stack and points a unique address in the heap
zoo.animals[0].species = "Tiger"
// the above changes are reflected in both the zoo and zoo2 bcoz of shallow copy
// Shallow copy is having different address for the outer elements
// but for the inner elements the address is shared, therefore changes happen in both inner elements

// solution
let deepCopyZoo = JSON.parse(JSON.stringify(zoo))
// when we convert the zoo to string it becomes a primituve type with memory in stack
// then when we parse, a fresh memory in heap is created with a pointer in the stack
deepCopyZoo.animals[0].species = "Tiger" // now changes only in copy and not in zoo

