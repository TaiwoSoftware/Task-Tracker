import React, { useState } from 'react';
import loading from '../components/image/loading.gif';
import { useNavigate } from 'react-router-dom';
const Loading = () => {

    const [location, setLocation] = ('/addTask')

    const navigate = useNavigate();

    useState(() => {
        setInterval(() => {
            navigate('/dashboard')
        }, 2000)
    },[]);
    return (
        <div className='loading'>
            <img src={loading} alt="loading image" />
            <p> Your request is processing </p>
        </div>
    );
}

export default Loading;
