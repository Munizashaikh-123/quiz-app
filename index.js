 // Import the functions you need from the SDKs you need
import { auth } from "./firebaseConfig.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.replace("./dashboard.html");
  }
});
  var signupBtn = document.getElementById("signupbtn")
var loginBtn = document.getElementById("loginbtn")



signupBtn.addEventListener("click", function () {
    
var email = document.getElementById("email")
var pswd = document.getElementById("pswd")

createUserWithEmailAndPassword(auth, email.value, pswd.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

      alert("Account Created Successfully!")
      window.location.replace("./dashboard.html");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

  alert(errorMessage)
    // ..
  })
});

loginBtn.addEventListener("click", function () {
window.location.replace("./login.html")

 
});