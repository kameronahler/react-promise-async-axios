import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function AxiosPromise() {
  const [users, setUsers] = useState(null)
  const [error, setError] = useState(null)
  const endpointRandom =
    Math.random() > 0.5
      ? 'https://http://jsonplaceholder.typicode.com/userss'
      : 'http://jsonplaceholder.typicode.com/users'

  const apiRequest = endpoint => {
    axios
      .get(endpoint)
      .then(res => {
        if (res.status !== 200) {
          setError(res.statusText)
          return
        } else {
          setUsers(res.data)
        }
      })
      .catch(error => {
        setError(error.message)
        console.error(error.message)
      })
  }

  useEffect(() => {
    apiRequest(endpointRandom)
  }, [])

  if (users) {
    return (
      <>
        <h1>Basic Axios promise</h1>
        <ul>
          {users.map(user => {
            return <li key={user.id}>{user.name}</li>
          })}
        </ul>
      </>
    )
  } else {
    return (
      <>
        <h1>Basic Axios promise</h1>
        <p>{error}</p>
      </>
    )
  }
}
