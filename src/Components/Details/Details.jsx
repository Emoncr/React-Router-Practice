import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./details.css"
const Details = () => {
    let { userId } = useParams();
    const [userDetail, setUserDetail] = useState({});
    useEffect(() => {
        async function loadUserDetail() {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            return res.json();
        }
        loadUserDetail().then((UserData) => {
            if (UserData) {
                setUserDetail(UserData)
            }
        })
    }, [])

    const { name, email, company, address, username, phone, id } = userDetail;

    return (
        <div className='details_container'>
            <h1>Name: {name} </h1>
            <h3>Email: {email} </h3>
            <h3>User Name: {username} </h3>
            <h5>user id: {id}</h5>
            <h3>Phone: {phone} </h3>
            <h2>Users more details...</h2>
            <h1>Company Name: {(company) ? company["name"] : "No name"}</h1>
            {
                (address) ?
                    <div>
                        <h4>City: {address.city} </h4>
                        <h4>street: {address.street} </h4>
                    </div>
                    : ""
            }

        </div>
    )
}

export default Details