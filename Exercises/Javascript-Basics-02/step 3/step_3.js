var x = document.createElement('div');
var y= document.querySelector("div");
document.body.appendChild(x);

var z= document.querySelector("input");
z.addEventListener("keyup",popcorn);
function popcorn (){
x.innerHTML=z.value;

}

