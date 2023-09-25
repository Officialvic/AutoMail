var biometricInfo = document.getElementById('biometric');
// inventoryItems.setAttribute('class', 'blueTheme')
function addItem(e) {
e.preventDefault();
let clientForm = document.forms['clientForm'];

// let biometricInfo = document.getElementById('firstName').value

// Getting data through the formData

let data = new FormData(clientForm);

// data.get('firstName')

let row = biometricInfo.insertRow();

// row.insertCell().innerHTML = data.get('firstName');
// row.insertCell().innerHTML = data.get('lastName');
// row.insertCell().innerHTML = data.get('email');
// row.insertCell().innerHTML = data.get('phonenumber');
// row.insertCell().innerHTML = data.get('gender');
// row.insertCell().innerHTML = data.get('program');

// Iterate through each of the form elements
for (let [key, value] of data) {
row.insertCell().innerHTML = data.get(key);
}
}
var biometricInfo = document.getElementById('biometric')
// Create function to add new contact details
function addItem(e) {
e.preventDefault();

let clientForm = document.forms['clientForm']
let data = new FormData(clientForm);
let row = biometricInfo.insertRow();

for (let [key, value] of data) {
    row.insertCell().innerHTML = data.get(key);
}

errorHandler(e);
errorHandlerEmail(e);
errorType(e);
}


function applyTheme () {
//     let selectedTheme = document.getElementById('themes')

    // let selectedTheme = document.getElementById('themes')
    let selectedBgColor = document.getElementById('color')
    let selectedBgWidth = document.getElementById('width')
    // selectedTheme.style.backgroundColor = 'red'
    biometricInfo.setAttribute('class', 'changeTheme')
    biometricInfo.style.backgroundColor = selectedBgColor.value
    biometricInfo.style.width = selectedBgWidth.value
    // if(selectedTheme.value == "blue") {
    //     biometricInfo.setAttribute('class', 'blueTheme')
    // }else {
    //     biometricInfo.setAttribute('class', 'redTheme')
    // } 
}
//     console.log(selectedTheme.value)


// Handle PhoneNumberError
function errorHandler(e) {
    try {
        // Collect form data
        // const name = document.getElementById('name').value;
        const phoneNmuber = parseInt(document.getElementById('phonenumber').value);
      
        // Validate data
        if (isNaN(phoneNmuber)) {
          throw new TypeError('Phone Number must be a number');
        }

      
      } catch (e) {
        // Handle errors
        alert('Enter correct Phone number')
        // Redirect to a new HTML page
        // window.location.href = 'error.html'; // Replace 'error.html' with the desired page URL
      }
}

// HandleEmailErrors
function errorHandlerEmail(e) {
    try {
        // Collect form data
        validateEmail(email)
        const email = document.getElementById('email').value;
        const isValid = validateEmail(email);
        
        if(isValid != true) {
            throw new TypeError("Invalid Email");
        }

      
    } catch (e) {
        // Handle errors
        alert('Enter correct Email')
        // Redirect to a new HTML page
        // window.location.href = 'error.html'; // Replace 'error.html' with the desired page URL
      }
}


// Validating Email
function validateEmail(email) {
    const regexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexPattern.test(email);
}


// DRY PRINCIPLE
function errorType(e){
    // to check error type

    if(e instanceof ReferenceError){
        alert("This is a reference error")
    } else if (e instanceof EvalError){
        alert("This is a Evaluation Error")
    } else if (e instanceof TypeError) {
        alert("It's an TypeError. Fix your bug!")
    }
}
