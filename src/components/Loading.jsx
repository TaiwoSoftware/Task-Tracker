import React from 'react';
import loading from '../components/image/loading.gif';
const Loading = () => {
    return (
        <div className='loading'>
            <img src={loading} alt="loading image" />
            <p> Your request is processing </p>
        </div>
    );
}

export default Loading;
