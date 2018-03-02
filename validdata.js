function storevalid(){
    var nm,pw,email,logemail,logpw;    
    nm = document.getElementById('name').value;
    pw = document.getElementById('pw').value;
    email = document.getElementById('email').value;
    confpw = document.getElementById('confpw').value;
    count  = email.indexOf("@");
    count2 = email.indexOf(".");
	todos = [];
    var InputData = localStorage.getItem('InputdataN');
    todos =JSON.parse(InputData);
    var q = 0;
    var s = 0;

	
	
    if (nm == "" || pw =="" || email =="" ){
        alert('Please Fill the details');
        return false;
        }
        else if (pw.length <6){
            alert('Password is too short!');
            return false;
           }
        else if (pw != confpw){
            alert ('The password does not match');
            return false;
        }
        else if (count == -1 || count2 == -1){
            alert('Invalid Email-id');
            return false;
        }
        else if (todos == null){
            todos = [];
            alert("You have registered successfully! ");
            store();
            return false;
        }
        else {
        //var q=0
    
		todos.forEach(element =>{
        if (element != null) {
            if(email == element.Email )
            {}
            else
            {
                s= s+1;
            }
              q=q+1;
        }
            
    });
            
           
    }
    
if (q=todos.length){
      if(s<q)  
         {
         alert('The email is used.Please use another email!');
        }
        else if (s=q){
            alert('Your account is Created');
            store();
        }
    }

 

} 
  
function loginvalid(){
    var logemail,logpw;    
    logemail = document.getElementById('logemail').value;
    logpw = document.getElementById('logpw').value;
            
    if (logemail == "" || logpw =="" ){
           alert('Please Fill the details');

     }
                
         else
            { Login();};
            
}     