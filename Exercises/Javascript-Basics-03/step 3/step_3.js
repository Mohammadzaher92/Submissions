// var x = document.querySelector(".red");
// var y = document.querySelector(".green");
// var z = documetn.querySelector(".blue");
// var p1 =document.getElementById("text");
// x.addEventListener("click",r);
// function r(){
//     p1.style.color = "red";
// }
var x = document.querySelector('.red');
var y = document.querySelector('.blue')
var z = document.querySelector('.green')
var p =document.getElementById('text');
x.addEventListener('click',function(){
    p.style.color='red';
})
y.addEventListener("click",function(){
    p.style.color="blue";

})
z.addEventListener("click",function(){

    p.style.color="green";
})
