function showMessage() {

  let email = document.querySelector("input").value;

  if(email === ""){
    alert("Please enter your email!");
  }
  else{
    alert("Welcome to Netflix Clone, " + email);
  }
}

let signInBtn = document.querySelector(".signin-btn");

signInBtn.addEventListener("click", function(){
  alert("Sign In page coming soon!");
});