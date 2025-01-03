import { 
  initializeApp 
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  sendPasswordResetEmail, 
  sendEmailVerification, 
  onAuthStateChanged, 
  signOut 
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8FWZUGW7MT5l0JRcY949HtVjGFpORO68",
  authDomain: "smit-firebase-project-e6c21.firebaseapp.com",
  projectId: "smit-firebase-project-e6c21",
  storageBucket: "smit-firebase-project-e6c21.appspot.com",
  messagingSenderId: "580046850281",
  appId: "1:580046850281:web:e09d648db16b1605d1c878"
};

// Initialize Firebase App and Authentication
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Function to Display Alerts
function showAlert(icon, title, text, redirectUrl = null) {
  Swal.fire({
    icon: icon,
    title: title,
    text: text,
    showConfirmButton: true
  }).then(() => {
    if (redirectUrl) {
      window.location = redirectUrl; // Redirect if URL is provided
    }
  });
}

// Sign-Up Functionality
document.getElementById("sign-up-form").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the default form submission

  let email = document.getElementById("sign-up-email").value.trim();
  let password = document.getElementById("sign-up-password").value.trim();
  let username = document.getElementById("sign-up-username").value.trim();

  // Check if all fields are filled
  if (!email || !password || !username) {
    showAlert("warning", "Missing Information", "Please fill all the required fields.");
    return;
  }

  // Create User with email and password
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (res) => {
      const user = res.user;

      // Create a document in Firestore with the user data
      const userData = {
        username: username,
        email: email,
        uid: user.uid,
        createdAt: new Date().toISOString()
      };

      try {
        // Save user data to Firestore
        await setDoc(doc(db, "User Data", user.uid), userData);
        console.log("User data saved to Firestore.");

        // Send Email Verification
        await sendEmailVerification(user);
        showAlert("success", "Account Created!", "Verification email sent! Please check your inbox.");

        // Clear the form fields after successful sign-up
        document.getElementById("sign-up-form").reset();
      } catch (error) {
        console.error("Error saving user data to Firestore:", error);
        showAlert("error", "Error", "Failed to save user data to Firestore.");
      }
    })
    .catch((error) => {
      console.error("Sign-up error:", error);
      showAlert("error", "Sign-Up Failed", error.message);
    });
});

// Sign-In Functionality
document.getElementById("sign-in-form").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the default form submission

  let email = document.getElementById("sign-in-email").value.trim();
  let password = document.getElementById("sign-in-password").value.trim();

  // Check if all fields are filled
  if (!email || !password) {
    showAlert("warning", "Missing Information", "Please enter your email and password.");
    return;
  }

  // Sign-In with email and password
  signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      const user = res.user;

      if (user.emailVerified) {
        // Store user data in localStorage
        localStorage.setItem("user", JSON.stringify({
          email: user.email,
          uid: user.uid
        }));

        // Redirect to the profile page after successful login
        showAlert("success", "Login Successful!", "Welcome back, " + user.email + "!", "profile.html");
        
        // Clear the form fields after successful sign-in
        document.getElementById("sign-in-form").reset();
      } else {
        showAlert("warning", "Email Not Verified", "Please verify your email before logging in.");
      }
    })
    .catch((error) => {
      showAlert("error", "Login Failed", error.message);
    });
});

// Forgot Password Link Click Event
document.getElementById("forgot-password-link").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("sign-in-form").style.display = "none";
  document.getElementById("forgot-password-form").style.display = "block";
});

// Handle Password Reset Form
document.getElementById("reset-password-btn").addEventListener("click", () => {
  const email = document.getElementById("forgot-password-email").value.trim();
  if (email) {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        showAlert("success", "Password Reset", "A password reset email has been sent!");
        document.getElementById("forgot-password-form").style.display = "none";
        document.getElementById("sign-in-form").style.display = "block";
        document.getElementById("forgot-password-email").value = ""; // Clear email input
      })
      .catch((error) => {
        showAlert("error", "Error", error.message);
      });
  } else {
    showAlert("warning", "Missing Information", "Please enter your email address.");
  }
});

// Back to Sign In Button
document.getElementById("back-to-sign-in-btn").addEventListener("click", () => {
  document.getElementById("forgot-password-form").style.display = "none";
  document.getElementById("sign-in-form").style.display = "block";
});

// Real-Time Authentication State Listener
document.addEventListener("DOMContentLoaded", () => {
  onAuthStateChanged(auth, (user) => {
    const authStatus = document.getElementById("auth-status");
    if (authStatus) {
      if (user) {
        authStatus.innerText = `Logged in as: ${user.email}`;
      } else {
        authStatus.innerText = "No user logged in.";
      }
    } else {
      console.error("Element with id 'auth-status' not found.");
    }
  });
});


























const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

