 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-analytics.js";
    import { getAuth } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";
    import { getDatabase } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-database.js";
   
  // TODO: Add SDKs for Firebase products that you want to use
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB4npPUtr_u-ChEhXyi-xFxiELkL26lfcU",
    authDomain: "myquizappwithdata.firebaseapp.com",
    projectId: "myquizappwithdata",
    storageBucket: "myquizappwithdata.firebasestorage.app",
    messagingSenderId: "67982778156",
    appId: "1:67982778156:web:3457a6763dd737db729689",
    measurementId: "G-B22DXMCZ0B"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export const auth = getAuth(app);
 export const db = getDatabase(app);