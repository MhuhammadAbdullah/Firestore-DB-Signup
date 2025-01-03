// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// // Firebase Configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC8FWZUGW7MT5l0JRcY949HtVjGFpORO68",
//   authDomain: "smit-firebase-project-e6c21.firebaseapp.com",
//   projectId: "smit-firebase-project-e6c21",
//   storageBucket: "smit-firebase-project-e6c21.appspot.com",
//   messagingSenderId: "580046850281",
//   appId: "1:580046850281:web:e09d648db16b1605d1c878"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);




// // Get the current logged-in user
// const user = JSON.parse(localStorage.getItem("user"));

// if (user) {
//   const userId = user.uid;

//   // Get the Firestore document for the current user
//   const userDocRef = doc(db, "User Data", userId);

//   // Fetch the user data
//   getDoc(userDocRef).then((docSnap) => {
//     if (docSnap.exists()) {
//       const userData = docSnap.data();

//       // Display user data inside the profile card
//       document.getElementById("username").textContent = userData.username;
//       document.getElementById("email").textContent = userData.email;
//       document.getElementById("uid").textContent = userData.uid;
//       document.getElementById("createdAt").textContent = userData.createdAt;

//     } else {
//       console.log("No such document!");
//     }
//   }).catch((error) => {
//     console.error("Error getting document: ", error);
//   });
// } else {
//   console.log("No user data found.");
// }

// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
// import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// // Firebase Configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC8FWZUGW7MT5l0JRcY949HtVjGFpORO68",
//   authDomain: "smit-firebase-project-e6c21.firebaseapp.com",
//   projectId: "smit-firebase-project-e6c21",
//   storageBucket: "smit-firebase-project-e6c21.appspot.com",
//   messagingSenderId: "580046850281",
//   appId: "1:580046850281:web:e09d648db16b1605d1c878"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// // Get the current logged-in user
// const user = JSON.parse(localStorage.getItem("user"));

// if (user) {
//   const userId = user.uid;

//   // Get the Firestore document for the current user
//   const userDocRef = doc(db, "User Data", userId);

//   // Fetch the user data
//   getDoc(userDocRef).then((docSnap) => {
//     if (docSnap.exists()) {
//       const userData = docSnap.data();

//       // Display user data inside the profile card
//       document.getElementById("username").textContent = userData.username || "No username available";
//       document.getElementById("email").textContent = userData.email || "No email available";
//       document.getElementById("uid").textContent = userData.uid || "No UID available";
//       document.getElementById("createdAt").textContent = userData.createdAt || "No creation date available";

//     } else {
//       console.log("No such document!");
//     }
//   }).catch((error) => {
//     console.error("Error getting document: ", error);
//   });
// } else {
//   console.log("No user data found.");
// }




// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
// import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// // Firebase Configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC8FWZUGW7MT5l0JRcY949HtVjGFpORO68",
//   authDomain: "smit-firebase-project-e6c21.firebaseapp.com",
//   projectId: "smit-firebase-project-e6c21",
//   storageBucket: "smit-firebase-project-e6c21.appspot.com",
//   messagingSenderId: "580046850281",
//   appId: "1:580046850281:web:e09d648db16b1605d1c878"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// // Get the current logged-in user
// const user = JSON.parse(localStorage.getItem("user"));

// if (user) {
//   const userId = user.uid;

//   // Get the Firestore document for the current user
//   const userDocRef = doc(db, "User Data", userId);

//   // Fetch the user data
//   getDoc(userDocRef).then((docSnap) => {
//     if (docSnap.exists()) {
//       const userData = docSnap.data();

//       // Display user data inside the profile card
//       document.getElementById("username").textContent = userData.username || "No username available";
//       document.getElementById("email").textContent = userData.email || "No email available";
//       document.getElementById("uid").textContent = userData.uid || "No UID available";
//       document.getElementById("createdAt").textContent = userData.createdAt || "No creation date available";

//     } else {
//       console.log("No such document!");
//     }
//   }).catch((error) => {
//     console.error("Error getting document: ", error);
//   });
// } else {
//   console.log("No user data found.");
// }




// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
// import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// // Firebase Configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC8FWZUGW7MT5l0JRcY949HtVjGFpORO68",
//   authDomain: "smit-firebase-project-e6c21.firebaseapp.com",
//   projectId: "smit-firebase-project-e6c21",
//   storageBucket: "smit-firebase-project-e6c21.appspot.com",
//   messagingSenderId: "580046850281",
//   appId: "1:580046850281:web:e09d648db16b1605d1c878"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// // Get the current logged-in user
// const user = JSON.parse(localStorage.getItem("user"));

// if (user) {
//   const userId = user.uid;

//   // Get the Firestore document for the current user
//   const userDocRef = doc(db, "UserData", userId);

//   // Fetch the user data
//   getDoc(userDocRef).then((docSnap) => {
//     if (docSnap.exists()) {
//       const userData = docSnap.data();

//       // Display user data inside the profile card
//       document.getElementById("username").textContent = userData.username || "No username available";
//       document.getElementById("email").textContent = userData.email || "No email available";
//       document.getElementById("uid").textContent = userData.uid || "No UID available";
//       document.getElementById("createdAt").textContent = userData.createdAt || "No creation date available";
//     } else {
//       console.log("No such document!");
//     }
//   }).catch((error) => {
//     console.error("Error getting document: ", error);
//   });
// } else {
//   console.log("No user data found.");
// }















// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
// import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// // Firebase Configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC8FWZUGW7MT5l0JRcY949HtVjGFpORO68",
//   authDomain: "smit-firebase-project-e6c21.firebaseapp.com",
//   projectId: "smit-firebase-project-e6c21",
//   storageBucket: "smit-firebase-project-e6c21.appspot.com",
//   messagingSenderId: "580046850281",
//   appId: "1:580046850281:web:e09d648db16b1605d1c878"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// // Check if user data is available in localStorage
// const user = JSON.parse(localStorage.getItem("user"));

// if (user) {
//   const userId = user.uid; // Get the user ID from localStorage

//   // Get the Firestore document for the current user
//   const userDocRef = doc(db, "UserData", userId);

//   // Fetch the user data
//   getDoc(userDocRef)
//     .then((docSnap) => {
//       if (docSnap.exists()) {
//         const userData = docSnap.data();

//         // Display user data inside the profile card
//         document.getElementById("username").textContent = userData.username || "No username available";
//         document.getElementById("email").textContent = userData.email || "No email available";
//         document.getElementById("uid").textContent = userData.uid || "No UID available";
//         document.getElementById("createdAt").textContent = userData.createdAt || "No creation date available";
//       } else {
//         console.log("No such document found in Firestore!");
//       }
//     })
//     .catch((error) => {
//       console.error("Error fetching user data:", error);
//     });
// } else {
//   console.log("User not logged in or no data found in localStorage.");
// }










// import { 
//   initializeApp 
// } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
// import { 
//   getFirestore, 
//   collection, 
//   getDocs 
// } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// // Firebase Configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC8FWZUGW7MT5l0JRcY949HtVjGFpORO68",
//   authDomain: "smit-firebase-project-e6c21.firebaseapp.com",
//   projectId: "smit-firebase-project-e6c21",
//   storageBucket: "smit-firebase-project-e6c21.appspot.com",
//   messagingSenderId: "580046850281",
//   appId: "1:580046850281:web:e09d648db16b1605d1c878"
// };

// // Initialize Firebase App and Firestore
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// // Function to Fetch Data from Firestore
// async function fetchData() {
//   try {
//     // Reference to Firestore collection
//     const querySnapshot = await getDocs(collection(db, "User Data"));

//     // Loop through each document
//     querySnapshot.forEach((doc) => {
//       const data = doc.data();
//       displayData(data);
//     });
//   } catch (error) {
//     console.error("Error fetching data from Firestore:", error);
//   }
// }

// // Function to Display Data in HTML
// function displayData(data) {
//   const dataContainer = document.getElementById("data-container");

//   // Create a new div for each user
//   const userDiv = document.createElement("div");
//   userDiv.innerHTML = `
//     <p><strong>Username:</strong> ${data.username}</p>
//     <p><strong>Email:</strong> ${data.email}</p>
//     <p><strong>UID:</strong> ${data.uid}</p>
//     <p><strong>Created At:</strong> ${data.createdAt}</p>
//     <hr>
//   `;
//   dataContainer.appendChild(userDiv);
// }

// // Fetch Data on Page Load
// document.addEventListener("DOMContentLoaded", () => {
//   fetchData();
// });















// import { 
//   initializeApp 
// } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
// import { 
//   getFirestore, 
//   collection, 
//   getDocs 
// } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
// import {
//   getAuth,
//   signOut,
//   onAuthStateChanged,
// } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// // Firebase Configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC8FWZUGW7MT5l0JRcY949HtVjGFpORO68",
//   authDomain: "smit-firebase-project-e6c21.firebaseapp.com",
//   projectId: "smit-firebase-project-e6c21",
//   storageBucket: "smit-firebase-project-e6c21.appspot.com",
//   messagingSenderId: "580046850281",
//   appId: "1:580046850281:web:e09d648db16b1605d1c878",
// };

// // Initialize Firebase App, Firestore, and Auth
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);

// // Function to Fetch Data from Firestore
// async function fetchData() {
//   try {
//     const querySnapshot = await getDocs(collection(db, "User Data"));

//     // Clear existing data
//     const dataContainer = document.getElementById("data-container");
//     dataContainer.innerHTML = "";

//     // Loop through documents
//     querySnapshot.forEach((doc) => {
//       const data = doc.data();

//       // Only show data if it has valid fields
//       if (data && data.username && data.email) {
//         displayData(data);
//       }
//     });
//   } catch (error) {
//     console.error("Error fetching data from Firestore:", error);
//   }
// }

// // Function to Display Data in Cards
// function displayData(data) {
//   const dataContainer = document.getElementById("data-container");

//   const card = document.createElement("div");
//   card.className = "card";
//   card.innerHTML = `
//     <div class="card-content">
//       <h2>${data.username}</h2>
//       <p><strong>Email:</strong> ${data.email}</p>
//       <p><strong>UID:</strong> ${data.uid}</p>
//       <p><strong>Created At:</strong> ${data.createdAt}</p>
//     </div>
//   `;
//   dataContainer.appendChild(card);
// }

// // Logout Functionality
// document.getElementById("logout-btn").addEventListener("click", () => {
//   signOut(auth)
//     .then(() => {
//       alert("You have been logged out.");
//       window.location.href = "index.html"; // Redirect to login page
//     })
//     .catch((error) => {
//       console.error("Error during logout:", error);
//     });
// });

// // Check User Authentication State
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is logged in
//     fetchData();
//   } else {
//     // No user is logged in
//     alert("Please log in first.");
//     window.location.href = "index.html";
//   }
// });












// import { 
//   initializeApp 
// } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
// import { 
//   getFirestore, 
//   collection, 
//   getDocs 
// } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
// import {
//   getAuth,
//   signOut,
//   onAuthStateChanged,
// } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// // Firebase Configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC8FWZUGW7MT5l0JRcY949HtVjGFpORO68",
//   authDomain: "smit-firebase-project-e6c21.firebaseapp.com",
//   projectId: "smit-firebase-project-e6c21",
//   storageBucket: "smit-firebase-project-e6c21.appspot.com",
//   messagingSenderId: "580046850281",
//   appId: "1:580046850281:web:e09d648db16b1605d1c878",
// };

// // Initialize Firebase App, Firestore, and Auth
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);

// // Function to Fetch Data from Firestore
// async function fetchData() {
//   try {
//     const querySnapshot = await getDocs(collection(db, "User Data"));

//     // Clear existing data
//     const dataContainer = document.getElementById("data-container");
//     dataContainer.innerHTML = "";

//     // Loop through documents
//     querySnapshot.forEach((doc) => {
//       const data = doc.data();

//       // Only show data if it has valid fields
//       if (data && data.username && data.email) {
//         displayData(data);
//       }
//     });
//   } catch (error) {
//     Swal.fire({
//       icon: "error",
//       title: "Error",
//       text: "Failed to fetch data from Firestore.",
//     });
//   }
// }

// // Function to Display Data in Cards
// function displayData(data) {
//   const dataContainer = document.getElementById("data-container");

//   const card = document.createElement("div");
//   card.className = "card";
//   card.innerHTML = `
//     <div class="card-content">
//       <h2>${data.username}</h2>
//       <p><strong>Email:</strong> ${data.email}</p>
//       <p><strong>UID:</strong> ${data.uid}</p>
//       <p><strong>Created At:</strong> ${data.createdAt}</p>
//     </div>
//   `;
//   dataContainer.appendChild(card);
// }

// // Logout Functionality
// document.getElementById("logout-btn").addEventListener("click", () => {
//   Swal.fire({
//     title: "Are you sure?",
//     text: "You will be logged out.",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes, logout",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       signOut(auth)
//         .then(() => {
//           Swal.fire({
//             icon: "success",
//             title: "Logged Out",
//             text: "You have been logged out.",
//           }).then(() => {
//             window.location.href = "index.html"; // Redirect to login page
//           });
//         })
//         .catch((error) => {
//           Swal.fire({
//             icon: "error",
//             title: "Error",
//             text: "Logout failed.",
//           });
//         });
//     }
//   });
// });

// // Check User Authentication State
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     fetchData();
//   } else {
//     Swal.fire({
//       icon: "info",
//       title: "Not Logged In",
//       text: "Please log in first.",
//     }).then(() => {
//       window.location.href = "index.html";
//     });
//   }
// });

// // Show Loader
// async function fetchData() {
//   const loader = document.getElementById("loader");
//   loader.style.display = "block"; // Show loader
//   const dataContainer = document.getElementById("data-container");
//   dataContainer.innerHTML = ""; // Clear previous data

//   try {
//     const querySnapshot = await getDocs(collection(db, "User Data"));

//     // Hide loader after data is fetched
//     loader.style.display = "none";

//     querySnapshot.forEach((doc) => {
//       const data = doc.data();

//       // Only show data if it has valid fields
//       if (data && data.username && data.email) {
//         displayData(data);
//       }
//     });

//     // If no data found, show message
//     if (dataContainer.innerHTML === "") {
//       Swal.fire({
//         icon: "info",
//         title: "No Data",
//         text: "No data available to display.",
//       });
//     }
//   } catch (error) {
//     loader.style.display = "none"; // Hide loader if an error occurs
//     Swal.fire({
//       icon: "error",
//       title: "Error",
//       text: "Failed to fetch data from Firestore.",
//     });
//   }
// }












import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8FWZUGW7MT5l0JRcY949HtVjGFpORO68",
  authDomain: "smit-firebase-project-e6c21.firebaseapp.com",
  projectId: "smit-firebase-project-e6c21",
  storageBucket: "smit-firebase-project-e6c21.appspot.com",
  messagingSenderId: "580046850281",
  appId: "1:580046850281:web:e09d648db16b1605d1c878",
};

// Initialize Firebase App, Firestore, and Auth
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Function to Fetch Data from Firestore
async function fetchData() {
  const loader = document.getElementById("loader");
  const dataContainer = document.getElementById("data-container");

  loader.style.display = "block"; // Show loader
  dataContainer.innerHTML = ""; // Clear previous data

  try {
    const querySnapshot = await getDocs(collection(db, "User Data"));

    loader.style.display = "none"; // Hide loader after data is fetched

    if (querySnapshot.empty) {
      Swal.fire({
        icon: "info",
        title: "No Data",
        text: "No data available to display.",
      });
      return;
    }

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data && data.username && data.email) {
        displayData(data);
      }
    });
  } catch (error) {
    loader.style.display = "none"; // Hide loader if an error occurs
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Failed to fetch data from Firestore.",
    });
  }
}

// Function to Display Data in Cards
function displayData(data) {
  const dataContainer = document.getElementById("data-container");

  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <div class="card-content">
      <h2>${data.username}</h2>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>UID:</strong> ${data.uid}</p>
      <p><strong>Created At:</strong> ${data.createdAt}</p>
    </div>
  `;
  dataContainer.appendChild(card);
}

// Logout Functionality
document.getElementById("logout-btn").addEventListener("click", () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You will be logged out.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, logout",
  }).then((result) => {
    if (result.isConfirmed) {
      signOut(auth)
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Logged Out",
            text: "You have been logged out.",
          }).then(() => {
            window.location.href = "index.html"; // Redirect to login page
          });
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Logout failed.",
          });
        });
    }
  });
});

// Check User Authentication State
onAuthStateChanged(auth, (user) => {
  if (user) {
    fetchData();
  } else {
    Swal.fire({
      icon: "info",
      title: "Not Logged In",
      text: "Please log in first.",
    }).then(() => {
      window.location.href = "index.html";
    });
  }
});
