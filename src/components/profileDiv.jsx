import React from 'react';
import profileImage from './image/user.png';
const ProfileDiv = () => {
    return (
        <div className='profileSetting'>
            <img src={profileImage} alt='profile image' />
            <p>Sign in</p>
        </div>
    );
}

export default ProfileDiv;
