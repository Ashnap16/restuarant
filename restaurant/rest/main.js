let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
// the method is used to select an element from the dom based on a specific css selector

menu.onclick = () => {
    navbar.classList.toggle('active');
}
// default method  for handling the hide and show for the selected elements
window.onscroll = () => {
    navbar.classList.remove('active');
}





//learn more

function toggleMoreContent() {
    var moreContent = document.getElementById("moreContent");
    if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
    } 
    else {
        moreContent.style.display = "none";
    }
}




//signup validation

function validation() {
 
    var user=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var pass=document.getElementById("password").value;
    var cpass=document.getElementById("cpassword").value;

    
    if( user== "") {
        alert("Enter Username*")
        return false;
    }

     if(email=="") {
        alert("Enter Email*")
        return false;
    }

    

    else if(!isvalidEmail(email)){
     alert("Enter valid Email address")
     return false;
    }
    

     if( pass=="") {
        alert("Enter your password*")
        return false;
    }
    
    else if( pass.length<6) {
        alert("Atleast 6 characters")
        return false;
    }

     if( cpass=="") {
        alert("Enter comfirm password")
        return false;
    }

    else if(pass !=cpass) {
        alert("Password doesn't match")
        return false;
    }
    alert("successfully registered")
return true    
}





function isvalidEmail(email){
    //simple emailvalidation regex
    var emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)


}
