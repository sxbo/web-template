import './style.css';

class Person {
    constructor(props){
        this.name = "xiaobo";
    }
}
;(function(){
    let person = new Person("adff");
    console.log(person);
    document.getElementById("template").innerHTML = "hello word";
})();