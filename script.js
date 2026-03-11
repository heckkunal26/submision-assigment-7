const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const phoneInput = document.getElementById("phone")
const passwordInput = document.getElementById("password")

const form = document.getElementById("registerForm")

const strengthBar = document.getElementById("strengthBar")
const togglePassword = document.getElementById("togglePassword")

// NAME VALIDATION
nameInput.addEventListener("input", () => {

let name = nameInput.value

if(name.length < 3){
document.getElementById("nameError").innerText="Name must be at least 3 characters"
}else{
document.getElementById("nameError").innerText=""
}

})

// EMAIL VALIDATION
emailInput.addEventListener("input", () => {

let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

if(!emailInput.value.match(emailPattern)){
document.getElementById("emailError").innerText="Enter valid email"
}else{
document.getElementById("emailError").innerText=""
}

})

// PHONE VALIDATION
phoneInput.addEventListener("input", () => {

let phonePattern = /^[0-9]{10}$/

if(!phoneInput.value.match(phonePattern)){
document.getElementById("phoneError").innerText="Enter valid 10 digit phone"
}else{
document.getElementById("phoneError").innerText=""
}

})

// PASSWORD STRENGTH
passwordInput.addEventListener("input", () => {

let pass = passwordInput.value
let strength = 0

if(pass.length >= 6) strength++
if(/[A-Z]/.test(pass)) strength++
if(/[0-9]/.test(pass)) strength++
if(/[^A-Za-z0-9]/.test(pass)) strength++

let width = strength * 25
strengthBar.style.width = width + "%"

})

// SHOW HIDE PASSWORD
togglePassword.addEventListener("click", () => {

if(passwordInput.type === "password"){
passwordInput.type = "text"
togglePassword.innerText="Hide"
}else{
passwordInput.type = "password"
togglePassword.innerText="Show"
}

})

// FORM SUBMIT
form.addEventListener("submit", (e)=>{

e.preventDefault()

let submissions = JSON.parse(localStorage.getItem("submissions")) || []

let userData = {

name:nameInput.value,
email:emailInput.value,
phone:phoneInput.value,
password:passwordInput.value

}

submissions.push(userData)

localStorage.setItem("submissions",JSON.stringify(submissions))

alert("Registration Successful!")

form.reset()
strengthBar.style.width="0%"

})
