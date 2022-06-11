import { useState, useEffect } from 'react';
import firebaseInitialize from '../pages/Authentication/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

firebaseInitialize();

const useFirebase = () => {
    const [portalUser, setPortalUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();

    // create user with email and password
    const createPortalUser = (email, password) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage);
            })
            .finally(() => setLoading(false));

    }

    // sign in user
    const portalUserSignin = (email, password, location) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
           
    }

    // observe user
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setPortalUser(user);
                // ...
            } else {
                setPortalUser({});
            }
            setLoading(false)
        });

        return () => unsubscribed

    }, [auth]);

    // log out user
    const portalUserLogout = () => {
        signOut(auth)
            .then(() => {
                setPortalUser({});
            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage);
            })
            .finally(() => setLoading(false));
    }

    return {
        portalUser,
        createPortalUser,
        portalUserSignin,
        setAuthError,
        authError,
        portalUserLogout,
        setLoading,
        loading
    }
}

export default useFirebase;