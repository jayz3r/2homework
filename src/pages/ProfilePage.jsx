import React from 'react'
import { useLocation } from 'react-router-dom'


const ProfilePage = () => {
    const {state} = useLocation()

    // console.log(loc);
    return (
    <div>Welcome {state}</div>
  )
}

export default ProfilePage