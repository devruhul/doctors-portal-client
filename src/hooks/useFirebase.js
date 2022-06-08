import { useState, useEffect } from 'react';
import firebaseInitialize from '../pages/Authentication/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

firebaseInitialize();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();

    // create user with email and password
    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorCode, errorMessage);
                // ..
            });

    }

    // sign in user
    const signIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorCode, errorMessage);
            });
    }

    // observe user
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // ...
            } else {
                setUser({});
            }
        });

        return () => unsubscribed

    }, [auth]);

    // log out user
    const logOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                console.log('logout ');
                setUser({});
            })
            .catch((error) => {
                // An error happened.
            });
    }

    return {
        user,
        signIn,
        logOut,
        createUser
    }
}

export default useFirebase;