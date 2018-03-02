var forname = document.getElementById('forname');
var foremail = document.getElementById('foremail');

function Forgotpw(){
    getdata();
    var r=0;    
    console.log(forname);
    todos.forEach(element =>{
        console.log(todos.length);
        if (element != null) {
            if(foremail.value == element.Email ){
                if(forname.value == element.Username ){
                    alert('The pw is ' + element.Password);

                    return false;
                }else
                     r=r+1; 
            }else{
                r=r+1;
            }
        if (r==todos.length){
           alert('Do not have this record!! ')};
            
            } 
     });    
    
}