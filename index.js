//Shopping Cart show and hide functions

function on() {
  document.getElementById("overlay").style.width = "350px";
  document.getElementById("shopping").style.display = "block";
  document.getElementById("closebtn").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.width = "0%";
  document.getElementById("shopping").style.display = "none";
  document.getElementById("closebtn").style.display = "none";
}

//call function to change navbar position

window.onscroll = function() {scrollFunction()};
   
//display register form by clicking register link

function register() {
  var form = document.getElementById("registerForm");
  if (form.style.display == "block"){
    form.style.display = "none";
  }
  else{
    form.style.display = "block";
    document.getElementById("formHeader").innerHTML = "We'll send you a confirmation email";}
}


function scrollFunction() {
var navbar = document.getElementById("nav");
var logo =  document.getElementById("logo");
var signIn = document.getElementById("signIn");
var icon = document.getElementsByClassName("btn-secondary");
var categories = document.getElementById("categories");

  
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.classList.add("fixed-top");
    logo.style.visibility = "visible";
    signIn.style.visibility = "visible";
    signIn.style.color = "white" ;
    categories.style.marginRight = "200px";

  } else {
    navbar.classList.remove("fixed-top");
    logo.style.visibility = "hidden";
    signIn.style.visibility = "hidden";
    categories.style.marginRight = "145px";
    
  }
}

