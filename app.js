import { signInWithPopup, GoogleAuthProvider, auth } from "./firebase.js";

const provider = new GoogleAuthProvider();
const signupWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user);
      alert(user.displayName)
      alert(user.photoURL)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(error);
    });
};

const googleBtn = document.getElementById("loginWithGoolgeBtn");
googleBtn.addEventListener("click", signupWithGoogle);

let userImage = document.getElementById('user-image')
userImage.innerHTML =`<img src=${user.photoURL} alt="">`
