
// CLOSURE

// in closure , it is basically about the scope of var and func

function flip(){
    var gad = "beautiful"; /// this var can be used in flop() and slap
    console.log(gad)                   // acts like global
    flop();
    function flop(){
        var jar = "amazing";  // this can used in slap()not in flip()
        console.log(gad+jar);
        console.log(jar+gad)
        slap();
        
        
        function slap(){
            var dar = "decent";// this can be used in only:slap()
            console.log(jar+gad+dar);
            
        }
    }
}
flip();

function EnitCart(){
    var AotalAmount = 0;

    function addAmount(amount){
        AotalAmount+=amount;
        var bcd = "Pathaan";
        console.log(doSomething);
        doSomething();
        function doSomething(){
            var abc = "varisu" + bcd;
            console.log(AotalAmount);
            console.log(abc);

        }
        return doSomething;
    }
    addAmount(100);
}

EnitCart();