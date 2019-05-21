var pic1 =document.querySelector('#image1');
var pic2 =document.querySelector('#image2');
var pic3 =document.querySelector('#image3');
var pic4 =document.querySelector('#image4');
var pic5 =document.querySelector('#image5');

pic1.addEventListener('mouseover', myFunction)
pic2.addEventListener('mouseover', myFunction)
pic3.addEventListener('mouseover', myFunction)
pic4.addEventListener('mouseover', myFunction)
pic5.addEventListener('mouseover', myFunction)

function myFunction(ev){
    if (ev.target.id == "image1")
    {    ev.target.src = "images/image1_2.jpg" 
    
var pic1 =document.querySelector("image1")
}
else if(ev.target.id == "image2"){
ev.target.src = "images/image2_2.jpg"
    
}
else if (ev.target.id == "image3"){
    ev.target.src ="images/image3_2.jpg"
}
else if (ev.target.id == "image4"){
ev.target.src = "images/image4_2.jpg"
}

else if (ev.target.id== "image5")
{
    ev.target.src = "images/image5_2.jpg"
}
}


pic1.addEventListener('mouseout', myFunction1)
pic2.addEventListener('mouseout', myFunction1)
pic3.addEventListener('mouseout', myFunction1)
pic4.addEventListener('mouseout', myFunction1)
pic5.addEventListener('mouseout', myFunction1)

function myFunction1(ev){
    if (ev.target.id == "image1")
    {    ev.target.src = "images/image1.jpg" 
    
var pic1 =document.querySelector("image1")
}
else if(ev.target.id == "image2"){
ev.target.src = "images/image2.jpg"
    
}
else if (ev.target.id == "image3"){
    ev.target.src ="images/image3.jpg"
}
else if (ev.target.id == "image4"){
ev.target.src = "images/image4.jpg"
}

else if (ev.target.id== "image5")
{
    ev.target.src = "images/image5.jpg"
}
}