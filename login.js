import { auth } from "./firebaseConfig.js";
    import { getAuth,  signInWithEmailAndPassword, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";
  
onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.replace("./dashboard.html");
  }
});
 var loginBtn = document.getElementById("loginBtn")
 loginBtn.addEventListener("click", function () {
 var email = document.getElementById("email")
 var pswd = document.getElementById("pswd")
     signInWithEmailAndPassword(auth, email.value, pswd.value)
         .then((userCredential) => {
             // Signed in 
             const user = userCredential.user;
             alert("successful Login")
             window.location.replace("./dashboard.html")

           
             
             // ...
              
         })
         .catch((error) => {
   console.log("Error code:", error.code);
   console.log("Error message:", error.message);
   alert("Signup Failed: " + error.message); 
 
  
 });
 })