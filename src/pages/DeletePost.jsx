import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const DeletePost = () => {
    // const params = useParams()
    const location = useLocation()
    console.log(location.state);
  return (
    <div>
        <h2>
        Вы действительно хотите удалить: 
        {location.state.title}
        </h2>
        </div>
  )
}

export default DeletePost