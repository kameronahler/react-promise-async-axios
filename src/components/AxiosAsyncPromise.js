import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function AxiosAsyncPromise() {
  const [users, setUsers] = useState(null)
  const [error, setError] = useState(null)
  const endpointRandom =
    Math.random() > 0.5
      ? 'http://jsonplaceholder.typicode.com/userss'
      : 'http://jsonplaceholder.typicode.com/users'

  const apiRequest = async endpoint => {
    try {
      let res = await axios.get(endpoint)
      if (res.status !== 200) {
        setError(res.statusText)
        return
      } else {
        setUsers(res.data)
      }
    } catch (error) {
      setError(error.message)
      console.error(error.message)
    }
  }

  useEffect(() => {
    apiRequest(endpointRandom)
  }, [])

  if (users) {
    return (
      <>
        <h1>Async Axios promise</h1>
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
        <h1>Async Axios promise</h1>
        <p>{error}</p>
      </>
    )
  }
}
