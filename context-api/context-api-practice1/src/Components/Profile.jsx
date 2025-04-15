import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext);
    if(!user) return <div>Please Login</div>

    return (
        <div className='text-lg font-serif '>Welcome {user.username} !</div>
    )
}

export default Profile
