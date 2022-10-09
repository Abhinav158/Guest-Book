//Obtain both elements by ID 
const fullName = document.getElementById('full-name');
const emailID = document.getElementById('email-id');

//console.log(fullName, emailID) works 

//Validate Full name and email ID using JavaScript Regex
fullName.addEventListener('blur', ()=>{
  // console.log('Name is blurred');
  const validateName = /[A-Z][a-z]*?[ ][A-Z][a-z]*/
  let strName = fullName.value;
  console.log(strName, validateName);
  if(validateName.test(strName)){
    // console.log('Match!');
    fullName.classList.remove('invalid-feedback');
    fullName.classList.add('change');     
  }
  else{
    // console.log('Invalid input');
    fullName.classList.remove('change');
    fullName.classList.add('invalid-feedback');
  }
})

emailID.addEventListener('blur', ()=>{
  // console.log('Email is blurred'); 

  const validateEmail = /^\w+([\.-]?\w+)*@nitk.ac.in$/
  let strEmail = emailID.value;
  console.log(strEmail, validateEmail);
  if(validateEmail.test(strEmail)){
    // console.log('Match!');
    emailID.classList.remove('invalid-feedback');
    emailID.classList.add('change');     
  }
  else{
    // console.log('Invalid input');
    emailID.classList.remove('change');
    emailID.classList.add('invalid-feedback');
  }

})

// // Function to validate credentials of user submitting form 
// function validateCredentials(){

//   // Validate user email ID using RegEx
//   const validateEmail = /^\w+([\.-]?\w+)*@nitk.edu.in$/
  
//   //Perform tests  
//   if(validateEmail.test(emailID)==="false"){
//     alert('Please enter a valid email ID!');
//     return false;
//   }
//   else{
//     alert('Successfully Submitted');
//     return true;
//   }
    
// }

// //alternate

// const form = document.querySelector('#myForm');
// const input = document.querySelector('#email-id');
// const output = document.querySelector('#output');

// const re = /^\w+([\.-]?\w+)*@nitk.edu.in$/;


// function testInfo(emailInput) {

//   const ok = re.exec(emailInput.value);

//   output.textContent = ok
//     ? 'Successful': 'Invalid Email';
// }

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   testInfo(input);
// });