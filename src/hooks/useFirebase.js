import { useState, useEffect } from 'react';
import firebaseInitialize from '../pages/Authentication/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

firebaseInitialize();

const useFirebase = () => {
    const [portalUser, setPortalUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false)
    const [authToken, setAuthToken] = useState('');

    let navigate = useNavigate()

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    // create user with email and password
    const createPortalUser = (email, password, name) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name }
                setPortalUser(newUser);
                navigate('/')
                setAuthError('')
                // save user
                savePortalUser(email, name, 'POST')
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
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
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                let destination = location?.state?.from || "/"
                navigate(destination);
                setAuthError('');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage);
            })
            .finally(() => setLoading(false));
    }

    // google sign in
    const signinWithGoogle = (location) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                let destination = location?.state?.from || "/"
                navigate(destination);
                const user = result.user;
                savePortalUser(user.email, user.displayName, 'PUT')
                setPortalUser(user);
            }).catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage);
            })
            .finally(() => setLoading(false));
    }

    // observe user
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setPortalUser(user);
                getIdToken(user)
                    .then((idToken) => {
                        setAuthToken(idToken)
                    })
            } else {
                setPortalUser({});
            }
            setLoading(false)
        });

        return () => unsubscribed

    }, [auth]);

    // check if user is admin or not
    useEffect(() => {
        fetch(`https://doctors-portal-server-2001.herokuapp.com/users/${portalUser.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })
    }, [portalUser.email])



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

    const savePortalUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('https://doctors-portal-server-2001.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                console.log('User saved successfully')
            })
    }

    return {
        portalUser,
        admin,
        authToken,
        createPortalUser,
        portalUserSignin,
        signinWithGoogle,
        authError,
        portalUserLogout,
        loading
    }
}

export default useFirebase;