import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const singInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }


    // sing out user 
    const logOutUser = () => {
        setUser(null)
        return signOut(auth)
    }


    useEffect(() => {
        const unseviscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user', currentUser);
            if (currentUser) {
                setUser(currentUser);
                setLoading(false)
            }
        })
        return () => {
            return unseviscribe();
        }
    }, [])

    const userInfo = {
        user,
        loading,
        createUser,
        singInUser,
        logOutUser
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;