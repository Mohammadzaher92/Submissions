function ValidateEmail(inputText,ObjectEnteredDate,content,message)  
{  
//alert(ObjectEnteredDate.value);
ValidateDate(ObjectEnteredDate.value);
OnlyAlphabets(content.value);
MessageContent(message.value);
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(inputText.value.match(mailformat))  
{  
// document.form1.text1.focus();  
return true; 
}  
else  
{  
alert("You have entered an invalid email address!");  
// document.form1.text1.focus();  
return false; 
}  

}

//For Date
function ValidateDate(ObjectEnteredDate){
// alert(ObjectEnteredDate);

  var EnteredDate=ObjectEnteredDate;
 
 

             var today = new Date();
 today.setHours(0,0,0,0);

 if (parseDate(EnteredDate) >= today) {
    //alert("Entered date is greater than today's date ");
    return true;
  }
             
           
              else {
                  alert("Entered date is less than today's date ");
				  return false;
             }
 }
 function parseDate(s) {
 
   var b = s.split(/\D/);
   return new Date(b[2], --b[0], b[1]);
 }
 function OnlyAlphabets(content)
 {
 var regex = /^[a-zA-Z]*$/;
   if (regex.test(content)) {

      // //document.getElementById("notification").innerHTML = "Watching.. Everything is Alphabet now";
      
   } else {
      //document.getElementById("notification").innerHTML = "Alphabets Only";
	  alert("Alphabets Only");
      
  }
 }
 function MessageContent(MsgContent)
 {
 if (MsgContent == "") {
     alert("Please enter some text into the feedback field");
     return false;
  }
  else
     return true;
 }