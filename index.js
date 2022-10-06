// Function to validate credentials of user submitting form 
function validateCredentials(){

  // Validate user email ID using RegEx
  const validateEmail = /^\w+([\.-]?\w+)*@nitk.edu.in$/
  let emailID = document.getElementById("email-id").innerHTML;

  //Perform tests  
  if(!validateEmail.test(emailID)=="true"){
    alert('Please enter a valid email ID!');
  }
  else{
    alert('Successfully Submitted');
  }
    
}