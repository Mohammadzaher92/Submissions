function validate(form_id,email) {
   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   var address = document.forms[form_id].elements[email].value;
   if(reg.test(address) == false) {
      alert('Invalid Email Address');
      return false;
   }
}

function validate_name(form_id,email,name,password) {
   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   var reg2 = /^([A-Za-z0-9_\-\.])/ 
   var address = document.forms[form_id].elements[email].value;
   var fname = document.forms[form_id].elements[name].value;
   var password = document.forms[form_id].elements[password].value;
   
   if(reg.test(address) == false) {
      alert('Invalid Email Address');
      return false;
   }else if(reg2.test(fname) == false){
   		alert('Fill in a name !');
      return false;
   }
   else if(reg2.test(password) == false){
   		alert('Fill in a password !');
      return false;
   }
}