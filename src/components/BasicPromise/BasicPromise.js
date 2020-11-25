import React, { useState, useEffect } from 'react'

export default function BasicPromise() {
  const [users, setUsers] = useState([])

  const getUsers = () => {
    fetch('http://jsonplaceholder.typicode.com/users').then(response => {
      if (response.status !== 200) {
        console.log(response.status)
        return
      }

      response.json().then(json => {
        setUsers(json)
      })
    })
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <h1>Basic promise without async</h1>
      <ul>
        {users.map(user => {
          return <li key={user.id}>{user.name}</li>
        })}
      </ul>
    </>
  )
}
