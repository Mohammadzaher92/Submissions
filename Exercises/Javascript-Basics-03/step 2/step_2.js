var x = document.querySelector("p");
var y1 = document.getElementById("show");
var y2 = document.getElementById("hide");


y1.addEventListener("click",function(){ myfunction(false) });
y2.addEventListener("click",function(){ myfunction(true) });

function myfunction(isHiden){
    console.log(isHiden);
    if (!isHiden){
        x.style.display = "block";
    }
    else if (isHiden) {
        x.style.display = "none";
    }
}
