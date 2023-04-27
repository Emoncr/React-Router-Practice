import React from 'react'
import "./users.css"
import { Link } from 'react-router-dom'
const Users = (props) => {
    const {name, email, id} = props.Userprops
  return (
    <div className='user'>
        <h1>Name: {name} </h1>
        <h4>Email: {email} </h4>
        <h4>User ID: {id} </h4>
        <Link to={`/User/${id}`}><button className='info_btn'>More Information</button></Link>
    </div>
  )
}

export default Users    