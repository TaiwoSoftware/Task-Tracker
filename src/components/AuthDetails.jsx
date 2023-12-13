import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const AuthDetails = () => {
    const navigate = useNavigate();
    const [authUser, setAuthUser] = useState(null);


    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user)  => {
            if(user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        })
    },[])
    return (
        <div>
            {authUser ? <p> Signed in </p> : <p> Signed out </p>}
        </div>
    );
}

export default AuthDetails;
