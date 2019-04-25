
/**
 * 箭头函数中的this
 */
var obj = {
    y: function() {
        console.log(this === obj) //true
  
        var getX = () => {
            console.log(this === obj) //true
            //箭头函数包含箭头函数，最里边的箭头函数任然可以吧最外层的this引入进来
            var arrrowinArrow = ()=>{
                console.log(this === obj); //true
            }
            arrrowinArrow();

            //箭头函数里边的普通函数的this为global
            var fun =function (){
                console.log(this === global) //ture
                console.log(this === obj); //false
                var fun1 = ()=>{
                    console.log(this == global); //true
                    console.log(this ===obj); //false
                }
                fun1();
            };
            fun();
        }
        getX()
    }
  }
  
  obj.y();



  function Person() {
      this.name = "bob"
      console.log(this);
      function say(){
        console.log(this.name+"-----");
      }
      say();
  }

  //函数直接调用和new 操作，里边的this不同
  console.log(Person()+"**********");
  console.log(new Person().name);