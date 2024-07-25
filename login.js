// login.js

import { auth } from './firebase.js';
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js';
import { signOut } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js';

document.getElementById('login-btn').addEventListener('click', function() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert('Login successful!');
      // Redirect to user dashboard or admin dashboard based on user role
      window.location.href = 'Categories.html'; // Change this to your redirect URL
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error: ${errorMessage}`);
    });
});


// logout.js



document.getElementById('logout-btn').addEventListener('click', function(event) {
  event.preventDefault();

  signOut(auth).then(() => {
    // Sign-out successful.
    alert('Logged out successfully!');
    window.location.href = 'login.html'; // Redirect to login page or any other page
  }).catch((error) => {
    // An error happened.
    console.error('Error signing out:', error);
    alert('Error signing out. Please try again.');
  });
});
