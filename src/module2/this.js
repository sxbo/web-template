var fn = function(){
    console.log(fn);
}

fn(); //fn

var obj = {
    fn:function(){
        console.log(fn);
    }
}

obj.fn(); //err : fn is not defined

var obj2 = {
    fn2:function() {
        console.log(obj2.fn2) //this.fn2
    },
}

obj2.fn2(); //fn2

