var nm = document.getElementById('name');
var pw = document.getElementById('pw');
var email = document.getElementById('email');
var logemail = document.getElementById('logemail');
var logpw = document.getElementById('logpw');
var todos = [];

var cpw = document.getElementById('oldpw');
var confoldpw = document.getElementById('confoldpw');
var newpw = document.getElementById('newpw');
var todos2 = [];


function store() { 
    
        todos.unshift({
        Username : nm.value,
        Password : pw.value,
        Email : email.value
            
        });
    
   
    localStorage.InputdataN = JSON.stringify(todos);
    getdata();
}

function getdata(){
    if(localStorage.InputdataN != null){
        array = JSON.parse(localStorage.InputdataN)
        console.log(array);
    }
    
    
    var InputData = localStorage.getItem('InputdataN');
    todos =JSON.parse(InputData);
    console.log(localStorage.length);
    console.log(InputData);

    if(!todos){
        todos =[];
    
    }

}

function storeuserinfo(element){

    console.log(element);
    localStorage.Logineduser = JSON.stringify(element);         

     }  

function getstoreuserinfo(){
        
    var InputData = localStorage.getItem('Logineduser');
    todos2 =JSON.parse(InputData); 
    console.log(todos2);
     }  




function Login(){
    Logincheck(logpw,logemail);
}

function Logincheck(logpw,logemail){
        
        if (localStorage.InputdataN != null) {
        todos = JSON.parse(localStorage.InputdataN);
        console.log(logemail.value); 
        console.log(todos);     
        var x=0;
        //var y=0;        
        todos.forEach(element =>{
        if (element != null) {
            if(logemail.value == element.Email ){
                if(logpw.value == element.Password ){
                    console.log(element);
                    storeuserinfo(element);
                    //alert('You are login Successful!');
					changestyle();

                    return false;
                }else
                     x=x+1; 
            }else{
                x=x+1;
            }
        if (x==todos.length){
            if(logemail.value == element.Email || logpw.value == element.Password){
                
                if(logpw.value !== element.Password || logpw.value !== element.Password  ){
                    alert('Wrong Email or Password! ');
                    return false;
                    }
                }   
            else{alert('You do not have register! ')};
            
            }
        }
        });
    }
}

function changestyle(){
	
	var logincreate = document.getElementById("logincreate");
	
	logincreate.setAttribute("class", "active");
	
	var change = document.getElementById("change");
	change.setAttribute("class", "active");
	change.id ="x"
}



//change password
function changepw(){
    getstoreuserinfo();
    console.log(todos2);
    
    if (cpw.value== "" || confoldpw.value =="" || newpw.value =="" ){
        alert('Please Fill the details');
        }
        else if (cpw.value != confoldpw.value ){
                alert ('The password does not match');
            }
            else if ( cpw.value !=todos2.Password ){
                    alert ('The old password you type wrong');
                }
    else
        {
            todos2.Password = newpw.value;
			console.log(todos2);
			localStorage.Logineduser = JSON.stringify(todos2);
            todos.forEach(element =>{
                if (element != null) {
                        if (element.Email == todos2.Email & todos2.Username == element.Username) {
							element.Password = todos2.Password;
                            localStorage.InputdataN = JSON.stringify(todos);
                            console.log(todos);
							alert ('You have change password! ')
                        }
                }

          });  
        }
}




$(document).ready(function(){
    getdata();
    

} );



