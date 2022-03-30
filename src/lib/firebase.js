import {firebaseConfig} from "./firebaseConfig.js";
import {userSession} from "../../static/UserAuth.js";
import {isLoggedIn} from "../../static/UserAuth.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js'
import {
    getDatabase,
    set,
    ref,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-database.js'
import {
    getAuth,
    createUserWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js'
import { signInWithEmailAndPassword,signOut } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp(firebaseConfig)
//const analytics = getAnalytics(app)
const database = getDatabase(app)
const auth = getAuth()

const storeUserSessionRedirect = (user, url) => {
    // create user session Signed in
    userSession.set(user)
    isLoggedIn.set(true)
    window.location.href = '/'+url
}

const destroyUserSessionRedirect = () => {
    // create user session Signed in
    userSession.set({})
    isLoggedIn.set(false)
    window.location.href = '/'
}


export  const createAccount = (e) => {
    const data = new FormData(e.target);

    const email = data.get('email');

    const phoneNumber = data.get('phone');

    const role = data.get('role');

    const fullName = data.get('name');

    const password = data.get('password');

    createUserWithEmailAndPassword(auth, email, password, phoneNumber, role, fullName)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user

            set(ref(database, 'users/' + user.uid), {
                phoneNumber: phoneNumber,
                role: role,
                fullName: fullName,
                email: email,
            })

            alert('user created!')
            // ...
        })
        .catch((error) => {
            // const errorCode = error.code
            const errorMessage = error.message

            alert(errorMessage)
        });
}

//sign in user with email and password
export  const signin = (e) => {

    const data = new FormData(e.target);

    const email = data.get('email');

    const password = data.get('password');

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            storeUserSessionRedirect(userCredential.user,'admin');
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage,errorCode)
        });
}

// signout user
export const signout = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        destroyUserSessionRedirect()
    }).catch((error) => {
        // An error happened.
        alert(error.message)
    });
}
