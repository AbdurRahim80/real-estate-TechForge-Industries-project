import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import  { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
export const AuthCotext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const singInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }


    const logOut = () => {
        setLoading(true);
        signOut(auth);
    }

    const updateUserProfile = (object)=> {
        setLoading(true);
        return updateProfile(auth.currentUser, object);
    }

    useEffect(() => {
        const onSubcribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("currentUser", currentUser);
            setLoading(false);
        })
        return () => {
            onSubcribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        signInUser,
        singInWithGoogle,
        logOut,
        githubLogin,
        loading,
        updateUserProfile
    }
    return (
        <div>
            <AuthCotext.Provider value={authInfo}>
                {children}
            </AuthCotext.Provider>
        </div>
    );
};

export default AuthProvider;











