import { useState, useEffect } from 'react';
import firebaseInitialize from '../pages/Authentication/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

firebaseInitialize();

const useFirebase = () => {
    const [customer, setCustomer] = useState({});
    const [loading, setLoading] = useState(true);

    const auth = getAuth();

    // create user with email and password
    const createUser = (email, password) => {
        setLoading(true);
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
            })
            .finally(() => setLoading(false));

    }

    // sign in user
    const signIn = (email, password) => {
        setLoading(true);
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
            })
            .finally(() => setLoading(false));
    }

    // observe user
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCustomer(user);
                // ...
            } else {
                setCustomer({});
            }
            setLoading(false)
        });

        return () => unsubscribed

    }, []);

    // log out user
    const logOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                console.log('logout ');
                setCustomer({});
            })
            .catch((error) => {
                // An error happened.
            })
            .finally(() => setLoading(false));
    }

    return {
        customer,
        createUser,
        signIn,
        logOut,
        loading
    }
}

export default useFirebase;