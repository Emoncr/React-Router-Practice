import React, { useEffect, useState } from 'react'
import Users from '../Users/Users';

export const Home = () => {

  const [users, setUser] = useState([]);
  useEffect(() => {
    async function loadUser() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
      return res.json();
    }
    loadUser().then((data) => {
      setUser(data)
    })
  }, [])
  return (
    <>
      {
        users.map(user =><Users key = {user.id} Userprops={user} ></Users>)
      }
    </>
  )
}

export default Home