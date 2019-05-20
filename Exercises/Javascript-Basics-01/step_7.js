var shoe= parseInt(prompt("enter your shoe size"));
var birth= parseInt(prompt("enter your birth"));
var x;
function age (birth,shoe){
    return ((shoe*2 + 5) * 50 - birth + 1766);
}
age();
alert(age(birth,shoe));


