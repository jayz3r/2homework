import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const SinglePost = () => {

   const params = useParams()
   const navigate = useNavigate()

  return (
    <div>SinglePost {params.id}
        <button onClick={() => navigate(-1)}>Previous</button>
    </div>
  )
}

export default SinglePost