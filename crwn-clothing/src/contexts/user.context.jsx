import { createContext, useState, useEffect } from 'react'; //createContext from 'react';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../utils/firebase/firebase.utils.js';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});


export const UserProvider = ({ children }) =>{
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() =>{
        const unsubscribe = onAuthStateChangedListener((user) =>{
            if(user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unsubscribe; // Cleanup subscription on unmount
    }, [])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}