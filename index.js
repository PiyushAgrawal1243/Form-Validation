
const Form =document.getElementById("survey-form");
const Name = document.getElementById("name");
const Email =document.getElementById("email");
const Password =document.getElementById("password");
const Repassword =document.getElementById("repassword");
const Phone =document.getElementById("number");
const dateTime=document.getElementById("date-time");
const dropDown =document.getElementById("dropdown");






var noOfData=[];
var Time=[];


const checkName = ()=>{

    var name=Name.value.trim();

    console.log(name);
    console.log(name.toUpperCase());
        if(name==null || name==undefined || name == "")
    {
        // alert("Name should not we null , undefine and empty");
      Name.setCustomValidity("Name should not we null , undefine and empty");
      Name.classList.add('Invalid')
        return false;
    }
    else if(name!=name.toUpperCase())
    {
       // alert("Name should be in Upper case");
    Name.setCustomValidity("Name should be in Upper case");
    Name.classList.add('Invalid')
        return false;
    }
    else{
        Name.classList.remove('Invalid');
        Name.setCustomValidity('');
        
    }
   
    return true;

}


const checkEmail=()=>{

    var regex = /^[A-Z0-9_-]+([\.][A-Z0-9_]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,3})+$/i;
    var email =Email.value.trim();
    if(email=="" || email==null || email==undefined)
    {
        //  alert("Email field should not be empty ");

        Email.setCustomValidity("Email field should not be empty.");
        Email.classList.add('Invalid');
        return false;
    }
    else if(!regex.test(email))
    {
       // alert("Please enter valid email address");

        Email.setCustomValidity("Please enter valid email address");
        Email.classList.add('Invalid');
        return false;
    }
    else{
        Email.setCustomValidity('');
        Email.classList.remove('Invalid');
        return true;
    }

    

}


const checkPassword=()=>{

    var passwordregex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    var password = Password.value.trim();
    if(password == null || password==undefined || password=="")
    {
      //  alert("Please enter valid password");

      Password.setCustomValidity("Please enter valid password");
      Password.classList.add('Invalid');
        return false;
    }
    else if(!passwordregex.test(password))
    {
      //  alert("Password must be 10 digit long it conatin 1 special character , i capital letter and 1 digit.")
      Password.setCustomValidity("Password must be 10 digit long it conatin 1 special character , i capital letter and 1 digit.");
      Password.classList.add('Invalid');
        return false;
    }
    else
    {

      Password.setCustomValidity('');
      Password.classList.remove('Invalid');
      return true;
    }


}

const checkRepassword=()=>{
    var repassword=Repassword.value.trim();
    if(repassword==null || repassword==undefined || repassword=="")
    {
       // alert("Repassword field should not be empty.");

      Repassword.setCustomValidity("Confirm Password field should not be empty.");
      Repassword.classList.add('Invalid');
        return false;
    }
    else if(repassword!==Password.value)
    {
      //  alert("Password and confirm password should be same.")
      
      Repassword.setCustomValidity("Password and confirm password should be same.");
      Repassword.classList.add('Invalid');
        return false;
    }
    else{

      Repassword.setCustomValidity("");
      Repassword.classList.remove('Invalid');
    return true;
    }
}

const checkNumber=()=>{
    var number=Phone.value.trim();
    var numberRegex= /^[6-9]\d{9}$/;
    if(number==null || number==undefined || number=="")
    {
       // alert("Phone No. field should not be empty");

      Phone.setCustomValidity("Phone No. field should not be empty.");
      Phone.classList.add('Invalid');
        return false;
    }
    else if(!numberRegex.test(number)){
      //  alert("Please enter a valid phone no.");

      Phone.setCustomValidity("Please enter a valid phone no.");
      Phone.classList.add('Invalid');
    return false;

    }
    else {

      Phone.setCustomValidity("");
      Phone.classList.remove('Invalid');
    return true;
    }

}


const changeDate=()=>{

  const date=dropDown.value;
  Time.push(date);
  console.log(Time);
}


Form.addEventListener("submit", function(event){
  event.preventDefault()
});

const submitData=()=>{
  
if(checkName() && checkEmail() && checkPassword() && checkRepassword() && checkNumber())
{
  console.log(Time);
 var  data=
  {
    name:Name.value,
    email:Email.value,
    countrySwitch:Time,
    number:Phone.value,
    "date time":dateTime.value,
    "Current Country":dropDown.value,

  }
noOfData.push(data);

var tr1="";
for(var i=0;i<data.countrySwitch.length-1;i++)
{
  tr1+=data.countrySwitch[i]+"\n";
  
}

var tbody = document.getElementById('table');


    var tr = "<tr class='close' >";

    tr += "<td>" + data.name + "</td>"
     + "<td>" + data.email + "<td>"+data.number+"</td>"+
     "</td>" +"<td>"+data["date time"] +
     "</td>" + "<td>"+ data["Current Country"]+
     "</td>"+"<td>"+tr1+"</td>"+"<td  onClick='hide();' >"+"x"+"</td>"+"</tr>";

    /* We add the table row to the table body */
    tbody.innerHTML += tr;

    
}
}

const hide=()=>{

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var tr = this.parentElement;
    tr.style.display = "none";
  }
}
}
