/**
 * Created by mathew on 15. 1. 13..
 */
function A(){
    this.name = "JH";
}

A.prototype = {
    getM: function() {
        return "a";
    }
};

a = new A();

console.log(a.getM());
console.log("HELLO");
