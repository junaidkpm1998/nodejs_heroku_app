const mymodule=require('./addmodule')
var x=60;
var y=150;
var z=mymodule.addnum(x,y);
console.log(z);
var k=mymodule.subnum(x,y);
console.log(k)
var l=mymodule.divnum(x,y);
console.log(l)
var m=mymodule.mulnum(x,y);
console.log(m)