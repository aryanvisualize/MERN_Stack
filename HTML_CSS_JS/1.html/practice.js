function a() {
  var a = 10;
  console.log(a);
  console.log(b);

  function b() {
    console.log(a);
    var b = 10;
  }
  b();
}
a();    


let name = "vikas";
let a = 50;
var b = 40;

function outer() {
  let a = 10;
  var b = 50;
  console.log(a, b);

  function inner() {
    console.log(a, b, c);
  }
  let c = 10;

  inner();
}
outer();